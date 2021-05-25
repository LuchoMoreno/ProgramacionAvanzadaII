import { useState, useEffect } from 'react';

export const useFetch = (url, dataInicial) =>{

const [data, setData] = useState(dataInicial);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);


const getData = () => {

    setLoading(true);

    fetch(url)

    .then((res) => {

        if (res.ok)
        {
            return res.json();
        }
        else
        {
            Promise.reject(res);
        }

    })
    
    .then((res) => {

        setData(res);
        setLoading(false);
    })

    .catch( (error) => {
        
        setError(true); 
        loading(false)})

}

// consigo que se ejecute una sola vez
useEffect( () => {

    getData();

} , []);

return {data, loading, error};

}
