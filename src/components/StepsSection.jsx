// StepsSection.jsx
export default function StepsSection() {
    return (
      <div className="bg-white w-full py-12 flex flex-col items-center">
        <div className="flex justify-between w-full max-w-6xl px-10 mb-12">
          <Statistic value="80+" label="Active Clients" />
          <Statistic value="135+" label="Projects Done" />
          <Statistic value="20+" label="Team Advisors" />
        </div>
  
        <h2 className="text-3xl font-bold text-center mb-8">
          You’re Just 4 Steps Away From Getting Potential Deals Sent Right To You!
        </h2>
  
        <div className="grid grid-cols-2 gap-8 max-w-6xl px-10">
          <Step number="1" title="Book a Call To Get Started" description="Lorem ipsum..." />
          <Step number="2" title="Tell Us How Many Callers You Want" description="Lorem ipsum..." />
          <Step number="3" title="We Start Sending You Leads" description="Lorem ipsum..." />
          <Step number="4" title="You Close Deals & Make More Money" description="Lorem ipsum..." />
        </div>
        
        {/* Add the image somewhere within the layout as needed */}
        <div className="w-full max-w-xs">
          <img src="/path-to-your-image.jpg" alt="Handshake" className="rounded-full" />
        </div>
      </div>
    );
  }
  
  // Statistic.jsx
  function Statistic({ value, label }) {
    return (
      <div className="text-center">
        <div className="text-4xl font-bold text-teal-600">{value}</div>
        <div className="text-lg text-gray-700">{label}</div>
      </div>
    );
  }
  
  // Step.jsx
  function Step({ number, title, description }) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-teal-600 mb-2">Step {number}</h3>
        <h4 className="text-xl font-bold mb-3">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }