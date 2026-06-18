import { Link } from 'react-router-dom';

function Citas() {
  return (
    <div>
      <h2>Lista de Citas</h2>

      <ul>
        <li>
          <Link to="/cita/1">Cita #1</Link>
        </li>
        <li>
          <Link to="/cita/2">Cita #2</Link>
        </li>
        <li>
          <Link to="/cita/3">Cita #3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Citas;