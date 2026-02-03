import { useState, type JSX } from 'react';
import Item from './components/Item';
import type { ItemType } from './components/Item';

// This function makes a random id
function makeId(): string {
  // I found this on StackOverflow
  return Math.random().toString(36).substring(2) + Date.now();
}

function ShoppingList(): JSX.Element {
  const [items, setItems] = useState<ItemType[]>([]);
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemQty, setNewItemQty] = useState<number>(1);

  function addItem(): void {
    if (newItemName === '') {
      alert('Please enter an item name');
      return;
    }
    const item: ItemType = {
      id: makeId(),
      name: newItemName,
      quantity: newItemQty,
      isPurchased: false
    };
    setItems(items.concat(item));
    setNewItemName('');
    setNewItemQty(1);
  }

  function updateItem(id: string, patch: Partial<ItemType>): void {
    setItems(items.map((item: ItemType) => {
      if (item.id === id) {
        return Object.assign({}, item, patch);
      }
      return item;
    }));
  }

  function deleteItem(id: string): void {
    setItems(items.filter((item: ItemType) => {
      return item.id !== id;
    }));
  }

  function clearList(): void {
    setItems([]);
  }

  let purchasedCount: number = 0;
  for (let i = 0; i < items.length; i++) {
    if ((items[i] as ItemType).isPurchased) {
      purchasedCount++;
    }
  }

  return (
    <div className='shopping-list' style={{ maxWidth: 640, margin: '2rem auto', padding: 16 }}>
      <h1>Shopping List</h1>

      <div style={{ display: 'grid', gap: 8, gridTemplateColumns: '1fr 140px auto', alignItems: 'center', margin: '16px 0' }}>
        <input
          type='text'
          placeholder='Add an item…'
          value={newItemName}
          onChange={(e) => { setNewItemName(e.target.value); }}
        />
        <input
          type='number'
          min={1}
          value={newItemQty}
          onChange={(e) => { setNewItemQty(Math.max(1, Number(e.target.value) || 1)); }}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      {/* Items */}
      <div className='items'>
        {items.length === 0 ? (
          <p style={{ opacity: 0.7 }}>No items yet. Add your first one above.</p>
        ) : (
          items.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                onUpdate={updateItem}
                onDelete={deleteItem}
              />
            );
          })
        )}
      </div>

      {/* Footer actions */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 16 }}>
        <button onClick={clearList} disabled={items.length === 0}>Clear List</button>
        <span style={{ marginLeft: 'auto', fontSize: 14, opacity: 0.8 }}>
          {purchasedCount}/{items.length} purchased
        </span>
      </div>
    </div>
  );
}

export default ShoppingList;
