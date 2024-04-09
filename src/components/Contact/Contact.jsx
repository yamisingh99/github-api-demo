import React from 'react';
import doc2 from './doc2.jpeg';

const ContactUs = () => {
    const backgroundImageUrl = "https://i.pinimg.com/736x/64/e0/02/64e002071b9df4830eb6b8395710d279.jpg";

    return (
        <div className="flex flex-col justify-center items-center font-serif" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
            <div className="max-w-md bg-chocolate-300 shadow-xl rounded-lg overflow-hidden flex">
                <div className="w-2/5" style={{ height: "500px" }}>
                    <img src={doc2} alt="Doctor" className="w-full h-full object-cover" />
                </div>
                <div className="w-3/5 p-6">
                    <h2 className="text-3xl font-bold text-chocolate-800 mb-4">Contact Us</h2>
                    <div className="flex items-center mb-6">
                        <div>
                            <h3 className="text-xl font-semibold text-chocolate-800">Dr. Manish Singh</h3>
                            <p className="text-chocolate-600 font-bold">MBBS : PG MED specialist</p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-chocolate-800 mb-2">Location</h4>
                        <p className="text-chocolate-600">123 Medical Center Dr, Suite 200<br />City, State, Zip</p>
                    </div>
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-chocolate-800 mb-2">Phone</h4>
                        <p className="text-chocolate-600">7906633668</p>
                    </div>
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-chocolate-800 mb-2">Email</h4>
                        <p className="text-chocolate-600">drmanishsingh96@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
