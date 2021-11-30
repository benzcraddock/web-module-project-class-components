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

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={todos}/>''
        <TodoForm />
        <button>Clear</button>
      </div>
    );
  }
}

export default App;
