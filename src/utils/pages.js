export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (pagesCount) => {
    let pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i);
    }

    return pagesArray;
}