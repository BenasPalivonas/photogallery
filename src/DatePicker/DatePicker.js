import './datePicker.css';
const DatePicker = ({ onClickDate }) => {
    return (
        <div className="parentDiv">
            <button className="button" onClick={onClickDate} value={1}>Today</button>
            <button className="button" onClick={onClickDate} value={7}>Last Week</button>
            <button className="button" onClick={onClickDate} value={30}>Last Month</button>
        </div>
    )
}
export default DatePicker;