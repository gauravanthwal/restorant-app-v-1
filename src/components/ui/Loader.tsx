import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="bg-[#00000078] top-0 left-0 h-screen w-full absolute flex justify-center items-center z-50">
      <TailSpin
        visible={true}
        height="100"
        width="100"
        color="#000"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
