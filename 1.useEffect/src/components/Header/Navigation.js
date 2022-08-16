import classes from './Navigation.module.css';

const Navigation = (props) => {

    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href='/'>Users</a></li>
                <li><a href='/'>Admins</a></li>
                <li>
                    <button type='button' onClick={props.onSubmit}>Logout</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;