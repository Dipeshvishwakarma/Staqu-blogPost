import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import ViewPost from "./components/ViewPost";
import EditPost from "./components/EditPost";
import AddPost from "./components/AddPost";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { getPosts } from "./features/posts/postSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ViewPost/:id" component={ViewPost} />
        <Route path="/EditPost/:id" component={EditPost} />
        <Route path="/AddPost" component={AddPost} />
      </Switch>
    </div>
  );
}

export default App;
