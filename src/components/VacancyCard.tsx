"use client";

import { Vacancy } from "@/services/api";

interface VacancyCardProps {
  vacancy: Vacancy;
}

export default function VacancyCard({ vacancy }: VacancyCardProps) {
  const statusColors = {
    OPEN: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    CLOSED: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    PAUSED: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  };

  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {vacancy.title}
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {vacancy.location}
              </span>
              {vacancy.salary && (
                <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ${vacancy.salary.toLocaleString()}
                </span>
              )}
            </div>
          </div>
          {vacancy.status && (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[vacancy.status]}`}>
              {vacancy.status}
            </span>
          )}
        </div>
        
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {vacancy.description}
        </p>
        
        <div className="mt-4">
          <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Requisitos
          </h4>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {vacancy.requirements}
          </p>
        </div>

        {vacancy.createdAt && (
          <div className="mt-4 text-xs text-gray-400 dark:text-gray-500">
            Publicado: {new Date(vacancy.createdAt).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  );
}
