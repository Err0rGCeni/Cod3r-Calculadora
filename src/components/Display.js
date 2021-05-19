import React from 'react'
//import { StyleSheet, Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { ViewDisplay, TextDisplay } from '../styles'

export default props =>
    <ThemeProvider theme={props.theme}>
        <ViewDisplay>
            <TextDisplay numberOfLines={1}>
                {props.value}
            </TextDisplay>
        </ViewDisplay>
    </ThemeProvider>