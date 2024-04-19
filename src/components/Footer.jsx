// Footer.jsx
export default function Footer() {
    return (
      <footer className=" text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and description */}
            <div className="mb-6 md:mb-0">
              <img src="/logo.png" alt="Lead4Speed" className="w-32 mb-2" />
              <p>Lorem ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
            
            {/* Link columns */}
            <div className="flex justify-around space-x-10">
              <div>
                <h3 className="font-bold mb-2">Solutions</h3>
                <ul>
                  <li>Text 1</li>
                  <li>Text 2</li>
                  <li>Text 3</li>
                  <li>Text 4</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Products</h3>
                <ul>
                  <li>Text 1</li>
                  <li>Text 2</li>
                  <li>Text 3</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Community</h3>
                {/* Social icons */}
                <div className="flex">
                  <a href="https://facebook.com" className="mr-2">
                    {/* Icon placeholder */}
                    F
                  </a>
                  <a href="https://twitter.com" className="mr-2">
                    {/* Icon placeholder */}
                    T
                  </a>
                  <a href="https://instagram.com">
                    {/* Icon placeholder */}
                    I
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-xs border-t border-gray-700 mt-6 pt-4">
            © Copyright 2024 Lead4Speed. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
  