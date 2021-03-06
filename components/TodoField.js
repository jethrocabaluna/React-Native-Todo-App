import React, {Component} from 'react'
import {View, TextInput, Text, Button, StyleSheet} from 'react-native'

import RadioGroup from 'react-native-radio-buttons-group'

export default class TodoField extends Component {
    state = {
        todo: {
            title: '',
            priority: 1,
            descriptionList: []
        },
        isExpanded: false
    }

    initialTodo = {
        title: '',
        priority: 1,
        descriptionList: []
    }

    priorityOptions = [
        {
            label: 'low',
            value: 1,
            size: 12,
            color: '#96d88f'
        },
        {
            label: 'medium',
            value: 2,
            size: 12,
            color: '#e8ba45'
        },
        {
            label: 'high',
            value: 3,
            size: 12,
            color: '#e0490d'
        }
    ]

    onChangeTitle = (title) => this.setState({todo: {...this.state.todo, title}})
    onChangePriority = (data) => {
        this.setState({
            todo: {
                ...this.state.todo,
                priority: data.find(e => e.selected === true).value
            }
        })
    }

    onToggleField = () => {
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }

    onSubmitEditing = () => {
        if (!this.state.todo.title) return

        this.props.onSubmitEditing(this.state.todo)
        this.setState({
            todo: this.initialTodo
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Button onPress={this.onToggleField}
                        title={this.state.isExpanded ? 'x' : '+'} />
                </View>
                <View style={this.state.isExpanded ? null : styles.fieldClosed}>
                    <TextInput  style={styles.textInput}
                                value={this.state.todo.title}
                                placeholder='Type title and hit enter to add'
                                placeholderTextColor='#aaa'
                                onChangeText={this.onChangeTitle}
                                onSubmitEditing={this.onSubmitEditing} />
                    <Text style={styles.label}>Priority:</Text>
                    <RadioGroup radioButtons={this.priorityOptions}
                                onPress={this.onChangePriority}
                                flexDirection='row' />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        padding: 5,
        marginBottom: 10
    },
    textInput: {
        fontSize: 24,
        color: '#666',
        marginBottom: 5
    },
    label: {
        fontSize: 16,
        color: '#666'
    },
    fieldClosed: {
        display: 'none'
    }
})