import React, {Component} from 'react'
import {View, TouchableOpacity, Button, Text, StyleSheet} from 'react-native'

export default class Todo extends Component {
    state = {
        isExpanded: false
    }

    onExpandTodo = () => {
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }

    renderDescriptionList = (list) => {
        return (
            <View>
                {
                    this.state.isExpanded ? list.map((item, i) => <Text style={styles.description} key={i}>{item}</Text>) : null
                }
                {
                    list.length ? <Text style={styles.descriptionToggle}>Show {this.state.isExpanded ? 'Less' : 'More'}</Text> : null
                }
            </View>
        )
    }

    render() {
        return (
            <TouchableOpacity   style={styles.item}
                                onPress={this.onExpandTodo} >
                <Text>{this.props.title}</Text>
                <Text>Priority: {this.props.priority}</Text>
                {
                    this.renderDescriptionList(this.props.descriptionList)
                }
                <View style={styles.removeButton}>
                    <Button onPress={this.props.onRemoveTodo}
                        title='X'
                        color='#8e1919' />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#f8f8f8',
        position: 'relative'
    },
    descriptionToggle: {
        marginTop: 10,
        color: '#666',
        fontSize: 8,
        textAlign: 'center'
    },
    description: {
        marginTop: 5,
        color: '#333',
        fontSize: 10,
        paddingLeft: 10
    },
    removeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: 30,
        width: 30
    }
})