import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        paddingTop: 60,
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, .3)'
    },
    title: {
        textAlign: 'center',
        color: '#000'
    }
})