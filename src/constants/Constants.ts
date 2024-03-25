import {DataType} from "../types/Types";
import {ColumnGroupType, ColumnType} from "antd/es/table";

export const columns: (ColumnType<DataType> | ColumnGroupType<DataType>)[] = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        sorter: (a: any, b: any) => a.title.length - b.title.length,
        width: '30%'
    },
    {
        title: 'Alchool',
        dataIndex: 'alchool',
        key: 'alchool',
        sorter: (a, b) => parseFloat(a.alchool) -parseFloat(b.alchool),
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        // width: '40%'
    },
    {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
        filters: [
            {
                text: 'Denmark',
                value: 'denmark'
            },
            {
                text: 'Sweden',
                value: 'sweden'
            },
            {
                text: 'Belgium',
                value: 'belgium'
            },
            {
                text: 'Spain',
                value: 'spain'
            },
            {
                text: 'Portugal',
                value: 'portugal'
            },
            {
                text: 'Ireland',
                value: 'ireland'
            },
            {
                text: 'Luxembourg',
                value: 'luxembourg'
            },
            {
                text: 'Norway',
                value: 'norway'
            },
            {
                text: 'Finland',
                value: 'finland'
            },
            {
                text: 'Switzerland',
                value: 'switzerland'
            },
            {
                text: 'Czech',
                value: 'czech'
            },
            {
                text: 'Italy',
                value: 'italy'
            },
            {
                text: 'Poland',
                value: 'poland'
            },
            {
                text: 'Malta',
                value: 'malta'
            },
        ],
        onFilter: (value: any, record) => record.country.startsWith(value),
        filterSearch: true,
    }
]