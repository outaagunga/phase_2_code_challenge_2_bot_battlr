import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

const App = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = async () => {
    try {
      const response = await fetch("http://localhost:8001/bots"); // Assuming json-server is running on port 8001
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error("Error fetching bots:", error);
    }
  };

  const enlistBot = (bot) => {
    // Add the bot object to the enlistedBots array
    setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
  };

  const releaseBot = (botId) => {
    // Remove the bot object from the enlistedBots array
    setEnlistedBots((prevEnlistedBots) =>
      prevEnlistedBots.filter((bot) => bot.id !== botId)
    );
  };

  return (
    <div>
      <h1>Welcome to Bot Battlr</h1>
      {/* Pass the enlistedBots state to YourBotArmy component */}
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} />
      <BotCollection
        bots={bots}
        enlistBot={enlistBot}
        enlistedBots={enlistedBots}
      />
    </div>
  );
};

export default App;
