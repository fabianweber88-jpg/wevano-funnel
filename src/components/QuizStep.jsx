// Ein einzelner Quiz-Schritt: große, tap-freundliche Antwort-Buttons.
// Ein Klick wählt die Antwort aus und springt automatisch zum nächsten Schritt.
// `intro` (optional) wird nur auf dem ersten Schritt über der Frage angezeigt
// (Hook-Text), danach fällt er weg.
export default function QuizStep({ step, selected, onSelect, intro }) {
  return (
    <div className="flex w-full flex-col">
      {/* Hook nur auf dem ersten Screen – dominante Haupt-Headline */}
      {intro && (
        <div className="mb-8">
          <h1 className="mb-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl md:text-6xl">
            Sehen Sie kostenlos, wie Ihre neue Website aussehen könnte.
          </h1>
          <p className="text-base text-gray-600 sm:text-lg">
            Beantworten Sie ein paar kurze Fragen – wir erstellen Ihnen
            unverbindlich eine erste Version.
          </p>
        </div>
      )}

      {/*
        Frage-Text. Auf dem ersten Screen kleiner (Zwischenüberschrift-Größe),
        damit die Hook die dominante Headline bleibt. Sonst groß.
      */}
      <h2
        className={[
          'font-display font-semibold leading-tight text-ink',
          intro
            ? 'mb-6 text-xl sm:mb-8 sm:text-2xl'
            : 'mb-8 text-3xl sm:mb-10 sm:text-4xl md:text-5xl',
        ].join(' ')}
      >
        {step.question}
      </h2>

      <div className="flex flex-col gap-3 sm:gap-4">
        {step.options.map((option) => {
          const isActive = selected === option
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={[
                'group flex w-full items-center justify-between rounded-2xl border-2 px-5 py-5 text-left text-lg font-medium transition-all duration-200 sm:px-6 sm:py-6 sm:text-xl',
                'active:scale-[0.99]',
                isActive
                  ? 'border-accent bg-accent-soft text-accent-hover'
                  : 'border-gray-200 bg-white text-ink hover:border-accent hover:bg-accent-soft',
              ].join(' ')}
            >
              <span>{option}</span>
              {/* Pfeil-Indikator rechts */}
              <span
                className={[
                  'ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors',
                  isActive
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-400 group-hover:bg-accent group-hover:text-white',
                ].join(' ')}
                aria-hidden="true"
              >
                →
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
