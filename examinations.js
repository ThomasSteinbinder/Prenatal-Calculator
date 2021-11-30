class Examination {
    constructor(name, fromWeek, toWeek, description, link) {
        this.name = name;
        this.fromWeek = fromWeek;
        this.toWeek = toWeek;
        this.description = description;
        this.link = link;
    }
}
export default [
    new Examination(
        "Ersttrimester Screening / Nackenfaltenmessung",
        13,
        14,
        "TODO",
        "https://de.praenatal-medizin.de/files/2021/09/Flyer_Einscha%CC%88tzung-maternaler-Risiken-im-ersten-Trimenon_12-2020.pdf"
    ),
    new Examination(
        "Chorionzottenbiopsie / CVS",
        13,
        14,
        "TODO",
        "https://de.praenatal-medizin.de/files/2021/09/Flyer_Praenatale-Diagnostik-aus-Chorionzotten-oder-Plazentazotten_12-2020.pdf"
    ),
    new Examination(
        "Fehlbildungsauschluss / FBA / Großer Ultraschall / Feindiagnostik",
        21,
        22,
        "TODO",
        "https://de.praenatal-medizin.de/diagnostik/sonografie/ii-trimenon-fba/"
    ),
    new Examination(
        "Amniozentese",
        16,
        40,
        "TODO",
        "https://de.praenatal-medizin.de/files/2021/09/Flyer_Praenatale-Diagnostik-aus-Fruchtwasser_12-2020.pdf"
    )
]

