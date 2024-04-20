import IconButton from "../reusable/buttons/IconButton";

// CtaBanner.jsx
export default function CtaBanner() {
    return (
      <div className="text-white text-center py-10 relative w-full" >
        <div className="absolute inset-0 bg-opacity-50" style={{ backgroundImage: 'url(/path-to-background-image.jpg)' }}></div>
        <div className="z-10 relative">
          <h2 className="font-bold text-2xl mb-4">
            Are You Prepared to Get Leads from Highly Qualified Real Estate Investors?
          </h2>
          {/* <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-bold py-2 px-8 rounded inline-flex items-center">
            Book Your Session Today
            <span className="ml-2">➡️</span>
          </button> */}
          <div className="inline-flex items-center">

          <IconButton text = "Book Your Session Today"  icon ="https://cdn.builder.io/api/v1/image/assets/TEMP/073189ccad8e4c9882f9190663d32cfab19239a5a514183709a7e12f8c28fc2f?apiKey=7d405dfd16d04cc09b1228b2b600b47a&"/>
          </div>
        </div>
      </div>
    );
  }