console.log(`Hello Node.js v${process.versions.node}!`);
import TelegramBot  from 'node-telegram-bot-api'

const token = process.env.TELEGRAM_BOT_TOEKN;

const bot = new TelegramBot(token, { polling: true }); 

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Create the button
  const button = {
    text: 'Click me!',
    callback_data: 'button_click',
  };

  // Create the inline keyboard markup
  const keyboard = {
    inline_keyboard: [[button],[button]],
  };

  // Send the message with the button
  bot.sendMessage(chatId, 'Press the button:', {
    reply_markup: keyboard,
  });
});

// Handle button clicks
bot.on('callback_query', (query) => {
  if (query.data === 'button_click') {
    const chatId = query.message.chat.id;
    const messageId = query.message.message_id;

    // Respond to the button click
    bot.sendMessage(chatId, 'Button clicked!');

    // You can also edit or delete the original message if needed
    // bot.editMessageText('New text', { chat_id: chatId, message_id: messageId });
    // bot.deleteMessage(chatId, messageId);
  }
});