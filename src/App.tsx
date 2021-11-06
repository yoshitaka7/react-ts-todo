import React, { useState } from 'react';
import './style.scss';

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

  const addArchive = (i : number):void => {
    setArchives([...archives, tasks[i]])
    const newTasks = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks)
  }

  const deleteTask = (i : number):void => {
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
                  <li className="todo__list__item" key={i}>
                    <p className="todo__list__item--title">{task}</p>
                    <div className="todo__list__item__btn">
                      <button className="move" onClick={() => addArchive(i)}></button>
                      <button className="delete" onClick={() => deleteTask(i)}></button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="todo">
            <h2>done</h2>
            <ul className="todo__list">
              {archives.map((archive, i) => {
                return (
                  <li className="todo__list__item" key={i}>
                    <p className="todo__list__item--title">{archive}</p>
                    <div className="todo__list__item__btn">
                      <button className="delete" onClick={() => deleteArchive(i)}></button>
                    </div>
                  </li>
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
