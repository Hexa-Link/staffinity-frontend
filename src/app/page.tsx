/**
 * 🏠 HOME - Landing Page
 * Ruta: / (Raíz)
 * Descripción: Página de bienvenida y presentación de HexaLink.
 * Secciones: Hero, Acerca de, Soluciones, Vacantes, Contacto, Footer.
 * Funcionalidades: Dark mode, navegación, información de la plataforma.
 * Módulo: Marketing
 */

'use client'

import Link from 'next/link'
import { useState } from 'react'
export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-900' : ''}`}>
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-teal-50 to-white dark:from-slate-800 dark:to-slate-900 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center flex-wrap gap-2">
          <div className="text-xl md:text-2xl font-bold text-teal-600">HexaLink</div>
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            <Link href="#inicio" className="text-sm text-gray-600 dark:text-gray-300 hover:text-teal-600 font-medium transition-colors">Inicio</Link>
            <Link href="#nosotros" className="text-sm text-gray-600 dark:text-gray-300 hover:text-teal-600 font-medium transition-colors">Nosotros</Link>
            <Link href="#soluciones" className="text-sm text-gray-600 dark:text-gray-300 hover:text-teal-600 font-medium transition-colors">Soluciones</Link>
            <Link href="#vacantes" className="text-sm text-gray-600 dark:text-gray-300 hover:text-teal-600 font-medium transition-colors">Vacantes</Link>
            <Link href="#contacto" className="text-sm text-gray-600 dark:text-gray-300 hover:text-teal-600 font-medium transition-colors">Contacto</Link>
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 bg-teal-50 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all text-lg"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <Link href="/login" className="bg-teal-600 text-white px-4 md:px-6 py-2 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-teal-600/20">
              Ver Ofertas
            </Link>
          </div>
          <button
            onClick={toggleDarkMode}
            className="lg:hidden w-10 h-10 bg-teal-50 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all text-lg"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-br from-green-100 via-teal-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 md:w-[600px] lg:w-[800px] h-96 md:h-[600px] lg:h-[800px] bg-gradient-radial from-teal-600/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                Plataforma Unificada de <span className="text-teal-600">Capital Humano</span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Automatiza tus procesos de RRHH y reclutamiento con HexaLink. Una solución moderna basada en microservicios que conecta personal, vacaciones, notificaciones y gestión de vacantes en un solo lugar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#vacantes" className="btn-primary">
                  Ver Vacantes Abiertas
                </Link>
                <Link href="#soluciones" className="btn-secondary">
                  Conocer Más
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Equipo HexaLink"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="section-title">
            <h2>Acerca de HexaLink</h2>
            <p>Transformamos la gestión de capital humano con tecnología de vanguardia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <AboutCard icon="🎯" title="Misión" description="Simplificar y automatizar los procesos de gestión de recursos humanos mediante una plataforma integrada que mejora la eficiencia operativa y la experiencia del empleado." />
            <AboutCard icon="🚀" title="Visión" description="Ser la plataforma líder en soluciones de capital humano, utilizando arquitecturas modernas de microservicios para ofrecer escalabilidad, flexibilidad y excelencia tecnológica." />
            <AboutCard icon="💎" title="Valores" description="Innovación continua, transparencia en los procesos, eficiencia operativa y compromiso con la excelencia en cada interacción con nuestros usuarios." />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluciones" className="py-16 md:py-24 bg-gradient-to-br from-green-100 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="section-title">
            <h2>Nuestras Soluciones</h2>
            <p>Módulos integrados para una gestión completa de tu capital humano</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <SolutionCard
              icon="👥"
              title="Módulo de Personal"
              description="Gestiona todo el ciclo de vida del empleado desde un solo lugar con herramientas potentes y fáciles de usar."
              features={['Gestión completa de empleados y perfiles', 'Solicitudes de vacaciones con flujo de aprobación', 'Sistema de notificaciones en tiempo real', 'Reportes y analíticas de RRHH']}
            />
            <SolutionCard
              icon="🎯"
              title="Módulo de Reclutamiento"
              description="Optimiza tu proceso de selección con seguimiento completo de candidatos y vacantes activas."
              features={['Publicación y gestión de vacantes', 'Base de datos de candidatos', 'Seguimiento de entrevistas y evaluaciones', 'Búsqueda de talento interno']}
            />
            <SolutionCard
              icon="🔗"
              title="Integración Continua"
              description="Arquitectura de microservicios que permite comunicación fluida entre todos los módulos del sistema."
              features={['API RESTful escalable y segura', 'Sincronización automática de datos', 'Arquitectura hexagonal modular', 'Despliegue continuo (CI/CD)']}
            />
            <SolutionCard
              icon="📊"
              title="Reportes y Analíticas"
              description="Toma decisiones basadas en datos con dashboards interactivos y reportes personalizables."
              features={['KPIs de recursos humanos en tiempo real', 'Análisis de vacantes y contrataciones', 'Métricas de solicitudes y aprobaciones', 'Exportación de datos a múltiples formatos']}
            />
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section id="vacantes" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-title">
            <h2>Vacantes Disponibles</h2>
            <p>Únete a nuestro equipo y construye el futuro de la gestión de capital humano</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <VacancyCard
              badge="Urgente"
              title="Backend Developer .NET"
              location="Remoto / Barranquilla"
              type="Tiempo Completo"
              department="Engineering"
              description="Desarrolla microservicios robustos con C# y .NET para el módulo de Personal. Trabaja con arquitectura hexagonal, Entity Framework y SQL Server."
            />
            <VacancyCard
              badge="Nuevo"
              title="Backend Developer Java"
              location="Híbrido"
              type="Tiempo Completo"
              department="Engineering"
              description="Construye servicios escalables con Spring Boot y PostgreSQL para el sistema de reclutamiento. Experiencia con APIs REST y arquitectura limpia."
            />
            <VacancyCard
              title="Frontend Developer Next.js"
              location="Remoto"
              type="Tiempo Completo"
              department="Engineering"
              description="Crea interfaces modernas y responsivas con React y Next.js. Experiencia con TypeScript y Tailwind CSS para el dashboard de HexaLink."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-teal-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contáctanos</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                ¿Tienes preguntas sobre nuestra plataforma o deseas programar una demostración? Nuestro equipo está listo para ayudarte.
              </p>
              <div className="space-y-6">
                <ContactItem icon="📧" title="Email" value="contacto@hexalink.com" />
                <ContactItem icon="📞" title="Teléfono" value="+57 300 123 4567" />
                <ContactItem icon="📍" title="Ubicación" value="Barranquilla, Colombia" />
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Nombre</label>
                  <input type="text" className="input-field" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
                  <input type="email" className="input-field" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Mensaje</label>
                  <textarea className="input-field min-h-[120px]" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-teal-500 text-xl font-bold mb-4">HexaLink</h3>
              <p className="leading-relaxed mb-6">Plataforma unificada de capital humano basada en microservicios.</p>
              <div className="flex gap-4">
                <SocialLink icon="in" />
                <SocialLink icon="tw" />
                <SocialLink icon="gh" />
              </div>
            </div>
            <FooterLinks title="Plataforma" links={['Características', 'Precios', 'Integraciones', 'API']} />
            <FooterLinks title="Empresa" links={['Nosotros', 'Blog', 'Carreras', 'Contacto']} />
            <FooterLinks title="Legal" links={['Privacidad', 'Términos', 'Cookies', 'Licencias']} />
          </div>
          <div className="text-center pt-8 border-t border-gray-800">
            <p>© 2024 HexaLink. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function AboutCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card-teal text-center p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-600/10 transition-all duration-300 hover:border-teal-500">
      <div className="icon-box mx-auto mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
    </div>
  )
}

