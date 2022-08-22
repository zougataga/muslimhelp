const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
module.exports = {
    name: 'whitelist',
    aliases: ["wl"],
    go: async (client, db, message, args, prefix, color) => {
        if (db.get(`owner_${client.user.id}_${message.author.id}`) === true) {
            if (args[0] === "add") {
                let member = client.users.cache.get(message.author.id);
                if (args[1]) member = client.users.cache.get(args[1]);
                else return message.reply({ allowedMentions: { repliedUser: false }, content: `Aucun membre trouvé pour \`${args[1] || "❌"}\`` });
                if (message.mentions.members.first()) member = client.users.cache.get(message.mentions.members.first().id);
                if (!member) return message.reply({ allowedMentions: { repliedUser: false }, content: `Aucun membre trouvé pour \`${args[1] || "❌"}\`` });
                if (db.get(`wl_${message.guild.id}_${member.id}`) === true) return message.reply({ allowedMentions: { repliedUser: false }, content: `${member.username} est déjà whitelist` });
                await db.set(`wl_${message.guild.id}_${member.id}`, true)
                return message.reply({ allowedMentions: { repliedUser: false }, content: `${member.username} est maintenant whitelist` });
            } else if (args[0] === "clear") {
                const data = await db.all().filter(data => data.ID.startsWith(`wl_${message.guild.id}`));
                let clear = 0;
                for (let i = 0; i < data.length; i++) {
                    db.delete(data[i].ID);
                    clear++;
                };
                return message.reply({ allowedMentions: { repliedUser: false }, content: `${data.length ? data.length : 0} ${data.length > 1 ? "personnes ont été supprimées " : "personne a été supprimée"} des whitelists` });
            } else if (args[0] === "remove") {
                let member = client.users.cache.get(message.author.id);
                if (args[1]) member = client.users.cache.get(args[1]);
                else return message.reply({ allowedMentions: { repliedUser: false }, content: `Aucun membre trouvé pour \`${args[1] || "❌"}\`` });
                if (message.mentions.members.first()) member = client.users.cache.get(message.mentions.members.first().id);
                if (!member) return message.reply({ allowedMentions: { repliedUser: false }, content: `Aucun membre trouvé pour \`${args[1] || "❌"}\`` });
                if (db.get(`wl_${message.guild.id}_${member.id}`) === null) return message.reply({ allowedMentions: { repliedUser: false }, content: `${member.username} n'est pas whitelist` });
                await db.delete(`wl_${message.guild.id}_${member.id}`)
                return message.reply({ allowedMentions: { repliedUser: false }, content: `${member.username} n'est plus whitelist` });
            } else if (args[0] === "list") {
                const data = db.all().filter(data => data.ID.startsWith(`wl_${message.guild.id}`)).sort((a, b) => b.data - a.data)
                const count = 15;
                let p0 = 0;
                let p1 = count;
                let page = 1;

                let embed = new MessageEmbed()
                embed.setTitle(`Whitelist`)
                    .setFooter({ text: `${page} / ${Math.ceil(data.length / count) === 0 ? 1 : Math.ceil(data.length / count)}` })
                    .setColor(color)
                    .setDescription(data
                        // .filter(x => message.guild.members.cache.get(x.ID.split('_')[2]))
                        .slice(p0, p1).map((m, c) => `<@${m.ID.split("_")[2]}> `).join("\n") || "Aucune donnée trouvée");
                const msg = await message.reply({ content: `Chargement...`, allowedMentions: { repliedUser: false } });

                if (data.length > count) {
                    const btn = new MessageActionRow()
                        .addComponents(new MessageButton()
                            .setCustomId(`wl1_${message.id}`)
                            .setLabel('◀')
                            .setStyle('PRIMARY'))
                        .addComponents(new MessageButton()
                            .setCustomId(`wl2_${message.id}`)
                            .setLabel('▶')
                            .setStyle('PRIMARY'));
                    msg.edit({ content: null, allowedMentions: { repliedUser: false }, embeds: [embed], components: [btn] });
                    setTimeout(() => {
                        message.delete();
                        return msg.delete();
                    }, 60000 * 5);

                    const collector = msg.createMessageComponentCollector({ componentType: 'BUTTON', time: 60000 * 5 });
                    collector.on("collect", async interaction => {
                        if (interaction.user.id !== message.author.id) return;
                        interaction.deferUpdate()

                        if (interaction.customId === `wl1_${message.id}`) {
                            if (p0 - count < 0) return;
                            if (p0 - count === undefined || p1 - count === undefined) return;

                            p0 = p0 - count;
                            p1 = p1 - count;
                            page = page - 1

                            embed.setFooter({ text: `${page} / ${Math.ceil(data.length / count) === 0 ? 1 : Math.ceil(data.length / count)}` })
                                .setDescription(data
                                    // .filter(x => message.guild.members.cache.get(x.ID.split('_')[2]))
                                    .slice(p0, p1).map((m, c) => `<@${m.ID.split("_")[2]}> `).join("\n") || "Aucune donnée trouvée");
                            msg.edit({ embeds: [embed] });
                        }
                        if (interaction.customId === `wl2_${message.id}`) {
                            if (p1 + count > data.length + count) return;
                            if (p0 + count === undefined || p1 + count === undefined) return;

                            p0 = p0 + count;
                            p1 = p1 + count;
                            page++;

                            embed.setFooter({ text: `${page} / ${Math.ceil(data.length / count) === 0 ? 1 : Math.ceil(data.length / count)}` })
                                .setDescription(data
                                    // .filter(x => message.guild.members.cache.get(x.ID.split('_')[2]))
                                    .slice(p0, p1).map((m, c) => `<@${m.ID.split("_")[2]}> `).join("\n") || "Aucune donnée trouvée");
                            msg.edit({ embeds: [embed] });
                        }
                    })
                } else {
                    msg.edit({ content: null, allowedMentions: { repliedUser: false }, embeds: [embed] })
                }
            }
        }
    }
}
