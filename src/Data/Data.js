import {useEffect} from 'react'



export default function Data({setData}) {


    useEffect(() => {
        fetch('https://632fd006f5fda801f8d6918a.mockapi.io/menu')
            .then((response) => response.json())
            .then((data) => {

            setData(data[0]);
        });
    }, []);

}


