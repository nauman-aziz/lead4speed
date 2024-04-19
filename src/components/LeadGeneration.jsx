// LeadGeneration.jsx
 const LeadGeneration = () => {
    return (
        <div className="bg-white w-full min-h-[793px] flex justify-between items-center p-10">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Lead Generation<br/>Splurged
            </h2>
            <LeadGenerationCard title="State of the Art Systems" description="Some explanatory text would make it look better and help to avoid large gaps" />
            <LeadGenerationCard title="Priced to Perfection" description="Some explanatory text would make it look better and help to avoid large gaps" />
            <LeadGenerationCard title="Flexible Plans" description="Some explanatory text would make it look better and help to avoid large gaps" />
          </div>
          
          <div className="max-w-md">
            <p className="text-gray-600">
              Better to have 2-3 lines of text here, related to the heading on the left.
            </p>
            {/* Add any images or additional content here */}
          </div>
        </div>
      );
  }
  
  // LeadGenerationCard.jsx
  function LeadGenerationCard({ title, description }) {
    return (
      <div className="flex items-start space-x-4">
        <span> {/* Icon or bullet point */}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    );
  }

export default LeadGeneration;
  