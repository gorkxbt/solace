# Solace Protocol Demo

This is a standalone demo project for generating social media assets for Solace Protocol.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

The demo currently includes:

### Twitter Scene: Future of Commerce
- Located at: `src/twitter/scenes/future-commerce.tsx`
- Size: 1200x675px (Twitter card optimized)
- Features:
  - Animated neural network background
  - Solace Protocol branding
  - Dynamic AI agent visualization
  - Optimized for social impact

To capture the scene:
1. Wait for all animations to complete
2. Use browser dev tools to take a screenshot
3. Save as PNG with transparent background

## Project Structure

```
demo/
├── src/
│   ├── app/              # Next.js app router
│   └── twitter/          # Twitter-specific components
│       ├── components/   # Reusable components
│       └── scenes/       # Scene configurations
├── public/              # Static assets
└── package.json        # Project dependencies
```

## Adding New Scenes

1. Create a new scene component in `src/twitter/scenes/`
2. Import and use components from `src/twitter/components/`
3. Add the scene to the main page or create a new route 