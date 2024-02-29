import { useNavigate } from 'react-router-dom';

function Item({ item }) {

  const navigate = useNavigate();
  
  const handleOnclick = () => {
     navigate(`/details/${item.id}`);
  }

  return (
    <li>
        <p>{item.name}</p>
      <button type="button" onClick={handleOnclick}>
        Ver detalhes
        </button>
    </li>
  );
}

export default Item;