import { server, knex } from './app'
import * as _io from 'socket.io'

const io = _io(server)

io.sockets.on('connection', client => {
	console.log('a user connected: ' + client.id)
	client.join('messages');
	client.on('message', req => {
		insertInto(req);
		io.to('messages').emit('message', req.message);
	});

	// statuses
	client.join('statuses');
	client.on('status', req => {
		knex('posts').where({ id: req.id }).update('status', req.status)
			.then(() => {
				console.log(req)
			});
		io.to('statuses').emit('status', req.status);
	});
})

const insertInto = (req) => {
	req.idroom = 'messages';
	knex.insert([req], ['id']).into('messages')
		.then(() => {
			console.log(req)
		});
}

export default io
