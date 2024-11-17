import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { toggleCoverage } from '../features/insurance/insuranceSlice';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const coverages = useSelector((state: RootState) => state.insurance.coverages);
  const totalPrice = useSelector((state: RootState) => state.insurance.totalPrice);

  return (
    <div>
      <h2>Select Coverages</h2>
      <div>
        {coverages.map((coverage, index) => (
          <div key={coverage.name}>
            <input
              type="checkbox"
              checked={coverage.isSelected}
              onChange={() => dispatch(toggleCoverage(index))}
            />
            <label>{coverage.name} - {coverage.price} EUR</label>
          </div>
        ))}
      </div>
      <h3>Total Price: {totalPrice} EUR</h3>
    </div>
  );
};

export default Sidebar;