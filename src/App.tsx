import React, {useEffect, useState} from 'react';
import './App.css';

import Search from "./components/Search/Search";
import {Header} from "./components/Header/Header";
import {TableData} from "./components/Table/Table";
import {DataType} from "./types/Types";
import {beersAPI} from "./api/beers-api";

function App() {
    const [search, setSearch] = useState('');
    const [beers, setBeers] = useState<DataType[]>([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        beersAPI.getAllBeers().then(res => {
            setBeers(res.data)
            setLoading(false)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            setBeers(beers);
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
                <TableData beers={beers} loading={loading}/>
            </div>
        </div>
    );
}

export default App;
