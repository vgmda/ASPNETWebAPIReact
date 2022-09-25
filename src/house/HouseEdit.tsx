import React from 'react';
import { useParams } from 'react-router-dom';
import ApiStatus from '../ApiStatus';
import useFetchHouses, { useAddHouse, useFetchHouse, useUpdateHouse } from '../hooks/HouseHooks';
import { House } from '../types/houses';
import HouseForm from './HouseForm';

const HouseEdit = () => {
    const { id } = useParams();
    if (!id) throw Error("Need a house ID");
    const houseId = parseInt(id);

    const { data, status, isSuccess } = useFetchHouse(houseId);
    const updateHouseMutation = useUpdateHouse();

    if (!isSuccess) return <ApiStatus status={status} />
    
    return (
        <HouseForm
            house={data}
            submitted={(h) => updateHouseMutation.mutate(h)}
        />
    );

}

export default HouseEdit;