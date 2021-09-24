let listGoods = [
    {id:0, title:"basketball", img:"./img/basketball ball.jpg", price:150},
    {id:1, title:"football", img:"./img/football ball.png", price:100},
    {id:2, title:"rugby", img:"./img/rugby ball.jpg", price:360},
    {id:3, title:"t-shirt", img:"./img/t-shirt.png", price:200},
    {id:4, title:"tennis", img:"./img/tennis ball.png", price:50},
    {id:5, title:"tennis-racket", img:"./img/tennis racket.png", price:127},
]

sessionStorage.setItem('listGoods', JSON.stringify(listGoods));