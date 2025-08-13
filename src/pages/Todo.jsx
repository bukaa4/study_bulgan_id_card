import React, { useState } from 'react';
import { Input, Button, List, Checkbox, Typography, Space, message, Row, Col } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import useTasks from '../hooks/useTasks';
import 'antd/dist/reset.css';
import './todo.css';

const { Title } = Typography;

const API_URL = 'http://localhost:3001/todos';

function Todo() {
  const { tasks, setTasks } = useTasks(); // custom hook
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) {
      message.warning('Task cannot be empty');
      return;
    }

    const newTask = {
      text: input.trim(),
      completed: false,
    };

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks([data, ...tasks]);
        setInput('');
      })
      .catch(() => message.error('Failed to add task'));
  };

  const toggleTask = (id, completed) => {
    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !completed }),
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, completed: updatedTask.completed } : task
          )
        );
      })
      .catch(() => message.error('Failed to update task'));
  };

  const deleteTask = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch(() => message.error('Failed to delete task'));
  };

  return (
    <Row justify="center" style={{ marginTop: 50 }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <Title level={2}>Todo List</Title>
  
        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col flex="auto">
            <Input
              placeholder="Add a new task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onPressEnter={addTask}
            />
          </Col>
          <Col>
            <Button type="primary" onClick={addTask}>
              Add
            </Button>
          </Col>
        </Row>
  
        <List
          bordered
          dataSource={tasks}
          locale={{ emptyText: 'No tasks added yet' }}
          renderItem={(task) => (
            <List.Item
              actions={[
                <Button
                  icon={<DeleteOutlined />}
                  onClick={() => deleteTask(task.id)}
                  danger
                />,
              ]}
            >
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTask(task.id, task.completed)}
                style={{ marginRight: 8 }}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
}

export default Todo;