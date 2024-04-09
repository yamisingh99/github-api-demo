import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Dr. Manish Singh. All rights reserved.</p>
                <p className="text-xs mt-1">This website is designed for informational purposes only . Consult a qualified healthcare professional like us for personalized medical advice.</p>
            </div>
        </footer>
    );
};

export default Footer;
