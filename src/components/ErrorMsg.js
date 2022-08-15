import classes from './ErrorMsg.module.css';
import Button from './Button';
import React from 'react';
import ReactDOM from 'react-dom';

const BackdropModal = (props) => {
    return <div className={classes.backdrop} onClick={props.onCancel} />;
}

const ErrModal = (props) => {
    return (
        <div className={classes.modal}>
            <h2 className={classes.header}>{props.title}</h2>
            <p className={classes.content}>{props.msg}</p>
            <div className={classes.action}>
                <Button type='button' label='Okay' onClick={props.onCancel} />
            </div> 
        </div>
    );
}

const ErrorMsg = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <BackdropModal onCancel={props.onCancel} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ErrModal
                    title={props.title}
                    msg={props.msg}
                    onCancel={props.onCancel}
                />,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    );
}

export default ErrorMsg;