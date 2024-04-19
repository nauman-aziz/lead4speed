// FeaturesSection.jsx
export default function FeaturesSection() {
    return (
      <div className="w-full" style={{ maxWidth: '1440px', height: '971px' }}>
        <div className="bg-teal-100 p-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why They Love <span className="text-pink-600">LEAD4SPEED</span>
          </h2>
        </div>
  
        <div className="grid grid-cols-4 gap-4 p-12">
          {/* Repeat the FeatureCard component as many times as needed */}
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    );
  }
  
  // FeatureCard.jsx
  function FeatureCard() {
    return (
      <div className="bg-white rounded shadow p-6">
        <div className="flex items-center mb-4">
          {/* Replace with actual checkmark icon */}
          <span className="text-green-500 mr-2">✔️</span>
          <h3 className="font-semibold text-lg">Heading goes here</h3>
        </div>
        <p className="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
      </div>
    );
  }