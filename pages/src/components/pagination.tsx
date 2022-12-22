import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

type TProps = {
  pageNumber?: any;
  info?: any;
  updatePageNumber?: any;
  setPageNumber?: any;
};

const Pagination = ({
  pageNumber,
  info,
  updatePageNumber,
  setPageNumber,
}: TProps) => {
  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="btn-group flex justify-center my-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        pageCount={info?.pages}
        onPageChange={(data) => {
          setPageNumber(data.selected);
        }}
        pageClassName="btn btn-primary fs-5 prev"
        pageLinkClassName="btn btn-primary fs-5 prev"
      />
    </>
  );
};

export default Pagination;
