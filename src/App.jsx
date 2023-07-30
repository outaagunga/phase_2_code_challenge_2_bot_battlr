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
      const response = await fetch("http://localhost:8001/bots"); // Assuming json-server is running on port 3000
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error("Error fetching bots:", error);
    }
  };

  const enlistBot = (bot) => {
    setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
  };

  const releaseBot = (botId) => {
    setEnlistedBots((prevEnlistedBots) =>
      prevEnlistedBots.filter((bot) => bot.id !== botId)
    );
  };

  return (
    <div>
      <h1>Welcome to Bot Battlr</h1>
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
};

export default App;
