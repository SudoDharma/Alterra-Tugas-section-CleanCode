class kendaraan {
    var totalroda = 0;
    var kecepatanperjam = 0;
}

class mobil extends kendaraan {
    void berjalan() {
        tambahkecepatan(10);
    }

    tambahkecepatan(var kecepatanbaru) {
        kecepatanperjam = kecepatanperjam + kecepatanbaru;
    }
}

void main() {
    mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new mobil();
    mobillamban.berjalan();
}



//  Kode di atas masih belum rapi sehingga harus diperbaiki
//  Di bawah ini adalah kode yang sudah diperbaiki agar menjadi clean code



class Kendaraan {       //  Nama class menggunakan PascalCase
    var totalRoda = 0;      //  Nama variabel menggunakan camelCase
    var kecepatanPerJam = 0;        // Nama variabel menggunakan camelCase
}

class Mobil extends Kendaraan {     //  Nama class menggunakan PascalCase
    void berjalan() {
        tambahKecepatan(10);        //  Nama fungsi menggunakan camelCase
    }

    tambahKecepatan(kecepatanBaru) {        //  Nama fungsi dan variabel menggunakan camelCase
        kecepatanPerJam += kecepatanBaru;       // Mempersingkat penulisan bisa dengan menggunakan operator +=
    }
}

void main() {
    mobilCepat = new Mobil();       //  Nama variabel menggunakan camelCase
    
    mobilCepat.tambahKecepatan(30);     //  Langsung menggunakan method tambahKecepatan dengan parameter 30 daripada menggunakan method berjalan 3 kali

    mobilLamban = new Mobil();      //  Nama variabel menggunakan camelCase
    mobilLamban.berjalan();
}