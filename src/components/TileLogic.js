import React, { Component } from 'react'

class TileLogic extends Component {
  state: {}
  render() {
    switch (this.props.gamePiece) {
      case '':
        className = 'unrevealed'
        break
      case '_':
        className = 'empty'
        break
      case 'F':
        className = 'flag'
        break
      case '*':
        className = 'bomb'
        this.setState({ gameState: 'lost' })
        break
      case '@':
        className = 'flagged-bomb'
        break
      default:
        className = 'number'
    }
    return <></>
  }
}

export default TileLogic
