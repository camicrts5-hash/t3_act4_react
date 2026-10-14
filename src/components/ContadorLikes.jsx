import { useState } from 'react';

export function ContadorLikes() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', margin: '10px 0', backgroundColor: '#f9f9f9' }}>
      <h3>Contador Interactivo (useState)</h3>
      <p>Me gusta dados al proyecto: <strong>{likes}</strong> ❤️</p>
      <button onClick={() => setLikes(likes + 1)}>Dar Like</button>
      <button onClick={() => setLikes(0)} style={{ marginLeft: '10px' }}>Reiniciar</button>
    </div>
  );
}