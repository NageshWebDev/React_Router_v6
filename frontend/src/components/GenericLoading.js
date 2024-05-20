export function GenericLoading() {
  return (
    <div  className="flex flex-col justify-center items-center my-10">
    <div className="flex flex-col justify-center items-center font-thin bg-black/20 p-10 rounded-lg w-[500px]">
      <span className="mb-5 border-2 w-10 rounded-full animate-spin border-black/80 border-t-amber-500">
        &nbsp;
      </span>
      <div className="flex flex-col justify-center items-center animate-pulse">
        <span className="text-2xl">Please wait a moment</span>
        <span className="text-base text-gray-300 tracking-wider">Fetching page content</span>
      </div>
    </div>
    </div>
  );
}
