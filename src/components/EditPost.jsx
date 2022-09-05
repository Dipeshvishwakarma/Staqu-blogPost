import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

import { updatePost } from "../features/posts/postSlice";
import { useSelector, useDispatch } from "react-redux";

export default function EditPost() {
  const { id } = useParams();
  const history = useHistory();
  const posts = useSelector((state) => state.posts.posts);
  const post = posts[id - 1];

  const dispatch = useDispatch();
  const [title, setTitle] = useState(post?.title);
  const [body, setBody] = useState(post?.body);

  console.log("title", title);

  const handleSave = () => {
    dispatch(updatePost({ id: post.id, title, body }));
    history.goBack();
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="test"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>body</Form.Label>
          <Form.Control
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button
        variant="secondary"
        onClick={() => history.goBack()}
        style={{ margin: "1rem" }}
      >
        Back
      </Button>
      <Button variant="primary" onClick={handleSave}>
        Save Changes
      </Button>
    </>
  );
}
