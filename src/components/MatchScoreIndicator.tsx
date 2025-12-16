import React from 'react';

interface MatchScoreProps {
    score: number;
}

export const MatchScoreIndicator: React.FC<MatchScoreProps> = ({ score }) => {
    // Determine color based on "Neural" score
    const getColor = (s: number) => {
        if (s >= 80) return 'text-green-500 border-green-500 bg-green-50'; // High Match
        if (s >= 50) return 'text-yellow-500 border-yellow-500 bg-yellow-50'; // Potential
        return 'text-gray-400 border-gray-300 bg-gray-50'; // Low
    };

    const colorClass = getColor(score);

    return (
        <div className="flex flex-col items-center group relative cursor-help">
            {/* Circle Badge */}
            <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-sm ${colorClass} shadow-sm`}>
                {score}%
            </div>

            {/* Label */}
            <span className="text-[10px] uppercase font-bold text-gray-400 mt-1 tracking-wider">
                Match
            </span>

            {/* "AI" Tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:block w-48 p-2 bg-slate-800 text-white text-xs rounded shadow-lg z-10">
                <div className="font-bold text-teal-400 mb-1">✨ Neural-Link Analysis</div>
                <div>
                    Calculated based on semantic skill verification, seniority alignment, and tenure.
                </div>
            </div>
        </div>
    );
};
