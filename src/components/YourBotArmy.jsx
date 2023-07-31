import React from "react";

const YourBotArmy = ({ enlistedBots, releaseBot, deleteBot, allBots }) => {
  // Function to handle the enlistment of a bot
  const handleEnlist = (bot) => {
    // Check if the bot is already enlisted
    const isEnlisted = enlistedBots.some(
      (enlistedBot) => enlistedBot.id === bot.id
    );

    // If the bot is not enlisted, enlist it
    if (!isEnlisted) {
      releaseBot(bot.id); // Ensure we remove any duplicate entry if present
      releaseBot(bot.id); // Ensure we remove any duplicate entry if present
    }
  };

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

  // Filter enlisted bots from allBots
  const enlistedBotIds = new Set(enlistedBots.map((bot) => bot.id));
  const enlistedBotsData = allBots.filter((bot) => enlistedBotIds.has(bot.id));

  return (
    <>
      {/* Display the title */}
      <div className="col-11 border border-primary">
        <h3>Your Bot Army</h3>
      </div>

      {/* Display the enlisted bots */}
      <div className="row">
        {enlistedBotsData.map((bot) => (
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
                X
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Displaying a message if there are no enlisted bots */}
      {enlistedBotsData.length === 0 && (
        <div className="col-11 border border-primary mt-3">
          <h4>Your favorite bots will appear here.</h4>
        </div>
      )}
    </>
  );
};

export default YourBotArmy;
