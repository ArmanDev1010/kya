import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/MyContext";

const FooterLinks = (props) => {
  const { isDesktop } = useContext(MyContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <ul
      className="flex flex-col gap-6 flex-1"
      style={
        isDesktop < 1000 && props.title == "other" ? { display: "none" } : null
      }
    >
      <li className="text-[18px] font-medium">
        {t(`footer.title_links.${props.title}`)}
      </li>
      {[
        "business",
        "rights",
        "self_knowledge",
        "story",
        "reviews",
        "partners",
        "team",
        "media",
        "advantages",
      ]
        .slice(
          props.title == "courses" ? 0 : props.title == "about" ? 3 : 7,
          props.title == "courses" ? 3 : props.title == "about" ? 7 : 9
        )
        .map((text, key) => (
          <li
            key={key}
            onClick={
              props.title !== "courses"
                ? () => navigate("/", { state: { targetId: `${text}` } })
                : null
            }
            className="text-[17px] transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer"
          >
            {props.title == "courses" ? (
              <Link to={`courses/${text}`}>{t(`footer.links.${text}`)}</Link>
            ) : (
              t(`footer.links.${text}`)
            )}
          </li>
        ))}
    </ul>
  );
};

export default FooterLinks;
