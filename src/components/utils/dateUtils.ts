import {daysMap} from "@/components/utils/constants";
import {DayDetails} from "@/types";

export const getDayDetails = ({ index, firstDay, month, year, numberOfDays }: { index: number, firstDay: number, month: number, year: number, numberOfDays: number }): DayDetails => {
    let date = index - firstDay;
    let day = index % 7;
    let prevMonth = month - 1;
    let prevYear = year;
    if (prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
    }
    let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
    let _date = (date < 0 ? prevMonthNumberOfDays + date : date % numberOfDays) + 1;
    let _month = date < 0 ? -1 : date >= numberOfDays ? 1 : 0;
    let timestamp = new Date(year, month, _date).getTime();
    return {
        date: _date,
        day,
        month: _month,
        timestamp,
        dayString: daysMap[day]
    };
}

export const getNumberOfDays = (year: number, month: number): number => {
    return 40 - new Date(year, month, 40).getDate();
}

export const getDateStringFromTimestamp = (timestamp: number): string => {
    const dateObject = new Date(timestamp);
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();
    return `${dateObject.getFullYear()}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
}