const inventory = [
    {name: "pencil", category: "school", price: 16, stock: 50},
    {name: "eraser", category: "school", price: 10, stock: 25},
    {name: "safeguard", category: "hygiene", price: 20, stock: 30},
    {name: "keratin", category: "hygiene", price: 10, stock: 100},
    {name: "1L water", category: "beverages", price: 25, stock: 28}
];

const item_list = document.getElementById('item-list');

inventory.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `item: ${item.name},category: ${item.category},price: ${item.price},stock: ${item.stock}`;
    const buy_button = document.createElement('button');
    buy_button.textContent = "-";
    item_list.appendChild(li);
    li.appendChild(buy_button);

    buy_button.addEventListener('click', () => {
        if(item.stock > 0){
            item.stock--;
            li.textContent = `item: ${item.name},category: ${item.category},price: ${item.price},stock: ${item.stock}`;
            li.appendChild(buy_button);
        }
    });

});



