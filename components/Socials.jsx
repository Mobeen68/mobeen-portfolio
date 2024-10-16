import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Mobeen68" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/mobeen-ejaz-8174a5198/",
  },
  // { icon: <FaYoutube />, path: "" },
  // { icon: <FaTwitter />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link href={social.path} key={index} className={iconStyles} target="_blank">
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
