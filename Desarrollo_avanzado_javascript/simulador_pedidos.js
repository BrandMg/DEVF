const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

// Función que simula la preparacion con Promise + setTimeout
function simulatePreparation(order) {
    return new Promise((resolve) => {
        const tiempoPreparacion = Math.floor(Math.random() * 3000) + 2000; 

        setTimeout(() => {
            resolve(`Pedido #${order.id} listo`);
        }, tiempoPreparacion);
    });
}

// Función asincrónica principal
async function processOrder(order) {
    try {
        await simulatePreparation(order);

        order.status = 'Completado';
        updateOrderStatus(order, order.status);

    } catch (error) {
        console.error('Error procesando el pedido:', error);
    }
}