import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {
    inputMain: '',
  }

  changeInput = event => {
    this.setState({
      inputMain: event.target.value,
    })
  }

  render() {
    const {inputMain} = this.state
    const splitAr = inputMain.split(' ').length
    return (
      <div className='center'> 
        <h1> Responsive Paragraph Word {"\n"}
           Counter </h1>
        <p> </p>
        <textarea onChange={this.changeInput} rows={5} cols={20} />
        <p> </p>
        <p> Word Count : {splitAr - 1}</p>
      </div>
    )
  }
}

export default App