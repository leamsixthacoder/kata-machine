export default function bs_list(haystack: number[], needle: number): boolean {

    let lowestValue = 0
    let hightestValue = haystack.length

    do {
        const midPoint = Math.floor(lowestValue + (hightestValue - lowestValue) / 2)
        const value = haystack[midPoint];

        if(value === needle) {
            return true;
        }else if(value > needle) {
            hightestValue = midPoint;
            
        }else {
            lowestValue = midPoint + 1;
        }
    } while(lowestValue < hightestValue);

    return false;

}