const header = (token) => {
    return {
        Authorization: `Bot ${token}`,
        'content-type': 'application/json'
    }
};

module.exports = header