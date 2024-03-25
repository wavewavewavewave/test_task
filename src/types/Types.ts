import React from "react";

export interface DataType {
    title: string;
    alchool: string;
    description: string;
    country: string;
}

export type TableType = {
    beers: DataType[];
    loading: boolean;
    isModalVisible: boolean;
    handleModalClose: () => void;
    handleRowClick: (rowIndex: number|undefined, record: any) => void;
    tableRowIndex: number|undefined
    rec: any
}

export type SearchType = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string
}

export type ModalType = {
    isModalVisible: boolean;
    handleModalClose: () => void;
    data: DataType | null
}
