"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MapProvider from "./components/MapProvider";

export default function Home() {
  return (
    <>
      <Header></Header>
      <MapProvider></MapProvider>
      <Footer></Footer>
    </>
  );
}
