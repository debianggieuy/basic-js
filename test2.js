let umur=[16,40,45,60,17]
let jmlRemaja=0 ,jmlDewasa=0,jmlTua=0

for(let number=0; number< umur.length; number++){
    if (umur[number]>=12 && umur[number]<=23){
        jmlRemaja=jmlRemaja+1

    }
    if (umur[number]>=24 && umur[number]<=55){
        jmlDewasa=jmlDewasa+1
    }
    if(umur[number]>55){
        jmlTua=jmlTua+1
    }
}
console.log("Jumlah Remaja ="+ jmlRemaja);
console.log('jumlah Dewasa ='+jmlDewasa);
console.log(`jumlah Tua =${jmlTua}`);