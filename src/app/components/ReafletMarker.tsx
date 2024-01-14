import { Store } from "@/pages/api/types";
import React from "react";
import { Marker } from "react-leaflet";
import CustomPopup from "./CustomPopup";

type ReafletMarkerProps = {
  store: Store;
};

const ReafletMarker = ({ store }: ReafletMarkerProps) => {
  return (
    <Marker position={[store.location_lat, store.location_lng]}>
      <CustomPopup store={store}></CustomPopup>
    </Marker>
  );
};

export default ReafletMarker;
