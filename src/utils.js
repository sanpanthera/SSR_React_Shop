export const groupBy = (array, key) => {
    return array.reduce((r, o) => {
        var temp = r.find(g => g.key === o[key]),
            value = Object.assign({}, o, o.children && { children: groupBy(o.children, key) });

        if (temp) {
            temp.values.push(value);
        } else {
            r.push({ key: o[key], values: [value] });
        }
        return r;
    }, []);
}



