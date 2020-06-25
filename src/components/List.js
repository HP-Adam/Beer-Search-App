import React from 'react';
import { Button, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import './List.css';

function Lists(props) {
    return (
        <List
            bordered
            dataSource={props.todoList}
            renderItem={(item, i) => {
                const handleDeleteClick = () => {
                    props.deleteClick(i);
                };
                return (
                    <List.Item className="ListContainer">
                        {item}
                        <Button
                            className="EndButton"
                            shape="circle"
                            icon={<DeleteOutlined />}
                            onClick={handleDeleteClick}
                        />
                    </List.Item>
                );
            }}
        />
    );
}

export default Lists;
