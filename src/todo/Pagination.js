import React from "react";

const Pagination = ({
  loadNextData,
  loadPrevData,
  loadFistData,
  loadLastData,
  rowCount,
  minRow,
  maxRow,
}) => {
  return (
    <div className="flex items-center justify-between sm:justify-end -mx-2 p-4">
      <div
        className={`px-2 ${
          minRow > 0 ? "opacity-100 cursor-pointer" : "opacity-25"
        }`}
        onClick={loadFistData}
      >
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="m 6.4948706,6 v 12 m 11.0002584,1 -7,-7 7,-7" />
        </svg>
      </div>
      <div
        className={`px-2 ${
          minRow > 0 ? "opacity-100 cursor-pointer" : "opacity-25"
        }`}
        onClick={loadPrevData}
      >
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M15 19l-7-7 7-7"></path>
        </svg>
      </div>
      <div className="px-2 cursor-pointer">
        <p className="text-sm font-bold text-gray-700">
          {minRow}-{maxRow} of {rowCount}
        </p>
      </div>
      <div
        className={`px-2 ${
          maxRow < rowCount ? "opacity-100 cursor-pointer" : "opacity-25"
        }`}
        onClick={loadNextData}
      >
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
      <div
        className={`px-2 ${
          maxRow < rowCount ? "opacity-100 cursor-pointer" : "opacity-25"
        }`}
        onClick={loadLastData}
      >
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M 17.495129,18 V 6 M 6.49487,5 l 7,7 -7,7" />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
