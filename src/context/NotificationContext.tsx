'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { getAccessToken } from '../api/authStore';
import { useAuth } from './AuthContext';

interface NotificationContextType {
  connection: signalR.HubConnection | null;
  isConnected: boolean;
  notifications: any[]; // Replace 'any' with a proper type if available
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      if (connection) {
        connection.stop();
        setConnection(null);
        setIsConnected(false);
      }
      return;
    }

    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${process.env.NEXT_PUBLIC_PERSONAL_API_URL}/hubs/notifications`, {
        accessTokenFactory: () => getAccessToken() || '',
      })
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

    setConnection(newConnection);

    newConnection
      .start()
      .then(() => {
        console.log('SignalR Connected');
        setIsConnected(true);
      })
      .catch((err) => console.error('SignalR Connection Error: ', err));

    newConnection.on('notificationReceived', (notification) => {
      console.log('Notification received:', notification);
      setNotifications((prev) => [notification, ...prev]);
    });

    return () => {
      newConnection.stop();
    };
  }, [isAuthenticated]);

  return (
    <NotificationContext.Provider value={{ connection, isConnected, notifications }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}
