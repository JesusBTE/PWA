// src/components/ShareButtons.jsx
import { FaTwitter, FaFacebook } from 'react-icons/fa';

const ShareButtons = ({ url, text }) => {
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  return (
    <div className="d-flex justify-content-center gap-3">
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary d-flex align-items-center gap-2">
        <FaTwitter /> Twitter
      </a>
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#1877F2', color: '#fff' }}>
        <FaFacebook /> Facebook
      </a>
    </div>
  );
};

export default ShareButtons;
