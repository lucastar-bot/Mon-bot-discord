const Discord = require("discord.js");
const Client = new Discord.Client;
Client.on("ready", () => {
    console.log(" bot prêt");
});

Client.on("message", message => {
    if(message.content === 'Salut') {
        message.channel.send('Salut à toi <@' + message.author.id + '> !');
    }
    });
Client.login("ODMyOTU1NjE0ODM3MDgwMDk1.YHrUXg.g68gLNkdvgs1tTr-QZiqpD87gRg")
