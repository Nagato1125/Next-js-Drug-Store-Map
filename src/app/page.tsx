"use client";

import MapProvider from "./components/MapProvider";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="md:flex-row relative h-screen flex flex-col">
        <div className="md:h-screen md:w-96">
          <Sidebar></Sidebar>
        </div>
        <div className="w-full h-full">
          <MapProvider></MapProvider>
        </div>
      </div>
    </>
  );
}
