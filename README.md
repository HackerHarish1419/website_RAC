# RCREC Website

A modern, professional website for the Rotaract Club of REC (RCREC) built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with custom color palette
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Components**: Dynamic navigation, modals, and interactive elements
- **Photo Gallery**: Masonry layout with lightbox functionality
- **Contact Forms**: Functional application forms for new members
- **Team Showcase**: Dedicated team page with member profiles
- **Project Portfolio**: Comprehensive project showcase with filtering

## 🎨 Design System

### Colors
- **Primary**: #e63946 (Vibrant Red)
- **Secondary**: #1d3557 (Dark Blue)
- **Accent**: #fca311 (Gold/Yellow)
- **Background**: #f1faee (Off-white)
- **Text Dark**: #001219 (Charcoal)

### Typography
- **Sans**: Poppins (400, 600, 700)
- **Serif**: Roboto (400, 500)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   ├── TeamMemberCard.tsx
│   ├── ProjectCard.tsx
│   └── AnimatedCounter.tsx
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── StoryPage.tsx   # About/Story page
│   ├── TeamPage.tsx    # Team showcase
│   ├── ImpactPage.tsx  # Projects & events
│   ├── GalleryPage.tsx # Photo gallery
│   └── JoinUsPage.tsx  # Membership application
├── assets/             # Images and static assets
└── App.tsx            # Main app with routing
```

## 🛠️ Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Icons** - Icon library
- **React Photo Album** - Gallery layout
- **Yet Another React Lightbox** - Image lightbox
- **Vite** - Build tool

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rcrec-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📱 Pages Overview

### Home Page
- Hero section with call-to-action
- Impact statistics with animated counters
- Featured projects showcase
- Member testimonials

### Our Story
- Mission and vision statements
- Interactive timeline
- Core values presentation

### Team Page
- Faculty coordinator profile
- Tabbed interface for leadership
- Team member cards with social links

### Impact Page
- Filterable projects grid
- Project details with modals
- Impact statistics

### Gallery Page
- Masonry photo layout
- Lightbox image viewer
- Gallery statistics

### Join Us Page
- Benefits of membership
- Application form
- Contact information

## 🎯 Key Components

### Navbar
- Sticky navigation with dropdown menus
- Mobile-responsive hamburger menu
- Smooth scroll navigation

### Footer
- 4-column layout with contact info
- Social media links
- Quick navigation links

### AnimatedCounter
- Smooth number counting animations
- Triggered on scroll into view

### ProjectCard
- Hover effects and animations
- Modal with detailed information
- Image gallery integration

### TeamMemberCard
- Social media overlay on hover
- Professional profile display
- LinkedIn and Instagram integration

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: '#e63946',
  secondary: '#1d3557',
  accent: '#fca311',
  background: '#f1faee',
  'text-dark': '#001219',
}
```

### Content
- Replace sample data with actual RCREC information
- Update team member profiles and photos
- Add real project images and descriptions
- Customize contact information

### Images
- Replace placeholder images with actual RCREC photos
- Optimize images for web performance
- Add alt text for accessibility

## 📧 Contact

For questions or support regarding the RCREC website:

- **Email**: rcrec@rajalakshmi.edu.in
- **Location**: Rajalakshmi Engineering College, Chennai

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for the Rotaract Club of REC. All rights reserved.

---

**Built with ❤️ for RCREC**
