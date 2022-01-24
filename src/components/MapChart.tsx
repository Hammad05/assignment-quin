import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  MarkerProps,
  ZoomableGroup,
} from "react-simple-maps";
import { Launch } from "../lib/models";

import { Marker } from "./Marker";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

type Coordinate = {
  name: string;
  coordinates: MarkerProps["coordinates"] | undefined;
};

type MapChartProps = {
  launches: Array<Launch>;
  setData: Function;
  setOpen: Function;
};

const toMarkerCoordinates = (
  lat: string,
  long: string
): MarkerProps["coordinates"] => {
  return [Number(lat), Number(long)];
};

const toFields = (launch: Launch): any => {
  return [
    {
      label: "Name",
      value: launch.name,
    },
    {
      label: "Launch Pad Name",
      value: launch.pad.location.name,
    },
    {
      label: "Launch Time",
      value: launch.window_start,
    },
    {
      label: "Agencies",
      value: launch.launch_service_provider.name,
    },
  ];
};

const MapChart = (props: MapChartProps) => {
  const { launches, setOpen, setData } = props;

  const onClickMarker = (launch: Launch) => {
    setOpen(true);
    setData(toFields(launch));
  };

  return (
    <ComposableMap>
      <ZoomableGroup zoom={1}>
        <Graticule stroke="#EAEAEC" />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((d) => d.properties.REGION_UN === "Americas")
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                />
              ))
          }
        </Geographies>
        {launches.map((launch) => {
          const { pad, name } = launch;
          const coordinates = toMarkerCoordinates(pad.latitude, pad.longitude);
          return (
            <Marker
              name={name}
              coordindates={coordinates}
              onClick={() => onClickMarker(launch)}
            />
          );
        })}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
