/* actually its working like a prototype design pattern.In constructor pattern we have seen when you create a object then every object create a o
own copy of the complete and save function but in prototype pattern its referance */



class Task 
{
    constructor(name)
    {
        this.name = name;
        this.completed = false;
    };
     // complete function 
    complete ()
    {
        console.log('completing task  : ' + task.name);
        this.completed = true;
    };
	// save function for saving the object
    save()
    {
        console.log("Saving task " + this.name)
    };
   
}




var task1 = new Task("Create a demo for constructor!");
var task2 = new Task("Create a demo for modulae!");
var task3 = new Task("Create a demo for singleton!");
var task4 = new Task("Create a demo for prototype!");
