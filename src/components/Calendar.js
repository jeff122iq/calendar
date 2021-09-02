import React, {useState} from 'react';
import CalendarPaper from "../images/CalendarPaper.png"
import "../styles/calendar.css"


const Calendar = () => {
    const [calendar, setCalendar] = useState(false)

    console.log(calendar)

    const slide = () => {
        setCalendar(true)
        setTimeout(() => {
            setCalendar(false)
        }, 200)
    }

    return (
        <>
        <div className="calendarContainer">
        <div className={calendar ? "calendarImageContainerSlide" : "calendarImageContainer"} onClick={slide}>
                <img src={CalendarPaper} alt=""/>
        </div>
        </div>
        </>
    );
};

export default Calendar;