function SolutionCard({ icon, title, description, features }: { icon: string; title: string; description: string; features: string[] }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-teal-100 dark:border-slate-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-600/15 hover:border-teal-500 transition-all duration-300">
      <div className="icon-box-square mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-600 dark:text-gray-300 border-b border-teal-50 dark:border-slate-700 pb-3">
            <span className="text-teal-600 font-bold mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

function VacancyCard({ badge, title, location, type, department, description }: { badge?: string; title: string; location: string; type: string; department: string; description: string }) {
  return (
    <div className="card-teal relative p-8 hover:border-teal-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-600/15 transition-all duration-300">
      {badge && (
        <span className="absolute top-6 right-6 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pr-20">{title}</h3>
      <div className="space-y-2 mb-4">
        <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2"><span>📍</span><strong>Ubicación:</strong> {location}</p>
        <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2"><span>💼</span><strong>Tipo:</strong> {type}</p>
        <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2"><span>🏢</span><strong>Departamento:</strong> {department}</p>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">{description}</p>
      <button className="btn-primary w-full">Aplicar Ahora</button>
    </div>
  )
}

function ContactItem({ icon, title, value }: { icon: string; title: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="icon-box">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300">{value}</p>
      </div>
    </div>
  )
}

function SocialLink({ icon }: { icon: string }) {
  return (
    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white hover:-translate-y-1 transition-all">
      {icon}
    </a>
  )
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
            <a href="#" className="hover:text-teal-500 transition-colors">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
