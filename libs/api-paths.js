const path = {
	userList: /\/user$/,
	user: /\/user\/(\w+)$/,
	serviceList: /\/service$/,
	service: /\/service\/(\w+)$/
}

module.exports = [{
	request: 'get',
	path: path.userList,
	control: function getListOfUserObjects(req, res) {
		res.send(`list of _user_ objects`)
	}
},{
	request: 'put',
	path: path.user,
	control: function createUserObject(req, res) {
		const username = req.params[0]
		res.send(`create single _user_ object for ${username}`)
	}
},{
	request: 'get',
	path: path.user,
	control: function getUserObject(req, res) {
		const username = req.params[0]
		res.send(`get _user_ object for ${username}`)
	}
},{
	request: 'post',
	path: path.user,
	requiresAuth: true,
	control: function updateUserObject(req, res) {
		const username = req.params[0]
		// TODO requires auth
		res.send(`update _user_ object for ${username}`)
	}
},{
	request: 'delete',
	path: path.user,
	requiresAuth: true,
	control: function deleteUserObject(req, res) {
		const username = req.params[0]
		// TODO requires auth
		res.send(`deleting _user_ object for ${username}`)
	}
},{
	request: 'put',
	path: path.serviceList,
	requiresAuth: true,
	control: function createServiceObject(req, res) {
		res.send(`create _service_ object and return uuid`)
	}
},{
	request: 'get',
	path: path.serviceList,
	requiresAuth: true,
	control: function getListOfServiceObjects(req, res) {
		res.send(`get list of _service_ objects`)
	}
},{
	request: 'get',
	path: path.service,
	requiresAuth: true,
	control: function getServiceObject(req, res) {
		const uuid = req.params[0]
		res.send(`get _service_ object ${uuid}`)
	}
},{
	request: 'post',
	path: path.service,
	requiresAuth: true,
	control: function updateServiceObject(req, res) {
		const uuid = req.params[0]
		res.send(`update _service_ object ${uuid}`)
	}
},{
	request: 'delete',
	path: path.service,
	requiresAuth: true,
	control: function deleteServiceObject(req, res) {
		const uuid = req.params[0]
		res.send(`delete _service_ object ${uuid}`)
	}
}]
