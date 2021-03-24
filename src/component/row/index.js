import Button from '../button'
import './style.css'
import {useState} from 'react';
const Row = props => {
    
    const [isEditing,setIsEditing] = useState(false);
    const {title} = props;
    const [inputValue, setInputValue] =useState(title);

    const onChangeHandler = event => {
        setInputValue(event.target.value);
    }

    return  <div className="row item">
                <div className="col-8">
                    {!isEditing&&<span>{title}</span>}
                    {isEditing&&<input 
                    type="text" 
                    onChange={onChangeHandler}
                    value={inputValue}>
                       </input>}
                </div>
                {isEditing && <Button type = "Confirm" title={title}/>} 
                {isEditing && <Button type = "Cancel" title={title}  action={setIsEditing}/> }
                {!isEditing && <Button type = "Edit" title={title} action={setIsEditing} />} 
                {!isEditing && <Button type = "Delete" title={title}/>}
            </div>
};

export default Row;