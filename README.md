# Solace Protocol Website

A professional, modern website for Solace Protocol - a decentralized autonomous agent commerce framework built on Solana blockchain.

## 🚀 Features

### 🎨 Design & UX
- **Modern Dark Theme** with glassmorphism effects
- **Responsive Design** optimized for all devices
- **Smooth Animations** powered by Framer Motion
- **Professional Typography** using Inter font
- **Gradient Accents** with custom brand colors

### 📱 Pages & Sections

#### 🏠 Landing Page
- **Hero Section** with compelling headline and CTAs
- **Four-Phase Features** (Request, Negotiation, Transaction, Evaluation)
- **Why Solace Protocol** benefits section
- **Use Cases** showcase (Hedge Funds, Media, Healthcare, Supply Chain, Marketplaces)
- **Call-to-Action** sections

#### 📖 Whitepaper Page
- **Complete Technical Documentation** with formatted content
- **Downloadable PDF** functionality
- **Interactive Navigation** with smooth scrolling
- **Comprehensive Coverage** of protocol architecture and use cases

#### 🛠️ Framework App
- **Agent Registry** with search and filtering
- **Transaction Simulator** demonstrating the 4-phase protocol
- **Evaluation Panel** showing quality assessments
- **Developer Resources** with SDKs, documentation, and tools
- **Wallet Integration** for Phantom and Solflare

#### ℹ️ About Page
- **Mission & Vision** statements
- **Core Values** with detailed descriptions
- **Team Profiles** with social links
- **Contact Form** and community links

#### 📝 Blog
- **Featured Articles** with rich content
- **Category Filtering** system
- **Newsletter Signup** integration
- **Professional Article Layout**

### 🛡️ Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** icons
- **SEO Optimized** with proper meta tags
- **Performance Optimized** with lazy loading and code splitting

## 🏗️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand (lightweight alternative to Redux)
- **Development**: ESLint, PostCSS, Autoprefixer

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/solaceprotocol/website.git
   cd solace-protocol
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                  # Next.js 14 App Router
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── whitepaper/      # Whitepaper page
│   ├── framework/       # Framework app page
│   ├── about/           # About page
│   └── blog/            # Blog page
├── components/          # Reusable components
│   ├── Header.tsx       # Navigation header
│   └── Footer.tsx       # Site footer
└── public/              # Static assets
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.ts`:
- **Primary**: Teal gradient (#14b8a6 to variants)
- **Secondary**: Blue gradient (#3b82f6 to variants) 
- **Accent**: Purple gradient (#8b5cf6 to variants)

### Animations
Framer Motion animations are configured throughout the site with:
- **Entrance animations** on scroll
- **Hover effects** for interactive elements
- **Smooth transitions** between states

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 0-640px
- **Tablet**: 641-1024px  
- **Desktop**: 1025px+

## 🔍 SEO Features

- **Meta tags** for social sharing
- **Open Graph** protocol implementation
- **Structured data** for search engines
- **Semantic HTML** structure
- **Fast loading** optimized assets

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy with zero configuration
3. Automatic deployments on git push

### Manual Deployment
```bash
npm run build
npm run start
```

## 📊 Performance

The website is optimized for:
- **Fast loading times** (<3s)
- **Minimal bundle size** with code splitting  
- **Accessibility** (WCAG 2.1 compliant)
- **SEO** optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: hello@solaceprotocol.com
- **Discord**: [Join our community](https://discord.gg/solaceprotocol)
- **Twitter**: [@solaceprotocol](https://twitter.com/solaceprotocol)

## 🙏 Acknowledgments

- **Solana Foundation** for the amazing blockchain platform
- **Next.js Team** for the incredible React framework
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling

---

Built with ❤️ by the Solace Protocol Team 