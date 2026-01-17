import { TodoIcon } from './';

function CompleteIcon({ completed, 
    onComplete }) {
    return (
        <TodoIcon 
            type="completed"
            color={completed ? "green" : "gray"}  
            onClick={onComplete} 
        />
    );
}

export { CompleteIcon };