import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

export default class List extends Component {
    priorityData = {
        1: 'low',
        2: 'medium',
        3: 'high'
    }

    renderItem = (todo, i) => {
        return (
            <TouchableOpacity   key={i}
                                style={styles.item}
                                onPress={() => this.props.onRemoveTodo(todo.id)}>
                <Text>{todo.title}</Text>
                <Text>Priority: {this.priorityData[todo.priority]}</Text>
            </TouchableOpacity>
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