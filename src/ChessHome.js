import React, { Component } from 'react';
import Utils from './utils';
import { Button, Segment } from 'semantic-ui-react';

const { firebase } = window;

export class ChessHome extends Component {
  constructor(props) {
    super();
    console.log(props);

    this.state = {
      showBoard: false
    }

  }

  createGame() {
    const newGame = {
      p1_token: Utils.token(),
      p2_token: Utils.token()
    };

    const game = firebase.database().ref("games").push();


    game.set(newGame)
      .then(() => {
        this.props.history.push(`${newGame.p1_token}`);
      }, (err) => {
        throw err;
      });

  }

  render() {
    return (
      <div className="board-hidden create-multi-row">
        <Segment inverted>
          <h1>ChessEXP PvP/Battle Royale</h1>
          <Button onClick={ this.createGame.bind(this) } inverted size='massive' color='red'>Init EXP</Button>
        </Segment>
      </div>
    );
  }
}
