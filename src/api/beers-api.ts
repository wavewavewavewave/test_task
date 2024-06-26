import axios from "axios";
import {DataType} from "../types/Types";


const instance = axios.create({
    method: 'GET',
    baseURL: 'https://beers-list.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': 'd37d046501msh2529be5b4dc0947p1fe06cjsn32b7fa990c35',
    }
})

export const beersAPI = {
    getAllBeers() {
        return instance.get<DataType[]>('beers')
    }
}