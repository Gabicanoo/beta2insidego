// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'apartments', label: 'Apartments' },
  { href: '/', key: 'destinations', label: 'Destinations' },
  { href: '/', key: 'about', label: 'About' },
  { href: '/', key: 'contact_us', label: 'Contact' },
];

export const APARTMENTS = [
  {
    name: 'Casa Del Mar Penthouse',
    location: 'Barcelona, Spain',
    price: '$560',
    guests: '4 guests',
    bedrooms: '2 bedrooms',
    rating: '4.98',
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Old Port Grand Suite',
    location: 'Ibiza, Spain',
    price: '$720',
    guests: '6 guests',
    bedrooms: '3 bedrooms',
    rating: '4.95',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'La Brisa Residence',
    location: 'Marbella, Spain',
    price: '$680',
    guests: '5 guests',
    bedrooms: '3 bedrooms',
    rating: '4.93',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Cycladic Horizon Loft',
    location: 'Mykonos, Greece',
    price: '$640',
    guests: '4 guests',
    bedrooms: '2 bedrooms',
    rating: '4.96',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
  },
];

export const DESTINATIONS = ['Barcelona', 'Ibiza', 'Marbella', 'Mykonos', 'Mallorca'];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'INSIDEGO',
    links: [
      'Luxury Apartments',
      'Destinations',
      'About Us',
      'Privacy Policy',
      'Terms',
    ],
  },
  {
    title: 'Destinations',
    links: ['Barcelona', 'Ibiza', 'Marbella', 'Mykonos', 'Mallorca'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact',
  links: [
    { label: 'Reservations', value: '+34 900 123 456' },
    { label: 'Email', value: 'hello@insidego.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};
