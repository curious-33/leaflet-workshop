import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { withRouter } from "utils";

const MapPage = ({ history, location, ticketID }) => {
  return (
    <MapContainer
      center={[41.3775, 64.5853]}
      zoom={6}
      minZoom={6}
      className="map-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default withRouter(MapPage);
