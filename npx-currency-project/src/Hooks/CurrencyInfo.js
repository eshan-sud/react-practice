import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    let URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((response) => setData(response[currency]));
        console.log(data);
    }
    , [currency])
    return data
}

export default useCurrencyInfo;