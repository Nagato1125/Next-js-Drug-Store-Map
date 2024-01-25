"use client";

import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ReafletMarker from "./ReafletMarker";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import useSWR from "swr";
import axios from "axios";
import { Store } from "@/pages/api/types";

// delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const Map = () => {
  const fetcher = async (key: string) => {
    // return fetch(key).then((res) => res.json());
    return axios.get(key).then(async (res) => await res.data);
  };

  const { data, error, isLoading } = useSWR("/api/stores", fetcher);
  console.log(data);

  if (isLoading) return "Loading...";

  return (
    <MapContainer
      center={[36.8, 136.8]}
      zoom={9}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <ZoomControl position={"bottomright"}></ZoomControl>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.stores.map((store: Store) => (
        <ReafletMarker
          store={store}
          key={store.store_name}
          // positon={[store.location_lat, store.location_lng]}
          // popupText={store.name}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
