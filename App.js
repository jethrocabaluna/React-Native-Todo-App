import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'

import {actionCreator} from './redux/todoListRedux'
import Header from './components/Header'
import TodoField from './components/TodoField'
import List from './components/List'

const mapStateToProps = (state) => ({
  todos: state.todos
})

class App extends Component {
  onAddTodo = (todo) => {
    const newTodo = {
      ...todo,
      done: false,
      id: new Date().getTime()
    }
    this.props.dispatch(actionCreator.add(newTodo))
  }

  onRemoveTodo = (id) => {
    this.props.dispatch(actionCreator.remove(id))
  }

  render() {
    return (
      <View>
        <Header title="Todo App in React Native" />
        <TodoField  onSubmitEditing={this.onAddTodo} />
        <List todos={this.props.todos}
              onRemoveTodo={this.onRemoveTodo}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)