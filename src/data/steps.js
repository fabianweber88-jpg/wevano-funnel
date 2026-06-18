// Datengetriebenes Array der 7 Quiz-Schritte (Single-Choice).
// Jeder Schritt hat einen eindeutigen `key`, der gleichzeitig der Name
// des versteckten Netlify-Felds ist (siehe index.html), damit die Antwort
// beim Lead mitgespeichert wird.
//
// Schritt 8 (Kontakt) ist KEIN Quiz-Schritt und wird separat gerendert.

export const quizSteps = [
  {
    key: 'step1_unternehmensart',
    question: 'Was beschreibt Ihr Unternehmen am besten?',
    options: [
      'Lokaler Betrieb',
      'Dienstleister',
      'Größeres Unternehmen',
      'Sonstiges',
    ],
  },
  {
    key: 'step2_website_status',
    question: 'Haben Sie aktuell eine Website?',
    options: [
      'Nein, noch keine',
      'Ja, aber veraltet',
      'Ja, aber sie bringt keine Kunden',
    ],
  },
  {
    key: 'step3_ziel',
    question: 'Was soll Ihre neue Website vor allem erreichen?',
    options: [
      'Mehr Anfragen & Kunden',
      'Professionell wirken',
      'Online verkaufen',
      'Bei Google gefunden werden',
    ],
  },
  {
    key: 'step4_umfang',
    question: 'Wie umfangreich soll Ihre Website sein?',
    options: ['Eine Seite', '3–5 Seiten', '6+ Seiten', 'Online-Shop'],
  },
  {
    key: 'step5_budget',
    question: 'Mit welchem Budget rechnen Sie ungefähr?',
    options: ['Bis €800', '€800 – €1.500', '€1.500 – €3.000', 'Mehr als €3.000'],
  },
  {
    key: 'step6_zeitpunkt',
    question: 'Wann möchten Sie starten?',
    options: [
      'So schnell wie möglich',
      'In 1–3 Monaten',
      'Ich informiere mich nur',
    ],
  },
  {
    key: 'step7_entscheider',
    question: 'Wer entscheidet über das Projekt?',
    options: ['Ich selbst', 'Ich gemeinsam mit Partner:in', 'Das Team'],
  },
]

// Gesamtanzahl der Schritte inkl. Kontakt-Schritt (für den Fortschrittsbalken)
export const TOTAL_STEPS = quizSteps.length + 1 // 7 Quiz + 1 Kontakt = 8
