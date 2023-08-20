import * as React from "react";
import { GoogleMap, DrawingManager } from "@react-google-maps/api";
import { Box } from "@mui/material";

export interface LatLng {
  lat: number;
  lng: number;
}

export interface MapProps {
  center: LatLng;
  zoom: number;
}

const containerStyle = {
  width: "800px",
  height: "600px"
};

export default function CustomMap(mapProps: MapProps) {
  const options = {
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControl: false,
    tilt: 0,
    zoom: mapProps.zoom
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <GoogleMap
        center={mapProps.center}
        mapContainerStyle={containerStyle}
        options={options}
      >
        <DrawingManager
          options={{
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: [google.maps.drawing.OverlayType.POLYGON]
            },
            polygonOptions: {
              fillColor: "#199ee0",
              fillOpacity: 0.2,
              strokeWeight: 2,
              strokeColor: "#113460",
              clickable: true,
              editable: true,
              geodesic: false,
              visible: true,
              zIndex: 1
            }
          }}
        />
      </GoogleMap>
    </Box>
  );
}
