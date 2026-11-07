# Aufmaß – SHK

Aufmaße für Sanitär, Heizung und Klima schnell auf dem Handy oder Tablet erfassen – ohne Anmeldung, auch ohne Internet.

**App-Link:** https://3luemotion.github.io/aufmass-app/

## Funktionen

- Aufmaße pro Kunde und Baustelle, sortiert nach Raum/Bereich
- Kundenverzeichnis mit Adresse, Telefon und E-Mail
- SHK-Materialliste (Rohre, Fittings, Dämmung, Abwasser, Sanitärobjekte, Heizung/FBH, Klima, Stunden & Pauschalen) mit Favoriten und eigenen Preisen
- Mengen mit Rechentastatur, z. B. `3,5+2,4*2`
- Fotos zum Aufmaß oder zu einzelnen Positionen
- PDF mit Firmenkopf, Positionen, Materialzusammenstellung, Summen, Unterschriftsfeldern und Fotos
- Teilen per Mail, WhatsApp usw. direkt über das Teilen-Menü des Handys
- Sicherung als Datei (inkl. Fotos) und Wiederherstellung

Alle Daten bleiben **nur auf dem Gerät**. Es gibt kein Konto und keinen Server.

---

## Installation auf dem Handy

### iPhone / iPad

1. Öffne den App-Link in **Safari** (nicht in Chrome oder in der Google-App).
2. Tippe unten auf **Teilen** (Quadrat mit Pfeil nach oben).
3. Scroll nach unten und tippe auf **„Zum Home-Bildschirm“**.
4. Name „Aufmaß“ lassen und auf **Hinzufügen** tippen.
5. Ab jetzt die App **nur noch über das neue Symbol** öffnen.

> Wichtig für iPhone: Die Daten der Startbildschirm-App sind von Safari getrennt. Was du in Safari einträgst, siehst du nicht in der App und umgekehrt. Deshalb nach der Installation nur noch das Symbol benutzen.

### Android

1. Öffne den App-Link in **Chrome**.
2. Entweder erscheint unten bzw. in der App der Knopf **„App installieren“**, oder du tippst oben rechts auf **⋮** und wählst **„App installieren“** bzw. **„Zum Startbildschirm hinzufügen“**.
3. Bestätigen. Das Symbol erscheint auf dem Startbildschirm und in der App-Übersicht.

### PC / Laptop (optional)

Link in Chrome oder Edge öffnen. In der Adresszeile auf das Installieren-Symbol (Bildschirm mit Pfeil) klicken.

---

## Erste Schritte

1. **Mehr → Firmendaten** ausfüllen (Name, Adresse, Telefon, E-Mail, MwSt.). Das steht dann oben auf jeder PDF.
2. **Material → Preise** für deine häufigsten Artikel eintragen und mit ⭐ als Favoriten markieren.
3. **Aufmaße → +** neues Aufmaß anlegen, Kunde auswählen oder neu anlegen.
4. **+** Positionen erfassen: Raum wählen, Material antippen, Menge eingeben, mit „+ Nächste“ direkt weiter.
5. **📄 PDF** erstellen, dann **Teilen** → Mail. Die PDF ist schon angehängt.

## Sicherung – bitte regelmäßig!

Die Daten liegen nur auf diesem Gerät. Geht das Handy verloren oder löschst du die App bzw. die Browserdaten, sind sie weg.

- **Mehr → Sicherung erstellen** → **Teilen** → an dich selbst mailen oder in iCloud bzw. Google Drive speichern.
- Die App erinnert dich, wenn die letzte Sicherung älter als 2 Wochen ist.
- **Auf ein anderes Gerät übertragen:** Dort die App installieren, dann **Mehr → Sicherungsdatei wählen**.

## Updates

Updates kommen automatisch: Mit Internet lädt die App beim Start die neueste Version. Deine Daten bleiben dabei erhalten.

## Technik

Eine einzige HTML-Datei (`index.html`) plus `manifest.webmanifest`, Service Worker (`sw.js`) und Icons. Gespeichert wird in IndexedDB. Die PDFs erzeugt jsPDF (wird beim ersten Start geladen und dann offline vorgehalten). Gehostet über GitHub Pages.
