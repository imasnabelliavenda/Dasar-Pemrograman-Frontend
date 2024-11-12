const hitung = document.getElementById('perhitungan');
const totalBiaya = document.getElementById('total-biaya');

const biaya = {
    bwi: [5000, 7500, 10000, 15000],
    jember: [7500, 5000, 8500, 12500],
    probolinggo: [10000, 8500, 5000, 6500],
    sby: [15000, 12500, 6500, 5000]
};

hitung.addEventListener('submit', (event) => {
    event.preventDefault();

    const berat = parseFloat(document.getElementById('berat').value);
    const kotaAsal = document.getElementById('kota-asal').value;
    const kotaTujuan = document.getElementById('kota-tujuan').value;

    let biayaBerat;
    if (berat <= 1) {
        biayaBerat = 1500;
    } else if (berat <= 5) {
        biayaBerat = 2500;
    } else if (berat <= 10) {
        biayaBerat = 3500;
    } else {
        biayaBerat = 4500;
    }

    const tujuan = ["bwi", "jember", "probolinggo", "sby"].indexOf(kotaTujuan);
    const jarak = biaya[kotaAsal][tujuan];
    const totalCost = jarak + biayaBerat;

    totalBiaya.value = `Rp. ${totalCost.toFixed(0)}`;
});
