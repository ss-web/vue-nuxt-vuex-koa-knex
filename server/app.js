import Koa from 'koa'
import http from 'http'
import * as _io from 'socket.io-client'

const app = new Koa(),
      host = process.env.HOST || '127.0.0.1',
      port = process.env.PORT || 3000,
      server = http.createServer(app.callback()),
      io = _io(server)
    
  io.sockets.on('connection', client => {
    console.log('io Connected')
  //   // client.join('messages');
  //   // client.on('message', req => {
  //   //     // insertInto(req);
  //   //     console.log(req.message)
  //   //     io.to('messages').emit('message', req.message);
  //   // });

  //   // statuses
  //   // client.join('statuses');
  //   // client.on('status', req => {
  //   //   console.log(req.status)
  //   //   io.to('statuses').emit('status', req.status);
  //   // });
  })

export default {
  app,
  host,
  port
}