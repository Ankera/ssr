import { hydrateRoot } from 'react-dom/client'; 
import Counter from "../routers/counter";

const root = document.getElementById('root')
hydrateRoot(root, <Counter message="this is msg" />)