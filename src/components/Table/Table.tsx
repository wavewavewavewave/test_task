import React from 'react';
import {Col, Row, Table} from "antd";
import {columns} from "../../constants/Constants";
import {TableType} from "../../types/Types";

export const TableData = ({beers, loading}: TableType) => {
    return (
        <Row>
            <Col xs={24}>
                <Table dataSource={beers} loading={loading} columns={columns}/>
            </Col>
        </Row>
    );
};