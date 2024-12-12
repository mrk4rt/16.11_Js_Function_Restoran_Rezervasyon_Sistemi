// Rezervasyon listesi
let rezervasyonListesi = [];

// Yeni rezervasyon ekleme fonksiyonu
function yeniRezervasyonEkle(musteriAdi, masaNo) {
    rezervasyonListesi.push({ musteriAdi, masaNo });
}

// Rezervasyonları listeleme fonksiyonu
function rezervasyonlariListele() {
    if (rezervasyonListesi.length === 0) {
        console.log("Hiç rezervasyon bulunmamaktadır.");
    } else {
        console.log("Mevcut Rezervasyonlar:");
        rezervasyonListesi.forEach(reservasyon => {
            console.log(`Müşteri: ${reservasyon.musteriAdi}, Masa: ${reservasyon.masaNo}`);
        });
    }
}

// Rezervasyon iptal etme fonksiyonu
function rezervasyonIptalEt(masaNo) {
    let index = rezervasyonListesi.findIndex(reservasyon => reservasyon.masaNo === masaNo);
    if (index !== -1) {
        rezervasyonListesi.splice(index, 1);
        console.log(`Masa ${masaNo} için rezervasyon iptal edildi.`);
    } else {
        console.log(`Masa ${masaNo} için rezervasyon bulunamadı.`);
    }
}

// Ana menüyü gösteren fonksiyon
function anaMenu() {
    let devam = true;
    do {
        console.log("\nRestoran Rezervasyon Sistemi");
        console.log("1. Yeni Rezervasyon Ekle");
        console.log("2. Rezervasyonları Listele");
        console.log("3. Rezervasyon İptal Et");
        console.log("4. Çıkış Yap");

        let secim = parseInt(prompt("Bir seçenek girin (1-4):"));

        switch (secim) {
            case 1:
                let musteriAdi = prompt("Müşteri adını girin:");
                let masaNo = parseInt(prompt("Masa numarasını girin (1-10):"));

                if (masaNo < 1 || masaNo > 10) {
                    console.log("Geçersiz masa numarası. 1 ile 10 arasında bir değer girin.");
                } else {
                    yeniRezervasyonEkle(musteriAdi, masaNo);
                    console.log(`Rezervasyon eklendi: ${musteriAdi} - Masa ${masaNo}`);
                }
                break;

            case 2:
                rezervasyonlariListele();
                break;

            case 3:
                masaNo = parseInt(prompt("İptal etmek istediğiniz masa numarasını girin (1-10):"));
                rezervasyonIptalEt(masaNo);
                break;

            case 4:
                console.log("Çıkış yapılıyor... Teşekkür ederiz!");
                devam = false;
                break;

            default:
                console.log("Geçersiz seçenek. Lütfen tekrar deneyin.");
                break;
        }
    } while (devam);
}

// Uygulamayı başlatma
anaMenu();
