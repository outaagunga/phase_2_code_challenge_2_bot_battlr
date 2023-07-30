import React from "react";

// Component to display the enlisted bots in the user's bot army
const YourBotArmy = ({ enlistedBots, releaseBot, deleteBot }) => {
  // Function to handle the deletion of a bot
  const handleDelete = async (botId) => {
    try {
      // Call the function to delete the bot from the server
      await deleteBot(botId);

      // If the deletion is successful, call releaseBot to remove it from the enlistedBots array in the parent component
      releaseBot(botId);
    } catch (error) {
      console.error("Error deleting bot:", error);
    }
  };

  return (
    <>
      {/* Display the title */}
      <div className="col-11 border border-primary">
        <h2>Your Bot Army</h2>
      </div>

      {/* Display the enlisted bots */}
      <div className="row">
        {enlistedBots.map((bot) => (
          <div key={bot.id} className="card col-3 m-1">
            {/* Display the bot's avatar */}
            <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />

            {/* Display the bot's details */}
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "1.2rem" }}>
                {bot.name}
              </h5>
              <p className="card-text" style={{ fontSize: "0.9rem" }}>
                {bot.description}
              </p>
              {/* Button to release the bot */}
              <button onClick={() => releaseBot(bot.id)}>Release</button>

              {/* Button to delete the bot */}
              <button
                type="button"
                className="btn btn-danger font-small"
                onClick={() => handleDelete(bot.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default YourBotArmy;
