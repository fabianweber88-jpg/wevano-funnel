import LegalLayout from '../components/LegalLayout'

function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
      {children}
    </h2>
  )
}

// /datenschutz – DSGVO-Erklärung für den Lead-Funnel.
// Bewusst ohne Tracking, Meta-Pixel oder Werbe-Cookies.
export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p>
        Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
        Nachfolgend informieren wir Sie darüber, welche Daten wir auf dieser
        Website verarbeiten, zu welchem Zweck und auf welcher Rechtsgrundlage
        dies geschieht. Diese Website verwendet bewusst{' '}
        <span className="font-medium text-ink">
          kein Tracking, keine Werbe-Cookies und keine Analyse-Tools
        </span>{' '}
        (z. B. kein Meta-Pixel).
      </p>

      <div className="space-y-2">
        <SectionTitle>Verantwortlicher</SectionTitle>
        <p>
          Verantwortlich für die Datenverarbeitung im Sinne der
          Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <div className="space-y-1">
          <p className="font-medium text-ink">Fabian Weber</p>
          <p>Au 57, 4212 Neumarkt im Mühlkreis</p>
          <p>Telefon: 0664 / 8354078</p>
          <p>
            E-Mail:{' '}
            <a
              href="mailto:fabianweber88@gmail.com"
              className="text-accent underline underline-offset-2"
            >
              fabianweber88@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <SectionTitle>Kontakt- und Anfrageformular (Lead-Funnel)</SectionTitle>
        <p>
          Wenn Sie unser Anfrageformular ausfüllen, erheben wir die folgenden
          Daten:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer</li>
          <li>Unternehmensname</li>
          <li>
            die Angaben aus dem Fragebogen (Unternehmensart, Status der Website,
            Ziel der Website, gewünschter Umfang, Budgetrahmen, Zeitpunkt,
            Entscheidungsbefugnis)
          </li>
        </ul>
        <p>
          <span className="font-medium text-ink">Zweck:</span> Bearbeitung Ihrer
          Anfrage und Erstellung eines kostenlosen, unverbindlichen
          Website-Entwurfs sowie die Kontaktaufnahme mit Ihnen.
        </p>
        <p>
          <span className="font-medium text-ink">Rechtsgrundlage:</span> Art. 6
          Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) sowie
          Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) für die Kontaktaufnahme per
          E-Mail und Telefon.
        </p>
      </div>

      <div className="space-y-2">
        <SectionTitle>Hosting und Formularverarbeitung (Netlify)</SectionTitle>
        <p>
          Diese Website wird bei Netlify gehostet (Netlify Inc., 512 2nd Street,
          Suite 200, San Francisco, CA 94107, USA), und das Formular wird über
          Netlify Forms verarbeitet. Dabei werden die von Ihnen eingegebenen
          Daten an Server von Netlify übermittelt – auch in die USA.
        </p>
        <p>
          Netlify ist für uns als Auftragsverarbeiter tätig. Für die
          Datenübermittlung in die USA bestehen Garantien über das EU-US Data
          Privacy Framework. Weitere Informationen finden Sie in der{' '}
          <a
            href="https://www.netlify.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Datenschutzerklärung von Netlify
          </a>
          .
        </p>
      </div>

      <div className="space-y-2">
        <SectionTitle>Speicherdauer</SectionTitle>
        <p>
          Ihre Daten werden gelöscht, sobald sie für die genannten Zwecke nicht
          mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>
      </div>

      <div className="space-y-2">
        <SectionTitle>Ihre Rechte (Betroffenenrechte)</SectionTitle>
        <p>Ihnen stehen hinsichtlich Ihrer personenbezogenen Daten folgende Rechte zu:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Recht auf Auskunft</li>
          <li>Recht auf Berichtigung</li>
          <li>Recht auf Löschung</li>
          <li>Recht auf Einschränkung der Verarbeitung</li>
          <li>Recht auf Datenübertragbarkeit</li>
          <li>Recht auf Widerspruch</li>
          <li>
            Recht auf jederzeitigen Widerruf einer erteilten Einwilligung mit
            Wirkung für die Zukunft
          </li>
        </ul>
        <p>
          Darüber hinaus haben Sie das Recht, sich bei der österreichischen
          Datenschutzbehörde zu beschweren:
        </p>
        <div className="space-y-1">
          <p className="font-medium text-ink">Österreichische Datenschutzbehörde</p>
          <p>Barichgasse 40-42, 1030 Wien</p>
          <p>
            E-Mail:{' '}
            <a
              href="mailto:dsb@dsb.gv.at"
              className="text-accent underline underline-offset-2"
            >
              dsb@dsb.gv.at
            </a>
          </p>
          <p>
            Web:{' '}
            <a
              href="https://www.dsb.gv.at"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              www.dsb.gv.at
            </a>
          </p>
        </div>
      </div>
    </LegalLayout>
  )
}
