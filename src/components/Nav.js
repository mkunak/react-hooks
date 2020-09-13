import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Hooks</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/use-state" exact>useState</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/use-effect" exact>useEffect</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/use-ref" exact>useRef</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/use-memo" exact>useMemo</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/use-callback" exact>useCallback</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/use-context-reducer" exact>useContext + useReducer</Link>
      </li>
    </ul>
  );
}