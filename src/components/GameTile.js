import React, { Component } from 'react'
import { isDate } from 'util'

class GameTile extends Component {
  state = {
    gameBoard: [],
    gameID: '',
    gameState: '',
    tileRow: '',
    tileCol: ''
  }
  componentDidMount() {
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
        console.log(data)
        this.setState({
          gameBoard: data.board,
          gameID: data.id,
          gameState: data.state
        })
      })
  }

  checkTile = () => {
    fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.gameID}/
        check}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ row: 1, col: 1 })
      }
    )
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          gameBoard: data.board,
          gameID: data.id,
          gameState: data.state
        })
      })
  }

  render() {
    const tilesRow = this.state.gameBoard.map((tileRow, indexRow) => {
      return indexRow
    })
    const tilesCol = tilesRow.map((x, indexCol) => {
      return indexCol
    })
    let i = ''
    // console.log(tilesRow)
    // console.log(tilesCol)

    console.log('creating board')
    return (
      <>
        <section className="game-board">
          {tilesRow.map((tiles, i) => (
            <p className="tile-row" key={i}>
              <button onClick={this.checkTile} className="game-tile" key={i} />
            </p>
          ))}
        </section>
        <section className="game-board">
          {tilesRow.map((tiles, i) => (
            <p className="tile-row" key={i}>
              <button className="game-tile" key={i} />
            </p>
          ))}
        </section>
        <section className="game-board">
          {tilesRow.map((tiles, i) => (
            <p className="tile-row" key={i}>
              <button className="game-tile" key={i} />
            </p>
          ))}
        </section>
        <section className="game-board">
          {tilesRow.map((tiles, i) => (
            <p className="tile-row" key={i}>
              <button className="game-tile" key={i} />
            </p>
          ))}
        </section>
        <section className="game-board">
          {tilesRow.map((tiles, i) => (
            <p className="tile-row" key={i}>
              <button className="game-tile" key={i} />
            </p>
          ))}
        </section>
        <section className="game-board">
          {tilesRow.map((tiles, i) => (
            <p className="tile-row" key={i}>
              <button className="game-tile" key={i} />
            </p>
          ))}
        </section>
        <section className="game-board">
          {tilesRow.map((tiles, i) => (
            <p className="tile-row" key={i}>
              <button className="game-tile" key={i} />
            </p>
          ))}
        </section>
        <section className="game-board">
          {tilesRow.map((tiles, i) => (
            <p className="tile-row" key={i}>
              <button className="game-tile" key={i} />
            </p>
          ))}
        </section>
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
