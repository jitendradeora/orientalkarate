# Oriental Karate Website

A modern, responsive, and conversion-focused website for Oriental Karate built with React, TypeScript, and Tailwind CSS.

## Features

### Pages
- **Home Page**: Hero section, dojo introduction, special offers, animated counters, branch locations, gallery preview, Google reviews, and contact preview
- **About Us**: History, philosophy, values, achievements, instructor team, and milestones
- **What is Kobudo**: Educational page about Kobudo weapons training
- **Join Us**: Membership plans, class schedule, fee structure, and registration form
- **Gallery**: Instagram-integrated photo gallery
- **Booking System**: Multi-step booking flow (Select Branch → Class → Date → Time → Confirmation)
- **Instructors**: Instructor profiles with certifications and specialties
- **Benefits**: Physical, mental, and lifestyle benefits of karate
- **Karate for Kids**: Dedicated kids program page with safety measures and parent testimonials
- **FAQ**: Accordion-style frequently asked questions
- **Contact**: Contact form, branch information, and Google Maps integration

### Key Features
- **Mobile-First Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Scroll reveal animations, hover effects, and page transitions using Motion
- **Sticky Navigation**: Fixed navigation bar that becomes visible on scroll
- **Floating CTA**: Persistent "Book Free Trial" button on all pages
- **AI Chat Assistant**: 24/7 chat assistant for instant help
- **Animated Counters**: Scroll-triggered animated statistics
- **Review Slider**: Branch-specific Google Reviews with navigation
- **Instagram Integration**: Auto-syncing gallery from Instagram
- **Custom Loading States**: Skeleton loading animations

### Design
- **Color Palette**: Black, Red (#eb0339), Gold (#FFD700), White
- **Typography**: Bold, clean, and modern
- **Martial Arts Theme**: Traditional yet contemporary design

## Tech Stack

- **React 18.3.1**: Frontend framework
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first styling
- **React Router**: Client-side routing
- **Motion (Framer Motion)**: Smooth animations
- **Lucide React**: Icon library
- **Radix UI**: Accessible component primitives

## Getting Started

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
/src
  /app
    /components
      - Layout.tsx
      - Navigation.tsx
      - Footer.tsx
      - FloatingCTA.tsx
      - ChatAssistant.tsx
      - AnimatedCounter.tsx
      - ReviewSlider.tsx
      - KarateLoader.tsx
      /ui (Radix UI components)
    /pages
      - Home.tsx
      - About.tsx
      - Kobudo.tsx
      - JoinUs.tsx
      - Gallery.tsx
      - Booking.tsx
      - Instructors.tsx
      - Benefits.tsx
      - KidsProgram.tsx
      - FAQ.tsx
      - Contact.tsx
      - NotFound.tsx
    - App.tsx
    - routes.tsx
  /styles
    - index.css
    - theme.css
    - tailwind.css
    - fonts.css
```

## Key Components

### Navigation
- Sticky header with smooth transitions
- Mobile-responsive menu
- Active link highlighting

### Booking System
Multi-step booking flow with validation:
1. Select Branch (with prerequisites display)
2. Select Class Type (Kids/Adults)
3. Select Date (next 6 days available)
4. Select Time Slot
5. Confirmation with WhatsApp notification message

### Review Slider
- Branch dropdown selector
- 4 visible review cards
- Previous/Next navigation (moves 1 card at a time)
- Smooth animations

### Animated Counters
- Intersection Observer for scroll-triggered animations
- Smooth counting animation
- Customizable duration and formatting

## SEO Optimization

- Semantic HTML structure
- Descriptive meta tags
- Optimized images from Unsplash
- Fast loading with code splitting
- Accessible components

## Performance

- Lazy loading for images
- Optimized animations
- Efficient state management
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

All rights reserved © 2026 Oriental Karate

## Contact

For questions or support, please contact:
- Email: info@orientalkarate.com
- Phone: +1 (234) 567-8900
