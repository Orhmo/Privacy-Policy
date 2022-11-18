import React from 'react';


const Footer = () => {
  return (
    <div className="App">

      <div className=".footer bg-[#646464] text-white p-12 flex flex-cols items-center gap-6 justify-center text-[12px] font-[400]">
        <span className="lg:mr-16 sm:mr-0">&#169; 2022 Grittygrammar  </span>
            <ul className="flex flex-wrap">
              <li>
                <a href="help" className="mr-8 pr-8 sm:mr-0 hover:underline md:mr-6 ">help</a>
              </li>
              <li>
                <a href="safety" className="mr-8 pr-8 sm:mr-0 hover:underline md:mr-6">safety</a>
              </li>
              <li>
                <a href="privacy" className="mr-8 pr-8 sm:mr-0 hover:underline md:mr-6">privacy</a>
              </li>
              <li>
                <a href="terms" className="mr-8 pr-8  sm:mr-0 hover:underline">terms</a>
              </li>
              <li>
                <a href="about-us" clasName="hover:underline">about us</a>
              </li>
            </ul>
          </div>
    </div>
  );
}

export default Footer;
