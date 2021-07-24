import React from "react";
import { ResponsiveRadar } from "@nivo/radar";
import "./RadarChart.scss";

const commonProperties = {
  width: 200,
  height: 200,
  animate: true,
};

type props = {
  data: {
    type: string;
    points: number;
  }[];
  max: number;
  index: string;
  color: string;
};

const RadarChart = ({ data, max, index, color }: props): JSX.Element => {
  return (
    <div className="radarchart">
      <ResponsiveRadar
        {...commonProperties}
        data={data}
        keys={["points"]}
        indexBy={index}
        maxValue={max}
        curve="linearClosed"
        borderWidth={4}
        borderColor={color}
        gridLevels={5}
        gridShape="linear"
        gridLabelOffset={30}
        enableDots={false}
        colors={color}
        fillOpacity={0.25}
        blendMode="normal"
        animate={true}
        isInteractive={true}
      />
    </div>
  );
};
export default RadarChart;
