

export interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: "residential" | "commercial" | "educational" | "healthcare";
  price: number;
  areaSqFt: number;
  apartmentType?: "2 BHK" | "3 BHK" | "4 BHK";
  buildingType?: "High-Rise" | "Low-Rise";
  status: "Ready to Move" | "Under Development";
  block: string;
  propertyType?: "Plot" | "Built up";
  commercialType?: string;
  institutionType?: string;
  educationLevel?: string;
  specialisation?: string;
}

export interface SubProject {
  title: string;
  subtitle?: string;
  slug: string;
  description: string;
  imageSrc: string;
  link: string;
  stats: { imageSrc: string; text: string }[];
  plans: { id: string; name: string; carpetArea: string; imageSrc: string }[];
}

export interface DetailedProject {
  title: string;
  overview: {
    stats: { imageSrc: string; text: string }[];
    imageSrc: string;
    contentTitle: string;
    contentDescription: string;
  };
  experiencesTitle?: string;
  subProjects?: SubProject[];
  subtitle?: string;
  highlights: { imageSrc: string; title: string; description: string }[];
  masterPlanImage?: string;
  amenities: { title: string; imageSrc: string }[];
  connectivityPoints: { title: string; time: string; description: string; imageSrc: string }[];
  galleryImages: string[];
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

export const categories = [
  { label: "All", value: "all", hasDropdown: false },
  { label: "Residential", value: "residential", hasDropdown: true },
  { label: "Commercial", value: "commercial", hasDropdown: true },
  { label: "Educational", value: "educational", hasDropdown: true },
  { label: "Healthcare", value: "healthcare", hasDropdown: true },
];

export const apartmentOptions = ["2 BHK", "3 BHK", "4 BHK"];
export const buildingOptions = ["High-Rise", "Low-Rise"];
export const statusOptions = ["Ready to Move", "Under Development"];
export const blockOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

export const commercialTypeOptions = ["Retail", "Office", "High Street", "SCO (Shop-Cum-Office)"];
export const institutionTypeOptions = ["School", "College", "University"];
export const educationLevelOptions = ["Primary", "Secondary", "Senior Secondary"];
export const specialisationOptions = [
  "General Healthcare",
  "Orthopaedics",
  "Maternity & Child Care",
  "Cardiac Care",
  "Diagnostics & Imaging",
];

// ── Mock Data ─────

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Tuscan City",
    slug: "tuscan-city",
    image: "/assets/projects/tuscan.png",
    category: "residential",
    price: 3.5,
    areaSqFt: 1800,
    apartmentType: "2 BHK",
    buildingType: "High-Rise",
    status: "Ready to Move",
    block: "A",
    propertyType: "Built up",
  },
  {
    id: 2,
    title: "Espania",
    slug: "espania",
    image: "/assets/projects/espania.png",
    category: "residential",
    price: 4.2,
    areaSqFt: 2200,
    apartmentType: "3 BHK",
    buildingType: "High-Rise",
    status: "Under Development",
    block: "B",
    propertyType: "Built up",
  },
  {
    id: 3,
    title: "Espania Royale",
    slug: "espania-royale",
    image: "/assets/projects/espania-royale.png",
    category: "residential",
    price: 6.5,
    areaSqFt: 3500,
    apartmentType: "4 BHK",
    buildingType: "High-Rise",
    status: "Ready to Move",
    block: "C",
    propertyType: "Built up",
  },
  {
    id: 4,
    title: "Tuscan City",
    slug: "tuscan-city-low-rise", // Unique slug if needed, or handle by category
    image: "/assets/projects/tuscan.png",
    category: "residential",
    price: 2.8,
    areaSqFt: 1500,
    apartmentType: "2 BHK",
    buildingType: "Low-Rise",
    status: "Ready to Move",
    block: "A",
    propertyType: "Built up",
  },
  {
    id: 5,
    title: "Espania",
    slug: "espania-high-rise",
    image: "/assets/projects/espania.png",
    category: "residential",
    price: 5.0,
    areaSqFt: 2800,
    apartmentType: "3 BHK",
    buildingType: "High-Rise",
    status: "Under Development",
    block: "D",
    propertyType: "Built up",
  },
  {
    id: 6,
    title: "Espania Royale",
    slug: "espania-royale-low-rise",
    image: "/assets/projects/espania-royale.png",
    category: "residential",
    price: 7.2,
    areaSqFt: 4200,
    apartmentType: "4 BHK",
    buildingType: "Low-Rise",
    status: "Ready to Move",
    block: "E",
    propertyType: "Built up",
  },
  {
    id: 7,
    title: "Kingsbury",
    slug: "kingsbury",
    image: "/assets/projects/tuscan.png",
    category: "commercial",
    price: 5.5,
    areaSqFt: 5000,
    status: "Under Development",
    block: "F",
    propertyType: "Built up",
    commercialType: "Office",
  },
  {
    id: 8,
    title: "Tuscan City",
    slug: "tuscan-city-commercial",
    image: "/assets/projects/espania.png",
    category: "commercial",
    price: 3.0,
    areaSqFt: 2000,
    status: "Ready to Move",
    block: "G",
    propertyType: "Plot",
    commercialType: "Retail",
  },
  {
    id: 9,
    title: "TDI International School",
    slug: "tdi-international-school",
    image: "/assets/projects/school.png",
    category: "educational",
    price: 0,
    areaSqFt: 0,
    status: "Ready to Move",
    block: "L",
    institutionType: "School",
    educationLevel: "Senior Secondary",
  },
  {
    id: 10,
    title: "Samarpan Cancer Hospital",
    slug: "samarpan-cancer-hospital",
    image: "/assets/projects/samarpan.png",
    category: "healthcare",
    price: 0,
    areaSqFt: 0,
    status: "Under Development",
    block: "B",
    specialisation: "Maternity & Child Care",
  },
  {
    id: 11,
    title: "Noble Multispecialty Hospital",
    slug: "noble-multispecialty-hospital",
    image: "/assets/projects/noble2.png",
    category: "healthcare",
    price: 0,
    areaSqFt: 0,
    status: "Under Development",
    block: "A",
    specialisation: "Maternity & Child Care",
  },
  {
    id: 12,
    title: "Nulife Super Specialty Hospital",
    slug: "nulife-super-specialty-hospital",
    image: "/assets/projects/nulife.png",
    category: "healthcare",
    price: 0,
    areaSqFt: 0,
    status: "Under Development",
    block: "C",
    specialisation: "Maternity & Child Care",
  }
];

