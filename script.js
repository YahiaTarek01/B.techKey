let power = document.querySelector(".gifts")
let buttonb = document.querySelector(".openb")
let bronzes = [
    "خصم %5",
    "كوبون %2",
    "خصم %6",
    "حظ اوفر المرة القادمة",
    "كوبون %9",
    "خصم %7",
    "5% كاش باك",
    "كوبون %8",
]
buttonb.onclick = () => {
    if(document.querySelector(".bronze").innerHTML > 0){
    const randomItem = bronzes[Math.floor(Math.random() * bronzes.length)]
    let i = 0
    document.querySelector(".bronze").innerHTML -= 1
    let start = setInterval(() => {
        if(i >= bronzes.length){
            i = 0
        }
        else {
            power.textContent = bronzes[i]
            i++
        }
    },120)
    setTimeout(() => {
        clearInterval(start)
    power.textContent = randomItem
    },2000)
}
else {
    power.textContent = "عذرا ولكنك لا تمتلك اي مفاتيح "
}
}

let buttons = document.querySelector(".opens")
let silvers = [
    "خصم %10",
    "كوبون %20",
    "خصم %20",
    "سماعة ارايمو",
    "حاول المرة الجاية",
    "كوبون %12",
    "خصم %10",
    "5% كاش باك",
    "كوبون %15",
]
buttons.onclick = () => {
    if(document.querySelector(".silver").innerHTML > 0){
    const randomItem = silvers[Math.floor(Math.random() * silvers.length)]
    let i = 0
    document.querySelector(".silver").innerHTML -= 1
    let start = setInterval(() => {
        if(i >= silvers.length){
            i = 0
        }
        else {
            power.textContent = silvers[i]
            i++
        }
    },120)
    setTimeout(() => {
        clearInterval(start)
    power.textContent = randomItem
    },2000)
}
else {
    power.textContent = "عذرا ولكنك لا تمتلك اي مفاتيح "
}
}

let buttong = document.querySelector(".openg")
let golds = [
    "خصم %25",
    "كوبون %27",
    "خصم %25",
    " مبروك دخلت سحب بي تك",
    "حاول بعدين",
    "كوبون %16",
    "خصم %20",
]
buttong.onclick = () => {
    if(document.querySelector(".gold").innerHTML > 0){
    const randomItem = golds[Math.floor(Math.random() * golds.length)]
    let i = 0
    document.querySelector(".gold").innerHTML -= 1
    let start = setInterval(() => {
        if(i >= golds.length){
            i = 0
        }
        else {
            power.textContent = golds[i]
            i++
        }
    },120)
    setTimeout(() => {
        clearInterval(start)
    power.textContent = randomItem
    },2000)
}
else {
    power.textContent = "عذرا ولكنك لا تمتلك اي مفاتيح "
}
}