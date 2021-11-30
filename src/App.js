import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos:
        [
          {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          },
          {
            task: 'Walk the doggy',
            id: 1528817018829,
            completed: false
          },
          {
            task: 'Check OpenSea',
            id: 1528817099921,
            completed: false
          }
        ]
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.

  // this component is going to take care of state, and any change handlers you need to work with your state

  handleAdd = () => {
    // 1. setState
    // 2. change todos
    // 3. make a copy of todos
    // 4. add a new todo to the end of our todo list

    const newTodo = {
      task: 'Cook things',
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    // 1. setState
    // 2. loop through all todos
    // 3. remove all todos that have completed === true
    // 4. save filtered todos to state

    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return(todo.completed === false);
      })
    })
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={todos}/>
        <TodoForm handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}

export default App;
