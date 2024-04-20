import LeadGenerationCard from "../../src/reusable/cards/leadGenerationCards/LeadGenerationCard.jsx";

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
  

export default LeadGeneration;
  