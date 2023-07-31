React Immersive Code Challenge: Bot Battlr

This React application will allow you to browse through a list of robots, view a robot's details, and enlist bots into your army.

Project Objectives:
This project aims to help you practice various aspects of React development, including components, props, state, events, and data fetching.

As a user of the Bot Battlr app, you should be able to perform the following actions:

View profiles of all bots rendered in the BotCollection component.
Add an individual bot to your army by clicking on it. The selected bot should render in the YourBotArmy component. A bot can be enlisted only once, and it does not disappear from the BotCollection.
Release a bot from your army by clicking on it. The bot should disappear from the YourBotArmy component.
Discharge a bot from your service forever by clicking the red "x" button. This action should delete the bot both from the backend and from the YourBotArmy on the frontend.

GET /bots: This endpoint returns a list of available bots. Each bot in the list will have the following properties:

id (number): The unique identifier of the bot.
name (string): The name of the bot.
health (number): The health points of the bot.
damage (number): The damage points of the bot.
armor (number): The armor points of the bot.
bot_class (string): The class of the bot (e.g., "Support", "Medic", "Assault", etc.).
catchphrase (string): The catchphrase of the bot.
avatar_url (string): The URL of the bot's avatar image.
created_at (string): The timestamp of when the bot was created.
updated_at (string): The timestamp of when the bot was last updated.
