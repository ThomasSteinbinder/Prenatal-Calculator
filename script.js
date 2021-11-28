import PregnancyDates from "./pregnancyCalculator.js";

window.mSecsPerDay = 1000 * 60 * 60 * 24;
window.pregnancyWeeks = 40;
window.todayString = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
window.today = new Date(window.todayString)

let firstTrimesterWeeksFrom = 13;
let firstTrimesterWeeksTo = 14;
let chorionicWeeksFrom = 13;
let chorionicWeeksTo = 14;
let malformationWeeksFrom = 21;
let malformationWeeksTo = 22;
let amniocentesisWeeksFrom = 16;
let amniocentesisWeeksTo = 40;
let thirdScreeningWeeksFrom = 28;
let thirdScreeningWeeksTo = 32;

window.calculate = function() {
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


    document.getElementById("pregnancyWeek").innerHTML = pregnancy.pregnancyWeek;
    document.getElementById("weeksPregnant").innerHTML = "(" + pregnancy.weeksPregnant + " Wochen + " + pregnancy.daysPregnant + " Tage)";
    document.getElementById("daysLeft").innerHTML = "noch " + pregnancy.weeksUntil + " Wochen und " + pregnancy.daysUntil + " Tage &#128118;";

    document.getElementById("firstTrimesterWeeks").innerHTML = firstTrimesterWeeksFrom + "-" + firstTrimesterWeeksTo;
    document.getElementById("chorionicWeeks").innerHTML = chorionicWeeksFrom + "-" + chorionicWeeksTo;
    document.getElementById("malformationWeeks").innerHTML = malformationWeeksFrom + "-" + malformationWeeksTo;
    document.getElementById("amniocentesisWeeks").innerHTML = amniocentesisWeeksFrom + "-" + amniocentesisWeeksTo;
    document.getElementById("thirdScreeningWeeks").innerHTML = thirdScreeningWeeksFrom + "-" + thirdScreeningWeeksTo;



    let firstTrimesterFromDate = new Date(pregnancy.fertilizationDate);
    let firstTrimesterToDate = new Date(pregnancy.fertilizationDate);
    firstTrimesterFromDate.setDate(firstTrimesterFromDate.getDate() + (firstTrimesterWeeksFrom - 1) * 7);
    firstTrimesterToDate.setDate(firstTrimesterToDate.getDate() + firstTrimesterWeeksTo * 7 - 1);
    document.getElementById("firstTrimesterFrom").innerHTML = dateToGermanString(firstTrimesterFromDate);
    document.getElementById("firstTrimesterTo").innerHTML = dateToGermanString(firstTrimesterToDate);
    let row = document.getElementById("firstTrimesterRow");
    if (today > firstTrimesterToDate)
        row.style.background = "tomato";
    else if (today >= firstTrimesterFromDate)
        row.style.background = "orange";
    else
        row.style.background = "transparent";


    let chorionicFromDate = new Date(pregnancy.fertilizationDate);
    let chorionicToDate = new Date(pregnancy.fertilizationDate);
    chorionicFromDate.setDate(chorionicFromDate.getDate() + (chorionicWeeksFrom - 1) * 7);
    chorionicToDate.setDate(chorionicToDate.getDate() + chorionicWeeksTo * 7 - 1);
    document.getElementById("chorionicFrom").innerHTML = dateToGermanString(chorionicFromDate);
    document.getElementById("chorionicTo").innerHTML = dateToGermanString(chorionicToDate);
    row = document.getElementById("chorionicRow");
    if (today > chorionicToDate)
        row.style.background = "tomato";
    else if (today >= chorionicFromDate)
        row.style.background = "orange";
    else
        row.style.background = "transparent";

    let malformationFromDate = new Date(pregnancy.fertilizationDate);
    let malformationToDate = new Date(pregnancy.fertilizationDate);
    malformationFromDate.setDate(malformationFromDate.getDate() + (malformationWeeksFrom - 1) * 7);
    malformationToDate.setDate(malformationToDate.getDate() + malformationWeeksTo * 7 - 1);
    document.getElementById("malformationFrom").innerHTML = dateToGermanString(malformationFromDate);
    document.getElementById("malformationTo").innerHTML = dateToGermanString(malformationToDate);
    row = document.getElementById("malformationRow");
    if (today > malformationToDate)
        row.style.background = "tomato";
    else if (today >= malformationFromDate)
        row.style.background = "orange";
    else
        row.style.background = "transparent";

    let amniocentesisFromDate = new Date(pregnancy.fertilizationDate);
    let amniocentesisToDate = new Date(pregnancy.fertilizationDate);
    amniocentesisFromDate.setDate(amniocentesisFromDate.getDate() + (amniocentesisWeeksFrom - 1) * 7);
    amniocentesisToDate.setDate(amniocentesisToDate.getDate() + amniocentesisWeeksTo * 7 - 1);
    document.getElementById("amniocentesisFrom").innerHTML = dateToGermanString(amniocentesisFromDate);
    document.getElementById("amniocentesisTo").innerHTML = dateToGermanString(amniocentesisToDate);
    row = document.getElementById("amniocentesisRow");
    if (today > amniocentesisToDate)
        row.style.background = "tomato";
    else if (today >= amniocentesisFromDate)
        row.style.background = "orange";
    else
        row.style.background = "transparent";

    let thirdScreeningFromDate = new Date(pregnancy.fertilizationDate);
    let thirdScreeningToDate = new Date(pregnancy.fertilizationDate);
    thirdScreeningFromDate.setDate(thirdScreeningFromDate.getDate() + (thirdScreeningWeeksFrom - 1) * 7);
    thirdScreeningToDate.setDate(thirdScreeningToDate.getDate() + thirdScreeningWeeksTo * 7 - 1);
    document.getElementById("thirdScreeningFrom").innerHTML = dateToGermanString(thirdScreeningFromDate);
    document.getElementById("thirdScreeningTo").innerHTML = dateToGermanString(thirdScreeningToDate);
    row = document.getElementById("thirdScreeningRow");
    if (today > thirdScreeningToDate)
        row.style.background = "tomato";
    else if (today >= thirdScreeningFromDate)
        row.style.background = "orange";
    else
        row.style.background = "transparent";
}

function calcDaysTillBirth(birthDate) {
    return Math.round((birthDate - today) / mSecsPerDay);
}

function calcPregnancyWeek(birthDate) {
    let daysTillBirth = calcDaysTillBirth(birthDate);
    let weeks = Math.ceil(daysTillBirth / 7);
    let days = daysTillBirth % 7;
    let pregnancyWeek = pregnancyWeeks - weeks + 1;
    return pregnancyWeek;
}

function dateFromUnformattedString(birthDateString) {
    let day = birthDateString.substr(0, 2);
    let month = birthDateString.substr(3, 2);
    let year = birthDateString.substr(6, 4);
    return new Date(month + "/" + day + "/" + year);
}

function dateToGermanString(date) {
    return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
}