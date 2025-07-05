
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const initialProducts = [
  {
    id: 1,
    name: 'Titan-Starship Blueprint',
    imageUrl: 'https://i.ibb.co/3yhp63qV/IMG-9133.png',
    purchaseUrl: 'https://buy.stripe.com/test_eVqbJ3a2Gc6B9Zh4JTaAw01',
    price: 3.99,
    oldPrice: 4.99,
    gallery: [
          'https://i.ibb.co/4RfQ6Wvs/IMG-9136.png',
          'https://i.ibb.co/7xGjZGQC/IMG-9137.png',
          'https://i.ibb.co/4RJtmCfb/IMG-9138.jpg',
          'https://i.ibb.co/0ycLhhfk/IMG-9140.png',
          'https://i.ibb.co/Y4Nb2Zcz/IMG-9143.png',
          'https://i.ibb.co/hxRHjsXX/IMG-9144.png',
          'https://i.ibb.co/GQ22ngsh/IMG-9145.png',
          'https://i.ibb.co/0Rt51WmN/IMG-9146.png',
          'https://i.ibb.co/7JnYz0hX/IMG-9147.jpg',
          'https://i.ibb.co/Kp2JCqp4/IMG-9148.jpg',
          'https://i.ibb.co/M53djzsf/IMG-9149.jpg',
    ],
    description: [
  { type: 'heading', content: '🚀Product Overview' },
  { type: 'paragraph', content: 'Titan-class 18m Diameter Starship Blueprint (Booster + Ship) — the ultimate SFS blueprint designed for scale, performance, and visual impact. This blueprint includes both the ship and its massive booster, faithfully recreated with extreme attention to detail.' },

  { type: 'heading', content: '🛠️Features' },
  { type: 'paragraph', content: '• Full height: Approximately 340 meters (in-game scale)' },
  { type: 'paragraph', content: '• Diameter: Gigantic 18 meters — one of the largest in the SFS community' },
  { type: 'paragraph', content: '• Propulsion: Multiple Raptor engine setup for realistic thrust' },
  { type: 'paragraph', content: '• Design: Includes grid fins, flaps, skirt, and structural detailing' },
  { type: 'heading', content: '🎯Performance' },
  { type: 'paragraph', content: '• Built for stable ascent, clean separation, and orbital control' },
  { type: 'paragraph', content: '• Functional payload bay doors and cargo compartment' },
  { type: 'paragraph', content: '• Large-angle gimbal system enables realistic flip-burn maneuvers' },
  { type: 'heading', content: '⚠️Important Notice' },
  { type: 'paragraph', content: '• This is a digital blueprint file. No physical product will be shipped.' },
  { type: 'paragraph', content: '• Once purchased, this file is non-refundable.' },
  { type: 'paragraph', content: '• Redistribution, re-uploading, or resale of this blueprint is strictly prohibited.' },
  { type: 'paragraph', content: '• Compatibility with all SFS versions or modded setups is not guaranteed.' },
  { type: 'paragraph', content: '• Download link is for one-time use by the purchaser only.' },
    ],
    reviews: [
      { rating: 5, text: "An absolutely fantastic blueprint. The detail is incredible. A must-have for any space enthusiast." },
      { rating: 4, text: "Very high quality print. It looks great on my wall. Shipped faster than expected." },
    ],
  },
  {
    id: 2,
    name: 'Falcon 9 Blueprint',
    imageUrl: 'https://i.ibb.co/LXbz3JRp/IMG-9056.png',
    purchaseUrl: 'https://buy.stripe.com/test_5kQ7sNfn01rX9Zh6S1bBw44',
    price: 2.49,
    gallery: [
        'https://i.ibb.co/LXbz3JRp/IMG-9056.png',
        'https://i.ibb.co/HDHVF2z7/IMG-9150.png',
        'https://i.ibb.co/dsWLyc1M/IMG-9151.png',
        'https://i.ibb.co/xqQCj9n0/IMG-9152.png',
        'https://i.ibb.co/jk89Xv7d/IMG-9153.png',
        'https://i.ibb.co/gMkpWVCQ/IMG-9154.jpg',
        'https://i.ibb.co/Kx0wCsxt/IMG-9155.jpg',
        'https://i.ibb.co/MD9h1117/IMG-9156.jpg',
    ],
    description: [
  { type: 'heading', content: '🚀 Product Overview' },
  { type: 'paragraph', content: 'This Falcon 9 Blueprint captures the iconic design of SpaceX\'s reusable orbital-class rocket. Carefully crafted for realism and optimized for performance, it’s perfect for SFS players who want to replicate one of the most revolutionary rockets of our time.' },

  { type: 'heading', content: '🛠 Features' },
  { type: 'paragraph', content: '• Full height: ~70 meters (in-game scale)' },
  { type: 'paragraph', content: '• Two-stage configuration with realistic staging and separation' },
  { type: 'paragraph', content: '• Nine-engine first stage (Merlin-style)' },
  { type: 'paragraph', content: '• Grid fins and landing legs for booster recovery simulation' },
  { type: 'paragraph', content: '• Detailed upper stage with payload fairing' },

  { type: 'heading', content: '🎯 Performance' },
  { type: 'paragraph', content: '• Built for low Earth orbit missions and recovery scenarios' },
  { type: 'paragraph', content: '• Smooth stage separation and reliable thrust performance' },
  { type: 'paragraph', content: '• Balanced for stability and control during ascent and reentry' },

  { type: 'heading', content: '⚠️ Important Notice' },
  { type: 'paragraph', content: '• This is a digital blueprint file. No physical product will be shipped.' },
  { type: 'paragraph', content: '• This file is non-refundable once downloaded.' },
  { type: 'paragraph', content: '• Redistribution, re-uploading, or resale is strictly prohibited.' },
  { type: 'paragraph', content: '• Compatibility with all versions of SFS or mods is not guaranteed.' },
  { type: 'paragraph', content: '• Download link is for one-time use by the purchaser only.' }
],
    reviews: [
      { rating: 5, text: "The future is here! This Starship blueprint is inspiring." }
    ],
  },
    {
    id: 3,
    name: 'HLS-Starship Blueprint',
    imageUrl: 'https://i.ibb.co/hFKLxD82/IMG-9131.png',
    purchaseUrl: 'https://buy.stripe.com/test_5kQ7sNfn01rX9Zh6S1cCy88',
    price: 3.99,
    gallery: [
      'https://i.imgur.com/7c1p49v.png',
      'https://i.imgur.com/fL4yP85.jpeg',
      'https://i.imgur.com/OslpE2s.jpeg',
    ],
    description: [
        { type: 'heading', content: 'The Legend That Reached the Moon' },
        { type: 'paragraph', content: 'The legendary Saturn V, the rocket that took humanity to the Moon. This blueprint captures the immense scale and engineering genius of the Apollo program. A must-have for any history buff or lover of classic space exploration.' }
    ],
    reviews: [
      { rating: 5, text: "Iconic rocket, iconic blueprint. Perfect quality." },
      { rating: 5, text: "A piece of history, beautifully rendered." },
      { rating: 5, text: "Couldn't be happier with this purchase. Captures the majesty of the Saturn V." },
    ],
  },
  {
    id: 4,
    name: 'Normal Starship Blueprint',
    imageUrl: 'https://i.ibb.co/9kQkv6QZ/IMG-9130.png',
    purchaseUrl: 'https://buy.stripe.com/test_5kQ7sNfn01rX9Zh6S1dDAcc',
    price: 2.49,
    gallery: [
      'https://i.imgur.com/3Z46s0a.png',
      'https://i.imgur.com/hYvQjJc.jpeg',
      'https://i.imgur.com/5zaP3i2.jpeg',
    ],
    description: [
        { type: 'heading', content: 'The Workhorse of an Era' },
        { type: 'paragraph', content: 'A detailed look at the Space Shuttle orbiter, the first reusable spacecraft. This blueprint showcases the complexity and versatility of the vehicle that deployed the Hubble Space Telescope and built the International Space Station.' }
    ],
    reviews: [
      { rating: 5, text: "Brings back so many memories of watching the shuttle launches. Great item." },
    ],
  }
];

