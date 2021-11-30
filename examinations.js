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
export default [
    new Examination(
        "Ersttrimester Screening / Nackenfaltenmessung",
        13,
        14,
        "TODO",
        "https://de.praenatal-medizin.de/files/2021/09/Flyer_Einscha%CC%88tzung-maternaler-Risiken-im-ersten-Trimenon_12-2020.pdf",
        "#C9FCFD"
    ),
    new Examination(
        "Chorionzottenbiopsie / CVS",
        13,
        15,
        "TODO",
        "https://de.praenatal-medizin.de/files/2021/09/Flyer_Praenatale-Diagnostik-aus-Chorionzotten-oder-Plazentazotten_12-2020.pdf",
        "#FA66A1"
    ),
    new Examination(
        "Fehlbildungsauschluss / FBA / Großer Ultraschall / Feindiagnostik",
        21,
        22,
        "TODO",
        "https://de.praenatal-medizin.de/diagnostik/sonografie/ii-trimenon-fba/",
        "#8D9EF7"
    ),
    new Examination(
        "Amniozentese",
        16,
        40,
        "TODO",
        "https://de.praenatal-medizin.de/files/2021/09/Flyer_Praenatale-Diagnostik-aus-Fruchtwasser_12-2020.pdf",
        "#FBACF8"
    ),
    new Examination(
        "NIPT",
        10,
        40,
        "",
        "https://de.praenatal-medizin.de/diagnostik/genetik/nipt/",
        "#FBB06A"
    )
]
