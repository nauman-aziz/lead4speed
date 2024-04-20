// ContactUsButton.jsx
export  function PrimaryButton({ onClick }) {
    return (
      <button
      
        className="justify-center p-2.5 mr-6 rounded-3xl max-md:px-5 max-md:mr-2.5 text-white text-sm font-semibold bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-700 hover:to-lime-600 px-4 py-2 rounded-full flex items-center justify-center "
        onClick={onClick}
      >
        Contact Us
      </button>
    );
  }

  