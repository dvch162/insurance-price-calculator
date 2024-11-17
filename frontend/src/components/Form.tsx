// src/components/Form.tsx
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { updateFormData } from '../features/insurance/insuranceSlice';

const Form: FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.insurance.formData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateFormData({
      [name]: name === 'vehiclePower' || name === 'voucher' || name === 'priceMatch'
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add any additional logic or state updates as needed
    console.log("Form Submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>User Data</h3>
      <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
      <label>Birthdate: <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} /></label>
      <label>City: <input type="text" name="city" value={formData.city} onChange={handleChange} /></label>
      <label>Vehicle Power: <input type="number" name="vehiclePower" value={formData.vehiclePower} onChange={handleChange} /></label>
      <label>Voucher: <input type="number" name="voucher" value={formData.voucher || ''} onChange={handleChange} /></label>
      <label>Price Match: <input type="number" name="priceMatch" value={formData.priceMatch || ''} onChange={handleChange} /></label>
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
