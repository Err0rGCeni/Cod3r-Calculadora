import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default class App extends Component {
  state = { ...initialState }
  //Adicionar digito ao Display
  addDigit = n => {
    //Para limpar o display se apenas tiver o dígito 0
    const clearDisplay = this.state.displayValue === '0'
    || this.state.clearDisplay
    //Se o usuário digitou ponto, se não vai limpar o display, e já há um ponto digitado
    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return  //Sai e desconsidera a inclusão de um ponto adicional
    }
    //Ou quando a variável estiver verdadeira
    //O valor atual é o que está no display, exceto se precisar limpar o display
    const currentValue = clearDisplay ? '' : this.state.displayValue
    //Concatenação para aparecer no Display
    const displayValue = currentValue + n
    //Finalmente é atualizado o estado do componente relacionado a Display
    this.setState({ displayValue, clearDisplay: false})
    // O . é ignorado para atualizar o estado do componente
    if (n !== '.') {
      //Passa a string do display para um float em newValue
      const newValue = parseFloat(displayValue)
      //Gera um clone
      const values = [...this.state.values]
      //Atualiza o  novo array, de acordo com o índice current
      values[this.state.current] = newValue
      //Muda o estado de values
      this.setState({ values })
    }
  }
  //Restaura o estado inicial do componente
  clearMemory = () => {
    this.setState({ ...initialState })
  }
  
  setOperation = operation => {
    //Se utiliza a operação armazenada, não a atual.
    //Operation será utilizada na próxima operação.
    if (this.state.current === 0) {
      //Se o current era 0, armazena o operation, coloca current como 1,
      //e o próximo digito limpa o display
      this.setState({ operation, current: 1, clearDisplay: true})      
    } else {
      //Se o current já é 1, armazena a comparação entre operation e =
      const equals = operation === '='
      //Clone do array que armazena estados da calculadora
      const values = [...this.state.values]      
      try {
        //O eval trata uma operação dentro de uma string como uma operação entre valores
        //Gera um erro quando operation é um ""=""
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        //Ou seja, caso a operation seja =, conserva values[0]
        values[0] = this.state.values[0]
      }
      //Sempre que atribui uma nova operação, o valor values[1] será zerado
      values[1] = 0
      //Por fim, atribui o novo estado
      this.setState({
        //Mostrado no display: valor da operação em try catch
        
        displayValue: `${values[0]}`,
        //operação: se for = , vai para nulo
        operation: equals ? null : operation,
        //current: se for = , vai para zero
        current: equals ? 0 : 1,
        //Se for =, não limpa o display
        clearDisplay: !equals,
        //values recebe values, então não precisa de :
        values, 
      })
    }      
  }

  render() {
    return(
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory}/>
          <Button label='/' operation onClick={this.setOperation} />
          <Button label='7' onClick={this.addDigit} />
          <Button label='8' onClick={this.addDigit} />
          <Button label='9' onClick={this.addDigit} />
          <Button label='*' operation onClick={this.setOperation} />
          <Button label='4'onClick={this.addDigit} />
          <Button label='5'onClick={this.addDigit} />
          <Button label='6'onClick={this.addDigit} />
          <Button label='-' operation onClick={this.setOperation} />
          <Button label='1'onClick={this.addDigit} />
          <Button label='2'onClick={this.addDigit} />
          <Button label='3'onClick={this.addDigit} />
          <Button label='+' operation onClick={this.setOperation} />
          <Button label='0'double onClick={this.addDigit} />
          <Button label='.'onClick={this.addDigit} />
          <Button label='='operation onClick={this.setOperation} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})