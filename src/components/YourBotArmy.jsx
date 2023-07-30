import React from "react";

const YourBotArmy = ({ enlistedBots, releaseBot }) => {
  return (
    <>
      <div className="col-11 border border-primary">
        <h2>Your Bot Army</h2>
      </div>

      <div className="row">
        {enlistedBots.map((bot) => (
          // Place the key prop on the outermost element
          <div key={bot.id} className="card col-3 m-1">
            <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "1.2rem" }}>
                {bot.name}
              </h5>
              <p className="card-text" style={{ fontSize: "0.9rem" }}>
                {bot.description}
              </p>
              <button onClick={() => releaseBot(bot.id)}>Release</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default YourBotArmy;
