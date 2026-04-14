export const categories = [
  { label: "All", value: "all", hasDropdown: false },
  { label: "Residential", value: "residential", hasDropdown: true },
  { label: "Commercial", value: "commercial", hasDropdown: true },
  { label: "Educational", value: "educational", hasDropdown: true },
  { label: "Healthcare", value: "healthcare", hasDropdown: true },
] as const;

export type ProjectCategory = Exclude<
  (typeof categories)[number]["value"],
  "all"
>;

export interface HeroMediaData {
  type: "image" | "video";
  src: string;
  poster?: string;
}

export interface ProjectStat {
  imageSrc: string;
  text: string;
}

export interface ProjectPlan {
  id: string;
  name: string;
  carpetArea: string;
  imageSrc: string;
}

export interface ProjectHighlight {
  imageSrc: string;
  title: string;
  description: string;
}

export interface ProjectAmenity {
  title: string;
  imageSrc: string;
}

export interface ProjectConnectionPoint {
  title: string;
  time: string;
  description: string;
  imageSrc: string;
}

export interface ProjectCallToAction {
  text: string;
  link: string;
}

export type ProjectMasterPlanLayout = "structured" | "township";

export interface ProjectSubProject {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: ProjectStat[];
  detail: ProjectDetail;
  mapQuery?: string;
}

export interface ProjectDetail {
  hero: HeroMediaData;
  overviewImage: string;
  overviewTitle: string;
  overviewDescription: string;
  overviewStats: ProjectStat[];
  brochure?: ProjectCallToAction;
  experiencesTitle?: string;
  highlights: ProjectHighlight[];
  masterPlanTitle?: string;
  masterPlanDescription?: string;
  masterPlanLink?: string;
  masterPlanLinkText?: string;
  masterPlanLayout?: ProjectMasterPlanLayout;
  masterPlanImage: string;
  masterPlans: ProjectPlan[];
  amenitiesTitle?: string;
  amenitiesDescription?: string;
  amenities: ProjectAmenity[];
  connectivityTitle?: string;
  connectivityDescription?: string;
  connectivityPoints: ProjectConnectionPoint[];
  galleryTitle?: string;
  galleryDescription?: string;
  galleryImages: string[];
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  category: ProjectCategory;
  location: string;
  description: string;
  image: string;
  thumbnail: string;
  price: number;
  areaSqFt: number;
  apartmentType?: "2 BHK" | "3 BHK" | "4 BHK";
  buildingType?: "High-Rise" | "Low-Rise";
  status: "Ready to Move" | "Under Development";
  block: string;
  isNative: boolean;
  showInGrid: boolean;
  hasSubProjects: boolean;
  parentProjectSlug?: string;
  parentSubProjectSlug?: string;
  propertyType?: "Plot" | "Built up";
  commercialType?: string;
  institutionType?: string;
  educationLevel?: string;
  specialisation?: string;
  hasDetailPage?: boolean;
  detail: ProjectDetail;
  subProjects: ProjectSubProject[];
  mapQuery: string;
}

export interface FilterState {
  category: string;
  propertyType: "Plot" | "Built up";
  priceRange: [number, number];
  areaRange: [number, number];
  apartmentTypes: string[];
  buildingTypes: string[];
  statuses: string[];
  blocks: string[];
  commercialTypes: string[];
  institutionTypes: string[];
  educationLevels: string[];
  specialisations: string[];
}

export interface ProjectMenuCategory {
  title: string;
  value: ProjectCategory;
  href: string;
  items: ProjectMenuItem[];
}

export interface ProjectMenuItem {
  name: string;
  href: string;
  isNative: boolean;
  children: Array<{ name: string; href: string }>;
}

export const defaultFilters: FilterState = {
  category: "all",
  propertyType: "Built up",
  priceRange: [2, 8],
  areaRange: [1200, 25000],
  apartmentTypes: [],
  buildingTypes: [],
  statuses: [],
  blocks: [],
  commercialTypes: [],
  institutionTypes: [],
  educationLevels: [],
  specialisations: [],
};

export const apartmentOptions = ["2 BHK", "3 BHK", "4 BHK"];
export const buildingOptions = ["High-Rise", "Low-Rise"];
export const statusOptions = ["Ready to Move", "Under Development"];
export const blockOptions = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
];

export const commercialTypeOptions = [
  "Retail",
  "Office",
  "High Street",
  "SCO (Shop-Cum-Office)",
];
export const institutionTypeOptions = ["School", "College", "University"];
export const educationLevelOptions = [
  "Primary",
  "Secondary",
  "Senior Secondary",
];
export const specialisationOptions = [
  "General Healthcare",
  "Orthopaedics",
  "Maternity & Child Care",
  "Cardiac Care",
  "Diagnostics & Imaging",
];

export const projectCategoryValues = categories
  .filter((category) => category.value !== "all")
  .map((category) => category.value) as ProjectCategory[];

const brochureCta: ProjectCallToAction = {
  text: "Download Brochure",
  link: "#",
};

const tuscanCityAmenities: ProjectAmenity[] = [
  { title: "Swimming Pool", imageSrc: "/assets/images/clubhouse/5.jpg" },
  { title: "Fitness Center", imageSrc: "/assets/images/clubhouse/2.jpg" },
  { title: "Wellness Spa", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "Banquet Hall", imageSrc: "/assets/images/clubhouse/11.jpg" },
  { title: "Concierge", imageSrc: "/assets/images/clubhouse/13.jpg" },
  { title: "Fine Dining", imageSrc: "/assets/images/clubhouse/14.jpg" },
  { title: "Kids Play Area", imageSrc: "/assets/images/clubhouse/18.jpg" },
  { title: "Secure Parking", imageSrc: "/assets/images/clubhouse/17.jpg" },
];

const tuscanHeightsAmenities: ProjectAmenity[] = [
  { title: "Sky Lounge", imageSrc: "/assets/images/clubhouse/5.jpg" },
  { title: "Rooftop Gym", imageSrc: "/assets/images/clubhouse/2.jpg" },
  { title: "Yoga Deck", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "High-speed Elevators", imageSrc: "/assets/images/clubhouse/11.jpg" },
  { title: "24/7 Security", imageSrc: "/assets/images/clubhouse/13.jpg" },
  { title: "Indoor Games", imageSrc: "/assets/images/clubhouse/14.jpg" },
  { title: "Mini Theater", imageSrc: "/assets/images/clubhouse/18.jpg" },
  { title: "Automated Parking", imageSrc: "/assets/images/clubhouse/17.jpg" },
];

const tuscanFloorsAmenities: ProjectAmenity[] = [
  { title: "Private Garden", imageSrc: "/assets/images/clubhouse/5.jpg" },
  { title: "Community Park", imageSrc: "/assets/images/clubhouse/2.jpg" },
  { title: "Jogging Track", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "Badminton Court", imageSrc: "/assets/images/clubhouse/11.jpg" },
  { title: "Convenience Store", imageSrc: "/assets/images/clubhouse/13.jpg" },
  { title: "Power Backup", imageSrc: "/assets/images/clubhouse/14.jpg" },
  { title: "Water Harvesting", imageSrc: "/assets/images/clubhouse/18.jpg" },
  { title: "Open Parking", imageSrc: "/assets/images/clubhouse/17.jpg" },
];

const tdiSchoolAmenities: ProjectAmenity[] = [
  { title: "Smart Classrooms", imageSrc: "/assets/gallery/1.jpg" },
  { title: "Digital Library", imageSrc: "/assets/gallery/4.jpg" },
  { title: "Science & Tech Labs", imageSrc: "/assets/gallery/2.jpg" },
  { title: "Multipurpose Hall", imageSrc: "/assets/gallery/5.jpg" },
  { title: "Indoor Sports Room", imageSrc: "/assets/gallery/3.jpg" },
  { title: "Safe Play Area", imageSrc: "/assets/gallery/6.jpg" },
];

const espaniaAmenities: ProjectAmenity[] = [
  { title: "Clubhouse", imageSrc: "/assets/images/clubhouse/5.jpg" },
  { title: "Pool Side Café", imageSrc: "/assets/images/clubhouse/cafe.jpg" },
  { title: "Yoga Center", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "Kids Play Zone", imageSrc: "/assets/images/clubhouse/18.jpg" },
];

const espaniaFloorsAmenities: ProjectAmenity[] = [
  { title: "Luxury Spa", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "Private Cinema", imageSrc: "/assets/images/clubhouse/18.jpg" },
  { title: "Sky Lounge", imageSrc: "/assets/images/clubhouse/5.jpg" },
  { title: "Valet Parking", imageSrc: "/assets/images/clubhouse/17.jpg" },
];
const espaniaHeightsAmenities: ProjectAmenity[] = [
  { title: "Luxury Spa", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "Private Cinema", imageSrc: "/assets/images/clubhouse/18.jpg" },
  { title: "Sky Lounge", imageSrc: "/assets/images/clubhouse/5.jpg" },
  { title: "Valet Parking", imageSrc: "/assets/images/clubhouse/17.jpg" },
];
const espaniaRoyaleAmenities: ProjectAmenity[] = [
  { title: "Luxury Spa", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "Private Cinema", imageSrc: "/assets/images/clubhouse/18.jpg" },
  { title: "Sky Lounge", imageSrc: "/assets/images/clubhouse/5.jpg" },
  { title: "Valet Parking", imageSrc: "/assets/images/clubhouse/17.jpg" },
];
const espaniaRoyaleHeightsAmenities: ProjectAmenity[] = [
  { title: "Luxury Spa", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "Private Cinema", imageSrc: "/assets/images/clubhouse/18.jpg" },
  { title: "Sky Lounge", imageSrc: "/assets/images/clubhouse/5.jpg" },
  { title: "Valet Parking", imageSrc: "/assets/images/clubhouse/17.jpg" },
];
const espaniaRoyaleFloorsAmenities: ProjectAmenity[] = [
  { title: "Luxury Spa", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "Private Cinema", imageSrc: "/assets/images/clubhouse/18.jpg" },
  { title: "Sky Lounge", imageSrc: "/assets/images/clubhouse/5.jpg" },
  { title: "Valet Parking", imageSrc: "/assets/images/clubhouse/17.jpg" },
];


const kingsburyAmenities: ProjectAmenity[] = [
  { title: "Community Hall", imageSrc: "/assets/images/clubhouse/11.jpg" },
  { title: "Jogging Track", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "Retail Shop", imageSrc: "/assets/images/clubhouse/cafe.png" },
  { title: "Badminton Court", imageSrc: "/assets/images/clubhouse/2.jpg" },
];

const tdiMallAmenities: ProjectAmenity[] = [
  { title: "G+3 Structure", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "3-Screen Multiplex", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "Beautiful Landscaping", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "2-tier basement parking", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "Multiple CCTV Cameras", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "Advanced fire fighting system", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "100% power backup", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "11,410 sqft. food court", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "Surface Parking", imageSrc: "/assets/images/clubhouse/3.jpg" },
];

const rodeoMallAmenities: ProjectAmenity[] = [
  { title: "CAFES & RESTAURANTS", imageSrc: "/assets/images/clubhouse/cafe.jpg" },
  { title: "BOUTIQUES & FASHION STORES", imageSrc: "/assets/images/clubhouse/17.jpg" },
  { title: "DEPARTMENTAL STORES", imageSrc: "/assets/images/clubhouse/lounge.jpg" },
  { title: "BAKERIES", imageSrc: "/assets/images/clubhouse/banquethall.jpg" },
  { title: "ELECTRONICS", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "OPTICAL STORES", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "BANKS & ATMs", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "STUDIO & CORPORATE OFFICES", imageSrc: "/assets/images/clubhouse/3.jpg" },
  { title: "MULTINATIONAL FOOD CHAINS", imageSrc: "/assets/images/clubhouse/3.jpg" },
];

