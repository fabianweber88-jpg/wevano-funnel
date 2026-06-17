import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Funnel from './components/Funnel'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

// Wurzel-Komponente: Routing für Funnel + Rechtsseiten.
// Der SPA-Fallback in netlify.toml sorgt dafür, dass auch Direktaufrufe
// (z. B. /datenschutz) sauber laden.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Funnel />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </BrowserRouter>
  )
}
