import React, { useState } from 'react';
import './style.scss';
import { Task } from './components/task';

function App() {
  const [word, setWord] = useState('');
  const [tasks, setTasks] = useState([]);
  const [archives, setArchives] = useState([]);

  const getWord = (e):void => {
    setWord(e.target.value);
  };

  const addTasks = ():void => {
    setTasks([...tasks, word]);
    setWord("")
  }

  const deleteTask = (i : number):void => {
    const newTasks = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks)
  }

  const addArchive = (i : number):void => {
    setArchives([...archives, tasks[i]])
    const newTasks = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks)
  }

  const deleteArchive = (i : number):void => {
    const newArchives = [...archives];
    newArchives.splice(i, 1);
    setArchives(newArchives)
  }

  return (
    <div>
      <main className="container">
        <h1>Todo List</h1>

        <div className="add">
          <form>
            <input type="text" value={word} onChange={getWord}/>
            <button type="button" onClick={addTasks}>追加</button>
          </form>
        </div>

        <div className="flexBox">
          <div className="todo">
            <h2>todo</h2>
            <ul className="todo__list">
              {tasks.map((task, i) => {
                return (
                  <Task
                    key={i}
                    task= {task}
                    i={i}
                    onClick={()=> deleteTask(i)}
                    archiveBtn
                    onClickMove={() => addArchive(i)}
                  />
                )
              })}
            </ul>
          </div>

          <div className="todo">
            <h2>done</h2>
            <ul className="todo__list">
              {archives.map((archive, i) => {
                return (
                  <Task
                    key={i}
                    task= {archive}
                    i={i}
                    onClick={()=> deleteArchive(i)}
                  />
                )
              })}
            </ul>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
