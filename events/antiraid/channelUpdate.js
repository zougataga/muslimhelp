const { MessageEmbed } = require("discord.js");
const axios = require('axios');
const header = require("../../util/headers.js");
const logs = require("../../util/logs.js");
module.exports = async (client, db, oldChannel, newChannel) => {
    const guild = oldChannel.guild;
    const dbname = "channeledit";
    const name = "Modification de salon";
    const raison = `Antiraid | ${name}`;
    const head = header(client.token);
    const base = `https://discord.com/api/v9/guilds/${guild.id}`;

    channel_update();
    perm_update();
    perm_add();
    perm_delete();

    async function channel_update() {
        const r = await axios.get(`${base}/audit-logs?ilimit=1&action_type=11`, { headers: head }).catch(()=>{})
        if (!r) return;
        const executor = guild.members.cache.get(r.data.audit_log_entries[0].user_id);
        if (executor) {
            let perm = "";
            let punish = "";
            let user_punish = false;
            if (db.get(`${dbname}wl_${guild.id}`) === null) perm = client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true || db.get(`wl_${guild.id}_${executor.id}`) === true;
            if (db.get(`${dbname}wl_${guild.id}`) === true) perm = client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true;
            if (db.get(`${dbname}_${guild.id}`) === true && !perm) {
                if (!db.get(`${dbname}sanction_${guild.id}`) || db.get(`${dbname}sanction_${guild.id}`) === "kick") punish = "kick";
                if (db.get(`${dbname}sanction_${guild.id}`) === "ban") punish = "ban";
                if (db.get(`${dbname}sanction_${guild.id}`) === "derank") punish = "derank";
                const obj2 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🟢 ${punish}`,
                    name: name,
                    salon: `${oldChannel.name}`
                };
                const obj3 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🔴 ${punish}`,
                    name: name,
                    salon: `${oldChannel.name}`
                };
                await newChannel.edit({
                    name: oldChannel.name,
                    permissions: oldChannel.permissionsOverwrites,
                    type: oldChannel.type,
                    topic: oldChannel.withTopic,
                    nsfw: oldChannel.nsfw,
                    birate: oldChannel.bitrate,
                    userLimit: oldChannel.userLimit,
                    rateLimitPerUser: oldChannel.rateLimitPerUser,
                    position: oldChannel.rawPosition,
                    reason: raison
                })
                if (punish === "ban") {
                    const rsl = await executor.ban(raison).catch(() => { });
                    if (rsl) user_punish = true;
                } else if (punish === "kick") {
                    const rsl = await executor.kick(raison).catch(() => { });
                    if (rsl) user_punish = true;
                } else if (punish === "derank") {
                    const rsl = await executor.roles.set([], raison).catch(() => { });
                    if (rsl) user_punish = true;
                }
                if (user_punish) return logs(obj2);
                else return logs(obj3);

            }
        }
    };
    async function perm_update() {
        const r = await axios.get(`${base}/audit-logs?ilimit=1&action_type=14`, { headers: head }).catch(()=>{})
        if (!r) return;
        const executor = guild.members.cache.get(r.data.audit_log_entries[0].user_id);
        if (executor) {
            let perm = "";
            let punish = "";
            let user_punish = false;
            if (db.get(`${dbname}wl_${guild.id}`) === null) perm = client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true || db.get(`wl_${guild.id}_${executor.id}`) === true;
            if (db.get(`${dbname}wl_${guild.id}`) === true) perm = client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true;
            if (db.get(`${dbname}_${guild.id}`) === true && !perm) {
                if (!db.get(`${dbname}sanction_${guild.id}`) || db.get(`${dbname}sanction_${guild.id}`) === "kick") punish = "kick";
                if (db.get(`${dbname}sanction_${guild.id}`) === "ban") punish = "ban";
                if (db.get(`${dbname}sanction_${guild.id}`) === "derank") punish = "derank";
                const obj2 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🟢 ${punish}`,
                    name: name,
                    salon: `${oldChannel.name}`
                };
                const obj3 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🔴 ${punish}`,
                    name: name,
                    salon: `${oldChannel.name}`
                };
                await newChannel.permissionOverwrites.set(oldChannel.permissionOverwrites.cache)
                if (punish === "ban") {
                    const rsl = await executor.ban(raison).catch(() => { });
                    if (rsl) user_punish = true;
                } else if (punish === "kick") {
                    const rsl = await executor.kick(raison).catch(() => { });
                    if (rsl) user_punish = true;
                } else if (punish === "derank") {
                    const rsl = await executor.roles.set([], raison).catch(() => { });
                    if (rsl) user_punish = true;
                }
                if (user_punish) return logs(obj2);
                else return logs(obj3);

            }
        }
    };
    async function perm_add() {
        const r = await axios.get(`${base}/audit-logs?ilimit=1&action_type=13`, { headers: head }).catch(()=>{})
        if (!r) return;
        const executor = guild.members.cache.get(r.data.audit_log_entries[0].user_id);
        if (executor) {
            let perm = "";
            let punish = "";
            let user_punish = false;
            if (db.get(`${dbname}wl_${guild.id}`) === null) perm = client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true || db.get(`wl_${guild.id}_${executor.id}`) === true;
            if (db.get(`${dbname}wl_${guild.id}`) === true) perm = client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true;
            if (db.get(`${dbname}_${guild.id}`) === true && !perm) {
                if (!db.get(`${dbname}sanction_${guild.id}`) || db.get(`${dbname}sanction_${guild.id}`) === "kick") punish = "kick";
                if (db.get(`${dbname}sanction_${guild.id}`) === "ban") punish = "ban";
                if (db.get(`${dbname}sanction_${guild.id}`) === "derank") punish = "derank";
                const obj2 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🟢 ${punish}`,
                    name: name,
                    salon: `${oldChannel.name}`
                };
                const obj3 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🔴 ${punish}`,
                    name: name,
                    salon: `${oldChannel.name}`
                };

                await newChannel.permissionOverwrites.set(oldChannel.permissionOverwrites.cache)

                if (punish === "ban") {
                    const rsl = await executor.ban(raison).catch(() => { });
                    if (rsl) user_punish = true;
                } else if (punish === "kick") {
                    const rsl = await executor.kick(raison).catch(() => { });
                    if (rsl) user_punish = true;
                } else if (punish === "derank") {
                    const rsl = await executor.roles.set([], raison).catch(() => { });
                    if (rsl) user_punish = true;
                }
                if (user_punish) return logs(obj2);
                else return logs(obj3);

            }
        }
    };
    async function perm_delete() {
        const r = await axios.get(`${base}/audit-logs?ilimit=1&action_type=15`, { headers: head }).catch(()=>{})
        if (!r) return;
        const executor = guild.members.cache.get(r.data.audit_log_entries[0].user_id);
        if (executor) {
            let perm = "";
            let punish = "";
            let user_punish = false;
            if (db.get(`${dbname}wl_${guild.id}`) === null) perm = client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true || db.get(`wl_${guild.id}_${executor.id}`) === true;
            if (db.get(`${dbname}wl_${guild.id}`) === true) perm = client.user.id === executor.id || guild.ownerId === executor.id || client.config.owner.includes(executor.id) || db.get(`owner_${client.user.id}_${executor.id}`) === true;
            if (db.get(`${dbname}_${guild.id}`) === true && !perm) {
                if (!db.get(`${dbname}sanction_${guild.id}`) || db.get(`${dbname}sanction_${guild.id}`) === "kick") punish = "kick";
                if (db.get(`${dbname}sanction_${guild.id}`) === "ban") punish = "ban";
                if (db.get(`${dbname}sanction_${guild.id}`) === "derank") punish = "derank";
                const obj2 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🟢 ${punish}`,
                    name: name,
                    salon: `${oldChannel.name}`
                };
                const obj3 = {
                    client: client,
                    guild: guild,
                    db: db,
                    executor: executor.id,
                    punish: `🔴 ${punish}`,
                    name: name,
                    salon: `${oldChannel.name}`
                };

                newChannel.permissionOverwrites.set(oldChannel.permissionOverwrites.cache)

                if (punish === "ban") {
                    const rsl = await executor.ban(raison).catch(() => { });
                    if (rsl) user_punish = true;
                } else if (punish === "kick") {
                    const rsl = await executor.kick(raison).catch(() => { });
                    if (rsl) user_punish = true;
                } else if (punish === "derank") {
                    const rsl = await executor.roles.set([], raison).catch(() => { });
                    if (rsl) user_punish = true;
                }
                if (user_punish) return logs(obj2);
                else return logs(obj3);

            }
        }
    };
}
