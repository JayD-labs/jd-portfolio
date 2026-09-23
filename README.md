# JD Portfolio

Meine persönliche Portfolio-Website und gleichzeitig ein praktisches Projekt für meinen Einstieg in die IT.

🌐 **Live:** [jd-schuldt.de](https://jd-schuldt.de)

## Über das Projekt

Das Portfolio zeigt meinen aktuellen IT-Lernweg, meine Fähigkeiten, Zertifikate, Projekte und ausgewählte Prompts.

Die erste Version der Website habe ich eigenständig mit HTML und CSS aufgebaut, um Grundlagen in Webentwicklung, Git und GitHub praktisch zu lernen.

Mit Version 2 wurde das Portfolio vollständig überarbeitet. Das Redesign entstand mit KI-Unterstützung auf Basis meiner eigenen Anforderungen, Inhalte, Designvorgaben und Prompts.

Dabei nutze ich KI nicht nur zur Generierung von Code, sondern beschäftige mich mit den erzeugten Lösungen, prüfe sie, passe sie an und entwickle sie iterativ weiter.

## Versionen

### V1

Die erste Version des Portfolios wurde von mir eigenständig entwickelt.

Schwerpunkte:

- HTML5
- CSS3
- Git & GitHub
- Responsive Design
- erste Accessibility-Grundlagen
- GitHub Pages
- eigene Domain

### V2

Vollständiges Redesign des Portfolios mit KI-Unterstützung und strukturiertem Prompting.

Meine Aufgaben dabei:

- Anforderungen definieren
- Inhalte erstellen
- Seitenstruktur planen
- Designvorgaben festlegen
- Design-Tokens festlegen und einsetzen
- Prompts erstellen und überarbeiten
- generierten Code prüfen
- Fehler analysieren
- Änderungen testen
- Lösungen iterativ weiterentwickeln

Die KI unterstützt insbesondere bei der Erstellung und Überarbeitung größerer Teile von HTML, CSS und JavaScript.

## Shared Layout

Header und Footer werden als wiederverwendbare Komponenten gepflegt und auf mehreren Seiten dynamisch eingebunden.

Dafür werden folgende Dateien verwendet:

- `components/header.html`
- `components/footer.html`
- `components.js`

`components.js` lädt die Komponenten per `fetch()` und fügt sie in die vorgesehenen Platzhalter der jeweiligen Seite ein.

Dadurch müssen Navigation und Footer nicht auf jeder Unterseite separat gepflegt werden.

Der Dark-/Light-Mode funktioniert weiterhin auch mit dem dynamisch geladenen Header. Die Theme-Auswahl wird im Browser gespeichert und auf den Seiten wieder angewendet.

## Vault-Seite

Unter `/vault/` befindet sich eine eigene Seite für meinen privat betriebenen Vaultwarden-Passwortmanager.

Die Seite dient als Portfolio-Erweiterung und zeigt den Verbindungsstatus des privaten Dienstes an.

Enthalten sind unter anderem:

- gemeinsamer Header und Footer
- gemeinsames Seitenlayout
- Dark-/Light-Mode
- eigener Vaultwarden-Statusbereich
- Erreichbarkeitsprüfung per JavaScript
- Online-, Offline- und Prüfstatus
- Weiterleitung zum Vault bei erfolgreicher Verbindung

Der eigentliche Passwortmanager bleibt unabhängig von der Portfolio-Website geschützt und ist ausschließlich über meine private Netzwerkinfrastruktur erreichbar.

## Prompting

Der zentrale Prompt für das V2-Redesign befindet sich direkt im Repository:

[`assets/prompts/portfolio.md`](assets/prompts/portfolio.md)

Er enthält unter anderem Anforderungen an:

- Seitenstruktur
- Inhalte
- Responsive Design
- Accessibility
- Dark- und Light-Mode
- Design-Tokens
- Navigation
- Interaktionen
- technische Umsetzung

Dadurch ist nachvollziehbar, welche Anforderungen der KI für die Erstellung der Website vorgegeben wurden.

## Aktueller Stand

- semantisches HTML5
- eigenes Design-System mit Design-Tokens
- Dark- und Light-Mode
- Speicherung des gewählten Themes
- Liquid-Glass-inspiriertes Design
- Responsive Layout
- Profilbereich mit Profilbild
- feste Top-Navigation
- wiederverwendbarer Header und Footer
- dynamisches Laden gemeinsamer Komponenten
- zusätzliche Seitennavigation auf größeren Displays
- Skills und Technologien
- Zertifikate und Nachweise
- Projektübersicht
- Prompt-Bereich
- separate Vault-Seite
- JavaScript-basierte Vault-Erreichbarkeitsprüfung
- zugängliche Akkordeons
- Tastaturnavigation
- sichtbare Fokuszustände
- grundlegende WCAG-orientierte Accessibility
- GitHub Pages Deployment
- eigene Domain

## Technologien

- HTML5
- CSS3
- Vanilla JavaScript
- Git
- GitHub
- GitHub Pages

## Projektstruktur

```text
jd-portfolio/
├── assets/
│   ├── certificates/
│   ├── images/
│   │   └── jd-profile.jpeg
│   └── prompts/
│       └── portfolio.md
│
├── components/
│   ├── footer.html
│   └── header.html
│
├── vault/
│   ├── index.html
│   ├── vault.css
│   └── vault.js
│
├── .gitignore
├── CNAME
├── components.js
├── index.html
├── jd-design-tokens.css
├── style.css
├── script.js
└── README.md
```

## Entwicklung

Das Projekt dient nicht nur als fertige Website, sondern auch als Dokumentation meines Lernfortschritts.

Version 1 entstand als klassisches Lernprojekt, bei dem ich die Website selbst aufgebaut habe.

Mit Version 2 beschäftige ich mich zusätzlich damit, wie KI sinnvoll in einen Entwicklungsprozess integriert werden kann – von der Formulierung technischer Anforderungen über Prompting bis zur Prüfung und Weiterentwicklung der erzeugten Ergebnisse.

Zusätzlich nutze ich das Projekt inzwischen, um wiederverwendbare Frontend-Strukturen, JavaScript-basierte Komponenten, mehrseitige Layouts und die Anbindung eigener Self-Hosting-Projekte praktisch umzusetzen.

Git und GitHub nutze ich dabei zur Versionsverwaltung und zur nachvollziehbaren Dokumentation der Entwicklung.

## Status

🚧 Das Portfolio befindet sich weiterhin in aktiver Entwicklung und wächst mit meinem Lernfortschritt.

## Responsive Hero und Impressum-Vorlage

- Das Hero-Layout wechselt erst ab 64rem auf zwei Spalten. Bei schmaleren Fenstern stehen Bild und Text untereinander; die Textspalte kann nicht mehr die Grid-Breite erzwingen.
- Unter `/impressum/` liegt eine ausdrücklich als unvollständig markierte Blanko-Vorlage mit Platzhaltern. Der gemeinsame Footer verweist auf sie. **Vor einer rechtskonformen Nutzung müssen die tatsächlichen Anbieter- und Kontaktangaben geprüft und vom Betreiber freigegeben werden.** Die Vorlage ist kein fertiges Impressum.
- Bestehende CSP-Direktiven, Skills, Projekte und Theme-Logik wurden nicht verändert.
