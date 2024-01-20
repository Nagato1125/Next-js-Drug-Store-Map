import { Store } from "@/pages/api/types";
import React from "react";
import { Popup } from "react-leaflet";

type PopupTextProps = {
  store: Store;
};

const CustomPopup = ({ store }: PopupTextProps) => {
  return (
    <Popup>
      <span>{`${store.store_name}`}</span>
      <br />
      <span>{`営業時間: ${store.business_hours}`}</span>
      <br />
      <span>{`電話: ${store.phone_number}`}</span>
      <br />
      {store.remarks ? (
        <>
          <span>{`備考: ${store.remarks}`}</span>
          <br />
        </>
      ) : (
        <></>
      )}
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${store.store_name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Google mapで開く
      </a>
    </Popup>
  );
};

export default CustomPopup;
