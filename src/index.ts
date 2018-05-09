import { createStore } from 'redux';
import './styles.css';

/* Template for the action object
let action = {
    type: 'YOUR_TYPE',
    task: { id: <task_id>,
            description: <task_description>,
            isDone: <task_status:true/false> }
}*/

//INTERFACES
interface Task {
    id: number, 
    description?: string, 
    isDone?: boolean
}
interface Action {
    type: string,
    task?: Task
}

//FUNCTIONS
function renderContent(){
    let allTasks = store.getState(); //Redux method
    let todoList = <HTMLElement>document.createElement('ul');

    allTasks.map((item: Task)=>{
        let task = <HTMLElement>document.createElement('li');

        //Create checkbox
        let taskCheckBox = <HTMLInputElement>document.createElement('input')
        taskCheckBox.setAttribute('type','checkbox');
        taskCheckBox.addEventListener('click',()=>handleCheck(item.id));

        //Create description
        let taskText = document.createTextNode(item.description);
     
        //Create button for removing
        let taskButton = <HTMLElement>document.createElement('button')
        taskButton.appendChild(document.createTextNode('Remove'));
        taskButton.addEventListener('click',()=>handleRemove(item.id));

        //Check task is done or not
        if (item.isDone){
            task.classList.add('strike-text');
            taskCheckBox.setAttribute('checked','');
        }  else null;

        //Render Todo list
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
        btnRemoveCompleted.addEventListener('click',handleRemoveCompleted);

        dspResults.appendChild(todoList);
        dspResults.appendChild(btnRemoveCompleted);
    } else dspResults.appendChild(todoList);
}

function handleRemove(itemId: number){
    let action: Action = {type:'REMOVE_TASK', task: {id: itemId}};
    store.dispatch(action); //Redux method
}

function handleRemoveCompleted(){
    let action: Action = {type: 'REMOVE_COMPLETED'};
    store.dispatch(action);
}

function handleCheck(itemId: number){
    let action: Action = {type:'CHECKED', task: {id: itemId}};
    store.dispatch(action); //Redux method
}

//MAIN
// STEP 1 - Create the reducer - yourReducer(currentState, yourAction)
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
let store = createStore(userReducer); //Redux method
store.subscribe(renderContent); //Redux method - Rerender automatically whenever the state changed

// STEP 3 - Dispatch our action to the store. It changes the state by store.dispatch(action);
let txtInput = <HTMLInputElement>document.getElementById('txtInput');
let dspResults = <HTMLInputElement>document.getElementById('dspResults');

txtInput.focus();
txtInput.addEventListener('keydown',e=>{
    let userInput = txtInput.value.trim();
    if (e.keyCode === 13 && userInput.length > 0){
        let newTask: Task = { id: Date.now(), description: userInput, isDone: false };
        let action: Action = { type: 'ADD_TASK', task: newTask };
        store.dispatch(action); //Redux method

        txtInput.value = '';
        txtInput.focus();
    }
});