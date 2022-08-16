import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
        }`} >
            <label>{props.label}</label>
            <input
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
}

export default Input;