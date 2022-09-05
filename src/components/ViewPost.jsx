import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";

const ViewPost = () => {
  const { id } = useParams();
  const history = useHistory();
  const posts = useSelector((state) => state.posts.posts);
  const post = posts[id - 1];
  console.log(post);
  return (
    <Card style={{ margin: "2rem" }}>
      <Card.Header>{`Post ${post?.id}`}</Card.Header>
      <Card.Body>
        <Card.Title>{post?.title} </Card.Title>
        <Card.Text>{post?.body}</Card.Text>
        <Button variant="primary" onClick={() => history.goBack()}>
          Go Back
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ViewPost;
