export type LaunchData = {
  count: number;
  results: Array<Launch>;
};

export type Launch = {
  id: number;
  name: string;
  program: Program;
  pad: Pad;
  launch_service_provider: ServiceProvider;
  window_start: Date;
};

type ServiceProvider = {
  name: string;
};

type Program = {
  start_date: Date;
  end_date: Date;
};

type Pad = {
  agency_id: number;
  name: string;
  latitude: string;
  longitude: string;
  location: Location;
};

type Location = {
  id: number;
  name: string;
  country_code: string;
};
