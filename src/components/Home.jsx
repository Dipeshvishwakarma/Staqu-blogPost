import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostItem from "../UI/PostItem";
import PaginationList from "./Pagination";

const Home = () => {
  const posts = useSelector((state) => state.posts.posts);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(posts.length / 6);

  const lastIndex = currentPage * 6;
  const startIndex = lastIndex - 6;

  const visiblePosts = posts.slice(startIndex, lastIndex);

  // console.log(posts);
  return (
    <div className="container">
      <div>
        {visiblePosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      <PaginationList
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
