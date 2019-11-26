import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.removeClass

class MemStorage {
    var used: BooleanArray =  booleanArrayOf(false, false, false, false, false, false, false)
    var vals: FloatArray = floatArrayOf(0f, 0f, 0f, 0f, 0f, 0f, 0f)
    var slotMap = mapOf(MemSlots.I to 0, MemSlots.II to 1, MemSlots.III to 2, MemSlots.IV to 3, MemSlots.V to 4, MemSlots.VI to 5, MemSlots.VII to 6)
    var ids = mapOf(MemSlots.I to "i", MemSlots.II to "ii", MemSlots.III to "iii", MemSlots.IV to "iv", MemSlots.V to "v", MemSlots.VI to "vi", MemSlots.VII to "vii")

    fun storeVal(slot: MemSlots, value: Float) {
        toggleUsed(slot)
        vals[slotMap[slot] ?: 0] = value
    }

    fun releaseVal(slot: MemSlots): Float {
        toggleUsed(slot)
        return vals[slotMap[slot] ?: 0]
    }

    fun isUsed(slot: MemSlots): Boolean {
        return used[slotMap[slot] ?: 0]
    }

    fun toggleUsed(slot: MemSlots) {
        used[slotMap[slot] ?: 0] = !(used[slotMap[slot] ?: 0])
        color(slot)
    }

    fun color(slot: MemSlots) {
        document.getElementById(ids[slot] ?: "f")?.removeClass("orange")
        var hue = if (used[slotMap[slot] ?: 0]) "orange" else "green"
        document.getElementById(ids[slot] ?: "f")?.addClass(hue)
    }
}