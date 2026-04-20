import { LegalShell } from '@/components/pages/legal-shell'
import { datenschutzContent } from '@/content/legal-content'
import { buildMetadata } from '@/lib/metadata'

export const generateMetadata = () =>
  buildMetadata({
    title: 'Datenschutzerklärung | Lichtraum Fotostudio',
    description: 'Datenschutzerklärung des Lichtraum Fotostudios gemäß DSGVO.',
    path: '/datenschutz',
    noindex: false,
  })

export default function DatenschutzPage() {
  return (
    <LegalShell
      title="Datenschutzerklärung"
      crumbName="Datenschutz"
      crumbPath="/datenschutz"
      lastUpdated={datenschutzContent.lastUpdated}
      blocks={datenschutzContent.blocks}
    />
  )
}
