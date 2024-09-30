import linkedIn from "../assets/linkedin.png";
import x from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center my-10 gap-7">
      <a
        className="hover:opacity-50"
        href="https://www.linkedin.com"
        rel="noreferrer"
        target="_blank"
      >
        <img src={linkedIn} />
      </a>
      <a
        className="hover:opacity-50"
        href="https://www.instagram.com"
        rel="noreferrer"
        target="_blank"
      >
        <img src={instagram} />
      </a>
      <a
        className="hover:opacity-50"
        href="https://www.x.com"
        rel="noreferrer"
        target="_blank"
      >
        <img src={x} />
      </a>
      <a
        className="hover:opacity-50"
        href="https://www.facebook.com"
        rel="noreferrer"
        target="_blank"
      >
        <img src={facebook} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
