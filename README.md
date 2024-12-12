# **Proje Başlığı:** Restoran Rezervasyon Sistemi

---

## **Proje Amacı**
Bir restoranın rezervasyon yönetimini sağlayan, kullanıcıdan müşteri bilgilerini alarak bir rezervasyon oluşturup onaylayan, mevcut rezervasyonları listeleyen ve rezervasyon iptal etme özelliği sunan bir uygulama oluşturmak.

---

## **Anahtar Kelimeler**
- **function**: Rezervasyon ekleme, listeleme ve silme işlemlerini modülerleştirmek için.  
- **if-else**: Kullanıcıdan alınan bilgilerin doğruluğunu kontrol etmek ve seçimlere uygun işlem yapmak için.  
- **do-while**: Kullanıcı çıkış yapana kadar menüyü tekrar göstermek için.  
- **switch-case**: Kullanıcının menüdeki seçimini işlemek için.  

---

## **Değişkenler**
1. **rezervasyonListesi**: Tüm rezervasyonların saklanacağı bir dizi.  
2. **secim**: Kullanıcının menüden yaptığı seçim.  
3. **musteriAdi**: Rezervasyon yapan müşterinin adı.  
4. **masaNo**: Rezervasyon yapılan masa numarası.  
5. **devam**: Kullanıcının programı devam ettirmek isteyip istemediği.  

---

## **Proje Adımları**

### 1. **Giriş Mesajı Gösterme**  
   Kullanıcıya "Restoran Rezervasyon Sistemi" uygulamasına hoş geldiniz mesajını gösterin. Menünün nasıl çalıştığı ve hangi seçeneklerin mevcut olduğu açıklansın.

---

### 2. **Ana Menü Gösterimi**  
   Kullanıcıya aşağıdaki seçeneklerden oluşan bir menü sunun:  
   - **1**: Yeni Rezervasyon Ekle  
   - **2**: Rezervasyonları Listele  
   - **3**: Rezervasyon İptal Et  
   - **4**: Çıkış Yap  

---

### 3. **Yeni Rezervasyon Ekleme**  
   - Kullanıcıdan müşteri adı ve masa numarası alın.  
   - `if-else` ile masa numarasının uygun bir değer (örneğin 1-10 arası) olup olmadığını kontrol edin.  
   - Rezervasyon listesini güncelleyen bir fonksiyon oluşturun.  

---

### 4. **Rezervasyonları Listeleme**  
   - Kullanıcının talebi üzerine mevcut rezervasyonları listeleyen bir fonksiyon oluşturun.  
   - Eğer rezervasyon listesi boşsa uygun bir uyarı mesajı gösterin.  

---

### 5. **Rezervasyon İptal Etme**  
   - Kullanıcıdan iptal etmek istediği masa numarasını alın.  
   - Listeyi kontrol ederek rezervasyonun var olup olmadığını belirleyin.  
   - Eğer rezervasyon varsa silin ve başarı mesajı gösterin.  

---

### 6. **Kullanıcı Onayı**  
   - İşlem tamamlandıktan sonra kullanıcıya menüye geri dönmek isteyip istemediğini sorun.  
   - Kullanıcının isteğine göre `do-while` döngüsünü devam ettirin veya çıkış yapın.  

---

### 7. **Çıkış Mesajı Gösterme**  
   Kullanıcı çıkış yapmak istediğinde teşekkür mesajı gösterin ve programı sonlandırın.  

---
