/*
formBuilder - https://formbuilder.online/
Version: 1.24.5
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":16}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":17}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":18}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":19}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":20}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":21}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":22}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":23}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":24}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _promise = require("../core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};
},{"../core-js/promise":7}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};
},{}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _isIterable2 = require("../core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = require("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
},{"../core-js/get-iterator":2,"../core-js/is-iterable":3}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"../core-js/array/from":1}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":8,"../core-js/symbol/iterator":9}],15:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":121}],16:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":39,"../../modules/es6.array.from":106,"../../modules/es6.string.iterator":113}],17:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":104,"../modules/es6.string.iterator":113,"../modules/web.dom.iterable":118}],18:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":105,"../modules/es6.string.iterator":113,"../modules/web.dom.iterable":118}],19:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/_core').Map;
},{"../modules/_core":39,"../modules/es6.map":108,"../modules/es6.object.to-string":111,"../modules/es6.string.iterator":113,"../modules/es7.map.to-json":115,"../modules/web.dom.iterable":118}],20:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":39,"../../modules/es6.object.assign":109}],21:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":39,"../../modules/es6.object.keys":110}],22:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":39,"../modules/es6.object.to-string":111,"../modules/es6.promise":112,"../modules/es6.string.iterator":113,"../modules/web.dom.iterable":118}],23:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":39,"../../modules/es6.object.to-string":111,"../../modules/es6.symbol":114,"../../modules/es7.symbol.async-iterator":116,"../../modules/es7.symbol.observable":117}],24:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":101,"../../modules/es6.string.iterator":113,"../../modules/web.dom.iterable":118}],25:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],26:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],27:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],28:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":59}],29:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":49}],30:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":93,"./_to-iobject":95,"./_to-length":96}],31:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = require('./_ctx')
  , IObject  = require('./_iobject')
  , toObject = require('./_to-object')
  , toLength = require('./_to-length')
  , asc      = require('./_array-species-create');
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./_array-species-create":33,"./_ctx":41,"./_iobject":56,"./_to-length":96,"./_to-object":97}],32:[function(require,module,exports){
var isObject = require('./_is-object')
  , isArray  = require('./_is-array')
  , SPECIES  = require('./_wks')('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};
},{"./_is-array":58,"./_is-object":59,"./_wks":102}],33:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":32}],34:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":35,"./_wks":102}],35:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],36:[function(require,module,exports){
'use strict';
var dP          = require('./_object-dp').f
  , create      = require('./_object-create')
  , redefineAll = require('./_redefine-all')
  , ctx         = require('./_ctx')
  , anInstance  = require('./_an-instance')
  , defined     = require('./_defined')
  , forOf       = require('./_for-of')
  , $iterDefine = require('./_iter-define')
  , step        = require('./_iter-step')
  , setSpecies  = require('./_set-species')
  , DESCRIPTORS = require('./_descriptors')
  , fastKey     = require('./_meta').fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./_an-instance":27,"./_ctx":41,"./_defined":42,"./_descriptors":43,"./_for-of":49,"./_iter-define":62,"./_iter-step":64,"./_meta":68,"./_object-create":71,"./_object-dp":72,"./_redefine-all":84,"./_set-species":86}],37:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":29,"./_classof":34}],38:[function(require,module,exports){
'use strict';
var global         = require('./_global')
  , $export        = require('./_export')
  , meta           = require('./_meta')
  , fails          = require('./_fails')
  , hide           = require('./_hide')
  , redefineAll    = require('./_redefine-all')
  , forOf          = require('./_for-of')
  , anInstance     = require('./_an-instance')
  , isObject       = require('./_is-object')
  , setToStringTag = require('./_set-to-string-tag')
  , dP             = require('./_object-dp').f
  , each           = require('./_array-methods')(0)
  , DESCRIPTORS    = require('./_descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./_an-instance":27,"./_array-methods":31,"./_descriptors":43,"./_export":47,"./_fails":48,"./_for-of":49,"./_global":50,"./_hide":52,"./_is-object":59,"./_meta":68,"./_object-dp":72,"./_redefine-all":84,"./_set-to-string-tag":87}],39:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],40:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":72,"./_property-desc":83}],41:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":25}],42:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],43:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":48}],44:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":50,"./_is-object":59}],45:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],46:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":77,"./_object-keys":80,"./_object-pie":81}],47:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":39,"./_ctx":41,"./_global":50,"./_hide":52}],48:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],49:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method')
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"./_an-object":28,"./_ctx":41,"./_is-array-iter":57,"./_iter-call":60,"./_to-length":96,"./core.get-iterator-method":103}],50:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],51:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],52:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":43,"./_object-dp":72,"./_property-desc":83}],53:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":50}],54:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":43,"./_dom-create":44,"./_fails":48}],55:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],56:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":35}],57:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":65,"./_wks":102}],58:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":35}],59:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],60:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":28}],61:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":52,"./_object-create":71,"./_property-desc":83,"./_set-to-string-tag":87,"./_wks":102}],62:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":47,"./_has":51,"./_hide":52,"./_iter-create":61,"./_iterators":65,"./_library":67,"./_object-gpo":78,"./_redefine":85,"./_set-to-string-tag":87,"./_wks":102}],63:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":102}],64:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],65:[function(require,module,exports){
module.exports = {};
},{}],66:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":80,"./_to-iobject":95}],67:[function(require,module,exports){
module.exports = true;
},{}],68:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":48,"./_has":51,"./_is-object":59,"./_object-dp":72,"./_uid":99}],69:[function(require,module,exports){
var global    = require('./_global')
  , macrotask = require('./_task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./_cof')(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};
},{"./_cof":35,"./_global":50,"./_task":92}],70:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":48,"./_iobject":56,"./_object-gops":77,"./_object-keys":80,"./_object-pie":81,"./_to-object":97}],71:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":28,"./_dom-create":44,"./_enum-bug-keys":45,"./_html":53,"./_object-dps":73,"./_shared-key":88}],72:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":28,"./_descriptors":43,"./_ie8-dom-define":54,"./_to-primitive":98}],73:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":28,"./_descriptors":43,"./_object-dp":72,"./_object-keys":80}],74:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":43,"./_has":51,"./_ie8-dom-define":54,"./_object-pie":81,"./_property-desc":83,"./_to-iobject":95,"./_to-primitive":98}],75:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":76,"./_to-iobject":95}],76:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":45,"./_object-keys-internal":79}],77:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],78:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":51,"./_shared-key":88,"./_to-object":97}],79:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":30,"./_has":51,"./_shared-key":88,"./_to-iobject":95}],80:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":45,"./_object-keys-internal":79}],81:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],82:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":39,"./_export":47,"./_fails":48}],83:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],84:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":52}],85:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":52}],86:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , core        = require('./_core')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":39,"./_descriptors":43,"./_global":50,"./_object-dp":72,"./_wks":102}],87:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":51,"./_object-dp":72,"./_wks":102}],88:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":89,"./_uid":99}],89:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":50}],90:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":25,"./_an-object":28,"./_wks":102}],91:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":42,"./_to-integer":94}],92:[function(require,module,exports){
var ctx                = require('./_ctx')
  , invoke             = require('./_invoke')
  , html               = require('./_html')
  , cel                = require('./_dom-create')
  , global             = require('./_global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./_cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./_cof":35,"./_ctx":41,"./_dom-create":44,"./_global":50,"./_html":53,"./_invoke":55}],93:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":94}],94:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],95:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":42,"./_iobject":56}],96:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":94}],97:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":42}],98:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":59}],99:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],100:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":39,"./_global":50,"./_library":67,"./_object-dp":72,"./_wks-ext":101}],101:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":102}],102:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":50,"./_shared":89,"./_uid":99}],103:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":34,"./_core":39,"./_iterators":65,"./_wks":102}],104:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":28,"./_core":39,"./core.get-iterator-method":103}],105:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":34,"./_core":39,"./_iterators":65,"./_wks":102}],106:[function(require,module,exports){
'use strict';
var ctx            = require('./_ctx')
  , $export        = require('./_export')
  , toObject       = require('./_to-object')
  , call           = require('./_iter-call')
  , isArrayIter    = require('./_is-array-iter')
  , toLength       = require('./_to-length')
  , createProperty = require('./_create-property')
  , getIterFn      = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":40,"./_ctx":41,"./_export":47,"./_is-array-iter":57,"./_iter-call":60,"./_iter-detect":63,"./_to-length":96,"./_to-object":97,"./core.get-iterator-method":103}],107:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":26,"./_iter-define":62,"./_iter-step":64,"./_iterators":65,"./_to-iobject":95}],108:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.1 Map Objects
module.exports = require('./_collection')('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./_collection":38,"./_collection-strong":36}],109:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":47,"./_object-assign":70}],110:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":80,"./_object-sap":82,"./_to-object":97}],111:[function(require,module,exports){

},{}],112:[function(require,module,exports){
'use strict';
var LIBRARY            = require('./_library')
  , global             = require('./_global')
  , ctx                = require('./_ctx')
  , classof            = require('./_classof')
  , $export            = require('./_export')
  , isObject           = require('./_is-object')
  , aFunction          = require('./_a-function')
  , anInstance         = require('./_an-instance')
  , forOf              = require('./_for-of')
  , speciesConstructor = require('./_species-constructor')
  , task               = require('./_task').set
  , microtask          = require('./_microtask')()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./_a-function":25,"./_an-instance":27,"./_classof":34,"./_core":39,"./_ctx":41,"./_export":47,"./_for-of":49,"./_global":50,"./_is-object":59,"./_iter-detect":63,"./_library":67,"./_microtask":69,"./_redefine-all":84,"./_set-species":86,"./_set-to-string-tag":87,"./_species-constructor":90,"./_task":92,"./_wks":102}],113:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":62,"./_string-at":91}],114:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":28,"./_descriptors":43,"./_enum-keys":46,"./_export":47,"./_fails":48,"./_global":50,"./_has":51,"./_hide":52,"./_is-array":58,"./_keyof":66,"./_library":67,"./_meta":68,"./_object-create":71,"./_object-dp":72,"./_object-gopd":74,"./_object-gopn":76,"./_object-gopn-ext":75,"./_object-gops":77,"./_object-keys":80,"./_object-pie":81,"./_property-desc":83,"./_redefine":85,"./_set-to-string-tag":87,"./_shared":89,"./_to-iobject":95,"./_to-primitive":98,"./_uid":99,"./_wks":102,"./_wks-define":100,"./_wks-ext":101}],115:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":37,"./_export":47}],116:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":100}],117:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":100}],118:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":50,"./_hide":52,"./_iterators":65,"./_wks":102,"./es6.array.iterator":107}],119:[function(require,module,exports){
/*!
 * mi18n - https://github.com/Draggable/mi18n
 * Version: 0.3.2
 * Author: Kevin Chappell <kevin.b.chappell@gmail.com> (http://kevin-chappell.com)
 */
module.exports=function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="dist/",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(45),u=r(o),i=e(39),f=r(i),c=e(43),a=r(c),s=e(44),l=r(s),p=function(){function t(){(0,a["default"])(this,t);var n={location:"assets/lang/",langs:["en-US","es-ES"],locale:"en-US",preloaded:{}},e=this;e.init=function(t){return e.config=(0,f["default"])({},n,t),e.langs=(0,f["default"])({},e.config.preloaded),e.locale=e.config.locale||e.config.langs[0],e.setCurrent(e.locale)}}return(0,l["default"])(t,[{key:"getValue",value:function(t){return this.current&&this.current[t]||t}},{key:"makeSafe",value:function(t){var n={"{":"\\{","}":"\\}","|":"\\|"};return t=t.replace(/\{|\}|\|/g,function(t){return n[t]}),new RegExp(t,"g")}},{key:"put",value:function(t,n){return this.current[t]=n}},{key:"get",value:function(t,n){var e=this,r=this.getValue(t),o=r.match(/\{[^\}]+?\}/g),i=void 0;if(n&&o)if("object"===("undefined"==typeof n?"undefined":(0,u["default"])(n)))for(var f=0;f<o.length;f++)i=o[f].substring(1,o[f].length-1),r=r.replace(e.makeSafe(o[f]),n[i]||"");else r=r.replace(/\{[^\}]+?\}/g,n);return r}},{key:"fromFile",value:function(t){for(var n,e=t.split("\n"),r={},o=0;o<e.length;o++)n=e[o].match(/^(.+?) *?= *?([^\n]+)/),n&&(r[n[1]]=n[2].replace(/^\s+|\s+$/,""));return r}},{key:"processFile",value:function(t){var n=this,e=t.replace(/\n\n/g,"\n");return n.langs[n.locale]=n.fromFile(e)}},{key:"loadLang",value:function(t){var n=this;return new window.Promise(function(e,r){n.langs[n.locale]?e(n.langs[n.locale]):!function(){var o=new XMLHttpRequest;o.open("GET",n.config.location+t+".lang",!0),o.onload=function(){this.status<=304?(n.processFile(o.responseText),e(o.response)):r({status:this.status,statusText:o.statusText})},o.onerror=function(){r({status:this.status,statusText:o.statusText})},o.send()}()})}},{key:"setCurrent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US",n=this.loadLang(t);return this.locale=t,this.current=this.langs[t],window.sessionStorage.setItem("locale",t),n}},{key:"getLangs",get:function(){return this.config.langs}}]),t}();n["default"]=new p},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(11),o=e(31),u=e(26),i=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(f){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(32),o=e(17);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(4),o=e(15);t.exports=e(2)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(24)("wks"),o=e(16),u=e(1).Symbol,i="function"==typeof u,f=t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))};f.store=r},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n,e){var r=e(36),o=e(18);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(13);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(1),o=e(8),u=e(53),i=e(6),f="prototype",c=function(t,n,e){var a,s,l,p=t&c.F,v=t&c.G,y=t&c.S,d=t&c.P,h=t&c.B,g=t&c.W,b=v?o:o[n]||(o[n]={}),m=b[f],x=v?r:y?r[n]:(r[n]||{})[f];v&&(e=n);for(a in e)s=!p&&x&&void 0!==x[a],s&&a in b||(l=s?x[a]:e[a],b[a]=v&&"function"!=typeof x[a]?e[a]:h&&s?u(l,r):g&&x[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[f]=t[f],n}(l):d&&"function"==typeof l?u(Function.call,l):l,d&&((b.virtual||(b.virtual={}))[a]=l,t&c.R&&m&&!m[a]&&i(m,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(4).f,o=e(3),u=e(7)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,u)&&r(t,u,{configurable:!0,value:n})}},function(t,n,e){var r=e(24)("keys"),o=e(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(1),o="__core-js_shared__",u=r[o]||(r[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(13);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(1),o=e(8),u=e(20),i=e(28),f=e(4).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=u?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:i.f(t)})}},function(t,n,e){n.f=e(7)},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(13),o=e(1).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n,e){t.exports=!e(2)&&!e(9)(function(){return 7!=Object.defineProperty(e(30)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(29);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){"use strict";var r=e(20),o=e(12),u=e(37),i=e(6),f=e(3),c=e(19),a=e(57),s=e(22),l=e(65),p=e(7)("iterator"),v=!([].keys&&"next"in[].keys()),y="@@iterator",d="keys",h="values",g=function(){return this};t.exports=function(t,n,e,b,m,x,O){a(e,n,b);var w,S,_,j=function(t){if(!v&&t in M)return M[t];switch(t){case d:return function(){return new e(this,t)};case h:return function(){return new e(this,t)}}return function(){return new e(this,t)}},E=n+" Iterator",P=m==h,k=!1,M=t.prototype,T=M[p]||M[y]||m&&M[m],F=T||j(m),A=m?P?j("entries"):F:void 0,I="Array"==n?M.entries||T:T;if(I&&(_=l(I.call(new t)),_!==Object.prototype&&(s(_,E,!0),r||f(_,p)||i(_,p,g))),P&&T&&T.name!==h&&(k=!0,F=function(){return T.call(this)}),r&&!O||!v&&!k&&M[p]||i(M,p,F),c[n]=F,c[E]=g,m)if(w={values:P?F:j(h),keys:x?F:j(d),entries:A},O)for(S in w)S in M||u(M,S,w[S]);else o(o.P+o.F*(v||k),n,w);return w}},function(t,n,e){var r=e(11),o=e(62),u=e(18),i=e(23)("IE_PROTO"),f=function(){},c="prototype",a=function(){var t,n=e(30)("iframe"),r=u.length,o="<",i=">";for(n.style.display="none",e(55).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+i+"document.F=Object"+o+"/script"+i),t.close(),a=t.F;r--;)delete a[c][u[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(f[c]=r(t),e=new f,f[c]=null,e[i]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(36),o=e(18).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(3),o=e(5),u=e(52)(!1),i=e(23)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,a=[];for(e in f)e!=i&&r(f,e)&&a.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~u(a,e)||a.push(e));return a}},function(t,n,e){t.exports=e(6)},function(t,n,e){var r=e(17);t.exports=function(t){return Object(r(t))}},function(t,n,e){t.exports={"default":e(46),__esModule:!0}},function(t,n,e){t.exports={"default":e(47),__esModule:!0}},function(t,n,e){t.exports={"default":e(48),__esModule:!0}},function(t,n,e){t.exports={"default":e(49),__esModule:!0}},function(t,n){"use strict";n.__esModule=!0,n["default"]=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(40),u=r(o);n["default"]=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u["default"])(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(42),u=r(o),i=e(41),f=r(i),c="function"==typeof f["default"]&&"symbol"==typeof u["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":typeof t};n["default"]="function"==typeof f["default"]&&"symbol"===c(u["default"])?function(t){return"undefined"==typeof t?"undefined":c(t)}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":"undefined"==typeof t?"undefined":c(t)}},function(t,n,e){e(70),t.exports=e(8).Object.assign},function(t,n,e){e(71);var r=e(8).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){e(74),e(72),e(75),e(76),t.exports=e(8).Symbol},function(t,n,e){e(73),e(77),t.exports=e(28).f("iterator")},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(5),o=e(68),u=e(67);t.exports=function(t){return function(n,e,i){var f,c=r(n),a=o(c.length),s=u(i,a);if(t&&e!=e){for(;a>s;)if(f=c[s++],f!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(50);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(10),o=e(21),u=e(14);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var i,f=e(t),c=u.f,a=0;f.length>a;)c.call(t,i=f[a++])&&n.push(i);return n}},function(t,n,e){t.exports=e(1).document&&document.documentElement},function(t,n,e){var r=e(29);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(34),o=e(15),u=e(22),i={};e(6)(i,e(7)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(i,{next:o(1,e)}),u(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(10),o=e(5);t.exports=function(t,n){for(var e,u=o(t),i=r(u),f=i.length,c=0;f>c;)if(u[e=i[c++]]===n)return e}},function(t,n,e){var r=e(16)("meta"),o=e(13),u=e(3),i=e(4).f,f=0,c=Object.isExtensible||function(){return!0},a=!e(9)(function(){return c(Object.preventExtensions({}))}),s=function(t){i(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,r)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[r].i},p=function(t,n){if(!u(t,r)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[r].w},v=function(t){return a&&y.NEED&&c(t)&&!u(t,r)&&s(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:v}},function(t,n,e){"use strict";var r=e(10),o=e(21),u=e(14),i=e(38),f=e(32),c=Object.assign;t.exports=!c||e(9)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r})?function(t,n){for(var e=i(t),c=arguments.length,a=1,s=o.f,l=u.f;c>a;)for(var p,v=f(arguments[a++]),y=s?r(v).concat(s(v)):r(v),d=y.length,h=0;d>h;)l.call(v,p=y[h++])&&(e[p]=v[p]);return e}:c},function(t,n,e){var r=e(4),o=e(11),u=e(10);t.exports=e(2)?Object.defineProperties:function(t,n){o(t);for(var e,i=u(n),f=i.length,c=0;f>c;)r.f(t,e=i[c++],n[e]);return t}},function(t,n,e){var r=e(14),o=e(15),u=e(5),i=e(26),f=e(3),c=e(31),a=Object.getOwnPropertyDescriptor;n.f=e(2)?a:function(t,n){if(t=u(t),n=i(n,!0),c)try{return a(t,n)}catch(e){}if(f(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(5),o=e(35).f,u={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(n){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==u.call(t)?f(t):o(r(t))}},function(t,n,e){var r=e(3),o=e(38),u=e(23)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,n,e){var r=e(25),o=e(17);t.exports=function(t){return function(n,e){var u,i,f=String(o(n)),c=r(e),a=f.length;return c<0||c>=a?t?"":void 0:(u=f.charCodeAt(c),u<55296||u>56319||c+1===a||(i=f.charCodeAt(c+1))<56320||i>57343?t?f.charAt(c):u:t?f.slice(c,c+2):(u-55296<<10)+(i-56320)+65536)}}},function(t,n,e){var r=e(25),o=Math.max,u=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):u(t,n)}},function(t,n,e){var r=e(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){"use strict";var r=e(51),o=e(58),u=e(19),i=e(5);t.exports=e(33)(Array,"Array",function(t,n){this._t=i(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),u.Arguments=u.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(12);r(r.S+r.F,"Object",{assign:e(61)})},function(t,n,e){var r=e(12);r(r.S+r.F*!e(2),"Object",{defineProperty:e(4).f})},function(t,n){},function(t,n,e){"use strict";var r=e(66)(!0);e(33)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(1),o=e(3),u=e(2),i=e(12),f=e(37),c=e(60).KEY,a=e(9),s=e(24),l=e(22),p=e(16),v=e(7),y=e(28),d=e(27),h=e(59),g=e(54),b=e(56),m=e(11),x=e(5),O=e(26),w=e(15),S=e(34),_=e(64),j=e(63),E=e(4),P=e(10),k=j.f,M=E.f,T=_.f,F=r.Symbol,A=r.JSON,I=A&&A.stringify,N="prototype",C=v("_hidden"),L=v("toPrimitive"),R={}.propertyIsEnumerable,W=s("symbol-registry"),D=s("symbols"),G=s("op-symbols"),J=Object[N],U="function"==typeof F,K=r.QObject,q=!K||!K[N]||!K[N].findChild,z=u&&a(function(){return 7!=S(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=k(J,n);r&&delete J[n],M(t,n,e),r&&t!==J&&M(J,n,r)}:M,B=function(t){var n=D[t]=S(F[N]);return n._k=t,n},V=U&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},Y=function(t,n,e){return t===J&&Y(G,n,e),m(t),n=O(n,!0),m(e),o(D,n)?(e.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),e=S(e,{enumerable:w(0,!1)})):(o(t,C)||M(t,C,w(1,{})),t[C][n]=!0),z(t,n,e)):M(t,n,e)},H=function(t,n){m(t);for(var e,r=g(n=x(n)),o=0,u=r.length;u>o;)Y(t,e=r[o++],n[e]);return t},Q=function(t,n){return void 0===n?S(t):H(S(t),n)},X=function(t){var n=R.call(this,t=O(t,!0));return!(this===J&&o(D,t)&&!o(G,t))&&(!(n||!o(this,t)||!o(D,t)||o(this,C)&&this[C][t])||n)},$=function(t,n){if(t=x(t),n=O(n,!0),t!==J||!o(D,n)||o(G,n)){var e=k(t,n);return!e||!o(D,n)||o(t,C)&&t[C][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=T(x(t)),r=[],u=0;e.length>u;)o(D,n=e[u++])||n==C||n==c||r.push(n);return r},tt=function(t){for(var n,e=t===J,r=T(e?G:x(t)),u=[],i=0;r.length>i;)!o(D,n=r[i++])||e&&!o(J,n)||u.push(D[n]);return u};U||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===J&&n.call(G,e),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),z(this,t,w(1,e))};return u&&q&&z(J,t,{configurable:!0,set:n}),B(t)},f(F[N],"toString",function(){return this._k}),j.f=$,E.f=Y,e(35).f=_.f=Z,e(14).f=X,e(21).f=tt,u&&!e(20)&&f(J,"propertyIsEnumerable",X,!0),y.f=function(t){return B(v(t))}),i(i.G+i.W+i.F*!U,{Symbol:F});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)v(nt[et++]);for(var nt=P(v.store),et=0;nt.length>et;)d(nt[et++]);i(i.S+i.F*!U,"Symbol",{"for":function(t){return o(W,t+="")?W[t]:W[t]=F(t)},keyFor:function(t){if(V(t))return h(W,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){q=!0},useSimple:function(){q=!1}}),i(i.S+i.F*!U,"Object",{create:Q,defineProperty:Y,defineProperties:H,getOwnPropertyDescriptor:$,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),A&&i(i.S+i.F*(!U||a(function(){var t=F();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!V(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&b(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!V(n))return n}),r[1]=n,I.apply(A,r)}}}),F[N][L]||e(6)(F[N],L,F[N].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){e(27)("asyncIterator")},function(t,n,e){e(27)("observable")},function(t,n,e){e(69);for(var r=e(1),o=e(6),u=e(19),i=e(7)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[i]&&o(l,i,a),u[a]=u.Array}}]);
},{}],120:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],121:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./runtime":122}],122:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":120}],123:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dom = {};

dom.optionFields = ['select', 'checkbox-group', 'radio-group', 'autocomplete'];
dom.optionFieldsRegEx = new RegExp('(' + dom.optionFields.join('|') + ')');

/**
   * Util to remove contents of DOM Object
   * @param  {Object} element
   * @return {Object}         element with its children removed
   */
dom.empty = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};

/**
 * Hide or show an Array or HTMLCollection of elements
 * @param  {Array}   elems
 * @param  {String}  term  match textContent to this term
 * @param  {Boolean} show  or hide elements
 * @return {Array}         filtered elements
 */
dom.filter = function (elems, term) {
  var show = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var filteredElems = [];
  var toggle = ['none', 'block'];

  if (show) {
    toggle = toggle.reverse();
  }

  for (var i = elems.length - 1; i >= 0; i--) {
    var txt = elems[i].textContent.toLowerCase();
    if (txt.indexOf(term.toLowerCase()) !== -1) {
      elems[i].style.display = toggle[0];
      filteredElems.push(elems[i]);
    } else {
      elems[i].style.display = toggle[1];
    }
  }

  return filteredElems;
};

exports.default = dom;

},{}],124:[function(require,module,exports){
'use strict';

/**
 * Form Builder events
 * @return {Object} various events to be trigger
 */
// function fbEvents(){
var events = {};

events.loaded = new Event('loaded');
events.viewData = new Event('viewData');
events.userDeclined = new Event('userDeclined');
events.modalClosed = new Event('modalClosed');
events.modalOpened = new Event('modalOpened');
events.formSaved = new Event('formSaved');
events.fieldAdded = new Event('fieldAdded');
events.fieldRemoved = new Event('fieldRemoved');
events.fieldRendered = new Event('fieldRendered');

//   return events;
// }

module.exports = events;

},{}],125:[function(require,module,exports){
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./kc-toggle.js');
require('./polyfills.js');
// const extend = require('deep-extend');

(function ($) {
  var FormBuilder = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(options, element) {
      var _this = this;

      var formBuilder, utils, m, defaults, frmbID, _$$extend, i18n, opts, mi18n, _helpers, subtypes, $sortableFields, lastID, boxID, frmbFields, cbUl, $cbUL, processControl, $formWrap, $stageWrap, cbWrap, buttons, formActions, saveAndUpdate, nonEditableFields, prepFieldVars, loadFields, nameAttr, fieldOptions, advFields, processTypeUserAttrs, inputUserAttrs, selectUserAttrs, boolAttribute, btnStyles, numberAttribute, selectAttribute, textAttribute, requiredField, appendNewField, selectFieldOptions, cloneItem;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              selectUserAttrs = function selectUserAttrs(name, options) {
                var optis = (0, _keys2.default)(options.options).map(function (val) {
                  var attrs = { value: val };
                  if (val === options.value) {
                    attrs.selected = null;
                  }
                  return '<option ' + utils.attrString(attrs) + '>' + options.options[val] + '</option>';
                });
                var selectAttrs = {
                  id: name + '-' + lastID,
                  title: options.description || options.label || name.toUpperCase(),
                  name: name,
                  className: 'fld-' + name + ' form-control'
                };
                var label = '<label for="' + selectAttrs.id + '">' + i18n[name] + '</label>';

                (0, _keys2.default)(options).filter(function (prop) {
                  return !utils.inArray(prop, ['value', 'options', 'label']);
                }).forEach(function (attr) {
                  selectAttrs[attr] = options[attr];
                });

                var select = '<select ' + utils.attrString(selectAttrs) + '>' + optis.join('') + '</select>';
                var inputWrap = '<div class="input-wrap">' + select + '</div>';
                return '<div class="form-group ' + name + '-wrap">' + label + inputWrap + '</div>';
              };

              inputUserAttrs = function inputUserAttrs(name, attrs) {
                var textAttrs = {
                  id: name + '-' + lastID,
                  title: attrs.description || attrs.label || name.toUpperCase(),
                  name: name,
                  type: attrs.type || 'text',
                  className: ['fld-' + name]
                };
                var label = '<label for="' + textAttrs.id + '">' + i18n[name] + '</label>';

                if (!utils.inArray(textAttrs.type, ['checkbox', 'checkbox-group', 'radio-group'])) {
                  textAttrs.className.push('form-control');
                }

                textAttrs = (0, _assign2.default)({}, attrs, textAttrs);
                var textInput = '<input ' + utils.attrString(textAttrs) + '>';
                var inputWrap = '<div class="input-wrap">' + textInput + '</div>';
                return '<div class="form-group ' + name + '-wrap">' + label + inputWrap + '</div>';
              };

              processTypeUserAttrs = function processTypeUserAttrs(typeUserAttr, values) {
                var advField = [];

                for (var attribute in typeUserAttr) {
                  if (typeUserAttr.hasOwnProperty(attribute)) {
                    var orig = i18n[attribute];
                    var origValue = typeUserAttr[attribute].value;
                    typeUserAttr[attribute].value = values[attribute] || typeUserAttr[attribute].value || '';

                    if (typeUserAttr[attribute].label) {
                      i18n[attribute] = typeUserAttr[attribute].label;
                    }

                    if (typeUserAttr[attribute].options) {
                      advField.push(selectUserAttrs(attribute, typeUserAttr[attribute]));
                    } else {
                      advField.push(inputUserAttrs(attribute, typeUserAttr[attribute]));
                    }

                    i18n[attribute] = orig;
                    typeUserAttr[attribute].value = origValue;
                  }
                }

                return advField.join('');
              };

              formBuilder = this;
              utils = require('./utils.js');
              m = utils.markup;

              formBuilder.events = require('./events.js');
              formBuilder.utils = utils;
              formBuilder.mi18n = require('mi18n').default;

              defaults = {
                controlPosition: 'right',
                controlOrder: ['autocomplete', 'button', 'checkbox', 'checkbox-group', 'date', 'file', 'header', 'hidden', 'paragraph', 'number', 'radio-group', 'select', 'text', 'textarea'],
                dataType: 'json',
                // Array of fields to disable
                disableFields: [],
                editOnAdd: false,
                // Uneditable fields or other content you would like to appear
                // before and after regular fields:
                append: false,
                prepend: false,
                // array of objects with fields values
                // ex:
                // defaultFields: [{
                //   label: 'First Name',
                //   name: 'first-name',
                //   required: 'true',
                //   description: 'Your first name',
                //   type: 'text'
                // }, {
                //   label: 'Phone',
                //   name: 'phone',
                //   description: 'How can we reach you?',
                //   type: 'text'
                // }],
                defaultFields: [],
                inputSets: [],
                fieldRemoveWarn: false,
                roles: {
                  1: 'Administrator'
                },
                notify: {
                  error: function error(message) {
                    return console.error(message);
                  },
                  success: function success(message) {
                    return console.log(message);
                  },
                  warning: function warning(message) {
                    return console.warn(message);
                  }
                },
                onSave: utils.noop,
                onClearAll: utils.noop,
                actionButtons: [{
                  label: 'Clear',
                  className: 'clear-all btn btn-danger',
                  events: {
                    click: function click(e) {
                      var fields = $('li.form-field', formBuilder.stage);
                      var buttonPosition = e.target.getBoundingClientRect();
                      var bodyRect = document.body.getBoundingClientRect();
                      var coords = {
                        pageX: buttonPosition.left + buttonPosition.width / 2,
                        pageY: buttonPosition.top - bodyRect.top - 12
                      };

                      if (fields.length) {
                        _helpers.confirm(i18n.clearAllMessage, function () {
                          _helpers.removeAllfields();
                          opts.notify.success(i18n.allFieldsRemoved);
                          opts.onClearAll();
                        }, coords);
                      } else {
                        _helpers.dialog(i18n.noFieldsToClear, coords);
                      }
                    }
                  }
                }, {
                  label: 'Data',
                  type: 'button',
                  events: {
                    click: function click() {
                      return _helpers.showData();
                    }
                  }
                }, {
                  label: 'Save',
                  type: 'button',
                  className: 'btn btn-primary save-template',
                  events: {
                    click: function click() {
                      return opts.onSave(_helpers.save());
                    }
                  }
                }],
                sortableControls: false,
                stickyControls: {
                  enable: true,
                  offset: {
                    top: 5,
                    bottom: 'auto',
                    right: 'auto'
                  }
                },
                showActionButtons: true,
                typeUserAttrs: {},
                typeUserEvents: {},
                prefix: 'form-builder-'
              };


              defaults.i18n = {
                langs: ['en-US'],
                preloaded: {
                  'en-US': {
                    addOption: 'Add Option +',
                    allFieldsRemoved: 'All fields were removed.',
                    allowMultipleFiles: 'Allow users to upload multiple files',
                    autocomplete: 'Autocomplete',
                    button: 'Button',
                    cannotBeEmpty: 'This field cannot be empty',
                    checkboxGroup: 'Checkbox Group',
                    checkbox: 'Checkbox',
                    checkboxes: 'Checkboxes',
                    className: 'Class',
                    clearAllMessage: 'Are you sure you want to clear all fields?',
                    clearAll: 'Clear',
                    close: 'Close',
                    content: 'Content',
                    copy: 'Copy To Clipboard',
                    copyButton: '&#43;',
                    copyButtonTooltip: 'Copy',
                    dateField: 'Date Field',
                    description: 'Help Text',
                    descriptionField: 'Description',
                    devMode: 'Developer Mode',
                    editNames: 'Edit Names',
                    editorTitle: 'Form Elements',
                    editXML: 'Edit XML',
                    enableOther: 'Enable &quot;Other&quot;',
                    enableOtherMsg: 'Let users to enter an unlisted option',
                    fieldDeleteWarning: false,
                    fieldVars: 'Field Variables',
                    fieldNonEditable: 'This field cannot be edited.',
                    fieldRemoveWarning: 'Are you sure you want to remove this field?',
                    fileUpload: 'File Upload',
                    formUpdated: 'Form Updated',
                    getStarted: 'Drag a field from the right to this area',
                    header: 'Header',
                    hide: 'Edit',
                    hidden: 'Hidden Input',
                    inline: 'Inline',
                    inlineDesc: 'Display {type} inline',
                    label: 'Label',
                    labelEmpty: 'Field Label cannot be empty',
                    limitRole: 'Limit access to one or more of the following roles:',
                    mandatory: 'Mandatory',
                    maxlength: 'Max Length',
                    minOptionMessage: 'This field requires a minimum of 2 options',
                    multipleFiles: 'Multiple Files',
                    name: 'Name',
                    no: 'No',
                    noFieldsToClear: 'There are no fields to clear',
                    number: 'Number',
                    off: 'Off',
                    on: 'On',
                    option: 'Option',
                    options: 'Options',
                    optional: 'optional',
                    optionLabelPlaceholder: 'Label',
                    optionValuePlaceholder: 'Value',
                    optionEmpty: 'Option value required',
                    other: 'Other',
                    paragraph: 'Paragraph',
                    placeholder: 'Placeholder',
                    placeholders: {
                      value: 'Value',
                      label: 'Label',
                      text: '',
                      textarea: '',
                      email: 'Enter you email',
                      placeholder: '',
                      className: 'space separated classes',
                      password: 'Enter your password'
                    },
                    preview: 'Preview',
                    radioGroup: 'Radio Group',
                    radio: 'Radio',
                    removeMessage: 'Remove Element',
                    removeOption: 'Remove Option',
                    remove: '&#215;',
                    required: 'Required',
                    richText: 'Rich Text Editor',
                    roles: 'Access',
                    rows: 'Rows',
                    save: 'Save',
                    selectOptions: 'Options',
                    select: 'Select',
                    selectColor: 'Select Color',
                    selectionsMessage: 'Allow Multiple Selections',
                    size: 'Size',
                    'size.xs': 'Extra Small',
                    'size.sm': 'Small',
                    'size.m': 'Default',
                    'size.lg': 'Large',
                    style: 'Style',
                    styles: {
                      btn: {
                        'default': 'Default',
                        danger: 'Danger',
                        info: 'Info',
                        primary: 'Primary',
                        success: 'Success',
                        warning: 'Warning'
                      }
                    },
                    subtype: 'Type',
                    text: 'Text Field',
                    textArea: 'Text Area',
                    toggle: 'Toggle',
                    warning: 'Warning!',
                    value: 'Value',
                    viewJSON: '{  }',
                    viewXML: '&lt;/&gt;',
                    yes: 'Yes'
                  }
                }
              };

              frmbID = 'frmb-' + $('ul[id^=frmb-]').length++;

              formBuilder.formID = frmbID;
              _$$extend = $.extend({}, defaults, options, true), i18n = _$$extend.i18n, opts = (0, _objectWithoutProperties3.default)(_$$extend, ['i18n']);
              _context2.next = 16;
              return formBuilder.mi18n.init(i18n);

            case 16:
              i18n = _context2.sent;
              mi18n = formBuilder.mi18n;
              _helpers = require('./helpers.js')(opts, formBuilder);
              subtypes = _helpers.processSubtypes(opts.subtypes);
              $sortableFields = $('<ul/>').attr('id', frmbID).addClass('frmb');


              formBuilder.layout = _helpers.editorLayout(opts.controlPosition);
              formBuilder.stage = $sortableFields[0];

              lastID = frmbID + '-fld-1';
              boxID = frmbID + '-control-box';

              // create array of field objects to cycle through

              frmbFields = [{
                label: i18n['autocomplete'],
                attrs: {
                  type: 'autocomplete',
                  className: 'autocomplete',
                  name: 'autocomplete'
                }
              }, {
                label: i18n['button'],
                attrs: {
                  type: 'button',
                  className: 'button-input',
                  name: 'button'
                }
              }, {
                label: i18n['checkbox'],
                attrs: {
                  type: 'checkbox',
                  className: 'checkbox',
                  name: 'checkbox'
                }
              }, {
                label: i18n['checkboxGroup'],
                attrs: {
                  type: 'checkbox-group',
                  className: 'checkbox-group',
                  name: 'checkbox-group'
                }
              }, {
                label: i18n['dateField'],
                attrs: {
                  type: 'date',
                  className: 'calendar',
                  name: 'date-input'
                }
              }, {
                label: i18n['fileUpload'],
                attrs: {
                  type: 'file',
                  className: 'file-input',
                  name: 'file-input'
                }
              }, {
                label: i18n['header'],
                attrs: {
                  type: 'header',
                  className: 'header'
                }
              }, {
                label: i18n['hidden'],
                attrs: {
                  type: 'hidden',
                  className: 'hidden-input',
                  name: 'hidden-input'
                }
              }, {
                label: i18n['number'],
                attrs: {
                  type: 'number',
                  className: 'number',
                  name: 'number'
                }
              }, {
                label: i18n['paragraph'],
                attrs: {
                  type: 'paragraph',
                  className: 'paragraph'
                }
              }, {
                label: i18n['radioGroup'],
                attrs: {
                  type: 'radio-group',
                  className: 'radio-group',
                  name: 'radio-group'
                }
              }, {
                label: i18n['select'],
                attrs: {
                  type: 'select',
                  className: 'select',
                  name: 'select'
                }
              }, {
                label: i18n['text'],
                attrs: {
                  type: 'text',
                  className: 'text-input',
                  name: 'text-input'
                }
              }, {
                label: i18n['textArea'],
                attrs: {
                  type: 'textarea',
                  className: 'text-area',
                  name: 'textarea'
                }
              }];


              frmbFields = _helpers.orderFields(frmbFields);

              if (opts.disableFields) {
                // remove disabledFields
                frmbFields = frmbFields.filter(function (field) {
                  return !utils.inArray(field.attrs.type, opts.disableFields);
                });
              }

              // Create draggable fields for formBuilder
              cbUl = utils.markup('ul', null, { id: boxID, className: 'frmb-control' });

              formBuilder.controls = cbUl;

              if (opts.sortableControls) {
                cbUl.classList.add('sort-enabled');
              }

              $cbUL = $(cbUl);

              // Loop through

              utils.forEach(frmbFields, function (i) {
                var $field = $('<li/>', {
                  'class': 'icon-' + frmbFields[i].attrs.className,
                  'type': frmbFields[i].type,
                  'name': frmbFields[i].className,
                  'label': frmbFields[i].label
                });

                $field.data('newFieldData', frmbFields[i]);

                var typeLabel = utils.markup('span', frmbFields[i].label);
                $field.html(typeLabel).appendTo($cbUL);
              });

              if (opts.inputSets.length) {
                $('<li/>', { 'class': 'fb-separator' }).html('<hr>').appendTo($cbUL);
                opts.inputSets.forEach(function (set) {
                  set.name = set.name || _helpers.makeClassName(set.label);
                  var $set = $('<li/>', { 'class': 'input-set-control', type: set.name });
                  $set.html(set.label).appendTo($cbUL);
                });
              }

              // Sortable fields
              $sortableFields.sortable({
                cursor: 'move',
                opacity: 0.9,
                revert: 150,
                beforeStop: _helpers.beforeStop,
                start: _helpers.startMoving,
                stop: _helpers.stopMoving,
                cancel: 'input, select, .disabled-field, .form-group, .btn',
                placeholder: 'frmb-placeholder'
              });

              // ControlBox with different fields
              $cbUL.sortable({
                helper: 'clone',
                opacity: 0.9,
                connectWith: $sortableFields,
                cancel: '.fb-separator',
                cursor: 'move',
                scroll: false,
                placeholder: 'ui-state-highlight',
                start: _helpers.startMoving,
                stop: _helpers.stopMoving,
                revert: 150,
                beforeStop: _helpers.beforeStop,
                distance: 3,
                update: function update(event, ui) {
                  if (_helpers.doCancel) {
                    return false;
                  }
                  if (ui.item.parent()[0] === $sortableFields[0]) {
                    processControl(ui.item);
                    _helpers.doCancel = true;
                  } else {
                    _helpers.setFieldOrder($cbUL);
                    _helpers.doCancel = !opts.sortableControls;
                  }
                }
              });

              processControl = function processControl(control) {
                if (control[0].classList.contains('input-set-control')) {
                  var inputSet = opts.inputSets.filter(function (set) {
                    return set.name === control[0].type;
                  })[0];
                  if (inputSet.showHeader) {
                    var header = {
                      type: 'header',
                      subtype: 'h2',
                      id: inputSet.name,
                      label: inputSet.label
                    };
                    prepFieldVars(header, true);
                  }
                  inputSet.fields.forEach(function (field) {
                    prepFieldVars(field, true);
                  });
                } else {
                  prepFieldVars(control, true);
                }
              };

              $formWrap = $('<div/>', {
                id: frmbID + '-form-wrap',
                'class': 'form-wrap form-builder' + _helpers.mobileClass()
              });


              formBuilder.editor = $formWrap[0];

              $stageWrap = $('<div/>', {
                id: frmbID + '-stage-wrap',
                'class': 'stage-wrap ' + formBuilder.layout.stage
              });
              cbWrap = $('<div/>', {
                id: frmbID + '-cb-wrap',
                'class': 'cb-wrap ' + formBuilder.layout.controls
              }).append($cbUL[0]);


              if (opts.showActionButtons) {
                buttons = opts.actionButtons.map(_helpers.processActionButtons);
                formActions = m('div', buttons, {
                  className: 'form-actions btn-group'
                });


                cbWrap.append(formActions);
              }

              $stageWrap.append($sortableFields, cbWrap);
              $stageWrap.before($formWrap);
              $formWrap.append($stageWrap, cbWrap);

              if (element.type !== 'textarea') {
                $(element).append($formWrap);
              } else {
                $(element).replaceWith($formWrap);
              }

              saveAndUpdate = _helpers.debounce(function (evt) {
                if (evt) {
                  if (evt.type === 'keyup' && evt.target.name === 'className') {
                    return false;
                  }

                  var $field = $(evt.target).closest('.form-field');
                  _helpers.updatePreview($field);
                  _helpers.save();
                }
              });

              // Save field on change

              $sortableFields.on('change blur keyup', '.form-elements input, .form-elements select, .form-elements textarea', saveAndUpdate);

              $('li', $cbUL).click(function (evt) {
                var $control = $(evt.target).closest('.ui-sortable-handle');
                _helpers.stopIndex = undefined;
                processControl($control);
                _helpers.save();
              });

              // Add append and prepend options if necessary

              nonEditableFields = function nonEditableFields() {
                var cancelArray = [];
                var disabledField = function disabledField(type) {
                  return utils.markup('li', opts[type], {
                    className: 'disabled-field form-' + type
                  });
                };

                if (opts.prepend && !$('.disabled-field.form-prepend', $sortableFields).length) {
                  cancelArray.push(true);
                  $sortableFields.prepend(disabledField('prepend'));
                }

                if (opts.append && !$('.disabled-field.form-.append', $sortableFields).length) {
                  cancelArray.push(true);
                  $sortableFields.append(disabledField('append'));
                }

                if (cancelArray.some(function (elem) {
                  return elem === true;
                })) {
                  $stageWrap.removeClass('empty');
                }

                _helpers.disabledTT.init();
              };

              prepFieldVars = function prepFieldVars($field) {
                var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                var field = {};
                if ($field instanceof jQuery) {
                  var fieldData = $field.data('newFieldData');
                  if (fieldData) {
                    field = fieldData.attrs;
                    field.label = fieldData.label;
                  } else {
                    var attrs = $field[0].attributes;
                    if (!isNew) {
                      field.values = $field.children().map(function (index, elem) {
                        return {
                          label: $(elem).text(),
                          value: $(elem).attr('value'),
                          selected: Boolean($(elem).attr('selected'))
                        };
                      });
                    }

                    for (var i = attrs.length - 1; i >= 0; i--) {
                      field[attrs[i].name] = attrs[i].value;
                    }
                  }
                } else {
                  field = (0, _assign2.default)({}, $field);
                }

                field.name = isNew ? nameAttr(field) : field.name || nameAttr(field);

                if (isNew && utils.inArray(field.type, ['text', 'number', 'file', 'select', 'textarea', 'autocomplete'])) {
                  field.className = 'form-control'; // backwards compatibility
                } else {
                  field.className = field.class || field.className;
                }

                var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className);
                if (match) {
                  field.style = match[1];
                }

                utils.escapeAttrs(field);

                appendNewField(field, isNew);
                if (isNew) {
                  document.dispatchEvent(formBuilder.events.fieldAdded);
                }
                $stageWrap.removeClass('empty');
              };

              // Parse saved XML template data


              loadFields = function loadFields() {
                _helpers.getData();
                var formData = formBuilder.formData;
                if (formData && formData.length) {
                  for (var i = 0; i < formData.length; i++) {
                    prepFieldVars(formData[i]);
                  }
                  $stageWrap.removeClass('empty');
                } else if (opts.defaultFields && opts.defaultFields.length) {
                  // Load default fields if none are set
                  opts.defaultFields.forEach(function (field) {
                    return prepFieldVars(field);
                  });
                  $stageWrap.removeClass('empty');
                } else if (!opts.prepend && !opts.append) {
                  $stageWrap.addClass('empty').attr('data-content', i18n.getStarted);
                }
                _helpers.save();

                nonEditableFields();
              };

              nameAttr = function nameAttr(field) {
                var epoch = new Date().getTime();
                return field.type + '-' + epoch;
              };

              /**
               * Add data for field with options [select, checkbox-group, radio-group]
               *
               * @todo   refactor this nasty ~crap~ code, its actually painful to look at
               * @param  {Object} values
               * @return {String} field options markup
               */


              fieldOptions = function fieldOptions(values) {
                var optionActions = [utils.markup('a', i18n.addOption, { className: 'add add-opt' })];
                var fieldOptions = ['<label class="false-label">' + i18n.selectOptions + '</label>'];
                var isMultiple = values.multiple || values.type === 'checkbox-group';

                if (!values.values || !values.values.length) {
                  values.values = [1, 2, 3].map(function (index) {
                    var label = i18n.option + ' ' + index;
                    var option = {
                      selected: false,
                      label: label,
                      value: utils.hyphenCase(label)
                    };
                    return option;
                  });
                  values.values[0].selected = true;
                } else {
                  // ensure option data is has all required keys
                  values.values.forEach(function (option) {
                    return (0, _assign2.default)({}, { selected: false }, option);
                  });
                }

                fieldOptions.push('<div class="sortable-options-wrap">');

                fieldOptions.push('<ol class="sortable-options">');
                utils.forEach(values.values, function (i) {
                  fieldOptions.push(selectFieldOptions(values.name, values.values[i], isMultiple));
                });
                fieldOptions.push('</ol>');
                fieldOptions.push(utils.markup('div', optionActions, { className: 'option-actions' }).outerHTML);
                fieldOptions.push('</div>');

                return utils.markup('div', fieldOptions.join(''), { className: 'form-group field-options' }).outerHTML;
              };

              /**
               * Build the editable properties for the field
               * @param  {object} values configuration object for advanced fields
               * @return {String}        markup for advanced fields
               */


              advFields = function advFields(values) {
                var advFields = [];
                var key = void 0;
                var valueField = !utils.inArray(values.type, ['header', 'paragraph', 'file'].concat(_dom2.default.optionFields));
                var roles = values.role !== undefined ? values.role.split(',') : [];

                advFields.push(requiredField(values));

                if (values.type === 'checkbox') {
                  advFields.push(boolAttribute('toggle', values, { first: i18n.toggle }));
                }

                // Inline options
                if (utils.inArray(values.type, ['checkbox-group', 'radio-group'])) {
                  var labels = {
                    first: i18n.inline,
                    second: mi18n.get('messages.inlineDesc', values.type.replace('-group', ''))
                  };

                  advFields.push(boolAttribute('inline', values, labels));
                }

                advFields.push(textAttribute('label', values));

                values.size = values.size || 'm';
                values.style = values.style || 'default';

                // Help Text / Description Field
                if (!utils.inArray(values.type, ['header', 'paragraph', 'button'])) {
                  advFields.push(textAttribute('description', values));
                }

                if (subtypes[values.type]) {
                  var optionData = subtypes[values.type];
                  advFields.push(selectAttribute('subtype', values, optionData));
                }

                if (values.type === 'button') {
                  advFields.push(btnStyles(values.style));
                }

                if (values.type === 'number') {
                  advFields.push(numberAttribute('min', values));
                  advFields.push(numberAttribute('max', values));
                  advFields.push(numberAttribute('step', values));
                }

                // Placeholder
                advFields.push(textAttribute('placeholder', values));

                // TextArea Rows Attribute
                if (values.type === 'textarea') {
                  advFields.push(numberAttribute('rows', values));
                }

                // Class
                advFields.push(textAttribute('className', values));

                advFields.push(textAttribute('name', values));

                if (valueField) {
                  advFields.push(textAttribute('value', values));
                }

                if (values.type === 'file') {
                  var _labels = {
                    first: i18n.multipleFiles,
                    second: i18n.allowMultipleFiles
                  };
                  advFields.push(boolAttribute('multiple', values, _labels));
                }

                var rolesDisplay = values.role !== undefined ? 'style="display:block"' : '';
                var availableRoles = ['<div class="available-roles" ' + rolesDisplay + '>'];
                for (key in opts.roles) {
                  if (opts.roles.hasOwnProperty(key)) {
                    var checked = utils.inArray(key, roles) ? 'checked' : '';
                    var roleId = 'fld-' + lastID + '-roles-' + key;
                    availableRoles.push('<input type="checkbox" name="roles[]" value="' + key + '" id="' + roleId + '" ' + checked + ' class="roles-field" /> <label for="' + roleId + '">' + opts.roles[key] + '</label><br/>');
                  }
                }

                availableRoles.push('</div>');

                var accessLabels = { first: i18n.roles, second: i18n.limitRole, content: availableRoles.join('') };

                advFields.push(boolAttribute('access', values, accessLabels));

                if (values.type.match(/(checkbox-group|radio-group)/)) {
                  advFields.push(boolAttribute('other', values, { first: i18n.enableOther, second: i18n.enableOtherMsg }));
                }

                if (values.type === 'select') {
                  advFields.push(boolAttribute('multiple', values, { first: ' ', second: i18n.selectionsMessage }));
                }

                if (values.type.match(_dom2.default.optionFieldsRegEx)) {
                  advFields.push(fieldOptions(values));
                }

                if (utils.inArray(values.type, ['text', 'textarea'])) {
                  advFields.push(numberAttribute('maxlength', values));
                }

                // Append custom attributes as defined in typeUserAttrs option
                if (opts.typeUserAttrs[values.type]) {
                  advFields.push(processTypeUserAttrs(opts.typeUserAttrs[values.type], values));
                }

                return advFields.join('');
              };

              /**
               * Processes typeUserAttrs
               * @param  {Object} typeUserAttr option
               * @param  {Object} values       field attributes
               * @return {String}              markup for custom user attributes
               */


              /**
               * Text input value for attribute
               * @param  {String} name
               * @param  {Object} attrs also known as values
               * @return {String}       input markup
               */


              /**
               * Select input for multiple choice user attributes
               * @todo  replace with selectAttr
               * @param  {String} name
               * @param  {Object} options
               * @return {String}         select markup
               */


              boolAttribute = function boolAttribute(name, values, labels) {
                if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][name]) {
                  return;
                }

                var label = function label(txt) {
                  return '<label for="' + name + '-' + lastID + '">' + txt + '</label>';
                };
                var checked = values[name] !== undefined ? 'checked' : '';
                var input = '<input type="checkbox" class="fld-' + name + '" name="' + name + '" value="true" ' + checked + ' id="' + name + '-' + lastID + '"/> ';
                var left = [];
                var right = [input];

                if (labels.first) {
                  left.unshift(label(labels.first));
                }

                if (labels.second) {
                  right.push(label(labels.second));
                }

                if (labels.content) {
                  right.push(labels.content);
                }

                right.unshift('<div class="input-wrap">');
                right.push('</div>');

                return '<div class="form-group ' + name + '-wrap">' + left.concat(right).join('') + '</div>';
              };

              btnStyles = function btnStyles(style) {
                var styles = i18n['styles.btn'];
                var styleField = '';

                if (styles) {
                  var styleLabel = '<label>' + i18n.style + '</label>';
                  styleField += '<input value="' + style + '" name="style" type="hidden" class="btn-style">';
                  styleField += '<div class="btn-group" role="group">';

                  (0, _keys2.default)(styles).forEach(function (element) {
                    var classList = ['btn-xs', 'btn', 'btn-' + element];
                    if (style === element) {
                      classList.push('selected');
                    }

                    styleField += '<button value="' + element + '" type="button" class="' + classList.join(' ') + '">' + i18n.styles.btn[element] + '</button>';
                  });

                  styleField += '</div>';

                  styleField = '<div class="form-group style-wrap">' + styleLabel + ' ' + styleField + '</div>';
                }

                return styleField;
              };

              /**
               * Add a number attribute to a field.
               * @param  {String} attribute
               * @param  {Object} values
               * @return {String} markup for number attribute
               */


              numberAttribute = function numberAttribute(attribute, values) {
                if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
                  return;
                }

                var attrVal = values[attribute];
                var attrLabel = i18n[attribute] || attribute;
                var placeholder = i18n.placeholders[attribute];
                var inputConfig = {
                  type: 'number',
                  value: attrVal,
                  name: attribute,
                  min: '0',
                  placeholder: placeholder,
                  className: 'fld-' + attribute + ' form-control',
                  id: attribute + '-' + lastID
                };
                var numberAttribute = '<input ' + utils.attrString(utils.trimObj(inputConfig)) + '>';
                var inputWrap = '<div class="input-wrap">' + numberAttribute + '</div>';

                return '<div class="form-group ' + attribute + '-wrap"><label for="' + inputConfig.id + '">' + attrLabel + '</label> ' + inputWrap + '</div>';
              };

              /**
               * selectAttribute
               * @param  {String} attribute  attribute name
               * @param  {Object} values     aka attrs
               * @param  {Array} optionData  select field option data
               * @return {String}            select input makrup
               */


              selectAttribute = function selectAttribute(attribute, values, optionData) {
                if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
                  return;
                }
                var selectOptions = optionData.map(function (option, i) {
                  var optionAttrs = (0, _assign2.default)({
                    label: i18n.option + ' ' + i,
                    value: undefined
                  }, option);
                  if (option.value === values[attribute]) {
                    optionAttrs.selected = true;
                  }
                  return '<option ' + utils.attrString(utils.trimObj(optionAttrs)) + '>' + optionAttrs.label + '</option>';
                });
                var selectAttrs = {
                  id: attribute + '-' + lastID,
                  name: attribute,
                  className: 'fld-' + attribute + ' form-control'
                };
                var label = '<label for="' + selectAttrs.id + '">' + (i18n[attribute] || utils.capitalize(attribute)) + '</label>';
                var select = '<select ' + utils.attrString(selectAttrs) + '>' + selectOptions.join('') + '</select>';
                var inputWrap = '<div class="input-wrap">' + select + '</div>';

                return '<div class="form-group ' + selectAttrs.name + '-wrap">' + label + inputWrap + '</div>';
              };

              /**
               * Generate some text inputs for field attributes, **will be replaced**
               * @param  {String} attribute
               * @param  {Object} values
               * @return {String}
               */


              textAttribute = function textAttribute(attribute, values) {
                if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
                  return;
                }

                var placeholderFields = ['text', 'textarea', 'select', 'autocomplete'];

                var noName = ['header', 'paragraph'];

                var textArea = ['paragraph'];

                var attrVal = values[attribute] || '';
                var attrLabel = i18n[attribute];
                if (attribute === 'label' && utils.inArray(values.type, textArea)) {
                  attrLabel = i18n.content;
                }

                if (subtypes.header) {
                  noName = noName.concat(subtypes.header);
                }

                var placeholders = i18n.placeholders;
                var placeholder = placeholders[attribute] || '';
                var attributefield = '';
                var noMakeAttr = [];

                // Field has placeholder attribute
                if (attribute === 'placeholder' && !utils.inArray(values.type, placeholderFields)) {
                  noMakeAttr.push(true);
                }

                // Field has name attribute
                if (attribute === 'name' && utils.inArray(values.type, noName)) {
                  noMakeAttr.push(true);
                }

                if (!noMakeAttr.some(function (elem) {
                  return elem === true;
                })) {
                  var inputConfig = {
                    name: attribute,
                    placeholder: placeholder,
                    className: 'fld-' + attribute + ' form-control',
                    id: attribute + '-' + lastID
                  };
                  var attributeLabel = '<label for="' + inputConfig.id + '">' + attrLabel + '</label>';

                  if (attribute === 'label' && utils.inArray(values.type, textArea) || attribute === 'value' && values.type === 'textarea') {
                    attributefield += '<textarea ' + utils.attrString(inputConfig) + '>' + attrVal + '</textarea>';
                  } else {
                    inputConfig.value = attrVal;
                    inputConfig.type = 'text';
                    attributefield += '<input ' + utils.attrString(inputConfig) + '>';
                  }

                  var inputWrap = '<div class="input-wrap">' + attributefield + '</div>';

                  var visibility = 'block';
                  if (attribute === 'value') {
                    visibility = values.subtype && values.subtype === 'quill' && 'none';
                  }

                  attributefield = '<div class="form-group ' + attribute + '-wrap" style="display: ' + visibility + '">' + attributeLabel + ' ' + inputWrap + '</div>';
                }

                return attributefield;
              };

              requiredField = function requiredField(values) {
                var noRequire = ['header', 'paragraph', 'button'];
                var noMake = [];
                var requireField = '';

                if (utils.inArray(values.type, noRequire)) {
                  noMake.push(true);
                }
                if (!noMake.some(function (elem) {
                  return elem === true;
                })) {
                  requireField = boolAttribute('required', values, { first: i18n.required });
                }

                return requireField;
              };

              // Append the new field to the editor


              appendNewField = function appendNewField(values) {
                var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                var type = values.type || 'text';
                var label = values.label || i18n[type] || i18n.label;
                var delBtn = m('a', i18n.remove, {
                  id: 'del_' + lastID,
                  className: 'del-button btn delete-confirm',
                  title: i18n.removeMessage
                });
                var toggleBtn = m('a', null, {
                  id: lastID + '-edit',
                  className: 'toggle-form btn icon-pencil',
                  title: i18n.hide
                });
                var copyBtn = m('a', i18n.copyButton, {
                  id: lastID + '-copy',
                  className: 'copy-button btn icon-copy',
                  title: i18n.copyButtonTooltip
                });

                var liContents = m('div', [toggleBtn, copyBtn, delBtn], { className: 'field-actions' }).outerHTML;

                // Field preview Label
                liContents += '<label class="field-label">' + label + '</label>';

                if (values.description) {
                  var attrs = {
                    className: 'tooltip-element',
                    tooltip: values.description
                  };
                  liContents += '<span ' + utils.attrString(attrs) + '>?</span>';
                }

                var requiredDisplay = values.required ? 'style="display:inline"' : '';
                liContents += '<span class="required-asterisk" ' + requiredDisplay + '> *</span>';

                liContents += m('div', '', { className: 'prev-holder' }).outerHTML;
                liContents += '<div id="' + lastID + '-holder" class="frm-holder">';
                liContents += '<div class="form-elements">';

                liContents += advFields(values);
                liContents += m('a', i18n.close, { className: 'close-field' }).outerHTML;

                liContents += '</div>';
                liContents += '</div>';

                var field = m('li', liContents, {
                  'class': type + '-field form-field',
                  'type': type,
                  id: lastID
                });
                var $li = $(field);

                $li.data('fieldData', { attrs: values });

                if (typeof _helpers.stopIndex !== 'undefined') {
                  $('> li', $sortableFields).eq(_helpers.stopIndex).before($li);
                } else {
                  $sortableFields.append($li);
                }

                $('.sortable-options', $li).sortable({ update: function update() {
                    return _helpers.updatePreview($li);
                  } });

                _helpers.updatePreview($li);

                if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) {
                  opts.typeUserEvents[type].onadd(field);
                }

                if (opts.editOnAdd && isNew) {
                  _helpers.closeAllEdit();
                  _helpers.toggleEdit(lastID, false);
                }

                lastID = _helpers.incrementId(lastID);
              };

              // Select field html, since there may be multiple


              selectFieldOptions = function selectFieldOptions(name, optionData, multipleSelect) {
                var optionInputType = {
                  selected: multipleSelect ? 'checkbox' : 'radio'
                };
                var optionDataOrder = ['value', 'label', 'selected'];
                var optionInputs = [];
                var optionTemplate = { selected: false, label: '', value: '' };

                optionData = (0, _assign2.default)(optionTemplate, optionData);

                for (var i = optionDataOrder.length - 1; i >= 0; i--) {
                  var prop = optionDataOrder[i];
                  if (optionData.hasOwnProperty(prop)) {
                    var attrs = {
                      type: optionInputType[prop] || 'text',
                      'class': 'option-' + prop,
                      value: optionData[prop],
                      name: name + '-option'
                    };

                    if (i18n.placeholders[prop]) {
                      attrs.placeholder = i18n.placeholders[prop];
                    }

                    if (prop === 'selected' && optionData.selected === true) {
                      attrs.checked = optionData.selected;
                    }

                    optionInputs.push(utils.markup('input', null, attrs));
                  }
                }

                var removeAttrs = {
                  className: 'remove btn',
                  title: i18n.removeMessage
                };
                optionInputs.push(utils.markup('a', i18n.remove, removeAttrs));

                var field = utils.markup('li', optionInputs);

                return field.outerHTML;
              };

              cloneItem = function cloneItem(currentItem) {
                var currentId = currentItem.attr('id');
                var type = currentItem.attr('type');
                var ts = new Date().getTime();
                var cloneName = type + '-' + ts;
                var $clone = currentItem.clone();

                $clone.find('[id]').each(function () {
                  this.id = this.id.replace(currentId, lastID);
                });

                $clone.find('[for]').each(function () {
                  this.setAttribute('for', this.getAttribute('for').replace(currentId, lastID));
                });

                $clone.each(function () {
                  $('e:not(.form-elements)').each(function () {
                    var newName = this.getAttribute('name');
                    newName = newName.substring(0, newName.lastIndexOf('-') + 1);
                    newName = newName + ts.toString();
                    this.setAttribute('name', newName);
                  });
                });

                $clone.find('.form-elements').find(':input').each(function () {
                  if (this.getAttribute('name') === 'name') {
                    var newVal = this.getAttribute('value');
                    newVal = newVal.substring(0, newVal.lastIndexOf('-') + 1);
                    newVal = newVal + ts.toString();
                    this.setAttribute('value', newVal);
                  }
                });

                $clone.attr('id', lastID);
                $clone.attr('name', cloneName);
                $clone.addClass('cloned');
                $('.sortable-options', $clone).sortable();

                if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onclone) {
                  opts.typeUserEvents[type].onclone($clone[0]);
                }

                lastID = _helpers.incrementId(lastID);
                return $clone;
              };

              // ---------------------- UTILITIES ---------------------- //

              // delete options


              $sortableFields.on('click touchstart', '.remove', function (e) {
                var $field = $(this).parents('.form-field:eq(0)');
                e.preventDefault();
                var optionsCount = $(this).parents('.sortable-options:eq(0)').children('li').length;
                if (optionsCount <= 2) {
                  opts.notify.error('Error: ' + i18n.minOptionMessage);
                } else {
                  $(this).parent('li').slideUp('250', function () {
                    $(this).remove();
                    _helpers.updatePreview($field);
                    _helpers.save();
                  });
                }
              });

              // touch focus
              $sortableFields.on('touchstart', 'input', function (e) {
                var $input = $(this);
                if (e.handled !== true) {
                  if ($input.attr('type') === 'checkbox') {
                    $input.trigger('click');
                  } else {
                    $input.focus();
                    var fieldVal = $input.val();
                    $input.val(fieldVal);
                  }
                } else {
                  return false;
                }
              });

              // toggle fields
              $sortableFields.on('click touchstart', '.toggle-form, .close-field', function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (e.handled !== true) {
                  var targetID = $(e.target).parents('.form-field:eq(0)').attr('id');
                  _helpers.toggleEdit(targetID);
                  e.handled = true;
                } else {
                  return false;
                }
              });

              $sortableFields.on('change', '[name="subtype"]', function (e) {
                var $field = $(e.target).closest('li.form-field');
                var $valWrap = $('.value-wrap', $field);
                $valWrap.toggle(e.target.value !== 'quill');
              });

              $sortableFields.on('change', '.prev-holder input, .prev-holder select', function (e) {
                var prevOptions = void 0;
                if (e.target.classList.contains('other-option')) {
                  return;
                }
                var field = $(e.target).closest('li.form-field')[0];
                if (utils.inArray(field.type, ['select', 'checkbox-group', 'radio-group'])) {
                  (function () {
                    var options = field.getElementsByClassName('option-value');
                    if (field.type === 'select') {
                      utils.forEach(options, function (i) {
                        var selectedOption = options[i].parentElement.childNodes[0];
                        selectedOption.checked = e.target.value === options[i].value;
                      });
                    } else {
                      prevOptions = document.getElementsByName(e.target.name);
                      utils.forEach(prevOptions, function (i) {
                        var selectedOption = options[i].parentElement.childNodes[0];
                        selectedOption.checked = prevOptions[i].checked;
                      });
                    }
                  })();
                } else {
                  document.getElementById('value-' + field.id).value = e.target.value;
                }

                _helpers.save();
              });

              // update preview to label
              $sortableFields.on('keyup change', '[name="label"]', function (e) {
                $('.field-label', $(e.target).closest('li')).text($(e.target).val());
              });

              // remove error styling when users tries to correct mistake
              $sortableFields.delegate('input.error', 'keyup', function (e) {
                $(e.target).removeClass('error');
              });

              // update preview for description
              $sortableFields.on('keyup', 'input[name="description"]', function (e) {
                var $field = $(e.target).parents('.form-field:eq(0)');
                var closestToolTip = $('.tooltip-element', $field);
                var ttVal = $(e.target).val();
                if (ttVal !== '') {
                  if (!closestToolTip.length) {
                    var tt = '<span class="tooltip-element" tooltip="' + ttVal + '">?</span>';
                    $('.field-label', $field).after(tt);
                  } else {
                    closestToolTip.attr('tooltip', ttVal).css('display', 'inline-block');
                  }
                } else {
                  if (closestToolTip.length) {
                    closestToolTip.css('display', 'none');
                  }
                }
              });

              $sortableFields.on('change', '.fld-multiple', function (e) {
                var newType = e.target.checked ? 'checkbox' : 'radio';

                $(e.target).parents('.form-elements:eq(0)').find('.sortable-options input.option-selected').each(function () {
                  e.target.type = newType;
                });
              });

              // format name attribute
              $sortableFields.on('blur', 'input.fld-name', function (e) {
                e.target.value = _helpers.safename(e.target.value);
                if (e.target.value === '') {
                  $(e.target).addClass('field-error').attr('placeholder', i18n.cannotBeEmpty);
                } else {
                  $(e.target).removeClass('field-error');
                }
              });

              $sortableFields.on('blur', 'input.fld-maxlength', function (e) {
                e.target.value = _helpers.forceNumber(e.target.value);
              });

              // Copy field
              $sortableFields.on('click touchstart', '.icon-copy', function (e) {
                e.preventDefault();
                var currentItem = $(e.target).parent().parent('li');
                var $clone = cloneItem(currentItem);
                $clone.insertAfter(currentItem);
                _helpers.updatePreview($clone);
                _helpers.save();
              });

              // Delete field
              $sortableFields.on('click touchstart', '.delete-confirm', function (e) {
                e.preventDefault();

                var buttonPosition = e.target.getBoundingClientRect();
                var bodyRect = document.body.getBoundingClientRect();
                var coords = {
                  pageX: buttonPosition.left + buttonPosition.width / 2,
                  pageY: buttonPosition.top - bodyRect.top - 12
                };

                var deleteID = $(e.target).parents('.form-field:eq(0)').attr('id');
                var $field = $(document.getElementById(deleteID));

                document.addEventListener('modalClosed', function () {
                  $field.removeClass('deleting');
                }, false);

                // Check if user is sure they want to remove the field
                if (opts.fieldRemoveWarn) {
                  var warnH3 = utils.markup('h3', i18n.warning);
                  var warnMessage = utils.markup('p', i18n.fieldRemoveWarning);
                  _helpers.confirm([warnH3, warnMessage], function () {
                    return _helpers.removeField(deleteID);
                  }, coords);
                  $field.addClass('deleting');
                } else {
                  _helpers.removeField(deleteID);
                }
              });

              // Update button style selection
              $sortableFields.on('click', '.style-wrap button', function (e) {
                var $button = $(e.target);
                var styleVal = $button.val();
                var $btnStyle = $button.parent().prev('.btn-style');
                $btnStyle.val(styleVal);
                $button.siblings('.btn').removeClass('selected');
                $button.addClass('selected');
                _helpers.updatePreview($btnStyle.closest('.form-field'));
                _helpers.save();
              });

              // Attach a callback to toggle required asterisk
              $sortableFields.on('click', '.fld-required', function (e) {
                $(e.target).closest('.form-field').find('.required-asterisk').toggle();
              });

              // Attach a callback to toggle roles visibility
              $sortableFields.on('click', 'input.fld-access', function (e) {
                var roles = $(e.target).closest('.form-field').find('.available-roles');
                var enableRolesCB = $(e.target);
                roles.slideToggle(250, function () {
                  if (!enableRolesCB.is(':checked')) {
                    $('input[type="checkbox"]', roles).removeAttr('checked');
                  }
                });
              });

              // Attach a callback to add new options
              $sortableFields.on('click', '.add-opt', function (e) {
                e.preventDefault();
                var $optionWrap = $(e.target).closest('.field-options');
                var $multiple = $('[name="multiple"]', $optionWrap);
                var $firstOption = $('.option-selected:eq(0)', $optionWrap);
                var isMultiple = false;

                if ($multiple.length) {
                  isMultiple = $multiple.prop('checked');
                } else {
                  isMultiple = $firstOption.attr('type') === 'checkbox';
                }

                var name = $firstOption.attr('name');

                $('.sortable-options', $optionWrap).append(selectFieldOptions(name, false, isMultiple));
              });

              $sortableFields.on('mouseover mouseout', '.remove, .del-button', function (e) {
                return $(e.target).closest('li').toggleClass('delete');
              });

              loadFields();

              $sortableFields.css('min-height', $cbUL.height());

              // If option set, controls will remain in view in editor
              if (opts.stickyControls.enable) {
                _helpers.stickyControls($sortableFields);
              }

              document.dispatchEvent(formBuilder.events.loaded);

              // Make actions accessible
              formBuilder.actions = {
                clearFields: _helpers.removeAllfields,
                showData: _helpers.showData,
                save: _helpers.save,
                addField: function addField(field, index) {
                  _helpers.stopIndex = formBuilder.stage.children.length ? index : undefined;
                  prepFieldVars(field);
                  document.dispatchEvent(formBuilder.events.fieldAdded);
                },
                removeField: _helpers.removeField,
                getData: function getData() {
                  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'js';

                  var stage = formBuilder.stage;
                  var h = _helpers;
                  var data = {
                    js: function js() {
                      return h.prepData(stage);
                    },
                    xml: function xml() {
                      return h.xmlSave(stage);
                    },
                    json: function json() {
                      return window.JSON.stringify(h.prepData(stage), null, '\t');
                    }
                  };

                  return data[type]();
                },
                setData: function setData(formData) {
                  _helpers.removeAllfields(false);
                  loadFields();
                }
              };

              formBuilder.i18n = {
                setLang: function () {
                  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(locale) {
                    var newLang;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return formBuilder.mi18n.setCurrent.call(formBuilder.mi18n, locale);

                          case 2:
                            newLang = _context.sent;

                          case 3:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this);
                  }));

                  return function setLang(_x6) {
                    return _ref2.apply(this, arguments);
                  };
                }()
              };

              return _context2.abrupt('return', formBuilder);

            case 89:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function FormBuilder(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  $.fn.formBuilder = function (options) {
    if (!options) {
      options = {};
    }
    var elems = this;
    return elems.each(function (i) {
      var formBuilder = new FormBuilder(options, elems[i]);
      $(elems[i]).data('formBuilder', formBuilder);

      return formBuilder;
    });
  };
})(jQuery);

},{"./dom":123,"./events.js":124,"./helpers.js":126,"./kc-toggle.js":127,"./polyfills.js":128,"./utils.js":129,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/asyncToGenerator":10,"babel-runtime/helpers/objectWithoutProperties":11,"babel-runtime/regenerator":15,"mi18n":119}],126:[function(require,module,exports){
'use strict';

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper functions specific to formBuilder.
 * Called form formBuilder
 * @param  {Object}   opts
 * @param  {Instance} formBuilder
 * @return {Object} helper functions
 */
function helpers(opts, formBuilder) {
  var i18n = formBuilder.mi18n;
  var utils = formBuilder.utils;

  var _helpers = {
    doCancel: false
  };

  /**
   * Convert converts messy `cl#ssNames` into valid `class-names`
   *
   * @param  {String} str
   * @return {String} hyphenated string
   */
  _helpers.makeClassName = function (str) {
    str = str.replace(/[^\w\s\-]/gi, '');
    return utils.hyphenCase(str);
  };

  /**
   * Add a mobile class
   * @todo find css only solution
   * @return {String} Mobile class added to formBuilder
   */
  _helpers.mobileClass = function () {
    var mobileClass = '';
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
        mobileClass = ' fb-mobile';
      }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return mobileClass;
  };

  /**
   * Callback for when a drag begins
   *
   * @param  {Object} event
   * @param  {Object} ui
   */
  _helpers.startMoving = function (event, ui) {
    ui.item.show().addClass('moving');
    _helpers.startIndex = $('li', this).index(ui.item);
  };

  /**
   * Callback for when a drag ends
   *
   * @param  {Object} event
   * @param  {Object} ui
   */
  _helpers.stopMoving = function (event, ui) {
    ui.item.removeClass('moving');
    if (_helpers.doCancel) {
      $(ui.sender).sortable('cancel');
      $(this).sortable('cancel');
    }
    _helpers.save();
    _helpers.doCancel = false;
  };

  /**
   * jQuery UI sortable beforeStop callback used for both lists.
   * Logic for canceling the sort or drop.
   * @param  {Object} event
   * @param  {Object} ui
   * @return {void}
   */
  _helpers.beforeStop = function (event, ui) {
    var form = document.getElementById(formBuilder.formID);
    var lastIndex = form.children.length - 1;
    var cancelArray = [];
    _helpers.stopIndex = ui.placeholder.index() - 1;

    if (!opts.sortableControls && ui.item.parent().hasClass('frmb-control')) {
      cancelArray.push(true);
    }

    if (opts.prepend) {
      cancelArray.push(_helpers.stopIndex === 0);
    }

    if (opts.append) {
      cancelArray.push(_helpers.stopIndex + 1 === lastIndex);
    }

    _helpers.doCancel = cancelArray.some(function (elem) {
      return elem === true;
    });
  };

  /**
   * Make strings safe to be used as classes
   *
   * @param  {String} str string to be converted
   * @return {String}     converter string
   */
  _helpers.safename = function (str) {
    return str.replace(/\s/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
  };

  /**
   * Strips non-numbers from a number only input
   *
   * @param  {string} str string with possible number
   * @return {string}     string without numbers
   */
  _helpers.forceNumber = function (str) {
    return str.replace(/[^0-9]/g, '');
  };

  /**
   * hide and show mouse tracking tooltips, only used for disabled
   * fields in the editor.
   *
   * @todo   remove or refactor to make better use
   * @param  {Object} tt jQuery option with nexted tooltip
   * @return {void}
   */
  _helpers.initTooltip = function (tt) {
    var tooltip = tt.find('.tooltip');
    tt.mouseenter(function () {
      if (tooltip.outerWidth() > 200) {
        tooltip.addClass('max-width');
      }
      tooltip.css('left', tt.width() + 14);
      tooltip.stop(true, true).fadeIn('fast');
    }).mouseleave(function () {
      tt.find('.tooltip').stop(true, true).fadeOut('fast');
    });
    tooltip.hide();
  };

  /**
   * Attempts to get element type and subtype
   *
   * @param  {Object} $field
   * @return {Object} {type: 'fieldType', subtype: 'fieldSubType'}
   */
  _helpers.getTypes = function ($field) {
    var types = {
      type: $field.attr('type')
    };
    var subtype = $('.fld-subtype', $field).val();

    if (subtype !== types.type) {
      types.subtype = subtype;
    }

    return types;
  };

  /**
   * Get option data for a field
   * @param  {Object} field jQuery field object
   * @return {Array}        Array of option values
   */
  _helpers.fieldOptionData = function (field) {
    var options = [];

    $('.sortable-options li', field).each(function () {
      var $option = $(this);
      var selected = $('.option-selected', $option).is(':checked');
      var attrs = {
        label: $('.option-label', $option).val(),
        value: $('.option-value', $option).val()
      };

      if (selected) {
        attrs.selected = selected;
      }

      options.push(attrs);
    });

    return options;
  };

  /**
   * XML save
   *
   * @param  {Object} form sortableFields node
   * @return {String} xml in string
   */
  _helpers.xmlSave = function (form) {
    var m = utils.markup;
    var formData = _helpers.prepData(form);
    var xml = ['<form-template>\n\t<fields>'];

    utils.forEach(formData, function (fieldIndex, field) {
      var fieldContent = null;
      var optionFields = /(select|checkbox-group|radio-group|autocomplete)/;

      // Handle options
      if (field.type.match(optionFields)) {
        var optionData = field.values;
        var options = [];

        for (var i = 0; i < optionData.length; i++) {
          var option = m('option', optionData[i].label, optionData[i]).outerHTML;
          options.push('\n\t\t\t' + option);
        }
        options.push('\n\t\t');

        fieldContent = options.join('');
        delete field.values;
      }

      var xmlField = m('field', fieldContent, field);
      xml.push('\n\t\t' + xmlField.outerHTML);
    });

    xml.push('\n\t</fields>\n</form-template>');

    return xml.join('');
  };

  _helpers.prepData = function (form) {
    var formData = [];

    if (form.childNodes.length !== 0) {
      // build data object
      utils.forEach(form.childNodes, function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(index, field) {
          var $field;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $field = $(field);


                  if (!$field.hasClass('disabled-field')) {
                    (function () {
                      var fieldData = _helpers.getTypes($field);
                      var roleVals = $('.roles-field:checked', field).map(function () {
                        return this.value;
                      }).get();

                      $('[class*="fld-"]', field).each(function () {
                        var attr = this;
                        var name = utils.camelCase(attr.name);
                        fieldData[name] = attr.type === 'checkbox' ? attr.checked : attr.value;
                      });

                      if (fieldData.subtype) {
                        if (fieldData.subtype === 'quill') {
                          var id = fieldData.name + '-preview';
                          if (window.fbEditors.quill[id]) {
                            var instance = window.fbEditors.quill[id].instance;
                            var data = instance.getContents();
                            fieldData.value = window.JSON.stringify(data.ops);
                          }
                        } else if (fieldData.subtype === 'tinymce' && window.tinymce) {
                          var _id = fieldData.name + '-preview';
                          if (window.tinymce.editors[_id]) {
                            var editor = window.tinymce.editors[_id];
                            fieldData.value = editor.getContent();
                          }
                        }
                      }

                      if (roleVals.length) {
                        fieldData.role = roleVals.join(',');
                      }

                      fieldData.className = fieldData.className || fieldData.class;

                      var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(fieldData.className);
                      if (match) {
                        fieldData.style = match[1];
                      }

                      fieldData = utils.trimObj(fieldData);
                      fieldData = utils.escapeAttrs(fieldData);

                      var multipleField = fieldData.type.match(_dom2.default.optionFieldsRegEx);

                      if (multipleField) {
                        fieldData.values = _helpers.fieldOptionData($field);
                      }

                      formData.push(fieldData);
                    })();
                  }

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }

    return formData;
  };

  _helpers.jsonSave = function (form) {
    return window.JSON.stringify(_helpers.prepData(form), null, '\t');
  };

  _helpers.getData = function (formData) {
    var data = formData || opts.formData;

    if (!data) {
      return false;
    }

    var setData = {
      xml: function xml(formData) {
        return utils.parseXML(formData);
      },
      json: function json(formData) {
        return window.JSON.parse(formData);
      }
    };

    formBuilder.formData = setData[opts.dataType](data) || [];

    return formBuilder.formData;
  };

  /**
   * Saves and returns formData
   * @return {XML|JSON} formData
   */
  _helpers.save = function () {
    var form = document.getElementById(formBuilder.formID);

    var doSave = {
      xml: _helpers.xmlSave,
      json: _helpers.jsonSave
    };

    // save action for current `dataType`
    formBuilder.formData = doSave[opts.dataType](form);

    // trigger formSaved event
    document.dispatchEvent(formBuilder.events.formSaved);
    return formBuilder.formData;
  };

  /**
   * increments the field ids with support for multiple editors
   * @param  {String} id field ID
   * @return {String}    incremented field ID
   */
  _helpers.incrementId = function (id) {
    var split = id.lastIndexOf('-');
    var newFieldNumber = parseInt(id.substring(split + 1)) + 1;
    var baseString = id.substring(0, split);

    return baseString + '-' + newFieldNumber;
  };

  /**
   * Collect field attribute values and call fieldPreview to generate preview
   * @param  {Object} field DOM element
   */
  _helpers.updatePreview = function (field) {
    var fieldClass = field.attr('class');
    if (fieldClass.indexOf('ui-sortable-handle') !== -1) {
      return;
    }

    var fieldType = $(field).attr('type');
    var $prevHolder = $('.prev-holder', field);
    var previewData = {
      type: fieldType
    };
    var preview = void 0;

    $('[class*="fld-"]', field).each(function () {
      var name = utils.camelCase(this.name);
      previewData[name] = this.type === 'checkbox' ? this.checked : this.value;
    });

    var style = $('.btn-style', field).val();
    if (style) {
      previewData.style = style;
    }

    if (fieldType.match(_dom2.default.optionFieldsRegEx)) {
      previewData.values = [];
      previewData.multiple = $('[name="multiple"]', field).is(':checked');

      $('.sortable-options li', field).each(function () {
        var option = {};
        option.selected = $('.option-selected', this).is(':checked');
        option.value = $('.option-value', this).val();
        option.label = $('.option-label', this).val();
        previewData.values.push(option);
      });
    }

    previewData = utils.trimObj(previewData);

    previewData.className = _helpers.classNames(field, previewData);
    $('.fld-className', field).val(previewData.className);

    field.data('fieldData', previewData);
    preview = utils.getTemplate(previewData, true);

    utils.empty($prevHolder[0]);
    $prevHolder[0].appendChild(preview);
    preview.dispatchEvent(formBuilder.events.fieldRendered);
  };

  _helpers.debounce = function (func) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var timeout = void 0;
    return function () {
      var context = this;
      var args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  };

  /**
   * Display a custom tooltip for disabled fields.
   *
   * @param  {Object} field
   */
  _helpers.disabledTT = {
    move: function move(e, elem) {
      var fieldOffset = elem.field.getBoundingClientRect();
      var x = e.clientX - fieldOffset.left - 21;
      var y = e.clientY - fieldOffset.top - elem.tt.offsetHeight - 12;
      elem.tt.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    },
    init: function init() {
      formBuilder.stage.querySelectorAll('.disabled-field').forEach(function (field) {
        var title = opts.messages.fieldNonEditable;

        if (title) {
          (function () {
            var tt = utils.markup('p', title, { className: 'frmb-tt' });
            field.appendChild(tt);
            field.addEventListener('mousemove', function (e) {
              _helpers.disabledTT.move(e, { tt: tt, field: field });
            });
          })();
        }
      });
    }
  };

  _helpers.classNames = function (field, previewData) {
    var i = void 0;
    var type = previewData.type;
    var style = previewData.style;
    var className = field[0].querySelector('.fld-className').value;
    var classes = className.split(' ');
    var types = {
      button: 'btn',
      submit: 'btn'
    };

    var primaryType = types[type];

    if (primaryType) {
      if (style) {
        for (i = 0; i < classes.length; i++) {
          var re = new RegExp('(?:^|s)' + primaryType + '-(.*?)(?:s|$)+', 'g');
          var match = classes[i].match(re);
          if (match) {
            classes.splice(i, 1);
          }
        }
        classes.push(primaryType + '-' + style);
      }
      classes.push(primaryType);
    }

    // reverse the array to put custom classes at end,
    // remove any duplicates, convert to string, remove whitespace
    return utils.unique(classes).join(' ').trim();
  };

  /**
   * Closes and open dialog
   *
   * @param  {Object} overlay Existing overlay if there is one
   * @param  {Object} dialog  Existing dialog
   */
  _helpers.closeConfirm = function (overlay, dialog) {
    if (!overlay) {
      overlay = document.getElementsByClassName('form-builder-overlay')[0];
    }
    if (!dialog) {
      dialog = document.getElementsByClassName('form-builder-dialog')[0];
    }
    overlay.classList.remove('visible');
    dialog.remove();
    overlay.remove();
    document.dispatchEvent(formBuilder.events.modalClosed);
  };

  /**
   * Returns the layout data based on controlPosition option
   * @param  {String} controlPosition 'left' or 'right'
   * @return {Object} layout object
   */
  _helpers.editorLayout = function (controlPosition) {
    var layoutMap = {
      left: {
        stage: 'pull-right',
        controls: 'pull-left'
      },
      right: {
        stage: 'pull-left',
        controls: 'pull-right'
      }
    };

    return layoutMap[controlPosition] ? layoutMap[controlPosition] : '';
  };

  /**
   * Adds overlay to the page. Used for modals.
   * @return {Object} DOM Object
   */
  _helpers.showOverlay = function () {
    var overlay = utils.markup('div', null, {
      className: 'form-builder-overlay'
    });
    document.body.appendChild(overlay);
    overlay.classList.add('visible');

    overlay.onclick = function () {
      _helpers.closeConfirm(overlay);
    };

    return overlay;
  };

  /**
   * Custom confirmation dialog
   *
   * @param  {Object}  message   Content to be displayed in the dialog
   * @param  {Func}  yesAction callback to fire if they confirm
   * @param  {Boolean} coords    location to put the dialog
   * @param  {String}  className Custom class to be added to the dialog
   * @return {Object}            Reference to the modal
   */
  _helpers.confirm = function (message, yesAction) {
    var coords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var m = utils.markup;
    var overlay = _helpers.showOverlay();
    var yes = m('button', opts.messages.yes, {
      className: 'yes btn btn-success btn-sm'
    });
    var no = m('button', opts.messages.no, {
      className: 'no btn btn-danger btn-sm'
    });

    no.onclick = function () {
      _helpers.closeConfirm(overlay);
    };

    yes.onclick = function () {
      yesAction();
      _helpers.closeConfirm(overlay);
    };

    var btnWrap = m('div', [no, yes], { className: 'button-wrap' });

    className = 'form-builder-dialog ' + className;

    var miniModal = m('div', [message, btnWrap], { className: className });
    if (!coords) {
      coords = {
        pageX: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2
      };
      miniModal.style.position = 'fixed';
    } else {
      miniModal.classList.add('positioned');
    }

    miniModal.style.left = coords.pageX + 'px';
    miniModal.style.top = coords.pageY + 'px';

    document.body.appendChild(miniModal);

    yes.focus();
    return miniModal;
  };

  /**
   * Popup dialog the does not require confirmation.
   * @param  {String|DOM|Array}  content
   * @param  {Boolean} coords    false if no coords are provided. Without coordinates
   *                             the popup will appear center screen.
   * @param  {String}  className classname to be added to the dialog
   * @return {Object}            dom
   */
  _helpers.dialog = function (content) {
    var coords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    _helpers.showOverlay();

    className = 'form-builder-dialog ' + className;

    var miniModal = utils.markup('div', content, { className: className });
    if (!coords) {
      coords = {
        pageX: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2
      };
      miniModal.style.position = 'fixed';
    } else {
      miniModal.classList.add('positioned');
    }

    miniModal.style.left = coords.pageX + 'px';
    miniModal.style.top = coords.pageY + 'px';

    document.body.appendChild(miniModal);

    document.dispatchEvent(formBuilder.events.modalOpened);

    if (className.indexOf('data-dialog') !== -1) {
      document.dispatchEvent(formBuilder.events.viewData);
    }

    return miniModal;
  };

  /**
   * Removes all fields from the form
   * @param {Boolean} animate whether to animate or not
   */
  _helpers.removeAllfields = function () {
    var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var form = formBuilder.stage;
    var fields = form.querySelectorAll('li.form-field');
    var markEmptyArray = [];

    if (!fields.length) {
      return false;
    }

    if (opts.prepend) {
      markEmptyArray.push(true);
    }

    if (opts.append) {
      markEmptyArray.push(true);
    }

    if (!markEmptyArray.some(function (elem) {
      return elem === true;
    })) {
      form.parentElement.classList.add('empty');
      form.parentElement.dataset.content = opts.messages.getStarted;
    }

    if (animate) {
      form.classList.add('removing');
      var outerHeight = 0;
      fields.forEach(function (field) {
        return outerHeight += field.offsetHeight + 3;
      });
      fields[0].style.marginTop = -outerHeight + 'px';
      setTimeout(function () {
        _dom2.default.empty(form).classList.remove('removing');
        _helpers.save();
      }, 400);
    } else {
      _dom2.default.empty(form);
      _helpers.save();
    }
  };

  /**
   * If user re-orders the elements their order should be saved.
   *
   * @param {Object} $cbUL our list of elements
   */
  _helpers.setFieldOrder = function ($cbUL) {
    if (!opts.sortableControls) {
      return false;
    }
    var fieldOrder = {};
    $cbUL.children().each(function (index, element) {
      fieldOrder[index] = $(element).data('attrs').type;
    });
    if (window.sessionStorage) {
      window.sessionStorage.setItem('fieldOrder', window.JSON.stringify(fieldOrder));
    }
  };

  /**
   * Reorder the controls if the user has previously ordered them.
   *
   * @param  {Array} frmbFields
   * @return {Array} ordered fields
   */
  _helpers.orderFields = function (frmbFields) {
    var fieldOrder = false;
    var newOrderFields = [];

    if (window.sessionStorage) {
      if (opts.sortableControls) {
        fieldOrder = window.sessionStorage.getItem('fieldOrder');
      } else {
        window.sessionStorage.removeItem('fieldOrder');
      }
    }

    if (!fieldOrder) {
      var controlOrder = opts.controlOrder.concat(frmbFields.map(function (field) {
        return field.attrs.type;
      }));
      fieldOrder = utils.unique(controlOrder);
    } else {
      fieldOrder = window.JSON.parse(fieldOrder);
      fieldOrder = (0, _keys2.default)(fieldOrder).map(function (i) {
        return fieldOrder[i];
      });
    }

    fieldOrder.forEach(function (fieldType) {
      var field = frmbFields.filter(function (field) {
        return field.attrs.type === fieldType;
      })[0];
      newOrderFields.push(field);
    });

    return newOrderFields.filter(Boolean);
  };

  /**
   * Close fields being editing
   * @param  {Object} stage
   */
  _helpers.closeAllEdit = function () {
    var fields = $('> li.editing', formBuilder.stage);
    var toggleBtns = $('.toggle-form', formBuilder.stage);
    var editPanels = $('.frm-holder', fields);

    toggleBtns.removeClass('open');
    fields.removeClass('editing');
    $('.prev-holder', fields).show();
    editPanels.hide();
  };

  /**
   * Toggles the edit mode for the given field
   * @param  {String} fieldId
   * @param  {Boolean} animate
   */
  _helpers.toggleEdit = function (fieldId) {
    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var field = document.getElementById(fieldId);
    var toggleBtn = $('.toggle-form', field);
    var editPanel = $('.frm-holder', field);
    field.classList.toggle('editing');
    toggleBtn.toggleClass('open');
    if (animate) {
      $('.prev-holder', field).slideToggle(250);
      editPanel.slideToggle(250);
    } else {
      $('.prev-holder', field).toggle();
      editPanel.toggle();
    }
  };

  /**
   * Controls follow scroll to the bottom of the editor
   */
  _helpers.stickyControls = function () {
    var $cbWrap = $(formBuilder.controls).parent();
    var $stageWrap = $(formBuilder.stage).parent();
    var cbWidth = $cbWrap.width();
    var cbPosition = formBuilder.controls.getBoundingClientRect();

    $(window).scroll(function (evt) {
      var scrollTop = $(evt.target).scrollTop();
      var offsetDefaults = {
        top: 5,
        bottom: 'auto',
        right: 'auto',
        left: cbPosition.left
      };

      var offset = opts.stickyControls.offset || offsetDefaults;

      if (scrollTop > $stageWrap.offset().top) {
        var style = {
          position: 'fixed',
          width: cbWidth
        };

        var cbStyle = (0, _assign2.default)(style, offset);

        var cbOffset = $cbWrap.offset();
        var stageOffset = $stageWrap.offset();
        var cbBottom = cbOffset.top + $cbWrap.height();
        var stageBottom = stageOffset.top + $stageWrap.height();

        if (cbBottom > stageBottom && cbOffset.top !== stageOffset.top) {
          $cbWrap.css({
            position: 'absolute',
            top: 'auto',
            bottom: 0,
            right: 0,
            left: 'auto'
          });
        }

        if (cbBottom < stageBottom || cbBottom === stageBottom && cbOffset.top > scrollTop) {
          $cbWrap.css(cbStyle);
        }
      } else {
        formBuilder.controls.parentElement.removeAttribute('style');
      }
    });
  };

  /**
   * Open a dialog with the form's data
   */
  _helpers.showData = function () {
    var m = utils.markup;
    var data = utils.escapeHtml(formBuilder.formData);
    var code = m('code', data, { className: 'formData-' + opts.dataType });

    _helpers.dialog(m('pre', code), null, 'data-dialog');
  };

  /**
   * Remove a field from the stage
   * @param  {String}  fieldID ID of the field to be removed
   * @return {Boolean} fieldRemoved returns true if field is removed
   */
  _helpers.removeField = function (fieldID) {
    var fieldRemoved = false;
    var form = document.getElementById(formBuilder.formID);
    var fields = form.getElementsByClassName('form-field');

    if (!fields.length) {
      console.warn('No fields to remove');
      return false;
    }

    if (!fieldID) {
      var availableIds = [].slice.call(fields).map(function (field) {
        return field.id;
      });
      console.warn('fieldID required to use `removeField` action.');
      console.warn('Available IDs: ' + availableIds.join(', '));
    }

    var field = document.getElementById(fieldID);
    var $field = $(document.getElementById(fieldID));
    if (!field) {
      console.warn('Field not found');
      return false;
    }

    $field.slideUp(250, function () {
      $field.removeClass('deleting');
      $field.remove();
      fieldRemoved = true;
      _helpers.save();
      if (!form.childNodes.length) {
        var stageWrap = form.parentElement;
        stageWrap.classList.add('empty');
        stageWrap.dataset.content = opts.messages.getStarted;
      }
    });

    document.dispatchEvent(formBuilder.events.fieldRemoved);
    return fieldRemoved;
  };

  _helpers.processActionButtons = function (buttonData) {
    var m = utils.markup;
    var label = buttonData.label,
        events = buttonData.events,
        attrs = (0, _objectWithoutProperties3.default)(buttonData, ['label', 'events']);

    var button = m('button', label, attrs);

    if (events) {
      var _loop = function _loop(event) {
        if (events.hasOwnProperty(event)) {
          button.addEventListener(event, function (evt) {
            return events[event](evt);
          });
        }
      };

      for (var event in events) {
        _loop(event);
      }
    }

    return button;
  };

  _helpers.processSubtypes = function (subtypeOpts) {
    var subtypeFormat = function subtypeFormat(subtype) {
      return {
        label: i18n.get(subtype),
        value: subtype
      };
    };

    var defaultSubtypes = {
      text: ['text', 'password', 'email', 'color', 'tel'],
      header: ['h1', 'h2', 'h3'],
      button: ['button', 'submit', 'reset'],
      paragraph: ['p', 'address', 'blockquote', 'canvas', 'output'],
      textarea: ['textarea', 'quill']
    };

    var subtypes = utils.merge(defaultSubtypes, subtypeOpts);

    for (var subtype in subtypes) {
      if (subtypes.hasOwnProperty(subtype)) {
        subtypes[subtype] = subtypes[subtype].map(subtypeFormat);
      }
    }

    return subtypes;
  };

  return _helpers;
}

module.exports = helpers;

},{"./dom":123,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/asyncToGenerator":10,"babel-runtime/helpers/objectWithoutProperties":11,"babel-runtime/regenerator":15}],127:[function(require,module,exports){
'use strict';

var kcToggle = function kcToggle() {
  var Toggle = function Toggle(element, options) {
    var defaults = {
      theme: 'fresh',
      messages: {
        off: 'Off',
        on: 'On'
      }
    };

    var opts = $.extend(defaults, options);
    var $kcToggle = $('<div class="kc-toggle"/>').insertAfter(element).append(element);

    $kcToggle.toggleClass('on', element.is(':checked'));

    var kctOn = '<div class="kct-on">' + opts.messages.on + '</div>';
    var kctOff = '<div class="kct-off">' + opts.messages.off + '</div>';
    var kctHandle = '<div class="kct-handle"></div>';
    var kctInner = '<div class="kct-inner">' + kctOn + kctHandle + kctOff + '</div>';

    $kcToggle.append(kctInner);

    $kcToggle.click(function (evt) {
      element.attr('checked', !element.attr('checked'));
      $kcToggle.toggleClass('on');
    });
  };

  jQuery.fn.kcToggle = function (options) {
    var toggle = this;
    return toggle.each(function (i) {
      var element = $(toggle[i]);
      if (element.data('kcToggle')) {
        return;
      }
      var kcToggle = new Toggle(element, options);
      element.data('kcToggle', kcToggle);
    });
  };
};

module.exports = kcToggle();

},{}],128:[function(require,module,exports){
'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Polyfills for older browsers and added functionality
 * @return {void}
 */
function polyfills() {
  // Element.remove() polyfill
  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  // Event polyfill
  if (typeof Event !== 'function') {
    (function () {
      window.Event = function (evt) {
        var event = document.createEvent('Event');
        event.initEvent(evt, true, true);
        return event;
      };
    })();
  }

  // Object.assign polyfill
  if (typeof _assign2.default != 'function') {
    Object.assign = function (target) {
      'use strict';

      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      target = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source != null) {
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
  }
}

module.exports = polyfills();

},{"babel-runtime/core-js/object/assign":5}],129:[function(require,module,exports){
'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Cross file utilities for working with arrays,
 * sorting and other fun stuff
 * @return {Object} fbUtils
 */
// function utils() {
var fbUtils = {};
window.fbLoaded = {
  js: [],
  css: []
};
window.fbEditors = {
  quill: {},
  tinymce: {}
};

// cleaner syntax for testing indexOf element
fbUtils.inArray = function (needle, haystack) {
  return haystack.indexOf(needle) !== -1;
};

/**
 * Remove null or undefined values
 * @param  {Object} attrs {attrName: attrValue}
 * @return {Object}       Object trimmed of null or undefined values
 */
fbUtils.trimObj = function (attrs) {
  var xmlRemove = [null, undefined, '', false, 'false'];
  for (var attr in attrs) {
    if (fbUtils.inArray(attrs[attr], xmlRemove)) {
      delete attrs[attr];
    } else if (Array.isArray(attrs[attr])) {
      if (!attrs[attr].length) {
        delete attrs[attr];
      }
    }
  }

  return attrs;
};

/**
 * Test if attribute is a valid HTML attribute
 * @param  {String} attr
 * @return {Boolean}
 */
fbUtils.validAttr = function (attr) {
  var invalid = ['values', 'enableOther', 'other', 'label',
  // 'style',
  'subtype'];
  return !fbUtils.inArray(attr, invalid);
};

/**
 * Convert an attrs object into a string
 *
 * @param  {Object} attrs object of attributes for markup
 * @return {string}
 */
fbUtils.attrString = function (attrs) {
  var attributes = [];

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr) && fbUtils.validAttr(attr)) {
      attr = fbUtils.safeAttr(attr, attrs[attr]);
      attributes.push(attr.name + attr.value);
    }
  }
  return attributes.join(' ');
};

/**
 * Convert attributes to markup safe strings
 * @param  {String} name  attribute name
 * @param  {String} value attribute value
 * @return {Object}       {attrName: attrValue}
 */
fbUtils.safeAttr = function (name, value) {
  name = fbUtils.safeAttrName(name);
  var valString = void 0;

  if (value) {
    if (Array.isArray(value)) {
      valString = fbUtils.escapeAttr(value.join(' '));
    } else {
      if (typeof value === 'boolean') {
        value = value.toString();
      }
      valString = fbUtils.escapeAttr(value.replace(',', ' ').trim());
    }
  }

  value = value ? '="' + valString + '"' : '';
  return {
    name: name,
    value: value
  };
};

fbUtils.safeAttrName = function (name) {
  var safeAttr = {
    className: 'class'
  };

  return safeAttr[name] || fbUtils.hyphenCase(name);
};

/**
 * Convert strings into lowercase-hyphen
 *
 * @param  {String} str
 * @return {String}
 */
fbUtils.hyphenCase = function (str) {
  str = str.replace(/[^\w\s\-]/gi, '');
  str = str.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });

  return str.replace(/\s/g, '-').replace(/^-+/g, '');
};

/**
 * convert a hyphenated string to camelCase
 * @param  {String} str
 * @return {String}
 */
fbUtils.camelCase = function (str) {
  return str.replace(/-([a-z])/g, function (m, w) {
    return w.toUpperCase();
  });
};

/**
 * Determine content type
 * @param  {Node | String | Array | Object} content
 * @return {String}                         contentType for mapping
 */
fbUtils.contentType = function (content) {
  var type = typeof content === 'undefined' ? 'undefined' : (0, _typeof3.default)(content);
  if (content instanceof Node || content instanceof HTMLElement) {
    type = 'node';
  } else if (Array.isArray(content)) {
    type = 'array';
  }

  return type;
};

/**
 * Bind events to an element
 * @param  {Object} element DOM element
 * @param  {Object} events  object full of events eg. {click: evt => callback}
 * @return {void}
 */
fbUtils.bindEvents = function (element, events) {
  if (events) {
    var _loop = function _loop(event) {
      if (events.hasOwnProperty(event)) {
        element.addEventListener(event, function (evt) {
          return events[event](evt);
        });
      }
    };

    for (var event in events) {
      _loop(event);
    }
  }
};

/**
 * Generate markup wrapper where needed
 *
 * @param  {string}              tag
 * @param  {String|Array|Object} content we wrap this
 * @param  {Object}              attrs
 * @return {Object} DOM Element
 */
fbUtils.markup = function (tag) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var contentType = fbUtils.contentType(content);
  var events = attributes.events,
      attrs = (0, _objectWithoutProperties3.default)(attributes, ['events']);

  var field = document.createElement(tag);

  var appendContent = {
    string: function string(content) {
      field.innerHTML += content;
    },
    object: function object(config) {
      var tag = config.tag,
          content = config.content,
          data = (0, _objectWithoutProperties3.default)(config, ['tag', 'content']);

      return field.appendChild(fbUtils.markup(tag, content, data));
    },
    node: function node(content) {
      return field.appendChild(content);
    },
    array: function array(content) {
      for (var i = 0; i < content.length; i++) {
        contentType = fbUtils.contentType(content[i]);
        appendContent[contentType](content[i]);
      }
    },
    function: function _function(content) {
      content = content();
      contentType = fbUtils.contentType(content);
      appendContent[contentType](content);
    },
    undefined: function undefined() {
      console.error(tag, content, attributes);
    }
  };

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      var name = fbUtils.safeAttrName(attr);
      field.setAttribute(name, attrs[attr]);
    }
  }

  if (content) {
    appendContent[contentType].call(this, content);
  }

  fbUtils.bindEvents(field, events);

  return field;
};
var m = fbUtils.markup;

/**
 * Convert html element attributes to key/value object
 * @param  {Object} elem DOM element
 * @return {Object} ex: {attrName: attrValue}
 */
fbUtils.parseAttrs = function (elem) {
  var attrs = elem.attributes;
  var data = {};
  fbUtils.forEach(attrs, function (attr) {
    var attrVal = attrs[attr].value;
    if (attrVal.match(/false|true/g)) {
      attrVal = attrVal === 'true';
    } else if (attrVal.match(/undefined/g)) {
      attrVal = undefined;
    }

    if (attrVal) {
      data[attrs[attr].name] = attrVal;
    }
  });

  return data;
};

/**
 * Convert field options to optionData
 * @param  {Object} field  DOM element
 * @return {Array}         optionData array
 */
fbUtils.parseOptions = function (field) {
  var options = field.getElementsByTagName('option');
  var optionData = {};
  var data = [];

  if (options.length) {
    for (var i = 0; i < options.length; i++) {
      optionData = fbUtils.parseAttrs(options[i]);
      optionData.label = options[i].textContent;
      data.push(optionData);
    }
  }

  return data;
};

/**
 * Parse XML formData
 * @param  {String} xmlString
 * @return {Array}            formData array
 */
fbUtils.parseXML = function (xmlString) {
  var parser = new window.DOMParser();
  var xml = parser.parseFromString(xmlString, 'text/xml');
  var formData = [];

  if (xml) {
    var fields = xml.getElementsByTagName('field');
    for (var i = 0; i < fields.length; i++) {
      var fieldData = fbUtils.parseAttrs(fields[i]);

      if (fields[i].children && fields[i].children.length) {
        fieldData.values = fbUtils.parseOptions(fields[i]);
      }

      formData.push(fieldData);
    }
  }

  return formData;
};

/**
 * Converts escaped HTML into usable HTML
 * @param  {String} html escaped HTML
 * @return {String}      parsed HTML
 */
fbUtils.parsedHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.innerHTML = html;
  return escapeElement.textContent;
};

/**
 * Escape markup so it can be displayed rather than rendered
 * @param  {String} html markup
 * @return {String}      escaped html
 */
fbUtils.escapeHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.textContent = html;
  return escapeElement.innerHTML;
};

// Escape an attribute
fbUtils.escapeAttr = function (str) {
  var match = {
    '"': '&quot;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  var replaceTag = function replaceTag(tag) {
    return match[tag] || tag;
  };

  return typeof str === 'string' ? str.replace(/["&<>]/g, replaceTag) : str;
};

// Escape attributes
fbUtils.escapeAttrs = function (attrs) {
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = fbUtils.escapeAttr(attrs[attr]);
    }
  }

  return attrs;
};

// forEach that can be used on nodeList
fbUtils.forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

/**
 * Remove duplicates from an array of elements
 * @param  {Array} array  array with possible duplicates
 * @return {Array}        array with only unique values
 */
fbUtils.unique = function (array) {
  return array.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
};

fbUtils.makeLabel = function (data) {
  var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var labelContents = [document.createTextNode(label)];

  if (data.hasOwnProperty('required')) {
    labelContents.push(m('span', '*', { className: 'required' }));
  }

  if (data.type !== 'hidden') {
    if (description) {
      labelContents.push(m('span', '?', {
        className: 'tooltip-element',
        tooltip: description
      }));
    }
  }

  return m('label', labelContents, {
    for: data.id,
    className: 'fb-' + data.type + '-label'
  });
};

fbUtils.templateMap = function (templates, type, fallback) {
  var template = void 0;
  var templateMap = new _map2.default(templates);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(templateMap), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref3 = _step.value;

      var _ref2 = (0, _slicedToArray3.default)(_ref3, 2);

      var key = _ref2[0];
      var value = _ref2[1];

      if (Array.isArray(key)) {
        if (fbUtils.inArray(type, key)) {
          template = value;
          break;
        }
      } else if (type === key) {
        template = value;
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (!template) {
    template = fallback;
  }

  return template();
};

fbUtils.autocompleteTemplate = function (fieldData) {
  var values = fieldData.values,
      type = fieldData.type,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['values', 'type']);

  var fauxEvents = {
    input: function input(evt) {
      var list = document.getElementById(data.id + '-list');
      _dom2.default.filter(list.querySelectorAll('li'), evt.target.value);
      if (!evt.target.value) {
        list.style.display = 'none';
      } else {
        list.style.display = 'block';
      }
    }
  };
  var fauxAttrs = (0, _assign2.default)({}, data, {
    id: data.id + '-input',
    events: fauxEvents
  });
  var hiddenAttrs = (0, _assign2.default)({}, data, { type: 'hidden' });
  delete fauxAttrs.name;
  var field = [m('input', null, fauxAttrs), m('input', null, hiddenAttrs)];

  var options = values.map(function (optionData, i) {
    var label = optionData.label;
    var config = {
      events: {
        click: function click() {
          var list = document.getElementById(data.id + '-list');
          var field = document.getElementById(data.id);
          field.value = optionData.value;
          field.previousSibling.value = optionData.label;
          list.style.display = 'none';
        }
      },
      value: optionData.value
    };
    return m('li', label, config);
  });

  field.push(m('ul', options, { id: data.id + '-list', className: 'fb-' + type + '-list' }));

  var onRender = function onRender(evt) {};

  return { field: field, onRender: onRender };
};

/**
 * Generate DOM elements for select, checkbox-group and radio-group.
 * @param  {Object} fieldData
 * @return {Object}           DOM elements
 */
fbUtils.selectTemplate = function (fieldData) {
  var options = [];
  var values = fieldData.values,
      placeholder = fieldData.placeholder,
      type = fieldData.type,
      inline = fieldData.inline,
      other = fieldData.other,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['values', 'placeholder', 'type', 'inline', 'other']);

  var optionType = type.replace('-group', '');
  var isSelect = type === 'select';

  if (values) {
    if (placeholder && isSelect) {
      options.push(m('option', placeholder, {
        disabled: null,
        selected: null
      }));
    }

    for (var i = 0; i < values.length; i++) {
      var _values$i = values[i],
          _values$i$label = _values$i.label,
          label = _values$i$label === undefined ? '' : _values$i$label,
          optionAttrs = (0, _objectWithoutProperties3.default)(_values$i, ['label']);


      optionAttrs.id = data.id + '-' + i;
      if (!optionAttrs.selected || placeholder) {
        delete optionAttrs.selected;
      }

      if (isSelect) {
        var o = m('option', document.createTextNode(label), optionAttrs);
        options.push(o);
      } else {
        var wrapperClass = optionType;
        if (inline) {
          wrapperClass += '-inline';
        }
        optionAttrs.type = optionType;
        if (optionAttrs.selected) {
          optionAttrs.checked = null;
          delete optionAttrs.selected;
        }
        var input = m('input', null, (0, _assign2.default)({}, data, optionAttrs));
        var inputLabel = m('label', [input, label], { for: optionAttrs.id });
        var wrapper = m('div', inputLabel, { className: wrapperClass });
        options.push(wrapper);
      }
    }

    if (!isSelect && other) {
      (function () {
        var otherOptionAttrs = {
          id: data.id + '-other',
          className: data.className + ' other-option',
          events: {
            click: function click() {
              return fbUtils.otherOptionCB(otherOptionAttrs.id);
            }
          }
        };
        // let label = mi18n.current.other;
        var wrapperClass = optionType;
        if (inline) {
          wrapperClass += '-inline';
        }

        var optionAttrs = (0, _assign2.default)({}, data, otherOptionAttrs);
        optionAttrs.type = optionType;

        var otherValAttrs = {
          type: 'text',
          name: data.name,
          id: otherOptionAttrs.id + '-value',
          className: 'other-val'
        };
        var otherInputs = [m('input', null, optionAttrs), document.createTextNode('Other'), m('input', null, otherValAttrs)];
        var inputLabel = m('label', otherInputs, { for: optionAttrs.id });
        var wrapper = m('div', inputLabel, { className: wrapperClass });
        options.push(wrapper);
      })();
    }
  }

  var templates = [['select', function () {
    return m(optionType, options, data);
  }], [['checkbox-group', 'radio-group'], function () {
    return m('div', options, { className: type });
  }]];

  return fbUtils.templateMap(templates, type);
};

fbUtils.defaultField = function (fieldData) {
  var label = fieldData.label,
      description = fieldData.description,
      subtype = fieldData.subtype,
      type = fieldData.type,
      id = fieldData.id,
      isPreview = fieldData.isPreview,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['label', 'description', 'subtype', 'type', 'id', 'isPreview']);

  if (id) {
    if (isPreview) {
      data.name = data.name + '-preview';
    }
    data.id = data.name;
  }
  if (description) {
    data.title = description;
  }
  if (subtype) {
    type = subtype;
  }

  var field = {
    field: m(type, label, data),
    onRender: fbUtils.noop
  };

  return function () {
    return field;
  };
};

/**
 * Loads an array of scripts using jQuery's `getScript`
 * @param  {Array|String}  scriptScr    scripts
 * @param  {String} path   optional to load form
 * @return {Promise}       a promise
 */
fbUtils.getScripts = function (scriptScr, path) {
  var $ = jQuery;
  var _arr = [];

  if (!Array.isArray(scriptScr)) {
    scriptScr = [scriptScr];
  }

  if (!fbUtils.isCached(scriptScr)) {
    _arr = $.map(scriptScr, function (src) {
      var options = {
        dataType: 'script',
        cache: true,
        url: (path || '') + src
      };
      return $.ajax(options).done(function () {
        return window.fbLoaded.js.push(src);
      });
    });
  }

  _arr.push($.Deferred(function (deferred) {
    return $(deferred.resolve);
  }));

  return $.when.apply($, (0, _toConsumableArray3.default)(_arr));
};

/**
 * Checks if remote resource is already loaded
 * @param  {String|Array} src  url of remote script or css
 * @param  {String}       type       'js' or 'css'
 * @return {Boolean}      isCached
 */
fbUtils.isCached = function (src) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js';

  var isCached = false;
  var cache = window.fbLoaded[type];
  if (Array.isArray(src)) {
    isCached = src.every(function (s) {
      return fbUtils.inArray(s, cache);
    });
  } else {
    isCached = fbUtils.inArray(src, cache);
  }
  return isCached;
};

/**
 * Appends stylesheets to the head
 * @param  {Array} scriptScr
 * @param  {String} path
 * @return {void}
 */
fbUtils.getStyles = function (scriptScr, path) {
  if (fbUtils.isCached(scriptScr, 'css')) {
    return;
  }
  var appendStyle = function appendStyle(href) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
    window.fbLoaded.css.push(href);
  };
  scriptScr.forEach(function (src) {
    return appendStyle((path || '') + src);
  });
};

fbUtils.longTextTemplate = function (data) {
  var _data$value = data.value,
      value = _data$value === undefined ? '' : _data$value,
      attrs = (0, _objectWithoutProperties3.default)(data, ['value']);

  var template = {
    field: m('textarea', fbUtils.parsedHtml(value), attrs)
  };
  var editors = {
    tinymce: {
      js: ['//cdn.tinymce.com/4/tinymce.min.js'],
      onRender: function onRender(evt) {
        if (window.tinymce.editors[data.id]) {
          window.tinymce.editors[data.id].remove();
        }
        window.tinymce.init({
          target: template.field,
          height: 250,
          plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table contextmenu paste code'],
          toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
        });
      }
    },
    quill: {
      js: ['//cdn.quilljs.com/1.1.3/quill.js'],
      css: ['//cdn.quilljs.com/1.1.3/quill.snow.css'],
      onRender: function onRender(evt) {
        var Delta = window.Quill.import('delta');
        window.fbEditors.quill[data.id] = {};
        var editor = window.fbEditors.quill[data.id];
        editor.instance = new window.Quill(template.field, {
          modules: {
            toolbar: [[{ 'header': [1, 2, false] }], ['bold', 'italic', 'underline'], ['code-block']]
          },
          placeholder: attrs.placeholder || '',
          theme: 'snow'
        });
        editor.data = new Delta();
        if (value) {
          editor.instance.setContents(window.JSON.parse(fbUtils.parsedHtml(value)));
        }
        editor.instance.on('text-change', function (delta) {
          editor.data = editor.data.compose(delta);
        });
      }
    }
  };

  if (data.type !== 'textarea') {
    template.onRender = editors[data.type].onRender;
  }
  if (data.type === 'quill') {
    template.field = m('div', null, attrs);
  }

  var onRender = function onRender() {
    if (editors[data.type]) {
      document.removeEventListener('fieldRendered', onRender);

      if (editors[data.type].css) {
        fbUtils.getStyles(editors[data.type].css);
      }
      if (editors[data.type].js && !fbUtils.isCached(editors[data.type].js)) {
        fbUtils.getScripts(editors[data.type].js).done(template.onRender);
      } else {
        template.onRender();
      }
    }
  };

  return { field: template.field, onRender: onRender };
};

fbUtils.getTemplate = function (fieldData) {
  var isPreview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var label = fieldData.label,
      description = fieldData.description,
      subtype = fieldData.subtype,
      labelPosition = fieldData.labelPosition,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['label', 'description', 'subtype', 'labelPosition']);

  var template = void 0;
  var field = void 0;

  if (isPreview) {
    data.name = data.name + '-preview';
  }
  data.id = data.name;

  if (subtype) {
    data.type = subtype;
  }

  if (data.multiple || data.type === 'checkbox-group') {
    data.name = data.name + '[]';
  }

  if (data.required) {
    data.required = null;
    data['aria-required'] = 'true';
  }

  var fieldLabel = fbUtils.makeLabel(data, label, description);

  var templates = [[['autocomplete'], function () {
    var autocomplete = fbUtils.autocompleteTemplate(data);
    var template = {
      field: [fieldLabel, autocomplete.field],
      onRender: autocomplete.onRender
    };
    return template;
  }], [['text', 'password', 'email', 'number', 'file', 'color', 'date', 'tel'], function () {
    var template = {
      field: [fieldLabel, m('input', null, data)],
      onRender: fbUtils.noop
    };
    return template;
  }], [['button', 'submit', 'reset'], function () {
    var template = {
      field: m('button', label, data),
      onRender: fbUtils.noop
    };
    return template;
  }], [['select', 'checkbox-group', 'radio-group'], function () {
    var field = fbUtils.selectTemplate(data);
    var template = {
      field: [fieldLabel, field],
      onRender: fbUtils.noop
    };
    return template;
  }], ['checkbox', function () {
    var field = [m('input', null, data)];
    if (labelPosition === 'beforeInput') {
      field.unshift(fieldLabel, ' ');
    } else {
      field.push(' ', fieldLabel);
    }
    var template = {
      field: field,
      onRender: function onRender() {
        if (data.toggle) {
          $(document.getElementById(data.id)).kcToggle();
        }
      }
    };
    return template;
  }], [['textarea', 'tinymce', 'quill'], function () {
    var field = fbUtils.longTextTemplate(data);
    var template = {
      field: [fieldLabel, field.field],
      onRender: field.onRender
    };
    return template;
  }]];

  template = fbUtils.templateMap(templates, data.type, fbUtils.defaultField(fieldData) // fallback
  );

  if (data.type !== 'hidden') {
    var wrapperAttrs = {};
    if (data.id) {
      wrapperAttrs.className = 'fb-' + data.type + ' form-group field-' + data.id;
    }
    field = fbUtils.markup('div', template.field, wrapperAttrs);
  } else {
    field = fbUtils.markup('input', null, data);
  }

  field.addEventListener('fieldRendered', template.onRender);

  return field;
};

/**
 * Callback for other option.
 * Toggles the hidden text area for "other" option.
 * @param  {String} otherId id of the "other" option input
 */
fbUtils.otherOptionCB = function (otherId) {
  var otherInput = document.getElementById(otherId);
  var otherInputValue = document.getElementById(otherId + '-value');

  if (otherInput.checked) {
    otherInputValue.style.display = 'inline-block';
  } else {
    otherInputValue.style.display = 'none';
  }
};

/**
 * Capitalizes a string
 * @param  {String} str uncapitalized string
 * @return {String} str capitalized string
 */
fbUtils.capitalize = function (str) {
  return str.replace(/\b\w/g, function (m) {
    return m.toUpperCase();
  });
};

fbUtils.merge = function (obj1, obj2) {
  var mergedObj = (0, _assign2.default)({}, obj1, obj2);
  for (var prop in obj2) {
    if (mergedObj.hasOwnProperty(prop)) {
      if (Array.isArray(obj2[prop])) {
        mergedObj[prop] = Array.isArray(obj1[prop]) ? fbUtils.unique(obj1[prop].concat(obj2[prop])) : obj2[prop];
      } else if ((0, _typeof3.default)(obj2[prop]) === 'object') {
        mergedObj[prop] = fbUtils.merge(obj1[prop], obj2[prop]);
      } else {
        mergedObj[prop] = obj2[prop];
      }
    }
  }
  return mergedObj;
};

/**
 * Util to remove contents of DOM Object
 * @param  {Object} element
 * @return {Object}         element with its children removed
 */
fbUtils.empty = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};

fbUtils.noop = function () {
  return null;
};

module.exports = fbUtils;

},{"./dom":123,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/map":4,"babel-runtime/core-js/object/assign":5,"babel-runtime/helpers/objectWithoutProperties":11,"babel-runtime/helpers/slicedToArray":12,"babel-runtime/helpers/toConsumableArray":13,"babel-runtime/helpers/typeof":14}]},{},[125])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL21pMThuL2Rpc3QvbWkxOG4ubWluLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsInNyYy9qcy9kb20uanMiLCJzcmMvanMvZXZlbnRzLmpzIiwic3JjL2pzL2Zvcm0tYnVpbGRlci5qcyIsInNyYy9qcy9oZWxwZXJzLmpzIiwic3JjL2pzL2tjLXRvZ2dsZS5qcyIsInNyYy9qcy9wb2x5ZmlsbHMuanMiLCJzcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QVEsV0FBUixDQUFvQixRQUFRLFVBQTVCO0FBQ0Q7QUFDRCxTQUFPLE9BQVA7QUFDRCxDQUxEOztBQU9BLFFBQVEsSUFBUixHQUFlO0FBQUEsU0FBTSxJQUFOO0FBQUEsQ0FBZjs7QUFHQSxPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Byb21pc2UgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9wcm9taXNlXCIpO1xuXG52YXIgX3Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvbWlzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgX3Byb21pc2UyLmRlZmF1bHQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfcHJvbWlzZTIuZGVmYXVsdC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiKTtcbiAgICB9KTtcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0l0ZXJhYmxlMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpO1xuXG52YXIgX2lzSXRlcmFibGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJdGVyYWJsZTIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc0l0ZXJhYmxlMy5kZWZhdWx0KShPYmplY3QoYXJyKSkpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5czsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJ2YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyLCBJVEVSQVRPUil7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgYXNjICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFLCAkY3JlYXRlKXtcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWFxuICAgICwgY3JlYXRlICAgICAgICA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcbiAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDBcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuICAgICAgLCB2YWwsIHJlcztcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYoVFlQRSl7XG4gICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaXNBcnJheSAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgU1BFQ0lFUyAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07IiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgYW5JbnN0YW5jZSAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZGVmaW5lZCAgICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIHNldFNwZWNpZXMgID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIGZhc3RLZXkgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXlcbiAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIGZyb20gICAgPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIG1ldGEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIGFuSW5zdGFuY2UgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBkUCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBlYWNoICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgaWYoIURFU0NSSVBUT1JTIHx8IHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FLCAnX2MnKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlO1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRhcmdldFtBRERFUl0sIHRhcmdldCk7XG4gICAgfSk7XG4gICAgZWFjaCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMsdG9KU09OJy5zcGxpdCgnLCcpLGZ1bmN0aW9uKEtFWSl7XG4gICAgICB2YXIgSVNfQURERVIgPSBLRVkgPT0gJ2FkZCcgfHwgS0VZID09ICdzZXQnO1xuICAgICAgaWYoS0VZIGluIHByb3RvICYmICEoSVNfV0VBSyAmJiBLRVkgPT0gJ2NsZWFyJykpaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCBLRVkpO1xuICAgICAgICBpZighSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZignc2l6ZScgaW4gcHJvdG8pZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpOyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTsiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTsiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzOyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59OyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpOyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpXG4gICwgZ2V0SXRlckZuICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pOyIsIiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywge3RvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpfSk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsIi8qIVxuICogbWkxOG4gLSBodHRwczovL2dpdGh1Yi5jb20vRHJhZ2dhYmxlL21pMThuXG4gKiBWZXJzaW9uOiAwLjMuMlxuICogQXV0aG9yOiBLZXZpbiBDaGFwcGVsbCA8a2V2aW4uYi5jaGFwcGVsbEBnbWFpbC5jb20+IChodHRwOi8va2V2aW4tY2hhcHBlbGwuY29tKVxuICovXG5tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmxvYWRlZD0hMCxvLmV4cG9ydHN9dmFyIGU9e307cmV0dXJuIG4ubT10LG4uYz1lLG4ucD1cImRpc3QvXCIsbigwKX0oW2Z1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7XCJkZWZhdWx0XCI6dH19T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZSg0NSksdT1yKG8pLGk9ZSgzOSksZj1yKGkpLGM9ZSg0MyksYT1yKGMpLHM9ZSg0NCksbD1yKHMpLHA9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7KDAsYVtcImRlZmF1bHRcIl0pKHRoaXMsdCk7dmFyIG49e2xvY2F0aW9uOlwiYXNzZXRzL2xhbmcvXCIsbGFuZ3M6W1wiZW4tVVNcIixcImVzLUVTXCJdLGxvY2FsZTpcImVuLVVTXCIscHJlbG9hZGVkOnt9fSxlPXRoaXM7ZS5pbml0PWZ1bmN0aW9uKHQpe3JldHVybiBlLmNvbmZpZz0oMCxmW1wiZGVmYXVsdFwiXSkoe30sbix0KSxlLmxhbmdzPSgwLGZbXCJkZWZhdWx0XCJdKSh7fSxlLmNvbmZpZy5wcmVsb2FkZWQpLGUubG9jYWxlPWUuY29uZmlnLmxvY2FsZXx8ZS5jb25maWcubGFuZ3NbMF0sZS5zZXRDdXJyZW50KGUubG9jYWxlKX19cmV0dXJuKDAsbFtcImRlZmF1bHRcIl0pKHQsW3trZXk6XCJnZXRWYWx1ZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmN1cnJlbnQmJnRoaXMuY3VycmVudFt0XXx8dH19LHtrZXk6XCJtYWtlU2FmZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPXtcIntcIjpcIlxcXFx7XCIsXCJ9XCI6XCJcXFxcfVwiLFwifFwiOlwiXFxcXHxcIn07cmV0dXJuIHQ9dC5yZXBsYWNlKC9cXHt8XFx9fFxcfC9nLGZ1bmN0aW9uKHQpe3JldHVybiBuW3RdfSksbmV3IFJlZ0V4cCh0LFwiZ1wiKX19LHtrZXk6XCJwdXRcIix2YWx1ZTpmdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmN1cnJlbnRbdF09bn19LHtrZXk6XCJnZXRcIix2YWx1ZTpmdW5jdGlvbih0LG4pe3ZhciBlPXRoaXMscj10aGlzLmdldFZhbHVlKHQpLG89ci5tYXRjaCgvXFx7W15cXH1dKz9cXH0vZyksaT12b2lkIDA7aWYobiYmbylpZihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBuP1widW5kZWZpbmVkXCI6KDAsdVtcImRlZmF1bHRcIl0pKG4pKSlmb3IodmFyIGY9MDtmPG8ubGVuZ3RoO2YrKylpPW9bZl0uc3Vic3RyaW5nKDEsb1tmXS5sZW5ndGgtMSkscj1yLnJlcGxhY2UoZS5tYWtlU2FmZShvW2ZdKSxuW2ldfHxcIlwiKTtlbHNlIHI9ci5yZXBsYWNlKC9cXHtbXlxcfV0rP1xcfS9nLG4pO3JldHVybiByfX0se2tleTpcImZyb21GaWxlXCIsdmFsdWU6ZnVuY3Rpb24odCl7Zm9yKHZhciBuLGU9dC5zcGxpdChcIlxcblwiKSxyPXt9LG89MDtvPGUubGVuZ3RoO28rKyluPWVbb10ubWF0Y2goL14oLis/KSAqPz0gKj8oW15cXG5dKykvKSxuJiYocltuWzFdXT1uWzJdLnJlcGxhY2UoL15cXHMrfFxccyskLyxcIlwiKSk7cmV0dXJuIHJ9fSx7a2V5OlwicHJvY2Vzc0ZpbGVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgbj10aGlzLGU9dC5yZXBsYWNlKC9cXG5cXG4vZyxcIlxcblwiKTtyZXR1cm4gbi5sYW5nc1tuLmxvY2FsZV09bi5mcm9tRmlsZShlKX19LHtrZXk6XCJsb2FkTGFuZ1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7cmV0dXJuIG5ldyB3aW5kb3cuUHJvbWlzZShmdW5jdGlvbihlLHIpe24ubGFuZ3Nbbi5sb2NhbGVdP2Uobi5sYW5nc1tuLmxvY2FsZV0pOiFmdW5jdGlvbigpe3ZhciBvPW5ldyBYTUxIdHRwUmVxdWVzdDtvLm9wZW4oXCJHRVRcIixuLmNvbmZpZy5sb2NhdGlvbit0K1wiLmxhbmdcIiwhMCksby5vbmxvYWQ9ZnVuY3Rpb24oKXt0aGlzLnN0YXR1czw9MzA0PyhuLnByb2Nlc3NGaWxlKG8ucmVzcG9uc2VUZXh0KSxlKG8ucmVzcG9uc2UpKTpyKHtzdGF0dXM6dGhpcy5zdGF0dXMsc3RhdHVzVGV4dDpvLnN0YXR1c1RleHR9KX0sby5vbmVycm9yPWZ1bmN0aW9uKCl7cih7c3RhdHVzOnRoaXMuc3RhdHVzLHN0YXR1c1RleHQ6by5zdGF0dXNUZXh0fSl9LG8uc2VuZCgpfSgpfSl9fSx7a2V5Olwic2V0Q3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiZW4tVVNcIixuPXRoaXMubG9hZExhbmcodCk7cmV0dXJuIHRoaXMubG9jYWxlPXQsdGhpcy5jdXJyZW50PXRoaXMubGFuZ3NbdF0sd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIix0KSxufX0se2tleTpcImdldExhbmdzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29uZmlnLmxhbmdzfX1dKSx0fSgpO25bXCJkZWZhdWx0XCJdPW5ldyBwfSxmdW5jdGlvbih0LG4pe3ZhciBlPXQuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPWUpfSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPSFlKDkpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LG4pe3ZhciBlPXt9Lmhhc093blByb3BlcnR5O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybiBlLmNhbGwodCxuKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDExKSxvPWUoMzEpLHU9ZSgyNiksaT1PYmplY3QuZGVmaW5lUHJvcGVydHk7bi5mPWUoMik/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKHQsbixlKXtpZihyKHQpLG49dShuLCEwKSxyKGUpLG8pdHJ5e3JldHVybiBpKHQsbixlKX1jYXRjaChmKXt9aWYoXCJnZXRcImluIGV8fFwic2V0XCJpbiBlKXRocm93IFR5cGVFcnJvcihcIkFjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIVwiKTtyZXR1cm5cInZhbHVlXCJpbiBlJiYodFtuXT1lLnZhbHVlKSx0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMzIpLG89ZSgxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByKG8odCkpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNCksbz1lKDE1KTt0LmV4cG9ydHM9ZSgyKT9mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHIuZih0LG4sbygxLGUpKX06ZnVuY3Rpb24odCxuLGUpe3JldHVybiB0W25dPWUsdH19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI0KShcIndrc1wiKSxvPWUoMTYpLHU9ZSgxKS5TeW1ib2wsaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB1LGY9dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByW3RdfHwoclt0XT1pJiZ1W3RdfHwoaT91Om8pKFwiU3ltYm9sLlwiK3QpKX07Zi5zdG9yZT1yfSxmdW5jdGlvbih0LG4pe3ZhciBlPXQuZXhwb3J0cz17dmVyc2lvbjpcIjIuNC4wXCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9ZSl9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4hIXQoKX1jYXRjaChuKXtyZXR1cm4hMH19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgzNiksbz1lKDE4KTt0LmV4cG9ydHM9T2JqZWN0LmtleXN8fGZ1bmN0aW9uKHQpe3JldHVybiByKHQsbyl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKCFyKHQpKXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhbiBvYmplY3QhXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMSksbz1lKDgpLHU9ZSg1MyksaT1lKDYpLGY9XCJwcm90b3R5cGVcIixjPWZ1bmN0aW9uKHQsbixlKXt2YXIgYSxzLGwscD10JmMuRix2PXQmYy5HLHk9dCZjLlMsZD10JmMuUCxoPXQmYy5CLGc9dCZjLlcsYj12P286b1tuXXx8KG9bbl09e30pLG09YltmXSx4PXY/cjp5P3Jbbl06KHJbbl18fHt9KVtmXTt2JiYoZT1uKTtmb3IoYSBpbiBlKXM9IXAmJngmJnZvaWQgMCE9PXhbYV0scyYmYSBpbiBifHwobD1zP3hbYV06ZVthXSxiW2FdPXYmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHhbYV0/ZVthXTpoJiZzP3UobCxyKTpnJiZ4W2FdPT1sP2Z1bmN0aW9uKHQpe3ZhciBuPWZ1bmN0aW9uKG4sZSxyKXtpZih0aGlzIGluc3RhbmNlb2YgdCl7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gbmV3IHQ7Y2FzZSAxOnJldHVybiBuZXcgdChuKTtjYXNlIDI6cmV0dXJuIG5ldyB0KG4sZSl9cmV0dXJuIG5ldyB0KG4sZSxyKX1yZXR1cm4gdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O3JldHVybiBuW2ZdPXRbZl0sbn0obCk6ZCYmXCJmdW5jdGlvblwiPT10eXBlb2YgbD91KEZ1bmN0aW9uLmNhbGwsbCk6bCxkJiYoKGIudmlydHVhbHx8KGIudmlydHVhbD17fSkpW2FdPWwsdCZjLlImJm0mJiFtW2FdJiZpKG0sYSxsKSkpfTtjLkY9MSxjLkc9MixjLlM9NCxjLlA9OCxjLkI9MTYsYy5XPTMyLGMuVT02NCxjLlI9MTI4LHQuZXhwb3J0cz1jfSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD9udWxsIT09dDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fX0sZnVuY3Rpb24odCxuKXtuLmY9e30ucHJvcGVydHlJc0VudW1lcmFibGV9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJue2VudW1lcmFibGU6ISgxJnQpLGNvbmZpZ3VyYWJsZTohKDImdCksd3JpdGFibGU6ISg0JnQpLHZhbHVlOm59fX0sZnVuY3Rpb24odCxuKXt2YXIgZT0wLHI9TWF0aC5yYW5kb20oKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJTeW1ib2woXCIuY29uY2F0KHZvaWQgMD09PXQ/XCJcIjp0LFwiKV9cIiwoKytlK3IpLnRvU3RyaW5nKDM2KSl9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZih2b2lkIDA9PXQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiK3QpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9XCJjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2ZcIi5zcGxpdChcIixcIil9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPXt9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz0hMH0sZnVuY3Rpb24odCxuKXtuLmY9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc30sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNCkuZixvPWUoMyksdT1lKDcpKFwidG9TdHJpbmdUYWdcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXt0JiYhbyh0PWU/dDp0LnByb3RvdHlwZSx1KSYmcih0LHUse2NvbmZpZ3VyYWJsZTohMCx2YWx1ZTpufSl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyNCkoXCJrZXlzXCIpLG89ZSgxNik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByW3RdfHwoclt0XT1vKHQpKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEpLG89XCJfX2NvcmUtanNfc2hhcmVkX19cIix1PXJbb118fChyW29dPXt9KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHVbdF18fCh1W3RdPXt9KX19LGZ1bmN0aW9uKHQsbil7dmFyIGU9TWF0aC5jZWlsLHI9TWF0aC5mbG9vcjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlzTmFOKHQ9K3QpPzA6KHQ+MD9yOmUpKHQpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTMpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2lmKCFyKHQpKXJldHVybiB0O3ZhciBlLG87aWYobiYmXCJmdW5jdGlvblwiPT10eXBlb2YoZT10LnRvU3RyaW5nKSYmIXIobz1lLmNhbGwodCkpKXJldHVybiBvO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKGU9dC52YWx1ZU9mKSYmIXIobz1lLmNhbGwodCkpKXJldHVybiBvO2lmKCFuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihlPXQudG9TdHJpbmcpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87dGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMSksbz1lKDgpLHU9ZSgyMCksaT1lKDI4KSxmPWUoNCkuZjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49by5TeW1ib2x8fChvLlN5bWJvbD11P3t9OnIuU3ltYm9sfHx7fSk7XCJfXCI9PXQuY2hhckF0KDApfHx0IGluIG58fGYobix0LHt2YWx1ZTppLmYodCl9KX19LGZ1bmN0aW9uKHQsbixlKXtuLmY9ZSg3KX0sZnVuY3Rpb24odCxuKXt2YXIgZT17fS50b1N0cmluZzt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGUuY2FsbCh0KS5zbGljZSg4LC0xKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEzKSxvPWUoMSkuZG9jdW1lbnQsdT1yKG8pJiZyKG8uY3JlYXRlRWxlbWVudCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB1P28uY3JlYXRlRWxlbWVudCh0KTp7fX19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9IWUoMikmJiFlKDkpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlKDMwKShcImRpdlwiKSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyOSk7dC5leHBvcnRzPU9iamVjdChcInpcIikucHJvcGVydHlJc0VudW1lcmFibGUoMCk/T2JqZWN0OmZ1bmN0aW9uKHQpe3JldHVyblwiU3RyaW5nXCI9PXIodCk/dC5zcGxpdChcIlwiKTpPYmplY3QodCl9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgyMCksbz1lKDEyKSx1PWUoMzcpLGk9ZSg2KSxmPWUoMyksYz1lKDE5KSxhPWUoNTcpLHM9ZSgyMiksbD1lKDY1KSxwPWUoNykoXCJpdGVyYXRvclwiKSx2PSEoW10ua2V5cyYmXCJuZXh0XCJpbltdLmtleXMoKSkseT1cIkBAaXRlcmF0b3JcIixkPVwia2V5c1wiLGg9XCJ2YWx1ZXNcIixnPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSxiLG0seCxPKXthKGUsbixiKTt2YXIgdyxTLF8saj1mdW5jdGlvbih0KXtpZighdiYmdCBpbiBNKXJldHVybiBNW3RdO3N3aXRjaCh0KXtjYXNlIGQ6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBlKHRoaXMsdCl9O2Nhc2UgaDpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBlKHRoaXMsdCl9fSxFPW4rXCIgSXRlcmF0b3JcIixQPW09PWgsaz0hMSxNPXQucHJvdG90eXBlLFQ9TVtwXXx8TVt5XXx8bSYmTVttXSxGPVR8fGoobSksQT1tP1A/aihcImVudHJpZXNcIik6Rjp2b2lkIDAsST1cIkFycmF5XCI9PW4/TS5lbnRyaWVzfHxUOlQ7aWYoSSYmKF89bChJLmNhbGwobmV3IHQpKSxfIT09T2JqZWN0LnByb3RvdHlwZSYmKHMoXyxFLCEwKSxyfHxmKF8scCl8fGkoXyxwLGcpKSksUCYmVCYmVC5uYW1lIT09aCYmKGs9ITAsRj1mdW5jdGlvbigpe3JldHVybiBULmNhbGwodGhpcyl9KSxyJiYhT3x8IXYmJiFrJiZNW3BdfHxpKE0scCxGKSxjW25dPUYsY1tFXT1nLG0paWYodz17dmFsdWVzOlA/RjpqKGgpLGtleXM6eD9GOmooZCksZW50cmllczpBfSxPKWZvcihTIGluIHcpUyBpbiBNfHx1KE0sUyx3W1NdKTtlbHNlIG8oby5QK28uRioodnx8ayksbix3KTtyZXR1cm4gd319LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDExKSxvPWUoNjIpLHU9ZSgxOCksaT1lKDIzKShcIklFX1BST1RPXCIpLGY9ZnVuY3Rpb24oKXt9LGM9XCJwcm90b3R5cGVcIixhPWZ1bmN0aW9uKCl7dmFyIHQsbj1lKDMwKShcImlmcmFtZVwiKSxyPXUubGVuZ3RoLG89XCI8XCIsaT1cIj5cIjtmb3Iobi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGUoNTUpLmFwcGVuZENoaWxkKG4pLG4uc3JjPVwiamF2YXNjcmlwdDpcIix0PW4uY29udGVudFdpbmRvdy5kb2N1bWVudCx0Lm9wZW4oKSx0LndyaXRlKG8rXCJzY3JpcHRcIitpK1wiZG9jdW1lbnQuRj1PYmplY3RcIitvK1wiL3NjcmlwdFwiK2kpLHQuY2xvc2UoKSxhPXQuRjtyLS07KWRlbGV0ZSBhW2NdW3Vbcl1dO3JldHVybiBhKCl9O3QuZXhwb3J0cz1PYmplY3QuY3JlYXRlfHxmdW5jdGlvbih0LG4pe3ZhciBlO3JldHVybiBudWxsIT09dD8oZltjXT1yKHQpLGU9bmV3IGYsZltjXT1udWxsLGVbaV09dCk6ZT1hKCksdm9pZCAwPT09bj9lOm8oZSxuKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDM2KSxvPWUoMTgpLmNvbmNhdChcImxlbmd0aFwiLFwicHJvdG90eXBlXCIpO24uZj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc3x8ZnVuY3Rpb24odCl7cmV0dXJuIHIodCxvKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDMpLG89ZSg1KSx1PWUoNTIpKCExKSxpPWUoMjMpKFwiSUVfUFJPVE9cIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7dmFyIGUsZj1vKHQpLGM9MCxhPVtdO2ZvcihlIGluIGYpZSE9aSYmcihmLGUpJiZhLnB1c2goZSk7Zm9yKDtuLmxlbmd0aD5jOylyKGYsZT1uW2MrK10pJiYofnUoYSxlKXx8YS5wdXNoKGUpKTtyZXR1cm4gYX19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9ZSg2KX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTcpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0KHIodCkpfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg0NiksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoNDcpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDQ4KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg0OSksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5fX2VzTW9kdWxlPSEwLG5bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKHQsbil7aWYoISh0IGluc3RhbmNlb2YgbikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7XCJkZWZhdWx0XCI6dH19bi5fX2VzTW9kdWxlPSEwO3ZhciBvPWUoNDApLHU9cihvKTtuW1wiZGVmYXVsdFwiXT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxuKXtmb3IodmFyIGU9MDtlPG4ubGVuZ3RoO2UrKyl7dmFyIHI9bltlXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksKDAsdVtcImRlZmF1bHRcIl0pKHQsci5rZXkscil9fXJldHVybiBmdW5jdGlvbihuLGUscil7cmV0dXJuIGUmJnQobi5wcm90b3R5cGUsZSksciYmdChuLHIpLG59fSgpfSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e1wiZGVmYXVsdFwiOnR9fW4uX19lc01vZHVsZT0hMDt2YXIgbz1lKDQyKSx1PXIobyksaT1lKDQxKSxmPXIoaSksYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBmW1wiZGVmYXVsdFwiXSYmXCJzeW1ib2xcIj09dHlwZW9mIHVbXCJkZWZhdWx0XCJdP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGZbXCJkZWZhdWx0XCJdJiZ0LmNvbnN0cnVjdG9yPT09ZltcImRlZmF1bHRcIl0/XCJzeW1ib2xcIjp0eXBlb2YgdH07bltcImRlZmF1bHRcIl09XCJmdW5jdGlvblwiPT10eXBlb2YgZltcImRlZmF1bHRcIl0mJlwic3ltYm9sXCI9PT1jKHVbXCJkZWZhdWx0XCJdKT9mdW5jdGlvbih0KXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOmModCl9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBmW1wiZGVmYXVsdFwiXSYmdC5jb25zdHJ1Y3Rvcj09PWZbXCJkZWZhdWx0XCJdP1wic3ltYm9sXCI6XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpjKHQpfX0sZnVuY3Rpb24odCxuLGUpe2UoNzApLHQuZXhwb3J0cz1lKDgpLk9iamVjdC5hc3NpZ259LGZ1bmN0aW9uKHQsbixlKXtlKDcxKTt2YXIgcj1lKDgpLk9iamVjdDt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe3JldHVybiByLmRlZmluZVByb3BlcnR5KHQsbixlKX19LGZ1bmN0aW9uKHQsbixlKXtlKDc0KSxlKDcyKSxlKDc1KSxlKDc2KSx0LmV4cG9ydHM9ZSg4KS5TeW1ib2x9LGZ1bmN0aW9uKHQsbixlKXtlKDczKSxlKDc3KSx0LmV4cG9ydHM9ZSgyOCkuZihcIml0ZXJhdG9yXCIpfSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhIGZ1bmN0aW9uIVwiKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKCl7fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNSksbz1lKDY4KSx1PWUoNjcpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24obixlLGkpe3ZhciBmLGM9cihuKSxhPW8oYy5sZW5ndGgpLHM9dShpLGEpO2lmKHQmJmUhPWUpe2Zvcig7YT5zOylpZihmPWNbcysrXSxmIT1mKXJldHVybiEwfWVsc2UgZm9yKDthPnM7cysrKWlmKCh0fHxzIGluIGMpJiZjW3NdPT09ZSlyZXR1cm4gdHx8c3x8MDtyZXR1cm4hdCYmLTF9fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNTApO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSl7aWYocih0KSx2b2lkIDA9PT1uKXJldHVybiB0O3N3aXRjaChlKXtjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB0LmNhbGwobixlKX07Y2FzZSAyOnJldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiB0LmNhbGwobixlLHIpfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKGUscixvKXtyZXR1cm4gdC5jYWxsKG4sZSxyLG8pfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdC5hcHBseShuLGFyZ3VtZW50cyl9fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTApLG89ZSgyMSksdT1lKDE0KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49cih0KSxlPW8uZjtpZihlKWZvcih2YXIgaSxmPWUodCksYz11LmYsYT0wO2YubGVuZ3RoPmE7KWMuY2FsbCh0LGk9ZlthKytdKSYmbi5wdXNoKGkpO3JldHVybiBufX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz1lKDEpLmRvY3VtZW50JiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnR9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI5KTt0LmV4cG9ydHM9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24odCl7cmV0dXJuXCJBcnJheVwiPT1yKHQpfX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO3ZhciByPWUoMzQpLG89ZSgxNSksdT1lKDIyKSxpPXt9O2UoNikoaSxlKDcpKFwiaXRlcmF0b3JcIiksZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHQuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSl7dC5wcm90b3R5cGU9cihpLHtuZXh0Om8oMSxlKX0pLHUodCxuK1wiIEl0ZXJhdG9yXCIpfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57dmFsdWU6bixkb25lOiEhdH19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMCksbz1lKDUpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2Zvcih2YXIgZSx1PW8odCksaT1yKHUpLGY9aS5sZW5ndGgsYz0wO2Y+YzspaWYodVtlPWlbYysrXV09PT1uKXJldHVybiBlfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTYpKFwibWV0YVwiKSxvPWUoMTMpLHU9ZSgzKSxpPWUoNCkuZixmPTAsYz1PYmplY3QuaXNFeHRlbnNpYmxlfHxmdW5jdGlvbigpe3JldHVybiEwfSxhPSFlKDkpKGZ1bmN0aW9uKCl7cmV0dXJuIGMoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSl9KSxzPWZ1bmN0aW9uKHQpe2kodCxyLHt2YWx1ZTp7aTpcIk9cIisgKytmLHc6e319fSl9LGw9ZnVuY3Rpb24odCxuKXtpZighbyh0KSlyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdD90OihcInN0cmluZ1wiPT10eXBlb2YgdD9cIlNcIjpcIlBcIikrdDtpZighdSh0LHIpKXtpZighYyh0KSlyZXR1cm5cIkZcIjtpZighbilyZXR1cm5cIkVcIjtzKHQpfXJldHVybiB0W3JdLml9LHA9ZnVuY3Rpb24odCxuKXtpZighdSh0LHIpKXtpZighYyh0KSlyZXR1cm4hMDtpZighbilyZXR1cm4hMTtzKHQpfXJldHVybiB0W3JdLnd9LHY9ZnVuY3Rpb24odCl7cmV0dXJuIGEmJnkuTkVFRCYmYyh0KSYmIXUodCxyKSYmcyh0KSx0fSx5PXQuZXhwb3J0cz17S0VZOnIsTkVFRDohMSxmYXN0S2V5OmwsZ2V0V2VhazpwLG9uRnJlZXplOnZ9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgxMCksbz1lKDIxKSx1PWUoMTQpLGk9ZSgzOCksZj1lKDMyKSxjPU9iamVjdC5hc3NpZ247dC5leHBvcnRzPSFjfHxlKDkpKGZ1bmN0aW9uKCl7dmFyIHQ9e30sbj17fSxlPVN5bWJvbCgpLHI9XCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiO3JldHVybiB0W2VdPTcsci5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe25bdF09dH0pLDchPWMoe30sdClbZV18fE9iamVjdC5rZXlzKGMoe30sbikpLmpvaW4oXCJcIikhPXJ9KT9mdW5jdGlvbih0LG4pe2Zvcih2YXIgZT1pKHQpLGM9YXJndW1lbnRzLmxlbmd0aCxhPTEscz1vLmYsbD11LmY7Yz5hOylmb3IodmFyIHAsdj1mKGFyZ3VtZW50c1thKytdKSx5PXM/cih2KS5jb25jYXQocyh2KSk6cih2KSxkPXkubGVuZ3RoLGg9MDtkPmg7KWwuY2FsbCh2LHA9eVtoKytdKSYmKGVbcF09dltwXSk7cmV0dXJuIGV9OmN9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDQpLG89ZSgxMSksdT1lKDEwKTt0LmV4cG9ydHM9ZSgyKT9PYmplY3QuZGVmaW5lUHJvcGVydGllczpmdW5jdGlvbih0LG4pe28odCk7Zm9yKHZhciBlLGk9dShuKSxmPWkubGVuZ3RoLGM9MDtmPmM7KXIuZih0LGU9aVtjKytdLG5bZV0pO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTQpLG89ZSgxNSksdT1lKDUpLGk9ZSgyNiksZj1lKDMpLGM9ZSgzMSksYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO24uZj1lKDIpP2E6ZnVuY3Rpb24odCxuKXtpZih0PXUodCksbj1pKG4sITApLGMpdHJ5e3JldHVybiBhKHQsbil9Y2F0Y2goZSl7fWlmKGYodCxuKSlyZXR1cm4gbyghci5mLmNhbGwodCxuKSx0W25dKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDUpLG89ZSgzNSkuZix1PXt9LnRvU3RyaW5nLGk9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93JiZPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcz9PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpOltdLGY9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiBvKHQpfWNhdGNoKG4pe3JldHVybiBpLnNsaWNlKCl9fTt0LmV4cG9ydHMuZj1mdW5jdGlvbih0KXtyZXR1cm4gaSYmXCJbb2JqZWN0IFdpbmRvd11cIj09dS5jYWxsKHQpP2YodCk6byhyKHQpKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDMpLG89ZSgzOCksdT1lKDIzKShcIklFX1BST1RPXCIpLGk9T2JqZWN0LnByb3RvdHlwZTt0LmV4cG9ydHM9T2JqZWN0LmdldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0KXtyZXR1cm4gdD1vKHQpLHIodCx1KT90W3VdOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29uc3RydWN0b3ImJnQgaW5zdGFuY2VvZiB0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IucHJvdG90eXBlOnQgaW5zdGFuY2VvZiBPYmplY3Q/aTpudWxsfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjUpLG89ZSgxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihuLGUpe3ZhciB1LGksZj1TdHJpbmcobyhuKSksYz1yKGUpLGE9Zi5sZW5ndGg7cmV0dXJuIGM8MHx8Yz49YT90P1wiXCI6dm9pZCAwOih1PWYuY2hhckNvZGVBdChjKSx1PDU1Mjk2fHx1PjU2MzE5fHxjKzE9PT1hfHwoaT1mLmNoYXJDb2RlQXQoYysxKSk8NTYzMjB8fGk+NTczNDM/dD9mLmNoYXJBdChjKTp1OnQ/Zi5zbGljZShjLGMrMik6KHUtNTUyOTY8PDEwKSsoaS01NjMyMCkrNjU1MzYpfX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI1KSxvPU1hdGgubWF4LHU9TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQ9cih0KSx0PDA/byh0K24sMCk6dSh0LG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjUpLG89TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB0PjA/byhyKHQpLDkwMDcxOTkyNTQ3NDA5OTEpOjB9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSg1MSksbz1lKDU4KSx1PWUoMTkpLGk9ZSg1KTt0LmV4cG9ydHM9ZSgzMykoQXJyYXksXCJBcnJheVwiLGZ1bmN0aW9uKHQsbil7dGhpcy5fdD1pKHQpLHRoaXMuX2k9MCx0aGlzLl9rPW59LGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdCxuPXRoaXMuX2ssZT10aGlzLl9pKys7cmV0dXJuIXR8fGU+PXQubGVuZ3RoPyh0aGlzLl90PXZvaWQgMCxvKDEpKTpcImtleXNcIj09bj9vKDAsZSk6XCJ2YWx1ZXNcIj09bj9vKDAsdFtlXSk6bygwLFtlLHRbZV1dKX0sXCJ2YWx1ZXNcIiksdS5Bcmd1bWVudHM9dS5BcnJheSxyKFwia2V5c1wiKSxyKFwidmFsdWVzXCIpLHIoXCJlbnRyaWVzXCIpfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMik7cihyLlMrci5GLFwiT2JqZWN0XCIse2Fzc2lnbjplKDYxKX0pfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMik7cihyLlMrci5GKiFlKDIpLFwiT2JqZWN0XCIse2RlZmluZVByb3BlcnR5OmUoNCkuZn0pfSxmdW5jdGlvbih0LG4pe30sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO3ZhciByPWUoNjYpKCEwKTtlKDMzKShTdHJpbmcsXCJTdHJpbmdcIixmdW5jdGlvbih0KXt0aGlzLl90PVN0cmluZyh0KSx0aGlzLl9pPTB9LGZ1bmN0aW9uKCl7dmFyIHQsbj10aGlzLl90LGU9dGhpcy5faTtyZXR1cm4gZT49bi5sZW5ndGg/e3ZhbHVlOnZvaWQgMCxkb25lOiEwfToodD1yKG4sZSksdGhpcy5faSs9dC5sZW5ndGgse3ZhbHVlOnQsZG9uZTohMX0pfSl9LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDEpLG89ZSgzKSx1PWUoMiksaT1lKDEyKSxmPWUoMzcpLGM9ZSg2MCkuS0VZLGE9ZSg5KSxzPWUoMjQpLGw9ZSgyMikscD1lKDE2KSx2PWUoNykseT1lKDI4KSxkPWUoMjcpLGg9ZSg1OSksZz1lKDU0KSxiPWUoNTYpLG09ZSgxMSkseD1lKDUpLE89ZSgyNiksdz1lKDE1KSxTPWUoMzQpLF89ZSg2NCksaj1lKDYzKSxFPWUoNCksUD1lKDEwKSxrPWouZixNPUUuZixUPV8uZixGPXIuU3ltYm9sLEE9ci5KU09OLEk9QSYmQS5zdHJpbmdpZnksTj1cInByb3RvdHlwZVwiLEM9dihcIl9oaWRkZW5cIiksTD12KFwidG9QcmltaXRpdmVcIiksUj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxXPXMoXCJzeW1ib2wtcmVnaXN0cnlcIiksRD1zKFwic3ltYm9sc1wiKSxHPXMoXCJvcC1zeW1ib2xzXCIpLEo9T2JqZWN0W05dLFU9XCJmdW5jdGlvblwiPT10eXBlb2YgRixLPXIuUU9iamVjdCxxPSFLfHwhS1tOXXx8IUtbTl0uZmluZENoaWxkLHo9dSYmYShmdW5jdGlvbigpe3JldHVybiA3IT1TKE0oe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBNKHRoaXMsXCJhXCIse3ZhbHVlOjd9KS5hfX0pKS5hfSk/ZnVuY3Rpb24odCxuLGUpe3ZhciByPWsoSixuKTtyJiZkZWxldGUgSltuXSxNKHQsbixlKSxyJiZ0IT09SiYmTShKLG4scil9Ok0sQj1mdW5jdGlvbih0KXt2YXIgbj1EW3RdPVMoRltOXSk7cmV0dXJuIG4uX2s9dCxufSxWPVUmJlwic3ltYm9sXCI9PXR5cGVvZiBGLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIEZ9LFk9ZnVuY3Rpb24odCxuLGUpe3JldHVybiB0PT09SiYmWShHLG4sZSksbSh0KSxuPU8obiwhMCksbShlKSxvKEQsbik/KGUuZW51bWVyYWJsZT8obyh0LEMpJiZ0W0NdW25dJiYodFtDXVtuXT0hMSksZT1TKGUse2VudW1lcmFibGU6dygwLCExKX0pKToobyh0LEMpfHxNKHQsQyx3KDEse30pKSx0W0NdW25dPSEwKSx6KHQsbixlKSk6TSh0LG4sZSl9LEg9ZnVuY3Rpb24odCxuKXttKHQpO2Zvcih2YXIgZSxyPWcobj14KG4pKSxvPTAsdT1yLmxlbmd0aDt1Pm87KVkodCxlPXJbbysrXSxuW2VdKTtyZXR1cm4gdH0sUT1mdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDA9PT1uP1ModCk6SChTKHQpLG4pfSxYPWZ1bmN0aW9uKHQpe3ZhciBuPVIuY2FsbCh0aGlzLHQ9Tyh0LCEwKSk7cmV0dXJuISh0aGlzPT09SiYmbyhELHQpJiYhbyhHLHQpKSYmKCEobnx8IW8odGhpcyx0KXx8IW8oRCx0KXx8byh0aGlzLEMpJiZ0aGlzW0NdW3RdKXx8bil9LCQ9ZnVuY3Rpb24odCxuKXtpZih0PXgodCksbj1PKG4sITApLHQhPT1KfHwhbyhELG4pfHxvKEcsbikpe3ZhciBlPWsodCxuKTtyZXR1cm4hZXx8IW8oRCxuKXx8byh0LEMpJiZ0W0NdW25dfHwoZS5lbnVtZXJhYmxlPSEwKSxlfX0sWj1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT1UKHgodCkpLHI9W10sdT0wO2UubGVuZ3RoPnU7KW8oRCxuPWVbdSsrXSl8fG49PUN8fG49PWN8fHIucHVzaChuKTtyZXR1cm4gcn0sdHQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBuLGU9dD09PUoscj1UKGU/Rzp4KHQpKSx1PVtdLGk9MDtyLmxlbmd0aD5pOykhbyhELG49cltpKytdKXx8ZSYmIW8oSixuKXx8dS5wdXNoKERbbl0pO3JldHVybiB1fTtVfHwoRj1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBGKXRocm93IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciFcIik7dmFyIHQ9cChhcmd1bWVudHMubGVuZ3RoPjA/YXJndW1lbnRzWzBdOnZvaWQgMCksbj1mdW5jdGlvbihlKXt0aGlzPT09SiYmbi5jYWxsKEcsZSksbyh0aGlzLEMpJiZvKHRoaXNbQ10sdCkmJih0aGlzW0NdW3RdPSExKSx6KHRoaXMsdCx3KDEsZSkpfTtyZXR1cm4gdSYmcSYmeihKLHQse2NvbmZpZ3VyYWJsZTohMCxzZXQ6bn0pLEIodCl9LGYoRltOXSxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fa30pLGouZj0kLEUuZj1ZLGUoMzUpLmY9Xy5mPVosZSgxNCkuZj1YLGUoMjEpLmY9dHQsdSYmIWUoMjApJiZmKEosXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLFgsITApLHkuZj1mdW5jdGlvbih0KXtyZXR1cm4gQih2KHQpKX0pLGkoaS5HK2kuVytpLkYqIVUse1N5bWJvbDpGfSk7Zm9yKHZhciBudD1cImhhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzXCIuc3BsaXQoXCIsXCIpLGV0PTA7bnQubGVuZ3RoPmV0Oyl2KG50W2V0KytdKTtmb3IodmFyIG50PVAodi5zdG9yZSksZXQ9MDtudC5sZW5ndGg+ZXQ7KWQobnRbZXQrK10pO2koaS5TK2kuRiohVSxcIlN5bWJvbFwiLHtcImZvclwiOmZ1bmN0aW9uKHQpe3JldHVybiBvKFcsdCs9XCJcIik/V1t0XTpXW3RdPUYodCl9LGtleUZvcjpmdW5jdGlvbih0KXtpZihWKHQpKXJldHVybiBoKFcsdCk7dGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgc3ltYm9sIVwiKX0sdXNlU2V0dGVyOmZ1bmN0aW9uKCl7cT0hMH0sdXNlU2ltcGxlOmZ1bmN0aW9uKCl7cT0hMX19KSxpKGkuUytpLkYqIVUsXCJPYmplY3RcIix7Y3JlYXRlOlEsZGVmaW5lUHJvcGVydHk6WSxkZWZpbmVQcm9wZXJ0aWVzOkgsZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiQsZ2V0T3duUHJvcGVydHlOYW1lczpaLGdldE93blByb3BlcnR5U3ltYm9sczp0dH0pLEEmJmkoaS5TK2kuRiooIVV8fGEoZnVuY3Rpb24oKXt2YXIgdD1GKCk7cmV0dXJuXCJbbnVsbF1cIiE9SShbdF0pfHxcInt9XCIhPUkoe2E6dH0pfHxcInt9XCIhPUkoT2JqZWN0KHQpKX0pKSxcIkpTT05cIix7c3RyaW5naWZ5OmZ1bmN0aW9uKHQpe2lmKHZvaWQgMCE9PXQmJiFWKHQpKXtmb3IodmFyIG4sZSxyPVt0XSxvPTE7YXJndW1lbnRzLmxlbmd0aD5vOylyLnB1c2goYXJndW1lbnRzW28rK10pO3JldHVybiBuPXJbMV0sXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKGU9biksIWUmJmIobil8fChuPWZ1bmN0aW9uKHQsbil7aWYoZSYmKG49ZS5jYWxsKHRoaXMsdCxuKSksIVYobikpcmV0dXJuIG59KSxyWzFdPW4sSS5hcHBseShBLHIpfX19KSxGW05dW0xdfHxlKDYpKEZbTl0sTCxGW05dLnZhbHVlT2YpLGwoRixcIlN5bWJvbFwiKSxsKE1hdGgsXCJNYXRoXCIsITApLGwoci5KU09OLFwiSlNPTlwiLCEwKX0sZnVuY3Rpb24odCxuLGUpe2UoMjcpKFwiYXN5bmNJdGVyYXRvclwiKX0sZnVuY3Rpb24odCxuLGUpe2UoMjcpKFwib2JzZXJ2YWJsZVwiKX0sZnVuY3Rpb24odCxuLGUpe2UoNjkpO2Zvcih2YXIgcj1lKDEpLG89ZSg2KSx1PWUoMTkpLGk9ZSg3KShcInRvU3RyaW5nVGFnXCIpLGY9W1wiTm9kZUxpc3RcIixcIkRPTVRva2VuTGlzdFwiLFwiTWVkaWFMaXN0XCIsXCJTdHlsZVNoZWV0TGlzdFwiLFwiQ1NTUnVsZUxpc3RcIl0sYz0wO2M8NTtjKyspe3ZhciBhPWZbY10scz1yW2FdLGw9cyYmcy5wcm90b3R5cGU7bCYmIWxbaV0mJm8obCxpLGEpLHVbYV09dS5BcnJheX19XSk7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9XG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpcztcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiIHx8XG4gICAgICAgICAgICAgIChtZXRob2QgPT09IFwidGhyb3dcIiAmJiBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAvLyBBIHJldHVybiBvciB0aHJvdyAod2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIHRocm93XG4gICAgICAgICAgICAvLyBtZXRob2QpIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgICB2YXIgcmV0dXJuTWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl07XG4gICAgICAgICAgICBpZiAocmV0dXJuTWV0aG9kKSB7XG4gICAgICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChyZXR1cm5NZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBhcmcpO1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXR1cm4gbWV0aG9kIHRocmV3IGFuIGV4Y2VwdGlvbiwgbGV0IHRoYXRcbiAgICAgICAgICAgICAgICAvLyBleGNlcHRpb24gcHJldmFpbCBvdmVyIHRoZSBvcmlnaW5hbCByZXR1cm4gb3IgdGhyb3cuXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgICAvLyBDb250aW51ZSB3aXRoIHRoZSBvdXRlciByZXR1cm4sIG5vdyB0aGF0IHRoZSBkZWxlZ2F0ZVxuICAgICAgICAgICAgICAvLyBpdGVyYXRvciBoYXMgYmVlbiB0ZXJtaW5hdGVkLlxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3IsXG4gICAgICAgICAgICBhcmdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMaWtlIHJldHVybmluZyBnZW5lcmF0b3IudGhyb3codW5jYXVnaHQpLCBidXQgd2l0aG91dCB0aGVcbiAgICAgICAgICAgIC8vIG92ZXJoZWFkIG9mIGFuIGV4dHJhIGZ1bmN0aW9uIGNhbGwuXG4gICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBhcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXNcbik7XG4iLCJjb25zdCBkb20gPSB7fTtcblxuZG9tLm9wdGlvbkZpZWxkcyA9IFtcbidzZWxlY3QnLFxuJ2NoZWNrYm94LWdyb3VwJyxcbidyYWRpby1ncm91cCcsXG4nYXV0b2NvbXBsZXRlJ1xuXTtcbmRvbS5vcHRpb25GaWVsZHNSZWdFeCA9IG5ldyBSZWdFeHAoYCgke2RvbS5vcHRpb25GaWVsZHMuam9pbignfCcpfSlgKTtcblxuLyoqXG4gICAqIFV0aWwgdG8gcmVtb3ZlIGNvbnRlbnRzIG9mIERPTSBPYmplY3RcbiAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50XG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBlbGVtZW50IHdpdGggaXRzIGNoaWxkcmVuIHJlbW92ZWRcbiAgICovXG5kb20uZW1wdHkgPSAoZWxlbWVudCkgPT4ge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLyoqXG4gKiBIaWRlIG9yIHNob3cgYW4gQXJyYXkgb3IgSFRNTENvbGxlY3Rpb24gb2YgZWxlbWVudHNcbiAqIEBwYXJhbSAge0FycmF5fSAgIGVsZW1zXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICB0ZXJtICBtYXRjaCB0ZXh0Q29udGVudCB0byB0aGlzIHRlcm1cbiAqIEBwYXJhbSAge0Jvb2xlYW59IHNob3cgIG9yIGhpZGUgZWxlbWVudHNcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgIGZpbHRlcmVkIGVsZW1lbnRzXG4gKi9cbmRvbS5maWx0ZXIgPSAoZWxlbXMsIHRlcm0sIHNob3cgPSB0cnVlKSA9PiB7XG4gIGxldCBmaWx0ZXJlZEVsZW1zID0gW107XG4gIGxldCB0b2dnbGUgPSBbJ25vbmUnLCAnYmxvY2snXTtcblxuICBpZiAoc2hvdykge1xuICAgIHRvZ2dsZSA9IHRvZ2dsZS5yZXZlcnNlKCk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gZWxlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgdHh0ID0gZWxlbXNbaV0udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodHh0LmluZGV4T2YodGVybS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgIGVsZW1zW2ldLnN0eWxlLmRpc3BsYXkgPSB0b2dnbGVbMF07XG4gICAgICBmaWx0ZXJlZEVsZW1zLnB1c2goZWxlbXNbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtc1tpXS5zdHlsZS5kaXNwbGF5ID0gdG9nZ2xlWzFdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1zO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tO1xuIiwiLyoqXG4gKiBGb3JtIEJ1aWxkZXIgZXZlbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHZhcmlvdXMgZXZlbnRzIHRvIGJlIHRyaWdnZXJcbiAqL1xuLy8gZnVuY3Rpb24gZmJFdmVudHMoKXtcbiAgY29uc3QgZXZlbnRzID0ge307XG5cbiAgZXZlbnRzLmxvYWRlZCA9IG5ldyBFdmVudCgnbG9hZGVkJyk7XG4gIGV2ZW50cy52aWV3RGF0YSA9IG5ldyBFdmVudCgndmlld0RhdGEnKTtcbiAgZXZlbnRzLnVzZXJEZWNsaW5lZCA9IG5ldyBFdmVudCgndXNlckRlY2xpbmVkJyk7XG4gIGV2ZW50cy5tb2RhbENsb3NlZCA9IG5ldyBFdmVudCgnbW9kYWxDbG9zZWQnKTtcbiAgZXZlbnRzLm1vZGFsT3BlbmVkID0gbmV3IEV2ZW50KCdtb2RhbE9wZW5lZCcpO1xuICBldmVudHMuZm9ybVNhdmVkID0gbmV3IEV2ZW50KCdmb3JtU2F2ZWQnKTtcbiAgZXZlbnRzLmZpZWxkQWRkZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkQWRkZWQnKTtcbiAgZXZlbnRzLmZpZWxkUmVtb3ZlZCA9IG5ldyBFdmVudCgnZmllbGRSZW1vdmVkJyk7XG4gIGV2ZW50cy5maWVsZFJlbmRlcmVkID0gbmV3IEV2ZW50KCdmaWVsZFJlbmRlcmVkJyk7XG5cbi8vICAgcmV0dXJuIGV2ZW50cztcbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSBldmVudHM7XG4iLCJpbXBvcnQgZCBmcm9tICcuL2RvbSc7XG5yZXF1aXJlKCcuL2tjLXRvZ2dsZS5qcycpO1xucmVxdWlyZSgnLi9wb2x5ZmlsbHMuanMnKTtcbi8vIGNvbnN0IGV4dGVuZCA9IHJlcXVpcmUoJ2RlZXAtZXh0ZW5kJyk7XG5cbihmdW5jdGlvbigkKSB7XG4gIGNvbnN0IEZvcm1CdWlsZGVyID0gYXN5bmMgZnVuY3Rpb24ob3B0aW9ucywgZWxlbWVudCkge1xuICAgIGNvbnN0IGZvcm1CdWlsZGVyID0gdGhpcztcbiAgICBjb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKTtcbiAgICBjb25zdCBtID0gdXRpbHMubWFya3VwO1xuICAgIGZvcm1CdWlsZGVyLmV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzLmpzJyk7XG4gICAgZm9ybUJ1aWxkZXIudXRpbHMgPSB1dGlscztcbiAgICBmb3JtQnVpbGRlci5taTE4biA9IHJlcXVpcmUoJ21pMThuJykuZGVmYXVsdDtcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIGNvbnRyb2xQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgIGNvbnRyb2xPcmRlcjogW1xuICAgICAgICAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgICdkYXRlJyxcbiAgICAgICAgJ2ZpbGUnLFxuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ2hpZGRlbicsXG4gICAgICAgICdwYXJhZ3JhcGgnLFxuICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICd0ZXh0JyxcbiAgICAgICAgJ3RleHRhcmVhJ1xuICAgICAgXSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAvLyBBcnJheSBvZiBmaWVsZHMgdG8gZGlzYWJsZVxuICAgICAgZGlzYWJsZUZpZWxkczogW10sXG4gICAgICBlZGl0T25BZGQ6IGZhbHNlLFxuICAgICAgLy8gVW5lZGl0YWJsZSBmaWVsZHMgb3Igb3RoZXIgY29udGVudCB5b3Ugd291bGQgbGlrZSB0byBhcHBlYXJcbiAgICAgIC8vIGJlZm9yZSBhbmQgYWZ0ZXIgcmVndWxhciBmaWVsZHM6XG4gICAgICBhcHBlbmQ6IGZhbHNlLFxuICAgICAgcHJlcGVuZDogZmFsc2UsXG4gICAgICAvLyBhcnJheSBvZiBvYmplY3RzIHdpdGggZmllbGRzIHZhbHVlc1xuICAgICAgLy8gZXg6XG4gICAgICAvLyBkZWZhdWx0RmllbGRzOiBbe1xuICAgICAgLy8gICBsYWJlbDogJ0ZpcnN0IE5hbWUnLFxuICAgICAgLy8gICBuYW1lOiAnZmlyc3QtbmFtZScsXG4gICAgICAvLyAgIHJlcXVpcmVkOiAndHJ1ZScsXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnWW91ciBmaXJzdCBuYW1lJyxcbiAgICAgIC8vICAgdHlwZTogJ3RleHQnXG4gICAgICAvLyB9LCB7XG4gICAgICAvLyAgIGxhYmVsOiAnUGhvbmUnLFxuICAgICAgLy8gICBuYW1lOiAncGhvbmUnLFxuICAgICAgLy8gICBkZXNjcmlwdGlvbjogJ0hvdyBjYW4gd2UgcmVhY2ggeW91PycsXG4gICAgICAvLyAgIHR5cGU6ICd0ZXh0J1xuICAgICAgLy8gfV0sXG4gICAgICBkZWZhdWx0RmllbGRzOiBbXSxcbiAgICAgIGlucHV0U2V0czogW10sXG4gICAgICBmaWVsZFJlbW92ZVdhcm46IGZhbHNlLFxuICAgICAgcm9sZXM6IHtcbiAgICAgICAgMTogJ0FkbWluaXN0cmF0b3InXG4gICAgICB9LFxuICAgICAgbm90aWZ5OiB7XG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhcm5pbmc6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25TYXZlOiB1dGlscy5ub29wLFxuICAgICAgb25DbGVhckFsbDogdXRpbHMubm9vcCxcbiAgICAgIGFjdGlvbkJ1dHRvbnM6IFt7XG4gICAgICAgIGxhYmVsOiAnQ2xlYXInLFxuICAgICAgICBjbGFzc05hbWU6ICdjbGVhci1hbGwgYnRuIGJ0bi1kYW5nZXInLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBmaWVsZHMgPSAkKCdsaS5mb3JtLWZpZWxkJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgICAgICAgICAgbGV0IGJ1dHRvblBvc2l0aW9uID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHtcbiAgICAgICAgICAgICAgcGFnZVg6IGJ1dHRvblBvc2l0aW9uLmxlZnQgKyAoYnV0dG9uUG9zaXRpb24ud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgcGFnZVk6IChidXR0b25Qb3NpdGlvbi50b3AgLSBib2R5UmVjdC50b3ApIC0gMTJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChmaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIF9oZWxwZXJzLmNvbmZpcm0oaTE4bi5jbGVhckFsbE1lc3NhZ2UsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcygpO1xuICAgICAgICAgICAgICAgIG9wdHMubm90aWZ5LnN1Y2Nlc3MoaTE4bi5hbGxGaWVsZHNSZW1vdmVkKTtcbiAgICAgICAgICAgICAgICBvcHRzLm9uQ2xlYXJBbGwoKTtcbiAgICAgICAgICAgICAgfSwgY29vcmRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9oZWxwZXJzLmRpYWxvZyhpMThuLm5vRmllbGRzVG9DbGVhciwgY29vcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdEYXRhJyxcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiBfaGVscGVycy5zaG93RGF0YSgpXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdTYXZlJyxcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tcHJpbWFyeSBzYXZlLXRlbXBsYXRlJyxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IG9wdHMub25TYXZlKF9oZWxwZXJzLnNhdmUoKSlcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICBzb3J0YWJsZUNvbnRyb2xzOiBmYWxzZSxcbiAgICAgIHN0aWNreUNvbnRyb2xzOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgICAgICAgIHJpZ2h0OiAnYXV0bydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNob3dBY3Rpb25CdXR0b25zOiB0cnVlLFxuICAgICAgdHlwZVVzZXJBdHRyczoge30sXG4gICAgICB0eXBlVXNlckV2ZW50czoge30sXG4gICAgICBwcmVmaXg6ICdmb3JtLWJ1aWxkZXItJ1xuICAgIH07XG5cblxuICAgIGRlZmF1bHRzLmkxOG4gPSB7XG4gICAgICBsYW5nczogW1xuICAgICAgICAnZW4tVVMnXG4gICAgICBdLFxuICAgICAgcHJlbG9hZGVkOiB7XG4gICAgICAgICdlbi1VUyc6IHtcbiAgICAgICAgICBhZGRPcHRpb246ICdBZGQgT3B0aW9uICsnLFxuICAgICAgICAgIGFsbEZpZWxkc1JlbW92ZWQ6ICdBbGwgZmllbGRzIHdlcmUgcmVtb3ZlZC4nLFxuICAgICAgICAgIGFsbG93TXVsdGlwbGVGaWxlczogJ0FsbG93IHVzZXJzIHRvIHVwbG9hZCBtdWx0aXBsZSBmaWxlcycsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiAnQXV0b2NvbXBsZXRlJyxcbiAgICAgICAgICBidXR0b246ICdCdXR0b24nLFxuICAgICAgICAgIGNhbm5vdEJlRW1wdHk6ICdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgICAgY2hlY2tib3hHcm91cDogJ0NoZWNrYm94IEdyb3VwJyxcbiAgICAgICAgICBjaGVja2JveDogJ0NoZWNrYm94JyxcbiAgICAgICAgICBjaGVja2JveGVzOiAnQ2hlY2tib3hlcycsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2xhc3MnLFxuICAgICAgICAgIGNsZWFyQWxsTWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbGVhciBhbGwgZmllbGRzPycsXG4gICAgICAgICAgY2xlYXJBbGw6ICdDbGVhcicsXG4gICAgICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICAgICAgY29udGVudDogJ0NvbnRlbnQnLFxuICAgICAgICAgIGNvcHk6ICdDb3B5IFRvIENsaXBib2FyZCcsXG4gICAgICAgICAgY29weUJ1dHRvbjogJyYjNDM7JyxcbiAgICAgICAgICBjb3B5QnV0dG9uVG9vbHRpcDogJ0NvcHknLFxuICAgICAgICAgIGRhdGVGaWVsZDogJ0RhdGUgRmllbGQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVscCBUZXh0JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbkZpZWxkOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICAgIGRldk1vZGU6ICdEZXZlbG9wZXIgTW9kZScsXG4gICAgICAgICAgZWRpdE5hbWVzOiAnRWRpdCBOYW1lcycsXG4gICAgICAgICAgZWRpdG9yVGl0bGU6ICdGb3JtIEVsZW1lbnRzJyxcbiAgICAgICAgICBlZGl0WE1MOiAnRWRpdCBYTUwnLFxuICAgICAgICAgIGVuYWJsZU90aGVyOiAnRW5hYmxlICZxdW90O090aGVyJnF1b3Q7JyxcbiAgICAgICAgICBlbmFibGVPdGhlck1zZzogJ0xldCB1c2VycyB0byBlbnRlciBhbiB1bmxpc3RlZCBvcHRpb24nLFxuICAgICAgICAgIGZpZWxkRGVsZXRlV2FybmluZzogZmFsc2UsXG4gICAgICAgICAgZmllbGRWYXJzOiAnRmllbGQgVmFyaWFibGVzJyxcbiAgICAgICAgICBmaWVsZE5vbkVkaXRhYmxlOiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZWRpdGVkLicsXG4gICAgICAgICAgZmllbGRSZW1vdmVXYXJuaW5nOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIGZpZWxkPycsXG4gICAgICAgICAgZmlsZVVwbG9hZDogJ0ZpbGUgVXBsb2FkJyxcbiAgICAgICAgICBmb3JtVXBkYXRlZDogJ0Zvcm0gVXBkYXRlZCcsXG4gICAgICAgICAgZ2V0U3RhcnRlZDogJ0RyYWcgYSBmaWVsZCBmcm9tIHRoZSByaWdodCB0byB0aGlzIGFyZWEnLFxuICAgICAgICAgIGhlYWRlcjogJ0hlYWRlcicsXG4gICAgICAgICAgaGlkZTogJ0VkaXQnLFxuICAgICAgICAgIGhpZGRlbjogJ0hpZGRlbiBJbnB1dCcsXG4gICAgICAgICAgaW5saW5lOiAnSW5saW5lJyxcbiAgICAgICAgICBpbmxpbmVEZXNjOiAnRGlzcGxheSB7dHlwZX0gaW5saW5lJyxcbiAgICAgICAgICBsYWJlbDogJ0xhYmVsJyxcbiAgICAgICAgICBsYWJlbEVtcHR5OiAnRmllbGQgTGFiZWwgY2Fubm90IGJlIGVtcHR5JyxcbiAgICAgICAgICBsaW1pdFJvbGU6ICdMaW1pdCBhY2Nlc3MgdG8gb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyByb2xlczonLFxuICAgICAgICAgIG1hbmRhdG9yeTogJ01hbmRhdG9yeScsXG4gICAgICAgICAgbWF4bGVuZ3RoOiAnTWF4IExlbmd0aCcsXG4gICAgICAgICAgbWluT3B0aW9uTWVzc2FnZTogJ1RoaXMgZmllbGQgcmVxdWlyZXMgYSBtaW5pbXVtIG9mIDIgb3B0aW9ucycsXG4gICAgICAgICAgbXVsdGlwbGVGaWxlczogJ011bHRpcGxlIEZpbGVzJyxcbiAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgbm86ICdObycsXG4gICAgICAgICAgbm9GaWVsZHNUb0NsZWFyOiAnVGhlcmUgYXJlIG5vIGZpZWxkcyB0byBjbGVhcicsXG4gICAgICAgICAgbnVtYmVyOiAnTnVtYmVyJyxcbiAgICAgICAgICBvZmY6ICdPZmYnLFxuICAgICAgICAgIG9uOiAnT24nLFxuICAgICAgICAgIG9wdGlvbjogJ09wdGlvbicsXG4gICAgICAgICAgb3B0aW9uczogJ09wdGlvbnMnLFxuICAgICAgICAgIG9wdGlvbmFsOiAnb3B0aW9uYWwnLFxuICAgICAgICAgIG9wdGlvbkxhYmVsUGxhY2Vob2xkZXI6ICdMYWJlbCcsXG4gICAgICAgICAgb3B0aW9uVmFsdWVQbGFjZWhvbGRlcjogJ1ZhbHVlJyxcbiAgICAgICAgICBvcHRpb25FbXB0eTogJ09wdGlvbiB2YWx1ZSByZXF1aXJlZCcsXG4gICAgICAgICAgb3RoZXI6ICdPdGhlcicsXG4gICAgICAgICAgcGFyYWdyYXBoOiAnUGFyYWdyYXBoJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BsYWNlaG9sZGVyJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcnM6IHtcbiAgICAgICAgICAgIHZhbHVlOiAnVmFsdWUnLFxuICAgICAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIHRleHRhcmVhOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnRW50ZXIgeW91IGVtYWlsJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NwYWNlIHNlcGFyYXRlZCBjbGFzc2VzJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnRW50ZXIgeW91ciBwYXNzd29yZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByZXZpZXc6ICdQcmV2aWV3JyxcbiAgICAgICAgICByYWRpb0dyb3VwOiAnUmFkaW8gR3JvdXAnLFxuICAgICAgICAgIHJhZGlvOiAnUmFkaW8nLFxuICAgICAgICAgIHJlbW92ZU1lc3NhZ2U6ICdSZW1vdmUgRWxlbWVudCcsXG4gICAgICAgICAgcmVtb3ZlT3B0aW9uOiAnUmVtb3ZlIE9wdGlvbicsXG4gICAgICAgICAgcmVtb3ZlOiAnJiMyMTU7JyxcbiAgICAgICAgICByZXF1aXJlZDogJ1JlcXVpcmVkJyxcbiAgICAgICAgICByaWNoVGV4dDogJ1JpY2ggVGV4dCBFZGl0b3InLFxuICAgICAgICAgIHJvbGVzOiAnQWNjZXNzJyxcbiAgICAgICAgICByb3dzOiAnUm93cycsXG4gICAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICAgIHNlbGVjdE9wdGlvbnM6ICdPcHRpb25zJyxcbiAgICAgICAgICBzZWxlY3Q6ICdTZWxlY3QnLFxuICAgICAgICAgIHNlbGVjdENvbG9yOiAnU2VsZWN0IENvbG9yJyxcbiAgICAgICAgICBzZWxlY3Rpb25zTWVzc2FnZTogJ0FsbG93IE11bHRpcGxlIFNlbGVjdGlvbnMnLFxuICAgICAgICAgIHNpemU6ICdTaXplJyxcbiAgICAgICAgICAnc2l6ZS54cyc6ICdFeHRyYSBTbWFsbCcsXG4gICAgICAgICAgJ3NpemUuc20nOiAnU21hbGwnLFxuICAgICAgICAgICdzaXplLm0nOiAnRGVmYXVsdCcsXG4gICAgICAgICAgJ3NpemUubGcnOiAnTGFyZ2UnLFxuICAgICAgICAgIHN0eWxlOiAnU3R5bGUnLFxuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgYnRuOiB7XG4gICAgICAgICAgICAgICdkZWZhdWx0JzogJ0RlZmF1bHQnLFxuICAgICAgICAgICAgICBkYW5nZXI6ICdEYW5nZXInLFxuICAgICAgICAgICAgICBpbmZvOiAnSW5mbycsXG4gICAgICAgICAgICAgIHByaW1hcnk6ICdQcmltYXJ5JyxcbiAgICAgICAgICAgICAgc3VjY2VzczogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgICB3YXJuaW5nOiAnV2FybmluZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1YnR5cGU6ICdUeXBlJyxcbiAgICAgICAgICB0ZXh0OiAnVGV4dCBGaWVsZCcsXG4gICAgICAgICAgdGV4dEFyZWE6ICdUZXh0IEFyZWEnLFxuICAgICAgICAgIHRvZ2dsZTogJ1RvZ2dsZScsXG4gICAgICAgICAgd2FybmluZzogJ1dhcm5pbmchJyxcbiAgICAgICAgICB2YWx1ZTogJ1ZhbHVlJyxcbiAgICAgICAgICB2aWV3SlNPTjogJ3sgIH0nLFxuICAgICAgICAgIHZpZXdYTUw6ICcmbHQ7LyZndDsnLFxuICAgICAgICAgIHllczogJ1llcydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgZnJtYklEID0gJ2ZybWItJyArICQoJ3VsW2lkXj1mcm1iLV0nKS5sZW5ndGgrKztcbiAgICBmb3JtQnVpbGRlci5mb3JtSUQgPSBmcm1iSUQ7XG4gICAgbGV0IHtpMThuLCAuLi5vcHRzfSA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucywgdHJ1ZSk7XG5cbiAgICBpMThuID0gYXdhaXQgZm9ybUJ1aWxkZXIubWkxOG4uaW5pdChpMThuKTtcbiAgICBjb25zdCBtaTE4biA9IGZvcm1CdWlsZGVyLm1pMThuO1xuXG4gICAgbGV0IF9oZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzLmpzJykob3B0cywgZm9ybUJ1aWxkZXIpO1xuXG4gICAgY29uc3Qgc3VidHlwZXMgPSBfaGVscGVycy5wcm9jZXNzU3VidHlwZXMob3B0cy5zdWJ0eXBlcyk7XG5cbiAgICBsZXQgJHNvcnRhYmxlRmllbGRzID0gJCgnPHVsLz4nKS5hdHRyKCdpZCcsIGZybWJJRCkuYWRkQ2xhc3MoJ2ZybWInKTtcblxuICAgIGZvcm1CdWlsZGVyLmxheW91dCA9IF9oZWxwZXJzLmVkaXRvckxheW91dChvcHRzLmNvbnRyb2xQb3NpdGlvbik7XG4gICAgZm9ybUJ1aWxkZXIuc3RhZ2UgPSAkc29ydGFibGVGaWVsZHNbMF07XG5cbiAgICBsZXQgbGFzdElEID0gZnJtYklEICsgJy1mbGQtMSc7XG4gICAgbGV0IGJveElEID0gZnJtYklEICsgJy1jb250cm9sLWJveCc7XG5cbiAgICAvLyBjcmVhdGUgYXJyYXkgb2YgZmllbGQgb2JqZWN0cyB0byBjeWNsZSB0aHJvdWdoXG4gICAgbGV0IGZybWJGaWVsZHMgPSBbe1xuICAgICAgbGFiZWw6IGkxOG5bJ2F1dG9jb21wbGV0ZSddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2F1dG9jb21wbGV0ZScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2F1dG9jb21wbGV0ZScsXG4gICAgICAgIG5hbWU6ICdhdXRvY29tcGxldGUnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ2J1dHRvbiddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbi1pbnB1dCcsXG4gICAgICAgIG5hbWU6ICdidXR0b24nXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ2NoZWNrYm94J10sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICBjbGFzc05hbWU6ICdjaGVja2JveCcsXG4gICAgICAgIG5hbWU6ICdjaGVja2JveCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogaTE4blsnY2hlY2tib3hHcm91cCddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICBuYW1lOiAnY2hlY2tib3gtZ3JvdXAnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ2RhdGVGaWVsZCddLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICBjbGFzc05hbWU6ICdjYWxlbmRhcicsXG4gICAgICAgIG5hbWU6ICdkYXRlLWlucHV0J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBpMThuWydmaWxlVXBsb2FkJ10sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2ZpbGUtaW5wdXQnLFxuICAgICAgICBuYW1lOiAnZmlsZS1pbnB1dCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogaTE4blsnaGVhZGVyJ10sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnaGVhZGVyJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnaGVhZGVyJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBpMThuWydoaWRkZW4nXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICBjbGFzc05hbWU6ICdoaWRkZW4taW5wdXQnLFxuICAgICAgICBuYW1lOiAnaGlkZGVuLWlucHV0J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBpMThuWydudW1iZXInXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBuYW1lOiAnbnVtYmVyJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBpMThuWydwYXJhZ3JhcGgnXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICBjbGFzc05hbWU6ICdwYXJhZ3JhcGgnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IGkxOG5bJ3JhZGlvR3JvdXAnXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdyYWRpby1ncm91cCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgbmFtZTogJ3JhZGlvLWdyb3VwJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBpMThuWydzZWxlY3QnXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3QnLFxuICAgICAgICBuYW1lOiAnc2VsZWN0J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBpMThuWyd0ZXh0J10sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ3RleHQtaW5wdXQnLFxuICAgICAgICBuYW1lOiAndGV4dC1pbnB1dCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogaTE4blsndGV4dEFyZWEnXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICd0ZXh0YXJlYScsXG4gICAgICAgIGNsYXNzTmFtZTogJ3RleHQtYXJlYScsXG4gICAgICAgIG5hbWU6ICd0ZXh0YXJlYSdcbiAgICAgIH1cbiAgICB9XTtcblxuICAgIGZybWJGaWVsZHMgPSBfaGVscGVycy5vcmRlckZpZWxkcyhmcm1iRmllbGRzKTtcblxuICAgIGlmIChvcHRzLmRpc2FibGVGaWVsZHMpIHtcbiAgICAgIC8vIHJlbW92ZSBkaXNhYmxlZEZpZWxkc1xuICAgICAgZnJtYkZpZWxkcyA9IGZybWJGaWVsZHMuZmlsdGVyKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiAhdXRpbHMuaW5BcnJheShmaWVsZC5hdHRycy50eXBlLCBvcHRzLmRpc2FibGVGaWVsZHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGRyYWdnYWJsZSBmaWVsZHMgZm9yIGZvcm1CdWlsZGVyXG4gICAgbGV0IGNiVWwgPSB1dGlscy5tYXJrdXAoJ3VsJywgbnVsbCwge2lkOiBib3hJRCwgY2xhc3NOYW1lOiAnZnJtYi1jb250cm9sJ30pO1xuICAgIGZvcm1CdWlsZGVyLmNvbnRyb2xzID0gY2JVbDtcblxuICAgIGlmIChvcHRzLnNvcnRhYmxlQ29udHJvbHMpIHtcbiAgICAgIGNiVWwuY2xhc3NMaXN0LmFkZCgnc29ydC1lbmFibGVkJyk7XG4gICAgfVxuXG4gICAgbGV0ICRjYlVMID0gJChjYlVsKTtcblxuICAgIC8vIExvb3AgdGhyb3VnaFxuICAgIHV0aWxzLmZvckVhY2goZnJtYkZpZWxkcywgKGkpID0+IHtcbiAgICAgIGxldCAkZmllbGQgPSAkKCc8bGkvPicsIHtcbiAgICAgICAgJ2NsYXNzJzogJ2ljb24tJyArIGZybWJGaWVsZHNbaV0uYXR0cnMuY2xhc3NOYW1lLFxuICAgICAgICAndHlwZSc6IGZybWJGaWVsZHNbaV0udHlwZSxcbiAgICAgICAgJ25hbWUnOiBmcm1iRmllbGRzW2ldLmNsYXNzTmFtZSxcbiAgICAgICAgJ2xhYmVsJzogZnJtYkZpZWxkc1tpXS5sYWJlbFxuICAgICAgfSk7XG5cbiAgICAgICRmaWVsZC5kYXRhKCduZXdGaWVsZERhdGEnLCBmcm1iRmllbGRzW2ldKTtcblxuICAgICAgbGV0IHR5cGVMYWJlbCA9IHV0aWxzLm1hcmt1cCgnc3BhbicsIGZybWJGaWVsZHNbaV0ubGFiZWwpO1xuICAgICAgJGZpZWxkLmh0bWwodHlwZUxhYmVsKS5hcHBlbmRUbygkY2JVTCk7XG4gICAgfSk7XG5cbiAgICBpZiAob3B0cy5pbnB1dFNldHMubGVuZ3RoKSB7XG4gICAgICAkKCc8bGkvPicsIHsnY2xhc3MnOiAnZmItc2VwYXJhdG9yJ30pLmh0bWwoJzxocj4nKS5hcHBlbmRUbygkY2JVTCk7XG4gICAgICBvcHRzLmlucHV0U2V0cy5mb3JFYWNoKChzZXQpID0+IHtcbiAgICAgICAgc2V0Lm5hbWUgPSBzZXQubmFtZSB8fCBfaGVscGVycy5tYWtlQ2xhc3NOYW1lKHNldC5sYWJlbCk7XG4gICAgICAgIGxldCAkc2V0ID0gJCgnPGxpLz4nLCB7J2NsYXNzJzogJ2lucHV0LXNldC1jb250cm9sJywgdHlwZTogc2V0Lm5hbWV9KTtcbiAgICAgICAgJHNldC5odG1sKHNldC5sYWJlbCkuYXBwZW5kVG8oJGNiVUwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU29ydGFibGUgZmllbGRzXG4gICAgJHNvcnRhYmxlRmllbGRzLnNvcnRhYmxlKHtcbiAgICAgIGN1cnNvcjogJ21vdmUnLFxuICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgcmV2ZXJ0OiAxNTAsXG4gICAgICBiZWZvcmVTdG9wOiBfaGVscGVycy5iZWZvcmVTdG9wLFxuICAgICAgc3RhcnQ6IF9oZWxwZXJzLnN0YXJ0TW92aW5nLFxuICAgICAgc3RvcDogX2hlbHBlcnMuc3RvcE1vdmluZyxcbiAgICAgIGNhbmNlbDogJ2lucHV0LCBzZWxlY3QsIC5kaXNhYmxlZC1maWVsZCwgLmZvcm0tZ3JvdXAsIC5idG4nLFxuICAgICAgcGxhY2Vob2xkZXI6ICdmcm1iLXBsYWNlaG9sZGVyJ1xuICAgIH0pO1xuXG4gICAgLy8gQ29udHJvbEJveCB3aXRoIGRpZmZlcmVudCBmaWVsZHNcbiAgICAkY2JVTC5zb3J0YWJsZSh7XG4gICAgICBoZWxwZXI6ICdjbG9uZScsXG4gICAgICBvcGFjaXR5OiAwLjksXG4gICAgICBjb25uZWN0V2l0aDogJHNvcnRhYmxlRmllbGRzLFxuICAgICAgY2FuY2VsOiAnLmZiLXNlcGFyYXRvcicsXG4gICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICBwbGFjZWhvbGRlcjogJ3VpLXN0YXRlLWhpZ2hsaWdodCcsXG4gICAgICBzdGFydDogX2hlbHBlcnMuc3RhcnRNb3ZpbmcsXG4gICAgICBzdG9wOiBfaGVscGVycy5zdG9wTW92aW5nLFxuICAgICAgcmV2ZXJ0OiAxNTAsXG4gICAgICBiZWZvcmVTdG9wOiBfaGVscGVycy5iZWZvcmVTdG9wLFxuICAgICAgZGlzdGFuY2U6IDMsXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICBpZiAoX2hlbHBlcnMuZG9DYW5jZWwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLml0ZW0ucGFyZW50KClbMF0gPT09ICRzb3J0YWJsZUZpZWxkc1swXSkge1xuICAgICAgICAgIHByb2Nlc3NDb250cm9sKHVpLml0ZW0pO1xuICAgICAgICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaGVscGVycy5zZXRGaWVsZE9yZGVyKCRjYlVMKTtcbiAgICAgICAgICBfaGVscGVycy5kb0NhbmNlbCA9ICFvcHRzLnNvcnRhYmxlQ29udHJvbHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBwcm9jZXNzQ29udHJvbCA9IChjb250cm9sKSA9PiB7XG4gICAgICBpZiAoY29udHJvbFswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LXNldC1jb250cm9sJykpIHtcbiAgICAgICAgbGV0IGlucHV0U2V0ID0gb3B0cy5pbnB1dFNldHMuZmlsdGVyKChzZXQpID0+IHtcbiAgICAgICAgICByZXR1cm4gc2V0Lm5hbWUgPT09IGNvbnRyb2xbMF0udHlwZTtcbiAgICAgICAgfSlbMF07XG4gICAgICAgIGlmIChpbnB1dFNldC5zaG93SGVhZGVyKSB7XG4gICAgICAgICAgbGV0IGhlYWRlciA9IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2hlYWRlcicsXG4gICAgICAgICAgICAgIHN1YnR5cGU6ICdoMicsXG4gICAgICAgICAgICAgIGlkOiBpbnB1dFNldC5uYW1lLFxuICAgICAgICAgICAgICBsYWJlbDogaW5wdXRTZXQubGFiZWxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgcHJlcEZpZWxkVmFycyhoZWFkZXIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0U2V0LmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgIHByZXBGaWVsZFZhcnMoZmllbGQsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXBGaWVsZFZhcnMoY29udHJvbCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCAkZm9ybVdyYXAgPSAkKCc8ZGl2Lz4nLCB7XG4gICAgICBpZDogZnJtYklEICsgJy1mb3JtLXdyYXAnLFxuICAgICAgJ2NsYXNzJzogJ2Zvcm0td3JhcCBmb3JtLWJ1aWxkZXInICsgX2hlbHBlcnMubW9iaWxlQ2xhc3MoKVxuICAgIH0pO1xuXG4gICAgZm9ybUJ1aWxkZXIuZWRpdG9yID0gJGZvcm1XcmFwWzBdO1xuXG4gICAgbGV0ICRzdGFnZVdyYXAgPSAkKCc8ZGl2Lz4nLCB7XG4gICAgICBpZDogZnJtYklEICsgJy1zdGFnZS13cmFwJyxcbiAgICAgICdjbGFzcyc6ICdzdGFnZS13cmFwICcgKyBmb3JtQnVpbGRlci5sYXlvdXQuc3RhZ2VcbiAgICB9KTtcblxuICAgIGxldCBjYldyYXAgPSAkKCc8ZGl2Lz4nLCB7XG4gICAgICBpZDogZnJtYklEICsgJy1jYi13cmFwJyxcbiAgICAgICdjbGFzcyc6ICdjYi13cmFwICcgKyBmb3JtQnVpbGRlci5sYXlvdXQuY29udHJvbHNcbiAgICB9KS5hcHBlbmQoJGNiVUxbMF0pO1xuXG4gICAgaWYgKG9wdHMuc2hvd0FjdGlvbkJ1dHRvbnMpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSBvcHRzLmFjdGlvbkJ1dHRvbnMubWFwKF9oZWxwZXJzLnByb2Nlc3NBY3Rpb25CdXR0b25zKTtcbiAgICAgIGNvbnN0IGZvcm1BY3Rpb25zID0gbSgnZGl2JywgYnV0dG9ucywge1xuICAgICAgICBjbGFzc05hbWU6ICdmb3JtLWFjdGlvbnMgYnRuLWdyb3VwJ1xuICAgICAgfSk7XG5cbiAgICAgIGNiV3JhcC5hcHBlbmQoZm9ybUFjdGlvbnMpO1xuICAgIH1cblxuICAgICRzdGFnZVdyYXAuYXBwZW5kKCRzb3J0YWJsZUZpZWxkcywgY2JXcmFwKTtcbiAgICAkc3RhZ2VXcmFwLmJlZm9yZSgkZm9ybVdyYXApO1xuICAgICRmb3JtV3JhcC5hcHBlbmQoJHN0YWdlV3JhcCwgY2JXcmFwKTtcblxuICAgIGlmIChlbGVtZW50LnR5cGUgIT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICQoZWxlbWVudCkuYXBwZW5kKCRmb3JtV3JhcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZWxlbWVudCkucmVwbGFjZVdpdGgoJGZvcm1XcmFwKTtcbiAgICB9XG5cbiAgICBsZXQgc2F2ZUFuZFVwZGF0ZSA9IF9oZWxwZXJzLmRlYm91bmNlKGV2dCA9PiB7XG4gICAgICBpZiAoZXZ0KSB7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldnQudGFyZ2V0Lm5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0ICRmaWVsZCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKTtcbiAgICAgICAgX2hlbHBlcnMudXBkYXRlUHJldmlldygkZmllbGQpO1xuICAgICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTYXZlIGZpZWxkIG9uIGNoYW5nZVxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2hhbmdlIGJsdXIga2V5dXAnLCAnLmZvcm0tZWxlbWVudHMgaW5wdXQsIC5mb3JtLWVsZW1lbnRzIHNlbGVjdCwgLmZvcm0tZWxlbWVudHMgdGV4dGFyZWEnLCBzYXZlQW5kVXBkYXRlKTtcblxuICAgICQoJ2xpJywgJGNiVUwpLmNsaWNrKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgbGV0ICRjb250cm9sID0gJChldnQudGFyZ2V0KS5jbG9zZXN0KCcudWktc29ydGFibGUtaGFuZGxlJyk7XG4gICAgICBfaGVscGVycy5zdG9wSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICBwcm9jZXNzQ29udHJvbCgkY29udHJvbCk7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYXBwZW5kIGFuZCBwcmVwZW5kIG9wdGlvbnMgaWYgbmVjZXNzYXJ5XG4gICAgbGV0IG5vbkVkaXRhYmxlRmllbGRzID0gKCkgPT4ge1xuICAgICAgbGV0IGNhbmNlbEFycmF5ID0gW107XG4gICAgICBjb25zdCBkaXNhYmxlZEZpZWxkID0gdHlwZSA9PlxuICAgICAgdXRpbHMubWFya3VwKCdsaScsIG9wdHNbdHlwZV0sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgZGlzYWJsZWQtZmllbGQgZm9ybS0ke3R5cGV9YFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChvcHRzLnByZXBlbmQgJiYgISQoJy5kaXNhYmxlZC1maWVsZC5mb3JtLXByZXBlbmQnLCAkc29ydGFibGVGaWVsZHMpLmxlbmd0aCkge1xuICAgICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAkc29ydGFibGVGaWVsZHMucHJlcGVuZChkaXNhYmxlZEZpZWxkKCdwcmVwZW5kJykpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5hcHBlbmQgJiYgISQoJy5kaXNhYmxlZC1maWVsZC5mb3JtLS5hcHBlbmQnLCAkc29ydGFibGVGaWVsZHMpLmxlbmd0aCkge1xuICAgICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAkc29ydGFibGVGaWVsZHMuYXBwZW5kKGRpc2FibGVkRmllbGQoJ2FwcGVuZCcpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbEFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgICAkc3RhZ2VXcmFwLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgICAgfVxuXG4gICAgICBfaGVscGVycy5kaXNhYmxlZFRULmluaXQoKTtcbiAgICB9O1xuXG4gICAgbGV0IHByZXBGaWVsZFZhcnMgPSBmdW5jdGlvbigkZmllbGQsIGlzTmV3ID0gZmFsc2UpIHtcbiAgICAgIGxldCBmaWVsZCA9IHt9O1xuICAgICAgaWYgKCRmaWVsZCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgICBsZXQgZmllbGREYXRhID0gJGZpZWxkLmRhdGEoJ25ld0ZpZWxkRGF0YScpO1xuICAgICAgICBpZiAoZmllbGREYXRhKSB7XG4gICAgICAgICAgZmllbGQgPSBmaWVsZERhdGEuYXR0cnM7XG4gICAgICAgICAgZmllbGQubGFiZWwgPSBmaWVsZERhdGEubGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGF0dHJzID0gJGZpZWxkWzBdLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgaWYgKCFpc05ldykge1xuICAgICAgICAgICAgZmllbGQudmFsdWVzID0gJGZpZWxkLmNoaWxkcmVuKCkubWFwKChpbmRleCwgZWxlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAkKGVsZW0pLnRleHQoKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJChlbGVtKS5hdHRyKCd2YWx1ZScpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBCb29sZWFuKCQoZWxlbSkuYXR0cignc2VsZWN0ZWQnKSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAobGV0IGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgZmllbGRbYXR0cnNbaV0ubmFtZV0gPSBhdHRyc1tpXS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgJGZpZWxkKTtcbiAgICAgIH1cblxuICAgICAgZmllbGQubmFtZSA9IGlzTmV3ID8gbmFtZUF0dHIoZmllbGQpIDogKCBmaWVsZC5uYW1lIHx8IG5hbWVBdHRyKGZpZWxkKSApO1xuXG4gICAgICBpZiAoaXNOZXcgJiYgdXRpbHMuaW5BcnJheShmaWVsZC50eXBlLFxuICAgICAgICBbJ3RleHQnLFxuICAgICAgICAgJ251bWJlcicsXG4gICAgICAgICAnZmlsZScsXG4gICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICd0ZXh0YXJlYScsXG4gICAgICAgICAnYXV0b2NvbXBsZXRlJ10pKSB7XG4gICAgICAgIGZpZWxkLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnOyAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQuY2xhc3NOYW1lID0gZmllbGQuY2xhc3MgfHwgZmllbGQuY2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICBsZXQgbWF0Y2ggPSAvKD86XnxcXHMpYnRuLSguKj8pKD86XFxzfCQpL2cuZXhlYyhmaWVsZC5jbGFzc05hbWUpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGZpZWxkLnN0eWxlID0gbWF0Y2hbMV07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmVzY2FwZUF0dHJzKGZpZWxkKTtcblxuICAgICAgYXBwZW5kTmV3RmllbGQoZmllbGQsIGlzTmV3KTtcbiAgICAgIGlmIChpc05ldykge1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZEFkZGVkKTtcbiAgICAgIH1cbiAgICAgICRzdGFnZVdyYXAucmVtb3ZlQ2xhc3MoJ2VtcHR5Jyk7XG4gICAgfTtcblxuICAgIC8vIFBhcnNlIHNhdmVkIFhNTCB0ZW1wbGF0ZSBkYXRhXG4gICAgbGV0IGxvYWRGaWVsZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIF9oZWxwZXJzLmdldERhdGEoKTtcbiAgICAgIGxldCBmb3JtRGF0YSA9IGZvcm1CdWlsZGVyLmZvcm1EYXRhO1xuICAgICAgaWYgKGZvcm1EYXRhICYmIGZvcm1EYXRhLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcHJlcEZpZWxkVmFycyhmb3JtRGF0YVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgJHN0YWdlV3JhcC5yZW1vdmVDbGFzcygnZW1wdHknKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0cy5kZWZhdWx0RmllbGRzICYmIG9wdHMuZGVmYXVsdEZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gTG9hZCBkZWZhdWx0IGZpZWxkcyBpZiBub25lIGFyZSBzZXRcbiAgICAgICAgb3B0cy5kZWZhdWx0RmllbGRzLmZvckVhY2goZmllbGQgPT4gcHJlcEZpZWxkVmFycyhmaWVsZCkpO1xuICAgICAgICAkc3RhZ2VXcmFwLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgICAgfSBlbHNlIGlmICghb3B0cy5wcmVwZW5kICYmICFvcHRzLmFwcGVuZCkge1xuICAgICAgICAkc3RhZ2VXcmFwLmFkZENsYXNzKCdlbXB0eScpXG4gICAgICAgIC5hdHRyKCdkYXRhLWNvbnRlbnQnLCBpMThuLmdldFN0YXJ0ZWQpO1xuICAgICAgfVxuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuXG4gICAgICBub25FZGl0YWJsZUZpZWxkcygpO1xuICAgIH07XG5cbiAgICBsZXQgbmFtZUF0dHIgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgbGV0IGVwb2NoID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICByZXR1cm4gZmllbGQudHlwZSArICctJyArIGVwb2NoO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZGF0YSBmb3IgZmllbGQgd2l0aCBvcHRpb25zIFtzZWxlY3QsIGNoZWNrYm94LWdyb3VwLCByYWRpby1ncm91cF1cbiAgICAgKlxuICAgICAqIEB0b2RvICAgcmVmYWN0b3IgdGhpcyBuYXN0eSB+Y3JhcH4gY29kZSwgaXRzIGFjdHVhbGx5IHBhaW5mdWwgdG8gbG9vayBhdFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBmaWVsZCBvcHRpb25zIG1hcmt1cFxuICAgICAqL1xuICAgIGxldCBmaWVsZE9wdGlvbnMgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIGxldCBvcHRpb25BY3Rpb25zID0gW1xuICAgICAgICAgIHV0aWxzLm1hcmt1cCgnYScsIGkxOG4uYWRkT3B0aW9uLCB7Y2xhc3NOYW1lOiAnYWRkIGFkZC1vcHQnfSlcbiAgICAgICAgXTtcbiAgICAgIGxldCBmaWVsZE9wdGlvbnMgPSBbXG4gICAgICAgIGA8bGFiZWwgY2xhc3M9XCJmYWxzZS1sYWJlbFwiPiR7aTE4bi5zZWxlY3RPcHRpb25zfTwvbGFiZWw+YFxuICAgICAgXTtcbiAgICAgIGNvbnN0IGlzTXVsdGlwbGUgPSB2YWx1ZXMubXVsdGlwbGUgfHwgKHZhbHVlcy50eXBlID09PSAnY2hlY2tib3gtZ3JvdXAnKTtcblxuICAgICAgaWYgKCF2YWx1ZXMudmFsdWVzIHx8ICF2YWx1ZXMudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZXMudmFsdWVzID0gWzEsIDIsIDNdLm1hcChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIGxldCBsYWJlbCA9IGAke2kxOG4ub3B0aW9ufSAke2luZGV4fWA7XG4gICAgICAgICAgbGV0IG9wdGlvbiA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgIHZhbHVlOiB1dGlscy5oeXBoZW5DYXNlKGxhYmVsKVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhbHVlcy52YWx1ZXNbMF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZW5zdXJlIG9wdGlvbiBkYXRhIGlzIGhhcyBhbGwgcmVxdWlyZWQga2V5c1xuICAgICAgICB2YWx1ZXMudmFsdWVzLmZvckVhY2gob3B0aW9uID0+IE9iamVjdC5hc3NpZ24oe30sIHtzZWxlY3RlZDogZmFsc2V9LCBvcHRpb24pKTtcbiAgICAgIH1cblxuICAgICAgZmllbGRPcHRpb25zLnB1c2goJzxkaXYgY2xhc3M9XCJzb3J0YWJsZS1vcHRpb25zLXdyYXBcIj4nKTtcblxuICAgICAgZmllbGRPcHRpb25zLnB1c2goJzxvbCBjbGFzcz1cInNvcnRhYmxlLW9wdGlvbnNcIj4nKTtcbiAgICAgIHV0aWxzLmZvckVhY2godmFsdWVzLnZhbHVlcywgKGkpID0+IHtcbiAgICAgICAgZmllbGRPcHRpb25zLnB1c2goc2VsZWN0RmllbGRPcHRpb25zKHZhbHVlcy5uYW1lLCB2YWx1ZXMudmFsdWVzW2ldLCBpc011bHRpcGxlKSk7XG4gICAgICB9KTtcbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8L29sPicpO1xuICAgICAgZmllbGRPcHRpb25zLnB1c2godXRpbHMubWFya3VwKCdkaXYnLCBvcHRpb25BY3Rpb25zLCB7Y2xhc3NOYW1lOiAnb3B0aW9uLWFjdGlvbnMnfSkub3V0ZXJIVE1MKTtcbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8L2Rpdj4nKTtcblxuICAgICAgcmV0dXJuIHV0aWxzLm1hcmt1cCgnZGl2JywgZmllbGRPcHRpb25zLmpvaW4oJycpLCB7Y2xhc3NOYW1lOiAnZm9ybS1ncm91cCBmaWVsZC1vcHRpb25zJ30pLm91dGVySFRNTDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIGVkaXRhYmxlIHByb3BlcnRpZXMgZm9yIHRoZSBmaWVsZFxuICAgICAqIEBwYXJhbSAge29iamVjdH0gdmFsdWVzIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciBhZHZhbmNlZCBmaWVsZHNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICBtYXJrdXAgZm9yIGFkdmFuY2VkIGZpZWxkc1xuICAgICAqL1xuICAgIGxldCBhZHZGaWVsZHMgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIGxldCBhZHZGaWVsZHMgPSBbXTtcbiAgICAgIGxldCBrZXk7XG4gICAgICBsZXQgdmFsdWVGaWVsZCA9ICF1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ2hlYWRlcicsICdwYXJhZ3JhcGgnLCAnZmlsZSddLmNvbmNhdChkLm9wdGlvbkZpZWxkcykpO1xuICAgICAgbGV0IHJvbGVzID0gdmFsdWVzLnJvbGUgIT09IHVuZGVmaW5lZCA/IHZhbHVlcy5yb2xlLnNwbGl0KCcsJykgOiBbXTtcblxuICAgICAgYWR2RmllbGRzLnB1c2gocmVxdWlyZWRGaWVsZCh2YWx1ZXMpKTtcblxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ3RvZ2dsZScsIHZhbHVlcywge2ZpcnN0OiBpMThuLnRvZ2dsZX0pKTtcbiAgICAgIH1cblxuICAgICAgLy8gSW5saW5lIG9wdGlvbnNcbiAgICAgIGlmICh1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10pKSB7XG4gICAgICAgIGxldCBsYWJlbHMgPSB7XG4gICAgICAgICAgZmlyc3Q6IGkxOG4uaW5saW5lLFxuICAgICAgICAgIHNlY29uZDogbWkxOG4uZ2V0KCdtZXNzYWdlcy5pbmxpbmVEZXNjJywgdmFsdWVzLnR5cGUucmVwbGFjZSgnLWdyb3VwJywgJycpKVxuICAgICAgICB9O1xuXG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ2lubGluZScsIHZhbHVlcywgbGFiZWxzKSk7XG4gICAgICB9XG5cbiAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ2xhYmVsJywgdmFsdWVzKSk7XG5cbiAgICAgIHZhbHVlcy5zaXplID0gdmFsdWVzLnNpemUgfHwgJ20nO1xuICAgICAgdmFsdWVzLnN0eWxlID0gdmFsdWVzLnN0eWxlIHx8ICdkZWZhdWx0JztcblxuICAgICAgLy8gSGVscCBUZXh0IC8gRGVzY3JpcHRpb24gRmllbGRcbiAgICAgIGlmICghdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgWydoZWFkZXInLCAncGFyYWdyYXBoJywgJ2J1dHRvbiddKSkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdkZXNjcmlwdGlvbicsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3VidHlwZXNbdmFsdWVzLnR5cGVdKSB7XG4gICAgICAgIGxldCBvcHRpb25EYXRhID0gc3VidHlwZXNbdmFsdWVzLnR5cGVdO1xuICAgICAgICBhZHZGaWVsZHMucHVzaChzZWxlY3RBdHRyaWJ1dGUoJ3N1YnR5cGUnLCB2YWx1ZXMsIG9wdGlvbkRhdGEpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChidG5TdHlsZXModmFsdWVzLnN0eWxlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtaW4nLCB2YWx1ZXMpKTtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtYXgnLCB2YWx1ZXMpKTtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdzdGVwJywgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFBsYWNlaG9sZGVyXG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHZhbHVlcykpO1xuXG4gICAgICAvLyBUZXh0QXJlYSBSb3dzIEF0dHJpYnV0ZVxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAndGV4dGFyZWEnKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgncm93cycsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGFzc1xuICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgnY2xhc3NOYW1lJywgdmFsdWVzKSk7XG5cbiAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ25hbWUnLCB2YWx1ZXMpKTtcblxuICAgICAgaWYgKHZhbHVlRmllbGQpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgbGV0IGxhYmVscyA9IHtcbiAgICAgICAgICBmaXJzdDogaTE4bi5tdWx0aXBsZUZpbGVzLFxuICAgICAgICAgIHNlY29uZDogaTE4bi5hbGxvd011bHRpcGxlRmlsZXNcbiAgICAgICAgfTtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB2YWx1ZXMsIGxhYmVscykpO1xuICAgICAgfVxuXG4gICAgICBsZXQgcm9sZXNEaXNwbGF5ID0gdmFsdWVzLnJvbGUgIT09IHVuZGVmaW5lZCA/ICdzdHlsZT1cImRpc3BsYXk6YmxvY2tcIicgOiAnJztcbiAgICAgIGxldCBhdmFpbGFibGVSb2xlcyA9IFtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhdmFpbGFibGUtcm9sZXNcIiAke3JvbGVzRGlzcGxheX0+YFxuICAgICAgXTtcbiAgICAgIGZvciAoa2V5IGluIG9wdHMucm9sZXMpIHtcbiAgICAgICAgaWYgKG9wdHMucm9sZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGxldCBjaGVja2VkID0gdXRpbHMuaW5BcnJheShrZXksIHJvbGVzKSA/ICdjaGVja2VkJyA6ICcnO1xuICAgICAgICAgIGxldCByb2xlSWQgPSBgZmxkLSR7bGFzdElEfS1yb2xlcy0ke2tleX1gO1xuICAgICAgICAgIGF2YWlsYWJsZVJvbGVzLnB1c2goYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicm9sZXNbXVwiIHZhbHVlPVwiJHtrZXl9XCIgaWQ9XCIke3JvbGVJZH1cIiAke2NoZWNrZWR9IGNsYXNzPVwicm9sZXMtZmllbGRcIiAvPiA8bGFiZWwgZm9yPVwiJHtyb2xlSWR9XCI+JHtvcHRzLnJvbGVzW2tleV19PC9sYWJlbD48YnIvPmApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGF2YWlsYWJsZVJvbGVzLnB1c2goJzwvZGl2PicpO1xuXG4gICAgICBsZXQgYWNjZXNzTGFiZWxzID0ge2ZpcnN0OiBpMThuLnJvbGVzLCBzZWNvbmQ6IGkxOG4ubGltaXRSb2xlLCBjb250ZW50OiBhdmFpbGFibGVSb2xlcy5qb2luKCcnKX07XG5cbiAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ2FjY2VzcycsIHZhbHVlcywgYWNjZXNzTGFiZWxzKSk7XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZS5tYXRjaCgvKGNoZWNrYm94LWdyb3VwfHJhZGlvLWdyb3VwKS8pKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ290aGVyJywgdmFsdWVzLCB7Zmlyc3Q6IGkxOG4uZW5hYmxlT3RoZXIsIHNlY29uZDogaTE4bi5lbmFibGVPdGhlck1zZ30pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdtdWx0aXBsZScsIHZhbHVlcywge2ZpcnN0OiAnICcsIHNlY29uZDogaTE4bi5zZWxlY3Rpb25zTWVzc2FnZX0pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlcy50eXBlLm1hdGNoKGQub3B0aW9uRmllbGRzUmVnRXgpKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGZpZWxkT3B0aW9ucyh2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsndGV4dCcsICd0ZXh0YXJlYSddKSkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChudW1iZXJBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBBcHBlbmQgY3VzdG9tIGF0dHJpYnV0ZXMgYXMgZGVmaW5lZCBpbiB0eXBlVXNlckF0dHJzIG9wdGlvblxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0pIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gocHJvY2Vzc1R5cGVVc2VyQXR0cnMob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSwgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhZHZGaWVsZHMuam9pbignJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyB0eXBlVXNlckF0dHJzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB0eXBlVXNlckF0dHIgb3B0aW9uXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXMgICAgICAgZmllbGQgYXR0cmlidXRlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgICAgIG1hcmt1cCBmb3IgY3VzdG9tIHVzZXIgYXR0cmlidXRlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHByb2Nlc3NUeXBlVXNlckF0dHJzKHR5cGVVc2VyQXR0ciwgdmFsdWVzKSB7XG4gICAgICBsZXQgYWR2RmllbGQgPSBbXTtcblxuICAgICAgZm9yIChsZXQgYXR0cmlidXRlIGluIHR5cGVVc2VyQXR0cikge1xuICAgICAgICBpZiAodHlwZVVzZXJBdHRyLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICBsZXQgb3JpZyA9IGkxOG5bYXR0cmlidXRlXTtcbiAgICAgICAgICBsZXQgb3JpZ1ZhbHVlID0gdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWU7XG4gICAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSB2YWx1ZXNbYXR0cmlidXRlXSB8fCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZSB8fCAnJztcblxuICAgICAgICAgIGlmICh0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5sYWJlbCkge1xuICAgICAgICAgICAgaTE4blthdHRyaWJ1dGVdID0gdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ubGFiZWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGFkdkZpZWxkLnB1c2goc2VsZWN0VXNlckF0dHJzKGF0dHJpYnV0ZSwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWR2RmllbGQucHVzaChpbnB1dFVzZXJBdHRycyhhdHRyaWJ1dGUsIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaTE4blthdHRyaWJ1dGVdID0gb3JpZztcbiAgICAgICAgICB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZSA9IG9yaWdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWR2RmllbGQuam9pbignJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGV4dCBpbnB1dCB2YWx1ZSBmb3IgYXR0cmlidXRlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyBhbHNvIGtub3duIGFzIHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgaW5wdXQgbWFya3VwXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5wdXRVc2VyQXR0cnMobmFtZSwgYXR0cnMpIHtcbiAgICAgIGxldCB0ZXh0QXR0cnMgPSB7XG4gICAgICAgICAgaWQ6IG5hbWUgKyAnLScgKyBsYXN0SUQsXG4gICAgICAgICAgdGl0bGU6IGF0dHJzLmRlc2NyaXB0aW9uIHx8IGF0dHJzLmxhYmVsIHx8IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IGF0dHJzLnR5cGUgfHwgJ3RleHQnLFxuICAgICAgICAgIGNsYXNzTmFtZTogW2BmbGQtJHtuYW1lfWBdXG4gICAgICAgIH07XG4gICAgICBsZXQgbGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7dGV4dEF0dHJzLmlkfVwiPiR7aTE4bltuYW1lXX08L2xhYmVsPmA7XG5cbiAgICAgIGlmICghdXRpbHMuaW5BcnJheSh0ZXh0QXR0cnMudHlwZSwgWydjaGVja2JveCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddKSkge1xuICAgICAgICB0ZXh0QXR0cnMuY2xhc3NOYW1lLnB1c2goJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgfVxuXG4gICAgICB0ZXh0QXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgdGV4dEF0dHJzKTtcbiAgICAgIGxldCB0ZXh0SW5wdXQgPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyh0ZXh0QXR0cnMpfT5gO1xuICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7dGV4dElucHV0fTwvZGl2PmA7XG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGFiZWx9JHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgaW5wdXQgZm9yIG11bHRpcGxlIGNob2ljZSB1c2VyIGF0dHJpYnV0ZXNcbiAgICAgKiBAdG9kbyAgcmVwbGFjZSB3aXRoIHNlbGVjdEF0dHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgc2VsZWN0IG1hcmt1cFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNlbGVjdFVzZXJBdHRycyhuYW1lLCBvcHRpb25zKSB7XG4gICAgICBsZXQgb3B0aXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLm9wdGlvbnMpLm1hcCh2YWwgPT4ge1xuICAgICAgICBsZXQgYXR0cnMgPSB7dmFsdWU6IHZhbH07XG4gICAgICAgIGlmICh2YWwgPT09IG9wdGlvbnMudmFsdWUpIHtcbiAgICAgICAgICBhdHRycy5zZWxlY3RlZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8b3B0aW9uICR7dXRpbHMuYXR0clN0cmluZyhhdHRycyl9PiR7b3B0aW9ucy5vcHRpb25zW3ZhbF19PC9vcHRpb24+YDtcbiAgICAgIH0pO1xuICAgICAgbGV0IHNlbGVjdEF0dHJzID0ge1xuICAgICAgICBpZDogbmFtZSArICctJyArIGxhc3RJRCxcbiAgICAgICAgdGl0bGU6IG9wdGlvbnMuZGVzY3JpcHRpb24gfHwgb3B0aW9ucy5sYWJlbCB8fCBuYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke25hbWV9IGZvcm0tY29udHJvbGBcbiAgICAgIH07XG4gICAgICBsZXQgbGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7c2VsZWN0QXR0cnMuaWR9XCI+JHtpMThuW25hbWVdfTwvbGFiZWw+YDtcblxuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZmlsdGVyKHByb3AgPT4ge1xuICAgICAgICByZXR1cm4gIXV0aWxzLmluQXJyYXkocHJvcCwgWyd2YWx1ZScsICdvcHRpb25zJywgJ2xhYmVsJ10pO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbihhdHRyKSB7XG4gICAgICAgIHNlbGVjdEF0dHJzW2F0dHJdID0gb3B0aW9uc1thdHRyXTtcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgc2VsZWN0ID0gYDxzZWxlY3QgJHt1dGlscy5hdHRyU3RyaW5nKHNlbGVjdEF0dHJzKX0+JHtvcHRpcy5qb2luKCcnKX08L3NlbGVjdD5gO1xuICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7c2VsZWN0fTwvZGl2PmA7XG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGFiZWx9JHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9XG5cbiAgICBsZXQgYm9vbEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlcywgbGFiZWxzKSB7XG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW25hbWVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhYmVsID0gKHR4dCkgPT4ge1xuICAgICAgICByZXR1cm4gYDxsYWJlbCBmb3I9XCIke25hbWV9LSR7bGFzdElEfVwiPiR7dHh0fTwvbGFiZWw+YDtcbiAgICAgIH07XG4gICAgICBsZXQgY2hlY2tlZCA9ICh2YWx1ZXNbbmFtZV0gIT09IHVuZGVmaW5lZCA/ICdjaGVja2VkJyA6ICcnKTtcbiAgICAgIGxldCBpbnB1dCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmbGQtJHtuYW1lfVwiIG5hbWU9XCIke25hbWV9XCIgdmFsdWU9XCJ0cnVlXCIgJHtjaGVja2VkfSBpZD1cIiR7bmFtZX0tJHtsYXN0SUR9XCIvPiBgO1xuICAgICAgbGV0IGxlZnQgPSBbXTtcbiAgICAgIGxldCByaWdodCA9IFtcbiAgICAgICAgaW5wdXRcbiAgICAgIF07XG5cbiAgICAgIGlmIChsYWJlbHMuZmlyc3QpIHtcbiAgICAgICAgbGVmdC51bnNoaWZ0KGxhYmVsKGxhYmVscy5maXJzdCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGFiZWxzLnNlY29uZCkge1xuICAgICAgICByaWdodC5wdXNoKGxhYmVsKGxhYmVscy5zZWNvbmQpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhYmVscy5jb250ZW50KSB7XG4gICAgICAgIHJpZ2h0LnB1c2gobGFiZWxzLmNvbnRlbnQpO1xuICAgICAgfVxuXG4gICAgICByaWdodC51bnNoaWZ0KCc8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPicpO1xuICAgICAgcmlnaHQucHVzaCgnPC9kaXY+Jyk7XG5cbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtuYW1lfS13cmFwXCI+JHtsZWZ0LmNvbmNhdChyaWdodCkuam9pbignJyl9PC9kaXY+YDtcbiAgICB9O1xuXG4gICAgbGV0IGJ0blN0eWxlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIGxldCBzdHlsZXMgPSBpMThuWydzdHlsZXMuYnRuJ107XG4gICAgICAgIGxldCBzdHlsZUZpZWxkID0gJyc7XG5cbiAgICAgIGlmIChzdHlsZXMpIHtcbiAgICAgICAgbGV0IHN0eWxlTGFiZWwgPSBgPGxhYmVsPiR7aTE4bi5zdHlsZX08L2xhYmVsPmA7XG4gICAgICAgIHN0eWxlRmllbGQgKz0gYDxpbnB1dCB2YWx1ZT1cIiR7c3R5bGV9XCIgbmFtZT1cInN0eWxlXCIgdHlwZT1cImhpZGRlblwiIGNsYXNzPVwiYnRuLXN0eWxlXCI+YDtcbiAgICAgICAgc3R5bGVGaWVsZCArPSAnPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiPic7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGxldCBjbGFzc0xpc3QgPSBbJ2J0bi14cycsICdidG4nLCBgYnRuLSR7ZWxlbWVudH1gXTtcbiAgICAgICAgICBpZiAoc3R5bGUgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNsYXNzTGlzdC5wdXNoKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0eWxlRmllbGQgKz0gYDxidXR0b24gdmFsdWU9XCIke2VsZW1lbnR9XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtjbGFzc0xpc3Quam9pbignICcpfVwiPiR7aTE4bi5zdHlsZXMuYnRuW2VsZW1lbnRdfTwvYnV0dG9uPmA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0eWxlRmllbGQgKz0gJzwvZGl2Pic7XG5cbiAgICAgICAgc3R5bGVGaWVsZCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzdHlsZS13cmFwXCI+JHtzdHlsZUxhYmVsfSAke3N0eWxlRmllbGR9PC9kaXY+YDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlRmllbGQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG51bWJlciBhdHRyaWJ1dGUgdG8gYSBmaWVsZC5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBtYXJrdXAgZm9yIG51bWJlciBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICBsZXQgbnVtYmVyQXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZXMpIHtcbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bYXR0cmlidXRlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBhdHRyVmFsID0gdmFsdWVzW2F0dHJpYnV0ZV07XG4gICAgICBsZXQgYXR0ckxhYmVsID0gaTE4blthdHRyaWJ1dGVdIHx8IGF0dHJpYnV0ZTtcbiAgICAgIGxldCBwbGFjZWhvbGRlciA9IGkxOG4ucGxhY2Vob2xkZXJzW2F0dHJpYnV0ZV07XG4gICAgICBsZXQgaW5wdXRDb25maWcgPSB7XG4gICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICB2YWx1ZTogYXR0clZhbCxcbiAgICAgICAgbmFtZTogYXR0cmlidXRlLFxuICAgICAgICBtaW46ICcwJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHthdHRyaWJ1dGV9IGZvcm0tY29udHJvbGAsXG4gICAgICAgIGlkOiBgJHthdHRyaWJ1dGV9LSR7bGFzdElEfWBcbiAgICAgIH07XG4gICAgICBsZXQgbnVtYmVyQXR0cmlidXRlID0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcodXRpbHMudHJpbU9iaihpbnB1dENvbmZpZykpfT5gO1xuICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7bnVtYmVyQXR0cmlidXRlfTwvZGl2PmA7XG5cbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHthdHRyaWJ1dGV9LXdyYXBcIj48bGFiZWwgZm9yPVwiJHtpbnB1dENvbmZpZy5pZH1cIj4ke2F0dHJMYWJlbH08L2xhYmVsPiAke2lucHV0V3JhcH08L2Rpdj5gO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBzZWxlY3RBdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZSAgYXR0cmlidXRlIG5hbWVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlcyAgICAgYWthIGF0dHJzXG4gICAgICogQHBhcmFtICB7QXJyYXl9IG9wdGlvbkRhdGEgIHNlbGVjdCBmaWVsZCBvcHRpb24gZGF0YVxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgICBzZWxlY3QgaW5wdXQgbWFrcnVwXG4gICAgICovXG4gICAgbGV0IHNlbGVjdEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzLCBvcHRpb25EYXRhKSB7XG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNlbGVjdE9wdGlvbnMgPSBvcHRpb25EYXRhLm1hcCgob3B0aW9uLCBpKSA9PiB7XG4gICAgICAgIGxldCBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGxhYmVsOiBgJHtpMThuLm9wdGlvbn0gJHtpfWAsXG4gICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICB9LCBvcHRpb24pO1xuICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSB2YWx1ZXNbYXR0cmlidXRlXSkge1xuICAgICAgICAgIG9wdGlvbkF0dHJzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDxvcHRpb24gJHt1dGlscy5hdHRyU3RyaW5nKHV0aWxzLnRyaW1PYmoob3B0aW9uQXR0cnMpKX0+JHtvcHRpb25BdHRycy5sYWJlbH08L29wdGlvbj5gO1xuICAgICAgfSk7XG4gICAgICBsZXQgc2VsZWN0QXR0cnMgPSB7XG4gICAgICAgICAgaWQ6IGF0dHJpYnV0ZSArICctJyArIGxhc3RJRCxcbiAgICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgXG4gICAgICAgIH07XG4gICAgICBsZXQgbGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7c2VsZWN0QXR0cnMuaWR9XCI+JHtpMThuW2F0dHJpYnV0ZV0gfHwgdXRpbHMuY2FwaXRhbGl6ZShhdHRyaWJ1dGUpfTwvbGFiZWw+YDtcbiAgICAgIGxldCBzZWxlY3QgPSBgPHNlbGVjdCAke3V0aWxzLmF0dHJTdHJpbmcoc2VsZWN0QXR0cnMpfT4ke3NlbGVjdE9wdGlvbnMuam9pbignJyl9PC9zZWxlY3Q+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3NlbGVjdH08L2Rpdj5gO1xuXG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7c2VsZWN0QXR0cnMubmFtZX0td3JhcFwiPiR7bGFiZWx9JHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgc29tZSB0ZXh0IGlucHV0cyBmb3IgZmllbGQgYXR0cmlidXRlcywgKip3aWxsIGJlIHJlcGxhY2VkKipcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIGxldCB0ZXh0QXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZXMpIHtcbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bYXR0cmlidXRlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBwbGFjZWhvbGRlckZpZWxkcyA9IFtcbiAgICAgICAgJ3RleHQnLFxuICAgICAgICAndGV4dGFyZWEnLFxuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgJ2F1dG9jb21wbGV0ZSdcbiAgICAgIF07XG5cbiAgICAgIGxldCBub05hbWUgPSBbXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAncGFyYWdyYXBoJ1xuICAgICAgXTtcblxuICAgICAgbGV0IHRleHRBcmVhID0gWydwYXJhZ3JhcGgnXTtcblxuICAgICAgbGV0IGF0dHJWYWwgPSB2YWx1ZXNbYXR0cmlidXRlXSB8fCAnJztcbiAgICAgIGxldCBhdHRyTGFiZWwgPSBpMThuW2F0dHJpYnV0ZV07XG4gICAgICBpZiAoYXR0cmlidXRlID09PSAnbGFiZWwnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHRleHRBcmVhKSkge1xuICAgICAgICBhdHRyTGFiZWwgPSBpMThuLmNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdWJ0eXBlcy5oZWFkZXIpIHtcbiAgICAgICAgbm9OYW1lID0gbm9OYW1lLmNvbmNhdChzdWJ0eXBlcy5oZWFkZXIpO1xuICAgICAgfVxuXG4gICAgICBsZXQgcGxhY2Vob2xkZXJzID0gaTE4bi5wbGFjZWhvbGRlcnM7XG4gICAgICBsZXQgcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcnNbYXR0cmlidXRlXSB8fCAnJztcbiAgICAgIGxldCBhdHRyaWJ1dGVmaWVsZCA9ICcnO1xuICAgICAgbGV0IG5vTWFrZUF0dHIgPSBbXTtcblxuICAgICAgLy8gRmllbGQgaGFzIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZVxuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3BsYWNlaG9sZGVyJyAmJiAhdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgcGxhY2Vob2xkZXJGaWVsZHMpKSB7XG4gICAgICAgIG5vTWFrZUF0dHIucHVzaCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gRmllbGQgaGFzIG5hbWUgYXR0cmlidXRlXG4gICAgICBpZiAoYXR0cmlidXRlID09PSAnbmFtZScgJiYgdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgbm9OYW1lKSkge1xuICAgICAgICBub01ha2VBdHRyLnB1c2godHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbm9NYWtlQXR0ci5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgbGV0IGlucHV0Q29uZmlnID0ge1xuICAgICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgLFxuICAgICAgICAgIGlkOiBgJHthdHRyaWJ1dGV9LSR7bGFzdElEfWBcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZUxhYmVsID0gYDxsYWJlbCBmb3I9XCIke2lucHV0Q29uZmlnLmlkfVwiPiR7YXR0ckxhYmVsfTwvbGFiZWw+YDtcblxuICAgICAgICBpZiAoYXR0cmlidXRlID09PSAnbGFiZWwnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHRleHRBcmVhKSB8fCAoYXR0cmlidXRlID09PSAndmFsdWUnICYmIHZhbHVlcy50eXBlID09PSAndGV4dGFyZWEnKSkge1xuICAgICAgICAgIGF0dHJpYnV0ZWZpZWxkICs9IGA8dGV4dGFyZWEgJHt1dGlscy5hdHRyU3RyaW5nKGlucHV0Q29uZmlnKX0+JHthdHRyVmFsfTwvdGV4dGFyZWE+YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnB1dENvbmZpZy52YWx1ZSA9IGF0dHJWYWw7XG4gICAgICAgICAgaW5wdXRDb25maWcudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICBhdHRyaWJ1dGVmaWVsZCArPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyhpbnB1dENvbmZpZyl9PmA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHthdHRyaWJ1dGVmaWVsZH08L2Rpdj5gO1xuXG4gICAgICAgIGxldCB2aXNpYmlsaXR5ID0gJ2Jsb2NrJztcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICAgIHZpc2liaWxpdHkgPSB2YWx1ZXMuc3VidHlwZSAmJiB2YWx1ZXMuc3VidHlwZSA9PT0gJ3F1aWxsJyAmJiAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyaWJ1dGVmaWVsZCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke2F0dHJpYnV0ZX0td3JhcFwiIHN0eWxlPVwiZGlzcGxheTogJHt2aXNpYmlsaXR5fVwiPiR7YXR0cmlidXRlTGFiZWx9ICR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyaWJ1dGVmaWVsZDtcbiAgICB9O1xuXG4gICAgbGV0IHJlcXVpcmVkRmllbGQgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIGxldCBub1JlcXVpcmUgPSBbXG4gICAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICAgJ2J1dHRvbidcbiAgICAgICAgXTtcbiAgICAgIGxldCBub01ha2UgPSBbXTtcbiAgICAgIGxldCByZXF1aXJlRmllbGQgPSAnJztcblxuICAgICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIG5vUmVxdWlyZSkpIHtcbiAgICAgICAgbm9NYWtlLnB1c2godHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoIW5vTWFrZS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgcmVxdWlyZUZpZWxkID0gYm9vbEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB2YWx1ZXMsIHtmaXJzdDogaTE4bi5yZXF1aXJlZH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVxdWlyZUZpZWxkO1xuICAgIH07XG5cbiAgICAvLyBBcHBlbmQgdGhlIG5ldyBmaWVsZCB0byB0aGUgZWRpdG9yXG4gICAgbGV0IGFwcGVuZE5ld0ZpZWxkID0gZnVuY3Rpb24odmFsdWVzLCBpc05ldyA9IHRydWUpIHtcbiAgICAgIGxldCB0eXBlID0gdmFsdWVzLnR5cGUgfHwgJ3RleHQnO1xuICAgICAgbGV0IGxhYmVsID0gdmFsdWVzLmxhYmVsIHx8IGkxOG5bdHlwZV0gfHwgaTE4bi5sYWJlbDtcbiAgICAgIGxldCBkZWxCdG4gPSBtKCdhJywgaTE4bi5yZW1vdmUsIHtcbiAgICAgICAgICBpZDogJ2RlbF8nICsgbGFzdElELFxuICAgICAgICAgIGNsYXNzTmFtZTogJ2RlbC1idXR0b24gYnRuIGRlbGV0ZS1jb25maXJtJyxcbiAgICAgICAgICB0aXRsZTogaTE4bi5yZW1vdmVNZXNzYWdlXG4gICAgICAgIH0pO1xuICAgICAgbGV0IHRvZ2dsZUJ0biA9IG0oJ2EnLCBudWxsLCB7XG4gICAgICAgIGlkOiBsYXN0SUQgKyAnLWVkaXQnLFxuICAgICAgICBjbGFzc05hbWU6ICd0b2dnbGUtZm9ybSBidG4gaWNvbi1wZW5jaWwnLFxuICAgICAgICB0aXRsZTogaTE4bi5oaWRlXG4gICAgICB9KTtcbiAgICAgIGxldCBjb3B5QnRuID0gbSgnYScsIGkxOG4uY29weUJ1dHRvbiwge1xuICAgICAgICBpZDogbGFzdElEICsgJy1jb3B5JyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY29weS1idXR0b24gYnRuIGljb24tY29weScsXG4gICAgICAgIHRpdGxlOiBpMThuLmNvcHlCdXR0b25Ub29sdGlwXG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpQ29udGVudHMgPSBtKFxuICAgICAgICAnZGl2JywgW3RvZ2dsZUJ0biwgY29weUJ0biwgZGVsQnRuXSwge2NsYXNzTmFtZTogJ2ZpZWxkLWFjdGlvbnMnfVxuICAgICAgKS5vdXRlckhUTUw7XG5cbiAgICAgIC8vIEZpZWxkIHByZXZpZXcgTGFiZWxcbiAgICAgIGxpQ29udGVudHMgKz0gYDxsYWJlbCBjbGFzcz1cImZpZWxkLWxhYmVsXCI+JHtsYWJlbH08L2xhYmVsPmA7XG5cbiAgICAgIGlmICh2YWx1ZXMuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3Rvb2x0aXAtZWxlbWVudCcsXG4gICAgICAgICAgdG9vbHRpcDogdmFsdWVzLmRlc2NyaXB0aW9uXG4gICAgICAgIH07XG4gICAgICAgIGxpQ29udGVudHMgKz0gYDxzcGFuICR7dXRpbHMuYXR0clN0cmluZyhhdHRycyl9Pj88L3NwYW4+YDtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlcXVpcmVkRGlzcGxheSA9IHZhbHVlcy5yZXF1aXJlZCA/ICdzdHlsZT1cImRpc3BsYXk6aW5saW5lXCInIDogJyc7XG4gICAgICBsaUNvbnRlbnRzICs9IGA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCIgJHtyZXF1aXJlZERpc3BsYXl9PiAqPC9zcGFuPmA7XG5cbiAgICAgIGxpQ29udGVudHMgKz0gbSgnZGl2JywgJycsIHtjbGFzc05hbWU6ICdwcmV2LWhvbGRlcid9KS5vdXRlckhUTUw7XG4gICAgICBsaUNvbnRlbnRzICs9IGA8ZGl2IGlkPVwiJHtsYXN0SUR9LWhvbGRlclwiIGNsYXNzPVwiZnJtLWhvbGRlclwiPmA7XG4gICAgICBsaUNvbnRlbnRzICs9ICc8ZGl2IGNsYXNzPVwiZm9ybS1lbGVtZW50c1wiPic7XG5cbiAgICAgIGxpQ29udGVudHMgKz0gYWR2RmllbGRzKHZhbHVlcyk7XG4gICAgICBsaUNvbnRlbnRzICs9IG0oJ2EnLCBpMThuLmNsb3NlLCB7Y2xhc3NOYW1lOiAnY2xvc2UtZmllbGQnfSkub3V0ZXJIVE1MO1xuXG4gICAgICBsaUNvbnRlbnRzICs9ICc8L2Rpdj4nO1xuICAgICAgbGlDb250ZW50cyArPSAnPC9kaXY+JztcblxuICAgICAgbGV0IGZpZWxkID0gbSgnbGknLCBsaUNvbnRlbnRzLCB7XG4gICAgICAgICAgJ2NsYXNzJzogdHlwZSArICctZmllbGQgZm9ybS1maWVsZCcsXG4gICAgICAgICAgJ3R5cGUnOiB0eXBlLFxuICAgICAgICAgIGlkOiBsYXN0SURcbiAgICAgICAgfSk7XG4gICAgICBsZXQgJGxpID0gJChmaWVsZCk7XG5cbiAgICAgICRsaS5kYXRhKCdmaWVsZERhdGEnLCB7YXR0cnM6IHZhbHVlc30pO1xuXG4gICAgICBpZiAodHlwZW9mIF9oZWxwZXJzLnN0b3BJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJCgnPiBsaScsICRzb3J0YWJsZUZpZWxkcykuZXEoX2hlbHBlcnMuc3RvcEluZGV4KS5iZWZvcmUoJGxpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRzb3J0YWJsZUZpZWxkcy5hcHBlbmQoJGxpKTtcbiAgICAgIH1cblxuICAgICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMnLCAkbGkpXG4gICAgICAuc29ydGFibGUoe3VwZGF0ZTogKCkgPT4gX2hlbHBlcnMudXBkYXRlUHJldmlldygkbGkpfSk7XG5cbiAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGxpKTtcblxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0gJiYgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmFkZCkge1xuICAgICAgICBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uYWRkKGZpZWxkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMuZWRpdE9uQWRkICYmIGlzTmV3KSB7XG4gICAgICAgIF9oZWxwZXJzLmNsb3NlQWxsRWRpdCgpO1xuICAgICAgICBfaGVscGVycy50b2dnbGVFZGl0KGxhc3RJRCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBsYXN0SUQgPSBfaGVscGVycy5pbmNyZW1lbnRJZChsYXN0SUQpO1xuICAgIH07XG5cbiAgICAvLyBTZWxlY3QgZmllbGQgaHRtbCwgc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlXG4gICAgbGV0IHNlbGVjdEZpZWxkT3B0aW9ucyA9IGZ1bmN0aW9uKG5hbWUsIG9wdGlvbkRhdGEsIG11bHRpcGxlU2VsZWN0KSB7XG4gICAgICBsZXQgb3B0aW9uSW5wdXRUeXBlID0ge1xuICAgICAgICAgIHNlbGVjdGVkOiAobXVsdGlwbGVTZWxlY3QgPyAnY2hlY2tib3gnIDogJ3JhZGlvJylcbiAgICAgICAgfTtcbiAgICAgIGxldCBvcHRpb25EYXRhT3JkZXIgPSBbXG4gICAgICAgICd2YWx1ZScsXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICdzZWxlY3RlZCdcbiAgICAgIF07XG4gICAgICBsZXQgb3B0aW9uSW5wdXRzID0gW107XG4gICAgICBsZXQgb3B0aW9uVGVtcGxhdGUgPSB7c2VsZWN0ZWQ6IGZhbHNlLCBsYWJlbDogJycsIHZhbHVlOiAnJ307XG5cbiAgICAgIG9wdGlvbkRhdGEgPSBPYmplY3QuYXNzaWduKG9wdGlvblRlbXBsYXRlLCBvcHRpb25EYXRhKTtcblxuICAgICAgZm9yIChsZXQgaSA9IG9wdGlvbkRhdGFPcmRlci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgcHJvcCA9IG9wdGlvbkRhdGFPcmRlcltpXTtcbiAgICAgICAgaWYgKG9wdGlvbkRhdGEuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICBsZXQgYXR0cnMgPSB7XG4gICAgICAgICAgICB0eXBlOiBvcHRpb25JbnB1dFR5cGVbcHJvcF0gfHwgJ3RleHQnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ29wdGlvbi0nICsgcHJvcCxcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb25EYXRhW3Byb3BdLFxuICAgICAgICAgICAgbmFtZTogbmFtZSArICctb3B0aW9uJ1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoaTE4bi5wbGFjZWhvbGRlcnNbcHJvcF0pIHtcbiAgICAgICAgICAgIGF0dHJzLnBsYWNlaG9sZGVyID0gaTE4bi5wbGFjZWhvbGRlcnNbcHJvcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb3AgPT09ICdzZWxlY3RlZCcgJiYgb3B0aW9uRGF0YS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYXR0cnMuY2hlY2tlZCA9IG9wdGlvbkRhdGEuc2VsZWN0ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3B0aW9uSW5wdXRzLnB1c2godXRpbHMubWFya3VwKCdpbnB1dCcsIG51bGwsIGF0dHJzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHJlbW92ZUF0dHJzID0ge1xuICAgICAgICBjbGFzc05hbWU6ICdyZW1vdmUgYnRuJyxcbiAgICAgICAgdGl0bGU6IGkxOG4ucmVtb3ZlTWVzc2FnZVxuICAgICAgfTtcbiAgICAgIG9wdGlvbklucHV0cy5wdXNoKHV0aWxzLm1hcmt1cCgnYScsIGkxOG4ucmVtb3ZlLCByZW1vdmVBdHRycykpO1xuXG4gICAgICBsZXQgZmllbGQgPSB1dGlscy5tYXJrdXAoJ2xpJywgb3B0aW9uSW5wdXRzKTtcblxuICAgICAgcmV0dXJuIGZpZWxkLm91dGVySFRNTDtcbiAgICB9O1xuXG4gICAgbGV0IGNsb25lSXRlbSA9IGZ1bmN0aW9uIGNsb25lSXRlbShjdXJyZW50SXRlbSkge1xuICAgICAgbGV0IGN1cnJlbnRJZCA9IGN1cnJlbnRJdGVtLmF0dHIoJ2lkJyk7XG4gICAgICBsZXQgdHlwZSA9IGN1cnJlbnRJdGVtLmF0dHIoJ3R5cGUnKTtcbiAgICAgIGxldCB0cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgbGV0IGNsb25lTmFtZSA9IHR5cGUgKyAnLScgKyB0cztcbiAgICAgIGxldCAkY2xvbmUgPSBjdXJyZW50SXRlbS5jbG9uZSgpO1xuXG4gICAgICAkY2xvbmUuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgdGhpcy5pZCA9IHRoaXMuaWQucmVwbGFjZShjdXJyZW50SWQsIGxhc3RJRCk7XG4gICAgICB9KTtcblxuICAgICAgJGNsb25lLmZpbmQoJ1tmb3JdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ2ZvcicpLnJlcGxhY2UoY3VycmVudElkLCBsYXN0SUQpKTtcbiAgICAgIH0pO1xuXG4gICAgICAkY2xvbmUuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnZTpub3QoLmZvcm0tZWxlbWVudHMpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgbmV3TmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIChuZXdOYW1lLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XG4gICAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUgKyB0cy50b1N0cmluZygpO1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCduYW1lJywgbmV3TmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgICRjbG9uZS5maW5kKCcuZm9ybS1lbGVtZW50cycpLmZpbmQoJzppbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpID09PSAnbmFtZScpIHtcbiAgICAgICAgICBsZXQgbmV3VmFsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgICAgbmV3VmFsID0gbmV3VmFsLnN1YnN0cmluZygwLCAobmV3VmFsLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XG4gICAgICAgICAgbmV3VmFsID0gbmV3VmFsICsgdHMudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdWYWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJGNsb25lLmF0dHIoJ2lkJywgbGFzdElEKTtcbiAgICAgICRjbG9uZS5hdHRyKCduYW1lJywgY2xvbmVOYW1lKTtcbiAgICAgICRjbG9uZS5hZGRDbGFzcygnY2xvbmVkJyk7XG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRjbG9uZSkuc29ydGFibGUoKTtcblxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0gJiYgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmNsb25lKSB7XG4gICAgICAgIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25jbG9uZSgkY2xvbmVbMF0pO1xuICAgICAgfVxuXG4gICAgICBsYXN0SUQgPSBfaGVscGVycy5pbmNyZW1lbnRJZChsYXN0SUQpO1xuICAgICAgcmV0dXJuICRjbG9uZTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVVElMSVRJRVMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gICAgLy8gZGVsZXRlIG9wdGlvbnNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLnJlbW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCAkZmllbGQgPSAkKHRoaXMpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJyk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgb3B0aW9uc0NvdW50ID0gJCh0aGlzKS5wYXJlbnRzKCcuc29ydGFibGUtb3B0aW9uczplcSgwKScpLmNoaWxkcmVuKCdsaScpLmxlbmd0aDtcbiAgICAgIGlmIChvcHRpb25zQ291bnQgPD0gMikge1xuICAgICAgICBvcHRzLm5vdGlmeS5lcnJvcignRXJyb3I6ICcgKyBpMThuLm1pbk9wdGlvbk1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xpJykuc2xpZGVVcCgnMjUwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRmaWVsZCk7XG4gICAgICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHRvdWNoIGZvY3VzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCd0b3VjaHN0YXJ0JywgJ2lucHV0JywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0ICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICBpZiAoZS5oYW5kbGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGlmICgkaW5wdXQuYXR0cigndHlwZScpID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgJGlucHV0LnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgbGV0IGZpZWxkVmFsID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICRpbnB1dC52YWwoZmllbGRWYWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0b2dnbGUgZmllbGRzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy50b2dnbGUtZm9ybSwgLmNsb3NlLWZpZWxkJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChlLmhhbmRsZWQgIT09IHRydWUpIHtcbiAgICAgICAgbGV0IHRhcmdldElEID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKS5hdHRyKCdpZCcpO1xuICAgICAgICBfaGVscGVycy50b2dnbGVFZGl0KHRhcmdldElEKTtcbiAgICAgICAgZS5oYW5kbGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2hhbmdlJywgJ1tuYW1lPVwic3VidHlwZVwiXScsIChlKSA9PiB7XG4gICAgICBjb25zdCAkZmllbGQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaS5mb3JtLWZpZWxkJyk7XG4gICAgICBjb25zdCAkdmFsV3JhcCA9ICQoJy52YWx1ZS13cmFwJywgJGZpZWxkKTtcbiAgICAgICR2YWxXcmFwLnRvZ2dsZShlLnRhcmdldC52YWx1ZSAhPT0gJ3F1aWxsJyk7XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NoYW5nZScsICcucHJldi1ob2xkZXIgaW5wdXQsIC5wcmV2LWhvbGRlciBzZWxlY3QnLCBlID0+IHtcbiAgICAgIGxldCBwcmV2T3B0aW9ucztcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ290aGVyLW9wdGlvbicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBmaWVsZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpLmZvcm0tZmllbGQnKVswXTtcbiAgICAgIGlmICh1dGlscy5pbkFycmF5KGZpZWxkLnR5cGUsIFsnc2VsZWN0JywgJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10pKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0gZmllbGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3B0aW9uLXZhbHVlJyk7XG4gICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgIHV0aWxzLmZvckVhY2gob3B0aW9ucywgaSA9PiB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zW2ldLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmNoZWNrZWQgPSBlLnRhcmdldC52YWx1ZSA9PT0gb3B0aW9uc1tpXS52YWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2T3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGUudGFyZ2V0Lm5hbWUpO1xuICAgICAgICAgIHV0aWxzLmZvckVhY2gocHJldk9wdGlvbnMsIGkgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gb3B0aW9uc1tpXS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5jaGVja2VkID0gcHJldk9wdGlvbnNbaV0uY2hlY2tlZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVlLScgKyBmaWVsZC5pZCkudmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIHByZXZpZXcgdG8gbGFiZWxcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2tleXVwIGNoYW5nZScsICdbbmFtZT1cImxhYmVsXCJdJywgZnVuY3Rpb24oZSkge1xuICAgICAgJCgnLmZpZWxkLWxhYmVsJywgJChlLnRhcmdldCkuY2xvc2VzdCgnbGknKSkudGV4dCgkKGUudGFyZ2V0KS52YWwoKSk7XG4gICAgfSk7XG5cbiAgICAvLyByZW1vdmUgZXJyb3Igc3R5bGluZyB3aGVuIHVzZXJzIHRyaWVzIHRvIGNvcnJlY3QgbWlzdGFrZVxuICAgICRzb3J0YWJsZUZpZWxkcy5kZWxlZ2F0ZSgnaW5wdXQuZXJyb3InLCAna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBwcmV2aWV3IGZvciBkZXNjcmlwdGlvblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbigna2V5dXAnLCAnaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uXCJdJywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0ICRmaWVsZCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJyk7XG4gICAgICBsZXQgY2xvc2VzdFRvb2xUaXAgPSAkKCcudG9vbHRpcC1lbGVtZW50JywgJGZpZWxkKTtcbiAgICAgIGxldCB0dFZhbCA9ICQoZS50YXJnZXQpLnZhbCgpO1xuICAgICAgaWYgKHR0VmFsICE9PSAnJykge1xuICAgICAgICBpZiAoIWNsb3Nlc3RUb29sVGlwLmxlbmd0aCkge1xuICAgICAgICAgIGxldCB0dCA9IGA8c3BhbiBjbGFzcz1cInRvb2x0aXAtZWxlbWVudFwiIHRvb2x0aXA9XCIke3R0VmFsfVwiPj88L3NwYW4+YDtcbiAgICAgICAgICAkKCcuZmllbGQtbGFiZWwnLCAkZmllbGQpLmFmdGVyKHR0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbG9zZXN0VG9vbFRpcC5hdHRyKCd0b29sdGlwJywgdHRWYWwpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNsb3Nlc3RUb29sVGlwLmxlbmd0aCkge1xuICAgICAgICAgIGNsb3Nlc3RUb29sVGlwLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2hhbmdlJywgJy5mbGQtbXVsdGlwbGUnLCBlID0+IHtcbiAgICAgIGxldCBuZXdUeXBlID0gZS50YXJnZXQuY2hlY2tlZCA/ICdjaGVja2JveCcgOiAncmFkaW8nO1xuXG4gICAgICAkKGUudGFyZ2V0KVxuICAgICAgLnBhcmVudHMoJy5mb3JtLWVsZW1lbnRzOmVxKDApJylcbiAgICAgIC5maW5kKCcuc29ydGFibGUtb3B0aW9ucyBpbnB1dC5vcHRpb24tc2VsZWN0ZWQnKVxuICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGUudGFyZ2V0LnR5cGUgPSBuZXdUeXBlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JtYXQgbmFtZSBhdHRyaWJ1dGVcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2JsdXInLCAnaW5wdXQuZmxkLW5hbWUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IF9oZWxwZXJzLnNhZmVuYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgJChlLnRhcmdldClcbiAgICAgICAgLmFkZENsYXNzKCdmaWVsZC1lcnJvcicpXG4gICAgICAgIC5hdHRyKCdwbGFjZWhvbGRlcicsIGkxOG4uY2Fubm90QmVFbXB0eSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnZmllbGQtZXJyb3InKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignYmx1cicsICdpbnB1dC5mbGQtbWF4bGVuZ3RoJywgZSA9PiB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IF9oZWxwZXJzLmZvcmNlTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIENvcHkgZmllbGRcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmljb24tY29weScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBjdXJyZW50SXRlbSA9ICQoZS50YXJnZXQpLnBhcmVudCgpLnBhcmVudCgnbGknKTtcbiAgICAgIGxldCAkY2xvbmUgPSBjbG9uZUl0ZW0oY3VycmVudEl0ZW0pO1xuICAgICAgJGNsb25lLmluc2VydEFmdGVyKGN1cnJlbnRJdGVtKTtcbiAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGNsb25lKTtcbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIERlbGV0ZSBmaWVsZFxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuZGVsZXRlLWNvbmZpcm0nLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGJ1dHRvblBvc2l0aW9uID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICAgICAgcGFnZVg6IGJ1dHRvblBvc2l0aW9uLmxlZnQgKyAoYnV0dG9uUG9zaXRpb24ud2lkdGggLyAyKSxcbiAgICAgICAgICBwYWdlWTogKGJ1dHRvblBvc2l0aW9uLnRvcCAtIGJvZHlSZWN0LnRvcCkgLSAxMlxuICAgICAgICB9O1xuXG4gICAgICBsZXQgZGVsZXRlSUQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpLmF0dHIoJ2lkJyk7XG4gICAgICBjb25zdCAkZmllbGQgPSAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZUlEKSk7XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vZGFsQ2xvc2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICRmaWVsZC5yZW1vdmVDbGFzcygnZGVsZXRpbmcnKTtcbiAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdXNlciBpcyBzdXJlIHRoZXkgd2FudCB0byByZW1vdmUgdGhlIGZpZWxkXG4gICAgICBpZiAob3B0cy5maWVsZFJlbW92ZVdhcm4pIHtcbiAgICAgICAgbGV0IHdhcm5IMyA9IHV0aWxzLm1hcmt1cCgnaDMnLCBpMThuLndhcm5pbmcpO1xuICAgICAgICBsZXQgd2Fybk1lc3NhZ2UgPSB1dGlscy5tYXJrdXAoJ3AnLCBpMThuLmZpZWxkUmVtb3ZlV2FybmluZyk7XG4gICAgICAgIF9oZWxwZXJzLmNvbmZpcm0oW3dhcm5IMywgd2Fybk1lc3NhZ2VdLCAoKSA9PlxuICAgICAgICAgIF9oZWxwZXJzLnJlbW92ZUZpZWxkKGRlbGV0ZUlEKSwgY29vcmRzKTtcbiAgICAgICAgJGZpZWxkLmFkZENsYXNzKCdkZWxldGluZycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2hlbHBlcnMucmVtb3ZlRmllbGQoZGVsZXRlSUQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIGJ1dHRvbiBzdHlsZSBzZWxlY3Rpb25cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrJywgJy5zdHlsZS13cmFwIGJ1dHRvbicsIGUgPT4ge1xuICAgICAgY29uc3QgJGJ1dHRvbiA9ICQoZS50YXJnZXQpO1xuICAgICAgbGV0IHN0eWxlVmFsID0gJGJ1dHRvbi52YWwoKTtcbiAgICAgIGxldCAkYnRuU3R5bGUgPSAkYnV0dG9uLnBhcmVudCgpLnByZXYoJy5idG4tc3R5bGUnKTtcbiAgICAgICRidG5TdHlsZS52YWwoc3R5bGVWYWwpO1xuICAgICAgJGJ1dHRvbi5zaWJsaW5ncygnLmJ0bicpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJGJ1dHRvbi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGJ0blN0eWxlLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykpO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJlcXVpcmVkIGFzdGVyaXNrXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljaycsICcuZmxkLXJlcXVpcmVkJywgZSA9PiB7XG4gICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpLmZpbmQoJy5yZXF1aXJlZC1hc3RlcmlzaycpLnRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJvbGVzIHZpc2liaWxpdHlcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrJywgJ2lucHV0LmZsZC1hY2Nlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgcm9sZXMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpLmZpbmQoJy5hdmFpbGFibGUtcm9sZXMnKTtcbiAgICAgIGxldCBlbmFibGVSb2xlc0NCID0gJChlLnRhcmdldCk7XG4gICAgICByb2xlcy5zbGlkZVRvZ2dsZSgyNTAsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIWVuYWJsZVJvbGVzQ0IuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCByb2xlcykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhIGNhbGxiYWNrIHRvIGFkZCBuZXcgb3B0aW9uc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2snLCAnLmFkZC1vcHQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgJG9wdGlvbldyYXAgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZmllbGQtb3B0aW9ucycpO1xuICAgICAgbGV0ICRtdWx0aXBsZSA9ICQoJ1tuYW1lPVwibXVsdGlwbGVcIl0nLCAkb3B0aW9uV3JhcCk7XG4gICAgICBsZXQgJGZpcnN0T3B0aW9uID0gJCgnLm9wdGlvbi1zZWxlY3RlZDplcSgwKScsICRvcHRpb25XcmFwKTtcbiAgICAgIGxldCBpc011bHRpcGxlID0gZmFsc2U7XG5cbiAgICAgIGlmICgkbXVsdGlwbGUubGVuZ3RoKSB7XG4gICAgICAgIGlzTXVsdGlwbGUgPSAkbXVsdGlwbGUucHJvcCgnY2hlY2tlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNNdWx0aXBsZSA9ICgkZmlyc3RPcHRpb24uYXR0cigndHlwZScpID09PSAnY2hlY2tib3gnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5hbWUgPSAkZmlyc3RPcHRpb24uYXR0cignbmFtZScpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRvcHRpb25XcmFwKS5hcHBlbmQoc2VsZWN0RmllbGRPcHRpb25zKG5hbWUsIGZhbHNlLCBpc011bHRpcGxlKSk7XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ21vdXNlb3ZlciBtb3VzZW91dCcsICcucmVtb3ZlLCAuZGVsLWJ1dHRvbicsIGUgPT5cbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpJykudG9nZ2xlQ2xhc3MoJ2RlbGV0ZScpKTtcblxuICAgIGxvYWRGaWVsZHMoKTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5jc3MoJ21pbi1oZWlnaHQnLCAkY2JVTC5oZWlnaHQoKSk7XG5cbiAgICAvLyBJZiBvcHRpb24gc2V0LCBjb250cm9scyB3aWxsIHJlbWFpbiBpbiB2aWV3IGluIGVkaXRvclxuICAgIGlmIChvcHRzLnN0aWNreUNvbnRyb2xzLmVuYWJsZSkge1xuICAgICAgX2hlbHBlcnMuc3RpY2t5Q29udHJvbHMoJHNvcnRhYmxlRmllbGRzKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5sb2FkZWQpO1xuXG4gICAgLy8gTWFrZSBhY3Rpb25zIGFjY2Vzc2libGVcbiAgICBmb3JtQnVpbGRlci5hY3Rpb25zID0ge1xuICAgICAgY2xlYXJGaWVsZHM6IF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcyxcbiAgICAgIHNob3dEYXRhOiBfaGVscGVycy5zaG93RGF0YSxcbiAgICAgIHNhdmU6IF9oZWxwZXJzLnNhdmUsXG4gICAgICBhZGRGaWVsZDogKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBfaGVscGVycy5zdG9wSW5kZXggPSBmb3JtQnVpbGRlci5zdGFnZS5jaGlsZHJlbi5sZW5ndGggPyBpbmRleCA6IHVuZGVmaW5lZDtcbiAgICAgICAgcHJlcEZpZWxkVmFycyhmaWVsZCk7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmZpZWxkQWRkZWQpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUZpZWxkOiBfaGVscGVycy5yZW1vdmVGaWVsZCxcbiAgICAgIGdldERhdGE6ICh0eXBlID0gJ2pzJykgPT4ge1xuICAgICAgICBjb25zdCBzdGFnZSA9IGZvcm1CdWlsZGVyLnN0YWdlO1xuICAgICAgICBjb25zdCBoID0gX2hlbHBlcnM7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAganM6ICgpID0+IGgucHJlcERhdGEoc3RhZ2UpLFxuICAgICAgICAgIHhtbDogKCkgPT4gaC54bWxTYXZlKHN0YWdlKSxcbiAgICAgICAgICBqc29uOiAoKSA9PiB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoaC5wcmVwRGF0YShzdGFnZSksIG51bGwsICdcXHQnKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBkYXRhW3R5cGVdKCk7XG4gICAgICB9LFxuICAgICAgc2V0RGF0YTogZm9ybURhdGEgPT4ge1xuICAgICAgICBfaGVscGVycy5yZW1vdmVBbGxmaWVsZHMoZmFsc2UpO1xuICAgICAgICBsb2FkRmllbGRzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvcm1CdWlsZGVyLmkxOG4gPSB7XG4gICAgICBzZXRMYW5nOiBhc3luYyBsb2NhbGUgPT4ge1xuICAgICAgICBsZXQgbmV3TGFuZyA9IGF3YWl0IGZvcm1CdWlsZGVyLm1pMThuLnNldEN1cnJlbnQuY2FsbChmb3JtQnVpbGRlci5taTE4biwgbG9jYWxlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGZvcm1CdWlsZGVyO1xuICB9O1xuXG4gICQuZm4uZm9ybUJ1aWxkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGxldCBlbGVtcyA9IHRoaXM7XG4gICAgcmV0dXJuIGVsZW1zLmVhY2goKGkpID0+IHtcbiAgICAgIGxldCBmb3JtQnVpbGRlciA9IG5ldyBGb3JtQnVpbGRlcihvcHRpb25zLCBlbGVtc1tpXSk7XG4gICAgICAkKGVsZW1zW2ldKS5kYXRhKCdmb3JtQnVpbGRlcicsIGZvcm1CdWlsZGVyKTtcblxuICAgICAgcmV0dXJuIGZvcm1CdWlsZGVyO1xuICAgIH0pO1xuICB9O1xufSkoalF1ZXJ5KTtcbiIsImltcG9ydCBkIGZyb20gJy4vZG9tJztcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9ucyBzcGVjaWZpYyB0byBmb3JtQnVpbGRlci5cbiAqIENhbGxlZCBmb3JtIGZvcm1CdWlsZGVyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgb3B0c1xuICogQHBhcmFtICB7SW5zdGFuY2V9IGZvcm1CdWlsZGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IGhlbHBlciBmdW5jdGlvbnNcbiAqL1xuZnVuY3Rpb24gaGVscGVycyhvcHRzLCBmb3JtQnVpbGRlcikge1xuICBjb25zdCBpMThuID0gZm9ybUJ1aWxkZXIubWkxOG47XG4gIGNvbnN0IHV0aWxzID0gZm9ybUJ1aWxkZXIudXRpbHM7XG5cbiAgbGV0IF9oZWxwZXJzID0ge1xuICAgIGRvQ2FuY2VsOiBmYWxzZVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGNvbnZlcnRzIG1lc3N5IGBjbCNzc05hbWVzYCBpbnRvIHZhbGlkIGBjbGFzcy1uYW1lc2BcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfSBoeXBoZW5hdGVkIHN0cmluZ1xuICAgKi9cbiAgX2hlbHBlcnMubWFrZUNsYXNzTmFtZSA9IChzdHIpID0+IHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvW15cXHdcXHNcXC1dL2dpLCAnJyk7XG4gICAgcmV0dXJuIHV0aWxzLmh5cGhlbkNhc2Uoc3RyKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGEgbW9iaWxlIGNsYXNzXG4gICAqIEB0b2RvIGZpbmQgY3NzIG9ubHkgc29sdXRpb25cbiAgICogQHJldHVybiB7U3RyaW5nfSBNb2JpbGUgY2xhc3MgYWRkZWQgdG8gZm9ybUJ1aWxkZXJcbiAgICovXG4gIF9oZWxwZXJzLm1vYmlsZUNsYXNzID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG1vYmlsZUNsYXNzID0gJyc7XG4gICAgKGZ1bmN0aW9uKGEpIHtcbiAgICAgIGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkge1xuICAgICAgICBtb2JpbGVDbGFzcyA9ICcgZmItbW9iaWxlJztcbiAgICAgIH1cbiAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcbiAgICByZXR1cm4gbW9iaWxlQ2xhc3M7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciB3aGVuIGEgZHJhZyBiZWdpbnNcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXG4gICAqL1xuICBfaGVscGVycy5zdGFydE1vdmluZyA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIHVpLml0ZW0uc2hvdygpLmFkZENsYXNzKCdtb3ZpbmcnKTtcbiAgICBfaGVscGVycy5zdGFydEluZGV4ID0gJCgnbGknLCB0aGlzKS5pbmRleCh1aS5pdGVtKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIHdoZW4gYSBkcmFnIGVuZHNcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXG4gICAqL1xuICBfaGVscGVycy5zdG9wTW92aW5nID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgdWkuaXRlbS5yZW1vdmVDbGFzcygnbW92aW5nJyk7XG4gICAgaWYgKF9oZWxwZXJzLmRvQ2FuY2VsKSB7XG4gICAgICAkKHVpLnNlbmRlcikuc29ydGFibGUoJ2NhbmNlbCcpO1xuICAgICAgJCh0aGlzKS5zb3J0YWJsZSgnY2FuY2VsJyk7XG4gICAgfVxuICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICBfaGVscGVycy5kb0NhbmNlbCA9IGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBqUXVlcnkgVUkgc29ydGFibGUgYmVmb3JlU3RvcCBjYWxsYmFjayB1c2VkIGZvciBib3RoIGxpc3RzLlxuICAgKiBMb2dpYyBmb3IgY2FuY2VsaW5nIHRoZSBzb3J0IG9yIGRyb3AuXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSB1aVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgX2hlbHBlcnMuYmVmb3JlU3RvcCA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtQnVpbGRlci5mb3JtSUQpO1xuICAgIGxldCBsYXN0SW5kZXggPSBmb3JtLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgbGV0IGNhbmNlbEFycmF5ID0gW107XG4gICAgX2hlbHBlcnMuc3RvcEluZGV4ID0gdWkucGxhY2Vob2xkZXIuaW5kZXgoKSAtIDE7XG5cbiAgICBpZiAoIW9wdHMuc29ydGFibGVDb250cm9scyAmJiB1aS5pdGVtLnBhcmVudCgpLmhhc0NsYXNzKCdmcm1iLWNvbnRyb2wnKSkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5wcmVwZW5kKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKF9oZWxwZXJzLnN0b3BJbmRleCA9PT0gMCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuYXBwZW5kKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKChfaGVscGVycy5zdG9wSW5kZXggKyAxKSA9PT0gbGFzdEluZGV4KTtcbiAgICB9XG5cbiAgICBfaGVscGVycy5kb0NhbmNlbCA9IGNhbmNlbEFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKTtcbiAgfTtcblxuICAvKipcbiAgICogTWFrZSBzdHJpbmdzIHNhZmUgdG8gYmUgdXNlZCBhcyBjbGFzc2VzXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHN0cmluZyB0byBiZSBjb252ZXJ0ZWRcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgY29udmVydGVyIHN0cmluZ1xuICAgKi9cbiAgX2hlbHBlcnMuc2FmZW5hbWUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoL1teYS16QS1aMC05XFwtXS9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RyaXBzIG5vbi1udW1iZXJzIGZyb20gYSBudW1iZXIgb25seSBpbnB1dFxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHN0ciBzdHJpbmcgd2l0aCBwb3NzaWJsZSBudW1iZXJcbiAgICogQHJldHVybiB7c3RyaW5nfSAgICAgc3RyaW5nIHdpdGhvdXQgbnVtYmVyc1xuICAgKi9cbiAgX2hlbHBlcnMuZm9yY2VOdW1iZXIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGhpZGUgYW5kIHNob3cgbW91c2UgdHJhY2tpbmcgdG9vbHRpcHMsIG9ubHkgdXNlZCBmb3IgZGlzYWJsZWRcbiAgICogZmllbGRzIGluIHRoZSBlZGl0b3IuXG4gICAqXG4gICAqIEB0b2RvICAgcmVtb3ZlIG9yIHJlZmFjdG9yIHRvIG1ha2UgYmV0dGVyIHVzZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHR0IGpRdWVyeSBvcHRpb24gd2l0aCBuZXh0ZWQgdG9vbHRpcFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgX2hlbHBlcnMuaW5pdFRvb2x0aXAgPSBmdW5jdGlvbih0dCkge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0dC5maW5kKCcudG9vbHRpcCcpO1xuICAgIHR0Lm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodG9vbHRpcC5vdXRlcldpZHRoKCkgPiAyMDApIHtcbiAgICAgICAgdG9vbHRpcC5hZGRDbGFzcygnbWF4LXdpZHRoJyk7XG4gICAgICB9XG4gICAgICB0b29sdGlwLmNzcygnbGVmdCcsIHR0LndpZHRoKCkgKyAxNCk7XG4gICAgICB0b29sdGlwLnN0b3AodHJ1ZSwgdHJ1ZSkuZmFkZUluKCdmYXN0Jyk7XG4gICAgfSkubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcbiAgICAgIHR0LmZpbmQoJy50b29sdGlwJykuc3RvcCh0cnVlLCB0cnVlKS5mYWRlT3V0KCdmYXN0Jyk7XG4gICAgfSk7XG4gICAgdG9vbHRpcC5oaWRlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIGdldCBlbGVtZW50IHR5cGUgYW5kIHN1YnR5cGVcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAkZmllbGRcbiAgICogQHJldHVybiB7T2JqZWN0fSB7dHlwZTogJ2ZpZWxkVHlwZScsIHN1YnR5cGU6ICdmaWVsZFN1YlR5cGUnfVxuICAgKi9cbiAgX2hlbHBlcnMuZ2V0VHlwZXMgPSBmdW5jdGlvbigkZmllbGQpIHtcbiAgICBsZXQgdHlwZXMgPSB7XG4gICAgICAgIHR5cGU6ICRmaWVsZC5hdHRyKCd0eXBlJylcbiAgICAgIH07XG4gICAgbGV0IHN1YnR5cGUgPSAkKCcuZmxkLXN1YnR5cGUnLCAkZmllbGQpLnZhbCgpO1xuXG4gICAgaWYgKHN1YnR5cGUgIT09IHR5cGVzLnR5cGUpIHtcbiAgICAgIHR5cGVzLnN1YnR5cGUgPSBzdWJ0eXBlO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfTtcblxuICAvKipcbiAgICogR2V0IG9wdGlvbiBkYXRhIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgalF1ZXJ5IGZpZWxkIG9iamVjdFxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIEFycmF5IG9mIG9wdGlvbiB2YWx1ZXNcbiAgICovXG4gIF9oZWxwZXJzLmZpZWxkT3B0aW9uRGF0YSA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcblxuICAgICQoJy5zb3J0YWJsZS1vcHRpb25zIGxpJywgZmllbGQpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgJG9wdGlvbiA9ICQodGhpcyk7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9ICQoJy5vcHRpb24tc2VsZWN0ZWQnLCAkb3B0aW9uKS5pcygnOmNoZWNrZWQnKTtcbiAgICAgIGxldCBhdHRycyA9IHtcbiAgICAgICAgICBsYWJlbDogJCgnLm9wdGlvbi1sYWJlbCcsICRvcHRpb24pLnZhbCgpLFxuICAgICAgICAgIHZhbHVlOiAkKCcub3B0aW9uLXZhbHVlJywgJG9wdGlvbikudmFsKClcbiAgICAgICAgfTtcblxuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIGF0dHJzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMucHVzaChhdHRycyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfTtcblxuICAvKipcbiAgICogWE1MIHNhdmVcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmb3JtIHNvcnRhYmxlRmllbGRzIG5vZGVcbiAgICogQHJldHVybiB7U3RyaW5nfSB4bWwgaW4gc3RyaW5nXG4gICAqL1xuICBfaGVscGVycy54bWxTYXZlID0gZnVuY3Rpb24oZm9ybSkge1xuICAgIGNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XG4gICAgbGV0IGZvcm1EYXRhID0gX2hlbHBlcnMucHJlcERhdGEoZm9ybSk7XG4gICAgbGV0IHhtbCA9IFsnPGZvcm0tdGVtcGxhdGU+XFxuXFx0PGZpZWxkcz4nXTtcblxuICAgIHV0aWxzLmZvckVhY2goZm9ybURhdGEsIGZ1bmN0aW9uKGZpZWxkSW5kZXgsIGZpZWxkKSB7XG4gICAgICBsZXQgZmllbGRDb250ZW50ID0gbnVsbDtcbiAgICAgIGNvbnN0IG9wdGlvbkZpZWxkcyA9IC8oc2VsZWN0fGNoZWNrYm94LWdyb3VwfHJhZGlvLWdyb3VwfGF1dG9jb21wbGV0ZSkvO1xuXG4gICAgICAvLyBIYW5kbGUgb3B0aW9uc1xuICAgICAgaWYgKGZpZWxkLnR5cGUubWF0Y2gob3B0aW9uRmllbGRzKSkge1xuICAgICAgICBsZXQgb3B0aW9uRGF0YSA9IGZpZWxkLnZhbHVlcztcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbkRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgb3B0aW9uID0gbSgnb3B0aW9uJywgb3B0aW9uRGF0YVtpXS5sYWJlbCwgb3B0aW9uRGF0YVtpXSkub3V0ZXJIVE1MO1xuICAgICAgICAgIG9wdGlvbnMucHVzaCgnXFxuXFx0XFx0XFx0JyArIG9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5wdXNoKCdcXG5cXHRcXHQnKTtcblxuICAgICAgICBmaWVsZENvbnRlbnQgPSBvcHRpb25zLmpvaW4oJycpO1xuICAgICAgICBkZWxldGUgZmllbGQudmFsdWVzO1xuICAgICAgfVxuXG4gICAgICBsZXQgeG1sRmllbGQgPSBtKCdmaWVsZCcsIGZpZWxkQ29udGVudCwgZmllbGQpO1xuICAgICAgeG1sLnB1c2goJ1xcblxcdFxcdCcgKyB4bWxGaWVsZC5vdXRlckhUTUwpO1xuICAgIH0pO1xuXG4gICAgeG1sLnB1c2goJ1xcblxcdDwvZmllbGRzPlxcbjwvZm9ybS10ZW1wbGF0ZT4nKTtcblxuICAgIHJldHVybiB4bWwuam9pbignJyk7XG4gIH07XG5cbiAgX2hlbHBlcnMucHJlcERhdGEgPSBmdW5jdGlvbihmb3JtKSB7XG4gICAgbGV0IGZvcm1EYXRhID0gW107XG5cbiAgICBpZiAoZm9ybS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgLy8gYnVpbGQgZGF0YSBvYmplY3RcbiAgICAgIHV0aWxzLmZvckVhY2goZm9ybS5jaGlsZE5vZGVzLCBhc3luYyBmdW5jdGlvbihpbmRleCwgZmllbGQpIHtcbiAgICAgICAgbGV0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgIGlmICghKCRmaWVsZC5oYXNDbGFzcygnZGlzYWJsZWQtZmllbGQnKSkpIHtcbiAgICAgICAgICBsZXQgZmllbGREYXRhID0gX2hlbHBlcnMuZ2V0VHlwZXMoJGZpZWxkKTtcbiAgICAgICAgICBsZXQgcm9sZVZhbHMgPSAkKCcucm9sZXMtZmllbGQ6Y2hlY2tlZCcsIGZpZWxkKS5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgfSkuZ2V0KCk7XG5cbiAgICAgICAgICAkKCdbY2xhc3MqPVwiZmxkLVwiXScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IHV0aWxzLmNhbWVsQ2FzZShhdHRyLm5hbWUpO1xuICAgICAgICAgICAgZmllbGREYXRhW25hbWVdID0gYXR0ci50eXBlID09PSAnY2hlY2tib3gnID8gYXR0ci5jaGVja2VkIDogYXR0ci52YWx1ZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChmaWVsZERhdGEuc3VidHlwZSkge1xuICAgICAgICAgICAgaWYgKGZpZWxkRGF0YS5zdWJ0eXBlID09PSAncXVpbGwnKSB7XG4gICAgICAgICAgICAgIGxldCBpZCA9IGAke2ZpZWxkRGF0YS5uYW1lfS1wcmV2aWV3YDtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbaWRdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gd2luZG93LmZiRWRpdG9ycy5xdWlsbFtpZF0uaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGluc3RhbmNlLmdldENvbnRlbnRzKCk7XG4gICAgICAgICAgICAgICAgZmllbGREYXRhLnZhbHVlID0gd2luZG93LkpTT04uc3RyaW5naWZ5KGRhdGEub3BzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmKGZpZWxkRGF0YS5zdWJ0eXBlID09PSAndGlueW1jZScgJiYgd2luZG93LnRpbnltY2UpIHtcbiAgICAgICAgICAgICAgbGV0IGlkID0gYCR7ZmllbGREYXRhLm5hbWV9LXByZXZpZXdgO1xuICAgICAgICAgICAgICBpZiAod2luZG93LnRpbnltY2UuZWRpdG9yc1tpZF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgZWRpdG9yID0gd2luZG93LnRpbnltY2UuZWRpdG9yc1tpZF07XG4gICAgICAgICAgICAgICAgZmllbGREYXRhLnZhbHVlID0gZWRpdG9yLmdldENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyb2xlVmFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS5yb2xlID0gcm9sZVZhbHMuam9pbignLCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpZWxkRGF0YS5jbGFzc05hbWUgPSBmaWVsZERhdGEuY2xhc3NOYW1lIHx8IGZpZWxkRGF0YS5jbGFzcztcblxuICAgICAgICAgIGxldCBtYXRjaCA9IC8oPzpefFxccylidG4tKC4qPykoPzpcXHN8JCkvZy5leGVjKGZpZWxkRGF0YS5jbGFzc05hbWUpO1xuICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgZmllbGREYXRhLnN0eWxlID0gbWF0Y2hbMV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGREYXRhID0gdXRpbHMudHJpbU9iaihmaWVsZERhdGEpO1xuICAgICAgICAgIGZpZWxkRGF0YSA9IHV0aWxzLmVzY2FwZUF0dHJzKGZpZWxkRGF0YSk7XG5cbiAgICAgICAgICBsZXQgbXVsdGlwbGVGaWVsZCA9IGZpZWxkRGF0YS50eXBlLm1hdGNoKGQub3B0aW9uRmllbGRzUmVnRXgpO1xuXG4gICAgICAgICAgaWYgKG11bHRpcGxlRmllbGQpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSBfaGVscGVycy5maWVsZE9wdGlvbkRhdGEoJGZpZWxkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3JtRGF0YS5wdXNoKGZpZWxkRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfTtcblxuICBfaGVscGVycy5qc29uU2F2ZSA9IGZvcm0gPT5cbiAgICB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoX2hlbHBlcnMucHJlcERhdGEoZm9ybSksIG51bGwsICdcXHQnKTtcblxuICBfaGVscGVycy5nZXREYXRhID0gZm9ybURhdGEgPT4ge1xuICAgIGxldCBkYXRhID0gZm9ybURhdGEgfHwgb3B0cy5mb3JtRGF0YTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBzZXREYXRhID0ge1xuICAgICAgeG1sOiBmb3JtRGF0YSA9PiB1dGlscy5wYXJzZVhNTChmb3JtRGF0YSksXG4gICAgICBqc29uOiBmb3JtRGF0YSA9PiB3aW5kb3cuSlNPTi5wYXJzZShmb3JtRGF0YSlcbiAgICB9O1xuXG4gICAgZm9ybUJ1aWxkZXIuZm9ybURhdGEgPSBzZXREYXRhW29wdHMuZGF0YVR5cGVdKGRhdGEpIHx8IFtdO1xuXG4gICAgcmV0dXJuIGZvcm1CdWlsZGVyLmZvcm1EYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTYXZlcyBhbmQgcmV0dXJucyBmb3JtRGF0YVxuICAgKiBAcmV0dXJuIHtYTUx8SlNPTn0gZm9ybURhdGFcbiAgICovXG4gIF9oZWxwZXJzLnNhdmUgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUJ1aWxkZXIuZm9ybUlEKTtcblxuICAgIGxldCBkb1NhdmUgPSB7XG4gICAgICB4bWw6IF9oZWxwZXJzLnhtbFNhdmUsXG4gICAgICBqc29uOiBfaGVscGVycy5qc29uU2F2ZVxuICAgIH07XG5cbiAgICAvLyBzYXZlIGFjdGlvbiBmb3IgY3VycmVudCBgZGF0YVR5cGVgXG4gICAgZm9ybUJ1aWxkZXIuZm9ybURhdGEgPSBkb1NhdmVbb3B0cy5kYXRhVHlwZV0oZm9ybSk7XG5cbiAgICAvLyB0cmlnZ2VyIGZvcm1TYXZlZCBldmVudFxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmZvcm1TYXZlZCk7XG4gICAgcmV0dXJuIGZvcm1CdWlsZGVyLmZvcm1EYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBpbmNyZW1lbnRzIHRoZSBmaWVsZCBpZHMgd2l0aCBzdXBwb3J0IGZvciBtdWx0aXBsZSBlZGl0b3JzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaWQgZmllbGQgSURcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICBpbmNyZW1lbnRlZCBmaWVsZCBJRFxuICAgKi9cbiAgX2hlbHBlcnMuaW5jcmVtZW50SWQgPSBmdW5jdGlvbihpZCkge1xuICAgIGxldCBzcGxpdCA9IGlkLmxhc3RJbmRleE9mKCctJyk7XG4gICAgbGV0IG5ld0ZpZWxkTnVtYmVyID0gcGFyc2VJbnQoaWQuc3Vic3RyaW5nKHNwbGl0ICsgMSkpICsgMTtcbiAgICBsZXQgYmFzZVN0cmluZyA9IGlkLnN1YnN0cmluZygwLCBzcGxpdCk7XG5cbiAgICByZXR1cm4gYCR7YmFzZVN0cmluZ30tJHtuZXdGaWVsZE51bWJlcn1gO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb2xsZWN0IGZpZWxkIGF0dHJpYnV0ZSB2YWx1ZXMgYW5kIGNhbGwgZmllbGRQcmV2aWV3IHRvIGdlbmVyYXRlIHByZXZpZXdcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZCBET00gZWxlbWVudFxuICAgKi9cbiAgX2hlbHBlcnMudXBkYXRlUHJldmlldyA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRDbGFzcyA9IGZpZWxkLmF0dHIoJ2NsYXNzJyk7XG4gICAgaWYgKGZpZWxkQ2xhc3MuaW5kZXhPZigndWktc29ydGFibGUtaGFuZGxlJykgIT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkVHlwZSA9ICQoZmllbGQpLmF0dHIoJ3R5cGUnKTtcbiAgICBsZXQgJHByZXZIb2xkZXIgPSAkKCcucHJldi1ob2xkZXInLCBmaWVsZCk7XG4gICAgbGV0IHByZXZpZXdEYXRhID0ge1xuICAgICAgdHlwZTogZmllbGRUeXBlXG4gICAgfTtcbiAgICBsZXQgcHJldmlldztcblxuICAgICQoJ1tjbGFzcyo9XCJmbGQtXCJdJywgZmllbGQpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgbmFtZSA9IHV0aWxzLmNhbWVsQ2FzZSh0aGlzLm5hbWUpO1xuICAgICAgcHJldmlld0RhdGFbbmFtZV0gPSB0aGlzLnR5cGUgPT09ICdjaGVja2JveCcgPyB0aGlzLmNoZWNrZWQgOiB0aGlzLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgbGV0IHN0eWxlID0gJCgnLmJ0bi1zdHlsZScsIGZpZWxkKS52YWwoKTtcbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgIHByZXZpZXdEYXRhLnN0eWxlID0gc3R5bGU7XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkVHlwZS5tYXRjaChkLm9wdGlvbkZpZWxkc1JlZ0V4KSkge1xuICAgICAgcHJldmlld0RhdGEudmFsdWVzID0gW107XG4gICAgICBwcmV2aWV3RGF0YS5tdWx0aXBsZSA9ICQoJ1tuYW1lPVwibXVsdGlwbGVcIl0nLCBmaWVsZCkuaXMoJzpjaGVja2VkJyk7XG5cbiAgICAgICQoJy5zb3J0YWJsZS1vcHRpb25zIGxpJywgZmllbGQpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB7fTtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gJCgnLm9wdGlvbi1zZWxlY3RlZCcsIHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSAkKCcub3B0aW9uLXZhbHVlJywgdGhpcykudmFsKCk7XG4gICAgICAgIG9wdGlvbi5sYWJlbCA9ICQoJy5vcHRpb24tbGFiZWwnLCB0aGlzKS52YWwoKTtcbiAgICAgICAgcHJldmlld0RhdGEudmFsdWVzLnB1c2gob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHByZXZpZXdEYXRhID0gdXRpbHMudHJpbU9iaihwcmV2aWV3RGF0YSk7XG5cbiAgICBwcmV2aWV3RGF0YS5jbGFzc05hbWUgPSBfaGVscGVycy5jbGFzc05hbWVzKGZpZWxkLCBwcmV2aWV3RGF0YSk7XG4gICAgJCgnLmZsZC1jbGFzc05hbWUnLCBmaWVsZCkudmFsKHByZXZpZXdEYXRhLmNsYXNzTmFtZSk7XG5cbiAgICBmaWVsZC5kYXRhKCdmaWVsZERhdGEnLCBwcmV2aWV3RGF0YSk7XG4gICAgcHJldmlldyA9IHV0aWxzLmdldFRlbXBsYXRlKHByZXZpZXdEYXRhLCB0cnVlKTtcblxuICAgIHV0aWxzLmVtcHR5KCRwcmV2SG9sZGVyWzBdKTtcbiAgICAkcHJldkhvbGRlclswXS5hcHBlbmRDaGlsZChwcmV2aWV3KTtcbiAgICBwcmV2aWV3LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmZpZWxkUmVuZGVyZWQpO1xuXG4gIH07XG5cbiAgX2hlbHBlcnMuZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0ID0gMjUwLCBpbW1lZGlhdGUgPSBmYWxzZSkge1xuICAgIGxldCB0aW1lb3V0O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgbGV0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBsZXQgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIGlmIChjYWxsTm93KSB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogRGlzcGxheSBhIGN1c3RvbSB0b29sdGlwIGZvciBkaXNhYmxlZCBmaWVsZHMuXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGRcbiAgICovXG4gIF9oZWxwZXJzLmRpc2FibGVkVFQgPSB7XG4gICAgbW92ZTogKGUsIGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkT2Zmc2V0ID0gZWxlbS5maWVsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSBmaWVsZE9mZnNldC5sZWZ0IC0gMjE7XG4gICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gZmllbGRPZmZzZXQudG9wIC0gZWxlbS50dC5vZmZzZXRIZWlnaHQgLSAxMjtcbiAgICAgIGVsZW0udHQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weClgO1xuICAgIH0sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgZm9ybUJ1aWxkZXIuc3RhZ2UucXVlcnlTZWxlY3RvckFsbCgnLmRpc2FibGVkLWZpZWxkJykuZm9yRWFjaChcbiAgICAgICAgZmllbGQgPT4ge1xuICAgICAgICAgIGxldCB0aXRsZSA9IG9wdHMubWVzc2FnZXMuZmllbGROb25FZGl0YWJsZTtcblxuICAgICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgbGV0IHR0ID0gdXRpbHMubWFya3VwKCdwJywgdGl0bGUsIHtjbGFzc05hbWU6ICdmcm1iLXR0J30pO1xuICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodHQpO1xuICAgICAgICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgICAgICAgICAgIF9oZWxwZXJzLmRpc2FibGVkVFQubW92ZShlLCB7dHQsIGZpZWxkfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH07XG5cbiAgX2hlbHBlcnMuY2xhc3NOYW1lcyA9IGZ1bmN0aW9uKGZpZWxkLCBwcmV2aWV3RGF0YSkge1xuICAgIGxldCBpO1xuICAgIGxldCB0eXBlID0gcHJldmlld0RhdGEudHlwZTtcbiAgICBsZXQgc3R5bGUgPSBwcmV2aWV3RGF0YS5zdHlsZTtcbiAgICBsZXQgY2xhc3NOYW1lID0gZmllbGRbMF0ucXVlcnlTZWxlY3RvcignLmZsZC1jbGFzc05hbWUnKS52YWx1ZTtcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgIGxldCB0eXBlcyA9IHtcbiAgICAgIGJ1dHRvbjogJ2J0bicsXG4gICAgICBzdWJtaXQ6ICdidG4nXG4gICAgfTtcblxuICAgIGxldCBwcmltYXJ5VHlwZSA9IHR5cGVzW3R5cGVdO1xuXG4gICAgaWYgKHByaW1hcnlUeXBlKSB7XG4gICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgcmUgPSBuZXcgUmVnRXhwKGAoPzpefFxccykke3ByaW1hcnlUeXBlfS0oLio/KSg/Olxcc3wkKStgLCAnZycpO1xuICAgICAgICAgIGxldCBtYXRjaCA9IGNsYXNzZXNbaV0ubWF0Y2gocmUpO1xuICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNsYXNzZXMucHVzaChwcmltYXJ5VHlwZSArICctJyArIHN0eWxlKTtcbiAgICAgIH1cbiAgICAgIGNsYXNzZXMucHVzaChwcmltYXJ5VHlwZSk7XG4gICAgfVxuXG4gICAgLy8gcmV2ZXJzZSB0aGUgYXJyYXkgdG8gcHV0IGN1c3RvbSBjbGFzc2VzIGF0IGVuZCxcbiAgICAvLyByZW1vdmUgYW55IGR1cGxpY2F0ZXMsIGNvbnZlcnQgdG8gc3RyaW5nLCByZW1vdmUgd2hpdGVzcGFjZVxuICAgIHJldHVybiB1dGlscy51bmlxdWUoY2xhc3Nlcykuam9pbignICcpLnRyaW0oKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xvc2VzIGFuZCBvcGVuIGRpYWxvZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG92ZXJsYXkgRXhpc3Rpbmcgb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBkaWFsb2cgIEV4aXN0aW5nIGRpYWxvZ1xuICAgKi9cbiAgX2hlbHBlcnMuY2xvc2VDb25maXJtID0gZnVuY3Rpb24ob3ZlcmxheSwgZGlhbG9nKSB7XG4gICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1idWlsZGVyLW92ZXJsYXknKVswXTtcbiAgICB9XG4gICAgaWYgKCFkaWFsb2cpIHtcbiAgICAgIGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tYnVpbGRlci1kaWFsb2cnKVswXTtcbiAgICB9XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgZGlhbG9nLnJlbW92ZSgpO1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMubW9kYWxDbG9zZWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYXlvdXQgZGF0YSBiYXNlZCBvbiBjb250cm9sUG9zaXRpb24gb3B0aW9uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gY29udHJvbFBvc2l0aW9uICdsZWZ0JyBvciAncmlnaHQnXG4gICAqIEByZXR1cm4ge09iamVjdH0gbGF5b3V0IG9iamVjdFxuICAgKi9cbiAgX2hlbHBlcnMuZWRpdG9yTGF5b3V0ID0gZnVuY3Rpb24oY29udHJvbFBvc2l0aW9uKSB7XG4gICAgbGV0IGxheW91dE1hcCA9IHtcbiAgICAgIGxlZnQ6IHtcbiAgICAgICAgc3RhZ2U6ICdwdWxsLXJpZ2h0JyxcbiAgICAgICAgY29udHJvbHM6ICdwdWxsLWxlZnQnXG4gICAgICB9LFxuICAgICAgcmlnaHQ6IHtcbiAgICAgICAgc3RhZ2U6ICdwdWxsLWxlZnQnLFxuICAgICAgICBjb250cm9sczogJ3B1bGwtcmlnaHQnXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBsYXlvdXRNYXBbY29udHJvbFBvc2l0aW9uXSA/IGxheW91dE1hcFtjb250cm9sUG9zaXRpb25dIDogJyc7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZHMgb3ZlcmxheSB0byB0aGUgcGFnZS4gVXNlZCBmb3IgbW9kYWxzLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IERPTSBPYmplY3RcbiAgICovXG4gIF9oZWxwZXJzLnNob3dPdmVybGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG92ZXJsYXkgPSB1dGlscy5tYXJrdXAoJ2RpdicsIG51bGwsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Zvcm0tYnVpbGRlci1vdmVybGF5J1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG5cbiAgICBvdmVybGF5Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIF9oZWxwZXJzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBjb25maXJtYXRpb24gZGlhbG9nXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG1lc3NhZ2UgICBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgZGlhbG9nXG4gICAqIEBwYXJhbSAge0Z1bmN9ICB5ZXNBY3Rpb24gY2FsbGJhY2sgdG8gZmlyZSBpZiB0aGV5IGNvbmZpcm1cbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gY29vcmRzICAgIGxvY2F0aW9uIHRvIHB1dCB0aGUgZGlhbG9nXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGNsYXNzTmFtZSBDdXN0b20gY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGRpYWxvZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgUmVmZXJlbmNlIHRvIHRoZSBtb2RhbFxuICAgKi9cbiAgX2hlbHBlcnMuY29uZmlybSA9IChtZXNzYWdlLCB5ZXNBY3Rpb24sIGNvb3JkcyA9IGZhbHNlLCBjbGFzc05hbWUgPSAnJykgPT4ge1xuICAgIGNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XG4gICAgbGV0IG92ZXJsYXkgPSBfaGVscGVycy5zaG93T3ZlcmxheSgpO1xuICAgIGxldCB5ZXMgPSBtKCdidXR0b24nLCBvcHRzLm1lc3NhZ2VzLnllcywge1xuICAgICAgY2xhc3NOYW1lOiAneWVzIGJ0biBidG4tc3VjY2VzcyBidG4tc20nXG4gICAgfSk7XG4gICAgbGV0IG5vID0gbSgnYnV0dG9uJywgb3B0cy5tZXNzYWdlcy5ubywge1xuICAgICAgY2xhc3NOYW1lOiAnbm8gYnRuIGJ0bi1kYW5nZXIgYnRuLXNtJ1xuICAgIH0pO1xuXG4gICAgbm8ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgX2hlbHBlcnMuY2xvc2VDb25maXJtKG92ZXJsYXkpO1xuICAgIH07XG5cbiAgICB5ZXMub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgeWVzQWN0aW9uKCk7XG4gICAgICBfaGVscGVycy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIGxldCBidG5XcmFwID0gbSgnZGl2JywgW25vLCB5ZXNdLCB7Y2xhc3NOYW1lOiAnYnV0dG9uLXdyYXAnfSk7XG5cbiAgICBjbGFzc05hbWUgPSAnZm9ybS1idWlsZGVyLWRpYWxvZyAnICsgY2xhc3NOYW1lO1xuXG4gICAgbGV0IG1pbmlNb2RhbCA9IG0oJ2RpdicsIFttZXNzYWdlLCBidG5XcmFwXSwge2NsYXNzTmFtZTogY2xhc3NOYW1lfSk7XG4gICAgaWYgKCFjb29yZHMpIHtcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgcGFnZVg6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCkgLyAyLFxuICAgICAgICBwYWdlWTogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApIC8gMlxuICAgICAgfTtcbiAgICAgIG1pbmlNb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbmlNb2RhbC5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbmVkJyk7XG4gICAgfVxuXG4gICAgbWluaU1vZGFsLnN0eWxlLmxlZnQgPSBjb29yZHMucGFnZVggKyAncHgnO1xuICAgIG1pbmlNb2RhbC5zdHlsZS50b3AgPSBjb29yZHMucGFnZVkgKyAncHgnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtaW5pTW9kYWwpO1xuXG4gICAgeWVzLmZvY3VzKCk7XG4gICAgcmV0dXJuIG1pbmlNb2RhbDtcbiAgfTtcblxuICAvKipcbiAgICogUG9wdXAgZGlhbG9nIHRoZSBkb2VzIG5vdCByZXF1aXJlIGNvbmZpcm1hdGlvbi5cbiAgICogQHBhcmFtICB7U3RyaW5nfERPTXxBcnJheX0gIGNvbnRlbnRcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gY29vcmRzICAgIGZhbHNlIGlmIG5vIGNvb3JkcyBhcmUgcHJvdmlkZWQuIFdpdGhvdXQgY29vcmRpbmF0ZXNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBwb3B1cCB3aWxsIGFwcGVhciBjZW50ZXIgc2NyZWVuLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBjbGFzc05hbWUgY2xhc3NuYW1lIHRvIGJlIGFkZGVkIHRvIHRoZSBkaWFsb2dcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgIGRvbVxuICAgKi9cbiAgX2hlbHBlcnMuZGlhbG9nID0gZnVuY3Rpb24oY29udGVudCwgY29vcmRzID0gZmFsc2UsIGNsYXNzTmFtZSA9ICcnKSB7XG4gICAgX2hlbHBlcnMuc2hvd092ZXJsYXkoKTtcblxuICAgIGNsYXNzTmFtZSA9ICdmb3JtLWJ1aWxkZXItZGlhbG9nICcgKyBjbGFzc05hbWU7XG5cbiAgICBsZXQgbWluaU1vZGFsID0gdXRpbHMubWFya3VwKCdkaXYnLCBjb250ZW50LCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9KTtcbiAgICBpZiAoIWNvb3Jkcykge1xuICAgICAgY29vcmRzID0ge1xuICAgICAgICBwYWdlWDogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSAvIDIsXG4gICAgICAgIHBhZ2VZOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCkgLyAyXG4gICAgICB9O1xuICAgICAgbWluaU1vZGFsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWluaU1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uZWQnKTtcbiAgICB9XG5cbiAgICBtaW5pTW9kYWwuc3R5bGUubGVmdCA9IGNvb3Jkcy5wYWdlWCArICdweCc7XG4gICAgbWluaU1vZGFsLnN0eWxlLnRvcCA9IGNvb3Jkcy5wYWdlWSArICdweCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1pbmlNb2RhbCk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5tb2RhbE9wZW5lZCk7XG5cbiAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJ2RhdGEtZGlhbG9nJykgIT09IC0xKSB7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy52aWV3RGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pbmlNb2RhbDtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgZmllbGRzIGZyb20gdGhlIGZvcm1cbiAgICogQHBhcmFtIHtCb29sZWFufSBhbmltYXRlIHdoZXRoZXIgdG8gYW5pbWF0ZSBvciBub3RcbiAgICovXG4gIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcyA9IGZ1bmN0aW9uKGFuaW1hdGUgPSB0cnVlKSB7XG4gICAgbGV0IGZvcm0gPSBmb3JtQnVpbGRlci5zdGFnZTtcbiAgICBsZXQgZmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdsaS5mb3JtLWZpZWxkJyk7XG4gICAgbGV0IG1hcmtFbXB0eUFycmF5ID0gW107XG5cbiAgICBpZiAoIWZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5wcmVwZW5kKSB7XG4gICAgICBtYXJrRW1wdHlBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmFwcGVuZCkge1xuICAgICAgbWFya0VtcHR5QXJyYXkucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoIW1hcmtFbXB0eUFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgZm9ybS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICBmb3JtLnBhcmVudEVsZW1lbnQuZGF0YXNldC5jb250ZW50ID0gb3B0cy5tZXNzYWdlcy5nZXRTdGFydGVkO1xuICAgIH1cblxuICAgIGlmIChhbmltYXRlKSB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3JlbW92aW5nJyk7XG4gICAgICBsZXQgb3V0ZXJIZWlnaHQgPSAwO1xuICAgICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4gb3V0ZXJIZWlnaHQgKz0gZmllbGQub2Zmc2V0SGVpZ2h0ICsgMyk7XG4gICAgICBmaWVsZHNbMF0uc3R5bGUubWFyZ2luVG9wID0gYCR7LW91dGVySGVpZ2h0fXB4YDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkLmVtcHR5KGZvcm0pLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92aW5nJyk7XG4gICAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgIH0sIDQwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQuZW1wdHkoZm9ybSk7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJZiB1c2VyIHJlLW9yZGVycyB0aGUgZWxlbWVudHMgdGhlaXIgb3JkZXIgc2hvdWxkIGJlIHNhdmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGNiVUwgb3VyIGxpc3Qgb2YgZWxlbWVudHNcbiAgICovXG4gIF9oZWxwZXJzLnNldEZpZWxkT3JkZXIgPSBmdW5jdGlvbigkY2JVTCkge1xuICAgIGlmICghb3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmaWVsZE9yZGVyID0ge307XG4gICAgJGNiVUwuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICBmaWVsZE9yZGVyW2luZGV4XSA9ICQoZWxlbWVudCkuZGF0YSgnYXR0cnMnKS50eXBlO1xuICAgIH0pO1xuICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdmaWVsZE9yZGVyJywgd2luZG93LkpTT04uc3RyaW5naWZ5KGZpZWxkT3JkZXIpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlb3JkZXIgdGhlIGNvbnRyb2xzIGlmIHRoZSB1c2VyIGhhcyBwcmV2aW91c2x5IG9yZGVyZWQgdGhlbS5cbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXl9IGZybWJGaWVsZHNcbiAgICogQHJldHVybiB7QXJyYXl9IG9yZGVyZWQgZmllbGRzXG4gICAqL1xuICBfaGVscGVycy5vcmRlckZpZWxkcyA9IGZ1bmN0aW9uKGZybWJGaWVsZHMpIHtcbiAgICBsZXQgZmllbGRPcmRlciA9IGZhbHNlO1xuICAgIGxldCBuZXdPcmRlckZpZWxkcyA9IFtdO1xuXG4gICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgaWYgKG9wdHMuc29ydGFibGVDb250cm9scykge1xuICAgICAgICBmaWVsZE9yZGVyID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ZpZWxkT3JkZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdmaWVsZE9yZGVyJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZE9yZGVyKSB7XG4gICAgICBsZXQgY29udHJvbE9yZGVyID0gb3B0cy5jb250cm9sT3JkZXIuY29uY2F0KGZybWJGaWVsZHMubWFwKGZpZWxkID0+XG4gICAgICAgIGZpZWxkLmF0dHJzLnR5cGUpKTtcbiAgICAgIGZpZWxkT3JkZXIgPSB1dGlscy51bmlxdWUoY29udHJvbE9yZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRPcmRlciA9IHdpbmRvdy5KU09OLnBhcnNlKGZpZWxkT3JkZXIpO1xuICAgICAgZmllbGRPcmRlciA9IE9iamVjdC5rZXlzKGZpZWxkT3JkZXIpLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBmaWVsZE9yZGVyW2ldO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmaWVsZE9yZGVyLmZvckVhY2goKGZpZWxkVHlwZSkgPT4ge1xuICAgICAgbGV0IGZpZWxkID0gZnJtYkZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmF0dHJzLnR5cGUgPT09IGZpZWxkVHlwZTtcbiAgICAgIH0pWzBdO1xuICAgICAgbmV3T3JkZXJGaWVsZHMucHVzaChmaWVsZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3T3JkZXJGaWVsZHMuZmlsdGVyKEJvb2xlYW4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZSBmaWVsZHMgYmVpbmcgZWRpdGluZ1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IHN0YWdlXG4gICAqL1xuICBfaGVscGVycy5jbG9zZUFsbEVkaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzID0gJCgnPiBsaS5lZGl0aW5nJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgIGNvbnN0IHRvZ2dsZUJ0bnMgPSAkKCcudG9nZ2xlLWZvcm0nLCBmb3JtQnVpbGRlci5zdGFnZSk7XG4gICAgY29uc3QgZWRpdFBhbmVscyA9ICQoJy5mcm0taG9sZGVyJywgZmllbGRzKTtcblxuICAgIHRvZ2dsZUJ0bnMucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICBmaWVsZHMucmVtb3ZlQ2xhc3MoJ2VkaXRpbmcnKTtcbiAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZHMpLnNob3coKTtcbiAgICBlZGl0UGFuZWxzLmhpZGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZWRpdCBtb2RlIGZvciB0aGUgZ2l2ZW4gZmllbGRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBmaWVsZElkXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGFuaW1hdGVcbiAgICovXG4gIF9oZWxwZXJzLnRvZ2dsZUVkaXQgPSBmdW5jdGlvbihmaWVsZElkLCBhbmltYXRlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCk7XG4gICAgY29uc3QgdG9nZ2xlQnRuID0gJCgnLnRvZ2dsZS1mb3JtJywgZmllbGQpO1xuICAgIGNvbnN0IGVkaXRQYW5lbCA9ICQoJy5mcm0taG9sZGVyJywgZmllbGQpO1xuICAgIGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmcnKTtcbiAgICB0b2dnbGVCdG4udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnNsaWRlVG9nZ2xlKDI1MCk7XG4gICAgICBlZGl0UGFuZWwuc2xpZGVUb2dnbGUoMjUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnRvZ2dsZSgpO1xuICAgICAgZWRpdFBhbmVsLnRvZ2dsZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ29udHJvbHMgZm9sbG93IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIF9oZWxwZXJzLnN0aWNreUNvbnRyb2xzID0gKCkgPT4ge1xuICAgIGNvbnN0ICRjYldyYXAgPSAkKGZvcm1CdWlsZGVyLmNvbnRyb2xzKS5wYXJlbnQoKTtcbiAgICBjb25zdCAkc3RhZ2VXcmFwID0gJChmb3JtQnVpbGRlci5zdGFnZSkucGFyZW50KCk7XG4gICAgY29uc3QgY2JXaWR0aCA9ICRjYldyYXAud2lkdGgoKTtcbiAgICBjb25zdCBjYlBvc2l0aW9uID0gZm9ybUJ1aWxkZXIuY29udHJvbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgbGV0IHNjcm9sbFRvcCA9ICQoZXZ0LnRhcmdldCkuc2Nyb2xsVG9wKCk7XG4gICAgICBjb25zdCBvZmZzZXREZWZhdWx0cyA9IHtcbiAgICAgICAgdG9wOiA1LFxuICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgcmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgbGVmdDogY2JQb3NpdGlvbi5sZWZ0XG4gICAgICB9O1xuXG4gICAgICBsZXQgb2Zmc2V0ID0gb3B0cy5zdGlja3lDb250cm9scy5vZmZzZXQgfHwgb2Zmc2V0RGVmYXVsdHM7XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgPiAkc3RhZ2VXcmFwLm9mZnNldCgpLnRvcCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB3aWR0aDogY2JXaWR0aFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNiU3R5bGUgPSBPYmplY3QuYXNzaWduKHN0eWxlLCBvZmZzZXQpO1xuXG4gICAgICAgIGxldCBjYk9mZnNldCA9ICRjYldyYXAub2Zmc2V0KCk7XG4gICAgICAgIGxldCBzdGFnZU9mZnNldCA9ICRzdGFnZVdyYXAub2Zmc2V0KCk7XG4gICAgICAgIGxldCBjYkJvdHRvbSA9IGNiT2Zmc2V0LnRvcCArICRjYldyYXAuaGVpZ2h0KCk7XG4gICAgICAgIGxldCBzdGFnZUJvdHRvbSA9IHN0YWdlT2Zmc2V0LnRvcCArICRzdGFnZVdyYXAuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGNiQm90dG9tID4gc3RhZ2VCb3R0b20gJiYgKGNiT2Zmc2V0LnRvcCAhPT0gc3RhZ2VPZmZzZXQudG9wKSkge1xuICAgICAgICAgICRjYldyYXAuY3NzKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGxlZnQ6ICdhdXRvJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNiQm90dG9tIDwgc3RhZ2VCb3R0b20gfHwgKGNiQm90dG9tID09PSBzdGFnZUJvdHRvbSAmJiBjYk9mZnNldC50b3AgPiBzY3JvbGxUb3ApKSB7XG4gICAgICAgICAgJGNiV3JhcC5jc3MoY2JTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1CdWlsZGVyLmNvbnRyb2xzLnBhcmVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBPcGVuIGEgZGlhbG9nIHdpdGggdGhlIGZvcm0ncyBkYXRhXG4gICAqL1xuICBfaGVscGVycy5zaG93RGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBtID0gdXRpbHMubWFya3VwO1xuICAgIGNvbnN0IGRhdGEgPSB1dGlscy5lc2NhcGVIdG1sKGZvcm1CdWlsZGVyLmZvcm1EYXRhKTtcbiAgICBjb25zdCBjb2RlID0gbSgnY29kZScsIGRhdGEsIHtjbGFzc05hbWU6IGBmb3JtRGF0YS0ke29wdHMuZGF0YVR5cGV9YH0pO1xuXG4gICAgX2hlbHBlcnMuZGlhbG9nKG0oJ3ByZScsIGNvZGUpLCBudWxsLCAnZGF0YS1kaWFsb2cnKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGEgZmllbGQgZnJvbSB0aGUgc3RhZ2VcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgZmllbGRJRCBJRCBvZiB0aGUgZmllbGQgdG8gYmUgcmVtb3ZlZFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBmaWVsZFJlbW92ZWQgcmV0dXJucyB0cnVlIGlmIGZpZWxkIGlzIHJlbW92ZWRcbiAgICovXG4gIF9oZWxwZXJzLnJlbW92ZUZpZWxkID0gKGZpZWxkSUQpID0+IHtcbiAgICBsZXQgZmllbGRSZW1vdmVkID0gZmFsc2U7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG4gICAgY29uc3QgZmllbGRzID0gZm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWZpZWxkJyk7XG5cbiAgICBpZiAoIWZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybignTm8gZmllbGRzIHRvIHJlbW92ZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghZmllbGRJRCkge1xuICAgICAgbGV0IGF2YWlsYWJsZUlkcyA9IFtdLnNsaWNlLmNhbGwoZmllbGRzKS5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5pZDtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS53YXJuKCdmaWVsZElEIHJlcXVpcmVkIHRvIHVzZSBgcmVtb3ZlRmllbGRgIGFjdGlvbi4nKTtcbiAgICAgIGNvbnNvbGUud2FybignQXZhaWxhYmxlIElEczogJyArIGF2YWlsYWJsZUlkcy5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkSUQpO1xuICAgIGNvbnN0ICRmaWVsZCA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJRCkpO1xuICAgIGlmICghZmllbGQpIHtcbiAgICAgIGNvbnNvbGUud2FybignRmllbGQgbm90IGZvdW5kJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgJGZpZWxkLnNsaWRlVXAoMjUwLCBmdW5jdGlvbigpIHtcbiAgICAgICRmaWVsZC5yZW1vdmVDbGFzcygnZGVsZXRpbmcnKTtcbiAgICAgICRmaWVsZC5yZW1vdmUoKTtcbiAgICAgIGZpZWxkUmVtb3ZlZCA9IHRydWU7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICBpZiAoIWZvcm0uY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHN0YWdlV3JhcCA9IGZvcm0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICAgIHN0YWdlV3JhcC5kYXRhc2V0LmNvbnRlbnQgPSBvcHRzLm1lc3NhZ2VzLmdldFN0YXJ0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZFJlbW92ZWQpO1xuICAgIHJldHVybiBmaWVsZFJlbW92ZWQ7XG4gIH07XG5cbiAgX2hlbHBlcnMucHJvY2Vzc0FjdGlvbkJ1dHRvbnMgPSBidXR0b25EYXRhID0+IHtcbiAgICBsZXQgbSA9IHV0aWxzLm1hcmt1cDtcbiAgICBsZXQge2xhYmVsLCBldmVudHMsIC4uLmF0dHJzfSA9IGJ1dHRvbkRhdGE7XG4gICAgY29uc3QgYnV0dG9uID0gbSgnYnV0dG9uJywgbGFiZWwsIGF0dHJzKTtcblxuICAgIGlmIChldmVudHMpIHtcbiAgICAgIGZvciAobGV0IGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldnQgPT4gZXZlbnRzW2V2ZW50XShldnQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgX2hlbHBlcnMucHJvY2Vzc1N1YnR5cGVzID0gc3VidHlwZU9wdHMgPT4ge1xuICAgIGNvbnN0IHN1YnR5cGVGb3JtYXQgPSBzdWJ0eXBlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYWJlbDogaTE4bi5nZXQoc3VidHlwZSksXG4gICAgICAgICAgdmFsdWU6IHN1YnR5cGVcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRTdWJ0eXBlcyA9IHtcbiAgICAgICAgdGV4dDogWyd0ZXh0JywgJ3Bhc3N3b3JkJywgJ2VtYWlsJywgJ2NvbG9yJywgJ3RlbCddLFxuICAgICAgICBoZWFkZXI6IFsnaDEnLCAnaDInLCAnaDMnXSxcbiAgICAgICAgYnV0dG9uOiBbJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXSxcbiAgICAgICAgcGFyYWdyYXBoOiBbJ3AnLCAnYWRkcmVzcycsICdibG9ja3F1b3RlJywgJ2NhbnZhcycsICdvdXRwdXQnXSxcbiAgICAgICAgdGV4dGFyZWE6IFsndGV4dGFyZWEnLCAncXVpbGwnXVxuICAgICAgfTtcblxuICAgICAgbGV0IHN1YnR5cGVzID0gdXRpbHMubWVyZ2UoZGVmYXVsdFN1YnR5cGVzLCBzdWJ0eXBlT3B0cyk7XG5cbiAgICAgIGZvciAobGV0IHN1YnR5cGUgaW4gc3VidHlwZXMpIHtcbiAgICAgICAgaWYgKHN1YnR5cGVzLmhhc093blByb3BlcnR5KHN1YnR5cGUpKSB7XG4gICAgICAgICAgc3VidHlwZXNbc3VidHlwZV0gPSBzdWJ0eXBlc1tzdWJ0eXBlXS5tYXAoc3VidHlwZUZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1YnR5cGVzO1xuICB9O1xuXG4gIHJldHVybiBfaGVscGVycztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuIiwiY29uc3Qga2NUb2dnbGUgPSAoKSA9PiB7XG4gIGNvbnN0IFRvZ2dsZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHRoZW1lOiAnZnJlc2gnLFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgb2ZmOiAnT2ZmJyxcbiAgICAgICAgb246ICdPbidcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IG9wdHMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgbGV0ICRrY1RvZ2dsZSA9ICQoJzxkaXYgY2xhc3M9XCJrYy10b2dnbGVcIi8+JylcbiAgICAgICAgLmluc2VydEFmdGVyKGVsZW1lbnQpXG4gICAgICAgIC5hcHBlbmQoZWxlbWVudCk7XG5cbiAgICAka2NUb2dnbGUudG9nZ2xlQ2xhc3MoJ29uJywgZWxlbWVudC5pcygnOmNoZWNrZWQnKSk7XG5cbiAgICBsZXQga2N0T24gPSBgPGRpdiBjbGFzcz1cImtjdC1vblwiPiR7b3B0cy5tZXNzYWdlcy5vbn08L2Rpdj5gO1xuICAgIGxldCBrY3RPZmYgPSBgPGRpdiBjbGFzcz1cImtjdC1vZmZcIj4ke29wdHMubWVzc2FnZXMub2ZmfTwvZGl2PmA7XG4gICAgbGV0IGtjdEhhbmRsZSA9ICc8ZGl2IGNsYXNzPVwia2N0LWhhbmRsZVwiPjwvZGl2Pic7XG4gICAgbGV0IGtjdElubmVyID0gYDxkaXYgY2xhc3M9XCJrY3QtaW5uZXJcIj4ke2tjdE9ufSR7a2N0SGFuZGxlfSR7a2N0T2ZmfTwvZGl2PmA7XG5cbiAgICAka2NUb2dnbGUuYXBwZW5kKGtjdElubmVyKTtcblxuICAgICRrY1RvZ2dsZS5jbGljayhmdW5jdGlvbihldnQpIHtcbiAgICAgIGVsZW1lbnQuYXR0cignY2hlY2tlZCcsICFlbGVtZW50LmF0dHIoJ2NoZWNrZWQnKSk7XG4gICAgICAka2NUb2dnbGUudG9nZ2xlQ2xhc3MoJ29uJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgalF1ZXJ5LmZuLmtjVG9nZ2xlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHRoaXM7XG4gICAgcmV0dXJuIHRvZ2dsZS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCBlbGVtZW50ID0gJCh0b2dnbGVbaV0pO1xuICAgICAgaWYgKGVsZW1lbnQuZGF0YSgna2NUb2dnbGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQga2NUb2dnbGUgPSBuZXcgVG9nZ2xlKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgZWxlbWVudC5kYXRhKCdrY1RvZ2dsZScsIGtjVG9nZ2xlKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2NUb2dnbGUoKTtcbiIsIi8qKlxuICogUG9seWZpbGxzIGZvciBvbGRlciBicm93c2VycyBhbmQgYWRkZWQgZnVuY3Rpb25hbGl0eVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcG9seWZpbGxzKCkge1xuICAvLyBFbGVtZW50LnJlbW92ZSgpIHBvbHlmaWxsXG4gIGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIEV2ZW50IHBvbHlmaWxsXG4gIGlmICh0eXBlb2YgRXZlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cuRXZlbnQgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgIGV2ZW50LmluaXRFdmVudChldnQsIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICB9O1xuICAgIH0pKCk7XG4gIH1cblxuICAvLyBPYmplY3QuYXNzaWduIHBvbHlmaWxsXG4gIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQgPSBPYmplY3QodGFyZ2V0KTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBzb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcG9seWZpbGxzKCk7XG4iLCJpbXBvcnQgZCBmcm9tICcuL2RvbSc7XG5cbi8qKlxuICogQ3Jvc3MgZmlsZSB1dGlsaXRpZXMgZm9yIHdvcmtpbmcgd2l0aCBhcnJheXMsXG4gKiBzb3J0aW5nIGFuZCBvdGhlciBmdW4gc3R1ZmZcbiAqIEByZXR1cm4ge09iamVjdH0gZmJVdGlsc1xuICovXG4vLyBmdW5jdGlvbiB1dGlscygpIHtcbiAgY29uc3QgZmJVdGlscyA9IHt9O1xuICB3aW5kb3cuZmJMb2FkZWQgPSB7XG4gICAganM6IFtdLFxuICAgIGNzczogW11cbiAgfTtcbiAgd2luZG93LmZiRWRpdG9ycyA9IHtcbiAgICBxdWlsbDoge30sXG4gICAgdGlueW1jZToge31cbiAgfTtcblxuICAvLyBjbGVhbmVyIHN5bnRheCBmb3IgdGVzdGluZyBpbmRleE9mIGVsZW1lbnRcbiAgZmJVdGlscy5pbkFycmF5ID0gZnVuY3Rpb24obmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgIT09IC0xO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgT2JqZWN0IHRyaW1tZWQgb2YgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqL1xuICBmYlV0aWxzLnRyaW1PYmogPSBmdW5jdGlvbihhdHRycykge1xuICAgIGxldCB4bWxSZW1vdmUgPSBbXG4gICAgICBudWxsLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgJycsXG4gICAgICBmYWxzZSxcbiAgICAgICdmYWxzZSdcbiAgICBdO1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChmYlV0aWxzLmluQXJyYXkoYXR0cnNbYXR0cl0sIHhtbFJlbW92ZSkpIHtcbiAgICAgICAgZGVsZXRlIGF0dHJzW2F0dHJdO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGF0dHJzW2F0dHJdKSkge1xuICAgICAgICBpZiAoIWF0dHJzW2F0dHJdLmxlbmd0aCkge1xuICAgICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICAvKipcbiAgICogVGVzdCBpZiBhdHRyaWJ1dGUgaXMgYSB2YWxpZCBIVE1MIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGZiVXRpbHMudmFsaWRBdHRyID0gZnVuY3Rpb24oYXR0cikge1xuICAgIGxldCBpbnZhbGlkID0gW1xuICAgICAgJ3ZhbHVlcycsXG4gICAgICAnZW5hYmxlT3RoZXInLFxuICAgICAgJ290aGVyJyxcbiAgICAgICdsYWJlbCcsXG4gICAgICAvLyAnc3R5bGUnLFxuICAgICAgJ3N1YnR5cGUnXG4gICAgXTtcbiAgICByZXR1cm4gIWZiVXRpbHMuaW5BcnJheShhdHRyLCBpbnZhbGlkKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhbiBhdHRycyBvYmplY3QgaW50byBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIG9iamVjdCBvZiBhdHRyaWJ1dGVzIGZvciBtYXJrdXBcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5hdHRyU3RyaW5nID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBsZXQgYXR0cmlidXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpICYmIGZiVXRpbHMudmFsaWRBdHRyKGF0dHIpKSB7XG4gICAgICAgIGF0dHIgPSBmYlV0aWxzLnNhZmVBdHRyKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIubmFtZSArIGF0dHIudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXR0cmlidXRlcy5qb2luKCcgJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYXR0cmlidXRlcyB0byBtYXJrdXAgc2FmZSBzdHJpbmdzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSAgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSBhdHRyaWJ1dGUgdmFsdWVcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIGZiVXRpbHMuc2FmZUF0dHIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBmYlV0aWxzLnNhZmVBdHRyTmFtZShuYW1lKTtcbiAgICBsZXQgdmFsU3RyaW5nO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsU3RyaW5nID0gZmJVdGlscy5lc2NhcGVBdHRyKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhbFN0cmluZyA9IGZiVXRpbHMuZXNjYXBlQXR0cih2YWx1ZS5yZXBsYWNlKCcsJywgJyAnKS50cmltKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUgPyBgPVwiJHt2YWxTdHJpbmd9XCJgIDogJyc7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZVxuICAgIH07XG4gIH07XG5cbiAgZmJVdGlscy5zYWZlQXR0ck5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbGV0IHNhZmVBdHRyID0ge1xuICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnXG4gICAgfTtcblxuICAgIHJldHVybiBzYWZlQXR0cltuYW1lXSB8fCBmYlV0aWxzLmh5cGhlbkNhc2UobmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgc3RyaW5ncyBpbnRvIGxvd2VyY2FzZS1oeXBoZW5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5oeXBoZW5DYXNlID0gKHN0cikgPT4ge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKTtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbigkMSkge1xuICAgICAgcmV0dXJuICctJyArICQxLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoL14tKy9nLCAnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGNvbnZlcnQgYSBoeXBoZW5hdGVkIHN0cmluZyB0byBjYW1lbENhc2VcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5jYW1lbENhc2UgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbihtLCB3KSB7XG4gICAgICByZXR1cm4gdy50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgY29udGVudCB0eXBlXG4gICAqIEBwYXJhbSAge05vZGUgfCBTdHJpbmcgfCBBcnJheSB8IE9iamVjdH0gY29udGVudFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlIGZvciBtYXBwaW5nXG4gICAqL1xuICBmYlV0aWxzLmNvbnRlbnRUeXBlID0gY29udGVudCA9PiB7XG4gICAgbGV0IHR5cGUgPSB0eXBlb2YgY29udGVudDtcbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIE5vZGUgfHwgY29udGVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0eXBlID0gJ25vZGUnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgICAgdHlwZSA9ICdhcnJheSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnRzIHRvIGFuIGVsZW1lbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IERPTSBlbGVtZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRzICBvYmplY3QgZnVsbCBvZiBldmVudHMgZWcuIHtjbGljazogZXZ0ID0+IGNhbGxiYWNrfVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZmJVdGlscy5iaW5kRXZlbnRzID0gKGVsZW1lbnQsIGV2ZW50cykgPT4ge1xuICAgIGlmIChldmVudHMpIHtcbiAgICAgIGZvciAobGV0IGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZ0ID0+IGV2ZW50c1tldmVudF0oZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIG1hcmt1cCB3cmFwcGVyIHdoZXJlIG5lZWRlZFxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgICB0YWdcbiAgICogQHBhcmFtICB7U3RyaW5nfEFycmF5fE9iamVjdH0gY29udGVudCB3ZSB3cmFwIHRoaXNcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICAgICAgYXR0cnNcbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gRWxlbWVudFxuICAgKi9cbiAgZmJVdGlscy5tYXJrdXAgPSBmdW5jdGlvbih0YWcsIGNvbnRlbnQgPSAnJywgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgbGV0IGNvbnRlbnRUeXBlID0gZmJVdGlscy5jb250ZW50VHlwZShjb250ZW50KTtcbiAgICBsZXQge2V2ZW50cywgLi4uYXR0cnN9ID0gYXR0cmlidXRlcztcbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIGNvbnN0IGFwcGVuZENvbnRlbnQgPSB7XG4gICAgICBzdHJpbmc6IChjb250ZW50KSA9PiB7XG4gICAgICAgIGZpZWxkLmlubmVySFRNTCArPSBjb250ZW50O1xuICAgICAgfSxcbiAgICAgIG9iamVjdDogKGNvbmZpZykgPT4ge1xuICAgICAgICBsZXQge3RhZywgY29udGVudCwgLi4uZGF0YX0gPSBjb25maWc7XG4gICAgICAgIHJldHVybiBmaWVsZC5hcHBlbmRDaGlsZChmYlV0aWxzLm1hcmt1cCh0YWcsIGNvbnRlbnQsIGRhdGEpKTtcbiAgICAgIH0sXG4gICAgICBub2RlOiAoY29udGVudCkgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICB9LFxuICAgICAgYXJyYXk6IChjb250ZW50KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gZmJVdGlscy5jb250ZW50VHlwZShjb250ZW50W2ldKTtcbiAgICAgICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXShjb250ZW50W2ldKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uOiBjb250ZW50ID0+IHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQoKTtcbiAgICAgICAgY29udGVudFR5cGUgPSBmYlV0aWxzLmNvbnRlbnRUeXBlKGNvbnRlbnQpO1xuICAgICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXShjb250ZW50KTtcbiAgICAgIH0sXG4gICAgICB1bmRlZmluZWQ6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcih0YWcsIGNvbnRlbnQsIGF0dHJpYnV0ZXMpO1xuICAgICAgfSxcbiAgICB9O1xuXG5cbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBmYlV0aWxzLnNhZmVBdHRyTmFtZShhdHRyKTtcbiAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0uY2FsbCh0aGlzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICBmYlV0aWxzLmJpbmRFdmVudHMoZmllbGQsIGV2ZW50cyk7XG5cbiAgICByZXR1cm4gZmllbGQ7XG4gIH07XG4gIGNvbnN0IG0gPSBmYlV0aWxzLm1hcmt1cDtcblxuICAvKipcbiAgICogQ29udmVydCBodG1sIGVsZW1lbnQgYXR0cmlidXRlcyB0byBrZXkvdmFsdWUgb2JqZWN0XG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbSBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGV4OiB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIGZiVXRpbHMucGFyc2VBdHRycyA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICBsZXQgYXR0cnMgPSBlbGVtLmF0dHJpYnV0ZXM7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBmYlV0aWxzLmZvckVhY2goYXR0cnMsIGF0dHIgPT4ge1xuICAgICAgbGV0IGF0dHJWYWwgPSBhdHRyc1thdHRyXS52YWx1ZTtcbiAgICAgIGlmIChhdHRyVmFsLm1hdGNoKC9mYWxzZXx0cnVlL2cpKSB7XG4gICAgICAgIGF0dHJWYWwgPSAoYXR0clZhbCA9PT0gJ3RydWUnKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0clZhbC5tYXRjaCgvdW5kZWZpbmVkL2cpKSB7XG4gICAgICAgIGF0dHJWYWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRyVmFsKSB7XG4gICAgICAgIGRhdGFbYXR0cnNbYXR0cl0ubmFtZV0gPSBhdHRyVmFsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgZmllbGQgb3B0aW9ucyB0byBvcHRpb25EYXRhXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgIERPTSBlbGVtZW50XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgIG9wdGlvbkRhdGEgYXJyYXlcbiAgICovXG4gIGZiVXRpbHMucGFyc2VPcHRpb25zID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZmllbGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ29wdGlvbicpO1xuICAgIGxldCBvcHRpb25EYXRhID0ge307XG4gICAgbGV0IGRhdGEgPSBbXTtcblxuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9wdGlvbkRhdGEgPSBmYlV0aWxzLnBhcnNlQXR0cnMob3B0aW9uc1tpXSk7XG4gICAgICAgIG9wdGlvbkRhdGEubGFiZWwgPSBvcHRpb25zW2ldLnRleHRDb250ZW50O1xuICAgICAgICBkYXRhLnB1c2gob3B0aW9uRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhcnNlIFhNTCBmb3JtRGF0YVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHhtbFN0cmluZ1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICBmb3JtRGF0YSBhcnJheVxuICAgKi9cbiAgZmJVdGlscy5wYXJzZVhNTCA9IGZ1bmN0aW9uKHhtbFN0cmluZykge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgbGV0IHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sU3RyaW5nLCAndGV4dC94bWwnKTtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcblxuICAgIGlmICh4bWwpIHtcbiAgICAgIGxldCBmaWVsZHMgPSB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpZWxkJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmllbGREYXRhID0gZmJVdGlscy5wYXJzZUF0dHJzKGZpZWxkc1tpXSk7XG5cbiAgICAgICAgaWYgKGZpZWxkc1tpXS5jaGlsZHJlbiAmJiBmaWVsZHNbaV0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgZmllbGREYXRhLnZhbHVlcyA9IGZiVXRpbHMucGFyc2VPcHRpb25zKGZpZWxkc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtRGF0YS5wdXNoKGZpZWxkRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBlc2NhcGVkIEhUTUwgaW50byB1c2FibGUgSFRNTFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGh0bWwgZXNjYXBlZCBIVE1MXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICBwYXJzZWQgSFRNTFxuICAgKi9cbiAgZmJVdGlscy5wYXJzZWRIdG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlc2NhcGVFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGVzY2FwZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVzY2FwZSBtYXJrdXAgc28gaXQgY2FuIGJlIGRpc3BsYXllZCByYXRoZXIgdGhhbiByZW5kZXJlZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGh0bWwgbWFya3VwXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICBlc2NhcGVkIGh0bWxcbiAgICovXG4gIGZiVXRpbHMuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgICBsZXQgZXNjYXBlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZXNjYXBlRWxlbWVudC50ZXh0Q29udGVudCA9IGh0bWw7XG4gICAgcmV0dXJuIGVzY2FwZUVsZW1lbnQuaW5uZXJIVE1MO1xuICB9O1xuXG4gIC8vIEVzY2FwZSBhbiBhdHRyaWJ1dGVcbiAgZmJVdGlscy5lc2NhcGVBdHRyID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgbGV0IG1hdGNoID0ge1xuICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnXG4gICAgfTtcblxuICAgIGNvbnN0IHJlcGxhY2VUYWcgPSB0YWcgPT4gbWF0Y2hbdGFnXSB8fCB0YWc7XG5cbiAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSA/IHN0ci5yZXBsYWNlKC9bXCImPD5dL2csIHJlcGxhY2VUYWcpIDogc3RyO1xuICB9O1xuXG4gIC8vIEVzY2FwZSBhdHRyaWJ1dGVzXG4gIGZiVXRpbHMuZXNjYXBlQXR0cnMgPSBmdW5jdGlvbihhdHRycykge1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICBhdHRyc1thdHRyXSA9IGZiVXRpbHMuZXNjYXBlQXR0cihhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJzO1xuICB9O1xuXG4gIC8vIGZvckVhY2ggdGhhdCBjYW4gYmUgdXNlZCBvbiBub2RlTGlzdFxuICBmYlV0aWxzLmZvckVhY2ggPSBmdW5jdGlvbihhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pOyAvLyBwYXNzZXMgYmFjayBzdHVmZiB3ZSBuZWVkXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgZHVwbGljYXRlcyBmcm9tIGFuIGFycmF5IG9mIGVsZW1lbnRzXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnJheSAgYXJyYXkgd2l0aCBwb3NzaWJsZSBkdXBsaWNhdGVzXG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgYXJyYXkgd2l0aCBvbmx5IHVuaXF1ZSB2YWx1ZXNcbiAgICovXG4gIGZiVXRpbHMudW5pcXVlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKChlbGVtLCBwb3MsIGFycikgPT4ge1xuICAgICAgcmV0dXJuIGFyci5pbmRleE9mKGVsZW0pID09PSBwb3M7XG4gICAgfSk7XG4gIH07XG5cbiAgZmJVdGlscy5tYWtlTGFiZWwgPSAoZGF0YSwgbGFiZWwgPSAnJywgZGVzY3JpcHRpb24gPSAnJykgPT4ge1xuICAgIGxldCBsYWJlbENvbnRlbnRzID0gW2RvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxhYmVsKV07XG5cbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgncmVxdWlyZWQnKSkge1xuICAgICAgbGFiZWxDb250ZW50cy5wdXNoKG0oJ3NwYW4nLCAnKicsIHtjbGFzc05hbWU6ICdyZXF1aXJlZCd9KSk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgICBsYWJlbENvbnRlbnRzLnB1c2gobSgnc3BhbicsICc/Jywge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3Rvb2x0aXAtZWxlbWVudCcsXG4gICAgICAgICAgdG9vbHRpcDogZGVzY3JpcHRpb25cbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtKCdsYWJlbCcsIGxhYmVsQ29udGVudHMsIHtcbiAgICAgIGZvcjogZGF0YS5pZCxcbiAgICAgIGNsYXNzTmFtZTogYGZiLSR7ZGF0YS50eXBlfS1sYWJlbGBcbiAgICB9KTtcbiAgfTtcblxuICBmYlV0aWxzLnRlbXBsYXRlTWFwID0gKHRlbXBsYXRlcywgdHlwZSwgZmFsbGJhY2spID0+IHtcbiAgICBsZXQgdGVtcGxhdGU7XG4gICAgbGV0IHRlbXBsYXRlTWFwID0gbmV3IE1hcCh0ZW1wbGF0ZXMpO1xuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiB0ZW1wbGF0ZU1hcCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBpZihmYlV0aWxzLmluQXJyYXkodHlwZSwga2V5KSkge1xuICAgICAgICAgIHRlbXBsYXRlID0gdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0ga2V5KSB7XG4gICAgICAgIHRlbXBsYXRlID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRlbXBsYXRlID0gZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlKCk7XG4gIH07XG5cbiAgZmJVdGlscy5hdXRvY29tcGxldGVUZW1wbGF0ZSA9IGZpZWxkRGF0YSA9PiB7XG4gICAgbGV0IHt2YWx1ZXMsIHR5cGUsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGNvbnN0IGZhdXhFdmVudHMgPSB7XG4gICAgICBpbnB1dDogKGV2dCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YS5pZH0tbGlzdGApO1xuICAgICAgICBkLmZpbHRlcihsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyksIGV2dC50YXJnZXQudmFsdWUpO1xuICAgICAgICBpZiAoIWV2dC50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgbGV0IGZhdXhBdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsXG4gICAgICB7XG4gICAgICAgIGlkOiBgJHtkYXRhLmlkfS1pbnB1dGAsXG4gICAgICAgIGV2ZW50czogZmF1eEV2ZW50c1xuICAgICAgfSk7XG4gICAgbGV0IGhpZGRlbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge3R5cGU6ICdoaWRkZW4nfSk7XG4gICAgZGVsZXRlIGZhdXhBdHRycy5uYW1lO1xuICAgIGNvbnN0IGZpZWxkID0gW1xuICAgICAgbSgnaW5wdXQnLCBudWxsLCBmYXV4QXR0cnMpLFxuICAgICAgbSgnaW5wdXQnLCBudWxsLCBoaWRkZW5BdHRycylcbiAgICBdO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHZhbHVlcy5tYXAoKG9wdGlvbkRhdGEsIGkpID0+IHtcbiAgICAgIGxldCBsYWJlbCA9IG9wdGlvbkRhdGEubGFiZWw7XG4gICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RhdGEuaWR9LWxpc3RgKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS5pZCk7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZSA9IG9wdGlvbkRhdGEudmFsdWU7XG4gICAgICAgICAgICBmaWVsZC5wcmV2aW91c1NpYmxpbmcudmFsdWUgPSBvcHRpb25EYXRhLmxhYmVsO1xuICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IG9wdGlvbkRhdGEudmFsdWVcbiAgICAgIH07XG4gICAgICByZXR1cm4gbSgnbGknLCBsYWJlbCwgY29uZmlnKTtcbiAgICB9KTtcblxuICAgIGZpZWxkLnB1c2gobSgndWwnLCBvcHRpb25zLFxuICAgICAge2lkOiBgJHtkYXRhLmlkfS1saXN0YCwgY2xhc3NOYW1lOiBgZmItJHt0eXBlfS1saXN0YH0pKTtcblxuICAgIGNvbnN0IG9uUmVuZGVyID0gKGV2dCkgPT4ge1xuXG4gICAgfTtcblxuICAgIHJldHVybiB7ZmllbGQsIG9uUmVuZGVyfTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgRE9NIGVsZW1lbnRzIGZvciBzZWxlY3QsIGNoZWNrYm94LWdyb3VwIGFuZCByYWRpby1ncm91cC5cbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZERhdGFcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgRE9NIGVsZW1lbnRzXG4gICAqL1xuICBmYlV0aWxzLnNlbGVjdFRlbXBsYXRlID0gZmllbGREYXRhID0+IHtcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuICAgIGxldCB7dmFsdWVzLCBwbGFjZWhvbGRlciwgdHlwZSwgaW5saW5lLCBvdGhlciwgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgbGV0IG9wdGlvblR5cGUgPSB0eXBlLnJlcGxhY2UoJy1ncm91cCcsICcnKTtcbiAgICBsZXQgaXNTZWxlY3QgPSB0eXBlID09PSAnc2VsZWN0JztcblxuICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgIGlmIChwbGFjZWhvbGRlciAmJiBpc1NlbGVjdCkge1xuICAgICAgICBvcHRpb25zLnB1c2gobSgnb3B0aW9uJywgcGxhY2Vob2xkZXIsIHtcbiAgICAgICAgICBkaXNhYmxlZDogbnVsbCxcbiAgICAgICAgICBzZWxlY3RlZDogbnVsbFxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB7bGFiZWwgPSAnJywgLi4ub3B0aW9uQXR0cnN9ID0gdmFsdWVzW2ldO1xuXG4gICAgICAgIG9wdGlvbkF0dHJzLmlkID0gYCR7ZGF0YS5pZH0tJHtpfWA7XG4gICAgICAgIGlmICghb3B0aW9uQXR0cnMuc2VsZWN0ZWQgfHwgcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICBkZWxldGUgb3B0aW9uQXR0cnMuc2VsZWN0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZWxlY3QpIHtcbiAgICAgICAgICBsZXQgbyA9IG0oJ29wdGlvbicsIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxhYmVsKSwgb3B0aW9uQXR0cnMpO1xuICAgICAgICAgIG9wdGlvbnMucHVzaChvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgd3JhcHBlckNsYXNzID0gb3B0aW9uVHlwZTtcbiAgICAgICAgICBpZiAoaW5saW5lKSB7XG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3MgKz0gJy1pbmxpbmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb25BdHRycy50eXBlID0gb3B0aW9uVHlwZTtcbiAgICAgICAgICBpZiAob3B0aW9uQXR0cnMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbkF0dHJzLmNoZWNrZWQgPSBudWxsO1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgaW5wdXQgPSBtKCdpbnB1dCcsIG51bGwsIE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIG9wdGlvbkF0dHJzKSk7XG4gICAgICAgICAgbGV0IGlucHV0TGFiZWwgPSBtKCdsYWJlbCcsIFtpbnB1dCwgbGFiZWxdLCB7Zm9yOiBvcHRpb25BdHRycy5pZH0pO1xuICAgICAgICAgIGxldCB3cmFwcGVyID0gbSgnZGl2JywgaW5wdXRMYWJlbCwge2NsYXNzTmFtZTogd3JhcHBlckNsYXNzfSk7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKHdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNTZWxlY3QgJiYgb3RoZXIpIHtcbiAgICAgICAgbGV0IG90aGVyT3B0aW9uQXR0cnMgPSB7XG4gICAgICAgICAgaWQ6IGAke2RhdGEuaWR9LW90aGVyYCxcbiAgICAgICAgICBjbGFzc05hbWU6IGAke2RhdGEuY2xhc3NOYW1lfSBvdGhlci1vcHRpb25gLFxuICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgY2xpY2s6ICgpID0+IGZiVXRpbHMub3RoZXJPcHRpb25DQihvdGhlck9wdGlvbkF0dHJzLmlkKVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gbGV0IGxhYmVsID0gbWkxOG4uY3VycmVudC5vdGhlcjtcbiAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XG4gICAgICAgIGlmIChpbmxpbmUpIHtcbiAgICAgICAgICB3cmFwcGVyQ2xhc3MgKz0gJy1pbmxpbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9wdGlvbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgb3RoZXJPcHRpb25BdHRycyk7XG4gICAgICAgIG9wdGlvbkF0dHJzLnR5cGUgPSBvcHRpb25UeXBlO1xuXG4gICAgICAgIGxldCBvdGhlclZhbEF0dHJzID0ge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgaWQ6IGAke290aGVyT3B0aW9uQXR0cnMuaWR9LXZhbHVlYCxcbiAgICAgICAgICBjbGFzc05hbWU6ICdvdGhlci12YWwnXG4gICAgICAgIH07XG4gICAgICAgIGxldCBvdGhlcklucHV0cyA9IFtcbiAgICAgICAgICBtKCdpbnB1dCcsIG51bGwsIG9wdGlvbkF0dHJzKSxcbiAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnT3RoZXInKSxcbiAgICAgICAgICBtKCdpbnB1dCcsIG51bGwsIG90aGVyVmFsQXR0cnMpXG4gICAgICAgIF07XG4gICAgICAgIGxldCBpbnB1dExhYmVsID0gbSgnbGFiZWwnLCBvdGhlcklucHV0cywge2Zvcjogb3B0aW9uQXR0cnMuaWR9KTtcbiAgICAgICAgbGV0IHdyYXBwZXIgPSBtKCdkaXYnLCBpbnB1dExhYmVsLCB7Y2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3N9KTtcbiAgICAgICAgb3B0aW9ucy5wdXNoKHdyYXBwZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRlbXBsYXRlcyA9IFtcbiAgICAgIFsnc2VsZWN0JyxcbiAgICAgICAgKCkgPT4gbShvcHRpb25UeXBlLCBvcHRpb25zLCBkYXRhKV0sXG4gICAgICBbWydjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddLFxuICAgICAgICAoKSA9PiBtKCdkaXYnLCBvcHRpb25zLCB7Y2xhc3NOYW1lOiB0eXBlfSldXG4gICAgXTtcblxuICAgIHJldHVybiBmYlV0aWxzLnRlbXBsYXRlTWFwKHRlbXBsYXRlcywgdHlwZSk7XG4gIH07XG5cbiAgZmJVdGlscy5kZWZhdWx0RmllbGQgPSBmaWVsZERhdGEgPT4ge1xuICAgIGxldCB7bGFiZWwsIGRlc2NyaXB0aW9uLCBzdWJ0eXBlLCB0eXBlLCBpZCwgaXNQcmV2aWV3LCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgICAgZGF0YS5uYW1lID0gZGF0YS5uYW1lICsgJy1wcmV2aWV3JztcbiAgICAgIH1cbiAgICAgIGRhdGEuaWQgPSBkYXRhLm5hbWU7XG4gICAgfVxuICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgZGF0YS50aXRsZSA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBpZiAoc3VidHlwZSkge1xuICAgICAgdHlwZSA9IHN1YnR5cGU7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkID0ge1xuICAgICAgZmllbGQ6IG0odHlwZSwgbGFiZWwsIGRhdGEpLFxuICAgICAgb25SZW5kZXI6IGZiVXRpbHMubm9vcFxuICAgIH07XG5cbiAgICByZXR1cm4gKCkgPT4gZmllbGQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvYWRzIGFuIGFycmF5IG9mIHNjcmlwdHMgdXNpbmcgalF1ZXJ5J3MgYGdldFNjcmlwdGBcbiAgICogQHBhcmFtICB7QXJyYXl8U3RyaW5nfSAgc2NyaXB0U2NyICAgIHNjcmlwdHNcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwYXRoICAgb3B0aW9uYWwgdG8gbG9hZCBmb3JtXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgIGEgcHJvbWlzZVxuICAgKi9cbiAgZmJVdGlscy5nZXRTY3JpcHRzID0gKHNjcmlwdFNjciwgcGF0aCkgPT4ge1xuICAgIGNvbnN0ICQgPSBqUXVlcnk7XG4gICAgbGV0IF9hcnIgPSBbXTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShzY3JpcHRTY3IpKSB7XG4gICAgICBzY3JpcHRTY3IgPSBbc2NyaXB0U2NyXTtcbiAgICB9XG5cbiAgICBpZiAoIWZiVXRpbHMuaXNDYWNoZWQoc2NyaXB0U2NyKSkge1xuICAgICAgX2FyciA9ICQubWFwKHNjcmlwdFNjciwgc3JjID0+IHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgZGF0YVR5cGU6ICdzY3JpcHQnLFxuICAgICAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgICAgIHVybDogKHBhdGggfHwgJycpICsgc3JjXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAkLmFqYXgob3B0aW9ucykuZG9uZSgoKSA9PiB3aW5kb3cuZmJMb2FkZWQuanMucHVzaChzcmMpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9hcnIucHVzaCgkLkRlZmVycmVkKCBkZWZlcnJlZCA9PiAkKCBkZWZlcnJlZC5yZXNvbHZlICkpKTtcblxuICAgIHJldHVybiAkLndoZW4oLi4uX2Fycik7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByZW1vdGUgcmVzb3VyY2UgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICogQHBhcmFtICB7U3RyaW5nfEFycmF5fSBzcmMgIHVybCBvZiByZW1vdGUgc2NyaXB0IG9yIGNzc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIHR5cGUgICAgICAgJ2pzJyBvciAnY3NzJ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIGlzQ2FjaGVkXG4gICAqL1xuICBmYlV0aWxzLmlzQ2FjaGVkID0gKHNyYywgdHlwZSA9ICdqcycpID0+IHtcbiAgICBsZXQgaXNDYWNoZWQgPSBmYWxzZTtcbiAgICBjb25zdCBjYWNoZSA9IHdpbmRvdy5mYkxvYWRlZFt0eXBlXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzcmMpKSB7XG4gICAgICBpc0NhY2hlZCA9IHNyYy5ldmVyeShzID0+IGZiVXRpbHMuaW5BcnJheShzLCBjYWNoZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0NhY2hlZCA9IGZiVXRpbHMuaW5BcnJheShzcmMsIGNhY2hlKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQ2FjaGVkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHN0eWxlc2hlZXRzIHRvIHRoZSBoZWFkXG4gICAqIEBwYXJhbSAge0FycmF5fSBzY3JpcHRTY3JcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwYXRoXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBmYlV0aWxzLmdldFN0eWxlcyA9IChzY3JpcHRTY3IsIHBhdGgpID0+IHtcbiAgICBpZiAoZmJVdGlscy5pc0NhY2hlZChzY3JpcHRTY3IsICdjc3MnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhcHBlbmRTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgbGluay50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICB3aW5kb3cuZmJMb2FkZWQuY3NzLnB1c2goaHJlZik7XG4gICAgfTtcbiAgICBzY3JpcHRTY3IuZm9yRWFjaChzcmMgPT4gYXBwZW5kU3R5bGUoKHBhdGggfHwgJycpICsgc3JjKSk7XG4gIH07XG5cbiAgZmJVdGlscy5sb25nVGV4dFRlbXBsYXRlID0gZGF0YSA9PiB7XG4gICAgbGV0IHt2YWx1ZSA9ICcnLCAuLi5hdHRyc30gPSBkYXRhO1xuICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgIGZpZWxkOiBtKCd0ZXh0YXJlYScsIGZiVXRpbHMucGFyc2VkSHRtbCh2YWx1ZSksIGF0dHJzKVxuICAgIH07XG4gICAgbGV0IGVkaXRvcnMgPSB7XG4gICAgICB0aW55bWNlOiB7XG4gICAgICAgIGpzOiBbJy8vY2RuLnRpbnltY2UuY29tLzQvdGlueW1jZS5taW4uanMnXSxcbiAgICAgICAgb25SZW5kZXI6IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvdy50aW55bWNlLmVkaXRvcnNbZGF0YS5pZF0pIHtcbiAgICAgICAgICAgIHdpbmRvdy50aW55bWNlLmVkaXRvcnNbZGF0YS5pZF0ucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHdpbmRvdy50aW55bWNlLmluaXQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0ZW1wbGF0ZS5maWVsZCxcbiAgICAgICAgICAgIGhlaWdodDogMjUwLFxuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAnYWR2bGlzdCBhdXRvbGluayBsaXN0cyBsaW5rIGltYWdlIGNoYXJtYXAgcHJpbnQgcHJldmlldyBhbmNob3InLFxuICAgICAgICAgICAgICAnc2VhcmNocmVwbGFjZSB2aXN1YWxibG9ja3MgY29kZSBmdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgJ2luc2VydGRhdGV0aW1lIG1lZGlhIHRhYmxlIGNvbnRleHRtZW51IHBhc3RlIGNvZGUnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdG9vbGJhcjogJ2luc2VydGZpbGUgdW5kbyByZWRvIHwgc3R5bGVzZWxlY3QgfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCB8IGxpbmsgaW1hZ2UnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBxdWlsbDoge1xuICAgICAgICBqczogWycvL2Nkbi5xdWlsbGpzLmNvbS8xLjEuMy9xdWlsbC5qcyddLFxuICAgICAgICBjc3M6IFsnLy9jZG4ucXVpbGxqcy5jb20vMS4xLjMvcXVpbGwuc25vdy5jc3MnXSxcbiAgICAgICAgb25SZW5kZXI6IGV2dCA9PiB7XG4gICAgICAgICAgY29uc3QgRGVsdGEgPSB3aW5kb3cuUXVpbGwuaW1wb3J0KCdkZWx0YScpO1xuICAgICAgICAgIHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbZGF0YS5pZF0gPSB7fTtcbiAgICAgICAgICBsZXQgZWRpdG9yID0gd2luZG93LmZiRWRpdG9ycy5xdWlsbFtkYXRhLmlkXTtcbiAgICAgICAgICBlZGl0b3IuaW5zdGFuY2UgPSBuZXcgd2luZG93LlF1aWxsKHRlbXBsYXRlLmZpZWxkLCB7XG4gICAgICAgICAgICBtb2R1bGVzOiB7XG4gICAgICAgICAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAgICAgICAgICBbeydoZWFkZXInOiBbMSwgMiwgZmFsc2VdfV0sXG4gICAgICAgICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSxcbiAgICAgICAgICAgICAgICBbJ2NvZGUtYmxvY2snXVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGF0dHJzLnBsYWNlaG9sZGVyIHx8ICcnLFxuICAgICAgICAgICAgdGhlbWU6ICdzbm93J1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGVkaXRvci5kYXRhID0gbmV3IERlbHRhKCk7XG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBlZGl0b3IuaW5zdGFuY2Uuc2V0Q29udGVudHMod2luZG93LkpTT04ucGFyc2UoZmJVdGlscy5wYXJzZWRIdG1sKHZhbHVlKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlZGl0b3IuaW5zdGFuY2Uub24oJ3RleHQtY2hhbmdlJywgZnVuY3Rpb24oZGVsdGEpIHtcbiAgICAgICAgICAgIGVkaXRvci5kYXRhID0gZWRpdG9yLmRhdGEuY29tcG9zZShkZWx0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGRhdGEudHlwZSAhPT0gJ3RleHRhcmVhJykge1xuICAgICAgdGVtcGxhdGUub25SZW5kZXIgPSBlZGl0b3JzW2RhdGEudHlwZV0ub25SZW5kZXI7XG4gICAgfVxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdxdWlsbCcpIHtcbiAgICAgIHRlbXBsYXRlLmZpZWxkID0gbSgnZGl2JywgbnVsbCwgYXR0cnMpO1xuICAgIH1cblxuICAgIGNvbnN0IG9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgaWYgKGVkaXRvcnNbZGF0YS50eXBlXSkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmaWVsZFJlbmRlcmVkJywgb25SZW5kZXIpO1xuXG4gICAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0uY3NzKSB7XG4gICAgICAgICAgZmJVdGlscy5nZXRTdHlsZXMoZWRpdG9yc1tkYXRhLnR5cGVdLmNzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVkaXRvcnNbZGF0YS50eXBlXS5qcyAmJiAhZmJVdGlscy5pc0NhY2hlZChlZGl0b3JzW2RhdGEudHlwZV0uanMpKSB7XG4gICAgICAgICAgZmJVdGlscy5nZXRTY3JpcHRzKGVkaXRvcnNbZGF0YS50eXBlXS5qcykuZG9uZSh0ZW1wbGF0ZS5vblJlbmRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcGxhdGUub25SZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge2ZpZWxkOiB0ZW1wbGF0ZS5maWVsZCwgb25SZW5kZXJ9O1xuICB9O1xuXG4gIGZiVXRpbHMuZ2V0VGVtcGxhdGUgPSAoZmllbGREYXRhLCBpc1ByZXZpZXcgPSBmYWxzZSkgPT4ge1xuICAgIGxldCB7XG4gICAgICBsYWJlbCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgc3VidHlwZSxcbiAgICAgIGxhYmVsUG9zaXRpb24sXG4gICAgICAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBsZXQgdGVtcGxhdGU7XG4gICAgbGV0IGZpZWxkO1xuXG4gICAgaWYgKGlzUHJldmlldykge1xuICAgICAgZGF0YS5uYW1lID0gZGF0YS5uYW1lICsgJy1wcmV2aWV3JztcbiAgICB9XG4gICAgZGF0YS5pZCA9IGRhdGEubmFtZTtcblxuICAgIGlmIChzdWJ0eXBlKSB7XG4gICAgICBkYXRhLnR5cGUgPSBzdWJ0eXBlO1xuICAgIH1cblxuICAgIGlmIChkYXRhLm11bHRpcGxlIHx8IGRhdGEudHlwZSA9PT0gJ2NoZWNrYm94LWdyb3VwJykge1xuICAgICAgZGF0YS5uYW1lID0gZGF0YS5uYW1lICsgJ1tdJztcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5yZXF1aXJlZCkge1xuICAgICAgZGF0YS5yZXF1aXJlZCA9IG51bGw7XG4gICAgICBkYXRhWydhcmlhLXJlcXVpcmVkJ10gPSAndHJ1ZSc7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkTGFiZWwgPSBmYlV0aWxzLm1ha2VMYWJlbChkYXRhLCBsYWJlbCwgZGVzY3JpcHRpb24pO1xuXG4gICAgbGV0IHRlbXBsYXRlcyA9IFtcbiAgICAgIFtbJ2F1dG9jb21wbGV0ZSddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IGF1dG9jb21wbGV0ZSA9IGZiVXRpbHMuYXV0b2NvbXBsZXRlVGVtcGxhdGUoZGF0YSk7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBhdXRvY29tcGxldGUuZmllbGRdLFxuICAgICAgICAgICAgb25SZW5kZXI6IGF1dG9jb21wbGV0ZS5vblJlbmRlclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ3RleHQnLCAncGFzc3dvcmQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ2ZpbGUnLCAnY29sb3InLCAnZGF0ZScsICd0ZWwnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgbSgnaW5wdXQnLCBudWxsLCBkYXRhKV0sXG4gICAgICAgICAgICBvblJlbmRlcjogZmJVdGlscy5ub29wXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1snYnV0dG9uJywgJ3N1Ym1pdCcsICdyZXNldCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IG0oJ2J1dHRvbicsIGxhYmVsLCBkYXRhKSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbWydzZWxlY3QnLCAnY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBmaWVsZCA9IGZiVXRpbHMuc2VsZWN0VGVtcGxhdGUoZGF0YSk7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBmaWVsZF0sXG4gICAgICAgICAgICBvblJlbmRlcjogZmJVdGlscy5ub29wXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgWydjaGVja2JveCcsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgZmllbGQgPSBbbSgnaW5wdXQnLCBudWxsLCBkYXRhKV07XG4gICAgICAgICAgaWYgKGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmVJbnB1dCcpIHtcbiAgICAgICAgICAgIGZpZWxkLnVuc2hpZnQoZmllbGRMYWJlbCwgJyAnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmllbGQucHVzaCgnICcsIGZpZWxkTGFiZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgIG9uUmVuZGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChkYXRhLnRvZ2dsZSkge1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS5pZCkpLmtjVG9nZ2xlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbWyd0ZXh0YXJlYScsICd0aW55bWNlJywgJ3F1aWxsJ10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgZmllbGQgPSBmYlV0aWxzLmxvbmdUZXh0VGVtcGxhdGUoZGF0YSk7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBmaWVsZC5maWVsZF0sXG4gICAgICAgICAgICBvblJlbmRlcjogZmllbGQub25SZW5kZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV1cbiAgICAgIF07XG5cbiAgICAgIHRlbXBsYXRlID0gZmJVdGlscy50ZW1wbGF0ZU1hcChcbiAgICAgICAgdGVtcGxhdGVzLFxuICAgICAgICBkYXRhLnR5cGUsXG4gICAgICAgIGZiVXRpbHMuZGVmYXVsdEZpZWxkKGZpZWxkRGF0YSkgLy8gZmFsbGJhY2tcbiAgICAgICk7XG5cbiAgICAgIGlmIChkYXRhLnR5cGUgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgIGxldCB3cmFwcGVyQXR0cnMgPSB7fTtcbiAgICAgICAgaWYgKGRhdGEuaWQpIHtcbiAgICAgICAgICB3cmFwcGVyQXR0cnMuY2xhc3NOYW1lID1cbiAgICAgICAgICBgZmItJHtkYXRhLnR5cGV9IGZvcm0tZ3JvdXAgZmllbGQtJHtkYXRhLmlkfWA7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGQgPSBmYlV0aWxzLm1hcmt1cCgnZGl2JywgdGVtcGxhdGUuZmllbGQsIHdyYXBwZXJBdHRycyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZCA9IGZiVXRpbHMubWFya3VwKCdpbnB1dCcsIG51bGwsIGRhdGEpO1xuICAgICAgfVxuXG4gICAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdmaWVsZFJlbmRlcmVkJywgdGVtcGxhdGUub25SZW5kZXIpO1xuXG4gICAgICByZXR1cm4gZmllbGQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciBvdGhlciBvcHRpb24uXG4gICAqIFRvZ2dsZXMgdGhlIGhpZGRlbiB0ZXh0IGFyZWEgZm9yIFwib3RoZXJcIiBvcHRpb24uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gb3RoZXJJZCBpZCBvZiB0aGUgXCJvdGhlclwiIG9wdGlvbiBpbnB1dFxuICAgKi9cbiAgZmJVdGlscy5vdGhlck9wdGlvbkNCID0gKG90aGVySWQpID0+IHtcbiAgICBjb25zdCBvdGhlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3RoZXJJZCk7XG4gICAgY29uc3Qgb3RoZXJJbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7b3RoZXJJZH0tdmFsdWVgKTtcblxuICAgIGlmIChvdGhlcklucHV0LmNoZWNrZWQpIHtcbiAgICAgIG90aGVySW5wdXRWYWx1ZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG90aGVySW5wdXRWYWx1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2FwaXRhbGl6ZXMgYSBzdHJpbmdcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHIgdW5jYXBpdGFsaXplZCBzdHJpbmdcbiAgICogQHJldHVybiB7U3RyaW5nfSBzdHIgY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAqL1xuICBmYlV0aWxzLmNhcGl0YWxpemUgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXGJcXHcvZywgZnVuY3Rpb24obSkge1xuICAgICAgICByZXR1cm4gbS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSk7XG4gIH07XG5cblxuZmJVdGlscy5tZXJnZSA9IChvYmoxLCBvYmoyKSA9PiB7XG4gIGxldCBtZXJnZWRPYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmoxLCBvYmoyKTtcbiAgZm9yIChsZXQgcHJvcCBpbiBvYmoyKSB7XG4gICAgaWYgKG1lcmdlZE9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqMltwcm9wXSkpIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gQXJyYXkuaXNBcnJheShvYmoxW3Byb3BdKSA/IGZiVXRpbHMudW5pcXVlKG9iajFbcHJvcF0uY29uY2F0KG9iajJbcHJvcF0pKSA6IG9iajJbcHJvcF07XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmoyW3Byb3BdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSBmYlV0aWxzLm1lcmdlKG9iajFbcHJvcF0sIG9iajJbcHJvcF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gb2JqMltwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1lcmdlZE9iajtcbn07XG5cbi8qKlxuICogVXRpbCB0byByZW1vdmUgY29udGVudHMgb2YgRE9NIE9iamVjdFxuICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgZWxlbWVudCB3aXRoIGl0cyBjaGlsZHJlbiByZW1vdmVkXG4gKi9cbmZiVXRpbHMuZW1wdHkgPSBlbGVtZW50ID0+IHtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmZiVXRpbHMubm9vcCA9ICgpID0+IG51bGw7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmYlV0aWxzO1xuIl19
