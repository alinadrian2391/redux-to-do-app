const button = props => {
    const {type} = props;
    const buttonStyle = type === 'Edit' ? "btn-warning" : "btn-danger";

    return  <button className = {`btn ${buttonStyle}`}> {type} </button>
};

export default button;