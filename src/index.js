console.log(`Hello Node.js v${process.versions.node}!`);
import TelegramBot  from 'node-telegram-bot-api'

const token = process.env.TELEGRAM_BOT_TOEKN;

const bot = new TelegramBot(token, { polling: true }); 

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const button = {
    text: 'Click me!', 
    callback_data: 'button_click',
  };

  bot.sendMessage(chatId, 'Hello! Welcome to your Telegram bot.');
});
