import React, {useState} from 'react';
import './App.css';

import Search from "./components/Search/Search";
import {Header} from "./components/Header/Header";
import {TableData} from "./components/Table/Table";
import {data} from "./constants/Constants";
import {DataType} from "./types/Types";

function App() {
    const [search, setSearch] = useState('');
    const [beers, setBeers] = useState<DataType[]>(data)

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
                <TableData beers={beers}/>
            </div>
        </div>
    );
}

export default App;
