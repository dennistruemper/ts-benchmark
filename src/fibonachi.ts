
export function fibonachi(n: number): number {
    if (n === 0) return 1
    if (n === 1) return 1
    return fibonachi(n - 1) + fibonachi(n - 2)
}
