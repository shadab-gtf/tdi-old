import HeroMedia from '@/components/Hero'
import OverviewSection from '@/components/Residential/OverviewSection'
import BrochureSection from '@/components/Residential/BrochureSection'
import ResidentialExperience from '@/components/Residential/ResidentialExperience'
import Highlight from '@/components/Residential/Highlight'
import MasterPlanMap from '@/components/Residential/MasterPlanMap'
import LuxuryAmenities from '@/components/Residential/LuxuryAmenities'
import AirQuality from '@/components/Residential/AirQuality'
import SeamlessConnectivity from '@/components/Residential/SeamlessConnectivity'
import ProjectGallery from '@/components/Residential/ProjectGallery'
import { projectDetails } from '@/lib/projectsData'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: Promise<{
    category: string
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { category, slug } = await params

  const data = projectDetails[slug]

  if (!data) {
    notFound()
  }

  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen">
      <HeroMedia type="image" src="/assets/images/hero.png" />
      
      <OverviewSection 
        title={data.title}
        stats={data.overview.stats}
      />

      <BrochureSection
        imageSrc={data.overview.imageSrc}
        title={data.title}
        contentTitle={data.overview.contentTitle}
        contentDescription={data.overview.contentDescription}
        brochureText="Download Brochure"
        brochureLink="#"
      />

      {data.subProjects && data.subProjects.length > 0 && (
        <ResidentialExperience 
          sectionTitle={data.experiencesTitle || "Residential Experiences"}
          experiences={data.subProjects.map(sp => ({
            ...sp,
            link: `/projects/${category}/${slug}/${sp.slug}`,
            stats: sp.stats
          }))}
        />
      )}

      <Highlight 
        sectionTitle="Key Highlights"
        sectionDescription="At TDI City Kundli, residential comfort, commercial vitality, and lifestyle amenities come together within a carefully planned township, creating a balanced environment for everyday living."
        highlights={data.highlights}
      />

      {data.masterPlanImage && (
        <MasterPlanMap 
          imageSrc={data.masterPlanImage}
        />
      )}

      <LuxuryAmenities 
        amenities={data.amenities}
      />

      {category === 'residential' && (
        <AirQuality 
          cityAqi={400}
          projectAqi={150}
        />
      )}

      <SeamlessConnectivity 
        points={data.connectivityPoints}
      />

      {data.galleryImages.length > 0 && (
        <ProjectGallery 
          images={data.galleryImages}
        />
      )}

    </main>
  )
}
