import { motion } from 'framer-motion'

// Danke-Seite nach erfolgreichem Absenden.
export default function ThankYou() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col items-center text-center"
    >
      {/* Erfolgs-Häkchen */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-soft">
        <span className="text-4xl text-accent">✓</span>
      </div>

      <h2 className="mb-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
        Vielen Dank!
      </h2>
      <p className="mb-6 max-w-md text-lg text-gray-600">
        Wir melden uns innerhalb von 48 Stunden bei Ihnen.
      </p>
      <p className="mb-10 max-w-md text-lg text-gray-600">
        Mehr über uns erfahren Sie auf{' '}
        <a
          href="https://www.wevano.at"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline underline-offset-2 transition-colors hover:text-accent-hover"
        >
          www.wevano.at
        </a>
      </p>

      {/* Platzhalter-Bereich für die spätere Terminbuchung */}
      <div className="w-full max-w-xl rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-10 text-gray-400">
        {/* Calendly embed hier */}
        Terminbuchung folgt in Kürze.
      </div>
    </motion.div>
  )
}
