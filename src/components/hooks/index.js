import { useEffect, useState } from "react";

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
