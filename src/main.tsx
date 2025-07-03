import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const initialProducts = [
  {
    id: 1,
    name: 'Titan-Starship Blueprint',
    imageUrl: 'https://i.ibb.co/3yhp63qV/IMG-9133.png',
    purchaseUrl: 'https://buy.stripe.com/test_eVqbJ3a2Gc6B9Zh4JTaAw01',
    price: 3.99,
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

// --- Google Apps Script Integration ---
// IMPORTANT: To save and load reviews from a Google Sheet, you need to:
// 1. Create a new Google Apps Script project.
// 2. Paste the recommended `doGet` and `doPost` functions below into the script editor.
// 3. Deploy the script as a Web App (Deploy > New deployment).
// 4. Configure the Web App to "Execute as: Me" and "Who has access: Anyone".
// 5. Copy the generated Web App URL and paste it here.
/*
  // --- Recommended Google Apps Script (Code.gs) ---
  const SHEET_NAME = "Reviews";
  const HEADER = ["Timestamp", "Product ID", "Product Name", "Rating", "Text"];

  // This function runs when the app requests all review data (GET request).
  function doGet(e) {
    try {
      const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      let sheet = spreadsheet.getSheetByName(SHEET_NAME);

      // If the sheet doesn't exist, create it.
      if (!sheet) {
        sheet = spreadsheet.insertSheet(SHEET_NAME);
      }
      
      // If the sheet is completely empty, add the header row.
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(HEADER);
      }
      
      const data = sheet.getDataRange().getValues();
      
      // Return all data from the sheet.
      return ContentService
        .createTextOutput(JSON.stringify({ data: data }))
        .setMimeType(ContentService.MimeType.JSON);

    } catch (err) {
      // Log any errors for debugging.
      Logger.log(err.toString());
      return ContentService
        .createTextOutput(JSON.stringify({ result: 'error', message: err.message }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  // This function runs when the app sends review data via a POST request.
  function doPost(e) {
    // Use LockService to prevent race conditions from concurrent requests.
    const lock = LockService.getScriptLock();
    lock.waitLock(30000); // Wait up to 30 seconds for other processes to finish.

    try {
      const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      let sheet = spreadsheet.getSheetByName(SHEET_NAME);

      // If the sheet doesn't exist, create it and add the header row.
      if (!sheet) {
        sheet = spreadsheet.insertSheet(SHEET_NAME);
        sheet.appendRow(HEADER);
      }
      
      // If the sheet is empty, add the header row.
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(HEADER);
      }

      // Parse the incoming data from the web app.
      const data = JSON.parse(e.postData.contents);
      
      // Basic validation to ensure we have the minimum required data.
      if (!data.productId || !data.rating) {
        throw new Error("Missing required data fields (productId, rating).");
      }

      // Append the new review as a row in the sheet.
      sheet.appendRow([
        data.timestamp || new Date().toISOString(),
        data.productId,
        data.productName || 'N/A',
        data.rating,
        data.text || ''
      ]);
      
      // Return a success response to the client.
      return ContentService
        .createTextOutput(JSON.stringify({ result: 'success', row: sheet.getLastRow() }))
        .setMimeType(ContentService.MimeType.JSON);

    } catch (err) {
      // Log the error for debugging purposes in Apps Script.
      Logger.log(err.toString());
      
      // Return a detailed error response to the client.
      return ContentService
        .createTextOutput(JSON.stringify({ result: 'error', message: err.message }))
        .setMimeType(ContentService.MimeType.JSON);

    } finally {
      // Always release the lock to allow other requests to proceed.
      lock.releaseLock();
    }
  }
*/
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
          resolve(initialProducts); // Fallback to initial data on error
        }
      }, 500);
    });
  },

  addProductReview: async (productId: number, review: { rating: number; text: string }, allProducts: any[]): Promise<any[]> => {
    const product = allProducts.find(p => p.id === productId);

    // If the URL is configured, send the review to the Google Sheet.
    if (SPREADSHEET_API_URL && product) {
      const payload = {
        timestamp: new Date().toISOString(),
        productId: productId,
        productName: product.name,
        rating: review.rating,
        text: review.text,
      };

      try {
        // We use 'no-cors' mode because standard Apps Script deployments can have CORS issues.
        // This sends the request ("fires and forgets") without trying to read the response,
        // which avoids cross-origin errors.
        await fetch(SPREADSHEET_API_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } catch (error) {
        console.error("API Error: Failed to send review to Google Apps Script.", error);
        // We throw the error so the UI layer can notify the user of the sync failure.
        throw error;
      }
    }

    // Optimistic Update: Update the local state immediately for a good user experience.
    const updatedProducts = allProducts.map(p =>
      p.id === productId ? { ...p, reviews: [review, ...p.reviews] } : p
    );
    // Persist the new review in localStorage so it's there on page reload.
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
    {reviewCount && <span className="review-count">({reviewCount} reviews)</span>}
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
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="buy-button-small" onClick={handleBuyNowClick} onKeyDown={handleButtonKeyDown} aria-label={`Buy ${product.name} now`}>
          BUY NOW
        </button>
      </div>
    </div>
  );
};

const CartIcon = () => (
    <div className="cart-icon-wrapper">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 7.5L16 3M16 3L13.5 7.5M16 3V12M16 12C16 13.5 15.5 15 14.5 16M16 12C16 13.5 16.5 15 17.5 16" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 21H17C17.5523 21 18 20.5523 18 20V19C18 17.8954 17.1046 17 16 17H8C6.89543 17 6 17.8954 6 19V20C6 20.5523 6.44772 21 7 21Z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <div className="cart-badge">1</div>
    </div>
);


