import React, {useEffect, useState} from 'react';
import './App.css';

import Search from "./components/Search/Search";
import {Header} from "./components/Header/Header";
import {TableData} from "./components/Table/Table";
import {data} from "./constants/Constants";
import {DataType} from "./types/Types";
import {beersAPI} from "./api/beers-api";

function App() {
    const [search, setSearch] = useState('');
    const [beers, setBeers] = useState<DataType[]>(data)
    const [test, setTest] = useState<DataType[]>([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        beersAPI.getAllBeers().then(res => {
            setTest(res.data)
            setLoading(false)
        }).catch(error => {
            console.log(error)
        }).finally()
    }, [])

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            setBeers(data);
            setSearch('');
            return;
        }

        setSearch(event.target.value);
        setBeers(
            beers.filter((beer) =>
                beer.title.toLowerCase().includes(event.target.value.toLowerCase())
            ))
    }

    return (
        <div>
            <Header/>
            <div style={{padding: '20px'}}>
                <Search onChange={handleOnChange} value={search}/>
                <TableData beers={test} loading={loading}/>
            </div>
        </div>
    );
}

export default App;
