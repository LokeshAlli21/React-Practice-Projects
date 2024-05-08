import React from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false,
    className = ''
}) => {
  return (
    <div className={` bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2 '>
        <label htmlFor='currency' className='inline-block mb-2 text-black/40'>{label}</label>
        <input 
        type="number"
         className='w-full outline-none bg-transparent py-1.5' 
        name="" 
        id="currency"
        placeholder='Amount' 
        disabled={amountDisabled}
        value={amount}
        onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}}/>
      </div>
      <div className='flex flex-wrap justify-end w-1/2 text-right'>
        <p className='w-full mb-2 text-black/40'>Currency Type</p>
        <select name="" id=""
        className='px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer'
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisabled}>
            {currencyOptions.map((currency) => (
                <option value={currency} key={currency}>{currency}</option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
