import LegalLayout from '../components/LegalLayout'

// Wiederkehrende Beschriftungs-/Wert-Zeile.
function Row({ label, value }) {
  return (
    <p>
      <span className="font-medium text-ink">{label}:</span> {value}
    </p>
  )
}

function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
      {children}
    </h2>
  )
}

// /impressum – Offenlegung gemäß ECG, MedienG, GewO, UGB.
export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <p className="text-gray-600">
        Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO
        und § 14 UGB
      </p>

      <div className="space-y-1.5">
        <Row label="Webseitenbetreiber" value="Fabian Weber" />
        <Row label="Anschrift" value="Au 57, 4212 Neumarkt im Mühlkreis" />
        <Row label="UID-Nr" value="—" />
        <Row
          label="Gewerbeaufsichtsbehörde"
          value="Bezirkshauptmannschaft Freistadt"
        />
        <Row
          label="Mitgliedschaften"
          value="Wirtschaftskammer Oberösterreich (WKO)"
        />
        <Row
          label="Berufsbezeichnung"
          value="Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik"
        />
      </div>

      <div className="space-y-1.5">
        <SectionTitle>Kontaktdaten</SectionTitle>
        <Row label="Telefon" value="0664 / 8354078" />
        <p>
          <span className="font-medium text-ink">Email:</span>{' '}
          <a
            href="mailto:fabianweber88@gmail.com"
            className="text-accent underline underline-offset-2"
          >
            fabianweber88@gmail.com
          </a>
        </p>
        <Row label="Fax" value="—" />
      </div>

      <p>
        <span className="font-medium text-ink">
          Anwendbare Rechtsvorschrift:
        </span>{' '}
        <a
          href="https://www.ris.bka.gv.at"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-2"
        >
          www.ris.bka.gv.at
        </a>
      </p>

      <div className="space-y-2">
        <SectionTitle>Online Streitbeilegung</SectionTitle>
        <p>
          Verbraucher, welche in Österreich oder in einem sonstigen
          Vertragsstaat der ODR-VO niedergelassen sind, haben die Möglichkeit
          Probleme bezüglich dem entgeltlichen Kauf von Waren oder
          Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS,
          AStG) zu lösen. Die Europäische Kommission stellt eine Plattform
          hierfür bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 break-words"
          >
            https://ec.europa.eu/consumers/odr
          </a>
        </p>
      </div>

      <div className="space-y-2">
        <SectionTitle>Urheberrecht</SectionTitle>
        <p>
          Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich
          ist, diversen Schutzrechten (z.B dem Urheberrecht). Jegliche
          Verwendung/Verbreitung von bereitgestelltem Material, welche
          urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des
          Webseitenbetreibers.
        </p>
      </div>

      <div className="space-y-2">
        <SectionTitle>Haftungsausschluss</SectionTitle>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der
          Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte
          externer Links. Für den Inhalt der verlinkten Seiten sind
          ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf
          ausgehende Links aufmerksam werden, welche auf eine Webseite mit
          rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um
          dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu
          entfernen. Die Urheberrechte Dritter werden vom Betreiber dieser
          Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen
          werden wir den betroffenen Inhalt umgehend entfernen.
        </p>
      </div>
    </LegalLayout>
  )
}
