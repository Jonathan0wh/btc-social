import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';

import PostCard from 'Components/Shared/PostCard';
import { fetchPostsThunk } from 'store/postRedux/actions';
import { useTypedSelector } from 'store';

import styles from './PostList.module.scss';

const PostList = () => {
  const dispatch = useDispatch();
  let posts = useTypedSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, []);

  return (
    <Container className={styles.post_list_container}>
      <Row>
        {posts ? (
          posts.map(post => (
            <Col xs={3} key={post.id}>
              <PostCard
                id={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
                showCommentButton
              />
            </Col>
          ))
        ) : (
          <div />
        )}
      </Row>
    </Container>
  );
};

export default PostList;
