const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
module.exports = {
    name: 'help',
    aliases: ["h"],
    go: async (client, db, message, args, prefix, color) => {
        if (db.get(`owner_${client.user.id}_${message.author.id}`) === true) {
            const embed = new MessageEmbed()
                .setTitle(`Help`)
                .setColor(color)
                .setFooter({ text: "https://github.com/llx404" })
                .addFields(
                    { name: "./Antiraid", value: `\`\`\`${prefix}antiraid [on/off/max/config]\n${prefix}whitelist <add/clear/list/remove>\`\`\``, inline: false },
                    { name: "./Misc", value: `\`\`\`${prefix}help\n${prefix}ping\`\`\``, inline: false },
                    { name: "./Owner", value: `\`\`\`${prefix}blacklist <add/clear/list/remove>\n${prefix}owner <add/clear/list/remove>\`\`\``, inline: false },
                );
            message.reply({ content: null, embeds: [embed], allowedMentions: { repliedUser: false } });
        }
    }
}
