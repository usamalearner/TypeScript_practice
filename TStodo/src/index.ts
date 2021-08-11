import {Item} from './item'
import {ItemCollection} from './itemCollection'
// let item:Item = new Item(11,'first',false)
// item.printTask()
let itemCollection:ItemCollection = new ItemCollection();
itemCollection.addTodo('eat mangoes');
itemCollection.addTodo('eat biryni');
itemCollection.addTodo('learn ts');
itemCollection.taskDone(1);
itemCollection.printAll();