const { MessageEmbed } = require("discord.js");
const logs = async (obj) => {
    const guild = obj.guild;
    if (!guild) return;
    const db = obj.db;
    const logs = guild.channels.cache.get(db.get(`logs_${guild.id}`));
    const color = db.get(`color_${guild.id}`) === null ? obj.client.config.color : db.get(`color_${guild.id}`);

    const embed = new MessageEmbed();
    embed.setTitle(`📰 ${obj.name}`);
    embed.addFields(
        { name: "Autheur:", value: `<@${obj.executor}>`, inline: true },
        { name: "Sanction:", value: `\`${obj.punish}\``, inline: true },
    );
    if (obj.salon) embed.addFields({ name: "Salon:", value: `\`${obj.salon}\``, inline: true });
    if (obj.user) embed.addFields({ name: "Membre:", value: `<@${obj.user}>`, inline: true });
    if (obj.roles) embed.addFields({ name: "Roles:", value: `<@&${obj.roles}>`, inline: true });
    if (obj.bot) embed.addFields({ name: "Bot:", value: `<@${obj.bot}>`, inline: true });
    if (obj.limit) embed.addFields({ name: "Limit:", value: `${obj.limit}`, inline: true });
    embed.setColor(color);
    embed.setTimestamp();
    if (logs) logs.send({ embeds: [embed] });
};

module.exports = logs