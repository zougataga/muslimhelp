const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ping',
    aliases: ["latence"],
    go: async (client, db, message, args, prefix, color) => {
        if (db.get(`owner_${client.user.id}_${message.author.id}`) === true) {
            const embed = new MessageEmbed()
                .addField("Ping", `Calcul en cours`, true)
                .addField("Latence", `${client.ws.ping}ms`, true)
                .setColor(color);
            const msg = await message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
            const embed2 = new MessageEmbed()
                .addField("Ping", `${msg.createdAt - message.createdAt + "ms"}`, true)
                .addField("Latence", `${client.ws.ping}ms`, true)
                .setColor(color);
            return msg.edit({ embeds: [embed2] })
        }
    }
}
