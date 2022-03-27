import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Header,
  Title,
  ButtonBox,
  EditButton,
  Body,
  DeleteButton,
  HeaderBody,
  UserTitle,
  CreatedTime,
  Text,
} from './style';
import Delete from '../../assets/images/delete.svg';
import Edit from '../../assets/images/edit.svg';
import { useDispatch, useSelector } from 'react-redux';
import { IPosts } from '../../pages/Main';
import { toast } from 'react-toastify';
import { fetchPosts, selectAllPosts } from '../../actions/Posts';
import { AppDispatch } from '../../redux/store';
import { deletePost } from './../../actions/Posts';

interface ICardProps {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
  onModalChange: (bool: boolean) => void;
  onEditPost: (post: IPosts) => void;
}

const Card = ({
  id,
  username,
  created_datetime,
  title,
  content,
  onModalChange,
  onEditPost,
}: ICardProps): JSX.Element => {
  const [selectedUsername, setSelectedUsername] = useState<string>(username);
  function handleDiffDateTime() {
    const date = new Date(created_datetime);
    const diff = Math.floor(Date.now() - date.getTime());
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const min = Math.floor((diff / 1000 / 60) % 60);
    const sec = Math.floor((diff / 1000) % 60);
    if (day > 0) {
      return `${day} days ago`;
    } else if (hour > 0) {
      return `${hour} hours ago`;
    } else if (min > 0) {
      return `${min} minutes ago`;
    } else {
      return `${sec} seconds ago`;
    }
  }
  const notify = (message: string) => toast.success(message);
  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = () => {
    const confirm = window.confirm(
      'Are you sure you want to delete this post?',
    );
    if (confirm) {
      if (selectedUsername === username) {
        try {
          dispatch(deletePost(id)).unwrap();
          dispatch(fetchPosts()).unwrap();
          notify('Post deleted successfully');
        } catch (error) {
          console.log(error);
          toast.error('Delete failed');
        } finally {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      } else {
        toast.error('You are not authorized to delete this post');
      }
    }
  };

  const posts = useSelector(selectAllPosts);

  const handleEdit = useCallback(() => {
    const post = posts.find((post: IPosts) => post.id === id);
    if (post) {
      onModalChange(true);
      onEditPost(post);
    }
  }, [id, posts, onModalChange, onEditPost]);

  useEffect(() => {
    const getUsername = window.localStorage.getItem('username');
    if (getUsername) {
      setSelectedUsername(getUsername);
    }
  }, []);

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <ButtonBox>
          {selectedUsername === username ? (
            <>
              <DeleteButton onClick={handleDelete}>
                <img src={Delete} alt="Delete Icon" />
              </DeleteButton>
              <EditButton onClick={handleEdit}>
                <img src={Edit} alt="Edit Icon" />
              </EditButton>
            </>
          ) : null}
        </ButtonBox>
      </Header>
      <Body>
        <HeaderBody>
          <UserTitle>@{username}</UserTitle>
          <CreatedTime>{handleDiffDateTime()}</CreatedTime>
        </HeaderBody>
        <Text>{content}</Text>
      </Body>
    </Container>
  );
};

export default Card;
