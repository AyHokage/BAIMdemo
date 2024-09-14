import React from 'react';
import styles from './Calendarr.module.css';
import { DayDetails } from '@/types';

export const renderCalendar = (monthDetails: DayDetails[], onDateClick: (day: DayDetails) => void, selectedDay: number) => {
    return (
        <div className={styles['c-container']}>
            <div className={styles['cc-head']}>
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d, i) => (
                    <div key={i} className={styles['cch-name']}>{d}</div>
                ))}
            </div>
            <div className={styles['cc-body']}>
                {monthDetails.map((day, index) => (
                    <div
                        key={index}
                        className={`${styles['c-day-container']} ${day.month !== 0 ? styles.disabled : ''} ${isCurrentDay(day, selectedDay) ? styles.highlight : ''} ${isSelectedDay(day, selectedDay) ? styles['highlight-green'] : ''}`}
                        onClick={() => onDateClick(day)}
                    >
                        <div className={styles['cdc-day']}>
                            <span>{day.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const isCurrentDay = (day: DayDetails, selectedDay: number): boolean => {
    return day.timestamp === todayTimestamp(selectedDay);
};

const isSelectedDay = (day: DayDetails, selectedDay: number): boolean => {
    return day.timestamp === selectedDay;
};

const todayTimestamp = (selectedDay: number): number => {
    return Date.now() - (Date.now() % oneDay) + new Date().getTimezoneOffset() * 1000 * 60;
};
const oneDay = 60 * 60 * 24 * 1000;

