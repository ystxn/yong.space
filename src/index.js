import { faNewspaper, faImages } from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./jetbrains-mono.scss";
import "./index.scss";

export default () => {
  const siteTitle = `yong.space`;
  const linksData = [
    { emoji: faNewspaper, href: "blog.yong.space" },
    { emoji: faImages, href: "gallery.yong.space" },
    { emoji: faTwitterSquare, href: "twitter.com/ystan_" },
    { emoji: faLinkedin, href: "linkedin.com/in/tanys" }
  ];
  const links = linksData.map(({ emoji, href }) => {
    const text = href.substring(0, href.indexOf("."));
    return (
      <a
        key={text}
        rel="noopener noreferrer"
        target="_blank"
        href={`//${href}`}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${emoji.icon[0]} ${emoji.icon[1]}`}
        >
          <path d={ emoji.icon[4] } fill="currentColor" />
        </svg>
        {` ./${text}`}
      </a>
    );
  });
  const circles = ["red", "yellow", "green"];

  return (
    <div className="console">
      <a class="skip-link" href="#content">Skip to main</a>
      <div className="title-bar">
        <div className="circles">
          {circles.map(c => (
            <div key={c} className={`circle ${c}`}></div>
          ))}
        </div>
        {siteTitle}
      </div>
      <div id="content">
        $ ls -l
        {links}
      </div>
    </div>
  )
}
