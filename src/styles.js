import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

//Display.js
export const ViewDisplay = styled.View`
    flex: 1;
    padding: 20px;
    justify-content: center;
    background-color: ${props => props.theme.displayBg};
    align-items: flex-end;
`

export const TextDisplay = styled.Text`
    font-size: 60px;
    color: ${props => props.theme.displayNumber};
`
//Button.js
export const THButton = styled.TouchableHighlight`    
    height: ${Dimensions.get('window').width/4}px;
    width: ${props =>(Dimensions.get('window').width/4)*props.wsc}px;
    padding: 20px;
    background-color: ${props => props.ops? props.theme.operationBg : props.theme.buttonBg};    
    border-width: 1px;
    border-color: ${props => props.theme.buttonBorder};
    color: ${props => props.ops? props.theme.operationFg : props.theme.buttonFg};
    font-size: 40px;
    text-align: center;   
`
export const THText = styled.Text`
    color: ${props => props.ops? props.theme.operationFg : props.theme.buttonFg};
    font-size: 40px;
    text-align: center;
`