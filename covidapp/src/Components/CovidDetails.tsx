import React from "react";
import { NumberOfCases } from "./NumberOfCases";
import { Typography } from "@material-ui/core";

interface Props {
  totalConfirmed: number;
  totalRecovered: number;
  totalDeaths: number;
  country: string;
}

export const CovidDetails: React.FC<Props> = ({
  totalConfirmed,
  totalRecovered,
  totalDeaths,
  country,
}) => {
  return (
    <div>
      <div style={{ textTransform: "capitalize" }}>
        <Typography variant="h5">
          {country === "" ? "World Wide Covid Report" : country}
        </Typography>
      </div>
      <div className="app">
        <div className="totalcases">
          <NumberOfCases title="Total number of cases">
            <p>{totalConfirmed}</p>
          </NumberOfCases>
        </div>
        <div className="recovered">
          <NumberOfCases title="Number of recovered cases">
            <p>{totalRecovered}</p>
          </NumberOfCases>
        </div>
        <div className="deaths">
          <NumberOfCases title="Number of deaths">
            <p>{totalDeaths}</p>
          </NumberOfCases>
        </div>
      </div>
    </div>
  );
};
