import { useEffect, useState } from "react";

export default function BuildingLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after 3.5 seconds (animation duration)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center z-60"
      style={{
        animation: "fadeOut 0.5s ease-out 3s forwards",
      }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Building Container */}
        <div className="relative w-32 h-48 flex items-end justify-center">
          {/* Foundation */}
          <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 rounded-full" />

          {/* Building Structure */}
          <div className="relative w-24 h-40 flex flex-col items-center">
            {/* Main Building Body */}
            <div
              className="w-full h-full bg-gradient-to-r from-blue-900 to-slate-800 dark:from-slate-700 dark:to-slate-900 rounded-t-lg shadow-2xl overflow-hidden"
              style={{
                animation: "buildingRise 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
              }}
            >
              {/* Windows Grid */}
              <div className="grid grid-cols-2 gap-2 p-3 h-full">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-yellow-300 rounded-sm shadow-lg"
                    style={{
                      animation: `windowGlow 1.5s ease-in-out ${0.3 + i * 0.2}s infinite`,
                      animationDelay: `${0.5 + i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Doors */}
            <div
              className="absolute bottom-0 w-full flex gap-1 px-2 pb-2"
              style={{
                animation: "doorOpen 1s ease-out 2s forwards",
                opacity: 0,
              }}
            >
              <div className="flex-1 h-8 bg-amber-700 rounded-b-sm shadow-md" />
              <div className="flex-1 h-8 bg-amber-700 rounded-b-sm shadow-md" />
            </div>
          </div>

          {/* Crane */}
          <div
            className="absolute top-0 right-0 w-16 h-16 flex items-start justify-end"
            style={{
              animation: "craneMove 2s ease-in-out infinite",
            }}
          >
            {/* Crane Arm */}
            <div className="w-12 h-1 bg-yellow-500 shadow-lg transform -rotate-45 origin-left" />
            {/* Crane Hook */}
            <div className="absolute top-6 right-0 w-1 h-6 bg-gradient-to-b from-yellow-500 to-yellow-600 shadow-md" />
            <div className="absolute top-12 right-1 w-2 h-2 bg-red-500 rounded-full shadow-md" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Crafting Spaces
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            with Purpose and Precision...
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="w-32 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full"
            style={{
              animation: "buildingRise 3s ease-out forwards",
            }}
          />
        </div>
      </div>
    </div>
  );
}