export const projectDetails: Record<string, DetailedProject> = {
  "tuscan-city": {
    title: "TDI TUSCAN CITY",
    overview: {
      stats: [
        { imageSrc: "/assets/images/projects/amenity-bed.png", text: "2 BHK & 3 BHK" },
        { imageSrc: "/assets/images/projects/amenity-building.png", text: "60 Towers" },
        { imageSrc: "/assets/images/projects/amenity-map.png", text: "Sonipat, Haryana" }
      ],
      imageSrc: "/microsite/projects/tuscan-bro.jpg",
      contentTitle: "A True Italian Reflection",
      contentDescription: "Tuscan City, nestled within TDI City Kundli, brings the timeless elegance of Tuscany to life within the  framework of a modern integrated township. Its graceful European-inspired design, spacious open areas,  and intimate community feel are ideal for those who seek the perfect balance of charm and comfort."
    },
    experiencesTitle: "Designed Across 22 Acres, Tuscan City Offers Two Exceptional Residential Experiences",
    subProjects: [
      {
        title: "Tuscan Heights ",
        subtitle: "Elevated Living Refined Comfort",
        slug: "tuscan-height",
        description: "Tuscan Heights is the vertical embodiment of Tuscan City, designed to offer luxury, elegance, and comfort in a high-rise format. Standing tall as 5.14...",
        imageSrc: "/microsite/projects/tuscan-height.jpg",
        link: "/projects/residential/tuscan-city/tuscan-height",
        stats: [
          { imageSrc: "/assets/images/projects/amenity-bed.png", text: "2 BHK & 3 BHK" },
          { imageSrc: "/assets/images/projects/amenity-building.png", text: "14 Towers | 1467 Apartments" }
        ],
        plans: [
          { id: "2bhk", name: "2 BHK Residences", carpetArea: "1085 Sq. Ft.", imageSrc: "/assets/images/projects/floorplan-1.png" },
          { id: "3bhk", name: "3 BHK + Servant", carpetArea: "1590 Sq. Ft.", imageSrc: "/assets/images/projects/floorplan-2.png" },
          { id: "4bhk", name: "4 BHK Duplex", carpetArea: "2280 Sq. Ft.", imageSrc: "/assets/images/projects/floorplan-3.png" }
        ]
      },
      {
        title: "Tuscan Floors",
        subtitle: "Where Elegance Meets Contemporary Living",
        slug: "tuscan-floor",
        description: "Tuscan Floors offers an exclusive, low-rise living experience within Tuscan City, blending the timeless charm of Tuscan-inspired design with the modern...",
        imageSrc: "/microsite/projects/tuscan-floor.jpg",
        link: "/projects/residential/tuscan-city/tuscan-floor",
        stats: [
          { imageSrc: "/assets/images/projects/amenity-bed.png", text: "2 BHK Floors" },
          { imageSrc: "/assets/images/projects/amenity-building.png", text: "149 Towers | 745 Apartments" }
        ],
        plans: [
          { id: "gf", name: "Ground Floor", carpetArea: "1459 Sq. Ft.", imageSrc: "/assets/images/projects/floorplan-1.png" },
          { id: "ff", name: "First Floor", carpetArea: "1459 Sq. Ft.", imageSrc: "/assets/images/projects/floorplan-2.png" },
          { id: "sf", name: "Second Floor", carpetArea: "1459 Sq. Ft.", imageSrc: "/assets/images/projects/floorplan-3.png" }
        ]
      }
    ],
    highlights: [
      { imageSrc: "/assets/images/projects/amenity-home.png", title: "Italian-Inspired Architecture", description: "Timeless Tuscan design with European elegance" },
      { imageSrc: "/assets/images/projects/amenity-map.png", title: "Integrated Township Living", description: "Part of 200+ acre TDI City township" },
      { imageSrc: "/assets/images/projects/amenity-building.png", title: "High-Rise & Low-Rise Residences", description: "Tuscan Heights towers and Tuscan Floors" },
      { imageSrc: "/assets/images/projects/amenity-tree.png", title: "Spacious Modern Homes", description: "Well-planned 2 & 3 BHK residences" },
      { imageSrc: "/assets/images/projects/amenity-gym.png", title: "Premium Lifestyle Amenities", description: "Club, pool, gym and recreation spaces" },
      { imageSrc: "/assets/images/projects/amenity-map.png", title: "Excellent NCR Connectivity", description: "NH-44, Metro, RRTS and expressways nearby" },
    ],
    masterPlanImage: "/microsite/projects/masterplan.png",
    // { title: "Premium Club Facilities", image: "/assets/images/clubhouse/1.jpg" },
    // { title: "Pan Asian Restaurant", image: "/assets/images/clubhouse/2.jpg" },
    // { title: "Crystal Bar", image: "/assets/images/clubhouse/3.jpg" },
    // { title: "Gym", image: "/assets/images/clubhouse/testimage.webp" },
    // { title: "Swimming Pool", image: "/assets/images/clubhouse/5.jpg" },
    // { title: "Spa", image: "/assets/images/clubhouse/6.jpg" },
    // { title: "Jacuzzi", image: "/assets/images/clubhouse/7.jpg" },
    // { title: "Table Tennis", image: "/assets/images/clubhouse/8.jpg" },
    // { title: "Badminton", image: "/assets/images/clubhouse/9.jpg" },
    // { title: "Squash Courts", image: "/assets/images/clubhouse/10.jpg" },
    // { title: "Conference Halls", image: "/assets/images/clubhouse/11.jpg" },
    // { title: "Banquet Halls", image: "/assets/images/clubhouse/12.jpg" },
    // { title: "24-hour Concierge", image: "/assets/images/clubhouse/13.jpg" },
    // { title: "In-Room Dining", image: "/assets/images/clubhouse/14.jpg" },
    // { title: "Laundry", image: "/assets/images/clubhouse/15.jpg" },
    // { title: "Wi-Fi", image: "/assets/images/clubhouse/16.jpg" },
    // { title: "Parking", image: "/assets/images/clubhouse/17.jpg" },
    // { title: "Outdoor Catering", image: "/assets/images/clubhouse/18.jpg" },
    amenities: [
      { title: "Swimming Pool", imageSrc: "/assets/images/clubhouse/5.jpg" },
      { title: "Gym", imageSrc: "/assets/images/clubhouse/2.jpg" },
      { title: "Spa", imageSrc: "/assets/images/clubhouse/3.jpg" },
      { title: "Conference & Banquet Halls", imageSrc: "/assets/images/clubhouse/testimage.webp" },
      { title: "Outdoor Catering", imageSrc: "/assets/images/clubhouse/5.jpg" },
      { title: "24 Hours Concierge", imageSrc: "/assets/images/clubhouse/6.jpg" },
      { title: "In-Room Dining", imageSrc: "/assets/images/clubhouse/7.jpg" },
      { title: "Car Parking", imageSrc: "/assets/images/clubhouse/8.jpg" },
    ],
    connectivityPoints: [
      { title: "Kundli Metro Station", time: "5min", description: "A short drive connects you to the metro network, enabling convenient and time-efficient travel across Delhi NCR.", imageSrc: "/microsite/projects/metro.jpg" },
      { title: "Rajiv Gandhi Education City", time: "3min", description: "A short drive connects you to the metro network, enabling convenient and time-efficient travel across Delhi NCR.", imageSrc: "/microsite/projects/highway.jpg" }
    ],
    galleryImages: [
      "/assets/gallery/1.jpg",
      "/assets/gallery/2.jpg",
      "/assets/gallery/3.jpg",
      "/assets/gallery/4.jpg",
      "/assets/gallery/5.jpg",
      "/assets/gallery/6.jpg",
    ]
  },
  "nulife-super-specialty-hospital": {
    title: "Nulife Super Specialty Hospital",
    overview: {
      stats: [
        { imageSrc: "/assets/images/projects/amenity-building.png", text: "Super Specialty" },
        { imageSrc: "/assets/images/projects/amenity-map.png", text: "Sonipat, Haryana" }
      ],
      imageSrc: "/assets/projects/nulife.png",
      contentTitle: "Excellence in Healthcare",
      contentDescription: "Nulife Super Specialty Hospital is a state-of-the-art healthcare facility providing comprehensive medical services with a focus on patient care and advanced technology."
    },
    highlights: [
      { imageSrc: "/assets/images/projects/amenity-home.png", title: "State-of-the-art Infrastructure", description: "Modern medical facilities with advanced equipment" },
      { imageSrc: "/assets/images/projects/amenity-map.png", title: "Convenient Location", description: "Easily accessible from major NCR regions" },
    ],
    amenities: [
      { title: "24x7 Emergency", imageSrc: "/assets/images/projects/amenity-concierge.png" },
      { title: "Advanced Diagnostics", imageSrc: "/assets/images/projects/amenity-spa.png" },
    ],
    connectivityPoints: [],
    galleryImages: []
  },
  "kingsbury": {
    title: "Kingsbury",
    overview: {
      stats: [
        { imageSrc: "/assets/images/projects/amenity-building.png", text: "Commercial Hub" },
        { imageSrc: "/assets/images/projects/amenity-map.png", text: "Sonipat, Haryana" }
      ],
      imageSrc: "/assets/projects/tuscan.png",
      contentTitle: "Premier Commercial Space",
      contentDescription: "Kingsbury offers premium commercial spaces designed for businesses to thrive, featuring modern architecture and strategic location."
    },
    highlights: [
      { imageSrc: "/assets/images/projects/amenity-home.png", title: "Modern Design", description: "Contemporary commercial architecture" },
      { imageSrc: "/assets/images/projects/amenity-map.png", title: "Strategic Location", description: "High visibility and accessibility" },
    ],
    amenities: [
      { title: "Ample Parking", imageSrc: "/assets/images/projects/amenity-parking.png" },
    ],
    connectivityPoints: [],
    galleryImages: []
  },
  "noble-multispecialty-hospital": {
    title: "Noble Multispecialty Hospital",
    overview: {
      stats: [
        { imageSrc: "/assets/images/projects/amenity-building.png", text: "Multispecialty" },
        { imageSrc: "/assets/images/projects/amenity-map.png", text: "Sonipat, Haryana" }
      ],
      imageSrc: "/assets/projects/noble2.png",
      contentTitle: "Compassionate Care",
      contentDescription: "Noble Multispecialty Hospital is dedicated to providing high-quality healthcare services across various specialties."
    },
    highlights: [
      { imageSrc: "/assets/images/projects/amenity-home.png", title: "Advanced Equipment", description: "Equipped with the latest medical technology" },
    ],
    amenities: [
      { title: "Expert Doctors", imageSrc: "/assets/images/projects/amenity-concierge.png" },
    ],
    connectivityPoints: [],
    galleryImages: []
  },
  "samarpan-cancer-hospital": {
    title: "Samarpan Cancer Hospital",
    overview: {
      stats: [
        { imageSrc: "/assets/images/projects/amenity-building.png", text: "Oncology Care" },
        { imageSrc: "/assets/images/projects/amenity-map.png", text: "Sonipat, Haryana" }
      ],
      imageSrc: "/assets/projects/samarpan.png",
      contentTitle: "Specialized Oncology",
      contentDescription: "Samarpan Cancer Hospital provides specialized care and treatment for cancer patients with a holistic approach."
    },
    highlights: [
      { imageSrc: "/assets/images/projects/amenity-home.png", title: "Specialized Unit", description: "Dedicated oncology department" },
    ],
    amenities: [
      { title: "Patient Support", imageSrc: "/assets/images/projects/amenity-spa.png" },
    ],
    connectivityPoints: [],
    galleryImages: []
  },
  "tdi-international-school": {
    title: "TDI International School",
    overview: {
      stats: [
        { imageSrc: "/assets/images/projects/amenity-building.png", text: "Senior Secondary" },
        { imageSrc: "/assets/images/projects/amenity-map.png", text: "Sonipat, Haryana" }
      ],
      imageSrc: "/assets/projects/school.png",
      contentTitle: "Nurturing Future Leaders",
      contentDescription: "TDI International School offers a world-class education with a focus on academic excellence and co-curricular development."
    },
    highlights: [
      { imageSrc: "/assets/images/projects/amenity-home.png", title: "Modern Labs", description: "Well-equipped science and computer labs" },
    ],
    amenities: [
      { title: "Sports Complex", imageSrc: "/assets/images/projects/amenity-gym.png" },
    ],
    connectivityPoints: [],
    galleryImages: []
  }
};


