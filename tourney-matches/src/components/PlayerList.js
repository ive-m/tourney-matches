import Player from './Player';




function PlayerList(props) {
  const listPlayers=[];

  for (const player of props.playerData) {
    listPlayers.push( <Player gamerTag={player.gamerTag} firstName={player.firstName} lastName={player.lastName} wins={player.wins} />);
  }
 


  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
    {listPlayers}
    </section>
  );
}

export default PlayerList;