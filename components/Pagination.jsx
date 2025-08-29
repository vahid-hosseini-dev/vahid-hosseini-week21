function Pagination({ page, setPage, totalPages }) {
  const previousHandler = () => {
    if (page > 1) setPage((p) => p - 1);
  };

  const nextHandler = () => {
    if (page < totalPages) setPage((p) => p + 1);
  };

  return (
    <div className="flex flex-row-reverse justify-center items-center gap-5 mt-4">
      <button
        onClick={previousHandler}
        disabled={page === 1}
        className="px-3 py-1 border rounded disabled:opacity-50 "
      >
        قبلی
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          className={`px-3 py-1 border rounded ${
            page === num
              ? "bg-[rgba(85,163,240,1)] text-white font-bold"
              : "bg-white"
          }`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={nextHandler}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50 "
      >
        بعدی
      </button>
    </div>
  );
}

export default Pagination;
