module.exports = async (client, db, message) => {
    if (message.author.bot) return;
    if (message.channel.type == "DM") return;

    const prefix = db.get(`prefix_${message.guild.id}`) === null ? client.config.prefix : db.get(`prefix_${message.guild.id}`);
    const color = db.get(`color_${message.guild.id}`) === null ? client.config.color : db.get(`color_${message.guild.id}`);

    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`)) !== null) {
        if (client.config.owner.includes(message.author.id) || db.get(`owner_${client.user.id}_${message.author.id}`) === true) {
            return message.reply({ content: `Mon prefix : \`${prefix}\``, allowedMentions: { repliedUser: false } })
        }
    }

    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;
    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (command) command.go(client, db, message, args, prefix, color);
}
