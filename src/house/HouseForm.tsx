import React, { useState } from 'react';
import useFetchHouses from '../hooks/HouseHooks';
import { currencyFormatter } from '../config';
import ApiStatus from '../ApiStatus';
import { useNavigate } from 'react-router-dom';
import { House } from '../types/houses';

type Args = {
    house: House;
    submitted: (house: House) => void;
}

const HouseForm = ({ house, submitted }: Args) => {
    // Spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
    const [houseState, setHouseState] = useState({ ...house });

    const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        submitted(houseState);
    }

    return (
        <form className="mt-2">
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              value={houseState.address}
              onChange={(e) =>
                setHouseState({ ...houseState, address: e.target.value })
              }/>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              value={houseState.country}
              onChange={(e) =>
                setHouseState({ ...houseState, country: e.target.value })
              }/>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              placeholder="Description"
              value={houseState.description}
              onChange={(e) =>
                setHouseState({ ...houseState, description: e.target.value })
              }/>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={houseState.price}
              onChange={(e) =>
                setHouseState({ ...houseState, price: parseInt(e.target.value) })
              }/>
          </div>
          <button
            className="btn btn-primary mt-2"
            disabled={!houseState.address || !houseState.country}
                onClick={onSubmit}>Submit</button>
        </form>
      );

}

export default HouseForm;