import Navigation from './Navigation';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <h1>A Typical Page</h1>
            <Navigation onSubmit={props.onSubmit} />
        </header>
    );
}

export default Header;