import React from "react";

const Accordian = ({ content }: { content: string }) => {
  return (
    <div className="flex justify-between text-3xl mb-10 border-b-gray-400 border-b py-4">
      <p>{content}</p>
      <span>&darr;</span>
    </div>
  );
};

export default Accordian;
