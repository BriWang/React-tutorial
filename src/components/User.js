const User = (props) => {
    return (
        <li>
            <p>{props.name} ({props.age} years old)</p>
        </li>
    );
}

export default User;