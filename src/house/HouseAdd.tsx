import React from 'react';
import useFetchHouses, { useAddHouse, useFetchHouse } from '../hooks/HouseHooks';
import { currencyFormatter } from '../config';
import ApiStatus from '../ApiStatus';
import { useParams } from 'react-router-dom';
import defaultPhoto from './defaultPhoto';
import { House } from '../types/houses';
import HouseForm from './HouseForm';

const HouseAdd = () => {
    const addHouseMutation = useAddHouse();

    const house: House = {
        address: "",
        country: "",
        description: "",
        price: 0,
        id: 0,
        photo: ""
    };

    return (
        <HouseForm
            house={house}
            submitted={(h) => addHouseMutation.mutate(h)}
        />
    );
}

export default HouseAdd;