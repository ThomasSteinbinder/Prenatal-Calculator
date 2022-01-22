class Examination {
    constructor(name, fromWeek, toWeek, description, link, color, fromWeekOffset) {
        this.name = name;
        this.fromWeek = fromWeek;
        this.toWeek = toWeek;
        this.description = description;
        this.link = link;
        this.color = color;
        this.fromWeekOffset = fromWeekOffset;
    }
}
export function getExaminations() {
    return [
        new Examination(
            window.lang["examNIPTName"],
            11,
            null,
            window.lang["examNIPTDescription"],
            "https://de.praenatal-medizin.de/diagnostik/genetik/nipt/",
            "#FBB06A",
            0,
        ),
        new Examination(
            window.lang["examFirstTrimesterName"],
            13,
            14,
            window.lang["examFirstTrimesterDescription"],
            "https://de.praenatal-medizin.de/files/2021/09/Flyer_Einscha%CC%88tzung-maternaler-Risiken-im-ersten-Trimenon_12-2020.pdf",
            "#C9FCFD",
            5,
        ),
        new Examination(
            window.lang["examCVSName"],
            13,
            null,
            window.lang["examCVSDescription"],
            "https://de.praenatal-medizin.de/files/2021/09/Flyer_Praenatale-Diagnostik-aus-Chorionzotten-oder-Plazentazotten_12-2020.pdf",
            "#FA66A1",
            5,
        ),
        new Examination(
            window.lang["examAmniocentesisName"],
            16,
            null,
            window.lang["examAmniocentesisDescription"],
            "https://de.praenatal-medizin.de/files/2021/09/Flyer_Praenatale-Diagnostik-aus-Fruchtwasser_12-2020.pdf",
            "#FBACF8",
            0,
        ),
        new Examination(
            window.lang["examFBAName"],
            21,
            22,
            window.lang["examFBADescription"],
            "https://de.praenatal-medizin.de/diagnostik/sonografie/ii-trimenon-fba/",
            "#8D9EF7",
            0,
        ),
    ]
}

export function getWeekRangeString(weekFrom, weekTo) {
    if (weekFrom == null) {
        if (weekTo) {
            return "bis " + weekTo;
        }
    } else if(weekTo == null) {
        if (weekFrom) {
            return "ab " + weekFrom;
        }
    } else {
        return weekFrom + "-" + weekTo
    }
}
