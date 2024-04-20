// Header.jsx

import IconButton from '../reusable/buttons/IconButton';
import {PrimaryButton} from '../reusable/buttons/PrimaryButton';
export default function Header() {
    return (
      <div className="relative bg-white w-full h-[793px]">
        <img src="/path-to-your-background-image.jpg" alt="Background" className="absolute w-full h-full object-cover opacity-0" />
        
        <div className="relative flex items-center justify-between h-full px-10">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-800">
              Seller’s Leads.<br/>Hassle-free.
            </h1>
            <p className="text-lg text-gray-600">
              We help agents close above their quota. Claim your<br/>territory before someone else does.
            </p>
            {/* <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
              Get Started
            </button> */}
           <IconButton text = "Get Started" icon ="https://cdn.builder.io/api/v1/image/assets/TEMP/073189ccad8e4c9882f9190663d32cfab19239a5a514183709a7e12f8c28fc2f?apiKey=7d405dfd16d04cc09b1228b2b600b47a&"></IconButton>
          </div>
  
          <div className="flex-none">
            <img src="/path-to-your-agent-image.jpg" alt="Agent" className="w-[300px] h-[300px] rounded-full" />
          </div>
        </div>
        
        <div className="absolute top-0 right-0 p-6">
          <PrimaryButton onClick={()=>{}}>
            Contact Us
          </PrimaryButton>
        </div>
      </div>
    );
  }
  