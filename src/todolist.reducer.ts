import { Task, Action } from './todolist.interfaces';

export let userReducer = (state: any, action: Action) => {
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
            return state.map((item: Task, index: number)=> index === itemIndex ? {...item, isDone: !item.isDone} : item);;
        case 'REMOVE_COMPLETED':
            return state.filter((item: Task)=>!item.isDone);
        default:
            return state;
    }     
};