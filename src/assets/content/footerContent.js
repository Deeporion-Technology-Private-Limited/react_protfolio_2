import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

// Text Information For Header
export const footerText = {
  newsletter:
    "Subscribe to newsletter and unlock a world of exclusive benefits. Be the first to know about my latest projects, special promotions, and exciting work.",
  blurb:
    "Embark on a captivating visual journey with me, where each frame serves as a testament to the beauty inherent in both the world around us and within each individual.",
  copyright: "© 2023 All rights reserved",
};

// Navigation Array for Quick Links
export const pageNavigation = [
  {
    id: "1",
    to: "/home",
    linkName: "Home",
  },
  {
    id: "2",
    to: "/home",
    linkName: "Portfolio",
  },
  {
    id: "3",
    to: "/about",
    linkName: "About Us",
  },
  {
    id: "4",
    to: "/services",
    linkName: "Services",
  },
  {
    id: "5",
    to: "/contact",
    linkName: "Contact Us",
  },
];

// Array for Icon names
export const iconNames = [
  {
    id: "1",
    icon: <BiLogoFacebook className="icon_size" />,
  },
  {
    id: "2",
    icon: <BiLogoInstagram className="icon_size" />,
  },
  {
    id: "3",
    icon: <BiLogoYoutube className="icon_size" />,
  },
  {
    id: "4",
    icon: <FaXTwitter className="icon_size" />,
  },
];

// Array for Blogs
export const blogNames = [
  {
    id: "1",
    to: "/home",
    linkName: "How a photographer looks like",
    date: "8 Nov, 2021",
  },
  {
    id: "2",
    to: "/home",
    linkName: "People saying about Tabea",
    date: "8 Nov, 2021",
  },
];
