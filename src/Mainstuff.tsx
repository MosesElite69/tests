import React from 'react';

const MainStuff: React.FC = () => {
    return (
        <div className="group flex flex-col items-center justify-center mx-auto mt-4 p-1.5 sm:w-[30%] sm:h-[40%] w-[80%] h-[90%] bg-white border-2 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-2">
            <img className="rounded-lg hover:-rotate-3 transition-transform duration-500 ease-in-out " src="../images/image-qr-code.png" alt="QR Code" />
            <div className="text-center mt-4">
                <strong className="font-bold text-xl">Improve your front-end skills by building projects</strong>
                <p className="text-gray-700">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
        </div>
    );
};

export default MainStuff;