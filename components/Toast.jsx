function getToastClasses(type) {
  switch (type) {
    case "success":
      return "bg-green-500";
    case "error":
      return "bg-red-500";
  }
}

const Toast = ({ message, type = "success" }) => {
  return (
    <div
      className={`max-w-[400px] m-auto animate-bounce px-4 py-2 rounded-lg text-white text-sm shadow-md ${getToastClasses(
        type
      )} flex justify-between items-center`}
    >
      <span>{message}</span>
    </div>
  );
};

export { Toast };
