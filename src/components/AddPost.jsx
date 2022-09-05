import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

import { addPost } from "../features/posts/postSlice";
import { useSelector, useDispatch } from "react-redux";

export default function AddPost() {
  const history = useHistory();
  const posts = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const id = posts[posts.length - 1]?.id + 1;
  console.log("title", title);

  const handleSave = () => {
    dispatch(addPost({ userId, id, title, body }));
    history.goBack();
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>UserId</Form.Label>
          <Form.Control
            type="test"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            autoFocus
          />
        </Form.Group>
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
      <Button variant="secondary" onClick={() => history.goBack()}>
        Back
      </Button>
      <Button variant="primary" onClick={handleSave}>
        Save Changes
      </Button>
    </>
  );
}
