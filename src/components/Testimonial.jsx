// Testimonial.jsx
export default function Testimonial() {
    return (
      <div className="bg-white w-full flex flex-col items-center py-12" style={{ minHeight: '971px' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Don't Take Our Word for It
          </h2>
          <p className="text-xl text-gray-600">
            See What Our Clients Have to Say
          </p>
        </div>
        
        <div className="flex gap-10 justify-center items-start">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    );
  }
  
  // TestimonialCard.jsx
  function TestimonialCard() {
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <blockquote className="text-gray-600 italic mb-4">
          “Lorem Ipsum is simply dummy text of the printing and typesetting industry...”
        </blockquote>
        <div className="flex items-center mb-4">
          <div className="text-yellow-400">★★★★★</div>
        </div>
        <footer>
          <p className="font-semibold text-gray-800">Robert Johnson</p>
          <p className="text-sm text-gray-500">Manager, Sherlock Homes LLC</p>
        </footer>
      </div>
    );
  }