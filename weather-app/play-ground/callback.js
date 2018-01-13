var getUser = (id, callback) => {
	var user = {
		id : id,
		name: 'Naresh Kurukuti'
	}
	
	setTimeout(() => {
		callback(user);
	}, 2000);
}

getUser(35, (userObject) => {
	console.log(userObject);
})