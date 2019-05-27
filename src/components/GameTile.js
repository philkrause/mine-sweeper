import React, { Component } from 'react'

class GameTile extends Component {
  state = {
    gameBoard: []
  }
  componentDidMount() {
    fetch('https://minesweeper-api.herokuapp.com/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ difficulty: 0 })
    })
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        // console.log(data.board)
        this.setState({
          gameBoard: data.board
        })
      })
  }

  render() {
    const tilesRow = this.state.gameBoard.map((tileRow, index) => {
      console.log(index)
      return index
    })
    const tilesCol = tilesRow.map((tileCol, index) => {
      console.log(index)
      return index
    })
    console.log('creating board')
    return (
      <>
        {this.state.gameBoard.map(tiles => {
          return tiles.map((tile, index) => {
            return (
              <>
                <p className="game-tile">{index}</p>
              </>
            )
          })
        })}
      </>
    )
  }
}
export default GameTile
