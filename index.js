const TeleBot = require('telebot');
const bot = new TeleBot(process.env.apikey)

bot.on('text', (msg) => msg.reply.text(msg.text));

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));

bot.start();