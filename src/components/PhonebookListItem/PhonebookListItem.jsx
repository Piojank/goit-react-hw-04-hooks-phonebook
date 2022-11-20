import PropTypes from 'prop-types';
import style from './PhonebookListItem.module.css';

const PhonebookListElement = ({ id, name, number, onDelete }) => (
    <li className={style.PhonebookList__item} key={id}>
        <span className={style.PhonebookList__text}>{name}: </span>
        <span className={style.PhonebookList__text}>{number}: </span>
        <button className={style.PhonebookList__button} onClick={() => onDelete(id)}>
        Delete
        </button>
    </li>
);

PhonebookListElement.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default PhonebookListElement;