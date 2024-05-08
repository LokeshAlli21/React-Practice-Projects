import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmoun, setConvertedAmound] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmoun)
    setConvertedAmound(amount)
  }

  const convert = () => {
    setConvertedAmound(amount * currencyInfo[to])
  }

  return (
    <div className='flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover' style={{backgroundImage: 'url(https://t4.ftcdn.net/jpg/00/34/64/47/360_F_34644764_NTk7Ua8tOHl2hjvZ1hFDfmMz4TjwsiZ5.jpg)'}}>
      <div className='w-full'>
        <div className='w-full max-w-md p-5 mx-auto border border-gray-600 rounded-lg backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1 '>
              <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={ currency => setFrom(currency)}
              onAmountChange={ (amount) => setAmount(amount)}
              selectedCurrency={from} />
            </div>
            <div className='relative w-full h-0.5'>
              <button 
              onClick={swap}
              className='absolute px-2 text-white -translate-x-1/2 -translate-y-1/2 bg-blue-600 py-0.5 border-2 border-white rounded-md left-1/2' >Swap</button>
            </div>
            <div className='w-full mb-2 '>
              <InputBox
              label="To" 
              amount={convertedAmoun}
              amountDisabled={true}
              currencyOptions={options}
              onCurrencyChange={ currency => setTo(currency)}
              selectedCurrency={to} />
            </div>
            <button type="submit" className='w-full px-4 py-2 text-white duration-200 bg-blue-600 rounded-lg hover:bg-blue-700'>Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
