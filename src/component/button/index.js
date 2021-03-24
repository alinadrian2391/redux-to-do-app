import {del} from '../../redux/actions'
import {connect} from 'react-redux'
import {edit} from '../../redux/actions';


const button = props => {
    const {type, title, del, action} = props;
    let buttonStyle;
    switch(type) {
        case 'Edit': buttonStyle = "btn-warning"; break;
        case 'Delete': buttonStyle = "btn-danger"; break;
        case 'Confirm': buttonStyle = "btn-success"; break;
        default:  buttonStyle = "btn-secondary";
    }

    const manageValue = () => {
        if (type==='Delete') 
            del(title);

        if(action)
            action(type === 'Edit')

    }

    return  <button className = {`btn ${buttonStyle}`} onClick = {()=> manageValue()}> {type} </button>
};




const mapDispatchToProps = dispatch => {
    return {
        del: data => dispatch(del(data)),
    };
};

export default connect(null, mapDispatchToProps)(button);
