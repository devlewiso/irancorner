'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Book, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Phone, 
  User 
} from 'lucide-react';

const CVPage = () => {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="mb-6">
        <CardContent className="flex flex-col md:flex-row items-center p-6">
          <Avatar className="w-32 h-32 md:w-48 md:h-48 md:mr-6 mb-4 md:mb-0">
            <AvatarImage src="/api/placeholder/300/300" alt="Tu Nombre" />
            <AvatarFallback>TN</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">Iran Lewis Edgar Trinidad Ortiz</h1>
            <h2 className="text-xl text-muted-foreground mb-4">Desarrollador </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">SQL</Badge>
              <Badge variant="secondary">AWS</Badge>
            </div>
            <div className="flex flex-col items-center md:items-start text-sm text-muted-foreground">
              <div className="flex items-center mb-1">
                <Mail className="mr-2 h-4 w-4" />
                <span>tunombre@email.com</span>
              </div>
              <div className="flex items-center mb-1">
                <Phone className="mr-2 h-4 w-4" />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Ciudad, País</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="mr-2" />
            Perfil Profesional
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Desarrollador Full Stack con más de 5 años de experiencia en la creación de aplicaciones web escalables y robustas. 
            Apasionado por las nuevas tecnologías y siempre buscando aprender y mejorar. Fuerte habilidad para resolver problemas 
            y trabajar en equipo.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Briefcase className="mr-2" />
            Experiencia Laboral
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Desarrollador Senior - Empresa XYZ</h3>
            <p className="text-sm text-muted-foreground">Enero 2020 - Presente</p>
            <ul className="list-disc list-inside mt-2">
              <li>Lideré el desarrollo de una aplicación web de comercio electrónico utilizando React y Node.js.</li>
              <li>Implementé una arquitectura de microservicios utilizando Docker y Kubernetes.</li>
              <li>Mejoré el rendimiento del sitio web en un 40% mediante la optimización del front-end y back-end.</li>
            </ul>
          </div>
          <Separator className="my-4" />
          <div>
            <h3 className="text-lg font-semibold">Desarrollador Full Stack - Startup ABC</h3>
            <p className="text-sm text-muted-foreground">Junio 2017 - Diciembre 2019</p>
            <ul className="list-disc list-inside mt-2">
              <li>Desarrollé y mantuve múltiples aplicaciones web utilizando la stack MERN.</li>
              <li>Colaboré estrechamente con el equipo de diseño para implementar interfaces de usuario responsivas.</li>
              <li>Participé en code reviews y mentoría de desarrolladores junior.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <GraduationCap className="mr-2" />
            Educación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold">Licenciatura en Ingeniería Informática</h3>
          <p className="text-sm text-muted-foreground">Universidad XYZ, 2013 - 2017</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Book className="mr-2" />
            Habilidades
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>Express</Badge>
            <Badge>MongoDB</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>Python</Badge>
            <Badge>Django</Badge>
            <Badge>Git</Badge>
            <Badge>Docker</Badge>
            <Badge>AWS</Badge>
            <Badge>CI/CD</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CVPage;