import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = 'kontakt@lichtraum-euskirchen.de'
const FROM_EMAIL = 'Lichtraum Fotostudio <kontakt@lichtraum-euskirchen.de>'

interface ContactPayload {
  name: string
  email: string
  phone?: string
  shootingType?: string
  date?: string
  location?: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json()

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { success: false, error: 'E-Mail-Dienst nicht konfiguriert.' },
        { status: 500 },
      )
    }

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Name, E-Mail und Nachricht sind Pflichtfelder.' },
        { status: 400 },
      )
    }

    const htmlBody = `
      <h2>Neue Anfrage über lichtraum-euskirchen.de</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
        <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${escapeHtml(body.name)}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">E-Mail</td><td style="padding:6px 12px;"><a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></td></tr>
        ${body.phone ? `<tr><td style="padding:6px 12px;font-weight:bold;">Telefon</td><td style="padding:6px 12px;">${escapeHtml(body.phone)}</td></tr>` : ''}
        ${body.shootingType ? `<tr><td style="padding:6px 12px;font-weight:bold;">Art</td><td style="padding:6px 12px;">${escapeHtml(body.shootingType)}</td></tr>` : ''}
        ${body.date ? `<tr><td style="padding:6px 12px;font-weight:bold;">Wunschtermin</td><td style="padding:6px 12px;">${escapeHtml(body.date)}</td></tr>` : ''}
        ${body.location ? `<tr><td style="padding:6px 12px;font-weight:bold;">Ort</td><td style="padding:6px 12px;">${escapeHtml(body.location)}</td></tr>` : ''}
      </table>
      <h3>Nachricht</h3>
      <p style="white-space:pre-wrap;font-family:sans-serif;font-size:14px;">${escapeHtml(body.message)}</p>
    `

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: body.email,
      subject: `Neue Anfrage: ${body.shootingType || 'Kontakt'} — ${body.name}`,
      html: htmlBody,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, error: 'E-Mail konnte nicht gesendet werden.' },
        { status: 500 },
      )
    }

    // Bestätigungsmail an den Absender
    await resend.emails.send({
      from: FROM_EMAIL,
      to: body.email,
      subject: 'Ihre Anfrage bei Lichtraum Fotostudio',
      html: confirmationHtml(body.name, body.shootingType),
    }).catch((err) => {
      // Bestätigung ist nice-to-have — Hauptmail ging raus, also trotzdem success
      console.error('Confirmation email failed:', err)
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { success: false, error: 'Server-Fehler. Bitte versuchen Sie es später.' },
      { status: 500 },
    )
  }
}

function confirmationHtml(name: string, shootingType?: string): string {
  const greeting = name ? `Hallo ${escapeHtml(name)}` : 'Hallo'
  const type = shootingType ? ` zum Thema „${escapeHtml(shootingType)}"` : ''
  return `
    <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#2D2D2D;">
      <div style="padding:32px 0;border-bottom:1px solid #E8E0D4;">
        <span style="font-family:Georgia,serif;font-style:italic;font-size:28px;color:#3D4A3C;">L</span>
        <span style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#8A7D6B;margin-left:8px;">Lichtraum Fotostudio</span>
      </div>
      <div style="padding:32px 0;">
        <p style="font-size:16px;line-height:1.7;margin:0 0 16px;">${greeting},</p>
        <p style="font-size:16px;line-height:1.7;margin:0 0 16px;">
          vielen Dank für Ihre Anfrage${type}. Wir haben Ihre Nachricht erhalten und melden uns
          innerhalb von 24 Stunden (werktags) bei Ihnen zurück.
        </p>
        <p style="font-size:16px;line-height:1.7;margin:0 0 16px;">
          Falls Sie in der Zwischenzeit Fragen haben, antworten Sie einfach auf diese E-Mail.
        </p>
        <p style="font-size:16px;line-height:1.7;margin:0;">
          Herzliche Grüße<br/>
          <strong>Ihr Lichtraum-Team</strong>
        </p>
      </div>
      <div style="padding:24px 0;border-top:1px solid #E8E0D4;font-size:12px;color:#8A7D6B;">
        <p style="margin:0;">Lichtraum Fotostudio · Euskirchen & Köln</p>
        <p style="margin:4px 0 0;">
          <a href="https://lichtraum-euskirchen.de" style="color:#C5A572;text-decoration:none;">lichtraum-euskirchen.de</a>
          &nbsp;·&nbsp;
          <a href="https://instagram.com/lichtraum.studio" style="color:#C5A572;text-decoration:none;">Instagram</a>
        </p>
      </div>
    </div>
  `
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
