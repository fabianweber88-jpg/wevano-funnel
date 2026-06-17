import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Gemeinsames Layout für die Rechtsseiten (Impressum & Datenschutz).
// Gleiche Typografie/Farben wie der Funnel, ruhiges Lese-Layout.
export default function LegalLayout({ title, children }) {
  // Beim Öffnen nach oben scrollen (bei Navigation aus dem Footer).
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-5 py-6 sm:px-8 sm:py-10">
      {/* Kopfbereich: Zurück zur Startseite + Markenname */}
      <header className="mb-10 sm:mb-14">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            aria-label="Zurück zur Startseite"
            className="-ml-2 flex h-11 items-center gap-2 rounded-full px-3 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-ink"
          >
            <span aria-hidden="true">←</span> Zurück
          </Link>

          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Wevano
          </span>

          <span className="h-11 w-16" /> {/* Symmetrie-Platzhalter */}
        </div>
      </header>

      {/* Inhalt */}
      <main className="flex-1">
        <h1 className="mb-10 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <div className="space-y-8 text-[15px] leading-relaxed text-gray-700 sm:text-base">
          {children}
        </div>
      </main>

      {/* Fuß: Querverlinkung der Rechtsseiten */}
      <footer className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-gray-100 pt-6 text-sm text-gray-400">
        <Link to="/impressum" className="transition-colors hover:text-ink">
          Impressum
        </Link>
        <Link to="/datenschutz" className="transition-colors hover:text-ink">
          Datenschutzerklärung
        </Link>
      </footer>
    </div>
  )
}
