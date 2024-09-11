// pages/index.js
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeaturedProject from '@/components/FeatureProject'; // Asegúrate de usar la ruta correcta

const projects = [
  {
    title: 'Dashboard MultiTask',
    description: 'Es un Dashboard con multiples herramientas para tu uso diario',
    imageSrc: '/images/proyecto1.webp'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2',
    imageSrc: '/images/proyecto2.webp'
  },
  // Añadir más proyectos aquí
];

const ContactButton = ({ href, icon: Icon, children }) => (
  <Link href={href}>
    <Button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      <Icon className="w-5 h-5" />
      <span>{children}</span>
    </Button>
  </Link>
);

const HomePage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <section
          className="text-center mb-12 bg-cover bg-center flex flex-col items-center justify-center py-20"
          style={{
            backgroundImage: "url('/images/hover1.webp')", // Asegúrate de tener la imagen en public/images/
          }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Bienvenido a Iran's Corner</h1>
          <p className="text-lg text-white mb-6">Explora mis proyectos, códigos y el blog personal.</p>
          <Link href="/projects">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
              Ver Proyectos
            </Button>
          </Link>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <FeaturedProject
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
              />
            ))}
          </div>
        </section>

        <section className="mb-12 relative w-full h-64">
          <h2 className="text-2xl font-semibold mb-6 text-center"></h2>
          
          {/* Imagen de fondo con hover */}
          <div className="relative w-full h-full group">
            <Image 
              src="/images/hover1.webp" 
              alt="Herramientas" 
              layout="fill" 
              objectFit="cover"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            
            {/* Capa hover con botón */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link href="/tools">
                <Button className="bg-black text-black font-bold py-2 px-4 rounded">
                  Herramientas
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Últimas Publicaciones</h2>
          {/* Add a component to display latest blog posts */}
        </section>

        <section className="mb-12 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">Sobre Mí</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            ¡Hola! Soy Iran, un apasionado desarrollador de software con un fuerte interés en la tecnología y la creatividad. Desde muy joven, he estado explorando el mundo del desarrollo web y la programación. Con varios años de experiencia en el campo, me especializo en crear soluciones eficientes, elegantes y escalables.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Me considero un aprendiz constante, siempre dispuesto a sumergirme en nuevas tecnologías y mejorar mis habilidades. A lo largo de mi carrera, he trabajado en proyectos que abarcan desde aplicaciones web de alto rendimiento hasta soluciones de backend robustas. Mi enfoque es siempre en la calidad del código, la experiencia del usuario y la resolución creativa de problemas.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Además del desarrollo, me encanta compartir conocimientos a través de mi blog y colaborar con otros desarrolladores en proyectos de código abierto. Cuando no estoy programando, disfruto explorando nuevas tendencias tecnológicas, leyendo libros sobre diseño y, por supuesto, tomando un buen café.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Aquí algunas de mis áreas de experiencia:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Desarrollo de aplicaciones web con React y Vue</li>
            <li>Creación de APIs robustas con Node.js y Express</li>
            <li>Optimización de rendimiento y SEO en aplicaciones web</li>
            <li>Implementación de CI/CD en entornos de desarrollo</li>
          </ul>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-6">Contacto</h2>
          <div className="flex justify-center space-x-4">
            <ContactButton href="mailto:devlewiso@gmail.com" icon={Mail}>
              Enviar Email
            </ContactButton>
            <ContactButton href="tel:50255892316" icon={Phone}>
              Llamar
            </ContactButton>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-gray-600">
          &copy; {currentYear} Iran's Corner. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
