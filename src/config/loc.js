const locale = _sharedData.loc;


export const simplur = (pattern, count = 1) => {

    if (typeof pattern != 'string')
        return pattern;
     
    const parts = pattern.split('|');
    const matches = parts.map(part => part.match(/\[(\d+|\bInf\b),(\d+|\bInf\b)\]/));

    for (let i = 0; i < matches.length; i++) {
        if (matches[i]) {
            const min = matches[i][1] === 'Inf' ? Infinity : parseInt(matches[i][1]);
            const max = matches[i][2] === 'Inf' ? Infinity : parseInt(matches[i][2]);
            if (count >= min && count <= max) {
                return parts[i].replace(`[${matches[i][1]},${matches[i][2]}]`, count);
            }
        } else if (i === count) {
            return parts[i].replace(`{${i}}`, count);
        }
    }
    return pattern;

}


/**
 * 
 * @param string key 
 * @param object|int replace 
 * @param object secondReplace 
 * @returns string
 */

export const trans = (key, replaceCount = {}, secondReplace = {}) => {

    let keys = key.split(".");

    const replaceVariables = (string, replaceCount, secondReplace) => {

        let object = typeof replaceCount == 'number' ? secondReplace : replaceCount;
        
        if (typeof string == 'string') {

            let keys = Object.keys(object);

            for (let item in keys)
                string = string.replaceAll(':' + keys[item], object[keys[item]]);

        }
        return typeof replaceCount == 'number' ? simplur(string, replaceCount) : string;
    }

    return keys.reduce((o, k) => {
        let next = o[k];
        return !next ? key : replaceVariables(next, replaceCount, secondReplace );
    }, locale);
}

export default locale;
