const server = require('./app')
const { PORT } = require('./config')



server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})