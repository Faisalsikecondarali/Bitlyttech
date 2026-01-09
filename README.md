# Bitlyt - Company Website

A modern, responsive company website built with React and Vite, optimized for production deployment on Netlify.

## 🚀 Features

- **Modern React 19** with hooks and functional components
- **Vite** for fast development and optimized builds
- **Responsive Design** with mobile-first approach
- **Dark Mode** support
- **Service Pages** with process steps
- **Portfolio Section** with project showcase
- **SEO Optimized** with proper meta tags
- **Production Ready** with optimized build configuration

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 7
- **Styling**: CSS3 with CSS Variables
- **Icons**: React Icons
- **Build Tool**: Vite with Terser minification
- **Deployment**: Netlify

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/bitlyt.git
cd bitlyt

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect Repository**: 
   - Go to Netlify dashboard
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Environment Variables** (if needed):
   - Add any required environment variables in Netlify dashboard

4. **Deploy**:
   - Netlify will automatically deploy on push to main branch
   - Preview deployments available for pull requests

### Manual Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
bitlyt/
├── src/
│   ├── components/
│   │   ├── common/          # Shared components
│   │   ├── layout/          # Header, Footer, Navigation
│   │   └── pages/           # Page components
│   ├── hooks/               # Custom React hooks
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── dist/                    # Build output (generated)
├── netlify.toml            # Netlify configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Configuration

### Vite Configuration
- **Code Splitting**: Vendor and icons chunks
- **Minification**: Terser with console removal
- **Build Optimization**: Chunk size warnings and asset optimization

### Netlify Configuration
- **SPA Routing**: All routes redirect to index.html
- **Security Headers**: XSS protection, content type options
- **Caching**: Long-term caching for assets
- **Build Environment**: Node.js 18

## 🎯 Performance Features

- **Code Splitting**: Automatic vendor and feature chunking
- **Tree Shaking**: Dead code elimination
- **Asset Optimization**: Image and font optimization
- **Caching Strategy**: Browser caching headers
- **Minification**: JavaScript and CSS minification
- **Source Maps**: Disabled in production for security

## 🌐 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🌟 Live Demo

[Your Netlify Live URL Here]
