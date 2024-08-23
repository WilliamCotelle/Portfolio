import React from "react";

function IconLink(props) {
  const { link, title, icon, onClick } = props;

  const handleClick = (e) => {
    if (!link) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={link || "#"}
      onClick={handleClick}
      target={link ? "_blank" : ""}
      rel="noopener noreferrer"
    >
      <i className={icon} /> {title}
    </a>
  );
}

export default IconLink;
