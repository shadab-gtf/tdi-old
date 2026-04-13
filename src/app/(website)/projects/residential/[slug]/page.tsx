import HeroMedia from '@/components/Hero'
import OverviewSection from '@/components/Residential/OverviewSection'
import ResidentialExperience from '@/components/Residential/ResidentialExperience'
import Highlight from '@/components/Residential/Highlight'
import MasterPlanMap from '@/components/Residential/MasterPlanMap'
import LuxuryAmenities from '@/components/Residential/LuxuryAmenities'
import AirQuality from '@/components/Residential/AirQuality'
import SeamlessConnectivity from '@/components/Residential/SeamlessConnectivity'
import ProjectGallery from '@/components/Residential/ProjectGallery'
import BrochureSection from '@/components/Residential/BrochureSection'

interface ResidentialProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ResidentialProjectPage({ params }: ResidentialProjectPageProps) {
  const { slug } = await params

  // Dummy data representing Tuscan City
  const stats = [
    { imageSrc: '/microsite/icons/bed.png', text: '2 BHK & 3 BHK' },
    { imageSrc: '/microsite/icons/tower.png', text: '60 Towers' },
    { imageSrc: '/microsite/icons/map.png', text: 'Sonipat, Haryana' }
  ]

  const experiences = [
    {
      title: 'Tuscan Heights – Elevated Living, Refined Comfort',
      description: 'Tuscan Heights is the vertical embodiment of Tuscan City, designed to offer luxury, elegance, and comfort in a high-rise format. Standing tall as 5.14...',
      imageSrc: '/microsite/projects/tuscan-height.jpg', // Fallback to a real existing image if available, else placeholder.
      link: `/projects/residential/${slug}/tuscan-height`,
      stats: [
        { imageSrc: '/microsite/icons/bed.png', text: '2 BHK & 3 BHK' },
        { imageSrc: '/microsite/icons/tower.png', text: '14 Towers | 1467 Apartments' }
      ]
    },
    {
      title: 'Tuscan Floors – Where Elegance Meets Contemporary Living',
      description: 'Tuscan Floors offers an exclusive, low-rise living experience within Tuscan City, blending the timeless charm of Tuscan-inspired design with the modern...',
      imageSrc: '/microsite/projects/tuscan-floor.jpg',
      link: `/projects/residential/${slug}/tuscan-floor`,
      stats: [
        { imageSrc: '/microsite/icons/bed.png', text: '2 BHK Floors' },
        { imageSrc: '/microsite/icons/tower.png', text: '149 Towers | 745 Apartments' }
      ]
    }
  ]

  const highlights = [
    { imageSrc: '/microsite/icons/itelian.png', title: 'Italian-Inspired Architecture', description: 'Timeless Tuscan design with European elegance' },
    { imageSrc: '/microsite/icons/township.png', title: 'Integrated Township Living', description: 'Part of 200+ acre TDI City township' },
    { imageSrc: '/microsite/icons/residential.png', title: 'High-Rise & Low-Rise Residences', description: 'Tuscan Heights towers and Tuscan Floors' },
    { imageSrc: '/microsite/icons/homes.png', title: 'Spacious Modern Homes', description: 'Well-planned 2 & 3 BHK residences' },
    { imageSrc: '/microsite/icons/amenities.png', title: 'Premium Lifestyle Amenities', description: 'Club, pool, gym and recreation spaces' },
    { imageSrc: '/microsite/icons/ncr.png', title: 'Excellent NCR Connectivity', description: 'NH-44, Metro, RRTS and expressways nearby' },
  ]

  const amenities = [
    { title: 'Swimming Pool', imageSrc: '/assets/images/clubhouse/5.jpg' },
    { title: 'Gym', imageSrc: '/assets/images/clubhouse/2.jpg' },
    { title: 'Spa', imageSrc: '/assets/images/clubhouse/3.jpg' },
    { title: 'Conference & Banquet Halls', imageSrc: '/assets/images/clubhouse/testimage.webp' },
    { title: 'Outdoor Catering', imageSrc: '/assets/images/clubhouse/5.jpg' },
    { title: '24 Hours Concierge', imageSrc: '/assets/images/clubhouse/6.jpg' },
    { title: 'In-Room Dining', imageSrc: '/assets/images/clubhouse/7.jpg' },
    { title: 'Car Parking', imageSrc: '/assets/images/clubhouse/8.jpg' },
  ]

  const connectivityPoints = [
    {
      title: 'Kundli Metro Station',
      time: '5min',
      description: 'A short drive connects you to the metro network, enabling convenient and time-efficient travel across Delhi NCR.',
      imageSrc: '/assets/images/projects/metro.png'
    },
    {
      title: 'Rajiv Gandhi Education City',
      time: '3min',
      description: 'A short drive connects you to the metro network, enabling convenient and time-efficient travel across Delhi NCR.',
      imageSrc: '/assets/images/projects/highway.png'
    }
  ]

  const galleryImages = [
    '/assets/images/projects/gallery-1.png',
    '/assets/images/projects/gallery-2.png',
    '/assets/images/projects/gallery-3.png',
    '/assets/images/projects/gallery-4.png',
    '/assets/images/projects/gallery-5.png',
    '/assets/images/projects/gallery-6.png',
  ]

  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen">
      <HeroMedia type="image" src="/assets/images/hero.png" />

      <OverviewSection
        title="TDI TUSCAN CITY"
        stats={stats}
      />

      <BrochureSection
        imageSrc="/microsite/projects/tuscan-bro.jpg"
        title="TDI TUSCAN CITY"
        contentTitle="A True Italian Reflection"
        contentDescription="Tuscan City, nestled within TDI City Kundli, brings the timeless elegance of Tuscany to life within the framework of a modern integrated township. Its graceful European-inspired design, spacious apartments, and intimate community feel are ideal for those who seek the perfect balance of charm and comfort."
        brochureText="Download Brochure"
        brochureLink="#"
      />
      <ResidentialExperience
        sectionTitle="Designed Across 22 Acres, Tuscan City Offers Two Exceptional Residential Experiences"
        experiences={experiences}
      />

      <Highlight
        sectionTitle="Key Highlights"
        sectionDescription="At TDI City Kundli, residential comfort, commercial vitality, and lifestyle amenities come together within a carefully planned township, creating a balanced environment for everyday living."
        highlights={highlights}
      />

      <MasterPlanMap
        imageSrc="/microsite/projects/masterplan.png"
      />

      <LuxuryAmenities
        amenities={amenities}
      />

      <AirQuality
        cityAqi={400}
        projectAqi={150}
      />

      <SeamlessConnectivity
        points={connectivityPoints}
      />

      <ProjectGallery
        images={galleryImages}
      />

    </main>
  )
}
