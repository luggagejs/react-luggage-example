import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Luggage, withCollection } from 'react-luggage'

class Todos extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    collection: PropTypes.object
  }

  static defaultProps = {
    todos: []
  }

  addTodo() {
    this.props.collection.add({ text: this.todoInput.value })
    this.todoInput.value = ''
  }

  render() {
    const { todos } = this.props

    return (
      <div>
        <input placeholder='New todo' ref={i => { this.todoInput = i }} />
        <button onClick={this.addTodo.bind(this)}>Add</button>
        { todos.map((todo, i) => <div key={i}>{todo.text}</div>) }
      </div>
    )
  }
}

const TodosCollection = withCollection('todos')(Todos)

class App extends Component {
  render() {
    return (
      <Luggage
        apiKey='tqx0ze13xl6vawf'
        redirectUrl='/react-luggage-example'
      >
        <TodosCollection />
      </Luggage>
    )
  }
}

export default App
