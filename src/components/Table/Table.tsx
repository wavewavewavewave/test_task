import React from 'react';
import {Col, Row, Table} from "antd";
import {columns} from "../../constants/Constants";
import {TableType} from "../../types/Types";
import {ModalWidnow} from "../Modal/ModalWidnow";

export const TableData = (props: TableType) => {
    const {beers, loading, isModalVisible, handleModalClose, handleRowClick, tableRowIndex} = props

    const beerDataIndex = tableRowIndex !== undefined ? beers[tableRowIndex] : null;

    return (
        <Row>
            <Col xs={24}>
                <Table dataSource={beers} loading={loading} columns={columns} onRow={(record, rowIndex) => {
                    return {
                        onClick: () => handleRowClick(rowIndex)
                    }
                }}/>
            </Col>
            <ModalWidnow isModalVisible={isModalVisible} handleModalClose={handleModalClose} data={beerDataIndex}/>
        </Row>
    );
};