// Code DigitalClicker Component Here
import React, {Component} from 'react'

class DigitalClicker extends Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = (event) => {
    let newValue = this.state.timesClicked + 1
    this.setState({
      timesClicked: newValue
    })
  }

  render(){
    return(
      <div>
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
