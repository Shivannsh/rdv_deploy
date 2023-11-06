import React, { useState } from 'react';
import SidebarNav from '../../components/SidebarNav/SidebarNav';
import './schedule.css';

const Schedule = () => {
    const [day, setDay] = useState(0);

    const handleClick = (dayIndex) => {
        setDay(dayIndex);
    }

    const isActive = (dayIndex) => {
        return day === dayIndex ? 'active' : '';
    }

    return (
        <>
            <SidebarNav />
            <div className="schedule-header">
                <h1 className='schedule-title'>Schedule</h1>
                <div className='day-tab'>
                    <button className={`schedule-btn ${isActive(0)}`} onClick={() => handleClick(0)}>DAY 1</button>
                    <button className={`schedule-btn ${isActive(1)}`} onClick={() => handleClick(1)}>DAY 2</button>
                    <button className={`schedule-btn ${isActive(2)}`} onClick={() => handleClick(2)}>DAY 3</button>
                    <button className={`schedule-btn ${isActive(3)}`} onClick={() => handleClick(3)}>DAY 4</button>
                </div>
            </div>
            <div className='schedule-body'>
                {day === 0 && <img className='schedule-img' src={require('../../assets/img/schedule/schedule.png')} alt='schedule' />}
                {day === 1 && <img className='schedule-img' src={require('../../assets/img/schedule/schedule.png')} alt='schedule' />}
                {day === 2 && <img className='schedule-img' src={require('../../assets/img/schedule/schedule.png')} alt='schedule' />}
                {day === 3 && <img className='schedule-img' src={require('../../assets/img/schedule/schedule.png')} alt='schedule' />}
            </div>
        </>
    )
}

export default Schedule;
