import React from "react";
import "./LeadGenerationCard.css";

function LeadGenerationCard({title = "title", description ="dsecription"}) {
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col">
            <div className="container-div">
              <img
                loading="lazy"
               
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c51dd81d9969efab296c1cbe13aa7a5f3b8ac087f6a65df16ae187654c318b79?apiKey=7b33810ed647447ba02670f0c33d6eb8&"
                alt ="Lead generation card image"
                className="image"
              />
              <div>
                <div className="title">
                  {title}
                </div>
                <div className="description">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeadGenerationCard;
