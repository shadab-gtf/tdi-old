import HeroMedia from '@/components/Hero'
import OverviewSection from '@/components/Residential/OverviewSection'
import BrochureSection from '@/components/Residential/BrochureSection'
import Highlight from '@/components/Residential/Highlight'
import Structured from '@/components/Residential/Structured'
import LuxuryAmenities from '@/components/Residential/LuxuryAmenities'
import SeamlessConnectivity from '@/components/Residential/SeamlessConnectivity'
import ProjectGallery from '@/components/Residential/ProjectGallery'

interface ResidentialSubProjectPageProps {
  params: Promise<{
    slug: string
    sub_slug: string
  }>
}

export default async function ResidentialSubProjectPage({ params }: ResidentialSubProjectPageProps) {
  const { sub_slug: subSlug } = await params

  const isHeights = subSlug.includes('height')
  const title = isHeights ? "TDI TUSCAN HEIGHTS" : "TDI TUSCAN FLOORS"

  const stats = isHeights ? [
    { imageSrc: '/microsite/icons/bed.png', text: '2 BHK & 3 BHK' },
    { imageSrc: '/microsite/icons/tower.png', text: '14 Towers | 1467 Apartments' },
    { imageSrc: '/microsite/icons/map.png', text: 'Sonipat, Haryana' }
  ] : [
    { imageSrc: '/microsite/icons/bed.png', text: '2 BHK & 3 BHK' },
    { imageSrc: '/microsite/icons/tower.png', text: '149 Towers | 745 Apartments' },
    { imageSrc: '/microsite/icons/map.png', text: 'Sonipat, Haryana' }
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
    { title: 'Swimming Pool', imageSrc: '/assets/images/projects/amenity-pool.png' },
    { title: 'Gym', imageSrc: '/assets/images/projects/amenity-gym.png' },
    { title: 'Spa', imageSrc: '/assets/images/projects/amenity-spa.png' },
    { title: 'Conference & Banquet Halls', imageSrc: '/assets/images/projects/amenity-banquet.png' },
    { title: 'Outdoor Catering', imageSrc: '/assets/images/projects/amenity-catering.png' },
    { title: '24 Hours Concierge', imageSrc: '/assets/images/projects/amenity-concierge.png' },
    { title: 'In-Room Dining', imageSrc: '/assets/images/projects/amenity-dining.png' },
    { title: 'Car Parking', imageSrc: '/assets/images/projects/amenity-parking.png' },
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

  const structuredPlans = isHeights ? [
    { id: '2bhk', name: '2 BHK Residences', carpetArea: '1085 Sq. Ft.', imageSrc: '/assets/images/projects/floorplan-1.png' },
    { id: '3bhk', name: '3 BHK + Servant', carpetArea: '1590 Sq. Ft.', imageSrc: '/assets/images/projects/floorplan-2.png' },
    { id: '4bhk', name: '4 BHK Duplex', carpetArea: '2280 Sq. Ft.', imageSrc: '/assets/images/projects/floorplan-3.png' }
  ] : [
    { id: 'gf', name: 'Ground Floor', carpetArea: '1459 Sq. Ft.', imageSrc: '/assets/images/projects/floorplan-1.png' },
    { id: 'ff', name: 'First Floor', carpetArea: '1459 Sq. Ft.', imageSrc: '/assets/images/projects/floorplan-2.png' },
    { id: 'sf', name: 'Second Floor', carpetArea: '1459 Sq. Ft.', imageSrc: '/assets/images/projects/floorplan-3.png' }
  ]

  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen">
      <HeroMedia type="image" src="/assets/images/hero.png" />
      
      <OverviewSection 
        title={title}
        stats={stats}
      />

      <BrochureSection
        imageSrc={isHeights ? "/assets/images/projects/tuscan-heights.png" : "/assets/images/projects/tuscan-floors.png"}
        title={title}
        contentTitle={isHeights ? "Elevated Living, Refined Comfort" : "Where Elegance Meets Contemporary Living"}
        contentDescription={
          isHeights 
          ? "Tuscan Heights is the vertical embodiment of Tuscan City, designed to offer luxury, elegance, and comfort in a high-rise format. Standing tall as 5.14, it offers panoramic views, abundant natural light, and a unique sense of space." 
          : "Tuscan Floors offers an exclusive, low-rise living experience within Tuscan City, blending the timeless charm of Tuscan-inspired design with all the modern amenities."
        }
        brochureText="Download Brochure"
        brochureLink="#"
      />

      <Highlight 
        sectionTitle="Key Highlights"
        sectionDescription="At TDI City Kundli, residential comfort, commercial vitality, and lifestyle amenities come together within a carefully planned township, creating a balanced environment for everyday living."
        highlights={highlights}
      />

      <Structured 
        plans={structuredPlans}
      />

      <LuxuryAmenities 
        amenities={amenities}
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
