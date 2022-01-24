import React, { useState } from "react";
import { useQuery } from "react-query";
import { InfoModal, Field } from "../components/InfoModal";

import MapChart from "../components/MapChart";
import { axiosClient } from "../lib/client";
import { LaunchData } from "../lib/models";

export const Home = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Array<Field>>([]);

  // Todo: Create a Custom Hook that has query fetching and mutation at one place
  const { data: launchData, isLoading } = useQuery<LaunchData>(
    "launches",
    async () => (await axiosClient.get<LaunchData>("/launch/upcoming/")).data,
    {
      initialData: { count: 0, results: [] },
    }
  );

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <MapChart
          launches={launchData?.results || []}
          setData={setData}
          setOpen={setOpen}
        />
      )}
      <InfoModal open={open} onClose={() => setOpen(false)} fields={data} />
    </div>
  );
};
