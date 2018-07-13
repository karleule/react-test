import React from 'react';

class Square extends React.Component {  
  render() {
    return (
      <button 
        className="square" 
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )   
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      run: 1
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    if(squares[i] === null) {
      squares[i] = this.state.run % 2 === 0 ? 'O' : 'X'
    }
    this.setState(
    {
      squares: squares,
      run: this.state.run + 1
    })
  }

  reset() {
    this.setState(
      {
        squares: Array(9).fill(null),
        run: 1
      })
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.state.squares} onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
        <div>
          RUN: {this.state.run}
        </div>
        <button onClick={() => this.reset()}>
          Reset
        </button>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game