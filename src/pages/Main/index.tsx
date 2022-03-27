import React, { useCallback, useEffect, useState } from 'react';
import Card from '../../components/Card';
import {
  Container,
  Title,
  Header,
  Body,
  ModalQuestion,
  ModalBody,
  ModalTitle,
  ModalInput,
  ModalContent,
  Button,
  ButtonLink,
} from './style';
import { Link } from 'react-router-dom';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import Modal from '../../components/Modal';
import { toast } from 'react-toastify';
import { selectAllPosts, fetchPosts, addNewPost } from '../../actions/Posts';
import { AppDispatch } from '../../redux/store';
import Loading from '../../components/Loading';

export interface IPosts {
  id: number;
  title: string;
  content: string;
  created_datetime: Date;
  username: string;
}

const Main = (): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<IPosts>({} as IPosts);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector((state: RootStateOrAny) => state.posts.status);

  const getlocalStorage = () => {
    const username = localStorage.getItem('username');
    if (username) {
      return username;
    }
    return 'Guest';
  };

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const canSavePost =
    [
      {
        username: getlocalStorage() === selectedPost.username ? true : false,
        title,
        content,
        created_datetime: new Date(),
      },
    ].every(Boolean) && addRequestStatus === 'idle';

  const handleAddPost = useCallback(async () => {
    if (canSavePost) {
      try {
        setAddRequestStatus('pending');
        await dispatch(
          addNewPost({
            username: getlocalStorage(),
            title,
            content,
            created_datetime: new Date(),
          }),
        ).unwrap();
        setTitle('');
        setContent('');
        dispatch(fetchPosts()).unwrap();
        setIsLoading(false);
        toast.success('Post criado com sucesso!');
      } catch (err) {
        toast.error('Failed to save the post');
        return false;
      } finally {
        setAddRequestStatus('idle');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  }, [title, content, canSavePost, dispatch]);

  const handleEditPost = (post: IPosts) => {
    if (post) {
      setModalOpen(true);
      setSelectedPost(post);
    }
  };

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [postStatus, dispatch, posts]);
  return (
    <Container>
      <Modal
        modalOpen={modalOpen}
        postSelected={selectedPost}
        setModalOpen={setModalOpen}
      />
      <Header>
        <Title>CodeLeap Network</Title>
        <Link to="/">
          <ButtonLink>HOME</ButtonLink>
        </Link>
        <Link to="/signup">
          <ButtonLink
            style={{
              right: '160px',
            }}
          >
            SIGN IN
          </ButtonLink>
        </Link>
      </Header>
      <Body>
        <ModalBody>
          <ModalQuestion>What's on your mind?</ModalQuestion>
          <ModalTitle>Title</ModalTitle>
          <ModalInput
            type="text"
            placeholder="Hello word"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setDisabled(e.target.value.length > 0 ? false : true);
            }}
          />
          <ModalTitle>Content</ModalTitle>
          <ModalContent
            placeholder="Content here"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setDisabled(e.target.value.length > 0 ? false : true);
            }}
          />
          <Button
            onClick={handleAddPost}
            disabled={disabled}
            style={{
              backgroundColor: disabled ? '#ddd' : '#000',
              cursor: disabled ? 'not-allowed' : 'pointer',
            }}
          >
            CREATE
          </Button>
        </ModalBody>
        {isLoading ? (
          <Loading isLoading={isLoading} />
        ) : (
          posts.map((card: IPosts) => (
            <Card
              key={card.id}
              id={card.id}
              username={card.username}
              created_datetime={card.created_datetime}
              title={card.title}
              content={card.content}
              onModalChange={handleModal}
              onEditPost={handleEditPost}
            />
          ))
        )}
      </Body>
    </Container>
  );
};

export default Main;
