// components/Footer.js
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';

const Footer = () => {
  return (
    <footer className=" absoulute mb-0 bottom-0 bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="flex items-center text-sm mb-2"><MailIcon className="h-4 w-4 mr-2" /> @SwasthyaSamriddhi.gov.in</p>
          <p className="flex items-center text-sm mb-2"><PhoneIcon className="h-4 w-4 mr-2" /> 123-456-7890</p>
          <p className="flex items-center text-sm mb-2"><LocationMarkerIcon className="h-4 w-4 mr-2" /> 123 Main Street, City, Country</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-xl"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-xl"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-xl"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-xl"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} SwasthyaSamriddhi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
