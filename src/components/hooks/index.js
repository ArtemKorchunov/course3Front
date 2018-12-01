import { useEffect, useState } from "react";
import openSocket from "socket.io-client";

import { useAsync } from "react-use";

export const useAsyncFilterResp = (
  req,
  initialState,
  filterCb = val => val
) => {
  const { loading, value } = useAsync(req);
  const [state, setState] = useState(initialState);

  useEffect(
    () => {
      if (!value) return;
      setState(filterCb(value));
    },
    [loading]
  );
  return [state, loading];
};

let socket = { disconnect: () => {} };

export const useSocketConnect = (url, path, valueCheck) => {
  const [state, setState] = useState(null);

  useEffect(
    () => {
      if (valueCheck) {
        socket = openSocket(url, { path });
        socket.on("connect", () => {
          socket.on("payload", data => {
            setState({
              date: new Date(),
              Chart: data.heat,
              Stability: data.prediction.pop()
            });
          });
        });
      }
      return () => socket.disconnect();
    },
    [valueCheck]
  );

  return state;
};
