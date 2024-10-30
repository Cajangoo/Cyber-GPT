require('dotenv/config');
const { Client } = require('discord.js');
const { OpenAI } = require('openai');

const client = new Client ({
    intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent']
});

client.on('ready', () => {
    console.log('The Cyber-GPT is online.');
});

const IGNORE_PREFIX = ["!","+"];
const CHANNELS = ['1301176341147811891'];

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(IGNORE_PREFIX)) return;
    if (!CHANNELS.includes(message.channelId) && !message.mentions.users.has(client.user.id)) return;

    
});

client.login(process.env.TOKEN);