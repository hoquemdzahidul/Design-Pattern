var Task = function(name)
{
	this.name = name;
    this.completed = false;
    this.complete = function()
    {
    	console.log('completing task  : ' + task.name);
    	this.completed = true;
    }
    this.save = function()
    {
    	console.log("Saving task " + this.name)
    }
}

var task1 = new Task("Create a demo for constructor!");
var task2 = new Task("Create a demo for modulae!");
var task3 = new Task("Create a demo for singleton!");
var task4 = new Task("Create a demo for prototype!");
