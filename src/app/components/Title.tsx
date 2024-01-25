import axios from "axios";
import React from "react";
import useSWR from "swr";

const Title = () => {
  const fetcher = async (key: string) => {
    // return fetch(key).then((res) => res.json());
    return axios.get(key).then(async (res) => await res.data);
  };

  const { data, error, isLoading } = useSWR("/api/updateAt", fetcher);

  if (isLoading) return "Loading...";

  console.log(data["updateAt"]);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col border-l-4 border-blue-400 pl-2">
        <p className=" text-red-400">能登半島地震</p>
        <h1 className=" font-bold text-2xl float-left ">
          能登地域 薬局開局状況
        </h1>
        <p>更新日時: {data["updateAt"]}</p>
      </div>
      <div>
        <ul className=" text-sm m-3">
          <li>※羽咋郡以北の地域における処方箋の受付が可能な薬局一覧</li>
          <li>
            ※参照:
            <a
              href="https://www.pref.ishikawa.lg.jp/yakuji/r6jishin/yakkyoku.html"
              className=" text-blue-400"
            >
              石川県　令和6年(2024年)能登半島地震に係る薬局の開局状況について
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Title;
