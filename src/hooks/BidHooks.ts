import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
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

const useAddBid = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<Problem>, Bid>(
    (b) => axios.post(`${config.baseApiUrl}/house/${b.houseId}/bids`, b),
    {
      onSuccess: (_, bid) => {
        queryClient.invalidateQueries(["bids", bid.houseId]);
      },
    }
  );
};

export { useFetchBids, useAddBid };
