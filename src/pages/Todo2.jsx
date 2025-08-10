import React, { useState, useEffect } from 'react';
import { Input, Button, List, Checkbox, Typography, Row, Col, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import './todo.css';

const { Title } = Typography;

function Todo2() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res) => res.json())
      .then((data) => {
        const formattedTasks = data.map((item) => ({
          id: item.id,
          text: item.title,
          completed: item.completed,
        }));
        setTasks(formattedTasks);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
        message.error('Failed to load tasks from API');
      });
  }, []);

  const addTask = () => {
    if (!input.trim()) {
      message.warning('Task cannot be empty');
      return;
    }

    const newTask = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Row justify="center" style={{ marginTop: 50 }}>
      <Col xs={22} sm={18} md={12} lg={10} xl={8}>
        <Title level={2}>Todo List</Title>
  
        <Row gutter={8} style={{ marginBottom: 16 }}>
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
  
        {/* Scrollable List Container */}
        <Row>
          <Col span={24}>
            <div style={{ maxHeight: 400, overflowY: 'auto' }}>
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
                      onChange={() => toggleTask(task.id)}
                      style={{ marginRight: 8 }}
                    />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                      {task.text}
                    </span>
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
  
}

export default Todo2;
