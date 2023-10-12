"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.nq=f;}
function $rt_cls(cls){return J6(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return ATX(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bq.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return E; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A19());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return AMO();}
function $rt_setThread(t){return EJ(t);}
function $rt_createException(message){return VJ(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var M=$rt_throw;var S=$rt_compare;var A1$=$rt_nullCheck;var K=$rt_cls;var N=$rt_createArray;var Pp=$rt_isInstance;var CL=$rt_nativeThread;var C=$rt_suspending;var Ev=$rt_resuming;var Eq=$rt_invalidPointer;var B=$rt_s;var Bt=$rt_eraseClinit;var Bg=$rt_imul;var Bh=$rt_wrapException;
function E(){this.b3=null;this.$id$=0;}
function A1_(){var a=new E();SE(a);return a;}
function A0K(b){var c;if(b.b3===null)RG(b);if(b.b3.dI===null)b.b3.dI=A2a;else if(b.b3.dI!==A2a){c=new DJ;Bp(c,B(0));M(c);}b=b.b3;b.eH=b.eH+1|0;}
function A13(b){var c,d;if(!Gx(b)&&b.b3.dI===A2a){c=b.b3;d=c.eH-1|0;c.eH=d;if(!d)b.b3.dI=null;Gx(b);return;}b=new IL;R(b);M(b);}
function Zs(b){if(b.b3===null)RG(b);if(b.b3.dI===null)b.b3.dI=A2a;if(b.b3.dI!==A2a)APS(b,1);else{b=b.b3;b.eH=b.eH+1|0;}}
function RG(b){b.b3=A0n();}
function APS(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Ct=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EF=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0v(callback);return thread.suspend(function(){try{A1B(b,c,callback);}catch($e){callback.EF($rt_exception($e));}});}
function A1B(b,c,d){var e,f,g;e=A2a;if(b.b3===null){RG(b);EJ(e);b=b.b3;b.eH=b.eH+c|0;Cx(d,null);return;}if(b.b3.dI===null){b.b3.dI=e;EJ(e);b=b.b3;b.eH=b.eH+c|0;Cx(d,null);return;}f=b.b3;if(f.gw===null)f.gw=APU();f=f.gw;g=new Of;g.wX=e;g.wY=b;g.wV=c;g.wW=d;d=g;f.push(d);}
function Lz(b){var c;if(!Gx(b)&&b.b3.dI===A2a){c=b.b3;c.eH=c.eH-1|0;if(c.eH<=0){c.dI=null;if(c.gw!==null&&!H9(c.gw)){c=new PJ;c.zX=b;N5(c);}else Gx(b);}return;}b=new IL;R(b);M(b);}
function Gx(a){var b;b=a.b3;if(b===null)return 1;a:{if(b.dI===null&&!(b.gw!==null&&!H9(b.gw))){if(b.py===null)break a;if(H9(b.py))break a;}return 0;}a.b3=null;return 1;}
function SE(a){return;}
function C4(a){return J6(a.constructor);}
function AVa(a){return KI(a);}
function N$(a,b){return a!==b?0:1;}
function ANX(a){var b,c,d,e,f,g,h,i;b=new Bd;Bb(b);b=H(H(b,Hf(C4(a))),B(1));c=KI(a);if(!c)d=B(2);else{if(!c)e=32;else{f=0;e=c>>>16;if(e)f=16;else e=c;g=e>>>8;if(!g)g=e;else f=f|8;e=g>>>4;if(!e)e=g;else f=f|4;g=e>>>2;if(!g)g=e;else f=f|2;if(g>>>1)f=f|1;e=(32-f|0)-1|0;}g=(((32-e|0)+4|0)-1|0)/4|0;h=$rt_createCharArray(g);i=h.data;e=(g-1|0)*4|0;g=0;while(e>=0){f=g+1|0;i[g]=Hy(c>>>e&15,16);e=e-4|0;g=f;}d=ATX(h);}return O(H(b,d));}
function KI(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AQb(a){var b,c,d;if(!Pp(a,E1)&&a.constructor.$meta.item===null){b=new Pg;R(b);M(b);}b=AM3(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function S_(a){var b,c;if(!(a.b3!==null&&a.b3.dI===A2a?1:0)){b=new IL;R(b);M(b);}b=a.b3.py;if(b===null)return;while(!H9(b)){c=AJk(b);if(!c.T9())N5(c);}a.b3.py=null;}
function H0(){E.call(this);}
var A2b=null;var A2c=null;var A2d=null;function A2e(){var a=new H0();ALd(a);return a;}
function ALd(a){return;}
function ALi(b){var c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AE5();ABy();AKJ();VH();AKs();ADK();Yh();AMv();YA();AFC();ALW();UT();ACK();U2();ACp();AGD();AAI();AAK();AI_();AKB();AC4();AIU();Xe();AAR();ZP();ACV();Ty();AGM();AE1();VR();Y7();AJh();AMq();ACf();AJF();AII();AGs();VW();AFi();ZL();AHl();AFX();AHk();ADB();ABm();AKy();AEL();Wt();ADg();AGH();WW();AHI();ACS();AAM();c
=window.minecraftOpts;if(c===null)d=null;else{d=N(Cp,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));A2b=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){}else if($$je instanceof EE){c=$$je;break a;}else{throw $$e;}}return;}Me(c,AXA(AYa()));return;case 1:b:{c:{d:{try{V5(c,g);if(C()){break _;}break d;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){}else if($$je instanceof EE){c=$$je;break c;}
else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Bh($$e);if($$je instanceof EE){c=$$je;}else{throw $$e;}}}Me(c,AXA(AYa()));return;}c=new IF;h=JD();i=KB();g=new Q6;g.Aq=0;g.cy=c;g.tG=(-1);g.tI=(-1);g.tH=(-1);g.gC=0.0;g.lq=0.0;g.mX=0.0;g.lS=0;j=new Q_;b=N(E2,4);d=b.data;d[0]=K(HD);d[1]=K(HR);d[2]=K(In);d[3]=K(IN);ON(j,100,K(Dp),b);j.CA=g;g.yc=j;k=new HH;b=N(E2,2);d=b.data;d[0]=K(I6);d[1]=K(He);ON(k,20,K(FF),b);g.ys=k;c.ce=g;g=new Pz;g.zE=1.0;g.kv=0.0;g.mf=1.0;g.cI=20.0;g.q0=B1();g.p9=Long_div(D6(),Long_fromInt(1000000));c.ba
=g;c.jT=null;c.bm=0;c.A=null;g=new O6;g.pk=B(3);g.mD=B(3);g.mS=B1();g.ma=0;g.ft=c;c.ii=g;g=new Pk;g.oP=0;g.kE=0.0;g.oq=null;g.kb=new De;g.DY=0;g.DX=0;g.ok=GN(16);g.y=c;g.hI=A0m(c);c.ek=g;c.bD=0;c.cK=0;c.De=null;c.B8=0;c.he=0;c.Cy=Tm(0.0);c.bV=null;c.zQ=A0j();c.yx=A0H();c.gK=1;c.kn=B(3);c.f6=Long_fromInt(-1);c.bj=0;c.b2=0;c.cv=0;c.c8=B1();AJA(new R5,c,B(4));c.b5=h;c.bw=i;A2c=c;A2c.jT=A1g(B(5),B(6));A2c.jT.CC=B(7);A2d=AZ6(A2c,B(8));P6(A2d);return;default:Eq();}}CL().s(b,c,d,e,f,g,h,i,j,k,$p);}
function AE5(){A2b=null;A2c=null;A2d=null;}
function KL(){}
function E2(){var a=this;E.call(a);a.sk=null;a.fj=null;a.k1=null;}
var A2f=0;function J6(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new E2;c.fj=b;d=c;b.classObject=d;}return c;}
function AUI(a){return a.fj;}
function QR(a,b){var c;b=b;c=a.fj;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&R4(b.constructor,c)?1:0;}
function Nn(a,b){return R4(b.fj,a.fj);}
function Hf(a){if(a.sk===null)a.sk=$rt_str(a.fj.$meta.name);return a.sk;}
function E9(a){return a.fj.$meta.primitive?1:0;}
function AB9(a){return AMb(a.fj)===null?0:1;}
function IZ(a){return J6(AMb(a.fj));}
function AWD(){HD.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];HR.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[CN,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];In.$meta.methods
=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[CN,$rt_floatcls()],returnType
:$rt_voidcls(),callable:null},{name:"setCreeperFlashTime",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_floatcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];IN.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:CN,callable:null},{name:"attackEntity",modifiers
:0,accessLevel:2,parameterTypes:[CN,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];I6.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL],returnType
:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CN,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getHurtSound",modifiers:0,accessLevel
:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null}];He.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers
:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[HW],returnType:$rt_booleancls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];HN.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null}];P1.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers
:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:B6,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:B6,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),B6],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cp,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable
:null},{name:"writeToNBT",modifiers:4,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null}];SR.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes
:[$rt_intcls()],returnType:B6,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:B6,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),B6],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cp,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers
:4,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getCookProgressScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getBurnTimeRemainingScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"isBurning",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"canSmelt",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"smeltItem",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSmeltingResult",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getItemBurnTime",modifiers:0,accessLevel
:1,parameterTypes:[B6],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Lj.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"anyPlayerInRange",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name
:"updateDelay",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null}];Dp.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable
:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:CN,callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CN,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[CN,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes
:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null}];D_.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"getTexture",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cp,callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"getEyeHeight",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_floatcls(),callable:null},{name:"onEntityUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"spawnExplosionParticle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updateRidden",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"setSize",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable
:null},{name:"heal",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CN,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable
:null},{name:"knockBack",modifiers:0,accessLevel:3,parameterTypes:[CN,$rt_intcls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"onDeath",modifiers:0,accessLevel:3,parameterTypes:[CN],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"fall",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"moveEntityWithHeading",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"isOnLadder",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"isEntityAlive",modifiers:0,accessLevel:3,parameterTypes:[],returnType:
$rt_booleancls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"jump",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onEntityDeath",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes
:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null},{name:"kill",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Jr.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null}];Hh.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL,$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"setDirection",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"getArtSize",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_voidcls(),callable:null},{name:"onValidSurface",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CN,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers
:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null}];HV.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL,D_],returnType:$rt_voidcls(),callable:null},{name:"setArrowHeading",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers:0,accessLevel:3,parameterTypes:[HW],returnType:$rt_voidcls(),callable:null}];Ep.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL,$rt_doublecls(),$rt_doublecls(),
$rt_doublecls(),B6],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"handleWaterMovement",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"pushOutOfBlocks",modifiers:0,accessLevel:1,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable
:null},{name:"dealFireDamage",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CN,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers
:0,accessLevel:3,parameterTypes:[HW],returnType:$rt_voidcls(),callable:null}];Kt.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL,$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_voidcls(),callable:null},{name:"createExplosion",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null}];Ia.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[FL,$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes
:[AKg],returnType:$rt_voidcls(),callable:null},{name:"getWorld",modifiers:0,accessLevel:3,parameterTypes:[],returnType:FL,callable:null}];Fn.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL],returnType:$rt_voidcls(),callable:null},{name:"getCollisionBox",modifiers:0,accessLevel:3,parameterTypes:[CN],returnType:HF,callable:null},{name:"getBoundingBox",modifiers:0,accessLevel:3,parameterTypes:[],returnType:HF,callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_booleancls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FL,$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"getYOffset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_doublecls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CN,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable
:null},{name:"setEntityDead",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getPosOffset",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:IK,callable:null},{name:"getPos",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:IK,callable:null},{name:
"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[AKg],returnType:$rt_voidcls(),callable:null},{name:"applyEntityCollision",modifiers:0,accessLevel:3,parameterTypes:[CN],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType
:B6,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:B6,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),B6],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cp,callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[HW],returnType:$rt_booleancls(),callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];}
function AMx(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!E9(a)&&!AB9(a)){if(a.k1===null){if(!A2f){A2f=1;AWD();}b=a.fj.$meta.methods;a.k1=N(IT,b.length);c=0;d=0;while(d<b.length){e=b[d];if(DT($rt_str(e.name),B(9))){f=e.parameterTypes;g=N(E2,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=J6(f[i]);i=i+1|0;}h=a.k1.data;j=c+1|0;k=new IT;l=$rt_str(e.name);m=e.modifiers;i=e.accessLevel;f=H4(e.callable,"call");k.w$=a;k.DO=l;k.s2=m;k.z0=i;k.lU=g;k.tu=f;h[c]=k;c=j;}d=d+1|0;}a.k1=AHb(a.k1,c);}return a.k1.nq();}return N(IT,0);}
function Sy(a,b){var c,d,e,f,g,h,i,j,k,l;c=AMx(a).data;d=c.length;e=0;while(true){if(e>=d){f=new Q8;R(f);M(f);}g=c[e];if(!(ZA(g)&1)?0:1){a:{h=WV(g);if(h===b)i=1;else{if(h!==null&&b!==null){j=h.data;h=b.data;k=j.length;if(k==h.length){i=0;while(i<k){f=j[i];l=h[i];if(!(f===l?1:f!==null?N$(f,l):l!==null?0:1)){i=0;break a;}i=i+1|0;}i=1;break a;}}i=0;}}if(i)break;}e=e+1|0;}return g;}
function H8(a){return J6(a.fj.$meta.superclass);}
function Vc(a){var b;b=a.fj;if(!A2g){APF();A2g=1;}b=ATx(b);if(b!==null)return b;b=new J7;R(b);M(b);}
function AEW(){E.call(this);}
function A2h(){var a=new AEW();AWL(a);return a;}
function AWL(a){return;}
function Cj(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function H4(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function Qw(){E.call(this);}
var A2g=0;function A2i(){var a=new Qw();AZH(a);return a;}
function AZH(a){return;}
function AM3(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function R4(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(R4(d[e],c))return 1;e=e+1|0;}return 0;}
function APF(){var c='$$constructor$$';Cp[c]=TX;E[c]=SE;AGV[c]=ASN;Hz[c]=AOI;Ey[c]=AOd;EE[c]=R;AJj[c]=APy;Hq[c]=AP$;AGn[c]=AUl;B5[c]=ANf;Bz[c]=ARx;Bd[c]=AZx;GB[c]=Bb;H0[c]=ALd;WS[c]=ATY;AEW[c]=AWL;Qw[c]=AZH;Fs[c]=ACI;Bn[c]=RY;S1[c]=ATr;S7[c]=ARc;S8[c]=APO;S5[c]=AVg;S6[c]=AZU;S3[c]=AUK;S4[c]=APZ;S2[c]=AT1;NK[c]=ATi;NJ[c]=AUH;Z1[c]=ATT;B3[c]=AUA;MN[c]=AV_;R9[c]=ARe;AAv[c]=AO6;Vq[c]=AT3;KA[c]=I5;Wu[c]=AZo;AFp[c]=ASW;AKI[c]=ASA;XK[c]=AOG;Ly[c]=Zw;Q9[c]=AKS;YW[c]=AYU;De[c]=AT9;Kb[c]=ARu;AD$[c]=AO7;UI[c]=AR4;Cq[c]
=ANN;AD6[c]=AV1;EG[c]=AOc;Lm[c]=ADi;AAn[c]=AM$;S9[c]=AUj;Px[c]=Vx;QG[c]=AT7;KN[c]=Mp;WJ[c]=AQ6;HN[c]=ARL;DE[c]=AH3;ACN[c]=AS9;BY[c]=AKK;Nl[c]=AX8;L2[c]=ARG;J9[c]=ANg;LN[c]=AW6;ABv[c]=ARX;Pg[c]=AWp;L_[c]=ASs;BV[c]=AN4;ES[c]=APK;M8[c]=AWu;AG2[c]=ANp;Fj[c]=ACM;Gl[c]=AZF;AIT[c]=ATR;Tn[c]=AXY;IL[c]=AWU;DJ[c]=AYC;VE[c]=ATH;SV[c]=ASH;FZ[c]=AOv;Eh[c]=AXj;AMj[c]=AP_;Ms[c]=U1;AH4[c]=AXU;CI[c]=DH;Fm[c]=K5;Ii[c]=AVJ;Bo[c]=AJv;X$[c]=ANW;DW[c]=AVe;Rd[c]=AYM;F5[c]=ARC;Ny[c]=AY6;AFI[c]=AUU;XS[c]=AUf;ACi[c]=AUQ;OJ[c]=ASj;AEw[c]
=AO_;NB[c]=AIh;Wg[c]=AMW;ADA[c]=AVD;HS[c]=AQu;E5[c]=AWw;F8[c]=AVT;Fx[c]=ASX;Kq[c]=AYH;WA[c]=APa;AA9[c]=AX_;P1[c]=ATg;SR[c]=AOu;Je[c]=ATt;MC[c]=AF2;OD[c]=AWx;Sz[c]=AAL;JJ[c]=ACz;GJ[c]=YD;GL[c]=ABH;Iq[c]=AXf;Ml[c]=AC_;K6[c]=AMa;Kh[c]=AOX;Gi[c]=V0;NL[c]=AZy;SF[c]=AOB;SD[c]=AVN;Gd[c]=AK3;K7[c]=AFa;Pa[c]=AMS;Pc[c]=AYK;Pb[c]=AYN;Pd[c]=AUs;WD[c]=ANn;Lj[c]=AXx;AL$[c]=APR;AKH[c]=AUR;Nb[c]=AQs;Yd[c]=AYI;ALu[c]=AOs;XF[c]=ARy;ADj[c]=APj;GF[c]=AXy;Qn[c]=ARm;V7[c]=ARs;OC[c]=AMY;AJm[c]=AWT;AK7[c]=APX;ALL[c]=AYT;Sb[c]=ANQ;Xa[c]
=ANY;AC7[c]=AOf;ADv[c]=AVi;AAe[c]=AUG;Q8[c]=AWv;Fp[c]=AYR;Ro[c]=AJx;AK1[c]=AUL;AKg[c]=AXX;Nk[c]=AZp;PD[c]=AQT;J7[c]=AWN;P0[c]=AY_;N2[c]=AGj;Lx[c]=YF;AGe[c]=AWZ;VU[c]=AXL;LG[c]=AOS;AL4[c]=AP5;TO[c]=AYY;TH[c]=ATk;ZB[c]=ASe;AL3[c]=AWB;AAs[c]=AOr;Ky[c]=AUO;KR[c]=AVX;Jw[c]=AS0;LS[c]=ARM;MO[c]=ARJ;Ks[c]=ARt;KF[c]=AZR;Mh[c]=AXF;NY[c]=ACd;I8[c]=ANK;PU[c]=VZ;AEP[c]=ANE;K_[c]=AMu;ABc[c]=AR0;LD[c]=WY;MX[c]=AZP;Ok[c]=AWE;SO[c]=AQk;ALx[c]=ASp;ADl[c]=APB;UR[c]=ARV;}
function ATx(b){if($rt_resuming()){var $r = $rt_nativeThread().pop();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}if(!b.hasOwnProperty('$$constructor$$')){return null;}var $r=new b();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}
function ARz(b){return setTimeout(function(){$rt_threadStarter(AUF)(b);},0);}
function AUF(b){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.jn();if(C()){break _;}return;default:Eq();}}CL().s(b,$p);}
function N5(b){AAV(b,0);}
function AAV(b,c){return setTimeout(function(){AUF(b);},c);}
function AKp(b){return String.fromCharCode(b);}
function AMb(b){return b.$meta.item;}
function APU(){return [];}
function Dc(){}
function Dm(){}
function Ji(){}
function Cp(){var a=this;E.call(a);a.bq=null;a.oJ=0;}
var A2j=null;function A2k(){var a=new Cp();TX(a);return a;}
function ATX(a){var b=new Cp();ADC(b,a);return b;}
function Vt(a,b,c){var d=new Cp();AMJ(d,a,b,c);return d;}
function AT2(a,b){var c=new Cp();Uk(c,a,b);return c;}
function AY7(a,b,c){var d=new Cp();Ts(d,a,b,c);return d;}
function TX(a){a.bq=$rt_createCharArray(0);}
function ADC(a,b){var c,d;b=b.data;c=b.length;a.bq=$rt_createCharArray(c);d=0;while(d<c){a.bq.data[d]=b[d];d=d+1|0;}}
function AMJ(a,b,c,d){var e,f;a.bq=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bq.data[e]=f[e+c|0];e=e+1|0;}}
function Uk(a,b,c){c=AIw(c,AHe(b,0,b.data.length));if(AEs(c)&&!c.be&&c.cb==c.li)a.bq=AJO(c);else{a.bq=$rt_createCharArray(Ci(c));Z$(c,a.bq);}}
function Ts(a,b,c,d){var e,f,g,h,i,j;a.bq=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bq.data;j=e+1|0;g[e]=i&65535;}else{g=a.bq.data;c=e+1|0;g[e]=IV(i);g=a.bq.data;j=c+1|0;g[c]=Ih(i);}f=f+1|0;c=h;e=j;}if(e<a.bq.data.length)a.bq=ME(a.bq,e);}
function Cr(a,b){var c;if(b>=0&&b<a.bq.data.length)return a.bq.data[b];c=new L_;R(c);M(c);}
function BE(a){return a.bq.data.length;}
function IR(a){return a.bq.data.length?0:1;}
function ALD(a,b){var c,d,e;if(a===b)return 0;c=CR(BE(a),BE(b));d=0;while(true){if(d>=c)return BE(a)-BE(b)|0;e=Cr(a,d)-Cr(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AEt(a,b){var c,d,e;if(a===b)return 0;c=CR(BE(a),BE(b));d=0;while(true){if(d>=c)return BE(a)-BE(b)|0;e=LU(Cr(a,d))-LU(Cr(b,d))|0;if(e)break;d=d+1|0;}return e;}
function AJD(a,b,c){var d,e,f;if((c+BE(b)|0)>BE(a))return 0;d=0;while(d<BE(b)){e=Cr(b,d);f=c+1|0;if(e!=Cr(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Lh(a,b){if(a===b)return 1;return AJD(a,b,0);}
function R1(a,b,c){var d,e,f,g;d=DU(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bq.data.length)return (-1);if(a.bq.data[d]==e)break;d=d+1|0;}return d;}f=IV(b);g=Ih(b);while(true){if(d>=(a.bq.data.length-1|0))return (-1);if(a.bq.data[d]==f&&a.bq.data[d+1|0]==g)break;d=d+1|0;}return d;}
function QU(a,b){return R1(a,b,0);}
function AD4(a,b,c){var d,e,f,g,h;d=CR(c,BE(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bq.data[d]==e)break;d=d+(-1)|0;}return d;}f=IV(b);g=Ih(b);while(true){if(d<1)return (-1);if(a.bq.data[d]==g){h=a.bq.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function JQ(a,b){return AD4(a,b,BE(a)-1|0);}
function Gr(a,b,c){var d;if(b<=c)return Vt(a.bq,b,c-b|0);d=new BV;R(d);M(d);}
function JR(a,b){return Gr(a,b,BE(a));}
function LK(a,b,c){var d,e,f,g;d=new Bd;Bb(d);e=BE(a)-BE(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=BE(b)){EY(d,c);f=f+(BE(b)-1|0)|0;break a;}if(Cr(a,f+g|0)!=Cr(b,g))break;g=g+1|0;}Gq(d,Cr(a,f));}f=f+1|0;}EY(d,JR(a,f));return O(d);}
function ANT(a){return a;}
function AHv(a){var b,c,d,e;b=$rt_createCharArray(a.bq.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bq.data[d];d=d+1|0;}return b;}
function QK(b){return b===null?B(10):b.q3();}
function DT(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Cp))return 0;c=b;if(BE(c)!=BE(a))return 0;d=0;while(d<BE(c)){if(Cr(a,d)!=Cr(c,d))return 0;d=d+1|0;}return 1;}
function AXD(a){var b,c,d,e;a:{if(!a.oJ){b=a.bq.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.oJ=(31*a.oJ|0)+e|0;d=d+1|0;}}}return a.oJ;}
function AE_(a){var b,c,d,e,f,g,h;if(IR(a))return a;b=$rt_createIntArray(a.bq.data.length);c=b.data;d=0;e=0;while(e<a.bq.data.length){a:{if(e!=(a.bq.data.length-1|0)&&Iz(a.bq.data[e])){f=a.bq.data;g=e+1|0;if(I3(f[g])){h=d+1|0;c[d]=N9(Kv(a.bq.data[e],a.bq.data[g]));e=g;break a;}}h=d+1|0;c[d]=LU(a.bq.data[e]);}e=e+1|0;d=h;}return AY7(b,0,d);}
function AIN(a){var b,c,d,e,f,g,h;if(IR(a))return a;b=$rt_createIntArray(a.bq.data.length);c=b.data;d=0;e=0;while(e<a.bq.data.length){a:{if(e!=(a.bq.data.length-1|0)&&Iz(a.bq.data[e])){f=a.bq.data;g=e+1|0;if(I3(f[g])){h=d+1|0;c[d]=N0(Kv(a.bq.data[e],a.bq.data[g]));e=g;break a;}}h=d+1|0;c[d]=N0(a.bq.data[e])&65535;}e=e+1|0;d=h;}return AY7(b,0,d);}
function AO0(a,b){return ALD(a,b);}
function ABy(){A2j=new R9;}
function EE(){var a=this;E.call(a);a.tj=null;a.iD=null;a.pD=0;a.p5=0;a.o7=null;}
function A2l(){var a=new EE();R(a);return a;}
function A2m(a){var b=new EE();Bp(b,a);return b;}
function A2n(a){var b=new EE();SP(b,a);return b;}
function R(a){a.pD=1;a.p5=1;}
function Bp(a,b){a.pD=1;a.p5=1;a.tj=b;}
function SP(a,b){a.pD=1;a.p5=1;a.iD=b;}
function AVK(a){return a;}
function AR1(a){return a.tj;}
function APi(a){return a.mi();}
function BZ(a){PP(a,CO());}
function PP(a,b){var c,d,e,f,g;IQ(b,Hf(C4(a)));c=a.mi();if(c!==null){d=new Bd;Bb(d);IQ(b,O(H(H(d,B(11)),c)));}a:{AJ6(b);if(a.o7!==null){e=a.o7.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];IQ(b,B(12));XR(b,d);g=g+1|0;}}}if(a.iD!==null&&a.iD!==a){IQ(b,B(13));PP(a.iD,b);}}
function Me(a,b){var c,d,e,f,g;Gf(b,Hf(C4(a)));c=a.mi();if(c!==null){d=new Bd;Bb(d);Gf(b,O(H(H(d,B(11)),c)));}a:{PH(b);if(a.o7!==null){e=a.o7.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Gf(b,B(14));Wf(b,d);g=g+1|0;}}}if(a.iD!==null&&a.iD!==a){Gf(b,B(13));Me(a.iD,b);}}
function Ey(){EE.call(this);}
function A2o(){var a=new Ey();AOd(a);return a;}
function AOd(a){R(a);}
function Hz(){Ey.call(this);}
function A2p(){var a=new Hz();AOI(a);return a;}
function AOI(a){R(a);}
function AGV(){Hz.call(this);}
function A2q(){var a=new AGV();ASN(a);return a;}
function ASN(a){R(a);}
function GB(){var a=this;E.call(a);a.M=null;a.dm=0;}
function A2r(){var a=new GB();Bb(a);return a;}
function A2s(a){var b=new GB();Mv(b,a);return b;}
function Bb(a){Mv(a,16);}
function Mv(a,b){a.M=$rt_createCharArray(b);}
function ADO(a,b,c){return AG$(a,a.dm,b,c);}
function AG$(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)CK(a,b,b+1|0);else{CK(a,b,b+2|0);f=a.M.data;g=b+1|0;f[b]=45;b=g;}a.M.data[b]=Hy(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bg(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;CK(a,b,b+i|0);if(e)e=b;else{f=a.M.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.M.data;b=e+1|0;f[e]=Hy(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function YH(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)CK(a,b,b+1|0);else{CK(a,b,b+2|0);g=a.M.data;h=b+1|0;g[b]=45;b=h;}a.M.data[b]=Hy(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;CK(a,b,b+i|0);if(e)i=b;else{g=a.M.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.M.data;b=i+1|0;g[i]=Hy(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function AIV(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=S(c,0.0);if(!d){CK(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=48;e=a.M.data;b=d+1|0;e[d]=46;a.M.data[b]=48;return a;}if(!d){CK(a,b,b+4|0);e=a.M.data;d=b+1|0;e[b]=45;e=a.M.data;b=d+1|0;e[d]=48;e=a.M.data;d=b+1|0;e[b]=46;a.M.data[d]=48;return a;}if(isNaN(c)?1:0){CK(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=78;e=a.M.data;b=d+1|0;e[d]=97;a.M.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){CK(a,b,b+8|0);d=b;}else{CK(a,b,b+9|0);e=a.M.data;d=b+1|0;e[b]=45;}e=a.M.data;b=d+1|0;e[d]
=73;e=a.M.data;d=b+1|0;e[b]=110;e=a.M.data;b=d+1|0;e[d]=102;e=a.M.data;d=b+1|0;e[b]=105;e=a.M.data;b=d+1|0;e[d]=110;e=a.M.data;d=b+1|0;e[b]=105;e=a.M.data;b=d+1|0;e[d]=116;a.M.data[b]=121;return a;}f=A2t;AIJ(c,f);d=f.st;g=f.sf;h=f.wB;i=1;j=1;if(h){h=1;j=2;}k=9;l=ASn(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=DU(k,i+1|0);g=0;}else if(g<0){d=d/A2u.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;CK(a,b,b+(j+k|0)|0);if(!h)h=b;else{e=a.M.data;h=b+
1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.M.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.M.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.M.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.M.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.M.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.M.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AFk(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=S(c,0.0);if(!d){CK(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=48;e=a.M.data;b=d+1|0;e[d]=46;a.M.data[b]=48;return a;}if(!d){CK(a,b,b+4|0);e=a.M.data;d=b+1|0;e[b]=45;e=a.M.data;b=d+1|0;e[d]=48;e=a.M.data;d=b+1|0;e[b]=46;a.M.data[d]=48;return a;}if(isNaN(c)?1:0){CK(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=78;e=a.M.data;b=d+1|0;e[d]=97;a.M.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){CK(a,b,b+8|0);d=b;}else{CK(a,b,b+9|0);e=a.M.data;d=b+1|0;e[b]=45;}e=a.M.data;b=d+1|0;e[d]
=73;e=a.M.data;d=b+1|0;e[b]=110;e=a.M.data;b=d+1|0;e[d]=102;e=a.M.data;d=b+1|0;e[b]=105;e=a.M.data;b=d+1|0;e[d]=110;e=a.M.data;d=b+1|0;e[b]=105;e=a.M.data;b=d+1|0;e[d]=116;a.M.data[b]=121;return a;}f=A2v;Xt(c,f);g=f.sR;h=f.r7;i=f.wt;j=1;k=1;if(i)k=2;l=18;d=ARq(g);if(d>0)l=l-d|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=DU(l,j+1|0);h=0;}else if(h<0){g=Long_div(g,A2w.data[ -h]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;CK(a,b,b+(k+l|0)|0);if
(!i)i=b;else{e=a.M.data;i=b+1|0;e[b]=45;}m=new Long(1569325056, 23283064);n=0;while(n<l){if(Long_le(m,Long_ZERO))o=0;else{o=Long_div(g,m).lo;g=Long_rem(g,m);}e=a.M.data;b=i+1|0;e[i]=(48+o|0)&65535;j=j+(-1)|0;if(j)i=b;else{e=a.M.data;i=b+1|0;e[b]=46;}m=Long_div(m,Long_fromInt(10));n=n+1|0;}if(h){e=a.M.data;b=i+1|0;e[i]=69;if(h>=0)d=b;else{h= -h;e=a.M.data;d=b+1|0;e[b]=45;}if(h>=100){e=a.M.data;b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;e=a.M.data;j=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)j=d;else{e
=a.M.data;j=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}a.M.data[j]=(48+(h%10|0)|0)&65535;}return a;}
function ASn(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ARq(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;f=A2x.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,A2x.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,A2x.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function KS(a,b){var c;if(a.M.data.length>=b)return;c=a.M.data.length>=1073741823?2147483647:DU(b,DU(a.M.data.length*2|0,5));a.M=ME(a.M,c);}
function CK(a,b,c){var d,e;d=a.dm-b|0;a.oA((a.dm+c|0)-b|0);e=d-1|0;while(e>=0){a.M.data[c+e|0]=a.M.data[b+e|0];e=e+(-1)|0;}a.dm=a.dm+(c-b|0)|0;}
function Hb(){}
function Bd(){GB.call(this);}
function BS(){var a=new Bd();AZx(a);return a;}
function AZx(a){Bb(a);}
function H(a,b){Lk(a,a.dm,b);return a;}
function Be(a,b){ADO(a,b,10);return a;}
function CP(a,b){QY(a,a.dm,b);return a;}
function APq(a,b){SG(a,a.dm,b);return a;}
function AFe(a,b){ND(a,a.dm,b);return a;}
function Gq(a,b){Ot(a,a.dm,b);return a;}
function EY(a,b){Tg(a,a.dm,b);return a;}
function QY(a,b,c){YH(a,b,c,10);return a;}
function SG(a,b,c){AIV(a,b,c);return a;}
function ND(a,b,c){AFk(a,b,c);return a;}
function Tg(a,b,c){Lk(a,b,c===null?B(10):c.q3());return a;}
function Ot(a,b,c){CK(a,b,b+1|0);a.M.data[b]=c;return a;}
function Lk(a,b,c){var d,e,f;if(b>=0&&b<=a.dm){a:{if(c===null)c=B(10);else if(IR(c))break a;KS(a,a.dm+BE(c)|0);d=a.dm-1|0;while(d>=b){a.M.data[d+BE(c)|0]=a.M.data[d];d=d+(-1)|0;}a.dm=a.dm+BE(c)|0;d=0;while(d<BE(c)){e=a.M.data;f=b+1|0;e[b]=Cr(c,d);d=d+1|0;b=f;}}return a;}c=new L_;R(c);M(c);}
function AHO(a,b){a.dm=b;}
function Wc(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BV;Bp(f,B(15));M(f);}while(b<c){g=d.data;h=e+1|0;i=a.M.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function IB(a){return a.dm;}
function O(a){return Vt(a.M,0,a.dm);}
function AQa(a,b){KS(a,b);}
function AXb(a,b,c){return Tg(a,b,c);}
function AWY(a,b,c){return Ot(a,b,c);}
function ASb(a,b,c){return ND(a,b,c);}
function AV4(a,b,c){return SG(a,b,c);}
function AOb(a,b,c){return QY(a,b,c);}
function ATJ(a,b,c){return Lk(a,b,c);}
function Es(){E.call(this);}
function G8(){Es.call(this);this.f2=0;}
var A2y=null;var A2z=null;function AYW(a){var b=new G8();V1(b,a);return b;}
function V1(a,b){a.f2=b;}
function CG(b){var c;if(b>=(-128)&&b<=127){a:{if(A2z===null){A2z=N(G8,256);c=0;while(true){if(c>=A2z.data.length)break a;A2z.data[c]=AYW(c-128|0);c=c+1|0;}}}return A2z.data[b+128|0];}return AYW(b);}
function AUz(a){return a.f2;}
function AT4(a){return a.f2>>>4^a.f2<<28^a.f2<<8^a.f2>>>24;}
function AZE(a,b){if(a===b)return 1;return b instanceof G8&&b.f2==a.f2?1:0;}
function Wd(a,b){return S(a.f2,b.f2);}
function Q1(b,c){var d;d=c&31;return b<<d|b>>>(32-d|0);}
function AWF(a,b){return Wd(a,b);}
function AKJ(){A2y=K($rt_intcls());}
function Hq(){Hz.call(this);}
function A2A(){var a=new Hq();AP$(a);return a;}
function A2B(a){var b=new Hq();Ns(b,a);return b;}
function AP$(a){R(a);}
function Ns(a,b){Bp(a,b);}
function AJj(){Hq.call(this);}
function A2C(){var a=new AJj();APy(a);return a;}
function A2D(a){var b=new AJj();AN0(b,a);return b;}
function APy(a){R(a);}
function AN0(a,b){Ns(a,b);}
function AGn(){Hq.call(this);}
function A2E(){var a=new AGn();AUl(a);return a;}
function A2F(a){var b=new AGn();AOe(b,a);return b;}
function AUl(a){R(a);}
function AOe(a,b){Ns(a,b);}
function Bz(){EE.call(this);}
function A2G(){var a=new Bz();ARx(a);return a;}
function ARx(a){R(a);}
function B5(){Bz.call(this);}
function A2H(){var a=new B5();ANf(a);return a;}
function VJ(a){var b=new B5();AZg(b,a);return b;}
function ANf(a){R(a);}
function AZg(a,b){Bp(a,b);}
function CV(){}
function Ga(){}
function QL(){}
function NE(){}
function Rn(){}
function On(){}
function Sl(){}
function MW(){}
function Jy(){}
function Ux(){E.call(this);}
function AQq(a,b,c){a.Rg($rt_str(b),H4(c,"handleEvent"));}
function AQx(a,b,c){a.OX($rt_str(b),H4(c,"handleEvent"));}
function ANt(a,b){return a.Dx(b);}
function AQ_(a,b,c,d){a.Gc($rt_str(b),H4(c,"handleEvent"),d?1:0);}
function ASV(a,b){return !!a.Rm(b);}
function AN$(a){return a.ER();}
function AM0(a,b,c,d){a.IP($rt_str(b),H4(c,"handleEvent"),d?1:0);}
function Bn(){E.call(this);}
var A2I=0;var A2J=null;var A2K=null;var A2L=null;var A2M=null;var A2N=null;var A2O=null;var A2P=null;var A2Q=null;var A2R=null;var A2S=null;var A2T=null;var A2U=null;var A2V=null;var A2W=null;var A2X=null;var A2Y=null;var A2Z=null;var A20=null;var A21=null;var A22=0;var A23=0;var A24=0.0;var A25=0.0;var A26=0;var A27=0;var A28=0;var A29=0;var A2$=0;var A2_=null;var A3a=null;var A3b=null;var A3c=null;var A3d=null;var A3e=0;var A3f=null;var A3g=null;var A3h=null;var A3i=null;var A3j=null;var A3k=null;var A3l=
Long_ZERO;var A3m=0;var A3n=0;var A3o=0;var A3p=null;var A3q=null;var A3r=null;var A3s=0;var A3t=0;var A3u=0;var A3v=null;var A3w=null;var A3x=null;var A3y=0;var A3z=null;var A3A=null;var A3B=0.0;var A3C=null;var A3D=0;var A3E=null;var A3F=null;var A3G=0;var A3H=null;var A3I=0;function Y(){Y=Bt(Bn);ANv();}
function A3J(){var a=new Bn();RY(a);return a;}
function RY(a){Y();}
function M1(){Y();return B(16);}
function IG(b){Y();if(Lh(b,B(17)))b=JR(b,1);return Cz(A3K,b);}
function XH(b){var c;Y();c=IG(b);if(c===null)return null;return AT2(c,TW(B(18)));}
function AF6(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Ct=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EF=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0v(callback);return thread.suspend(function(){try{AUg(b,callback);}catch($e){callback.EF($rt_exception($e));}});}
function AUg(b,c){var d,e;Y();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new S0;b.ta=d;b.xp=c;b=Cj(b,"stateChanged");d.onreadystatechange=b;d.send();}
function V5(b,c){var d,e,f,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();A2K=b;d=$rt_str(A2K.getAttribute("style"));e=A2K;f=new Bd;Bb(f);if(d===null)d=B(3);f=O(H(H(f,d),B(19)));e.setAttribute("style",$rt_ustr(f));A2P=window;A2J=A2P.document;A2L=A2J.createElement("canvas");A26=b.clientWidth;A27=b.clientHeight;f=A2L;e=A26;f.width=e;f=A2L;e=A27;f.height=e;A2M=A2L.getContext("2d");A2L.setAttribute("id","deevis589723589");f=A2L;b.appendChild(f);A2N
=A2J.createElement("canvas");b=A2N;f=A26;b.width=f;b=A2N;f=A27;b.height=f;b=A2N;e=Z7();A2O=b.getContext("webgl2",e);if(A2O===null){b=new B5;c=new Bd;Bb(c);Bp(b,O(H(H(H(c,B(20)),$rt_str(window.navigator.userAgent)),B(21))));M(b);}TY(A2O);A2O.getExtension("EXT_texture_filter_anisotropic");b=A2P;e=new S1;A2R=e;b.addEventListener("contextmenu",Cj(e,"handleEvent"));b=A2L;e=new S7;A2S=e;b.addEventListener("mousedown",Cj(e,"handleEvent"));b=A2L;e=new S8;A2T=e;b.addEventListener("mouseup",Cj(e,"handleEvent"));b=A2L;e
=new S5;A2U=e;b.addEventListener("mousemove",Cj(e,"handleEvent"));b=A2P;e=new S6;A2V=e;b.addEventListener("keydown",Cj(e,"handleEvent"));b=A2P;e=new S3;A2W=e;b.addEventListener("keyup",Cj(e,"handleEvent"));b=A2P;e=new S4;A2X=e;b.addEventListener("keypress",Cj(e,"handleEvent"));b=A2L;e=new S2;A2Y=e;b.addEventListener("wheel",Cj(e,"handleEvent"));b=A2P;e=new NK;b.addEventListener("blur",Cj(e,"handleEvent"));b=A2P;e=new NJ;b.addEventListener("focus",Cj(e,"handleEvent"));AIq();$p=1;case 1:AEE();if(C()){break _;}$p
=2;case 2:AF6(c);if(C()){break _;}a:{try{AGS(A2Q);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B3){f=$$je;}else{throw $$e;}}BZ(f);}A3A=AQE();Ma(A20);Ma(A21);return;default:Eq();}}CL().s(b,c,d,e,f,$p);}
function Jl(b){Y();A2O.enable(b);}
function It(b){Y();A2O.disable(b);}
function AC3(){var b,c;Y();b=new R8;b.hX=A2O.createProgram();c=A2$+1|0;A2$=c;b.uX=c;return b;}
function Mg(b){var c;Y();c=new R_;c.iq=A2O.createShader(b);return c;}
function Pe(b,c){var d;Y();d=A2O;b=b.hX;c=c.iq;d.attachShader(b,c);}
function QZ(b,c){var d;Y();d=A2O;b=b.hX;c=c.iq;d.detachShader(b,c);}
function SA(b){var c;Y();c=A2O;b=b.iq;c.compileShader(b);}
function Wh(b){var c;Y();c=A2O;b=b.hX;c.linkProgram(b);}
function My(b,c){var d;Y();d=A2O;b=b.iq;d.shaderSource(b,$rt_ustr(c));}
function Qz(b){var c;Y();c=A2O;b=b.iq;return $rt_str(c.getShaderInfoLog(b));}
function ACC(b){var c;Y();c=A2O;b=b.hX;return $rt_str(c.getProgramInfoLog(b));}
function Rq(b){var c;Y();c=A2O;b=b.iq;return c.getShaderParameter(b,35713)!=1?0:1;}
function ABA(b){var c;Y();c=A2O;b=b.hX;return c.getProgramParameter(b,35714)!=1?0:1;}
function P2(b){var c;Y();c=A2O;b=b.iq;c.deleteShader(b);}
function Ke(){var b;Y();b=new Sf;b.At=A2O.createBuffer();return b;}
function F_(b,c){var d;Y();d=A2O;c=c!==null?c.At:null;d.bindBuffer(b,c);}
function M0(b,c,d){var e;Y();e=A2O;c=c;e.bufferData(b,c,d);}
function LM(b){Y();A2O.enableVertexAttribArray(b);}
function C7(b,c){var d;Y();d=A2O;b=b.hX;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new Ta;b.ju=d;}return b;}
function J4(b,c,d){var e;Y();e=A2O;b=b.hX;e.bindAttribLocation(b,c,$rt_ustr(d));}
function GY(b,c){var d;Y();if(b!==null){d=A2O;b=b.ju;d.uniform1f(b,c);}}
function JB(b,c,d,e){var f;Y();if(b!==null){f=A2O;b=b.ju;f.uniform3f(b,c,d,e);}}
function QF(b,c,d,e,f){var g,h;Y();if(b!==null){g=A2O;h=b.ju;g.uniform4f(h,c,d,e,f);}}
function Oe(b,c){var d;Y();if(b!==null){d=A2O;b=b.ju;d.uniform1i(b,c);}}
function Km(b,c){var d,e;Y();A3d.set(c.data);if(b!==null){d=A2O;e=b.ju;b=A3d;d.uniformMatrix4fv(e,!!0,b);}}
function R7(b){var c;Y();if(b!==null&&A3e!=b.uX){A3e=b.uX;c=A2O;b=b.hX;c.useProgram(b);}}
function LO(b,c,d,e,f,g){Y();A2O.vertexAttribPointer(b,c,d,!!e,f,g);}
function MH(){var b;Y();b=new Pw;b.x3=A2O.createVertexArray();b.tx=0;return b;}
function OV(b){var c;Y();c=A2O;b=b!==null?b.x3:null;c.bindVertexArray(b);}
function AAb(b){var c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=ADp(c);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(b,c,$p);}
function ADp(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Ct=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EF=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0v(callback);return thread.suspend(function(){try{APA(b,callback);}catch($e){callback.EF($rt_exception($e));}});}
function APA(b,c){var d,e,f;Y();d=A2J.createElement("img");e=new NN;e.fm=d;e.vB=c;d.addEventListener("load",Cj(e,"handleEvent"));f=new NM;f.AL=d;f.Bk=c;d.addEventListener("error",Cj(f,"handleEvent"));e=$rt_str(AIc(b,"image/png"));if(e===null)Cx(c,null);else{b=$rt_ustr(e);d.src=b;}}
function JD(){var b,c,d;Y();b=A2K.clientWidth;if(b!=A26){c=A2L;d=b;c.width=d;c=A2N;d=b;c.width=d;A26=b;}return b;}
function KB(){var b,c,d;Y();b=A2K.clientHeight;if(b!=A27){c=A2L;d=b;c.height=d;c=A2N;d=b;c.height=d;A27=b;}return b;}
function IX(){Y();return Long_fromInt(1073741824);}
function Io(){Y();return Long_fromInt(1073741824);}
function ID(){Y();return Long_ZERO;}
function QW(b){Y();return b.byteLength;}
function Qv(b){Y();return b<=A3F.data.length&&b>=0?A3F.data[b]:(-1);}
function X8(b,c){var d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();d=JQ(b,47);if(d>0){e=Gr(b,0,d);$p=2;continue _;}f=new Uint8Array(c.data.length);f.set(c.data);e=A3L;d=0;f=f.buffer;$p=1;case 1:AQf(e,b,d,f);if(C()){break _;}return;case 2:AD5(e);if(C()){break _;}f=new Uint8Array(c.data.length);f.set(c.data);e=A3L;d=0;f=f.buffer;$p=1;continue _;default:Eq();}}CL().s(b,c,d,e,f,$p);}
function AGo(b){var c,d,e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();c=A3L;$p=1;case 1:$z=AZS(c,b);if(C()){break _;}b=$z;if(b===null)d=null;else{d=$rt_createByteArray(b.byteLength);e=d.data;b=new Uint8Array(b);f=0;g=e.length;while(f<g){e[f]=b[f]<<24>>24;f=f+1|0;}}return d;default:Eq();}}CL().s(b,c,d,e,f,g,$p);}
function AHT(b,c){var d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();d=A3L;$p=1;case 1:$z=AZS(d,b);if(C()){break _;}d=$z;e=JQ(c,47);if(e<=0){f=A3L;e=0;$p=2;continue _;}f=Gr(c,0,e);$p=4;continue _;case 2:AQf(f,c,e,d);if(C()){break _;}c=A3L;$p=3;case 3:AVC(c,b);if(C()){break _;}return;case 4:AD5(f);if(C()){break _;}f=A3L;e=0;$p=2;continue _;default:Eq();}}CL().s(b,c,d,e,f,$p);}
function AGK(b){var c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();c=A3L;$p=1;case 1:AVC(c,b);if(C()){break _;}return;default:Eq();}}CL().s(b,c,$p);}
function Sa(){Y();return A2Q;}
function OR(){Y();return A3j;}
function KK(){Y();return A20;}
function Ku(){Y();if(Long_gt(Long_sub(B1(),A3l),Long_fromInt(3000))&&A3n&&!(document.pointerLockElement!=null?1:0)){A2L.requestPointerLock();if(document.pointerLockElement!=null?1:0)A3n=0;}}
function Ni(){Y();return A3k;}
function NO(b){Y();return b.which;}
function PW(b){Y();return Qv(b);}
function Lt(){Y();return A21;}
function PM(b){Y();A29=b;return b;}
function Ge(){Y();return A3f;}
function If(){Y();return A3g;}
function SC(b){Y();URL.revokeObjectURL($rt_ustr(b));}
function RV(){Y();return A3m;}
function KQ(b){Y();A3m=b;return b;}
function Nd(){Y();return A3l;}
function ANv(){var b,c;A2I=0;A2J=null;A2K=null;A2L=null;A2M=null;A2N=null;A2O=null;A2P=null;A2Q=null;A2R=null;A2S=null;A2T=null;A2U=null;A2V=null;A2W=null;A2X=null;A2Y=null;A2Z=N(Cp,0);A20=N1();A21=N1();A22=0;A23=0;A24=0.0;A25=0.0;A26=0;A27=0;A28=0;A29=1;A2$=0;A2_=$rt_createIntArray(4);A3a=new Uint8Array(new ArrayBuffer(4194304));A3b=new Float32Array(4);A3c=new Float32Array(9);A3d=new Float32Array(16);A3e=(-1);A3f=null;A3g=null;A3h=null;A3i=null;A3j=$rt_createBooleanArray(8);A3k=$rt_createBooleanArray(256);A3l
=Long_ZERO;A3m=0;A3n=0;A3o=0;A3p=Fg();A3q=Fg();A3r=null;A3s=0;A3t=0;A3u=0;A3v=N1();A3w=null;A3x=null;A3y=0;A3z=CY();A3A=null;A3B=0.029999999329447746;A3C=CY();A3D=0;b=N(Cp,256);c=b.data;c[0]=B(22);c[1]=B(23);c[2]=B(24);c[3]=B(25);c[4]=B(26);c[5]=B(27);c[6]=B(28);c[7]=B(29);c[8]=B(30);c[9]=B(31);c[10]=B(32);c[11]=B(2);c[12]=B(33);c[13]=B(34);c[14]=B(35);c[15]=B(36);c[16]=B(37);c[17]=B(38);c[18]=B(39);c[19]=B(40);c[20]=B(41);c[21]=B(42);c[22]=B(43);c[23]=B(44);c[24]=B(45);c[25]=B(46);c[26]=B(47);c[27]=B(48);c[28]
=B(49);c[29]=B(50);c[30]=B(51);c[31]=B(52);c[32]=B(53);c[33]=B(54);c[34]=B(55);c[35]=B(56);c[36]=B(57);c[37]=B(58);c[38]=B(59);c[39]=B(60);c[40]=B(61);c[41]=B(62);c[42]=B(63);c[43]=B(64);c[44]=B(65);c[45]=B(66);c[46]=B(67);c[47]=B(68);c[48]=B(69);c[49]=B(70);c[50]=B(71);c[51]=B(72);c[52]=B(73);c[53]=B(74);c[54]=B(75);c[55]=B(76);c[56]=B(77);c[57]=B(78);c[58]=B(79);c[59]=B(80);c[60]=B(81);c[61]=B(82);c[62]=B(83);c[63]=B(84);c[64]=B(85);c[65]=B(86);c[66]=B(87);c[67]=B(88);c[68]=B(89);c[69]=B(90);c[70]=B(91);c[71]
=B(92);c[72]=B(93);c[73]=B(94);c[74]=B(95);c[75]=B(96);c[76]=B(97);c[77]=B(98);c[78]=B(99);c[79]=B(100);c[80]=B(101);c[81]=B(102);c[82]=B(103);c[83]=B(104);c[84]=B(10);c[85]=B(10);c[86]=B(10);c[87]=B(105);c[88]=B(106);c[89]=B(10);c[90]=B(10);c[91]=B(10);c[92]=B(10);c[93]=B(10);c[94]=B(10);c[95]=B(10);c[96]=B(10);c[97]=B(10);c[98]=B(10);c[99]=B(10);c[100]=B(107);c[101]=B(108);c[102]=B(109);c[103]=B(110);c[104]=B(111);c[105]=B(112);c[106]=B(10);c[107]=B(10);c[108]=B(10);c[109]=B(10);c[110]=B(10);c[111]=B(10);c[112]
=B(113);c[113]=B(114);c[114]=B(10);c[115]=B(10);c[116]=B(10);c[117]=B(10);c[118]=B(10);c[119]=B(10);c[120]=B(10);c[121]=B(115);c[122]=B(10);c[123]=B(116);c[124]=B(10);c[125]=B(117);c[126]=B(10);c[127]=B(10);c[128]=B(10);c[129]=B(10);c[130]=B(10);c[131]=B(10);c[132]=B(10);c[133]=B(10);c[134]=B(10);c[135]=B(10);c[136]=B(10);c[137]=B(10);c[138]=B(10);c[139]=B(10);c[140]=B(10);c[141]=B(118);c[142]=B(10);c[143]=B(10);c[144]=B(119);c[145]=B(120);c[146]=B(121);c[147]=B(122);c[148]=B(123);c[149]=B(124);c[150]=B(125);c[151]
=B(126);c[152]=B(10);c[153]=B(10);c[154]=B(10);c[155]=B(10);c[156]=B(127);c[157]=B(128);c[158]=B(10);c[159]=B(10);c[160]=B(10);c[161]=B(10);c[162]=B(10);c[163]=B(10);c[164]=B(10);c[165]=B(10);c[166]=B(10);c[167]=B(129);c[168]=B(10);c[169]=B(10);c[170]=B(10);c[171]=B(10);c[172]=B(10);c[173]=B(10);c[174]=B(10);c[175]=B(10);c[176]=B(10);c[177]=B(10);c[178]=B(10);c[179]=B(130);c[180]=B(10);c[181]=B(131);c[182]=B(10);c[183]=B(132);c[184]=B(133);c[185]=B(10);c[186]=B(10);c[187]=B(10);c[188]=B(10);c[189]=B(10);c[190]
=B(10);c[191]=B(10);c[192]=B(10);c[193]=B(10);c[194]=B(10);c[195]=B(10);c[196]=B(134);c[197]=B(135);c[198]=B(10);c[199]=B(136);c[200]=B(137);c[201]=B(138);c[202]=B(10);c[203]=B(139);c[204]=B(10);c[205]=B(140);c[206]=B(10);c[207]=B(141);c[208]=B(142);c[209]=B(143);c[210]=B(144);c[211]=B(145);c[212]=B(10);c[213]=B(10);c[214]=B(10);c[215]=B(10);c[216]=B(10);c[217]=B(10);c[218]=B(146);c[219]=B(147);c[220]=B(148);c[221]=B(149);c[222]=B(150);c[223]=B(151);c[224]=B(10);c[225]=B(10);c[226]=B(10);c[227]=B(10);c[228]
=B(10);c[229]=B(10);c[230]=B(10);c[231]=B(10);c[232]=B(10);c[233]=B(10);c[234]=B(10);c[235]=B(10);c[236]=B(10);c[237]=B(10);c[238]=B(10);c[239]=B(10);c[240]=B(10);c[241]=B(10);c[242]=B(10);c[243]=B(10);c[244]=B(10);c[245]=B(10);c[246]=B(10);c[247]=B(10);c[248]=B(10);c[249]=B(10);c[250]=B(10);c[251]=B(10);c[252]=B(10);c[253]=B(10);c[254]=B(10);c[255]=B(10);A3E=b;b=$rt_createIntArray(224);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]=(-1);c[8]=14;c[9]=15;c[10]=(-1);c[11]=
(-1);c[12]=(-1);c[13]=28;c[14]=(-1);c[15]=(-1);c[16]=42;c[17]=29;c[18]=56;c[19]=(-1);c[20]=(-1);c[21]=(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=1;c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=57;c[33]=210;c[34]=201;c[35]=207;c[36]=199;c[37]=203;c[38]=200;c[39]=205;c[40]=208;c[41]=205;c[42]=208;c[43]=(-1);c[44]=(-1);c[45]=210;c[46]=211;c[47]=211;c[48]=11;c[49]=2;c[50]=3;c[51]=4;c[52]=5;c[53]=6;c[54]=7;c[55]=8;c[56]=9;c[57]=10;c[58]=(-1);c[59]=(-1);c[60]=(-1);c[61]=(-1);c[62]=(-1);c[63]
=(-1);c[64]=(-1);c[65]=30;c[66]=48;c[67]=46;c[68]=32;c[69]=18;c[70]=33;c[71]=34;c[72]=35;c[73]=23;c[74]=36;c[75]=37;c[76]=38;c[77]=50;c[78]=49;c[79]=24;c[80]=25;c[81]=16;c[82]=19;c[83]=31;c[84]=20;c[85]=22;c[86]=47;c[87]=17;c[88]=45;c[89]=21;c[90]=44;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=(-1);c[96]=(-1);c[97]=(-1);c[98]=(-1);c[99]=(-1);c[100]=(-1);c[101]=(-1);c[102]=(-1);c[103]=(-1);c[104]=(-1);c[105]=(-1);c[106]=(-1);c[107]=(-1);c[108]=(-1);c[109]=12;c[110]=52;c[111]=53;c[112]=(-1);c[113]=(-1);c[114]
=(-1);c[115]=(-1);c[116]=(-1);c[117]=(-1);c[118]=(-1);c[119]=(-1);c[120]=(-1);c[121]=(-1);c[122]=(-1);c[123]=(-1);c[124]=(-1);c[125]=(-1);c[126]=(-1);c[127]=(-1);c[128]=(-1);c[129]=(-1);c[130]=(-1);c[131]=(-1);c[132]=(-1);c[133]=(-1);c[134]=(-1);c[135]=(-1);c[136]=(-1);c[137]=(-1);c[138]=(-1);c[139]=(-1);c[140]=(-1);c[141]=(-1);c[142]=(-1);c[143]=(-1);c[144]=(-1);c[145]=(-1);c[146]=(-1);c[147]=(-1);c[148]=(-1);c[149]=(-1);c[150]=(-1);c[151]=(-1);c[152]=(-1);c[153]=(-1);c[154]=(-1);c[155]=(-1);c[156]=(-1);c[157]
=(-1);c[158]=(-1);c[159]=(-1);c[160]=(-1);c[161]=(-1);c[162]=(-1);c[163]=(-1);c[164]=(-1);c[165]=(-1);c[166]=(-1);c[167]=(-1);c[168]=(-1);c[169]=(-1);c[170]=(-1);c[171]=(-1);c[172]=(-1);c[173]=(-1);c[174]=(-1);c[175]=(-1);c[176]=(-1);c[177]=(-1);c[178]=(-1);c[179]=(-1);c[180]=(-1);c[181]=(-1);c[182]=(-1);c[183]=(-1);c[184]=(-1);c[185]=(-1);c[186]=39;c[187]=13;c[188]=51;c[189]=12;c[190]=52;c[191]=53;c[192]=(-1);c[193]=(-1);c[194]=(-1);c[195]=(-1);c[196]=(-1);c[197]=(-1);c[198]=(-1);c[199]=(-1);c[200]=(-1);c[201]
=(-1);c[202]=(-1);c[203]=(-1);c[204]=(-1);c[205]=(-1);c[206]=(-1);c[207]=(-1);c[208]=(-1);c[209]=(-1);c[210]=(-1);c[211]=(-1);c[212]=(-1);c[213]=(-1);c[214]=(-1);c[215]=(-1);c[216]=(-1);c[217]=(-1);c[218]=(-1);c[219]=(-1);c[220]=26;c[221]=43;c[222]=27;c[223]=40;A3F=b;A3G=0;A3H=new Int32Array(new ArrayBuffer(2100000));A3I=0;}
function TY(b){window.currentContext=b;}
function AIq(){if (!AIq.$native){
AIq.$native=function(){return (function(){window.eagsFileChooser = {
inputElement: null,
openFileChooser: function(ext, mime){
var el = window.eagsFileChooser.inputElement = document.createElement("input");
el.type = "file";
el.multiple = false;
el.addEventListener("change", function(evt){
var f = window.eagsFileChooser.inputElement.files;
if(f.length == 0){
window.eagsFileChooser.getFileChooserResult = null;
}else{
(async function(){
window.eagsFileChooser.getFileChooserResult = await f[0].arrayBuffer();
window.eagsFileChooser.getFileChooserResultName = f[0].name;
})();
}
});
window.eagsFileChooser.getFileChooserResult = null;
window.eagsFileChooser.getFileChooserResultName = null;
el.accept = mime;
el.click();
},
getFileChooserResult: null,
getFileChooserResultName: null
};})();};AIq=AIq.$native;}return AIq();}
function Z7(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function AIc(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function AH8(b){if(b.commit)b.commit();}
function PN(){}
function H3(){}
function LC(){}
function Gs(){E.call(this);this.tV=null;}
function WS(){Gs.call(this);this.vq=null;}
function AYa(){var a=new WS();ATY(a);return a;}
function ATY(a){var b;a.tV=a;b=new MN;Mv(b,16);a.vq=b;a.tV=a.vq;}
function AFQ(a){return;}
function ZU(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;ACt(a.vq,b,c,d);return;}}f=new BV;R(f);M(f);}
function Wb(){var a=this;Gs.call(a);a.nk=null;a.B1=0;a.A1=0;}
function AXA(a){var b=new Wb();AYQ(b,a);return b;}
function AYQ(a,b){if(b!==null){a.tV=b;a.A1=0;a.nk=b;return;}b=new EG;R(b);M(b);}
function AAO(a){var $$je;a:{if(a.nk===null)IE(a);else{try{AFQ(a.nk);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B3){}else{throw $$e;}}IE(a);}}}
function Gf(a,b){if(b===null)b=QK(null);Uh(a,b);}
function PH(a){Gf(a,B(152));if(a.A1)AAO(a);}
function Wf(a,b){Xl(a,QK(b));}
function Xl(a,b){Gf(a,b);PH(a);}
function IE(a){a.B1=1;}
function AL9(a,b){V3(a,b,0,b.data.length);}
function V3(a,b,c,d){var $$je;a:{if(a.nk===null)IE(a);else{try{ZU(a.nk,b,c,d);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B3){}else{throw $$e;}}IE(a);}}}
function Uh(a,b){AL9(a,AHv(b));}
function AAv(){E.call(this);}
function A3M(){var a=new AAv();AO6(a);return a;}
function AO6(a){return;}
function AA7(){E.call(this);}
function J8(){}
function IF(){var a=this;E.call(a);a.ce=null;a.b5=0;a.bw=0;a.ba=null;a.w=null;a.dB=null;a.e=null;a.cG=null;a.jT=null;a.bm=0;a.bi=null;a.ey=null;a.A=null;a.ii=null;a.ek=null;a.bD=0;a.cK=0;a.De=null;a.B8=0;a.mA=null;a.he=0;a.Cy=null;a.bV=null;a.r=null;a.vI=null;a.zQ=null;a.yx=null;a.gK=0;a.kn=null;a.f6=Long_ZERO;a.bj=0;a.b2=0;a.cv=0;a.c8=Long_ZERO;}
var A3N=null;var A3O=0;function ADk(a){var b,c,d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.r=AZ$(a);b=new I7;c=a.r;A3P=CY();b.wC=CY();b.jv=Ol(1);b.gq=SK(1048576);b.kI=SK(1048576);b.y4=Ck();b.q4=0;b.As=0;b.um=c;a.bi=b;c=new Sj;d=a.r;b=B(153);e=a.bi;$p=1;case 1:AI$(c,d,b,e);if(C()){break _;}a.ey=c;$p=2;case 2:Ue(a);if(C()){break _;}a.vI=new Ny;DO(a,B(154));V(3553);Y();A2O.clearDepth((-1.0));V(2929);Gy(515);V(3008);Pu(516,
0.10000000149011612);A2O.cullFace(1029);CU(5889);CT();CU(5888);DO(a,B(155));F4(a.bi,a.yx);F4(a.bi,a.zQ);F4(a.bi,A0l());F4(a.bi,A1U());F4(a.bi,AOO(0));F4(a.bi,AOO(1));a.dB=A0E(a,a.bi);Gc(0,0,a.b5,a.bw);b=JW();$p=3;case 3:Zk(a,b);if(C()){break _;}b=new Mx;c=a.w;d=a.bi;b.cg=N(Iu,3);b.qF=new De;if(c!==null)b.lx=c;b.ic=d;f=0;while(f<3){b.cg.data[f]=Ck();f=f+1|0;}a.cG=b;DO(a,B(156));b=new Le;K5(b);b.gj=Ck();b.td=new De;b.B5=null;b.p$=0;b.Eq=1.0;b.bN=a;a.mA=b;return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Ue(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=EU(a.b5,a.bw);c=b.e$;d=b.e6;DA(16640);CU(5889);CT();G7(0.0,c,d,0.0,1000.0,3000.0);CU(5888);CT();Br(0.0,0.0,(-2000.0));Gc(0,0,a.b5,a.bw);Gp(0.0,0.0,0.0,0.0);X(2896);X(2912);V(3553);Bv();e=A3Q;f=3553;b=a.bi;g=B(157);$p=1;case 1:$z=ACB(b,g);if(C()){break _;}d=$z;Ce(f,d);BN(1.0,1.0,1.0,1.0);Bu(e);Eb(e,4210752);F(e,0.0,a.bw,0.0,0.0,a.bw/32.0+0.0);F(e,
a.b5,a.bw,0.0,a.b5/32.0,a.bw/32.0+0.0);F(e,a.b5,0.0,0.0,a.b5/32.0,0.0);F(e,0.0,0.0,0.0,0.0,0.0);Bm(e);V(3008);Pu(516,0.10000000149011612);Cn(a.ey,B(158),8,(a.bw/2|0)-16|0,(-1));return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Zk(a,b){var c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.A instanceof OD)return;if(a.A!==null){c=a.A;$p=1;continue _;}if(b===null&&a.w===null)b=JW();else if(b===null&&a.e.bI<=0){b=new Kq;DH(b);}a.A=b;if(b===null){$p=2;continue _;}SW(a);c=EU(a.b5,a.bw);d=c.e$;e=c.e6;$p=3;continue _;case 1:c.nW();if(C()){break _;}if(b===null&&a.w===null)b=JW();else if(b===null&&a.e.bI<=0){b=new Kq;DH(b);}a.A=b;if(b===null){$p=2;continue _;}SW(a);c
=EU(a.b5,a.bw);d=c.e$;e=c.e6;$p=3;continue _;case 2:AAC(a);if(C()){break _;}return;case 3:AKw(b,a,d,e);if(C()){break _;}a.he=0;return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function DO(a,b){var c,d,e,f;BO();Y();c=A2O.getError();if(c==(-144))c=(-144);if(c){a:{switch(c){case -144:break;case 1280:d=B(159);break a;case 1281:d=B(160);break a;case 1282:d=B(161);break a;case 1285:d=B(162);break a;default:d=B(163);break a;}d=B(164);}B$(Ds(),B(165));e=Ds();f=new Bd;Bb(f);B$(e,O(H(H(f,B(166)),b)));b=Ds();e=new Bd;Bb(e);B$(b,O(H(H(Be(e,c),B(11)),d)));}}
function T_(a){var b,c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gK=1;try{$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){b=$$je;}else{throw $$e;}}BZ(b);return;case 1:a:{try{ADk(a);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){b=$$je;}else{throw $$e;}}BZ(b);return;}c=B1();d=0;if(!a.gK)return;A3R=0;A3S=0;if(!a.bm)E0(a.ba);else
{e=a.ba.cz;E0(a.ba);a.ba.cz=e;}f=0;if(f<a.ba.h4){a.bD=a.bD+1|0;$p=2;continue _;}DO(a,B(167));if(a.bm)a.ba.cz=1.0;V(3553);if(a.w!==null){g=a.w;$p=3;continue _;}if(!a.he){FS(a.ce,a.ba.cz);g=a.ek;e=a.ba.cz;$p=4;continue _;}if(BH(33)&&BH(7))E8(a);else a.f6=D6();$p=5;continue _;case 2:AAS(a);if(C()){break _;}f=f+1|0;if(f<a.ba.h4){a.bD=a.bD+1|0;continue _;}DO(a,B(167));if(a.bm)a.ba.cz=1.0;V(3553);if(a.w!==null){g=a.w;$p=3;continue _;}if(!a.he){FS(a.ce,a.ba.cz);g=a.ek;e=a.ba.cz;$p=4;continue _;}if(BH(33)&&BH(7))E8(a);else a.f6
=D6();$p=5;continue _;case 3:$z=ADh(g);if(C()){break _;}h=$z;if(h){g=a.w;continue _;}if(!a.he){FS(a.ce,a.ba.cz);g=a.ek;e=a.ba.cz;$p=4;continue _;}if(BH(33)&&BH(7))E8(a);else a.f6=D6();$p=5;continue _;case 4:AA4(g,e);if(C()){break _;}if(BH(33)&&BH(7))E8(a);else a.f6=D6();$p=5;case 5:Tu();if(C()){break _;}$p=6;case 6:AOj();if(C()){break _;}if(!(JD()==a.b5&&KB()==a.bw)){a.b5=A2L.width;a.bw=A2L.height;if(a.b5<=0)a.b5=1;if(a.bw<=0)a.bw=1;h=a.b5;i=a.bw;if(h<=0)h=1;if(i<=0)i=1;a.b5=h;a.bw=i;if(a.A!==null){g=EU(h,i);i
=g.e$;h=g.e6;g=a.A;$p=8;continue _;}}if(a.r.k9){try{j=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Eh){g=$$je;}else{throw $$e;}}g.rN();}DO(a,B(168));d=d+1|0;a.bm=a.A!==null&&a.A.mN()?1:0;while(true){k=B1();j=Long_add(c,Long_fromInt(1000));if(Long_lt(k,j))break;g=new Bd;Bb(g);g=H(Be(g,d),B(169));P8();a.kn=O(H(Be(g,A3T),B(170)));A3T=0;d=0;c=j;}if(!a.gK)return;A3R=0;A3S=0;if(!a.bm)E0(a.ba);else{e=a.ba.cz;E0(a.ba);a.ba.cz=e;}f=0;if(f<a.ba.h4){a.bD=a.bD+1|0;$p=2;continue _;}DO(a,B(167));if
(a.bm)a.ba.cz=1.0;V(3553);if(a.w!==null){g=a.w;$p=3;continue _;}if(!a.he){FS(a.ce,a.ba.cz);g=a.ek;e=a.ba.cz;$p=4;continue _;}if(BH(33)&&BH(7))E8(a);else a.f6=D6();$p=5;continue _;case 7:a:{try{AFr(j);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Eh){g=$$je;}else{throw $$e;}}g.rN();}DO(a,B(168));d=d+1|0;a.bm=a.A!==null&&a.A.mN()?1:0;while(true){k=B1();j=Long_add(c,Long_fromInt(1000));if(Long_lt(k,j))break;g=new Bd;Bb(g);g=H(Be(g,d),B(169));P8();a.kn=O(H(Be(g,A3T),B(170)));A3T=0;d=0;c=j;}if
(!a.gK)return;A3R=0;A3S=0;if(!a.bm)E0(a.ba);else{e=a.ba.cz;E0(a.ba);a.ba.cz=e;}f=0;if(f<a.ba.h4){a.bD=a.bD+1|0;$p=2;continue _;}DO(a,B(167));if(a.bm)a.ba.cz=1.0;V(3553);if(a.w!==null){g=a.w;$p=3;continue _;}if(!a.he){FS(a.ce,a.ba.cz);g=a.ek;e=a.ba.cz;$p=4;continue _;}if(BH(33)&&BH(7))E8(a);else a.f6=D6();$p=5;continue _;case 8:AKw(g,a,i,h);if(C()){break _;}if(a.r.k9){try{j=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Eh){g=$$je;}else{throw $$e;}}g.rN();}DO(a,B(168));d=d+1|0;a.bm
=a.A!==null&&a.A.mN()?1:0;while(true){k=B1();j=Long_add(c,Long_fromInt(1000));if(Long_lt(k,j))break;g=new Bd;Bb(g);g=H(Be(g,d),B(169));P8();a.kn=O(H(Be(g,A3T),B(170)));A3T=0;d=0;c=j;}if(!a.gK)return;A3R=0;A3S=0;if(!a.bm)E0(a.ba);else{e=a.ba.cz;E0(a.ba);a.ba.cz=e;}f=0;if(f<a.ba.h4){a.bD=a.bD+1|0;$p=2;continue _;}DO(a,B(167));if(a.bm)a.ba.cz=1.0;V(3553);if(a.w!==null){g=a.w;$p=3;continue _;}if(!a.he){FS(a.ce,a.ba.cz);g=a.ek;e=a.ba.cz;$p=4;continue _;}if(BH(33)&&BH(7))E8(a);else a.f6=D6();$p=5;continue _;default:
Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function E8(a){var b,c,d,e,f,g,h,i,j,k,l;if(Long_eq(a.f6,Long_fromInt(-1)))a.f6=D6();b=D6();c=A3N.data;d=A3O;A3O=d+1|0;c[d&(A3N.data.length-1|0)]=Long_sub(b,a.f6);a.f6=b;DA(256);CU(5889);CT();G7(0.0,a.b5,a.bw,0.0,1000.0,3000.0);CU(5888);CT();Br(0.0,0.0,(-2000.0));X(3553);Bv();e=A3Q;Fq(e,7);Eb(e,538968064);Ba(e,0.0,a.bw-100|0,0.0);Ba(e,0.0,a.bw,0.0);Ba(e,A3N.data.length,a.bw,0.0);Ba(e,A3N.data.length,a.bw-100|0,0.0);Bm(e);f=Long_ZERO;d=0;while(d<A3N.data.length){f=Long_add(f,A3N.data[d]);d=d+1|0;}d=Long_div(Long_div(f,
Long_fromInt(200000)),Long_fromInt(A3N.data.length)).lo;Fq(e,7);Eb(e,541065216);Ba(e,0.0,a.bw-d|0,0.0);Ba(e,0.0,a.bw,0.0);Ba(e,A3N.data.length,a.bw,0.0);Ba(e,A3N.data.length,a.bw-d|0,0.0);Bm(e);Fq(e,1);g=0;while(g<A3N.data.length){h=(((g-A3O|0)&(A3N.data.length-1|0))*255|0)/A3N.data.length|0;i=Bg(h,h)/255|0;d=Bg(i,i)/255|0;j=Bg(d,d)/255|0;Eb(e,(((-16777216)+(Bg(j,j)/255|0)|0)+(d*256|0)|0)+(h*4096|0)|0);k=Long_div(A3N.data[g],Long_fromInt(200000));l=g+0.5;Ba(e,l,Long_toNumber(Long_sub(Long_fromInt(a.bw),k))+
0.5,0.0);Ba(e,l,a.bw+0.5,0.0);g=g+1|0;}Bm(e);V(3553);}
function AAC(a){var b,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(LZ()&&!a.bj){a.bj=1;Uo(a.vI);b=null;$p=1;continue _;}return;case 1:Zk(a,b);if(C()){break _;}a.b2=a.bD+10000|0;return;default:Eq();}}CL().s(a,b,$p);}
function SW(a){if(a.bj){if(a.e!==null)ALT(a.e);a.bj=0;AAQ(a.vI);}}
function AFV(a){var b,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.A!==null)return;b=A1L();$p=1;case 1:Zk(a,b);if(C()){break _;}return;default:Eq();}}CL().s(a,b,$p);}
function Wi(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.ce.Aq&&!(!b&&a.cK>0)){if(c&&a.bV!==null&&!a.bV.jZ&&!b){d=a.bV.hg;e=a.bV.hh;f=a.bV.hi;g=a.ce;b=a.bV.gU;$p=1;continue _;}AGx(a.ce);}return;case 1:UA(g,d,e,f,b);if(C()){break _;}g=a.cG;b=a.bV.gU;$p=2;case 2:UN(g,d,e,f,b);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Xx(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(!b&&a.cK>0)){if(!b)MR(a.ek.hI);a:{if(a.bV!==null){if(a.bV.jZ!=1){if(a.bV.jZ)break a;c=a.bV.hg;d=a.bV.hh;e=a.bV.hi;f=a.bV.gU;J();g=A3U.data;h=a.w;$p=1;continue _;}if(!b){h=a.e;i=a.bV.mb;$p=2;continue _;}if(b==1)Ry(a.e,a.bV.mb);}else if(!b&&!(a.ce instanceof C_))a.cK=10;}if
(b==1){h=DD(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}}return;case 1:$z=X4(h,c,d,e);if(C()){break _;}k=$z;j=g[k];if(!b){h=a.w;k=a.bV.gU;$p=4;continue _;}l=DD(a.e.F);h=a.w;$p=3;continue _;case 2:YZ(h,i);if(C()){break _;}if(b==1)Ry(a.e,a.bV.mb);if(b==1){h=DD(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}return;case 3:$z=X4(h,c,d,e);if(C()){break _;}k=$z;if(k>0){h=A3U.data[k];i=a.w;j=a.e;$p=6;continue _;}if(l===null)return;m=l.m;h=a.e;i=a.w;$p=8;continue _;case 4:Xg(h,c,d,e,k);if(C()){break _;}if
(j===A3V&&a.e.xO<100){if(b==1){h=DD(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}return;}h=a.ce;$p=7;continue _;case 5:b:{$z=WQ(h,i,j);if(C()){break _;}i=$z;if(i===h){if(i===null)break b;if(i.m==d)break b;}a.e.F.bb.data[a.e.F.bB]=i;AHE(a.ek.hI);if(!i.m)a.e.F.bb.data[a.e.F.bB]=null;}return;case 6:$z=h.kr(i,c,d,e,j);if(C()){break _;}k=$z;if(k)return;if(l===null)return;m=l.m;h=a.e;i=a.w;$p=8;continue _;case 7:AAm(h,c,d,e);if(C()){break _;}if(b==1){h=DD(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}return;case 8:$z
=AD_(l,h,i,c,d,e,f);if(C()){break _;}c=$z;if(c)MR(a.ek.hI);if(!l.m)a.e.F.bb.data[a.e.F.bB]=null;else if(l.m!=m)ABV(a.ek.hI);if(b==1){h=DD(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ACQ(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bV===null)return;b=a.w;c=a.bV.hg;d=a.bV.hh;e=a.bV.hi;$p=1;case 1:$z=X4(b,c,d,e);if(C()){break _;}c=$z;J();if(c==A3W.b)c=A3X.b;if(c==A3Y.b)c=A3Z.b;if(c==A3V.b)c=A30.b;ALw(a.e.F,c,a.ce instanceof C_);return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AAS(a){var b,c,d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AFl(a.mA);if(!a.bm&&a.w!==null){b=a.ce;$p=2;continue _;}c=3553;d=a.bi;b=B(171);$p=1;case 1:$z=ACB(d,b);if(C()){break _;}e=$z;Ce(c,e);if(a.A===null&&a.e!==null&&a.e.bI<=0){b=null;$p=3;continue _;}if(a.A!==null&&!a.A.od){if(a.A!==null)a.b2=a.bD+10000|0;if(a.A!==null){b=a.A;$p=4;continue _;}if(a.w!==null){a.w.h0=a.r.iV;if(!a.bm){b=a.ek;$p=7;continue _;}if
(!a.bm)GI(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FJ(a)){b=a.w;$p=19;continue _;}if(!a.bm){b=a.w;c=I(a.e.c);e=I(a.e.i);f=I(a.e.d);$p=18;continue _;}if(!a.bm){b=a.cG;$p=21;continue _;}}a.c8=B1();return;}a:while(true){if(!EM()){if(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DX(a.e,Bc(),CD());if(!CD())continue;if
(a.A!==null){b=a.A;$p=6;continue _;}if(Bc()==1)break;if(a.ce instanceof C_){Bc();Bc();}if(Bc()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Bc()==a.r.eR.by){b=El(a.e.F);$p=17;continue _;}if(Bc()==a.r.fC.by){b=a.e;d=DS(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bc()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Bc()!=a.r.fs.by)continue;DG(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;c=F1();if(c)Fc(a.e.F,c);b:{if(a.A!==null){if(a.A===null)break b;else
{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm()){$p=8;continue _;}if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()==2&&Cm())break a;}}$p=16;continue _;case 2:ADU(b);if(C()){break _;}c=3553;d=a.bi;b=B(171);$p=1;continue _;case 3:Zk(a,b);if(C()){break _;}if(a.A!==null&&!a.A.od){if(a.A!==null)a.b2=a.bD+10000|0;if(a.A!==null){b=a.A;$p=4;continue _;}if(a.w!==null){a.w.h0=a.r.iV;if(!a.bm){b=a.ek;$p=7;continue _;}if(!a.bm)GI(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FJ(a)){b=a.w;$p
=19;continue _;}if(!a.bm){b=a.w;c=I(a.e.c);e=I(a.e.i);f=I(a.e.d);$p=18;continue _;}if(!a.bm){b=a.cG;$p=21;continue _;}}a.c8=B1();return;}c:while(true){if(!EM()){if(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DX(a.e,Bc(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Bc()==1)break;if(a.ce instanceof C_)
{Bc();Bc();}if(Bc()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Bc()==a.r.eR.by){b=El(a.e.F);$p=17;continue _;}if(Bc()==a.r.fC.by){b=a.e;d=DS(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bc()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Bc()!=a.r.fs.by)continue;DG(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;c=F1();if(c)Fc(a.e.F,c);d:{if(a.A!==null){if(a.A===null)break d;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm()){$p=8;continue _;}if(!CE()&&
Cm()){c=0;$p=11;continue _;}if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()==2&&Cm())break c;}}$p=16;continue _;case 4:ACe(b);if(C()){break _;}if(a.A!==null)a.A.pQ();if(a.w!==null){a.w.h0=a.r.iV;if(!a.bm){b=a.ek;$p=7;continue _;}if(!a.bm)GI(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FJ(a)){b=a.w;$p=19;continue _;}if(!a.bm){b=a.w;c=I(a.e.c);e=I(a.e.i);f=I(a.e.d);$p=18;continue _;}if(!a.bm){b=a.cG;$p=21;continue _;}}a.c8=B1();return;case 5:Vk(b);if(C()){break _;}while(true){while(true){if(!EM()){if(a.cK
>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DX(a.e,Bc(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Bc()==1)break;if(a.ce instanceof C_){Bc();Bc();}if(Bc()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Bc()==a.r.eR.by){b=El(a.e.F);$p=17;continue _;}if(Bc()==a.r.fC.by){b=a.e;d=DS(a.e.F,a.e.F.bB,
1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bc()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Bc()!=a.r.fs.by)continue;DG(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;else break;}c=F1();if(c)Fc(a.e.F,c);if(a.A!==null){if(a.A===null)continue;else{b=a.A;continue _;}}if(!a.bj&&Cm()){$p=8;continue _;}if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()!=2)continue;if(!Cm())continue;else break;}$p=16;continue _;case 6:AMG(b);if(C())
{break _;}while(true){e=0;while(e<9){if(Bc()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Bc()==a.r.fs.by)DG(a.r,4,!BH(42)&&!BH(54)?1:(-1));while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DX(a.e,Bc(),CD());if(!CD())continue;else break;}if(a.A!==null){b=a.A;continue _;}if(Bc()==1)break;if(a.ce instanceof C_){Bc();Bc();}if(Bc()==33&&BH(6)){a.r.cf=a.r.cf
?0:1;a.cv=a.cv?0:1;}if(Bc()==a.r.eR.by){b=El(a.e.F);$p=17;continue _;}if(Bc()!=a.r.fC.by)continue;else{b=a.e;d=DS(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}}$p=9;continue _;case 7:ADH(b);if(C()){break _;}if(!a.bm)GI(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FJ(a)){b=a.w;$p=19;continue _;}if(a.bm){if(a.bm){a.c8=B1();return;}b=a.cG;$p=21;continue _;}b=a.w;c=I(a.e.c);e=I(a.e.i);f=I(a.e.d);$p=18;continue _;case 8:AAC(a);if(C()){break _;}while(true){while(true){if(!EM()){if(a.cK>0)a.cK=a.cK-1|0;while(true)
{if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DX(a.e,Bc(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Bc()==1)break;if(a.ce instanceof C_){Bc();Bc();}if(Bc()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Bc()==a.r.eR.by){b=El(a.e.F);$p=17;continue _;}if(Bc()==a.r.fC.by){b=a.e;d=DS(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=
0;while(e<9){if(Bc()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Bc()!=a.r.fs.by)continue;DG(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;else break;}c=F1();if(c)Fc(a.e.F,c);if(a.A!==null){if(a.A===null)continue;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm()){continue _;}if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()!=2)continue;if(!Cm())continue;else break;}$p=16;continue _;case 9:AFV(a);if(C()){break _;}while(true){if(a.ce instanceof C_)
{Bc();Bc();}if(Bc()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Bc()==a.r.eR.by){b=El(a.e.F);$p=17;continue _;}if(Bc()==a.r.fC.by){b=a.e;d=DS(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bc()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Bc()==a.r.fs.by)DG(a.r,4,!BH(42)&&!BH(54)?1:(-1));while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DX(a.e,
Bc(),CD());if(!CD())continue;else break;}if(a.A!==null){b=a.A;$p=6;continue _;}if(Bc()!=1)continue;else break;}continue _;case 10:Wi(a,c,e);if(C()){break _;}if(a.A!==null)a.b2=a.bD+10000|0;if(a.A!==null){b=a.A;$p=4;continue _;}if(a.w!==null){a.w.h0=a.r.iV;if(!a.bm){b=a.ek;$p=7;continue _;}if(!a.bm)GI(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FJ(a)){b=a.w;$p=19;continue _;}if(!a.bm){b=a.w;c=I(a.e.c);e=I(a.e.i);f=I(a.e.d);$p=18;continue _;}if(!a.bm){b=a.cG;$p=21;continue _;}}a.c8=B1();return;case 11:Xx(a,
c);if(C()){break _;}a.b2=a.bD;while(true){if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()==2&&Cm()){$p=16;continue _;}while(true){while(true){if(!EM()){if(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DX(a.e,Bc(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Bc()==1)break;if(a.ce instanceof C_){Bc();Bc();}if
(Bc()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Bc()==a.r.eR.by){b=El(a.e.F);$p=17;continue _;}if(Bc()==a.r.fC.by){b=a.e;d=DS(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bc()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Bc()!=a.r.fs.by)continue;DG(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;else break;}c=F1();if(c)Fc(a.e.F,c);if(a.A===null)break;if(a.A===null)continue;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm())break;if(CE())continue;if(!Cm())continue;else
{c=0;continue _;}}$p=8;continue _;case 12:Xx(a,c);if(C()){break _;}a.b2=a.bD;if(B0(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;case 13:AJJ(b);if(C()){break _;}if(!a.bm&&!FJ(a)){b=a.w;$p=19;continue _;}if(a.bm){if(a.bm){a.c8=B1();return;}b=a.cG;$p=21;continue _;}b=a.w;c=I(a.e.c);e=I(a.e.i);f=I(a.e.d);$p=18;continue _;case 14:Xx(a,c);if(C()){break _;}a.b2=a.bD;while(true){if(CE()==2&&Cm()){$p=16;continue _;}while(true){while(true){if(!EM()){if
(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DX(a.e,Bc(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Bc()==1)break;if(a.ce instanceof C_){Bc();Bc();}if(Bc()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Bc()==a.r.eR.by){b=El(a.e.F);$p=17;continue _;}if(Bc()==a.r.fC.by){b=a.e;d=DS(a.e.F,a.e.F.bB,
1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bc()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Bc()!=a.r.fs.by)continue;DG(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;else break;}c=F1();if(c)Fc(a.e.F,c);if(a.A===null)break;if(a.A===null)continue;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm())break;if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()!=1)continue;if(!Cm())continue;else{c=1;continue _;}}$p=8;continue _;case 15:Xx(a,c);if(C()){break _;}a.b2=a.bD;c=0;e=a.A===
null&&B0(0)&&a.bj?1:0;$p=10;continue _;case 16:ACQ(a);if(C()){break _;}while(true){while(true){if(!EM()){if(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DX(a.e,Bc(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Bc()==1)break;if(a.ce instanceof C_){Bc();Bc();}if(Bc()==33&&BH(6)){a.r.cf=a.r.cf?0:
1;a.cv=a.cv?0:1;}if(Bc()==a.r.eR.by){b=El(a.e.F);$p=17;continue _;}if(Bc()==a.r.fC.by){b=a.e;d=DS(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bc()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Bc()!=a.r.fs.by)continue;DG(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;else break;}c=F1();if(c)Fc(a.e.F,c);if(a.A!==null){if(a.A===null)continue;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm()){$p=8;continue _;}if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()==
1&&Cm()){c=1;$p=14;continue _;}if(CE()!=2)continue;if(!Cm())continue;else break;}continue _;case 17:Zk(a,b);if(C()){break _;}while(true){if(Bc()==a.r.fC.by){b=a.e;d=DS(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bc()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Bc()==a.r.fs.by)DG(a.r,4,!BH(42)&&!BH(54)?1:(-1));while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj
?1:0;$p=10;continue _;}DX(a.e,Bc(),CD());if(!CD())continue;else break;}if(a.A!==null){b=a.A;$p=6;continue _;}if(Bc()==1)break;if(a.ce instanceof C_){Bc();Bc();}if(Bc()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Bc()!=a.r.eR.by)continue;else{b=El(a.e.F);continue _;}}$p=9;continue _;case 18:AAr(b,c,e,f);if(C()){break _;}if(a.bm){a.c8=B1();return;}b=a.cG;$p=21;continue _;case 19:TV(b);if(C()){break _;}if(a.bm){if(a.bm){a.c8=B1();return;}b=a.cG;$p=21;continue _;}b=a.w;c=I(a.e.c);e=I(a.e.i);f=I(a.e.d);$p=18;continue _;case 20:AKT(b,
d,c);if(C()){break _;}while(true){e=0;while(e<9){if(Bc()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Bc()==a.r.fs.by)DG(a.r,4,!BH(42)&&!BH(54)?1:(-1));while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DX(a.e,Bc(),CD());if(!CD())continue;else break;}if(a.A!==null){b=a.A;$p=6;continue _;}if(Bc()==1)break;if(a.ce instanceof C_){Bc();Bc();}if(Bc()==33&&BH(6))
{a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Bc()==a.r.eR.by){b=El(a.e.F);$p=17;continue _;}if(Bc()!=a.r.fC.by)continue;else{b=a.e;d=DS(a.e.F,a.e.F.bB,1);c=0;continue _;}}$p=9;continue _;case 21:Wx(b);if(C()){break _;}a.c8=B1();return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function FJ(a){return 0;}
function ACZ(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:Xh(a,c);if(C()){break _;}c=new FL;d=FE(new De);$p=2;case 2:N4(c,b,d);if(C()){break _;}if(!c.rO){b=B(172);$p=3;continue _;}b=B(173);$p=4;continue _;case 3:ABg(a,c,b);if(C()){break _;}return;case 4:ABg(a,c,b);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function Xh(a,b){var c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=B(3);$p=1;case 1:ABg(a,b,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,$p);}
function ABg(a,b,c){var d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.w!==null){d=a.w;e=a.ii;$p=1;continue _;}a.w=b;if(b===null){a.c8=Long_ZERO;return;}b.zN=a.ey;a.e=null;b.bc=a.e;$p=2;continue _;case 1:AEa(d,e);if(C()){break _;}a.w=b;if(b===null){a.c8=Long_ZERO;return;}b.zN=a.ey;a.e=null;b.bc=a.e;$p=2;case 2:AIu(a,c);if(C()){break _;}if(a.e===null){a.e=AWr(a,b,a.jT);c=a.e;$p=3;continue _;}a.e.g6=R$(a.r);if(a.dB!==null)N7(a.dB,
b);if(a.cG!==null)Mz(a.cG,b);b.bc=a.e;$p=4;continue _;case 3:AFR(c);if(C()){break _;}Oj(a.ce,a.e);a.e.g6=R$(a.r);if(a.dB!==null)N7(a.dB,b);if(a.cG!==null)Mz(a.cG,b);b.bc=a.e;$p=4;case 4:ABC(b);if(C()){break _;}if(!b.rO){a.c8=Long_ZERO;return;}c=a.ii;$p=5;case 5:AEa(b,c);if(C()){break _;}a.c8=Long_ZERO;return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AIu(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AJr(a.ii,b);b=a.ii;c=B(174);$p=1;case 1:AMd(b,c);if(C()){break _;}d=128;e=289;f=(-128);g=f;while(g<=d){h=a.w.eJ;i=a.w.eI;if(a.w.bc!==null){h=a.w.bc.c|0;i=a.w.bc.d|0;}j=f;if(j<=d){b=a.ii;k=0+1|0;l=(0*100|0)/e|0;$p=4;continue _;}g=g+16|0;}b=a.ii;c=B(175);$p=2;case 2:AMd(b,
c);if(C()){break _;}l=2000;A31=1;d=0;if(d>=l){Sh(a.w);A31=0;return;}b=a.w;m=1;$p=3;case 3:W1(b,m);if(C()){break _;}d=d+1|0;if(d>=l){Sh(a.w);A31=0;return;}b=a.w;m=1;continue _;case 4:Tz(b,l);if(C()){break _;}b=a.w;l=h+g|0;m=64;n=i+j|0;$p=5;case 5:X4(b,l,m,n);if(C()){break _;}b=a.w;$p=6;case 6:$z=ADh(b);if(C()){break _;}l=$z;if(l){b=a.w;continue _;}j=j+16|0;m=k;while(true){if(j<=d){b=a.ii;k=m+1|0;l=(m*100|0)/e|0;$p=4;continue _;}g=g+16|0;if(g>d)break;h=a.w.eJ;i=a.w.eI;if(a.w.bc!==null){h=a.w.bc.c|0;i=a.w.bc.d
|0;}j=f;}b=a.ii;c=B(175);$p=2;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Kn(a){return AF5(a.dB);}
function L4(a){return TT(a.dB);}
function KH(a){var b;b=new Bd;Bb(b);return O(H(H(H(H(b,B(176)),Tq(a.cG)),B(177)),AIC(a.w)));}
function AMD(a){var b,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.e!==null&&a.w!==null){b=a.e;$p=5;continue _;}b=a.w;$p=1;case 1:AKt(b);if(C()){break _;}a.e=AWr(a,a.w,a.jT);b=a.e;$p=2;case 2:AFR(b);if(C()){break _;}Oj(a.ce,a.e);if(a.w!==null){a.w.bc=a.e;b=a.w;$p=4;continue _;}a.e.g6=R$(a.r);b=B(178);$p=3;case 3:AIu(a,b);if(C()){break _;}return;case 4:ABC(b);if(C()){break _;}a.e.g6=R$(a.r);b=B(178);$p=3;continue _;case 5:B4(b);if(C()){break _;}b=a.w;$p=1;continue _;default:
Eq();}}CL().s(a,b,$p);}
function VH(){A3N=$rt_createLongArray(512);A3O=0;}
function Vq(){E.call(this);}
function A32(){var a=new Vq();AT3(a);return a;}
function AT3(a){return;}
function LZ(){var b,c;Y();b=document.pointerLockElement!=null?1:0;c=A3o;A3o=b;if(!c&&b){A24=0.0;A25=0.0;}a:{b:{if(A29){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function AOj(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();AH8(A2O);b=A2M;c=A2N;d=A2L.width;e=A2L.height;b.drawImage(c,0.0,0.0,d,e);f=A2L.clientWidth;g=A2L.clientHeight;if(!(f==A26&&g==A27)){A26=f;A27=g;c=A2N;h=f;c.width=h;c=A2N;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Eh){}else{throw $$e;}}return;case 1:a:{try{AFr(i);if(C())
{break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Eh){}else{throw $$e;}}}return;default:Eq();}}CL().s(b,c,d,e,f,g,h,i,$p);}
function Pi(){var a=this;E.call(a);a.mW=null;a.B_=null;a.CC=null;}
var A33=null;function A0Z(){A0Z=Bt(Pi);AZO();}
function A1g(a,b){var c=new Pi();Ud(c,a,b);return c;}
function Ud(a,b,c){A0Z();a.mW=b;a.B_=c;}
function AZO(){var b;A33=Ck();b=A33;J();U(b,A30);U(A33,A34);U(A33,A35);U(A33,A3X);U(A33,A36);U(A33,A37);U(A33,A38);U(A33,A39);U(A33,A3Z);U(A33,A3$);U(A33,A3_);U(A33,A4a);U(A33,A4b);U(A33,A4c);U(A33,A4d);U(A33,A4e);U(A33,A4f);U(A33,A4g);U(A33,A4h);U(A33,A4i);U(A33,A4j);U(A33,A4k);U(A33,A4l);U(A33,A4m);U(A33,A4n);U(A33,A4o);U(A33,A4p);U(A33,A4q);Xi(Ds(),A33.p);}
function Fs(){var a=this;E.call(a);a.Fe=Long_ZERO;a.AI=0;a.Aj=Long_ZERO;a.uD=0;a.lt=null;a.zA=null;a.B0=null;a.ug=0;a.v0=null;}
var A4r=null;var A2a=null;var A4s=Long_ZERO;var A4t=0;function A4u(){var a=new Fs();ACI(a);return a;}
function A1D(a){var b=new Fs();Qs(b,a);return b;}
function AZ6(a,b){var c=new Fs();LJ(c,a,b);return c;}
function ACI(a){LJ(a,null,null);}
function Qs(a,b){LJ(a,null,b);}
function LJ(a,b,c){var d;a.lt=new E;a.ug=1;a.B0=c;a.v0=b;d=A4s;A4s=Long_add(d,Long_fromInt(1));a.Fe=d;}
function P6(a){var b;b=new Sv;b.w8=a;ARz(b);}
function EJ(b){if(A2a!==b)A2a=b;A2a.Aj=B1();}
function ALA(a){var b,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.v0===null)return;b=a.v0;$p=1;case 1:T_(b);if(C()){break _;}return;default:Eq();}}CL().s(a,b,$p);}
function AMO(){return A2a;}
function ASJ(a,b){a.AI=b;}
function Tu(){var b,c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=A2a;c=b.uD+1|0;b.uD=c;if(c<30)return;A2a.uD=0;if(Long_ge(Long_add(b.Aj,Long_fromInt(100)),B1()))return;$p=1;case 1:AGv(b);if(C()){break _;}return;default:Eq();}}CL().s(b,c,$p);}
function AGv(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Ct=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EF=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0v(callback);return thread.suspend(function(){try{AUC(b,callback);}catch($e){callback.EF($rt_exception($e));}});}
function AUC(b,c){var d;d=new PQ;d.yY=b;d.yX=c;N5(d);}
function AFr(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Ct=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EF=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0v(callback);return thread.suspend(function(){try{AOD(b,callback);}catch($e){callback.EF($rt_exception($e));}});}
function AOD(b,c){var d,e;d=A2a;e=new MM;e.t7=d;e.x8=c;e.E3=AAV(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.zA=e;}
function UT(){A4r=A1D(B(179));A2a=A4r;A4s=Long_fromInt(1);A4t=1;}
function Do(){}
function S1(){E.call(this);}
function A4v(){var a=new S1();ATr(a);return a;}
function ATr(a){return;}
function AMH(a,b){b.preventDefault();b.stopPropagation();}
function XQ(a,b){AMH(a,b);}
function AZh(a,b){XQ(a,b);}
function S7(){E.call(this);}
function A4w(){var a=new S7();ARc(a);return a;}
function ARc(a){return;}
function ALP(a,b){var c,d;c=b.button;d=OR();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;EK(KK(),b);b.preventDefault();b.stopPropagation();Ku();}
function ADM(a,b){ALP(a,b);}
function AP8(a,b){ADM(a,b);}
function S8(){E.call(this);}
function A4x(){var a=new S8();APO(a);return a;}
function APO(a){return;}
function AKP(a,b){var c,d;c=b.button;d=OR();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;EK(KK(),b);b.preventDefault();b.stopPropagation();}
function Vz(a,b){AKP(a,b);}
function AUn(a,b){Vz(a,b);}
function S5(){E.call(this);}
function A4y(){var a=new S5();AVg(a);return a;}
function AVg(a){return;}
function AI7(a,b){var c;Y();A22=b.offsetX;A23=A2L.clientHeight-b.offsetY|0;c=b.movementX;A24=A24+c;c= -b.movementY;A25=A25+c;b.preventDefault();b.stopPropagation();}
function YP(a,b){AI7(a,b);}
function AMQ(a,b){YP(a,b);}
function S6(){E.call(this);}
function A4z(){var a=new S6();AZU(a);return a;}
function AZU(a){return;}
function Z4(a,b){Ni().data[PW(NO(b))]=1;EK(Lt(),b);b.preventDefault();b.stopPropagation();Ku();}
function AKX(a,b){Z4(a,b);}
function AUv(a,b){AKX(a,b);}
function S3(){E.call(this);}
function A4A(){var a=new S3();AUK(a);return a;}
function AUK(a){return;}
function Vm(a,b){Ni().data[PW(NO(b))]=0;EK(Lt(),b);b.preventDefault();b.stopPropagation();}
function TN(a,b){Vm(a,b);}
function ATp(a,b){TN(a,b);}
function S4(){E.call(this);}
function A4B(){var a=new S4();APZ(a);return a;}
function APZ(a){return;}
function AMh(a,b){Y();if(A28&&(b.repeat?1:0))EK(Lt(),b);b.preventDefault();b.stopPropagation();}
function AFM(a,b){AMh(a,b);}
function AWj(a,b){AFM(a,b);}
function S2(){E.call(this);}
function A4C(){var a=new S2();AT1(a);return a;}
function AT1(a){return;}
function AAD(a,b){EK(KK(),b);b.preventDefault();b.stopPropagation();}
function X5(a,b){AAD(a,b);}
function ANS(a,b){X5(a,b);}
function NK(){E.call(this);}
function A4D(){var a=new NK();ATi(a);return a;}
function ATi(a){return;}
function AAF(a,b){PM(0);}
function AG5(a,b){AAF(a,b);}
function AWM(a,b){AG5(a,b);}
function NJ(){E.call(this);}
function A4E(){var a=new NJ();AUH(a);return a;}
function AUH(a){return;}
function ABY(a,b){PM(1);Ku();}
function AG4(a,b){ABY(a,b);}
function AQQ(a,b){AG4(a,b);}
function Ly(){E.call(this);}
var A4F=null;var A3L=null;function A4G(){var a=new Ly();Zw(a);return a;}
function Zw(a){return;}
function AEE(){var b,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(180);$p=1;case 1:$z=AUr(b);if(C()){break _;}b=$z;if(b===null){A4F=B(163);return A4H;}if(b.Bl)return A4I;if(!b.Bx&&b.vk!==null){A3L=b.vk;return A4J;}A4F=b.sw!==null?b.sw:B(181);return A4H;default:Eq();}}CL().s(b,$p);}
function AKq(b){var c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=A3L;$p=1;case 1:$z=AN1(c,b);if(C()){break _;}b=$z;return b!==A4K?0:1;default:Eq();}}CL().s(b,c,$p);}
function AD5(b){var c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AKq(b);if(C()){break _;}c=$z;if(c)return;c=JQ(b,47);if(c>0){d=Gr(b,0,c);$p=3;continue _;}d=A3L;c=1;e=new ArrayBuffer(0);$p=2;case 2:AQf(d,b,c,e);if(C()){break _;}return;case 3:AD5(d);if(C()){break _;}d=A3L;c=1;e=new ArrayBuffer(0);$p=2;continue _;default:Eq();}}CL().s(b,c,d,e,$p);}
function ACK(){A4F=B(3);A3L=null;}
function Ww(){E.call(this);}
function AQE(){var Context=window.AudioContext||window.webkitAudioContext;return new Context();}
function Q9(){E.call(this);}
var A3K=null;function A4L(){var a=new Q9();AKS(a);return a;}
function AKS(a){return;}
function AGS(b){var c,d,e,f,g,h,i,j,k,l,m;c=QI(b);d=Mw(c);e=$rt_createByteArray(8);Lw(d,e);if(!DT(B(182),AT2(e,TW(B(18))))){c=new B3;Bp(c,B(183));M(c);}FV(d);f=new Nh;d=new SL;g=new QG;Mp(g);g.p8=0;h=O8(g,15,0);if(h){c=new Nl;f=new Bd;Bb(f);Bp(c,O(H(H(Be(f,h),B(11)),g.bQ)));M(c);}O9(d,c);d.oC=0;d.nd=0;d.A0=1;d.AH=0;d.uk=$rt_createByteArray(1);d.CY=$rt_createByteArray(512);d.gg=g;d.mV=$rt_createByteArray(512);d.A0=1;d.AH=1;ADq(f,d);g=A0G();while(true){d=FV(f);if(!DT(B(184),d)){if(AFo(f)<=0&&DT(B(185),d))return;c
=new B3;Bp(c,B(183));M(c);}i=FV(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);Lw(f,j);l=GR(f);m=$rt_createByteArray(l);Lw(f,m);if(Dv(A3K,i))continue;a:{Zi(g,m,0,l);AGQ(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){l=0;while(l<h){if(b[l]!=e[l]){h=0;break a;}l=l+1|0;}h=1;break a;}}h=0;}}if(!h){c=new B3;f=new Bd;Bb(f);Bp(c,O(H(H(f,B(186)),i)));M(c);}BK(A3K,i,m);if(!DT(B(187),FV(f)))break;}c=new B3;Bp(c,B(183));M(c);}
function U2(){A3K=CY();}
function B3(){Bz.call(this);}
function A4M(){var a=new B3();AUA(a);return a;}
function AUA(a){R(a);}
function MN(){GB.call(this);}
function A4N(){var a=new MN();AV_(a);return a;}
function AV_(a){Bb(a);}
function ACt(a,b,c,d){RN(a,a.dm,b,c,d);return a;}
function RN(a,b,c,d,e){var f,g,h,i;CK(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.M.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function AOY(a,b,c,d,e){return RN(a,b,c,d,e);}
function AUT(a,b){KS(a,b);}
function EN(){}
function R9(){E.call(this);}
function A4O(){var a=new R9();ARe(a);return a;}
function ARe(a){return;}
function Hk(){E.call(this);this.kK=0;}
var A4P=null;var A4Q=null;function ATo(a){var b=new Hk();Wr(b,a);return b;}
function Wr(a,b){a.kK=b;}
function BC(b){var c;if(b>=A4Q.data.length)return ATo(b);c=A4Q.data[b];if(c===null){c=ATo(b);A4Q.data[b]=c;}return c;}
function AZl(a,b){if(a===b)return 1;return b instanceof Hk&&b.kK==a.kK?1:0;}
function AZa(a){return a.kK;}
function Iz(b){return (b&64512)!=55296?0:1;}
function I3(b){return (b&64512)!=56320?0:1;}
function SX(b){return !Iz(b)&&!I3(b)?0:1;}
function Kv(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IV(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ih(b){return (56320|b&1023)&65535;}
function LU(b){return N9(b)&65535;}
function N9(b){return AKp(b).toLowerCase().charCodeAt(0);}
function N0(b){return AKp(b).toUpperCase().charCodeAt(0);}
function Hy(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function YI(a,b){return a.kK-b.kK|0;}
function AT8(a,b){return YI(a,b);}
function ADK(){A4P=K($rt_charcls());A4Q=N(Hk,128);}
function Hw(){var a=this;E.call(a);a.cy=null;a.Aq=0;}
function AEU(a){return 1;}
function AX9(a,b){return;}
function Q6(){var a=this;Hw.call(a);a.tG=0;a.tI=0;a.tH=0;a.gC=0.0;a.lq=0.0;a.mX=0.0;a.lS=0;a.yc=null;a.ys=null;}
function Oj(a,b){b.q=(-180.0);}
function AYX(a){return;}
function AAP(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cy.w;$p=1;case 1:$z=X4(e,b,c,d);if(C()){break _;}f=$z;e=a.cy.w;$p=2;case 2:$z=Z5(e,b,c,d);if(C()){break _;}g=$z;e=a.cy.cG;$p=3;case 3:Z0(e,b,c,d);if(C()){break _;}e=a.cy.w;J();h=A3U.data;$p=4;case 4:$z=X4(e,b,c,d);if(C()){break _;}i=$z;j=h[i];$p=5;case 5:$z=Z5(e,b,c,d);if(C()){break _;}i=$z;k=
0;$p=6;case 6:$z=AJ0(e,b,c,d,k);if(C()){break _;}k=$z;if(j!==null&&k){$p=7;continue _;}e=IS(a.cy.e);if(e!==null){NR(e,f,b,c,d);if(!e.m)H1(a.cy.e);}if(k&&K0(a.cy.e,A3U.data[f])){e=A3U.data[f];j=a.cy.w;$p=8;continue _;}return k;case 7:j.l4(e,b,c,d,i);if(C()){break _;}e=IS(a.cy.e);if(e!==null){NR(e,f,b,c,d);if(!e.m)H1(a.cy.e);}if(k&&K0(a.cy.e,A3U.data[f])){e=A3U.data[f];j=a.cy.w;$p=8;continue _;}return k;case 8:e.Ex(j,b,c,d,g);if(C()){break _;}return k;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAm(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cy.w;$p=1;case 1:$z=X4(e,b,c,d);if(C()){break _;}f=$z;if(f>0&&a.gC===0.0){J();e=A3U.data[f];g=a.cy.w;h=a.cy.e;$p=3;continue _;}if(f<=0)return;J();e=A3U.data[f];g=a.cy.e;$p=2;case 2:$z=WP(e,g);if(C()){break _;}i=$z;if(i<1.0)return;$p=4;continue _;case 3:e.pn(g,b,c,d,h);if(C()){break _;}if(f<=0)return;J();e=A3U.data[f];g
=a.cy.e;$p=2;continue _;case 4:AAP(a,b,c,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AGx(a){a.gC=0.0;a.lS=0;}
function UA(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.lS>0)a.lS=a.lS-1|0;else{if(b==a.tG&&c==a.tI&&d==a.tH){f=a.cy.w;$p=1;continue _;}a.gC=0.0;a.lq=0.0;a.mX=0.0;a.tG=b;a.tI=c;a.tH=d;}return;case 1:$z=X4(f,b,c,d);if(C()){break _;}g=$z;if(!g)return;J();f=A3U.data[g];h=a.gC;i=a.cy.e;$p=2;case 2:$z=WP(f,i);if(C()){break _;}j=$z;a.gC=h+j;a.mX=a.mX+1.0;if(a.gC<1.0)return;$p
=3;case 3:AAP(a,b,c,d);if(C()){break _;}a.gC=0.0;a.lq=0.0;a.mX=0.0;a.lS=5;return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,$p);}
function FS(a,b){var c;if(a.gC<=0.0){a.cy.mA.AN=0.0;a.cy.dB.rS=0.0;}else{c=a.lq+(a.gC-a.lq)*b;a.cy.mA.AN=c;a.cy.dB.rS=c;}}
function ASI(a){return 4.0;}
function AVk(a,b){return;}
function ADU(a){var b,c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lq=a.gC;b=a.yc;c=a.cy.w;$p=1;case 1:W$(b,c);if(C()){break _;}b=a.ys;c=a.cy.w;$p=2;case 2:W$(b,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,$p);}
function Pz(){var a=this;E.call(a);a.cI=0.0;a.zv=0.0;a.h4=0;a.cz=0.0;a.zE=0.0;a.kv=0.0;a.q0=Long_ZERO;a.p9=Long_ZERO;a.mf=0.0;}
function E0(a){var b,c,d,e,f;b=B1();c=Long_sub(b,a.q0);d=Long_div(D6(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.p9));a.mf=a.mf+(e-a.mf)*0.20000000298023224;a.q0=b;a.p9=d;}if(Long_lt(c,Long_ZERO)){a.q0=b;a.p9=d;}f=Long_toNumber(d)/1000.0;e=(f-a.zv)*a.mf;a.zv=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.kv=a.kv+e*a.zE*a.cI;a.h4=a.kv|0;a.kv=a.kv-a.h4;if(a.h4>10)a.h4=10;a.cz=a.kv;}
function RO(){}
function O6(){var a=this;E.call(a);a.pk=null;a.ft=null;a.mD=null;a.mS=Long_ZERO;a.ma=0;}
function AJr(a,b){a.ma=0;OW(a,b);}
function Uw(a,b){a.ma=1;OW(a,a.mD);}
function OW(a,b){var c,d,e;a:{if(!a.ft.gK){if(a.ma)break a;b=new I8;R(b);M(b);}a.mD=b;c=EU(a.ft.b5,a.ft.bw);d=c.e$;e=c.e6;DA(256);CU(5889);CT();G7(0.0,d,e,0.0,100.0,300.0);CU(5888);CT();Br(0.0,0.0,(-200.0));}}
function AMd(a,b){var c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.ft.gK){if(a.ma)return;b=new I8;R(b);M(b);}a.mS=Long_ZERO;a.pk=b;c=(-1);$p=1;case 1:Tz(a,c);if(C()){break _;}a.mS=Long_ZERO;return;default:Eq();}}CL().s(a,b,c,$p);}
function Tz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.ft.gK){if(a.ma)break a;c=new I8;R(c);M(c);}d=B1();if(Long_ge(Long_sub(d,a.mS),Long_fromInt(20))){a.mS=d;c=EU(a.ft.b5,a.ft.bw);e=c.e$;f=c.e6;DA(256);CU(5889);CT();g=e;h=f;G7(0.0,g,h,0.0,100.0,300.0);CU(5888);CT();Br(0.0,
0.0,(-200.0));DA(16640);Bv();i=A3Q;c=a.ft.bi;j=B(157);$p=1;continue _;}}return;case 1:$z=ACB(c,j);if(C()){break _;}k=$z;Ce(3553,k);Bu(i);Eb(i,4210752);l=f/32.0;F(i,0.0,h,0.0,0.0,l);m=e/32.0;F(i,g,h,0.0,m,l);F(i,g,0.0,0.0,m,0.0);F(i,0.0,0.0,0.0,0.0,0.0);Bm(i);if(b>=0){n=(e/2|0)-50|0;o=(f/2|0)+16|0;X(3553);Bu(i);Eb(i,8421504);g=n;p=o;Ba(i,g,p,0.0);m=o+2|0;Ba(i,g,m,0.0);q=n+100|0;Ba(i,q,m,0.0);Ba(i,q,p,0.0);Eb(i,8454016);Ba(i,g,p,0.0);Ba(i,g,m,0.0);q=n+b|0;Ba(i,q,m,0.0);Ba(i,q,p,0.0);Bm(i);V(3553);}c=a.ft.ey;i
=a.mD;b=(e-Db(a.ft.ey,a.mD)|0)/2|0;r=(f/2|0)-4|0;Cn(c,i,b,r-16|0,16777215);Cn(a.ft.ey,a.pk,(e-Db(a.ft.ey,a.pk)|0)/2|0,r+8|0,16777215);$p=2;case 2:AOj();if(C()){break _;}try{$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){}else{throw $$e;}}return;case 3:b:{try{Tu();if(C()){break _;}break b;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){}else{throw $$e;}}}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function Pk(){var a=this;E.call(a);a.y=null;a.oP=0;a.kE=0.0;a.hI=null;a.rU=0;a.oq=null;a.kb=null;a.DY=0;a.DX=0;a.ok=null;a.db=0.0;a.dz=0.0;a.dp=0.0;a.mP=0.0;a.kR=0.0;}
function ADH(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mP=a.kR;b=a.y.w;c=I(a.y.e.c);d=I(a.y.e.i);e=I(a.y.e.d);$p=1;case 1:$z=AHP(b,c,d,e);if(C()){break _;}f=$z;g=(3-a.y.r.g9|0)/3.0;h=f*(1.0-g)+g;a.kR=a.kR+(h-a.kR)*0.10000000149011612;a.rU=a.rU+1|0;AD3(a.hI);if(a.y.cv)
{b=a.y.e;i=a.y.w;d=I(b.c);j=I(b.i);k=I(b.d);l=4;m=0;n=63;e=S(64,j+4|0);j=S(64,j-4|0);o=64.0999984741211;if(m<50){p=(d+D(a.kb,9)|0)-l|0;q=(k+D(a.kb,9)|0)-l|0;$p=2;continue _;}}return;case 2:$z=X4(i,p,n,q);if(C()){break _;}c=$z;if(e<=0&&j>=0){f=L(a.kb);g=L(a.kb);if(c>0){b=a.y.cG;r=new Ic;s=p+f;J();Qq(r,i,s,o-A3U.data[c].cm,q+g);DR(b,r);}}m=m+1|0;if(m>=50)return;p=(d+D(a.kb,9)|0)-l|0;q=(k+D(a.kb,9)|0)-l|0;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function Lp(a,b){var c,d,e,f;c=a.y.e;d=c.bH;e=c.c-c.bH;f=b;return BR(d+e*f,c.ct+(c.i-c.ct)*f,c.bG+(c.d-c.bG)*f);}
function AGB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=c.P+(c.E-c.P)*b;e=c.K+(c.q-c.K)*b;f=Lp(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=Bx(g);i=Bl(g);g= -d*0.01745329238474369;j= -Bx(g);g=Bl(g);k=i*j;l
=h*j;m=4.0;n=k;o=n*m;p=g;q=p*m;r=l;s=C3(f,o,q,r*m);t=a.y;u=a.y.w;$p=1;case 1:$z=AEd(u,f,s);if(C()){break _;}u=$z;t.bV=u;f=Lp(a,b);if(a.y.bV!==null)m=Dh(a.y.bV.fO,f);if(a.y.ce instanceof C_)m=32.0;else if(m>3.0)m=3.0;n=n*m;p=p*m;r=r*m;s=C3(f,n,p,r);a.oq=null;t=a.y.w;u=HK(c.G,n,p,r);$p=2;case 2:$z=Zc(t,c,u);if(C()){break _;}t=$z;n=0.0;v=0;while(v<t.p){u=Z(t,v);if(u.ki()){w=NX(Da(u.G,0.10000000149011612,0.10000000149011612,0.10000000149011612),f,s);if(w!==null){p=Dh(f,w.fO);if(!(p>=n&&n!==0.0)){a.oq=u;n=p;}}}v
=v+1|0;}if(a.oq!==null&&!(a.y.ce instanceof C_))a.y.bV=ASE(a.oq);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function Zb(a,b){var c,d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=70.0;e=A4R;$p=1;case 1:$z=ABS(c,e);if(C()){break _;}f=$z;if(f)d=60.0;if(c.bI<=0)d=d/((1.0-500.0/(c.cD+b+500.0))*2.0+1.0);return d;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Kc(a,b){var c,d,e;c=a.y.e;d=c.c$-b;if(c.bI<=0)Bq(40.0-8000.0/(c.cD+b+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.A$;b=Bl(b*b*b*b*3.1415927410125732);e=c.jB;Bq( -e,0.0,1.0,0.0);Bq( -b*14.0,0.0,0.0,1.0);Bq(e,0.0,1.0,0.0);}}
function Hl(a,b){var c,d,e,f,g;if(!a.y.r.cf){c=a.y.e;d=c.gp-c.r0;e=c.gp+d*b;f=c.oS+(c.jP-c.oS)*b;g=c.jS+(c.il-c.jS)*b;d=e*3.1415927410125732;Br(Bl(d)*f*0.5, -GK(Bx(d)*f),0.0);Bq(Bl(d)*f*3.0,0.0,0.0,1.0);Bq(GK(Bx(d+0.20000000298023224)*f)*5.0,1.0,0.0,0.0);Bq(g,1.0,0.0,0.0);}}
function AC9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=c.bH;e=c.c-c.bH;f=b;g=d+e*f;h=c.ct+(c.i-c.ct)*f;i=c.bG+(c.d-c.bG)*f;if(!a.y.r.cf)Br(0.0,0.0,(-0.10000000149011612));else{j=4.0;d= -Bl(c.q/180.0*3.1415927410125732)*Bx(c.E
/180.0*3.1415927410125732)*j;e=Bx(c.q/180.0*3.1415927410125732)*Bx(c.E/180.0*3.1415927410125732)*j;f= -Bl(c.E/180.0*3.1415927410125732)*j;k=0;l=g-d;d=h-f;f=i-e;if(k<8){m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.y.w;e=m;q=g+e;r=n;s=h+r;t=o;u=BR(q,s,i+t);v=BR(l+e+t,d+r,f+t);$p=1;continue _;}Br(0.0,0.0, -j);}Bq(c.P+(c.E-c.P)*b,1.0,0.0,0.0);Bq(c.K+(c.q-c.K)*b+180.0,0.0,1.0,0.0);return;case 1:$z=AEd(p,u,v);if(C()){break _;}u
=$z;if(u!==null){q=Dh(u.fO,BR(g,h,i));if(q<j)j=q;}k=k+1|0;if(k>=8){Br(0.0,0.0, -j);Bq(c.P+(c.E-c.P)*b,1.0,0.0,0.0);Bq(c.K+(c.q-c.K)*b+180.0,0.0,1.0,0.0);return;}m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.y.w;e=m;q=g+e;r=n;s=h+r;t=o;u=BR(q,s,i+t);v=BR(l+e+t,d+r,f+t);continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AAY(a,b,c){var d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CT();if(a.y.r.d5)Br(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);BU();Kc(a,b);if(a.y.r.ik)Hl(a,b);if(!a.y.r.cf){d=a.hI;$p=1;continue _;}By();if(a.y.r.cf){if(a.y.r.ik)Hl(a,b);return;}d=a.hI;$p=2;continue _;case 1:Yq(d,b);if(C()){break _;}By();if(a.y.r.cf){if(a.y.r.ik)Hl(a,b);return;}d=a.hI;$p=2;case 2:XG(d,b);if(C()){break _;}Kc(a,b);if(a.y.r.ik)Hl(a,b);return;default:Eq();}}CL().s(a,
b,c,d,$p);}
function AA4(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.oP&&!LZ()){c=a.y;$p=1;continue _;}a.oP=LZ();Y();d=A24;A24=0.0;e=d|0;d=A25;A25=0.0;f=d|0;g=1;if(a.y.r.lJ)g=(-1);if(a.y.bj&&a.y.w!==null)Te(a.y.e,e,Bg(f,g));if(!a.y.he){c=EU(a.y.b5,a.y.bw);f=c.e$;e=c.e6;h=Bg(A22,f)/a.y.b5|0;i=(e-(Bg(A23,e)/a.y.bw|0)|0)-1|0;if(a.y.w!==null){$p=2;continue _;}Gc(0,0,a.y.b5,a.y.bw);Gp(0.0,
0.0,0.0,0.0);DA(16640);CU(5889);CT();CU(5888);CT();JN(a);if(a.y.A!==null){DA(256);c=a.y.A;$p=3;continue _;}}return;case 1:AFV(c);if(C()){break _;}a.oP=LZ();Y();d=A24;A24=0.0;e=d|0;d=A25;A25=0.0;f=d|0;g=1;if(a.y.r.lJ)g=(-1);if(a.y.bj&&a.y.w!==null)Te(a.y.e,e,Bg(f,g));if(!a.y.he){c=EU(a.y.b5,a.y.bw);f=c.e$;e=c.e6;h=Bg(A22,f)/a.y.b5|0;i=(e-(Bg(A23,e)/a.y.bw|0)|0)-1|0;if(a.y.w!==null){$p=2;continue _;}Gc(0,0,a.y.b5,a.y.bw);Gp(0.0,0.0,0.0,0.0);DA(16640);CU(5889);CT();CU(5888);CT();JN(a);if(a.y.A!==null){DA(256);c
=a.y.A;$p=3;continue _;}}return;case 2:VX(a,b);if(C()){break _;}c=a.y.mA;g=a.y.A===null?0:1;$p=4;continue _;case 3:c.hB(h,i,b);if(C()){break _;}return;case 4:AKb(c,b,g,h,i);if(C()){break _;}if(a.y.A===null)return;DA(256);c=a.y.A;$p=3;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function VX(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AGB(a,b);if(C()){break _;}c=a.y.e;d=a.y.dB;e=a.y.cG;f=c.b6;g=c.c-c.b6;h=b;i=f+g*h;f=c.bP+(c.i-c.bP)*h;g=c.b7+(c.d-c.b7)*h;j=0;if(j>=2){ER(1,1,1,0);return;}if(a.y.r.d5){if(j)ER(1,0,0,0);else ER(0,1,1,0);}Gc(0,0,a.y.b5,a.y.bw);$p=2;case 2:Zr(a,
b);if(C()){break _;}DA(16640);V(2884);a.kE=256>>a.y.r.g9;CU(5889);CT();if(a.y.r.d5)Br( -((j*2|0)-1|0)*0.07000000029802322,0.0,0.0);$p=3;case 3:$z=Zb(a,b);if(C()){break _;}k=$z;AJ1(k,a.y.b5/a.y.bw,0.05000000074505806,a.kE);CU(5888);CT();if(a.y.r.d5)Br(((j*2|0)-1|0)*0.10000000149011612,0.0,0.0);Kc(a,b);if(a.y.r.ik)Hl(a,b);$p=4;case 4:AC9(a,b);if(C()){break _;}OY();if(a.y.r.g9<2){l=(-1);$p=13;continue _;}V(2912);l=1;$p=5;case 5:AMp(a,l);if(C()){break _;}m=A09();AIP(m,i,f,g);ALV(a.y.dB,m,b);n=a.y.dB;l=0;$p=6;case 6:ADf(n,
c,l);if(C()){break _;}l=0;$p=7;case 7:AMp(a,l);if(C()){break _;}V(2912);l=3553;n=a.y.bi;o=B(171);$p=8;case 8:$z=ACB(n,o);if(C()){break _;}p=$z;Ce(l,p);Dr();Rz(d,c,0,h);Gm();n=Lp(a,b);$p=9;case 9:X9(d,n,m,b);if(C()){break _;}$p=10;case 10:Xr(e,c,b);if(C()){break _;}Dr();l=0;$p=11;case 11:AMp(a,l);if(C()){break _;}$p=12;case 12:WN(e,c,b);if(C()){break _;}if(a.y.bV!==null){m=A4R;$p=17;continue _;}C0(770,771);l=0;$p=15;continue _;case 13:AMp(a,l);if(C()){break _;}$p=14;case 14:YG(d,b);if(C()){break _;}V(2912);l
=1;$p=5;continue _;case 15:AMp(a,l);if(C()){break _;}V(3042);X(2884);l=3553;m=a.y.bi;n=B(171);$p=16;case 16:$z=ACB(m,n);if(C()){break _;}p=$z;Ce(l,p);Rz(d,c,1,h);Fz(1);V(2884);X(3042);if(a.y.bV!==null){m=A4R;$p=18;continue _;}X(2912);if(a.y.cv){$p=21;continue _;}l=0;$p=24;continue _;case 17:$z=ABS(c,m);if(C()){break _;}l=$z;if(!l){C0(770,771);l=0;$p=15;continue _;}X(3008);m=a.y.bV;l=0;n=DD(c.F);$p=19;continue _;case 18:$z=ABS(c,m);if(C()){break _;}l=$z;if(!l){X(3008);m=a.y.bV;l=0;n=DD(c.F);$p=22;continue _;}X(2912);if
(a.y.cv){$p=21;continue _;}l=0;$p=24;continue _;case 19:AAX(d,c,m,l,n,b);if(C()){break _;}m=a.y.bV;l=0;n=DD(c.F);$p=20;case 20:ABt(d,c,m,l,n,b);if(C()){break _;}V(3008);C0(770,771);l=0;$p=15;continue _;case 21:TJ(a,b);if(C()){break _;}l=0;$p=24;continue _;case 22:AAX(d,c,m,l,n,b);if(C()){break _;}n=a.y.bV;l=0;m=DD(c.F);$p=23;case 23:ABt(d,c,n,l,m,b);if(C()){break _;}V(3008);X(2912);if(a.y.cv){$p=21;continue _;}l=0;$p=24;case 24:AMp(a,l);if(C()){break _;}V(2912);$p=25;case 25:Uz(d,b);if(C()){break _;}X(2912);l
=1;$p=26;case 26:AMp(a,l);if(C()){break _;}DA(256);$p=27;case 27:AAY(a,b,j);if(C()){break _;}if(!a.y.r.d5)return;j=j+1|0;if(j>=2){ER(1,1,1,0);return;}if(a.y.r.d5){if(j)ER(1,0,0,0);else ER(0,1,1,0);}Gc(0,0,a.y.b5,a.y.bw);$p=2;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function TJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=I(c.c);e=I(c.i);f=I(c.d);Bv();g=A3Q;X(2884);B_(0.0,1.0,0.0);V(3042);C0(770,
771);h=3553;i=a.y.bi;j=B(188);$p=1;case 1:$z=ACB(i,j);if(C()){break _;}k=$z;Ce(h,k);k=d-5|0;d=d+5|0;h=f-5|0;l=f+5|0;m=e-5|0;n=e+5|0;e=S(m,64);o=S(n,64);while(k<=d){p=h;while(p<=l){q=e<0?64:m;r=o<0?64:n;if(q!=r){s=((((a.rU+(k*3121|0)|0)+Bg(p,418711)|0)%32|0)+b)/32.0;t=k+0.5-c.c;u=p+0.5-c.d;v=B7(t*t+u*u)/5.0;BN(1.0,1.0,1.0,(1.0-v*v)*0.699999988079071);Bu(g);u=k+0|0;w=q;x=p+0|0;v=q*2.0/8.0;y=s*2.0;z=v+y;F(g,u,w,x,0.0,z);ba=k+1|0;bb=p+1|0;F(g,ba,w,bb,2.0,z);bc=r;bd=r*2.0/8.0+y;F(g,ba,bc,bb,2.0,bd);F(g,u,bc,x,0.0,
bd);F(g,u,w,bb,0.0,z);F(g,ba,w,x,2.0,z);F(g,ba,bc,x,2.0,bd);F(g,u,bc,bb,0.0,bd);Bm(g);}p=p+1|0;}k=k+1|0;}V(2884);X(3042);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function JN(a){var b,c,d;b=EU(a.y.b5,a.y.bw);c=b.e$;d=b.e6;DA(256);CU(5889);CT();G7(0.0,c,d,0.0,1000.0,3000.0);CU(5888);CT();Br(0.0,0.0,(-2000.0));}
function Zr(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.w;d=a.y.e;e=1.0-ATQ(1.0/(4-a.y.r.g9|0),0.25);f=Mq(c,b);g=f.t;h=f.v;i=f.s;j=YV(c,b);a.db=j.t;a.dz=j.v;a.dp=j.s;a.db=a.db+(g-a.db)*e;a.dz=a.dz+(h-a.dz)*e;a.dp=a.dp+(i-a.dp)*e;c=A4R;$p=1;case 1:$z=ABS(d,c);if(C()){break _;}k=$z;if(k){a.db=0.019999999552965164;a.dz
=0.019999999552965164;a.dp=0.20000000298023224;e=a.mP+(a.kR-a.mP)*b;a.db=a.db*e;a.dz=a.dz*e;a.dp=a.dp*e;if(a.y.r.d5){l=(a.db*30.0+a.dz*59.0+a.dp*11.0)/100.0;m=(a.db*30.0+a.dz*70.0)/100.0;n=(a.db*30.0+a.dp*70.0)/100.0;a.db=l;a.dz=m;a.dp=n;}Gp(a.db,a.dz,a.dp,0.0);return;}c=A4S;$p=2;case 2:$z=ABS(d,c);if(C()){break _;}k=$z;if(k){a.db=0.6000000238418579;a.dz=0.10000000149011612;a.dp=0.0;}e=a.mP+(a.kR-a.mP)*b;a.db=a.db*e;a.dz=a.dz*e;a.dp=a.dp*e;if(a.y.r.d5){l=(a.db*30.0+a.dz*59.0+a.dp*11.0)/100.0;m=(a.db*30.0+a.dz
*70.0)/100.0;n=(a.db*30.0+a.dp*70.0)/100.0;a.db=l;a.dz=m;a.dp=n;}Gp(a.db,a.dz,a.dp,0.0);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AMp(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=a.db;e=a.dz;f=a.dp;D2(a.ok);Cu(Cu(Cu(Cu(a.ok,d),e),f),1.0);FA(a.ok);g=a.ok;BO();A4T=HU(g);A4U=HU(g);A4V=HU(g);A4W=HU(g);B_(0.0,(-1.0),0.0);BN(1.0,1.0,1.0,1.0);g=A4R;$p=1;case 1:$z=ABS(c,g);if(C()){break _;}h=$z;if(h){Ki(2917,2048);FP(2914,0.10000000149011612);V(2903);return;}g=A4S;$p=2;case 2:$z=ABS(c,g);if(C()){break _;}h
=$z;if(h){Ki(2917,2048);FP(2914,2.0);}else{Ki(2917,9729);FP(2915,a.kE*0.25);FP(2916,a.kE);if(b<0){FP(2915,0.0);FP(2916,a.kE*0.800000011920929);}}V(2903);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function DN(){E.call(this);this.vn=0.0;}
function KA(){var a=this;DN.call(a);a.hW=null;a.j2=null;a.nJ=null;a.dv=null;a.dh=null;a.h8=null;a.gt=null;}
function AZj(){var a=new KA();I5(a);return a;}
function Tm(a){var b=new KA();ADF(b,a);return b;}
function A4X(a,b){var c=new KA();ALH(c,a,b);return c;}
function I5(a){ADF(a,0.0);}
function ADF(a,b){ALH(a,b,0.0);}
function ALH(a,b,c){var d,e;a.hW=BF(0,0);BA(a.hW,(-4.0),(-8.0),(-4.0),8,8,8,b);d=a.hW;e=0.0+c;BD(d,0.0,e,0.0);a.j2=BF(32,0);BA(a.j2,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BD(a.j2,0.0,e,0.0);a.nJ=BF(16,16);BA(a.nJ,(-4.0),0.0,(-2.0),8,12,4,b);BD(a.nJ,0.0,e,0.0);a.dv=BF(40,16);BA(a.dv,(-3.0),(-2.0),(-2.0),4,12,4,b);d=a.dv;e=2.0+c;BD(d,(-5.0),e,0.0);a.dh=BF(40,16);a.dh.kp=1;BA(a.dh,(-1.0),(-2.0),(-2.0),4,12,4,b);BD(a.dh,5.0,e,0.0);a.h8=BF(0,16);BA(a.h8,(-2.0),0.0,(-2.0),4,12,4,b);d=a.h8;c=12.0+c;BD(d,(-2.0),c,0.0);a.gt
=BF(0,16);a.gt.kp=1;BA(a.gt,(-2.0),0.0,(-2.0),4,12,4,b);BD(a.gt,2.0,c,0.0);}
function AYV(a,b,c,d,e,f,g){a.mU(b,c,d,e,f,g);B2(a.hW,g);B2(a.nJ,g);B2(a.dv,g);B2(a.dh,g);B2(a.h8,g);B2(a.gt,g);B2(a.j2,g);}
function ADI(a,b,c,d,e,f,g){var h;a.hW.bL=e/57.2957763671875;a.hW.bM=f/57.2957763671875;a.j2.bL=a.hW.bL;a.j2.bM=a.hW.bM;h=a.dv;e=b*0.6661999821662903;f=e+3.1415927410125732;h.bM=Bx(f)*2.0*c;a.dv.bJ=(Bx(b*0.23119999468326569)+1.0)*1.0*c;a.dh.bM=Bx(e)*2.0*c;a.dh.bJ=(Bx(b*0.28119999170303345)-1.0)*1.0*c;a.h8.bM=Bx(e)*1.399999976158142*c;a.gt.bM=Bx(f)*1.399999976158142*c;h=a.dv;c=h.bJ;b=d*0.09000000357627869;h.bJ=c+Bx(b)*0.05000000074505806+0.05000000074505806;h=a.dh;h.bJ=h.bJ-(Bx(b)*0.05000000074505806+0.05000000074505806);h
=a.dv;b=h.bM;c=d*0.06700000166893005;h.bM=b+Bl(c)*0.05000000074505806;h=a.dh;h.bM=h.bM-Bl(c)*0.05000000074505806;}
function DY(){var a=this;E.call(a);a.c9=null;a.EE=0;a.lh=0;a.DI=0;a.uB=0;}
function A4Y(a){var b=new DY();Gt(b,a);return b;}
function Gt(a,b){a.c9=$rt_createByteArray(1024);a.lh=0;a.DI=0;a.uB=1;a.EE=b;}
function Wu(){var a=this;DY.call(a);a.nZ=null;a.rC=null;a.mz=null;a.p3=null;a.u6=0;}
function A0j(){var a=new Wu();AZo(a);return a;}
function AZo(a){J();Gt(a,A4Z.W);a.nZ=$rt_createFloatArray(256);a.rC=$rt_createFloatArray(256);a.mz=$rt_createFloatArray(256);a.p3=$rt_createFloatArray(256);a.u6=0;}
function AQL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;a.u6=a.u6+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=b-1|0;while(e<=(b+1|0)){f=e&15;g=c&15;d=d+a.nZ.data[f+(g*16|0)|0];e=e+1|0;}h=a.rC.data;i=b+(c*16|0)|0;h[i]=d/3.299999952316284+a.mz.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}c=0;while(c<16){j=0;while(j<16){k=a.mz.data;b=c+(j*16|0)|0;k[b]=k[b]+a.p3.data[b]*0.05000000074505806;if(a.mz.data[b]<0.0)a.mz.data[b]=0.0;k=a.p3.data;k[b]=k[b]-0.10000000149011612;if(BI()<0.05)a.p3.data[b]=0.5;j=j+1|0;}c=c+1|0;}k=a.rC;a.rC
=a.nZ;a.nZ=k;c=0;while(c<256){d=a.nZ.data[c];if(d>1.0)d=1.0;if(d<0.0)d=0.0;l=d*d;i=32.0+l*32.0|0;m=50.0+l*64.0|0;n=255;o=146.0+l*50.0|0;if(a.lh){b=i*30|0;i=((b+(m*59|0)|0)+2805|0)/100|0;m=(b+(m*70|0)|0)/100|0;n=(b+17850|0)/100|0;}k=a.c9.data;j=c*4|0;k[j+0|0]=i<<24>>24;a.c9.data[j+1|0]=m<<24>>24;a.c9.data[j+2|0]=n<<24>>24;a.c9.data[j+3|0]=o<<24>>24;c=c+1|0;}}
function AFp(){var a=this;DY.call(a);a.oe=null;a.o$=null;a.ix=null;a.qK=null;}
function A0H(){var a=new AFp();ASW(a);return a;}
function ASW(a){J();Gt(a,A40.W);a.oe=$rt_createFloatArray(256);a.o$=$rt_createFloatArray(256);a.ix=$rt_createFloatArray(256);a.qK=$rt_createFloatArray(256);}
function AQW(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bl(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bl(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){h=(g+e|0)&15;j=(i+f|0)&15;d=d+a.oe.data[h+(j*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.o$.data;l=b+(c*16|0)|0;d=d/10.0;m=a.ix.data;e=(b+0|0)&15;n=((c+0|0)&15)*16|0;o=m[e+n|0];m=a.ix.data;h=h&15;o=o+m[h+n|0];m=a.ix.data;c=c+1|0;n=(c&15)*16|0;k[l]=d+(o+m[h+n
|0]+a.ix.data[e+n|0])/4.0*0.800000011920929;m=a.ix.data;m[l]=m[l]+a.qK.data[l]*0.009999999776482582;if(a.ix.data[l]<0.0)a.ix.data[l]=0.0;m=a.qK.data;m[l]=m[l]-0.05999999865889549;if(BI()<0.005)a.qK.data[l]=1.5;}b=b+1|0;}m=a.o$;a.o$=a.oe;a.oe=m;n=0;while(n<256){d=a.oe.data[n]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;h=d*100.0+155.0|0;o=d*d;j=o*255.0|0;l=o*d*d*128.0|0;if(a.lh){e=h*30|0;h=((e+(j*59|0)|0)+(l*11|0)|0)/100|0;j=(e+(j*70|0)|0)/100|0;l=(e+(l*70|0)|0)/100|0;}m=a.c9.data;b=n*4|0;m[b+0|0]=h<<24>>24;a.c9.data[b
+1|0]=j<<24>>24;a.c9.data[b+2|0]=l<<24>>24;a.c9.data[b+3|0]=(-1);n=n+1|0;}}
function Kb(){E.call(this);}
var A41=null;var A42=null;function A43(){var a=new Kb();ARu(a);return a;}
function ARu(a){return;}
function Ds(){if(A41===null)A41=AQR(new S9,0);return A41;}
function CO(){if(A42===null)A42=AQR(new M8,0);return A42;}
function Di(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AJL(b)&&(e+f|0)<=AJL(d)){a:{b:{if(b!==d){g=IZ(C4(b));h=IZ(C4(d));if(g!==null&&h!==null){if(g===h)break b;if(!E9(g)&&!E9(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!QR(h,l[k])){Rv(b,c,d,e,j);b=new Ii;R(b);M(b);}j=j+1|0;k=m;}Rv(b,c,d,e,f);return;}if(!E9(g))break a;if(E9(h))break b;else break a;}b=new Ii;R(b);M(b);}}Rv(b,c,d,e,f);return;}b=new Ii;R(b);M(b);}b=new BV;R(b);M(b);}d=new EG;Bp(d,B(189));M(d);}
function Rv(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function B1(){return Long_fromNumber(new Date().getTime());}
function D6(){return Long_fromNumber(performance.now()*1000000.0);}
function R5(){Fs.call(this);this.vK=null;}
function A44(a,b){var c=new R5();AJA(c,a,b);return c;}
function AJA(a,b,c){Qs(a,c);a.vK=b;a.AI=1;P6(a);}
function AEQ(a){var b,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(a.vK.gK){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Eh){}else{throw $$e;}}}return;case 1:a:{try{AFr(b);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Eh){}else{throw $$e;}}}while(a.vK.gK){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Eh){}else{throw $$e;}}}return;default:Eq();}}CL().s(a,
b,$p);}
function Pq(){}
function G3(){}
function Fr(){E.call(this);}
function Nc(a){return a.gJ?0:1;}
function Oa(a,b){var c,d;c=a.jQ();a:{while(c.oE()){b:{d=c.lu();if(d!==null){if(!d.dQ(b))break b;else break a;}if(b===null)break a;}}return 0;}return 1;}
function WH(a){var b,c,d,e,f;b=N(E,Hn(a));c=b.data;d=0;e=Mb(a);while(Fh(e)){f=d+1|0;c[d]=Jz(e);d=f;}return b;}
function AFH(a,b){var c,d,e,f,g;c=b.data;d=a.p;e=c.length;if(e<d)b=Z3(IZ(C4(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Nf(a);while(RS(f)){c=b.data;g=e+1|0;c[e]=SJ(f);e=g;}return b;}
function Dq(a,b){var c,d;c=0;d=b.jQ();while(d.oE()){if(!a.q1(d.lu()))continue;c=1;}return c;}
function Fk(a,b){var c,d;c=0;d=Nf(a);while(RS(d)){if(b.pO(SJ(d))){AGT(d);c=1;}}return c;}
function Iu(){}
function Fl(){Fr.call(this);this.d8=0;}
function EK(a,b){Z9(a,a.gJ,b);return 1;}
function Nf(a){var b;b=new Qa;b.j3=a;b.vL=b.j3.d8;b.qD=b.j3.p;b.lX=(-1);return b;}
function WL(a,b){var c,d,e;c=a.p;d=0;a:{while(d<c){b:{e=Z(a,d);if(b!==null){if(!b.dQ(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function Kw(){Fl.call(this);}
function Z9(a,b,c){if(b>=0){W3(Sn(a,b),c);return;}c=new BV;R(c);M(c);}
function P5(a,b){var c,d;if(b>=0){c=Sn(a,b);d=FH(c);ACn(c);return d;}c=new BV;R(c);M(c);}
function AN2(a){return H5(a);}
function Mf(){}
function Tc(){}
function Z1(){var a=this;Kw.call(a);a.n5=null;a.oF=null;a.gJ=0;}
function N1(){var a=new Z1();ATT(a);return a;}
function ATT(a){return;}
function AYd(a){return a.gJ;}
function Ma(a){a.n5=null;a.oF=null;a.gJ=0;a.d8=a.d8+1|0;}
function H5(a){return AEp(a,a.n5,null,0);}
function Sn(a,b){var c,d,e;if(b<0){c=new BV;R(c);M(c);}if(b<=(a.gJ/2|0)){d=a.n5;e=0;while(e<b){d=d.gF;e=e+1|0;}return AEp(a,d,d===null?null:d.hx,b);}if(b>a.gJ){c=new BV;R(c);M(c);}c=a.oF;e=b;while(e<a.gJ){c=c.hx;e=e+1|0;}return AEp(a,c===null?null:c.gF,c,b);}
function AIE(){E.call(this);}
function Ff(){E.call(this);}
function Xd(){Ff.call(this);}
function AFt(){Ff.call(this);}
function HJ(){}
function Et(){Fr.call(this);}
function EI(a,b){var c,d;c=0;if(Hn(a)>=b.kF()){d=b.jQ();while(d.oE()){if(!Jg(a,d.lu()))continue;c=1;}}else{d=Mb(a);while(Fh(d)){if(b.pO(Jz(d))){c=1;Zg(d);}}}return c;}
function AVV(a,b){var c,d;if(a===b)return 1;if(!Pp(b,HJ))return 0;c=b;if(Hn(a)!=Hn(c))return 0;d=Mb(c);while(Fh(d)){if(Sx(a,Jz(d)))continue;else return 0;}return 1;}
function AM2(a){var b,c,d,e,f,g;b=WH(a);if(b===null)c=0;else{c=(-1515898884);d=0;while(true){e=b.data;if(d>=e.length)break;f=e[d];g=(f!==null?f.eK():0)^528111840;c=Q1(g,4)^(g>>>7|g<<25)^Q1(c,13);d=d+1|0;}}return c;}
function E1(){}
function AKI(){Et.call(this);this.kP=null;}
function Fg(){var a=new AKI();ASA(a);return a;}
function ASA(a){a.kP=CY();}
function Tb(a,b){return BK(a.kP,b,a)!==null?0:1;}
function Sx(a,b){return Dv(a.kP,b);}
function Mb(a){return Ym(AE3(a.kP));}
function Jg(a,b){return Ob(a.kP,b)===null?0:1;}
function Hn(a){return a.kP.fq;}
function J2(){}
function E7(){var a=this;E.call(a);a.uA=null;a.uJ=null;}
function XK(){var a=this;E7.call(a);a.fq=0;a.cp=null;a.gl=0;a.Bt=0.0;a.sB=0;}
function CY(){var a=new XK();AOG(a);return a;}
function AV0(a,b){return N(Hg,b);}
function AOG(a){var b;b=AB8(16);a.fq=0;a.cp=N(Hg,b);a.Bt=0.75;OS(a);}
function AB8(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Rk(a){var b;if(a.fq>0){a.fq=0;b=a.cp;Vp(b,0,b.data.length,null);a.gl=a.gl+1|0;}}
function OS(a){a.sB=a.cp.data.length*a.Bt|0;}
function Dv(a,b){return RR(a,b)===null?0:1;}
function ZC(a,b){var c,d,e;a:{if(b===null){c=0;b:while(true){if(c>=a.cp.data.length)break a;d=a.cp.data[c];while(d!==null){if(d.et===null)break b;d=d.d7;}c=c+1|0;}return 1;}c=0;c:while(true){if(c>=a.cp.data.length)break a;d=a.cp.data[c];while(d!==null){e=d.et;if(b!==e&&!b.dQ(e)?0:1)break c;d=d.d7;}c=c+1|0;}return 1;}return 0;}
function Cz(a,b){var c;c=RR(a,b);if(c===null)return null;return c.et;}
function RR(a,b){var c,d;if(b===null)c=NW(a);else{d=b.eK();c=Nm(a,b,d&(a.cp.data.length-1|0),d);}return c;}
function Nm(a,b,c,d){var e;e=a.cp.data[c];while(e!==null&&!(e.og==d&&ADX(b,e.fx))){e=e.d7;}return e;}
function NW(a){var b;b=a.cp.data[0];while(b!==null&&b.fx!==null){b=b.d7;}return b;}
function AE3(a){var b;if(a.uA===null){b=new M5;b.zg=a;a.uA=b;}return a.uA;}
function Oi(a,b,c){return BK(a,b,c);}
function BK(a,b,c){var d,e,f,g;if(b===null){d=NW(a);if(d===null){a.gl=a.gl+1|0;d=OP(a,null,0,0);e=a.fq+1|0;a.fq=e;if(e>a.sB)Sr(a);}}else{e=b.eK();f=e&(a.cp.data.length-1|0);d=Nm(a,b,f,e);if(d===null){a.gl=a.gl+1|0;d=OP(a,b,f,e);e=a.fq+1|0;a.fq=e;if(e>a.sB)Sr(a);}}g=d.et;d.et=c;return g;}
function OP(a,b,c,d){var e,f;e=new Hg;f=null;e.fx=b;e.et=f;e.og=d;e.d7=a.cp.data[c];a.cp.data[c]=e;return e;}
function AGm(a,b){var c,d,e,f,g,h,i;c=AB8(!b?1:b<<1);d=N(Hg,c);e=d.data;f=0;c=c-1|0;while(f<a.cp.data.length){g=a.cp.data[f];a.cp.data[f]=null;while(g!==null){h=g.og&c;i=g.d7;g.d7=e[h];e[h]=g;g=i;}f=f+1|0;}a.cp=d;OS(a);}
function Sr(a){AGm(a,a.cp.data.length);}
function Ob(a,b){var c;c=ZK(a,b);if(c===null)return null;return c.et;}
function ZK(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cp.data[0];while(e!==null){if(e.fx===null)break a;f=e.d7;d=e;e=f;}}else{g=b.eK();c=g&(a.cp.data.length-1|0);e=a.cp.data[c];while(e!==null&&!(e.og==g&&ADX(b,e.fx))){f=e.d7;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.d7=e.d7;else a.cp.data[c]=e.d7;a.gl=a.gl+1|0;a.fq=a.fq-1|0;return e;}
function AU2(a){return a.fq;}
function G_(a){var b;if(a.uJ===null){b=new M6;b.tX=a;a.uJ=b;}return a.uJ;}
function ADX(b,c){return b!==c&&!b.dQ(c)?0:1;}
function AE4(){Ff.call(this);}
function UI(){E.call(this);}
function A45(){var a=new UI();AR4(a);return a;}
function AR4(a){return;}
function AUr(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Ct=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EF=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0v(callback);return thread.suspend(function(){try{A1M(b,callback);}catch($e){callback.EF($rt_exception($e));}});}
function A1M(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){Cx(c,PK(0,0,B(190),null));return;}e=d.open($rt_ustr(b),1);b=new Ql;b.xS=c;b=Cj(b,"handleEvent");e.onBlocked=b;b=new Qk;b.AS=c;b.A8=e;b=Cj(b,"handleEvent");e.onsuccess=b;b=new Qj;b.z$=c;b=Cj(b,"handleEvent");e.onerror=b;b=new Qi;b.yj=e;b=Cj(b,"handleEvent");e.onupgradeneeded=b;}
function AVC(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Ct=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EF=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0v(callback);return thread.suspend(function(){try{AZ1(b,c,callback);}catch($e){callback.EF($rt_exception($e));}});}
function AZ1(b,c,d){var e;b=b.transaction("filesystem","readwrite").objectStore("filesystem");c=Na($rt_ustr(c));e=b.delete(c);b=new Qh;b.zu=d;b=Cj(b,"handleEvent");e.onsuccess=b;b=new Qe;b.zV=d;b=Cj(b,"handleEvent");e.onerror=b;}
function AZS(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Ct=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EF=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0v(callback);return thread.suspend(function(){try{A0Q(b,c,callback);}catch($e){callback.EF($rt_exception($e));}});}
function A0Q(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=Na($rt_ustr(c));e=b.get(c);b=new Qd;b.xD=d;b.uQ=e;b=Cj(b,"handleEvent");e.onsuccess=b;b=new Qc;b.AK=d;b=Cj(b,"handleEvent");e.onerror=b;}
function AVy(b,c,d,e,f){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Ct=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EF=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0v(callback);return thread.suspend(function(){try{A1s(b,c,d,e,f,callback);}
catch($e){callback.EF($rt_exception($e));}});}
function A1s(b,c,d,e,f,g){var h,i;h=(b.transaction("filesystem","readonly").objectStore("filesystem")).openCursor();i=$rt_createIntArray(1);b=new Or;b.A_=h;b.AP=g;b.wo=i;b.tq=c;b.yf=e;b.zO=d;b.uU=f;b=Cj(b,"handleEvent");h.onsuccess=b;b=new Os;b.Ak=g;b.uq=i;b=Cj(b,"handleEvent");h.onerror=b;}
function AN1(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Ct=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EF=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0v(callback);return thread.suspend(function(){try{A17(b,c,callback);}catch($e){callback.EF($rt_exception($e));}});}
function A17(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=Na($rt_ustr(c));e=b.get(c);b=new Oo;b.zz=d;b.sX=e;b=Cj(b,"handleEvent");e.onsuccess=b;b=new Op;b.AJ=d;b=Cj(b,"handleEvent");e.onerror=b;}
function AQf(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Ct=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EF=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0v(callback);return thread.suspend(function(){try{A0V(b,c,d,e,callback);}catch($e)
{callback.EF($rt_exception($e));}});}
function A0V(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(B1(),new Long(596067632, 383)).lo;c=AVP($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Oq;c.yp=f;b=Cj(c,"handleEvent");h.onsuccess=b;b=new Ou;b.yG=f;b=Cj(b,"handleEvent");h.onerror=b;}
function AXN(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function QQ(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function ASh(b){return typeof b==='undefined'? -1:typeof b.lastModified==='undefined'? -1:b.lastModified;}
function Na(b){return [b];}
function ARE(b){return typeof b==="string"?b:typeof b==="undefined"?null:typeof b[0]==="string"?b[0]:null;}
function AVP(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AAk(){var a=this;E.call(a);a.Bx=0;a.Bl=0;a.sw=null;a.vk=null;}
function PK(a,b,c,d){var e=new AAk();APT(e,a,b,c,d);return e;}
function APT(a,b,c,d,e){a.Bx=b;a.Bl=c;a.sw=d;a.vk=e;}
function Ee(){var a=this;E.call(a);a.Dt=null;a.rn=0;}
function A46(a,b){var c=new Ee();E3(c,a,b);return c;}
function E3(a,b,c){a.Dt=b;a.rn=c;}
function ASi(a){return a.rn;}
function ANm(a,b){return a!==b?0:1;}
function AQn(a){return KI(a);}
function Ij(a){var b;b=C4(a);if(!N$(H8(b),K(Ee)))b=H8(b);return b;}
function TC(a,b){var c,d;if(Ij(b)===Ij(a))return S(a.rn,b.rn);c=new Cq;d=new Bd;Bb(d);Bp(c,O(H(H(H(H(d,B(191)),Hf(Ij(a))),B(192)),Hf(Ij(b)))));M(c);}
function AP3(a,b){return TC(a,b);}
function Eo(){Ee.call(this);}
var A4J=null;var A4I=null;var A4H=null;var A47=null;function ACp(){var b,c,d;b=new Eo;E3(b,B(193),0);A4J=b;b=new Eo;E3(b,B(194),1);A4I=b;b=new Eo;E3(b,B(195),2);A4H=b;c=N(Eo,3);d=c.data;d[0]=A4J;d[1]=A4I;d[2]=A4H;A47=c;}
function NF(){}
function Rj(){E.call(this);this.v1=null;}
function A0v(b){var c;c=new Rj;c.v1=b;return c;}
function Cx(a,b){a.v1.Ct(b);}
function ATf(a,b){a.v1.EF(b);}
function AK0(){E.call(this);}
function Ti(){}
function S0(){var a=this;E.call(a);a.ta=null;a.xp=null;}
function ALt(a){var b,c,d;if(a.ta.readyState==4){b=new Uint8Array(a.ta.response);c=$rt_createByteArray(b.byteLength);Y();A2Q=c;d=0;while(d<Sa().data.length){Sa().data[d]=b[d]<<24>>24;d=d+1|0;}Cx(a.xp,B(196));}}
function ATc(a){ALt(a);}
function GM(){E.call(this);}
function AKD(){var a=this;GM.call(a);a.uH=null;a.ji=0;a.Ce=0;a.o5=0;}
function QI(a){var b=new AKD();ANI(b,a);return b;}
function ANI(a,b){var c;c=b.data.length;a.uH=b;a.ji=0;a.Ce=0;a.o5=0+c|0;}
function AU1(a){var b,c,d;if(a.ji>=a.o5)b=(-1);else{c=a.uH.data;d=a.ji;a.ji=d+1|0;b=c[d]&255;}return b;}
function AZA(a,b,c,d){var e,f,g,h,i;e=CR(d,a.o5-a.ji|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.uH.data;i=a.ji;a.ji=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function AVz(a){return a.o5-a.ji|0;}
function Hs(){GM.call(this);this.jl=null;}
function A48(a){var b=new Hs();O9(b,a);return b;}
function O9(a,b){a.jl=b;}
function AFo(a){return a.jl.uz();}
function MS(){}
function Nh(){Hs.call(this);this.dD=null;}
function Mw(a){var b=new Nh();ADq(b,a);return b;}
function ADq(a,b){O9(a,b);a.dD=$rt_createByteArray(8);}
function Lw(a,b){var c;c=b.data;return a.jl.mO(b,0,c.length);}
function LF(a){var b,c;b=a.jl.zf();if(b>=0)return b<<24>>24;c=new ES;R(c);M(c);}
function Ix(a,b){var c,d;c=0;while(c<b){d=a.jl.mO(a.dD,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function AJP(a){return $rt_longBitsToDouble(P4(a));}
function WB(a){return $rt_intBitsToFloat(GR(a));}
function AHr(a,b){NV(a,b,0,b.data.length);}
function NV(a,b,c,d){var e,f;if(d<0){e=new BV;R(e);M(e);}if(!d)return;if(a.jl===null){e=new EG;R(e);M(e);}if(b===null){e=new EG;R(e);M(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.jl.mO(b,c,d);if(f<0){e=new ES;R(e);M(e);}c=c+f|0;d=d-f|0;}return;}e=new BV;R(e);M(e);}
function GR(a){var b;if(Ix(a,4)<0){b=new ES;R(b);M(b);}return (a.dD.data[0]&255)<<24|(a.dD.data[1]&255)<<16|(a.dD.data[2]&255)<<8|a.dD.data[3]&255;}
function P4(a){var b;if(Ix(a,8)<0){b=new ES;R(b);M(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.dD.data[0]&255)<<24|(a.dD.data[1]&255)<<16|(a.dD.data[2]&255)<<8|a.dD.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.dD.data[4]&255)<<24|(a.dD.data[5]&255)<<16|(a.dD.data[6]&255)<<8|a.dD.data[7]&255),new Long(4294967295, 0)));}
function TB(a){var b;if(Ix(a,2)<0){b=new ES;R(b);M(b);}return ((a.dD.data[0]&255)<<24>>16|a.dD.data[1]&255)<<16>>16;}
function AJ8(a){var b;if(Ix(a,2)<0){b=new ES;R(b);M(b);}return ((a.dD.data[0]&255)<<8|a.dD.data[1]&255)&65535;}
function FV(a){return AGi(a,AJ8(a));}
function AGi(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);NV(a,c,0,b);return APH(c,d,0,b);}
function APH(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Gl;Bp(m,B(197));M(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Gl;Bp(m,B(198));M(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Gl;Bp(m,B(198));M(m);}f=j+1|0;if(f>=e){m=new Gl;Bp(m,B(198));M(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return Vt(c,0,g);}m=new Gl;Bp(m,B(198));M(m);}
function KO(){var a=this;E.call(a);a.t_=null;a.DS=null;}
function O3(b){var c,d;if(IR(b))M(AF$(b));if(!AKh(Cr(b,0)))M(AF$(b));c=1;while(c<BE(b)){a:{d=Cr(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AKh(d))break a;else M(AF$(b));}}c=c+1|0;}}
function AKh(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function TW(b){var c;if(b===null){b=new Cq;Bp(b,B(199));M(b);}O3(b);c=Cz(A49,AIN(b));if(c!==null)return c;c=new Rp;R(c);c.Ef=b;M(c);}
function AIw(a,b){var c,d,$$je;a:{try{b=AEB(Y_(ALg(AAN(a),A4$),A4$),b);}catch($$e){$$je=Bh($$e);if($$je instanceof FZ){c=$$je;break a;}else{throw $$e;}}return b;}d=new SV;d.pD=1;d.p5=1;d.tj=B(200);d.iD=c;M(d);}
function W6(a,b){return AEt(a.t_,b.t_);}
function AWi(a,b){return W6(a,b);}
function SL(){var a=this;Hs.call(a);a.gg=null;a.mV=null;a.oC=0;a.nd=0;a.A0=0;a.AH=0;a.uk=null;a.CY=null;}
function AM1(a){var b;if(a.oC){b=new B3;Bp(b,B(201));M(b);}return AGF(a,a.uk,0,1)==(-1)?(-1):a.uk.data[0]&255;}
function AGF(a,b,c,d){var e,f,g;if(a.oC){e=new B3;Bp(e,B(201));M(e);}if(b===null){e=new EG;R(e);M(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.nd)return (-1);f=0;Wj(a.gg,b,c,d);a:{while(!a.nd){if(!a.gg.J)WT(a);b:{g=ABh(a.gg,0);f=f+(a.gg.oa-c|0)|0;c=a.gg.oa;switch(g){case -3:e=new B3;Bp(e,a.gg.bQ);M(e);case 1:case 2:break;default:break b;}a.nd=1;if(g==2)return (-1);}if(!a.gg.hk)break a;}}return f;}e=new BV;R(e);M(e);}
function AR3(a){var b;if(!a.oC){if(!a.nd)return 1;return 0;}b=new B3;Bp(b,B(201));M(b);}
function WT(a){var b,c;if(a.oC){b=new B3;Bp(b,B(201));M(b);}a:{c=a.jl.mO(a.mV,0,a.mV.data.length);if(c==(-1)){if(a.gg.iy.du)break a;if(T$(a.gg))break a;a.mV.data[0]=0;c=1;}AEZ(a.gg,a.mV,0,c,1);return;}if(Long_ne(a.gg.iy.p7,Long_fromInt(-1))){b=new B3;Bp(b,B(202));M(b);}b=new ES;Bp(b,B(203));M(b);}
function K1(){var a=this;E.call(a);a.hf=null;a.iu=0;a.l1=Long_ZERO;}
function HI(a,b){var c,d;c=a.hf.data;d=a.iu;a.iu=d+1|0;c[d]=b;if(a.iu==a.hf.data.length){PX(a,a.hf,0);a.iu=0;}a.l1=Long_add(a.l1,Long_fromInt(1));}
function Zi(a,b,c,d){a:{while(a.iu){if(d<=0)break a;HI(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.hf.data.length){PX(a,b,c);c=c+a.hf.data.length|0;d=d-a.hf.data.length|0;a.l1=Long_add(a.l1,Long_fromInt(a.hf.data.length));}while(d>0){HI(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function AJN(a){var b;b=Long_shl(a.l1,3);HI(a,(-128));while(a.iu){HI(a,0);}AFL(a,b);KC(a);}
function YW(){var a=this;K1.call(a);a.n0=0;a.n1=0;a.n2=0;a.n3=0;a.n4=0;a.dM=null;a.lw=0;}
function A0G(){var a=new YW();AYU(a);return a;}
function AYU(a){a.hf=$rt_createByteArray(4);a.iu=0;a.dM=$rt_createIntArray(80);Mj(a);}
function PX(a,b,c){var d,e;d=b.data;b=a.dM.data;e=a.lw;a.lw=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.lw==16)KC(a);}
function GA(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function AFL(a,b){if(a.lw>14)KC(a);a.dM.data[14]=b.hi;a.dM.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AGQ(a,b,c){AJN(a);GA(a,a.n0,b,c);GA(a,a.n1,b,c+4|0);GA(a,a.n2,b,c+8|0);GA(a,a.n3,b,c+12|0);GA(a,a.n4,b,c+16|0);Mj(a);return 20;}
function Mj(a){var b;a.l1=Long_ZERO;a.iu=0;b=0;while(b<a.hf.data.length){a.hf.data[b]=0;b=b+1|0;}a.n0=1732584193;a.n1=(-271733879);a.n2=(-1732584194);a.n3=271733878;a.n4=(-1009589776);a.lw=0;b=0;while(b!=a.dM.data.length){a.dM.data[b]=0;b=b+1|0;}}
function Rr(a,b,c,d){return b^c^d;}
function Ex(a,b,c){return b<<c|b>>>(32-c|0);}
function KC(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.dM.data[b]=Ex(a,a.dM.data[b-3|0]^a.dM.data[b-8|0]^a.dM.data[b-14|0]^a.dM.data[b-16|0],1);b=b+1|0;}c=a.n0;d=a.n1;e=a.n2;f=a.n3;g=a.n4;h=0;while(h<=19){i=(((Ex(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.dM.data[h]|0)+1518500249|0;b=Ex(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((Ex(a,c,5)+Rr(a,d,e,f)|0)+g|0)+a.dM.data[j]|0)+1859775393|0;b=Ex(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((Ex(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.dM.data[h]|0)
+(-1894007588)|0;b=Ex(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((Ex(a,c,5)+Rr(a,d,e,f)|0)+g|0)+a.dM.data[j]|0)+(-899497514)|0;b=Ex(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.n0=a.n0+c|0;a.n1=a.n1+d|0;a.n2=a.n2+e|0;a.n3=a.n3+f|0;a.n4=a.n4+g|0;a.lw=0;b=0;while(b!=a.dM.data.length){a.dM.data[b]=0;b=b+1|0;}}
function AD6(){E.call(this);}
function A4_(){var a=new AD6();AV1(a);return a;}
function AV1(a){return;}
function ME(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=CR(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ALp(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=CR(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function AHb(b,c){var d,e,f,g;d=b.data;e=Z3(IZ(C4(b)),c);f=CR(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Vp(b,c,d,e){var f,g;if(c>d){e=new Cq;R(e);M(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Ne(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=N(E,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=CR(j,h+f|0);l=h+(2*f|0)|0;m=CR(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.oz(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AIW(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new Cq;R(f);M(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=b[e];if(h==c)break;if(c>=h){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function HH(){var a=this;E.call(a);a.zT=0;a.yU=null;a.uT=null;}
function A5a(a,b,c){var d=new HH();ON(d,a,b,c);return d;}
function ON(a,b,c,d){a.zT=b;a.yU=c;a.uT=d;}
function W$(a,b){var c,d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Ui(b,a.yU)<a.zT){c=0;d=null;if(c<10){e=1;f=b.bc;$p=1;continue _;}}return;case 1:AI1(a,b,e,f,d);if(C()){break _;}c=c+1|0;if(c>=10)return;e=1;f=b.bc;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AVl(a,b,c,d){return Cy((c+D(b.n,256)|0)-128|0,D(b.n,128),(d+D(b.n,256)|0)-128|0);}
function AI1(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=I(d.c);h=I(d.d);i=D(b.n,a.uT.data.length);j=a.xz(b,g,h);k=j.d9;l=j.eo;m=j.d$;$p=1;case 1:$z
=We(b,k,l,m);if(C()){break _;}c=$z;if(c)return 0;$p=2;case 2:$z=Xw(b,k,l,m);if(C()){break _;}e=$z;if(e!==A5b)return 0;n=0;while(n<3){o=6;p=0;h=k;q=l;r=m;if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;}return f;case 3:$z=We(b,h,c,r);if(C()){break _;}c=$z;if(c){$p=4;continue _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;continue _;}n=n+1|0;if(n>=3)break;o=6;p
=0;h=k;q=l;r=m;}return f;case 4:$z=We(b,h,q,r);if(C()){break _;}c=$z;if(!c){$p=5;continue _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 5:$z=Xw(b,h,q,r);if(C()){break _;}e=$z;if(!e.me()){c=q+1|0;$p=6;continue _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n
>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 6:a:{$z=We(b,h,c,r);if(C()){break _;}c=$z;if(!c){b:{s=h+0.5;t=q+1.0;u=r+0.5;if(d===null){v=s-b.eJ;w=t-b.oj;x=u-b.eI;if(v*v+w*w+x*x>=1024.0)break b;break a;}y=s-d.c;z=t-d.i;ba=u-d.d;if(y*y+z*z+ba*ba<1024.0)break a;}c:{try{e=a.uT.data[i];bb=N(E2,1);bb.data[0]=K(FL);e=Sy(e,bb);bb=N(E,1);bb.data[0]=b;bc=SB(e,bb);break c;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){}else{throw $$e;}}return f;}y=s;z=t;ba=u;IU(bc,y,z,ba,L(b.n)*360.0,0.0);$p=7;continue _;}}p=p+1|0;while
(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 7:$z=bc.sK(y,z,ba);if(C()){break _;}c=$z;if(c){f=f+1|0;$p=8;continue _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 8:AIM(b,bc);if(C()){break _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,
o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$p);}
function Q_(){HH.call(this);this.CA=null;}
function ATa(a,b,c,d){return Cy((c+D(b.n,256)|0)-128|0,D(b.n,D(b.n,D(b.n,112)+8|0)+8|0),(d+D(b.n,256)|0)-128|0);}
function CN(){var a=this;E.call(a);a.lg=0;a.bx=null;a.bt=null;a.k=null;a.bH=0.0;a.ct=0.0;a.bG=0.0;a.c=0.0;a.i=0.0;a.d=0.0;a.f=0.0;a.h=0.0;a.g=0.0;a.q=0.0;a.E=0.0;a.K=0.0;a.P=0.0;a.G=null;a.ca=0;a.iW=0;a.vx=0;a.j_=0;a.cs=0;a.cF=0.0;a.cC=0.0;a.ef=0.0;a.r0=0.0;a.gp=0.0;a.h7=0;a.e5=0.0;a.pu=0;a.b6=0.0;a.bP=0.0;a.b7=0.0;a.dN=0.0;a.pG=0.0;a.nx=0;a.mI=0.0;a.EL=0;a.l=null;a.nm=0;a.mk=0;a.cw=0;a.mJ=0;a.rz=0;a.c5=0;a.fu=0;a.m7=0;a.rT=null;a.gi=0.0;a.ga=0.0;}
function A5c(a){var b=new CN();EO(b,a);return b;}
function EO(a,b){a.lg=0;a.G=Lf(0.0,0.0,0.0,0.0,0.0,0.0);a.ca=0;a.iW=0;a.vx=0;a.j_=1;a.cs=0;a.cF=0.0;a.cC=0.6000000238418579;a.ef=1.7999999523162842;a.r0=0.0;a.gp=0.0;a.h7=1;a.e5=0.0;a.pu=1;a.dN=0.0;a.pG=0.0;a.nx=0;a.mI=0.0;a.EL=0;a.l=new De;a.nm=0;a.mk=1;a.cw=0;a.mJ=300;a.rz=0;a.c5=0;a.fu=300;a.m7=1;a.k=b;CC(a,0.0,0.0,0.0);}
function B4(a){a.cs=1;}
function Dx(a,b,c){a.cC=b;a.ef=c;}
function SN(a,b,c){a.q=b;a.E=c;}
function CC(a,b,c,d){var e,f,g,h,i,j;a.c=b;a.i=c;a.d=d;e=a.cC/2.0;f=a.ef/2.0;g=a.G;h=e;i=b-h;j=f;KX(g,i,c-j,d-h,b+h,c+j,d+h);}
function AD1(a){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.EU();if(C()){break _;}return;default:Eq();}}CL().s(a,$p);}
function AAc(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bt!==null&&a.bt.cs)a.bt=null;a.nm=a.nm+1|0;a.r0=a.gp;a.bH=a.c;a.ct=a.i;a.bG=a.d;a.P=a.E;a.K=a.q;$p=1;case 1:$z=a.Dz();if(C()){break _;}b=$z;if(!b)a.rz=0;else{a:{if(!a.rz&&!a.m7){c=B7(a.f*a.f*0.20000000298023224+a.h*a.h+a.g*a.g*0.20000000298023224)*0.20000000298023224;if(c>1.0)c=1.0;C2(a.k,a,B(204),c,1.0+(L(a.l)-L(a.l))*0.4000000059604645);d
=I(a.G.I);b=0;e=d+1.0;while(b<1.0+a.cC*20.0){f=(L(a.l)*2.0-1.0)*a.cC;g=(L(a.l)*2.0-1.0)*a.cC;BP(a.k,B(205),a.c+f,e,a.d+g,a.f,a.h-L(a.l)*0.20000000298023224,a.g);b=b+1|0;}b=0;while(true){if(b>=1.0+a.cC*20.0)break a;f=(L(a.l)*2.0-1.0)*a.cC;g=(L(a.l)*2.0-1.0)*a.cC;BP(a.k,B(206),a.c+f,e,a.d+g,a.f,a.h,a.g);b=b+1|0;}}}a.e5=0.0;a.rz=1;a.cw=0;}if(a.cw>0){if(!(a.cw%20|0)){h=null;b=1;$p=4;continue _;}a.cw=a.cw-1|0;}$p=2;case 2:$z=XV(a);if(C()){break _;}b=$z;if(b){h=null;b=10;$p=3;continue _;}if(a.i>=(-64.0)){a.m7=0;return;}$p
=5;continue _;case 3:a.eP(h,b);if(C()){break _;}a.cw=600;if(a.i>=(-64.0)){a.m7=0;return;}$p=5;continue _;case 4:a.eP(h,b);if(C()){break _;}a.cw=a.cw-1|0;$p=2;continue _;case 5:a.Am();if(C()){break _;}a.m7=0;return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function TR(a){B4(a);}
function ACm(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=QB(a.G,b,c,d);f=a.k;$p=1;case 1:$z=TK(f,a,e);if(C()){break _;}f=$z;if(f.p>0)return 0;f=a.k;$p=2;case 2:$z=AEb(f,e);if(C()){break _;}g=$z;return g?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function ALQ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.nx){E$(a.G,b,c,d);a.c=(a.G.N+a.G.R)/2.0;a.i=a.G.I+a.cF-a.dN;a.d=(a.G.O+a.G.S)/2.0;return;}e=a.c;f=a.d;g=Nu(a.G);h=a.k;i=HK(a.G,b,c,d);$p=1;case 1:$z
=TK(h,a,i);if(C()){break _;}j=$z;k=0;l=c;while(k<CZ(j)){l=Se(Z(j,k),a.G,l);k=k+1|0;}E$(a.G,0.0,l,0.0);if(a.j_){m=d;n=b;}else if(c===l){m=d;n=b;}else{n=0.0;m=n;l=n;}a:{b:{if(!a.ca){if(c===l)break b;if(c>=0.0)break b;}o=1;break a;}o=0;}p=0;while(p<CZ(j)){n=NI(Z(j,p),a.G,n);p=p+1|0;}E$(a.G,n,0.0,0.0);if(!a.j_&&b!==n){n=0.0;m=n;l=n;}k=0;while(k<CZ(j)){m=QD(Z(j,k),a.G,m);k=k+1|0;}E$(a.G,0.0,0.0,m);if(!a.j_&&d!==m){n=0.0;m=n;l=n;}c:{if(a.pG<=0.0){q=n;r=l;s=m;}else if(!o){q=n;r=l;s=m;}else if(a.dN>=0.05000000074505806)
{q=n;r=l;s=m;}else{if(b!==n)break c;if(d!==m)break c;q=n;r=l;s=m;}a.c=(a.G.N+a.G.R)/2.0;a.i=a.G.I+a.cF-a.dN;a.d=(a.G.O+a.G.S)/2.0;t=S(b,q);a.iW=!t&&d===s?0:1;k=S(c,r);a.ca=k&&c<0.0?1:0;a.vx=!a.iW&&!k?0:1;if(!a.ca){if(r<0.0)a.e5=a.e5-r;}else if(a.e5>0.0){u=a.e5;$p=3;continue _;}if(t)a.f=0.0;if(k)a.h=0.0;if(d!==s)a.g=0.0;l=a.c-e;m=a.d-f;a.gp=a.gp+B7(l*l+m*m)*0.6;if(!a.h7){a.dN=a.dN*0.4000000059604645;$p=4;continue _;}v=I(a.c);w=I(a.i-0.20000000298023224-a.cF);x=I(a.d);i=a.k;$p=6;continue _;}r=a.pG;i=Nu(a.G);S$(a.G,
g);h=a.k;g=HK(a.G,b,r,d);$p=2;case 2:$z=TK(h,a,g);if(C()){break _;}h=$z;y=0;while(y<CZ(h)){r=Se(Z(h,y),a.G,r);y=y+1|0;}E$(a.G,0.0,r,0.0);if(a.j_){s=d;q=b;}else if(c===r){s=d;q=b;}else{q=0.0;s=q;r=q;}k=0;while(k<CZ(h)){q=NI(Z(h,k),a.G,q);k=k+1|0;}E$(a.G,q,0.0,0.0);if(!a.j_&&b!==q){q=0.0;s=q;r=q;}t=0;while(t<CZ(h)){s=QD(Z(h,t),a.G,s);t=t+1|0;}E$(a.G,0.0,0.0,s);if(!a.j_&&d!==s){q=0.0;s=q;r=q;}if(n*n+m*m>=q*q+s*s){S$(a.G,i);q=n;r=l;s=m;}else a.dN=a.dN+0.5;a.c=(a.G.N+a.G.R)/2.0;a.i=a.G.I+a.cF-a.dN;a.d=(a.G.O+a.G.S)
/2.0;t=S(b,q);a.iW=!t&&d===s?0:1;k=S(c,r);a.ca=k&&c<0.0?1:0;a.vx=!a.iW&&!k?0:1;if(!a.ca){if(r<0.0)a.e5=a.e5-r;}else if(a.e5>0.0){u=a.e5;$p=3;continue _;}if(t)a.f=0.0;if(k)a.h=0.0;if(d!==s)a.g=0.0;l=a.c-e;m=a.d-f;a.gp=a.gp+B7(l*l+m*m)*0.6;if(!a.h7){a.dN=a.dN*0.4000000059604645;$p=4;continue _;}v=I(a.c);w=I(a.i-0.20000000298023224-a.cF);x=I(a.d);i=a.k;$p=6;continue _;case 3:a.Ad(u);if(C()){break _;}a.e5=0.0;if(t)a.f=0.0;if(k)a.h=0.0;if(d!==s)a.g=0.0;l=a.c-e;m=a.d-f;a.gp=a.gp+B7(l*l+m*m)*0.6;if(!a.h7){a.dN=a.dN
*0.4000000059604645;$p=4;continue _;}v=I(a.c);w=I(a.i-0.20000000298023224-a.cF);x=I(a.d);i=a.k;$p=6;continue _;case 4:$z=a.Dz();if(C()){break _;}t=$z;i=a.k;h=a.G;$p=5;case 5:$z=ALn(i,h);if(C()){break _;}k=$z;if(!k){if(a.cw<=0)a.cw= -a.mk;if(t&&a.cw>0){C2(a.k,a,B(207),0.699999988079071,1.600000023841858+(L(a.l)-L(a.l))*0.4000000059604645);a.cw= -a.mk;}return;}k=1;$p=7;continue _;case 6:$z=X4(i,v,w,x);if(C()){break _;}y=$z;if(a.gp>a.pu&&y>0){a.pu=a.pu+1|0;J();h=A3U.data[y].fY;if(!A3U.data[y].bR.me())C2(a.k,a,
IH(h),AHn(h)*0.15000000596046448,T8(h));i=A3U.data[y];h=a.k;$p=8;continue _;}a.dN=a.dN*0.4000000059604645;$p=4;continue _;case 7:a.B6(k);if(C()){break _;}if(!t){a.cw=a.cw+1|0;if(!a.cw)a.cw=300;}if(t&&a.cw>0){C2(a.k,a,B(207),0.699999988079071,1.600000023841858+(L(a.l)-L(a.l))*0.4000000059604645);a.cw= -a.mk;}return;case 8:i.nc(h,v,w,x,a);if(C()){break _;}a.dN=a.dN*0.4000000059604645;$p=4;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function AS2(a){return null;}
function AEV(a,b){var c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:a.eP(c,b);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,$p);}
function U8(a,b){return;}
function AAp(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k;c=Da(a.G,0.0,(-0.4000000059604645),0.0);d=A4R;$p=1;case 1:$z=V8(b,c,d,a);if(C()){break _;}e=$z;return e;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function ABS(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.i+a.pY();d=I(a.c);e=Jm(I(c));f=I(a.d);g=a.k;$p=1;case 1:$z=X4(g,d,e,f);if(C()){break _;}h=$z;if(h){J();if(A3U.data[h].bR===b){b=a.k;$p=2;continue _;}}return 0;case 2:$z=Z5(b,d,e,f);if(C()){break _;}d=$z;return c>=(e+1|0)-(HX(d)-0.1111111119389534)?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function XV(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k;c=Da(a.G,0.0,(-0.4000000059604645),0.0);d=A4S;$p=1;case 1:$z=AIX(b,c,d);if(C()){break _;}e=$z;return e;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function Ka(a,b,c,d){var e,f,g;e=DF(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;c=c*d;f=Bl(a.q*3.1415927410125732/180.0);g=Bx(a.q*3.1415927410125732/180.0);a.f=a.f+b*g-c*f;a.g=a.g+c*g+b*f;}}
function Y$(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(a.c);d=(a.G.Q-a.G.I)*0.66;e=I(a.i-a.cF+d);f=I(a.d);g=a.k;$p=1;case 1:$z=AHP(g,c,e,f);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AN7(a,b){a.k=b;}
function IU(a,b,c,d,e,f){a.c=b;a.bH=b;b=c+a.cF;a.i=b;a.ct=b;a.d=d;a.bG=d;a.q=e;a.E=f;CC(a,a.c,a.i,a.d);}
function AMc(a,b){var c,d,e;c=a.c-b.c;d=a.i-b.i;e=a.d-b.d;return DF(c*c+d*d+e*e);}
function ABW(a,b,c,d){var e,f,g;e=a.c-b;f=a.i-c;g=a.d-d;return e*e+f*f+g*g;}
function Po(a,b,c,d){var e,f,g;e=a.c-b;f=a.i-c;g=a.d-d;return B7(e*e+f*f+g*g);}
function JO(a,b){var c,d,e;c=a.c-b.c;d=a.i-b.i;e=a.d-b.d;return c*c+d*d+e*e;}
function AWA(a,b){return;}
function AVI(a,b){var c,d,e,f,g;c=b.c-a.c;d=b.d-a.d;e=c<0.0? -c:c;f=d<0.0? -d:d;if(e>f)f=e;if(f>=0.009999999776482582){e=B7(f);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;e=f*g;c=c*0.05000000074505806;e=e*0.05000000074505806;c=c*(1.0-a.mI);e=e*(1.0-a.mI);Gh(a, -c,0.0, -e);Gh(b,c,0.0,e);}}
function Gh(a,b,c,d){a.f=a.f+b;a.h=a.h+c;a.g=a.g+d;}
function AEx(a,b,c){return 0;}
function AYv(a){return 0;}
function AXl(a){return 0;}
function AZz(a,b,c){return;}
function Ph(a,b){var c,d,e;c=a.c-b.t;d=a.i-b.v;e=a.d-b.s;return ACl(a,c*c+d*d+e*e);}
function ACl(a,b){var c;c=AKl(a.G)*64.0;return b>=c*c?0:1;}
function AGd(a,b){var c,d;c=$rt_createDoubleArray(3);d=c.data;d[0]=a.c;d[1]=a.i;d[2]=a.d;Gv(b,B(208),Sc(a,c));c=$rt_createDoubleArray(3);d=c.data;d[0]=a.f;d[1]=a.h;d[2]=a.g;Gv(b,B(209),Sc(a,c));c=$rt_createFloatArray(2);d=c.data;d[0]=a.q;d[1]=a.E;Gv(b,B(210),AHc(a,c));AMf(b,B(211),a.e5);EH(b,B(212),a.cw<<16>>16);EH(b,B(213),a.fu<<16>>16);PR(b,B(214),a.ca);Xk(a,b);}
function UG(a,b){var c,d,e,f,g;c=II(b,B(208));d=II(b,B(209));e=II(b,B(210));CC(a,0.0,0.0,0.0);a.f=Eu(d,0).hJ;a.h=Eu(d,1).hJ;a.g=Eu(d,2).hJ;f=Eu(c,0).hJ;a.c=f;a.b6=f;a.bH=f;f=Eu(c,1).hJ;a.i=f;a.bP=f;a.ct=f;f=Eu(c,2).hJ;a.d=f;a.b7=f;a.bG=f;g=Eu(e,0).l0;a.q=g;a.K=g;g=Eu(e,1).l0;a.E=g;a.P=g;a.e5=AHh(b,B(211));a.cw=EV(b,B(212));a.fu=EV(b,B(213));a.ca=QM(b,B(214));CC(a,a.c,a.i,a.d);AJn(a,b);}
function Sc(a,b){var c,d,e,f,g;b=b.data;c=Kg();d=b.length;e=0;while(e<d){f=b[e];g=new Ks;Cl(g);g.hJ=f;HT(c,g);e=e+1|0;}return c;}
function AHc(a,b){var c,d,e;b=b.data;c=Kg();d=b.length;e=0;while(e<d){HT(c,AWz(b[e]));e=e+1|0;}return c;}
function Xp(a,b,c){var d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0.0;$p=1;case 1:$z=ABR(a,b,c,d);if(C()){break _;}e=$z;return e;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function ABR(a,b,c,d){var e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=F$(a.k,a.c,a.i+d,a.d,I1(b,c));e.go=10;f=a.k;$p=1;case 1:AIM(f,e);if(C()){break _;}return e;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ACF(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=I(a.c);c=I(a.i+a.pY());d=I(a.d);e=a.k;$p=1;case 1:$z=We(e,b,c,d);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function APw(a,b){return 0;}
function APG(a,b){return null;}
function AAw(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bt.cs){a.bt=null;return;}a.f=0.0;a.h=0.0;a.g=0.0;$p=1;case 1:a.dR();if(C()){break _;}CC(a,a.bt.c,a.bt.i+a.cF+a.bt.xs(),a.bt.d);a.ga=a.ga+a.bt.q-a.bt.K;a.gi=a.gi+a.bt.E-a.bt.P;while(a.ga>=180.0){a.ga=a.ga-360.0;}while(a.ga<(-180.0)){a.ga=a.ga+360.0;}while(a.gi>=180.0){a.gi=a.gi-360.0;}while(a.gi<(-180.0)){a.gi=a.gi+360.0;}b=a.ga*0.5;c=a.gi*0.5;d=10.0;if(b>d)b
=d;e=(-10.0);if(b<e)b=e;if(c<=d)d=c;if(d>=e)e=d;a.ga=a.ga-b;a.gi=a.gi-e;a.q=a.q+b;a.E=a.E+e;return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AYx(a){return a.ef*0.75;}
function MP(a,b){a.gi=0.0;a.ga=0.0;if(a.bt===b){a.bt.bx=null;a.bt=null;}else{if(a.bt!==null)a.bt.bx=null;if(b.bx!==null)b.bx.bt=null;a.bt=b;b.bx=a;}}
function Te(a,b,c){var d,e;d=a.E;e=a.q;a.q=a.q+b*0.15;a.E=a.E-c*0.15;if(a.E<(-90.0))a.E=(-90.0);if(a.E>90.0)a.E=90.0;a.P=a.P+a.E-d;a.K=a.K+a.q-e;}
function D_(){var a=this;CN.call(a);a.ns=0;a.Fg=0.0;a.C4=0.0;a.Eb=0.0;a.da=0.0;a.ex=0.0;a.xf=0.0;a.lW=0.0;a.i1=0.0;a.kV=0.0;a.C6=0;a.vQ=null;a.C5=0;a.Ay=0.0;a.Bj=null;a.E7=0.0;a.sP=0;a.E8=0.0;a.bI=0;a.rP=0;a.sN=0;a.c$=0;a.A$=0;a.jB=0.0;a.cD=0;a.c6=0;a.jS=0.0;a.il=0.0;a.y_=0;a.Bz=0;a.Fa=0.0;a.iT=0.0;a.bX=0.0;a.fF=0.0;a.gy=0;a.hL=0.0;a.fT=0.0;a.jC=0.0;a.gR=0;a.w9=0.0;a.q_=0.0;}
function M7(a){return a.vQ;}
function APY(a){return a.cs?0:1;}
function AS5(a){return a.cs?0:1;}
function AKO(a){return a.ef*0.8500000238418579;}
function AHW(a){var b,c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAc(a);if(C()){break _;}b=D(a.l,1000);c=a.sN;a.sN=c+1|0;if(b<c){a.sN=(-80);d=a.ue();if(d!==null)C2(a.k,a,d,1.0,(L(a.l)-L(a.l))*0.20000000298023224+1.0);}if(GQ(a)){$p=2;continue _;}if(GQ(a)){d=A4R;$p=3;continue _;}a.fu=a.mJ;a.jS=a.il;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5
>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD+1|0;if(a.cD>20){$p=6;continue _;}}a.kV=a.i1;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 2:$z=ACF(a);if(C()){break _;}e=$z;if(e){d=null;e=1;$p=4;continue _;}if(GQ(a)){d=A4R;$p=3;continue _;}a.fu=a.mJ;a.jS=a.il;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD+1|0;if(a.cD>20){$p=6;continue _;}}a.kV=a.i1;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 3:$z=ABS(a,d);if(C()){break _;}e=$z;if(!e)a.fu=a.mJ;else{a.fu=a.fu-1|0;if(a.fu==(-20)){a.fu=0;e
=0;while(e<8){f=L(a.l)-L(a.l);g=L(a.l)-L(a.l);h=L(a.l)-L(a.l);BP(a.k,B(205),a.c+f,a.i+g,a.d+h,a.f,a.h,a.g);e=e+1|0;}d=null;e=2;$p=5;continue _;}a.cw=0;}a.jS=a.il;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD+1|0;if(a.cD>20){$p=6;continue _;}}a.kV=a.i1;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 4:a.eP(d,e);if(C()){break _;}if(GQ(a)){d=A4R;$p=3;continue _;}a.fu=a.mJ;a.jS=a.il;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD
+1|0;if(a.cD>20){$p=6;continue _;}}a.kV=a.i1;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 5:a.eP(d,e);if(C()){break _;}a.cw=0;a.jS=a.il;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD+1|0;if(a.cD>20){$p=6;continue _;}}a.kV=a.i1;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 6:B4(a);if(C()){break _;}e=0;while(e<20){i=CH(a.l)*0.02;j=CH(a.l)*0.02;k=CH(a.l)*0.02;BP(a.k,B(215),a.c+L(a.l)*a.cC*2.0-a.cC,a.i+L(a.l)*a.ef,a.d+L(a.l)*a.cC*2.0-a.cC,i,j,k);e=e+1|0;}a.kV=a.i1;a.ex=a.da;a.K=a.q;a.P
=a.E;return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Z_(a){var b,c,d,e;b=0;while(b<20){c=CH(a.l)*0.02;d=CH(a.l)*0.02;e=CH(a.l)*0.02;BP(a.k,B(215),a.c+L(a.l)*a.cC*2.0-a.cC-c*10.0,a.i+L(a.l)*a.ef-d*10.0,a.d+L(a.l)*a.cC*2.0-a.cC-e*10.0,c,d,e);b=b+1|0;}}
function AFE(a){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAw(a);if(C()){break _;}a.xf=a.lW;a.lW=0.0;return;default:Eq();}}CL().s(a,$p);}
function AG7(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.EU();if(C()){break _;}$p=2;case 2:a.m1();if(C()){break _;}b=a.c-a.bH;c=a.d-a.bG;d=B7(b*b+c*c);e=a.da;f=0.0;a.xf=a.lW;g=0.0;if(d>0.05000000074505806){g=1.0;f=d*3.0;e=CB(c,b)*180.0/3.1415927410125732-90.0;}if(!a.ca)g=0.0;a.lW=a.lW+(g-a.lW)*0.30000001192092896;h=e-a.da;while(h<(-180.0)){h=h+360.0;}while
(h>=180.0){h=h-360.0;}a.da=a.da+h*0.10000000149011612;i=a.q-a.da;while(i<(-180.0)){i=i+360.0;}while(i>=180.0){i=i-360.0;}j=i>=(-90.0)&&i<90.0?0:1;if(i<(-75.0))i=(-75.0);if(i>=75.0)i=75.0;a.da=a.q-i;a.da=a.da+i*0.10000000149011612;if(j)f=f*(-1.0);while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while(a.q-a.K>=180.0){a.K=a.K+360.0;}while(a.da-a.ex<(-180.0)){a.ex=a.ex-360.0;}while(a.da-a.ex>=180.0){a.ex=a.ex+360.0;}while(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}a.i1=a.i1+f;return;default:Eq();}}CL().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function ASG(a,b,c){Dx(a,b,c);}
function Q5(a,b){if(a.bI>0){a.bI=a.bI+b|0;if(a.bI>20)a.bI=20;a.c5=a.ns/2|0;}}
function Xy(a,b,c){var d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gy=0;if(a.bI<=0)return 0;a.bX=1.5;if(a.c5<=a.ns/2.0){a.rP=a.bI;a.c5=a.ns;a.bI=a.bI-c|0;a.A$=10;a.c$=10;}else{if((a.rP-c|0)>=a.bI)return 0;a.bI=a.rP-c|0;}a.jB=0.0;if(b===null)a.jB=(BI()*2.0|0)*180|0;else{d=b.c-a.c;e=b.d-a.d;while(d*d+e*e<1.0E-4){d=(BI()-BI())*0.01;e=(BI()-BI())*0.01;}a.jB=CB(e,d)*180.0/3.1415927410125732-a.q;W8(a,b,c,d,e);}if(a.bI>0){C2(a.k,a,a.sZ(),
1.0,(L(a.l)-L(a.l))*0.20000000298023224+1.0);return 1;}C2(a.k,a,a.sF(),1.0,(L(a.l)-L(a.l))*0.20000000298023224+1.0);$p=1;case 1:a.BO(b);if(C()){break _;}return 1;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AXJ(a){return null;}
function AN5(a){return B(216);}
function AOH(a){return B(216);}
function W8(a,b,c,d,e){var f,g,h;f=B7(d*d+e*e);a.f=a.f/2.0;a.h=a.h/2.0;a.g=a.g/2.0;g=a.f;h=f;a.f=g-d/h*0.4000000059604645;a.h=a.h+0.4000000059604645;a.g=a.g-e/h*0.4000000059604645;if(a.h>0.4000000059604645)a.h=0.4000000059604645;}
function AIy(a,b){var c,d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.sP>0&&b!==null)b.yt(a,a.sP);a.y_=1;c=a.k0();if(c>0){d=D(a.l,3);e=0;if(e<d){f=1;$p=1;continue _;}}return;case 1:Xp(a,c,f);if(C()){break _;}e=e+1|0;if(e>=d)return;f=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ANq(a){return 0;}
function AKv(a,b){var c,d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=QO(b-3.0)|0;if(c<=0)return;d=null;$p=1;case 1:a.eP(d,c);if(C()){break _;}d=a.k;c=I(a.c);e=I(a.i-0.20000000298023224-a.cF);f=I(a.d);$p=2;case 2:$z=X4(d,c,e,f);if(C()){break _;}e=$z;if(e>0){J();d=A3U.data[e].fY;C2(a.k,a,IH(d),d.nl*0.5,d.n_*0.75);}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function YY(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAp(a);if(C()){break _;}d=$z;if(!d){$p=2;continue _;}e=a.i;Ka(a,b,c,0.019999999552965164);f=a.f;g=a.h;h=a.g;$p=3;continue _;case 2:$z=XV(a);if(C()){break _;}d=$z;if(d){e=a.i;Ka(a,b,c,0.019999999552965164);f=a.f;g=a.h;h=a.g;$p=4;continue _;}Ka(a,b,c,!a.ca?0.019999999552965164:0.10000000149011612);$p=7;continue _;case 3:ALQ(a,
f,g,h);if(C()){break _;}a.f=a.f*0.800000011920929;a.h=a.h*0.800000011920929;a.g=a.g*0.800000011920929;a.h=a.h-0.02;if(!a.iW){a.iT=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fF=a.fF+a.bX;return;}f=a.f;e=a.h+0.6000000238418579-a.i+e;g=a.g;$p=5;continue _;case 4:ALQ(a,f,g,h);if(C()){break _;}a.f=a.f*0.5;a.h=a.h*0.5;a.g=a.g*0.5;a.h=a.h-0.02;if(!a.iW){a.iT=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fF
=a.fF+a.bX;return;}f=a.f;e=a.h+0.6000000238418579-a.i+e;g=a.g;$p=6;continue _;case 5:$z=ACm(a,f,e,g);if(C()){break _;}d=$z;if(d)a.h=0.30000001192092896;a.iT=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fF=a.fF+a.bX;return;case 6:$z=ACm(a,f,e,g);if(C()){break _;}d=$z;if(d)a.h=0.30000001192092896;a.iT=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fF=a.fF+a.bX;return;case 7:$z=ADc(a);if(C()){break _;}d=
$z;if(d){a.e5=0.0;if(a.h<(-0.15))a.h=(-0.15);}e=a.f;f=a.h;g=a.g;$p=8;case 8:ALQ(a,e,f,g);if(C()){break _;}if(!a.iW){a.f=a.f*0.9100000262260437;a.h=a.h*0.9800000190734863;a.g=a.g*0.9100000262260437;a.h=a.h-0.08;if(a.ca){a.f=a.f*0.6000000238418579;a.g=a.g*0.6000000238418579;}a.iT=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fF=a.fF+a.bX;return;}$p=9;case 9:$z=ADc(a);if(C()){break _;}d=$z;if(d)a.h=0.2;a.f=a.f*0.9100000262260437;a.h=a.h*0.9800000190734863;a.g
=a.g*0.9100000262260437;a.h=a.h-0.08;if(a.ca){a.f=a.f*0.6000000238418579;a.g=a.g*0.6000000238418579;}a.iT=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fF=a.fF+a.bX;return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function ADc(a){var b,c,d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=I(a.c);c=I(a.G.I);d=I(a.d);e=a.k;$p=1;case 1:$z=X4(e,b,c,d);if(C()){break _;}f=$z;J();if(f==A5d.b)return 1;e=a.k;c=c+1|0;$p=2;case 2:$z=X4(e,b,c,d);if(C()){break _;}b=$z;return b==A5d.b?1:0;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function GQ(a){return !a.cs&&a.bI>0?1:0;}
function XX(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gy=a.gy+1|0;b=a.k.bc;if(b!==null){c=b.c-a.c;d=b.i-a.i;e=b.d-a.d;f=c*c+d*d+e*e;if(f>16384.0){$p=2;continue _;}if(a.gy>600&&!D(a.l,800)){if(f>=1024.0){$p=7;continue _;}a.gy=0;}}if(a.bI>0){$p=1;continue _;}a.gR=0;a.hL=0.0;a.fT=0.0;a.jC=0.0;$p=3;continue _;case 1:a.uo();if(C()){break _;}$p
=3;continue _;case 2:B4(a);if(C()){break _;}if(a.gy>600&&!D(a.l,800)){if(f>=1024.0){$p=7;continue _;}a.gy=0;}if(a.bI>0){$p=1;continue _;}a.gR=0;a.hL=0.0;a.fT=0.0;a.jC=0.0;$p=3;case 3:$z=AAp(a);if(C()){break _;}g=$z;$p=4;case 4:$z=XV(a);if(C()){break _;}h=$z;if(a.gR){if(g)a.h=a.h+0.03999999910593033;else if(h)a.h=a.h+0.03999999910593033;else if(a.ca)ABk(a);}a.hL=a.hL*0.9800000190734863;a.fT=a.fT*0.9800000190734863;a.jC=a.jC*0.8999999761581421;i=a.hL;j=a.fT;$p=5;case 5:YY(a,i,j);if(C()){break _;}k=a.k;l=Da(a.G,
0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=Zc(k,a,l);if(C()){break _;}k=$z;if(k!==null&&k.p>0){m=0;while(true){if(m>=k.p)break a;l=Z(k,m);if(l.p6())l.sO(a);m=m+1|0;}}}return;case 7:B4(a);if(C()){break _;}if(a.bI>0){$p=1;continue _;}a.gR=0;a.hL=0.0;a.fT=0.0;a.jC=0.0;$p=3;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ABk(a){a.h=0.41999998688697815;}
function AK8(a){var b,c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(L(a.l)<0.07000000029802322){a.hL=(L(a.l)-0.5)*a.q_;a.fT=L(a.l)*a.q_;}a.gR=L(a.l)>=0.009999999776482582?0:1;if(L(a.l)<0.03999999910593033)a.jC=(L(a.l)-0.5)*60.0;a.q=a.q+a.jC;a.E=a.w9;$p=1;case 1:$z=AAp(a);if(C()){break _;}b=$z;$p=2;case 2:$z=XV(a);if(C()){break _;}c=$z;if(!(!b&&!c))a.gR=L(a.l)>=0.800000011920929?0:1;return;default:Eq();}}CL().s(a,b,c,$p);}
function AU4(a){return;}
function Vf(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CC(a,b,c+a.ef/2.0,d);e=a.k;f=a.G;$p=1;case 1:$z=AHC(e,f);if(C()){break _;}g=$z;if(!g)return 0;e=a.k;f=a.G;$p=2;case 2:$z=TK(e,a,f);if(C()){break _;}e=$z;if(e.p)return 0;e=a.k;f=a.G;$p=3;case 3:$z=AEb(e,f);if(C()){break _;}g=$z;return g?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Xf(a){var b,c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=null;c=4;$p=1;case 1:a.eP(b,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,$p);}
function Hu(){var a=this;D_.call(a);a.dk=null;a.cR=null;a.gA=0;}
function AE7(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k;d=BR(a.c,a.i+AKO(a),a.d);b=BR(b.c,b.i+b.pY(),b.d);$p=1;case 1:$z=AEd(c,d,b);if(C()){break _;}b=$z;return b!==null?0:1;default:Eq();}}CL().s(a,b,c,d,$p);}
function AKe(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gA=0;b=16.0;if(a.cR===null){$p=1;continue _;}if(GQ(a.cR)){c=AMc(a.cR,a);d=a.cR;$p=2;continue _;}a.cR=null;a:{if(!a.gA&&a.cR!==null){if(a.dk===null)break a;if
(!D(a.l,20))break a;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=I(a.c+D(a.l,11)-5.0);k=I(a.i+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e=I(a.G.I);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 1:$z=a.vs();if(C()){break _;}d=$z;a.cR=d;if(a.cR!==null){d=a.k;m=a.cR;$p=3;continue _;}b:{if(!a.gA&&a.cR!==null){if(a.dk===null)break b;if(!D(a.l,20))break b;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<
50){j=I(a.c+D(a.l,11)-5.0);k=I(a.i+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e=I(a.G.I);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 2:$z=AE7(a,d);if(C()){break _;}e=$z;if(e){d=a.cR;$p=4;continue _;}b:{if(!a.gA&&a.cR!==null){if(a.dk===null)break b;if(!D(a.l,20))break b;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=I(a.c+D(a.l,11)-5.0);k=I(a.i+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e
=I(a.G.I);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 3:$z=AL7(d,a,m,b);if(C()){break _;}d=$z;a.dk=d;c:{if(!a.gA&&a.cR!==null){if(a.dk===null)break c;if(!D(a.l,20))break c;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=I(a.c+D(a.l,11)-5.0);k=I(a.i+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e=I(a.G.I);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 4:a.mr(d,c);if(C()){break _;}c:{if(!a.gA&&a.cR!==null){if(a.dk===null)break c;if
(!D(a.l,20))break c;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=I(a.c+D(a.l,11)-5.0);k=I(a.i+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e=I(a.G.I);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 5:$z=AAp(a);if(C()){break _;}n=$z;$p=6;case 6:$z=XV(a);if(C()){break _;}o=$z;if(a.dk!==null&&D(a.l,100)){d=Ps(a.dk,a);p=a.cC*2.0;q=p*p;r=e;while(d!==null&&Xs(d,a.c,a.i,a.d)<q&&d.v<=r){AKr(a.dk);if(!AHU(a.dk)){d=Ps(a.dk,a);continue;}d
=null;a.dk=null;}a.gR=0;if(d!==null){q=d.t-a.c;s=d.s-a.d;t=d.v-r;a.q=CB(s,q)*180.0/3.1415927410125732-90.0;a.fT=a.q_;if(a.gA&&a.cR!==null){u=a.cR.c-a.c;r=a.cR.d-a.d;v=a.q;a.q=CB(r,u)*180.0/3.1415927410125732-90.0;w=(v-a.q+90.0)*3.1415927410125732/180.0;a.hL= -Bl(w)*a.fT*1.0;a.fT=Bx(w)*a.fT*1.0;}if(t!==0.0)a.gR=1;}if(L(a.l)<0.800000011920929&&!(!n&&!o))a.gR=1;return;}$p=9;continue _;case 7:$z=AL7(d,a,m,b);if(C()){break _;}d=$z;a.dk=d;e=I(a.G.I);$p=5;continue _;case 8:$z=a.qO(j,k,l);if(C()){break _;}x=$z;if(x
>h){h=x;e=j;f=k;g=l;}i=i+1|0;if(i>=50){if(e>0){d=a.k;$p=10;continue _;}e=I(a.G.I);$p=5;continue _;}j=I(a.c+D(a.l,11)-5.0);k=I(a.i+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);continue _;case 9:AK8(a);if(C()){break _;}a.dk=null;return;case 10:$z=AEm(d,a,e,f,g,b);if(C()){break _;}d=$z;a.dk=d;e=I(a.G.I);$p=5;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AHd(a,b,c){return;}
function AFK(a){return null;}
function Yj(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Vf(a,b,c,d);if(C()){break _;}e=$z;if(!e)return 0;e=b|0;f=c|0;g=d|0;$p=2;case 2:$z=a.qO(e,f,g);if(C()){break _;}h=$z;return h<0.0?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function Dp(){Hu.call(this);this.BG=0;}
function YC(a){var b,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=Y$(a,b);if(C()){break _;}b=$z;if(b>0.5)a.gy=a.gy+2|0;$p=2;case 2:XX(a);if(C()){break _;}return;default:Eq();}}CL().s(a,b,$p);}
function AFS(a){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AG7(a);if(C()){break _;}if(a.k.h0)return;$p=2;case 2:B4(a);if(C()){break _;}return;default:Eq();}}CL().s(a,$p);}
function AFd(a){var b,c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(JO(a.k.bc,a)>=256.0)return null;b=a.k.bc;$p=1;case 1:$z=AE7(a,b);if(C()){break _;}c=$z;return !c?null:a.k.bc;default:Eq();}}CL().s(a,b,c,$p);}
function Wk(a,b,c){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Xy(a,b,c);if(C()){break _;}c=$z;if(!c)return 0;if(b!==a)a.cR=b;return 1;default:Eq();}}CL().s(a,b,c,$p);}
function ALa(a,b,c){var d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<2.5&&b.G.Q>a.G.I&&b.G.I<a.G.Q){a.c6=20;d=a.BG;$p=1;continue _;}return;case 1:b.eP(a,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function W7(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0.5;f=a.k;$p=1;case 1:$z=AHP(f,b,c,d);if(C()){break _;}g=$z;return e-g;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Un(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.k;f=I(b);g=I(c);h=I(d);$p=1;case 1:$z=Tr(e,f,g,h);if(C()){break _;}f=$z;if(f>D(a.l,8))return 0;$p=2;case 2:$z=Yj(a,b,c,d);if(C()){break _;}f=$z;return !f?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function HD(){Dp.call(this);}
function AC2(a){var b,c,d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!OE(a.k)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:YC(a);if(C()){break _;}return;case 2:$z=Y$(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.k;d=I(a.c);e=I(a.i);f=I(a.d);$p=3;case 3:$z=ABs(c,d,e,f);if(C()){break _;}d=$z;if(d&&L(a.l)*30.0<(b-0.4000000059604645)*2.0)a.cw=300;$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function APx(a){Bw();return A5e.cx;}
function HR(){Dp.call(this);}
function ADx(a){var b,c,d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!OE(a.k)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:YC(a);if(C()){break _;}return;case 2:$z=Y$(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.k;d=I(a.c);e=I(a.i);f=I(a.d);$p=3;case 3:$z=ABs(c,d,e,f);if(C()){break _;}d=$z;if(d&&L(a.l)*30.0<(b-0.4000000059604645)*2.0)a.cw=300;$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ACX(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<10.0){d=b.c-a.c;e=b.d-a.d;if(!a.c6){f=AM8(a.k,a);f.i=f.i+1.399999976158142;g=b.i-0.20000000298023224-f.i;h=B7(d*d+e*e)*0.20000000298023224;C2(a.k,a,B(217),1.0,1.0/(L(a.l)*0.4000000059604645+0.800000011920929));b=a.k;$p=1;continue _;}a.q=CB(e,d)*180.0/3.1415927410125732-90.0;a.gA=1;}return;case 1:AIM(b,f);if(C()){break _;}NP(f,
d,g+h,e,0.6000000238418579,12.0);a.c6=30;a.q=CB(e,d)*180.0/3.1415927410125732-90.0;a.gA=1;return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AQU(a){Bw();return A5f.cx;}
function In(){var a=this;Dp.call(a);a.ib=0;a.sq=0;a.yd=0;a.iU=0;}
function Vy(a){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.sq=a.ib;if(a.ib>0&&a.iU<0)a.ib=a.ib-1|0;if(a.iU>=0)a.iU=2;$p=1;case 1:AKe(a);if(C()){break _;}if(a.iU!=1)a.iU=(-1);return;default:Eq();}}CL().s(a,$p);}
function Wm(a,b,c){var d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(a.iU<=0&&c<3.0)){if(a.iU<=0)break a;if(c>=7.0)break a;}if(!a.ib)C2(a.k,a,B(218),1.0,0.5);a.iU=1;a.ib=a.ib+1|0;if(a.ib==a.yd){b=a.k;d=a.c;e=a.i;f=a.d;c=3.0;$p=1;continue _;}a.gA=1;}return;case 1:T1(b,a,d,e,f,c);if(C()){break _;}$p=2;case 2:B4(a);if(C()){break _;}a.gA=1;return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function NA(a,b){return (a.sq+(a.ib-a.sq|0)*b)/(a.yd-2|0);}
function AMX(a){Bw();return A5g.cx;}
function IN(){Dp.call(this);}
function ALE(a){var b,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=Y$(a,b);if(C()){break _;}b=$z;if(b<0.5&&JO(a.k.bc,a)<256.0)return a.k.bc;return null;default:Eq();}}CL().s(a,b,$p);}
function U_(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0;$p=1;case 1:a:{$z=Y$(a,d);if(C()){break _;}d=$z;if(d>0.5&&!D(a.l,100))a.cR=null;else{if(c<=2.0)break a;if(c>=6.0)break a;if(D(a.l,10))break a;if(a.ca){e=b.c-a.c;f=b.d-a.d;g=B7(e*e+f*f);a.f=e/g*0.5*0.800000011920929+a.f*0.20000000298023224;a.g=f/g*0.5*0.800000011920929+a.g*0.20000000298023224;a.h=0.4000000059604645;}}return;}$p=2;case 2:ALa(a,
b,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function ARA(a){Bw();return A5h.cx;}
function FF(){Hu.call(this);}
function AI3(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.k;f=c-1|0;$p=1;case 1:$z=X4(e,b,f,d);if(C()){break _;}g=$z;J();if(g==A3W.b)return 10.0;e=a.k;$p=2;case 2:$z=AHP(e,b,c,d);if(C()){break _;}h=$z;return h-0.5;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AFP(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.k;f=I(b);g=I(c);h=I(d);$p=1;case 1:$z=Tr(e,f,g,h);if(C()){break _;}g=$z;if(g<=8)return 0;$p=2;case 2:$z=Yj(a,b,c,d);if(C()){break _;}g=$z;return !g?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function I6(){FF.call(this);this.vw=0;}
function AB4(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.vw&&b instanceof D_){a.vw=1;d=1+D(a.l,3)|0;e=0;if(e<d){J();f=A4i.b;g=1;h=1.0;$p=2;continue _;}}$p=1;case 1:$z=Xy(a,b,c);if(C()){break _;}c=$z;return c;case 2:$z=ABR(a,f,g,h);if(C()){break _;}i=$z;i.h=i.h+L(a.l)*0.05000000074505806;i.f=i.f+(L(a.l)-L(a.l))*0.10000000149011612;i.g=i.g+(L(a.l)-L(a.l))*0.10000000149011612;e
=e+1|0;if(e>=d){$p=1;continue _;}J();f=A4i.b;g=1;h=1.0;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AWH(a){return B(219);}
function AUN(a){return B(219);}
function AQB(a){return B(219);}
function He(){FF.call(this);this.oR=0;}
function ANo(a){return B(220);}
function AYm(a){return B(220);}
function AO4(a){return B(221);}
function AQg(a,b){if(!a.oR)return 0;MP(b,a);return 1;}
function APb(a){Bw();return A5i.cx;}
function De(){var a=this;E.call(a);a.xI=0.0;a.uG=0;}
function A02(){var a=new De();AT9(a);return a;}
function A0_(a){var b=new De();AOQ(b,a);return b;}
function AT9(a){return;}
function AOQ(a,b){return;}
function Ls(a,b){return;}
function ABl(a,b){if(b==32)return Cb(a)*4.294967295E9+(-2.147483648E9)|0;return Cb(a)*Long_toNumber(Long_shl(Long_fromInt(1),CR(32,b)))|0;}
function JC(a){return ABl(a,32);}
function D(a,b){return Cb(a)*b|0;}
function FE(a){return Long_or(Long_shl(Long_fromInt(JC(a)),32),Long_fromInt(JC(a)));}
function L(a){return Cb(a);}
function Cb(a){return Math.random();}
function CH(a){var b,c,d,e;if(a.uG){a.uG=0;return a.xI;}while(true){while(true){b=2.0*Cb(a)-1.0;c=2.0*Cb(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=DK((-2.0)*AUB(d)/d);a.xI=c*e;a.uG=1;return b*e;}
function Lm(){E.call(this);}
var A5j=null;var A5k=null;function A5l(){var a=new Lm();ADi(a);return a;}
function ADi(a){return;}
function Hx(b){var c,d,e,f,g,h;A0K(K(Lm));try{BO();c=A5m+1|0;d=0;while(d<b){e=A5m+1|0;A5m=e;f=A5n;g=CG(e);h=new Ox;h.yo=e;h.px=null;h.nt=null;h.ky=(-1);h.iK=0;BK(f,g,h);d=d+1|0;}U(A5j,CG(c));U(A5j,CG(b));return c;}finally{A13(K(Lm));}}
function SQ(b){var c,d,e,f,g;A0K(K(Lm));try{c=b.be;while(c<b.cb){BO();d=A5o;Y();e=new MJ;f=A2O.createTexture();e.D9=(-1);e.D6=(-1);e.Co=1;e.Da=0;e.yE=f;g=PV(d,e);ALf(b,c,g);U(A5k,CG(g));c=c+1|0;}}finally{A13(K(Lm));}}
function SK(b){var c;c=V6($rt_createByteArray(b));c.jG=A5p;return c;}
function Ol(b){return AGy($rt_createIntArray(b));}
function GN(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new SI;f=0+d|0;Jb(e,d);e.be=0;e.cb=f;e.vM=0;e.u3=0;e.uY=c;return e;}
function AGD(){A5j=Ck();A5k=Ck();}
function US(){var a=this;E.call(a);a.cq=null;a.ei=null;a.h$=0.0;a.pp=0.0;a.hy=0;a.iO=0;a.xq=null;}
function A0m(a){var b=new US();AN9(b,a);return b;}
function AN9(a,b){a.ei=null;a.h$=0.0;a.pp=0.0;a.hy=0;a.iO=0;a.xq=IJ();a.cq=b;}
function Yq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.pp+(a.h$-a.pp)*b;d=a.cq.e;BU();Bq(d.P+(d.E-d.P)*b,1.0,0.0,0.0);Bq(d.K+(d.q-d.K)*b,0.0,1.0,0.0);Gm();By();e=a.cq.w;f=I(d.c);g
=I(d.i);h=I(d.d);$p=1;case 1:$z=AHP(e,f,g,h);if(C()){break _;}i=$z;BN(i,i,i,1.0);if(a.ei===null){BU();if(a.iO){j=(a.hy+b)/8.0;k=Bl(j*3.1415927410125732);Br( -Bl(DF(j)*3.1415927410125732)*0.30000001192092896,Bl(DF(j)*3.1415927410125732*2.0)*0.4000000059604645, -k*0.4000000059604645);}Br(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bq(45.0,0.0,1.0,0.0);V(32826);if(a.iO){j=(a.hy+b)/8.0;k=Bl(j*j*3.1415927410125732);Bq(Bl(DF(j)*3.1415927410125732)*70.0,0.0,1.0,0.0);Bq( -k
*20.0,0.0,0.0,1.0);}f=3553;d=a.cq.bi;e=a.cq.e.rT;l=M7(a.cq.e);$p=2;continue _;}BU();if(a.iO){j=(a.hy+b)/8.0;k=Bl(j*3.1415927410125732);Br( -Bl(DF(j)*3.1415927410125732)*0.4000000059604645,Bl(DF(j)*3.1415927410125732*2.0)*0.20000000298023224, -k*0.20000000298023224);}Br(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bq(45.0,0.0,1.0,0.0);V(32826);if(a.iO){j=(a.hy+b)/8.0;k=Bl(j*j*3.1415927410125732);m=Bl(DF(j)*3.1415927410125732);Bq( -k*20.0,0.0,1.0,0.0);b= -m;Bq(b*20.0,
0.0,0.0,1.0);Bq(b*80.0,1.0,0.0,0.0);}Co(0.4000000059604645,0.4000000059604645,0.4000000059604645);if(a.ei.bs<256){J();if(!A3U.data[a.ei.bs].dO()){f=3553;d=a.cq.bi;e=B(171);$p=5;continue _;}}if(a.ei.bs>=256){f=3553;d=a.cq.bi;e=B(222);$p=3;continue _;}f=3553;d=a.cq.bi;e=B(171);$p=4;continue _;case 2:$z=Zt(d,e,l);if(C()){break _;}g=$z;Ce(f,g);Br((-1.0),3.5999999046325684,3.5);Bq(120.0,0.0,0.0,1.0);Bq(200.0,1.0,0.0,0.0);Bq((-135.0),0.0,1.0,0.0);Co(1.0,1.0,1.0);Br(5.599999904632568,0.0,0.0);n=Pf(A5q,a.cq.e);Co(1.0,
1.0,1.0);AGh(n);By();X(32826);Dr();return;case 3:$z=ACB(d,e);if(C()){break _;}g=$z;Ce(f,g);Bv();e=A3Q;m=(((Dk(a.ei)%16|0)*16|0)+0|0)/256.0;o=(((Dk(a.ei)%16|0)*16|0)+16|0)/256.0;p=(((Dk(a.ei)/16|0)*16|0)+0|0)/256.0;q=(((Dk(a.ei)/16|0)*16|0)+16|0)/256.0;V(32826);Br(-0.0,(-0.30000001192092896),0.0);Co(1.5,1.5,1.5);Bq(50.0,0.0,1.0,0.0);Bq(335.0,0.0,0.0,1.0);Br((-0.9375),(-0.0625),0.0);Bu(e);CX(e,0.0,0.0,1.0);r=o;s=q;F(e,0.0,0.0,0.0,r,s);t=m;F(e,1.0,0.0,0.0,t,s);u=p;F(e,1.0,1.0,0.0,t,u);F(e,0.0,1.0,0.0,r,u);Bm(e);Bu(e);CX(e,
0.0,0.0,(-1.0));F(e,0.0,1.0,(-0.0625),r,u);F(e,1.0,1.0,(-0.0625),t,u);F(e,1.0,0.0,(-0.0625),t,s);F(e,0.0,0.0,(-0.0625),r,s);Bm(e);Bu(e);CX(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;F(e,x,0.0,(-0.0625),y,s);F(e,x,0.0,0.0,y,s);F(e,x,1.0,0.0,y,u);F(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Bm(e);Bu(e);CX(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;F(e,x,1.0,(-0.0625),y,u);F(e,x,1.0,0.0,y,u);F(e,x,0.0,0.0,y,s);F(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Bm(e);Bu(e);CX(e,
0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;F(e,0.0,z,0.0,r,ba);F(e,1.0,z,0.0,t,ba);F(e,1.0,z,(-0.0625),t,ba);F(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Bm(e);Bu(e);CX(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;F(e,1.0,x,0.0,t,y);F(e,0.0,x,0.0,r,y);F(e,0.0,x,(-0.0625),r,y);F(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Bm(e);X(32826);By();X(32826);Dr();return;case 4:$z=ACB(d,e);if(C()){break _;}g=$z;Ce(f,g);Bv();e=A3Q;m=(((Dk(a.ei)%16|0)*16|0)+0|0)/256.0;o=
(((Dk(a.ei)%16|0)*16|0)+16|0)/256.0;p=(((Dk(a.ei)/16|0)*16|0)+0|0)/256.0;q=(((Dk(a.ei)/16|0)*16|0)+16|0)/256.0;V(32826);Br(-0.0,(-0.30000001192092896),0.0);Co(1.5,1.5,1.5);Bq(50.0,0.0,1.0,0.0);Bq(335.0,0.0,0.0,1.0);Br((-0.9375),(-0.0625),0.0);Bu(e);CX(e,0.0,0.0,1.0);r=o;s=q;F(e,0.0,0.0,0.0,r,s);t=m;F(e,1.0,0.0,0.0,t,s);u=p;F(e,1.0,1.0,0.0,t,u);F(e,0.0,1.0,0.0,r,u);Bm(e);Bu(e);CX(e,0.0,0.0,(-1.0));F(e,0.0,1.0,(-0.0625),r,u);F(e,1.0,1.0,(-0.0625),t,u);F(e,1.0,0.0,(-0.0625),t,s);F(e,0.0,0.0,(-0.0625),r,s);Bm(e);Bu(e);CX(e,
(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;F(e,x,0.0,(-0.0625),y,s);F(e,x,0.0,0.0,y,s);F(e,x,1.0,0.0,y,u);F(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Bm(e);Bu(e);CX(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;F(e,x,1.0,(-0.0625),y,u);F(e,x,1.0,0.0,y,u);F(e,x,0.0,0.0,y,s);F(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Bm(e);Bu(e);CX(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;F(e,0.0,z,0.0,r,ba);F(e,1.0,z,0.0,t,ba);F(e,
1.0,z,(-0.0625),t,ba);F(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Bm(e);Bu(e);CX(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;F(e,1.0,x,0.0,t,y);F(e,0.0,x,0.0,r,y);F(e,0.0,x,(-0.0625),r,y);F(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Bm(e);X(32826);By();X(32826);Dr();return;case 5:$z=ACB(d,e);if(C()){break _;}g=$z;Ce(f,g);FX(a.xq,A3U.data[a.ei.bs]);By();X(32826);Dr();return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function XG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:X(3008);if(a.cq.e.cw<=0){c=a.cq.w.bc;$p=1;continue _;}c=a.cq.bi;d=B(171);$p=2;continue _;case 1:$z=ACF(c);if(C()){break _;}e=$z;if(!e){d=a.cq.e;c=A4R;$p=3;continue _;}e=I(a.cq.e.c);f=I(a.cq.e.i);g=I(a.cq.e.d);c=
a.cq.bi;d=B(171);$p=4;continue _;case 2:$z=ACB(c,d);if(C()){break _;}e=$z;Ce(3553,e);Bv();c=A3Q;BN(1.0,1.0,1.0,0.8999999761581421);V(3042);C0(770,771);e=0;while(e<2){BU();J();f=A5r.W+(e*16|0)|0;g=(f&15)<<4;f=f&240;h=g;i=h/256.0;h=(h+15.989999771118164)/256.0;j=f;k=j/256.0;j=(j+15.989999771118164)/256.0;f=(e*2|0)-1|0;Br( -f*0.23999999463558197,(-0.30000001192092896),0.0);Bq(f*10.0,0.0,1.0,0.0);Bu(c);l=h;m=j;F(c,(-0.5),(-0.5),(-0.5),l,m);n=i;F(c,0.5,(-0.5),(-0.5),n,m);m=k;F(c,0.5,0.5,(-0.5),n,m);F(c,(-0.5),0.5,
(-0.5),l,m);Bm(c);By();e=e+1|0;}BN(1.0,1.0,1.0,1.0);X(3042);c=a.cq.w.bc;$p=1;continue _;case 3:$z=ABS(d,c);if(C()){break _;}e=$z;if(!e){V(3008);return;}c=a.cq.bi;d=B(223);$p=6;continue _;case 4:$z=ACB(c,d);if(C()){break _;}o=$z;Ce(3553,o);c=a.cq.w;$p=5;case 5:$z=X4(c,e,f,g);if(C()){break _;}p=$z;J();if(A3U.data[p]===null){d=a.cq.e;c=A4R;$p=3;continue _;}e=A3U.data[p].bZ(2);Bv();c=A3Q;d=a.cq.e;$p=8;continue _;case 6:$z=ACB(c,d);if(C()){break _;}e=$z;Ce(3553,e);Bv();c=A3Q;d=a.cq.e;$p=7;case 7:$z=Y$(d,b);if(C())
{break _;}h=$z;BN(h,h,h,0.5);V(3042);C0(770,771);BU();h= -a.cq.e.q/64.0;i=a.cq.e.E/64.0;Bu(c);q=4.0+h;l=4.0+i;F(c,(-1.0),(-1.0),(-0.5),q,l);r=0.0+h;F(c,1.0,(-1.0),(-0.5),r,l);l=0.0+i;F(c,1.0,1.0,(-0.5),r,l);F(c,(-1.0),1.0,(-0.5),q,l);Bm(c);By();BN(1.0,1.0,1.0,1.0);X(3042);V(3008);return;case 8:Y$(d,b);if(C()){break _;}BN(0.10000000149011612,0.10000000149011612,0.10000000149011612,0.5);BU();i=e%16|0;j=i/256.0-0.0078125;i=(i+15.989999771118164)/256.0+0.0078125;k=e/16|0;s=k/256.0-0.0078125;h=(k+15.989999771118164)
/256.0+0.0078125;Bu(c);q=i;l=h;F(c,(-1.0),(-1.0),(-0.5),q,l);r=j;F(c,1.0,(-1.0),(-0.5),r,l);l=s;F(c,1.0,1.0,(-0.5),r,l);F(c,(-1.0),1.0,(-0.5),q,l);Bm(c);By();BN(1.0,1.0,1.0,1.0);d=a.cq.e;c=A4R;$p=3;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AD3(a){var b,c,d,e;a.pp=a.h$;if(a.iO){a.hy=a.hy+1|0;if(a.hy==8){a.hy=0;a.iO=0;}}b=DD(a.cq.e.F);c=0.4000000059604645;d=(b!==a.ei?0.0:1.0)-a.h$;e=(-0.4000000059604645);if(d>=e)e=d;if(e<=c)c=e;a.h$=a.h$+c;if(a.h$<0.10000000149011612)a.ei=b;}
function ABV(a){a.h$=0.0;}
function MR(a){a.hy=(-1);a.iO=1;}
function AHE(a){a.h$=0.0;}
function P(){var a=this;E.call(a);a.W=0;a.b=0;a.oy=0.0;a.ms=0.0;a.cM=0.0;a.cm=0.0;a.cL=0.0;a.cP=0.0;a.ch=0.0;a.cQ=0.0;a.fY=null;a.AW=0.0;a.bR=null;}
var A5s=null;var A5t=null;var A5u=null;var A5v=null;var A5w=null;var A5x=null;var A5y=null;var A5z=null;var A5A=null;var A3U=null;var A5B=null;var A5C=null;var A5D=null;var A5E=null;var A5F=null;var A30=null;var A3W=null;var A3X=null;var A34=null;var A36=null;var A4a=null;var A3V=null;var A4Z=null;var A5G=null;var A40=null;var A5H=null;var A4f=null;var A4g=null;var A4l=null;var A4k=null;var A4j=null;var A37=null;var A38=null;var A4h=null;var A3$=null;var A5I=null;var A5J=null;var A5K=null;var A5L=null;var A5M
=null;var A5N=null;var A5O=null;var A5P=null;var A5Q=null;var A5R=null;var A5S=null;var A5T=null;var A5U=null;var A5V=null;var A4i=null;var A5W=null;var A4b=null;var A4c=null;var A4d=null;var A4e=null;var A4n=null;var A4m=null;var A3Y=null;var A3Z=null;var A35=null;var A4p=null;var A4o=null;var A3_=null;var A4q=null;var A39=null;var A5r=null;var A5X=null;var A5Y=null;var A5Z=null;var A50=null;var A51=null;var A52=null;var A53=null;var A54=null;var A55=null;var A56=null;var A57=null;var A58=null;var A59=null;var A5d
=null;var A5$=null;var A5_=null;function J(){J=Bt(P);AOx();}
function A6a(a,b){var c=new P();Dw(c,a,b);return c;}
function I0(a,b,c){var d=new P();CS(d,a,b,c);return d;}
function Dw(a,b,c){var d,e,f;J();a.fY=A5s;a.AW=1.0;if(A3U.data[b]!==null){c=new Cq;d=new Bd;Bb(d);Bp(c,O(EY(H(EY(H(Be(H(d,B(224)),b),B(225)),A3U.data[b]),B(226)),a)));M(c);}a.bR=c;A3U.data[b]=a;a.b=b;Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);A5C.data[b]=a.dy();e=A5D;f=!a.dy()?0:255;e.data[b]=f;A5E.data[b]=0;}
function CS(a,b,c,d){J();Dw(a,b,d);a.W=c;}
function BG(a,b){a.fY=b;return a;}
function FB(a,b){A5D.data[a.b]=b;return a;}
function FM(a,b){A5F.data[a.b]=15.0*b|0;return a;}
function C6(a,b){a.ms=b*3.0;return a;}
function AX7(a){return 1;}
function APs(a){return 0;}
function BB(a,b){var c;a.oy=b;c=a.ms;b=b*5.0;if(c<b)a.ms=b;return a;}
function Ew(a,b){A5B.data[a.b]=b;}
function Bj(a,b,c,d,e,f,g){a.cM=b;a.cm=c;a.cL=d;a.cP=e;a.ch=f;a.cQ=g;}
function AAt(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.qY(c,d,e);if(C()){break _;}f=$z;return f;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ABG(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!f&&a.cm>0.0)c=1;else if(f==1&&a.ch<1.0)c=1;else if(f==2&&a.cL>0.0)c=1;else if(f==3&&a.cQ<1.0)c=1;else if(f==4&&a.cM>0.0)c=1;else{if(f!=5)break a;if(a.cP>=1.0)break a;c=1;}return c;}$p=1;case 1:$z=b.j7(c,d,e);if(C()){break _;}c=$z;return c?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Xv(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ea(c,d,e);if(C()){break _;}c=$z;return a.em(f,c);default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AWS(a,b,c){return a.bZ(b);}
function AON(a,b){return a.W;}
function Jp(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.cM;h=d;i=h+a.cm;j=e;return Dy(g,i,j+a.cL,f+a.cP,h+a.ch,j+a.cQ);}
function AGg(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.gH(b,c,d,e);if(C()){break _;}h=$z;if(h!==null&&Kd(f,h))U(g,h);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function Lb(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.cM;h=d;i=h+a.cm;j=e;return Dy(g,i,j+a.cL,f+a.cP,h+a.ch,j+a.cQ);}
function AVs(a){return 1;}
function AWg(a,b,c){return a.nI();}
function AUw(a){return 1;}
function ACU(a,b,c,d,e,f){return;}
function AJH(a,b,c,d,e,f){return;}
function VO(a,b,c,d,e,f){return;}
function UC(a,b,c,d,e,f){return;}
function AUE(a){return 10;}
function WI(a,b,c,d,e){return;}
function VK(a,b,c,d,e){return;}
function AQD(a,b){return 1;}
function ANB(a,b,c){return a.b;}
function WP(a,b){var c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.oy<0.0)c=0.0;else{if(K0(b,a)){$p=1;continue _;}c=1.0/a.oy/100.0;}return c;case 1:$z=AFD(b,a);if(C()){break _;}c=$z;return c/a.oy/30.0;default:Eq();}}CL().s(a,b,c,$p);}
function T9(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=1.0;$p=1;case 1:a.DG(b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AAh(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.d_(b.n);i=0;j=0.15000000596046448;k=c;l=d;m=e;while(i<h){if(L(b.n)<=g){n=a.dq(f,b.n);if(n>0){o=F$(b,k+L(b.n)*0.699999988079071+j,l+L(b.n)*0.699999988079071+j,m+L(b.n)*0.699999988079071+j,I1(n,1));o.go=10;$p=1;continue _;}}i=i+1|0;}return;case 1:AIM(b,
o);if(C()){break _;}while(true){i=i+1|0;if(i>=h)break;if(L(b.n)>g)continue;n=a.dq(f,b.n);if(n<=0)continue;else{o=F$(b,k+L(b.n)*0.699999988079071+j,l+L(b.n)*0.699999988079071+j,m+L(b.n)*0.699999988079071+j,I1(n,1));o.go=10;continue _;}}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ARN(a,b){return a.ms/5.0;}
function IC(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;h= -c;i= -d;j= -e;b=C3(f,h,i,j);f=C3(g,h,i,j);k=I_(b,f,a.cM);l=I_(b,f,a.cP);m=Ik(b,f,a.cm);n=Ik(b,f,a.ch);o=IY(b,f,a.cL);p=IY(b,f,a.cQ);if(!OB(a,k))k=null;if(!OB(a,l))l=null;if(!Tl(a,m))m=null;if(!Tl(a,n))n=null;if(!OT(a,o))o=null;if(!OT(a,p))p=null;q=null;if(k!==null)q=k;if(l!==null&&!(q!==null&&Dh(b,l)>=Dh(b,q)))q=l;if(m!==null&&!(q!==null&&Dh(b,m)>=Dh(b,q)))q=m;if(n!==null&&!(q!==null&&Dh(b,n)>=Dh(b,q)))q=n;if(o!==null&&!(q!==null&&Dh(b,o)>=Dh(b,q)))q=
o;if(p!==null&&!(q!==null&&Dh(b,p)>=Dh(b,q)))q=p;if(q===null)return null;r=(-1);if(q===k)r=4;if(q===l)r=5;if(q===m)r=0;if(q===n)r=1;if(q===o)r=2;if(q===p)r=3;return ASc(c,d,e,r,C3(q,c,d,e));}
function OB(a,b){return b===null?0:b.v>=a.cm&&b.v<=a.ch&&b.s>=a.cL&&b.s<=a.cQ?1:0;}
function Tl(a,b){return b===null?0:b.t>=a.cM&&b.t<=a.cP&&b.s>=a.cL&&b.s<=a.cQ?1:0;}
function OT(a,b){return b===null?0:b.t>=a.cM&&b.t<=a.cP&&b.v>=a.cm&&b.v<=a.ch?1:0;}
function ALe(a,b,c,d,e){return;}
function AOz(a){return 0;}
function Z2(a,b,c,d,e){return 1;}
function ABT(a,b,c,d,e,f){return 0;}
function AEA(a,b,c,d,e,f){return;}
function Uv(a,b,c,d,e,f){return;}
function VV(a,b,c,d,e,f){return;}
function ABj(a,b,c,d,e,f,g){return;}
function AKm(a,b,c,d,e){return;}
function AYi(a,b,c,d,e){return 16777215;}
function AOx(){var b,c;A5s=G2(B(227),1.0,1.0);A5t=G2(B(228),1.0,1.0);A5u=G2(B(229),1.0,1.0);A5v=G2(B(230),1.0,1.0);A5w=G2(B(227),1.0,1.0);A5x=G2(B(227),1.0,1.5);A5y=AZ2(B(227),1.0,1.0);A5z=G2(B(231),1.0,1.0);A5A=A1z(B(232),1.0,1.0);A3U=N(P,256);A5B=$rt_createBooleanArray(256);A5C=$rt_createBooleanArray(256);A5D=$rt_createIntArray(256);A5E=$rt_createBooleanArray(256);A5F=$rt_createIntArray(256);A30=BG(C6(BB(A0W(1,1),1.5),10.0),A5w);A3W=BG(BB(A1b(2),0.6000000238418579),A5v);A3X=BG(BB(AZ7(3,2),0.5),A5u);A34=BG(C6(BB(I0(4,
16,A6b),2.0),10.0),A5w);A36=BG(C6(BB(I0(5,4,A6c),2.0),5.0),A5t);A4a=BG(BB(A1O(6,15),0.0),A5v);A3V=BG(C6(BB(I0(7,17,A6b),(-1.0)),6000000.0),A5w);A4Z=FB(BB(ANU(8,A4R),100.0),3);A5G=FB(BB(AP9(9,A4R),100.0),3);A40=FB(FM(BB(ANU(10,A4S),0.0),1.0),255);A5H=FB(FM(BB(AP9(11,A4S),100.0),1.0),255);A4f=BG(BB(A1a(12,18),0.5),A5A);A4g=BG(BB(A1e(13,19),0.6000000238418579),A5u);A4l=BG(C6(BB(PF(14,32),3.0),5.0),A5w);A4k=BG(C6(BB(PF(15,33),3.0),5.0),A5w);A4j=BG(C6(BB(PF(16,34),3.0),5.0),A5w);A37=BG(BB(A11(17),2.0),A5t);A38=BG(FB(BB(A0w(18,
52),0.20000000298023224),1),A5v);A4h=BG(BB(A0R(19),0.6000000238418579),A5v);A3$=BG(BB(A0O(20,49,A6d,0),0.30000001192092896),A5y);A5I=null;A5J=null;A5K=null;A5L=null;A5M=null;A5N=null;A5O=null;A5P=null;A5Q=null;A5R=null;A5S=null;A5T=null;A5U=null;A5V=null;A4i=BG(BB(I0(35,64,A6e),0.800000011920929),A5z);A5W=null;A4b=BG(BB(AUd(37,13),0.0),A5v);A4c=BG(BB(AUd(38,12),0.0),A5v);A4d=FM(BG(BB(ANz(39,29),0.0),A5v),0.125);A4e=BG(BB(ANz(40,28),0.0),A5v);A4n=BG(C6(BB(ZY(41,39),3.0),10.0),A5x);A4m=BG(C6(BB(ZY(42,38),5.0),
10.0),A5x);A3Y=BG(C6(BB(AYj(43,1),2.0),10.0),A5w);A3Z=BG(C6(BB(AYj(44,0),2.0),10.0),A5w);A35=BG(C6(BB(I0(45,7,A6b),2.0),10.0),A5w);A4p=BG(BB(A0x(46,8),0.0),A5v);A4o=BG(BB(A0h(47,35),1.5),A5t);A3_=BG(C6(BB(I0(48,36,A6b),2.0),10.0),A5w);A4q=BG(C6(BB(A03(49,37),10.0),20.0),A5w);A39=BG(FM(BB(A0T(50,80),0.0),0.9375),A5t);A5r=BG(FM(BB(A14(51,31),0.0),1.0),A5t);A5X=BG(BB(A1Y(52,65),5.0),A5x);A5Y=AZd(53,A36);A5Z=BG(BB(AZ9(54),2.5),A5t);A50=BG(BB(A1h(55,62),0.5),A5x);A51=BG(C6(BB(PF(56,50),3.0),5.0),A5w);A52=BG(C6(BB(ZY(57,
40),5.0),10.0),A5x);A53=BG(BB(A05(58),2.5),A5t);A54=BG(BB(A1Q(59,88),0.0),A5v);A55=BG(BB(A1p(60),0.6000000238418579),A5u);A56=BG(BB(AU5(61,0),3.5),A5w);A57=FM(BG(BB(AU5(62,1),3.5),A5w),0.875);b=new RC;Bw();ACA(b,63,K(HN),A6f.cx);A58=BG(BB(b,1.0),A5t);A59=BG(BB(A0b(64),3.0),A5t);A5d=BG(BB(A1H(65,83),0.4000000059604645),A5t);A5$=BG(BB(A0I(66,128),1.0),A5x);A5_=AZd(67,A34);c=0;while(c<256){if(A3U.data[c]!==null)A6g.data[c]=AZ8(c-256|0);c=c+1|0;}}
function OH(){}
function AD$(){var a=this;Fl.call(a);a.eu=null;a.p=0;}
function Ck(){var a=new AD$();AO7(a);return a;}
function AO7(a){a.eu=N(E,10);}
function ADJ(a,b){var c;if(a.eu.data.length<b){c=a.eu.data.length>=1073741823?2147483647:DU(b,DU(a.eu.data.length*2|0,5));a.eu=AHb(a.eu,c);}}
function Z(a,b){Jq(a,b);return a.eu.data[b];}
function CZ(a){return a.p;}
function Og(a,b,c){var d;Jq(a,b);d=a.eu.data[b];a.eu.data[b]=c;return d;}
function U(a,b){var c,d;ADJ(a,a.p+1|0);c=a.eu.data;d=a.p;a.p=d+1|0;c[d]=b;a.d8=a.d8+1|0;return 1;}
function Em(a,b){var c,d,e,f;Jq(a,b);c=a.eu.data[b];a.p=a.p-1|0;while(b<a.p){d=a.eu.data;e=a.eu.data;f=b+1|0;d[b]=e[f];b=f;}a.eu.data[a.p]=null;a.d8=a.d8+1|0;return c;}
function GT(a,b){var c;c=WL(a,b);if(c<0)return 0;Em(a,c);return 1;}
function DB(a){Vp(a.eu,0,a.p,null);a.p=0;}
function Jq(a,b){var c;if(b>=0&&b<a.p)return;c=new BV;R(c);M(c);}
function Dg(){}
function Ql(){E.call(this);this.xS=null;}
function AKY(a){Cx(a.xS,PK(0,1,null,null));}
function APh(a){AKY(a);}
function Qk(){var a=this;E.call(a);a.AS=null;a.A8=null;}
function AKW(a){Cx(a.AS,PK(0,0,null,a.A8.result));}
function AM5(a){AKW(a);}
function Qj(){E.call(this);this.z$=null;}
function AMn(a){Cx(a.z$,PK(1,0,B(233),null));}
function ARf(a){AMn(a);}
function Qi(){E.call(this);this.yj=null;}
function AE0(a,b){var c,d,e,f,g,h,i;c=a.yj.result;d=AYE();e=N(Cp,1).data;e[0]=B(234);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function AIf(a,b){AE0(a,b);}
function AWs(a,b){AIf(a,b);}
function Px(){E.call(this);}
var A49=null;function A6h(){var a=new Px();Vx(a);return a;}
function Vx(a){return;}
function AAI(){A49=CY();BK(A49,B(18),ASY());}
function Cq(){B5.call(this);}
function A6i(){var a=new Cq();ANN(a);return a;}
function ANN(a){R(a);}
function Rp(){Cq.call(this);this.Ef=null;}
function EG(){B5.call(this);}
function A19(){var a=new EG();AOc(a);return a;}
function AOc(a){R(a);}
function WJ(){E.call(this);}
function A6j(){var a=new WJ();AQ6(a);return a;}
function AQ6(a){return;}
function EA(){var a=this;E.call(a);a.li=0;a.be=0;a.cb=0;a.kh=0;}
function A6k(a){var b=new EA();Jb(b,a);return b;}
function Jb(a,b){a.kh=(-1);a.li=b;a.cb=b;}
function AOL(a){return a.li;}
function AXI(a){return a.be;}
function D$(a,b){var c,d;if(b>=0&&b<=a.cb){a.be=b;if(b<a.kh)a.kh=0;return a;}c=new Cq;d=new Bd;Bb(d);Bp(c,O(H(Be(H(Be(H(d,B(235)),b),B(236)),a.cb),B(237))));M(c);}
function ASz(a){return a.cb;}
function Lc(a,b){var c,d;if(b>=0&&b<=a.li){if(a.kh>b)a.kh=(-1);a.cb=b;if(a.be>a.cb)a.be=a.cb;return a;}c=new Cq;d=new Bd;Bb(d);Bp(c,O(H(Be(H(Be(H(d,B(238)),b),B(236)),a.li),B(237))));M(c);}
function D2(a){a.be=0;a.cb=a.li;a.kh=(-1);return a;}
function FA(a){a.cb=a.be;a.be=0;a.kh=(-1);return a;}
function Ci(a){return a.cb-a.be|0;}
function EB(a){return a.be>=a.cb?0:1;}
function Kf(){EA.call(this);}
function YU(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BV;i=new Bd;Bb(i);Bp(h,O(Be(H(Be(H(i,B(239)),g),B(240)),f)));M(h);}if(Ci(a)<d){h=new Fx;R(h);M(h);}if(d<0){h=new BV;i=new Bd;Bb(i);Bp(h,O(H(Be(H(i,B(241)),d),B(242))));M(h);}g=a.be;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=OL(a,g);j=j+1|0;c=k;g=f;}a.be=a.be+d|0;return a;}}b=b.data;i=new BV;h=new Bd;Bb(h);Bp(i,O(H(Be(H(Be(H(h,B(243)),c),B(236)),b.length),B(21))));M(i);}
function RQ(a,b){return YU(a,b,0,b.data.length);}
function J1(a){D2(a);return a;}
function Qp(a){FA(a);return a;}
function Nr(a,b){Lc(a,b);return a;}
function AAn(){var a=this;E.call(a);a.C=null;a.cc=0;a.eO=0;a.di=0;}
function AXC(a){var b=new AAn();ANr(b,a);return b;}
function IJ(){var a=new AAn();AM$(a);return a;}
function ANr(a,b){a.cc=(-1);a.eO=0;a.di=0;a.C=b;}
function AM$(a){a.cc=(-1);a.eO=0;a.di=0;}
function AHa(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cc=f;$p=1;case 1:AIv(a,b,c,d,e);if(C()){break _;}a.cc=(-1);return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AIv(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b.dO();g=a.C;$p=1;case 1:b.vf(g,c,d,e);if(C()){break _;}if(!f){$p=2;continue _;}if(f==4){$p=3;continue _;}if(f==1){$p=4;continue _;}if(f==6){$p=5;continue _;}if(f==2){$p=6;continue _;}if(f==3){$p=7;continue _;}if(f==5){$p=8;continue _;}if(f==8){$p=9;continue _;}if(f==7){$p=10;continue _;}if(f==9){$p=11;continue _;}if(f==10){$p=12;continue _;}if
(f!=11)return 0;$p=13;continue _;case 2:$z=Xq(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 3:$z=XA(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 4:$z=WK(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 5:$z=AGr(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 6:$z=AIx(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 7:$z=VB(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 8:$z=YX(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 9:$z=AEo(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 10:$z=AFq(a,b,c,d,e);if(C()){break _;}c
=$z;return c;case 11:$z=AHF(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 12:$z=ADr(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 13:$z=AAZ(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AIx(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.C;$p=1;case 1:$z=f.ea(c,d,e);if(C()){break _;}g=$z;Bv();f=A3Q;h=a.C;$p=2;case 2:$z=b.zj(h,c,d,e);if(C()){break _;}i=$z;if(A5F.data[b.b]>0)i=1.0;Cf(f,i,i,i);if(g==1)FK(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if(g==2)FK(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,
0.0);else if(g==3)FK(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(g!=4)FK(a,b,c,d,e,0.0,0.0);else FK(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function VB(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:Bv();f=A3Q;g=b.bZ(0);if(a.cc>=0)g=a.cc;h=a.C;$p=1;case 1:$z=b.zj(h,c,d,e);if(C()){break _;}i=$z;Cf(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=i+15.989999771118164;p=o/256.0;q=1.399999976158142;b=a.C;g=d-1|0;$p=2;case 2:$z=b.j7(c,g,e);if(C()){break _;}j=$z;if(j){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;F(f,x,bb,bc,m,n);bd=d+0|0;F(f,s,bd,bc,m,p);be=e+0|0;F(f,s,bd,be,l,p);F(f,x,bb,be,l,n);F(f,y,bb,be,
m,n);F(f,t,bd,be,m,p);F(f,t,bd,bc,l,p);F(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;F(f,t,bb,ba,m,y);F(f,t,bd,w,m,s);x=c+0|0;F(f,x,bd,w,l,s);F(f,x,bb,ba,l,y);F(f,x,bb,z,m,y);F(f,x,bd,v,m,s);F(f,t,bd,v,l,s);F(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;F(f,bg,bb,be,l,y);F(f,v,bd,be,l,s);F(f,v,bd,bc,m,s);F(f,bg,bb,bc,m,y);F(f,bh,bb,bc,l,y);F(f,z,bd,bc,l,s);F(f,z,bd,be,m,s);F(f,bh,bb,be,m,y);F(f,x,bb,w,l,n);F(f,x,bd,bf,l,p);F(f,t,bd,bf,m,p);F(f,t,bb,w,m,n);F(f,
t,bb,r,l,n);F(f,t,bd,ba,l,p);F(f,x,bd,ba,m,p);F(f,x,bb,r,m,n);return 1;}b=A5r;h=a.C;$p=3;case 3:$z=ABd(b,h,c,g,e);if(C()){break _;}g=$z;if(g){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;F(f,x,bb,bc,m,n);bd=d+0|0;F(f,s,bd,bc,m,p);be=e+0|0;F(f,s,bd,be,l,p);F(f,x,bb,be,l,n);F(f,y,bb,be,m,n);F(f,t,bd,be,m,p);F(f,t,bd,bc,l,p);F(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;F(f,t,bb,ba,m,y);F(f,t,bd,w,m,s);x=c+0|0;F(f,x,bd,w,l,s);F(f,x,bb,ba,l,y);F(f,
x,bb,z,m,y);F(f,x,bd,v,m,s);F(f,t,bd,v,l,s);F(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;F(f,bg,bb,be,l,y);F(f,v,bd,be,l,s);F(f,v,bd,bc,m,s);F(f,bg,bb,bc,m,y);F(f,bh,bb,bc,l,y);F(f,z,bd,bc,l,s);F(f,z,bd,be,m,s);F(f,bh,bb,be,m,y);F(f,x,bb,w,l,n);F(f,x,bd,bf,l,p);F(f,t,bd,bf,m,p);F(f,t,bb,w,m,n);F(f,t,bb,r,l,n);F(f,t,bd,ba,l,p);F(f,x,bd,ba,m,p);F(f,x,bb,r,m,n);return 1;}bi=0.20000000298023224;bj=0.0625;if((((c+d|0)+e|0)&1)!=1){ba=l;bb=m;x=n;z=p;}else{x=(k+16|0)/256.0;z=(o
+16.0)/256.0;ba=l;bb=m;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){r=ba;ba=bb;bb=r;}b=A5r;h=a.C;g=c-1|0;$p=4;case 4:$z=ABd(b,h,g,d,e);if(C()){break _;}g=$z;if(g){w=c+bi;s=d+q+bj;t=e+1|0;F(f,w,s,t,ba,x);u=c+0|0;v=(d+0|0)+bj;F(f,u,v,t,ba,z);r=e+0|0;F(f,u,v,r,bb,z);F(f,w,s,r,bb,x);F(f,w,s,r,bb,x);F(f,u,v,r,bb,z);F(f,u,v,t,ba,z);F(f,w,s,t,ba,x);}b=A5r;h=a.C;j=c+1|0;$p=5;case 5:$z=ABd(b,h,j,d,e);if(C()){break _;}g=$z;if(g){r=j-bi;w=d+q+bj;s=e+0|0;F(f,r,w,s,bb,x);t=j-0|0;u=(d+0|0)+bj;F(f,t,u,s,bb,z);v=e+1|0;F(f,t,
u,v,ba,z);F(f,r,w,v,ba,x);F(f,r,w,v,ba,x);F(f,t,u,v,ba,z);F(f,t,u,s,bb,z);F(f,r,w,s,bb,x);}b=A5r;h=a.C;g=e-1|0;$p=6;case 6:$z=ABd(b,h,c,d,g);if(C()){break _;}g=$z;if(g){r=c+0|0;w=d+q+bj;s=e+bi;F(f,r,w,s,ba,x);t=(d+0|0)+bj;u=e+0|0;F(f,r,t,u,ba,z);v=j;F(f,v,t,u,bb,z);F(f,v,w,s,bb,x);F(f,v,w,s,bb,x);F(f,v,t,u,bb,z);F(f,r,t,u,ba,z);F(f,r,w,s,ba,x);}b=A5r;h=a.C;bk=e+1|0;$p=7;case 7:$z=ABd(b,h,c,d,bk);if(C()){break _;}g=$z;if(g){t=j;u=d+q+bj;v=bk-bi;F(f,t,u,v,bb,x);r=(d+0|0)+bj;w=bk-0|0;F(f,t,r,w,bb,z);s=c+0|0;F(f,
s,r,w,ba,z);F(f,s,u,v,ba,x);F(f,s,u,v,ba,x);F(f,s,r,w,ba,z);F(f,t,r,w,bb,z);F(f,t,u,v,bb,x);}b=A5r;h=a.C;d=d+1|0;$p=8;case 8:$z=ABd(b,h,c,d,e);if(C()){break _;}g=$z;if(g){r=c+0.5;t=r+0.5;u=r-0.5;r=e+0.5;w=r+0.5;r=r-0.5;if(((c+d|0)+e|0)&1){s=c+0|0;t=d+(-0.20000000298023224);F(f,s,t,w,m,n);u=d+0|0;F(f,s,u,r,m,p);v=j;F(f,v,u,r,l,p);F(f,v,t,w,l,n);x=(k+16|0)/256.0;z=(o+16.0)/256.0;F(f,v,t,r,m,x);F(f,v,u,w,m,z);F(f,s,u,w,l,z);F(f,s,t,r,l,x);}else{v=d+(-0.20000000298023224);x=e+0|0;F(f,u,v,x,m,n);z=d+0|0;F(f,t,z,
x,m,p);r=bk;F(f,t,z,r,l,p);F(f,u,v,r,l,n);w=(k+16|0)/256.0;s=(o+16.0)/256.0;F(f,t,v,r,m,w);F(f,u,z,r,m,s);F(f,u,z,x,l,s);F(f,t,v,x,l,w);}}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function YX(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A3Q;g=b.bZ(0);if(a.cc>=0)g=a.cc;h=a.C;$p=1;case 1:$z=b.zj(h,c,d,e);if(C()){break _;}i=$z;Cf(f,i,i,i);j=(g&15)<<4;k=j+16|0;l=g&240;if((((c+d|0)+e|0)&1)
!=1){g=j;j=k;k=g;}i=j;m=i/256.0;n=(i+15.989999771118164)/256.0;i=l;o=i/256.0;p=(i+15.989999771118164)/256.0;q=k;r=q/256.0;s=(q+15.989999771118164)/256.0;t=0.125;q=0.05000000074505806;b=a.C;k=c-1|0;$p=2;case 2:$z=b.j7(k,d,e);if(C()){break _;}k=$z;if(k){u=c+q;v=(d+1|0)+t;w=(e+1|0)+t;F(f,u,v,w,m,o);x=(d+0|0)-t;F(f,u,x,w,m,p);w=(e+0|0)-t;F(f,u,x,w,n,p);F(f,u,v,w,n,o);}b=a.C;l=c+1|0;$p=3;case 3:$z=b.j7(l,d,e);if(C()){break _;}k=$z;if(k){u=l-q;x=(d+0|0)-t;w=(e+1|0)+t;F(f,u,x,w,n,p);v=(d+1|0)+t;F(f,u,v,w,n,o);w=(e
+0|0)-t;F(f,u,v,w,m,o);F(f,u,x,w,m,p);}b=a.C;k=e-1|0;$p=4;case 4:$z=b.j7(c,d,k);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+0|0)-t;x=e+q;F(f,u,m,x,s,p);w=(d+1|0)+t;F(f,u,w,x,s,o);u=(c+0|0)-t;F(f,u,w,x,r,o);F(f,u,m,x,r,p);}b=a.C;e=e+1|0;$p=5;case 5:$z=b.j7(c,d,e);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+1|0)+t;x=e-q;F(f,u,m,x,r,o);w=(d+0|0)-t;F(f,u,w,x,r,p);u=(c+0|0)-t;F(f,u,w,x,s,p);F(f,u,m,x,s,o);}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AHF(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=
$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A3Q;g=a.C;$p=1;case 1:$z=g.ea(c,d,e);if(C()){break _;}h=$z;i=b.em(0,h);if(a.cc>=0)i=a.cc;g=a.C;$p=2;case 2:$z=b.zj(g,c,d,e);if(C()){break _;}j=$z;Cf(f,j,j,j);k=(i&15)<<4;l=i&240;m=k;n=m/256.0;o=(m+15.989999771118164)/256.0;m=l;p=m/256.0;q=(m+15.989999771118164)/256.0;r=c+1|0;s=c+0|0;t=e+0|0;u=e+1|0;v=d+0.0625;if(h!=1&&h!=2&&h!=3&&h!=7){if(h==8){w=s;x=r;y=r;z=u;m=t;j=t;ba=s;r=x;s=y;bb=u;t=m;u=j;}else if(h!=9){w=r;j=s;z=t;m=u;ba=r;r=j;bb=t;t=m;}else{w=r;ba
=s;j=r;z=u;bb=t;m=t;r=s;s=j;t=u;u=m;}}else{w=s;ba=r;z=t;bb=u;}if(h!=2&&h!=4){if(h!=3&&h!=5){x=v;j=v;y=v;m=v;v=j;}else{j=v+1.0;x=j;y=v;m=v;v=j;}}else{m=v+1.0;x=v;y=m;}bc=ba;bd=y;be=bb;F(f,bc,bd,be,o,p);bf=w;bg=x;bh=u;F(f,bf,bg,bh,o,q);bi=s;bj=v;bk=t;F(f,bi,bj,bk,n,q);bl=r;bm=m;bn=z;F(f,bl,bm,bn,n,p);F(f,bl,bm,bn,n,p);F(f,bi,bj,bk,n,q);F(f,bf,bg,bh,o,q);F(f,bc,bd,be,o,p);return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p);}
function AEo(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A3Q;g=b.bZ(0);if(a.cc>=0)g=a.cc;h=a.C;$p=1;case 1:$z=b.zj(h,c,d,e);if(C()){break _;}i=$z;Cf(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=(i+15.989999771118164)
/256.0;b=a.C;$p=2;case 2:$z=b.ea(c,d,e);if(C()){break _;}p=$z;if(p==5){q=c+0.05000000074505806;r=(d+1|0)+0.0;s=(e+1|0)+0.0;F(f,q,r,s,l,n);t=(d+0|0)-0.0;F(f,q,t,s,l,o);s=(e+0|0)-0.0;F(f,q,t,s,m,o);F(f,q,r,s,m,n);}if(p==4){t=(c+1|0)-0.05000000074505806;q=(d+0|0)-0.0;s=(e+1|0)+0.0;F(f,t,q,s,m,o);r=(d+1|0)+0.0;F(f,t,r,s,m,n);s=(e+0|0)-0.0;F(f,t,r,s,l,n);F(f,t,q,s,l,o);}if(p==3){q=(c+1|0)+0.0;r=(d+0|0)-0.0;s=e+0.05000000074505806;F(f,q,r,s,m,o);t=(d+1|0)+0.0;F(f,q,t,s,m,n);q=(c+0|0)-0.0;F(f,q,t,s,l,n);F(f,q,r,s,
l,o);}if(p==2){r=(c+1|0)+0.0;s=(d+1|0)+0.0;t=(e+1|0)-0.05000000074505806;F(f,r,s,t,l,n);q=(d+0|0)-0.0;F(f,r,q,t,l,o);r=(c+0|0)-0.0;F(f,r,q,t,m,o);F(f,r,s,t,m,n);}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function WK(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A3Q;g=a.C;$p=1;case 1:$z=b.zj(g,c,d,e);if(C()){break _;}h=$z;Cf(f,h,h,h);f=a.C;$p=2;case 2:$z=f.ea(c,d,e);if(C()){break _;}i=$z;QJ(a,b,i,c,d,e);return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AGr(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A3Q;g=a.C;$p=1;case 1:$z=b.zj(g,c,d,e);if(C()){break _;}h=$z;Cf(f,h,h,h);f=a.C;$p=2;case 2:$z=f.ea(c,d,e);if(C()){break _;}i=$z;Mm(a,b,i,c,d-0.0625,e);return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function FK(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;Bv();h=A3Q;i=b.bZ(0);if(a.cc>=0)i=a.cc;j=(i&15)<<4;k=i&240;l=j;m=l/256.0;l=(l+15.989999771118164)/256.0;n=k;o=n/256.0;n=(n+15.989999771118164)/256.0;p=m;q=p+0.02734375;r=o;s=r+0.0234375;t=p+0.03515625;u=r+0.03125;c=c+0.5;e=e+0.5;v=c-0.5;w=c+0.5;x=e-0.5;y=e+0.5;z=c+f*0.375;ba=z-0.0625;bb=d+0.625;bc=e+g*0.375;bd=bc-0.0625;F(h,ba,bb,bd,q,s);bc=bc+0.0625;F(h,ba,bb,bc,q,u);q=z+0.0625;F(h,q,bb,bc,t,u);F(h,q,bb,bd,t,s);u=c-0.0625;bc=d
+1.0;F(h,u,bc,x,p,r);q=u+f;d=d+0.0;t=x+g;bd=n;F(h,q,d,t,p,bd);s=y+g;z=l;F(h,q,d,s,z,bd);F(h,u,bc,y,z,r);u=c+0.0625;F(h,u,bc,y,p,r);c=c+f+0.0625;F(h,c,d,s,p,bd);F(h,c,d,t,z,bd);F(h,u,bc,x,z,r);c=e+0.0625;F(h,v,bc,c,p,r);u=v+f;q=c+g;F(h,u,d,q,p,bd);f=w+f;F(h,f,d,q,z,bd);F(h,w,bc,c,z,r);c=e-0.0625;F(h,w,bc,c,p,r);e=c+g;F(h,f,d,e,p,bd);F(h,u,d,e,z,bd);F(h,v,bc,c,z,r);}
function QJ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;Bv();g=A3Q;h=b.em(0,c);if(a.cc>=0)h=a.cc;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.44999998807907104;q=d+0.44999998807907104;d=f+0.5;r=d-0.44999998807907104;s=d+0.44999998807907104;d=e+1.0;F(g,p,d,r,l,n);e=e+0.0;F(g,p,e,r,l,o);F(g,q,e,s,m,o);F(g,q,d,s,m,n);F(g,q,d,s,l,n);F(g,q,e,s,l,o);F(g,p,e,r,m,o);F(g,p,d,r,m,n);F(g,p,d,s,l,n);F(g,p,e,s,l,o);F(g,q,e,r,m,o);F(g,q,d,r,m,n);F(g,
q,d,r,l,n);F(g,q,e,r,l,o);F(g,p,e,s,m,o);F(g,p,d,s,m,n);}
function Mm(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A3Q;h=b.em(0,c);if(a.cc>=0)h=a.cc;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.25;q=d+0.25;f=f+0.5;r=f-0.5;s=f+0.5;t=e+1.0;F(g,p,t,r,l,n);e=e+0.0;F(g,p,e,r,l,o);F(g,p,e,s,m,o);F(g,p,t,s,m,n);F(g,p,t,s,l,n);F(g,p,e,s,l,o);F(g,p,e,r,m,o);F(g,p,t,r,m,n);F(g,q,t,s,l,n);F(g,q,e,s,l,o);F(g,q,e,r,m,o);F(g,q,t,r,m,n);F(g,q,t,r,l,n);F(g,q,e,r,l,o);F(g,q,e,s,m,o);F(g,q,t,s,m,n);p
=d-0.5;d=d+0.5;q=f-0.25;f=f+0.25;F(g,p,t,q,l,n);F(g,p,e,q,l,o);F(g,d,e,q,m,o);F(g,d,t,q,m,n);F(g,d,t,q,l,n);F(g,d,e,q,l,o);F(g,p,e,q,m,o);F(g,p,t,q,m,n);F(g,d,t,f,l,n);F(g,d,e,f,l,o);F(g,p,e,f,m,o);F(g,p,t,f,m,n);F(g,p,t,f,l,n);F(g,p,e,f,l,o);F(g,d,e,f,m,o);F(g,d,t,f,m,n);}
function XA(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w
=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A3Q;g=a.C;h=d+1|0;i=1;$p=1;case 1:$z=b.n9(g,c,h,e,i);if(C()){break _;}h=$z;g=a.C;i=d-1|0;j=0;$p=2;case 2:$z=b.n9(g,c,i,e,j);if(C()){break _;}j=$z;k=$rt_createBooleanArray(4).data;l=0;g=a.C;m=e-1|0;n=2;$p=3;case 3:$z=b.n9(g,c,d,m,n);if(C()){break _;}n=$z;k[l]=n;n=1;g
=a.C;o=e+1|0;l=3;$p=4;case 4:$z=b.n9(g,c,d,o,l);if(C()){break _;}l=$z;k[n]=l;n=2;g=a.C;p=c-1|0;l=4;$p=5;case 5:$z=b.n9(g,p,d,e,l);if(C()){break _;}l=$z;k[n]=l;n=3;g=a.C;q=c+1|0;l=5;$p=6;case 6:$z=b.n9(g,q,d,e,l);if(C()){break _;}l=$z;k[n]=l;if(!h&&!j&&!k[0]&&!k[1]&&!k[2]&&!k[3])return 0;r=0;s=0.5;t=1.0;u=0.800000011920929;v=0.6000000238418579;w=0.0;x=1.0;y=b.bR;g=a.C;$p=7;case 7:$z=g.ea(c,d,e);if(C()){break _;}z=$z;$p=8;case 8:$z=AJ3(a,c,d,e,y);if(C()){break _;}ba=$z;$p=9;case 9:$z=AJ3(a,c,d,o,y);if(C()){break _;}bb
=$z;$p=10;case 10:$z=AJ3(a,q,d,o,y);if(C()){break _;}bc=$z;$p=11;case 11:$z=AJ3(a,q,d,e,y);if(C()){break _;}bd=$z;if(!a.di&&!h){if(!a.di&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;a:{while(i<4){h=!i?m:e;n=S(i,1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.em(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.di)break a;if(k[i])break a;i=i+1|0;}b.cm=w;b.ch=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn
=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.C;$p=15;continue _;}g=a.C;$p=13;continue _;}r=1;bx=b.em(1,z);g=a.C;$p=12;case 12:$z=AV9(g,c,d,e,y);if(C()){break _;}by=$z;bm=by;h=S(bm,(-999.0));if(h>0)bx=b.em(2,z);n=(bx&15)<<4;l=bx&240;by=(n+8.0)/256.0;bz=(l+8.0)/256.0;if(h<0)bm=0.0;else{by=(n+16|0)/256.0;bz=(l+16|0)/256.0;}bn=Bl(bm)*8.0/256.0;bo=Bx(bm)*8.0/256.0;g=a.C;$p=14;continue _;case 13:$z
=b.zj(g,c,i,e);if(C()){break _;}bp=$z;bm=s*bp;Cf(f,bm,bm,bm);Gw(a,b,c,d,e,b.bZ(0));r=1;i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;b:{while(i<4){h=!i?m:e;n=S(i,1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.em(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.di)break b;if(k[i])break b;i=i+1|0;}b.cm=w;b.ch=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=
((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.C;$p=15;continue _;case 14:$z=b.zj(g,c,d,e);if(C()){break _;}bi=$z;bm=t*bi;Cf(f,bm,bm,bm);bA=c+0|0;bm=d;br=bm+ba;bu=e+0|0;bB=bo;bf=by-bB;bw=bn;bC=bf-bw;bs=bz-bB;F(f,bA,br,bu,bC,bs+bw);bC=bm+bb;bv=o;bf=bf+bw;br=bz+bB;F(f,bA,bC,bv,bf,br+bw);bA=q;bf=bm+bc;by=by+bB;F(f,bA,bf,bv,by+bw,br-bw);F(f,bA,bm+bd,bu,by-bw,bs-bw);if(!a.di&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;c:{while(i<4){h=!i?m:e;n=S(i,
1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.em(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.di)break c;if(k[i])break c;i=i+1|0;}b.cm=w;b.ch=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.C;$p=15;continue _;}g=a.C;$p=13;continue _;case 15:$z
=b.zj(g,o,d,h);if(C()){break _;}bt=$z;bt=t*(l>=0?bt*v:bt*u);Cf(f,bt,bt,bt);bC=bo;by=be+bm;bA=s;F(f,bC,by,bA,br,bu);by=bp;bu=be+bn;bB=bq;F(f,by,bu,bB,bs,bv);F(f,by,bf,bB,bs,bw);F(f,bC,bf,bA,br,bw);c:{while(true){i=i+1|0;if(i>=4)break;h=!i?m:e;n=S(i,1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.em(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.di)break c;if(k[i])break c;}b.cm=w;b.ch=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp
=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.C;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p);}
function AJ3(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=0.0;h=0;i=c+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.C;$p=1;case 1:$z=l.nf(j,i,k);if(C()){break _;}l=$z;if(l===e)return 1.0;l=a.C;$p=2;case 2:$z=l.nf(j,c,k);if(C()){break _;}l=$z;if(l===e){l=a.C;$p=3;continue _;}if(!l.c3()){g=g+1.0;f=f+1|0;}h=h+1|0;if(h
>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.C;$p=1;continue _;case 3:$z=l.ea(j,c,k);if(C()){break _;}m=$z;if(!(m<8&&m)){g=g+HX(m)*10.0;f=f+10|0;}g=g+HX(m);f=f+1|0;h=h+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.C;$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ADS(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0.5;h=1.0;i=0.800000011920929;j=0.6000000238418579;Bv();k=A3Q;Bu(k);$p=1;case 1:$z=b.zj(c,d,e,f);if(C()){break _;}l=$z;m=e-1|0;$p=2;case 2:$z=b.zj(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;n=g*n;Cf(k,n,n,n);Gw(a,b,(-0.5),(-0.5),(-0.5),b.bZ(0));m=e+1|0;$p=3;case 3:$z
=b.zj(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;h=h*n;Cf(k,h,h,h);H7(a,b,(-0.5),(-0.5),(-0.5),b.bZ(1));m=f-1|0;$p=4;case 4:$z=b.zj(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cf(k,h,h,h);Il(a,b,(-0.5),(-0.5),(-0.5),b.bZ(2));m=f+1|0;$p=5;case 5:$z=b.zj(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cf(k,h,h,h);IA(a,b,(-0.5),(-0.5),(-0.5),b.bZ(3));m=d-1|0;$p=6;case 6:$z=b.zj(c,m,e,f);if(C()){break _;}h=$z;if(h<l)h=l;h=j*h;Cf(k,h,h,h);Ie(a,b,(-0.5),(-0.5),(-0.5),b.bZ(4));d=d+1|0;$p=7;case 7:$z=b.zj(c,d,e,
f);if(C()){break _;}h=$z;if(h>=l)l=h;h=j*l;Cf(k,h,h,h);Jd(a,b,(-0.5),(-0.5),(-0.5),b.bZ(5));Bm(k);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Xq(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;$p=1;case 1:$z=AGc(a,b,c,d,e,f,f,f);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AGc(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();i=A3Q;j=0;k=0.5*f;l=1.0*f;m=0.800000011920929*f;n=0.6000000238418579*f;o=0.5
*g;p=1.0*g;q=0.800000011920929*g;r=0.6000000238418579*g;s=0.5*h;t=1.0*h;u=0.800000011920929*h;v=0.6000000238418579*h;w=a.C;$p=1;case 1:$z=b.zj(w,c,d,e);if(C()){break _;}x=$z;if(a.di){w=a.C;y=d-1|0;$p=2;continue _;}w=a.C;z=d-1|0;y=0;$p=3;continue _;case 2:$z=b.zj(w,c,y,e);if(C()){break _;}ba=$z;if(A5F.data[b.b]>0)ba=1.0;Cf(i,k*ba,o*ba,s*ba);bb=c;bc=d;bd=e;w=a.C;y=0;$p=4;continue _;case 3:$z=b.n9(w,c,z,e,y);if(C()){break _;}y=$z;if(y){w=a.C;y=d-1|0;$p=2;continue _;}if(a.di){w=a.C;y=d+1|0;$p=5;continue _;}w=a.C;y
=d+1|0;z=1;$p=6;continue _;case 4:$z=b.sj(w,c,d,e,y);if(C()){break _;}y=$z;Gw(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=d+1|0;$p=5;continue _;}w=a.C;y=d+1|0;z=1;$p=6;continue _;case 5:$z=b.zj(w,c,y,e);if(C()){break _;}ba=$z;if(b.ch!==1.0&&!b.bR.me())ba=x;if(A5F.data[b.b]>0)ba=1.0;Cf(i,l*ba,p*ba,t*ba);bb=c;bc=d;bd=e;w=a.C;y=1;$p=9;continue _;case 6:$z=b.n9(w,c,y,e,z);if(C()){break _;}y=$z;if(y){w=a.C;y=d+1|0;$p=5;continue _;}if(a.di){w=a.C;y=e-1|0;$p=7;continue _;}w=a.C;y=e-1|0;z=2;$p=8;continue _;case 7:$z=b.zj(w,
c,d,y);if(C()){break _;}ba=$z;if(b.cL>0.0)ba=x;if(A5F.data[b.b]>0)ba=1.0;Cf(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.C;y=2;$p=12;continue _;case 8:$z=b.n9(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.C;y=e-1|0;$p=7;continue _;}if(a.di){w=a.C;y=e+1|0;$p=10;continue _;}w=a.C;y=e+1|0;z=3;$p=11;continue _;case 9:$z=b.sj(w,c,d,e,y);if(C()){break _;}y=$z;H7(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=e-1|0;$p=7;continue _;}w=a.C;y=e-1|0;z=2;$p=8;continue _;case 10:$z=b.zj(w,c,d,y);if(C()){break _;}ba=$z;if(b.cQ<1.0)ba=x;if(A5F.data[b.b]
>0)ba=1.0;Cf(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.C;y=3;$p=15;continue _;case 11:$z=b.n9(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.C;y=e+1|0;$p=10;continue _;}if(a.di){w=a.C;y=c-1|0;$p=13;continue _;}w=a.C;y=c-1|0;z=4;$p=14;continue _;case 12:$z=b.sj(w,c,d,e,y);if(C()){break _;}y=$z;Il(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=e+1|0;$p=10;continue _;}w=a.C;y=e+1|0;z=3;$p=11;continue _;case 13:$z=b.zj(w,y,d,e);if(C()){break _;}ba=$z;if(b.cM>0.0)ba=x;if(A5F.data[b.b]>0)ba=1.0;Cf(i,n*ba,r*ba,v*ba);bb=c;bc=d;bd=e;w
=a.C;y=4;$p=18;continue _;case 14:$z=b.n9(w,y,d,e,z);if(C()){break _;}y=$z;if(y){w=a.C;y=c-1|0;$p=13;continue _;}if(a.di){w=a.C;y=c+1|0;$p=16;continue _;}w=a.C;y=c+1|0;z=5;$p=17;continue _;case 15:$z=b.sj(w,c,d,e,y);if(C()){break _;}y=$z;IA(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=c-1|0;$p=13;continue _;}w=a.C;y=c-1|0;z=4;$p=14;continue _;case 16:$z=b.zj(w,y,d,e);if(C()){break _;}ba=$z;if(b.cP>=1.0)x=ba;if(A5F.data[b.b]>0)x=1.0;Cf(i,n*x,r*x,v*x);bb=c;bc=d;bd=e;i=a.C;y=5;$p=19;continue _;case 17:$z=b.n9(w,y,d,e,
z);if(C()){break _;}y=$z;if(!y)return j;w=a.C;y=c+1|0;$p=16;continue _;case 18:$z=b.sj(w,c,d,e,y);if(C()){break _;}y=$z;Ie(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=c+1|0;$p=16;continue _;}w=a.C;y=c+1|0;z=5;$p=17;continue _;case 19:$z=b.sj(i,c,d,e,y);if(C()){break _;}c=$z;Jd(a,b,bb,bc,bd,c);j=1;return j;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AAZ(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;Bj(b,0.375,0.0,0.375,0.625,1.0,0.625);$p=1;case 1:Xq(a,b,c,d,e);if(C()){break _;}g=0;h=0;i=a.C;j=c-1|0;$p=2;case 2:$z=i.dL(j,d,e);if(C()){break _;}j=$z;if(j!=b.b){i=a.C;j=c+1|0;$p=3;continue _;}g=1;i=a.C;j=e-1|0;$p=4;continue _;case 3:$z=i.dL(j,d,e);if(C()){break _;}j
=$z;if(j==b.b)g=1;i=a.C;j=e-1|0;$p=4;case 4:$z=i.dL(c,d,j);if(C()){break _;}j=$z;if(j!=b.b){i=a.C;j=e+1|0;$p=5;continue _;}h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bj(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 5:$z=i.dL(c,d,j);if(C()){break _;}j=$z;if(j==b.b)h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if
(g){Bj(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bj(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 6:Xq(a,b,c,d,e);if(C()){break _;}if(h){Bj(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 7:Xq(a,b,c,d,e);if(C()){break _;}m=0.375;n
=0.5625;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 8:Xq(a,b,c,d,e);if(C()){break _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;case 9:Xq(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ADr(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=a.C;$p=1;case 1:$z=g.ea(c,d,e);if(C()){break _;}h=$z;if(!h){Bj(b,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bj(b,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bj(b,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:Xq(a,
b,c,d,e);if(C()){break _;}Bj(b,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:Xq(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 4:Xq(a,b,c,d,e);if(C()){break _;}Bj(b,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:Xq(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 6:Xq(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:Xq(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 8:Xq(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.5,1.0,0.5,1.0);$p=9;case 9:Xq(a,
b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AFq(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A3Q;g=b;h=0.5;i=1.0;j=0.800000011920929;k=0.6000000238418579;l=a.C;$p=1;case 1:$z=b.zj(l,c,d,e);if(C()){break _;}m=$z;l=a.C;n=d-1|0;$p=2;case 2:$z=b.zj(l,c,n,e);if(C()){break _;}o=$z;if(g.cm>0.0)o=m;if(A5F.data[b.b]
>0)o=1.0;h=h*o;Cf(f,h,h,h);p=c;q=d;r=e;l=a.C;n=0;$p=3;case 3:$z=b.sj(l,c,d,e,n);if(C()){break _;}n=$z;Gw(a,b,p,q,r,n);l=a.C;n=d+1|0;$p=4;case 4:$z=b.zj(l,c,n,e);if(C()){break _;}h=$z;if(g.ch<1.0)h=m;if(A5F.data[b.b]>0)h=1.0;i=i*h;Cf(f,i,i,i);l=a.C;n=1;$p=5;case 5:$z=b.sj(l,c,d,e,n);if(C()){break _;}n=$z;H7(a,b,p,q,r,n);l=a.C;n=e-1|0;$p=6;case 6:$z=b.zj(l,c,d,n);if(C()){break _;}i=$z;if(g.cL>0.0)i=m;if(A5F.data[b.b]>0)i=1.0;i=j*i;Cf(f,i,i,i);l=a.C;n=2;$p=7;case 7:$z=b.sj(l,c,d,e,n);if(C()){break _;}s=$z;if(s
<0){a.eO=1;s= -s;}Il(a,b,p,q,r,s);a.eO=0;l=a.C;n=e+1|0;$p=8;case 8:$z=b.zj(l,c,d,n);if(C()){break _;}i=$z;if(g.cQ<1.0)i=m;if(A5F.data[b.b]>0)i=1.0;i=j*i;Cf(f,i,i,i);l=a.C;n=3;$p=9;case 9:$z=b.sj(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.eO=1;s= -s;}IA(a,b,p,q,r,s);a.eO=0;l=a.C;n=c-1|0;$p=10;case 10:$z=b.zj(l,n,d,e);if(C()){break _;}i=$z;if(g.cM>0.0)i=m;if(A5F.data[b.b]>0)i=1.0;i=k*i;Cf(f,i,i,i);l=a.C;n=4;$p=11;case 11:$z=b.sj(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.eO=1;s= -s;}Ie(a,b,p,q,r,s);a.eO=0;l=a.C;n
=c+1|0;$p=12;case 12:$z=b.zj(l,n,d,e);if(C()){break _;}i=$z;if(g.cP>=1.0)m=i;if(A5F.data[b.b]>0)m=1.0;i=k*m;Cf(f,i,i,i);l=a.C;n=5;$p=13;case 13:$z=b.sj(l,c,d,e,n);if(C()){break _;}c=$z;if(c<0){a.eO=1;c= -c;}Jd(a,b,p,q,r,c);a.eO=0;return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function Gw(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A3Q;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cM*16.0)/256.0;l=(j+b.cP*16.0-0.01)/256.0;j=i;m=(j+b.cL*16.0)/256.0;n=(j+b.cQ*16.0-0.01)/256.0;if(!(b.cM>=0.0&&b.cP<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cQ<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.cM;q=c+b.cP;r=d+b.cm;s=e+b.cL;t=e+b.cQ;F(g,j,r,t,k,n);F(g,j,r,s,k,m);F(g,q,r,s,l,m);F(g,q,r,t,l,n);}
function H7(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A3Q;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cM*16.0)/256.0;l=(j+b.cP*16.0-0.01)/256.0;j=i;m=(j+b.cL*16.0)/256.0;n=(j+b.cQ*16.0-0.01)/256.0;if(!(b.cM>=0.0&&b.cP<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cQ<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.cM;q=c+b.cP;r=d+b.ch;s=e+b.cL;t=e+b.cQ;F(g,q,r,t,l,n);F(g,q,r,s,l,m);F(g,j,r,s,k,m);F(g,j,r,t,k,n);}
function Il(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A3Q;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cM*16.0)/256.0;j=(j+b.cP*16.0-0.01)/256.0;l=i;m=(l+b.cm*16.0)/256.0;n=(l+b.ch*16.0-0.01)/256.0;if(!a.eO){l=j;j=k;k=l;}if(!(b.cM>=0.0&&b.cP<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cm>=0.0&&b.ch<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.cM;q=c+b.cP;r=d+b.cm;s=d+b.ch;t=e+b.cL;F(g,l,s,t,k,m);F(g,q,s,t,j,m);F(g,q,r,t,j,n);F(g,l,r,t,k,n);}
function IA(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A3Q;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cM*16.0)/256.0;j=(j+b.cP*16.0-0.01)/256.0;l=i;m=(l+b.cm*16.0)/256.0;n=(l+b.ch*16.0-0.01)/256.0;if(!a.eO){l=j;j=k;k=l;}if(!(b.cM>=0.0&&b.cP<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cm>=0.0&&b.ch<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.cM;q=c+b.cP;r=d+b.cm;s=d+b.ch;t=e+b.cQ;F(g,l,s,t,j,m);F(g,l,r,t,j,n);F(g,q,r,t,k,n);F(g,q,s,t,k,m);}
function Ie(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A3Q;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cL*16.0)/256.0;l=(j+b.cQ*16.0-0.01)/256.0;j=i;m=(j+b.cm*16.0)/256.0;n=(j+b.ch*16.0-0.01)/256.0;if(!a.eO){j=l;l=k;k=j;}if(!(b.cL>=0.0&&b.cQ<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cm>=0.0&&b.ch<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.cM;q=d+b.cm;r=d+b.ch;s=e+b.cL;t=e+b.cQ;F(g,j,r,t,k,m);F(g,j,r,s,l,m);F(g,j,q,s,l,n);F(g,j,q,t,k,n);}
function Jd(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A3Q;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cL*16.0)/256.0;l=(j+b.cQ*16.0-0.01)/256.0;j=i;m=(j+b.cm*16.0)/256.0;n=(j+b.ch*16.0-0.01)/256.0;if(!a.eO){j=l;l=k;k=j;}if(!(b.cL>=0.0&&b.cQ<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cm>=0.0&&b.ch<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.cP;q=d+b.cm;r=d+b.ch;s=e+b.cL;t=e+b.cQ;F(g,j,q,t,l,n);F(g,j,q,s,k,n);F(g,j,r,s,k,m);F(g,j,r,t,l,m);}
function FX(a,b){var c,d;a:{Bv();c=A3Q;d=b.dO();if(d){if(d==1){Bu(c);B_(0.0,(-1.0),0.0);QJ(a,b,(-1),(-0.5),(-0.5),(-0.5));Bm(c);}else if(d==6){Bu(c);B_(0.0,(-1.0),0.0);Mm(a,b,(-1),(-0.5),(-0.5),(-0.5));Bm(c);}else{if(d!=2){if(d==3)break a;if(d!=5)break a;else break a;}Bu(c);B_(0.0,(-1.0),0.0);FK(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Bm(c);}}else{Br((-0.5),(-0.5),(-0.5));Bu(c);B_(0.0,(-1.0),0.0);Gw(a,b,0.0,0.0,0.0,b.bZ(0));Bm(c);Bu(c);B_(0.0,1.0,0.0);H7(a,b,0.0,0.0,0.0,b.bZ(1));Bm(c);Bu(c);B_(0.0,0.0,(-1.0));Il(a,
b,0.0,0.0,0.0,b.bZ(2));Bm(c);Bu(c);B_(0.0,0.0,1.0);IA(a,b,0.0,0.0,0.0,b.bZ(3));Bm(c);Bu(c);B_((-1.0),0.0,0.0);Ie(a,b,0.0,0.0,0.0,b.bZ(4));Bm(c);Bu(c);B_(1.0,0.0,0.0);Jd(a,b,0.0,0.0,0.0,b.bZ(5));Bm(c);Br(0.5,0.5,0.5);}}}
function NS(){var a=this;E.call(a);a.ig=null;a.gB=null;a.fl=0;a.fk=0;a.n7=0.0;a.lH=0.0;a.n6=0.0;a.bM=0.0;a.bL=0.0;a.bJ=0.0;a.t9=0;a.kD=0;a.kp=0;a.hQ=0;a.yN=0;}
function BF(a,b){var c=new NS();AYg(c,a,b);return c;}
function AYg(a,b,c){a.t9=0;a.kD=0;a.kp=0;a.hQ=1;a.yN=0;a.fl=b;a.fk=c;}
function BA(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;a.ig=N(Ea,8);a.gB=N(EL,6);i=b+e;j=c+f;k=d+g;l=b-h;m=c-h;n=d-h;d=i+h;j=j+h;h=k+h;if(!a.kp){b=l;l=d;d=b;}a:{o=F2(d,m,n,0.0,0.0);p=F2(l,m,n,0.0,8.0);q=F2(l,j,n,8.0,8.0);r=F2(d,j,n,8.0,0.0);s=F2(d,m,h,0.0,0.0);t=F2(l,m,h,0.0,8.0);u=F2(l,j,h,8.0,8.0);v=F2(d,j,h,8.0,0.0);a.ig.data[0]=o;a.ig.data[1]=p;a.ig.data[2]=q;a.ig.data[3]=r;a.ig.data[4]=s;a.ig.data[5]=t;a.ig.data[6]=u;a.ig.data[7]=v;w=a.gB.data;x=new EL;y=N(Ea,4);z=y.data;z[0]=t;z[1]=p;z[2]
=q;z[3]=u;Gb(x,y,(a.fl+g|0)+e|0,a.fk+g|0,((a.fl+g|0)+e|0)+g|0,(a.fk+g|0)+f|0);w[0]=x;z=a.gB.data;x=new EL;w=N(Ea,4);y=w.data;y[0]=o;y[1]=s;y[2]=v;y[3]=r;Gb(x,w,a.fl+0|0,a.fk+g|0,a.fl+g|0,(a.fk+g|0)+f|0);z[1]=x;z=a.gB.data;x=new EL;w=N(Ea,4);y=w.data;y[0]=t;y[1]=s;y[2]=o;y[3]=p;Gb(x,w,a.fl+g|0,a.fk+0|0,(a.fl+g|0)+e|0,a.fk+g|0);z[2]=x;z=a.gB.data;x=new EL;w=N(Ea,4);y=w.data;y[0]=q;y[1]=r;y[2]=v;y[3]=u;Gb(x,w,(a.fl+g|0)+e|0,a.fk+0|0,((a.fl+g|0)+e|0)+e|0,a.fk+g|0);z[3]=x;w=a.gB.data;x=new EL;y=N(Ea,4);z=y.data;z[0]
=p;z[1]=o;z[2]=r;z[3]=q;Gb(x,y,a.fl+g|0,a.fk+g|0,(a.fl+g|0)+e|0,(a.fk+g|0)+f|0);w[4]=x;z=a.gB.data;r=new EL;w=N(Ea,4);y=w.data;y[0]=s;y[1]=t;y[2]=u;y[3]=v;Gb(r,w,((a.fl+g|0)+e|0)+g|0,a.fk+g|0,(((a.fl+g|0)+e|0)+g|0)+e|0,(a.fk+g|0)+f|0);z[5]=r;if(a.kp){ba=0;while(true){if(ba>=a.gB.data.length)break a;Yp(a.gB.data[ba]);ba=ba+1|0;}}}}
function BD(a,b,c,d){a.n7=b;a.lH=c;a.n6=d;}
function B2(a,b){var c,d;if(!a.yN&&a.hQ){if(!a.t9){a.kD=Hx(1);ET(a.kD,4864);Bv();c=A3Q;d=0;while(d<a.gB.data.length){AJ7(a.gB.data[d],c,b);d=d+1|0;}DL();a.t9=1;}if(a.bM===0.0&&a.bL===0.0&&a.bJ===0.0){if(a.n7===0.0&&a.lH===0.0&&a.n6===0.0)E4(a.kD);else{Br(a.n7*b,a.lH*b,a.n6*b);E4(a.kD);Br( -a.n7*b, -a.lH*b, -a.n6*b);}}else{BU();Br(a.n7*b,a.lH*b,a.n6*b);if(a.bJ!==0.0)Bq(a.bJ*57.2957763671875,0.0,0.0,1.0);if(a.bL!==0.0)Bq(a.bL*57.2957763671875,0.0,1.0,0.0);if(a.bM!==0.0)Bq(a.bM*57.2957763671875,1.0,0.0,0.0);E4(a.kD);By();}}}
function Ej(){E.call(this);}
function AI4(a,b){Oc(a,b,0,b.data.length);}
function ANc(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.oW(f[c]);e=e+1|0;c=g;}}
function G1(){Ej.call(this);this.jo=null;}
function A6l(a){var b=new G1();Mn(b,a);return b;}
function Mn(a,b){a.jo=b;}
function WF(){var a=this;G1.call(a);a.CK=0;a.sE=0;a.gQ=null;a.mu=null;a.xX=null;}
function AQR(a,b){var c=new WF();AY8(c,a,b);return c;}
function AY8(a,b,c){Mn(a,b);b=new Bd;Bb(b);a.gQ=b;a.mu=$rt_createCharArray(32);a.CK=c;a.xX=ASY();}
function RZ(a,b,c,d){var $$je;if(a.jo===null)a.sE=1;if(!(a.sE?0:1))return;a:{try{a.jo.iw(b,c,d);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B3){}else{throw $$e;}}a.sE=1;}}
function Qo(a,b,c,d){var e,f,g,h,i;e=b.data;f=AHB(b,c,d-c|0);e=$rt_createByteArray(DU(16,CR(e.length,1024)));g=V6(e);h=AB5(Yl(ACb(a.xX),A4$),A4$);while(true){i=Hr(AD8(h,f,g,1));RZ(a,e,0,g.be);D2(g);if(!i)break;}while(true){i=Hr(TQ(h,g));RZ(a,e,0,g.be);D2(g);if(!i)break;}}
function AFs(a,b){a.mu.data[0]=b;Qo(a,a.mu,0,1);}
function IQ(a,b){H(a.gQ,b);Iy(a);}
function Xi(a,b){Gq(Be(a.gQ,b),10);Iy(a);}
function B$(a,b){Gq(H(a.gQ,b),10);Iy(a);}
function XR(a,b){Gq(EY(a.gQ,b),10);Iy(a);}
function AJ6(a){AFs(a,10);}
function Iy(a){var b;b=IB(a.gQ)<=a.mu.data.length?a.mu:$rt_createCharArray(IB(a.gQ));Wc(a.gQ,0,IB(a.gQ),b,0);Qo(a,b,0,IB(a.gQ));AHO(a.gQ,0);}
function S9(){Ej.call(this);}
function A6m(){var a=new S9();AUj(a);return a;}
function AUj(a){return;}
function AQw(a,b){$rt_putStdout(b);}
function AAu(){Cq.call(this);this.BJ=null;}
function AF$(a){var b=new AAu();ASy(b,a);return b;}
function ASy(a,b){R(a);a.BJ=b;}
function KN(){var a=this;E.call(a);a.bW=null;a.x=0;a.J=0;a.D=Long_ZERO;a.sM=null;a.oa=0;a.hk=0;a.l5=Long_ZERO;a.bQ=null;a.iy=null;a.fr=null;}
function A6n(){var a=new KN();Mp(a);return a;}
function Mp(a){a.fr=AYA();}
function Wj(a,b,c,d){a.sM=b;a.oa=c;a.hk=d;}
function AEZ(a,b,c,d,e){var f;if(d<=0&&e&&a.bW!==null)return;if(a.J>0&&e){f=$rt_createByteArray(a.J+d|0);Di(a.bW,a.x,f,0,a.J);Di(b,c,f,a.J,d);a.bW=f;a.x=0;a.J=a.J+d|0;}else{a.bW=b;a.x=c;a.J=d;}}
function QG(){KN.call(this);this.p8=0;}
function A6o(){var a=new QG();AT7(a);return a;}
function AT7(a){Mp(a);a.p8=0;Wv(a);}
function Wv(a){return Ye(a,15);}
function Ye(a,b){return O8(a,b,0);}
function O8(a,b,c){var d;a.p8=0;d=new JS;d.p7=Long_fromInt(-1);d.hG=(-1);d.vd=$rt_createByteArray(4);d.ck=null;d.fi=null;d.B=a;a.iy=d;d=a.iy;if(c)b= -b;return Tt(d,b);}
function ABh(a,b){var c;if(a.iy===null)return (-2);c=ABO(a.iy,b);if(c==1)a.p8=1;return c;}
function T$(a){return a.iy.bF!=12?0:1;}
function G9(){var a=this;E.call(a);a.zb=null;a.nl=0.0;a.n_=0.0;}
function G2(a,b,c){var d=new G9();MD(d,a,b,c);return d;}
function MD(a,b,c,d){a.zb=b;a.nl=c;a.n_=d;}
function AHn(a){return a.nl;}
function T8(a){return a.n_;}
function IH(a){var b;b=new Bd;Bb(b);return O(H(H(b,B(244)),a.zb));}
function ACv(){G9.call(this);}
function AZ2(a,b,c){var d=new ACv();ARj(d,a,b,c);return d;}
function ARj(a,b,c,d){MD(a,b,c,d);}
function XZ(){G9.call(this);}
function A1z(a,b,c){var d=new XZ();AXe(d,a,b,c);return d;}
function AXe(a,b,c,d){MD(a,b,c,d);}
function JY(){P.call(this);}
function A0W(a,b){var c=new JY();ADZ(c,a,b);return c;}
function ADZ(a,b,c){CS(a,b,c,A6b);}
function AXV(a,b,c){J();return A34.b;}
function VM(){P.call(this);}
function A1b(a){var b=new VM();AQ4(b,a);return b;}
function AQ4(a,b){Dw(a,b,A6p);a.W=3;Ew(a,1);}
function AW0(a,b){return b==1?0:b?3:2;}
function YT(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=Tr(b,c,g,e);if(C()){break _;}h=$z;if(h>=4){$p=2;continue _;}$p=3;continue _;case 2:$z=Tr(b,c,g,e);if(C()){break _;}g=$z;if(g<9)return;h=(c+D(f,3)|0)-1|0;g=(d+D(f,5)|0)-3|0;i=(e+D(f,3)|0)-1|0;$p=4;continue _;case 3:$z=Xw(b,c,g,e);if(C()){break _;}j=$z;if(!j.qv()){$p=2;continue _;}if(D(f,
4))return;J();h=A3X.b;$p=6;continue _;case 4:$z=X4(b,h,g,i);if(C()){break _;}c=$z;J();if(c!=A3X.b)return;c=g+1|0;$p=5;case 5:$z=Tr(b,h,c,i);if(C()){break _;}d=$z;if(d<4)return;$p=7;continue _;case 6:AJ0(b,c,d,e,h);if(C()){break _;}return;case 7:$z=Xw(b,h,c,i);if(C()){break _;}f=$z;if(f.qv())return;c=A3W.b;$p=8;case 8:AJ0(b,h,g,i,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ART(a,b,c){J();return A3X.dq(0,c);}
function ACW(){P.call(this);}
function AZ7(a,b){var c=new ACW();AP2(c,a,b);return c;}
function AP2(a,b,c){CS(a,b,c,A6p);}
function BY(){E.call(this);}
var A5b=null;var A6p=null;var A6c=null;var A6b=null;var A6q=null;var A4R=null;var A4S=null;var A6r=null;var A6s=null;var A6t=null;var A6e=null;var A6u=null;var A6v=null;var A6w=null;var A6d=null;var A6x=null;var A6y=null;function A6z(){var a=new BY();AKK(a);return a;}
function AKK(a){return;}
function AXE(a){return 0;}
function ASt(a){return 1;}
function AXi(a){return 1;}
function AVA(a){return 1;}
function AKs(){A5b=new L2;A6p=new BY;A6c=new BY;A6b=new BY;A6q=new BY;A4R=new J9;A4S=new J9;A6r=new BY;A6s=new LN;A6t=new BY;A6e=new BY;A6u=new L2;A6v=new BY;A6w=new LN;A6d=new BY;A6x=new BY;A6y=new BY;}
function Fa(){P.call(this);}
function AUd(a,b){var c=new Fa();JH(c,a,b);return c;}
function JH(a,b,c){Dw(a,b,A6s);a.W=c;Ew(a,1);Bj(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function AGC(a,b,c,d,e){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=X4(b,c,d,e);if(C()){break _;}c=$z;return a.pE(c);default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AQA(a,b){J();return b!=A3W.b&&b!=A3X.b&&b!=A55.b?0:1;}
function ADz(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEh(a,b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Zy(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEh(a,b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AEh(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.C$(b,c,d,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=Z5(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:T9(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:AJ0(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AIA(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Tr(b,c,d,e);if(C()){break _;}f=$z;if(f<8){$p=3;continue _;}d=d-1|0;$p=2;case 2:$z=X4(b,c,d,e);if(C()){break _;}c=$z;return !a.pE(c)?0:1;case 3:$z=ABs(b,c,d,e);if(C()){break _;}g=$z;if(!g)return 0;d=d-1|0;$p=2;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function ABx(a,b,c,d,e){return null;}
function AWb(a){return 0;}
function ANH(a){return 0;}
function AW5(a){return 1;}
function AHu(){Fa.call(this);}
function A1O(a,b){var c=new AHu();AYs(c,a,b);return c;}
function AYs(a,b,c){JH(a,b,c);Bj(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function ZH(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEh(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=Tr(b,c,g,e);if(C()){break _;}g=$z;if(g>=9&&!D(f,5)){$p=3;continue _;}return;case 3:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;if(g>=15){g=0;$p=4;continue _;}g=g+1|0;$p=6;continue _;case 4:AGb(b,c,d,e,g);if(C()){break _;}h=new Ok;$p=5;case 5:$z=Z6(h,b,f,c,d,e);if(C()){break _;}g
=$z;if(g)return;g=a.b;$p=7;continue _;case 6:AFj(b,c,d,e,g);if(C()){break _;}return;case 7:AGb(b,c,d,e,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function GG(){P.call(this);this.o8=0;}
function A6A(a,b){var c=new GG();Nj(c,a,b);return c;}
function Nj(a,b,c){CS(a,b,((c!==A4S?12:14)*16|0)+13|0,c);a.o8=1;if(c===A4S)a.o8=2;Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);Ew(a,1);}
function HX(b){if(b>=8)b=0;return (b+1|0)/9.0;}
function AM9(a,b){return b&&b!=1?a.W+1|0:a.W;}
function AAz(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Xw(b,c,d,e);if(C()){break _;}f=$z;if(f!==a.bR)return (-1);$p=2;case 2:$z=Z5(b,c,d,e);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ZD(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.nf(c,d,e);if(C()){break _;}f=$z;if(f!==a.bR)return (-1);$p=2;case 2:$z=b.ea(c,d,e);if(C()){break _;}g=$z;if(g>=8)g=0;return g;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AZt(a){return 0;}
function AY2(a){return 0;}
function AXT(a,b,c){return c&&!b?1:0;}
function ALJ(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.nf(c,d,e);if(C()){break _;}g=$z;if(g===a.bR)c=0;else{if(f!=1){$p=2;continue _;}c=1;}return c;case 2:$z=ABG(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function T7(a,b,c,d,e){return null;}
function AXo(a){return 4;}
function AT$(a,b,c){return 0;}
function AV6(a,b){return 0;}
function ADG(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=BR(0.0,0.0,0.0);$p=1;case 1:$z=ZD(a,b,c,d,e);if(C()){break _;}g=$z;h=0;i=c-1|0;j=e-1|0;k=d-1|0;l=g-8|0;m=d-d|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 2:$z=b.ea(c,d,e);if(C())
{break _;}n=$z;if(n<8)return Cs(f);k=0;n=2;$p=3;case 3:$z=ALJ(a,b,c,d,j,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=e+1|0;p=3;$p=4;continue _;}k=1;if(!k){n=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 4:$z=ALJ(a,b,c,d,n,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=4;$p
=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 5:$z=ALJ(a,b,i,d,e,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if
(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 6:$z=ALJ(a,b,n,d,e,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 7:$z=ZD(a,b,n,d,o);if(C()){break _;}p=$z;if(p<0){$p=8;continue _;}if(p>=0){q=p-g|0;f=C3(f,Bg(n-c|0,q),Bg(m,q),Bg(o-e|0,q));}h=h+1|0;if(h
>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;continue _;case 8:$z=ZD(a,b,n,k,o);if(C()){break _;}p=$z;if(p>=0){q=p-l|0;f=C3(f,Bg(n-c|0,q),Bg(m,q),Bg(o-e|0,q));}h=h+1|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 9:$z=ALJ(a,b,c,n,j,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n
=5;$p=12;continue _;case 10:$z=ALJ(a,b,c,n,p,q);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 11:$z=ALJ(a,b,i,n,e,p);if(C()){break _;}n=$z;if(n)k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;case 12:$z=ALJ(a,b,c,d,e,n);if(C()){break _;}c=$z;if(c)k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,
q,$p);}
function AHK(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ADG(a,b,c,d,e);if(C()){break _;}h=$z;g.t=g.t+h.t;g.v=g.v+h.v;g.s=g.s+h.s;return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AOn(a){return a.bR===A4R?5:a.bR!==A4S?0:30;}
function ZS(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.qY(c,d,e);if(C()){break _;}f=$z;d=d+1|0;$p=2;case 2:$z=b.qY(c,d,e);if(C()){break _;}g=$z;if(f>g)g=f;return g;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function ALm(a,b,c,d,e,f){return;}
function AYZ(a){return 0;}
function Ut(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bR===A4R&&!D(f,64)){$p=2;continue _;}if(a.bR!==A4S)return;g=d+1|0;$p=1;case 1:$z=Xw(b,c,g,e);if(C()){break _;}h=$z;if(h!==A5b)return;$p=3;continue _;case 2:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;if(g>0&&g<8)D0(b,c+0.5,d+0.5,e+0.5,B(245),L(f)*0.25+0.75,L(f)*1.0+0.5);if(a.bR!==A4S)return;g=d+1|0;$p=1;continue _;case 3:$z=We(b,c,g,
e);if(C()){break _;}g=$z;if(!g&&!D(f,100))BP(b,B(246),c+L(f),d+a.ch,e+L(f),0.0,0.0,0.0);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AV9(b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:g=null;if(f===A4R){J();g=A4Z;$p=1;continue _;}if(f!==A4S)return g.t===0.0&&g.s===0.0?(-1000.0):CB(g.s,g.t)-1.5707963267948966;J();f=A40;$p=2;continue _;case 1:$z=ADG(g,b,c,d,e);if(C()){break _;}g=$z;if(f!==A4S)return g.t===0.0&&g.s===0.0?(-1000.0):CB(g.s,g.t)-1.5707963267948966;J();f=A40;$p=2;case 2:$z=ADG(f,b,c,d,e);if(C()){break _;}g=$z;return g.t===
0.0&&g.s===0.0?(-1000.0):CB(g.s,g.t)-1.5707963267948966;default:Eq();}}CL().s(b,c,d,e,f,g,$p);}
function AL2(a,b,c,d,e){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJC(a,b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AF0(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJC(a,b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AJC(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X4(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b&&a.bR===A4S){f=0;g=e-1|0;$p=2;continue _;}return;case 2:$z=Xw(b,c,d,g);if(C()){break _;}h=$z;if(h===A4R)f=1;if(!f){g=e+1|0;$p=3;continue _;}f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 3:$z
=Xw(b,c,d,g);if(C()){break _;}h=$z;if(h===A4R)f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 4:$z=Xw(b,g,d,e);if(C()){break _;}h=$z;if(h===A4R)f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 5:$z=Xw(b,g,d,e);if(C()){break _;}h=$z;if(h===A4R)f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 6:$z=Xw(b,c,g,e);if(C()){break _;}h=
$z;if(h===A4R)f=1;if(!f)return;$p=7;case 7:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;if(!g){J();f=A4q.b;$p=8;continue _;}if(g>4){Ig(a,b,c,d,e);return;}J();f=A34.b;$p=9;continue _;case 8:AJ0(b,c,d,e,f);if(C()){break _;}Ig(a,b,c,d,e);return;case 9:AJ0(b,c,d,e,f);if(C()){break _;}Ig(a,b,c,d,e);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function Ig(a,b,c,d,e){var f,g,h,i;D0(b,c+0.5,d+0.5,e+0.5,B(207),0.5,2.5999999046325684+(L(b.n)-L(b.n))*0.800000011920929);f=0;g=c;h=d+1.2;i=e;while(f<8){BP(b,B(247),g+BI(),h,i+BI(),0.0,0.0,0.0);f=f+1|0;}}
function ZG(){var a=this;GG.call(a);a.k2=0;a.gu=null;a.cu=null;}
function ANU(a,b){var c=new ZG();AQ$(c,a,b);return c;}
function AQ$(a,b,c){Nj(a,b,c);a.k2=0;a.gu=$rt_createBooleanArray(4);a.cu=$rt_createIntArray(4);}
function ACh(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}f=$z;g=a.b+1|0;$p=2;case 2:AEe(b,c,d,e,g,f);if(C()){break _;}HP(b,c,d,e,c,d,e);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AJg(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAz(a,b,c,d,e);if(C()){break _;}g=$z;h=1;if(g<=0){$p=2;continue _;}i=(-100);a.k2=0;j=c-1|0;$p=3;continue _;case 2:ACh(a,b,c,d,e);if(C()){break _;}j=d-1|0;$p=7;continue _;case 3:$z=AJd(a,b,j,d,e,i);if(C()){break _;}j=$z;k=c+1|0;$p=4;case 4:$z=AJd(a,b,k,d,e,j);if
(C()){break _;}j=$z;k=e-1|0;$p=5;case 5:$z=AJd(a,b,c,d,k,j);if(C()){break _;}j=$z;k=e+1|0;$p=6;case 6:$z=AJd(a,b,c,d,k,j);if(C()){break _;}j=$z;k=j+a.o8|0;if(!(k<8&&j>=0))k=(-1);j=d+1|0;$p=8;continue _;case 7:$z=AGE(a,b,c,j,e);if(C()){break _;}k=$z;if(!k){if(g<0)return;if(!g){$p=12;continue _;}$p=13;continue _;}if(g>=8){d=a.b;$p=10;continue _;}d=a.b;k=g+8|0;$p=9;continue _;case 8:$z=AAz(a,b,c,j,e);if(C()){break _;}l=$z;if(l>=0){$p=11;continue _;}if(a.k2>=2&&a.bR===A4R)k=0;if(a.bR===A4S&&g<8&&k<8&&k>g&&D(f,4))
{h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 9:ADQ(b,c,j,e,d,k);if(C()){break _;}return;case 10:ADQ(b,c,j,e,d,g);if(C()){break _;}return;case 11:$z=AAz(a,b,c,j,e);if(C()){break _;}k=$z;if(k<8)k=k+8|0;if(a.k2>=2&&a.bR===A4R)k=0;if(a.bR===A4S&&g<8&&k<8&&k>g&&D(f,4)){h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 12:$z=AFO(a,b,c,d,e);if(C()){break _;}m
=$z;l=g+a.o8|0;if(g>=8)l=1;if(l>=8)return;m=m.data;if(m[0]){j=c-1|0;$p=14;continue _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 13:$z=XW(a,b,c,j,e);if(C()){break _;}j=$z;if(!j)return;$p=12;continue _;case 14:AJE(a,b,j,d,e,l);if(C()){break _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 15:AJE(a,b,j,d,e,l);if(C()){break _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e
=e+1|0;$p=21;continue _;case 16:AJE(a,b,c,d,j,l);if(C()){break _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 17:ACh(a,b,c,d,e);if(C()){break _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 18:AFj(b,c,d,e,k);if(C()){break _;}EC(b,c,d,e,a.b);j=a.b;$p=19;case 19:ACR(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 20:AJ0(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 21:AJE(a,b,c,d,e,l);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AJE(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGE(a,b,c,d,e);if(C()){break _;}g=$z;if(!g)return;$p=2;case 2:$z=X4(b,c,d,e);if(C()){break _;}g=$z;if(g>0){if(a.bR!==A4S){J();h=A3U.data[g];$p=4;continue _;}Ig(a,b,c,d,e);}g=a.b;$p=3;case 3:ADQ(b,c,d,e,g,f);if(C()){break _;}return;case 4:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;$p=5;case 5:h.Ex(b,c,d,e,g);if(C()){break _;}g
=a.b;$p=3;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AIn(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=1000;i=0;j=S(g,1);k=S(g,3);l=S(g,2);m=c-1|0;n=e-1|0;o=d-1|0;p=S(f,4);q=f+1|0;a:{while(i<4){if(!(!i&&!j)){r=S(i,1);if(!(!r&&!g)){s=S(i,2);if(!(!s&&!k)){t=S(i,3);if(t)break a;if
(l)break a;}}}i=i+1|0;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;case 1:$z=XW(a,b,u,d,r);if(C()){break _;}t=$z;if(!t){$p=2;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;continue _;case 2:$z=Xw(b,u,d,r);if(C()){break _;}v=$z;if(v!==a.bR){$p=3;continue _;}$p=4;continue _;case 3:$z=XW(a,b,u,o,r);if(C()){break _;}t=$z;if(!t)return f;if
(p<0){$p=5;continue _;}c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;case 4:$z=Z5(b,u,d,r);if(C()){break _;}t=$z;if(t){$p=3;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|
0;$p=1;continue _;case 5:$z=AIn(a,b,u,d,r,q,i);if(C()){break _;}t=$z;if(t<h)h=t;c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AFO(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;h=e-1|0;i=d-1|0;if(f>=4){c=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gu;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gu;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;case 1:$z
=XW(a,b,l,d,m);if(C()){break _;}j=$z;if(!j){$p=2;continue _;}f=f+1|0;if(f>=4){c=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gu;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gu;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;continue _;case 2:$z=Xw(b,l,d,m);if(C()){break _;}n=$z;if(n!==a.bR){$p=3;continue _;}$p=4;continue _;case 3:$z=XW(a,b,l,i,m);if(C()){break _;}j=$z;if(j){k=a.cu.data;j=1;$p=5;continue _;}a.cu.data[f]=0;f=f+1|0;if(f>=4){c
=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gu;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gu;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 4:$z=Z5(b,l,d,m);if(C()){break _;}j=$z;if(j){$p=3;continue _;}f=f+1|0;if(f>=4){c=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gu;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gu;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h
:e;if(f==3)m=m+1|0;$p=1;continue _;case 5:$z=AIn(a,b,l,d,m,j,f);if(C()){break _;}j=$z;k[f]=j;f=f+1|0;if(f>=4){c=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gu;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gu;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function XW(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X4(b,c,d,e);if(C()){break _;}f=$z;J();if(f!=A59.b&&f!=A58.b&&f!=A5d.b){if(!f)return 0;return A3U.data[f].bR.c3();}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AJd(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAz(a,b,c,d,e);if(C()){break _;}g=$z;if(g<0)return f;if(!g)a.k2=a.k2+1|0;if(g>=8)g=0;if(f>=0&&g>=f)g=f;return g;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AGE(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Xw(b,c,d,e);if(C()){break _;}f=$z;if(f===a.bR)c=0;else{if(f!==A4S){$p=2;continue _;}c=0;}return c;case 2:$z=XW(a,b,c,d,e);if(C()){break _;}c=$z;return c?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Xz(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJC(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=X4(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b)EC(b,c,d,e,a.b);return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ADE(){GG.call(this);}
function AP9(a,b){var c=new ADE();ATy(c,a,b);return c;}
function ATy(a,b,c){Nj(a,b,c);Ew(a,0);}
function ABJ(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJC(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=X4(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return;$p=3;case 3:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;b.qz=1;f=a.b-1|0;$p=4;case 4:AEe(b,c,d,e,f,g);if(C()){break _;}HP(b,c,d,e,c,d,e);EC(b,c,d,e,a.b-1|0);b.qz=0;return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function HE(){P.call(this);}
var A31=0;function A1a(a,b){var c=new HE();OI(c,a,b);return c;}
function OI(a,b,c){CS(a,b,c,A6v);}
function AL0(a,b,c,d,e){EC(b,c,d,e,a.b);}
function AMm(a,b,c,d,e,f){EC(b,c,d,e,a.b);}
function AJ4(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=X4(b,c,g,e);if(C()){break _;}g=$z;if(!g)g=1;else{J();if(g==A5r.b)g=1;else{f=A3U.data[g].bR;g=f===A4R?1:f!==A4S?0:1;}}if(g&&d>=0){f=new Ia;h=c+0.5;i=d+0.5;j=e+0.5;c=a.b;EO(f,b);f.nj=0;f.g3=c;f.lg=1;Dx(f,0.9800000190734863,0.9800000190734863);f.cF=f.ef/2.0;k
=h;l=i;m=j;CC(f,k,l,m);f.f=0.0;f.h=0.0;f.g=0.0;f.h7=0;f.bH=k;f.ct=l;f.bG=m;if(!A31){$p=2;continue _;}if(!f.cs){$p=3;continue _;}}return;case 2:AIM(b,f);if(C()){break _;}return;case 3:AHo(f);if(C()){break _;}if(f.cs)return;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AUD(a){return 3;}
function Yh(){A31=0;}
function ACc(){HE.call(this);}
function A1e(a,b){var c=new ACc();AOZ(c,a,b);return c;}
function AOZ(a,b,c){OI(a,b,c);}
function AZC(a,b,c){if(D(c,10))b=a.b;else{Bw();b=A6B.cx;}return b;}
function UJ(){P.call(this);}
function PF(a,b){var c=new UJ();ARp(c,a,b);return c;}
function ARp(a,b,c){CS(a,b,c,A6b);}
function AUP(a,b,c){b=a.b;J();if(b==A4j.b){Bw();b=A6C.cx;}else if(a.b!=A51.b)b=a.b;else{Bw();b=A6D.cx;}return b;}
function ARS(a,b){return 1;}
function AAA(){P.call(this);}
function A11(a){var b=new AAA();AZv(b,a);return b;}
function AZv(a,b){Dw(a,b,A6c);a.W=20;}
function AX4(a,b){return 1;}
function ANa(a,b,c){J();return A37.b;}
function AOJ(a,b){return b==1?21:b?20:21;}
function J5(){P.call(this);this.qg=0;}
function AKU(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.dL(c,d,e);if(C()){break _;}g=$z;if(!a.qg&&g==a.b)return 0;$p=2;case 2:$z=ABG(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Yb(){J5.call(this);this.zc=0;}
function A0w(a,b){var c=new Yb();ASv(c,a,b);return c;}
function ASv(a,b,c){CS(a,b,c,A6r);a.qg=0;a.zc=c;Ew(a,1);}
function ADt(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=Xw(b,c,g,e);if(C()){break _;}f=$z;if(f.c3())return;h=c-2|0;i=c+2|0;j=d+1|0;k=e-2|0;l=e+2|0;while(h<=i){m=g;while(m<=j){n=k;if(n<=l){$p=5;continue _;}m=m+1|0;}h=h+1|0;}$p=2;case 2:$z=Z5(b,c,d,e);if(C()){break _;}i=$z;$p=3;case 3:T9(a,
b,c,d,e,i);if(C()){break _;}i=0;$p=4;case 4:AJ0(b,c,d,e,i);if(C()){break _;}return;case 5:$z=X4(b,h,m,n);if(C()){break _;}o=$z;J();if(o==A37.b)return;n=n+1|0;while(n>l){m=m+1|0;while(m>j){h=h+1|0;if(h>i){$p=2;continue _;}m=g;}n=k;}continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function APJ(a,b){return D(b,10)?0:1;}
function AVm(a,b,c){J();return A4a.b;}
function ATS(a){return a.qg?0:1;}
function AFb(a,b){a.qg=b;a.W=a.zc+(!b?1:0)|0;}
function AMz(a,b,c,d,e,f){return;}
function AFZ(){P.call(this);}
function A0R(a){var b=new AFZ();AX2(b,a);return b;}
function AX2(a,b){Dw(a,b,A6t);a.W=48;}
function AFw(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;if(k<=e){$p=1;continue _;}j=j+1|0;}f=f+1|0;}return;case 1:$z=Xw(b,f,j,k);if(C()){break _;}l=$z;k=k+1|0;a:while(true){if(k<=e){continue _;}j=j+1|0;while(j>d){f=f+1|0;if(f>g)break a;j=h;}k=i;}return;default:Eq();}}CL().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function AH1(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;if(l<=c){$p=1;continue _;}k=k+1|0;}f=f+1|0;}return;case 1:$z=X4(b,f,k,l);if(C()){break _;}d=$z;$p=2;case 2:ACR(b,f,k,l,d);if(C()){break _;}l=l+1|0;a:while(true){if(l<=c){$p=1;continue _;}k=k+1|0;while(k>i){f
=f+1|0;if(f>g)break a;k=h;}l=j;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function K3(){P.call(this);this.zn=0;}
function AYO(a){return 0;}
function Ul(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.dL(c,d,e);if(C()){break _;}g=$z;if(!a.zn&&g==a.b)return 0;$p=2;case 2:$z=ABG(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AKL(){K3.call(this);}
function A0O(a,b,c,d){var e=new AKL();AVo(e,a,b,c,d);return e;}
function AVo(a,b,c,d,e){CS(a,b,c,d);a.zn=e;}
function AO5(a,b){return 0;}
function ACk(){Fa.call(this);}
function ANz(a,b){var c=new ACk();AZq(c,a,b);return c;}
function AZq(a,b,c){JH(a,b,c);Bj(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function ADY(a,b){J();return A5C.data[b];}
function YN(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Tr(b,c,d,e);if(C()){break _;}f=$z;if(f>13)return 0;d=d-1|0;$p=2;case 2:$z=X4(b,c,d,e);if(C()){break _;}c=$z;return !ADY(a,c)?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function W5(){P.call(this);}
function ZY(a,b){var c=new W5();AQi(c,a,b);return c;}
function AQi(a,b,c){Dw(a,b,A6q);a.W=c;}
function AUX(a,b){return b==1?a.W-16|0:b?a.W:a.W+16|0;}
function U5(){P.call(this);this.uf=0;}
function AYj(a,b){var c=new U5();AV7(c,a,b);return c;}
function AV7(a,b,c){CS(a,b,6,A6b);a.uf=c;if(!c)Bj(a,0.0,0.0,0.0,1.0,0.5,1.0);FB(a,255);}
function AZb(a,b){return b>1?5:6;}
function AVR(a){return a.uf;}
function Xb(a,b,c,d,e,f){J();}
function WU(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:J();f=d-1|0;$p=1;case 1:$z=X4(b,c,f,e);if(C()){break _;}g=$z;if(g!=A3Z.b)return;g=0;$p=2;case 2:AJ0(b,c,d,e,g);if(C()){break _;}d=A3Y.b;$p=3;case 3:AJ0(b,c,f,e,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function ARg(a,b,c){J();return A3Z.b;}
function APL(a){return a.uf;}
function AMK(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:J();if(a!==A3Z){$p=1;continue _;}if(f==1)return 1;$p=2;continue _;case 1:ABG(a,b,c,d,e,f);if(C()){break _;}if(f==1)return 1;$p=2;case 2:$z=ABG(a,b,c,d,e,f);if(C()){break _;}g=$z;if(!g)c=0;else{if(f){$p=3;continue _;}c=1;}return c;case 3:$z=b.dL(c,d,e);if(C()){break _;}c=$z;return c==a.b?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AIL(){P.call(this);}
function A0x(a,b){var c=new AIL();AR8(c,a,b);return c;}
function AR8(a,b,c){CS(a,b,c,A6x);}
function AVd(a,b){return !b?a.W+2|0:b!=1?a.W:a.W+1|0;}
function AOt(a,b){return 0;}
function ABP(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=APz(b,c+0.5,d+0.5,e+0.5);f.gD=D(b.n,f.gD/4|0)+(f.gD/8|0)|0;$p=1;case 1:AIM(b,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AMt(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=APz(b,c+0.5,d+0.5,e+0.5);$p=1;case 1:AIM(b,g);if(C()){break _;}C2(b,g,B(218),1.0,1.0);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function YE(){P.call(this);}
function A0h(a,b){var c=new YE();ANR(c,a,b);return c;}
function ANR(a,b,c){CS(a,b,c,A6c);}
function AZu(a,b){return b>1?a.W:4;}
function AUY(a,b){return 0;}
function TE(){JY.call(this);}
function A03(a,b){var c=new TE();ARk(c,a,b);return c;}
function ARk(a,b,c){ADZ(a,b,c);}
function AT6(a,b){return 1;}
function AOk(a,b,c){J();return A4q.b;}
function AI6(){P.call(this);}
function A0T(a,b){var c=new AI6();AZk(c,a,b);return c;}
function AZk(a,b,c){CS(a,b,c,A6w);Ew(a,1);}
function AHS(a,b,c,d,e){return null;}
function ATj(a){return 0;}
function AO9(a){return 0;}
function ASr(a){return 2;}
function AGP(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=We(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=We(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=We(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;f=e+1|0;$p=4;case 4:$z=We(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;d=d-1|0;$p=5;case 5:$z=We(b,c,d,e);if(C()){break _;}c=$z;return c;default:
Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AIj(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;if(f==1){h=d-1|0;$p=2;continue _;}if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 2:$z=We(b,c,h,e);if(C()){break _;}h=$z;if(h)g=5;if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h
=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 3:$z=We(b,c,d,h);if(C()){break _;}h=$z;if(h)g=4;if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 4:$z=We(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 5:$z=We(b,h,d,e);if(C()){break _;}h=$z;if(h)g=2;if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 6:$z
=We(b,f,d,e);if(C()){break _;}f=$z;if(f)g=1;$p=7;case 7:AFj(b,c,d,e,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AMk(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;if(g)return;$p=2;case 2:W4(a,b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function W4(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=We(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=c+1|0;$p=2;continue _;}f=1;$p=3;continue _;case 2:$z=We(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=e-1|0;$p=4;continue _;}f=2;$p=5;continue _;case 3:AFj(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 4:$z=We(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=e+1|0;$p=7;continue _;}f=3;$p=8;continue _;case 5:AFj(b,
c,d,e,f);if(C()){break _;}$p=6;case 6:AAq(a,b,c,d,e);if(C()){break _;}return;case 7:$z=We(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=d-1|0;$p=9;continue _;}f=4;$p=10;continue _;case 8:AFj(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 9:$z=We(b,c,f,e);if(C()){break _;}f=$z;if(!f){$p=6;continue _;}f=5;$p=11;continue _;case 10:AFj(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 11:AFj(b,c,d,e,f);if(C()){break _;}$p=6;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AE2(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAq(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;$p=2;case 2:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;h=0;f=c-1|0;$p=3;case 3:$z=We(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==1)h=1;f=c+1|0;$p=4;case 4:$z=We(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==2)h=1;f=e-1|0;$p=5;case 5:$z=We(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==
3)h=1;f=e+1|0;$p=6;case 6:$z=We(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==4)h=1;f=d-1|0;$p=7;case 7:$z=We(b,c,f,e);if(C()){break _;}f=$z;if(!f&&g==5)h=1;if(!h)return;$p=8;case 8:$z=Z5(b,c,d,e);if(C()){break _;}f=$z;$p=9;case 9:T9(a,b,c,d,e,f);if(C()){break _;}f=0;$p=10;case 10:AJ0(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AAq(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGP(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=Z5(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:T9(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:AJ0(b,c,d,e,f);if(C()){break _;}return 0;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AE9(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}h=$z;if(h==1)Bj(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)Bj(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)Bj(a,0.3499999940395355,0.20000000298023224,
0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)Bj(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else Bj(a,0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);$p=2;case 2:$z=IC(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AKN(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;m=j;BP(b,B(248),k,l,m,0.0,0.0,0.0);BP(b,B(249),k,l,m,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l
=i+0.2199999988079071;m=j;BP(b,B(248),k,l,m,0.0,0.0,0.0);BP(b,B(249),k,l,m,0.0,0.0,0.0);}else if(g==3){k=h;l=i+0.2199999988079071;m=j-0.27000001072883606;BP(b,B(248),k,l,m,0.0,0.0,0.0);BP(b,B(249),k,l,m,0.0,0.0,0.0);}else if(g!=4){n=h;o=i;p=j;BP(b,B(248),n,o,p,0.0,0.0,0.0);BP(b,B(249),n,o,p,0.0,0.0,0.0);}else{k=h;l=i+0.2199999988079071;m=j+0.27000001072883606;BP(b,B(248),k,l,m,0.0,0.0,0.0);BP(b,B(249),k,l,m,0.0,0.0,0.0);}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AJs(){var a=this;P.call(a);a.qM=null;a.r$=null;}
function A14(a,b){var c=new AJs();AUu(c,a,b);return c;}
function AUu(a,b,c){CS(a,b,c,A6u);a.qM=$rt_createIntArray(256);a.r$=$rt_createIntArray(256);Gk(a,A36.b,5,20);Gk(a,A37.b,5,5);Gk(a,A38.b,30,60);Gk(a,A4o.b,30,20);Gk(a,A4p.b,15,100);Gk(a,A4i.b,30,60);Ew(a,1);}
function Gk(a,b,c,d){a.qM.data[b]=c;a.r$.data[b]=d;}
function ALO(a,b,c,d,e){return null;}
function AVW(a){return 0;}
function AXM(a){return 0;}
function AP0(a){return 3;}
function APt(a,b){return 0;}
function ARP(a){return 20;}
function TD(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;h=S(g,15);if(h>=0){$p=2;continue _;}i=g+1|0;$p=3;continue _;case 2:$z=AHs(a,b,c,d,e);if(C()){break _;}i=$z;if(i){j=d-1|0;$p=4;continue _;}h=d-1|0;$p=5;continue _;case 3:AFj(b,
c,d,e,i);if(C()){break _;}EC(b,c,d,e,a.b);$p=2;continue _;case 4:$z=ABd(a,b,c,j,e);if(C()){break _;}i=$z;if(!i&&!h&&!D(f,4)){h=0;$p=13;continue _;}if(!(g%5|0)&&g>5){h=c+1|0;i=300;$p=7;continue _;}return;case 5:$z=We(b,c,h,e);if(C()){break _;}h=$z;if(h&&g<=3)return;h=0;$p=6;case 6:AJ0(b,c,d,e,h);if(C()){break _;}return;case 7:Us(a,b,h,d,e,i,f);if(C()){break _;}i=c-1|0;g=300;$p=8;case 8:Us(a,b,i,d,e,g,f);if(C()){break _;}g=100;$p=9;case 9:Us(a,b,c,j,e,g,f);if(C()){break _;}k=d+1|0;g=200;$p=10;case 10:Us(a,b,c,
k,e,g,f);if(C()){break _;}l=e-1|0;g=300;$p=11;case 11:Us(a,b,c,d,l,g,f);if(C()){break _;}m=e+1|0;g=300;$p=12;case 12:Us(a,b,c,d,m,g,f);if(C()){break _;}n=d+4|0;a:{while(i<=h){o=l;while(o<=m){p=j;while(p<=n){if(i!=c)break a;if(p!=d)break a;if(o!=e)break a;p=p+1|0;}o=o+1|0;}i=i+1|0;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 13:AJ0(b,c,d,e,h);if(C()){break _;}return;case 14:$z=X4(b,i,p,o);if(C()){break _;}r=$z;if(!r){r=i+1|0;$p=15;continue _;}if(0>0&&D(f,q)<=0){g=a.b;$p=21;continue _;}b:
{c:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break c;o=l;}p=j;}if(i!=c)break b;if(p!=d)break b;if(o==e)continue;else break b;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;continue _;case 15:$z=ABL(a,b,r,p,o,g);if(C()){break _;}g=$z;r=i-1|0;$p=16;case 16:$z=ABL(a,b,r,p,o,g);if(C()){break _;}g=$z;r=p-1|0;$p=17;case 17:$z=ABL(a,b,i,r,o,g);if(C()){break _;}g=$z;r=p+1|0;$p=18;case 18:$z=ABL(a,b,i,r,o,g);if(C()){break _;}g=$z;r=o-1|0;$p=19;case 19:$z=ABL(a,b,i,p,r,g);if(C()){break _;}r=$z;g
=o+1|0;$p=20;case 20:$z=ABL(a,b,i,p,g,r);if(C()){break _;}r=$z;if(r>0&&D(f,q)<=r){g=a.b;$p=21;continue _;}d:{b:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break b;o=l;}p=j;}if(i!=c)break d;if(p!=d)break d;if(o==e)continue;else break d;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 21:AJ0(b,i,p,o,g);if(C()){break _;}a:{d:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break d;o=l;}p=j;}if(i!=c)break a;if(p!=d)break a;if(o==e)continue;else break a;}return;}q
=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function Us(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.r$.data;$p=1;case 1:$z=X4(b,c,d,e);if(C()){break _;}i=$z;j=h[i];if(D(g,f)>=j)return;$p=2;case 2:$z=X4(b,c,d,e);if(C()){break _;}f=$z;J();i=f!=A4p.b?0:1;if(D(g,2)){f=0;$p=3;continue _;}f=a.b;$p=4;continue _;case 3:AJ0(b,c,d,e,f);if(C()){break _;}if(!i)return;g=A4p;f=0;$p=5;continue _;case 4:AJ0(b,c,d,e,f);if
(C()){break _;}if(!i)return;g=A4p;f=0;$p=5;case 5:g.l4(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AHs(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c+1|0;$p=1;case 1:$z=ABd(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c-1|0;$p=2;case 2:$z=ABd(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=d-1|0;$p=3;case 3:$z=ABd(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=d+1|0;$p=4;case 4:$z=ABd(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=5;case 5:$z=ABd(a,b,c,d,f);if(C()){break _;}f=
$z;if(f)return 1;e=e+1|0;$p=6;case 6:$z=ABd(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AUe(a){return 0;}
function ABd(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.qM.data;$p=1;case 1:$z=b.dL(c,d,e);if(C()){break _;}c=$z;return f[c]<=0?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ABL(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.qM.data;$p=1;case 1:$z=X4(b,c,d,e);if(C()){break _;}c=$z;h=g[c];if(h>f)f=h;return f;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AHY(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=We(b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AHs(a,b,c,d,e);if(C()){break _;}c=$z;return c?1:0;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function W9(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=We(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AHs(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return;f=0;$p=3;case 3:AJ0(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function X0(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=We(b,c,f,e);if(C()){break _;}f=$z;if(f){EC(b,c,d,e,a.b);return;}$p=2;case 2:$z=AHs(a,b,c,d,e);if(C()){break _;}f=$z;if(f){EC(b,c,d,e,a.b);return;}f=0;$p=3;case 3:AJ0(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AMA(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!D(f,24))D0(b,c+0.5,d+0.5,e+0.5,B(250),1.0+L(f),L(f)*0.699999988079071+0.30000001192092896);g=d-1|0;$p=1;case 1:$z=We(b,c,g,e);if(C()){break _;}h=$z;if(h){g=0;i=c;j=d;k=e;while(g<3){BP(b,B(247),i+L(f),j+L(f)*0.5+0.5,k+L(f),0.0,0.0,
0.0);g=g+1|0;}return;}J();l=A5r;$p=2;case 2:$z=ABd(l,b,c,g,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;k=e;while(g<3){BP(b,B(247),i+L(f),j+L(f)*0.5+0.5,k+L(f),0.0,0.0,0.0);g=g+1|0;}return;}l=A5r;g=c-1|0;$p=3;case 3:a:{$z=ABd(l,b,g,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;m=d;n=e;while(true){if(g>=2)break a;j=i+L(f)*0.10000000149011612;k=m+L(f);o=n+L(f);BP(b,B(247),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=A5r;h=c+1|0;$p=4;case 4:a:{$z=ABd(l,b,h,d,e);if(C()){break _;}g=$z;if(g){g=0;i=h;m=d;n=e;while(true){if(g>=2)break a;j
=i-L(f)*0.10000000149011612;k=m+L(f);o=n+L(f);BP(b,B(247),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=A5r;g=e-1|0;$p=5;case 5:a:{$z=ABd(l,b,c,d,g);if(C()){break _;}g=$z;if(g){g=0;i=c;k=d;n=e;while(true){if(g>=2)break a;j=i+L(f);m=k+L(f);o=n+L(f)*0.10000000149011612;BP(b,B(247),j,m,o,0.0,0.0,0.0);g=g+1|0;}}}l=A5r;g=e+1|0;$p=6;case 6:a:{$z=ABd(l,b,c,d,g);if(C()){break _;}h=$z;if(h){h=0;o=c;p=d;j=g;while(true){if(h>=2)break a;q=o+L(f);i=p+L(f);n=j-L(f)*0.10000000149011612;BP(b,B(247),q,i,n,0.0,0.0,0.0);h=h+1|0;}}}l=A5r;d=
d+1|0;$p=7;case 7:a:{$z=ABd(l,b,c,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;n=e;while(true){if(g>=2)break a;q=i+L(f);k=j-L(f)*0.10000000149011612;o=n+L(f);BP(b,B(247),q,k,o,0.0,0.0,0.0);g=g+1|0;}}}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function DM(){P.call(this);}
function AI8(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.rm();$p=1;case 1:AA$(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AGG(a,b,c,d,e){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA2(b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function VT(){DM.call(this);}
function A1Y(a,b){var c=new VT();AOh(c,a,b);return c;}
function AOh(a,b,c){CS(a,b,c,A6b);}
function APQ(a){return A1N();}
function AVY(a){return 0;}
function Vj(){P.call(this);this.ci=null;}
function AZd(a,b){var c=new Vj();AWO(c,a,b);return c;}
function AWO(a,b,c){CS(a,b,c.W,c.bR);a.ci=c;BB(a,c.oy);C6(a,c.ms/3.0);a.fY=c.fY;}
function AVL(a){return 0;}
function AO3(a){return 0;}
function AQZ(a){return 10;}
function AJ5(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABG(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AEq(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}h=$z;if(!h){Bj(a,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bj(a,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bj(a,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;}Bj(a,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:AGg(a,b,c,d,e,f,
g);if(C()){break _;}Bj(a,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:AGg(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 4:AGg(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:AGg(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 6:AGg(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:AGg(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 8:AGg(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.5,1.0,
0.5,1.0);$p=9;case 9:AGg(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function ACJ(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=Xw(b,c,g,e);if(C()){break _;}h=$z;if(!h.c3()){$p=2;continue _;}i=a.ci.b;$p=11;continue _;case 2:ADn(a,b,c,d,e);if(C()){break _;}i=c+1|0;j=d-1|0;$p=3;case 3:ADn(a,b,i,j,e);if(C()){break _;}k=c-1|0;$p=4;case 4:ADn(a,b,k,j,e);if(C()){break _;}l=e-1|0;$p=5;case 5:ADn(a,
b,c,j,l);if(C()){break _;}m=e+1|0;$p=6;case 6:ADn(a,b,c,j,m);if(C()){break _;}$p=7;case 7:ADn(a,b,i,g,e);if(C()){break _;}$p=8;case 8:ADn(a,b,k,g,e);if(C()){break _;}$p=9;case 9:ADn(a,b,c,g,l);if(C()){break _;}$p=10;case 10:ADn(a,b,c,g,m);if(C()){break _;}h=a.ci;$p=12;continue _;case 11:AJ0(b,c,d,e,i);if(C()){break _;}h=a.ci;$p=12;case 12:h.ep(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ADn(a,b,c,d,e){var f,g,h,i,j,k,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AKd(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;g=(-1);f=c+1|0;h=d+1|0;$p=2;case 2:$z=AKd(a,b,f,h,e);if(C()){break _;}i=$z;if(i)g=0;i=c-1|0;$p=3;case 3:$z=AKd(a,b,i,h,e);if(C()){break _;}j=$z;if(j)g=1;j=e+1|0;$p=4;case 4:$z=AKd(a,b,c,h,j);if(C()){break _;}k=$z;if(k)g=2;k=e-1|0;$p=
5;case 5:$z=AKd(a,b,c,h,k);if(C()){break _;}h=$z;if(h)g=3;if(g<0){$p=6;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 6:$z=Y3(a,b,f,d,e);if(C()){break _;}h=$z;if(h){$p=7;continue _;}$p=9;continue _;case 7:$z=Y3(a,b,i,d,e);if(C()){break _;}h=$z;if(!h)g=0;$p=9;continue _;case 8:$z=AKd(a,b,i,h,e);if(C()){break _;}i=$z;if(i)g=0;$p=12;continue _;case 9:$z=Y3(a,b,i,d,e);if(C()){break _;}h=$z;if(h){$p=10;continue _;}$p=13;continue _;case 10:$z=Y3(a,b,f,d,e);if(C()){break _;}h=$z;if
(!h)g=1;$p=13;continue _;case 11:AFj(b,c,d,e,g);if(C()){break _;}return;case 12:$z=AKd(a,b,f,h,e);if(C()){break _;}f=$z;if(f)g=1;$p=15;continue _;case 13:$z=Y3(a,b,c,d,j);if(C()){break _;}h=$z;if(h){$p=14;continue _;}$p=16;continue _;case 14:$z=Y3(a,b,c,d,k);if(C()){break _;}h=$z;if(!h)g=2;$p=16;continue _;case 15:$z=AKd(a,b,c,h,k);if(C()){break _;}f=$z;if(f)g=2;$p=18;continue _;case 16:$z=Y3(a,b,c,d,k);if(C()){break _;}h=$z;if(h){$p=17;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 17:$z
=Y3(a,b,c,d,j);if(C()){break _;}h=$z;if(!h)g=3;if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 18:$z=AKd(a,b,c,h,j);if(C()){break _;}f=$z;if(f)g=3;if(g<0)return;$p=11;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Y3(a,b,c,d,e){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Xw(b,c,d,e);if(C()){break _;}b=$z;return b.c3();default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AKd(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X4(b,c,d,e);if(C()){break _;}f=$z;if(!f)c=0;else{J();c=A3U.data[f].dO()!=10?0:1;}return c;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AJI(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.jK(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function WO(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.pn(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function YS(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.l4(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AHt(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:$z=f.zj(b,c,d,e);if(C()){break _;}g=$z;return g;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AX5(a,b){return a.ci.vN(b);}
function AXw(a){return a.ci.oc();}
function AUM(a,b,c){return a.ci.dq(b,c);}
function AR9(a,b){return a.ci.d_(b);}
function AP1(a,b,c){return a.ci.em(b,c);}
function AXs(a,b){return a.ci.bZ(b);}
function AHD(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:$z=g.sj(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AOP(a){return a.ci.k_();}
function AGX(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:$z=f.nn(b,c,d,e);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Yf(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.ci;$p=1;case 1:h.oY(b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AQM(a){return a.ci.nI();}
function AQV(a,b,c){return a.ci.nz(b,c);}
function AG3(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:$z=f.ff(b,c,d,e);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Ya(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;$p=1;case 1:ACJ(a,b,c,d,e,f);if(C()){break _;}g=a.ci;$p=2;case 2:g.e1(b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Up(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:f.kl(b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ACT(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.ci;$p=1;case 1:h.DG(b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AHw(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.Ex(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AK$(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.nc(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function ALb(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.ew(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function ABU(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:$z=g.kr(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function UY(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:f.qW(b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AA8(){DM.call(this);this.eM=null;}
function AZ9(a){var b=new AA8();AWI(b,a);return b;}
function AWI(a,b){Dw(a,b,A6c);a.eM=new De;a.W=26;}
function ZV(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1)return a.W-1|0;if(!f)return a.W-1|0;g=e-1|0;$p=1;case 1:$z=b.dL(c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=b.dL(c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=b.dL(k,d,e);if(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=b.dL(m,
d,e);if(C()){break _;}n=$z;if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;J();if(A5C.data[h]&&!A5C.data[j])k=3;if(A5C.data[j]&&!A5C.data[h])k=2;if(A5C.data[l]&&!A5C.data[n])k=5;if(A5C.data[n]&&!A5C.data[l])k=4;return f!=k?a.W:a.W+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);c=l!=a.b?m:k;$p=7;continue _;}return a.W;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);c=h!=a.b?i:g;$p=5;continue _;}return a.W;case 5:$z=b.dL(k,d,c);if(C()){break _;}p=$z;if(h==a.b)i=g;$p=6;case 6:$z=b.dL(m,d,i);if(C()){break _;}m=$z;if(f==4)o=(-1)-o|0;i
=5;J();if(!(!A5C.data[l]&&!A5C.data[p])&&!A5C.data[n]&&!A5C.data[m])i=5;if(!(!A5C.data[n]&&!A5C.data[m])&&!A5C.data[l]&&!A5C.data[p])i=4;return (f!=i?a.W+32|0:a.W+16|0)+o|0;case 7:$z=b.dL(c,d,g);if(C()){break _;}g=$z;if(l==a.b)m=k;$p=8;case 8:$z=b.dL(m,d,i);if(C()){break _;}m=$z;if(f==3)o=(-1)-o|0;i=3;J();if(!(!A5C.data[h]&&!A5C.data[g])&&!A5C.data[j]&&!A5C.data[m])i=3;if(!(!A5C.data[j]&&!A5C.data[m])&&!A5C.data[h]&&!A5C.data[g])i=2;return (f!=i?a.W+32|0:a.W+16|0)+o|0;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,p,$p);}
function AX$(a,b){return b==1?a.W-1|0:!b?a.W-1|0:b!=3?a.W:a.W+1|0;}
function AET(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;$p=1;case 1:$z=X4(b,g,d,e);if(C()){break _;}h=$z;if(h==a.b)f=1;h=c+1|0;$p=2;case 2:$z=X4(b,h,d,e);if(C()){break _;}i=$z;if(i==a.b)f=f+1|0;i=e-1|0;$p=3;case 3:$z=X4(b,c,d,i);if(C()){break _;}j=$z;if(j==a.b)f=f+1|0;k=e+1|0;$p=4;case 4:$z=X4(b,c,d,k);if(C()){break _;}l=$z;if(l==
a.b)f=f+1|0;if(f>1)return 0;$p=5;case 5:$z=ADP(a,b,g,d,e);if(C()){break _;}j=$z;if(j)return 0;$p=6;case 6:$z=ADP(a,b,h,d,e);if(C()){break _;}e=$z;if(e)return 0;$p=7;case 7:$z=ADP(a,b,c,d,i);if(C()){break _;}e=$z;if(e)return 0;$p=8;case 8:$z=ADP(a,b,c,d,k);if(C()){break _;}c=$z;return c?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADP(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X4(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return 0;f=c-1|0;$p=2;case 2:$z=X4(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=c+1|0;$p=3;case 3:$z=X4(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=e-1|0;$p=4;case 4:$z=X4(b,c,d,f);if(C()){break _;}f=$z;if(f==a.b)return 1;e=e+1|0;$p=5;case 5:$z=X4(b,c,d,e);if(C()){break _;}c=$z;return c
!=a.b?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AMM(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AH5(b,c,d,e);if(C()){break _;}f=$z;g=f;h=0;i=27;j=c;k=d;l=e;while(h<i){f=Oh(g,h);if(f!==null){m=L(a.eM)*0.800000011920929+0.10000000149011612;n=L(a.eM)*0.800000011920929+0.10000000149011612;o
=L(a.eM)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;if(f.m>0){s=D(a.eM,21)+10|0;if(s>f.m)s=f.m;f.m=f.m-s|0;t=F$(b,p,q,r,L7(f.bs,s,f.dP));t.f=CH(a.eM)*0.05000000074505806;t.h=CH(a.eM)*0.05000000074505806+0.20000000298023224;t.g=CH(a.eM)*0.05000000074505806;$p=3;continue _;}}h=h+1|0;}$p=2;case 2:AGG(a,b,c,d,e);if(C()){break _;}return;case 3:AIM(b,t);if(C()){break _;}a:while(true){if(f.m>0){s=D(a.eM,21)+10|0;if(s>f.m)s=f.m;f.m=f.m-s|0;t=F$(b,p,q,r,L7(f.bs,s,f.dP));t.f=CH(a.eM)*0.05000000074505806;t.h
=CH(a.eM)*0.05000000074505806+0.20000000298023224;t.g=CH(a.eM)*0.05000000074505806;continue _;}while(true){h=h+1|0;if(h>=i)break a;f=Oh(g,h);if(f===null)continue;else break;}m=L(a.eM)*0.800000011920929+0.10000000149011612;n=L(a.eM)*0.800000011920929+0.10000000149011612;o=L(a.eM)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;}$p=2;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function ABb(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AH5(b,c,d,e);if(C()){break _;}g=$z;h=g;i=d+1|0;$p=2;case 2:$z=We(b,c,i,e);if(C()){break _;}j=$z;if(j)return 1;k=c-1|0;$p=3;case 3:$z=X4(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){$p=5;continue _;}l=c+1|0;$p=4;case 4:$z=X4(b,l,d,e);if
(C()){break _;}j=$z;if(j==a.b){$p=7;continue _;}m=e-1|0;$p=6;continue _;case 5:$z=We(b,k,i,e);if(C()){break _;}j=$z;if(j)return 1;l=c+1|0;$p=4;continue _;case 6:$z=X4(b,c,d,m);if(C()){break _;}j=$z;if(j==a.b){$p=9;continue _;}n=e+1|0;$p=8;continue _;case 7:$z=We(b,l,i,e);if(C()){break _;}j=$z;if(j)return 1;m=e-1|0;$p=6;continue _;case 8:$z=X4(b,c,d,n);if(C()){break _;}j=$z;if(j!=a.b){$p=10;continue _;}$p=11;continue _;case 9:$z=We(b,c,i,m);if(C()){break _;}j=$z;if(j)return 1;n=e+1|0;$p=8;continue _;case 10:$z
=X4(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){g=new G0;o=B(251);$p=12;continue _;}g=h;$p=13;continue _;case 11:$z=We(b,c,i,n);if(C()){break _;}j=$z;if(j)return 1;$p=10;continue _;case 12:$z=AH5(b,k,d,e);if(C()){break _;}p=$z;Jo(g,o,p,h);$p=13;case 13:$z=X4(b,l,d,e);if(C()){break _;}j=$z;if(j!=a.b){o=g;$p=15;continue _;}o=new G0;p=B(251);g=g;$p=14;case 14:$z=AH5(b,l,d,e);if(C()){break _;}h=$z;Jo(o,p,g,h);$p=15;case 15:$z=X4(b,c,d,m);if(C()){break _;}e=$z;if(e==a.b){g=new G0;p=B(251);$p=16;continue _;}g=o;$p=
17;continue _;case 16:$z=AH5(b,c,d,m);if(C()){break _;}h=$z;Jo(g,p,h,o);$p=17;case 17:$z=X4(b,c,d,n);if(C()){break _;}e=$z;if(e==a.b){o=new G0;p=B(251);g=g;$p=18;continue _;}o=g;b=o;$p=19;continue _;case 18:$z=AH5(b,c,d,n);if(C()){break _;}b=$z;Jo(o,p,g,b);b=o;$p=19;case 19:UM(f,b);if(C()){break _;}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ARv(a){return A0X();}
function AFv(){P.call(this);}
function A1h(a,b){var c=new AFv();AOi(c,a,b);return c;}
function AOi(a,b,c){CS(a,b,c,A6w);}
function AAd(a,b,c,d,e){return null;}
function ANG(a){return 0;}
function AVn(a){return 0;}
function AW3(a){return 5;}
function AYy(a,b){return 1;}
function AN8(a){return 0;}
function ACD(){P.call(this);}
function A05(a){var b=new ACD();ARd(b,a);return b;}
function ARd(a,b){Dw(a,b,A6c);a.W=59;}
function APm(a,b){if(b==1)b=a.W-16|0;else if(!b){J();b=A36.bZ(0);}else b=b!=2&&b!=4?a.W:a.W+1|0;return b;}
function AB1(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHX(f);if(C()){break _;}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AFu(){Fa.call(this);}
function A1Q(a,b){var c=new AFu();ARD(c,a,b);return c;}
function ARD(a,b,c){JH(a,b,c);a.W=c;Ew(a,1);Bj(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AQO(a,b){J();return b!=A55.b?0:1;}
function AEf(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEh(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=Tr(b,c,g,e);if(C()){break _;}h=$z;if(h<9)return;$p=3;case 3:$z=Z5(b,c,d,e);if(C()){break _;}h=$z;if(h>=7)return;$p=4;case 4:$z=U0(a,b,c,d,e);if(C()){break _;}i=$z;if(D(f,100.0/i|0))return;g=h+1|0;$p=5;case 5:AFj(b,c,d,e,g);if(C()){break _;}return;default:
Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function U0(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;g=e-1|0;$p=1;case 1:$z=X4(b,c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=X4(b,c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=X4(b,k,d,e);if
(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=X4(b,m,d,e);if(C()){break _;}n=$z;$p=5;case 5:$z=X4(b,k,d,g);if(C()){break _;}o=$z;$p=6;case 6:$z=X4(b,m,d,g);if(C()){break _;}p=$z;$p=7;case 7:$z=X4(b,m,d,i);if(C()){break _;}q=$z;$p=8;case 8:$z=X4(b,k,d,i);if(C()){break _;}r=$z;s=l!=a.b&&n!=a.b?0:1;t=h!=a.b&&j!=a.b?0:1;u=o!=a.b&&p!=a.b&&q!=a.b&&r!=a.b?0:1;o=d-1|0;while(k<=m){v=g;if(v<=i){$p=9;continue _;}k=k+1|0;}a:{if(!u){if(!s)break a;if(!t)break a;}f=f/2.0;}return f;case 9:$z=X4(b,k,o,v);if(C()){break _;}w=$z;x
=0.0;J();if(w==A55.b){x=1.0;$p=10;continue _;}if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){continue _;}k=k+1|0;if(k>m)break;v=g;}b:{if(!u){if(!s)break b;if(!t)break b;}f=f/2.0;}return f;case 10:$z=Z5(b,k,o,v);if(C()){break _;}d=$z;if(d>0)x=3.0;if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){$p=9;continue _;}k=k+1|0;if(k>m)break;v=g;}c:{if(!u){if(!s)break c;if(!t)break c;}f=f/2.0;}return f;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AXK(a,b,c){if(c<0)c=7;return a.W+c|0;}
function AU0(a){return 6;}
function AH7(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;h=c;i=d;j=e;while(g<3){if(D(b.n,15)<=f){k=L(b.n)*0.699999988079071+0.15000000596046448;l=L(b.n)*0.699999988079071+0.15000000596046448;m=L(b.n)*0.699999988079071+0.15000000596046448;n=new Ep;o=h+k;p=i+l;q=j+m;r=new B6;Bw();Df(r,
A6E);F9(n,b,o,p,q,r);n.go=10;$p=1;continue _;}g=g+1|0;}return;case 1:AIM(b,n);if(C()){break _;}while(true){g=g+1|0;if(g>=3)break;if(D(b.n,15)>f)continue;else{k=L(b.n)*0.699999988079071+0.15000000596046448;l=L(b.n)*0.699999988079071+0.15000000596046448;m=L(b.n)*0.699999988079071+0.15000000596046448;n=new Ep;o=h+k;p=i+l;q=j+m;r=new B6;Bw();Df(r,A6E);F9(n,b,o,p,q,r);n.go=10;continue _;}}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ASu(a,b,c){var d;c=Ds();d=new Bd;Bb(d);B$(c,O(Be(H(d,B(252)),b)));if(b!=7)b=(-1);else{Bw();b=A6F.cx;}return b;}
function AU_(a,b){return 1;}
function AK9(){P.call(this);}
function A1p(a){var b=new AK9();ATO(b,a);return b;}
function ATO(a,b){Dw(a,b,A6p);a.W=87;Ew(a,1);Bj(a,0.0,0.0,0.0,1.0,0.9375,1.0);FB(a,255);}
function WE(a,b,c,d,e){return Dy(c+0|0,d+0|0,e+0|0,c+1|0,d+1|0,e+1|0);}
function AOm(a){return 0;}
function AST(a){return 0;}
function AZB(a,b,c){b=S(b,1);return !b&&c>0?a.W-1|0:b?2:a.W;}
function AHL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(D(f,5))return;g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;a:while(true){if(g>h){if(!0){$p=1;continue _;}g=7;$p=2;continue _;}l=d;while(l<=i){m=j;if(m<=k)break a;l=l+1|0;}g=g+1|0;}$p=4;continue _;case 1:$z=Z5(b,c,d,e);if(C()){break _;}h=$z;if(h>0){g=h-1|0;$p=3;continue _;}g
=c-0|0;h=c+0|0;m=e-0|0;j=e+0|0;while(true){if(g>h){if(0)return;J();g=A3X.b;$p=5;continue _;}l=m;if(l<=j)break;g=g+1|0;}$p=6;continue _;case 2:AFj(b,c,d,e,g);if(C()){break _;}return;case 3:AFj(b,c,d,e,g);if(C()){break _;}return;case 4:$z=Xw(b,g,l,m);if(C()){break _;}f=$z;if(f===A4R)g=1;else{m=m+1|0;b:while(true){if(m<=k){continue _;}l=l+1|0;while(l>i){g=g+1|0;if(g>h)break b;l=d;}m=j;}g=0;}if(!g){$p=1;continue _;}g=7;$p=2;continue _;case 5:AJ0(b,c,d,e,g);if(C()){break _;}return;case 6:$z=X4(b,g,i,l);if(C()){break _;}n
=$z;J();if(n==A54.b)g=1;else{l=l+1|0;while(true){if(l<=j){continue _;}g=g+1|0;if(g>h)break;l=m;}g=0;}if(g)return;J();g=A3X.b;$p=5;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AFB(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(D(b.n,4))return;J();g=A3X.b;$p=1;case 1:AJ0(b,c,d,e,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function T0(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d+1|0;$p=1;case 1:$z=Xw(b,c,f,e);if(C()){break _;}g=$z;if(!g.c3())return;J();f=A3X.b;$p=2;case 2:AJ0(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function API(a,b,c){J();return A3X.dq(0,c);}
function ABf(){DM.call(this);this.ud=0;}
function AU5(a,b){var c=new ABf();ANC(c,a,b);return c;}
function ANC(a,b,c){Dw(a,b,A6b);a.ud=c;a.W=45;}
function X2(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AI8(a,b,c,d,e);if(C()){break _;}f=e-1|0;$p=2;case 2:$z=X4(b,c,d,f);if(C()){break _;}g=$z;f=e+1|0;$p=3;case 3:$z=X4(b,c,d,f);if(C()){break _;}f=$z;h=c-1|0;$p=4;case 4:$z=X4(b,h,d,e);if(C()){break _;}h=$z;i=c+1|0;$p=5;case 5:$z=X4(b,i,d,e);if(C()){break _;}i=$z;j=3;J();if(A5C.data[g]&&!A5C.data[f])j
=3;if(A5C.data[f]&&!A5C.data[g])j=2;if(A5C.data[h]&&!A5C.data[i])j=5;if(A5C.data[i]&&!A5C.data[h])j=4;$p=6;case 6:AFj(b,c,d,e,j);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AE6(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1){J();return A30.W;}if(!f){J();return A30.W;}$p=1;case 1:$z=b.ea(c,d,e);if(C()){break _;}g=$z;return f!=g?a.W:!a.ud?a.W-1|0:a.W+16|0;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function ZM(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.ud)return;$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.0+L(f)*6.0/16.0;j=e+0.5;k=L(f)*0.6000000238418579-0.30000001192092896;if(g==4){l=h-0.5199999809265137;m=i;n=j+k;BP(b,B(248),l,m,n,0.0,0.0,0.0);BP(b,B(249),
l,m,n,0.0,0.0,0.0);}else if(g==5){l=h+0.5199999809265137;m=i;n=j+k;BP(b,B(248),l,m,n,0.0,0.0,0.0);BP(b,B(249),l,m,n,0.0,0.0,0.0);}else if(g==2){l=h+k;m=i;n=j-0.5199999809265137;BP(b,B(248),l,m,n,0.0,0.0,0.0);BP(b,B(249),l,m,n,0.0,0.0,0.0);}else if(g==3){o=h+k;p=i;q=j+0.5199999809265137;BP(b,B(248),o,p,q,0.0,0.0,0.0);BP(b,B(249),o,p,q,0.0,0.0,0.0);}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AOl(a,b){if(b==1){J();b=A30.b;}else if(!b){J();b=A30.b;}else b=b!=3?a.W:a.W-1|0;return b;}
function AB3(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AH5(b,c,d,e);if(C()){break _;}b=$z;g=b;$p=2;case 2:AJu(f,g);if(C()){break _;}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AXt(a){return A0s();}
function RC(){var a=this;DM.call(a);a.zR=null;a.z6=0;}
function A6G(a,b,c){var d=new RC();ACA(d,a,b,c);return d;}
function ACA(a,b,c,d){Dw(a,b,A6c);a.W=4;a.zR=c;Bj(a,0.25,0.0,0.25,0.75,1.625,0.75);a.z6=d;}
function AQS(a){return (-1);}
function AV5(a){return 0;}
function AVZ(a){return 0;}
function AS3(a){var b,c,$$je;a:{try{b=Vc(a.zR);}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){b=$$je;break a;}else{throw $$e;}}return b;}c=new B5;SP(c,b);M(c);}
function ABX(a,b,c,d,e){return 1;}
function AXR(a,b,c){return a.z6;}
function VC(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=We(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=Z5(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:T9(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:AJ0(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function DE(){var a=this;E.call(a);a.bY=null;a.de=0;a.dc=0;a.dj=0;}
var A6H=null;var A6I=null;function A6J(){var a=new DE();AH3(a);return a;}
function AH3(a){return;}
function Ip(b,c){var d;if(!Dv(A6I,c)){BK(A6H,c,b);BK(A6I,b,c);return;}b=new Cq;d=new Bd;Bb(d);Bp(b,O(H(H(d,B(253)),c)));M(b);}
function AA1(a){return;}
function AGW(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bY;c=a.de;d=a.dc;e=a.dj;$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function XN(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bY;c=a.de;d=a.dc;e=a.dj;$p=1;case 1:ABF(b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AFN(a,b,c,d){var e,f,g;e=a.de+0.5-b;f=a.dc+0.5-c;g=a.dj+0.5-d;return e*e+f*f+g*g;}
function AAK(){A6H=CY();A6I=CY();Ip(K(SR),B(254));Ip(K(P1),B(255));Ip(K(HN),B(256));Ip(K(Lj),B(257));}
function HN(){var a=this;DE.call(a);a.fJ=null;a.pR=0;}
function A6K(){var a=new HN();ARL(a);return a;}
function ARL(a){var b,c;b=N(Cp,4);c=b.data;c[0]=B(3);c[1]=B(3);c[2]=B(3);c[3]=B(3);a.fJ=b;a.pR=(-1);}
function W(){var a=this;E.call(a);a.cx=0;a.en=0;a.eG=0;a.ro=0;}
var A6L=null;var A6g=null;var A6M=null;var A6N=null;var A6O=null;var A6P=null;var A6Q=null;var A6R=null;var A5f=null;var A6C=null;var A6D=null;var A6S=null;var A6T=null;var A6U=null;var A6V=null;var A6W=null;var A6X=null;var A6Y=null;var A6Z=null;var A60=null;var A61=null;var A62=null;var A63=null;var A64=null;var A65=null;var A66=null;var A67=null;var A68=null;var A69=null;var A6$=null;var A6_=null;var A7a=null;var A7b=null;var A5h=null;var A5e=null;var A5g=null;var A7c=null;var A7d=null;var A7e=null;var A7f
=null;var A7g=null;var A6E=null;var A6F=null;var A7h=null;var A7i=null;var A7j=null;var A7k=null;var A7l=null;var A7m=null;var A7n=null;var A7o=null;var A7p=null;var A7q=null;var A7r=null;var A7s=null;var A7t=null;var A7u=null;var A7v=null;var A7w=null;var A7x=null;var A7y=null;var A7z=null;var A7A=null;var A7B=null;var A6B=null;var A5i=null;var A7C=null;var A7D=null;var A7E=null;var A6f=null;var A7F=null;var A7G=null;var A7H=null;var A7I=null;var A7J=null;var A7K=null;function Bw(){Bw=Bt(W);AXc();}
function Ed(a){var b=new W();C$(b,a);return b;}
function C$(a,b){var c,d,e;Bw();a.en=64;a.eG=32;c=256+b|0;a.cx=c;if(A6g.data[c]!==null){d=Ds();e=new Bd;Bb(e);B$(d,O(Be(H(e,B(258)),b)));}A6g.data[c]=a;}
function Bk(a,b){a.ro=b;return a;}
function AVG(a,b){return a.ro;}
function ABE(a,b,c,d,e,f,g,h){return 0;}
function AZc(a,b,c){return 1.0;}
function AMr(a,b,c,d){return b;}
function ATC(a){return a.en;}
function AXh(a){return a.eG;}
function AO8(a,b,c){return;}
function AVh(a,b,c,d,e,f){return;}
function AZI(a,b){return 1;}
function AO1(a,b){return 0;}
function AUt(a,b,c){return;}
function AXc(){var b;A6L=A02();A6g=N(W,1024);A6M=Bk(JT(0,2),82);A6N=Bk(LV(1,2),98);A6O=Bk(Lr(2,2),114);A6P=Bk(A0U(3),5);A6Q=Bk(Md(4,4),10);A6R=Bk(A0g(5),21);A5f=Bk(Ed(6),37);A6C=Bk(Ed(7),7);A6D=Bk(Ed(8),55);A6S=Bk(Ed(9),23);A6T=Bk(Ed(10),39);A6U=Bk(Li(11,2),66);A6V=Bk(Li(12,0),64);A6W=Bk(JT(13,0),80);A6X=Bk(LV(14,0),96);A6Y=Bk(Lr(15,0),112);A6Z=Bk(Li(16,1),65);A60=Bk(JT(17,1),81);A61=Bk(LV(18,1),97);A62=Bk(Lr(19,1),113);A63=Bk(Li(20,3),67);A64=Bk(JT(21,3),83);A65=Bk(LV(22,3),99);A66=Bk(Lr(23,3),115);A67=Bk(Ed(24),
53);A68=Bk(Ed(25),71);A69=Bk(A1V(26,10),72);A6$=Bk(Li(27,0),68);A6_=Bk(JT(28,0),84);A7a=Bk(LV(29,0),100);A7b=Bk(Lr(30,0),116);A5h=Bk(Ed(31),8);A5e=Bk(Ed(32),24);A5g=Bk(Ed(33),40);A7c=Bk(Lg(34,0),128);A7d=Bk(Lg(35,1),129);A7e=Bk(Lg(36,2),130);A7f=Bk(Lg(37,3),131);A7g=Bk(Lg(38,4),132);b=new R3;J();ACO(b,39,A54.b);A6E=Bk(b,9);A6F=Bk(Ed(40),25);A7h=Bk(Md(41,5),41);A7i=Bk(CW(42,0,0,0),0);A7j=Bk(CW(43,0,0,1),16);A7k=Bk(CW(44,0,0,2),32);A7l=Bk(CW(45,0,0,3),48);A7m=Bk(CW(46,1,1,0),1);A7n=Bk(CW(47,1,1,1),17);A7o=Bk(CW(48,
1,1,2),33);A7p=Bk(CW(49,1,1,3),49);A7q=Bk(CW(50,2,2,0),2);A7r=Bk(CW(51,2,2,1),18);A7s=Bk(CW(52,2,2,2),34);A7t=Bk(CW(53,2,2,3),50);A7u=Bk(CW(54,3,3,0),3);A7v=Bk(CW(55,3,3,1),19);A7w=Bk(CW(56,3,3,2),35);A7x=Bk(CW(57,3,3,3),51);A7y=Bk(CW(58,1,4,0),4);A7z=Bk(CW(59,1,4,1),20);A7A=Bk(CW(60,1,4,2),36);A7B=Bk(CW(61,1,4,3),52);A6B=Bk(Ed(62),6);A5i=Bk(Md(63,3),87);A7C=Bk(Md(64,8),88);A7D=Bk(A0e(65),26);A7E=Bk(Md(66,42),11);A6f=Bk(A1E(67),42);A7F=Bk(AZX(68),43);A7G=Bk(AKn(69,0),74);A7H=Bk(AKn(70,A4Z.b),75);A7I=Bk(AKn(71,
A40.b),76);A7J=Bk(A1f(72),135);A7K=Bk(A16(73),104);}
function ADs(){P.call(this);}
function A0b(a){var b=new ADs();ATl(b,a);return b;}
function ATl(a,b){Dw(a,b,A6c);a.W=97;Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);}
function AY1(a,b,c){var d,e;if(b&&b!=1){d=MU(a,c);if((d&&d!=2?0:1)^(b>3?0:1))return a.W;b=((d/2|0)+(b&1^d)|0)+((c&4)/4|0)|0;e=a.W-((c&8)*2|0)|0;if(b&1)e= -e;return e;}return a.W;}
function ASo(a){return 0;}
function APW(a){return 0;}
function ANy(a){return 7;}
function ABD(a,b,c,d,e){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACL(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Jp(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function Vl(a,b,c,d,e){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACL(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Lb(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function ACL(a,b,c,d,e){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ea(c,d,e);if(C()){break _;}c=$z;AJt(a,MU(a,c));return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AJt(a,b){Bj(a,0.0,0.0,0.0,1.0,2.0,1.0);if(!b)Bj(a,0.0,0.0,0.0,1.0,1.0,0.1875);if(b==1)Bj(a,0.8125,0.0,0.0,1.0,1.0,1.0);if(b==2)Bj(a,0.0,0.0,0.8125,1.0,1.0,1.0);if(b==3)Bj(a,0.0,0.0,0.0,0.1875,1.0,1.0);}
function AEN(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Zj(a,b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Zj(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;if(!(g&8)){h=d+1|0;$p=2;continue _;}d=d-1|0;$p=3;continue _;case 2:$z=X4(b,c,h,e);if(C()){break _;}i=$z;if(i!=a.b){h=g^4;$p=4;continue _;}i=(g^4)+8|0;$p=5;continue _;case 3:$z=X4(b,c,d,e);if(C()){break _;}h=$z;if(h!=a.b)return 1;$p=6;continue _;case 4:AFj(b,c,d,e,h);if(C())
{break _;}HP(b,c,d-1|0,e,c,d,e);if(BI()>=0.5)D0(b,c+0.5,d+0.5,e+0.5,B(259),1.0,L(b.n)*0.10000000149011612+0.8999999761581421);else D0(b,c+0.5,d+0.5,e+0.5,B(260),1.0,L(b.n)*0.10000000149011612+0.8999999761581421);return 1;case 5:AFj(b,c,h,e,i);if(C()){break _;}h=g^4;$p=4;continue _;case 6:Zj(a,b,c,d,e,f);if(C()){break _;}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function X6(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;if(g&8){f=d-1|0;$p=3;continue _;}h=0;f=d+1|0;$p=2;case 2:$z=X4(b,c,f,e);if(C()){break _;}i=$z;if(i!=a.b){i=0;$p=4;continue _;}i=d-1|0;$p=6;continue _;case 3:$z=X4(b,c,f,e);if(C()){break _;}f=$z;if(f==a.b)return;f=0;$p=5;continue _;case 4:AJ0(b,c,d,e,i);if(C()){break _;}h=
1;i=d-1|0;$p=6;continue _;case 5:AJ0(b,c,d,e,f);if(C()){break _;}return;case 6:$z=We(b,c,i,e);if(C()){break _;}i=$z;if(!i){i=0;$p=7;continue _;}if(!h)return;$p=10;continue _;case 7:AJ0(b,c,d,e,i);if(C()){break _;}h=1;$p=8;case 8:$z=X4(b,c,f,e);if(C()){break _;}i=$z;if(i==a.b){i=0;$p=9;continue _;}if(!h)return;$p=10;continue _;case 9:AJ0(b,c,f,e,i);if(C()){break _;}if(!h)return;$p=10;case 10:T9(a,b,c,d,e,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AXQ(a,b,c){if(b&8)b=0;else{Bw();b=A7F.cx;}return b;}
function Tx(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACL(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=IC(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function MU(a,b){return b&4?b&3:(b-1|0)&3;}
function AES(a,b,c,d,e){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=127)return 0;d=d-1|0;$p=1;case 1:$z=We(b,c,d,e);if(C()){break _;}c=$z;return !c?0:1;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function Yw(){P.call(this);}
function A1H(a,b){var c=new Yw();AOg(c,a,b);return c;}
function AOg(a,b,c){CS(a,b,c,A6w);}
function YK(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bj(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bj(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bj(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bj(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Lb(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Zv(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bj(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bj(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bj(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bj(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Jp(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function APE(a){return 0;}
function AVU(a){return 0;}
function AYp(a){return 8;}
function AIp(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=We(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=We(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=We(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;e=e+1|0;$p=4;case 4:$z=We(b,c,d,e);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Uc(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;if(g&&f!=2){if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;continue _;}h=e+1|0;$p=2;case 2:$z=We(b,c,d,h);if(C()){break _;}h=$z;if(h)g=2;if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h
=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;case 3:$z=We(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;case 4:$z=We(b,h,d,e);if(C()){break _;}h=$z;if(h)g=4;if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;case 5:$z=We(b,f,d,e);if(C()){break _;}f=$z;if(f)g=5;$p=6;case 6:AFj(b,c,d,e,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AFy(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;h=0;if(g==2){f=e+1|0;$p=2;continue _;}if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 2:$z=We(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if
(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 3:$z=We(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 4:$z=We(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 5:$z=We(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(h)return;$p=6;case 6:T9(a,b,c,d,e,g);if(C()){break _;}f=0;$p=7;case 7:AJ0(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,
b,c,d,e,f,g,h,$p);}
function AVB(a,b){return 1;}
function AIs(){P.call(this);}
function A0I(a,b){var c=new AIs();AZr(c,a,b);return c;}
function AZr(a,b,c){CS(a,b,c,A6w);Bj(a,0.0,0.0,0.0,1.0,0.125,1.0);}
function X_(a,b,c,d,e){return null;}
function APo(a){return 0;}
function AGl(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AG1(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=IC(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AG1(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ea(c,d,e);if(C()){break _;}f=$z;if(f>=2&&f<=5)Bj(a,0.0,0.0,0.0,1.0,0.625,1.0);else Bj(a,0.0,0.0,0.0,1.0,0.125,1.0);return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ATF(a,b,c){return c<6?a.W:a.W-16|0;}
function AUo(a){return 0;}
function AR_(a){return 9;}
function ATM(a,b){return 1;}
function AIr(a,b,c,d,e){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=We(b,c,d,e);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AIb(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=15;$p=1;case 1:AFj(b,c,d,e,f);if(C()){break _;}g=new GS;$p=2;case 2:UE(g,a,b,c,d,e);if(C()){break _;}$p=3;case 3:UD(g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AEF(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z5(b,c,d,e);if(C()){break _;}g=$z;h=0;f=d-1|0;$p=2;case 2:$z=We(b,c,f,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==2){f=c+1|0;$p=3;continue _;}if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 3:$z=We(b,f,d,e);if(C()){break _;}f=$z;if
(!f)h=1;if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 4:$z=We(b,f,d,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 5:$z=We(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 6:$z=We(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(!h)return;$p=7;case 7:$z=Z5(b,c,d,e);if(C()){break _;}f
=$z;$p=8;case 8:T9(a,b,c,d,e,f);if(C()){break _;}f=0;$p=9;case 9:AJ0(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AMI(){W.call(this);this.mv=0;}
function AZ8(a){var b=new AMI();ATP(b,a);return b;}
function ATP(a,b){C$(a,b);b=b+256|0;a.mv=b;J();a.ro=A3U.data[b].bZ(2);}
function AKM(a,b,c,d,e,f,g,h){var i,j,k,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;if(!b.m)return 0;i=a.mv;j=0;$p=1;case 1:$z=AC$(d,i,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;J();k=A3U.data[a.mv];j=a.mv;$p=2;case 2:$z=AJ0(d,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;c=A3U.data[a.mv];$p
=3;case 3:c.s0(d,e,f,g,h);if(C()){break _;}D0(d,e+0.5,f+0.5,g+0.5,IH(k.fY),(k.fY.nl+1.0)/2.0,k.fY.n_*0.800000011920929);b.m=b.m-1|0;return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ACN(){KO.call(this);}
function ASY(){var a=new ACN();AS9(a);return a;}
function AS9(a){var b,c,d,e;b=N(Cp,0);c=b.data;O3(B(18));d=c.length;e=0;while(e<d){O3(c[e]);e=e+1|0;}a.t_=B(18);a.DS=b.nq();}
function AAN(a){var b;b=new Om;b.j8=B(261);b.ly=A7L;b.pP=A7L;b.DL=a;b.yJ=0.3333333432674408;b.Cd=0.5;return b;}
function ACb(a){var b,c,d,e,f;b=new M$;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.tf=A7L;b.sH=A7L;e=d.length;if(e&&e>=b.yD){b.Dq=a;b.sx=c.nq();b.CD=2.0;b.yD=4.0;return b;}f=new Cq;Bp(f,B(262));M(f);}
function KY(){var a=this;EA.call(a);a.dC=0;a.b4=null;a.jG=null;}
function AHe(b,c,d){return AVH(0,b.data.length,b,c,c+d|0,0,0);}
function V6(b){return AHe(b,0,b.data.length);}
function AE8(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BV;i=new Bd;Bb(i);Bp(h,O(Be(H(Be(H(i,B(263)),g),B(240)),f)));M(h);}if(Ci(a)<d){i=new Fx;R(i);M(i);}if(d<0){i=new BV;h=new Bd;Bb(h);Bp(i,O(H(Be(H(h,B(241)),d),B(242))));M(i);}g=a.be+a.dC|0;j=0;while(j<d){k=c+1|0;b=a.b4.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.be=a.be+d|0;return a;}}b=b.data;h=new BV;i=new Bd;Bb(i);Bp(h,O(H(Be(H(Be(H(i,B(243)),c),B(236)),b.length),B(21))));M(h);}
function SS(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.lr){e=new E5;R(e);M(e);}if(Ci(a)<d){e=new F8;R(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BV;i=new Bd;Bb(i);Bp(e,O(Be(H(Be(H(i,B(264)),h),B(240)),g)));M(e);}if(d<0){e=new BV;i=new Bd;Bb(i);Bp(e,O(H(Be(H(i,B(241)),d),B(242))));M(e);}h=a.be+a.dC|0;j=0;while(j<d){b=a.b4.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.be=a.be+d|0;return a;}}b=b.data;i=new BV;e=new Bd;Bb(e);Bp(i,O(H(Be(H(Be(H(e,B(243)),c),B(236)),b.length),B(21))));M(i);}
function Q2(a,b){return SS(a,b,0,b.data.length);}
function AYn(a,b){a.jG=b;return a;}
function ANF(a){D2(a);return a;}
function AVw(a,b){Lc(a,b);return a;}
function ASk(a,b){D$(a,b);return a;}
function K9(){Kf.call(this);}
function HU(a){var b,c;if(a.be<a.cb){b=a.be;a.be=b+1|0;return OL(a,b);}c=new Fx;R(c);M(c);}
function Cu(a,b){var c,d;if(AFf(a)){c=new E5;R(c);M(c);}if(a.be<a.cb){d=a.be;a.be=d+1|0;Zh(a,d,b);return a;}c=new F8;R(c);M(c);}
function AFf(a){return a.u3;}
function SI(){var a=this;K9.call(a);a.u3=0;a.vM=0;a.uY=null;}
function OL(a,b){return a.uY.data[b+a.vM|0];}
function Zh(a,b,c){a.uY.data[b+a.vM|0]=c;}
function AXO(a){return a.u3;}
function ALz(){var a=this;KY.call(a);a.Cp=0;a.lr=0;}
function AVH(a,b,c,d,e,f,g){var h=new ALz();ANd(h,a,b,c,d,e,f,g);return h;}
function ANd(a,b,c,d,e,f,g,h){Jb(a,c);a.jG=A5p;a.dC=b;a.b4=d;a.be=e;a.cb=f;a.Cp=g;a.lr=h;}
function AGu(a){var b,c,d,e;if(a.be>=a.cb){b=new Fx;R(b);M(b);}c=a.b4.data;d=a.dC;e=a.be;a.be=e+1|0;return c[d+e|0];}
function ASK(a){return a.lr;}
function Jc(a,b){var c,d,e,f,g,h;if(b>=0&&(b+3|0)<a.cb){c=a.b4.data[a.dC+b|0]&255;d=a.b4.data[(a.dC+b|0)+1|0]&255;e=a.b4.data[(a.dC+b|0)+2|0]&255;f=a.b4.data[(a.dC+b|0)+3|0]&255;if(a.jG!==A5p)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BV;h=new Bd;Bb(h);Bp(g,O(H(Be(H(Be(H(h,B(265)),b),B(236)),a.cb-3|0),B(21))));M(g);}
function WG(a,b,c){var d,e;if(a.lr){d=new E5;R(d);M(d);}if(b>=0&&(b+3|0)<a.cb){if(a.jG!==A5p){a.b4.data[a.dC+b|0]=c<<24>>24;a.b4.data[(a.dC+b|0)+1|0]=c>>8<<24>>24;a.b4.data[(a.dC+b|0)+2|0]=c>>16<<24>>24;a.b4.data[(a.dC+b|0)+3|0]=c>>24<<24>>24;}else{a.b4.data[a.dC+b|0]=c>>24<<24>>24;a.b4.data[(a.dC+b|0)+1|0]=c>>16<<24>>24;a.b4.data[(a.dC+b|0)+2|0]=c>>8<<24>>24;a.b4.data[(a.dC+b|0)+3|0]=c<<24>>24;}return a;}e=new BV;d=new Bd;Bb(d);Bp(e,O(H(Be(H(Be(H(d,B(265)),b),B(236)),a.cb-3|0),B(21))));M(e);}
function ACP(a){var b,c;b=Ci(a)/4|0;if(a.jG!==A5p){c=new ML;Mk(c,a.dC+a.be|0,b,a,0,b,a.lr);return c;}c=new RT;Mk(c,a.dC+a.be|0,b,a,0,b,a.lr);return c;}
function RB(){}
function J3(){EA.call(this);}
function ACs(b){var c,d;if(b>=0)return ARw(0,b,$rt_createCharArray(b),0,b,0);c=new Cq;d=new Bd;Bb(d);Bp(c,O(Be(H(d,B(266)),b)));M(c);}
function AHB(b,c,d){return ARw(0,b.data.length,b,c,c+d|0,0);}
function MA(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BV;i=new Bd;Bb(i);Bp(h,O(Be(H(Be(H(i,B(267)),g),B(240)),f)));M(h);}if(Ci(a)<d){h=new Fx;R(h);M(h);}if(d<0){h=new BV;i=new Bd;Bb(i);Bp(h,O(H(Be(H(i,B(241)),d),B(242))));M(h);}g=a.be;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=AJf(a,g);j=j+1|0;c=k;g=f;}a.be=a.be+d|0;return a;}}b=b.data;i=new BV;h=new Bd;Bb(h);Bp(i,O(H(Be(H(Be(H(h,B(243)),c),B(236)),b.length),B(21))));M(i);}
function Z$(a,b){return MA(a,b,0,b.data.length);}
function AMy(a,b,c,d){var e,f,g,h,i,j,k;if(Th(a)){e=new E5;R(e);M(e);}if(Ci(a)<d){e=new F8;R(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BV;i=new Bd;Bb(i);Bp(e,O(Be(H(Be(H(i,B(268)),h),B(240)),g)));M(e);}if(d<0){e=new BV;i=new Bd;Bb(i);Bp(e,O(H(Be(H(i,B(241)),d),B(242))));M(e);}h=a.be;j=0;while(j<d){k=h+1|0;g=c+1|0;RE(a,h,f[c]);j=j+1|0;h=k;c=g;}a.be=a.be+d|0;return a;}}b=b.data;i=new BV;e=new Bd;Bb(e);Bp(i,O(H(Be(H(Be(H(e,B(243)),c),B(236)),b.length),B(21))));M(i);}
function AD9(a,b,c,d){var e,f,g,h,i,j;if(Th(a)){b=new E5;R(b);M(b);}e=d-c|0;if(Ci(a)<e){b=new F8;R(b);M(b);}if(c>=0&&c<BE(b)){if(d>BE(b)){f=new BV;g=new Bd;Bb(g);Bp(f,O(Be(H(Be(H(g,B(268)),d),B(269)),BE(b))));M(f);}if(c>d){b=new BV;f=new Bd;Bb(f);Bp(b,O(Be(H(Be(H(f,B(270)),c),B(271)),d)));M(b);}h=a.be;while(c<d){i=h+1|0;j=c+1|0;RE(a,h,Cr(b,c));h=i;c=j;}a.be=a.be+e|0;return a;}g=new BV;f=new Bd;Bb(f);Bp(g,O(H(Be(H(Be(H(f,B(270)),c),B(236)),BE(b)),B(21))));M(g);}
function La(a,b){return AD9(a,b,0,BE(b));}
function AEs(a){return 1;}
function AJO(a){return a.kY;}
function AQJ(a){FA(a);return a;}
function AQo(a,b){D$(a,b);return a;}
function Nl(){B3.call(this);}
function A7M(){var a=new Nl();AX8(a);return a;}
function AX8(a){R(a);}
function L2(){BY.call(this);}
function A7N(){var a=new L2();ARG(a);return a;}
function ARG(a){return;}
function AU9(a){return 0;}
function AVF(a){return 0;}
function ANh(a){return 0;}
function J9(){BY.call(this);}
function A7O(){var a=new J9();ANg(a);return a;}
function ANg(a){return;}
function AZQ(a){return 1;}
function AQ9(a){return 0;}
function LN(){BY.call(this);}
function A7P(){var a=new LN();AW6(a);return a;}
function AW6(a){return;}
function AWC(a){return 0;}
function AYJ(a){return 0;}
function AOo(a){return 0;}
function Fi(){var a=this;W.call(a);a.sL=null;a.v2=0.0;a.xN=0;a.E$=0;}
function A7Q(a,b,c,d){var e=new Fi();Ko(e,a,b,c,d);return e;}
function Ko(a,b,c,d,e){C$(a,b);a.v2=4.0;a.E$=d;a.sL=e;a.en=1;a.eG=32<<d;if(d==3)a.eG=a.eG*2|0;a.v2=(d+1|0)*2|0;a.xN=c+d|0;}
function AX3(a,b,c){var d;d=0;while(d<a.sL.data.length){if(a.sL.data[d]===c)return a.v2;d=d+1|0;}return 1.0;}
function AWK(a,b,c){EW(b,2);}
function APk(a,b,c,d,e,f){EW(b,1);}
function APM(a,b){return a.xN;}
function Mu(){Fi.call(this);}
var A7R=null;function A1u(){A1u=Bt(Mu);AYc();}
function JT(a,b){var c=new Mu();AA5(c,a,b);return c;}
function AA5(a,b,c){A1u();Ko(a,b,1,c,A7R);}
function AYc(){var b,c;b=N(P,4);c=b.data;J();c[0]=A3W;c[1]=A3X;c[2]=A4f;c[3]=A4g;A7R=b;}
function RF(){Fi.call(this);this.mg=0;}
var A7S=null;function A1w(){A1w=Bt(RF);AS4();}
function LV(a,b){var c=new RF();AIl(c,a,b);return c;}
function AIl(a,b,c){A1w();Ko(a,b,2,c,A7S);a.mg=c;}
function AVu(a,b){J();return b===A4q?(a.mg!=3?0:1):b!==A52&&b!==A51?(b!==A4n&&b!==A4l?(b!==A4m&&b!==A4k?(b.bR===A6b?1:b.bR!==A6q?0:1):a.mg<1?0:1):a.mg<2?0:1):a.mg<2?0:1;}
function AS4(){var b,c;b=N(P,12);c=b.data;J();c[0]=A34;c[1]=A3Y;c[2]=A3Z;c[3]=A30;c[4]=A3_;c[5]=A4k;c[6]=A4m;c[7]=A4j;c[8]=A4n;c[9]=A4l;c[10]=A51;c[11]=A52;A7S=b;}
function Ss(){Fi.call(this);}
var A7T=null;function A1c(){A1c=Bt(Ss);ANM();}
function Lr(a,b){var c=new Ss();AIa(c,a,b);return c;}
function AIa(a,b,c){A1c();Ko(a,b,3,c,A7T);}
function ANM(){var b,c;b=N(P,4);c=b.data;J();c[0]=A36;c[1]=A4o;c[2]=A37;c[3]=A5Z;A7T=b;}
function AAj(){W.call(this);}
function A0U(a){var b=new AAj();AQF(b,a);return b;}
function AQF(a,b){C$(a,b);a.en=1;a.eG=64;}
function AEz(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;$p=1;case 1:$z=X4(d,e,f,g);if(C()){break _;}i=$z;if(i){EW(b,1);return 1;}j=e+0.5;k=f+0.5;l=g+0.5;Bw();D0(d,j,k,l,B(272),1.0,L(A6L)*0.4000000059604645+0.800000011920929);J();h=A5r.b;$p=
2;case 2:AJ0(d,e,f,g,h);if(C()){break _;}EW(b,1);return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function JX(){W.call(this);this.xb=0;}
function Md(a,b){var c=new JX();VG(c,a,b);return c;}
function VG(a,b,c){C$(a,b);a.xb=c;a.en=1;}
function No(a,b,c,d){b.m=b.m-1|0;Q5(d,a.xb);return b;}
function AJl(){W.call(this);}
function A0g(a){var b=new AJl();ATv(b,a);return b;}
function ATv(a,b){C$(a,b);a.en=1;}
function ABM(a,b,c,d){var e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.F;Bw();if(!ABZ(e,A5f.cx))return b;C2(c,d,B(217),1.0,1.0/(L(A6L)*0.4000000059604645+0.800000011920929));e=AM8(c,d);$p=1;case 1:AIM(c,e);if(C()){break _;}return b;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AFW(){W.call(this);this.xh=0;}
function Li(a,b){var c=new AFW();AZe(c,a,b);return c;}
function AZe(a,b,c){C$(a,b);a.en=1;a.eG=32<<c;a.xh=4+(c*2|0)|0;}
function AR$(a,b,c){return 1.5;}
function AXk(a,b,c){EW(b,1);}
function AQp(a,b,c,d,e,f){EW(b,2);}
function ATE(a,b){return a.xh;}
function AIH(){JX.call(this);}
function A1V(a,b){var c=new AIH();ATZ(c,a,b);return c;}
function ATZ(a,b,c){VG(a,b,c);}
function AJZ(a,b,c,d){No(a,b,c,d);b=new B6;Bw();Df(b,A68);return b;}
function AH6(){W.call(this);}
function Lg(a,b){var c=new AH6();ANx(c,a,b);return c;}
function ANx(a,b,c){C$(a,b);a.en=1;a.eG=32<<c;}
function AK_(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X4(d,e,f,g);if(C()){break _;}i=$z;h=f+1|0;$p=2;case 2:a:{$z=Xw(d,e,h,g);if(C()){break _;}j=$z;if(!j.c3()){J();if(i==A3W.b)break a;}J();if(i!=A3X.b)return 0;}J();k=A55;l=e;m=
l+0.5;n=f;o=n+0.5;p=g;D0(d,m,o,p+0.5,IH(k.fY),(k.fY.nl+1.0)/2.0,k.fY.n_*0.800000011920929);h=k.b;$p=3;case 3:AJ0(d,e,f,g,h);if(C()){break _;}EW(b,1);if(!D(d.n,8)&&i==A3W.b){q=1;r=0;m=n+1.2000000476837158;if(r<q){s=L(d.n)*0.699999988079071+0.15000000596046448;n=L(d.n)*0.699999988079071+0.15000000596046448;t=new Ep;o=l+s;u=p+n;c=new B6;Bw();Df(c,A6E);F9(t,d,o,m,u,c);t.go=10;$p=4;continue _;}}return 1;case 4:AIM(d,t);if(C()){break _;}r=r+1|0;if(r>=q)return 1;s=L(d.n)*0.699999988079071+0.15000000596046448;n=L(d.n)
*0.699999988079071+0.15000000596046448;t=new Ep;o=l+s;u=p+n;c=new B6;Bw();Df(c,A6E);F9(t,d,o,m,u,c);t.go=10;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function R3(){W.call(this);this.w3=0;}
function A7U(a,b){var c=new R3();ACO(c,a,b);return c;}
function ACO(a,b,c){C$(a,b);a.w3=c;}
function AAE(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;$p=1;case 1:$z=X4(d,e,f,g);if(C()){break _;}i=$z;J();if(i!=A55.b)return 0;f=f+1|0;h=a.w3;$p=2;case 2:AJ0(d,e,f,g,h);if(C()){break _;}b.m=b.m-1|0;return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function Fb(){var a=this;W.call(a);a.DU=0;a.xa=0;a.wu=0;a.yu=0;}
var A7V=null;var A7W=null;function CW(a,b,c,d){var e=new Fb();W0(e,a,b,c,d);return e;}
function W0(a,b,c,d,e){C$(a,b);a.DU=c;a.xa=e;a.yu=d;a.wu=A7V.data[e];a.eG=(A7W.data[e]*3|0)<<c;a.en=1;}
function ALW(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;A7V=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;A7W=b;}
function TL(){W.call(this);}
function A0e(a){var b=new TL();ARa(b,a);return b;}
function ARa(a,b){C$(a,b);a.eG=64;}
function XL(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)return 0;if(h==1)return 0;i=0;if(h==4)i=1;if(h==3)i=2;if(h==5)i=3;j=new Hh;EO(j,d);j.pL=0;j.dd=0;j.cF=0.0;Dx(j,0.5,0.5);j.l3=e;j.AZ=f;j.l9=g;c=Ck();k=A7X.nq().data;e=k.length;f=0;if(f<e){l=k[f];j.dl=l;Id(j,i);$p=1;continue _;}if(c.p>0)j.dl=Z(c,D(j.l,c.p));Id(j,i);$p=2;continue _;case 1:$z
=Vu(j);if(C()){break _;}g=$z;if(g)U(c,l);f=f+1|0;if(f<e){l=k[f];j.dl=l;Id(j,i);continue _;}if(c.p>0)j.dl=Z(c,D(j.l,c.p));Id(j,i);$p=2;case 2:$z=Vu(j);if(C()){break _;}e=$z;if(!e)return 1;$p=3;case 3:AIM(d,j);if(C()){break _;}b.m=b.m-1|0;return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ACy(){W.call(this);}
function A1E(a){var b=new ACy();AXa(b,a);return b;}
function AXa(a,b){C$(a,b);a.eG=64;a.en=1;}
function T6(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;J();i=A58;$p=1;case 1:$z=i.ff(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;h=A58.b;$p=2;case 2:AJ0(d,e,f,g,h);if(C()){break _;}h=I((c.q+180.0)*16.0/360.0-0.5)&15;$p=3;case 3:AFj(d,e,f,g,h);if(C()){break _;}b.m=b.m-1|0;$p=4;case 4:$z=AH5(d,e,f,g);if(C()){break _;}b=$z;b=b;$p=5;case 5:AD2(c,b);if
(C()){break _;}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AD7(){W.call(this);}
function AZX(a){var b=new AD7();AT5(b,a);return b;}
function AT5(a,b){C$(a,b);a.eG=64;a.en=1;}
function Zz(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;J();i=A59;$p=1;case 1:$z=i.ff(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;j=I((c.q+180.0)*4.0/360.0-0.5)&3;k=0;l=0;if(!j)l=1;if(j==1)k=(-1);if(j==2)l=(-1);if(j==3)k=1;m=e-k|0;n=g-l|0;$p=2;case 2:$z
=We(d,m,f,n);if(C()){break _;}h=$z;h=!h?0:1;o=f+1|0;$p=3;case 3:$z=We(d,m,o,n);if(C()){break _;}p=$z;p=h+(!p?0:1)|0;h=e+k|0;k=g+l|0;$p=4;case 4:$z=We(d,h,f,k);if(C()){break _;}l=$z;l=!l?0:1;$p=5;case 5:$z=We(d,h,o,k);if(C()){break _;}q=$z;q=l+(!q?0:1)|0;$p=6;case 6:$z=X4(d,m,f,n);if(C()){break _;}l=$z;if(l!=A59.b){$p=7;continue _;}n=1;$p=8;continue _;case 7:$z=X4(d,m,o,n);if(C()){break _;}m=$z;n=m==A59.b?1:0;$p=8;case 8:$z=X4(d,h,f,k);if(C()){break _;}l=$z;if(l!=A59.b){$p=9;continue _;}r=0;if(n&&!1)r=1;else if
(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=A59.b;$p=10;continue _;case 9:$z=X4(d,h,o,k);if(C()){break _;}h=$z;m=h==A59.b?1:0;r=0;if(n&&!m)r=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=A59.b;$p=10;case 10:AJ0(d,e,f,g,h);if(C()){break _;}$p=11;case 11:AFj(d,e,f,g,j);if(C()){break _;}f=A59.b;$p=12;case 12:AJ0(d,e,o,g,f);if(C()){break _;}f=j+8|0;$p=13;case 13:AFj(d,e,o,g,f);if(C()){break _;}b.m=b.m-1|0;return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ALY(){W.call(this);this.nS=0;}
function AKn(a,b){var c=new ALY();ARY(c,a,b);return c;}
function ARY(a,b,c){C$(a,b);a.en=1;a.eG=64;a.nS=c;}
function AC0(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.P+(d.E-d.P)*1.0;f=d.K+(d.q-d.K)*1.0;g=BR(d.bH+(d.c-d.bH)*1.0,d.ct+(d.i-d.ct)*1.0,d.bG+(d.d-d.bG)*1.0);h= -f*0.01745329238474369-3.1415927410125732;i=Bx(h);h=Bl(h);j= -e*0.01745329238474369;k= -Bx(j);l=C3(g,h*k*5.0,Bl(j)
*5.0,i*k*5.0);m=a.nS?0:1;$p=1;case 1:$z=AAl(c,g,l,m);if(C()){break _;}n=$z;if(n===null)return b;if(n.jZ)return b;m=n.hg;o=n.hh;p=n.hi;if(!a.nS){$p=2;continue _;}if(!n.gU)o=o+(-1)|0;if(n.gU==1)o=o+1|0;if(n.gU==2)p=p+(-1)|0;if(n.gU==3)p=p+1|0;if(n.gU==4)m=m+(-1)|0;if(n.gU==5)m=m+1|0;$p=8;continue _;case 2:$z=Xw(c,m,o,p);if(C()){break _;}g=$z;if(g!==A4R){$p=3;continue _;}$p=4;continue _;case 3:$z=Xw(c,m,o,p);if(C()){break _;}d=$z;if(d!==A4S)return b;$p=5;continue _;case 4:$z=Z5(c,m,o,p);if(C()){break _;}q=$z;if
(q){$p=3;continue _;}q=0;$p=6;continue _;case 5:$z=Z5(c,m,o,p);if(C()){break _;}q=$z;if(q)return b;q=0;$p=7;continue _;case 6:AJ0(c,m,o,p,q);if(C()){break _;}b=new B6;Bw();Df(b,A7H);return b;case 7:AJ0(c,m,o,p,q);if(C()){break _;}b=new B6;Bw();Df(b,A7I);return b;case 8:$z=X4(c,m,o,p);if(C()){break _;}q=$z;if(q){$p=10;continue _;}q=a.nS;r=0;$p=9;case 9:ADQ(c,m,o,p,q,r);if(C()){break _;}b=new B6;Bw();Df(b,A7G);return b;case 10:$z=Xw(c,m,o,p);if(C()){break _;}d=$z;if(d.c3())return b;q=a.nS;r=0;$p=9;continue _;default:
Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AJB(){W.call(this);}
function A1f(a){var b=new AJB();APN(b,a);return b;}
function APN(a,b){C$(a,b);a.en=1;}
function YB(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X4(d,e,f,g);if(C()){break _;}i=$z;J();if(i!=A5$.b)return 0;c=new Fn;j=e+0.5;k=f+0.5;l=g+0.5;EO(c,d);c.yk=N(B6,36);c.hR=0;c.jw=0;c.ni=1;c.jH=0;c.lg=1;Dx(c,0.9800000190734863,0.699999988079071);c.cF=c.ef/2.0;c.h7=0;CC(c,j,k+c.cF,l);c.f=0.0;c.h=0.0;c.g=0.0;c.bH=j;c.ct=k;c.bG=
l;$p=2;case 2:AIM(d,c);if(C()){break _;}b.m=b.m-1|0;return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ALs(){W.call(this);}
function A16(a){var b=new ALs();APp(b,a);return b;}
function APp(a,b){C$(a,b);a.en=1;a.eG=64;}
function ABK(a,b,c){var d;if(c instanceof He){d=c;if(!d.oR){d.oR=1;b.m=b.m-1|0;}}}
function APg(a,b,c){ABK(a,b,c);}
function LH(){}
function ABv(){var a=this;E.call(a);a.dx=Long_ZERO;a.ej=Long_ZERO;}
function AYA(){var a=new ABv();ARX(a);return a;}
function ARX(a){a.dx=Long_fromInt(1);a.ej=Long_ZERO;}
function AMZ(a,b){a.dx=Long_and(b,Long_fromInt(65535));a.ej=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function ARn(a){a.dx=Long_fromInt(1);a.ej=Long_ZERO;}
function ANJ(a){return Long_or(Long_shl(a.ej,16),a.dx);}
function AXz(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.dx=Long_add(a.dx,Long_fromInt(b[c]&255));a.ej=Long_add(a.ej,a.dx);a.dx=Long_rem(a.dx,Long_fromInt(65521));a.ej=Long_rem(a.ej,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.dx;d=c+1|0;a.dx=Long_add(j,Long_fromInt(i[c]&255));a.ej=Long_add(a.ej,a.dx);h=e;c=d;}a.dx=Long_rem(a.dx,Long_fromInt(65521));a.ej=Long_rem(a.ej,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.dx;e=c+1|0;a.dx=Long_add(j,Long_fromInt(i[c]&255));a.ej=Long_add(a.ej,a.dx);f=d;c=e;}a.dx=Long_rem(a.dx,Long_fromInt(65521));a.ej=Long_rem(a.ej,Long_fromInt(65521));}
function Pg(){Bz.call(this);}
function A7Y(){var a=new Pg();AWp(a);return a;}
function AWp(a){R(a);}
function Ld(){E.call(this);this.CG=null;}
var A5p=null;var A7Z=null;function AOM(a){var b=new Ld();AC6(b,a);return b;}
function AC6(a,b){a.CG=b;}
function AMv(){A5p=AOM(B(273));A7Z=AOM(B(274));}
function Is(){}
function JU(){var a=this;E.call(a);a.fx=null;a.et=null;}
function AVb(a,b){var c,d;if(a===b)return 1;if(!Pp(b,Is))return 0;a:{b:{c:{c=b;if(a.fx===null){if(c.fx!==null)break c;}else if(!a.fx.dQ(c.fx))break c;if(a.et===null){if(c.et!==null)break c;break b;}if(a.et.dQ(c.et))break b;}d=0;break a;}d=1;}return d;}
function APD(a){return a.fx;}
function ATn(a){return a.et;}
function AS_(a){return (a.fx===null?0:a.fx.eK())^(a.et===null?0:a.et.eK());}
function Hg(){var a=this;JU.call(a);a.og=0;a.d7=null;}
function BV(){B5.call(this);}
function A70(){var a=new BV();AN4(a);return a;}
function AN4(a){R(a);}
function L_(){BV.call(this);}
function A71(){var a=new L_();ASs(a);return a;}
function ASs(a){R(a);}
function FI(){}
function Sv(){E.call(this);this.w8=null;}
function ADV(a){var b,c,d,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.w8;try{A4t=A4t+1|0;EJ(b);$p=1;continue _;}catch($$e){$$je=Bh($$e);c=$$je;}d=b.lt;$p=2;continue _;case 1:a:{try{b.jn();if(C()){break _;}}catch($$e){$$je=Bh($$e);c=$$je;break a;}c=b.lt;$p=3;continue _;}d=b.lt;$p=2;case 2:Zs(d);if(C()){break _;}a:{try{S_(b.lt);Lz(d);break a;}catch($$e){$$je=Bh($$e);b=$$je;}Lz(d);M(b);}b.ug=0;A4t=A4t-1|0;EJ(A4r);M(c);case 3:Zs(c);if(C())
{break _;}a:{try{S_(b.lt);Lz(c);break a;}catch($$e){$$je=Bh($$e);b=$$je;}Lz(c);M(b);}b.ug=0;A4t=A4t-1|0;EJ(A4r);return;default:Eq();}}CL().s(a,b,c,d,$p);}
function ES(){B3.call(this);}
function A72(){var a=new ES();APK(a);return a;}
function APK(a){R(a);}
function Ea(){var a=this;E.call(a);a.g1=null;a.tg=0.0;a.th=0.0;}
function F2(a,b,c,d,e){var f=new Ea();AMP(f,a,b,c,d,e);return f;}
function AMP(a,b,c,d,e,f){a.g1=St(b,c,d);a.tg=e;a.th=f;}
function HG(a,b,c){var d;d=new Ea;d.g1=a.g1;d.tg=b;d.th=c;return d;}
function EL(){var a=this;E.call(a);a.gL=null;a.Bh=0;}
function A73(a,b,c,d,e){var f=new EL();Gb(f,a,b,c,d,e);return f;}
function Gb(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.Bh=0;a.gL=b;a.Bh=g.length;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=HG(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=HG(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=HG(h,k,l);g[3]=HG(g[3],i,l);}
function Yp(a){var b,c,d;b=N(Ea,a.gL.data.length);c=b.data;d=0;while(d<a.gL.data.length){c[d]=a.gL.data[(a.gL.data.length-d|0)-1|0];d=d+1|0;}a.gL=b;}
function AJ7(a,b,c){var d,e,f,g;d=Nq(a.gL.data[1].g1,a.gL.data[0].g1);e=Cs(Xo(Nq(a.gL.data[1].g1,a.gL.data[2].g1),d));Bu(b);B_(e.t,e.v,e.s);f=0;while(f<4){g=a.gL.data[f];F(b,g.g1.t*c,g.g1.v*c,g.g1.s*c,g.tg,g.th);f=f+1|0;}Bm(b);}
function JS(){var a=this;E.call(a);a.bF=0;a.m3=0;a.p7=Long_ZERO;a.bp=Long_ZERO;a.na=0;a.du=0;a.vo=0;a.hA=null;a.B=null;a.ec=0;a.hG=0;a.vd=null;a.ck=null;a.fi=null;}
var A74=null;function AA0(a){var b;if(a.B===null)return (-2);b=a.B;a.B.l5=Long_ZERO;b.D=Long_ZERO;a.B.bQ=null;a.bF=14;a.hG=(-1);H6(a.hA);return 0;}
function AA6(a){if(a.hA!==null)PO(a.hA);return 0;}
function Tt(a,b){var c,d,e,f;a.B.bQ=null;a.hA=null;a.du=0;if(b<0)b= -b;else if(b&1073741824){a.du=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.du=4;b=b&15;}else{a.du=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.hA!==null&&a.vo!=b){PO(a.hA);a.hA=null;}a.vo=b;c=new I4;d=a.B;b=1<<b;c.qs=$rt_createIntArray(1);c.m_=$rt_createIntArray(1);c.lD=$rt_createIntArray(1);c.lA=$rt_createIntArray(1);c.tv=N($rt_arraycls($rt_intcls()),1);c.tw=N($rt_arraycls($rt_intcls()),1);c.sY=$rt_createIntArray(1);c.s5=$rt_createIntArray(1);c.uI
=A0p();c.u=d;e=new JL;f=c.u;e.jU=0;e.Y=f;e.z=c;c.n8=e;c.jh=$rt_createIntArray(4320);c.cB=$rt_createByteArray(b);c.cr=b;c.pz=d.iy.du?1:0;c.df=0;H6(c);a.hA=c;AA0(a);return 0;}AA6(a);return (-2);}
function ABO(a,b){var c,d,e,f,g,h,i,$$je;if(a.B!==null&&a.B.bW!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bF){case 6:a.bF=13;a.B.bQ=B(275);a.na=0;return (-2);case 7:d=Vb(a.hA,d);if(d==(-3)){a.bF=13;a.na=0;continue i;}if(!d)d=c;if(d!=1)break i;a.p7=a.B.fr.vZ();H6(a.hA);if(!a.du){a.bF=12;d=c;continue i;}a.bF=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=Fe(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof Du)
{e=$$je;return e.gS;}else{throw $$e;}}a.ec=a.bp.lo&65535;if((a.ec&255)!=8){a.B.bQ=B(276);a.bF=13;continue i;}if(a.ec&57344){a.B.bQ=B(277);a.bF=13;continue i;}if(a.ec&512)G4(a,2,a.bp);a.bF=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.B.J)return d;e=a.B;e.J=e.J
-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bF=9;d=c;}if(!a.B.J)return d;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bF=10;d=c;}if(!a.B.J)return d;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bF=11;d=c;}if(!a.B.J)return d;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.ec)a.bp=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bp,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bp,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bp,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bp,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.p7.lo!=
a.bp.lo)a.B.bQ=B(278);else if(a.ec&&a.ck!==null)a.ck.Dr=a.bp;a.bF=15;d=c;}if(!(a.du&&a.ec)){if(a.B.bQ===null)break f;if(!DT(a.B.bQ,B(278)))break f;a.bF=13;a.na=5;continue i;}try{d=Fe(a,4,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof Du){e=$$je;return e.gS;}else{throw $$e;}}if(a.B.bQ!==null&&DT(a.B.bQ,B(278))){a.bF=13;a.na=5;continue i;}if(Long_eq(a.bp,Long_and(a.B.l5,new Long(4294967295, 0)))){a.B.bQ=null;break f;}a.B.bQ=B(279);a.bF=13;continue i;}if(!a.du){a.bF=7;continue i;}try{d=Fe(a,2,d,c);}catch($$e)
{$$je=Bh($$e);if($$je instanceof Du){e=$$je;return e.gS;}else{throw $$e;}}if(!(a.du!=4&&!(a.du&2))&&Long_eq(a.bp,Long_fromInt(35615))){if(a.du==4)a.du=2;a.B.fr=APe();G4(a,2,a.bp);if(a.ck===null)a.ck=A1K();a.bF=23;continue i;}if(a.du&2){a.bF=13;a.B.bQ=B(280);continue i;}a.ec=0;a.m3=a.bp.lo&255;h=Long_shr(a.bp,8).lo&255;if(!(a.du&1&&!(((a.m3<<8)+h|0)%31|0))&&(a.m3&15)!=8){if(a.du!=4){a.bF=13;a.B.bQ=B(280);continue i;}e=a.B;e.x=e.x-2|0;e=a.B;e.J=e.J+2|0;e=a.B;e.D=Long_sub(e.D,Long_fromInt(2));a.du=0;a.bF=7;continue i;}if
((a.m3&15)!=8){a.bF=13;a.B.bQ=B(276);continue i;}if(a.du==4)a.du=1;if(((a.m3>>4)+8|0)>a.vo){a.bF=13;a.B.bQ=B(281);continue i;}a.B.fr=AYA();if(h&32){a.bF=2;break d;}a.bF=7;continue i;}break m;}try{d=Fe(a,4,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof Du){e=$$je;return e.gS;}else{throw $$e;}}if(a.ck!==null)a.ck.DH=a.bp;if(a.ec&512)G4(a,4,a.bp);a.bF=17;}try{d=Fe(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof Du){e=$$je;return e.gS;}else{throw $$e;}}if(a.ck!==null){a.ck.EM=a.bp.lo&255;a.ck.x9=a.bp.lo>>
8&255;}if(a.ec&512)G4(a,2,a.bp);a.bF=18;}if(a.ec&1024){try{d=Fe(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof Du){e=$$je;return e.gS;}else{throw $$e;}}if(a.ck!==null)a.ck.nT=$rt_createByteArray(a.bp.lo&65535);if(a.ec&512)G4(a,2,a.bp);}else if(a.ck!==null)a.ck.nT=null;a.bF=19;}if(a.ec&1024)x:{try{d=AIk(a,d,c);if(a.ck===null)break x;f=GX(a.fi);i=f.data;a.fi=null;b=i.length;if(b!=a.ck.nT.data.length){a.B.bQ=B(282);a.bF=13;continue i;}Di(f,0,a.ck.nT,0,b);break x;}catch($$e){$$je=Bh($$e);if($$je instanceof Du)
{e=$$je;return e.gS;}else{throw $$e;}}}else if(a.ck!==null)a.ck.nT=null;a.bF=20;}y:{if(a.ec&2048){z:{try{d=M4(a,d,c);if(a.ck===null)break z;a.ck.wb=GX(a.fi);break z;}catch($$e){$$je=Bh($$e);if($$je instanceof Du){e=$$je;break h;}else{throw $$e;}}}try{a.fi=null;break y;}catch($$e){$$je=Bh($$e);if($$je instanceof Du){e=$$je;break h;}else{throw $$e;}}}else if(a.ck!==null)a.ck.wb=null;}a.bF=21;}ba:{if(a.ec&4096){bb:{try{d=M4(a,d,c);if(a.ck===null)break bb;a.ck.xG=GX(a.fi);break bb;}catch($$e){$$je=Bh($$e);if($$je instanceof Du)
{e=$$je;break g;}else{throw $$e;}}}try{a.fi=null;break ba;}catch($$e){$$je=Bh($$e);if($$je instanceof Du){e=$$je;break g;}else{throw $$e;}}}else if(a.ck!==null)a.ck.xG=null;}a.bF=22;}if(a.ec&512){try{d=Fe(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof Du){e=$$je;return e.gS;}else{throw $$e;}}if(a.ck!==null)a.ck.Fm=Long_and(a.bp,Long_fromInt(65535)).lo;if(Long_ne(a.bp,Long_and(a.B.fr.vZ(),Long_fromInt(65535)))){a.bF=13;a.B.bQ=B(283);a.na=5;continue;}}a.B.fr=APe();a.bF=7;}return d;}return e.gS;}return e.gS;}a.bF
=12;}return 1;}if(!a.B.J)return d;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));f=a.B.bW.data;e=a.B;d=e.x;e.x=d+1|0;a.bp=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bF=3;d=c;}if(!a.B.J)return d;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;d=e.x;e.x=d+1|0;a.bp=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bF=4;d=c;}if(!a.B.J)return d;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e
=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bF=5;}if(!a.B.J)return c;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.B.fr.Bi(a.bp);a.bF=6;return 2;}if(b==4&&a.bF==14)return 0;return (-2);}
function Fe(a,b,c,d){var e,f,g,h;if(a.hG==(-1)){a.hG=b;a.bp=Long_ZERO;}while(true){if(a.hG<=0){if(b==2)a.bp=Long_and(a.bp,Long_fromInt(65535));else if(b==4)a.bp=Long_and(a.bp,new Long(4294967295, 0));a.hG=(-1);return c;}if(!a.B.J)break;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));f=a.bp;g=a.B.bW.data;e=a.B;h=e.x;e.x=h+1|0;a.bp=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.hG|0)*8|0)));a.hG=a.hG-1|0;c=d;}M(ACg(a,c));}
function M4(a,b,c){var d,e;if(a.fi===null)a.fi=AW8();while(true){if(!a.B.J)M(ACg(a,b));d=a.B;d.J=d.J-1|0;d=a.B;d.D=Long_add(d.D,Long_fromInt(1));e=a.B.bW.data[a.B.x];if(e)Oy(a.fi,a.B.bW,a.B.x,1);a.B.fr.jE(a.B.bW,a.B.x,1);d=a.B;d.x=d.x+1|0;if(!e)break;b=c;}return c;}
function AIk(a,b,c){var d;if(a.fi===null)a.fi=AW8();while(Long_gt(a.bp,Long_ZERO)){if(!a.B.J)M(ACg(a,b));d=a.B;d.J=d.J-1|0;d=a.B;d.D=Long_add(d.D,Long_fromInt(1));Oy(a.fi,a.B.bW,a.B.x,1);a.B.fr.jE(a.B.bW,a.B.x,1);d=a.B;d.x=d.x+1|0;a.bp=Long_sub(a.bp,Long_fromInt(1));b=c;}return b;}
function G4(a,b,c){var d;d=0;while(d<b){a.vd.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.B.fr.jE(a.vd,0,b);}
function AI_(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);A74=b;}
function M8(){Ej.call(this);}
function A75(){var a=new M8();AWu(a);return a;}
function AWu(a){return;}
function AV3(a,b){$rt_putStderr(b);}
function IK(){var a=this;E.call(a);a.t=0.0;a.v=0.0;a.s=0.0;}
var A76=null;var A3S=0;function St(b,c,d){var e;e=new IK;if(b===-0.0)b=0.0;if(c===-0.0)c=0.0;if(d===-0.0)d=0.0;e.t=b;e.v=c;e.s=d;return e;}
function BR(b,c,d){var e,f;if(A3S>=A76.p)U(A76,St(0.0,0.0,0.0));e=A76;f=A3S;A3S=f+1|0;e=Z(e,f);e.t=b;e.v=c;e.s=d;return e;}
function Nq(a,b){return BR(b.t-a.t,b.v-a.v,b.s-a.s);}
function Cs(a){var b;b=B7(a.t*a.t+a.v*a.v+a.s*a.s);return b<1.0E-4?BR(0.0,0.0,0.0):BR(a.t/b,a.v/b,a.s/b);}
function Xo(a,b){return BR(a.v*b.s-a.s*b.v,a.s*b.t-a.t*b.s,a.t*b.v-a.v*b.t);}
function C3(a,b,c,d){return BR(a.t+b,a.v+c,a.s+d);}
function Dh(a,b){var c,d,e;c=b.t-a.t;d=b.v-a.v;e=b.s-a.s;return B7(c*c+d*d+e*e);}
function D1(a,b){var c,d,e;c=b.t-a.t;d=b.v-a.v;e=b.s-a.s;return c*c+d*d+e*e;}
function Xs(a,b,c,d){var e,f,g;e=b-a.t;f=c-a.v;g=d-a.s;return e*e+f*f+g*g;}
function GE(a){return B7(a.t*a.t+a.v*a.v+a.s*a.s);}
function I_(a,b,c){var d,e,f,g;d=b.t-a.t;e=b.v-a.v;f=b.s-a.s;if(d*d<1.0000000116860974E-7)return null;g=(c-a.t)/d;return g>=0.0&&g<=1.0?BR(a.t+d*g,a.v+e*g,a.s+f*g):null;}
function Ik(a,b,c){var d,e,f,g;d=b.t-a.t;e=b.v-a.v;f=b.s-a.s;if(e*e<1.0000000116860974E-7)return null;g=(c-a.v)/e;return g>=0.0&&g<=1.0?BR(a.t+d*g,a.v+e*g,a.s+f*g):null;}
function IY(a,b,c){var d,e,f,g;d=b.t-a.t;e=b.v-a.v;f=b.s-a.s;if(f*f<1.0000000116860974E-7)return null;g=(c-a.s)/f;return g>=0.0&&g<=1.0?BR(a.t+d*g,a.v+e*g,a.s+f*g):null;}
function AKB(){A76=Ck();A3S=0;}
function AG2(){E.call(this);}
function A77(){var a=new AG2();ANp(a);return a;}
function ANp(a){return;}
function Fw(b){return Math.sin(b);}
function FG(b){return Math.cos(b);}
function G$(b){return Math.atan(b);}
function AUB(b){return Math.log(b);}
function DK(b){return Math.sqrt(b);}
function QO(b){return Math.ceil(b);}
function ATQ(b,c){return Math.pow(b,c);}
function CB(b,c){return Math.atan2(b,c);}
function BI(){return ATw();}
function ATw(){return Math.random();}
function CR(b,c){if(b<c)c=b;return c;}
function DU(b,c){if(b>c)c=b;return c;}
function GW(b){if(b<=0)b= -b;return b;}
function GK(b){if(b<=0.0)b= -b;return b;}
function HL(){E.call(this);this.CW=null;}
var A78=null;var A4$=null;var A7L=null;function AB0(a){var b=new HL();AJ$(b,a);return b;}
function AJ$(a,b){a.CW=b;}
function YA(){A78=AB0(B(284));A4$=AB0(B(285));A7L=AB0(B(286));}
function JE(){J3.call(this);}
function Th(a){return a.vX;}
function Xj(){var a=this;JE.call(a);a.vX=0;a.vE=0;a.kY=null;}
function ARw(a,b,c,d,e,f){var g=new Xj();ATI(g,a,b,c,d,e,f);return g;}
function ATI(a,b,c,d,e,f,g){Jb(a,c);a.be=e;a.cb=f;a.vE=b;a.vX=g;a.kY=d;}
function AJf(a,b){return a.kY.data[b+a.vE|0];}
function RE(a,b,c){a.kY.data[b+a.vE|0]=c;}
function AQ2(a){return 1;}
function APc(a){return a.kY;}
function ATd(a){return a.vX;}
function JZ(){var a=this;E.call(a);a.Dq=null;a.sx=null;a.CD=0.0;a.yD=0.0;a.tf=null;a.sH=null;a.lG=0;}
function Yl(a,b){var c;if(b!==null){a.tf=b;return a;}c=new Cq;Bp(c,B(287));M(c);}
function ATh(a,b){return;}
function AB5(a,b){var c;if(b!==null){a.sH=b;return a;}c=new Cq;Bp(c,B(287));M(c);}
function AWn(a,b){return;}
function AD8(a,b,c,d){var e,f,g,h,$$je;a:{if(a.lG!=3){if(d)break a;if(a.lG!=2)break a;}b=new DJ;R(b);M(b);}a.lG=!d?1:2;while(true){try{e=UP(a,b,c);}catch($$e){$$je=Bh($$e);if($$je instanceof B5){f=$$je;M(AVc(f));}else{throw $$e;}}if(H2(e)){if(!d)return e;g=Ci(b);if(g<=0)return e;e=Ez(g);}else if(Hr(e))break;h=!Kx(e)?a.tf:a.sH;b:{if(h!==A4$){if(h===A78)break b;else return e;}if(Ci(c)<a.sx.data.length)return A79;Q2(c,a.sx);}D$(b,b.be+JI(e)|0);}return e;}
function TQ(a,b){var c;if(a.lG!=2&&a.lG!=4){b=new DJ;R(b);M(b);}c=A7$;if(c===A7$)a.lG=3;return c;}
function AW2(a,b){return A7$;}
function LQ(){var a=this;E.call(a);a.l7=0;a.o0=0;}
var A7$=null;var A79=null;function U6(a,b){var c=new LQ();AE$(c,a,b);return c;}
function AE$(a,b,c){a.l7=b;a.o0=c;}
function H2(a){return a.l7?0:1;}
function Hr(a){return a.l7!=1?0:1;}
function Ll(a){return !Nt(a)&&!Kx(a)?0:1;}
function Nt(a){return a.l7!=2?0:1;}
function Kx(a){return a.l7!=3?0:1;}
function JI(a){var b;if(Ll(a))return a.o0;b=new HS;R(b);M(b);}
function Ez(b){return U6(2,b);}
function O$(a){var b,c;switch(a.l7){case 0:b=new Nk;R(b);M(b);case 1:b=new PD;R(b);M(b);case 2:b=new O1;c=a.o0;R(b);b.yn=c;M(b);case 3:b=new Ng;c=a.o0;R(b);b.A9=c;M(b);default:}}
function AFC(){A7$=U6(0,0);A79=U6(1,0);}
function VP(){E.call(this);}
function AYE(){return {};}
function M9(){}
function Ur(){E.call(this);}
function I4(){var a=this;E.call(a);a.df=0;a.n$=0;a.ot=0;a.fn=0;a.eZ=null;a.qs=null;a.m_=null;a.lD=null;a.lA=null;a.tv=null;a.tw=null;a.sY=null;a.s5=null;a.n8=null;a.rB=0;a.bA=0;a.bz=0;a.jh=null;a.cB=null;a.cr=0;a.bK=0;a.bf=0;a.pz=0;a.uI=null;a.u=null;}
var A7_=null;var A8a=null;function H6(a){a.df=0;a.bA=0;a.bz=0;a.bf=0;a.bK=0;if(a.pz)a.u.fr.mt();}
function Vb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.u.x;d=a.u.J;e=a.bz;f=a.bA;g=a.bf;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.df){case 2:break f;case 9:a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.ot=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.eZ!==null&&a.eZ.data.length>=k))a.eZ=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.eZ.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.fn=0;a.df=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,(-2));}while(f<32){if(!d){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,
Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.df=9;a.u.bQ=B(288);a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,(-3));}a.n$=l;f=0;a.df=a.n$?2:!a.rB?0:7;e=f;continue e;}while(f<3){if(!d){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.rB=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.df=1;break l;case 1:ZJ(a.lD,a.lA,a.tv,a.tw,a.u);SZ(a.n8,a.lD.data[0],a.lA.data[0],a.tv.data[0],0,a.tw.data[0],0);e=e>>>3;f=f+(-3)|0;a.df=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.df=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.df=9;a.u.bQ=B(289);a.bz=b;a.bA=k;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,(-3));default:}}continue e;}while(a.fn<(4+(a.ot>>>10)|0)){while(f<3){if(!d){a.bz=e;a.bA
=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.eZ.data;j=A8a.data;k=a.fn;a.fn=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.fn<19){o=a.eZ.data;j=A8a.data;k=a.fn;a.fn=k+1|0;o[j[k]]=0;}a.qs.data[0]=7;k=AKo(a.uI,a.eZ,a.qs,a.m_,a.jh,a.u);if(k){if(k==(-3)){a.eZ=null;a.df=9;}a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,k);}a.fn=0;a.df=5;}while(true)
{k=a.ot;if(a.fn>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.qs.data[0];while(f<k){if(!d){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.jh.data[((a.m_.data[0]+(e&A7_.data[k])|0)*3|0)+1|0];n=a.jh.data[((a.m_.data[0]+(e&A7_.data[k])|0)*3|0)+2|0];l=S(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.eZ.data;k=a.fn;a.fn=k+1|0;j[k]=n;}else{p=S(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bz=e;a.bA=
f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&A7_.data[q])|0;e=n>>>q;f=k-q|0;h=a.fn;q=a.ot;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.eZ.data[h-1|0];while(true){j=a.eZ.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.fn=l;}}a.m_.data[0]=(-1);a.lD.data[0]=9;a.lA.data[0]=6;k=a.ot;k=Uu(a.uI,257+(k&31)|0,1+(k>>5&31)|0,a.eZ,a.lD,a.lA,a.sY,a.s5,a.jh,
a.u);if(k){if(k==(-3)){a.eZ=null;a.df=9;}a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,k);}SZ(a.n8,a.lD.data[0],a.lA.data[0],a.jh,a.sY.data[0],a.jh,a.s5.data[0]);a.df=6;}a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;b=W_(a.n8,b);if(b!=1)break e;b=0;Wo(a.n8,a.u);c=a.u.x;d=a.u.J;e=a.bz;f=a.bA;g=a.bf;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;if(a.rB){a.df=7;break b;}a.df=0;continue e;}if(!d){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,
Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,b);}if(!h){if(g==a.cr&&a.bK){g=0;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;}if(!h){a.bf=g;b=BW(a,b);g=a.bf;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;if(g==a.cr&&a.bK){g=0;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;}if(!h){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,b);}}}b=0;k=a.n$;if(k>d)k=d;if(k>h)k=h;Di(a.u.bW,c,a.cB,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.n$-k|0;a.n$=k;if(k)continue;a.df=!a.rB?0:7;}return BW(a,b);}a.df=9;a.u.bQ
=B(290);a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,(-3));}a.eZ=null;a.df=9;a.u.bQ=B(291);a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,(-3));}a.bf=g;b=BW(a,b);g=a.bf;if(a.bK!=a.bf){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,b);}a.df=8;}a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BW(a,1);}
function PO(a){H6(a);a.cB=null;a.jh=null;}
function BW(a,b){var c,d,e,f,g;c=a.u.oa;d=a.bK;e=(d>a.bf?a.cr:a.bf)-d|0;if(e>a.u.hk)e=a.u.hk;if(e&&b==(-5))b=0;f=a.u;f.hk=f.hk-e|0;f=a.u;f.l5=Long_add(f.l5,Long_fromInt(e));if(a.pz&&e>0)a.u.fr.jE(a.cB,d,e);Di(a.cB,d,a.u.sM,c,e);c=c+e|0;g=d+e|0;if(g==a.cr){if(a.bf==a.cr)a.bf=0;d=a.bf-0|0;if(d>a.u.hk)d=a.u.hk;if(d&&b==(-5))b=0;f=a.u;f.hk=f.hk-d|0;f=a.u;f.l5=Long_add(f.l5,Long_fromInt(d));if(a.pz&&d>0)a.u.fr.jE(a.cB,0,d);Di(a.cB,0,a.u.sM,c,d);c=c+d|0;g=0+d|0;}a.u.oa=c;a.bK=g;return b;}
function AC4(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;A7_=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;A8a=b;}
function Lo(){JZ.call(this);}
function UP(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(CR(Ci(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(CR(Ci(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&EB(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CR(Ci(b)+k|0,e.length);MA(b,d,k,g-k|0);f=0;}if(!EB(c)){l=!EB(b)&&f>=g?A7$:A79;break a;}k=CR(Ci(c),i.length);m=new Qb;m.wg=b;m.zY=c;l=X7(a,d,f,g,h,0,k,m);f=m.ts;if(l===null&&0==m.p1)l=A7$;SS(c,h,0,m.p1);if(l!==null)break;}}D$(b,b.be-(g-f|0)|0);return l;}
function M$(){Lo.call(this);}
function X7(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(LP(h,2))break a;i=A79;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!SX(l)){if((f+3|0)>g){j=j+(-1)|0;if(LP(h,3))break a;i=A79;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Iz(l)){i=Ez(1);break a;}if
(j>=d){if(Wa(h))break a;i=A7$;break a;}c=j+1|0;j=k[j];if(!I3(j)){j=c+(-2)|0;i=Ez(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(LP(h,4))break a;i=A79;break a;}k=e.data;n=Kv(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.ts=j;h.p1=f;return i;}
function AIT(){E.call(this);}
function A8b(){var a=new AIT();ATR(a);return a;}
function ATR(a){return;}
function AJL(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A6i());}return b.data.length;}
function Z3(b,c){if(b===null){b=new EG;R(b);M(b);}if(b===K($rt_voidcls())){b=new Cq;R(b);M(b);}if(c>=0)return AS7(b.fj,c);b=new Tn;R(b);M(b);}
function AS7(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Fj(){var a=this;E.call(a);a.iY=null;a.i5=null;a.eg=null;a.e7=null;a.ka=null;a.hs=null;}
var A8c=null;var A8d=null;var A8e=null;var A8f=null;var A8g=null;var A8h=null;function A0p(){var a=new Fj();ACM(a);return a;}
function ACM(a){a.iY=null;a.i5=null;a.eg=null;a.e7=null;a.ka=null;a.hs=null;}
function Lq(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eg.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eg.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eg.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eg.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m=s;while(true){if(m>=t){v=u-a.eg.data[t]|0;if(v<0)return (-3);b=a.eg.data;b[t]
=b[t]+v|0;b=a.hs.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.hs.data;u=u+a.eg.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.hs.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.hs.data[t];b=a.hs.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.ka.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eg.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c
=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eg.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eg.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.ka.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.hs.data[y]=m;a.e7.data[0]=bc<<24>>24;a.e7.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.e7.data;b=a.ka.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;Di(a.e7,0,j,(a.ka.data[q]+c|0)*3|0,3);z=be;}b=a.e7.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.e7.data[0]=192;else{p=l.data;if
(p[w]>=e){i=g.data;o=f.data;a.e7.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.e7.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.e7;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.e7.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){Di(a.e7,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.hs.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eg.data[m]|0;if(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function AKo(a,b,c,d,e,f){var g;KT(a,19);a.iY.data[0]=0;g=Lq(a,b,0,19,19,null,null,d,c,e,a.iY,a.i5);if(g==(-3))f.bQ=B(292);else if(!(g!=(-5)&&c.data[0])){f.bQ=B(293);g=(-3);}return g;}
function Uu(a,b,c,d,e,f,g,h,i,j){var k;KT(a,288);a.iY.data[0]=0;k=Lq(a,d,0,b,257,A8e,A8f,g,e,i,a.iY,a.i5);if(!k&&e.data[0]){KT(a,288);c=Lq(a,d,b,c,0,A8g,A8h,h,f,i,a.iY,a.i5);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.bQ=B(294);else if(c==(-5)){j.bQ=B(295);c=(-3);}else if(c!=(-4)){j.bQ=B(296);c=(-3);}return c;}if(k==(-3))j.bQ=B(297);else if(k!=(-4)){j.bQ=B(298);k=(-3);}return k;}
function ZJ(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=A8c;e[0]=A8d;return 0;}
function KT(a,b){var c;if(a.iY===null){a.iY=$rt_createIntArray(1);a.i5=$rt_createIntArray(b);a.eg=$rt_createIntArray(16);a.e7=$rt_createIntArray(3);a.ka=$rt_createIntArray(15);a.hs=$rt_createIntArray(16);}if(a.i5.data.length<b)a.i5=$rt_createIntArray(b);c=0;while(c<b){a.i5.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eg.data[c]=0;c=c+1|0;}c=0;while(c<3){a.e7.data[c]=0;c=c+1|0;}Di(a.eg,0,a.ka,0,15);Di(a.eg,0,a.hs,0,16);}
function AIU(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
=0;c[55]=8;c[56]=24;c[57]=0;c[58]=9;c[59]=144;c[60]=83;c[61]=7;c[62]=59;c[63]=0;c[64]=8;c[65]=120;c[66]=0;c[67]=8;c[68]=56;c[69]=0;c[70]=9;c[71]=208;c[72]=81;c[73]=7;c[74]=17;c[75]=0;c[76]=8;c[77]=104;c[78]=0;c[79]=8;c[80]=40;c[81]=0;c[82]=9;c[83]=176;c[84]=0;c[85]=8;c[86]=8;c[87]=0;c[88]=8;c[89]=136;c[90]=0;c[91]=8;c[92]=72;c[93]=0;c[94]=9;c[95]=240;c[96]=80;c[97]=7;c[98]=4;c[99]=0;c[100]=8;c[101]=84;c[102]=0;c[103]=8;c[104]=20;c[105]=85;c[106]=8;c[107]=227;c[108]=83;c[109]=7;c[110]=43;c[111]=0;c[112]=8;c[113]
=116;c[114]=0;c[115]=8;c[116]=52;c[117]=0;c[118]=9;c[119]=200;c[120]=81;c[121]=7;c[122]=13;c[123]=0;c[124]=8;c[125]=100;c[126]=0;c[127]=8;c[128]=36;c[129]=0;c[130]=9;c[131]=168;c[132]=0;c[133]=8;c[134]=4;c[135]=0;c[136]=8;c[137]=132;c[138]=0;c[139]=8;c[140]=68;c[141]=0;c[142]=9;c[143]=232;c[144]=80;c[145]=7;c[146]=8;c[147]=0;c[148]=8;c[149]=92;c[150]=0;c[151]=8;c[152]=28;c[153]=0;c[154]=9;c[155]=152;c[156]=84;c[157]=7;c[158]=83;c[159]=0;c[160]=8;c[161]=124;c[162]=0;c[163]=8;c[164]=60;c[165]=0;c[166]=9;c[167]
=216;c[168]=82;c[169]=7;c[170]=23;c[171]=0;c[172]=8;c[173]=108;c[174]=0;c[175]=8;c[176]=44;c[177]=0;c[178]=9;c[179]=184;c[180]=0;c[181]=8;c[182]=12;c[183]=0;c[184]=8;c[185]=140;c[186]=0;c[187]=8;c[188]=76;c[189]=0;c[190]=9;c[191]=248;c[192]=80;c[193]=7;c[194]=3;c[195]=0;c[196]=8;c[197]=82;c[198]=0;c[199]=8;c[200]=18;c[201]=85;c[202]=8;c[203]=163;c[204]=83;c[205]=7;c[206]=35;c[207]=0;c[208]=8;c[209]=114;c[210]=0;c[211]=8;c[212]=50;c[213]=0;c[214]=9;c[215]=196;c[216]=81;c[217]=7;c[218]=11;c[219]=0;c[220]=8;c[221]
=98;c[222]=0;c[223]=8;c[224]=34;c[225]=0;c[226]=9;c[227]=164;c[228]=0;c[229]=8;c[230]=2;c[231]=0;c[232]=8;c[233]=130;c[234]=0;c[235]=8;c[236]=66;c[237]=0;c[238]=9;c[239]=228;c[240]=80;c[241]=7;c[242]=7;c[243]=0;c[244]=8;c[245]=90;c[246]=0;c[247]=8;c[248]=26;c[249]=0;c[250]=9;c[251]=148;c[252]=84;c[253]=7;c[254]=67;c[255]=0;c[256]=8;c[257]=122;c[258]=0;c[259]=8;c[260]=58;c[261]=0;c[262]=9;c[263]=212;c[264]=82;c[265]=7;c[266]=19;c[267]=0;c[268]=8;c[269]=106;c[270]=0;c[271]=8;c[272]=42;c[273]=0;c[274]=9;c[275]
=180;c[276]=0;c[277]=8;c[278]=10;c[279]=0;c[280]=8;c[281]=138;c[282]=0;c[283]=8;c[284]=74;c[285]=0;c[286]=9;c[287]=244;c[288]=80;c[289]=7;c[290]=5;c[291]=0;c[292]=8;c[293]=86;c[294]=0;c[295]=8;c[296]=22;c[297]=192;c[298]=8;c[299]=0;c[300]=83;c[301]=7;c[302]=51;c[303]=0;c[304]=8;c[305]=118;c[306]=0;c[307]=8;c[308]=54;c[309]=0;c[310]=9;c[311]=204;c[312]=81;c[313]=7;c[314]=15;c[315]=0;c[316]=8;c[317]=102;c[318]=0;c[319]=8;c[320]=38;c[321]=0;c[322]=9;c[323]=172;c[324]=0;c[325]=8;c[326]=6;c[327]=0;c[328]=8;c[329]
=134;c[330]=0;c[331]=8;c[332]=70;c[333]=0;c[334]=9;c[335]=236;c[336]=80;c[337]=7;c[338]=9;c[339]=0;c[340]=8;c[341]=94;c[342]=0;c[343]=8;c[344]=30;c[345]=0;c[346]=9;c[347]=156;c[348]=84;c[349]=7;c[350]=99;c[351]=0;c[352]=8;c[353]=126;c[354]=0;c[355]=8;c[356]=62;c[357]=0;c[358]=9;c[359]=220;c[360]=82;c[361]=7;c[362]=27;c[363]=0;c[364]=8;c[365]=110;c[366]=0;c[367]=8;c[368]=46;c[369]=0;c[370]=9;c[371]=188;c[372]=0;c[373]=8;c[374]=14;c[375]=0;c[376]=8;c[377]=142;c[378]=0;c[379]=8;c[380]=78;c[381]=0;c[382]=9;c[383]
=252;c[384]=96;c[385]=7;c[386]=256;c[387]=0;c[388]=8;c[389]=81;c[390]=0;c[391]=8;c[392]=17;c[393]=85;c[394]=8;c[395]=131;c[396]=82;c[397]=7;c[398]=31;c[399]=0;c[400]=8;c[401]=113;c[402]=0;c[403]=8;c[404]=49;c[405]=0;c[406]=9;c[407]=194;c[408]=80;c[409]=7;c[410]=10;c[411]=0;c[412]=8;c[413]=97;c[414]=0;c[415]=8;c[416]=33;c[417]=0;c[418]=9;c[419]=162;c[420]=0;c[421]=8;c[422]=1;c[423]=0;c[424]=8;c[425]=129;c[426]=0;c[427]=8;c[428]=65;c[429]=0;c[430]=9;c[431]=226;c[432]=80;c[433]=7;c[434]=6;c[435]=0;c[436]=8;c[437]
=89;c[438]=0;c[439]=8;c[440]=25;c[441]=0;c[442]=9;c[443]=146;c[444]=83;c[445]=7;c[446]=59;c[447]=0;c[448]=8;c[449]=121;c[450]=0;c[451]=8;c[452]=57;c[453]=0;c[454]=9;c[455]=210;c[456]=81;c[457]=7;c[458]=17;c[459]=0;c[460]=8;c[461]=105;c[462]=0;c[463]=8;c[464]=41;c[465]=0;c[466]=9;c[467]=178;c[468]=0;c[469]=8;c[470]=9;c[471]=0;c[472]=8;c[473]=137;c[474]=0;c[475]=8;c[476]=73;c[477]=0;c[478]=9;c[479]=242;c[480]=80;c[481]=7;c[482]=4;c[483]=0;c[484]=8;c[485]=85;c[486]=0;c[487]=8;c[488]=21;c[489]=80;c[490]=8;c[491]
=258;c[492]=83;c[493]=7;c[494]=43;c[495]=0;c[496]=8;c[497]=117;c[498]=0;c[499]=8;c[500]=53;c[501]=0;c[502]=9;c[503]=202;c[504]=81;c[505]=7;c[506]=13;c[507]=0;c[508]=8;c[509]=101;c[510]=0;c[511]=8;c[512]=37;c[513]=0;c[514]=9;c[515]=170;c[516]=0;c[517]=8;c[518]=5;c[519]=0;c[520]=8;c[521]=133;c[522]=0;c[523]=8;c[524]=69;c[525]=0;c[526]=9;c[527]=234;c[528]=80;c[529]=7;c[530]=8;c[531]=0;c[532]=8;c[533]=93;c[534]=0;c[535]=8;c[536]=29;c[537]=0;c[538]=9;c[539]=154;c[540]=84;c[541]=7;c[542]=83;c[543]=0;c[544]=8;c[545]
=125;c[546]=0;c[547]=8;c[548]=61;c[549]=0;c[550]=9;c[551]=218;c[552]=82;c[553]=7;c[554]=23;c[555]=0;c[556]=8;c[557]=109;c[558]=0;c[559]=8;c[560]=45;c[561]=0;c[562]=9;c[563]=186;c[564]=0;c[565]=8;c[566]=13;c[567]=0;c[568]=8;c[569]=141;c[570]=0;c[571]=8;c[572]=77;c[573]=0;c[574]=9;c[575]=250;c[576]=80;c[577]=7;c[578]=3;c[579]=0;c[580]=8;c[581]=83;c[582]=0;c[583]=8;c[584]=19;c[585]=85;c[586]=8;c[587]=195;c[588]=83;c[589]=7;c[590]=35;c[591]=0;c[592]=8;c[593]=115;c[594]=0;c[595]=8;c[596]=51;c[597]=0;c[598]=9;c[599]
=198;c[600]=81;c[601]=7;c[602]=11;c[603]=0;c[604]=8;c[605]=99;c[606]=0;c[607]=8;c[608]=35;c[609]=0;c[610]=9;c[611]=166;c[612]=0;c[613]=8;c[614]=3;c[615]=0;c[616]=8;c[617]=131;c[618]=0;c[619]=8;c[620]=67;c[621]=0;c[622]=9;c[623]=230;c[624]=80;c[625]=7;c[626]=7;c[627]=0;c[628]=8;c[629]=91;c[630]=0;c[631]=8;c[632]=27;c[633]=0;c[634]=9;c[635]=150;c[636]=84;c[637]=7;c[638]=67;c[639]=0;c[640]=8;c[641]=123;c[642]=0;c[643]=8;c[644]=59;c[645]=0;c[646]=9;c[647]=214;c[648]=82;c[649]=7;c[650]=19;c[651]=0;c[652]=8;c[653]
=107;c[654]=0;c[655]=8;c[656]=43;c[657]=0;c[658]=9;c[659]=182;c[660]=0;c[661]=8;c[662]=11;c[663]=0;c[664]=8;c[665]=139;c[666]=0;c[667]=8;c[668]=75;c[669]=0;c[670]=9;c[671]=246;c[672]=80;c[673]=7;c[674]=5;c[675]=0;c[676]=8;c[677]=87;c[678]=0;c[679]=8;c[680]=23;c[681]=192;c[682]=8;c[683]=0;c[684]=83;c[685]=7;c[686]=51;c[687]=0;c[688]=8;c[689]=119;c[690]=0;c[691]=8;c[692]=55;c[693]=0;c[694]=9;c[695]=206;c[696]=81;c[697]=7;c[698]=15;c[699]=0;c[700]=8;c[701]=103;c[702]=0;c[703]=8;c[704]=39;c[705]=0;c[706]=9;c[707]
=174;c[708]=0;c[709]=8;c[710]=7;c[711]=0;c[712]=8;c[713]=135;c[714]=0;c[715]=8;c[716]=71;c[717]=0;c[718]=9;c[719]=238;c[720]=80;c[721]=7;c[722]=9;c[723]=0;c[724]=8;c[725]=95;c[726]=0;c[727]=8;c[728]=31;c[729]=0;c[730]=9;c[731]=158;c[732]=84;c[733]=7;c[734]=99;c[735]=0;c[736]=8;c[737]=127;c[738]=0;c[739]=8;c[740]=63;c[741]=0;c[742]=9;c[743]=222;c[744]=82;c[745]=7;c[746]=27;c[747]=0;c[748]=8;c[749]=111;c[750]=0;c[751]=8;c[752]=47;c[753]=0;c[754]=9;c[755]=190;c[756]=0;c[757]=8;c[758]=15;c[759]=0;c[760]=8;c[761]
=143;c[762]=0;c[763]=8;c[764]=79;c[765]=0;c[766]=9;c[767]=254;c[768]=96;c[769]=7;c[770]=256;c[771]=0;c[772]=8;c[773]=80;c[774]=0;c[775]=8;c[776]=16;c[777]=84;c[778]=8;c[779]=115;c[780]=82;c[781]=7;c[782]=31;c[783]=0;c[784]=8;c[785]=112;c[786]=0;c[787]=8;c[788]=48;c[789]=0;c[790]=9;c[791]=193;c[792]=80;c[793]=7;c[794]=10;c[795]=0;c[796]=8;c[797]=96;c[798]=0;c[799]=8;c[800]=32;c[801]=0;c[802]=9;c[803]=161;c[804]=0;c[805]=8;c[806]=0;c[807]=0;c[808]=8;c[809]=128;c[810]=0;c[811]=8;c[812]=64;c[813]=0;c[814]=9;c[815]
=225;c[816]=80;c[817]=7;c[818]=6;c[819]=0;c[820]=8;c[821]=88;c[822]=0;c[823]=8;c[824]=24;c[825]=0;c[826]=9;c[827]=145;c[828]=83;c[829]=7;c[830]=59;c[831]=0;c[832]=8;c[833]=120;c[834]=0;c[835]=8;c[836]=56;c[837]=0;c[838]=9;c[839]=209;c[840]=81;c[841]=7;c[842]=17;c[843]=0;c[844]=8;c[845]=104;c[846]=0;c[847]=8;c[848]=40;c[849]=0;c[850]=9;c[851]=177;c[852]=0;c[853]=8;c[854]=8;c[855]=0;c[856]=8;c[857]=136;c[858]=0;c[859]=8;c[860]=72;c[861]=0;c[862]=9;c[863]=241;c[864]=80;c[865]=7;c[866]=4;c[867]=0;c[868]=8;c[869]
=84;c[870]=0;c[871]=8;c[872]=20;c[873]=85;c[874]=8;c[875]=227;c[876]=83;c[877]=7;c[878]=43;c[879]=0;c[880]=8;c[881]=116;c[882]=0;c[883]=8;c[884]=52;c[885]=0;c[886]=9;c[887]=201;c[888]=81;c[889]=7;c[890]=13;c[891]=0;c[892]=8;c[893]=100;c[894]=0;c[895]=8;c[896]=36;c[897]=0;c[898]=9;c[899]=169;c[900]=0;c[901]=8;c[902]=4;c[903]=0;c[904]=8;c[905]=132;c[906]=0;c[907]=8;c[908]=68;c[909]=0;c[910]=9;c[911]=233;c[912]=80;c[913]=7;c[914]=8;c[915]=0;c[916]=8;c[917]=92;c[918]=0;c[919]=8;c[920]=28;c[921]=0;c[922]=9;c[923]
=153;c[924]=84;c[925]=7;c[926]=83;c[927]=0;c[928]=8;c[929]=124;c[930]=0;c[931]=8;c[932]=60;c[933]=0;c[934]=9;c[935]=217;c[936]=82;c[937]=7;c[938]=23;c[939]=0;c[940]=8;c[941]=108;c[942]=0;c[943]=8;c[944]=44;c[945]=0;c[946]=9;c[947]=185;c[948]=0;c[949]=8;c[950]=12;c[951]=0;c[952]=8;c[953]=140;c[954]=0;c[955]=8;c[956]=76;c[957]=0;c[958]=9;c[959]=249;c[960]=80;c[961]=7;c[962]=3;c[963]=0;c[964]=8;c[965]=82;c[966]=0;c[967]=8;c[968]=18;c[969]=85;c[970]=8;c[971]=163;c[972]=83;c[973]=7;c[974]=35;c[975]=0;c[976]=8;c[977]
=114;c[978]=0;c[979]=8;c[980]=50;c[981]=0;c[982]=9;c[983]=197;c[984]=81;c[985]=7;c[986]=11;c[987]=0;c[988]=8;c[989]=98;c[990]=0;c[991]=8;c[992]=34;c[993]=0;c[994]=9;c[995]=165;c[996]=0;c[997]=8;c[998]=2;c[999]=0;c[1000]=8;c[1001]=130;c[1002]=0;c[1003]=8;c[1004]=66;c[1005]=0;c[1006]=9;c[1007]=229;c[1008]=80;c[1009]=7;c[1010]=7;c[1011]=0;c[1012]=8;c[1013]=90;c[1014]=0;c[1015]=8;c[1016]=26;c[1017]=0;c[1018]=9;c[1019]=149;c[1020]=84;c[1021]=7;c[1022]=67;c[1023]=0;c[1024]=8;c[1025]=122;c[1026]=0;c[1027]=8;c[1028]
=58;c[1029]=0;c[1030]=9;c[1031]=213;c[1032]=82;c[1033]=7;c[1034]=19;c[1035]=0;c[1036]=8;c[1037]=106;c[1038]=0;c[1039]=8;c[1040]=42;c[1041]=0;c[1042]=9;c[1043]=181;c[1044]=0;c[1045]=8;c[1046]=10;c[1047]=0;c[1048]=8;c[1049]=138;c[1050]=0;c[1051]=8;c[1052]=74;c[1053]=0;c[1054]=9;c[1055]=245;c[1056]=80;c[1057]=7;c[1058]=5;c[1059]=0;c[1060]=8;c[1061]=86;c[1062]=0;c[1063]=8;c[1064]=22;c[1065]=192;c[1066]=8;c[1067]=0;c[1068]=83;c[1069]=7;c[1070]=51;c[1071]=0;c[1072]=8;c[1073]=118;c[1074]=0;c[1075]=8;c[1076]=54;c[1077]
=0;c[1078]=9;c[1079]=205;c[1080]=81;c[1081]=7;c[1082]=15;c[1083]=0;c[1084]=8;c[1085]=102;c[1086]=0;c[1087]=8;c[1088]=38;c[1089]=0;c[1090]=9;c[1091]=173;c[1092]=0;c[1093]=8;c[1094]=6;c[1095]=0;c[1096]=8;c[1097]=134;c[1098]=0;c[1099]=8;c[1100]=70;c[1101]=0;c[1102]=9;c[1103]=237;c[1104]=80;c[1105]=7;c[1106]=9;c[1107]=0;c[1108]=8;c[1109]=94;c[1110]=0;c[1111]=8;c[1112]=30;c[1113]=0;c[1114]=9;c[1115]=157;c[1116]=84;c[1117]=7;c[1118]=99;c[1119]=0;c[1120]=8;c[1121]=126;c[1122]=0;c[1123]=8;c[1124]=62;c[1125]=0;c[1126]
=9;c[1127]=221;c[1128]=82;c[1129]=7;c[1130]=27;c[1131]=0;c[1132]=8;c[1133]=110;c[1134]=0;c[1135]=8;c[1136]=46;c[1137]=0;c[1138]=9;c[1139]=189;c[1140]=0;c[1141]=8;c[1142]=14;c[1143]=0;c[1144]=8;c[1145]=142;c[1146]=0;c[1147]=8;c[1148]=78;c[1149]=0;c[1150]=9;c[1151]=253;c[1152]=96;c[1153]=7;c[1154]=256;c[1155]=0;c[1156]=8;c[1157]=81;c[1158]=0;c[1159]=8;c[1160]=17;c[1161]=85;c[1162]=8;c[1163]=131;c[1164]=82;c[1165]=7;c[1166]=31;c[1167]=0;c[1168]=8;c[1169]=113;c[1170]=0;c[1171]=8;c[1172]=49;c[1173]=0;c[1174]=9;c[1175]
=195;c[1176]=80;c[1177]=7;c[1178]=10;c[1179]=0;c[1180]=8;c[1181]=97;c[1182]=0;c[1183]=8;c[1184]=33;c[1185]=0;c[1186]=9;c[1187]=163;c[1188]=0;c[1189]=8;c[1190]=1;c[1191]=0;c[1192]=8;c[1193]=129;c[1194]=0;c[1195]=8;c[1196]=65;c[1197]=0;c[1198]=9;c[1199]=227;c[1200]=80;c[1201]=7;c[1202]=6;c[1203]=0;c[1204]=8;c[1205]=89;c[1206]=0;c[1207]=8;c[1208]=25;c[1209]=0;c[1210]=9;c[1211]=147;c[1212]=83;c[1213]=7;c[1214]=59;c[1215]=0;c[1216]=8;c[1217]=121;c[1218]=0;c[1219]=8;c[1220]=57;c[1221]=0;c[1222]=9;c[1223]=211;c[1224]
=81;c[1225]=7;c[1226]=17;c[1227]=0;c[1228]=8;c[1229]=105;c[1230]=0;c[1231]=8;c[1232]=41;c[1233]=0;c[1234]=9;c[1235]=179;c[1236]=0;c[1237]=8;c[1238]=9;c[1239]=0;c[1240]=8;c[1241]=137;c[1242]=0;c[1243]=8;c[1244]=73;c[1245]=0;c[1246]=9;c[1247]=243;c[1248]=80;c[1249]=7;c[1250]=4;c[1251]=0;c[1252]=8;c[1253]=85;c[1254]=0;c[1255]=8;c[1256]=21;c[1257]=80;c[1258]=8;c[1259]=258;c[1260]=83;c[1261]=7;c[1262]=43;c[1263]=0;c[1264]=8;c[1265]=117;c[1266]=0;c[1267]=8;c[1268]=53;c[1269]=0;c[1270]=9;c[1271]=203;c[1272]=81;c[1273]
=7;c[1274]=13;c[1275]=0;c[1276]=8;c[1277]=101;c[1278]=0;c[1279]=8;c[1280]=37;c[1281]=0;c[1282]=9;c[1283]=171;c[1284]=0;c[1285]=8;c[1286]=5;c[1287]=0;c[1288]=8;c[1289]=133;c[1290]=0;c[1291]=8;c[1292]=69;c[1293]=0;c[1294]=9;c[1295]=235;c[1296]=80;c[1297]=7;c[1298]=8;c[1299]=0;c[1300]=8;c[1301]=93;c[1302]=0;c[1303]=8;c[1304]=29;c[1305]=0;c[1306]=9;c[1307]=155;c[1308]=84;c[1309]=7;c[1310]=83;c[1311]=0;c[1312]=8;c[1313]=125;c[1314]=0;c[1315]=8;c[1316]=61;c[1317]=0;c[1318]=9;c[1319]=219;c[1320]=82;c[1321]=7;c[1322]
=23;c[1323]=0;c[1324]=8;c[1325]=109;c[1326]=0;c[1327]=8;c[1328]=45;c[1329]=0;c[1330]=9;c[1331]=187;c[1332]=0;c[1333]=8;c[1334]=13;c[1335]=0;c[1336]=8;c[1337]=141;c[1338]=0;c[1339]=8;c[1340]=77;c[1341]=0;c[1342]=9;c[1343]=251;c[1344]=80;c[1345]=7;c[1346]=3;c[1347]=0;c[1348]=8;c[1349]=83;c[1350]=0;c[1351]=8;c[1352]=19;c[1353]=85;c[1354]=8;c[1355]=195;c[1356]=83;c[1357]=7;c[1358]=35;c[1359]=0;c[1360]=8;c[1361]=115;c[1362]=0;c[1363]=8;c[1364]=51;c[1365]=0;c[1366]=9;c[1367]=199;c[1368]=81;c[1369]=7;c[1370]=11;c[1371]
=0;c[1372]=8;c[1373]=99;c[1374]=0;c[1375]=8;c[1376]=35;c[1377]=0;c[1378]=9;c[1379]=167;c[1380]=0;c[1381]=8;c[1382]=3;c[1383]=0;c[1384]=8;c[1385]=131;c[1386]=0;c[1387]=8;c[1388]=67;c[1389]=0;c[1390]=9;c[1391]=231;c[1392]=80;c[1393]=7;c[1394]=7;c[1395]=0;c[1396]=8;c[1397]=91;c[1398]=0;c[1399]=8;c[1400]=27;c[1401]=0;c[1402]=9;c[1403]=151;c[1404]=84;c[1405]=7;c[1406]=67;c[1407]=0;c[1408]=8;c[1409]=123;c[1410]=0;c[1411]=8;c[1412]=59;c[1413]=0;c[1414]=9;c[1415]=215;c[1416]=82;c[1417]=7;c[1418]=19;c[1419]=0;c[1420]
=8;c[1421]=107;c[1422]=0;c[1423]=8;c[1424]=43;c[1425]=0;c[1426]=9;c[1427]=183;c[1428]=0;c[1429]=8;c[1430]=11;c[1431]=0;c[1432]=8;c[1433]=139;c[1434]=0;c[1435]=8;c[1436]=75;c[1437]=0;c[1438]=9;c[1439]=247;c[1440]=80;c[1441]=7;c[1442]=5;c[1443]=0;c[1444]=8;c[1445]=87;c[1446]=0;c[1447]=8;c[1448]=23;c[1449]=192;c[1450]=8;c[1451]=0;c[1452]=83;c[1453]=7;c[1454]=51;c[1455]=0;c[1456]=8;c[1457]=119;c[1458]=0;c[1459]=8;c[1460]=55;c[1461]=0;c[1462]=9;c[1463]=207;c[1464]=81;c[1465]=7;c[1466]=15;c[1467]=0;c[1468]=8;c[1469]
=103;c[1470]=0;c[1471]=8;c[1472]=39;c[1473]=0;c[1474]=9;c[1475]=175;c[1476]=0;c[1477]=8;c[1478]=7;c[1479]=0;c[1480]=8;c[1481]=135;c[1482]=0;c[1483]=8;c[1484]=71;c[1485]=0;c[1486]=9;c[1487]=239;c[1488]=80;c[1489]=7;c[1490]=9;c[1491]=0;c[1492]=8;c[1493]=95;c[1494]=0;c[1495]=8;c[1496]=31;c[1497]=0;c[1498]=9;c[1499]=159;c[1500]=84;c[1501]=7;c[1502]=99;c[1503]=0;c[1504]=8;c[1505]=127;c[1506]=0;c[1507]=8;c[1508]=63;c[1509]=0;c[1510]=9;c[1511]=223;c[1512]=82;c[1513]=7;c[1514]=27;c[1515]=0;c[1516]=8;c[1517]=111;c[1518]
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;A8c=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;A8d=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;A8e=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;A8f=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;A8g=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;A8h=b;}
function JL(){var a=this;E.call(a);a.eF=0;a.kC=0;a.e3=null;a.jU=0;a.kT=0;a.ws=0;a.qP=0;a.pg=0;a.sI=0;a.su=0;a.v4=null;a.tJ=0;a.vG=null;a.tQ=0;a.Y=null;a.z=null;}
var A8i=null;function SZ(a,b,c,d,e,f,g){a.eF=0;a.sI=b<<24>>24;a.su=c<<24>>24;a.v4=d;a.tJ=e;a.vG=f;a.tQ=g;a.e3=null;}
function W_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.Y.x;d=a.Y.J;e=a.z.bz;f=a.z.bA;g=a.z.bf;h=g>=a.z.bK?a.z.cr-g|0:(a.z.bK-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.eF){case 0:break f;case 2:i=a.qP;while(f<i){if(!d){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BW(a.z,b);}b=0;d=d+(-1)|0;k=a.Y.bW.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.kC=a.kC+(e&A8i.data[i])|0;e=e>>i;f=f-i|0;a.kT=a.su;a.e3=a.vG;a.jU=a.tQ;a.eF=3;break g;case 4:i=a.qP;while(f<i){if
(!d){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BW(a.z,b);}b=0;d=d+(-1)|0;k=a.Y.bW.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.pg=a.pg+(e&A8i.data[i])|0;e=e>>i;f=f-i|0;a.eF=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.z.bf=g;b=BW(a.z,b);g=a.z.bf;if(a.z.bK!=a.z.bf){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BW(a.z,b);}a.eF=8;break a;case 9:a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D
=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BW(a.z,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BW(a.z,(-2));}}l=a.kT;while(f<l){if(!d){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BW(a.z,b);}b=0;d=d+(-1)|0;k=a.Y.bW.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.jU+(e&A8i.data[l])|0)*3|0;k=a.e3.data;i=m+1|0;e=e>>
k[i];f=f-a.e3.data[i]|0;l=a.e3.data[m];if(l&16){a.qP=l&15;a.pg=a.e3.data[m+2|0];a.eF=4;continue b;}if(l&64){a.eF=9;a.Y.bQ=B(299);a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BW(a.z,(-3));}a.kT=l;a.jU=(m/3|0)+a.e3.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;b=AHz(a,a.sI,a.su,a.v4,a.tJ,a.vG,a.tQ,a.z,a.Y);c=a.Y.x;d=a.Y.J;e=a.z.bz;f=a.z.bA;g=a.z.bf;h=g>=a.z.bK?a.z.cr-g|
0:(a.z.bK-g|0)-1|0;if(b){a.eF=b!=1?9:7;continue b;}}a.kT=a.sI;a.e3=a.v4;a.jU=a.tJ;a.eF=1;}l=a.kT;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.Y.bW.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.jU+(e&A8i.data[l])|0)*3|0;k=a.e3.data;i=m+1|0;e=e>>>k[i];f=f-a.e3.data[i]|0;n=a.e3.data[m];if(!n){a.ws=a.e3.data[m+2|0];a.eF=6;continue b;}if(n&16){a.qP=n&15;a.kC=a.e3.data[m+2|0];a.eF=2;continue b;}if(!(n&64)){a.kT=n;a.jU=(m/3|0)+a.e3.data[m+2|0]|0;continue b;}if(!(n&32)){a.eF=9;a.Y.bQ=B(300);a.z.bz=e;a.z.bA=f;a.Y.J
=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BW(a.z,(-3));}a.eF=7;continue b;}if(h)i=g;else{if(g!=a.z.cr)i=g;else if(!a.z.bK)i=g;else{i=0;h=i>=a.z.bK?a.z.cr-i|0:(a.z.bK-i|0)-1|0;}if(!h){a.z.bf=i;b=BW(a.z,b);i=a.z.bf;h=i>=a.z.bK?a.z.cr-i|0:(a.z.bK-i|0)-1|0;if(i==a.z.cr&&a.z.bK){i=0;h=i>=a.z.bK?a.z.cr-i|0:(a.z.bK-i|0)-1|0;}if(!h){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=i;return BW(a.z,b);}}}b=0;k=a.z.cB.data;g=i+1|0;k[i]=a.ws<<24>>
24;h=h+(-1)|0;a.eF=0;continue b;}i=g-a.pg|0;while(i<0){i=i+a.z.cr|0;}while(a.kC){if(h)l=g;else{if(g!=a.z.cr)l=g;else if(!a.z.bK)l=g;else{l=0;h=l>=a.z.bK?a.z.cr-l|0:(a.z.bK-l|0)-1|0;}if(!h){a.z.bf=l;b=BW(a.z,b);l=a.z.bf;h=l>=a.z.bK?a.z.cr-l|0:(a.z.bK-l|0)-1|0;if(l==a.z.cr&&a.z.bK){l=0;h=l>=a.z.bK?a.z.cr-l|0:(a.z.bK-l|0)-1|0;}if(!h){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=l;return BW(a.z,b);}}}o=a.z.cB.data;g=l+1|0;k=a.z.cB.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m
==a.z.cr?0:m;a.kC=a.kC-1|0;}a.eF=0;}a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BW(a.z,b);}a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BW(a.z,1);}
function Wo(a,b){return;}
function AHz(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.x;k=i.J;l=h.bz;m=h.bA;n=h.bf;o=n>=h.bK?h.cr-n|0:(h.bK-n|0)-1|0;p=A8i.data[b];q=A8i.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.bW.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cB.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&A8i.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.bW.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.bQ=B(299);b=i.J-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bz=w;h.bA=b;i.J=c;i.D=Long_add(i.D,Long_fromInt(e-i.x|0));i.x=e;h.bf=n;return (-3);}b=(b+r[x+2|0]|0)+(w&A8i.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.bW.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&A8i.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.cB.data;b=n+1|0;r=h.cB.data;c=w+1|0;s[n]=r[w];s=h.cB.data;n=b+1|0;r=h.cB.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{Di(h.cB,w,h.cB,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cr|0;if(w>=0)break;}b=h.cr-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.cB.data;n=c+1|0;r=h.cB.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{Di(h.cB,w,h.cB,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.cB.data;c=n+1|0;r=h.cB.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}Di(h.cB,w,h.cB,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.J-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bz=l;h.bA=e;i.J=b;i.D=Long_add(i.D,Long_fromInt(c-i.x|0));i.x=c;h.bf=n;return 1;}i.bQ=B(300);v=i.J-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bz=l;h.bA=c;i.J=e;i.D=Long_add(i.D,Long_fromInt(b-i.x|0));i.x=b;h.bf=n;return (-3);}t=(t+s[u+2|0]|0)+(l&A8i.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cB.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.J-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bz=l;h.bA=g;i.J=b;i.D=Long_add(i.D,Long_fromInt(e-i.x|0));i.x=e;h.bf=c;return 0;}
function Xe(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;A8i=b;}
function Gl(){B3.call(this);}
function A8j(){var a=new Gl();AZF(a);return a;}
function AZF(a){R(a);}
function Tn(){B5.call(this);}
function A8k(){var a=new Tn();AXY(a);return a;}
function AXY(a){R(a);}
function Wy(){E.call(this);}
function AZN(a,b){return a.Dx(b);}
function AN6(a){return a.ER();}
function IL(){B5.call(this);}
function A8l(){var a=new IL();AWU(a);return a;}
function AWU(a){R(a);}
function VE(){var a=this;E.call(a);a.gw=null;a.py=null;a.dI=null;a.eH=0;}
function A0n(){var a=new VE();ATH(a);return a;}
function ATH(a){a.dI=A2a;}
function DJ(){Bz.call(this);}
function A8m(){var a=new DJ();AYC(a);return a;}
function AYC(a){R(a);}
function ADu(){E.call(this);}
function H9(b){return b.length?0:1;}
function AJk(b){return b.shift();}
function PJ(){E.call(this);this.zX=null;}
function ALl(a){var b,c,d;b=a.zX;if(!Gx(b)&&b.b3.dI===null){c=b.b3;if(c.gw!==null&&!H9(c.gw)){b=c.gw;d=AJk(b);if(b===null)c.gw=null;NC(d);}}}
function Of(){var a=this;E.call(a);a.wX=null;a.wY=null;a.wV=0;a.wW=null;}
function NC(a){var b,c,d,e;b=a.wX;c=a.wY;d=a.wV;e=a.wW;EJ(b);c.b3.dI=b;b=c.b3;b.eH=b.eH+d|0;Cx(e,null);}
function FZ(){B3.call(this);}
function A8n(){var a=new FZ();AOv(a);return a;}
function AOv(a){R(a);}
function SV(){Ey.call(this);}
function A8o(){var a=new SV();ASH(a);return a;}
function ASH(a){R(a);}
function Eh(){Bz.call(this);}
function A8p(){var a=new Eh();AXj(a);return a;}
function AXj(a){R(a);}
function L0(){var a=this;E.call(a);a.DL=null;a.yJ=0.0;a.Cd=0.0;a.j8=null;a.ly=null;a.pP=null;a.ha=0;}
function ALg(a,b){var c;if(b!==null){a.ly=b;return a;}c=new Cq;Bp(c,B(301));M(c);}
function AY$(a,b){return;}
function Y_(a,b){var c;if(b!==null){a.pP=b;return a;}c=new Cq;Bp(c,B(301));M(c);}
function AV8(a,b){return;}
function QX(a,b,c,d){var e,f,$$je;if(!(a.ha==2&&!d)&&a.ha!=3){a.ha=d?2:1;while(true){try{e=ABw(a,b,c);}catch($$e){$$je=Bh($$e);if($$je instanceof B5){f=$$je;M(AVc(f));}else{throw $$e;}}if(Hr(e))return e;if(H2(e)){if(d&&EB(b)){if(a.ly===A7L)return Ez(Ci(b));if(Ci(c)<=BE(a.j8))return A79;D$(b,b.be+Ci(b)|0);if(a.ly===A4$)La(c,a.j8);}return e;}if(Nt(e)){if(a.ly===A7L)return e;if(a.ly===A4$){if(Ci(c)<BE(a.j8))return A79;La(c,a.j8);}D$(b,b.be+JI(e)|0);}else if(Kx(e)){if(a.pP===A7L)break;if(a.pP===A4$){if(Ci(c)<BE(a.j8))return A79;La(c,
a.j8);}D$(b,b.be+JI(e)|0);}}return e;}b=new DJ;R(b);M(b);}
function XM(a,b){if(a.ha!=3&&a.ha!=2){b=new DJ;R(b);M(b);}a.ha=3;return A7$;}
function ALG(a){a.ha=0;return a;}
function AEB(a,b){var c,d;if(a.ha&&a.ha!=3){b=new DJ;R(b);M(b);}if(!Ci(b))return ACs(0);if(a.ha)ALG(a);c=ACs(DU(8,Ci(b)*a.yJ|0));while(true){d=QX(a,b,c,0);if(H2(d))break;if(Hr(d))c=RI(a,c);if(!Ll(d))continue;O$(d);}b=QX(a,b,c,1);if(Ll(b))O$(b);while(!H2(XM(a,c))){c=RI(a,c);}FA(c);return c;}
function RI(a,b){var c,d,e;c=b.kY;d=ME(c,DU(8,c.data.length*2|0));e=AHB(d,0,d.data.length);D$(e,b.be);return e;}
function AQN(a,b){return A7$;}
function AVt(a){return;}
function Pl(){}
function Pr(){}
function MM(){var a=this;E.call(a);a.t7=null;a.x8=null;a.Ee=0;a.E3=0;}
function AJQ(a){if(!a.Ee){a.t7.zA=null;EJ(a.t7);Cx(a.x8,null);}}
function JP(){L0.call(this);}
function ABw(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(CR(Ci(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(CR(Ci(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&EB(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CR(Ci(b)+k|0,e.length);AE8(b,d,k,g-k|0);f=0;}if(!EB(c)){l=!EB(b)&&f>=g?A7$:A79;break a;}k=CR(Ci(c),i.length);m=new Su;m.xy=b;m.AV=c;l=AL1(a,d,f,g,h,0,k,m);f=m.tU;if(l===null&&0==m.o1)l=A7$;AMy(c,h,0,m.o1);if(l!==null)break;}}D$(b,b.be-(g-f|0)|0);return l;}
function Om(){JP.call(this);}
function AL1(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Lv(h))break a;i=A7$;break a;}n=k+1|0;k=j[k];if(!Gg(a,k)){c=n+(-2)|0;i=Ez(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Lv(h))break a;i=A7$;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Gg(a,m))break b;if(!Gg(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(SX(p)){c=k+(-3)|0;i=Ez(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Ez(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Lv(h))break a;i=A7$;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AEg(h,2))break a;i=A79;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Gg(a,m))break c;if(!Gg(a,o))break c;if(!Gg(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=IV(q);m=c+1|0;j[c]=Ih(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=Ez(1);break a;}c=k+(-3)|0;i=Ez(1);}h.tU=
c;h.o1=f;return i;}
function Gg(a,b){return (b&192)!=128?0:1;}
function Du(){var a=this;Bz.call(a);a.gS=0;a.Ey=null;}
function ACg(a,b){var c=new Du();AOw(c,a,b);return c;}
function AOw(a,b,c){a.Ey=b;R(a);a.gS=c;}
function AH4(){var a=this;E.call(a);a.E6=0;a.CO=0;a.DH=Long_ZERO;a.EM=0;a.x9=0;a.nT=null;a.wb=null;a.xG=null;a.Fm=0;a.Dr=Long_ZERO;a.CQ=0;a.D0=Long_ZERO;}
function A1K(){var a=new AH4();AXU(a);return a;}
function AXU(a){a.E6=0;a.CO=0;a.x9=255;a.CQ=0;a.D0=Long_ZERO;}
function Ms(){E.call(this);this.kZ=0;}
var A8q=null;function APe(){var a=new Ms();U1(a);return a;}
function U1(a){a.kZ=0;}
function ATD(a,b,c,d){var e,f,g,h;e=a.kZ^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=A8q.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.kZ=e^(-1);}
function AWf(a){a.kZ=0;}
function AYB(a,b){a.kZ=Long_and(b,new Long(4294967295, 0)).lo;}
function AW7(a){return Long_and(Long_fromInt(a.kZ),new Long(4294967295, 0));}
function AAR(){var b,c,d;A8q=null;A8q=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}A8q.data[b]=d;b=b+1|0;}}
function HF(){var a=this;E.call(a);a.N=0.0;a.I=0.0;a.O=0.0;a.R=0.0;a.Q=0.0;a.S=0.0;}
var A8r=null;var A3R=0;function Lf(b,c,d,e,f,g){var h;h=new HF;h.N=b;h.I=c;h.O=d;h.R=e;h.Q=f;h.S=g;return h;}
function Dy(b,c,d,e,f,g){var h,i;if(A3R>=A8r.p)U(A8r,Lf(0.0,0.0,0.0,0.0,0.0,0.0));h=A8r;i=A3R;A3R=i+1|0;return KX(Z(h,i),b,c,d,e,f,g);}
function KX(a,b,c,d,e,f,g){a.N=b;a.I=c;a.O=d;a.R=e;a.Q=f;a.S=g;return a;}
function HK(a,b,c,d){var e,f,g,h,i,j,k;e=a.N;f=a.I;g=a.O;h=a.R;i=a.Q;j=a.S;k=S(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=S(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=S(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return Dy(e,f,g,h,i,j);}
function Da(a,b,c,d){return Dy(a.N-b,a.I-c,a.O-d,a.R+b,a.Q+c,a.S+d);}
function QB(a,b,c,d){return Dy(a.N+b,a.I+c,a.O+d,a.R+b,a.Q+c,a.S+d);}
function NI(a,b,c){var d,e;if(b.Q>a.I&&b.I<a.Q){if(b.S>a.O&&b.O<a.S){if(c<=0.0)d=c;else if(b.R>a.N)d=c;else{d=a.N-b.R;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.N<a.R)e=d;else{e=a.R-b.N;if(e<=d)e=d;}return e;}return c;}return c;}
function Se(a,b,c){var d,e;if(b.R>a.N&&b.N<a.R){if(b.S>a.O&&b.O<a.S){if(c<=0.0)d=c;else if(b.Q>a.I)d=c;else{d=a.I-b.Q;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.I<a.Q)e=d;else{e=a.Q-b.I;if(e<=d)e=d;}return e;}return c;}return c;}
function QD(a,b,c){var d,e;if(b.R>a.N&&b.N<a.R){if(b.Q>a.I&&b.I<a.Q){if(c<=0.0)d=c;else if(b.S>a.O)d=c;else{d=a.O-b.S;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.O<a.S)e=d;else{e=a.S-b.O;if(e<=d)e=d;}return e;}return c;}return c;}
function Kd(a,b){return b.R>a.N&&b.N<a.R?(b.Q>a.I&&b.I<a.Q?(b.S>a.O&&b.O<a.S?1:0):0):0;}
function E$(a,b,c,d){a.N=a.N+b;a.I=a.I+c;a.O=a.O+d;a.R=a.R+b;a.Q=a.Q+c;a.S=a.S+d;return a;}
function AKl(a){return (a.R-a.N+a.Q-a.I+a.S-a.O)/3.0;}
function Nu(a){return Dy(a.N,a.I,a.O,a.R,a.Q,a.S);}
function NX(a,b,c){var d,e,f,g,h,i,j,k;d=I_(b,c,a.N);e=I_(b,c,a.R);f=Ik(b,c,a.I);g=Ik(b,c,a.Q);h=IY(b,c,a.O);i=IY(b,c,a.S);if(!OK(a,d))d=null;if(!OK(a,e))e=null;if(!QE(a,f))f=null;if(!QE(a,g))g=null;if(!Rb(a,h))h=null;if(!Rb(a,i))i=null;j=null;if(d!==null)j=d;if(e!==null&&!(j!==null&&D1(b,e)>=D1(b,j)))j=e;if(f!==null&&!(j!==null&&D1(b,f)>=D1(b,j)))j=f;if(g!==null&&!(j!==null&&D1(b,g)>=D1(b,j)))j=g;if(h!==null&&!(j!==null&&D1(b,h)>=D1(b,j)))j=h;if(i!==null&&!(j!==null&&D1(b,i)>=D1(b,j)))j=i;if(j===null)return null;k
=(-1);if(j===d)k=4;if(j===e)k=5;if(j===f)k=0;if(j===g)k=1;if(j===h)k=2;if(j===i)k=3;return ASc(0,0,0,k,j);}
function OK(a,b){return b===null?0:b.v>=a.I&&b.v<=a.Q&&b.s>=a.O&&b.s<=a.S?1:0;}
function QE(a,b){return b===null?0:b.t>=a.N&&b.t<=a.R&&b.s>=a.O&&b.s<=a.S?1:0;}
function Rb(a,b){return b===null?0:b.t>=a.N&&b.t<=a.R&&b.v>=a.I&&b.v<=a.Q?1:0;}
function S$(a,b){a.N=b.N;a.I=b.I;a.O=b.O;a.R=b.R;a.Q=b.Q;a.S=b.S;}
function ZP(){A8r=Ck();A3R=0;}
function Nw(){}
function Bo(){Bn.call(this);}
var A8s=0;var A5o=null;var A8t=0;var A8u=0;var A8v=0;var A8w=0.0;var A8x=0;var A8y=null;var A8z=0;var A8A=0;var A8B=0.0;var A8C=0.0;var A8D=0.0;var A8E=0.0;var A8F=0.0;var A8G=0.0;var A8H=0.0;var A8I=0.0;var A8J=0.0;var A8K=0;var A4T=0.0;var A4U=0.0;var A4V=0.0;var A4W=0.0;var A8L=0;var A8M=0;var A8N=0;var A8O=0.0;var A8P=0.0;var A8Q=0.0;var A8R=0;var A8S=0;var A8T=0;var A8U=0;var A8V=null;var A8W=0;var A8X=null;var A8Y=0;var A8Z=null;var A80=0;var A81=null;var A82=null;var A5n=null;var A83=null;var A84=null;var A85
=null;var A86=null;var A87=null;var A88=null;var A5m=0;var A89=null;var A8$=null;var A8_=null;var A9a=null;var A9b=null;var A9c=null;var A9d=null;var A9e=null;var A9f=null;var A9g=null;var A9h=null;var A9i=null;var A9j=null;var A9k=null;var A9l=Long_ZERO;var A9m=0;function BO(){BO=Bt(Bo);ASR();}
function A9n(){var a=new Bo();AJv(a);return a;}
function AJv(a){BO();RY(a);}
function V(b){BO();a:{switch(b){case 2884:Jl(2884);break a;case 2896:A8u=1;break a;case 2903:A8K=1;break a;case 2912:A8M=1;break a;case 2929:Jl(2929);break a;case 3008:A8v=1;break a;case 3042:Jl(3042);break a;case 3553:A8t=1;break a;case 32823:Jl(32823);break a;case 32826:break;default:break a;}}}
function Gy(b){var c;BO();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Y();A2O.depthFunc(c);}
function Pu(b,c){BO();A8w=c;}
function CU(b){BO();A8U=b;}
function FQ(){BO();switch(A8U){case 5888:break;case 5889:return A8X.data[A8Y];case 5890:return A8Z.data[A80];default:}return A8V.data[A8W];}
function CT(){BO();ED(FQ());}
function Gc(b,c,d,e){BO();Y();A2_.data[0]=b;A2_.data[1]=c;A2_.data[2]=d;A2_.data[3]=e;A2O.viewport(b,c,d,e);}
function DA(b){BO();Y();A2O.clear(b);}
function G7(b,c,d,e,f,g){var h,i,j,k;BO();h=FQ();i=c-b;h.dW=2.0/i;h.dU=0.0;h.dV=0.0;h.dT=0.0;h.dZ=0.0;j=e-d;h.d0=2.0/j;h.dX=0.0;h.dY=0.0;h.d4=0.0;h.d2=0.0;k=g-f;h.d3=2.0/k;h.d1=0.0;h.f9= -(c+b)/i;h.f$= -(e+d)/j;h.f7=(g+f)/k;h.f8=1.0;}
function Br(b,c,d){var e;BO();J_(A84,b,c,d);e=FQ();Ri(e,A84,e);if(!A8x)return;e=new Cq;Bp(e,B(302));M(e);}
function Gp(b,c,d,e){BO();Y();A2O.clearColor(b,c,d,e);}
function X(b){BO();a:{switch(b){case 2884:It(2884);break a;case 2896:A8u=0;break a;case 2903:A8K=0;break a;case 2912:A8M=0;break a;case 2929:It(2929);break a;case 3008:A8v=0;break a;case 3042:It(3042);break a;case 3553:A8t=0;break a;case 32823:It(32823);break a;case 32826:break;default:break a;}}}
function BN(b,c,d,e){BO();A8B=b;A8C=c;A8D=d;A8E=e;}
function Pv(b,c,d,e,f,g,h,i,j){var k,l,m,n;BO();Y();if(j===null){k=A2O;l=null;k.texImage2D(3553,c,32856,e,f,g,6408,5121,l);}else{m=Ci(j);k=A3a;n=0;while(n<m){h=(AGu(j)&255)<<16>>16;k[n]=h;n=n+1|0;}j=new Uint8Array(A3a.buffer,0,m);A2O.texImage2D(3553,c,32856,e,f,g,6408,5121,j);}}
function BU(){BO();a:{switch(A8U){case 5888:break;case 5889:if(A8Y>=(A8X.data.length-1|0)){B$(CO(),B(303));break a;}A8Y=A8Y+1|0;FR(A8X.data[A8Y],A8X.data[A8Y-1|0]);break a;case 5890:if(A80>=(A8Z.data.length-1|0)){B$(CO(),B(304));break a;}A80=A80+1|0;FR(A8Z.data[A80],A8Z.data[A80-1|0]);break a;default:}if(A8W>=(A8V.data.length-1|0))B$(CO(),B(305));else{A8W=A8W+1|0;FR(A8V.data[A8W],A8V.data[A8W-1|0]);}}}
function Bq(b,c,d,e){var f;BO();J_(A84,c,d,e);f=FQ();ST(f,b*0.01745329238474369,A84,f);if(!A8x)return;f=new Cq;Bp(f,B(302));M(f);}
function By(){BO();a:{switch(A8U){case 5888:break;case 5889:if(A8Y<=0){B$(CO(),B(306));break a;}A8Y=A8Y-1|0;break a;case 5890:if(A80<=0){B$(CO(),B(307));break a;}A80=A80-1|0;break a;default:}if(A8W<=0)B$(CO(),B(308));else A8W=A8W-1|0;}}
function Qr(b,c){BO();a:{switch(b){case 2982:break;case 2983:Qt(A8X.data[A8Y],c);break a;default:}Qt(A8V.data[A8W],c);}}
function Co(b,c,d){var e;BO();J_(A84,b,c,d);Vo(FQ(),A84);if(!A8x)return;e=new Cq;Bp(e,B(302));M(e);}
function C0(b,c){BO();A8N=b==1&&c==771?1:0;Y();A2O.blendFunc(b,c);}
function Fz(b){BO();Y();A2O.depthMask(!!b);}
function ER(b,c,d,e){BO();Y();A2O.colorMask(!!b,!!c,!!d,!!e);}
function Ce(b,c){var d,e;BO();d=AIg(A5o,c);Y();e=A2O;d=d!==null?d.yE:null;e.bindTexture(3553,d);}
function DP(b,c,d){BO();if(!(d!=33071&&d!=10496))d=33071;Y();A2O.texParameteri(b,c,d);}
function B_(b,c,d){var e;BO();e=DK(b*b+c*c+d*d);A8F=b/e;A8G=c/e;A8H=d/e;}
function LY(b){BO();A82=b;OV(b);}
function E4(b){var c;BO();if(!A8x){c=Cz(A83,CG(b));if(c!==null&&c.iK>0){Ow(c.ky|0|(A8K&&A8u?8:0)|(!A8M?0:16)|(!A8v?0:32)|(!A8t?0:64));LY(c.px);MY(0,c.iK);A8S=A8S+((c.iK*6|0)/4|0)|0;A8T=A8T+(c.iK/2|0)|0;}}}
function ET(b,c){BO();if(!A8x){A8y=Cz(A5n,CG(b));if(A8y!==null){A8y.ky=(-1);A8y.iK=0;A8x=1;}}}
function DL(){var b,c,d,e;BO();if(A8x){A8x=0;Y();b=A3H.buffer;c=A3G;d=new Int32Array(b,0,c);A3G=0;e=QW(d);if(e>0){if(A8y.nt===null){BK(A83,CG(A8y.yo),A8y);A8y.px=MH();A8y.nt=Ke();b=MI(A8y.ky);LY(A8y.px);F_(34962,A8y.nt);OF(b);}F_(34962,A8y.nt);M0(34962,d,35044);A8R=A8R+e|0;}}}
function Fd(b,c,d){BO();A8B=b;A8C=c;A8D=d;A8E=1.0;}
function Mi(b,c){BO();Y();A2O.polygonOffset(b,c);}
function LX(b){BO();a:{switch(b){case 32886:break;case 32888:A8A=1;break a;default:break a;}A8z=1;}}
function KM(b){BO();a:{switch(b){case 32886:break;case 32888:A8A=0;break a;default:break a;}A8z=0;}}
function Np(){BO();return 0|(!A8z?0:1)|(!A8A?0:4);}
function Ow(b){var c;BO();c=MI(b);A89=c;ALc(c);if(A8v)ADL(c,A8w);AGt(c,A8B,A8C,A8D,A8E);if(A8M){AF9(c,(!A8N?0:2)+A8L|0);AKz(c,A4T,A4U,A4V,A4W);AFx(c,A8Q);AKc(c,A8O,A8P);}AG6(c,A8V.data[A8W]);AHy(c,A8X.data[A8Y]);VF(c,A8Z.data[A80]);if(A8K&&A8u){XD(c,A8F,A8G,A8H);AHJ(c,A87,A88);}AJa(c,A8I,A8J);}
function AGa(b,c,d,e){var f;BO();if(A8x){if(b!=7)B$(CO(),B(309));else{if(A8y.ky==(-1))A8y.ky=Np();else if(A8y.ky!=Np())B$(CO(),B(310));f=A8y;f.iK=f.iK+d|0;Y();e=e;if((A3G+e.length|0)<A3H.length){f=A3H;b=A3G;f.set(e,b);A3G=A3G+e.length|0;}}}else{A8R=A8R+QW(e)|0;A8S=A8S+d|0;Ow(0|(!A8z?0:1)|(!A8A?0:4)|(A8K&&A8u?8:0)|(!A8M?0:16)|(!A8v?0:32)|(!A8t?0:64));LY(A89.sb);F_(34962,A89.sG);if(!A89.uR){A89.uR=1;M0(34962,A8$,35048);}f=A2O;e=e;f.bufferSubData(34962,0,e);if(b==7){MY(c,d);A8T=A8T+(d/2|0)|0;}else{a:{b:{switch
(b){case 1:break;case 2:case 4:break b;case 3:b=3;A8T=A8T+(d-1|0)|0;break a;case 5:b=5;A8T=A8T+(d-2|0)|0;break a;case 6:b=6;A8T=A8T+(d-2|0)|0;break a;default:break b;}b=1;A8T=A8T+(d/2|0)|0;break a;}b=4;A8T=A8T+(d/3|0)|0;}A2O.drawArrays(b,c,d);}}}
function MY(b,c){var d,e,f,g,h,i,j;BO();if(A81===null){if(A8s)d=AGy($rt_createIntArray(49200));else{e=AVH(0,196800,$rt_createByteArray(196800),0,196800,1,0);e.jG=A5p;d=ACP(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;h=h<<16;Lu(d,g|h);Lu(d,j|h);Lu(d,i|j<<16);f=f+1|0;}FA(d);A81=Ke();F_(34963,A81);g=Ci(d);e=new Int32Array(A3a.buffer);h=0;while(h<g){i=ABo(d);e[h]=i;h=h+1|0;}d=A3a.buffer;g=g*4|0;e=new Uint8Array(d,0,g);A2O.bufferData(34963,e,35044);}if(!A82.tx){A82.tx=1;F_(34963,A81);}g=(c*6|0)/4|0;b=
(b*6|0)/4|0;Y();A2O.drawElements(4,g,5123,b);}
function Ki(b,c){BO();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}A8L=2;break a;}A8L=1;}}}
function FP(b,c){BO();a:{switch(b){case 2914:break;case 2915:A8O=c;break a;case 2916:A8P=c;break a;default:break a;}A8Q=c;}}
function AJ1(b,c,d,e){var f,g,h;BO();f=FQ();g=b*0.01745329238474369*0.5;h=FG(g)/Fw(g);f.dW=h/c;f.dU=0.0;f.dV=0.0;f.dT=0.0;f.dZ=0.0;f.d0=h;f.dX=0.0;f.dY=0.0;f.d4=0.0;f.d2=0.0;b=e+d;c=e-d;f.d3=b/c;f.d1=(-1.0);f.f9=0.0;f.f$=0.0;f.f7=2.0*e*d/c;f.f8=0.0;}
function ASR(){var b,c,d;Y();A8s=1;A5o=AZM(256);A8t=0;A8u=0;A8v=0;A8w=0.10000000149011612;A8x=0;A8y=null;A8z=0;A8A=0;A8B=1.0;A8C=1.0;A8D=1.0;A8E=1.0;A8F=1.0;A8G=0.0;A8H=0.0;A8I=0.0;A8J=0.0;A8K=0;A4T=1.0;A4U=1.0;A4V=1.0;A4W=1.0;A8L=1;A8M=0;A8N=0;A8O=1.0;A8P=1.0;A8Q=1.0;A8R=0;A8S=0;A8T=0;A8U=5888;A8V=N(DW,32);A8W=0;A8X=N(DW,6);A8Y=0;A8Z=N(DW,16);A80=0;b=0;while(b<A8V.data.length){c=A8V.data;d=new DW;ED(d);c[b]=d;b=b+1|0;}b=0;while(b<A8X.data.length){c=A8X.data;d=new DW;ED(d);c[b]=d;b=b+1|0;}b=0;while(b<A8Z.data.length)
{c=A8Z.data;d=new DW;ED(d);c[b]=d;b=b+1|0;}A81=null;A82=null;A5n=CY();A83=CY();A84=new Rd;A85=new F5;A86=new F5;A87=new F5;A88=new F5;A5m=0;A89=null;A8$=new Int32Array(525000);A8_=null;A9a=null;A9b=null;A9c=null;A9d=null;A9e=AZM(256);d=new DW;ED(d);A9f=IW(d);A9g=$rt_createFloatArray(16);A9h=$rt_createFloatArray(16);d=new DW;ED(d);A9i=d;d=new DW;ED(d);A9j=d;A9k=new F5;A9l=Long_ZERO;A9m=0;}
function X$(){E.call(this);}
function A9o(){var a=new X$();ANW(a);return a;}
function ANW(a){return;}
function Dt(){var b,c;Y();if(!A3I)a:{A3i=null;if(!Nc(A21)){b=P5(A21,0);A3i=b;if(b!==null){c=1;break a;}}c=0;}else{Ma(A21);A3i=null;A3k.data[29]=0;A3k.data[157]=0;A3k.data[28]=0;A3k.data[219]=0;A3k.data[220]=0;A3I=0;c=0;}return c;}
function CD(){Y();return A3i===null?0:DT($rt_str(A3i.type),B(311))?0:1;}
function Bc(){Y();return A3i===null?(-1):Qv(A3i.which);}
function AKk(b){Y();A28=b;}
function BH(b){Y();if(A3I){A3k.data[28]=0;A3k.data[29]=0;A3k.data[157]=0;A3k.data[219]=0;A3k.data[220]=0;}return A3k.data[b];}
function Ln(){var a=this;E.call(a);a.pJ=0;a.rw=0;a.lJ=0;a.kf=0;a.g9=0;a.ik=0;a.d5=0;a.k9=0;a.lB=0;a.r5=null;a.rY=null;a.uW=null;a.ss=null;a.v3=null;a.eR=null;a.fC=null;a.yC=null;a.fs=null;a.yZ=null;a.zW=null;a.lT=null;a.yM=null;a.w7=0;a.iV=0;a.cf=0;}
var A9p=null;var A9q=null;function AZ$(a){var b=new Ln();AJG(b,a);return b;}
function AJG(a,b){var c,d;a.pJ=1;a.rw=1;a.lJ=0;a.kf=0;a.g9=0;a.ik=1;a.d5=0;a.k9=0;a.lB=1;a.r5=En(B(312),17);a.rY=En(B(313),30);a.uW=En(B(314),31);a.ss=En(B(315),32);a.v3=En(B(316),57);a.eR=En(B(317),23);a.fC=En(B(318),16);a.yC=En(B(319),20);a.fs=En(B(320),33);a.yZ=En(B(321),28);a.zW=En(B(322),19);c=N(Rx,11);d=c.data;d[0]=a.r5;d[1]=a.rY;d[2]=a.uW;d[3]=a.ss;d[4]=a.v3;d[5]=a.fC;d[6]=a.eR;d[7]=a.yC;d[8]=a.fs;d[9]=a.yZ;d[10]=a.zW;a.lT=c;a.w7=10;a.iV=2;a.cf=0;a.yM=b;}
function Jn(a,b){var c;c=new Bd;Bb(c);c=H(H(c,a.lT.data[b].AX),B(11));b=a.lT.data[b].by;Y();return O(H(c,b>=0&&b<256?A3E.data[b]:B(10)));}
function TU(a,b,c){a.lT.data[b].by=c;}
function DG(a,b,c){if(!b)a.pJ=a.pJ?0:1;if(b==1)a.rw=a.rw?0:1;if(b==2)a.lJ=a.lJ?0:1;if(b==3)a.kf=a.kf?0:1;if(b==4)a.g9=(a.g9+c|0)&3;if(b==5)a.ik=a.ik?0:1;if(b==6)a.d5=a.d5?0:1;if(b==7)a.k9=a.k9?0:1;if(b==8)a.iV=(a.iV+c|0)&3;if(b==9){a.lB=a.lB?0:1;Jx(a.yM.dB);}}
function N3(a,b){var c;a:{if(!b){c=new Bd;Bb(c);c=O(H(H(c,B(323)),!a.pJ?B(324):B(325)));break a;}if(b==1){c=new Bd;Bb(c);c=O(H(H(c,B(326)),!a.rw?B(324):B(325)));break a;}if(b==2){c=new Bd;Bb(c);c=O(H(H(c,B(327)),!a.lJ?B(324):B(325)));break a;}if(b==3){c=new Bd;Bb(c);c=O(H(H(c,B(328)),!a.kf?B(324):B(325)));break a;}if(b==4){c=new Bd;Bb(c);c=O(H(H(c,B(329)),A9p.data[a.g9]));break a;}if(b==5){c=new Bd;Bb(c);c=O(H(H(c,B(330)),!a.ik?B(324):B(325)));break a;}if(b==6){c=new Bd;Bb(c);c=O(H(H(c,B(331)),!a.d5?B(324):
B(325)));break a;}if(b==7){c=new Bd;Bb(c);c=O(H(H(c,B(332)),!a.k9?B(324):B(325)));break a;}if(b==8){c=new Bd;Bb(c);c=O(H(H(c,B(333)),A9q.data[a.iV]));break a;}if(b!=9){c=B(3);break a;}c=new Bd;Bb(c);c=O(H(H(c,B(334)),!a.lB?B(335):B(336)));}return c;}
function ATz(a){return;}
function ASw(a){return;}
function ACV(){var b,c;b=N(Cp,4);c=b.data;c[0]=B(337);c[1]=B(338);c[2]=B(339);c[3]=B(340);A9p=b;b=N(Cp,4);c=b.data;c[0]=B(341);c[1]=B(342);c[2]=B(343);c[3]=B(344);A9q=b;}
function G6(){var a=this;E.call(a);a.r6=null;a.oi=0;a.le=0;a.ng=0;a.nh=0;a.jR=0;a.jX=0;a.j$=0;a.yr=0;a.AO=0;a.z3=0;a.mx=0;a.nw=0;a.op=0;a.eT=0;a.gd=null;a.Bf=0;a.x2=0;a.Ag=0;a.Dm=0.0;a.h1=0;a.Bn=null;a.D$=0;a.vc=0;a.Fj=0;a.mY=0;a.jD=0;a.fD=null;a.ie=null;}
var A9r=null;var A3T=0;function P8(){P8=Bt(G6);AZD();}
function A07(a,b,c,d,e,f,g){var h=new G6();AD0(h,a,b,c,d,e,f,g);return h;}
function AD0(a,b,c,d,e,f,g,h){P8();a.oi=(-1);a.eT=0;a.gd=$rt_createBooleanArray(2);a.vc=1;a.jD=0;a.fD=Ck();a.r6=b;a.ie=c;a.j$=g;a.jX=g;a.jR=g;a.Dm=DF((Bg(a.jR,a.jR)+Bg(a.jX,a.jX)|0)+Bg(a.j$,a.j$)|0)/2.0;a.oi=h;a.le=(-999);Pn(a,d,e,f);a.h1=0;}
function Pn(a,b,c,d){var e,f;if(!(b==a.le&&c==a.ng&&d==a.nh)){M_(a);a.le=b;a.ng=c;a.nh=d;a.Bf=b+(a.jR/2|0)|0;a.x2=c+(a.jX/2|0)|0;a.Ag=d+(a.j$/2|0)|0;a.mx=b&1023;a.nw=c;a.op=d&1023;a.yr=b-a.mx|0;a.AO=c-a.nw|0;a.z3=d-a.op|0;a.Bn=Lf(b-2.0,c-2.0,d-2.0,(b+a.jR|0)+2.0,(c+a.jX|0)+2.0,(d+a.j$|0)+2.0);ET(a.oi+2|0,4864);e=Dy(a.mx-2.0,a.nw-2.0,a.op-2.0,(a.mx+a.jR|0)+2.0,(a.nw+a.jX|0)+2.0,(a.op+a.j$|0)+2.0);Bv();f=A3Q;Bu(f);Ba(f,e.N,e.Q,e.O);Ba(f,e.R,e.Q,e.O);Ba(f,e.R,e.I,e.O);Ba(f,e.N,e.I,e.O);Ba(f,e.N,e.I,e.S);Ba(f,e.R,
e.I,e.S);Ba(f,e.R,e.Q,e.S);Ba(f,e.N,e.Q,e.S);Ba(f,e.N,e.I,e.O);Ba(f,e.R,e.I,e.O);Ba(f,e.R,e.I,e.S);Ba(f,e.N,e.I,e.S);Ba(f,e.N,e.Q,e.S);Ba(f,e.R,e.Q,e.S);Ba(f,e.R,e.Q,e.O);Ba(f,e.N,e.Q,e.O);Ba(f,e.N,e.I,e.S);Ba(f,e.N,e.Q,e.S);Ba(f,e.N,e.Q,e.O);Ba(f,e.N,e.I,e.O);Ba(f,e.R,e.I,e.O);Ba(f,e.R,e.Q,e.O);Ba(f,e.R,e.Q,e.S);Ba(f,e.R,e.I,e.S);Bm(f);DL();Jf(a);}}
function YL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.h1)return;A3T=A3T+1|0;b=a.le;c=a.ng;d=a.nh;e=a.le+a.jR|0;f=a.ng+a.jX|0;g=a.nh+a.j$|0;h=0;while(h<2){a.gd.data[h]=1;h=h+1|0;}A9s=0;i=Fg();Dq(i,a.fD);DB(a.fD);j=new Ha;k
=a.r6;l=b-1|0;m=c-1|0;n=d-1|0;o=e+1|0;h=f+1|0;p=g+1|0;$p=1;case 1:ZR(j,k,l,m,n,o,h,p);if(C()){break _;}k=AXC(j);l=0;a:{while(true){if(l>=2)break a;q=0;r=0;s=0;t=c;while(t<f){m=d;while(m<g){n=b;if(n<e){$p=2;continue _;}m=m+1|0;}t=t+1|0;}if(!s)r=0;else{Bm(A9r);DL();Er(A9r,0.0,0.0,0.0);}if(r)a.gd.data[l]=0;if(!q)break;l=l+1|0;}}u=Fg();Dq(u,a.fD);EI(u,i);Dq(a.ie,u);EI(i,a.fD);Fk(a.ie,i);a.mY=A9s;a.jD=1;return;case 2:$z=Go(j,n,t,m);if(C()){break _;}p=$z;if(p>0){if(!s){s=1;ET(a.oi+l|0,4864);Bu(A9r);Er(A9r,a.mx-a.le
|0,a.nw-a.ng|0,a.op-a.nh|0);}if(!l){J();if(A3U.data[p] instanceof DM){$p=3;continue _;}}J();v=A3U.data[p];o=S(v.oc(),l);if(o)q=1;else if(!o){$p=4;continue _;}}n=n+1|0;b:{c:while(true){if(n<e){continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Bm(A9r);DL();Er(A9r,0.0,0.0,0.0);}if(r)a.gd.data[l]=0;if(!q)break c;l=l+1|0;if(l>=2)break b;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Fg();Dq(u,a.fD);EI(u,i);Dq(a.ie,u);EI(i,a.fD);Fk(a.ie,i);a.mY=A9s;a.jD=1;return;case 3:$z=AA_(j,n,t,m);if(C()){break _;}w=$z;if(ADd(A9t,
w))U(a.fD,w);J();v=A3U.data[p];o=S(v.oc(),l);if(o)q=1;else if(!o){$p=4;continue _;}n=n+1|0;d:{e:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Bm(A9r);DL();Er(A9r,0.0,0.0,0.0);}if(r)a.gd.data[l]=0;if(!q)break e;l=l+1|0;if(l>=2)break d;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Fg();Dq(u,a.fD);EI(u,i);Dq(a.ie,u);EI(i,a.fD);Fk(a.ie,i);a.mY=A9s;a.jD=1;return;case 4:$z=AIv(k,v,n,t,m);if(C()){break _;}o=$z;r=r|o;n=n+1|0;a:{f:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g)
{t=t+1|0;while(t>=f){if(!s)r=0;else{Bm(A9r);DL();Er(A9r,0.0,0.0,0.0);}if(r)a.gd.data[l]=0;if(!q)break f;l=l+1|0;if(l>=2)break a;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Fg();Dq(u,a.fD);EI(u,i);Dq(a.ie,u);EI(i,a.fD);Fk(a.ie,i);a.mY=A9s;a.jD=1;return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function F3(a,b){var c,d,e;c=b.c-a.Bf;d=b.i-a.x2;e=b.d-a.Ag;return c*c+d*d+e*e;}
function M_(a){var b;b=0;while(b<2){a.gd.data[b]=1;b=b+1|0;}a.eT=0;a.jD=0;}
function ALR(a){M_(a);a.r6=null;}
function M3(a,b){return !a.eT?(-1):a.gd.data[b]?(-1):a.oi+b|0;}
function AMi(a,b){a.eT=KG(b,a.Bn);}
function ACE(a){return !a.jD?0:a.gd.data[0]&&a.gd.data[1]?1:0;}
function Jf(a){a.h1=1;}
function AZD(){Bv();A9r=A3Q;A3T=0;}
function AH2(){var a=this;E.call(a);a.S3=null;a.Jr=null;}
function AMj(){var a=this;Ej.call(a);a.is=null;a.kw=0;}
function AW8(){var a=new AMj();AP_(a);return a;}
function AYS(a){var b=new AMj();UO(b,a);return b;}
function AP_(a){UO(a,32);}
function UO(a,b){a.is=$rt_createByteArray(b);}
function AXg(a,b){var c,d;OA(a,a.kw+1|0);c=a.is.data;d=a.kw;a.kw=d+1|0;c[d]=b<<24>>24;}
function Oy(a,b,c,d){var e,f,g,h,i;OA(a,a.kw+d|0);e=0;while(e<d){f=b.data;g=a.is.data;h=a.kw;a.kw=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function OA(a,b){if(a.is.data.length<b){b=DU(b,(a.is.data.length*3|0)/2|0);a.is=ALp(a.is,b);}}
function GX(a){return ALp(a.is,a.kw);}
function Ii(){B5.call(this);}
function A9u(){var a=new Ii();AVJ(a);return a;}
function AVJ(a){R(a);}
function LW(){}
function FL(){var a=this;E.call(a);a.e2=null;a.dt=null;a.kN=null;a.fZ=null;a.jM=null;a.e0=null;a.dG=Long_ZERO;a.qA=Long_ZERO;a.q2=Long_ZERO;a.pH=Long_ZERO;a.fA=0;a.g4=0;a.qr=0;a.qz=0;a.bc=null;a.h0=0;a.zN=null;a.n=null;a.eJ=0;a.oj=0;a.eI=0;a.rO=0;a.b$=null;a.hN=null;a.kk=Long_ZERO;a.ru=null;a.up=Long_ZERO;a.EG=null;a.lR=null;a.oD=null;}
var A9v=null;var A9w=null;function A9x(a,b){var c=new FL();N4(c,a,b);return c;}
function AMl(b){var c,d,e,f,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=new Bd;Bb(c);c=O(H(H(c,b),B(345)));$p=1;case 1:$z=AGo(c);if(C()){break _;}d=$z;c=Ds();e=new Bd;Bb(e);B$(c,O(H(H(e,b),B(345))));if(d===null)return null;a:{try{e=Kz(KP(Mw(QI(d))),B(346));}catch($$e){$$je=Bh($$e);if($$je instanceof B3){f=$$je;break a;}else{throw $$e;}}return e;}BZ(f);return null;default:Eq();}}CL().s(b,c,d,e,f,$p);}
function N4(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e2=Ck();a.dt=Ck();a.kN=Ck();a.fZ=A1q();a.jM=Fg();a.e0=Ck();a.dG=Long_ZERO;a.qA=Long_fromInt(8961023);a.q2=Long_fromInt(12638463);a.pH=Long_fromInt(16777215);a.fA=0;a.g4=JC(new De);a.qr=1013904223;a.qz=0;a.n=new De;a.rO=0;a.b$=Ck();a.kk=Long_ZERO;a.up=Long_ZERO;a.lR=Ck();a.oD=Ck();a.EG=b;A9w=b;b=new Bd;Bb(b);b=O(H(H(b,
A9w),B(345)));$p=1;case 1:$z=AGo(b);if(C()){break _;}d=$z;b=Ds();e=new Bd;Bb(e);B$(b,O(H(H(e,A9w),B(345))));f=d!==null?1:0;a:{a.rO=f;if(d!==null){try{g=Kz(KP(Mw(QI(d))),B(346));a.kk=Kj(g,B(347));a.eJ=E6(g,B(348));a.oj=E6(g,B(349));a.eI=E6(g,B(350));a.dG=Kj(g,B(351));a.up=Kj(g,B(352));a.ru=Kz(g,B(5));break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){h=$$je;}else{throw $$e;}}BZ(h);}}f=0;if(Long_eq(a.kk,Long_ZERO)){a.kk=c;f=1;}a.hN=WX(a,A9w);if(!f){Od(a);return;}a.eJ=0;a.oj=64;a.eI=0;f=a.eJ;i=a.eI;$p=2;case 2:$z
=AEG(a,f,i);if(C()){break _;}f=$z;J();if(f!=A4f.b?0:1){Od(a);return;}a.eJ=a.eJ+(D(a.n,64)-D(a.n,64)|0)|0;a.eI=a.eI+(D(a.n,64)-D(a.n,64)|0)|0;f=a.eJ;i=a.eI;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function WX(a,b){var c,d,e;c=new R6;d=new Tf;d.qh=b;e=new Pt;e.Cj=$rt_createIntMultiArray([32,32]);e.o=a;e.a=new De;e.wi=F7(e.a,16);e.wj=F7(e.a,16);e.wh=F7(e.a,8);e.rW=F7(e.a,4);e.wl=F7(e.a,4);e.wm=F7(e.a,10);e.wk=F7(e.a,16);e.hT=F7(e.a,8);c.T=N(HB,1024);c.eQ=(-999999999);c.fd=(-999999999);c.ke=AYl(a,$rt_createByteArray(32768),0,0);c.ke.AM=1;c.ke.ov=1;c.ko=a;c.gh=d;c.hS=e;return c;}
function AKt(a){var b,c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.eJ;c=a.eI;$p=1;case 1:$z=AEG(a,b,c);if(C()){break _;}b=$z;if(b)return;a.eJ=a.eJ+(D(a.n,8)-D(a.n,8)|0)|0;a.eI=a.eI+(D(a.n,8)-D(a.n,8)|0)|0;b=a.eJ;c=a.eI;continue _;default:Eq();}}CL().s(a,b,c,$p);}
function AEG(a,b,c){var d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=63;e=d+1|0;$p=1;case 1:$z=X4(a,b,e,c);if(C()){break _;}f=$z;if(!f){$p=2;continue _;}d=e;e=d+1|0;continue _;case 2:$z=X4(a,b,d,c);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ABC(a){var b,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{if(a.ru!==null){UG(a.bc,a.ru);a.ru=null;}b=a.bc;$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){b=$$je;}else{throw $$e;}}BZ(b);return;case 1:a:{try{AIM(a,b);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){b=$$je;}else{throw $$e;}}BZ(b);}return;default:Eq();}}CL().s(a,b,$p);}
function Xc(a,b,c){var d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null)Uw(c,B(353));$p=1;case 1:AHm(a);if(C()){break _;}if(c===null){d=a.hN;$p=2;continue _;}d=B(354);$p=3;continue _;case 2:AIt(d,b,c);if(C()){break _;}return;case 3:AMd(c,d);if(C()){break _;}d=a.hN;$p=2;continue _;default:Eq();}}CL().s(a,b,c,d,$p);}
function AHm(a){var b,c,d,e,f,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=F6();GU(b,B(347),a.kk);FD(b,B(348),a.eJ);FD(b,B(349),a.oj);FD(b,B(350),a.eI);GU(b,B(351),a.dG);GU(b,B(352),a.up);GU(b,B(355),B1());if(a.bc!==null){c=F6();AGd(a.bc,c);AIo(b,B(5),c);}c=F6();Gv(c,B(346),b);try{b=O(H(H(BS(),A9w),B(356)));$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BZ(d);return;case 1:try
{AGo(b);if(C()){break _;}b=O(H(H(BS(),A9w),B(357)));$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BZ(d);return;case 2:try{AGo(b);if(C()){break _;}b=O(H(H(BS(),A9w),B(345)));$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BZ(d);return;case 3:try{AGo(b);if(C()){break _;}e=AYS(131072);O2(c,APd(e));b=O(H(H(BS(),A9w),B(356)));f=GX(e);$p=4;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BZ(d);return;case 4:try
{X8(b,f);if(C()){break _;}b=O(H(H(BS(),A9w),B(357)));$p=5;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BZ(d);return;case 5:try{$z=AGo(b);if(C()){break _;}f=$z;if(f!==null){b=O(H(H(BS(),A9w),B(357)));$p=8;continue _;}b=O(H(H(BS(),A9w),B(345)));c=O(H(H(BS(),A9w),B(357)));$p=6;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BZ(d);return;case 6:try{AHT(b,c);if(C()){break _;}b=O(H(H(BS(),A9w),B(345)));$p=7;continue _;}catch($$e){$$je=Bh($$e);if
($$je instanceof Bz){d=$$je;}else{throw $$e;}}BZ(d);return;case 7:try{$z=AGo(b);if(C()){break _;}f=$z;if(f!==null){b=O(H(H(BS(),A9w),B(345)));$p=11;continue _;}b=O(H(H(BS(),A9w),B(356)));c=O(H(H(BS(),A9w),B(345)));$p=9;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BZ(d);return;case 8:try{AGK(b);if(C()){break _;}b=O(H(H(BS(),A9w),B(345)));c=O(H(H(BS(),A9w),B(357)));$p=6;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BZ(d);return;case 9:try
{AHT(b,c);if(C()){break _;}b=O(H(H(BS(),A9w),B(356)));$p=10;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BZ(d);return;case 10:a:{try{$z=AGo(b);if(C()){break _;}f=$z;if(f===null)break a;b=O(H(H(BS(),A9w),B(356)));$p=12;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BZ(d);}return;case 11:try{AGK(b);if(C()){break _;}b=O(H(H(BS(),A9w),B(356)));c=O(H(H(BS(),A9w),B(345)));$p=9;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){d=$$je;}
else{throw $$e;}}BZ(d);return;case 12:a:{try{AGK(b);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BZ(d);}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Wn(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b){$p=2;continue _;}c=a.hN;b=0;d=null;$p=1;case 1:$z=AIt(c,b,d);if(C()){break _;}b=$z;return b;case 2:AHm(a);if(C()){break _;}c=a.hN;b=0;d=null;$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,$p);}
function X4(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)b=0;else{if(c<128){e=b>>4;f=d>>4;$p=1;continue _;}b=0;}}else b=0;return b;case 1:$z=VD(a,e,f);if(C()){break _;}g=$z;return Ec(g,b&15,c,d&15);default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function D8(a,b,c,d){return c>=0&&c<128?CM(a,b>>4,d>>4):0;}
function GZ(a,b,c,d,e,f,g){var h,i;if(f>=0&&c<128){h=b>>4;b=d>>4;c=e>>4;d=g>>4;while(h<=c){i=b;while(i<=d){if(!CM(a,h,i))return 0;i=i+1|0;}h=h+1|0;}return 1;}return 0;}
function CM(a,b,c){return BJ(a.hN,b,c);}
function TM(a,b,c){var d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b>>4;b=c>>4;$p=1;case 1:$z=VD(a,d,b);if(C()){break _;}e=$z;return e;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function VD(a,b,c){var d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.hN;$p=1;case 1:$z=AIK(d,b,c);if(C()){break _;}d=$z;return d;default:Eq();}}CL().s(a,b,c,d,$p);}
function AEe(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;g=b>>4;h=d>>4;$p=1;continue _;}return 0;case 1:$z=VD(a,g,h);if(C()){break _;}i=$z;b=b&15;d=d&15;$p=2;case 2:$z=Y8(i,b,c,d,e,f);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AGb(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=VD(a,f,g);if(C()){break _;}h=$z;g=b&15;b=d&15;$p=2;case 2:$z=Y5(h,g,c,b,e);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function Xw(a,b,c,d){var e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X4(a,b,c,d);if(C()){break _;}e=$z;if(!e)f=A5b;else{J();f=A3U.data[e].bR;}return f;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Z5(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;e=b>>4;f=d>>4;$p=1;continue _;}return 0;case 1:$z=VD(a,e,f);if(C()){break _;}g=$z;return OX(g,b&15,c,d&15);default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function XO(a,b,c,d,e){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFj(a,b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AFj(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=VD(a,f,g);if(C()){break _;}h=$z;V$(h,b&15,c,d&15,e);return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AJ0(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGb(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:Z8(a,b,c,d,e);if(C()){break _;}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ADQ(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEe(a,b,c,d,e,f);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:Z8(a,b,c,d,e);if(C()){break _;}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Z8(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;while(f<a.b$.p){Ov(Z(a.b$,f),b,c,d);f=f+1|0;}$p=1;case 1:ACR(a,b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AKa(a,b,c,d,e){var f;if(d<=e){f=d;d=e;e=f;}HP(a,b,e,c,b,d,c);}
function HP(a,b,c,d,e,f,g){var h;h=0;while(h<a.b$.p){AI9(Z(a.b$,h),b,c,d,e,f,g);h=h+1|0;}}
function ACR(a,b,c,d,e){var f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b-1|0;$p=1;case 1:AJw(a,f,c,d,e);if(C()){break _;}f=b+1|0;$p=2;case 2:AJw(a,f,c,d,e);if(C()){break _;}f=c-1|0;$p=3;case 3:AJw(a,b,f,d,e);if(C()){break _;}f=c+1|0;$p=4;case 4:AJw(a,b,f,d,e);if(C()){break _;}f=d-1|0;$p=5;case 5:AJw(a,b,c,f,e);if(C()){break _;}d=d+1|0;$p=6;case 6:AJw(a,b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,
$p);}
function AJw(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qz)return;J();f=A3U.data;$p=1;case 1:$z=X4(a,b,c,d);if(C()){break _;}g=$z;h=f[g];if(h===null)return;$p=2;case 2:h.ep(a,b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function ABs(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=VD(a,e,f);if(C()){break _;}g=$z;return MT(g,b&15,c,d&15);default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Tr(a,b,c,d){var e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=1;$p=1;case 1:$z=AK5(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AK5(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(e){$p=1;continue _;}if(c<0)return 0;if(c>=128){f=15-a.fA|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}return 15;case 1:$z=X4(a,b,c,d);if(C()){break _;}f=$z;J();if(f!=A3Z.b&&f!=A55.b){if(c<0)return 0;if(c>=128){f=15-
a.fA|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}e=c+1|0;g=0;$p=2;case 2:$z=AK5(a,b,e,d,g);if(C()){break _;}h=$z;e=b+1|0;g=0;$p=3;case 3:$z=AK5(a,e,c,d,g);if(C()){break _;}g=$z;e=b-1|0;i=0;$p=4;case 4:$z=AK5(a,e,c,d,i);if(C()){break _;}i=$z;e=d+1|0;j=0;$p=5;case 5:$z=AK5(a,b,c,e,j);if(C()){break _;}j=$z;d=d-1|0;e=0;$p=6;case 6:$z=AK5(a,b,c,d,e);if(C()){break _;}k=$z;if(g<=h)g=h;if(i<=g)i=g;if(j<=i)j=i;if(k<=j)k=j;return k;case 7:$z=VD(a,g,e);if(C()){break _;}l=$z;return RX(l,b&15,c,d&15,a.fA);default:
Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Vi(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 1;e=b>>4;f=d>>4;if(!CM(a,e,f))return 0;$p=1;continue _;}return 0;case 1:$z=VD(a,e,f);if(C()){break _;}g=$z;return MT(g,b&15,c,d&15);default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AGp(a,b,c){var d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&c>=(-32000000)&&b<32000000&&c<=32000000){d=b>>4;e=c>>4;if(!CM(a,d,e))return 0;$p=1;continue _;}return 0;case 1:$z=VD(a,d,e);if(C()){break _;}f=$z;return Q0(f,b&15,c&15);default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AKx(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!D8(a,c,d,e))return;if(b===A9y){$p=1;continue _;}if(b===A9z){$p=2;continue _;}$p=3;continue _;case 1:$z=Vi(a,c,d,e);if(C()){break _;}g=$z;if(g)f=15;$p=3;continue _;case 2:$z=X4(a,c,d,e);if(C()){break _;}g=$z;J();if(A5F.data[g]>f)f=A5F.data[g];$p=3;case 3:$z=AF4(a,b,c,d,e);if(C()){break _;}g=$z;if(g==f)return;$p=4;case 4:UV(a,b,c,d,e,c,d,
e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AF4(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=0&&d<128&&c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000){f=c>>4;g=e>>4;if(!CM(a,f,g))return 0;$p=1;continue _;}return b.xo;case 1:$z=VD(a,f,g);if(C()){break _;}h=$z;return XT(h,b,c&15,d,e&15);default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AG8(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000&&d>=0&&d<128){g=c>>4;h=e>>4;if(CM(a,g,h)){$p=1;continue _;}}return;case 1:$z=VD(a,g,h);if(C()){break _;}i=$z;AK6(i,b,c&15,d,e&15,f);g=0;while(g<a.b$.p){Ov(Z(a.b$,g),c,d,e);g=g+1|0;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AHP(a,b,c,d){var e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=A9v.data;$p=1;case 1:$z=Tr(a,b,c,d);if(C()){break _;}b=$z;return e[b];default:Eq();}}CL().s(a,b,c,d,e,$p);}
function OE(a){return a.fA>=4?0:1;}
function AEd(a,b,c){var d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;$p=1;case 1:$z=AAl(a,b,c,d);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,$p);}
function AAl(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(isNaN(b.t)?1:0)&&!(isNaN(b.v)?1:0)&&!(isNaN(b.s)?1:0)){if(!(isNaN(c.t)?1:0)&&!(isNaN(c.v)?1:0)&&!(isNaN(c.s)?1:0)){e
=I(c.t);f=I(c.v);g=I(c.s);h=I(b.t);i=I(b.v);j=I(b.s);k=20+(-1)|0;if(20<0)return null;if(!(isNaN(b.t)?1:0)&&!(isNaN(b.v)?1:0)&&!(isNaN(b.s)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=S(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=S(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=S(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.t-b.t;u=c.v-b.v;v=c.s-b.s;if(l!==999.0)q=(l-b.t)/t;if(m!==999.0)r=(m-b.v)/u;if(n!==999.0)s=(n-b.s)/v;if(q<r&&q<s){o=o<=0?5:4;b.t=l;b.v=b.v+u*q;b.s=b.s+v*q;}else if(r>=
s){o=i<=0?3:2;b.t=b.t+t*s;b.v=b.v+u*s;b.s=n;}else{o=p<=0?1:0;b.t=b.t+t*r;b.v=m;b.s=b.s+v*r;}w=BR(b.t,b.v,b.s);v=I(b.t);w.t=v;h=v|0;if(o==5){h=h+(-1)|0;w.t=w.t+1.0;}v=I(b.v);w.v=v;i=v|0;if(o==1){i=i+(-1)|0;w.v=w.v+1.0;}v=I(b.s);w.s=v;j=v|0;if(o==3){j=j+(-1)|0;w.s=w.s+1.0;}$p=1;continue _;}return null;}return null;}return null;case 1:$z=X4(a,h,i,j);if(C()){break _;}x=$z;$p=2;case 2:$z=Z5(a,h,i,j);if(C()){break _;}y=$z;J();z=A3U.data[x];if(x>0&&z.nz(y,d)){$p=5;continue _;}o=i-1|0;$p=3;case 3:$z=X4(a,h,o,j);if(C())
{break _;}p=$z;$p=4;case 4:$z=Z5(a,h,o,j);if(C()){break _;}x=$z;w=A3U.data[p];if(p>0&&w.nz(x,d)){$p=6;continue _;}p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.t)?1:0)&&!(isNaN(b.v)?1:0)&&!(isNaN(b.s)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=S(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=S(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=S(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.t-b.t;u=c.v-b.v;v=c.s-b.s;if(l!==999.0)q=(l-b.t)/t;if(m!==999.0)r=(m-b.v)/u;if(n!==999.0)s=(n-b.s)/v;if
(q<r&&q<s){o=o<=0?5:4;b.t=l;b.v=b.v+u*q;b.s=b.s+v*q;}else if(r>=s){o=i<=0?3:2;b.t=b.t+t*s;b.v=b.v+u*s;b.s=n;}else{o=p<=0?1:0;b.t=b.t+t*r;b.v=m;b.s=b.s+v*r;}w=BR(b.t,b.v,b.s);v=I(b.t);w.t=v;h=v|0;if(o==5){h=h+(-1)|0;w.t=w.t+1.0;}v=I(b.v);w.v=v;i=v|0;if(o==1){i=i+(-1)|0;w.v=w.v+1.0;}v=I(b.s);w.s=v;j=v|0;if(o==3){j=j+(-1)|0;w.s=w.s+1.0;}$p=1;continue _;}return null;case 5:$z=z.mj(a,h,i,j,b,c);if(C()){break _;}ba=$z;if(ba!==null)return ba;o=i-1|0;$p=3;continue _;case 6:$z=w.mj(a,h,o,j,b,c);if(C()){break _;}ba=$z;if
(ba!==null)return ba;p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.t)?1:0)&&!(isNaN(b.v)?1:0)&&!(isNaN(b.s)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=S(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=S(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=S(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.t-b.t;u=c.v-b.v;v=c.s-b.s;if(l!==999.0)q=(l-b.t)/t;if(m!==999.0)r=(m-b.v)/u;if(n!==999.0)s=(n-b.s)/v;if(q<r&&q<s){o=o<=0?5:4;b.t=l;b.v=b.v+u*q;b.s=b.s+v*q;}else if(r>=s){o=i<=0?3:2;b.t=b.t+t*s;b.v
=b.v+u*s;b.s=n;}else{o=p<=0?1:0;b.t=b.t+t*r;b.v=m;b.s=b.s+v*r;}w=BR(b.t,b.v,b.s);v=I(b.t);w.t=v;h=v|0;if(o==5){h=h+(-1)|0;w.t=w.t+1.0;}v=I(b.v);w.v=v;i=v|0;if(o==1){i=i+(-1)|0;w.v=w.v+1.0;}v=I(b.s);w.s=v;j=v|0;if(o==3){j=j+(-1)|0;w.s=w.s+1.0;}$p=1;continue _;}return null;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function C2(a,b,c,d,e){var f,g,h;f=0;g=S(d,1.0);e=16.0*d;while(f<a.b$.p){h=16.0;if(g>0)h=e;if(JO(a.bc,b)<h*h)Z(a.b$,f);f=f+1|0;}}
function D0(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$$je;a:{b:{try{h=0;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){i=$$je;break b;}else{throw $$e;}}j=S(f,1.0);k=16.0*f;while(true){try{if(h>=CZ(a.b$))break;l=16.0;if(j>0)l=k;m=b-a.bc.c;n=c-a.bc.i;o=d-a.bc.d;if(m*m+n*n+o*o<l*l)Yv(Z(a.b$,h),e,b,c,d,f,g);h=h+1|0;continue;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){i=$$je;break b;}else{throw $$e;}}}break a;}BZ(i);}}
function AM_(a,b,c,d,e,f){return;}
function BP(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.b$.p){AC5(Z(a.b$,i),b,c,d,e,f,g,h);i=i+1|0;}}
function AIM(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(b.c/16.0);d=I(b.d/16.0);if(!CM(a,c,d)){e=Ds();f=new Bd;Bb(f);B$(e,O(EY(H(f,B(358)),b)));return;}$p=1;case 1:$z=VD(a,c,d);if(C()){break _;}e=$z;R0(e,b);U(a.dt,b);g=0;while(g<a.b$.p){Z(a.b$,g);g=g+1|0;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AOp(a,b){B4(b);}
function AH_(a,b){U(a.b$,b);}
function AFF(a,b){GT(a.b$,b);}
function TK(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DB(a.lR);d=I(c.N);e=I(c.R+1.0);f=I(c.I);g=I(c.Q+1.0);h=I(c.O);i=I(c.S+1.0);f=f-1|0;while(d<e){j=f;while(j<g){k=h;if(k<i){J();l=A3U.data;$p=2;continue _;}j=j+1|0;}d=d+1|0;}c=Da(c,0.25,0.25,0.25);$p=1;case 1:$z=Zc(a,b,c);if(C()){break _;}m=$z;n=0;while
(n<m.p){o=Z(m,n).ym();if(o!==null)U(a.lR,o);c=b.xZ(Z(m,n));if(c!==null)U(a.lR,c);n=n+1|0;}return a.lR;case 2:$z=X4(a,d,j,k);if(C()){break _;}n=$z;p=l[n];if(p!==null){m=a.lR;$p=3;continue _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Da(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}J();l=A3U.data;continue _;case 3:p.BR(a,d,j,k,c,m);if(C()){break _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Da(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}J();l=A3U.data;$p=2;continue _;default:Eq();}}CL().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function L6(a,b){var c;c=1.0-(Bx(Gn(a,b)*3.1415927410125732*2.0)*2.0+0.5);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*11.0|0;}
function Mq(a,b){var c,d,e,f;c=Bx(Gn(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.qA,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.qA,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.qA,Long_fromInt(255)))/255.0;return BR(d*c,e*c,f*c);}
function Gn(a,b){var c;c=(Long_rem(a.dG,Long_fromInt(24000)).lo+b)/24000.0-0.25;if(c<0.0)c=c+1.0;if(c>1.0)c=c-1.0;return c+(1.0-(FG(c*3.141592653589793)+1.0)/2.0-c)/3.0;}
function PT(a,b){var c,d,e,f;c=Bx(Gn(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.pH,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.pH,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.pH,Long_fromInt(255)))/255.0;b=c*0.8999999761581421+0.10000000149011612;return BR(d*b,e*b,f*(c*0.8500000238418579+0.15000000596046448));}
function YV(a,b){var c,d,e,f;c=Bx(Gn(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.q2,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.q2,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.q2,Long_fromInt(255)))/255.0;b=c*0.9399999976158142+0.05999999865889549;return BR(d*b,e*b,f*(c*0.9100000262260437+0.09000000357627869));}
function AXG(a,b,c){return 64;}
function AEi(a,b){var c;c=1.0-(Bx(Gn(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*c*0.5;}
function EC(a,b,c,d,e){var f,g;f=new Im;g=A9A;A9A=Long_add(g,Long_fromInt(1));f.no=g;f.e4=b;f.eN=c;f.e8=d;f.ou=e;if(GZ(a,b-8|0,c-8|0,d-8|0,b+8|0,c+8|0,d+8|0)){if(e>0){J();f.ih=Long_add(Long_fromInt(A3U.data[e].k_()),a.dG);}if(!Sx(a.jM,f)){Tb(a.jM,f);U7(a.fZ,f);}}}
function AJJ(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Fk(a.dt,a.kN);b=0;while(b<a.b$.p){Z(a.b$,b);c=0;while(c<a.kN.p){Z(a.kN,c);c=c+1|0;}b=b+1|0;}DB(a.kN);b=0;a:while(true){if(b>=a.dt.p){b=0;if(b>=a.e0.p)return;d=Z(a.e0,b);$p=1;continue _;}b:{e=Z(a.dt,b);if(e.bt!==null){if(!e.bt.cs&&e.bt.bx===e)break b;e.bt.bx=null;e.bt=null;}if(!e.cs){$p=2;continue _;}if(e.cs){c=I(e.c/16.0);f=I(e.d/16.0);if(CM(a,
c,f))break a;d=a.dt;c=b+(-1)|0;Em(d,b);g=0;while(g<a.b$.p){Z(a.b$,g);g=g+1|0;}b=c;}}b=b+1|0;}$p=3;continue _;case 1:d.rV();if(C()){break _;}b=b+1|0;if(b>=a.e0.p)return;d=Z(a.e0,b);continue _;case 2:To(a,e);if(C()){break _;}while(true){if(e.cs){c=I(e.c/16.0);f=I(e.d/16.0);if(CM(a,c,f)){$p=3;continue _;}d=a.dt;c=b+(-1)|0;Em(d,b);g=0;while(g<a.b$.p){Z(a.b$,g);g=g+1|0;}b=c;}b:{while(true){b=b+1|0;if(b>=a.dt.p){b=0;if(b>=a.e0.p)return;d=Z(a.e0,b);$p=1;continue _;}e=Z(a.dt,b);if(e.bt===null)break b;if(e.bt.cs)break;if
(e.bt.bx!==e)break;}e.bt.bx=null;e.bt=null;}if(e.cs)continue;else break;}continue _;case 3:$z=VD(a,c,f);if(C()){break _;}d=$z;AHx(d,e);while(true){d=a.dt;c=b+(-1)|0;Em(d,b);g=0;while(g<a.b$.p){Z(a.b$,g);g=g+1|0;}b=c;while(true){b=b+1|0;if(b>=a.dt.p){b=0;if(b>=a.e0.p)return;d=Z(a.e0,b);$p=1;continue _;}e=Z(a.dt,b);if(e.bt!==null){if(!e.bt.cs&&e.bt.bx===e)continue;e.bt.bx=null;e.bt=null;}if(!e.cs){$p=2;continue _;}if(e.cs)break;}c=I(e.c/16.0);f=I(e.d/16.0);if(!CM(a,c,f))continue;else break;}continue _;default:
Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function To(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(b.c);I(b.i);d=I(b.d);if(!GZ(a,c-16|0,0,d-16|0,c+16|0,128,d+16|0))return;b.b6=b.c;b.bP=b.i;b.b7=b.d;b.K=b.q;b.P=b.E;e=I(b.c/16.0);f=I(b.i/16.0);g=I(b.d/16.0);if(b.bt===null){$p=1;continue _;}$p=2;continue _;case 1:b.dR();if(C()){break _;}h=I(b.c/16.0);i=I(b.i/16.0);j=I(b.d/16.0);if(e==h&&f==i&&g
==j){if(b.bx!==null){if(!b.bx.cs&&b.bx.bt===b){k=b.bx;$p=6;continue _;}b.bx.bt=null;b.bx=null;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.i)?1:0)&&!(!isFinite(b.i)?1:0)))b.i=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;}if(CM(a,e,g)){$p=3;continue _;}if(!CM(a,h,j)){$p=4;continue _;}$p=5;continue _;case 2:b.yA();if(C()){break _;}h=I(b.c/16.0);i=I(b.i
/16.0);j=I(b.d/16.0);if(e==h&&f==i&&g==j){if(b.bx!==null){if(!b.bx.cs&&b.bx.bt===b){k=b.bx;$p=6;continue _;}b.bx.bt=null;b.bx=null;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.i)?1:0)&&!(!isFinite(b.i)?1:0)))b.i=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;}if(CM(a,e,g)){$p=3;continue _;}if(!CM(a,h,j)){$p=4;continue _;}$p=5;continue _;case 3:$z=VD(a,
e,g);if(C()){break _;}k=$z;O5(k,b,f);if(!CM(a,h,j)){$p=4;continue _;}$p=5;continue _;case 4:b.zL();if(C()){break _;}if(b.bx!==null){if(!b.bx.cs&&b.bx.bt===b){k=b.bx;$p=6;continue _;}b.bx.bt=null;b.bx=null;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.i)?1:0)&&!(!isFinite(b.i)?1:0)))b.i=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;case 5:$z=VD(a,h,j);if
(C()){break _;}k=$z;R0(k,b);if(b.bx!==null){if(!b.bx.cs&&b.bx.bt===b){k=b.bx;$p=6;continue _;}b.bx.bt=null;b.bx=null;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.i)?1:0)&&!(!isFinite(b.i)?1:0)))b.i=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;case 6:To(a,k);if(C()){break _;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.i)?1:0)
&&!(!isFinite(b.i)?1:0)))b.i=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AHC(a,b){var c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:$z=Zc(a,c,b);if(C()){break _;}c=$z;d=0;while(d<c.p){e=Z(c,d);if(!e.cs&&e.lg)return 0;d=d+1|0;}return 1;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AEb(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(b.N);d=I(b.R+1.0);e=I(b.I);f=I(b.Q+1.0);g=I(b.O);h=I(b.S+1.0);if(b.N<0.0)c=c+(-1)|0;if(b.I<0.0)e=e+(-1)|0;if(b.O<0.0)g=g+(-1)|0;while(c<d){i=e;while(i<f){j=g;if(j<h){J();k=A3U.data;$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=X4(a,c,i,j);if(C()){break _;}l=$z;m=k[l];if
(m!==null&&m.bR.me())return 1;j=j+1|0;a:while(true){if(j<h){J();k=A3U.data;continue _;}i=i+1|0;while(i>=f){c=c+1|0;if(c>=d)break a;i=e;}j=g;}return 0;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ALn(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(b.N);d=I(b.R+1.0);e=I(b.I);f=I(b.Q+1.0);g=I(b.O);h=I(b.S+1.0);while(c<d){i=e;while(i<f){j=g;if(j<h){$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=X4(a,c,i,j);if(C()){break _;}k=$z;J();if(k!=A5r.b&&k!=A40.b&&k!=A5H.b){j=j+1|0;a:while(true){if(j<h){continue _;}i=i+1|0;while(i>=f){c=c+1|0;if
(c>=d)break a;i=e;}j=g;}return 0;}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function V8(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=I(b.N);f=I(b.R+1.0);g=I(b.I);h=I(b.Q+1.0);i=I(b.O);j=I(b.S+1.0);k=0;l=BR(0.0,0.0,0.0);m=h;while(e<f){n=g;while(n<h){o=i;if(o<j){J();p=A3U.data;$p=1;continue _;}n=n+1|0;}e=e+1|0;}if(GE(l)>0.0){b=Cs(l);d.f=d.f+b.t
*0.004;d.h=d.h+b.v*0.004;d.g=d.g+b.s*0.004;}return k;case 1:$z=X4(a,e,n,o);if(C()){break _;}q=$z;r=p[q];if(r!==null&&r.bR===c){s=n+1|0;$p=2;continue _;}o=o+1|0;a:while(true){if(o<j){J();p=A3U.data;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break a;n=g;}o=i;}if(GE(l)>0.0){b=Cs(l);d.f=d.f+b.t*0.004;d.h=d.h+b.v*0.004;d.g=d.g+b.s*0.004;}return k;case 2:$z=Z5(a,e,n,o);if(C()){break _;}q=$z;if(m>=s-HX(q)){k=1;$p=3;continue _;}o=o+1|0;b:while(true){if(o<j){J();p=A3U.data;$p=1;continue _;}n=n+1|0;while(n>=h){e
=e+1|0;if(e>=f)break b;n=g;}o=i;}if(GE(l)>0.0){b=Cs(l);d.f=d.f+b.t*0.004;d.h=d.h+b.v*0.004;d.g=d.g+b.s*0.004;}return k;case 3:r.oY(a,e,n,o,d,l);if(C()){break _;}o=o+1|0;c:while(true){if(o<j){J();p=A3U.data;$p=1;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break c;n=g;}o=i;}if(GE(l)>0.0){b=Cs(l);d.f=d.f+b.t*0.004;d.h=d.h+b.v*0.004;d.g=d.g+b.s*0.004;}return k;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AIX(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=I(b.N);e=I(b.R+1.0);f=I(b.I);g=I(b.Q+1.0);h=I(b.O);i=I(b.S+1.0);while(d<e){j=f;while(j<g){k=h;if(k<i){J();l=A3U.data;$p=1;continue _;}j=j+1|0;}d=d+1|0;}return 0;case 1:$z=X4(a,d,j,k);if(C()){break _;}m=$z;n=l[m];if(n!==null&&n.bR===c)return 1;k=k+1|0;a:while(true)
{if(k<i){J();l=A3U.data;continue _;}j=j+1|0;while(j>=g){d=d+1|0;if(d>=e)break a;j=f;}k=h;}return 0;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function T1(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=new SO;$p=1;case 1:ADW(g,a,b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Y4(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0/((c.R-c.N)*2.0+1.0);e=1.0/((c.Q-c.I)*2.0+1.0);f=1.0/((c.S-c.O)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){if(0.0<=1.0){k=c.N+(c.R-c.N)*i;l=c.I+(c.Q-c.I)*j;m=c.O;n=c.S-c.O;o=0.0;p=BR(k,l,m+n*o);$p=1;continue _;}j=j
+e;}i=i+d;}return g/h;case 1:$z=AEd(a,p,b);if(C()){break _;}p=$z;if(p===null)g=g+1|0;h=h+1|0;q=o+f;a:while(true){if(q<=1.0){k=c.N+(c.R-c.N)*i;l=c.I+(c.Q-c.I)*j;m=c.O;n=c.S-c.O;o=q;p=BR(k,l,m+n*o);continue _;}j=j+e;while(j>1.0){i=i+d;if(i>1.0)break a;j=0.0;}q=0.0;}return g/h;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Xg(a,b,c,d,e){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;$p=1;case 1:$z=X4(a,b,c,d);if(C()){break _;}e=$z;J();if(e!=A5r.b)return;D0(a,b+0.5,c+0.5,d+0.5,B(207),0.5,2.5999999046325684+(L(a.n)-L(a.n))*0.800000011920929);e=0;$p=2;case 2:AJ0(a,b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AQd(a,b){return null;}
function AIC(a){var b;b=new Bd;Bb(b);return O(Be(H(b,B(359)),a.dt.p));}
function AQj(a){return a.bc;}
function AH5(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=VD(a,e,f);if(C()){break _;}g=$z;if(g===null)return null;b=b&15;d=d&15;$p=2;case 2:$z=AHV(g,b,c,d);if(C()){break _;}g=$z;return g;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AA$(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b>>4;g=d>>4;$p=1;case 1:$z=VD(a,f,g);if(C()){break _;}h=$z;if(h!==null)AEc(h,b&15,c,d&15,e);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AA2(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=VD(a,e,f);if(C()){break _;}g=$z;if(g!==null)Zp(g,b&15,c,d&15);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function We(a,b,c,d){var e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:J();e=A3U.data;$p=1;case 1:$z=X4(a,b,c,d);if(C()){break _;}b=$z;f=e[b];return f!==null?f.dy():0;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AEa(a,b){var c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=1;$p=1;case 1:Xc(a,c,b);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,$p);}
function ADh(a){var b,c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=100000;if(a.e2.p<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=Em(a.e2,a.e2.p-1|0);$p=1;case 1:AIS(c,a);if(C()){break _;}if(a.e2.p<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=Em(a.e2,a.e2.p-1|0);continue _;default:Eq();}}CL().s(a,b,c,$p);}
function UV(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=a.e2.p;if(4<=i)i=4;j=0;while(true){if(j>=i){k=a.e2;l=new RU;l.b8=b;l.kL=c;l.fg=d;l.fh=e;l.eV=f;l.eD=g;l.ed=h;U(k,l);if(a.e2.p>100000&&a.e2.p>50000){$p=1;continue _;}return;}k=Z(a.e2,(a.e2.p-j|0)-1|0);if(k.b8===b&&AGk(k,c,d,e,f,g,h))break;j=j+1|0;}return;case 1:ADh(a);if(C()){break _;}if
(a.e2.p<=50000)return;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Od(a){var b;b=L6(a,1.0);if(b!=a.fA)a.fA=b;}
function TV(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:P_(a.hN);if(!Oa(a.dt,a.bc)&&a.bc!==null){B$(Ds(),B(360));b=a.bc;$p=1;continue _;}a:{c=L6(a,1.0);if(c!=a.fA){a.fA=c;d=0;while(true){if(d>=a.b$.p)break a;RK(Z(a.b$,d));d=d+1|0;}}}a.dG=Long_add(a.dG,Long_fromInt(1));if(Long_ne(Long_rem(a.dG,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c
=0;b=null;$p=4;continue _;case 1:AIM(a,b);if(C()){break _;}b:{c=L6(a,1.0);if(c!=a.fA){a.fA=c;d=0;while(true){if(d>=a.b$.p)break b;RK(Z(a.b$,d));d=d+1|0;}}}a.dG=Long_add(a.dG,Long_fromInt(1));if(Long_ne(Long_rem(a.dG,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c=0;b=null;$p=4;continue _;case 2:W1(a,c);if(C()){break _;}d=I(a.bc.c);e=I(a.bc.d);b=new Ha;f=d-64|0;g=0;h=e-64|0;i=d+64|0;j=128;c=e+64|0;$p=3;case 3:ZR(b,a,f,g,h,i,j,c);if(C()){break _;}f=0;if(f>=8000)return;a.g4=(a.g4*3|0)+a.qr|0;g=a.g4>>2;h=((g
&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p=5;continue _;case 4:Xc(a,c,b);if(C()){break _;}c=0;$p=2;continue _;case 5:$z=Go(b,h,j,i);if(C()){break _;}k=$z;J();if(A5B.data[k]){l=A3U.data[k];m=a.n;$p=6;continue _;}f=f+1|0;if(f>=8000)return;a.g4=(a.g4*3|0)+a.qr|0;g=a.g4>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;continue _;case 6:l.ew(a,h,j,i,m);if(C()){break _;}f=f+1|0;if(f>=8000)return;a.g4=(a.g4*3|0)+a.qr|0;g=a.g4>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p=5;continue _;default:
Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function W1(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=HZ(a.fZ);if(c!=Hn(a.jM)){d=new DJ;Bp(d,B(361));M(d);}if(c>500)c=500;e=0;a:{while(true){if(e>=c)break a;f=KU(a.fZ);if(!b&&Long_gt(f.ih,a.dG))break;KD(a.fZ,f);Jg(a.jM,f);if(GZ(a,f.e4-8|0,f.eN-8|0,f.e8-8|0,f.e4+8|0,f.eN+8|0,f.e8+8|0)){g=f.e4;h=f.eN;i=f.e8;$p=1;continue _;}e=e+1|0;}}return !HZ(a.fZ)?0:1;case 1:$z=X4(a,g,h,
i);if(C()){break _;}g=$z;if(g==f.ou&&g>0){J();d=A3U.data[g];g=f.e4;h=f.eN;i=f.e8;f=a.n;$p=2;continue _;}b:{while(true){e=e+1|0;if(e>=c)break b;f=KU(a.fZ);if(!b&&Long_gt(f.ih,a.dG))break;KD(a.fZ,f);Jg(a.jM,f);if(!GZ(a,f.e4-8|0,f.eN-8|0,f.e8-8|0,f.e4+8|0,f.eN+8|0,f.e8+8|0))continue;else{g=f.e4;h=f.eN;i=f.e8;continue _;}}}return !HZ(a.fZ)?0:1;case 2:d.ew(a,g,h,i,f);if(C()){break _;}c:{while(true){e=e+1|0;if(e>=c)break c;f=KU(a.fZ);if(!b&&Long_gt(f.ih,a.dG))break;KD(a.fZ,f);Jg(a.jM,f);if(!GZ(a,f.e4-8|0,f.eN-8|0,
f.e8-8|0,f.e4+8|0,f.eN+8|0,f.e8+8|0))continue;else{g=f.e4;h=f.eN;i=f.e8;$p=1;continue _;}}}return !HZ(a.fZ)?0:1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AAr(a,b,c,d){var e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=16;f=new De;g=0;if(g>=1000)return;h=(b+D(a.n,e)|0)-D(a.n,e)|0;i=(c+D(a.n,e)|0)-D(a.n,e)|0;j=(d+D(a.n,e)|0)-D(a.n,e)|0;$p=1;case 1:$z=X4(a,h,i,j);if(C()){break _;}k=$z;if(k>0){J();l=A3U.data[k];$p=2;continue _;}g=g+1|0;if(g>=1000)return;h=(b+D(a.n,e)|0)-D(a.n,e)|0;i=(c+D(a.n,e)|0)-D(a.n,
e)|0;j=(d+D(a.n,e)|0)-D(a.n,e)|0;continue _;case 2:l.jK(a,h,i,j,f);if(C()){break _;}g=g+1|0;if(g>=1000)return;h=(b+D(a.n,e)|0)-D(a.n,e)|0;i=(c+D(a.n,e)|0)-D(a.n,e)|0;j=(d+D(a.n,e)|0)-D(a.n,e)|0;$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Zc(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DB(a.oD);d=I((c.N-2.0)/16.0);e=I((c.R+2.0)/16.0);f=I((c.O-2.0)/16.0);g=I((c.S+2.0)/16.0);while(d<=e){h=f;while(h<=g){if(CM(a,d,h)){$p=1;continue _;}h=h+1|0;}d=d+1|0;}return a.oD;case 1:$z=VD(a,d,h);if(C()){break _;}i=$z;AER(i,b,c,a.oD);a:while(true){h=h+1|0;while(h>g){d=d+1|0;if(d>e)break a;h=f;}if(!CM(a,d,h))continue;else
{continue _;}}return a.oD;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AHM(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=I((c.N-2.0)/16.0);e=I((c.R+2.0)/16.0);f=I((c.O-2.0)/16.0);g=I((c.S+2.0)/16.0);h=Ck();while(d<=e){i=f;while(i<=g){if(CM(a,d,i)){$p=1;continue _;}i=i+1|0;}d=d+1|0;}return h;case 1:$z=VD(a,d,i);if(C()){break _;}j=$z;AGZ(j,b,c,h);a:while(true){i=i+1|0;while(i>g){d=d+1|0;if(d>e)break a;i=f;}if(!CM(a,d,i))continue;else
{continue _;}}return h;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,$p);}
function APv(a){return a.dt;}
function ABF(a,b,c,d){var e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!D8(a,b,c,d))return;$p=1;case 1:$z=TM(a,b,d);if(C()){break _;}e=$z;PE(e);return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function Ui(a,b){var c,d;c=0;d=0;while(d<a.dt.p){if(Nn(b,C4(Z(a.dt,d))))c=c+1|0;d=d+1|0;}return c;}
function AKC(a,b){var c,d;Dq(a.dt,b);c=0;while(c<a.b$.p){Z(a.b$,c);d=0;while(d<b.p){Z(b,d);d=d+1|0;}c=c+1|0;}}
function ALh(a,b){Dq(a.kN,b);}
function Sh(a){while(P_(a.hN)){}}
function AC$(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X4(a,c,d,e);if(C()){break _;}g=$z;J();h=A3U.data[g];i=A3U.data[b];$p=2;case 2:$z=i.gH(a,c,d,e);if(C()){break _;}j=$z;if(f)j=null;if(!(b>0&&h===null)&&h!==A4Z&&h!==A5G&&h!==A40&&h!==A5H&&h!==A5r)return 0;if(j===null){$p=3;continue _;}$p=4;continue _;case 3:$z=i.ff(a,c,d,e);if(C()){break _;}b=$z;return !b
?0:1;case 4:$z=AHC(a,j);if(C()){break _;}b=$z;if(!b)return 0;$p=3;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AL7(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=I(b.c);f=I(b.i);g=I(b.d);h=d+32.0|0;i=e-h|0;j=f-h|0;k=g-h|0;l=e+h|0;m=f+h|0;n=g+h|0;o=new Ha;$p=1;case 1:ZR(o,a,i,j,k,l,m,n);if(C()){break _;}return AJU(ATK(o),b,c,d);default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AEm(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=I(b.c);h=I(b.i);i=I(b.d);j=f+32.0|0;k=g-j|0;l=h-j|0;m=i-j|0;n=g+j|0;o=h+j|0;p=i+j|0;q=new Ha;$p=1;case 1:ZR(q,a,k,l,m,n,o,p);if(C()){break _;}return ABn(ATK(q),b,c,d,e,f);default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Ty(){var b,c;A9v=$rt_createFloatArray(16);b=0;while(b<=15){c=1.0-b/15.0;A9v.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}}
function J$(){var a=this;E.call(a);a.sm=null;a.wG=null;a.kd=0;a.AU=0.0;a.AT=0.0;a.Be=0;a.kQ=0;a.lb=0;a.mp=0;a.l6=0;a.ox=0;a.p4=0;a.w5=0;a.xv=0.0;a.w6=0.0;a.wD=0.0;a.Ei=0;a.m4=0;a.E9=0;a.CV=0;}
var A3Q=null;function Bv(){Bv=Bt(J$);ATu();}
function Bm(a){var b,c,d,e,f;if(!a.m4)return 0;a.m4=0;if(a.kd>0){if(a.lb)LX(32888);if(a.kQ)LX(32886);if(a.mp)LX(32885);b=a.w5;c=a.kd;d=a.sm.buffer;e=a.kd*7|0;AGa(b,0,c,new Int32Array(d,0,e));if(a.lb)KM(32888);if(a.kQ)KM(32886);if(a.mp)KM(32885);}f=a.l6*4|0;Sw(a);return f;}
function Sw(a){a.kd=0;a.l6=0;a.ox=0;}
function Bu(a){Fq(a,7);}
function Fq(a,b){if(a.m4)Bm(a);a.m4=1;Sw(a);a.w5=b;a.mp=0;a.kQ=0;a.lb=0;a.p4=0;}
function AEn(a,b,c){a.lb=1;a.AU=b;a.AT=c;}
function Cf(a,b,c,d){MK(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function FC(a,b,c,d,e){Nz(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function MK(a,b,c,d){Nz(a,b,c,d,255);}
function Nz(a,b,c,d,e){if(!a.p4){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.kQ=1;a.Be=e<<24|d<<16|c<<8|b;}}
function F(a,b,c,d,e,f){AEn(a,e,f);Ba(a,b,c,d);}
function Ba(a,b,c,d){var e,f,g,h,i,j;if(a.ox>65534)return;a.ox=a.ox+1|0;a.kd=a.kd+1|0;e=a.l6;f=a.sm;g=a.wG;h=e+0|0;i=b+a.xv;g[h]=i;h=e+1|0;i=c+a.w6;g[h]=i;h=e+2|0;i=d+a.wD;g[h]=i;if(a.lb){h=e+3|0;i=a.AU;g[h]=i;h=e+4|0;i=a.AT;g[h]=i;}if(a.kQ){h=e+5|0;j=a.Be;f[h]=j;}if(a.mp){e=e+6|0;h=a.Ei;f[e]=h;}a.l6=a.l6+7|0;}
function Eb(a,b){MK(a,b>>16&255,b>>8&255,b&255);}
function YR(a){a.p4=1;}
function CX(a,b,c,d){B_(b,c,d);}
function Er(a,b,c,d){a.xv=b;a.w6=c;a.wD=d;}
function ATu(){var b,c;b=new J$;Bv();b.kd=0;b.kQ=0;b.lb=0;b.mp=0;b.l6=0;b.ox=0;b.p4=0;b.m4=0;b.E9=0;b.CV=525000;c=new ArrayBuffer(2100000);b.sm=new Int32Array(c);b.wG=new Float32Array(c);A3Q=b;}
function AHN(){var a=this;E.call(a);a.e$=0;a.e6=0;}
function EU(a,b){var c=new AHN();ARW(c,a,b);return c;}
function ARW(a,b,c){var d,e;a.e$=b;a.e6=c;d=1;while(true){c=a.e$;e=d+1|0;if((c/e|0)<320)break;if((a.e6/e|0)<240)break;d=e;}a.e$=a.e$/d|0;a.e6=a.e6/d|0;}
function ZN(a){return a.e$;}
function U3(a){return a.e6;}
function Fm(){E.call(this);this.lv=0.0;}
function A9B(){var a=new Fm();K5(a);return a;}
function K5(a){a.lv=0.0;}
function I$(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>24&255)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>24&255)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;X(3553);V(3042);X(3008);C0(770,771);Bv();p=A3Q;Bu(p);FC(p,i,j,k,h);q=d;r=c;Ba(p,q,r,0.0);s=b;Ba(p,s,r,0.0);FC(p,m,n,o,l);r=e;Ba(p,s,r,0.0);Ba(p,q,r,0.0);Bm(p);X(3042);V(3008);V(3553);}
function Dz(a,b,c,d,e,f){Cn(b,c,d-(Db(b,c)/2|0)|0,e,f);}
function Gj(a,b,c,d,e,f){Cn(b,c,d,e,f);}
function Ct(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;Bv();h=A3Q;Bu(h);i=b+0|0;j=c+g|0;k=a.lv;l=(d+0|0)*0.00390625;m=(e+g|0)*0.00390625;F(h,i,j,k,l,m);n=b+f|0;o=a.lv;k=(d+f|0)*0.00390625;F(h,n,j,o,k,m);m=c+0|0;o=a.lv;j=(e+0|0)*0.00390625;F(h,n,m,o,k,j);F(h,i,m,a.lv,l,j);Bm(h);}
function CI(){var a=this;Fm.call(a);a.H=null;a.bh=0;a.bv=0;a.bE=null;a.od=0;a.bS=null;}
function A9C(){var a=new CI();DH(a);return a;}
function DH(a){K5(a);a.bE=Ck();a.od=0;}
function AAU(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.bE.p)return;f=Z(a.bE,e);g=a.H;$p=1;case 1:Yn(f,g,b,c);if(C()){break _;}e=e+1|0;if(e>=a.bE.p)return;f=Z(a.bE,e);g=a.H;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function UB(a,b,c){var d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.H;e=null;$p=1;case 1:Zk(d,e);if(C()){break _;}d=a.H;$p=2;case 2:AAC(d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function Va(a,b,c,d){var e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.bE.p)break a;f=Z(a.bE,e);if(O7(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.ip(f);if(C()){break _;}while(true){e=e+1|0;if(e>=a.bE.p)break;f=Z(a.bE,e);if(!O7(f,b,c))continue;else{continue _;}}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ATB(a,b,c,d){return;}
function AHq(a,b){return;}
function AKw(a,b,c,d){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.H=b;a.bS=b.ey;a.bh=c;a.bv=d;$p=1;case 1:a.hH();if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function AKu(a){return;}
function ACe(a){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(EM()){$p=1;continue _;}if(!Dt())return;$p=2;continue _;case 1:Vk(a);if(C()){break _;}if(EM()){continue _;}if(!Dt())return;$p=2;case 2:AMG(a);if(C()){break _;}if(!Dt())return;continue _;default:Eq();}}CL().s(a,$p);}
function Vk(a){var b,c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cm()){a.y5(Bg(AL8(),a.bh)/a.H.b5|0,(a.bv-(Bg(TI(),a.bv)/a.H.bw|0)|0)-1|0,CE());return;}b=Bg(AL8(),a.bh)/a.H.b5|0;c=(a.bv-(Bg(TI(),a.bv)/a.H.bw|0)|0)-1|0;d=CE();$p=1;case 1:a.EK(b,c,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function AMG(a){var b,c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!CD())return;Y();if(A3i===null)b=0;else{c=$rt_str(A3i.key);b=A3i===null?32:BE(c)>1?0:Cr(c,0);}d=Bc();$p=1;case 1:a.nD(b,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function AUa(a){return;}
function AC8(a){return;}
function WR(a){var b,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;$p=1;case 1:ADy(a,b);if(C()){break _;}return;default:Eq();}}CL().s(a,b,$p);}
function ADy(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.H.w!==null){I$(a,0,0,a.bh,a.bv,1610941696,(-1607454656));return;}X(2896);X(2912);Bv();c=A3Q;d=3553;e=a.H.bi;f=B(157);$p=1;case 1:$z=ACB(e,f);if(C()){break _;}g=$z;Ce(d,g);BN(1.0,1.0,1.0,1.0);Bu(c);Eb(c,4210752);h=a.bv;i=a.bv/32.0;j=b;F(c,0.0,h,0.0,0.0,i+j);F(c,a.bh,a.bv,
0.0,a.bh/32.0,a.bv/32.0+j);k=a.bh;l=a.bh/32.0;m=0+b|0;F(c,k,0.0,0.0,l,m);F(c,0.0,0.0,0.0,0.0,m);Bm(c);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AOE(a){return 1;}
function AAx(){var a=this;E.call(a);a.j1=null;a.iz=0;a.hn=0;a.tp=0;}
function AZM(a){var b=new AAx();AU6(b,a);return b;}
function AU6(a,b){a.j1=N(E,b);a.iz=b;a.hn=0;a.tp=0;}
function PV(a,b){var c,d;c=a.hn;while(true){a.hn=a.hn+1|0;if(a.hn>=a.iz)a.hn=0;if(a.hn==c){c=a.iz;a.iz=a.iz+(a.iz/2|0)|0;d=a.j1;a.j1=N(E,a.iz);Di(d,0,a.j1,0,c);return PV(a,b);}if(a.j1.data[a.hn]!==null)continue;else break;}a.j1.data[a.hn]=b;a.tp=a.tp+1|0;return a.hn;}
function AIg(a,b){if(b<a.iz&&b>=0)return a.j1.data[b];return null;}
function Kp(){E.call(this);}
function DW(){var a=this;Kp.call(a);a.dW=0.0;a.dU=0.0;a.dV=0.0;a.dT=0.0;a.dZ=0.0;a.d0=0.0;a.dX=0.0;a.dY=0.0;a.d4=0.0;a.d2=0.0;a.d3=0.0;a.d1=0.0;a.f9=0.0;a.f$=0.0;a.f7=0.0;a.f8=0.0;}
function KZ(){var a=new DW();AVe(a);return a;}
function AVe(a){ED(a);}
function ED(a){a.dW=1.0;a.dU=0.0;a.dV=0.0;a.dT=0.0;a.dZ=0.0;a.d0=1.0;a.dX=0.0;a.dY=0.0;a.d4=0.0;a.d2=0.0;a.d3=1.0;a.d1=0.0;a.f9=0.0;a.f$=0.0;a.f7=0.0;a.f8=1.0;return a;}
function IW(a){a.dW=0.0;a.dU=0.0;a.dV=0.0;a.dT=0.0;a.dZ=0.0;a.d0=0.0;a.dX=0.0;a.dY=0.0;a.d4=0.0;a.d2=0.0;a.d3=0.0;a.d1=0.0;a.f9=0.0;a.f$=0.0;a.f7=0.0;a.f8=0.0;return a;}
function FR(a,b){a.dW=b.dW;a.dU=b.dU;a.dV=b.dV;a.dT=b.dT;a.dZ=b.dZ;a.d0=b.d0;a.dX=b.dX;a.dY=b.dY;a.d4=b.d4;a.d2=b.d2;a.d3=b.d3;a.d1=b.d1;a.f9=b.f9;a.f$=b.f$;a.f7=b.f7;a.f8=b.f8;return a;}
function Qt(a,b){Cu(b,a.dW);Cu(b,a.dU);Cu(b,a.dV);Cu(b,a.dT);Cu(b,a.dZ);Cu(b,a.d0);Cu(b,a.dX);Cu(b,a.dY);Cu(b,a.d4);Cu(b,a.d2);Cu(b,a.d3);Cu(b,a.d1);Cu(b,a.f9);Cu(b,a.f$);Cu(b,a.f7);Cu(b,a.f8);return a;}
function LA(a,b){b=b.data;b[0]=a.dW;b[1]=a.dU;b[2]=a.dV;b[3]=a.dT;b[4]=a.dZ;b[5]=a.d0;b[6]=a.dX;b[7]=a.dY;b[8]=a.d4;b[9]=a.d2;b[10]=a.d3;b[11]=a.d1;b[12]=a.f9;b[13]=a.f$;b[14]=a.f7;b[15]=a.f8;return a;}
function AY3(a,b){return Ri(a,b,a);}
function Vo(a,b){a.dW=a.dW*b.eW;a.dU=a.dU*b.eW;a.dV=a.dV*b.eW;a.dT=a.dT*b.eW;a.dZ=a.dZ*b.eY;a.d0=a.d0*b.eY;a.dX=a.dX*b.eY;a.dY=a.dY*b.eY;a.d4=a.d4*b.eX;a.d2=a.d2*b.eX;a.d3=a.d3*b.eX;a.d1=a.d1*b.eX;return a;}
function ANA(a,b,c){return ST(a,b,c,a);}
function ST(a,b,c,d){return AWm(b,c,a,d);}
function AWm(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=KZ();f=b;g=FG(f);h=Fw(f);i=1.0-g;j=c.eW*c.eY;k=c.eY*c.eX;l=c.eW*c.eX;m=c.eW*h;n=c.eY*h;o=c.eX*h;p=c.eW*c.eW*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.eY*c.eY*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.eX*c.eX*i+g;z=d.dW*p+d.dZ*q+d.d4*s;ba=d.dU*p+d.d0*q+d.d2*s;bb=d.dV*p+d.dX*q+d.d3*s;bc=d.dT*p+d.dY*q+d.d1*s;bd=d.dW*t+d.dZ*u+d.d4*v;be=d.dU*t+d.d0*u+d.d2*v;bf=d.dV*t+d.dX*u+d.d3*v;r=d.dT*t+d.dY*u+d.d1*v;e.d4=d.dW*w+d.dZ*x+d.d4*
y;e.d2=d.dU*w+d.d0*x+d.d2*y;e.d3=d.dV*w+d.dX*x+d.d3*y;e.d1=d.dT*w+d.dY*x+d.d1*y;e.dW=z;e.dU=ba;e.dV=bb;e.dT=bc;e.dZ=bd;e.d0=be;e.dX=bf;e.dY=r;return e;}
function Ri(a,b,c){if(c===null)c=KZ();c.f9=c.f9+a.dW*b.eW+a.dZ*b.eY+a.d4*b.eX;c.f$=c.f$+a.dU*b.eW+a.d0*b.eY+a.d2*b.eX;c.f7=c.f7+a.dV*b.eW+a.dX*b.eY+a.d3*b.eX;c.f8=c.f8+a.dT*b.eW+a.dY*b.eY+a.d1*b.eX;return c;}
function JF(a,b){var c;a:{if(b instanceof DW){b:{c:{b=b;if(a.dW!==b.dW)break c;if(a.dU!==b.dU)break c;if(a.dV!==b.dV)break c;if(a.dT!==b.dT)break c;if(a.dZ!==b.dZ)break c;if(a.d0!==b.d0)break c;if(a.dX!==b.dX)break c;if(a.dY!==b.dY)break c;if(a.d4!==b.d4)break c;if(a.d2!==b.d2)break c;if(a.d3!==b.d3)break c;if(a.d1!==b.d1)break c;if(a.f9!==b.f9)break c;if(a.f$!==b.f$)break c;if(a.f7!==b.f7)break c;if(a.f8===b.f8){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function LR(){}
function HA(){E.call(this);}
function Sk(){}
function LE(){}
function O4(){}
function Kk(){}
function Rd(){var a=this;HA.call(a);a.eW=0.0;a.eY=0.0;a.eX=0.0;}
function A9D(){var a=new Rd();AYM(a);return a;}
function AYM(a){return;}
function J_(a,b,c,d){a.eW=b;a.eY=c;a.eX=d;}
function Si(){}
function OZ(){}
function F5(){var a=this;HA.call(a);a.j5=0.0;a.j6=0.0;a.j4=0.0;a.nG=0.0;}
function ATV(){var a=new F5();ARC(a);return a;}
function ARC(a){return;}
function RL(a,b){a.j5=b.j5;a.j6=b.j6;a.j4=b.j4;a.nG=b.nG;return a;}
function AZK(a){return a.j5;}
function ANe(a){return a.j6;}
function ARK(a){return a.j4;}
function AVE(a){return a.nG;}
function PZ(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(C4(a)!==C4(b))return 0;c=b;if(a.j5===c.j5&&a.j6===c.j6&&a.j4===c.j4&&a.nG===c.nG)return 1;return 0;}
function PQ(){var a=this;E.call(a);a.yY=null;a.yX=null;}
function ADw(a){var b,c;b=a.yY;c=a.yX;EJ(b);Cx(c,null);}
function AJp(){Ey.call(this);}
function AVc(a){var b=new AJp();AQI(b,a);return b;}
function AQI(a,b){SP(a,b);}
function GP(){}
function QN(){}
function Ys(){var a=this;E.call(a);a.fa=null;a.hz=null;a.jx=null;a.oo=0;a.pt=0;a.ho=null;}
function AEp(a,b,c,d){var e=new Ys();ANV(e,a,b,c,d);return e;}
function ANV(a,b,c,d,e){a.ho=b;a.pt=a.ho.d8;a.fa=c;a.hz=d;a.oo=e;}
function FO(a){return a.fa===null?0:1;}
function FH(a){var b;Oz(a);if(a.fa===null){b=new Iq;R(b);M(b);}b=a.fa.wF;a.jx=a.fa;a.hz=a.fa;a.fa=a.fa.gF;a.oo=a.oo+1|0;return b;}
function ACn(a){var b,c;if(a.jx===null){b=new DJ;R(b);M(b);}b=a.ho;c=a.jx;if(c.hx===null)b.n5=c.gF;else c.hx.gF=c.gF;if(c.gF===null)b.oF=c.hx;else c.gF.hx=c.hx;b.gJ=b.gJ-1|0;b.d8=b.d8+1|0;if(a.jx===a.hz){a.hz=!FO(a)?null:a.fa.hx;a.oo=a.oo-1|0;}else if(a.jx===a.fa)a.fa=!VA(a)?null:a.hz.gF;a.pt=a.ho.d8;a.jx=null;}
function VA(a){return a.hz===null?0:1;}
function W3(a,b){var c;Oz(a);c=new OJ;c.wF=b;c.hx=a.hz;c.gF=a.fa;if(a.hz!==null)a.hz.gF=c;else a.ho.n5=c;if(a.fa!==null)a.fa.hx=c;else a.ho.oF=c;a.hz=c;b=a.ho;b.gJ=b.gJ+1|0;b=a.ho;b.d8=b.d8+1|0;a.pt=a.ho.d8;a.jx=null;}
function Oz(a){var b;if(a.pt>=a.ho.d8)return;b=new Je;R(b);M(b);}
function OJ(){var a=this;E.call(a);a.wF=null;a.gF=null;a.hx=null;}
function A9E(){var a=new OJ();ASj(a);return a;}
function ASj(a){return;}
function HW(){var a=this;D_.call(a);a.F=null;a.xO=0;a.jV=0;a.oS=0.0;a.jP=0.0;a.zw=null;a.vz=0;}
function ABa(a){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFE(a);if(C()){break _;}a.oS=a.jP;a.jP=0.0;return;default:Eq();}}CL().s(a,$p);}
function AFR(a){var b,c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cF=1.6200000047683716;Dx(a,0.6000000238418579,1.7999999523162842);if(a.k!==null){if(a.i>0.0){CC(a,a.c,a.i,a.d);b=a.k;c=a.G;$p=1;continue _;}a.g=0.0;a.h=0.0;a.f=0.0;a.E=0.0;}if(a.k!==null)a.k.bc=a;a.bI=20;a.cD=0;return;case 1:$z=TK(b,a,c);if(C()){break _;}b=$z;if(b.p){a.i=a.i+1.0;if(a.i>0.0){CC(a,a.c,a.i,a.d);b=a.k;c=a.G;continue _;}}a.g=0.0;a.h=0.0;a.f=0.0;a.E=0.0;if(a.k!==null)a.k.bc
=a;a.bI=20;a.cD=0;return;default:Eq();}}CL().s(a,b,c,$p);}
function UQ(a){var b,c,d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.k.h0&&a.bI<20&&!((a.nm%20|0)*4|0))Q5(a,1);ZI(a.F);a.oS=a.jP;$p=1;case 1:XX(a);if(C()){break _;}b=B7(a.f*a.f+a.g*a.g);c=G$( -a.h*0.20000000298023224)*15.0;if(b>0.10000000149011612)b=0.10000000149011612;if(!(a.ca&&a.bI>0))b=0.0;if(!(!a.ca&&a.bI>0))c=0.0;a.jP=a.jP+(b-a.jP)*0.4000000059604645;a.il=a.il+(c-a.il)*0.800000011920929;if(a.bI<=0)return;d=a.k;e
=Da(a.G,1.0,0.0,1.0);$p=2;case 2:a:{$z=Zc(d,a,e);if(C()){break _;}d=$z;if(d!==null){f=0;while(true){if(f>=d.p)break a;Z(d,f).vb(a);f=f+1|0;}}}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AUW(a){return a.jV;}
function AFY(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dx(a,0.20000000298023224,0.20000000298023224);CC(a,a.c,a.i,a.d);a.h=0.10000000149011612;if(!DT(a.zw,B(362))){c=a.F;$p=1;continue _;}c=new B6;Bw();Fu(c,A6Q,1);d=1;$p=2;continue _;case 1:ADR(c);if(C()){break _;}if(b===null){a.g=0.0;a.f=0.0;}else{a.f= -Bx((a.jB+a.q)*3.1415927410125732/180.0)*0.10000000149011612;a.g= -Bl((a.jB+a.q)*3.1415927410125732/180.0)*0.10000000149011612;}a.cF
=0.10000000149011612;return;case 2:AKT(a,c,d);if(C()){break _;}c=a.F;$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,$p);}
function ARl(a,b,c){a.jV=a.jV+c|0;}
function AGz(a,b){var c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;$p=1;case 1:AKT(a,b,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,$p);}
function AKT(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b===null)return;d=F$(a.k,a.c,a.i-0.30000001192092896,a.d,b);d.go=40;if(c){e=L(a.l)*0.5;f=L(a.l)*3.1415927410125732*2.0;d.f= -Bl(f)*e;d.g=Bx(f)*e;d.h=0.20000000298023224;}else{d.f= -Bl(a.q/180.0*3.1415927410125732)*Bx(a.E/180.0*3.1415927410125732)*0.30000001192092896;d.g=Bx(a.q/180.0*3.1415927410125732)
*Bx(a.E/180.0*3.1415927410125732)*0.30000001192092896;d.h= -Bl(a.E/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=L(a.l)*3.1415927410125732*2.0;g=0.019999999552965164*L(a.l);h=d.f;i=e;j=FG(i);k=g;d.f=h+j*k;d.h=d.h+(L(a.l)-L(a.l))*0.10000000149011612;d.g=d.g+Fw(i)*k;}b=a.k;$p=1;case 1:AIM(b,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFD(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Y0(a.F,b);b=A4R;$p=1;case 1:$z=ABS(a,b);if(C()){break _;}d=$z;if(d)c=c/5.0;if(!a.ca)c=c/5.0;return c;default:Eq();}}CL().s(a,b,c,d,$p);}
function K0(a,b){return Zl(a.F,b);}
function AVp(a){return 0.11999999731779099;}
function Uf(a,b,c){var d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gy=0;if(a.bI<=0)return 0;if(a.c5>a.ns/2.0)return 0;if(!(!(b instanceof Dp)&&!(b instanceof HV))){if(!a.k.h0)c=0;if(a.k.h0==1)c=(c/3|0)+1|0;if(a.k.h0==3)c=(c*3|0)/2|0;}d=Bg(c,25-Qf(a.F)|0)+a.vz|0;Zq(a.F,c);c=d/25|0;a.vz=d%25|0;if(!c)return 0;$p=1;case 1:$z=Xy(a,b,c);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,d,$p);}
function ABN(){var a=this;HW.call(a);a.g6=null;a.jW=null;}
function AWr(a,b,c){var d=new ABN();AQ0(d,a,b,c);return d;}
function AQ0(a,b,c,d){var e;EO(a,c);a.ns=20;a.da=0.0;a.ex=0.0;a.C6=1;a.vQ=B(363);a.C5=1;a.Ay=0.0;a.Bj=null;a.E7=1.0;a.sP=0;a.E8=0.0;a.bI=10;a.jB=0.0;a.cD=0;a.c6=0;a.y_=0;a.Bz=(-1);a.Fa=BI()*0.8999999761581421+0.10000000149011612;a.gy=0;a.gR=0;a.w9=0.0;a.q_=0.699999988079071;a.lg=1;a.Eb=(BI()+1.0)*0.009999999776482582;CC(a,a.c,a.i,a.d);a.Fg=BI()*12398.0;a.q=BI()*3.1415927410125732*2.0;a.C4=1.0;a.pG=0.5;e=new RJ;e.bb=N(B6,36);e.bU=N(B6,4);e.bB=0;e.mc=a;a.F=e;a.xO=0;a.jV=0;a.vz=0;IU(a,c.eJ+0.5,c.oj,c.eI+0.5,0.0,
0.0);a.cF=1.6200000047683716;a.bI=20;a.Bj=B(364);a.Ay=180.0;a.mk=20;a.vQ=B(363);a.jW=b;if(c.bc!==null)B4(c.bc);c.bc=a;if(d!==null&&d.mW!==null&&BE(d.mW)>0){b=new Bd;Bb(b);a.rT=O(H(H(H(b,B(365)),d.mW),B(366)));}a.zw=d.mW;}
function Wq(a){a.hL=a.g6.jy;a.fT=a.g6.jp;a.gR=a.g6.sl;}
function AF7(a){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AI5(a.g6,a);$p=1;case 1:UQ(a);if(C()){break _;}return;default:Eq();}}CL().s(a,$p);}
function ALT(a){AJq(a.g6);}
function DX(a,b,c){AJV(a.g6,b,c);}
function Xk(a,b){EH(b,B(367),a.bI<<16>>16);EH(b,B(368),a.c$<<16>>16);EH(b,B(369),a.cD<<16>>16);EH(b,B(370),a.c6<<16>>16);FD(b,B(371),a.jV);Gv(b,B(317),AGN(a.F,Kg()));}
function AJn(a,b){var c;a.bI=EV(b,B(367));if(!UL(b,B(367)))a.bI=10;a.c$=EV(b,B(368));a.cD=EV(b,B(369));a.c6=EV(b,B(370));a.jV=E6(b,B(371));c=II(b,B(317));ALB(a.F,c);}
function UM(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.jW;d=A1r(a.F,b);$p=1;case 1:Zk(c,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function AD2(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.jW;d=new PG;DH(d);d.xr=B(372);d.fo=0;d.fe=b;$p=1;case 1:Zk(c,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function AHX(a){var b,c,d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.jW;c=new Td;d=a.F;GV(c);c.k7=ASd(c,3,3);c.so=AVq();U(c.cH,AUi(c,c.k7,c.so,0,124,35));e=0;while(e<3){f=0;while(f<3){U(c.cH,DC(c,c.k7,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){U(c.cH,DC(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){U(c.cH,DC(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:Zk(b,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AJu(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.jW;d=new Sm;e=a.F;GV(d);d.qV=b;U(d.cH,DC(d,b,0,56,17));U(d.cH,DC(d,b,1,56,53));U(d.cH,DC(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){U(d.cH,DC(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){U(d.cH,DC(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:Zk(c,d);if(C()){break _;}return;default:Eq();}}CL().s(a,
b,c,d,e,f,g,h,$p);}
function IS(a){return DD(a.F);}
function H1(a){AAT(a.F,a.F.bB,null);}
function YZ(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=AL5(a.F,b);if(c<=0)return;$p=1;case 1:b.eP(a,c);if(C()){break _;}d=IS(a);if(d!==null&&b instanceof D_){AAi(d,b);if(d.m<=0)H1(a);}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function O0(a,b){var c,d;c=a.jW.cG;d=new Re;EP(d,a.jW.w,b.c,b.i,b.d,b.f,b.h,b.g);d.os=0;d.ps=0;d.ld=b;d.g0=a;d.ps=3;d.xW=(-0.5);DR(c,d);}
function Yu(a){return Qf(a.F);}
function Ry(a,b){var c;if(!b.sC(a)){c=IS(a);if(c!==null&&b instanceof D_){ZX(c,b);if(c.m<=0)H1(a);}}}
function AEw(){E.call(this);}
function A9F(){var a=new AEw();AO_(a);return a;}
function AO_(a){return;}
function AHi(b){Y();A3n=b;if(b){A24=0.0;A25=0.0;setTimeout(Cj(new NL,"onTimer"),200);}else{A3l=B1();if(A3m)clearTimeout(A3m);A3m=0;A2J.exitPointerLock();}}
function EM(){var b,c;a:{Y();A3h=null;if(!Nc(A20)){b=P5(A20,0);A3h=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function Cm(){Y();return A3h===null?0:DT($rt_str(A3h.type),B(373));}
function AL8(){Y();return A3h===null?(-1):A3h.clientX;}
function TI(){Y();return A3h===null?(-1):A2L.clientHeight-A3h.clientY|0;}
function CE(){var b;Y();if(A3h===null)b=(-1);else{b=A3h.button;if(b==1)b=2;else if(b==2)b=1;}return b;}
function B0(b){Y();return A3j.data[b];}
function F1(){Y();return !DT(B(374),$rt_str(A3h.type))?0:A3h.deltaY===0.0?0:A3h.deltaY<=0.0?1:(-1);}
function NB(){E.call(this);}
var A9G=null;function A9H(){var a=new NB();AIh(a);return a;}
function AIh(a){return;}
function Bl(b){return A9G.data[(b*651.8986206054688|0)&4095];}
function Bx(b){return A9G.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function DF(b){return DK(b);}
function B7(b){return DK(b);}
function Jm(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function I(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function FN(b,c){return b>=0?b/c|0: -(( -b-1|0)/c|0)-1|0;}
function AGM(){var b,c,d,e;A9G=$rt_createFloatArray(4096);b=0;while(b<4096){A9G.data[b]=Fw((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=A9G.data;e=c;d[(e*11.377778053283691|0)&4095]=Fw(e*0.01745329238474369);c=c+90|0;}}
function Rx(){var a=this;E.call(a);a.AX=null;a.by=0;}
function En(a,b){var c=new Rx();AS$(c,a,b);return c;}
function AS$(a,b,c){a.AX=b;a.by=c;}
function EQ(){}
function RJ(){var a=this;E.call(a);a.bb=null;a.bU=null;a.bB=0;a.mc=null;}
function DD(a){return a.bb.data[a.bB];}
function PS(a,b){var c;c=0;while(true){if(c>=a.bb.data.length)return (-1);if(a.bb.data[c]!==null&&a.bb.data[c].bs==b)break;c=c+1|0;}return c;}
function OM(a){var b;b=0;while(true){if(b>=a.bb.data.length)return (-1);if(a.bb.data[b]===null)break;b=b+1|0;}return b;}
function ALw(a,b,c){var d;d=PS(a,b);if(d>=0&&d<9)a.bB=d;}
function Fc(a,b){if(b>0)b=1;if(b<0)b=(-1);a.bB=a.bB-b|0;while(a.bB<0){a.bB=a.bB+9|0;}while(a.bB>=9){a.bB=a.bB-9|0;}}
function ZI(a){var b,c;b=0;while(b<a.bb.data.length){if(a.bb.data[b]!==null&&a.bb.data[b].lm>0){c=a.bb.data[b];c.lm=c.lm-1|0;}b=b+1|0;}}
function ABZ(a,b){var c,d;c=PS(a,b);if(c<0)return 0;d=a.bb.data[c];b=d.m-1|0;d.m=b;if(b<=0)a.bb.data[c]=null;return 1;}
function Rl(a,b){var c,d,e,f;if(!b.dP){c=b.bs;d=b.m;e=0;a:{while(true){if(e>=a.bb.data.length){e=(-1);break a;}if(a.bb.data[e]!==null&&a.bb.data[e].bs==c&&a.bb.data[e].m<D3(a.bb.data[e])&&a.bb.data[e].m<64)break;e=e+1|0;}}if(e<0)e=OM(a);if(e>=0){if(a.bb.data[e]===null)a.bb.data[e]=I1(c,0);c=d<=(D3(a.bb.data[e])-a.bb.data[e].m|0)?d:D3(a.bb.data[e])-a.bb.data[e].m|0;if(c>(64-a.bb.data[e].m|0))c=64-a.bb.data[e].m|0;if(c){d=d-c|0;f=a.bb.data[e];f.m=f.m+c|0;a.bb.data[e].lm=5;}}b.m=d;if(!b.m)return 1;}c=OM(a);if(c
<0)return 0;a.bb.data[c]=b;a.bb.data[c].lm=5;return 1;}
function DS(a,b,c){var d,e,f;d=a.bb;if(b>=a.bb.data.length){d=a.bU;b=b-a.bb.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].m<=c){e=d[b];d[b]=null;return e;}f=D5(d[b],c);if(!d[b].m)d[b]=null;return f;}
function AAT(a,b,c){var d;d=a.bb;if(b>=a.bb.data.length){d=a.bU;b=b-a.bb.data.length|0;}d.data[b]=c;}
function Y0(a,b){var c;c=1.0;if(a.bb.data[a.bB]!==null)c=c*AAB(a.bb.data[a.bB],b);return c;}
function AGN(a,b){var c,d,e;c=0;while(c<a.bb.data.length){if(a.bb.data[c]!==null){d=F6();H$(d,B(375),c<<24>>24);NU(a.bb.data[c],d);HT(b,d);}c=c+1|0;}e=0;while(e<a.bU.data.length){if(a.bU.data[e]!==null){d=F6();H$(d,B(375),(e+100|0)<<24>>24);NU(a.bU.data[e],d);HT(b,d);}e=e+1|0;}return b;}
function ALB(a,b){var c,d,e;a.bb=N(B6,36);a.bU=N(B6,4);c=0;while(c<AIY(b)){d=Eu(b,c);e=JM(d,B(375))&255;if(e>=0&&e<a.bb.data.length)a.bb.data[e]=AZs(d);if(e>=100&&e<(a.bU.data.length+100|0))a.bU.data[e-100|0]=AZs(d);c=c+1|0;}}
function Ug(a){return a.bb.data.length+4|0;}
function OU(a,b){var c;c=a.bb;if(b>=a.bb.data.length){c=a.bU;b=b-a.bb.data.length|0;}return c.data[b];}
function ANl(a){return B(317);}
function ARi(a){return 64;}
function AL5(a,b){var c;c=OU(a,a.bB);return c===null?1:V2(c,b);}
function Zl(a,b){var c;if(b.bR!==A6b&&b.bR!==A6q)return 1;c=OU(a,a.bB);return c===null?0:AID(c,b);}
function ADe(a,b){return a.bU.data[b];}
function Qf(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.bU.data.length){if(a.bU.data[e]!==null&&Dl(a.bU.data[e]) instanceof Fb){f=IM(a.bU.data[e]);c=c+(f-a.bU.data[e].dP|0)|0;d=d+f|0;b=b+Dl(a.bU.data[e]).wu|0;}e=e+1|0;}if(!d)return 0;return (Bg(b-1|0,c)/d|0)+1|0;}
function Zq(a,b){var c;c=0;while(c<a.bU.data.length){if(a.bU.data[c]!==null&&Dl(a.bU.data[c]) instanceof Fb){EW(a.bU.data[c],b);if(!a.bU.data[c].m)a.bU.data[c]=null;}c=c+1|0;}}
function ADR(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(true){if(b>=a.bb.data.length){b=0;while(b<a.bU.data.length){if(a.bU.data[b]!==null){c=a.mc;d=a.bU.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bb.data[b]!==null)break;b=b+1|0;}c=a.mc;d=a.bb.data[b];e=1;$p=1;case 1:AKT(c,d,e);if(C()){break _;}a.bb.data[b]=null;while(true){b=b+1|0;if(b>=a.bb.data.length){b=0;while(b<a.bU.data.length){if(a.bU.data[b]
!==null){c=a.mc;d=a.bU.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bb.data[b]===null)continue;else break;}c=a.mc;d=a.bb.data[b];e=1;continue _;case 2:AKT(c,d,e);if(C()){break _;}a.bU.data[b]=null;while(true){b=b+1|0;if(b>=a.bU.data.length)break;if(a.bU.data[b]===null)continue;else{c=a.mc;d=a.bU.data[b];e=1;continue _;}}return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function V4(a){return;}
function C_(){Hw.call(this);}
function DZ(){var a=this;CI.call(a);a.bl=null;a.ez=0;a.eL=0;a.cH=null;}
var A9I=null;function A9J(){var a=new DZ();GV(a);return a;}
function GV(a){DH(a);a.bl=null;a.ez=176;a.eL=166;a.cH=Ck();}
function XP(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WR(a);if(C()){break _;}e=(a.bh-a.ez|0)/2|0;f=(a.bv-a.eL|0)/2|0;$p=2;case 2:a.rc(d);if(C()){break _;}BU();Bq(180.0,1.0,0.0,0.0);Gm();By();BU();Br(e,f,0.0);BN(1.0,1.0,1.0,1.0);V(32826);g=0;if(g>=a.cH.p){if(a.bl===null){X(32826);Dr();X(2896);X(2929);a.kg();V(2896);V(2929);By();return;}Br(0.0,
0.0,32.0);h=A9I;i=a.bS;j=a.H.bi;k=a.bl;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.cH,g);i=h.er;l=h.kz;m=h.iN;n=h.iP;i=i.fN(l);if(i===null){l=h.p_();if(l>=0){X(2896);i=a.H.bi;j=a.H.bi;k=B(222);$p=5;continue _;}}j=A9I;k=a.bS;o=a.H.bi;$p=4;continue _;case 3:ABu(h,i,j,k,b,c);if(C()){break _;}JA(A9I,a.bS,a.H.bi,a.bl,b,c);X(32826);Dr();X(2896);X(2929);a.kg();V(2896);V(2929);By();return;case 4:ABu(j,k,o,i,m,n);if(C()){break _;}JA(A9I,a.bS,a.H.bi,i,m,n);if(K2(h,b,c)){X(2896);X(2929);l=h.iN;p=h.iP;I$(a,l,p,l
+16|0,p+16|0,(-2130706433),(-2130706433));V(2896);V(2929);}g=g+1|0;if(g>=a.cH.p){if(a.bl===null){X(32826);Dr();X(2896);X(2929);a.kg();V(2896);V(2929);By();return;}Br(0.0,0.0,32.0);h=A9I;i=a.bS;j=a.H.bi;k=a.bl;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.cH,g);i=h.er;l=h.kz;m=h.iN;n=h.iP;i=i.fN(l);if(i===null){l=h.p_();if(l>=0){X(2896);i=a.H.bi;j=a.H.bi;k=B(222);$p=5;continue _;}}j=A9I;k=a.bS;o=a.H.bi;continue _;case 5:$z=ACB(j,k);if(C()){break _;}p=$z;DI(i,p);Ct(a,m,n,(l%16|0)*16|0,(l/16|0)*16|0,16,16);V(2896);if
(K2(h,b,c)){X(2896);X(2929);l=h.iN;p=h.iP;I$(a,l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));V(2896);V(2929);}g=g+1|0;if(g>=a.cH.p){if(a.bl===null){X(32826);Dr();X(2896);X(2929);a.kg();V(2896);V(2929);By();return;}Br(0.0,0.0,32.0);h=A9I;i=a.bS;j=a.H.bi;k=a.bl;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.cH,g);i=h.er;l=h.kz;m=h.iN;n=h.iP;i=i.fN(l);if(i===null){l=h.p_();if(l>=0){X(2896);i=a.H.bi;j=a.H.bi;k=B(222);continue _;}}j=A9I;k=a.bS;o=a.H.bi;$p=4;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,p,$p);}
function AKV(a,b,c){var d,e;d=0;while(true){if(d>=a.cH.p)return null;e=Z(a.cH,d);if(K2(e,b,c))break;d=d+1|0;}return e;}
function AIz(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(d&&d!=1)){e=AKV(a,b,c);if(e!==null){$p=1;continue _;}if(a.bl!==null){f=(a.bh-a.ez|0)/2|0;g=(a.bv-a.eL|0)/2|0;if(!(b>=f&&c>=g&&b<(f+a.ez|0)&&c<(g+a.ez|0))){h=a.H.e;if(!d){e=a.bl;$p=2;continue _;}if(d==1){e=D5(a.bl,1);$p=3;continue _;}}}}return;case 1:a:{AFn(e);if(C()){break _;}i=ALI(e);if(!(i===null&&a.bl===null)){if
(i!==null&&a.bl===null){g=!d?i.m:(i.m+1|0)/2|0;a.bl=e.er.i3(e.kz,g);if(i.m){$p=4;continue _;}h=null;$p=5;continue _;}if(i===null&&a.bl!==null&&e.rg(a.bl)){g=d?1:a.bl.m;if(g>e.er.fp())g=e.er.fp();h=D5(a.bl,g);$p=7;continue _;}if(i!==null&&a.bl!==null){if(!e.rg(a.bl)){if(i.bs!=a.bl.bs)break a;if(D3(a.bl)<=1)break a;g=i.m;if(g<=0)break a;if((g+a.bl.m|0)>D3(a.bl))break a;h=a.bl;h.m=h.m+g|0;D5(i,g);if(i.m){$p=8;continue _;}h=null;$p=9;continue _;}if(i.bs==a.bl.bs){if(i.bs==a.bl.bs){if(!d){g=a.bl.m;if(g>(e.er.fp()
-i.m|0))g=e.er.fp()-i.m|0;if(g>(D3(a.bl)-i.m|0))g=D3(a.bl)-i.m|0;D5(a.bl,g);if(!a.bl.m)a.bl=null;i.m=i.m+g|0;}else if(d==1){g=1;if(g>(e.er.fp()-i.m|0))g=e.er.fp()-i.m|0;if(g>(D3(a.bl)-i.m|0))g=D3(a.bl)-i.m|0;D5(a.bl,g);if(!a.bl.m)a.bl=null;i.m=i.m+g|0;}}}else if(a.bl.m<=e.er.fp()){h=a.bl;$p=6;continue _;}}}}return;case 2:AGz(h,e);if(C()){break _;}a.bl=null;if(d!=1)return;e=D5(a.bl,1);$p=3;case 3:AGz(h,e);if(C()){break _;}if(!a.bl.m)a.bl=null;return;case 4:e.E0();if(C()){break _;}return;case 5:AGf(e,h);if(C())
{break _;}$p=4;continue _;case 6:AGf(e,h);if(C()){break _;}a.bl=i;return;case 7:AGf(e,h);if(C()){break _;}if(!a.bl.m)a.bl=null;return;case 8:e.E0();if(C()){break _;}return;case 9:AGf(e,h);if(C()){break _;}$p=8;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AYu(a,b,c,d){return;}
function V_(a,b,c){var d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.H.r.eR.by)return;d=a.H;e=null;$p=1;case 1:Zk(d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function Wz(a){var b,c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bl===null)return;b=a.H.e;c=a.bl;$p=1;case 1:AGz(b,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,$p);}
function AZn(a){return 0;}
function AE1(){A9I=TS();}
function AKf(){var a=this;DZ.call(a);a.i0=null;a.u9=null;a.xH=0.0;a.AR=0.0;}
function El(a){var b=new AKf();ARB(b,a);return b;}
function ARB(a,b){var c,d,e,f,g;GV(a);a.i0=ASd(a,2,2);a.u9=AVq();a.od=1;U(a.cH,AUi(a,a.i0,a.u9,0,144,36));c=0;while(c<2){d=0;while(d<2){U(a.cH,DC(a,a.i0,d+(c*2|0)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.cH;f=new NT;QS(f,a,b,(Ug(b)-1|0)-d|0,8,8+(d*18|0)|0);f.DK=a;f.t4=d;U(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){U(a.cH,DC(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){U(a.cH,DC(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function AGq(a){var b,c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Wz(a);if(C()){break _;}b=0;while(b<a.i0.kG){c=Fo(a.i0,b);if(c!==null){d=a.H.e;$p=2;continue _;}b=b+1|0;}return;case 2:AGz(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=a.i0.kG)break;c=Fo(a.i0,b);if(c===null)continue;else{d=a.H.e;continue _;}}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function AND(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=(-1);if(e<2&&f<2){h=Fo(a.i0,e+(f*2|0)|0);if(h!==null)g=h.bs;}d[e+(f*3|0)|0]=g;f=f+1|0;}e=e+1|0;}MQ(a.u9,0,OQ(Sq(),c));}
function ARR(a){D4(a.bS,B(376),86,16,4210752);}
function Zo(a,b,c,d){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:XP(a,b,c,d);if(C()){break _;}a.xH=b;a.AR=c;return;default:Eq();}}CL().s(a,b,c,d,$p);}
function TZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.H.bi;d=B(377);$p=1;case 1:$z=ACB(c,d);if(C()){break _;}e=$z;BN(1.0,1.0,1.0,1.0);DI(a.H.bi,e);f=(a.bh-a.ez|0)/2|0;g=(a.bv-a.eL|0)/2|0;Ct(a,f,g,0,0,a.ez,a.eL);V(32826);V(2903);BU();b=f+51|0;e=g+75|0;Br(b,e,50.0);Co((-30.0),30.0,30.0);Bq(180.0,
0.0,0.0,1.0);h=a.H.e.da;i=a.H.e.q;j=a.H.e.E;k=b-a.xH;l=(e-50|0)-a.AR;Bq(135.0,0.0,1.0,0.0);Gm();Bq((-135.0),0.0,1.0,0.0);m=l/40.0;Bq( -G$(m)*20.0,1.0,0.0,0.0);d=a.H.e;n=k/40.0;d.da=G$(n)*20.0;a.H.e.q=G$(n)*40.0;a.H.e.E= -G$(m)*20.0;Br(0.0,a.H.e.cF,0.0);d=A5q;c=a.H.e;m=0.0;n=0.0;o=0.0;b=0.0;p=1.0;$p=2;case 2:AKZ(d,c,m,n,o,b,p);if(C()){break _;}a.H.e.da=h;a.H.e.q=i;a.H.e.E=j;By();Dr();X(32826);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Le(){var a=this;Fm.call(a);a.gj=null;a.td=null;a.bN=null;a.B5=null;a.p$=0;a.AN=0.0;a.Eq=0.0;}
var A9K=null;function AKb(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=EU(a.bN.b5,a.bN.bw);g=ZN(f);h=U3(f);i=a.bN.ey;JN(a.bN.ek);V(3042);BN(1.0,1.0,1.0,1.0);c=3553;f=a.bN.bi;j=
B(378);$p=1;case 1:$z=ACB(f,j);if(C()){break _;}d=$z;Ce(c,d);k=a.bN.e.F;a.lv=(-90.0);l=g/2|0;m=l-91|0;n=h-22|0;Ct(a,m,n,0,0,182,22);Ct(a,(m-1|0)+(k.bB*20|0)|0,n-1|0,0,22,24,22);c=3553;f=a.bN.bi;j=B(379);$p=2;case 2:$z=ACB(f,j);if(C()){break _;}d=$z;Ce(c,d);V(3042);C0(775,769);Ct(a,l-7|0,(h/2|0)-7|0,0,0,16,16);X(3042);o=((a.bN.e.c5/3|0)%2|0)!=1?0:1;if(a.bN.e.c5<10)o=0;p=a.bN.e.bI;q=a.bN.e.rP;Ls(a.td,Long_fromInt(Bg(a.p$,312871)));if(!AEU(a.bN.ce)){X(3042);V(32826);BU();Bq(180.0,1.0,0.0,0.0);Gm();By();r=0;c=l
-90|0;m=(h-16|0)-3|0;if(r>=9){Dr();X(32826);if(!a.bN.r.kf)Cn(i,B(380),2,2,16777215);else{Cn(i,O(H(H(H(BS(),B(381)),a.bN.kn),B(21))),2,2,16777215);Cn(i,Kn(a.bN),2,12,16777215);Cn(i,L4(a.bN),2,22,16777215);Cn(i,KH(a.bN),2,32,16777215);s=IX();t=Io();u=Long_sub(t,ID());j=O(H(CP(H(CP(H(CP(H(BS(),B(382)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(383)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(384)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(385)));Gj(a,i,j,(g-Db(i,j)|0)
-2|0,2,14737632);f=O(H(CP(H(CP(H(BS(),B(386)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(383)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(387)));Gj(a,i,f,(g-Db(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CZ(a.gj)&&m<10){if(Z(a.gj,m).m9<200)Cn(i,Z(a.gj,m).vY,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;}r=Yu(a.bN.e);n=0;v=h-32|0;w=l+91|0;d=S(p,4);while(n<10){if(r>0){x=(w-(n*8|0)|0)-9|0;c=S((n*2|0)+1|0,r);if(c<0)Ct(a,x,v,34,9,9,9);if(!c)Ct(a,x,v,
25,9,9,9);if(c>0)Ct(a,x,v,16,9,9,9);}y=0;if(o)y=1;z=m+(n*8|0)|0;c=d>0?v:v+D(a.td,2)|0;Ct(a,z,c,16+(y*9|0)|0,0,9,9);if(o){e=S((n*2|0)+1|0,q);if(e<0)Ct(a,z,c,70,0,9,9);if(!e)Ct(a,z,c,79,0,9,9);}e=S((n*2|0)+1|0,p);if(e<0)Ct(a,z,c,52,0,9,9);if(!e)Ct(a,z,c,61,0,9,9);n=n+1|0;}f=a.bN.e;j=A4R;$p=4;continue _;case 3:ZT(a,r,n,m,b);if(C()){break _;}r=r+1|0;if(r>=9){Dr();X(32826);if(!a.bN.r.kf)Cn(i,B(380),2,2,16777215);else{Cn(i,O(H(H(H(BS(),B(381)),a.bN.kn),B(21))),2,2,16777215);Cn(i,Kn(a.bN),2,12,16777215);Cn(i,L4(a.bN),
2,22,16777215);Cn(i,KH(a.bN),2,32,16777215);s=IX();t=Io();u=Long_sub(t,ID());j=O(H(CP(H(CP(H(CP(H(BS(),B(382)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(383)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(384)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(385)));Gj(a,i,j,(g-Db(i,j)|0)-2|0,2,14737632);f=O(H(CP(H(CP(H(BS(),B(386)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(383)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(387)));Gj(a,i,f,(g-Db(i,f)|0)
-2|0,12,14737632);}m=0;e=h-8|0;while(m<CZ(a.gj)&&m<10){if(Z(a.gj,m).m9<200)Cn(i,Z(a.gj,m).vY,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;continue _;case 4:a:{$z=ABS(f,j);if(C()){break _;}c=$z;if(c){c=QO((a.bN.e.fu-2|0)*10.0/300.0)|0;ba=(QO(a.bN.e.fu*10.0/300.0)|0)-c|0;x=0;d=c+ba|0;p=v-9|0;while(true){if(x>=d)break a;if(x>=c)Ct(a,m+(x*8|0)|0,p,25,18,9,9);else Ct(a,m+(x*8|0)|0,p,16,18,9,9);x=x+1|0;}}}X(3042);V(32826);BU();Bq(180.0,1.0,0.0,0.0);Gm();By();r=0;c=l-90|0;m=(h-16|0)-3|0;if(r
>=9){Dr();X(32826);if(!a.bN.r.kf)Cn(i,B(380),2,2,16777215);else{Cn(i,O(H(H(H(BS(),B(381)),a.bN.kn),B(21))),2,2,16777215);Cn(i,Kn(a.bN),2,12,16777215);Cn(i,L4(a.bN),2,22,16777215);Cn(i,KH(a.bN),2,32,16777215);s=IX();t=Io();u=Long_sub(t,ID());j=O(H(CP(H(CP(H(CP(H(BS(),B(382)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(383)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(384)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(385)));Gj(a,i,j,(g-Db(i,j)|0)-2|0,2,14737632);f=O(H(CP(H(CP(H(BS(),
B(386)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(383)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(387)));Gj(a,i,f,(g-Db(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CZ(a.gj)&&m<10){if(Z(a.gj,m).m9<200)Cn(i,Z(a.gj,m).vY,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function ZT(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.bN.e.F.bb.data[b];if(f===null)return;g=f.lm-e;b=S(g,0.0);if(b>0){BU();h=1.0+g/5.0;i=c+8|0;g=i;j=d+12|0;Br(g,j,0.0);Co(1.0/h,(h+1.0)/2.0,1.0);Br( -i, -j,0.0);}k=A9K;l=a.bN.ey;m=a.bN.bi;$p=1;case 1:ABu(k,l,m,f,c,d);if(C()){break _;}if(b>0)By();JA(A9K,a.bN.ey,a.bN.bi,f,c,d);return;default:
Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AFl(a){var b,c;a.p$=a.p$+1|0;b=0;while(b<a.gj.p){c=Z(a.gj,b);c.m9=c.m9+1|0;b=b+1|0;}}
function VR(){A9K=TS();}
function Tk(){}
function V9(){var a=this;E.call(a);a.hF=null;a.bC=null;a.hE=null;a.eb=null;a.f3=null;a.cJ=null;a.c0=0;a.c_=0;a.i7=0;a.wn=0;a.cn=null;a.AC=null;a.nY=0;a.m0=0;a.ve=0;a.uV=0;a.oK=0;a.oL=0;a.oM=0;a.rk=0;a.rj=0;a.rl=0;a.qm=0;a.rh=0;a.j9=0;a.uZ=0;a.Dh=null;a.DJ=null;a.qq=0;a.qa=0;a.An=0;a.qG=0;a.oT=0;a.nr=null;a.Dc=0;a.CN=0;a.pV=0.0;a.pU=0.0;a.pT=0.0;a.rS=0.0;a.pm=0;}
function A0E(a,b){var c=new V9();ATq(c,a,b);return c;}
function ATq(a,b,c){var d,e,f,g,h,i,j;a.hF=Ck();a.eb=Ck();a.nY=0;a.qm=(-1);a.Dh=$rt_createIntArray(50000);a.DJ=Ol(64);a.nr=Ck();a.Dc=0;a.CN=Hx(1);a.pV=(-9999.0);a.pU=(-9999.0);a.pT=(-9999.0);a.pm=0;a.cn=b;a.hE=c;a.wn=Hx(786432);a.m0=Hx(3);BU();ET(a.m0,4864);U4(a);DL();By();Bv();d=A3Q;a.ve=a.m0+1|0;ET(a.ve,4864);e=(-384);while(e<=384){f=(-384);while(f<=384){Bu(d);g=e+0|0;h=f+0|0;Ba(d,g,16.0,h);i=e+64|0;Ba(d,i,16.0,h);f=f+64|0;h=f;Ba(d,i,16.0,h);Ba(d,g,16.0,h);Bm(d);}e=e+64|0;}DL();a.uV=a.m0+2|0;ET(a.uV,4864);Bu(d);f
=(-384);while(f<=384){j=(-384);while(j<=384){g=f+64|0;h=j+0|0;Ba(d,g,(-16.0),h);i=f+0|0;Ba(d,i,(-16.0),h);j=j+64|0;h=j;Ba(d,i,(-16.0),h);Ba(d,g,(-16.0),h);}f=f+64|0;}Bm(d);DL();}
function U4(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;b=new De;Bv();c=A3Q;Bu(c);d=0;while(d<1500){a:{e=L(b)*2.0-1.0;f=L(b)*2.0-1.0;g=L(b)*2.0-1.0;h=0.25+L(b)*0.25;i=e*e+f*f+g*g;if(i<1.0&&i>0.01){j=1.0/DK(i);e=e*j;f=f*j;g=g*j;k=e*100.0;l=f*100.0;m=g*100.0;n=CB(e,g);o=Fw(n);p=FG(n);q=CB(DK(e*e+g*g),f);r=Fw(q);s=FG(q);t=Cb(b)*3.141592653589793*2.0;u=Fw(t);v=FG(t);w=0;g=0.0*s;x=0.0*r;while(true){if(w>=4)break a;y=((w&2)-1|0)*h;w=w+1|0;z=((w&2)-1|0)*h;j=y*v-z*u;ba=z*v+y*u;bb=j*r+g;bc
=x-j*s;bd=bc*o-ba*p;be=ba*o+bc*p;Ba(c,k+bd,l+bb,m+be);}}}d=d+1|0;}Bm(c);}
function N7(a,b){if(a.bC!==null)AFF(a.bC,a);a.pV=(-9999.0);a.pU=(-9999.0);a.pT=(-9999.0);A5q.mF=b;a.bC=b;a.AC=AXC(b);if(b!==null){AH_(b,a);Jx(a);}}
function Jx(a){var b,c,d,e,f,g,h,i;a:{J();AFb(A38,a.cn.r.lB);a.qm=a.cn.r.g9;if(a.cJ!==null){b=0;while(true){if(b>=a.cJ.data.length)break a;ALR(a.cJ.data[b]);b=b+1|0;}}}b=64<<(3-a.qm|0);if(b>400)b=400;b=(b/16|0)+1|0;a.c0=b;a.c_=8;a.i7=b;a.cJ=N(G6,Bg(Bg(a.c0,a.c_),a.i7));a.f3=N(G6,Bg(Bg(a.c0,a.c_),a.i7));c=0;d=0;a.oK=0;a.oL=0;a.oM=0;a.rk=a.c0;a.rj=a.c_;a.rl=a.i7;e=0;while(e<a.eb.p){Z(a.eb,e).h1=0;e=e+1|0;}DB(a.eb);f=0;while(f<a.c0){g=0;while(g<a.c_){h=0;while(h<a.i7){if(a.cJ.data[Bg(Bg(h,a.c_)+g|0,a.c0)+f|0]!==
null)Fk(a.hF,a.cJ.data[Bg(Bg(h,a.c_)+g|0,a.c0)+f|0].fD);a.cJ.data[Bg(Bg(h,a.c_)+g|0,a.c0)+f|0]=A07(a.bC,a.hF,f*16|0,g*16|0,h*16|0,16,a.wn+c|0);a.cJ.data[Bg(Bg(h,a.c_)+g|0,a.c0)+f|0].Fj=0;a.cJ.data[Bg(Bg(h,a.c_)+g|0,a.c0)+f|0].vc=1;a.cJ.data[Bg(Bg(h,a.c_)+g|0,a.c0)+f|0].eT=1;i=a.cJ.data[Bg(Bg(h,a.c_)+g|0,a.c0)+f|0];b=d+1|0;i.D$=d;Jf(a.cJ.data[Bg(Bg(h,a.c_)+g|0,a.c0)+f|0]);a.f3.data[Bg(Bg(h,a.c_)+g|0,a.c0)+f|0]=a.cJ.data[Bg(Bg(h,a.c_)+g|0,a.c0)+f|0];U(a.eb,a.cJ.data[Bg(Bg(h,a.c_)+g|0,a.c0)+f|0]);c=c+3|0;h=h+1
|0;d=b;}g=g+1|0;}f=f+1|0;}if(a.bC!==null){i=a.bC.bc;P7(a,I(i.c),I(i.i),I(i.d));Ne(a.f3,AQP(i));}}
function X9(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:ALv(A9t,a.bC,a.hE,a.cn.ey,a.cn.e,d);ACj(A5q,a.bC,a.hE,a.cn.ey,a.cn.e,a.cn.r,d);a.rh=0;a.j9=0;a.uZ=0;e=a.bC.bc;f=e.b6;g=e.c-e.b6;h=d;A9L=f+g*h;A9M=e.bP+(e.i-e.bP)*h;A9N=e.b7+(e.d-e.b7)*h;A9O=e.b6+(e.c-e.b6)*h;A9P=e.bP+(e.i-e.bP)*h;A9Q=e.b7+(e.d-e.b7)*h;i=a.bC.dt;a.rh=i.p;j=0;while(true){if(j>=i.p){j
=0;if(j>=a.hF.p)return;b=A9t;c=Z(a.hF,j);$p=1;continue _;}k=Z(i,j);if(Ph(k,b)&&KG(c,k.G)){if(k!==a.bC.bc)break;if(a.cn.r.cf)break;}j=j+1|0;}a.j9=a.j9+1|0;e=A5q;$p=2;continue _;case 1:UK(b,c,d);if(C()){break _;}j=j+1|0;if(j>=a.hF.p)return;b=A9t;c=Z(a.hF,j);continue _;case 2:AHG(e,k,d);if(C()){break _;}while(true){j=j+1|0;if(j>=i.p){j=0;if(j>=a.hF.p)return;b=A9t;c=Z(a.hF,j);$p=1;continue _;}k=Z(i,j);if(!Ph(k,b))continue;if(!KG(c,k.G))continue;if(k!==a.bC.bc)break;if(!a.cn.r.cf)continue;else break;}a.j9=a.j9+1
|0;e=A5q;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AF5(a){var b;b=new Bd;Bb(b);return O(Be(H(Be(H(Be(H(Be(H(Be(H(b,B(388)),a.qG),B(17)),a.qq),B(389)),a.qa),B(390)),a.An),B(391)),a.oT));}
function TT(a){var b;b=new Bd;Bb(b);return O(Be(H(Be(H(Be(H(Be(H(b,B(392)),a.j9),B(17)),a.rh),B(393)),a.uZ),B(394)),(a.rh-a.uZ|0)-a.j9|0));}
function P7(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;c=b+(-8)|0;d=d+(-8)|0;a.oK=2147483647;a.oL=2147483647;a.oM=2147483647;a.rk=(-2147483648);a.rj=(-2147483648);a.rl=(-2147483648);e=a.c0*16|0;f=e/2|0;g=0;h=e-1|0;while(g<a.c0){i=g*16|0;j=(i+f|0)-c|0;if(j<0)j=j-h|0;i=i-Bg(j/e|0,e)|0;if(i<a.oK)a.oK=i;if(i>a.rk)a.rk=i;k=0;while(k<a.i7){l=k*16|0;m=(l+f|0)-d|0;if(m<0)m=m-h|0;j=l-Bg(m/e|0,e)|0;if(j<a.oM)a.oM=j;if(j>a.rl)a.rl=j;n=0;while(n<a.c_){o=n*16|0;if(o<a.oL)a.oL=o;if(o>a.rj)a.rj=o;p=a.cJ.data[Bg(Bg(k,a.c_)+n|0,
a.c0)+g|0];q=p.h1;Pn(p,i,o,j);if(!q&&p.h1)U(a.eb,p);n=n+1|0;}k=k+1|0;}g=g+1|0;}}
function Rz(a,b,c,d){var e,f,g;if(a.cn.r.g9!=a.qm)Jx(a);if(!c){a.qq=0;a.qa=0;a.An=0;a.qG=0;a.oT=0;}e=b.c-a.pV;f=b.i-a.pU;g=b.d-a.pT;if(e*e+f*f+g*g>16.0){a.pV=b.c;a.pU=b.i;a.pT=b.d;P7(a,I(b.c),I(b.i),I(b.d));Ne(a.f3,AQP(b));}return 0+Uq(a,0,a.f3.data.length,c,d)|0;}
function Uq(a,b,c,d,e){var f,g,h,i,j,k,l;DB(a.nr);f=0;while(b<c){if(!d){a.qq=a.qq+1|0;if(a.f3.data[b].gd.data[d])a.oT=a.oT+1|0;else if(a.f3.data[b].eT)a.qG=a.qG+1|0;else a.qa=a.qa+1|0;}if(!a.f3.data[b].gd.data[d]&&a.f3.data[b].eT&&a.f3.data[b].vc&&M3(a.f3.data[b],d)>=0){U(a.nr,a.f3.data[b]);f=f+1|0;}b=b+1|0;}g=a.cn.e;h=g.b6+(g.c-g.b6)*e;i=g.bP+(g.i-g.bP)*e;j=g.b7+(g.d-g.b7)*e;k=0;while(k<a.nr.p){l=Z(a.nr,k);BU();Br(l.yr-h,l.AO-i,l.z3-j);E4(M3(l,d));By();k=k+1|0;}return f;}
function GI(a){a.nY=a.nY+1|0;}
function YG(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:X(3553);c=Mq(a.bC,b);d=c.t;e=c.v;f=c.s;if(a.cn.r.d5){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}Fd(d,e,f);Bv();h=A3Q;Fz(0);V(2912);Fd(d,e,f);E4(a.ve);V(3553);X(2912);X(3008);V(3042);C0(1,1);BU();BN(1.0,1.0,1.0,1.0);Br(0.0,0.0,0.0);Bq(0.0,0.0,0.0,1.0);Bq(Gn(a.bC,b)*360.0,
1.0,0.0,0.0);i=3553;c=a.hE;j=B(395);$p=1;case 1:$z=ACB(c,j);if(C()){break _;}k=$z;Ce(i,k);Bu(h);F(h,(-30.0),100.0,(-30.0),0.0,0.0);F(h,30.0,100.0,(-30.0),1.0,0.0);F(h,30.0,100.0,30.0,1.0,1.0);F(h,(-30.0),100.0,30.0,0.0,1.0);Bm(h);i=3553;c=a.hE;j=B(396);$p=2;case 2:$z=ACB(c,j);if(C()){break _;}k=$z;Ce(i,k);Bu(h);F(h,(-20.0),(-100.0),20.0,1.0,1.0);F(h,20.0,(-100.0),20.0,0.0,1.0);F(h,20.0,(-100.0),(-20.0),0.0,0.0);F(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Bm(h);X(3553);g=AEi(a.bC,b);if(g>0.0){BN(g,g,g,g);E4(a.m0);}BN(1.0,
1.0,1.0,1.0);X(3042);V(3008);V(2912);By();Fd(d*0.20000000298023224+0.03999999910593033,e*0.20000000298023224+0.03999999910593033,f*0.6000000238418579+0.10000000149011612);X(3553);E4(a.uV);V(3553);Fz(1);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Uz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.cn.r.lB){$p=2;continue _;}X(2884);c=a.cn.e.bP;d=a.cn.e.i-a.cn.e.bP;e=b;f=c+d*e;g=32;Bv();h=A3Q;i=3553;j=a.hE;k=B(397);$p=1;case 1:$z
=ACB(j,k);if(C()){break _;}l=$z;Ce(i,l);V(3042);C0(770,771);j=PT(a.bC,b);m=j.t;n=j.v;o=j.s;if(a.cn.r.d5){p=m*30.0;m=(p+n*59.0+o*11.0)/100.0;n=(p+n*70.0)/100.0;o=(p+o*70.0)/100.0;}q=a.bC.bc.bH+(a.bC.bc.c-a.bC.bc.bH)*e+(a.nY+b)*0.029999999329447746;c=a.bC.bc.bG+(a.bC.bc.d-a.bC.bc.bG)*e;i=I(q/2048.0);l=I(c/2048.0);d=q-(i*2048|0);c=c-(l*2048|0);p=120.0-f+0.33000001311302185;r=d*4.8828125E-4;s=c*4.8828125E-4;Bu(h);FC(h,m,n,o,0.800000011920929);d=p;t=(-256);while(t<256){u=(-256);while(u<256){v=t+0|0;c=v;w=u+g|0;e
=w;q=v*4.8828125E-4+r;x=w*4.8828125E-4+s;F(h,c,d,e,q,x);v=t+g|0;y=v;z=v*4.8828125E-4+r;F(h,y,d,e,z,x);u=u+0|0;e=u;x=u*4.8828125E-4+s;F(h,y,d,e,z,x);F(h,c,d,e,q,x);u=w;}t=t+g|0;}Bm(h);BN(1.0,1.0,1.0,1.0);X(3042);V(2884);return;case 2:WM(a,b);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function WM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:X(2884);c=a.cn.e.bP;d
=a.cn.e.i-a.cn.e.bP;e=b;f=c+d*e;Bv();g=A3Q;h=12.0;c=(a.bC.bc.bH+(a.bC.bc.c-a.bC.bc.bH)*e+(a.nY+b)*0.029999999329447746)/12.0;d=(a.bC.bc.bG+(a.bC.bc.d-a.bC.bc.bG)*e)/12.0+0.33000001311302185;i=108.0-f+0.33000001311302185;j=I(c/2048.0);k=I(d/2048.0);e=c-(j*2048|0);d=d-(k*2048|0);l=3553;m=a.hE;n=B(397);$p=1;case 1:$z=ACB(m,n);if(C()){break _;}j=$z;Ce(l,j);V(3042);C0(770,771);m=PT(a.bC,b);o=m.t;p=m.v;q=m.s;if(a.cn.r.d5){b=o*30.0;o=(b+p*59.0+q*11.0)/100.0;p=(b+p*70.0)/100.0;q=(b+q*70.0)/100.0;}r=I(e)*0.00390625;b
=I(d)*0.00390625;s=e-I(e);t=d-I(d);Co(h,1.0,h);u=0;k=S(i,(-5.0));v=i+0.0;w=S(i,5.0);f=i+4.0;x=f-9.765625E-4;y=f;while(u<2){if(u)ER(1,1,1,1);else ER(0,0,0,0);z=(-2);while(z<=3){ba=(-2);while(ba<=3){Bu(g);bb=z*8|0;bc=ba*8|0;bd=bb-s;be=bc-t;if(k>0){FC(g,o*0.699999988079071,p*0.699999988079071,q*0.699999988079071,0.800000011920929);CX(g,0.0,(-1.0),0.0);bf=bd+0.0;c=be+8.0;d=(bb+0.0)*0.00390625+r;e=(bc+8.0)*0.00390625+b;F(g,bf,v,c,d,e);bg=bd+8.0;bh=(bb+8.0)*0.00390625+r;F(g,bg,v,c,bh,e);c=be+0.0;e=(bc+0.0)*0.00390625
+b;F(g,bg,v,c,bh,e);F(g,bf,v,c,d,e);}if(w<=0){FC(g,o,p,q,0.800000011920929);CX(g,0.0,1.0,0.0);c=bd+0.0;d=be+8.0;e=(bb+0.0)*0.00390625+r;bg=(bc+8.0)*0.00390625+b;F(g,c,x,d,e,bg);bh=bd+8.0;bf=(bb+8.0)*0.00390625+r;F(g,bh,x,d,bf,bg);d=be+0.0;bg=(bc+0.0)*0.00390625+b;F(g,bh,x,d,bf,bg);F(g,c,x,d,e,bg);}a:{FC(g,o*0.8999999761581421,p*0.8999999761581421,q*0.8999999761581421,0.800000011920929);if(z>(-1)){CX(g,(-1.0),0.0,0.0);bi=0;d=be+8.0;bg=(bc+8.0)*0.00390625+b;bh=be+0.0;bf=(bc+0.0)*0.00390625+b;while(true){if(bi
>=8)break a;f=bi;c=bd+f+0.0;e=(bb+f+0.5)*0.00390625+r;F(g,c,v,d,e,bg);F(g,c,y,d,e,bg);F(g,c,y,bh,e,bf);F(g,c,v,bh,e,bf);bi=bi+1|0;}}}b:{if(z<=1){CX(g,1.0,0.0,0.0);bi=0;e=be+8.0;bh=(bc+8.0)*0.00390625+b;bf=be+0.0;c=(bc+0.0)*0.00390625+b;while(true){if(bi>=8)break b;f=bi;d=bd+f+1.0-9.765625E-4;bg=(bb+f+0.5)*0.00390625+r;F(g,d,v,e,bg,bh);F(g,d,y,e,bg,bh);F(g,d,y,bf,bg,c);F(g,d,v,bf,bg,c);bi=bi+1|0;}}}c:{FC(g,o*0.800000011920929,p*0.800000011920929,q*0.800000011920929,0.800000011920929);if(ba>(-1)){CX(g,0.0,0.0,
(-1.0));l=0;c=bd+0.0;e=(bb+0.0)*0.00390625+r;bh=bd+8.0;bf=(bb+8.0)*0.00390625+r;while(true){if(l>=8)break c;f=l;d=be+f+0.0;bg=(bc+f+0.5)*0.00390625+b;F(g,c,y,d,e,bg);F(g,bh,y,d,bf,bg);F(g,bh,v,d,bf,bg);F(g,c,v,d,e,bg);l=l+1|0;}}}d:{if(ba<=1){CX(g,0.0,0.0,1.0);l=0;c=bd+0.0;e=(bb+0.0)*0.00390625+r;bh=bd+8.0;bf=(bb+8.0)*0.00390625+r;while(true){if(l>=8)break d;f=l;d=be+f+1.0-9.765625E-4;bg=(bc+f+0.5)*0.00390625+b;F(g,c,y,d,e,bg);F(g,bh,y,d,bf,bg);F(g,bh,v,d,bf,bg);F(g,c,v,d,e,bg);l=l+1|0;}}}Bm(g);ba=ba+1|0;}z=
z+1|0;}u=u+1|0;}BN(1.0,1.0,1.0,1.0);X(3042);V(2884);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function ADf(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.eb;e=new Sd;e.vF=b;OG(d,e);f=a.eb.p-1|0;g=a.eb.p;h=0;a:{while(h<g){d=Z(a.eb,f-h|0);if(!c){if(F3(d,b)<=1024.0)break a;if(!d.eT){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.eT)break a;h=h+1|0;}return a.eb.p?0:1;}$p=1;case 1:YL(d);if(C()){break _;}GT(a.eb,d);d.h1=0;a:{while(true){h=h+1|0;if(h>=g)break;d=Z(a.eb,f-h|0);if
(!c){if(F3(d,b)<=1024.0)break a;if(!d.eT){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.eT)break a;}return a.eb.p?0:1;}continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AAX(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{Bv();g=A3Q;V(3042);V(3008);C0(770,1);BN(1.0,1.0,1.0,(Bl(Long_toNumber(B1())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(!d){if(a.rS<=0.0)break a;C0(774,768);e=a.hE;h=B(171);$p=2;continue _;}if(e!==null){C0(770,771);i=Bl(Long_toNumber(B1())/
100.0)*0.20000000298023224+0.800000011920929;BN(i,i,i,Bl(Long_toNumber(B1())/200.0)*0.20000000298023224+0.5);b=a.hE;e=B(171);$p=1;continue _;}}X(3042);X(3008);return;case 1:$z=ACB(b,e);if(C()){break _;}j=$z;Ce(3553,j);X(3042);X(3008);return;case 2:$z=ACB(e,h);if(C()){break _;}k=$z;Ce(3553,k);BN(1.0,1.0,1.0,0.5);BU();e=a.bC;d=c.hg;k=c.hh;j=c.hi;$p=3;case 3:$z=X4(e,d,k,j);if(C()){break _;}j=$z;if(j<=0)h=null;else{J();h=A3U.data[j];}X(3008);Mi((-3.0),(-3.0));V(32823);Bu(g);l=b.b6;m=b.c-b.b6;n=f;Er(g, -(l+m*n),
 -(b.bP+(b.i-b.bP)*n), -(b.b7+(b.d-b.b7)*n));YR(g);if(h===null){J();h=A30;}b=a.AC;d=c.hg;k=c.hh;j=c.hi;o=240+(a.rS*10.0|0)|0;$p=4;case 4:AHa(b,h,d,k,j,o);if(C()){break _;}Bm(g);Er(g,0.0,0.0,0.0);Mi(0.0,0.0);X(32823);V(3008);Fz(1);By();X(3042);X(3008);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ABt(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!d&&!c.jZ){V(3042);C0(770,771);BN(0.0,0.0,0.0,0.4000000059604645);X(3553);Fz(0);e=a.bC;d=c.hg;g=c.hh;h=c.hi;$p=1;continue _;}return;case 1:$z=X4(e,d,g,h);if(C()){break _;}g=$z;if(g<=0){Fz(1);V(3553);X(3042);return;}i=b.b6;j=b.c-b.b6;k=f;i=i+j*k;j=b.bP+(b.i-b.bP)*k;k=b.b7+(b.d-b.b7)*k;J();b=A3U.data[g];e
=a.bC;d=c.hg;g=c.hh;h=c.hi;$p=2;case 2:$z=b.nn(e,d,g,h);if(C()){break _;}b=$z;b=QB(Da(b,0.0020000000949949026,0.0020000000949949026,0.0020000000949949026), -i, -j, -k);Bv();c=A3Q;Fq(c,3);Ba(c,b.N,b.I,b.O);Ba(c,b.R,b.I,b.O);Ba(c,b.R,b.I,b.S);Ba(c,b.N,b.I,b.S);Ba(c,b.N,b.I,b.O);Bm(c);Fq(c,3);Ba(c,b.N,b.Q,b.O);Ba(c,b.R,b.Q,b.O);Ba(c,b.R,b.Q,b.S);Ba(c,b.N,b.Q,b.S);Ba(c,b.N,b.Q,b.O);Bm(c);Fq(c,1);Ba(c,b.N,b.I,b.O);Ba(c,b.N,b.Q,b.O);Ba(c,b.R,b.I,b.O);Ba(c,b.R,b.Q,b.O);Ba(c,b.R,b.I,b.S);Ba(c,b.R,b.Q,b.S);Ba(c,b.N,
b.I,b.S);Ba(c,b.N,b.Q,b.S);Bm(c);Fz(1);V(3553);X(3042);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function P9(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=FN(b,16);i=FN(c,16);j=FN(d,16);k=FN(e,16);l=FN(f,16);m=FN(g,16);while(h<=k){n=h%a.c0|0;if(n<0)n=n+a.c0|0;o=i;while(o<=l){p=o%a.c_|0;if(p<0)p=p+a.c_|0;q=j;while(q<=m){r=q%a.i7|0;if(r<0)r=r+a.i7|0;s=Bg(Bg(r,a.c_)+p|0,a.c0)+n|0;t=a.cJ.data[s];if(!t.h1)U(a.eb,t);Jf(t);q=q+1|0;}o=o+1|0;}h=h+1|0;}}
function Ov(a,b,c,d){P9(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AI9(a,b,c,d,e,f,g){P9(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function ALV(a,b,c){var d;d=0;while(d<a.cJ.data.length){if(!ACE(a.cJ.data[d])&&!(a.cJ.data[d].eT&&(d+a.pm|0)&15))AMi(a.cJ.data[d],b);d=d+1|0;}a.pm=a.pm+1|0;}
function Yv(a,b,c,d,e,f,g){return;}
function AC5(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bC.bc.c-c;j=a.bC.bc.i-d;k=a.bC.bc.d-e;if(i*i+j*j+k*k<=256.0){if(b===B(205)){b=a.cn.cG;l=new Py;EP(l,a.bC,c,d,e,f,g,h);l.g8=1.0;l.hl=1.0;l.ht=1.0;l.ev=32;Dx(l,0.019999999552965164,0.019999999552965164);l.cZ=l.cZ*(L(l.l)*0.6000000238418579+0.20000000298023224);l.f=f*0.20000000298023224+(BI()*2.0-1.0)*0.019999999552965164;l.h=g*0.20000000298023224+(BI()*2.0-1.0)*0.019999999552965164;l.g=h*0.20000000298023224+(BI()*2.0-1.0)*0.019999999552965164;l.b_=8.0/(BI()*0.8+
0.2)|0;DR(b,l);}else if(b===B(248))DR(a.cn.cG,AXv(a.bC,c,d,e,1.0));else if(b===B(215)){b=a.cn.cG;l=new N8;EP(l,a.bC,c,d,e,f,g,h);l.f=f+(BI()*2.0-1.0)*0.05000000074505806;l.h=g+(BI()*2.0-1.0)*0.05000000074505806;l.g=h+(BI()*2.0-1.0)*0.05000000074505806;m=L(l.l)*0.30000001192092896+0.699999988079071;l.ht=m;l.hl=m;l.g8=m;l.cZ=L(l.l)*L(l.l)*6.0+1.0;l.b_=(16.0/(L(l.l)*0.8+0.2)|0)+2|0;DR(b,l);}else if(b!==B(249)){if(b===B(246))DR(a.cn.cG,A1X(a.bC,c,d,e));else if(b===B(206))DR(a.cn.cG,A1P(a.bC,c,d,e,f,g,h));else if
(b===B(247))DR(a.cn.cG,AXv(a.bC,c,d,e,2.5));}else{b=a.cn.cG;l=new MB;EP(l,a.bC,c,d,e,f,g,h);l.f=l.f*0.009999999776482582+f;l.h=l.h*0.009999999776482582+g;l.g=l.g*0.009999999776482582+h;L(l.l);L(l.l);L(l.l);L(l.l);L(l.l);L(l.l);l.Al=l.cZ;l.ht=1.0;l.hl=1.0;l.g8=1.0;l.b_=(8.0/(BI()*0.8+0.2)|0)+4|0;l.nx=1;l.ev=48;DR(b,l);}}}
function AY0(a,b){return;}
function ANk(a,b){return;}
function RK(a){var b;b=0;while(b<a.cJ.data.length){if(a.cJ.data[b].mY){if(!a.cJ.data[b].h1)U(a.eb,a.cJ.data[b]);Jf(a.cJ.data[b]);}b=b+1|0;}}
function I7(){var a=this;E.call(a);a.wC=null;a.jv=null;a.gq=null;a.kI=null;a.y4=null;a.um=null;a.q4=0;a.As=0;}
var A9R=0;var A3P=null;function ACB(a,b){var c,d,e,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Cz(A3P,b);if(c!==null)return c.f2;try{AAy(a.jv);SQ(a.jv);d=N6(a.jv,0);if(!Lh(b,B(398))){e=IG(b);$p=1;continue _;}a.q4=1;e=IG(JR(b,7));$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof B3){}else{throw $$e;}}b=new B5;Bp(b,B(399));M(b);case 1:a:{try{$z=UZ(a,e);if(C()){break _;}c=$z;JV(a,c,d);A9R=0;Oi(A3P,b,CG(d));}catch($$e){$$je
=Bh($$e);if($$je instanceof B3){break a;}else{throw $$e;}}return d;}b=new B5;Bp(b,B(399));M(b);case 2:a:{try{$z=UZ(a,e);if(C()){break _;}c=$z;JV(a,c,d);a.q4=0;Oi(A3P,b,CG(d));}catch($$e){$$je=Bh($$e);if($$je instanceof B3){break a;}else{throw $$e;}}return d;}b=new B5;Bp(b,B(399));M(b);default:Eq();}}CL().s(a,b,c,d,e,$p);}
function ACH(a,b){var c;D2(a.jv);SQ(a.jv);c=N6(a.jv,0);JV(a,b,c);BK(a.wC,CG(c),b);return c;}
function JV(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;DI(a,c);if(!A9R){DP(3553,10241,9728);DP(3553,10240,9728);}else{DP(3553,10241,9986);DP(3553,10240,9728);DP(3553,33085,4);}if(a.As){DP(3553,10241,9729);DP(3553,10240,9729);}if(!a.q4){DP(3553,10242,10497);DP(3553,10243,10497);}else{DP(3553,10242,10496);DP(3553,10243,10496);}d=b.u1;e=b.z5;f=b.r3;g=$rt_createByteArray(Bg(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if
(a.um!==null&&a.um.d5){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)|0)/100|0;m=(o+(m*70|0)|0)/100|0;n=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}a:{D2(a.gq);Q2(a.gq,g);b=a.gq;D$(b,0);Lc(b,h.length);Pv(3553,0,6408,d,e,0,6408,5121,a.gq);if(A9R){p=1;while(true){if(p>4)break a;o=d>>(p-1|0);q=d>>p;r=e>>p;D2(a.kI);s=0;while(s<q){t=0;while(t<r){b=a.gq;c=s*2|0;i=c+0|0;k=t*2|0;n=Bg(k+0|0,o);u=Jc(b,(i+n|0)*4|0);b=a.gq;c=c+1|0;v=Jc(b,(c+n|0)*4|0);b=a.gq;k=
Bg(k+1|0,o);w=Jc(b,(c+k|0)*4|0);x=Jc(a.gq,(i+k|0)*4|0);y=Jv(a,Jv(a,u,v),Jv(a,w,x));WG(a.kI,(s+Bg(t,q)|0)*4|0,y);t=t+1|0;}s=s+1|0;}Pv(3553,p,6408,q,r,0,6408,5121,a.kI);z=a.gq;a.gq=a.kI;a.kI=z;p=p+1|0;}}}}
function Zt(a,b,c){var d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=B(363);$p=1;case 1:$z=ACB(a,b);if(C()){break _;}d=$z;return d;default:Eq();}}CL().s(a,b,c,d,$p);}
function F4(a,b){U(a.y4,b);b.nC();}
function Jv(a,b,c){return ((((b&(-16777216))>>24&255)+((c&(-16777216))>>24&255)|0)>>1<<24)+(((b&16711422)+(c&16711422)|0)>>1)|0;}
function UZ(a,b){var c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAb(b);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,$p);}
function DI(a,b){if(b<0)return;Ce(3553,b);}
function Y7(){A9R=0;}
function Sj(){var a=this;E.call(a);a.qp=null;a.u0=0;a.rv=0;}
function A9S(a,b,c){var d=new Sj();AI$(d,a,b,c);return d;}
function AI$(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.qp=$rt_createIntArray(256);a.u0=0;e=IG(c);$p=1;case 1:$z=AAb(e);if(C()){break _;}f
=$z;g=f.u1;e=f.r3;h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+Bg(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.qp.data[h]=k+2|0;h=h+1|0;}a.u0=ACH(d,f);a.rv=Hx(288);Bv();p=A3Q;q=0;while(q<256){ET(a.rv+q|0,4864);Bu(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;F(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;F(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;F(p,7.989999771118164,0.0,0.0,x,y);F(p,0.0,0.0,0.0,u,y);Bm(p);DL();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.d5){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}ET((a.rv+256|0)+l|0,4864);Fd(ba/255.0,bb/255.0,bc/255.0);DL();l=l+1|0;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function Cn(a,b,c,d,e){PC(a,b,c+1|0,d+1|0,e,1);D4(a,b,c,d,e);}
function D4(a,b,c,d,e){PC(a,b,c,d,e,0);}
function PC(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Ce(3553,a.u0);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BN(g,h,i,j);BU();Br(c,d,0.0);k=0;while(k<BE(b)){c=k;while(true){d=BE(b);k=c+1|0;if(d<=k)break;if(Cr(b,c)!=167)break;l=QU(B(400),Cr(AE_(b),k));c=c+2|0;}if(c<BE(b)){m=Ru(Cr(b,c));if(m>=0){E4((a.rv+m|0)+32|0);Br(a.qp.data[m+32|0],0.0,0.0);}}}By();}
function Db(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<BE(b)){if(Cr(b,d)==167)d=d+1|0;else{e=Ru(Cr(b,d));if(e>=0)c=c+a.qp.data[e+32|0]|0;}d=d+1|0;}return c;}
function Ny(){var a=this;E.call(a);a.B4=0;a.B3=0;}
function A9T(){var a=new Ny();AY6(a);return a;}
function AY6(a){return;}
function Uo(a){AHi(1);a.B4=0;a.B3=0;}
function AAQ(a){JD();KB();AHi(0);}
function AFI(){var a=this;DY.call(a);a.ny=null;a.pw=null;a.m8=null;a.q$=null;a.rp=0;}
function A0l(){var a=new AFI();AUU(a);return a;}
function AUU(a){J();Gt(a,A4Z.W+1|0);a.ny=$rt_createFloatArray(256);a.pw=$rt_createFloatArray(256);a.m8=$rt_createFloatArray(256);a.q$=$rt_createFloatArray(256);a.rp=0;a.uB=2;}
function ARU(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.rp=a.rp+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=c-2|0;while(e<=c){f=b&15;g=e&15;d=d+a.ny.data[f+(g*16|0)|0];e=e+1|0;}h=a.pw.data;i=b+(c*16|0)|0;h[i]=d/3.200000047683716+a.m8.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}b=0;while(b<16){c=0;while(c<16){j=a.m8.data;i=b+(c*16|0)|0;j[i]=j[i]+a.q$.data[i]*0.05000000074505806;if(a.m8.data[i]<0.0)a.m8.data[i]=0.0;j=a.q$.data;j[i]=j[i]-0.30000001192092896;if(BI()<0.2)a.q$.data[i]=0.5;c=c+1|0;}b=b+1|0;}j=a.pw;a.pw=a.ny;a.ny
=j;c=0;while(c<256){d=a.ny.data[(c-(a.rp*16|0)|0)&255];if(d>1.0)d=1.0;if(d<0.0)d=0.0;k=d*d;i=32.0+k*32.0|0;l=50.0+k*64.0|0;m=255;n=146.0+k*50.0|0;if(a.lh){b=i*30|0;i=((b+(l*59|0)|0)+2805|0)/100|0;l=(b+(l*70|0)|0)/100|0;m=(b+17850|0)/100|0;}j=a.c9.data;b=c*4|0;j[b+0|0]=i<<24>>24;a.c9.data[b+1|0]=l<<24>>24;a.c9.data[b+2|0]=m<<24>>24;a.c9.data[b+3|0]=n<<24>>24;c=c+1|0;}}
function XS(){var a=this;DY.call(a);a.m5=null;a.pI=null;a.iR=null;a.qZ=null;a.rF=0;}
function A1U(){var a=new XS();AUf(a);return a;}
function AUf(a){J();Gt(a,A40.W+1|0);a.m5=$rt_createFloatArray(256);a.pI=$rt_createFloatArray(256);a.iR=$rt_createFloatArray(256);a.qZ=$rt_createFloatArray(256);a.rF=0;a.uB=2;}
function AX1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.rF=a.rF+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bl(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bl(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){j=(g+e|0)&15;h=(i+f|0)&15;d=d+a.m5.data[j+(h*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.pI.data;l=b+(c*16|0)|0;d=d/10.0;m=a.iR.data;e=(b+0|0)&15;j=((c+0|0)&15)*16|0;n=m[e+j|0];m=a.iR.data;h=h&15;n=n+m[h+j|0];m=a.iR.data;c=c+1|0;j=(c&15)*16|0;k[l]
=d+(n+m[h+j|0]+a.iR.data[e+j|0])/4.0*0.800000011920929;m=a.iR.data;m[l]=m[l]+a.qZ.data[l]*0.009999999776482582;if(a.iR.data[l]<0.0)a.iR.data[l]=0.0;m=a.qZ.data;m[l]=m[l]-0.05999999865889549;if(BI()<0.005)a.qZ.data[l]=1.5;}b=b+1|0;}m=a.pI;a.pI=a.m5;a.m5=m;c=0;while(c<256){d=a.m5.data[(c-((a.rF/3|0)*16|0)|0)&255]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;j=d*100.0+155.0|0;n=d*d;h=n*255.0|0;l=n*d*d*128.0|0;if(a.lh){b=j*30|0;j=((b+(h*59|0)|0)+(l*11|0)|0)/100|0;h=(b+(h*70|0)|0)/100|0;l=(b+(l*70|0)|0)/100|0;}m=a.c9.data;b
=c*4|0;m[b+0|0]=j<<24>>24;a.c9.data[b+1|0]=h<<24>>24;a.c9.data[b+2|0]=l<<24>>24;a.c9.data[b+3|0]=(-1);c=c+1|0;}}
function AMe(){var a=this;DY.call(a);a.k8=null;a.ne=null;}
function AOO(a){var b=new AMe();ARh(b,a);return b;}
function ARh(a,b){J();Gt(a,A5r.W+(b*16|0)|0);a.k8=$rt_createFloatArray(320);a.ne=$rt_createFloatArray(320);}
function AUk(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<16){c=0;while(c<20){d=18;e=a.k8.data;f=c+1|0;g=e[b+((f%20|0)*16|0)|0]*18.0;h=b-1|0;while(h<=(b+1|0)){i=c;while(i<=f){if(h>=0&&i>=0&&h<16&&i<20)g=g+a.k8.data[h+(i*16|0)|0];d=d+1|0;i=i+1|0;}h=h+1|0;}e=a.ne.data;j=b+(c*16|0)|0;e[j]=g/(d*1.059999942779541);if(c>=19)a.ne.data[j]=BI()*BI()*BI()*4.0+BI()*0.10000000149011612+0.20000000298023224;c=f;}b=b+1|0;}e=a.ne;a.ne=a.k8;a.k8=e;f=0;while(f<256){k=a.k8.data[f]*1.7999999523162842;if(k>1.0)k=1.0;if(k<0.0)k=
0.0;l=k*155.0+100.0|0;g=k*k;m=g*255.0|0;j=g*k*k*k*k*k*k*k*k*255.0|0;n=255;if(k<0.5)n=0;if(a.lh){c=l*30|0;l=((c+(m*59|0)|0)+(j*11|0)|0)/100|0;m=(c+(m*70|0)|0)/100|0;j=(c+(j*70|0)|0)/100|0;}e=a.c9.data;b=f*4|0;e[b+0|0]=l<<24>>24;a.c9.data[b+1|0]=m<<24>>24;a.c9.data[b+2|0]=j<<24>>24;a.c9.data[b+3|0]=n<<24>>24;f=f+1|0;}}
function ACi(){var a=this;CI.call(a);a.s1=0.0;a.vS=null;a.r8=null;}
function JW(){var a=new ACi();AUQ(a);return a;}
function AUQ(a){var b,c;DH(a);a.s1=0.0;b=N(Cp,106);c=b.data;c[0]=B(401);c[1]=B(402);c[2]=B(403);c[3]=B(404);c[4]=B(405);c[5]=B(406);c[6]=B(407);c[7]=B(408);c[8]=B(409);c[9]=B(410);c[10]=B(411);c[11]=B(412);c[12]=B(413);c[13]=B(414);c[14]=B(415);c[15]=B(416);c[16]=B(417);c[17]=B(418);c[18]=B(419);c[19]=B(420);c[20]=B(421);c[21]=B(422);c[22]=B(423);c[23]=B(424);c[24]=B(425);c[25]=B(426);c[26]=B(427);c[27]=B(428);c[28]=B(429);c[29]=B(430);c[30]=B(431);c[31]=B(432);c[32]=B(433);c[33]=B(434);c[34]=B(435);c[35]=B(436);c[36]
=B(437);c[37]=B(438);c[38]=B(439);c[39]=B(440);c[40]=B(441);c[41]=B(442);c[42]=B(443);c[43]=B(444);c[44]=B(445);c[45]=B(446);c[46]=B(447);c[47]=B(448);c[48]=B(449);c[49]=B(450);c[50]=B(422);c[51]=B(451);c[52]=B(452);c[53]=B(453);c[54]=B(454);c[55]=B(455);c[56]=B(456);c[57]=B(457);c[58]=B(458);c[59]=B(459);c[60]=B(460);c[61]=B(461);c[62]=B(462);c[63]=B(463);c[64]=B(464);c[65]=B(465);c[66]=B(466);c[67]=B(467);c[68]=B(468);c[69]=B(469);c[70]=B(470);c[71]=B(471);c[72]=B(472);c[73]=B(473);c[74]=B(474);c[75]=B(475);c[76]
=B(476);c[77]=B(477);c[78]=B(478);c[79]=B(479);c[80]=B(480);c[81]=B(481);c[82]=B(482);c[83]=B(483);c[84]=B(484);c[85]=B(485);c[86]=B(486);c[87]=B(487);c[88]=B(488);c[89]=B(489);c[90]=B(490);c[91]=B(491);c[92]=B(492);c[93]=B(493);c[94]=B(494);c[95]=B(495);c[96]=B(496);c[97]=B(497);c[98]=B(498);c[99]=B(499);c[100]=B(500);c[101]=B(501);c[102]=B(502);c[103]=B(503);c[104]=B(504);c[105]=B(505);a.vS=b;a.r8=a.vS.data[BI()*a.vS.data.length|0];}
function AVx(a){a.s1=a.s1+0.009999999776482582;}
function AIi(a,b,c){return;}
function ADo(a){DB(a.bE);U(a.bE,C9(1,(a.bh/2|0)-100|0,(a.bv/4|0)+48|0,B(506)));U(a.bE,C9(2,(a.bh/2|0)-100|0,(a.bv/4|0)+72|0,B(507)));U(a.bE,C9(3,(a.bh/2|0)-100|0,(a.bv/4|0)+96|0,B(508)));U(a.bE,C9(0,(a.bh/2|0)-100|0,((a.bv/4|0)+120|0)+12|0,B(509)));Z(a.bE,1).gz=0;Z(a.bE,2).gz=0;if(a.H.jT===null)Z(a.bE,1).gz=0;}
function XY(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.co){c=a.H;d=AUm(a,a.H.r);$p=1;continue _;}if(b.co!=1)return;b=a.H;c=AZi(a);$p=2;continue _;case 1:Zk(c,d);if(C()){break _;}if(b.co!=1)return;b=a.H;c=AZi(a);$p=2;case 2:Zk(b,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function Vn(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WR(a);if(C()){break _;}Bv();e=A3Q;f=3553;g=a.H.bi;h=B(510);$p=2;case 2:$z=ACB(g,h);if(C()){break _;}i=$z;Ce(f,i);BN(1.0,1.0,1.0,1.0);Eb(e,16777215);Ct(a,(a.bh-256|0)/2|0,30,0,0,256,49);BU();Br((a.bh/2|0)+90|0,70.0,0.0);Bq((-20.0),0.0,0.0,1.0);j=Bl(Long_toNumber(Long_rem(B1(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Db(a.bS,a.r8)+32|0);Co(k,k,k);Dz(a,a.bS,a.r8,0,(-8),16776960);By();Cn(a.bS,B(511),(a.bh-Db(a.bS,B(511))|0)-2|0,a.bv-10|0,16777215);l=IX();m=Io();n=Long_sub(l,ID());g=new Bd;Bb(g);g=O(H(CP(H(CP(H(g,B(512)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(513)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(385)));Cn(a.bS,g,(a.bh-Db(a.bS,g)|0)-2|0,2,8421504);g=new Bd;Bb(g);g=O(H(CP(H(CP(H(g,
B(386)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(383)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(387)));Cn(a.bS,g,(a.bh-Db(a.bS,g)|0)-2|0,12,8421504);$p=3;case 3:AAU(a,b,c,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Mx(){var a=this;E.call(a);a.lx=null;a.cg=null;a.ic=null;a.qF=null;}
function DR(a,b){var c;c=b.u4();U(a.cg.data[c],b);}
function Wx(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(b<3){c=0;if(c<a.cg.data[b].p){d=Z(a.cg.data[b],c);$p=1;continue _;}b=b+1|0;}return;case 1:d.dR();if(C()){break _;}if(!d.cs)e=c;else{d=a.cg.data[b];e=c+(-1)|0;Em(d,c);}c=e+1|0;while(true){if(c<a.cg.data[b].p){d=Z(a.cg.data[b],c);continue _;}b=b+1|0;if(b>=3)break;c=0;}return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function WN(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Bx(b.q*3.1415927410125732/180.0);e=Bl(b.q*3.1415927410125732/180.0);f= -e*Bl(b.E*3.1415927410125732/180.0);g=d*Bl(b.E*3.1415927410125732/180.0);h=Bx(b.E*3.1415927410125732/180.0);i=b.b6;j=b.c-b.b6;k=c;A9U=i+j*k;A9V=b.bP+(b.i-b.bP)*k;A9W=b.b7+
(b.d-b.b7)*k;l=0;while(l<2){if(a.cg.data[l].p){if(!l){b=a.ic;m=B(514);$p=1;continue _;}if(l==1){b=a.ic;m=B(171);$p=2;continue _;}Ce(3553,0);Bv();m=A3Q;Bu(m);n=0;if(n<a.cg.data[l].p){o=Z(a.cg.data[l],n);$p=3;continue _;}Bm(m);}l=l+1|0;}return;case 1:$z=ACB(b,m);if(C()){break _;}p=$z;a:while(true){if(l==1){b=a.ic;m=B(171);$p=2;continue _;}Ce(3553,p);Bv();m=A3Q;Bu(m);n=0;if(n<a.cg.data[l].p){o=Z(a.cg.data[l],n);$p=3;continue _;}Bm(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cg.data[l].p)continue;else break;}p
=0;if(!l){b=a.ic;m=B(514);continue _;}}return;case 2:$z=ACB(b,m);if(C()){break _;}p=$z;a:while(true){Ce(3553,p);Bv();m=A3Q;Bu(m);n=0;if(n<a.cg.data[l].p){o=Z(a.cg.data[l],n);$p=3;continue _;}Bm(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cg.data[l].p)continue;else break;}p=0;if(!l){b=a.ic;m=B(514);$p=1;continue _;}if(l==1){b=a.ic;m=B(171);continue _;}}return;case 3:o.jL(m,c,d,h,e,f,g);if(C()){break _;}n=n+1|0;a:while(true){if(n<a.cg.data[l].p){o=Z(a.cg.data[l],n);continue _;}Bm(m);while(true){l=l+1|0;if(l>=
2)break a;if(!a.cg.data[l].p)continue;else break;}if(!l){b=a.ic;m=B(514);$p=1;continue _;}if(l==1){b=a.ic;m=B(171);$p=2;continue _;}Ce(3553,0);Bv();m=A3Q;Bu(m);n=0;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Xr(a,b,c){var d,e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=2;if(a.cg.data[d].p){Bv();e=A3Q;f=0;if(f<a.cg.data[d].p){g=Z(a.cg.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;$p=1;continue _;}}return;case 1:g.jL(e,c,h,i,j,k,l);if(C()){break _;}f=f+1|0;if(f>=a.cg.data[d].p)return;g=Z(a.cg.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;continue _;default:Eq();}}CL().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function Mz(a,b){var c;a.lx=b;c=0;while(c<3){DB(a.cg.data[c]);c=c+1|0;}}
function Z0(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.lx;$p=1;case 1:a:{$z=X4(e,b,c,d);if(C()){break _;}f=$z;if(f){J();e=A3U.data[f];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;DR(a,AQ5(a.lx,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,e));l=
l+1|0;}k=k+1|0;}g=g+1|0;}}}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function UN(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.lx;$p=1;case 1:$z=X4(f,b,c,d);if(C()){break _;}g=$z;if(g){J();h=A3U.data[g];i=b;j=i+Cb(a.qF)*(h.cP-h.cM-0.20000000298023224)+0.10000000149011612+h.cM;k=c;l=k+Cb(a.qF)*(h.ch-h.cm-0.20000000298023224)+0.10000000149011612+h.cm;m=d;n=m+Cb(a.qF)*(h.cQ-h.cL-0.20000000298023224)
+0.10000000149011612+h.cL;if(!e)l=k+h.cm-0.10000000149011612;if(e==1)l=k+h.ch+0.10000000149011612;if(e==2)n=m+h.cL-0.10000000149011612;if(e==3)n=m+h.cQ+0.10000000149011612;if(e==4)j=i+h.cM-0.10000000149011612;if(e==5)j=i+h.cP+0.10000000149011612;DR(a,T2(AJW(AQ5(a.lx,j,l,n,0.0,0.0,0.0,h),0.20000000298023224),0.6000000238418579));}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Tq(a){var b;b=new Bd;Bb(b);return O(Be(H(b,B(3)),(a.cg.data[0].p+a.cg.data[1].p|0)+a.cg.data[2].p|0));}
function HC(){var a=this;E.call(a);a.pc=0;a.qL=0;a.tn=0;a.tr=0;a.u8=0;a.Ah=0;a.cj=null;a.t1=null;a.t2=null;a.t3=null;a.r_=null;a.sh=null;a.s4=null;a.uM=null;a.to=null;a.sJ=null;a.rX=null;a.sr=null;a.sy=null;a.t$=null;a.r9=null;a.vD=null;a.po=0;a.oh=0;a.m$=0;a.Cw=0;a.C7=0;a.sb=null;a.sG=null;a.uR=0;a.uC=null;a.tl=null;a.tS=null;a.vJ=null;a.vP=null;a.vu=null;a.k6=null;a.lk=null;a.ti=0;a.qf=0.0;a.qe=0.0;a.qd=0.0;a.qc=0.0;a.qQ=0.0;a.rD=0.0;a.pZ=0.0;a.qC=0.0;a.pa=0.0;a.pb=0.0;a.rt=0.0;a.rs=0.0;a.rr=0.0;a.rq=0.0;a.q9
=0.0;a.q7=0.0;a.q8=0.0;}
var A9X=null;var A9Y=null;function A0c(a,b,c,d,e,f,g){var h=new HC();ADa(h,a,b,c,d,e,f,g);return h;}
function MI(b){var c,d,e,f,g,h,i;c=A9X.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;if((b&1)==1)d=1;if((b&4)==4)e=1;if((b&8)==8)f=1;if((b&16)==16)g=1;if((b&32)==32)h=1;if((b&64)==64)i=1;c=A0c(b,d,e,f,g,h,i);A9X.data[b]=c;}return c;}
function ADa(a,b,c,d,e,f,g,h){var i,j,k;SE(a);a.t1=null;a.t2=null;a.t3=null;a.r_=null;a.sh=null;a.s4=null;a.uM=null;a.to=null;a.sJ=null;a.rX=null;a.sr=null;a.sy=null;a.t$=null;a.r9=null;a.vD=null;a.uR=0;a.uC=$rt_createFloatArray(16);a.tl=$rt_createFloatArray(16);a.tS=$rt_createFloatArray(16);a.vJ=IW(KZ());a.vP=IW(KZ());a.vu=IW(KZ());a.k6=ATV();a.lk=ATV();a.ti=0;a.qf=0.0;a.qe=0.0;a.qd=0.0;a.qc=0.0;a.qQ=0.0;a.rD=0.0;a.pZ=0.0;a.qC=0.0;a.pa=0.0;a.pb=0.0;a.rt=0.0;a.rs=0.0;a.rr=0.0;a.rq=0.0;a.q9=0.0;a.q7=0.0;a.q8
=0.0;a.pc=c;a.qL=d;a.tn=e;a.tr=f;a.u8=g;a.Ah=h;if(A9Y===null)A9Y=XH(B(515));i=B(3);if(a.pc)i=O(H(H(BS(),i),B(516)));if(a.qL)i=O(H(H(BS(),i),B(517)));if(a.tn)i=O(H(H(BS(),i),B(518)));if(a.tr)i=O(H(H(BS(),i),B(519)));if(a.u8)i=O(H(H(BS(),i),B(520)));if(a.Ah)i=O(H(H(BS(),i),B(521)));i=O(H(H(BS(),i),A9Y));j=Mg(35633);My(j,O(H(H(H(BS(),M1()),B(522)),i)));SA(j);if(!Rq(j)){B$(CO(),LK(O(H(H(BS(),B(523)),Qz(j))),B(152),B(524)));M(VJ(B(525)));}k=Mg(35632);My(k,O(H(H(H(BS(),M1()),B(526)),i)));SA(k);if(!Rq(k)){B$(CO(),
LK(O(H(H(BS(),B(523)),Qz(k))),B(152),B(527)));M(VJ(B(525)));}a.cj=AC3();Pe(a.cj,j);Pe(a.cj,k);b=1;a.po=0;J4(a.cj,a.po,B(528));if(!a.qL)a.oh=(-1);else{a.oh=b;J4(a.cj,a.oh,B(529));b=2;}if(!a.pc)a.m$=(-1);else{c=b+1|0;a.m$=b;J4(a.cj,a.m$,B(530));b=c;}a.Cw=(-1);a.C7=b;Wh(a.cj);QZ(a.cj,j);QZ(a.cj,k);P2(j);P2(k);if(!ABA(a.cj)){B$(CO(),LK(O(H(H(BS(),B(523)),ACC(a.cj))),B(152),B(531)));M(VJ(B(525)));}R7(a.cj);a.t1=C7(a.cj,B(532));a.t2=C7(a.cj,B(533));a.t3=C7(a.cj,B(534));a.rX=C7(a.cj,B(535));if(a.tn){a.sr=C7(a.cj,B(536));a.r9
=C7(a.cj,B(537));a.vD=C7(a.cj,B(538));}if(a.tr){a.r_=C7(a.cj,B(539));a.sh=C7(a.cj,B(540));a.s4=C7(a.cj,B(541));a.uM=C7(a.cj,B(542));a.to=C7(a.cj,B(543));a.sJ=C7(a.cj,B(544));}if(a.u8)a.sy=C7(a.cj,B(545));Oe(C7(a.cj,B(546)),0);a.t$=C7(a.cj,B(547));a.sb=MH();a.sG=Ke();OV(a.sb);F_(34962,a.sG);OF(a);}
function OF(a){LM(a.po);LO(a.po,3,5126,0,28,0);if(a.qL){LM(a.oh);LO(a.oh,2,5126,0,28,12);}if(a.pc){LM(a.m$);LO(a.m$,4,5121,1,28,20);}}
function ALc(a){R7(a.cj);}
function ANP(a){return;}
function AG6(a,b){if(!JF(b,a.vJ)){LA(FR(a.vJ,b),a.uC);Km(a.t1,a.uC);}}
function AHy(a,b){if(!JF(b,a.vP)){LA(FR(a.vP,b),a.tl);Km(a.t2,a.tl);}}
function VF(a,b){if(!JF(b,a.vu)){LA(FR(a.vu,b),a.tS);Km(a.t3,a.tS);}}
function AHJ(a,b,c){if(!(PZ(b,a.k6)&&PZ(c,a.lk))){RL(a.k6,b);RL(a.lk,c);JB(a.r9,a.k6.j5,a.k6.j6,a.k6.j4);JB(a.vD,a.lk.j5,a.lk.j6,a.lk.j4);}}
function AF9(a,b){if(a.ti!=b){a.ti=b;Oe(a.sh,b%2|0);GY(a.sJ,b/2|0);}}
function AKz(a,b,c,d,e){if(!(a.qf===b&&a.qe===c&&a.qd===d&&a.qc===e)){a.qf=b;a.qe=c;a.qd=d;a.qc=e;QF(a.r_,a.qf,a.qe,a.qd,a.qc);}}
function AKc(a,b,c){if(!(a.qQ===b&&a.rD===c)){a.qQ=b;a.rD=c;GY(a.s4,a.qQ);GY(a.uM,a.rD);}}
function AFx(a,b){if(a.pZ!==b){a.pZ=b;GY(a.to,a.pZ);}}
function ADL(a,b){if(a.qC!==b){a.qC=b;GY(a.sy,a.qC);}}
function AJa(a,b,c){var d,e;if(!(a.pa===b&&a.pb===c)){a.pa=b;a.pb=c;d=a.t$;b=a.pa;c=a.pb;Y();if(d!==null){e=A2O;d=d.ju;e.uniform2f(d,b,c);}}}
function AGt(a,b,c,d,e){if(!(a.rt===b&&a.rs===c&&a.rr===d&&a.rq===e)){a.rt=b;a.rs=c;a.rr=d;a.rq=e;QF(a.rX,a.rt,a.rs,a.rr,a.rq);}}
function XD(a,b,c,d){if(!(a.q9===b&&a.q7===c&&a.q8===d)){a.q9=b;a.q7=c;a.q8=d;JB(a.sr,a.q9,a.q7,a.q8);}}
function AJh(){A9X=N(HC,128);A9Y=null;}
function Ox(){var a=this;E.call(a);a.yo=0;a.px=null;a.nt=null;a.ky=0;a.iK=0;}
function ACw(){var a=this;E.call(a);a.jZ=0;a.hg=0;a.hh=0;a.hi=0;a.gU=0;a.fO=null;a.mb=null;}
function ASc(a,b,c,d,e){var f=new ACw();AV2(f,a,b,c,d,e);return f;}
function ASE(a){var b=new ACw();AYq(b,a);return b;}
function AV2(a,b,c,d,e,f){a.jZ=0;a.hg=b;a.hh=c;a.hi=d;a.gU=e;a.fO=BR(f.t,f.v,f.s);}
function AYq(a,b){a.jZ=1;a.mb=b;a.fO=BR(b.c,b.i,b.d);}
function B6(){var a=this;E.call(a);a.m=0;a.lm=0;a.bs=0;a.dP=0;}
function AGJ(a){var b=new B6();AC1(b,a);return b;}
function F0(a,b){var c=new B6();Rh(c,a,b);return c;}
function Nx(a){var b=new B6();Df(b,a);return b;}
function D9(a,b){var c=new B6();Fu(c,a,b);return c;}
function I1(a,b){var c=new B6();KJ(c,a,b);return c;}
function L7(a,b,c){var d=new B6();ASg(d,a,b,c);return d;}
function AZs(a){var b=new B6();ASP(b,a);return b;}
function AC1(a,b){Rh(a,b,1);}
function Rh(a,b,c){KJ(a,b.b,c);}
function Df(a,b){Fu(a,b,1);}
function Fu(a,b,c){KJ(a,b.cx,c);}
function KJ(a,b,c){a.m=0;a.bs=b;a.m=c;}
function ASg(a,b,c,d){a.m=0;a.bs=b;a.m=c;a.dP=d;}
function ASP(a,b){a.m=0;Zx(a,b);}
function D5(a,b){a.m=a.m-b|0;return L7(a.bs,b,a.dP);}
function Dl(a){Bw();return A6g.data[a.bs];}
function Dk(a){return Dl(a).ro;}
function AD_(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=Dl(a);$p=1;case 1:$z=h.hM(a,b,c,d,e,f,g);if(C()){break _;}d=$z;return d;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AAB(a,b){return Dl(a).vv(a,b);}
function WQ(a,b,c){var d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Dl(a);$p=1;case 1:$z=d.mK(a,b,c);if(C()){break _;}b=$z;return b;default:Eq();}}CL().s(a,b,c,d,$p);}
function NU(a,b){EH(b,B(548),a.bs<<16>>16);H$(b,B(549),a.m<<24>>24);EH(b,B(550),a.dP<<16>>16);return b;}
function Zx(a,b){a.bs=EV(b,B(548));a.m=JM(b,B(549));a.dP=EV(b,B(550));}
function D3(a){return Dl(a).en;}
function IM(a){Bw();return A6g.data[a.bs].eG;}
function EW(a,b){a.dP=a.dP+b|0;if(a.dP>IM(a)){a.m=a.m-1|0;if(a.m<0)a.m=0;a.dP=0;}}
function AAi(a,b){Bw();A6g.data[a.bs].qt(a,b);}
function NR(a,b,c,d,e){Bw();A6g.data[a.bs].vp(a,b,c,d,e);}
function V2(a,b){Bw();return A6g.data[a.bs].mC(b);}
function AID(a,b){Bw();return A6g.data[a.bs].nA(b);}
function ASD(a,b){return;}
function ZX(a,b){Bw();A6g.data[a.bs].v5(a,b);}
function Vv(){var a=this;E.call(a);a.hb=null;a.kG=0;a.qw=null;}
function ASd(a,b,c){var d=new Vv();APl(d,a,b,c);return d;}
function APl(a,b,c,d){a.kG=Bg(c,d);a.hb=N(B6,a.kG);a.qw=b;}
function AUh(a){return a.kG;}
function Fo(a,b){return a.hb.data[b];}
function AAf(a,b,c){var d,e;if(a.hb.data[b]===null)return null;if(a.hb.data[b].m<=c){d=a.hb.data[b];a.hb.data[b]=null;a.qw.rA(a);return d;}e=D5(a.hb.data[b],c);if(!a.hb.data[b].m)a.hb.data[b]=null;a.qw.rA(a);return e;}
function AUp(a,b,c){a.hb.data[b]=c;a.qw.rA(a);}
function AX6(a){return 64;}
function Zf(a){return;}
function Wg(){E.call(this);this.lM=null;}
function AVq(){var a=new Wg();AMW(a);return a;}
function AMW(a){a.lM=N(B6,1);}
function AVf(a,b){return a.lM.data[b];}
function APr(a,b,c){var d;if(a.lM.data[b]===null)return null;d=a.lM.data[b];a.lM.data[b]=null;return d;}
function MQ(a,b,c){a.lM.data[b]=c;}
function AQY(a){return 64;}
function AHQ(a){return;}
function Gz(){var a=this;E.call(a);a.kz=0;a.iN=0;a.iP=0;a.er=null;a.om=null;}
function DC(a,b,c,d,e){var f=new Gz();QS(f,a,b,c,d,e);return f;}
function QS(a,b,c,d,e,f){a.om=b;a.er=c;a.kz=d;a.iN=e;a.iP=f;}
function K2(a,b,c){var d,e;d=(a.om.bh-a.om.ez|0)/2|0;e=(a.om.bv-a.om.eL|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.iN-1|0)&&d<((a.iN+16|0)+1|0)&&c>=(a.iP-1|0)&&c<((a.iP+16|0)+1|0)?1:0;}
function AFU(a){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFn(a);if(C()){break _;}return;default:Eq();}}CL().s(a,$p);}
function APP(a,b){return 1;}
function ALI(a){return a.er.fN(a.kz);}
function AGf(a,b){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.er.iC(a.kz,b);$p=1;case 1:AFn(a);if(C()){break _;}return;default:Eq();}}CL().s(a,b,$p);}
function AYz(a){return (-1);}
function AFn(a){var b,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.er;$p=1;case 1:b.jg();if(C()){break _;}return;default:Eq();}}CL().s(a,b,$p);}
function YJ(){Gz.call(this);this.o6=null;}
function AUi(a,b,c,d,e,f){var g=new YJ();AU8(g,a,b,c,d,e,f);return g;}
function AU8(a,b,c,d,e,f,g){QS(a,b,d,e,f,g);a.o6=c;}
function AR2(a,b){return 0;}
function AIB(a){var b;b=0;while(b<a.o6.kG){if(Fo(a.o6,b)!==null)AAf(a.o6,b,1);b=b+1|0;}}
function NT(){var a=this;Gz.call(a);a.t4=0;a.DK=null;}
function ATU(a,b){return !(Dl(b) instanceof Fb)?0:Dl(b).xa!=a.t4?0:1;}
function APn(a){return 15+(a.t4*16|0)|0;}
function P3(){var a=this;E.call(a);a.r3=null;a.u1=0;a.z5=0;a.By=0;}
function Sf(){E.call(this);this.At=null;}
function Pw(){var a=this;E.call(a);a.x3=null;a.tx=0;}
function KW(){EA.call(this);}
function AGy(b){var c,d;c=b.data.length;d=new Q7;QC(d,c,0,0+c|0);d.vm=0;d.yl=0;d.uu=b;return d;}
function AAy(a){D2(a);return a;}
function ATG(a){FA(a);return a;}
function MJ(){var a=this;E.call(a);a.yE=null;a.D9=0;a.D6=0;a.Co=0;a.Da=0;}
function C1(){var a=this;E.call(a);a.hC=null;a.Ds=null;a.DR=null;a.kS=0.0;a.yP=0.0;}
function A9Z(){var a=new C1();D7(a);return a;}
function D7(a){a.Ds=AZj();a.DR=IJ();a.kS=0.0;a.yP=1.0;}
function AFg(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.hC.r2;$p=1;case 1:$z=ACB(c,b);if(C()){break _;}d=$z;DI(c,d);return;default:Eq();}}CL().s(a,b,c,d,$p);}
function AJT(a,b,c){var d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.hC.r2;$p=1;case 1:$z=Zt(d,b,c);if(C()){break _;}e=$z;DI(d,e);return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AB$(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:X(2896);J();g=A5r.W;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;BU();Br(c,d,e);n=b.cC*1.399999976158142;Co(n,n,n);o=B(171);$p
=1;case 1:AFg(a,o);if(C()){break _;}Bv();o=A3Q;p=1.0;q=0.0;r=b.ef/b.cC;Bq( -a.hC.pF,0.0,1.0,0.0);Br(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BN(1.0,1.0,1.0,1.0);Bu(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;F(o,c,d,0.0,e,s);F(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;F(o,(-0.5),d,0.0,t,u);F(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Br(0.0,0.0,(-0.03999999910593033));}Bm(o);By();V(2896);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AXH(b,c,d,e){var f;X(3553);Bv();f=A3Q;BN(1.0,1.0,1.0,1.0);Bu(f);Er(f,c,d,e);B_(0.0,0.0,(-1.0));Ba(f,b.N,b.Q,b.O);Ba(f,b.R,b.Q,b.O);Ba(f,b.R,b.I,b.O);Ba(f,b.N,b.I,b.O);B_(0.0,0.0,1.0);Ba(f,b.N,b.I,b.S);Ba(f,b.R,b.I,b.S);Ba(f,b.R,b.Q,b.S);Ba(f,b.N,b.Q,b.S);B_(0.0,(-1.0),0.0);Ba(f,b.N,b.I,b.O);Ba(f,b.R,b.I,b.O);Ba(f,b.R,b.I,b.S);Ba(f,b.N,b.I,b.S);B_(0.0,1.0,0.0);Ba(f,b.N,b.Q,b.S);Ba(f,b.R,b.Q,b.S);Ba(f,b.R,b.Q,b.O);Ba(f,b.N,b.Q,b.O);B_((-1.0),0.0,0.0);Ba(f,b.N,b.I,b.S);Ba(f,b.N,b.Q,b.S);Ba(f,b.N,b.Q,b.O);Ba(f,
b.N,b.I,b.O);B_(1.0,0.0,0.0);Ba(f,b.R,b.I,b.O);Ba(f,b.R,b.Q,b.O);Ba(f,b.R,b.Q,b.S);Ba(f,b.R,b.I,b.S);Er(f,0.0,0.0,0.0);Bm(f);V(3553);}
function AN_(a,b){a.hC=b;}
function AHR(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AEK(a.hC,b.c,b.i,b.d);if(b.cw<=0)return;$p=1;case 1:AB$(a,b,c,d,e,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function ADA(){var a=this;C1.call(a);a.ul=null;a.hm=null;}
function TS(){var a=new ADA();AVD(a);return a;}
function AVD(a){D7(a);a.ul=IJ();a.hm=new De;a.kS=0.15000000596046448;a.yP=0.75;}
function AJ9(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b.lV;BU();i=Bl((b.ln+g)/10.0+b.vT)*0.10000000149011612+0.10000000149011612;j=((b.ln+g)/20.0+b.vT)*57.2957763671875;k=1;if(b.lV.m>1)k=2;if(b.lV.m>5)k=3;if(b.lV.m>20)k=4;Br(c,d+
i,e);V(32826);if(h.bs<256){J();if(!A3U.data[h.bs].dO()){Bq(j,0.0,1.0,0.0);b=B(171);$p=3;continue _;}}Co(0.5,0.5,0.5);l=Dk(h);if(h.bs>=256){b=B(222);$p=1;continue _;}b=B(171);$p=2;continue _;case 1:AFg(a,b);if(C()){break _;}Bv();m=A3Q;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){BU();if(s>0)Br((L(a.hm)*2.0-1.0)*0.30000001192092896,(L(a.hm)*2.0-1.0)*0.30000001192092896,(L(a.hm)*2.0-1.0)*0.30000001192092896);Bq(180.0-a.hC.pF,0.0,
1.0,0.0);Bu(m);B_(0.0,1.0,0.0);F(m,(-0.5),(-0.25),0.0,d,e);F(m,0.5,(-0.25),0.0,t,e);F(m,0.5,0.75,0.0,t,u);F(m,(-0.5),0.75,0.0,d,u);Bm(m);By();s=s+1|0;}X(32826);By();return;case 2:AFg(a,b);if(C()){break _;}Bv();m=A3Q;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){BU();if(s>0)Br((L(a.hm)*2.0-1.0)*0.30000001192092896,(L(a.hm)*2.0-1.0)*0.30000001192092896,(L(a.hm)*2.0-1.0)*0.30000001192092896);Bq(180.0-a.hC.pF,0.0,1.0,0.0);Bu(m);B_(0.0,
1.0,0.0);F(m,(-0.5),(-0.25),0.0,d,e);F(m,0.5,(-0.25),0.0,t,e);F(m,0.5,0.75,0.0,t,u);F(m,(-0.5),0.75,0.0,d,u);Bm(m);By();s=s+1|0;}X(32826);By();return;case 3:AFg(a,b);if(C()){break _;}v=0.25;if(!A3U.data[h.bs].fB()&&h.bs!=A3Z.b)v=0.5;Co(v,v,v);n=0;while(n<k){BU();if(n>0)Br((L(a.hm)*2.0-1.0)*0.20000000298023224/v,(L(a.hm)*2.0-1.0)*0.20000000298023224/v,(L(a.hm)*2.0-1.0)*0.20000000298023224/v);FX(a.ul,A3U.data[h.bs]);By();n=n+1|0;}X(32826);By();return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,
t,u,v,$p);}
function ABu(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d!==null){if(d.bs<256){J();if(!A3U.data[d.bs].dO()){g=d.bs;b=B(171);$p=1;continue _;}}if(Dk(d)>=0){X(2896);if(d.bs>=256){b=B(222);$p=2;continue _;}b=B(171);$p=3;continue _;}}return;case 1:$z=ACB(c,b);if(C()){break _;}h=$z;DI(c,h);i=A3U.data[g];BU();Br(e-2|0,f+3|0,0.0);Co(10.0,10.0,10.0);Br(1.0,0.5,8.0);Bq(210.0,1.0,
0.0,0.0);Bq(45.0,0.0,1.0,0.0);BN(1.0,1.0,1.0,1.0);FX(a.ul,i);By();return;case 2:$z=ACB(c,b);if(C()){break _;}g=$z;DI(c,g);SU(a,e,f,(Dk(d)%16|0)*16|0,(Dk(d)/16|0)*16|0,16,16);V(2896);return;case 3:$z=ACB(c,b);if(C()){break _;}g=$z;DI(c,g);SU(a,e,f,(Dk(d)%16|0)*16|0,(Dk(d)/16|0)*16|0,16,16);V(2896);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function JA(a,b,c,d,e,f){var g,h,i,j,k,l;if(d!==null){if(d.m>1){c=new Bd;Bb(c);g=O(Be(H(c,B(3)),d.m));X(2896);X(2929);Cn(b,g,((e+19|0)-2|0)-Db(b,g)|0,(f+6|0)+3|0,16777215);V(2896);V(2929);}if(d.dP>0){h=13-((d.dP*13|0)/IM(d)|0)|0;i=255-((d.dP*255|0)/IM(d)|0)|0;X(2896);X(2929);X(3553);Bv();j=A3Q;k=255-i|0;l=k<<16|i<<8;k=(k/4|0)<<16|16128;e=e+2|0;f=f+13|0;LI(a,j,e,f,13,2,0);LI(a,j,e,f,12,1,k);LI(a,j,e,f,h,1,l);V(3553);V(2896);V(2929);BN(1.0,1.0,1.0,1.0);}}}
function LI(a,b,c,d,e,f,g){var h,i,j;Bu(b);Eb(b,g);h=c+0|0;i=d+0|0;Ba(b,h,i,0.0);j=d+f|0;Ba(b,h,j,0.0);h=c+e|0;Ba(b,h,j,0.0);Ba(b,h,i,0.0);Bm(b);}
function SU(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;Bv();h=A3Q;Bu(h);i=b+0|0;j=c+g|0;k=(d+0|0)*0.00390625;l=(e+g|0)*0.00390625;F(h,i,j,0.0,k,l);m=b+f|0;n=(d+f|0)*0.00390625;F(h,m,j,0.0,n,l);l=c+0|0;j=(e+0|0)*0.00390625;F(h,m,l,0.0,n,j);F(h,i,l,0.0,k,j);Bm(h);}
function Yz(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AJ9(a,b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function NN(){var a=this;E.call(a);a.fm=null;a.vB=null;}
function Vd(a,b){var c,d,e,f,g,h,i,j,k,l;if(Ge()===null)A3f=A2J.createElement("canvas");if(Ge().width<a.fm.width){b=Ge();c=a.fm.width;b.width=c;}if(Ge().height<a.fm.height){b=Ge();c=a.fm.height;b.height=c;}if(If()===null)A3g=Ge().getContext("2d");b=If();d=a.fm.width;e=a.fm.height;b.clearRect(0.0,0.0,d,e);b=If();c=a.fm;d=a.fm.width;e=a.fm.height;b.drawImage(c,0.0,0.0,d,e);b=If();d=a.fm.width;e=a.fm.height;f=b.getImageData(0.0,0.0,d,e);c=f.data;g=Bg(f.width,f.height);SC($rt_str(a.fm.src));if(c.byteLength<(g*4
|0)){Cx(a.vB,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;g=i.length;while(j<g){k=j*4|0;i[j]=c[k]<<16|c[k+1|0]<<8|c[k+2|0]|c[k+3|0]<<24;j=j+1|0;}b=a.vB;c=new P3;k=f.width;l=f.height;if(g==Bg(k,l)){c.u1=k;c.z5=l;c.By=1;c.r3=h;Cx(b,c);return;}b=new Cq;Bp(b,B(551));M(b);}
function AW1(a,b){Vd(a,b);}
function NM(){var a=this;E.call(a);a.AL=null;a.Bk=null;}
function AEv(a,b){SC($rt_str(a.AL.src));Cx(a.Bk,null);}
function AW$(a,b){AEv(a,b);}
function Hc(){KW.call(this);}
function A90(a,b,c){var d=new Hc();QC(d,a,b,c);return d;}
function QC(a,b,c,d){Jb(a,b);a.be=c;a.cb=d;}
function ABo(a){var b,c;if(a.be<a.cb){b=a.be;a.be=b+1|0;return a.vR(b);}c=new Fx;R(c);M(c);}
function Lu(a,b){var c,d;if(a.lE()){c=new E5;R(c);M(c);}if(a.be<a.cb){d=a.be;a.be=d+1|0;a.sV(d,b);return a;}c=new F8;R(c);M(c);}
function N6(a,b){var c,d;if(b>=0&&b<a.cb)return AJb(a,b);c=new BV;d=new Bd;Bb(d);Bp(c,O(H(Be(H(Be(H(d,B(265)),b),B(236)),a.cb),B(21))));M(c);}
function ALf(a,b,c){var d,e;if(a.lE()){d=new E5;R(d);M(d);}if(b>=0&&b<a.cb){AIe(a,b,c);return a;}e=new BV;d=new Bd;Bb(d);Bp(e,O(H(Be(H(Be(H(d,B(265)),b),B(236)),a.cb),B(21))));M(e);}
function AQh(a){return a.lE();}
function Q7(){var a=this;Hc.call(a);a.yl=0;a.vm=0;a.uu=null;}
function AJb(a,b){return a.uu.data[b+a.vm|0];}
function AIe(a,b,c){a.uu.data[b+a.vm|0]=c;}
function AMU(a){return a.yl;}
function R_(){E.call(this);this.iq=null;}
function R8(){var a=this;E.call(a);a.hX=null;a.uX=0;}
function Ta(){E.call(this);this.ju=null;}
function CJ(){var a=this;CN.call(a);a.ev=0;a.yg=0.0;a.yh=0.0;a.cY=0;a.b_=0;a.cZ=0.0;a.lL=0.0;a.g8=0.0;a.hl=0.0;a.ht=0.0;}
var A9U=0.0;var A9V=0.0;var A9W=0.0;function A91(a,b,c,d,e,f,g){var h=new CJ();EP(h,a,b,c,d,e,f,g);return h;}
function EP(a,b,c,d,e,f,g,h){var i,j;EO(a,b);a.cY=0;a.b_=0;Dx(a,0.20000000298023224,0.20000000298023224);a.cF=a.ef/2.0;CC(a,c,d,e);a.ht=1.0;a.hl=1.0;a.g8=1.0;a.f=f+(BI()*2.0-1.0)*0.4000000059604645;a.h=g+(BI()*2.0-1.0)*0.4000000059604645;a.g=h+(BI()*2.0-1.0)*0.4000000059604645;i=(BI()+BI()+1.0)*0.15000000596046448;j=B7(a.f*a.f+a.h*a.h+a.g*a.g);c=a.f;d=j;c=c/d;e=i;a.f=c*e*0.4000000059604645;a.h=a.h/d*e*0.4000000059604645+0.10000000149011612;a.g=a.g/d*e*0.4000000059604645;a.yg=L(a.l)*3.0;a.yh=L(a.l)*3.0;a.cZ=
(L(a.l)*0.5+0.5)*2.0;a.b_=4.0/(L(a.l)*0.8999999761581421+0.10000000149011612)|0;a.cY=0;a.h7=0;}
function AJW(a,b){var c,d;c=a.f;d=b;a.f=c*d;a.h=(a.h-0.10000000149011612)*d+0.10000000149011612;a.g=a.g*d;return a;}
function T2(a,b){var c;c=0.20000000298023224*b;Dx(a,c,c);a.cZ=a.cZ*b;return a;}
function AF8(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.i;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=2;continue _;}a.h=a.h-0.04*a.lL;c=a.f;d=a.h;e=a.g;$p=1;case 1:ALQ(a,c,d,e);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;case 2:B4(a);if(C()){break _;}a.h=a.h-0.04*a.lL;c=a.f;d=a.h;e=
a.g;$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AH0(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.ev%16|0)/16.0;j=i+0.062437500804662704;k=(a.ev/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.cZ;n=a.bH;o=a.c-a.bH;p
=c;q=n+o*p-A9U;r=a.ct+(a.i-a.ct)*p-A9V;s=a.bG+(a.d-a.bG)*p-A9W;$p=1;case 1:$z=a.s6(c);if(C()){break _;}t=$z;Cf(b,a.g8*t,a.hl*t,a.ht*t);u=d*m;t=q-u;v=g*m;n=t-v;c=e*m;o=r-c;d=f*m;e=s-d;f=h*m;w=e-f;p=i;x=l;F(b,n,o,w,p,x);n=t+v;w=r+c;y=e+f;z=k;F(b,n,w,y,p,z);c=q+u;n=c+v;d=s+d;p=d+f;y=j;F(b,n,w,p,y,z);F(b,c-v,o,d-f,y,x);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AXq(a){return 0;}
function XU(){var a=this;E.call(a);a.vY=null;a.m9=0;}
function MC(){E.call(this);}
var A92=null;function A93(){var a=new MC();AF2(a);return a;}
function AF2(a){return;}
function Dr(){X(2896);X(16384);X(16385);X(2903);}
function Gm(){var b;V(2896);V(16384);V(16385);V(2903);b=Cs(BR(0.699999988079071,1.0,(-0.20000000298023224)));OO(b.t,b.v,b.s,0.0);EF(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);EF(0.0,0.0,0.0,1.0);EF(0.0,0.0,0.0,1.0);b=Cs(BR((-0.699999988079071),1.0,0.20000000298023224));OO(b.t,b.v,b.s,0.0);EF(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);EF(0.0,0.0,0.0,1.0);EF(0.0,0.0,0.0,1.0);EF(0.4000000059604645,0.4000000059604645,0.4000000059604645,1.0);}
function OO(b,c,d,e){return EF(b,c,d,e);}
function EF(b,c,d,e){D2(A92);Cu(Cu(Cu(Cu(A92,b),c),d),e);FA(A92);return A92;}
function AMq(){A92=GN(16);}
function HS(){B5.call(this);}
function A94(){var a=new HS();AQu(a);return a;}
function AQu(a){R(a);}
function E5(){HS.call(this);}
function A95(){var a=new E5();AWw(a);return a;}
function AWw(a){R(a);}
function F8(){B5.call(this);}
function A96(){var a=new F8();AVT(a);return a;}
function AVT(a){R(a);}
function Fx(){B5.call(this);}
function A97(){var a=new Fx();ASX(a);return a;}
function ASX(a){R(a);}
function Qb(){var a=this;E.call(a);a.wg=null;a.zY=null;a.ts=0;a.p1=0;}
function Wa(a){return EB(a.wg);}
function LP(a,b){return Ci(a.zY)<b?0:1;}
function AVQ(a,b){a.ts=b;}
function AZV(a,b){a.p1=b;}
function OD(){CI.call(this);}
function A98(){var a=new OD();AWx(a);return a;}
function AWx(a){DH(a);}
function Kq(){CI.call(this);}
function A99(){var a=new Kq();AYH(a);return a;}
function AYH(a){DH(a);}
function AIR(a){DB(a.bE);U(a.bE,C9(1,(a.bh/2|0)-100|0,(a.bv/4|0)+72|0,B(552)));U(a.bE,C9(2,(a.bh/2|0)-100|0,(a.bv/4|0)+96|0,B(553)));if(a.H.jT===null)Z(a.bE,1).gz=0;}
function AG0(a,b,c){return;}
function AI0(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.co==1){c=a.H;$p=1;continue _;}if(b.co!=2)return;b=a.H;c=null;$p=3;continue _;case 1:AMD(c);if(C()){break _;}c=a.H;d=null;$p=2;case 2:Zk(c,d);if(C()){break _;}if(b.co!=2)return;b=a.H;c=null;$p=3;case 3:Xh(b,c);if(C()){break _;}b=a.H;c=JW();$p=4;case 4:Zk(b,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function AJS(a,b,c,d){var e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:I$(a,0,0,a.bh,a.bv,1615855616,(-1602211792));BU();Co(2.0,2.0,2.0);Dz(a,a.bS,B(554),(a.bh/2|0)/2|0,30,16777215);By();e=a.bS;f=new Bd;Bb(f);Dz(a,e,O(Be(H(f,B(555)),a.H.e.jV)),a.bh/2|0,100,16777215);$p=1;case 1:AAU(a,b,c,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AWy(a){return 0;}
function WA(){var a=this;CI.call(a);a.rI=0;a.mR=0;}
function A1L(){var a=new WA();APa(a);return a;}
function APa(a){DH(a);a.rI=0;a.mR=0;}
function ALq(a){a.rI=0;DB(a.bE);U(a.bE,C9(1,(a.bh/2|0)-100|0,(a.bv/4|0)+48|0,B(556)));U(a.bE,C9(4,(a.bh/2|0)-100|0,(a.bv/4|0)+24|0,B(557)));U(a.bE,C9(0,(a.bh/2|0)-100|0,(a.bv/4|0)+96|0,B(509)));}
function YQ(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.co){c=a.H;d=AUm(a,a.H.r);$p=1;continue _;}if(b.co==1){c=a.H;d=null;$p=2;continue _;}if(b.co!=4)return;b=a.H;c=null;$p=4;continue _;case 1:Zk(c,d);if(C()){break _;}if(b.co==1){c=a.H;d=null;$p=2;continue _;}if(b.co!=4)return;b=a.H;c=null;$p=4;continue _;case 2:Xh(c,d);if(C()){break _;}c=a.H;d=JW();$p=3;case 3:Zk(c,d);if(C()){break _;}if(b.co!=4)return;b=a.H;c=null;$p=4;case 4:Zk(b,
c);if(C()){break _;}b=a.H;$p=5;case 5:AAC(b);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function ATm(a){a.mR=a.mR+1|0;}
function Zd(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WR(a);if(C()){break _;}e=a.H.w;f=a.rI;a.rI=f+1|0;$p=2;case 2:$z=Wn(e,f);if(C()){break _;}f=$z;f=f?0:1;if(!(!f&&a.mR>=20)){g=255.0*(Bl(((a.mR%10|0)+d)/10.0*3.1415927410125732*2.0)*0.20000000298023224+0.800000011920929)|0;Cn(a.bS,B(558),8,a.bv-16|0,g<<16|g<<8|g);}Dz(a,a.bS,B(559),a.bh/2|0,40,16777215);$p=3;case 3:AAU(a,b,c,d);if(C())
{break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function JJ(){var a=this;E.call(a);a.Z=null;a.V=null;a.U=null;a.X=null;}
function A9$(){var a=new JJ();ACz(a);return a;}
function ACz(a){a.Z=$rt_createFloatMultiArray([16,16]);a.V=$rt_createFloatArray(16);a.U=$rt_createFloatArray(16);a.X=$rt_createFloatArray(16);}
function ALZ(a,b,c,d,e,f,g){var h;h=0;while(h<6){if(a.Z.data[h].data[0]*b+a.Z.data[h].data[1]*c+a.Z.data[h].data[2]*d+a.Z.data[h].data[3]<=0.0&&a.Z.data[h].data[0]*e+a.Z.data[h].data[1]*c+a.Z.data[h].data[2]*d+a.Z.data[h].data[3]<=0.0&&a.Z.data[h].data[0]*b+a.Z.data[h].data[1]*f+a.Z.data[h].data[2]*d+a.Z.data[h].data[3]<=0.0&&a.Z.data[h].data[0]*e+a.Z.data[h].data[1]*f+a.Z.data[h].data[2]*d+a.Z.data[h].data[3]<=0.0&&a.Z.data[h].data[0]*b+a.Z.data[h].data[1]*c+a.Z.data[h].data[2]*g+a.Z.data[h].data[3]<=0.0&&
a.Z.data[h].data[0]*e+a.Z.data[h].data[1]*c+a.Z.data[h].data[2]*g+a.Z.data[h].data[3]<=0.0&&a.Z.data[h].data[0]*b+a.Z.data[h].data[1]*f+a.Z.data[h].data[2]*g+a.Z.data[h].data[3]<=0.0&&a.Z.data[h].data[0]*e+a.Z.data[h].data[1]*f+a.Z.data[h].data[2]*g+a.Z.data[h].data[3]<=0.0)return 0;h=h+1|0;}return 1;}
function Sz(){var a=this;JJ.call(a);a.np=null;a.mG=null;a.wQ=null;}
var A9_=null;function A0C(){var a=new Sz();AAL(a);return a;}
function AAL(a){ACz(a);a.np=GN(16);a.mG=GN(16);a.wQ=GN(16);}
function OY(){AEH(A9_);return A9_;}
function FW(a,b,c){var d,e;b=b.data;d=DF(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AEH(a){J1(a.np);J1(a.mG);J1(a.wQ);Qr(2983,a.np);Qr(2982,a.mG);Nr(Qp(a.np),16);RQ(a.np,a.V);Nr(Qp(a.mG),16);RQ(a.mG,a.U);a.X.data[0]=a.U.data[0]*a.V.data[0]+a.U.data[1]*a.V.data[4]+a.U.data[2]*a.V.data[8]+a.U.data[3]*a.V.data[12];a.X.data[1]=a.U.data[0]*a.V.data[1]+a.U.data[1]*a.V.data[5]+a.U.data[2]*a.V.data[9]+a.U.data[3]*a.V.data[13];a.X.data[2]=a.U.data[0]*a.V.data[2]+a.U.data[1]*a.V.data[6]+a.U.data[2]*a.V.data[10]+a.U.data[3]*a.V.data[14];a.X.data[3]=a.U.data[0]*a.V.data[3]+a.U.data[1]*a.V.data[7]
+a.U.data[2]*a.V.data[11]+a.U.data[3]*a.V.data[15];a.X.data[4]=a.U.data[4]*a.V.data[0]+a.U.data[5]*a.V.data[4]+a.U.data[6]*a.V.data[8]+a.U.data[7]*a.V.data[12];a.X.data[5]=a.U.data[4]*a.V.data[1]+a.U.data[5]*a.V.data[5]+a.U.data[6]*a.V.data[9]+a.U.data[7]*a.V.data[13];a.X.data[6]=a.U.data[4]*a.V.data[2]+a.U.data[5]*a.V.data[6]+a.U.data[6]*a.V.data[10]+a.U.data[7]*a.V.data[14];a.X.data[7]=a.U.data[4]*a.V.data[3]+a.U.data[5]*a.V.data[7]+a.U.data[6]*a.V.data[11]+a.U.data[7]*a.V.data[15];a.X.data[8]=a.U.data[8]
*a.V.data[0]+a.U.data[9]*a.V.data[4]+a.U.data[10]*a.V.data[8]+a.U.data[11]*a.V.data[12];a.X.data[9]=a.U.data[8]*a.V.data[1]+a.U.data[9]*a.V.data[5]+a.U.data[10]*a.V.data[9]+a.U.data[11]*a.V.data[13];a.X.data[10]=a.U.data[8]*a.V.data[2]+a.U.data[9]*a.V.data[6]+a.U.data[10]*a.V.data[10]+a.U.data[11]*a.V.data[14];a.X.data[11]=a.U.data[8]*a.V.data[3]+a.U.data[9]*a.V.data[7]+a.U.data[10]*a.V.data[11]+a.U.data[11]*a.V.data[15];a.X.data[12]=a.U.data[12]*a.V.data[0]+a.U.data[13]*a.V.data[4]+a.U.data[14]*a.V.data[8]
+a.U.data[15]*a.V.data[12];a.X.data[13]=a.U.data[12]*a.V.data[1]+a.U.data[13]*a.V.data[5]+a.U.data[14]*a.V.data[9]+a.U.data[15]*a.V.data[13];a.X.data[14]=a.U.data[12]*a.V.data[2]+a.U.data[13]*a.V.data[6]+a.U.data[14]*a.V.data[10]+a.U.data[15]*a.V.data[14];a.X.data[15]=a.U.data[12]*a.V.data[3]+a.U.data[13]*a.V.data[7]+a.U.data[14]*a.V.data[11]+a.U.data[15]*a.V.data[15];a.Z.data[0].data[0]=a.X.data[3]-a.X.data[0];a.Z.data[0].data[1]=a.X.data[7]-a.X.data[4];a.Z.data[0].data[2]=a.X.data[11]-a.X.data[8];a.Z.data[0].data[3]
=a.X.data[15]-a.X.data[12];FW(a,a.Z,0);a.Z.data[1].data[0]=a.X.data[3]+a.X.data[0];a.Z.data[1].data[1]=a.X.data[7]+a.X.data[4];a.Z.data[1].data[2]=a.X.data[11]+a.X.data[8];a.Z.data[1].data[3]=a.X.data[15]+a.X.data[12];FW(a,a.Z,1);a.Z.data[2].data[0]=a.X.data[3]+a.X.data[1];a.Z.data[2].data[1]=a.X.data[7]+a.X.data[5];a.Z.data[2].data[2]=a.X.data[11]+a.X.data[9];a.Z.data[2].data[3]=a.X.data[15]+a.X.data[13];FW(a,a.Z,2);a.Z.data[3].data[0]=a.X.data[3]-a.X.data[1];a.Z.data[3].data[1]=a.X.data[7]-a.X.data[5];a.Z.data[3].data[2]
=a.X.data[11]-a.X.data[9];a.Z.data[3].data[3]=a.X.data[15]-a.X.data[13];FW(a,a.Z,3);a.Z.data[4].data[0]=a.X.data[3]-a.X.data[2];a.Z.data[4].data[1]=a.X.data[7]-a.X.data[6];a.Z.data[4].data[2]=a.X.data[11]-a.X.data[10];a.Z.data[4].data[3]=a.X.data[15]-a.X.data[14];FW(a,a.Z,4);a.Z.data[5].data[0]=a.X.data[3]+a.X.data[2];a.Z.data[5].data[1]=a.X.data[7]+a.X.data[6];a.Z.data[5].data[2]=a.X.data[11]+a.X.data[10];a.Z.data[5].data[3]=a.X.data[15]+a.X.data[14];FW(a,a.Z,5);}
function ACf(){A9_=A0C();}
function N_(){}
function AA9(){var a=this;E.call(a);a.zM=null;a.tk=0.0;a.tK=0.0;a.t0=0.0;}
function A09(){var a=new AA9();AX_(a);return a;}
function AX_(a){a.zM=OY();}
function AIP(a,b,c,d){a.tk=b;a.tK=c;a.t0=d;}
function VY(a,b,c,d,e,f,g){return ALZ(a.zM,b-a.tk,c-a.tK,d-a.t0,e-a.tk,f-a.tK,g-a.t0);}
function KG(a,b){return VY(a,b.N,b.I,b.O,b.R,b.Q,b.S);}
function G0(){var a=this;E.call(a);a.xj=null;a.fG=null;a.l_=null;}
function A$a(a,b,c){var d=new G0();Jo(d,a,b,c);return d;}
function Jo(a,b,c,d){a.xj=b;a.fG=c;a.l_=d;}
function AWh(a){return a.fG.fE()+a.l_.fE()|0;}
function AV$(a){return a.xj;}
function AM7(a,b){return b<a.fG.fE()?a.fG.fN(b):a.l_.fN(b-a.fG.fE()|0);}
function AUb(a,b,c){return b<a.fG.fE()?a.fG.i3(b,c):a.l_.i3(b-a.fG.fE()|0,c);}
function APC(a,b,c){if(b<a.fG.fE())a.fG.iC(b,c);else a.l_.iC(b-a.fG.fE()|0,c);}
function AYL(a){return a.fG.fp();}
function Um(a){var b,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.fG;$p=1;case 1:b.jg();if(C()){break _;}b=a.l_;$p=2;case 2:b.jg();if(C()){break _;}return;default:Eq();}}CL().s(a,b,$p);}
function Vr(){CJ.call(this);}
function AQ5(a,b,c,d,e,f,g,h){var i=new Vr();ASF(i,a,b,c,d,e,f,g,h);return i;}
function ASF(a,b,c,d,e,f,g,h,i){EP(a,b,c,d,e,f,g,h);a.ev=i.W;a.lL=i.AW;a.ht=0.6000000238418579;a.hl=0.6000000238418579;a.g8=0.6000000238418579;a.cZ=a.cZ/2.0;}
function ANs(a){return 1;}
function Uy(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=((a.ev%16|0)+a.yg/4.0)/16.0;j=i+0.015609375201165676;k=((a.ev/16|0)+a.yh/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.cZ;n
=a.bH;o=a.c-a.bH;p=c;q=n+o*p-A9U;r=a.ct+(a.i-a.ct)*p-A9V;s=a.bG+(a.d-a.bG)*p-A9W;$p=1;case 1:$z=Y$(a,c);if(C()){break _;}t=$z;Cf(b,t*a.g8,t*a.hl,t*a.ht);t=d*m;u=q-t;g=g*m;v=u-g;w=e*m;o=r-w;c=f*m;d=s-c;e=h*m;n=d-e;x=i;p=l;F(b,v,o,n,x,p);n=u+g;v=r+w;y=d+e;z=k;F(b,n,v,y,x,z);d=q+t;n=d+g;c=s+c;x=c+e;y=j;F(b,n,v,x,y,z);F(b,d-g,o,c-e,y,p);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function Je(){B5.call(this);}
function A$b(){var a=new Je();ATt(a);return a;}
function ATt(a){R(a);}
function Ic(){CJ.call(this);}
function A$c(a,b,c,d){var e=new Ic();Qq(e,a,b,c,d);return e;}
function Qq(a,b,c,d,e){EP(a,b,c,d,e,0.0,0.0,0.0);a.f=a.f*0.30000001192092896;a.h=BI()*0.20000000298023224+0.10000000149011612;a.g=a.g*0.30000001192092896;a.g8=1.0;a.hl=1.0;a.ht=1.0;a.ev=16;Dx(a,0.009999999776482582,0.009999999776482582);a.lL=0.05999999865889549;a.b_=8.0/(BI()*0.8+0.2)|0;}
function AFz(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AH0(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AI2(a){var b,c,d,e,f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.i;a.bG=a.d;a.h=a.h-a.lL;b=a.f;c=a.h;d=a.g;$p=1;case 1:ALQ(a,b,c,d);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;e=a.b_;a.b_=e-1|0;if(e<=0){$p=2;continue _;}if(a.ca){if(BI()<0.5){$p=5;continue _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}f=a.k;e
=I(a.c);g=I(a.i);h=I(a.d);$p=3;continue _;case 2:B4(a);if(C()){break _;}if(a.ca){if(BI()<0.5){$p=5;continue _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}f=a.k;e=I(a.c);g=I(a.i);h=I(a.d);$p=3;case 3:$z=Xw(f,e,g,h);if(C()){break _;}f=$z;if(!f.me()&&!f.c3())return;i=I(a.i)+1|0;f=a.k;e=I(a.c);g=I(a.i);h=I(a.d);$p=4;case 4:$z=Z5(f,e,g,h);if(C()){break _;}e=$z;b=i-HX(e);if(a.i>=b)return;$p=6;continue _;case 5:B4(a);if(C()){break _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;f=a.k;e=I(a.c);g=I(a.i);h
=I(a.d);$p=3;continue _;case 6:B4(a);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function Ho(){var a=this;Hc.call(a);a.dS=null;a.xu=0;a.dH=0;}
function A$d(a,b,c,d,e,f){var g=new Ho();Mk(g,a,b,c,d,e,f);return g;}
function Mk(a,b,c,d,e,f,g){QC(a,c,e,f);a.dH=b;a.dS=d;a.xu=g;}
function AQc(a){return a.xu;}
function ML(){Ho.call(this);}
function AO$(a,b){var c,d;c=a.dS.b4.data;d=a.dH;b=b*4|0;return c[d+b|0]&255|(a.dS.b4.data[(a.dH+b|0)+1|0]&255)<<8|(a.dS.b4.data[(a.dH+b|0)+2|0]&255)<<16|(a.dS.b4.data[(a.dH+b|0)+3|0]&255)<<24;}
function AMT(a,b,c){var d,e;d=a.dS.b4.data;e=a.dH;b=b*4|0;d[e+b|0]=c<<24>>24;a.dS.b4.data[(a.dH+b|0)+1|0]=c>>8<<24>>24;a.dS.b4.data[(a.dH+b|0)+2|0]=c>>16<<24>>24;a.dS.b4.data[(a.dH+b|0)+3|0]=c>>24<<24>>24;}
function RT(){Ho.call(this);}
function ASm(a,b){var c,d;c=a.dS.b4.data;d=a.dH;b=b*4|0;return (c[d+b|0]&255)<<24|(a.dS.b4.data[(a.dH+b|0)+1|0]&255)<<16|(a.dS.b4.data[(a.dH+b|0)+2|0]&255)<<8|a.dS.b4.data[(a.dH+b|0)+3|0]&255;}
function ANu(a,b,c){var d,e;d=a.dS.b4.data;e=a.dH;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.dS.b4.data[(a.dH+b|0)+1|0]=c>>16<<24>>24;a.dS.b4.data[(a.dH+b|0)+2|0]=c>>8<<24>>24;a.dS.b4.data[(a.dH+b|0)+3|0]=c<<24>>24;}
function AFG(){E.call(this);this.tT=null;}
function AQP(a){var b=new AFG();AXn(b,a);return b;}
function AXn(a,b){a.tT=b;}
function Vw(a,b,c){return F3(b,a.tT)>=F3(c,a.tT)?1:(-1);}
function ASC(a,b,c){return Vw(a,b,c);}
function K6(){E.call(this);}
var A$e=null;var A$f=null;function A$g(){var a=new K6();AMa(a);return a;}
function AMa(a){return;}
function Ru(b){var c;c=0;while(true){if(c>=A$e.data.length)return (-1);if(b==A$e.data[c])break;c=c+1|0;}return c;}
function AJF(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;A$e=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;A$f=b;}
function Sd(){E.call(this);this.vF=null;}
function AJ_(a,b,c){var d,e;d=b.eT;e=c.eT;return d&&!e?1:e&&!d?(-1):F3(b,a.vF)>=F3(c,a.vF)?(-1):1;}
function AYt(a,b,c){return AJ_(a,b,c);}
function Gi(){E.call(this);}
var A$h=null;var A$i=null;var A$j=null;var A$k=null;var A$l=null;function A$m(){var a=new Gi();V0(a);return a;}
function V0(a){return;}
function OG(b,c){var d,e,f;if(c===null)c=A$k;d=N(E,b.p);AFH(b,d);Ne(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;Og(b,e,f[e]);e=e+1|0;}}
function AII(){A$h=new Pc;A$i=new Pb;A$j=new Pd;A$k=new SF;A$l=new SD;}
function GJ(){var a=this;E.call(a);a.lp=null;a.vH=null;a.zZ=null;a.zi=null;a.DB=null;a.Cz=0.0;a.B2=0.0;a.Bs=0.0;a.Br=0.0;a.Bq=0.0;}
var A9t=null;var A9O=0.0;var A9P=0.0;var A9Q=0.0;function A1o(){var a=new GJ();YD(a);return a;}
function YD(a){var b;a.lp=CY();BK(a.lp,K(HN),A1G());BK(a.lp,K(Lj),A0$());b=K8(G_(a.lp));while(Fh(b)){Kl(b).pr=a;}}
function RD(a,b){var c;c=Cz(a.lp,b);if(c===null&&b!==K(DE)){c=RD(a,H8(b));BK(a.lp,b,c);}return c;}
function ADd(a,b){return Sp(a,b)===null?0:1;}
function Sp(a,b){return RD(a,C4(b));}
function ALv(a,b,c,d,e,f){var g,h,i;a.zi=b;a.zZ=c;a.DB=e;a.vH=d;a.Cz=e.K+(e.q-e.K)*f;a.B2=e.P+(e.E-e.P)*f;g=e.b6;h=e.c-e.b6;i=f;a.Bs=g+h*i;a.Br=e.bP+(e.i-e.bP)*i;a.Bq=e.b7+(e.d-e.b7)*i;}
function UK(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(AFN(b,a.Bs,a.Br,a.Bq)>=4096.0)return;d=a.zi;e=b.de;f=b.dc;g=b.dj;$p=1;case 1:$z=AHP(d,e,f,g);if(C()){break _;}h=$z;Fd(h,h,h);i=b.de-A9O;j=b.dc-A9P;k=b.dj-A9Q;$p=2;case 2:AAG(a,b,i,j,k,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAG(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=Sp(a,b);if(g===null)return;$p=1;case 1:g.zB(b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AZW(a){return a.vH;}
function AGs(){A9t=A1o();}
function GL(){var a=this;E.call(a);a.dn=null;a.BT=null;a.r2=null;a.mF=null;a.DM=null;a.pF=0.0;a.CM=0.0;a.BY=null;a.AB=0.0;a.AA=0.0;a.Az=0.0;}
var A5q=null;var A9L=0.0;var A9M=0.0;var A9N=0.0;function A0f(){var a=new GL();ABH(a);return a;}
function ABH(a){var b,c,d,e,f;a.dn=CY();BK(a.dn,K(IN),AZZ());b=a.dn;c=new Qx;d=A10();e=new Nb;Jh(e,6,0.5);Fv(c,d,0.699999988079071);c.jf=e;BK(b,K(He),c);d=a.dn;f=new Qg;c=A1F();e=A1m();Fv(f,c,0.699999988079071);f.jf=e;BK(d,K(I6),f);BK(a.dn,K(In),A1y());BK(a.dn,K(HR),AQv(A1R(),0.5));d=a.dn;f=new Dj;c=new GF;I5(c);Fv(f,c,0.5);BK(d,K(HD),f);BK(a.dn,K(HW),A01());d=a.dn;f=new QA;c=new GF;I5(c);Fv(f,c,3.0);f.rH=6.0;BK(d,K(Jr),f);BK(a.dn,K(D_),AQv(AZj(),0.5));d=a.dn;f=new Qn;D7(f);BK(d,K(CN),f);BK(a.dn,K(Hh),A1k());d
=a.dn;f=new OC;D7(f);BK(d,K(HV),f);BK(a.dn,K(Ep),TS());BK(a.dn,K(Kt),A0i());BK(a.dn,K(Ia),A0d());BK(a.dn,K(Fn),A1v());d=K8(G_(a.dn));while(Fh(d)){Kl(d).hC=a;}}
function SY(a,b){var c;c=Cz(a.dn,b);if(c===null&&b!==K(CN)){c=SY(a,H8(b));BK(a.dn,b,c);}return c;}
function Pf(a,b){return SY(a,C4(b));}
function ACj(a,b,c,d,e,f,g){var h,i,j;a.mF=b;a.r2=c;a.BY=f;a.DM=e;a.BT=d;a.pF=e.K+(e.q-e.K)*g;a.CM=e.P+(e.E-e.P)*g;h=e.b6;i=e.c-e.b6;j=g;a.AB=h+i*j;a.AA=e.bP+(e.i-e.bP)*j;a.Az=e.b7+(e.d-e.b7)*j;}
function AHG(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.b6;e=b.c-b.b6;f=c;e=d+e*f;d=b.bP+(b.i-b.bP)*f;g=b.b7+(b.d-b.b7)*f;h=b.K+(b.q-b.K)*c;$p=1;case 1:$z=b.s6(c);if(C()){break _;}i=$z;Fd(i,i,i);e=e-A9L;d=d-A9M;f=g-A9N;$p=2;case 2:AKZ(a,b,e,d,f,h,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AKZ(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=Pf(a,b);if(h===null)return;$p=1;case 1:h.hO(b,c,d,e,f,g);if(C()){break _;}$p=2;case 2:AHR(h,b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AXr(a,b){a.mF=b;}
function AEK(a,b,c,d){var e,f,g;e=b-a.AB;f=c-a.AA;g=d-a.Az;return e*e+f*f+g*g;}
function AFi(){A5q=A0f();}
function Iq(){B5.call(this);}
function A$n(){var a=new Iq();AXf(a);return a;}
function AXf(a){R(a);}
function R2(){var a=this;E.call(a);a.d9=0;a.eo=0;a.d$=0;}
function Cy(a,b,c){var d=new R2();APu(d,a,b,c);return d;}
function APu(a,b,c,d){a.d9=b;a.eo=c;a.d$=d;}
function AWd(a,b){var c;if(!(b instanceof R2))return 0;c=b;return c.d9==a.d9&&c.eo==a.eo&&c.d$==a.d$?1:0;}
function ASM(a){return (Bg(a.d9,8976890)+Bg(a.eo,981131)|0)+a.d$|0;}
function L9(){Es.call(this);}
var A$o=0.0;var A$p=null;function ZL(){A$o=NaN;A$p=K($rt_floatcls());}
function Gd(){E.call(this);}
var A2u=null;var A2w=null;var A2x=null;var A2v=null;var A2t=null;function A$q(){var a=new Gd();AK3(a);return a;}
function AK3(a){return;}
function AHl(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;A2u=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);A2w=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);A2x=b;A2v=new Sb;A2t=new Pa;}
function K7(){E.call(this);}
var A$r=null;var A$s=null;function A$t(){var a=new K7();AFa(a);return a;}
function AFa(a){return;}
function AIJ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=$rt_floatToIntBits(b);c.wB=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.st=0;c.sf=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AIW(A$s,f);if(h<0)h= -h-2|0;i=9+(f-A$s.data[h]|0)|0;j=Long_fromInt(e);k=Long_shru(Long_mul(j,Long_fromInt(A$r.data[h])),32-i|0).lo;if(k>=1000000000){h=h+1|0;i=9+(f-A$s.data[h]|0)|0;k=Long_shru(Long_mul(j,Long_fromInt(A$r.data[h])),
32-i|0).lo;}g=(31-i|0)-g|0;l=g>=0?A$r.data[h]>>>g:A$r.data[h]<< -g;m=(l+1|0)>>1;n=l>>1;if(e==4194304)n=n>>2;o=10;while(o<=n){o=o*10|0;}if((k%o|0)>=(n/2|0))o=o/10|0;p=10;while(p<=m){p=p*10|0;}if((p-(k%p|0)|0)>(m/2|0))p=p/10|0;e=S(o,p);e=e>0?Bg(k/o|0,o):e<0?Bg(k/p|0,p)+p|0:Bg((k+(p/2|0)|0)/p|0,p);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.st=e;c.sf=h-50|0;}
function AFX(){var b,c,d,e,f,g,h,i;A$r=$rt_createIntArray(100);A$s=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=A$r.data;g=d+50|0;f[g]=$rt_udiv(e,20);A$s.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=A$r.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);A$s.data[i]=c;d=d+1|0;}}
function Pa(){var a=this;E.call(a);a.st=0;a.sf=0;a.wB=0;}
function A$u(){var a=new Pa();AMS(a);return a;}
function AMS(a){return;}
function Dj(){var a=this;C1.call(a);a.lj=null;a.jf=null;}
function AQv(a,b){var c=new Dj();Fv(c,a,b);return c;}
function Fv(a,b,c){D7(a);a.lj=b;a.kS=c;}
function AY4(a,b){a.jf=b;}
function VS(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BU();X(2884);try{h=b.ex+(b.da-b.ex)*g;i=b.K+(b.q-b.K)*g;j=b.P+(b.E-b.P)*g;Br(c,d,e);k=b.nm+g;Bq(180.0-h,0.0,1.0,0.0);if(b.cD>0){f=DF((b.cD+g
-1.0)/20.0*1.600000023841858);if(f>1.0)f=1.0;Bq(f*a.zq(b),0.0,0.0,1.0);}l=0.0625;V(32826);Co((-1.0),(-1.0),1.0);a.uS(b,g);Br(0.0,(-1.5078125),0.0);m=b.iT+(b.bX-b.iT)*g;n=b.fF-b.bX*(1.0-g);if(m>1.0)m=1.0;o=b.rT;p=M7(b);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){o=$$je;}else{throw $$e;}}BZ(o);V(2884);By();return;case 1:try{AJT(a,o,p);if(C()){break _;}V(3008);o=a.lj;f=i-h;o.gT(n,m,k,f,j,l);q=0;if(q>=4){$p=2;continue _;}$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){o=$$je;}
else{throw $$e;}}BZ(o);V(2884);By();return;case 2:a:{try{$z=Y$(b,g);if(C()){break _;}r=$z;s=a.zt(b,r,g);q=s>>24&255;if(!(q<=0&&b.c$<=0&&b.cD<=0)){X(3553);X(3008);V(3042);C0(770,771);Gy(514);if(!(b.c$<=0&&b.cD<=0)){BN(r,0.0,0.0,0.4000000059604645);a.lj.gT(n,m,k,f,j,l);t=0;if(t<4){$p=4;continue _;}}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BN(u,v,w,x);a.lj.gT(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}Gy(515);X(3042);V(3008);V(3553);}X(32826);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz)
{o=$$je;}else{throw $$e;}}BZ(o);}V(2884);By();return;case 3:try{$z=a.jY(b,q);if(C()){break _;}s=$z;if(s){a.jf.gT(n,m,k,f,j,l);X(3042);V(3008);}q=q+1|0;if(q>=4){$p=2;continue _;}continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){o=$$je;}else{throw $$e;}}BZ(o);V(2884);By();return;case 4:a:{try{$z=a.jY(b,t);if(C()){break _;}y=$z;if(y){BN(r,0.0,0.0,0.4000000059604645);a.jf.gT(n,m,k,f,j,l);}t=t+1|0;if(t<4){continue _;}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BN(u,v,w,x);a.lj.gT(n,
m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}Gy(515);X(3042);V(3008);V(3553);X(32826);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){o=$$je;}else{throw $$e;}}BZ(o);}V(2884);By();return;case 5:a:{try{$z=a.jY(b,y);if(C()){break _;}s=$z;if(s){BN(u,v,w,x);a.jf.gT(n,m,k,f,j,l);}y=y+1|0;if(y>=4){Gy(515);X(3042);V(3008);V(3553);X(32826);break a;}continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){o=$$je;}else{throw $$e;}}BZ(o);}V(2884);By();return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,$p);}
function AKi(a,b,c){return 0;}
function AVr(a,b){return 90.0;}
function AWk(a,b,c,d){return 0;}
function AYb(a,b,c){return;}
function AJo(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.DT(b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Ml(){var a=this;Dj.call(a);a.x1=null;a.xn=null;a.ze=null;}
var A$v=null;function A01(){var a=new Ml();AC_(a);return a;}
function AC_(a){Fv(a,Tm(0.0),0.5);a.x1=a.lj;a.xn=Tm(1.0);a.ze=Tm(0.5);}
function ALK(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=ADe(b.F,3-c|0);if(d!==null){e=Dl(d);if(e instanceof Fb){f=e;b=new Bd;Bb(b);b=H(H(H(b,B(560)),A$v.data[f.yu]),B(561));g=S(c,2);b=O(H(Be(b,g?1:2),B(366)));$p=1;continue _;}}return 0;case 1:AFg(a,b);if(C()){break _;}h=g?a.xn:a.ze;h.hW.hQ=c?0:1;h.j2.hQ=c?0:1;b=h.nJ;i=S(c,1);b.hQ=i&&g?0:1;h.dv.hQ=i?0:1;h.dh.hQ=i?0:1;h.h8.hQ
=g&&c!=3?0:1;h.gt.hQ=g&&c!=3?0:1;a.jf=h;return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function Ze(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-b.cF;$p=1;case 1:VS(a,b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AGh(a){B2(a.x1.dv,0.0625);}
function UW(a,b,c){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ALK(a,b,c);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,$p);}
function AGL(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:Ze(a,b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Yg(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:Ze(a,b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function VW(){var b,c;b=N(Cp,5);c=b.data;c[0]=B(231);c[1]=B(562);c[2]=B(563);c[3]=B(564);c[4]=B(565);A$v=b;}
function JK(){var a=this;Fm.call(a);a.gN=0;a.h3=0;a.g2=0;a.hd=0;a.jj=null;a.co=0;a.gz=0;a.wf=0;}
function C9(a,b,c,d){var e=new JK();AUc(e,a,b,c,d);return e;}
function A$w(a,b,c,d,e,f){var g=new JK();PB(g,a,b,c,d,e,f);return g;}
function AUc(a,b,c,d,e){PB(a,b,c,d,200,20,e);}
function PB(a,b,c,d,e,f,g){K5(a);a.gN=200;a.h3=20;a.gz=1;a.wf=1;a.co=b;a.g2=c;a.hd=d;a.gN=e;a.h3=f;a.jj=g;}
function Yn(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.wf)return;e=b.ey;f=3553;g=b.bi;b=B(378);$p=1;case 1:$z=ACB(g,b);if(C()){break _;}h=$z;Ce(f,h);BN(1.0,1.0,1.0,1.0);h=1;f=c>=a.g2&&d>=a.hd&&c<(a.g2+a.gN|0)&&d<(a.hd+a.h3|0)?1:0;if(!a.gz)h=0;else if(f)h=2;i=a.g2;j=a.hd;h=46+(h*20|0)|0;Ct(a,i,j,0,h,a.gN/2|0,a.h3);Ct(a,a.g2+(a.gN/2|0)|0,a.hd,200-(a.gN/2|0)|0,
h,a.gN/2|0,a.h3);if(!a.gz)Dz(a,e,a.jj,a.g2+(a.gN/2|0)|0,a.hd+((a.h3-8|0)/2|0)|0,(-6250336));else if(!f)Dz(a,e,a.jj,a.g2+(a.gN/2|0)|0,a.hd+((a.h3-8|0)/2|0)|0,14737632);else Dz(a,e,a.jj,a.g2+(a.gN/2|0)|0,a.hd+((a.h3-8|0)/2|0)|0,16777120);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,$p);}
function O7(a,b,c){return a.gz&&b>=a.g2&&c>=a.hd&&b<(a.g2+a.gN|0)&&c<(a.hd+a.h3|0)?1:0;}
function Kh(){E.call(this);}
function A$x(){var a=new Kh();AOX(a);return a;}
function AOX(a){return;}
function NG(){}
function IT(){var a=this;Kh.call(a);a.w$=null;a.DO=null;a.s2=0;a.z0=0;a.lU=null;a.tu=null;}
function ZA(a){var b,c,d;a:{b=a.s2;c=a.z0;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6;return d|c&8|b<<2&16|c&32|b>>>8&64|b>>>5&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function WV(a){return a.lU.nq();}
function SB(a,b){var c,d,e,f,g;if(a.s2&1){c=new J7;R(c);M(c);}if(a.tu===null){c=new P0;R(c);M(c);}d=b.data;e=d.length;if(e!=a.lU.data.length){c=new Cq;R(c);M(c);}f=0;while(true){if(f>=e){c=b.data;g=new a.w$.fj();a.tu.call(g,c);return g;}if(!E9(a.lU.data[f])&&d[f]!==null&&!QR(a.lU.data[f],d[f])){c=new Cq;R(c);M(c);}if(E9(a.lU.data[f])&&d[f]===null)break;f=f+1|0;}c=new Cq;R(c);M(c);}
function L8(){}
function NL(){E.call(this);}
function A$y(){var a=new NL();AZy(a);return a;}
function AZy(a){return;}
function AEl(a){var b,c,d;Y();A2L.requestPointerLock();b=B1();if(RV())clearTimeout(RV());KQ(0);if(Long_lt(Long_sub(b,Nd()),Long_fromInt(3000))){c=new P$;c.EY=a;d=3000-Long_sub(b,Nd()).lo|0;KQ(setTimeout(Cj(c,"onTimer"),d));}}
function ASU(a){AEl(a);}
function SF(){E.call(this);}
function A$z(){var a=new SF();AOB(a);return a;}
function AOB(a){return;}
function AU7(a,b,c){return b!==null?b.kA(c): -c.kA(b);}
function SD(){E.call(this);}
function A$A(){var a=new SD();AVN(a);return a;}
function AVN(a){return;}
function Pc(){Et.call(this);}
function A$B(){var a=new Pc();AYK(a);return a;}
function AYK(a){return;}
function Pb(){E7.call(this);}
function A$C(){var a=new Pb();AYN(a);return a;}
function AYN(a){return;}
function Pd(){Fl.call(this);}
function A$D(){var a=new Pd();AUs(a);return a;}
function AUs(a){return;}
function Hd(){E.call(this);this.pr=null;}
function AFm(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.pr.zZ;$p=1;case 1:$z=ACB(c,b);if(C()){break _;}d=$z;DI(c,d);return;default:Eq();}}CL().s(a,b,c,d,$p);}
function ASl(a,b){a.pr=b;}
function AH9(a){return a.pr.vH;}
function WD(){Hd.call(this);this.A2=null;}
function A1G(){var a=new WD();ANn(a);return a;}
function ANn(a){a.A2=A1j();}
function ALC(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BU();Br(c+0.5,d+0.75,e+0.5);$p=1;case 1:$z=AGW(b);if(C()){break _;}g=$z;Bq( -((g*360|0)/16.0),0.0,1.0,0.0);h=B(566);$p=2;case 2:AFm(a,h);if(C()){break _;}BU();Co(1.0,(-1.0),(-1.0));AHH(a.A2);By();Br(0.0,0.5,0.09000000357627869);Co(0.01666666753590107,(-0.01666666753590107),0.01666666753590107);B_(0.0,
0.0,(-0.01666666753590107));h=AH9(a);i=0;while(i<b.fJ.data.length){j=b.fJ.data[i];if(i!=b.pR)D4(h,j, -Db(h,j)/2|0,(i*10|0)-(b.fJ.data.length*5|0)|0,0);else{k=new Bd;Bb(k);j=O(H(H(H(k,B(567)),j),B(568)));D4(h,j, -Db(h,j)/2|0,(i*10|0)-(b.fJ.data.length*5|0)|0,0);}i=i+1|0;}BN(1.0,1.0,1.0,1.0);By();return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Tv(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ALC(a,b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Lj(){var a=this;DE.call(a);a.iX=0;a.iM=null;a.kx=0.0;a.k$=0.0;}
function A1N(){var a=new Lj();AXx(a);return a;}
function AXx(a){a.iX=(-1);a.iM=B(569);a.k$=0.0;a.iX=20;}
function Vs(a){return ABW(a.bY.bc,a.de,a.dc,a.dj)>256.0?0:1;}
function Yx(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.k$=a.kx;if(Vs(a)){b=a.de+L(a.bY.n);c=a.dc+L(a.bY.n);d=a.dj+L(a.bY.n);BP(a.bY,B(248),b,c,d,0.0,0.0,0.0);BP(a.bY,B(249),b,c,d,0.0,0.0,0.0);a.kx=a.kx+1000.0/(a.iX+200.0);while(a.kx>360.0){a.kx=a.kx-360.0;a.k$=a.k$-360.0;}if(a.iX==(-1))LB(a);if(a.iX>0)a.iX=
a.iX-1|0;else{e=4;f=0;if(f<e){g=HQ(a.iM,a.bY);if(g===null)return;h=a.bY;i=C4(g);j=Da(Dy(a.de,a.dc,a.dj,a.de+1|0,a.dc+1|0,a.dj+1|0),8.0,4.0,8.0);$p=1;continue _;}}}return;case 1:$z=AHM(h,i,j);if(C()){break _;}h=$z;if(h.p>=6){LB(a);return;}k=a.de+(Cb(a.bY.n)-Cb(a.bY.n))*4.0;l=(a.dc+D(a.bY.n,3)|0)-1|0;m=a.dj+(Cb(a.bY.n)-Cb(a.bY.n))*4.0;IU(g,k,l,m,L(a.bY.n)*360.0,0.0);$p=2;case 2:$z=g.sK(k,l,m);if(C()){break _;}n=$z;if(n){h=a.bY;$p=3;continue _;}f=f+1|0;if(f>=e)return;g=HQ(a.iM,a.bY);if(g===null)return;h=a.bY;i
=C4(g);j=Da(Dy(a.de,a.dc,a.dj,a.de+1|0,a.dc+1|0,a.dj+1|0),8.0,4.0,8.0);$p=1;continue _;case 3:AIM(h,g);if(C()){break _;}o=0;while(o<20){c=a.de+0.5+(L(a.bY.n)-0.5)*2.0;d=a.dc+0.5+(L(a.bY.n)-0.5)*2.0;k=a.dj+0.5+(L(a.bY.n)-0.5)*2.0;BP(a.bY,B(248),c,d,k,0.0,0.0,0.0);BP(a.bY,B(249),c,d,k,0.0,0.0,0.0);o=o+1|0;}Z_(g);LB(a);f=f+1|0;if(f>=e)return;g=HQ(a.iM,a.bY);if(g===null)return;h=a.bY;i=C4(g);j=Da(Dy(a.de,a.dc,a.dj,a.de+1|0,a.dc+1|0,a.dj+1|0),8.0,4.0,8.0);$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,
k,l,m,n,o,$p);}
function LB(a){a.iX=200+D(a.bY.n,600)|0;}
function AL$(){Hd.call(this);this.un=null;}
function A0$(){var a=new AL$();APR(a);return a;}
function APR(a){a.un=CY();}
function VI(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BU();Br(c+0.5,d,e+0.5);g=Cz(a.un,b.iM);if(g===null){g=HQ(b.iM,null);BK(a.un,b.iM,g);}if(g===null){By();return;}g.k=b.bY;Br(0.0,0.4000000059604645,0.0);Bq((b.k$+(b.kx-b.k$)*f)*10.0,0.0,1.0,0.0);Bq((-30.0),1.0,0.0,0.0);Br(0.0,(-0.4000000059604645),0.0);Co(0.4375,0.4375,0.4375);b=A5q;c=0.0;d=0.0;e=0.0;h=0.0;$p=1;case 1:AKZ(b,g,c,d,e,
h,f);if(C()){break _;}By();return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function ALr(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:VI(a,b,c,d,e,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AKH(){Dj.call(this);}
function AZZ(){var a=new AKH();AUR(a);return a;}
function AUR(a){Fv(a,AVv(),1.0);a.jf=AVv();}
function AWc(a,b){return 180.0;}
function TP(a,b,c){var d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c)return 0;if(c)return 0;d=B(570);$p=1;case 1:AFg(a,d);if(C()){break _;}e=1.0;f=1.0;$p=2;case 2:$z=Y$(b,f);if(C()){break _;}f=$z;f=(e-f)*0.5;V(3042);X(3008);C0(770,771);BN(1.0,1.0,1.0,f);return 1;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AWa(a,b){return 180.0;}
function T4(a,b,c){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=TP(a,b,c);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,$p);}
function Qx(){Dj.call(this);}
function ABr(a,b,c){var d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(571);$p=1;case 1:AFg(a,d);if(C()){break _;}return !c&&b.oR?1:0;default:Eq();}}CL().s(a,b,c,d,$p);}
function AGU(a,b,c){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ABr(a,b,c);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,$p);}
function E_(){var a=this;DN.call(a);a.gs=null;a.gO=null;a.iI=null;a.iH=null;a.iG=null;a.iJ=null;}
function A$E(a,b){var c=new E_();Jh(c,a,b);return c;}
function Jh(a,b,c){var d,e;a.gs=BF(0,0);BA(a.gs,(-4.0),(-4.0),(-8.0),8,8,8,c);BD(a.gs,0.0,18-b|0,(-6.0));a.gO=BF(28,8);BA(a.gO,(-5.0),(-10.0),(-7.0),10,16,8,c);BD(a.gO,0.0,17-b|0,2.0);a.iI=BF(0,16);BA(a.iI,(-2.0),0.0,(-2.0),4,b,4,c);d=a.iI;e=24-b|0;BD(d,(-3.0),e,7.0);a.iH=BF(0,16);BA(a.iH,(-2.0),0.0,(-2.0),4,b,4,c);BD(a.iH,3.0,e,7.0);a.iG=BF(0,16);BA(a.iG,(-2.0),0.0,(-2.0),4,b,4,c);BD(a.iG,(-3.0),e,(-5.0));a.iJ=BF(0,16);BA(a.iJ,(-2.0),0.0,(-2.0),4,b,4,c);BD(a.iJ,3.0,e,(-5.0));}
function AYF(a,b,c,d,e,f,g){AEJ(a,b,c,d,e,f,g);B2(a.gs,g);B2(a.gO,g);B2(a.iI,g);B2(a.iH,g);B2(a.iG,g);B2(a.iJ,g);}
function AEJ(a,b,c,d,e,f,g){var h;a.gs.bL=e/57.2957763671875;a.gO.bM=1.5707963705062866;h=a.iI;b=b*0.6661999821662903;h.bM=Bx(b)*1.399999976158142*c;h=a.iH;d=b+3.1415927410125732;h.bM=Bx(d)*1.399999976158142*c;a.iG.bM=Bx(d)*1.399999976158142*c;a.iJ.bM=Bx(b)*1.399999976158142*c;}
function Nb(){E_.call(this);}
function A10(){var a=new Nb();AQs(a);return a;}
function AQs(a){Jh(a,6,0.0);}
function Qg(){Dj.call(this);}
function AHA(a,b,c){var d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(572);$p=1;case 1:AFg(a,d);if(C()){break _;}return !c&&!b.vw?1:0;default:Eq();}}CL().s(a,b,c,d,$p);}
function ALF(a,b,c){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AHA(a,b,c);if(C()){break _;}c=$z;return c;default:Eq();}}CL().s(a,b,c,$p);}
function Yd(){E_.call(this);}
function A1F(){var a=new Yd();AYI(a);return a;}
function AYI(a){Jh(a,12,0.0);a.gs=BF(0,0);BA(a.gs,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BD(a.gs,0.0,6.0,(-8.0));a.gO=BF(28,8);BA(a.gO,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BD(a.gO,0.0,5.0,2.0);}
function ALu(){E_.call(this);}
function A1m(){var a=new ALu();AOs(a);return a;}
function AOs(a){Jh(a,12,0.0);a.gs=BF(0,0);BA(a.gs,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BD(a.gs,0.0,6.0,(-8.0));a.gO=BF(28,8);BA(a.gO,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BD(a.gO,0.0,5.0,2.0);a.iI=BF(0,16);BA(a.iI,(-2.0),0.0,(-2.0),4,6,4,0.5);BD(a.iI,(-3.0),12.0,7.0);a.iH=BF(0,16);BA(a.iH,(-2.0),0.0,(-2.0),4,6,4,0.5);BD(a.iH,3.0,12.0,7.0);a.iG=BF(0,16);BA(a.iG,(-2.0),0.0,(-2.0),4,6,4,0.5);BD(a.iG,(-3.0),12.0,(-5.0));a.iJ=BF(0,16);BA(a.iJ,(-2.0),0.0,(-2.0),4,6,4,0.5);BD(a.iJ,3.0,12.0,(-5.0));}
function XF(){Dj.call(this);}
function A1y(){var a=new XF();ARy(a);return a;}
function ARy(a){Fv(a,A0F(),0.5);}
function Y6(a,b,c){var d,e,f;d=NA(b,c);e=1.0+Bl(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;c=d*d;c=c*c;f=(1.0+c*0.4000000059604645)*e;Co(f,(1.0+c*0.10000000149011612)/e,f);}
function T3(a,b,c,d){var e,f;e=NA(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function AXm(a,b,c){Y6(a,b,c);}
function ARI(a,b,c,d){return T3(a,b,c,d);}
function GF(){KA.call(this);}
function A$F(){var a=new GF();AXy(a);return a;}
function AXy(a){I5(a);}
function ATN(a,b,c,d,e,f,g){var h,i,j;ADI(a,b,c,d,e,f,g);h=Bl(a.vn*3.1415927410125732);i=Bl((1.0-(1.0-a.vn)*(1.0-a.vn))*3.1415927410125732);a.dv.bJ=0.0;a.dh.bJ=0.0;j=a.dv;b=0.10000000149011612-h*0.6000000238418579;j.bL= -b;a.dh.bL=b;a.dv.bM=(-1.5707963705062866);a.dh.bM=(-1.5707963705062866);j=a.dv;b=j.bM;c=h*1.2000000476837158-i*0.4000000059604645;j.bM=b-c;j=a.dh;j.bM=j.bM-c;j=a.dv;b=j.bJ;c=d*0.09000000357627869;j.bJ=b+Bx(c)*0.05000000074505806+0.05000000074505806;j=a.dh;j.bJ=j.bJ-(Bx(c)*0.05000000074505806
+0.05000000074505806);j=a.dv;b=j.bM;c=d*0.06700000166893005;j.bM=b+Bl(c)*0.05000000074505806;j=a.dh;j.bM=j.bM-Bl(c)*0.05000000074505806;}
function ADj(){GF.call(this);}
function A1R(){var a=new ADj();APj(a);return a;}
function APj(a){I5(a);a.dv=BF(40,16);BA(a.dv,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BD(a.dv,(-5.0),2.0,0.0);a.dh=BF(40,16);a.dh.kp=1;BA(a.dh,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BD(a.dh,5.0,2.0,0.0);a.h8=BF(0,16);BA(a.h8,(-1.0),0.0,(-1.0),2,12,2,0.0);BD(a.h8,(-2.0),12.0,0.0);a.gt=BF(0,16);a.gt.kp=1;BA(a.gt,(-1.0),0.0,(-1.0),2,12,2,0.0);BD(a.gt,2.0,12.0,0.0);}
function Jr(){Dp.call(this);}
function AJz(a,b,c,d){var e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.k;$p=1;case 1:$z=AHP(e,b,c,d);if(C()){break _;}f=$z;return f-0.5;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function QA(){Dj.call(this);this.rH=0.0;}
function Vg(a,b,c){Co(a.rH,a.rH,a.rH);}
function AZm(a,b,c){Vg(a,b,c);}
function Qn(){C1.call(this);}
function A$G(){var a=new Qn();ARm(a);return a;}
function ARm(a){D7(a);}
function AEj(a,b,c,d,e,f,g){BU();AXH(b.G,c-b.b6,d-b.bP,e-b.b7);By();}
function Hh(){var a=this;CN.call(a);a.pL=0;a.dd=0;a.l3=0;a.AZ=0;a.l9=0;a.dl=null;}
function Id(a,b){var c,d,e,f,g,h,i,j,k,l;a.dd=b;c=b*90|0;a.q=c;a.K=c;c=a.dl.fz;d=a.dl.lK;e=a.dl.fz;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;d=d/32.0;f=e/32.0;g=a.l3+0.5;h=a.AZ+0.5;i=a.l9+0.5;if(!b)i=i-0.5625;j=S(b,1);if(!j)g=g-0.5625;k=S(b,2);if(!k)i=i+0.5625;l=S(b,3);if(!l)g=g+0.5625;if(!b)g=g-GC(a,a.dl.fz);if(!j)i=i+GC(a,a.dl.fz);if(!k)g=g+GC(a,a.dl.fz);if(!l)i=i-GC(a,a.dl.fz);e=h+GC(a,a.dl.lK);CC(a,g,e,i);KX(a.G,g-c+0.0062500000931322575,e-d+0.0062500000931322575,i-f+0.0062500000931322575,g+c+(-0.0062500000931322575),
e+d+(-0.0062500000931322575),i+f+(-0.0062500000931322575));}
function GC(a,b){return b==32?0.5:b!=64?0.0:0.5;}
function YO(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.pL;a.pL=b+1|0;if(b!=100)return;$p=1;case 1:$z=Vu(a);if(C()){break _;}c=$z;if(c)return;a.pL=0;$p=2;case 2:B4(a);if(C()){break _;}d=a.k;e=new Ep;f=a.k;g=a.c;h=a.i;i=a.d;j=new B6;Bw();Df(j,A7D);F9(e,f,g,h,i,j);$p=3;case 3:AIM(d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Vu(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k;c=a.G;$p=1;case 1:$z=TK(b,a,c);if(C()){break _;}b=$z;if(b.p>0)return 0;d=a.dl.fz/16|0;e=a.dl.lK/16|0;f=a.l3;g=a.l9;if(!a.dd)f=I(a.c-a.dl.fz/32.0);if(a.dd==1)g=I(a.d-a.dl.fz/32.0);if(a.dd==2)f=I(a.c-a.dl.fz/32.0);if(a.dd==3)g=I(a.d-a.dl.fz/32.0);h=I(a.i-a.dl.lK/32.0);i=0;while
(i<d){j=0;if(j<e){if(a.dd&&a.dd!=2){b=a.k;k=a.l3;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.k;k=f+i|0;l=h+j|0;m=a.l9;$p=3;continue _;}i=i+1|0;}b=a.k;c=a.G;$p=2;case 2:$z=Zc(b,a,c);if(C()){break _;}c=$z;k=0;while(k<c.p){if(Z(c,k) instanceof Hh)return 0;k=k+1|0;}return 1;case 3:$z=Xw(b,k,l,m);if(C()){break _;}b=$z;if(!b.c3())return 0;j=j+1|0;while(true){if(j<e){if(a.dd&&a.dd!=2){b=a.k;k=a.l3;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.k;k=f+i|0;l=h+j|0;m=a.l9;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.k;c=a.G;$p=2;continue _;case 4:$z
=Xw(b,k,l,m);if(C()){break _;}b=$z;if(!b.c3())return 0;j=j+1|0;while(true){if(j<e){if(a.dd&&a.dd!=2){b=a.k;k=a.l3;l=h+j|0;m=g+i|0;continue _;}b=a.k;k=f+i|0;l=h+j|0;m=a.l9;$p=3;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.k;c=a.G;$p=2;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AQe(a){return 1;}
function ZO(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:B4(a);if(C()){break _;}d=a.k;b=new Ep;e=a.k;f=a.c;g=a.i;h=a.d;i=new B6;Bw();Df(i,A7D);F9(b,e,f,g,h,i);$p=2;case 2:AIM(d,b);if(C()){break _;}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function V7(){C1.call(this);this.DZ=null;}
function A1k(){var a=new V7();ARs(a);return a;}
function ARs(a){D7(a);a.DZ=new De;}
function AKA(a,b,c,d,e,f,g){var h,i,j,k,l,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BU();Br(c,d,e);Bq(f,0.0,1.0,0.0);V(32826);h=B(573);$p=1;case 1:AFg(a,h);if(C()){break _;}h=b.dl;Co(0.0625,0.0625,0.0625);i=h.fz;j=h.lK;k=h.w1;l=h.w0;$p=2;case 2:Yo(a,b,i,j,k,l);if(C()){break _;}X(32826);By();return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Yo(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g= -c/2.0;h= -d/2.0;i
=0;j=c/16|0;k=d/16|0;l=e+c|0;m=f+d|0;while(i<j){if(0<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=0+1|0;f=q*16|0;r=h+f;s=0*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=I(b.c);x=I(b.i+v/16.0);y=I(b.d);if(!b.dd)w=I(b.c+u/16.0);if(b.dd==1)y=I(b.d-u/16.0);if(b.dd==2)w=I(b.c-u/16.0);if(b.dd==3)y=I(b.d+u/16.0);z=a.hC.mF;$p=1;continue _;}i=i+1|0;}return;case 1:$z=AHP(z,w,x,y);if(C()){break _;}ba=$z;Fd(ba,ba,ba);ba=(l-o|0)/256.0;u=(l-c|0)/256.0;v=(m-s|0)/256.0;bb=(m-f|0)/256.0;Bv();z=A3Q;Bu(z);B_(0.0,0.0,(-1.0));bc=n;bd=t;be=u;bf
=v;F(z,bc,bd,(-0.5),be,bf);bg=p;bh=ba;F(z,bg,bd,(-0.5),bh,bf);bf=r;bi=bb;F(z,bg,bf,(-0.5),bh,bi);F(z,bc,bf,(-0.5),be,bi);B_(0.0,0.0,1.0);F(z,bc,bf,0.5,0.75,0.0);F(z,bg,bf,0.5,0.8125,0.0);F(z,bg,bd,0.5,0.8125,0.0625);F(z,bc,bd,0.5,0.75,0.0625);B_(0.0,(-1.0),0.0);F(z,bc,bf,(-0.5),0.75,0.001953125);F(z,bg,bf,(-0.5),0.8125,0.001953125);F(z,bg,bf,0.5,0.8125,0.001953125);F(z,bc,bf,0.5,0.75,0.001953125);B_(0.0,1.0,0.0);F(z,bc,bd,0.5,0.75,0.001953125);F(z,bg,bd,0.5,0.8125,0.001953125);F(z,bg,bd,(-0.5),0.8125,0.001953125);F(z,
bc,bd,(-0.5),0.75,0.001953125);B_((-1.0),0.0,0.0);F(z,bc,bf,0.5,0.751953125,0.0);F(z,bc,bd,0.5,0.751953125,0.0625);F(z,bc,bd,(-0.5),0.751953125,0.0625);F(z,bc,bf,(-0.5),0.751953125,0.0);B_(1.0,0.0,0.0);F(z,bg,bf,(-0.5),0.751953125,0.0);F(z,bg,bd,(-0.5),0.751953125,0.0625);F(z,bg,bd,0.5,0.751953125,0.0625);F(z,bg,bf,0.5,0.751953125,0.0);Bm(z);s=q;while(true){if(s<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=s+1|0;f=q*16|0;r=h+f;s=s*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=I(b.c);x=I(b.i+v/16.0);y=I(b.d);if(!b.dd)w=I(b.c
+u/16.0);if(b.dd==1)y=I(b.d-u/16.0);if(b.dd==2)w=I(b.c-u/16.0);if(b.dd==3)y=I(b.d+u/16.0);z=a.hC.mF;continue _;}i=i+1|0;if(i>=j)break;s=0;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function AJi(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AKA(a,b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function HV(){var a=this;CN.call(a);a.qJ=0;a.rd=0;a.pW=0;a.tz=0;a.nL=0;a.kc=0;a.qy=null;a.ol=0;a.lN=0;}
function AM8(a,b){var c=new HV();ARb(c,a,b);return c;}
function ARb(a,b,c){EO(a,b);a.qJ=(-1);a.rd=(-1);a.pW=(-1);a.tz=0;a.nL=0;a.kc=0;a.lN=0;a.qy=c;Dx(a,0.5,0.5);IU(a,c.c,c.i,c.d,c.q,c.E);a.c=a.c-Bx(a.q/180.0*3.1415927410125732)*0.1599999964237213;a.i=a.i-0.10000000149011612;a.d=a.d-Bl(a.q/180.0*3.1415927410125732)*0.1599999964237213;CC(a,a.c,a.i,a.d);a.cF=0.0;a.f= -Bl(a.q/180.0*3.1415927410125732)*Bx(a.E/180.0*3.1415927410125732);a.g=Bx(a.q/180.0*3.1415927410125732)*Bx(a.E/180.0*3.1415927410125732);a.h= -Bl(a.E/180.0*3.1415927410125732);NP(a,a.f,a.h,a.g,1.5,1.0);}
function NP(a,b,c,d,e,f){var g,h,i;g=B7(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;g=CH(a.l)*0.007499999832361937;h=f;b=b+g*h;c=c+CH(a.l)*0.007499999832361937*h;d=d+CH(a.l)*0.007499999832361937*h;g=e;b=b*g;c=c*g;d=d*g;a.f=b;a.h=c;a.g=d;i=B7(b*b+d*d);e=CB(b,d)*180.0/3.1415927410125732;a.q=e;a.K=e;e=CB(c,i)*180.0/3.1415927410125732;a.E=e;a.P=e;a.ol=0;}
function AJX(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AD1(a);if(C()){break _;}if(a.kc>0)a.kc=a.kc-1|0;if(a.nL){b=a.k;c=a.qJ;d=a.rd;e=a.pW;$p=2;continue _;}a.lN=a.lN+1|0;b=BR(a.c,a.i,a.d);f=BR(a.c+a.f,a.i+a.h,a.d+a.g);g=a.k;$p=3;continue _;case 2:$z=X4(b,c,d,e);if(C()){break _;}c=$z;if
(c==a.tz){a.ol=a.ol+1|0;if(a.ol!=1200)return;$p=4;continue _;}a.nL=0;a.f=a.f*L(a.l)*0.20000000298023224;a.h=a.h*L(a.l)*0.20000000298023224;a.g=a.g*L(a.l)*0.20000000298023224;a.ol=0;a.lN=0;b=BR(a.c,a.i,a.d);f=BR(a.c+a.f,a.i+a.h,a.d+a.g);g=a.k;$p=3;case 3:$z=AEd(g,b,f);if(C()){break _;}g=$z;b=BR(a.c,a.i,a.d);f=BR(a.c+a.f,a.i+a.h,a.d+a.g);if(g!==null)f=BR(g.fO.t,g.fO.v,g.fO.s);h=null;i=a.k;j=Da(HK(a.G,a.f,a.h,a.g),1.0,1.0,1.0);$p=5;continue _;case 4:B4(a);if(C()){break _;}return;case 5:$z=Zc(i,a,j);if(C()){break _;}i
=$z;k=0.0;d=0;while(d<CZ(i)){j=Z(i,d);if(j.ki()&&!(j===a.qy&&a.lN<5)){l=NX(Da(j.G,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,f);if(l!==null){m=Dh(b,l.fO);if(!(m>=k&&k!==0.0)){h=j;k=m;}}}d=d+1|0;}if(h!==null)g=ASE(h);if(g!==null){if(g.mb!==null){b=g.mb;f=a.qy;c=4;$p=7;continue _;}a.qJ=g.hg;a.rd=g.hh;a.pW=g.hi;b=a.k;c=a.qJ;d=a.rd;e=a.pW;$p=6;continue _;}a.c=a.c+a.f;a.i=a.i+a.h;a.d=a.d+a.g;n=B7(a.f*a.f+a.g*a.g);a.q=CB(a.f,a.g)*180.0/3.1415927410125732;a.E=CB(a.h,n)*180.0/3.1415927410125732;while
(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while(a.q-a.K>=180.0){a.K=a.K+360.0;}a.E=a.P+(a.E-a.P)*0.20000000298023224;a.q=a.K+(a.q-a.K)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 6:$z=X4(b,c,d,e);if(C()){break _;}c=$z;a.tz=c;a.f=g.fO.t-a.c;a.h=g.fO.v-a.i;a.g=g.fO.s-a.d;n=B7(a.f*a.f+a.h*a.h+a.g*a.g);k=a.c;m=a.f;p=n;a.c=k-m/p*0.05000000074505806;a.i=a.i-a.h/p*0.05000000074505806;a.d=a.d-a.g/p*0.05000000074505806;C2(a.k,a,B(574),
1.0,1.2000000476837158/(L(a.l)*0.20000000298023224+0.8999999761581421));a.nL=1;a.kc=7;a.c=a.c+a.f;a.i=a.i+a.h;a.d=a.d+a.g;n=B7(a.f*a.f+a.g*a.g);a.q=CB(a.f,a.g)*180.0/3.1415927410125732;a.E=CB(a.h,n)*180.0/3.1415927410125732;while(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while(a.q-a.K>=180.0){a.K=a.K+360.0;}a.E=a.P+(a.E-a.P)*0.20000000298023224;a.q=a.K+(a.q-a.K)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 7:$z=b.eP(f,c);if(C())
{break _;}c=$z;if(c){C2(a.k,a,B(574),1.0,1.2000000476837158/(L(a.l)*0.20000000298023224+0.8999999761581421));$p=8;continue _;}a.f=a.f*(-0.10000000149011612);a.h=a.h*(-0.10000000149011612);a.g=a.g*(-0.10000000149011612);a.q=a.q+180.0;a.K=a.K+180.0;a.lN=0;a.c=a.c+a.f;a.i=a.i+a.h;a.d=a.d+a.g;n=B7(a.f*a.f+a.g*a.g);a.q=CB(a.f,a.g)*180.0/3.1415927410125732;a.E=CB(a.h,n)*180.0/3.1415927410125732;while(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while
(a.q-a.K>=180.0){a.K=a.K+360.0;}a.E=a.P+(a.E-a.P)*0.20000000298023224;a.q=a.K+(a.q-a.K)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 8:B4(a);if(C()){break _;}a.c=a.c+a.f;a.i=a.i+a.h;a.d=a.d+a.g;n=B7(a.f*a.f+a.g*a.g);a.q=CB(a.f,a.g)*180.0/3.1415927410125732;a.E=CB(a.h,n)*180.0/3.1415927410125732;while(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while(a.q-a.K>=180.0){a.K=a.K+360.0;}a.E=a.P+(a.E-a.P)*0.20000000298023224;a.q=a.K+(a.q
-a.K)*0.20000000298023224;o=0.9900000095367432;$p=9;case 9:$z=AAp(a);if(C()){break _;}c=$z;if(c){e=0;while(e<4){BP(a.k,B(205),a.c-a.f*0.25,a.i-a.h*0.25,a.d-a.g*0.25,a.f,a.h,a.g);e=e+1|0;}o=0.800000011920929;}k=a.f;m=o;a.f=k*m;a.h=a.h*m;a.g=a.g*m;a.h=a.h-0.029999999329447746;CC(a,a.c,a.i,a.d);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AW9(a,b){var c,d;if(a.nL&&a.qy===b&&a.kc<=0){c=b.F;d=new B6;Bw();KJ(d,A5f.cx,1);if(Rl(c,d)){C2(a.k,a,B(575),0.20000000298023224,((L(a.l)-L(a.l))*0.699999988079071+1.0)*2.0);O0(b,a);B4(a);}}}
function OC(){C1.call(this);}
function A$H(){var a=new OC();AMY(a);return a;}
function AMY(a){D7(a);}
function AEM(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=B(576);$p=1;case 1:AFg(a,h);if(C()){break _;}BU();Br(c,d,e);Bq(b.K+(b.q-b.K)*g-90.0,0.0,1.0,0.0);Bq(b.P+(b.E-b.P)*g,0.0,0.0,1.0);Bv();h=A3Q;V(32826);i=b.kc-g;if(i>0.0)Bq( -Bl(i*3.0)*i,0.0,0.0,1.0);Bq(45.0,1.0,0.0,0.0);Co(0.05624999850988388,0.05624999850988388,0.05624999850988388);Br((-4.0),0.0,0.0);B_(0.05624999850988388,
0.0,0.0);Bu(h);F(h,(-7.0),(-2.0),(-2.0),0.0,0.15625);F(h,(-7.0),(-2.0),2.0,0.15625,0.15625);F(h,(-7.0),2.0,2.0,0.15625,0.3125);F(h,(-7.0),2.0,(-2.0),0.0,0.3125);Bm(h);B_((-0.05624999850988388),0.0,0.0);Bu(h);F(h,(-7.0),2.0,(-2.0),0.0,0.15625);F(h,(-7.0),2.0,2.0,0.15625,0.15625);F(h,(-7.0),(-2.0),2.0,0.15625,0.3125);F(h,(-7.0),(-2.0),(-2.0),0.0,0.3125);Bm(h);j=0;while(j<4){Bq(90.0,1.0,0.0,0.0);B_(0.0,0.0,0.05624999850988388);Bu(h);F(h,(-8.0),(-2.0),0.0,0.0,0.0);F(h,8.0,(-2.0),0.0,0.5,0.0);F(h,8.0,2.0,0.0,0.5,
0.15625);F(h,(-8.0),2.0,0.0,0.0,0.15625);Bm(h);j=j+1|0;}X(32826);By();return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,$p);}
function YM(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AEM(a,b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Ep(){var a=this;CN.call(a);a.lV=null;a.wH=0;a.ln=0;a.go=0;a.ph=0;a.vT=0.0;}
function F$(a,b,c,d,e){var f=new Ep();F9(f,a,b,c,d,e);return f;}
function F9(a,b,c,d,e,f){EO(a,b);a.ln=0;a.ph=5;a.vT=BI()*3.141592653589793*2.0;Dx(a,0.25,0.25);a.cF=a.ef/2.0;CC(a,c,d,e);a.lV=f;a.q=BI()*360.0;a.f=BI()*0.20000000298023224-0.10000000149011612;a.h=0.20000000298023224;a.g=BI()*0.20000000298023224-0.10000000149011612;a.h7=0;}
function AEu(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.EU();if(C()){break _;}if(a.go>0)a.go=a.go-1|0;a.bH=a.c;a.ct=a.i;a.bG=a.d;a.h=a.h-0.03999999910593033;b=a.k;c=I(a.c);d=I(a.i);e=I(a.d);$p=2;case 2:$z=Xw(b,c,d,e);if(C()){break _;}b=$z;if(b===A4S){a.h=0.20000000298023224;a.f=(L(a.l)-L(a.l))*0.20000000298023224;a.g=(L(a.l)-L(a.l))*0.20000000298023224;C2(a.k,a,B(207),0.4000000059604645,
2.0+L(a.l)*0.4000000059604645);}f=a.c;g=a.i;h=a.d;$p=3;case 3:Yc(a,f,g,h);if(C()){break _;}$p=4;case 4:ZE(a);if(C()){break _;}f=a.f;g=a.h;h=a.g;$p=5;case 5:ALQ(a,f,g,h);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;a.h=a.h*(-0.5);}a.wH=a.wH+1|0;a.ln=a.ln+1|0;if(a.ln<6000)return;$p=6;case 6:B4(a);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function ZE(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k;c=a.G;d=A4R;$p=1;case 1:$z=V8(b,c,d,a);if(C()){break _;}e=$z;return e;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function Yc(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=I(b);f=I(c);g=I(d);h=b-e;i=c-f;j=d-g;J();k=A5C.data;l=a.k;$p=1;case 1:$z=X4(l,e,f,g);if(C()){break _;}m=$z;if(!k[m])return 0;k=A5C.data;l=a.k;m=e-1|0;$p=2;case 2:$z=X4(l,m,f,g);if(C()){break _;}m
=$z;n=k[m]?0:1;k=A5C.data;l=a.k;m=e+1|0;$p=3;case 3:$z=X4(l,m,f,g);if(C()){break _;}m=$z;o=k[m]?0:1;k=A5C.data;l=a.k;m=f-1|0;$p=4;case 4:$z=X4(l,e,m,g);if(C()){break _;}m=$z;p=k[m]?0:1;k=A5C.data;l=a.k;m=f+1|0;$p=5;case 5:$z=X4(l,e,m,g);if(C()){break _;}m=$z;q=k[m]?0:1;k=A5C.data;l=a.k;m=g-1|0;$p=6;case 6:$z=X4(l,e,f,m);if(C()){break _;}m=$z;m=k[m]?0:1;k=A5C.data;l=a.k;r=g+1|0;$p=7;case 7:$z=X4(l,e,f,r);if(C()){break _;}e=$z;r=k[e]?0:1;s=(-1);t=9999.0;if(n&&h<t){s=0;t=h;}if(!o)b=t;else{b=1.0-h;if(b<t)s=1;else b
=t;}if(p&&i<b){s=2;b=i;}if(!q)c=b;else{c=1.0-i;if(c<b)s=3;else c=b;}if(m&&j<c){s=4;c=j;}if(r&&1.0-j<c)s=5;u=L(a.l)*0.20000000298023224+0.10000000149011612;if(!s)a.f= -u;if(s==1)a.f=u;if(s==2)a.h= -u;if(s==3)a.h=u;if(s==4)a.g= -u;if(s==5)a.g=u;return 0;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AG9(a,b){Rs(a,null,b);}
function Rs(a,b,c){a.ph=a.ph-c|0;if(a.ph<=0)B4(a);return 0;}
function AZw(a,b){if(!a.go&&Rl(b.F,a.lV)){C2(a.k,a,B(575),0.20000000298023224,((L(a.l)-L(a.l))*0.699999988079071+1.0)*2.0);O0(b,a);B4(a);}}
function Kt(){CN.call(this);this.gD=0;}
function APz(a,b,c,d){var e=new Kt();AWl(e,a,b,c,d);return e;}
function AWl(a,b,c,d,e){var f,g,h;EO(a,b);a.gD=0;a.lg=1;Dx(a,0.9800000190734863,0.9800000190734863);a.cF=a.ef/2.0;f=c;g=d;h=e;CC(a,f,g,h);e=BI()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.f= -Bl(e)*0.019999999552965164;a.h=0.20000000298023224;a.g= -Bx(e)*0.019999999552965164;a.h7=0;a.gD=80;a.bH=f;a.ct=g;a.bG=h;}
function AYP(a){return a.cs?0:1;}
function TA(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.i;a.bG=a.d;a.h=a.h-0.03999999910593033;b=a.f;c=a.h;d=a.g;$p=1;case 1:ALQ(a,b,c,d);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;a.h=a.h*(-0.5);}e=a.gD;a.gD=e-1|0;if(e>0){BP(a.k,B(248),a.c,a.i+0.5,a.d,0.0,
0.0,0.0);return;}$p=2;case 2:B4(a);if(C()){break _;}f=4.0;g=a.k;h=null;b=a.c;c=a.i;d=a.d;$p=3;case 3:T1(g,h,b,c,d,f);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AJm(){C1.call(this);this.tY=null;}
function A0i(){var a=new AJm();AWT(a);return a;}
function AWT(a){D7(a);a.tY=IJ();a.kS=0.5;}
function AJ2(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BU();Br(c,d,e);if(b.gD-g+1.0<10.0){h=1.0-(b.gD-g+1.0)/10.0;if(h<0.0)h=0.0;if(h>1.0)h=1.0;f=h*h;i=1.0+f*f*0.30000001192092896;Co(i,i,i);}h=(1.0-(b.gD-g+1.0)/100.0)*0.800000011920929;j=B(171);$p=1;case 1:AFg(a,j);if(C()){break _;}j=a.tY;J();FX(j,A4p);if(!((b.gD/5|0)%2|0)){X(3553);X(2896);V(3042);C0(770,772);BN(1.0,
1.0,1.0,h);FX(a.tY,A4p);BN(1.0,1.0,1.0,1.0);X(3042);V(2896);V(3553);}By();return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AGO(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AJ2(a,b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Ia(){var a=this;CN.call(a);a.g3=0;a.nj=0;}
function AQy(a){return a.cs?0:1;}
function AHo(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.g3){$p=3;continue _;}a.bH=a.c;a.ct=a.i;a.bG=a.d;a.nj=a.nj+1|0;a.h=a.h-0.03999999910593033;b=a.f;c=a.h;d=a.g;$p=1;case 1:ALQ(a,b,c,d);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;e=I(a.c);f=I(a.i);g=I(a.d);h=a.k;$p=2;case 2:$z=X4(h,e,f,g);if(C()){break _;}i
=$z;if(i==a.g3){h=a.k;i=0;$p=4;continue _;}if(!a.ca){if(a.nj<=100)return;e=a.g3;f=1;$p=7;continue _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;a.h=a.h*(-0.5);$p=5;continue _;case 3:B4(a);if(C()){break _;}return;case 4:AJ0(h,e,f,g,i);if(C()){break _;}if(!a.ca){if(a.nj<=100)return;e=a.g3;f=1;$p=7;continue _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;a.h=a.h*(-0.5);$p=5;case 5:B4(a);if(C()){break _;}h=a.k;i=a.g3;j=1;$p=6;case 6:$z=AC$(h,i,e,f,g,j);if(C()){break _;}i=$z;if(!i){e=a.g3;f=1;$p=
9;continue _;}h=a.k;i=a.g3;$p=10;continue _;case 7:Xp(a,e,f);if(C()){break _;}$p=8;case 8:B4(a);if(C()){break _;}return;case 9:Xp(a,e,f);if(C()){break _;}return;case 10:$z=AJ0(h,e,f,g,i);if(C()){break _;}e=$z;if(e)return;e=a.g3;f=1;$p=9;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AQl(a){return a.k;}
function AK7(){C1.call(this);this.z_=null;}
function A0d(){var a=new AK7();APX(a);return a;}
function APX(a){D7(a);a.z_=IJ();a.kS=0.5;}
function AKG(a,b,c,d,e,f,g){var h,i,j,k,l,m,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BU();Br(c,d,e);h=B(171);$p=1;case 1:AFg(a,h);if(C()){break _;}J();h=A3U.data[b.g3];i=b.k;X(2896);j=a.z_;k=I(b.c);l=I(b.i);m=I(b.d);$p=2;case 2:ADS(j,h,i,k,l,m);if(C()){break _;}V(2896);By();return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ALy(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AKG(a,b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Fn(){var a=this;CN.call(a);a.yk=null;a.hR=0;a.jw=0;a.ni=0;a.jH=0;}
var A$I=null;function AMV(a,b){return b.G;}
function ARO(a){return a.G;}
function AW_(a){return 1;}
function AOT(a){return a.ef*0.2;}
function AF1(a,b,c){var d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.ni= -a.ni;a.jw=10;a.hR=a.hR+(c*10|0)|0;if(a.hR<=40)return 1;Bw();c=A7J.cx;d=1;e=0.0;$p=1;case 1:ABR(a,c,d,e);if(C()){break _;}$p=2;case 2:AJK(a);if(C()){break _;}return 1;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AYw(a){return a.cs?0:1;}
function AJK(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;c=27;while(b<c){d=Qu(a,b);if(d!==null){e=L(a.l)*0.800000011920929+0.10000000149011612;f=L(a.l)*0.800000011920929+0.10000000149011612;g=L(a.l)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;if(d.m>0){k=D(a.l,21)+10|0;if(k>d.m)k=d.m;d.m=d.m-k|0;l=F$(a.k,a.c+h,a.i+i,a.d+j,
L7(d.bs,k,d.dP));l.f=CH(a.l)*0.05000000074505806;l.h=CH(a.l)*0.05000000074505806+0.20000000298023224;l.g=CH(a.l)*0.05000000074505806;m=a.k;$p=2;continue _;}}b=b+1|0;}$p=1;case 1:B4(a);if(C()){break _;}return;case 2:AIM(m,l);if(C()){break _;}a:while(true){if(d.m>0){k=D(a.l,21)+10|0;if(k>d.m)k=d.m;d.m=d.m-k|0;l=F$(a.k,a.c+h,a.i+i,a.d+j,L7(d.bs,k,d.dP));l.f=CH(a.l)*0.05000000074505806;l.h=CH(a.l)*0.05000000074505806+0.20000000298023224;l.g=CH(a.l)*0.05000000074505806;m=a.k;continue _;}while(true){b=b+1|0;if(b>=
c)break a;d=Qu(a,b);if(d===null)continue;else break;}e=L(a.l)*0.800000011920929+0.10000000149011612;f=L(a.l)*0.800000011920929+0.10000000149011612;g=L(a.l)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;}$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AMN(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jw>0)a.jw=a.jw-1|0;if(a.hR>0)a.hR=a.hR-1|0;a.bH=a.c;a.ct=a.i;a.bG=a.d;a.h=a.h
-0.03999999910593033;b=I(a.c);c=I(a.i);d=I(a.d);e=a.k;f=c-1|0;$p=1;case 1:$z=X4(e,b,f,d);if(C()){break _;}f=$z;J();if(f==A5$.b)c=c+(-1)|0;g=0.4;h=0.0078125;e=a.k;$p=2;case 2:$z=X4(e,b,c,d);if(C()){break _;}f=$z;if(f==A5$.b){i=a.c;j=a.i;k=a.d;$p=3;continue _;}if(a.f<(-0.4))a.f=(-0.4);if(a.f>g)a.f=g;if(a.g<(-0.4))a.g=(-0.4);if(a.g>g)a.g=g;if(a.ca){a.f=a.f*0.5;a.h=a.h*0.5;a.g=a.g*0.5;}i=a.f;j=a.h;k=a.g;$p=5;continue _;case 3:$z=AMs(a,i,j,k);if(C()){break _;}l=$z;e=a.k;$p=4;case 4:$z=Z5(e,b,c,d);if(C()){break _;}m
=$z;a.i=c;n=S(m,2);if(n>=0&&m<=5)a.i=c+1|0;if(!n)a.f=a.f-h;if(m==3)a.f=a.f+h;if(m==4)a.g=a.g+h;if(m==5)a.g=a.g-h;o=A$I.data[m].data;p=o[1].data[0]-o[0].data[0]|0;q=o[1].data[2]-o[0].data[2]|0;r=DK(p*p+q*q);if(a.f*p+a.g*q<0.0){p= -p;q= -q;}s=DK(a.f*a.f+a.g*a.g);a.f=s*p/r;a.g=s*q/r;t=b;u=t+0.5;v=u+o[0].data[0]*0.5;w=d;p=w+0.5;i=p+o[0].data[2]*0.5;j=u+o[1].data[0]*0.5;k=p+o[1].data[2]*0.5;j=j-v;k=k-i;if(j===0.0){a.c=u;u=a.d-w;}else if(k===0.0){a.d=p;u=a.c-t;}else u=((a.c-v)*j+(a.d-i)*k)*2.0;a.c=v+j*u;a.d=i+k*u;CC(a,
a.c,a.i+a.cF,a.d);x=a.f;t=a.g;if(a.bx!==null){x=x*0.75;t=t*0.75;}i=(-0.4);if(x<i)x=i;if(x>g)x=g;if(t>=i)i=t;if(i<=g)g=i;i=0.0;$p=7;continue _;case 5:ALQ(a,i,j,k);if(C()){break _;}if(!a.ca){a.f=a.f*0.949999988079071;a.h=a.h*0.949999988079071;a.g=a.g*0.949999988079071;}a.E=0.0;y=a.bH-a.c;z=a.bG-a.d;if(y*y+z*z>0.001){a.q=CB(z,y)*180.0/3.141592653589793;if(a.jH)a.q=a.q+180.0;}ba=a.q-a.K;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.q=a.q+180.0;a.jH=a.jH?0:1;}SN(a,
a.q,a.E);e=a.k;l=Da(a.G,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=Zc(e,a,l);if(C()){break _;}bb=$z;if(bb!==null&&CZ(bb)>0){bc=0;while(true){if(bc>=CZ(bb))break a;bd=Z(bb,bc);if(bd!==a.bx&&bd.p6()&&bd instanceof Fn)bd.sO(a);bc=bc+1|0;}}}if(a.bx!==null&&a.bx.cs)a.bx=null;return;case 7:ALQ(a,x,i,g);if(C()){break _;}if(o[0].data[1]&&(I(a.c)-b|0)==o[0].data[0]&&(I(a.d)-d|0)==o[0].data[2])CC(a,a.c,a.i+o[0].data[1],a.d);else if(o[1].data[1]&&(I(a.c)-b|0)==o[1].data[0]&&(I(a.d)-d|0)==o[1].data[2])CC(a,
a.c,a.i+o[1].data[1],a.d);if(a.bx===null){a.f=a.f*0.9599999785423279;a.h=a.h*0.0;a.g=a.g*0.9599999785423279;}else{a.f=a.f*0.996999979019165;a.h=a.h*0.0;a.g=a.g*0.996999979019165;}i=a.c;j=a.i;k=a.d;$p=8;case 8:$z=AMs(a,i,j,k);if(C()){break _;}e=$z;if(e!==null&&l!==null){w=(l.v-e.v)*0.05;i=DK(a.f*a.f+a.g*a.g);if(i>0.0){j=a.f/i;k=i+w;a.f=j*k;a.g=a.g/i*k;}CC(a,a.c,e.v,a.d);}f=I(a.c);n=I(a.d);if(!(f==b&&n==d)){i=DK(a.f*a.f+a.g*a.g);a.f=i*(f-b|0);a.g=i*(n-d|0);}a.E=0.0;y=a.bH-a.c;z=a.bG-a.d;if(y*y+z*z>0.001){a.q=
CB(z,y)*180.0/3.141592653589793;if(a.jH)a.q=a.q+180.0;}ba=a.q-a.K;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.q=a.q+180.0;a.jH=a.jH?0:1;}SN(a,a.q,a.E);e=a.k;l=Da(a.G,0.20000000298023224,0.0,0.20000000298023224);$p=6;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AEO(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=I(b);g=I(c);h=I(d);i=a.k;j=g-1|0;$p=1;case 1:$z=X4(i,f,j,h);if(C()){break _;}j=$z;J();if(j==A5$.b)g=g+(-1)|0;i=a.k;$p=2;case 2:$z=X4(i,f,g,h);if(C()){break _;}j=$z;if(j!=A5$.b)return null;i=a.k;$p=3;case 3:$z=Z5(i,f,g,h);if(C()){break _;}j=$z;c=g;if(j>=2&&j<=5)c=
g+1|0;k=A$I.data[j].data;l=k[1].data[0]-k[0].data[0]|0;m=k[1].data[2]-k[0].data[2]|0;n=DK(l*l+m*m);l=l/n;m=m/n;l=b+l*e;d=d+m*e;if(k[0].data[1]&&(I(l)-f|0)==k[0].data[0]&&(I(d)-h|0)==k[0].data[2])c=c+k[0].data[1];else if(k[1].data[1]&&(I(l)-f|0)==k[1].data[0]&&(I(d)-h|0)==k[1].data[2])c=c+k[1].data[1];$p=4;case 4:$z=AMs(a,l,c,d);if(C()){break _;}i=$z;return i;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AMs(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=I(b);f=I(c);g=I(d);h=a.k;i=f-1|0;$p=1;case 1:$z=X4(h,e,i,g);if(C()){break _;}i=$z;J();if(i==A5$.b)f=f+(-1)|0;h=a.k;$p=2;case 2:$z=X4(h,e,f,g);if(C()){break _;}i=$z;if(i!=A5$.b)return null;h
=a.k;$p=3;case 3:$z=Z5(h,e,f,g);if(C()){break _;}j=$z;c=f;k=A$I.data[j].data;l=e;m=l+0.5;n=m+k[0].data[0]*0.5;o=c+0.5;p=o+k[0].data[1]*0.5;q=g;r=q+0.5;s=r+k[0].data[2]*0.5;m=m+k[1].data[0]*0.5;t=o+k[1].data[1]*0.5;o=r+k[1].data[2]*0.5;r=m-n;u=(t-p)*2.0;v=o-s;l=r===0.0?d-q:v===0.0?b-l:((b-n)*r+(d-s)*v)*2.0;b=n+r*l;c=p+u*l;d=s+v*l;i=S(u,0.0);if(i<0)c=c+1.0;if(i>0)c=c+0.5;return BR(b,c,d);default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AUx(a,b){var c,d,e,f,g,h;if(b!==a.bx){c=b.c-a.c;d=b.d-a.d;e=c*c+d*d;if(e>=9.999999747378752E-5){e=B7(e);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;d=f*g;c=c*0.10000000149011612;d=d*0.10000000149011612;c=c*(1.0-a.mI);d=d*(1.0-a.mI);c=c*0.5;d=d*0.5;if(!(b instanceof Fn)){Gh(a, -c,0.0, -d);Gh(b,c/4.0,0.0,d/4.0);}else{f=(b.f+a.f)/2.0;h=(b.g+a.g)/2.0;a.g=0.0;a.f=0.0;Gh(a,f-c,0.0,h-d);b.g=0.0;b.f=0.0;Gh(b,f+c,0.0,h+d);}}}}
function ASB(a){return 27;}
function Qu(a,b){return a.yk.data[b];}
function AXZ(a,b){MP(b,a);return 1;}
function AHk(){var b,c,d,e,f,g;b=N($rt_arraycls($rt_arraycls($rt_intcls())),10);c=b.data;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[0]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[1]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]
=(-1);g[1]=(-1);g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[2]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=(-1);g[2]=0;e[1]=f;c[3]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=(-1);g[2]=1;e[1]=f;c[4]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=(-1);g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[5]=d;g=N($rt_arraycls($rt_intcls()),2);e=g.data;d=$rt_createIntArray(3);f=d.data;f[0]=0;f[1]=0;f[2]=1;e[0]=d;d=$rt_createIntArray(3);f=d.data;f[0]=1;f[1]=0;f[2]=0;e[1]=d;c[6]=g;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[7]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[8]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[9]=d;A$I=b;}
function ALL(){C1.call(this);this.zI=null;}
function A1v(){var a=new ALL();AYT(a);return a;}
function AYT(a){D7(a);a.kS=0.5;a.zI=A18();}
function AKF(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BU();h=b.b6;i=b.c-b.b6;j=g;k=h+i*j;l=b.bP+(b.i-b.bP)*j;i=b.b7+(b.d-b.b7)*j;h=0.30000001192092896;$p=1;case 1:$z=AMs(b,k,l,i);if(C()){break _;}m=$z;n=b.P+(b.E-b.P)*g;if(m!==null){$p=2;continue _;}Br(c,d,e);Bq(180.0
-f,0.0,1.0,0.0);Bq( -n,0.0,0.0,1.0);o=b.jw-g;p=b.hR-g;if(p<0.0)p=0.0;if(o>0.0)Bq(Bl(o)*o*p/10.0*b.ni,1.0,0.0,0.0);b=B(171);$p=4;continue _;case 2:$z=AEO(b,k,l,i,h);if(C()){break _;}q=$z;h=(-0.30000001192092896);$p=3;case 3:$z=AEO(b,k,l,i,h);if(C()){break _;}r=$z;if(q===null)q=m;if(r===null)r=m;c=c+m.t-k;d=d+(q.v+r.v)/2.0-l;e=e+m.s-i;s=C3(r, -q.t, -q.v, -q.s);if(GE(s)!==0.0){s=Cs(s);f=CB(s.s,s.t)*180.0/3.141592653589793;n=G$(s.v)*73.0;}Br(c,d,e);Bq(180.0-f,0.0,1.0,0.0);Bq( -n,0.0,0.0,1.0);o=b.jw-g;p=b.hR-g;if
(p<0.0)p=0.0;if(o>0.0)Bq(Bl(o)*o*p/10.0*b.ni,1.0,0.0,0.0);b=B(171);$p=4;case 4:AFg(a,b);if(C()){break _;}Co(0.75,0.75,0.75);b=IJ();J();FX(b,A5Z);Co(1.3333333730697632,1.3333333730697632,1.3333333730697632);b=B(577);$p=5;case 5:AFg(a,b);if(C()){break _;}Co((-1.0),(-1.0),1.0);AFh(a.zI,0.0,0.0,(-0.10000000149011612),0.0,0.0,0.0625);By();return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AKE(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AKF(a,b,c,d,e,f,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Sb(){var a=this;E.call(a);a.sR=Long_ZERO;a.r7=0;a.wt=0;}
function A$J(){var a=new Sb();ANQ(a);return a;}
function ANQ(a){return;}
function Xa(){var a=this;E.call(a);a.t5=null;a.uj=null;}
function A1j(){var a=new Xa();ANY(a);return a;}
function ANY(a){a.t5=BF(0,0);BA(a.t5,(-12.0),(-14.0),(-1.0),24,12,2,0.0);a.uj=BF(0,14);BA(a.uj,(-1.0),(-2.0),(-1.0),2,14,2,0.0);}
function AHH(a){B2(a.t5,0.0625);B2(a.uj,0.0625);}
function AC7(){var a=this;DN.call(a);a.kH=null;a.o_=null;a.pS=null;a.i9=null;a.i8=null;a.i_=null;a.i$=null;a.jb=null;a.ja=null;a.jd=null;a.jc=null;}
function AVv(){var a=new AC7();AOf(a);return a;}
function AOf(a){a.kH=BF(32,4);BA(a.kH,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BD(a.kH,0.0,15.0,(-3.0));a.o_=BF(0,0);BA(a.o_,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BD(a.o_,0.0,15.0,0.0);a.pS=BF(0,12);BA(a.pS,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BD(a.pS,0.0,15.0,9.0);a.i9=BF(18,0);BA(a.i9,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.i9,(-4.0),15.0,2.0);a.i8=BF(18,0);BA(a.i8,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.i8,4.0,15.0,2.0);a.i_=BF(18,0);BA(a.i_,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.i_,(-4.0),15.0,1.0);a.i$=BF(18,0);BA(a.i$,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BD(a.i$,4.0,15.0,1.0);a.jb=BF(18,0);BA(a.jb,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.jb,(-4.0),15.0,0.0);a.ja=BF(18,0);BA(a.ja,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.ja,4.0,15.0,0.0);a.jd=BF(18,0);BA(a.jd,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.jd,(-4.0),15.0,(-1.0));a.jc=BF(18,0);BA(a.jc,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.jc,4.0,15.0,(-1.0));}
function AQr(a,b,c,d,e,f,g){Uj(a,b,c,d,e,f,g);B2(a.kH,g);B2(a.o_,g);B2(a.pS,g);B2(a.i9,g);B2(a.i8,g);B2(a.i_,g);B2(a.i$,g);B2(a.jb,g);B2(a.ja,g);B2(a.jd,g);B2(a.jc,g);}
function Uj(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.kH.bL=e/57.2957763671875;a.kH.bM=f/57.2957763671875;a.i9.bJ=(-0.7853981852531433);a.i8.bJ=0.7853981852531433;a.i_.bJ=(-0.5811946392059326);a.i$.bJ=0.5811946392059326;a.jb.bJ=(-0.5811946392059326);a.ja.bJ=0.5811946392059326;a.jd.bJ=(-0.7853981852531433);a.jc.bJ=0.7853981852531433;a.i9.bL=0.7853981852531433;a.i8.bL=(-0.7853981852531433);a.i_.bL=0.39269909262657166;a.i$.bL=(-0.39269909262657166);a.jb.bL=(-0.39269909262657166);a.ja.bL=0.39269909262657166;a.jd.bL
=(-0.7853981852531433);a.jc.bL=0.7853981852531433;b=b*0.6661999821662903;f=b*2.0;h= -(Bx(f+0.0)*0.4000000059604645)*c;i= -(Bx(f+3.1415927410125732)*0.4000000059604645)*c;j= -(Bx(f+1.5707963705062866)*0.4000000059604645)*c;k= -(Bx(f+4.71238899230957)*0.4000000059604645)*c;l=GK(Bl(b+0.0)*0.4000000059604645)*c;m=GK(Bl(b+3.1415927410125732)*0.4000000059604645)*c;n=GK(Bl(b+1.5707963705062866)*0.4000000059604645)*c;o=GK(Bl(b+4.71238899230957)*0.4000000059604645)*c;p=a.i9;p.bL=p.bL+h;p=a.i8;p.bL=p.bL+ -h;p=a.i_;p.bL
=p.bL+i;p=a.i$;p.bL=p.bL+ -i;p=a.jb;p.bL=p.bL+j;p=a.ja;p.bL=p.bL+ -j;p=a.jd;p.bL=p.bL+k;p=a.jc;p.bL=p.bL+ -k;p=a.i9;p.bJ=p.bJ+l;p=a.i8;p.bJ=p.bJ+ -l;p=a.i_;p.bJ=p.bJ+m;p=a.i$;p.bJ=p.bJ+ -m;p=a.jb;p.bJ=p.bJ+n;p=a.ja;p.bJ=p.bJ+ -n;p=a.jd;p.bJ=p.bJ+o;p=a.jc;p.bJ=p.bJ+ -o;}
function ADv(){var a=this;DN.call(a);a.kM=null;a.te=null;a.q5=null;a.nR=null;a.nQ=null;a.nP=null;a.nO=null;}
function A0F(){var a=new ADv();AVi(a);return a;}
function AVi(a){a.kM=BF(0,0);BA(a.kM,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BD(a.kM,0.0,4.0,0.0);a.te=BF(32,0);BA(a.te,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BD(a.te,0.0,4.0,0.0);a.q5=BF(16,16);BA(a.q5,(-4.0),0.0,(-2.0),8,12,4,0.0);BD(a.q5,0.0,4.0,0.0);a.nR=BF(0,16);BA(a.nR,(-2.0),0.0,(-2.0),4,6,4,0.0);BD(a.nR,(-2.0),16.0,4.0);a.nQ=BF(0,16);BA(a.nQ,(-2.0),0.0,(-2.0),4,6,4,0.0);BD(a.nQ,2.0,16.0,4.0);a.nP=BF(0,16);BA(a.nP,(-2.0),0.0,(-2.0),4,6,4,0.0);BD(a.nP,(-2.0),16.0,(-4.0));a.nO=BF(0,16);BA(a.nO,(-2.0),0.0,(-2.0),4,6,4,
0.0);BD(a.nO,2.0,16.0,(-4.0));}
function AT0(a,b,c,d,e,f,g){Ve(a,b,c,d,e,f,g);B2(a.kM,g);B2(a.q5,g);B2(a.nR,g);B2(a.nQ,g);B2(a.nP,g);B2(a.nO,g);}
function Ve(a,b,c,d,e,f,g){var h;a.kM.bL=e/57.2957763671875;a.kM.bM=f/57.2957763671875;h=a.nR;b=b*0.6661999821662903;h.bM=Bx(b)*1.399999976158142*c;h=a.nQ;d=b+3.1415927410125732;h.bM=Bx(d)*1.399999976158142*c;a.nP.bM=Bx(d)*1.399999976158142*c;a.nO.bM=Bx(b)*1.399999976158142*c;}
function AAe(){DN.call(this);this.cA=null;}
function A18(){var a=new AAe();AUG(a);return a;}
function AUG(a){a.cA=N(NS,7);a.cA.data[0]=BF(0,10);a.cA.data[1]=BF(0,0);a.cA.data[2]=BF(0,0);a.cA.data[3]=BF(0,0);a.cA.data[4]=BF(0,0);a.cA.data[5]=BF(44,10);BA(a.cA.data[0],(-10.0),(-8.0),(-1.0),20,16,2,0.0);BD(a.cA.data[0],0.0,4.0,0.0);BA(a.cA.data[5],(-9.0),(-7.0),(-1.0),18,14,1,0.0);BD(a.cA.data[5],0.0,4.0,0.0);BA(a.cA.data[1],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BD(a.cA.data[1],(-9.0),4.0,0.0);BA(a.cA.data[2],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BD(a.cA.data[2],9.0,4.0,0.0);BA(a.cA.data[3],(-8.0),(-9.0),(-1.0),
16,8,2,0.0);BD(a.cA.data[3],0.0,4.0,(-7.0));BA(a.cA.data[4],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BD(a.cA.data[4],0.0,4.0,7.0);a.cA.data[0].bM=1.5707963705062866;a.cA.data[1].bL=4.71238899230957;a.cA.data[2].bL=1.5707963705062866;a.cA.data[3].bL=3.1415927410125732;a.cA.data[5].bM=(-1.5707963705062866);}
function AFh(a,b,c,d,e,f,g){var h;a.cA.data[5].lH=4.0-d;h=0;while(h<6){B2(a.cA.data[h],g);h=h+1|0;}}
function HB(){var a=this;E.call(a);a.gf=null;a.rG=0;a.b1=null;a.gX=null;a.gb=null;a.g$=null;a.dK=null;a.mE=0;a.fR=0;a.fL=0;a.hV=null;a.dg=null;a.fP=0;a.dr=0;a.ov=0;a.AM=0;a.qo=0;a.rf=Long_ZERO;}
var A9s=0;function A0y(a,b,c){var d=new HB();ALo(d,a,b,c);return d;}
function AYl(a,b,c,d){var e=new HB();ASQ(e,a,b,c,d);return e;}
function ALo(a,b,c,d){var e;a.hV=CY();a.dg=N(Iu,8);a.fP=0;a.dr=0;a.AM=0;a.qo=0;a.rf=Long_ZERO;a.b1=b;a.fR=c;a.fL=d;a.dK=$rt_createByteArray(256);e=0;while(e<a.dg.data.length){a.dg.data[e]=Ck();e=e+1|0;}}
function ASQ(a,b,c,d,e){var f;f=c.data;ALo(a,b,d,e);a.gf=c;b=new Qy;d=f.length;AEr(b,d);a.gX=b;a.gb=HO(d);a.g$=HO(d);}
function ALS(a,b,c){return b==a.fR&&c==a.fL?1:0;}
function Q0(a,b,c){return a.dK.data[c<<4|b]&255;}
function AVM(a){return;}
function AA3(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=127;c=0;while(true){if(c>=16){a.mE=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b=b+1|0;}a.dr=1;return;}e=0;if(e<16)break;c=c+1|0;}f=a.dK.data;d=e<<4|c;f[d]=(-128);g=127;$p=1;case 1:Yt(a,c,g,e);if(C()){break _;}if((a.dK.data[d]&255)<b)b=a.dK.data[d]&255;e=e+1|0;while(e>=16){c=c+1|0;if(c>=16){a.mE=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b
=b+1|0;}a.dr=1;return;}e=0;}f=a.dK.data;d=e<<4|c;f[d]=(-128);g=127;continue _;case 2:AAg(a,b,d);if(C()){break _;}d=d+1|0;while(true){if(d<16){continue _;}b=b+1|0;if(b>=16)break;d=0;}a.dr=1;return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AAg(a,b,c){var d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Q0(a,b,c);e=(a.fR*16|0)+b|0;f=(a.fL*16|0)+c|0;b=e-1|0;$p=1;case 1:AEy(a,b,f,d);if(C()){break _;}b=e+1|0;$p=2;case 2:AEy(a,b,f,d);if(C()){break _;}b=f-1|0;$p=3;case 3:AEy(a,e,b,d);if(C()){break _;}b=f+1|0;$p=4;case 4:AEy(a,e,b,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AEy(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.b1;$p=1;case 1:$z=AGp(e,b,c);if(C()){break _;}f=$z;g=S(f,d);if(g>0){e=a.b1;h=A9y;$p=2;continue _;}if(g>=0){a.dr=1;return;}e=a.b1;h=A9y;$p=3;continue _;case 2:UV(e,h,b,d,c,b,f,c);if(C()){break _;}a.dr=1;return;case 3:UV(e,h,b,f,c,b,d,c);if(C()){break _;}a.dr=1;return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function Yt(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.dK.data;f=d<<4|b;g=e[f]&255;if(c<=g)c=g;while(c>0){J();if(A5D.data[Ec(a,b,c-1|0,d)])break;c=c+(-1)|0;}h=S(c,g);if(h){AKa(a.b1,b,d,c,g);a.dK.data[f]=c<<24>>24;if(c<a.mE)a.mE=c;else{f=127;i=0;while(i<16){j=0;while(j<16){e=a.dK.data;k=j<<4|i;if((e[k]&255)<f)f=a.dK.data[k]
&255;j=j+1|0;}i=i+1|0;}a.mE=f;}f=(a.fR*16|0)+b|0;i=(a.fL*16|0)+d|0;if(h>=0){l=a.b1;m=A9y;$p=1;continue _;}j=c;while(j<g){DQ(a.gb,b,j,d,15);j=j+1|0;}j=15;k=c;a:{while(k>0){if(j<=0)break a;k=k+(-1)|0;J();n=A5D.data[Ec(a,b,k,d)];if(!n)n=1;j=j-n|0;if(j<0)j=0;DQ(a.gb,b,k,d,j);}}while(k>0){J();if(A5D.data[Ec(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k!=c){l=a.b1;m=A9y;d=f-1|0;j=i-1|0;f=f+1|0;b=i+1|0;$p=2;continue _;}a.dr=1;}return;case 1:UV(l,m,f,g,i,f,c,i);if(C()){break _;}while(g<c){DQ(a.gb,b,g,d,0);g=g+1|0;}j=15;k=c;b:
{while(k>0){if(j<=0)break b;k=k+(-1)|0;J();n=A5D.data[Ec(a,b,k,d)];if(!n)n=1;j=j-n|0;if(j<0)j=0;DQ(a.gb,b,k,d,j);}}while(k>0){J();if(A5D.data[Ec(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k==c){a.dr=1;return;}l=a.b1;m=A9y;d=f-1|0;j=i-1|0;f=f+1|0;b=i+1|0;$p=2;case 2:UV(l,m,d,k,j,f,c,b);if(C()){break _;}a.dr=1;return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Ec(a,b,c,d){return a.gf.data[b<<11|d<<7|c];}
function Y8(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e<<24>>24;h=a.dK.data[d<<4|b]&255;i=a.gf.data;j=b<<11|d<<7|c;k=i[j]&255;if(k==e)return 0;l=(a.fR*16|0)+b|0;m=(a.fL*16|0)+d|0;a.gf.data[j]=g;if(k){J();n=A3U.data[k];o=a.b1;$p=1;continue _;}a:{DQ(a.gX,b,c,d,f);J();if(!A5D.data[g]){if(c!=(h-1|0))break a;$p
=5;continue _;}if(c>=h){f=c+1|0;$p=6;continue _;}}n=a.b1;o=A9y;$p=2;continue _;case 1:n.kl(o,l,c,m);if(C()){break _;}b:{DQ(a.gX,b,c,d,f);J();if(!A5D.data[g]){if(c!=(h-1|0))break b;$p=5;continue _;}if(c>=h){f=c+1|0;$p=6;continue _;}}n=a.b1;o=A9y;$p=2;case 2:UV(n,o,l,c,m,l,c,m);if(C()){break _;}n=a.b1;o=A9z;$p=3;case 3:UV(n,o,l,c,m,l,c,m);if(C()){break _;}$p=4;case 4:AAg(a,b,d);if(C()){break _;}if(!e){a.dr=1;return 1;}n=A3U.data[e];o=a.b1;$p=7;continue _;case 5:Yt(a,b,c,d);if(C()){break _;}n=a.b1;o=A9y;$p=2;continue _;case 6:Yt(a,
b,f,d);if(C()){break _;}n=a.b1;o=A9y;$p=2;continue _;case 7:n.e1(o,l,c,m);if(C()){break _;}a.dr=1;return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function Y5(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=e<<24>>24;g=a.dK.data[d<<4|b]&255;h=a.gf.data;i=b<<11|d<<7|c;j=h[i]&255;if(j==e)return 0;k=(a.fR*16|0)+b|0;l=(a.fL*16|0)+d|0;a.gf.data[i]=f;if(j){J();m=A3U.data[j];n=a.b1;$p=1;continue _;}a:{DQ(a.gX,b,c,d,0);J();if(!A5D.data[f]){if(c!=(g-1|0))break a;$p=5;continue _;}if
(c>=g){i=c+1|0;$p=6;continue _;}}m=a.b1;n=A9y;$p=2;continue _;case 1:m.kl(n,k,c,l);if(C()){break _;}b:{DQ(a.gX,b,c,d,0);J();if(!A5D.data[f]){if(c!=(g-1|0))break b;$p=5;continue _;}if(c>=g){i=c+1|0;$p=6;continue _;}}m=a.b1;n=A9y;$p=2;case 2:UV(m,n,k,c,l,k,c,l);if(C()){break _;}m=a.b1;n=A9z;$p=3;case 3:UV(m,n,k,c,l,k,c,l);if(C()){break _;}$p=4;case 4:AAg(a,b,d);if(C()){break _;}if(!e){a.dr=1;return 1;}m=A3U.data[e];n=a.b1;$p=7;continue _;case 5:Yt(a,b,c,d);if(C()){break _;}m=a.b1;n=A9y;$p=2;continue _;case 6:Yt(a,
b,i,d);if(C()){break _;}m=a.b1;n=A9y;$p=2;continue _;case 7:m.e1(n,k,c,l);if(C()){break _;}a.dr=1;return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function OX(a,b,c,d){return G5(a.gX,b,c,d);}
function V$(a,b,c,d,e){a.dr=1;DQ(a.gX,b,c,d,e);}
function XT(a,b,c,d,e){return b===A9y?G5(a.gb,c,d,e):b!==A9z?0:G5(a.g$,c,d,e);}
function AK6(a,b,c,d,e,f){a.dr=1;if(b===A9y)DQ(a.gb,c,d,e,f);else{if(b!==A9z)return;DQ(a.g$,c,d,e,f);}}
function RX(a,b,c,d,e){var f,g;f=G5(a.gb,b,c,d);if(f>0)A9s=1;e=f-e|0;g=G5(a.g$,b,c,d);if(g<=e)g=e;return g;}
function R0(a,b){var c,d,e,f,g;a.qo=1;c=I(b.c/16.0);d=I(b.d/16.0);if(!(c==a.fR&&d==a.fL)){e=Ds();f=new Bd;Bb(f);B$(e,O(EY(H(f,B(578)),b)));}g=I(b.i/16.0);if(g<0)g=0;if(g>=a.dg.data.length)g=a.dg.data.length-1|0;U(a.dg.data[g],b);}
function AHx(a,b){O5(a,b,I(b.i/16.0));}
function O5(a,b,c){var d,e;if(c<0)c=0;if(c>=a.dg.data.length)c=a.dg.data.length-1|0;if(!Oa(a.dg.data[c],b)){d=Ds();e=new Bd;Bb(e);B$(d,O(EY(H(e,B(579)),b)));}GT(a.dg.data[c],b);}
function MT(a,b,c,d){return c<(a.dK.data[d<<4|b]&255)?0:1;}
function AHV(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;f=Cz(a.hV,CG(e));if(f!==null)return f;g=Ec(a,b,c,d);J();h=A3U.data[g];f=a.b1;b=(a.fR*16|0)+b|0;d=(a.fL*16|0)+d|0;$p=1;case 1:h.e1(f,b,c,d);if(C()){break _;}return Cz(a.hV,CG(e));default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AEc(a,b,c,d,e){var f;a:{f=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;e.bY=a.b1;e.de=(a.fR*16|0)+b|0;e.dc=c;e.dj=(a.fL*16|0)+d|0;if(Ec(a,b,c,d)){J();if(A3U.data[Ec(a,b,c,d)] instanceof DM){if(a.rG){if(Cz(a.hV,CG(f))!==null)GT(a.b1.e0,Cz(a.hV,CG(f)));U(a.b1.e0,e);}BK(a.hV,CG(f),e);break a;}}B$(Ds(),B(580));}}
function Zp(a,b,c,d){var e;e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;if(a.rG)GT(a.b1.e0,Ob(a.hV,CG(e)));}
function Ir(a){var b;a.rG=1;Dq(a.b1.e0,G_(a.hV));b=0;while(b<a.dg.data.length){AKC(a.b1,a.dg.data[b]);b=b+1|0;}}
function AJe(a){var b;a.rG=0;Fk(a.b1.e0,G_(a.hV));b=0;while(b<a.dg.data.length){ALh(a.b1,a.dg.data[b]);b=b+1|0;}}
function PE(a){a.dr=1;}
function AER(a,b,c,d){var e,f,g,h,i;e=I((c.I-2.0)/16.0);f=I((c.Q+2.0)/16.0);if(e<0)e=0;if(f>=a.dg.data.length)f=a.dg.data.length-1|0;while(e<=f){g=a.dg.data[e];h=0;while(h<g.p){i=Z(g,h);if(i!==b&&Kd(i.G,c))U(d,i);h=h+1|0;}e=e+1|0;}}
function AGZ(a,b,c,d){var e,f,g,h,i;e=I((c.I-2.0)/16.0);f=I((c.Q+2.0)/16.0);if(e<0)e=0;if(f>=a.dg.data.length)f=a.dg.data.length-1|0;while(e<=f){g=a.dg.data[e];h=0;while(h<g.p){i=Z(g,h);if(Nn(b,C4(i))&&Kd(i.G,c))U(d,i);h=h+1|0;}e=e+1|0;}}
function IO(a,b){return a.ov?0:a.qo&&Long_ne(a.b1.dG,a.rf)?1:a.dr;}
function Ha(){var a=this;E.call(a);a.im=0;a.hw=0;a.jt=null;a.vr=null;}
function A$K(a,b,c,d,e,f,g){var h=new Ha();ZR(h,a,b,c,d,e,f,g);return h;}
function ZR(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.vr=b;a.im=c>>4;a.hw=e>>4;i=f>>4;j=h>>4;a.jt=$rt_createMultiArray($rt_arraycls($rt_arraycls(HB)),[(j-a.hw|0)+1|0,(i-a.im|0)+1|0]);k=a.im;while(k<=i){l=a.hw;if(l<=j){m=a.jt.data[k-a.im|0].data;c=l-a.hw|0;$p=1;continue _;}k=k+1|0;}return;case 1:$z=VD(b,k,l);if(C()){break _;}n
=$z;m[c]=n;l=l+1|0;while(true){if(l<=j){m=a.jt.data[k-a.im|0].data;c=l-a.hw|0;continue _;}k=k+1|0;if(k>i)break;l=a.hw;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Go(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.im|0;f=(d>>4)-a.hw|0;return Ec(a.jt.data[e].data[f],b&15,c,d&15);}
function AA_(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b>>4)-a.im|0;f=(d>>4)-a.hw|0;g=a.jt.data[e].data[f];e=b&15;b=d&15;$p=1;case 1:$z=AHV(g,e,c,b);if(C()){break _;}g=$z;return g;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Wp(a,b,c,d){return A9v.data[VN(a,b,c,d)];}
function VN(a,b,c,d){return FT(a,b,c,d,1);}
function FT(a,b,c,d,e){var f,g,h,i,j,k;if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){a:{if(e){f=Go(a,b,c,d);J();if(f==A3Z.b)break a;if(f==A55.b)break a;}if(c<0)return 0;if(c>=128){f=15-a.vr.fA|0;if(f<0)f=0;return f;}f=(b>>4)-a.im|0;g=(d>>4)-a.hw|0;return RX(a.jt.data[f].data[g],b&15,c,d&15,a.vr.fA);}g=FT(a,b,c+1|0,d,0);h=FT(a,b+1|0,c,d,0);i=FT(a,b-1|0,c,d,0);j=FT(a,b,c,d+1|0,0);k=FT(a,b,c,d-1|0,0);if(h<=g)h=g;if(i<=h)i=h;if(j<=i)j=i;if(k<=j)k=j;return k;}return 15;}
function Yy(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.im|0;f=(d>>4)-a.hw|0;return OX(a.jt.data[e].data[f],b&15,c,d&15);}
function LL(a,b,c,d){var e,f;e=Go(a,b,c,d);if(!e)f=A5b;else{J();f=A3U.data[e].bR;}return f;}
function XC(a,b,c,d){var e;J();e=A3U.data[Go(a,b,c,d)];return e!==null?e.dy():0;}
function Fp(){Bz.call(this);}
function A$L(){var a=new Fp();AYR(a);return a;}
function AYR(a){R(a);}
function Q8(){Fp.call(this);}
function A$M(){var a=new Q8();AWv(a);return a;}
function AWv(a){R(a);}
function Ro(){E.call(this);}
var A$N=null;function A$O(){var a=new Ro();AJx(a);return a;}
function AJx(a){return;}
function ADB(){var b,c;b=$rt_createIntArray(12);c=b.data;c[0]=1;c[1]=4;c[2]=2;c[3]=1024;c[4]=8;c[5]=16;c[6]=128;c[7]=64;c[8]=32;c[9]=256;c[10]=2048;c[11]=512;A$N=b;}
function M6(){Fr.call(this);this.tX=null;}
function AR7(a,b){return ZC(a.tX,b);}
function K8(a){var b;b=new Rm;RH(b,a.tX);return b;}
function P$(){E.call(this);this.EY=null;}
function AIZ(a){Y();A2L.requestPointerLock();KQ(0);}
function AZL(a){AIZ(a);}
function AK1(){E.call(this);}
function A$P(){var a=new AK1();AUL(a);return a;}
function AUL(a){return;}
function SR(){var a=this;DE.call(a);a.b9=null;a.f_=0;a.of=0;a.jO=0;}
function A0s(){var a=new SR();AOu(a);return a;}
function AOu(a){a.b9=N(B6,3);a.f_=0;a.of=0;a.jO=0;}
function AYk(a,b){return a.b9.data[b];}
function AXB(a,b,c){var d;if(a.b9.data[b]===null)return null;if(a.b9.data[b].m<=c){d=a.b9.data[b];a.b9.data[b]=null;return d;}d=D5(a.b9.data[b],c);if(!a.b9.data[b].m)a.b9.data[b]=null;return d;}
function AOF(a,b,c){a.b9.data[b]=c;if(c!==null&&c.m>64)c.m=64;}
function ANL(a){return 64;}
function AJc(a,b){return Bg(a.jO,b)/200|0;}
function Za(a,b){if(!a.of)a.of=200;return Bg(a.f_,b)/a.of|0;}
function SH(a){return a.f_<=0?0:1;}
function ABQ(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.f_<=0?0:1;c=0;if(a.f_>0){a.f_=a.f_-1|0;c=1;}if(!a.f_&&L1(a)){d=a.b9.data[1];if(d===null)e=0;else a:{f=Dl(d).cx;if(f<256){J();if(A3U.data[f].bR===A6c){e=300;break a;}}Bw();e=f==A67.cx?100:f!=A6C.cx?0:1600;}a.f_=e;a.of=e;if(a.f_>0){c=1;if(a.b9.data[1]!==null){d=a.b9.data[1];d.m=d.m-1|0;if(!a.b9.data[1].m)a.b9.data[1]
=null;}}}if(SH(a)&&L1(a)){a.jO=a.jO+1|0;if(a.jO==200){a.jO=0;Y1(a);c=1;}}else a.jO=0;if(b==(a.f_<=0?0:1)){if(!c)return;d=a.bY;e=a.de;b=a.dc;c=a.dj;$p=1;continue _;}c=1;b=a.f_<=0?0:1;g=a.bY;f=a.de;h=a.dc;i=a.dj;$p=2;continue _;case 1:ABF(d,e,b,c);if(C()){break _;}return;case 2:$z=Z5(g,f,h,i);if(C()){break _;}e=$z;$p=3;case 3:$z=AH5(g,f,h,i);if(C()){break _;}j=$z;if(!b){J();b=A56.b;$p=4;continue _;}J();b=A57.b;$p=5;continue _;case 4:AJ0(g,f,h,i,b);if(C()){break _;}$p=6;continue _;case 5:AJ0(g,f,h,i,b);if(C())
{break _;}$p=6;case 6:AFj(g,f,h,i,e);if(C()){break _;}$p=7;case 7:AA$(g,f,h,i,j);if(C()){break _;}if(!c)return;d=a.bY;e=a.de;b=a.dc;c=a.dj;$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,$p);}
function L1(a){var b,c;if(a.b9.data[0]===null)return 0;b=Q$(a,Dl(a.b9.data[0]).cx);if(b<0)b=0;else if(a.b9.data[2]===null)b=1;else if(a.b9.data[2].bs!=b)b=0;else if(a.b9.data[2].m<64&&a.b9.data[2].m<D3(a.b9.data[2]))b=1;else{c=a.b9.data[2].m;Bw();b=c>=A6g.data[b].en?0:1;}return b;}
function Y1(a){var b,c;if(L1(a)){b=Q$(a,Dl(a.b9.data[0]).cx);if(a.b9.data[2]===null)a.b9.data[2]=I1(b,1);else if(a.b9.data[2].bs==b){c=a.b9.data[2];c.m=c.m+1|0;}c=a.b9.data[0];c.m=c.m-1|0;if(a.b9.data[0].m<=0)a.b9.data[0]=null;}}
function Q$(a,b){J();if(b==A4k.b){Bw();b=A6S.cx;}else if(b==A4l.b){Bw();b=A6T.cx;}else if(b==A51.b){Bw();b=A6D.cx;}else if(b==A4f.b)b=A3$.b;else{Bw();b=b==A5i.cx?A7C.cx:b!=A34.b?(-1):A30.b;}return b;}
function VL(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bY;c=a.de;d=a.dc;e=a.dj;$p=1;case 1:ABF(b,c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function P1(){DE.call(this);this.g7=null;}
function A0X(){var a=new P1();ATg(a);return a;}
function ATg(a){a.g7=N(B6,36);}
function AOR(a){return 27;}
function Oh(a,b){return a.g7.data[b];}
function AS8(a,b,c){var d;if(a.g7.data[b]===null)return null;if(a.g7.data[b].m<=c){d=a.g7.data[b];a.g7.data[b]=null;return d;}d=D5(a.g7.data[b],c);if(!a.g7.data[b].m)a.g7.data[b]=null;return d;}
function ACG(a,b,c){a.g7.data[b]=c;if(c!==null&&c.m>64)c.m=64;}
function AXP(a){return B(255);}
function AWX(a){return 64;}
function CA(){E.call(this);this.fH=null;}
function A$Q(){var a=new CA();Cl(a);return a;}
function Cl(a){a.fH=null;}
function RP(a){return a.fH!==null?a.fH:B(3);}
function AP7(a,b){a.fH=b;return a;}
function KP(b){var c,d;c=LF(b);if(!c){b=new LG;Cl(b);return b;}d=AAo(c);d.fH=FV(b);d.fV(b);return d;}
function O2(b,c){I9(c,b.eC());if(b.eC()){Tj(c,RP(b));b.f1(c);}}
function AAo(b){var c;switch(b){case 0:c=new LG;Cl(c);return c;case 1:c=new Ky;Cl(c);return c;case 2:c=new KR;Cl(c);return c;case 3:c=new Jw;Cl(c);return c;case 4:c=new LS;Cl(c);return c;case 5:c=new MO;Cl(c);return c;case 6:c=new Ks;Cl(c);return c;case 7:c=new KF;Cl(c);return c;case 8:c=new Mh;Cl(c);return c;case 9:return Kg();case 10:return F6();default:}return null;}
function AKg(){CA.call(this);this.cl=null;}
function F6(){var a=new AKg();AXX(a);return a;}
function AXX(a){Cl(a);a.cl=CY();}
function AWQ(a,b){var c;c=K8(G_(a.cl));while(Fh(c)){O2(Kl(c),b);}I9(b,0);}
function AYh(a,b){var c;Rk(a.cl);while(true){c=KP(b);if(!c.eC())break;BK(a.cl,RP(c),c);}}
function AWP(a){return 10;}
function Gv(a,b,c){var d;d=a.cl;c.fH=b;BK(d,b,c);}
function H$(a,b,c){var d,e;d=a.cl;e=new Ky;Cl(e);e.rE=c;e.fH=b;BK(d,b,e);}
function EH(a,b,c){var d,e;d=a.cl;e=new KR;Cl(e);e.ry=c;e.fH=b;BK(d,b,e);}
function FD(a,b,c){var d,e;d=a.cl;e=new Jw;Cl(e);e.qj=c;e.fH=b;BK(d,b,e);}
function GU(a,b,c){var d,e;d=a.cl;e=new LS;Cl(e);e.ra=c;e.fH=b;BK(d,b,e);}
function AMf(a,b,c){var d,e;d=a.cl;e=AWz(c);e.fH=b;BK(d,b,e);}
function Hp(a,b,c){var d,e;d=a.cl;e=new KF;Cl(e);e.k4=c;e.fH=b;BK(d,b,e);}
function AIo(a,b,c){var d;d=a.cl;c.fH=b;BK(d,b,c);}
function PR(a,b,c){H$(a,b,(!c?0:1)<<24>>24);}
function UL(a,b){return Dv(a.cl,b);}
function JM(a,b){return !Dv(a.cl,b)?0:Cz(a.cl,b).rE;}
function EV(a,b){return !Dv(a.cl,b)?0:Cz(a.cl,b).ry;}
function E6(a,b){return !Dv(a.cl,b)?0:Cz(a.cl,b).qj;}
function Kj(a,b){return !Dv(a.cl,b)?Long_ZERO:Cz(a.cl,b).ra;}
function AHh(a,b){return !Dv(a.cl,b)?0.0:Cz(a.cl,b).l0;}
function Hi(a,b){return !Dv(a.cl,b)?$rt_createByteArray(0):Cz(a.cl,b).k4;}
function Kz(a,b){return !Dv(a.cl,b)?F6():Cz(a.cl,b);}
function II(a,b){return !Dv(a.cl,b)?Kg():Cz(a.cl,b);}
function QM(a,b){return !JM(a,b)?0:1;}
function Nk(){B5.call(this);}
function A$R(){var a=new Nk();AZp(a);return a;}
function AZp(a){R(a);}
function PD(){B5.call(this);}
function A$S(){var a=new PD();AQT(a);return a;}
function AQT(a){R(a);}
function O1(){FZ.call(this);this.yn=0;}
function AOV(a){var b;b=new Bd;Bb(b);return O(Be(H(b,B(581)),a.yn));}
function Ng(){FZ.call(this);this.A9=0;}
function AOy(a){var b;b=new Bd;Bb(b);return O(Be(H(b,B(582)),a.A9));}
function Hm(){var a=this;E.call(a);a.kO=0;a.pA=0;a.kq=null;a.gx=null;a.qB=null;a.hv=null;}
function A$T(a){var b=new Hm();RH(b,a);return b;}
function RH(a,b){a.hv=b;a.pA=b.gl;a.kq=null;}
function Fh(a){if(a.kq!==null)return 1;while(a.kO<a.hv.cp.data.length){if(a.hv.cp.data[a.kO]!==null)return 1;a.kO=a.kO+1|0;}return 0;}
function QP(a){var b;if(a.pA==a.hv.gl)return;b=new Je;R(b);M(b);}
function Sg(a){var b,c,d;QP(a);if(!Fh(a)){b=new Iq;R(b);M(b);}if(a.kq===null){c=a.hv.cp.data;d=a.kO;a.kO=d+1|0;a.gx=c[d];a.kq=a.gx.d7;a.qB=null;}else{if(a.gx!==null)a.qB=a.gx;a.gx=a.kq;a.kq=a.kq.d7;}}
function Zg(a){var b,c;QP(a);if(a.gx===null){b=new DJ;R(b);M(b);}if(a.qB!==null)a.qB.d7=a.gx.d7;else{c=a.gx.og&(a.hv.cp.data.length-1|0);a.hv.cp.data[c]=a.hv.cp.data[c].d7;}a.gx=null;a.pA=a.pA+1|0;b=a.hv;b.gl=b.gl+1|0;b=a.hv;b.fq=b.fq-1|0;}
function Rm(){Hm.call(this);}
function Kl(a){Sg(a);return a.gx.et;}
function Su(){var a=this;E.call(a);a.xy=null;a.AV=null;a.tU=0;a.o1=0;}
function Lv(a){return EB(a.xy);}
function AEg(a,b){return Ci(a.AV)<b?0:1;}
function AY9(a,b){a.tU=b;}
function AYf(a,b){a.o1=b;}
function ZW(){var a=this;CI.call(a);a.ui=null;a.v6=null;a.md=null;}
function AUm(a,b){var c=new ZW();ASS(c,a,b);return c;}
function ASS(a,b,c){DH(a);a.v6=B(583);a.ui=b;a.md=c;}
function AL_(a){var b;b=0;while(b<a.md.w7){U(a.bE,Pm(b,((a.bh/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bv/6|0)+(24*(b>>1)|0)|0,N3(a.md,b)));b=b+1|0;}U(a.bE,C9(100,(a.bh/2|0)-100|0,((a.bv/6|0)+120|0)+12|0,B(584)));U(a.bE,C9(200,(a.bh/2|0)-100|0,(a.bv/6|0)+168|0,B(585)));}
function Zm(a,b){var c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gz){if(b.co<100){DG(a.md,b.co,1);b.jj=N3(a.md,b.co);}if(b.co==100){c=a.H;d=new RW;e=a.md;DH(d);d.wS=B(586);d.jz=(-1);d.xg=a;d.iE=e;$p=1;continue _;}if(b.co==200){b=a.H;c=a.ui;$p=2;continue _;}}return;case 1:Zk(c,d);if(C()){break _;}if(b.co!=200)return;b=a.H;c=a.ui;$p=2;case 2:Zk(b,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function ABp(a,b,c,d){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WR(a);if(C()){break _;}Dz(a,a.bS,a.v6,a.bh/2|0,20,16777215);$p=2;case 2:AAU(a,b,c,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function Mc(){var a=this;CI.call(a);a.m6=null;a.vU=null;a.u_=0;}
function AZi(a){var b=new Mc();ZF(b,a);return b;}
function ZF(a,b){DH(a);a.vU=B(587);a.u_=0;a.m6=b;}
function AJY(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=5){a.ri();return;}c=new Bd;Bb(c);c=H(c,B(588));d=b+1|0;c=O(Be(c,d));$p=1;case 1:$z=AMl(c);if(C()){break _;}e=$z;if(e!==null){c=new Bd;Bb(c);c=O(Be(H(c,B(589)),d));e=new Bd;Bb(e);e=O(H(Be(H(e,B(588)),d),B(345)));Y();f=A3L;$p=2;continue _;}U(a.bE,C9(b,(a.bh/2|0)-100|0,(a.bv/6|0)+(24*b|0)|0,B(590)));b=d;if(b>=5){a.ri();return;}c=new Bd;Bb(c);c
=H(c,B(588));d=b+1|0;c=O(Be(c,d));continue _;case 2:$z=AZS(f,e);if(C()){break _;}e=$z;g=e===null?(-1):e.byteLength;e=new Bd;Bb(e);c=O(H(AFe(H(H(e,c),B(591)),g/100.0),B(592)));U(a.bE,C9(b,(a.bh/2|0)-100|0,(a.bv/6|0)+(24*b|0)|0,c));b=d;if(b>=5){a.ri();return;}c=new Bd;Bb(c);c=H(c,B(588));d=b+1|0;c=O(Be(c,d));$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function AHZ(a,b){var c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=new Bd;Bb(c);c=O(Be(H(c,B(588)),b));$p=1;case 1:$z=AMl(c);if(C()){break _;}c=$z;if(c===null)c=null;else{c=new Bd;Bb(c);c=O(Be(H(c,B(588)),b));}return c;default:Eq();}}CL().s(a,b,c,$p);}
function AP4(a){U(a.bE,C9(5,(a.bh/2|0)-100|0,((a.bv/6|0)+120|0)+12|0,B(593)));U(a.bE,C9(6,(a.bh/2|0)-100|0,(a.bv/6|0)+168|0,B(594)));}
function AME(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gz){if(b.co<5){c=b.co+1|0;$p=1;continue _;}if(b.co==5){b=a.H;d=new Ra;ZF(d,a);d.vU=B(595);$p=2;continue _;}if(b.co==6){b=a.H;d=a.m6;$p=3;continue _;}}return;case 1:a.EA(c);if(C()){break _;}return;case 2:Zk(b,d);if(C()){break _;}return;case 3:Zk(b,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function AFA(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.H;d=null;$p=1;case 1:Zk(c,d);if(C()){break _;}if(a.u_)return;a.u_=1;d=a.H;c=new Bd;Bb(c);c=O(Be(H(c,B(588)),b));$p=2;case 2:ACZ(d,c);if(C()){break _;}d=a.H;c=null;$p=3;case 3:Zk(d,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function ZZ(a,b,c,d){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WR(a);if(C()){break _;}Dz(a,a.bS,a.vU,a.bh/2|0,20,16777215);$p=2;case 2:AAU(a,b,c,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function Qa(){var a=this;E.call(a);a.ku=0;a.vL=0;a.qD=0;a.lX=0;a.j3=null;}
function RS(a){return a.ku>=a.qD?0:1;}
function SJ(a){var b,c;M2(a);a.lX=a.ku;b=a.j3;c=a.ku;a.ku=c+1|0;return Z(b,c);}
function AGT(a){var b;if(a.lX<0){b=new DJ;R(b);M(b);}M2(a);Em(a.j3,a.lX);a.vL=a.j3.d8;if(a.lX<a.ku)a.ku=a.ku-1|0;a.qD=a.qD-1|0;a.lX=(-1);}
function M2(a){var b;if(a.vL>=a.j3.d8)return;b=new Je;R(b);M(b);}
function J7(){Fp.call(this);}
function A$U(){var a=new J7();AWN(a);return a;}
function AWN(a){R(a);}
function P0(){Fp.call(this);}
function A$V(){var a=new P0();AY_(a);return a;}
function AY_(a){R(a);}
function AGe(){E.call(this);}
function A$W(){var a=new AGe();AWZ(a);return a;}
function AWZ(a){return;}
function VU(){E.call(this);}
function A$X(){var a=new VU();AXL(a);return a;}
function AXL(a){return;}
function N2(){E.call(this);this.lO=null;}
var A$Y=null;function AQ1(){AQ1=Bt(N2);AUJ();}
function AZ3(){var a=new N2();AGj(a);return a;}
function Sq(){AQ1();return A$Y;}
function AGj(a){var b,c,d,e;AQ1();SE(a);a.lO=Ck();ACr(A08(),a);Tp(AZ_(),a);Zn(A06(),a);AEI(A0S(),a);T5(A0k(),a);AML(A0J(),a);b=new B6;J();Rh(b,A4i,1);c=N(E,5);d=c.data;d[0]=B(596);d[1]=B(596);d[2]=B(596);d[3]=BC(35);Bw();d[4]=A5h;Ca(a,b,c);e=F0(A4p,1);c=N(E,7);d=c.data;d[0]=B(597);d[1]=B(598);d[2]=B(597);d[3]=BC(88);d[4]=A5g;d[5]=BC(35);d[6]=A4f;Ca(a,e,c);e=F0(A3Z,3);c=N(E,3);d=c.data;d[0]=B(596);d[1]=BC(35);d[2]=A34;Ca(a,e,c);e=F0(A5d,1);c=N(E,5);d=c.data;d[0]=B(599);d[1]=B(596);d[2]=B(599);d[3]=BC(35);d[4]
=A67;Ca(a,e,c);e=D9(A7F,1);c=N(E,5);d=c.data;d[0]=B(600);d[1]=B(600);d[2]=B(600);d[3]=BC(35);d[4]=A36;Ca(a,e,c);e=D9(A6f,1);c=N(E,7);d=c.data;d[0]=B(596);d[1]=B(596);d[2]=B(601);d[3]=BC(35);d[4]=A36;d[5]=BC(88);d[6]=A67;Ca(a,e,c);e=F0(A36,4);c=N(E,3);d=c.data;d[0]=B(602);d[1]=BC(35);d[2]=A37;Ca(a,e,c);e=D9(A67,4);c=N(E,4);d=c.data;d[0]=B(602);d[1]=B(602);d[2]=BC(35);d[3]=A36;Ca(a,e,c);e=F0(A39,4);c=N(E,6);d=c.data;d[0]=B(66);d[1]=B(602);d[2]=BC(88);d[3]=A6C;d[4]=BC(35);d[5]=A67;Ca(a,e,c);e=D9(A68,4);c=N(E,4);d
=c.data;d[0]=B(599);d[1]=B(603);d[2]=BC(35);d[3]=A36;Ca(a,e,c);e=F0(A5$,16);c=N(E,7);d=c.data;d[0]=B(604);d[1]=B(597);d[2]=B(604);d[3]=BC(88);d[4]=A6S;d[5]=BC(35);d[6]=A67;Ca(a,e,c);e=D9(A7J,1);c=N(E,4);d=c.data;d[0]=B(599);d[1]=B(596);d[2]=BC(35);d[3]=A6S;Ca(a,e,c);e=D9(A7G,1);c=N(E,4);d=c.data;d[0]=B(599);d[1]=B(603);d[2]=BC(35);d[3]=A6S;Ca(a,e,c);e=D9(A6P,1);c=N(E,6);d=c.data;d[0]=B(605);d[1]=B(606);d[2]=BC(65);d[3]=A6S;d[4]=BC(66);d[5]=A6B;Ca(a,e,c);e=D9(A7h,1);c=N(E,3);d=c.data;d[0]=B(596);d[1]=BC(35);d[2]
=A6F;Ca(a,e,c);e=F0(A5Y,4);c=N(E,5);d=c.data;d[0]=B(607);d[1]=B(608);d[2]=B(596);d[3]=BC(35);d[4]=A36;Ca(a,e,c);e=F0(A5_,4);c=N(E,5);d=c.data;d[0]=B(607);d[1]=B(608);d[2]=B(596);d[3]=BC(35);d[4]=A34;Ca(a,e,c);e=D9(A7D,1);c=N(E,7);d=c.data;d[0]=B(596);d[1]=B(598);d[2]=B(596);d[3]=BC(35);d[4]=A67;d[5]=BC(88);d[6]=A4i;Ca(a,e,c);e=D9(A7E,1);c=N(E,7);d=c.data;d[0]=B(596);d[1]=B(598);d[2]=B(596);d[3]=BC(35);d[4]=A4n;d[5]=BC(88);d[6]=A6Q;Ca(a,e,c);OG(a.lO,A0u(a));B$(Ds(),O(H(Be(BS(),CZ(a.lO)),B(609))));}
function Ca(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=c.data;e=B(3);f=0;g=0;h=0;if(!Pp(d[f],$rt_arraycls(Cp))){while(d[f] instanceof Cp){i=f+1|0;j=d[f];h=h+1|0;g=BE(j);k=new Bd;Bb(k);e=O(H(H(k,e),j));f=i;}i=f;}else{i=1;l=d[f];m=0;while(true){c=l.data;if(m>=c.length)break;k=c[m];h=h+1|0;g=BE(k);j=new Bd;Bb(j);e=O(H(H(j,e),k));m=m+1|0;}}n=CY();while(i<d.length){o=d[i];p=0;m=i+1|0;if(d[m] instanceof W)p=d[m].cx;else if(d[m] instanceof P)p=d[m].b;BK(n,o,CG(p));i=i+2|0;}i=Bg(g,h);d=$rt_createIntArray(i);c=d.data;p
=0;while(p<i){q=Cr(e,p);if(!Dv(n,BC(q)))c[p]=(-1);else c[p]=Cz(n,BC(q)).f2;p=p+1|0;}e=a.lO;j=new Q3;j.DN=b.bs;j.jJ=g;j.pf=h;j.vh=d;j.vl=b;U(e,j);}
function OQ(a,b){var c,d;c=0;while(c<a.lO.p){d=Z(a.lO,c);if(AF_(d,b))return ACq(d,b);c=c+1|0;}return null;}
function AUJ(){A$Y=AZ3();}
function Xu(){JK.call(this);}
function Pm(a,b,c,d){var e=new Xu();AWq(e,a,b,c,d);return e;}
function AWq(a,b,c,d,e){PB(a,b,c,d,150,20,e);}
function RW(){var a=this;CI.call(a);a.xg=null;a.wS=null;a.iE=null;a.jz=0;}
function AEk(a){var b;b=0;while(b<a.iE.lT.data.length){U(a.bE,Pm(b,((a.bh/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bv/6|0)+(24*(b>>1)|0)|0,Jn(a.iE,b)));b=b+1|0;}U(a.bE,C9(200,(a.bh/2|0)-100|0,(a.bv/6|0)+168|0,B(585)));}
function ADb(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.iE.lT.data.length){Z(a.bE,c).jj=Jn(a.iE,c);c=c+1|0;}if(b.co!=200){a.jz=b.co;d=new Bd;Bb(d);b.jj=O(H(H(H(d,B(567)),Jn(a.iE,b.co)),B(568)));return;}b=a.H;d=a.xg;$p=1;case 1:Zk(b,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function AGw(a,b,c){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jz>=0){TU(a.iE,a.jz,c);Z(a.bE,a.jz).jj=Jn(a.iE,a.jz);a.jz=(-1);return;}$p=1;case 1:UB(a,b,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,$p);}
function ABI(a,b,c,d){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WR(a);if(C()){break _;}Dz(a,a.bS,a.wS,a.bh/2|0,20,16777215);$p=2;case 2:AAU(a,b,c,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function Ra(){Mc.call(this);}
function AS6(a){U(a.bE,C9(6,(a.bh/2|0)-100|0,(a.bv/6|0)+168|0,B(594)));}
function AGR(a,b){var c,d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AHZ(a,b);if(C()){break _;}c=$z;if(c===null)return;d=a.H;e=new Rf;f=new Bd;Bb(f);f=O(H(H(H(f,B(610)),c),B(611)));DH(e);e.yT=a;e.yI=B(612);e.yK=f;e.wc=b;$p=2;case 2:Zk(d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ALj(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b){$p=2;continue _;}d=a.H;e=a.m6;$p=1;case 1:Zk(d,e);if(C()){break _;}return;case 2:$z=AHZ(a,c);if(C()){break _;}d=$z;e=new Bd;Bb(e);d=O(H(H(e,B(613)),d));Y();$p=3;case 3:$z=AKq(d);if(C()){break _;}b=$z;if(!b){d=a.H;e=a.m6;$p=1;continue _;}b=1;c=1;f=N1();e=A3L;$p=4;case 4:AVy(e,d,b,c,f);if(C()){break _;}g=H5(f);while(true){if(!FO(g)){g=H5(f);while
(FO(g)){e=FH(g);if(e.lI){e=e.kW;$p=7;continue _;}}$p=6;continue _;}e=FH(g);if(!e.lI)break;}e=e.kW;$p=5;case 5:AGK(e);if(C()){break _;}while(true){if(!FO(g)){g=H5(f);while(FO(g)){e=FH(g);if(e.lI){e=e.kW;$p=7;continue _;}}$p=6;continue _;}e=FH(g);if(e.lI)continue;else break;}e=e.kW;continue _;case 6:AGK(d);if(C()){break _;}d=a.H;e=a.m6;$p=1;continue _;case 7:AGK(e);if(C()){break _;}while(FO(g)){e=FH(g);if(!e.lI)continue;else{e=e.kW;continue _;}}$p=6;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function Lx(){var a=this;E.call(a);a.jy=0.0;a.jp=0.0;a.DD=0;a.sl=0;}
function A$Z(){var a=new Lx();YF(a);return a;}
function YF(a){a.jy=0.0;a.jp=0.0;a.DD=0;a.sl=0;}
function Ub(){var a=this;Lx.call(a);a.i2=null;a.l2=null;}
function R$(a){var b=new Ub();ARH(b,a);return b;}
function ARH(a,b){YF(a);a.i2=$rt_createBooleanArray(10);a.l2=b;}
function AJV(a,b,c){var d;d=(-1);if(b==a.l2.r5.by)d=0;if(b==a.l2.uW.by)d=1;if(b==a.l2.rY.by)d=2;if(b==a.l2.ss.by)d=3;if(b==a.l2.v3.by)d=4;if(d>=0)a.i2.data[d]=c;}
function AJq(a){var b;b=0;while(b<10){a.i2.data[b]=0;b=b+1|0;}}
function AI5(a,b){a.jy=0.0;a.jp=0.0;if(a.i2.data[0])a.jp=a.jp+1.0;if(a.i2.data[1])a.jp=a.jp-1.0;if(a.i2.data[2])a.jy=a.jy+1.0;if(a.i2.data[3])a.jy=a.jy-1.0;a.sl=a.i2.data[4];}
function LG(){CA.call(this);}
function A$0(){var a=new LG();AOS(a);return a;}
function AOS(a){Cl(a);}
function AYe(a,b){return;}
function AR5(a,b){return;}
function AOa(a){return 0;}
function AL4(){var a=this;E.call(a);a.Bd=null;a.oB=null;}
function A08(){var a=new AL4();AP5(a);return a;}
function AP5(a){var b,c,d,e;b=N($rt_arraycls(Cp),4);c=b.data;d=N(Cp,3);e=d.data;e[0]=B(614);e[1]=B(603);e[2]=B(603);c[0]=d;d=N(Cp,3);e=d.data;e[0]=B(66);e[1]=B(602);e[2]=B(602);c[1]=d;d=N(Cp,3);e=d.data;e[0]=B(615);e[1]=B(616);e[2]=B(617);c[2]=d;d=N(Cp,3);e=d.data;e[0]=B(615);e[1]=B(617);e[2]=B(617);c[3]=d;a.Bd=b;b=N($rt_arraycls(E),5);c=b.data;d=N(E,5);e=d.data;J();e[0]=A36;e[1]=A34;Bw();e[2]=A6S;e[3]=A6D;e[4]=A6T;c[0]=d;d=N(E,5);e=d.data;e[0]=A6X;e[1]=A61;e[2]=A6N;e[3]=A65;e[4]=A7a;c[1]=d;d=N(E,5);e=d.data;e[0]
=A6W;e[1]=A60;e[2]=A6M;e[3]=A64;e[4]=A6_;c[2]=d;d=N(E,5);e=d.data;e[0]=A6Y;e[1]=A62;e[2]=A6O;e[3]=A66;e[4]=A7b;c[3]=d;d=N(E,5);e=d.data;e[0]=A7c;e[1]=A7d;e[2]=A7e;e[3]=A7f;e[4]=A7g;c[4]=d;a.oB=b;}
function ACr(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.oB.data[0].data.length){d=a.oB.data[0].data[c];e=0;while(e<(a.oB.data.length-1|0)){f=a.oB.data;g=e+1|0;h=f[g].data[c];i=Nx(h);f=N(E,5);j=f.data;j[0]=a.Bd.data[e];j[1]=BC(35);Bw();j[2]=A67;j[3]=BC(88);j[4]=d;Ca(b,i,f);e=g;}c=c+1|0;}}
function TO(){var a=this;E.call(a);a.ye=null;a.nX=null;}
function AZ_(){var a=new TO();AYY(a);return a;}
function AYY(a){var b,c,d,e;b=N($rt_arraycls(Cp),1);c=b.data;d=N(Cp,3);e=d.data;e[0]=B(66);e[1]=B(66);e[2]=B(602);c[0]=d;a.ye=b;b=N($rt_arraycls(E),2);c=b.data;d=N(E,5);e=d.data;J();e[0]=A36;e[1]=A34;Bw();e[2]=A6S;e[3]=A6D;e[4]=A6T;c[0]=d;d=N(E,5);e=d.data;e[0]=A6V;e[1]=A6Z;e[2]=A6U;e[3]=A63;e[4]=A6$;c[1]=d;a.nX=b;}
function Tp(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.nX.data[0].data.length){d=a.nX.data[0].data[c];e=0;while(e<(a.nX.data.length-1|0)){f=a.nX.data;g=e+1|0;h=f[g].data[c];i=Nx(h);j=N(E,5);k=j.data;k[0]=a.ye.data[e];k[1]=BC(35);Bw();k[2]=A67;k[3]=BC(88);k[4]=d;Ca(b,i,j);e=g;}c=c+1|0;}h=new B6;Bw();Fu(h,A6R,1);f=N(E,7);k=f.data;k[0]=B(618);k[1]=B(619);k[2]=B(618);k[3]=BC(88);k[4]=A5h;k[5]=BC(35);k[6]=A67;Ca(b,h,f);d=D9(A5f,4);f=N(E,9);k=f.data;k[0]=B(66);k[1]=B(602);k[2]=B(42);k[3]=BC(89);k[4]=A5e;k[5]=BC(88);k[6]
=A6S;k[7]=BC(35);k[8]=A67;Ca(b,d,f);}
function TH(){E.call(this);this.qE=null;}
function A06(){var a=new TH();ATk(a);return a;}
function ATk(a){var b,c,d,e;b=N($rt_arraycls(E),3);c=b.data;d=N(E,2);e=d.data;J();e[0]=A4n;Bw();e[1]=A6T;c[0]=d;d=N(E,2);e=d.data;e[0]=A4m;e[1]=A6S;c[1]=d;d=N(E,2);e=d.data;e[0]=A52;e[1]=A6D;c[2]=d;a.qE=b;}
function Zn(a,b){var c,d,e,f,g,h;c=0;while(c<a.qE.data.length){d=a.qE.data[c].data[0];e=a.qE.data[c].data[1];f=AGJ(d);g=N(E,5);h=g.data;h[0]=B(596);h[1]=B(596);h[2]=B(596);h[3]=BC(35);h[4]=e;Ca(b,f,g);f=D9(e,9);g=N(E,3);h=g.data;h[0]=B(602);h[1]=BC(35);h[2]=d;Ca(b,f,g);c=c+1|0;}}
function ZB(){E.call(this);}
function A0S(){var a=new ZB();ASe(a);return a;}
function ASe(a){return;}
function AEI(a,b){var c,d,e;c=new B6;Bw();Df(c,A69);d=N(E,9);e=d.data;e[0]=B(42);e[1]=B(66);e[2]=B(602);e[3]=BC(88);J();e[4]=A4d;e[5]=BC(89);e[6]=A4e;e[7]=BC(35);e[8]=A68;Ca(b,c,d);c=Nx(A69);d=N(E,9);e=d.data;e[0]=B(42);e[1]=B(66);e[2]=B(602);e[3]=BC(88);e[4]=A4e;e[5]=BC(89);e[6]=A4d;e[7]=BC(35);e[8]=A68;Ca(b,c,d);}
function AL3(){E.call(this);}
function A0k(){var a=new AL3();AWB(a);return a;}
function AWB(a){return;}
function T5(a,b){var c,d,e;c=new B6;J();AC1(c,A5Z);d=N(E,5);e=d.data;e[0]=B(596);e[1]=B(599);e[2]=B(596);e[3]=BC(35);e[4]=A36;Ca(b,c,d);c=AGJ(A56);d=N(E,5);e=d.data;e[0]=B(596);e[1]=B(599);e[2]=B(596);e[3]=BC(35);e[4]=A34;Ca(b,c,d);c=AGJ(A53);d=N(E,4);e=d.data;e[0]=B(600);e[1]=B(600);e[2]=BC(35);e[3]=A36;Ca(b,c,d);}
function AAs(){var a=this;E.call(a);a.wZ=null;a.mH=null;}
function A0J(){var a=new AAs();AOr(a);return a;}
function AOr(a){var b,c,d,e;b=N($rt_arraycls(Cp),4);c=b.data;d=N(Cp,2);e=d.data;e[0]=B(614);e[1]=B(604);c[0]=d;d=N(Cp,3);e=d.data;e[0]=B(604);e[1]=B(614);e[2]=B(614);c[1]=d;d=N(Cp,3);e=d.data;e[0]=B(614);e[1]=B(604);e[2]=B(604);c[2]=d;d=N(Cp,2);e=d.data;e[0]=B(604);e[1]=B(604);c[3]=d;a.wZ=b;b=N($rt_arraycls(E),5);c=b.data;d=N(E,5);e=d.data;J();e[0]=A4i;e[1]=A5r;Bw();e[2]=A6S;e[3]=A6D;e[4]=A6T;c[0]=d;d=N(E,5);e=d.data;e[0]=A7i;e[1]=A7m;e[2]=A7q;e[3]=A7u;e[4]=A7y;c[1]=d;d=N(E,5);e=d.data;e[0]=A7j;e[1]=A7n;e[2]
=A7r;e[3]=A7v;e[4]=A7z;c[2]=d;d=N(E,5);e=d.data;e[0]=A7k;e[1]=A7o;e[2]=A7s;e[3]=A7w;e[4]=A7A;c[3]=d;d=N(E,5);e=d.data;e[0]=A7l;e[1]=A7p;e[2]=A7t;e[3]=A7x;e[4]=A7B;c[4]=d;a.mH=b;}
function AML(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.mH.data[0].data.length){d=a.mH.data[0].data[c];e=0;while(e<(a.mH.data.length-1|0)){f=a.mH.data;g=e+1|0;h=f[g].data[c];i=Nx(h);f=N(E,3);j=f.data;j[0]=a.wZ.data[e];j[1]=BC(88);j[2]=d;Ca(b,i,f);e=g;}c=c+1|0;}}
function Ua(){E.call(this);this.EB=null;}
function A0u(a){var b=new Ua();AQH(b,a);return b;}
function AQH(a,b){a.EB=b;}
function AHg(a,b,c){return IP(c)<IP(b)?(-1):IP(c)<=IP(b)?0:1;}
function ARo(a,b,c){return AHg(a,b,c);}
function Ky(){CA.call(this);this.rE=0;}
function A$1(){var a=new Ky();AUO(a);return a;}
function AUO(a){Cl(a);}
function AXS(a,b){I9(b,a.rE);}
function AXu(a,b){a.rE=LF(b);}
function AWt(a){return 1;}
function KR(){CA.call(this);this.ry=0;}
function A$2(){var a=new KR();AVX(a);return a;}
function AVX(a){Cl(a);}
function APf(a,b){VQ(b,a.ry);}
function ARr(a,b){a.ry=TB(b);}
function AVO(a){return 2;}
function Jw(){CA.call(this);this.qj=0;}
function A$3(){var a=new Jw();AS0(a);return a;}
function AS0(a){Cl(a);}
function ATe(a,b){Ib(b,a.qj);}
function AQ7(a,b){a.qj=GR(b);}
function AOC(a){return 3;}
function LS(){CA.call(this);this.ra=Long_ZERO;}
function A$4(){var a=new LS();ARM(a);return a;}
function ARM(a){Cl(a);}
function ANb(a,b){QV(b,a.ra);}
function AZG(a,b){a.ra=P4(b);}
function ATL(a){return 4;}
function MO(){CA.call(this);this.l0=0.0;}
function A$5(){var a=new MO();ARJ(a);return a;}
function AWz(a){var b=new MO();AOW(b,a);return b;}
function ARJ(a){Cl(a);}
function AOW(a,b){Cl(a);a.l0=b;}
function AM6(a,b){AJM(b,a.l0);}
function AXp(a,b){a.l0=WB(b);}
function AMR(a){return 5;}
function Ks(){CA.call(this);this.hJ=0.0;}
function A$6(){var a=new Ks();ARt(a);return a;}
function ARt(a){Cl(a);}
function AWG(a,b){AJR(b,a.hJ);}
function AOq(a,b){a.hJ=AJP(b);}
function ASq(a){return 6;}
function KF(){CA.call(this);this.k4=null;}
function A$7(){var a=new KF();AZR(a);return a;}
function AZR(a){Cl(a);}
function AVj(a,b){Ib(b,a.k4.data.length);AI4(b,a.k4);}
function AWV(a,b){a.k4=$rt_createByteArray(GR(b));AHr(b,a.k4);}
function AYr(a){return 7;}
function Mh(){CA.call(this);this.xF=null;}
function A$8(){var a=new Mh();AXF(a);return a;}
function AXF(a){Cl(a);}
function AZf(a,b){Tj(b,a.xF);}
function AQ8(a,b){a.xF=FV(b);}
function ANj(a){return 8;}
function NY(){var a=this;CA.call(a);a.gr=null;a.lz=0;}
function Kg(){var a=new NY();ACd(a);return a;}
function ACd(a){Cl(a);a.gr=Ck();}
function AYo(a,b){var c;if(a.gr.p<=0)a.lz=1;else a.lz=Z(a.gr,0).eC();I9(b,a.lz);Ib(b,a.gr.p);c=0;while(c<a.gr.p){Z(a.gr,c).f1(b);c=c+1|0;}}
function AQ3(a,b){var c,d,e;a.lz=LF(b);c=GR(b);a.gr=Ck();d=0;while(d<c){e=AAo(a.lz);e.fV(b);U(a.gr,e);d=d+1|0;}}
function AQK(a){return 9;}
function HT(a,b){a.lz=b.eC();U(a.gr,b);}
function Eu(a,b){return Z(a.gr,b);}
function AIY(a){return a.gr.p;}
function Qd(){var a=this;E.call(a);a.xD=null;a.uQ=null;}
function ALU(a){Cx(a.xD,(QQ(a.uQ.result)?1:0)?null:AXN(a.uQ.result));}
function ANZ(a){ALU(a);}
function Qc(){E.call(this);this.AK=null;}
function Tw(a){Cx(a.AK,null);}
function APV(a){Tw(a);}
function Sm(){DZ.call(this);this.qV=null;}
function AUq(a){D4(a.bS,B(254),60,6,4210752);D4(a.bS,B(317),8,(a.eL-96|0)+2|0,4210752);}
function AIO(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.H.bi;d=B(620);$p=1;case 1:$z=ACB(c,d);if(C()){break _;}e=$z;BN(1.0,1.0,1.0,1.0);DI(a.H.bi,e);f=(a.bh-a.ez|0)/2|0;g=(a.bv-a.eL|0)/2|0;Ct(a,f,g,0,0,a.ez,a.eL);if(SH(a.qV)){h=Za(a.qV,12);Ct(a,f+56|0,((g+36|0)+12|0)-h|0,176,12-h|0,14,h+2|0);}i=AJc(a.qV,24);Ct(a,f+79|0,g+34|0,176,14,i+1|0,16);return;default:Eq();}}CL().s(a,
b,c,d,e,f,g,h,i,$p);}
function Td(){var a=this;DZ.call(a);a.k7=null;a.so=null;}
function UU(a){var b,c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Wz(a);if(C()){break _;}b=0;while(b<9){c=Fo(a.k7,b);if(c!==null){d=a.H.e;$p=2;continue _;}b=b+1|0;}return;case 2:AGz(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=9)break;c=Fo(a.k7,b);if(c===null)continue;else{d=a.H.e;continue _;}}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function AWo(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=e+(f*3|0)|0;h=Fo(a.k7,g);if(h!==null)d[g]=h.bs;else d[g]=(-1);f=f+1|0;}e=e+1|0;}MQ(a.so,0,OQ(Sq(),c));}
function ATb(a){D4(a.bS,B(376),28,6,4210752);D4(a.bS,B(317),8,(a.eL-96|0)+2|0,4210752);}
function AFc(a,b){var c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.H.bi;d=B(621);$p=1;case 1:$z=ACB(c,d);if(C()){break _;}e=$z;BN(1.0,1.0,1.0,1.0);DI(a.H.bi,e);Ct(a,(a.bh-a.ez|0)/2|0,(a.bv-a.eL|0)/2|0,0,0,a.ez,a.eL);return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AHf(){var a=this;DZ.call(a);a.BE=null;a.xM=null;a.js=0;}
function A1r(a,b){var c=new AHf();ATs(c,a,b);return c;}
function ATs(a,b,c){var d,e,f,g;GV(a);a.js=0;a.BE=b;a.xM=c;a.od=0;a.js=c.fE()/9|0;a.eL=114+(a.js*18|0)|0;d=(a.js-4|0)*18|0;e=0;while(e<a.js){f=0;while(f<9){U(a.cH,DC(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){U(a.cH,DC(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=161+d|0;while(e<9){U(a.cH,DC(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function AYG(a){D4(a.bS,a.xM.uK(),8,6,4210752);D4(a.bS,B(317),8,(a.eL-96|0)+2|0,4210752);}
function AIm(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.H.bi;d=B(622);$p=1;case 1:$z=ACB(c,d);if(C()){break _;}e=$z;BN(1.0,1.0,1.0,1.0);DI(a.H.bi,e);f=(a.bh-a.ez|0)/2|0;g=(a.bv-a.eL|0)/2|0;Ct(a,f,g,0,0,a.ez,(a.js*18|0)+17|0);Ct(a,f,(g+(a.js*18|0)|0)+17|0,0,126,a.ez,96);return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function CF(){var a=this;Ee.call(a);a.Ed=null;a.fz=0;a.lK=0;a.w1=0;a.w0=0;}
var A$9=null;var A$$=null;var A$_=null;var A_a=null;var A_b=null;var A_c=null;var A_d=null;var A_e=null;var A_f=null;var A_g=null;var A_h=null;var A_i=null;var A_j=null;var A_k=null;var A_l=null;var A_m=null;var A_n=null;var A_o=null;var A_p=null;var A7X=null;function C5(a,b,c,d,e,f,g){var h=new CF();ZQ(h,a,b,c,d,e,f,g);return h;}
function ZQ(a,b,c,d,e,f,g,h){E3(a,b,c);a.Ed=d;a.fz=e;a.lK=f;a.w1=g;a.w0=h;}
function AKy(){var b,c;A$9=C5(B(623),0,B(623),16,16,0,0);A$$=C5(B(624),1,B(624),16,16,16,0);A$_=C5(B(625),2,B(625),16,16,32,0);A_a=C5(B(626),3,B(626),16,16,48,0);A_b=C5(B(627),4,B(627),16,16,64,0);A_c=C5(B(628),5,B(628),16,16,80,0);A_d=C5(B(629),6,B(629),16,16,96,0);A_e=C5(B(630),7,B(630),32,16,0,32);A_f=C5(B(631),8,B(631),32,16,32,32);A_g=C5(B(632),9,B(632),32,16,64,32);A_h=C5(B(633),10,B(633),32,16,96,32);A_i=C5(B(634),11,B(634),16,32,0,64);A_j=C5(B(635),12,B(635),32,32,0,128);A_k=C5(B(636),13,B(636),32,32,
32,128);A_l=C5(B(637),14,B(637),32,32,64,128);A_m=C5(B(638),15,B(638),32,32,96,128);A_n=C5(B(639),16,B(639),32,32,128,128);A_o=C5(B(640),17,B(640),64,32,0,96);A_p=C5(B(641),18,B(641),64,64,0,192);b=N(CF,19);c=b.data;c[0]=A$9;c[1]=A$$;c[2]=A$_;c[3]=A_a;c[4]=A_b;c[5]=A_c;c[6]=A_d;c[7]=A_e;c[8]=A_f;c[9]=A_g;c[10]=A_h;c[11]=A_i;c[12]=A_j;c[13]=A_k;c[14]=A_l;c[15]=A_m;c[16]=A_n;c[17]=A_o;c[18]=A_p;A7X=b;}
function Rf(){var a=this;CI.call(a);a.yT=null;a.yI=null;a.yK=null;a.wc=0;}
function ABz(a){U(a.bE,Pm(0,((a.bh/2|0)-155|0)+0|0,(a.bv/6|0)+96|0,B(642)));U(a.bE,Pm(1,((a.bh/2|0)-155|0)+160|0,(a.bv/6|0)+96|0,B(643)));}
function AKQ(a,b){var c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.yT;d=b.co?0:1;e=a.wc;$p=1;case 1:ALj(c,d,e);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function UF(a,b,c,d){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WR(a);if(C()){break _;}Dz(a,a.bS,a.yI,a.bh/2|0,70,16777215);Dz(a,a.bS,a.yK,a.bh/2|0,90,16777215);$p=2;case 2:AAU(a,b,c,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function M5(){Et.call(this);this.zg=null;}
function Ym(a){var b;b=new RM;RH(b,a.zg);return b;}
function I8(){Ey.call(this);}
function A_q(){var a=new I8();ANK(a);return a;}
function ANK(a){R(a);}
function Q3(){var a=this;E.call(a);a.jJ=0;a.pf=0;a.vh=null;a.vl=null;a.DN=0;}
function AF_(a,b){var c,d;c=0;while(c<=(3-a.jJ|0)){d=0;while(d<=(3-a.pf|0)){if(Rw(a,b,c,d,1))return 1;if(Rw(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function Rw(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.jJ&&i<a.pf)j=!e?a.vh.data[h+Bg(i,a.jJ)|0]:a.vh.data[((a.jJ-h|0)-1|0)+Bg(i,a.jJ)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function ACq(a,b){return I1(a.vl.bs,a.vl.m);}
function IP(a){return Bg(a.jJ,a.pf);}
function RM(){Hm.call(this);}
function Jz(a){Sg(a);return a.gx.fx;}
function K4(){Es.call(this);}
var A_r=0.0;var A_s=null;function AEL(){A_r=NaN;A_s=K($rt_doublecls());}
function QH(){}
function Pj(){}
function PU(){Et.call(this);this.mM=null;}
var A_t=null;function A1q(){var a=new PU();VZ(a);return a;}
function VZ(a){a.mM=A1S();}
function HZ(a){return ADm(a.mM);}
function U7(a,b){return AMF(a.mM,b,b)===A_t?0:1;}
function KD(a,b){return ABB(a.mM,b)!==A_t?0:1;}
function KU(a){return Y2(a.mM);}
function Wt(){A_t=new E;}
function PI(){}
function Mr(){}
function AEP(){var a=this;E7.call(a);a.jm=null;a.rK=null;a.CU=null;a.rQ=0;}
function A1S(){var a=new AEP();ANE(a);return a;}
function ANE(a){var b;b=null;a.CU=b;if(b===null){b=new NZ;b.ES=a;}a.rK=b;}
function AMF(a,b,c){var d,e;a.jm=L3(a,a.jm,b);d=So(a,b);e=PY(d,c);PY(d,c);a.rQ=a.rQ+1|0;return e;}
function ABB(a,b){var c;c=So(a,b);if(c===null)return null;a.jm=JG(a,a.jm,b);a.rQ=a.rQ+1|0;return c.my;}
function So(a,b){var c,d;c=a.jm;while(true){if(c===null)return null;d=L5(a.rK,b,c.lY);if(!d)break;c=d>=0?c.cX:c.cO;}return c;}
function L3(a,b,c){var d,e;if(b===null){b=new Jt;d=null;b.lY=c;b.my=d;b.ks=1;b.io=1;return b;}e=L5(a.rK,c,b.lY);if(!e)return b;if(e>=0)b.cX=L3(a,b.cX,c);else b.cO=L3(a,b.cO,c);EZ(b);return KV(b);}
function JG(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=L5(a.rK,c,b.lY);if(d<0)b.cO=JG(a,b.cO,c);else if(d>0)b.cX=JG(a,b.cX,c);else{if(b.cX===null)return b.cO;e=b.cO;b=b.cX;f=N(Jt,b.ks);g=0;while(b.cO!==null){h=f.data;i=g+1|0;h[g]=b;b=b.cO;g=i;}c=b.cX;while(g>0){h=f.data;g=g+(-1)|0;j=h[g];j.cO=c;EZ(j);c=KV(j);}b.cX=c;b.cO=e;EZ(b);}EZ(b);return KV(b);}
function Y2(a){var b,c,d;b=a.jm;c=null;while(b!==null){d=AIQ(b,0);c=b;b=d;}if(c!==null)return c.lY;b=new Iq;R(b);M(b);}
function ADm(a){return a.jm===null?0:a.jm.io;}
function NZ(){E.call(this);this.ES=null;}
function L5(a,b,c){return b===null?Qm(c,b):Qm(b,c);}
function K_(){E.call(this);}
var A_u=null;var A_v=null;function A_w(){var a=new K_();AMu(a);return a;}
function AMu(a){return;}
function Dd(b,c){BK(A_u,c,b);BK(A_v,b,c);}
function HQ(b,c){var d,e,f,g,h,$$je;d=null;a:{try{e=d;f=Cz(A_u,b);if(f!==null){e=d;g=N(E2,1);g.data[0]=K(FL);b=Sy(f,g);g=N(E,1);g.data[0]=c;d=SB(b,g);e=d;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){h=$$je;}else{throw $$e;}}BZ(h);d=e;}return d;}
function ADg(){A_u=CY();A_v=CY();Dd(K(HV),B(644));Dd(K(Ep),B(645));Dd(K(Hh),B(646));Dd(K(D_),B(647));Dd(K(Dp),B(648));Dd(K(In),B(649));Dd(K(HR),B(650));Dd(K(IN),B(651));Dd(K(Jr),B(652));Dd(K(HD),B(653));Dd(K(He),B(569));Dd(K(I6),B(654));Dd(K(Kt),B(655));Dd(K(Ia),B(656));Dd(K(Fn),B(657));}
function Im(){var a=this;E.call(a);a.e4=0;a.eN=0;a.e8=0;a.ou=0;a.ih=Long_ZERO;a.no=Long_ZERO;}
var A9A=Long_ZERO;function AY5(a,b){var c;if(!(b instanceof Im))return 0;c=b;return a.e4==c.e4&&a.eN==c.eN&&a.e8==c.e8&&a.ou==c.ou?1:0;}
function AXd(a){return (((((a.e4*128|0)*1024|0)+(a.e8*128|0)|0)+a.eN|0)*256|0)+a.ou|0;}
function AR6(a,b){a.ih=b;return a;}
function AH$(a,b){return Long_lt(a.ih,b.ih)?(-1):Long_gt(a.ih,b.ih)?1:Long_lt(a.no,b.no)?(-1):Long_le(a.no,b.no)?0:1;}
function Qm(a,b){return AH$(a,b);}
function ABm(){A9A=Long_ZERO;}
function Js(){}
function R6(){var a=this;E.call(a);a.ke=null;a.hS=null;a.gh=null;a.T=null;a.ko=null;a.eQ=0;a.fd=0;a.e9=null;}
function BJ(a,b,c){var d;if(b==a.eQ&&c==a.fd&&a.e9!==null)return 1;a:{b:{d=(b&31)+((c&31)*32|0)|0;if(a.T.data[d]!==null){if(a.T.data[d]===a.ke)break b;if(ALS(a.T.data[d],b,c))break b;}b=0;break a;}b=1;}return b;}
function AIK(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b==a.eQ&&c==a.fd&&a.e9!==null)return a.e9;d=(b&31)+((c&31)*32|0)|0;if(!BJ(a,b,c)){A31=1;if(a.T.data[d]!==null){AJe(a.T.data[d]);e=a.T.data[d];$p=1;continue _;}if(a.gh===null)f=null;else{try{e=a.gh;f=a.ko;$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){e=$$je;}else{throw $$e;}}BZ(e);f=null;}if(f===
null){if(a.hS!==null){e=a.hS;$p=3;continue _;}f=a.ke;}a.T.data[d]=f;if(a.T.data[d]!==null)Ir(a.T.data[d]);if(!a.T.data[d].fP){g=b+1|0;h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(BJ(a,g,h)){$p=6;continue _;}A31=0;}a.eQ=b;a.fd=c;a.e9=a.T.data[d];return a.T.data[d];case 1:XB(a,e);if(C()){break _;}Iw(a,a.T.data[d]);if(a.gh===null)f=null;else{try{e=a.gh;f=a.ko;$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz)
{e=$$je;}else{throw $$e;}}BZ(e);f=null;}if(f===null){if(a.hS!==null){e=a.hS;$p=3;continue _;}f=a.ke;}a.T.data[d]=f;if(a.T.data[d]!==null)Ir(a.T.data[d]);if(!a.T.data[d].fP){g=b+1|0;h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A31=0;a.eQ=b;a.fd=c;a.e9=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 2:a:{try{$z=AB6(e,f,b,c);if(C()){break _;}f=$z;if(f!==null)f.rf=a.ko.dG;break a;}catch($$e){$$je=Bh($$e);if
($$je instanceof Bz){e=$$je;}else{throw $$e;}}BZ(e);f=null;}if(f===null){if(a.hS!==null){e=a.hS;$p=3;continue _;}f=a.ke;}a.T.data[d]=f;if(a.T.data[d]!==null)Ir(a.T.data[d]);if(!a.T.data[d].fP){g=b+1|0;h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A31=0;a.eQ=b;a.fd=c;a.e9=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 3:$z=AEC(e,b,c);if(C()){break _;}f=$z;a.T.data[d]=f;if(a.T.data[d]!==null)Ir(a.T.data[d]);if
(!a.T.data[d].fP){g=b+1|0;h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A31=0;a.eQ=b;a.fd=c;a.e9=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 4:$z=AIK(a,g,c);if(C()){break _;}e=$z;if(!e.fP){h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=8;continue _;}}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A31=0;a.eQ=b;a.fd=c;a.e9=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 5:$z=AIK(a,
b,h);if(C()){break _;}e=$z;if(!e.fP){i=b+1|0;if(BJ(a,i,h)&&BJ(a,b,h)&&BJ(a,i,c)){$p=9;continue _;}}if(!BJ(a,g,h)){A31=0;a.eQ=b;a.fd=c;a.e9=a.T.data[d];return a.T.data[d];}$p=6;case 6:$z=AIK(a,g,h);if(C()){break _;}e=$z;if(!e.fP&&BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=10;continue _;}A31=0;a.eQ=b;a.fd=c;a.e9=a.T.data[d];return a.T.data[d];case 7:AAJ(a,a,b,c);if(C()){break _;}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A31=0;a.eQ=b;a.fd=c;a.e9=a.T.data[d];return a.T.data[d];}$p
=6;continue _;case 8:AAJ(a,a,g,c);if(C()){break _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A31=0;a.eQ=b;a.fd=c;a.e9=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 9:AAJ(a,a,b,h);if(C()){break _;}if(!BJ(a,g,h)){A31=0;a.eQ=b;a.fd=c;a.e9=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 10:AAJ(a,a,g,h);if(C()){break _;}A31=0;a.eQ=b;a.fd=c;a.e9=a.T.data[d];return a.T.data[d];default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function Iw(a,b){var c,$$je;a:{if(a.gh!==null){try{ACx(a.gh,a.ko,b);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Bz){c=$$je;}else{throw $$e;}}c.rN();}}}
function XB(a,b){var c,d,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.gh!==null){try{b.rf=a.ko.dG;c=a.gh;d=a.ko;$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof B3){c=$$je;}else{throw $$e;}}BZ(c);}return;case 1:a:{try{UH(c,d,b);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B3){c=$$je;}else{throw $$e;}}BZ(c);}return;default:Eq();}}CL().s(a,b,c,d,$p);}
function AAJ(a,b,c,d){var e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIK(a,c,d);if(C()){break _;}e=$z;if(!e.fP){e.fP=1;if(a.hS!==null){f=a.hS;$p=2;continue _;}}return;case 2:ACY(f,b,c,d);if(C()){break _;}PE(e);return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function AIt(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;e=0;if(c!==null){f=0;while(f<a.T.data.length){if(a.T.data[f]!==null&&IO(a.T.data[f],b))e=e+1|0;f=f+1|0;}}g=0;h=0;while(h<a.T.data.length){if(a.T.data[h]!==null){if(b&&!a.T.data[h].ov)Iw(a,a.T.data[h]);if(IO(a.T.data[h],b)){i=a.T.data[h];$p=1;continue _;}}h=h+1|0;}if(b&&a.gh===null)return 1;return 1;case 1:XB(a,i);if
(C()){break _;}a.T.data[h].dr=0;d=d+1|0;if(d==2&&!b)return 0;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}while(true){h=h+1|0;if(h>=a.T.data.length)break;if(a.T.data[h]===null)continue;if(b&&!a.T.data[h].ov)Iw(a,a.T.data[h]);if(IO(a.T.data[h],b)){i=a.T.data[h];continue _;}}if(b&&a.gh===null)return 1;return 1;case 2:Tz(c,f);if(C()){break _;}while(true){h=h+1|0;if(h>=a.T.data.length)break;if(a.T.data[h]===null)continue;if(b&&!a.T.data[h].ov)Iw(a,a.T.data[h]);if(IO(a.T.data[h],b)){i=a.T.data[h];$p
=1;continue _;}}if(b&&a.gh===null)return 1;return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function P_(a){return 0;}
function AZJ(a){return 1;}
function Nv(){}
function Tf(){E.call(this);this.qh=null;}
function LT(a,b,c){var d,e,f,g,h,i;d=b+30233088|0;e=c+30233088|0;f=BE(B(658));g=$rt_createCharArray(10);h=g.data;i=0;while(i<5){b=i*2|0;h[b]=Cr(B(658),d%f|0);d=d/f|0;h[b+1|0]=Cr(B(658),e%f|0);e=e/f|0;i=i+1|0;}return ATX(g);}
function AB6(a,b,c,d){var e,f,g,h,i,j,k,l,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=LT(a,c,d);f=new Bd;Bb(f);g=O(H(H(H(f,a.qh),B(17)),e));$p=1;case 1:$z=AGo(g);if(C()){break _;}h=$z;if(h===null)return null;try{f=KP(Mw(QI(h)));i=E6(f,B(659));j=E6(f,B(660));if(c==i&&d==j){$p=4;continue _;}k=LT(a,i,j);B$(CO(),O(H(Be(H(Be(H(H(H(H(H(Be(H(Be(H(Be(H(Be(H(H(H(BS(),B(661)),
e),B(662)),c),B(663)),d),B(664)),i),B(663)),j),B(665)),k),B(666)),e),B(667)),c),B(663)),d),B(237))));b=O(H(H(H(BS(),a.qh),B(17)),k));$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof B3){l=$$je;}else{throw $$e;}}b=CO();f=new Bd;Bb(f);B$(b,O(H(Be(H(Be(H(H(H(f,B(668)),e),B(669)),c),B(663)),d),B(237))));B$(CO(),B(670));$p=2;case 2:AGK(g);if(C()){break _;}BZ(l);return null;case 3:a:{try{AHT(g,b);if(C()){break _;}b=null;}catch($$e){$$je=Bh($$e);if($$je instanceof B3){l=$$je;break a;}else{throw $$e;}}return b;}b
=CO();f=new Bd;Bb(f);B$(b,O(H(Be(H(Be(H(H(H(f,B(668)),e),B(669)),c),B(663)),d),B(237))));B$(CO(),B(670));$p=2;continue _;case 4:a:{try{$z=ATW(b,f);if(C()){break _;}b=$z;}catch($$e){$$je=Bh($$e);if($$je instanceof B3){l=$$je;break a;}else{throw $$e;}}return b;}b=CO();f=new Bd;Bb(f);B$(b,O(H(Be(H(Be(H(H(H(f,B(668)),e),B(669)),c),B(663)),d),B(237))));B$(CO(),B(670));$p=2;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function UH(a,b,c){var d,e,f,g,$$je,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=F6();ABe(a,c,b,d);e=AYS(131072);a:{try{O2(d,APd(e));break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B3){f=$$je;}else{throw $$e;}}b=CO();d=new Bd;Bb(d);B$(b,O(H(Be(H(Be(H(d,B(671)),c.fR),B(663)),c.fL),B(672))));BZ(f);return;}b=new Bd;Bb(b);b=O(H(H(H(b,a.qh),B(17)),LT(a,c.fR,c.fL)));g=GX(e);$p=1;case 1:X8(b,g);if(C()){break _;}return;default:
Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function ABe(a,b,c,d){FD(d,B(659),b.fR);FD(d,B(660),b.fL);GU(d,B(673),c.dG);Hp(d,B(674),b.gf);Hp(d,B(346),b.gX.fS);Hp(d,B(675),b.gb.fS);Hp(d,B(676),b.g$.fS);Hp(d,B(677),b.dK);PR(d,B(678),b.fP);b.qo=0;ACd(new NY);}
function ATW(b,c){var d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:d=A0y(b,E6(c,B(659)),E6(c,B(660)));d.gf=Hi(c,B(674));d.gX=ADD(Hi(c,B(346)));d.gb=ADD(Hi(c,B(675)));d.g$=ADD(Hi(c,B(676)));d.dK=Hi(c,B(677));d.fP=QM(c,B(678));if(!H_(d.gX))d.gX=HO(d.gf.data.length);if(d.dK!==null&&H_(d.gb)){if(!H_(d.g$))d.g$=HO(d.gf.data.length);return d;}d.dK=$rt_createByteArray(256);d.gb=HO(d.gf.data.length);$p=1;case 1:AA3(d);if(C()){break _;}if(!H_(d.g$))d.g$=HO(d.gf.data.length);return d;default:
Eq();}}CL().s(b,c,d,$p);}
function AUZ(a){return;}
function AU$(a){return;}
function ACx(a,b,c){return;}
function Pt(){var a=this;E.call(a);a.a=null;a.wi=null;a.wj=null;a.wh=null;a.rW=null;a.wl=null;a.wm=null;a.wk=null;a.hT=null;a.o=null;a.g_=null;a.tC=null;a.tA=null;a.tB=null;a.tD=null;a.tE=null;a.Cj=null;}
function Vh(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;a.g_=U9(a,a.g_,b*4|0,0,c*4|0,5,17,5);e=0;while(e<4){f=0;while(f<4){g=0;while(g<16){h=a.g_.data;c=((e+0|0)*5|0)+f|0;i=((c+0|0)*17|0)+g|0;j=h[i+0|0];h=a.g_.data;b=((c+1|0)*17|0)+g|0;k=h[b+0|0];h=a.g_.data;l=((e+1|0)*5|0)+f|0;m=((l+0|0)*17|0)+g|0;n=h[m+0|0];h=a.g_.data;c=((l+1|0)*17|0)+g|0;o=h[c+0|0];p=(a.g_.data[i+1|0]-j)*0.125;q=(a.g_.data[b+1|0]-k)*0.125;r=(a.g_.data[m+1|0]-n)*0.125;s=(a.g_.data[c+1|0]-o)*0.125;t=0;while(t<8){u=(n-j)
*0.25;v=(o-k)*0.25;w=0;x=j;y=k;while(w<4){b=(w+(e*4|0)|0)<<11|(0+(f*4|0)|0)<<7;c=(g*8|0)+t|0;m=b|c;z=(y-x)*0.25;ba=0;c=S(c,64);bb=x;while(ba<4){i=0;if(c<0){J();i=A5G.b;}if(bb>0.0){J();i=A30.b;}d.data[m]=i<<24>>24;m=m+128|0;bb=bb+z;ba=ba+1|0;}x=x+u;y=y+v;w=w+1|0;}j=j+p;k=k+q;n=n+r;o=o+s;t=t+1|0;}g=g+1|0;}f=f+1|0;}e=e+1|0;}}
function X3(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=0;f=b*16|0;c=c*16|0;while(e<16){g=0;while(g<16){h=f+e|0;i=c+g|0;j=a.rW;k=h*0.03125;l=i*0.03125;m=Rg(j,k,l,0.0)+Cb(a.a)*0.2<=0.0?0:1;n=Rg(a.rW,l,109.0134,k)+Cb(a.a)*0.2<=3.0?0:1;o=Ef(a.wl,k*2.0,l*2.0)/3.0+3.0+Cb(a.a)*0.25|0;p=(-1);J();q=A3W.b;r=A3X.b;s=(((e*16|0)+g|0)*128|0)+128|0;t=127;while(t>=0){s=s+(-1)|0;if(t<=((0+D(a.a,6)|0)-1|0))d.data[s]=A3V.b<<24>>24;else{u=d.data;if(!u[s])p=(-1);else if(u[s]==A30.b){if(p==(-1)){if(o<=0){q=0;r=A30.b<<24>>24;}
else if(t>=60&&t<=65){q=A3W.b;r=A3X.b;if(n)q=0;if(n)r=A4g.b;if(m)q=A4f.b;if(m)r=A4f.b;}if(t<64&&!q)q=A5G.b;if(t<63){u[s]=r<<24>>24;p=o;}else{u[s]=q<<24>>24;p=o;}}else if(p>0){p=p+(-1)|0;u[s]=r<<24>>24;}}}t=t+(-1)|0;}g=g+1|0;}e=e+1|0;}}
function AEC(a,b,c){var d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=$rt_createByteArray(32768);e=AYl(a.o,d,b,c);Vh(a,b,c,d);X3(a,b,c,d);AL6(a,b,c,d);$p=1;case 1:AA3(e);if(C()){break _;}return e;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function AKj(a,b,c,d,e,f,g){HM(a,b,c,d,e,f,g,1.0+L(a.a)*6.0,0.0,0.0,(-1),(-1),0.5);}
function HM(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD;n=b*16|0;o=n+8|0;p=c*16|0;q=p+8|0;r=0.0;s=0.0;t=A0_(FE(a.a));if(l<=0)l=112-D(t,28)|0;u=0;if(k==(-1)){k=l/2|0;u=1;}v=D(t,l/2|0)+(l/4|0)|0;w=D(t,6)?0:1;x=S(h,1.0);y=h+2.0+16.0;y=y*y;z=o-16.0;ba=q-16.0;bb=o+16.0;bc=q+16.0;a:{while(true){if(k>=l)break a;bd=1.5+Bl(k*3.1415927410125732/l)*h*1.0;be=bd*m;bf=Bx(j);bg=Bl(j);e=e+Bx(i)*bf;f=f+bg;g=g+Bl(i)*bf;j=(!w
?j*0.699999988079071:j*0.9200000166893005)+s*0.10000000149011612;i=i+r*0.10000000149011612;bh=s*0.8999999761581421;bf=r*0.75;s=bh+(L(t)-L(t))*L(t)*2.0;r=bf+(L(t)-L(t))*L(t)*4.0;if(!u&&k==v&&x>0){h=L(t)*0.5+0.5;bh=i-1.5707963705062866;j=j/3.0;HM(a,b,c,d,e,f,g,h,bh,j,k,l,1.0);HM(a,b,c,d,e,f,g,L(t)*0.5+0.5,i+1.5707963705062866,j,k,l,1.0);return;}if(!(!u&&!D(t,4))){bi=e-o;bj=g-q;bk=l-k|0;if(bi*bi+bj*bj-bk*bk>y)break;bl=bd*2.0;if(e>=z-bl&&g>=ba-bl&&e<=bb+bl&&g<=bc+bl){bm=(I(e-bd)-n|0)-1|0;bn=(I(e+bd)-n|0)+1|0;bo
=I(f-be)-1|0;bp=I(f+be)+1|0;bq=(I(g-bd)-p|0)-1|0;br=(I(g+bd)-p|0)+1|0;if(bm<0)bm=0;if(bn>16)bn=16;if(bo<1)bo=1;if(bp>120)bp=120;if(bq<0)bq=0;if(br>16)br=16;bs=0;bt=bm;while(!bs&&bt<bn){bu=bq;while(!bs&&bu<br){bv=bp+1|0;while(!bs){bw=S(bv,bo-1|0);if(bw<0)break;bx=(((bt*16|0)+bu|0)*128|0)+bv|0;if(bv>=0&&bv<128){by=d.data;bz=by[bx];J();if(!(bz!=A4Z.b&&by[bx]!=A5G.b))bs=1;if(bw&&bt!=bm&&bt!=(bn-1|0)&&bu!=bq&&bu!=(br-1|0))bv=bo;}bv=bv+(-1)|0;}bu=bu+1|0;}bt=bt+1|0;}if(!bs){while(bm<bn){bA=((bm+n|0)+0.5-e)/bd;bi=bA
*bA;bx=bq;while(bx<br){bB=((bx+p|0)+0.5-g)/bd;bC=(((bm*16|0)+bx|0)*128|0)+bp|0;bw=0;bD=bp-1|0;bB=bB*bB;while(bD>=bo){bl=(bD+0.5-f)/be;if(bl>(-0.7)&&bi+bl*bl+bB<1.0){by=d.data;bz=by[bC];J();if(bz==A3W.b)bw=1;if(!(bz!=A30.b&&bz!=A3X.b&&bz!=A3W.b)){if(bD<10)by[bC]=A40.b<<24>>24;else{by[bC]=0;if(bw){bz=bC-1|0;if(by[bz]==A3X.b)by[bz]=A3W.b<<24>>24;}}}}bC=bC+(-1)|0;bD=bD+(-1)|0;}bx=bx+1|0;}bm=bm+1|0;}if(u)break a;}}}k=k+1|0;}return;}}
function AL6(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;FE(a.a);FE(a.a);e=b-8|0;f=b+8|0;g=c-8|0;h=c+8|0;while(e<=f){i=g;while(i<=h){j=D(a.a,D(a.a,D(a.a,40)+1|0)+1|0);if(D(a.a,15))j=0;k=0;while(k<j){l=(e*16|0)+D(a.a,16)|0;m=D(a.a,D(a.a,120)+8|0);n=(i*16|0)+D(a.a,16)|0;o=1;if(!D(a.a,4)){AKj(a,b,c,d,l,m,n);o=o+D(a.a,4)|0;}p=0;while(p<o){q=L(a.a)*3.1415927410125732*2.0;r=(L(a.a)-0.5)*2.0/8.0;HM(a,b,c,d,l,m,n,L(a.a)*2.0+L(a.a),q,r,0,0,1.0);p=p+1|0;}k=k+1|0;}i=i+1|0;}e=e+1|0;}}
function U9(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(b===null)b=$rt_createDoubleArray(Bg(Bg(f,g),h));a.tD=GO(a.wm,a.tD,c,d,e,f,1,h,1.0,0.0,1.0);a.tE=GO(a.wk,a.tE,c,d,e,f,1,h,100.0,0.0,100.0);a.tC=GO(a.wh,a.tC,c,d,e,f,g,h,8.555150000000001,4.277575000000001,8.555150000000001);a.tA=GO(a.wi,a.tA,c,d,e,f,g,h,684.412,684.412,684.412);a.tB=GO(a.wj,a.tB,c,d,e,f,g,h,684.412,684.412,684.412);i=0;j=0;k=0;l=g;d=g-4|0;m=l/2.0;while(k<f){n=0;while(n<h){o=(a.tD.data[j]+256.0)/512.0;if(o>1.0)o=1.0;p=a.tE.data[j]
/8000.0;if(p<0.0)p= -p;q=p*3.0-3.0;if(q>=0.0){if(q>1.0)q=1.0;q=q/6.0;}else{o=q/2.0;if(o<(-1.0))o=(-1.0);q=o/1.4/2.0;o=0.0;}r=o+0.5;s=m+q*l/16.0*4.0;j=j+1|0;t=0;while(t<g){p=t;u=(p-s)*12.0/r;if(u<0.0)u=u*4.0;v=a.tA.data[i]/512.0;q=a.tB.data[i]/512.0;w=(a.tC.data[i]/10.0+1.0)/2.0;if(w>=0.0)v=w>1.0?q:v+(q-v)*w;o=v-u;if(t>d){x=(t-d|0)/3.0;o=o*(1.0-x)+(-10.0)*x;}if(p<0.0){x=(0.0-p)/4.0;if(x<0.0)x=0.0;if(x>1.0)x=1.0;o=o*(1.0-x)+(-10.0)*x;}b.data[i]=o;i=i+1|0;t=t+1|0;}n=n+1|0;}k=k+1|0;}return b;}
function ACY(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=c*16|0;f=d*16|0;Ls(a.a,a.o.kk);g=Long_add(Long_mul(Long_div(FE(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));h=Long_add(Long_mul(Long_div(FE(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));Ls(a.a,Long_xor(Long_add(Long_mul(Long_fromInt(c),
g),Long_mul(Long_fromInt(d),h)),a.o.kk));i=0;if(i<4){j=(e+D(a.a,16)|0)+8|0;k=D(a.a,128);l=(f+D(a.a,16)|0)+8|0;b=AQC();m=a.o;n=a.a;$p=1;continue _;}o=0;if(o<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A3X.b,32);m=a.o;n=a.a;$p=2;continue _;}j=0;if(j<10){o=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4g.b,32);m=a.o;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4j.b,16);m=a.o;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+D(a.a,
16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4k.b,8);m=a.o;n=a.a;$p=5;continue _;}if(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4l.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B9;J();Cc(b,A51.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Ef(a.hT,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=FY();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Ek(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c
=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4b.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4c.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4d.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4e.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50)
{l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A4Z.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=a.o;n=a.a;$p=15;continue _;case 1:TF(b,m,n,j,k,l);if(C()){break _;}i=i+1|0;if(i<4){j=(e+D(a.a,16)|0)+8|0;k=D(a.a,128);l=(f+D(a.a,16)|0)+8|0;b=AQC();m=a.o;n=a.a;continue _;}o=0;if(o<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A3X.b,32);m=a.o;n
=a.a;$p=2;continue _;}j=0;if(j<10){o=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4g.b,32);m=a.o;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4j.b,16);m=a.o;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4k.b,8);m=a.o;n=a.a;$p=5;continue _;}if(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4l.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,
16);k=f+D(a.a,16)|0;b=new B9;J();Cc(b,A51.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Ef(a.hT,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=FY();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Ek(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4b.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4c.b);m=a.o;n=a.a;$p=11;continue _;}if
(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4d.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4e.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A4Z.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=
a.o;n=a.a;$p=15;continue _;case 2:Xn(b,m,n,j,k,l);if(C()){break _;}o=o+1|0;if(o<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A3X.b,32);m=a.o;n=a.a;continue _;}j=0;if(j<10){o=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4g.b,32);m=a.o;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4j.b,16);m=a.o;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4k.b,8);m=a.o;n=a.a;$p=5;continue _;}if
(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4l.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B9;J();Cc(b,A51.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Ef(a.hT,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=FY();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Ek(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,
A4b.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4c.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4d.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4e.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,
A4Z.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=a.o;n=a.a;$p=15;continue _;case 3:Xn(b,m,n,o,k,l);if(C()){break _;}j=j+1|0;if(j<10){o=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4g.b,32);m=a.o;n=a.a;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4j.b,16);m=a.o;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)
|0;b=new B9;J();Cc(b,A4k.b,8);m=a.o;n=a.a;$p=5;continue _;}if(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4l.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B9;J();Cc(b,A51.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Ef(a.hT,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=FY();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Ek(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)
|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4b.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4c.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4d.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4e.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p
=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A4Z.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=a.o;n=a.a;$p=15;continue _;case 4:Xn(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4j.b,16);m=a.o;n=a.a;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4k.b,8);m=a.o;n=a.a;$p=5;continue _;}if
(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4l.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B9;J();Cc(b,A51.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Ef(a.hT,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=FY();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Ek(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,
A4b.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4c.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4d.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4e.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,
A4Z.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=a.o;n=a.a;$p=15;continue _;case 5:Xn(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4k.b,8);m=a.o;n=a.a;continue _;}if(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B9;J();Cc(b,A4l.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|
0;b=new B9;J();Cc(b,A51.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Ef(a.hT,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=FY();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Ek(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4b.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4c.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,
4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4d.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4e.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A4Z.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=a.o;n=a.a;$p
=15;continue _;case 6:Xn(b,m,n,c,j,k);if(C()){break _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B9;J();Cc(b,A51.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Ef(a.hT,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=FY();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Ek(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4b.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+
D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4c.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4d.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4e.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A4Z.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=a.o;n=a.a;$p=15;continue _;case 7:Xn(b,m,n,c,j,k);if(C()){break _;}c=(Ef(a.hT,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=FY();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Ek(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4b.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=
(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4c.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4d.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4e.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A4Z.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=a.o;n=a.a;$p=15;continue _;case 8:$z=AGp(q,l,p);if(C()){break _;}d=$z;$p=9;case 9:Z6(m,b,n,l,d,p);if(C()){break _;}k=k+1|0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Ek(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4b.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,
16)|0)+8|0;b=new BL;J();BM(b,A4c.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4d.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4e.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A4Z.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,
112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=a.o;n=a.a;$p=15;continue _;case 10:Yi(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4b.b);m=a.o;n=a.a;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4c.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4d.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,
8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4e.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A4Z.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=a.o;n=a.a;$p=15;continue _;case 11:Yi(b,m,n,c,l,p);if(C()){break _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)
+8|0;b=new BL;J();BM(b,A4d.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4e.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A4Z.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=a.o;n=a.a;$p=15;continue _;case 12:Yi(b,m,n,c,l,p);if(C()){break _;}if
(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4e.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A4Z.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=a.o;n=a.a;$p=15;continue _;case 13:Yi(b,m,n,c,l,p);if(C()){break _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r
=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A4Z.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=a.o;n=a.a;$p=15;continue _;case 14:AGI(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A4Z.b);m=a.o;n=a.a;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,
A40.b);m=a.o;n=a.a;$p=15;case 15:AGI(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A40.b);m=a.o;n=a.a;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ARZ(a){return 0;}
function RU(){var a=this;E.call(a);a.b8=null;a.kL=0;a.fg=0;a.fh=0;a.eV=0;a.eD=0;a.ed=0;}
function AIS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.kL;while(c<=a.eV){d=a.fh;while(d<=a.ed){a:{if(D8(b,c,0,d)){e=a.fg;while(true){if(e>a.eD)break a;if(e>=0&&e<128){f=a.b8;$p=1;continue _;}e=e+1|0;}}}d=d+1|0;}c=c+1|0;}return;case 1:$z=AF4(b,f,c,e,d);if(C()){break _;}g=$z;$p=2;case 2:$z=X4(b,
c,e,d);if(C()){break _;}h=$z;J();i=A5D.data[h];if(!i)i=1;j=0;if(a.b8===A9y){$p=3;continue _;}if(a.b8===A9z)j=A5F.data[h];if(i>=15&&!j){j=0;if(g!=j){f=a.b8;$p=10;continue _;}b:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eV)break b;d=a.fh;}if(!D8(b,c,0,d))continue;else break;}e=a.fg;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;}f=a.b8;h=c-1|0;$p=4;continue _;case 3:$z=Vi(b,c,e,d);if(C()){break _;}h=$z;if(h)j=15;if(i>=15&&!j){j=0;if(g!=j){f=a.b8;$p
=10;continue _;}c:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eV)break c;d=a.fh;}if(!D8(b,c,0,d))continue;else break;}e=a.fg;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;}f=a.b8;h=c-1|0;$p=4;case 4:$z=AF4(b,f,h,e,d);if(C()){break _;}k=$z;f=a.b8;h=c+1|0;$p=5;case 5:$z=AF4(b,f,h,e,d);if(C()){break _;}l=$z;f=a.b8;h=e-1|0;$p=6;case 6:$z=AF4(b,f,c,h,d);if(C()){break _;}m=$z;f=a.b8;h=e+1|0;$p=7;case 7:$z=AF4(b,f,c,h,d);if(C()){break _;}n=$z;f=a.b8;h
=d-1|0;$p=8;case 8:$z=AF4(b,f,c,e,h);if(C()){break _;}o=$z;f=a.b8;h=d+1|0;$p=9;case 9:$z=AF4(b,f,c,e,h);if(C()){break _;}p=$z;if(l<=k)l=k;if(m<=l)m=l;if(n<=m)n=m;if(o<=n)o=n;if(p<=o)p=o;h=p-i|0;if(h<0)h=0;if(j<=h)j=h;if(g!=j){f=a.b8;$p=10;continue _;}d:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eV)break d;d=a.fh;}if(!D8(b,c,0,d))continue;else break;}e=a.fg;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;case 10:AG8(b,f,c,e,d,j);if(C()){break _;}k
=j-1|0;if(k<0)k=0;f=a.b8;h=c-1|0;$p=11;case 11:AKx(b,f,h,e,d,k);if(C()){break _;}f=a.b8;h=e-1|0;$p=12;case 12:AKx(b,f,c,h,d,k);if(C()){break _;}f=a.b8;h=d-1|0;$p=13;case 13:AKx(b,f,c,e,h,k);if(C()){break _;}h=c+1|0;if(h>=a.eV){f=a.b8;$p=14;continue _;}h=e+1|0;if(h>=a.eD){f=a.b8;$p=15;continue _;}h=d+1|0;if(h>=a.ed){f=a.b8;$p=16;continue _;}e:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eV)break e;d=a.fh;}if(!D8(b,c,0,d))continue;else break;}e=a.fg;}if(e<0)continue;if(e>=
128)continue;else{f=a.b8;$p=1;continue _;}}return;case 14:AKx(b,f,h,e,d,k);if(C()){break _;}h=e+1|0;if(h>=a.eD){f=a.b8;$p=15;continue _;}h=d+1|0;if(h>=a.ed){f=a.b8;$p=16;continue _;}a:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eV)break a;d=a.fh;}if(!D8(b,c,0,d))continue;else break;}e=a.fg;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;case 15:AKx(b,f,c,h,d,k);if(C()){break _;}h=d+1|0;if(h>=a.ed){f=a.b8;$p=16;continue _;}f:while(true){e=e+1|0;while
(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eV)break f;d=a.fh;}if(!D8(b,c,0,d))continue;else break;}e=a.fg;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;case 16:AKx(b,f,c,e,h,k);if(C()){break _;}g:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eV)break g;d=a.fh;}if(!D8(b,c,0,d))continue;else break;}e=a.fg;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AGk(a,b,c,d,e,f,g){if(b>=a.kL&&c>=a.fg&&d>=a.fh&&e<=a.eV&&f<=a.eD&&g<=a.ed)return 1;if(b>=(a.kL-1|0)&&c>=(a.fg-1|0)&&d>=(a.fh-1|0)&&e<=(a.eV+1|0)&&f<=(a.eD+1|0)&&g<=(a.ed+1|0)){if(b<a.kL)a.kL=b;if(c<a.fg)a.fg=c;if(d<a.fh)a.fh=d;if(e>a.eV)a.eV=e;if(f>a.eD)a.eD=f;if(g>a.ed)a.ed=g;return 1;}return 0;}
function O_(){}
function ABi(){var a=this;G1.call(a);a.hq=0;a.dE=null;}
function APd(a){var b=new ABi();AWJ(b,a);return b;}
function AWJ(a,b){Mn(a,b);a.dE=$rt_createByteArray(8);}
function Oc(a,b,c,d){var e;if(b!==null){a.jo.iw(b,c,d);a.hq=a.hq+d|0;return;}e=new EG;R(e);M(e);}
function I9(a,b){a.jo.oW(b);a.hq=a.hq+1|0;}
function AJR(a,b){QV(a,$rt_doubleToLongBits(b));}
function AJM(a,b){Ib(a,$rt_floatToIntBits(b));}
function Ib(a,b){a.dE.data[0]=b>>24<<24>>24;a.dE.data[1]=b>>16<<24>>24;a.dE.data[2]=b>>8<<24>>24;a.dE.data[3]=b<<24>>24;a.jo.iw(a.dE,0,4);a.hq=a.hq+4|0;}
function QV(a,b){a.dE.data[0]=Long_shr(b,56).lo<<24>>24;a.dE.data[1]=Long_shr(b,48).lo<<24>>24;a.dE.data[2]=Long_shr(b,40).lo<<24>>24;a.dE.data[3]=b.hi<<24>>24;a.dE.data[4]=Long_shr(b,24).lo<<24>>24;a.dE.data[5]=Long_shr(b,16).lo<<24>>24;a.dE.data[6]=Long_shr(b,8).lo<<24>>24;a.dE.data[7]=b.lo<<24>>24;a.jo.iw(a.dE,0,8);a.hq=a.hq+8|0;}
function VQ(a,b){a.dE.data[0]=b>>8<<24>>24;a.dE.data[1]=b<<24>>24;a.jo.iw(a.dE,0,2);a.hq=a.hq+2|0;}
function AIG(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function Tj(a,b){var c,d,e;c=ABq(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new B3;Bp(b,B(679));M(b);}d=c.lo;e=$rt_createByteArray(d+2|0);Oc(a,e,0,AJy(a,b,e,AIG(a,d,e,0)));}
function ABq(a,b){var c,d,e,f;c=0;d=BE(b);e=0;while(e<d){f=Cr(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function AJy(a,b,c,d){var e,f,g,h,i,j,k;e=BE(b);f=0;while(f<e){g=Cr(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function ABc(){E.call(this);}
function A_x(){var a=new ABc();AR0(a);return a;}
function AR0(a){return;}
function LD(){E.call(this);}
var A_y=null;var A_z=null;function A_A(){var a=new LD();WY(a);return a;}
function WY(a){return;}
function Xt(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.wt=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.sR=Long_ZERO;c.r7=0;return;}g=0;if(f)e=Long_or(e,new Long(0, 1048576));else{e=Long_shl(e,1);while(Long_eq(Long_and(e,new Long(0, 1048576)),Long_ZERO)){e=Long_shl(e,1);f=f+(-1)|0;g=g+1|0;}}h=AIW(A_z,f);if(h<0)h= -h-2|0;i=12+(f-A_z.data[h]|0)|0;j=NH(e,A_y.data[h],i);if(Long_ge(j,
new Long(2808348672, 232830643))){h=h+1|0;i=12+(f-A_z.data[h]|0)|0;j=NH(e,A_y.data[h],i);}k=Long_shru(A_y.data[h],(63-i|0)-g|0);l=Long_shr(Long_add(k,Long_fromInt(1)),1);m=Long_shr(k,1);if(Long_eq(e,new Long(0, 1048576)))m=Long_shr(m,2);n=Long_fromInt(10);while(Long_le(n,m)){n=Long_mul(n,Long_fromInt(10));}if(Long_ge(Long_rem(j,n),Long_div(m,Long_fromInt(2))))n=Long_div(n,Long_fromInt(10));o=Long_fromInt(1);while(Long_le(o,l)){o=Long_mul(o,Long_fromInt(10));}if(Long_gt(Long_sub(o,Long_rem(j,o)),Long_div(l,Long_fromInt(2))))o
=Long_div(o,Long_fromInt(10));f=Long_compare(n,o);e=f>0?Long_mul(Long_div(j,n),n):f<0?Long_add(Long_mul(Long_div(j,o),o),o):Long_mul(Long_div(Long_add(j,Long_div(o,Long_fromInt(2))),o),o);if(Long_ge(e,new Long(2808348672, 232830643))){h=h+1|0;e=Long_div(e,Long_fromInt(10));}else if(Long_lt(e,new Long(1569325056, 23283064))){h=h+(-1)|0;e=Long_mul(e,Long_fromInt(10));}c.sR=e;c.r7=h-330|0;}
function NH(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,e),Long_mul(k,
f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_shl(Long_mul(l,h),32+d|0),Long_shl(Long_add(Long_mul(l,g),Long_mul(k,h)),16+d|0)),Long_shl(Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h)),d));return Long_add(d>16?Long_add(o,Long_shl(n,d-16|0)):Long_add(o,Long_shru(n,16-d|0)),Long_shru(m,32-d|0));}
function WW(){var b,c,d,e,f,g,h,i,j,k;A_y=$rt_createLongArray(660);A_z=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=A_y.data;g=d+330|0;f[g]=Kr(e,Long_fromInt(80));A_z.data[g]=c;e=Kr(e,Long_fromInt(10));h=ADN(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Long_gt(e,new Long(3435973836, 214748364)))
{e=Long_shr(e,1);j=j+1|0;d=d+(-1)|0;}k=Long_mul(e,Long_fromInt(10));b=j<=0?k:Long_add(k,Long_shr(Long_mul(Long_and(b,Long_fromInt((1<<j)-1|0)),Long_fromInt(10)),j));f=A_y.data;g=(330-i|0)-1|0;f[g]=Kr(b,Long_fromInt(80));A_z.data[g]=d;i=i+1|0;}}
function GD(){E.call(this);}
function AHp(){var a=this;GD.call(a);a.ml=null;a.p0=0;}
function F7(a,b){var c=new AHp();ANO(c,a,b);return c;}
function ANO(a,b,c){var d;a.p0=c;a.ml=N(MX,c);d=0;while(d<c){a.ml.data[d]=A1d(b);d=d+1|0;}}
function Ef(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.p0){d=d+AB7(a.ml.data[f],b*e,c*e)/e;e=e/2.0;f=f+1|0;}return d;}
function Rg(a,b,c,d){var e,f,g;e=0.0;f=1.0;g=0;while(g<a.p0){e=e+Ju(a.ml.data[g],b*f,c*f,d*f)/f;f=f/2.0;g=g+1|0;}return e;}
function GO(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o;if(b===null)b=$rt_createDoubleArray(Bg(Bg(f,g),h));else{l=0;while(true){m=b.data;if(l>=m.length)break;m[l]=0.0;l=l+1|0;}}n=1.0;o=0;while(o<a.p0){AKR(a.ml.data[o],b,c,d,e,f,g,h,i*n,j*n,k*n,n);n=n/2.0;o=o+1|0;}return b;}
function Yk(){var a=this;E.call(a);a.kW=null;a.lI=0;a.BU=Long_ZERO;}
function ANi(a,b,c){var d=new Yk();ASO(d,a,b,c);return d;}
function ASO(a,b,c,d){a.kW=b;a.lI=c;a.BU=d;}
function MX(){var a=this;GD.call(a);a.bO=null;a.s3=0.0;a.vC=0.0;a.ua=0.0;}
function A_B(){var a=new MX();AZP(a);return a;}
function A1d(a){var b=new MX();U$(b,a);return b;}
function AZP(a){U$(a,new De);}
function U$(a,b){var c,d,e,f,g;a.bO=$rt_createIntArray(512);a.s3=Cb(b)*256.0;a.vC=Cb(b)*256.0;a.ua=Cb(b)*256.0;c=0;while(c<256){d=a.bO.data;e=c+1|0;d[c]=c;c=e;}c=0;while(c<256){f=D(b,256-c|0)+c|0;g=a.bO.data[c];a.bO.data[c]=a.bO.data[f];a.bO.data[f]=g;a.bO.data[c+256|0]=a.bO.data[c];c=c+1|0;}}
function Ju(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;e=b+a.s3;f=c+a.vC;g=d+a.ua;h=e|0;i=f|0;j=g|0;if(e<h)h=h+(-1)|0;if(f<i)i=i+(-1)|0;if(g<j)j=j+(-1)|0;k=h&255;l=i&255;m=j&255;c=e-h;d=f-i;n=g-j;o=c*c*c*(c*(c*6.0-15.0)+10.0);p=d*d*d*(d*(d*6.0-15.0)+10.0);q=n*n*n*(n*(n*6.0-15.0)+10.0);r=a.bO.data[k]+l|0;s=a.bO.data[r]+m|0;t=a.bO.data[r+1|0]+m|0;u=a.bO.data[k+1|0]+l|0;v=a.bO.data[u]+m|0;w=a.bO.data[u+1|0]+m|0;e=C8(a,a.bO.data[s],c,d,n);k=a.bO.data[v];x=c-1.0;b=Dn(a,o,e,C8(a,k,x,d,n));k=a.bO.data[t];e
=d-1.0;b=Dn(a,p,b,Dn(a,o,C8(a,k,c,e,n),C8(a,a.bO.data[w],x,e,n)));k=a.bO.data[s+1|0];f=n-1.0;return Dn(a,q,b,Dn(a,p,Dn(a,o,C8(a,k,c,d,f),C8(a,a.bO.data[v+1|0],x,d,f)),Dn(a,o,C8(a,a.bO.data[t+1|0],c,e,f),C8(a,a.bO.data[w+1|0],x,e,f))));}
function Dn(a,b,c,d){return c+b*(d-c);}
function C8(a,b,c,d,e){var f,g;f=b&15;g=f>=8?d:c;if(f>=4)d=f!=12&&f!=14?e:c;if(f&1)g= -g;if(f&2)d= -d;return g+d;}
function AB7(a,b,c){return Ju(a,b,c,0.0);}
function AU3(a,b,c,d){return Ju(a,b,c,d);}
function AKR(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;m=0;n=1.0/l;o=(-1);p=0.0;q=0.0;r=0.0;s=0.0;t=0;while(t<f){u=(c+t|0)*i+a.s3;v=u|0;if(u<v)v=v+(-1)|0;w=v&255;u=u-v;x=u*u*u*(u*(u*6.0-15.0)+10.0);y=0;v=w+1|0;z=u-1.0;while(y<h){ba=(e+y|0)*k+a.ua;bb=ba|0;if(ba<bb)bb=bb+(-1)|0;bc=bb&255;bd=ba-bb;be=bd*bd*bd*(bd*(bd*6.0-15.0)+10.0);bf=0;ba=bd-1.0;while(bf<g){bg=(d+bf|0)*j+a.vC;bh=bg|0;if(bg<bh)bh=bh+(-1)|0;bi=bh&255;l=bg-bh;bj=l*l*l*(l*(l
*6.0-15.0)+10.0);if(bf&&bi==o)bi=o;else{bk=a.bO.data[w]+bi|0;bl=a.bO.data[bk]+bc|0;bm=a.bO.data[bk+1|0]+bc|0;bn=a.bO.data[v]+bi|0;bo=a.bO.data[bn]+bc|0;bp=a.bO.data[bn+1|0]+bc|0;p=Dn(a,x,C8(a,a.bO.data[bl],u,l,bd),C8(a,a.bO.data[bo],z,l,bd));bn=a.bO.data[bm];bq=l-1.0;q=Dn(a,x,C8(a,bn,u,bq,bd),C8(a,a.bO.data[bp],z,bq,bd));r=Dn(a,x,C8(a,a.bO.data[bl+1|0],u,l,ba),C8(a,a.bO.data[bo+1|0],z,l,ba));s=Dn(a,x,C8(a,a.bO.data[bm+1|0],u,bq,ba),C8(a,a.bO.data[bp+1|0],z,bq,ba));}br=b.data;bs=Dn(a,be,Dn(a,bj,p,q),Dn(a,bj,
r,s));bn=m+1|0;br[m]=br[m]+bs*n;bf=bf+1|0;m=bn;o=bi;}y=y+1|0;}t=t+1|0;}}
function Qy(){E.call(this);this.fS=null;}
function HO(a){var b=new Qy();AEr(b,a);return b;}
function ADD(a){var b=new Qy();ASf(b,a);return b;}
function AEr(a,b){a.fS=$rt_createByteArray(b>>1);}
function ASf(a,b){a.fS=b;}
function G5(a,b,c,d){var e,f;e=b<<11|d<<7|c;f=e>>1;return !(e&1)?a.fS.data[f]&15:a.fS.data[f]>>4&15;}
function DQ(a,b,c,d,e){var f,g;f=b<<11|d<<7|c;g=f>>1;if(!(f&1))a.fS.data[g]=(a.fS.data[g]&240|e&15)<<24>>24;else a.fS.data[g]=(a.fS.data[g]&15|(e&15)<<4)<<24>>24;}
function H_(a){return a.fS===null?0:1;}
function Ei(){Ee.call(this);}
var A_C=null;var A4K=null;var A_D=null;var A_E=null;function AHI(){var b,c,d;b=new Ei;E3(b,B(680),0);A_C=b;b=new Ei;E3(b,B(681),1);A4K=b;b=new Ei;E3(b,B(682),2);A_D=b;c=N(Ei,3);d=c.data;d[0]=A_C;d[1]=A4K;d[2]=A_D;A_E=c;}
function RA(){Es.call(this);}
var A_F=null;function Kr(b,c){return Long_udiv(b, c);}
function ADN(b,c){return Long_urem(b, c);}
function AGH(){A_F=K($rt_longcls());}
function Qh(){E.call(this);this.zu=null;}
function AMw(a){Cx(a.zu,Jk(1));}
function AUS(a){AMw(a);}
function Qe(){E.call(this);this.zV=null;}
function AMC(a){Cx(a.zV,Jk(0));}
function AQz(a){AMC(a);}
function Oq(){E.call(this);this.yp=null;}
function TG(a){Cx(a.yp,Jk(1));}
function AX0(a){TG(a);}
function Ou(){E.call(this);this.yG=null;}
function AMo(a){Cx(a.yG,Jk(0));}
function AWR(a){AMo(a);}
function Oo(){var a=this;E.call(a);a.zz=null;a.sX=null;}
function X1(a){Cx(a.zz,a.sX.result===null?A_D:!(QQ(a.sX.result)?1:0)?A_C:A4K);}
function AVS(a){X1(a);}
function Op(){E.call(this);this.AJ=null;}
function XE(a){Cx(a.AJ,A_D);}
function AT_(a){XE(a);}
function Or(){var a=this;E.call(a);a.A_=null;a.AP=null;a.wo=null;a.tq=null;a.yf=0;a.zO=0;a.uU=null;}
function AHj(a){var b,c;b=a.A_.result;if(b!==null&&b.key!==null&&b.value!==null){c=$rt_str(ARE(b.key));if(c!==null&&Lh(c,a.tq)&&!(!a.yf&&R1(c,47,BE(a.tq)+1|0)!=(-1))){if(!(QQ(b.value)?1:0))EK(a.uU,ANi(c,0,Long_add(new Long(596067632, 383),Long_fromInt(ASh(b.value)))));else if(a.zO)EK(a.uU,ANi(c,1,Long_fromInt(-1)));}b.continue();return;}Cx(a.AP,CG(a.wo.data[0]));}
function AWW(a){AHj(a);}
function Os(){var a=this;E.call(a);a.Ak=null;a.uq=null;}
function AFT(a){Cx(a.Ak,CG(a.uq.data[0]<=0?(-1):a.uq.data[0]));}
function ASZ(a){AFT(a);}
function DV(){E.call(this);}
function Ek(a,b,c,d){return;}
function Ok(){DV.call(this);}
function FY(){var a=new Ok();AWE(a);return a;}
function AWE(a){return;}
function Z6(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=D(c,3)+4|0;h=1;if(e>=1){i=e+g|0;if((i+1|0)<=128){j=(e+1|0)+g|0;k=j-2|0;l=e;a:while(true){if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;while(o<=(d+n|
0)&&h){p=f-n|0;while(p<=(f+n|0)&&h){if(l>=0&&l<128)break a;h=0;p=p+1|0;}o=o+1|0;}l=l+1|0;}$p=7;continue _;}}return 0;case 1:$z=X4(b,d,m,f);if(C()){break _;}k=$z;J();if(!(k!=A3W.b&&k!=A3X.b)&&e<((128-g|0)-1|0)){k=A3X.b;$p=2;continue _;}return 0;case 2:AGb(b,d,m,f,k);if(C()){break _;}k=(e-3|0)+g|0;b:while(true){if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;while(r<=l){j=r-d|0;s=m;while(s<=h){t=s-f|0;if(GW(j)!=q)break b;if(GW(t)!=q)break b;if(D(c,2)
&&o)break b;s=s+1|0;}r=r+1|0;}k=k+1|0;}u=A5C.data;$p=5;continue _;case 3:$z=X4(b,d,o,f);if(C()){break _;}m=$z;if(m&&m!=A38.b){k=k+1|0;if(k>=g)return 1;o=e+k|0;continue _;}m=A37.b;$p=4;case 4:AGb(b,d,o,f,m);if(C()){break _;}k=k+1|0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;case 5:$z=X4(b,r,k,s);if(C()){break _;}t=$z;if(!u[t]){t=A38.b;$p=6;continue _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f
+q|0;}j=r-d|0;s=m;}t=s-f|0;if(GW(j)!=q)break;if(GW(t)!=q)break;if(!D(c,2))continue;if(!o)continue;else break;}u=A5C.data;continue _;case 6:AGb(b,r,k,s,t);if(C()){break _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(GW(j)!=q)break;if(GW(t)!=q)break;if(!D(c,2))continue;if(!o)continue;else break;}u=A5C.data;$p=5;continue _;case 7:$z=X4(b,o,l,p);if(C()){break _;}r=$z;if
(r){J();if(r!=A38.b)h=0;}while(true){p=p+1|0;while(!(p<=(f+n|0)&&h)){o=o+1|0;while(!(o<=(d+n|0)&&h)){l=l+1|0;if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;}p=f-n|0;}if(l>=0&&l<128)break;h=0;}continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function L$(){E.call(this);this.E_=0;}
var A_G=null;var A_H=null;function AQm(a){var b=new L$();AIF(b,a);return b;}
function AIF(a,b){a.E_=b;}
function Jk(b){return !b?A_H:A_G;}
function ACS(){A_G=AQm(1);A_H=AQm(0);}
function PG(){var a=this;CI.call(a);a.xr=null;a.fe=null;a.u7=0;a.fo=0;}
function Zu(a){DB(a.bE);AKk(1);U(a.bE,C9(0,(a.bh/2|0)-100|0,(a.bv/4|0)+120|0,B(585)));}
function AId(a){AKk(0);}
function AQG(a){a.u7=a.u7+1|0;}
function ACo(a,b){var c,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gz&&!b.co){b=a.fe;$p=1;continue _;}return;case 1:XN(b);if(C()){break _;}c=a.H;b=null;$p=2;case 2:Zk(c,b);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,$p);}
function Yr(a,b,c){var d,e;if(c==200)a.fo=(a.fo-1|0)&3;if(!(c!=208&&c!=28))a.fo=(a.fo+1|0)&3;if(c==14&&BE(a.fe.fJ.data[a.fo])>0)a.fe.fJ.data[a.fo]=Gr(a.fe.fJ.data[a.fo],0,BE(a.fe.fJ.data[a.fo])-1|0);if(QU(B(683),b)>=0&&BE(a.fe.fJ.data[a.fo])<15){d=a.fe.fJ.data;c=a.fo;e=new Bd;Bb(e);d[c]=O(Gq(H(e,a.fe.fJ.data[a.fo]),b));}}
function W2(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WR(a);if(C()){break _;}Dz(a,a.bS,a.xr,a.bh/2|0,40,16777215);BU();Br(a.bh/2|0,a.bv/2|0,50.0);Co((-60.0),(-60.0),(-60.0));Bq(180.0,0.0,1.0,0.0);if(!((a.u7/6|0)%2|0))a.fe.pR=a.fo;e=a.fe;$p=2;case 2:$z=AGW(e);if(C()){break _;}f=$z;Bq((f*360|0)/16.0,0.0,1.0,0.0);e=A9t;g=a.fe;h=(-0.5);i=(-0.75);j
=(-0.5);k=0.0;$p=3;case 3:AAG(e,g,h,i,j,k);if(C()){break _;}a.fe.pR=(-1);By();$p=4;case 4:AAU(a,b,c,d);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Hj(){Ee.call(this);this.xo=0;}
var A9y=null;var A9z=null;var A_I=null;function AZT(a,b,c){var d=new Hj();ACa(d,a,b,c);return d;}
function ACa(a,b,c,d){E3(a,b,c);a.xo=d;}
function AAM(){var b,c;A9y=AZT(B(684),0,15);A9z=AZT(B(685),1,0);b=N(Hj,2);c=b.data;c[0]=A9y;c[1]=A9z;A_I=b;}
function KE(){var a=this;E.call(a);a.lY=null;a.my=null;}
function ARQ(a){return a.my;}
function PY(a,b){var c;c=a.my;a.my=b;return c;}
function AP6(a){return a.lY;}
function Jt(){var a=this;KE.call(a);a.cO=null;a.cX=null;a.ks=0;a.io=0;}
function KV(a){var b;b=J0(a);if(b==2){if(J0(a.cX)<0)a.cX=Mt(a.cX);return MZ(a);}if(b!=(-2))return a;if(J0(a.cO)>0)a.cO=MZ(a.cO);return Mt(a);}
function J0(a){return (a.cX===null?0:a.cX.ks)-(a.cO===null?0:a.cO.ks)|0;}
function Mt(a){var b;b=a.cO;a.cO=b.cX;b.cX=a;EZ(a);EZ(b);return b;}
function MZ(a){var b;b=a.cX;a.cX=b.cO;b.cO=a;EZ(a);EZ(b);return b;}
function EZ(a){var b,c;b=a.cX===null?0:a.cX.ks;c=a.cO===null?0:a.cO.ks;a.ks=DU(b,c)+1|0;a.io=1;if(a.cO!==null)a.io=a.io+a.cO.io|0;if(a.cX!==null)a.io=a.io+a.cX.io|0;}
function AIQ(a,b){return b?a.cX:a.cO;}
function SO(){E.call(this);}
function A_J(){var a=new SO();AQk(a);return a;}
function AQk(a){return;}
function ADW(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p
=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D0(b,d,e,f,B(686),4.0,(1.0+(L(b.n)-L(b.n))*0.20000000298023224)*0.699999988079071);h=Fg();i=16;j=0;k=15.0;a:while(true){if(j>=i){l=g*2.0;m=I(d-l-1.0);n=I(d+l+1.0);o=I(e-l-1.0);p=I(e+l+1.0);q=Dy(m,o,I(f-l-1.0),n,p,I(f+l+1.0));$p=1;continue _;}n=0;while(n<i){o=0;while(o<i){if(!(j&&j!=15&&n&&n!=15&&o&&o!=15)){r=j/k*2.0-1.0;s=n/k*2.0-1.0;t
=o/k*2.0-1.0;u=DK(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+L(b.n)*0.6000000238418579);y=0.30000001192092896;z=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;if(x>0.0)break a;}o=o+1|0;}n=n+1|0;}j=j+1|0;}bc=I(l);bd=I(v);be=I(w);$p=9;continue _;case 1:$z=Zc(b,c,q);if(C()){break _;}q=$z;bf=BR(d,e,f);bg=0;while(true){if(bg>=CZ(q)){bh=Ck();Dq(bh,h);bi=CZ(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.d9;bl=bk.eo;bm=bk.d$;$p=4;continue _;}bn=Z(q,
bg);bj=Po(bn,d,e,f)/l;if(bj<=1.0)break;bg=bg+1|0;}bo=bn.c-d;bp=bn.i-e;bq=bn.d-f;br=B7(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.G;$p=2;case 2:$z=Y4(b,bf,bh);if(C()){break _;}x=$z;bs=x;bt=(1.0-bj)*bs;m=(bt*bt+bt)/2.0*8.0*l+1.0|0;$p=3;case 3:bn.eP(c,m);if(C()){break _;}bn.f=bn.f+v*bt;bn.h=bn.h+w*bt;bn.g=bn.g+z*bt;while(true){bg=bg+1|0;if(bg>=CZ(q)){bh=Ck();Dq(bh,h);bi=CZ(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.d9;bl=bk.eo;bm=bk.d$;$p=4;continue _;}bn=Z(q,bg);bj=Po(bn,d,e,f)
/l;if(bj>1.0)continue;else break;}bo=bn.c-d;bp=bn.i-e;bq=bn.d-f;br=B7(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.G;$p=2;continue _;case 4:$z=X4(b,m,bl,bm);if(C()){break _;}bu=$z;bv=0;y=m;bw=bl;x=bm;while(bv<1){bq=y+L(b.n);l=bw+L(b.n);v=x+L(b.n);w=bq-d;z=l-e;ba=v-f;bb=B7(w*w+z*z+ba*ba);w=w/bb;z=z/bb;ba=ba/bb;bb=0.5/(bb/r+0.1)*(L(b.n)*L(b.n)+0.30000001192092896);w=w*bb;z=z*bb;ba=ba*bb;BP(b,B(215),(bq+s)/2.0,(l+u)/2.0,(v+bj)/2.0,w,z,ba);BP(b,B(248),bq,l,v,w,z,ba);bv=bv+1|0;}if(bu>0){J();c=A3U.data[bu];$p
=5;continue _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.d9;bl=bk.eo;bm=bk.d$;continue _;case 5:$z=Z5(b,m,bl,bm);if(C()){break _;}bv=$z;g=0.30000001192092896;$p=6;case 6:c.DG(b,m,bl,bm,bv,g);if(C()){break _;}bv=0;$p=7;case 7:AJ0(b,m,bl,bm,bv);if(C()){break _;}c=A3U.data[bu];$p=8;case 8:c.qW(b,m,bl,bm);if(C()){break _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.d9;bl=bk.eo;bm=bk.d$;$p=4;continue _;case 9:$z=X4(b,bc,bd,be);if(C()){break _;}bx=$z;if(bx>0){J();x=x-(A3U.data[bx].vN(c)+0.30000001192092896)*y;}if
(x>0.0)Tb(h,Cy(bc,bd,be));l=l+z;v=v+ba;w=w+bb;x=x-0.22500000894069672;while(x<=0.0){while(true){o=o+1|0;while(o>=i){n=n+1|0;while(n>=i){j=j+1|0;if(j>=i){l=g*2.0;m=I(d-l-1.0);n=I(d+l+1.0);o=I(e-l-1.0);p=I(e+l+1.0);q=Dy(m,o,I(f-l-1.0),n,p,I(f+l+1.0));$p=1;continue _;}n=0;}o=0;}if(!j)break;if(j==15)break;if(!n)break;if(n==15)break;if(!o)break;if(o!=15)continue;else break;}r=j/k*2.0-1.0;s=n/k*2.0-1.0;t=o/k*2.0-1.0;u=DK(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+L(b.n)*0.6000000238418579);y=0.30000001192092896;z
=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;}bc=I(l);bd=I(v);be=I(w);continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p);}
function ALx(){DV.call(this);}
function AQC(){var a=new ALx();ASp(a);return a;}
function ASp(a){return;}
function TF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=D(c,2)+2|0;h=D(c,2)+2|0;i=0;j=(d-g|0)-1|0;k=(d+g|0)+1|0;l=e-1|0;m=e+3|0;n=m+1|0;o=(f-h|0)-1|0;p=(f+h|0)+1|0;q=j;a:while(true){r=S(q,
k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A5X.b;$p=2;continue _;}t=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;while(true){t=S(s,n);if(t>0)break;v=o;w=S(v,p);if(w<=0)break a;s=s+1|0;}q=q+1|0;}$p=1;case 1:$z
=Xw(b,q,s,v);if(C()){break _;}x=$z;if(s==l&&!x.c3())return 0;if(!t&&!x.c3())return 0;if(!(q!=j&&r&&v!=o&&w)&&s==e){$p=5;continue _;}v=v+1|0;while(true){w=S(v,p);if(w<=0)break;s=s+1|0;while(true){t=S(s,n);if(t<=0)break;q=q+1|0;r=S(q,k);if(r>0){if(i>=1&&i<=5){r=j;c:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A5X.b;$p=2;continue _;}t=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break c;t
=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}continue _;case 2:AJ0(b,d,e,f,k);if(C()){break _;}$p=3;case 3:$z=AH5(b,d,e,f);if(C()){break _;}b=$z;b.iM=Y9(a,c);return 1;case 4:$z=X4(b,o,e,j);if(C()){break _;}r=$z;if(!r){u=0;r=o-1|0;$p=6;continue _;}l=l+1|0;while(true){if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;continue _;}q=q+1|0;if(q>=2)break;l=0;}J();k=A5X.b;$p=2;continue _;case 5:$z=X4(b,q,s,v);if(C()){break _;}u
=$z;if(!u){u=s+1|0;$p=7;continue _;}v=v+1|0;while(true){w=S(v,p);if(w<=0)break;s=s+1|0;while(true){t=S(s,n);if(t<=0)break;q=q+1|0;r=S(q,k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A5X.b;$p=2;continue _;}t=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q
=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 6:$z=Xw(b,r,e,j);if(C()){break _;}x=$z;if(x.c3())u=1;r=o+1|0;$p=10;continue _;case 7:$z=X4(b,q,u,v);if(C()){break _;}u=$z;if(!u)i=i+1|0;v=v+1|0;while(true){w=S(v,p);if(w<=0)break;s=s+1|0;while(true){t=S(s,n);if(t<=0)break;q=q+1|0;r=S(q,k);if(r>0){if(i>=1&&i<=5){r=j;d:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A5X.b;$p=2;continue _;}t
=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break d;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 8:$z=Xw(b,r,t,v);if(C()){break _;}x=$z;if(x.c3()){if(!u&&D(c,4)){J();q=A3_.b;$p=14;continue _;}J();q=A34.b;$p=12;continue _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q
<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A5X.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){continue _;}q=t-1|0;$p=9;case 9:$z=Xw(b,r,q,v);if(C()){break _;}x=$z;if(x.c3()){$p=8;continue _;}q=0;$p=11;continue _;case 10:$z=Xw(b,r,e,j);if(C()){break _;}x=$z;if(x.c3())u=u+1|0;r=j-1|0;$p=13;continue _;case 11:AJ0(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r
=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A5X.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 12:AJ0(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)
|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A5X.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 13:$z=Xw(b,o,e,r);if(C()){break _;}x=$z;if(x.c3())u=u+1|0;r=j+1|0;$p=16;continue _;case 14:AJ0(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|
0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A5X.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 15:AJ0(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A5X.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&
u&&v!=o&&s&&t!=n&&i){q=0;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 16:$z=Xw(b,o,e,r);if(C()){break _;}x=$z;if(x.c3())u=u+1|0;if(u==1){J();r=A5Z.b;$p=17;continue _;}l=l+1|0;while(true){if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;if(q>=2)break;l=0;}J();k=A5X.b;$p=2;continue _;case 17:AJ0(b,o,e,j,r);if(C()){break _;}$p=18;case 18:$z=AH5(b,o,e,j);if(C()){break _;}x=$z;y=x;n=0;while(n<8){z=ACu(a,c);if(z!==null)ACG(y,D(c,k),z);n=n+1|0;}while(true){q=q+1|0;if(q>=2)break;l
=0;if(l>=3)continue;else{o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}}J();k=A5X.b;$p=2;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function ACu(a,b){var c,d;a:{c=D(b,10);if(!c){d=new B6;Bw();Df(d,A7K);break a;}if(c==1){d=new B6;Bw();Fu(d,A6S,D(b,4)+1|0);break a;}if(c==2){d=new B6;Bw();Df(d,A7h);break a;}if(c==3){d=new B6;Bw();Fu(d,A6F,D(b,4)+1|0);break a;}if(c==4){d=new B6;Bw();Fu(d,A5g,D(b,4)+1|0);break a;}if(c==5){d=new B6;Bw();Fu(d,A5h,D(b,4)+1|0);break a;}if(c==6){d=new B6;Bw();Df(d,A7G);break a;}if(c==7&&!D(b,100)){d=new B6;Bw();Df(d,A7E);break a;}d=null;}return d;}
function Y9(a,b){var c;c=D(b,4);return !c?B(650):c==1?B(653):c==2?B(653):c!=3?B(3):B(651);}
function B9(){var a=this;DV.call(a);a.w_=0;a.cE=0;}
function A_K(a,b){var c=new B9();Cc(c,a,b);return c;}
function Cc(a,b,c){a.w_=b;a.cE=c;}
function Xn(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=L(c)*3.1415927410125732;h=d+8|0;i=h+Bl(g)*a.cE/8.0;j=h
-Bl(g)*a.cE/8.0;h=f+8|0;k=h+Bx(g)*a.cE/8.0;l=h-Bx(g)*a.cE/8.0;m=(e+D(c,3)|0)+2|0;n=(e+D(c,3)|0)+2|0;o=0;j=j-i;n=n-m;p=l-k;while(o<=a.cE){q=o;r=i+j*q/a.cE;s=m+n*q/a.cE;t=k+p*q/a.cE;q=Cb(c)*a.cE/16.0;h=o*3.1415927410125732;u=(Bl(h/a.cE)+1.0)*q+1.0;v=(Bl(h/a.cE)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;while(w<=e){ba=f;while(ba<=x){bb=y;while(bb<=z){bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be<1.0){$p=1;continue _;}bb=bb+1|0;}ba=ba+1|0;}w=w+1|0;}o=o+1|0;}return 1;case 1:$z
=X4(b,w,ba,bb);if(C()){break _;}bf=$z;J();if(bf==A30.b){d=a.w_;$p=2;continue _;}a:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.cE)break a;q=o;r=i+j*q/a.cE;s=m+n*q/a.cE;t=k+p*q/a.cE;q=Cb(c)*a.cE/16.0;h=o*3.1415927410125732;u=(Bl(h/a.cE)+1.0)*q+1.0;v=(Bl(h/a.cE)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{continue _;}}return 1;case 2:AGb(b,
w,ba,bb,d);if(C()){break _;}b:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.cE)break b;q=o;r=i+j*q/a.cE;s=m+n*q/a.cE;t=k+p*q/a.cE;q=Cb(c)*a.cE/16.0;h=o*3.1415927410125732;u=(Bl(h/a.cE)+1.0)*q+1.0;v=(Bl(h/a.cE)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{$p=1;continue _;}}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p);}
function BL(){DV.call(this);this.se=0;}
function A_L(a){var b=new BL();BM(b,a);return b;}
function BM(a,b){a.se=b;}
function Yi(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;if(g>=64)return 1;h=(d+D(c,8)|0)-D(c,8)|0;i=(e+D(c,4)|0)-D(c,4)|0;j=(f+D(c,8)|0)-D(c,8)|0;$p=1;case 1:$z=X4(b,h,i,j);if(C()){break _;}k=$z;if(!k){J();l=A3U.data[a.se];$p=2;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+D(c,8)|0)-D(c,8)|0;i=(e+D(c,4)|0)-D(c,4)|0;j=(f+D(c,8)|0)-D(c,8)|0;continue _;case 2:$z
=l.C$(b,h,i,j);if(C()){break _;}k=$z;if(k){k=a.se;$p=3;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+D(c,8)|0)-D(c,8)|0;i=(e+D(c,4)|0)-D(c,4)|0;j=(f+D(c,8)|0)-D(c,8)|0;$p=1;continue _;case 3:AGb(b,h,i,j,k);if(C()){break _;}g=g+1|0;if(g>=64)return 1;h=(d+D(c,8)|0)-D(c,8)|0;i=(e+D(c,4)|0)-D(c,4)|0;j=(f+D(c,8)|0)-D(c,8)|0;$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Cd(){DV.call(this);this.Bc=0;}
function A_M(a){var b=new Cd();Ch(b,a);return b;}
function Ch(a,b){a.Bc=b;}
function AGI(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e+1|0;$p=1;case 1:$z=X4(b,d,g,f);if(C()){break _;}g=$z;J();if(g!=A30.b)return 0;g=e-1|0;$p=2;case 2:$z=X4(b,d,g,f);if(C()){break _;}h=$z;if(h!=A30.b)return 0;$p=3;case 3:$z=X4(b,d,e,f);if(C()){break _;}g=$z;if(g){$p=5;continue _;}g=0;h=d-1|0;$p=4;case 4:$z=X4(b,h,e,f);if(C()){break _;}i
=$z;if(i==A30.b)g=1;i=d+1|0;$p=6;continue _;case 5:$z=X4(b,d,e,f);if(C()){break _;}g=$z;if(g!=A30.b)return 0;g=0;h=d-1|0;$p=4;continue _;case 6:$z=X4(b,i,e,f);if(C()){break _;}j=$z;if(j==A30.b)g=g+1|0;k=f-1|0;$p=7;case 7:$z=X4(b,d,e,k);if(C()){break _;}j=$z;if(j==A30.b)g=g+1|0;j=f+1|0;$p=8;case 8:$z=X4(b,d,e,j);if(C()){break _;}l=$z;if(l==A30.b)g=g+1|0;l=0;$p=9;case 9:$z=X4(b,h,e,f);if(C()){break _;}h=$z;if(!h)l=1;$p=10;case 10:$z=X4(b,i,e,f);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=11;case 11:$z=X4(b,d,e,k);if
(C()){break _;}h=$z;if(!h)l=l+1|0;$p=12;case 12:$z=X4(b,d,e,j);if(C()){break _;}h=$z;if(!h)l=l+1|0;if(g==3&&l==1){g=a.Bc;$p=13;continue _;}return 1;case 13:AJ0(b,d,e,f,g);if(C()){break _;}return 1;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADl(){E.call(this);}
function A_N(){var a=new ADl();APB(a);return a;}
function APB(a){return;}
function Py(){CJ.call(this);}
function UX(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.i;a.bG=a.d;a.h=a.h+0.002;b=a.f;c=a.h;d=a.g;$p=1;case 1:ALQ(a,b,c,d);if(C()){break _;}a.f=a.f*0.8500000238418579;a.h=a.h*0.8500000238418579;a.g=a.g*0.8500000238418579;e=a.k;f=I(a.c);g=I(a.i);h=I(a.d);$p=2;case 2:$z=Xw(e,f,g,h);if(C()){break _;}e=$z;if(e!==A4R){$p=3;continue _;}f=a.b_;a.b_=f-1|0;if(f>0)return;$p=4;continue _;case 3:B4(a);if
(C()){break _;}f=a.b_;a.b_=f-1|0;if(f>0)return;$p=4;case 4:B4(a);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AAH(){CJ.call(this);this.zd=0.0;}
function AXv(a,b,c,d,e){var f=new AAH();AO2(f,a,b,c,d,e);return f;}
function AO2(a,b,c,d,e,f){var g;EP(a,b,c,d,e,0.0,0.0,0.0);a.f=a.f*0.10000000149011612;a.h=a.h*0.10000000149011612;a.g=a.g*0.10000000149011612;g=BI()*0.30000001192092896;a.ht=g;a.hl=g;a.g8=g;a.cZ=a.cZ*0.75;a.cZ=a.cZ*f;a.zd=a.cZ;a.b_=8.0/(BI()*0.8+0.2)|0;a.b_=a.b_*f|0;a.nx=0;}
function AEX(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.cY+c)/a.b_*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.cZ=a.zd*i;$p=1;case 1:AH0(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AGA(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.i;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=2;continue _;}a.ev=7-((a.cY*8|0)/a.b_|0)|0;a.h=a.h+0.004;c=a.f;d=a.h;e=a.g;$p=1;case 1:ALQ(a,c,d,e);if(C()){break _;}if(a.i===a.ct){a.f=a.f*1.1;a.g=a.g*1.1;}a.f=a.f*0.9599999785423279;a.h=a.h*0.9599999785423279;a.g=a.g*0.9599999785423279;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;case 2:B4(a);if
(C()){break _;}a.ev=7-((a.cY*8|0)/a.b_|0)|0;a.h=a.h+0.004;c=a.f;d=a.h;e=a.g;$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function N8(){CJ.call(this);}
function AMg(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AH0(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function AAa(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.i;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=2;continue _;}a.ev=7-((a.cY*8|0)/a.b_|0)|0;a.h=a.h+0.004;c=a.f;d=a.h;e=a.g;$p=1;case 1:ALQ(a,c,d,e);if(C()){break _;}a.f=a.f*0.8999999761581421;a.h=a.h*0.8999999761581421;a.g=a.g*0.8999999761581421;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;case 2:B4(a);if(C()){break _;}a.ev=7-
((a.cY*8|0)/a.b_|0)|0;a.h=a.h+0.004;c=a.f;d=a.h;e=a.g;$p=1;continue _;default:Eq();}}CL().s(a,b,c,d,e,$p);}
function MB(){CJ.call(this);this.Al=0.0;}
function AK2(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.cY+c)/a.b_;a.cZ=a.Al*(1.0-i*i*0.5);$p=1;case 1:AH0(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AMB(a,b){var c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=(a.cY+b)/a.b_;if(c<0.0)c=0.0;if(c>1.0)c=1.0;$p=1;case 1:$z=Y$(a,b);if(C()){break _;}d=$z;return d*c+1.0-c;default:Eq();}}CL().s(a,b,c,d,$p);}
function Ws(a){var b,c,d,e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.i;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=2;continue _;}c=a.f;d=a.h;e=a.g;$p=1;case 1:ALQ(a,c,d,e);if(C()){break _;}a.f=a.f*0.9599999785423279;a.h=a.h*0.9599999785423279;a.g=a.g*0.9599999785423279;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;case 2:B4(a);if(C()){break _;}c=a.f;d=a.h;e=a.g;$p=1;continue _;default:Eq();}}CL().s(a,
b,c,d,e,$p);}
function WC(){CJ.call(this);this.we=0.0;}
function A1X(a,b,c,d){var e=new WC();AS1(e,a,b,c,d);return e;}
function AS1(a,b,c,d,e){EP(a,b,c,d,e,0.0,0.0,0.0);a.f=a.f*0.800000011920929;a.h=a.h*0.800000011920929;a.g=a.g*0.800000011920929;a.h=L(a.l)*0.4000000059604645+0.05000000074505806;a.ht=1.0;a.hl=1.0;a.g8=1.0;a.cZ=a.cZ*(L(a.l)*2.0+0.20000000298023224);a.we=a.cZ;a.b_=16.0/(BI()*0.8+0.2)|0;a.nx=0;a.ev=49;}
function AEY(a,b){return 1.0;}
function AB2(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.cY+c)/a.b_;a.cZ=a.we*(1.0-i*i);$p=1;case 1:AH0(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,$p);}
function AF3(a){var b,c,d,e,f,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.i;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=1;continue _;}c=a.cY/a.b_;if(L(a.l)>c)BP(a.k,B(248),a.c,a.i,a.d,a.f,a.h,a.g);a.h=a.h-0.03;d=a.f;e=a.h;f=a.g;$p=2;continue _;case 1:B4(a);if(C()){break _;}c=a.cY/a.b_;if(L(a.l)>c)BP(a.k,B(248),a.c,a.i,a.d,a.f,a.h,a.g);a.h=a.h-0.03;d=a.f;e=a.h;f=a.g;$p=2;case 2:ALQ(a,d,e,f);if(C()){break _;}a.f
=a.f*0.9990000128746033;a.h=a.h*0.9990000128746033;a.g=a.g*0.9990000128746033;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function ALN(){Ic.call(this);}
function A1P(a,b,c,d,e,f,g){var h=new ALN();AOU(h,a,b,c,d,e,f,g);return h;}
function AOU(a,b,c,d,e,f,g,h){Qq(a,b,c,d,e);a.lL=0.03999999910593033;a.ev=a.ev+1|0;if(g===0.0&&!(f===0.0&&h===0.0)){a.f=f;a.h=g+0.1;a.g=h;}}
function GS(){var a=this;E.call(a);a.cW=null;a.bo=0;a.bk=0;a.bn=0;a.fc=0;a.bu=null;a.es=null;}
function A_O(a,b,c,d,e){var f=new GS();UE(f,a,b,c,d,e);return f;}
function UE(a,b,c,d,e,f){var $p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.es=b;a.bu=Ck();a.cW=c;a.bo=d;a.bk=e;a.bn=f;$p=1;case 1:$z=Z5(c,d,e,f);if(C()){break _;}d=$z;a.fc=d;Jj(a);return;default:Eq();}}CL().s(a,b,c,d,e,f,$p);}
function Jj(a){a:{DB(a.bu);if(!a.fc){U(a.bu,Cy(a.bo,a.bk,a.bn-1|0));U(a.bu,Cy(a.bo,a.bk,a.bn+1|0));break a;}if(a.fc==1){U(a.bu,Cy(a.bo-1|0,a.bk,a.bn));U(a.bu,Cy(a.bo+1|0,a.bk,a.bn));break a;}if(a.fc==2){U(a.bu,Cy(a.bo-1|0,a.bk,a.bn));U(a.bu,Cy(a.bo+1|0,a.bk+1|0,a.bn));break a;}if(a.fc==3){U(a.bu,Cy(a.bo-1|0,a.bk+1|0,a.bn));U(a.bu,Cy(a.bo+1|0,a.bk,a.bn));break a;}if(a.fc==4){U(a.bu,Cy(a.bo,a.bk+1|0,a.bn-1|0));U(a.bu,Cy(a.bo,a.bk,a.bn+1|0));break a;}if(a.fc==5){U(a.bu,Cy(a.bo,a.bk,a.bn-1|0));U(a.bu,Cy(a.bo,a.bk
+1|0,a.bn+1|0));break a;}if(a.fc==6){U(a.bu,Cy(a.bo+1|0,a.bk,a.bn));U(a.bu,Cy(a.bo,a.bk,a.bn+1|0));break a;}if(a.fc==7){U(a.bu,Cy(a.bo-1|0,a.bk,a.bn));U(a.bu,Cy(a.bo,a.bk,a.bn+1|0));break a;}if(a.fc==8){U(a.bu,Cy(a.bo-1|0,a.bk,a.bn));U(a.bu,Cy(a.bo,a.bk,a.bn-1|0));break a;}if(a.fc!=9)break a;U(a.bu,Cy(a.bo+1|0,a.bk,a.bn));U(a.bu,Cy(a.bo,a.bk,a.bn-1|0));}}
function AAW(a){var b,c,d,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=a.bu.p)return;c=Z(a.bu,b);$p=1;case 1:$z=ALk(a,c);if(C()){break _;}c=$z;if(c!==null&&PL(c,a)){Og(a.bu,b,Cy(c.bo,c.bk,c.bn));d=b;}else{c=a.bu;d=b+(-1)|0;Em(c,b);}b=d+1|0;if(b>=a.bu.p)return;c=Z(a.bu,b);continue _;default:Eq();}}CL().s(a,b,c,d,$p);}
function ALk(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.cW;d=b.d9;e=b.eo;f=b.d$;$p=1;case 1:$z=X4(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.es.b){c=a.cW;d=b.d9;e=b.eo+1|0;f=b.d$;$p=2;continue _;}c=new GS;g=a.es;h=a.cW;d=b.d9;e=b.eo;f=b.d$;$p=3;continue _;case 2:$z=X4(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.es.b){c=a.cW;d=b.d9;e=b.eo-1|0;f=b.d$;$p=4;continue _;}c=new GS;g=a.es;h=a.cW;d
=b.d9;e=b.eo+1|0;f=b.d$;$p=5;continue _;case 3:UE(c,g,h,d,e,f);if(C()){break _;}return c;case 4:$z=X4(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.es.b){c=null;return c;}c=new GS;g=a.es;h=a.cW;e=b.d9;d=b.eo-1|0;f=b.d$;$p=6;continue _;case 5:UE(c,g,h,d,e,f);if(C()){break _;}return c;case 6:UE(c,g,h,e,d,f);if(C()){break _;}return c;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function PL(a,b){var c,d;c=0;while(c<a.bu.p){d=Z(a.bu,c);if(d.d9==b.bo&&d.d$==b.bn)return 1;c=c+1|0;}return 0;}
function Ja(a,b,c,d){var e,f;e=0;while(e<a.bu.p){f=Z(a.bu,e);if(f.d9==b&&f.d$==d)return 1;e=e+1|0;}return 0;}
function MF(a,b){var c;if(PL(a,b))return 1;if(a.bu.p==2)return 0;if(!a.bu.p)return 1;c=Z(a.bu,0);return b.bk==a.bk&&c.eo==a.bk?1:1;}
function ALX(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:U(a.bu,Cy(b.bo,b.bk,b.bn));c=Ja(a,a.bo,a.bk,a.bn-1|0);d=Ja(a,a.bo,a.bk,a.bn+1|0);e=Ja(a,a.bo-1|0,a.bk,a.bn);f=Ja(a,a.bo+1|0,a.bk,a.bn);g=(-1);if(!(!c&&!d))g=0;if(!(!e&&!f))g=1;if(d&&f&&!c&&!e)g=6;if(d&&e&&!c&&!f)g=7;if(c&&e&&!d&&!f)g=8;if(c&&f&&!d&&!e)g=9;if(!g){b=a.cW;c=a.bo;d=a.bk+1|0;e=a.bn-1|0;$p=1;continue _;}if(g==1){b=a.cW;c=a.bo+1|0;d
=a.bk+1|0;e=a.bn;$p=2;continue _;}if(g<0)g=0;b=a.cW;c=a.bo;d=a.bk;e=a.bn;$p=5;continue _;case 1:$z=X4(b,c,d,e);if(C()){break _;}c=$z;if(c==a.es.b)g=4;b=a.cW;c=a.bo;d=a.bk+1|0;e=a.bn+1|0;$p=3;continue _;case 2:$z=X4(b,c,d,e);if(C()){break _;}c=$z;if(c==a.es.b)g=2;b=a.cW;c=a.bo-1|0;d=a.bk+1|0;e=a.bn;$p=4;continue _;case 3:$z=X4(b,c,d,e);if(C()){break _;}c=$z;if(c==a.es.b)g=5;if(g==1){b=a.cW;c=a.bo+1|0;d=a.bk+1|0;e=a.bn;$p=2;continue _;}if(g<0)g=0;b=a.cW;c=a.bo;d=a.bk;e=a.bn;$p=5;continue _;case 4:$z=X4(b,c,d,
e);if(C()){break _;}c=$z;if(c==a.es.b)g=3;if(g<0)g=0;b=a.cW;c=a.bo;d=a.bk;e=a.bn;$p=5;case 5:AFj(b,c,d,e,g);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,$p);}
function ADT(a,b,c,d){var e,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Cy(b,c,d);$p=1;case 1:$z=ALk(a,e);if(C()){break _;}e=$z;if(e===null)return 0;$p=2;case 2:AAW(e);if(C()){break _;}return MF(e,a);default:Eq();}}CL().s(a,b,c,d,e,$p);}
function UD(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bo;c=a.bk;d=a.bn-1|0;$p=1;case 1:$z=ADT(a,b,c,d);if(C()){break _;}d=$z;b=a.bo;c=a.bk;e=a.bn+1|0;$p=2;case 2:$z=ADT(a,b,c,e);if(C()){break _;}b=$z;c=a.bo-1|0;e=a.bk;f=a.bn;$p=3;case 3:$z=ADT(a,c,e,f);if(C()){break _;}c=$z;e=a.bo+1|0;f=a.bk;g=a.bn;$p=4;case 4:$z=ADT(a,e,f,g);if(C()){break _;}e=$z;f=(-1);if(!(!d&&!b))f=0;if(!(!c&&
!e))f=1;if(b&&e&&!d&&!c)f=6;if(b&&c&&!d&&!e)f=7;if(d&&c&&!b&&!e)f=8;if(d&&e&&!b&&!c)f=9;if(!f){h=a.cW;d=a.bo;b=a.bk+1|0;c=a.bn-1|0;$p=5;continue _;}if(f==1){h=a.cW;d=a.bo+1|0;b=a.bk+1|0;c=a.bn;$p=6;continue _;}if(f<0)f=0;a.fc=f;Jj(a);h=a.cW;d=a.bo;b=a.bk;c=a.bn;$p=9;continue _;case 5:$z=X4(h,d,b,c);if(C()){break _;}d=$z;if(d==a.es.b)f=4;h=a.cW;d=a.bo;b=a.bk+1|0;c=a.bn+1|0;$p=7;continue _;case 6:$z=X4(h,d,b,c);if(C()){break _;}d=$z;if(d==a.es.b)f=2;h=a.cW;d=a.bo-1|0;b=a.bk+1|0;c=a.bn;$p=8;continue _;case 7:$z
=X4(h,d,b,c);if(C()){break _;}b=$z;if(b==a.es.b)f=5;if(f==1){h=a.cW;d=a.bo+1|0;b=a.bk+1|0;c=a.bn;$p=6;continue _;}if(f<0)f=0;a.fc=f;Jj(a);h=a.cW;d=a.bo;b=a.bk;c=a.bn;$p=9;continue _;case 8:$z=X4(h,d,b,c);if(C()){break _;}d=$z;if(d==a.es.b)f=3;if(f<0)f=0;a.fc=f;Jj(a);h=a.cW;d=a.bo;b=a.bk;c=a.bn;$p=9;case 9:AFj(h,d,b,c,f);if(C()){break _;}g=0;if(g>=a.bu.p)return;h=Z(a.bu,g);$p=10;case 10:$z=ALk(a,h);if(C()){break _;}h=$z;if(h!==null){$p=11;continue _;}g=g+1|0;if(g>=a.bu.p)return;h=Z(a.bu,g);continue _;case 11:AAW(h);if
(C()){break _;}if(MF(h,a)){$p=12;continue _;}g=g+1|0;if(g>=a.bu.p)return;h=Z(a.bu,g);$p=10;continue _;case 12:ALX(h,a);if(C()){break _;}g=g+1|0;if(g>=a.bu.p)return;h=Z(a.bu,g);$p=10;continue _;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,$p);}
function Rt(){var a=this;E.call(a);a.nF=null;a.B9=0;a.kX=0;}
function AKr(a){a.kX=a.kX+1|0;}
function AHU(a){return a.kX<a.nF.data.length?0:1;}
function Ps(a,b){return BR(a.nF.data[a.kX].hj+(b.cC+1.0|0)*0.5,a.nF.data[a.kX].g5,a.nF.data[a.kX].hr+(b.cC+1.0|0)*0.5);}
function XJ(){var a=this;E.call(a);a.vy=null;a.i6=null;a.pj=null;a.kU=null;}
function ATK(a){var b=new XJ();AWe(b,a);return b;}
function AWe(a,b){a.i6=A1x();a.pj=CY();a.kU=N(GH,32);a.vy=b;}
function AJU(a,b,c,d){return MG(a,b,c.c,c.G.I,c.d,d);}
function ABn(a,b,c,d,e,f){return MG(a,b,c+0.5,d+0.5,e+0.5,f);}
function MG(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;QT(a.i6);Rk(a.pj);g=Hv(a,I(b.G.N),I(b.G.I),I(b.G.O));h=Hv(a,I(c-b.cC/2.0),I(d),I(e-b.cC/2.0));i=ASa(Jm(b.cC+1.0),Jm(b.ef+1.0),Jm(b.cC+1.0));g.lf=0.0;g.nK=Eg(g,h);g.h2=g.nK;QT(a.i6);SM(a.i6,g);j=g;a:{while(true){if(XI(a.i6)){if(j!==g){k=Q4(a,g,j);break a;}k=null;break a;}l=ALM(a.i6);if(l.lC==h.lC)break;if(Eg(l,h)<Eg(j,h))j=l;l.l$=1;m=AED(a,b,l,i,h,f);n=0;while(n<m){k=a.kU.data[n];o=l.lf+Eg(l,k);if(!(MV(k)&&o>=k.lf)){k.nv=l;k.lf=o;k.nK=Eg(k,h);if(MV(k))WZ(a.i6,k,
k.lf+k.nK);else{k.h2=k.lf+k.nK;SM(a.i6,k);}}n=n+1|0;}}k=Q4(a,g,h);}return k;}
function AED(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=0;if(Iv(a,b,c.hj,c.g5+1|0,c.hr,d)>0)g=1;h=I2(a,b,c.hj,c.g5,c.hr+1|0,d,g);i=I2(a,b,c.hj-1|0,c.g5,c.hr,d,g);j=I2(a,b,c.hj+1|0,c.g5,c.hr,d,g);k=I2(a,b,c.hj,c.g5,c.hr-1|0,d,g);if(h===null)l=0;else if(h.l$)l=0;else if(Eg(h,e)>=f)l=0;else{m=a.kU.data;l=1;m[0]=h;}if(i===null)n=l;else if(i.l$)n=l;else if(Eg(i,e)>=f)n=l;else{m=a.kU.data;n=l+1|0;m[l]=i;}if(j===null)o=n;else if(j.l$)o=n;else if(Eg(j,e)>=f)o=n;else{m=a.kU.data;o=n+1|0;m[n]=j;}if(k===null)n=o;else if(k.l$)n
=o;else if(Eg(k,e)>=f)n=o;else{m=a.kU.data;n=o+1|0;m[o]=k;}return n;}
function I2(a,b,c,d,e,f,g){var h,i,j,k;h=null;if(Iv(a,b,c,d,e,f)>0)h=Hv(a,c,d,e);if(h===null){g=d+g|0;if(Iv(a,b,c,g,e,f)>0)h=Hv(a,c,g,e);}if(h!==null){i=0;a:{while(true){if(d<=0)break a;j=Iv(a,b,c,d-1|0,e,f);if(j<=0)break a;if(j<0)return null;i=i+1|0;if(i>=4)break;d=d+(-1)|0;}return null;}if(d>0)h=Hv(a,c,d,e);k=LL(a.vy,c,d-1|0,e);if(!(k!==A4R&&k!==A4S))return null;}return h;}
function Hv(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=Cz(a.pj,CG(e));if(f===null){f=ASa(b,c,d);BK(a.pj,CG(e),f);}return f;}
function Iv(a,b,c,d,e,f){var g,h,i,j;g=c;a:{while(g<(c+f.hj|0)){h=d;while(h<(d+f.g5|0)){i=e;while(i<(e+f.hr|0)){j=LL(a.vy,c,d,e);if(j.sg())return 0;if(j===A4R)break a;if(j===A4S)break a;i=i+1|0;}h=h+1|0;}g=g+1|0;}return 1;}return (-1);}
function Q4(a,b,c){var d,e,f,g;d=1;e=c;while(e.nv!==null){d=d+1|0;e=e.nv;}f=N(GH,d);g=f.data;d=d+(-1)|0;g[d]=c;while(c.nv!==null){c=c.nv;d=d+(-1)|0;g[d]=c;}b=new Rt;b.nF=f;b.B9=g.length;return b;}
function Re(){var a=this;CJ.call(a);a.ld=null;a.g0=null;a.os=0;a.ps=0;a.xW=0.0;}
function AGY(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Ev()){var $T=CL();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.os+c)/a.ps;d=i*i;j=a.ld.c;k=a.ld.i;l=a.ld.d;m=a.g0.b6;n=a.g0.c-a.g0.b6;o=c;n=m+n*o;m=a.g0.bP+(a.g0.i-a.g0.bP)*o+a.xW;o=a.g0.b7+(a.g0.d-a.g0.b7)*o;n=n-j;p=d;q=j+n
*p;r=k+(m-k)*p;p=l+(o-l)*p;s=I(q);t=I(r+a.cF/2.0);u=I(p);b=a.k;$p=1;case 1:$z=AHP(b,s,t,u);if(C()){break _;}v=$z;o=q-A9U;n=r-A9V;m=p-A9W;BN(v,v,v,1.0);b=A5q;w=a.ld;o=o;n=n;m=m;d=a.ld.q;$p=2;case 2:AKZ(b,w,o,n,m,d,c);if(C()){break _;}return;default:Eq();}}CL().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function Wl(a){a.os=a.os+1|0;if(a.os==a.ps)B4(a);}
function AN3(a){return 2;}
function UR(){var a=this;E.call(a);a.dw=null;a.el=0;}
function A1x(){var a=new UR();ARV(a);return a;}
function ARV(a){a.dw=N(GH,1024);a.el=0;}
function SM(a,b){var c,d;if(b.fQ>=0){b=new DJ;Bp(b,B(687));M(b);}if(a.el==a.dw.data.length){c=N(GH,a.el<<1);Di(a.dw,0,c,0,a.el);a.dw=c;}a.dw.data[a.el]=b;b.fQ=a.el;d=a.el;a.el=d+1|0;Rc(a,d);return b;}
function QT(a){a.el=0;}
function ALM(a){var b,c,d,e;b=a.dw.data[0];c=a.dw.data;d=a.dw.data;e=a.el-1|0;a.el=e;c[0]=d[e];a.dw.data[a.el]=null;if(a.el>0)Mo(a,0);b.fQ=(-1);return b;}
function WZ(a,b,c){var d;d=b.h2;b.h2=c;if(c>=d)Mo(a,b.fQ);else Rc(a,b.fQ);}
function Rc(a,b){var c,d,e,f;c=a.dw.data[b];d=c.h2;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.dw.data[e];if(d>=f.h2)break;a.dw.data[b]=f;f.fQ=b;b=e;}}a.dw.data[b]=c;c.fQ=b;}
function Mo(a,b){var c,d,e,f,g,h,i,j;c=a.dw.data[b];d=c.h2;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.el)break;g=a.dw.data[e];h=g.h2;if(f>=a.el){i=null;j=Infinity;}else{i=a.dw.data[f];j=i.h2;}if(h<j){if(h>=d)break a;a.dw.data[b]=g;g.fQ=b;}else{if(j>=d)break a;a.dw.data[b]=i;i.fQ=b;e=f;}b=e;}}a.dw.data[b]=c;c.fQ=b;}
function XI(a){return a.el?0:1;}
function GH(){var a=this;E.call(a);a.hj=0;a.g5=0;a.hr=0;a.lC=0;a.fQ=0;a.lf=0.0;a.nK=0.0;a.h2=0.0;a.nv=null;a.l$=0;}
function ASa(a,b,c){var d=new GH();AXW(d,a,b,c);return d;}
function AXW(a,b,c,d){a.fQ=(-1);a.l$=0;a.hj=b;a.g5=c;a.hr=d;a.lC=b|c<<10|d<<20;}
function Eg(a,b){var c,d,e;c=b.hj-a.hj|0;d=b.g5-a.g5|0;e=b.hr-a.hr|0;return DF(c*c+d*d+e*e);}
function AUy(a,b){return b.lC!=a.lC?0:1;}
function AOA(a){return a.lC;}
function MV(a){return a.fQ<0?0:1;}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",3,"nio",5,"charset",3,"io",3,"lang",-1,"net",9,"minecraft",10,"src"]);
$rt_metadata([E,"Object",8,0,[],0,3,0,["eK",function(){return AVa(this);},"dQ",function(b){return N$(this,b);},"q3",function(){return ANX(this);}],H0,0,E,[],0,3,0,0,KL,0,E,[],3,3,0,0,E2,0,E,[KL],0,3,0,0,AEW,0,E,[],4,0,0,0,Qw,0,E,[],4,3,0,0,Dc,0,E,[],3,3,0,0,Dm,0,E,[],3,3,0,0,Ji,0,E,[],3,3,0,0,Cp,"String",8,E,[Dc,Dm,Ji],0,3,0,["q3",function(){return ANT(this);},"dQ",function(b){return DT(this,b);},"eK",function(){return AXD(this);},"kA",function(b){return AO0(this,b);}],EE,0,E,[],0,3,0,["mi",function(){return AR1(this);
}],Ey,0,EE,[],0,3,0,0,Hz,0,Ey,[],0,3,0,0,AGV,0,Hz,[],0,3,0,0,GB,0,E,[Dc,Ji],0,0,0,0,Hb,0,E,[],3,3,0,0,Bd,0,GB,[Hb],0,3,0,["oA",function(b){AQa(this,b);}],Es,0,E,[Dc],1,3,0,0,G8,0,Es,[Dm],0,3,0,["eK",function(){return AT4(this);},"dQ",function(b){return AZE(this,b);},"kA",function(b){return AWF(this,b);}],Hq,0,Hz,[],0,3,0,0,AJj,0,Hq,[],0,3,0,0,AGn,0,Hq,[],0,3,0,0,Bz,0,EE,[],0,3,0,0,B5,"RuntimeException",8,Bz,[],0,3,0,0,CV,0,E,[],3,3,0,0,Ga,0,E,[CV],3,3,0,0,QL,0,E,[Ga],3,3,0,0,NE,0,E,[Ga],3,3,0,0,Rn,0,E,[Ga],
3,3,0,0,On,0,E,[Ga],3,3,0,0,Sl,0,E,[Ga,QL,NE,Rn,On],3,3,0,0,MW,0,E,[],3,3,0,0,Jy,0,E,[CV],3,3,0,0,Ux,0,E,[CV,Sl,MW,Jy],1,3,0,["R7",function(b,c){return AQq(this,b,c);},"T3",function(b,c){return AQx(this,b,c);},"MT",function(b){return ANt(this,b);},"Jl",function(b,c,d){return AQ_(this,b,c,d);},"HI",function(b){return ASV(this,b);},"Pl",function(){return AN$(this);},"NV",function(b,c,d){return AM0(this,b,c,d);}],Bn,0,E,[],0,3,Y,0,PN,0,E,[],3,3,0,0,H3,0,E,[PN],3,3,0,0,LC,0,E,[],3,3,0,0,Gs,0,E,[Hb,H3,LC],1,3,0,
0,WS,0,Gs,[],0,3,0,0,Wb,0,Gs,[],0,3,0,0,AAv,0,E,[],4,3,0,0,AA7,0,E,[CV],1,3,0,0,J8,0,E,[],3,3,0,0,IF,0,E,[J8],0,3,0,0,Vq,0,E,[],0,3,0,0,Pi,0,E,[],0,3,A0Z,0,Fs,0,E,[J8],0,3,0,["jn",function(){ALA(this);}],Do,0,E,[CV],3,3,0,0,S1,0,E,[Do],0,0,0,["f5",function(b){return AZh(this,b);}]]);
$rt_metadata([S7,0,E,[Do],0,0,0,["f5",function(b){return AP8(this,b);}],S8,0,E,[Do],0,0,0,["f5",function(b){return AUn(this,b);}],S5,0,E,[Do],0,0,0,["f5",function(b){return AMQ(this,b);}],S6,0,E,[Do],0,0,0,["f5",function(b){return AUv(this,b);}],S3,0,E,[Do],0,0,0,["f5",function(b){return ATp(this,b);}],S4,0,E,[Do],0,0,0,["f5",function(b){return AWj(this,b);}],S2,0,E,[Do],0,0,0,["f5",function(b){return ANS(this,b);}],NK,0,E,[Do],0,0,0,["f5",function(b){return AWM(this,b);}],NJ,0,E,[Do],0,0,0,["f5",function(b)
{return AQQ(this,b);}],Ly,0,E,[],0,3,0,0,Ww,0,E,[CV],1,3,0,0,Q9,0,E,[],0,3,0,0,B3,"IOException",7,Bz,[],0,3,0,0,MN,0,GB,[Hb],0,3,0,["oA",function(b){AUT(this,b);}],EN,0,E,[],3,3,0,0,R9,0,E,[EN],0,3,0,0,Hk,0,E,[Dm],0,3,0,["dQ",function(b){return AZl(this,b);},"eK",function(){return AZa(this);},"kA",function(b){return AT8(this,b);}],Hw,0,E,[],0,3,0,0,Q6,0,Hw,[],0,3,0,0,Pz,0,E,[],0,3,0,0,RO,0,E,[],3,3,0,0,O6,0,E,[RO],0,3,0,0,Pk,0,E,[],0,3,0,0,DN,0,E,[],1,3,0,0,KA,0,DN,[],0,3,0,["gT",function(b,c,d,e,f,g){AYV(this,
b,c,d,e,f,g);},"mU",function(b,c,d,e,f,g){ADI(this,b,c,d,e,f,g);}],DY,0,E,[],0,3,0,0,Wu,0,DY,[],0,3,0,["nC",function(){AQL(this);}],AFp,0,DY,[],0,3,0,["nC",function(){AQW(this);}],Kb,0,E,[],4,3,0,0,R5,0,Fs,[],0,0,0,["jn",function(){AEQ(this);}],Pq,0,E,[],3,3,0,0,G3,0,E,[Pq],3,3,0,0,Fr,0,E,[G3],1,3,0,["pO",function(b){return Oa(this,b);}],Iu,0,E,[G3],3,3,0,0,Fl,0,Fr,[Iu],1,3,0,["jQ",function(){return Nf(this);}],Kw,0,Fl,[],1,3,0,0,Mf,0,E,[G3],3,3,0,0,Tc,0,E,[Mf],3,3,0,0,Z1,0,Kw,[Tc],0,3,0,0,AIE,0,E,[CV],1,3,
0,0,Ff,0,E,[CV],1,3,0,0,Xd,0,Ff,[],1,3,0,0,AFt,0,Ff,[],1,3,0,0,HJ,0,E,[G3],3,3,0,0,Et,0,Fr,[HJ],1,3,0,["dQ",function(b){return AVV(this,b);},"eK",function(){return AM2(this);}],E1,0,E,[],3,3,0,0,AKI,0,Et,[E1,Dc],0,3,0,["q1",function(b){return Tb(this,b);},"pO",function(b){return Sx(this,b);},"jQ",function(){return Mb(this);},"kF",function(){return Hn(this);}],J2,0,E,[],3,3,0,0,E7,0,E,[J2],1,3,0,0,XK,0,E7,[E1,Dc],0,3,0,0]);
$rt_metadata([AE4,0,Ff,[],1,3,0,0,UI,0,E,[],0,3,0,0,AAk,0,E,[],0,3,0,0,Ee,"Enum",8,E,[Dm,Dc],1,3,0,["dQ",function(b){return ANm(this,b);},"eK",function(){return AQn(this);},"kA",function(b){return AP3(this,b);}],Eo,0,Ee,[],12,3,0,0,NF,0,E,[],3,3,0,0,Rj,0,E,[NF],0,0,0,["Ct",function(b){Cx(this,b);},"EF",function(b){ATf(this,b);}],AK0,0,E,[CV],1,3,0,0,Ti,0,E,[CV],3,3,0,0,S0,0,E,[Ti],0,0,0,["UB",function(){return ATc(this);}],GM,0,E,[H3],1,3,0,0,AKD,0,GM,[],0,3,0,["zf",function(){return AU1(this);},"mO",function(b,
c,d){return AZA(this,b,c,d);},"uz",function(){return AVz(this);}],Hs,0,GM,[],0,3,0,0,MS,0,E,[],3,3,0,0,Nh,0,Hs,[MS],0,3,0,0,KO,0,E,[Dm],1,3,0,["kA",function(b){return AWi(this,b);}],SL,0,Hs,[],0,3,0,["zf",function(){return AM1(this);},"mO",function(b,c,d){return AGF(this,b,c,d);},"uz",function(){return AR3(this);}],K1,0,E,[],1,3,0,0,YW,0,K1,[],0,3,0,0,AD6,0,E,[],0,3,0,0,HH,0,E,[],0,3,0,["xz",function(b,c,d){return AVl(this,b,c,d);}],Q_,0,HH,[],0,0,0,["xz",function(b,c,d){return ATa(this,b,c,d);}],CN,"Entity",
11,E,[],1,3,0,["zL",function(){B4(this);},"EU",function(){AAc(this);},"Am",function(){TR(this);},"ym",function(){return AS2(this);},"B6",function(b){AEV(this,b);},"Ad",function(b){U8(this,b);},"Dz",function(){return AAp(this);},"s6",function(b){return Y$(this,b);},"vb",function(b){AWA(this,b);},"sO",function(b){AVI(this,b);},"eP",function(b,c){return AEx(this,b,c);},"ki",function(){return AYv(this);},"p6",function(){return AXl(this);},"yt",function(b,c){AZz(this,b,c);},"sC",function(b){return APw(this,b);},
"xZ",function(b){return APG(this,b);},"yA",function(){AAw(this);},"xs",function(){return AYx(this);}],D_,"EntityLiving",11,CN,[],0,3,0,["ki",function(){return APY(this);},"p6",function(){return AS5(this);},"pY",function(){return AKO(this);},"EU",function(){AHW(this);},"yA",function(){AFE(this);},"dR",function(){AG7(this);},"eP",function(b,c){return Xy(this,b,c);},"ue",function(){return AXJ(this);},"sZ",function(){return AN5(this);},"sF",function(){return AOH(this);},"BO",function(b){AIy(this,b);},"k0",function()
{return ANq(this);},"Ad",function(b){AKv(this,b);},"m1",function(){XX(this);},"uo",function(){AK8(this);},"sK",function(b,c,d){return Vf(this,b,c,d);},"Am",function(){Xf(this);}],Hu,"EntityCreature",11,D_,[],0,3,0,["uo",function(){AKe(this);},"mr",function(b,c){AHd(this,b,c);},"vs",function(){return AFK(this);}],Dp,"EntityMonster",11,Hu,[],0,3,0,["m1",function(){YC(this);},"dR",function(){AFS(this);},"vs",function(){return AFd(this);},"eP",function(b,c){return Wk(this,b,c);},"mr",function(b,c){ALa(this,b,c);
},"qO",function(b,c,d){return W7(this,b,c,d);},"sK",function(b,c,d){return Un(this,b,c,d);}],HD,"EntityZombie",11,Dp,[],0,3,0,["m1",function(){AC2(this);},"k0",function(){return APx(this);}],HR,"EntitySkeleton",11,Dp,[],0,3,0,["m1",function(){ADx(this);},"mr",function(b,c){ACX(this,b,c);},"k0",function(){return AQU(this);}],In,"EntityCreeper",11,Dp,[],0,3,0,["uo",function(){Vy(this);},"mr",function(b,c){Wm(this,b,c);},"k0",function(){return AMX(this);}],IN,"EntitySpider",11,Dp,[],0,3,0,["vs",function(){return ALE(this);
},"mr",function(b,c){U_(this,b,c);},"k0",function(){return ARA(this);}],FF,"EntityAnimal",11,Hu,[],1,3,0,["qO",function(b,c,d){return AI3(this,b,c,d);},"sK",function(b,c,d){return AFP(this,b,c,d);}],I6,"EntitySheep",11,FF,[],0,3,0,["eP",function(b,c){return AB4(this,b,c);},"ue",function(){return AWH(this);},"sZ",function(){return AUN(this);},"sF",function(){return AQB(this);}],He,"EntityPig",11,FF,[],0,3,0,["ue",function(){return ANo(this);},"sZ",function(){return AYm(this);},"sF",function(){return AO4(this);
},"sC",function(b){return AQg(this,b);},"k0",function(){return APb(this);}],De,0,E,[Dc],0,3,0,0,Lm,0,E,[],0,3,0,0,US,0,E,[],0,3,0,0,P,"Block",11,E,[],0,3,J,["fB",function(){return AX7(this);},"dO",function(){return APs(this);},"zj",function(b,c,d,e){return AAt(this,b,c,d,e);},"n9",function(b,c,d,e,f){return ABG(this,b,c,d,e,f);},"sj",function(b,c,d,e,f){return Xv(this,b,c,d,e,f);},"em",function(b,c){return AWS(this,b,c);},"bZ",function(b){return AON(this,b);},"nn",function(b,c,d,e){return Jp(this,b,c,d,e);},
"BR",function(b,c,d,e,f,g){AGg(this,b,c,d,e,f,g);},"gH",function(b,c,d,e){return Lb(this,b,c,d,e);},"dy",function(){return AVs(this);},"nz",function(b,c){return AWg(this,b,c);},"nI",function(){return AUw(this);},"ew",function(b,c,d,e,f){ACU(this,b,c,d,e,f);},"jK",function(b,c,d,e,f){AJH(this,b,c,d,e,f);},"l4",function(b,c,d,e,f){VO(this,b,c,d,e,f);},"ep",function(b,c,d,e,f){UC(this,b,c,d,e,f);},"k_",function(){return AUE(this);},"e1",function(b,c,d,e){WI(this,b,c,d,e);},"kl",function(b,c,d,e){VK(this,b,c,d,
e);},"d_",function(b){return AQD(this,b);},"dq",function(b,c){return ANB(this,b,c);},"Ex",function(b,c,d,e,f){T9(this,b,c,d,e,f);},"DG",function(b,c,d,e,f,g){AAh(this,b,c,d,e,f,g);},"vN",function(b){return ARN(this,b);},"mj",function(b,c,d,e,f,g){return IC(this,b,c,d,e,f,g);},"qW",function(b,c,d,e){ALe(this,b,c,d,e);},"oc",function(){return AOz(this);},"ff",function(b,c,d,e){return Z2(this,b,c,d,e);},"kr",function(b,c,d,e,f){return ABT(this,b,c,d,e,f);},"nc",function(b,c,d,e,f){AEA(this,b,c,d,e,f);},"s0",function(b,
c,d,e,f){Uv(this,b,c,d,e,f);},"pn",function(b,c,d,e,f){VV(this,b,c,d,e,f);},"oY",function(b,c,d,e,f,g){ABj(this,b,c,d,e,f,g);},"vf",function(b,c,d,e){AKm(this,b,c,d,e);}],OH,0,E,[],3,3,0,0,AD$,0,Fl,[E1,Dc,OH],0,3,0,["kF",function(){return CZ(this);},"q1",function(b){return U(this,b);}],Dg,0,E,[CV],3,3,0,0,Ql,0,E,[Dg],0,0,0,["fM",function(){return APh(this);}],Qk,0,E,[Dg],0,0,0,["fM",function(){return AM5(this);}],Qj,0,E,[Dg],0,0,0,["fM",function(){return ARf(this);}],Qi,0,E,[Do],0,0,0,["f5",function(b){return AWs(this,
b);}],Px,0,E,[],0,0,0,0,Cq,"IllegalArgumentException",8,B5,[],0,3,0,0,Rp,"UnsupportedCharsetException",6,Cq,[],0,3,0,0,EG,"NullPointerException",8,B5,[],0,3,0,0,WJ,0,E,[CV],4,3,0,0,EA,0,E,[],1,3,0,0]);
$rt_metadata([Kf,0,EA,[Dm],1,3,0,0,AAn,0,E,[],0,3,0,0,NS,0,E,[],0,3,0,0,Ej,0,E,[H3,LC],1,3,0,["iw",function(b,c,d){ANc(this,b,c,d);}],G1,0,Ej,[],0,3,0,0,WF,0,G1,[],0,3,0,0,S9,0,Ej,[],0,0,0,["oW",function(b){AQw(this,b);}],AAu,"IllegalCharsetNameException",6,Cq,[],0,3,0,0,KN,0,E,[],128,3,0,0,QG,0,KN,[],4,3,0,0,G9,0,E,[],0,3,0,0,ACv,0,G9,[],4,0,0,0,XZ,0,G9,[],4,0,0,0,JY,"BlockStone",11,P,[],0,3,0,["dq",function(b,c){return AXV(this,b,c);}],VM,"BlockGrass",11,P,[],0,3,0,["bZ",function(b){return AW0(this,b);},"ew",
function(b,c,d,e,f){YT(this,b,c,d,e,f);},"dq",function(b,c){return ART(this,b,c);}],ACW,"BlockDirt",11,P,[],0,3,0,0,BY,0,E,[],0,3,0,["me",function(){return AXE(this);},"c3",function(){return ASt(this);},"qv",function(){return AXi(this);},"sg",function(){return AVA(this);}],Fa,"BlockFlower",11,P,[],0,3,0,["ff",function(b,c,d,e){return AGC(this,b,c,d,e);},"pE",function(b){return AQA(this,b);},"ep",function(b,c,d,e,f){ADz(this,b,c,d,e,f);},"ew",function(b,c,d,e,f){Zy(this,b,c,d,e,f);},"C$",function(b,c,d,e){return AIA(this,
b,c,d,e);},"gH",function(b,c,d,e){return ABx(this,b,c,d,e);},"dy",function(){return AWb(this);},"fB",function(){return ANH(this);},"dO",function(){return AW5(this);}],AHu,"BlockSapling",11,Fa,[],0,3,0,["ew",function(b,c,d,e,f){ZH(this,b,c,d,e,f);}],GG,0,P,[],1,3,0,["bZ",function(b){return AM9(this,b);},"fB",function(){return AZt(this);},"dy",function(){return AY2(this);},"nz",function(b,c){return AXT(this,b,c);},"n9",function(b,c,d,e,f){return ALJ(this,b,c,d,e,f);},"gH",function(b,c,d,e){return T7(this,b,c,
d,e);},"dO",function(){return AXo(this);},"dq",function(b,c){return AT$(this,b,c);},"d_",function(b){return AV6(this,b);},"oY",function(b,c,d,e,f,g){AHK(this,b,c,d,e,f,g);},"k_",function(){return AOn(this);},"zj",function(b,c,d,e){return ZS(this,b,c,d,e);},"ew",function(b,c,d,e,f){ALm(this,b,c,d,e,f);},"oc",function(){return AYZ(this);},"jK",function(b,c,d,e,f){Ut(this,b,c,d,e,f);},"e1",function(b,c,d,e){AL2(this,b,c,d,e);},"ep",function(b,c,d,e,f){AF0(this,b,c,d,e,f);}],ZG,"BlockFlowing",11,GG,[],0,3,0,["ew",
function(b,c,d,e,f){AJg(this,b,c,d,e,f);},"e1",function(b,c,d,e){Xz(this,b,c,d,e);}],ADE,"BlockStationary",11,GG,[],0,3,0,["ep",function(b,c,d,e,f){ABJ(this,b,c,d,e,f);}],HE,"BlockSand",11,P,[],0,3,0,["e1",function(b,c,d,e){AL0(this,b,c,d,e);},"ep",function(b,c,d,e,f){AMm(this,b,c,d,e,f);},"ew",function(b,c,d,e,f){AJ4(this,b,c,d,e,f);},"k_",function(){return AUD(this);}],ACc,"BlockGravel",11,HE,[],0,3,0,["dq",function(b,c){return AZC(this,b,c);}],UJ,"BlockOre",11,P,[],0,3,0,["dq",function(b,c){return AUP(this,
b,c);},"d_",function(b){return ARS(this,b);}],AAA,"BlockLog",11,P,[],0,3,0,["d_",function(b){return AX4(this,b);},"dq",function(b,c){return ANa(this,b,c);},"bZ",function(b){return AOJ(this,b);}],J5,0,P,[],0,3,0,["n9",function(b,c,d,e,f){return AKU(this,b,c,d,e,f);}],Yb,"BlockLeaves",11,J5,[],0,3,0,["ew",function(b,c,d,e,f){ADt(this,b,c,d,e,f);},"d_",function(b){return APJ(this,b);},"dq",function(b,c){return AVm(this,b,c);},"dy",function(){return ATS(this);},"nc",function(b,c,d,e,f){AMz(this,b,c,d,e,f);}],AFZ,
"BlockSponge",11,P,[],0,3,0,["e1",function(b,c,d,e){AFw(this,b,c,d,e);},"kl",function(b,c,d,e){AH1(this,b,c,d,e);}],K3,0,P,[],0,3,0,["dy",function(){return AYO(this);},"n9",function(b,c,d,e,f){return Ul(this,b,c,d,e,f);}],AKL,"BlockGlass",11,K3,[],0,3,0,["d_",function(b){return AO5(this,b);}],ACk,"BlockMushroom",11,Fa,[],0,3,0,["pE",function(b){return ADY(this,b);},"C$",function(b,c,d,e){return YN(this,b,c,d,e);}],W5,"BlockOreBlock",11,P,[],0,3,0,["bZ",function(b){return AUX(this,b);}],U5,"BlockStep",11,P,[],
0,3,0,["bZ",function(b){return AZb(this,b);},"dy",function(){return AVR(this);},"ep",function(b,c,d,e,f){Xb(this,b,c,d,e,f);},"e1",function(b,c,d,e){WU(this,b,c,d,e);},"dq",function(b,c){return ARg(this,b,c);},"fB",function(){return APL(this);},"n9",function(b,c,d,e,f){return AMK(this,b,c,d,e,f);}],AIL,"BlockTNT",11,P,[],0,3,0,["bZ",function(b){return AVd(this,b);},"d_",function(b){return AOt(this,b);},"qW",function(b,c,d,e){ABP(this,b,c,d,e);},"l4",function(b,c,d,e,f){AMt(this,b,c,d,e,f);}],YE,"BlockBookshelf",
11,P,[],0,3,0,["bZ",function(b){return AZu(this,b);},"d_",function(b){return AUY(this,b);}],TE,"BlockObsidian",11,JY,[],0,3,0,["d_",function(b){return AT6(this,b);},"dq",function(b,c){return AOk(this,b,c);}],AI6,"BlockTorch",11,P,[],0,3,0,["gH",function(b,c,d,e){return AHS(this,b,c,d,e);},"dy",function(){return ATj(this);},"fB",function(){return AO9(this);},"dO",function(){return ASr(this);},"ff",function(b,c,d,e){return AGP(this,b,c,d,e);},"s0",function(b,c,d,e,f){AIj(this,b,c,d,e,f);},"ew",function(b,c,d,
e,f){AMk(this,b,c,d,e,f);},"e1",function(b,c,d,e){W4(this,b,c,d,e);},"ep",function(b,c,d,e,f){AE2(this,b,c,d,e,f);},"mj",function(b,c,d,e,f,g){return AE9(this,b,c,d,e,f,g);},"jK",function(b,c,d,e,f){AKN(this,b,c,d,e,f);}],AJs,"BlockFire",11,P,[],0,3,0,["gH",function(b,c,d,e){return ALO(this,b,c,d,e);},"dy",function(){return AVW(this);},"fB",function(){return AXM(this);},"dO",function(){return AP0(this);},"d_",function(b){return APt(this,b);},"k_",function(){return ARP(this);},"ew",function(b,c,d,e,f){TD(this,
b,c,d,e,f);},"nI",function(){return AUe(this);},"ff",function(b,c,d,e){return AHY(this,b,c,d,e);},"ep",function(b,c,d,e,f){W9(this,b,c,d,e,f);},"e1",function(b,c,d,e){X0(this,b,c,d,e);},"jK",function(b,c,d,e,f){AMA(this,b,c,d,e,f);}],DM,0,P,[],1,3,0,["e1",function(b,c,d,e){AI8(this,b,c,d,e);},"kl",function(b,c,d,e){AGG(this,b,c,d,e);}],VT,"BlockMobSpawner",11,DM,[],0,3,0,["rm",function(){return APQ(this);},"dy",function(){return AVY(this);}],Vj,"BlockStairs",11,P,[],0,3,0,["dy",function(){return AVL(this);},
"fB",function(){return AO3(this);},"dO",function(){return AQZ(this);},"n9",function(b,c,d,e,f){return AJ5(this,b,c,d,e,f);},"BR",function(b,c,d,e,f,g){AEq(this,b,c,d,e,f,g);},"ep",function(b,c,d,e,f){ACJ(this,b,c,d,e,f);},"jK",function(b,c,d,e,f){AJI(this,b,c,d,e,f);},"pn",function(b,c,d,e,f){WO(this,b,c,d,e,f);},"l4",function(b,c,d,e,f){YS(this,b,c,d,e,f);},"zj",function(b,c,d,e){return AHt(this,b,c,d,e);},"vN",function(b){return AX5(this,b);},"oc",function(){return AXw(this);},"dq",function(b,c){return AUM(this,
b,c);},"d_",function(b){return AR9(this,b);},"em",function(b,c){return AP1(this,b,c);},"bZ",function(b){return AXs(this,b);},"sj",function(b,c,d,e,f){return AHD(this,b,c,d,e,f);},"k_",function(){return AOP(this);},"nn",function(b,c,d,e){return AGX(this,b,c,d,e);},"oY",function(b,c,d,e,f,g){Yf(this,b,c,d,e,f,g);},"nI",function(){return AQM(this);},"nz",function(b,c){return AQV(this,b,c);},"ff",function(b,c,d,e){return AG3(this,b,c,d,e);},"e1",function(b,c,d,e){Ya(this,b,c,d,e);},"kl",function(b,c,d,e){Up(this,
b,c,d,e);},"DG",function(b,c,d,e,f,g){ACT(this,b,c,d,e,f,g);},"Ex",function(b,c,d,e,f){AHw(this,b,c,d,e,f);},"nc",function(b,c,d,e,f){AK$(this,b,c,d,e,f);},"ew",function(b,c,d,e,f){ALb(this,b,c,d,e,f);},"kr",function(b,c,d,e,f){return ABU(this,b,c,d,e,f);},"qW",function(b,c,d,e){UY(this,b,c,d,e);}],AA8,"BlockChest",11,DM,[],0,3,0,["sj",function(b,c,d,e,f){return ZV(this,b,c,d,e,f);},"bZ",function(b){return AX$(this,b);},"ff",function(b,c,d,e){return AET(this,b,c,d,e);},"kl",function(b,c,d,e){AMM(this,b,c,d,
e);},"kr",function(b,c,d,e,f){return ABb(this,b,c,d,e,f);},"rm",function(){return ARv(this);}],AFv,"BlockGears",11,P,[],0,3,0,["gH",function(b,c,d,e){return AAd(this,b,c,d,e);},"dy",function(){return ANG(this);},"fB",function(){return AVn(this);},"dO",function(){return AW3(this);},"d_",function(b){return AYy(this,b);},"nI",function(){return AN8(this);}],ACD,"BlockWorkbench",11,P,[],0,3,0,["bZ",function(b){return APm(this,b);},"kr",function(b,c,d,e,f){return AB1(this,b,c,d,e,f);}],AFu,"BlockCrops",11,Fa,[],0,
3,0,["pE",function(b){return AQO(this,b);},"ew",function(b,c,d,e,f){AEf(this,b,c,d,e,f);},"em",function(b,c){return AXK(this,b,c);},"dO",function(){return AU0(this);},"l4",function(b,c,d,e,f){AH7(this,b,c,d,e,f);},"dq",function(b,c){return ASu(this,b,c);},"d_",function(b){return AU_(this,b);}],AK9,"BlockFarmland",11,P,[],0,3,0,["gH",function(b,c,d,e){return WE(this,b,c,d,e);},"dy",function(){return AOm(this);},"fB",function(){return AST(this);},"em",function(b,c){return AZB(this,b,c);},"ew",function(b,c,d,e,
f){AHL(this,b,c,d,e,f);},"nc",function(b,c,d,e,f){AFB(this,b,c,d,e,f);},"ep",function(b,c,d,e,f){T0(this,b,c,d,e,f);},"dq",function(b,c){return API(this,b,c);}],ABf,"BlockFurnace",11,DM,[],0,3,0,["e1",function(b,c,d,e){X2(this,b,c,d,e);},"sj",function(b,c,d,e,f){return AE6(this,b,c,d,e,f);},"jK",function(b,c,d,e,f){ZM(this,b,c,d,e,f);},"bZ",function(b){return AOl(this,b);},"kr",function(b,c,d,e,f){return AB3(this,b,c,d,e,f);},"rm",function(){return AXt(this);}],RC,"BlockSign",11,DM,[],0,3,0,["dO",function()
{return AQS(this);},"fB",function(){return AV5(this);},"dy",function(){return AVZ(this);},"rm",function(){return AS3(this);},"ff",function(b,c,d,e){return ABX(this,b,c,d,e);},"dq",function(b,c){return AXR(this,b,c);},"ep",function(b,c,d,e,f){VC(this,b,c,d,e,f);}],DE,"TileEntity",11,E,[],0,3,0,["rV",function(){AA1(this);},"jg",function(){XN(this);}]]);
$rt_metadata([HN,0,DE,[],0,3,0,0,W,0,E,[],0,3,Bw,["hM",function(b,c,d,e,f,g,h){return ABE(this,b,c,d,e,f,g,h);},"vv",function(b,c){return AZc(this,b,c);},"mK",function(b,c,d){return AMr(this,b,c,d);},"qt",function(b,c){AO8(this,b,c);},"vp",function(b,c,d,e,f){AVh(this,b,c,d,e,f);},"mC",function(b){return AZI(this,b);},"nA",function(b){return AO1(this,b);},"v5",function(b,c){AUt(this,b,c);}],ADs,"BlockDoor",11,P,[],0,3,0,["em",function(b,c){return AY1(this,b,c);},"dy",function(){return ASo(this);},"fB",function()
{return APW(this);},"dO",function(){return ANy(this);},"nn",function(b,c,d,e){return ABD(this,b,c,d,e);},"gH",function(b,c,d,e){return Vl(this,b,c,d,e);},"vf",function(b,c,d,e){ACL(this,b,c,d,e);},"pn",function(b,c,d,e,f){AEN(this,b,c,d,e,f);},"kr",function(b,c,d,e,f){return Zj(this,b,c,d,e,f);},"ep",function(b,c,d,e,f){X6(this,b,c,d,e,f);},"dq",function(b,c){return AXQ(this,b,c);},"mj",function(b,c,d,e,f,g){return Tx(this,b,c,d,e,f,g);},"ff",function(b,c,d,e){return AES(this,b,c,d,e);}],Yw,"BlockLadder",11,
P,[],0,3,0,["gH",function(b,c,d,e){return YK(this,b,c,d,e);},"nn",function(b,c,d,e){return Zv(this,b,c,d,e);},"dy",function(){return APE(this);},"fB",function(){return AVU(this);},"dO",function(){return AYp(this);},"ff",function(b,c,d,e){return AIp(this,b,c,d,e);},"s0",function(b,c,d,e,f){Uc(this,b,c,d,e,f);},"ep",function(b,c,d,e,f){AFy(this,b,c,d,e,f);},"d_",function(b){return AVB(this,b);}],AIs,"BlockMinecartTrack",11,P,[],0,3,0,["gH",function(b,c,d,e){return X_(this,b,c,d,e);},"dy",function(){return APo(this);
},"mj",function(b,c,d,e,f,g){return AGl(this,b,c,d,e,f,g);},"vf",function(b,c,d,e){AG1(this,b,c,d,e);},"em",function(b,c){return ATF(this,b,c);},"fB",function(){return AUo(this);},"dO",function(){return AR_(this);},"d_",function(b){return ATM(this,b);},"ff",function(b,c,d,e){return AIr(this,b,c,d,e);},"e1",function(b,c,d,e){AIb(this,b,c,d,e);},"ep",function(b,c,d,e,f){AEF(this,b,c,d,e,f);}],AMI,0,W,[],0,3,0,["hM",function(b,c,d,e,f,g,h){return AKM(this,b,c,d,e,f,g,h);}],ACN,0,KO,[],0,3,0,0,KY,0,EA,[Dm],1,3,
0,0,K9,0,Kf,[],1,0,0,0,SI,0,K9,[],0,0,0,0,ALz,0,KY,[],0,0,0,0,RB,0,E,[],3,3,0,0,J3,0,EA,[Dm,Hb,Ji,RB],1,3,0,0,Nl,"GZIPException",2,B3,[],0,3,0,0,L2,0,BY,[],0,3,0,["c3",function(){return AU9(this);},"qv",function(){return AVF(this);},"sg",function(){return ANh(this);}],J9,0,BY,[],0,3,0,["me",function(){return AZQ(this);},"c3",function(){return AQ9(this);}],LN,0,BY,[],0,3,0,["c3",function(){return AWC(this);},"qv",function(){return AYJ(this);},"sg",function(){return AOo(this);}],Fi,0,W,[],0,3,0,["vv",function(b,
c){return AX3(this,b,c);},"qt",function(b,c){AWK(this,b,c);},"vp",function(b,c,d,e,f){APk(this,b,c,d,e,f);},"mC",function(b){return APM(this,b);}],Mu,0,Fi,[],0,3,A1u,0,RF,0,Fi,[],0,3,A1w,["nA",function(b){return AVu(this,b);}],Ss,0,Fi,[],0,3,A1c,0,AAj,0,W,[],0,3,0,["hM",function(b,c,d,e,f,g,h){return AEz(this,b,c,d,e,f,g,h);}],JX,0,W,[],0,3,0,["mK",function(b,c,d){return No(this,b,c,d);}],AJl,0,W,[],0,3,0,["mK",function(b,c,d){return ABM(this,b,c,d);}],AFW,0,W,[],0,3,0,["vv",function(b,c){return AR$(this,b,
c);},"qt",function(b,c){AXk(this,b,c);},"vp",function(b,c,d,e,f){AQp(this,b,c,d,e,f);},"mC",function(b){return ATE(this,b);}],AIH,0,JX,[],0,3,0,["mK",function(b,c,d){return AJZ(this,b,c,d);}],AH6,0,W,[],0,3,0,["hM",function(b,c,d,e,f,g,h){return AK_(this,b,c,d,e,f,g,h);}],R3,0,W,[],0,3,0,["hM",function(b,c,d,e,f,g,h){return AAE(this,b,c,d,e,f,g,h);}],Fb,0,W,[],0,3,0,0,TL,0,W,[],0,3,0,["hM",function(b,c,d,e,f,g,h){return XL(this,b,c,d,e,f,g,h);}],ACy,0,W,[],0,3,0,["hM",function(b,c,d,e,f,g,h){return T6(this,
b,c,d,e,f,g,h);}],AD7,0,W,[],0,3,0,["hM",function(b,c,d,e,f,g,h){return Zz(this,b,c,d,e,f,g,h);}],ALY,0,W,[],0,3,0,["mK",function(b,c,d){return AC0(this,b,c,d);}],AJB,0,W,[],0,3,0,["hM",function(b,c,d,e,f,g,h){return YB(this,b,c,d,e,f,g,h);}],ALs,0,W,[],0,3,0,["v5",function(b,c){ABK(this,b,c);},"qt",function(b,c){APg(this,b,c);}],LH,0,E,[],3,0,0,0,ABv,0,E,[LH],4,3,0,["Bi",function(b){AMZ(this,b);},"mt",function(){ARn(this);},"vZ",function(){return ANJ(this);},"jE",function(b,c,d){AXz(this,b,c,d);}],Pg,"CloneNotSupportedException",
8,Bz,[],0,3,0,0,Ld,0,E,[],4,3,0,0,Is,0,E,[],3,3,0,0,JU,0,E,[Is,E1],0,0,0,["dQ",function(b){return AVb(this,b);},"eK",function(){return AS_(this);}],Hg,0,JU,[],0,0,0,0,BV,"IndexOutOfBoundsException",8,B5,[],0,3,0,0,L_,"StringIndexOutOfBoundsException",8,BV,[],0,3,0,0,FI,0,E,[],3,3,0,0,Sv,0,E,[FI],0,3,0,["jn",function(){ADV(this);}],ES,"EOFException",7,B3,[],0,3,0,0,Ea,0,E,[],0,3,0,0,EL,0,E,[],0,3,0,0,JS,0,E,[],4,0,0,0]);
$rt_metadata([M8,0,Ej,[],0,0,0,["oW",function(b){AV3(this,b);}],IK,0,E,[],0,3,0,0,AG2,0,E,[],4,3,0,0,HL,0,E,[],0,3,0,0,JE,0,J3,[],1,0,0,0,Xj,0,JE,[],0,0,0,0,JZ,0,E,[],1,3,0,0,LQ,0,E,[],0,3,0,0,VP,0,E,[CV],1,3,0,0,M9,0,E,[CV],3,3,0,0,Ur,0,E,[CV,M9],1,3,0,0,I4,0,E,[],4,0,0,0,Lo,0,JZ,[],1,3,0,0,M$,0,Lo,[],0,3,0,0,AIT,0,E,[],4,3,0,0,Fj,0,E,[],4,0,0,0,JL,0,E,[],4,0,0,0,Gl,"UTFDataFormatException",7,B3,[],0,3,0,0,Tn,"NegativeArraySizeException",8,B5,[],0,3,0,0,Wy,0,E,[Jy],1,3,0,["LI",function(b){return AZN(this,b);
},"Tk",function(){return AN6(this);}],IL,"IllegalMonitorStateException",8,B5,[],0,3,0,0,VE,0,E,[],0,0,0,0,DJ,"IllegalStateException",8,Bz,[],0,3,0,0,ADu,0,E,[CV],1,3,0,0,PJ,0,E,[FI],0,3,0,["jn",function(){ALl(this);}],Of,0,E,[FI],0,3,0,0,FZ,0,B3,[],0,3,0,0,SV,"AssertionError",8,Ey,[],0,3,0,0,Eh,0,Bz,[],0,3,0,0,L0,0,E,[],1,3,0,0,Pl,0,E,[],3,3,0,0,Pr,0,E,[],3,3,0,0,MM,0,E,[FI,Pl,Pr],0,0,0,["jn",function(){AJQ(this);}],JP,0,L0,[],1,3,0,0,Om,0,JP,[],0,3,0,0,Du,"Inflate$Return",2,Bz,[],0,0,0,0,AH4,0,E,[E1],0,3,0,
0,Ms,0,E,[LH],4,3,0,["jE",function(b,c,d){ATD(this,b,c,d);},"mt",function(){AWf(this);},"Bi",function(b){AYB(this,b);},"vZ",function(){return AW7(this);}],HF,0,E,[],0,3,0,0,Nw,0,E,[],3,3,0,0,Bo,0,Bn,[Nw],0,3,BO,0,X$,0,E,[],0,3,0,0,Ln,0,E,[],0,3,0,0,G6,0,E,[],0,3,P8,0,AH2,0,E,[],0,3,0,0,AMj,0,Ej,[],0,3,0,["oW",function(b){AXg(this,b);},"iw",function(b,c,d){Oy(this,b,c,d);}],Ii,"ArrayStoreException",8,B5,[],0,3,0,0,LW,0,E,[],3,3,0,0,FL,0,E,[LW],0,3,0,["dL",function(b,c,d){return X4(this,b,c,d);},"nf",function(b,
c,d){return Xw(this,b,c,d);},"ea",function(b,c,d){return Z5(this,b,c,d);},"qY",function(b,c,d){return AHP(this,b,c,d);},"j7",function(b,c,d){return We(this,b,c,d);}],J$,0,E,[],0,3,Bv,0]);
$rt_metadata([AHN,0,E,[],0,3,0,0,Fm,0,E,[],0,3,0,0,CI,0,Fm,[],0,3,0,["nD",function(b,c){UB(this,b,c);},"EK",function(b,c,d){Va(this,b,c,d);},"y5",function(b,c,d){ATB(this,b,c,d);},"ip",function(b){AHq(this,b);},"hH",function(){AKu(this);},"pQ",function(){AUa(this);},"nW",function(){AC8(this);},"mN",function(){return AOE(this);}],AAx,0,E,[],0,3,0,0,Kp,0,E,[Dc],1,3,0,0,DW,0,Kp,[Dc],0,3,0,0,LR,0,E,[],3,3,0,0,HA,0,E,[Dc,LR],1,3,0,0,Sk,0,E,[LR],3,3,0,0,LE,0,E,[Sk],3,3,0,0,O4,0,E,[],3,3,0,0,Kk,0,E,[O4],3,3,0,0,Rd,
0,HA,[Dc,LE,Kk],0,3,0,0,Si,0,E,[LE],3,3,0,0,OZ,0,E,[Kk],3,3,0,0,F5,0,HA,[Dc,Si,OZ],0,3,0,0,PQ,0,E,[FI],0,3,0,["jn",function(){ADw(this);}],AJp,"CoderMalfunctionError",6,Ey,[],0,3,0,0,GP,0,E,[],3,3,0,0,QN,0,E,[GP],3,3,0,0,Ys,0,E,[QN],0,0,0,0,OJ,0,E,[],0,0,0,0,HW,"EntityPlayer",11,D_,[],0,3,0,["yA",function(){ABa(this);},"BO",function(b){AFY(this,b);},"yt",function(b,c){ARl(this,b,c);},"pY",function(){return AVp(this);},"eP",function(b,c){return Uf(this,b,c);}],ABN,"EntityPlayerSP",11,HW,[],0,3,0,["uo",function()
{Wq(this);},"m1",function(){AF7(this);}],AEw,0,E,[],0,3,0,0,NB,0,E,[],0,3,0,0,Rx,0,E,[],0,3,0,0,EQ,0,E,[],3,3,0,0,RJ,0,E,[EQ],0,3,0,["i3",function(b,c){return DS(this,b,c);},"iC",function(b,c){AAT(this,b,c);},"fN",function(b){return OU(this,b);},"fp",function(){return ARi(this);},"jg",function(){V4(this);}],C_,0,Hw,[],0,3,0,0,DZ,0,CI,[],1,3,0,["hB",function(b,c,d){XP(this,b,c,d);},"EK",function(b,c,d){AIz(this,b,c,d);},"y5",function(b,c,d){AYu(this,b,c,d);},"nD",function(b,c){V_(this,b,c);},"nW",function(){
Wz(this);},"mN",function(){return AZn(this);}],AKf,0,DZ,[],0,3,0,["nW",function(){AGq(this);},"rA",function(b){AND(this,b);},"kg",function(){ARR(this);},"hB",function(b,c,d){Zo(this,b,c,d);},"rc",function(b){TZ(this,b);}],Le,0,Fm,[],0,3,0,0,Tk,0,E,[],3,3,0,0,V9,0,E,[Tk],0,3,0,0,I7,0,E,[],0,3,0,0,Sj,0,E,[],0,3,0,0,Ny,0,E,[],0,3,0,0,AFI,0,DY,[],0,3,0,["nC",function(){ARU(this);}],XS,0,DY,[],0,3,0,["nC",function(){AX1(this);}],AMe,0,DY,[],0,3,0,["nC",function(){AUk(this);}],ACi,0,CI,[],0,3,0,["pQ",function(){AVx(this);
},"nD",function(b,c){AIi(this,b,c);},"hH",function(){ADo(this);},"ip",function(b){XY(this,b);},"hB",function(b,c,d){Vn(this,b,c,d);}],Mx,0,E,[],0,3,0,0,HC,0,E,[],0,3,0,0,Ox,0,E,[],0,0,0,0,ACw,0,E,[],0,3,0,0,B6,0,E,[],4,3,0,0,Vv,0,E,[EQ],0,3,0,["fN",function(b){return Fo(this,b);},"i3",function(b,c){return AAf(this,b,c);},"iC",function(b,c){AUp(this,b,c);},"fp",function(){return AX6(this);},"jg",function(){Zf(this);}],Wg,0,E,[EQ],0,3,0,["fN",function(b){return AVf(this,b);},"i3",function(b,c){return APr(this,
b,c);},"iC",function(b,c){MQ(this,b,c);},"fp",function(){return AQY(this);},"jg",function(){AHQ(this);}],Gz,0,E,[],0,3,0,["E0",function(){AFU(this);},"rg",function(b){return APP(this,b);},"p_",function(){return AYz(this);}]]);
$rt_metadata([YJ,0,Gz,[],0,0,0,["rg",function(b){return AR2(this,b);},"E0",function(){AIB(this);}],NT,0,Gz,[],0,0,0,["rg",function(b){return ATU(this,b);},"p_",function(){return APn(this);}],P3,0,E,[],0,3,0,0,Sf,0,E,[],4,3,0,0,Pw,0,E,[],4,3,0,0,KW,0,EA,[Dm],1,3,0,0,MJ,0,E,[],4,3,0,0,C1,0,E,[],1,3,0,0,ADA,0,C1,[],0,3,0,["hO",function(b,c,d,e,f,g){Yz(this,b,c,d,e,f,g);}],NN,0,E,[Do],0,0,0,["f5",function(b){return AW1(this,b);}],NM,0,E,[Do],0,0,0,["f5",function(b){return AW$(this,b);}],Hc,0,KW,[],1,0,0,0,Q7,0,
Hc,[],0,0,0,["vR",function(b){return AJb(this,b);},"sV",function(b,c){AIe(this,b,c);},"lE",function(){return AMU(this);}],R_,0,E,[],4,3,0,0,R8,0,E,[],4,3,0,0,Ta,0,E,[],4,3,0,0,CJ,"EntityFX",11,CN,[],0,3,0,["dR",function(){AF8(this);},"jL",function(b,c,d,e,f,g,h){AH0(this,b,c,d,e,f,g,h);},"u4",function(){return AXq(this);}],XU,0,E,[],0,3,0,0,MC,0,E,[],0,3,0,0,HS,"UnsupportedOperationException",8,B5,[],0,3,0,0,E5,"ReadOnlyBufferException",5,HS,[],0,3,0,0,F8,"BufferOverflowException",5,B5,[],0,3,0,0,Fx,"BufferUnderflowException",
5,B5,[],0,3,0,0,Qb,0,E,[],0,3,0,0,OD,0,CI,[],0,3,0,0,Kq,0,CI,[],0,3,0,["hH",function(){AIR(this);},"nD",function(b,c){AG0(this,b,c);},"ip",function(b){AI0(this,b);},"hB",function(b,c,d){AJS(this,b,c,d);},"mN",function(){return AWy(this);}],WA,0,CI,[],0,3,0,["hH",function(){ALq(this);},"ip",function(b){YQ(this,b);},"pQ",function(){ATm(this);},"hB",function(b,c,d){Zd(this,b,c,d);}],JJ,0,E,[],0,3,0,0,Sz,0,JJ,[],0,3,0,0,N_,0,E,[],3,3,0,0,AA9,0,E,[N_],0,3,0,0,G0,0,E,[EQ],0,3,0,["fE",function(){return AWh(this);},
"uK",function(){return AV$(this);},"fN",function(b){return AM7(this,b);},"i3",function(b,c){return AUb(this,b,c);},"iC",function(b,c){APC(this,b,c);},"fp",function(){return AYL(this);},"jg",function(){Um(this);}],Vr,"EntityDiggingFX",11,CJ,[],0,3,0,["u4",function(){return ANs(this);},"jL",function(b,c,d,e,f,g,h){Uy(this,b,c,d,e,f,g,h);}],Je,"ConcurrentModificationException",4,B5,[],0,3,0,0,Ic,"EntityRainFX",11,CJ,[],0,3,0,["jL",function(b,c,d,e,f,g,h){AFz(this,b,c,d,e,f,g,h);},"dR",function(){AI2(this);}],Ho,
0,Hc,[],1,0,0,["lE",function(){return AQc(this);}],ML,0,Ho,[],0,0,0,["vR",function(b){return AO$(this,b);},"sV",function(b,c){AMT(this,b,c);}],RT,0,Ho,[],0,0,0,["vR",function(b){return ASm(this,b);},"sV",function(b,c){ANu(this,b,c);}],AFG,0,E,[EN],0,3,0,["oz",function(b,c){return ASC(this,b,c);}],K6,0,E,[],0,3,0,0,Sd,0,E,[EN],0,3,0,["oz",function(b,c){return AYt(this,b,c);}],Gi,0,E,[],0,3,0,0,GJ,0,E,[],0,3,0,0,GL,0,E,[],0,3,0,0,Iq,"NoSuchElementException",4,B5,[],0,3,0,0,R2,0,E,[],0,3,0,["dQ",function(b){return AWd(this,
b);},"eK",function(){return ASM(this);}],L9,0,Es,[Dm],0,3,0,0,Gd,0,E,[],0,0,0,0,K7,0,E,[],4,3,0,0,Pa,0,E,[],0,3,0,0]);
$rt_metadata([Dj,0,C1,[],0,3,0,["DT",function(b,c,d,e,f,g){VS(this,b,c,d,e,f,g);},"jY",function(b,c){return AKi(this,b,c);},"zq",function(b){return AVr(this,b);},"zt",function(b,c,d){return AWk(this,b,c,d);},"uS",function(b,c){AYb(this,b,c);},"hO",function(b,c,d,e,f,g){AJo(this,b,c,d,e,f,g);}],Ml,0,Dj,[],0,3,0,["jY",function(b,c){return UW(this,b,c);},"DT",function(b,c,d,e,f,g){AGL(this,b,c,d,e,f,g);},"hO",function(b,c,d,e,f,g){Yg(this,b,c,d,e,f,g);}],JK,0,Fm,[],0,3,0,0,Kh,0,E,[KL],0,3,0,0,NG,0,E,[],3,3,0,0,IT,
0,Kh,[NG],0,3,0,0,L8,0,E,[CV],3,3,0,0,NL,0,E,[L8],0,0,0,["Ck",function(){return ASU(this);}],SF,0,E,[EN],0,3,0,["oz",function(b,c){return AU7(this,b,c);}],SD,0,E,[EN],0,3,0,0,Pc,0,Et,[],4,0,0,0,Pb,0,E7,[],4,0,0,0,Pd,0,Fl,[],4,0,0,0,Hd,0,E,[],1,3,0,0,WD,0,Hd,[],0,3,0,["zB",function(b,c,d,e,f){Tv(this,b,c,d,e,f);}],Lj,0,DE,[],0,3,0,["rV",function(){Yx(this);}],AL$,0,Hd,[],0,3,0,["zB",function(b,c,d,e,f){ALr(this,b,c,d,e,f);}],AKH,0,Dj,[],0,3,0,["zq",function(b){return AWa(this,b);},"jY",function(b,c){return T4(this,
b,c);}],Qx,0,Dj,[],0,3,0,["jY",function(b,c){return AGU(this,b,c);}],E_,0,DN,[],0,3,0,["gT",function(b,c,d,e,f,g){AYF(this,b,c,d,e,f,g);}],Nb,0,E_,[],0,3,0,0,Qg,0,Dj,[],0,3,0,["jY",function(b,c){return ALF(this,b,c);}],Yd,0,E_,[],0,3,0,0,ALu,0,E_,[],0,3,0,0,XF,0,Dj,[],0,3,0,["uS",function(b,c){AXm(this,b,c);},"zt",function(b,c,d){return ARI(this,b,c,d);}],GF,0,KA,[],0,3,0,["mU",function(b,c,d,e,f,g){ATN(this,b,c,d,e,f,g);}],ADj,0,GF,[],0,3,0,0,Jr,"EntityGiant",11,Dp,[],0,3,0,["qO",function(b,c,d){return AJz(this,
b,c,d);}],QA,0,Dj,[],0,3,0,["uS",function(b,c){AZm(this,b,c);}],Qn,0,C1,[],0,3,0,["hO",function(b,c,d,e,f,g){AEj(this,b,c,d,e,f,g);}],Hh,"EntityPainting",11,CN,[],0,3,0,["dR",function(){YO(this);},"ki",function(){return AQe(this);},"eP",function(b,c){return ZO(this,b,c);}],V7,0,C1,[],0,3,0,["hO",function(b,c,d,e,f,g){AJi(this,b,c,d,e,f,g);}],HV,"EntityArrow",11,CN,[],0,3,0,["dR",function(){AJX(this);},"vb",function(b){AW9(this,b);}],OC,0,C1,[],0,3,0,["hO",function(b,c,d,e,f,g){YM(this,b,c,d,e,f,g);}],Ep,"EntityItem",
11,CN,[],0,3,0,["dR",function(){AEu(this);},"Dz",function(){return ZE(this);},"B6",function(b){AG9(this,b);},"eP",function(b,c){return Rs(this,b,c);},"vb",function(b){AZw(this,b);}],Kt,"EntityTNTPrimed",11,CN,[],0,3,0,["ki",function(){return AYP(this);},"dR",function(){TA(this);}],AJm,0,C1,[],0,3,0,["hO",function(b,c,d,e,f,g){AGO(this,b,c,d,e,f,g);}],Ia,"EntityFallingSand",11,CN,[],0,3,0,["ki",function(){return AQy(this);},"dR",function(){AHo(this);}],AK7,0,C1,[],0,3,0,["hO",function(b,c,d,e,f,g){ALy(this,b,
c,d,e,f,g);}],Fn,"EntityMinecart",11,CN,[EQ],0,3,0,["xZ",function(b){return AMV(this,b);},"ym",function(){return ARO(this);},"p6",function(){return AW_(this);},"xs",function(){return AOT(this);},"eP",function(b,c){return AF1(this,b,c);},"ki",function(){return AYw(this);},"zL",function(){AJK(this);},"dR",function(){AMN(this);},"sO",function(b){AUx(this,b);},"sC",function(b){return AXZ(this,b);}],ALL,0,C1,[],0,3,0,["hO",function(b,c,d,e,f,g){AKE(this,b,c,d,e,f,g);}],Sb,0,E,[],0,3,0,0,Xa,0,E,[],0,3,0,0,AC7,0,DN,
[],0,3,0,["gT",function(b,c,d,e,f,g){AQr(this,b,c,d,e,f,g);}],ADv,0,DN,[],0,3,0,["gT",function(b,c,d,e,f,g){AT0(this,b,c,d,e,f,g);}],AAe,0,DN,[],0,3,0,0,HB,0,E,[],0,3,0,0,Ha,0,E,[LW],0,3,0,["dL",function(b,c,d){return Go(this,b,c,d);},"qY",function(b,c,d){return Wp(this,b,c,d);},"ea",function(b,c,d){return Yy(this,b,c,d);},"nf",function(b,c,d){return LL(this,b,c,d);},"j7",function(b,c,d){return XC(this,b,c,d);}],Fp,0,Bz,[],0,3,0,0,Q8,"NoSuchMethodException",8,Fp,[],0,3,0,0]);
$rt_metadata([Ro,0,E,[],0,3,0,0,M6,0,Fr,[],0,0,0,["pO",function(b){return AR7(this,b);},"jQ",function(){return K8(this);}],P$,0,E,[L8],0,0,0,["Ck",function(){return AZL(this);}],AK1,0,E,[],4,3,0,0,SR,0,DE,[EQ],0,3,0,["fN",function(b){return AYk(this,b);},"i3",function(b,c){return AXB(this,b,c);},"iC",function(b,c){AOF(this,b,c);},"fp",function(){return ANL(this);},"rV",function(){ABQ(this);},"jg",function(){VL(this);}],P1,0,DE,[EQ],0,3,0,["fE",function(){return AOR(this);},"fN",function(b){return Oh(this,b);
},"i3",function(b,c){return AS8(this,b,c);},"iC",function(b,c){ACG(this,b,c);},"uK",function(){return AXP(this);},"fp",function(){return AWX(this);}],CA,0,E,[],1,3,0,0,AKg,0,CA,[],0,3,0,["f1",function(b){AWQ(this,b);},"fV",function(b){AYh(this,b);},"eC",function(){return AWP(this);}],Nk,"BufferUnderflowException",6,B5,[],0,3,0,0,PD,"BufferOverflowException",6,B5,[],0,3,0,0,O1,"MalformedInputException",6,FZ,[],0,3,0,["mi",function(){return AOV(this);}],Ng,"UnmappableCharacterException",6,FZ,[],0,3,0,["mi",function()
{return AOy(this);}],Hm,0,E,[],0,0,0,["oE",function(){return Fh(this);}],Rm,0,Hm,[GP],0,0,0,["lu",function(){return Kl(this);}],Su,0,E,[],0,3,0,0,ZW,0,CI,[],0,3,0,["hH",function(){AL_(this);},"ip",function(b){Zm(this,b);},"hB",function(b,c,d){ABp(this,b,c,d);}],Mc,0,CI,[],0,3,0,["hH",function(){AJY(this);},"ri",function(){AP4(this);},"ip",function(b){AME(this,b);},"EA",function(b){AFA(this,b);},"hB",function(b,c,d){ZZ(this,b,c,d);}],Qa,0,E,[GP],0,0,0,["oE",function(){return RS(this);},"lu",function(){return SJ(this);
}],J7,"InstantiationException",8,Fp,[],0,3,0,0,P0,"IllegalAccessException",8,Fp,[],0,3,0,0,AGe,0,E,[],4,3,0,0,VU,0,E,[],4,3,0,0,N2,0,E,[],0,3,AQ1,0,Xu,0,JK,[],0,3,0,0,RW,0,CI,[],0,3,0,["hH",function(){AEk(this);},"ip",function(b){ADb(this,b);},"nD",function(b,c){AGw(this,b,c);},"hB",function(b,c,d){ABI(this,b,c,d);}],Ra,0,Mc,[],0,3,0,["ri",function(){AS6(this);},"EA",function(b){AGR(this,b);}],Lx,0,E,[],0,3,0,0,Ub,0,Lx,[],0,3,0,0,LG,0,CA,[],0,3,0,["fV",function(b){AYe(this,b);},"f1",function(b){AR5(this,b);
},"eC",function(){return AOa(this);}],AL4,0,E,[],0,3,0,0,TO,0,E,[],0,3,0,0,TH,0,E,[],0,3,0,0,ZB,0,E,[],0,3,0,0,AL3,0,E,[],0,3,0,0,AAs,0,E,[],0,3,0,0,Ua,0,E,[EN],0,0,0,["oz",function(b,c){return ARo(this,b,c);}],Ky,0,CA,[],0,3,0,["f1",function(b){AXS(this,b);},"fV",function(b){AXu(this,b);},"eC",function(){return AWt(this);}],KR,0,CA,[],0,3,0,["f1",function(b){APf(this,b);},"fV",function(b){ARr(this,b);},"eC",function(){return AVO(this);}],Jw,0,CA,[],0,3,0,["f1",function(b){ATe(this,b);},"fV",function(b){AQ7(this,
b);},"eC",function(){return AOC(this);}],LS,0,CA,[],0,3,0,["f1",function(b){ANb(this,b);},"fV",function(b){AZG(this,b);},"eC",function(){return ATL(this);}],MO,0,CA,[],0,3,0,["f1",function(b){AM6(this,b);},"fV",function(b){AXp(this,b);},"eC",function(){return AMR(this);}],Ks,0,CA,[],0,3,0,["f1",function(b){AWG(this,b);},"fV",function(b){AOq(this,b);},"eC",function(){return ASq(this);}],KF,0,CA,[],0,3,0,["f1",function(b){AVj(this,b);},"fV",function(b){AWV(this,b);},"eC",function(){return AYr(this);}],Mh,0,CA,
[],0,3,0,["f1",function(b){AZf(this,b);},"fV",function(b){AQ8(this,b);},"eC",function(){return ANj(this);}],NY,0,CA,[],0,3,0,["f1",function(b){AYo(this,b);},"fV",function(b){AQ3(this,b);},"eC",function(){return AQK(this);}],Qd,0,E,[Dg],0,0,0,["fM",function(){return ANZ(this);}],Qc,0,E,[Dg],0,0,0,["fM",function(){return APV(this);}],Sm,0,DZ,[],0,3,0,["kg",function(){AUq(this);},"rc",function(b){AIO(this,b);}],Td,0,DZ,[],0,3,0,["nW",function(){UU(this);},"rA",function(b){AWo(this,b);},"kg",function(){ATb(this);
},"rc",function(b){AFc(this,b);}],AHf,0,DZ,[],0,3,0,["kg",function(){AYG(this);},"rc",function(b){AIm(this,b);}]]);
$rt_metadata([CF,"EnumArt",11,Ee,[],12,3,0,0,Rf,0,CI,[],0,3,0,["hH",function(){ABz(this);},"ip",function(b){AKQ(this,b);},"hB",function(b,c,d){UF(this,b,c,d);}],M5,0,Et,[],0,0,0,0,I8,"MinecraftError",11,Ey,[],0,3,0,0,Q3,0,E,[],0,3,0,0,RM,0,Hm,[GP],0,0,0,["lu",function(){return Jz(this);}],K4,0,Es,[Dm],0,3,0,0,QH,0,E,[HJ],3,3,0,0,Pj,0,E,[QH],3,3,0,0,PU,0,Et,[Pj],0,3,0,0,PI,0,E,[J2],3,3,0,0,Mr,0,E,[PI],3,3,0,0,AEP,0,E7,[E1,Dc,Mr],0,3,0,0,NZ,0,E,[EN],0,0,0,0,K_,0,E,[],0,3,0,0,Im,0,E,[Dm],0,3,0,["dQ",function(b)
{return AY5(this,b);},"eK",function(){return AXd(this);},"kA",function(b){return Qm(this,b);}],Js,0,E,[],3,3,0,0,R6,0,E,[Js],0,3,0,0,Nv,0,E,[],3,3,0,0,Tf,0,E,[Nv],0,3,0,0,Pt,0,E,[Js],0,3,0,0,RU,0,E,[],0,3,0,0,O_,0,E,[],3,3,0,0,ABi,0,G1,[O_],0,3,0,0,ABc,0,E,[],0,3,0,0,LD,0,E,[],4,3,0,0,GD,0,E,[],1,3,0,0,AHp,0,GD,[],0,3,0,0,Yk,0,E,[],0,3,0,0,MX,0,GD,[],0,3,0,0,Qy,0,E,[],0,3,0,0,Ei,0,Ee,[],12,3,0,0,RA,0,Es,[Dm],0,3,0,0,Qh,0,E,[Dg],0,0,0,["fM",function(){return AUS(this);}],Qe,0,E,[Dg],0,0,0,["fM",function(){return AQz(this);
}],Oq,0,E,[Dg],0,0,0,["fM",function(){return AX0(this);}],Ou,0,E,[Dg],0,0,0,["fM",function(){return AWR(this);}],Oo,0,E,[Dg],0,0,0,["fM",function(){return AVS(this);}],Op,0,E,[Dg],0,0,0,["fM",function(){return AT_(this);}],Or,0,E,[Dg],0,0,0,["fM",function(){return AWW(this);}],Os,0,E,[Dg],0,0,0,["fM",function(){return ASZ(this);}],DV,0,E,[],1,3,0,0,Ok,0,DV,[],0,3,0,0,L$,0,E,[],0,3,0,0,PG,0,CI,[],0,3,0,["hH",function(){Zu(this);},"nW",function(){AId(this);},"pQ",function(){AQG(this);},"ip",function(b){ACo(this,
b);},"nD",function(b,c){Yr(this,b,c);},"hB",function(b,c,d){W2(this,b,c,d);}],Hj,0,Ee,[],12,3,0,0,KE,0,E,[Is,Dc],0,3,0,0,Jt,0,KE,[],0,0,0,0,SO,0,E,[],0,3,0,0,ALx,0,DV,[],0,3,0,0]);
$rt_metadata([B9,0,DV,[],0,3,0,0,BL,0,DV,[],0,3,0,0,Cd,0,DV,[],0,3,0,0,ADl,0,E,[],4,3,0,0,Py,"EntityBubbleFX",11,CJ,[],0,3,0,["dR",function(){UX(this);}],AAH,"EntitySmokeFX",11,CJ,[],0,3,0,["jL",function(b,c,d,e,f,g,h){AEX(this,b,c,d,e,f,g,h);},"dR",function(){AGA(this);}],N8,"EntityExplodeFX",11,CJ,[],0,3,0,["jL",function(b,c,d,e,f,g,h){AMg(this,b,c,d,e,f,g,h);},"dR",function(){AAa(this);}],MB,"EntityFlameFX",11,CJ,[],0,3,0,["jL",function(b,c,d,e,f,g,h){AK2(this,b,c,d,e,f,g,h);},"s6",function(b){return AMB(this,
b);},"dR",function(){Ws(this);}],WC,"EntityLavaFX",11,CJ,[],0,3,0,["s6",function(b){return AEY(this,b);},"jL",function(b,c,d,e,f,g,h){AB2(this,b,c,d,e,f,g,h);},"dR",function(){AF3(this);}],ALN,"EntitySplashFX",11,Ic,[],0,3,0,0,GS,0,E,[],0,0,0,0,Rt,0,E,[],0,3,0,0,XJ,0,E,[],0,3,0,0,Re,"EntityPickupFX",11,CJ,[],0,3,0,["jL",function(b,c,d,e,f,g,h){AGY(this,b,c,d,e,f,g,h);},"dR",function(){Wl(this);},"u4",function(){return AN3(this);}],UR,0,E,[],0,3,0,0,GH,0,E,[],0,3,0,["dQ",function(b){return AUy(this,b);},"eK",
function(){return AOA(this);}]]);
function $rt_array(cls,data){this.b3=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","@","0","","Timer hack thread","Player","fuckmojang123","randpasslol","Minecraft main thread","<init>","null",": ","    at ","Caused by: ","  at ","Index out of bounds","#version 300 es","/","UTF-8","overflow-x:hidden;overflow-y:hidden;","WebGL 2.0 is not supported in your browser (",")","NONE","ESCAPE","1","2","3","4","5","6","7","8",
"9","MINUS","EQUALS","BACK","TAB","Q","W","E","R","T","Y","U","I","O","P","LBRACKET","RBRACKET","RETURN","LCONTROL","A","S","D","F","G","H","J","K","L","SEMICOLON","APOSTROPHE","GRAVE","LSHIFT","BACKSLASH","Z","X","C","V","B","N","M","COMMA","PERIOD","SLASH","RSHIFT","MULTIPLY","LMENU","SPACE","CAPITAL","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","NUMLOCK","SCROLL","NUMPAD7","NUMPAD8","NUMPAD9","SUBTRACT","NUMPAD4","NUMPAD5","NUMPAD6","ADD","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD0","DECIMAL","F11","F12",
"F13","F14","F15","F16","F17","F18","KANA","F19","CONVERT","NOCONVERT","YEN","NUMPADEQUALS","CIRCUMFLEX","AT","COLON","UNDERLINE","KANJI","STOP","AX","UNLABELED","NUMPADENTER","RCONTROL","SECTION","NUMPADCOMMA","DIVIDE","SYSRQ","RMENU","FUNCTION","PAUSE","HOME","UP","PRIOR","LEFT","RIGHT","END","DOWN","NEXT","INSERT","DELETE","CLEAR","LMETA","RMETA","APPS","POWER","SLEEP","\n","/default.png","Pre startup","Startup","Post startup","/dirt.png","Loading...","GL_INVALID_ENUM","GL_INVALID_VALUE","GL_INVALID_OPERATION",
"GL_OUT_OF_MEMORY","Unknown Error","CONTEXT_LOST_WEBGL","########## GL ERROR ##########","@ ","Pre render","Post render"," fps, "," chunk updates","/terrain.png","Loading level","Generating level","Building terrain","Simulating world for a bit","P: ",". T: ","Respawning","main","_net_peytonplayz585_minecraft_infdev_IndexedDBFilesystem","Initialization Failed","EAGPKG!!","invalid epk file","<file>"," end","invalid file hash for ","</file>","/rain.png","Either src or dest is null","window.indexedDB was null or undefined",
"Can\'t compare "," to ","OPENED","LOCKED","ERROR","yee","End of stream reached","Malformed UTF-8 sequence","charsetName is null","Should never been thrown","Stream closed","footer is not found","Unexpected end of ZLIB input stream","random.splash","bubble","splash","random.fizz","Pos","Motion","Rotation","FallDistance","Fire","Air","OnGround","explode","random.hurt","random.bow","random.fuse","mob.sheep","mob.pig","mob.pigdeath","/gui/items.png","/water.png","Slot "," is already occupied by "," when adding ",
"stone","wood","gravel","grass","cloth","sand","open error","path","New position "," is outside of range [0;","]","New limit ","The last float in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","step.","liquid.water","lava","largesmoke","smoke","flame","fire.fire","Large chest","Get resource: ","Duplicate id: ","Furnace","Chest","Sign","MobSpawner","CONFLICT @ ","random.door_close","random.door_open","�","Replacement preconditions do not hold","The last byte in dst ","The last byte in src ",
"Index ","Capacity is negative: ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","fire.ignite","BIG_ENDIAN","LITTLE_ENDIAN","need dictionary","unknown compression method","unknown header flags set","incorrect data check","incorrect length check","incorrect header check","invalid window size","bad extra field length","header crc mismatch","IGNORE","REPLACE","REPORT","Action must be non-null","invalid stored block lengths","invalid block type",
"too many length or distance symbols","invalid bit length repeat","oversubscribed dynamic bit lengths tree","incomplete dynamic bit lengths tree","oversubscribed distance tree","incomplete distance tree","empty distance tree with lengths","oversubscribed literal/length tree","incomplete literal/length tree","invalid distance code","invalid literal/length code","newAction must be non-null","matrix is not supported while recording display list use tessellator class instead","projection matrix stack overflow",
"texture matrix stack overflow","modelview matrix stack overflow","projection matrix stack underflow","texture matrix stack underflow","modelview matrix stack underflow","only GL_QUADS supported in a display list","vertex format inconsistent in display list","keyup","Forward","Left","Back","Right","Jump","Inventory","Drop","Chat","Toggle fog","Save location","Load location","Music: ","OFF","ON","Sound: ","Invert mouse: ","Show FPS: ","Render distance: ","View bobbing: ","3d anaglyph: ","Limit framerate: ","Difficulty: ",
"Graphics: ","FAST","FANCY","FAR","NORMAL","SHORT","TINY","Peaceful","Easy","Normal","Hard","/level.dat","Data","RandomSeed","SpawnX","SpawnY","SpawnZ","Time","SizeOnDisk","Saving level","Saving chunks","LastPlayed","/level.dat_new","/level.dat_old","Failed to add entity ","All: ","DOHASDOSHIH!","TickNextTick list out of synch","Notch","/char.png","humanoid","http://www.minecraft.net/skin/",".png","Health","HurtTime","DeathTime","AttackTime","Score","Edit sign message:","mousedown","wheel","Slot","Crafting",
"/gui/inventory.png","/gui/gui.png","/gui/icons.png","Minecraft Infdev","Minecraft Infdev (","Used memory: ","% (","MB) of ","MB","Allocated memory: ","MB)","C: ",". F: ",", O: ",", E: ","E: ",". B: ",", I: ","/terrain/sun.png","/terrain/moon.png","/clouds.png","%%","!!","0123456789abcdef","Pre-beta!","As seen on TV!","Awesome!","100% pure!","May contain nuts!","Better than Prey!","More polygons!","Sexy!","Limited edition!","Flashing letters!","Made by Notch!","Coming soon!","Best in class!","When it\'s finished!",
"Absolutely dragon free!","Excitement!","More than 5000 sold!","One of a kind!","700+ hits on YouTube!","Indev!","Spiders everywhere!","Check it out!","Holy cow, man!","It\'s a game!","Made in Sweden!","Uses LWJGL!","Reticulating splines!","Minecraft!","Yaaay!","Alpha version!","Singleplayer!","Keyboard compatible!","Undocumented!","Ingots!","Exploding creepers!","That\'s not a moon!","l33t!","Create!","Survive!","Dungeon!","Exclusive!","The bee\'s knees!","Down with O.P.P.!","Closed source!","Classy!","Wow!",
"Not on steam!","9.95 euro!","Half price!","Oh man!","Awesome community!","Pixels!","Teetsuuuuoooo!","Kaaneeeedaaaa!","Now with difficulty!","Enhanced!","90% bug free!","Pretty!","12 herbs and spices!","Fat free!","Absolutely no memes!","Free dental!","Ask your doctor!","Minors welcome!","Cloud computing!","Legal in Finland!","Hard to label!","Technically good!","Bringing home the bacon!","Indie!","GOTY!","Ceci n\'est pas une title screen!","Euclidian!","Now in 3D!","Inspirational!","Herregud!","Complex cellular automata!",
"Yes, sir!","Played by cowboys!","OpenGL 1.1!","Thousands of colors!","Try it!","Age of Wonders is better!","Try the mushroom stew!","Sensational!","Hot tamale, hot hot tamale!","Play him off, keyboard cat!","Guaranteed!","Macroscopic!","Bring it on!","Random splash!","Call your mother!","Monster infighting!","Loved by millions!","Ultimate edition!","Freaky!","You\'ve got a brand new key!","Water proof!","Uninflammable!","Whoa, dude!","All inclusive!","Tell your friends!","NP is not in P!","Notch <3 Ez!","Music by C418!",
"Single player","Multi player","Play tutorial level","Options...","/gui/logo.png","Copyright Mojang Specifications. Do not distribute.","Free memory: ","% of ","/particles.png","/glsl/core.glsl","\n#define CC_a_color\n","#define CC_a_texture0\n","#define CC_lighting\n","#define CC_fog\n","#define CC_alphatest\n","#define CC_unit0\n","\n#define CC_VERT\n","\n\n","\n[/glsl/core.glsl][CC_VERT] ","broken shader file","\n#define CC_FRAG\n","\n[/glsl/core.glsl][CC_FRAG] ","a_position","a_texture0","a_color","\n[LINKER] ",
"matrix_m","matrix_p","matrix_t","colorUniform","normalUniform","light0Pos","light1Pos","fogColor","fogMode","fogStart","fogEnd","fogDensity","fogPremultiply","alphaTestF","tex0","texCoordV0","id","Count","Damage","array size does not equal image size","Respawn","Title menu","Game over!","Score: &e","Save and quit to title..","Back to game","Saving level..","Game menu","/armor/","_","chain","iron","diamond","gold","/item/sign.png","> "," <","Pig","/mob/spider_eyes.png","/mob/saddle.png","/mob/sheep_fur.png",
"/art/kz.png","random.drr","random.pop","/item/arrows.png","/item/cart.png","Wrong location! ","There\'s no such entity to remove: ","Attempted to place a tile entity where there was no entity tile!","Malformed input of length ","Unmappable characters of length ","Options","Controls...","Done","Controls","Select world","World","World ","- empty -"," ("," MB)","Delete world...","Cancel","Delete world","###","X#X","#X#","# #","##"," X ","#"," # ","X X","A "," B","#  ","## "," recipes","\'","\' will be lost forever!",
"Are you sure you want to delete this world?","saves/","XXX","XX","X#"," #"," #X","# X","/gui/furnace.png","/gui/crafting.png","/gui/container.png","Kebab","Aztec","Alban","Aztec2","Bomb","Plant","Wasteland","Pool","Courbet","Sea","Sunset","Wanderer","Match","Bust","Stage","Void","SkullAndRoses","Fighters","Pointer","Yes","No","Arrow","Item","Painting","Mob","Monster","Creeper","Skeleton","Spider","Giant","Zombie","Sheep","PrimedTnt","FallingSand","Minecart","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ","xPos","zPos",
"The chunk file \'","\' was supposed to be at [",", ","], but the file contained a chunk from [","]. It\'s data will be moved to file \'","\', and a new empty chunk will be created for file \'","\' for [","Corrupt chunk \'","\' was found at: [","The file will be deleted","Failed to serialize chunk at [","] to byte array","LastUpdate","Blocks","SkyLight","BlockLight","HeightMap","TerrainPopulated","UTF Error","FILE","DIRECTORY","FALSE","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_\'*!\"#%/()=+?[]{}<>",
"Sky","Block","random.explode","OW KNOWS!"]);
Cp.prototype.toString=function(){return $rt_ustr(this);};
Cp.prototype.valueOf=Cp.prototype.toString;E.prototype.toString=function(){return $rt_ustr(ANX(this));};
E.prototype.__teavm_class__=function(){return $dbg_class(this);};
function Long_eq(a,b){return a.hi===b.hi&&a.lo===b.lo;}function Long_ne(a,b){return a.hi!==b.hi||a.lo!==b.lo;}function Long_gt(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);}function Long_ge(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);}function Long_lt(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>
1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);}function Long_le(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);}function Long_add(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_inc(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);}function Long_dec(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);}function Long_neg(a)
{return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));}function Long_sub(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<
16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_compare(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}function Long_mul(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo
+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);}function Long_div(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];}function Long_udiv(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];}function Long_rem(a,
b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];}function Long_urem(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];}function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}function Long_and(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);}function Long_or(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);}function Long_xor(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);}function Long_shl(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}}function Long_shr(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi
<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}}function Long_shru(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}}function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup
=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -
b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a)
{var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup
=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q
=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}function TeaVMThread(runner){this.status=3;this.stack
=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending=function(){return this.status
===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status
=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread
=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new Error("Invalid recorded state");}main
=$rt_mainStarter(ALi);
(function(){var c;c=Ux.prototype;c.dispatchEvent=c.HI;c.addEventListener=c.R7;c.removeEventListener=c.T3;c.getLength=c.Pl;c.get=c.MT;c.addEventListener=c.NV;c.removeEventListener=c.Jl;c=S1.prototype;c.handleEvent=c.f5;c=S7.prototype;c.handleEvent=c.f5;c=S8.prototype;c.handleEvent=c.f5;c=S5.prototype;c.handleEvent=c.f5;c=S6.prototype;c.handleEvent=c.f5;c=S3.prototype;c.handleEvent=c.f5;c=S4.prototype;c.handleEvent=c.f5;c=S2.prototype;c.handleEvent=c.f5;c=NK.prototype;c.handleEvent=c.f5;c=NJ.prototype;c.handleEvent
=c.f5;c=S0.prototype;c.stateChanged=c.UB;c=Ql.prototype;c.handleEvent=c.fM;c=Qk.prototype;c.handleEvent=c.fM;c=Qj.prototype;c.handleEvent=c.fM;c=Qi.prototype;c.handleEvent=c.f5;c=Wy.prototype;c.getLength=c.Tk;c.get=c.LI;c=NN.prototype;c.handleEvent=c.f5;c=NM.prototype;c.handleEvent=c.f5;c=NL.prototype;c.onTimer=c.Ck;c=P$.prototype;c.onTimer=c.Ck;c=Qd.prototype;c.handleEvent=c.fM;c=Qc.prototype;c.handleEvent=c.fM;c=Qh.prototype;c.handleEvent=c.fM;c=Qe.prototype;c.handleEvent=c.fM;c=Oq.prototype;c.handleEvent
=c.fM;c=Ou.prototype;c.handleEvent=c.fM;c=Oo.prototype;c.handleEvent=c.fM;c=Op.prototype;c.handleEvent=c.fM;c=Or.prototype;c.handleEvent=c.fM;c=Os.prototype;c.handleEvent=c.fM;})();
})();

//# sourceMappingURL=app.js.map