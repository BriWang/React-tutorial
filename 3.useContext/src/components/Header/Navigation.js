import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {

    const ctx = useContext(AuthContext);

    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href='/'>Users</a></li>
                <li><a href='/'>Admins</a></li>
                <li>
                    <button type='button' onClick={ctx.onLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;