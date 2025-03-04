# Julian Schwab's Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Interactive UI with custom mouse effects
- Dynamic sections for work experience, about, and contact
- AI-powered chatbot for personalized interactions
- Responsive design for all device sizes

## Setup Guide

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Step 1: Clone the Repository

```bash
git clone https://github.com/JulianSchwabCommits/PortfolioV2.git
cd PortfolioV2
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory (if needed for API keys or other sensitive information):

```
# API Keys
VITE_OPENROUTER_API_KEY=your_openrouter_api_key
```

### Step 4: Start Development Server

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`.

### Step 5: Build for Production

```bash
npm run build
```

The production build will be available in the `dist` directory.

## Project Structure

- `src/` - Source code
  - `components/` - React components
  - `pages/` - Page components
  - `lib/` - Utility functions
  - `hooks/` - Custom React hooks
- `public/` - Static assets and data
  - `context.json` - Data for the AI assistant

## Deployment

This project is configured for deployment on Cloudflare Pages. When pushing to the main branch, the site will automatically deploy.

### Manual Deployment

To deploy manually:

1. Build the project: `npm run build`
2. Deploy to Cloudflare Pages using the Cloudflare Dashboard or CLI

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- OpenRouter API for AI capabilities

## Customization

To customize the portfolio with your information:

1. Update personal details in `src/components/About.tsx`
2. Modify project experiences in `src/components/ExperienceTimeline.tsx`
3. Update the AI context in `public/context.json` with your information
4. Replace images in the `public/` directory with your own

## License

MIT
