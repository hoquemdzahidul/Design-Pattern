/*Importing the task constructor from script.js file . its only working on node

 enverrment because require function is not defined in the browser 

for more information you can check out this link or you can try any solution 

https://stackoverflow.com/questions/19059580/client-on-node-uncaught-referenceerror-require-is-not-defined
  */

 var Task = require('./script' );




var task1 = new Task("Create a demo for constructor!");
var task2 = new Task("Create a demo for modulae!");
var task3 = new Task("Create a demo for singleton!");
var task4 = new Task("Create a demo for prototype!");