"use client";

import dynamic from "next/dynamic";
import React, { useMemo } from "react";

const MapProvider = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("./Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return <Map />;
};

export default MapProvider;
