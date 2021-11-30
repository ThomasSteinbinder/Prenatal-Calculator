import PregnancyDates from "./pregnancyCalculator.js";
import Examinations from "./examinations.js"

window.mSecsPerDay = 1000 * 60 * 60 * 24;
window.pregnancyWeeks = 40;
window.todayString = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
window.today = new Date(window.todayString)

window.calculate = function () {
    let birthDateString = document.getElementById("date").value;
    let birthDate = dateFromUnformattedString(birthDateString);
    const pregnancy = new PregnancyDates(birthDate);

    if (document.getElementById("dateTypeSelect").value == "period") {
        birthDate.setDate(birthDate.getDate() + pregnancyWeeks * 7);
    }
    var todayString = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    today = new Date(todayString)
    if (isNaN(birthDate)) {
        document.getElementById("calculatedStuff").style.display = "none"
        document.getElementById("errorMsg").style.display = "block"
        return;
    } else {
        document.getElementById("calculatedStuff").style.display = "block"
        document.getElementById("errorMsg").style.display = "none"
    }

    $("#pregnancyWeek").html(pregnancy.pregnancyWeek);
    $("#weeksPregnant").html("(" + pregnancy.weeksPregnant + " Wochen + " + pregnancy.daysPregnant + " Tage)");
    $("#daysLeft").html("noch " + pregnancy.weeksUntil + " Wochen und " + pregnancy.daysUntil + " Tage &#128118;");


    $("#examsTable tr").remove();
    let tableHtml = '';
    Examinations.forEach(exam => {
        tableHtml += '<tr><td>' + exam.name +
            '</td><td>' + exam.fromWeek + "-" + exam.toWeek +
            '</td><td>' + dateToGermanString(pregnancy.firstDayOfPregnancyWeek(exam.fromWeek)) +
            '</td><td>' + dateToGermanString(pregnancy.lastDayOfPregnancyWeek(exam.toWeek)) + '</td></tr>';
    });
    $('#examsTable').html(tableHtml);
}

function dateFromUnformattedString(dateString) {
    let day = dateString.substr(0, 2);
    let month = dateString.substr(3, 2);
    let year = dateString.substr(6, 4);
    return new Date(month + "/" + day + "/" + year);
}

function dateToGermanString(date) {
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();
    
    // add leading 0's
    day = (day.length > 1) ? day : "0" + day;
    month = (month.length > 1) ? month : "0" + month;
    year = (year.length > 1) ? year : "0" + year;
    
    return day + "." + month + "." + year;
}