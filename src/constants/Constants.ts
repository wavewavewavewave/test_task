import {DataType} from "../types/Types";
import {ColumnGroupType, ColumnType} from "antd/es/table";

export const data: DataType[] = [
    {
        "title": "Super birra ambrata",
        "alchool": "8%",
        "description": "Amber Abbey Beer. ",
        "country": 'italy'
    },
    {
        "title": "Noel birra bruna",
        "alchool": "9%",
        "description": "Strong Dark Ale. Seasonal - christmas.",
        "country": 'italy'
    },
    {
        "title": "Elixir birra demi-sec",
        "alchool": "10%",
        "description": "Strong Amber Ale.",
        "country": 'italy'
    },
    {
        "title": "Isaac birra bianca",
        "alchool": "5%",
        "description": "Witbier. Belgian-style. Flavoured with coriander and orange peel.",
        "country": 'italy'
    },
    {
        "title": "Wayan birra saison",
        "alchool": "5.8%",
        "description": "Saison.",
        "country": 'italy'
    },
    {
        "title": "Nora birra egizia",
        "alchool": "6.8%",
        "description": "Golden Ale.",
        "country": 'italy'
    },
    {
        "title": "Xyauy� birra da divano",
        "alchool": "12%",
        "description": "Amber Strong Ale.",
        "country": 'italy'
    },
    {
        "title": "Reale birra del Borgo",
        "alchool": "6.4%",
        "description": "Amber Ale. Inspired by British real ale.",
        "country": 'italy'
    },
    {
        "title": "Duchessa birra del Borgo",
        "alchool": "6.2%",
        "description": "Golden Ale.",
        "country": 'italy'
    },
    {
        "title": "Rodersch",
        "alchool": "5%",
        "description": "Blond Ale. In the K�lsch style. Unfiltered.",
        "country": 'italy'
    },
    {
        "title": "ArtigianAle",
        "alchool": "6.2%",
        "description": "Amber Ale.",
        "country": 'italy'
    },
    {
        "title": "Confine",
        "alchool": "6%",
        "description": "Porter.",
        "country": 'italy'
    },
    {
        "title": "Remedios",
        "alchool": "5%",
        "description": "Witbier. Unfiltered.",
        "country": 'italy'
    },
    {
        "title": "Jehol",
        "alchool": "4.8%",
        "description": "Brown Ale.",
        "country": 'italy'
    },
    {
        "title": "Xtrem",
        "alchool": "9%",
        "description": "Barley Wine. Unfiltered.",
        "country": 'italy'
    },
    {
        "title": "Cerveza Especial",
        "alchool": "5.5%",
        "description": "A beefier version of pils. Approximates to a German Export or Spezial.",
        "country": 'spain'
    },
    {
        "title": "Cerveza Negra",
        "alchool": "5.5%",
        "description": "Dark, malty, lightly-hopped lagers roughly in the münchener \n            style.",
        "country": 'spain'
    },
    {
        "title": "Alhambra Premium Lager ",
        "alchool": "4.6%",
        "description": "Pale lager - Clásica.",
        "country": 'spain'
    },
    {
        "title": "Achel 5 Blond",
        "alchool": "5%",
        "description": "Blond ale.",
        "country": 'malta'
    },
    {
        "title": "Achel 5 Bruin",
        "alchool": "5%",
        "description": "Dark ale.",
        "country": 'spain'
    },
    {
        "title": "Achel 8 Blond",
        "alchool": "8%",
        "description": "Blond ale.\n            Pale yellow colour with a dense white head; bitterish/sweetish taste \n            with resin, toffee, apple, grass and caramel aromas; very bitter finish \n            with resin, caramel, grass, pepper and earth aromas.\n            A beer that happily avoids the sickly sweetness usually found in abbey \n            blonds. Nicely hoppy over a solid malt base. \n            Tasted 06.02.2007.",
        "country": 'spain'
    },
    {
        "title": "Achel 8 Bruin ",
        "alchool": "8%",
        "description": "Dark ale.",
        "country": 'spain'
    },
    {
        "title": "La Chouffe ",
        "alchool": "8% ",
        "description": "Strong golden ale spiced with coriander. \n            A classic beer, loved by almost everyone who tries it.",
        "country": 'belgium'
    },
    {
        "title": "Cisk Export",
        "alchool": "5%",
        "description": "Pale lager.",
        "country": 'belgium'
    },
    {
        "title": "Farsons Hopleaf Extra ",
        "alchool": "5%",
        "description": "India Pale Ale.",
        "country": 'belgium'
    },
    {
        "title": "Farsons Strong Ale",
        "alchool": "6.7%",
        "description": "Strong Ale.",
        "country": 'belgium'
    },
    {
        "title": "Cisk XS Lager",
        "alchool": "9%",
        "description": "Pale lager.",
        "country": 'belgium'
    },
]
export const columns: (ColumnType<DataType> | ColumnGroupType<DataType>)[] = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        sorter: (a: any, b: any) => a.title.length - b.title.length,
    },
    {
        title: 'Alchool',
        dataIndex: 'alchool',
        key: 'alchool',
        sorter: (a: any, b: any) => a.alchool - b.alchool,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
        filters: [
            {
                text: 'Malta',
                value: 'malta'
            },
            {
                text: 'Italy',
                value: 'italy'
            },
            {
                text: 'Belgium',
                value: 'belgium'
            },
            {
                text: 'Spain',
                value: 'spain'
            },
        ],
        onFilter: (value: any, record) => record.country.startsWith(value),
        filterSearch: true,
    }
]