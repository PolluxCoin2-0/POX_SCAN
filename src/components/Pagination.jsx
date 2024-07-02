

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`px-4 py-2 mx-1 border-[1px] border-text-bg-gray rounded ${i === currentPage ? 'bg-black text-white' : 'bg-gray-200 text-gray-700 '}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => handleClick(currentPage - 1)}
        className="px-4 py-2 mx-1 rounded bg-gray-200 text-gray-700"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handleClick(currentPage + 1)}
        className="px-4 py-2 mx-1 rounded bg-gray-200 text-gray-700"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
