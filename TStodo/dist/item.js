"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    // taskId:number;
    // task :string;
    // done:boolean;
    constructor(taskId, task, done = false) {
        this.taskId = taskId;
        this.task = task;
        this.done = done;
        // this.taskId=taskId;
        // this.task=task;
        // this.done=done;
        // no need
    }
    printTask() {
        console.log(`id = ${this.taskId},\t task = ${this.task},\t done = ${this.done}`);
    }
}
exports.Item = Item;
