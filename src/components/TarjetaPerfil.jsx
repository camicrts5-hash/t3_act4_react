export function TarjetaPerfil({ nombre, carrera, semestre }) {
  return (
    <div style={{ border: '2px solid #3ab397', padding: '15px', borderRadius: '10px', marginBottom: '20px', backgroundColor: '#f9f9f9' }}>
      <h3>Perfil del Estudiante: {nombre}</h3>
      <p>Carrera: <strong>{carrera}</strong></p>
      <p>Semestre: <strong>{semestre}</strong></p>
    </div>
  );
}