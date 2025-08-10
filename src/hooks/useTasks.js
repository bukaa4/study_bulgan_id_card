// src/hooks/useTasks.js
import { useState, useEffect } from 'react';
import { message } from 'antd';

const API_URL = 'http://localhost:3001/todos';

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks on mount
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => {
        console.error(err);
        message.error('Failed to fetch tasks');
      });
  }, []);

  return { tasks, setTasks };
}
