# JD Portfolio

**Persönliches IT-Portfolio und praxisorientiertes Webentwicklungsprojekt von JD.**

🌐 **Live-Demo:** [jd-schuldt.de](https://jd-schuldt.de) · **Quellcode:** [JayD-labs/jd-portfolio](https://github.com/JayD-labs/jd-portfolio)

## Projekt und Ziel

Die Website dokumentiert meinen Weg in die IT: Grundlagen und praktische Erfahrungen, abgeschlossene Lernmodule, Zertifikatsnachweise sowie eigene Projekte. Gleichzeitig dient das Repository als nachvollziehbares Entwicklungsprojekt für HTML, CSS, JavaScript und Git/GitHub.

Die erste Version entstand als eigenständiges Lernprojekt mit HTML und CSS. Für Version 2 habe ich Anforderungen, Inhalte und Designvorgaben definiert und das Portfolio mit KI-Unterstützung überarbeitet. Generierte Lösungen prüfe, verstehe und passe ich im weiteren Entwicklungsprozess an. Der zugehörige [Redesign-Prompt](assets/prompts/portfolio.md) ist im Repository dokumentiert.

## Technologien

| Bereich | Im Portfolio verwendet für |
| --- | --- |
| HTML5 | Seitenstruktur, Inhalte und semantische Elemente |
| CSS3 | Responsives Layout, Design-Tokens, Dark-/Light-Mode und Animationen |
| Vanilla JavaScript | Navigation, Theme-Umschaltung, Akkordeons, dynamische Komponenten und Vault-Statusabfrage |
| Web App Manifest | App-Metadaten, Icons und eigenständiger Anzeigemodus beim Hinzufügen zum Startbildschirm |
| Git und GitHub | Versionsverwaltung und öffentliche Projektdokumentation |
| GitHub Pages und eigene Domain | Veröffentlichung unter `jd-schuldt.de` |

**Abgrenzung:** Python, FastAPI, SQLite, Docker, Linux und restic werden im Portfolio als Lern- oder Projektthemen vorgestellt, sind aber **nicht** Teil des Technologie-Stacks dieser Website. Das Repository enthält eine statische Frontend-Website ohne eigenes Backend oder Build-System. Das vorhandene Web App Manifest allein bedeutet nicht, dass Offline-Nutzung über einen Service Worker implementiert ist.

## Seiten und Funktionen

### Startseite (`/`)

- **Hero und Über mich:** Vorstellung, Profilbild, Lernweg und Links zu Projekten und GitHub.
- **Skills & Technologien:** Übersicht der auf der Website dargestellten Kenntnisse und Erfahrungsstände.
- **Zertifikate & Nachweise:** Kurs- und Badge-Nachweise als verlinkte PDFs, darunter Python-Grundlagen, Python-Programme, AI Prompting sowie HTML/CSS. Ausklappbare Bereiche gruppieren einzelne Kurs-Badges.
- **Projekte:** Präsentation eigener Arbeiten und Verweise auf weiterführende Projektinformationen.
- **Prompts:** Dokumentation der KI-gestützten Arbeit am Portfolio.

### Gemeinsames Layout und Interaktionen

- Header und Footer werden über `components.js` per `fetch()` aus `components/header.html` und `components/footer.html` in die Seiten geladen.
- Responsive Top-Navigation mit ein- und ausklappbarem Menü auf kleineren Bildschirmen; zusätzliche Abschnittsnavigation auf größeren Bildschirmen.
- Dark-/Light-Mode mit Speicherung der Auswahl in `localStorage`.
- Akkordeons mit `aria-expanded` und zugeordneten Inhaltsbereichen, Skip-Link, sichtbare Tastatur-Fokuszustände und Berücksichtigung reduzierter Bewegung bei Scroll-Effekten.
- Scroll-basierte Einblendeffekte, Hervorhebung des aktiven Abschnitts und Schaltfläche zum Zurückspringen an den Seitenanfang.

Diese Angaben beschreiben die im Quellcode vorgesehenen Funktionen; sie ersetzen keinen vollständigen Browser- oder Accessibility-Test.

### Vault-Seite (`/vault/`)

Eine separate Infoseite für meinen privat betriebenen Vaultwarden-Dienst. `vault/vault.js` prüft die Erreichbarkeit über den `/healthz`-Endpunkt, zeigt Prüf-, Online- oder Offline-Status und ermöglicht bei erfolgreicher Prüfung die Weiterleitung zum Vault. **Der Passwortmanager ist kein Bestandteil dieses öffentlichen Repositories und bleibt über mein privates VPN zugänglich.** Eine fehlgeschlagene Browseranfrage kann neben fehlender VPN-Verbindung auch andere Ursachen haben.

### Impressum-Vorlage (`/impressum/`)

Die verlinkte Seite ist derzeit **nur eine ausdrücklich unvollständige Vorlage mit Platzhaltern**, kein fertig ausgefülltes Impressum. Vor der rechtlichen Nutzung müssen die erforderlichen Angaben geprüft und ergänzt werden.

## Projektstruktur

```text
jd-portfolio/
├── assets/
│   ├── certificates/       # Verlinkte Kurs- und Badge-PDFs
│   ├── icons/              # Website- und App-Icons
│   ├── images/             # Bildmaterial, darunter das Profilbild
│   └── prompts/
│       └── portfolio.md    # Anforderungen und Prompt zum Redesign
├── components/
│   ├── header.html         # Gemeinsame Navigation
│   └── footer.html         # Gemeinsamer Footer
├── impressum/
│   └── index.html          # Unvollständige Impressum-Vorlage
├── vault/
│   ├── index.html          # Vault-Infoseite
│   ├── vault.css           # Seitenspezifische Gestaltung
│   └── vault.js            # Erreichbarkeitsprüfung
├── index.html              # Portfolio-Startseite
├── style.css               # Layout und Komponenten-Styling
├── jd-design-tokens.css    # Farben, Abstände und Theme-Tokens
├── script.js               # Frontend-Interaktionen
├── components.js           # Dynamisches Laden von Header und Footer
├── manifest.webmanifest    # Web-App-Metadaten und Icons
├── CNAME                   # Eigene Domain
├── .gitignore
└── README.md
```

Die Übersicht zeigt die zentralen Dateien und Ordner; einzelne Mediendateien und Zertifikate sind zugunsten der Lesbarkeit zusammengefasst.

## Lokal ausführen

Es ist kein Paketmanager und kein Build-Schritt erforderlich. Für die Entwicklung wird ein **lokaler HTTP-Server** benötigt, da Header und Footer mit `fetch()` unter absoluten Pfaden (`/components/...`) geladen werden. Das direkte Öffnen von `index.html` über `file://` ist daher nicht ausreichend.

```bash
git clone https://github.com/JayD-labs/jd-portfolio.git
cd jd-portfolio
python3 -m http.server 8000
```

Anschließend `http://localhost:8000/` im Browser öffnen. Python dient hier **nur als lokaler Entwicklungsserver**, nicht als Laufzeittechnologie der Website. Die Vault-Statusprüfung benötigt zusätzlich den passenden privaten Netzwerkzugang und kann lokal oder ohne VPN erwartungsgemäß fehlschlagen.

## Entwicklungsstand

Das Portfolio ist unter der eigenen Domain veröffentlicht und wird als Lern- und Präsentationsprojekt fortlaufend erweitert. Version 2 umfasst das responsive Redesign, eine mehrseitige Struktur mit gemeinsamen Layout-Komponenten, interaktive Frontend-Funktionen, den Zertifikatsbereich und die separate Vault-Infoseite. Die Impressum-Seite ist weiterhin eine unvollständige Vorlage.

Die dokumentierten Lernstände und Projekte beziehen sich auf die Portfolio-Inhalte; aus ihrer Erwähnung folgt nicht, dass deren Software in dieser Website implementiert ist.
