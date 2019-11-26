if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KCalc 2.0'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KCalc 2.0'.");
}
this['KCalc 2.0'] = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var Math_0 = Math;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var equals = Kotlin.equals;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  ClearMethod.prototype = Object.create(Enum.prototype);
  ClearMethod.prototype.constructor = ClearMethod;
  MemSlots.prototype = Object.create(Enum.prototype);
  MemSlots.prototype.constructor = MemSlots;
  Modes.prototype = Object.create(Enum.prototype);
  Modes.prototype.constructor = Modes;
  Ops.prototype = Object.create(Enum.prototype);
  Ops.prototype.constructor = Ops;
  OpTypes.prototype = Object.create(Enum.prototype);
  OpTypes.prototype.constructor = OpTypes;
  function Calc() {
    this.strm_0 = new InputStream();
    this.storage_0 = new MemStorage();
    this.display_0 = this.strm_0.getNumDisplay();
    this.value_0 = this.strm_0.getNumVal();
    this.mode_0 = Modes$NUMSTREAM_getInstance();
    this.heldVal_0 = 0.0;
    this.currOp_0 = Ops$PLUS_getInstance();
  }
  Calc.prototype.pressMem_9waohs$ = function (slot) {
    if (!this.storage_0.isUsed_9waohs$(slot)) {
      this.storage_0.storeVal_bjaw1n$(slot, this.strm_0.getNumVal());
    }
     else {
      this.strm_0.setNum_mx4ult$(this.storage_0.releaseVal_9waohs$(slot));
      println(this.strm_0.getNumDisplay());
      this.value_0 = this.strm_0.getNumVal();
      this.display_0 = this.value_0.toString();
    }
    this.updateDisplay();
  };
  Calc.prototype.pressNum_za3lpa$ = function (digit) {
    if (this.mode_0 === Modes$ERASE_getInstance()) {
      this.strm_0.reset();
      this.mode_0 = Modes$NUMSTREAM_getInstance();
    }
    this.strm_0.receiveNum_za3lpa$(digit);
    this.display_0 = this.strm_0.getNumDisplay();
    this.updateDisplay();
  };
  Calc.prototype.pressOp_qejzry$ = function (op, type) {
    if (type === OpTypes$SINGLE_getInstance()) {
      if (op === Ops$EQUAL_getInstance()) {
        switch (this.currOp_0.name) {
          case 'PLUS':
            this.add_0(this.heldVal_0, this.strm_0.getNumVal());
            break;
          case 'SUB':
            this.subtract_0(this.heldVal_0, this.strm_0.getNumVal());
            break;
          case 'MULT':
            this.multiply_0(this.heldVal_0, this.strm_0.getNumVal());
            break;
          case 'DIV':
            this.divide_0(this.heldVal_0, this.strm_0.getNumVal());
            break;
          case 'EXP':
            this.exponent_0(this.heldVal_0, this.strm_0.getNumVal());
            break;
        }
        this.mode_0 = Modes$ERASE_getInstance();
      }
       else {
        switch (op.name) {
          case 'RECIP':
            this.reciprocal_0(this.strm_0.getNumVal());
            break;
          case 'OPP':
            this.flip_0();
            break;
          case 'SQRT':
            this.squareroot_0(this.strm_0.getNumVal());
            break;
          case 'DEC':
            this.strm_0.receiveDecimal();
            break;
          case 'SIN':
            this.sine_0(this.strm_0.getNumVal());
            break;
          case 'COS':
            this.cosine_0(this.strm_0.getNumVal());
            break;
          case 'TAN':
            this.tangent_0(this.strm_0.getNumVal());
            break;
          case 'ARCSIN':
            this.arcsine_0(this.strm_0.getNumVal());
            break;
          case 'ARCCOS':
            this.arccosine_0(this.strm_0.getNumVal());
            break;
          case 'ARCTAN':
            this.arctangent_0(this.strm_0.getNumVal());
            break;
        }
      }
    }
     else {
      this.heldVal_0 = this.strm_0.getNumVal();
      if (this.mode_0 === Modes$OP_getInstance()) {
        this.pressOp_qejzry$(Ops$EQUAL_getInstance(), OpTypes$SINGLE_getInstance());
      }
      this.currOp_0 = op;
      this.mode_0 = Modes$OP_getInstance();
      this.strm_0.reset();
    }
    this.updateDisplay();
  };
  Calc.prototype.pressClear_1pfqtu$ = function (method) {
    this.strm_0.reset();
    if (method === ClearMethod$C_getInstance()) {
      this.heldVal_0 = 0.0;
      this.mode_0 = Modes$NUMSTREAM_getInstance();
      this.currOp_0 = Ops$PLUS_getInstance();
    }
    this.display_0 = this.strm_0.getNumDisplay();
    this.value_0 = this.strm_0.getNumVal();
    this.updateDisplay();
  };
  Calc.prototype.updateDisplay = function () {
    var tmp$;
    (tmp$ = document.getElementById('display')) != null ? (tmp$.innerHTML = this.display_0) : null;
  };
  Calc.prototype.transferVals = function () {
    this.heldVal_0 = this.value_0;
    this.strm_0.reset();
  };
  Calc.prototype.flip_0 = function () {
    this.strm_0.flip();
    this.value_0 = toDouble(this.display_0) * -1;
    this.display_0 = this.value_0.toString();
  };
  Calc.prototype.add_0 = function (val1, val2) {
    this.value_0 = val1 + val2;
    this.display_0 = this.value_0.toString();
    this.strm_0.setNum_mx4ult$(this.value_0);
  };
  Calc.prototype.subtract_0 = function (val1, val2) {
    this.value_0 = val1 - val2;
    this.display_0 = this.value_0.toString();
    this.strm_0.setNum_mx4ult$(this.value_0);
  };
  Calc.prototype.multiply_0 = function (val1, val2) {
    this.value_0 = val1 * val2;
    this.display_0 = this.value_0.toString();
    this.strm_0.setNum_mx4ult$(this.value_0);
  };
  Calc.prototype.divide_0 = function (val1, val2) {
    if (val2 === 0.0) {
      this.display_0 = 'Div 0 Err';
      return;
    }
    this.value_0 = val1 / val2;
    this.display_0 = this.value_0.toString();
    this.strm_0.setNum_mx4ult$(this.value_0);
  };
  Calc.prototype.reciprocal_0 = function (val1) {
    this.divide_0(1.0, val1);
  };
  Calc.prototype.exponent_0 = function (val1, val2) {
    this.value_0 = Math_0.pow(val1, val2);
    this.display_0 = this.value_0.toString();
    this.strm_0.setNum_mx4ult$(this.value_0);
  };
  Calc.prototype.squareroot_0 = function (val1) {
    if (val1 < 0.0) {
      this.display_0 = 'Neg Sq Err';
      return;
    }
    this.value_0 = Math_0.sqrt(val1);
    this.display_0 = this.value_0.toString();
    this.strm_0.setNum_mx4ult$(this.value_0);
  };
  Calc.prototype.sine_0 = function (val1) {
    this.value_0 = Math_0.sin(val1);
    this.display_0 = this.value_0.toString();
    this.strm_0.setNum_mx4ult$(this.value_0);
  };
  Calc.prototype.cosine_0 = function (val1) {
    this.value_0 = Math_0.cos(val1);
    this.display_0 = this.value_0.toString();
    this.strm_0.setNum_mx4ult$(this.value_0);
  };
  Calc.prototype.tangent_0 = function (val1) {
    this.value_0 = Math_0.tan(val1);
    this.display_0 = this.value_0.toString();
    this.strm_0.setNum_mx4ult$(this.value_0);
  };
  Calc.prototype.arcsine_0 = function (val1) {
    this.value_0 = Math_0.asin(val1);
    this.display_0 = this.value_0.toString();
    this.strm_0.setNum_mx4ult$(this.value_0);
  };
  Calc.prototype.arccosine_0 = function (val1) {
    this.value_0 = Math_0.acos(val1);
    this.display_0 = this.value_0.toString();
    this.strm_0.setNum_mx4ult$(this.value_0);
  };
  Calc.prototype.arctangent_0 = function (val1) {
    this.value_0 = Math_0.atan(val1);
    this.display_0 = this.value_0.toString();
    this.strm_0.setNum_mx4ult$(this.value_0);
  };
  Calc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Calc',
    interfaces: []
  };
  function ClearMethod(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ClearMethod_initFields() {
    ClearMethod_initFields = function () {
    };
    ClearMethod$C_instance = new ClearMethod('C', 0);
    ClearMethod$CE_instance = new ClearMethod('CE', 1);
  }
  var ClearMethod$C_instance;
  function ClearMethod$C_getInstance() {
    ClearMethod_initFields();
    return ClearMethod$C_instance;
  }
  var ClearMethod$CE_instance;
  function ClearMethod$CE_getInstance() {
    ClearMethod_initFields();
    return ClearMethod$CE_instance;
  }
  ClearMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClearMethod',
    interfaces: [Enum]
  };
  function ClearMethod$values() {
    return [ClearMethod$C_getInstance(), ClearMethod$CE_getInstance()];
  }
  ClearMethod.values = ClearMethod$values;
  function ClearMethod$valueOf(name) {
    switch (name) {
      case 'C':
        return ClearMethod$C_getInstance();
      case 'CE':
        return ClearMethod$CE_getInstance();
      default:throwISE('No enum constant ClearMethod.' + name);
    }
  }
  ClearMethod.valueOf_61zpoe$ = ClearMethod$valueOf;
  function InputStream() {
    this.currNum_0 = '0';
    this.decimal_0 = false;
  }
  InputStream.prototype.getNumDisplay = function () {
    return this.currNum_0;
  };
  InputStream.prototype.getNumVal = function () {
    return toDouble(this.currNum_0);
  };
  InputStream.prototype.flip = function () {
    this.currNum_0 = (toDouble(this.currNum_0) * -1).toString();
  };
  InputStream.prototype.receiveNum_za3lpa$ = function (innum) {
    if (this.currNum_0.length > 10)
      return;
    if (equals(this.currNum_0, '0')) {
      this.currNum_0 = innum.toString();
      return;
    }
    this.currNum_0 += innum.toString();
  };
  InputStream.prototype.receiveDecimal = function () {
    if (this.decimal_0)
      return;
    this.currNum_0 += '.';
    this.decimal_0 = true;
  };
  InputStream.prototype.reset = function () {
    this.currNum_0 = '0';
    this.decimal_0 = false;
  };
  InputStream.prototype.setNum_mx4ult$ = function (num) {
    this.currNum_0 = num.toString();
  };
  InputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputStream',
    interfaces: []
  };
  function main$lambda(closure$calc) {
    return function (it) {
      closure$calc.pressMem_9waohs$(MemSlots$I_getInstance());
      return Unit;
    };
  }
  function main$lambda_0(closure$calc) {
    return function (it) {
      closure$calc.pressMem_9waohs$(MemSlots$II_getInstance());
      return Unit;
    };
  }
  function main$lambda_1(closure$calc) {
    return function (it) {
      closure$calc.pressMem_9waohs$(MemSlots$III_getInstance());
      return Unit;
    };
  }
  function main$lambda_2(closure$calc) {
    return function (it) {
      closure$calc.pressMem_9waohs$(MemSlots$IV_getInstance());
      return Unit;
    };
  }
  function main$lambda_3(closure$calc) {
    return function (it) {
      closure$calc.pressMem_9waohs$(MemSlots$V_getInstance());
      return Unit;
    };
  }
  function main$lambda_4(closure$calc) {
    return function (it) {
      closure$calc.pressMem_9waohs$(MemSlots$VI_getInstance());
      return Unit;
    };
  }
  function main$lambda_5(closure$calc) {
    return function (it) {
      closure$calc.pressMem_9waohs$(MemSlots$VII_getInstance());
      return Unit;
    };
  }
  function main$lambda_6(closure$calc) {
    return function (it) {
      closure$calc.pressNum_za3lpa$(1);
      return Unit;
    };
  }
  function main$lambda_7(closure$calc) {
    return function (it) {
      closure$calc.pressNum_za3lpa$(2);
      return Unit;
    };
  }
  function main$lambda_8(closure$calc) {
    return function (it) {
      closure$calc.pressNum_za3lpa$(3);
      return Unit;
    };
  }
  function main$lambda_9(closure$calc) {
    return function (it) {
      closure$calc.pressNum_za3lpa$(4);
      return Unit;
    };
  }
  function main$lambda_10(closure$calc) {
    return function (it) {
      closure$calc.pressNum_za3lpa$(5);
      return Unit;
    };
  }
  function main$lambda_11(closure$calc) {
    return function (it) {
      closure$calc.pressNum_za3lpa$(6);
      return Unit;
    };
  }
  function main$lambda_12(closure$calc) {
    return function (it) {
      closure$calc.pressNum_za3lpa$(7);
      return Unit;
    };
  }
  function main$lambda_13(closure$calc) {
    return function (it) {
      closure$calc.pressNum_za3lpa$(8);
      return Unit;
    };
  }
  function main$lambda_14(closure$calc) {
    return function (it) {
      closure$calc.pressNum_za3lpa$(9);
      return Unit;
    };
  }
  function main$lambda_15(closure$calc) {
    return function (it) {
      closure$calc.pressNum_za3lpa$(0);
      return Unit;
    };
  }
  function main$lambda_16(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$PLUS_getInstance(), OpTypes$DOUBLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_17(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$SUB_getInstance(), OpTypes$DOUBLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_18(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$MULT_getInstance(), OpTypes$DOUBLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_19(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$DIV_getInstance(), OpTypes$DOUBLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_20(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$SIN_getInstance(), OpTypes$SINGLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_21(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$COS_getInstance(), OpTypes$SINGLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_22(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$TAN_getInstance(), OpTypes$SINGLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_23(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$ARCCOS_getInstance(), OpTypes$SINGLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_24(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$ARCSIN_getInstance(), OpTypes$SINGLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_25(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$ARCTAN_getInstance(), OpTypes$SINGLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_26(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$SQRT_getInstance(), OpTypes$SINGLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_27(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$DEC_getInstance(), OpTypes$SINGLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_28(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$EXP_getInstance(), OpTypes$DOUBLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_29(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$OPP_getInstance(), OpTypes$SINGLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_30(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$RECIP_getInstance(), OpTypes$SINGLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_31(closure$calc) {
    return function (it) {
      closure$calc.pressOp_qejzry$(Ops$EQUAL_getInstance(), OpTypes$SINGLE_getInstance());
      return Unit;
    };
  }
  function main$lambda_32(closure$calc) {
    return function (it) {
      closure$calc.pressClear_1pfqtu$(ClearMethod$C_getInstance());
      return Unit;
    };
  }
  function main$lambda_33(closure$calc) {
    return function (it) {
      closure$calc.pressClear_1pfqtu$(ClearMethod$CE_getInstance());
      return Unit;
    };
  }
  function main(args) {
    var calc = new Calc();
    ensureNotNull(document.getElementById('i')).addEventListener('click', main$lambda(calc));
    ensureNotNull(document.getElementById('ii')).addEventListener('click', main$lambda_0(calc));
    ensureNotNull(document.getElementById('iii')).addEventListener('click', main$lambda_1(calc));
    ensureNotNull(document.getElementById('iv')).addEventListener('click', main$lambda_2(calc));
    ensureNotNull(document.getElementById('v')).addEventListener('click', main$lambda_3(calc));
    ensureNotNull(document.getElementById('vi')).addEventListener('click', main$lambda_4(calc));
    ensureNotNull(document.getElementById('vii')).addEventListener('click', main$lambda_5(calc));
    ensureNotNull(document.getElementById('1')).addEventListener('click', main$lambda_6(calc));
    ensureNotNull(document.getElementById('2')).addEventListener('click', main$lambda_7(calc));
    ensureNotNull(document.getElementById('3')).addEventListener('click', main$lambda_8(calc));
    ensureNotNull(document.getElementById('4')).addEventListener('click', main$lambda_9(calc));
    ensureNotNull(document.getElementById('5')).addEventListener('click', main$lambda_10(calc));
    ensureNotNull(document.getElementById('6')).addEventListener('click', main$lambda_11(calc));
    ensureNotNull(document.getElementById('7')).addEventListener('click', main$lambda_12(calc));
    ensureNotNull(document.getElementById('8')).addEventListener('click', main$lambda_13(calc));
    ensureNotNull(document.getElementById('9')).addEventListener('click', main$lambda_14(calc));
    ensureNotNull(document.getElementById('0')).addEventListener('click', main$lambda_15(calc));
    ensureNotNull(document.getElementById('plus')).addEventListener('click', main$lambda_16(calc));
    ensureNotNull(document.getElementById('sub')).addEventListener('click', main$lambda_17(calc));
    ensureNotNull(document.getElementById('mult')).addEventListener('click', main$lambda_18(calc));
    ensureNotNull(document.getElementById('div')).addEventListener('click', main$lambda_19(calc));
    ensureNotNull(document.getElementById('sin')).addEventListener('click', main$lambda_20(calc));
    ensureNotNull(document.getElementById('cos')).addEventListener('click', main$lambda_21(calc));
    ensureNotNull(document.getElementById('tan')).addEventListener('click', main$lambda_22(calc));
    ensureNotNull(document.getElementById('arccos')).addEventListener('click', main$lambda_23(calc));
    ensureNotNull(document.getElementById('arcsin')).addEventListener('click', main$lambda_24(calc));
    ensureNotNull(document.getElementById('arctan')).addEventListener('click', main$lambda_25(calc));
    ensureNotNull(document.getElementById('sqrt')).addEventListener('click', main$lambda_26(calc));
    ensureNotNull(document.getElementById('dec')).addEventListener('click', main$lambda_27(calc));
    ensureNotNull(document.getElementById('xy')).addEventListener('click', main$lambda_28(calc));
    ensureNotNull(document.getElementById('plusmin')).addEventListener('click', main$lambda_29(calc));
    ensureNotNull(document.getElementById('overx')).addEventListener('click', main$lambda_30(calc));
    ensureNotNull(document.getElementById('equal')).addEventListener('click', main$lambda_31(calc));
    ensureNotNull(document.getElementById('c')).addEventListener('click', main$lambda_32(calc));
    ensureNotNull(document.getElementById('ce')).addEventListener('click', main$lambda_33(calc));
  }
  function MemSlots(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MemSlots_initFields() {
    MemSlots_initFields = function () {
    };
    MemSlots$I_instance = new MemSlots('I', 0);
    MemSlots$II_instance = new MemSlots('II', 1);
    MemSlots$III_instance = new MemSlots('III', 2);
    MemSlots$IV_instance = new MemSlots('IV', 3);
    MemSlots$V_instance = new MemSlots('V', 4);
    MemSlots$VI_instance = new MemSlots('VI', 5);
    MemSlots$VII_instance = new MemSlots('VII', 6);
  }
  var MemSlots$I_instance;
  function MemSlots$I_getInstance() {
    MemSlots_initFields();
    return MemSlots$I_instance;
  }
  var MemSlots$II_instance;
  function MemSlots$II_getInstance() {
    MemSlots_initFields();
    return MemSlots$II_instance;
  }
  var MemSlots$III_instance;
  function MemSlots$III_getInstance() {
    MemSlots_initFields();
    return MemSlots$III_instance;
  }
  var MemSlots$IV_instance;
  function MemSlots$IV_getInstance() {
    MemSlots_initFields();
    return MemSlots$IV_instance;
  }
  var MemSlots$V_instance;
  function MemSlots$V_getInstance() {
    MemSlots_initFields();
    return MemSlots$V_instance;
  }
  var MemSlots$VI_instance;
  function MemSlots$VI_getInstance() {
    MemSlots_initFields();
    return MemSlots$VI_instance;
  }
  var MemSlots$VII_instance;
  function MemSlots$VII_getInstance() {
    MemSlots_initFields();
    return MemSlots$VII_instance;
  }
  MemSlots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemSlots',
    interfaces: [Enum]
  };
  function MemSlots$values() {
    return [MemSlots$I_getInstance(), MemSlots$II_getInstance(), MemSlots$III_getInstance(), MemSlots$IV_getInstance(), MemSlots$V_getInstance(), MemSlots$VI_getInstance(), MemSlots$VII_getInstance()];
  }
  MemSlots.values = MemSlots$values;
  function MemSlots$valueOf(name) {
    switch (name) {
      case 'I':
        return MemSlots$I_getInstance();
      case 'II':
        return MemSlots$II_getInstance();
      case 'III':
        return MemSlots$III_getInstance();
      case 'IV':
        return MemSlots$IV_getInstance();
      case 'V':
        return MemSlots$V_getInstance();
      case 'VI':
        return MemSlots$VI_getInstance();
      case 'VII':
        return MemSlots$VII_getInstance();
      default:throwISE('No enum constant MemSlots.' + name);
    }
  }
  MemSlots.valueOf_61zpoe$ = MemSlots$valueOf;
  function MemStorage() {
    this.used = Kotlin.booleanArrayOf(false, false, false, false, false, false, false);
    this.vals = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]);
    this.slotMap = mapOf([to(MemSlots$I_getInstance(), 0), to(MemSlots$II_getInstance(), 1), to(MemSlots$III_getInstance(), 2), to(MemSlots$IV_getInstance(), 3), to(MemSlots$V_getInstance(), 4), to(MemSlots$VI_getInstance(), 5), to(MemSlots$VII_getInstance(), 6)]);
    this.ids = mapOf([to(MemSlots$I_getInstance(), 'i'), to(MemSlots$II_getInstance(), 'ii'), to(MemSlots$III_getInstance(), 'iii'), to(MemSlots$IV_getInstance(), 'iv'), to(MemSlots$V_getInstance(), 'v'), to(MemSlots$VI_getInstance(), 'vi'), to(MemSlots$VII_getInstance(), 'vii')]);
  }
  MemStorage.prototype.storeVal_bjaw1n$ = function (slot, value) {
    var tmp$;
    this.toggleUsed_9waohs$(slot);
    this.vals[(tmp$ = this.slotMap.get_11rb$(slot)) != null ? tmp$ : 0] = value;
  };
  MemStorage.prototype.releaseVal_9waohs$ = function (slot) {
    var tmp$;
    this.toggleUsed_9waohs$(slot);
    return this.vals[(tmp$ = this.slotMap.get_11rb$(slot)) != null ? tmp$ : 0];
  };
  MemStorage.prototype.isUsed_9waohs$ = function (slot) {
    var tmp$;
    return this.used[(tmp$ = this.slotMap.get_11rb$(slot)) != null ? tmp$ : 0];
  };
  MemStorage.prototype.toggleUsed_9waohs$ = function (slot) {
    var tmp$, tmp$_0;
    this.used[(tmp$_0 = this.slotMap.get_11rb$(slot)) != null ? tmp$_0 : 0] = !this.used[(tmp$ = this.slotMap.get_11rb$(slot)) != null ? tmp$ : 0];
    this.color_9waohs$(slot);
  };
  MemStorage.prototype.color_9waohs$ = function (slot) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$_0 = (tmp$ = this.ids.get_11rb$(slot)) != null ? tmp$ : 'f';
    (tmp$_1 = document.getElementById(tmp$_0)) != null ? removeClass(tmp$_1, ['orange']) : null;
    var hue = this.used[(tmp$_2 = this.slotMap.get_11rb$(slot)) != null ? tmp$_2 : 0] ? 'orange' : 'green';
    tmp$_4 = (tmp$_3 = this.ids.get_11rb$(slot)) != null ? tmp$_3 : 'f';
    (tmp$_5 = document.getElementById(tmp$_4)) != null ? addClass(tmp$_5, [hue]) : null;
  };
  MemStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemStorage',
    interfaces: []
  };
  function Modes(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Modes_initFields() {
    Modes_initFields = function () {
    };
    Modes$NUMSTREAM_instance = new Modes('NUMSTREAM', 0);
    Modes$OP_instance = new Modes('OP', 1);
    Modes$ERASE_instance = new Modes('ERASE', 2);
  }
  var Modes$NUMSTREAM_instance;
  function Modes$NUMSTREAM_getInstance() {
    Modes_initFields();
    return Modes$NUMSTREAM_instance;
  }
  var Modes$OP_instance;
  function Modes$OP_getInstance() {
    Modes_initFields();
    return Modes$OP_instance;
  }
  var Modes$ERASE_instance;
  function Modes$ERASE_getInstance() {
    Modes_initFields();
    return Modes$ERASE_instance;
  }
  Modes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Modes',
    interfaces: [Enum]
  };
  function Modes$values() {
    return [Modes$NUMSTREAM_getInstance(), Modes$OP_getInstance(), Modes$ERASE_getInstance()];
  }
  Modes.values = Modes$values;
  function Modes$valueOf(name) {
    switch (name) {
      case 'NUMSTREAM':
        return Modes$NUMSTREAM_getInstance();
      case 'OP':
        return Modes$OP_getInstance();
      case 'ERASE':
        return Modes$ERASE_getInstance();
      default:throwISE('No enum constant Modes.' + name);
    }
  }
  Modes.valueOf_61zpoe$ = Modes$valueOf;
  function Ops(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Ops_initFields() {
    Ops_initFields = function () {
    };
    Ops$PLUS_instance = new Ops('PLUS', 0);
    Ops$SUB_instance = new Ops('SUB', 1);
    Ops$MULT_instance = new Ops('MULT', 2);
    Ops$DIV_instance = new Ops('DIV', 3);
    Ops$SIN_instance = new Ops('SIN', 4);
    Ops$COS_instance = new Ops('COS', 5);
    Ops$TAN_instance = new Ops('TAN', 6);
    Ops$ARCSIN_instance = new Ops('ARCSIN', 7);
    Ops$ARCCOS_instance = new Ops('ARCCOS', 8);
    Ops$ARCTAN_instance = new Ops('ARCTAN', 9);
    Ops$SQRT_instance = new Ops('SQRT', 10);
    Ops$EXP_instance = new Ops('EXP', 11);
    Ops$RECIP_instance = new Ops('RECIP', 12);
    Ops$DEC_instance = new Ops('DEC', 13);
    Ops$OPP_instance = new Ops('OPP', 14);
    Ops$EQUAL_instance = new Ops('EQUAL', 15);
  }
  var Ops$PLUS_instance;
  function Ops$PLUS_getInstance() {
    Ops_initFields();
    return Ops$PLUS_instance;
  }
  var Ops$SUB_instance;
  function Ops$SUB_getInstance() {
    Ops_initFields();
    return Ops$SUB_instance;
  }
  var Ops$MULT_instance;
  function Ops$MULT_getInstance() {
    Ops_initFields();
    return Ops$MULT_instance;
  }
  var Ops$DIV_instance;
  function Ops$DIV_getInstance() {
    Ops_initFields();
    return Ops$DIV_instance;
  }
  var Ops$SIN_instance;
  function Ops$SIN_getInstance() {
    Ops_initFields();
    return Ops$SIN_instance;
  }
  var Ops$COS_instance;
  function Ops$COS_getInstance() {
    Ops_initFields();
    return Ops$COS_instance;
  }
  var Ops$TAN_instance;
  function Ops$TAN_getInstance() {
    Ops_initFields();
    return Ops$TAN_instance;
  }
  var Ops$ARCSIN_instance;
  function Ops$ARCSIN_getInstance() {
    Ops_initFields();
    return Ops$ARCSIN_instance;
  }
  var Ops$ARCCOS_instance;
  function Ops$ARCCOS_getInstance() {
    Ops_initFields();
    return Ops$ARCCOS_instance;
  }
  var Ops$ARCTAN_instance;
  function Ops$ARCTAN_getInstance() {
    Ops_initFields();
    return Ops$ARCTAN_instance;
  }
  var Ops$SQRT_instance;
  function Ops$SQRT_getInstance() {
    Ops_initFields();
    return Ops$SQRT_instance;
  }
  var Ops$EXP_instance;
  function Ops$EXP_getInstance() {
    Ops_initFields();
    return Ops$EXP_instance;
  }
  var Ops$RECIP_instance;
  function Ops$RECIP_getInstance() {
    Ops_initFields();
    return Ops$RECIP_instance;
  }
  var Ops$DEC_instance;
  function Ops$DEC_getInstance() {
    Ops_initFields();
    return Ops$DEC_instance;
  }
  var Ops$OPP_instance;
  function Ops$OPP_getInstance() {
    Ops_initFields();
    return Ops$OPP_instance;
  }
  var Ops$EQUAL_instance;
  function Ops$EQUAL_getInstance() {
    Ops_initFields();
    return Ops$EQUAL_instance;
  }
  Ops.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ops',
    interfaces: [Enum]
  };
  function Ops$values() {
    return [Ops$PLUS_getInstance(), Ops$SUB_getInstance(), Ops$MULT_getInstance(), Ops$DIV_getInstance(), Ops$SIN_getInstance(), Ops$COS_getInstance(), Ops$TAN_getInstance(), Ops$ARCSIN_getInstance(), Ops$ARCCOS_getInstance(), Ops$ARCTAN_getInstance(), Ops$SQRT_getInstance(), Ops$EXP_getInstance(), Ops$RECIP_getInstance(), Ops$DEC_getInstance(), Ops$OPP_getInstance(), Ops$EQUAL_getInstance()];
  }
  Ops.values = Ops$values;
  function Ops$valueOf(name) {
    switch (name) {
      case 'PLUS':
        return Ops$PLUS_getInstance();
      case 'SUB':
        return Ops$SUB_getInstance();
      case 'MULT':
        return Ops$MULT_getInstance();
      case 'DIV':
        return Ops$DIV_getInstance();
      case 'SIN':
        return Ops$SIN_getInstance();
      case 'COS':
        return Ops$COS_getInstance();
      case 'TAN':
        return Ops$TAN_getInstance();
      case 'ARCSIN':
        return Ops$ARCSIN_getInstance();
      case 'ARCCOS':
        return Ops$ARCCOS_getInstance();
      case 'ARCTAN':
        return Ops$ARCTAN_getInstance();
      case 'SQRT':
        return Ops$SQRT_getInstance();
      case 'EXP':
        return Ops$EXP_getInstance();
      case 'RECIP':
        return Ops$RECIP_getInstance();
      case 'DEC':
        return Ops$DEC_getInstance();
      case 'OPP':
        return Ops$OPP_getInstance();
      case 'EQUAL':
        return Ops$EQUAL_getInstance();
      default:throwISE('No enum constant Ops.' + name);
    }
  }
  Ops.valueOf_61zpoe$ = Ops$valueOf;
  function OpTypes(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function OpTypes_initFields() {
    OpTypes_initFields = function () {
    };
    OpTypes$SINGLE_instance = new OpTypes('SINGLE', 0);
    OpTypes$DOUBLE_instance = new OpTypes('DOUBLE', 1);
  }
  var OpTypes$SINGLE_instance;
  function OpTypes$SINGLE_getInstance() {
    OpTypes_initFields();
    return OpTypes$SINGLE_instance;
  }
  var OpTypes$DOUBLE_instance;
  function OpTypes$DOUBLE_getInstance() {
    OpTypes_initFields();
    return OpTypes$DOUBLE_instance;
  }
  OpTypes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OpTypes',
    interfaces: [Enum]
  };
  function OpTypes$values() {
    return [OpTypes$SINGLE_getInstance(), OpTypes$DOUBLE_getInstance()];
  }
  OpTypes.values = OpTypes$values;
  function OpTypes$valueOf(name) {
    switch (name) {
      case 'SINGLE':
        return OpTypes$SINGLE_getInstance();
      case 'DOUBLE':
        return OpTypes$DOUBLE_getInstance();
      default:throwISE('No enum constant OpTypes.' + name);
    }
  }
  OpTypes.valueOf_61zpoe$ = OpTypes$valueOf;
  _.Calc = Calc;
  Object.defineProperty(ClearMethod, 'C', {
    get: ClearMethod$C_getInstance
  });
  Object.defineProperty(ClearMethod, 'CE', {
    get: ClearMethod$CE_getInstance
  });
  _.ClearMethod = ClearMethod;
  _.InputStream = InputStream;
  _.main_kand9s$ = main;
  Object.defineProperty(MemSlots, 'I', {
    get: MemSlots$I_getInstance
  });
  Object.defineProperty(MemSlots, 'II', {
    get: MemSlots$II_getInstance
  });
  Object.defineProperty(MemSlots, 'III', {
    get: MemSlots$III_getInstance
  });
  Object.defineProperty(MemSlots, 'IV', {
    get: MemSlots$IV_getInstance
  });
  Object.defineProperty(MemSlots, 'V', {
    get: MemSlots$V_getInstance
  });
  Object.defineProperty(MemSlots, 'VI', {
    get: MemSlots$VI_getInstance
  });
  Object.defineProperty(MemSlots, 'VII', {
    get: MemSlots$VII_getInstance
  });
  _.MemSlots = MemSlots;
  _.MemStorage = MemStorage;
  Object.defineProperty(Modes, 'NUMSTREAM', {
    get: Modes$NUMSTREAM_getInstance
  });
  Object.defineProperty(Modes, 'OP', {
    get: Modes$OP_getInstance
  });
  Object.defineProperty(Modes, 'ERASE', {
    get: Modes$ERASE_getInstance
  });
  _.Modes = Modes;
  Object.defineProperty(Ops, 'PLUS', {
    get: Ops$PLUS_getInstance
  });
  Object.defineProperty(Ops, 'SUB', {
    get: Ops$SUB_getInstance
  });
  Object.defineProperty(Ops, 'MULT', {
    get: Ops$MULT_getInstance
  });
  Object.defineProperty(Ops, 'DIV', {
    get: Ops$DIV_getInstance
  });
  Object.defineProperty(Ops, 'SIN', {
    get: Ops$SIN_getInstance
  });
  Object.defineProperty(Ops, 'COS', {
    get: Ops$COS_getInstance
  });
  Object.defineProperty(Ops, 'TAN', {
    get: Ops$TAN_getInstance
  });
  Object.defineProperty(Ops, 'ARCSIN', {
    get: Ops$ARCSIN_getInstance
  });
  Object.defineProperty(Ops, 'ARCCOS', {
    get: Ops$ARCCOS_getInstance
  });
  Object.defineProperty(Ops, 'ARCTAN', {
    get: Ops$ARCTAN_getInstance
  });
  Object.defineProperty(Ops, 'SQRT', {
    get: Ops$SQRT_getInstance
  });
  Object.defineProperty(Ops, 'EXP', {
    get: Ops$EXP_getInstance
  });
  Object.defineProperty(Ops, 'RECIP', {
    get: Ops$RECIP_getInstance
  });
  Object.defineProperty(Ops, 'DEC', {
    get: Ops$DEC_getInstance
  });
  Object.defineProperty(Ops, 'OPP', {
    get: Ops$OPP_getInstance
  });
  Object.defineProperty(Ops, 'EQUAL', {
    get: Ops$EQUAL_getInstance
  });
  _.Ops = Ops;
  Object.defineProperty(OpTypes, 'SINGLE', {
    get: OpTypes$SINGLE_getInstance
  });
  Object.defineProperty(OpTypes, 'DOUBLE', {
    get: OpTypes$DOUBLE_getInstance
  });
  _.OpTypes = OpTypes;
  main([]);
  Kotlin.defineModule('KCalc 2.0', _);
  return _;
}(typeof this['KCalc 2.0'] === 'undefined' ? {} : this['KCalc 2.0'], kotlin);
