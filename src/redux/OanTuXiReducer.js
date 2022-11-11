const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/bao.png', datCuoc: true }
    ],
    ketQua: "Hòa nhau",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'bao', hinhAnh: './img/bao.png' }
}

const OanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC':
            let mangUpdate = [...state.mangDatCuoc]
            mangUpdate = mangUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangUpdate
            return { ...state }
        case 'RAN_DOM':
            let soRandom = Math.floor(Math.random() * 3)
            state.computer = state.mangDatCuoc[soRandom]
            return { ...state }
        case 'END_GAME':
            state.soBanChoi += 1
            let player = state.mangDatCuoc.find(item => item.datCuoc === true)
            let bot = state.computer
            switch (player.ma) {
                case 'keo':
                    if (bot.ma === 'keo') {
                        state.ketQua = 'Hòa nhau !'
                    } else if (bot.ma === 'bua') {
                        state.ketQua = 'Thua sml :))'
                    } else {
                        state.ketQua = "Quá ghê gớm !!"
                        state.soBanThang += 1
                    }
                    break;
                case 'bua':
                    if (bot.ma === 'bua') {
                        state.ketQua = 'Hòa nhau !'
                    } else if (bot.ma === 'bao') {
                        state.ketQua = 'Thua sml :))'
                    } else {
                        state.ketQua = "Quá ghê gớm !!"
                        state.soBanThang += 1
                    }
                    break;
                case 'bao':
                    if (bot.ma === 'bao') {
                        state.ketQua = 'Hòa nhau !'
                    } else if (bot.ma === 'keo') {
                        state.ketQua = 'Thua sml :))'
                    } else {
                        state.ketQua = "Quá ghê gớm !!"
                        state.soBanThang += 1
                    }
                    break;
                default: state.ketQua = "Hòa nhau"
            }
            return { ...state }
        default: return { ...state }
    }
}

export default OanTuXiReducer