const ListHeader = () => (
  <header className="header">
    <div className="header-brand">
      <img src="https://i.ibb.co/jPnwrGsD/photo-output.jpg$0" alt="IAMSPACEROCKET logo" className="header-logo" />
      <h1 className="header-title">IAMSPACEROCKET</h1>
    </div>
    <div className="header-actions">
       <CartIcon />
    </div>
  </header>
);

const ProductListPage = ({ products, onProductSelect }) => (
  <>
    <ListHeader />
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
  const THRESHOLD = 4; // Show first 4 items before collapsing

  if (!description) {
    return null;
  }

  // Handle plain string descriptions
  if (typeof description === 'string') {
    return (
      <div className="detail-product-description">
        <p className="detail-product-description-paragraph">{description}</p>
      </div>
    );
  }

  // Handle structured array descriptions
  if (Array.isArray(description)) {
    const isLongDescription = description.length > THRESHOLD;
    const itemsToShow = isLongDescription && !isExpanded ? description.slice(0, THRESHOLD) : description;

    return (
      <div className="detail-product-description">
        {itemsToShow.map((item, index) => {
          switch (item.type) {
            case 'heading':
              return <h4 key={index} className="detail-product-description-heading">{item.content}</h4>;
            case 'paragraph':
              return <p key={index} className="detail-product-description-paragraph">{item.content}</p>;
            default:
              return null;
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
      <header className="header detail-header">
        <button onClick={onBack} className="back-button" aria-label="Go back to product list"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
        <h2 className="header-title">Details</h2>
        <div style={{ width: '44px' }} />
      </header>
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
          <p className="detail-product-price">${product.price.toFixed(2)}</p>
          <StructuredDescription description={product.description} />
          <button className="buy-button" onClick={handleBuyNow}>BUY NOW</button>
          <ReviewSection onSubmit={handleReviewSubmit} />
          <ExistingReviews reviews={product.reviews} />
        </div>
      </main>
    </div>
  );
};

const App = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const loadProductsAndReviews = async () => {
      setIsLoading(true);
      
      let productData = await api.fetchProducts();

      if (SPREADSHEET_API_URL) {
        try {
          const response = await fetch(SPREADSHEET_API_URL);
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          const result = await response.json();

          if (!result || !Array.isArray(result.data)) {
            throw new Error("Invalid data format from spreadsheet.");
          }

          const reviewsByProduct = new Map<number, any[]>();
          const header = result.data[0] || [];
          const reviewsData = result.data.slice(1);

          const idIndex = header.indexOf("Product ID");
          const ratingIndex = header.indexOf("Rating");
          const textIndex = header.indexOf("Text");
          
          if (idIndex > -1 && ratingIndex > -1 && textIndex > -1 && reviewsData.length > 0) {
            reviewsData.forEach(row => {
              if (!Array.isArray(row) || row.length <= Math.max(idIndex, ratingIndex, textIndex)) {
                console.warn('Skipping malformed review row:', row);
                return;
              }

              const productId = parseInt(row[idIndex], 10);
              const rating = parseFloat(row[ratingIndex]);
              
              if (isNaN(productId) || isNaN(rating)) {
                console.warn('Skipping malformed review data:', row);
                return;
              }

              const review = { rating, text: row[textIndex] || '' };
              if (!reviewsByProduct.has(productId)) {
                reviewsByProduct.set(productId, []);
              }
              reviewsByProduct.get(productId)!.unshift(review);
            });
          }
          
          // After a successful fetch, the spreadsheet becomes the source of truth.
          // We replace all local reviews with the ones from the sheet.
          productData = productData.map(product => ({
            ...product,
            reviews: reviewsByProduct.get(product.id) || [],
          }));

        } catch (error) {
          console.error("Failed to fetch or process reviews from Google Sheet. Using local data.", error);
          // When an error occurs, we consciously do nothing to `productData`,
          // so it retains the state from localStorage as a fallback.
        }
      }
      
      setProducts(productData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(productData));
      setIsLoading(false);
    };

    loadProductsAndReviews();
  }, []);

  const handleProductSelect = (id) => setSelectedProductId(id);
  const handleBack = () => setSelectedProductId(null);

  const handleAddReview = async (productId, review) => {
    if (!SPREADSHEET_API_URL) {
      alert("Developer Note: To save reviews to Google Sheets, set the SPREADSHEET_API_URL in `index.tsx`. Reviews are currently saved locally only.");
    }
    try {
      const updatedProducts = await api.addProductReview(productId, review, products);
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Failed to add review:", error);
      alert("Failed to sync review. It has been saved on this device, but please check your connection and try again later.");
    }
  };
  
  const selectedProduct = products.find(p => p.id === selectedProductId);

  if (isLoading) {
    return (
        <div className="app-loading">
            <ListHeader />
            <div className="loading-indicator">
                <div className="spinner"></div>
                <p>Loading Blueprints...</p>
            </div>
        </div>
    );
  }
  
  return (
    <div className="app">
      {selectedProduct ? (
        <ProductDetailPage product={selectedProduct} onBack={handleBack} onAddReview={handleAddReview} />
      ) : (
        <ProductListPage products={products} onProductSelect={handleProductSelect} />
      )}
    </div>
  );
};

const container = document.getElementById('root');
if(container){
    const root = createRoot(container);
    root.render(<React.StrictMode><App /></React.StrictMode>);
}