//INTERFACES
export interface Task {
    id: number, 
    description?: string, 
    isDone?: boolean
}

export interface Action {
    type: string,
    task?: Task
}