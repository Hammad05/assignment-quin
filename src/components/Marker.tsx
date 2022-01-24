import React from "react";
import { Marker as SimpleMarker, MarkerProps } from "react-simple-maps";

type Props = {
  name: string;
  coordindates: MarkerProps["coordinates"];
  onClick: Function;
};

export const Marker = (props: Props) => {
  return (
    <SimpleMarker
      key={props.name}
      coordinates={props.coordindates}
      onClick={() => props.onClick()}
    >
      <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
    </SimpleMarker>
  );
};
