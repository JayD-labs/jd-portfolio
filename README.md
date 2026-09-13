# JD Portfolio

Meine persönliche Portfolio-Website, die ich im Rahmen meines IT-Selbststudiums entwickle und kontinuierlich erweitere.

Das Projekt dient dazu, meine Kenntnisse in **HTML, CSS, JavaScript, Git und GitHub** praktisch anzuwenden, meinen aktuellen Lernstand sichtbar zu dokumentieren und eigene Projekte sowie Zertifikate übersichtlich darzustellen.

🌐 **Live:** [jd-schuldt.de](https://jd-schuldt.de)

[![GitHub](https://img.shields.io/badge/GitHub-JayD--labs-24292f?logo=github&logoColor=white)](https://github.com/JayD-labs?tab=repositories)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Justin--Daniel%20Schuldt-444444?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/justin-daniel-schuldt-23577b3b0/)
[![Microsoft Learn](https://img.shields.io/badge/Microsoft%20Learn-Zertifikate-5b5b5b?logo=microsoft&logoColor=white)](https://learn.microsoft.com/de-de/users/justindanielschuldt-7930/achievements)

## Aktueller Stand

Die Website befindet sich weiterhin in aktiver Entwicklung und wird Schritt für Schritt an meinen tatsächlichen Lernstand angepasst.

Bereits umgesetzt:

- Semantische HTML-Grundstruktur
- Eigene Top-Navigation mit Sprungmarken zu den wichtigsten Bereichen
- Neuer Hero-Bereich mit Kurzvorstellung, Profilbild-Platzhalter und Plattform-Links
- Bereich „Über mich“ mit einzelnen Inhaltskarten
- Skills & Technologien mit aktuellem Lernstatus und aufklappbaren Beschreibungen
- Interaktive Skill-Karten mit JavaScript und `aria-expanded`
- Zertifikate & Nachweise mit direkten Verlinkungen
- Projektübersicht
- Links zu GitHub, LinkedIn und Microsoft Learn
- Dunkles Portfolio-Design mit konsistenter grüner Akzentfarbe
- Eigenes Design-Token-System für Farben, Oberflächen, Radien und Übergänge
- Trennung zwischen Design-Tokens und komponentenspezifischem Styling
- Tastaturfreundliche Bedienelemente und sichtbare Fokuszustände
- Hover-Effekte und kleinere Animationen
- Veröffentlichung über GitHub Pages
- Eigene Domain über `jd-schuldt.de`

## Technologien

Aktuell verwende ich in diesem Projekt:

- **HTML5** – semantischer Aufbau und Seitenstruktur
- **CSS3** – Layout, Flexbox, Komponenten, Animationen und Design-System
- **JavaScript** – einfache Interaktionen innerhalb der Skill-Karten
- **Git** – Versionsverwaltung und Feature-Branches
- **GitHub** – Repository, Entwicklungsworkflow und Veröffentlichung
- **GitHub Pages** – Hosting der Portfolio-Website

Parallel beschäftige ich mich unter anderem mit **Python, Linux, PostgreSQL / Supabase, KI-gestützter Entwicklung, Systemarchitektur und Security-Grundlagen**.

## Aufbau der Website

Die Website ist aktuell in folgende Hauptbereiche gegliedert:

- **Top-Navigation** – direkte Navigation zu den einzelnen Bereichen
- **Hero** – kurze Vorstellung, aktueller Schwerpunkt und externe Plattform-Links
- **Über mich** – persönlicher Hintergrund, Lernweise und berufliche Zielrichtung
- **Skills & Technologien** – aktueller Kenntnisstand mit interaktiven Detailtexten
- **Zertifikate & Nachweise** – bisher absolvierte Lerninhalte und Badges
- **Projekte** – eigene Projekte und praktische Lernvorhaben

Der Hero enthält aktuell noch einen quadratischen Profilbild-Platzhalter. Ein endgültiges Foto wird später ergänzt, ohne dafür die bestehende Seitenstruktur neu aufbauen zu müssen.

## Design-System

Das Portfolio verwendet ein eigenes kleines Design-System.

Die Datei `jd-design-tokens.css` enthält zentrale Designwerte wie:

- Brand-Farben
- Hintergrund- und Oberflächenfarben
- Textfarben
- Primary-, Hover- und Active-Zustände
- Fokusfarben
- Statusfarben
- Border-Radien
- Transition-Zeiten
- Light- und Dark-Mode-Tokens

Die eigentliche `style.css` verwendet diese Variablen anschließend für die konkreten Bereiche und Komponenten der Website.

Dadurch stehen wiederkehrende Designentscheidungen nicht mehrfach als feste Werte im Code, sondern können zentral gepflegt werden.

Aktuell ist das Portfolio über

```html
<html lang="de" data-theme="dark">
```

explizit auf das Dark Theme eingestellt.

## Barrierefreiheit

Barrierefreiheit ist ein fester Bestandteil des Projekts und wird parallel zur eigentlichen Entwicklung berücksichtigt.

Aktuell umgesetzt sind unter anderem:

- Semantische HTML-Elemente und nachvollziehbare Überschriftenstruktur
- Listenbasierte Navigation und Link-Gruppen
- Bedienbare Buttons für interaktive Inhalte
- `aria-expanded` für den Zustand der Skill-Karten
- Tastaturbedienung der interaktiven Elemente
- Sichtbare Fokuszustände über `:focus-visible`
- Kontrastorientierte Farb-Tokens
- Trennung zwischen Textfarbe und Farbe auf Primary-Flächen
- Externe Links mit `rel="noopener noreferrer"`

Das Thema wird mit wachsendem Kenntnisstand weiter überprüft und verbessert.

## Lernziele

Mit diesem Projekt möchte ich insbesondere lernen:

- Webseiten semantisch mit HTML aufzubauen
- Layouts und Komponenten mit CSS selbst umzusetzen
- Flexbox gezielt für unterschiedliche Layout-Aufgaben einzusetzen
- Wiederverwendbare Design-Systeme und Design-Tokens zu verstehen
- Responsive und zugängliche Interfaces zu entwickeln
- Einfache Interaktionen mit JavaScript selbst umzusetzen
- Git sinnvoll im Entwicklungsprozess einzusetzen
- Mit Feature-Branches, Merges und nachvollziehbaren Commits zu arbeiten
- Eigene Projekte strukturiert zu dokumentieren
- Bestehenden Code zu verstehen, Fehler selbst nachzuvollziehen und gezielt weiterzuentwickeln

## Projekte

### JD Portfolio

Meine erste selbst entwickelte Portfolio-Website. Das Projekt dient dazu, meine Kenntnisse in HTML, CSS, JavaScript, Git und GitHub praktisch auszubauen und meinen Lernfortschritt sichtbar zu dokumentieren.

Der aktuelle Fokus liegt besonders auf sauberer Struktur, einem konsistenten Design-System, Barrierefreiheit und einem nachvollziehbaren Git-Workflow.

### Axiom Core

Ein persönliches KI- und Automatisierungsprojekt zur Entwicklung eines modularen Assistenzsystems.

Der Fokus liegt unter anderem auf:

- Systemarchitektur
- APIs
- Datenbanken
- Automatisierung
- KI-gestützten Anwendungen

## Zertifikate & Badges

Aktuell auf dem Portfolio eingebunden:

### Microsoft Applied Skills / AI Prompting

Grundlagen des KI-gestützten Promptings mit Fokus auf klare und zielgerichtete Eingaben, grundlegende Prompting-Techniken und den praktischen Einsatz von KI-Tools.

[Badge auf Microsoft Learn ansehen](https://learn.microsoft.com/de-de/users/justindanielschuldt-7930/achievements?tab=tab-modules#badges-section)

### Website erstellen mit HTML & CSS (Anfänger)

Grundlagen der Webentwicklung mit HTML und CSS. Behandelt wurden unter anderem der strukturierte Aufbau von Webseiten, grundlegendes Styling, Barrierefreiheit und saubere Webentwicklung.

[Nachweis auf Microsoft Learn ansehen](https://learn.microsoft.com/de-de/users/justindanielschuldt-7930/achievements?tab=tab-learning-paths#trophies-section)

Weitere Nachweise werden im Laufe meines Selbststudiums ergänzt.

## Projektstruktur

```text
jd-portfolio/
├── CNAME
├── index.html
├── jd-design-tokens.css
├── style.css
├── script.js
└── README.md
```

### Dateien

- `CNAME` – verbindet GitHub Pages mit der eigenen Domain `jd-schuldt.de`
- `index.html` – Struktur und Inhalte des Portfolios
- `jd-design-tokens.css` – zentrale Farben, Themes, Radien, Fokus- und Designwerte
- `style.css` – komponentenspezifisches Layout und Styling
- `script.js` – Interaktion der aufklappbaren Skill-Karten
- `README.md` – Dokumentation des Projekts

## Entwicklungsworkflow

Größere Änderungen entwickle ich grundsätzlich in eigenen Feature-Branches.

Beispiele aus der bisherigen Entwicklung:

```text
feature/base-html
feature/styling
feature/accessibility-interactions
feature/design-tokens
feature/about-section
feature/header-hero
```

Der grundlegende Ablauf ist:

```text
Feature-Branch erstellen
→ Änderung entwickeln
→ lokal testen
→ committen
→ in main mergen
→ main pushen
→ abgeschlossenen Feature-Branch löschen
```

Dadurch bleiben Änderungen nachvollziehbar und einzelne Entwicklungsschritte voneinander getrennt.

## Nächste Schritte

Geplant sind unter anderem:

- Responsive Verhalten von Navigation und Hero weiter verbessern
- Mobile Darstellung gezielt testen und optimieren
- Profilbild-Platzhalter durch ein echtes Foto ersetzen
- Barrierefreiheit weiter prüfen
- Inhalte und Projekte mit wachsendem Lernstand ergänzen

## Status

🚧 **In Entwicklung**

Das Portfolio wird kontinuierlich erweitert und an meinen tatsächlichen Lernstand angepasst.
