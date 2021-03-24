import Button from '../button'
import './style.css'
const row = props => {
    const {title} = props;
    return  <div className="flex">
                <span>{title}</span>
                <Button type = "Edit" />
                <Button type = "Delete" />
            </div>
};

export default row;