const samarpanHospitalAmenities: ProjectAmenity[] = [
  { title: "Specialist OPD", imageSrc: "/assets/gallery/4.jpg" },
  { title: "Advanced Diagnostics", imageSrc: "/assets/gallery/2.jpg" },
  { title: "24/7 Pharmacy", imageSrc: "/assets/gallery/6.jpg" },
  { title: "Patient Care Wing", imageSrc: "/assets/gallery/7.jpg" },
  { title: "Ambulance Bay", imageSrc: "/assets/gallery/1.jpg" },
  { title: "Waiting Lounge", imageSrc: "/assets/gallery/5.jpg" },
];

const espaniaConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];
const espaniaHeightsConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];
const espaniaFloorsConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];

const espaniaRoyaleConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];
const espaniaRoyaleHeightsConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];
const espaniaRoyaleFloorsConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];

const kingsburyConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];

const tdiMallConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];

const rodeoMallConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];

const tuscanCityConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];

const tuscanHeightConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];

const tuscanFloorsConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];

const tdiSchoolConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];

const samarpanHospitalConnectivity: ProjectConnectionPoint[] = [
  { title: "Rajiv Gandhi Education City", time: "3 min", description: "A short drive to premier educational institutions, ensuring easy access to world-class education.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Kundli Station (RRTS)", time: "5 min", description: "Quick access to the RRTS station, providing fast and seamless connectivity to Delhi and beyond.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "Kundli Metro Station", time: "5 min", description: "Just minutes away, ensuring effortless travel with direct access to the metro network.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "HSIIDC", time: "13 min", description: "Positioned near Haryana's industrial hub, offering strategic access to business and employment opportunities.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "O.P. Jindal Global University", time: "15 min", description: "Conveniently located near a globally recognized educational institution for academic excellence.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "New Delhi (Connaught Place)", time: "24 min", description: "A mere 24 minutes to Delhi’s vibrant center, connecting you to the best of the city’s commercial and cultural life.", imageSrc: "/microsite/projects/metro.jpg" },
  { title: "Maruti Suzuki Plant, Kharkoda", time: "25 min", description: "Strategically located near a major industrial landmark, promoting business growth and connectivity.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "IGI Airport", time: "35 min", description: "Close proximity to IGI Airport, ensuring easy access to global travel hubs.", imageSrc: "/microsite/projects/highway.jpg" },
  { title: "AIIMS", time: "35 min", description: "Fast access to AIIMS, one of India’s premier medical facilities, for world-class healthcare.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Safdarjung Tomb", time: "35 min", description: "A short distance from one of Delhi’s iconic heritage sites, offering a glimpse into India’s rich history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Lotus Temple", time: "40 min", description: "A peaceful and iconic architectural marvel, offering a serene space for reflection and spiritual connection.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Akshardham", time: "40 min", description: "A short drive to one of Delhi’s most magnificent cultural landmarks, celebrating India’s ancient heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "India Gate", time: "40 min", description: "Easily accessible to this historic monument, a symbol of India’s national pride and heritage.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Red Fort", time: "40 min", description: "Quick access to the majestic Red Fort, a UNESCO World Heritage Site and emblem of India’s history.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "National Museum", time: "40 min", description: "A short distance to India’s premier museum, housing the nation’s cultural and historical treasures.", imageSrc: "/microsite/projects/elegance.jpg" },
  { title: "Qutub Minar", time: "45 min", description: "Explore the architectural grandeur of the Qutub Minar, one of Delhi’s most iconic landmarks.", imageSrc: "/microsite/projects/elegance.jpg" },
];

const espaniaGallery = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
];
const espaniaFloorsGallery = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
];
const espaniaHeightsGallery = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
];

const espaniaRoyaleGallery = [
  "/assets/gallery/5.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/8.jpg",
];
const espaniaRoyaleFloorsGallery = [
  "/assets/gallery/5.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/8.jpg",
];
const espaniaRoyaleHeightsGallery = [
  "/assets/gallery/5.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/8.jpg",
];

const kingsburyGallery = [
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
];

const tdiMallGallery = [
  "/assets/gallery/6.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/8.jpg",
  "/assets/gallery/5.jpg",
];

const rodeoMallGallery = [
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
  "/assets/gallery/1.jpg",
];

const tuscanCityGallery = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
  "/assets/gallery/5.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/7.jpg",
];

const tuscanHeightsGallery = [
  "/assets/gallery/2.jpg",
  "/assets/gallery/4.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/1.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/5.jpg",
  "/assets/gallery/8.jpg",
];

const tuscanFloorsGallery = [
  "/assets/gallery/3.jpg",
  "/assets/gallery/5.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/4.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/1.jpg",
];

const tdiSchoolGallery = [
  "/assets/gallery/3.jpg",
  "/assets/gallery/5.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/4.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/1.jpg",
];

const samarpanHospitalGallery = [
  "/assets/gallery/4.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/8.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/5.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/2.jpg",
];

const tuscanCityHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/itelian.png",
    title: "Timeless Italian Architecture",
    description: "Charm of Tuscany architecture with European refinement.",
  },
  {
    imageSrc: "/microsite/icons/township.png",
    title: "Seamless Integrated Living",
    description: "Expansive 1100+ acre TDI City township.",
  },
  {
    imageSrc: "/microsite/icons/residential.png",
    title: "Spacious Signature Residences",
    description: "Well-designed 2,3 & 3 BHK + Study residences.",
  },
  {
    imageSrc: "/microsite/icons/homes.png",
    title: "Curated Lifestyle Amenities",
    description: "A premium clubhouse, rejuvenating pool, state-of-the-art gym, and recreational spaces.",
  },
  {
    imageSrc: "/microsite/icons/amenities.png",
    title: "Elevated & Independent Residences",
    description: "Tuscan Heights and Tuscan Floors.",
  },
  {
    imageSrc: "/microsite/icons/ncr.png",
    title: "Unrivaled NCR Connectivity",
    description: "Seamless access to NH-44, Metro, RRTS, and expressways.",
  },
];

const tuscanHeightsHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/lands.svg",
    title: "23",
    description: "Total Land Area (in acres)",
  },
  {
    imageSrc: "/microsite/icons/floors.svg",
    title: "S+14",
    description: "Number of Floors",
  },
  {
    imageSrc: "/microsite/icons/tower.png",
    title: "14",
    description: "Number of Towers/Buildings",
  },
  {
    imageSrc: "/microsite/icons/building.svg",
    title: "1447",
    description: "Total Number of Apartments",
  },
  {
    imageSrc: "/microsite/icons/parking.svg",
    title: "2175",
    description: "Total Parking Spaces",
  },
];
const tuscanFloorsHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/lands.svg",
    title: "23",
    description: "Total Land Area (in acres)",
  },
  {
    imageSrc: "/microsite/icons/floors.svg",
    title: "G+5",
    description: "Number of Floors",
  },
  {
    imageSrc: "/microsite/icons/tower.png",
    title: "149",
    description: "Number of Towers/Buildings",
  },
  {
    imageSrc: "/microsite/icons/building.svg",
    title: "745",
    description: "Total Number of Apartments",
  },
  {
    imageSrc: "/microsite/icons/parking.svg",
    title: "2175",
    description: "Total Parking Spaces",
  },
];
const espaniaHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/itelian.png",
    title: "Spanish-Inspired Elegance",
    description: "Blend of Spanish charm and contemporary design.",
  },
  {
    imageSrc: "/microsite/icons/township.png",
    title: "Seamless Integrated Living",
    description: "Expansive 1100+ acre TDI City township.",
  },
  {
    imageSrc: "/microsite/icons/residential.png",
    title: "Spacious Signature Residences",
    description: "Well-designed 2&3 BHK, 2&3 BHK Duplex residences.",
  },
  {
    imageSrc: "/microsite/icons/homes.png",
    title: "Curated Lifestyle Amenities",
    description: "A premium clubhouse, rejuvenating pool, state-of-the-art gym, and recreational spaces.",
  },
  {
    imageSrc: "/microsite/icons/amenities.png",
    title: "Elevated & Independent Residences",
    description: "Espania Heights and Espania Floors.",
  },
  {
    imageSrc: "/microsite/icons/ncr.png",
    title: "Unrivaled NCR Connectivity",
    description: "Seamless access to NH-44, Metro, RRTS, and expressways.",
  },
];
const espaniaHeightsHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/lands.svg",
    title: "12.64",
    description: "Total Land Area (in acres)",
  },
  {
    imageSrc: "/microsite/icons/floors.svg",
    title: "S+14",
    description: "Number of Floors",
  },
  {
    imageSrc: "/microsite/icons/tower.png",
    title: "9",
    description: "Number of Towers/Buildings",
  },
  {
    imageSrc: "/microsite/icons/building.svg",
    title: "480",
    description: "Total Number of Apartments",
  },
  {
    imageSrc: "/microsite/icons/parking.svg",
    title: "895",
    description: "Total Parking Spaces",
  },
];
const espaniaFloorsHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/lands.svg",
    title: "12.64",
    description: "Total Land Area (in acres)",
  },
  {
    imageSrc: "/microsite/icons/floors.svg",
    title: "G+5",
    description: "Number of Floors",
  },
  {
    imageSrc: "/microsite/icons/tower.png",
    title: "41",
    description: "Number of Towers/Buildings",
  },
  {
    imageSrc: "/microsite/icons/building.svg",
    title: "410",
    description: "Total Number of Apartments",
  },
  {
    imageSrc: "/microsite/icons/parking.svg",
    title: "895",
    description: "Total Parking Spaces",
  },
];

const espaniaRoyaleHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/itelian.png",
    title: "Spanish-Inspired Elegance",
    description: "Blend of Spanish charm and contemporary design.",
  },
  {
    imageSrc: "/microsite/icons/township.png",
    title: "Seamless Integrated Living",
    description: "Expansive 1100+ acre TDI City township.",
  },
  {
    imageSrc: "/microsite/icons/residential.png",
    title: "Spacious Signature Residences",
    description: "Well-designed 2&3 BHK, 3 BHK Duplex residences.",
  },
  {
    imageSrc: "/microsite/icons/homes.png",
    title: "Curated Lifestyle Amenities",
    description: "A premium clubhouse, rejuvenating pool, state-of-the-art gym, and recreational spaces.",
  },
  {
    imageSrc: "/microsite/icons/amenities.png",
    title: "Elevated & Independent Residences",
    description: "Espania Royale Heights and Espania Royale Floors.",
  },
  {
    imageSrc: "/microsite/icons/ncr.png",
    title: "Unrivaled NCR Connectivity",
    description: "Seamless access to NH-44, Metro, RRTS, and expressways.",
  },
];
const espaniaRoyaleHeightsHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/lands.svg",
    title: "10.83",
    description: "Total Land Area (in acres)",
  },
  {
    imageSrc: "/microsite/icons/floors.svg",
    title: "G+12",
    description: "Number of Floors",
  },
  {
    imageSrc: "/microsite/icons/tower.png",
    title: "37",
    description: "Number of Towers/Buildings",
  },
  {
    imageSrc: "/microsite/icons/building.svg",
    title: "467",
    description: "Total Number of Apartments",
  },
  {
    imageSrc: "/microsite/icons/parking.svg",
    title: "1068",
    description: "Total Parking Spaces",
  },

];
const espaniaRoyaleFloorsHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/lands.svg",
    title: "10.83",
    description: "Total Land Area (in acres)",
  },
  {
    imageSrc: "/microsite/icons/floors.svg",
    title: "G+5",
    description: "Number of Floors",
  },
  {
    imageSrc: "/microsite/icons/tower.png",
    title: "6",
    description: "Number of Towers/Buildings",
  },
  {
    imageSrc: "/microsite/icons/building.svg",
    title: "298",
    description: "Total Number of Apartments",
  },
  {
    imageSrc: "/microsite/icons/parking.svg",
    title: "1068",
    description: "Total Parking Spaces",
  },
];

const kingsburyHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/lands.svg",
    title: "44 Acres",
    description: "Total Land Area ",
  },
  {
    imageSrc: "/microsite/icons/floors.svg",
    title: "S+10 & S+II ",
    description: "Number of Floors",
  },
  {
    imageSrc: "/microsite/icons/tower.png",
    title: "20",
    description: "Towers/Buildings",
  },
  {
    imageSrc: "/microsite/icons/building.svg",
    title: "3065",
    description: "Total Number of Apartments",
  },
  {
    imageSrc: "/microsite/icons/parking.svg",
    title: "3329",
    description: "Parking Spaces",
  },
];

const tdiMallHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/lands.svg",
    title: "6.36 Acres",
    description: "Acres of Prestige",
  },
  {
    imageSrc: "/microsite/icons/building.svg",
    title: "400+",
    description: "Upscale Retail Units",
  },
  {
    imageSrc: "/microsite/icons/floors.svg",
    title: "4 Floors",
    description: "Floors of Elegance",
  },
  {
    imageSrc: "/microsite/icons/parking.svg",
    title: "2 Level",
    description: "Basement Parking",
  },
  {
    imageSrc: "/microsite/icons/amenities.png",
    title: "Cinema",
    description: "State-of-the-Art Cinema",
  },
  {
    imageSrc: "/microsite/icons/amenities.png",
    title: "Dining",
    description: "Curated Dining & Lifestyle Brands",
  },
];

const rodeoMallHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/floors.svg",
    title: "G+3",
    description: "Structure of Excellence",
  },
  {
    imageSrc: "/microsite/icons/lands.svg",
    title: "6.58 Acres",
    description: "Acres of Luxury",
  },
  {
    imageSrc: "/microsite/icons/building.svg",
    title: "750",
    description: "Curated Retail Spaces",
  },
  {
    imageSrc: "/microsite/icons/floors.svg",
    title: "4 Floors",
    description: "Floors of Elegance",
  },
  {
    imageSrc: "/microsite/icons/parking.svg",
    title: "2 Level",
    description: "Basement Parking",
  },
  {
    imageSrc: "/microsite/icons/amenities.png",
    title: "Cinema",
    description: "Cutting-Edge Cinema",
  },
  {
    imageSrc: "/microsite/icons/amenities.png",
    title: "Dining",
    description: "Gourmet Dining & Lifestyle Brands",
  },
];

const tdiSchoolHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/township.png",
    title: "TDI International School highlight 1",
    description: "Project-specific highlight copy will be added here.",
  },
  {
    imageSrc: "/microsite/icons/amenities.png",
    title: "TDI International School highlight 2",
    description: "Another key advantage tailored for this project.",
  },
  {
    imageSrc: "/microsite/icons/map.png",
    title: "TDI International School highlight 3",
    description: "Connectivity or lifestyle note coming from API/content team.",
  },
];

const samarpanHospitalHighlights: ProjectHighlight[] = [
  {
    imageSrc: "/microsite/icons/township.png",
    title: "Samarpan Cancer Hospital highlight 1",
    description: "Project-specific highlight copy will be added here.",
  },
  {
    imageSrc: "/microsite/icons/amenities.png",
    title: "Samarpan Cancer Hospital highlight 2",
    description: "Another key advantage tailored for this project.",
  },
  {
    imageSrc: "/microsite/icons/map.png",
    title: "Samarpan Hospital highlight 3",
    description: "Connectivity or lifestyle note coming from API/content team.",
  },
];

// Master plan data (Structured component)
const tuscanCityPlans: ProjectPlan[] = [
  { id: "tuscan-2bhk", name: "2 BHK Residences", carpetArea: "1,480-1,620 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "tuscan-3bhk", name: "3 BHK Residences", carpetArea: "1,760-1,980 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "tuscan-tower", name: "Tower Footprint", carpetArea: "Podium + 14 Floors", imageSrc: "/microsite/projects/masterplan.png" },
];

