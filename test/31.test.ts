import { fibonachi } from '../src/fibonachi'

describe('fibonachi', () => {
    it('1', () => {
        let fib = fibonachi(1)
        expect(fib).toEqual(1)
    })

    it('2', () => {
        let fib = fibonachi(2)
        expect(fib).toEqual(2)
    })

    it('3', () => {
        let fib = fibonachi(3)
        expect(fib).toEqual(3)
    })

    it('4', () => {
        let fib = fibonachi(4)
        expect(fib).toEqual(5)
    })

    it('5', () => {
        let fib = fibonachi(5)
        expect(fib).toEqual(8)
    })


    it('100', () => {
        let fib = fibonachi(40)
        expect(fib).toEqual(165580141)
    })

})

