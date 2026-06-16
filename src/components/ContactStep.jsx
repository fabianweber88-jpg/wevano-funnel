import { useState } from 'react'

// Schritt 8: Kontakt & Angebot.
// Sendet alle Kontaktdaten + sämtliche Quiz-Antworten (answers) an Netlify.
export default function ContactStep({ answers, onSubmitted }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  })
  const [consent, setConsent] = useState(false) // NICHT vorausgewählt
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validierung: alle Felder Pflicht
    if (!form.name || !form.email || !form.phone || !form.company) {
      setError('Bitte füllen Sie alle Felder aus.')
      return
    }
    if (!consent) {
      setError('Bitte stimmen Sie der Kontaktaufnahme zu.')
      return
    }

    setSubmitting(true)
    try {
      // Alle Felder zusammenführen. Wichtig:
      // - 'form-name' MUSS exakt dem name des versteckten Formulars in
      //   index.html entsprechen ('wevano-lead'), sonst ordnet Netlify die
      //   Submission keinem Formular zu und alle Felder bleiben leer.
      // - 'bot-field' (Honeypot) wird leer mitgeschickt = "kein Bot".
      // - Alle übrigen Keys (step1_… bis step7_…, name, email, phone,
      //   company, consent) müssen exakt den hidden inputs in index.html
      //   entsprechen, damit Netlify sie speichert.
      const payload = {
        'form-name': 'wevano-lead',
        'bot-field': '',
        ...answers,
        ...form,
        consent: 'Ja',
      }

      // Netlify Forms erwartet application/x-www-form-urlencoded – KEIN JSON.
      // URLSearchParams erzeugt genau dieses Format und kodiert sauber.
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload).toString(),
      })

      if (!response.ok) {
        throw new Error(`Netlify antwortete mit Status ${response.status}`)
      }

      onSubmitted()
    } catch (err) {
      setError('Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.')
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 text-lg text-ink transition-colors placeholder:text-gray-400 focus:border-accent focus:outline-none'

  return (
    <div className="flex w-full flex-col">
      <h2 className="mb-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
        Fast geschafft! Wir erstellen Ihnen kostenlos einen Entwurf Ihrer neuen
        Website.
      </h2>
      <p className="mb-8 text-lg text-gray-600">
        Tragen Sie Ihre Daten ein und wir melden uns mit Ihrem persönlichen
        Vorschlag.
      </p>

      {/*
        data-netlify + verstecktes form-name Feld sind für den Netlify-SPA-
        Workaround nötig. Die eigentliche Übertragung läuft per fetch() oben.
      */}
      <form
        name="wevano-lead"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="form-name" value="wevano-lead" />
        <p hidden>
          <label>
            Nicht ausfüllen: <input name="bot-field" />
          </label>
        </p>

        {/* Quiz-Antworten als versteckte Felder mitschicken */}
        {Object.entries(answers).map(([key, value]) => (
          <input key={key} type="hidden" name={key} value={value} />
        ))}

        <input
          className={inputClass}
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className={inputClass}
          type="email"
          name="email"
          placeholder="E-Mail"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className={inputClass}
          type="tel"
          name="phone"
          placeholder="Telefon"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          className={inputClass}
          type="text"
          name="company"
          placeholder="Unternehmensname"
          value={form.company}
          onChange={handleChange}
          required
        />

        {/* Aktive, NICHT vorausgewählte Zustimmungs-Checkbox */}
        <label className="mt-2 flex cursor-pointer items-start gap-3 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer rounded border-gray-300 text-accent accent-accent"
          />
          <span>
            Ich stimme zu, dass Wevano mich bezüglich meiner Anfrage per E-Mail
            und Telefon kontaktiert. Details in der{' '}
            <a
              href="/datenschutz"
              className="font-medium text-accent underline underline-offset-2"
            >
              Datenschutzerklärung
            </a>
            .
          </span>
        </label>

        {error && <p className="text-sm font-medium text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 w-full rounded-2xl bg-accent px-6 py-5 text-lg font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:bg-accent-hover active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? 'Wird gesendet …' : 'Kostenlosen Entwurf anfordern'}
        </button>
      </form>
    </div>
  )
}
