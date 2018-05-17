const TeleBot = require('telebot');
const bot = new TeleBot(process.env.apikey)


bot.on('newChatMembers', (msg) => msg.reply.text("Selamat datang "+msg.new_chat_members[0].first_name + " " + msg.new_chat_members[0].last_name));


bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome! '+ msg.from.username ));

bot.start();