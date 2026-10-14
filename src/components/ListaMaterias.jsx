export function ListaMaterias() {
  const materias = [
    { id: 1, nombre: 'Taller de Base de Datos' },
    { id: 2, nombre: 'Programación Web' },
    { id: 3, nombre: 'Arquitectura de Computadoras' },
    { id: 4, nombre: 'Simulación' }
  ];

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', margin: '10px 0', backgroundColor: '#f9f9f9' }}>
      <h3>Materias del semestre (Listas y Keys)</h3>
      <ul>
        {materias.map((materia) => (
          <li key={materia.id}>{materia.nombre}</li>
        ))}
      </ul>
    </div>
  );
}