import React from 'react';
import Utils from './utils';
import { Button, Segment } from 'semantic-ui-react';

const { firebase } = window;

export default function() {
  return (
    <div className="board-hidden create-multi-row">
      <Segment inverted>
        <h1>ChessEXP MultiPlayer</h1>
        <Button inverted color='red' onClick={createGame}>Init EXP</Button>
      </Segment>
    </div>
  );
}

function createGame() {
  const newGame = {
    p1_token: Utils.token(),
    p2_token: Utils.token()
  };

  const game = firebase.database().ref("games").push();

  game
    .set(newGame)
    .then(() => {
      window.location.hash = `#/${newGame.p1_token}`;
    }, (err) => {
      throw err;
    });
}
