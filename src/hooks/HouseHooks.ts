import axios, { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import config from '../config';
import { House } from '../types/houses';


const useFetchHouses = () => {
    return useQuery<House[], AxiosError>("houses", () =>
        axios.get(`${config.baseApiUrl}/houses`).then(
        (resp) => resp.data)
    );
}

const useFetchHouse = (id: number) => {
    return useQuery<House, AxiosError>(["houses", id], () =>
        axios.get(`${config.baseApiUrl}/house/${id}`).then(
            (resp) => resp.data)
    );
}

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
export { useFetchHouse };