import { Pagination } from "react-bootstrap";

function PaginationList({ totalPage, currentPage, setCurrentPage }) {
  const items = [];
  for (let page = 1; page <= totalPage; page++) {
    items.push(
      <Pagination.Item
        key={page}
        data-page={page}
        active={page === currentPage}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </Pagination.Item>
    );
  }
  return (
    <Pagination style={{ marginLeft: "3rem" }}>
      <Pagination.Prev
        key="prev"
        onClick={() => setCurrentPage(currentPage - 1)}
      />
      {items}
      <Pagination.Next
        ket="next"
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </Pagination>
  );
}

export default PaginationList;
