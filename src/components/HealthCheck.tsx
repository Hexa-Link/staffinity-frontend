"use client";

import { useState } from "react";
import { checkAllApisHealth, ApiResponse, HealthResponse } from "@/services/api";

interface HealthStatus {
  personal: ApiResponse<HealthResponse> | null;
  recruiting: ApiResponse<HealthResponse> | null;
}

export default function HealthCheck() {
  const [status, setStatus] = useState<HealthStatus>({
    personal: null,
    recruiting: null,
  });
  const [loading, setLoading] = useState(false);

  const checkHealth = async () => {
    setLoading(true);
    try {
      const result = await checkAllApisHealth();
      setStatus(result);
    } catch (error) {
      console.error("Error checking health:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderStatus = (name: string, result: ApiResponse<HealthResponse> | null) => {
    if (!result) {
      return (
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <span className="text-gray-500">No verificado</span>
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-2">
        <div
          className={`w-3 h-3 rounded-full ${
            result.success ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>
        <span className={result.success ? "text-green-600" : "text-red-600"}>
          {result.success ? "Online" : result.error || "Offline"}
        </span>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Health Check - APIs
        </h3>
        <button
          onClick={checkHealth}
          disabled={loading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Verificando...
            </>
          ) : (
            "Verificar APIs"
          )}
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Personal API</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {process.env.NEXT_PUBLIC_PERSONAL_API_URL || "http://localhost:8081"}
            </p>
          </div>
          {renderStatus("Personal", status.personal)}
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Recruiting API</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {process.env.NEXT_PUBLIC_RECRUITING_API_URL || "http://localhost:8082"}
            </p>
          </div>
          {renderStatus("Recruiting", status.recruiting)}
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Nota: Los backends deben estar corriendo para que el health check funcione.
      </p>
    </div>
  );
}
