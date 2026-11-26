// Central wedding data configuration.
// Edit this file to update any content shown across the site — every page
// reads from here, so names/dates/venue changes only need to happen once.

export type Lang = "en" | "te";

export interface Bilingual {
  en: string;
  te: string;
}

export const weddingData = {
  couple: {
    groomShort: { en: "Siva Prakash", te: "శివ ప్రకాష్" },
    groomFull: { en: "Siva Prakash", te: "శివ ప్రకాష్" },
    groomPrefix: { en: "Chi.", te: "చి." },
    groomQualification: { en: "M.B.A.", te: "M.B.A." },
    groomParents: {
      en: "Eldest son of Smt. Rayudu Manga, w/o Sri Pandurangarao (Late)",
      te: "శ్రీమతి రాయుడు మంగ (w/o. శ్రీ పాండురంగారావు (లేటు)) గారి జ్యేష్ఠ కుమారుడు",
    },

    brideShort: { en: "Satya Bhavani", te: "సత్యభవాని" },
    bridePrefix: { en: "Chi. La. Sow.", te: "చి.ల.సౌ." },
    brideQualification: { en: "M.C.A.", te: "M.C.A." },
    brideParents: {
      en: "Only daughter of Sri Mattaparti Upendra & Srimathi Kumari, Madhavapatnam",
      te: "మాధవపట్నం వాస్తవ్యులు శ్రీ మట్టపర్తి ఉపేంద్ర, శ్రీమతి కుమారి దంపతుల ఏకైక కుమార్తె",
    },
  },

  families: {
    groomFamily: {
      en: "Smt. Rayudu Manga, w/o Sri Pandurangarao (Late)",
      te: "శ్రీమతి రాయుడు మంగ (w/o. శ్రీ పాండురంగారావు (లేటు))",
    },
    brideFamily: {
      en: "Sri Mattaparti Upendra & Srimathi Kumari, Madhavapatnam",
      te: "శ్రీ మట్టపర్తి ఉపేంద్ర, శ్రీమతి కుమారి దంపతులు, మాధవపట్నం",
    },
  },

  // ISO datetime used for the countdown. IST = +05:30.
  weddingDateTimeISO: "2026-12-12T18:00:00+05:30",
  weddingDateDisplay: { en: "Saturday, 12th December 2026", te: "ది. 12-12-2026 శనివారం" },

  // Astrological wedding moment. The invitation's wording ("Saturday night
  // 4:06, dawning as Sunday") places the actual muhurtham in the early hours
  // of Sunday, 13th December — so it is dated as Sunday here.
  muhurtham: {
    date: { en: "Sunday, 13th December 2026", te: "ది. 13-12-2026 ఆదివారం" },
    time: { en: "4:06 AM", te: "తెల్లవారుజామున గం. 4-06" },
    note: { en: "Sravana Nakshatra · Tula Lagnam", te: "శ్రవణా నక్షత్రం · తులా లగ్నం" },
  },

  dinner: {
    date: { en: "Saturday, 12th December 2026", te: "ది. 12-12-2026 శనివారం" },
    time: { en: "6:00 PM onwards", te: "సాయంత్రం 6 గంటల నుండి" },
    note: { en: "At the Kalyana Vedika", te: "కళ్యాణ వేదికవద్ద" },
  },

  venue: {
    name: { en: "C.K. Convention Hall", te: "సి.కె. కన్వెన్షన్ హాల్" },
    address: {
      en: "Darga Center, Kandrakota Road, Chepala Market Edurvidhi, Peddapuram",
      te: "దర్గా సెంటర్, కాండ్రకోట రోడ్, చేపల మార్కెట్ ఎదురువీధి, పెద్దాపురం",
    },
    lat: 17.081958770751953,
    lng: 82.13414001464844,
    mapsViewUrl:
      "https://www.google.com/maps?q=17.081958770751953,82.13414001464844&z=17&hl=en",
    mapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=17.081958770751953,82.13414001464844",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=17.081958770751953,82.13414001464844&z=17&output=embed",
  },

  contact: {
    phone: "08852-241503",
  },

  location: { en: "PEDDAPURAM", te: "పెద్దాపురం" },

  // Authentic wording adapted from the printed Telugu invitation (pages 3-4).
  invitationText: {
    blessing: { en: "Sri Rasthu · Subhamasthu · Avighnamasthu", te: "శ్రీరస్తు · శుభమస్తు · అవిఘ్నమస్తు" },
    heading: { en: "The Wedding of", te: "వివాహా మహోత్సవం" },
    invite: {
      en: "We solicit your gracious presence with family at the auspicious occasion of the marriage of our beloved children.",
      te: "మా అమ్మాయి, అబ్బాయిల వివాహ శుభ సందర్భంగా, మీరు కుటుంబ సమేతంగా విచ్చేసి వధూవరులను ఆశీర్వదించవలసిందిగా సవినయంగా కోరుతున్నాము.",
    },
    withWord: { en: "with", te: "తో" },
    closingNote: {
      en: "Astrologers have fixed this auspicious hour for the wedding. Kindly come with family and relatives, bless the new couple with your hands, accept our hospitality, and make us happy.",
      te: "శుభ వివాహము జరిపించుటకు దైవజ్ఞులు నిశ్చయించిరి. గాన తమరు సకుటుంబ బంధుమిత్ర సపరివార సమేతంగా విచ్చేసి, మీ అమృత హస్తాలతో నూతన వధూవరులను ఆశీర్వదించి, మా ఆతిథ్యము స్వీకరించి, మమ్ము ఆనందింపజేయ కోరుచున్నాము.",
    },
    yours: { en: "YOURS", te: "ఇట్లు" },
    compliments: { en: "With best compliments from: Near & Dear", te: "బంధుమిత్రుల ఆభినందనలతో" },
  },

  welcome: {
    heading: { en: "Welcome", te: "స్వాగతం" },
    body: {
      en: "With the blessings of God and our elders, we joyfully invite you to share in the beginning of our new life together. Your presence and good wishes will make our celebration complete.",
      te: "దేవుని మరియు పెద్దల ఆశీర్వాదంతో, మా నూతన జీవితారంభాన్ని మీతో పంచుకోవాలని సంతోషంగా ఆహ్వానిస్తున్నాము. మీ సమక్షం, శుభాకాంక్షలు మా వేడుకను పరిపూర్ణం చేస్తాయి.",
    },
  },

  aboutCouple: {
    heading: { en: "About the Couple", te: "వధూవరుల గురించి" },
    groomLabel: { en: "THE GROOM", te: "వరుడు" },
    brideLabel: { en: "THE BRIDE", te: "వధువు" },
    footerNote: {
      en: "Two families, one celebration — united with love and blessings.",
      te: "రెండు కుటుంబాలు, ఒకే వేడుక — ప్రేమతో, ఆశీర్వాదాలతో ఏకమవుతున్నాయి.",
    },
  },

  familiesSection: {
    heading: { en: "Our Families", te: "మా కుటుంబాలు" },
    groomFamilyLabel: { en: "GROOM'S FAMILY", te: "వరుని కుటుంబం" },
    brideFamilyLabel: { en: "BRIDE'S FAMILY", te: "వధువు కుటుంబం" },
  },

  eventsSection: {
    heading: { en: "Wedding Events", te: "వేడుకలు" },
    sumuhurthamTitle: { en: "Sumuhurtham", te: "సుముహూర్తం" },
    dinnerTitle: { en: "Dinner", te: "విందు" },
  },

  gallerySection: {
    heading: { en: "Gallery", te: "ఫోటోలు" },
  },

  venueSection: {
    heading: { en: "Venue", te: "వేదిక" },
    openInMaps: { en: "Open in Maps", te: "మ్యాప్స్‌లో చూడండి" },
    getDirections: { en: "Get Directions", te: "దారి చూపించు" },
  },

  closing: {
    heading: { en: "With Warm Regards", te: "ప్రేమపూర్వక శుభాకాంక్షలతో" },
    body: {
      en: "We solicit your gracious presence with family at the auspicious occasion of the marriage. Your blessings are the greatest gift.",
      te: "శుభ వివాహ సందర్భంగా, మీరు కుటుంబ సమేతంగా విచ్చేయవలసిందిగా కోరుతున్నాము. మీ ఆశీర్వాదమే మాకు గొప్ప కానుక.",
    },
  },

  nav: {
    home: { en: "Home", te: "హోమ్" },
    ourStory: { en: "Our Story", te: "మా కథ" },
    events: { en: "Events", te: "వేడుక" },
    gallery: { en: "Gallery", te: "ఫోటోలు" },
    venue: { en: "Venue", te: "వేదిక" },
    invitation: { en: "Invitation", te: "ఆహ్వానం" },
  },

  gate: {
    blessing: { en: "Sri Rasthu", te: "శ్రీ రస్తు" },
    title: { en: "Wedding Invitation", te: "వివాహ ఆహ్వానం" },
    tapToOpen: { en: "Tap to Open", te: "తెరవడానికి నొక్కండి" },
  },

  gallery: [
    { src: "photo-1.jpg", alt: "Bride holding ceremonial coconut" },
    { src: "photo-2.jpg", alt: "Bride with hands folded in blessing" },
    { src: "photo-4.jpg", alt: "Groom and bride seated with garlands" },
    { src: "photo-5.jpg", alt: "Groom and bride standing close" },
    { src: "photo-6.jpg", alt: "Groom and bride full length portrait" },
    { src: "photo-7.jpg", alt: "Groom handing a gift to the bride" },
  ],
} as const;

export function pick(b: Bilingual, lang: Lang): string {
  return b[lang];
}
