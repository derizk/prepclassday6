let tahun = 2000
tahun = 2016

if (tahun%400 === 0){
    console.log("Kabisat")
}
else if (tahun%400 !== 0 & tahun%100 ===0){
    console.log("Bukan Kabisat")
}
else if (tahun%400 !== 0 & tahun%100 !==0 & tahun%4 === 0){
    console.log("Kabisat")
}
else if (tahun%400 !== 0 & tahun%100 !==0 & tahun%4 !== 0){
    console.log("Bukan Kabisat")
}

   