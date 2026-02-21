let totalItemSemua = 0;
let totalHargaSemua = 0;

function tambahPesanan(harga, qtyId) {
    const nama = document.getElementById('namaPemesan').value.trim();
    const qty = parseInt(document.getElementById(qtyId).value);
    const namaProduk = document.getElementById(qtyId).parentElement.querySelector('h3').innerText;

    if (nama === "") {
        alert("Masukkan Nama Pemesan dulu!");
        return;
    }

    if (qty > 0) {
        // 1. Update Summary Atas
        totalItemSemua += qty;
        totalHargaSemua += (harga * qty);
        document.getElementById('totalItem').innerText = totalItemSemua;
        document.getElementById('totalHarga').innerText = totalHargaSemua.toLocaleString();

        // 2. Tambah ke Tabel Rekap di Bawah
        const tabel = document.getElementById('tabelRekap');
        const row = tabel.insertRow();
        
        row.innerHTML = `
            <td style="padding: 8px;">${nama}</td>
            <td style="padding: 8px;">${qty}x ${namaProduk}</td>
            <td style="padding: 8px;">B ${(harga * qty).toLocaleString()}</td>
        `;

        alert(`Pesanan ${nama} berhasil dicatat!`);
    }
}

function resetPesanan() {
    if (confirm("Hapus semua data pesanan?")) {
        totalItemSemua = 0;
        totalHargaSemua = 0;
        document.getElementById('namaPemesan').value = "";
        document.getElementById('displayNama').innerText = "-";
        document.getElementById('totalItem').innerText = "0";
        document.getElementById('totalHarga').innerText = "0";
        document.getElementById('tabelRekap').innerHTML = "";
    }
}
