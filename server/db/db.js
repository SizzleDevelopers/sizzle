const getIngredients = (db) => {
  return db('ingredients')
  .select('*')
}

const getIngredientsByUser = (db, user) => {
  return db('users')
  .join('ingredients', 'user_id', 'user.id')
}

const getSkills = (db) => {
  return db('skills')
  .select('*')
}

const getLocations = (db) => {
  return db('locations')
  .select('*')
}
const getResources = (db) => {
  return db('resources')
  .select('*')
}

const saveIngredients = (db, ingredient) => {
  return db('ingredients')
  .insert(ingredients)
}
const saveResources = (db, resource) => {
  return db('resources')
  .insert(resource)
}

const saveSkills = (db) => {
  return db('skills')
  .insert(skills)
}

const saveLocations = (db, location) => {
  return db('locations')
  .insert(locations)
}

const getEvents = (db) => {
  return db('events').select()
}

const getEventById = (db, id) => {
  return db('events').where('id', id).first()
}

const saveEvent = (db, event) => {
  return db('events').insert(event)
}

const delEvent = (db, id) => {
  return getEventById(db, id).del()
}

module.exports = {
  getIngredients,
  getSkills,
  saveIngredients,
  saveSkills,
  saveLocations,
  saveResources,
  getResources,
  getLocations,
  getEvents,
  getEventById,
  saveEvent,
  delEvent
}
