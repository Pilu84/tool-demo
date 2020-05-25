
export function filterMethodFulltext(filter: any, row: any, accessor: string,
    customFilterTranslator?: (key: string, value: string) => string) {
    // console.log('FILTERFULLTEXT: ', accessor, filter, row);
    if (row[accessor]) {
        let value = (row[accessor] + '');
        if (customFilterTranslator) {
            value = customFilterTranslator(accessor, value);
        }
        if (value.toLowerCase().indexOf(filter.value.toLowerCase()) !== -1) {
            return true;
        }
    }
    if (row._subRows) {
        let found = false;
        row._subRows.forEach((subrow: any) => {
            if (subrow[accessor] &&
                (subrow[accessor] + '').toLowerCase().indexOf(filter.value.toLowerCase()) !== -1) {
                found = true;
            }
        });
        return found;
    }
    return false;
}
