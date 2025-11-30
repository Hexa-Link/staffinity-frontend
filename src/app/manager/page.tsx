"use client";

import { useState, useEffect } from "react";

interface VacationRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

interface Notification {
  id: string;
  message: string;
  type: "vacation_request" | "approval" | "rejection" | "info";
  isRead: boolean;
  createdAt: string;
}

export default function ManagerPage() {
  const [vacationRequests, setVacationRequests] = useState<VacationRequest[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch vacation requests
      const vacationResponse = await fetch(
        `${process.env.NEXT_PUBLIC_PERSONAL_API_URL}/vacation-requests`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (vacationResponse.ok) {
        const vacationData = await vacationResponse.json();
        setVacationRequests(
          Array.isArray(vacationData) ? vacationData : vacationData.data || []
        );
      }

      // Fetch notifications
      const notificationResponse = await fetch(
        `${process.env.NEXT_PUBLIC_PERSONAL_API_URL}/notifications`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (notificationResponse.ok) {
        const notificationData = await notificationResponse.json();
        setNotifications(
          Array.isArray(notificationData)
            ? notificationData
            : notificationData.data || []
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar datos");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (requestId: string) => {
    try {
      setProcessingId(requestId);
      setError(null);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_PERSONAL_API_URL}/vacation-requests/${requestId}/approve`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Error al aprobar la solicitud");
      }

      // Update local state
      setVacationRequests((prev) =>
        prev.map((req) =>
          req.id === requestId ? { ...req, status: "approved" } : req
        )
      );

      setSuccessMessage("Solicitud aprobada exitosamente");
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setProcessingId(null);
    }
  };

  const handleReject = async (requestId: string) => {
    try {
      setProcessingId(requestId);
      setError(null);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_PERSONAL_API_URL}/vacation-requests/${requestId}/reject`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Error al rechazar la solicitud");
      }

      // Update local state
      setVacationRequests((prev) =>
        prev.map((req) =>
          req.id === requestId ? { ...req, status: "rejected" } : req
        )
      );

      setSuccessMessage("Solicitud rechazada");
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setProcessingId(null);
    }
  };

  const markNotificationAsRead = async (notificationId: string) => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_PERSONAL_API_URL}/notifications/${notificationId}/read`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );

      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === notificationId ? { ...notif, isRead: true } : notif
        )
      );
    } catch (err) {
      console.error("Error al marcar notificación como leída:", err);
    }
  };

  const getStatusBadge = (status: VacationRequest["status"]) => {
    const styles = {
      pending:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      approved:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    };

    const labels = {
      pending: "Pendiente",
      approved: "Aprobada",
      rejected: "Rechazada",
    };

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}
      >
        {labels[status]}
      </span>
    );
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Panel de Gerente
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gestiona solicitudes de vacaciones y notificaciones
          </p>
        </div>

        {/* Messages */}
        {successMessage && (
          <div className="mb-6 rounded-lg bg-green-50 dark:bg-green-900 p-4 border border-green-200 dark:border-green-700">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-green-600 dark:text-green-400 me-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm font-medium text-green-800 dark:text-green-200">
                {successMessage}
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 dark:bg-red-900 p-4 border border-red-200 dark:border-red-700">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-red-600 dark:text-red-400 me-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm font-medium text-red-800 dark:text-red-200">
                {error}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vacation Requests Section */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Solicitudes de Vacaciones
                </h2>
              </div>

              {loading ? (
                <div className="p-8 text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    Cargando solicitudes...
                  </p>
                </div>
              ) : vacationRequests.length === 0 ? (
                <div className="p-8 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    No hay solicitudes de vacaciones pendientes
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {vacationRequests.map((request) => (
                    <div key={request.id} className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                              {request.employeeName}
                            </h3>
                            {getStatusBadge(request.status)}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <span className="font-medium">Período:</span>{" "}
                            {new Date(request.startDate).toLocaleDateString(
                              "es-ES"
                            )}{" "}
                            -{" "}
                            {new Date(request.endDate).toLocaleDateString(
                              "es-ES"
                            )}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Motivo:</span>{" "}
                            {request.reason}
                          </p>
                        </div>

                        {request.status === "pending" && (
                          <div className="flex gap-2 ms-4">
                            <button
                              onClick={() => handleApprove(request.id)}
                              disabled={processingId === request.id}
                              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
                            >
                              {processingId === request.id ? (
                                <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                              ) : (
                                <>
                                  <svg
                                    className="h-4 w-4 me-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  Aprobar
                                </>
                              )}
                            </button>
                            <button
                              onClick={() => handleReject(request.id)}
                              disabled={processingId === request.id}
                              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
                            >
                              {processingId === request.id ? (
                                <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                              ) : (
                                <>
                                  <svg
                                    className="h-4 w-4 me-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                  Rechazar
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Notifications Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Notificaciones
                </h2>
                {unreadCount > 0 && (
                  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </div>

              {loading ? (
                <div className="p-8 text-center">
                  <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 dark:border-blue-400"></div>
                </div>
              ) : notifications.length === 0 ? (
                <div className="p-6 text-center">
                  <svg
                    className="mx-auto h-10 w-10 text-gray-400 dark:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                    No hay notificaciones
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() =>
                        !notification.isRead &&
                        markNotificationAsRead(notification.id)
                      }
                      className={`p-4 cursor-pointer transition hover:bg-gray-50 dark:hover:bg-gray-700 ${
                        !notification.isRead
                          ? "bg-blue-50 dark:bg-blue-900/20"
                          : ""
                      }`}
                    >
                      <div className="flex items-start">
                        {!notification.isRead && (
                          <span className="shrink-0 h-2 w-2 mt-2 me-3 bg-blue-600 rounded-full"></span>
                        )}
                        <div className={notification.isRead ? "ms-5" : ""}>
                          <p
                            className={`text-sm ${
                              notification.isRead
                                ? "text-gray-600 dark:text-gray-400"
                                : "text-gray-900 dark:text-white font-medium"
                            }`}
                          >
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                            {new Date(notification.createdAt).toLocaleString(
                              "es-ES"
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
