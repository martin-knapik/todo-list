import React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { TodoList } from './domain/TodoList';

const App: React.FC = observer(() => {
  const [todoList] = React.useState(new TodoList());
  const [newTitle, setNewTitle] = React.useState('');
  const [newDescription, setNewDescription] = React.useState('');
  const todoItems = todoList.todoItems
  return (
    <div className="app">
      <div className="todos">
        {todoItems.map((todo, index) => (
          <div className="todo" key={index}>
            <div className="todo__title">{todo.title}</div>
            <div className="todo__description">{todo.description}</div>
            <div className="todo__deadline"></div>
            <button className="todo__finish-button">Finish</button>
          </div>
        ))}
      </div>
      <div className="todo-new">
        <div>
          Title:
          <div>
            <input type="text" className="todo-new__title" onChange={(e) => setNewTitle(e.target.value)}
                   value={newTitle}/>
          </div>
        </div>
        <div>
          Description:
          <div>
            <input type="text" className="todo-new__description" onChange={(e) => setNewDescription(e.target.value)}
                   value={newDescription}/>
          </div>
        </div>
        <button className="todo-new__add-button" onClick={() => {
          setNewTitle('');
          setNewDescription('');
        }}>Add
        </button>
      </div>
    </div>
  );
})

export default App;
