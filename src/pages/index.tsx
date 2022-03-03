import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

const Home: NextPage = () => {
  const handleChange = (e: any) => {
    console.log(e.target.files[0]);
  };

  useEffect(() => {
    fetch("/api/file-manager/hello")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Adrián Solimano</h1>
        <p>
          Gracias por esta oportunidad. Lamentablementes mis tiempos han sido
          complicados debido a mis responsabilidades laborales, me hubiese
          gustado presentar en tiempo algo mucho mas robusto y testeado.
        </p>
        <p>
          Consciente de mis tiempos, no suelo asumir el compromiso de realizar
          challenges o pruebas técnicas pero tengo que reconocer que Green Power
          me atrapó desde el primer contacto y aún en mi situación, decidí
          arriesgar. Espero no haberles quitado demasiado tiempo.
        </p>
        <p>Debido a la falta de tiempo, me gustaría aclarar algunas cosas:</p>
        <ul>
          <li>
            discriminé entre carpetas y archivos por extensión. Obviamente no es
            lo esperado ya que una carpeta debería poderse crear con nombre de
            sitio web, por ejemplo.
          </li>
          <li>Las carpetas y los archivos no se puede renombrar</li>
          <li>No se testeó por completo el funcionamiento.</li>
          <li>
            Me hubiese gustado devolver objetos mas completos desde la api, no
            solo el nombre del fichero. Claramente hubiese simplificado mucho lo
            tarea.
          </li>
        </ul>
        <Link href="/file-manager/root">
          <a className="btn primary">Ir al explorador</a>
        </Link>
      </main>
    </>
  );
};

export default Home;
