import Icon from "./Icon";

export default function NavBar() {
  const links = [
    { icon: "FaGithub", to: "https://github.com/Contentrain/" },
    { icon: "FaTwitter", to: "https://twitter.com/contentrain_io" },
    { icon: "FaLinkedin", to: "https://www.linkedin.com/company/contentrain/" },
    { icon: "FaDiscord", to: "https://discord.com/invite/4db2PjWYtG" },
  ];
  // Active Link and Route Matching Logic Here

  return (
    <nav>
      <ul className="flex justify-center items-center">
        {links.map((link, index) => (
          <li
            className="cursor-pointer mx-2 my-1 font-bold hover:text-indigo-500"
            key={link.icon + index}
          >
            <a href={link.to} target="_blank" rel="noreferrer">
              <Icon className="w-5 h-5" icon={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}