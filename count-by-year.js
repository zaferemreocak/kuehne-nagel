function countByYear(request, response) {
    let list = request.body;
    const yearMap = new Map();

    list.forEach(data => {
        let year = data.date.substring(0, 4);
        if (!yearMap.has(year)) {
            yearMap.set(year, 1);
        }
        else {
            yearMap.set(year, yearMap.get(year)+1);
        }
    });

    list=[];
    yearMap.forEach((key, value) => {
        list.push({year: value, quantity: key})
    })

    // response.status(200).json(Object.fromEntries(yearMap));
    response.status(200).json(list);
}

module.exports = {
    countByYear
}