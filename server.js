const {
  server,
  port,
  onError,
  onListening,
  app } = require('./bin/www')
const next = require('next')


const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

//add routes here
const indexRouter = require('./routes/api');


nextApp.prepare().then(() => {

  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);

  //user routers here
  app.use("/api", indexRouter)


  //dont change this if change it your program dont work with nextjs routing
  app.get('*', (req, res) => {
    return handle(req, res)
  })

})