import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import config from "../config";
import { Bid } from "../types/bid";
import Problem from "../types/problem";

const useFetchBids = (houseId: number) => {
  return useQuery<Bid[], AxiosError<Problem>>(["bids", houseId], () =>
    axios
      .get(`${config.baseApiUrl}/house/${houseId}/bids`)
      .then((resp) => resp.data)
  );
};
