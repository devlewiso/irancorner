'use client';

export default function ContactPage() {
    return (
      <div>
        <h2>Contacto</h2>
        <p>Ubicación: Guatemala</p>
        <p>Email: <a href="mailto:devlewiso@gmail.com">devlewiso@gmail.com</a></p>
        <div>
          <button onClick={() => window.open('https://www.linkedin.com/in/tu-perfil', '_blank')}>
            LinkedIn
          </button>
          <button onClick={() => window.open('https://github.com/tu-perfil', '_blank')}>
            GitHub
          </button>
        </div>
      </div>
    );
  }
  