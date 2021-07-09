const mSecsPerDay = 1000 * 60 * 60 * 24;
const pregnancyWeeks = 40;

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

let today;

function calculate() {
    let birthDateString = document.getElementById("date").value;
    let birthDate = dateFromUnformattedString(birthDateString);
    var todayString = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    today = new Date(todayString)
    if (today > birthDate) {
        document.write("?");
        return;
    }

    let pregnancyWeek = calcPregnancyWeek(birthDate);
    let daysTillBirth = calcDaysTillBirth(birthDate);
    let weeksUntil = Math.floor(daysTillBirth / 7);
    let daysUntil = daysTillBirth % 7;
    let daysPregnantTotal = 40 * 7 - daysTillBirth;
    let weeksPregnant = Math.floor(daysPregnantTotal / 7);
    let daysPregnant = daysPregnantTotal % 7;
    document.getElementById("pregnancyWeek").innerHTML = pregnancyWeek;
    document.getElementById("weeksPregnant").innerHTML = "(" + weeksPregnant + " Wochen + " + daysPregnant + " Tage)";
    document.getElementById("daysLeft").innerHTML = "noch " + weeksUntil + " Woche(n) und " + daysUntil + " Tag(e) &#128118;";

    document.getElementById("infoDiv").style.display = "block"
    document.getElementById("dateList").style.display = "block"

    document.getElementById("firstTrimesterWeeks").innerHTML = firstTrimesterWeeksFrom + "-" + firstTrimesterWeeksTo;
    document.getElementById("chorionicWeeks").innerHTML = chorionicWeeksFrom + "-" + chorionicWeeksTo;
    document.getElementById("malformationWeeks").innerHTML = malformationWeeksFrom + "-" + malformationWeeksTo;
    document.getElementById("amniocentesisWeeks").innerHTML = amniocentesisWeeksFrom + "-" + amniocentesisWeeksTo;
    document.getElementById("thirdScreeningWeeks").innerHTML = thirdScreeningWeeksFrom + "-" + thirdScreeningWeeksTo;


    let fertilizationDate = new Date();
    fertilizationDate.setDate(fertilizationDate.getDate() - daysPregnantTotal);

    let firstTrimesterFromDate = new Date(fertilizationDate);
    let firstTrimesterToDate = new Date(fertilizationDate);
    firstTrimesterFromDate.setDate(firstTrimesterFromDate.getDate() + firstTrimesterWeeksFrom * 7);
    firstTrimesterToDate.setDate(firstTrimesterToDate.getDate() + firstTrimesterWeeksTo * 7 + 7);
    document.getElementById("firstTrimesterFrom").innerHTML = dateToGermanString(firstTrimesterFromDate);
    document.getElementById("firstTrimesterTo").innerHTML = dateToGermanString(firstTrimesterToDate);
    let row = document.getElementById("firstTrimesterRow");
    if (today >= firstTrimesterToDate)
        row.style.background = "tomato";
    else if (today >= firstTrimesterFromDate)
        row.style.background = "orange";
    else
        row.style.background = "transparent";


    let chorionicFromDate = new Date(fertilizationDate);
    let chorionicToDate = new Date(fertilizationDate);
    chorionicFromDate.setDate(chorionicFromDate.getDate() + chorionicWeeksFrom * 7);
    chorionicToDate.setDate(chorionicToDate.getDate() + chorionicWeeksTo * 7 + 7);
    document.getElementById("chorionicFrom").innerHTML = dateToGermanString(chorionicFromDate);
    document.getElementById("chorionicTo").innerHTML = dateToGermanString(chorionicToDate);
    row = document.getElementById("chorionicRow");
    if (today >= chorionicToDate)
        row.style.background = "tomato";
    else if (today >= chorionicFromDate)
        row.style.background = "orange";
    else
        row.style.background = "transparent";

    let malformationFromDate = new Date(fertilizationDate);
    let malformationToDate = new Date(fertilizationDate);
    malformationFromDate.setDate(malformationFromDate.getDate() + malformationWeeksFrom * 7);
    malformationToDate.setDate(malformationToDate.getDate() + malformationWeeksTo * 7 + 7);
    document.getElementById("malformationFrom").innerHTML = dateToGermanString(malformationFromDate);
    document.getElementById("malformationTo").innerHTML = dateToGermanString(malformationToDate);
    row = document.getElementById("malformationRow");
    if (today >= malformationToDate)
        row.style.background = "tomato";
    else if (today >= malformationFromDate)
        row.style.background = "orange";
    else
        row.style.background = "transparent";

    let amniocentesisFromDate = new Date(fertilizationDate);
    let amniocentesisToDate = new Date(fertilizationDate);
    amniocentesisFromDate.setDate(amniocentesisFromDate.getDate() + amniocentesisWeeksFrom * 7);
    amniocentesisToDate.setDate(amniocentesisToDate.getDate() + amniocentesisWeeksTo * 7 + 7);
    document.getElementById("amniocentesisFrom").innerHTML = dateToGermanString(amniocentesisFromDate);
    document.getElementById("amniocentesisTo").innerHTML = dateToGermanString(amniocentesisToDate);
    row = document.getElementById("amniocentesisRow");
    if (today >= amniocentesisToDate)
        row.style.background = "tomato";
    else if (today >= amniocentesisFromDate)
        row.style.background = "orange";
    else
        row.style.background = "transparent";

    let thirdScreeningFromDate = new Date(fertilizationDate);
    let thirdScreeningToDate = new Date(fertilizationDate);
    thirdScreeningFromDate.setDate(thirdScreeningFromDate.getDate() + thirdScreeningWeeksFrom * 7);
    thirdScreeningToDate.setDate(thirdScreeningToDate.getDate() + thirdScreeningWeeksTo * 7 + 7);
    document.getElementById("thirdScreeningFrom").innerHTML = dateToGermanString(thirdScreeningFromDate);
    document.getElementById("thirdScreeningTo").innerHTML = dateToGermanString(thirdScreeningToDate);
    row = document.getElementById("thirdScreeningRow");
    if (today >= thirdScreeningToDate)
        row.style.background = "tomato";
    else if (today >= thirdScreeningFromDate)
        row.style.background = "orange";
    else
        row.style.background = "transparent";
}

function calcDaysTillBirth(birthDate) {
    return Math.round(Math.abs((birthDate - today) / mSecsPerDay));
}

function calcPregnancyWeek(birthDate) {
    let daysTillBirth = calcDaysTillBirth(birthDate);
    let weeks = Math.floor(daysTillBirth / 7);
    let days = daysTillBirth % 7;
    let pregnancyWeek = pregnancyWeeks - weeks;
    return pregnancyWeek;

    // 
    // var daysDif = Math.round((birthDate.getTime - today) / mSecsPerDay);
    // console.log(daysDif);
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