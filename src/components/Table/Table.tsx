import React from 'react';
import {Col, Row, Table} from "antd";
import {columns} from "../../constants/Constants";
import {DataType, TableType} from "../../types/Types";
import {ModalWindow} from "../Modal/ModalWindow";

export const TableData = (props: TableType) => {
    const {
        beers,
        loading,
        isModalVisible,
        handleModalClose,
        handleRowClick,
        beerModalDetails
    } = props

    const handleOnRow = (record: DataType) => {
        return {
            onClick: () => handleRowClick(record)
        };
    };

    return (
        <Row>
            <Col xs={24}>
                <Table dataSource={beers} loading={loading} columns={columns} onRow={handleOnRow}/>
            </Col>
            <ModalWindow isModalVisible={isModalVisible} handleModalClose={handleModalClose} data={beerModalDetails}/>
        </Row>
    );
};