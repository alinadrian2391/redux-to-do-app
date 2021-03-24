import React from 'react'
import Row from '../row'
import './style.css'
import {connect} from 'react-redux'
import {add} from '../../redux/actions'

const Container = props => {
    const {items, add} = props;
    const [inputValue, setInputValue] = React.useState('');

    const onChangeHandler = event => {
        setInputValue(event.target.value);
    }

   const addValue = () => {
       if (items.findIndex(i=> i === inputValue) < 0 ) {
            add(inputValue)
            setInputValue('')
       } else {
           alert(`${inputValue} already exist in list`)
       }
    }

    return <div className="myContainer container">
              <div className="d-flex justify-content-between">
                  <h3> TODO LIST </h3>
                  <div className="d-flex align-items-center">
                        <input
                            type="text"
                            name="name"
                            onChange={onChangeHandler}
                            value={inputValue}
                            style={{marginRight: '10px'}}
                        />
                        <button className = "btn btn-primary" onClick = {()=> addValue()}> ADD</button>
                  </div>
              </div>
              {items.map( (item, index) => (<Row key ={ index} title={item}/>) )}
           </div>
};

const mapStateToProps = state => {

    return {
        items: state.todoReducer.items,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: data => dispatch(add(data)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Container)