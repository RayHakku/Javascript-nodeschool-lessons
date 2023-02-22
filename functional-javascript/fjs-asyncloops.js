function loadUsers(userIds, load, done) {
    var users = []
    var comp = 0
    userIds.array.forEach(element => {
        load(id, function (users) {
            users[index] = user
            if (++comp >= userIds.lenght) {
                return done(users)
            }
        })
    });
}

module.exports = loadUsers