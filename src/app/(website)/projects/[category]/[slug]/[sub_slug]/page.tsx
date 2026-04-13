import HeroMedia from '@/components/Hero'
import OverviewSection from '@/components/Residential/OverviewSection'
import BrochureSection from '@/components/Residential/BrochureSection'
import Highlight from '@/components/Residential/Highlight'
import Structured from '@/components/Residential/Structured'
import LuxuryAmenities from '@/components/Residential/LuxuryAmenities'
import SeamlessConnectivity from '@/components/Residential/SeamlessConnectivity'
import ProjectGallery from '@/components/Residential/ProjectGallery'
import { projectDetails } from '@/lib/projectsData'
import { notFound } from 'next/navigation'

interface SubProjectPageProps {
  params: Promise<{
    category: string
    slug: string
    sub_slug: string
  }>
}

export default async function SubProjectPage({ params }: SubProjectPageProps) {
  const { slug, sub_slug } = await params

  const projectData = projectDetails[slug]
  if (!projectData || !projectData.subProjects) {
    notFound()
  }

  const subProject = projectData.subProjects.find(sp => sp.slug === sub_slug)

  if (!subProject) {
    notFound()
  }

  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen">
      <HeroMedia type="image" src="/assets/images/hero.png" />
      
      <OverviewSection 
        title={subProject.title.toUpperCase()}
        stats={subProject.stats}
      />

      <BrochureSection
        imageSrc={subProject.imageSrc}
        title={subProject.title}
        contentTitle={subProject.title}
        contentDescription={subProject.description}
        brochureText="Download Brochure"
        brochureLink="#"
      />

      <Highlight 
        sectionTitle="Key Highlights"
        sectionDescription="At TDI City Kundli, residential comfort, commercial vitality, and lifestyle amenities come together within a carefully planned township, creating a balanced environment for everyday living."
        highlights={projectData.highlights}
      />

      <Structured 
        plans={subProject.plans}
      />

      <LuxuryAmenities 
        amenities={projectData.amenities}
      />

      <SeamlessConnectivity 
        points={projectData.connectivityPoints}
      />

      {projectData.galleryImages.length > 0 && (
        <ProjectGallery 
          images={projectData.galleryImages}
        />
      )}

    </main>
  )
}
