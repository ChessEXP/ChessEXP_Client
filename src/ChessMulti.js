import React, { Component } from 'react';
import $ from 'jquery';
import { Segment, Button, Label, Menu } from 'semantic-ui-react';

const { firebase, Chess, ChessBoard } = window;

const INITIAL_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

export class ChessMulti extends Component {

  constructor(props) {
    super();

    this.state = { token: props.match.params.token };
    this.engine = new Chess();

    listenForUpdates(this.state.token, (id, game) => {
      this._updateBoard(id, game);
      this._updateInfo(game);
    });
  }

  componentDidMount() {
    $('.board-hidden').css('display', 'inline-block');
      console.log(Chess());
  }


  render() {
    return (
      <div className='board-hidden view row'>
        <Segment inverted className='pvp-message'>
          <small>Copy the Hashed link in the address bar once a new window opens for player 2 and have them navigate to the Wall Page.
          You can also send the P2 hashed link to a friend across the world for the full PvP online experience.
          </small>
        </Segment>
        <Segment inverted className='chessboard-segment'>
          <div className='column column-50'>
            <div id='game-board' style={{width: 600 + 'px'}}></div>
              <Menu vertical inverted>
              <div className="game-links">
                <div>

                  <a target="_blank" href={domain() + "/#/" + this.state.p1_token}>
                    <Button inverted color='red'>
                      <Label className='game-labels' color='yellow' image>
                        <img src='./img/game-label-1.png' height='30px' width='30px' alt="P1"/>
                      </Label>
                       Player 1
                    </Button>
                  </a>

                  <a target="_blank" href={domain() + "/#/" + this.state.p2_token}>
                    <Button inverted color='orange'>
                      <Label className='game-labels' color='orange' image>
                        <img src='./img/game-label-2.png' height='30px' width='30px' alt="P1"/>
                      </Label>
                       Player 2
                    </Button>
                  </a>

                  <p className='history'>{ history(this.state.moves) }<br/></p>

                </div>
              </div>
              </Menu>

            <blockquote>
              <h5 className='turn'>{ this.state.statusText || this.state.turnText }</h5>
            </blockquote>
          </div>
        </Segment>
        </div>
    );
  }

  _updateInfo(game) {
    const engine = this.engine;
    const playerNum = figurePlayer(this.state.token, game);
    this.setState({
      moves: game.moves ? game.moves.split(",") : [],
      p1_token: game.p1_token,
      p2_token: game.p2_token,
      turnText: turnText(playerNum, isMyTurn(playerNum, engine.turn())),
      statusText: statusText(engine.turn(), engine.in_checkmate(), engine.in_draw(), engine.in_check())
    });
  }

  _updateBoard(id, game) {
    const playerNum = figurePlayer(this.state.token, game);
    this.engine.load(game.fen || INITIAL_FEN);

    if (!this.board) {
      this.board = this._initBoard(id, game);
      this.board.position(this.engine.fen());
    } else if (isMyTurn(playerNum, this.engine.turn())) {
      this.board.position(this.engine.fen());
    }
  }

  _initBoard(id, game) {
    const token = this.state.token;
    const engine = this.engine;
    const playerNum = figurePlayer(token, game);
    const config = {
      draggable: true,
      pieceTheme: "https://s3-us-west-2.amazonaws.com/chessimg/{piece}.png",
      onDragStart: onDragStart,
      onDrop: onDrop,
      onSnapEnd: onSnapEnd
    };

    const board = ChessBoard('game-board', config);
    if (playerNum === 2) {
      board.orientation('black');
    }
    return board;

    function onDragStart(source, piece) {
      return !engine.game_over() &&
        isMyTurn(playerNum, engine.turn()) &&
        allowMove(engine.turn(), piece);
    }

    function onDrop(source, target) {
      const m = engine.move({
        from: source,
        to: target,
        promotion: 'q'
      });
      if (m === null) return "snapback";

      game.fen = engine.fen();
      game.moves = pushMove(game.moves, `${m['from']}-${m['to']}`);

      games(id).set(game);
    }

    function onSnapEnd() {
      return board.position(engine.fen());
    }
  }
}

function history(moves = []) {
  return moves.map((m, idx) => <span key={m}>{idx + 1}) {m}</span>);
}

function listenForUpdates(token, cb) {
  const db = firebase.database().ref("/games");
  ["p1_token", "p2_token"].forEach((name) => {
    const ref = db.orderByChild(name).equalTo(token);
    ref.on('value', (ref) => {
      const [id, game] = parse(ref.val());
      if (!id) return;
      cb(id, game);
    });
  });
}

function parse(tree) {
  if (!tree) return [];
  const keys = Object.keys(tree);
  const id = keys[0];
  const game = tree[id];
  return [id, game];
}

function games(id) {
  return firebase
    .database()
    .ref(`/games/${id}`);
}

function domain() {
  const { hostname, port } = window.location;
  if (port) {
    return `http://${hostname}:${port}`;
  } else {
    return `http://${hostname}`;
  }
}

function pushMove(moves, move) {
  if (!moves) {
    return [move].join(",");
  } else {
    const arr = moves.split(",");
    return [...arr, move].join(",");
  }
}

function isMyTurn(playerNum, turn) {
  return (playerNum === 1 && turn === 'w') || (playerNum === 2 && turn === 'b');
}

function allowMove(turn, piece) {
  return !(turn === 'w' && piece.search(/^b/) !== -1) || (turn === 'b' && piece.search(/^w/) !== -1);
}

function figurePlayer(token, { p1_token, p2_token }) {
  if (token === p1_token) {
    return 1;
  } else if (token === p2_token) {
    return 2;
  } else {
    return 0;
  }
}

function turnText(playerNum, isMyTurn) {
  if (playerNum > 0) {
    if (isMyTurn) {
      return "Your Turn";
    } else {
      return "Waiting for opponent's move...";
    }
  } else {
    return "View Only";
  }

}

function statusText(turn, in_mate, in_draw, in_check) {
  const moveColor = turn === 'b' ? "Black" : "White";
  if (in_mate) {
    // animation()
    return 'CheckMate';
  } else if (in_draw) {
    return 'Draw';
  } else if (in_check) {
    return `${moveColor} is in Check`;
  } else {
    return "";
  }
}
