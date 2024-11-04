import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#090909] text-white py-8  px-4 md:px-8'>
      <div className='container mx-auto flex flex-col gap-6'>
        <h2 className='text-3xl font-bold text-center mb-8'>SkyEdge Digital</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold text-primary'>SkyEdge Digital</h3>
            <p className='text-gray-300 text-sm leading-relaxed'>
              The SkyEdge Digital - powered by RM Tech Solutions offers a
              complete solution from enterprise-grade digital products and
              business features to advanced SEO and marketing solutions enabling
              anyone to grow online.
            </p>
          </div>

          {/* Products */}
          <div className='space-y-4 '>
            <h3 className='text-xl font-semibold text-primary'>Products</h3>
            <ul className='space-y-2 text-gray-300'>
              <li>Website Design</li>
              <li>Website Development</li>
              <li>App Development</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>

          {/* Contacts */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-primary'>Contacts</h3>
            <ul className='space-y-2 text-gray-300'>
              <li>madhurendra.pratap@skyedgedigital.in</li>
              <li>Ph: 7320003909</li>
            </ul>
            <div className='flex gap-6 text-2xl mt-4'>
              <a
                href='https://www.facebook.com/profile.php?id=61567008115846'
                className='text-[#1877F2] hover:text-blue-500 transition-colors'
              >
                <FaFacebook />
              </a>
              <a
                href='https://www.instagram.com/skyedge_digital?igsh=YnM0MG04dmpjdWxy'
                className='text-[#E4405F] hover:text-pink-500 transition-colors'
              >
                <FaInstagram />
              </a>
              <a
                href='https://www.linkedin.com/company/skyedge-digital/posts/?feedView=all'
                className='text-[#0A66C2] hover:text-blue-400 transition-colors'
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <p className='text-center mt-4 text-sm '>
          Powered by - RM Tech Solutions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
