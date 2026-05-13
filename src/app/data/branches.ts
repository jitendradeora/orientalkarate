export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  phone2?: string;
  whatsapp: string;
  email: string;
  googleMapsUrl: string;
  /** Approximate coordinates for “nearest branch” (optional) */
  lat?: number;
  lng?: number;
  hours: {
    weekday: string;
    weekend: string;
  };
}

/**
 * Branch locations — live data from orientalkarate.com
 * Recognized by UAE Karate Federation and Ministry of Youth and Sports
 */
export const branches: Branch[] = [
  {
    id: "khalidiya-ho",
    name: "Khalidiya Head Office",
    lat: 24.4749,
    lng: 54.3486,
    address:
      "Next to Oryx Hotel, same building as Spar Supermarket, Al Ahlia Tower - A Block - M Floor (M2), Abu Dhabi",
    phone: "+971 (2) 677 1611",
    whatsapp: "+971 50 677 1689",
    email: "karate@emirates.net.ae",
    googleMapsUrl: "https://maps.google.com/?q=Khalidiya+Head+Office+Abu+Dhabi",
    hours: {
      weekday: "6:00 AM - 9:00 PM",
      weekend: "8:00 AM - 6:00 PM",
    },
  },
    {
    id: "khalidiya-ho",
    name: "Al Wahda Mall Branch",
    //lat: 24.4749,
    //lng: 54.3486,
    address: "Extension side 2nd Floor Above ADCB",
    phone: "+971 (2) 445 7374",
    whatsapp: "+971 50 445 7324",
    email: "karate@emirates.net.ae",
    //googleMapsUrl: "https://maps.google.com/?q=Khalidiya+Head+Office+Abu+Dhabi",
    hours: {
      weekday: "6:00 AM - 9:00 PM",
      weekend: "8:00 AM - 6:00 PM",
    },
  },
  {
    id: "mussaffa",
    name: "Mussaffa",
    lat: 24.3589,
    lng: 54.5107,
    address:
      "Near LLH Medical Centre - Mohammed Bin Zayed City, C169 Building - M Floor (M2), Abu Dhabi",
    phone: "+971 (2) 55 66 034",
    phone2: "+971 (2) 55 66 035",
    whatsapp: "+971 50 55 62 398",
    email: "karate@emirates.net.ae",
    googleMapsUrl: "https://maps.google.com/?q=Mussaffah+Abu+Dhabi",
    hours: {
      weekday: "6:00 AM - 9:00 PM",
      weekend: "8:00 AM - 6:00 PM",
    },
  },
  {
    id: "electra",
    name: "Electra Salam Corner",
    lat: 24.4971,
    lng: 54.3677,
    address:
      "Next to ADCB Head Office, same building as ADCOOP, 2nd Floor (202), Abu Dhabi",
    phone: "+971 (2) 671 7072",
    whatsapp: "+971 50 671 7607",
    email: "karate@emirates.net.ae",
    googleMapsUrl: "https://maps.google.com/?q=Electra+Salam+Corner+Abu+Dhabi",
    hours: {
      weekday: "6:00 AM - 9:00 PM",
      weekend: "8:00 AM - 6:00 PM",
    },
  },
  {
    id: "al-reem",
    name: "Al Reem Island",
    lat: 24.4861,
    lng: 54.4077,
    address:
      "Marina Square Community, Ocean Terrace (Tower 1), 4th Floor (402), Abu Dhabi",
    phone: "+971 (2) 641 6620",
    phone2: "+971 (2) 641 6624",
    whatsapp: "+971 50 64 16 780",
    email: "karate@emirates.net.ae",
    googleMapsUrl: "https://maps.google.com/?q=Al+Reem+Island+Abu+Dhabi",
    hours: {
      weekday: "6:00 AM - 9:00 PM",
      weekend: "8:00 AM - 6:00 PM",
    },
  },
  {
    id: "khalifa-street",
    name: "Khalifa Street",
    lat: 24.478,
    lng: 54.3708,
    address: "Next to WTC Mall, Al Fahim Tower - 2nd Floor (206), Abu Dhabi",
    phone: "+971 (2) 622 4181",
    whatsapp: "+971 50 622 4094",
    email: "karate@emirates.net.ae",
    googleMapsUrl: "https://maps.google.com/?q=Khalifa+Street+Abu+Dhabi",
    hours: {
      weekday: "6:00 AM - 9:00 PM",
      weekend: "8:00 AM - 6:00 PM",
    },
  },
  {
    id: "khalidiya",
    name: "Khalidiya",
    lat: 24.4632,
    lng: 54.352,
    address:
      "Opposite ADCB Al Hosn Branch and Grand Stores, Khalidiya Tower - Separate side entrance, Abu Dhabi",
    phone: "+971 (2) 621 8772",
    phone2: "+971 (2) 621 8773",
    whatsapp: "+971 50 621 8836",
    email: "karate@emirates.net.ae",
    googleMapsUrl: "https://maps.google.com/?q=Daratul+Miyah+Khalidiya+Abu+Dhabi",
    hours: {
      weekday: "6:00 AM - 9:00 PM",
      weekend: "8:00 AM - 6:00 PM",
    },
  },
  {
    id: "madina-zayed",
    name: "Madina Zayed",
    lat: 24.4088,
    lng: 54.5238,
    address:
      "Next to NMC Specialty Hospital, Zayed The First Street, Sama Tower - M1 Floor (101), Abu Dhabi",
    phone: "+971 (2) 634 5080",
    whatsapp: "+971 50 634 5058",
    email: "karate@emirates.net.ae",
    googleMapsUrl: "https://maps.google.com/?q=Madinat+Zayed+Abu+Dhabi",
    hours: {
      weekday: "6:00 AM - 9:00 PM",
      weekend: "8:00 AM - 6:00 PM",
    },
  },
  {
    id: "airport-road",
    name: "Airport Road",
    lat: 24.4856,
    lng: 54.3778,
    address: "Extension side 2nd Floor, Above ADCB, Abu Dhabi",
    phone: "+971 (2) 445 7374",
    whatsapp: "+971 50 445 7324",
    email: "karate@emirates.net.ae",
    googleMapsUrl: "https://maps.google.com/?q=Al+Wahda+Airport+Road+Abu+Dhabi",
    hours: {
      weekday: "6:00 AM - 9:00 PM",
      weekend: "8:00 AM - 6:00 PM",
    },
  },
  {
    id: "mushrif",
    name: "Mushrif Mall",
    lat: 24.4452,
    lng: 54.3934,
    address: "3rd Floor - Near Sparky's, Abu Dhabi",
    phone: "+971 (2) 546 7001",
    whatsapp: "+971 56 992 0914",
    email: "karate@emirates.net.ae",
    googleMapsUrl: "https://maps.google.com/?q=Mushrif+Mall+Abu+Dhabi",
    hours: {
      weekday: "6:00 AM - 9:00 PM",
      weekend: "8:00 AM - 6:00 PM",
    },
  },
];
