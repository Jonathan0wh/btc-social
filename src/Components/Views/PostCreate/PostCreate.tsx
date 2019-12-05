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

import styles from './PostCreate.module.scss';

const PostCreate = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h3>Create a Post</h3>
          <Form>
            <FormGroup>
              <Label for="post_title">Title</Label>
              <Input id="post_title" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="post_body">Content</Label>
              <Input
                id="post_body"
                type="textarea"
                className={styles.textarea}
              />
            </FormGroup>
            <FormGroup>
              <Label for="post_userid">My user ID</Label>
              <Input id="post_userid" type="number" />
            </FormGroup>
            <Button>Post</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PostCreate;
