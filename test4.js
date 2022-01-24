   let data=[
      {nama :"Dhea" ,Beratbadan:"60kg",TinggiBadan:"1.5m"},
      {nama :"Essa" ,Beratbadan:"55kg",TinggiBadan:"1.8m"},
      {nama :"Fazila" ,Beratbadan:"90kg",TinggiBadan:"1.6m"},
      {nama :"Debi" ,Beratbadan:"40kg",TinggiBadan:"1.6m"},
      {nama :"Faiza" ,Beratbadan:"30kg",TinggiBadan:"1.4m"},

]
     let kurangGizi=[],normal=[]
     let obesitas=[],beratlebih=[]

      for(let i=0; i<data.length;i++){
          let bmi= data[i].bb / (data[i].tb *data[i].tb)
          if (bmi <18.5 && bmi<24.9){
              kurangGizi.push(data[i].nama)
          }
          if (bmi <25 && bmi<29.9){
            beratlebih.push(data[i].nama)
        }
        if (bmi>=30){
            obesitas.push(data[i].nama)

      }
    }
    console:log(`Data kurang gizi: ${kurangGizi}`);
    console:log(`Data normal: ${normal}`);
    console:log(`Data berat lebih: ${beratlebih}`);
    console:log(`Data obesitas: ${obesitas}`);




  

