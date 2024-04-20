import React from "react";
import "./StepCard.css";
function StepCard({colour = "red" , img = 'img' ,  title = "title" , description = "description"}) {
  return (
      <div class="container" >
        <div class="row">
          <div class="col">
            <div className="container-section"  style={{
                background: `${colour}`,
              
              }}>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bf6faf50008e18394394f37b8249257a2be3b3ae42cbb3abcf0706163f46cd16?apiKey=7b33810ed647447ba02670f0c33d6eb8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf6faf50008e18394394f37b8249257a2be3b3ae42cbb3abcf0706163f46cd16?apiKey=7b33810ed647447ba02670f0c33d6eb8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf6faf50008e18394394f37b8249257a2be3b3ae42cbb3abcf0706163f46cd16?apiKey=7b33810ed647447ba02670f0c33d6eb8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf6faf50008e18394394f37b8249257a2be3b3ae42cbb3abcf0706163f46cd16?apiKey=7b33810ed647447ba02670f0c33d6eb8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf6faf50008e18394394f37b8249257a2be3b3ae42cbb3abcf0706163f46cd16?apiKey=7b33810ed647447ba02670f0c33d6eb8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf6faf50008e18394394f37b8249257a2be3b3ae42cbb3abcf0706163f46cd16?apiKey=7b33810ed647447ba02670f0c33d6eb8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf6faf50008e18394394f37b8249257a2be3b3ae42cbb3abcf0706163f46cd16?apiKey=7b33810ed647447ba02670f0c33d6eb8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf6faf50008e18394394f37b8249257a2be3b3ae42cbb3abcf0706163f46cd16?apiKey=7b33810ed647447ba02670f0c33d6eb8&"
                className="avatar"
              />
              <div className="title">
                {title}
              <div className="description">
                {description}
              </div>
            </div>
          </div>
       
        </div>
      </div>
      </div>
    
  );
}

export default StepCard;
