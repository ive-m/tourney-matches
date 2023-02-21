function Player(props) {
  if (props.wins === 0) {
    return (
      <article className="Player">
        <h1>
          {props.firstName} <span>{props.gamerTag}</span> {props.lastName}
        </h1>
        <h2 className="zero">Currently with no wins :(</h2>
      </article>)

  }
  if (props.wins === 1) {

    return (
      <article className="Player">
        <h1>
          {props.firstName} <span>{props.gamerTag}</span> {props.lastName}
        </h1>
        <h2>Currently at 1 win</h2>
      </article>)
  }

  else {
    return (
      <article className="Player">
        <h1>
          {props.firstName} <span>{props.gamerTag}</span> {props.lastName}
        </h1>
        <h2>Currently at {props.wins} wins</h2>
      </article>)

  }

}

export default Player;