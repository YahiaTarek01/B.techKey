let button = document.querySelector(".open")
let power = document.querySelector(".gifts")
let gifts = [
    "خصم %50",
    "كوبون %30",
    "خصم %20",
    "سماعة ارايمو",
    "حاول تاني",
    "كوبون %12",
    "خصم %10",
    "5% كاش باك",
    "كوبون %15",
]
button.onclick = () => {
    let i = 0
    document.querySelector(".sum").innerHTML = 0
    let start = setInterval(() => {
        if(i >= gifts.length){
            i = 0
        }
        else {
            power.innerHTML = gifts[i]
            i++
        }
    },120)
    setTimeout(() => {
        clearInterval(start)
        const randomItem = gifts(Math.floor(Math.random() * gifts.length))
        power.innerHTML = randomItem
    },2000)
}