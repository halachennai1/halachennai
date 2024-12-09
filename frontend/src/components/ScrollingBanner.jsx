import { useState } from "react";
import { MdClose } from "react-icons/md";

function ScrollingBanner({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-black text-white text-center py-2 fixed top-0 z-50">
      <div className="flex justify-between max-w-full mx-auto px-4">
        <div className="flex-grow">
          <marquee className="text-m">
            Customized orders require an additional 5 - 6 days for processing. We appreciate your patience and encourage you to plan your orders accordingly. Thank you for choosing us!
          </marquee>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose(); // Close the banner and notify the parent (Navbar)
          }}
          className="text-sm  text-white hover:text-black hover:bg-gray-200 px-2 py-1 rounded"
        >
          <MdClose size={20} />
        </button>
      </div>
    </div>
  );
}

export default ScrollingBanner;
