// ContactUsButton.jsx
export  function PrimaryButton({ onClick }) {
    return (
      <button
        style={{
          width: '150px',
          height: '44px',
          top: '33px',
          left: '1208px',
          borderRadius: '22px 0 0 0',
          opacity: 0 // You might want to reconsider this as it will make the button fully transparent
        }}
        className="absolute text-white text-sm font-semibold bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-700 hover:to-lime-600 px-4 py-2 rounded-tl-full flex items-center justify-center gap-2"
        onClick={onClick}
      >
        Contact Us
      </button>
    );
  }

  