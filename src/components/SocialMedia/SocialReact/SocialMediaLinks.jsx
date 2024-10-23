import FacebookLink from "./FacebookLink.jsx";
import Youtube from "./YoutubeLink.jsx";
import Linkedin from "./LinkedinLink.jsx";
import "../socialMediaLinks.scss";

const SocialMediaLinks = ({ socialMedia }) => {
  return (
    <div className="social-media">
      <ul className="social-media-links">
        <FacebookLink link={socialMedia.socialMedia.facebookLink} />
        <Youtube link={socialMedia.socialMedia.youTubeLink} />
        <Linkedin link={socialMedia.socialMedia.linkedinLink} />
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
