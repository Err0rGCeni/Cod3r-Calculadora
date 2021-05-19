import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { THButton, THText } from '../styles'
import { colorsSteampunk } from '../colors'
/*
const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',        
    },
    buttonDouble: {
        width: (Dimensions.get('window').width/4)*2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width/4)*3,
    }
})
*/
export default props => {
    let widthButton = 1
    if (props.double) widthButton = 2
    if (props.triple) widthButton = 3

    return (
        <ThemeProvider theme={colorsSteampunk}>
            <THButton onPress={() => props.onClick(props.label)}  wsc={widthButton} ops={props.operation}>
                <THText ops={props.operation}>{props.label}</THText>
            </THButton>
        </ThemeProvider>
    )
}