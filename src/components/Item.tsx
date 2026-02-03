import type { ChangeEvent, JSX } from 'react';

export type ItemType = {
  id: string;
  name: string;
  quantity: number;
  isPurchased: boolean;
};

type ItemProps = {
  item: ItemType;
  onUpdate: (id: string, patch: Partial<ItemType>) => void;
  onDelete: (id: string) => void;
};

function Item(props: ItemProps): JSX.Element {
  const item: ItemType = props.item;

  function handleNameChange(e: ChangeEvent<HTMLInputElement>): void {
    props.onUpdate(item.id, { name: e.target.value });
  }

  function handleQtyChange(e: ChangeEvent<HTMLInputElement>): void {
    props.onUpdate(item.id, { quantity: Math.max(1, Number(e.target.value) || 1) });
  }

  function handlePurchasedChange(e: ChangeEvent<HTMLInputElement>): void {
    props.onUpdate(item.id, { isPurchased: e.target.checked });
  }
  
  function handleDelete(): void {
    props.onDelete(item.id);
  }

  return (
    <div className='item' style={{ display: 'grid', gap: 8, gridTemplateColumns: '1fr 120px 120px auto', alignItems: 'center', marginBottom: 8 }}>
      <input
        type='text'
        value={item.name}
        onChange={handleNameChange}
        placeholder='Item name…'
      />
      <input
        type='number'
        value={item.quantity}
        onChange={handleQtyChange}
        min={1}
      />
      <label style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <input
          type='checkbox'
          checked={item.isPurchased}
          onChange={handlePurchasedChange}
        />
        Purchased
      </label>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Item;
