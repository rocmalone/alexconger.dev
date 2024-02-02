import style from "./FlipCard.module.css";

function FlipCard({ content }) {
  // const frontOpacity = ;

  const clickTryIt = () => {
    window.open(content.link);
  };

  const clickSource = () => {
    window.open(content.githubLink);
  };
  return (
    <div className={style.flip}>
      <div
        className={style.front}
        style={{
          backgroundImage: `url(${content.image})`,
        }}
      >
        <h1 className={style.textShadow}>{content.frontHeading}</h1>
      </div>
      <div className={style.back}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img className={style.icon} src={content.icon}></img>
          <div>
            <div className={style.heading}>{content.backHeading}</div>
            <div className={style.subHeading}>{content.backSubHeading}</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <div className={style.techHeading}>TECH</div>
          <div className={style.techBody}>{content.tech}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={style.techHeading}>FEATURES</div>
          <div className={style.techBody}>
            <ul>
              {content.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {(content.githubLink || content.link) && (
          <div className={style.buttons}>
            {content.link && <button onClick={clickTryIt}>Try it!</button>}
            {content.githubLink && (
              <button onClick={clickSource}>Source</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FlipCard;
