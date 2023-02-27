import React, { useState, useEffect } from "react";
import "./Styling/App.css";
import { CovidDetails } from "./Components/CovidDetails";
import { Container, Typography, Select, MenuItem } from "@material-ui/core";
import { data, dataResponse, formEvent } from "./Types/type";
import Graph from "./Components/Graph";
import { axiosfetch } from "./Services/axiosfetch";
import { Options } from "./Components/Options";
import moment from "moment";

function App() {
  const [global, setGlobal] = useState<dataResponse>(data);
  const [totalConfirmed, setTotalConfirmed] = useState<number>(0);
  const [totalRecovered, setTotalRecovered] = useState<number>(0);
  const [totalDeaths, setTotalDeaths] = useState<number>(0);
  const [country, setCountry] = useState<string>("");
  const [days, setDays] = useState<number>(7);
  const [yAxisCoronaCount, setyAxisCoronaCount] = useState<dataResponse[]>([]);
  const [xAxisCoronaCount, setxAxisCoronaCount] = useState<dataResponse[]>([]);

  const getData = async () => {
    const url = `/summary`;
    const newData = await axiosfetch(url);
    if (newData) setGlobal(newData);
    setTotalConfirmed(newData.Global.TotalConfirmed);
    setTotalRecovered(newData.Global.TotalRecovered);
    setTotalDeaths(newData.Global.TotalDeaths);
  };

  useEffect(() => {
    getData();
    console.log("global", global);
  }, []);

  const formatDate: any = (d: number) => {
    const date = new Date(d);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const _date = date.getDate();

    console.log(date, year, month, _date);

    return `${year}-${month}-${_date}`;
  };

  const countryHandler = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
    child: React.ReactNode
  ): void => {
    const countryValue: string = e.target.value as string;
    setCountry(countryValue);
    const date = new Date();
    const to = formatDate(date);
    const from = formatDate(date.setDate(date.getDate() - days));
    console.log(from, to);

    getCoronaUpdateFromCountries(countryValue, from, to);
  };

  const daysHandler = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
    child: React.ReactNode
  ) => {
    const daysValue: number = event.target.value as number;
    setDays(daysValue);
  };

  const getCoronaUpdateFromCountries = async (
    countrySlug: string,
    from: number,
    to: number
  ) => {
    const url = `/country/${countrySlug}/status/confirmed?from=${from}&to=${to}`;
    const res = await axiosfetch(url);
    console.log("url data", res);
    const yAxis = res.map((e: formEvent) => e.Cases);
    const xAxis = res.map((e: formEvent) =>
      moment(e.Date).format(" Do MMM YY")
    );

    setyAxisCoronaCount(yAxis);
    setxAxisCoronaCount(xAxis);
    const covidReport: any = global.Countries.find(
      country => country.Slug === countrySlug
    );

    setTotalConfirmed(covidReport.TotalConfirmed);
    setTotalRecovered(covidReport.TotalRecovered);
    setTotalDeaths(covidReport.TotalDeaths);
  };
  return (
    <div className="App">
      <Container fixed>
        <Typography variant="h2" align="center">
          Covid-19 Report
        </Typography>
        {global ? (
          <CovidDetails
            totalConfirmed={totalConfirmed}
            totalRecovered={totalRecovered}
            totalDeaths={totalDeaths}
            country={country}
          />
        ) : (
          <h1>Loading.......</h1>
        )}
        <br></br>
        <Select value={country} onChange={countryHandler}>
          {global.Countries.map(country => (
            <MenuItem key={country.ID} value={country.Slug}>
              {country.Country}
            </MenuItem>
          ))}
        </Select>

        <Select value={days} onChange={daysHandler}>
          {Options.map(element => (
            <MenuItem key={element.label} value={element.value}>
              {element.label}
            </MenuItem>
          ))}
        </Select>
        <Graph yAxis={yAxisCoronaCount} xAxis={xAxisCoronaCount} />
      </Container>
    </div>
  );
}

export default App;
