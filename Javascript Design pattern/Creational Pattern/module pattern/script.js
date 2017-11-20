var Repo = require('./taskRepository');

var Task = function(data)
{
	this.name = data.name;
    this.completed = false;
   
}
// complete function 
Task.prototype.complete =  function()
    {
        console.log('completing task  : ' + task.name);
        this.completed = true;
    }

// save function for saving the object
Task.prototype.save =  function()
    {
        
        Repo.save(this);
    }

module.exports = Task ;