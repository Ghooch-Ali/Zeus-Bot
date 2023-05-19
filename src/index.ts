import { Bot } from "grammy";
import type { } from "@grammyjs/types"
console.log(`Hello Node.js v${process.versions.node}!`);

const token = process.env.TELEGRAM_BOT_TOEKN as string


// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(token); // <-- put your bot token between the ""

bot.command('start', (ctx) => {
  ctx.reply('Choose an option:', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Button 1', callback_data: 'button1' },
          { text: 'Button 2', callback_data: 'button2' },
        ],
        [
          { text: 'Button 3', callback_data: 'button3' },
          { text: 'Button 4', callback_data: 'button4' },
        ],
      ],
    },
  });
});

bot.onCallbackQuery((ctx) => {
  const buttonData = ctx.callbackQuery.data;
  ctx.reply(`You clicked: ${buttonData}`);
});

bot.start();