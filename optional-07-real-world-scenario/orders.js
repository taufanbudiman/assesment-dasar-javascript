// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  let totalPrice = 0;
  items.map(item => totalPrice += item.price)

  let order = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu'
  };

  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, statusOrder) {
  orders = orders.map(order =>
      order.id === orderId ? { ...order, status: statusOrder } : order
  );
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  let revenue = 0;
  orders.map(order =>
    order.status === 'Selesai'? revenue += order.totalPrice : revenue
  )
  return revenue;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter(order =>
      order.id !== id
  );
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
