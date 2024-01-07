export default function createCart(counter) {
    let items = [];

    const refreshProductsCount = () => counter.innerText = items.length;

    const updateStore = () => {
      localStorage.setItem('items', JSON.stringify(items));
    }

    const setItems = newItems => {
        items = newItems;
        updateStore();
        refreshProductsCount();
    }

    const add = (id, name, price, quantity = 1) => {
        items.push({id, name, price, quantity});
        refreshProductsCount();
        updateStore();
    }

    const remove = (id) => {
        const index = items.findIndex((item)=> item.id === id);
        console.log(items[index]);
        items.splice(index, 1);
        refreshProductsCount();
        updateStore();
    }

    const hasItem = (id) => {
      return items.find((item) => item.id === id);  
    }
 
    return {
        add,
        remove,
        setItems,
        hasItem,
    }
}

export const obj = {name: 'Tomasz'};