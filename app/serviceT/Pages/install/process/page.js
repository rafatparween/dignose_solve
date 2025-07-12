"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function InstallingDriversPage() {
    const router = useRouter();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Animate progress bar
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + (100 / 15); // Spread over 15 seconds
            });
        }, 150); // Update every 150ms

        // Set a timeout to navigate after 15 seconds
        const timer = setTimeout(() => {
            router.push('./process/error.html');
        }, 15000);

        // Cleanup
        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [router]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center p-6">
            {/* Main Content Container */}
            <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                {/* Left Panel - Branding */}
                <div className="bg-blue-600 p-8 md:w-1/3 flex flex-col items-center justify-center text-white">
                    <div className="mb-6 animate-pulse">
                        <Image
                            src="/hplogo.png"
                            alt="HP Logo"
                            width={225}
                            height={225}
                            className="w-40 h-40 object-contain"
                        />
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Hewlett Printers</h1>
                    <p className="text-blue-100 text-center">Premium Printing Solutions</p>
                </div>

                {/* Right Panel - Loading Content */}
                <div className="p-8 md:w-2/3 flex flex-col items-center justify-center">
                    <div className="relative w-64 h-64 mb-8">
                        <Image
                            src="/hel.gif"
                            alt="Printer Animation"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Installing Printer Drivers
                    </h2>
                    
                    <p className="text-gray-600 mb-6 text-center">
                        Please wait while we configure your printing solution...
                    </p>

                    {/* Animated Progress Bar */}
                    <div className="w-full max-w-md mb-6">
                        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-150 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <div className="text-right mt-1 text-sm text-gray-500">
                            {Math.min(100, Math.round(progress))}% Complete
                        </div>
                    </div>

                    {/* Status Indicators */}
                    <div className="grid grid-cols-3 gap-4 w-full max-w-md text-center">
                        <div className={`p-3 rounded-lg ${progress > 20 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
                            <span className="block font-medium">Initializing</span>
                        </div>
                        <div className={`p-3 rounded-lg ${progress > 50 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
                            <span className="block font-medium">Downloading</span>
                        </div>
                        <div className={`p-3 rounded-lg ${progress > 80 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>
                            <span className="block font-medium">Installing</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <p className="mt-8 text-gray-500 text-sm text-center">
                Do not turn off your device during this process
            </p>

            {/* Animated Dots for Visual Interest */}
            <div className="flex space-x-2 mt-6">
                {[...Array(3)].map((_, i) => (
                    <div 
                        key={i}
                        className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                    />
                ))}
            </div>
        </div>
    );
}