import { ChangeEvent, useEffect } from 'react'
import { IStoreState, useAppDispatch } from '../../../services/store'
import { currenciesSlice, getCurrenciesThunk } from '../../../services/currencies-service';
import { useSelector } from 'react-redux';
import { ICurrency } from '../../../interfaces/currencies-response';

import './Header.css'

const Header = () => {

  const { currencies, currentCurrency } = useSelector<IStoreState, { currencies: ICurrency[], currentCurrency: ICurrency | null }>((state) => ({
    currencies: state.currencies.currencies,
    currentCurrency: state.currencies.currentCurrency
  }));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrenciesThunk());
  }, [dispatch]);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const currency = currencies.find(c => c.id === e.target.value) as ICurrency;
    dispatch(currenciesSlice.actions.changeCurrentCurrency(currency));
  }

  return (
    <div className='header'>
      <div className='header-wrapper'>
        <div className='header-title-wrapper'>
          <h1 className='title'>Cat</h1>
          <div className='sub-title'>currencies academic terms</div>
        </div>
        <select className='select-currencies'
          defaultValue={currentCurrency?currentCurrency.id : ''}
          onChange={onChange}
        >
          {
            currencies.map(currency => {
              return <option value={currency.id}>{currency.id}</option>
            })
          }
        </select>
      </div>
      <div className='Header-logo'></div> 
    </div>
  )
}

export default Header;