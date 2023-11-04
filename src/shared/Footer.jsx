import { Link } from "react-router-dom";
import navlogo from "../assets/images/final-logo.png";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer p-10 bg-main font-semibold  text-base">
          <div className="flex flex-col items-center">
            <div>
              <img className="w-20" src={navlogo} alt="" />
            </div>
            <div className="text-center">
              <h3 className="font-raleway  normal-case text-xl lg:text-4xl">
                Work <span className="">Loom</span>
              </h3>
              <p className="text-gray-600">Connecting People for a Decade.</p>
              <p className="text-xs mt-3">Copyright-2023© </p>
            </div>
          </div>
          <nav>
            <header className="footer-title">Services</header>
            <Link className="link link-hover">Branding</Link>
            <Link className="link link-hover">Design</Link>
            <Link className="link link-hover">Marketing</Link>
            <Link className="link link-hover">Advertisement</Link>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
