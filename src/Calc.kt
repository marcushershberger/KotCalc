import kotlin.browser.document
import kotlin.math.*

class Calc {
    private val strm = InputStream()
    private val storage = MemStorage()
    private var display = strm.getNumDisplay()
    private var value = strm.getNumVal()
    private var mode = Modes.NUMSTREAM
    private var heldVal = 0.0f
    private var currOp = Ops.PLUS

    fun pressMem(slot: MemSlots) {
        if (!storage.isUsed(slot)) {
            storage.storeVal(slot, strm.getNumVal())
        }
        else {
            strm.setNum(storage.releaseVal(slot))
            println(strm.getNumDisplay())
            value = strm.getNumVal()
            display = value.toString()
        }
        updateDisplay()
    }

    fun pressNum(digit: Int) {
        if (mode == Modes.ERASE) {
            strm.reset()
            mode = Modes.NUMSTREAM
        }
        strm.receiveNum(digit)
        display = strm.getNumDisplay()
        updateDisplay()
    }

    fun pressOp(op: Ops, type: OpTypes) {
        if (type == OpTypes.SINGLE) {
            if (op == Ops.EQUAL) {
                when (currOp) {
                    Ops.PLUS -> add(heldVal, strm.getNumVal())
                    Ops.SUB -> subtract(heldVal, strm.getNumVal())
                    Ops.MULT -> multiply(heldVal, strm.getNumVal())
                    Ops.DIV -> divide(heldVal, strm.getNumVal())
                    Ops.EXP -> exponent(heldVal, strm.getNumVal())
                }
                mode = Modes.ERASE
            }
            else {
                when (op) {
                    Ops.RECIP -> reciprocal(strm.getNumVal())
                    Ops.OPP -> flip()
                    Ops.SQRT -> squareroot(strm.getNumVal())
                    Ops.DEC -> strm.receiveDecimal()
                    Ops.SIN -> sine(strm.getNumVal())
                    Ops.COS -> cosine(strm.getNumVal())
                    Ops.TAN -> tangent(strm.getNumVal())
                    Ops.ARCSIN -> arcsine(strm.getNumVal())
                    Ops.ARCCOS -> arccosine(strm.getNumVal())
                    Ops.ARCTAN -> arctangent(strm.getNumVal())
                }
            }
        }
        else { // Op type is DOUBLE
            heldVal = strm.getNumVal()
            if (mode == Modes.OP) {
                pressOp(Ops.EQUAL, OpTypes.SINGLE)
            }
            currOp = op
            mode = Modes.OP
            strm.reset()
        }
        updateDisplay()
    }

    fun pressClear(method: ClearMethod) {
        strm.reset()
        if (method == ClearMethod.C) {
            heldVal = 0f
            mode = Modes.NUMSTREAM
            currOp = Ops.PLUS
        }
        display = strm.getNumDisplay()
        value = strm.getNumVal()
        updateDisplay()
    }

    fun updateDisplay() {
        document.getElementById("display")?.innerHTML = display
    }

    fun transferVals() { // Problem here. heldVal should sometimes hold strm.value
        heldVal = value
        strm.reset()
    }

    private fun flip() {
        strm.flip()
        value = (display.toFloat() * -1)
        display = value.toString()
    }

    private fun add(val1: Float, val2: Float) {
        value = val1 + val2
        display = value.toString()
        strm.setNum(value)
    }

    private fun subtract(val1: Float, val2: Float) {
        value = val1 - val2
        display = value.toString()
        strm.setNum(value)
    }

    private fun multiply(val1: Float, val2: Float) {
        value = val1 * val2
        display = value.toString()
        strm.setNum(value)
    }

    private fun divide(val1: Float, val2: Float) {
        if (val2 == 0f) {
            display = "Div 0 Err"
            return
        }
        value = val1 / val2
        display = value.toString()
        strm.setNum(value)
    }

    private fun reciprocal(val1: Float) {
        divide(1f, val1)
    }

    private fun exponent(val1: Float, val2: Float) {
        value = val1.pow(val2)
        display = value.toString()
        strm.setNum(value)
    }

    private fun squareroot(val1: Float) {
        if (val1 < 0f) {
            display = "Neg Sq Err"
            return
        }
        value = sqrt(val1)
        display = value.toString()
        strm.setNum(value)
    }

    private fun sine(val1: Float) {
        value = sin(val1)
        display = value.toString()
        strm.setNum(value)
    }

    private fun cosine(val1: Float) {
        value = cos(val1)
        display = value.toString()
        strm.setNum(value)
    }

    private fun tangent(val1: Float) {
        value = tan(val1)
        display = value.toString()
        strm.setNum(value)
    }

    private fun arcsine(val1: Float) {
        value = asin(val1)
        display = value.toString()
        strm.setNum(value)
    }

    private fun arccosine(val1: Float) {
        value = acos(val1)
        display = value.toString()
        strm.setNum(value)
    }

    private fun arctangent(val1: Float) {
        value = atan(val1)
        display = value.toString()
        strm.setNum(value)
    }
}