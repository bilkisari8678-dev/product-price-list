let totalItem = 0;
let totalHarga = 0;

const namaInput = document.getElementById('namaPemesan');
const displayNama = document.getElementById('displayNama');
const totalItemElement = document.getElementById('totalItem');
const totalHargaElement = document.getElementById('totalHarga');

// Update nama pemesan secara otomatis saat diketik
namaInput.addEventListener('input', function() {
    displayNama.innerText = namaInput.value || "-";
});

function tambahPesanan(harga, qtyId) {
    const qty = parseInt(document.getElementById(qtyId).value);
    
    if (qty > 0) {
        totalItem += qty;
        totalHarga += (harga * qty);
        
        totalItemElement.innerText = totalItem;
        totalHargaElement.innerText = totalHarga.toLocaleString();
        
        alert("Pesanan ditambahkan!");
    }
}

function resetPesanan() {
    totalItem = 0;
    totalHarga = 0;
    namaInput.value = "";
    displayNama.innerText = "-";
    totalItemElement.innerText = "0";
    totalHargaElement.innerText = "0";
}
