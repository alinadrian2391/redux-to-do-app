import Button from '../button'
import './style.css'
const row = props => {
    const {title} = props;
    return  <div className="row item">
                <div className="col-6">
                    <span>{title}</span>
                </div>
                <Button type = "Edit" />
                <Button type = "Delete" />
            </div>
};

export default row;