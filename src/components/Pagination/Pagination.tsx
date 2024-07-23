import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const getPageNumbers = (totalPages: number, currentPage: number) => {
    const delta = 2;
    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift("...");
    }
    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };


  const pageNumbers = getPageNumbers(totalPages, currentPage);

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="h-[26px] w-[85px] bg-white rounded-[4px] border border-black disabled:opacity-50 mx-1.5 font-roboto text-[14px] leading-[16.4px] text-[#484848] font-bold"
      >
        Previous
      </button>
      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => onPageChange(page as number)}
          className={`h-[24px] w-[24px] rounded-[4px] border border-black disabled:opacity-50 mx-1.5 font-roboto text-[14px] leading-[16.4px] text-[#484848] font-bold  ${
            page === currentPage ? "bg-[#204080] text-white" : "bg-white"
          }`}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="h-[26px] w-[85px] bg-white rounded-[4px] border border-black disabled:opacity-50 mx-1.5 font-roboto text-[14px] leading-[16.4px] text-[#484848] font-bold"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
