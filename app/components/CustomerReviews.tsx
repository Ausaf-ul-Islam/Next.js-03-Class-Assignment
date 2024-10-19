import React from "react";
import { FaStar } from "react-icons/fa"; // For the star ratings

const CustomerReviews: React.FC = () => {
  return (
    <section id="customer-reviews" className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-white tracking-wide text-center uppercase">
          Customer Reviews
        </h2>
        <div className="space-y-8">
          {/* Review 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <img
              src="https://designimages.appypie.com/allimages/displaypicture17.jpg" // Placeholder image, replace with actual customer photo
              alt="John Doe"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <p className="text-lg text-white mb-2">
                "ASF Enterprises has been an amazing partner for our web development projects. Highly recommend!"
              </p>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-400">- John Doe</p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <img
              src="https://i.pinimg.com/736x/ca/dc/fa/cadcfac48b86e972ee291cbd8ca2bb68.jpg" // Placeholder image, replace with actual customer photo
              alt="Jane Smith"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <p className="text-lg text-white mb-2">
                "Their SEO services helped us rank on the first page of Google in just a few months."
              </p>
              <div className="flex mb-2">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-400">- Jane Smith</p>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <img
              src="https://img.freepik.com/premium-photo/employee-labor_1299778-10012.jpg" // Placeholder image, replace with actual customer photo
              alt="Sarah Lee"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <p className="text-lg text-white mb-2">
                "Professional and creative graphic design that has helped our brand's image tremendously."
              </p>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-400">- Sarah Lee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
