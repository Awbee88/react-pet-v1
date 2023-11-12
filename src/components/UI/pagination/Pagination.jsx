import React from "react";
import MyButton from "../btn/MyButton";
import { getPagesArray } from "../../../utils/pages";

export default function Pagination({ totalPages, currentPage, setPage }) {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="pagination__wrapper">
      {pagesArray.map((p) => {
        return (
          <MyButton
            key={p}
            active={currentPage == p ? true : false}
            onClick={() => {
              setPage(p);
            }}
          >
            {p}
          </MyButton>
        );
      })}
    </div>
  );
}
