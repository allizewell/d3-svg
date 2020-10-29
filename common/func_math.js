//数学函数
"use strict";
(function(){

var func_math = {

	//标准差即分母为0的时候 暂返回0处理
	getz_scores:function(arr){
        var t= func_math.getsum(arr)/arr.length
          , e = func_math.getsd(arr);
          console.log(t,e)
        return e ? arr.map(function(n) {
            return (Number(n) - t) / e
        }) : arr.map(function(n) {
            return 0;
        })
        // Array.apply(null, new Array(this.length)).map(function() {
        //     return 0
        // })
	},
	getsum:function(arr){
	  return arr.reduce(function(t, e) {
	            return Number(t) + Number(e)
	        })
	},
	// 方差
	getss:function(arr){
	        var sum=0,mean= func_math.getsum(arr)/arr.length;
	        for (var i = 0; i < arr.length; i++) {
	          var ss=Math.pow(Number(arr[i])-mean,2);
	          sum += ss;
	        };
	        // for(let value of arr){
	        //   var ss=Math.pow(value-mean,2);
	        //   sum += ss;
	        // }
	        return sum;
	},
	//标准差
	getsd:function(arr){
	  return Math.pow(func_math.getss(arr) / arr.length, .5)
	},
	// 协方差
	getcv:function(arr){
	   var mean= func_math.getsum(arr)/arr.length;
	  return func_math.getsd(arr) / mean
	},

	}

// 暴露插件
var global = (function(){ return this || (0, eval)('this'); }());
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = func_math :
    typeof define === 'function' && define.amd ? define( func_math ) : !('func_math' in global) && (global.func_math = func_math);


}());
