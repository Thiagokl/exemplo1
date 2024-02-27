import Item from '../Item';

function List({ itens = [] }) {
  const map = itens.map((item) => {
    return (
      <Item key={item.id} item={item} />
    )
  });

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {map}
      </ul>
    </div>
  );
}

export default List;