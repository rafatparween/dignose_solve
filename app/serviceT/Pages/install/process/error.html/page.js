export default function Home() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center px-4">
      <div className="w-[819px] h-[600px] border border-gray-300 rounded-lg shadow-lg flex flex-col justify-center items-center p-6">
        {/* Exclamation Icon */}
        <div className="w-[63px] h-[63px] rounded-full border-2 border-red-600 flex items-center justify-center mb-6">
          <span className="text-4xl text-red-600 font-bold">!</span>
        </div>

        {/* Alert Title */}
        <h2 className="text-red-600 text-lg font-bold mb-[18px]">
          Action Needed: Printer Issue Detected!
        </h2>

        {/* Error Message */}
        <p className="text-[#000000] text-[19px] text-base mb-[20px]">
          We couldn't complete your request due to the following reasons:
        </p>

        {/* Bullet Points */}
        <ul className="text-[#000000] text-left text-[16px] mb-6 space-y-1">
          <li>• Printer driver Installation Failed due to Fatal Error C0000022.</li>
          <li>• Your device firewall may be blocking the installation process.</li>
          <li>• Your computer registry file is corrupted.</li>
        </ul>

        {/* Resolution Message */}
        <p className="text-[#000000] text-[19px] mb-4">
          To resolve this issue, contact our Customer Support Team right now.
        </p>

        {/* Support Phone */}
        <p className="text-[#000000] text-[25px] text-xl font-semibold mb-6">
          Call for Support (Toll Free): <span className="text-black">808-468-1018</span>
        </p>

        {/* Footer */}
        <p className="text-black text-base text-center">
          We appreciate your patience and are here to help you get connected as quickly as possible.
        </p>
      </div>
    </div>
  );
}
