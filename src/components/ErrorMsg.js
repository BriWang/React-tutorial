import classes from './ErrorMsg.module.css';
import Button from './Button';

const ErrorMsg = (props) => {

    return (
        <div>
            <div className={classes.backdrop} onClick={props.onCancel} />
            <div className={classes.modal}>
                <h2 className={classes.header}>{props.title}</h2>
                <p className={classes.content}>{props.msg}</p>
                <div className={classes.action}>
                    <Button type='button' label='Okay' onClick={props.onCancel} />
                </div> 
            </div>
        </div>
    );
}

export default ErrorMsg;