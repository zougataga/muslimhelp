const { MessageEmbed, Permissions } = require("discord.js");
const axios = require('axios');
const logs = require("../../util/logs.js");

module.exports = async (client, db, message) => {

    const guild = message.guild;
    const executor = guild.members.cache.get(message.author.id);
    if (executor) {
        ping();
        pub();
        spam();
    }

    async function ping() {
        const dbname = "ping";
        const name = "Multiplication de ping";
        const raison = `Antiraid | ${name}`;
        let perm = "";
        let punish = "";
        let user_punish = false;
        const pg = [
            "@everyone",
            "@here",
        ];
        if (pg.some(word => message.content.includes(word))) {
            await db.add(`messagespingcount_${guild.id}_${executor.id}`, 1)
            if (db.get(`${dbname}wl_${guild.id}`) === null) perm = db.get(`messagespingcount_${guild.id}_${executor.id}`) <= 3 || client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true || db.get(`wl_${guild.id}_${executor.id}`) === true;
            if (db.get(`${dbname}wl_${guild.id}`) === true) perm = db.get(`messagespingcount_${guild.id}_${executor.id}`) <= 3 || client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true;
            if (db.get(`${dbname}_${guild.id}`) === true && !perm) {
                if (!db.get(`${dbname}sanction_${guild.id}`) || db.get(`${dbname}sanction_${guild.id}`) === "kick") punish = "kick";
                if (db.get(`${dbname}sanction_${guild.id}`) === "ban") punish = "ban";
                if (db.get(`${dbname}sanction_${guild.id}`) === "derank") punish = "derank";
                const obj2 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🟢 exclusion 5m`,
                    name: name,
                };
                const obj3 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🔴 exclusion 5m`,
                    name: name,
                };
                db.delete(`messagespingcount_${guild.id}_${executor.id}`);
                message.delete()
                const rsl = await executor.roles.set([], raison).catch(() => { });
                const rsl2 = await executor.timeout(60000 * 5, raison).catch(() => { });
                if (rsl2 && rsl) user_punish = true;
                if (user_punish) return logs(obj2);
                else return logs(obj3);
            }
        }
    }
    async function spam() {
        const dbname = "spam";
        const name = "Multiplication de message";
        const raison = `Antiraid | ${name}`;
        let perm = "";
        let punish = "";
        let user_punish = false;
        const count = await db.add(`messagespamcount_${guild.id}_${executor.id}`, 1);
        setTimeout(() => {
            db.delete(`messagespamcount_${guild.id}_${executor.id}`);
        }, 20000);
        if (count >= 5) {
            if (db.get(`${dbname}wl_${guild.id}`) === null) perm = client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true || db.get(`wl_${guild.id}_${executor.id}`) === true;
            if (db.get(`${dbname}wl_${guild.id}`) === true) perm = client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true;
            if (db.get(`${dbname}_${guild.id}`) === true && !perm) {
                const obj2 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🟢 exclusion 5m`,
                    name: name,
                };
                const obj3 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🔴 exclusion 5m`,
                    name: name,
                };
                const spammsg = await await message.channel.messages.fetch({ limit: 5 });
                spammsg.filter(msg => msg.author.id === executor.id).forEach(m => { m.delete().catch(() => { }); });
                if (count >= 5) {
                    const rsl = await executor.roles.set([], raison).catch(() => { });
                    const rsl2 = await executor.timeout(60000 * 5, raison).catch(() => { });
                    if (rsl2 && rsl) user_punish = true;;
                    if (user_punish) return logs(obj2);
                    else return logs(obj3);
                }
            }
        }
    }
    async function pub() {
        const discord = RegExp(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|)|discordapp\/invite)\/.+[^\s]/);
        if (discord.test(message.content)) {
            const count = await db.add(`pubcount_${guild.id}_${executor.id}`, 1);
            const dbname = "pub";
            const name = "Message contenant une invitation discord";
            const raison = `Antiraid | ${name}`;
            let perm = "";
            let user_punish = false;
            if (db.get(`${dbname}wl_${guild.id}`) === null) perm = client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true || db.get(`wl_${guild.id}_${executor.id}`) === true;
            if (db.get(`${dbname}wl_${guild.id}`) === true) perm = client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true;
            if (db.get(`${dbname}_${guild.id}`) === true && !perm) {
                const obj2 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🟢 exclusion 5m`,
                    name: name,
                };
                const obj3 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🔴 exclusion 5m`,
                    name: name,
                };
                message.delete();

                if (count >= 3) {
                    const rsl = await executor.roles.set([], raison).catch(() => { });
                    const rsl2 = await executor.timeout(60000 * 5, raison).catch(() => { });
                    if (rsl2 && rsl) user_punish = true;;
                    if (user_punish) return logs(obj2);
                    else return logs(obj3);
                }
            }
        }
    }
}
