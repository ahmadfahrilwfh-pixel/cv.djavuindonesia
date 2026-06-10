const fs = require('fs');
const path = require('path');

// Pemetaan nama file lama ke nama file baru (SEO-Optimized)
const renameMap = {
    'logo.webp': 'logo-buat-kaos-murah-klaten.webp',
    'logo_nbg.png': 'logo-konveksi-profesional-klaten.png',
    '1.webp': 'buat-kaos-murah-klaten-almamater.webp',
    'real_1.webp': 'konveksi-profesional-klaten-real-almamater.webp',
    '2.webp': 'buat-kaos-murah-klaten-pdl.webp',
    'real_2.webp': 'konveksi-profesional-klaten-real-pdl.webp',
    '3.webp': 'buat-kaos-murah-klaten-pdl-klasik.webp',
    'real_3.webp': 'konveksi-profesional-klaten-real-pdl-klasik.webp',
    '4.webp': 'buat-kaos-murah-klaten-pdl-korporat.webp',
    'real_4.webp': 'konveksi-profesional-klaten-real-pdl-korporat.webp',
    '5.webp': 'buat-kaos-murah-klaten-lacoste-panjang.webp',
    'real_5.webp': 'konveksi-profesional-klaten-real-lacoste-panjang.webp',
    '6.webp': 'buat-kaos-murah-klaten-jaket-racing.webp',
    'real_6.webp': 'konveksi-profesional-klaten-real-jaket-racing.webp',
    '7.webp': 'buat-kaos-murah-klaten-polo-lacoste.webp',
    'real_7.webp': 'konveksi-profesional-klaten-real-polo-lacoste.webp',
    '8.webp': 'buat-kaos-murah-klaten-polo-cotton.webp',
    'real_8.webp': 'konveksi-profesional-klaten-real-polo-cotton.webp',
    '9.webp': 'buat-kaos-murah-klaten-sablon-premium.webp',
    'real_9.webp': 'konveksi-profesional-klaten-real-sablon-premium.webp',
    '10.webp': 'buat-kaos-murah-klaten-dryfit.webp',
    'real_10.webp': 'konveksi-profesional-klaten-real-dryfit.webp',
    '11.webp': 'buat-kaos-murah-klaten-bomber.webp',
    'real_11.webp': 'konveksi-profesional-klaten-real-bomber.webp',
    '12.webp': 'buat-kaos-murah-klaten-lacoste-premium.webp',
    'real_12.webp': 'konveksi-profesional-klaten-real-lacoste-premium.webp',
    '13.webp': 'buat-kaos-murah-klaten-pdl-basic.webp',
    'real_13.webp': 'konveksi-profesional-klaten-real-pdl-basic.webp',
    '14.webp': 'buat-kaos-murah-klaten-cotton-combed.webp',
    'real_14.webp': 'konveksi-profesional-klaten-real-cotton-combed.webp'
};

console.log('=== Memulai Proses Rename Otomatis SEO Assets ===');

let successCount = 0;
let skippedCount = 0;

Object.entries(renameMap).forEach(([oldName, newName]) => {
    const oldPath = path.join(__dirname, oldName);
    const newPath = path.join(__dirname, newName);

    // Cek apakah file lama memang ada di folder
    if (fs.existsSync(oldPath)) {
        try {
            fs.renameSync(oldPath, newPath);
            console.log(`✓ BERHASIL: [${oldName}] -> [${newName}]`);
            successCount++;
        } catch (err) {
            console.error(`✕ GAGAL mengubah ${oldName}:`, err.message);
        }
    } else {
        // Jika file lama tidak ada, mungkin sudah di-rename sebelumnya
        if (fs.existsSync(newPath)) {
            console.log(`- DILEWATI: [${newName}] sudah menggunakan nama baru.`);
        } else {
            console.log(`! PERINGATAN: File lama [${oldName}] tidak ditemukan.`);
        }
        skippedCount++;
    }
});

console.log(`\n=== Selesai! Berhasil merubah ${successCount} file, ${skippedCount} dilewati/tidak ditemukan. ===`);