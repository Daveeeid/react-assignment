import React from "react";
import LibraryCards from "./LibraryCards";
import LibraryHeader from "./LibraryHeader";

function LibraryBooks() {
  const books = [
    { code: "WEB101", title: "Intro to we application", price: 200 },
    { code: "MATH101", title: "Applied Math", price: 800 },
    { code: "BSA001", title: "FUndamental Accounting", price: 600 },
  ];
  return (
    <div>
      <LibraryHeader />
      <ul>
        {books.map((book) => (
          <LibraryCards bookInfo={book} />
        ))}
        <br />
      </ul>
    </div>
  );
}

export default LibraryBooks;
