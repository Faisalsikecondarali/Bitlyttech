import React from 'react';
import './BlogPage.css';

import { blogPosts, getBlogPostBySlug } from './blogData';

const BlogPage = ({ slug, setCurrentPage }) => {
  const posts = blogPosts;

  const post = slug ? getBlogPostBySlug(slug) : null;

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
              {post.content.map((para, idx) => (
                <p className="blog-paragraph" key={idx}>
                  {para}
                </p>
              ))}
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
