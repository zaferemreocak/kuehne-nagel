function countByYear(request, response) {
    const list = request.body;
    const listByYear = list.map(data => {
        return {
            year: data.date.substring(0, 4),
            count: 1
        }
    })
    response.json(listByYear);
}

module.exports = {
    countByYear
}