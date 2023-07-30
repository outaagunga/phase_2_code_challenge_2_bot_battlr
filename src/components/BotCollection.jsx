import React from "react";

// Component to display the available bots that can be enlisted
const BotCollection = ({ bots, enlistBot, enlistedBots }) => {
  return (
    <>
      {/* Display the title */}
      <div className="col-11 border border-primary">
        <h2>My Collection</h2>
      </div>

      {/* Display the available bots */}
      <div className="row">
        {bots.map(
          (bot) =>
            // Only render the bot if it's not enlisted
            !enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id) && (
              <div key={bot.id} className="card col-3 m-1">
                {/* Display the bot's avatar */}
                <img
                  src={bot.avatar_url}
                  className="card-img-top"
                  alt={bot.name}
                />

                {/* Display the bot's details */}
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "1.2rem" }}>
                    {bot.name}
                  </h5>
                  <p className="card-text" style={{ fontSize: "0.9rem" }}>
                    {bot.description}
                  </p>
                  {/* Button to enlist the bot */}
                  <button onClick={() => enlistBot(bot)}>
                    Add to favorites
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default BotCollection;
