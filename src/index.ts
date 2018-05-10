import { createStore } from 'redux';
import { Task, Action } from './todolist.interfaces';
import { HandleRender } from './todolist.class';
import { userReducer } from './todolist.reducer';
import './styles.css';

/* Template for the action object
let action = {
    type: 'YOUR_TYPE',
    task: { id: <task_id>,
            description: <task_description>,
            isDone: <task_status:true/false> }
    }
*/

// ---------- MAIN ----------
// STEP 1 - Create the reducer by importing from todolist.reducer.ts

// STEP 2 - Create a store by passing in the reducer
let store = createStore(userReducer); // Redux method

let objTodoList = new HandleRender(store);
store.subscribe(objTodoList.renderContent); // Redux method - Rerender automatically whenever the state changed

// STEP 3 - Dispatch your action to the store. It changes the state by store.dispatch(action);
let txtInput = <HTMLInputElement>document.getElementById('txtInput');
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