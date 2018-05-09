import { createStore } from 'redux';
import { Task, Action } from './todolist.interfaces';
import './styles.css';

/* Template for the action object
let action = {
    type: 'YOUR_TYPE',
    task: { id: <task_id>,
            description: <task_description>,
            isDone: <task_status:true/false> }
}*/

// Get HTML elements
let txtInput = <HTMLInputElement>document.getElementById('txtInput');
let dspResults = <HTMLInputElement>document.getElementById('dspResults');

// Main class
class TodoList {
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

// ---------- MAIN ----------
// STEP 1 - Create the reducer
let userReducer = (state: any, action: Action) => {
    if (state === undefined)
        state = [];
    
    //Definitions for action object here
    switch(action.type){
        case 'ADD_TASK':
            return state.concat(action.task);
        case 'REMOVE_TASK':
            return state.filter((item: Task)=>item.id !== action.task.id);
        case 'CHECKED':
            const itemIndex = state.findIndex((item: Task)=>item.id === action.task.id);
            const newState = state.map((item: Task, index: number)=> index === itemIndex ? {...item, isDone: !item.isDone} : item);
            return newState;
        case 'REMOVE_COMPLETED':
            return state.filter((item: Task)=>!item.isDone);
        default:
            return state;
    }     
};

// STEP 2 - Create a store by passing in the reducer
let store = createStore(userReducer); // Redux method

// Rerender automatically whenever the state changed
let objTodoList = new TodoList(store);
store.subscribe(objTodoList.renderContent); // Redux method

// STEP 3 - Dispatch your action to the store. It changes the state by store.dispatch(action);
txtInput.focus();
txtInput.addEventListener('keydown',e=>{
    let userInput = txtInput.value.trim();
    if (e.keyCode === 13 && userInput.length > 0){
        let newTask: Task = { id: Date.now(), description: userInput, isDone: false };
        let action: Action = { type: 'ADD_TASK', task: newTask };
        store.dispatch(action); // Redux method

        txtInput.value = '';
        txtInput.focus();
    }
});