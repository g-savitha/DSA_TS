export default function bs_list(haystack: number[], needle: number): boolean {
    // [low,high) -> low inclusive and high exclusive
    let low: number = 0;
    let high: number = haystack.length;
    do {
        let mid: number = Math.floor(low + (high - low) / 2);
        if (needle == haystack[mid]) return true;
        else if (needle > haystack[mid]) {
            low = mid + 1;
        } else high = mid;
    } while (low < high);
    return false;
}
