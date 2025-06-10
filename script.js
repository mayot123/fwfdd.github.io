let tg = window.Telegram.WebApp;
tg.expand()
let btn = document.querySelector("#phone1")
btn.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы заказали Смартфон Apple iPhone 12")
        tg.MainButton.show()
    }
}
let btn1 = document.querySelector("#phone2")
btn1.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы заказали Смартфон Apple iPhone 13")
        tg.MainButton.show()
    }
}