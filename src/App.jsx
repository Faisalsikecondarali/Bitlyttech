import { useState, useEffect } from 'react'
import { Header, Footer } from './components/layout'
import { Hero } from './components/pages'
import { Services, Portfolio, Methodology, Testimonials, Features } from './components/common'
import FloatingWhatsApp from './components/common/FloatingWhatsApp/FloatingWhatsApp'
import { getBlogPostBySlug } from './components/pages/BlogPage/blogData'
import {
  AboutPage,
  BlogPage,
  CookiePolicyPage,
  ContactPage,
  DocumentationPage,
  FAQPage,
  HelpCenterPage,
  PressPage,
  PortfolioPage,
  PrivacyPolicyPage,
  TermsOfServicePage,
  WebDevelopment,
  MobileApps,
  UIDesign,
  Extension,
  Backend,
  ITConsulting
} from './components/pages'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [darkMode, setDarkMode] = useState(false)
  const [blogSlug, setBlogSlug] = useState(null)

  const SITE_URL = 'https://www.bitlyttech.org'

  const pageToPath = (page) => {
    if (typeof page === 'string' && page.startsWith('blog/')) {
      const slug = page.replace('blog/', '')
      return slug ? `/blog/${slug}` : '/blog'
    }
    switch (page) {
      case 'home':
        return '/'
      case 'about':
        return '/about'
      case 'blog':
        return '/blog'
      case 'portfolio':
        return '/portfolio'
      case 'contact':
        return '/contact'
      case 'web-development':
        return '/web-development'
      case 'mobile-apps':
        return '/mobile-apps'
      case 'ui-design':
        return '/ui-design'
      case 'backend':
        return '/backend'
      case 'extension':
        return '/extension'
      case 'consulting':
        return '/consulting'
      case 'help-center':
        return '/help-center'
      case 'documentation':
        return '/documentation'
      case 'privacy-policy':
        return '/privacy-policy'
      case 'terms':
        return '/terms'
      case 'faq':
        return '/faq'
      case 'press':
        return '/press'
      case 'cookie-policy':
        return '/cookie-policy'
      default:
        return '/'
    }
  }

  const pathToPage = (pathname) => {
    const clean = (pathname || '/').toLowerCase()
    if (clean === '/blog') {
      return { page: 'blog', slug: null }
    }
    if (clean.startsWith('/blog/')) {
      const slug = clean.replace('/blog/', '').trim()
      return { page: 'blog', slug: slug || null }
    }
    switch (clean) {
      case '/':
        return { page: 'home', slug: null }
      case '/about':
        return { page: 'about', slug: null }
      case '/blog':
        return { page: 'blog', slug: null }
      case '/portfolio':
        return { page: 'portfolio', slug: null }
      case '/contact':
        return { page: 'contact', slug: null }
      case '/web-development':
        return { page: 'web-development', slug: null }
      case '/mobile-apps':
        return { page: 'mobile-apps', slug: null }
      case '/ui-design':
        return { page: 'ui-design', slug: null }
      case '/backend':
        return { page: 'backend', slug: null }
      case '/extension':
        return { page: 'extension', slug: null }
      case '/consulting':
        return { page: 'consulting', slug: null }
      case '/help-center':
        return { page: 'help-center', slug: null }
      case '/documentation':
        return { page: 'documentation', slug: null }
      case '/privacy-policy':
        return { page: 'privacy-policy', slug: null }
      case '/terms':
        return { page: 'terms', slug: null }
      case '/faq':
        return { page: 'faq', slug: null }
      case '/press':
        return { page: 'press', slug: null }
      case '/cookie-policy':
        return { page: 'cookie-policy', slug: null }
      default:
        return { page: 'home', slug: null }
    }
  }

  const navigateTo = (page) => {
    const path = pageToPath(page)
    if (typeof page === 'string' && page.startsWith('blog/')) {
      const slug = page.replace('blog/', '')
      setCurrentPage('blog')
      setBlogSlug(slug || null)
    } else {
      setCurrentPage(page)
      setBlogSlug(null)
    }
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path)
    }
  }

  const ensureMetaTag = (selector, attrs) => {
    let el = document.head.querySelector(selector)
    if (!el) {
      el = document.createElement('meta')
      document.head.appendChild(el)
    }
    Object.entries(attrs).forEach(([k, v]) => {
      el.setAttribute(k, v)
    })
    return el
  }

  const ensureLinkTag = (rel) => {
    let el = document.head.querySelector(`link[rel="${rel}"]`)
    if (!el) {
      el = document.createElement('link')
      el.setAttribute('rel', rel)
      document.head.appendChild(el)
    }
    return el
  }

  const getSeoConfig = (page, slug) => {
    const base = {
      title: 'Bitlyt Tech Solutions | Web Development, Mobile Apps & Backend Services',
      description:
        'Bitlyt Tech Solutions provides professional web development, mobile app development, UI/UX design, backend systems and IT consulting. Fast delivery, affordable packages, and 24/7 support.',
      path: '/'
    }

    switch (page) {
      case 'about':
        return {
          title: 'About Bitlyt Tech Solutions | Our Mission, Vision & Values',
          description:
            'Learn about Bitlyt Tech Solutions — our mission, vision, values, and journey. We deliver reliable, scalable, and modern digital solutions for businesses.',
          path: '/about'
        }
      case 'blog':
        if (slug) {
          const p = getBlogPostBySlug(slug)
          if (p) {
            return {
              title: `${p.title} | Bitlyt Tech Blog`,
              description: p.excerpt,
              path: `/blog/${p.slug}`
            }
          }
        }
        return {
          title: 'Blog | SEO, Web Development & Tech Insights | Bitlyt Tech Solutions',
          description:
            'Read practical guides on SEO, web development, mobile apps, UI/UX, performance, and backend engineering to help your business grow online.',
          path: '/blog'
        }
      case 'portfolio':
        return {
          title: 'Portfolio | Bitlyt Tech Solutions Projects & Case Studies',
          description:
            'Explore Bitlyt Tech Solutions portfolio: web apps, mobile apps, UI/UX designs, and backend systems built for performance, scalability and growth.',
          path: '/portfolio'
        }
      case 'web-development':
        return {
          title: 'Web Development Services | Bitlyt Tech Solutions',
          description:
            'Modern website and web application development using React, Node.js and best practices. Fast, secure, scalable and SEO-friendly web solutions.',
          path: '/web-development'
        }
      case 'mobile-apps':
        return {
          title: 'Mobile App Development | Android & iOS | Bitlyt Tech Solutions',
          description:
            'Build high-performance mobile apps for Android and iOS. Cross-platform or native development with modern UI/UX and scalable architecture.',
          path: '/mobile-apps'
        }
      case 'ui-design':
        return {
          title: 'UI/UX Design Services | Bitlyt Tech Solutions',
          description:
            'Professional UI/UX design with user-centered workflows, modern prototyping, and consistent design systems to improve conversions and usability.',
          path: '/ui-design'
        }
      case 'backend':
        return {
          title: 'Backend Development | APIs, Databases & Cloud | Bitlyt Tech Solutions',
          description:
            'Robust backend development: REST/GraphQL APIs, database design, microservices, and cloud deployments. Secure, scalable, and production-ready systems.',
          path: '/backend'
        }
      case 'extension':
        return {
          title: 'Chrome Extension Development | Bitlyt Tech Solutions',
          description:
            'Custom browser extension development for Chrome and modern browsers. Improve productivity, automate workflows, and integrate with your systems.',
          path: '/extension'
        }
      case 'consulting':
        return {
          title: 'IT Consulting | Strategy, Architecture & Support | Bitlyt Tech Solutions',
          description:
            'IT consulting to help you plan, build, and scale technology. Architecture guidance, security best practices, and ongoing support.',
          path: '/consulting'
        }
      case 'contact':
        return {
          title: 'Contact Bitlyt Tech Solutions | Start Your Project',
          description:
            'Contact Bitlyt Tech Solutions to start your project. Get a quote for web development, mobile apps, UI/UX design, backend systems, and IT consulting.',
          path: '/contact'
        }
      case 'help-center':
        return {
          title: 'Help Center | Support & Guidance | Bitlyt Tech Solutions',
          description:
            'Get help with starting a project, delivery steps, support, and maintenance. Find answers and guidance from Bitlyt Tech Solutions.',
          path: '/help-center'
        }
      case 'documentation':
        return {
          title: 'Documentation | Process, Deployment & SEO | Bitlyt Tech Solutions',
          description:
            'Read documentation on our project process, deployment, hosting, performance, and SEO strategy for modern web and app development.',
          path: '/documentation'
        }
      case 'privacy-policy':
        return {
          title: 'Privacy Policy | Bitlyt Tech Solutions',
          description:
            'Read Bitlyt Tech Solutions privacy policy to understand how we collect, use, and protect information when you interact with our website and services.',
          path: '/privacy-policy'
        }
      case 'terms':
        return {
          title: 'Terms of Service | Bitlyt Tech Solutions',
          description:
            'Review Bitlyt Tech Solutions terms of service: project scope, delivery, payments, client responsibilities, and service terms.',
          path: '/terms'
        }
      case 'faq':
        return {
          title: 'FAQ | Web & App Development Questions | Bitlyt Tech Solutions',
          description:
            'Answers to common questions about web development, mobile app development, UI/UX design, timelines, SEO, redesigns, and support.',
          path: '/faq'
        }
      case 'press':
        return {
          title: 'Press | News & Updates | Bitlyt Tech Solutions',
          description:
            'Press and company updates from Bitlyt Tech Solutions. Announcements, performance-first development, and service updates.',
          path: '/press'
        }
      case 'cookie-policy':
        return {
          title: 'Cookie Policy | Bitlyt Tech Solutions',
          description:
            'Learn how cookies are used on the Bitlyt Tech Solutions website, how analytics may be used, and how you can manage cookie preferences.',
          path: '/cookie-policy'
        }
      case 'home':
      default:
        return base
    }
  }

  useEffect(() => {
    // Check for saved dark mode preference or default to light mode
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedDarkMode)
    
    // Apply dark mode class to body
    if (savedDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [])

  useEffect(() => {
    const applyFromPath = () => {
      const result = pathToPage(window.location.pathname)
      setCurrentPage(result.page)
      setBlogSlug(result.slug)
    }

    applyFromPath()
    window.addEventListener('popstate', applyFromPath)
    return () => window.removeEventListener('popstate', applyFromPath)
  }, [])

  useEffect(() => {
    const seo = getSeoConfig(currentPage, blogSlug)
    const absoluteUrl = `${SITE_URL}${seo.path}`

    document.title = seo.title

    ensureMetaTag('meta[name="description"]', { name: 'description', content: seo.description })
    ensureMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
    })

    const canonical = ensureLinkTag('canonical')
    canonical.setAttribute('href', absoluteUrl)

    ensureMetaTag('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    ensureMetaTag('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Bitlyt Tech Solutions' })
    ensureMetaTag('meta[property="og:title"]', { property: 'og:title', content: seo.title })
    ensureMetaTag('meta[property="og:description"]', { property: 'og:description', content: seo.description })
    ensureMetaTag('meta[property="og:url"]', { property: 'og:url', content: absoluteUrl })
    ensureMetaTag('meta[property="og:image"]', {
      property: 'og:image',
      content: `${SITE_URL}/images/logo.png`
    })

    ensureMetaTag('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    ensureMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
    ensureMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
    ensureMetaTag('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: `${SITE_URL}/images/logo.png`
    })

    if (window.location.pathname !== seo.path) {
      window.history.replaceState(null, '', seo.path)
    }
  }, [currentPage, blogSlug])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode)
    
    if (newDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return (
          <AboutPage
            setCurrentPage={navigateTo}
            currentPage={currentPage}
            darkMode={darkMode}
          />
        )
      case 'blog':
        return <BlogPage slug={blogSlug} setCurrentPage={navigateTo} />
      case 'contact':
        return <ContactPage />
      case 'portfolio':
        return <PortfolioPage />
      case 'web-development':
        return (
          <WebDevelopment 
            setCurrentPage={navigateTo}
            currentPage={currentPage}
            darkMode={darkMode}
          />
        )
      case 'mobile-apps':
        return <MobileApps />
      case 'ui-design':
        return <UIDesign />
      case 'extension':
        return <Extension />
      case 'backend':
        return <Backend />
      case 'consulting':
        return <ITConsulting />
      case 'help-center':
        return <HelpCenterPage setCurrentPage={navigateTo} />
      case 'documentation':
        return <DocumentationPage setCurrentPage={navigateTo} />
      case 'privacy-policy':
        return <PrivacyPolicyPage />
      case 'terms':
        return <TermsOfServicePage />
      case 'faq':
        return <FAQPage setCurrentPage={navigateTo} />
      case 'press':
        return <PressPage setCurrentPage={navigateTo} />
      case 'cookie-policy':
        return <CookiePolicyPage />
      case 'home':
      default:
        return (
          <>
            <Hero setCurrentPage={navigateTo} />
            <Features />
            <Services setCurrentPage={navigateTo} />
            <Testimonials />
            <Methodology setCurrentPage={navigateTo} />
          </>
        )
    }
  }

  return (
    <div className="app">
      {/* HEADER HAMESHA */}
      <Header
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* PAGE CONTENT */}
      {renderPage()}

      {/* FOOTER HAMESHA */}
      <Footer setCurrentPage={navigateTo} />
      
      {/* FLOATING WHATSAPP BUTTON */}
      <FloatingWhatsApp />
    </div>
  )
}

export default App
