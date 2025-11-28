import HealthCheck from "@/components/HealthCheck";

export default function HealthPage() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Health Check
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Verifica el estado de los microservicios backend
          </p>
        </div>

        <HealthCheck />
      </div>
    </div>
  );
}
