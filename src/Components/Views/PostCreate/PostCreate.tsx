import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner
} from 'reactstrap';

import { API_BASE_URL } from 'config/constant';
import styles from './PostCreate.module.scss';

const PostCreate = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  let history = useHistory();

  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h3>Create a Post</h3>
          <Form>
            <FormGroup>
              <Label for="post_title">Title</Label>
              <Input
                id="post_title"
                type="text"
                onChange={event => setTitle(event.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="post_body">Content</Label>
              <Input
                id="post_body"
                type="textarea"
                onChange={event => setBody(event.target.value)}
                className={styles.textarea}
              />
            </FormGroup>

            <FormGroup>
              <Label for="post_userid">My user ID</Label>
              <Input
                id="post_userid"
                type="number"
                onChange={event => setUserId(parseInt(event.target.value))}
              />
            </FormGroup>

            <Button
              onClick={event => {
                event.preventDefault();
                setSubmitting(true);
                axios
                  .post(API_BASE_URL + 'posts', { title, body, userId })
                  .then(() => {
                    setSubmitting(false);
                    Swal.fire({
                      text: 'Post Success',
                      icon: 'success',
                      onClose: () => {
                        history.push('/');
                      }
                    });
                  })
                  .catch(error => {
                    setSubmitting(false);
                    Swal.fire('Error', error, 'error');
                  });
              }}
            >
              {submitting ? <Spinner /> : 'Post'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PostCreate;
