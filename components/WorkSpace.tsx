import React from "react";

export const WorkSpace = () => {
  return (
    <div className="flex-grow flex flex-col">
      <div className="text-center py-2 mt-2">
        follow these simple steps to create a lesson plan today
      </div>
      <form className="w-3/4 sm:w-1/2 mx-auto my-auto text-sm">
        <div className="flex gap-x-2">
          <input
            type="text"
            placeholder="Enter Subject"
            className="w-1/2 p-3 rounded"
          />
          <input
            type="text"
            placeholder="Enter Topic"
            className="w-1/2 p-3 rounded"
          />
        </div>
        <div className="flex gap-x-2 mt-5">
          <input
            type="text"
            placeholder="Enter Sub strand"
            className="w-1/2 p-3 rounded"
          />
          <input
            type="text"
            placeholder="Enter Grade"
            className="w-1/2 p-3 rounded"
          />
        </div>
        <input
          type="text"
          placeholder="Enter Duration in minutes"
          className="w-full p-3 mt-5"
        />
        <button
          type="submit"
          className="text-center w-full mt-7 bg-gtahidiPurple py-3 text-white rounded-md"
        >
          Create Lesson Plan
        </button>
      </form>
    </div>
  );
};
