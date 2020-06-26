import React, { useState } from 'react';
import { Button, List } from 'antd';
import { DeleteOutlined, EditOutlined, AlertTwoTone } from '@ant-design/icons';
import './List.css';

function Lists(props) {
    const [flipper, setFlipper] = useState(-1);
    const [editTextInput, setEditTextInput] = useState('');

    return (
        <List
            bordered
            dataSource={props.todoList}
            renderItem={(item, i) => {
                const handleDeleteClick = () => {
                    props.deleteClick(i);
                };

                const handleEditClick = () => {
                    setFlipper(i);
                };

                const handleEditText = (event) => {
                    setEditTextInput(event.target.value);
                };

                const handleEnter = (event) => {
                    if (event.key === 'Enter' && editTextInput !== '') {
                        props.editTask(editTextInput, i);
                        setFlipper(-1);
                    }
                };

                return (
                    <List.Item className="ListContainer">
                        {flipper === i ? (
                            <input
                                placeholder={item}
                                onChange={handleEditText}
                                onKeyPress={handleEnter}
                            />
                        ) : (
                            item
                        )}
                        <div className="EndButton">
                            <Button
                                shape="circle"
                                icon={<EditOutlined />}
                                onClick={handleEditClick}
                            />
                            <Button
                                shape="circle"
                                icon={<DeleteOutlined />}
                                onClick={handleDeleteClick}
                            />
                        </div>
                    </List.Item>
                );
            }}
        />
    );
}

export default Lists;
