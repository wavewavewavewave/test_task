import React from "react";

export interface DataType {
    title: string;
    alchool: string;
    description: string;
    country: string;
}

export type TableType = {
    beers: DataType[]
}

export type SearchType = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string
}
