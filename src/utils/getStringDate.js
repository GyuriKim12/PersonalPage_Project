const getStringDate = (date) => {
    let getYear = date.getFullYear()
    let getMonth = date.getMonth() + 1
    let getDate = date.getDate()

    if (getMonth < 10) {
        getMonth = `0${getMonth}`
    }
    if (getDate < 10) {
        getDate = `0${getDate}`
    }

    return `${getYear}-${getMonth}-${getDate}`
}

export default getStringDate