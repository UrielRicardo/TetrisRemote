'use strict'


function Api () {
	var token = '';
}

Api.beginConnection = function (callback) {
	socket = new WebSocket('ws://'+SOCKET_SERVER_ADDR+':'+SOCKET_SERVER_PORT)

	socket.onmessage = function (message) {
		var data = JSON.parse(message.data)

		console.log(data)

		if (data.name == 'api.associated.token') {
			Api.token = data.data.token
		}

		if (callbacks[data.name]) {
			callbacks[data.name](data.data)
		}
	};

	socket.onopen = function () {
		callback.call()
	}
};

Api.on = function (name, callback) {
	callbacks[name] = callback
}

Api.send = function (name, data) {
	var message = {
		name: name,
		direction: 'device_to_player',
		data: data
	}

	if (Api.token != '') {
		message.token = Api.token
	}

	socket.send(JSON.stringify(message))
};
