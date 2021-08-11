"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemCollection_1 = require("./itemCollection");
// let item:Item = new Item(11,'first',false)
// item.printTask()
let itemCollection = new itemCollection_1.ItemCollection();
itemCollection.addTodo('eat mangoes');
itemCollection.addTodo('eat biryni');
itemCollection.addTodo('learn ts');
itemCollection.taskDone(1);
itemCollection.printAll();
