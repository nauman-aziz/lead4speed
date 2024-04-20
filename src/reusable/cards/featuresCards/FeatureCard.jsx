import React from "react";
import "./FeatureCard.css";
function FeatureCard() {
  return (
    
      <div className="container mt-5 mb-3 border rounded-lg shadow-lg">
        <div className="row">
          <div className="col">
            <div className="my-component">
              <img
                loading="lazy"
                
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/21f9669777f29f7b667dd5a5feb85637377961594d62bce981654035775feca1?apiKey=7b33810ed647447ba02670f0c33d6eb8&"
                alt =" ? "
                className="my-image"
              />
              <div className="heading">Heading goes here</div>
              <div className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default FeatureCard;
