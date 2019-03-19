import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import Todo from './Todo'

export default class List extends Component {
    priorityData = {
        1: 'low',
        2: 'medium',
        3: 'high'
    }

    renderItem = (todo, i) => {
        return (
            <Todo   key={i}
                    onRemoveTodo={() => this.props.onRemoveTodo(todo.id)}
                    title={todo.title}
                    priority={this.priorityData[todo.priority]}
                    descriptionList={todo.descriptionList} />
        )
    }

    render() {
        return (
            <View>
                {
                    this.props.todos.map(this.renderItem)
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#f8f8f8'
    }
})