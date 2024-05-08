import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useCurrencyInfo(currency) {

    // console.log(currency);

    const [data, setData] = useState({})

        const getData = async () => {
            try {
                const response = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
                setData(response.data[currency])
                // console.log(response)
            } catch (err) {
                console.log('error fetching details : ', err.stack);
            }
        }

    useEffect( () => {
        getData()
        // fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        // .then(res => res.json())
        // .then(res => setData(res[currency]))
    }, [currency])
    // console.log(data);

  return (data)
}

export default useCurrencyInfo
