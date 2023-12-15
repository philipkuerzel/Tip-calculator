function tipCalc() {
    const rechnungsbetrag = parseFloat(document.getElementById('rechnungsbetrag').value);
    const anzahlPersonen = parseInt(document.getElementById('anzahlPersonen').value);
    const serviceBewertung = document.getElementById('serviceBewertung').value;

    const schlechterServiceProzentsatz = 0.02;
    const mittlererServiceProzentsatz = 0.1;
    const superServiceProzentsatz = 0.2;

    let trinkgeldProzentsatz;

    switch (serviceBewertung) {
        case 'schlecht':
            trinkgeldProzentsatz = schlechterServiceProzentsatz;
            break;
        case 'mittel':
            trinkgeldProzentsatz = mittlererServiceProzentsatz;
            break;
        case 'super':
            trinkgeldProzentsatz = superServiceProzentsatz;
            break;
        default:
            alert('Ungültige Service-Bewertung. Bitte wählen Sie "schlecht", "mittel" oder "super".');
            return;
    }

    let trinkgeld = rechnungsbetrag * trinkgeldProzentsatz;
    let gesamtRechnungsbetrag = rechnungsbetrag + trinkgeld;
    let betragProPerson = gesamtRechnungsbetrag / anzahlPersonen;

    let output = `
        Trinkgeld: ${trinkgeld.toFixed(2)} Euro<br>
        Gesamt Rechnungsbetrag: ${gesamtRechnungsbetrag.toFixed(2)} Euro<br>
        Betrag pro Person: ${betragProPerson.toFixed(2)} Euro
    `;

    document.getElementById('ergebnisse').innerHTML = output;
    }