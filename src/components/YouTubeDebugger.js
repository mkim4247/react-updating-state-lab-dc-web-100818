// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

class YouTubeDebugger extends Component {
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBit = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleRes = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
        resolution: '720p'
        }
      }
    })
  }

  render(){
    return(
      <div>
      <button className='bitrate' onClick={this.handleBit}/>
      <button className='resolution' onClick={this.handleRes}/>
      </div>
    )
  }
}

export default YouTubeDebugger
