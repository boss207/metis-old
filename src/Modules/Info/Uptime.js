const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor } = require('../../Core/Utils/Global.js');
const config = require('../../../config.json'); 

class Uptime extends Command { 
    constructor(){
        super({
            name: 'uptime', 
            module: 'Info', 
            aliases: ['up'], 
            userperms: 'User', 
            helpDetail: 'Shows the bot\'s uptime.', 
            helpUsage: 'uptime'
        });
    }

    async execute(client, msg) {
        const rawUptime = client.uptime;
        let sseconds = (Math.round(rawUptime / 1000));
        let days = Math.floor(Math.round(sseconds) / 86400);
        let hours = Math.floor(Math.round(sseconds) / 3600);
        sseconds %= 3600;
        let minutes = Math.floor(Math.round(sseconds) / 60);
        let seconds = sseconds % 60
        let build = 'Prod'
        if (client.user.id == '564570881037303819') build = 'Dev'

        const data = {
            embed: {
                title: 'Uptime',
                color: defaultColor,
                description: `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`,
                footer: {
                    text: `${client.user.username} | ${build} | PPID: ${process.ppid} | Shard ${msg.channel.guild.shard.id}`
                }
            }
        }
        client.createMessage(msg.channel.id, data)
    }
    }
    module.exports.cmd = Uptime;