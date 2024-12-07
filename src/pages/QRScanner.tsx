import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';
import { QrCode, CheckCircle2 } from 'lucide-react';

const QRScanner: React.FC = () => {
  const [scanned, setScanned] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleScan = (data: any) => {
    if (data) {
      setScanned(true);
      // Handle the QR code data - send to backend
      console.log('QR Code scanned:', data);
    }
  };

  const handleError = (err: any) => {
    setError('Failed to access camera. Please make sure you have granted camera permissions.');
    console.error(err);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <QrCode className="w-16 h-16 mx-auto mb-4 text-indigo-600" />
        <h1 className="text-2xl font-bold mb-2">Scan Gym QR Code</h1>
        <p className="text-gray-600">Position the QR code within the frame to check in</p>
      </div>

      {!scanned ? (
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-lg">
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              className="w-full"
            />
          </div>
          {error && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h2 className="text-xl font-semibold mb-2">Successfully Checked In!</h2>
          <p className="text-gray-600 mb-4">You can now access the gym facilities</p>
          <button
            onClick={() => setScanned(false)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Scan Another Code
          </button>
        </div>
      )}
    </div>
  );
};