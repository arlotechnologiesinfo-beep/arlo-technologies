# Arlo Technologies - Creative Portfolio Template

A comprehensive, modern Next.js 16 Creative Portfolio template with a beautiful homepage and complete inner pages. Built with React 19, TypeScript, Tailwind CSS 4, and cutting-edge web technologies for creative professionals, agencies, and portfolio websites.

![Next.js](https://img.shields.io/badge/Next.js-16.0.8-black)
![React](https://img.shields.io/badge/React-19.2.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green)
![Lenis](https://img.shields.io/badge/Lenis-1.3.8-orange)

## 📦 What's Included

- ✅ **Complete Source Code** - Full Next.js 16 project
- ✅ **Beautiful Homepage** - Modern portfolio homepage with hero, projects, services, and more
- ✅ **40+ Inner Pages** - About, blog, services, team, case studies, career, and more
- ✅ **Reusable Components** - Modular React components organized by feature
- ✅ **Markdown Content** - Blog posts, services, team members, case studies, and whitepapers
- ✅ **Documentation** - Comprehensive setup guide
- ✅ **TypeScript Support** - Full type safety throughout the project

## ✨ Features

### 🏠 **Modern Homepage**

- Beautiful hero section with smooth animations
- Projects showcase section
- Services overview
- About section
- Process/workflow section
- Testimonials section
- Blog preview section
- Call-to-action sections

### 📄 **Complete Page Collection**

- **Authentication**: Login and Signup pages
- **About**: Company story, mission, vision, and team pages
- **Blog**: Blog listing with pagination and detailed blog posts (markdown support)
- **Services**: Service listings and detailed service pages (markdown support)
- **Team**: Team listing and individual team member pages (markdown support)
- **Case Studies**: Case study listings and detailed case study pages (markdown support)
- **Career**: Career listings and detailed job pages (markdown support)
- **Customer**: Customer testimonials and success stories
- **Contact**: Contact forms with integrated maps
- **Legal**: Privacy policy, terms & conditions, GDPR, refund policy, affiliate policy
- **Support**: FAQ, documentation, tutorial, and help pages
- **Additional Pages**: Analytics, features, pricing, testimonials, whitepapers, glossary, and more

### 🎨 **Modern Design System**

- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: GSAP and Lenis for premium interactions
- **Interactive Components**: Sliders, modals, and dynamic elements
- **Professional UI**: Clean, modern design with consistent spacing

### ⚡ **Performance & Developer Experience**

- **Next.js 16**: Latest features with Turbopack support
- **TypeScript**: Full type safety and better developer experience
- **Component Architecture**: Reusable, modular components organized by feature
- **Markdown Support**: Content management with gray-matter for blogs, services, team, and more
- **Code Quality**: ESLint, Prettier, and Husky pre-commit hooks
- **Conventional Commits**: Structured commit messages with Commitlint

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.0 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Custom component library
- **Animations**: GSAP 3.13.0, Lenis 1.3.8 smooth scrolling
- **Maps**: Leaflet with React integration
- **Content**: Markdown support with gray-matter
- **Theme**: next-themes for dark/light mode
- **Development**: ESLint, Prettier, Husky, lint-staged

## 📋 Prerequisites

Before getting started, ensure you have:

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Clone or Download

1. **Clone** the repository or **download** the template files
2. **Navigate** to the project folder:

```bash
cd creative-portfolio-ns-next
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### 3. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
creative-portfolio-ns-next/
├── public/                     # Static assets
│   ├── images/                # Images organized by components
│   └── fonts/                 # Custom font files
├── src/
│   ├── app/                  # Next.js 16 App Router
│   │   ├── about/            # About page
│   │   ├── blog/             # Blog listing and [slug] pages
│   │   ├── services/         # Services listing and [slug] pages
│   │   ├── our-services/     # Our services [slug] pages
│   │   ├── team/             # Team listing and [slug] pages
│   │   ├── case-study/       # Case study listing and [slug] pages
│   │   ├── career/           # Career listing and [slug] pages
│   │   ├── customer/         # Customer listing and [slug] pages
│   │   ├── whitepaper/       # Whitepaper listing and [slug] pages
│   │   ├── login/            # Login page
│   │   ├── signup/           # Signup page
│   │   ├── pricing/          # Pricing page
│   │   ├── contact-us/       # Contact page
│   │   ├── faq/              # FAQ page
│   │   ├── support/          # Support page
│   │   ├── documentation/    # Documentation page
│   │   ├── privacy-policy/   # Privacy policy page
│   │   ├── terms-conditions/ # Terms & conditions page
│   │   ├── gdpr/             # GDPR page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout component
│   │   └── page.tsx          # Homepage
│   ├── components/           # React components
│   │   ├── home/             # Homepage components (Hero, About, Projects, etc.)
│   │   ├── about/            # About page components
│   │   ├── blog/             # Blog listing components
│   │   ├── blog-details/     # Blog detail page components
│   │   ├── services/         # Services page components
│   │   ├── service-details/  # Service detail page components
│   │   ├── team/             # Team page components
│   │   ├── team-details/     # Team detail page components
│   │   ├── case-study/       # Case study components
│   │   ├── career/           # Career page components
│   │   ├── customer/         # Customer page components
│   │   ├── whitepaper/       # Whitepaper components
│   │   ├── authentication/   # Login/signup components
│   │   ├── pricing/          # Pricing page components
│   │   ├── contact-page/     # Contact page components
│   │   ├── faq/              # FAQ components
│   │   ├── shared/           # Reusable shared components
│   │   │   ├── navbar/       # Navigation components
│   │   │   ├── footer/       # Footer components
│   │   │   ├── mobile-menu/  # Mobile menu components
│   │   │   └── ...           # Other shared components
│   │   ├── ui/               # Core UI components
│   │   └── animation/        # Animation components
│   ├── context/              # React contexts
│   │   ├── MobileMenuContext.tsx
│   │   ├── ModalContext.tsx
│   │   └── TabContext.tsx
│   ├── data/                 # Static data and content
│   │   ├── blogs/            # Markdown blog posts
│   │   ├── services/         # Markdown service descriptions
│   │   ├── team/             # Markdown team member data
│   │   ├── case-study/       # Markdown case studies
│   │   ├── career/           # Markdown career listings
│   │   ├── customer/         # Markdown customer testimonials
│   │   ├── whitepaper/       # Markdown whitepapers
│   │   ├── json/             # JSON data files
│   │   ├── achievements.ts   # Achievements data
│   │   └── faq.ts            # FAQ data
│   ├── hooks/                # Custom React hooks
│   ├── styles/               # CSS modules and styles
│   │   ├── variables.css     # CSS variables
│   │   ├── base.css          # Base styles
│   │   ├── typography.css    # Typography styles
│   │   └── ...               # Other style files
│   ├── interface/            # TypeScript type definitions
│   ├── icons/                # Icon components
│   └── utils/                # Utility functions
│       ├── generateMetaData.ts
│       ├── getMarkDownContent.ts
│       ├── getMarkDownData.ts
│       └── ...
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration (Tailwind CSS 4)
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🎯 Available Pages

### Homepage

- `/` - Main homepage with hero, projects, services, testimonials, and blog sections

### Core Pages

- **Authentication**: `/login`, `/signup`
- **About**: `/about`
- **Blog**: `/blog` (listing), `/blog/[slug]` (individual blog posts)
- **Services**: `/services` (listing), `/services/[slug]` (service details), `/our-services/[slug]` (our services details)
- **Team**: `/team` (listing), `/team/[slug]` (team member details)
- **Case Studies**: `/case-study` (listing), `/case-study/[slug]` (case study details)
- **Career**: `/career` (listing), `/career/[slug]` (job details)
- **Customer**: `/customer` (listing), `/customer/[slug]` (customer details)
- **Whitepaper**: `/whitepaper` (listing), `/whitepaper/[slug]` (whitepaper details)
- **Pricing**: `/pricing`
- **Contact**: `/contact-us`
- **Features**: `/features`
- **Testimonials**: `/testimonial`
- **Success Stories**: `/success-stories`
- **Process**: `/process`
- **Why Choose Us**: `/why-choose-us`
- **Use Case**: `/use-case`
- **Analytics**: `/analytics`
- **Integration**: `/integration`

### Support & Resources

- **FAQ**: `/faq`
- **Support**: `/support`
- **Documentation**: `/documentation`
- **Tutorial**: `/tutorial`
- **Glossary**: `/glossary` (listing), `/glossary/[slug]` (glossary term details)
- **Changelog**: `/changelog`
- **Download**: `/download`
- **Press**: `/press`
- **Brand Kit**: `/brandkit`
- **Our Manifesto**: `/our-manifesto`

### Legal & Policies

- **Privacy Policy**: `/privacy-policy`
- **Terms & Conditions**: `/terms-conditions`
- **GDPR**: `/gdpr`
- **Refund Policy**: `/refund-policy`
- **Affiliate Policy**: `/affiliate-policy`
- **Legal Notice**: `/legal`
- **Security**: `/security`
- **Affiliates**: `/affiliates`
- **Referral Program**: `/referral-program`

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Code Quality Tools

This project uses several tools to maintain code quality:

- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files only
- **Commitlint**: Enforce conventional commit messages

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
feat: add new homepage variation.
fix: resolve responsive layout issue.
docs: update installation guide.
```

## 🎨 Customization

### Theme Customization

1. **Colors**: Edit `src/styles/variables.css` for color schemes and CSS variables
2. **Typography**: Modify font settings in `src/utils/font.ts`
3. **Components**: Customize components in `src/components/ui/` and feature-specific component folders
4. **Styles**: Update CSS files in `src/styles/` for base styles, typography, buttons, badges, etc.
5. **Tailwind CSS**: Tailwind CSS 4 is configured via PostCSS - edit `postcss.config.mjs` if needed
6. **Dark/Light Mode**: Theme switching is handled by next-themes in the root layout

### Adding New Pages

Here's a complete example of creating a new "Portfolio" page:

#### Step 1: Create the Page Route

Create `src/app/portfolio/page.tsx`:

```tsx
import Portfolio from '@/components/portfolio/Portfolio';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata('Portfolio - Arlo Technologies', 'Showcase of our amazing projects and work'),
};

const PortfolioPage = () => {
  return <Portfolio />;
};

export default PortfolioPage;
```

Note: The Navbar and Footer are already included in the root layout, so you don't need to add them to individual pages.

#### Step 2: Create Page Components

Create `src/components/portfolio/Portfolio.tsx`:

```tsx
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';

const portfolioData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/images/portfolio/project-1.jpg',
    description: 'Modern e-commerce solution built with Next.js',
  },
  // Add more portfolio items...
];

const Portfolio = () => {
  return (
    <section className="pt-[100px] pb-[100px]">
      <div className="main-container">
        <div className="mb-14 space-y-3 text-center">
          <RevealAnimation delay={0.3}>
            <h1 className="mx-auto max-w-[742px]">Our Portfolio</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[482px]">Discover our latest projects and creative solutions</p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {portfolioData.map((item, index) => (
            <RevealAnimation delay={0.5 + index * 0.1} key={item.id}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="bg-background-2 dark:bg-background-5 overflow-hidden rounded-[20px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="h-[250px] w-full object-cover"
                  />
                  <div className="space-y-3 p-6">
                    <span className="text-primary text-sm">{item.category}</span>
                    <h3 className="text-heading-5">{item.title}</h3>
                    <p className="text-body-text">{item.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
```

#### Step 3: Add Navigation Link

Update the navigation data to include the new page. In `src/components/shared/navbar/data.ts`, add the portfolio link to the appropriate menu structure.

#### Step 4: Add Data (Optional)

Create `src/data/portfolio.ts` for dynamic content:

```tsx
export const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/images/portfolio/project-1.jpg',
    description: 'Modern e-commerce solution built with Next.js',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://example.com',
  },
  // Add more items...
];
```

#### Step 5: Add Images

Place your portfolio images in:

```
public/images/portfolio/
├── project-1.jpg
├── project-2.jpg
└── project-3.jpg
```

#### Step 6: Add Markdown Content (Optional)

If you want dynamic portfolio items with markdown content, create:

```
src/data/portfolio/
├── project-1.md
├── project-2.md
└── project-3.md
```

Then create a dynamic route at `src/app/portfolio/[slug]/page.tsx` to display individual portfolio items.

#### Step 7: Test Your Page

1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:3000/portfolio`
3. Check that the page loads correctly
4. Test navigation from the header menu

**That's it!** Your new portfolio page is ready with proper routing, components, navigation, and SEO metadata.

### Content Management

- **Blog Posts**: Add markdown files in `src/data/blogs/` - access via `/blog/[slug]`
- **Services**: Add markdown files in `src/data/services/` - access via `/services/[slug]` or `/our-services/[slug]`
- **Team Members**: Add markdown files in `src/data/team/` - access via `/team/[slug]`
- **Case Studies**: Add markdown files in `src/data/case-study/` - access via `/case-study/[slug]`
- **Career Listings**: Add markdown files in `src/data/career/` - access via `/career/[slug]`
- **Customer Testimonials**: Add markdown files in `src/data/customer/` - access via `/customer/[slug]`
- **Whitepapers**: Add markdown files in `src/data/whitepaper/` - access via `/whitepaper/[slug]`
- **Static Content**: Edit component files directly
- **JSON Data**: Update JSON files in `src/data/json/` for structured data

## 🏗️ Building for Production

### Build Process

```bash
# Create production build
npm run build

# Start production server
npm run start
```

### Build Output

- Static assets are optimized and compressed
- JavaScript is minified and tree-shaken
- CSS is purged and optimized
- Images are automatically optimized by Next.js

### Performance Features

- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **Bundle Analysis**: Built-in bundle analyzer

## 🚀 Deployment

### Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The project can be deployed to:

- **Netlify**: Static site deployment with automatic builds
- **Railway**: Full-stack deployment with database support
- **DigitalOcean**: App Platform with automatic scaling
- **AWS**: Amplify or EC2 for enterprise solutions
- **Hostinger**: Shared hosting with Node.js support

### Deployment Guide

1. **Build the project**: Run `npm run build` locally to test
2. **Choose platform**: Select your preferred hosting provider
3. **Configure environment**: Set up any required environment variables
4. **Deploy**: Follow platform-specific deployment instructions

Need help with deployment? Contact us at [hello@pixel71.com](mailto:hello@pixel71.com)

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📖 Documentation

- Component structure follows a feature-based organization
- Markdown content is processed using gray-matter and react-markdown
- All pages use the App Router pattern from Next.js 16
- Shared components are located in `src/components/shared/` for reuse across pages

## 📧 Support & Contact

We provide comprehensive support for all our customers:

- **Email Support**: [hello@pixel71.com](mailto:hello@pixel71.com)
- **Response Time**: Within 24 hours on business days
- **Support Includes**:
  - Installation assistance
  - Bug fixes and troubleshooting
  - Customization guidance
  - Feature clarifications

---

**Made by [Pixel71](mailto:hello@pixel71.com)**

\_Happy coding!
