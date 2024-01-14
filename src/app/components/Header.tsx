import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-10 py-6 bg-blue-300 flex justify-between items-center">
      <h1 className=" font-bold text-gray-800 text-3xl">
        石川県能登地方 薬局開局状況
      </h1>
      <div>
        <Link href="https://sites.google.com/view/volunteer4ishikawa/dm">
          <span className="bg-blue-500 text-white px-4 py-3 rounded-md font-bold hover:bg-blue-400 duration-200 cursor-pointer">
            糖尿病で治療中の方へ向けた情報はこちら
          </span>
        </Link>
        <Link href="https://sites.google.com/view/volunteer4ishikawa/medicalinformation">
          <span className=" bg-blue-500 text-white px-4 py-3 rounded-md font-bold hover:bg-blue-400 duration-200 cursor-pointer ml-2">
            医療従事者の方向けの情報はこちら
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
