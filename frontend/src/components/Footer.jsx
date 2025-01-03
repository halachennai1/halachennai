// // src/components/Footer.jsx
// // import React from 'react';
// import { FaInstagram, FaFacebookF, FaTwitter, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-gray-300 py-10">
//       <div className="container mx-auto text-center">
//         <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
        
//         <div className="flex justify-center space-x-6 mb-6">
//           <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-emerald-400">
//             <FaInstagram size={24} />
//           </a>
//           <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-emerald-400">
//             <FaFacebookF size={24} />
//           </a>
//           <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-emerald-400">
//             <FaTwitter size={24} />
//           </a>
//         </div>

//         <div className="text-sm mb-4">
//           <p><FaMapMarkerAlt className="inline-block mr-2" />123 Main Street, Chennai, India</p>
//           <p><FaEnvelope className="inline-block mr-2" />contact@yourwebsite.com</p>
//         </div>

//         <p className="text-sm">
//           &copy; {new Date().getFullYear()} Hala Chennai | All Rights Reserved
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { FaInstagram, FaFacebookF, FaTwitter,FaYoutube, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.instagram.com/hala.chennai/profilecard/?igsh=NTR4MjRkdGQ2NTFr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-emerald-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-emerald-400">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.youtube.com/@halachennai" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-emerald-400">
            <FaYoutube size={24} />
          </a>
        </div>

        <div className="text-sm mb-4">
          <p><FaMapMarkerAlt className="inline-block mr-2" />Shop address : Benzer, 276, Purasaivakkam High Rd, opp. to Saravana store, Purasaiwakkam, Chennai, Tamil Nadu 600007</p>
          <p><FaEnvelope className="inline-block mr-2" />halachennai@gmail.com</p>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hala Chennai |{' '}
          <Link to="/legal" className="text-emerald-400 hover:text-emerald-600">Legal Terms</Link> {/* Updated link */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
