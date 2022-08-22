
module.exports = async (client, db) => {
    console.log(`> Connecter: ${client.user.tag}`);
    client.user.setActivity(`?????`);
    client.config.owner.forEach(e => {
        if(db.get(`owner_${client.user.id}_${e}`) !== true) db.set(`owner_${client.user.id}_${e}`, true);
    });
}