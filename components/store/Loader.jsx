import { RotatingLines } from "react-loader-spinner"

function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-[500px] text-center mt-[100px]">
      <RotatingLines
        width="100px"
        height="100px"
        strokeWidth="3"
        strokeColor="blue"
      />
    </div>
  )
}

export default Loader;
