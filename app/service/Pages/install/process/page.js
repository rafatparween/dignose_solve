"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InstallingDriversPage() {
    const router = useRouter();

    useEffect(() => {
        // Set a timeout to navigate after 15 seconds
        const timer = setTimeout(() => {
            router.push('./process/error.html'); // Replace '/next-page' with the route you want to navigate to
        }, 15000); // 15 seconds in milliseconds

        // Cleanup the timer if the component is unmounted before the timer completes
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-4 mb-[100px]">
                {/* HP Logo */}
                <div className="mb-4 md:mb-0 md:mr-8 flex-shrink-0">
                    <Image
                        src="/hplogo.png"
                        alt="HP Logo"
                        width={550}
                        height={550}
                        className="w-24 w-[225px] h-[225px]"
                    />
                </div>

                {/* Printer Image */}
                <div className="mb-4 md:mb-0">
                    <Image
                        src="/hel.gif"
                        alt="Printer Image"
                        width={550}
                        height={550}
                        className="2xl:ml-[81px] "
                    />
                </div>

                {/* Error Image */}
                <div className="flex-shrink-0">
                    <Image
                        src="/loadin.jpg"
                        alt="Printer Error"
                        width={550}
                        height={550}
                        className="mb-[-103px]"
                    />
                </div>
            </div>

           
        </>
    );
}

