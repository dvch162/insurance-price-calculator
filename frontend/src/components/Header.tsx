// import React, { FC } from 'react';
// import { Discount } from '../types';

// interface HeaderProps {
//   discounts: Discount[];
//   totalPrice: number;
//   onDiscountChange: (index: number) => void;
// }

// const Header: FC<HeaderProps> = ({ discounts, totalPrice, onDiscountChange }) => {
//   return (
//     <header>
//       <h2>Total Price: {totalPrice} EUR</h2>
//       {discounts.map((discount, index) => (
//         <label key={index}>
//           <input
//             type="checkbox"
//             checked={discount.isSelected}
//             onChange={() => onDiscountChange(index)}
//           />
//           {discount.name}
//         </label>
//       ))}
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { toggleDiscount } from '../features/insurance/insuranceSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const discounts = useSelector((state: RootState) => state.insurance.discounts);
  const totalPrice = useSelector((state: RootState) => state.insurance.totalPrice);

  return (
    <div>
      <h1>Total Price: {totalPrice} EUR</h1>
      {discounts.map((discount, index) => (
        <div key={discount.name}>
          <input
            type="checkbox"
            checked={discount.isSelected}
            onChange={() => dispatch(toggleDiscount(index))}
          />
          <label>{discount.name}</label>
        </div>
      ))}
    </div>
  );
};

export default Header;
