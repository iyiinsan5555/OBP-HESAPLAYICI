let table = [];
let totalSum = 0;

const Katsayilar = {

    Kimya: 4,
    Fizik: 4,
    Biyoloji: 4,

    Matematik: 6,

    Edebiyat: 5,

    Tarih: 2,
    Felsefe: 2,
    Beden: 2,
    İngilizce: 4,
    Almanca: 2,
    Görsel_Müzik: 2,
    Din: 2,

}

function CheckNumber(param) {
  console.log(param);
  const number = Number(param)
  if (number <= 100 && number > 0) {
    return true
  } else {
    alert("Verdiğiniz numara "+ number + "\n 0 ile 100 arasında bir rakam giriniz")
    return false
  }

}

 function CalculateKimya() {
    let inputs = document.querySelectorAll('.Ders_Notu_Input_Kimya')
    let Ders_Toplam = 0
    let Input_Count = 0
    inputs.forEach(function(input) {
      if (input) {
        let value = input.value;
        Ders_Toplam += Number(value)
        Input_Count += 1
      }
    });
    let Ders_Ortalaması = Ders_Toplam / Input_Count || 0
    console.log("Kimya ortalaması = ", Ders_Ortalaması)
    totalSum += Ders_Ortalaması * Katsayilar.Kimya
 }

 function CalculateFizik() {
    let inputs = document.querySelectorAll('.Ders_Notu_Input_Fizik')
    let Ders_Toplam = 0
    let Input_Count = 0
    inputs.forEach(function(input) {
      if (input) {
        let value = input.value;
        Ders_Toplam += Number(value)
        Input_Count += 1
      }
    });
    let Ders_Ortalaması = Ders_Toplam / Input_Count || 0
    console.log("Fizik ortalaması = ", Ders_Ortalaması)
    totalSum += Ders_Ortalaması * Katsayilar.Fizik

 }

 function CalculateBiyoloji() {
    let inputs = document.querySelectorAll('.Ders_Notu_Input_Biyoloji')
    let Ders_Toplam = 0
    let Input_Count = 0
    inputs.forEach(function(input) {
      if (input) {
        let value = input.value;
        Ders_Toplam += Number(value)
        Input_Count += 1
      }
    });
    let Ders_Ortalaması = Ders_Toplam / Input_Count || 0
    console.log("Biyoloji ortalaması = ", Ders_Ortalaması)
    totalSum += Ders_Ortalaması * Katsayilar.Biyoloji

 }

 function CalculateMatematik() {
    let inputs = document.querySelectorAll('.Ders_Notu_Input_Matematik')
    let Ders_Toplam = 0
    let Input_Count = 0
    inputs.forEach(function(input) {
      if (input) {
        let value = input.value;
        Ders_Toplam += Number(value)
        Input_Count += 1
      }
    });
    let Ders_Ortalaması = Ders_Toplam / Input_Count || 0
    console.log("Matematik ortalaması = ", Ders_Ortalaması)
    totalSum += Ders_Ortalaması * Katsayilar.Matematik

 }


 function CalculateEdebiyat() {
    let inputs = document.querySelectorAll('.Ders_Notu_Input_Edebiyat')
    let Ders_Toplam = 0
    let Input_Count = 0
    inputs.forEach(function(input) {
      if (input) {
        let value = input.value;
        Ders_Toplam += Number(value)
        Input_Count += 1
      }
    });
    let Ders_Ortalaması = Ders_Toplam / Input_Count || 0
    console.log("Edebiyat ortalaması = ", Ders_Ortalaması)
    totalSum += Ders_Ortalaması * Katsayilar.Edebiyat

 }

 function CalculateTarih() {
    let inputs = document.querySelectorAll('.Ders_Notu_Input_Tarih')
    let Ders_Toplam = 0
    let Input_Count = 0
    inputs.forEach(function(input) {
      if (input) {
        let value = input.value;
        Ders_Toplam += Number(value)
        Input_Count += 1
      }
    });
    let Ders_Ortalaması = Ders_Toplam / Input_Count || 0
    console.log("Tarih ortalaması = ", Ders_Ortalaması)
    totalSum += Ders_Ortalaması * Katsayilar.Tarih

 }

 function CalculateFelsefe() {
    let inputs = document.querySelectorAll('.Ders_Notu_Input_Felsefe')
    let Ders_Toplam = 0
    let Input_Count = 0
    inputs.forEach(function(input) {
      if (input) {
        let value = input.value;
        Ders_Toplam += Number(value)
        Input_Count += 1
      }
    });
    let Ders_Ortalaması = Ders_Toplam / Input_Count || 0
    console.log("Felsefe ortalaması = ", Ders_Ortalaması)
    totalSum += Ders_Ortalaması * Katsayilar.Felsefe

 }

 function CalculateBeden() {
    let inputs = document.querySelectorAll('.Ders_Notu_Input_Beden')
    let Ders_Toplam = 0
    let Input_Count = 0
    inputs.forEach(function(input) {
      if (input) {
        let value = input.value;
        Ders_Toplam += Number(value)
        Input_Count += 1
      }
    });
    let Ders_Ortalaması = Ders_Toplam / Input_Count || 0
    console.log("Beden ortalaması = ", Ders_Ortalaması)
    totalSum += Ders_Ortalaması * Katsayilar.Beden

 }

 function Calculateİngilizce() {
    let inputs = document.querySelectorAll('.Ders_Notu_Input_İngilizce')
    let Ders_Toplam = 0
    let Input_Count = 0
    inputs.forEach(function(input) {
      if (input) {
        let value = input.value;
        Ders_Toplam += Number(value)
        Input_Count += 1
      }
    });
    let Ders_Ortalaması = Ders_Toplam / Input_Count || 0
    console.log("İngilizce ortalaması = ", Ders_Ortalaması)
    totalSum += Ders_Ortalaması * Katsayilar.İngilizce

 }

 function CalculateAlmanca() {
    let inputs = document.querySelectorAll('.Ders_Notu_Input_Almanca')
    let Ders_Toplam = 0
    let Input_Count = 0
    inputs.forEach(function(input) {
      if (input) {
        let value = input.value;
        Ders_Toplam += Number(value)
        Input_Count += 1
      }
    });
    let Ders_Ortalaması = Ders_Toplam / Input_Count || 0
    console.log("Almanca ortalaması = ", Ders_Ortalaması)
    totalSum += Ders_Ortalaması * Katsayilar.Almanca

 }

 function CalculateGörsel_Müzik() {
    let inputs = document.querySelectorAll('.Ders_Notu_Input_Görsel_Müzik')
    let Ders_Toplam = 0
    let Input_Count = 0
    inputs.forEach(function(input) {
      if (input) {
        let value = input.value;
        Ders_Toplam += Number(value)
        Input_Count += 1
      }
    });
    let Ders_Ortalaması = Ders_Toplam / Input_Count || 0
    console.log("Görsel_Müzik ortalaması = ", Ders_Ortalaması)
    totalSum += Ders_Ortalaması * Katsayilar.Görsel_Müzik

 }

 function CalculateDin() {
    let inputs = document.querySelectorAll('.Ders_Notu_Input_Din')
    let Ders_Toplam = 0
    let Input_Count = 0
    inputs.forEach(function(input) {
      if (input) {
        let value = input.value;
        Ders_Toplam += Number(value)
        Input_Count += 1
      }
    });
    let Ders_Ortalaması = Ders_Toplam / Input_Count || 0
    console.log("Din ortalaması = ", Ders_Ortalaması)
    totalSum += Ders_Ortalaması * Katsayilar.Din

 }

 function CalculateObp () {
    totalSum = 0
    CalculateKimya()
    CalculateAlmanca()
    CalculateBeden()
    CalculateBiyoloji()
    CalculateDin()
    CalculateEdebiyat()
    CalculateFelsefe()
    CalculateFizik()
    CalculateGörsel_Müzik()
    CalculateMatematik()
    CalculateTarih()
    Calculateİngilizce()
    const Ortalama_Baremi = document.getElementById("Ortalama_Baremi")
    let number = totalSum / 39
    Ortalama_Baremi.textContent = number.toFixed(3)
    console.log("Ortalama_Baremi")
    console.log(Ortalama_Baremi.innerHTML)
}

function CalculateObpOnButtonClick() {
  totalSum = 0
  CalculateKimya()
  CalculateAlmanca()
  CalculateBeden()
  CalculateBiyoloji()
  CalculateDin()
  CalculateEdebiyat()
  CalculateFelsefe()
  CalculateFizik()
  CalculateGörsel_Müzik()
  CalculateMatematik()
  CalculateTarih()
  Calculateİngilizce()
  const Ortalama_Baremi = document.querySelectorAll("#Ortalama_Baremi")
  let number = totalSum / 39
  Ortalama_Baremi.textContent = number.toFixed(3)
  alert(totalSum / 39)
}


let Inputs = document.querySelectorAll("input")
Inputs.forEach(Input =>  {
  Input.addEventListener("change", function(event) { CheckNumber(event.target.value); CalculateObp(); })
})