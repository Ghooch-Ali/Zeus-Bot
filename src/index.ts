import { Bot } from "grammy";
console.log(`Hello Node.js v${process.versions.node}!`);

const token = process.env.TELEGRAM_BOT_TOEKN as string

 
// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(token); // <-- put your bot token between the ""

bot.command('help', (ctx) => {
  ctx.reply(`
  The bot could greet people in different languages.
  The list of supported greetings:
  - hello - English
  - salut - French
  - hola - Spanish
  `)
});

bot.hears('salut', (ctx) => ctx.reply('salut'));
bot.hears('hello', (ctx) => ctx.reply('hello'));
bot.hears('hola', (ctx) => ctx.reply('hola'));

bot.on('message:text', (ctx) => ctx.reply(`Greeting "${ctx.update.message.text}" is not supported.`))

bot.start();