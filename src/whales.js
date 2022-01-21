import React from "react";

export default function Whale({data}) {


  return (
      <div class="card" >
        <img class="card-img-top" src={data.image} alt="Card image"></img>
      <div class="card-body row">
        <div className="col-5 card-id">#{data.id}</div>
        <div className="col-7 card-rank">Rank {parseInt(data.rank)}</div>
      </div>
      <div className="card-score row">
        Score {parseInt(parseFloat(data.score)*10)}
      </div>
    </div>
    
  );
}
