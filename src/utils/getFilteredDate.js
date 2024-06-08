const getFilteredDate = (pivotDate, data) => {
    const start = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime()
    const end = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime()
    return data.filter((item) => start <= item.createdDate && item.createdDate <= end)
}

export default getFilteredDate