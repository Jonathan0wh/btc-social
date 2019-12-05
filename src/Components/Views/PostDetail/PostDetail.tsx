import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

import PostCard from 'Components/Shared/PostCard';

import styles from './PostDetail.module.scss';

const PostDetail = () => {
  const post = {
    id: 1,
    title: 'Title 1',
    body: 'test 1',
    userId: 1
  };

  return (
    <Container className={styles.content_wrapper}>
      <Row>
        <Col>
          <h3>Post</h3>
          <PostCard
            id={post.id}
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
                className={styles.textarea}
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PostDetail;