// --- Data Layer / Mock API ---
const STORAGE_KEY = 'spacestore-products';
const SPREADSHEET_API_URL = 'https://script.google.com/macros/s/AKfycbx_7vbQ_XYERy7-rFH_xcgMuIyPfhV2u6zEbw7sRdFSnZ_iKCmQFWqI4qCDTuQrbn1m/exec'; // <-- PASTE YOUR WEB APP URL HERE

const api = {
  fetchProducts: (): Promise<any[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const savedProducts = localStorage.getItem(STORAGE_KEY);
          if (savedProducts) {
            const parsed = JSON.parse(savedProducts);
            if (Array.isArray(parsed) && parsed.length > 0) {
              resolve(parsed);
              return;
            }
          }
          localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProducts));
          resolve(initialProducts);
        } catch (error) {
          console.error("API Error: Failed to load products.", error);
          resolve(initialProducts);
        }
      }, 500);
    });
  },

  addProductReview: async (productId: number, review: { rating: number; text: string }, allProducts: any[]): Promise<any[]> => {
    const product = allProducts.find(p => p.id === productId);
    if (SPREADSHEET_API_URL && product) {
      const payload = {
        type: 'review', // Specify type for GAS routing
        timestamp: new Date().toISOString(),
        productId: productId,
        productName: product.name,
        rating: review.rating,
        text: review.text,
      };
      try {
        await fetch(SPREADSHEET_API_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (error) {
        console.error("API Error: Failed to send review to Google Apps Script.", error);
        throw error;
      }
    }
    const updatedProducts = allProducts.map(p =>
      p.id === productId ? { ...p, reviews: [review, ...p.reviews] } : p
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
    return updatedProducts;
  },
};

const calculateReviewStats = (reviews: { rating: number }[]) => {
    const reviewCount = reviews.length;
    if (reviewCount === 0) {
        return { averageRating: 0, reviewCount: 0 };
    }
    const sumOfRatings = reviews.reduce((sum, r) => sum + r.rating, 0);
    const averageRating = sumOfRatings / reviewCount;
    return { averageRating, reviewCount };
};

const renderStars = (rating) => {
  if (rating >= 4.8) return '★★★★★';
  if (rating >= 4.3) return '★★★★☆';
  if (rating >= 3.8) return '★★★★☆';
  if (rating >= 2.8) return '★★★☆☆';
  if (rating >= 1.8) return '★★☆☆☆';
  if (rating >= 0.8) return '★☆☆☆☆';
  return '☆☆☆☆☆';
};

const StarRating = ({ rating, reviewCount = null }) => (
  <div className="product-rating" aria-label={`Rating: ${rating.toFixed(1)} out of 5 stars.`}>
    <span aria-hidden="true">{renderStars(rating)}</span>
    <span aria-hidden="true">{rating.toFixed(1)}</span>
    {reviewCount !== null && <span className="review-count">({reviewCount} reviews)</span>}
  </div>
);

const ProductCard = ({ product, onSelect }) => {
  const handleBuyNowClick = (e) => {
    e.stopPropagation();
    window.open(product.purchaseUrl, '_blank', 'noopener,noreferrer');
  };
  const handleButtonKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') e.stopPropagation();
  };
  const { averageRating, reviewCount } = calculateReviewStats(product.reviews);
  return (
    <div
      className="product-card"
      onClick={() => onSelect(product.id)}
      onKeyDown={(e) => { if (e.key === 'Enter' && e.currentTarget === e.target) onSelect(product.id); }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${product.name}`}
    >
      <div className="product-image-container"><img src={product.imageUrl} alt={product.name} className="product-image" /></div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        {reviewCount > 0 ? (
          <StarRating rating={averageRating} reviewCount={reviewCount} />
        ) : (
          <div className="product-rating no-reviews">No reviews yet</div>
        )}
        <div className="product-price-container">
          {product.oldPrice && (
            <span className="old-price">${product.oldPrice.toFixed(2)}</span>
          )}
          <span className={`product-price ${product.oldPrice ? 'special-price' : ''}`}>
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="discount-badge">20% OFF!</span>
          )}
        </div>
        <button className="buy-button-small" onClick={handleBuyNowClick} onKeyDown={handleButtonKeyDown} aria-label={`Buy ${product.name} now`}>
          BUY NOW
        </button>
      </div>
    </div>
  );
};

const MenuIcon = ({ onClick }) => (
    <button onClick={onClick} className="menu-button" aria-label="Open menu">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
);

const MainHeader = ({ onMenuClick }) => (
  <header className="header">
    <div className="header-brand">
      <img src="https://i.ibb.co/jPnwrGsD/photo-output.jpg$0" alt="IAMSPACEROCKET logo" className="header-logo" />
      <h1 className="header-title">IAMSPACEROCKET</h1>
    </div>
    <div className="header-actions">
       <MenuIcon onClick={onMenuClick} />
    </div>
  </header>
);

const SubPageHeader = ({ title, onBack }) => (
    <header className="header detail-header">
        <button onClick={onBack} className="back-button" aria-label="Go back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h2 className="header-title">{title}</h2>
        <div style={{ width: '44px' }} />
    </header>
);

const MenuOverlay = ({ isOpen, onClose, onNavigate }) => {
    if (!isOpen) return null;
    const handleNavigate = (view) => {
        onNavigate(view);
        onClose();
    };
    return (
        <div className="menu-overlay-backdrop" onClick={onClose}>
            <div className="menu-overlay-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-menu-button" onClick={onClose} aria-label="Close menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="#1d1d1f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                <nav className="menu-nav">
                    <a role="button" tabIndex={0} onClick={() => handleNavigate('legal')}>Legal / Terms of Service</a>
                    <a role="button" tabIndex={0} onClick={() => handleNavigate('privacy')}>Privacy Policy</a>
                    <a role="button" tabIndex={0} onClick={() => handleNavigate('contact')}>Contact Us</a>
                </nav>
            </div>
        </div>
    );
};

const ProductListPage = ({ products, onProductSelect, onMenuClick }) => (
  <>
    <MainHeader onMenuClick={onMenuClick} />
    <main className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onSelect={onProductSelect} />
      ))}
    </main>
  </>
);

const ExistingReviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return null;
  return (
    <div className="existing-reviews-section">
      <h3>Reviews</h3>
      <div className="existing-reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <div className="review-item-header"><StarRating rating={review.rating} /></div>
            <p className="review-item-text">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ReviewSection = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const handleSubmit = () => {
    if (rating === 0) { alert('Please select a star rating.'); return; }
    onSubmit({ rating, text: reviewText });
    setRating(0); setHoverRating(0); setReviewText('');
  };
  return (
    <div className="review-section">
      <h3>Write a Review</h3>
      <div className="star-rating-input" onMouseLeave={() => setHoverRating(0)}>
        {[1, 2, 3, 4, 5].map((starIndex) => (
          <button key={starIndex} className={`star ${starIndex <= (hoverRating || rating) ? 'filled' : ''}`} onClick={() => setRating(starIndex)} onMouseEnter={() => setHoverRating(starIndex)} aria-label={`Rate ${starIndex} out of 5 stars`}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
          </button>
        ))}
      </div>
      <textarea className="review-textarea" placeholder="Share your thoughts about this product..." value={reviewText} onChange={(e) => setReviewText(e.target.value)} aria-label="Review text"/>
      <button className="review-submit-button" onClick={handleSubmit}>Submit Review</button>
    </div>
  );
};

const StructuredDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const THRESHOLD = 4;
  if (!description) return null;
  if (typeof description === 'string') {
    return (<div className="detail-product-description"><p className="detail-product-description-paragraph">{description}</p></div>);
  }
  if (Array.isArray(description)) {
    const isLongDescription = description.length > THRESHOLD;
    const itemsToShow = isLongDescription && !isExpanded ? description.slice(0, THRESHOLD) : description;
    return (
      <div className="detail-product-description">
        {itemsToShow.map((item, index) => {
          switch (item.type) {
            case 'heading': return <h4 key={index} className="detail-product-description-heading">{item.content}</h4>;
            case 'paragraph': return <p key={index} className="detail-product-description-paragraph">{item.content}</p>;
            default: return null;
          }
        })}
        {isLongDescription && (
          <button className="toggle-description-button" onClick={() => setIsExpanded(!isExpanded)} aria-expanded={isExpanded}>
            {isExpanded ? '▲ Read less' : '▼ Read more...'}
          </button>
        )}
      </div>
    );
  }
  return null;
};

const ProductDetailPage = ({ product, onBack, onAddReview }) => {
  const [selectedImage, setSelectedImage] = useState(product.gallery?.[0] || product.imageUrl);
  const handleBuyNow = () => window.open(product.purchaseUrl, '_blank', 'noopener,noreferrer');
  const handleSelectImage = (imageUrl) => {
    const img = document.querySelector<HTMLElement>('.detail-image');
    if (img) {
      img.style.opacity = '0';
      setTimeout(() => { setSelectedImage(imageUrl); img.style.opacity = '1'; }, 300);
    } else {
      setSelectedImage(imageUrl);
    }
  };
  const handleReviewSubmit = (review) => onAddReview(product.id, review);
  const { averageRating, reviewCount } = calculateReviewStats(product.reviews);
  return (
    <div className="product-detail-page">
      <SubPageHeader title="Details" onBack={onBack} />
      <main className="detail-content">
        <div className="detail-media-section">
            <div className="detail-image-container"><img src={selectedImage} alt={`${product.name} - current view`} className="detail-image" /></div>
             {product.gallery && product.gallery.length > 1 && (
              <div className="detail-gallery">
                {product.gallery.map((image, index) => (
                  <div key={index} className={`gallery-thumbnail-container ${image === selectedImage ? 'active' : ''}`} onClick={() => handleSelectImage(image)} onKeyDown={(e) => e.key === 'Enter' && handleSelectImage(image)} role="button" tabIndex={0} aria-label={`View image ${index + 1} of ${product.name}`}>
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="gallery-thumbnail" />
                  </div>
                ))}
              </div>
            )}
        </div>
        <div className="detail-info-panel">
          <h1 className="detail-product-name">{product.name}</h1>
          {reviewCount > 0 ? (
            <StarRating rating={averageRating} reviewCount={reviewCount} />
          ) : (
            <div className="product-rating no-reviews">No reviews yet</div>
          )}
          <div className="detail-price-container">
            {product.oldPrice && <span className="detail-old-price">${product.oldPrice.toFixed(2)}</span>}
            <span className="detail-product-price">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
                <span className="discount-badge">20% OFF!</span>
            )}
          </div>
          <StructuredDescription description={product.description} />
          <button className="buy-button" onClick={handleBuyNow}>BUY NOW</button>
          <ReviewSection onSubmit={handleReviewSubmit} />
          <ExistingReviews reviews={product.reviews} />
        </div>
      </main>
    </div>
  );
};

const LegalPage = ({ onBack }) => (
    <div className="generic-page">
        <SubPageHeader title="Legal / Terms of Service" onBack={onBack} />
        <main className="generic-page-content">
           <h3>Act on Specified Commercial Transactions</h3>
              <p><strong>Business Name:</strong> SFSBP Shop</p>
              <p><strong>Operator:</strong> Haruto Oikawa</p>
              <p><strong>Location:</strong> Osaka City, Osaka Prefecture, Japan (Exact address available upon request)</p>
              <p><strong>Contact Email:</strong> harutooikawa46@gmail.com</p>
              <p><strong>Sales Price:</strong> Displayed on each product page</p>
              <p><strong>Payment Method:</strong> Credit Card (via Stripe)</p>
              <p><strong>Delivery Method:</strong> Digital download via email or instant link</p>
              <p><strong>Delivery Time:</strong> Immediately after payment confirmation</p>
              <p><strong>Returns and Refunds:</strong> Due to the nature of digital products, returns and refunds are not accepted</p>
              <p><strong>Prohibited Actions:</strong> Redistribution, re-uploading, or resale of purchased blueprints is strictly prohibited</p>
        </main>
    </div>
);

const PrivacyPolicyPage = ({ onBack }) => (
    <div className="generic-page">
        <SubPageHeader title="Privacy Policy" onBack={onBack} />
        <main className="generic-page-content">
          <p>This Privacy Policy explains how your personal information is collected, used, and shared when you visit or make a purchase from SFSBP Shop.</p>

          <h4>Personal Information We Collect</h4>
          <p>When you make a purchase, we collect the following information: your name, email address, and payment details (handled securely via Stripe). We refer to this as "Order Information."</p>

          <p>We also collect messages you send through the contact form, which may include your email address and any information you provide voluntarily.</p>

          <h4>How We Use Your Information</h4>
          <p>We use the collected Order Information to fulfill purchases, send confirmation messages, and improve customer support. Your contact form submissions may be used to respond to your inquiries.</p>

          <h4>Data Retention</h4>
          <p>We retain Order Information and contact form submissions unless you request deletion by contacting us.</p>

          <h4>Sharing Your Information</h4>
          <p>We do not share your personal information with third parties except as required by law, or as necessary to process payments (e.g., via Stripe).</p>

          <h4>Changes to This Policy</h4>
          <p>This Privacy Policy may be updated periodically to reflect changes in legal requirements or business practices.</p>

          <h4>Contact</h4>
          <p>If you have any questions or requests regarding this Privacy Policy, please contact us at <a href="mailto:harutooikawa46@gmail.com">harutooikawa46@gmail.com</a> or via the contact form available on this website.</p>
        </main>
    </div>
);

const ContactPage = ({ onBack, onBackToList }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        if (!SPREADSHEET_API_URL) {
            alert("Developer Note: SPREADSHEET_API_URL is not set. The message cannot be sent.");
            console.log({ type: 'contact', name, email, message });
            setSubmitted(true);
            return;
        }

        setIsSubmitting(true);
        const payload = {
            type: 'contact',
            name,
            email,
            message,
        };

        try {
            await fetch(SPREADSHEET_API_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            // Since mode is 'no-cors', we can't inspect the response.
            // We assume success if fetch doesn't throw a network error.
            setSubmitted(true);
        } catch (error) {
            console.error("API Error: Failed to send contact message to Google Apps Script.", error);
            alert("An error occurred while sending your message. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="generic-page">
            <SubPageHeader title="Contact Us" onBack={onBack} />
            <main className="generic-page-content">
                {submitted ? (
                    <div className="form-success-message">
                        <h3>Thank You!</h3>
                        <p>Your message has been received. We will get back to you shortly.</p>
                        <button onClick={onBackToList} className="buy-button">Back to Store</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required disabled={isSubmitting} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={isSubmitting} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={6} disabled={isSubmitting}></textarea>
                        </div>
                        <button type="submit" className="review-submit-button" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                )}
            </main>
        </div>
    );
};


const App = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState({ name: 'list', id: null });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const loadProductsAndReviews = async () => {
      setIsLoading(true);
      let productData = await api.fetchProducts();
      if (SPREADSHEET_API_URL) {
        try {
          const response = await fetch(SPREADSHEET_API_URL);
          if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
          const result = await response.json();
          if (!result || !Array.isArray(result.data)) throw new Error("Invalid data format from spreadsheet.");
          const reviewsByProduct = new Map<number, any[]>();
          const header = result.data[0] || [];
          const reviewsData = result.data.slice(1);
          const idIndex = header.indexOf("Product ID"), ratingIndex = header.indexOf("Rating"), textIndex = header.indexOf("Text");
          if (idIndex > -1 && ratingIndex > -1 && textIndex > -1 && reviewsData.length > 0) {
            reviewsData.forEach(row => {
              if (!Array.isArray(row) || row.length <= Math.max(idIndex, ratingIndex, textIndex)) return;
              const productId = parseInt(row[idIndex], 10);
              const rating = parseFloat(row[ratingIndex]);
              if (isNaN(productId) || isNaN(rating)) return;
              const review = { rating, text: row[textIndex] || '' };
              if (!reviewsByProduct.has(productId)) reviewsByProduct.set(productId, []);
              reviewsByProduct.get(productId)!.unshift(review);
            });
          }
          productData = productData.map(product => ({ ...product, reviews: reviewsByProduct.get(product.id) || [] }));
        } catch (error) {
          console.error("Failed to fetch or process reviews from Google Sheet. Using local data.", error);
        }
      }
      setProducts(productData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(productData));
      setIsLoading(false);
    };
    loadProductsAndReviews();
  }, []);

  const handleProductSelect = (id) => setCurrentView({ name: 'detail', id });
  const handleBackToList = () => setCurrentView({ name: 'list', id: null });
  const handleNavigate = (page) => setCurrentView({ name: page, id: null });

  const handleBackToMenu = () => {
    setCurrentView({ name: 'list', id: null });
    setIsMenuOpen(true);
  };

  const handleAddReview = async (productId, review) => {
    if (!SPREADSHEET_API_URL) alert("Developer Note: To save reviews to Google Sheets, set the SPREADSHEET_API_URL. Reviews are currently saved locally only.");
    try {
      const updatedProducts = await api.addProductReview(productId, review, products);
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Failed to add review:", error);
      alert("Failed to sync review. It has been saved on this device, but please check your connection and try again later.");
    }
  };
  
  const renderContent = () => {
    const selectedProduct = products.find(p => p.id === currentView.id);
    switch (currentView.name) {
      case 'detail':
        return selectedProduct ? <ProductDetailPage product={selectedProduct} onBack={handleBackToList} onAddReview={handleAddReview} /> : <ProductListPage products={products} onProductSelect={handleProductSelect} onMenuClick={() => setIsMenuOpen(true)} />;
      case 'legal':
        return <LegalPage onBack={handleBackToMenu} />;
      case 'privacy':
        return <PrivacyPolicyPage onBack={handleBackToMenu} />;
      case 'contact':
        return <ContactPage onBack={handleBackToMenu} onBackToList={handleBackToList} />;
      case 'list':
      default:
        return <ProductListPage products={products} onProductSelect={handleProductSelect} onMenuClick={() => setIsMenuOpen(true)} />;
    }
  };
  
  if (isLoading) {
    return (
      <div className="app-loading">
        <MainHeader onMenuClick={() => {}} />
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Loading Blueprints...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="app">
      {renderContent()}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigate={handleNavigate} />
    </div>
  );
};

const container = document.getElementById('root');
if(container){
    const root = createRoot(container);
    root.render(<React.StrictMode><App /></React.StrictMode>);
}