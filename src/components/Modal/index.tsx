import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updatePost } from '../../actions/Posts';
import { IPosts } from '../../pages/Main';
import { AppDispatch } from '../../redux/store';
import {
  Container,
  ButtonSave,
  ButtonCancel,
  ModalBody,
  ModalContent,
  ModalInput,
  ModalQuestion,
  ModalTitle,
  ErrorMessage,
} from './style';

interface IModalProps {
  modalOpen: boolean;
  setModalOpen: (bool: boolean) => void;
  postSelected: IPosts;
}

const Modal = ({
  modalOpen,
  postSelected,
  setModalOpen,
}: IModalProps): JSX.Element => {
  const [title, setTitle] = useState<string>(postSelected.title);
  const [content, setContent] = useState<string>(postSelected.content);
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const notify = (message: string) => toast.success(message);

  const isAllowToUpdate = (): boolean => {
    const getUsername = localStorage.getItem('username');
    if (getUsername) {
      return getUsername === postSelected.username;
    }
    return false;
  };

  const handleUpdate = async () => {
    if (isAllowToUpdate()) {
      const schema = yup.object().shape({
        title: yup.string().required('Title is required').min(3),
        content: yup.string().required('Content is required').min(3),
      });
      const post = {
        id: postSelected.id,
        username: postSelected.username,
        title,
        content,
        created_datetime: new Date(),
      };
      await schema
        .validate(post, { abortEarly: false })
        .then(() => {
          console.log('valid');
        })
        .catch((err) => {
          setError(err.errors[0]);
        });
      try {
        dispatch(
          updatePost({
            id: postSelected.id,
            username: postSelected.username,
            title,
            content,
            created_datetime: new Date(),
          }),
        ).unwrap();
        setModalOpen(false);
        notify('Update success!');
      } catch (err) {
        toast.error('Update failed!');
      } finally {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  };

  useEffect(() => {
    setTitle(postSelected.title);
    setContent(postSelected.content);
  }, [postSelected]);

  return (
    <Container
      style={{
        display: modalOpen ? 'flex' : 'none',
      }}
    >
      <ModalBody>
        <ModalQuestion>Edit Post</ModalQuestion>
        <ModalTitle>Title</ModalTitle>
        <ModalInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ErrorMessage>{error}</ErrorMessage>
        <ModalTitle>Content</ModalTitle>
        <ModalContent
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <ButtonCancel onClick={() => setModalOpen(false)}>CANCEL</ButtonCancel>
        <ButtonSave onClick={handleUpdate}>SAVE</ButtonSave>
      </ModalBody>
    </Container>
  );
};

export default Modal;
