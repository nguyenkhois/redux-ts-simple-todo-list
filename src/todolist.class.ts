import { Task, Action } from './todolist.interfaces';

// Handle all actions
export class HandleActions {
    store: any;
    constructor (inputStore: any) {
        this.store = inputStore;
    }

    handleRemove = (itemId: number) => {
        let action: Action = {type:'REMOVE_TASK', task: {id: itemId}};
        this.store.dispatch(action); // Redux method
    }
    
    handleRemoveCompleted = () => {
        let action: Action = {type: 'REMOVE_COMPLETED'};
        this.store.dispatch(action);
    }

    handleCheck = (itemId: number) => {
        let action: Action = {type:'CHECKED', task: {id: itemId}};
        this.store.dispatch(action);
    }    
}

// Handle render hold the app
let dspResults = <HTMLInputElement>document.getElementById('dspResults');
export class HandleRender extends HandleActions {
    store: any;
    constructor (inputStore: any) {
        super(inputStore);
    }

    renderContent = () => {
        let allTasks = this.store.getState(); // Redux method
        let todoList = <HTMLElement>document.createElement('ul');
    
        allTasks.map((item: Task)=>{       
            let task = <HTMLElement>document.createElement('li');
    
            // Create checkbox
            let taskCheckBox = <HTMLInputElement>document.createElement('input')
            taskCheckBox.setAttribute('type','checkbox');
            taskCheckBox.addEventListener('click',()=>this.handleCheck(item.id));
    
            // Create description
            let taskText = document.createTextNode(item.description);
         
            // Create button for removing
            let taskButton = <HTMLElement>document.createElement('button')
            taskButton.appendChild(document.createTextNode('Remove'));
            taskButton.addEventListener('click',()=>this.handleRemove(item.id));
    
            // Check task is done or not
            if (item.isDone){
                task.classList.add('strike-text');
                taskCheckBox.setAttribute('checked','');
            }  else null;
    
            //Render whole a task
            task.appendChild(taskCheckBox);
            task.appendChild(taskText);
            task.appendChild(taskButton);
    
            //Append a task to the Todo list
            todoList.appendChild(task);
        });
    
        //Render whole the app and a button "Remove completed" at the end of todo list
        dspResults.innerHTML = '';
        if (allTasks.filter((item: Task)=>item.isDone).length > 0){
            let btnRemoveCompleted = <HTMLElement>document.createElement('button')
            btnRemoveCompleted.appendChild(document.createTextNode('Remove completed'));
            btnRemoveCompleted.setAttribute('type','button');
            btnRemoveCompleted.addEventListener('click',this.handleRemoveCompleted);
    
            dspResults.appendChild(todoList);
            dspResults.appendChild(btnRemoveCompleted);
        } else dspResults.appendChild(todoList);
    }
}