import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
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

import { useTypedSelector } from 'store';
import PostCard from 'Components/Shared/PostCard';
import { API_BASE_URL } from 'config/constant';
import styles from './PostDetail.module.scss';

const PostDetail = () => {
  let { id } = useParams();
  let postId = -1;
  if (id) {
    postId = parseInt(id);
  }
  const posts = useTypedSelector(state => state.posts);
  const post = posts.find(element => element.id === postId);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  let history = useHistory();

  return post ? (
    <Container className={styles.content_wrapper}>
      <Row>
        <Col>
          <h3>Post</h3>
          <PostCard
            id={postId}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        </Col>
      </Row>

      <Row className={styles.form_wrapper}>
        <Col>
          <h3>Comment</h3>
          <Form>
            <FormGroup>
              <Label for="comment_input" />
              <Input
                id="comment_input"
                type="textarea"
                name="comment"
                onChange={event => setComment(event.target.value)}
                className={styles.textarea}
              />
            </FormGroup>
            <Button
              onClick={event => {
                event.preventDefault();
                setSubmitting(true);
                axios
                  .post(API_BASE_URL + 'posts', {
                    title: comment,
                    body: comment,
                    userId: post.userId
                  })
                  .then(() => {
                    setSubmitting(false);
                    Swal.fire({
                      text: 'Comment Success',
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
              {submitting ? <Spinner /> : 'Submit'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  ) : (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <p>Sorry, this post was not found</p>
    </div>
  );
};

export default PostDetail;
