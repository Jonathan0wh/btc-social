import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
  Button
} from 'reactstrap';

import styles from './PostCard.module.scss';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  userId: number;
  showCommentButton?: boolean;
}

const PostCard = ({
  id,
  title,
  body,
  userId,
  showCommentButton = false
}: PostCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={styles.title}>{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>{body}</CardText>
        {showCommentButton && (
          <Button>
            <Link to={`post/${id}`} className={styles.link}>
              Comment
            </Link>
          </Button>
        )}
      </CardBody>
      <CardFooter>Posted by {userId}</CardFooter>
    </Card>
  );
};

export default PostCard;
