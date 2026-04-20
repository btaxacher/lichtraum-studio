import { LegalShell } from '@/components/pages/legal-shell'
import { impressumContent } from '@/content/legal-content'
import { buildMetadata } from '@/lib/metadata'

export const generateMetadata = () =>
  buildMetadata({
    title: 'Impressum | Lichtraum Fotostudio',
    description: 'Impressum des Lichtraum Fotostudios gemäß § 5 TMG.',
    path: '/impressum',
    noindex: false,
  })

export default function ImpressumPage() {
  return (
    <LegalShell
      title="Impressum"
      crumbName="Impressum"
      crumbPath="/impressum"
      lastUpdated={impressumContent.lastUpdated}
      blocks={impressumContent.blocks}
    />
  )
}
