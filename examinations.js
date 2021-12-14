class Examination {
    constructor(name, fromWeek, toWeek, description, link, color) {
        this.name = name;
        this.fromWeek = fromWeek;
        this.toWeek = toWeek;
        this.description = description;
        this.link = link;
        this.color = color;
    }
}
export default function() {
    return [
        new Examination(
            window.lang["examFirstTrimesterName"],
            13,
            14,
            "TODO",
            "https://de.praenatal-medizin.de/files/2021/09/Flyer_Einscha%CC%88tzung-maternaler-Risiken-im-ersten-Trimenon_12-2020.pdf",
            "#C9FCFD"
        ),
        new Examination(
            window.lang["examCVSName"],
            13,
            15,
            "TODO",
            "https://de.praenatal-medizin.de/files/2021/09/Flyer_Praenatale-Diagnostik-aus-Chorionzotten-oder-Plazentazotten_12-2020.pdf",
            "#FA66A1"
        ),
        new Examination(
            window.lang["examFBAName"],
            21,
            22,
            "TODO",
            "https://de.praenatal-medizin.de/diagnostik/sonografie/ii-trimenon-fba/",
            "#8D9EF7"
        ),
        new Examination(
            window.lang["examAmniocentesisName"],
            16,
            40,
            "TODO",
            "https://de.praenatal-medizin.de/files/2021/09/Flyer_Praenatale-Diagnostik-aus-Fruchtwasser_12-2020.pdf",
            "#FBACF8"
        ),
        new Examination(
            window.lang["examNIPTName"],
            10,
            40,
            "",
            "https://de.praenatal-medizin.de/diagnostik/genetik/nipt/",
            "#FBB06A"
        )
    ]
} 
