export interface ProjectItem {
  id: string;
  name: string;
  location: string;
  category: 'Residential' | 'Renovation' | 'Interior' | 'Commercial' | 'Sustainable';
  type: string;
  year: string;
  area: string;
  budget: string;
  services: string;
  tag: string;
  fallbackImage: string;
  pexelsQuery: string;
  galleryQueries: string[];
  paragraphs: string[];
}

export const PROJECTS_DATA: Record<string, ProjectItem> = {
  "haven-residence": {
    id: "haven-residence",
    name: "The Haven Residence",
    location: "Lutyens' Delhi, New Delhi",
    category: "Residential",
    type: "Luxury Residential Villa",
    year: "2024",
    area: "8,500 sq ft",
    budget: "₹3Cr – ₹5Cr",
    services: "Architecture, Interior Design, Landscape",
    tag: "Residential · 2024",
    fallbackImage: "/images/project_haven.png",
    pexelsQuery: "luxury delhi house architecture",
    galleryQueries: [
      "luxury modern villa bedroom",
      "teak wood architectural joinery detail",
      "contemporary luxury house courtyard pool"
    ],
    paragraphs: [
      "The Haven Residence is a contemporary luxury villa nestled in the heart of Lutyens' Delhi. Designed for a family of four, the home blends modern minimalism with warm natural materials — teak wood, Rajasthan marble, and hand-finished plaster walls.",
      "Every room is oriented to maximise natural light while maintaining privacy from the street. The central courtyard draws breeze through the building, functioning as a passive cooling system tailored for Delhi's hot summers.",
      "The landscape features a curated mix of native Indian plants, a reflecting pool, and an outdoor dining pavilion. Double-glazed steel-frame windows and architectural shading screens create beautiful shadow patterns throughout the day while reducing thermal load."
    ]
  },
  "echo-terrace": {
    id: "echo-terrace",
    name: "Echo Terrace",
    location: "Bandra West, Mumbai",
    category: "Interior",
    type: "Premium Apartment Renovation",
    year: "2023",
    area: "3,200 sq ft",
    budget: "₹1Cr – ₹2Cr",
    services: "Interior Design, Smart Home Integration",
    tag: "Interior · 2023",
    fallbackImage: "/images/project_echo.png",
    pexelsQuery: "mumbai sea facing apartment interior",
    galleryQueries: [
      "coastal modern living room furniture",
      "cane furniture linen wall bedroom",
      "modern luxury bathroom apartment"
    ],
    paragraphs: [
      "Echo Terrace is a sea-facing apartment in Bandra West transformed from a dated flat into a refined urban retreat. The design draws inspiration from Mumbai's coastal energy — light fabrics, cane furniture, Kota stone floors, and expansive sliding doors that open the living space to the Arabian Sea breeze.",
      "Custom joinery throughout keeps the space clutter-free while maximising storage in a compact footprint. Acoustic panelling is seamlessly hidden behind textured linen wall coverings, creating a quiet sanctuary away from the city noise.",
      "The lighting is fully automated to match the natural circadian rhythm, shifting from cool daylight to warm evening tones. Every piece of furniture was custom crafted by local artisans using sustainable plantation timber."
    ]
  },
  "verdant-house": {
    id: "verdant-house",
    name: "Verdant House",
    location: "Whitefield, Bengaluru",
    category: "Sustainable",
    type: "Modern Family Home",
    year: "2024",
    area: "5,800 sq ft",
    budget: "₹2Cr – ₹3Cr",
    services: "Architecture, Landscape, 3D Visualization",
    tag: "Sustainable · 2024",
    fallbackImage: "/images/project_main.png",
    pexelsQuery: "exposed concrete house courtyard garden",
    galleryQueries: [
      "green roof modern sustainable house",
      "concrete courtyard with trees architecture",
      "modern living room glass sliding doors courtyard"
    ],
    paragraphs: [
      "Verdant House is a family home in Whitefield designed around a central courtyard garden — a nod to traditional Karnataka home layouts reimagined for contemporary living.",
      "The structure uses exposed concrete, reclaimed wood, and a green roof that reduces indoor temperatures by 4–5 degrees. Large glass walls slide away to merge the indoor living room with the courtyard, creating a continuous semi-outdoor pavilion.",
      "Solar panels and rainwater harvesting make it one of ARKO's most sustainable residential projects to date. The home generates 80% of its own power and recycles greywater for the extensive vertical gardens."
    ]
  },
  "the-narayan-villa": {
    id: "the-narayan-villa",
    name: "The Narayan Villa",
    location: "Jubilee Hills, Hyderabad",
    category: "Residential",
    type: "Luxury Residential Villa",
    year: "2023",
    area: "7,200 sq ft",
    budget: "₹4Cr – ₹6Cr",
    services: "Architecture, Interior, Landscape",
    tag: "Residential · 2023",
    fallbackImage: "/images/project_haven.png",
    pexelsQuery: "luxury deccan villa hyderabad",
    galleryQueries: [
      "traditional deccan style interior",
      "tandur stone flooring design",
      "modern villa exterior garden swimming pool"
    ],
    paragraphs: [
      "The Narayan Villa sits atop one of Jubilee Hills' most sought-after plots. Designed for a multigenerational family, the home incorporates a private guest wing, a rooftop terrace with city views, and a traditional pooja room finished in Tandur stone and hand-carved teak. The interiors balance the family's love of classical Indian art with clean contemporary architecture.",
      "The layout incorporates deep overhangs, dynamic jaali work for ventilation, and locally sourced Tandur stone floors that stay cool during Hyderabad's intense summer seasons.",
      "Vast floor-to-ceiling windows create a smooth transition between the minimal interior spaces and the expansive landscaping, showcasing classical Indian arts within a modern structural frame."
    ]
  },
  "skyline-loft": {
    id: "skyline-loft",
    name: "Skyline Loft",
    location: "Koregaon Park, Pune",
    category: "Renovation",
    type: "Premium Penthouse Renovation",
    year: "2023",
    area: "2,800 sq ft",
    budget: "₹80L – ₹1.2Cr",
    services: "Renovation, Interior Design, Smart Home",
    tag: "Renovation · 2023",
    fallbackImage: "/images/project_echo.png",
    pexelsQuery: "industrial penthouse renovation interior",
    galleryQueries: [
      "exposed concrete ceiling interior loft",
      "custom steel shelving living room",
      "modern luxury bathroom warm lighting"
    ],
    paragraphs: [
      "Skyline Loft is a 2,800 sq ft penthouse renovation in Pune's most vibrant neighbourhood. The brief was clear — strip it back, open it up, and make it feel alive. Exposed concrete ceilings, custom steel shelving, and warm Edison lighting contrast with soft linen sofas and handwoven Dhurrie rugs. A fully integrated smart home system controls lighting, climate, and security from a single panel.",
      "This space integrates industrial raw finishes with soft, warm fabrics and natural materials. Double height ceilings and structural glazing frame spectacular city views.",
      "Acoustic paneling is built directly behind the warm linen cladding, keeping the loft isolated from Pune's urban buzz while offering premium sound design inside."
    ]
  },
  "the-raipur-farmhouse": {
    id: "the-raipur-farmhouse",
    name: "The Raipur Farmhouse",
    location: "Naya Raipur, Chhattisgarh",
    category: "Residential",
    type: "Sprawling Stone Farmhouse",
    year: "2022",
    area: "11,000 sq ft",
    budget: "₹5Cr – ₹8Cr",
    services: "Architecture, Landscape, 3D Visualization",
    tag: "Residential · 2022",
    fallbackImage: "/images/project_main.png",
    pexelsQuery: "luxury modern sandstone farmhouse exterior",
    galleryQueries: [
      "sandstone wall rustic modern interior",
      "natural swimming pond landscape",
      "mango orchard farmhouse garden"
    ],
    paragraphs: [
      "At 11,000 sq ft, The Raipur Farmhouse is ARKO's largest residential project to date. Set on 2 acres of land, the home is built almost entirely from local Chhattisgarh sandstone and reclaimed timber. A large central courtyard anchors the home, with all major rooms oriented inward for privacy. The landscape features a kitchen garden, mango orchard, and a natural swimming pond.",
      "Local red sandstone has been finished by hand to line the structural columns, keeping the walls organic and deeply grounded in Raipur's geological context.",
      "Passive ventilation screens and thermal insulation tiles allow the farmhouse to reduce cooling requirements by over 40%, creating an eco-friendly sanctuary."
    ]
  },
  "coastal-retreat": {
    id: "coastal-retreat",
    name: "Coastal Retreat",
    location: "Calangute, Goa",
    category: "Residential",
    type: "Beachside Tropical Villa",
    year: "2024",
    area: "4,400 sq ft",
    budget: "₹2.5Cr – ₹3.5Cr",
    services: "Architecture, Interior, Landscape",
    tag: "Residential · 2024",
    fallbackImage: "/images/project_haven.png",
    pexelsQuery: "modern tropical beach house goa laterite",
    galleryQueries: [
      "tropical modern pool deck lounging",
      "lime plaster wall living room goa",
      "cross ventilated high ceiling bedroom"
    ],
    paragraphs: [
      "Coastal Retreat is a four-bedroom villa designed for a Mumbai-based family seeking a permanent Goa residence. The architecture responds directly to the coastal climate — deep overhanging roofs, cross-ventilated rooms, and a material palette of laterite stone, reclaimed wood, and lime plaster. The pool deck and outdoor living area are designed as the heart of the home, blurring the line between inside and outside.",
      "Local red laterite blocks form the load-bearing columns, giving the structure a rustic, grounded Goan aesthetic that ages beautifully with the monsoon season.",
      "Lime-finished walls and high cathedral ceilings ensure optimal moisture control, maintaining a cool interior climate naturally without relying on heavy air conditioning."
    ]
  },
  "the-amber-house": {
    id: "the-amber-house",
    name: "The Amber House",
    location: "Civil Lines, Jaipur",
    category: "Renovation",
    type: "Heritage Haveli Restoration",
    year: "2022",
    area: "6,100 sq ft",
    budget: "₹1.5Cr – ₹2.5Cr",
    services: "Renovation, Interior Design",
    tag: "Renovation · 2022",
    fallbackImage: "/images/project_echo.png",
    pexelsQuery: "restored jaipur haveli architecture sandstone",
    galleryQueries: [
      "rajasthani jaali screen detail",
      "traditional hand painted tile bedroom",
      "heritage haveli courtyard garden"
    ],
    paragraphs: [
      "The Amber House is a 100-year-old haveli in Jaipur's Civil Lines neighbourhood that ARKO was commissioned to restore and reimagine. Original Rajasthani jaali screens, hand-painted tiles, and carved sandstone archways were carefully preserved and restored. New interventions — a modern kitchen, updated bathrooms, and a rooftop garden — were designed in sympathy with the existing fabric, using matching materials sourced from the same local craftsmen.",
      "Jaisalmer yellow sandstone and white Makrana marble are used across the courtyard floors to replicate traditional heritage flows while establishing solid longevity.",
      "Bespoke lime plastering on the walls matches the original lime formulation, allowing the building to breathe and regulate interior humidity throughout the seasons."
    ]
  },
  "greens-apartment": {
    id: "greens-apartment",
    name: "Greens Apartment",
    location: "Golf Course Road, Gurugram",
    category: "Interior",
    type: "Luxury Minimal Apartment",
    year: "2023",
    area: "2,400 sq ft",
    budget: "₹60L – ₹90L",
    services: "Interior Design, Smart Home",
    tag: "Interior · 2023",
    fallbackImage: "/images/project_main.png",
    pexelsQuery: "luxury modern minimal apartment interior gurugram",
    galleryQueries: [
      "luxury minimal bedroom warm beige",
      "modular kitchen hand glazed tiles",
      "custom walnut joinery living room"
    ],
    paragraphs: [
      "Greens Apartment is a 2,400 sq ft luxury flat finished entirely in ARKO's signature earth tone palette. Warm beige walls, Kota stone floors, cane pendant lights, and custom walnut joinery throughout. The kitchen features hand-glazed Jaipur tiles and matte black fittings. Every piece of furniture was custom designed and locally manufactured in collaboration with Gurugram-based artisan workshops.",
      "The flooring is composed of grey Kota stone slabs, polished to a satin finish to offer a cool, smooth tactile experience underfoot.",
      "Bespoke walnut paneling hides structural storage, keeping the spaces clean, minimal, and perfectly aligned with urban luxury living requirements."
    ]
  }
};
