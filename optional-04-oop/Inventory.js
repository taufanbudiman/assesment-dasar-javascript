/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
   items = []
   addItem(item){
      this.items.push(item)
   }

   removeItem(itemId){
      this.items = this.items.filter(m => {
         return m.id !== itemId
      })
   }

   listItems(){
      let stringItem = ""
      for (let i = 0; i < this.items.length; i++){
         stringItem += this.items[i].displayDetails() + "\n"
      }
      return stringItem
   }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
