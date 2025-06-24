let tg = window.Telegram.WebApp;
tg.expand()
let btn = document.querySelector("#plus1")
let btn_ = document.querySelector("#minus1")
let btn1 = document.querySelector("#plus2")
let btn1_ = document.querySelector("#minus2")
let btn2 = document.querySelector("#plus3")
let btn2_ = document.querySelector("#minus3")
let btn3 = document.querySelector("#plus4")
let btn3_ = document.querySelector("#minus4")
let btn4 = document.querySelector("#plus5")
let btn4_ = document.querySelector("#minus5")
let btn5 = document.querySelector("#plus6")
let btn5_ = document.querySelector("#minus6")
products = {
   phone12: 0,
   phone13: 0,
   phone14: 0,
   phone15: 0,
   phone16: 0,
   phone6: 0,
   }
let count12 = document.querySelector("#count12")
btn.onclick = () => {
      products["phone12"]+=1
      count12.innerHTML = "Кол-во:" + products["phone12"]

}
btn_.onclick = () => {
      if (products["phone12"]>0){
      products["phone12"]-=1
      count12.innerHTML = "Кол-во:" + products["phone12"]
      }
      else{alert("Ошибка")}

}
btn1.onclick = () => {
    products["phone13"]+=1
      count13.innerHTML = "Кол-во:" + products["phone13"]
}
btn1_.onclick = () => {
      if (products["phone13"]>0){
      products["phone13"]-=1
      count13.innerHTML = "Кол-во:" + products["phone13"]
      }
      else{alert("Ошибка")}
}
btn2.onclick = () => {
    products["phone14"]+=1
      count14.innerHTML = "Кол-во:" + products["phone14"]
}
btn2_.onclick = () => {
      if (products["phone14"]>0){
      products["phone14"]-=1
      count14.innerHTML = "Кол-во:" + products["phone14"]
      }
      else{alert("Ошибка")}
}
btn3.onclick = () => {
    products["phone15"]+=1
      count15.innerHTML = "Кол-во:" + products["phone15"]
}
btn3_.onclick = () => {
      if (products["phone15"]>0){
      products["phone15"]-=1
      count15.innerHTML = "Кол-во:" + products["phone15"]
      }
      else{alert("Ошибка")}
}
btn4.onclick = () => {
    products["phone16"]+=1
      count16.innerHTML = "Кол-во:" + products["phone16"]
}
btn4_.onclick = () => {
      if (products["phone16"]>0){
      products["phone16"]-=1
      count16.innerHTML = "Кол-во:" + products["phone16"]
      }
      else{alert("Ошибка")}
}
btn5.onclick = () => {
    products["phone6"]+=1
      count6.innerHTML = "Кол-во:" + products["phone6"]
}
btn5_.onclick = () => {
      if (products["phone6"]>0){
      products["phone6"]-=1
      count6.innerHTML = "Кол-во:" + products["phone6"]
      }
      else{alert("Ошибка")}
}
let send = document.querySelector("#send")
let name = document.querySelector("#name")
let number = document.querySelector("#number")
let mail = document.querySelector("#mail")
let data = document.querySelector("#data")
send.onclick = () => {
     data.innerHTML = "Ваши данные: <br>Ваше имя -" + name.value
     data.innerHTML += "<br>Ваш номер -" + number.value
     data.innerHTML += "<br>Вашa почта -" + mail.value
     data.innerHTML += "<br>Ваш заказ:"
     if (products["phone12"]>0){
     data.innerHTML += "<br>Iphone 12 -" + products["phone12"] + "шт"}
     if (products["phone13"]>0){
     data.innerHTML += "<br>Iphone 13 -" + products["phone13"] + "шт"}
      if (products["phone14"]>0){
     data.innerHTML += "<br>Iphone 14 -" + products["phone14"] + "шт"}
     if (products["phone15"]>0){
     data.innerHTML += "<br>Iphone 15 -" + products["phone15"] + "шт"}
      if (products["phone16"]>0){
     data.innerHTML += "<br>Iphone 16 -" + products["phone16"] + "шт"}
     if (products["phone6"]>0){
     data.innerHTML += "<br>Google Pixel 6 -" + products["phone6"] + "шт"}
}
let btn_confirm = document.querySelector("#confirm")
Telegram.WebApp.onEvent("mainButtonClicked",function(){
     var finalresult = "Ваши данные: <br>Ваше имя -" + name.value
     finalresult += "<br>Ваш номер -" + number.value
     finalresult += "<br>Вашa почта -" + mail.value
     finalresult += "<br>Ваш заказ:"
     if (products["phone12"]>0){
     finalresult += "<br>Iphone 12 -" + products["phone12"] + "шт"}
     if (products["phone13"]>0){
     finalresult += "<br>Iphone 13 -" + products["phone13"] + "шт"}
      if (products["phone14"]>0){
     finalresult += "<br>Iphone 14 -" + products["phone14"] + "шт"}
     if (products["phone15"]>0){
     finalresult += "<br>Iphone 15 -" + products["phone15"] + "шт"}
      if (products["phone16"]>0){
     finalresult += "<br>Iphone 16 -" + products["phone16"] + "шт"}
     if (products["phone6"]>0){
     finalresult += "<br>Google Pixel 6 -" + products["phone6"] + "шт"}
     console.log("Отправляю данные:", finalresult)
     tg.sendData(finalresult)
     tg.MainButton.hide()
})
btn_confirm.onclick = () => {
       tg.MainButton.setText("Вы точно хотите отправить данные?")
       tg.MainButton.show()
}
