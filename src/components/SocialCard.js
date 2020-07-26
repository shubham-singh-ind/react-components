import React, { useRef, useEffect } from "react";

import "./SocialCard.css";

function SocialCard({
  profileUrl,
  name,
  description,
  postedDate,
  postUrl,
  postDescription,
  noOflikes,
  noOfcomments,
  noOfShares
}) {
  const actions = useRef(null);

  useEffect(() => {
    actions.current.style.visibility = "hidden";
  }, []);

  const toggleActions = () => {
    let visibility = actions.current.style.visibility;
    visibility = visibility === "hidden" ? "visible" : "hidden";
    actions.current.style.visibility = visibility;
  };
  return (
    <div className="socialCard">
      <div className="socialCard__profileImage">
        <img src={profileUrl} alt={name} />
      </div>
      <div className="socialCard__right">
        <div className="socialCard__userDetailAndActions">
          <div className="socialCard__userDetail">
            <p className="socialCard__name">
              {name} • {postedDate}
            </p>
            <p className="socialCard__description">{description}</p>
          </div>
          <div className="socialCard__actions">
            <i
              className="fa fa-angle-down"
              aria-hidden="true"
              onClick={toggleActions}
            />
            <ul className="socialCard__actionContent" ref={actions}>
              <li>Report</li>
              <li>Mark In-appropriate</li>
              <li>Edit</li>
              <li>Delete</li>
            </ul>
          </div>
        </div>
        <div className="socialCard__post">
          <img src={postUrl} alt={name} />
          <div className="socialCard__postDescription">
            <p className="socialCard__name">{description}</p>
            <p className="socialCard__description">{postDescription}</p>
          </div>
        </div>
        <div className="socialCard__userActions">
          <div className="socialCard__comment">
            <i className="fa fa-comment-o" aria-hidden="true" />
            <span>{noOfcomments}</span>
          </div>
          <div className="socialCard__share">
            <i className="fa fa-retweet" aria-hidden="true" />
            <span>{noOfShares}</span>
          </div>
          <div className="socialCard__like">
            <i className="fa fa-heart-o" aria-hidden="true" />
            <span>{noOflikes}</span>
          </div>
          <div className="socialCard__message">
            <i className="fa fa-envelope-o" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialCard;
