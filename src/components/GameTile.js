import React, { Component } from 'react'
import TileLogic from './TileLogic'

class GameTile extends Component {
  state = {
    gameBoard: [],
    gameID: '',
    gameState: '',
    tileRow: '',
    tileCol: ''
  }
  startGame = () => {
    fetch('https://minesweeper-api.herokuapp.com/games/', {
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
        this.setState({
          gameBoard: data.board,
          gameID: data.id,
          gameState: data.state
        })
      })
  }
  componentDidMount() {
    this.startGame()
  }
  updateGame = (x, y) => {
    fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.gameID}/check`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ row: x, col: y })
      }
    )
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        this.setState({
          gameBoard: data.board,
          gameID: data.id,
          gameState: data.state
          // tileRow: this.x,
          // tileCol: this.y
        })
      })
  }
  checkTile = (x, y) => {
    this.updateGame(x, y)
  }

  render() {
    console.log('creating board')
    return (
      <>
        <table className="game-board">
          <tbody>
            {this.state.gameBoard.map((row, x) => {
              return (
                <tr>
                  {row.map((col, y) => {
                    return (
                      <td>
                        <button onClick={() => this.checkTile(x, y)}>
                          <TileLogic gamePiece={this.state.gameBoard[x][y]} />
                        </button>
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}
export default GameTile

// {this.state.gameBoard.map(tiles => {
//   return tiles.map((tile, index) => {
//     return (
//       <>
//         <p className="game-tile">{index}</p>
//       </>
//     )
//   })
// })}

// {for (let i=0; i<this.state.gameBoard.length; i++) {
//   for (let j=0; j<this.state.gameBoard[i].length; j++) {
//   console.log( gameBoard[i][j] );
// }
// const tilesRow = this.state.gameBoard.map((tileRow, indexRow) => {
//   return indexRow
// })
// const tilesCol = tilesRow.map((x, indexCol) => {
//   return indexCol
// })
// let i = ''
// console.log(tilesRow)
// console.log(tilesCol)
