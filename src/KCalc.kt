import org.w3c.dom.Element
import kotlin.browser.document

fun main(args: Array<String>) {

    val calc = Calc()

    (document.getElementById("i")!!).addEventListener("click", {
        calc.pressMem(MemSlots.I)
    })

    (document.getElementById("ii")!!).addEventListener("click", {
        calc.pressMem(MemSlots.II)
    })

    (document.getElementById("iii")!!).addEventListener("click", {
        calc.pressMem(MemSlots.III)
    })

    (document.getElementById("iv")!!).addEventListener("click", {
        calc.pressMem(MemSlots.IV)
    })

    (document.getElementById("v")!!).addEventListener("click", {
        calc.pressMem(MemSlots.V)
    })

    (document.getElementById("vi")!!).addEventListener("click", {
        calc.pressMem(MemSlots.VI)
    })

    (document.getElementById("vii")!!).addEventListener("click", {
        calc.pressMem(MemSlots.VII)
    })

    (document.getElementById("1")!!).addEventListener("click", {
        calc.pressNum(1)
    })

    (document.getElementById("2")!!).addEventListener("click", {
        calc.pressNum(2)
    })

    (document.getElementById("3")!!).addEventListener("click", {
        calc.pressNum(3)
    })

    (document.getElementById("4")!!).addEventListener("click", {
        calc.pressNum(4)
    })

    (document.getElementById("5")!!).addEventListener("click", {
        calc.pressNum(5)
    })

    (document.getElementById("6")!!).addEventListener("click", {
        calc.pressNum(6)
    })

    (document.getElementById("7")!!).addEventListener("click", {
        calc.pressNum(7)
    })

    (document.getElementById("8")!!).addEventListener("click", {
        calc.pressNum(8)
    })

    (document.getElementById("9")!!).addEventListener("click", {
        calc.pressNum(9)
    })

    (document.getElementById("0")!!).addEventListener("click", {
        calc.pressNum(0)
    })

    (document.getElementById("plus")!!).addEventListener("click", {
        calc.pressOp(Ops.PLUS, OpTypes.DOUBLE)
    })

    (document.getElementById("sub")!!).addEventListener("click", {
        calc.pressOp(Ops.SUB, OpTypes.DOUBLE)
    })

    (document.getElementById("mult")!!).addEventListener("click", {
        calc.pressOp(Ops.MULT, OpTypes.DOUBLE)
    })

    (document.getElementById("div")!!).addEventListener("click", {
        calc.pressOp(Ops.DIV, OpTypes.DOUBLE)
    })

    (document.getElementById("sin")!!).addEventListener("click", {
        calc.pressOp(Ops.SIN, OpTypes.SINGLE)
    })

    (document.getElementById("cos")!!).addEventListener("click", {
        calc.pressOp(Ops.COS, OpTypes.SINGLE)
    })

    (document.getElementById("tan")!!).addEventListener("click", {
        calc.pressOp(Ops.TAN, OpTypes.SINGLE)
    })

    (document.getElementById("arccos")!!).addEventListener("click", {
        calc.pressOp(Ops.ARCCOS, OpTypes.SINGLE)
    })

    (document.getElementById("arcsin")!!).addEventListener("click", {
        calc.pressOp(Ops.ARCSIN, OpTypes.SINGLE)
    })

    (document.getElementById("arctan")!!).addEventListener("click", {
        calc.pressOp(Ops.ARCTAN, OpTypes.SINGLE)
    })

    (document.getElementById("sqrt")!!).addEventListener("click", {
        calc.pressOp(Ops.SQRT, OpTypes.SINGLE)
    })

    (document.getElementById("dec")!!).addEventListener("click", {
        calc.pressOp(Ops.DEC, OpTypes.SINGLE)
    })

    (document.getElementById("xy")!!).addEventListener("click", {
        calc.pressOp(Ops.EXP, OpTypes.DOUBLE)
    })

    (document.getElementById("plusmin")!!).addEventListener("click", {
        calc.pressOp(Ops.OPP, OpTypes.SINGLE)
    })

    (document.getElementById("overx")!!).addEventListener("click", {
        calc.pressOp(Ops.RECIP, OpTypes.SINGLE)
    })

    (document.getElementById("equal")!!).addEventListener("click", {
        calc.pressOp(Ops.EQUAL, OpTypes.SINGLE)
    })

    (document.getElementById("c")!!).addEventListener("click", {
        calc.pressClear(ClearMethod.C)
    })

    (document.getElementById("ce")!!).addEventListener("click", {
        calc.pressClear(ClearMethod.CE)
    })
}