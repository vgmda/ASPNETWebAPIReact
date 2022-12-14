import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { House } from "../types/houses";
import Problem from "../types/problem";

const useFetchHouses = () => {
  return useQuery<House[], AxiosError>("houses", () =>
    axios.get(`${config.baseApiUrl}/houses`).then((resp) => resp.data)
  );
};

const useFetchHouse = (id: number) => {
  return useQuery<House, AxiosError>(["houses", id], () =>
    axios.get(`${config.baseApiUrl}/house/${id}`).then((resp) => resp.data)
  );
};

const useAddHouse = () => {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<Problem>, House>(
    (h) => axios.post(`${config.baseApiUrl}/houses`, h),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("houses");
        nav("/");
      },
    }
  );
};

const useUpdateHouse = () => {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<Problem>, House>(
    (h) => axios.put(`${config.baseApiUrl}/houses`, h),
    {
      onSuccess: (_, house) => {
        queryClient.invalidateQueries("houses");
        nav(`/house/${house.id}`);
      },
    }
  );
};

const useDeleteHouse = () => {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, House>(
    (h) => axios.delete(`${config.baseApiUrl}/houses/${h.id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("houses");
        nav("/");
      },
    }
  );
};
// const useFetchHouses = (): House[] => {
//     const [houses, setHouses] = useState<House[]>([]);

//     useEffect(() => {
//         const fetchHouse = async () => {
//             const rsp = await fetch(`${config.baseApiUrl}/houses`);
//             const houses = await rsp.json();
//             setHouses(houses);
//         };
//         fetchHouse();
//     }, []);

//     return houses;
// }

export default useFetchHouses;
export { useFetchHouse, useAddHouse, useUpdateHouse, useDeleteHouse };
