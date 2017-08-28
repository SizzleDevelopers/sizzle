const crypto = require('./crypto')

module.exports = {
  //create,
  exists,
  getById,
  getByName,
  createNewUser
}
function createNewUser(newUser, db) {
  const hash = crypto.getHash(newUser.password)


  return db('users')
    .insert({
        username: newUser.username,
        name: newUser.name,
        address: newUser.address,
        email: newUser.email,
        phone: newUser.phone,
        hash: hash
    })

}


function exists (username, db) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getById (id, db) {
  return db('users')
    .select('id', 'username')
    .where('id', id)
}

function getByName (username, db) {
  return db('users')
    .select()
    .where('username', username)
}
