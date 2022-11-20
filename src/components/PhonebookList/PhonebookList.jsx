import PhonebookListItem from 'components/PhonebookListItem/PhonebookListItem';
import PropTypes from 'prop-types';
import style from './PhonebookList.module.css';

const PhonebookList = ({ contacts, onDelete }) => {
    return (
        <ul className={style.PhonebookList__list}>
        {contacts.map(({ id, name, number }) => (
            <PhonebookListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
            />
        ))}
        </ul>
    );
    };

PhonebookList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        })
    ),
    onDelete: PropTypes.func.isRequired,
    };

export default PhonebookList;