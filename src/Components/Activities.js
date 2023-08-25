import React from "react";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:grid grid-cols-3 gap-10 mt-[-75px]">
      <div className=" relative p-4">
        <h1 className="absolute top-[50%] z-10 left-[50%] text-white text-2xl font-bold translate-x-[-50%] translate-y-[-50%]">
          Resort
        </h1>
        <img
          className="h-full w-full object-cover border-4 border-white shadow-lg relative  "
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid-Mmo1A3fDB8MHG9@by1wYWdLfHx8f"
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h1 className="absolute top-[50%] z-10 left-[50%] text-white text-2xl font-bold translate-x-[-50%] translate-y-[-50%]">
          Resort
        </h1>
        <img
          className="h-full w-full object-cover border-4 border-white shadow-lg relative  "
          src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&ixid-moj%20A3f088MHkwa69dby1dfHx8f"
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h1 className="absolute top-[50%] z-10 left-[50%] text-white text-2xl font-bold translate-x-[-50%] translate-y-[-50%]">
          Resort
        </h1>
        <img
          className="h-full w-full object-cover relative  border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Activities;
