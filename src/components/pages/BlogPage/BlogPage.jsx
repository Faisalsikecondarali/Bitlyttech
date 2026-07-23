import React, { useEffect } from 'react';
import './BlogPage.css';

import { blogPosts, getBlogPostBySlug } from './blogData';

const BlogPage = ({ slug, setCurrentPage }) => {
  const posts = blogPosts;

  const post = slug ? getBlogPostBySlug(slug) : null;

  useEffect(() => {
    if (post) {
      // Update meta tags for individual blog post
      document.title = `${post.title} | Bitlyt Tech Solutions Blog`;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', post.excerpt);

      // Add Open Graph tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', post.title);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute('content', post.excerpt);

      let ogType = document.querySelector('meta[property="og:type"]');
      if (!ogType) {
        ogType = document.createElement('meta');
        ogType.setAttribute('property', 'og:type');
        document.head.appendChild(ogType);
      }
      ogType.setAttribute('content', 'article');

      // Add Article Schema
      const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
          "@type": "Organization",
          "name": "Bitlyt Tech Solutions"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Bitlyt Tech Solutions",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.bitlyttech.org/logo.png"
          }
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    } else if (!slug) {
      // Blog listing page meta tags
      document.title = 'Blog | Bitlyt Tech Solutions - Web Development, SEO & Tech Insights';
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', 'Expert insights on web development, SEO, mobile apps, UI/UX design, and software development. Stay updated with the latest tech trends and best practices from Bitlyt Tech Solutions.');

      // Add Blog Schema for listing
      const schema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Bitlyt Tech Solutions Blog",
        "description": "Expert insights on web development, SEO, mobile apps, UI/UX design, and software development",
        "url": "https://www.bitlyttech.org/blog",
        "publisher": {
          "@type": "Organization",
          "name": "Bitlyt Tech Solutions"
        },
        "blogPost": posts.map(p => ({
          "@type": "BlogPosting",
          "headline": p.title,
          "description": p.excerpt,
          "datePublished": p.date,
          "author": {
            "@type": "Organization",
            "name": "Bitlyt Tech Solutions"
          }
        }))
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [post, slug, posts]);

  const handleOpenPost = (nextSlug) => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage(`blog/${nextSlug}`);
    } else {
      window.history.pushState(null, '', `/blog/${nextSlug}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleBackToBlog = () => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage('blog');
    } else {
      window.history.pushState(null, '', '/blog');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  if (slug && !post) {
    return (
      <div className="blog-page">
        <section className="blog-hero">
          <button className="blog-back" type="button" onClick={handleBackToBlog}>
            Back to Blog
          </button>
          <div className="blog-hero-container">
            <h1 className="blog-title">Blog</h1>
            <p className="blog-subtitle">This article was not found.</p>
          </div>
        </section>
      </div>
    );
  }

  if (post) {
    return (
      <div className="blog-page">
        <section className="blog-hero">
          <button className="blog-back" type="button" onClick={handleBackToBlog}>
            Back to Blog
          </button>
          <div className="blog-hero-container">
            <h1 className="blog-title">{post.title}</h1>
            <p className="blog-subtitle">{post.excerpt}</p>

            <div className="blog-post-meta">
              <span className="blog-category">{post.category}</span>
              <span className="blog-meta-sep">•</span>
              <span className="blog-date">{post.date}</span>
              <span className="blog-meta-sep">•</span>
              <span className="blog-read">{post.readTime}</span>
            </div>
          </div>
        </section>

        <section className="blog-content">
          <div className="blog-container">
            <article className="blog-article">
              <h2 className="blog-content-title">{post.title}</h2>
              {post.content.map((para, idx) => (
                <p className="blog-paragraph" key={idx}>
                  {para}
                </p>
              ))}
              <div className="blog-related-posts">
                <h3 className="related-posts-title">Related Articles</h3>
                <div className="related-posts-grid">
                  {posts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3).map(relatedPost => (
                    <div className="related-post-card" key={relatedPost.id}>
                      <h4 className="related-post-title">{relatedPost.title}</h4>
                      <p className="related-post-excerpt">{relatedPost.excerpt}</p>
                      <button className="related-post-link" onClick={() => handleOpenPost(relatedPost.slug)}>
                        Read More →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-container">
          <h1 className="blog-title">Blog</h1>
          <p className="blog-subtitle">
            Practical guides on SEO, web development, mobile apps, UI/UX and backend engineering to help your business grow.
          </p>
        </div>
      </section>

      <section className="blog-content">
        <div className="blog-container">
          <div className="blog-grid">
            {posts.map((p) => (
              <article className="blog-card" key={p.id}>
                <div className="blog-card-top">
                  <span className="blog-category">{p.category}</span>
                  <div className="blog-meta">
                    <span className="blog-date">{p.date}</span>
                    <span className="blog-dot">•</span>
                    <span className="blog-read">{p.readTime}</span>
                  </div>
                </div>

                <h2 className="blog-card-title">{p.title}</h2>
                <p className="blog-excerpt">{p.excerpt}</p>

                <div className="blog-card-bottom">
                  <button className="blog-readmore" type="button" onClick={() => handleOpenPost(p.slug)}>
                    Read More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M5.25 2.75L9.75 7L5.25 11.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
