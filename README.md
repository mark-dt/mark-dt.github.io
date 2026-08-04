# Dynatrace Tools

A collection of internal Dynatrace utilities hosted on GitHub Pages.

**Live site:** [mark-dt.github.io](https://mark-dt.github.io)

## Tools

| Tool | File | Description |
|------|------|-------------|
| **Audit Log Analyser** | `audit-log.html` | Query Dynatrace audit logs via API, filter results, and export to CSV |
| **Extension Configurator** | `extension-configurator.html` | Configure Dynatrace OneAgent extensions and deploy to entities |
| **Dashboard Marketplace** | `dashboards/index.html` | Browse and deploy pre-built dashboards to a Dynatrace tenant |
| **Backtrace Viewer** | `backtrace.html` | Import and visualize Dynatrace service backtrace JSON files as an interactive tree |
| **PurePath Viewer** | `purepath.html` | Import and visualize Dynatrace PurePath dumps (.ppdump) as an interactive trace tree |
| **OTCA Practice Quiz** | `otca-quiz/index.html` | Practice for the OpenTelemetry Certified Associate exam — domain drills, weak-question review, and a timed 60-question mock exam |

## Project Structure

```
index.html                    # Landing page
audit-log.html                # Audit Log Analyser
extension-configurator.html   # Extension Configurator
backtrace.html                # Backtrace Viewer
purepath.html                 # PurePath Viewer
otca-quiz/
  index.html                  # OTCA Practice Quiz
  questions.json              # Question bank (domain, options, answer, explanation, doc links)
dashboards/
  index.html                  # Dashboard Marketplace
  js/main.js                  # Dashboard-specific utilities
  css/main.css                # Dashboard-specific styles
css/
  main.css                    # Shared Dynatrace-themed styles
  styles.css                  # Landing page component styles
js/
  main.js                     # Shared utilities (CSV export, JSON highlighting)
  script.js                   # Navigation helpers
```

## Development

No build tools required. Open any HTML file in a browser or serve locally:

```sh
python3 -m http.server 8000
```

Deploy by pushing to `master` — GitHub Pages serves automatically.
