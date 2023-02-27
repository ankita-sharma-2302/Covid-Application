export type Country = {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: unknown;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
};

export type GlobalData = {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
};
export type formEvent = {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
};

export type dataResponse = {
  Countries: Country[];
  Date: string;
  Global: GlobalData;
  ID: string;
  Message: string;
};

export type coronaData = {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
};

export var countryArray = [
  {
    Country: "",
    CountryCode: "",
    Date: "",
    ID: "",
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    Premium: "",
    Slug: "",
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
  },
];

export var data = {
  Countries: countryArray,
  Date: "",
  Global: {
    Date: "",
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
  },
  ID: "",
  Message: "",
};

export type countries = {
  countrySlug: string | number;
  from: number | string;
  to: string | number;
  date: string | number;
  _date: string | number;
  year: string | number;
  month: string | number;
  Date: string | number;
};

export type eventHandle = {
  value: number | string;
  target: number | string;
};

export type covidReportType = {
  covidReport: number | undefined;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
  formatDate: any;
};
