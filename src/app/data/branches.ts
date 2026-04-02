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
    address: "H.O Khalidiya, P.O. Box 70236, Abu Dhabi",
    phone: "+971 (2) 677 1611",
    phone2: "+971 (2) 677 8878",
    whatsapp: "+971 50 677 16 89",
    email: "karate@emirates.net.ae",
    googleMapsUrl: "https://maps.google.com/?q=Khalidiya+Head+Office+Abu+Dhabi",
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
    address: "Mussaffah, P.O. Box 70236, Abu Dhabi",
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
    address: "Next to ADCB Bank, Co-op Building, 202, P.O. Box 70236, Abu Dhabi",
    phone: "+971 (2) 67 17 072",
    phone2: "+971 (2) 67 17 071",
    whatsapp: "+971 50 67 17 607",
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
    address: "Al Reem, P.O. Box 70236, Abu Dhabi",
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
    address: "Khalifa Street Branch, P.O. Box 70236, Abu Dhabi",
    phone: "+971 (2) 622 41 82",
    phone2: "+971 (2) 622 41 81",
    whatsapp: "+971 50 622 40 94",
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
    address: "Daratul Miyah, P.O. Box 70236, Abu Dhabi",
    phone: "+971 (2) 621 8772",
    phone2: "+971 (2) 621 8773",
    whatsapp: "+971 50 621 88 36",
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
    address: "Madinat Zayed Branch, P.O. Box 70236, Abu Dhabi",
    phone: "+971 (2) 634 50 80",
    phone2: "+971 (2) 633 81 79",
    whatsapp: "+971 50 634 50 58",
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
    address: "Al Wahda, P.O. Box 70236, Abu Dhabi",
    phone: "+971 (2) 44 57 375",
    phone2: "+971 (2) 44 57 374",
    whatsapp: "+971 50 44 57 324",
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
    address: "Mushrif Mall, P.O. Box 70236, Abu Dhabi",
    phone: "+971 (2) 54 67 001",
    whatsapp: "+971 56 99 20 914",
    email: "karate@emirates.net.ae",
    googleMapsUrl: "https://maps.google.com/?q=Mushrif+Mall+Abu+Dhabi",
    hours: {
      weekday: "6:00 AM - 9:00 PM",
      weekend: "8:00 AM - 6:00 PM",
    },
  },
];
