# Deevaa's Portfolio Website ✨

A modern, interactive personal brand website built with Next.js 14, TypeScript, and Framer Motion.

## Features

- 🎨 **Beautiful Design**: Modern gradient backgrounds, smooth animations, and elegant UI
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Performance Optimized**: Built with Next.js 14 and TypeScript
- 🎭 **Interactive Animations**: Smooth transitions with Framer Motion
- 📊 **Dynamic Components**: Animated counters, skill clouds, timeline
- 📧 **Contact Form**: Fully functional with validation
- 🚀 **SEO Optimized**: Meta tags and OpenGraph support

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── components/          # Reusable components
│   │   ├── AnimatedCounter.tsx
│   │   ├── SkillCloud.tsx
│   │   ├── Timeline.tsx
│   │   └── ContactForm.tsx
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── public/                 # Static assets
└── tailwind.config.js     # Tailwind configuration
```

## Customization

### Personal Information
Update the personal details in `app/page.tsx`:
- Name and tagline in the hero section
- About section content
- Project details
- Social media links

### Styling
- Customize colors in `tailwind.config.js`
- Add custom animations in `globals.css`
- Modify component styles in individual component files

### Content
- Add your actual projects in the Projects section
- Update speaking engagement details
- Add real blog posts
- Replace placeholder images with your photos

## Deployment

Deploy easily with Vercel:

```bash
npm run build
```

Or deploy to Vercel directly from GitHub.

## Personal Branding Ideas

1. **Custom Photography**: Replace emoji placeholders with professional photos
2. **Brand Colors**: Update the gradient colors to match your personal brand
3. **Portfolio Content**: Add real case studies and project details
4. **Speaking Videos**: Embed actual speaking clips
5. **Blog Integration**: Connect with a CMS like Contentful or Notion
6. **Interactive Map**: Add real travel experiences with photos
7. **Testimonials**: Add client/colleague testimonials
8. **Resume Download**: Add a downloadable PDF resume

## License

MIT License - feel free to use this as a template for your own portfolio!