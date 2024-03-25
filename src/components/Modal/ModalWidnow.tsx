import React from 'react';
import {ModalType} from "../../types/Types";
import {Modal} from "antd";

export const ModalWidnow = ({isModalVisible, handleModalClose, data}: ModalType) => {
    return (
        <Modal
            title='Beer Details'
            open={isModalVisible}
            onOk={handleModalClose}
            onCancel={handleModalClose}
        >
            <p>Name: <b>{data?.title}</b></p>
            <p>Alcohol %: <b>{data?.alchool}</b></p>
            <p>Description: <b>{data?.description}</b></p>
            <p>Country: <b>{data?.country}</b></p>
        </Modal>
    );
};
