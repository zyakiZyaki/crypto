const API_KEY = "201c2346c1610b9908ddc22b95851da17ee23aa3a7a0901786894109bc81a5b4"

export const loadTicker = (tickers) => 

fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tickers.join(',')}&tsyms=USD&api_key=${API_KEY}`
    ).then(r => r.json())
    .then(rawData => 
        Object.fromEntries(
            Object.entries(rawData).map(([key,value]) => [key, value.USD])
            )
        )