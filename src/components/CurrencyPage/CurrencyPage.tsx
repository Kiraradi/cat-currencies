import React from 'react'
import Header from './Header/Header'
import CurrencyName from './CurrencyName/CurrencyName'

import './CurrencyPage.css'

export default function CurrencyPage() {
  return (
    <div className='CurrencyPage'>
        <Header></Header>
        <CurrencyName></CurrencyName>
    </div>
  )
}
