import { useState } from 'react';
import './App.css';

function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [dueDate, setDueDate] = useState('');

  // ADD TASK
  const addTask = () => {

    if(task.trim() === '') return;

    const newTask = {
      text: task,
      due: dueDate
    };

    setTasks([...tasks, newTask]);

    setTask('');
    setDueDate('');
  };

  // DELETE TASK
  const deleteTask = (index) => {

    const updatedTasks =
      tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);
  };

  // EDIT TASK
  const editTask = (index) => {

    const updatedTask =
      prompt('Edit task', tasks[index].text);

    if(updatedTask !== null) {

      const updatedTasks = [...tasks];

      updatedTasks[index].text = updatedTask;

      setTasks(updatedTasks);
    }
  };

  return (

    <div className={darkMode ? 'app dark' : 'app'}>

      <div className="container">

        <div className="top-bar">

          <h1>To-Do App</h1>

          <button
            className="dark-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>

        </div>

        <div className="input-section">

          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <button onClick={addTask}>
            Add
          </button>

        </div>

        <ul>

          {tasks.map((t, index) => (

            <li key={index}>

              <div>

                <strong>{t.text}</strong>

                <br />

                <small>
                  Due: {t.due || 'No Date'}
                </small>

              </div>

              <div className="btn-group">

                <button
                  className="edit-btn"
                  onClick={() => editTask(index)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>

              </div>

            </li>

          ))}

        </ul>

      </div>

    </div>
  );
}

export default App;