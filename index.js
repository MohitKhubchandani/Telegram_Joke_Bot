const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');  // Correctly require dotenv
const axios = require('axios');

dotenv.config();  // Call config to load .env file

// Token fetched using @BotFather to create a new bot   
const Token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(Token, {polling: true});

// Start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const welcomeMessage = "Welcome to the Joke Bot! 🤖\n\n" +
        "You can type 'Joke' to receive a random joke.\n" +
        "Just type the word 'Joke' and I'll respond with a funny setup and punchline!";
    
    bot.sendMessage(chatId, welcomeMessage);
});

// Joke command
bot.onText(/Joke/, async (msg) => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
       
        const setup = response.data.setup;
        const punchline = response.data.punchline;

        bot.sendMessage(msg.chat.id, setup + " ,  " + punchline);
    } catch (error) {
        console.error('Error fetching joke:', error);
        bot.sendMessage(msg.chat.id, "Sorry, I couldn't fetch a joke at the moment.");
    }
});