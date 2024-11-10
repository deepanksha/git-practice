import React from "react";
import { useDispatch, useSelector } from "react-redux";
import purchase_book from "./BookAction";

const BookContainer = () => {
  const noOfBooks = useSelector((state) => state.NumberOfBooks);
  const dispatch = useDispatch();
  return (
    <>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        No of books -{noOfBooks}
      </h2>
      <button onClick={() => dispatch(purchase_book())}>By book</button>
    </>
  );
};

export default BookContainer;
