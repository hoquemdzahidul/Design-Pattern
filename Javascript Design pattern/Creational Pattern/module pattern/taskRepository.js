

var repo = function (argument) {
	var db = {};

	var get = function(id)
		{
			console.log("Getting task "+ id);
			return{
				name: 'new tasl from db'
			}
		}

	var save = function(task)
	{
		console.log("Saving the task : "+ task.name + "to the db");
	}

	return{
		get: get,
		save : save

	}
	
}
module.exports = repo();