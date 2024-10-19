import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 mt-4">
          &copy; 2024 Ausaf Ul Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
