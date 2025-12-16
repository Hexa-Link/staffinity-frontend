(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(dashboard)/notifications/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 🔔 NOTIFICACIONES - Centro de Alertas
 * Ruta: /notifications
 * Descripción: Centro de notificaciones del sistema para alertas
 * y comunicaciones. Tipos: Info, Éxito, Advertencia, Error.
 * Funcionalidades: Ver notificaciones, marcar como leída, filtrar por tipo.
 * Módulo: Comunicaciones
 */ __turbopack_context__.s([
    "default",
    ()=>NotificationsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const mockNotifications = [
    {
        id: 1,
        title: 'Nuevo empleado registrado',
        message: 'Juan Pérez ha sido agregado al sistema.',
        type: 'success',
        read: false,
        createdAt: '2024-01-15T10:30:00'
    },
    {
        id: 2,
        title: 'Vacante actualizada',
        message: 'La vacante "Backend Developer .NET" ha recibido 5 nuevas aplicaciones.',
        type: 'info',
        read: false,
        createdAt: '2024-01-15T09:15:00'
    },
    {
        id: 3,
        title: 'Stock bajo',
        message: 'El item "Silla Ergonómica" tiene stock bajo (3 unidades).',
        type: 'warning',
        read: true,
        createdAt: '2024-01-14T16:45:00'
    },
    {
        id: 4,
        title: 'Error de sincronización',
        message: 'No se pudo sincronizar la información con el servidor externo.',
        type: 'error',
        read: true,
        createdAt: '2024-01-14T14:20:00'
    },
    {
        id: 5,
        title: 'Reporte generado',
        message: 'El reporte mensual de empleados está listo para descargar.',
        type: 'success',
        read: true,
        createdAt: '2024-01-13T11:00:00'
    }
];
function NotificationsPage() {
    _s();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mockNotifications);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const getTypeStyles = (type)=>{
        switch(type){
            case 'success':
                return {
                    bg: 'bg-teal-50 dark:bg-teal-900/20',
                    border: 'border-teal-200 dark:border-teal-800',
                    icon: '✓',
                    iconBg: 'bg-gradient-to-br from-teal-200 to-teal-400 text-teal-800'
                };
            case 'info':
                return {
                    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
                    border: 'border-cyan-200 dark:border-cyan-800',
                    icon: 'ℹ',
                    iconBg: 'bg-gradient-to-br from-cyan-200 to-cyan-400 text-cyan-800'
                };
            case 'warning':
                return {
                    bg: 'bg-amber-50 dark:bg-amber-900/20',
                    border: 'border-amber-200 dark:border-amber-800',
                    icon: '⚠',
                    iconBg: 'bg-gradient-to-br from-amber-200 to-amber-400 text-amber-800'
                };
            case 'error':
                return {
                    bg: 'bg-red-50 dark:bg-red-900/20',
                    border: 'border-red-200 dark:border-red-800',
                    icon: '✕',
                    iconBg: 'bg-gradient-to-br from-red-200 to-red-400 text-red-800'
                };
            default:
                return {
                    bg: 'bg-gray-50',
                    border: 'border-gray-200',
                    icon: '•',
                    iconBg: 'bg-gray-200 text-gray-600'
                };
        }
    };
    const markAsRead = (id)=>{
        setNotifications(notifications.map((n)=>n.id === id ? {
                ...n,
                read: true
            } : n));
    };
    const markAllAsRead = ()=>{
        setNotifications(notifications.map((n)=>({
                ...n,
                read: true
            })));
    };
    const filteredNotifications = filter === 'unread' ? notifications.filter((n)=>!n.read) : notifications;
    const unreadCount = notifications.filter((n)=>!n.read).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 dark:text-gray-400",
                            children: unreadCount > 0 ? `Tienes ${unreadCount} notificaciones sin leer` : 'Todas las notificaciones leídas'
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: markAllAsRead,
                        className: "py-3 px-6 border-2 border-teal-600 text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors",
                        children: "Marcar todas como leídas"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilter('all'),
                        className: `px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === 'all' ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30' : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-2 border-teal-100 dark:border-slate-700 hover:bg-teal-50 dark:hover:bg-slate-700'}`,
                        children: [
                            "Todas (",
                            notifications.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilter('unread'),
                        className: `px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === 'unread' ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30' : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-2 border-teal-100 dark:border-slate-700 hover:bg-teal-50 dark:hover:bg-slate-700'}`,
                        children: [
                            "Sin leer (",
                            unreadCount,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: filteredNotifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-slate-800 rounded-2xl p-12 border border-teal-100 dark:border-slate-700 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4",
                            children: "🔔"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 dark:text-gray-400 text-lg",
                            children: "No hay notificaciones"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this) : filteredNotifications.map((notification)=>{
                    const styles = getTypeStyles(notification.type);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-2xl p-6 border-2 ${styles.bg} ${styles.border} ${!notification.read ? 'ring-2 ring-teal-400 ring-offset-2' : ''} transition-all duration-300 hover:shadow-lg`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold ${styles.iconBg}`,
                                    children: styles.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-gray-900 dark:text-white",
                                                    children: notification.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 23
                                                }, this),
                                                !notification.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-3 h-3 bg-teal-500 rounded-full animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 dark:text-gray-300 mt-1",
                                            children: notification.message
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-400 dark:text-gray-500 font-medium",
                                                    children: new Date(notification.createdAt).toLocaleString('es-MX')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 23
                                                }, this),
                                                !notification.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>markAsRead(notification.id),
                                                    className: "text-sm text-teal-600 hover:text-teal-800 font-semibold transition-colors",
                                                    children: "Marcar como leída"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                            lineNumber: 123,
                            columnNumber: 17
                        }, this)
                    }, notification.id, false, {
                        fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                        lineNumber: 117,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/notifications/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(NotificationsPage, "RbN44WyUESZC53rsnVOx9OG6d0w=");
_c = NotificationsPage;
var _c;
__turbopack_context__.k.register(_c, "NotificationsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28dashboard%29_notifications_page_tsx_2e1d69e4._.js.map