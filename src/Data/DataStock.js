import {useEffect} from 'react'



export default function DataStock({setDataStock}) {

    useEffect(() => {
        fetch('https://632fd006f5fda801f8d6918a.mockapi.io/Stock')
            .then((response) => response.json())
            .then((dataStock) => {
            setDataStock(dataStock[0]);
        });
    }, []);

}


