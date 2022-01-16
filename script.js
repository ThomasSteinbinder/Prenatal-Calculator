import GermanLang from "./localization/lang-de.js"
import EnglishLang from "./localization/lang-en.js"
import PregnancyDates from "./pregnancyCalculator.js";
import { getExaminations, getWeekRangeString } from "./examinations.js"

window.mSecsPerDay = 1000 * 60 * 60 * 24;
window.pregnancyWeeks = 40;
window.todayString = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
window.today = new Date(window.todayString)
window.lang;
window.langString;
window.examinations;


window.onLoad = function () {
    window.lang = GermanLang;
    selectLanguage("de");
}

window.selectLanguage = function (language) {
    window.langString = language;
    if (language == "de") {
        window.lang = GermanLang;
    } else if (language == "en") {
        window.lang = EnglishLang;
    }
    $(".language-reload").each(function () {
        $(this).html(window.lang[$(this).attr('id')]);
    });
    if (document.getElementById("date").value) {
        calculate();
    }
}

window.calculate = function () {
    window.examinations = getExaminations();
    let birthDateString = document.getElementById("date").value;
    let birthDate = dateFromUnformattedString(birthDateString);
    if (document.getElementById("dateTypeSelect").value == "period") {
        birthDate.setDate(birthDate.getDate() + pregnancyWeeks * 7);
    }
    const pregnancy = new PregnancyDates(birthDate);

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
    $("#weeksPregnant").html("(" + pregnancy.weeksPregnant + " " + lang["weeks"] + " " + pregnancy.daysPregnant + " " + lang["days"] + ")");
    if (langString == "de") {
        $("#daysLeft").html("noch " + pregnancy.weeksUntil + " Wochen und " + pregnancy.daysUntil + " Tage &#128118;");
    } else if (langString == "en") {
        $("#daysLeft").html(pregnancy.weeksUntil + " weeks and " + pregnancy.daysUntil + " days left &#128118;");
    }


    $("#examsTable tr").remove();
    let tableHtml = '';
    let examIndex = 0;
    examinations.forEach(exam => {
        tableHtml += '<tr role="button" id="exam' + examIndex + '"><td>' + exam.name +
            '</td><td>' + getWeekRangeString(exam.fromWeek, exam.toWeek) +
            '</td><td>' + dateToGermanString(pregnancy.firstDayOfPregnancyWeek(exam.fromWeek, exam.fromWeekOffset)) +
            '</td><td>' + dateToGermanString(pregnancy.lastDayOfPregnancyWeek(exam.toWeek)) +
            '</td><td> <a href="' + exam.link + '" target="_blank" rel="noopener noreferrer">' +
            '<i class="bi bi-info-circle-fill h4" style="color: ' + exam.color + ';"></i>' +
            '</a> </td>' +
            '<td><i id="chevron' + examIndex + '" class="bi bi-chevron-up h4"></i></td></tr>' +
            '<tr><td colspan=5 id="descri' + examIndex + '" style="display: none;"> <p class="examDescription">&#10551; ' + exam.description + '</p> </td></tr>';
            examIndex++;
    });
    $('#examsTable').html(tableHtml);

    for (let i = 0; i < examinations.length; i++) {
        $('#exam' + i).click(function() {
            if ($('#descri' + i).is(":visible")) {
                $('#descri' + i).hide();
                $('#chevron' + i).removeClass("bi-chevron-down");
                $('#chevron' + i).addClass("bi-chevron-up");
            } else {
                $('#descri' + i).show();
                $('#chevron' + i).removeClass("bi-chevron-up");
                $('#chevron' + i).addClass("bi-chevron-down");
            }
        });
    }
}

function dateFromUnformattedString(dateString) {
    let day = dateString.substr(0, 2);
    let month = dateString.substr(3, 2);
    let year = dateString.substr(6, 4);
    return new Date(month + "/" + day + "/" + year);
}

function dateToGermanString(date) {
    if (date == null) {
        return "-"
    } else {
        let day = date.getDate().toString();
        let month = (date.getMonth() + 1).toString();
        let year = date.getFullYear().toString();

        // add leading 0's
        day = (day.length > 1) ? day : "0" + day;
        month = (month.length > 1) ? month : "0" + month;
        year = (year.length > 1) ? year : "0" + year;

        return day + "." + month + "." + year;
    }    
}