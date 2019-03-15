import React, {Component} from 'react'
import {View} from 'react-native'

import Header from './components/Header'
import TodoField from './components/TodoField'
import List from './components/List'

export default class App extends Component {
  state = {
    todos: [
      {
        id: 0,
        title: 'todo item 1',
        done: false,
        descriptionList: ['item-a', 'item-b'],
        priority: 2
      },
      {
        id: 1,
        title: 'todo item 2',
        done: false,
        descriptionList: [],
        priority: 1
      },
      {
        id: 2,
        title: 'todo item 3',
        done: false,
        descriptionList: ['item-a', 'item-b', 'item-c'],
        priority: 1
      },
      {
        id: 3,
        title: 'todo item 4',
        done: false,
        descriptionList: ['item-a'],
        priority: 3
      },
    ],
    removedTodos: []
  }

  onAddTodo = (todo) => {
    const todos = this.state.todos.splice(0)
    todos.push({
      ...todo,
      done: false
    })

    this.setState({
      todos
    })
  }

  onRemoveTodo = (id) => {
    const todoIndex = this.state.todos.find(todo => todo.id === id)

    if (todoIndex) {
      const removedTodos = this.state.removedTodos.splice(0)
      const todos = this.state.todos.splice(0)
      removedTodos.push(this.state.todos[todoIndex])
      todos.splice(todoIndex, 1)

      this.setState({
        todos,
        removedTodos
      })
    }
  }

  render() {
    return (
      <View>
        <Header title="Todo App in React Native" />
        <TodoField  onSubmitEditing={this.onAddTodo} />
        <List todos={this.state.todos}
              onRemoveTodo={this.onRemoveTodo}
        />
      </View>
    )
  }
}