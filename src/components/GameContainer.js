import React, { Component } from 'react'
import GameTile from './GameTile.js'

class GameContainer extends Component {
  state = {
    gameBoard: []
  }

  componentDidMount() {
    fetch('https://minesweeper-api.herokuapp.com/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ difficulty: 1 })
    })
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          gameBoard: data.board
        })
      })
  }
  render() {
    console.log('creating board')
    return (
      <>
        {this.state.gameBoard.map(tiles => {
          return tiles.map((tile, index) => {
            return <GameTile key={index} />
          })
        })}
      </>
    )
  }
}
export default GameContainer
