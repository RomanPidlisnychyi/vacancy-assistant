import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import styles from './styles.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();

    const name = useSelector(authSelectors.getUserName);

    const onLogout = () => dispatch(authOperations.logOut());

    return (
        <div>
            <span className={styles.span}>{name}</span>
            <button className={styles.button} type="button" onClick={onLogout}>
                Logout
            </button>
        </div>
    );
}
