import Social from "./Social";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6 font-body">
        <div className="flex flex-col justify-center items-center space-y-6 py-4">
          <div className="text-center">
            <h3 className="text-4xl font-heading font-bold">Rahul Gupta</h3>
            <p className="text-lg text-gray-300 mt-4 italic">Living, learning, & leveling up — every single day.</p>
          </div>
          <Social />
        </div>

        <div className="border-t border-gray-700 mt-6 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Rahul Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;