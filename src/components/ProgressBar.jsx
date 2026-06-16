import { motion } from 'framer-motion'

// Fortschrittsbalken oben: zeigt "Schritt X von Y" und füllt sich animiert.
export default function ProgressBar({ current, total }) {
  const percent = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm font-medium text-gray-500">
        <span>
          Schritt {current} von {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={false}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}
