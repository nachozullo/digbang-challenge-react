import { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../custom-button';
import { SliderSelector } from '../slider-selector';

import './index.css';

export const CreditSimulator = () => {
  const [totalAmount, setTotalAmount] = useState(19500);
  const [term, setTerm] = useState(16);

  return (
    <div className='container'>
      <h2>Simulá tu crédito</h2>
      <SliderSelector
        label='MONTO TOTAL'
        name='totalAmount'
        minValue={5000}
        maxValue={50000}
        value={totalAmount}
        unit='$'
        onChange={setTotalAmount}
      />
      <SliderSelector
        label='PLAZO'
        name='term'
        minValue={3}
        maxValue={24}
        value={term}
        onChange={setTerm}
      />
      <div className='total-container'>
        <span className='fee-amount-label'>CUOTA FIJA POR MES</span>
        <span className='fee-amount'>${Number(totalAmount / term).toFixed(2)}</span>
      </div>
      <div className='button-container'>
        <PrimaryButton>OBTENÉ CRÉDITO</PrimaryButton>
        <SecondaryButton>VER DETALLE DE CUOTAS</SecondaryButton>
      </div>
    </div>
  );
};
