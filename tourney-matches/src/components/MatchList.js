import Match from "./Match";


function MatchList(props) {
  const listMatches=[];

  for (const match of props.matchData) {
    listMatches.push(
     
       
        <Match players={match.players} winner={match.winner} scoreDifference={match.scoreDifference}/>
      
    );
  }
  return (<section className="MatchList">
  <h1>Match List</h1>{listMatches}</section>);
  
}

export default MatchList;