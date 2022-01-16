export default class PregnancyDates {
    constructor(birthDate) {
        this.birthDate = birthDate;
        this.pregnancyWeek = calcPregnancyWeek(birthDate);
        this.daysTillBirth = calcDaysTillBirth(birthDate);
        this.weeksUntil = this.daysTillBirth > 0 ?
            Math.floor(this.daysTillBirth / 7) :
            Math.ceil(this.daysTillBirth / 7);
        this.daysUntil = this.daysTillBirth % 7;
        this.daysPregnantTotal = 40 * 7 - this.daysTillBirth;
        this.weeksPregnant = this.daysPregnantTotal > 0 ?
            Math.floor(this.daysPregnantTotal / 7) :
            Math.ceil(this.daysPregnantTotal / 7);
        this.daysPregnant = this.daysPregnantTotal % 7;
        this.fertilizationDate = new Date(new Date().toDateString());
        this.fertilizationDate.setDate(this.fertilizationDate.getDate() - this.daysPregnantTotal);
    }

    firstDayOfPregnancyWeek(pregnancyWeek, offset) {
        let date = new Date(this.fertilizationDate);
        date.setDate(date.getDate() + (pregnancyWeek - 1) * 7);
        date.setDate(date.getDate() + offset);
        return date;
    }

    lastDayOfPregnancyWeek(pregnancyWeek) {
        if (pregnancyWeek == null) {
            return null
        } else {
            let date = new Date(this.fertilizationDate);
            date.setDate(date.getDate() + pregnancyWeek * 7 - 1);
            return date;
        }
    }
}

function calcDaysTillBirth(birthDate) {
    const days = Math.round((birthDate - window.today) / window.mSecsPerDay);
    return days;
}

function calcPregnancyWeek(birthDate) {
    let daysTillBirth = calcDaysTillBirth(birthDate);
    let weeks = Math.ceil(daysTillBirth / 7);
    let pregnancyWeek = window.pregnancyWeeks - weeks + 1;
    return pregnancyWeek;
}
