import { motion } from 'motion/react'

const steps = [
  { title: 'Research', description: 'Map themes, setups, and context before any decision.' },
  { title: 'Plan', description: 'Define risk, size, and triggers with precision.' },
  { title: 'Execute', description: 'Enter calmly and follow the system without hesitation.' },
  { title: 'Manage', description: 'Adapt as conditions change while preserving discipline.' },
  { title: 'Review', description: 'Capture the lesson, reduce noise, and improve.' },
]

export default function Timeline() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Trading Process</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">Every decision follows a premium workflow.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-300">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
