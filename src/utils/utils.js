
function sortRowsPerName(rows, name, up) {

    const _rows = Object.values(rows);

    return _rows.sort((a, b) => {
        if (up) {
            return (a[name] > b[name]) ? 1 : ((b[name] > a[name]) ? -1 : 0);
        } else {
            return (a[name] < b[name]) ? 1 : ((b[name] < a[name]) ? -1 : 0);
        }
    });
    
}

export { sortRowsPerName };