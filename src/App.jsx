import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

// Define the main App component
const App = () => {
  // State to store the list of all bots and enlisted bots
  const [bots, setBots] = useState([]); // State to store all bots data
  const [enlistedBots, setEnlistedBots] = useState([]); // State to store enlisted bots

  // Fetch bots from the server when the component mounts
  useEffect(() => {
    fetchBots();
  }, []);

  // Function to fetch bots from the server
  const fetchBots = async () => {
    try {
      // Make a GET request to fetch the bots data from the server
      const response = await fetch("http://localhost:8001/bots");
      const data = await response.json();
      // Update the 'bots' state with the fetched data
      setBots(data);
    } catch (error) {
      console.error("Error fetching bots:", error);
    }
  };

  // Function to enlist a bot into the enlistedBots array
  const enlistBot = (bot) => {
    setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
  };

  // Function to release a bot from the enlistedBots array
  const releaseBot = (botId) => {
    setEnlistedBots((prevEnlistedBots) =>
      prevEnlistedBots.filter((bot) => bot.id !== botId)
    );
  };

  // Function to delete a bot from the server
  const deleteBotFromServer = async (botId) => {
    try {
      // Make a DELETE request to the server to delete the bot
      await fetch(`http://localhost:8001/bots/${botId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting bot:", error);
      throw error;
    }
  };

  // Function to delete a bot from the server and remove it from the enlistedBots array
  const deleteBot = async (botId) => {
    try {
      // Call the function to delete the bot from the server
      await deleteBotFromServer(botId);

      // If the deletion is successful, remove the bot from the enlistedBots array
      setEnlistedBots((prevEnlistedBots) =>
        prevEnlistedBots.filter((bot) => bot.id !== botId)
      );
    } catch (error) {
      console.error("Error deleting bot:", error);
    }
  };

  // Render the main App component
  return (
    <div>
      <h2>Welcome to Bot Battlr</h2>
      {/* Pass the enlistedBots state and both handler functions to YourBotArmy component */}
      <YourBotArmy
        enlistedBots={enlistedBots}
        releaseBot={releaseBot}
        deleteBot={deleteBot}
        allBots={bots} // Ensuring that I pass the 'bots' state as the 'allBots' prop
      />
      <BotCollection
        bots={bots}
        enlistBot={enlistBot}
        enlistedBots={enlistedBots}
      />
    </div>
  );
};

export default App;
