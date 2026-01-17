import { TodoIcon } from './';

function DeleteIcon({ completed, 
    onDelete }) {
    return (
        <TodoIcon 
            type="deleted"
            color="gray"   
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };