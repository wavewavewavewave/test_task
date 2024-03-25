import React, {useEffect, useState} from 'react';
import Search from "./components/Search/Search";
import {Header} from "./components/Header/Header";
import {TableData} from "./components/Table/Table";
import {DataType} from "./types/Types";
import {beersAPI} from "./api/beers-api";

function App() {
    const [search, setSearch] = useState<string>('');
    const [beers, setBeers] = useState<DataType[]>([])
    const [initialBeers, setInitialBeers] = useState<DataType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            setBeers(initialBeers);
            setSearch('');
            return;
        }

        setSearch(event.target.value);
        setBeers(
            beers.filter((beer) =>
                beer.title.toLowerCase().includes(event.target.value.toLowerCase())
            ))
    }

    useEffect(() => {
        beersAPI.getAllBeers().then(res => {
            setBeers(res.data)
            setInitialBeers(res.data);
            setLoading(false)
        }).catch(error => {
            console.log(error)
        })
    }, [])

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
