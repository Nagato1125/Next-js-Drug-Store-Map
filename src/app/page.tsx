"use client";

import MapProvider from "./components/MapProvider";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex bg-gray-200">
        <Sidebar></Sidebar>
        <MapProvider></MapProvider>
      </div>
    </>
  );
}
