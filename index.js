const TeleBot = require('telebot');
const bot = new TeleBot(process.env.apikey)

// Events

bot.on('newChatMembers', (msg) => {

    let newUser = msg.new_chat_members[0];

    let name = newUser.first_name;
    if(newUser.last_name!=undefined){
        name += ` ${newUser.last_name}`;
    }
    let cmdInfo = '/info'
    let message = `Selamat datang ${name} (@${newUser.username})\nCek pinned message & ketik ${cmdInfo} untuk info lebih lanjut mengenai grup ini :)`;
    return msg.reply.text(message)
});


// Commands

bot.on(['/start'], (msg) => msg.reply.text('Welcome! @'+ msg.from.username ));

bot.on('/hello', (msg) => msg.reply.text('Hello @'+msg.from.username));

bot.on('/info', (msg, chat) => {

    try {
        let message = `
    Assalammu'alaykum, Salam Sejahtera untuk kita semua

    ❖ Grup ini adalah salah satu media yang akan kita gunakan untuk *sharing, learning and transfering knowledge* antaranggota maupun alumni HIFI Unpad
    ❖ Output yang diharapkan adalah lulusan atau calon lulusan HIFI mampu *berdaya saing tinggi* dalam *dunia kerja* atau lebih umumnya menghadapi *dunia pasca kampus*
    ❖ Akan diadakan Online Class setiap minggunya (tentatif)
    ❖ Grup ini terbuka bagi anggota/alumni HIFI Unpad yang memiliki *"eager to learn and share"*, baik yang masih menjalani studi semester 5 maupun alumni
    ❖ Semua anggota grup *tidak diperkenankan menjadi Silent Reader* selama beraktivitas dalam grup
    ❖ Dilarang menyebar hal-hal yang bersifat PORNOGRAFI, SARA, HOAX, ataupun hal-hal yang akan MENGGANGGU KENYAMANAN anggota grup
    ❖ Tetap menjaga etika dan sopan santun saat berkomunikasi dengan anggota grup lain
    
    *Yang bisa teman-teman lakukan :*
    ☑️ Berbagi ilmu melalui artikel, ebook, opini, pengalaman ataupun media lain yang akan menunjang proses sharing, learning and transfering
    ☑️ Berbagi informasi mengenai kesempatan loker, proyek, ataupun beasiswa
    ☑️ Silakan berdiskusi sampai ngebul
    ☑️ Silakan bertanya sampai puas
    ☑️ Silakan berdayakan grup ini agar terasa kebermanfaatannya
    
    
    *Form Informasi Anggota* (Wajib isi data ya)
    ➥ http://bit.ly/hlsh-reg-form
    
    *Learning Resources & Deck Log*
    ➥ http://bit.ly/hlsh-deck-logs
    *Upload File* 
    ➥ http://bit.ly/hlsh-resources-form
    *Public Folder (Drive)*
    ➥ http://bit.ly/hlsh-public-folder
    
    *Email*
    ➥ hifilearninghub@gmail.com
    *ZOOM Cloud Meeting Mobile*
    ➥ https://play.google.com/store/apps/details?id=us.zoom.videomeetings
    *ZOOM Cloud Meeting Desktop*
    ➥ https://zoom.us/client/latest/ZoomInstaller.exe
    *ZOOM's ID*
    ➥ \`put-zoom-id-here\`
    
    *"Karena diam tak pernah membawa perubahan"*
    `
    bot.sendMessage(msg.from.id, message, {parseMode:"Markdown"}) ;

    let registerMessage = `Pastikan isi [form informasi anggota](http://bit.ly/hlsh-reg-form) dulu ya :)`;
    bot.sendMessage(msg.from.id, registerMessage, {parseMode:"Markdown"});
    } catch (error) {
        return msg.reply.text(`Ups, ${msg.from.username} harus buka @maxwell_hifi_bot dan klik start dulu sebelum bisa menggunakan commands~`);
    }
    
});

bot.start();