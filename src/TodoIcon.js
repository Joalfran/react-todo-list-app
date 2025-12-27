import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

const iconTypes = {
    "completed": (color) => <CheckSVG 
        className="CheckItem--svg" fill={color}/>,
    "deleted": (color) => <DeleteSVG 
        className="CheckItem--svg" fill={color}/>,
};

function TodoIcon({ type, color, onClick }) {
     return (
        <span
            className={`CheckItem--svg CheckItem--${type}`}
            onClick={onClick}
        >
        { iconTypes[type](color) }
        </span>
    );
}

export { TodoIcon };