const mSecsPerDay = 1000 * 60 * 60 * 24;
const pregnancyWeeks = 40;
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
    document.getElementById("pregnancyWeek").innerHTML = pregnancyWeek;
    document.getElementById("daysLeft").innerHTML = "noch " + weeksUntil + " Woche(n) und " + daysUntil + " Tag(e)!";
    // let test = document.createElement("p");
    // test.innerHTML = "In Woche " + pregnancyWeek;    
    // generalInfoDiv.appendChild(test);
    
    document.getElementById("infoDiv").style.display = "block"
    document.getElementById("dateList").style.display = "block"
}

function calcDaysTillBirth(birthDate) {
    return Math.round(Math.abs((birthDate - today) / mSecsPerDay));
}

function calcPregnancyWeek(birthDate) {    
    let daysTillBirth = calcDaysTillBirth(birthDate);
    let weeks = Math.floor(daysTillBirth / 7);
    let days = daysTillBirth % 7;
    let pregnancyWeek = 40 - weeks;
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