import { useSelector } from 'react-redux';
import { IStoreState } from '../../../services/store';
import { ICurrency } from '../../../interfaces/currencies-response';

import './CurrencyName.css'

const CurrencyName = () => {
   
  const currentCurrency = useSelector<IStoreState, ICurrency | null>((state) => state.currencies.currentCurrency);

  return (
    <div className='CurrencyNameWrapper'>
        <h2 className='CurrencyName'>
            {currentCurrency?.name}
        </h2>
    </div>
  )
}

export default CurrencyName;