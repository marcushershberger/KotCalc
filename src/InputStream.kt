class InputStream {
    private var currNum = "0"
    private var decimal = false

    fun getNumDisplay(): String {
        return currNum
    }

    fun getNumVal(): Float {
        return currNum.toFloat()
    }

    fun flip() {
        currNum = (currNum.toFloat() * -1).toString()
    }

    fun receiveNum(innum: Int) {
        if (currNum.length > 10) return
        if (currNum == "0") {
            currNum = innum.toString()
            return
        }
        currNum += innum.toString()
    }

    fun receiveDecimal() {
        if (decimal) return
        currNum += "."
        decimal = true
    }

    fun reset() {
        currNum = "0"
        decimal = false
    }

    fun setNum(num: Float) {
        currNum = num.toString()
    }
}