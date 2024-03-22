const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');  
const dotenv=require('dotenv')
dotenv.config()

const bot = new Telegraf(process.env.BOT_KEY);
bot.start((ctx) => {
    // console.log(ctx)
    // ctx.reply('Welcome to Chatbot'); 
    ctx.reply( `Welcome to ChatBot
    
This bot is in its initial stage, so try to explore using these commands and texts only 🙏

    /start,/help,/whomadethis
    on sending hi,
    sending a sticker,
    sending and emoji
    
    `);
    ctx.reply(`
Aap upr ki baate choriye  
Kripya apna naam btaiye`)

   
});

bot.on(message('sticker'), (ctx) => ctx.reply(`Stickers ki language mai smjhta hoon par abhi jawab dena nhi sikha,Par boht  jld  he maalik mujhe sikha denge (❁'◡'❁)`
));
bot.command('whomadethis',(ctx)=>{
    ctx.reply('Mere Malik "Abhishek Pantole" hai par mai apka kaam bhi kr skta hoon');
});
bot.command('hi',(ctx)=>{
    ctx.reply('Hello Guest apka swagat hai ChatBot ke duniya mein');
}); 

bot.help((ctx) => ctx.reply('mai? aap mere se help maang rhe ho? Fir toh galat jgh pe aa gye ho'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));


bot.on('text', (ctx) => {
    // Check if the message contains an emoji
    if (containsEmoji(ctx.message.text)) {
        // Send a response
        ctx.reply(`Ye krna toh mereko bhi aata hai 
ye dekho :`);
ctx.reply(`${ctx.message.text}`);
    }
    else{
        ctx.reply(`hello ${ctx.message.text} kaise ho aap,umeed krta hoon ache he honge`)
    }
});


function name(text){
    return 
}

// Function to check if the message contains an emoji
function containsEmoji(text) {
    const emojiRegex = /[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
    return emojiRegex.test(text); 
}

bot.launch();  