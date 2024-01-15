import React from "react";

const Notification = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-3 shadow-xl ">
      <p className=" font-bold text-xl border-l-4 border-blue-400 pl-2">
        お知らせ
      </p>
      <ul className="list-disc list-inside">
        <li>お知らせ１</li>
        <li>お知らせ２</li>
      </ul>
    </div>
  );
};

export default Notification;
