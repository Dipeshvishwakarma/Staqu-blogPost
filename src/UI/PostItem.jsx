import React from "react";
import { Button, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../features/posts/postSlice";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const show = useSelector((state) => state.posts.showModal);
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "80vh", margin: "1rem" }}>
        <Card.Body>
          <Card.Title>{`Post ${post.id}`}</Card.Title>
          <Card.Text>{post.title}</Card.Text>
          <Link to={`/EditPost/${post.id}`}>
            <Button
              variant="info"
              style={{ marginLeft: "1rem", float: "left", width: "7rem" }}
            >
              Edit
            </Button>
          </Link>
          <Button
            variant="danger"
            onClick={() => dispatch(deletePost({ id: post.id }))}
            style={{ marginRight: "1rem", float: "right", width: "7rem" }}
          >
            Delete
          </Button>
          <Link to={`/ViewPost/${post.id}`}>
            <Button
              variant="outline-primary"
              size="lg"
              style={{ margin: "1rem", width: "24rem" }}
            >
              View Post
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostItem;
