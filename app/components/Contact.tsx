import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-black flex items-center justify-center py-20 px-4"
      style={{ minHeight: "100vh" }}
    >
      <div className="container mx-auto text-center text-white">
        <h1 className="text-5xl font-extrabold mb-12 tracking-wider">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Location Map */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <iframe
              className="w-full h-72 lg:h-96 rounded-xl shadow-2xl border-4 border-white"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5313906350466!2d67.19876541033443!3d24.845694277846825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3309a1285ed8b%3A0xf6996718975e5724!2s89%20Landhi%20Rd%2C%20Sector%2037%20B%20Landhi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1728668574022!5m2!1sen!2s"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="w-full lg:w-1/2 text-center">
            <a
              href="mailto:ausafkhan7777@gmail.com"
              className="inline-block text-lg mb-6 bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Email: ausafkhan7777@gmail.com
            </a>
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-2 mt-8">
              <a
                href="https://x.com/ausaf_ul_islam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full text-blue-500 hover:text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://www.youtube.com/@asf_writes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full text-red-700 hover:text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <FaYoutube className="text-2xl" />
              </a>
              <a
                href="https://github.com/Ausaf-ul-Islam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100075926784195"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full text-blue-600 hover:text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/ausafkhan987/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full text-pink-500 hover:text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
