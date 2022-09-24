import React from 'react';
import useFetchHouses from '../hooks/HouseHooks';
import { currencyFormatter } from '../config';
import ApiStatus from '../ApiStatus';
import { useNavigate } from 'react-router-dom';
import { House } from '../types/houses';

type Args = {
    house: House;
    submitted: (house: House) => void;
}

const HouseForm = () => {

}

export default HouseForm;