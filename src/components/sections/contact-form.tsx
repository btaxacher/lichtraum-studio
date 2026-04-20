'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Check,
  ArrowRight,
  Loader2,
} from 'lucide-react'
import { contactContent } from '@/lib/content'

const editorialEase = [0.22, 1, 0.36, 1] as const

const iconMap = {
  Mail,
  Phone,
  MapPin,
  Instagram,
} as const

type ShootingType = (typeof contactContent.shootingTypes)[number]

interface FormState {
  name: string
  email: string
  phone: string
  shootingType: ShootingType | ''
  date: string
  location: string
  message: string
  gdpr: boolean
  botcheck: string // Honeypot
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  shootingType: '',
  date: '',
  location: '',
  message: '',
  gdpr: false,
  botcheck: '',
}

/**
 * ContactForm — echtes Formular mit 8 Feldern.
 * Backend: Resend via /api/contact (server-side).
 * Ziel-Email: kontakt@lichtraum-euskirchen.de.
 */
export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Honeypot — wenn befüllt → wahrscheinlich Bot, still ignorieren
    if (form.botcheck) return

    if (!form.gdpr) {
      setStatus('error')
      setErrorMsg('Bitte bestätige die Datenschutzhinweise.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          shootingType: form.shootingType,
          date: form.date,
          location: form.location,
          message: form.message,
        }),
      })

      const json = await res.json()
      if (json.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(json.error || 'Etwas ist schiefgelaufen. Bitte versuch es erneut.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Netzwerk-Fehler. Bitte versuch es erneut oder schreib uns direkt.')
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full bg-bg-charcoal text-fg-invert py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 lg:gap-20">
          {/* LEFT — Info (40%) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: editorialEase }}
            className="md:col-span-2"
          >
            <div className="eyebrow eyebrow-gold">{contactContent.kicker}</div>
            <p className="script-heading script-tilt-mild mt-4 text-3xl md:text-4xl lg:text-[3rem]">
              {contactContent.script}
            </p>
            <h2
              className="editorial-display text-fg-invert mt-3 md:mt-5"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 500, lineHeight: 1.15 }}
            >
              {contactContent.h2}
            </h2>
            <p className="mt-5 md:mt-7 text-[#E3D8C4]/80 leading-[1.7] text-base md:text-lg">
              {contactContent.body}
            </p>

            {/* Kontakt-Liste */}
            <ul className="mt-8 md:mt-10 space-y-4">
              {contactContent.contactList.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap]
                const href = 'href' in item ? item.href : undefined
                const content = (
                  <span className="inline-flex items-center gap-3 text-[#E3D8C4]/90 hover:text-accent-gold transition-colors duration-300">
                    <Icon size={16} className="text-accent-gold" strokeWidth={1.8} />
                    <span className="text-sm md:text-base">{item.label}</span>
                  </span>
                )
                return (
                  <li key={item.label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* RIGHT — Form (60%) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: editorialEase }}
            className="md:col-span-3"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: editorialEase }}
                  className="flex flex-col items-start gap-4 py-16 md:py-24"
                >
                  <div className="w-14 h-14 rounded-full bg-accent-gold flex items-center justify-center">
                    <Check size={24} className="text-bg-charcoal" strokeWidth={2.5} />
                  </div>
                  <h3
                    className="editorial-display text-fg-invert text-2xl md:text-3xl"
                    style={{ fontWeight: 500 }}
                  >
                    {contactContent.successMessage}
                  </h3>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                  noValidate
                >
                  {/* Honeypot — for bots, invisible */}
                  <input
                    type="text"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={form.botcheck}
                    onChange={(e) => setForm({ ...form, botcheck: e.target.value })}
                    className="sr-only"
                    style={{ position: 'absolute', left: '-9999px' }}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FieldText
                      id="name"
                      label="Name"
                      required
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                    />
                    <FieldText
                      id="email"
                      label="E-Mail"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FieldText
                      id="phone"
                      label="Telefon (optional)"
                      type="tel"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                    />
                    <FieldSelect
                      id="shootingType"
                      label="Art des Shootings"
                      required
                      value={form.shootingType}
                      options={contactContent.shootingTypes}
                      onChange={(v) => setForm({ ...form, shootingType: v as ShootingType })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FieldText
                      id="date"
                      label="Wunschtermin / Zeitraum"
                      value={form.date}
                      onChange={(v) => setForm({ ...form, date: v })}
                    />
                    <FieldText
                      id="location"
                      label="Ort des Shootings"
                      value={form.location}
                      onChange={(v) => setForm({ ...form, location: v })}
                    />
                  </div>

                  <FieldTextarea
                    id="message"
                    label="Erzähl uns mehr"
                    required
                    value={form.message}
                    onChange={(v) => setForm({ ...form, message: v })}
                  />

                  <label className="flex items-start gap-3 text-sm text-[#E3D8C4]/80 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.gdpr}
                      onChange={(e) => setForm({ ...form, gdpr: e.target.checked })}
                      className="mt-1 size-4 accent-accent-gold"
                      required
                    />
                    <span>
                      Ich habe die{' '}
                      <a
                        href="/datenschutz"
                        className="underline hover:text-accent-gold transition-colors"
                      >
                        Datenschutzerklärung
                      </a>{' '}
                      gelesen und stimme zu.
                    </span>
                  </label>

                  {status === 'error' && errorMsg && (
                    <p className="text-sm text-accent-terra" role="alert">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group inline-flex items-center justify-center gap-2 self-start bg-accent-gold text-bg-charcoal px-8 py-4 rounded-full font-medium text-base hover:bg-accent-terra hover:text-fg-invert transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Wird gesendet…
                      </>
                    ) : (
                      <>
                        Anfrage senden
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ================================================================
// Field sub-components — dunkle Section, gold underline
// ================================================================

function FieldText({
  id,
  label,
  value,
  onChange,
  required = false,
  type = 'text',
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  type?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs text-[#E3D8C4]/70 uppercase tracking-[0.15em]">
        {label} {required && <span className="text-accent-gold">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-b border-accent-gold/40 focus:border-accent-gold text-fg-invert py-3 placeholder:text-[#E3D8C4]/40 outline-none transition-colors"
      />
    </div>
  )
}

function FieldTextarea({
  id,
  label,
  value,
  onChange,
  required = false,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs text-[#E3D8C4]/70 uppercase tracking-[0.15em]">
        {label} {required && <span className="text-accent-gold">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        required={required}
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-b border-accent-gold/40 focus:border-accent-gold text-fg-invert py-3 placeholder:text-[#E3D8C4]/40 outline-none transition-colors resize-none"
      />
    </div>
  )
}

function FieldSelect({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  options: readonly string[]
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs text-[#E3D8C4]/70 uppercase tracking-[0.15em]">
        {label} {required && <span className="text-accent-gold">*</span>}
      </label>
      <select
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-b border-accent-gold/40 focus:border-accent-gold text-fg-invert py-3 outline-none transition-colors appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23C5A572'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.4a.75.75 0 01-1.08 0l-4.25-4.4a.75.75 0 01.02-1.06z'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.25rem center',
          backgroundSize: '1.25rem',
          paddingRight: '2rem',
        }}
      >
        <option value="" disabled className="bg-bg-charcoal text-fg-invert">
          Bitte auswählen
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-bg-charcoal text-fg-invert">
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
