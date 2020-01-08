const db = require('../data/dbConfig')

module.exports = {
    find,
    register
}
function find(username){
    let queue = db('user')
    if(username){
        queue = db('user').where({username}).first()
    }
    return queue
}
function register (user){
    return db('user').insert(user)
}