const clients = [3, 7, 9, 9, 10]

function raschetnps(clients) {
    let poz = 0
    let neit = 0
    let neg = 0
    for (let item of clients) {
        if (0 <= item && item <= 6) {
            console.log("Клиент ", item, " принадлежит негативной оценке")
            ++neg
        } else if (7 <= item && item <= 8) {
            console.log("Клиент ", item, " принадлежит нейтральной оценке")
            ++neit
        } else if (9 <= item && item <= 10) {
            console.log("Клиент ", item, " принадлежит позитивной оценке")
            ++poz
        }
    }

    function nps(poz, neit, neg) {
        let pozPercent = poz / (poz + neit + neg) * 100
        let negPercent = neg / (poz + neit + neg) * 100
        let nps = pozPercent - negPercent
        console.log("NPS равен ", nps)
    }

    nps(poz, neit, neg)
}

raschetnps(clients)