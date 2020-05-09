import { FaRegNewspaper, FaRegImages, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import "typeface-jetbrains-mono";
import Circles from "./circles"
import EmojiLink from "./emoji-link"
import "./index.css";

export default () => {
  const siteTitle = `yong.space`;
  const linksData = [
    { emoji: <FaRegNewspaper />, href: "blog.yong.space" },
    { emoji: <FaRegImages />, href: "gallery.yong.space" },
    { emoji: <FaTwitterSquare />, href: "twitter.com/ystan_" },
    { emoji: <FaLinkedin />, href: "linkedin.com/in/tanys" }
  ];
  const links = linksData.map(data => <EmojiLink {...data} />)

  return (
    <div className="console">
      <a class="skip-link" href="#content">Skip to main</a>
      <div className="title-bar">
        <Circles />
        {siteTitle}
      </div>
      <div id="content">
        $ ls -l
        {links}
      </div>
    </div>
  )
}
