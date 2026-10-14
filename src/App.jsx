import { TarjetaPerfil } from './components/TarjetaPerfil';
import { ContadorLikes } from './components/ContadorLikes';
import { ListaMaterias } from './components/ListaMaterias';

export default function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', lineHeight: '1.2', margin: '20px 0' }}>
        Práctica 4: Introducción a React
      </h1>
      <TarjetaPerfil 
        nombre="Erandi Camila Ruíz Jiménez" 
        carrera="Ingeniería en Sistemas Computacionales" 
        semestre="5to Semestre" 
      />
      <ContadorLikes />
      <ListaMaterias />
    </div>
  );
}