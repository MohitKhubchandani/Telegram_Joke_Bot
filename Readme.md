# **Joke Bot 🤖**

This is a fun Telegram bot built using Node.js that responds with random jokes when prompted. Users can interact with the bot by typing "Joke" to receive a joke consisting of a setup and punchline.

## **Features**

- **Start Command**: A welcome message is sent when the bot receives the `/start` command.
- **Joke Command**: When users type "Joke," the bot fetches a random joke from the [Official Joke API](https://official-joke-api.appspot.com/random_joke) and sends it to the user.

## **Prerequisites**

- Node.js (version 12.x or higher)
- A Telegram account and a bot token from [@BotFather](https://t.me/BotFather)

## **Installation**

1. Clone the repository or download the project files:
    ```bash
    git clone https://github.com/MohitKhubchandani/Telegram_Joke_Bot.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your environment variables:
    - Create a `.env` file in the root of your project and add your Telegram Bot token:
    ```env
    BOT_TOKEN=your-telegram-bot-token
    ```

4. Start the bot:
    ```bash
    node bot.js
    ```

## **Usage**

1. In Telegram, find your bot using the username you created with [@BotFather](https://t.me/BotFather) and start a chat.

2. Send the `/start` command to receive the welcome message.

3. Type "Joke" to receive a random joke.

## **Dependencies**

- **[node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)**: For interacting with the Telegram Bot API.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: To load environment variables from a `.env` file.
- **[axios](https://www.npmjs.com/package/axios)**: For making HTTP requests to the joke API.
