import type React from "react";
import style from "./MapSection.module.css";

const API_KEY = "AIzaSyA_2cRErWuHXfhRAJZ-rPRqcUeO57jXxg4";

type MapSectionProps = {
  location: string;
  zoom?: number;
};

const MapSection = ({
  location,
  zoom = 14,
  children,
}: React.PropsWithChildren<MapSectionProps>) => {
  return (
    <div className={style.section}>
      <div className={style.left}>{children}</div>
      <iframe
        width="100%"
        height="350px"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(API_KEY)}&q=${encodeURIComponent(location)}&zoom=${zoom}`}
      ></iframe>
    </div>
  );
};
export default MapSection;