// ── Filter Logic ──

export function filterProjects(projects: Project[], filters: FilterState): Project[] {
  return projects.filter((project) => {
    // Category
    if (filters.category && filters.category !== "all" && project.category !== filters.category) return false;

    // Property type 
    if ((filters.category === "all" || filters.category === "residential" || filters.category === "commercial") && filters.propertyType && project.propertyType !== filters.propertyType && (project.category === "residential" || project.category === "commercial")) return false;

    // Price range
    if (filters.category === "all" || filters.category === "residential" || filters.category === "commercial") {
      if ((project.category === "residential" || project.category === "commercial") && (project.price < filters.priceRange[0] || project.price > filters.priceRange[1])) return false;
    }

    // Area range
    if (filters.category === "all" || filters.category === "residential" || filters.category === "commercial") {
      if ((project.category === "residential" || project.category === "commercial") && (project.areaSqFt < filters.areaRange[0] || project.areaSqFt > filters.areaRange[1])) return false;
    }

    // Apartment type 
    if (filters.category === "all" || filters.category === "residential") {
      if (filters.apartmentTypes.length > 0 && (!project.apartmentType || !filters.apartmentTypes.includes(project.apartmentType))) return false;
    }

    // Building type 
    if (filters.category === "all" || filters.category === "residential") {
      if (filters.buildingTypes.length > 0 && (!project.buildingType || !filters.buildingTypes.includes(project.buildingType))) return false;
    }

    // Commercial Type
    if (filters.category === "all" || filters.category === "commercial") {
      if (filters.commercialTypes.length > 0 && (!project.commercialType || !filters.commercialTypes.includes(project.commercialType))) return false;
    }

    // Educational Filters
    if (filters.category === "all" || filters.category === "educational") {
      if (filters.institutionTypes.length > 0 && project.category === "educational" && (!project.institutionType || !filters.institutionTypes.includes(project.institutionType))) return false;
      if (filters.educationLevels.length > 0 && project.category === "educational" && (!project.educationLevel || !filters.educationLevels.includes(project.educationLevel))) return false;
    }

    // Healthcare Filters
    if (filters.category === "all" || filters.category === "healthcare") {
      if (filters.specialisations.length > 0 && (!project.specialisation || !filters.specialisations.includes(project.specialisation))) return false;
    }

    // Status
    if (filters.statuses.length > 0 && !filters.statuses.includes(project.status)) return false;

    // Block
    if (filters.blocks.length > 0 && !filters.blocks.includes(project.block)) return false;

    return true;
  });
}

