import GoogleMapReact from "google-map-react";
import marker from "../../assets/images/marker.png";
import styles from "./styles.module.scss";

const AnyReactComponent = ({ text }) => (
  <div>
    <img src={marker} alt="marker" className={styles.marker} /> {text}
  </div>
);

const Map = () => {
  const defaultProps = {
    center: {
      lat: 43.24403762817383,
      lng: 76.91876220703125,
    },
    zoom: 15,
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDSknhN7hNJS_GTmMwq1tQi540cf5vB1j0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={43.24403762817383}
          lng={76.91876220703125}
          text="Улица Шевченко,146"
        />
      </GoogleMapReact>
    </div>
  );
};
export default Map;
