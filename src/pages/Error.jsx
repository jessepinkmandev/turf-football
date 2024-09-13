const Error = () => {
  return (
    <div className="flex-col text-center mt-12 space-y-4">
      <img
        src="https://img.freepik.com/premium-vector/error-design_25030-10298.jpg?w=740"
        alt="error"
        className="w-[600px] h-[400px]  m-auto"
      />
      <h1>Oops .... Unfortunately an error has occured</h1>
      <h2>Try checking your internet connection or</h2>
      <h1 className="bg-red-300 w-[40%] m-auto py-2">
        <a href="/">Try Again</a>
      </h1>
    </div>
  );
};

export default Error;
