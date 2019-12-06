import React from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';

import { useTypedSelector } from 'store';
import { useGetAPIResource } from 'hooks';
import { fetchPosts } from 'store/postRedux/actions';
import PostCard from 'Components/Shared/PostCard';
import { API_BASE_URL } from 'config/constant';

import styles from './PostList.module.scss';

const PostList = () => {
  const posts = useTypedSelector(state => state.posts);
  const { loading, error } = useGetAPIResource(
    API_BASE_URL + 'posts',
    fetchPosts
  );

  if (loading) {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
        <Spinner type="grow" color="secondary" />
      </div>
    );
  } else {
    if (error) {
      return (
        <div className="h-100 d-flex justify-content-center align-items-center">
          <p>Sorry, the following error occured:</p>
          <p>{error}</p>
        </div>
      );
    } else {
      return (
        <Container className={styles.post_list_container}>
          <Row>
            {posts.map(post => (
              <Col xs={3} key={post.id} className={styles.col}>
                <PostCard
                  id={post.id}
                  title={post.title}
                  body={post.body}
                  userId={post.userId}
                  showCommentButton
                />
              </Col>
            ))}
          </Row>
        </Container>
      );
    }
  }
};

export default PostList;
