export class Item {
    // taskId:number;
    // task :string;
    // done:boolean;
   public constructor( public taskId:number,public task :string,public done:boolean = false) {
    // this.taskId=taskId;
    // this.task=task;
    // this.done=done;
    // no need
   }
   public printTask():void{
       console.log(`id = ${this.taskId},\t task = ${this.task},\t done = ${this.done}`)
   }
}