const tuscanHeightsPlans: ProjectPlan[] = [
  { id: "heights-2bhk", name: "2 BHK Sky Residences", carpetArea: "1,450 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "heights-3bhk", name: "3 BHK + Servant", carpetArea: "1,780 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "heights-duplex", name: "3 BHK Duplex", carpetArea: "2,150 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
];

const tuscanFloorsPlans: ProjectPlan[] = [
  { id: "floors-3bhk", name: "3 BHK Premium", carpetArea: "1,520 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "floors-duplex", name: "3 BHK Duplex", carpetArea: "1,980 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "floors-terrace", name: "Terrace Homes", carpetArea: "2,150 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
];

const espaniaPlans: ProjectPlan[] = [
  { id: "espania-2bhk", name: "2 BHK Residences", carpetArea: "1,360 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "espania-3bhk", name: "3 BHK Residences", carpetArea: "1,680 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "espania-promenade", name: "Central Promenade", carpetArea: "Landscape Spine", imageSrc: "/microsite/projects/masterplan.png" },
];

const espaniaHeightsPlans: ProjectPlan[] = [
  { id: "heights-tower", name: "Typical Tower Plan", carpetArea: "S + 14 Configuration", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "heights-2bhk", name: "2 BHK Plan", carpetArea: "1,420 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "heights-3bhk", name: "3 BHK Plan", carpetArea: "1,720 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
];

const espaniaFloorsPlans: ProjectPlan[] = [
  { id: "floors-lower", name: "Lower Ground Homes", carpetArea: "1,480 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "floors-upper", name: "Upper Floor Homes", carpetArea: "1,620 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "floors-duplex", name: "Duplex with Terrace", carpetArea: "1,950 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
];

const espaniaRoyalePlans: ProjectPlan[] = [
  { id: "royale-3bhk", name: "3 BHK Royale", carpetArea: "2,180 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "royale-4bhk", name: "4 BHK Royale", carpetArea: "2,450 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "royale-club", name: "Club & Piazza", carpetArea: "Community Zone", imageSrc: "/microsite/projects/masterplan.png" },
];

const espaniaRoyaleHeightsPlans: ProjectPlan[] = [
  { id: "royale-heights-2bhk", name: "2 BHK Heights", carpetArea: "1,520 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "royale-heights-3bhk", name: "3 BHK Heights", carpetArea: "1,880 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "royale-heights-core", name: "Core Layout", carpetArea: "4 Apartments / Core", imageSrc: "/microsite/projects/masterplan.png" },
];

const espaniaRoyaleFloorsPlans: ProjectPlan[] = [
  { id: "royale-floors-3bhk", name: "3 BHK Premium", carpetArea: "2,050 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "royale-floors-duplex", name: "3 BHK Duplex", carpetArea: "2,260 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "royale-floors-villa", name: "Villa Floors", carpetArea: "2,480 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
];

const kingsburyPlans: ProjectPlan[] = [
  { id: "kingsbury-4bhk", name: "4 BHK Layout", carpetArea: "2,150 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "kingsbury-4bhk-servant", name: "4+1 BHK Plan", carpetArea: "2,320 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "kingsbury-cluster", name: "Cluster Plan", carpetArea: "4 Homes / Floor", imageSrc: "/microsite/projects/masterplan.png" },
];

const tdiMallPlans: ProjectPlan[] = [
  { id: "mall-lower", name: "Lower Ground Retail", carpetArea: "35,000 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "mall-ground", name: "Ground Retail Boulevard", carpetArea: "48,500 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "mall-entertainment", name: "Multiplex & Food Court", carpetArea: "42,000 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
];

const rodeoMallPlans: ProjectPlan[] = [
  { id: "rodeo-highstreet", name: "High Street Loop", carpetArea: "Retail Spine", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "rodeo-level1", name: "Level 1 Retail", carpetArea: "52,000 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "rodeo-level2", name: "Level 2 Dining", carpetArea: "33,000 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
];

const tdiSchoolPlans: ProjectPlan[] = [
  { id: "school-academic", name: "Academic Block", carpetArea: "42,000 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "school-sports", name: "Sports & Playfields", carpetArea: "2.5 Acres", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "school-dropoff", name: "Secure Drop-off Loop", carpetArea: "One-way Circulation", imageSrc: "/microsite/projects/masterplan.png" },
];

const samarpanHospitalPlans: ProjectPlan[] = [
  { id: "hospital-opd", name: "OPD & Day Care", carpetArea: "38,000 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "hospital-diagnostics", name: "Diagnostics Level", carpetArea: "27,000 sq.ft.", imageSrc: "/microsite/projects/masterplan.png" },
  { id: "hospital-inpatient", name: "In-Patient Tower", carpetArea: "G + 7 Care Floors", imageSrc: "/microsite/projects/masterplan.png" },
];


export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Tuscan City",
    slug: "tuscan-city",
    category: "residential",
    location: "Kundli, Sonipat, Haryana",
    description:
      "At TDI Tuscan City, luxury living meets modern design, creating an ideal community that balances comfort, convenience, and sustainability. ",
    image: "/microsite/hero/tuscan-city.jpg",
    thumbnail: "/microsite/hero/tuscan-city.jpg",
    price: 3.8,
    areaSqFt: 1850,
    apartmentType: "3 BHK",
    buildingType: "High-Rise",
    status: "Ready to Move",
    block: "A",
    isNative: true,
    showInGrid: false,
    hasSubProjects: true,
    propertyType: "Built up",
    detail: {
      hero: { type: "image", src: "/microsite/hero/tuscan-city.jpg" },
      overviewImage: "/microsite/projects/tuscan-bro.jpg",
      overviewTitle: "A True Italian Reflection",
      overviewDescription:
        "TDI Tuscan City, nestled within the prestigious TDI City Kundli, brings the allure of Tuscany to life. Designed with European elegance, this township offers expansive green spaces and an intimate, community-focused environment, perfectly balancing charm, luxury, and comfort.",
      overviewStats: [
        { imageSrc: "/microsite/icons/bed.png", text: "2 BHK, 2 BHK Duplex, 3 BHK, 3 BHK + Servant, 3 BHK Duplex, 3 BHK Duplex + Servant" },
        { imageSrc: "/microsite/icons/tower.png", text: "163 Floors" },
        { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
      ],
      brochure: brochureCta,
      experiencesTitle:
        "Explore the two signature living formats within Tuscan City",
      highlights: tuscanCityHighlights,
      masterPlanTitle: "Tuscan City Township Layout",
      masterPlanDescription:
        "Navigate the 1100+ acre township plan that links residences, retail, healthcare, and education through a connected street and park network.",
      masterPlanLink: "#",
      masterPlanLinkText: "View Tuscan City Master Plan",
      masterPlanLayout: "township",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: tuscanCityPlans,
      amenitiesTitle: "Resort-Style Amenities for a Modern Community",
      amenitiesDescription: "TDI Tuscan City offers a curated selection of amenities designed to provide a resort-style living experience, fostering wellness, leisure, and a strong sense of community.",
      amenities: tuscanCityAmenities,
      connectivityTitle: "Unrivaled Connectivity, Effortless Access",
      connectivityDescription: "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Tuscan City offers seamless access to Delhi.",
      connectivityPoints: tuscanCityConnectivity,
      galleryTitle: "A Journey Through Refined Luxury",
      galleryDescription: "Step into our gallery and immerse yourself in the seamless fusion of elegance, artistry, and luxurious living that defines TDI.",
      galleryImages: tuscanCityGallery,
    },
    mapQuery: "28.887008172478808,77.11832477567218",
    subProjects: [
      {
        slug: "heights",
        title: "Tuscan Heights",
        subtitle: "Elevated Living",
        description:
          "Tuscan Heights is the vertical embodiment of Tuscan City, designed to offer luxury, elegance, and comfort in a high-rise format.",
        image: "/microsite/hero/tuscan-height.png",
        stats: [
          { imageSrc: "/microsite/icons/bed.png", text: "2 BHK, 2 BHK Duplex, 3 BHK, 3 BHK + Servant, 3 BHK Duplex, 3 BHK Duplex + Servant" },
          { imageSrc: "/microsite/icons/tower.png", text: "14 Towers" },
          { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
        ],
        detail: {
          hero: { type: "image", src: "/microsite/hero/tuscan-height.png" },
          overviewImage: "/microsite/projects/height-map.png",
          overviewTitle: "Where Luxury Meets Serenity",
          overviewDescription:
            "Tuscan Heights offers sophisticated high-rise living within Tuscan City, featuring 2 BHK, 2 BHK Duplex, 3 BHK, 3 BHK + Servant, 3 BHK Duplex, 3 BHK Duplex + Servant residences. Designed for abundant natural light and optimal ventilation, each home boasts spacious balconies that merge indoor and outdoor living seamlessly.",
          overviewStats: [
            { imageSrc: "/microsite/icons/bed.png", text: "2 BHK, 2 BHK Duplex, 3 BHK, 3 BHK + Servant, 3 BHK Duplex, 3 BHK Duplex + Servant" },
            { imageSrc: "/microsite/icons/tower.png", text: "14 Towers" },
            { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
          ],
          brochure: brochureCta,
          experiencesTitle: "Explore high-rise comfort within TDI City Kundli",
          highlights: tuscanHeightsHighlights,
          masterPlanTitle: "Spacious Designs for Refined Living",
          masterPlanDescription:
            "Each floor plan at Tuscan Heights is designed to maximize space, light, and functionality. These layouts cater to modern family living, providing both comfort and style.",
          masterPlanLink: "#",
          masterPlanLinkText: "Preview Tuscan Heights Master Plan",
          masterPlanImage: "/microsite/projects/masterplan.png",
          masterPlans: tuscanHeightsPlans,
          amenitiesTitle: "A Curated Experience of Luxury",
          amenitiesDescription: "Every element is designed to enhance well-being and offer convenience, creating a perfect balance between relaxation and activity.",
          amenities: tuscanHeightsAmenities,
          connectivityTitle: "Unrivaled Connectivity, Effortless Access",
          connectivityDescription:
            "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Tuscan Heights offers seamless access to Delhi.",
          connectivityPoints: tuscanHeightConnectivity,
          galleryTitle: "Where Elegance Meets Vision",
          galleryDescription:
            "Explore the visual beauty of Tuscan Heights through our gallery, showcasing a seamless blend of luxurious living, sophisticated design, and tranquil elegance.",
          galleryImages: tuscanHeightsGallery,
        },
        mapQuery: "28.887008172478808,77.11832477567218",
      },
      {
        slug: "floors",
        title: "Tuscan Floors",
        subtitle: "Contemporary Living",
        description:
          "Tuscan Floors offers an exclusive low-rise living experience within Tuscan City, blending timeless charm with modern privacy and comfort.",
        image: "/microsite/hero/tuscan-floor.png",
        stats: [
          { imageSrc: "/microsite/icons/bed.png", text: "3 BHK, 3 BHK Duplex" },
          { imageSrc: "/microsite/icons/tower.png", text: "149 Towers" },
          { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
        ],
        detail: {
          hero: { type: "image", src: "/microsite/hero/tuscan-floor.png" },
          overviewImage: "/microsite/projects/masterplan.png",
          overviewTitle: "Where Exclusivity Meets Serenity",
          overviewDescription:
            "Tuscan Floors offers a refined living experience with low-rise G+5 residences, featuring 3 BHK, 3 BHK Duplex, and duplex homes with private terraces. Designed for modern family living, these homes provide the charm of independent living, seamlessly integrated with the conveniences of Tuscan City.",
          overviewStats: [
            { imageSrc: "/microsite/icons/bed.png", text: "3 BHK, 3 BHK Duplex" },
            { imageSrc: "/microsite/icons/tower.png", text: "149 Towers" },
            { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
          ],
          brochure: brochureCta,
          experiencesTitle: "Discover intimate, low-rise living",
          highlights: tuscanFloorsHighlights,
          masterPlanTitle: "Thoughtfully Designed Living Spaces",
          masterPlanDescription:
            "Tuscan Floors offers meticulously designed floor plans that seamlessly integrate luxury, functionality, and comfort. Each residence is carefully crafted to balance spaciousness with thoughtful layouts.",
          masterPlanLink: "#",
          masterPlanLinkText: "Open Tuscan Floor Plan",
          masterPlanImage: "/microsite/projects/masterplan.png",
          masterPlans: tuscanFloorsPlans,
          amenitiesTitle: "Where Luxury Meets Wellness",
          amenitiesDescription: "Every amenity at Tuscan Floors is crafted to elevate your lifestyle, from the serene swimming pool and modern fitness center to beautifully landscaped gardens.",
          amenities: tuscanFloorsAmenities,
          connectivityTitle: "Unrivaled Connectivity, Effortless Access",
          connectivityDescription:
            "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Tuscan Floors offers seamless access to Delhi.",
          connectivityPoints: tuscanFloorsConnectivity,
          galleryTitle: "A Vision of Elegance",
          galleryDescription:
            "Explore the Tuscan Floors gallery, where each image reveals the perfect blend of Italian-inspired architecture and luxurious living.",
          galleryImages: tuscanFloorsGallery,
        },
        mapQuery: "28.887008172478808,77.11832477567218",
      },
    ],
  },
  {
    id: 101,
    title: "Tuscan Heights",
    slug: "tdi-tuscan-heights",
    category: "residential",
    location: "Kundli, Sonipat, Haryana",
    description:
      "The thoughtful design ensures a balanced lifestyle with modern comforts and ample green spaces, making it the ideal community for contemporary living.",
    image: "/microsite/hero/tuscan-height.png",
    thumbnail: "/microsite/hero/tuscan-height.png",
    price: 4.2,
    areaSqFt: 1654,
    apartmentType: "3 BHK",
    buildingType: "High-Rise",
    status: "Ready to Move",
    block: "A",
    isNative: false,
    showInGrid: true,
    hasSubProjects: false,
    parentProjectSlug: "tuscan-city",
    parentSubProjectSlug: "heights",
    propertyType: "Built up",
    detail: {
      hero: { type: "image", src: "/microsite/hero/tuscan-height.png" },
      overviewImage: "/microsite/projects/height-map.png",
      overviewTitle: "Where Luxury Meets Serenity",
      overviewDescription:
        "Tuscan Heights offers sophisticated high-rise living within Tuscan City, featuring 2 BHK, 2 BHK Duplex, 3 BHK, 3 BHK + Servant, 3 BHK Duplex, 3 BHK Duplex + Servant residences. Designed for abundant natural light and optimal ventilation, each home boasts spacious balconies that merge indoor and outdoor living seamlessly.",
      overviewStats: [
        { imageSrc: "/microsite/icons/bed.png", text: "2 BHK, 2 BHK Duplex, 3 BHK, 3 BHK + Servant, 3 BHK Duplex, 3 BHK Duplex + Servant" },
        { imageSrc: "/microsite/icons/tower.png", text: "14 Towers" },
        { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
      ],

      brochure: brochureCta,
      experiencesTitle: "Explore high-rise comfort within TDI City Kundli",
      highlights: tuscanHeightsHighlights,
      masterPlanTitle: "Spacious Designs for Refined Living",
      masterPlanDescription:
        "Each floor plan at Espania Heights is designed to maximize space, light, and functionality. These layouts cater to modern family living, providing both comfort and style.",
      masterPlanLink: "#",
      masterPlanLinkText: "Preview Espania Heights Master Plan",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: tuscanHeightsPlans,
      amenitiesTitle: "A Curated Experience of Luxury",
      amenitiesDescription: "Every element is designed to enhance well-being and offer convenience, creating a perfect balance between relaxation and activity.",
      amenities: tuscanHeightsAmenities,
      connectivityTitle: "Unrivaled Connectivity, Effortless Access",
      connectivityDescription:
        "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Espania Heights offers seamless access to Delhi.",
      connectivityPoints: tuscanHeightConnectivity,
      galleryTitle: "Where Elegance Meets Vision",
      galleryDescription:
        "Explore the visual beauty of Espania Heights through our gallery, showcasing a seamless blend of luxurious living, sophisticated design, and the tranquil elegance.",
      galleryImages: tuscanHeightsGallery,
    },
    mapQuery: "28.887008172478808,77.11832477567218",
    subProjects: [],
  },
  {
    id: 102,
    title: "Tuscan Floors",
    slug: "tuscan-city-floors",
    category: "residential",
    location: "Kundli, Sonipat, Haryana",
    description:
      "At TDI City Kundli, Tuscan Floors offers a harmonious blend of sophisticated living, world-class amenities, and dynamic commercial spaces. Every aspect of this meticulously planned township has been curated to provide a balanced, luxurious lifestyle, where comfort, connectivity, and convenience coexist effortlessly.",
    image: "/microsite/hero/tuscan-floor.png",
    thumbnail: "/microsite/hero/tuscan-floor.png",
    price: 3.6,
    areaSqFt: 1459,
    apartmentType: "2 BHK",
    buildingType: "Low-Rise",
    status: "Ready to Move",
    block: "B",
    isNative: false,
    showInGrid: true,
    hasSubProjects: false,
    parentProjectSlug: "tuscan-city",
    parentSubProjectSlug: "floors",
    propertyType: "Built up",
    detail: {
      hero: { type: "image", src: "/microsite/hero/tuscan-floor.png" },
      overviewImage: "/microsite/projects/masterplan.png",
      overviewTitle: "Where Exclusivity Meets Serenity",
      overviewDescription:
        "Tuscan Floors offers a refined living experience with low-rise G+5 residences, featuring 3 BHK, 3 BHK Duplex, and duplex homes with private terraces. Designed for modern family living, these homes provide the charm of independent living, seamlessly integrated with the conveniences of Tuscan City.",
      overviewStats: [
        { imageSrc: "/microsite/icons/bed.png", text: "3 BHK, 3 BHK Duplex" },
        { imageSrc: "/microsite/icons/tower.png", text: "149 Towers" },
        { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
      ],
      brochure: brochureCta,
      experiencesTitle: "Discover intimate, low-rise living",
      highlights: tuscanFloorsHighlights,
      masterPlanTitle: "Thoughtfully Designed Living Spaces",
      masterPlanDescription:
        "Tuscan Floors offers meticulously designed floor plans that seamlessly integrate luxury, functionality, and comfort. Each residence is carefully crafted to balance spaciousness with thoughtful layouts.",
      masterPlanLink: "#",
      masterPlanLinkText: "Open Tuscan Floor Plan",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: tuscanFloorsPlans,
      amenitiesTitle: "Where Luxury Meets Wellness",
      amenitiesDescription: "Every amenity at Tuscan Floors is crafted to elevate your lifestyle—be it the serene swimming pool, modern fitness center, or beautifully landscaped gardens.",
      amenities: tuscanFloorsAmenities,
      connectivityTitle: "Unrivaled Connectivity, Effortless Access",
      connectivityDescription:
        "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Tuscan Floors offers seamless access to Delhi.",
      connectivityPoints: tuscanFloorsConnectivity,
      galleryTitle: "A Vision of Elegance",
      galleryDescription:
        "Explore the Tuscan Floors gallery, where each image reveals the perfect blend of Italian-inspired architecture and luxurious living.",
      galleryImages: tuscanFloorsGallery,
    },
    mapQuery: "28.887008172478808,77.11832477567218",
    subProjects: [],
  },
  {
    id: 2,
    title: "Espania",
    slug: "espania",
    category: "residential",
    location: "Sector Edge, Kundli, Haryana",
    description:
      "At Espania, luxury living meets modern design, creating an ideal community that balances comfort, convenience, and sustainability. ",
    image: "/microsite/hero/espania.png",
    thumbnail: "/microsite/hero/espania.png",
    price: 4.6,
    areaSqFt: 2280,
    apartmentType: "3 BHK",
    buildingType: "High-Rise",
    status: "Under Development",
    block: "C",
    isNative: true,
    showInGrid: false,
    hasSubProjects: true,
    propertyType: "Built up",
    detail: {
      hero: { type: "image", src: "/microsite/hero/espania.png" },
      overviewImage: "/microsite/projects/elegance.jpg",
      overviewTitle: "Elegance Inspired by Spanish Charm",
      overviewDescription:
        "TDI Espania introduces the allure of Spanish-inspired living to TDI City, blending timeless elegance, modern comfort, and functionality. Featuring both Espana Heights and Espana Floors, this unique development offers a range of mid-rise and low-rise homes, each thoughtfully designed to cater to diverse lifestyles.",
      overviewStats: [
        { imageSrc: "/microsite/icons/bed.png", text: "2&3 BHK, 2&3 BHK Duplex" },
        { imageSrc: "/microsite/icons/tower.png", text: "50 Towers" },
        { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
      ],
      brochure: brochureCta,
      experiencesTitle: "Discover Espania's detailed planning layers",
      highlights: espaniaHighlights,
      masterPlanTitle: "A Masterpiece of Spanish Elegance",
      masterPlanDescription:
        "Every detail, from the elegant residences to the meticulously landscaped surroundings, is crafted to create an enriched and balanced environment where modern living meets timeless elegance.",
      masterPlanLink: "#",
      masterPlanLinkText: "See Espania Master Plan",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: espaniaPlans,
      amenitiesTitle: "Curated Amenities for Luxurious Living",
      amenitiesDescription: "Every amenity at TDI Espania is thoughtfully crafted to provide the comfort and convenience, creating a lifestyle that seamlessly blends luxury, relaxation, and everyday functionality.",
      amenities: espaniaAmenities,
      connectivityTitle: "Unrivaled Connectivity, Effortless Access",
      connectivityDescription: "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Espania offers seamless access to Delhi.",
      connectivityPoints: espaniaConnectivity,
      galleryTitle: "A Journey Through Spanish Elegance",
      galleryDescription: "Step into the gallery of TDI Espania and experience the perfect blend of timeless Spanish charm, sophisticated design, and luxurious living",
      galleryImages: espaniaGallery,
    },
    mapQuery: "Espania TDI City Kundli",
    subProjects: [
      {
        slug: "heights",
        title: "Espania Heights",
        subtitle: "Elevated Living",
        description:
          "Espania Heights presents premium mid-rise towers designed to offer expansive space, natural light, and contemporary Spanish-inspired design.",
        image: "/microsite/hero/espania-height.png",
        stats: [
          { imageSrc: "/microsite/icons/bed.png", text: "2 BHK, 3 BHK, 2 BHK Duplex" },
          { imageSrc: "/microsite/icons/tower.png", text: "9 Towers" },
          { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
        ],
        detail: {
          hero: { type: "image", src: "/microsite/hero/espania-height.png" },
          overviewImage: "/microsite/projects/height-map.png",
          overviewTitle: "A Symphony of Elegance and Space",
          overviewDescription:
            "Espania Heights presents premium mid-rise towers designed to offer expansive space, natural light, and contemporary design. Each residence is crafted to enhance lifestyle, with spacious layouts and thoughtful ventilation.",
          overviewStats: [
            { imageSrc: "/microsite/icons/bed.png", text: "2 BHK, 3 BHK, 2 BHK Duplex" },
            { imageSrc: "/microsite/icons/tower.png", text: "9 Towers" },
            { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
          ],
          brochure: brochureCta,
          experiencesTitle: "Explore high-rise comfort within TDI City Kundli",
          highlights: espaniaHeightsHighlights,
          masterPlanTitle: "Spacious, Elegant, and Thoughtfully Designed",
          masterPlanDescription:
            "Espania Heights offers a range of thoughtfully designed floor plans, each maximizing space and light.",
          masterPlanLink: "#",
          masterPlanLinkText: "Preview Espania Heights Master Plan",
          masterPlanImage: "/microsite/projects/masterplan.png",
          masterPlans: espaniaHeightsPlans,
          amenitiesTitle: "A Curated Experience of Luxury",
          amenitiesDescription: "Every element is designed to enhance well-being and offer convenience, creating a perfect balance between relaxation and activity.",
          amenities: espaniaHeightsAmenities,
          connectivityTitle: "Unrivaled Connectivity, Effortless Access",
          connectivityDescription:
            "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Espania Heights offers seamless access to Delhi.",
          connectivityPoints: espaniaHeightsConnectivity,
          galleryTitle: "A Glimpse of Timeless Elegance",
          galleryDescription:
            "Explore the Espania Heights Gallery to witness the perfect fusion of Spanish-inspired design, modern luxury, and expansive living.",
          galleryImages: espaniaHeightsGallery,
        },
        mapQuery: "28.887008172478808,77.11832477567218",
      },
      {
        slug: "floors",
        title: "Espania Floors",
        subtitle: "Contemporary Living",
        description:
          "Espania Floors offers an ideal balance of space, light, and neighborhood charm with low-rise privacy and thoughtful planning.",
        image: "/microsite/hero/espania-floor.png",
        stats: [
          { imageSrc: "/microsite/icons/bed.png", text: "3 BHK, 3 BHK Duplex" },
          { imageSrc: "/microsite/icons/tower.png", text: "41 Towers" },
          { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
        ],
        detail: {
          hero: { type: "image", src: "/microsite/hero/espania-floor.png" },
          overviewImage: "/microsite/projects/height-map.png",
          overviewTitle: "Independent Living with Italian Charm",
          overviewDescription:
            "Espania Floors presents premium low-rise residences designed to offer independent living, natural light, and contemporary design. Each home is crafted to enhance lifestyle, with spacious layouts and neighborhood connectivity.",
          overviewStats: [
            { imageSrc: "/microsite/icons/bed.png", text: "3 BHK, 3 BHK Duplex" },
            { imageSrc: "/microsite/icons/tower.png", text: "41 Towers" },
            { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
          ],
          brochure: brochureCta,
          experiencesTitle: "Explore independent comfort within TDI City Kundli",
          highlights: espaniaFloorsHighlights,
          masterPlanTitle: "Designed for Spacious, Comfortable Living",
          masterPlanDescription:
            "Each layout ensures natural ventilation and ample space, creating homes that promote ease and modern living for every family.",
          masterPlanLink: "#",
          masterPlanLinkText: "Preview Espania Floors Master Plan",
          masterPlanImage: "/microsite/projects/masterplan.png",
          masterPlans: espaniaFloorsPlans,
          amenitiesTitle: "Luxury Meets Comfort in Every Detail",
          amenitiesDescription: "Thoughtfully integrated recreational areas ensure that every moment at Espania Floors is spent in luxury and ease.",
          amenities: espaniaFloorsAmenities,
          connectivityTitle: "Unrivaled Connectivity, Effortless Access",
          connectivityDescription:
            "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Espania Floors offers seamless access to Delhi.",
          connectivityPoints: espaniaFloorsConnectivity,
          galleryTitle: "A Visual Symphony of Elegance",
          galleryDescription:
            "Step into the world of Espania Floors through our gallery, where each image captures the timeless elegance and modern living spaces that define this exceptional community.",
          galleryImages: espaniaFloorsGallery,
        },
        mapQuery: "28.887008172478808,77.11832477567218",
      },
    ],
  },
  {
    id: 201,
    title: "Espania Heights",
    slug: "espania-heights",
    category: "residential",
    location: "Kundli, Sonipat, Haryana",
    description:
      "Espania Heights offers an ideal balance of space, light, and community. Its design combines modern luxury with thoughtful planning.",
    image: "/microsite/hero/espania-height.png",
    thumbnail: "/microsite/hero/espania-height.png",
    price: 4.2,
    areaSqFt: 1654,
    apartmentType: "3 BHK",
    buildingType: "High-Rise",
    status: "Ready to Move",
    block: "A",
    isNative: false,
    showInGrid: true,
    hasSubProjects: false,
    parentProjectSlug: "espania",
    parentSubProjectSlug: "heights",
    propertyType: "Built up",
    detail: {
      hero: { type: "image", src: "/microsite/hero/espania-height.png" },
      overviewImage: "/microsite/projects/height-map.png",
      overviewTitle: "A Symphony of Elegance and Space",
      overviewDescription:
        "Espania Heights presents premium mid-rise towers designed to offer expansive space, natural light, and contemporary design. Each residence is crafted to enhance lifestyle, with spacious layouts and thoughtful ventilation.",
      overviewStats: [
        { imageSrc: "/microsite/icons/bed.png", text: "2 BHK, 3 BHK, 2 BHK Duplex" },
        { imageSrc: "/microsite/icons/tower.png", text: "9 Towers" },
        { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
      ],

      brochure: brochureCta,
      experiencesTitle: "Explore high-rise comfort within TDI City Kundli",
      highlights: espaniaHeightsHighlights,
      masterPlanTitle: "Spacious, Elegant, and Thoughtfully Designed",
      masterPlanDescription:
        "Espania Heights offers a range of thoughtfully designed floor plans, each maximizing space and light.",
      masterPlanLink: "#",
      masterPlanLinkText: "Preview Espania Heights Master Plan",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: espaniaHeightsPlans,
      amenitiesTitle: "A Curated Experience of Luxury",
      amenitiesDescription: "Every element is designed to enhance well-being and offer convenience, creating a perfect balance between relaxation and activity.",
      amenities: espaniaHeightsAmenities,
      connectivityTitle: "Unrivaled Connectivity, Effortless Access",
      connectivityDescription:
        "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Espania Heights offers seamless access to Delhi.",
      connectivityPoints: espaniaHeightsConnectivity,
      galleryTitle: "A Glimpse of Timeless Elegance",
      galleryDescription:
        "Explore the Espania Heights Gallery to witness the perfect fusion of Spanish-inspired design, modern luxury, and expansive living.",
      galleryImages: espaniaHeightsGallery,
    },
    mapQuery: "28.887008172478808,77.11832477567218",
    subProjects: [],
  },
  {
    id: 202,
    title: "Espania Floors",
    slug: "espania-floors",
    category: "residential",
    location: "Kundli, Sonipat, Haryana",
    description:
      "Espania Floors offers an ideal balance of space, light, and neighborhood charm. Its design combines low-rise privacy with thoughtful planning.",
    image: "/microsite/hero/espania-floor.png",
    thumbnail: "/microsite/hero/espania-floor.png",
    price: 4.2,
    areaSqFt: 1654,
    apartmentType: "3 BHK",
    buildingType: "Low-Rise",
    status: "Ready to Move",
    block: "A",
    isNative: false,
    showInGrid: true,
    hasSubProjects: false,
    parentProjectSlug: "espania",
    parentSubProjectSlug: "floors",
    propertyType: "Built up",
    detail: {
      hero: { type: "image", src: "/microsite/hero/espania-floor.png" },
      overviewImage: "/microsite/projects/height-map.png",
      overviewTitle: "Independent Living with Italian Charm",
      overviewDescription:
        "Espania Floors presents premium low-rise residences designed to offer independent living, natural light, and contemporary design. Each home is crafted to enhance lifestyle, with spacious layouts and neighborhood connectivity.",
      overviewStats: [
        { imageSrc: "/microsite/icons/bed.png", text: "3 BHK, 3 BHK Duplex" },
        { imageSrc: "/microsite/icons/tower.png", text: "41 Towers" },
        { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
      ],

      brochure: brochureCta,
      experiencesTitle: "Explore independent comfort within TDI City Kundli",
      highlights: espaniaFloorsHighlights,
      masterPlanTitle: "Designed for Spacious, Comfortable Living",
      masterPlanDescription:
        "Each layout ensures natural ventilation and ample space, creating homes that promote ease and modern living for every family.",
      masterPlanLink: "#",
      masterPlanLinkText: "Preview Espania Floors Master Plan",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: espaniaFloorsPlans,
      amenitiesTitle: "Luxury Meets Comfort in Every Detail",
      amenitiesDescription: "Thoughtfully integrated recreational areas ensure that every moment at Espania Floors is spent in luxury and ease.",
      amenities: espaniaFloorsAmenities,
      connectivityTitle: "Unrivaled Connectivity, Effortless Access",
      connectivityDescription:
        "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Espania Floors offers seamless access to Delhi.",
      connectivityPoints: espaniaFloorsConnectivity,
      galleryTitle: "A Visual Symphony of Elegance",
      galleryDescription:
        "Step into the world of Espania Floors through our gallery, where each image captures the timeless elegance and modern living spaces that define this exceptional community.",
      galleryImages: espaniaFloorsGallery,
    },
    mapQuery: "28.887008172478808,77.11832477567218",
    subProjects: [],
  },
  {
    id: 3,
    title: "Espania Royale",
    slug: "espania-royale",
    category: "residential",
    location: "Township Boulevard, Kundli, Haryana",
    description:
      "At Espania Royale, luxury living meets modern design, creating an ideal community that balances comfort, convenience, and sustainability.",
    image: "/microsite/hero/espania-royale.png",
    thumbnail: "/microsite/hero/espania-royale.png",
    price: 6.4,
    areaSqFt: 3120,
    apartmentType: "4 BHK",
    buildingType: "Low-Rise",
    status: "Ready to Move",
    block: "E",
    isNative: true,
    showInGrid: false,
    hasSubProjects: true,
    propertyType: "Built up",
    detail: {
      hero: { type: "image", src: "/microsite/hero/espania-royale.png" },
      overviewImage: "/microsite/projects/elegance.jpg",
      overviewTitle:
        "Where Grandeur Meets Precision",
      overviewDescription:
        "Espania Royale redefines modern living within the TDI City, blending sophisticated luxury, comfort, and practical design. With a mix of the refined Espana Royale Heights and the intimate, independent Espana Royale Floors, it offers a balanced lifestyle that caters to both contemporary urban living and privacy.",
      overviewStats: [
        { imageSrc: "/microsite/icons/bed.png", text: "2&3 BHK, 3 BHK Duplex" },
        { imageSrc: "/microsite/icons/tower.png", text: "43 Towers" },
        { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
      ],
      brochure: brochureCta,
      experiencesTitle:
        "Explore Espania Royale's signature living formats",
      highlights: espaniaRoyaleHighlights,
      masterPlanTitle: "Layouts that Inspire Luxury Living",
      masterPlanDescription:
        "The floor plans at Espania Royale are meticulously designed to offer a seamless blend of spaciousness, functionality, and aesthetic appeal.",
      masterPlanLink: "#",
      masterPlanLinkText: "View Espania Royale Master Plan",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: espaniaRoyalePlans,
      amenitiesTitle: "A Sanctuary of Refined Living",
      amenitiesDescription: "Espania Royale offers an exquisite collection of amenities, including a world-class clubhouse, an infinity pool with panoramic views, and serene walking paths framed by lush landscapes.",
      amenities: espaniaRoyaleAmenities,
      connectivityTitle: "Unrivaled Connectivity, Effortless Access",
      connectivityDescription: "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Tuscan City offers seamless access to Delhi.",
      connectivityPoints: espaniaRoyaleConnectivity,
      galleryTitle: "A Visual Journey Through Elegance",
      galleryDescription: "Explore the essence of Espania Royale through our curated gallery, where every image reflects the harmony of Spanish-inspired architecture, luxurious living, and exceptional design.",
      galleryImages: espaniaRoyaleGallery,
    },
    mapQuery: "Espania Royale TDI City Kundli",
    subProjects: [
      {
        slug: "heights",
        title: "Espania Royale Heights",
        subtitle: "Elevated Living",
        description:
          "Espania Royale Heights offers contemporary high-rise residences with natural light, expansive layouts, and refined community living.",
        image: "/microsite/hero/espania-royale-height.png",
        stats: [
          { imageSrc: "/microsite/icons/bed.png", text: "2 BHK, 3 BHK" },
          { imageSrc: "/microsite/icons/tower.png", text: "37 Towers" },
          { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
        ],
        detail: {
          hero: { type: "image", src: "/microsite/hero/espania-royale-height.png" },
          overviewImage: "/microsite/projects/elegance.jpg",
          overviewTitle: "Where Elegance Meets Contemporary Living",
          overviewDescription:
            "Espania Royale Heights offers contemporary high-rise towers designed for a lifestyle that prioritizes space, natural light, and modern comforts. With open interiors and meticulously planned layouts, every home embraces natural ventilation, offering a refined sense of living.",
          overviewStats: [
            { imageSrc: "/microsite/icons/bed.png", text: "2 BHK, 3 BHK" },
            { imageSrc: "/microsite/icons/tower.png", text: "37 Towers" },
            { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
          ],
          brochure: brochureCta,
          highlights: espaniaRoyaleHeightsHighlights,
          masterPlanTitle: "Designed for Comfort and Convenience",
          masterPlanDescription:
            "Designed for privacy and functionality, these homes provide expansive living spaces, private balconies, and well-ventilated interiors that seamlessly blend comfort with modern design.",
          masterPlanLink: "#",
          masterPlanLinkText: "View Espania Royale Master Plan",
          masterPlanImage: "/microsite/projects/masterplan.png",
          masterPlans: espaniaRoyaleHeightsPlans,
          amenitiesTitle: "Every Detail Crafted for Luxury",
          amenitiesDescription: "At Espania Royale Heights, residents can enjoy a curated selection of premium amenities, including recreational spaces, landscaped gardens, and community-centric facilities.",
          amenities: espaniaRoyaleHeightsAmenities,
          connectivityTitle: "Unrivaled Connectivity, Effortless Access",
          connectivityDescription: "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Espania Royale Heights offers seamless access to Delhi.",
          connectivityPoints: espaniaRoyaleHeightsConnectivity,
          galleryTitle: "A Glimpse of Refined Living",
          galleryDescription: "Discover the essence of Espania Royale Heights through our exclusive gallery. Each image captures the harmony of elevated living, modern design, and spacious interiors.",
          galleryImages: espaniaRoyaleHeightsGallery,
        },
        mapQuery: "Espania Royale TDI City Kundli",
      },
      {
        slug: "floors",
        title: "Espania Royale Floors",
        subtitle: "Contemporary Living",
        description:
          "Espania Royale Floors offers a fusion of privacy, design, and community with spacious low-rise homes for refined family living.",
        image: "/microsite/hero/espania-royale-floor.png",
        stats: [
          { imageSrc: "/microsite/icons/bed.png", text: "3 BHK, 3 BHK Duplex" },
          { imageSrc: "/microsite/icons/tower.png", text: "6 Towers" },
          { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
        ],
        detail: {
          hero: { type: "image", src: "/microsite/hero/espania-royale-floor.png" },
          overviewImage: "/microsite/projects/elegance.jpg",
          overviewTitle: "Exquisite Independence, Elevated Living",
          overviewDescription:
            "Espania Royale Floors offers the charm of independent-style living in a meticulously designed, secure community. With low-rise residences that blend privacy and spacious interiors, these homes provide the perfect balance of individuality and connection.",
          overviewStats: [
            { imageSrc: "/microsite/icons/bed.png", text: "3 BHK, 3 BHK Duplex" },
            { imageSrc: "/microsite/icons/tower.png", text: "6 Towers" },
            { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
          ],
          brochure: brochureCta,
          highlights: espaniaRoyaleFloorsHighlights,
          masterPlanTitle: "Layouts that Inspire Luxury Living",
          masterPlanDescription:
            "The floor plans at Espania Royale are meticulously designed to offer a seamless blend of spaciousness, functionality, and aesthetic appeal.",
          masterPlanLink: "#",
          masterPlanLinkText: "View Espania Royale Master Plan",
          masterPlanImage: "/microsite/projects/masterplan.png",
          masterPlans: espaniaRoyaleFloorsPlans,
          amenitiesTitle: "A Sanctuary of Refined Living",
          amenitiesDescription: "Espania Royale offers an exquisite collection of amenities, including a world-class clubhouse, an infinity pool with panoramic views, and serene walking paths framed by lush landscapes.",
          amenities: espaniaRoyaleFloorsAmenities,
          connectivityTitle: "Unrivaled Connectivity, Effortless Access",
          connectivityDescription: "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Espania Royale Floors offers seamless access to Delhi.",
          connectivityPoints: espaniaRoyaleFloorsConnectivity,
          galleryTitle: "A Visual Journey Through Elegance",
          galleryDescription: "Explore the essence of Espania Royale through our curated gallery, where every image reflects the harmony of Spanish-inspired architecture, luxurious living, and exceptional design.",
          galleryImages: espaniaRoyaleFloorsGallery,
        },
        mapQuery: "Espania Royale TDI City Kundli",
      },
    ],
  },
  {
    id: 301,
    title: "Espania Royale Heights",
    slug: "tdi-espania-royale-heights",
    category: "residential",
    location: "Township Boulevard, Kundli, Haryana",
    description:
      "The high-rise towers offer luxurious living spaces that combine natural light, expansive layouts, and scenic views, while providing a sense of community and ease.",
    image: "/microsite/hero/espania-royale-height.png",
    thumbnail: "/microsite/hero/espania-royale-height.png",
    price: 6.4,
    areaSqFt: 3120,
    apartmentType: "4 BHK",
    buildingType: "Low-Rise",
    status: "Ready to Move",
    block: "E",
    isNative: false,
    showInGrid: true,
    hasSubProjects: false,
    parentProjectSlug: "espania-royale",
    parentSubProjectSlug: "heights",
    propertyType: "Built up",
    detail: {
      hero: { type: "image", src: "/microsite/hero/espania-royale-height.png" },
      overviewImage: "/microsite/projects/elegance.jpg",
      overviewTitle:
        "Where Elegance Meets Contemporary Living",
      overviewDescription:
        "Espania Royale Heights offers contemporary high-rise towers designed for a lifestyle that prioritizes space, natural light, and modern comforts. With open interiors and meticulously planned layouts, every home embraces natural ventilation, offering a refined sense of living.",
      overviewStats: [
        { imageSrc: "/microsite/icons/bed.png", text: "2 BHK, 3 BHK" },
        { imageSrc: "/microsite/icons/tower.png", text: "37 Towers" },
        { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
      ],
      brochure: brochureCta,
      highlights: espaniaRoyaleHeightsHighlights,
      masterPlanTitle: "Designed for Comfort and Convenience",
      masterPlanDescription:
        "Designed for privacy and functionality, these homes provide expansive living spaces, private balconies, and well-ventilated interiors that seamlessly blend comfort with modern design.",
      masterPlanLink: "#",
      masterPlanLinkText: "View Espania Royale Master Plan",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: espaniaRoyaleHeightsPlans,
      amenitiesTitle: "Every Detail Crafted for Luxury",
      amenitiesDescription: "At Espania Royale Floors, residents can enjoy a curated selection of premium amenities, including recreational spaces, landscaped gardens, and community-centric facilities.",
      amenities: espaniaRoyaleHeightsAmenities,
      connectivityTitle: "Unrivaled Connectivity, Effortless Access",
      connectivityDescription: "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Espania Royale Floors offers seamless access to Delhi.",
      connectivityPoints: espaniaRoyaleHeightsConnectivity,
      galleryTitle: "A Glimpse of Refined Living",
      galleryDescription: "Discover the essence of Espania Royale Floors through our exclusive gallery. Each image captures the harmony of independent-style living, modern design, and spacious interiors.",
      galleryImages: espaniaRoyaleHeightsGallery,
    },
    mapQuery: "Espania Royale TDI City Kundli",
    subProjects: [],
  },
  {
    id: 302,
    title: "Espania Royale Floors",
    slug: "tdi-espania-royale-floors",
    category: "residential",
    location: "Township Boulevard, Kundli, Haryana",
    description:
      "Espania Royale Floors offers a perfect fusion of privacy, design, and community. Each home is thoughtfully crafted to provide families with spacious interiors.",
    image: "/microsite/hero/espania-royale-floor.png",
    thumbnail: "/microsite/hero/espania-royale-floor.png",
    price: 6.4,
    areaSqFt: 3120,
    apartmentType: "4 BHK",
    buildingType: "Low-Rise",
    status: "Ready to Move",
    block: "E",
    isNative: false,
    showInGrid: true,
    hasSubProjects: false,
    parentProjectSlug: "espania-royale",
    parentSubProjectSlug: "floors",
    propertyType: "Built up",
    detail: {
      hero: { type: "image", src: "/microsite/hero/espania-royale-floor.png" },
      overviewImage: "/microsite/projects/elegance.jpg",
      overviewTitle:
        "Exquisite Independence, Elevated Living",
      overviewDescription:
        "Espania Royale Floors offers the charm of independent-style living in a meticulously designed, secure community. With low-rise residences that blend privacy and spacious interiors, these homes provide the perfect balance of individuality and connection.",
      overviewStats: [
        { imageSrc: "/microsite/icons/bed.png", text: "3 BHK, 3 BHK Duplex" },
        { imageSrc: "/microsite/icons/tower.png", text: "6 Towers" },
        { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
      ],
      brochure: brochureCta,
      highlights: espaniaRoyaleFloorsHighlights,
      masterPlanTitle: "Layouts that Inspire Luxury Living",
      masterPlanDescription:
        "The floor plans at Espania Royale are meticulously designed to offer a seamless blend of spaciousness, functionality, and aesthetic appeal.",
      masterPlanLink: "#",
      masterPlanLinkText: "View Espania Royale Master Plan",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: espaniaRoyaleFloorsPlans,
      amenitiesTitle: "A Sanctuary of Refined Living",
      amenitiesDescription: "Espania Royale offers an exquisite collection of amenities, including a world-class clubhouse, an infinity pool with panoramic views, and serene walking paths framed by lush landscapes.",
      amenities: espaniaRoyaleFloorsAmenities,
      connectivityTitle: "Unrivaled Connectivity, Effortless Access",
      connectivityDescription: "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Tuscan City offers seamless access to Delhi.",
      connectivityPoints: espaniaRoyaleFloorsConnectivity,
      galleryTitle: "A Visual Journey Through Elegance",
      galleryDescription: "Explore the essence of Espania Royale through our curated gallery, where every image reflects the harmony of Spanish-inspired architecture, luxurious living, and exceptional design.",
      galleryImages: espaniaRoyaleFloorsGallery,
    },
    mapQuery: "Espania Royale TDI City Kundli",
    subProjects: [],
  },
  {
    id: 4,
    title: "Kingsbury",
    slug: "kingsbury",
    category: "residential",
    location: "Central District, TDI City Kundli",
    description:
      "At Kingsbury, luxury living meets modern design, creating an ideal community that balances comfort, convenience, and sustainability. ",
    image: "/microsite/hero/kingbury.png",
    thumbnail: "/microsite/hero/kingbury.png",
    price: 4.2,
    areaSqFt: 1550,
    apartmentType: "4 BHK",
    buildingType: "High-Rise",
    status: "Ready to Move",
    block: "F",
    isNative: true,
    showInGrid: true,
    hasSubProjects: false,
    propertyType: "Built up",
    detail: {
      hero: { type: "image", src: "/microsite/hero/kingbury.png" },
      overviewImage: "/microsite/projects/elegance.jpg",
      overviewTitle: "Excellence in Every Corner",
      overviewDescription:
        "At the heart of TDI City, Kundli, Kingsbury is the epitome of refined living. These exclusive 4+1 BHK residences combine timeless elegance with modern comforts, offering expansive interiors, serene views, and a lifestyle of sophistication.",
      overviewStats: [
        { imageSrc: "/microsite/icons/bed.png", text: "4+1 BHK" },
        { imageSrc: "/microsite/icons/tower.png", text: "20 Towers" },
        { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
      ],
      brochure: brochureCta,
      highlights: kingsburyHighlights,
      masterPlanTitle: "Designed for Refined Living",
      masterPlanDescription:
        "Each layout combines sophistication with practicality, offering spacious living, private balconies, and luxurious interiors that cater to the needs of modern families.",
      masterPlanLink: "#",
      masterPlanLinkText: "Explore Kingsbury Plan",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: kingsburyPlans,
      amenitiesTitle: "Where Luxury Meets Exclusivity",
      amenitiesDescription: "Kingsbury offers an exceptional array of amenities with thoughtfully curated spaces, including high-end clubhouses and recreational zones, ensure a lifestyle of unparalleled elegance and comfort.",
      amenities: kingsburyAmenities,
      connectivityTitle: "Unrivaled Connectivity, Effortless Access",
      connectivityDescription: "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links,  Kingsbury offers seamless access to Delhi.",
      connectivityPoints: kingsburyConnectivity,
      galleryTitle: "A Visual Symphony of Luxury",
      galleryDescription: "Step into the Kingsbury Gallery, where every image tells a story of refined living, architectural beauty, and timeless elegance.",
      galleryImages: kingsburyGallery,
    },
    mapQuery: "Kingsbury TDI City Kundli",
    subProjects: [],
  },

  {
    id: 5,
    title: "TDI Mall",
    slug: "tdi-mall",
    category: "commercial",
    location: "Commercial Hub, TDI City Kundli",
    description:
      "TDI Mall Kundli is an unparalleled lifestyle destination, blending high-end retail, diverse dining experiences, and entertainment in one seamless space.",
    image: "/microsite/hero/mall.jpg",
    thumbnail: "/microsite/hero/mall.jpg",
    price: 5.8,
    areaSqFt: 18000,
    status: "Ready to Move",
    block: "M",
    isNative: false,
    showInGrid: true,
    hasSubProjects: false,
    propertyType: "Built up",
    commercialType: "Retail",
    detail: {
      hero: { type: "image", src: "/microsite/hero/mall.jpg" },
      overviewImage: "/microsite/projects/elegance.jpg",
      overviewTitle: "Where Lifestyle Meets Luxury",
      overviewDescription:
        "TDI Mall Kundli is a premier destination where shopping, dining, and entertainment come together in perfect harmony. This vibrant lifestyle hub offers a carefully curated mix of top-tier brands, exquisite gourmet experiences, and cinematic delights.",
      overviewStats: [
        { imageSrc: "/microsite/icons/amenities.png", text: " 6.36 Acres" },
        { imageSrc: "/microsite/icons/floors.svg", text: "400–450 Retail Units" },
        { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
      ],
      brochure: brochureCta,
      highlights: tdiMallHighlights,
      masterPlanTitle: "Designed for Maximum Comfort and Style",
      masterPlanDescription:
        "The floor plan of TDI Mall Kundli is designed to ensure smooth flow and maximum convenience, offering multiple levels of shopping, dining, and entertainment.",
      masterPlanLink: "#",
      masterPlanLinkText: "View Mall Layout",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: tdiMallPlans,
      amenitiesTitle: "Unmatched Luxury, Unrivaled Experience",
      amenitiesDescription: "TDI Mall Kundli is equipped with world-class amenities, including high-end retail stores, an array of gourmet dining options, a premium cinema hall, and recreational zones.",
      amenities: tdiMallAmenities,
      connectivityTitle: "Unrivaled Connectivity, Effortless Access",
      connectivityDescription: "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, TDI Mall Kundli offers seamless access to Delhi.",
      connectivityPoints: tdiMallConnectivity,
      galleryTitle: "A Journey Into Luxury",
      galleryDescription: "Explore the TDI Mall Kundli Gallery, where each image encapsulates the perfect blend of elegance, modernity, and indulgence.",
      galleryImages: tdiMallGallery,
    },
    mapQuery: "TDI Mall Kundli",
    subProjects: [],
  },
  {
    id: 6,
    title: "Rodeo Drive Mall",
    slug: "rodeo-drive-mall",
    category: "commercial",
    location: "Perimeter Road, TDI City Kundli",
    description:
      "Rodeo Drive Mall stands as a beacon of luxury and innovation, offering a dynamic fusion of shopping, dining, and entertainment experiences.",
    image: "/assets/projects/nulife.png",
    thumbnail: "/assets/projects/nulife.png",
    price: 6.2,
    areaSqFt: 20000,
    status: "Under Development",
    block: "R",
    isNative: false,
    showInGrid: true,
    hasSubProjects: false,
    propertyType: "Built up",
    commercialType: "High Street",
    detail: {
      hero: { type: "image", src: "/microsite/hero/rodeo-drive-mall.jpg" },
      overviewImage: "/microsite/projects/elegance.jpg",
      overviewTitle: "Where Elegance Transcends Luxury",
      overviewDescription:
        "Step into Rodeo Drive Mall, a world-class destination where shopping, dining, and entertainment converge to inspire, delight, and connect. Designed to offer an extraordinary blend of vibrant retail spaces, curated dining experiences, and leisure offerings.",
      overviewStats: [
        { imageSrc: "/microsite/icons/lands.svg", text: "6.58 Acres" },
        { imageSrc: "/microsite/icons/building.svg", text: "750 Retail Units" },
        { imageSrc: "/microsite/icons/map.png", text: "Sonipat, Haryana" },
      ],
      brochure: brochureCta,
      highlights: rodeoMallHighlights,
      masterPlanTitle: "A Well-Crafted Destination",
      masterPlanDescription:
        "The floor plan of Rodeo Drive Mall is meticulously designed to offer a seamless flow across various levels.",
      masterPlanLink: "#",
      masterPlanLinkText: "Open Rodeo Drive Mall Plan",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: rodeoMallPlans,
      amenitiesTitle: "Where Every Experience is Elevated",
      amenitiesDescription: "Each element has been thoughtfully integrated to ensure maximum comfort and luxury for all visitors.",
      amenities: rodeoMallAmenities,
      connectivityTitle: "Strategic Location",
      connectivityDescription: "Nestled near major arterial roads such as NH-44, UER-II, and key expressways like KMP & KGP, along with upcoming metro and RRTS links, Rodeo Drive Mall offers seamless access to Delhi.",
      connectivityPoints: rodeoMallConnectivity,
      galleryTitle: "A Showcase of Timeless Sophistication",
      galleryDescription: "Explore the Rodeo Drive Mall gallery to experience a visual journey of sophistication, style, and luxury.",
      galleryImages: rodeoMallGallery,
    },
    mapQuery: "Rodeo Mall Kundli",
    subProjects: [],
  },
  {
    id: 7,
    title: "TDI International School",
    slug: "tdi-international-school",
    category: "educational",
    location: "Education Precinct, Kundli, Haryana",
    description:
      "A senior secondary school campus designed to support academics, sports and community learning.",
    image: "/assets/projects/school.png",
    thumbnail: "/assets/projects/school.png",
    price: 0,
    areaSqFt: 0,
    status: "Ready to Move",
    block: "L",
    isNative: false,
    showInGrid: true,
    hasSubProjects: false,
    hasDetailPage: false,
    institutionType: "School",
    educationLevel: "Senior Secondary",
    detail: {
      hero: { type: "image", src: "/microsite/hero/tdi-international-school.jpg" },
      overviewImage: "/microsite/projects/elegance.jpg",
      overviewTitle: "A complete learning environment within the township",
      overviewDescription:
        "TDI International School strengthens the township's live-learn ecosystem with academic infrastructure, activity space and everyday access for families who want education close to home.",
      overviewStats: [
        {
          imageSrc: "/microsite/icons/residential.png",
          text: "Senior Secondary",
        },
        {
          imageSrc: "/microsite/icons/amenities.png",
          text: "Campus Facilities",
        },
        { imageSrc: "/microsite/icons/map.png", text: "Kundli, Haryana" },
      ],
      brochure: brochureCta,
      highlights: tdiSchoolHighlights,
      masterPlanTitle: "School Campus Movement Plan",
      masterPlanDescription:
        "Academic blocks, playfields, and secure drop-off loops mapped for smooth daily circulation.",
      masterPlanLink: "#",
      masterPlanLinkText: "View School Master Plan",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: tdiSchoolPlans,
      amenities: tdiSchoolAmenities,
      connectivityTitle: "Safe Learning Transit",
      connectivityDescription: "TDI International School is connected via secure internal routes, ensuring a safe and efficient daily commute for students, parents, and staff within the township.",
      connectivityPoints: tdiSchoolConnectivity,
      galleryTitle: "Learning Environment",
      galleryDescription: "Experience the vibrant campus life and advanced academic infrastructure of TDI International School.",
      galleryImages: tdiSchoolGallery,
    },
    mapQuery: "TDI International School Kundli",
    subProjects: [],
  },
  {
    id: 8,
    title: "Samarpan Cancer Hospital",
    slug: "samarpan-cancer-hospital",
    category: "healthcare",
    location: "Healthcare Zone, Kundli, Haryana",
    description:
      "A specialist oncology-focused healthcare project serving township residents and the wider regional catchment.",
    image: "/assets/projects/samarpan.png",
    thumbnail: "/assets/projects/samarpan.png",
    price: 0,
    areaSqFt: 0,
    status: "Under Development",
    block: "B",
    isNative: false,
    showInGrid: true,
    hasSubProjects: false,
    hasDetailPage: false,
    specialisation: "Cardiac Care",
    detail: {
      hero: { type: "image", src: "/microsite/hero/samarpan-cancer-hospital.jpg" },
      overviewImage: "/microsite/projects/elegance.jpg",
      overviewTitle:
        "Specialist care infrastructure built close to the community",
      overviewDescription:
        "Samarpan Cancer Hospital is positioned as a focused care campus intended to improve access to specialist consultation, diagnostics and treatment within the wider Kundli region.",
      overviewStats: [
        { imageSrc: "/microsite/icons/amenities.png", text: "Specialist Care" },
        { imageSrc: "/microsite/icons/residential.png", text: "Regional Access" },
        { imageSrc: "/microsite/icons/map.png", text: "Kundli, Haryana" },
      ],
      brochure: brochureCta,
      highlights: samarpanHospitalHighlights,
      masterPlanTitle: "Samarpan Care Campus Plan",
      masterPlanDescription:
        "Zoning of OPD, diagnostics, inpatient towers, and emergency bay optimized for rapid patient movement.",
      masterPlanLink: "#",
      masterPlanLinkText: "Preview Hospital Plan",
      masterPlanImage: "/microsite/projects/masterplan.png",
      masterPlans: samarpanHospitalPlans,
      amenities: samarpanHospitalAmenities,
      connectivityTitle: "Fastest Care Response",
      connectivityDescription: "Samarpan Cancer Hospital is positioned for the fastest possible emergency access from NH-44, while remaining easily reachable for township residents.",
      connectivityPoints: samarpanHospitalConnectivity,
      galleryTitle: "Care & Support",
      galleryDescription: "A look at the specialized care facilities and patient-centric design of Samarpan Cancer Hospital.",
      galleryImages: samarpanHospitalGallery,
    },
    mapQuery: "Samarpan Hospital Kundli",
    subProjects: [],
  },
];

export const projectMenuData: ProjectMenuCategory[] = projectCategoryValues.map(
  (category) => {
    const categoryMeta = categories.find((item) => item.value === category);

    return {
      title: categoryMeta?.label ?? category,
      value: category,
      href: `/projects/${category}`,
      items: mockProjects
        .filter(
          (project) =>
            project.category === category &&
            projectHasDetailPage(project) &&
            (project.isNative ||
              (project.showInGrid && project.parentProjectSlug === undefined)),
        )
        .map((project) => ({
          name: project.title,
          href: getProjectHref(project),
          isNative: project.isNative,
          children: project.subProjects.map((subProject) => ({
            name: subProject.title,
            href: getSubProjectHref(project, subProject),
          })),
        })),
    };
  },
);

export function getProjectHref(
  project: Pick<Project, "slug" | "parentProjectSlug" | "parentSubProjectSlug">,
): string {
  if (project.parentProjectSlug && project.parentSubProjectSlug) {
    return `/projects/${project.parentProjectSlug}/${project.parentSubProjectSlug}`;
  }

  return `/projects/${project.slug}`;
}

export function getSubProjectHref(
  project: Pick<Project, "slug">,
  subProject: Pick<ProjectSubProject, "slug">,
): string {
  return `${getProjectHref(project)}/${subProject.slug}`;
}

export function projectHasDetailPage(
  project: Pick<Project, "hasDetailPage">,
): boolean {
  return project.hasDetailPage !== false;
}

export function getRoutableProjects(): Project[] {
  return mockProjects.filter(
    (project) =>
      projectHasDetailPage(project) &&
      (project.isNative ||
        (project.showInGrid && project.parentProjectSlug === undefined)),
  );
}

export function isProjectCategory(value: string): value is ProjectCategory {
  return projectCategoryValues.includes(value as ProjectCategory);
}

export function getProjectsByCategory(category: ProjectCategory) {
  return mockProjects.filter(
    (project) => project.category === category && project.showInGrid,
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getRoutableProjects().find((project) => project.slug === slug);
}

export function getProjectByCategoryAndSlug(
  category: string,
  slug: string,
): Project | undefined {
  if (!isProjectCategory(category)) return undefined;

  return getRoutableProjects().find(
    (project) => project.category === category && project.slug === slug,
  );
}

export function getProjectSubPage(
  category: string,
  slug: string,
  subSlug: string,
): ProjectSubProject | undefined {
  const project = getProjectByCategoryAndSlug(category, slug);

  if (!project) return undefined;

  return getProjectSubProject(project.slug, subSlug);
}

export function getProjectSubProject(
  projectSlug: string,
  subSlug: string,
): ProjectSubProject | undefined {
  const project = getProjectBySlug(projectSlug);

  if (!project?.hasSubProjects) return undefined;

  return project.subProjects.find((subProject) => subProject.slug === subSlug);
}

export function filterProjects(
  projects: Project[],
  filters: FilterState,
): Project[] {
  return projects.filter((project) => {
    if (!project.showInGrid) {
      return false;
    }

    if (
      filters.category &&
      filters.category !== "all" &&
      project.category !== filters.category
    ) {
      return false;
    }

    if (
      (filters.category === "all" ||
        filters.category === "residential" ||
        filters.category === "commercial") &&
      filters.propertyType &&
      project.propertyType !== filters.propertyType &&
      (project.category === "residential" || project.category === "commercial")
    ) {
      return false;
    }

    if (
      filters.category === "all" ||
      filters.category === "residential" ||
      filters.category === "commercial"
    ) {
      if (
        (project.category === "residential" ||
          project.category === "commercial") &&
        (project.price < filters.priceRange[0] ||
          project.price > filters.priceRange[1])
      ) {
        return false;
      }
    }

    if (
      filters.category === "all" ||
      filters.category === "residential" ||
      filters.category === "commercial"
    ) {
      if (
        (project.category === "residential" ||
          project.category === "commercial") &&
        (project.areaSqFt < filters.areaRange[0] ||
          project.areaSqFt > filters.areaRange[1])
      ) {
        return false;
      }
    }

    if (
      (filters.category === "all" || filters.category === "residential") &&
      filters.apartmentTypes.length > 0 &&
      (!project.apartmentType ||
        !filters.apartmentTypes.includes(project.apartmentType))
    ) {
      return false;
    }

    if (
      (filters.category === "all" || filters.category === "residential") &&
      filters.buildingTypes.length > 0 &&
      (!project.buildingType ||
        !filters.buildingTypes.includes(project.buildingType))
    ) {
      return false;
    }

    if (
      (filters.category === "all" || filters.category === "commercial") &&
      filters.commercialTypes.length > 0 &&
      (!project.commercialType ||
        !filters.commercialTypes.includes(project.commercialType))
    ) {
      return false;
    }

    if (filters.category === "all" || filters.category === "educational") {
      if (
        filters.institutionTypes.length > 0 &&
        project.category === "educational" &&
        (!project.institutionType ||
          !filters.institutionTypes.includes(project.institutionType))
      ) {
        return false;
      }

      if (
        filters.educationLevels.length > 0 &&
        project.category === "educational" &&
        (!project.educationLevel ||
          !filters.educationLevels.includes(project.educationLevel))
      ) {
        return false;
      }
    }

    if (
      (filters.category === "all" || filters.category === "healthcare") &&
      filters.specialisations.length > 0 &&
      (!project.specialisation ||
        !filters.specialisations.includes(project.specialisation))
    ) {
      return false;
    }

    if (filters.statuses.length > 0 && !filters.statuses.includes(project.status)) {
      return false;
    }

    if (filters.blocks.length > 0 && !filters.blocks.includes(project.block)) {
      return false;
    }

    return true;
  });
}
