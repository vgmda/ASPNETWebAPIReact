import React, { useEffect } from 'react';
import { useState } from 'react';
import config from '../config';
import { House } from '../types/houses';


const useFetchHouses = (): House[] => {
    const [houses, setHouses] = useState<House[]>([]);

    useEffect(() => {
        const fetchHouse = async () => {
            const rsp = await fetch(`${config.baseApiUrl}/houses`);
            const houses = await rsp.json();
            setHouses(houses);
        };
        fetchHouse();
    }, []);

    

    return houses;
}

export default useFetchHouses;