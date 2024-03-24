import React from 'react';
import {Input} from "antd";
import {SearchType} from "../../types/Types";

const Search = ({onChange, value}: SearchType) => {
    return (
        <Input placeholder={'Search'} style={{width: '500px'}} onChange={onChange} value={value}/>
    );
};

export default Search;