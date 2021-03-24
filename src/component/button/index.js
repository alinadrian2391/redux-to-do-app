import {del,edit} from '../../redux/actions'
import {connect} from 'react-redux'


const button = props => {
    const {type, title, del, action,modifyValue, edit} = props;
    let buttonStyle;
    switch(type) {
        case 'Edit': buttonStyle = "btn-warning"; break;
        case 'Delete': buttonStyle = "btn-danger"; break;
        case 'Confirm': buttonStyle = "btn-success"; break;
        default:  buttonStyle = "btn-secondary";
    }

    const manageValue = () => {
        if (type === 'Delete') 
            del(title);
        if(type === 'Confirm')
           edit({title,modifyValue});

        if(action)  // only for ui porpouses
            action(type === 'Edit')

    }

    return  <button className = {`btn ${buttonStyle}`} onClick = {()=> manageValue()}> {type} </button>
};




const mapDispatchToProps = dispatch => {
    return {
        del: data => dispatch(del(data)),
        edit: data => dispatch(edit(data)),
    };
};

export default connect(null, mapDispatchToProps)(button);
