# JD Portfolio

Meine persönliche Portfolio-Website, die ich im Rahmen meines IT-Selbststudiums entwickle und kontinuierlich erweitere.

Das Projekt dient dazu, meine Kenntnisse in **HTML, CSS, JavaScript, Git und GitHub** praktisch anzuwenden, meinen aktuellen Lernstand zu dokumentieren und eigene Projekte sowie Zertifikate übersichtlich darzustellen.

[![GitHub](https://img.shields.io/badge/GitHub-JayD--labs-24292f?logo=github&logoColor=white)](https://github.com/JayD-labs?tab=repositories)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Justin--Daniel%20Schuldt-444444?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/justin-daniel-schuldt-23577b3b0/)
[![Microsoft Learn](https://img.shields.io/badge/Microsoft%20Learn-Zertifikate-5b5b5b?logo=microsoft&logoColor=white)](https://learn.microsoft.com/de-de/users/justindanielschuldt-7930/achievements)

## Aktueller Stand

Die Website befindet sich weiterhin in aktiver Entwicklung und wird Schritt für Schritt an meinen tatsächlichen Lernstand angepasst.

Bereits umgesetzt:

- Semantische HTML-Grundstruktur
- Dunkles Portfolio-Design
- Eigenes Design-Token-System mit zentral definierten Farben, Oberflächen, Radien und Übergängen
- Trennung zwischen Design-Tokens und komponentenspezifischem Styling
- Navigation innerhalb der Website
- Bereich „Über mich“
- Skills & Technologien mit aktuellem Status und aufklappbaren Beschreibungen
- Interaktive Skill-Karten mit JavaScript und `aria-expanded`
- Tastaturfreundliche Bedienelemente auf Basis echter Buttons
- Sichtbare Fokuszustände und WCAG-orientierte Farb- und Fokus-Tokens
- Links zu GitHub, LinkedIn und Microsoft Learn
- Projektübersicht
- Zertifikate & Badges
- Hover-Effekte und kleinere Animationen
- Veröffentlichung über GitHub Pages

## Technologien

Aktuell verwende ich in diesem Projekt:

- **HTML5** – semantischer Aufbau und Seitenstruktur
- **CSS3** – Layout, Komponenten, Animationen und Design-System
- **JavaScript** – einfache Interaktionen innerhalb der Skill-Karten
- **Git** – Versionsverwaltung und Feature-Branches
- **GitHub** – Repository, Entwicklungsworkflow und Veröffentlichung
- **GitHub Pages** – Hosting der Portfolio-Website

Parallel beschäftige ich mich unter anderem mit **Python, Linux, PostgreSQL / Supabase, KI-gestützter Entwicklung, Systemarchitektur und Security-Grundlagen**.

## Design-System

Das Portfolio verwendet inzwischen ein eigenes kleines Design-System.

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

Dadurch sollen Farben und wiederkehrende Designentscheidungen nicht mehr mehrfach als feste Werte im Code stehen, sondern zentral gepflegt werden können.

Aktuell ist das Portfolio über

```html
<html lang="de" data-theme="dark">
```

explizit auf das Dark Theme eingestellt.

## Barrierefreiheit

Barrierefreiheit ist inzwischen ein eigener Bestandteil des Projekts und nicht nur eine spätere Ergänzung.

Aktuell umgesetzt sind unter anderem:

- Semantische HTML-Elemente
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
- Layouts und Komponenten mit CSS umzusetzen
- Wiederverwendbare Design-Systeme und Design-Tokens zu verstehen
- Responsive und zugängliche Interfaces zu entwickeln
- Einfache Interaktionen mit JavaScript selbst umzusetzen
- Git sinnvoll im Entwicklungsprozess einzusetzen
- Mit Feature-Branches, Merges und nachvollziehbaren Commits zu arbeiten
- Eigene Projekte strukturiert zu dokumentieren
- Bestehenden Code zu verstehen und gezielt weiterzuentwickeln

## Projekte

### JD Portfolio

Meine erste selbst entwickelte Portfolio-Website. Das Projekt dient dazu, meine Kenntnisse in HTML, CSS, JavaScript, Git und GitHub praktisch auszubauen und meinen Lernfortschritt sichtbar zu dokumentieren.

Der Fokus liegt aktuell besonders auf sauberer Struktur, Barrierefreiheit, einem konsistenten Design-System und einem nachvollziehbaren Git-Workflow.

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
├── index.html
├── jd-design-tokens.css
├── style.css
├── script.js
└── README.md
```

### Dateien

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
```

Der grundlegende Ablauf ist:

```text
Feature-Branch erstellen
→ Änderung entwickeln
→ lokal testen
→ committen
→ Feature-Branch pushen
→ in main mergen
→ main pushen
→ abgeschlossenen Feature-Branch löschen
```

Dadurch bleiben Änderungen nachvollziehbar und einzelne Entwicklungsschritte voneinander getrennt.

## Status

🚧 **In Entwicklung**

Das Portfolio wird kontinuierlich erweitert und an meinen tatsächlichen Lernstand angepasst.
