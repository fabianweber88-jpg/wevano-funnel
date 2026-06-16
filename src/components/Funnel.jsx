import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { quizSteps, TOTAL_STEPS } from '../data/steps'
import ProgressBar from './ProgressBar'
import QuizStep from './QuizStep'
import ContactStep from './ContactStep'
import ThankYou from './ThankYou'

// Slide/Fade-Varianten für den Übergang zwischen den Schritten.
// `direction` steuert, ob nach vorne (1) oder zurück (-1) animiert wird.
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
}

export default function Funnel() {
  // Aktueller Schritt-Index: 0–6 = Quiz, 7 = Kontakt
  const [stepIndex, setStepIndex] = useState(0)
  // Richtung der Animation (für Slide-Effekt)
  const [direction, setDirection] = useState(1)
  // Zentrales State-Objekt mit allen Antworten (key -> Auswahl)
  const [answers, setAnswers] = useState({})
  // Wurde das Formular erfolgreich abgesendet?
  const [submitted, setSubmitted] = useState(false)

  const isContactStep = stepIndex === quizSteps.length // Schritt 8

  // Vorwärts navigieren
  const goNext = () => {
    setDirection(1)
    setStepIndex((i) => Math.min(i + 1, TOTAL_STEPS - 1))
  }

  // Zurück navigieren (Antworten bleiben erhalten)
  const goBack = () => {
    setDirection(-1)
    setStepIndex((i) => Math.max(i - 1, 0))
  }

  // Eine Quiz-Antwort wählen -> speichern und automatisch weiter
  const handleSelect = (stepKey, value) => {
    setAnswers((prev) => ({ ...prev, [stepKey]: value }))
    // Kurze Verzögerung, damit die Auswahl sichtbar wird, dann weiter
    setTimeout(goNext, 220)
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-5 py-6 sm:px-8 sm:py-10">
      {/* Kopfbereich: Zurück-Pfeil + Logo + Fortschrittsbalken */}
      <header className="mb-8 sm:mb-12">
        <div className="mb-6 flex items-center justify-between">
          {/* Zurück-Pfeil (oben links) – sichtbar ab Schritt 2 und vor der Danke-Seite */}
          {stepIndex > 0 && !submitted ? (
            <button
              type="button"
              onClick={goBack}
              aria-label="Zurück"
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-ink"
            >
              ←
            </button>
          ) : (
            <span className="h-10 w-10" /> // Platzhalter für gleichbleibendes Layout
          )}

          {/* Markenname */}
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Wevano
          </span>

          <span className="h-10 w-10" /> {/* Symmetrie-Platzhalter rechts */}
        </div>

        {/* Fortschrittsbalken – ab Frage 1, nicht auf der Danke-Seite */}
        {!submitted && (
          <ProgressBar current={stepIndex + 1} total={TOTAL_STEPS} />
        )}
      </header>

      {/* Inhaltsbereich: füllt den Screen, Inhalt vertikal zentriert */}
      <main className="flex flex-1 items-center">
        <div className="w-full">
          <AnimatePresence mode="wait" custom={direction}>
            {submitted ? (
              <ThankYou key="thankyou" />
            ) : (
              <motion.div
                key={stepIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-full"
              >
                {isContactStep ? (
                  <ContactStep
                    answers={answers}
                    onSubmitted={() => setSubmitted(true)}
                  />
                ) : (
                  <QuizStep
                    step={quizSteps[stepIndex]}
                    selected={answers[quizSteps[stepIndex].key]}
                    onSelect={(value) =>
                      handleSelect(quizSteps[stepIndex].key, value)
                    }
                    // Hook nur auf dem ersten Schritt anzeigen
                    intro={stepIndex === 0}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
