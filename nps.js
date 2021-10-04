const clients = [9, 7, 10, 3, 10, 8, 9, 9, 9]

function raschet(clients) {
    let pos = 0;
    let neit = 0;
    let neg = 0;
    for (let item of clients) {
        if (0 <= item && item <= 6) {
            console.log("Клиент ", item, " принадлежит отрицательной оценке")
            ++neg
        } else if (7 <= item && item <= 8) {
            console.log("Клиент ", item, " принадлежит нейтральной оценке")
            ++neit
        } else if (9 <= item && item <= 10) {
            console.log("Клиент ", item, " принадлежит позитивной оценке")
            ++pos
        }
    }
    nps(pos, neit, neg)
}

function nps(pos, neit, neg) {
    console.log(pos, neit, neg)
    let posPercent = pos / (pos + neit + neg) * 100
    let negPercent = neg / (pos + neit + neg) * 100
    let nps = posPercent - negPercent
    console.log(posPercent)
    console.log(negPercent)
    console.log("NPS = ", nps)
}

raschet(clients)



