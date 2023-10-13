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
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.nu=f;}
function $rt_cls(cls){return J9(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return A1h(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bq.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return E; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A2m());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return AMU();}
function $rt_setThread(t){return EJ(t);}
function $rt_createException(message){return VO(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var M=$rt_throw;var S=$rt_compare;var A2n=$rt_nullCheck;var K=$rt_cls;var N=$rt_createArray;var Pq=$rt_isInstance;var CM=$rt_nativeThread;var C=$rt_suspending;var Ex=$rt_resuming;var Es=$rt_invalidPointer;var B=$rt_s;var Bt=$rt_eraseClinit;var Bh=$rt_imul;var Bf=$rt_wrapException;
function E(){this.b3=null;this.$id$=0;}
function A2o(){var a=new E();SH(a);return a;}
function A0X(b){var c;if(b.b3===null)RJ(b);if(b.b3.dI===null)b.b3.dI=A2p;else if(b.b3.dI!==A2p){c=new DK;Bl(c,B(0));M(c);}b=b.b3;b.eH=b.eH+1|0;}
function A2g(b){var c,d;if(!Gy(b)&&b.b3.dI===A2p){c=b.b3;d=c.eH-1|0;c.eH=d;if(!d)b.b3.dI=null;Gy(b);return;}b=new IL;Q(b);M(b);}
function Zx(b){if(b.b3===null)RJ(b);if(b.b3.dI===null)b.b3.dI=A2p;if(b.b3.dI!==A2p)AP0(b,1);else{b=b.b3;b.eH=b.eH+1|0;}}
function RJ(b){b.b3=A0A();}
function AP0(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Cy=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EH=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A1Q(b,c,callback);}catch($e){callback.EH($rt_exception($e));}});}
function A1Q(b,c,d){var e,f,g;e=A2p;if(b.b3===null){RJ(b);EJ(e);b=b.b3;b.eH=b.eH+c|0;Cx(d,null);return;}if(b.b3.dI===null){b.b3.dI=e;EJ(e);b=b.b3;b.eH=b.eH+c|0;Cx(d,null);return;}f=b.b3;if(f.gz===null)f.gz=AP2();f=f.gz;g=new Og;g.w1=e;g.w2=b;g.wZ=c;g.w0=d;d=g;f.push(d);}
function LC(b){var c;if(!Gy(b)&&b.b3.dI===A2p){c=b.b3;c.eH=c.eH-1|0;if(c.eH<=0){c.dI=null;if(c.gz!==null&&!H9(c.gz)){c=new PK;c.z2=b;N6(c);}else Gy(b);}return;}b=new IL;Q(b);M(b);}
function Gy(a){var b;b=a.b3;if(b===null)return 1;a:{if(b.dI===null&&!(b.gz!==null&&!H9(b.gz))){if(b.pC===null)break a;if(H9(b.pC))break a;}return 0;}a.b3=null;return 1;}
function SH(a){return;}
function C4(a){return J9(a.constructor);}
function AVk(a){return KM(a);}
function N_(a,b){return a!==b?0:1;}
function AN3(a){var b,c,d,e,f,g,h,i;b=new Bc;Ba(b);b=H(H(b,Hf(C4(a))),B(1));c=KM(a);if(!c)d=B(2);else{if(!c)e=32;else{f=0;e=c>>>16;if(e)f=16;else e=c;g=e>>>8;if(!g)g=e;else f=f|8;e=g>>>4;if(!e)e=g;else f=f|4;g=e>>>2;if(!g)g=e;else f=f|2;if(g>>>1)f=f|1;e=(32-f|0)-1|0;}g=(((32-e|0)+4|0)-1|0)/4|0;h=$rt_createCharArray(g);i=h.data;e=(g-1|0)*4|0;g=0;while(e>=0){f=g+1|0;i[g]=Hy(c>>>e&15,16);e=e-4|0;g=f;}d=A1h(h);}return O(H(b,d));}
function KM(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AQj(a){var b,c,d;if(!Pq(a,E1)&&a.constructor.$meta.item===null){b=new Ph;Q(b);M(b);}b=AM9(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Te(a){var b,c;if(!(a.b3!==null&&a.b3.dI===A2p?1:0)){b=new IL;Q(b);M(b);}b=a.b3.pC;if(b===null)return;while(!H9(b)){c=AJq(b);if(!c.T_())N6(c);}a.b3.pC=null;}
function H0(){E.call(this);}
var A2q=null;var A2r=null;var A2s=null;function A2t(){var a=new H0();ALj(a);return a;}
function ALj(a){return;}
function ALo(b){var c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AE_();ABD();AKP();VM();AKy();ADQ();Ym();AMB();YF();AFI();AL2();UY();ACP();U7();ACu();AGJ();AAN();AAP();AJf();AKH();AC$();AI0();Xj();AAW();ZU();AC1();TD();AGS();AE7();VW();Za();AJn();AMw();ACk();AJL();AIO();AGy();V1();AFo();ZQ();AHq();AF3();AHp();ADH();ABr();AKE();AER();Wy();ADm();AGN();W1();AHO();ACY();AAR();c
=window.minecraftOpts;if(c===null)d=null;else{d=N(Cp,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));A2q=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){}else if($$je instanceof DD){c=$$je;break a;}else{throw $$e;}}return;}Mh(c,AXL(AYm()));return;case 1:b:{c:{d:{try{V$(c,g);if(C()){break _;}break d;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){}else if($$je instanceof DD){c=$$je;break c;}
else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Bf($$e);if($$je instanceof DD){c=$$je;}else{throw $$e;}}}Mh(c,AXL(AYm()));return;}c=new IF;h=JG();i=KE();g=new Q8;g.Av=0;g.cy=c;g.tK=(-1);g.tM=(-1);g.tL=(-1);g.gF=0.0;g.lt=0.0;g.m0=0.0;g.lV=0;j=new Rb;b=N(E2,4);d=b.data;d[0]=K(HD);d[1]=K(HR);d[2]=K(In);d[3]=K(IN);OO(j,100,K(Dp),b);j.CF=g;g.yg=j;k=new HH;b=N(E2,2);d=b.data;d[0]=K(I6);d[1]=K(He);OO(k,20,K(FH),b);g.yx=k;c.ce=g;g=new PA;g.zJ=1.0;g.ky=0.0;g.mi=1.0;g.cI=20.0;g.q3=B2();g.qa=Long_div(D7(),Long_fromInt(1000000));c.ba
=g;c.jV=null;c.bm=0;c.A=null;g=new O7;g.po=B(3);g.mG=B(3);g.mV=B2();g.md=0;g.fw=c;c.il=g;g=new Pl;g.oU=0;g.kH=0.0;g.ov=null;g.kd=new Df;g.D1=0;g.D0=0;g.op=GO(16);g.y=c;g.hL=A0z(c);c.ek=g;c.bD=0;c.cK=0;c.Dh=null;c.Cb=0;c.hh=0;c.CD=Tr(0.0);c.bV=null;c.zV=A0w();c.yC=A0U();c.gN=1;c.kq=B(3);c.f8=Long_fromInt(-1);c.bj=0;c.b2=0;c.cv=0;c.c8=B2();AJG(new R8,c,B(4));c.b5=h;c.bw=i;A2r=c;A2r.jV=A1v(B(5),B(6));A2r.jV.CH=B(7);A2s=A0h(A2r,B(8));P7(A2s);return;default:Es();}}CM().s(b,c,d,e,f,g,h,i,j,k,$p);}
function AE_(){A2q=null;A2r=null;A2s=null;}
function KP(){}
function E2(){var a=this;E.call(a);a.so=null;a.fl=null;a.k4=null;}
var A2u=0;function J9(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new E2;c.fl=b;d=c;b.classObject=d;}return c;}
function AUR(a){return a.fl;}
function QT(a,b){var c;b=b;c=a.fl;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&R7(b.constructor,c)?1:0;}
function No(a,b){return R7(b.fl,a.fl);}
function Hf(a){if(a.so===null)a.so=$rt_str(a.fl.$meta.name);return a.so;}
function E$(a){return a.fl.$meta.primitive?1:0;}
function ACc(a){return AMh(a.fl)===null?0:1;}
function IZ(a){return J9(AMh(a.fl));}
function AWO(){HD.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];HR.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[CO,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];In.$meta.methods
=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[CO,$rt_floatcls()],returnType
:$rt_voidcls(),callable:null},{name:"setCreeperFlashTime",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_floatcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];IN.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:CO,callable:null},{name:"attackEntity",modifiers
:0,accessLevel:2,parameterTypes:[CO,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];I6.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN],returnType
:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getHurtSound",modifiers:0,accessLevel
:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null}];He.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers
:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[HW],returnType:$rt_booleancls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];HN.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null}];P2.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers
:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:B6,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:B6,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),B6],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cp,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable
:null},{name:"writeToNBT",modifiers:4,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null}];SW.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes
:[$rt_intcls()],returnType:B6,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:B6,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),B6],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cp,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers
:4,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getCookProgressScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getBurnTimeRemainingScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"isBurning",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"canSmelt",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"smeltItem",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSmeltingResult",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getItemBurnTime",modifiers:0,accessLevel
:1,parameterTypes:[B6],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Lm.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"anyPlayerInRange",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name
:"updateDelay",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null}];Dp.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable
:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:CO,callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[CO,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes
:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null}];Ea.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"getTexture",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cp,callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"getEyeHeight",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_floatcls(),callable:null},{name:"onEntityUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"spawnExplosionParticle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updateRidden",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"setSize",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable
:null},{name:"heal",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable
:null},{name:"knockBack",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"onDeath",modifiers:0,accessLevel:3,parameterTypes:[CO],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"fall",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"moveEntityWithHeading",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"isOnLadder",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"isEntityAlive",modifiers:0,accessLevel:3,parameterTypes:[],returnType:
$rt_booleancls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"jump",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onEntityDeath",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes
:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null},{name:"kill",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Jt.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null}];Hh.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN,$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"setDirection",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"getArtSize",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_voidcls(),callable:null},{name:"onValidSurface",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers
:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null}];HV.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN,Ea],returnType:$rt_voidcls(),callable:null},{name:"setArrowHeading",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers:0,accessLevel:3,parameterTypes:[HW],returnType:$rt_voidcls(),callable:null}];Er.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN,$rt_doublecls(),$rt_doublecls(),
$rt_doublecls(),B6],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"handleWaterMovement",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"pushOutOfBlocks",modifiers:0,accessLevel:1,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable
:null},{name:"dealFireDamage",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers
:0,accessLevel:3,parameterTypes:[HW],returnType:$rt_voidcls(),callable:null}];Kw.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN,$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_voidcls(),callable:null},{name:"createExplosion",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null}];Ia.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[FN,$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes
:[AKm],returnType:$rt_voidcls(),callable:null},{name:"getWorld",modifiers:0,accessLevel:3,parameterTypes:[],returnType:FN,callable:null}];Fp.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN],returnType:$rt_voidcls(),callable:null},{name:"getCollisionBox",modifiers:0,accessLevel:3,parameterTypes:[CO],returnType:HF,callable:null},{name:"getBoundingBox",modifiers:0,accessLevel:3,parameterTypes:[],returnType:HF,callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_booleancls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FN,$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"getYOffset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_doublecls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable
:null},{name:"setEntityDead",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getPosOffset",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:IK,callable:null},{name:"getPos",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:IK,callable:null},{name:
"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[AKm],returnType:$rt_voidcls(),callable:null},{name:"applyEntityCollision",modifiers:0,accessLevel:3,parameterTypes:[CO],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType
:B6,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:B6,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),B6],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cp,callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[HW],returnType:$rt_booleancls(),callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];}
function AMD(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!E$(a)&&!ACc(a)){if(a.k4===null){if(!A2u){A2u=1;AWO();}b=a.fl.$meta.methods;a.k4=N(IT,b.length);c=0;d=0;while(d<b.length){e=b[d];if(DU($rt_str(e.name),B(9))){f=e.parameterTypes;g=N(E2,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=J9(f[i]);i=i+1|0;}h=a.k4.data;j=c+1|0;k=new IT;l=$rt_str(e.name);m=e.modifiers;i=e.accessLevel;f=H4(e.callable,"call");k.xc=a;k.DR=l;k.s6=m;k.z5=i;k.lX=g;k.ty=f;h[c]=k;c=j;}d=d+1|0;}a.k4=Rs(a.k4,c);}return a.k4.nu();}return N(IT,0);}
function SB(a,b){var c,d,e,f,g,h,i,j,k,l;c=AMD(a).data;d=c.length;e=0;while(true){if(e>=d){f=new Q$;Q(f);M(f);}g=c[e];if(!(ZF(g)&1)?0:1){a:{h=W0(g);if(h===b)i=1;else{if(h!==null&&b!==null){j=h.data;h=b.data;k=j.length;if(k==h.length){i=0;while(i<k){f=j[i];l=h[i];if(!(f===l?1:f!==null?N_(f,l):l!==null?0:1)){i=0;break a;}i=i+1|0;}i=1;break a;}}i=0;}}if(i)break;}e=e+1|0;}return g;}
function H8(a){return J9(a.fl.$meta.superclass);}
function Vh(a){var b;b=a.fl;if(!A2v){APM();A2v=1;}b=ATH(b);if(b!==null)return b;b=new J$;Q(b);M(b);}
function AE2(){E.call(this);}
function A2w(){var a=new AE2();AWW(a);return a;}
function AWW(a){return;}
function Cj(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function H4(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function Qy(){E.call(this);}
var A2v=0;function A2x(){var a=new Qy();AZU(a);return a;}
function AZU(a){return;}
function AM9(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function R7(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(R7(d[e],c))return 1;e=e+1|0;}return 0;}
function APM(){var c='$$constructor$$';Cp[c]=T2;E[c]=SH;AG1[c]=ASX;Hz[c]=AOO;EA[c]=AOj;DD[c]=Q;AJp[c]=APF;Hq[c]=AQg;AGt[c]=AUu;B5[c]=ANl;Bz[c]=ARH;Bc[c]=AZK;GC[c]=Ba;H0[c]=ALj;WX[c]=AT7;AE2[c]=AWW;Qy[c]=AZU;Fu[c]=ACN;Bo[c]=R1;S6[c]=ATB;Ta[c]=ARm;Tb[c]=APV;S$[c]=AVq;S_[c]=AZ7;S8[c]=AUU;S9[c]=AP7;S7[c]=AT$;NL[c]=ATs;NK[c]=AUQ;Z6[c]=AT3;BU[c]=AUJ;MO[c]=AWj;Sa[c]=ARo;AAA[c]=APb;Vv[c]=AUa;KD[c]=I5;Wz[c]=AZB;AFv[c]=AS6;AKO[c]=ASK;XP[c]=AOM;LB[c]=ZB;Q_[c]=AKY;Y1[c]=AY7;Df[c]=AUg;Ke[c]=ARE;AEe[c]=APc;UN[c]=ASc;Cq[c]
=ANT;AEa[c]=AV_;El[c]=AOi;Lp[c]=ADo;AAs[c]=ANe;Tc[c]=AUs;Py[c]=VC;QI[c]=AUe;KQ[c]=Mr;WO[c]=ARe;HN[c]=ARV;DF[c]=AH9;ACS[c]=ATh;B0[c]=AKQ;Nm[c]=AYi;L5[c]=ARQ;Ka[c]=ANm;LQ[c]=AXf;ABA[c]=AR7;Ph[c]=AWA;Mc[c]=ASC;BT[c]=AN$;ES[c]=APR;M9[c]=AWF;AG8[c]=ANv;Fk[c]=ACR;Gn[c]=AZS;AIZ[c]=AT1;Ts[c]=AX9;IL[c]=AW5;DK[c]=AYP;VJ[c]=ATR;S0[c]=ASR;F1[c]=AOB;Ei[c]=AXu;AMp[c]=AQh;Mu[c]=U6;AH$[c]=AX5;CI[c]=DI;Fo[c]=K8;Ii[c]=AVT;Bp[c]=AJB;Yd[c]=AN2;DX[c]=AVo;Rf[c]=AYZ;F7[c]=ARM;Nz[c]=AZh;AFO[c]=AU4;XX[c]=AUo;ACn[c]=AU0;OK[c]=ASt;AEC[c]
=APg;NC[c]=AIn;Wl[c]=AM2;ADG[c]=AVN;HS[c]=AQD;E5[c]=AWH;F$[c]=AV3;Fz[c]=AS7;Kt[c]=AYU;WF[c]=APh;ABc[c]=AYl;P2[c]=ATq;SW[c]=AOA;Jf[c]=ATD;MD[c]=AF8;OE[c]=AWI;SC[c]=AAQ;JM[c]=ACE;GK[c]=YI;GM[c]=ABM;Iq[c]=AXq;Mo[c]=ADf;K9[c]=AMg;Kk[c]=AO3;Gk[c]=V5;NM[c]=AZL;SI[c]=AOH;SG[c]=AVX;Gf[c]=AK9;K$[c]=AFg;Pb[c]=AMY;Pd[c]=AYX;Pc[c]=AY0;Pe[c]=AUB;WI[c]=ANt;Lm[c]=AXI;AMe[c]=APZ;AKN[c]=AU1;Nc[c]=AQB;Yi[c]=AYV;ALA[c]=AOy;XK[c]=ARI;ADp[c]=APq;GG[c]=AXJ;Qp[c]=ARw;Wa[c]=ARC;OD[c]=AM4;AJs[c]=AW4;ALb[c]=AP5;ALR[c]=AY6;Se[c]=ANW;Xf[c]
=AN4;ADb[c]=AOl;ADB[c]=AVs;AAj[c]=AUP;Q$[c]=AWG;Fr[c]=AY4;Rq[c]=AJD;AK7[c]=AUV;AKm[c]=AX8;Nl[c]=AZC;PE[c]=AQ3;J$[c]=AWY;P1[c]=AZm;N3[c]=AGp;LA[c]=YK;AGk[c]=AW$;VZ[c]=AXW;LJ[c]=AOY;AL$[c]=AQb;TT[c]=AY_;TM[c]=ATu;ZG[c]=ASo;AL9[c]=AWM;AAx[c]=AOx;KB[c]=AUY;KU[c]=AV7;Jz[c]=AS$;LV[c]=ARW;MP[c]=ART;Kv[c]=ARD;KI[c]=AZ4;Mk[c]=AXQ;NZ[c]=ACi;I8[c]=ANQ;PV[c]=V4;AEV[c]=ANK;Lc[c]=AMA;ABh[c]=AR$;LG[c]=W3;MY[c]=AZ2;Ol[c]=AWP;SS[c]=AQs;LY[c]=AO4;ALD[c]=ASz;ADr[c]=API;UW[c]=AR5;}
function ATH(b){if($rt_resuming()){var $r = $rt_nativeThread().pop();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}if(!b.hasOwnProperty('$$constructor$$')){return null;}var $r=new b();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}
function ARJ(b){return setTimeout(function(){$rt_threadStarter(AUO)(b);},0);}
function AUO(b){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.jp();if(C()){break _;}return;default:Es();}}CM().s(b,$p);}
function N6(b){AA0(b,0);}
function AA0(b,c){return setTimeout(function(){AUO(b);},c);}
function AKv(b){return String.fromCharCode(b);}
function AMh(b){return b.$meta.item;}
function AP2(){return [];}
function Dc(){}
function Dm(){}
function Jj(){}
function Cp(){var a=this;E.call(a);a.bq=null;a.oO=0;}
var A2y=null;function A2z(){var a=new Cp();T2(a);return a;}
function A1h(a){var b=new Cp();ADI(b,a);return b;}
function Vy(a,b,c){var d=new Cp();AMP(d,a,b,c);return d;}
function AT_(a,b){var c=new Cp();Up(c,a,b);return c;}
function AZi(a,b,c){var d=new Cp();Tx(d,a,b,c);return d;}
function T2(a){a.bq=$rt_createCharArray(0);}
function ADI(a,b){var c,d;b=b.data;c=b.length;a.bq=$rt_createCharArray(c);d=0;while(d<c){a.bq.data[d]=b[d];d=d+1|0;}}
function AMP(a,b,c,d){var e,f;a.bq=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bq.data[e]=f[e+c|0];e=e+1|0;}}
function Up(a,b,c){c=AIC(c,AHj(b,0,b.data.length));if(AEy(c)&&!c.be&&c.cb==c.ll)a.bq=AJU(c);else{a.bq=$rt_createCharArray(Ci(c));AAd(c,a.bq);}}
function Tx(a,b,c,d){var e,f,g,h,i,j;a.bq=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bq.data;j=e+1|0;g[e]=i&65535;}else{g=a.bq.data;c=e+1|0;g[e]=IV(i);g=a.bq.data;j=c+1|0;g[c]=Ih(i);}f=f+1|0;c=h;e=j;}if(e<a.bq.data.length)a.bq=MF(a.bq,e);}
function Cr(a,b){var c;if(b>=0&&b<a.bq.data.length)return a.bq.data[b];c=new Mc;Q(c);M(c);}
function BE(a){return a.bq.data.length;}
function IR(a){return a.bq.data.length?0:1;}
function ALJ(a,b){var c,d,e;if(a===b)return 0;c=CR(BE(a),BE(b));d=0;while(true){if(d>=c)return BE(a)-BE(b)|0;e=Cr(a,d)-Cr(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AEz(a,b){var c,d,e;if(a===b)return 0;c=CR(BE(a),BE(b));d=0;while(true){if(d>=c)return BE(a)-BE(b)|0;e=LX(Cr(a,d))-LX(Cr(b,d))|0;if(e)break;d=d+1|0;}return e;}
function AJJ(a,b,c){var d,e,f;if((c+BE(b)|0)>BE(a))return 0;d=0;while(d<BE(b)){e=Cr(b,d);f=c+1|0;if(e!=Cr(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Lk(a,b){if(a===b)return 1;return AJJ(a,b,0);}
function R4(a,b,c){var d,e,f,g;d=DV(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bq.data.length)return (-1);if(a.bq.data[d]==e)break;d=d+1|0;}return d;}f=IV(b);g=Ih(b);while(true){if(d>=(a.bq.data.length-1|0))return (-1);if(a.bq.data[d]==f&&a.bq.data[d+1|0]==g)break;d=d+1|0;}return d;}
function QW(a,b){return R4(a,b,0);}
function AD$(a,b,c){var d,e,f,g,h;d=CR(c,BE(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bq.data[d]==e)break;d=d+(-1)|0;}return d;}f=IV(b);g=Ih(b);while(true){if(d<1)return (-1);if(a.bq.data[d]==g){h=a.bq.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function JT(a,b){return AD$(a,b,BE(a)-1|0);}
function Gs(a,b,c){var d;if(b<=c)return Vy(a.bq,b,c-b|0);d=new BT;Q(d);M(d);}
function JU(a,b){return Gs(a,b,BE(a));}
function LN(a,b,c){var d,e,f,g;d=new Bc;Ba(d);e=BE(a)-BE(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=BE(b)){EY(d,c);f=f+(BE(b)-1|0)|0;break a;}if(Cr(a,f+g|0)!=Cr(b,g))break;g=g+1|0;}E7(d,Cr(a,f));}f=f+1|0;}EY(d,JU(a,f));return O(d);}
function ANZ(a){return a;}
function AHB(a){var b,c,d,e;b=$rt_createCharArray(a.bq.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bq.data[d];d=d+1|0;}return b;}
function QM(b){return b===null?B(10):b.q6();}
function DU(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Cp))return 0;c=b;if(BE(c)!=BE(a))return 0;d=0;while(d<BE(c)){if(Cr(a,d)!=Cr(c,d))return 0;d=d+1|0;}return 1;}
function AXO(a){var b,c,d,e;a:{if(!a.oO){b=a.bq.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.oO=(31*a.oO|0)+e|0;d=d+1|0;}}}return a.oO;}
function AFf(a){var b,c,d,e,f,g,h;if(IR(a))return a;b=$rt_createIntArray(a.bq.data.length);c=b.data;d=0;e=0;while(e<a.bq.data.length){a:{if(e!=(a.bq.data.length-1|0)&&Iz(a.bq.data[e])){f=a.bq.data;g=e+1|0;if(I3(f[g])){h=d+1|0;c[d]=N$(Ky(a.bq.data[e],a.bq.data[g]));e=g;break a;}}h=d+1|0;c[d]=LX(a.bq.data[e]);}e=e+1|0;d=h;}return AZi(b,0,d);}
function AIT(a){var b,c,d,e,f,g,h;if(IR(a))return a;b=$rt_createIntArray(a.bq.data.length);c=b.data;d=0;e=0;while(e<a.bq.data.length){a:{if(e!=(a.bq.data.length-1|0)&&Iz(a.bq.data[e])){f=a.bq.data;g=e+1|0;if(I3(f[g])){h=d+1|0;c[d]=N1(Ky(a.bq.data[e],a.bq.data[g]));e=g;break a;}}h=d+1|0;c[d]=N1(a.bq.data[e])&65535;}e=e+1|0;d=h;}return AZi(b,0,d);}
function AO7(a,b){return ALJ(a,b);}
function ABD(){A2y=new Sa;}
function DD(){var a=this;E.call(a);a.tn=null;a.iF=null;a.m4=0;a.p8=0;a.nK=null;a.o_=null;}
function A2A(){var a=new DD();Q(a);return a;}
function A2B(a){var b=new DD();Bl(b,a);return b;}
function A2C(a){var b=new DD();ST(b,a);return b;}
function Q(a){a.m4=1;a.p8=1;}
function Bl(a,b){a.m4=1;a.p8=1;a.tn=b;}
function ST(a,b){a.m4=1;a.p8=1;a.iF=b;}
function AVU(a){return a;}
function AR_(a){return a.tn;}
function APp(a){return a.ml();}
function BY(a){PQ(a,CK());}
function PQ(a,b){var c,d,e,f,g;IQ(b,Hf(C4(a)));c=a.ml();if(c!==null){d=new Bc;Ba(d);IQ(b,O(H(H(d,B(11)),c)));}a:{AKa(b);if(a.o_!==null){e=a.o_.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];IQ(b,B(12));XW(b,d);g=g+1|0;}}}if(a.iF!==null&&a.iF!==a){IQ(b,B(13));PQ(a.iF,b);}}
function Mh(a,b){var c,d,e,f,g;Gh(b,Hf(C4(a)));c=a.ml();if(c!==null){d=new Bc;Ba(d);Gh(b,O(H(H(d,B(11)),c)));}a:{PI(b);if(a.o_!==null){e=a.o_.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Gh(b,B(14));Wk(b,d);g=g+1|0;}}}if(a.iF!==null&&a.iF!==a){Gh(b,B(13));Mh(a.iF,b);}}
function SK(a,b){if(!a.m4)return;a.nK=Rs(a.nK,a.nK.data.length+1|0);a.nK.data[a.nK.data.length-1|0]=b;}
function EA(){DD.call(this);}
function A2D(){var a=new EA();AOj(a);return a;}
function AOj(a){Q(a);}
function Hz(){EA.call(this);}
function A2E(){var a=new Hz();AOO(a);return a;}
function AOO(a){Q(a);}
function AG1(){Hz.call(this);}
function A2F(){var a=new AG1();ASX(a);return a;}
function ASX(a){Q(a);}
function GC(){var a=this;E.call(a);a.M=null;a.dm=0;}
function A2G(){var a=new GC();Ba(a);return a;}
function A2H(a){var b=new GC();Ju(b,a);return b;}
function Ba(a){Ju(a,16);}
function Ju(a,b){a.M=$rt_createCharArray(b);}
function ADU(a,b,c){return AHe(a,a.dm,b,c);}
function AHe(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)CL(a,b,b+1|0);else{CL(a,b,b+2|0);f=a.M.data;g=b+1|0;f[b]=45;b=g;}a.M.data[b]=Hy(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bh(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;CL(a,b,b+i|0);if(e)e=b;else{f=a.M.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.M.data;b=e+1|0;f[e]=Hy(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function YM(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)CL(a,b,b+1|0);else{CL(a,b,b+2|0);g=a.M.data;h=b+1|0;g[b]=45;b=h;}a.M.data[b]=Hy(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;CL(a,b,b+i|0);if(e)i=b;else{g=a.M.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.M.data;b=i+1|0;g[i]=Hy(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function AI1(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=S(c,0.0);if(!d){CL(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=48;e=a.M.data;b=d+1|0;e[d]=46;a.M.data[b]=48;return a;}if(!d){CL(a,b,b+4|0);e=a.M.data;d=b+1|0;e[b]=45;e=a.M.data;b=d+1|0;e[d]=48;e=a.M.data;d=b+1|0;e[b]=46;a.M.data[d]=48;return a;}if(isNaN(c)?1:0){CL(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=78;e=a.M.data;b=d+1|0;e[d]=97;a.M.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){CL(a,b,b+8|0);d=b;}else{CL(a,b,b+9|0);e=a.M.data;d=b+1|0;e[b]=45;}e=a.M.data;b=d+1|0;e[d]
=73;e=a.M.data;d=b+1|0;e[b]=110;e=a.M.data;b=d+1|0;e[d]=102;e=a.M.data;d=b+1|0;e[b]=105;e=a.M.data;b=d+1|0;e[d]=110;e=a.M.data;d=b+1|0;e[b]=105;e=a.M.data;b=d+1|0;e[d]=116;a.M.data[b]=121;return a;}f=A2I;AIP(c,f);d=f.sx;g=f.sj;h=f.wF;i=1;j=1;if(h){h=1;j=2;}k=9;l=ASx(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=DV(k,i+1|0);g=0;}else if(g<0){d=d/A2J.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;CL(a,b,b+(j+k|0)|0);if(!h)h=b;else{e=a.M.data;h=b+
1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.M.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.M.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.M.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.M.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.M.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.M.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AFq(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=S(c,0.0);if(!d){CL(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=48;e=a.M.data;b=d+1|0;e[d]=46;a.M.data[b]=48;return a;}if(!d){CL(a,b,b+4|0);e=a.M.data;d=b+1|0;e[b]=45;e=a.M.data;b=d+1|0;e[d]=48;e=a.M.data;d=b+1|0;e[b]=46;a.M.data[d]=48;return a;}if(isNaN(c)?1:0){CL(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=78;e=a.M.data;b=d+1|0;e[d]=97;a.M.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){CL(a,b,b+8|0);d=b;}else{CL(a,b,b+9|0);e=a.M.data;d=b+1|0;e[b]=45;}e=a.M.data;b=d+1|0;e[d]
=73;e=a.M.data;d=b+1|0;e[b]=110;e=a.M.data;b=d+1|0;e[d]=102;e=a.M.data;d=b+1|0;e[b]=105;e=a.M.data;b=d+1|0;e[d]=110;e=a.M.data;d=b+1|0;e[b]=105;e=a.M.data;b=d+1|0;e[d]=116;a.M.data[b]=121;return a;}f=A2K;Xy(c,f);g=f.sV;h=f.r_;i=f.wx;j=1;k=1;if(i)k=2;l=18;d=ARA(g);if(d>0)l=l-d|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=DV(l,j+1|0);h=0;}else if(h<0){g=Long_div(g,A2L.data[ -h]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;CL(a,b,b+(k+l|0)|0);if
(!i)i=b;else{e=a.M.data;i=b+1|0;e[b]=45;}m=new Long(1569325056, 23283064);n=0;while(n<l){if(Long_le(m,Long_ZERO))o=0;else{o=Long_div(g,m).lo;g=Long_rem(g,m);}e=a.M.data;b=i+1|0;e[i]=(48+o|0)&65535;j=j+(-1)|0;if(j)i=b;else{e=a.M.data;i=b+1|0;e[b]=46;}m=Long_div(m,Long_fromInt(10));n=n+1|0;}if(h){e=a.M.data;b=i+1|0;e[i]=69;if(h>=0)d=b;else{h= -h;e=a.M.data;d=b+1|0;e[b]=45;}if(h>=100){e=a.M.data;b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;e=a.M.data;j=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)j=d;else{e
=a.M.data;j=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}a.M.data[j]=(48+(h%10|0)|0)&65535;}return a;}
function ASx(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ARA(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;f=A2M.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,A2M.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,A2M.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function KV(a,b){var c;if(a.M.data.length>=b)return;c=a.M.data.length>=1073741823?2147483647:DV(b,DV(a.M.data.length*2|0,5));a.M=MF(a.M,c);}
function CL(a,b,c){var d,e;d=a.dm-b|0;a.oF((a.dm+c|0)-b|0);e=d-1|0;while(e>=0){a.M.data[c+e|0]=a.M.data[b+e|0];e=e+(-1)|0;}a.dm=a.dm+(c-b|0)|0;}
function Hb(){}
function Bc(){GC.call(this);}
function BQ(){var a=new Bc();AZK(a);return a;}
function AZK(a){Ba(a);}
function H(a,b){Ln(a,a.dm,b);return a;}
function Bd(a,b){ADU(a,b,10);return a;}
function CP(a,b){Q0(a,a.dm,b);return a;}
function APx(a,b){SJ(a,a.dm,b);return a;}
function AFk(a,b){NE(a,a.dm,b);return a;}
function E7(a,b){Ou(a,a.dm,b);return a;}
function EY(a,b){Tl(a,a.dm,b);return a;}
function Q0(a,b,c){YM(a,b,c,10);return a;}
function SJ(a,b,c){AI1(a,b,c);return a;}
function NE(a,b,c){AFq(a,b,c);return a;}
function Tl(a,b,c){Ln(a,b,c===null?B(10):c.q6());return a;}
function Ou(a,b,c){CL(a,b,b+1|0);a.M.data[b]=c;return a;}
function Ln(a,b,c){var d,e,f;if(b>=0&&b<=a.dm){a:{if(c===null)c=B(10);else if(IR(c))break a;KV(a,a.dm+BE(c)|0);d=a.dm-1|0;while(d>=b){a.M.data[d+BE(c)|0]=a.M.data[d];d=d+(-1)|0;}a.dm=a.dm+BE(c)|0;d=0;while(d<BE(c)){e=a.M.data;f=b+1|0;e[b]=Cr(c,d);d=d+1|0;b=f;}}return a;}c=new Mc;Q(c);M(c);}
function AHU(a,b){a.dm=b;}
function Wh(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BT;Bl(f,B(15));M(f);}while(b<c){g=d.data;h=e+1|0;i=a.M.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function IB(a){return a.dm;}
function O(a){return Vy(a.M,0,a.dm);}
function AQi(a,b){KV(a,b);}
function AXm(a,b,c){return Tl(a,b,c);}
function AW9(a,b,c){return Ou(a,b,c);}
function ASl(a,b,c){return NE(a,b,c);}
function AWc(a,b,c){return SJ(a,b,c);}
function AOh(a,b,c){return Q0(a,b,c);}
function ATT(a,b,c){return Ln(a,b,c);}
function Eu(){E.call(this);}
function G8(){Eu.call(this);this.f4=0;}
var A2N=null;var A2O=null;function AY9(a){var b=new G8();V6(b,a);return b;}
function V6(a,b){a.f4=b;}
function CG(b){var c;if(b>=(-128)&&b<=127){a:{if(A2O===null){A2O=N(G8,256);c=0;while(true){if(c>=A2O.data.length)break a;A2O.data[c]=AY9(c-128|0);c=c+1|0;}}}return A2O.data[b+128|0];}return AY9(b);}
function AUI(a){return a.f4;}
function AUb(a){return a.f4>>>4^a.f4<<28^a.f4<<8^a.f4>>>24;}
function AZR(a,b){if(a===b)return 1;return b instanceof G8&&b.f4==a.f4?1:0;}
function Wi(a,b){return S(a.f4,b.f4);}
function Q3(b,c){var d;d=c&31;return b<<d|b>>>(32-d|0);}
function AWQ(a,b){return Wi(a,b);}
function AKP(){A2N=K($rt_intcls());}
function Hq(){Hz.call(this);}
function A2P(){var a=new Hq();AQg(a);return a;}
function A2Q(a){var b=new Hq();Nt(b,a);return b;}
function AQg(a){Q(a);}
function Nt(a,b){Bl(a,b);}
function AJp(){Hq.call(this);}
function A2R(){var a=new AJp();APF(a);return a;}
function A2S(a){var b=new AJp();AN6(b,a);return b;}
function APF(a){Q(a);}
function AN6(a,b){Nt(a,b);}
function AGt(){Hq.call(this);}
function A2T(){var a=new AGt();AUu(a);return a;}
function A2U(a){var b=new AGt();AOk(b,a);return b;}
function AUu(a){Q(a);}
function AOk(a,b){Nt(a,b);}
function Bz(){DD.call(this);}
function A2V(){var a=new Bz();ARH(a);return a;}
function ARH(a){Q(a);}
function B5(){Bz.call(this);}
function A2W(){var a=new B5();ANl(a);return a;}
function VO(a){var b=new B5();AZt(b,a);return b;}
function ANl(a){Q(a);}
function AZt(a,b){Bl(a,b);}
function CV(){}
function Gc(){}
function QN(){}
function NF(){}
function Rp(){}
function Oo(){}
function So(){}
function MX(){}
function JB(){}
function UC(){E.call(this);}
function AQz(a,b,c){a.Ri($rt_str(b),H4(c,"handleEvent"));}
function AQG(a,b,c){a.OZ($rt_str(b),H4(c,"handleEvent"));}
function ANz(a,b){return a.DA(b);}
function ARj(a,b,c,d){a.Gc($rt_str(b),H4(c,"handleEvent"),d?1:0);}
function AS5(a,b){return !!a.Ro(b);}
function AOe(a){return a.ES();}
function AM6(a,b,c,d){a.IP($rt_str(b),H4(c,"handleEvent"),d?1:0);}
function Bo(){E.call(this);}
var A2X=0;var A2Y=null;var A2Z=null;var A20=null;var A21=null;var A22=null;var A23=null;var A24=null;var A25=null;var A26=null;var A27=null;var A28=null;var A29=null;var A2$=null;var A2_=null;var A3a=null;var A3b=null;var A3c=null;var A3d=null;var A3e=null;var A3f=0;var A3g=0;var A3h=0.0;var A3i=0.0;var A3j=0;var A3k=0;var A3l=0;var A3m=0;var A3n=0;var A3o=null;var A3p=null;var A3q=null;var A3r=null;var A3s=null;var A3t=0;var A3u=null;var A3v=null;var A3w=null;var A3x=null;var A3y=null;var A3z=null;var A3A=
Long_ZERO;var A3B=0;var A3C=0;var A3D=0;var A3E=null;var A3F=null;var A3G=null;var A3H=0;var A3I=0;var A3J=0;var A3K=null;var A3L=null;var A3M=null;var A3N=0;var A3O=null;var A3P=null;var A3Q=0.0;var A3R=null;var A3S=0;var A3T=null;var A3U=null;var A3V=0;var A3W=null;var A3X=0;function Y(){Y=Bt(Bo);ANB();}
function A3Y(){var a=new Bo();R1(a);return a;}
function R1(a){Y();}
function M2(){Y();return B(16);}
function IG(b){Y();if(Lk(b,B(17)))b=JU(b,1);return Cz(A3Z,b);}
function XM(b){var c;Y();c=IG(b);if(c===null)return null;return AT_(c,T1(B(18)));}
function AGa(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Cy=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EH=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{AUp(b,callback);}catch($e){callback.EH($rt_exception($e));}});}
function AUp(b,c){var d,e;Y();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new S5;b.te=d;b.xt=c;b=Cj(b,"stateChanged");d.onreadystatechange=b;d.send();}
function V$(b,c){var d,e,f,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();A2Z=b;d=$rt_str(A2Z.getAttribute("style"));e=A2Z;f=new Bc;Ba(f);if(d===null)d=B(3);f=O(H(H(f,d),B(19)));e.setAttribute("style",$rt_ustr(f));A24=window;A2Y=A24.document;A20=A2Y.createElement("canvas");A3j=b.clientWidth;A3k=b.clientHeight;f=A20;e=A3j;f.width=e;f=A20;e=A3k;f.height=e;A21=A20.getContext("2d");A20.setAttribute("id","deevis589723589");f=A20;b.appendChild(f);A22
=A2Y.createElement("canvas");b=A22;f=A3j;b.width=f;b=A22;f=A3k;b.height=f;b=A22;e=AAa();A23=b.getContext("webgl2",e);if(A23===null){b=new B5;c=new Bc;Ba(c);Bl(b,O(H(H(H(c,B(20)),$rt_str(window.navigator.userAgent)),B(21))));M(b);}T3(A23);A23.getExtension("EXT_texture_filter_anisotropic");b=A24;e=new S6;A26=e;b.addEventListener("contextmenu",Cj(e,"handleEvent"));b=A20;e=new Ta;A27=e;b.addEventListener("mousedown",Cj(e,"handleEvent"));b=A20;e=new Tb;A28=e;b.addEventListener("mouseup",Cj(e,"handleEvent"));b=A20;e
=new S$;A29=e;b.addEventListener("mousemove",Cj(e,"handleEvent"));b=A24;e=new S_;A2$=e;b.addEventListener("keydown",Cj(e,"handleEvent"));b=A24;e=new S8;A2_=e;b.addEventListener("keyup",Cj(e,"handleEvent"));b=A24;e=new S9;A3a=e;b.addEventListener("keypress",Cj(e,"handleEvent"));b=A20;e=new S7;A3b=e;b.addEventListener("wheel",Cj(e,"handleEvent"));b=A24;e=new NL;b.addEventListener("blur",Cj(e,"handleEvent"));b=A24;e=new NK;b.addEventListener("focus",Cj(e,"handleEvent"));AIw();$p=1;case 1:AEK();if(C()){break _;}$p
=2;case 2:AGa(c);if(C()){break _;}a:{try{AGY(A25);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){f=$$je;}else{throw $$e;}}BY(f);}A3P=AQN();Md(A3d);Md(A3e);return;default:Es();}}CM().s(b,c,d,e,f,$p);}
function Jm(b){Y();A23.enable(b);}
function It(b){Y();A23.disable(b);}
function AC9(){var b,c;Y();b=new R_;b.h0=A23.createProgram();c=A3n+1|0;A3n=c;b.u1=c;return b;}
function Mj(b){var c;Y();c=new Sc;c.it=A23.createShader(b);return c;}
function Pf(b,c){var d;Y();d=A23;b=b.h0;c=c.it;d.attachShader(b,c);}
function Q1(b,c){var d;Y();d=A23;b=b.h0;c=c.it;d.detachShader(b,c);}
function SD(b){var c;Y();c=A23;b=b.it;c.compileShader(b);}
function Wm(b){var c;Y();c=A23;b=b.h0;c.linkProgram(b);}
function Mz(b,c){var d;Y();d=A23;b=b.it;d.shaderSource(b,$rt_ustr(c));}
function QB(b){var c;Y();c=A23;b=b.it;return $rt_str(c.getShaderInfoLog(b));}
function ACH(b){var c;Y();c=A23;b=b.h0;return $rt_str(c.getProgramInfoLog(b));}
function Rt(b){var c;Y();c=A23;b=b.it;return c.getShaderParameter(b,35713)!=1?0:1;}
function ABF(b){var c;Y();c=A23;b=b.h0;return c.getProgramParameter(b,35714)!=1?0:1;}
function P3(b){var c;Y();c=A23;b=b.it;c.deleteShader(b);}
function Kh(){var b;Y();b=new Si;b.Ay=A23.createBuffer();return b;}
function Gb(b,c){var d;Y();d=A23;c=c!==null?c.Ay:null;d.bindBuffer(b,c);}
function M1(b,c,d){var e;Y();e=A23;c=c;e.bufferData(b,c,d);}
function LP(b){Y();A23.enableVertexAttribArray(b);}
function C7(b,c){var d;Y();d=A23;b=b.h0;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new Tf;b.jw=d;}return b;}
function J7(b,c,d){var e;Y();e=A23;b=b.h0;e.bindAttribLocation(b,c,$rt_ustr(d));}
function GZ(b,c){var d;Y();if(b!==null){d=A23;b=b.jw;d.uniform1f(b,c);}}
function JE(b,c,d,e){var f;Y();if(b!==null){f=A23;b=b.jw;f.uniform3f(b,c,d,e);}}
function QH(b,c,d,e,f){var g,h;Y();if(b!==null){g=A23;h=b.jw;g.uniform4f(h,c,d,e,f);}}
function Of(b,c){var d;Y();if(b!==null){d=A23;b=b.jw;d.uniform1i(b,c);}}
function Kp(b,c){var d,e;Y();A3s.set(c.data);if(b!==null){d=A23;e=b.jw;b=A3s;d.uniformMatrix4fv(e,!!0,b);}}
function R$(b){var c;Y();if(b!==null&&A3t!=b.u1){A3t=b.u1;c=A23;b=b.h0;c.useProgram(b);}}
function LR(b,c,d,e,f,g){Y();A23.vertexAttribPointer(b,c,d,!!e,f,g);}
function MI(){var b;Y();b=new Px;b.x7=A23.createVertexArray();b.tB=0;return b;}
function OW(b){var c;Y();c=A23;b=b!==null?b.x7:null;c.bindVertexArray(b);}
function AAg(b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=ADv(c);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(b,c,$p);}
function ADv(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Cy=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EH=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{APH(b,callback);}catch($e){callback.EH($rt_exception($e));}});}
function APH(b,c){var d,e,f;Y();d=A2Y.createElement("img");e=new NO;e.fp=d;e.vF=c;d.addEventListener("load",Cj(e,"handleEvent"));f=new NN;f.AQ=d;f.Bp=c;d.addEventListener("error",Cj(f,"handleEvent"));e=$rt_str(AIi(b,"image/png"));if(e===null)Cx(c,null);else{b=$rt_ustr(e);d.src=b;}}
function JG(){var b,c,d;Y();b=A2Z.clientWidth;if(b!=A3j){c=A20;d=b;c.width=d;c=A22;d=b;c.width=d;A3j=b;}return b;}
function KE(){var b,c,d;Y();b=A2Z.clientHeight;if(b!=A3k){c=A20;d=b;c.height=d;c=A22;d=b;c.height=d;A3k=b;}return b;}
function IX(){Y();return Long_fromInt(1073741824);}
function Io(){Y();return Long_fromInt(1073741824);}
function ID(){Y();return Long_ZERO;}
function QY(b){Y();return b.byteLength;}
function Qx(b){Y();return b<=A3U.data.length&&b>=0?A3U.data[b]:(-1);}
function Yb(b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();d=JT(b,47);if(d>0){e=Gs(b,0,d);$p=2;continue _;}f=new Uint8Array(c.data.length);f.set(c.data);e=A30;d=0;f=f.buffer;$p=1;case 1:AQn(e,b,d,f);if(C()){break _;}return;case 2:AD_(e);if(C()){break _;}f=new Uint8Array(c.data.length);f.set(c.data);e=A30;d=0;f=f.buffer;$p=1;continue _;default:Es();}}CM().s(b,c,d,e,f,$p);}
function AGu(b){var c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();c=A30;$p=1;case 1:$z=AZ5(c,b);if(C()){break _;}b=$z;if(b===null)d=null;else{d=$rt_createByteArray(b.byteLength);e=d.data;b=new Uint8Array(b);f=0;g=e.length;while(f<g){e[f]=b[f]<<24>>24;f=f+1|0;}}return d;default:Es();}}CM().s(b,c,d,e,f,g,$p);}
function AHZ(b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();d=A30;$p=1;case 1:$z=AZ5(d,b);if(C()){break _;}d=$z;e=JT(c,47);if(e<=0){f=A30;e=0;$p=2;continue _;}f=Gs(c,0,e);$p=4;continue _;case 2:AQn(f,c,e,d);if(C()){break _;}c=A30;$p=3;case 3:AVM(c,b);if(C()){break _;}return;case 4:AD_(f);if(C()){break _;}f=A30;e=0;$p=2;continue _;default:Es();}}CM().s(b,c,d,e,f,$p);}
function AGQ(b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();c=A30;$p=1;case 1:AVM(c,b);if(C()){break _;}return;default:Es();}}CM().s(b,c,$p);}
function Sd(){Y();return A25;}
function OS(){Y();return A3y;}
function KO(){Y();return A3d;}
function Kx(){Y();if(Long_gt(Long_sub(B2(),A3A),Long_fromInt(3000))&&A3C&&!(document.pointerLockElement!=null?1:0)){A20.requestPointerLock();if(document.pointerLockElement!=null?1:0)A3C=0;}}
function Nj(){Y();return A3z;}
function NP(b){Y();return b.which;}
function PX(b){Y();return Qx(b);}
function Lw(){Y();return A3e;}
function PN(b){Y();A3m=b;return b;}
function Gg(){Y();return A3u;}
function If(){Y();return A3v;}
function SF(b){Y();URL.revokeObjectURL($rt_ustr(b));}
function RY(){Y();return A3B;}
function KT(b){Y();A3B=b;return b;}
function Ne(){Y();return A3A;}
function ANB(){var b,c;A2X=0;A2Y=null;A2Z=null;A20=null;A21=null;A22=null;A23=null;A24=null;A25=null;A26=null;A27=null;A28=null;A29=null;A2$=null;A2_=null;A3a=null;A3b=null;A3c=N(Cp,0);A3d=N2();A3e=N2();A3f=0;A3g=0;A3h=0.0;A3i=0.0;A3j=0;A3k=0;A3l=0;A3m=1;A3n=0;A3o=$rt_createIntArray(4);A3p=new Uint8Array(new ArrayBuffer(4194304));A3q=new Float32Array(4);A3r=new Float32Array(9);A3s=new Float32Array(16);A3t=(-1);A3u=null;A3v=null;A3w=null;A3x=null;A3y=$rt_createBooleanArray(8);A3z=$rt_createBooleanArray(256);A3A
=Long_ZERO;A3B=0;A3C=0;A3D=0;A3E=Fh();A3F=Fh();A3G=null;A3H=0;A3I=0;A3J=0;A3K=N2();A3L=null;A3M=null;A3N=0;A3O=CY();A3P=null;A3Q=0.029999999329447746;A3R=CY();A3S=0;b=N(Cp,256);c=b.data;c[0]=B(22);c[1]=B(23);c[2]=B(24);c[3]=B(25);c[4]=B(26);c[5]=B(27);c[6]=B(28);c[7]=B(29);c[8]=B(30);c[9]=B(31);c[10]=B(32);c[11]=B(2);c[12]=B(33);c[13]=B(34);c[14]=B(35);c[15]=B(36);c[16]=B(37);c[17]=B(38);c[18]=B(39);c[19]=B(40);c[20]=B(41);c[21]=B(42);c[22]=B(43);c[23]=B(44);c[24]=B(45);c[25]=B(46);c[26]=B(47);c[27]=B(48);c[28]
=B(49);c[29]=B(50);c[30]=B(51);c[31]=B(52);c[32]=B(53);c[33]=B(54);c[34]=B(55);c[35]=B(56);c[36]=B(57);c[37]=B(58);c[38]=B(59);c[39]=B(60);c[40]=B(61);c[41]=B(62);c[42]=B(63);c[43]=B(64);c[44]=B(65);c[45]=B(66);c[46]=B(67);c[47]=B(68);c[48]=B(69);c[49]=B(70);c[50]=B(71);c[51]=B(72);c[52]=B(73);c[53]=B(74);c[54]=B(75);c[55]=B(76);c[56]=B(77);c[57]=B(78);c[58]=B(79);c[59]=B(80);c[60]=B(81);c[61]=B(82);c[62]=B(83);c[63]=B(84);c[64]=B(85);c[65]=B(86);c[66]=B(87);c[67]=B(88);c[68]=B(89);c[69]=B(90);c[70]=B(91);c[71]
=B(92);c[72]=B(93);c[73]=B(94);c[74]=B(95);c[75]=B(96);c[76]=B(97);c[77]=B(98);c[78]=B(99);c[79]=B(100);c[80]=B(101);c[81]=B(102);c[82]=B(103);c[83]=B(104);c[84]=B(10);c[85]=B(10);c[86]=B(10);c[87]=B(105);c[88]=B(106);c[89]=B(10);c[90]=B(10);c[91]=B(10);c[92]=B(10);c[93]=B(10);c[94]=B(10);c[95]=B(10);c[96]=B(10);c[97]=B(10);c[98]=B(10);c[99]=B(10);c[100]=B(107);c[101]=B(108);c[102]=B(109);c[103]=B(110);c[104]=B(111);c[105]=B(112);c[106]=B(10);c[107]=B(10);c[108]=B(10);c[109]=B(10);c[110]=B(10);c[111]=B(10);c[112]
=B(113);c[113]=B(114);c[114]=B(10);c[115]=B(10);c[116]=B(10);c[117]=B(10);c[118]=B(10);c[119]=B(10);c[120]=B(10);c[121]=B(115);c[122]=B(10);c[123]=B(116);c[124]=B(10);c[125]=B(117);c[126]=B(10);c[127]=B(10);c[128]=B(10);c[129]=B(10);c[130]=B(10);c[131]=B(10);c[132]=B(10);c[133]=B(10);c[134]=B(10);c[135]=B(10);c[136]=B(10);c[137]=B(10);c[138]=B(10);c[139]=B(10);c[140]=B(10);c[141]=B(118);c[142]=B(10);c[143]=B(10);c[144]=B(119);c[145]=B(120);c[146]=B(121);c[147]=B(122);c[148]=B(123);c[149]=B(124);c[150]=B(125);c[151]
=B(126);c[152]=B(10);c[153]=B(10);c[154]=B(10);c[155]=B(10);c[156]=B(127);c[157]=B(128);c[158]=B(10);c[159]=B(10);c[160]=B(10);c[161]=B(10);c[162]=B(10);c[163]=B(10);c[164]=B(10);c[165]=B(10);c[166]=B(10);c[167]=B(129);c[168]=B(10);c[169]=B(10);c[170]=B(10);c[171]=B(10);c[172]=B(10);c[173]=B(10);c[174]=B(10);c[175]=B(10);c[176]=B(10);c[177]=B(10);c[178]=B(10);c[179]=B(130);c[180]=B(10);c[181]=B(131);c[182]=B(10);c[183]=B(132);c[184]=B(133);c[185]=B(10);c[186]=B(10);c[187]=B(10);c[188]=B(10);c[189]=B(10);c[190]
=B(10);c[191]=B(10);c[192]=B(10);c[193]=B(10);c[194]=B(10);c[195]=B(10);c[196]=B(134);c[197]=B(135);c[198]=B(10);c[199]=B(136);c[200]=B(137);c[201]=B(138);c[202]=B(10);c[203]=B(139);c[204]=B(10);c[205]=B(140);c[206]=B(10);c[207]=B(141);c[208]=B(142);c[209]=B(143);c[210]=B(144);c[211]=B(145);c[212]=B(10);c[213]=B(10);c[214]=B(10);c[215]=B(10);c[216]=B(10);c[217]=B(10);c[218]=B(146);c[219]=B(147);c[220]=B(148);c[221]=B(149);c[222]=B(150);c[223]=B(151);c[224]=B(10);c[225]=B(10);c[226]=B(10);c[227]=B(10);c[228]
=B(10);c[229]=B(10);c[230]=B(10);c[231]=B(10);c[232]=B(10);c[233]=B(10);c[234]=B(10);c[235]=B(10);c[236]=B(10);c[237]=B(10);c[238]=B(10);c[239]=B(10);c[240]=B(10);c[241]=B(10);c[242]=B(10);c[243]=B(10);c[244]=B(10);c[245]=B(10);c[246]=B(10);c[247]=B(10);c[248]=B(10);c[249]=B(10);c[250]=B(10);c[251]=B(10);c[252]=B(10);c[253]=B(10);c[254]=B(10);c[255]=B(10);A3T=b;b=$rt_createIntArray(224);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]=(-1);c[8]=14;c[9]=15;c[10]=(-1);c[11]=
(-1);c[12]=(-1);c[13]=28;c[14]=(-1);c[15]=(-1);c[16]=42;c[17]=29;c[18]=56;c[19]=(-1);c[20]=(-1);c[21]=(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=1;c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=57;c[33]=210;c[34]=201;c[35]=207;c[36]=199;c[37]=203;c[38]=200;c[39]=205;c[40]=208;c[41]=205;c[42]=208;c[43]=(-1);c[44]=(-1);c[45]=210;c[46]=211;c[47]=211;c[48]=11;c[49]=2;c[50]=3;c[51]=4;c[52]=5;c[53]=6;c[54]=7;c[55]=8;c[56]=9;c[57]=10;c[58]=(-1);c[59]=(-1);c[60]=(-1);c[61]=(-1);c[62]=(-1);c[63]
=(-1);c[64]=(-1);c[65]=30;c[66]=48;c[67]=46;c[68]=32;c[69]=18;c[70]=33;c[71]=34;c[72]=35;c[73]=23;c[74]=36;c[75]=37;c[76]=38;c[77]=50;c[78]=49;c[79]=24;c[80]=25;c[81]=16;c[82]=19;c[83]=31;c[84]=20;c[85]=22;c[86]=47;c[87]=17;c[88]=45;c[89]=21;c[90]=44;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=(-1);c[96]=(-1);c[97]=(-1);c[98]=(-1);c[99]=(-1);c[100]=(-1);c[101]=(-1);c[102]=(-1);c[103]=(-1);c[104]=(-1);c[105]=(-1);c[106]=(-1);c[107]=(-1);c[108]=(-1);c[109]=12;c[110]=52;c[111]=53;c[112]=(-1);c[113]=(-1);c[114]
=(-1);c[115]=(-1);c[116]=(-1);c[117]=(-1);c[118]=(-1);c[119]=(-1);c[120]=(-1);c[121]=(-1);c[122]=(-1);c[123]=(-1);c[124]=(-1);c[125]=(-1);c[126]=(-1);c[127]=(-1);c[128]=(-1);c[129]=(-1);c[130]=(-1);c[131]=(-1);c[132]=(-1);c[133]=(-1);c[134]=(-1);c[135]=(-1);c[136]=(-1);c[137]=(-1);c[138]=(-1);c[139]=(-1);c[140]=(-1);c[141]=(-1);c[142]=(-1);c[143]=(-1);c[144]=(-1);c[145]=(-1);c[146]=(-1);c[147]=(-1);c[148]=(-1);c[149]=(-1);c[150]=(-1);c[151]=(-1);c[152]=(-1);c[153]=(-1);c[154]=(-1);c[155]=(-1);c[156]=(-1);c[157]
=(-1);c[158]=(-1);c[159]=(-1);c[160]=(-1);c[161]=(-1);c[162]=(-1);c[163]=(-1);c[164]=(-1);c[165]=(-1);c[166]=(-1);c[167]=(-1);c[168]=(-1);c[169]=(-1);c[170]=(-1);c[171]=(-1);c[172]=(-1);c[173]=(-1);c[174]=(-1);c[175]=(-1);c[176]=(-1);c[177]=(-1);c[178]=(-1);c[179]=(-1);c[180]=(-1);c[181]=(-1);c[182]=(-1);c[183]=(-1);c[184]=(-1);c[185]=(-1);c[186]=39;c[187]=13;c[188]=51;c[189]=12;c[190]=52;c[191]=53;c[192]=(-1);c[193]=(-1);c[194]=(-1);c[195]=(-1);c[196]=(-1);c[197]=(-1);c[198]=(-1);c[199]=(-1);c[200]=(-1);c[201]
=(-1);c[202]=(-1);c[203]=(-1);c[204]=(-1);c[205]=(-1);c[206]=(-1);c[207]=(-1);c[208]=(-1);c[209]=(-1);c[210]=(-1);c[211]=(-1);c[212]=(-1);c[213]=(-1);c[214]=(-1);c[215]=(-1);c[216]=(-1);c[217]=(-1);c[218]=(-1);c[219]=(-1);c[220]=26;c[221]=43;c[222]=27;c[223]=40;A3U=b;A3V=0;A3W=new Int32Array(new ArrayBuffer(2100000));A3X=0;}
function T3(b){window.currentContext=b;}
function AIw(){if (!AIw.$native){
AIw.$native=function(){return (function(){window.eagsFileChooser = {
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
};})();};AIw=AIw.$native;}return AIw();}
function AAa(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function AIi(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function AIc(b){if(b.commit)b.commit();}
function PO(){}
function H3(){}
function LF(){}
function Gt(){E.call(this);this.tZ=null;}
function WX(){Gt.call(this);this.vu=null;}
function AYm(){var a=new WX();AT7(a);return a;}
function AT7(a){var b;a.tZ=a;b=new MO;Ju(b,16);a.vu=b;a.tZ=a.vu;}
function AFW(a){return;}
function ZZ(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;ACy(a.vu,b,c,d);return;}}f=new BT;Q(f);M(f);}
function Wg(){var a=this;Gt.call(a);a.no=null;a.B6=0;a.A6=0;}
function AXL(a){var b=new Wg();AY3(b,a);return b;}
function AY3(a,b){if(b!==null){a.tZ=b;a.A6=0;a.no=b;return;}b=new El;Q(b);M(b);}
function AAT(a){var $$je;a:{if(a.no===null)IE(a);else{try{AFW(a.no);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){}else{throw $$e;}}IE(a);}}}
function Gh(a,b){if(b===null)b=QM(null);Um(a,b);}
function PI(a){Gh(a,B(152));if(a.A6)AAT(a);}
function Wk(a,b){Xq(a,QM(b));}
function Xq(a,b){Gh(a,b);PI(a);}
function IE(a){a.B6=1;}
function AMd(a,b){V8(a,b,0,b.data.length);}
function V8(a,b,c,d){var $$je;a:{if(a.no===null)IE(a);else{try{ZZ(a.no,b,c,d);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){}else{throw $$e;}}IE(a);}}}
function Um(a,b){AMd(a,AHB(b));}
function AAA(){E.call(this);}
function A31(){var a=new AAA();APb(a);return a;}
function APb(a){return;}
function ABa(){E.call(this);}
function J_(){}
function IF(){var a=this;E.call(a);a.ce=null;a.b5=0;a.bw=0;a.ba=null;a.w=null;a.dB=null;a.e=null;a.cG=null;a.jV=null;a.bm=0;a.bi=null;a.ey=null;a.A=null;a.il=null;a.ek=null;a.bD=0;a.cK=0;a.Dh=null;a.Cb=0;a.mD=null;a.hh=0;a.CD=null;a.bV=null;a.r=null;a.vM=null;a.zV=null;a.yC=null;a.gN=0;a.kq=null;a.f8=Long_ZERO;a.bj=0;a.b2=0;a.cv=0;a.c8=Long_ZERO;}
var A32=null;var A33=0;function ADq(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.r=A0l(a);b=new I7;c=a.r;A34=CY();b.wG=CY();b.jx=Om(1);b.gt=SO(1048576);b.kL=SO(1048576);b.y9=Ck();b.q7=0;b.Ax=0;b.uq=c;a.bi=b;c=new Sm;d=a.r;b=B(153);e=a.bi;$p=1;case 1:AJe(c,d,b,e);if(C()){break _;}a.ey=c;$p=2;case 2:Uj(a);if(C()){break _;}a.vM=new Nz;DP(a,B(154));V(3553);Y();A23.clearDepth((-1.0));V(2929);Gz(515);V(3008);Pv(516,
0.10000000149011612);A23.cullFace(1029);CU(5889);CT();CU(5888);DP(a,B(155));F6(a.bi,a.yC);F6(a.bi,a.zV);F6(a.bi,A0y());F6(a.bi,A19());F6(a.bi,AOU(0));F6(a.bi,AOU(1));a.dB=A0R(a,a.bi);Ge(0,0,a.b5,a.bw);b=JZ();$p=3;case 3:Zp(a,b);if(C()){break _;}b=new My;c=a.w;d=a.bi;b.cg=N(Iu,3);b.qI=new Df;if(c!==null)b.lA=c;b.ig=d;f=0;while(f<3){b.cg.data[f]=Ck();f=f+1|0;}a.cG=b;DP(a,B(156));b=new Lh;K8(b);b.gm=Ck();b.th=new Df;b.B$=null;b.qb=0;b.Es=1.0;b.bN=a;a.mD=b;return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Uj(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=EU(a.b5,a.bw);c=b.e_;d=b.e7;DA(16640);CU(5889);CT();G7(0.0,c,d,0.0,1000.0,3000.0);CU(5888);CT();Br(0.0,0.0,(-2000.0));Ge(0,0,a.b5,a.bw);Gr(0.0,0.0,0.0,0.0);X(2896);X(2912);V(3553);Bv();e=A35;f=3553;b=a.bi;g=B(157);$p=1;case 1:$z=ACG(b,g);if(C()){break _;}d=$z;Ce(f,d);BN(1.0,1.0,1.0,1.0);Bu(e);Ec(e,4210752);F(e,0.0,a.bw,0.0,0.0,a.bw/32.0+0.0);F(e,
a.b5,a.bw,0.0,a.b5/32.0,a.bw/32.0+0.0);F(e,a.b5,0.0,0.0,a.b5/32.0,0.0);F(e,0.0,0.0,0.0,0.0,0.0);Bn(e);V(3008);Pv(516,0.10000000149011612);Cn(a.ey,B(158),8,(a.bw/2|0)-16|0,(-1));return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Zp(a,b){var c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.A instanceof OE)return;if(a.A!==null){c=a.A;$p=1;continue _;}if(b===null&&a.w===null)b=JZ();else if(b===null&&a.e.bI<=0){b=new Kt;DI(b);}a.A=b;if(b===null){$p=2;continue _;}S1(a);c=EU(a.b5,a.bw);d=c.e_;e=c.e7;$p=3;continue _;case 1:c.n1();if(C()){break _;}if(b===null&&a.w===null)b=JZ();else if(b===null&&a.e.bI<=0){b=new Kt;DI(b);}a.A=b;if(b===null){$p=2;continue _;}S1(a);c
=EU(a.b5,a.bw);d=c.e_;e=c.e7;$p=3;continue _;case 2:AAH(a);if(C()){break _;}return;case 3:AKC(b,a,d,e);if(C()){break _;}a.hh=0;return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function DP(a,b){var c,d,e,f;BO();Y();c=A23.getError();if(c==(-144))c=(-144);if(c){a:{switch(c){case -144:break;case 1280:d=B(159);break a;case 1281:d=B(160);break a;case 1282:d=B(161);break a;case 1285:d=B(162);break a;default:d=B(163);break a;}d=B(164);}B9(Ds(),B(165));e=Ds();f=new Bc;Ba(f);B9(e,O(H(H(f,B(166)),b)));b=Ds();e=new Bc;Ba(e);B9(b,O(H(H(Bd(e,c),B(11)),d)));}}
function Ue(a){var b,c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gN=1;try{$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){b=$$je;}else{throw $$e;}}BY(b);return;case 1:a:{try{ADq(a);if(C()){break _;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){b=$$je;}else{throw $$e;}}BY(b);return;}c=B2();d=0;if(!a.gN)return;A36=0;A37=0;if(!a.bm)E0(a.ba);else
{e=a.ba.cz;E0(a.ba);a.ba.cz=e;}f=0;if(f<a.ba.h7){a.bD=a.bD+1|0;$p=2;continue _;}DP(a,B(167));if(a.bm)a.ba.cz=1.0;V(3553);if(a.w!==null){g=a.w;$p=3;continue _;}if(!a.hh){FU(a.ce,a.ba.cz);g=a.ek;e=a.ba.cz;$p=4;continue _;}if(BH(33)&&BH(7))E9(a);else a.f8=D7();$p=5;continue _;case 2:AAX(a);if(C()){break _;}f=f+1|0;if(f<a.ba.h7){a.bD=a.bD+1|0;continue _;}DP(a,B(167));if(a.bm)a.ba.cz=1.0;V(3553);if(a.w!==null){g=a.w;$p=3;continue _;}if(!a.hh){FU(a.ce,a.ba.cz);g=a.ek;e=a.ba.cz;$p=4;continue _;}if(BH(33)&&BH(7))E9(a);else a.f8
=D7();$p=5;continue _;case 3:$z=ADn(g);if(C()){break _;}h=$z;if(h){g=a.w;continue _;}if(!a.hh){FU(a.ce,a.ba.cz);g=a.ek;e=a.ba.cz;$p=4;continue _;}if(BH(33)&&BH(7))E9(a);else a.f8=D7();$p=5;continue _;case 4:AA9(g,e);if(C()){break _;}if(BH(33)&&BH(7))E9(a);else a.f8=D7();$p=5;case 5:Tz();if(C()){break _;}$p=6;case 6:AOp();if(C()){break _;}if(!(JG()==a.b5&&KE()==a.bw)){a.b5=A20.width;a.bw=A20.height;if(a.b5<=0)a.b5=1;if(a.bw<=0)a.bw=1;h=a.b5;i=a.bw;if(h<=0)h=1;if(i<=0)i=1;a.b5=h;a.bw=i;if(a.A!==null){g=EU(h,i);i
=g.e_;h=g.e7;g=a.A;$p=8;continue _;}}if(a.r.la){try{j=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){g=$$je;}else{throw $$e;}}g.rQ();}DP(a,B(168));d=d+1|0;a.bm=a.A!==null&&a.A.mQ()?1:0;while(true){k=B2();j=Long_add(c,Long_fromInt(1000));if(Long_lt(k,j))break;g=new Bc;Ba(g);g=H(Bd(g,d),B(169));P$();a.kq=O(H(Bd(g,A38),B(170)));A38=0;d=0;c=j;}if(!a.gN)return;A36=0;A37=0;if(!a.bm)E0(a.ba);else{e=a.ba.cz;E0(a.ba);a.ba.cz=e;}f=0;if(f<a.ba.h7){a.bD=a.bD+1|0;$p=2;continue _;}DP(a,B(167));if
(a.bm)a.ba.cz=1.0;V(3553);if(a.w!==null){g=a.w;$p=3;continue _;}if(!a.hh){FU(a.ce,a.ba.cz);g=a.ek;e=a.ba.cz;$p=4;continue _;}if(BH(33)&&BH(7))E9(a);else a.f8=D7();$p=5;continue _;case 7:a:{try{AFx(j);if(C()){break _;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){g=$$je;}else{throw $$e;}}g.rQ();}DP(a,B(168));d=d+1|0;a.bm=a.A!==null&&a.A.mQ()?1:0;while(true){k=B2();j=Long_add(c,Long_fromInt(1000));if(Long_lt(k,j))break;g=new Bc;Ba(g);g=H(Bd(g,d),B(169));P$();a.kq=O(H(Bd(g,A38),B(170)));A38=0;d=0;c=j;}if
(!a.gN)return;A36=0;A37=0;if(!a.bm)E0(a.ba);else{e=a.ba.cz;E0(a.ba);a.ba.cz=e;}f=0;if(f<a.ba.h7){a.bD=a.bD+1|0;$p=2;continue _;}DP(a,B(167));if(a.bm)a.ba.cz=1.0;V(3553);if(a.w!==null){g=a.w;$p=3;continue _;}if(!a.hh){FU(a.ce,a.ba.cz);g=a.ek;e=a.ba.cz;$p=4;continue _;}if(BH(33)&&BH(7))E9(a);else a.f8=D7();$p=5;continue _;case 8:AKC(g,a,i,h);if(C()){break _;}if(a.r.la){try{j=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){g=$$je;}else{throw $$e;}}g.rQ();}DP(a,B(168));d=d+1|0;a.bm
=a.A!==null&&a.A.mQ()?1:0;while(true){k=B2();j=Long_add(c,Long_fromInt(1000));if(Long_lt(k,j))break;g=new Bc;Ba(g);g=H(Bd(g,d),B(169));P$();a.kq=O(H(Bd(g,A38),B(170)));A38=0;d=0;c=j;}if(!a.gN)return;A36=0;A37=0;if(!a.bm)E0(a.ba);else{e=a.ba.cz;E0(a.ba);a.ba.cz=e;}f=0;if(f<a.ba.h7){a.bD=a.bD+1|0;$p=2;continue _;}DP(a,B(167));if(a.bm)a.ba.cz=1.0;V(3553);if(a.w!==null){g=a.w;$p=3;continue _;}if(!a.hh){FU(a.ce,a.ba.cz);g=a.ek;e=a.ba.cz;$p=4;continue _;}if(BH(33)&&BH(7))E9(a);else a.f8=D7();$p=5;continue _;default:
Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function E9(a){var b,c,d,e,f,g,h,i,j,k,l;if(Long_eq(a.f8,Long_fromInt(-1)))a.f8=D7();b=D7();c=A32.data;d=A33;A33=d+1|0;c[d&(A32.data.length-1|0)]=Long_sub(b,a.f8);a.f8=b;DA(256);CU(5889);CT();G7(0.0,a.b5,a.bw,0.0,1000.0,3000.0);CU(5888);CT();Br(0.0,0.0,(-2000.0));X(3553);Bv();e=A35;Fs(e,7);Ec(e,538968064);Bb(e,0.0,a.bw-100|0,0.0);Bb(e,0.0,a.bw,0.0);Bb(e,A32.data.length,a.bw,0.0);Bb(e,A32.data.length,a.bw-100|0,0.0);Bn(e);f=Long_ZERO;d=0;while(d<A32.data.length){f=Long_add(f,A32.data[d]);d=d+1|0;}d=Long_div(Long_div(f,
Long_fromInt(200000)),Long_fromInt(A32.data.length)).lo;Fs(e,7);Ec(e,541065216);Bb(e,0.0,a.bw-d|0,0.0);Bb(e,0.0,a.bw,0.0);Bb(e,A32.data.length,a.bw,0.0);Bb(e,A32.data.length,a.bw-d|0,0.0);Bn(e);Fs(e,1);g=0;while(g<A32.data.length){h=(((g-A33|0)&(A32.data.length-1|0))*255|0)/A32.data.length|0;i=Bh(h,h)/255|0;d=Bh(i,i)/255|0;j=Bh(d,d)/255|0;Ec(e,(((-16777216)+(Bh(j,j)/255|0)|0)+(d*256|0)|0)+(h*4096|0)|0);k=Long_div(A32.data[g],Long_fromInt(200000));l=g+0.5;Bb(e,l,Long_toNumber(Long_sub(Long_fromInt(a.bw),k))+
0.5,0.0);Bb(e,l,a.bw+0.5,0.0);g=g+1|0;}Bn(e);V(3553);}
function AAH(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(L2()&&!a.bj){a.bj=1;Ut(a.vM);b=null;$p=1;continue _;}return;case 1:Zp(a,b);if(C()){break _;}a.b2=a.bD+10000|0;return;default:Es();}}CM().s(a,b,$p);}
function S1(a){if(a.bj){if(a.e!==null)ALZ(a.e);a.bj=0;AAV(a.vM);}}
function AF1(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.A!==null)return;b=A10();$p=1;case 1:Zp(a,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function Wn(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.ce.Av&&!(!b&&a.cK>0)){if(c&&a.bV!==null&&!a.bV.j1&&!b){d=a.bV.hj;e=a.bV.hk;f=a.bV.hl;g=a.ce;b=a.bV.gX;$p=1;continue _;}AGD(a.ce);}return;case 1:UF(g,d,e,f,b);if(C()){break _;}g=a.cG;b=a.bV.gX;$p=2;case 2:US(g,d,e,f,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function XC(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(!b&&a.cK>0)){if(!b)MS(a.ek.hL);a:{if(a.bV!==null){if(a.bV.j1!=1){if(a.bV.j1)break a;c=a.bV.hj;d=a.bV.hk;e=a.bV.hl;f=a.bV.gX;J();g=A39.data;h=a.w;$p=1;continue _;}if(!b){h=a.e;i=a.bV.me;$p=2;continue _;}if(b==1)RB(a.e,a.bV.me);}else if(!b&&!(a.ce instanceof C_))a.cK=10;}if
(b==1){h=DE(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}}return;case 1:$z=X9(h,c,d,e);if(C()){break _;}k=$z;j=g[k];if(!b){h=a.w;k=a.bV.gX;$p=4;continue _;}l=DE(a.e.F);h=a.w;$p=3;continue _;case 2:Y4(h,i);if(C()){break _;}if(b==1)RB(a.e,a.bV.me);if(b==1){h=DE(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}return;case 3:$z=X9(h,c,d,e);if(C()){break _;}k=$z;if(k>0){h=A39.data[k];i=a.w;j=a.e;$p=6;continue _;}if(l===null)return;m=l.m;h=a.e;i=a.w;$p=8;continue _;case 4:Xl(h,c,d,e,k);if(C()){break _;}if
(j===A3$&&a.e.xS<100){if(b==1){h=DE(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}return;}h=a.ce;$p=7;continue _;case 5:b:{$z=WV(h,i,j);if(C()){break _;}i=$z;if(i===h){if(i===null)break b;if(i.m==d)break b;}a.e.F.bb.data[a.e.F.bB]=i;AHK(a.ek.hL);if(!i.m)a.e.F.bb.data[a.e.F.bB]=null;}return;case 6:$z=h.ku(i,c,d,e,j);if(C()){break _;}k=$z;if(k)return;if(l===null)return;m=l.m;h=a.e;i=a.w;$p=8;continue _;case 7:AAr(h,c,d,e);if(C()){break _;}if(b==1){h=DE(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}return;case 8:$z
=AEf(l,h,i,c,d,e,f);if(C()){break _;}c=$z;if(c)MS(a.ek.hL);if(!l.m)a.e.F.bb.data[a.e.F.bB]=null;else if(l.m!=m)AB0(a.ek.hL);if(b==1){h=DE(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ACW(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bV===null)return;b=a.w;c=a.bV.hj;d=a.bV.hk;e=a.bV.hl;$p=1;case 1:$z=X9(b,c,d,e);if(C()){break _;}c=$z;J();if(c==A3_.b)c=A4a.b;if(c==A4b.b)c=A4c.b;if(c==A3$.b)c=A4d.b;ALC(a.e.F,c,a.ce instanceof C_);return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AAX(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AFr(a.mD);if(!a.bm&&a.w!==null){b=a.ce;$p=2;continue _;}c=3553;d=a.bi;b=B(171);$p=1;case 1:$z=ACG(d,b);if(C()){break _;}e=$z;Ce(c,e);if(a.A===null&&a.e!==null&&a.e.bI<=0){b=null;$p=3;continue _;}if(a.A!==null&&!a.A.oi){if(a.A!==null)a.b2=a.bD+10000|0;if(a.A!==null){b=a.A;$p=4;continue _;}if(a.w!==null){a.w.h3=a.r.iX;if(!a.bm){b=a.ek;$p=7;continue _;}if
(!a.bm)GJ(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FL(a)){b=a.w;$p=19;continue _;}if(!a.bm){b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;}if(!a.bm){b=a.cG;$p=21;continue _;}}a.c8=B2();return;}a:while(true){if(!EM()){if(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B1(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B1(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B1(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if
(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fv.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B2(),a.c8),Long_fromInt(200)))continue;c=F3();if(c)Fd(a.e.F,c);b:{if(a.A!==null){if(a.A===null)break b;else
{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm()){$p=8;continue _;}if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()==2&&Cm())break a;}}$p=16;continue _;case 2:AD0(b);if(C()){break _;}c=3553;d=a.bi;b=B(171);$p=1;continue _;case 3:Zp(a,b);if(C()){break _;}if(a.A!==null&&!a.A.oi){if(a.A!==null)a.b2=a.bD+10000|0;if(a.A!==null){b=a.A;$p=4;continue _;}if(a.w!==null){a.w.h3=a.r.iX;if(!a.bm){b=a.ek;$p=7;continue _;}if(!a.bm)GJ(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FL(a)){b=a.w;$p
=19;continue _;}if(!a.bm){b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;}if(!a.bm){b=a.cG;$p=21;continue _;}}a.c8=B2();return;}c:while(true){if(!EM()){if(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B1(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B1(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B1(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_)
{Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fv.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B2(),a.c8),Long_fromInt(200)))continue;c=F3();if(c)Fd(a.e.F,c);d:{if(a.A!==null){if(a.A===null)break d;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm()){$p=8;continue _;}if(!CE()&&
Cm()){c=0;$p=11;continue _;}if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()==2&&Cm())break c;}}$p=16;continue _;case 4:ACj(b);if(C()){break _;}if(a.A!==null)a.A.pT();if(a.w!==null){a.w.h3=a.r.iX;if(!a.bm){b=a.ek;$p=7;continue _;}if(!a.bm)GJ(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FL(a)){b=a.w;$p=19;continue _;}if(!a.bm){b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;}if(!a.bm){b=a.cG;$p=21;continue _;}}a.c8=B2();return;case 5:Vp(b);if(C()){break _;}while(true){while(true){if(!EM()){if(a.cK
>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B1(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B1(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B1(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,
1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fv.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B2(),a.c8),Long_fromInt(200)))continue;else break;}c=F3();if(c)Fd(a.e.F,c);if(a.A!==null){if(a.A===null)continue;else{b=a.A;continue _;}}if(!a.bj&&Cm()){$p=8;continue _;}if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()!=2)continue;if(!Cm())continue;else break;}$p=16;continue _;case 6:AMM(b);if(C())
{break _;}while(true){e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()==a.r.fv.by)DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));while(true){if(!Dt()){if(a.A===null){if(B1(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B1(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B1(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;else break;}if(a.A!==null){b=a.A;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf
?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()!=a.r.fF.by)continue;else{b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}}$p=9;continue _;case 7:ADN(b);if(C()){break _;}if(!a.bm)GJ(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FL(a)){b=a.w;$p=19;continue _;}if(a.bm){if(a.bm){a.c8=B2();return;}b=a.cG;$p=21;continue _;}b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;case 8:AAH(a);if(C()){break _;}while(true){while(true){if(!EM()){if(a.cK>0)a.cK=a.cK-1|0;while(true)
{if(!Dt()){if(a.A===null){if(B1(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B1(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B1(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=
0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fv.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B2(),a.c8),Long_fromInt(200)))continue;else break;}c=F3();if(c)Fd(a.e.F,c);if(a.A!==null){if(a.A===null)continue;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm()){continue _;}if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()!=2)continue;if(!Cm())continue;else break;}$p=16;continue _;case 9:AF1(a);if(C()){break _;}while(true){if(a.ce instanceof C_)
{Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()==a.r.fv.by)DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));while(true){if(!Dt()){if(a.A===null){if(B1(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B1(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B1(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,
Be(),CD());if(!CD())continue;else break;}if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()!=1)continue;else break;}continue _;case 10:Wn(a,c,e);if(C()){break _;}if(a.A!==null)a.b2=a.bD+10000|0;if(a.A!==null){b=a.A;$p=4;continue _;}if(a.w!==null){a.w.h3=a.r.iX;if(!a.bm){b=a.ek;$p=7;continue _;}if(!a.bm)GJ(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FL(a)){b=a.w;$p=19;continue _;}if(!a.bm){b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;}if(!a.bm){b=a.cG;$p=21;continue _;}}a.c8=B2();return;case 11:XC(a,
c);if(C()){break _;}a.b2=a.bD;while(true){if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()==2&&Cm()){$p=16;continue _;}while(true){while(true){if(!EM()){if(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B1(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B1(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B1(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if
(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fv.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B2(),a.c8),Long_fromInt(200)))continue;else break;}c=F3();if(c)Fd(a.e.F,c);if(a.A===null)break;if(a.A===null)continue;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm())break;if(CE())continue;if(!Cm())continue;else
{c=0;continue _;}}$p=8;continue _;case 12:XC(a,c);if(C()){break _;}a.b2=a.bD;if(B1(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}c=0;e=a.A===null&&B1(0)&&a.bj?1:0;$p=10;continue _;case 13:AJP(b);if(C()){break _;}if(!a.bm&&!FL(a)){b=a.w;$p=19;continue _;}if(a.bm){if(a.bm){a.c8=B2();return;}b=a.cG;$p=21;continue _;}b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;case 14:XC(a,c);if(C()){break _;}a.b2=a.bD;while(true){if(CE()==2&&Cm()){$p=16;continue _;}while(true){while(true){if(!EM()){if
(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B1(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B1(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B1(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,
1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fv.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B2(),a.c8),Long_fromInt(200)))continue;else break;}c=F3();if(c)Fd(a.e.F,c);if(a.A===null)break;if(a.A===null)continue;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm())break;if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()!=1)continue;if(!Cm())continue;else{c=1;continue _;}}$p=8;continue _;case 15:XC(a,c);if(C()){break _;}a.b2=a.bD;c=0;e=a.A===
null&&B1(0)&&a.bj?1:0;$p=10;continue _;case 16:ACW(a);if(C()){break _;}while(true){while(true){if(!EM()){if(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B1(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B1(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B1(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:
1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fv.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B2(),a.c8),Long_fromInt(200)))continue;else break;}c=F3();if(c)Fd(a.e.F,c);if(a.A!==null){if(a.A===null)continue;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm()){$p=8;continue _;}if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()==
1&&Cm()){c=1;$p=14;continue _;}if(CE()!=2)continue;if(!Cm())continue;else break;}continue _;case 17:Zp(a,b);if(C()){break _;}while(true){if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()==a.r.fv.by)DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));while(true){if(!Dt()){if(a.A===null){if(B1(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B1(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B1(0)&&a.bj
?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;else break;}if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()!=a.r.eS.by)continue;else{b=En(a.e.F);continue _;}}$p=9;continue _;case 18:AAw(b,c,e,f);if(C()){break _;}if(a.bm){a.c8=B2();return;}b=a.cG;$p=21;continue _;case 19:T0(b);if(C()){break _;}if(a.bm){if(a.bm){a.c8=B2();return;}b=a.cG;$p=21;continue _;}b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;case 20:AKZ(b,
d,c);if(C()){break _;}while(true){e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()==a.r.fv.by)DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));while(true){if(!Dt()){if(a.A===null){if(B1(0)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B1(1)&&(a.bD-a.b2|0)>=a.ba.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B1(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;else break;}if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6))
{a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()!=a.r.fF.by)continue;else{b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;continue _;}}$p=9;continue _;case 21:WC(b);if(C()){break _;}a.c8=B2();return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function FL(a){return 0;}
function AC5(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:Xm(a,c);if(C()){break _;}c=new FN;d=FG(new Df);$p=2;case 2:N5(c,b,d);if(C()){break _;}if(!c.rR){b=B(172);$p=3;continue _;}b=B(173);$p=4;continue _;case 3:ABl(a,c,b);if(C()){break _;}return;case 4:ABl(a,c,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Xm(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=B(3);$p=1;case 1:ABl(a,b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function ABl(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.w!==null){d=a.w;e=a.il;$p=1;continue _;}a.w=b;if(b===null){a.c8=Long_ZERO;return;}b.zS=a.ey;a.e=null;b.bc=a.e;$p=2;continue _;case 1:AEg(d,e);if(C()){break _;}a.w=b;if(b===null){a.c8=Long_ZERO;return;}b.zS=a.ey;a.e=null;b.bc=a.e;$p=2;case 2:AIA(a,c);if(C()){break _;}if(a.e===null){a.e=AWC(a,b,a.jV);c=a.e;$p=3;continue _;}a.e.g9=Sb(a.r);if(a.dB!==null)N8(a.dB,
b);if(a.cG!==null)MA(a.cG,b);b.bc=a.e;$p=4;continue _;case 3:AFX(c);if(C()){break _;}Ok(a.ce,a.e);a.e.g9=Sb(a.r);if(a.dB!==null)N8(a.dB,b);if(a.cG!==null)MA(a.cG,b);b.bc=a.e;$p=4;case 4:ABH(b);if(C()){break _;}if(!b.rR){a.c8=Long_ZERO;return;}c=a.il;$p=5;case 5:AEg(b,c);if(C()){break _;}a.c8=Long_ZERO;return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AIA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AJx(a.il,b);b=a.il;c=B(174);$p=1;case 1:AMj(b,c);if(C()){break _;}d=128;e=289;f=(-128);g=f;while(g<=d){h=a.w.eJ;i=a.w.eI;if(a.w.bc!==null){h=a.w.bc.c|0;i=a.w.bc.d|0;}j=f;if(j<=d){b=a.il;k=0+1|0;l=(0*100|0)/e|0;$p=4;continue _;}g=g+16|0;}b=a.il;c=B(175);$p=2;case 2:AMj(b,
c);if(C()){break _;}l=2000;A4e=1;d=0;if(d>=l){Sk(a.w);A4e=0;return;}b=a.w;m=1;$p=3;case 3:W6(b,m);if(C()){break _;}d=d+1|0;if(d>=l){Sk(a.w);A4e=0;return;}b=a.w;m=1;continue _;case 4:TE(b,l);if(C()){break _;}b=a.w;l=h+g|0;m=64;n=i+j|0;$p=5;case 5:X9(b,l,m,n);if(C()){break _;}b=a.w;$p=6;case 6:$z=ADn(b);if(C()){break _;}l=$z;if(l){b=a.w;continue _;}j=j+16|0;m=k;while(true){if(j<=d){b=a.il;k=m+1|0;l=(m*100|0)/e|0;$p=4;continue _;}g=g+16|0;if(g>d)break;h=a.w.eJ;i=a.w.eI;if(a.w.bc!==null){h=a.w.bc.c|0;i=a.w.bc.d
|0;}j=f;}b=a.il;c=B(175);$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Kq(a){return AF_(a.dB);}
function L7(a){return TY(a.dB);}
function KL(a){var b;b=new Bc;Ba(b);return O(H(H(H(H(b,B(176)),Tv(a.cG)),B(177)),AII(a.w)));}
function AMJ(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.e!==null&&a.w!==null){b=a.e;$p=5;continue _;}b=a.w;$p=1;case 1:AKz(b);if(C()){break _;}a.e=AWC(a,a.w,a.jV);b=a.e;$p=2;case 2:AFX(b);if(C()){break _;}Ok(a.ce,a.e);if(a.w!==null){a.w.bc=a.e;b=a.w;$p=4;continue _;}a.e.g9=Sb(a.r);b=B(178);$p=3;case 3:AIA(a,b);if(C()){break _;}return;case 4:ABH(b);if(C()){break _;}a.e.g9=Sb(a.r);b=B(178);$p=3;continue _;case 5:B4(b);if(C()){break _;}b=a.w;$p=1;continue _;default:
Es();}}CM().s(a,b,$p);}
function VM(){A32=$rt_createLongArray(512);A33=0;}
function Vv(){E.call(this);}
function A4f(){var a=new Vv();AUa(a);return a;}
function AUa(a){return;}
function L2(){var b,c;Y();b=document.pointerLockElement!=null?1:0;c=A3D;A3D=b;if(!c&&b){A3h=0.0;A3i=0.0;}a:{b:{if(A3m){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function AOp(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Y();AIc(A23);b=A21;c=A22;d=A20.width;e=A20.height;b.drawImage(c,0.0,0.0,d,e);f=A20.clientWidth;g=A20.clientHeight;if(!(f==A3j&&g==A3k)){A3j=f;A3k=g;c=A22;h=f;c.width=h;c=A22;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){}else{throw $$e;}}return;case 1:a:{try{AFx(i);if(C())
{break _;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){}else{throw $$e;}}}return;default:Es();}}CM().s(b,c,d,e,f,g,h,i,$p);}
function Pj(){var a=this;E.call(a);a.mZ=null;a.Ce=null;a.CH=null;}
var A4g=null;function A1a(){A1a=Bt(Pj);AZ1();}
function A1v(a,b){var c=new Pj();Ui(c,a,b);return c;}
function Ui(a,b,c){A1a();a.mZ=b;a.Ce=c;}
function AZ1(){var b;A4g=Ck();b=A4g;J();U(b,A4d);U(A4g,A4h);U(A4g,A4i);U(A4g,A4a);U(A4g,A4j);U(A4g,A4k);U(A4g,A4l);U(A4g,A4m);U(A4g,A4c);U(A4g,A4n);U(A4g,A4o);U(A4g,A4p);U(A4g,A4q);U(A4g,A4r);U(A4g,A4s);U(A4g,A4t);U(A4g,A4u);U(A4g,A4v);U(A4g,A4w);U(A4g,A4x);U(A4g,A4y);U(A4g,A4z);U(A4g,A4A);U(A4g,A4B);U(A4g,A4C);U(A4g,A4D);U(A4g,A4E);U(A4g,A4F);Xn(Ds(),A4g.p);}
function Fu(){var a=this;E.call(a);a.Fe=Long_ZERO;a.AN=0;a.Ao=Long_ZERO;a.uH=0;a.lw=null;a.zF=null;a.B5=null;a.uk=0;a.v4=null;}
var A4G=null;var A2p=null;var A4H=Long_ZERO;var A4I=0;function A4J(){var a=new Fu();ACN(a);return a;}
function A1S(a){var b=new Fu();Qu(b,a);return b;}
function A0h(a,b){var c=new Fu();LM(c,a,b);return c;}
function ACN(a){LM(a,null,null);}
function Qu(a,b){LM(a,null,b);}
function LM(a,b,c){var d;a.lw=new E;a.uk=1;a.B5=c;a.v4=b;d=A4H;A4H=Long_add(d,Long_fromInt(1));a.Fe=d;}
function P7(a){var b;b=new Sy;b.xa=a;ARJ(b);}
function EJ(b){if(A2p!==b)A2p=b;A2p.Ao=B2();}
function ALG(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.v4===null)return;b=a.v4;$p=1;case 1:Ue(b);if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function AMU(){return A2p;}
function AST(a,b){a.AN=b;}
function Tz(){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=A2p;c=b.uH+1|0;b.uH=c;if(c<30)return;A2p.uH=0;if(Long_ge(Long_add(b.Ao,Long_fromInt(100)),B2()))return;$p=1;case 1:AGB(b);if(C()){break _;}return;default:Es();}}CM().s(b,c,$p);}
function AGB(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Cy=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EH=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{AUL(b,callback);}catch($e){callback.EH($rt_exception($e));}});}
function AUL(b,c){var d;d=new PR;d.y3=b;d.y2=c;N6(d);}
function AFx(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Cy=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EH=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{AOJ(b,callback);}catch($e){callback.EH($rt_exception($e));}});}
function AOJ(b,c){var d,e;d=A2p;e=new MN;e.t_=d;e.ya=c;e.E4=AA0(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.zF=e;}
function UY(){A4G=A1S(B(179));A2p=A4G;A4H=Long_fromInt(1);A4I=1;}
function Do(){}
function S6(){E.call(this);}
function A4K(){var a=new S6();ATB(a);return a;}
function ATB(a){return;}
function AMN(a,b){b.preventDefault();b.stopPropagation();}
function XV(a,b){AMN(a,b);}
function AZu(a,b){XV(a,b);}
function Ta(){E.call(this);}
function A4L(){var a=new Ta();ARm(a);return a;}
function ARm(a){return;}
function ALV(a,b){var c,d;c=b.button;d=OS();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;EK(KO(),b);b.preventDefault();b.stopPropagation();Kx();}
function ADS(a,b){ALV(a,b);}
function AQe(a,b){ADS(a,b);}
function Tb(){E.call(this);}
function A4M(){var a=new Tb();APV(a);return a;}
function APV(a){return;}
function AKV(a,b){var c,d;c=b.button;d=OS();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;EK(KO(),b);b.preventDefault();b.stopPropagation();}
function VE(a,b){AKV(a,b);}
function AUw(a,b){VE(a,b);}
function S$(){E.call(this);}
function A4N(){var a=new S$();AVq(a);return a;}
function AVq(a){return;}
function AJb(a,b){var c;Y();A3f=b.offsetX;A3g=A20.clientHeight-b.offsetY|0;c=b.movementX;A3h=A3h+c;c= -b.movementY;A3i=A3i+c;b.preventDefault();b.stopPropagation();}
function YU(a,b){AJb(a,b);}
function AMW(a,b){YU(a,b);}
function S_(){E.call(this);}
function A4O(){var a=new S_();AZ7(a);return a;}
function AZ7(a){return;}
function Z9(a,b){Nj().data[PX(NP(b))]=1;EK(Lw(),b);b.preventDefault();b.stopPropagation();Kx();}
function AK3(a,b){Z9(a,b);}
function AUE(a,b){AK3(a,b);}
function S8(){E.call(this);}
function A4P(){var a=new S8();AUU(a);return a;}
function AUU(a){return;}
function Vr(a,b){Nj().data[PX(NP(b))]=0;EK(Lw(),b);b.preventDefault();b.stopPropagation();}
function TS(a,b){Vr(a,b);}
function ATz(a,b){TS(a,b);}
function S9(){E.call(this);}
function A4Q(){var a=new S9();AP7(a);return a;}
function AP7(a){return;}
function AMn(a,b){Y();if(A3l&&(b.repeat?1:0))EK(Lw(),b);b.preventDefault();b.stopPropagation();}
function AFS(a,b){AMn(a,b);}
function AWu(a,b){AFS(a,b);}
function S7(){E.call(this);}
function A4R(){var a=new S7();AT$(a);return a;}
function AT$(a){return;}
function AAI(a,b){EK(KO(),b);b.preventDefault();b.stopPropagation();}
function X$(a,b){AAI(a,b);}
function ANY(a,b){X$(a,b);}
function NL(){E.call(this);}
function A4S(){var a=new NL();ATs(a);return a;}
function ATs(a){return;}
function AAK(a,b){PN(0);}
function AG_(a,b){AAK(a,b);}
function AWX(a,b){AG_(a,b);}
function NK(){E.call(this);}
function A4T(){var a=new NK();AUQ(a);return a;}
function AUQ(a){return;}
function AB3(a,b){PN(1);Kx();}
function AG$(a,b){AB3(a,b);}
function AQ0(a,b){AG$(a,b);}
function LB(){E.call(this);}
var A4U=null;var A30=null;function A4V(){var a=new LB();ZB(a);return a;}
function ZB(a){return;}
function AEK(){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(180);$p=1;case 1:$z=AUA(b);if(C()){break _;}b=$z;if(b===null){A4U=B(163);return A4W;}if(b.Bq)return A4X;if(!b.BC&&b.vo!==null){A30=b.vo;return A4Y;}A4U=b.sA!==null?b.sA:B(181);return A4W;default:Es();}}CM().s(b,$p);}
function AKw(b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=A30;$p=1;case 1:$z=AN7(c,b);if(C()){break _;}b=$z;return b!==A4Z?0:1;default:Es();}}CM().s(b,c,$p);}
function AD_(b){var c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AKw(b);if(C()){break _;}c=$z;if(c)return;c=JT(b,47);if(c>0){d=Gs(b,0,c);$p=3;continue _;}d=A30;c=1;e=new ArrayBuffer(0);$p=2;case 2:AQn(d,b,c,e);if(C()){break _;}return;case 3:AD_(d);if(C()){break _;}d=A30;c=1;e=new ArrayBuffer(0);$p=2;continue _;default:Es();}}CM().s(b,c,d,e,$p);}
function ACP(){A4U=B(3);A30=null;}
function WB(){E.call(this);}
function AQN(){var Context=window.AudioContext||window.webkitAudioContext;return new Context();}
function Q_(){E.call(this);}
var A3Z=null;function A40(){var a=new Q_();AKY(a);return a;}
function AKY(a){return;}
function AGY(b){var c,d,e,f,g,h,i,j,k,l,m;c=QK(b);d=Mx(c);e=$rt_createByteArray(8);Lz(d,e);if(!DU(B(182),AT_(e,T1(B(18))))){c=new BU;Bl(c,B(183));M(c);}FX(d);f=new Ni;d=new SP;g=new QI;Mr(g);g.p_=0;h=O9(g,15,0);if(h){c=new Nm;f=new Bc;Ba(f);Bl(c,O(H(H(Bd(f,h),B(11)),g.bQ)));M(c);}O$(d,c);d.oH=0;d.nh=0;d.A5=1;d.AM=0;d.uo=$rt_createByteArray(1);d.C2=$rt_createByteArray(512);d.gi=g;d.mY=$rt_createByteArray(512);d.A5=1;d.AM=1;ADw(f,d);g=A0T();while(true){d=FX(f);if(!DU(B(184),d)){if(AFu(f)<=0&&DU(B(185),d))return;c
=new BU;Bl(c,B(183));M(c);}i=FX(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);Lz(f,j);l=GS(f);m=$rt_createByteArray(l);Lz(f,m);if(Dv(A3Z,i))continue;a:{Zn(g,m,0,l);AGW(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){l=0;while(l<h){if(b[l]!=e[l]){h=0;break a;}l=l+1|0;}h=1;break a;}}h=0;}}if(!h){c=new BU;f=new Bc;Ba(f);Bl(c,O(H(H(f,B(186)),i)));M(c);}BK(A3Z,i,m);if(!DU(B(187),FX(f)))break;}c=new BU;Bl(c,B(183));M(c);}
function U7(){A3Z=CY();}
function BU(){Bz.call(this);}
function A41(){var a=new BU();AUJ(a);return a;}
function AUJ(a){Q(a);}
function MO(){GC.call(this);}
function A42(){var a=new MO();AWj(a);return a;}
function AWj(a){Ba(a);}
function ACy(a,b,c,d){RQ(a,a.dm,b,c,d);return a;}
function RQ(a,b,c,d,e){var f,g,h,i;CL(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.M.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function AO5(a,b,c,d,e){return RQ(a,b,c,d,e);}
function AU3(a,b){KV(a,b);}
function EN(){}
function Sa(){E.call(this);}
function A43(){var a=new Sa();ARo(a);return a;}
function ARo(a){return;}
function Hk(){E.call(this);this.kN=0;}
var A44=null;var A45=null;function ATy(a){var b=new Hk();Ww(b,a);return b;}
function Ww(a,b){a.kN=b;}
function BC(b){var c;if(b>=A45.data.length)return ATy(b);c=A45.data[b];if(c===null){c=ATy(b);A45.data[b]=c;}return c;}
function AZy(a,b){if(a===b)return 1;return b instanceof Hk&&b.kN==a.kN?1:0;}
function AZn(a){return a.kN;}
function Iz(b){return (b&64512)!=55296?0:1;}
function I3(b){return (b&64512)!=56320?0:1;}
function S2(b){return !Iz(b)&&!I3(b)?0:1;}
function Ky(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IV(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ih(b){return (56320|b&1023)&65535;}
function LX(b){return N$(b)&65535;}
function N$(b){return AKv(b).toLowerCase().charCodeAt(0);}
function N1(b){return AKv(b).toUpperCase().charCodeAt(0);}
function Hy(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function YN(a,b){return a.kN-b.kN|0;}
function AUf(a,b){return YN(a,b);}
function ADQ(){A44=K($rt_charcls());A45=N(Hk,128);}
function Hw(){var a=this;E.call(a);a.cy=null;a.Av=0;}
function AE0(a){return 1;}
function AYj(a,b){return;}
function Q8(){var a=this;Hw.call(a);a.tK=0;a.tM=0;a.tL=0;a.gF=0.0;a.lt=0.0;a.m0=0.0;a.lV=0;a.yg=null;a.yx=null;}
function Ok(a,b){b.q=(-180.0);}
function AY$(a){return;}
function AAU(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cy.w;$p=1;case 1:$z=X9(e,b,c,d);if(C()){break _;}f=$z;e=a.cy.w;$p=2;case 2:$z=Z$(e,b,c,d);if(C()){break _;}g=$z;e=a.cy.cG;$p=3;case 3:Z5(e,b,c,d);if(C()){break _;}e=a.cy.w;J();h=A39.data;$p=4;case 4:$z=X9(e,b,c,d);if(C()){break _;}i=$z;j=h[i];$p=5;case 5:$z=Z$(e,b,c,d);if(C()){break _;}i=$z;k=
0;$p=6;case 6:$z=AJ6(e,b,c,d,k);if(C()){break _;}k=$z;if(j!==null&&k){$p=7;continue _;}e=IS(a.cy.e);if(e!==null){NS(e,f,b,c,d);if(!e.m)H1(a.cy.e);}if(k&&K3(a.cy.e,A39.data[f])){e=A39.data[f];j=a.cy.w;$p=8;continue _;}return k;case 7:j.l7(e,b,c,d,i);if(C()){break _;}e=IS(a.cy.e);if(e!==null){NS(e,f,b,c,d);if(!e.m)H1(a.cy.e);}if(k&&K3(a.cy.e,A39.data[f])){e=A39.data[f];j=a.cy.w;$p=8;continue _;}return k;case 8:e.Ez(j,b,c,d,g);if(C()){break _;}return k;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAr(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cy.w;$p=1;case 1:$z=X9(e,b,c,d);if(C()){break _;}f=$z;if(f>0&&a.gF===0.0){J();e=A39.data[f];g=a.cy.w;h=a.cy.e;$p=3;continue _;}if(f<=0)return;J();e=A39.data[f];g=a.cy.e;$p=2;case 2:$z=WU(e,g);if(C()){break _;}i=$z;if(i<1.0)return;$p=4;continue _;case 3:e.pr(g,b,c,d,h);if(C()){break _;}if(f<=0)return;J();e=A39.data[f];g
=a.cy.e;$p=2;continue _;case 4:AAU(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AGD(a){a.gF=0.0;a.lV=0;}
function UF(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.lV>0)a.lV=a.lV-1|0;else{if(b==a.tK&&c==a.tM&&d==a.tL){f=a.cy.w;$p=1;continue _;}a.gF=0.0;a.lt=0.0;a.m0=0.0;a.tK=b;a.tM=c;a.tL=d;}return;case 1:$z=X9(f,b,c,d);if(C()){break _;}g=$z;if(!g)return;J();f=A39.data[g];h=a.gF;i=a.cy.e;$p=2;case 2:$z=WU(f,i);if(C()){break _;}j=$z;a.gF=h+j;a.m0=a.m0+1.0;if(a.gF<1.0)return;$p
=3;case 3:AAU(a,b,c,d);if(C()){break _;}a.gF=0.0;a.lt=0.0;a.m0=0.0;a.lV=5;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function FU(a,b){var c;if(a.gF<=0.0){a.cy.mD.AS=0.0;a.cy.dB.rV=0.0;}else{c=a.lt+(a.gF-a.lt)*b;a.cy.mD.AS=c;a.cy.dB.rV=c;}}
function ASS(a){return 4.0;}
function AVu(a,b){return;}
function AD0(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lt=a.gF;b=a.yg;c=a.cy.w;$p=1;case 1:Xd(b,c);if(C()){break _;}b=a.yx;c=a.cy.w;$p=2;case 2:Xd(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function PA(){var a=this;E.call(a);a.cI=0.0;a.zA=0.0;a.h7=0;a.cz=0.0;a.zJ=0.0;a.ky=0.0;a.q3=Long_ZERO;a.qa=Long_ZERO;a.mi=0.0;}
function E0(a){var b,c,d,e,f;b=B2();c=Long_sub(b,a.q3);d=Long_div(D7(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.qa));a.mi=a.mi+(e-a.mi)*0.20000000298023224;a.q3=b;a.qa=d;}if(Long_lt(c,Long_ZERO)){a.q3=b;a.qa=d;}f=Long_toNumber(d)/1000.0;e=(f-a.zA)*a.mi;a.zA=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.ky=a.ky+e*a.zJ*a.cI;a.h7=a.ky|0;a.ky=a.ky-a.h7;if(a.h7>10)a.h7=10;a.cz=a.ky;}
function RR(){}
function O7(){var a=this;E.call(a);a.po=null;a.fw=null;a.mG=null;a.mV=Long_ZERO;a.md=0;}
function AJx(a,b){a.md=0;OX(a,b);}
function UB(a,b){a.md=1;OX(a,a.mG);}
function OX(a,b){var c,d,e;a:{if(!a.fw.gN){if(a.md)break a;b=new I8;Q(b);M(b);}a.mG=b;c=EU(a.fw.b5,a.fw.bw);d=c.e_;e=c.e7;DA(256);CU(5889);CT();G7(0.0,d,e,0.0,100.0,300.0);CU(5888);CT();Br(0.0,0.0,(-200.0));}}
function AMj(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fw.gN){if(a.md)return;b=new I8;Q(b);M(b);}a.mV=Long_ZERO;a.po=b;c=(-1);$p=1;case 1:TE(a,c);if(C()){break _;}a.mV=Long_ZERO;return;default:Es();}}CM().s(a,b,c,$p);}
function TE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.fw.gN){if(a.md)break a;c=new I8;Q(c);M(c);}d=B2();if(Long_ge(Long_sub(d,a.mV),Long_fromInt(20))){a.mV=d;c=EU(a.fw.b5,a.fw.bw);e=c.e_;f=c.e7;DA(256);CU(5889);CT();g=e;h=f;G7(0.0,g,h,0.0,100.0,300.0);CU(5888);CT();Br(0.0,
0.0,(-200.0));DA(16640);Bv();i=A35;c=a.fw.bi;j=B(157);$p=1;continue _;}}return;case 1:$z=ACG(c,j);if(C()){break _;}k=$z;Ce(3553,k);Bu(i);Ec(i,4210752);l=f/32.0;F(i,0.0,h,0.0,0.0,l);m=e/32.0;F(i,g,h,0.0,m,l);F(i,g,0.0,0.0,m,0.0);F(i,0.0,0.0,0.0,0.0,0.0);Bn(i);if(b>=0){n=(e/2|0)-50|0;o=(f/2|0)+16|0;X(3553);Bu(i);Ec(i,8421504);g=n;p=o;Bb(i,g,p,0.0);m=o+2|0;Bb(i,g,m,0.0);q=n+100|0;Bb(i,q,m,0.0);Bb(i,q,p,0.0);Ec(i,8454016);Bb(i,g,p,0.0);Bb(i,g,m,0.0);q=n+b|0;Bb(i,q,m,0.0);Bb(i,q,p,0.0);Bn(i);V(3553);}c=a.fw.ey;i
=a.mG;b=(e-Db(a.fw.ey,a.mG)|0)/2|0;r=(f/2|0)-4|0;Cn(c,i,b,r-16|0,16777215);Cn(a.fw.ey,a.po,(e-Db(a.fw.ey,a.po)|0)/2|0,r+8|0,16777215);$p=2;case 2:AOp();if(C()){break _;}try{$p=3;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){}else{throw $$e;}}return;case 3:b:{try{Tz();if(C()){break _;}break b;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){}else{throw $$e;}}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function Pl(){var a=this;E.call(a);a.y=null;a.oU=0;a.kH=0.0;a.hL=null;a.rX=0;a.ov=null;a.kd=null;a.D1=0;a.D0=0;a.op=null;a.db=0.0;a.dz=0.0;a.dp=0.0;a.mS=0.0;a.kU=0.0;}
function ADN(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mS=a.kU;b=a.y.w;c=I(a.y.e.c);d=I(a.y.e.j);e=I(a.y.e.d);$p=1;case 1:$z=AHV(b,c,d,e);if(C()){break _;}f=$z;g=(3-a.y.r.ha|0)/3.0;h=f*(1.0-g)+g;a.kU=a.kU+(h-a.kU)*0.10000000149011612;a.rX=a.rX+1|0;AD9(a.hL);if(a.y.cv)
{b=a.y.e;i=a.y.w;d=I(b.c);j=I(b.j);k=I(b.d);l=4;m=0;n=63;e=S(64,j+4|0);j=S(64,j-4|0);o=64.0999984741211;if(m<50){p=(d+D(a.kd,9)|0)-l|0;q=(k+D(a.kd,9)|0)-l|0;$p=2;continue _;}}return;case 2:$z=X9(i,p,n,q);if(C()){break _;}c=$z;if(e<=0&&j>=0){f=L(a.kd);g=L(a.kd);if(c>0){b=a.y.cG;r=new Ic;s=p+f;J();Qs(r,i,s,o-A39.data[c].cm,q+g);DS(b,r);}}m=m+1|0;if(m>=50)return;p=(d+D(a.kd,9)|0)-l|0;q=(k+D(a.kd,9)|0)-l|0;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function Ls(a,b){var c,d,e,f;c=a.y.e;d=c.bH;e=c.c-c.bH;f=b;return BR(d+e*f,c.ct+(c.j-c.ct)*f,c.bG+(c.d-c.bG)*f);}
function AGH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=c.P+(c.E-c.P)*b;e=c.K+(c.q-c.K)*b;f=Ls(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=Bx(g);i=Bm(g);g= -d*0.01745329238474369;j= -Bx(g);g=Bm(g);k=i*j;l
=h*j;m=4.0;n=k;o=n*m;p=g;q=p*m;r=l;s=C3(f,o,q,r*m);t=a.y;u=a.y.w;$p=1;case 1:$z=AEj(u,f,s);if(C()){break _;}u=$z;t.bV=u;f=Ls(a,b);if(a.y.bV!==null)m=Di(a.y.bV.fR,f);if(a.y.ce instanceof C_)m=32.0;else if(m>3.0)m=3.0;n=n*m;p=p*m;r=r*m;s=C3(f,n,p,r);a.ov=null;t=a.y.w;u=HK(c.G,n,p,r);$p=2;case 2:$z=Zh(t,c,u);if(C()){break _;}t=$z;n=0.0;v=0;while(v<t.p){u=Z(t,v);if(u.kk()){w=NY(Da(u.G,0.10000000149011612,0.10000000149011612,0.10000000149011612),f,s);if(w!==null){p=Di(f,w.fR);if(!(p>=n&&n!==0.0)){a.ov=u;n=p;}}}v
=v+1|0;}if(a.ov!==null&&!(a.y.ce instanceof C_))a.y.bV=ASO(a.ov);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function Zg(a,b){var c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=70.0;e=A46;$p=1;case 1:$z=ABX(c,e);if(C()){break _;}f=$z;if(f)d=60.0;if(c.bI<=0)d=d/((1.0-500.0/(c.cD+b+500.0))*2.0+1.0);return d;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Kf(a,b){var c,d,e;c=a.y.e;d=c.c$-b;if(c.bI<=0)Bq(40.0-8000.0/(c.cD+b+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.Bd;b=Bm(b*b*b*b*3.1415927410125732);e=c.jD;Bq( -e,0.0,1.0,0.0);Bq( -b*14.0,0.0,0.0,1.0);Bq(e,0.0,1.0,0.0);}}
function Hl(a,b){var c,d,e,f,g;if(!a.y.r.cf){c=a.y.e;d=c.gs-c.r4;e=c.gs+d*b;f=c.oX+(c.jR-c.oX)*b;g=c.jU+(c.ip-c.jU)*b;d=e*3.1415927410125732;Br(Bm(d)*f*0.5, -GL(Bx(d)*f),0.0);Bq(Bm(d)*f*3.0,0.0,0.0,1.0);Bq(GL(Bx(d+0.20000000298023224)*f)*5.0,1.0,0.0,0.0);Bq(g,1.0,0.0,0.0);}}
function ADd(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=c.bH;e=c.c-c.bH;f=b;g=d+e*f;h=c.ct+(c.j-c.ct)*f;i=c.bG+(c.d-c.bG)*f;if(!a.y.r.cf)Br(0.0,0.0,(-0.10000000149011612));else{j=4.0;d= -Bm(c.q/180.0*3.1415927410125732)*Bx(c.E
/180.0*3.1415927410125732)*j;e=Bx(c.q/180.0*3.1415927410125732)*Bx(c.E/180.0*3.1415927410125732)*j;f= -Bm(c.E/180.0*3.1415927410125732)*j;k=0;l=g-d;d=h-f;f=i-e;if(k<8){m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.y.w;e=m;q=g+e;r=n;s=h+r;t=o;u=BR(q,s,i+t);v=BR(l+e+t,d+r,f+t);$p=1;continue _;}Br(0.0,0.0, -j);}Bq(c.P+(c.E-c.P)*b,1.0,0.0,0.0);Bq(c.K+(c.q-c.K)*b+180.0,0.0,1.0,0.0);return;case 1:$z=AEj(p,u,v);if(C()){break _;}u
=$z;if(u!==null){q=Di(u.fR,BR(g,h,i));if(q<j)j=q;}k=k+1|0;if(k>=8){Br(0.0,0.0, -j);Bq(c.P+(c.E-c.P)*b,1.0,0.0,0.0);Bq(c.K+(c.q-c.K)*b+180.0,0.0,1.0,0.0);return;}m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.y.w;e=m;q=g+e;r=n;s=h+r;t=o;u=BR(q,s,i+t);v=BR(l+e+t,d+r,f+t);continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AA3(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CT();if(a.y.r.d5)Br(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);BW();Kf(a,b);if(a.y.r.io)Hl(a,b);if(!a.y.r.cf){d=a.hL;$p=1;continue _;}By();if(a.y.r.cf){if(a.y.r.io)Hl(a,b);return;}d=a.hL;$p=2;continue _;case 1:Yv(d,b);if(C()){break _;}By();if(a.y.r.cf){if(a.y.r.io)Hl(a,b);return;}d=a.hL;$p=2;case 2:XL(d,b);if(C()){break _;}Kf(a,b);if(a.y.r.io)Hl(a,b);return;default:Es();}}CM().s(a,
b,c,d,$p);}
function AA9(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.oU&&!L2()){c=a.y;$p=1;continue _;}a.oU=L2();Y();d=A3h;A3h=0.0;e=d|0;d=A3i;A3i=0.0;f=d|0;g=1;if(a.y.r.lM)g=(-1);if(a.y.bj&&a.y.w!==null)Tj(a.y.e,e,Bh(f,g));if(!a.y.hh){c=EU(a.y.b5,a.y.bw);f=c.e_;e=c.e7;h=Bh(A3f,f)/a.y.b5|0;i=(e-(Bh(A3g,e)/a.y.bw|0)|0)-1|0;if(a.y.w!==null){$p=2;continue _;}Ge(0,0,a.y.b5,a.y.bw);Gr(0.0,
0.0,0.0,0.0);DA(16640);CU(5889);CT();CU(5888);CT();JQ(a);if(a.y.A!==null){DA(256);c=a.y.A;$p=3;continue _;}}return;case 1:AF1(c);if(C()){break _;}a.oU=L2();Y();d=A3h;A3h=0.0;e=d|0;d=A3i;A3i=0.0;f=d|0;g=1;if(a.y.r.lM)g=(-1);if(a.y.bj&&a.y.w!==null)Tj(a.y.e,e,Bh(f,g));if(!a.y.hh){c=EU(a.y.b5,a.y.bw);f=c.e_;e=c.e7;h=Bh(A3f,f)/a.y.b5|0;i=(e-(Bh(A3g,e)/a.y.bw|0)|0)-1|0;if(a.y.w!==null){$p=2;continue _;}Ge(0,0,a.y.b5,a.y.bw);Gr(0.0,0.0,0.0,0.0);DA(16640);CU(5889);CT();CU(5888);CT();JQ(a);if(a.y.A!==null){DA(256);c
=a.y.A;$p=3;continue _;}}return;case 2:V2(a,b);if(C()){break _;}c=a.y.mD;g=a.y.A===null?0:1;$p=4;continue _;case 3:c.hE(h,i,b);if(C()){break _;}return;case 4:AKh(c,b,g,h,i);if(C()){break _;}if(a.y.A===null)return;DA(256);c=a.y.A;$p=3;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function V2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AGH(a,b);if(C()){break _;}c=a.y.e;d=a.y.dB;e=a.y.cG;f=c.b6;g=c.c-c.b6;h=b;i=f+g*h;f=c.bP+(c.j-c.bP)*h;g=c.b7+(c.d-c.b7)*h;j=0;if(j>=2){ER(1,1,1,0);return;}if(a.y.r.d5){if(j)ER(1,0,0,0);else ER(0,1,1,0);}Ge(0,0,a.y.b5,a.y.bw);$p=2;case 2:Zw(a,
b);if(C()){break _;}DA(16640);V(2884);a.kH=256>>a.y.r.ha;CU(5889);CT();if(a.y.r.d5)Br( -((j*2|0)-1|0)*0.07000000029802322,0.0,0.0);$p=3;case 3:$z=Zg(a,b);if(C()){break _;}k=$z;AJ7(k,a.y.b5/a.y.bw,0.05000000074505806,a.kH);CU(5888);CT();if(a.y.r.d5)Br(((j*2|0)-1|0)*0.10000000149011612,0.0,0.0);Kf(a,b);if(a.y.r.io)Hl(a,b);$p=4;case 4:ADd(a,b);if(C()){break _;}OZ();if(a.y.r.ha<2){l=(-1);$p=13;continue _;}V(2912);l=1;$p=5;case 5:AMv(a,l);if(C()){break _;}m=A1l();AIV(m,i,f,g);AL1(a.y.dB,m,b);n=a.y.dB;l=0;$p=6;case 6:ADl(n,
c,l);if(C()){break _;}l=0;$p=7;case 7:AMv(a,l);if(C()){break _;}V(2912);l=3553;n=a.y.bi;o=B(171);$p=8;case 8:$z=ACG(n,o);if(C()){break _;}p=$z;Ce(l,p);Dr();RC(d,c,0,h);Go();n=Ls(a,b);$p=9;case 9:Yc(d,n,m,b);if(C()){break _;}$p=10;case 10:Xw(e,c,b);if(C()){break _;}Dr();l=0;$p=11;case 11:AMv(a,l);if(C()){break _;}$p=12;case 12:WS(e,c,b);if(C()){break _;}if(a.y.bV!==null){m=A46;$p=17;continue _;}C0(770,771);l=0;$p=15;continue _;case 13:AMv(a,l);if(C()){break _;}$p=14;case 14:YL(d,b);if(C()){break _;}V(2912);l
=1;$p=5;continue _;case 15:AMv(a,l);if(C()){break _;}V(3042);X(2884);l=3553;m=a.y.bi;n=B(171);$p=16;case 16:$z=ACG(m,n);if(C()){break _;}p=$z;Ce(l,p);RC(d,c,1,h);FB(1);V(2884);X(3042);if(a.y.bV!==null){m=A46;$p=18;continue _;}X(2912);if(a.y.cv){$p=21;continue _;}l=0;$p=24;continue _;case 17:$z=ABX(c,m);if(C()){break _;}l=$z;if(!l){C0(770,771);l=0;$p=15;continue _;}X(3008);m=a.y.bV;l=0;n=DE(c.F);$p=19;continue _;case 18:$z=ABX(c,m);if(C()){break _;}l=$z;if(!l){X(3008);m=a.y.bV;l=0;n=DE(c.F);$p=22;continue _;}X(2912);if
(a.y.cv){$p=21;continue _;}l=0;$p=24;continue _;case 19:AA2(d,c,m,l,n,b);if(C()){break _;}m=a.y.bV;l=0;n=DE(c.F);$p=20;case 20:ABy(d,c,m,l,n,b);if(C()){break _;}V(3008);C0(770,771);l=0;$p=15;continue _;case 21:TO(a,b);if(C()){break _;}l=0;$p=24;continue _;case 22:AA2(d,c,m,l,n,b);if(C()){break _;}n=a.y.bV;l=0;m=DE(c.F);$p=23;case 23:ABy(d,c,n,l,m,b);if(C()){break _;}V(3008);X(2912);if(a.y.cv){$p=21;continue _;}l=0;$p=24;case 24:AMv(a,l);if(C()){break _;}V(2912);$p=25;case 25:UE(d,b);if(C()){break _;}X(2912);l
=1;$p=26;case 26:AMv(a,l);if(C()){break _;}DA(256);$p=27;case 27:AA3(a,b,j);if(C()){break _;}if(!a.y.r.d5)return;j=j+1|0;if(j>=2){ER(1,1,1,0);return;}if(a.y.r.d5){if(j)ER(1,0,0,0);else ER(0,1,1,0);}Ge(0,0,a.y.b5,a.y.bw);$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function TO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=I(c.c);e=I(c.j);f=I(c.d);Bv();g=A35;X(2884);B_(0.0,1.0,0.0);V(3042);C0(770,
771);h=3553;i=a.y.bi;j=B(188);$p=1;case 1:$z=ACG(i,j);if(C()){break _;}k=$z;Ce(h,k);k=d-5|0;d=d+5|0;h=f-5|0;l=f+5|0;m=e-5|0;n=e+5|0;e=S(m,64);o=S(n,64);while(k<=d){p=h;while(p<=l){q=e<0?64:m;r=o<0?64:n;if(q!=r){s=((((a.rX+(k*3121|0)|0)+Bh(p,418711)|0)%32|0)+b)/32.0;t=k+0.5-c.c;u=p+0.5-c.d;v=B7(t*t+u*u)/5.0;BN(1.0,1.0,1.0,(1.0-v*v)*0.699999988079071);Bu(g);u=k+0|0;w=q;x=p+0|0;v=q*2.0/8.0;y=s*2.0;z=v+y;F(g,u,w,x,0.0,z);ba=k+1|0;bb=p+1|0;F(g,ba,w,bb,2.0,z);bc=r;bd=r*2.0/8.0+y;F(g,ba,bc,bb,2.0,bd);F(g,u,bc,x,0.0,
bd);F(g,u,w,bb,0.0,z);F(g,ba,w,x,2.0,z);F(g,ba,bc,x,2.0,bd);F(g,u,bc,bb,0.0,bd);Bn(g);}p=p+1|0;}k=k+1|0;}V(2884);X(3042);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function JQ(a){var b,c,d;b=EU(a.y.b5,a.y.bw);c=b.e_;d=b.e7;DA(256);CU(5889);CT();G7(0.0,c,d,0.0,1000.0,3000.0);CU(5888);CT();Br(0.0,0.0,(-2000.0));}
function Zw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.w;d=a.y.e;e=1.0-AT0(1.0/(4-a.y.r.ha|0),0.25);f=Ms(c,b);g=f.t;h=f.v;i=f.s;j=Y0(c,b);a.db=j.t;a.dz=j.v;a.dp=j.s;a.db=a.db+(g-a.db)*e;a.dz=a.dz+(h-a.dz)*e;a.dp=a.dp+(i-a.dp)*e;c=A46;$p=1;case 1:$z=ABX(d,c);if(C()){break _;}k=$z;if(k){a.db=0.019999999552965164;a.dz
=0.019999999552965164;a.dp=0.20000000298023224;e=a.mS+(a.kU-a.mS)*b;a.db=a.db*e;a.dz=a.dz*e;a.dp=a.dp*e;if(a.y.r.d5){l=(a.db*30.0+a.dz*59.0+a.dp*11.0)/100.0;m=(a.db*30.0+a.dz*70.0)/100.0;n=(a.db*30.0+a.dp*70.0)/100.0;a.db=l;a.dz=m;a.dp=n;}Gr(a.db,a.dz,a.dp,0.0);return;}c=A47;$p=2;case 2:$z=ABX(d,c);if(C()){break _;}k=$z;if(k){a.db=0.6000000238418579;a.dz=0.10000000149011612;a.dp=0.0;}e=a.mS+(a.kU-a.mS)*b;a.db=a.db*e;a.dz=a.dz*e;a.dp=a.dp*e;if(a.y.r.d5){l=(a.db*30.0+a.dz*59.0+a.dp*11.0)/100.0;m=(a.db*30.0+a.dz
*70.0)/100.0;n=(a.db*30.0+a.dp*70.0)/100.0;a.db=l;a.dz=m;a.dp=n;}Gr(a.db,a.dz,a.dp,0.0);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AMv(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=a.db;e=a.dz;f=a.dp;D3(a.op);Cu(Cu(Cu(Cu(a.op,d),e),f),1.0);FC(a.op);g=a.op;BO();A48=HU(g);A49=HU(g);A4$=HU(g);A4_=HU(g);B_(0.0,(-1.0),0.0);BN(1.0,1.0,1.0,1.0);g=A46;$p=1;case 1:$z=ABX(c,g);if(C()){break _;}h=$z;if(h){Kl(2917,2048);FR(2914,0.10000000149011612);V(2903);return;}g=A47;$p=2;case 2:$z=ABX(c,g);if(C()){break _;}h
=$z;if(h){Kl(2917,2048);FR(2914,2.0);}else{Kl(2917,9729);FR(2915,a.kH*0.25);FR(2916,a.kH);if(b<0){FR(2915,0.0);FR(2916,a.kH*0.800000011920929);}}V(2903);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function DO(){E.call(this);this.vr=0.0;}
function KD(){var a=this;DO.call(a);a.hZ=null;a.j4=null;a.nO=null;a.dv=null;a.dh=null;a.h_=null;a.gw=null;}
function AZw(){var a=new KD();I5(a);return a;}
function Tr(a){var b=new KD();ADL(b,a);return b;}
function A5a(a,b){var c=new KD();ALN(c,a,b);return c;}
function I5(a){ADL(a,0.0);}
function ADL(a,b){ALN(a,b,0.0);}
function ALN(a,b,c){var d,e;a.hZ=BF(0,0);BA(a.hZ,(-4.0),(-8.0),(-4.0),8,8,8,b);d=a.hZ;e=0.0+c;BD(d,0.0,e,0.0);a.j4=BF(32,0);BA(a.j4,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BD(a.j4,0.0,e,0.0);a.nO=BF(16,16);BA(a.nO,(-4.0),0.0,(-2.0),8,12,4,b);BD(a.nO,0.0,e,0.0);a.dv=BF(40,16);BA(a.dv,(-3.0),(-2.0),(-2.0),4,12,4,b);d=a.dv;e=2.0+c;BD(d,(-5.0),e,0.0);a.dh=BF(40,16);a.dh.ks=1;BA(a.dh,(-1.0),(-2.0),(-2.0),4,12,4,b);BD(a.dh,5.0,e,0.0);a.h_=BF(0,16);BA(a.h_,(-2.0),0.0,(-2.0),4,12,4,b);d=a.h_;c=12.0+c;BD(d,(-2.0),c,0.0);a.gw
=BF(0,16);a.gw.ks=1;BA(a.gw,(-2.0),0.0,(-2.0),4,12,4,b);BD(a.gw,2.0,c,0.0);}
function AY8(a,b,c,d,e,f,g){a.mX(b,c,d,e,f,g);B3(a.hZ,g);B3(a.nO,g);B3(a.dv,g);B3(a.dh,g);B3(a.h_,g);B3(a.gw,g);B3(a.j4,g);}
function ADO(a,b,c,d,e,f,g){var h;a.hZ.bL=e/57.2957763671875;a.hZ.bM=f/57.2957763671875;a.j4.bL=a.hZ.bL;a.j4.bM=a.hZ.bM;h=a.dv;e=b*0.6661999821662903;f=e+3.1415927410125732;h.bM=Bx(f)*2.0*c;a.dv.bJ=(Bx(b*0.23119999468326569)+1.0)*1.0*c;a.dh.bM=Bx(e)*2.0*c;a.dh.bJ=(Bx(b*0.28119999170303345)-1.0)*1.0*c;a.h_.bM=Bx(e)*1.399999976158142*c;a.gw.bM=Bx(f)*1.399999976158142*c;h=a.dv;c=h.bJ;b=d*0.09000000357627869;h.bJ=c+Bx(b)*0.05000000074505806+0.05000000074505806;h=a.dh;h.bJ=h.bJ-(Bx(b)*0.05000000074505806+0.05000000074505806);h
=a.dv;b=h.bM;c=d*0.06700000166893005;h.bM=b+Bm(c)*0.05000000074505806;h=a.dh;h.bM=h.bM-Bm(c)*0.05000000074505806;}
function DZ(){var a=this;E.call(a);a.c9=null;a.EG=0;a.lk=0;a.DL=0;a.uF=0;}
function A5b(a){var b=new DZ();Gu(b,a);return b;}
function Gu(a,b){a.c9=$rt_createByteArray(1024);a.lk=0;a.DL=0;a.uF=1;a.EG=b;}
function Wz(){var a=this;DZ.call(a);a.n4=null;a.rF=null;a.mC=null;a.p6=null;a.u$=0;}
function A0w(){var a=new Wz();AZB(a);return a;}
function AZB(a){J();Gu(a,A5c.W);a.n4=$rt_createFloatArray(256);a.rF=$rt_createFloatArray(256);a.mC=$rt_createFloatArray(256);a.p6=$rt_createFloatArray(256);a.u$=0;}
function AQV(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;a.u$=a.u$+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=b-1|0;while(e<=(b+1|0)){f=e&15;g=c&15;d=d+a.n4.data[f+(g*16|0)|0];e=e+1|0;}h=a.rF.data;i=b+(c*16|0)|0;h[i]=d/3.299999952316284+a.mC.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}c=0;while(c<16){j=0;while(j<16){k=a.mC.data;b=c+(j*16|0)|0;k[b]=k[b]+a.p6.data[b]*0.05000000074505806;if(a.mC.data[b]<0.0)a.mC.data[b]=0.0;k=a.p6.data;k[b]=k[b]-0.10000000149011612;if(BI()<0.05)a.p6.data[b]=0.5;j=j+1|0;}c=c+1|0;}k=a.rF;a.rF
=a.n4;a.n4=k;c=0;while(c<256){d=a.n4.data[c];if(d>1.0)d=1.0;if(d<0.0)d=0.0;l=d*d;i=32.0+l*32.0|0;m=50.0+l*64.0|0;n=255;o=146.0+l*50.0|0;if(a.lk){b=i*30|0;i=((b+(m*59|0)|0)+2805|0)/100|0;m=(b+(m*70|0)|0)/100|0;n=(b+17850|0)/100|0;}k=a.c9.data;j=c*4|0;k[j+0|0]=i<<24>>24;a.c9.data[j+1|0]=m<<24>>24;a.c9.data[j+2|0]=n<<24>>24;a.c9.data[j+3|0]=o<<24>>24;c=c+1|0;}}
function AFv(){var a=this;DZ.call(a);a.oj=null;a.pc=null;a.iz=null;a.qN=null;}
function A0U(){var a=new AFv();AS6(a);return a;}
function AS6(a){J();Gu(a,A5d.W);a.oj=$rt_createFloatArray(256);a.pc=$rt_createFloatArray(256);a.iz=$rt_createFloatArray(256);a.qN=$rt_createFloatArray(256);}
function AQ6(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bm(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bm(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){h=(g+e|0)&15;j=(i+f|0)&15;d=d+a.oj.data[h+(j*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.pc.data;l=b+(c*16|0)|0;d=d/10.0;m=a.iz.data;e=(b+0|0)&15;n=((c+0|0)&15)*16|0;o=m[e+n|0];m=a.iz.data;h=h&15;o=o+m[h+n|0];m=a.iz.data;c=c+1|0;n=(c&15)*16|0;k[l]=d+(o+m[h+n
|0]+a.iz.data[e+n|0])/4.0*0.800000011920929;m=a.iz.data;m[l]=m[l]+a.qN.data[l]*0.009999999776482582;if(a.iz.data[l]<0.0)a.iz.data[l]=0.0;m=a.qN.data;m[l]=m[l]-0.05999999865889549;if(BI()<0.005)a.qN.data[l]=1.5;}b=b+1|0;}m=a.pc;a.pc=a.oj;a.oj=m;n=0;while(n<256){d=a.oj.data[n]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;h=d*100.0+155.0|0;o=d*d;j=o*255.0|0;l=o*d*d*128.0|0;if(a.lk){e=h*30|0;h=((e+(j*59|0)|0)+(l*11|0)|0)/100|0;j=(e+(j*70|0)|0)/100|0;l=(e+(l*70|0)|0)/100|0;}m=a.c9.data;b=n*4|0;m[b+0|0]=h<<24>>24;a.c9.data[b
+1|0]=j<<24>>24;a.c9.data[b+2|0]=l<<24>>24;a.c9.data[b+3|0]=(-1);n=n+1|0;}}
function Ke(){E.call(this);}
var A5e=null;var A5f=null;function A5g(){var a=new Ke();ARE(a);return a;}
function ARE(a){return;}
function Ds(){if(A5e===null)A5e=AQ1(new Tc,0);return A5e;}
function CK(){if(A5f===null)A5f=AQ1(new M9,0);return A5f;}
function De(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AJR(b)&&(e+f|0)<=AJR(d)){a:{b:{if(b!==d){g=IZ(C4(b));h=IZ(C4(d));if(g!==null&&h!==null){if(g===h)break b;if(!E$(g)&&!E$(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!QT(h,l[k])){Ry(b,c,d,e,j);b=new Ii;Q(b);M(b);}j=j+1|0;k=m;}Ry(b,c,d,e,f);return;}if(!E$(g))break a;if(E$(h))break b;else break a;}b=new Ii;Q(b);M(b);}}Ry(b,c,d,e,f);return;}b=new Ii;Q(b);M(b);}b=new BT;Q(b);M(b);}d=new El;Bl(d,B(189));M(d);}
function Ry(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function B2(){return Long_fromNumber(new Date().getTime());}
function D7(){return Long_fromNumber(performance.now()*1000000.0);}
function R8(){Fu.call(this);this.vO=null;}
function A5h(a,b){var c=new R8();AJG(c,a,b);return c;}
function AJG(a,b,c){Qu(a,c);a.vO=b;a.AN=1;P7(a);}
function AEW(a){var b,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(a.vO.gN){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){}else{throw $$e;}}}return;case 1:a:{try{AFx(b);if(C()){break _;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){}else{throw $$e;}}}while(a.vO.gN){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){}else{throw $$e;}}}return;default:Es();}}CM().s(a,
b,$p);}
function Pr(){}
function G3(){}
function Ft(){E.call(this);}
function Nd(a){return a.gM?0:1;}
function Ob(a,b){var c,d;c=a.jS();a:{while(c.oJ()){b:{d=c.lx();if(d!==null){if(!d.dQ(b))break b;else break a;}if(b===null)break a;}}return 0;}return 1;}
function WM(a){var b,c,d,e,f;b=N(E,Hn(a));c=b.data;d=0;e=Me(a);while(Fi(e)){f=d+1|0;c[d]=JC(e);d=f;}return b;}
function AFN(a,b){var c,d,e,f,g;c=b.data;d=a.p;e=c.length;if(e<d)b=Z8(IZ(C4(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Ng(a);while(RV(f)){c=b.data;g=e+1|0;c[e]=SN(f);e=g;}return b;}
function Dq(a,b){var c,d;c=0;d=b.jS();while(d.oJ()){if(!a.q4(d.lx()))continue;c=1;}return c;}
function Fm(a,b){var c,d;c=0;d=Ng(a);while(RV(d)){if(b.pR(SN(d))){AGZ(d);c=1;}}return c;}
function Iu(){}
function Fn(){Ft.call(this);this.d8=0;}
function EK(a,b){AAc(a,a.gM,b);return 1;}
function Ng(a){var b;b=new Qc;b.j5=a;b.vP=b.j5.d8;b.qG=b.j5.p;b.l0=(-1);return b;}
function WQ(a,b){var c,d,e;c=a.p;d=0;a:{while(d<c){b:{e=Z(a,d);if(b!==null){if(!b.dQ(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function Kz(){Fn.call(this);}
function AAc(a,b,c){if(b>=0){W8(Sq(a,b),c);return;}c=new BT;Q(c);M(c);}
function P6(a,b){var c,d;if(b>=0){c=Sq(a,b);d=FJ(c);ACs(c);return d;}c=new BT;Q(c);M(c);}
function AN8(a){return H5(a);}
function Mi(){}
function Th(){}
function Z6(){var a=this;Kz.call(a);a.n$=null;a.oK=null;a.gM=0;}
function N2(){var a=new Z6();AT3(a);return a;}
function AT3(a){return;}
function AYp(a){return a.gM;}
function Md(a){a.n$=null;a.oK=null;a.gM=0;a.d8=a.d8+1|0;}
function H5(a){return AEv(a,a.n$,null,0);}
function Sq(a,b){var c,d,e;if(b<0){c=new BT;Q(c);M(c);}if(b<=(a.gM/2|0)){d=a.n$;e=0;while(e<b){d=d.gI;e=e+1|0;}return AEv(a,d,d===null?null:d.hA,b);}if(b>a.gM){c=new BT;Q(c);M(c);}c=a.oK;e=b;while(e<a.gM){c=c.hA;e=e+1|0;}return AEv(a,c===null?null:c.gI,c,b);}
function AIK(){E.call(this);}
function Fg(){E.call(this);}
function Xi(){Fg.call(this);}
function AFz(){Fg.call(this);}
function HJ(){}
function Ev(){Ft.call(this);}
function EI(a,b){var c,d;c=0;if(Hn(a)>=b.kI()){d=b.jS();while(d.oJ()){if(!Jh(a,d.lx()))continue;c=1;}}else{d=Me(a);while(Fi(d)){if(b.pR(JC(d))){c=1;Zl(d);}}}return c;}
function AV5(a,b){var c,d;if(a===b)return 1;if(!Pq(b,HJ))return 0;c=b;if(Hn(a)!=Hn(c))return 0;d=Me(c);while(Fi(d)){if(SA(a,JC(d)))continue;else return 0;}return 1;}
function AM8(a){var b,c,d,e,f,g;b=WM(a);if(b===null)c=0;else{c=(-1515898884);d=0;while(true){e=b.data;if(d>=e.length)break;f=e[d];g=(f!==null?f.eK():0)^528111840;c=Q3(g,4)^(g>>>7|g<<25)^Q3(c,13);d=d+1|0;}}return c;}
function E1(){}
function AKO(){Ev.call(this);this.kS=null;}
function Fh(){var a=new AKO();ASK(a);return a;}
function ASK(a){a.kS=CY();}
function Tg(a,b){return BK(a.kS,b,a)!==null?0:1;}
function SA(a,b){return Dv(a.kS,b);}
function Me(a){return Yr(AE9(a.kS));}
function Jh(a,b){return Oc(a.kS,b)===null?0:1;}
function Hn(a){return a.kS.ft;}
function J5(){}
function E8(){var a=this;E.call(a);a.uE=null;a.uN=null;}
function XP(){var a=this;E8.call(a);a.ft=0;a.cp=null;a.go=0;a.By=0.0;a.sF=0;}
function CY(){var a=new XP();AOM(a);return a;}
function AV$(a,b){return N(Hg,b);}
function AOM(a){var b;b=ACb(16);a.ft=0;a.cp=N(Hg,b);a.By=0.75;OT(a);}
function ACb(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Rm(a){var b;if(a.ft>0){a.ft=0;b=a.cp;Vu(b,0,b.data.length,null);a.go=a.go+1|0;}}
function OT(a){a.sF=a.cp.data.length*a.By|0;}
function Dv(a,b){return RU(a,b)===null?0:1;}
function ZH(a,b){var c,d,e;a:{if(b===null){c=0;b:while(true){if(c>=a.cp.data.length)break a;d=a.cp.data[c];while(d!==null){if(d.et===null)break b;d=d.d7;}c=c+1|0;}return 1;}c=0;c:while(true){if(c>=a.cp.data.length)break a;d=a.cp.data[c];while(d!==null){e=d.et;if(b!==e&&!b.dQ(e)?0:1)break c;d=d.d7;}c=c+1|0;}return 1;}return 0;}
function Cz(a,b){var c;c=RU(a,b);if(c===null)return null;return c.et;}
function RU(a,b){var c,d;if(b===null)c=NX(a);else{d=b.eK();c=Nn(a,b,d&(a.cp.data.length-1|0),d);}return c;}
function Nn(a,b,c,d){var e;e=a.cp.data[c];while(e!==null&&!(e.ol==d&&AD3(b,e.fA))){e=e.d7;}return e;}
function NX(a){var b;b=a.cp.data[0];while(b!==null&&b.fA!==null){b=b.d7;}return b;}
function AE9(a){var b;if(a.uE===null){b=new M6;b.zl=a;a.uE=b;}return a.uE;}
function Oj(a,b,c){return BK(a,b,c);}
function BK(a,b,c){var d,e,f,g;if(b===null){d=NX(a);if(d===null){a.go=a.go+1|0;d=OQ(a,null,0,0);e=a.ft+1|0;a.ft=e;if(e>a.sF)Su(a);}}else{e=b.eK();f=e&(a.cp.data.length-1|0);d=Nn(a,b,f,e);if(d===null){a.go=a.go+1|0;d=OQ(a,b,f,e);e=a.ft+1|0;a.ft=e;if(e>a.sF)Su(a);}}g=d.et;d.et=c;return g;}
function OQ(a,b,c,d){var e,f;e=new Hg;f=null;e.fA=b;e.et=f;e.ol=d;e.d7=a.cp.data[c];a.cp.data[c]=e;return e;}
function AGs(a,b){var c,d,e,f,g,h,i;c=ACb(!b?1:b<<1);d=N(Hg,c);e=d.data;f=0;c=c-1|0;while(f<a.cp.data.length){g=a.cp.data[f];a.cp.data[f]=null;while(g!==null){h=g.ol&c;i=g.d7;g.d7=e[h];e[h]=g;g=i;}f=f+1|0;}a.cp=d;OT(a);}
function Su(a){AGs(a,a.cp.data.length);}
function Oc(a,b){var c;c=ZP(a,b);if(c===null)return null;return c.et;}
function ZP(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cp.data[0];while(e!==null){if(e.fA===null)break a;f=e.d7;d=e;e=f;}}else{g=b.eK();c=g&(a.cp.data.length-1|0);e=a.cp.data[c];while(e!==null&&!(e.ol==g&&AD3(b,e.fA))){f=e.d7;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.d7=e.d7;else a.cp.data[c]=e.d7;a.go=a.go+1|0;a.ft=a.ft-1|0;return e;}
function AVa(a){return a.ft;}
function G_(a){var b;if(a.uN===null){b=new M7;b.t1=a;a.uN=b;}return a.uN;}
function AD3(b,c){return b!==c&&!b.dQ(c)?0:1;}
function AE$(){Fg.call(this);}
function UN(){E.call(this);}
function A5i(){var a=new UN();ASc(a);return a;}
function ASc(a){return;}
function AUA(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Cy=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EH=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A11(b,callback);}catch($e){callback.EH($rt_exception($e));}});}
function A11(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){Cx(c,PL(0,0,B(190),null));return;}e=d.open($rt_ustr(b),1);b=new Qn;b.xW=c;b=Cj(b,"handleEvent");e.onBlocked=b;b=new Qm;b.AX=c;b.Bb=e;b=Cj(b,"handleEvent");e.onsuccess=b;b=new Ql;b.Ad=c;b=Cj(b,"handleEvent");e.onerror=b;b=new Qk;b.yo=e;b=Cj(b,"handleEvent");e.onupgradeneeded=b;}
function AVM(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Cy=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EH=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A0c(b,c,callback);}catch($e){callback.EH($rt_exception($e));}});}
function A0c(b,c,d){var e;b=b.transaction("filesystem","readwrite").objectStore("filesystem");c=Nb($rt_ustr(c));e=b.delete(c);b=new Qj;b.zz=d;b=Cj(b,"handleEvent");e.onsuccess=b;b=new Qg;b.z0=d;b=Cj(b,"handleEvent");e.onerror=b;}
function AZ5(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Cy=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EH=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A03(b,c,callback);}catch($e){callback.EH($rt_exception($e));}});}
function A03(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=Nb($rt_ustr(c));e=b.get(c);b=new Qf;b.xH=d;b.uU=e;b=Cj(b,"handleEvent");e.onsuccess=b;b=new Qe;b.AP=d;b=Cj(b,"handleEvent");e.onerror=b;}
function AVI(b,c,d,e,f){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Cy=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EH=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A1H(b,c,d,e,f,callback);}
catch($e){callback.EH($rt_exception($e));}});}
function A1H(b,c,d,e,f,g){var h,i;h=(b.transaction("filesystem","readonly").objectStore("filesystem")).openCursor();i=$rt_createIntArray(1);b=new Os;b.Be=h;b.AU=g;b.ws=i;b.tu=c;b.yk=e;b.zT=d;b.uY=f;b=Cj(b,"handleEvent");h.onsuccess=b;b=new Ot;b.Ap=g;b.uu=i;b=Cj(b,"handleEvent");h.onerror=b;}
function AN7(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Cy=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EH=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A2k(b,c,callback);}catch($e){callback.EH($rt_exception($e));}});}
function A2k(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=Nb($rt_ustr(c));e=b.get(c);b=new Op;b.zE=d;b.s1=e;b=Cj(b,"handleEvent");e.onsuccess=b;b=new Oq;b.AO=d;b=Cj(b,"handleEvent");e.onerror=b;}
function AQn(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Cy=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EH=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A08(b,c,d,e,callback);}catch($e)
{callback.EH($rt_exception($e));}});}
function A08(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(B2(),new Long(596067632, 383)).lo;c=AVZ($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Or;c.yu=f;b=Cj(c,"handleEvent");h.onsuccess=b;b=new Ov;b.yL=f;b=Cj(b,"handleEvent");h.onerror=b;}
function AXY(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function QS(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function ASr(b){return typeof b==='undefined'? -1:typeof b.lastModified==='undefined'? -1:b.lastModified;}
function Nb(b){return [b];}
function ARO(b){return typeof b==="string"?b:typeof b==="undefined"?null:typeof b[0]==="string"?b[0]:null;}
function AVZ(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AAp(){var a=this;E.call(a);a.BC=0;a.Bq=0;a.sA=null;a.vo=null;}
function PL(a,b,c,d){var e=new AAp();AP1(e,a,b,c,d);return e;}
function AP1(a,b,c,d,e){a.BC=b;a.Bq=c;a.sA=d;a.vo=e;}
function Ef(){var a=this;E.call(a);a.Dw=null;a.rq=0;}
function A5j(a,b){var c=new Ef();E3(c,a,b);return c;}
function E3(a,b,c){a.Dw=b;a.rq=c;}
function ASs(a){return a.rq;}
function ANs(a,b){return a!==b?0:1;}
function AQw(a){return KM(a);}
function Ij(a){var b;b=C4(a);if(!N_(H8(b),K(Ef)))b=H8(b);return b;}
function TH(a,b){var c,d;if(Ij(b)===Ij(a))return S(a.rq,b.rq);c=new Cq;d=new Bc;Ba(d);Bl(c,O(H(H(H(H(d,B(191)),Hf(Ij(a))),B(192)),Hf(Ij(b)))));M(c);}
function AP_(a,b){return TH(a,b);}
function Eq(){Ef.call(this);}
var A4Y=null;var A4X=null;var A4W=null;var A5k=null;function ACu(){var b,c,d;b=new Eq;E3(b,B(193),0);A4Y=b;b=new Eq;E3(b,B(194),1);A4X=b;b=new Eq;E3(b,B(195),2);A4W=b;c=N(Eq,3);d=c.data;d[0]=A4Y;d[1]=A4X;d[2]=A4W;A5k=c;}
function NG(){}
function Rl(){E.call(this);this.v5=null;}
function A0I(b){var c;c=new Rl;c.v5=b;return c;}
function Cx(a,b){a.v5.Cy(b);}
function ATp(a,b){a.v5.EH(b);}
function AK6(){E.call(this);}
function Tn(){}
function S5(){var a=this;E.call(a);a.te=null;a.xt=null;}
function ALz(a){var b,c,d;if(a.te.readyState==4){b=new Uint8Array(a.te.response);c=$rt_createByteArray(b.byteLength);Y();A25=c;d=0;while(d<Sd().data.length){Sd().data[d]=b[d]<<24>>24;d=d+1|0;}Cx(a.xt,B(196));}}
function ATm(a){ALz(a);}
function GN(){E.call(this);}
function AKJ(){var a=this;GN.call(a);a.uL=null;a.jk=0;a.Cj=0;a.o9=0;}
function QK(a){var b=new AKJ();ANO(b,a);return b;}
function ANO(a,b){var c;c=b.data.length;a.uL=b;a.jk=0;a.Cj=0;a.o9=0+c|0;}
function AU_(a){var b,c,d;if(a.jk>=a.o9)b=(-1);else{c=a.uL.data;d=a.jk;a.jk=d+1|0;b=c[d]&255;}return b;}
function AZN(a,b,c,d){var e,f,g,h,i;e=CR(d,a.o9-a.jk|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.uL.data;i=a.jk;a.jk=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function AVJ(a){return a.o9-a.jk|0;}
function Hs(){GN.call(this);this.jn=null;}
function A5l(a){var b=new Hs();O$(b,a);return b;}
function O$(a,b){a.jn=b;}
function AFu(a){return a.jn.uD();}
function MT(){}
function Ni(){Hs.call(this);this.dD=null;}
function Mx(a){var b=new Ni();ADw(b,a);return b;}
function ADw(a,b){O$(a,b);a.dD=$rt_createByteArray(8);}
function Lz(a,b){var c;c=b.data;return a.jn.mR(b,0,c.length);}
function LI(a){var b,c;b=a.jn.zk();if(b>=0)return b<<24>>24;c=new ES;Q(c);M(c);}
function Ix(a,b){var c,d;c=0;while(c<b){d=a.jn.mR(a.dD,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function AJV(a){return $rt_longBitsToDouble(P5(a));}
function WG(a){return $rt_intBitsToFloat(GS(a));}
function AHw(a,b){NW(a,b,0,b.data.length);}
function NW(a,b,c,d){var e,f;if(d<0){e=new BT;Q(e);M(e);}if(!d)return;if(a.jn===null){e=new El;Q(e);M(e);}if(b===null){e=new El;Q(e);M(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.jn.mR(b,c,d);if(f<0){e=new ES;Q(e);M(e);}c=c+f|0;d=d-f|0;}return;}e=new BT;Q(e);M(e);}
function GS(a){var b;if(Ix(a,4)<0){b=new ES;Q(b);M(b);}return (a.dD.data[0]&255)<<24|(a.dD.data[1]&255)<<16|(a.dD.data[2]&255)<<8|a.dD.data[3]&255;}
function P5(a){var b;if(Ix(a,8)<0){b=new ES;Q(b);M(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.dD.data[0]&255)<<24|(a.dD.data[1]&255)<<16|(a.dD.data[2]&255)<<8|a.dD.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.dD.data[4]&255)<<24|(a.dD.data[5]&255)<<16|(a.dD.data[6]&255)<<8|a.dD.data[7]&255),new Long(4294967295, 0)));}
function TG(a){var b;if(Ix(a,2)<0){b=new ES;Q(b);M(b);}return ((a.dD.data[0]&255)<<24>>16|a.dD.data[1]&255)<<16>>16;}
function AKc(a){var b;if(Ix(a,2)<0){b=new ES;Q(b);M(b);}return ((a.dD.data[0]&255)<<8|a.dD.data[1]&255)&65535;}
function FX(a){return AGo(a,AKc(a));}
function AGo(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);NW(a,c,0,b);return APO(c,d,0,b);}
function APO(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Gn;Bl(m,B(197));M(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Gn;Bl(m,B(198));M(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Gn;Bl(m,B(198));M(m);}f=j+1|0;if(f>=e){m=new Gn;Bl(m,B(198));M(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return Vy(c,0,g);}m=new Gn;Bl(m,B(198));M(m);}
function KR(){var a=this;E.call(a);a.ud=null;a.DV=null;}
function O4(b){var c,d;if(IR(b))M(AGe(b));if(!AKn(Cr(b,0)))M(AGe(b));c=1;while(c<BE(b)){a:{d=Cr(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AKn(d))break a;else M(AGe(b));}}c=c+1|0;}}
function AKn(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function T1(b){var c;if(b===null){b=new Cq;Bl(b,B(199));M(b);}O4(b);c=Cz(A5m,AIT(b));if(c!==null)return c;c=new Rr;Q(c);c.Ei=b;M(c);}
function AIC(a,b){var c,d,$$je;a:{try{b=AEH(Ze(ALm(AAS(a),A5n),A5n),b);}catch($$e){$$je=Bf($$e);if($$je instanceof F1){c=$$je;break a;}else{throw $$e;}}return b;}d=new S0;d.m4=1;d.p8=1;d.tn=B(200);d.iF=c;M(d);}
function W_(a,b){return AEz(a.ud,b.ud);}
function AWt(a,b){return W_(a,b);}
function SP(){var a=this;Hs.call(a);a.gi=null;a.mY=null;a.oH=0;a.nh=0;a.A5=0;a.AM=0;a.uo=null;a.C2=null;}
function AM7(a){var b;if(a.oH){b=new BU;Bl(b,B(201));M(b);}return AGL(a,a.uo,0,1)==(-1)?(-1):a.uo.data[0]&255;}
function AGL(a,b,c,d){var e,f,g;if(a.oH){e=new BU;Bl(e,B(201));M(e);}if(b===null){e=new El;Q(e);M(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.nh)return (-1);f=0;Wo(a.gi,b,c,d);a:{while(!a.nh){if(!a.gi.J)WY(a);b:{g=ABm(a.gi,0);f=f+(a.gi.of-c|0)|0;c=a.gi.of;switch(g){case -3:e=new BU;Bl(e,a.gi.bQ);M(e);case 1:case 2:break;default:break b;}a.nh=1;if(g==2)return (-1);}if(!a.gi.hn)break a;}}return f;}e=new BT;Q(e);M(e);}
function ASb(a){var b;if(!a.oH){if(!a.nh)return 1;return 0;}b=new BU;Bl(b,B(201));M(b);}
function WY(a){var b,c;if(a.oH){b=new BU;Bl(b,B(201));M(b);}a:{c=a.jn.mR(a.mY,0,a.mY.data.length);if(c==(-1)){if(a.gi.iA.du)break a;if(Ud(a.gi))break a;a.mY.data[0]=0;c=1;}AE5(a.gi,a.mY,0,c,1);return;}if(Long_ne(a.gi.iA.p$,Long_fromInt(-1))){b=new BU;Bl(b,B(202));M(b);}b=new ES;Bl(b,B(203));M(b);}
function K4(){var a=this;E.call(a);a.hi=null;a.ix=0;a.l4=Long_ZERO;}
function HI(a,b){var c,d;c=a.hi.data;d=a.ix;a.ix=d+1|0;c[d]=b;if(a.ix==a.hi.data.length){PY(a,a.hi,0);a.ix=0;}a.l4=Long_add(a.l4,Long_fromInt(1));}
function Zn(a,b,c,d){a:{while(a.ix){if(d<=0)break a;HI(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.hi.data.length){PY(a,b,c);c=c+a.hi.data.length|0;d=d-a.hi.data.length|0;a.l4=Long_add(a.l4,Long_fromInt(a.hi.data.length));}while(d>0){HI(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function AJT(a){var b;b=Long_shl(a.l4,3);HI(a,(-128));while(a.ix){HI(a,0);}AFR(a,b);KF(a);}
function Y1(){var a=this;K4.call(a);a.n5=0;a.n6=0;a.n7=0;a.n8=0;a.n9=0;a.dM=null;a.lz=0;}
function A0T(){var a=new Y1();AY7(a);return a;}
function AY7(a){a.hi=$rt_createByteArray(4);a.ix=0;a.dM=$rt_createIntArray(80);Mm(a);}
function PY(a,b,c){var d,e;d=b.data;b=a.dM.data;e=a.lz;a.lz=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.lz==16)KF(a);}
function GB(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function AFR(a,b){if(a.lz>14)KF(a);a.dM.data[14]=b.hi;a.dM.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AGW(a,b,c){AJT(a);GB(a,a.n5,b,c);GB(a,a.n6,b,c+4|0);GB(a,a.n7,b,c+8|0);GB(a,a.n8,b,c+12|0);GB(a,a.n9,b,c+16|0);Mm(a);return 20;}
function Mm(a){var b;a.l4=Long_ZERO;a.ix=0;b=0;while(b<a.hi.data.length){a.hi.data[b]=0;b=b+1|0;}a.n5=1732584193;a.n6=(-271733879);a.n7=(-1732584194);a.n8=271733878;a.n9=(-1009589776);a.lz=0;b=0;while(b!=a.dM.data.length){a.dM.data[b]=0;b=b+1|0;}}
function Ru(a,b,c,d){return b^c^d;}
function Ez(a,b,c){return b<<c|b>>>(32-c|0);}
function KF(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.dM.data[b]=Ez(a,a.dM.data[b-3|0]^a.dM.data[b-8|0]^a.dM.data[b-14|0]^a.dM.data[b-16|0],1);b=b+1|0;}c=a.n5;d=a.n6;e=a.n7;f=a.n8;g=a.n9;h=0;while(h<=19){i=(((Ez(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.dM.data[h]|0)+1518500249|0;b=Ez(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((Ez(a,c,5)+Ru(a,d,e,f)|0)+g|0)+a.dM.data[j]|0)+1859775393|0;b=Ez(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((Ez(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.dM.data[h]|0)
+(-1894007588)|0;b=Ez(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((Ez(a,c,5)+Ru(a,d,e,f)|0)+g|0)+a.dM.data[j]|0)+(-899497514)|0;b=Ez(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.n5=a.n5+c|0;a.n6=a.n6+d|0;a.n7=a.n7+e|0;a.n8=a.n8+f|0;a.n9=a.n9+g|0;a.lz=0;b=0;while(b!=a.dM.data.length){a.dM.data[b]=0;b=b+1|0;}}
function AEa(){E.call(this);}
function A5o(){var a=new AEa();AV_(a);return a;}
function AV_(a){return;}
function MF(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=CR(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ALv(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=CR(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Rs(b,c){var d,e,f,g;d=b.data;e=Z8(IZ(C4(b)),c);f=CR(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Vu(b,c,d,e){var f,g;if(c>d){e=new Cq;Q(e);M(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Nf(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=N(E,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=CR(j,h+f|0);l=h+(2*f|0)|0;m=CR(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.oE(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AI2(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new Cq;Q(f);M(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=b[e];if(h==c)break;if(c>=h){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function HH(){var a=this;E.call(a);a.zY=0;a.yZ=null;a.uX=null;}
function A5p(a,b,c){var d=new HH();OO(d,a,b,c);return d;}
function OO(a,b,c,d){a.zY=b;a.yZ=c;a.uX=d;}
function Xd(a,b){var c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Un(b,a.yZ)<a.zY){c=0;d=null;if(c<10){e=1;f=b.bc;$p=1;continue _;}}return;case 1:AI7(a,b,e,f,d);if(C()){break _;}c=c+1|0;if(c>=10)return;e=1;f=b.bc;continue _;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AVv(a,b,c,d){return Cy((c+D(b.n,256)|0)-128|0,D(b.n,128),(d+D(b.n,256)|0)-128|0);}
function AI7(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=I(d.c);h=I(d.d);i=D(b.n,a.uX.data.length);j=a.xD(b,g,h);k=j.d9;l=j.eo;m=j.d$;$p=1;case 1:$z
=Wj(b,k,l,m);if(C()){break _;}c=$z;if(c)return 0;$p=2;case 2:$z=XB(b,k,l,m);if(C()){break _;}e=$z;if(e!==A5q)return 0;n=0;while(n<3){o=6;p=0;h=k;q=l;r=m;if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;}return f;case 3:$z=Wj(b,h,c,r);if(C()){break _;}c=$z;if(c){$p=4;continue _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;continue _;}n=n+1|0;if(n>=3)break;o=6;p
=0;h=k;q=l;r=m;}return f;case 4:$z=Wj(b,h,q,r);if(C()){break _;}c=$z;if(!c){$p=5;continue _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 5:$z=XB(b,h,q,r);if(C()){break _;}e=$z;if(!e.mh()){c=q+1|0;$p=6;continue _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n
>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 6:a:{$z=Wj(b,h,c,r);if(C()){break _;}c=$z;if(!c){b:{s=h+0.5;t=q+1.0;u=r+0.5;if(d===null){v=s-b.eJ;w=t-b.oo;x=u-b.eI;if(v*v+w*w+x*x>=1024.0)break b;break a;}y=s-d.c;z=t-d.j;ba=u-d.d;if(y*y+z*z+ba*ba<1024.0)break a;}c:{try{e=a.uX.data[i];bb=N(E2,1);bb.data[0]=K(FN);e=SB(e,bb);bb=N(E,1);bb.data[0]=b;bc=SE(e,bb);break c;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){}else{throw $$e;}}return f;}y=s;z=t;ba=u;IU(bc,y,z,ba,L(b.n)*360.0,0.0);$p=7;continue _;}}p=p+1|0;while
(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 7:$z=bc.sO(y,z,ba);if(C()){break _;}c=$z;if(c){f=f+1|0;$p=8;continue _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 8:AIS(b,bc);if(C()){break _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,
o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$p);}
function Rb(){HH.call(this);this.CF=null;}
function ATk(a,b,c,d){return Cy((c+D(b.n,256)|0)-128|0,D(b.n,D(b.n,D(b.n,112)+8|0)+8|0),(d+D(b.n,256)|0)-128|0);}
function CO(){var a=this;E.call(a);a.lj=0;a.bx=null;a.bt=null;a.k=null;a.bH=0.0;a.ct=0.0;a.bG=0.0;a.c=0.0;a.j=0.0;a.d=0.0;a.f=0.0;a.h=0.0;a.g=0.0;a.q=0.0;a.E=0.0;a.K=0.0;a.P=0.0;a.G=null;a.ca=0;a.iY=0;a.vB=0;a.kb=0;a.cs=0;a.cF=0.0;a.cC=0.0;a.ef=0.0;a.r4=0.0;a.gs=0.0;a.h$=0;a.e6=0.0;a.py=0;a.b6=0.0;a.bP=0.0;a.b7=0.0;a.dN=0.0;a.pJ=0.0;a.nB=0;a.mL=0.0;a.EM=0;a.l=null;a.nq=0;a.mn=0;a.cw=0;a.mM=0;a.rC=0;a.c5=0;a.fx=0;a.m_=0;a.rW=null;a.gl=0.0;a.gc=0.0;}
function A5r(a){var b=new CO();EO(b,a);return b;}
function EO(a,b){a.lj=0;a.G=Li(0.0,0.0,0.0,0.0,0.0,0.0);a.ca=0;a.iY=0;a.vB=0;a.kb=1;a.cs=0;a.cF=0.0;a.cC=0.6000000238418579;a.ef=1.7999999523162842;a.r4=0.0;a.gs=0.0;a.h$=1;a.e6=0.0;a.py=1;a.dN=0.0;a.pJ=0.0;a.nB=0;a.mL=0.0;a.EM=0;a.l=new Df;a.nq=0;a.mn=1;a.cw=0;a.mM=300;a.rC=0;a.c5=0;a.fx=300;a.m_=1;a.k=b;CC(a,0.0,0.0,0.0);}
function B4(a){a.cs=1;}
function Dx(a,b,c){a.cC=b;a.ef=c;}
function SR(a,b,c){a.q=b;a.E=c;}
function CC(a,b,c,d){var e,f,g,h,i,j;a.c=b;a.j=c;a.d=d;e=a.cC/2.0;f=a.ef/2.0;g=a.G;h=e;i=b-h;j=f;K0(g,i,c-j,d-h,b+h,c+j,d+h);}
function AD7(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.EV();if(C()){break _;}return;default:Es();}}CM().s(a,$p);}
function AAh(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bt!==null&&a.bt.cs)a.bt=null;a.nq=a.nq+1|0;a.r4=a.gs;a.bH=a.c;a.ct=a.j;a.bG=a.d;a.P=a.E;a.K=a.q;$p=1;case 1:$z=a.DC();if(C()){break _;}b=$z;if(!b)a.rC=0;else{a:{if(!a.rC&&!a.m_){c=B7(a.f*a.f*0.20000000298023224+a.h*a.h+a.g*a.g*0.20000000298023224)*0.20000000298023224;if(c>1.0)c=1.0;C2(a.k,a,B(204),c,1.0+(L(a.l)-L(a.l))*0.4000000059604645);d
=I(a.G.I);b=0;e=d+1.0;while(b<1.0+a.cC*20.0){f=(L(a.l)*2.0-1.0)*a.cC;g=(L(a.l)*2.0-1.0)*a.cC;BP(a.k,B(205),a.c+f,e,a.d+g,a.f,a.h-L(a.l)*0.20000000298023224,a.g);b=b+1|0;}b=0;while(true){if(b>=1.0+a.cC*20.0)break a;f=(L(a.l)*2.0-1.0)*a.cC;g=(L(a.l)*2.0-1.0)*a.cC;BP(a.k,B(206),a.c+f,e,a.d+g,a.f,a.h,a.g);b=b+1|0;}}}a.e6=0.0;a.rC=1;a.cw=0;}if(a.cw>0){if(!(a.cw%20|0)){h=null;b=1;$p=4;continue _;}a.cw=a.cw-1|0;}$p=2;case 2:$z=X0(a);if(C()){break _;}b=$z;if(b){h=null;b=10;$p=3;continue _;}if(a.j>=(-64.0)){a.m_=0;return;}$p
=5;continue _;case 3:a.eQ(h,b);if(C()){break _;}a.cw=600;if(a.j>=(-64.0)){a.m_=0;return;}$p=5;continue _;case 4:a.eQ(h,b);if(C()){break _;}a.cw=a.cw-1|0;$p=2;continue _;case 5:a.Ar();if(C()){break _;}a.m_=0;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function TW(a){B4(a);}
function ACr(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=QD(a.G,b,c,d);f=a.k;$p=1;case 1:$z=TP(f,a,e);if(C()){break _;}f=$z;if(f.p>0)return 0;f=a.k;$p=2;case 2:$z=AEh(f,e);if(C()){break _;}g=$z;return g?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ALW(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.nB){E_(a.G,b,c,d);a.c=(a.G.N+a.G.R)/2.0;a.j=a.G.I+a.cF-a.dN;a.d=(a.G.O+a.G.S)/2.0;return;}e=a.c;f=a.d;g=Nv(a.G);h=a.k;i=HK(a.G,b,c,d);$p=1;case 1:$z
=TP(h,a,i);if(C()){break _;}j=$z;k=0;l=c;while(k<CZ(j)){l=Sh(Z(j,k),a.G,l);k=k+1|0;}E_(a.G,0.0,l,0.0);if(a.kb){m=d;n=b;}else if(c===l){m=d;n=b;}else{n=0.0;m=n;l=n;}a:{b:{if(!a.ca){if(c===l)break b;if(c>=0.0)break b;}o=1;break a;}o=0;}p=0;while(p<CZ(j)){n=NJ(Z(j,p),a.G,n);p=p+1|0;}E_(a.G,n,0.0,0.0);if(!a.kb&&b!==n){n=0.0;m=n;l=n;}k=0;while(k<CZ(j)){m=QF(Z(j,k),a.G,m);k=k+1|0;}E_(a.G,0.0,0.0,m);if(!a.kb&&d!==m){n=0.0;m=n;l=n;}c:{if(a.pJ<=0.0){q=n;r=l;s=m;}else if(!o){q=n;r=l;s=m;}else if(a.dN>=0.05000000074505806)
{q=n;r=l;s=m;}else{if(b!==n)break c;if(d!==m)break c;q=n;r=l;s=m;}a.c=(a.G.N+a.G.R)/2.0;a.j=a.G.I+a.cF-a.dN;a.d=(a.G.O+a.G.S)/2.0;t=S(b,q);a.iY=!t&&d===s?0:1;k=S(c,r);a.ca=k&&c<0.0?1:0;a.vB=!a.iY&&!k?0:1;if(!a.ca){if(r<0.0)a.e6=a.e6-r;}else if(a.e6>0.0){u=a.e6;$p=3;continue _;}if(t)a.f=0.0;if(k)a.h=0.0;if(d!==s)a.g=0.0;l=a.c-e;m=a.d-f;a.gs=a.gs+B7(l*l+m*m)*0.6;if(!a.h$){a.dN=a.dN*0.4000000059604645;$p=4;continue _;}v=I(a.c);w=I(a.j-0.20000000298023224-a.cF);x=I(a.d);i=a.k;$p=6;continue _;}r=a.pJ;i=Nv(a.G);Td(a.G,
g);h=a.k;g=HK(a.G,b,r,d);$p=2;case 2:$z=TP(h,a,g);if(C()){break _;}h=$z;y=0;while(y<CZ(h)){r=Sh(Z(h,y),a.G,r);y=y+1|0;}E_(a.G,0.0,r,0.0);if(a.kb){s=d;q=b;}else if(c===r){s=d;q=b;}else{q=0.0;s=q;r=q;}k=0;while(k<CZ(h)){q=NJ(Z(h,k),a.G,q);k=k+1|0;}E_(a.G,q,0.0,0.0);if(!a.kb&&b!==q){q=0.0;s=q;r=q;}t=0;while(t<CZ(h)){s=QF(Z(h,t),a.G,s);t=t+1|0;}E_(a.G,0.0,0.0,s);if(!a.kb&&d!==s){q=0.0;s=q;r=q;}if(n*n+m*m>=q*q+s*s){Td(a.G,i);q=n;r=l;s=m;}else a.dN=a.dN+0.5;a.c=(a.G.N+a.G.R)/2.0;a.j=a.G.I+a.cF-a.dN;a.d=(a.G.O+a.G.S)
/2.0;t=S(b,q);a.iY=!t&&d===s?0:1;k=S(c,r);a.ca=k&&c<0.0?1:0;a.vB=!a.iY&&!k?0:1;if(!a.ca){if(r<0.0)a.e6=a.e6-r;}else if(a.e6>0.0){u=a.e6;$p=3;continue _;}if(t)a.f=0.0;if(k)a.h=0.0;if(d!==s)a.g=0.0;l=a.c-e;m=a.d-f;a.gs=a.gs+B7(l*l+m*m)*0.6;if(!a.h$){a.dN=a.dN*0.4000000059604645;$p=4;continue _;}v=I(a.c);w=I(a.j-0.20000000298023224-a.cF);x=I(a.d);i=a.k;$p=6;continue _;case 3:a.Ai(u);if(C()){break _;}a.e6=0.0;if(t)a.f=0.0;if(k)a.h=0.0;if(d!==s)a.g=0.0;l=a.c-e;m=a.d-f;a.gs=a.gs+B7(l*l+m*m)*0.6;if(!a.h$){a.dN=a.dN
*0.4000000059604645;$p=4;continue _;}v=I(a.c);w=I(a.j-0.20000000298023224-a.cF);x=I(a.d);i=a.k;$p=6;continue _;case 4:$z=a.DC();if(C()){break _;}t=$z;i=a.k;h=a.G;$p=5;case 5:$z=ALt(i,h);if(C()){break _;}k=$z;if(!k){if(a.cw<=0)a.cw= -a.mn;if(t&&a.cw>0){C2(a.k,a,B(207),0.699999988079071,1.600000023841858+(L(a.l)-L(a.l))*0.4000000059604645);a.cw= -a.mn;}return;}k=1;$p=7;continue _;case 6:$z=X9(i,v,w,x);if(C()){break _;}y=$z;if(a.gs>a.py&&y>0){a.py=a.py+1|0;J();h=A39.data[y].f0;if(!A39.data[y].bR.mh())C2(a.k,a,
IH(h),AHs(h)*0.15000000596046448,Ub(h));i=A39.data[y];h=a.k;$p=8;continue _;}a.dN=a.dN*0.4000000059604645;$p=4;continue _;case 7:a.B_(k);if(C()){break _;}if(!t){a.cw=a.cw+1|0;if(!a.cw)a.cw=300;}if(t&&a.cw>0){C2(a.k,a,B(207),0.699999988079071,1.600000023841858+(L(a.l)-L(a.l))*0.4000000059604645);a.cw= -a.mn;}return;case 8:i.ng(h,v,w,x,a);if(C()){break _;}a.dN=a.dN*0.4000000059604645;$p=4;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function ATa(a){return null;}
function AE1(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:a.eQ(c,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function Vb(a,b){return;}
function AAu(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k;c=Da(a.G,0.0,(-0.4000000059604645),0.0);d=A46;$p=1;case 1:$z=Wb(b,c,d,a);if(C()){break _;}e=$z;return e;default:Es();}}CM().s(a,b,c,d,e,$p);}
function ABX(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j+a.p1();d=I(a.c);e=Jn(I(c));f=I(a.d);g=a.k;$p=1;case 1:$z=X9(g,d,e,f);if(C()){break _;}h=$z;if(h){J();if(A39.data[h].bR===b){b=a.k;$p=2;continue _;}}return 0;case 2:$z=Z$(b,d,e,f);if(C()){break _;}d=$z;return c>=(e+1|0)-(HX(d)-0.1111111119389534)?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function X0(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k;c=Da(a.G,0.0,(-0.4000000059604645),0.0);d=A47;$p=1;case 1:$z=AI3(b,c,d);if(C()){break _;}e=$z;return e;default:Es();}}CM().s(a,b,c,d,e,$p);}
function Kd(a,b,c,d){var e,f,g;e=DG(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;c=c*d;f=Bm(a.q*3.1415927410125732/180.0);g=Bx(a.q*3.1415927410125732/180.0);a.f=a.f+b*g-c*f;a.g=a.g+c*g+b*f;}}
function Zd(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(a.c);d=(a.G.Q-a.G.I)*0.66;e=I(a.j-a.cF+d);f=I(a.d);g=a.k;$p=1;case 1:$z=AHV(g,c,e,f);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AOb(a,b){a.k=b;}
function IU(a,b,c,d,e,f){a.c=b;a.bH=b;b=c+a.cF;a.j=b;a.ct=b;a.d=d;a.bG=d;a.q=e;a.E=f;CC(a,a.c,a.j,a.d);}
function AMi(a,b){var c,d,e;c=a.c-b.c;d=a.j-b.j;e=a.d-b.d;return DG(c*c+d*d+e*e);}
function AB1(a,b,c,d){var e,f,g;e=a.c-b;f=a.j-c;g=a.d-d;return e*e+f*f+g*g;}
function Pp(a,b,c,d){var e,f,g;e=a.c-b;f=a.j-c;g=a.d-d;return B7(e*e+f*f+g*g);}
function JR(a,b){var c,d,e;c=a.c-b.c;d=a.j-b.j;e=a.d-b.d;return c*c+d*d+e*e;}
function AWL(a,b){return;}
function AVS(a,b){var c,d,e,f,g;c=b.c-a.c;d=b.d-a.d;e=c<0.0? -c:c;f=d<0.0? -d:d;if(e>f)f=e;if(f>=0.009999999776482582){e=B7(f);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;e=f*g;c=c*0.05000000074505806;e=e*0.05000000074505806;c=c*(1.0-a.mL);e=e*(1.0-a.mL);Gj(a, -c,0.0, -e);Gj(b,c,0.0,e);}}
function Gj(a,b,c,d){a.f=a.f+b;a.h=a.h+c;a.g=a.g+d;}
function AED(a,b,c){return 0;}
function AYI(a){return 0;}
function AXw(a){return 0;}
function AZM(a,b,c){return;}
function Pi(a,b){var c,d,e;c=a.c-b.t;d=a.j-b.v;e=a.d-b.s;return ACq(a,c*c+d*d+e*e);}
function ACq(a,b){var c;c=AKr(a.G)*64.0;return b>=c*c?0:1;}
function AGj(a,b){var c,d;c=$rt_createDoubleArray(3);d=c.data;d[0]=a.c;d[1]=a.j;d[2]=a.d;Gw(b,B(208),Sf(a,c));c=$rt_createDoubleArray(3);d=c.data;d[0]=a.f;d[1]=a.h;d[2]=a.g;Gw(b,B(209),Sf(a,c));c=$rt_createFloatArray(2);d=c.data;d[0]=a.q;d[1]=a.E;Gw(b,B(210),AHh(a,c));AMl(b,B(211),a.e6);EH(b,B(212),a.cw<<16>>16);EH(b,B(213),a.fx<<16>>16);PS(b,B(214),a.ca);Xp(a,b);}
function UL(a,b){var c,d,e,f,g;c=II(b,B(208));d=II(b,B(209));e=II(b,B(210));CC(a,0.0,0.0,0.0);a.f=Ew(d,0).hM;a.h=Ew(d,1).hM;a.g=Ew(d,2).hM;f=Ew(c,0).hM;a.c=f;a.b6=f;a.bH=f;f=Ew(c,1).hM;a.j=f;a.bP=f;a.ct=f;f=Ew(c,2).hM;a.d=f;a.b7=f;a.bG=f;g=Ew(e,0).l3;a.q=g;a.K=g;g=Ew(e,1).l3;a.E=g;a.P=g;a.e6=AHm(b,B(211));a.cw=EV(b,B(212));a.fx=EV(b,B(213));a.ca=QO(b,B(214));CC(a,a.c,a.j,a.d);AJt(a,b);}
function Sf(a,b){var c,d,e,f,g;b=b.data;c=Kj();d=b.length;e=0;while(e<d){f=b[e];g=new Kv;Cl(g);g.hM=f;HT(c,g);e=e+1|0;}return c;}
function AHh(a,b){var c,d,e;b=b.data;c=Kj();d=b.length;e=0;while(e<d){HT(c,AWK(b[e]));e=e+1|0;}return c;}
function Xu(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0.0;$p=1;case 1:$z=ABW(a,b,c,d);if(C()){break _;}e=$z;return e;default:Es();}}CM().s(a,b,c,d,e,$p);}
function ABW(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Ga(a.k,a.c,a.j+d,a.d,I1(b,c));e.gr=10;f=a.k;$p=1;case 1:AIS(f,e);if(C()){break _;}return e;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ACK(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=I(a.c);c=I(a.j+a.p1());d=I(a.d);e=a.k;$p=1;case 1:$z=Wj(e,b,c,d);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,$p);}
function APD(a,b){return 0;}
function APN(a,b){return null;}
function AAB(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bt.cs){a.bt=null;return;}a.f=0.0;a.h=0.0;a.g=0.0;$p=1;case 1:a.dR();if(C()){break _;}CC(a,a.bt.c,a.bt.j+a.cF+a.bt.xw(),a.bt.d);a.gc=a.gc+a.bt.q-a.bt.K;a.gl=a.gl+a.bt.E-a.bt.P;while(a.gc>=180.0){a.gc=a.gc-360.0;}while(a.gc<(-180.0)){a.gc=a.gc+360.0;}while(a.gl>=180.0){a.gl=a.gl-360.0;}while(a.gl<(-180.0)){a.gl=a.gl+360.0;}b=a.gc*0.5;c=a.gl*0.5;d=10.0;if(b>d)b
=d;e=(-10.0);if(b<e)b=e;if(c<=d)d=c;if(d>=e)e=d;a.gc=a.gc-b;a.gl=a.gl-e;a.q=a.q+b;a.E=a.E+e;return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AYK(a){return a.ef*0.75;}
function MQ(a,b){a.gl=0.0;a.gc=0.0;if(a.bt===b){a.bt.bx=null;a.bt=null;}else{if(a.bt!==null)a.bt.bx=null;if(b.bx!==null)b.bx.bt=null;a.bt=b;b.bx=a;}}
function Tj(a,b,c){var d,e;d=a.E;e=a.q;a.q=a.q+b*0.15;a.E=a.E-c*0.15;if(a.E<(-90.0))a.E=(-90.0);if(a.E>90.0)a.E=90.0;a.P=a.P+a.E-d;a.K=a.K+a.q-e;}
function Ea(){var a=this;CO.call(a);a.nw=0;a.Fg=0.0;a.C7=0.0;a.Ee=0.0;a.da=0.0;a.ex=0.0;a.xj=0.0;a.lZ=0.0;a.i3=0.0;a.kY=0.0;a.C9=0;a.vU=null;a.C8=0;a.AD=0.0;a.Bo=null;a.E8=0.0;a.sT=0;a.E9=0.0;a.bI=0;a.rS=0;a.sR=0;a.c$=0;a.Bd=0;a.jD=0.0;a.cD=0;a.c6=0;a.jU=0.0;a.ip=0.0;a.ze=0;a.BE=0;a.Fa=0.0;a.iV=0.0;a.bX=0.0;a.fI=0.0;a.gB=0;a.hO=0.0;a.fV=0.0;a.jE=0.0;a.gU=0;a.xb=0.0;a.rc=0.0;}
function M8(a){return a.vU;}
function AP6(a){return a.cs?0:1;}
function ATd(a){return a.cs?0:1;}
function AKU(a){return a.ef*0.8500000238418579;}
function AH2(a){var b,c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAh(a);if(C()){break _;}b=D(a.l,1000);c=a.sR;a.sR=c+1|0;if(b<c){a.sR=(-80);d=a.ui();if(d!==null)C2(a.k,a,d,1.0,(L(a.l)-L(a.l))*0.20000000298023224+1.0);}if(GR(a)){$p=2;continue _;}if(GR(a)){d=A46;$p=3;continue _;}a.fx=a.mM;a.jU=a.ip;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5
>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD+1|0;if(a.cD>20){$p=6;continue _;}}a.kY=a.i3;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 2:$z=ACK(a);if(C()){break _;}e=$z;if(e){d=null;e=1;$p=4;continue _;}if(GR(a)){d=A46;$p=3;continue _;}a.fx=a.mM;a.jU=a.ip;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD+1|0;if(a.cD>20){$p=6;continue _;}}a.kY=a.i3;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 3:$z=ABX(a,d);if(C()){break _;}e=$z;if(!e)a.fx=a.mM;else{a.fx=a.fx-1|0;if(a.fx==(-20)){a.fx=0;e
=0;while(e<8){f=L(a.l)-L(a.l);g=L(a.l)-L(a.l);h=L(a.l)-L(a.l);BP(a.k,B(205),a.c+f,a.j+g,a.d+h,a.f,a.h,a.g);e=e+1|0;}d=null;e=2;$p=5;continue _;}a.cw=0;}a.jU=a.ip;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD+1|0;if(a.cD>20){$p=6;continue _;}}a.kY=a.i3;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 4:a.eQ(d,e);if(C()){break _;}if(GR(a)){d=A46;$p=3;continue _;}a.fx=a.mM;a.jU=a.ip;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD
+1|0;if(a.cD>20){$p=6;continue _;}}a.kY=a.i3;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 5:a.eQ(d,e);if(C()){break _;}a.cw=0;a.jU=a.ip;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD+1|0;if(a.cD>20){$p=6;continue _;}}a.kY=a.i3;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 6:B4(a);if(C()){break _;}e=0;while(e<20){i=CH(a.l)*0.02;j=CH(a.l)*0.02;k=CH(a.l)*0.02;BP(a.k,B(215),a.c+L(a.l)*a.cC*2.0-a.cC,a.j+L(a.l)*a.ef,a.d+L(a.l)*a.cC*2.0-a.cC,i,j,k);e=e+1|0;}a.kY=a.i3;a.ex=a.da;a.K=a.q;a.P
=a.E;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAe(a){var b,c,d,e;b=0;while(b<20){c=CH(a.l)*0.02;d=CH(a.l)*0.02;e=CH(a.l)*0.02;BP(a.k,B(215),a.c+L(a.l)*a.cC*2.0-a.cC-c*10.0,a.j+L(a.l)*a.ef-d*10.0,a.d+L(a.l)*a.cC*2.0-a.cC-e*10.0,c,d,e);b=b+1|0;}}
function AFK(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAB(a);if(C()){break _;}a.xj=a.lZ;a.lZ=0.0;return;default:Es();}}CM().s(a,$p);}
function AHb(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.EV();if(C()){break _;}$p=2;case 2:a.m5();if(C()){break _;}b=a.c-a.bH;c=a.d-a.bG;d=B7(b*b+c*c);e=a.da;f=0.0;a.xj=a.lZ;g=0.0;if(d>0.05000000074505806){g=1.0;f=d*3.0;e=CB(c,b)*180.0/3.1415927410125732-90.0;}if(!a.ca)g=0.0;a.lZ=a.lZ+(g-a.lZ)*0.30000001192092896;h=e-a.da;while(h<(-180.0)){h=h+360.0;}while
(h>=180.0){h=h-360.0;}a.da=a.da+h*0.10000000149011612;i=a.q-a.da;while(i<(-180.0)){i=i+360.0;}while(i>=180.0){i=i-360.0;}j=i>=(-90.0)&&i<90.0?0:1;if(i<(-75.0))i=(-75.0);if(i>=75.0)i=75.0;a.da=a.q-i;a.da=a.da+i*0.10000000149011612;if(j)f=f*(-1.0);while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while(a.q-a.K>=180.0){a.K=a.K+360.0;}while(a.da-a.ex<(-180.0)){a.ex=a.ex-360.0;}while(a.da-a.ex>=180.0){a.ex=a.ex+360.0;}while(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}a.i3=a.i3+f;return;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function ASQ(a,b,c){Dx(a,b,c);}
function Q7(a,b){if(a.bI>0){a.bI=a.bI+b|0;if(a.bI>20)a.bI=20;a.c5=a.nw/2|0;}}
function XD(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gB=0;if(a.bI<=0)return 0;a.bX=1.5;if(a.c5<=a.nw/2.0){a.rS=a.bI;a.c5=a.nw;a.bI=a.bI-c|0;a.Bd=10;a.c$=10;}else{if((a.rS-c|0)>=a.bI)return 0;a.bI=a.rS-c|0;}a.jD=0.0;if(b===null)a.jD=(BI()*2.0|0)*180|0;else{d=b.c-a.c;e=b.d-a.d;while(d*d+e*e<1.0E-4){d=(BI()-BI())*0.01;e=(BI()-BI())*0.01;}a.jD=CB(e,d)*180.0/3.1415927410125732-a.q;Xb(a,b,c,d,e);}if(a.bI>0){C2(a.k,a,a.s3(),
1.0,(L(a.l)-L(a.l))*0.20000000298023224+1.0);return 1;}C2(a.k,a,a.sJ(),1.0,(L(a.l)-L(a.l))*0.20000000298023224+1.0);$p=1;case 1:a.BT(b);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AXU(a){return null;}
function AN_(a){return B(216);}
function AON(a){return B(216);}
function Xb(a,b,c,d,e){var f,g,h;f=B7(d*d+e*e);a.f=a.f/2.0;a.h=a.h/2.0;a.g=a.g/2.0;g=a.f;h=f;a.f=g-d/h*0.4000000059604645;a.h=a.h+0.4000000059604645;a.g=a.g-e/h*0.4000000059604645;if(a.h>0.4000000059604645)a.h=0.4000000059604645;}
function AIE(a,b){var c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.sT>0&&b!==null)b.yy(a,a.sT);a.ze=1;c=a.k3();if(c>0){d=D(a.l,3);e=0;if(e<d){f=1;$p=1;continue _;}}return;case 1:Xu(a,c,f);if(C()){break _;}e=e+1|0;if(e>=d)return;f=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ANw(a){return 0;}
function AKB(a,b){var c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=QQ(b-3.0)|0;if(c<=0)return;d=null;$p=1;case 1:a.eQ(d,c);if(C()){break _;}d=a.k;c=I(a.c);e=I(a.j-0.20000000298023224-a.cF);f=I(a.d);$p=2;case 2:$z=X9(d,c,e,f);if(C()){break _;}e=$z;if(e>0){J();d=A39.data[e].f0;C2(a.k,a,IH(d),d.np*0.5,d.oe*0.75);}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Y3(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAu(a);if(C()){break _;}d=$z;if(!d){$p=2;continue _;}e=a.j;Kd(a,b,c,0.019999999552965164);f=a.f;g=a.h;h=a.g;$p=3;continue _;case 2:$z=X0(a);if(C()){break _;}d=$z;if(d){e=a.j;Kd(a,b,c,0.019999999552965164);f=a.f;g=a.h;h=a.g;$p=4;continue _;}Kd(a,b,c,!a.ca?0.019999999552965164:0.10000000149011612);$p=7;continue _;case 3:ALW(a,
f,g,h);if(C()){break _;}a.f=a.f*0.800000011920929;a.h=a.h*0.800000011920929;a.g=a.g*0.800000011920929;a.h=a.h-0.02;if(!a.iY){a.iV=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fI=a.fI+a.bX;return;}f=a.f;e=a.h+0.6000000238418579-a.j+e;g=a.g;$p=5;continue _;case 4:ALW(a,f,g,h);if(C()){break _;}a.f=a.f*0.5;a.h=a.h*0.5;a.g=a.g*0.5;a.h=a.h-0.02;if(!a.iY){a.iV=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fI
=a.fI+a.bX;return;}f=a.f;e=a.h+0.6000000238418579-a.j+e;g=a.g;$p=6;continue _;case 5:$z=ACr(a,f,e,g);if(C()){break _;}d=$z;if(d)a.h=0.30000001192092896;a.iV=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fI=a.fI+a.bX;return;case 6:$z=ACr(a,f,e,g);if(C()){break _;}d=$z;if(d)a.h=0.30000001192092896;a.iV=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fI=a.fI+a.bX;return;case 7:$z=ADi(a);if(C()){break _;}d=
$z;if(d){a.e6=0.0;if(a.h<(-0.15))a.h=(-0.15);}e=a.f;f=a.h;g=a.g;$p=8;case 8:ALW(a,e,f,g);if(C()){break _;}if(!a.iY){a.f=a.f*0.9100000262260437;a.h=a.h*0.9800000190734863;a.g=a.g*0.9100000262260437;a.h=a.h-0.08;if(a.ca){a.f=a.f*0.6000000238418579;a.g=a.g*0.6000000238418579;}a.iV=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fI=a.fI+a.bX;return;}$p=9;case 9:$z=ADi(a);if(C()){break _;}d=$z;if(d)a.h=0.2;a.f=a.f*0.9100000262260437;a.h=a.h*0.9800000190734863;a.g
=a.g*0.9100000262260437;a.h=a.h-0.08;if(a.ca){a.f=a.f*0.6000000238418579;a.g=a.g*0.6000000238418579;}a.iV=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fI=a.fI+a.bX;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function ADi(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=I(a.c);c=I(a.G.I);d=I(a.d);e=a.k;$p=1;case 1:$z=X9(e,b,c,d);if(C()){break _;}f=$z;J();if(f==A5s.b)return 1;e=a.k;c=c+1|0;$p=2;case 2:$z=X9(e,b,c,d);if(C()){break _;}b=$z;return b==A5s.b?1:0;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function GR(a){return !a.cs&&a.bI>0?1:0;}
function X2(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gB=a.gB+1|0;b=a.k.bc;if(b!==null){c=b.c-a.c;d=b.j-a.j;e=b.d-a.d;f=c*c+d*d+e*e;if(f>16384.0){$p=2;continue _;}if(a.gB>600&&!D(a.l,800)){if(f>=1024.0){$p=7;continue _;}a.gB=0;}}if(a.bI>0){$p=1;continue _;}a.gU=0;a.hO=0.0;a.fV=0.0;a.jE=0.0;$p=3;continue _;case 1:a.us();if(C()){break _;}$p
=3;continue _;case 2:B4(a);if(C()){break _;}if(a.gB>600&&!D(a.l,800)){if(f>=1024.0){$p=7;continue _;}a.gB=0;}if(a.bI>0){$p=1;continue _;}a.gU=0;a.hO=0.0;a.fV=0.0;a.jE=0.0;$p=3;case 3:$z=AAu(a);if(C()){break _;}g=$z;$p=4;case 4:$z=X0(a);if(C()){break _;}h=$z;if(a.gU){if(g)a.h=a.h+0.03999999910593033;else if(h)a.h=a.h+0.03999999910593033;else if(a.ca)ABp(a);}a.hO=a.hO*0.9800000190734863;a.fV=a.fV*0.9800000190734863;a.jE=a.jE*0.8999999761581421;i=a.hO;j=a.fV;$p=5;case 5:Y3(a,i,j);if(C()){break _;}k=a.k;l=Da(a.G,
0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=Zh(k,a,l);if(C()){break _;}k=$z;if(k!==null&&k.p>0){m=0;while(true){if(m>=k.p)break a;l=Z(k,m);if(l.p9())l.sS(a);m=m+1|0;}}}return;case 7:B4(a);if(C()){break _;}if(a.bI>0){$p=1;continue _;}a.gU=0;a.hO=0.0;a.fV=0.0;a.jE=0.0;$p=3;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ABp(a){a.h=0.41999998688697815;}
function ALc(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(L(a.l)<0.07000000029802322){a.hO=(L(a.l)-0.5)*a.rc;a.fV=L(a.l)*a.rc;}a.gU=L(a.l)>=0.009999999776482582?0:1;if(L(a.l)<0.03999999910593033)a.jE=(L(a.l)-0.5)*60.0;a.q=a.q+a.jE;a.E=a.xb;$p=1;case 1:$z=AAu(a);if(C()){break _;}b=$z;$p=2;case 2:$z=X0(a);if(C()){break _;}c=$z;if(!(!b&&!c))a.gU=L(a.l)>=0.800000011920929?0:1;return;default:Es();}}CM().s(a,b,c,$p);}
function AVc(a){return;}
function Vk(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CC(a,b,c+a.ef/2.0,d);e=a.k;f=a.G;$p=1;case 1:$z=AHI(e,f);if(C()){break _;}g=$z;if(!g)return 0;e=a.k;f=a.G;$p=2;case 2:$z=TP(e,a,f);if(C()){break _;}e=$z;if(e.p)return 0;e=a.k;f=a.G;$p=3;case 3:$z=AEh(e,f);if(C()){break _;}g=$z;return g?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Xk(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=null;c=4;$p=1;case 1:a.eQ(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function Hu(){var a=this;Ea.call(a);a.dk=null;a.cR=null;a.gD=0;}
function AFb(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k;d=BR(a.c,a.j+AKU(a),a.d);b=BR(b.c,b.j+b.p1(),b.d);$p=1;case 1:$z=AEj(c,d,b);if(C()){break _;}b=$z;return b!==null?0:1;default:Es();}}CM().s(a,b,c,d,$p);}
function AKk(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gD=0;b=16.0;if(a.cR===null){$p=1;continue _;}if(GR(a.cR)){c=AMi(a.cR,a);d=a.cR;$p=2;continue _;}a.cR=null;a:{if(!a.gD&&a.cR!==null){if(a.dk===null)break a;if
(!D(a.l,20))break a;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=I(a.c+D(a.l,11)-5.0);k=I(a.j+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e=I(a.G.I);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 1:$z=a.vw();if(C()){break _;}d=$z;a.cR=d;if(a.cR!==null){d=a.k;m=a.cR;$p=3;continue _;}b:{if(!a.gD&&a.cR!==null){if(a.dk===null)break b;if(!D(a.l,20))break b;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<
50){j=I(a.c+D(a.l,11)-5.0);k=I(a.j+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e=I(a.G.I);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 2:$z=AFb(a,d);if(C()){break _;}e=$z;if(e){d=a.cR;$p=4;continue _;}b:{if(!a.gD&&a.cR!==null){if(a.dk===null)break b;if(!D(a.l,20))break b;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=I(a.c+D(a.l,11)-5.0);k=I(a.j+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e
=I(a.G.I);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 3:$z=AMb(d,a,m,b);if(C()){break _;}d=$z;a.dk=d;c:{if(!a.gD&&a.cR!==null){if(a.dk===null)break c;if(!D(a.l,20))break c;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=I(a.c+D(a.l,11)-5.0);k=I(a.j+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e=I(a.G.I);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 4:a.mu(d,c);if(C()){break _;}c:{if(!a.gD&&a.cR!==null){if(a.dk===null)break c;if
(!D(a.l,20))break c;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=I(a.c+D(a.l,11)-5.0);k=I(a.j+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e=I(a.G.I);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 5:$z=AAu(a);if(C()){break _;}n=$z;$p=6;case 6:$z=X0(a);if(C()){break _;}o=$z;if(a.dk!==null&&D(a.l,100)){d=Pt(a.dk,a);p=a.cC*2.0;q=p*p;r=e;while(d!==null&&Xx(d,a.c,a.j,a.d)<q&&d.v<=r){AKx(a.dk);if(!AH0(a.dk)){d=Pt(a.dk,a);continue;}d
=null;a.dk=null;}a.gU=0;if(d!==null){q=d.t-a.c;s=d.s-a.d;t=d.v-r;a.q=CB(s,q)*180.0/3.1415927410125732-90.0;a.fV=a.rc;if(a.gD&&a.cR!==null){u=a.cR.c-a.c;r=a.cR.d-a.d;v=a.q;a.q=CB(r,u)*180.0/3.1415927410125732-90.0;w=(v-a.q+90.0)*3.1415927410125732/180.0;a.hO= -Bm(w)*a.fV*1.0;a.fV=Bx(w)*a.fV*1.0;}if(t!==0.0)a.gU=1;}if(L(a.l)<0.800000011920929&&!(!n&&!o))a.gU=1;return;}$p=9;continue _;case 7:$z=AMb(d,a,m,b);if(C()){break _;}d=$z;a.dk=d;e=I(a.G.I);$p=5;continue _;case 8:$z=a.qR(j,k,l);if(C()){break _;}x=$z;if(x
>h){h=x;e=j;f=k;g=l;}i=i+1|0;if(i>=50){if(e>0){d=a.k;$p=10;continue _;}e=I(a.G.I);$p=5;continue _;}j=I(a.c+D(a.l,11)-5.0);k=I(a.j+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);continue _;case 9:ALc(a);if(C()){break _;}a.dk=null;return;case 10:$z=AEs(d,a,e,f,g,b);if(C()){break _;}d=$z;a.dk=d;e=I(a.G.I);$p=5;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AHi(a,b,c){return;}
function AFQ(a){return null;}
function Yo(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Vk(a,b,c,d);if(C()){break _;}e=$z;if(!e)return 0;e=b|0;f=c|0;g=d|0;$p=2;case 2:$z=a.qR(e,f,g);if(C()){break _;}h=$z;return h<0.0?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function Dp(){Hu.call(this);this.BL=0;}
function YH(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=Zd(a,b);if(C()){break _;}b=$z;if(b>0.5)a.gB=a.gB+2|0;$p=2;case 2:X2(a);if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function AFY(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHb(a);if(C()){break _;}if(a.k.h3)return;$p=2;case 2:B4(a);if(C()){break _;}return;default:Es();}}CM().s(a,$p);}
function AFj(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(JR(a.k.bc,a)>=256.0)return null;b=a.k.bc;$p=1;case 1:$z=AFb(a,b);if(C()){break _;}c=$z;return !c?null:a.k.bc;default:Es();}}CM().s(a,b,c,$p);}
function Wp(a,b,c){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XD(a,b,c);if(C()){break _;}c=$z;if(!c)return 0;if(b!==a)a.cR=b;return 1;default:Es();}}CM().s(a,b,c,$p);}
function ALg(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<2.5&&b.G.Q>a.G.I&&b.G.I<a.G.Q){a.c6=20;d=a.BL;$p=1;continue _;}return;case 1:b.eQ(a,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Xa(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0.5;f=a.k;$p=1;case 1:$z=AHV(f,b,c,d);if(C()){break _;}g=$z;return e-g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Us(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.k;f=I(b);g=I(c);h=I(d);$p=1;case 1:$z=Tw(e,f,g,h);if(C()){break _;}f=$z;if(f>D(a.l,8))return 0;$p=2;case 2:$z=Yo(a,b,c,d);if(C()){break _;}f=$z;return !f?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function HD(){Dp.call(this);}
function AC8(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!OF(a.k)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:YH(a);if(C()){break _;}return;case 2:$z=Zd(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.k;d=I(a.c);e=I(a.j);f=I(a.d);$p=3;case 3:$z=ABx(c,d,e,f);if(C()){break _;}d=$z;if(d&&L(a.l)*30.0<(b-0.4000000059604645)*2.0)a.cw=300;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function APE(a){Bw();return A5t.cx;}
function HR(){Dp.call(this);}
function ADD(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!OF(a.k)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:YH(a);if(C()){break _;}return;case 2:$z=Zd(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.k;d=I(a.c);e=I(a.j);f=I(a.d);$p=3;case 3:$z=ABx(c,d,e,f);if(C()){break _;}d=$z;if(d&&L(a.l)*30.0<(b-0.4000000059604645)*2.0)a.cw=300;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AC3(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<10.0){d=b.c-a.c;e=b.d-a.d;if(!a.c6){f=ANc(a.k,a);f.j=f.j+1.399999976158142;g=b.j-0.20000000298023224-f.j;h=B7(d*d+e*e)*0.20000000298023224;C2(a.k,a,B(217),1.0,1.0/(L(a.l)*0.4000000059604645+0.800000011920929));b=a.k;$p=1;continue _;}a.q=CB(e,d)*180.0/3.1415927410125732-90.0;a.gD=1;}return;case 1:AIS(b,f);if(C()){break _;}NQ(f,
d,g+h,e,0.6000000238418579,12.0);a.c6=30;a.q=CB(e,d)*180.0/3.1415927410125732-90.0;a.gD=1;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AQ4(a){Bw();return A5u.cx;}
function In(){var a=this;Dp.call(a);a.ie=0;a.su=0;a.yh=0;a.iW=0;}
function VD(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.su=a.ie;if(a.ie>0&&a.iW<0)a.ie=a.ie-1|0;if(a.iW>=0)a.iW=2;$p=1;case 1:AKk(a);if(C()){break _;}if(a.iW!=1)a.iW=(-1);return;default:Es();}}CM().s(a,$p);}
function Wr(a,b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(a.iW<=0&&c<3.0)){if(a.iW<=0)break a;if(c>=7.0)break a;}if(!a.ie)C2(a.k,a,B(218),1.0,0.5);a.iW=1;a.ie=a.ie+1|0;if(a.ie==a.yh){b=a.k;d=a.c;e=a.j;f=a.d;c=3.0;$p=1;continue _;}a.gD=1;}return;case 1:T6(b,a,d,e,f,c);if(C()){break _;}$p=2;case 2:B4(a);if(C()){break _;}a.gD=1;return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function NB(a,b){return (a.su+(a.ie-a.su|0)*b)/(a.yh-2|0);}
function AM3(a){Bw();return A5v.cx;}
function IN(){Dp.call(this);}
function ALK(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=Zd(a,b);if(C()){break _;}b=$z;if(b<0.5&&JR(a.k.bc,a)<256.0)return a.k.bc;return null;default:Es();}}CM().s(a,b,$p);}
function Ve(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0;$p=1;case 1:a:{$z=Zd(a,d);if(C()){break _;}d=$z;if(d>0.5&&!D(a.l,100))a.cR=null;else{if(c<=2.0)break a;if(c>=6.0)break a;if(D(a.l,10))break a;if(a.ca){e=b.c-a.c;f=b.d-a.d;g=B7(e*e+f*f);a.f=e/g*0.5*0.800000011920929+a.f*0.20000000298023224;a.g=f/g*0.5*0.800000011920929+a.g*0.20000000298023224;a.h=0.4000000059604645;}}return;}$p=2;case 2:ALg(a,
b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ARK(a){Bw();return A5w.cx;}
function FH(){Hu.call(this);}
function AI9(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.k;f=c-1|0;$p=1;case 1:$z=X9(e,b,f,d);if(C()){break _;}g=$z;J();if(g==A3_.b)return 10.0;e=a.k;$p=2;case 2:$z=AHV(e,b,c,d);if(C()){break _;}h=$z;return h-0.5;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AFV(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.k;f=I(b);g=I(c);h=I(d);$p=1;case 1:$z=Tw(e,f,g,h);if(C()){break _;}g=$z;if(g<=8)return 0;$p=2;case 2:$z=Yo(a,b,c,d);if(C()){break _;}g=$z;return !g?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function I6(){FH.call(this);this.vA=0;}
function AB9(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.vA&&b instanceof Ea){a.vA=1;d=1+D(a.l,3)|0;e=0;if(e<d){J();f=A4x.b;g=1;h=1.0;$p=2;continue _;}}$p=1;case 1:$z=XD(a,b,c);if(C()){break _;}c=$z;return c;case 2:$z=ABW(a,f,g,h);if(C()){break _;}i=$z;i.h=i.h+L(a.l)*0.05000000074505806;i.f=i.f+(L(a.l)-L(a.l))*0.10000000149011612;i.g=i.g+(L(a.l)-L(a.l))*0.10000000149011612;e
=e+1|0;if(e>=d){$p=1;continue _;}J();f=A4x.b;g=1;h=1.0;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AWS(a){return B(219);}
function AUX(a){return B(219);}
function AQK(a){return B(219);}
function He(){FH.call(this);this.oW=0;}
function ANu(a){return B(220);}
function AYy(a){return B(220);}
function AO_(a){return B(221);}
function AQo(a,b){if(!a.oW)return 0;MQ(b,a);return 1;}
function APi(a){Bw();return A5x.cx;}
function Df(){var a=this;E.call(a);a.xM=0.0;a.uK=0;}
function A1d(){var a=new Df();AUg(a);return a;}
function A1n(a){var b=new Df();AOW(b,a);return b;}
function AUg(a){return;}
function AOW(a,b){return;}
function Lv(a,b){return;}
function ABq(a,b){if(b==32)return Cb(a)*4.294967295E9+(-2.147483648E9)|0;return Cb(a)*Long_toNumber(Long_shl(Long_fromInt(1),CR(32,b)))|0;}
function JF(a){return ABq(a,32);}
function D(a,b){return Cb(a)*b|0;}
function FG(a){return Long_or(Long_shl(Long_fromInt(JF(a)),32),Long_fromInt(JF(a)));}
function L(a){return Cb(a);}
function Cb(a){return Math.random();}
function CH(a){var b,c,d,e;if(a.uK){a.uK=0;return a.xM;}while(true){while(true){b=2.0*Cb(a)-1.0;c=2.0*Cb(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=DL((-2.0)*AUK(d)/d);a.xM=c*e;a.uK=1;return b*e;}
function Lp(){E.call(this);}
var A5y=null;var A5z=null;function A5A(){var a=new Lp();ADo(a);return a;}
function ADo(a){return;}
function Hx(b){var c,d,e,f,g,h;A0X(K(Lp));try{BO();c=A5B+1|0;d=0;while(d<b){e=A5B+1|0;A5B=e;f=A5C;g=CG(e);h=new Oy;h.yt=e;h.pB=null;h.nx=null;h.kB=(-1);h.iM=0;BK(f,g,h);d=d+1|0;}U(A5y,CG(c));U(A5y,CG(b));return c;}finally{A2g(K(Lp));}}
function SU(b){var c,d,e,f,g;A0X(K(Lp));try{c=b.be;while(c<b.cb){BO();d=A5D;Y();e=new MK;f=A23.createTexture();e.Ea=(-1);e.D9=(-1);e.Ct=1;e.Dd=0;e.yJ=f;g=PW(d,e);ALl(b,c,g);U(A5z,CG(g));c=c+1|0;}}finally{A2g(K(Lp));}}
function SO(b){var c;c=V_($rt_createByteArray(b));c.jI=A5E;return c;}
function Om(b){return AGE($rt_createIntArray(b));}
function GO(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new SM;f=0+d|0;Jb(e,d);e.be=0;e.cb=f;e.vQ=0;e.u7=0;e.u2=c;return e;}
function AGJ(){A5y=Ck();A5z=Ck();}
function UX(){var a=this;E.call(a);a.cq=null;a.ei=null;a.ib=0.0;a.pt=0.0;a.hB=0;a.iQ=0;a.xu=null;}
function A0z(a){var b=new UX();AOd(b,a);return b;}
function AOd(a,b){a.ei=null;a.ib=0.0;a.pt=0.0;a.hB=0;a.iQ=0;a.xu=IJ();a.cq=b;}
function Yv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.pt+(a.ib-a.pt)*b;d=a.cq.e;BW();Bq(d.P+(d.E-d.P)*b,1.0,0.0,0.0);Bq(d.K+(d.q-d.K)*b,0.0,1.0,0.0);Go();By();e=a.cq.w;f=I(d.c);g
=I(d.j);h=I(d.d);$p=1;case 1:$z=AHV(e,f,g,h);if(C()){break _;}i=$z;BN(i,i,i,1.0);if(a.ei===null){BW();if(a.iQ){j=(a.hB+b)/8.0;k=Bm(j*3.1415927410125732);Br( -Bm(DG(j)*3.1415927410125732)*0.30000001192092896,Bm(DG(j)*3.1415927410125732*2.0)*0.4000000059604645, -k*0.4000000059604645);}Br(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bq(45.0,0.0,1.0,0.0);V(32826);if(a.iQ){j=(a.hB+b)/8.0;k=Bm(j*j*3.1415927410125732);Bq(Bm(DG(j)*3.1415927410125732)*70.0,0.0,1.0,0.0);Bq( -k
*20.0,0.0,0.0,1.0);}f=3553;d=a.cq.bi;e=a.cq.e.rW;l=M8(a.cq.e);$p=2;continue _;}BW();if(a.iQ){j=(a.hB+b)/8.0;k=Bm(j*3.1415927410125732);Br( -Bm(DG(j)*3.1415927410125732)*0.4000000059604645,Bm(DG(j)*3.1415927410125732*2.0)*0.20000000298023224, -k*0.20000000298023224);}Br(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bq(45.0,0.0,1.0,0.0);V(32826);if(a.iQ){j=(a.hB+b)/8.0;k=Bm(j*j*3.1415927410125732);m=Bm(DG(j)*3.1415927410125732);Bq( -k*20.0,0.0,1.0,0.0);b= -m;Bq(b*20.0,
0.0,0.0,1.0);Bq(b*80.0,1.0,0.0,0.0);}Co(0.4000000059604645,0.4000000059604645,0.4000000059604645);if(a.ei.bs<256){J();if(!A39.data[a.ei.bs].dO()){f=3553;d=a.cq.bi;e=B(171);$p=5;continue _;}}if(a.ei.bs>=256){f=3553;d=a.cq.bi;e=B(222);$p=3;continue _;}f=3553;d=a.cq.bi;e=B(171);$p=4;continue _;case 2:$z=Zy(d,e,l);if(C()){break _;}g=$z;Ce(f,g);Br((-1.0),3.5999999046325684,3.5);Bq(120.0,0.0,0.0,1.0);Bq(200.0,1.0,0.0,0.0);Bq((-135.0),0.0,1.0,0.0);Co(1.0,1.0,1.0);Br(5.599999904632568,0.0,0.0);n=Pg(A5F,a.cq.e);Co(1.0,
1.0,1.0);AGn(n);By();X(32826);Dr();return;case 3:$z=ACG(d,e);if(C()){break _;}g=$z;Ce(f,g);Bv();e=A35;m=(((Dk(a.ei)%16|0)*16|0)+0|0)/256.0;o=(((Dk(a.ei)%16|0)*16|0)+16|0)/256.0;p=(((Dk(a.ei)/16|0)*16|0)+0|0)/256.0;q=(((Dk(a.ei)/16|0)*16|0)+16|0)/256.0;V(32826);Br(-0.0,(-0.30000001192092896),0.0);Co(1.5,1.5,1.5);Bq(50.0,0.0,1.0,0.0);Bq(335.0,0.0,0.0,1.0);Br((-0.9375),(-0.0625),0.0);Bu(e);CX(e,0.0,0.0,1.0);r=o;s=q;F(e,0.0,0.0,0.0,r,s);t=m;F(e,1.0,0.0,0.0,t,s);u=p;F(e,1.0,1.0,0.0,t,u);F(e,0.0,1.0,0.0,r,u);Bn(e);Bu(e);CX(e,
0.0,0.0,(-1.0));F(e,0.0,1.0,(-0.0625),r,u);F(e,1.0,1.0,(-0.0625),t,u);F(e,1.0,0.0,(-0.0625),t,s);F(e,0.0,0.0,(-0.0625),r,s);Bn(e);Bu(e);CX(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;F(e,x,0.0,(-0.0625),y,s);F(e,x,0.0,0.0,y,s);F(e,x,1.0,0.0,y,u);F(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Bn(e);Bu(e);CX(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;F(e,x,1.0,(-0.0625),y,u);F(e,x,1.0,0.0,y,u);F(e,x,0.0,0.0,y,s);F(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Bn(e);Bu(e);CX(e,
0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;F(e,0.0,z,0.0,r,ba);F(e,1.0,z,0.0,t,ba);F(e,1.0,z,(-0.0625),t,ba);F(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Bn(e);Bu(e);CX(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;F(e,1.0,x,0.0,t,y);F(e,0.0,x,0.0,r,y);F(e,0.0,x,(-0.0625),r,y);F(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Bn(e);X(32826);By();X(32826);Dr();return;case 4:$z=ACG(d,e);if(C()){break _;}g=$z;Ce(f,g);Bv();e=A35;m=(((Dk(a.ei)%16|0)*16|0)+0|0)/256.0;o=
(((Dk(a.ei)%16|0)*16|0)+16|0)/256.0;p=(((Dk(a.ei)/16|0)*16|0)+0|0)/256.0;q=(((Dk(a.ei)/16|0)*16|0)+16|0)/256.0;V(32826);Br(-0.0,(-0.30000001192092896),0.0);Co(1.5,1.5,1.5);Bq(50.0,0.0,1.0,0.0);Bq(335.0,0.0,0.0,1.0);Br((-0.9375),(-0.0625),0.0);Bu(e);CX(e,0.0,0.0,1.0);r=o;s=q;F(e,0.0,0.0,0.0,r,s);t=m;F(e,1.0,0.0,0.0,t,s);u=p;F(e,1.0,1.0,0.0,t,u);F(e,0.0,1.0,0.0,r,u);Bn(e);Bu(e);CX(e,0.0,0.0,(-1.0));F(e,0.0,1.0,(-0.0625),r,u);F(e,1.0,1.0,(-0.0625),t,u);F(e,1.0,0.0,(-0.0625),t,s);F(e,0.0,0.0,(-0.0625),r,s);Bn(e);Bu(e);CX(e,
(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;F(e,x,0.0,(-0.0625),y,s);F(e,x,0.0,0.0,y,s);F(e,x,1.0,0.0,y,u);F(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Bn(e);Bu(e);CX(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;F(e,x,1.0,(-0.0625),y,u);F(e,x,1.0,0.0,y,u);F(e,x,0.0,0.0,y,s);F(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Bn(e);Bu(e);CX(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;F(e,0.0,z,0.0,r,ba);F(e,1.0,z,0.0,t,ba);F(e,
1.0,z,(-0.0625),t,ba);F(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Bn(e);Bu(e);CX(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;F(e,1.0,x,0.0,t,y);F(e,0.0,x,0.0,r,y);F(e,0.0,x,(-0.0625),r,y);F(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Bn(e);X(32826);By();X(32826);Dr();return;case 5:$z=ACG(d,e);if(C()){break _;}g=$z;Ce(f,g);FZ(a.xu,A39.data[a.ei.bs]);By();X(32826);Dr();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function XL(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:X(3008);if(a.cq.e.cw<=0){c=a.cq.w.bc;$p=1;continue _;}c=a.cq.bi;d=B(171);$p=2;continue _;case 1:$z=ACK(c);if(C()){break _;}e=$z;if(!e){d=a.cq.e;c=A46;$p=3;continue _;}e=I(a.cq.e.c);f=I(a.cq.e.j);g=I(a.cq.e.d);c=
a.cq.bi;d=B(171);$p=4;continue _;case 2:$z=ACG(c,d);if(C()){break _;}e=$z;Ce(3553,e);Bv();c=A35;BN(1.0,1.0,1.0,0.8999999761581421);V(3042);C0(770,771);e=0;while(e<2){BW();J();f=A5G.W+(e*16|0)|0;g=(f&15)<<4;f=f&240;h=g;i=h/256.0;h=(h+15.989999771118164)/256.0;j=f;k=j/256.0;j=(j+15.989999771118164)/256.0;f=(e*2|0)-1|0;Br( -f*0.23999999463558197,(-0.30000001192092896),0.0);Bq(f*10.0,0.0,1.0,0.0);Bu(c);l=h;m=j;F(c,(-0.5),(-0.5),(-0.5),l,m);n=i;F(c,0.5,(-0.5),(-0.5),n,m);m=k;F(c,0.5,0.5,(-0.5),n,m);F(c,(-0.5),0.5,
(-0.5),l,m);Bn(c);By();e=e+1|0;}BN(1.0,1.0,1.0,1.0);X(3042);c=a.cq.w.bc;$p=1;continue _;case 3:$z=ABX(d,c);if(C()){break _;}e=$z;if(!e){V(3008);return;}c=a.cq.bi;d=B(223);$p=6;continue _;case 4:$z=ACG(c,d);if(C()){break _;}o=$z;Ce(3553,o);c=a.cq.w;$p=5;case 5:$z=X9(c,e,f,g);if(C()){break _;}p=$z;J();if(A39.data[p]===null){d=a.cq.e;c=A46;$p=3;continue _;}e=A39.data[p].bZ(2);Bv();c=A35;d=a.cq.e;$p=8;continue _;case 6:$z=ACG(c,d);if(C()){break _;}e=$z;Ce(3553,e);Bv();c=A35;d=a.cq.e;$p=7;case 7:$z=Zd(d,b);if(C())
{break _;}h=$z;BN(h,h,h,0.5);V(3042);C0(770,771);BW();h= -a.cq.e.q/64.0;i=a.cq.e.E/64.0;Bu(c);q=4.0+h;l=4.0+i;F(c,(-1.0),(-1.0),(-0.5),q,l);r=0.0+h;F(c,1.0,(-1.0),(-0.5),r,l);l=0.0+i;F(c,1.0,1.0,(-0.5),r,l);F(c,(-1.0),1.0,(-0.5),q,l);Bn(c);By();BN(1.0,1.0,1.0,1.0);X(3042);V(3008);return;case 8:Zd(d,b);if(C()){break _;}BN(0.10000000149011612,0.10000000149011612,0.10000000149011612,0.5);BW();i=e%16|0;j=i/256.0-0.0078125;i=(i+15.989999771118164)/256.0+0.0078125;k=e/16|0;s=k/256.0-0.0078125;h=(k+15.989999771118164)
/256.0+0.0078125;Bu(c);q=i;l=h;F(c,(-1.0),(-1.0),(-0.5),q,l);r=j;F(c,1.0,(-1.0),(-0.5),r,l);l=s;F(c,1.0,1.0,(-0.5),r,l);F(c,(-1.0),1.0,(-0.5),q,l);Bn(c);By();BN(1.0,1.0,1.0,1.0);d=a.cq.e;c=A46;$p=3;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AD9(a){var b,c,d,e;a.pt=a.ib;if(a.iQ){a.hB=a.hB+1|0;if(a.hB==8){a.hB=0;a.iQ=0;}}b=DE(a.cq.e.F);c=0.4000000059604645;d=(b!==a.ei?0.0:1.0)-a.ib;e=(-0.4000000059604645);if(d>=e)e=d;if(e<=c)c=e;a.ib=a.ib+c;if(a.ib<0.10000000149011612)a.ei=b;}
function AB0(a){a.ib=0.0;}
function MS(a){a.hB=(-1);a.iQ=1;}
function AHK(a){a.ib=0.0;}
function P(){var a=this;E.call(a);a.W=0;a.b=0;a.oD=0.0;a.mv=0.0;a.cM=0.0;a.cm=0.0;a.cL=0.0;a.cP=0.0;a.ch=0.0;a.cQ=0.0;a.f0=null;a.A1=0.0;a.bR=null;}
var A5H=null;var A5I=null;var A5J=null;var A5K=null;var A5L=null;var A5M=null;var A5N=null;var A5O=null;var A5P=null;var A39=null;var A5Q=null;var A5R=null;var A5S=null;var A5T=null;var A5U=null;var A4d=null;var A3_=null;var A4a=null;var A4h=null;var A4j=null;var A4p=null;var A3$=null;var A5c=null;var A5V=null;var A5d=null;var A5W=null;var A4u=null;var A4v=null;var A4A=null;var A4z=null;var A4y=null;var A4k=null;var A4l=null;var A4w=null;var A4n=null;var A5X=null;var A5Y=null;var A5Z=null;var A50=null;var A51
=null;var A52=null;var A53=null;var A54=null;var A55=null;var A56=null;var A57=null;var A58=null;var A59=null;var A5$=null;var A4x=null;var A5_=null;var A4q=null;var A4r=null;var A4s=null;var A4t=null;var A4C=null;var A4B=null;var A4b=null;var A4c=null;var A4i=null;var A4E=null;var A4D=null;var A4o=null;var A4F=null;var A4m=null;var A5G=null;var A6a=null;var A6b=null;var A6c=null;var A6d=null;var A6e=null;var A6f=null;var A6g=null;var A6h=null;var A6i=null;var A6j=null;var A6k=null;var A6l=null;var A6m=null;var A5s
=null;var A6n=null;var A6o=null;function J(){J=Bt(P);AOD();}
function A6p(a,b){var c=new P();Dw(c,a,b);return c;}
function I0(a,b,c){var d=new P();CS(d,a,b,c);return d;}
function Dw(a,b,c){var d,e,f;J();a.f0=A5H;a.A1=1.0;if(A39.data[b]!==null){c=new Cq;d=new Bc;Ba(d);Bl(c,O(EY(H(EY(H(Bd(H(d,B(224)),b),B(225)),A39.data[b]),B(226)),a)));M(c);}a.bR=c;A39.data[b]=a;a.b=b;Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);A5R.data[b]=a.dy();e=A5S;f=!a.dy()?0:255;e.data[b]=f;A5T.data[b]=0;}
function CS(a,b,c,d){J();Dw(a,b,d);a.W=c;}
function BG(a,b){a.f0=b;return a;}
function FD(a,b){A5S.data[a.b]=b;return a;}
function FO(a,b){A5U.data[a.b]=15.0*b|0;return a;}
function C6(a,b){a.mv=b*3.0;return a;}
function AYh(a){return 1;}
function APz(a){return 0;}
function BB(a,b){var c;a.oD=b;c=a.mv;b=b*5.0;if(c<b)a.mv=b;return a;}
function Ey(a,b){A5Q.data[a.b]=b;}
function Bj(a,b,c,d,e,f,g){a.cM=b;a.cm=c;a.cL=d;a.cP=e;a.ch=f;a.cQ=g;}
function AAy(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.q1(c,d,e);if(C()){break _;}f=$z;return f;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ABL(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!f&&a.cm>0.0)c=1;else if(f==1&&a.ch<1.0)c=1;else if(f==2&&a.cL>0.0)c=1;else if(f==3&&a.cQ<1.0)c=1;else if(f==4&&a.cM>0.0)c=1;else{if(f!=5)break a;if(a.cP>=1.0)break a;c=1;}return c;}$p=1;case 1:$z=b.j9(c,d,e);if(C()){break _;}c=$z;return c?0:1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function XA(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ea(c,d,e);if(C()){break _;}c=$z;return a.em(f,c);default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AW3(a,b,c){return a.bZ(b);}
function AOT(a,b){return a.W;}
function Jq(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.cM;h=d;i=h+a.cm;j=e;return Dy(g,i,j+a.cL,f+a.cP,h+a.ch,j+a.cQ);}
function AGm(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.gK(b,c,d,e);if(C()){break _;}h=$z;if(h!==null&&Kg(f,h))U(g,h);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function Le(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.cM;h=d;i=h+a.cm;j=e;return Dy(g,i,j+a.cL,f+a.cP,h+a.ch,j+a.cQ);}
function AVC(a){return 1;}
function AWr(a,b,c){return a.nN();}
function AUF(a){return 1;}
function AC0(a,b,c,d,e,f){return;}
function AJN(a,b,c,d,e,f){return;}
function VT(a,b,c,d,e,f){return;}
function UH(a,b,c,d,e,f){return;}
function AUN(a){return 10;}
function WN(a,b,c,d,e){return;}
function VP(a,b,c,d,e){return;}
function AQM(a,b){return 1;}
function ANH(a,b,c){return a.b;}
function WU(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.oD<0.0)c=0.0;else{if(K3(b,a)){$p=1;continue _;}c=1.0/a.oD/100.0;}return c;case 1:$z=AFJ(b,a);if(C()){break _;}c=$z;return c/a.oD/30.0;default:Es();}}CM().s(a,b,c,$p);}
function Uc(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=1.0;$p=1;case 1:a.DJ(b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AAm(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.d_(b.n);i=0;j=0.15000000596046448;k=c;l=d;m=e;while(i<h){if(L(b.n)<=g){n=a.dq(f,b.n);if(n>0){o=Ga(b,k+L(b.n)*0.699999988079071+j,l+L(b.n)*0.699999988079071+j,m+L(b.n)*0.699999988079071+j,I1(n,1));o.gr=10;$p=1;continue _;}}i=i+1|0;}return;case 1:AIS(b,
o);if(C()){break _;}while(true){i=i+1|0;if(i>=h)break;if(L(b.n)>g)continue;n=a.dq(f,b.n);if(n<=0)continue;else{o=Ga(b,k+L(b.n)*0.699999988079071+j,l+L(b.n)*0.699999988079071+j,m+L(b.n)*0.699999988079071+j,I1(n,1));o.gr=10;continue _;}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ARX(a,b){return a.mv/5.0;}
function IC(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;h= -c;i= -d;j= -e;b=C3(f,h,i,j);f=C3(g,h,i,j);k=I_(b,f,a.cM);l=I_(b,f,a.cP);m=Ik(b,f,a.cm);n=Ik(b,f,a.ch);o=IY(b,f,a.cL);p=IY(b,f,a.cQ);if(!OC(a,k))k=null;if(!OC(a,l))l=null;if(!Tq(a,m))m=null;if(!Tq(a,n))n=null;if(!OU(a,o))o=null;if(!OU(a,p))p=null;q=null;if(k!==null)q=k;if(l!==null&&!(q!==null&&Di(b,l)>=Di(b,q)))q=l;if(m!==null&&!(q!==null&&Di(b,m)>=Di(b,q)))q=m;if(n!==null&&!(q!==null&&Di(b,n)>=Di(b,q)))q=n;if(o!==null&&!(q!==null&&Di(b,o)>=Di(b,q)))q=
o;if(p!==null&&!(q!==null&&Di(b,p)>=Di(b,q)))q=p;if(q===null)return null;r=(-1);if(q===k)r=4;if(q===l)r=5;if(q===m)r=0;if(q===n)r=1;if(q===o)r=2;if(q===p)r=3;return ASm(c,d,e,r,C3(q,c,d,e));}
function OC(a,b){return b===null?0:b.v>=a.cm&&b.v<=a.ch&&b.s>=a.cL&&b.s<=a.cQ?1:0;}
function Tq(a,b){return b===null?0:b.t>=a.cM&&b.t<=a.cP&&b.s>=a.cL&&b.s<=a.cQ?1:0;}
function OU(a,b){return b===null?0:b.t>=a.cM&&b.t<=a.cP&&b.v>=a.cm&&b.v<=a.ch?1:0;}
function ALk(a,b,c,d,e){return;}
function AOF(a){return 0;}
function Z7(a,b,c,d,e){return 1;}
function ABY(a,b,c,d,e,f){return 0;}
function AEG(a,b,c,d,e,f){return;}
function UA(a,b,c,d,e,f){return;}
function V0(a,b,c,d,e,f){return;}
function ABo(a,b,c,d,e,f,g){return;}
function AKs(a,b,c,d,e){return;}
function AYu(a,b,c,d,e){return 16777215;}
function AOD(){var b,c;A5H=G2(B(227),1.0,1.0);A5I=G2(B(228),1.0,1.0);A5J=G2(B(229),1.0,1.0);A5K=G2(B(230),1.0,1.0);A5L=G2(B(227),1.0,1.0);A5M=G2(B(227),1.0,1.5);A5N=A0d(B(227),1.0,1.0);A5O=G2(B(231),1.0,1.0);A5P=A1O(B(232),1.0,1.0);A39=N(P,256);A5Q=$rt_createBooleanArray(256);A5R=$rt_createBooleanArray(256);A5S=$rt_createIntArray(256);A5T=$rt_createBooleanArray(256);A5U=$rt_createIntArray(256);A4d=BG(C6(BB(A09(1,1),1.5),10.0),A5L);A3_=BG(BB(A1p(2),0.6000000238418579),A5K);A4a=BG(BB(A0i(3,2),0.5),A5J);A4h=BG(C6(BB(I0(4,
16,A6q),2.0),10.0),A5L);A4j=BG(C6(BB(I0(5,4,A6r),2.0),5.0),A5I);A4p=BG(BB(A13(6,15),0.0),A5K);A3$=BG(C6(BB(I0(7,17,A6q),(-1.0)),6000000.0),A5L);A5c=FD(BB(AN0(8,A46),100.0),3);A5V=FD(BB(AQf(9,A46),100.0),3);A5d=FD(FO(BB(AN0(10,A47),0.0),1.0),255);A5W=FD(FO(BB(AQf(11,A47),100.0),1.0),255);A4u=BG(BB(A1o(12,18),0.5),A5P);A4v=BG(BB(A1t(13,19),0.6000000238418579),A5J);A4A=BG(C6(BB(PG(14,32),3.0),5.0),A5L);A4z=BG(C6(BB(PG(15,33),3.0),5.0),A5L);A4y=BG(C6(BB(PG(16,34),3.0),5.0),A5L);A4k=BG(BB(A2e(17),2.0),A5I);A4l=BG(FD(BB(A0J(18,
52),0.20000000298023224),1),A5K);A4w=BG(BB(A04(19),0.6000000238418579),A5K);A4n=BG(BB(A01(20,49,A6s,0),0.30000001192092896),A5N);A5X=null;A5Y=null;A5Z=null;A50=null;A51=null;A52=null;A53=null;A54=null;A55=null;A56=null;A57=null;A58=null;A59=null;A5$=null;A4x=BG(BB(I0(35,64,A6t),0.800000011920929),A5O);A5_=null;A4q=BG(BB(AUm(37,13),0.0),A5K);A4r=BG(BB(AUm(38,12),0.0),A5K);A4s=FO(BG(BB(ANF(39,29),0.0),A5K),0.125);A4t=BG(BB(ANF(40,28),0.0),A5K);A4C=BG(C6(BB(Z3(41,39),3.0),10.0),A5M);A4B=BG(C6(BB(Z3(42,38),5.0),
10.0),A5M);A4b=BG(C6(BB(AYv(43,1),2.0),10.0),A5L);A4c=BG(C6(BB(AYv(44,0),2.0),10.0),A5L);A4i=BG(C6(BB(I0(45,7,A6q),2.0),10.0),A5L);A4E=BG(BB(A0K(46,8),0.0),A5K);A4D=BG(BB(A0u(47,35),1.5),A5I);A4o=BG(C6(BB(I0(48,36,A6q),2.0),10.0),A5L);A4F=BG(C6(BB(A1e(49,37),10.0),20.0),A5L);A4m=BG(FO(BB(A06(50,80),0.0),0.9375),A5I);A5G=BG(FO(BB(A2h(51,31),0.0),1.0),A5I);A6a=BG(BB(A2b(52,65),5.0),A5M);A6b=AZq(53,A4j);A6c=BG(BB(A0k(54),2.5),A5I);A6d=BG(BB(A1w(55,62),0.5),A5M);A6e=BG(C6(BB(PG(56,50),3.0),5.0),A5L);A6f=BG(C6(BB(Z3(57,
40),5.0),10.0),A5M);A6g=BG(BB(A1g(58),2.5),A5I);A6h=BG(BB(A15(59,88),0.0),A5K);A6i=BG(BB(A1E(60),0.6000000238418579),A5J);A6j=BG(BB(AVd(61,0),3.5),A5L);A6k=FO(BG(BB(AVd(62,1),3.5),A5L),0.875);b=new RF;Bw();ACF(b,63,K(HN),A6u.cx);A6l=BG(BB(b,1.0),A5I);A6m=BG(BB(A0o(64),3.0),A5I);A5s=BG(BB(A1W(65,83),0.4000000059604645),A5I);A6n=BG(BB(A0V(66,128),1.0),A5M);A6o=AZq(67,A4h);c=0;while(c<256){if(A39.data[c]!==null)A6v.data[c]=A0j(c-256|0);c=c+1|0;}}
function OI(){}
function AEe(){var a=this;Fn.call(a);a.eu=null;a.p=0;}
function Ck(){var a=new AEe();APc(a);return a;}
function APc(a){a.eu=N(E,10);}
function ADP(a,b){var c;if(a.eu.data.length<b){c=a.eu.data.length>=1073741823?2147483647:DV(b,DV(a.eu.data.length*2|0,5));a.eu=Rs(a.eu,c);}}
function Z(a,b){Jr(a,b);return a.eu.data[b];}
function CZ(a){return a.p;}
function Oh(a,b,c){var d;Jr(a,b);d=a.eu.data[b];a.eu.data[b]=c;return d;}
function U(a,b){var c,d;ADP(a,a.p+1|0);c=a.eu.data;d=a.p;a.p=d+1|0;c[d]=b;a.d8=a.d8+1|0;return 1;}
function Eo(a,b){var c,d,e,f;Jr(a,b);c=a.eu.data[b];a.p=a.p-1|0;while(b<a.p){d=a.eu.data;e=a.eu.data;f=b+1|0;d[b]=e[f];b=f;}a.eu.data[a.p]=null;a.d8=a.d8+1|0;return c;}
function GU(a,b){var c;c=WQ(a,b);if(c<0)return 0;Eo(a,c);return 1;}
function DB(a){Vu(a.eu,0,a.p,null);a.p=0;}
function Jr(a,b){var c;if(b>=0&&b<a.p)return;c=new BT;Q(c);M(c);}
function Dh(){}
function Qn(){E.call(this);this.xW=null;}
function AK4(a){Cx(a.xW,PL(0,1,null,null));}
function APo(a){AK4(a);}
function Qm(){var a=this;E.call(a);a.AX=null;a.Bb=null;}
function AK2(a){Cx(a.AX,PL(0,0,null,a.Bb.result));}
function AM_(a){AK2(a);}
function Ql(){E.call(this);this.Ad=null;}
function AMt(a){Cx(a.Ad,PL(1,0,B(233),null));}
function ARp(a){AMt(a);}
function Qk(){E.call(this);this.yo=null;}
function AE6(a,b){var c,d,e,f,g,h,i;c=a.yo.result;d=AYR();e=N(Cp,1).data;e[0]=B(234);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function AIl(a,b){AE6(a,b);}
function AWD(a,b){AIl(a,b);}
function Py(){E.call(this);}
var A5m=null;function A6w(){var a=new Py();VC(a);return a;}
function VC(a){return;}
function AAN(){A5m=CY();BK(A5m,B(18),AS8());}
function Cq(){B5.call(this);}
function A6x(){var a=new Cq();ANT(a);return a;}
function ANT(a){Q(a);}
function Rr(){Cq.call(this);this.Ei=null;}
function El(){B5.call(this);}
function A2m(){var a=new El();AOi(a);return a;}
function AOi(a){Q(a);}
function WO(){E.call(this);}
function A6y(){var a=new WO();ARe(a);return a;}
function ARe(a){return;}
function EC(){var a=this;E.call(a);a.ll=0;a.be=0;a.cb=0;a.kj=0;}
function A6z(a){var b=new EC();Jb(b,a);return b;}
function Jb(a,b){a.kj=(-1);a.ll=b;a.cb=b;}
function AOR(a){return a.ll;}
function AXT(a){return a.be;}
function D_(a,b){var c,d;if(b>=0&&b<=a.cb){a.be=b;if(b<a.kj)a.kj=0;return a;}c=new Cq;d=new Bc;Ba(d);Bl(c,O(H(Bd(H(Bd(H(d,B(235)),b),B(236)),a.cb),B(237))));M(c);}
function ASJ(a){return a.cb;}
function Lf(a,b){var c,d;if(b>=0&&b<=a.ll){if(a.kj>b)a.kj=(-1);a.cb=b;if(a.be>a.cb)a.be=a.cb;return a;}c=new Cq;d=new Bc;Ba(d);Bl(c,O(H(Bd(H(Bd(H(d,B(238)),b),B(236)),a.ll),B(237))));M(c);}
function D3(a){a.be=0;a.cb=a.ll;a.kj=(-1);return a;}
function FC(a){a.cb=a.be;a.be=0;a.kj=(-1);return a;}
function Ci(a){return a.cb-a.be|0;}
function ED(a){return a.be>=a.cb?0:1;}
function Ki(){EC.call(this);}
function YZ(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BT;i=new Bc;Ba(i);Bl(h,O(Bd(H(Bd(H(i,B(239)),g),B(240)),f)));M(h);}if(Ci(a)<d){h=new Fz;Q(h);M(h);}if(d<0){h=new BT;i=new Bc;Ba(i);Bl(h,O(H(Bd(H(i,B(241)),d),B(242))));M(h);}g=a.be;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=OM(a,g);j=j+1|0;c=k;g=f;}a.be=a.be+d|0;return a;}}b=b.data;i=new BT;h=new Bc;Ba(h);Bl(i,O(H(Bd(H(Bd(H(h,B(243)),c),B(236)),b.length),B(21))));M(i);}
function RT(a,b){return YZ(a,b,0,b.data.length);}
function J4(a){D3(a);return a;}
function Qr(a){FC(a);return a;}
function Ns(a,b){Lf(a,b);return a;}
function AAs(){var a=this;E.call(a);a.C=null;a.cc=0;a.eP=0;a.di=0;}
function AXN(a){var b=new AAs();ANx(b,a);return b;}
function IJ(){var a=new AAs();ANe(a);return a;}
function ANx(a,b){a.cc=(-1);a.eP=0;a.di=0;a.C=b;}
function ANe(a){a.cc=(-1);a.eP=0;a.di=0;}
function AHg(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cc=f;$p=1;case 1:AIB(a,b,c,d,e);if(C()){break _;}a.cc=(-1);return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AIB(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b.dO();g=a.C;$p=1;case 1:b.vj(g,c,d,e);if(C()){break _;}if(!f){$p=2;continue _;}if(f==4){$p=3;continue _;}if(f==1){$p=4;continue _;}if(f==6){$p=5;continue _;}if(f==2){$p=6;continue _;}if(f==3){$p=7;continue _;}if(f==5){$p=8;continue _;}if(f==8){$p=9;continue _;}if(f==7){$p=10;continue _;}if(f==9){$p=11;continue _;}if(f==10){$p=12;continue _;}if
(f!=11)return 0;$p=13;continue _;case 2:$z=Xv(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 3:$z=XF(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 4:$z=WP(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 5:$z=AGx(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 6:$z=AID(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 7:$z=VG(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 8:$z=Y2(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 9:$z=AEu(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 10:$z=AFw(a,b,c,d,e);if(C()){break _;}c
=$z;return c;case 11:$z=AHL(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 12:$z=ADx(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 13:$z=AA4(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AID(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.C;$p=1;case 1:$z=f.ea(c,d,e);if(C()){break _;}g=$z;Bv();f=A35;h=a.C;$p=2;case 2:$z=b.zo(h,c,d,e);if(C()){break _;}i=$z;if(A5U.data[b.b]>0)i=1.0;Cf(f,i,i,i);if(g==1)FM(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if(g==2)FM(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,
0.0);else if(g==3)FM(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(g!=4)FM(a,b,c,d,e,0.0,0.0);else FM(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function VG(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:Bv();f=A35;g=b.bZ(0);if(a.cc>=0)g=a.cc;h=a.C;$p=1;case 1:$z=b.zo(h,c,d,e);if(C()){break _;}i=$z;Cf(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=i+15.989999771118164;p=o/256.0;q=1.399999976158142;b=a.C;g=d-1|0;$p=2;case 2:$z=b.j9(c,g,e);if(C()){break _;}j=$z;if(j){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;F(f,x,bb,bc,m,n);bd=d+0|0;F(f,s,bd,bc,m,p);be=e+0|0;F(f,s,bd,be,l,p);F(f,x,bb,be,l,n);F(f,y,bb,be,
m,n);F(f,t,bd,be,m,p);F(f,t,bd,bc,l,p);F(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;F(f,t,bb,ba,m,y);F(f,t,bd,w,m,s);x=c+0|0;F(f,x,bd,w,l,s);F(f,x,bb,ba,l,y);F(f,x,bb,z,m,y);F(f,x,bd,v,m,s);F(f,t,bd,v,l,s);F(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;F(f,bg,bb,be,l,y);F(f,v,bd,be,l,s);F(f,v,bd,bc,m,s);F(f,bg,bb,bc,m,y);F(f,bh,bb,bc,l,y);F(f,z,bd,bc,l,s);F(f,z,bd,be,m,s);F(f,bh,bb,be,m,y);F(f,x,bb,w,l,n);F(f,x,bd,bf,l,p);F(f,t,bd,bf,m,p);F(f,t,bb,w,m,n);F(f,
t,bb,r,l,n);F(f,t,bd,ba,l,p);F(f,x,bd,ba,m,p);F(f,x,bb,r,m,n);return 1;}b=A5G;h=a.C;$p=3;case 3:$z=ABi(b,h,c,g,e);if(C()){break _;}g=$z;if(g){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;F(f,x,bb,bc,m,n);bd=d+0|0;F(f,s,bd,bc,m,p);be=e+0|0;F(f,s,bd,be,l,p);F(f,x,bb,be,l,n);F(f,y,bb,be,m,n);F(f,t,bd,be,m,p);F(f,t,bd,bc,l,p);F(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;F(f,t,bb,ba,m,y);F(f,t,bd,w,m,s);x=c+0|0;F(f,x,bd,w,l,s);F(f,x,bb,ba,l,y);F(f,
x,bb,z,m,y);F(f,x,bd,v,m,s);F(f,t,bd,v,l,s);F(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;F(f,bg,bb,be,l,y);F(f,v,bd,be,l,s);F(f,v,bd,bc,m,s);F(f,bg,bb,bc,m,y);F(f,bh,bb,bc,l,y);F(f,z,bd,bc,l,s);F(f,z,bd,be,m,s);F(f,bh,bb,be,m,y);F(f,x,bb,w,l,n);F(f,x,bd,bf,l,p);F(f,t,bd,bf,m,p);F(f,t,bb,w,m,n);F(f,t,bb,r,l,n);F(f,t,bd,ba,l,p);F(f,x,bd,ba,m,p);F(f,x,bb,r,m,n);return 1;}bi=0.20000000298023224;bj=0.0625;if((((c+d|0)+e|0)&1)!=1){ba=l;bb=m;x=n;z=p;}else{x=(k+16|0)/256.0;z=(o
+16.0)/256.0;ba=l;bb=m;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){r=ba;ba=bb;bb=r;}b=A5G;h=a.C;g=c-1|0;$p=4;case 4:$z=ABi(b,h,g,d,e);if(C()){break _;}g=$z;if(g){w=c+bi;s=d+q+bj;t=e+1|0;F(f,w,s,t,ba,x);u=c+0|0;v=(d+0|0)+bj;F(f,u,v,t,ba,z);r=e+0|0;F(f,u,v,r,bb,z);F(f,w,s,r,bb,x);F(f,w,s,r,bb,x);F(f,u,v,r,bb,z);F(f,u,v,t,ba,z);F(f,w,s,t,ba,x);}b=A5G;h=a.C;j=c+1|0;$p=5;case 5:$z=ABi(b,h,j,d,e);if(C()){break _;}g=$z;if(g){r=j-bi;w=d+q+bj;s=e+0|0;F(f,r,w,s,bb,x);t=j-0|0;u=(d+0|0)+bj;F(f,t,u,s,bb,z);v=e+1|0;F(f,t,
u,v,ba,z);F(f,r,w,v,ba,x);F(f,r,w,v,ba,x);F(f,t,u,v,ba,z);F(f,t,u,s,bb,z);F(f,r,w,s,bb,x);}b=A5G;h=a.C;g=e-1|0;$p=6;case 6:$z=ABi(b,h,c,d,g);if(C()){break _;}g=$z;if(g){r=c+0|0;w=d+q+bj;s=e+bi;F(f,r,w,s,ba,x);t=(d+0|0)+bj;u=e+0|0;F(f,r,t,u,ba,z);v=j;F(f,v,t,u,bb,z);F(f,v,w,s,bb,x);F(f,v,w,s,bb,x);F(f,v,t,u,bb,z);F(f,r,t,u,ba,z);F(f,r,w,s,ba,x);}b=A5G;h=a.C;bk=e+1|0;$p=7;case 7:$z=ABi(b,h,c,d,bk);if(C()){break _;}g=$z;if(g){t=j;u=d+q+bj;v=bk-bi;F(f,t,u,v,bb,x);r=(d+0|0)+bj;w=bk-0|0;F(f,t,r,w,bb,z);s=c+0|0;F(f,
s,r,w,ba,z);F(f,s,u,v,ba,x);F(f,s,u,v,ba,x);F(f,s,r,w,ba,z);F(f,t,r,w,bb,z);F(f,t,u,v,bb,x);}b=A5G;h=a.C;d=d+1|0;$p=8;case 8:$z=ABi(b,h,c,d,e);if(C()){break _;}g=$z;if(g){r=c+0.5;t=r+0.5;u=r-0.5;r=e+0.5;w=r+0.5;r=r-0.5;if(((c+d|0)+e|0)&1){s=c+0|0;t=d+(-0.20000000298023224);F(f,s,t,w,m,n);u=d+0|0;F(f,s,u,r,m,p);v=j;F(f,v,u,r,l,p);F(f,v,t,w,l,n);x=(k+16|0)/256.0;z=(o+16.0)/256.0;F(f,v,t,r,m,x);F(f,v,u,w,m,z);F(f,s,u,w,l,z);F(f,s,t,r,l,x);}else{v=d+(-0.20000000298023224);x=e+0|0;F(f,u,v,x,m,n);z=d+0|0;F(f,t,z,
x,m,p);r=bk;F(f,t,z,r,l,p);F(f,u,v,r,l,n);w=(k+16|0)/256.0;s=(o+16.0)/256.0;F(f,t,v,r,m,w);F(f,u,z,r,m,s);F(f,u,z,x,l,s);F(f,t,v,x,l,w);}}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function Y2(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A35;g=b.bZ(0);if(a.cc>=0)g=a.cc;h=a.C;$p=1;case 1:$z=b.zo(h,c,d,e);if(C()){break _;}i=$z;Cf(f,i,i,i);j=(g&15)<<4;k=j+16|0;l=g&240;if((((c+d|0)+e|0)&1)
!=1){g=j;j=k;k=g;}i=j;m=i/256.0;n=(i+15.989999771118164)/256.0;i=l;o=i/256.0;p=(i+15.989999771118164)/256.0;q=k;r=q/256.0;s=(q+15.989999771118164)/256.0;t=0.125;q=0.05000000074505806;b=a.C;k=c-1|0;$p=2;case 2:$z=b.j9(k,d,e);if(C()){break _;}k=$z;if(k){u=c+q;v=(d+1|0)+t;w=(e+1|0)+t;F(f,u,v,w,m,o);x=(d+0|0)-t;F(f,u,x,w,m,p);w=(e+0|0)-t;F(f,u,x,w,n,p);F(f,u,v,w,n,o);}b=a.C;l=c+1|0;$p=3;case 3:$z=b.j9(l,d,e);if(C()){break _;}k=$z;if(k){u=l-q;x=(d+0|0)-t;w=(e+1|0)+t;F(f,u,x,w,n,p);v=(d+1|0)+t;F(f,u,v,w,n,o);w=(e
+0|0)-t;F(f,u,v,w,m,o);F(f,u,x,w,m,p);}b=a.C;k=e-1|0;$p=4;case 4:$z=b.j9(c,d,k);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+0|0)-t;x=e+q;F(f,u,m,x,s,p);w=(d+1|0)+t;F(f,u,w,x,s,o);u=(c+0|0)-t;F(f,u,w,x,r,o);F(f,u,m,x,r,p);}b=a.C;e=e+1|0;$p=5;case 5:$z=b.j9(c,d,e);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+1|0)+t;x=e-q;F(f,u,m,x,r,o);w=(d+0|0)-t;F(f,u,w,x,r,p);u=(c+0|0)-t;F(f,u,w,x,s,p);F(f,u,m,x,s,o);}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AHL(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=
$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A35;g=a.C;$p=1;case 1:$z=g.ea(c,d,e);if(C()){break _;}h=$z;i=b.em(0,h);if(a.cc>=0)i=a.cc;g=a.C;$p=2;case 2:$z=b.zo(g,c,d,e);if(C()){break _;}j=$z;Cf(f,j,j,j);k=(i&15)<<4;l=i&240;m=k;n=m/256.0;o=(m+15.989999771118164)/256.0;m=l;p=m/256.0;q=(m+15.989999771118164)/256.0;r=c+1|0;s=c+0|0;t=e+0|0;u=e+1|0;v=d+0.0625;if(h!=1&&h!=2&&h!=3&&h!=7){if(h==8){w=s;x=r;y=r;z=u;m=t;j=t;ba=s;r=x;s=y;bb=u;t=m;u=j;}else if(h!=9){w=r;j=s;z=t;m=u;ba=r;r=j;bb=t;t=m;}else{w=r;ba
=s;j=r;z=u;bb=t;m=t;r=s;s=j;t=u;u=m;}}else{w=s;ba=r;z=t;bb=u;}if(h!=2&&h!=4){if(h!=3&&h!=5){x=v;j=v;y=v;m=v;v=j;}else{j=v+1.0;x=j;y=v;m=v;v=j;}}else{m=v+1.0;x=v;y=m;}bc=ba;bd=y;be=bb;F(f,bc,bd,be,o,p);bf=w;bg=x;bh=u;F(f,bf,bg,bh,o,q);bi=s;bj=v;bk=t;F(f,bi,bj,bk,n,q);bl=r;bm=m;bn=z;F(f,bl,bm,bn,n,p);F(f,bl,bm,bn,n,p);F(f,bi,bj,bk,n,q);F(f,bf,bg,bh,o,q);F(f,bc,bd,be,o,p);return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p);}
function AEu(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A35;g=b.bZ(0);if(a.cc>=0)g=a.cc;h=a.C;$p=1;case 1:$z=b.zo(h,c,d,e);if(C()){break _;}i=$z;Cf(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=(i+15.989999771118164)
/256.0;b=a.C;$p=2;case 2:$z=b.ea(c,d,e);if(C()){break _;}p=$z;if(p==5){q=c+0.05000000074505806;r=(d+1|0)+0.0;s=(e+1|0)+0.0;F(f,q,r,s,l,n);t=(d+0|0)-0.0;F(f,q,t,s,l,o);s=(e+0|0)-0.0;F(f,q,t,s,m,o);F(f,q,r,s,m,n);}if(p==4){t=(c+1|0)-0.05000000074505806;q=(d+0|0)-0.0;s=(e+1|0)+0.0;F(f,t,q,s,m,o);r=(d+1|0)+0.0;F(f,t,r,s,m,n);s=(e+0|0)-0.0;F(f,t,r,s,l,n);F(f,t,q,s,l,o);}if(p==3){q=(c+1|0)+0.0;r=(d+0|0)-0.0;s=e+0.05000000074505806;F(f,q,r,s,m,o);t=(d+1|0)+0.0;F(f,q,t,s,m,n);q=(c+0|0)-0.0;F(f,q,t,s,l,n);F(f,q,r,s,
l,o);}if(p==2){r=(c+1|0)+0.0;s=(d+1|0)+0.0;t=(e+1|0)-0.05000000074505806;F(f,r,s,t,l,n);q=(d+0|0)-0.0;F(f,r,q,t,l,o);r=(c+0|0)-0.0;F(f,r,q,t,m,o);F(f,r,s,t,m,n);}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function WP(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A35;g=a.C;$p=1;case 1:$z=b.zo(g,c,d,e);if(C()){break _;}h=$z;Cf(f,h,h,h);f=a.C;$p=2;case 2:$z=f.ea(c,d,e);if(C()){break _;}i=$z;QL(a,b,i,c,d,e);return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AGx(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A35;g=a.C;$p=1;case 1:$z=b.zo(g,c,d,e);if(C()){break _;}h=$z;Cf(f,h,h,h);f=a.C;$p=2;case 2:$z=f.ea(c,d,e);if(C()){break _;}i=$z;Mp(a,b,i,c,d-0.0625,e);return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function FM(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;Bv();h=A35;i=b.bZ(0);if(a.cc>=0)i=a.cc;j=(i&15)<<4;k=i&240;l=j;m=l/256.0;l=(l+15.989999771118164)/256.0;n=k;o=n/256.0;n=(n+15.989999771118164)/256.0;p=m;q=p+0.02734375;r=o;s=r+0.0234375;t=p+0.03515625;u=r+0.03125;c=c+0.5;e=e+0.5;v=c-0.5;w=c+0.5;x=e-0.5;y=e+0.5;z=c+f*0.375;ba=z-0.0625;bb=d+0.625;bc=e+g*0.375;bd=bc-0.0625;F(h,ba,bb,bd,q,s);bc=bc+0.0625;F(h,ba,bb,bc,q,u);q=z+0.0625;F(h,q,bb,bc,t,u);F(h,q,bb,bd,t,s);u=c-0.0625;bc=d
+1.0;F(h,u,bc,x,p,r);q=u+f;d=d+0.0;t=x+g;bd=n;F(h,q,d,t,p,bd);s=y+g;z=l;F(h,q,d,s,z,bd);F(h,u,bc,y,z,r);u=c+0.0625;F(h,u,bc,y,p,r);c=c+f+0.0625;F(h,c,d,s,p,bd);F(h,c,d,t,z,bd);F(h,u,bc,x,z,r);c=e+0.0625;F(h,v,bc,c,p,r);u=v+f;q=c+g;F(h,u,d,q,p,bd);f=w+f;F(h,f,d,q,z,bd);F(h,w,bc,c,z,r);c=e-0.0625;F(h,w,bc,c,p,r);e=c+g;F(h,f,d,e,p,bd);F(h,u,d,e,z,bd);F(h,v,bc,c,z,r);}
function QL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;Bv();g=A35;h=b.em(0,c);if(a.cc>=0)h=a.cc;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.44999998807907104;q=d+0.44999998807907104;d=f+0.5;r=d-0.44999998807907104;s=d+0.44999998807907104;d=e+1.0;F(g,p,d,r,l,n);e=e+0.0;F(g,p,e,r,l,o);F(g,q,e,s,m,o);F(g,q,d,s,m,n);F(g,q,d,s,l,n);F(g,q,e,s,l,o);F(g,p,e,r,m,o);F(g,p,d,r,m,n);F(g,p,d,s,l,n);F(g,p,e,s,l,o);F(g,q,e,r,m,o);F(g,q,d,r,m,n);F(g,
q,d,r,l,n);F(g,q,e,r,l,o);F(g,p,e,s,m,o);F(g,p,d,s,m,n);}
function Mp(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A35;h=b.em(0,c);if(a.cc>=0)h=a.cc;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.25;q=d+0.25;f=f+0.5;r=f-0.5;s=f+0.5;t=e+1.0;F(g,p,t,r,l,n);e=e+0.0;F(g,p,e,r,l,o);F(g,p,e,s,m,o);F(g,p,t,s,m,n);F(g,p,t,s,l,n);F(g,p,e,s,l,o);F(g,p,e,r,m,o);F(g,p,t,r,m,n);F(g,q,t,s,l,n);F(g,q,e,s,l,o);F(g,q,e,r,m,o);F(g,q,t,r,m,n);F(g,q,t,r,l,n);F(g,q,e,r,l,o);F(g,q,e,s,m,o);F(g,q,t,s,m,n);p
=d-0.5;d=d+0.5;q=f-0.25;f=f+0.25;F(g,p,t,q,l,n);F(g,p,e,q,l,o);F(g,d,e,q,m,o);F(g,d,t,q,m,n);F(g,d,t,q,l,n);F(g,d,e,q,l,o);F(g,p,e,q,m,o);F(g,p,t,q,m,n);F(g,d,t,f,l,n);F(g,d,e,f,l,o);F(g,p,e,f,m,o);F(g,p,t,f,m,n);F(g,p,t,f,l,n);F(g,p,e,f,l,o);F(g,d,e,f,m,o);F(g,d,t,f,m,n);}
function XF(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w
=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A35;g=a.C;h=d+1|0;i=1;$p=1;case 1:$z=b.oc(g,c,h,e,i);if(C()){break _;}h=$z;g=a.C;i=d-1|0;j=0;$p=2;case 2:$z=b.oc(g,c,i,e,j);if(C()){break _;}j=$z;k=$rt_createBooleanArray(4).data;l=0;g=a.C;m=e-1|0;n=2;$p=3;case 3:$z=b.oc(g,c,d,m,n);if(C()){break _;}n=$z;k[l]=n;n=1;g
=a.C;o=e+1|0;l=3;$p=4;case 4:$z=b.oc(g,c,d,o,l);if(C()){break _;}l=$z;k[n]=l;n=2;g=a.C;p=c-1|0;l=4;$p=5;case 5:$z=b.oc(g,p,d,e,l);if(C()){break _;}l=$z;k[n]=l;n=3;g=a.C;q=c+1|0;l=5;$p=6;case 6:$z=b.oc(g,q,d,e,l);if(C()){break _;}l=$z;k[n]=l;if(!h&&!j&&!k[0]&&!k[1]&&!k[2]&&!k[3])return 0;r=0;s=0.5;t=1.0;u=0.800000011920929;v=0.6000000238418579;w=0.0;x=1.0;y=b.bR;g=a.C;$p=7;case 7:$z=g.ea(c,d,e);if(C()){break _;}z=$z;$p=8;case 8:$z=AJ9(a,c,d,e,y);if(C()){break _;}ba=$z;$p=9;case 9:$z=AJ9(a,c,d,o,y);if(C()){break _;}bb
=$z;$p=10;case 10:$z=AJ9(a,q,d,o,y);if(C()){break _;}bc=$z;$p=11;case 11:$z=AJ9(a,q,d,e,y);if(C()){break _;}bd=$z;if(!a.di&&!h){if(!a.di&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;a:{while(i<4){h=!i?m:e;n=S(i,1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.em(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.di)break a;if(k[i])break a;i=i+1|0;}b.cm=w;b.ch=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn
=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.C;$p=15;continue _;}g=a.C;$p=13;continue _;}r=1;bx=b.em(1,z);g=a.C;$p=12;case 12:$z=AWh(g,c,d,e,y);if(C()){break _;}by=$z;bm=by;h=S(bm,(-999.0));if(h>0)bx=b.em(2,z);n=(bx&15)<<4;l=bx&240;by=(n+8.0)/256.0;bz=(l+8.0)/256.0;if(h<0)bm=0.0;else{by=(n+16|0)/256.0;bz=(l+16|0)/256.0;}bn=Bm(bm)*8.0/256.0;bo=Bx(bm)*8.0/256.0;g=a.C;$p=14;continue _;case 13:$z
=b.zo(g,c,i,e);if(C()){break _;}bp=$z;bm=s*bp;Cf(f,bm,bm,bm);Gx(a,b,c,d,e,b.bZ(0));r=1;i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;b:{while(i<4){h=!i?m:e;n=S(i,1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.em(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.di)break b;if(k[i])break b;i=i+1|0;}b.cm=w;b.ch=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=
((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.C;$p=15;continue _;case 14:$z=b.zo(g,c,d,e);if(C()){break _;}bi=$z;bm=t*bi;Cf(f,bm,bm,bm);bA=c+0|0;bm=d;br=bm+ba;bu=e+0|0;bB=bo;bf=by-bB;bw=bn;bC=bf-bw;bs=bz-bB;F(f,bA,br,bu,bC,bs+bw);bC=bm+bb;bv=o;bf=bf+bw;br=bz+bB;F(f,bA,bC,bv,bf,br+bw);bA=q;bf=bm+bc;by=by+bB;F(f,bA,bf,bv,by+bw,br-bw);F(f,bA,bm+bd,bu,by-bw,bs-bw);if(!a.di&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;c:{while(i<4){h=!i?m:e;n=S(i,
1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.em(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.di)break c;if(k[i])break c;i=i+1|0;}b.cm=w;b.ch=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.C;$p=15;continue _;}g=a.C;$p=13;continue _;case 15:$z
=b.zo(g,o,d,h);if(C()){break _;}bt=$z;bt=t*(l>=0?bt*v:bt*u);Cf(f,bt,bt,bt);bC=bo;by=be+bm;bA=s;F(f,bC,by,bA,br,bu);by=bp;bu=be+bn;bB=bq;F(f,by,bu,bB,bs,bv);F(f,by,bf,bB,bs,bw);F(f,bC,bf,bA,br,bw);c:{while(true){i=i+1|0;if(i>=4)break;h=!i?m:e;n=S(i,1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.em(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.di)break c;if(k[i])break c;}b.cm=w;b.ch=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp
=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.C;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p);}
function AJ9(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=0.0;h=0;i=c+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.C;$p=1;case 1:$z=l.nj(j,i,k);if(C()){break _;}l=$z;if(l===e)return 1.0;l=a.C;$p=2;case 2:$z=l.nj(j,c,k);if(C()){break _;}l=$z;if(l===e){l=a.C;$p=3;continue _;}if(!l.c3()){g=g+1.0;f=f+1|0;}h=h+1|0;if(h
>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.C;$p=1;continue _;case 3:$z=l.ea(j,c,k);if(C()){break _;}m=$z;if(!(m<8&&m)){g=g+HX(m)*10.0;f=f+10|0;}g=g+HX(m);f=f+1|0;h=h+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.C;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ADY(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0.5;h=1.0;i=0.800000011920929;j=0.6000000238418579;Bv();k=A35;Bu(k);$p=1;case 1:$z=b.zo(c,d,e,f);if(C()){break _;}l=$z;m=e-1|0;$p=2;case 2:$z=b.zo(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;n=g*n;Cf(k,n,n,n);Gx(a,b,(-0.5),(-0.5),(-0.5),b.bZ(0));m=e+1|0;$p=3;case 3:$z
=b.zo(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;h=h*n;Cf(k,h,h,h);H7(a,b,(-0.5),(-0.5),(-0.5),b.bZ(1));m=f-1|0;$p=4;case 4:$z=b.zo(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cf(k,h,h,h);Il(a,b,(-0.5),(-0.5),(-0.5),b.bZ(2));m=f+1|0;$p=5;case 5:$z=b.zo(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cf(k,h,h,h);IA(a,b,(-0.5),(-0.5),(-0.5),b.bZ(3));m=d-1|0;$p=6;case 6:$z=b.zo(c,m,e,f);if(C()){break _;}h=$z;if(h<l)h=l;h=j*h;Cf(k,h,h,h);Ie(a,b,(-0.5),(-0.5),(-0.5),b.bZ(4));d=d+1|0;$p=7;case 7:$z=b.zo(c,d,e,
f);if(C()){break _;}h=$z;if(h>=l)l=h;h=j*l;Cf(k,h,h,h);Je(a,b,(-0.5),(-0.5),(-0.5),b.bZ(5));Bn(k);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Xv(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;$p=1;case 1:$z=AGi(a,b,c,d,e,f,f,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AGi(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();i=A35;j=0;k=0.5*f;l=1.0*f;m=0.800000011920929*f;n=0.6000000238418579*f;o=0.5
*g;p=1.0*g;q=0.800000011920929*g;r=0.6000000238418579*g;s=0.5*h;t=1.0*h;u=0.800000011920929*h;v=0.6000000238418579*h;w=a.C;$p=1;case 1:$z=b.zo(w,c,d,e);if(C()){break _;}x=$z;if(a.di){w=a.C;y=d-1|0;$p=2;continue _;}w=a.C;z=d-1|0;y=0;$p=3;continue _;case 2:$z=b.zo(w,c,y,e);if(C()){break _;}ba=$z;if(A5U.data[b.b]>0)ba=1.0;Cf(i,k*ba,o*ba,s*ba);bb=c;bc=d;bd=e;w=a.C;y=0;$p=4;continue _;case 3:$z=b.oc(w,c,z,e,y);if(C()){break _;}y=$z;if(y){w=a.C;y=d-1|0;$p=2;continue _;}if(a.di){w=a.C;y=d+1|0;$p=5;continue _;}w=a.C;y
=d+1|0;z=1;$p=6;continue _;case 4:$z=b.sn(w,c,d,e,y);if(C()){break _;}y=$z;Gx(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=d+1|0;$p=5;continue _;}w=a.C;y=d+1|0;z=1;$p=6;continue _;case 5:$z=b.zo(w,c,y,e);if(C()){break _;}ba=$z;if(b.ch!==1.0&&!b.bR.mh())ba=x;if(A5U.data[b.b]>0)ba=1.0;Cf(i,l*ba,p*ba,t*ba);bb=c;bc=d;bd=e;w=a.C;y=1;$p=9;continue _;case 6:$z=b.oc(w,c,y,e,z);if(C()){break _;}y=$z;if(y){w=a.C;y=d+1|0;$p=5;continue _;}if(a.di){w=a.C;y=e-1|0;$p=7;continue _;}w=a.C;y=e-1|0;z=2;$p=8;continue _;case 7:$z=b.zo(w,
c,d,y);if(C()){break _;}ba=$z;if(b.cL>0.0)ba=x;if(A5U.data[b.b]>0)ba=1.0;Cf(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.C;y=2;$p=12;continue _;case 8:$z=b.oc(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.C;y=e-1|0;$p=7;continue _;}if(a.di){w=a.C;y=e+1|0;$p=10;continue _;}w=a.C;y=e+1|0;z=3;$p=11;continue _;case 9:$z=b.sn(w,c,d,e,y);if(C()){break _;}y=$z;H7(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=e-1|0;$p=7;continue _;}w=a.C;y=e-1|0;z=2;$p=8;continue _;case 10:$z=b.zo(w,c,d,y);if(C()){break _;}ba=$z;if(b.cQ<1.0)ba=x;if(A5U.data[b.b]
>0)ba=1.0;Cf(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.C;y=3;$p=15;continue _;case 11:$z=b.oc(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.C;y=e+1|0;$p=10;continue _;}if(a.di){w=a.C;y=c-1|0;$p=13;continue _;}w=a.C;y=c-1|0;z=4;$p=14;continue _;case 12:$z=b.sn(w,c,d,e,y);if(C()){break _;}y=$z;Il(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=e+1|0;$p=10;continue _;}w=a.C;y=e+1|0;z=3;$p=11;continue _;case 13:$z=b.zo(w,y,d,e);if(C()){break _;}ba=$z;if(b.cM>0.0)ba=x;if(A5U.data[b.b]>0)ba=1.0;Cf(i,n*ba,r*ba,v*ba);bb=c;bc=d;bd=e;w
=a.C;y=4;$p=18;continue _;case 14:$z=b.oc(w,y,d,e,z);if(C()){break _;}y=$z;if(y){w=a.C;y=c-1|0;$p=13;continue _;}if(a.di){w=a.C;y=c+1|0;$p=16;continue _;}w=a.C;y=c+1|0;z=5;$p=17;continue _;case 15:$z=b.sn(w,c,d,e,y);if(C()){break _;}y=$z;IA(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=c-1|0;$p=13;continue _;}w=a.C;y=c-1|0;z=4;$p=14;continue _;case 16:$z=b.zo(w,y,d,e);if(C()){break _;}ba=$z;if(b.cP>=1.0)x=ba;if(A5U.data[b.b]>0)x=1.0;Cf(i,n*x,r*x,v*x);bb=c;bc=d;bd=e;i=a.C;y=5;$p=19;continue _;case 17:$z=b.oc(w,y,d,e,
z);if(C()){break _;}y=$z;if(!y)return j;w=a.C;y=c+1|0;$p=16;continue _;case 18:$z=b.sn(w,c,d,e,y);if(C()){break _;}y=$z;Ie(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=c+1|0;$p=16;continue _;}w=a.C;y=c+1|0;z=5;$p=17;continue _;case 19:$z=b.sn(i,c,d,e,y);if(C()){break _;}c=$z;Je(a,b,bb,bc,bd,c);j=1;return j;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AA4(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;Bj(b,0.375,0.0,0.375,0.625,1.0,0.625);$p=1;case 1:Xv(a,b,c,d,e);if(C()){break _;}g=0;h=0;i=a.C;j=c-1|0;$p=2;case 2:$z=i.dL(j,d,e);if(C()){break _;}j=$z;if(j!=b.b){i=a.C;j=c+1|0;$p=3;continue _;}g=1;i=a.C;j=e-1|0;$p=4;continue _;case 3:$z=i.dL(j,d,e);if(C()){break _;}j
=$z;if(j==b.b)g=1;i=a.C;j=e-1|0;$p=4;case 4:$z=i.dL(c,d,j);if(C()){break _;}j=$z;if(j!=b.b){i=a.C;j=e+1|0;$p=5;continue _;}h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bj(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 5:$z=i.dL(c,d,j);if(C()){break _;}j=$z;if(j==b.b)h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if
(g){Bj(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bj(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 6:Xv(a,b,c,d,e);if(C()){break _;}if(h){Bj(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 7:Xv(a,b,c,d,e);if(C()){break _;}m=0.375;n
=0.5625;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 8:Xv(a,b,c,d,e);if(C()){break _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;case 9:Xv(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ADx(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=a.C;$p=1;case 1:$z=g.ea(c,d,e);if(C()){break _;}h=$z;if(!h){Bj(b,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bj(b,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bj(b,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:Xv(a,
b,c,d,e);if(C()){break _;}Bj(b,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:Xv(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 4:Xv(a,b,c,d,e);if(C()){break _;}Bj(b,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:Xv(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 6:Xv(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:Xv(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 8:Xv(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.5,1.0,0.5,1.0);$p=9;case 9:Xv(a,
b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AFw(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A35;g=b;h=0.5;i=1.0;j=0.800000011920929;k=0.6000000238418579;l=a.C;$p=1;case 1:$z=b.zo(l,c,d,e);if(C()){break _;}m=$z;l=a.C;n=d-1|0;$p=2;case 2:$z=b.zo(l,c,n,e);if(C()){break _;}o=$z;if(g.cm>0.0)o=m;if(A5U.data[b.b]
>0)o=1.0;h=h*o;Cf(f,h,h,h);p=c;q=d;r=e;l=a.C;n=0;$p=3;case 3:$z=b.sn(l,c,d,e,n);if(C()){break _;}n=$z;Gx(a,b,p,q,r,n);l=a.C;n=d+1|0;$p=4;case 4:$z=b.zo(l,c,n,e);if(C()){break _;}h=$z;if(g.ch<1.0)h=m;if(A5U.data[b.b]>0)h=1.0;i=i*h;Cf(f,i,i,i);l=a.C;n=1;$p=5;case 5:$z=b.sn(l,c,d,e,n);if(C()){break _;}n=$z;H7(a,b,p,q,r,n);l=a.C;n=e-1|0;$p=6;case 6:$z=b.zo(l,c,d,n);if(C()){break _;}i=$z;if(g.cL>0.0)i=m;if(A5U.data[b.b]>0)i=1.0;i=j*i;Cf(f,i,i,i);l=a.C;n=2;$p=7;case 7:$z=b.sn(l,c,d,e,n);if(C()){break _;}s=$z;if(s
<0){a.eP=1;s= -s;}Il(a,b,p,q,r,s);a.eP=0;l=a.C;n=e+1|0;$p=8;case 8:$z=b.zo(l,c,d,n);if(C()){break _;}i=$z;if(g.cQ<1.0)i=m;if(A5U.data[b.b]>0)i=1.0;i=j*i;Cf(f,i,i,i);l=a.C;n=3;$p=9;case 9:$z=b.sn(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.eP=1;s= -s;}IA(a,b,p,q,r,s);a.eP=0;l=a.C;n=c-1|0;$p=10;case 10:$z=b.zo(l,n,d,e);if(C()){break _;}i=$z;if(g.cM>0.0)i=m;if(A5U.data[b.b]>0)i=1.0;i=k*i;Cf(f,i,i,i);l=a.C;n=4;$p=11;case 11:$z=b.sn(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.eP=1;s= -s;}Ie(a,b,p,q,r,s);a.eP=0;l=a.C;n
=c+1|0;$p=12;case 12:$z=b.zo(l,n,d,e);if(C()){break _;}i=$z;if(g.cP>=1.0)m=i;if(A5U.data[b.b]>0)m=1.0;i=k*m;Cf(f,i,i,i);l=a.C;n=5;$p=13;case 13:$z=b.sn(l,c,d,e,n);if(C()){break _;}c=$z;if(c<0){a.eP=1;c= -c;}Je(a,b,p,q,r,c);a.eP=0;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function Gx(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A35;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cM*16.0)/256.0;l=(j+b.cP*16.0-0.01)/256.0;j=i;m=(j+b.cL*16.0)/256.0;n=(j+b.cQ*16.0-0.01)/256.0;if(!(b.cM>=0.0&&b.cP<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cQ<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.cM;q=c+b.cP;r=d+b.cm;s=e+b.cL;t=e+b.cQ;F(g,j,r,t,k,n);F(g,j,r,s,k,m);F(g,q,r,s,l,m);F(g,q,r,t,l,n);}
function H7(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A35;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cM*16.0)/256.0;l=(j+b.cP*16.0-0.01)/256.0;j=i;m=(j+b.cL*16.0)/256.0;n=(j+b.cQ*16.0-0.01)/256.0;if(!(b.cM>=0.0&&b.cP<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cQ<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.cM;q=c+b.cP;r=d+b.ch;s=e+b.cL;t=e+b.cQ;F(g,q,r,t,l,n);F(g,q,r,s,l,m);F(g,j,r,s,k,m);F(g,j,r,t,k,n);}
function Il(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A35;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cM*16.0)/256.0;j=(j+b.cP*16.0-0.01)/256.0;l=i;m=(l+b.cm*16.0)/256.0;n=(l+b.ch*16.0-0.01)/256.0;if(!a.eP){l=j;j=k;k=l;}if(!(b.cM>=0.0&&b.cP<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cm>=0.0&&b.ch<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.cM;q=c+b.cP;r=d+b.cm;s=d+b.ch;t=e+b.cL;F(g,l,s,t,k,m);F(g,q,s,t,j,m);F(g,q,r,t,j,n);F(g,l,r,t,k,n);}
function IA(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A35;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cM*16.0)/256.0;j=(j+b.cP*16.0-0.01)/256.0;l=i;m=(l+b.cm*16.0)/256.0;n=(l+b.ch*16.0-0.01)/256.0;if(!a.eP){l=j;j=k;k=l;}if(!(b.cM>=0.0&&b.cP<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cm>=0.0&&b.ch<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.cM;q=c+b.cP;r=d+b.cm;s=d+b.ch;t=e+b.cQ;F(g,l,s,t,j,m);F(g,l,r,t,j,n);F(g,q,r,t,k,n);F(g,q,s,t,k,m);}
function Ie(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A35;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cL*16.0)/256.0;l=(j+b.cQ*16.0-0.01)/256.0;j=i;m=(j+b.cm*16.0)/256.0;n=(j+b.ch*16.0-0.01)/256.0;if(!a.eP){j=l;l=k;k=j;}if(!(b.cL>=0.0&&b.cQ<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cm>=0.0&&b.ch<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.cM;q=d+b.cm;r=d+b.ch;s=e+b.cL;t=e+b.cQ;F(g,j,r,t,k,m);F(g,j,r,s,l,m);F(g,j,q,s,l,n);F(g,j,q,t,k,n);}
function Je(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A35;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cL*16.0)/256.0;l=(j+b.cQ*16.0-0.01)/256.0;j=i;m=(j+b.cm*16.0)/256.0;n=(j+b.ch*16.0-0.01)/256.0;if(!a.eP){j=l;l=k;k=j;}if(!(b.cL>=0.0&&b.cQ<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cm>=0.0&&b.ch<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.cP;q=d+b.cm;r=d+b.ch;s=e+b.cL;t=e+b.cQ;F(g,j,q,t,l,n);F(g,j,q,s,k,n);F(g,j,r,s,k,m);F(g,j,r,t,l,m);}
function FZ(a,b){var c,d;a:{Bv();c=A35;d=b.dO();if(d){if(d==1){Bu(c);B_(0.0,(-1.0),0.0);QL(a,b,(-1),(-0.5),(-0.5),(-0.5));Bn(c);}else if(d==6){Bu(c);B_(0.0,(-1.0),0.0);Mp(a,b,(-1),(-0.5),(-0.5),(-0.5));Bn(c);}else{if(d!=2){if(d==3)break a;if(d!=5)break a;else break a;}Bu(c);B_(0.0,(-1.0),0.0);FM(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Bn(c);}}else{Br((-0.5),(-0.5),(-0.5));Bu(c);B_(0.0,(-1.0),0.0);Gx(a,b,0.0,0.0,0.0,b.bZ(0));Bn(c);Bu(c);B_(0.0,1.0,0.0);H7(a,b,0.0,0.0,0.0,b.bZ(1));Bn(c);Bu(c);B_(0.0,0.0,(-1.0));Il(a,
b,0.0,0.0,0.0,b.bZ(2));Bn(c);Bu(c);B_(0.0,0.0,1.0);IA(a,b,0.0,0.0,0.0,b.bZ(3));Bn(c);Bu(c);B_((-1.0),0.0,0.0);Ie(a,b,0.0,0.0,0.0,b.bZ(4));Bn(c);Bu(c);B_(1.0,0.0,0.0);Je(a,b,0.0,0.0,0.0,b.bZ(5));Bn(c);Br(0.5,0.5,0.5);}}}
function NT(){var a=this;E.call(a);a.ij=null;a.gE=null;a.fo=0;a.fn=0;a.oa=0.0;a.lK=0.0;a.n_=0.0;a.bM=0.0;a.bL=0.0;a.bJ=0.0;a.ub=0;a.kG=0;a.ks=0;a.hT=0;a.yS=0;}
function BF(a,b){var c=new NT();AYs(c,a,b);return c;}
function AYs(a,b,c){a.ub=0;a.kG=0;a.ks=0;a.hT=1;a.yS=0;a.fo=b;a.fn=c;}
function BA(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;a.ij=N(Eb,8);a.gE=N(EL,6);i=b+e;j=c+f;k=d+g;l=b-h;m=c-h;n=d-h;d=i+h;j=j+h;h=k+h;if(!a.ks){b=l;l=d;d=b;}a:{o=F4(d,m,n,0.0,0.0);p=F4(l,m,n,0.0,8.0);q=F4(l,j,n,8.0,8.0);r=F4(d,j,n,8.0,0.0);s=F4(d,m,h,0.0,0.0);t=F4(l,m,h,0.0,8.0);u=F4(l,j,h,8.0,8.0);v=F4(d,j,h,8.0,0.0);a.ij.data[0]=o;a.ij.data[1]=p;a.ij.data[2]=q;a.ij.data[3]=r;a.ij.data[4]=s;a.ij.data[5]=t;a.ij.data[6]=u;a.ij.data[7]=v;w=a.gE.data;x=new EL;y=N(Eb,4);z=y.data;z[0]=t;z[1]=p;z[2]
=q;z[3]=u;Gd(x,y,(a.fo+g|0)+e|0,a.fn+g|0,((a.fo+g|0)+e|0)+g|0,(a.fn+g|0)+f|0);w[0]=x;z=a.gE.data;x=new EL;w=N(Eb,4);y=w.data;y[0]=o;y[1]=s;y[2]=v;y[3]=r;Gd(x,w,a.fo+0|0,a.fn+g|0,a.fo+g|0,(a.fn+g|0)+f|0);z[1]=x;z=a.gE.data;x=new EL;w=N(Eb,4);y=w.data;y[0]=t;y[1]=s;y[2]=o;y[3]=p;Gd(x,w,a.fo+g|0,a.fn+0|0,(a.fo+g|0)+e|0,a.fn+g|0);z[2]=x;z=a.gE.data;x=new EL;w=N(Eb,4);y=w.data;y[0]=q;y[1]=r;y[2]=v;y[3]=u;Gd(x,w,(a.fo+g|0)+e|0,a.fn+0|0,((a.fo+g|0)+e|0)+e|0,a.fn+g|0);z[3]=x;w=a.gE.data;x=new EL;y=N(Eb,4);z=y.data;z[0]
=p;z[1]=o;z[2]=r;z[3]=q;Gd(x,y,a.fo+g|0,a.fn+g|0,(a.fo+g|0)+e|0,(a.fn+g|0)+f|0);w[4]=x;z=a.gE.data;r=new EL;w=N(Eb,4);y=w.data;y[0]=s;y[1]=t;y[2]=u;y[3]=v;Gd(r,w,((a.fo+g|0)+e|0)+g|0,a.fn+g|0,(((a.fo+g|0)+e|0)+g|0)+e|0,(a.fn+g|0)+f|0);z[5]=r;if(a.ks){ba=0;while(true){if(ba>=a.gE.data.length)break a;Yu(a.gE.data[ba]);ba=ba+1|0;}}}}
function BD(a,b,c,d){a.oa=b;a.lK=c;a.n_=d;}
function B3(a,b){var c,d;if(!a.yS&&a.hT){if(!a.ub){a.kG=Hx(1);ET(a.kG,4864);Bv();c=A35;d=0;while(d<a.gE.data.length){AKb(a.gE.data[d],c,b);d=d+1|0;}DM();a.ub=1;}if(a.bM===0.0&&a.bL===0.0&&a.bJ===0.0){if(a.oa===0.0&&a.lK===0.0&&a.n_===0.0)E4(a.kG);else{Br(a.oa*b,a.lK*b,a.n_*b);E4(a.kG);Br( -a.oa*b, -a.lK*b, -a.n_*b);}}else{BW();Br(a.oa*b,a.lK*b,a.n_*b);if(a.bJ!==0.0)Bq(a.bJ*57.2957763671875,0.0,0.0,1.0);if(a.bL!==0.0)Bq(a.bL*57.2957763671875,0.0,1.0,0.0);if(a.bM!==0.0)Bq(a.bM*57.2957763671875,1.0,0.0,0.0);E4(a.kG);By();}}}
function Ek(){E.call(this);}
function AI$(a,b){Od(a,b,0,b.data.length);}
function ANi(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.mr(f[c]);e=e+1|0;c=g;}}
function AYd(a){return;}
function AYH(a){return;}
function Fl(){Ek.call(this);this.eN=null;}
function A6A(a){var b=new Fl();Js(b,a);return b;}
function Js(a,b){a.eN=b;}
function Jc(a){var $$je;a:{try{a.eN.km();break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){}else{throw $$e;}}}a.eN.r0();}
function WK(){var a=this;Fl.call(a);a.CP=0;a.sI=0;a.gT=null;a.mx=null;a.x1=null;}
function AQ1(a,b){var c=new WK();AZj(c,a,b);return c;}
function AZj(a,b,c){Js(a,b);b=new Bc;Ba(b);a.gT=b;a.mx=$rt_createCharArray(32);a.CP=c;a.x1=AS8();}
function R2(a,b,c,d){var $$je;if(a.eN===null)a.sI=1;if(!(a.sI?0:1))return;a:{try{a.eN.fO(b,c,d);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){}else{throw $$e;}}a.sI=1;}}
function Qq(a,b,c,d){var e,f,g,h,i;e=b.data;f=AHH(b,c,d-c|0);e=$rt_createByteArray(DV(16,CR(e.length,1024)));g=V_(e);h=AB$(Yq(ACg(a.x1),A5n),A5n);while(true){i=Hr(AEc(h,f,g,1));R2(a,e,0,g.be);D3(g);if(!i)break;}while(true){i=Hr(TV(h,g));R2(a,e,0,g.be);D3(g);if(!i)break;}}
function AFy(a,b){a.mx.data[0]=b;Qq(a,a.mx,0,1);}
function IQ(a,b){H(a.gT,b);Iy(a);}
function Xn(a,b){E7(Bd(a.gT,b),10);Iy(a);}
function B9(a,b){E7(H(a.gT,b),10);Iy(a);}
function XW(a,b){E7(EY(a.gT,b),10);Iy(a);}
function AKa(a){AFy(a,10);}
function Iy(a){var b;b=IB(a.gT)<=a.mx.data.length?a.mx:$rt_createCharArray(IB(a.gT));Wh(a.gT,0,IB(a.gT),b,0);Qq(a,b,0,IB(a.gT));AHU(a.gT,0);}
function Tc(){Ek.call(this);}
function A6B(){var a=new Tc();AUs(a);return a;}
function AUs(a){return;}
function AQF(a,b){$rt_putStdout(b);}
function AAz(){Cq.call(this);this.BO=null;}
function AGe(a){var b=new AAz();ASI(b,a);return b;}
function ASI(a,b){Q(a);a.BO=b;}
function KQ(){var a=this;E.call(a);a.bW=null;a.x=0;a.J=0;a.D=Long_ZERO;a.sQ=null;a.of=0;a.hn=0;a.l8=Long_ZERO;a.bQ=null;a.iA=null;a.fu=null;}
function A6C(){var a=new KQ();Mr(a);return a;}
function Mr(a){a.fu=AYN();}
function Wo(a,b,c,d){a.sQ=b;a.of=c;a.hn=d;}
function AE5(a,b,c,d,e){var f;if(d<=0&&e&&a.bW!==null)return;if(a.J>0&&e){f=$rt_createByteArray(a.J+d|0);De(a.bW,a.x,f,0,a.J);De(b,c,f,a.J,d);a.bW=f;a.x=0;a.J=a.J+d|0;}else{a.bW=b;a.x=c;a.J=d;}}
function QI(){KQ.call(this);this.p_=0;}
function A6D(){var a=new QI();AUe(a);return a;}
function AUe(a){Mr(a);a.p_=0;WA(a);}
function WA(a){return Yj(a,15);}
function Yj(a,b){return O9(a,b,0);}
function O9(a,b,c){var d;a.p_=0;d=new JV;d.p$=Long_fromInt(-1);d.hJ=(-1);d.vh=$rt_createByteArray(4);d.ck=null;d.fk=null;d.B=a;a.iA=d;d=a.iA;if(c)b= -b;return Ty(d,b);}
function ABm(a,b){var c;if(a.iA===null)return (-2);c=ABT(a.iA,b);if(c==1)a.p_=1;return c;}
function Ud(a){return a.iA.bF!=12?0:1;}
function G9(){var a=this;E.call(a);a.zg=null;a.np=0.0;a.oe=0.0;}
function G2(a,b,c){var d=new G9();ME(d,a,b,c);return d;}
function ME(a,b,c,d){a.zg=b;a.np=c;a.oe=d;}
function AHs(a){return a.np;}
function Ub(a){return a.oe;}
function IH(a){var b;b=new Bc;Ba(b);return O(H(H(b,B(244)),a.zg));}
function ACA(){G9.call(this);}
function A0d(a,b,c){var d=new ACA();ARt(d,a,b,c);return d;}
function ARt(a,b,c,d){ME(a,b,c,d);}
function X4(){G9.call(this);}
function A1O(a,b,c){var d=new X4();AXp(d,a,b,c);return d;}
function AXp(a,b,c,d){ME(a,b,c,d);}
function J1(){P.call(this);}
function A09(a,b){var c=new J1();AD5(c,a,b);return c;}
function AD5(a,b,c){CS(a,b,c,A6q);}
function AX6(a,b,c){J();return A4h.b;}
function VR(){P.call(this);}
function A1p(a){var b=new VR();ARc(b,a);return b;}
function ARc(a,b){Dw(a,b,A6E);a.W=3;Ey(a,1);}
function AW_(a,b){return b==1?0:b?3:2;}
function YY(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=Tw(b,c,g,e);if(C()){break _;}h=$z;if(h>=4){$p=2;continue _;}$p=3;continue _;case 2:$z=Tw(b,c,g,e);if(C()){break _;}g=$z;if(g<9)return;h=(c+D(f,3)|0)-1|0;g=(d+D(f,5)|0)-3|0;i=(e+D(f,3)|0)-1|0;$p=4;continue _;case 3:$z=XB(b,c,g,e);if(C()){break _;}j=$z;if(!j.qy()){$p=2;continue _;}if(D(f,
4))return;J();h=A4a.b;$p=6;continue _;case 4:$z=X9(b,h,g,i);if(C()){break _;}c=$z;J();if(c!=A4a.b)return;c=g+1|0;$p=5;case 5:$z=Tw(b,h,c,i);if(C()){break _;}d=$z;if(d<4)return;$p=7;continue _;case 6:AJ6(b,c,d,e,h);if(C()){break _;}return;case 7:$z=XB(b,h,c,i);if(C()){break _;}f=$z;if(f.qy())return;c=A3_.b;$p=8;case 8:AJ6(b,h,g,i,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AR3(a,b,c){J();return A4a.dq(0,c);}
function AC2(){P.call(this);}
function A0i(a,b){var c=new AC2();AP$(c,a,b);return c;}
function AP$(a,b,c){CS(a,b,c,A6E);}
function B0(){E.call(this);}
var A5q=null;var A6E=null;var A6r=null;var A6q=null;var A6F=null;var A46=null;var A47=null;var A6G=null;var A6H=null;var A6I=null;var A6t=null;var A6J=null;var A6K=null;var A6L=null;var A6s=null;var A6M=null;var A6N=null;function A6O(){var a=new B0();AKQ(a);return a;}
function AKQ(a){return;}
function AXP(a){return 0;}
function ASD(a){return 1;}
function AXt(a){return 1;}
function AVK(a){return 1;}
function AKy(){A5q=new L5;A6E=new B0;A6r=new B0;A6q=new B0;A6F=new B0;A46=new Ka;A47=new Ka;A6G=new B0;A6H=new LQ;A6I=new B0;A6t=new B0;A6J=new L5;A6K=new B0;A6L=new LQ;A6s=new B0;A6M=new B0;A6N=new B0;}
function Fb(){P.call(this);}
function AUm(a,b){var c=new Fb();JK(c,a,b);return c;}
function JK(a,b,c){Dw(a,b,A6H);a.W=c;Ey(a,1);Bj(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function AGI(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=X9(b,c,d,e);if(C()){break _;}c=$z;return a.pH(c);default:Es();}}CM().s(a,b,c,d,e,$p);}
function AQJ(a,b){J();return b!=A3_.b&&b!=A4a.b&&b!=A6i.b?0:1;}
function ADF(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEn(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ZD(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEn(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AEn(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.Db(b,c,d,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=Z$(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Uc(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:AJ6(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AIG(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Tw(b,c,d,e);if(C()){break _;}f=$z;if(f<8){$p=3;continue _;}d=d-1|0;$p=2;case 2:$z=X9(b,c,d,e);if(C()){break _;}c=$z;return !a.pH(c)?0:1;case 3:$z=ABx(b,c,d,e);if(C()){break _;}g=$z;if(!g)return 0;d=d-1|0;$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ABC(a,b,c,d,e){return null;}
function AWl(a){return 0;}
function ANN(a){return 0;}
function AXe(a){return 1;}
function AHz(){Fb.call(this);}
function A13(a,b){var c=new AHz();AYE(c,a,b);return c;}
function AYE(a,b,c){JK(a,b,c);Bj(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function ZM(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEn(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=Tw(b,c,g,e);if(C()){break _;}g=$z;if(g>=9&&!D(f,5)){$p=3;continue _;}return;case 3:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;if(g>=15){g=0;$p=4;continue _;}g=g+1|0;$p=6;continue _;case 4:AGh(b,c,d,e,g);if(C()){break _;}h=new Ol;$p=5;case 5:$z=Z_(h,b,f,c,d,e);if(C()){break _;}g
=$z;if(g)return;g=a.b;$p=7;continue _;case 6:AFp(b,c,d,e,g);if(C()){break _;}return;case 7:AGh(b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function GH(){P.call(this);this.pa=0;}
function A6P(a,b){var c=new GH();Nk(c,a,b);return c;}
function Nk(a,b,c){CS(a,b,((c!==A47?12:14)*16|0)+13|0,c);a.pa=1;if(c===A47)a.pa=2;Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);Ey(a,1);}
function HX(b){if(b>=8)b=0;return (b+1|0)/9.0;}
function ANd(a,b){return b&&b!=1?a.W+1|0:a.W;}
function AAE(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XB(b,c,d,e);if(C()){break _;}f=$z;if(f!==a.bR)return (-1);$p=2;case 2:$z=Z$(b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ZI(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.nj(c,d,e);if(C()){break _;}f=$z;if(f!==a.bR)return (-1);$p=2;case 2:$z=b.ea(c,d,e);if(C()){break _;}g=$z;if(g>=8)g=0;return g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AZG(a){return 0;}
function AZd(a){return 0;}
function AX4(a,b,c){return c&&!b?1:0;}
function ALP(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.nj(c,d,e);if(C()){break _;}g=$z;if(g===a.bR)c=0;else{if(f!=1){$p=2;continue _;}c=1;}return c;case 2:$z=ABL(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Ua(a,b,c,d,e){return null;}
function AXz(a){return 4;}
function AUh(a,b,c){return 0;}
function AWe(a,b){return 0;}
function ADM(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=BR(0.0,0.0,0.0);$p=1;case 1:$z=ZI(a,b,c,d,e);if(C()){break _;}g=$z;h=0;i=c-1|0;j=e-1|0;k=d-1|0;l=g-8|0;m=d-d|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 2:$z=b.ea(c,d,e);if(C())
{break _;}n=$z;if(n<8)return Cs(f);k=0;n=2;$p=3;case 3:$z=ALP(a,b,c,d,j,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=e+1|0;p=3;$p=4;continue _;}k=1;if(!k){n=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 4:$z=ALP(a,b,c,d,n,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=4;$p
=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 5:$z=ALP(a,b,i,d,e,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if
(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 6:$z=ALP(a,b,n,d,e,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 7:$z=ZI(a,b,n,d,o);if(C()){break _;}p=$z;if(p<0){$p=8;continue _;}if(p>=0){q=p-g|0;f=C3(f,Bh(n-c|0,q),Bh(m,q),Bh(o-e|0,q));}h=h+1|0;if(h
>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;continue _;case 8:$z=ZI(a,b,n,k,o);if(C()){break _;}p=$z;if(p>=0){q=p-l|0;f=C3(f,Bh(n-c|0,q),Bh(m,q),Bh(o-e|0,q));}h=h+1|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 9:$z=ALP(a,b,c,n,j,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n
=5;$p=12;continue _;case 10:$z=ALP(a,b,c,n,p,q);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 11:$z=ALP(a,b,i,n,e,p);if(C()){break _;}n=$z;if(n)k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;case 12:$z=ALP(a,b,c,d,e,n);if(C()){break _;}c=$z;if(c)k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,
q,$p);}
function AHQ(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ADM(a,b,c,d,e);if(C()){break _;}h=$z;g.t=g.t+h.t;g.v=g.v+h.v;g.s=g.s+h.s;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AOt(a){return a.bR===A46?5:a.bR!==A47?0:30;}
function ZX(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.q1(c,d,e);if(C()){break _;}f=$z;d=d+1|0;$p=2;case 2:$z=b.q1(c,d,e);if(C()){break _;}g=$z;if(f>g)g=f;return g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ALs(a,b,c,d,e,f){return;}
function AZa(a){return 0;}
function Uy(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bR===A46&&!D(f,64)){$p=2;continue _;}if(a.bR!==A47)return;g=d+1|0;$p=1;case 1:$z=XB(b,c,g,e);if(C()){break _;}h=$z;if(h!==A5q)return;$p=3;continue _;case 2:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;if(g>0&&g<8)D1(b,c+0.5,d+0.5,e+0.5,B(245),L(f)*0.25+0.75,L(f)*1.0+0.5);if(a.bR!==A47)return;g=d+1|0;$p=1;continue _;case 3:$z=Wj(b,c,g,
e);if(C()){break _;}g=$z;if(!g&&!D(f,100))BP(b,B(246),c+L(f),d+a.ch,e+L(f),0.0,0.0,0.0);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AWh(b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:g=null;if(f===A46){J();g=A5c;$p=1;continue _;}if(f!==A47)return g.t===0.0&&g.s===0.0?(-1000.0):CB(g.s,g.t)-1.5707963267948966;J();f=A5d;$p=2;continue _;case 1:$z=ADM(g,b,c,d,e);if(C()){break _;}g=$z;if(f!==A47)return g.t===0.0&&g.s===0.0?(-1000.0):CB(g.s,g.t)-1.5707963267948966;J();f=A5d;$p=2;case 2:$z=ADM(f,b,c,d,e);if(C()){break _;}g=$z;return g.t===
0.0&&g.s===0.0?(-1000.0):CB(g.s,g.t)-1.5707963267948966;default:Es();}}CM().s(b,c,d,e,f,g,$p);}
function AL8(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJI(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AF6(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJI(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AJI(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X9(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b&&a.bR===A47){f=0;g=e-1|0;$p=2;continue _;}return;case 2:$z=XB(b,c,d,g);if(C()){break _;}h=$z;if(h===A46)f=1;if(!f){g=e+1|0;$p=3;continue _;}f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 3:$z
=XB(b,c,d,g);if(C()){break _;}h=$z;if(h===A46)f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 4:$z=XB(b,g,d,e);if(C()){break _;}h=$z;if(h===A46)f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 5:$z=XB(b,g,d,e);if(C()){break _;}h=$z;if(h===A46)f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 6:$z=XB(b,c,g,e);if(C()){break _;}h=
$z;if(h===A46)f=1;if(!f)return;$p=7;case 7:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;if(!g){J();f=A4F.b;$p=8;continue _;}if(g>4){Ig(a,b,c,d,e);return;}J();f=A4h.b;$p=9;continue _;case 8:AJ6(b,c,d,e,f);if(C()){break _;}Ig(a,b,c,d,e);return;case 9:AJ6(b,c,d,e,f);if(C()){break _;}Ig(a,b,c,d,e);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function Ig(a,b,c,d,e){var f,g,h,i;D1(b,c+0.5,d+0.5,e+0.5,B(207),0.5,2.5999999046325684+(L(b.n)-L(b.n))*0.800000011920929);f=0;g=c;h=d+1.2;i=e;while(f<8){BP(b,B(247),g+BI(),h,i+BI(),0.0,0.0,0.0);f=f+1|0;}}
function ZL(){var a=this;GH.call(a);a.k5=0;a.gx=null;a.cu=null;}
function AN0(a,b){var c=new ZL();ARi(c,a,b);return c;}
function ARi(a,b,c){Nk(a,b,c);a.k5=0;a.gx=$rt_createBooleanArray(4);a.cu=$rt_createIntArray(4);}
function ACm(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}f=$z;g=a.b+1|0;$p=2;case 2:AEk(b,c,d,e,g,f);if(C()){break _;}HP(b,c,d,e,c,d,e);return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AJm(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAE(a,b,c,d,e);if(C()){break _;}g=$z;h=1;if(g<=0){$p=2;continue _;}i=(-100);a.k5=0;j=c-1|0;$p=3;continue _;case 2:ACm(a,b,c,d,e);if(C()){break _;}j=d-1|0;$p=7;continue _;case 3:$z=AJj(a,b,j,d,e,i);if(C()){break _;}j=$z;k=c+1|0;$p=4;case 4:$z=AJj(a,b,k,d,e,j);if
(C()){break _;}j=$z;k=e-1|0;$p=5;case 5:$z=AJj(a,b,c,d,k,j);if(C()){break _;}j=$z;k=e+1|0;$p=6;case 6:$z=AJj(a,b,c,d,k,j);if(C()){break _;}j=$z;k=j+a.pa|0;if(!(k<8&&j>=0))k=(-1);j=d+1|0;$p=8;continue _;case 7:$z=AGK(a,b,c,j,e);if(C()){break _;}k=$z;if(!k){if(g<0)return;if(!g){$p=12;continue _;}$p=13;continue _;}if(g>=8){d=a.b;$p=10;continue _;}d=a.b;k=g+8|0;$p=9;continue _;case 8:$z=AAE(a,b,c,j,e);if(C()){break _;}l=$z;if(l>=0){$p=11;continue _;}if(a.k5>=2&&a.bR===A46)k=0;if(a.bR===A47&&g<8&&k<8&&k>g&&D(f,4))
{h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 9:ADW(b,c,j,e,d,k);if(C()){break _;}return;case 10:ADW(b,c,j,e,d,g);if(C()){break _;}return;case 11:$z=AAE(a,b,c,j,e);if(C()){break _;}k=$z;if(k<8)k=k+8|0;if(a.k5>=2&&a.bR===A46)k=0;if(a.bR===A47&&g<8&&k<8&&k>g&&D(f,4)){h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 12:$z=AFU(a,b,c,d,e);if(C()){break _;}m
=$z;l=g+a.pa|0;if(g>=8)l=1;if(l>=8)return;m=m.data;if(m[0]){j=c-1|0;$p=14;continue _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 13:$z=X1(a,b,c,j,e);if(C()){break _;}j=$z;if(!j)return;$p=12;continue _;case 14:AJK(a,b,j,d,e,l);if(C()){break _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 15:AJK(a,b,j,d,e,l);if(C()){break _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e
=e+1|0;$p=21;continue _;case 16:AJK(a,b,c,d,j,l);if(C()){break _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 17:ACm(a,b,c,d,e);if(C()){break _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 18:AFp(b,c,d,e,k);if(C()){break _;}EE(b,c,d,e,a.b);j=a.b;$p=19;case 19:ACX(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 20:AJ6(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 21:AJK(a,b,c,d,e,l);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AJK(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGK(a,b,c,d,e);if(C()){break _;}g=$z;if(!g)return;$p=2;case 2:$z=X9(b,c,d,e);if(C()){break _;}g=$z;if(g>0){if(a.bR!==A47){J();h=A39.data[g];$p=4;continue _;}Ig(a,b,c,d,e);}g=a.b;$p=3;case 3:ADW(b,c,d,e,g,f);if(C()){break _;}return;case 4:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;$p=5;case 5:h.Ez(b,c,d,e,g);if(C()){break _;}g
=a.b;$p=3;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AIt(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=1000;i=0;j=S(g,1);k=S(g,3);l=S(g,2);m=c-1|0;n=e-1|0;o=d-1|0;p=S(f,4);q=f+1|0;a:{while(i<4){if(!(!i&&!j)){r=S(i,1);if(!(!r&&!g)){s=S(i,2);if(!(!s&&!k)){t=S(i,3);if(t)break a;if
(l)break a;}}}i=i+1|0;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;case 1:$z=X1(a,b,u,d,r);if(C()){break _;}t=$z;if(!t){$p=2;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;continue _;case 2:$z=XB(b,u,d,r);if(C()){break _;}v=$z;if(v!==a.bR){$p=3;continue _;}$p=4;continue _;case 3:$z=X1(a,b,u,o,r);if(C()){break _;}t=$z;if(!t)return f;if
(p<0){$p=5;continue _;}c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;case 4:$z=Z$(b,u,d,r);if(C()){break _;}t=$z;if(t){$p=3;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|
0;$p=1;continue _;case 5:$z=AIt(a,b,u,d,r,q,i);if(C()){break _;}t=$z;if(t<h)h=t;c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AFU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;h=e-1|0;i=d-1|0;if(f>=4){c=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gx;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gx;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;case 1:$z
=X1(a,b,l,d,m);if(C()){break _;}j=$z;if(!j){$p=2;continue _;}f=f+1|0;if(f>=4){c=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gx;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gx;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;continue _;case 2:$z=XB(b,l,d,m);if(C()){break _;}n=$z;if(n!==a.bR){$p=3;continue _;}$p=4;continue _;case 3:$z=X1(a,b,l,i,m);if(C()){break _;}j=$z;if(j){k=a.cu.data;j=1;$p=5;continue _;}a.cu.data[f]=0;f=f+1|0;if(f>=4){c
=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gx;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gx;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 4:$z=Z$(b,l,d,m);if(C()){break _;}j=$z;if(j){$p=3;continue _;}f=f+1|0;if(f>=4){c=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gx;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gx;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h
:e;if(f==3)m=m+1|0;$p=1;continue _;case 5:$z=AIt(a,b,l,d,m,j,f);if(C()){break _;}j=$z;k[f]=j;f=f+1|0;if(f>=4){c=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gx;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gx;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function X1(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X9(b,c,d,e);if(C()){break _;}f=$z;J();if(f!=A6m.b&&f!=A6l.b&&f!=A5s.b){if(!f)return 0;return A39.data[f].bR.c3();}return 1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AJj(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAE(a,b,c,d,e);if(C()){break _;}g=$z;if(g<0)return f;if(!g)a.k5=a.k5+1|0;if(g>=8)g=0;if(f>=0&&g>=f)g=f;return g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AGK(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XB(b,c,d,e);if(C()){break _;}f=$z;if(f===a.bR)c=0;else{if(f!==A47){$p=2;continue _;}c=0;}return c;case 2:$z=X1(a,b,c,d,e);if(C()){break _;}c=$z;return c?0:1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function XE(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJI(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=X9(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b)EE(b,c,d,e,a.b);return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ADK(){GH.call(this);}
function AQf(a,b){var c=new ADK();ATI(c,a,b);return c;}
function ATI(a,b,c){Nk(a,b,c);Ey(a,0);}
function ABO(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJI(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=X9(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return;$p=3;case 3:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;b.qC=1;f=a.b-1|0;$p=4;case 4:AEk(b,c,d,e,f,g);if(C()){break _;}HP(b,c,d,e,c,d,e);EE(b,c,d,e,a.b-1|0);b.qC=0;return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function HE(){P.call(this);}
var A4e=0;function A1o(a,b){var c=new HE();OJ(c,a,b);return c;}
function OJ(a,b,c){CS(a,b,c,A6K);}
function AL6(a,b,c,d,e){EE(b,c,d,e,a.b);}
function AMs(a,b,c,d,e,f){EE(b,c,d,e,a.b);}
function AJ$(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=X9(b,c,g,e);if(C()){break _;}g=$z;if(!g)g=1;else{J();if(g==A5G.b)g=1;else{f=A39.data[g].bR;g=f===A46?1:f!==A47?0:1;}}if(g&&d>=0){f=new Ia;h=c+0.5;i=d+0.5;j=e+0.5;c=a.b;EO(f,b);f.nn=0;f.g6=c;f.lj=1;Dx(f,0.9800000190734863,0.9800000190734863);f.cF=f.ef/2.0;k
=h;l=i;m=j;CC(f,k,l,m);f.f=0.0;f.h=0.0;f.g=0.0;f.h$=0;f.bH=k;f.ct=l;f.bG=m;if(!A4e){$p=2;continue _;}if(!f.cs){$p=3;continue _;}}return;case 2:AIS(b,f);if(C()){break _;}return;case 3:AHt(f);if(C()){break _;}if(f.cs)return;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AUM(a){return 3;}
function Ym(){A4e=0;}
function ACh(){HE.call(this);}
function A1t(a,b){var c=new ACh();AO6(c,a,b);return c;}
function AO6(a,b,c){OJ(a,b,c);}
function AZP(a,b,c){if(D(c,10))b=a.b;else{Bw();b=A6Q.cx;}return b;}
function UO(){P.call(this);}
function PG(a,b){var c=new UO();ARz(c,a,b);return c;}
function ARz(a,b,c){CS(a,b,c,A6q);}
function AUZ(a,b,c){b=a.b;J();if(b==A4y.b){Bw();b=A6R.cx;}else if(a.b!=A6e.b)b=a.b;else{Bw();b=A6S.cx;}return b;}
function AR2(a,b){return 1;}
function AAF(){P.call(this);}
function A2e(a){var b=new AAF();AZI(b,a);return b;}
function AZI(a,b){Dw(a,b,A6r);a.W=20;}
function AYe(a,b){return 1;}
function ANg(a,b,c){J();return A4k.b;}
function AOP(a,b){return b==1?21:b?20:21;}
function J8(){P.call(this);this.qj=0;}
function AK0(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.dL(c,d,e);if(C()){break _;}g=$z;if(!a.qj&&g==a.b)return 0;$p=2;case 2:$z=ABL(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Yg(){J8.call(this);this.zh=0;}
function A0J(a,b){var c=new Yg();ASF(c,a,b);return c;}
function ASF(a,b,c){CS(a,b,c,A6G);a.qj=0;a.zh=c;Ey(a,1);}
function ADz(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=XB(b,c,g,e);if(C()){break _;}f=$z;if(f.c3())return;h=c-2|0;i=c+2|0;j=d+1|0;k=e-2|0;l=e+2|0;while(h<=i){m=g;while(m<=j){n=k;if(n<=l){$p=5;continue _;}m=m+1|0;}h=h+1|0;}$p=2;case 2:$z=Z$(b,c,d,e);if(C()){break _;}i=$z;$p=3;case 3:Uc(a,
b,c,d,e,i);if(C()){break _;}i=0;$p=4;case 4:AJ6(b,c,d,e,i);if(C()){break _;}return;case 5:$z=X9(b,h,m,n);if(C()){break _;}o=$z;J();if(o==A4k.b)return;n=n+1|0;while(n>l){m=m+1|0;while(m>j){h=h+1|0;if(h>i){$p=2;continue _;}m=g;}n=k;}continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function APQ(a,b){return D(b,10)?0:1;}
function AVw(a,b,c){J();return A4p.b;}
function AT2(a){return a.qj?0:1;}
function AFh(a,b){a.qj=b;a.W=a.zh+(!b?1:0)|0;}
function AMF(a,b,c,d,e,f){return;}
function AF5(){P.call(this);}
function A04(a){var b=new AF5();AYb(b,a);return b;}
function AYb(a,b){Dw(a,b,A6I);a.W=48;}
function AFC(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;if(k<=e){$p=1;continue _;}j=j+1|0;}f=f+1|0;}return;case 1:$z=XB(b,f,j,k);if(C()){break _;}l=$z;k=k+1|0;a:while(true){if(k<=e){continue _;}j=j+1|0;while(j>d){f=f+1|0;if(f>g)break a;j=h;}k=i;}return;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function AH7(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;if(l<=c){$p=1;continue _;}k=k+1|0;}f=f+1|0;}return;case 1:$z=X9(b,f,k,l);if(C()){break _;}d=$z;$p=2;case 2:ACX(b,f,k,l,d);if(C()){break _;}l=l+1|0;a:while(true){if(l<=c){$p=1;continue _;}k=k+1|0;while(k>i){f
=f+1|0;if(f>g)break a;k=h;}l=j;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function K6(){P.call(this);this.zs=0;}
function AY1(a){return 0;}
function Uq(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.dL(c,d,e);if(C()){break _;}g=$z;if(!a.zs&&g==a.b)return 0;$p=2;case 2:$z=ABL(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AKR(){K6.call(this);}
function A01(a,b,c,d){var e=new AKR();AVy(e,a,b,c,d);return e;}
function AVy(a,b,c,d,e){CS(a,b,c,d);a.zs=e;}
function APa(a,b){return 0;}
function ACp(){Fb.call(this);}
function ANF(a,b){var c=new ACp();AZD(c,a,b);return c;}
function AZD(a,b,c){JK(a,b,c);Bj(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function AD4(a,b){J();return A5R.data[b];}
function YS(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Tw(b,c,d,e);if(C()){break _;}f=$z;if(f>13)return 0;d=d-1|0;$p=2;case 2:$z=X9(b,c,d,e);if(C()){break _;}c=$z;return !AD4(a,c)?0:1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function W$(){P.call(this);}
function Z3(a,b){var c=new W$();AQq(c,a,b);return c;}
function AQq(a,b,c){Dw(a,b,A6F);a.W=c;}
function AU7(a,b){return b==1?a.W-16|0:b?a.W:a.W+16|0;}
function U$(){P.call(this);this.uj=0;}
function AYv(a,b){var c=new U$();AWf(c,a,b);return c;}
function AWf(a,b,c){CS(a,b,6,A6q);a.uj=c;if(!c)Bj(a,0.0,0.0,0.0,1.0,0.5,1.0);FD(a,255);}
function AZo(a,b){return b>1?5:6;}
function AV1(a){return a.uj;}
function Xg(a,b,c,d,e,f){J();}
function WZ(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:J();f=d-1|0;$p=1;case 1:$z=X9(b,c,f,e);if(C()){break _;}g=$z;if(g!=A4c.b)return;g=0;$p=2;case 2:AJ6(b,c,d,e,g);if(C()){break _;}d=A4b.b;$p=3;case 3:AJ6(b,c,f,e,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ARq(a,b,c){J();return A4c.b;}
function APS(a){return a.uj;}
function AMQ(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:J();if(a!==A4c){$p=1;continue _;}if(f==1)return 1;$p=2;continue _;case 1:ABL(a,b,c,d,e,f);if(C()){break _;}if(f==1)return 1;$p=2;case 2:$z=ABL(a,b,c,d,e,f);if(C()){break _;}g=$z;if(!g)c=0;else{if(f){$p=3;continue _;}c=1;}return c;case 3:$z=b.dL(c,d,e);if(C()){break _;}c=$z;return c==a.b?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AIR(){P.call(this);}
function A0K(a,b){var c=new AIR();ASg(c,a,b);return c;}
function ASg(a,b,c){CS(a,b,c,A6M);}
function AVn(a,b){return !b?a.W+2|0:b!=1?a.W:a.W+1|0;}
function AOz(a,b){return 0;}
function ABU(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=APG(b,c+0.5,d+0.5,e+0.5);f.gG=D(b.n,f.gG/4|0)+(f.gG/8|0)|0;$p=1;case 1:AIS(b,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AMz(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=APG(b,c+0.5,d+0.5,e+0.5);$p=1;case 1:AIS(b,g);if(C()){break _;}C2(b,g,B(218),1.0,1.0);return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function YJ(){P.call(this);}
function A0u(a,b){var c=new YJ();ANX(c,a,b);return c;}
function ANX(a,b,c){CS(a,b,c,A6r);}
function AZH(a,b){return b>1?a.W:4;}
function AU8(a,b){return 0;}
function TJ(){J1.call(this);}
function A1e(a,b){var c=new TJ();ARu(c,a,b);return c;}
function ARu(a,b,c){AD5(a,b,c);}
function AUd(a,b){return 1;}
function AOq(a,b,c){J();return A4F.b;}
function AJa(){P.call(this);}
function A06(a,b){var c=new AJa();AZx(c,a,b);return c;}
function AZx(a,b,c){CS(a,b,c,A6L);Ey(a,1);}
function AHY(a,b,c,d,e){return null;}
function ATt(a){return 0;}
function APe(a){return 0;}
function ASB(a){return 2;}
function AGV(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=Wj(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=Wj(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=Wj(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;f=e+1|0;$p=4;case 4:$z=Wj(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;d=d-1|0;$p=5;case 5:$z=Wj(b,c,d,e);if(C()){break _;}c=$z;return c;default:
Es();}}CM().s(a,b,c,d,e,f,$p);}
function AIp(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;if(f==1){h=d-1|0;$p=2;continue _;}if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 2:$z=Wj(b,c,h,e);if(C()){break _;}h=$z;if(h)g=5;if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h
=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 3:$z=Wj(b,c,d,h);if(C()){break _;}h=$z;if(h)g=4;if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 4:$z=Wj(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 5:$z=Wj(b,h,d,e);if(C()){break _;}h=$z;if(h)g=2;if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 6:$z
=Wj(b,f,d,e);if(C()){break _;}f=$z;if(f)g=1;$p=7;case 7:AFp(b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AMq(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;if(g)return;$p=2;case 2:W9(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function W9(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=Wj(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=c+1|0;$p=2;continue _;}f=1;$p=3;continue _;case 2:$z=Wj(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=e-1|0;$p=4;continue _;}f=2;$p=5;continue _;case 3:AFp(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 4:$z=Wj(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=e+1|0;$p=7;continue _;}f=3;$p=8;continue _;case 5:AFp(b,
c,d,e,f);if(C()){break _;}$p=6;case 6:AAv(a,b,c,d,e);if(C()){break _;}return;case 7:$z=Wj(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=d-1|0;$p=9;continue _;}f=4;$p=10;continue _;case 8:AFp(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 9:$z=Wj(b,c,f,e);if(C()){break _;}f=$z;if(!f){$p=6;continue _;}f=5;$p=11;continue _;case 10:AFp(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 11:AFp(b,c,d,e,f);if(C()){break _;}$p=6;continue _;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AE8(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAv(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;$p=2;case 2:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;h=0;f=c-1|0;$p=3;case 3:$z=Wj(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==1)h=1;f=c+1|0;$p=4;case 4:$z=Wj(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==2)h=1;f=e-1|0;$p=5;case 5:$z=Wj(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==
3)h=1;f=e+1|0;$p=6;case 6:$z=Wj(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==4)h=1;f=d-1|0;$p=7;case 7:$z=Wj(b,c,f,e);if(C()){break _;}f=$z;if(!f&&g==5)h=1;if(!h)return;$p=8;case 8:$z=Z$(b,c,d,e);if(C()){break _;}f=$z;$p=9;case 9:Uc(a,b,c,d,e,f);if(C()){break _;}f=0;$p=10;case 10:AJ6(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AAv(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGV(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=Z$(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Uc(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:AJ6(b,c,d,e,f);if(C()){break _;}return 0;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AFd(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}h=$z;if(h==1)Bj(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)Bj(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)Bj(a,0.3499999940395355,0.20000000298023224,
0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)Bj(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else Bj(a,0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);$p=2;case 2:$z=IC(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AKT(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;m=j;BP(b,B(248),k,l,m,0.0,0.0,0.0);BP(b,B(249),k,l,m,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l
=i+0.2199999988079071;m=j;BP(b,B(248),k,l,m,0.0,0.0,0.0);BP(b,B(249),k,l,m,0.0,0.0,0.0);}else if(g==3){k=h;l=i+0.2199999988079071;m=j-0.27000001072883606;BP(b,B(248),k,l,m,0.0,0.0,0.0);BP(b,B(249),k,l,m,0.0,0.0,0.0);}else if(g!=4){n=h;o=i;p=j;BP(b,B(248),n,o,p,0.0,0.0,0.0);BP(b,B(249),n,o,p,0.0,0.0,0.0);}else{k=h;l=i+0.2199999988079071;m=j+0.27000001072883606;BP(b,B(248),k,l,m,0.0,0.0,0.0);BP(b,B(249),k,l,m,0.0,0.0,0.0);}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AJy(){var a=this;P.call(a);a.qP=null;a.sc=null;}
function A2h(a,b){var c=new AJy();AUD(c,a,b);return c;}
function AUD(a,b,c){CS(a,b,c,A6J);a.qP=$rt_createIntArray(256);a.sc=$rt_createIntArray(256);Gm(a,A4j.b,5,20);Gm(a,A4k.b,5,5);Gm(a,A4l.b,30,60);Gm(a,A4D.b,30,20);Gm(a,A4E.b,15,100);Gm(a,A4x.b,30,60);Ey(a,1);}
function Gm(a,b,c,d){a.qP.data[b]=c;a.sc.data[b]=d;}
function ALU(a,b,c,d,e){return null;}
function AV6(a){return 0;}
function AXX(a){return 0;}
function AP8(a){return 3;}
function APA(a,b){return 0;}
function ARZ(a){return 20;}
function TI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;h=S(g,15);if(h>=0){$p=2;continue _;}i=g+1|0;$p=3;continue _;case 2:$z=AHx(a,b,c,d,e);if(C()){break _;}i=$z;if(i){j=d-1|0;$p=4;continue _;}h=d-1|0;$p=5;continue _;case 3:AFp(b,
c,d,e,i);if(C()){break _;}EE(b,c,d,e,a.b);$p=2;continue _;case 4:$z=ABi(a,b,c,j,e);if(C()){break _;}i=$z;if(!i&&!h&&!D(f,4)){h=0;$p=13;continue _;}if(!(g%5|0)&&g>5){h=c+1|0;i=300;$p=7;continue _;}return;case 5:$z=Wj(b,c,h,e);if(C()){break _;}h=$z;if(h&&g<=3)return;h=0;$p=6;case 6:AJ6(b,c,d,e,h);if(C()){break _;}return;case 7:Ux(a,b,h,d,e,i,f);if(C()){break _;}i=c-1|0;g=300;$p=8;case 8:Ux(a,b,i,d,e,g,f);if(C()){break _;}g=100;$p=9;case 9:Ux(a,b,c,j,e,g,f);if(C()){break _;}k=d+1|0;g=200;$p=10;case 10:Ux(a,b,c,
k,e,g,f);if(C()){break _;}l=e-1|0;g=300;$p=11;case 11:Ux(a,b,c,d,l,g,f);if(C()){break _;}m=e+1|0;g=300;$p=12;case 12:Ux(a,b,c,d,m,g,f);if(C()){break _;}n=d+4|0;a:{while(i<=h){o=l;while(o<=m){p=j;while(p<=n){if(i!=c)break a;if(p!=d)break a;if(o!=e)break a;p=p+1|0;}o=o+1|0;}i=i+1|0;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 13:AJ6(b,c,d,e,h);if(C()){break _;}return;case 14:$z=X9(b,i,p,o);if(C()){break _;}r=$z;if(!r){r=i+1|0;$p=15;continue _;}if(0>0&&D(f,q)<=0){g=a.b;$p=21;continue _;}b:
{c:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break c;o=l;}p=j;}if(i!=c)break b;if(p!=d)break b;if(o==e)continue;else break b;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;continue _;case 15:$z=ABQ(a,b,r,p,o,g);if(C()){break _;}g=$z;r=i-1|0;$p=16;case 16:$z=ABQ(a,b,r,p,o,g);if(C()){break _;}g=$z;r=p-1|0;$p=17;case 17:$z=ABQ(a,b,i,r,o,g);if(C()){break _;}g=$z;r=p+1|0;$p=18;case 18:$z=ABQ(a,b,i,r,o,g);if(C()){break _;}g=$z;r=o-1|0;$p=19;case 19:$z=ABQ(a,b,i,p,r,g);if(C()){break _;}r=$z;g
=o+1|0;$p=20;case 20:$z=ABQ(a,b,i,p,g,r);if(C()){break _;}r=$z;if(r>0&&D(f,q)<=r){g=a.b;$p=21;continue _;}d:{b:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break b;o=l;}p=j;}if(i!=c)break d;if(p!=d)break d;if(o==e)continue;else break d;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 21:AJ6(b,i,p,o,g);if(C()){break _;}a:{d:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break d;o=l;}p=j;}if(i!=c)break a;if(p!=d)break a;if(o==e)continue;else break a;}return;}q
=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function Ux(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.sc.data;$p=1;case 1:$z=X9(b,c,d,e);if(C()){break _;}i=$z;j=h[i];if(D(g,f)>=j)return;$p=2;case 2:$z=X9(b,c,d,e);if(C()){break _;}f=$z;J();i=f!=A4E.b?0:1;if(D(g,2)){f=0;$p=3;continue _;}f=a.b;$p=4;continue _;case 3:AJ6(b,c,d,e,f);if(C()){break _;}if(!i)return;g=A4E;f=0;$p=5;continue _;case 4:AJ6(b,c,d,e,f);if
(C()){break _;}if(!i)return;g=A4E;f=0;$p=5;case 5:g.l7(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AHx(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c+1|0;$p=1;case 1:$z=ABi(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c-1|0;$p=2;case 2:$z=ABi(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=d-1|0;$p=3;case 3:$z=ABi(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=d+1|0;$p=4;case 4:$z=ABi(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=5;case 5:$z=ABi(a,b,c,d,f);if(C()){break _;}f=
$z;if(f)return 1;e=e+1|0;$p=6;case 6:$z=ABi(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AUn(a){return 0;}
function ABi(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.qP.data;$p=1;case 1:$z=b.dL(c,d,e);if(C()){break _;}c=$z;return f[c]<=0?0:1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ABQ(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.qP.data;$p=1;case 1:$z=X9(b,c,d,e);if(C()){break _;}c=$z;h=g[c];if(h>f)f=h;return f;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AH4(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=Wj(b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AHx(a,b,c,d,e);if(C()){break _;}c=$z;return c?1:0;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Xc(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=Wj(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AHx(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return;f=0;$p=3;case 3:AJ6(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function X5(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=Wj(b,c,f,e);if(C()){break _;}f=$z;if(f){EE(b,c,d,e,a.b);return;}$p=2;case 2:$z=AHx(a,b,c,d,e);if(C()){break _;}f=$z;if(f){EE(b,c,d,e,a.b);return;}f=0;$p=3;case 3:AJ6(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AMG(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!D(f,24))D1(b,c+0.5,d+0.5,e+0.5,B(250),1.0+L(f),L(f)*0.699999988079071+0.30000001192092896);g=d-1|0;$p=1;case 1:$z=Wj(b,c,g,e);if(C()){break _;}h=$z;if(h){g=0;i=c;j=d;k=e;while(g<3){BP(b,B(247),i+L(f),j+L(f)*0.5+0.5,k+L(f),0.0,0.0,
0.0);g=g+1|0;}return;}J();l=A5G;$p=2;case 2:$z=ABi(l,b,c,g,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;k=e;while(g<3){BP(b,B(247),i+L(f),j+L(f)*0.5+0.5,k+L(f),0.0,0.0,0.0);g=g+1|0;}return;}l=A5G;g=c-1|0;$p=3;case 3:a:{$z=ABi(l,b,g,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;m=d;n=e;while(true){if(g>=2)break a;j=i+L(f)*0.10000000149011612;k=m+L(f);o=n+L(f);BP(b,B(247),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=A5G;h=c+1|0;$p=4;case 4:a:{$z=ABi(l,b,h,d,e);if(C()){break _;}g=$z;if(g){g=0;i=h;m=d;n=e;while(true){if(g>=2)break a;j
=i-L(f)*0.10000000149011612;k=m+L(f);o=n+L(f);BP(b,B(247),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=A5G;g=e-1|0;$p=5;case 5:a:{$z=ABi(l,b,c,d,g);if(C()){break _;}g=$z;if(g){g=0;i=c;k=d;n=e;while(true){if(g>=2)break a;j=i+L(f);m=k+L(f);o=n+L(f)*0.10000000149011612;BP(b,B(247),j,m,o,0.0,0.0,0.0);g=g+1|0;}}}l=A5G;g=e+1|0;$p=6;case 6:a:{$z=ABi(l,b,c,d,g);if(C()){break _;}h=$z;if(h){h=0;o=c;p=d;j=g;while(true){if(h>=2)break a;q=o+L(f);i=p+L(f);n=j-L(f)*0.10000000149011612;BP(b,B(247),q,i,n,0.0,0.0,0.0);h=h+1|0;}}}l=A5G;d=
d+1|0;$p=7;case 7:a:{$z=ABi(l,b,c,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;n=e;while(true){if(g>=2)break a;q=i+L(f);k=j-L(f)*0.10000000149011612;o=n+L(f);BP(b,B(247),q,k,o,0.0,0.0,0.0);g=g+1|0;}}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function DN(){P.call(this);}
function AJc(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.rp();$p=1;case 1:ABd(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AGM(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA7(b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function VY(){DN.call(this);}
function A2b(a,b){var c=new VY();AOn(c,a,b);return c;}
function AOn(a,b,c){CS(a,b,c,A6q);}
function APX(a){return A12();}
function AV8(a){return 0;}
function Vo(){P.call(this);this.ci=null;}
function AZq(a,b){var c=new Vo();AWZ(c,a,b);return c;}
function AWZ(a,b,c){CS(a,b,c.W,c.bR);a.ci=c;BB(a,c.oD);C6(a,c.mv/3.0);a.f0=c.f0;}
function AVV(a){return 0;}
function AO$(a){return 0;}
function AQ9(a){return 10;}
function AJ_(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABL(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AEw(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}h=$z;if(!h){Bj(a,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bj(a,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bj(a,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;}Bj(a,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:AGm(a,b,c,d,e,f,
g);if(C()){break _;}Bj(a,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:AGm(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 4:AGm(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:AGm(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 6:AGm(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:AGm(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 8:AGm(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.5,1.0,
0.5,1.0);$p=9;case 9:AGm(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function ACO(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=XB(b,c,g,e);if(C()){break _;}h=$z;if(!h.c3()){$p=2;continue _;}i=a.ci.b;$p=11;continue _;case 2:ADt(a,b,c,d,e);if(C()){break _;}i=c+1|0;j=d-1|0;$p=3;case 3:ADt(a,b,i,j,e);if(C()){break _;}k=c-1|0;$p=4;case 4:ADt(a,b,k,j,e);if(C()){break _;}l=e-1|0;$p=5;case 5:ADt(a,
b,c,j,l);if(C()){break _;}m=e+1|0;$p=6;case 6:ADt(a,b,c,j,m);if(C()){break _;}$p=7;case 7:ADt(a,b,i,g,e);if(C()){break _;}$p=8;case 8:ADt(a,b,k,g,e);if(C()){break _;}$p=9;case 9:ADt(a,b,c,g,l);if(C()){break _;}$p=10;case 10:ADt(a,b,c,g,m);if(C()){break _;}h=a.ci;$p=12;continue _;case 11:AJ6(b,c,d,e,i);if(C()){break _;}h=a.ci;$p=12;case 12:h.ep(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ADt(a,b,c,d,e){var f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AKj(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;g=(-1);f=c+1|0;h=d+1|0;$p=2;case 2:$z=AKj(a,b,f,h,e);if(C()){break _;}i=$z;if(i)g=0;i=c-1|0;$p=3;case 3:$z=AKj(a,b,i,h,e);if(C()){break _;}j=$z;if(j)g=1;j=e+1|0;$p=4;case 4:$z=AKj(a,b,c,h,j);if(C()){break _;}k=$z;if(k)g=2;k=e-1|0;$p=
5;case 5:$z=AKj(a,b,c,h,k);if(C()){break _;}h=$z;if(h)g=3;if(g<0){$p=6;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 6:$z=Y8(a,b,f,d,e);if(C()){break _;}h=$z;if(h){$p=7;continue _;}$p=9;continue _;case 7:$z=Y8(a,b,i,d,e);if(C()){break _;}h=$z;if(!h)g=0;$p=9;continue _;case 8:$z=AKj(a,b,i,h,e);if(C()){break _;}i=$z;if(i)g=0;$p=12;continue _;case 9:$z=Y8(a,b,i,d,e);if(C()){break _;}h=$z;if(h){$p=10;continue _;}$p=13;continue _;case 10:$z=Y8(a,b,f,d,e);if(C()){break _;}h=$z;if
(!h)g=1;$p=13;continue _;case 11:AFp(b,c,d,e,g);if(C()){break _;}return;case 12:$z=AKj(a,b,f,h,e);if(C()){break _;}f=$z;if(f)g=1;$p=15;continue _;case 13:$z=Y8(a,b,c,d,j);if(C()){break _;}h=$z;if(h){$p=14;continue _;}$p=16;continue _;case 14:$z=Y8(a,b,c,d,k);if(C()){break _;}h=$z;if(!h)g=2;$p=16;continue _;case 15:$z=AKj(a,b,c,h,k);if(C()){break _;}f=$z;if(f)g=2;$p=18;continue _;case 16:$z=Y8(a,b,c,d,k);if(C()){break _;}h=$z;if(h){$p=17;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 17:$z
=Y8(a,b,c,d,j);if(C()){break _;}h=$z;if(!h)g=3;if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 18:$z=AKj(a,b,c,h,j);if(C()){break _;}f=$z;if(f)g=3;if(g<0)return;$p=11;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Y8(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XB(b,c,d,e);if(C()){break _;}b=$z;return b.c3();default:Es();}}CM().s(a,b,c,d,e,$p);}
function AKj(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X9(b,c,d,e);if(C()){break _;}f=$z;if(!f)c=0;else{J();c=A39.data[f].dO()!=10?0:1;}return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AJO(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.jM(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function WT(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.pr(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function YX(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.l7(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AHy(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:$z=f.zo(b,c,d,e);if(C()){break _;}g=$z;return g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AYf(a,b){return a.ci.vR(b);}
function AXH(a){return a.ci.oh();}
function AUW(a,b,c){return a.ci.dq(b,c);}
function ASh(a,b){return a.ci.d_(b);}
function AP9(a,b,c){return a.ci.em(b,c);}
function AXD(a,b){return a.ci.bZ(b);}
function AHJ(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:$z=g.sn(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AOV(a){return a.ci.lc();}
function AG3(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:$z=f.nr(b,c,d,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Yk(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.ci;$p=1;case 1:h.o2(b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AQW(a){return a.ci.nN();}
function AQ5(a,b,c){return a.ci.nD(b,c);}
function AG9(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:$z=f.fg(b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Yf(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;$p=1;case 1:ACO(a,b,c,d,e,f);if(C()){break _;}g=a.ci;$p=2;case 2:g.e2(b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Uu(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:f.ko(b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ACZ(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.ci;$p=1;case 1:h.DJ(b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AHC(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.Ez(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ALe(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.ng(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ALh(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.ew(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ABZ(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:$z=g.ku(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function U3(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:f.qZ(b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ABb(){DN.call(this);this.eM=null;}
function A0k(a){var b=new ABb();AWT(b,a);return b;}
function AWT(a,b){Dw(a,b,A6r);a.eM=new Df;a.W=26;}
function Z0(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1)return a.W-1|0;if(!f)return a.W-1|0;g=e-1|0;$p=1;case 1:$z=b.dL(c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=b.dL(c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=b.dL(k,d,e);if(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=b.dL(m,
d,e);if(C()){break _;}n=$z;if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;J();if(A5R.data[h]&&!A5R.data[j])k=3;if(A5R.data[j]&&!A5R.data[h])k=2;if(A5R.data[l]&&!A5R.data[n])k=5;if(A5R.data[n]&&!A5R.data[l])k=4;return f!=k?a.W:a.W+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);c=l!=a.b?m:k;$p=7;continue _;}return a.W;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);c=h!=a.b?i:g;$p=5;continue _;}return a.W;case 5:$z=b.dL(k,d,c);if(C()){break _;}p=$z;if(h==a.b)i=g;$p=6;case 6:$z=b.dL(m,d,i);if(C()){break _;}m=$z;if(f==4)o=(-1)-o|0;i
=5;J();if(!(!A5R.data[l]&&!A5R.data[p])&&!A5R.data[n]&&!A5R.data[m])i=5;if(!(!A5R.data[n]&&!A5R.data[m])&&!A5R.data[l]&&!A5R.data[p])i=4;return (f!=i?a.W+32|0:a.W+16|0)+o|0;case 7:$z=b.dL(c,d,g);if(C()){break _;}g=$z;if(l==a.b)m=k;$p=8;case 8:$z=b.dL(m,d,i);if(C()){break _;}m=$z;if(f==3)o=(-1)-o|0;i=3;J();if(!(!A5R.data[h]&&!A5R.data[g])&&!A5R.data[j]&&!A5R.data[m])i=3;if(!(!A5R.data[j]&&!A5R.data[m])&&!A5R.data[h]&&!A5R.data[g])i=2;return (f!=i?a.W+32|0:a.W+16|0)+o|0;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,p,$p);}
function AYk(a,b){return b==1?a.W-1|0:!b?a.W-1|0:b!=3?a.W:a.W+1|0;}
function AEZ(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;$p=1;case 1:$z=X9(b,g,d,e);if(C()){break _;}h=$z;if(h==a.b)f=1;h=c+1|0;$p=2;case 2:$z=X9(b,h,d,e);if(C()){break _;}i=$z;if(i==a.b)f=f+1|0;i=e-1|0;$p=3;case 3:$z=X9(b,c,d,i);if(C()){break _;}j=$z;if(j==a.b)f=f+1|0;k=e+1|0;$p=4;case 4:$z=X9(b,c,d,k);if(C()){break _;}l=$z;if(l==
a.b)f=f+1|0;if(f>1)return 0;$p=5;case 5:$z=ADV(a,b,g,d,e);if(C()){break _;}j=$z;if(j)return 0;$p=6;case 6:$z=ADV(a,b,h,d,e);if(C()){break _;}e=$z;if(e)return 0;$p=7;case 7:$z=ADV(a,b,c,d,i);if(C()){break _;}e=$z;if(e)return 0;$p=8;case 8:$z=ADV(a,b,c,d,k);if(C()){break _;}c=$z;return c?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADV(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X9(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return 0;f=c-1|0;$p=2;case 2:$z=X9(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=c+1|0;$p=3;case 3:$z=X9(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=e-1|0;$p=4;case 4:$z=X9(b,c,d,f);if(C()){break _;}f=$z;if(f==a.b)return 1;e=e+1|0;$p=5;case 5:$z=X9(b,c,d,e);if(C()){break _;}c=$z;return c
!=a.b?0:1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AMS(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AH_(b,c,d,e);if(C()){break _;}f=$z;g=f;h=0;i=27;j=c;k=d;l=e;while(h<i){f=Oi(g,h);if(f!==null){m=L(a.eM)*0.800000011920929+0.10000000149011612;n=L(a.eM)*0.800000011920929+0.10000000149011612;o
=L(a.eM)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;if(f.m>0){s=D(a.eM,21)+10|0;if(s>f.m)s=f.m;f.m=f.m-s|0;t=Ga(b,p,q,r,L$(f.bs,s,f.dP));t.f=CH(a.eM)*0.05000000074505806;t.h=CH(a.eM)*0.05000000074505806+0.20000000298023224;t.g=CH(a.eM)*0.05000000074505806;$p=3;continue _;}}h=h+1|0;}$p=2;case 2:AGM(a,b,c,d,e);if(C()){break _;}return;case 3:AIS(b,t);if(C()){break _;}a:while(true){if(f.m>0){s=D(a.eM,21)+10|0;if(s>f.m)s=f.m;f.m=f.m-s|0;t=Ga(b,p,q,r,L$(f.bs,s,f.dP));t.f=CH(a.eM)*0.05000000074505806;t.h
=CH(a.eM)*0.05000000074505806+0.20000000298023224;t.g=CH(a.eM)*0.05000000074505806;continue _;}while(true){h=h+1|0;if(h>=i)break a;f=Oi(g,h);if(f===null)continue;else break;}m=L(a.eM)*0.800000011920929+0.10000000149011612;n=L(a.eM)*0.800000011920929+0.10000000149011612;o=L(a.eM)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;}$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function ABg(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AH_(b,c,d,e);if(C()){break _;}g=$z;h=g;i=d+1|0;$p=2;case 2:$z=Wj(b,c,i,e);if(C()){break _;}j=$z;if(j)return 1;k=c-1|0;$p=3;case 3:$z=X9(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){$p=5;continue _;}l=c+1|0;$p=4;case 4:$z=X9(b,l,d,e);if
(C()){break _;}j=$z;if(j==a.b){$p=7;continue _;}m=e-1|0;$p=6;continue _;case 5:$z=Wj(b,k,i,e);if(C()){break _;}j=$z;if(j)return 1;l=c+1|0;$p=4;continue _;case 6:$z=X9(b,c,d,m);if(C()){break _;}j=$z;if(j==a.b){$p=9;continue _;}n=e+1|0;$p=8;continue _;case 7:$z=Wj(b,l,i,e);if(C()){break _;}j=$z;if(j)return 1;m=e-1|0;$p=6;continue _;case 8:$z=X9(b,c,d,n);if(C()){break _;}j=$z;if(j!=a.b){$p=10;continue _;}$p=11;continue _;case 9:$z=Wj(b,c,i,m);if(C()){break _;}j=$z;if(j)return 1;n=e+1|0;$p=8;continue _;case 10:$z
=X9(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){g=new G1;o=B(251);$p=12;continue _;}g=h;$p=13;continue _;case 11:$z=Wj(b,c,i,n);if(C()){break _;}j=$z;if(j)return 1;$p=10;continue _;case 12:$z=AH_(b,k,d,e);if(C()){break _;}p=$z;Jp(g,o,p,h);$p=13;case 13:$z=X9(b,l,d,e);if(C()){break _;}j=$z;if(j!=a.b){o=g;$p=15;continue _;}o=new G1;p=B(251);g=g;$p=14;case 14:$z=AH_(b,l,d,e);if(C()){break _;}h=$z;Jp(o,p,g,h);$p=15;case 15:$z=X9(b,c,d,m);if(C()){break _;}e=$z;if(e==a.b){g=new G1;p=B(251);$p=16;continue _;}g=o;$p=
17;continue _;case 16:$z=AH_(b,c,d,m);if(C()){break _;}h=$z;Jp(g,p,h,o);$p=17;case 17:$z=X9(b,c,d,n);if(C()){break _;}e=$z;if(e==a.b){o=new G1;p=B(251);g=g;$p=18;continue _;}o=g;b=o;$p=19;continue _;case 18:$z=AH_(b,c,d,n);if(C()){break _;}b=$z;Jp(o,p,g,b);b=o;$p=19;case 19:UR(f,b);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ARF(a){return A0$();}
function AFB(){P.call(this);}
function A1w(a,b){var c=new AFB();AOo(c,a,b);return c;}
function AOo(a,b,c){CS(a,b,c,A6L);}
function AAi(a,b,c,d,e){return null;}
function ANM(a){return 0;}
function AVx(a){return 0;}
function AXc(a){return 5;}
function AYL(a,b){return 1;}
function AOc(a){return 0;}
function ACI(){P.call(this);}
function A1g(a){var b=new ACI();ARn(b,a);return b;}
function ARn(a,b){Dw(a,b,A6r);a.W=59;}
function APt(a,b){if(b==1)b=a.W-16|0;else if(!b){J();b=A4j.bZ(0);}else b=b!=2&&b!=4?a.W:a.W+1|0;return b;}
function AB6(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AH3(f);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AFA(){Fb.call(this);}
function A15(a,b){var c=new AFA();ARN(c,a,b);return c;}
function ARN(a,b,c){JK(a,b,c);a.W=c;Ey(a,1);Bj(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AQY(a,b){J();return b!=A6i.b?0:1;}
function AEl(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEn(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=Tw(b,c,g,e);if(C()){break _;}h=$z;if(h<9)return;$p=3;case 3:$z=Z$(b,c,d,e);if(C()){break _;}h=$z;if(h>=7)return;$p=4;case 4:$z=U5(a,b,c,d,e);if(C()){break _;}i=$z;if(D(f,100.0/i|0))return;g=h+1|0;$p=5;case 5:AFp(b,c,d,e,g);if(C()){break _;}return;default:
Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function U5(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;g=e-1|0;$p=1;case 1:$z=X9(b,c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=X9(b,c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=X9(b,k,d,e);if
(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=X9(b,m,d,e);if(C()){break _;}n=$z;$p=5;case 5:$z=X9(b,k,d,g);if(C()){break _;}o=$z;$p=6;case 6:$z=X9(b,m,d,g);if(C()){break _;}p=$z;$p=7;case 7:$z=X9(b,m,d,i);if(C()){break _;}q=$z;$p=8;case 8:$z=X9(b,k,d,i);if(C()){break _;}r=$z;s=l!=a.b&&n!=a.b?0:1;t=h!=a.b&&j!=a.b?0:1;u=o!=a.b&&p!=a.b&&q!=a.b&&r!=a.b?0:1;o=d-1|0;while(k<=m){v=g;if(v<=i){$p=9;continue _;}k=k+1|0;}a:{if(!u){if(!s)break a;if(!t)break a;}f=f/2.0;}return f;case 9:$z=X9(b,k,o,v);if(C()){break _;}w=$z;x
=0.0;J();if(w==A6i.b){x=1.0;$p=10;continue _;}if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){continue _;}k=k+1|0;if(k>m)break;v=g;}b:{if(!u){if(!s)break b;if(!t)break b;}f=f/2.0;}return f;case 10:$z=Z$(b,k,o,v);if(C()){break _;}d=$z;if(d>0)x=3.0;if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){$p=9;continue _;}k=k+1|0;if(k>m)break;v=g;}c:{if(!u){if(!s)break c;if(!t)break c;}f=f/2.0;}return f;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AXV(a,b,c){if(c<0)c=7;return a.W+c|0;}
function AU$(a){return 6;}
function AIb(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;h=c;i=d;j=e;while(g<3){if(D(b.n,15)<=f){k=L(b.n)*0.699999988079071+0.15000000596046448;l=L(b.n)*0.699999988079071+0.15000000596046448;m=L(b.n)*0.699999988079071+0.15000000596046448;n=new Er;o=h+k;p=i+l;q=j+m;r=new B6;Bw();Dg(r,
A6T);F_(n,b,o,p,q,r);n.gr=10;$p=1;continue _;}g=g+1|0;}return;case 1:AIS(b,n);if(C()){break _;}while(true){g=g+1|0;if(g>=3)break;if(D(b.n,15)>f)continue;else{k=L(b.n)*0.699999988079071+0.15000000596046448;l=L(b.n)*0.699999988079071+0.15000000596046448;m=L(b.n)*0.699999988079071+0.15000000596046448;n=new Er;o=h+k;p=i+l;q=j+m;r=new B6;Bw();Dg(r,A6T);F_(n,b,o,p,q,r);n.gr=10;continue _;}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ASE(a,b,c){var d;c=Ds();d=new Bc;Ba(d);B9(c,O(Bd(H(d,B(252)),b)));if(b!=7)b=(-1);else{Bw();b=A6U.cx;}return b;}
function AVj(a,b){return 1;}
function ALd(){P.call(this);}
function A1E(a){var b=new ALd();ATY(b,a);return b;}
function ATY(a,b){Dw(a,b,A6E);a.W=87;Ey(a,1);Bj(a,0.0,0.0,0.0,1.0,0.9375,1.0);FD(a,255);}
function WJ(a,b,c,d,e){return Dy(c+0|0,d+0|0,e+0|0,c+1|0,d+1|0,e+1|0);}
function AOs(a){return 0;}
function AS3(a){return 0;}
function AZO(a,b,c){b=S(b,1);return !b&&c>0?a.W-1|0:b?2:a.W;}
function AHR(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(D(f,5))return;g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;a:while(true){if(g>h){if(!0){$p=1;continue _;}g=7;$p=2;continue _;}l=d;while(l<=i){m=j;if(m<=k)break a;l=l+1|0;}g=g+1|0;}$p=4;continue _;case 1:$z=Z$(b,c,d,e);if(C()){break _;}h=$z;if(h>0){g=h-1|0;$p=3;continue _;}g
=c-0|0;h=c+0|0;m=e-0|0;j=e+0|0;while(true){if(g>h){if(0)return;J();g=A4a.b;$p=5;continue _;}l=m;if(l<=j)break;g=g+1|0;}$p=6;continue _;case 2:AFp(b,c,d,e,g);if(C()){break _;}return;case 3:AFp(b,c,d,e,g);if(C()){break _;}return;case 4:$z=XB(b,g,l,m);if(C()){break _;}f=$z;if(f===A46)g=1;else{m=m+1|0;b:while(true){if(m<=k){continue _;}l=l+1|0;while(l>i){g=g+1|0;if(g>h)break b;l=d;}m=j;}g=0;}if(!g){$p=1;continue _;}g=7;$p=2;continue _;case 5:AJ6(b,c,d,e,g);if(C()){break _;}return;case 6:$z=X9(b,g,i,l);if(C()){break _;}n
=$z;J();if(n==A6h.b)g=1;else{l=l+1|0;while(true){if(l<=j){continue _;}g=g+1|0;if(g>h)break;l=m;}g=0;}if(g)return;J();g=A4a.b;$p=5;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AFH(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(D(b.n,4))return;J();g=A4a.b;$p=1;case 1:AJ6(b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function T5(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d+1|0;$p=1;case 1:$z=XB(b,c,f,e);if(C()){break _;}g=$z;if(!g.c3())return;J();f=A4a.b;$p=2;case 2:AJ6(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function APP(a,b,c){J();return A4a.dq(0,c);}
function ABk(){DN.call(this);this.uh=0;}
function AVd(a,b){var c=new ABk();ANI(c,a,b);return c;}
function ANI(a,b,c){Dw(a,b,A6q);a.uh=c;a.W=45;}
function X7(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJc(a,b,c,d,e);if(C()){break _;}f=e-1|0;$p=2;case 2:$z=X9(b,c,d,f);if(C()){break _;}g=$z;f=e+1|0;$p=3;case 3:$z=X9(b,c,d,f);if(C()){break _;}f=$z;h=c-1|0;$p=4;case 4:$z=X9(b,h,d,e);if(C()){break _;}h=$z;i=c+1|0;$p=5;case 5:$z=X9(b,i,d,e);if(C()){break _;}i=$z;j=3;J();if(A5R.data[g]&&!A5R.data[f])j
=3;if(A5R.data[f]&&!A5R.data[g])j=2;if(A5R.data[h]&&!A5R.data[i])j=5;if(A5R.data[i]&&!A5R.data[h])j=4;$p=6;case 6:AFp(b,c,d,e,j);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AFa(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1){J();return A4d.W;}if(!f){J();return A4d.W;}$p=1;case 1:$z=b.ea(c,d,e);if(C()){break _;}g=$z;return f!=g?a.W:!a.uh?a.W-1|0:a.W+16|0;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ZR(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.uh)return;$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.0+L(f)*6.0/16.0;j=e+0.5;k=L(f)*0.6000000238418579-0.30000001192092896;if(g==4){l=h-0.5199999809265137;m=i;n=j+k;BP(b,B(248),l,m,n,0.0,0.0,0.0);BP(b,B(249),
l,m,n,0.0,0.0,0.0);}else if(g==5){l=h+0.5199999809265137;m=i;n=j+k;BP(b,B(248),l,m,n,0.0,0.0,0.0);BP(b,B(249),l,m,n,0.0,0.0,0.0);}else if(g==2){l=h+k;m=i;n=j-0.5199999809265137;BP(b,B(248),l,m,n,0.0,0.0,0.0);BP(b,B(249),l,m,n,0.0,0.0,0.0);}else if(g==3){o=h+k;p=i;q=j+0.5199999809265137;BP(b,B(248),o,p,q,0.0,0.0,0.0);BP(b,B(249),o,p,q,0.0,0.0,0.0);}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AOr(a,b){if(b==1){J();b=A4d.b;}else if(!b){J();b=A4d.b;}else b=b!=3?a.W:a.W-1|0;return b;}
function AB8(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AH_(b,c,d,e);if(C()){break _;}b=$z;g=b;$p=2;case 2:AJA(f,g);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AXE(a){return A0F();}
function RF(){var a=this;DN.call(a);a.zW=null;a.z_=0;}
function A6V(a,b,c){var d=new RF();ACF(d,a,b,c);return d;}
function ACF(a,b,c,d){Dw(a,b,A6r);a.W=4;a.zW=c;Bj(a,0.25,0.0,0.25,0.75,1.625,0.75);a.z_=d;}
function AQ2(a){return (-1);}
function AWd(a){return 0;}
function AV9(a){return 0;}
function ATb(a){var b,c,$$je;a:{try{b=Vh(a.zW);}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){b=$$je;break a;}else{throw $$e;}}return b;}c=new B5;ST(c,b);M(c);}
function AB2(a,b,c,d,e){return 1;}
function AX2(a,b,c){return a.z_;}
function VH(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=Wj(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=Z$(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Uc(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:AJ6(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function DF(){var a=this;E.call(a);a.bY=null;a.de=0;a.dc=0;a.dj=0;}
var A6W=null;var A6X=null;function A6Y(){var a=new DF();AH9(a);return a;}
function AH9(a){return;}
function Ip(b,c){var d;if(!Dv(A6X,c)){BK(A6W,c,b);BK(A6X,b,c);return;}b=new Cq;d=new Bc;Ba(d);Bl(b,O(H(H(d,B(253)),c)));M(b);}
function AA6(a){return;}
function AG2(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bY;c=a.de;d=a.dc;e=a.dj;$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,$p);}
function XS(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bY;c=a.de;d=a.dc;e=a.dj;$p=1;case 1:ABK(b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AFT(a,b,c,d){var e,f,g;e=a.de+0.5-b;f=a.dc+0.5-c;g=a.dj+0.5-d;return e*e+f*f+g*g;}
function AAP(){A6W=CY();A6X=CY();Ip(K(SW),B(254));Ip(K(P2),B(255));Ip(K(HN),B(256));Ip(K(Lm),B(257));}
function HN(){var a=this;DF.call(a);a.fM=null;a.pU=0;}
function A6Z(){var a=new HN();ARV(a);return a;}
function ARV(a){var b,c;b=N(Cp,4);c=b.data;c[0]=B(3);c[1]=B(3);c[2]=B(3);c[3]=B(3);a.fM=b;a.pU=(-1);}
function W(){var a=this;E.call(a);a.cx=0;a.en=0;a.eG=0;a.rr=0;}
var A60=null;var A6v=null;var A61=null;var A62=null;var A63=null;var A64=null;var A65=null;var A66=null;var A5u=null;var A6R=null;var A6S=null;var A67=null;var A68=null;var A69=null;var A6$=null;var A6_=null;var A7a=null;var A7b=null;var A7c=null;var A7d=null;var A7e=null;var A7f=null;var A7g=null;var A7h=null;var A7i=null;var A7j=null;var A7k=null;var A7l=null;var A7m=null;var A7n=null;var A7o=null;var A7p=null;var A7q=null;var A5w=null;var A5t=null;var A5v=null;var A7r=null;var A7s=null;var A7t=null;var A7u
=null;var A7v=null;var A6T=null;var A6U=null;var A7w=null;var A7x=null;var A7y=null;var A7z=null;var A7A=null;var A7B=null;var A7C=null;var A7D=null;var A7E=null;var A7F=null;var A7G=null;var A7H=null;var A7I=null;var A7J=null;var A7K=null;var A7L=null;var A7M=null;var A7N=null;var A7O=null;var A7P=null;var A7Q=null;var A6Q=null;var A5x=null;var A7R=null;var A7S=null;var A7T=null;var A6u=null;var A7U=null;var A7V=null;var A7W=null;var A7X=null;var A7Y=null;var A7Z=null;function Bw(){Bw=Bt(W);AXn();}
function Ee(a){var b=new W();C$(b,a);return b;}
function C$(a,b){var c,d,e;Bw();a.en=64;a.eG=32;c=256+b|0;a.cx=c;if(A6v.data[c]!==null){d=Ds();e=new Bc;Ba(e);B9(d,O(Bd(H(e,B(258)),b)));}A6v.data[c]=a;}
function Bk(a,b){a.rr=b;return a;}
function AVQ(a,b){return a.rr;}
function ABJ(a,b,c,d,e,f,g,h){return 0;}
function AZp(a,b,c){return 1.0;}
function AMx(a,b,c,d){return b;}
function ATM(a){return a.en;}
function AXs(a){return a.eG;}
function APd(a,b,c){return;}
function AVr(a,b,c,d,e,f){return;}
function AZV(a,b){return 1;}
function AO8(a,b){return 0;}
function AUC(a,b,c){return;}
function AXn(){var b;A60=A1d();A6v=N(W,1024);A61=Bk(JW(0,2),82);A62=Bk(LZ(1,2),98);A63=Bk(Lu(2,2),114);A64=Bk(A07(3),5);A65=Bk(Mg(4,4),10);A66=Bk(A0t(5),21);A5u=Bk(Ee(6),37);A6R=Bk(Ee(7),7);A6S=Bk(Ee(8),55);A67=Bk(Ee(9),23);A68=Bk(Ee(10),39);A69=Bk(Ll(11,2),66);A6$=Bk(Ll(12,0),64);A6_=Bk(JW(13,0),80);A7a=Bk(LZ(14,0),96);A7b=Bk(Lu(15,0),112);A7c=Bk(Ll(16,1),65);A7d=Bk(JW(17,1),81);A7e=Bk(LZ(18,1),97);A7f=Bk(Lu(19,1),113);A7g=Bk(Ll(20,3),67);A7h=Bk(JW(21,3),83);A7i=Bk(LZ(22,3),99);A7j=Bk(Lu(23,3),115);A7k=Bk(Ee(24),
53);A7l=Bk(Ee(25),71);A7m=Bk(A1$(26,10),72);A7n=Bk(Ll(27,0),68);A7o=Bk(JW(28,0),84);A7p=Bk(LZ(29,0),100);A7q=Bk(Lu(30,0),116);A5w=Bk(Ee(31),8);A5t=Bk(Ee(32),24);A5v=Bk(Ee(33),40);A7r=Bk(Lj(34,0),128);A7s=Bk(Lj(35,1),129);A7t=Bk(Lj(36,2),130);A7u=Bk(Lj(37,3),131);A7v=Bk(Lj(38,4),132);b=new R6;J();ACU(b,39,A6h.b);A6T=Bk(b,9);A6U=Bk(Ee(40),25);A7w=Bk(Mg(41,5),41);A7x=Bk(CW(42,0,0,0),0);A7y=Bk(CW(43,0,0,1),16);A7z=Bk(CW(44,0,0,2),32);A7A=Bk(CW(45,0,0,3),48);A7B=Bk(CW(46,1,1,0),1);A7C=Bk(CW(47,1,1,1),17);A7D=Bk(CW(48,
1,1,2),33);A7E=Bk(CW(49,1,1,3),49);A7F=Bk(CW(50,2,2,0),2);A7G=Bk(CW(51,2,2,1),18);A7H=Bk(CW(52,2,2,2),34);A7I=Bk(CW(53,2,2,3),50);A7J=Bk(CW(54,3,3,0),3);A7K=Bk(CW(55,3,3,1),19);A7L=Bk(CW(56,3,3,2),35);A7M=Bk(CW(57,3,3,3),51);A7N=Bk(CW(58,1,4,0),4);A7O=Bk(CW(59,1,4,1),20);A7P=Bk(CW(60,1,4,2),36);A7Q=Bk(CW(61,1,4,3),52);A6Q=Bk(Ee(62),6);A5x=Bk(Mg(63,3),87);A7R=Bk(Mg(64,8),88);A7S=Bk(A0r(65),26);A7T=Bk(Mg(66,42),11);A6u=Bk(A1T(67),42);A7U=Bk(AZ$(68),43);A7V=Bk(AKt(69,0),74);A7W=Bk(AKt(70,A5c.b),75);A7X=Bk(AKt(71,
A5d.b),76);A7Y=Bk(A1u(72),135);A7Z=Bk(A2j(73),104);}
function ADy(){P.call(this);}
function A0o(a){var b=new ADy();ATv(b,a);return b;}
function ATv(a,b){Dw(a,b,A6r);a.W=97;Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);}
function AZc(a,b,c){var d,e;if(b&&b!=1){d=MV(a,c);if((d&&d!=2?0:1)^(b>3?0:1))return a.W;b=((d/2|0)+(b&1^d)|0)+((c&4)/4|0)|0;e=a.W-((c&8)*2|0)|0;if(b&1)e= -e;return e;}return a.W;}
function ASy(a){return 0;}
function AP4(a){return 0;}
function ANE(a){return 7;}
function ABI(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACQ(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Jq(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,$p);}
function Vq(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACQ(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Le(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,$p);}
function ACQ(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ea(c,d,e);if(C()){break _;}c=$z;AJz(a,MV(a,c));return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AJz(a,b){Bj(a,0.0,0.0,0.0,1.0,2.0,1.0);if(!b)Bj(a,0.0,0.0,0.0,1.0,1.0,0.1875);if(b==1)Bj(a,0.8125,0.0,0.0,1.0,1.0,1.0);if(b==2)Bj(a,0.0,0.0,0.8125,1.0,1.0,1.0);if(b==3)Bj(a,0.0,0.0,0.0,0.1875,1.0,1.0);}
function AET(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Zo(a,b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Zo(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;if(!(g&8)){h=d+1|0;$p=2;continue _;}d=d-1|0;$p=3;continue _;case 2:$z=X9(b,c,h,e);if(C()){break _;}i=$z;if(i!=a.b){h=g^4;$p=4;continue _;}i=(g^4)+8|0;$p=5;continue _;case 3:$z=X9(b,c,d,e);if(C()){break _;}h=$z;if(h!=a.b)return 1;$p=6;continue _;case 4:AFp(b,c,d,e,h);if(C())
{break _;}HP(b,c,d-1|0,e,c,d,e);if(BI()>=0.5)D1(b,c+0.5,d+0.5,e+0.5,B(259),1.0,L(b.n)*0.10000000149011612+0.8999999761581421);else D1(b,c+0.5,d+0.5,e+0.5,B(260),1.0,L(b.n)*0.10000000149011612+0.8999999761581421);return 1;case 5:AFp(b,c,h,e,i);if(C()){break _;}h=g^4;$p=4;continue _;case 6:Zo(a,b,c,d,e,f);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function X_(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;if(g&8){f=d-1|0;$p=3;continue _;}h=0;f=d+1|0;$p=2;case 2:$z=X9(b,c,f,e);if(C()){break _;}i=$z;if(i!=a.b){i=0;$p=4;continue _;}i=d-1|0;$p=6;continue _;case 3:$z=X9(b,c,f,e);if(C()){break _;}f=$z;if(f==a.b)return;f=0;$p=5;continue _;case 4:AJ6(b,c,d,e,i);if(C()){break _;}h=
1;i=d-1|0;$p=6;continue _;case 5:AJ6(b,c,d,e,f);if(C()){break _;}return;case 6:$z=Wj(b,c,i,e);if(C()){break _;}i=$z;if(!i){i=0;$p=7;continue _;}if(!h)return;$p=10;continue _;case 7:AJ6(b,c,d,e,i);if(C()){break _;}h=1;$p=8;case 8:$z=X9(b,c,f,e);if(C()){break _;}i=$z;if(i==a.b){i=0;$p=9;continue _;}if(!h)return;$p=10;continue _;case 9:AJ6(b,c,f,e,i);if(C()){break _;}if(!h)return;$p=10;case 10:Uc(a,b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AX1(a,b,c){if(b&8)b=0;else{Bw();b=A7U.cx;}return b;}
function TC(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACQ(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=IC(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function MV(a,b){return b&4?b&3:(b-1|0)&3;}
function AEY(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=127)return 0;d=d-1|0;$p=1;case 1:$z=Wj(b,c,d,e);if(C()){break _;}c=$z;return !c?0:1;default:Es();}}CM().s(a,b,c,d,e,$p);}
function YB(){P.call(this);}
function A1W(a,b){var c=new YB();AOm(c,a,b);return c;}
function AOm(a,b,c){CS(a,b,c,A6L);}
function YP(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bj(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bj(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bj(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bj(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Le(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ZA(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bj(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bj(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bj(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bj(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Jq(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function APL(a){return 0;}
function AV4(a){return 0;}
function AYB(a){return 8;}
function AIv(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=Wj(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=Wj(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=Wj(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;e=e+1|0;$p=4;case 4:$z=Wj(b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Uh(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;if(g&&f!=2){if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;continue _;}h=e+1|0;$p=2;case 2:$z=Wj(b,c,d,h);if(C()){break _;}h=$z;if(h)g=2;if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h
=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;case 3:$z=Wj(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;case 4:$z=Wj(b,h,d,e);if(C()){break _;}h=$z;if(h)g=4;if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;case 5:$z=Wj(b,f,d,e);if(C()){break _;}f=$z;if(f)g=5;$p=6;case 6:AFp(b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AFE(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;h=0;if(g==2){f=e+1|0;$p=2;continue _;}if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 2:$z=Wj(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if
(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 3:$z=Wj(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 4:$z=Wj(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 5:$z=Wj(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(h)return;$p=6;case 6:Uc(a,b,c,d,e,g);if(C()){break _;}f=0;$p=7;case 7:AJ6(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,$p);}
function AVL(a,b){return 1;}
function AIy(){P.call(this);}
function A0V(a,b){var c=new AIy();AZE(c,a,b);return c;}
function AZE(a,b,c){CS(a,b,c,A6L);Bj(a,0.0,0.0,0.0,1.0,0.125,1.0);}
function Ye(a,b,c,d,e){return null;}
function APv(a){return 0;}
function AGr(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AG7(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=IC(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AG7(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ea(c,d,e);if(C()){break _;}f=$z;if(f>=2&&f<=5)Bj(a,0.0,0.0,0.0,1.0,0.625,1.0);else Bj(a,0.0,0.0,0.0,1.0,0.125,1.0);return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ATP(a,b,c){return c<6?a.W:a.W-16|0;}
function AUx(a){return 0;}
function ASj(a){return 9;}
function ATW(a,b){return 1;}
function AIx(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=Wj(b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AIh(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=15;$p=1;case 1:AFp(b,c,d,e,f);if(C()){break _;}g=new GT;$p=2;case 2:UJ(g,a,b,c,d,e);if(C()){break _;}$p=3;case 3:UI(g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AEL(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Z$(b,c,d,e);if(C()){break _;}g=$z;h=0;f=d-1|0;$p=2;case 2:$z=Wj(b,c,f,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==2){f=c+1|0;$p=3;continue _;}if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 3:$z=Wj(b,f,d,e);if(C()){break _;}f=$z;if
(!f)h=1;if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 4:$z=Wj(b,f,d,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 5:$z=Wj(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 6:$z=Wj(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(!h)return;$p=7;case 7:$z=Z$(b,c,d,e);if(C()){break _;}f
=$z;$p=8;case 8:Uc(a,b,c,d,e,f);if(C()){break _;}f=0;$p=9;case 9:AJ6(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AMO(){W.call(this);this.my=0;}
function A0j(a){var b=new AMO();ATZ(b,a);return b;}
function ATZ(a,b){C$(a,b);b=b+256|0;a.my=b;J();a.rr=A39.data[b].bZ(2);}
function AKS(a,b,c,d,e,f,g,h){var i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;if(!b.m)return 0;i=a.my;j=0;$p=1;case 1:$z=ADe(d,i,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;J();k=A39.data[a.my];j=a.my;$p=2;case 2:$z=AJ6(d,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;c=A39.data[a.my];$p
=3;case 3:c.s4(d,e,f,g,h);if(C()){break _;}D1(d,e+0.5,f+0.5,g+0.5,IH(k.f0),(k.f0.np+1.0)/2.0,k.f0.oe*0.800000011920929);b.m=b.m-1|0;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ACS(){KR.call(this);}
function AS8(){var a=new ACS();ATh(a);return a;}
function ATh(a){var b,c,d,e;b=N(Cp,0);c=b.data;O4(B(18));d=c.length;e=0;while(e<d){O4(c[e]);e=e+1|0;}a.ud=B(18);a.DV=b.nu();}
function AAS(a){var b;b=new On;b.j$=B(261);b.lB=A70;b.pS=A70;b.DO=a;b.yO=0.3333333432674408;b.Ci=0.5;return b;}
function ACg(a){var b,c,d,e,f;b=new M_;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.tj=A70;b.sL=A70;e=d.length;if(e&&e>=b.yI){b.Dt=a;b.sB=c.nu();b.CI=2.0;b.yI=4.0;return b;}f=new Cq;Bl(f,B(262));M(f);}
function K1(){var a=this;EC.call(a);a.dC=0;a.b4=null;a.jI=null;}
function AHj(b,c,d){return AVR(0,b.data.length,b,c,c+d|0,0,0);}
function V_(b){return AHj(b,0,b.data.length);}
function AFc(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BT;i=new Bc;Ba(i);Bl(h,O(Bd(H(Bd(H(i,B(263)),g),B(240)),f)));M(h);}if(Ci(a)<d){i=new Fz;Q(i);M(i);}if(d<0){i=new BT;h=new Bc;Ba(h);Bl(i,O(H(Bd(H(h,B(241)),d),B(242))));M(i);}g=a.be+a.dC|0;j=0;while(j<d){k=c+1|0;b=a.b4.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.be=a.be+d|0;return a;}}b=b.data;h=new BT;i=new Bc;Ba(i);Bl(h,O(H(Bd(H(Bd(H(i,B(243)),c),B(236)),b.length),B(21))));M(h);}
function SX(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.lu){e=new E5;Q(e);M(e);}if(Ci(a)<d){e=new F$;Q(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BT;i=new Bc;Ba(i);Bl(e,O(Bd(H(Bd(H(i,B(264)),h),B(240)),g)));M(e);}if(d<0){e=new BT;i=new Bc;Ba(i);Bl(e,O(H(Bd(H(i,B(241)),d),B(242))));M(e);}h=a.be+a.dC|0;j=0;while(j<d){b=a.b4.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.be=a.be+d|0;return a;}}b=b.data;i=new BT;e=new Bc;Ba(e);Bl(i,O(H(Bd(H(Bd(H(e,B(243)),c),B(236)),b.length),B(21))));M(i);}
function Q4(a,b){return SX(a,b,0,b.data.length);}
function AYz(a,b){a.jI=b;return a;}
function ANL(a){D3(a);return a;}
function AVG(a,b){Lf(a,b);return a;}
function ASu(a,b){D_(a,b);return a;}
function La(){Ki.call(this);}
function HU(a){var b,c;if(a.be<a.cb){b=a.be;a.be=b+1|0;return OM(a,b);}c=new Fz;Q(c);M(c);}
function Cu(a,b){var c,d;if(AFl(a)){c=new E5;Q(c);M(c);}if(a.be<a.cb){d=a.be;a.be=d+1|0;Zm(a,d,b);return a;}c=new F$;Q(c);M(c);}
function AFl(a){return a.u7;}
function SM(){var a=this;La.call(a);a.u7=0;a.vQ=0;a.u2=null;}
function OM(a,b){return a.u2.data[b+a.vQ|0];}
function Zm(a,b,c){a.u2.data[b+a.vQ|0]=c;}
function AXZ(a){return a.u7;}
function ALF(){var a=this;K1.call(a);a.Cu=0;a.lu=0;}
function AVR(a,b,c,d,e,f,g){var h=new ALF();ANj(h,a,b,c,d,e,f,g);return h;}
function ANj(a,b,c,d,e,f,g,h){Jb(a,c);a.jI=A5E;a.dC=b;a.b4=d;a.be=e;a.cb=f;a.Cu=g;a.lu=h;}
function AGA(a){var b,c,d,e;if(a.be>=a.cb){b=new Fz;Q(b);M(b);}c=a.b4.data;d=a.dC;e=a.be;a.be=e+1|0;return c[d+e|0];}
function ASU(a){return a.lu;}
function Jd(a,b){var c,d,e,f,g,h;if(b>=0&&(b+3|0)<a.cb){c=a.b4.data[a.dC+b|0]&255;d=a.b4.data[(a.dC+b|0)+1|0]&255;e=a.b4.data[(a.dC+b|0)+2|0]&255;f=a.b4.data[(a.dC+b|0)+3|0]&255;if(a.jI!==A5E)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BT;h=new Bc;Ba(h);Bl(g,O(H(Bd(H(Bd(H(h,B(265)),b),B(236)),a.cb-3|0),B(21))));M(g);}
function WL(a,b,c){var d,e;if(a.lu){d=new E5;Q(d);M(d);}if(b>=0&&(b+3|0)<a.cb){if(a.jI!==A5E){a.b4.data[a.dC+b|0]=c<<24>>24;a.b4.data[(a.dC+b|0)+1|0]=c>>8<<24>>24;a.b4.data[(a.dC+b|0)+2|0]=c>>16<<24>>24;a.b4.data[(a.dC+b|0)+3|0]=c>>24<<24>>24;}else{a.b4.data[a.dC+b|0]=c>>24<<24>>24;a.b4.data[(a.dC+b|0)+1|0]=c>>16<<24>>24;a.b4.data[(a.dC+b|0)+2|0]=c>>8<<24>>24;a.b4.data[(a.dC+b|0)+3|0]=c<<24>>24;}return a;}e=new BT;d=new Bc;Ba(d);Bl(e,O(H(Bd(H(Bd(H(d,B(265)),b),B(236)),a.cb-3|0),B(21))));M(e);}
function ACV(a){var b,c;b=Ci(a)/4|0;if(a.jI!==A5E){c=new MM;Mn(c,a.dC+a.be|0,b,a,0,b,a.lu);return c;}c=new RW;Mn(c,a.dC+a.be|0,b,a,0,b,a.lu);return c;}
function RE(){}
function J6(){EC.call(this);}
function ACx(b){var c,d;if(b>=0)return ARG(0,b,$rt_createCharArray(b),0,b,0);c=new Cq;d=new Bc;Ba(d);Bl(c,O(Bd(H(d,B(266)),b)));M(c);}
function AHH(b,c,d){return ARG(0,b.data.length,b,c,c+d|0,0);}
function MB(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BT;i=new Bc;Ba(i);Bl(h,O(Bd(H(Bd(H(i,B(267)),g),B(240)),f)));M(h);}if(Ci(a)<d){h=new Fz;Q(h);M(h);}if(d<0){h=new BT;i=new Bc;Ba(i);Bl(h,O(H(Bd(H(i,B(241)),d),B(242))));M(h);}g=a.be;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=AJl(a,g);j=j+1|0;c=k;g=f;}a.be=a.be+d|0;return a;}}b=b.data;i=new BT;h=new Bc;Ba(h);Bl(i,O(H(Bd(H(Bd(H(h,B(243)),c),B(236)),b.length),B(21))));M(i);}
function AAd(a,b){return MB(a,b,0,b.data.length);}
function AME(a,b,c,d){var e,f,g,h,i,j,k;if(Tm(a)){e=new E5;Q(e);M(e);}if(Ci(a)<d){e=new F$;Q(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BT;i=new Bc;Ba(i);Bl(e,O(Bd(H(Bd(H(i,B(268)),h),B(240)),g)));M(e);}if(d<0){e=new BT;i=new Bc;Ba(i);Bl(e,O(H(Bd(H(i,B(241)),d),B(242))));M(e);}h=a.be;j=0;while(j<d){k=h+1|0;g=c+1|0;RH(a,h,f[c]);j=j+1|0;h=k;c=g;}a.be=a.be+d|0;return a;}}b=b.data;i=new BT;e=new Bc;Ba(e);Bl(i,O(H(Bd(H(Bd(H(e,B(243)),c),B(236)),b.length),B(21))));M(i);}
function AEd(a,b,c,d){var e,f,g,h,i,j;if(Tm(a)){b=new E5;Q(b);M(b);}e=d-c|0;if(Ci(a)<e){b=new F$;Q(b);M(b);}if(c>=0&&c<BE(b)){if(d>BE(b)){f=new BT;g=new Bc;Ba(g);Bl(f,O(Bd(H(Bd(H(g,B(268)),d),B(269)),BE(b))));M(f);}if(c>d){b=new BT;f=new Bc;Ba(f);Bl(b,O(Bd(H(Bd(H(f,B(270)),c),B(271)),d)));M(b);}h=a.be;while(c<d){i=h+1|0;j=c+1|0;RH(a,h,Cr(b,c));h=i;c=j;}a.be=a.be+e|0;return a;}g=new BT;f=new Bc;Ba(f);Bl(g,O(H(Bd(H(Bd(H(f,B(270)),c),B(236)),BE(b)),B(21))));M(g);}
function Ld(a,b){return AEd(a,b,0,BE(b));}
function AEy(a){return 1;}
function AJU(a){return a.k1;}
function AQT(a){FC(a);return a;}
function AQx(a,b){D_(a,b);return a;}
function Nm(){BU.call(this);}
function A71(){var a=new Nm();AYi(a);return a;}
function AYi(a){Q(a);}
function L5(){B0.call(this);}
function A72(){var a=new L5();ARQ(a);return a;}
function ARQ(a){return;}
function AVh(a){return 0;}
function AVP(a){return 0;}
function ANn(a){return 0;}
function Ka(){B0.call(this);}
function A73(){var a=new Ka();ANm(a);return a;}
function ANm(a){return;}
function AZ3(a){return 1;}
function ARh(a){return 0;}
function LQ(){B0.call(this);}
function A74(){var a=new LQ();AXf(a);return a;}
function AXf(a){return;}
function AWN(a){return 0;}
function AYW(a){return 0;}
function AOu(a){return 0;}
function Fj(){var a=this;W.call(a);a.sP=null;a.v6=0.0;a.xR=0;a.E$=0;}
function A75(a,b,c,d){var e=new Fj();Kr(e,a,b,c,d);return e;}
function Kr(a,b,c,d,e){C$(a,b);a.v6=4.0;a.E$=d;a.sP=e;a.en=1;a.eG=32<<d;if(d==3)a.eG=a.eG*2|0;a.v6=(d+1|0)*2|0;a.xR=c+d|0;}
function AYc(a,b,c){var d;d=0;while(d<a.sP.data.length){if(a.sP.data[d]===c)return a.v6;d=d+1|0;}return 1.0;}
function AWV(a,b,c){EW(b,2);}
function APr(a,b,c,d,e,f){EW(b,1);}
function APT(a,b){return a.xR;}
function Mw(){Fj.call(this);}
var A76=null;function A1J(){A1J=Bt(Mw);AYo();}
function JW(a,b){var c=new Mw();AA$(c,a,b);return c;}
function AA$(a,b,c){A1J();Kr(a,b,1,c,A76);}
function AYo(){var b,c;b=N(P,4);c=b.data;J();c[0]=A3_;c[1]=A4a;c[2]=A4u;c[3]=A4v;A76=b;}
function RI(){Fj.call(this);this.mj=0;}
var A77=null;function A1L(){A1L=Bt(RI);ATc();}
function LZ(a,b){var c=new RI();AIr(c,a,b);return c;}
function AIr(a,b,c){A1L();Kr(a,b,2,c,A77);a.mj=c;}
function AVE(a,b){J();return b===A4F?(a.mj!=3?0:1):b!==A6f&&b!==A6e?(b!==A4C&&b!==A4A?(b!==A4B&&b!==A4z?(b.bR===A6q?1:b.bR!==A6F?0:1):a.mj<1?0:1):a.mj<2?0:1):a.mj<2?0:1;}
function ATc(){var b,c;b=N(P,12);c=b.data;J();c[0]=A4h;c[1]=A4b;c[2]=A4c;c[3]=A4d;c[4]=A4o;c[5]=A4z;c[6]=A4B;c[7]=A4y;c[8]=A4C;c[9]=A4A;c[10]=A6e;c[11]=A6f;A77=b;}
function Sv(){Fj.call(this);}
var A78=null;function A1q(){A1q=Bt(Sv);ANS();}
function Lu(a,b){var c=new Sv();AIg(c,a,b);return c;}
function AIg(a,b,c){A1q();Kr(a,b,3,c,A78);}
function ANS(){var b,c;b=N(P,4);c=b.data;J();c[0]=A4j;c[1]=A4D;c[2]=A4k;c[3]=A6c;A78=b;}
function AAo(){W.call(this);}
function A07(a){var b=new AAo();AQO(b,a);return b;}
function AQO(a,b){C$(a,b);a.en=1;a.eG=64;}
function AEF(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;$p=1;case 1:$z=X9(d,e,f,g);if(C()){break _;}i=$z;if(i){EW(b,1);return 1;}j=e+0.5;k=f+0.5;l=g+0.5;Bw();D1(d,j,k,l,B(272),1.0,L(A60)*0.4000000059604645+0.800000011920929);J();h=A5G.b;$p=
2;case 2:AJ6(d,e,f,g,h);if(C()){break _;}EW(b,1);return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function J0(){W.call(this);this.xf=0;}
function Mg(a,b){var c=new J0();VL(c,a,b);return c;}
function VL(a,b,c){C$(a,b);a.xf=c;a.en=1;}
function Np(a,b,c,d){b.m=b.m-1|0;Q7(d,a.xf);return b;}
function AJr(){W.call(this);}
function A0t(a){var b=new AJr();ATF(b,a);return b;}
function ATF(a,b){C$(a,b);a.en=1;}
function ABR(a,b,c,d){var e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.F;Bw();if(!AB4(e,A5u.cx))return b;C2(c,d,B(217),1.0,1.0/(L(A60)*0.4000000059604645+0.800000011920929));e=ANc(c,d);$p=1;case 1:AIS(c,e);if(C()){break _;}return b;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AF2(){W.call(this);this.xl=0;}
function Ll(a,b){var c=new AF2();AZr(c,a,b);return c;}
function AZr(a,b,c){C$(a,b);a.en=1;a.eG=32<<c;a.xl=4+(c*2|0)|0;}
function ASi(a,b,c){return 1.5;}
function AXv(a,b,c){EW(b,1);}
function AQy(a,b,c,d,e,f){EW(b,2);}
function ATO(a,b){return a.xl;}
function AIN(){J0.call(this);}
function A1$(a,b){var c=new AIN();AT8(c,a,b);return c;}
function AT8(a,b,c){VL(a,b,c);}
function AJ5(a,b,c,d){Np(a,b,c,d);b=new B6;Bw();Dg(b,A7l);return b;}
function AIa(){W.call(this);}
function Lj(a,b){var c=new AIa();AND(c,a,b);return c;}
function AND(a,b,c){C$(a,b);a.en=1;a.eG=32<<c;}
function ALf(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X9(d,e,f,g);if(C()){break _;}i=$z;h=f+1|0;$p=2;case 2:a:{$z=XB(d,e,h,g);if(C()){break _;}j=$z;if(!j.c3()){J();if(i==A3_.b)break a;}J();if(i!=A4a.b)return 0;}J();k=A6i;l=e;m=
l+0.5;n=f;o=n+0.5;p=g;D1(d,m,o,p+0.5,IH(k.f0),(k.f0.np+1.0)/2.0,k.f0.oe*0.800000011920929);h=k.b;$p=3;case 3:AJ6(d,e,f,g,h);if(C()){break _;}EW(b,1);if(!D(d.n,8)&&i==A3_.b){q=1;r=0;m=n+1.2000000476837158;if(r<q){s=L(d.n)*0.699999988079071+0.15000000596046448;n=L(d.n)*0.699999988079071+0.15000000596046448;t=new Er;o=l+s;u=p+n;c=new B6;Bw();Dg(c,A6T);F_(t,d,o,m,u,c);t.gr=10;$p=4;continue _;}}return 1;case 4:AIS(d,t);if(C()){break _;}r=r+1|0;if(r>=q)return 1;s=L(d.n)*0.699999988079071+0.15000000596046448;n=L(d.n)
*0.699999988079071+0.15000000596046448;t=new Er;o=l+s;u=p+n;c=new B6;Bw();Dg(c,A6T);F_(t,d,o,m,u,c);t.gr=10;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function R6(){W.call(this);this.w7=0;}
function A79(a,b){var c=new R6();ACU(c,a,b);return c;}
function ACU(a,b,c){C$(a,b);a.w7=c;}
function AAJ(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;$p=1;case 1:$z=X9(d,e,f,g);if(C()){break _;}i=$z;J();if(i!=A6i.b)return 0;f=f+1|0;h=a.w7;$p=2;case 2:AJ6(d,e,f,g,h);if(C()){break _;}b.m=b.m-1|0;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function Fc(){var a=this;W.call(a);a.DX=0;a.xe=0;a.wy=0;a.yz=0;}
var A7$=null;var A7_=null;function CW(a,b,c,d){var e=new Fc();W5(e,a,b,c,d);return e;}
function W5(a,b,c,d,e){C$(a,b);a.DX=c;a.xe=e;a.yz=d;a.wy=A7$.data[e];a.eG=(A7_.data[e]*3|0)<<c;a.en=1;}
function AL2(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;A7$=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;A7_=b;}
function TQ(){W.call(this);}
function A0r(a){var b=new TQ();ARk(b,a);return b;}
function ARk(a,b){C$(a,b);a.eG=64;}
function XQ(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)return 0;if(h==1)return 0;i=0;if(h==4)i=1;if(h==3)i=2;if(h==5)i=3;j=new Hh;EO(j,d);j.pO=0;j.dd=0;j.cF=0.0;Dx(j,0.5,0.5);j.l6=e;j.A4=f;j.ma=g;c=Ck();k=A8a.nu().data;e=k.length;f=0;if(f<e){l=k[f];j.dl=l;Id(j,i);$p=1;continue _;}if(c.p>0)j.dl=Z(c,D(j.l,c.p));Id(j,i);$p=2;continue _;case 1:$z
=Vz(j);if(C()){break _;}g=$z;if(g)U(c,l);f=f+1|0;if(f<e){l=k[f];j.dl=l;Id(j,i);continue _;}if(c.p>0)j.dl=Z(c,D(j.l,c.p));Id(j,i);$p=2;case 2:$z=Vz(j);if(C()){break _;}e=$z;if(!e)return 1;$p=3;case 3:AIS(d,j);if(C()){break _;}b.m=b.m-1|0;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ACD(){W.call(this);}
function A1T(a){var b=new ACD();AXl(b,a);return b;}
function AXl(a,b){C$(a,b);a.eG=64;a.en=1;}
function T_(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;J();i=A6l;$p=1;case 1:$z=i.fg(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;h=A6l.b;$p=2;case 2:AJ6(d,e,f,g,h);if(C()){break _;}h=I((c.q+180.0)*16.0/360.0-0.5)&15;$p=3;case 3:AFp(d,e,f,g,h);if(C()){break _;}b.m=b.m-1|0;$p=4;case 4:$z=AH_(d,e,f,g);if(C()){break _;}b=$z;b=b;$p=5;case 5:AD8(c,b);if
(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AEb(){W.call(this);}
function AZ$(a){var b=new AEb();AUc(b,a);return b;}
function AUc(a,b){C$(a,b);a.eG=64;a.en=1;}
function ZE(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;J();i=A6m;$p=1;case 1:$z=i.fg(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;j=I((c.q+180.0)*4.0/360.0-0.5)&3;k=0;l=0;if(!j)l=1;if(j==1)k=(-1);if(j==2)l=(-1);if(j==3)k=1;m=e-k|0;n=g-l|0;$p=2;case 2:$z
=Wj(d,m,f,n);if(C()){break _;}h=$z;h=!h?0:1;o=f+1|0;$p=3;case 3:$z=Wj(d,m,o,n);if(C()){break _;}p=$z;p=h+(!p?0:1)|0;h=e+k|0;k=g+l|0;$p=4;case 4:$z=Wj(d,h,f,k);if(C()){break _;}l=$z;l=!l?0:1;$p=5;case 5:$z=Wj(d,h,o,k);if(C()){break _;}q=$z;q=l+(!q?0:1)|0;$p=6;case 6:$z=X9(d,m,f,n);if(C()){break _;}l=$z;if(l!=A6m.b){$p=7;continue _;}n=1;$p=8;continue _;case 7:$z=X9(d,m,o,n);if(C()){break _;}m=$z;n=m==A6m.b?1:0;$p=8;case 8:$z=X9(d,h,f,k);if(C()){break _;}l=$z;if(l!=A6m.b){$p=9;continue _;}r=0;if(n&&!1)r=1;else if
(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=A6m.b;$p=10;continue _;case 9:$z=X9(d,h,o,k);if(C()){break _;}h=$z;m=h==A6m.b?1:0;r=0;if(n&&!m)r=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=A6m.b;$p=10;case 10:AJ6(d,e,f,g,h);if(C()){break _;}$p=11;case 11:AFp(d,e,f,g,j);if(C()){break _;}f=A6m.b;$p=12;case 12:AJ6(d,e,o,g,f);if(C()){break _;}f=j+8|0;$p=13;case 13:AFp(d,e,o,g,f);if(C()){break _;}b.m=b.m-1|0;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AL4(){W.call(this);this.nX=0;}
function AKt(a,b){var c=new AL4();AR8(c,a,b);return c;}
function AR8(a,b,c){C$(a,b);a.en=1;a.eG=64;a.nX=c;}
function AC6(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.P+(d.E-d.P)*1.0;f=d.K+(d.q-d.K)*1.0;g=BR(d.bH+(d.c-d.bH)*1.0,d.ct+(d.j-d.ct)*1.0,d.bG+(d.d-d.bG)*1.0);h= -f*0.01745329238474369-3.1415927410125732;i=Bx(h);h=Bm(h);j= -e*0.01745329238474369;k= -Bx(j);l=C3(g,h*k*5.0,Bm(j)
*5.0,i*k*5.0);m=a.nX?0:1;$p=1;case 1:$z=AAq(c,g,l,m);if(C()){break _;}n=$z;if(n===null)return b;if(n.j1)return b;m=n.hj;o=n.hk;p=n.hl;if(!a.nX){$p=2;continue _;}if(!n.gX)o=o+(-1)|0;if(n.gX==1)o=o+1|0;if(n.gX==2)p=p+(-1)|0;if(n.gX==3)p=p+1|0;if(n.gX==4)m=m+(-1)|0;if(n.gX==5)m=m+1|0;$p=8;continue _;case 2:$z=XB(c,m,o,p);if(C()){break _;}g=$z;if(g!==A46){$p=3;continue _;}$p=4;continue _;case 3:$z=XB(c,m,o,p);if(C()){break _;}d=$z;if(d!==A47)return b;$p=5;continue _;case 4:$z=Z$(c,m,o,p);if(C()){break _;}q=$z;if
(q){$p=3;continue _;}q=0;$p=6;continue _;case 5:$z=Z$(c,m,o,p);if(C()){break _;}q=$z;if(q)return b;q=0;$p=7;continue _;case 6:AJ6(c,m,o,p,q);if(C()){break _;}b=new B6;Bw();Dg(b,A7W);return b;case 7:AJ6(c,m,o,p,q);if(C()){break _;}b=new B6;Bw();Dg(b,A7X);return b;case 8:$z=X9(c,m,o,p);if(C()){break _;}q=$z;if(q){$p=10;continue _;}q=a.nX;r=0;$p=9;case 9:ADW(c,m,o,p,q,r);if(C()){break _;}b=new B6;Bw();Dg(b,A7V);return b;case 10:$z=XB(c,m,o,p);if(C()){break _;}d=$z;if(d.c3())return b;q=a.nX;r=0;$p=9;continue _;default:
Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AJH(){W.call(this);}
function A1u(a){var b=new AJH();APU(b,a);return b;}
function APU(a,b){C$(a,b);a.en=1;}
function YG(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X9(d,e,f,g);if(C()){break _;}i=$z;J();if(i!=A6n.b)return 0;c=new Fp;j=e+0.5;k=f+0.5;l=g+0.5;EO(c,d);c.yp=N(B6,36);c.hU=0;c.jy=0;c.nm=1;c.jJ=0;c.lj=1;Dx(c,0.9800000190734863,0.699999988079071);c.cF=c.ef/2.0;c.h$=0;CC(c,j,k+c.cF,l);c.f=0.0;c.h=0.0;c.g=0.0;c.bH=j;c.ct=k;c.bG=
l;$p=2;case 2:AIS(d,c);if(C()){break _;}b.m=b.m-1|0;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ALy(){W.call(this);}
function A2j(a){var b=new ALy();APw(b,a);return b;}
function APw(a,b){C$(a,b);a.en=1;a.eG=64;}
function ABP(a,b,c){var d;if(c instanceof He){d=c;if(!d.oW){d.oW=1;b.m=b.m-1|0;}}}
function APn(a,b,c){ABP(a,b,c);}
function LK(){}
function ABA(){var a=this;E.call(a);a.dx=Long_ZERO;a.ej=Long_ZERO;}
function AYN(){var a=new ABA();AR7(a);return a;}
function AR7(a){a.dx=Long_fromInt(1);a.ej=Long_ZERO;}
function AM5(a,b){a.dx=Long_and(b,Long_fromInt(65535));a.ej=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function ARx(a){a.dx=Long_fromInt(1);a.ej=Long_ZERO;}
function ANP(a){return Long_or(Long_shl(a.ej,16),a.dx);}
function AXK(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.dx=Long_add(a.dx,Long_fromInt(b[c]&255));a.ej=Long_add(a.ej,a.dx);a.dx=Long_rem(a.dx,Long_fromInt(65521));a.ej=Long_rem(a.ej,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.dx;d=c+1|0;a.dx=Long_add(j,Long_fromInt(i[c]&255));a.ej=Long_add(a.ej,a.dx);h=e;c=d;}a.dx=Long_rem(a.dx,Long_fromInt(65521));a.ej=Long_rem(a.ej,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.dx;e=c+1|0;a.dx=Long_add(j,Long_fromInt(i[c]&255));a.ej=Long_add(a.ej,a.dx);f=d;c=e;}a.dx=Long_rem(a.dx,Long_fromInt(65521));a.ej=Long_rem(a.ej,Long_fromInt(65521));}
function Ph(){Bz.call(this);}
function A8b(){var a=new Ph();AWA(a);return a;}
function AWA(a){Q(a);}
function Lg(){E.call(this);this.CL=null;}
var A5E=null;var A8c=null;function AOS(a){var b=new Lg();ADa(b,a);return b;}
function ADa(a,b){a.CL=b;}
function AMB(){A5E=AOS(B(273));A8c=AOS(B(274));}
function Is(){}
function JX(){var a=this;E.call(a);a.fA=null;a.et=null;}
function AVl(a,b){var c,d;if(a===b)return 1;if(!Pq(b,Is))return 0;a:{b:{c:{c=b;if(a.fA===null){if(c.fA!==null)break c;}else if(!a.fA.dQ(c.fA))break c;if(a.et===null){if(c.et!==null)break c;break b;}if(a.et.dQ(c.et))break b;}d=0;break a;}d=1;}return d;}
function APK(a){return a.fA;}
function ATx(a){return a.et;}
function ATj(a){return (a.fA===null?0:a.fA.eK())^(a.et===null?0:a.et.eK());}
function Hg(){var a=this;JX.call(a);a.ol=0;a.d7=null;}
function BT(){B5.call(this);}
function A8d(){var a=new BT();AN$(a);return a;}
function AN$(a){Q(a);}
function Mc(){BT.call(this);}
function A8e(){var a=new Mc();ASC(a);return a;}
function ASC(a){Q(a);}
function FK(){}
function Sy(){E.call(this);this.xa=null;}
function AD1(a){var b,c,d,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.xa;try{A4I=A4I+1|0;EJ(b);$p=1;continue _;}catch($$e){$$je=Bf($$e);c=$$je;}d=b.lw;$p=2;continue _;case 1:a:{try{b.jp();if(C()){break _;}}catch($$e){$$je=Bf($$e);c=$$je;break a;}c=b.lw;$p=3;continue _;}d=b.lw;$p=2;case 2:Zx(d);if(C()){break _;}a:{try{Te(b.lw);LC(d);break a;}catch($$e){$$je=Bf($$e);b=$$je;}LC(d);M(b);}b.uk=0;A4I=A4I-1|0;EJ(A4G);M(c);case 3:Zx(c);if(C())
{break _;}a:{try{Te(b.lw);LC(c);break a;}catch($$e){$$je=Bf($$e);b=$$je;}LC(c);M(b);}b.uk=0;A4I=A4I-1|0;EJ(A4G);return;default:Es();}}CM().s(a,b,c,d,$p);}
function ES(){BU.call(this);}
function A8f(){var a=new ES();APR(a);return a;}
function APR(a){Q(a);}
function Eb(){var a=this;E.call(a);a.g4=null;a.tk=0.0;a.tl=0.0;}
function F4(a,b,c,d,e){var f=new Eb();AMV(f,a,b,c,d,e);return f;}
function AMV(a,b,c,d,e,f){a.g4=Sw(b,c,d);a.tk=e;a.tl=f;}
function HG(a,b,c){var d;d=new Eb;d.g4=a.g4;d.tk=b;d.tl=c;return d;}
function EL(){var a=this;E.call(a);a.gO=null;a.Bm=0;}
function A8g(a,b,c,d,e){var f=new EL();Gd(f,a,b,c,d,e);return f;}
function Gd(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.Bm=0;a.gO=b;a.Bm=g.length;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=HG(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=HG(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=HG(h,k,l);g[3]=HG(g[3],i,l);}
function Yu(a){var b,c,d;b=N(Eb,a.gO.data.length);c=b.data;d=0;while(d<a.gO.data.length){c[d]=a.gO.data[(a.gO.data.length-d|0)-1|0];d=d+1|0;}a.gO=b;}
function AKb(a,b,c){var d,e,f,g;d=Nr(a.gO.data[1].g4,a.gO.data[0].g4);e=Cs(Xt(Nr(a.gO.data[1].g4,a.gO.data[2].g4),d));Bu(b);B_(e.t,e.v,e.s);f=0;while(f<4){g=a.gO.data[f];F(b,g.g4.t*c,g.g4.v*c,g.g4.s*c,g.tk,g.tl);f=f+1|0;}Bn(b);}
function JV(){var a=this;E.call(a);a.bF=0;a.m7=0;a.p$=Long_ZERO;a.bp=Long_ZERO;a.ne=0;a.du=0;a.vs=0;a.hD=null;a.B=null;a.ec=0;a.hJ=0;a.vh=null;a.ck=null;a.fk=null;}
var A8h=null;function AA5(a){var b;if(a.B===null)return (-2);b=a.B;a.B.l8=Long_ZERO;b.D=Long_ZERO;a.B.bQ=null;a.bF=14;a.hJ=(-1);H6(a.hD);return 0;}
function AA_(a){if(a.hD!==null)PP(a.hD);return 0;}
function Ty(a,b){var c,d,e,f;a.B.bQ=null;a.hD=null;a.du=0;if(b<0)b= -b;else if(b&1073741824){a.du=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.du=4;b=b&15;}else{a.du=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.hD!==null&&a.vs!=b){PP(a.hD);a.hD=null;}a.vs=b;c=new I4;d=a.B;b=1<<b;c.qv=$rt_createIntArray(1);c.nd=$rt_createIntArray(1);c.lG=$rt_createIntArray(1);c.lD=$rt_createIntArray(1);c.tz=N($rt_arraycls($rt_intcls()),1);c.tA=N($rt_arraycls($rt_intcls()),1);c.s2=$rt_createIntArray(1);c.s9=$rt_createIntArray(1);c.uM
=A0C();c.u=d;e=new JO;f=c.u;e.jW=0;e.Y=f;e.z=c;c.ob=e;c.jj=$rt_createIntArray(4320);c.cB=$rt_createByteArray(b);c.cr=b;c.pD=d.iA.du?1:0;c.df=0;H6(c);a.hD=c;AA5(a);return 0;}AA_(a);return (-2);}
function ABT(a,b){var c,d,e,f,g,h,i,$$je;if(a.B!==null&&a.B.bW!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bF){case 6:a.bF=13;a.B.bQ=B(275);a.ne=0;return (-2);case 7:d=Vg(a.hD,d);if(d==(-3)){a.bF=13;a.ne=0;continue i;}if(!d)d=c;if(d!=1)break i;a.p$=a.B.fu.v3();H6(a.hD);if(!a.du){a.bF=12;d=c;continue i;}a.bF=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=Ff(a,2,d,c);}catch($$e){$$je=Bf($$e);if($$je instanceof Du)
{e=$$je;return e.gV;}else{throw $$e;}}a.ec=a.bp.lo&65535;if((a.ec&255)!=8){a.B.bQ=B(276);a.bF=13;continue i;}if(a.ec&57344){a.B.bQ=B(277);a.bF=13;continue i;}if(a.ec&512)G4(a,2,a.bp);a.bF=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.B.J)return d;e=a.B;e.J=e.J
-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bF=9;d=c;}if(!a.B.J)return d;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bF=10;d=c;}if(!a.B.J)return d;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bF=11;d=c;}if(!a.B.J)return d;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.ec)a.bp=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bp,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bp,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bp,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bp,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.p$.lo!=
a.bp.lo)a.B.bQ=B(278);else if(a.ec&&a.ck!==null)a.ck.Du=a.bp;a.bF=15;d=c;}if(!(a.du&&a.ec)){if(a.B.bQ===null)break f;if(!DU(a.B.bQ,B(278)))break f;a.bF=13;a.ne=5;continue i;}try{d=Ff(a,4,d,c);}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;return e.gV;}else{throw $$e;}}if(a.B.bQ!==null&&DU(a.B.bQ,B(278))){a.bF=13;a.ne=5;continue i;}if(Long_eq(a.bp,Long_and(a.B.l8,new Long(4294967295, 0)))){a.B.bQ=null;break f;}a.B.bQ=B(279);a.bF=13;continue i;}if(!a.du){a.bF=7;continue i;}try{d=Ff(a,2,d,c);}catch($$e)
{$$je=Bf($$e);if($$je instanceof Du){e=$$je;return e.gV;}else{throw $$e;}}if(!(a.du!=4&&!(a.du&2))&&Long_eq(a.bp,Long_fromInt(35615))){if(a.du==4)a.du=2;a.B.fu=APl();G4(a,2,a.bp);if(a.ck===null)a.ck=A1Z();a.bF=23;continue i;}if(a.du&2){a.bF=13;a.B.bQ=B(280);continue i;}a.ec=0;a.m7=a.bp.lo&255;h=Long_shr(a.bp,8).lo&255;if(!(a.du&1&&!(((a.m7<<8)+h|0)%31|0))&&(a.m7&15)!=8){if(a.du!=4){a.bF=13;a.B.bQ=B(280);continue i;}e=a.B;e.x=e.x-2|0;e=a.B;e.J=e.J+2|0;e=a.B;e.D=Long_sub(e.D,Long_fromInt(2));a.du=0;a.bF=7;continue i;}if
((a.m7&15)!=8){a.bF=13;a.B.bQ=B(276);continue i;}if(a.du==4)a.du=1;if(((a.m7>>4)+8|0)>a.vs){a.bF=13;a.B.bQ=B(281);continue i;}a.B.fu=AYN();if(h&32){a.bF=2;break d;}a.bF=7;continue i;}break m;}try{d=Ff(a,4,d,c);}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;return e.gV;}else{throw $$e;}}if(a.ck!==null)a.ck.DK=a.bp;if(a.ec&512)G4(a,4,a.bp);a.bF=17;}try{d=Ff(a,2,d,c);}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;return e.gV;}else{throw $$e;}}if(a.ck!==null){a.ck.EN=a.bp.lo&255;a.ck.yb=a.bp.lo>>
8&255;}if(a.ec&512)G4(a,2,a.bp);a.bF=18;}if(a.ec&1024){try{d=Ff(a,2,d,c);}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;return e.gV;}else{throw $$e;}}if(a.ck!==null)a.ck.nY=$rt_createByteArray(a.bp.lo&65535);if(a.ec&512)G4(a,2,a.bp);}else if(a.ck!==null)a.ck.nY=null;a.bF=19;}if(a.ec&1024)x:{try{d=AIq(a,d,c);if(a.ck===null)break x;f=GY(a.fk);i=f.data;a.fk=null;b=i.length;if(b!=a.ck.nY.data.length){a.B.bQ=B(282);a.bF=13;continue i;}De(f,0,a.ck.nY,0,b);break x;}catch($$e){$$je=Bf($$e);if($$je instanceof Du)
{e=$$je;return e.gV;}else{throw $$e;}}}else if(a.ck!==null)a.ck.nY=null;a.bF=20;}y:{if(a.ec&2048){z:{try{d=M5(a,d,c);if(a.ck===null)break z;a.ck.wf=GY(a.fk);break z;}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;break h;}else{throw $$e;}}}try{a.fk=null;break y;}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;break h;}else{throw $$e;}}}else if(a.ck!==null)a.ck.wf=null;}a.bF=21;}ba:{if(a.ec&4096){bb:{try{d=M5(a,d,c);if(a.ck===null)break bb;a.ck.xK=GY(a.fk);break bb;}catch($$e){$$je=Bf($$e);if($$je instanceof Du)
{e=$$je;break g;}else{throw $$e;}}}try{a.fk=null;break ba;}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;break g;}else{throw $$e;}}}else if(a.ck!==null)a.ck.xK=null;}a.bF=22;}if(a.ec&512){try{d=Ff(a,2,d,c);}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;return e.gV;}else{throw $$e;}}if(a.ck!==null)a.ck.Fm=Long_and(a.bp,Long_fromInt(65535)).lo;if(Long_ne(a.bp,Long_and(a.B.fu.v3(),Long_fromInt(65535)))){a.bF=13;a.B.bQ=B(283);a.ne=5;continue;}}a.B.fu=APl();a.bF=7;}return d;}return e.gV;}return e.gV;}a.bF
=12;}return 1;}if(!a.B.J)return d;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));f=a.B.bW.data;e=a.B;d=e.x;e.x=d+1|0;a.bp=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bF=3;d=c;}if(!a.B.J)return d;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;d=e.x;e.x=d+1|0;a.bp=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bF=4;d=c;}if(!a.B.J)return d;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e
=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bF=5;}if(!a.B.J)return c;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.B.fu.Bn(a.bp);a.bF=6;return 2;}if(b==4&&a.bF==14)return 0;return (-2);}
function Ff(a,b,c,d){var e,f,g,h;if(a.hJ==(-1)){a.hJ=b;a.bp=Long_ZERO;}while(true){if(a.hJ<=0){if(b==2)a.bp=Long_and(a.bp,Long_fromInt(65535));else if(b==4)a.bp=Long_and(a.bp,new Long(4294967295, 0));a.hJ=(-1);return c;}if(!a.B.J)break;e=a.B;e.J=e.J-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));f=a.bp;g=a.B.bW.data;e=a.B;h=e.x;e.x=h+1|0;a.bp=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.hJ|0)*8|0)));a.hJ=a.hJ-1|0;c=d;}M(ACl(a,c));}
function M5(a,b,c){var d,e;if(a.fk===null)a.fk=AXh();while(true){if(!a.B.J)M(ACl(a,b));d=a.B;d.J=d.J-1|0;d=a.B;d.D=Long_add(d.D,Long_fromInt(1));e=a.B.bW.data[a.B.x];if(e)Oz(a.fk,a.B.bW,a.B.x,1);a.B.fu.jG(a.B.bW,a.B.x,1);d=a.B;d.x=d.x+1|0;if(!e)break;b=c;}return c;}
function AIq(a,b,c){var d;if(a.fk===null)a.fk=AXh();while(Long_gt(a.bp,Long_ZERO)){if(!a.B.J)M(ACl(a,b));d=a.B;d.J=d.J-1|0;d=a.B;d.D=Long_add(d.D,Long_fromInt(1));Oz(a.fk,a.B.bW,a.B.x,1);a.B.fu.jG(a.B.bW,a.B.x,1);d=a.B;d.x=d.x+1|0;a.bp=Long_sub(a.bp,Long_fromInt(1));b=c;}return b;}
function G4(a,b,c){var d;d=0;while(d<b){a.vh.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.B.fu.jG(a.vh,0,b);}
function AJf(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);A8h=b;}
function M9(){Ek.call(this);}
function A8i(){var a=new M9();AWF(a);return a;}
function AWF(a){return;}
function AWb(a,b){$rt_putStderr(b);}
function IK(){var a=this;E.call(a);a.t=0.0;a.v=0.0;a.s=0.0;}
var A8j=null;var A37=0;function Sw(b,c,d){var e;e=new IK;if(b===-0.0)b=0.0;if(c===-0.0)c=0.0;if(d===-0.0)d=0.0;e.t=b;e.v=c;e.s=d;return e;}
function BR(b,c,d){var e,f;if(A37>=A8j.p)U(A8j,Sw(0.0,0.0,0.0));e=A8j;f=A37;A37=f+1|0;e=Z(e,f);e.t=b;e.v=c;e.s=d;return e;}
function Nr(a,b){return BR(b.t-a.t,b.v-a.v,b.s-a.s);}
function Cs(a){var b;b=B7(a.t*a.t+a.v*a.v+a.s*a.s);return b<1.0E-4?BR(0.0,0.0,0.0):BR(a.t/b,a.v/b,a.s/b);}
function Xt(a,b){return BR(a.v*b.s-a.s*b.v,a.s*b.t-a.t*b.s,a.t*b.v-a.v*b.t);}
function C3(a,b,c,d){return BR(a.t+b,a.v+c,a.s+d);}
function Di(a,b){var c,d,e;c=b.t-a.t;d=b.v-a.v;e=b.s-a.s;return B7(c*c+d*d+e*e);}
function D2(a,b){var c,d,e;c=b.t-a.t;d=b.v-a.v;e=b.s-a.s;return c*c+d*d+e*e;}
function Xx(a,b,c,d){var e,f,g;e=b-a.t;f=c-a.v;g=d-a.s;return e*e+f*f+g*g;}
function GF(a){return B7(a.t*a.t+a.v*a.v+a.s*a.s);}
function I_(a,b,c){var d,e,f,g;d=b.t-a.t;e=b.v-a.v;f=b.s-a.s;if(d*d<1.0000000116860974E-7)return null;g=(c-a.t)/d;return g>=0.0&&g<=1.0?BR(a.t+d*g,a.v+e*g,a.s+f*g):null;}
function Ik(a,b,c){var d,e,f,g;d=b.t-a.t;e=b.v-a.v;f=b.s-a.s;if(e*e<1.0000000116860974E-7)return null;g=(c-a.v)/e;return g>=0.0&&g<=1.0?BR(a.t+d*g,a.v+e*g,a.s+f*g):null;}
function IY(a,b,c){var d,e,f,g;d=b.t-a.t;e=b.v-a.v;f=b.s-a.s;if(f*f<1.0000000116860974E-7)return null;g=(c-a.s)/f;return g>=0.0&&g<=1.0?BR(a.t+d*g,a.v+e*g,a.s+f*g):null;}
function AKH(){A8j=Ck();A37=0;}
function AG8(){E.call(this);}
function A8k(){var a=new AG8();ANv(a);return a;}
function ANv(a){return;}
function Fy(b){return Math.sin(b);}
function FI(b){return Math.cos(b);}
function G$(b){return Math.atan(b);}
function AUK(b){return Math.log(b);}
function DL(b){return Math.sqrt(b);}
function QQ(b){return Math.ceil(b);}
function AT0(b,c){return Math.pow(b,c);}
function CB(b,c){return Math.atan2(b,c);}
function BI(){return ATG();}
function ATG(){return Math.random();}
function CR(b,c){if(b<c)c=b;return c;}
function DV(b,c){if(b>c)c=b;return c;}
function GX(b){if(b<=0)b= -b;return b;}
function GL(b){if(b<=0.0)b= -b;return b;}
function HL(){E.call(this);this.C0=null;}
var A8l=null;var A5n=null;var A70=null;function AB5(a){var b=new HL();AKe(b,a);return b;}
function AKe(a,b){a.C0=b;}
function YF(){A8l=AB5(B(284));A5n=AB5(B(285));A70=AB5(B(286));}
function JH(){J6.call(this);}
function Tm(a){return a.v1;}
function Xo(){var a=this;JH.call(a);a.v1=0;a.vI=0;a.k1=null;}
function ARG(a,b,c,d,e,f){var g=new Xo();ATS(g,a,b,c,d,e,f);return g;}
function ATS(a,b,c,d,e,f,g){Jb(a,c);a.be=e;a.cb=f;a.vI=b;a.v1=g;a.k1=d;}
function AJl(a,b){return a.k1.data[b+a.vI|0];}
function RH(a,b,c){a.k1.data[b+a.vI|0]=c;}
function ARa(a){return 1;}
function APj(a){return a.k1;}
function ATn(a){return a.v1;}
function J2(){var a=this;E.call(a);a.Dt=null;a.sB=null;a.CI=0.0;a.yI=0.0;a.tj=null;a.sL=null;a.lJ=0;}
function Yq(a,b){var c;if(b!==null){a.tj=b;return a;}c=new Cq;Bl(c,B(287));M(c);}
function ATr(a,b){return;}
function AB$(a,b){var c;if(b!==null){a.sL=b;return a;}c=new Cq;Bl(c,B(287));M(c);}
function AWy(a,b){return;}
function AEc(a,b,c,d){var e,f,g,h,$$je;a:{if(a.lJ!=3){if(d)break a;if(a.lJ!=2)break a;}b=new DK;Q(b);M(b);}a.lJ=!d?1:2;while(true){try{e=UU(a,b,c);}catch($$e){$$je=Bf($$e);if($$je instanceof B5){f=$$je;M(AVm(f));}else{throw $$e;}}if(H2(e)){if(!d)return e;g=Ci(b);if(g<=0)return e;e=EB(g);}else if(Hr(e))break;h=!KA(e)?a.tj:a.sL;b:{if(h!==A5n){if(h===A8l)break b;else return e;}if(Ci(c)<a.sB.data.length)return A8m;Q4(c,a.sB);}D_(b,b.be+JL(e)|0);}return e;}
function TV(a,b){var c;if(a.lJ!=2&&a.lJ!=4){b=new DK;Q(b);M(b);}c=A8n;if(c===A8n)a.lJ=3;return c;}
function AXb(a,b){return A8n;}
function LT(){var a=this;E.call(a);a.l$=0;a.o4=0;}
var A8n=null;var A8m=null;function U_(a,b){var c=new LT();AFe(c,a,b);return c;}
function AFe(a,b,c){a.l$=b;a.o4=c;}
function H2(a){return a.l$?0:1;}
function Hr(a){return a.l$!=1?0:1;}
function Lo(a){return !Nu(a)&&!KA(a)?0:1;}
function Nu(a){return a.l$!=2?0:1;}
function KA(a){return a.l$!=3?0:1;}
function JL(a){var b;if(Lo(a))return a.o4;b=new HS;Q(b);M(b);}
function EB(b){return U_(2,b);}
function O_(a){var b,c;switch(a.l$){case 0:b=new Nl;Q(b);M(b);case 1:b=new PE;Q(b);M(b);case 2:b=new O2;c=a.o4;Q(b);b.ys=c;M(b);case 3:b=new Nh;c=a.o4;Q(b);b.Bc=c;M(b);default:}}
function AFI(){A8n=U_(0,0);A8m=U_(1,0);}
function VU(){E.call(this);}
function AYR(){return {};}
function M$(){}
function Uw(){E.call(this);}
function I4(){var a=this;E.call(a);a.df=0;a.od=0;a.oy=0;a.fq=0;a.e0=null;a.qv=null;a.nd=null;a.lG=null;a.lD=null;a.tz=null;a.tA=null;a.s2=null;a.s9=null;a.ob=null;a.rE=0;a.bA=0;a.bz=0;a.jj=null;a.cB=null;a.cr=0;a.bK=0;a.bf=0;a.pD=0;a.uM=null;a.u=null;}
var A8o=null;var A8p=null;function H6(a){a.df=0;a.bA=0;a.bz=0;a.bf=0;a.bK=0;if(a.pD)a.u.fu.mw();}
function Vg(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.u.x;d=a.u.J;e=a.bz;f=a.bA;g=a.bf;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.df){case 2:break f;case 9:a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.oy=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.e0!==null&&a.e0.data.length>=k))a.e0=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.e0.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.fq=0;a.df=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,(-2));}while(f<32){if(!d){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,
Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.df=9;a.u.bQ=B(288);a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,(-3));}a.od=l;f=0;a.df=a.od?2:!a.rE?0:7;e=f;continue e;}while(f<3){if(!d){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.rE=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.df=1;break l;case 1:ZO(a.lG,a.lD,a.tz,a.tA,a.u);S4(a.ob,a.lG.data[0],a.lD.data[0],a.tz.data[0],0,a.tA.data[0],0);e=e>>>3;f=f+(-3)|0;a.df=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.df=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.df=9;a.u.bQ=B(289);a.bz=b;a.bA=k;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,(-3));default:}}continue e;}while(a.fq<(4+(a.oy>>>10)|0)){while(f<3){if(!d){a.bz=e;a.bA
=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.e0.data;j=A8p.data;k=a.fq;a.fq=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.fq<19){o=a.e0.data;j=A8p.data;k=a.fq;a.fq=k+1|0;o[j[k]]=0;}a.qv.data[0]=7;k=AKu(a.uM,a.e0,a.qv,a.nd,a.jj,a.u);if(k){if(k==(-3)){a.e0=null;a.df=9;}a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,k);}a.fq=0;a.df=5;}while(true)
{k=a.oy;if(a.fq>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.qv.data[0];while(f<k){if(!d){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.jj.data[((a.nd.data[0]+(e&A8o.data[k])|0)*3|0)+1|0];n=a.jj.data[((a.nd.data[0]+(e&A8o.data[k])|0)*3|0)+2|0];l=S(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.e0.data;k=a.fq;a.fq=k+1|0;j[k]=n;}else{p=S(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bz=e;a.bA=
f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&A8o.data[q])|0;e=n>>>q;f=k-q|0;h=a.fq;q=a.oy;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.e0.data[h-1|0];while(true){j=a.e0.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.fq=l;}}a.nd.data[0]=(-1);a.lG.data[0]=9;a.lD.data[0]=6;k=a.oy;k=Uz(a.uM,257+(k&31)|0,1+(k>>5&31)|0,a.e0,a.lG,a.lD,a.s2,a.s9,a.jj,
a.u);if(k){if(k==(-3)){a.e0=null;a.df=9;}a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,k);}S4(a.ob,a.lG.data[0],a.lD.data[0],a.jj,a.s2.data[0],a.jj,a.s9.data[0]);a.df=6;}a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;b=Xe(a.ob,b);if(b!=1)break e;b=0;Wt(a.ob,a.u);c=a.u.x;d=a.u.J;e=a.bz;f=a.bA;g=a.bf;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;if(a.rE){a.df=7;break b;}a.df=0;continue e;}if(!d){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,
Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}if(!h){if(g==a.cr&&a.bK){g=0;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;}if(!h){a.bf=g;b=BX(a,b);g=a.bf;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;if(g==a.cr&&a.bK){g=0;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;}if(!h){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}}}b=0;k=a.od;if(k>d)k=d;if(k>h)k=h;De(a.u.bW,c,a.cB,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.od-k|0;a.od=k;if(k)continue;a.df=!a.rE?0:7;}return BX(a,b);}a.df=9;a.u.bQ
=B(290);a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,(-3));}a.e0=null;a.df=9;a.u.bQ=B(291);a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,(-3));}a.bf=g;b=BX(a,b);g=a.bf;if(a.bK!=a.bf){a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}a.df=8;}a.bz=e;a.bA=f;a.u.J=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,1);}
function PP(a){H6(a);a.cB=null;a.jj=null;}
function BX(a,b){var c,d,e,f,g;c=a.u.of;d=a.bK;e=(d>a.bf?a.cr:a.bf)-d|0;if(e>a.u.hn)e=a.u.hn;if(e&&b==(-5))b=0;f=a.u;f.hn=f.hn-e|0;f=a.u;f.l8=Long_add(f.l8,Long_fromInt(e));if(a.pD&&e>0)a.u.fu.jG(a.cB,d,e);De(a.cB,d,a.u.sQ,c,e);c=c+e|0;g=d+e|0;if(g==a.cr){if(a.bf==a.cr)a.bf=0;d=a.bf-0|0;if(d>a.u.hn)d=a.u.hn;if(d&&b==(-5))b=0;f=a.u;f.hn=f.hn-d|0;f=a.u;f.l8=Long_add(f.l8,Long_fromInt(d));if(a.pD&&d>0)a.u.fu.jG(a.cB,0,d);De(a.cB,0,a.u.sQ,c,d);c=c+d|0;g=0+d|0;}a.u.of=c;a.bK=g;return b;}
function AC$(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;A8o=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;A8p=b;}
function Lr(){J2.call(this);}
function UU(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(CR(Ci(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(CR(Ci(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&ED(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CR(Ci(b)+k|0,e.length);MB(b,d,k,g-k|0);f=0;}if(!ED(c)){l=!ED(b)&&f>=g?A8n:A8m;break a;}k=CR(Ci(c),i.length);m=new Qd;m.wk=b;m.z3=c;l=Ya(a,d,f,g,h,0,k,m);f=m.tw;if(l===null&&0==m.p4)l=A8n;SX(c,h,0,m.p4);if(l!==null)break;}}D_(b,b.be-(g-f|0)|0);return l;}
function M_(){Lr.call(this);}
function Ya(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(LS(h,2))break a;i=A8m;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!S2(l)){if((f+3|0)>g){j=j+(-1)|0;if(LS(h,3))break a;i=A8m;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Iz(l)){i=EB(1);break a;}if
(j>=d){if(Wf(h))break a;i=A8n;break a;}c=j+1|0;j=k[j];if(!I3(j)){j=c+(-2)|0;i=EB(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(LS(h,4))break a;i=A8m;break a;}k=e.data;n=Ky(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.tw=j;h.p4=f;return i;}
function AIZ(){E.call(this);}
function A8q(){var a=new AIZ();AT1(a);return a;}
function AT1(a){return;}
function AJR(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A6x());}return b.data.length;}
function Z8(b,c){if(b===null){b=new El;Q(b);M(b);}if(b===K($rt_voidcls())){b=new Cq;Q(b);M(b);}if(c>=0)return ATf(b.fl,c);b=new Ts;Q(b);M(b);}
function ATf(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Fk(){var a=this;E.call(a);a.i0=null;a.i7=null;a.eg=null;a.e8=null;a.kc=null;a.hv=null;}
var A8r=null;var A8s=null;var A8t=null;var A8u=null;var A8v=null;var A8w=null;function A0C(){var a=new Fk();ACR(a);return a;}
function ACR(a){a.i0=null;a.i7=null;a.eg=null;a.e8=null;a.kc=null;a.hv=null;}
function Lt(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eg.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eg.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eg.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eg.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m=s;while(true){if(m>=t){v=u-a.eg.data[t]|0;if(v<0)return (-3);b=a.eg.data;b[t]
=b[t]+v|0;b=a.hv.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.hv.data;u=u+a.eg.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.hv.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.hv.data[t];b=a.hv.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.kc.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eg.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c
=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eg.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eg.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.kc.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.hv.data[y]=m;a.e8.data[0]=bc<<24>>24;a.e8.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.e8.data;b=a.kc.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;De(a.e8,0,j,(a.kc.data[q]+c|0)*3|0,3);z=be;}b=a.e8.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.e8.data[0]=192;else{p=l.data;if
(p[w]>=e){i=g.data;o=f.data;a.e8.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.e8.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.e8;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.e8.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){De(a.e8,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.hv.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eg.data[m]|0;if(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function AKu(a,b,c,d,e,f){var g;KW(a,19);a.i0.data[0]=0;g=Lt(a,b,0,19,19,null,null,d,c,e,a.i0,a.i7);if(g==(-3))f.bQ=B(292);else if(!(g!=(-5)&&c.data[0])){f.bQ=B(293);g=(-3);}return g;}
function Uz(a,b,c,d,e,f,g,h,i,j){var k;KW(a,288);a.i0.data[0]=0;k=Lt(a,d,0,b,257,A8t,A8u,g,e,i,a.i0,a.i7);if(!k&&e.data[0]){KW(a,288);c=Lt(a,d,b,c,0,A8v,A8w,h,f,i,a.i0,a.i7);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.bQ=B(294);else if(c==(-5)){j.bQ=B(295);c=(-3);}else if(c!=(-4)){j.bQ=B(296);c=(-3);}return c;}if(k==(-3))j.bQ=B(297);else if(k!=(-4)){j.bQ=B(298);k=(-3);}return k;}
function ZO(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=A8r;e[0]=A8s;return 0;}
function KW(a,b){var c;if(a.i0===null){a.i0=$rt_createIntArray(1);a.i7=$rt_createIntArray(b);a.eg=$rt_createIntArray(16);a.e8=$rt_createIntArray(3);a.kc=$rt_createIntArray(15);a.hv=$rt_createIntArray(16);}if(a.i7.data.length<b)a.i7=$rt_createIntArray(b);c=0;while(c<b){a.i7.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eg.data[c]=0;c=c+1|0;}c=0;while(c<3){a.e8.data[c]=0;c=c+1|0;}De(a.eg,0,a.kc,0,15);De(a.eg,0,a.hv,0,16);}
function AI0(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
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
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;A8r=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;A8s=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;A8t=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;A8u=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;A8v=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;A8w=b;}
function JO(){var a=this;E.call(a);a.eF=0;a.kF=0;a.e4=null;a.jW=0;a.kW=0;a.ww=0;a.qS=0;a.pk=0;a.sM=0;a.sy=0;a.v8=null;a.tN=0;a.vK=null;a.tU=0;a.Y=null;a.z=null;}
var A8x=null;function S4(a,b,c,d,e,f,g){a.eF=0;a.sM=b<<24>>24;a.sy=c<<24>>24;a.v8=d;a.tN=e;a.vK=f;a.tU=g;a.e4=null;}
function Xe(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.Y.x;d=a.Y.J;e=a.z.bz;f=a.z.bA;g=a.z.bf;h=g>=a.z.bK?a.z.cr-g|0:(a.z.bK-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.eF){case 0:break f;case 2:i=a.qS;while(f<i){if(!d){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,b);}b=0;d=d+(-1)|0;k=a.Y.bW.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.kF=a.kF+(e&A8x.data[i])|0;e=e>>i;f=f-i|0;a.kW=a.sy;a.e4=a.vK;a.jW=a.tU;a.eF=3;break g;case 4:i=a.qS;while(f<i){if
(!d){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,b);}b=0;d=d+(-1)|0;k=a.Y.bW.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.pk=a.pk+(e&A8x.data[i])|0;e=e>>i;f=f-i|0;a.eF=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.z.bf=g;b=BX(a.z,b);g=a.z.bf;if(a.z.bK!=a.z.bf){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,b);}a.eF=8;break a;case 9:a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D
=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,(-2));}}l=a.kW;while(f<l){if(!d){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,b);}b=0;d=d+(-1)|0;k=a.Y.bW.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.jW+(e&A8x.data[l])|0)*3|0;k=a.e4.data;i=m+1|0;e=e>>
k[i];f=f-a.e4.data[i]|0;l=a.e4.data[m];if(l&16){a.qS=l&15;a.pk=a.e4.data[m+2|0];a.eF=4;continue b;}if(l&64){a.eF=9;a.Y.bQ=B(299);a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,(-3));}a.kW=l;a.jW=(m/3|0)+a.e4.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;b=AHF(a,a.sM,a.sy,a.v8,a.tN,a.vK,a.tU,a.z,a.Y);c=a.Y.x;d=a.Y.J;e=a.z.bz;f=a.z.bA;g=a.z.bf;h=g>=a.z.bK?a.z.cr-g|
0:(a.z.bK-g|0)-1|0;if(b){a.eF=b!=1?9:7;continue b;}}a.kW=a.sM;a.e4=a.v8;a.jW=a.tN;a.eF=1;}l=a.kW;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.Y.bW.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.jW+(e&A8x.data[l])|0)*3|0;k=a.e4.data;i=m+1|0;e=e>>>k[i];f=f-a.e4.data[i]|0;n=a.e4.data[m];if(!n){a.ww=a.e4.data[m+2|0];a.eF=6;continue b;}if(n&16){a.qS=n&15;a.kF=a.e4.data[m+2|0];a.eF=2;continue b;}if(!(n&64)){a.kW=n;a.jW=(m/3|0)+a.e4.data[m+2|0]|0;continue b;}if(!(n&32)){a.eF=9;a.Y.bQ=B(300);a.z.bz=e;a.z.bA=f;a.Y.J
=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,(-3));}a.eF=7;continue b;}if(h)i=g;else{if(g!=a.z.cr)i=g;else if(!a.z.bK)i=g;else{i=0;h=i>=a.z.bK?a.z.cr-i|0:(a.z.bK-i|0)-1|0;}if(!h){a.z.bf=i;b=BX(a.z,b);i=a.z.bf;h=i>=a.z.bK?a.z.cr-i|0:(a.z.bK-i|0)-1|0;if(i==a.z.cr&&a.z.bK){i=0;h=i>=a.z.bK?a.z.cr-i|0:(a.z.bK-i|0)-1|0;}if(!h){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=i;return BX(a.z,b);}}}b=0;k=a.z.cB.data;g=i+1|0;k[i]=a.ww<<24>>
24;h=h+(-1)|0;a.eF=0;continue b;}i=g-a.pk|0;while(i<0){i=i+a.z.cr|0;}while(a.kF){if(h)l=g;else{if(g!=a.z.cr)l=g;else if(!a.z.bK)l=g;else{l=0;h=l>=a.z.bK?a.z.cr-l|0:(a.z.bK-l|0)-1|0;}if(!h){a.z.bf=l;b=BX(a.z,b);l=a.z.bf;h=l>=a.z.bK?a.z.cr-l|0:(a.z.bK-l|0)-1|0;if(l==a.z.cr&&a.z.bK){l=0;h=l>=a.z.bK?a.z.cr-l|0:(a.z.bK-l|0)-1|0;}if(!h){a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=l;return BX(a.z,b);}}}o=a.z.cB.data;g=l+1|0;k=a.z.cB.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m
==a.z.cr?0:m;a.kF=a.kF-1|0;}a.eF=0;}a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,b);}a.z.bz=e;a.z.bA=f;a.Y.J=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,1);}
function Wt(a,b){return;}
function AHF(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.x;k=i.J;l=h.bz;m=h.bA;n=h.bf;o=n>=h.bK?h.cr-n|0:(h.bK-n|0)-1|0;p=A8x.data[b];q=A8x.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.bW.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cB.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&A8x.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.bW.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.bQ=B(299);b=i.J-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bz=w;h.bA=b;i.J=c;i.D=Long_add(i.D,Long_fromInt(e-i.x|0));i.x=e;h.bf=n;return (-3);}b=(b+r[x+2|0]|0)+(w&A8x.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.bW.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&A8x.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.cB.data;b=n+1|0;r=h.cB.data;c=w+1|0;s[n]=r[w];s=h.cB.data;n=b+1|0;r=h.cB.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{De(h.cB,w,h.cB,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cr|0;if(w>=0)break;}b=h.cr-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.cB.data;n=c+1|0;r=h.cB.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{De(h.cB,w,h.cB,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.cB.data;c=n+1|0;r=h.cB.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}De(h.cB,w,h.cB,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.J-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bz=l;h.bA=e;i.J=b;i.D=Long_add(i.D,Long_fromInt(c-i.x|0));i.x=c;h.bf=n;return 1;}i.bQ=B(300);v=i.J-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bz=l;h.bA=c;i.J=e;i.D=Long_add(i.D,Long_fromInt(b-i.x|0));i.x=b;h.bf=n;return (-3);}t=(t+s[u+2|0]|0)+(l&A8x.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cB.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.J-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bz=l;h.bA=g;i.J=b;i.D=Long_add(i.D,Long_fromInt(e-i.x|0));i.x=e;h.bf=c;return 0;}
function Xj(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;A8x=b;}
function Gn(){BU.call(this);}
function A8y(){var a=new Gn();AZS(a);return a;}
function AZS(a){Q(a);}
function Ts(){B5.call(this);}
function A8z(){var a=new Ts();AX9(a);return a;}
function AX9(a){Q(a);}
function WD(){E.call(this);}
function AZ0(a,b){return a.DA(b);}
function AOa(a){return a.ES();}
function IL(){B5.call(this);}
function A8A(){var a=new IL();AW5(a);return a;}
function AW5(a){Q(a);}
function VJ(){var a=this;E.call(a);a.gz=null;a.pC=null;a.dI=null;a.eH=0;}
function A0A(){var a=new VJ();ATR(a);return a;}
function ATR(a){a.dI=A2p;}
function DK(){Bz.call(this);}
function A8B(){var a=new DK();AYP(a);return a;}
function AYP(a){Q(a);}
function ADA(){E.call(this);}
function H9(b){return b.length?0:1;}
function AJq(b){return b.shift();}
function PK(){E.call(this);this.z2=null;}
function ALr(a){var b,c,d;b=a.z2;if(!Gy(b)&&b.b3.dI===null){c=b.b3;if(c.gz!==null&&!H9(c.gz)){b=c.gz;d=AJq(b);if(b===null)c.gz=null;ND(d);}}}
function Og(){var a=this;E.call(a);a.w1=null;a.w2=null;a.wZ=0;a.w0=null;}
function ND(a){var b,c,d,e;b=a.w1;c=a.w2;d=a.wZ;e=a.w0;EJ(b);c.b3.dI=b;b=c.b3;b.eH=b.eH+d|0;Cx(e,null);}
function F1(){BU.call(this);}
function A8C(){var a=new F1();AOB(a);return a;}
function AOB(a){Q(a);}
function S0(){EA.call(this);}
function A8D(){var a=new S0();ASR(a);return a;}
function ASR(a){Q(a);}
function Ei(){Bz.call(this);}
function A8E(){var a=new Ei();AXu(a);return a;}
function AXu(a){Q(a);}
function L3(){var a=this;E.call(a);a.DO=null;a.yO=0.0;a.Ci=0.0;a.j$=null;a.lB=null;a.pS=null;a.hd=0;}
function ALm(a,b){var c;if(b!==null){a.lB=b;return a;}c=new Cq;Bl(c,B(301));M(c);}
function AZl(a,b){return;}
function Ze(a,b){var c;if(b!==null){a.pS=b;return a;}c=new Cq;Bl(c,B(301));M(c);}
function AWg(a,b){return;}
function QZ(a,b,c,d){var e,f,$$je;if(!(a.hd==2&&!d)&&a.hd!=3){a.hd=d?2:1;while(true){try{e=ABB(a,b,c);}catch($$e){$$je=Bf($$e);if($$je instanceof B5){f=$$je;M(AVm(f));}else{throw $$e;}}if(Hr(e))return e;if(H2(e)){if(d&&ED(b)){if(a.lB===A70)return EB(Ci(b));if(Ci(c)<=BE(a.j$))return A8m;D_(b,b.be+Ci(b)|0);if(a.lB===A5n)Ld(c,a.j$);}return e;}if(Nu(e)){if(a.lB===A70)return e;if(a.lB===A5n){if(Ci(c)<BE(a.j$))return A8m;Ld(c,a.j$);}D_(b,b.be+JL(e)|0);}else if(KA(e)){if(a.pS===A70)break;if(a.pS===A5n){if(Ci(c)<BE(a.j$))return A8m;Ld(c,
a.j$);}D_(b,b.be+JL(e)|0);}}return e;}b=new DK;Q(b);M(b);}
function XR(a,b){if(a.hd!=3&&a.hd!=2){b=new DK;Q(b);M(b);}a.hd=3;return A8n;}
function ALM(a){a.hd=0;return a;}
function AEH(a,b){var c,d;if(a.hd&&a.hd!=3){b=new DK;Q(b);M(b);}if(!Ci(b))return ACx(0);if(a.hd)ALM(a);c=ACx(DV(8,Ci(b)*a.yO|0));while(true){d=QZ(a,b,c,0);if(H2(d))break;if(Hr(d))c=RL(a,c);if(!Lo(d))continue;O_(d);}b=QZ(a,b,c,1);if(Lo(b))O_(b);while(!H2(XR(a,c))){c=RL(a,c);}FC(c);return c;}
function RL(a,b){var c,d,e;c=b.k1;d=MF(c,DV(8,c.data.length*2|0));e=AHH(d,0,d.data.length);D_(e,b.be);return e;}
function AQX(a,b){return A8n;}
function AVD(a){return;}
function Pm(){}
function Ps(){}
function MN(){var a=this;E.call(a);a.t_=null;a.ya=null;a.Eh=0;a.E4=0;}
function AJW(a){if(!a.Eh){a.t_.zF=null;EJ(a.t_);Cx(a.ya,null);}}
function JS(){L3.call(this);}
function ABB(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(CR(Ci(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(CR(Ci(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&ED(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CR(Ci(b)+k|0,e.length);AFc(b,d,k,g-k|0);f=0;}if(!ED(c)){l=!ED(b)&&f>=g?A8n:A8m;break a;}k=CR(Ci(c),i.length);m=new Sx;m.xC=b;m.A0=c;l=AL7(a,d,f,g,h,0,k,m);f=m.tY;if(l===null&&0==m.o5)l=A8n;AME(c,h,0,m.o5);if(l!==null)break;}}D_(b,b.be-(g-f|0)|0);return l;}
function On(){JS.call(this);}
function AL7(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Ly(h))break a;i=A8n;break a;}n=k+1|0;k=j[k];if(!Gi(a,k)){c=n+(-2)|0;i=EB(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Ly(h))break a;i=A8n;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Gi(a,m))break b;if(!Gi(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(S2(p)){c=k+(-3)|0;i=EB(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=EB(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Ly(h))break a;i=A8n;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AEm(h,2))break a;i=A8m;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Gi(a,m))break c;if(!Gi(a,o))break c;if(!Gi(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=IV(q);m=c+1|0;j[c]=Ih(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=EB(1);break a;}c=k+(-3)|0;i=EB(1);}h.tY=
c;h.o5=f;return i;}
function Gi(a,b){return (b&192)!=128?0:1;}
function Du(){var a=this;Bz.call(a);a.gV=0;a.EA=null;}
function ACl(a,b){var c=new Du();AOC(c,a,b);return c;}
function AOC(a,b,c){a.EA=b;Q(a);a.gV=c;}
function AH$(){var a=this;E.call(a);a.E7=0;a.CT=0;a.DK=Long_ZERO;a.EN=0;a.yb=0;a.nY=null;a.wf=null;a.xK=null;a.Fm=0;a.Du=Long_ZERO;a.CV=0;a.D3=Long_ZERO;}
function A1Z(){var a=new AH$();AX5(a);return a;}
function AX5(a){a.E7=0;a.CT=0;a.yb=255;a.CV=0;a.D3=Long_ZERO;}
function Mu(){E.call(this);this.k2=0;}
var A8F=null;function APl(){var a=new Mu();U6(a);return a;}
function U6(a){a.k2=0;}
function ATN(a,b,c,d){var e,f,g,h;e=a.k2^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=A8F.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.k2=e^(-1);}
function AWq(a){a.k2=0;}
function AYO(a,b){a.k2=Long_and(b,new Long(4294967295, 0)).lo;}
function AXg(a){return Long_and(Long_fromInt(a.k2),new Long(4294967295, 0));}
function AAW(){var b,c,d;A8F=null;A8F=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}A8F.data[b]=d;b=b+1|0;}}
function HF(){var a=this;E.call(a);a.N=0.0;a.I=0.0;a.O=0.0;a.R=0.0;a.Q=0.0;a.S=0.0;}
var A8G=null;var A36=0;function Li(b,c,d,e,f,g){var h;h=new HF;h.N=b;h.I=c;h.O=d;h.R=e;h.Q=f;h.S=g;return h;}
function Dy(b,c,d,e,f,g){var h,i;if(A36>=A8G.p)U(A8G,Li(0.0,0.0,0.0,0.0,0.0,0.0));h=A8G;i=A36;A36=i+1|0;return K0(Z(h,i),b,c,d,e,f,g);}
function K0(a,b,c,d,e,f,g){a.N=b;a.I=c;a.O=d;a.R=e;a.Q=f;a.S=g;return a;}
function HK(a,b,c,d){var e,f,g,h,i,j,k;e=a.N;f=a.I;g=a.O;h=a.R;i=a.Q;j=a.S;k=S(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=S(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=S(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return Dy(e,f,g,h,i,j);}
function Da(a,b,c,d){return Dy(a.N-b,a.I-c,a.O-d,a.R+b,a.Q+c,a.S+d);}
function QD(a,b,c,d){return Dy(a.N+b,a.I+c,a.O+d,a.R+b,a.Q+c,a.S+d);}
function NJ(a,b,c){var d,e;if(b.Q>a.I&&b.I<a.Q){if(b.S>a.O&&b.O<a.S){if(c<=0.0)d=c;else if(b.R>a.N)d=c;else{d=a.N-b.R;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.N<a.R)e=d;else{e=a.R-b.N;if(e<=d)e=d;}return e;}return c;}return c;}
function Sh(a,b,c){var d,e;if(b.R>a.N&&b.N<a.R){if(b.S>a.O&&b.O<a.S){if(c<=0.0)d=c;else if(b.Q>a.I)d=c;else{d=a.I-b.Q;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.I<a.Q)e=d;else{e=a.Q-b.I;if(e<=d)e=d;}return e;}return c;}return c;}
function QF(a,b,c){var d,e;if(b.R>a.N&&b.N<a.R){if(b.Q>a.I&&b.I<a.Q){if(c<=0.0)d=c;else if(b.S>a.O)d=c;else{d=a.O-b.S;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.O<a.S)e=d;else{e=a.S-b.O;if(e<=d)e=d;}return e;}return c;}return c;}
function Kg(a,b){return b.R>a.N&&b.N<a.R?(b.Q>a.I&&b.I<a.Q?(b.S>a.O&&b.O<a.S?1:0):0):0;}
function E_(a,b,c,d){a.N=a.N+b;a.I=a.I+c;a.O=a.O+d;a.R=a.R+b;a.Q=a.Q+c;a.S=a.S+d;return a;}
function AKr(a){return (a.R-a.N+a.Q-a.I+a.S-a.O)/3.0;}
function Nv(a){return Dy(a.N,a.I,a.O,a.R,a.Q,a.S);}
function NY(a,b,c){var d,e,f,g,h,i,j,k;d=I_(b,c,a.N);e=I_(b,c,a.R);f=Ik(b,c,a.I);g=Ik(b,c,a.Q);h=IY(b,c,a.O);i=IY(b,c,a.S);if(!OL(a,d))d=null;if(!OL(a,e))e=null;if(!QG(a,f))f=null;if(!QG(a,g))g=null;if(!Rd(a,h))h=null;if(!Rd(a,i))i=null;j=null;if(d!==null)j=d;if(e!==null&&!(j!==null&&D2(b,e)>=D2(b,j)))j=e;if(f!==null&&!(j!==null&&D2(b,f)>=D2(b,j)))j=f;if(g!==null&&!(j!==null&&D2(b,g)>=D2(b,j)))j=g;if(h!==null&&!(j!==null&&D2(b,h)>=D2(b,j)))j=h;if(i!==null&&!(j!==null&&D2(b,i)>=D2(b,j)))j=i;if(j===null)return null;k
=(-1);if(j===d)k=4;if(j===e)k=5;if(j===f)k=0;if(j===g)k=1;if(j===h)k=2;if(j===i)k=3;return ASm(0,0,0,k,j);}
function OL(a,b){return b===null?0:b.v>=a.I&&b.v<=a.Q&&b.s>=a.O&&b.s<=a.S?1:0;}
function QG(a,b){return b===null?0:b.t>=a.N&&b.t<=a.R&&b.s>=a.O&&b.s<=a.S?1:0;}
function Rd(a,b){return b===null?0:b.t>=a.N&&b.t<=a.R&&b.v>=a.I&&b.v<=a.Q?1:0;}
function Td(a,b){a.N=b.N;a.I=b.I;a.O=b.O;a.R=b.R;a.Q=b.Q;a.S=b.S;}
function ZU(){A8G=Ck();A36=0;}
function Nx(){}
function Bp(){Bo.call(this);}
var A8H=0;var A5D=null;var A8I=0;var A8J=0;var A8K=0;var A8L=0.0;var A8M=0;var A8N=null;var A8O=0;var A8P=0;var A8Q=0.0;var A8R=0.0;var A8S=0.0;var A8T=0.0;var A8U=0.0;var A8V=0.0;var A8W=0.0;var A8X=0.0;var A8Y=0.0;var A8Z=0;var A48=0.0;var A49=0.0;var A4$=0.0;var A4_=0.0;var A80=0;var A81=0;var A82=0;var A83=0.0;var A84=0.0;var A85=0.0;var A86=0;var A87=0;var A88=0;var A89=0;var A8$=null;var A8_=0;var A9a=null;var A9b=0;var A9c=null;var A9d=0;var A9e=null;var A9f=null;var A5C=null;var A9g=null;var A9h=null;var A9i
=null;var A9j=null;var A9k=null;var A9l=null;var A5B=0;var A9m=null;var A9n=null;var A9o=null;var A9p=null;var A9q=null;var A9r=null;var A9s=null;var A9t=null;var A9u=null;var A9v=null;var A9w=null;var A9x=null;var A9y=null;var A9z=null;var A9A=Long_ZERO;var A9B=0;function BO(){BO=Bt(Bp);AS1();}
function A9C(){var a=new Bp();AJB(a);return a;}
function AJB(a){BO();R1(a);}
function V(b){BO();a:{switch(b){case 2884:Jm(2884);break a;case 2896:A8J=1;break a;case 2903:A8Z=1;break a;case 2912:A81=1;break a;case 2929:Jm(2929);break a;case 3008:A8K=1;break a;case 3042:Jm(3042);break a;case 3553:A8I=1;break a;case 32823:Jm(32823);break a;case 32826:break;default:break a;}}}
function Gz(b){var c;BO();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Y();A23.depthFunc(c);}
function Pv(b,c){BO();A8L=c;}
function CU(b){BO();A89=b;}
function FS(){BO();switch(A89){case 5888:break;case 5889:return A9a.data[A9b];case 5890:return A9c.data[A9d];default:}return A8$.data[A8_];}
function CT(){BO();EF(FS());}
function Ge(b,c,d,e){BO();Y();A3o.data[0]=b;A3o.data[1]=c;A3o.data[2]=d;A3o.data[3]=e;A23.viewport(b,c,d,e);}
function DA(b){BO();Y();A23.clear(b);}
function G7(b,c,d,e,f,g){var h,i,j,k;BO();h=FS();i=c-b;h.dW=2.0/i;h.dU=0.0;h.dV=0.0;h.dT=0.0;h.dZ=0.0;j=e-d;h.d0=2.0/j;h.dX=0.0;h.dY=0.0;h.d4=0.0;h.d2=0.0;k=g-f;h.d3=2.0/k;h.d1=0.0;h.f_= -(c+b)/i;h.ga= -(e+d)/j;h.f9=(g+f)/k;h.f$=1.0;}
function Br(b,c,d){var e;BO();Kc(A9h,b,c,d);e=FS();Rk(e,A9h,e);if(!A8M)return;e=new Cq;Bl(e,B(302));M(e);}
function Gr(b,c,d,e){BO();Y();A23.clearColor(b,c,d,e);}
function X(b){BO();a:{switch(b){case 2884:It(2884);break a;case 2896:A8J=0;break a;case 2903:A8Z=0;break a;case 2912:A81=0;break a;case 2929:It(2929);break a;case 3008:A8K=0;break a;case 3042:It(3042);break a;case 3553:A8I=0;break a;case 32823:It(32823);break a;case 32826:break;default:break a;}}}
function BN(b,c,d,e){BO();A8Q=b;A8R=c;A8S=d;A8T=e;}
function Pw(b,c,d,e,f,g,h,i,j){var k,l,m,n;BO();Y();if(j===null){k=A23;l=null;k.texImage2D(3553,c,32856,e,f,g,6408,5121,l);}else{m=Ci(j);k=A3p;n=0;while(n<m){h=(AGA(j)&255)<<16>>16;k[n]=h;n=n+1|0;}j=new Uint8Array(A3p.buffer,0,m);A23.texImage2D(3553,c,32856,e,f,g,6408,5121,j);}}
function BW(){BO();a:{switch(A89){case 5888:break;case 5889:if(A9b>=(A9a.data.length-1|0)){B9(CK(),B(303));break a;}A9b=A9b+1|0;FT(A9a.data[A9b],A9a.data[A9b-1|0]);break a;case 5890:if(A9d>=(A9c.data.length-1|0)){B9(CK(),B(304));break a;}A9d=A9d+1|0;FT(A9c.data[A9d],A9c.data[A9d-1|0]);break a;default:}if(A8_>=(A8$.data.length-1|0))B9(CK(),B(305));else{A8_=A8_+1|0;FT(A8$.data[A8_],A8$.data[A8_-1|0]);}}}
function Bq(b,c,d,e){var f;BO();Kc(A9h,c,d,e);f=FS();SY(f,b*0.01745329238474369,A9h,f);if(!A8M)return;f=new Cq;Bl(f,B(302));M(f);}
function By(){BO();a:{switch(A89){case 5888:break;case 5889:if(A9b<=0){B9(CK(),B(306));break a;}A9b=A9b-1|0;break a;case 5890:if(A9d<=0){B9(CK(),B(307));break a;}A9d=A9d-1|0;break a;default:}if(A8_<=0)B9(CK(),B(308));else A8_=A8_-1|0;}}
function Qt(b,c){BO();a:{switch(b){case 2982:break;case 2983:Qv(A9a.data[A9b],c);break a;default:}Qv(A8$.data[A8_],c);}}
function Co(b,c,d){var e;BO();Kc(A9h,b,c,d);Vt(FS(),A9h);if(!A8M)return;e=new Cq;Bl(e,B(302));M(e);}
function C0(b,c){BO();A82=b==1&&c==771?1:0;Y();A23.blendFunc(b,c);}
function FB(b){BO();Y();A23.depthMask(!!b);}
function ER(b,c,d,e){BO();Y();A23.colorMask(!!b,!!c,!!d,!!e);}
function Ce(b,c){var d,e;BO();d=AIm(A5D,c);Y();e=A23;d=d!==null?d.yJ:null;e.bindTexture(3553,d);}
function DQ(b,c,d){BO();if(!(d!=33071&&d!=10496))d=33071;Y();A23.texParameteri(b,c,d);}
function B_(b,c,d){var e;BO();e=DL(b*b+c*c+d*d);A8U=b/e;A8V=c/e;A8W=d/e;}
function L1(b){BO();A9f=b;OW(b);}
function E4(b){var c;BO();if(!A8M){c=Cz(A9g,CG(b));if(c!==null&&c.iM>0){Ox(c.kB|0|(A8Z&&A8J?8:0)|(!A81?0:16)|(!A8K?0:32)|(!A8I?0:64));L1(c.pB);MZ(0,c.iM);A87=A87+((c.iM*6|0)/4|0)|0;A88=A88+(c.iM/2|0)|0;}}}
function ET(b,c){BO();if(!A8M){A8N=Cz(A5C,CG(b));if(A8N!==null){A8N.kB=(-1);A8N.iM=0;A8M=1;}}}
function DM(){var b,c,d,e;BO();if(A8M){A8M=0;Y();b=A3W.buffer;c=A3V;d=new Int32Array(b,0,c);A3V=0;e=QY(d);if(e>0){if(A8N.nx===null){BK(A9g,CG(A8N.yt),A8N);A8N.pB=MI();A8N.nx=Kh();b=MJ(A8N.kB);L1(A8N.pB);Gb(34962,A8N.nx);OG(b);}Gb(34962,A8N.nx);M1(34962,d,35044);A86=A86+e|0;}}}
function Fe(b,c,d){BO();A8Q=b;A8R=c;A8S=d;A8T=1.0;}
function Ml(b,c){BO();Y();A23.polygonOffset(b,c);}
function SV(b){BO();a:{switch(b){case 32886:break;case 32888:A8P=1;break a;default:break a;}A8O=1;}}
function P9(b){BO();a:{switch(b){case 32886:break;case 32888:A8P=0;break a;default:break a;}A8O=0;}}
function Nq(){BO();return 0|(!A8O?0:1)|(!A8P?0:4);}
function Ox(b){var c;BO();c=MJ(b);A9m=c;ALi(c);if(A8K)ADR(c,A8L);AGz(c,A8Q,A8R,A8S,A8T);if(A81){AGd(c,(!A82?0:2)+A80|0);AKF(c,A48,A49,A4$,A4_);AFD(c,A85);AKi(c,A83,A84);}AHa(c,A8$.data[A8_]);AHE(c,A9a.data[A9b]);VK(c,A9c.data[A9d]);if(A8Z&&A8J){XI(c,A8U,A8V,A8W);AHP(c,A9k,A9l);}AJg(c,A8X,A8Y);}
function AGg(b,c,d,e){var f;BO();if(A8M){if(b!=7)B9(CK(),B(309));else{if(A8N.kB==(-1))A8N.kB=Nq();else if(A8N.kB!=Nq())B9(CK(),B(310));f=A8N;f.iM=f.iM+d|0;Y();e=e;if((A3V+e.length|0)<A3W.length){f=A3W;b=A3V;f.set(e,b);A3V=A3V+e.length|0;}}}else{A86=A86+QY(e)|0;A87=A87+d|0;Ox(0|(!A8O?0:1)|(!A8P?0:4)|(A8Z&&A8J?8:0)|(!A81?0:16)|(!A8K?0:32)|(!A8I?0:64));L1(A9m.sf);Gb(34962,A9m.sK);if(!A9m.uV){A9m.uV=1;M1(34962,A9n,35048);}f=A23;e=e;f.bufferSubData(34962,0,e);if(b==7){MZ(c,d);A88=A88+(d/2|0)|0;}else{a:{b:{switch
(b){case 1:break;case 2:case 4:break b;case 3:b=3;A88=A88+(d-1|0)|0;break a;case 5:b=5;A88=A88+(d-2|0)|0;break a;case 6:b=6;A88=A88+(d-2|0)|0;break a;default:break b;}b=1;A88=A88+(d/2|0)|0;break a;}b=4;A88=A88+(d/3|0)|0;}A23.drawArrays(b,c,d);}}}
function MZ(b,c){var d,e,f,g,h,i,j;BO();if(A9e===null){if(A8H)d=AGE($rt_createIntArray(49200));else{e=AVR(0,196800,$rt_createByteArray(196800),0,196800,1,0);e.jI=A5E;d=ACV(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;h=h<<16;Lx(d,g|h);Lx(d,j|h);Lx(d,i|j<<16);f=f+1|0;}FC(d);A9e=Kh();Gb(34963,A9e);g=Ci(d);e=new Int32Array(A3p.buffer);h=0;while(h<g){i=ABt(d);e[h]=i;h=h+1|0;}d=A3p.buffer;g=g*4|0;e=new Uint8Array(d,0,g);A23.bufferData(34963,e,35044);}if(!A9f.tB){A9f.tB=1;Gb(34963,A9e);}g=(c*6|0)/4|0;b=
(b*6|0)/4|0;Y();A23.drawElements(4,g,5123,b);}
function Kl(b,c){BO();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}A80=2;break a;}A80=1;}}}
function FR(b,c){BO();a:{switch(b){case 2914:break;case 2915:A83=c;break a;case 2916:A84=c;break a;default:break a;}A85=c;}}
function AJ7(b,c,d,e){var f,g,h;BO();f=FS();g=b*0.01745329238474369*0.5;h=FI(g)/Fy(g);f.dW=h/c;f.dU=0.0;f.dV=0.0;f.dT=0.0;f.dZ=0.0;f.d0=h;f.dX=0.0;f.dY=0.0;f.d4=0.0;f.d2=0.0;b=e+d;c=e-d;f.d3=b/c;f.d1=(-1.0);f.f_=0.0;f.ga=0.0;f.f9=2.0*e*d/c;f.f$=0.0;}
function AS1(){var b,c,d;Y();A8H=1;A5D=AZZ(256);A8I=0;A8J=0;A8K=0;A8L=0.10000000149011612;A8M=0;A8N=null;A8O=0;A8P=0;A8Q=1.0;A8R=1.0;A8S=1.0;A8T=1.0;A8U=1.0;A8V=0.0;A8W=0.0;A8X=0.0;A8Y=0.0;A8Z=0;A48=1.0;A49=1.0;A4$=1.0;A4_=1.0;A80=1;A81=0;A82=0;A83=1.0;A84=1.0;A85=1.0;A86=0;A87=0;A88=0;A89=5888;A8$=N(DX,32);A8_=0;A9a=N(DX,6);A9b=0;A9c=N(DX,16);A9d=0;b=0;while(b<A8$.data.length){c=A8$.data;d=new DX;EF(d);c[b]=d;b=b+1|0;}b=0;while(b<A9a.data.length){c=A9a.data;d=new DX;EF(d);c[b]=d;b=b+1|0;}b=0;while(b<A9c.data.length)
{c=A9c.data;d=new DX;EF(d);c[b]=d;b=b+1|0;}A9e=null;A9f=null;A5C=CY();A9g=CY();A9h=new Rf;A9i=new F7;A9j=new F7;A9k=new F7;A9l=new F7;A5B=0;A9m=null;A9n=new Int32Array(525000);A9o=null;A9p=null;A9q=null;A9r=null;A9s=null;A9t=AZZ(256);d=new DX;EF(d);A9u=IW(d);A9v=$rt_createFloatArray(16);A9w=$rt_createFloatArray(16);d=new DX;EF(d);A9x=d;d=new DX;EF(d);A9y=d;A9z=new F7;A9A=Long_ZERO;A9B=0;}
function Yd(){E.call(this);}
function A9D(){var a=new Yd();AN2(a);return a;}
function AN2(a){return;}
function Dt(){var b,c;Y();if(!A3X)a:{A3x=null;if(!Nd(A3e)){b=P6(A3e,0);A3x=b;if(b!==null){c=1;break a;}}c=0;}else{Md(A3e);A3x=null;A3z.data[29]=0;A3z.data[157]=0;A3z.data[28]=0;A3z.data[219]=0;A3z.data[220]=0;A3X=0;c=0;}return c;}
function CD(){Y();return A3x===null?0:DU($rt_str(A3x.type),B(311))?0:1;}
function Be(){Y();return A3x===null?(-1):Qx(A3x.which);}
function AKq(b){Y();A3l=b;}
function BH(b){Y();if(A3X){A3z.data[28]=0;A3z.data[29]=0;A3z.data[157]=0;A3z.data[219]=0;A3z.data[220]=0;}return A3z.data[b];}
function Lq(){var a=this;E.call(a);a.pM=0;a.rz=0;a.lM=0;a.kh=0;a.ha=0;a.io=0;a.d5=0;a.la=0;a.lE=0;a.r9=null;a.r2=null;a.u0=null;a.sw=null;a.v7=null;a.eS=null;a.fF=null;a.yH=null;a.fv=null;a.y4=null;a.z1=null;a.lW=null;a.yR=null;a.w_=0;a.iX=0;a.cf=0;}
var A9E=null;var A9F=null;function A0l(a){var b=new Lq();AJM(b,a);return b;}
function AJM(a,b){var c,d;a.pM=1;a.rz=1;a.lM=0;a.kh=0;a.ha=0;a.io=1;a.d5=0;a.la=0;a.lE=1;a.r9=Ep(B(312),17);a.r2=Ep(B(313),30);a.u0=Ep(B(314),31);a.sw=Ep(B(315),32);a.v7=Ep(B(316),57);a.eS=Ep(B(317),23);a.fF=Ep(B(318),16);a.yH=Ep(B(319),20);a.fv=Ep(B(320),33);a.y4=Ep(B(321),28);a.z1=Ep(B(322),19);c=N(RA,11);d=c.data;d[0]=a.r9;d[1]=a.r2;d[2]=a.u0;d[3]=a.sw;d[4]=a.v7;d[5]=a.fF;d[6]=a.eS;d[7]=a.yH;d[8]=a.fv;d[9]=a.y4;d[10]=a.z1;a.lW=c;a.w_=10;a.iX=2;a.cf=0;a.yR=b;}
function Jo(a,b){var c;c=new Bc;Ba(c);c=H(H(c,a.lW.data[b].A2),B(11));b=a.lW.data[b].by;Y();return O(H(c,b>=0&&b<256?A3T.data[b]:B(10)));}
function TZ(a,b,c){a.lW.data[b].by=c;}
function DH(a,b,c){if(!b)a.pM=a.pM?0:1;if(b==1)a.rz=a.rz?0:1;if(b==2)a.lM=a.lM?0:1;if(b==3)a.kh=a.kh?0:1;if(b==4)a.ha=(a.ha+c|0)&3;if(b==5)a.io=a.io?0:1;if(b==6)a.d5=a.d5?0:1;if(b==7)a.la=a.la?0:1;if(b==8)a.iX=(a.iX+c|0)&3;if(b==9){a.lE=a.lE?0:1;JA(a.yR.dB);}}
function N4(a,b){var c;a:{if(!b){c=new Bc;Ba(c);c=O(H(H(c,B(323)),!a.pM?B(324):B(325)));break a;}if(b==1){c=new Bc;Ba(c);c=O(H(H(c,B(326)),!a.rz?B(324):B(325)));break a;}if(b==2){c=new Bc;Ba(c);c=O(H(H(c,B(327)),!a.lM?B(324):B(325)));break a;}if(b==3){c=new Bc;Ba(c);c=O(H(H(c,B(328)),!a.kh?B(324):B(325)));break a;}if(b==4){c=new Bc;Ba(c);c=O(H(H(c,B(329)),A9E.data[a.ha]));break a;}if(b==5){c=new Bc;Ba(c);c=O(H(H(c,B(330)),!a.io?B(324):B(325)));break a;}if(b==6){c=new Bc;Ba(c);c=O(H(H(c,B(331)),!a.d5?B(324):
B(325)));break a;}if(b==7){c=new Bc;Ba(c);c=O(H(H(c,B(332)),!a.la?B(324):B(325)));break a;}if(b==8){c=new Bc;Ba(c);c=O(H(H(c,B(333)),A9F.data[a.iX]));break a;}if(b!=9){c=B(3);break a;}c=new Bc;Ba(c);c=O(H(H(c,B(334)),!a.lE?B(335):B(336)));}return c;}
function ATJ(a){return;}
function ASG(a){return;}
function AC1(){var b,c;b=N(Cp,4);c=b.data;c[0]=B(337);c[1]=B(338);c[2]=B(339);c[3]=B(340);A9E=b;b=N(Cp,4);c=b.data;c[0]=B(341);c[1]=B(342);c[2]=B(343);c[3]=B(344);A9F=b;}
function G6(){var a=this;E.call(a);a.r$=null;a.on=0;a.lh=0;a.nk=0;a.nl=0;a.jT=0;a.jZ=0;a.ka=0;a.yw=0;a.AT=0;a.z8=0;a.mA=0;a.nA=0;a.ou=0;a.eU=0;a.gf=null;a.Bk=0;a.x6=0;a.Al=0;a.Dp=0.0;a.h4=0;a.Bs=null;a.Eb=0;a.vg=0;a.Fj=0;a.m1=0;a.jF=0;a.fG=null;a.ii=null;}
var A9G=null;var A38=0;function P$(){P$=Bt(G6);AZQ();}
function A1j(a,b,c,d,e,f,g){var h=new G6();AD6(h,a,b,c,d,e,f,g);return h;}
function AD6(a,b,c,d,e,f,g,h){P$();a.on=(-1);a.eU=0;a.gf=$rt_createBooleanArray(2);a.vg=1;a.jF=0;a.fG=Ck();a.r$=b;a.ii=c;a.ka=g;a.jZ=g;a.jT=g;a.Dp=DG((Bh(a.jT,a.jT)+Bh(a.jZ,a.jZ)|0)+Bh(a.ka,a.ka)|0)/2.0;a.on=h;a.lh=(-999);Po(a,d,e,f);a.h4=0;}
function Po(a,b,c,d){var e,f;if(!(b==a.lh&&c==a.nk&&d==a.nl)){Na(a);a.lh=b;a.nk=c;a.nl=d;a.Bk=b+(a.jT/2|0)|0;a.x6=c+(a.jZ/2|0)|0;a.Al=d+(a.ka/2|0)|0;a.mA=b&1023;a.nA=c;a.ou=d&1023;a.yw=b-a.mA|0;a.AT=c-a.nA|0;a.z8=d-a.ou|0;a.Bs=Li(b-2.0,c-2.0,d-2.0,(b+a.jT|0)+2.0,(c+a.jZ|0)+2.0,(d+a.ka|0)+2.0);ET(a.on+2|0,4864);e=Dy(a.mA-2.0,a.nA-2.0,a.ou-2.0,(a.mA+a.jT|0)+2.0,(a.nA+a.jZ|0)+2.0,(a.ou+a.ka|0)+2.0);Bv();f=A35;Bu(f);Bb(f,e.N,e.Q,e.O);Bb(f,e.R,e.Q,e.O);Bb(f,e.R,e.I,e.O);Bb(f,e.N,e.I,e.O);Bb(f,e.N,e.I,e.S);Bb(f,e.R,
e.I,e.S);Bb(f,e.R,e.Q,e.S);Bb(f,e.N,e.Q,e.S);Bb(f,e.N,e.I,e.O);Bb(f,e.R,e.I,e.O);Bb(f,e.R,e.I,e.S);Bb(f,e.N,e.I,e.S);Bb(f,e.N,e.Q,e.S);Bb(f,e.R,e.Q,e.S);Bb(f,e.R,e.Q,e.O);Bb(f,e.N,e.Q,e.O);Bb(f,e.N,e.I,e.S);Bb(f,e.N,e.Q,e.S);Bb(f,e.N,e.Q,e.O);Bb(f,e.N,e.I,e.O);Bb(f,e.R,e.I,e.O);Bb(f,e.R,e.Q,e.O);Bb(f,e.R,e.Q,e.S);Bb(f,e.R,e.I,e.S);Bn(f);DM();Jg(a);}}
function YQ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.h4)return;A38=A38+1|0;b=a.lh;c=a.nk;d=a.nl;e=a.lh+a.jT|0;f=a.nk+a.jZ|0;g=a.nl+a.ka|0;h=0;while(h<2){a.gf.data[h]=1;h=h+1|0;}A9H=0;i=Fh();Dq(i,a.fG);DB(a.fG);j=new Ha;k
=a.r$;l=b-1|0;m=c-1|0;n=d-1|0;o=e+1|0;h=f+1|0;p=g+1|0;$p=1;case 1:ZW(j,k,l,m,n,o,h,p);if(C()){break _;}k=AXN(j);l=0;a:{while(true){if(l>=2)break a;q=0;r=0;s=0;t=c;while(t<f){m=d;while(m<g){n=b;if(n<e){$p=2;continue _;}m=m+1|0;}t=t+1|0;}if(!s)r=0;else{Bn(A9G);DM();Et(A9G,0.0,0.0,0.0);}if(r)a.gf.data[l]=0;if(!q)break;l=l+1|0;}}u=Fh();Dq(u,a.fG);EI(u,i);Dq(a.ii,u);EI(i,a.fG);Fm(a.ii,i);a.m1=A9H;a.jF=1;return;case 2:$z=Gq(j,n,t,m);if(C()){break _;}p=$z;if(p>0){if(!s){s=1;ET(a.on+l|0,4864);Bu(A9G);Et(A9G,a.mA-a.lh
|0,a.nA-a.nk|0,a.ou-a.nl|0);}if(!l){J();if(A39.data[p] instanceof DN){$p=3;continue _;}}J();v=A39.data[p];o=S(v.oh(),l);if(o)q=1;else if(!o){$p=4;continue _;}}n=n+1|0;b:{c:while(true){if(n<e){continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Bn(A9G);DM();Et(A9G,0.0,0.0,0.0);}if(r)a.gf.data[l]=0;if(!q)break c;l=l+1|0;if(l>=2)break b;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Fh();Dq(u,a.fG);EI(u,i);Dq(a.ii,u);EI(i,a.fG);Fm(a.ii,i);a.m1=A9H;a.jF=1;return;case 3:$z=ABe(j,n,t,m);if(C()){break _;}w=$z;if(ADj(A9I,
w))U(a.fG,w);J();v=A39.data[p];o=S(v.oh(),l);if(o)q=1;else if(!o){$p=4;continue _;}n=n+1|0;d:{e:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Bn(A9G);DM();Et(A9G,0.0,0.0,0.0);}if(r)a.gf.data[l]=0;if(!q)break e;l=l+1|0;if(l>=2)break d;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Fh();Dq(u,a.fG);EI(u,i);Dq(a.ii,u);EI(i,a.fG);Fm(a.ii,i);a.m1=A9H;a.jF=1;return;case 4:$z=AIB(k,v,n,t,m);if(C()){break _;}o=$z;r=r|o;n=n+1|0;a:{f:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g)
{t=t+1|0;while(t>=f){if(!s)r=0;else{Bn(A9G);DM();Et(A9G,0.0,0.0,0.0);}if(r)a.gf.data[l]=0;if(!q)break f;l=l+1|0;if(l>=2)break a;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Fh();Dq(u,a.fG);EI(u,i);Dq(a.ii,u);EI(i,a.fG);Fm(a.ii,i);a.m1=A9H;a.jF=1;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function F5(a,b){var c,d,e;c=b.c-a.Bk;d=b.j-a.x6;e=b.d-a.Al;return c*c+d*d+e*e;}
function Na(a){var b;b=0;while(b<2){a.gf.data[b]=1;b=b+1|0;}a.eU=0;a.jF=0;}
function ALX(a){Na(a);a.r$=null;}
function M4(a,b){return !a.eU?(-1):a.gf.data[b]?(-1):a.on+b|0;}
function AMo(a,b){a.eU=KJ(b,a.Bs);}
function ACJ(a){return !a.jF?0:a.gf.data[0]&&a.gf.data[1]?1:0;}
function Jg(a){a.h4=1;}
function AZQ(){Bv();A9G=A35;A38=0;}
function AH8(){var a=this;E.call(a);a.S5=null;a.Jr=null;}
function AMp(){var a=this;Ek.call(a);a.iv=null;a.kz=0;}
function AXh(){var a=new AMp();AQh(a);return a;}
function AY5(a){var b=new AMp();UT(b,a);return b;}
function AQh(a){UT(a,32);}
function UT(a,b){a.iv=$rt_createByteArray(b);}
function AXr(a,b){var c,d;OB(a,a.kz+1|0);c=a.iv.data;d=a.kz;a.kz=d+1|0;c[d]=b<<24>>24;}
function Oz(a,b,c,d){var e,f,g,h,i;OB(a,a.kz+d|0);e=0;while(e<d){f=b.data;g=a.iv.data;h=a.kz;a.kz=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function OB(a,b){if(a.iv.data.length<b){b=DV(b,(a.iv.data.length*3|0)/2|0);a.iv=ALv(a.iv,b);}}
function GY(a){return ALv(a.iv,a.kz);}
function Ii(){B5.call(this);}
function A9J(){var a=new Ii();AVT(a);return a;}
function AVT(a){Q(a);}
function L0(){}
function FN(){var a=this;E.call(a);a.e3=null;a.dt=null;a.kQ=null;a.f1=null;a.jO=null;a.e1=null;a.dG=Long_ZERO;a.qD=Long_ZERO;a.q5=Long_ZERO;a.pK=Long_ZERO;a.fD=0;a.g7=0;a.qu=0;a.qC=0;a.bc=null;a.h3=0;a.zS=null;a.n=null;a.eJ=0;a.oo=0;a.eI=0;a.rR=0;a.b$=null;a.hQ=null;a.kn=Long_ZERO;a.rx=null;a.ut=Long_ZERO;a.EI=null;a.lU=null;a.oI=null;}
var A9K=null;var A9L=null;function A9M(a,b){var c=new FN();N5(c,a,b);return c;}
function AMr(b){var c,d,e,f,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=new Bc;Ba(c);c=O(H(H(c,b),B(345)));$p=1;case 1:$z=AGu(c);if(C()){break _;}d=$z;c=Ds();e=new Bc;Ba(e);B9(c,O(H(H(e,b),B(345))));if(d===null)return null;a:{try{e=KC(KS(Mx(QK(d))),B(346));}catch($$e){$$je=Bf($$e);if($$je instanceof BU){f=$$je;break a;}else{throw $$e;}}return e;}BY(f);return null;default:Es();}}CM().s(b,c,d,e,f,$p);}
function N5(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e3=Ck();a.dt=Ck();a.kQ=Ck();a.f1=A1F();a.jO=Fh();a.e1=Ck();a.dG=Long_ZERO;a.qD=Long_fromInt(8961023);a.q5=Long_fromInt(12638463);a.pK=Long_fromInt(16777215);a.fD=0;a.g7=JF(new Df);a.qu=1013904223;a.qC=0;a.n=new Df;a.rR=0;a.b$=Ck();a.kn=Long_ZERO;a.ut=Long_ZERO;a.lU=Ck();a.oI=Ck();a.EI=b;A9L=b;b=new Bc;Ba(b);b=O(H(H(b,
A9L),B(345)));$p=1;case 1:$z=AGu(b);if(C()){break _;}d=$z;b=Ds();e=new Bc;Ba(e);B9(b,O(H(H(e,A9L),B(345))));f=d!==null?1:0;a:{a.rR=f;if(d!==null){try{g=KC(KS(Mx(QK(d))),B(346));a.kn=Km(g,B(347));a.eJ=E6(g,B(348));a.oo=E6(g,B(349));a.eI=E6(g,B(350));a.dG=Km(g,B(351));a.ut=Km(g,B(352));a.rx=KC(g,B(5));break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){h=$$je;}else{throw $$e;}}BY(h);}}f=0;if(Long_eq(a.kn,Long_ZERO)){a.kn=c;f=1;}a.hQ=W2(a,A9L);if(!f){Oe(a);return;}a.eJ=0;a.oo=64;a.eI=0;f=a.eJ;i=a.eI;$p=2;case 2:$z
=AEM(a,f,i);if(C()){break _;}f=$z;J();if(f!=A4u.b?0:1){Oe(a);return;}a.eJ=a.eJ+(D(a.n,64)-D(a.n,64)|0)|0;a.eI=a.eI+(D(a.n,64)-D(a.n,64)|0)|0;f=a.eJ;i=a.eI;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function W2(a,b){var c,d,e;c=new R9;d=new Tk;d.qk=b;e=new Pu;e.Co=$rt_createIntMultiArray([32,32]);e.o=a;e.a=new Df;e.wm=F9(e.a,16);e.wn=F9(e.a,16);e.wl=F9(e.a,8);e.rZ=F9(e.a,4);e.wp=F9(e.a,4);e.wq=F9(e.a,10);e.wo=F9(e.a,16);e.hW=F9(e.a,8);c.T=N(HB,1024);c.eR=(-999999999);c.fe=(-999999999);c.kg=AYx(a,$rt_createByteArray(32768),0,0);c.kg.AR=1;c.kg.oA=1;c.kr=a;c.gk=d;c.hV=e;return c;}
function AKz(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.eJ;c=a.eI;$p=1;case 1:$z=AEM(a,b,c);if(C()){break _;}b=$z;if(b)return;a.eJ=a.eJ+(D(a.n,8)-D(a.n,8)|0)|0;a.eI=a.eI+(D(a.n,8)-D(a.n,8)|0)|0;b=a.eJ;c=a.eI;continue _;default:Es();}}CM().s(a,b,c,$p);}
function AEM(a,b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=63;e=d+1|0;$p=1;case 1:$z=X9(a,b,e,c);if(C()){break _;}f=$z;if(!f){$p=2;continue _;}d=e;e=d+1|0;continue _;case 2:$z=X9(a,b,d,c);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ABH(a){var b,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{if(a.rx!==null){UL(a.bc,a.rx);a.rx=null;}b=a.bc;$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){b=$$je;}else{throw $$e;}}BY(b);return;case 1:a:{try{AIS(a,b);if(C()){break _;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){b=$$je;}else{throw $$e;}}BY(b);}return;default:Es();}}CM().s(a,b,$p);}
function Xh(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null)UB(c,B(353));$p=1;case 1:AHr(a);if(C()){break _;}if(c===null){d=a.hQ;$p=2;continue _;}d=B(354);$p=3;continue _;case 2:AIz(d,b,c);if(C()){break _;}return;case 3:AMj(c,d);if(C()){break _;}d=a.hQ;$p=2;continue _;default:Es();}}CM().s(a,b,c,d,$p);}
function AHr(a){var b,c,d,e,f,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=F8();GV(b,B(347),a.kn);FF(b,B(348),a.eJ);FF(b,B(349),a.oo);FF(b,B(350),a.eI);GV(b,B(351),a.dG);GV(b,B(352),a.ut);GV(b,B(355),B2());if(a.bc!==null){c=F8();AGj(a.bc,c);AIu(b,B(5),c);}c=F8();Gw(c,B(346),b);try{b=O(H(H(BQ(),A9L),B(356)));$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BY(d);return;case 1:try
{AGu(b);if(C()){break _;}b=O(H(H(BQ(),A9L),B(357)));$p=2;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BY(d);return;case 2:try{AGu(b);if(C()){break _;}b=O(H(H(BQ(),A9L),B(345)));$p=3;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BY(d);return;case 3:try{AGu(b);if(C()){break _;}e=AY5(131072);O3(c,APk(e));b=O(H(H(BQ(),A9L),B(356)));f=GY(e);$p=4;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BY(d);return;case 4:try
{Yb(b,f);if(C()){break _;}b=O(H(H(BQ(),A9L),B(357)));$p=5;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BY(d);return;case 5:try{$z=AGu(b);if(C()){break _;}f=$z;if(f!==null){b=O(H(H(BQ(),A9L),B(357)));$p=8;continue _;}b=O(H(H(BQ(),A9L),B(345)));c=O(H(H(BQ(),A9L),B(357)));$p=6;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BY(d);return;case 6:try{AHZ(b,c);if(C()){break _;}b=O(H(H(BQ(),A9L),B(345)));$p=7;continue _;}catch($$e){$$je=Bf($$e);if
($$je instanceof Bz){d=$$je;}else{throw $$e;}}BY(d);return;case 7:try{$z=AGu(b);if(C()){break _;}f=$z;if(f!==null){b=O(H(H(BQ(),A9L),B(345)));$p=11;continue _;}b=O(H(H(BQ(),A9L),B(356)));c=O(H(H(BQ(),A9L),B(345)));$p=9;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BY(d);return;case 8:try{AGQ(b);if(C()){break _;}b=O(H(H(BQ(),A9L),B(345)));c=O(H(H(BQ(),A9L),B(357)));$p=6;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BY(d);return;case 9:try
{AHZ(b,c);if(C()){break _;}b=O(H(H(BQ(),A9L),B(356)));$p=10;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BY(d);return;case 10:a:{try{$z=AGu(b);if(C()){break _;}f=$z;if(f===null)break a;b=O(H(H(BQ(),A9L),B(356)));$p=12;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BY(d);}return;case 11:try{AGQ(b);if(C()){break _;}b=O(H(H(BQ(),A9L),B(356)));c=O(H(H(BQ(),A9L),B(345)));$p=9;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){d=$$je;}
else{throw $$e;}}BY(d);return;case 12:a:{try{AGQ(b);if(C()){break _;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}BY(d);}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Ws(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b){$p=2;continue _;}c=a.hQ;b=0;d=null;$p=1;case 1:$z=AIz(c,b,d);if(C()){break _;}b=$z;return b;case 2:AHr(a);if(C()){break _;}c=a.hQ;b=0;d=null;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,$p);}
function X9(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)b=0;else{if(c<128){e=b>>4;f=d>>4;$p=1;continue _;}b=0;}}else b=0;return b;case 1:$z=VI(a,e,f);if(C()){break _;}g=$z;return Ed(g,b&15,c,d&15);default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function D9(a,b,c,d){return c>=0&&c<128?CN(a,b>>4,d>>4):0;}
function G0(a,b,c,d,e,f,g){var h,i;if(f>=0&&c<128){h=b>>4;b=d>>4;c=e>>4;d=g>>4;while(h<=c){i=b;while(i<=d){if(!CN(a,h,i))return 0;i=i+1|0;}h=h+1|0;}return 1;}return 0;}
function CN(a,b,c){return BJ(a.hQ,b,c);}
function TR(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b>>4;b=c>>4;$p=1;case 1:$z=VI(a,d,b);if(C()){break _;}e=$z;return e;default:Es();}}CM().s(a,b,c,d,e,$p);}
function VI(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.hQ;$p=1;case 1:$z=AIQ(d,b,c);if(C()){break _;}d=$z;return d;default:Es();}}CM().s(a,b,c,d,$p);}
function AEk(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;g=b>>4;h=d>>4;$p=1;continue _;}return 0;case 1:$z=VI(a,g,h);if(C()){break _;}i=$z;b=b&15;d=d&15;$p=2;case 2:$z=Zb(i,b,c,d,e,f);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AGh(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=VI(a,f,g);if(C()){break _;}h=$z;g=b&15;b=d&15;$p=2;case 2:$z=Y$(h,g,c,b,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function XB(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X9(a,b,c,d);if(C()){break _;}e=$z;if(!e)f=A5q;else{J();f=A39.data[e].bR;}return f;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Z$(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;e=b>>4;f=d>>4;$p=1;continue _;}return 0;case 1:$z=VI(a,e,f);if(C()){break _;}g=$z;return OY(g,b&15,c,d&15);default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function XT(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFp(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AFp(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=VI(a,f,g);if(C()){break _;}h=$z;Wd(h,b&15,c,d&15,e);return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AJ6(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGh(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AAb(a,b,c,d,e);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ADW(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEk(a,b,c,d,e,f);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AAb(a,b,c,d,e);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AAb(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;while(f<a.b$.p){Ow(Z(a.b$,f),b,c,d);f=f+1|0;}$p=1;case 1:ACX(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AKg(a,b,c,d,e){var f;if(d<=e){f=d;d=e;e=f;}HP(a,b,e,c,b,d,c);}
function HP(a,b,c,d,e,f,g){var h;h=0;while(h<a.b$.p){AJd(Z(a.b$,h),b,c,d,e,f,g);h=h+1|0;}}
function ACX(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b-1|0;$p=1;case 1:AJC(a,f,c,d,e);if(C()){break _;}f=b+1|0;$p=2;case 2:AJC(a,f,c,d,e);if(C()){break _;}f=c-1|0;$p=3;case 3:AJC(a,b,f,d,e);if(C()){break _;}f=c+1|0;$p=4;case 4:AJC(a,b,f,d,e);if(C()){break _;}f=d-1|0;$p=5;case 5:AJC(a,b,c,f,e);if(C()){break _;}d=d+1|0;$p=6;case 6:AJC(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,
$p);}
function AJC(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qC)return;J();f=A39.data;$p=1;case 1:$z=X9(a,b,c,d);if(C()){break _;}g=$z;h=f[g];if(h===null)return;$p=2;case 2:h.ep(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function ABx(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=VI(a,e,f);if(C()){break _;}g=$z;return MU(g,b&15,c,d&15);default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Tw(a,b,c,d){var e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=1;$p=1;case 1:$z=AK_(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AK_(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(e){$p=1;continue _;}if(c<0)return 0;if(c>=128){f=15-a.fD|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}return 15;case 1:$z=X9(a,b,c,d);if(C()){break _;}f=$z;J();if(f!=A4c.b&&f!=A6i.b){if(c<0)return 0;if(c>=128){f=15-
a.fD|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}e=c+1|0;g=0;$p=2;case 2:$z=AK_(a,b,e,d,g);if(C()){break _;}h=$z;e=b+1|0;g=0;$p=3;case 3:$z=AK_(a,e,c,d,g);if(C()){break _;}g=$z;e=b-1|0;i=0;$p=4;case 4:$z=AK_(a,e,c,d,i);if(C()){break _;}i=$z;e=d+1|0;j=0;$p=5;case 5:$z=AK_(a,b,c,e,j);if(C()){break _;}j=$z;d=d-1|0;e=0;$p=6;case 6:$z=AK_(a,b,c,d,e);if(C()){break _;}k=$z;if(g<=h)g=h;if(i<=g)i=g;if(j<=i)j=i;if(k<=j)k=j;return k;case 7:$z=VI(a,g,e);if(C()){break _;}l=$z;return R0(l,b&15,c,d&15,a.fD);default:
Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Vn(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 1;e=b>>4;f=d>>4;if(!CN(a,e,f))return 0;$p=1;continue _;}return 0;case 1:$z=VI(a,e,f);if(C()){break _;}g=$z;return MU(g,b&15,c,d&15);default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AGv(a,b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&c>=(-32000000)&&b<32000000&&c<=32000000){d=b>>4;e=c>>4;if(!CN(a,d,e))return 0;$p=1;continue _;}return 0;case 1:$z=VI(a,d,e);if(C()){break _;}f=$z;return Q2(f,b&15,c&15);default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AKD(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!D9(a,c,d,e))return;if(b===A9N){$p=1;continue _;}if(b===A9O){$p=2;continue _;}$p=3;continue _;case 1:$z=Vn(a,c,d,e);if(C()){break _;}g=$z;if(g)f=15;$p=3;continue _;case 2:$z=X9(a,c,d,e);if(C()){break _;}g=$z;J();if(A5U.data[g]>f)f=A5U.data[g];$p=3;case 3:$z=AF$(a,b,c,d,e);if(C()){break _;}g=$z;if(g==f)return;$p=4;case 4:U0(a,b,c,d,e,c,d,
e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AF$(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=0&&d<128&&c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000){f=c>>4;g=e>>4;if(!CN(a,f,g))return 0;$p=1;continue _;}return b.xs;case 1:$z=VI(a,f,g);if(C()){break _;}h=$z;return XY(h,b,c&15,d,e&15);default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AHc(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000&&d>=0&&d<128){g=c>>4;h=e>>4;if(CN(a,g,h)){$p=1;continue _;}}return;case 1:$z=VI(a,g,h);if(C()){break _;}i=$z;ALa(i,b,c&15,d,e&15,f);g=0;while(g<a.b$.p){Ow(Z(a.b$,g),c,d,e);g=g+1|0;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AHV(a,b,c,d){var e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=A9K.data;$p=1;case 1:$z=Tw(a,b,c,d);if(C()){break _;}b=$z;return e[b];default:Es();}}CM().s(a,b,c,d,e,$p);}
function OF(a){return a.fD>=4?0:1;}
function AEj(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;$p=1;case 1:$z=AAq(a,b,c,d);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,$p);}
function AAq(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(isNaN(b.t)?1:0)&&!(isNaN(b.v)?1:0)&&!(isNaN(b.s)?1:0)){if(!(isNaN(c.t)?1:0)&&!(isNaN(c.v)?1:0)&&!(isNaN(c.s)?1:0)){e
=I(c.t);f=I(c.v);g=I(c.s);h=I(b.t);i=I(b.v);j=I(b.s);k=20+(-1)|0;if(20<0)return null;if(!(isNaN(b.t)?1:0)&&!(isNaN(b.v)?1:0)&&!(isNaN(b.s)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=S(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=S(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=S(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.t-b.t;u=c.v-b.v;v=c.s-b.s;if(l!==999.0)q=(l-b.t)/t;if(m!==999.0)r=(m-b.v)/u;if(n!==999.0)s=(n-b.s)/v;if(q<r&&q<s){o=o<=0?5:4;b.t=l;b.v=b.v+u*q;b.s=b.s+v*q;}else if(r>=
s){o=i<=0?3:2;b.t=b.t+t*s;b.v=b.v+u*s;b.s=n;}else{o=p<=0?1:0;b.t=b.t+t*r;b.v=m;b.s=b.s+v*r;}w=BR(b.t,b.v,b.s);v=I(b.t);w.t=v;h=v|0;if(o==5){h=h+(-1)|0;w.t=w.t+1.0;}v=I(b.v);w.v=v;i=v|0;if(o==1){i=i+(-1)|0;w.v=w.v+1.0;}v=I(b.s);w.s=v;j=v|0;if(o==3){j=j+(-1)|0;w.s=w.s+1.0;}$p=1;continue _;}return null;}return null;}return null;case 1:$z=X9(a,h,i,j);if(C()){break _;}x=$z;$p=2;case 2:$z=Z$(a,h,i,j);if(C()){break _;}y=$z;J();z=A39.data[x];if(x>0&&z.nD(y,d)){$p=5;continue _;}o=i-1|0;$p=3;case 3:$z=X9(a,h,o,j);if(C())
{break _;}p=$z;$p=4;case 4:$z=Z$(a,h,o,j);if(C()){break _;}x=$z;w=A39.data[p];if(p>0&&w.nD(x,d)){$p=6;continue _;}p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.t)?1:0)&&!(isNaN(b.v)?1:0)&&!(isNaN(b.s)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=S(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=S(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=S(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.t-b.t;u=c.v-b.v;v=c.s-b.s;if(l!==999.0)q=(l-b.t)/t;if(m!==999.0)r=(m-b.v)/u;if(n!==999.0)s=(n-b.s)/v;if
(q<r&&q<s){o=o<=0?5:4;b.t=l;b.v=b.v+u*q;b.s=b.s+v*q;}else if(r>=s){o=i<=0?3:2;b.t=b.t+t*s;b.v=b.v+u*s;b.s=n;}else{o=p<=0?1:0;b.t=b.t+t*r;b.v=m;b.s=b.s+v*r;}w=BR(b.t,b.v,b.s);v=I(b.t);w.t=v;h=v|0;if(o==5){h=h+(-1)|0;w.t=w.t+1.0;}v=I(b.v);w.v=v;i=v|0;if(o==1){i=i+(-1)|0;w.v=w.v+1.0;}v=I(b.s);w.s=v;j=v|0;if(o==3){j=j+(-1)|0;w.s=w.s+1.0;}$p=1;continue _;}return null;case 5:$z=z.mm(a,h,i,j,b,c);if(C()){break _;}ba=$z;if(ba!==null)return ba;o=i-1|0;$p=3;continue _;case 6:$z=w.mm(a,h,o,j,b,c);if(C()){break _;}ba=$z;if
(ba!==null)return ba;p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.t)?1:0)&&!(isNaN(b.v)?1:0)&&!(isNaN(b.s)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=S(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=S(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=S(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.t-b.t;u=c.v-b.v;v=c.s-b.s;if(l!==999.0)q=(l-b.t)/t;if(m!==999.0)r=(m-b.v)/u;if(n!==999.0)s=(n-b.s)/v;if(q<r&&q<s){o=o<=0?5:4;b.t=l;b.v=b.v+u*q;b.s=b.s+v*q;}else if(r>=s){o=i<=0?3:2;b.t=b.t+t*s;b.v
=b.v+u*s;b.s=n;}else{o=p<=0?1:0;b.t=b.t+t*r;b.v=m;b.s=b.s+v*r;}w=BR(b.t,b.v,b.s);v=I(b.t);w.t=v;h=v|0;if(o==5){h=h+(-1)|0;w.t=w.t+1.0;}v=I(b.v);w.v=v;i=v|0;if(o==1){i=i+(-1)|0;w.v=w.v+1.0;}v=I(b.s);w.s=v;j=v|0;if(o==3){j=j+(-1)|0;w.s=w.s+1.0;}$p=1;continue _;}return null;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function C2(a,b,c,d,e){var f,g,h;f=0;g=S(d,1.0);e=16.0*d;while(f<a.b$.p){h=16.0;if(g>0)h=e;if(JR(a.bc,b)<h*h)Z(a.b$,f);f=f+1|0;}}
function D1(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$$je;a:{b:{try{h=0;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){i=$$je;break b;}else{throw $$e;}}j=S(f,1.0);k=16.0*f;while(true){try{if(h>=CZ(a.b$))break;l=16.0;if(j>0)l=k;m=b-a.bc.c;n=c-a.bc.j;o=d-a.bc.d;if(m*m+n*n+o*o<l*l)YA(Z(a.b$,h),e,b,c,d,f,g);h=h+1|0;continue;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){i=$$je;break b;}else{throw $$e;}}}break a;}BY(i);}}
function ANf(a,b,c,d,e,f){return;}
function BP(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.b$.p){AC_(Z(a.b$,i),b,c,d,e,f,g,h);i=i+1|0;}}
function AIS(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(b.c/16.0);d=I(b.d/16.0);if(!CN(a,c,d)){e=Ds();f=new Bc;Ba(f);B9(e,O(EY(H(f,B(358)),b)));return;}$p=1;case 1:$z=VI(a,c,d);if(C()){break _;}e=$z;R3(e,b);U(a.dt,b);g=0;while(g<a.b$.p){Z(a.b$,g);g=g+1|0;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AOv(a,b){B4(b);}
function AIf(a,b){U(a.b$,b);}
function AFL(a,b){GU(a.b$,b);}
function TP(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DB(a.lU);d=I(c.N);e=I(c.R+1.0);f=I(c.I);g=I(c.Q+1.0);h=I(c.O);i=I(c.S+1.0);f=f-1|0;while(d<e){j=f;while(j<g){k=h;if(k<i){J();l=A39.data;$p=2;continue _;}j=j+1|0;}d=d+1|0;}c=Da(c,0.25,0.25,0.25);$p=1;case 1:$z=Zh(a,b,c);if(C()){break _;}m=$z;n=0;while
(n<m.p){o=Z(m,n).yr();if(o!==null)U(a.lU,o);c=b.x3(Z(m,n));if(c!==null)U(a.lU,c);n=n+1|0;}return a.lU;case 2:$z=X9(a,d,j,k);if(C()){break _;}n=$z;p=l[n];if(p!==null){m=a.lU;$p=3;continue _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Da(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}J();l=A39.data;continue _;case 3:p.BW(a,d,j,k,c,m);if(C()){break _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Da(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}J();l=A39.data;$p=2;continue _;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function L9(a,b){var c;c=1.0-(Bx(Gp(a,b)*3.1415927410125732*2.0)*2.0+0.5);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*11.0|0;}
function Ms(a,b){var c,d,e,f;c=Bx(Gp(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.qD,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.qD,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.qD,Long_fromInt(255)))/255.0;return BR(d*c,e*c,f*c);}
function Gp(a,b){var c;c=(Long_rem(a.dG,Long_fromInt(24000)).lo+b)/24000.0-0.25;if(c<0.0)c=c+1.0;if(c>1.0)c=c-1.0;return c+(1.0-(FI(c*3.141592653589793)+1.0)/2.0-c)/3.0;}
function PU(a,b){var c,d,e,f;c=Bx(Gp(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.pK,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.pK,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.pK,Long_fromInt(255)))/255.0;b=c*0.8999999761581421+0.10000000149011612;return BR(d*b,e*b,f*(c*0.8500000238418579+0.15000000596046448));}
function Y0(a,b){var c,d,e,f;c=Bx(Gp(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.q5,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.q5,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.q5,Long_fromInt(255)))/255.0;b=c*0.9399999976158142+0.05999999865889549;return BR(d*b,e*b,f*(c*0.9100000262260437+0.09000000357627869));}
function AXR(a,b,c){return 64;}
function AEo(a,b){var c;c=1.0-(Bx(Gp(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*c*0.5;}
function EE(a,b,c,d,e){var f,g;f=new Im;g=A9P;A9P=Long_add(g,Long_fromInt(1));f.ns=g;f.e5=b;f.eO=c;f.e9=d;f.oz=e;if(G0(a,b-8|0,c-8|0,d-8|0,b+8|0,c+8|0,d+8|0)){if(e>0){J();f.ik=Long_add(Long_fromInt(A39.data[e].lc()),a.dG);}if(!SA(a.jO,f)){Tg(a.jO,f);Va(a.f1,f);}}}
function AJP(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Fm(a.dt,a.kQ);b=0;while(b<a.b$.p){Z(a.b$,b);c=0;while(c<a.kQ.p){Z(a.kQ,c);c=c+1|0;}b=b+1|0;}DB(a.kQ);b=0;a:while(true){if(b>=a.dt.p){b=0;if(b>=a.e1.p)return;d=Z(a.e1,b);$p=1;continue _;}b:{e=Z(a.dt,b);if(e.bt!==null){if(!e.bt.cs&&e.bt.bx===e)break b;e.bt.bx=null;e.bt=null;}if(!e.cs){$p=2;continue _;}if(e.cs){c=I(e.c/16.0);f=I(e.d/16.0);if(CN(a,
c,f))break a;d=a.dt;c=b+(-1)|0;Eo(d,b);g=0;while(g<a.b$.p){Z(a.b$,g);g=g+1|0;}b=c;}}b=b+1|0;}$p=3;continue _;case 1:d.rY();if(C()){break _;}b=b+1|0;if(b>=a.e1.p)return;d=Z(a.e1,b);continue _;case 2:Tt(a,e);if(C()){break _;}while(true){if(e.cs){c=I(e.c/16.0);f=I(e.d/16.0);if(CN(a,c,f)){$p=3;continue _;}d=a.dt;c=b+(-1)|0;Eo(d,b);g=0;while(g<a.b$.p){Z(a.b$,g);g=g+1|0;}b=c;}b:{while(true){b=b+1|0;if(b>=a.dt.p){b=0;if(b>=a.e1.p)return;d=Z(a.e1,b);$p=1;continue _;}e=Z(a.dt,b);if(e.bt===null)break b;if(e.bt.cs)break;if
(e.bt.bx!==e)break;}e.bt.bx=null;e.bt=null;}if(e.cs)continue;else break;}continue _;case 3:$z=VI(a,c,f);if(C()){break _;}d=$z;AHD(d,e);while(true){d=a.dt;c=b+(-1)|0;Eo(d,b);g=0;while(g<a.b$.p){Z(a.b$,g);g=g+1|0;}b=c;while(true){b=b+1|0;if(b>=a.dt.p){b=0;if(b>=a.e1.p)return;d=Z(a.e1,b);$p=1;continue _;}e=Z(a.dt,b);if(e.bt!==null){if(!e.bt.cs&&e.bt.bx===e)continue;e.bt.bx=null;e.bt=null;}if(!e.cs){$p=2;continue _;}if(e.cs)break;}c=I(e.c/16.0);f=I(e.d/16.0);if(!CN(a,c,f))continue;else break;}continue _;default:
Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Tt(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(b.c);I(b.j);d=I(b.d);if(!G0(a,c-16|0,0,d-16|0,c+16|0,128,d+16|0))return;b.b6=b.c;b.bP=b.j;b.b7=b.d;b.K=b.q;b.P=b.E;e=I(b.c/16.0);f=I(b.j/16.0);g=I(b.d/16.0);if(b.bt===null){$p=1;continue _;}$p=2;continue _;case 1:b.dR();if(C()){break _;}h=I(b.c/16.0);i=I(b.j/16.0);j=I(b.d/16.0);if(e==h&&f==i&&g
==j){if(b.bx!==null){if(!b.bx.cs&&b.bx.bt===b){k=b.bx;$p=6;continue _;}b.bx.bt=null;b.bx=null;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;}if(CN(a,e,g)){$p=3;continue _;}if(!CN(a,h,j)){$p=4;continue _;}$p=5;continue _;case 2:b.yF();if(C()){break _;}h=I(b.c/16.0);i=I(b.j
/16.0);j=I(b.d/16.0);if(e==h&&f==i&&g==j){if(b.bx!==null){if(!b.bx.cs&&b.bx.bt===b){k=b.bx;$p=6;continue _;}b.bx.bt=null;b.bx=null;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;}if(CN(a,e,g)){$p=3;continue _;}if(!CN(a,h,j)){$p=4;continue _;}$p=5;continue _;case 3:$z=VI(a,
e,g);if(C()){break _;}k=$z;O6(k,b,f);if(!CN(a,h,j)){$p=4;continue _;}$p=5;continue _;case 4:b.zQ();if(C()){break _;}if(b.bx!==null){if(!b.bx.cs&&b.bx.bt===b){k=b.bx;$p=6;continue _;}b.bx.bt=null;b.bx=null;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;case 5:$z=VI(a,h,j);if
(C()){break _;}k=$z;R3(k,b);if(b.bx!==null){if(!b.bx.cs&&b.bx.bt===b){k=b.bx;$p=6;continue _;}b.bx.bt=null;b.bx=null;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;case 6:Tt(a,k);if(C()){break _;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.j)?1:0)
&&!(!isFinite(b.j)?1:0)))b.j=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AHI(a,b){var c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:$z=Zh(a,c,b);if(C()){break _;}c=$z;d=0;while(d<c.p){e=Z(c,d);if(!e.cs&&e.lj)return 0;d=d+1|0;}return 1;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AEh(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(b.N);d=I(b.R+1.0);e=I(b.I);f=I(b.Q+1.0);g=I(b.O);h=I(b.S+1.0);if(b.N<0.0)c=c+(-1)|0;if(b.I<0.0)e=e+(-1)|0;if(b.O<0.0)g=g+(-1)|0;while(c<d){i=e;while(i<f){j=g;if(j<h){J();k=A39.data;$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=X9(a,c,i,j);if(C()){break _;}l=$z;m=k[l];if
(m!==null&&m.bR.mh())return 1;j=j+1|0;a:while(true){if(j<h){J();k=A39.data;continue _;}i=i+1|0;while(i>=f){c=c+1|0;if(c>=d)break a;i=e;}j=g;}return 0;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ALt(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(b.N);d=I(b.R+1.0);e=I(b.I);f=I(b.Q+1.0);g=I(b.O);h=I(b.S+1.0);while(c<d){i=e;while(i<f){j=g;if(j<h){$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=X9(a,c,i,j);if(C()){break _;}k=$z;J();if(k!=A5G.b&&k!=A5d.b&&k!=A5W.b){j=j+1|0;a:while(true){if(j<h){continue _;}i=i+1|0;while(i>=f){c=c+1|0;if
(c>=d)break a;i=e;}j=g;}return 0;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Wb(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=I(b.N);f=I(b.R+1.0);g=I(b.I);h=I(b.Q+1.0);i=I(b.O);j=I(b.S+1.0);k=0;l=BR(0.0,0.0,0.0);m=h;while(e<f){n=g;while(n<h){o=i;if(o<j){J();p=A39.data;$p=1;continue _;}n=n+1|0;}e=e+1|0;}if(GF(l)>0.0){b=Cs(l);d.f=d.f+b.t
*0.004;d.h=d.h+b.v*0.004;d.g=d.g+b.s*0.004;}return k;case 1:$z=X9(a,e,n,o);if(C()){break _;}q=$z;r=p[q];if(r!==null&&r.bR===c){s=n+1|0;$p=2;continue _;}o=o+1|0;a:while(true){if(o<j){J();p=A39.data;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break a;n=g;}o=i;}if(GF(l)>0.0){b=Cs(l);d.f=d.f+b.t*0.004;d.h=d.h+b.v*0.004;d.g=d.g+b.s*0.004;}return k;case 2:$z=Z$(a,e,n,o);if(C()){break _;}q=$z;if(m>=s-HX(q)){k=1;$p=3;continue _;}o=o+1|0;b:while(true){if(o<j){J();p=A39.data;$p=1;continue _;}n=n+1|0;while(n>=h){e
=e+1|0;if(e>=f)break b;n=g;}o=i;}if(GF(l)>0.0){b=Cs(l);d.f=d.f+b.t*0.004;d.h=d.h+b.v*0.004;d.g=d.g+b.s*0.004;}return k;case 3:r.o2(a,e,n,o,d,l);if(C()){break _;}o=o+1|0;c:while(true){if(o<j){J();p=A39.data;$p=1;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break c;n=g;}o=i;}if(GF(l)>0.0){b=Cs(l);d.f=d.f+b.t*0.004;d.h=d.h+b.v*0.004;d.g=d.g+b.s*0.004;}return k;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AI3(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=I(b.N);e=I(b.R+1.0);f=I(b.I);g=I(b.Q+1.0);h=I(b.O);i=I(b.S+1.0);while(d<e){j=f;while(j<g){k=h;if(k<i){J();l=A39.data;$p=1;continue _;}j=j+1|0;}d=d+1|0;}return 0;case 1:$z=X9(a,d,j,k);if(C()){break _;}m=$z;n=l[m];if(n!==null&&n.bR===c)return 1;k=k+1|0;a:while(true)
{if(k<i){J();l=A39.data;continue _;}j=j+1|0;while(j>=g){d=d+1|0;if(d>=e)break a;j=f;}k=h;}return 0;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function T6(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=new SS;$p=1;case 1:AD2(g,a,b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Y9(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0/((c.R-c.N)*2.0+1.0);e=1.0/((c.Q-c.I)*2.0+1.0);f=1.0/((c.S-c.O)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){if(0.0<=1.0){k=c.N+(c.R-c.N)*i;l=c.I+(c.Q-c.I)*j;m=c.O;n=c.S-c.O;o=0.0;p=BR(k,l,m+n*o);$p=1;continue _;}j=j
+e;}i=i+d;}return g/h;case 1:$z=AEj(a,p,b);if(C()){break _;}p=$z;if(p===null)g=g+1|0;h=h+1|0;q=o+f;a:while(true){if(q<=1.0){k=c.N+(c.R-c.N)*i;l=c.I+(c.Q-c.I)*j;m=c.O;n=c.S-c.O;o=q;p=BR(k,l,m+n*o);continue _;}j=j+e;while(j>1.0){i=i+d;if(i>1.0)break a;j=0.0;}q=0.0;}return g/h;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Xl(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;$p=1;case 1:$z=X9(a,b,c,d);if(C()){break _;}e=$z;J();if(e!=A5G.b)return;D1(a,b+0.5,c+0.5,d+0.5,B(207),0.5,2.5999999046325684+(L(a.n)-L(a.n))*0.800000011920929);e=0;$p=2;case 2:AJ6(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AQl(a,b){return null;}
function AII(a){var b;b=new Bc;Ba(b);return O(Bd(H(b,B(359)),a.dt.p));}
function AQr(a){return a.bc;}
function AH_(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=VI(a,e,f);if(C()){break _;}g=$z;if(g===null)return null;b=b&15;d=d&15;$p=2;case 2:$z=AH1(g,b,c,d);if(C()){break _;}g=$z;return g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ABd(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b>>4;g=d>>4;$p=1;case 1:$z=VI(a,f,g);if(C()){break _;}h=$z;if(h!==null)AEi(h,b&15,c,d&15,e);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AA7(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=VI(a,e,f);if(C()){break _;}g=$z;if(g!==null)Zu(g,b&15,c,d&15);return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Wj(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:J();e=A39.data;$p=1;case 1:$z=X9(a,b,c,d);if(C()){break _;}b=$z;f=e[b];return f!==null?f.dy():0;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AEg(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=1;$p=1;case 1:Xh(a,c,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function ADn(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=100000;if(a.e3.p<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=Eo(a.e3,a.e3.p-1|0);$p=1;case 1:AIY(c,a);if(C()){break _;}if(a.e3.p<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=Eo(a.e3,a.e3.p-1|0);continue _;default:Es();}}CM().s(a,b,c,$p);}
function U0(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=a.e3.p;if(4<=i)i=4;j=0;while(true){if(j>=i){k=a.e3;l=new RX;l.b8=b;l.kO=c;l.fi=d;l.fj=e;l.eW=f;l.eD=g;l.ed=h;U(k,l);if(a.e3.p>100000&&a.e3.p>50000){$p=1;continue _;}return;}k=Z(a.e3,(a.e3.p-j|0)-1|0);if(k.b8===b&&AGq(k,c,d,e,f,g,h))break;j=j+1|0;}return;case 1:ADn(a);if(C()){break _;}if
(a.e3.p<=50000)return;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Oe(a){var b;b=L9(a,1.0);if(b!=a.fD)a.fD=b;}
function T0(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Qb(a.hQ);if(!Ob(a.dt,a.bc)&&a.bc!==null){B9(Ds(),B(360));b=a.bc;$p=1;continue _;}a:{c=L9(a,1.0);if(c!=a.fD){a.fD=c;d=0;while(true){if(d>=a.b$.p)break a;RN(Z(a.b$,d));d=d+1|0;}}}a.dG=Long_add(a.dG,Long_fromInt(1));if(Long_ne(Long_rem(a.dG,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c
=0;b=null;$p=4;continue _;case 1:AIS(a,b);if(C()){break _;}b:{c=L9(a,1.0);if(c!=a.fD){a.fD=c;d=0;while(true){if(d>=a.b$.p)break b;RN(Z(a.b$,d));d=d+1|0;}}}a.dG=Long_add(a.dG,Long_fromInt(1));if(Long_ne(Long_rem(a.dG,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c=0;b=null;$p=4;continue _;case 2:W6(a,c);if(C()){break _;}d=I(a.bc.c);e=I(a.bc.d);b=new Ha;f=d-64|0;g=0;h=e-64|0;i=d+64|0;j=128;c=e+64|0;$p=3;case 3:ZW(b,a,f,g,h,i,j,c);if(C()){break _;}f=0;if(f>=8000)return;a.g7=(a.g7*3|0)+a.qu|0;g=a.g7>>2;h=((g
&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p=5;continue _;case 4:Xh(a,c,b);if(C()){break _;}c=0;$p=2;continue _;case 5:$z=Gq(b,h,j,i);if(C()){break _;}k=$z;J();if(A5Q.data[k]){l=A39.data[k];m=a.n;$p=6;continue _;}f=f+1|0;if(f>=8000)return;a.g7=(a.g7*3|0)+a.qu|0;g=a.g7>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;continue _;case 6:l.ew(a,h,j,i,m);if(C()){break _;}f=f+1|0;if(f>=8000)return;a.g7=(a.g7*3|0)+a.qu|0;g=a.g7>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p=5;continue _;default:
Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function W6(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=HZ(a.f1);if(c!=Hn(a.jO)){d=new DK;Bl(d,B(361));M(d);}if(c>500)c=500;e=0;a:{while(true){if(e>=c)break a;f=KX(a.f1);if(!b&&Long_gt(f.ik,a.dG))break;KG(a.f1,f);Jh(a.jO,f);if(G0(a,f.e5-8|0,f.eO-8|0,f.e9-8|0,f.e5+8|0,f.eO+8|0,f.e9+8|0)){g=f.e5;h=f.eO;i=f.e9;$p=1;continue _;}e=e+1|0;}}return !HZ(a.f1)?0:1;case 1:$z=X9(a,g,h,
i);if(C()){break _;}g=$z;if(g==f.oz&&g>0){J();d=A39.data[g];g=f.e5;h=f.eO;i=f.e9;f=a.n;$p=2;continue _;}b:{while(true){e=e+1|0;if(e>=c)break b;f=KX(a.f1);if(!b&&Long_gt(f.ik,a.dG))break;KG(a.f1,f);Jh(a.jO,f);if(!G0(a,f.e5-8|0,f.eO-8|0,f.e9-8|0,f.e5+8|0,f.eO+8|0,f.e9+8|0))continue;else{g=f.e5;h=f.eO;i=f.e9;continue _;}}}return !HZ(a.f1)?0:1;case 2:d.ew(a,g,h,i,f);if(C()){break _;}c:{while(true){e=e+1|0;if(e>=c)break c;f=KX(a.f1);if(!b&&Long_gt(f.ik,a.dG))break;KG(a.f1,f);Jh(a.jO,f);if(!G0(a,f.e5-8|0,f.eO-8|0,
f.e9-8|0,f.e5+8|0,f.eO+8|0,f.e9+8|0))continue;else{g=f.e5;h=f.eO;i=f.e9;$p=1;continue _;}}}return !HZ(a.f1)?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AAw(a,b,c,d){var e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=16;f=new Df;g=0;if(g>=1000)return;h=(b+D(a.n,e)|0)-D(a.n,e)|0;i=(c+D(a.n,e)|0)-D(a.n,e)|0;j=(d+D(a.n,e)|0)-D(a.n,e)|0;$p=1;case 1:$z=X9(a,h,i,j);if(C()){break _;}k=$z;if(k>0){J();l=A39.data[k];$p=2;continue _;}g=g+1|0;if(g>=1000)return;h=(b+D(a.n,e)|0)-D(a.n,e)|0;i=(c+D(a.n,e)|0)-D(a.n,
e)|0;j=(d+D(a.n,e)|0)-D(a.n,e)|0;continue _;case 2:l.jM(a,h,i,j,f);if(C()){break _;}g=g+1|0;if(g>=1000)return;h=(b+D(a.n,e)|0)-D(a.n,e)|0;i=(c+D(a.n,e)|0)-D(a.n,e)|0;j=(d+D(a.n,e)|0)-D(a.n,e)|0;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Zh(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DB(a.oI);d=I((c.N-2.0)/16.0);e=I((c.R+2.0)/16.0);f=I((c.O-2.0)/16.0);g=I((c.S+2.0)/16.0);while(d<=e){h=f;while(h<=g){if(CN(a,d,h)){$p=1;continue _;}h=h+1|0;}d=d+1|0;}return a.oI;case 1:$z=VI(a,d,h);if(C()){break _;}i=$z;AEX(i,b,c,a.oI);a:while(true){h=h+1|0;while(h>g){d=d+1|0;if(d>e)break a;h=f;}if(!CN(a,d,h))continue;else
{continue _;}}return a.oI;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AHS(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=I((c.N-2.0)/16.0);e=I((c.R+2.0)/16.0);f=I((c.O-2.0)/16.0);g=I((c.S+2.0)/16.0);h=Ck();while(d<=e){i=f;while(i<=g){if(CN(a,d,i)){$p=1;continue _;}i=i+1|0;}d=d+1|0;}return h;case 1:$z=VI(a,d,i);if(C()){break _;}j=$z;AG5(j,b,c,h);a:while(true){i=i+1|0;while(i>g){d=d+1|0;if(d>e)break a;i=f;}if(!CN(a,d,i))continue;else
{continue _;}}return h;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function APC(a){return a.dt;}
function ABK(a,b,c,d){var e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!D9(a,b,c,d))return;$p=1;case 1:$z=TR(a,b,d);if(C()){break _;}e=$z;PF(e);return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function Un(a,b){var c,d;c=0;d=0;while(d<a.dt.p){if(No(b,C4(Z(a.dt,d))))c=c+1|0;d=d+1|0;}return c;}
function AKI(a,b){var c,d;Dq(a.dt,b);c=0;while(c<a.b$.p){Z(a.b$,c);d=0;while(d<b.p){Z(b,d);d=d+1|0;}c=c+1|0;}}
function ALn(a,b){Dq(a.kQ,b);}
function Sk(a){while(Qb(a.hQ)){}}
function ADe(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=X9(a,c,d,e);if(C()){break _;}g=$z;J();h=A39.data[g];i=A39.data[b];$p=2;case 2:$z=i.gK(a,c,d,e);if(C()){break _;}j=$z;if(f)j=null;if(!(b>0&&h===null)&&h!==A5c&&h!==A5V&&h!==A5d&&h!==A5W&&h!==A5G)return 0;if(j===null){$p=3;continue _;}$p=4;continue _;case 3:$z=i.fg(a,c,d,e);if(C()){break _;}b=$z;return !b
?0:1;case 4:$z=AHI(a,j);if(C()){break _;}b=$z;if(!b)return 0;$p=3;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AMb(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=I(b.c);f=I(b.j);g=I(b.d);h=d+32.0|0;i=e-h|0;j=f-h|0;k=g-h|0;l=e+h|0;m=f+h|0;n=g+h|0;o=new Ha;$p=1;case 1:ZW(o,a,i,j,k,l,m,n);if(C()){break _;}return AJ0(ATU(o),b,c,d);default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AEs(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=I(b.c);h=I(b.j);i=I(b.d);j=f+32.0|0;k=g-j|0;l=h-j|0;m=i-j|0;n=g+j|0;o=h+j|0;p=i+j|0;q=new Ha;$p=1;case 1:ZW(q,a,k,l,m,n,o,p);if(C()){break _;}return ABs(ATU(q),b,c,d,e,f);default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function TD(){var b,c;A9K=$rt_createFloatArray(16);b=0;while(b<=15){c=1.0-b/15.0;A9K.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}}
function Kb(){var a=this;E.call(a);a.sq=null;a.wK=null;a.kf=0;a.AZ=0.0;a.AY=0.0;a.Bj=0;a.kT=0;a.le=0;a.l9=0;a.oC=0;a.p7=0;a.w9=0;a.xz=0.0;a.w$=0.0;a.wH=0.0;a.m8=0;}
var A35=null;function Bv(){Bv=Bt(Kb);ATE();}
function Bn(a){var b,c,d,e,f;if(!a.m8)return 0;a.m8=0;if(a.kf>0){if(a.le)SV(32888);if(a.kT)SV(32886);b=a.w9;c=a.kf;d=a.sq.buffer;e=a.kf*7|0;AGg(b,0,c,new Int32Array(d,0,e));if(a.le)P9(32888);if(a.kT)P9(32886);}f=a.l9*4|0;Sz(a);return f;}
function Sz(a){a.kf=0;a.l9=0;a.oC=0;}
function Bu(a){Fs(a,7);}
function Fs(a,b){if(a.m8)Bn(a);a.m8=1;Sz(a);a.w9=b;a.kT=0;a.le=0;a.p7=0;}
function AEt(a,b,c){a.le=1;a.AZ=b;a.AY=c;}
function Cf(a,b,c,d){ML(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function FE(a,b,c,d,e){NA(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function ML(a,b,c,d){NA(a,b,c,d,255);}
function NA(a,b,c,d,e){if(!a.p7){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.kT=1;a.Bj=e<<24|d<<16|c<<8|b;}}
function F(a,b,c,d,e,f){AEt(a,e,f);Bb(a,b,c,d);}
function Bb(a,b,c,d){var e,f,g,h,i;if(a.oC>65534)return;a.oC=a.oC+1|0;a.kf=a.kf+1|0;e=a.l9;f=a.sq;g=a.wK;h=e+0|0;i=b+a.xz;g[h]=i;h=e+1|0;i=c+a.w$;g[h]=i;h=e+2|0;i=d+a.wH;g[h]=i;if(a.le){h=e+3|0;i=a.AZ;g[h]=i;h=e+4|0;i=a.AY;g[h]=i;}if(a.kT){h=e+5|0;e=a.Bj;f[h]=e;}a.l9=a.l9+7|0;}
function Ec(a,b){ML(a,b>>16&255,b>>8&255,b&255);}
function YW(a){a.p7=1;}
function CX(a,b,c,d){B_(b,c,d);}
function Et(a,b,c,d){a.xz=b;a.w$=c;a.wH=d;}
function ATE(){var b,c;b=new Kb;Bv();b.kf=0;b.kT=0;b.le=0;b.l9=0;b.oC=0;b.p7=0;b.m8=0;c=new ArrayBuffer(2097152);b.sq=new Int32Array(c);b.wK=new Float32Array(c);A35=b;}
function AHT(){var a=this;E.call(a);a.e_=0;a.e7=0;}
function EU(a,b){var c=new AHT();AR6(c,a,b);return c;}
function AR6(a,b,c){var d,e;a.e_=b;a.e7=c;d=1;while(true){c=a.e_;e=d+1|0;if((c/e|0)<320)break;if((a.e7/e|0)<240)break;d=e;}a.e_=a.e_/d|0;a.e7=a.e7/d|0;}
function ZS(a){return a.e_;}
function U8(a){return a.e7;}
function Fo(){E.call(this);this.ly=0.0;}
function A9Q(){var a=new Fo();K8(a);return a;}
function K8(a){a.ly=0.0;}
function I$(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>24&255)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>24&255)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;X(3553);V(3042);X(3008);C0(770,771);Bv();p=A35;Bu(p);FE(p,i,j,k,h);q=d;r=c;Bb(p,q,r,0.0);s=b;Bb(p,s,r,0.0);FE(p,m,n,o,l);r=e;Bb(p,s,r,0.0);Bb(p,q,r,0.0);Bn(p);X(3042);V(3008);V(3553);}
function Dz(a,b,c,d,e,f){Cn(b,c,d-(Db(b,c)/2|0)|0,e,f);}
function Gl(a,b,c,d,e,f){Cn(b,c,d,e,f);}
function Ct(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;Bv();h=A35;Bu(h);i=b+0|0;j=c+g|0;k=a.ly;l=(d+0|0)*0.00390625;m=(e+g|0)*0.00390625;F(h,i,j,k,l,m);n=b+f|0;o=a.ly;k=(d+f|0)*0.00390625;F(h,n,j,o,k,m);m=c+0|0;o=a.ly;j=(e+0|0)*0.00390625;F(h,n,m,o,k,j);F(h,i,m,a.ly,l,j);Bn(h);}
function CI(){var a=this;Fo.call(a);a.H=null;a.bh=0;a.bv=0;a.bE=null;a.oi=0;a.bS=null;}
function A9R(){var a=new CI();DI(a);return a;}
function DI(a){K8(a);a.bE=Ck();a.oi=0;}
function AAZ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.bE.p)return;f=Z(a.bE,e);g=a.H;$p=1;case 1:Ys(f,g,b,c);if(C()){break _;}e=e+1|0;if(e>=a.bE.p)return;f=Z(a.bE,e);g=a.H;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function UG(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.H;e=null;$p=1;case 1:Zp(d,e);if(C()){break _;}d=a.H;$p=2;case 2:AAH(d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function Vf(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.bE.p)break a;f=Z(a.bE,e);if(O8(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.is(f);if(C()){break _;}while(true){e=e+1|0;if(e>=a.bE.p)break;f=Z(a.bE,e);if(!O8(f,b,c))continue;else{continue _;}}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ATL(a,b,c,d){return;}
function AHv(a,b){return;}
function AKC(a,b,c,d){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.H=b;a.bS=b.ey;a.bh=c;a.bv=d;$p=1;case 1:a.hK();if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AKA(a){return;}
function ACj(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(EM()){$p=1;continue _;}if(!Dt())return;$p=2;continue _;case 1:Vp(a);if(C()){break _;}if(EM()){continue _;}if(!Dt())return;$p=2;case 2:AMM(a);if(C()){break _;}if(!Dt())return;continue _;default:Es();}}CM().s(a,$p);}
function Vp(a){var b,c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cm()){a.y$(Bh(AMc(),a.bh)/a.H.b5|0,(a.bv-(Bh(TN(),a.bv)/a.H.bw|0)|0)-1|0,CE());return;}b=Bh(AMc(),a.bh)/a.H.b5|0;c=(a.bv-(Bh(TN(),a.bv)/a.H.bw|0)|0)-1|0;d=CE();$p=1;case 1:a.EL(b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AMM(a){var b,c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!CD())return;Y();if(A3x===null)b=0;else{c=$rt_str(A3x.key);b=A3x===null?32:BE(c)>1?0:Cr(c,0);}d=Be();$p=1;case 1:a.nH(b,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AUj(a){return;}
function ADc(a){return;}
function WW(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;$p=1;case 1:ADE(a,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function ADE(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.H.w!==null){I$(a,0,0,a.bh,a.bv,1610941696,(-1607454656));return;}X(2896);X(2912);Bv();c=A35;d=3553;e=a.H.bi;f=B(157);$p=1;case 1:$z=ACG(e,f);if(C()){break _;}g=$z;Ce(d,g);BN(1.0,1.0,1.0,1.0);Bu(c);Ec(c,4210752);h=a.bv;i=a.bv/32.0;j=b;F(c,0.0,h,0.0,0.0,i+j);F(c,a.bh,a.bv,
0.0,a.bh/32.0,a.bv/32.0+j);k=a.bh;l=a.bh/32.0;m=0+b|0;F(c,k,0.0,0.0,l,m);F(c,0.0,0.0,0.0,0.0,m);Bn(c);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AOK(a){return 1;}
function AAC(){var a=this;E.call(a);a.j3=null;a.iB=0;a.hq=0;a.tt=0;}
function AZZ(a){var b=new AAC();AVe(b,a);return b;}
function AVe(a,b){a.j3=N(E,b);a.iB=b;a.hq=0;a.tt=0;}
function PW(a,b){var c,d;c=a.hq;while(true){a.hq=a.hq+1|0;if(a.hq>=a.iB)a.hq=0;if(a.hq==c){c=a.iB;a.iB=a.iB+(a.iB/2|0)|0;d=a.j3;a.j3=N(E,a.iB);De(d,0,a.j3,0,c);return PW(a,b);}if(a.j3.data[a.hq]!==null)continue;else break;}a.j3.data[a.hq]=b;a.tt=a.tt+1|0;return a.hq;}
function AIm(a,b){if(b<a.iB&&b>=0)return a.j3.data[b];return null;}
function Ks(){E.call(this);}
function DX(){var a=this;Ks.call(a);a.dW=0.0;a.dU=0.0;a.dV=0.0;a.dT=0.0;a.dZ=0.0;a.d0=0.0;a.dX=0.0;a.dY=0.0;a.d4=0.0;a.d2=0.0;a.d3=0.0;a.d1=0.0;a.f_=0.0;a.ga=0.0;a.f9=0.0;a.f$=0.0;}
function K2(){var a=new DX();AVo(a);return a;}
function AVo(a){EF(a);}
function EF(a){a.dW=1.0;a.dU=0.0;a.dV=0.0;a.dT=0.0;a.dZ=0.0;a.d0=1.0;a.dX=0.0;a.dY=0.0;a.d4=0.0;a.d2=0.0;a.d3=1.0;a.d1=0.0;a.f_=0.0;a.ga=0.0;a.f9=0.0;a.f$=1.0;return a;}
function IW(a){a.dW=0.0;a.dU=0.0;a.dV=0.0;a.dT=0.0;a.dZ=0.0;a.d0=0.0;a.dX=0.0;a.dY=0.0;a.d4=0.0;a.d2=0.0;a.d3=0.0;a.d1=0.0;a.f_=0.0;a.ga=0.0;a.f9=0.0;a.f$=0.0;return a;}
function FT(a,b){a.dW=b.dW;a.dU=b.dU;a.dV=b.dV;a.dT=b.dT;a.dZ=b.dZ;a.d0=b.d0;a.dX=b.dX;a.dY=b.dY;a.d4=b.d4;a.d2=b.d2;a.d3=b.d3;a.d1=b.d1;a.f_=b.f_;a.ga=b.ga;a.f9=b.f9;a.f$=b.f$;return a;}
function Qv(a,b){Cu(b,a.dW);Cu(b,a.dU);Cu(b,a.dV);Cu(b,a.dT);Cu(b,a.dZ);Cu(b,a.d0);Cu(b,a.dX);Cu(b,a.dY);Cu(b,a.d4);Cu(b,a.d2);Cu(b,a.d3);Cu(b,a.d1);Cu(b,a.f_);Cu(b,a.ga);Cu(b,a.f9);Cu(b,a.f$);return a;}
function LD(a,b){b=b.data;b[0]=a.dW;b[1]=a.dU;b[2]=a.dV;b[3]=a.dT;b[4]=a.dZ;b[5]=a.d0;b[6]=a.dX;b[7]=a.dY;b[8]=a.d4;b[9]=a.d2;b[10]=a.d3;b[11]=a.d1;b[12]=a.f_;b[13]=a.ga;b[14]=a.f9;b[15]=a.f$;return a;}
function AZe(a,b){return Rk(a,b,a);}
function Vt(a,b){a.dW=a.dW*b.eX;a.dU=a.dU*b.eX;a.dV=a.dV*b.eX;a.dT=a.dT*b.eX;a.dZ=a.dZ*b.eZ;a.d0=a.d0*b.eZ;a.dX=a.dX*b.eZ;a.dY=a.dY*b.eZ;a.d4=a.d4*b.eY;a.d2=a.d2*b.eY;a.d3=a.d3*b.eY;a.d1=a.d1*b.eY;return a;}
function ANG(a,b,c){return SY(a,b,c,a);}
function SY(a,b,c,d){return AWx(b,c,a,d);}
function AWx(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=K2();f=b;g=FI(f);h=Fy(f);i=1.0-g;j=c.eX*c.eZ;k=c.eZ*c.eY;l=c.eX*c.eY;m=c.eX*h;n=c.eZ*h;o=c.eY*h;p=c.eX*c.eX*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.eZ*c.eZ*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.eY*c.eY*i+g;z=d.dW*p+d.dZ*q+d.d4*s;ba=d.dU*p+d.d0*q+d.d2*s;bb=d.dV*p+d.dX*q+d.d3*s;bc=d.dT*p+d.dY*q+d.d1*s;bd=d.dW*t+d.dZ*u+d.d4*v;be=d.dU*t+d.d0*u+d.d2*v;bf=d.dV*t+d.dX*u+d.d3*v;r=d.dT*t+d.dY*u+d.d1*v;e.d4=d.dW*w+d.dZ*x+d.d4*
y;e.d2=d.dU*w+d.d0*x+d.d2*y;e.d3=d.dV*w+d.dX*x+d.d3*y;e.d1=d.dT*w+d.dY*x+d.d1*y;e.dW=z;e.dU=ba;e.dV=bb;e.dT=bc;e.dZ=bd;e.d0=be;e.dX=bf;e.dY=r;return e;}
function Rk(a,b,c){if(c===null)c=K2();c.f_=c.f_+a.dW*b.eX+a.dZ*b.eZ+a.d4*b.eY;c.ga=c.ga+a.dU*b.eX+a.d0*b.eZ+a.d2*b.eY;c.f9=c.f9+a.dV*b.eX+a.dX*b.eZ+a.d3*b.eY;c.f$=c.f$+a.dT*b.eX+a.dY*b.eZ+a.d1*b.eY;return c;}
function JI(a,b){var c;a:{if(b instanceof DX){b:{c:{b=b;if(a.dW!==b.dW)break c;if(a.dU!==b.dU)break c;if(a.dV!==b.dV)break c;if(a.dT!==b.dT)break c;if(a.dZ!==b.dZ)break c;if(a.d0!==b.d0)break c;if(a.dX!==b.dX)break c;if(a.dY!==b.dY)break c;if(a.d4!==b.d4)break c;if(a.d2!==b.d2)break c;if(a.d3!==b.d3)break c;if(a.d1!==b.d1)break c;if(a.f_!==b.f_)break c;if(a.ga!==b.ga)break c;if(a.f9!==b.f9)break c;if(a.f$===b.f$){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function LU(){}
function HA(){E.call(this);}
function Sn(){}
function LH(){}
function O5(){}
function Kn(){}
function Rf(){var a=this;HA.call(a);a.eX=0.0;a.eZ=0.0;a.eY=0.0;}
function A9S(){var a=new Rf();AYZ(a);return a;}
function AYZ(a){return;}
function Kc(a,b,c,d){a.eX=b;a.eZ=c;a.eY=d;}
function Sl(){}
function O0(){}
function F7(){var a=this;HA.call(a);a.j7=0.0;a.j8=0.0;a.j6=0.0;a.nL=0.0;}
function AT5(){var a=new F7();ARM(a);return a;}
function ARM(a){return;}
function RO(a,b){a.j7=b.j7;a.j8=b.j8;a.j6=b.j6;a.nL=b.nL;return a;}
function AZX(a){return a.j7;}
function ANk(a){return a.j8;}
function ARU(a){return a.j6;}
function AVO(a){return a.nL;}
function P0(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(C4(a)!==C4(b))return 0;c=b;if(a.j7===c.j7&&a.j8===c.j8&&a.j6===c.j6&&a.nL===c.nL)return 1;return 0;}
function PR(){var a=this;E.call(a);a.y3=null;a.y2=null;}
function ADC(a){var b,c;b=a.y3;c=a.y2;EJ(b);Cx(c,null);}
function AJv(){EA.call(this);}
function AVm(a){var b=new AJv();AQS(b,a);return b;}
function AQS(a,b){ST(a,b);}
function GQ(){}
function QP(){}
function Yx(){var a=this;E.call(a);a.fb=null;a.hC=null;a.jz=null;a.ot=0;a.px=0;a.hr=null;}
function AEv(a,b,c,d){var e=new Yx();AN1(e,a,b,c,d);return e;}
function AN1(a,b,c,d,e){a.hr=b;a.px=a.hr.d8;a.fb=c;a.hC=d;a.ot=e;}
function FQ(a){return a.fb===null?0:1;}
function FJ(a){var b;OA(a);if(a.fb===null){b=new Iq;Q(b);M(b);}b=a.fb.wJ;a.jz=a.fb;a.hC=a.fb;a.fb=a.fb.gI;a.ot=a.ot+1|0;return b;}
function ACs(a){var b,c;if(a.jz===null){b=new DK;Q(b);M(b);}b=a.hr;c=a.jz;if(c.hA===null)b.n$=c.gI;else c.hA.gI=c.gI;if(c.gI===null)b.oK=c.hA;else c.gI.hA=c.hA;b.gM=b.gM-1|0;b.d8=b.d8+1|0;if(a.jz===a.hC){a.hC=!FQ(a)?null:a.fb.hA;a.ot=a.ot-1|0;}else if(a.jz===a.fb)a.fb=!VF(a)?null:a.hC.gI;a.px=a.hr.d8;a.jz=null;}
function VF(a){return a.hC===null?0:1;}
function W8(a,b){var c;OA(a);c=new OK;c.wJ=b;c.hA=a.hC;c.gI=a.fb;if(a.hC!==null)a.hC.gI=c;else a.hr.n$=c;if(a.fb!==null)a.fb.hA=c;else a.hr.oK=c;a.hC=c;b=a.hr;b.gM=b.gM+1|0;b=a.hr;b.d8=b.d8+1|0;a.px=a.hr.d8;a.jz=null;}
function OA(a){var b;if(a.px>=a.hr.d8)return;b=new Jf;Q(b);M(b);}
function OK(){var a=this;E.call(a);a.wJ=null;a.gI=null;a.hA=null;}
function A9T(){var a=new OK();ASt(a);return a;}
function ASt(a){return;}
function HW(){var a=this;Ea.call(a);a.F=null;a.xS=0;a.jX=0;a.oX=0.0;a.jR=0.0;a.zB=null;a.vD=0;}
function ABf(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFK(a);if(C()){break _;}a.oX=a.jR;a.jR=0.0;return;default:Es();}}CM().s(a,$p);}
function AFX(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cF=1.6200000047683716;Dx(a,0.6000000238418579,1.7999999523162842);if(a.k!==null){if(a.j>0.0){CC(a,a.c,a.j,a.d);b=a.k;c=a.G;$p=1;continue _;}a.g=0.0;a.h=0.0;a.f=0.0;a.E=0.0;}if(a.k!==null)a.k.bc=a;a.bI=20;a.cD=0;return;case 1:$z=TP(b,a,c);if(C()){break _;}b=$z;if(b.p){a.j=a.j+1.0;if(a.j>0.0){CC(a,a.c,a.j,a.d);b=a.k;c=a.G;continue _;}}a.g=0.0;a.h=0.0;a.f=0.0;a.E=0.0;if(a.k!==null)a.k.bc
=a;a.bI=20;a.cD=0;return;default:Es();}}CM().s(a,b,c,$p);}
function UV(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.k.h3&&a.bI<20&&!((a.nq%20|0)*4|0))Q7(a,1);ZN(a.F);a.oX=a.jR;$p=1;case 1:X2(a);if(C()){break _;}b=B7(a.f*a.f+a.g*a.g);c=G$( -a.h*0.20000000298023224)*15.0;if(b>0.10000000149011612)b=0.10000000149011612;if(!(a.ca&&a.bI>0))b=0.0;if(!(!a.ca&&a.bI>0))c=0.0;a.jR=a.jR+(b-a.jR)*0.4000000059604645;a.ip=a.ip+(c-a.ip)*0.800000011920929;if(a.bI<=0)return;d=a.k;e
=Da(a.G,1.0,0.0,1.0);$p=2;case 2:a:{$z=Zh(d,a,e);if(C()){break _;}d=$z;if(d!==null){f=0;while(true){if(f>=d.p)break a;Z(d,f).vf(a);f=f+1|0;}}}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AU6(a){return a.jX;}
function AF4(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dx(a,0.20000000298023224,0.20000000298023224);CC(a,a.c,a.j,a.d);a.h=0.10000000149011612;if(!DU(a.zB,B(362))){c=a.F;$p=1;continue _;}c=new B6;Bw();Fw(c,A65,1);d=1;$p=2;continue _;case 1:ADX(c);if(C()){break _;}if(b===null){a.g=0.0;a.f=0.0;}else{a.f= -Bx((a.jD+a.q)*3.1415927410125732/180.0)*0.10000000149011612;a.g= -Bm((a.jD+a.q)*3.1415927410125732/180.0)*0.10000000149011612;}a.cF
=0.10000000149011612;return;case 2:AKZ(a,c,d);if(C()){break _;}c=a.F;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,$p);}
function ARv(a,b,c){a.jX=a.jX+c|0;}
function AGF(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;$p=1;case 1:AKZ(a,b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function AKZ(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b===null)return;d=Ga(a.k,a.c,a.j-0.30000001192092896,a.d,b);d.gr=40;if(c){e=L(a.l)*0.5;f=L(a.l)*3.1415927410125732*2.0;d.f= -Bm(f)*e;d.g=Bx(f)*e;d.h=0.20000000298023224;}else{d.f= -Bm(a.q/180.0*3.1415927410125732)*Bx(a.E/180.0*3.1415927410125732)*0.30000001192092896;d.g=Bx(a.q/180.0*3.1415927410125732)
*Bx(a.E/180.0*3.1415927410125732)*0.30000001192092896;d.h= -Bm(a.E/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=L(a.l)*3.1415927410125732*2.0;g=0.019999999552965164*L(a.l);h=d.f;i=e;j=FI(i);k=g;d.f=h+j*k;d.h=d.h+(L(a.l)-L(a.l))*0.10000000149011612;d.g=d.g+Fy(i)*k;}b=a.k;$p=1;case 1:AIS(b,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFJ(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Y5(a.F,b);b=A46;$p=1;case 1:$z=ABX(a,b);if(C()){break _;}d=$z;if(d)c=c/5.0;if(!a.ca)c=c/5.0;return c;default:Es();}}CM().s(a,b,c,d,$p);}
function K3(a,b){return Zq(a.F,b);}
function AVz(a){return 0.11999999731779099;}
function Uk(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gB=0;if(a.bI<=0)return 0;if(a.c5>a.nw/2.0)return 0;if(!(!(b instanceof Dp)&&!(b instanceof HV))){if(!a.k.h3)c=0;if(a.k.h3==1)c=(c/3|0)+1|0;if(a.k.h3==3)c=(c*3|0)/2|0;}d=Bh(c,25-Qh(a.F)|0)+a.vD|0;Zv(a.F,c);c=d/25|0;a.vD=d%25|0;if(!c)return 0;$p=1;case 1:$z=XD(a,b,c);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,$p);}
function ABS(){var a=this;HW.call(a);a.g9=null;a.jY=null;}
function AWC(a,b,c){var d=new ABS();AQ$(d,a,b,c);return d;}
function AQ$(a,b,c,d){var e;EO(a,c);a.nw=20;a.da=0.0;a.ex=0.0;a.C9=1;a.vU=B(363);a.C8=1;a.AD=0.0;a.Bo=null;a.E8=1.0;a.sT=0;a.E9=0.0;a.bI=10;a.jD=0.0;a.cD=0;a.c6=0;a.ze=0;a.BE=(-1);a.Fa=BI()*0.8999999761581421+0.10000000149011612;a.gB=0;a.gU=0;a.xb=0.0;a.rc=0.699999988079071;a.lj=1;a.Ee=(BI()+1.0)*0.009999999776482582;CC(a,a.c,a.j,a.d);a.Fg=BI()*12398.0;a.q=BI()*3.1415927410125732*2.0;a.C7=1.0;a.pJ=0.5;e=new RM;e.bb=N(B6,36);e.bU=N(B6,4);e.bB=0;e.mf=a;a.F=e;a.xS=0;a.jX=0;a.vD=0;IU(a,c.eJ+0.5,c.oo,c.eI+0.5,0.0,
0.0);a.cF=1.6200000047683716;a.bI=20;a.Bo=B(364);a.AD=180.0;a.mn=20;a.vU=B(363);a.jY=b;if(c.bc!==null)B4(c.bc);c.bc=a;if(d!==null&&d.mZ!==null&&BE(d.mZ)>0){b=new Bc;Ba(b);a.rW=O(H(H(H(b,B(365)),d.mZ),B(366)));}a.zB=d.mZ;}
function Wv(a){a.hO=a.g9.jA;a.fV=a.g9.jq;a.gU=a.g9.sp;}
function AGb(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AI_(a.g9,a);$p=1;case 1:UV(a);if(C()){break _;}return;default:Es();}}CM().s(a,$p);}
function ALZ(a){AJw(a.g9);}
function DY(a,b,c){AJ1(a.g9,b,c);}
function Xp(a,b){EH(b,B(367),a.bI<<16>>16);EH(b,B(368),a.c$<<16>>16);EH(b,B(369),a.cD<<16>>16);EH(b,B(370),a.c6<<16>>16);FF(b,B(371),a.jX);Gw(b,B(317),AGT(a.F,Kj()));}
function AJt(a,b){var c;a.bI=EV(b,B(367));if(!UQ(b,B(367)))a.bI=10;a.c$=EV(b,B(368));a.cD=EV(b,B(369));a.c6=EV(b,B(370));a.jX=E6(b,B(371));c=II(b,B(317));ALH(a.F,c);}
function UR(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.jY;d=A1G(a.F,b);$p=1;case 1:Zp(c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AD8(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.jY;d=new PH;DI(d);d.xv=B(372);d.fr=0;d.ff=b;$p=1;case 1:Zp(c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AH3(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.jY;c=new Ti;d=a.F;GW(c);c.k$=ASn(c,3,3);c.ss=AVA();U(c.cH,AUr(c,c.k$,c.ss,0,124,35));e=0;while(e<3){f=0;while(f<3){U(c.cH,DC(c,c.k$,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){U(c.cH,DC(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){U(c.cH,DC(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:Zp(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AJA(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.jY;d=new Sp;e=a.F;GW(d);d.qY=b;U(d.cH,DC(d,b,0,56,17));U(d.cH,DC(d,b,1,56,53));U(d.cH,DC(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){U(d.cH,DC(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){U(d.cH,DC(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:Zp(c,d);if(C()){break _;}return;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,$p);}
function IS(a){return DE(a.F);}
function H1(a){AAY(a.F,a.F.bB,null);}
function Y4(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=AL_(a.F,b);if(c<=0)return;$p=1;case 1:b.eQ(a,c);if(C()){break _;}d=IS(a);if(d!==null&&b instanceof Ea){AAn(d,b);if(d.m<=0)H1(a);}return;default:Es();}}CM().s(a,b,c,d,$p);}
function O1(a,b){var c,d;c=a.jY.cG;d=new Rg;EP(d,a.jY.w,b.c,b.j,b.d,b.f,b.h,b.g);d.ox=0;d.pw=0;d.lg=b;d.g3=a;d.pw=3;d.x0=(-0.5);DS(c,d);}
function Yz(a){return Qh(a.F);}
function RB(a,b){var c;if(!b.sG(a)){c=IS(a);if(c!==null&&b instanceof Ea){Z2(c,b);if(c.m<=0)H1(a);}}}
function AEC(){E.call(this);}
function A9U(){var a=new AEC();APg(a);return a;}
function APg(a){return;}
function AHn(b){Y();A3C=b;if(b){A3h=0.0;A3i=0.0;setTimeout(Cj(new NM,"onTimer"),200);}else{A3A=B2();if(A3B)clearTimeout(A3B);A3B=0;A2Y.exitPointerLock();}}
function EM(){var b,c;a:{Y();A3w=null;if(!Nd(A3d)){b=P6(A3d,0);A3w=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function Cm(){Y();return A3w===null?0:DU($rt_str(A3w.type),B(373));}
function AMc(){Y();return A3w===null?(-1):A3w.clientX;}
function TN(){Y();return A3w===null?(-1):A20.clientHeight-A3w.clientY|0;}
function CE(){var b;Y();if(A3w===null)b=(-1);else{b=A3w.button;if(b==1)b=2;else if(b==2)b=1;}return b;}
function B1(b){Y();return A3y.data[b];}
function F3(){Y();return !DU(B(374),$rt_str(A3w.type))?0:A3w.deltaY===0.0?0:A3w.deltaY<=0.0?1:(-1);}
function NC(){E.call(this);}
var A9V=null;function A9W(){var a=new NC();AIn(a);return a;}
function AIn(a){return;}
function Bm(b){return A9V.data[(b*651.8986206054688|0)&4095];}
function Bx(b){return A9V.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function DG(b){return DL(b);}
function B7(b){return DL(b);}
function Jn(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function I(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function FP(b,c){return b>=0?b/c|0: -(( -b-1|0)/c|0)-1|0;}
function AGS(){var b,c,d,e;A9V=$rt_createFloatArray(4096);b=0;while(b<4096){A9V.data[b]=Fy((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=A9V.data;e=c;d[(e*11.377778053283691|0)&4095]=Fy(e*0.01745329238474369);c=c+90|0;}}
function RA(){var a=this;E.call(a);a.A2=null;a.by=0;}
function Ep(a,b){var c=new RA();ATi(c,a,b);return c;}
function ATi(a,b,c){a.A2=b;a.by=c;}
function EQ(){}
function RM(){var a=this;E.call(a);a.bb=null;a.bU=null;a.bB=0;a.mf=null;}
function DE(a){return a.bb.data[a.bB];}
function PT(a,b){var c;c=0;while(true){if(c>=a.bb.data.length)return (-1);if(a.bb.data[c]!==null&&a.bb.data[c].bs==b)break;c=c+1|0;}return c;}
function ON(a){var b;b=0;while(true){if(b>=a.bb.data.length)return (-1);if(a.bb.data[b]===null)break;b=b+1|0;}return b;}
function ALC(a,b,c){var d;d=PT(a,b);if(d>=0&&d<9)a.bB=d;}
function Fd(a,b){if(b>0)b=1;if(b<0)b=(-1);a.bB=a.bB-b|0;while(a.bB<0){a.bB=a.bB+9|0;}while(a.bB>=9){a.bB=a.bB-9|0;}}
function ZN(a){var b,c;b=0;while(b<a.bb.data.length){if(a.bb.data[b]!==null&&a.bb.data[b].lp>0){c=a.bb.data[b];c.lp=c.lp-1|0;}b=b+1|0;}}
function AB4(a,b){var c,d;c=PT(a,b);if(c<0)return 0;d=a.bb.data[c];b=d.m-1|0;d.m=b;if(b<=0)a.bb.data[c]=null;return 1;}
function Rn(a,b){var c,d,e,f;if(!b.dP){c=b.bs;d=b.m;e=0;a:{while(true){if(e>=a.bb.data.length){e=(-1);break a;}if(a.bb.data[e]!==null&&a.bb.data[e].bs==c&&a.bb.data[e].m<D4(a.bb.data[e])&&a.bb.data[e].m<64)break;e=e+1|0;}}if(e<0)e=ON(a);if(e>=0){if(a.bb.data[e]===null)a.bb.data[e]=I1(c,0);c=d<=(D4(a.bb.data[e])-a.bb.data[e].m|0)?d:D4(a.bb.data[e])-a.bb.data[e].m|0;if(c>(64-a.bb.data[e].m|0))c=64-a.bb.data[e].m|0;if(c){d=d-c|0;f=a.bb.data[e];f.m=f.m+c|0;a.bb.data[e].lp=5;}}b.m=d;if(!b.m)return 1;}c=ON(a);if(c
<0)return 0;a.bb.data[c]=b;a.bb.data[c].lp=5;return 1;}
function DT(a,b,c){var d,e,f;d=a.bb;if(b>=a.bb.data.length){d=a.bU;b=b-a.bb.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].m<=c){e=d[b];d[b]=null;return e;}f=D6(d[b],c);if(!d[b].m)d[b]=null;return f;}
function AAY(a,b,c){var d;d=a.bb;if(b>=a.bb.data.length){d=a.bU;b=b-a.bb.data.length|0;}d.data[b]=c;}
function Y5(a,b){var c;c=1.0;if(a.bb.data[a.bB]!==null)c=c*AAG(a.bb.data[a.bB],b);return c;}
function AGT(a,b){var c,d,e;c=0;while(c<a.bb.data.length){if(a.bb.data[c]!==null){d=F8();H$(d,B(375),c<<24>>24);NV(a.bb.data[c],d);HT(b,d);}c=c+1|0;}e=0;while(e<a.bU.data.length){if(a.bU.data[e]!==null){d=F8();H$(d,B(375),(e+100|0)<<24>>24);NV(a.bU.data[e],d);HT(b,d);}e=e+1|0;}return b;}
function ALH(a,b){var c,d,e;a.bb=N(B6,36);a.bU=N(B6,4);c=0;while(c<AI4(b)){d=Ew(b,c);e=JP(d,B(375))&255;if(e>=0&&e<a.bb.data.length)a.bb.data[e]=AZF(d);if(e>=100&&e<(a.bU.data.length+100|0))a.bU.data[e-100|0]=AZF(d);c=c+1|0;}}
function Ul(a){return a.bb.data.length+4|0;}
function OV(a,b){var c;c=a.bb;if(b>=a.bb.data.length){c=a.bU;b=b-a.bb.data.length|0;}return c.data[b];}
function ANr(a){return B(317);}
function ARs(a){return 64;}
function AL_(a,b){var c;c=OV(a,a.bB);return c===null?1:V7(c,b);}
function Zq(a,b){var c;if(b.bR!==A6q&&b.bR!==A6F)return 1;c=OV(a,a.bB);return c===null?0:AIJ(c,b);}
function ADk(a,b){return a.bU.data[b];}
function Qh(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.bU.data.length){if(a.bU.data[e]!==null&&Dl(a.bU.data[e]) instanceof Fc){f=IM(a.bU.data[e]);c=c+(f-a.bU.data[e].dP|0)|0;d=d+f|0;b=b+Dl(a.bU.data[e]).wy|0;}e=e+1|0;}if(!d)return 0;return (Bh(b-1|0,c)/d|0)+1|0;}
function Zv(a,b){var c;c=0;while(c<a.bU.data.length){if(a.bU.data[c]!==null&&Dl(a.bU.data[c]) instanceof Fc){EW(a.bU.data[c],b);if(!a.bU.data[c].m)a.bU.data[c]=null;}c=c+1|0;}}
function ADX(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(true){if(b>=a.bb.data.length){b=0;while(b<a.bU.data.length){if(a.bU.data[b]!==null){c=a.mf;d=a.bU.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bb.data[b]!==null)break;b=b+1|0;}c=a.mf;d=a.bb.data[b];e=1;$p=1;case 1:AKZ(c,d,e);if(C()){break _;}a.bb.data[b]=null;while(true){b=b+1|0;if(b>=a.bb.data.length){b=0;while(b<a.bU.data.length){if(a.bU.data[b]
!==null){c=a.mf;d=a.bU.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bb.data[b]===null)continue;else break;}c=a.mf;d=a.bb.data[b];e=1;continue _;case 2:AKZ(c,d,e);if(C()){break _;}a.bU.data[b]=null;while(true){b=b+1|0;if(b>=a.bU.data.length)break;if(a.bU.data[b]===null)continue;else{c=a.mf;d=a.bU.data[b];e=1;continue _;}}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function V9(a){return;}
function C_(){Hw.call(this);}
function D0(){var a=this;CI.call(a);a.bl=null;a.ez=0;a.eL=0;a.cH=null;}
var A9X=null;function A9Y(){var a=new D0();GW(a);return a;}
function GW(a){DI(a);a.bl=null;a.ez=176;a.eL=166;a.cH=Ck();}
function XU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WW(a);if(C()){break _;}e=(a.bh-a.ez|0)/2|0;f=(a.bv-a.eL|0)/2|0;$p=2;case 2:a.rf(d);if(C()){break _;}BW();Bq(180.0,1.0,0.0,0.0);Go();By();BW();Br(e,f,0.0);BN(1.0,1.0,1.0,1.0);V(32826);g=0;if(g>=a.cH.p){if(a.bl===null){X(32826);Dr();X(2896);X(2929);a.ki();V(2896);V(2929);By();return;}Br(0.0,
0.0,32.0);h=A9X;i=a.bS;j=a.H.bi;k=a.bl;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.cH,g);i=h.er;l=h.kC;m=h.iP;n=h.iR;i=i.fQ(l);if(i===null){l=h.qc();if(l>=0){X(2896);i=a.H.bi;j=a.H.bi;k=B(222);$p=5;continue _;}}j=A9X;k=a.bS;o=a.H.bi;$p=4;continue _;case 3:ABz(h,i,j,k,b,c);if(C()){break _;}JD(A9X,a.bS,a.H.bi,a.bl,b,c);X(32826);Dr();X(2896);X(2929);a.ki();V(2896);V(2929);By();return;case 4:ABz(j,k,o,i,m,n);if(C()){break _;}JD(A9X,a.bS,a.H.bi,i,m,n);if(K5(h,b,c)){X(2896);X(2929);l=h.iP;p=h.iR;I$(a,l,p,l
+16|0,p+16|0,(-2130706433),(-2130706433));V(2896);V(2929);}g=g+1|0;if(g>=a.cH.p){if(a.bl===null){X(32826);Dr();X(2896);X(2929);a.ki();V(2896);V(2929);By();return;}Br(0.0,0.0,32.0);h=A9X;i=a.bS;j=a.H.bi;k=a.bl;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.cH,g);i=h.er;l=h.kC;m=h.iP;n=h.iR;i=i.fQ(l);if(i===null){l=h.qc();if(l>=0){X(2896);i=a.H.bi;j=a.H.bi;k=B(222);$p=5;continue _;}}j=A9X;k=a.bS;o=a.H.bi;continue _;case 5:$z=ACG(j,k);if(C()){break _;}p=$z;DJ(i,p);Ct(a,m,n,(l%16|0)*16|0,(l/16|0)*16|0,16,16);V(2896);if
(K5(h,b,c)){X(2896);X(2929);l=h.iP;p=h.iR;I$(a,l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));V(2896);V(2929);}g=g+1|0;if(g>=a.cH.p){if(a.bl===null){X(32826);Dr();X(2896);X(2929);a.ki();V(2896);V(2929);By();return;}Br(0.0,0.0,32.0);h=A9X;i=a.bS;j=a.H.bi;k=a.bl;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.cH,g);i=h.er;l=h.kC;m=h.iP;n=h.iR;i=i.fQ(l);if(i===null){l=h.qc();if(l>=0){X(2896);i=a.H.bi;j=a.H.bi;k=B(222);continue _;}}j=A9X;k=a.bS;o=a.H.bi;$p=4;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,p,$p);}
function AK1(a,b,c){var d,e;d=0;while(true){if(d>=a.cH.p)return null;e=Z(a.cH,d);if(K5(e,b,c))break;d=d+1|0;}return e;}
function AIF(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(d&&d!=1)){e=AK1(a,b,c);if(e!==null){$p=1;continue _;}if(a.bl!==null){f=(a.bh-a.ez|0)/2|0;g=(a.bv-a.eL|0)/2|0;if(!(b>=f&&c>=g&&b<(f+a.ez|0)&&c<(g+a.ez|0))){h=a.H.e;if(!d){e=a.bl;$p=2;continue _;}if(d==1){e=D6(a.bl,1);$p=3;continue _;}}}}return;case 1:a:{AFt(e);if(C()){break _;}i=ALO(e);if(!(i===null&&a.bl===null)){if
(i!==null&&a.bl===null){g=!d?i.m:(i.m+1|0)/2|0;a.bl=e.er.i5(e.kC,g);if(i.m){$p=4;continue _;}h=null;$p=5;continue _;}if(i===null&&a.bl!==null&&e.rj(a.bl)){g=d?1:a.bl.m;if(g>e.er.fs())g=e.er.fs();h=D6(a.bl,g);$p=7;continue _;}if(i!==null&&a.bl!==null){if(!e.rj(a.bl)){if(i.bs!=a.bl.bs)break a;if(D4(a.bl)<=1)break a;g=i.m;if(g<=0)break a;if((g+a.bl.m|0)>D4(a.bl))break a;h=a.bl;h.m=h.m+g|0;D6(i,g);if(i.m){$p=8;continue _;}h=null;$p=9;continue _;}if(i.bs==a.bl.bs){if(i.bs==a.bl.bs){if(!d){g=a.bl.m;if(g>(e.er.fs()
-i.m|0))g=e.er.fs()-i.m|0;if(g>(D4(a.bl)-i.m|0))g=D4(a.bl)-i.m|0;D6(a.bl,g);if(!a.bl.m)a.bl=null;i.m=i.m+g|0;}else if(d==1){g=1;if(g>(e.er.fs()-i.m|0))g=e.er.fs()-i.m|0;if(g>(D4(a.bl)-i.m|0))g=D4(a.bl)-i.m|0;D6(a.bl,g);if(!a.bl.m)a.bl=null;i.m=i.m+g|0;}}}else if(a.bl.m<=e.er.fs()){h=a.bl;$p=6;continue _;}}}}return;case 2:AGF(h,e);if(C()){break _;}a.bl=null;if(d!=1)return;e=D6(a.bl,1);$p=3;case 3:AGF(h,e);if(C()){break _;}if(!a.bl.m)a.bl=null;return;case 4:e.E1();if(C()){break _;}return;case 5:AGl(e,h);if(C())
{break _;}$p=4;continue _;case 6:AGl(e,h);if(C()){break _;}a.bl=i;return;case 7:AGl(e,h);if(C()){break _;}if(!a.bl.m)a.bl=null;return;case 8:e.E1();if(C()){break _;}return;case 9:AGl(e,h);if(C()){break _;}$p=8;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AYG(a,b,c,d){return;}
function We(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.H.r.eS.by)return;d=a.H;e=null;$p=1;case 1:Zp(d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function WE(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bl===null)return;b=a.H.e;c=a.bl;$p=1;case 1:AGF(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function AZA(a){return 0;}
function AE7(){A9X=TX();}
function AKl(){var a=this;D0.call(a);a.i2=null;a.vb=null;a.xL=0.0;a.AW=0.0;}
function En(a){var b=new AKl();ARL(b,a);return b;}
function ARL(a,b){var c,d,e,f,g;GW(a);a.i2=ASn(a,2,2);a.vb=AVA();a.oi=1;U(a.cH,AUr(a,a.i2,a.vb,0,144,36));c=0;while(c<2){d=0;while(d<2){U(a.cH,DC(a,a.i2,d+(c*2|0)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.cH;f=new NU;QU(f,a,b,(Ul(b)-1|0)-d|0,8,8+(d*18|0)|0);f.DN=a;f.t8=d;U(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){U(a.cH,DC(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){U(a.cH,DC(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function AGw(a){var b,c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WE(a);if(C()){break _;}b=0;while(b<a.i2.kJ){c=Fq(a.i2,b);if(c!==null){d=a.H.e;$p=2;continue _;}b=b+1|0;}return;case 2:AGF(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=a.i2.kJ)break;c=Fq(a.i2,b);if(c===null)continue;else{d=a.H.e;continue _;}}return;default:Es();}}CM().s(a,b,c,d,$p);}
function ANJ(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=(-1);if(e<2&&f<2){h=Fq(a.i2,e+(f*2|0)|0);if(h!==null)g=h.bs;}d[e+(f*3|0)|0]=g;f=f+1|0;}e=e+1|0;}MR(a.vb,0,OR(St(),c));}
function AR1(a){D5(a.bS,B(376),86,16,4210752);}
function Zt(a,b,c,d){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:XU(a,b,c,d);if(C()){break _;}a.xL=b;a.AW=c;return;default:Es();}}CM().s(a,b,c,d,$p);}
function T4(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.H.bi;d=B(377);$p=1;case 1:$z=ACG(c,d);if(C()){break _;}e=$z;BN(1.0,1.0,1.0,1.0);DJ(a.H.bi,e);f=(a.bh-a.ez|0)/2|0;g=(a.bv-a.eL|0)/2|0;Ct(a,f,g,0,0,a.ez,a.eL);V(32826);V(2903);BW();b=f+51|0;e=g+75|0;Br(b,e,50.0);Co((-30.0),30.0,30.0);Bq(180.0,
0.0,0.0,1.0);h=a.H.e.da;i=a.H.e.q;j=a.H.e.E;k=b-a.xL;l=(e-50|0)-a.AW;Bq(135.0,0.0,1.0,0.0);Go();Bq((-135.0),0.0,1.0,0.0);m=l/40.0;Bq( -G$(m)*20.0,1.0,0.0,0.0);d=a.H.e;n=k/40.0;d.da=G$(n)*20.0;a.H.e.q=G$(n)*40.0;a.H.e.E= -G$(m)*20.0;Br(0.0,a.H.e.cF,0.0);d=A5F;c=a.H.e;m=0.0;n=0.0;o=0.0;b=0.0;p=1.0;$p=2;case 2:AK5(d,c,m,n,o,b,p);if(C()){break _;}a.H.e.da=h;a.H.e.q=i;a.H.e.E=j;By();Dr();X(32826);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Lh(){var a=this;Fo.call(a);a.gm=null;a.th=null;a.bN=null;a.B$=null;a.qb=0;a.AS=0.0;a.Es=0.0;}
var A9Z=null;function AKh(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=EU(a.bN.b5,a.bN.bw);g=ZS(f);h=U8(f);i=a.bN.ey;JQ(a.bN.ek);V(3042);BN(1.0,1.0,1.0,1.0);c=3553;f=a.bN.bi;j=
B(378);$p=1;case 1:$z=ACG(f,j);if(C()){break _;}d=$z;Ce(c,d);k=a.bN.e.F;a.ly=(-90.0);l=g/2|0;m=l-91|0;n=h-22|0;Ct(a,m,n,0,0,182,22);Ct(a,(m-1|0)+(k.bB*20|0)|0,n-1|0,0,22,24,22);c=3553;f=a.bN.bi;j=B(379);$p=2;case 2:$z=ACG(f,j);if(C()){break _;}d=$z;Ce(c,d);V(3042);C0(775,769);Ct(a,l-7|0,(h/2|0)-7|0,0,0,16,16);X(3042);o=((a.bN.e.c5/3|0)%2|0)!=1?0:1;if(a.bN.e.c5<10)o=0;p=a.bN.e.bI;q=a.bN.e.rS;Lv(a.th,Long_fromInt(Bh(a.qb,312871)));if(!AE0(a.bN.ce)){X(3042);V(32826);BW();Bq(180.0,1.0,0.0,0.0);Go();By();r=0;c=l
-90|0;m=(h-16|0)-3|0;if(r>=9){Dr();X(32826);if(!a.bN.r.kh)Cn(i,B(380),2,2,16777215);else{Cn(i,O(H(H(H(BQ(),B(381)),a.bN.kq),B(21))),2,2,16777215);Cn(i,Kq(a.bN),2,12,16777215);Cn(i,L7(a.bN),2,22,16777215);Cn(i,KL(a.bN),2,32,16777215);s=IX();t=Io();u=Long_sub(t,ID());j=O(H(CP(H(CP(H(CP(H(BQ(),B(382)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(383)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(384)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(385)));Gl(a,i,j,(g-Db(i,j)|0)
-2|0,2,14737632);f=O(H(CP(H(CP(H(BQ(),B(386)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(383)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(387)));Gl(a,i,f,(g-Db(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CZ(a.gm)&&m<10){if(Z(a.gm,m).nb<200)Cn(i,Z(a.gm,m).v2,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;}r=Yz(a.bN.e);n=0;v=h-32|0;w=l+91|0;d=S(p,4);while(n<10){if(r>0){x=(w-(n*8|0)|0)-9|0;c=S((n*2|0)+1|0,r);if(c<0)Ct(a,x,v,34,9,9,9);if(!c)Ct(a,x,v,
25,9,9,9);if(c>0)Ct(a,x,v,16,9,9,9);}y=0;if(o)y=1;z=m+(n*8|0)|0;c=d>0?v:v+D(a.th,2)|0;Ct(a,z,c,16+(y*9|0)|0,0,9,9);if(o){e=S((n*2|0)+1|0,q);if(e<0)Ct(a,z,c,70,0,9,9);if(!e)Ct(a,z,c,79,0,9,9);}e=S((n*2|0)+1|0,p);if(e<0)Ct(a,z,c,52,0,9,9);if(!e)Ct(a,z,c,61,0,9,9);n=n+1|0;}f=a.bN.e;j=A46;$p=4;continue _;case 3:ZY(a,r,n,m,b);if(C()){break _;}r=r+1|0;if(r>=9){Dr();X(32826);if(!a.bN.r.kh)Cn(i,B(380),2,2,16777215);else{Cn(i,O(H(H(H(BQ(),B(381)),a.bN.kq),B(21))),2,2,16777215);Cn(i,Kq(a.bN),2,12,16777215);Cn(i,L7(a.bN),
2,22,16777215);Cn(i,KL(a.bN),2,32,16777215);s=IX();t=Io();u=Long_sub(t,ID());j=O(H(CP(H(CP(H(CP(H(BQ(),B(382)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(383)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(384)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(385)));Gl(a,i,j,(g-Db(i,j)|0)-2|0,2,14737632);f=O(H(CP(H(CP(H(BQ(),B(386)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(383)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(387)));Gl(a,i,f,(g-Db(i,f)|0)
-2|0,12,14737632);}m=0;e=h-8|0;while(m<CZ(a.gm)&&m<10){if(Z(a.gm,m).nb<200)Cn(i,Z(a.gm,m).v2,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;continue _;case 4:a:{$z=ABX(f,j);if(C()){break _;}c=$z;if(c){c=QQ((a.bN.e.fx-2|0)*10.0/300.0)|0;ba=(QQ(a.bN.e.fx*10.0/300.0)|0)-c|0;x=0;d=c+ba|0;p=v-9|0;while(true){if(x>=d)break a;if(x>=c)Ct(a,m+(x*8|0)|0,p,25,18,9,9);else Ct(a,m+(x*8|0)|0,p,16,18,9,9);x=x+1|0;}}}X(3042);V(32826);BW();Bq(180.0,1.0,0.0,0.0);Go();By();r=0;c=l-90|0;m=(h-16|0)-3|0;if(r
>=9){Dr();X(32826);if(!a.bN.r.kh)Cn(i,B(380),2,2,16777215);else{Cn(i,O(H(H(H(BQ(),B(381)),a.bN.kq),B(21))),2,2,16777215);Cn(i,Kq(a.bN),2,12,16777215);Cn(i,L7(a.bN),2,22,16777215);Cn(i,KL(a.bN),2,32,16777215);s=IX();t=Io();u=Long_sub(t,ID());j=O(H(CP(H(CP(H(CP(H(BQ(),B(382)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(383)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(384)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(385)));Gl(a,i,j,(g-Db(i,j)|0)-2|0,2,14737632);f=O(H(CP(H(CP(H(BQ(),
B(386)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(383)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(387)));Gl(a,i,f,(g-Db(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CZ(a.gm)&&m<10){if(Z(a.gm,m).nb<200)Cn(i,Z(a.gm,m).v2,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function ZY(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.bN.e.F.bb.data[b];if(f===null)return;g=f.lp-e;b=S(g,0.0);if(b>0){BW();h=1.0+g/5.0;i=c+8|0;g=i;j=d+12|0;Br(g,j,0.0);Co(1.0/h,(h+1.0)/2.0,1.0);Br( -i, -j,0.0);}k=A9Z;l=a.bN.ey;m=a.bN.bi;$p=1;case 1:ABz(k,l,m,f,c,d);if(C()){break _;}if(b>0)By();JD(A9Z,a.bN.ey,a.bN.bi,f,c,d);return;default:
Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AFr(a){var b,c;a.qb=a.qb+1|0;b=0;while(b<a.gm.p){c=Z(a.gm,b);c.nb=c.nb+1|0;b=b+1|0;}}
function VW(){A9Z=TX();}
function Tp(){}
function Wc(){var a=this;E.call(a);a.hI=null;a.bC=null;a.hH=null;a.eb=null;a.f5=null;a.cJ=null;a.c0=0;a.c_=0;a.i9=0;a.wr=0;a.cn=null;a.AH=null;a.n3=0;a.m3=0;a.vi=0;a.uZ=0;a.oP=0;a.oQ=0;a.oR=0;a.rn=0;a.rm=0;a.ro=0;a.qp=0;a.rk=0;a.j_=0;a.u3=0;a.Dk=null;a.DM=null;a.qt=0;a.qd=0;a.As=0;a.qJ=0;a.oY=0;a.nv=null;a.Df=0;a.CS=0;a.pY=0.0;a.pX=0.0;a.pW=0.0;a.rV=0.0;a.pq=0;}
function A0R(a,b){var c=new Wc();ATA(c,a,b);return c;}
function ATA(a,b,c){var d,e,f,g,h,i,j;a.hI=Ck();a.eb=Ck();a.n3=0;a.qp=(-1);a.Dk=$rt_createIntArray(50000);a.DM=Om(64);a.nv=Ck();a.Df=0;a.CS=Hx(1);a.pY=(-9999.0);a.pX=(-9999.0);a.pW=(-9999.0);a.pq=0;a.cn=b;a.hH=c;a.wr=Hx(786432);a.m3=Hx(3);BW();ET(a.m3,4864);U9(a);DM();By();Bv();d=A35;a.vi=a.m3+1|0;ET(a.vi,4864);e=(-384);while(e<=384){f=(-384);while(f<=384){Bu(d);g=e+0|0;h=f+0|0;Bb(d,g,16.0,h);i=e+64|0;Bb(d,i,16.0,h);f=f+64|0;h=f;Bb(d,i,16.0,h);Bb(d,g,16.0,h);Bn(d);}e=e+64|0;}DM();a.uZ=a.m3+2|0;ET(a.uZ,4864);Bu(d);f
=(-384);while(f<=384){j=(-384);while(j<=384){g=f+64|0;h=j+0|0;Bb(d,g,(-16.0),h);i=f+0|0;Bb(d,i,(-16.0),h);j=j+64|0;h=j;Bb(d,i,(-16.0),h);Bb(d,g,(-16.0),h);}f=f+64|0;}Bn(d);DM();}
function U9(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;b=new Df;Bv();c=A35;Bu(c);d=0;while(d<1500){a:{e=L(b)*2.0-1.0;f=L(b)*2.0-1.0;g=L(b)*2.0-1.0;h=0.25+L(b)*0.25;i=e*e+f*f+g*g;if(i<1.0&&i>0.01){j=1.0/DL(i);e=e*j;f=f*j;g=g*j;k=e*100.0;l=f*100.0;m=g*100.0;n=CB(e,g);o=Fy(n);p=FI(n);q=CB(DL(e*e+g*g),f);r=Fy(q);s=FI(q);t=Cb(b)*3.141592653589793*2.0;u=Fy(t);v=FI(t);w=0;g=0.0*s;x=0.0*r;while(true){if(w>=4)break a;y=((w&2)-1|0)*h;w=w+1|0;z=((w&2)-1|0)*h;j=y*v-z*u;ba=z*v+y*u;bb=j*r+g;bc
=x-j*s;bd=bc*o-ba*p;be=ba*o+bc*p;Bb(c,k+bd,l+bb,m+be);}}}d=d+1|0;}Bn(c);}
function N8(a,b){if(a.bC!==null)AFL(a.bC,a);a.pY=(-9999.0);a.pX=(-9999.0);a.pW=(-9999.0);A5F.mI=b;a.bC=b;a.AH=AXN(b);if(b!==null){AIf(b,a);JA(a);}}
function JA(a){var b,c,d,e,f,g,h,i;a:{J();AFh(A4l,a.cn.r.lE);a.qp=a.cn.r.ha;if(a.cJ!==null){b=0;while(true){if(b>=a.cJ.data.length)break a;ALX(a.cJ.data[b]);b=b+1|0;}}}b=64<<(3-a.qp|0);if(b>400)b=400;b=(b/16|0)+1|0;a.c0=b;a.c_=8;a.i9=b;a.cJ=N(G6,Bh(Bh(a.c0,a.c_),a.i9));a.f5=N(G6,Bh(Bh(a.c0,a.c_),a.i9));c=0;d=0;a.oP=0;a.oQ=0;a.oR=0;a.rn=a.c0;a.rm=a.c_;a.ro=a.i9;e=0;while(e<a.eb.p){Z(a.eb,e).h4=0;e=e+1|0;}DB(a.eb);f=0;while(f<a.c0){g=0;while(g<a.c_){h=0;while(h<a.i9){if(a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0]!==
null)Fm(a.hI,a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0].fG);a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0]=A1j(a.bC,a.hI,f*16|0,g*16|0,h*16|0,16,a.wr+c|0);a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0].Fj=0;a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0].vg=1;a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0].eU=1;i=a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0];b=d+1|0;i.Eb=d;Jg(a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0]);a.f5.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0]=a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0];U(a.eb,a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0]);c=c+3|0;h=h+1
|0;d=b;}g=g+1|0;}f=f+1|0;}if(a.bC!==null){i=a.bC.bc;P8(a,I(i.c),I(i.j),I(i.d));Nf(a.f5,AQZ(i));}}
function Yc(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:ALB(A9I,a.bC,a.hH,a.cn.ey,a.cn.e,d);ACo(A5F,a.bC,a.hH,a.cn.ey,a.cn.e,a.cn.r,d);a.rk=0;a.j_=0;a.u3=0;e=a.bC.bc;f=e.b6;g=e.c-e.b6;h=d;A90=f+g*h;A91=e.bP+(e.j-e.bP)*h;A92=e.b7+(e.d-e.b7)*h;A93=e.b6+(e.c-e.b6)*h;A94=e.bP+(e.j-e.bP)*h;A95=e.b7+(e.d-e.b7)*h;i=a.bC.dt;a.rk=i.p;j=0;while(true){if(j>=i.p){j
=0;if(j>=a.hI.p)return;b=A9I;c=Z(a.hI,j);$p=1;continue _;}k=Z(i,j);if(Pi(k,b)&&KJ(c,k.G)){if(k!==a.bC.bc)break;if(a.cn.r.cf)break;}j=j+1|0;}a.j_=a.j_+1|0;e=A5F;$p=2;continue _;case 1:UP(b,c,d);if(C()){break _;}j=j+1|0;if(j>=a.hI.p)return;b=A9I;c=Z(a.hI,j);continue _;case 2:AHM(e,k,d);if(C()){break _;}while(true){j=j+1|0;if(j>=i.p){j=0;if(j>=a.hI.p)return;b=A9I;c=Z(a.hI,j);$p=1;continue _;}k=Z(i,j);if(!Pi(k,b))continue;if(!KJ(c,k.G))continue;if(k!==a.bC.bc)break;if(!a.cn.r.cf)continue;else break;}a.j_=a.j_+1
|0;e=A5F;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AF_(a){var b;b=new Bc;Ba(b);return O(Bd(H(Bd(H(Bd(H(Bd(H(Bd(H(b,B(388)),a.qJ),B(17)),a.qt),B(389)),a.qd),B(390)),a.As),B(391)),a.oY));}
function TY(a){var b;b=new Bc;Ba(b);return O(Bd(H(Bd(H(Bd(H(Bd(H(b,B(392)),a.j_),B(17)),a.rk),B(393)),a.u3),B(394)),(a.rk-a.u3|0)-a.j_|0));}
function P8(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;c=b+(-8)|0;d=d+(-8)|0;a.oP=2147483647;a.oQ=2147483647;a.oR=2147483647;a.rn=(-2147483648);a.rm=(-2147483648);a.ro=(-2147483648);e=a.c0*16|0;f=e/2|0;g=0;h=e-1|0;while(g<a.c0){i=g*16|0;j=(i+f|0)-c|0;if(j<0)j=j-h|0;i=i-Bh(j/e|0,e)|0;if(i<a.oP)a.oP=i;if(i>a.rn)a.rn=i;k=0;while(k<a.i9){l=k*16|0;m=(l+f|0)-d|0;if(m<0)m=m-h|0;j=l-Bh(m/e|0,e)|0;if(j<a.oR)a.oR=j;if(j>a.ro)a.ro=j;n=0;while(n<a.c_){o=n*16|0;if(o<a.oQ)a.oQ=o;if(o>a.rm)a.rm=o;p=a.cJ.data[Bh(Bh(k,a.c_)+n|0,
a.c0)+g|0];q=p.h4;Po(p,i,o,j);if(!q&&p.h4)U(a.eb,p);n=n+1|0;}k=k+1|0;}g=g+1|0;}}
function RC(a,b,c,d){var e,f,g;if(a.cn.r.ha!=a.qp)JA(a);if(!c){a.qt=0;a.qd=0;a.As=0;a.qJ=0;a.oY=0;}e=b.c-a.pY;f=b.j-a.pX;g=b.d-a.pW;if(e*e+f*f+g*g>16.0){a.pY=b.c;a.pX=b.j;a.pW=b.d;P8(a,I(b.c),I(b.j),I(b.d));Nf(a.f5,AQZ(b));}return 0+Uv(a,0,a.f5.data.length,c,d)|0;}
function Uv(a,b,c,d,e){var f,g,h,i,j,k,l;DB(a.nv);f=0;while(b<c){if(!d){a.qt=a.qt+1|0;if(a.f5.data[b].gf.data[d])a.oY=a.oY+1|0;else if(a.f5.data[b].eU)a.qJ=a.qJ+1|0;else a.qd=a.qd+1|0;}if(!a.f5.data[b].gf.data[d]&&a.f5.data[b].eU&&a.f5.data[b].vg&&M4(a.f5.data[b],d)>=0){U(a.nv,a.f5.data[b]);f=f+1|0;}b=b+1|0;}g=a.cn.e;h=g.b6+(g.c-g.b6)*e;i=g.bP+(g.j-g.bP)*e;j=g.b7+(g.d-g.b7)*e;k=0;while(k<a.nv.p){l=Z(a.nv,k);BW();Br(l.yw-h,l.AT-i,l.z8-j);E4(M4(l,d));By();k=k+1|0;}return f;}
function GJ(a){a.n3=a.n3+1|0;}
function YL(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:X(3553);c=Ms(a.bC,b);d=c.t;e=c.v;f=c.s;if(a.cn.r.d5){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}Fe(d,e,f);Bv();h=A35;FB(0);V(2912);Fe(d,e,f);E4(a.vi);V(3553);X(2912);X(3008);V(3042);C0(1,1);BW();BN(1.0,1.0,1.0,1.0);Br(0.0,0.0,0.0);Bq(0.0,0.0,0.0,1.0);Bq(Gp(a.bC,b)*360.0,
1.0,0.0,0.0);i=3553;c=a.hH;j=B(395);$p=1;case 1:$z=ACG(c,j);if(C()){break _;}k=$z;Ce(i,k);Bu(h);F(h,(-30.0),100.0,(-30.0),0.0,0.0);F(h,30.0,100.0,(-30.0),1.0,0.0);F(h,30.0,100.0,30.0,1.0,1.0);F(h,(-30.0),100.0,30.0,0.0,1.0);Bn(h);i=3553;c=a.hH;j=B(396);$p=2;case 2:$z=ACG(c,j);if(C()){break _;}k=$z;Ce(i,k);Bu(h);F(h,(-20.0),(-100.0),20.0,1.0,1.0);F(h,20.0,(-100.0),20.0,0.0,1.0);F(h,20.0,(-100.0),(-20.0),0.0,0.0);F(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Bn(h);X(3553);g=AEo(a.bC,b);if(g>0.0){BN(g,g,g,g);E4(a.m3);}BN(1.0,
1.0,1.0,1.0);X(3042);V(3008);V(2912);By();Fe(d*0.20000000298023224+0.03999999910593033,e*0.20000000298023224+0.03999999910593033,f*0.6000000238418579+0.10000000149011612);X(3553);E4(a.uZ);V(3553);FB(1);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function UE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.cn.r.lE){$p=2;continue _;}X(2884);c=a.cn.e.bP;d=a.cn.e.j-a.cn.e.bP;e=b;f=c+d*e;g=32;Bv();h=A35;i=3553;j=a.hH;k=B(397);$p=1;case 1:$z
=ACG(j,k);if(C()){break _;}l=$z;Ce(i,l);V(3042);C0(770,771);j=PU(a.bC,b);m=j.t;n=j.v;o=j.s;if(a.cn.r.d5){p=m*30.0;m=(p+n*59.0+o*11.0)/100.0;n=(p+n*70.0)/100.0;o=(p+o*70.0)/100.0;}q=a.bC.bc.bH+(a.bC.bc.c-a.bC.bc.bH)*e+(a.n3+b)*0.029999999329447746;c=a.bC.bc.bG+(a.bC.bc.d-a.bC.bc.bG)*e;i=I(q/2048.0);l=I(c/2048.0);d=q-(i*2048|0);c=c-(l*2048|0);p=120.0-f+0.33000001311302185;r=d*4.8828125E-4;s=c*4.8828125E-4;Bu(h);FE(h,m,n,o,0.800000011920929);d=p;t=(-256);while(t<256){u=(-256);while(u<256){v=t+0|0;c=v;w=u+g|0;e
=w;q=v*4.8828125E-4+r;x=w*4.8828125E-4+s;F(h,c,d,e,q,x);v=t+g|0;y=v;z=v*4.8828125E-4+r;F(h,y,d,e,z,x);u=u+0|0;e=u;x=u*4.8828125E-4+s;F(h,y,d,e,z,x);F(h,c,d,e,q,x);u=w;}t=t+g|0;}Bn(h);BN(1.0,1.0,1.0,1.0);X(3042);V(2884);return;case 2:WR(a,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function WR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:X(2884);c=a.cn.e.bP;d
=a.cn.e.j-a.cn.e.bP;e=b;f=c+d*e;Bv();g=A35;h=12.0;c=(a.bC.bc.bH+(a.bC.bc.c-a.bC.bc.bH)*e+(a.n3+b)*0.029999999329447746)/12.0;d=(a.bC.bc.bG+(a.bC.bc.d-a.bC.bc.bG)*e)/12.0+0.33000001311302185;i=108.0-f+0.33000001311302185;j=I(c/2048.0);k=I(d/2048.0);e=c-(j*2048|0);d=d-(k*2048|0);l=3553;m=a.hH;n=B(397);$p=1;case 1:$z=ACG(m,n);if(C()){break _;}j=$z;Ce(l,j);V(3042);C0(770,771);m=PU(a.bC,b);o=m.t;p=m.v;q=m.s;if(a.cn.r.d5){b=o*30.0;o=(b+p*59.0+q*11.0)/100.0;p=(b+p*70.0)/100.0;q=(b+q*70.0)/100.0;}r=I(e)*0.00390625;b
=I(d)*0.00390625;s=e-I(e);t=d-I(d);Co(h,1.0,h);u=0;k=S(i,(-5.0));v=i+0.0;w=S(i,5.0);f=i+4.0;x=f-9.765625E-4;y=f;while(u<2){if(u)ER(1,1,1,1);else ER(0,0,0,0);z=(-2);while(z<=3){ba=(-2);while(ba<=3){Bu(g);bb=z*8|0;bc=ba*8|0;bd=bb-s;be=bc-t;if(k>0){FE(g,o*0.699999988079071,p*0.699999988079071,q*0.699999988079071,0.800000011920929);CX(g,0.0,(-1.0),0.0);bf=bd+0.0;c=be+8.0;d=(bb+0.0)*0.00390625+r;e=(bc+8.0)*0.00390625+b;F(g,bf,v,c,d,e);bg=bd+8.0;bh=(bb+8.0)*0.00390625+r;F(g,bg,v,c,bh,e);c=be+0.0;e=(bc+0.0)*0.00390625
+b;F(g,bg,v,c,bh,e);F(g,bf,v,c,d,e);}if(w<=0){FE(g,o,p,q,0.800000011920929);CX(g,0.0,1.0,0.0);c=bd+0.0;d=be+8.0;e=(bb+0.0)*0.00390625+r;bg=(bc+8.0)*0.00390625+b;F(g,c,x,d,e,bg);bh=bd+8.0;bf=(bb+8.0)*0.00390625+r;F(g,bh,x,d,bf,bg);d=be+0.0;bg=(bc+0.0)*0.00390625+b;F(g,bh,x,d,bf,bg);F(g,c,x,d,e,bg);}a:{FE(g,o*0.8999999761581421,p*0.8999999761581421,q*0.8999999761581421,0.800000011920929);if(z>(-1)){CX(g,(-1.0),0.0,0.0);bi=0;d=be+8.0;bg=(bc+8.0)*0.00390625+b;bh=be+0.0;bf=(bc+0.0)*0.00390625+b;while(true){if(bi
>=8)break a;f=bi;c=bd+f+0.0;e=(bb+f+0.5)*0.00390625+r;F(g,c,v,d,e,bg);F(g,c,y,d,e,bg);F(g,c,y,bh,e,bf);F(g,c,v,bh,e,bf);bi=bi+1|0;}}}b:{if(z<=1){CX(g,1.0,0.0,0.0);bi=0;e=be+8.0;bh=(bc+8.0)*0.00390625+b;bf=be+0.0;c=(bc+0.0)*0.00390625+b;while(true){if(bi>=8)break b;f=bi;d=bd+f+1.0-9.765625E-4;bg=(bb+f+0.5)*0.00390625+r;F(g,d,v,e,bg,bh);F(g,d,y,e,bg,bh);F(g,d,y,bf,bg,c);F(g,d,v,bf,bg,c);bi=bi+1|0;}}}c:{FE(g,o*0.800000011920929,p*0.800000011920929,q*0.800000011920929,0.800000011920929);if(ba>(-1)){CX(g,0.0,0.0,
(-1.0));l=0;c=bd+0.0;e=(bb+0.0)*0.00390625+r;bh=bd+8.0;bf=(bb+8.0)*0.00390625+r;while(true){if(l>=8)break c;f=l;d=be+f+0.0;bg=(bc+f+0.5)*0.00390625+b;F(g,c,y,d,e,bg);F(g,bh,y,d,bf,bg);F(g,bh,v,d,bf,bg);F(g,c,v,d,e,bg);l=l+1|0;}}}d:{if(ba<=1){CX(g,0.0,0.0,1.0);l=0;c=bd+0.0;e=(bb+0.0)*0.00390625+r;bh=bd+8.0;bf=(bb+8.0)*0.00390625+r;while(true){if(l>=8)break d;f=l;d=be+f+1.0-9.765625E-4;bg=(bc+f+0.5)*0.00390625+b;F(g,c,y,d,e,bg);F(g,bh,y,d,bf,bg);F(g,bh,v,d,bf,bg);F(g,c,v,d,e,bg);l=l+1|0;}}}Bn(g);ba=ba+1|0;}z=
z+1|0;}u=u+1|0;}BN(1.0,1.0,1.0,1.0);X(3042);V(2884);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function ADl(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.eb;e=new Sg;e.vJ=b;OH(d,e);f=a.eb.p-1|0;g=a.eb.p;h=0;a:{while(h<g){d=Z(a.eb,f-h|0);if(!c){if(F5(d,b)<=1024.0)break a;if(!d.eU){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.eU)break a;h=h+1|0;}return a.eb.p?0:1;}$p=1;case 1:YQ(d);if(C()){break _;}GU(a.eb,d);d.h4=0;a:{while(true){h=h+1|0;if(h>=g)break;d=Z(a.eb,f-h|0);if
(!c){if(F5(d,b)<=1024.0)break a;if(!d.eU){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.eU)break a;}return a.eb.p?0:1;}continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AA2(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{Bv();g=A35;V(3042);V(3008);C0(770,1);BN(1.0,1.0,1.0,(Bm(Long_toNumber(B2())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(!d){if(a.rV<=0.0)break a;C0(774,768);e=a.hH;h=B(171);$p=2;continue _;}if(e!==null){C0(770,771);i=Bm(Long_toNumber(B2())/
100.0)*0.20000000298023224+0.800000011920929;BN(i,i,i,Bm(Long_toNumber(B2())/200.0)*0.20000000298023224+0.5);b=a.hH;e=B(171);$p=1;continue _;}}X(3042);X(3008);return;case 1:$z=ACG(b,e);if(C()){break _;}j=$z;Ce(3553,j);X(3042);X(3008);return;case 2:$z=ACG(e,h);if(C()){break _;}k=$z;Ce(3553,k);BN(1.0,1.0,1.0,0.5);BW();e=a.bC;d=c.hj;k=c.hk;j=c.hl;$p=3;case 3:$z=X9(e,d,k,j);if(C()){break _;}j=$z;if(j<=0)h=null;else{J();h=A39.data[j];}X(3008);Ml((-3.0),(-3.0));V(32823);Bu(g);l=b.b6;m=b.c-b.b6;n=f;Et(g, -(l+m*n),
 -(b.bP+(b.j-b.bP)*n), -(b.b7+(b.d-b.b7)*n));YW(g);if(h===null){J();h=A4d;}b=a.AH;d=c.hj;k=c.hk;j=c.hl;o=240+(a.rV*10.0|0)|0;$p=4;case 4:AHg(b,h,d,k,j,o);if(C()){break _;}Bn(g);Et(g,0.0,0.0,0.0);Ml(0.0,0.0);X(32823);V(3008);FB(1);By();X(3042);X(3008);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ABy(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!d&&!c.j1){V(3042);C0(770,771);BN(0.0,0.0,0.0,0.4000000059604645);X(3553);FB(0);e=a.bC;d=c.hj;g=c.hk;h=c.hl;$p=1;continue _;}return;case 1:$z=X9(e,d,g,h);if(C()){break _;}g=$z;if(g<=0){FB(1);V(3553);X(3042);return;}i=b.b6;j=b.c-b.b6;k=f;i=i+j*k;j=b.bP+(b.j-b.bP)*k;k=b.b7+(b.d-b.b7)*k;J();b=A39.data[g];e
=a.bC;d=c.hj;g=c.hk;h=c.hl;$p=2;case 2:$z=b.nr(e,d,g,h);if(C()){break _;}b=$z;b=QD(Da(b,0.0020000000949949026,0.0020000000949949026,0.0020000000949949026), -i, -j, -k);Bv();c=A35;Fs(c,3);Bb(c,b.N,b.I,b.O);Bb(c,b.R,b.I,b.O);Bb(c,b.R,b.I,b.S);Bb(c,b.N,b.I,b.S);Bb(c,b.N,b.I,b.O);Bn(c);Fs(c,3);Bb(c,b.N,b.Q,b.O);Bb(c,b.R,b.Q,b.O);Bb(c,b.R,b.Q,b.S);Bb(c,b.N,b.Q,b.S);Bb(c,b.N,b.Q,b.O);Bn(c);Fs(c,1);Bb(c,b.N,b.I,b.O);Bb(c,b.N,b.Q,b.O);Bb(c,b.R,b.I,b.O);Bb(c,b.R,b.Q,b.O);Bb(c,b.R,b.I,b.S);Bb(c,b.R,b.Q,b.S);Bb(c,b.N,
b.I,b.S);Bb(c,b.N,b.Q,b.S);Bn(c);FB(1);V(3553);X(3042);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function P_(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=FP(b,16);i=FP(c,16);j=FP(d,16);k=FP(e,16);l=FP(f,16);m=FP(g,16);while(h<=k){n=h%a.c0|0;if(n<0)n=n+a.c0|0;o=i;while(o<=l){p=o%a.c_|0;if(p<0)p=p+a.c_|0;q=j;while(q<=m){r=q%a.i9|0;if(r<0)r=r+a.i9|0;s=Bh(Bh(r,a.c_)+p|0,a.c0)+n|0;t=a.cJ.data[s];if(!t.h4)U(a.eb,t);Jg(t);q=q+1|0;}o=o+1|0;}h=h+1|0;}}
function Ow(a,b,c,d){P_(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AJd(a,b,c,d,e,f,g){P_(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function AL1(a,b,c){var d;d=0;while(d<a.cJ.data.length){if(!ACJ(a.cJ.data[d])&&!(a.cJ.data[d].eU&&(d+a.pq|0)&15))AMo(a.cJ.data[d],b);d=d+1|0;}a.pq=a.pq+1|0;}
function YA(a,b,c,d,e,f,g){return;}
function AC_(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bC.bc.c-c;j=a.bC.bc.j-d;k=a.bC.bc.d-e;if(i*i+j*j+k*k<=256.0){if(b===B(205)){b=a.cn.cG;l=new Pz;EP(l,a.bC,c,d,e,f,g,h);l.g_=1.0;l.ho=1.0;l.hw=1.0;l.ev=32;Dx(l,0.019999999552965164,0.019999999552965164);l.cZ=l.cZ*(L(l.l)*0.6000000238418579+0.20000000298023224);l.f=f*0.20000000298023224+(BI()*2.0-1.0)*0.019999999552965164;l.h=g*0.20000000298023224+(BI()*2.0-1.0)*0.019999999552965164;l.g=h*0.20000000298023224+(BI()*2.0-1.0)*0.019999999552965164;l.b_=8.0/(BI()*0.8+
0.2)|0;DS(b,l);}else if(b===B(248))DS(a.cn.cG,AXG(a.bC,c,d,e,1.0));else if(b===B(215)){b=a.cn.cG;l=new N9;EP(l,a.bC,c,d,e,f,g,h);l.f=f+(BI()*2.0-1.0)*0.05000000074505806;l.h=g+(BI()*2.0-1.0)*0.05000000074505806;l.g=h+(BI()*2.0-1.0)*0.05000000074505806;m=L(l.l)*0.30000001192092896+0.699999988079071;l.hw=m;l.ho=m;l.g_=m;l.cZ=L(l.l)*L(l.l)*6.0+1.0;l.b_=(16.0/(L(l.l)*0.8+0.2)|0)+2|0;DS(b,l);}else if(b!==B(249)){if(b===B(246))DS(a.cn.cG,A2a(a.bC,c,d,e));else if(b===B(206))DS(a.cn.cG,A14(a.bC,c,d,e,f,g,h));else if
(b===B(247))DS(a.cn.cG,AXG(a.bC,c,d,e,2.5));}else{b=a.cn.cG;l=new MC;EP(l,a.bC,c,d,e,f,g,h);l.f=l.f*0.009999999776482582+f;l.h=l.h*0.009999999776482582+g;l.g=l.g*0.009999999776482582+h;L(l.l);L(l.l);L(l.l);L(l.l);L(l.l);L(l.l);l.Aq=l.cZ;l.hw=1.0;l.ho=1.0;l.g_=1.0;l.b_=(8.0/(BI()*0.8+0.2)|0)+4|0;l.nB=1;l.ev=48;DS(b,l);}}}
function AZb(a,b){return;}
function ANq(a,b){return;}
function RN(a){var b;b=0;while(b<a.cJ.data.length){if(a.cJ.data[b].m1){if(!a.cJ.data[b].h4)U(a.eb,a.cJ.data[b]);Jg(a.cJ.data[b]);}b=b+1|0;}}
function I7(){var a=this;E.call(a);a.wG=null;a.jx=null;a.gt=null;a.kL=null;a.y9=null;a.uq=null;a.q7=0;a.Ax=0;}
var A96=0;var A34=null;function ACG(a,b){var c,d,e,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Cz(A34,b);if(c!==null)return c.f4;try{AAD(a.jx);SU(a.jx);d=N7(a.jx,0);if(!Lk(b,B(398))){e=IG(b);$p=1;continue _;}a.q7=1;e=IG(JU(b,7));$p=2;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){}else{throw $$e;}}b=new B5;Bl(b,B(399));M(b);case 1:a:{try{$z=U4(a,e);if(C()){break _;}c=$z;JY(a,c,d);A96=0;Oj(A34,b,CG(d));}catch($$e){$$je
=Bf($$e);if($$je instanceof BU){break a;}else{throw $$e;}}return d;}b=new B5;Bl(b,B(399));M(b);case 2:a:{try{$z=U4(a,e);if(C()){break _;}c=$z;JY(a,c,d);a.q7=0;Oj(A34,b,CG(d));}catch($$e){$$je=Bf($$e);if($$je instanceof BU){break a;}else{throw $$e;}}return d;}b=new B5;Bl(b,B(399));M(b);default:Es();}}CM().s(a,b,c,d,e,$p);}
function ACM(a,b){var c;D3(a.jx);SU(a.jx);c=N7(a.jx,0);JY(a,b,c);BK(a.wG,CG(c),b);return c;}
function JY(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;DJ(a,c);if(!A96){DQ(3553,10241,9728);DQ(3553,10240,9728);}else{DQ(3553,10241,9986);DQ(3553,10240,9728);DQ(3553,33085,4);}if(a.Ax){DQ(3553,10241,9729);DQ(3553,10240,9729);}if(!a.q7){DQ(3553,10242,10497);DQ(3553,10243,10497);}else{DQ(3553,10242,10496);DQ(3553,10243,10496);}d=b.u5;e=b.z$;f=b.r7;g=$rt_createByteArray(Bh(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if
(a.uq!==null&&a.uq.d5){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)|0)/100|0;m=(o+(m*70|0)|0)/100|0;n=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}a:{D3(a.gt);Q4(a.gt,g);b=a.gt;D_(b,0);Lf(b,h.length);Pw(3553,0,6408,d,e,0,6408,5121,a.gt);if(A96){p=1;while(true){if(p>4)break a;o=d>>(p-1|0);q=d>>p;r=e>>p;D3(a.kL);s=0;while(s<q){t=0;while(t<r){b=a.gt;c=s*2|0;i=c+0|0;k=t*2|0;n=Bh(k+0|0,o);u=Jd(b,(i+n|0)*4|0);b=a.gt;c=c+1|0;v=Jd(b,(c+n|0)*4|0);b=a.gt;k=
Bh(k+1|0,o);w=Jd(b,(c+k|0)*4|0);x=Jd(a.gt,(i+k|0)*4|0);y=Jy(a,Jy(a,u,v),Jy(a,w,x));WL(a.kL,(s+Bh(t,q)|0)*4|0,y);t=t+1|0;}s=s+1|0;}Pw(3553,p,6408,q,r,0,6408,5121,a.kL);z=a.gt;a.gt=a.kL;a.kL=z;p=p+1|0;}}}}
function Zy(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=B(363);$p=1;case 1:$z=ACG(a,b);if(C()){break _;}d=$z;return d;default:Es();}}CM().s(a,b,c,d,$p);}
function F6(a,b){U(a.y9,b);b.nG();}
function Jy(a,b,c){return ((((b&(-16777216))>>24&255)+((c&(-16777216))>>24&255)|0)>>1<<24)+(((b&16711422)+(c&16711422)|0)>>1)|0;}
function U4(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAg(b);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,$p);}
function DJ(a,b){if(b<0)return;Ce(3553,b);}
function Za(){A96=0;}
function Sm(){var a=this;E.call(a);a.qs=null;a.u4=0;a.ry=0;}
function A97(a,b,c){var d=new Sm();AJe(d,a,b,c);return d;}
function AJe(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.qs=$rt_createIntArray(256);a.u4=0;e=IG(c);$p=1;case 1:$z=AAg(e);if(C()){break _;}f
=$z;g=f.u5;e=f.r7;h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+Bh(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.qs.data[h]=k+2|0;h=h+1|0;}a.u4=ACM(d,f);a.ry=Hx(288);Bv();p=A35;q=0;while(q<256){ET(a.ry+q|0,4864);Bu(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;F(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;F(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;F(p,7.989999771118164,0.0,0.0,x,y);F(p,0.0,0.0,0.0,u,y);Bn(p);DM();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.d5){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}ET((a.ry+256|0)+l|0,4864);Fe(ba/255.0,bb/255.0,bc/255.0);DM();l=l+1|0;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function Cn(a,b,c,d,e){PD(a,b,c+1|0,d+1|0,e,1);D5(a,b,c,d,e);}
function D5(a,b,c,d,e){PD(a,b,c,d,e,0);}
function PD(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Ce(3553,a.u4);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BN(g,h,i,j);BW();Br(c,d,0.0);k=0;while(k<BE(b)){c=k;while(true){d=BE(b);k=c+1|0;if(d<=k)break;if(Cr(b,c)!=167)break;l=QW(B(400),Cr(AFf(b),k));c=c+2|0;}if(c<BE(b)){m=Rx(Cr(b,c));if(m>=0){E4((a.ry+m|0)+32|0);Br(a.qs.data[m+32|0],0.0,0.0);}}}By();}
function Db(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<BE(b)){if(Cr(b,d)==167)d=d+1|0;else{e=Rx(Cr(b,d));if(e>=0)c=c+a.qs.data[e+32|0]|0;}d=d+1|0;}return c;}
function Nz(){var a=this;E.call(a);a.B9=0;a.B8=0;}
function A98(){var a=new Nz();AZh(a);return a;}
function AZh(a){return;}
function Ut(a){AHn(1);a.B9=0;a.B8=0;}
function AAV(a){JG();KE();AHn(0);}
function AFO(){var a=this;DZ.call(a);a.nC=null;a.pA=null;a.na=null;a.rb=null;a.rs=0;}
function A0y(){var a=new AFO();AU4(a);return a;}
function AU4(a){J();Gu(a,A5c.W+1|0);a.nC=$rt_createFloatArray(256);a.pA=$rt_createFloatArray(256);a.na=$rt_createFloatArray(256);a.rb=$rt_createFloatArray(256);a.rs=0;a.uF=2;}
function AR4(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.rs=a.rs+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=c-2|0;while(e<=c){f=b&15;g=e&15;d=d+a.nC.data[f+(g*16|0)|0];e=e+1|0;}h=a.pA.data;i=b+(c*16|0)|0;h[i]=d/3.200000047683716+a.na.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}b=0;while(b<16){c=0;while(c<16){j=a.na.data;i=b+(c*16|0)|0;j[i]=j[i]+a.rb.data[i]*0.05000000074505806;if(a.na.data[i]<0.0)a.na.data[i]=0.0;j=a.rb.data;j[i]=j[i]-0.30000001192092896;if(BI()<0.2)a.rb.data[i]=0.5;c=c+1|0;}b=b+1|0;}j=a.pA;a.pA=a.nC;a.nC
=j;c=0;while(c<256){d=a.nC.data[(c-(a.rs*16|0)|0)&255];if(d>1.0)d=1.0;if(d<0.0)d=0.0;k=d*d;i=32.0+k*32.0|0;l=50.0+k*64.0|0;m=255;n=146.0+k*50.0|0;if(a.lk){b=i*30|0;i=((b+(l*59|0)|0)+2805|0)/100|0;l=(b+(l*70|0)|0)/100|0;m=(b+17850|0)/100|0;}j=a.c9.data;b=c*4|0;j[b+0|0]=i<<24>>24;a.c9.data[b+1|0]=l<<24>>24;a.c9.data[b+2|0]=m<<24>>24;a.c9.data[b+3|0]=n<<24>>24;c=c+1|0;}}
function XX(){var a=this;DZ.call(a);a.m9=null;a.pL=null;a.iT=null;a.q2=null;a.rI=0;}
function A19(){var a=new XX();AUo(a);return a;}
function AUo(a){J();Gu(a,A5d.W+1|0);a.m9=$rt_createFloatArray(256);a.pL=$rt_createFloatArray(256);a.iT=$rt_createFloatArray(256);a.q2=$rt_createFloatArray(256);a.rI=0;a.uF=2;}
function AYa(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.rI=a.rI+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bm(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bm(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){j=(g+e|0)&15;h=(i+f|0)&15;d=d+a.m9.data[j+(h*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.pL.data;l=b+(c*16|0)|0;d=d/10.0;m=a.iT.data;e=(b+0|0)&15;j=((c+0|0)&15)*16|0;n=m[e+j|0];m=a.iT.data;h=h&15;n=n+m[h+j|0];m=a.iT.data;c=c+1|0;j=(c&15)*16|0;k[l]
=d+(n+m[h+j|0]+a.iT.data[e+j|0])/4.0*0.800000011920929;m=a.iT.data;m[l]=m[l]+a.q2.data[l]*0.009999999776482582;if(a.iT.data[l]<0.0)a.iT.data[l]=0.0;m=a.q2.data;m[l]=m[l]-0.05999999865889549;if(BI()<0.005)a.q2.data[l]=1.5;}b=b+1|0;}m=a.pL;a.pL=a.m9;a.m9=m;c=0;while(c<256){d=a.m9.data[(c-((a.rI/3|0)*16|0)|0)&255]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;j=d*100.0+155.0|0;n=d*d;h=n*255.0|0;l=n*d*d*128.0|0;if(a.lk){b=j*30|0;j=((b+(h*59|0)|0)+(l*11|0)|0)/100|0;h=(b+(h*70|0)|0)/100|0;l=(b+(l*70|0)|0)/100|0;}m=a.c9.data;b
=c*4|0;m[b+0|0]=j<<24>>24;a.c9.data[b+1|0]=h<<24>>24;a.c9.data[b+2|0]=l<<24>>24;a.c9.data[b+3|0]=(-1);c=c+1|0;}}
function AMk(){var a=this;DZ.call(a);a.k_=null;a.ni=null;}
function AOU(a){var b=new AMk();ARr(b,a);return b;}
function ARr(a,b){J();Gu(a,A5G.W+(b*16|0)|0);a.k_=$rt_createFloatArray(320);a.ni=$rt_createFloatArray(320);}
function AUt(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<16){c=0;while(c<20){d=18;e=a.k_.data;f=c+1|0;g=e[b+((f%20|0)*16|0)|0]*18.0;h=b-1|0;while(h<=(b+1|0)){i=c;while(i<=f){if(h>=0&&i>=0&&h<16&&i<20)g=g+a.k_.data[h+(i*16|0)|0];d=d+1|0;i=i+1|0;}h=h+1|0;}e=a.ni.data;j=b+(c*16|0)|0;e[j]=g/(d*1.059999942779541);if(c>=19)a.ni.data[j]=BI()*BI()*BI()*4.0+BI()*0.10000000149011612+0.20000000298023224;c=f;}b=b+1|0;}e=a.ni;a.ni=a.k_;a.k_=e;f=0;while(f<256){k=a.k_.data[f]*1.7999999523162842;if(k>1.0)k=1.0;if(k<0.0)k=
0.0;l=k*155.0+100.0|0;g=k*k;m=g*255.0|0;j=g*k*k*k*k*k*k*k*k*255.0|0;n=255;if(k<0.5)n=0;if(a.lk){c=l*30|0;l=((c+(m*59|0)|0)+(j*11|0)|0)/100|0;m=(c+(m*70|0)|0)/100|0;j=(c+(j*70|0)|0)/100|0;}e=a.c9.data;b=f*4|0;e[b+0|0]=l<<24>>24;a.c9.data[b+1|0]=m<<24>>24;a.c9.data[b+2|0]=j<<24>>24;a.c9.data[b+3|0]=n<<24>>24;f=f+1|0;}}
function ACn(){var a=this;CI.call(a);a.s5=0.0;a.vW=null;a.sa=null;}
function JZ(){var a=new ACn();AU0(a);return a;}
function AU0(a){var b,c;DI(a);a.s5=0.0;b=N(Cp,106);c=b.data;c[0]=B(401);c[1]=B(402);c[2]=B(403);c[3]=B(404);c[4]=B(405);c[5]=B(406);c[6]=B(407);c[7]=B(408);c[8]=B(409);c[9]=B(410);c[10]=B(411);c[11]=B(412);c[12]=B(413);c[13]=B(414);c[14]=B(415);c[15]=B(416);c[16]=B(417);c[17]=B(418);c[18]=B(419);c[19]=B(420);c[20]=B(421);c[21]=B(422);c[22]=B(423);c[23]=B(424);c[24]=B(425);c[25]=B(426);c[26]=B(427);c[27]=B(428);c[28]=B(429);c[29]=B(430);c[30]=B(431);c[31]=B(432);c[32]=B(433);c[33]=B(434);c[34]=B(435);c[35]=B(436);c[36]
=B(437);c[37]=B(438);c[38]=B(439);c[39]=B(440);c[40]=B(441);c[41]=B(442);c[42]=B(443);c[43]=B(444);c[44]=B(445);c[45]=B(446);c[46]=B(447);c[47]=B(448);c[48]=B(449);c[49]=B(450);c[50]=B(422);c[51]=B(451);c[52]=B(452);c[53]=B(453);c[54]=B(454);c[55]=B(455);c[56]=B(456);c[57]=B(457);c[58]=B(458);c[59]=B(459);c[60]=B(460);c[61]=B(461);c[62]=B(462);c[63]=B(463);c[64]=B(464);c[65]=B(465);c[66]=B(466);c[67]=B(467);c[68]=B(468);c[69]=B(469);c[70]=B(470);c[71]=B(471);c[72]=B(472);c[73]=B(473);c[74]=B(474);c[75]=B(475);c[76]
=B(476);c[77]=B(477);c[78]=B(478);c[79]=B(479);c[80]=B(480);c[81]=B(481);c[82]=B(482);c[83]=B(483);c[84]=B(484);c[85]=B(485);c[86]=B(486);c[87]=B(487);c[88]=B(488);c[89]=B(489);c[90]=B(490);c[91]=B(491);c[92]=B(492);c[93]=B(493);c[94]=B(494);c[95]=B(495);c[96]=B(496);c[97]=B(497);c[98]=B(498);c[99]=B(499);c[100]=B(500);c[101]=B(501);c[102]=B(502);c[103]=B(503);c[104]=B(504);c[105]=B(505);a.vW=b;a.sa=a.vW.data[BI()*a.vW.data.length|0];}
function AVH(a){a.s5=a.s5+0.009999999776482582;}
function AIo(a,b,c){return;}
function ADu(a){DB(a.bE);U(a.bE,C9(1,(a.bh/2|0)-100|0,(a.bv/4|0)+48|0,B(506)));U(a.bE,C9(2,(a.bh/2|0)-100|0,(a.bv/4|0)+72|0,B(507)));U(a.bE,C9(3,(a.bh/2|0)-100|0,(a.bv/4|0)+96|0,B(508)));U(a.bE,C9(0,(a.bh/2|0)-100|0,((a.bv/4|0)+120|0)+12|0,B(509)));Z(a.bE,1).gC=0;Z(a.bE,2).gC=0;if(a.H.jV===null)Z(a.bE,1).gC=0;}
function X3(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.co){c=a.H;d=AUv(a,a.H.r);$p=1;continue _;}if(b.co!=1)return;b=a.H;c=AZv(a);$p=2;continue _;case 1:Zp(c,d);if(C()){break _;}if(b.co!=1)return;b=a.H;c=AZv(a);$p=2;case 2:Zp(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Vs(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WW(a);if(C()){break _;}Bv();e=A35;f=3553;g=a.H.bi;h=B(510);$p=2;case 2:$z=ACG(g,h);if(C()){break _;}i=$z;Ce(f,i);BN(1.0,1.0,1.0,1.0);Ec(e,16777215);Ct(a,(a.bh-256|0)/2|0,30,0,0,256,49);BW();Br((a.bh/2|0)+90|0,70.0,0.0);Bq((-20.0),0.0,0.0,1.0);j=Bm(Long_toNumber(Long_rem(B2(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Db(a.bS,a.sa)+32|0);Co(k,k,k);Dz(a,a.bS,a.sa,0,(-8),16776960);By();Cn(a.bS,B(511),(a.bh-Db(a.bS,B(511))|0)-2|0,a.bv-10|0,16777215);l=IX();m=Io();n=Long_sub(l,ID());g=new Bc;Ba(g);g=O(H(CP(H(CP(H(g,B(512)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(513)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(385)));Cn(a.bS,g,(a.bh-Db(a.bS,g)|0)-2|0,2,8421504);g=new Bc;Ba(g);g=O(H(CP(H(CP(H(g,
B(386)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(383)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(387)));Cn(a.bS,g,(a.bh-Db(a.bS,g)|0)-2|0,12,8421504);$p=3;case 3:AAZ(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function My(){var a=this;E.call(a);a.lA=null;a.cg=null;a.ig=null;a.qI=null;}
function DS(a,b){var c;c=b.u8();U(a.cg.data[c],b);}
function WC(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(b<3){c=0;if(c<a.cg.data[b].p){d=Z(a.cg.data[b],c);$p=1;continue _;}b=b+1|0;}return;case 1:d.dR();if(C()){break _;}if(!d.cs)e=c;else{d=a.cg.data[b];e=c+(-1)|0;Eo(d,c);}c=e+1|0;while(true){if(c<a.cg.data[b].p){d=Z(a.cg.data[b],c);continue _;}b=b+1|0;if(b>=3)break;c=0;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function WS(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Bx(b.q*3.1415927410125732/180.0);e=Bm(b.q*3.1415927410125732/180.0);f= -e*Bm(b.E*3.1415927410125732/180.0);g=d*Bm(b.E*3.1415927410125732/180.0);h=Bx(b.E*3.1415927410125732/180.0);i=b.b6;j=b.c-b.b6;k=c;A99=i+j*k;A9$=b.bP+(b.j-b.bP)*k;A9_=b.b7+
(b.d-b.b7)*k;l=0;while(l<2){if(a.cg.data[l].p){if(!l){b=a.ig;m=B(514);$p=1;continue _;}if(l==1){b=a.ig;m=B(171);$p=2;continue _;}Ce(3553,0);Bv();m=A35;Bu(m);n=0;if(n<a.cg.data[l].p){o=Z(a.cg.data[l],n);$p=3;continue _;}Bn(m);}l=l+1|0;}return;case 1:$z=ACG(b,m);if(C()){break _;}p=$z;a:while(true){if(l==1){b=a.ig;m=B(171);$p=2;continue _;}Ce(3553,p);Bv();m=A35;Bu(m);n=0;if(n<a.cg.data[l].p){o=Z(a.cg.data[l],n);$p=3;continue _;}Bn(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cg.data[l].p)continue;else break;}p
=0;if(!l){b=a.ig;m=B(514);continue _;}}return;case 2:$z=ACG(b,m);if(C()){break _;}p=$z;a:while(true){Ce(3553,p);Bv();m=A35;Bu(m);n=0;if(n<a.cg.data[l].p){o=Z(a.cg.data[l],n);$p=3;continue _;}Bn(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cg.data[l].p)continue;else break;}p=0;if(!l){b=a.ig;m=B(514);$p=1;continue _;}if(l==1){b=a.ig;m=B(171);continue _;}}return;case 3:o.jN(m,c,d,h,e,f,g);if(C()){break _;}n=n+1|0;a:while(true){if(n<a.cg.data[l].p){o=Z(a.cg.data[l],n);continue _;}Bn(m);while(true){l=l+1|0;if(l>=
2)break a;if(!a.cg.data[l].p)continue;else break;}if(!l){b=a.ig;m=B(514);$p=1;continue _;}if(l==1){b=a.ig;m=B(171);$p=2;continue _;}Ce(3553,0);Bv();m=A35;Bu(m);n=0;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Xw(a,b,c){var d,e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=2;if(a.cg.data[d].p){Bv();e=A35;f=0;if(f<a.cg.data[d].p){g=Z(a.cg.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;$p=1;continue _;}}return;case 1:g.jN(e,c,h,i,j,k,l);if(C()){break _;}f=f+1|0;if(f>=a.cg.data[d].p)return;g=Z(a.cg.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;continue _;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function MA(a,b){var c;a.lA=b;c=0;while(c<3){DB(a.cg.data[c]);c=c+1|0;}}
function Z5(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.lA;$p=1;case 1:a:{$z=X9(e,b,c,d);if(C()){break _;}f=$z;if(f){J();e=A39.data[f];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;DS(a,ARd(a.lA,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,e));l=
l+1|0;}k=k+1|0;}g=g+1|0;}}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function US(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.lA;$p=1;case 1:$z=X9(f,b,c,d);if(C()){break _;}g=$z;if(g){J();h=A39.data[g];i=b;j=i+Cb(a.qI)*(h.cP-h.cM-0.20000000298023224)+0.10000000149011612+h.cM;k=c;l=k+Cb(a.qI)*(h.ch-h.cm-0.20000000298023224)+0.10000000149011612+h.cm;m=d;n=m+Cb(a.qI)*(h.cQ-h.cL-0.20000000298023224)
+0.10000000149011612+h.cL;if(!e)l=k+h.cm-0.10000000149011612;if(e==1)l=k+h.ch+0.10000000149011612;if(e==2)n=m+h.cL-0.10000000149011612;if(e==3)n=m+h.cQ+0.10000000149011612;if(e==4)j=i+h.cM-0.10000000149011612;if(e==5)j=i+h.cP+0.10000000149011612;DS(a,T7(AJ2(ARd(a.lA,j,l,n,0.0,0.0,0.0,h),0.20000000298023224),0.6000000238418579));}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Tv(a){var b;b=new Bc;Ba(b);return O(Bd(H(b,B(3)),(a.cg.data[0].p+a.cg.data[1].p|0)+a.cg.data[2].p|0));}
function HC(){var a=this;E.call(a);a.pg=0;a.qO=0;a.tr=0;a.tv=0;a.va=0;a.Am=0;a.cj=null;a.t5=null;a.t6=null;a.t7=null;a.sd=null;a.sl=null;a.s8=null;a.uQ=null;a.ts=null;a.sN=null;a.r1=null;a.sv=null;a.sC=null;a.uc=null;a.sb=null;a.vH=null;a.ps=0;a.om=0;a.nc=0;a.CB=0;a.C$=0;a.sf=null;a.sK=null;a.uV=0;a.uG=null;a.tp=null;a.tW=null;a.vN=null;a.vT=null;a.vy=null;a.k9=null;a.ln=null;a.tm=0;a.qi=0.0;a.qh=0.0;a.qg=0.0;a.qf=0.0;a.qT=0.0;a.rG=0.0;a.p2=0.0;a.qF=0.0;a.pe=0.0;a.pf=0.0;a.rw=0.0;a.rv=0.0;a.ru=0.0;a.rt=0.0;a.ra
=0.0;a.q$=0.0;a.q_=0.0;}
var A$a=null;var A$b=null;function A0p(a,b,c,d,e,f,g){var h=new HC();ADg(h,a,b,c,d,e,f,g);return h;}
function MJ(b){var c,d,e,f,g,h,i;c=A$a.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;if((b&1)==1)d=1;if((b&4)==4)e=1;if((b&8)==8)f=1;if((b&16)==16)g=1;if((b&32)==32)h=1;if((b&64)==64)i=1;c=A0p(b,d,e,f,g,h,i);A$a.data[b]=c;}return c;}
function ADg(a,b,c,d,e,f,g,h){var i,j,k;SH(a);a.t5=null;a.t6=null;a.t7=null;a.sd=null;a.sl=null;a.s8=null;a.uQ=null;a.ts=null;a.sN=null;a.r1=null;a.sv=null;a.sC=null;a.uc=null;a.sb=null;a.vH=null;a.uV=0;a.uG=$rt_createFloatArray(16);a.tp=$rt_createFloatArray(16);a.tW=$rt_createFloatArray(16);a.vN=IW(K2());a.vT=IW(K2());a.vy=IW(K2());a.k9=AT5();a.ln=AT5();a.tm=0;a.qi=0.0;a.qh=0.0;a.qg=0.0;a.qf=0.0;a.qT=0.0;a.rG=0.0;a.p2=0.0;a.qF=0.0;a.pe=0.0;a.pf=0.0;a.rw=0.0;a.rv=0.0;a.ru=0.0;a.rt=0.0;a.ra=0.0;a.q$=0.0;a.q_
=0.0;a.pg=c;a.qO=d;a.tr=e;a.tv=f;a.va=g;a.Am=h;if(A$b===null)A$b=XM(B(515));i=B(3);if(a.pg)i=O(H(H(BQ(),i),B(516)));if(a.qO)i=O(H(H(BQ(),i),B(517)));if(a.tr)i=O(H(H(BQ(),i),B(518)));if(a.tv)i=O(H(H(BQ(),i),B(519)));if(a.va)i=O(H(H(BQ(),i),B(520)));if(a.Am)i=O(H(H(BQ(),i),B(521)));i=O(H(H(BQ(),i),A$b));j=Mj(35633);Mz(j,O(H(H(H(BQ(),M2()),B(522)),i)));SD(j);if(!Rt(j)){B9(CK(),LN(O(H(H(BQ(),B(523)),QB(j))),B(152),B(524)));M(VO(B(525)));}k=Mj(35632);Mz(k,O(H(H(H(BQ(),M2()),B(526)),i)));SD(k);if(!Rt(k)){B9(CK(),
LN(O(H(H(BQ(),B(523)),QB(k))),B(152),B(527)));M(VO(B(525)));}a.cj=AC9();Pf(a.cj,j);Pf(a.cj,k);b=1;a.ps=0;J7(a.cj,a.ps,B(528));if(!a.qO)a.om=(-1);else{a.om=b;J7(a.cj,a.om,B(529));b=2;}if(!a.pg)a.nc=(-1);else{c=b+1|0;a.nc=b;J7(a.cj,a.nc,B(530));b=c;}a.CB=(-1);a.C$=b;Wm(a.cj);Q1(a.cj,j);Q1(a.cj,k);P3(j);P3(k);if(!ABF(a.cj)){B9(CK(),LN(O(H(H(BQ(),B(523)),ACH(a.cj))),B(152),B(531)));M(VO(B(525)));}R$(a.cj);a.t5=C7(a.cj,B(532));a.t6=C7(a.cj,B(533));a.t7=C7(a.cj,B(534));a.r1=C7(a.cj,B(535));if(a.tr){a.sv=C7(a.cj,B(536));a.sb
=C7(a.cj,B(537));a.vH=C7(a.cj,B(538));}if(a.tv){a.sd=C7(a.cj,B(539));a.sl=C7(a.cj,B(540));a.s8=C7(a.cj,B(541));a.uQ=C7(a.cj,B(542));a.ts=C7(a.cj,B(543));a.sN=C7(a.cj,B(544));}if(a.va)a.sC=C7(a.cj,B(545));Of(C7(a.cj,B(546)),0);a.uc=C7(a.cj,B(547));a.sf=MI();a.sK=Kh();OW(a.sf);Gb(34962,a.sK);OG(a);}
function OG(a){LP(a.ps);LR(a.ps,3,5126,0,28,0);if(a.qO){LP(a.om);LR(a.om,2,5126,0,28,12);}if(a.pg){LP(a.nc);LR(a.nc,4,5121,1,28,20);}}
function ALi(a){R$(a.cj);}
function ANV(a){return;}
function AHa(a,b){if(!JI(b,a.vN)){LD(FT(a.vN,b),a.uG);Kp(a.t5,a.uG);}}
function AHE(a,b){if(!JI(b,a.vT)){LD(FT(a.vT,b),a.tp);Kp(a.t6,a.tp);}}
function VK(a,b){if(!JI(b,a.vy)){LD(FT(a.vy,b),a.tW);Kp(a.t7,a.tW);}}
function AHP(a,b,c){if(!(P0(b,a.k9)&&P0(c,a.ln))){RO(a.k9,b);RO(a.ln,c);JE(a.sb,a.k9.j7,a.k9.j8,a.k9.j6);JE(a.vH,a.ln.j7,a.ln.j8,a.ln.j6);}}
function AGd(a,b){if(a.tm!=b){a.tm=b;Of(a.sl,b%2|0);GZ(a.sN,b/2|0);}}
function AKF(a,b,c,d,e){if(!(a.qi===b&&a.qh===c&&a.qg===d&&a.qf===e)){a.qi=b;a.qh=c;a.qg=d;a.qf=e;QH(a.sd,a.qi,a.qh,a.qg,a.qf);}}
function AKi(a,b,c){if(!(a.qT===b&&a.rG===c)){a.qT=b;a.rG=c;GZ(a.s8,a.qT);GZ(a.uQ,a.rG);}}
function AFD(a,b){if(a.p2!==b){a.p2=b;GZ(a.ts,a.p2);}}
function ADR(a,b){if(a.qF!==b){a.qF=b;GZ(a.sC,a.qF);}}
function AJg(a,b,c){var d,e;if(!(a.pe===b&&a.pf===c)){a.pe=b;a.pf=c;d=a.uc;b=a.pe;c=a.pf;Y();if(d!==null){e=A23;d=d.jw;e.uniform2f(d,b,c);}}}
function AGz(a,b,c,d,e){if(!(a.rw===b&&a.rv===c&&a.ru===d&&a.rt===e)){a.rw=b;a.rv=c;a.ru=d;a.rt=e;QH(a.r1,a.rw,a.rv,a.ru,a.rt);}}
function XI(a,b,c,d){if(!(a.ra===b&&a.q$===c&&a.q_===d)){a.ra=b;a.q$=c;a.q_=d;JE(a.sv,a.ra,a.q$,a.q_);}}
function AJn(){A$a=N(HC,128);A$b=null;}
function Oy(){var a=this;E.call(a);a.yt=0;a.pB=null;a.nx=null;a.kB=0;a.iM=0;}
function ACB(){var a=this;E.call(a);a.j1=0;a.hj=0;a.hk=0;a.hl=0;a.gX=0;a.fR=null;a.me=null;}
function ASm(a,b,c,d,e){var f=new ACB();AWa(f,a,b,c,d,e);return f;}
function ASO(a){var b=new ACB();AYC(b,a);return b;}
function AWa(a,b,c,d,e,f){a.j1=0;a.hj=b;a.hk=c;a.hl=d;a.gX=e;a.fR=BR(f.t,f.v,f.s);}
function AYC(a,b){a.j1=1;a.me=b;a.fR=BR(b.c,b.j,b.d);}
function B6(){var a=this;E.call(a);a.m=0;a.lp=0;a.bs=0;a.dP=0;}
function AGP(a){var b=new B6();AC7(b,a);return b;}
function F2(a,b){var c=new B6();Rj(c,a,b);return c;}
function Ny(a){var b=new B6();Dg(b,a);return b;}
function D$(a,b){var c=new B6();Fw(c,a,b);return c;}
function I1(a,b){var c=new B6();KN(c,a,b);return c;}
function L$(a,b,c){var d=new B6();ASq(d,a,b,c);return d;}
function AZF(a){var b=new B6();ASZ(b,a);return b;}
function AC7(a,b){Rj(a,b,1);}
function Rj(a,b,c){KN(a,b.b,c);}
function Dg(a,b){Fw(a,b,1);}
function Fw(a,b,c){KN(a,b.cx,c);}
function KN(a,b,c){a.m=0;a.bs=b;a.m=c;}
function ASq(a,b,c,d){a.m=0;a.bs=b;a.m=c;a.dP=d;}
function ASZ(a,b){a.m=0;ZC(a,b);}
function D6(a,b){a.m=a.m-b|0;return L$(a.bs,b,a.dP);}
function Dl(a){Bw();return A6v.data[a.bs];}
function Dk(a){return Dl(a).rr;}
function AEf(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=Dl(a);$p=1;case 1:$z=h.hP(a,b,c,d,e,f,g);if(C()){break _;}d=$z;return d;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AAG(a,b){return Dl(a).vz(a,b);}
function WV(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Dl(a);$p=1;case 1:$z=d.mN(a,b,c);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,$p);}
function NV(a,b){EH(b,B(548),a.bs<<16>>16);H$(b,B(549),a.m<<24>>24);EH(b,B(550),a.dP<<16>>16);return b;}
function ZC(a,b){a.bs=EV(b,B(548));a.m=JP(b,B(549));a.dP=EV(b,B(550));}
function D4(a){return Dl(a).en;}
function IM(a){Bw();return A6v.data[a.bs].eG;}
function EW(a,b){a.dP=a.dP+b|0;if(a.dP>IM(a)){a.m=a.m-1|0;if(a.m<0)a.m=0;a.dP=0;}}
function AAn(a,b){Bw();A6v.data[a.bs].qw(a,b);}
function NS(a,b,c,d,e){Bw();A6v.data[a.bs].vt(a,b,c,d,e);}
function V7(a,b){Bw();return A6v.data[a.bs].mF(b);}
function AIJ(a,b){Bw();return A6v.data[a.bs].nE(b);}
function ASN(a,b){return;}
function Z2(a,b){Bw();A6v.data[a.bs].v9(a,b);}
function VA(){var a=this;E.call(a);a.he=null;a.kJ=0;a.qz=null;}
function ASn(a,b,c){var d=new VA();APs(d,a,b,c);return d;}
function APs(a,b,c,d){a.kJ=Bh(c,d);a.he=N(B6,a.kJ);a.qz=b;}
function AUq(a){return a.kJ;}
function Fq(a,b){return a.he.data[b];}
function AAk(a,b,c){var d,e;if(a.he.data[b]===null)return null;if(a.he.data[b].m<=c){d=a.he.data[b];a.he.data[b]=null;a.qz.rD(a);return d;}e=D6(a.he.data[b],c);if(!a.he.data[b].m)a.he.data[b]=null;a.qz.rD(a);return e;}
function AUy(a,b,c){a.he.data[b]=c;a.qz.rD(a);}
function AYg(a){return 64;}
function Zk(a){return;}
function Wl(){E.call(this);this.lP=null;}
function AVA(){var a=new Wl();AM2(a);return a;}
function AM2(a){a.lP=N(B6,1);}
function AVp(a,b){return a.lP.data[b];}
function APy(a,b,c){var d;if(a.lP.data[b]===null)return null;d=a.lP.data[b];a.lP.data[b]=null;return d;}
function MR(a,b,c){a.lP.data[b]=c;}
function AQ8(a){return 64;}
function AHW(a){return;}
function GA(){var a=this;E.call(a);a.kC=0;a.iP=0;a.iR=0;a.er=null;a.or=null;}
function DC(a,b,c,d,e){var f=new GA();QU(f,a,b,c,d,e);return f;}
function QU(a,b,c,d,e,f){a.or=b;a.er=c;a.kC=d;a.iP=e;a.iR=f;}
function K5(a,b,c){var d,e;d=(a.or.bh-a.or.ez|0)/2|0;e=(a.or.bv-a.or.eL|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.iP-1|0)&&d<((a.iP+16|0)+1|0)&&c>=(a.iR-1|0)&&c<((a.iR+16|0)+1|0)?1:0;}
function AF0(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFt(a);if(C()){break _;}return;default:Es();}}CM().s(a,$p);}
function APW(a,b){return 1;}
function ALO(a){return a.er.fQ(a.kC);}
function AGl(a,b){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.er.iE(a.kC,b);$p=1;case 1:AFt(a);if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function AYM(a){return (-1);}
function AFt(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.er;$p=1;case 1:b.ji();if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function YO(){GA.call(this);this.o$=null;}
function AUr(a,b,c,d,e,f){var g=new YO();AVg(g,a,b,c,d,e,f);return g;}
function AVg(a,b,c,d,e,f,g){QU(a,b,d,e,f,g);a.o$=c;}
function ASa(a,b){return 0;}
function AIH(a){var b;b=0;while(b<a.o$.kJ){if(Fq(a.o$,b)!==null)AAk(a.o$,b,1);b=b+1|0;}}
function NU(){var a=this;GA.call(a);a.t8=0;a.DN=null;}
function AT4(a,b){return !(Dl(b) instanceof Fc)?0:Dl(b).xe!=a.t8?0:1;}
function APu(a){return 15+(a.t8*16|0)|0;}
function P4(){var a=this;E.call(a);a.r7=null;a.u5=0;a.z$=0;a.BD=0;}
function Si(){E.call(this);this.Ay=null;}
function Px(){var a=this;E.call(a);a.x7=null;a.tB=0;}
function KZ(){EC.call(this);}
function AGE(b){var c,d;c=b.data.length;d=new Q9;QE(d,c,0,0+c|0);d.vq=0;d.yq=0;d.uy=b;return d;}
function AAD(a){D3(a);return a;}
function ATQ(a){FC(a);return a;}
function MK(){var a=this;E.call(a);a.yJ=null;a.Ea=0;a.D9=0;a.Ct=0;a.Dd=0;}
function C1(){var a=this;E.call(a);a.hF=null;a.Dv=null;a.DU=null;a.kV=0.0;a.yU=0.0;}
function A$c(){var a=new C1();D8(a);return a;}
function D8(a){a.Dv=AZw();a.DU=IJ();a.kV=0.0;a.yU=1.0;}
function AFm(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.hF.r6;$p=1;case 1:$z=ACG(c,b);if(C()){break _;}d=$z;DJ(c,d);return;default:Es();}}CM().s(a,b,c,d,$p);}
function AJZ(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.hF.r6;$p=1;case 1:$z=Zy(d,b,c);if(C()){break _;}e=$z;DJ(d,e);return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function ACd(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:X(2896);J();g=A5G.W;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;BW();Br(c,d,e);n=b.cC*1.399999976158142;Co(n,n,n);o=B(171);$p
=1;case 1:AFm(a,o);if(C()){break _;}Bv();o=A35;p=1.0;q=0.0;r=b.ef/b.cC;Bq( -a.hF.pI,0.0,1.0,0.0);Br(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BN(1.0,1.0,1.0,1.0);Bu(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;F(o,c,d,0.0,e,s);F(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;F(o,(-0.5),d,0.0,t,u);F(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Br(0.0,0.0,(-0.03999999910593033));}Bn(o);By();V(2896);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AXS(b,c,d,e){var f;X(3553);Bv();f=A35;BN(1.0,1.0,1.0,1.0);Bu(f);Et(f,c,d,e);B_(0.0,0.0,(-1.0));Bb(f,b.N,b.Q,b.O);Bb(f,b.R,b.Q,b.O);Bb(f,b.R,b.I,b.O);Bb(f,b.N,b.I,b.O);B_(0.0,0.0,1.0);Bb(f,b.N,b.I,b.S);Bb(f,b.R,b.I,b.S);Bb(f,b.R,b.Q,b.S);Bb(f,b.N,b.Q,b.S);B_(0.0,(-1.0),0.0);Bb(f,b.N,b.I,b.O);Bb(f,b.R,b.I,b.O);Bb(f,b.R,b.I,b.S);Bb(f,b.N,b.I,b.S);B_(0.0,1.0,0.0);Bb(f,b.N,b.Q,b.S);Bb(f,b.R,b.Q,b.S);Bb(f,b.R,b.Q,b.O);Bb(f,b.N,b.Q,b.O);B_((-1.0),0.0,0.0);Bb(f,b.N,b.I,b.S);Bb(f,b.N,b.Q,b.S);Bb(f,b.N,b.Q,b.O);Bb(f,
b.N,b.I,b.O);B_(1.0,0.0,0.0);Bb(f,b.R,b.I,b.O);Bb(f,b.R,b.Q,b.O);Bb(f,b.R,b.Q,b.S);Bb(f,b.R,b.I,b.S);Et(f,0.0,0.0,0.0);Bn(f);V(3553);}
function AOf(a,b){a.hF=b;}
function AHX(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AEQ(a.hF,b.c,b.j,b.d);if(b.cw<=0)return;$p=1;case 1:ACd(a,b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ADG(){var a=this;C1.call(a);a.up=null;a.hp=null;}
function TX(){var a=new ADG();AVN(a);return a;}
function AVN(a){D8(a);a.up=IJ();a.hp=new Df;a.kV=0.15000000596046448;a.yU=0.75;}
function AKd(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b.lY;BW();i=Bm((b.lq+g)/10.0+b.vX)*0.10000000149011612+0.10000000149011612;j=((b.lq+g)/20.0+b.vX)*57.2957763671875;k=1;if(b.lY.m>1)k=2;if(b.lY.m>5)k=3;if(b.lY.m>20)k=4;Br(c,d+
i,e);V(32826);if(h.bs<256){J();if(!A39.data[h.bs].dO()){Bq(j,0.0,1.0,0.0);b=B(171);$p=3;continue _;}}Co(0.5,0.5,0.5);l=Dk(h);if(h.bs>=256){b=B(222);$p=1;continue _;}b=B(171);$p=2;continue _;case 1:AFm(a,b);if(C()){break _;}Bv();m=A35;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){BW();if(s>0)Br((L(a.hp)*2.0-1.0)*0.30000001192092896,(L(a.hp)*2.0-1.0)*0.30000001192092896,(L(a.hp)*2.0-1.0)*0.30000001192092896);Bq(180.0-a.hF.pI,0.0,
1.0,0.0);Bu(m);B_(0.0,1.0,0.0);F(m,(-0.5),(-0.25),0.0,d,e);F(m,0.5,(-0.25),0.0,t,e);F(m,0.5,0.75,0.0,t,u);F(m,(-0.5),0.75,0.0,d,u);Bn(m);By();s=s+1|0;}X(32826);By();return;case 2:AFm(a,b);if(C()){break _;}Bv();m=A35;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){BW();if(s>0)Br((L(a.hp)*2.0-1.0)*0.30000001192092896,(L(a.hp)*2.0-1.0)*0.30000001192092896,(L(a.hp)*2.0-1.0)*0.30000001192092896);Bq(180.0-a.hF.pI,0.0,1.0,0.0);Bu(m);B_(0.0,
1.0,0.0);F(m,(-0.5),(-0.25),0.0,d,e);F(m,0.5,(-0.25),0.0,t,e);F(m,0.5,0.75,0.0,t,u);F(m,(-0.5),0.75,0.0,d,u);Bn(m);By();s=s+1|0;}X(32826);By();return;case 3:AFm(a,b);if(C()){break _;}v=0.25;if(!A39.data[h.bs].fE()&&h.bs!=A4c.b)v=0.5;Co(v,v,v);n=0;while(n<k){BW();if(n>0)Br((L(a.hp)*2.0-1.0)*0.20000000298023224/v,(L(a.hp)*2.0-1.0)*0.20000000298023224/v,(L(a.hp)*2.0-1.0)*0.20000000298023224/v);FZ(a.up,A39.data[h.bs]);By();n=n+1|0;}X(32826);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,
t,u,v,$p);}
function ABz(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d!==null){if(d.bs<256){J();if(!A39.data[d.bs].dO()){g=d.bs;b=B(171);$p=1;continue _;}}if(Dk(d)>=0){X(2896);if(d.bs>=256){b=B(222);$p=2;continue _;}b=B(171);$p=3;continue _;}}return;case 1:$z=ACG(c,b);if(C()){break _;}h=$z;DJ(c,h);i=A39.data[g];BW();Br(e-2|0,f+3|0,0.0);Co(10.0,10.0,10.0);Br(1.0,0.5,8.0);Bq(210.0,1.0,
0.0,0.0);Bq(45.0,0.0,1.0,0.0);BN(1.0,1.0,1.0,1.0);FZ(a.up,i);By();return;case 2:$z=ACG(c,b);if(C()){break _;}g=$z;DJ(c,g);SZ(a,e,f,(Dk(d)%16|0)*16|0,(Dk(d)/16|0)*16|0,16,16);V(2896);return;case 3:$z=ACG(c,b);if(C()){break _;}g=$z;DJ(c,g);SZ(a,e,f,(Dk(d)%16|0)*16|0,(Dk(d)/16|0)*16|0,16,16);V(2896);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function JD(a,b,c,d,e,f){var g,h,i,j,k,l;if(d!==null){if(d.m>1){c=new Bc;Ba(c);g=O(Bd(H(c,B(3)),d.m));X(2896);X(2929);Cn(b,g,((e+19|0)-2|0)-Db(b,g)|0,(f+6|0)+3|0,16777215);V(2896);V(2929);}if(d.dP>0){h=13-((d.dP*13|0)/IM(d)|0)|0;i=255-((d.dP*255|0)/IM(d)|0)|0;X(2896);X(2929);X(3553);Bv();j=A35;k=255-i|0;l=k<<16|i<<8;k=(k/4|0)<<16|16128;e=e+2|0;f=f+13|0;LL(a,j,e,f,13,2,0);LL(a,j,e,f,12,1,k);LL(a,j,e,f,h,1,l);V(3553);V(2896);V(2929);BN(1.0,1.0,1.0,1.0);}}}
function LL(a,b,c,d,e,f,g){var h,i,j;Bu(b);Ec(b,g);h=c+0|0;i=d+0|0;Bb(b,h,i,0.0);j=d+f|0;Bb(b,h,j,0.0);h=c+e|0;Bb(b,h,j,0.0);Bb(b,h,i,0.0);Bn(b);}
function SZ(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;Bv();h=A35;Bu(h);i=b+0|0;j=c+g|0;k=(d+0|0)*0.00390625;l=(e+g|0)*0.00390625;F(h,i,j,0.0,k,l);m=b+f|0;n=(d+f|0)*0.00390625;F(h,m,j,0.0,n,l);l=c+0|0;j=(e+0|0)*0.00390625;F(h,m,l,0.0,n,j);F(h,i,l,0.0,k,j);Bn(h);}
function YE(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AKd(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function NO(){var a=this;E.call(a);a.fp=null;a.vF=null;}
function Vi(a,b){var c,d,e,f,g,h,i,j,k,l;if(Gg()===null)A3u=A2Y.createElement("canvas");if(Gg().width<a.fp.width){b=Gg();c=a.fp.width;b.width=c;}if(Gg().height<a.fp.height){b=Gg();c=a.fp.height;b.height=c;}if(If()===null)A3v=Gg().getContext("2d");b=If();d=a.fp.width;e=a.fp.height;b.clearRect(0.0,0.0,d,e);b=If();c=a.fp;d=a.fp.width;e=a.fp.height;b.drawImage(c,0.0,0.0,d,e);b=If();d=a.fp.width;e=a.fp.height;f=b.getImageData(0.0,0.0,d,e);c=f.data;g=Bh(f.width,f.height);SF($rt_str(a.fp.src));if(c.byteLength<(g*4
|0)){Cx(a.vF,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;g=i.length;while(j<g){k=j*4|0;i[j]=c[k]<<16|c[k+1|0]<<8|c[k+2|0]|c[k+3|0]<<24;j=j+1|0;}b=a.vF;c=new P4;k=f.width;l=f.height;if(g==Bh(k,l)){c.u5=k;c.z$=l;c.BD=1;c.r7=h;Cx(b,c);return;}b=new Cq;Bl(b,B(551));M(b);}
function AXa(a,b){Vi(a,b);}
function NN(){var a=this;E.call(a);a.AQ=null;a.Bp=null;}
function AEB(a,b){SF($rt_str(a.AQ.src));Cx(a.Bp,null);}
function AXj(a,b){AEB(a,b);}
function Hc(){KZ.call(this);}
function A$d(a,b,c){var d=new Hc();QE(d,a,b,c);return d;}
function QE(a,b,c,d){Jb(a,b);a.be=c;a.cb=d;}
function ABt(a){var b,c;if(a.be<a.cb){b=a.be;a.be=b+1|0;return a.vV(b);}c=new Fz;Q(c);M(c);}
function Lx(a,b){var c,d;if(a.lH()){c=new E5;Q(c);M(c);}if(a.be<a.cb){d=a.be;a.be=d+1|0;a.sZ(d,b);return a;}c=new F$;Q(c);M(c);}
function N7(a,b){var c,d;if(b>=0&&b<a.cb)return AJh(a,b);c=new BT;d=new Bc;Ba(d);Bl(c,O(H(Bd(H(Bd(H(d,B(265)),b),B(236)),a.cb),B(21))));M(c);}
function ALl(a,b,c){var d,e;if(a.lH()){d=new E5;Q(d);M(d);}if(b>=0&&b<a.cb){AIk(a,b,c);return a;}e=new BT;d=new Bc;Ba(d);Bl(e,O(H(Bd(H(Bd(H(d,B(265)),b),B(236)),a.cb),B(21))));M(e);}
function AQp(a){return a.lH();}
function Q9(){var a=this;Hc.call(a);a.yq=0;a.vq=0;a.uy=null;}
function AJh(a,b){return a.uy.data[b+a.vq|0];}
function AIk(a,b,c){a.uy.data[b+a.vq|0]=c;}
function AM0(a){return a.yq;}
function Sc(){E.call(this);this.it=null;}
function R_(){var a=this;E.call(a);a.h0=null;a.u1=0;}
function Tf(){E.call(this);this.jw=null;}
function CJ(){var a=this;CO.call(a);a.ev=0;a.yl=0.0;a.ym=0.0;a.cY=0;a.b_=0;a.cZ=0.0;a.lO=0.0;a.g_=0.0;a.ho=0.0;a.hw=0.0;}
var A99=0.0;var A9$=0.0;var A9_=0.0;function A$e(a,b,c,d,e,f,g){var h=new CJ();EP(h,a,b,c,d,e,f,g);return h;}
function EP(a,b,c,d,e,f,g,h){var i,j;EO(a,b);a.cY=0;a.b_=0;Dx(a,0.20000000298023224,0.20000000298023224);a.cF=a.ef/2.0;CC(a,c,d,e);a.hw=1.0;a.ho=1.0;a.g_=1.0;a.f=f+(BI()*2.0-1.0)*0.4000000059604645;a.h=g+(BI()*2.0-1.0)*0.4000000059604645;a.g=h+(BI()*2.0-1.0)*0.4000000059604645;i=(BI()+BI()+1.0)*0.15000000596046448;j=B7(a.f*a.f+a.h*a.h+a.g*a.g);c=a.f;d=j;c=c/d;e=i;a.f=c*e*0.4000000059604645;a.h=a.h/d*e*0.4000000059604645+0.10000000149011612;a.g=a.g/d*e*0.4000000059604645;a.yl=L(a.l)*3.0;a.ym=L(a.l)*3.0;a.cZ=
(L(a.l)*0.5+0.5)*2.0;a.b_=4.0/(L(a.l)*0.8999999761581421+0.10000000149011612)|0;a.cY=0;a.h$=0;}
function AJ2(a,b){var c,d;c=a.f;d=b;a.f=c*d;a.h=(a.h-0.10000000149011612)*d+0.10000000149011612;a.g=a.g*d;return a;}
function T7(a,b){var c;c=0.20000000298023224*b;Dx(a,c,c);a.cZ=a.cZ*b;return a;}
function AGc(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=2;continue _;}a.h=a.h-0.04*a.lO;c=a.f;d=a.h;e=a.g;$p=1;case 1:ALW(a,c,d,e);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;case 2:B4(a);if(C()){break _;}a.h=a.h-0.04*a.lO;c=a.f;d=a.h;e=
a.g;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AH6(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.ev%16|0)/16.0;j=i+0.062437500804662704;k=(a.ev/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.cZ;n=a.bH;o=a.c-a.bH;p
=c;q=n+o*p-A99;r=a.ct+(a.j-a.ct)*p-A9$;s=a.bG+(a.d-a.bG)*p-A9_;$p=1;case 1:$z=a.s$(c);if(C()){break _;}t=$z;Cf(b,a.g_*t,a.ho*t,a.hw*t);u=d*m;t=q-u;v=g*m;n=t-v;c=e*m;o=r-c;d=f*m;e=s-d;f=h*m;w=e-f;p=i;x=l;F(b,n,o,w,p,x);n=t+v;w=r+c;y=e+f;z=k;F(b,n,w,y,p,z);c=q+u;n=c+v;d=s+d;p=d+f;y=j;F(b,n,w,p,y,z);F(b,c-v,o,d-f,y,x);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AXB(a){return 0;}
function XZ(){var a=this;E.call(a);a.v2=null;a.nb=0;}
function MD(){E.call(this);}
var A$f=null;function A$g(){var a=new MD();AF8(a);return a;}
function AF8(a){return;}
function Dr(){X(2896);X(16384);X(16385);X(2903);}
function Go(){var b;V(2896);V(16384);V(16385);V(2903);b=Cs(BR(0.699999988079071,1.0,(-0.20000000298023224)));OP(b.t,b.v,b.s,0.0);EG(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);EG(0.0,0.0,0.0,1.0);EG(0.0,0.0,0.0,1.0);b=Cs(BR((-0.699999988079071),1.0,0.20000000298023224));OP(b.t,b.v,b.s,0.0);EG(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);EG(0.0,0.0,0.0,1.0);EG(0.0,0.0,0.0,1.0);EG(0.4000000059604645,0.4000000059604645,0.4000000059604645,1.0);}
function OP(b,c,d,e){return EG(b,c,d,e);}
function EG(b,c,d,e){D3(A$f);Cu(Cu(Cu(Cu(A$f,b),c),d),e);FC(A$f);return A$f;}
function AMw(){A$f=GO(16);}
function HS(){B5.call(this);}
function A$h(){var a=new HS();AQD(a);return a;}
function AQD(a){Q(a);}
function E5(){HS.call(this);}
function A$i(){var a=new E5();AWH(a);return a;}
function AWH(a){Q(a);}
function F$(){B5.call(this);}
function A$j(){var a=new F$();AV3(a);return a;}
function AV3(a){Q(a);}
function Fz(){B5.call(this);}
function A$k(){var a=new Fz();AS7(a);return a;}
function AS7(a){Q(a);}
function Qd(){var a=this;E.call(a);a.wk=null;a.z3=null;a.tw=0;a.p4=0;}
function Wf(a){return ED(a.wk);}
function LS(a,b){return Ci(a.z3)<b?0:1;}
function AV0(a,b){a.tw=b;}
function AZ8(a,b){a.p4=b;}
function OE(){CI.call(this);}
function A$l(){var a=new OE();AWI(a);return a;}
function AWI(a){DI(a);}
function Kt(){CI.call(this);}
function A$m(){var a=new Kt();AYU(a);return a;}
function AYU(a){DI(a);}
function AIX(a){DB(a.bE);U(a.bE,C9(1,(a.bh/2|0)-100|0,(a.bv/4|0)+72|0,B(552)));U(a.bE,C9(2,(a.bh/2|0)-100|0,(a.bv/4|0)+96|0,B(553)));if(a.H.jV===null)Z(a.bE,1).gC=0;}
function AG6(a,b,c){return;}
function AI6(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.co==1){c=a.H;$p=1;continue _;}if(b.co!=2)return;b=a.H;c=null;$p=3;continue _;case 1:AMJ(c);if(C()){break _;}c=a.H;d=null;$p=2;case 2:Zp(c,d);if(C()){break _;}if(b.co!=2)return;b=a.H;c=null;$p=3;case 3:Xm(b,c);if(C()){break _;}b=a.H;c=JZ();$p=4;case 4:Zp(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AJY(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:I$(a,0,0,a.bh,a.bv,1615855616,(-1602211792));BW();Co(2.0,2.0,2.0);Dz(a,a.bS,B(554),(a.bh/2|0)/2|0,30,16777215);By();e=a.bS;f=new Bc;Ba(f);Dz(a,e,O(Bd(H(f,B(555)),a.H.e.jX)),a.bh/2|0,100,16777215);$p=1;case 1:AAZ(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AWJ(a){return 0;}
function WF(){var a=this;CI.call(a);a.rL=0;a.mU=0;}
function A10(){var a=new WF();APh(a);return a;}
function APh(a){DI(a);a.rL=0;a.mU=0;}
function ALw(a){a.rL=0;DB(a.bE);U(a.bE,C9(1,(a.bh/2|0)-100|0,(a.bv/4|0)+48|0,B(556)));U(a.bE,C9(4,(a.bh/2|0)-100|0,(a.bv/4|0)+24|0,B(557)));U(a.bE,C9(0,(a.bh/2|0)-100|0,(a.bv/4|0)+96|0,B(509)));}
function YV(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.co){c=a.H;d=AUv(a,a.H.r);$p=1;continue _;}if(b.co==1){c=a.H;d=null;$p=2;continue _;}if(b.co!=4)return;b=a.H;c=null;$p=4;continue _;case 1:Zp(c,d);if(C()){break _;}if(b.co==1){c=a.H;d=null;$p=2;continue _;}if(b.co!=4)return;b=a.H;c=null;$p=4;continue _;case 2:Xm(c,d);if(C()){break _;}c=a.H;d=JZ();$p=3;case 3:Zp(c,d);if(C()){break _;}if(b.co!=4)return;b=a.H;c=null;$p=4;case 4:Zp(b,
c);if(C()){break _;}b=a.H;$p=5;case 5:AAH(b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function ATw(a){a.mU=a.mU+1|0;}
function Zi(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WW(a);if(C()){break _;}e=a.H.w;f=a.rL;a.rL=f+1|0;$p=2;case 2:$z=Ws(e,f);if(C()){break _;}f=$z;f=f?0:1;if(!(!f&&a.mU>=20)){g=255.0*(Bm(((a.mU%10|0)+d)/10.0*3.1415927410125732*2.0)*0.20000000298023224+0.800000011920929)|0;Cn(a.bS,B(558),8,a.bv-16|0,g<<16|g<<8|g);}Dz(a,a.bS,B(559),a.bh/2|0,40,16777215);$p=3;case 3:AAZ(a,b,c,d);if(C())
{break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function JM(){var a=this;E.call(a);a.Z=null;a.V=null;a.U=null;a.X=null;}
function A$n(){var a=new JM();ACE(a);return a;}
function ACE(a){a.Z=$rt_createFloatMultiArray([16,16]);a.V=$rt_createFloatArray(16);a.U=$rt_createFloatArray(16);a.X=$rt_createFloatArray(16);}
function AL5(a,b,c,d,e,f,g){var h;h=0;while(h<6){if(a.Z.data[h].data[0]*b+a.Z.data[h].data[1]*c+a.Z.data[h].data[2]*d+a.Z.data[h].data[3]<=0.0&&a.Z.data[h].data[0]*e+a.Z.data[h].data[1]*c+a.Z.data[h].data[2]*d+a.Z.data[h].data[3]<=0.0&&a.Z.data[h].data[0]*b+a.Z.data[h].data[1]*f+a.Z.data[h].data[2]*d+a.Z.data[h].data[3]<=0.0&&a.Z.data[h].data[0]*e+a.Z.data[h].data[1]*f+a.Z.data[h].data[2]*d+a.Z.data[h].data[3]<=0.0&&a.Z.data[h].data[0]*b+a.Z.data[h].data[1]*c+a.Z.data[h].data[2]*g+a.Z.data[h].data[3]<=0.0&&
a.Z.data[h].data[0]*e+a.Z.data[h].data[1]*c+a.Z.data[h].data[2]*g+a.Z.data[h].data[3]<=0.0&&a.Z.data[h].data[0]*b+a.Z.data[h].data[1]*f+a.Z.data[h].data[2]*g+a.Z.data[h].data[3]<=0.0&&a.Z.data[h].data[0]*e+a.Z.data[h].data[1]*f+a.Z.data[h].data[2]*g+a.Z.data[h].data[3]<=0.0)return 0;h=h+1|0;}return 1;}
function SC(){var a=this;JM.call(a);a.nt=null;a.mJ=null;a.wU=null;}
var A$o=null;function A0P(){var a=new SC();AAQ(a);return a;}
function AAQ(a){ACE(a);a.nt=GO(16);a.mJ=GO(16);a.wU=GO(16);}
function OZ(){AEN(A$o);return A$o;}
function FY(a,b,c){var d,e;b=b.data;d=DG(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AEN(a){J4(a.nt);J4(a.mJ);J4(a.wU);Qt(2983,a.nt);Qt(2982,a.mJ);Ns(Qr(a.nt),16);RT(a.nt,a.V);Ns(Qr(a.mJ),16);RT(a.mJ,a.U);a.X.data[0]=a.U.data[0]*a.V.data[0]+a.U.data[1]*a.V.data[4]+a.U.data[2]*a.V.data[8]+a.U.data[3]*a.V.data[12];a.X.data[1]=a.U.data[0]*a.V.data[1]+a.U.data[1]*a.V.data[5]+a.U.data[2]*a.V.data[9]+a.U.data[3]*a.V.data[13];a.X.data[2]=a.U.data[0]*a.V.data[2]+a.U.data[1]*a.V.data[6]+a.U.data[2]*a.V.data[10]+a.U.data[3]*a.V.data[14];a.X.data[3]=a.U.data[0]*a.V.data[3]+a.U.data[1]*a.V.data[7]
+a.U.data[2]*a.V.data[11]+a.U.data[3]*a.V.data[15];a.X.data[4]=a.U.data[4]*a.V.data[0]+a.U.data[5]*a.V.data[4]+a.U.data[6]*a.V.data[8]+a.U.data[7]*a.V.data[12];a.X.data[5]=a.U.data[4]*a.V.data[1]+a.U.data[5]*a.V.data[5]+a.U.data[6]*a.V.data[9]+a.U.data[7]*a.V.data[13];a.X.data[6]=a.U.data[4]*a.V.data[2]+a.U.data[5]*a.V.data[6]+a.U.data[6]*a.V.data[10]+a.U.data[7]*a.V.data[14];a.X.data[7]=a.U.data[4]*a.V.data[3]+a.U.data[5]*a.V.data[7]+a.U.data[6]*a.V.data[11]+a.U.data[7]*a.V.data[15];a.X.data[8]=a.U.data[8]
*a.V.data[0]+a.U.data[9]*a.V.data[4]+a.U.data[10]*a.V.data[8]+a.U.data[11]*a.V.data[12];a.X.data[9]=a.U.data[8]*a.V.data[1]+a.U.data[9]*a.V.data[5]+a.U.data[10]*a.V.data[9]+a.U.data[11]*a.V.data[13];a.X.data[10]=a.U.data[8]*a.V.data[2]+a.U.data[9]*a.V.data[6]+a.U.data[10]*a.V.data[10]+a.U.data[11]*a.V.data[14];a.X.data[11]=a.U.data[8]*a.V.data[3]+a.U.data[9]*a.V.data[7]+a.U.data[10]*a.V.data[11]+a.U.data[11]*a.V.data[15];a.X.data[12]=a.U.data[12]*a.V.data[0]+a.U.data[13]*a.V.data[4]+a.U.data[14]*a.V.data[8]
+a.U.data[15]*a.V.data[12];a.X.data[13]=a.U.data[12]*a.V.data[1]+a.U.data[13]*a.V.data[5]+a.U.data[14]*a.V.data[9]+a.U.data[15]*a.V.data[13];a.X.data[14]=a.U.data[12]*a.V.data[2]+a.U.data[13]*a.V.data[6]+a.U.data[14]*a.V.data[10]+a.U.data[15]*a.V.data[14];a.X.data[15]=a.U.data[12]*a.V.data[3]+a.U.data[13]*a.V.data[7]+a.U.data[14]*a.V.data[11]+a.U.data[15]*a.V.data[15];a.Z.data[0].data[0]=a.X.data[3]-a.X.data[0];a.Z.data[0].data[1]=a.X.data[7]-a.X.data[4];a.Z.data[0].data[2]=a.X.data[11]-a.X.data[8];a.Z.data[0].data[3]
=a.X.data[15]-a.X.data[12];FY(a,a.Z,0);a.Z.data[1].data[0]=a.X.data[3]+a.X.data[0];a.Z.data[1].data[1]=a.X.data[7]+a.X.data[4];a.Z.data[1].data[2]=a.X.data[11]+a.X.data[8];a.Z.data[1].data[3]=a.X.data[15]+a.X.data[12];FY(a,a.Z,1);a.Z.data[2].data[0]=a.X.data[3]+a.X.data[1];a.Z.data[2].data[1]=a.X.data[7]+a.X.data[5];a.Z.data[2].data[2]=a.X.data[11]+a.X.data[9];a.Z.data[2].data[3]=a.X.data[15]+a.X.data[13];FY(a,a.Z,2);a.Z.data[3].data[0]=a.X.data[3]-a.X.data[1];a.Z.data[3].data[1]=a.X.data[7]-a.X.data[5];a.Z.data[3].data[2]
=a.X.data[11]-a.X.data[9];a.Z.data[3].data[3]=a.X.data[15]-a.X.data[13];FY(a,a.Z,3);a.Z.data[4].data[0]=a.X.data[3]-a.X.data[2];a.Z.data[4].data[1]=a.X.data[7]-a.X.data[6];a.Z.data[4].data[2]=a.X.data[11]-a.X.data[10];a.Z.data[4].data[3]=a.X.data[15]-a.X.data[14];FY(a,a.Z,4);a.Z.data[5].data[0]=a.X.data[3]+a.X.data[2];a.Z.data[5].data[1]=a.X.data[7]+a.X.data[6];a.Z.data[5].data[2]=a.X.data[11]+a.X.data[10];a.Z.data[5].data[3]=a.X.data[15]+a.X.data[14];FY(a,a.Z,5);}
function ACk(){A$o=A0P();}
function Oa(){}
function ABc(){var a=this;E.call(a);a.zR=null;a.to=0.0;a.tO=0.0;a.t4=0.0;}
function A1l(){var a=new ABc();AYl(a);return a;}
function AYl(a){a.zR=OZ();}
function AIV(a,b,c,d){a.to=b;a.tO=c;a.t4=d;}
function V3(a,b,c,d,e,f,g){var h,i;h=b-a.to;i=c-a.tO;b=d-a.t4;d=e-a.to;e=f-a.tO;c=g-a.t4;return AL5(a.zR,h,i,b,d,e,c);}
function KJ(a,b){return V3(a,b.N,b.I,b.O,b.R,b.Q,b.S);}
function G1(){var a=this;E.call(a);a.xn=null;a.fJ=null;a.mc=null;}
function A$p(a,b,c){var d=new G1();Jp(d,a,b,c);return d;}
function Jp(a,b,c,d){a.xn=b;a.fJ=c;a.mc=d;}
function AWs(a){return a.fJ.fH()+a.mc.fH()|0;}
function AWi(a){return a.xn;}
function ANb(a,b){return b<a.fJ.fH()?a.fJ.fQ(b):a.mc.fQ(b-a.fJ.fH()|0);}
function AUk(a,b,c){return b<a.fJ.fH()?a.fJ.i5(b,c):a.mc.i5(b-a.fJ.fH()|0,c);}
function APJ(a,b,c){if(b<a.fJ.fH())a.fJ.iE(b,c);else a.mc.iE(b-a.fJ.fH()|0,c);}
function AYY(a){return a.fJ.fs();}
function Ur(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.fJ;$p=1;case 1:b.ji();if(C()){break _;}b=a.mc;$p=2;case 2:b.ji();if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function Vw(){CJ.call(this);}
function ARd(a,b,c,d,e,f,g,h){var i=new Vw();ASP(i,a,b,c,d,e,f,g,h);return i;}
function ASP(a,b,c,d,e,f,g,h,i){EP(a,b,c,d,e,f,g,h);a.ev=i.W;a.lO=i.A1;a.hw=0.6000000238418579;a.ho=0.6000000238418579;a.g_=0.6000000238418579;a.cZ=a.cZ/2.0;}
function ANy(a){return 1;}
function UD(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=((a.ev%16|0)+a.yl/4.0)/16.0;j=i+0.015609375201165676;k=((a.ev/16|0)+a.ym/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.cZ;n
=a.bH;o=a.c-a.bH;p=c;q=n+o*p-A99;r=a.ct+(a.j-a.ct)*p-A9$;s=a.bG+(a.d-a.bG)*p-A9_;$p=1;case 1:$z=Zd(a,c);if(C()){break _;}t=$z;Cf(b,t*a.g_,t*a.ho,t*a.hw);t=d*m;u=q-t;g=g*m;v=u-g;w=e*m;o=r-w;c=f*m;d=s-c;e=h*m;n=d-e;x=i;p=l;F(b,v,o,n,x,p);n=u+g;v=r+w;y=d+e;z=k;F(b,n,v,y,x,z);d=q+t;n=d+g;c=s+c;x=c+e;y=j;F(b,n,v,x,y,z);F(b,d-g,o,c-e,y,p);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function Jf(){B5.call(this);}
function A$q(){var a=new Jf();ATD(a);return a;}
function ATD(a){Q(a);}
function Ic(){CJ.call(this);}
function A$r(a,b,c,d){var e=new Ic();Qs(e,a,b,c,d);return e;}
function Qs(a,b,c,d,e){EP(a,b,c,d,e,0.0,0.0,0.0);a.f=a.f*0.30000001192092896;a.h=BI()*0.20000000298023224+0.10000000149011612;a.g=a.g*0.30000001192092896;a.g_=1.0;a.ho=1.0;a.hw=1.0;a.ev=16;Dx(a,0.009999999776482582,0.009999999776482582);a.lO=0.05999999865889549;a.b_=8.0/(BI()*0.8+0.2)|0;}
function AFF(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AH6(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AI8(a){var b,c,d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;a.h=a.h-a.lO;b=a.f;c=a.h;d=a.g;$p=1;case 1:ALW(a,b,c,d);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;e=a.b_;a.b_=e-1|0;if(e<=0){$p=2;continue _;}if(a.ca){if(BI()<0.5){$p=5;continue _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}f=a.k;e
=I(a.c);g=I(a.j);h=I(a.d);$p=3;continue _;case 2:B4(a);if(C()){break _;}if(a.ca){if(BI()<0.5){$p=5;continue _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}f=a.k;e=I(a.c);g=I(a.j);h=I(a.d);$p=3;case 3:$z=XB(f,e,g,h);if(C()){break _;}f=$z;if(!f.mh()&&!f.c3())return;i=I(a.j)+1|0;f=a.k;e=I(a.c);g=I(a.j);h=I(a.d);$p=4;case 4:$z=Z$(f,e,g,h);if(C()){break _;}e=$z;b=i-HX(e);if(a.j>=b)return;$p=6;continue _;case 5:B4(a);if(C()){break _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;f=a.k;e=I(a.c);g=I(a.j);h
=I(a.d);$p=3;continue _;case 6:B4(a);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function Ho(){var a=this;Hc.call(a);a.dS=null;a.xy=0;a.dH=0;}
function A$s(a,b,c,d,e,f){var g=new Ho();Mn(g,a,b,c,d,e,f);return g;}
function Mn(a,b,c,d,e,f,g){QE(a,c,e,f);a.dH=b;a.dS=d;a.xy=g;}
function AQk(a){return a.xy;}
function MM(){Ho.call(this);}
function APf(a,b){var c,d;c=a.dS.b4.data;d=a.dH;b=b*4|0;return c[d+b|0]&255|(a.dS.b4.data[(a.dH+b|0)+1|0]&255)<<8|(a.dS.b4.data[(a.dH+b|0)+2|0]&255)<<16|(a.dS.b4.data[(a.dH+b|0)+3|0]&255)<<24;}
function AMZ(a,b,c){var d,e;d=a.dS.b4.data;e=a.dH;b=b*4|0;d[e+b|0]=c<<24>>24;a.dS.b4.data[(a.dH+b|0)+1|0]=c>>8<<24>>24;a.dS.b4.data[(a.dH+b|0)+2|0]=c>>16<<24>>24;a.dS.b4.data[(a.dH+b|0)+3|0]=c>>24<<24>>24;}
function RW(){Ho.call(this);}
function ASw(a,b){var c,d;c=a.dS.b4.data;d=a.dH;b=b*4|0;return (c[d+b|0]&255)<<24|(a.dS.b4.data[(a.dH+b|0)+1|0]&255)<<16|(a.dS.b4.data[(a.dH+b|0)+2|0]&255)<<8|a.dS.b4.data[(a.dH+b|0)+3|0]&255;}
function ANA(a,b,c){var d,e;d=a.dS.b4.data;e=a.dH;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.dS.b4.data[(a.dH+b|0)+1|0]=c>>16<<24>>24;a.dS.b4.data[(a.dH+b|0)+2|0]=c>>8<<24>>24;a.dS.b4.data[(a.dH+b|0)+3|0]=c<<24>>24;}
function AFM(){E.call(this);this.tX=null;}
function AQZ(a){var b=new AFM();AXy(b,a);return b;}
function AXy(a,b){a.tX=b;}
function VB(a,b,c){return F5(b,a.tX)>=F5(c,a.tX)?1:(-1);}
function ASM(a,b,c){return VB(a,b,c);}
function K9(){E.call(this);}
var A$t=null;var A$u=null;function A$v(){var a=new K9();AMg(a);return a;}
function AMg(a){return;}
function Rx(b){var c;c=0;while(true){if(c>=A$t.data.length)return (-1);if(b==A$t.data[c])break;c=c+1|0;}return c;}
function AJL(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;A$t=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;A$u=b;}
function Sg(){E.call(this);this.vJ=null;}
function AKf(a,b,c){var d,e;d=b.eU;e=c.eU;return d&&!e?1:e&&!d?(-1):F5(b,a.vJ)>=F5(c,a.vJ)?(-1):1;}
function AYF(a,b,c){return AKf(a,b,c);}
function Gk(){E.call(this);}
var A$w=null;var A$x=null;var A$y=null;var A$z=null;var A$A=null;function A$B(){var a=new Gk();V5(a);return a;}
function V5(a){return;}
function OH(b,c){var d,e,f;if(c===null)c=A$z;d=N(E,b.p);AFN(b,d);Nf(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;Oh(b,e,f[e]);e=e+1|0;}}
function AIO(){A$w=new Pd;A$x=new Pc;A$y=new Pe;A$z=new SI;A$A=new SG;}
function GK(){var a=this;E.call(a);a.ls=null;a.vL=null;a.z4=null;a.zn=null;a.DE=null;a.CE=0.0;a.B7=0.0;a.Bx=0.0;a.Bw=0.0;a.Bv=0.0;}
var A9I=null;var A93=0.0;var A94=0.0;var A95=0.0;function A1D(){var a=new GK();YI(a);return a;}
function YI(a){var b;a.ls=CY();BK(a.ls,K(HN),A1V());BK(a.ls,K(Lm),A1m());b=K_(G_(a.ls));while(Fi(b)){Ko(b).pv=a;}}
function RG(a,b){var c;c=Cz(a.ls,b);if(c===null&&b!==K(DF)){c=RG(a,H8(b));BK(a.ls,b,c);}return c;}
function ADj(a,b){return Ss(a,b)===null?0:1;}
function Ss(a,b){return RG(a,C4(b));}
function ALB(a,b,c,d,e,f){var g,h,i;a.zn=b;a.z4=c;a.DE=e;a.vL=d;a.CE=e.K+(e.q-e.K)*f;a.B7=e.P+(e.E-e.P)*f;g=e.b6;h=e.c-e.b6;i=f;a.Bx=g+h*i;a.Bw=e.bP+(e.j-e.bP)*i;a.Bv=e.b7+(e.d-e.b7)*i;}
function UP(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(AFT(b,a.Bx,a.Bw,a.Bv)>=4096.0)return;d=a.zn;e=b.de;f=b.dc;g=b.dj;$p=1;case 1:$z=AHV(d,e,f,g);if(C()){break _;}h=$z;Fe(h,h,h);i=b.de-A93;j=b.dc-A94;k=b.dj-A95;$p=2;case 2:AAL(a,b,i,j,k,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAL(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=Ss(a,b);if(g===null)return;$p=1;case 1:g.zG(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AZ9(a){return a.vL;}
function AGy(){A9I=A1D();}
function GM(){var a=this;E.call(a);a.dn=null;a.BY=null;a.r6=null;a.mI=null;a.DP=null;a.pI=0.0;a.CR=0.0;a.B3=null;a.AG=0.0;a.AF=0.0;a.AE=0.0;}
var A5F=null;var A90=0.0;var A91=0.0;var A92=0.0;function A0s(){var a=new GM();ABM(a);return a;}
function ABM(a){var b,c,d,e,f;a.dn=CY();BK(a.dn,K(IN),A0a());b=a.dn;c=new Qz;d=A2d();e=new Nc;Ji(e,6,0.5);Fx(c,d,0.699999988079071);c.jh=e;BK(b,K(He),c);d=a.dn;f=new Qi;c=A1U();e=A1B();Fx(f,c,0.699999988079071);f.jh=e;BK(d,K(I6),f);BK(a.dn,K(In),A1N());BK(a.dn,K(HR),AQE(A16(),0.5));d=a.dn;f=new Dj;c=new GG;I5(c);Fx(f,c,0.5);BK(d,K(HD),f);BK(a.dn,K(HW),A1c());d=a.dn;f=new QC;c=new GG;I5(c);Fx(f,c,3.0);f.rK=6.0;BK(d,K(Jt),f);BK(a.dn,K(Ea),AQE(AZw(),0.5));d=a.dn;f=new Qp;D8(f);BK(d,K(CO),f);BK(a.dn,K(Hh),A1z());d
=a.dn;f=new OD;D8(f);BK(d,K(HV),f);BK(a.dn,K(Er),TX());BK(a.dn,K(Kw),A0v());BK(a.dn,K(Ia),A0q());BK(a.dn,K(Fp),A1K());d=K_(G_(a.dn));while(Fi(d)){Ko(d).hF=a;}}
function S3(a,b){var c;c=Cz(a.dn,b);if(c===null&&b!==K(CO)){c=S3(a,H8(b));BK(a.dn,b,c);}return c;}
function Pg(a,b){return S3(a,C4(b));}
function ACo(a,b,c,d,e,f,g){var h,i,j;a.mI=b;a.r6=c;a.B3=f;a.DP=e;a.BY=d;a.pI=e.K+(e.q-e.K)*g;a.CR=e.P+(e.E-e.P)*g;h=e.b6;i=e.c-e.b6;j=g;a.AG=h+i*j;a.AF=e.bP+(e.j-e.bP)*j;a.AE=e.b7+(e.d-e.b7)*j;}
function AHM(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.b6;e=b.c-b.b6;f=c;e=d+e*f;d=b.bP+(b.j-b.bP)*f;g=b.b7+(b.d-b.b7)*f;h=b.K+(b.q-b.K)*c;$p=1;case 1:$z=b.s$(c);if(C()){break _;}i=$z;Fe(i,i,i);e=e-A90;d=d-A91;f=g-A92;$p=2;case 2:AK5(a,b,e,d,f,h,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AK5(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=Pg(a,b);if(h===null)return;$p=1;case 1:h.hR(b,c,d,e,f,g);if(C()){break _;}$p=2;case 2:AHX(h,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AXC(a,b){a.mI=b;}
function AEQ(a,b,c,d){var e,f,g;e=b-a.AG;f=c-a.AF;g=d-a.AE;return e*e+f*f+g*g;}
function AFo(){A5F=A0s();}
function Iq(){B5.call(this);}
function A$C(){var a=new Iq();AXq(a);return a;}
function AXq(a){Q(a);}
function R5(){var a=this;E.call(a);a.d9=0;a.eo=0;a.d$=0;}
function Cy(a,b,c){var d=new R5();APB(d,a,b,c);return d;}
function APB(a,b,c,d){a.d9=b;a.eo=c;a.d$=d;}
function AWo(a,b){var c;if(!(b instanceof R5))return 0;c=b;return c.d9==a.d9&&c.eo==a.eo&&c.d$==a.d$?1:0;}
function ASW(a){return (Bh(a.d9,8976890)+Bh(a.eo,981131)|0)+a.d$|0;}
function Ma(){Eu.call(this);}
var A$D=0.0;var A$E=null;function ZQ(){A$D=NaN;A$E=K($rt_floatcls());}
function Gf(){E.call(this);}
var A2J=null;var A2L=null;var A2M=null;var A2K=null;var A2I=null;function A$F(){var a=new Gf();AK9(a);return a;}
function AK9(a){return;}
function AHq(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;A2J=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);A2L=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);A2M=b;A2K=new Se;A2I=new Pb;}
function K$(){E.call(this);}
var A$G=null;var A$H=null;function A$I(){var a=new K$();AFg(a);return a;}
function AFg(a){return;}
function AIP(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=$rt_floatToIntBits(b);c.wF=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.sx=0;c.sj=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AI2(A$H,f);if(h<0)h= -h-2|0;i=9+(f-A$H.data[h]|0)|0;j=Long_fromInt(e);k=Long_shru(Long_mul(j,Long_fromInt(A$G.data[h])),32-i|0).lo;if(k>=1000000000){h=h+1|0;i=9+(f-A$H.data[h]|0)|0;k=Long_shru(Long_mul(j,Long_fromInt(A$G.data[h])),
32-i|0).lo;}g=(31-i|0)-g|0;l=g>=0?A$G.data[h]>>>g:A$G.data[h]<< -g;m=(l+1|0)>>1;n=l>>1;if(e==4194304)n=n>>2;o=10;while(o<=n){o=o*10|0;}if((k%o|0)>=(n/2|0))o=o/10|0;p=10;while(p<=m){p=p*10|0;}if((p-(k%p|0)|0)>(m/2|0))p=p/10|0;e=S(o,p);e=e>0?Bh(k/o|0,o):e<0?Bh(k/p|0,p)+p|0:Bh((k+(p/2|0)|0)/p|0,p);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.sx=e;c.sj=h-50|0;}
function AF3(){var b,c,d,e,f,g,h,i;A$G=$rt_createIntArray(100);A$H=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=A$G.data;g=d+50|0;f[g]=$rt_udiv(e,20);A$H.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=A$G.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);A$H.data[i]=c;d=d+1|0;}}
function Pb(){var a=this;E.call(a);a.sx=0;a.sj=0;a.wF=0;}
function A$J(){var a=new Pb();AMY(a);return a;}
function AMY(a){return;}
function Dj(){var a=this;C1.call(a);a.lm=null;a.jh=null;}
function AQE(a,b){var c=new Dj();Fx(c,a,b);return c;}
function Fx(a,b,c){D8(a);a.lm=b;a.kV=c;}
function AZf(a,b){a.jh=b;}
function VX(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();X(2884);try{h=b.ex+(b.da-b.ex)*g;i=b.K+(b.q-b.K)*g;j=b.P+(b.E-b.P)*g;Br(c,d,e);k=b.nq+g;Bq(180.0-h,0.0,1.0,0.0);if(b.cD>0){f=DG((b.cD+g
-1.0)/20.0*1.600000023841858);if(f>1.0)f=1.0;Bq(f*a.zv(b),0.0,0.0,1.0);}l=0.0625;V(32826);Co((-1.0),(-1.0),1.0);a.uW(b,g);Br(0.0,(-1.5078125),0.0);m=b.iV+(b.bX-b.iV)*g;n=b.fI-b.bX*(1.0-g);if(m>1.0)m=1.0;o=b.rW;p=M8(b);$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){o=$$je;}else{throw $$e;}}BY(o);V(2884);By();return;case 1:try{AJZ(a,o,p);if(C()){break _;}V(3008);o=a.lm;f=i-h;o.gW(n,m,k,f,j,l);q=0;if(q>=4){$p=2;continue _;}$p=3;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){o=$$je;}
else{throw $$e;}}BY(o);V(2884);By();return;case 2:a:{try{$z=Zd(b,g);if(C()){break _;}r=$z;s=a.zy(b,r,g);q=s>>24&255;if(!(q<=0&&b.c$<=0&&b.cD<=0)){X(3553);X(3008);V(3042);C0(770,771);Gz(514);if(!(b.c$<=0&&b.cD<=0)){BN(r,0.0,0.0,0.4000000059604645);a.lm.gW(n,m,k,f,j,l);t=0;if(t<4){$p=4;continue _;}}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BN(u,v,w,x);a.lm.gW(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}Gz(515);X(3042);V(3008);V(3553);}X(32826);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz)
{o=$$je;}else{throw $$e;}}BY(o);}V(2884);By();return;case 3:try{$z=a.j0(b,q);if(C()){break _;}s=$z;if(s){a.jh.gW(n,m,k,f,j,l);X(3042);V(3008);}q=q+1|0;if(q>=4){$p=2;continue _;}continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){o=$$je;}else{throw $$e;}}BY(o);V(2884);By();return;case 4:a:{try{$z=a.j0(b,t);if(C()){break _;}y=$z;if(y){BN(r,0.0,0.0,0.4000000059604645);a.jh.gW(n,m,k,f,j,l);}t=t+1|0;if(t<4){continue _;}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BN(u,v,w,x);a.lm.gW(n,
m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}Gz(515);X(3042);V(3008);V(3553);X(32826);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){o=$$je;}else{throw $$e;}}BY(o);}V(2884);By();return;case 5:a:{try{$z=a.j0(b,y);if(C()){break _;}s=$z;if(s){BN(u,v,w,x);a.jh.gW(n,m,k,f,j,l);}y=y+1|0;if(y>=4){Gz(515);X(3042);V(3008);V(3553);X(32826);break a;}continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){o=$$je;}else{throw $$e;}}BY(o);}V(2884);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,$p);}
function AKo(a,b,c){return 0;}
function AVB(a,b){return 90.0;}
function AWv(a,b,c,d){return 0;}
function AYn(a,b,c){return;}
function AJu(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.DW(b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Mo(){var a=this;Dj.call(a);a.x5=null;a.xr=null;a.zj=null;}
var A$K=null;function A1c(){var a=new Mo();ADf(a);return a;}
function ADf(a){Fx(a,Tr(0.0),0.5);a.x5=a.lm;a.xr=Tr(1.0);a.zj=Tr(0.5);}
function ALQ(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=ADk(b.F,3-c|0);if(d!==null){e=Dl(d);if(e instanceof Fc){f=e;b=new Bc;Ba(b);b=H(H(H(b,B(560)),A$K.data[f.yz]),B(561));g=S(c,2);b=O(H(Bd(b,g?1:2),B(366)));$p=1;continue _;}}return 0;case 1:AFm(a,b);if(C()){break _;}h=g?a.xr:a.zj;h.hZ.hT=c?0:1;h.j4.hT=c?0:1;b=h.nO;i=S(c,1);b.hT=i&&g?0:1;h.dv.hT=i?0:1;h.dh.hT=i?0:1;h.h_.hT
=g&&c!=3?0:1;h.gw.hT=g&&c!=3?0:1;a.jh=h;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function Zj(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-b.cF;$p=1;case 1:VX(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AGn(a){B3(a.x5.dv,0.0625);}
function U1(a,b,c){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ALQ(a,b,c);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,$p);}
function AGR(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:Zj(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Yl(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:Zj(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function V1(){var b,c;b=N(Cp,5);c=b.data;c[0]=B(231);c[1]=B(562);c[2]=B(563);c[3]=B(564);c[4]=B(565);A$K=b;}
function JN(){var a=this;Fo.call(a);a.gQ=0;a.h6=0;a.g5=0;a.hg=0;a.jl=null;a.co=0;a.gC=0;a.wj=0;}
function C9(a,b,c,d){var e=new JN();AUl(e,a,b,c,d);return e;}
function A$L(a,b,c,d,e,f){var g=new JN();PC(g,a,b,c,d,e,f);return g;}
function AUl(a,b,c,d,e){PC(a,b,c,d,200,20,e);}
function PC(a,b,c,d,e,f,g){K8(a);a.gQ=200;a.h6=20;a.gC=1;a.wj=1;a.co=b;a.g5=c;a.hg=d;a.gQ=e;a.h6=f;a.jl=g;}
function Ys(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.wj)return;e=b.ey;f=3553;g=b.bi;b=B(378);$p=1;case 1:$z=ACG(g,b);if(C()){break _;}h=$z;Ce(f,h);BN(1.0,1.0,1.0,1.0);h=1;f=c>=a.g5&&d>=a.hg&&c<(a.g5+a.gQ|0)&&d<(a.hg+a.h6|0)?1:0;if(!a.gC)h=0;else if(f)h=2;i=a.g5;j=a.hg;h=46+(h*20|0)|0;Ct(a,i,j,0,h,a.gQ/2|0,a.h6);Ct(a,a.g5+(a.gQ/2|0)|0,a.hg,200-(a.gQ/2|0)|0,
h,a.gQ/2|0,a.h6);if(!a.gC)Dz(a,e,a.jl,a.g5+(a.gQ/2|0)|0,a.hg+((a.h6-8|0)/2|0)|0,(-6250336));else if(!f)Dz(a,e,a.jl,a.g5+(a.gQ/2|0)|0,a.hg+((a.h6-8|0)/2|0)|0,14737632);else Dz(a,e,a.jl,a.g5+(a.gQ/2|0)|0,a.hg+((a.h6-8|0)/2|0)|0,16777120);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function O8(a,b,c){return a.gC&&b>=a.g5&&c>=a.hg&&b<(a.g5+a.gQ|0)&&c<(a.hg+a.h6|0)?1:0;}
function Kk(){E.call(this);}
function A$M(){var a=new Kk();AO3(a);return a;}
function AO3(a){return;}
function NH(){}
function IT(){var a=this;Kk.call(a);a.xc=null;a.DR=null;a.s6=0;a.z5=0;a.lX=null;a.ty=null;}
function ZF(a){var b,c,d;a:{b=a.s6;c=a.z5;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6;return d|c&8|b<<2&16|c&32|b>>>8&64|b>>>5&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function W0(a){return a.lX.nu();}
function SE(a,b){var c,d,e,f,g;if(a.s6&1){c=new J$;Q(c);M(c);}if(a.ty===null){c=new P1;Q(c);M(c);}d=b.data;e=d.length;if(e!=a.lX.data.length){c=new Cq;Q(c);M(c);}f=0;while(true){if(f>=e){c=b.data;g=new a.xc.fl();a.ty.call(g,c);return g;}if(!E$(a.lX.data[f])&&d[f]!==null&&!QT(a.lX.data[f],d[f])){c=new Cq;Q(c);M(c);}if(E$(a.lX.data[f])&&d[f]===null)break;f=f+1|0;}c=new Cq;Q(c);M(c);}
function L_(){}
function NM(){E.call(this);}
function A$N(){var a=new NM();AZL(a);return a;}
function AZL(a){return;}
function AEr(a){var b,c,d;Y();A20.requestPointerLock();b=B2();if(RY())clearTimeout(RY());KT(0);if(Long_lt(Long_sub(b,Ne()),Long_fromInt(3000))){c=new Qa;c.EZ=a;d=3000-Long_sub(b,Ne()).lo|0;KT(setTimeout(Cj(c,"onTimer"),d));}}
function AS4(a){AEr(a);}
function SI(){E.call(this);}
function A$O(){var a=new SI();AOH(a);return a;}
function AOH(a){return;}
function AVf(a,b,c){return b!==null?b.kD(c): -c.kD(b);}
function SG(){E.call(this);}
function A$P(){var a=new SG();AVX(a);return a;}
function AVX(a){return;}
function Pd(){Ev.call(this);}
function A$Q(){var a=new Pd();AYX(a);return a;}
function AYX(a){return;}
function Pc(){E8.call(this);}
function A$R(){var a=new Pc();AY0(a);return a;}
function AY0(a){return;}
function Pe(){Fn.call(this);}
function A$S(){var a=new Pe();AUB(a);return a;}
function AUB(a){return;}
function Hd(){E.call(this);this.pv=null;}
function AFs(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.pv.z4;$p=1;case 1:$z=ACG(c,b);if(C()){break _;}d=$z;DJ(c,d);return;default:Es();}}CM().s(a,b,c,d,$p);}
function ASv(a,b){a.pv=b;}
function AId(a){return a.pv.vL;}
function WI(){Hd.call(this);this.A7=null;}
function A1V(){var a=new WI();ANt(a);return a;}
function ANt(a){a.A7=A1y();}
function ALI(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();Br(c+0.5,d+0.75,e+0.5);$p=1;case 1:$z=AG2(b);if(C()){break _;}g=$z;Bq( -((g*360|0)/16.0),0.0,1.0,0.0);h=B(566);$p=2;case 2:AFs(a,h);if(C()){break _;}BW();Co(1.0,(-1.0),(-1.0));AHN(a.A7);By();Br(0.0,0.5,0.09000000357627869);Co(0.01666666753590107,(-0.01666666753590107),0.01666666753590107);B_(0.0,
0.0,(-0.01666666753590107));h=AId(a);i=0;while(i<b.fM.data.length){j=b.fM.data[i];if(i!=b.pU)D5(h,j, -Db(h,j)/2|0,(i*10|0)-(b.fM.data.length*5|0)|0,0);else{k=new Bc;Ba(k);j=O(H(H(H(k,B(567)),j),B(568)));D5(h,j, -Db(h,j)/2|0,(i*10|0)-(b.fM.data.length*5|0)|0,0);}i=i+1|0;}BN(1.0,1.0,1.0,1.0);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function TA(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ALI(a,b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Lm(){var a=this;DF.call(a);a.iZ=0;a.iO=null;a.kA=0.0;a.lb=0.0;}
function A12(){var a=new Lm();AXI(a);return a;}
function AXI(a){a.iZ=(-1);a.iO=B(569);a.lb=0.0;a.iZ=20;}
function Vx(a){return AB1(a.bY.bc,a.de,a.dc,a.dj)>256.0?0:1;}
function YC(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lb=a.kA;if(Vx(a)){b=a.de+L(a.bY.n);c=a.dc+L(a.bY.n);d=a.dj+L(a.bY.n);BP(a.bY,B(248),b,c,d,0.0,0.0,0.0);BP(a.bY,B(249),b,c,d,0.0,0.0,0.0);a.kA=a.kA+1000.0/(a.iZ+200.0);while(a.kA>360.0){a.kA=a.kA-360.0;a.lb=a.lb-360.0;}if(a.iZ==(-1))LE(a);if(a.iZ>0)a.iZ=
a.iZ-1|0;else{e=4;f=0;if(f<e){g=HQ(a.iO,a.bY);if(g===null)return;h=a.bY;i=C4(g);j=Da(Dy(a.de,a.dc,a.dj,a.de+1|0,a.dc+1|0,a.dj+1|0),8.0,4.0,8.0);$p=1;continue _;}}}return;case 1:$z=AHS(h,i,j);if(C()){break _;}h=$z;if(h.p>=6){LE(a);return;}k=a.de+(Cb(a.bY.n)-Cb(a.bY.n))*4.0;l=(a.dc+D(a.bY.n,3)|0)-1|0;m=a.dj+(Cb(a.bY.n)-Cb(a.bY.n))*4.0;IU(g,k,l,m,L(a.bY.n)*360.0,0.0);$p=2;case 2:$z=g.sO(k,l,m);if(C()){break _;}n=$z;if(n){h=a.bY;$p=3;continue _;}f=f+1|0;if(f>=e)return;g=HQ(a.iO,a.bY);if(g===null)return;h=a.bY;i
=C4(g);j=Da(Dy(a.de,a.dc,a.dj,a.de+1|0,a.dc+1|0,a.dj+1|0),8.0,4.0,8.0);$p=1;continue _;case 3:AIS(h,g);if(C()){break _;}o=0;while(o<20){c=a.de+0.5+(L(a.bY.n)-0.5)*2.0;d=a.dc+0.5+(L(a.bY.n)-0.5)*2.0;k=a.dj+0.5+(L(a.bY.n)-0.5)*2.0;BP(a.bY,B(248),c,d,k,0.0,0.0,0.0);BP(a.bY,B(249),c,d,k,0.0,0.0,0.0);o=o+1|0;}AAe(g);LE(a);f=f+1|0;if(f>=e)return;g=HQ(a.iO,a.bY);if(g===null)return;h=a.bY;i=C4(g);j=Da(Dy(a.de,a.dc,a.dj,a.de+1|0,a.dc+1|0,a.dj+1|0),8.0,4.0,8.0);$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,$p);}
function LE(a){a.iZ=200+D(a.bY.n,600)|0;}
function AMe(){Hd.call(this);this.ur=null;}
function A1m(){var a=new AMe();APZ(a);return a;}
function APZ(a){a.ur=CY();}
function VN(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();Br(c+0.5,d,e+0.5);g=Cz(a.ur,b.iO);if(g===null){g=HQ(b.iO,null);BK(a.ur,b.iO,g);}if(g===null){By();return;}g.k=b.bY;Br(0.0,0.4000000059604645,0.0);Bq((b.lb+(b.kA-b.lb)*f)*10.0,0.0,1.0,0.0);Bq((-30.0),1.0,0.0,0.0);Br(0.0,(-0.4000000059604645),0.0);Co(0.4375,0.4375,0.4375);b=A5F;c=0.0;d=0.0;e=0.0;h=0.0;$p=1;case 1:AK5(b,g,c,d,e,
h,f);if(C()){break _;}By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function ALx(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:VN(a,b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AKN(){Dj.call(this);}
function A0a(){var a=new AKN();AU1(a);return a;}
function AU1(a){Fx(a,AVF(),1.0);a.jh=AVF();}
function AWn(a,b){return 180.0;}
function TU(a,b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c)return 0;if(c)return 0;d=B(570);$p=1;case 1:AFm(a,d);if(C()){break _;}e=1.0;f=1.0;$p=2;case 2:$z=Zd(b,f);if(C()){break _;}f=$z;f=(e-f)*0.5;V(3042);X(3008);C0(770,771);BN(1.0,1.0,1.0,f);return 1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AWk(a,b){return 180.0;}
function T9(a,b,c){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=TU(a,b,c);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,$p);}
function Qz(){Dj.call(this);}
function ABw(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(571);$p=1;case 1:AFm(a,d);if(C()){break _;}return !c&&b.oW?1:0;default:Es();}}CM().s(a,b,c,d,$p);}
function AG0(a,b,c){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ABw(a,b,c);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,$p);}
function Fa(){var a=this;DO.call(a);a.gv=null;a.gR=null;a.iK=null;a.iJ=null;a.iI=null;a.iL=null;}
function A$T(a,b){var c=new Fa();Ji(c,a,b);return c;}
function Ji(a,b,c){var d,e;a.gv=BF(0,0);BA(a.gv,(-4.0),(-4.0),(-8.0),8,8,8,c);BD(a.gv,0.0,18-b|0,(-6.0));a.gR=BF(28,8);BA(a.gR,(-5.0),(-10.0),(-7.0),10,16,8,c);BD(a.gR,0.0,17-b|0,2.0);a.iK=BF(0,16);BA(a.iK,(-2.0),0.0,(-2.0),4,b,4,c);d=a.iK;e=24-b|0;BD(d,(-3.0),e,7.0);a.iJ=BF(0,16);BA(a.iJ,(-2.0),0.0,(-2.0),4,b,4,c);BD(a.iJ,3.0,e,7.0);a.iI=BF(0,16);BA(a.iI,(-2.0),0.0,(-2.0),4,b,4,c);BD(a.iI,(-3.0),e,(-5.0));a.iL=BF(0,16);BA(a.iL,(-2.0),0.0,(-2.0),4,b,4,c);BD(a.iL,3.0,e,(-5.0));}
function AYS(a,b,c,d,e,f,g){AEP(a,b,c,d,e,f,g);B3(a.gv,g);B3(a.gR,g);B3(a.iK,g);B3(a.iJ,g);B3(a.iI,g);B3(a.iL,g);}
function AEP(a,b,c,d,e,f,g){var h;a.gv.bL=e/57.2957763671875;a.gR.bM=1.5707963705062866;h=a.iK;b=b*0.6661999821662903;h.bM=Bx(b)*1.399999976158142*c;h=a.iJ;d=b+3.1415927410125732;h.bM=Bx(d)*1.399999976158142*c;a.iI.bM=Bx(d)*1.399999976158142*c;a.iL.bM=Bx(b)*1.399999976158142*c;}
function Nc(){Fa.call(this);}
function A2d(){var a=new Nc();AQB(a);return a;}
function AQB(a){Ji(a,6,0.0);}
function Qi(){Dj.call(this);}
function AHG(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(572);$p=1;case 1:AFm(a,d);if(C()){break _;}return !c&&!b.vA?1:0;default:Es();}}CM().s(a,b,c,d,$p);}
function ALL(a,b,c){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AHG(a,b,c);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,$p);}
function Yi(){Fa.call(this);}
function A1U(){var a=new Yi();AYV(a);return a;}
function AYV(a){Ji(a,12,0.0);a.gv=BF(0,0);BA(a.gv,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BD(a.gv,0.0,6.0,(-8.0));a.gR=BF(28,8);BA(a.gR,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BD(a.gR,0.0,5.0,2.0);}
function ALA(){Fa.call(this);}
function A1B(){var a=new ALA();AOy(a);return a;}
function AOy(a){Ji(a,12,0.0);a.gv=BF(0,0);BA(a.gv,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BD(a.gv,0.0,6.0,(-8.0));a.gR=BF(28,8);BA(a.gR,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BD(a.gR,0.0,5.0,2.0);a.iK=BF(0,16);BA(a.iK,(-2.0),0.0,(-2.0),4,6,4,0.5);BD(a.iK,(-3.0),12.0,7.0);a.iJ=BF(0,16);BA(a.iJ,(-2.0),0.0,(-2.0),4,6,4,0.5);BD(a.iJ,3.0,12.0,7.0);a.iI=BF(0,16);BA(a.iI,(-2.0),0.0,(-2.0),4,6,4,0.5);BD(a.iI,(-3.0),12.0,(-5.0));a.iL=BF(0,16);BA(a.iL,(-2.0),0.0,(-2.0),4,6,4,0.5);BD(a.iL,3.0,12.0,(-5.0));}
function XK(){Dj.call(this);}
function A1N(){var a=new XK();ARI(a);return a;}
function ARI(a){Fx(a,A0S(),0.5);}
function Y_(a,b,c){var d,e,f;d=NB(b,c);e=1.0+Bm(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;c=d*d;c=c*c;f=(1.0+c*0.4000000059604645)*e;Co(f,(1.0+c*0.10000000149011612)/e,f);}
function T8(a,b,c,d){var e,f;e=NB(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function AXx(a,b,c){Y_(a,b,c);}
function ARS(a,b,c,d){return T8(a,b,c,d);}
function GG(){KD.call(this);}
function A$U(){var a=new GG();AXJ(a);return a;}
function AXJ(a){I5(a);}
function ATX(a,b,c,d,e,f,g){var h,i,j;ADO(a,b,c,d,e,f,g);h=Bm(a.vr*3.1415927410125732);i=Bm((1.0-(1.0-a.vr)*(1.0-a.vr))*3.1415927410125732);a.dv.bJ=0.0;a.dh.bJ=0.0;j=a.dv;b=0.10000000149011612-h*0.6000000238418579;j.bL= -b;a.dh.bL=b;a.dv.bM=(-1.5707963705062866);a.dh.bM=(-1.5707963705062866);j=a.dv;b=j.bM;c=h*1.2000000476837158-i*0.4000000059604645;j.bM=b-c;j=a.dh;j.bM=j.bM-c;j=a.dv;b=j.bJ;c=d*0.09000000357627869;j.bJ=b+Bx(c)*0.05000000074505806+0.05000000074505806;j=a.dh;j.bJ=j.bJ-(Bx(c)*0.05000000074505806
+0.05000000074505806);j=a.dv;b=j.bM;c=d*0.06700000166893005;j.bM=b+Bm(c)*0.05000000074505806;j=a.dh;j.bM=j.bM-Bm(c)*0.05000000074505806;}
function ADp(){GG.call(this);}
function A16(){var a=new ADp();APq(a);return a;}
function APq(a){I5(a);a.dv=BF(40,16);BA(a.dv,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BD(a.dv,(-5.0),2.0,0.0);a.dh=BF(40,16);a.dh.ks=1;BA(a.dh,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BD(a.dh,5.0,2.0,0.0);a.h_=BF(0,16);BA(a.h_,(-1.0),0.0,(-1.0),2,12,2,0.0);BD(a.h_,(-2.0),12.0,0.0);a.gw=BF(0,16);a.gw.ks=1;BA(a.gw,(-1.0),0.0,(-1.0),2,12,2,0.0);BD(a.gw,2.0,12.0,0.0);}
function Jt(){Dp.call(this);}
function AJF(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.k;$p=1;case 1:$z=AHV(e,b,c,d);if(C()){break _;}f=$z;return f-0.5;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function QC(){Dj.call(this);this.rK=0.0;}
function Vl(a,b,c){Co(a.rK,a.rK,a.rK);}
function AZz(a,b,c){Vl(a,b,c);}
function Qp(){C1.call(this);}
function A$V(){var a=new Qp();ARw(a);return a;}
function ARw(a){D8(a);}
function AEp(a,b,c,d,e,f,g){BW();AXS(b.G,c-b.b6,d-b.bP,e-b.b7);By();}
function Hh(){var a=this;CO.call(a);a.pO=0;a.dd=0;a.l6=0;a.A4=0;a.ma=0;a.dl=null;}
function Id(a,b){var c,d,e,f,g,h,i,j,k,l;a.dd=b;c=b*90|0;a.q=c;a.K=c;c=a.dl.fC;d=a.dl.lN;e=a.dl.fC;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;d=d/32.0;f=e/32.0;g=a.l6+0.5;h=a.A4+0.5;i=a.ma+0.5;if(!b)i=i-0.5625;j=S(b,1);if(!j)g=g-0.5625;k=S(b,2);if(!k)i=i+0.5625;l=S(b,3);if(!l)g=g+0.5625;if(!b)g=g-GD(a,a.dl.fC);if(!j)i=i+GD(a,a.dl.fC);if(!k)g=g+GD(a,a.dl.fC);if(!l)i=i-GD(a,a.dl.fC);e=h+GD(a,a.dl.lN);CC(a,g,e,i);K0(a.G,g-c+0.0062500000931322575,e-d+0.0062500000931322575,i-f+0.0062500000931322575,g+c+(-0.0062500000931322575),
e+d+(-0.0062500000931322575),i+f+(-0.0062500000931322575));}
function GD(a,b){return b==32?0.5:b!=64?0.0:0.5;}
function YT(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.pO;a.pO=b+1|0;if(b!=100)return;$p=1;case 1:$z=Vz(a);if(C()){break _;}c=$z;if(c)return;a.pO=0;$p=2;case 2:B4(a);if(C()){break _;}d=a.k;e=new Er;f=a.k;g=a.c;h=a.j;i=a.d;j=new B6;Bw();Dg(j,A7S);F_(e,f,g,h,i,j);$p=3;case 3:AIS(d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Vz(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k;c=a.G;$p=1;case 1:$z=TP(b,a,c);if(C()){break _;}b=$z;if(b.p>0)return 0;d=a.dl.fC/16|0;e=a.dl.lN/16|0;f=a.l6;g=a.ma;if(!a.dd)f=I(a.c-a.dl.fC/32.0);if(a.dd==1)g=I(a.d-a.dl.fC/32.0);if(a.dd==2)f=I(a.c-a.dl.fC/32.0);if(a.dd==3)g=I(a.d-a.dl.fC/32.0);h=I(a.j-a.dl.lN/32.0);i=0;while
(i<d){j=0;if(j<e){if(a.dd&&a.dd!=2){b=a.k;k=a.l6;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.k;k=f+i|0;l=h+j|0;m=a.ma;$p=3;continue _;}i=i+1|0;}b=a.k;c=a.G;$p=2;case 2:$z=Zh(b,a,c);if(C()){break _;}c=$z;k=0;while(k<c.p){if(Z(c,k) instanceof Hh)return 0;k=k+1|0;}return 1;case 3:$z=XB(b,k,l,m);if(C()){break _;}b=$z;if(!b.c3())return 0;j=j+1|0;while(true){if(j<e){if(a.dd&&a.dd!=2){b=a.k;k=a.l6;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.k;k=f+i|0;l=h+j|0;m=a.ma;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.k;c=a.G;$p=2;continue _;case 4:$z
=XB(b,k,l,m);if(C()){break _;}b=$z;if(!b.c3())return 0;j=j+1|0;while(true){if(j<e){if(a.dd&&a.dd!=2){b=a.k;k=a.l6;l=h+j|0;m=g+i|0;continue _;}b=a.k;k=f+i|0;l=h+j|0;m=a.ma;$p=3;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.k;c=a.G;$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AQm(a){return 1;}
function ZT(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:B4(a);if(C()){break _;}d=a.k;b=new Er;e=a.k;f=a.c;g=a.j;h=a.d;i=new B6;Bw();Dg(i,A7S);F_(b,e,f,g,h,i);$p=2;case 2:AIS(d,b);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function Wa(){C1.call(this);this.D2=null;}
function A1z(){var a=new Wa();ARC(a);return a;}
function ARC(a){D8(a);a.D2=new Df;}
function AKG(a,b,c,d,e,f,g){var h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();Br(c,d,e);Bq(f,0.0,1.0,0.0);V(32826);h=B(573);$p=1;case 1:AFm(a,h);if(C()){break _;}h=b.dl;Co(0.0625,0.0625,0.0625);i=h.fC;j=h.lN;k=h.w5;l=h.w4;$p=2;case 2:Yt(a,b,i,j,k,l);if(C()){break _;}X(32826);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Yt(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g= -c/2.0;h= -d/2.0;i
=0;j=c/16|0;k=d/16|0;l=e+c|0;m=f+d|0;while(i<j){if(0<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=0+1|0;f=q*16|0;r=h+f;s=0*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=I(b.c);x=I(b.j+v/16.0);y=I(b.d);if(!b.dd)w=I(b.c+u/16.0);if(b.dd==1)y=I(b.d-u/16.0);if(b.dd==2)w=I(b.c-u/16.0);if(b.dd==3)y=I(b.d+u/16.0);z=a.hF.mI;$p=1;continue _;}i=i+1|0;}return;case 1:$z=AHV(z,w,x,y);if(C()){break _;}ba=$z;Fe(ba,ba,ba);ba=(l-o|0)/256.0;u=(l-c|0)/256.0;v=(m-s|0)/256.0;bb=(m-f|0)/256.0;Bv();z=A35;Bu(z);B_(0.0,0.0,(-1.0));bc=n;bd=t;be=u;bf
=v;F(z,bc,bd,(-0.5),be,bf);bg=p;bh=ba;F(z,bg,bd,(-0.5),bh,bf);bf=r;bi=bb;F(z,bg,bf,(-0.5),bh,bi);F(z,bc,bf,(-0.5),be,bi);B_(0.0,0.0,1.0);F(z,bc,bf,0.5,0.75,0.0);F(z,bg,bf,0.5,0.8125,0.0);F(z,bg,bd,0.5,0.8125,0.0625);F(z,bc,bd,0.5,0.75,0.0625);B_(0.0,(-1.0),0.0);F(z,bc,bf,(-0.5),0.75,0.001953125);F(z,bg,bf,(-0.5),0.8125,0.001953125);F(z,bg,bf,0.5,0.8125,0.001953125);F(z,bc,bf,0.5,0.75,0.001953125);B_(0.0,1.0,0.0);F(z,bc,bd,0.5,0.75,0.001953125);F(z,bg,bd,0.5,0.8125,0.001953125);F(z,bg,bd,(-0.5),0.8125,0.001953125);F(z,
bc,bd,(-0.5),0.75,0.001953125);B_((-1.0),0.0,0.0);F(z,bc,bf,0.5,0.751953125,0.0);F(z,bc,bd,0.5,0.751953125,0.0625);F(z,bc,bd,(-0.5),0.751953125,0.0625);F(z,bc,bf,(-0.5),0.751953125,0.0);B_(1.0,0.0,0.0);F(z,bg,bf,(-0.5),0.751953125,0.0);F(z,bg,bd,(-0.5),0.751953125,0.0625);F(z,bg,bd,0.5,0.751953125,0.0625);F(z,bg,bf,0.5,0.751953125,0.0);Bn(z);s=q;while(true){if(s<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=s+1|0;f=q*16|0;r=h+f;s=s*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=I(b.c);x=I(b.j+v/16.0);y=I(b.d);if(!b.dd)w=I(b.c
+u/16.0);if(b.dd==1)y=I(b.d-u/16.0);if(b.dd==2)w=I(b.c-u/16.0);if(b.dd==3)y=I(b.d+u/16.0);z=a.hF.mI;continue _;}i=i+1|0;if(i>=j)break;s=0;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function AJo(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AKG(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function HV(){var a=this;CO.call(a);a.qM=0;a.rg=0;a.pZ=0;a.tD=0;a.nQ=0;a.ke=0;a.qB=null;a.oq=0;a.lQ=0;}
function ANc(a,b){var c=new HV();ARl(c,a,b);return c;}
function ARl(a,b,c){EO(a,b);a.qM=(-1);a.rg=(-1);a.pZ=(-1);a.tD=0;a.nQ=0;a.ke=0;a.lQ=0;a.qB=c;Dx(a,0.5,0.5);IU(a,c.c,c.j,c.d,c.q,c.E);a.c=a.c-Bx(a.q/180.0*3.1415927410125732)*0.1599999964237213;a.j=a.j-0.10000000149011612;a.d=a.d-Bm(a.q/180.0*3.1415927410125732)*0.1599999964237213;CC(a,a.c,a.j,a.d);a.cF=0.0;a.f= -Bm(a.q/180.0*3.1415927410125732)*Bx(a.E/180.0*3.1415927410125732);a.g=Bx(a.q/180.0*3.1415927410125732)*Bx(a.E/180.0*3.1415927410125732);a.h= -Bm(a.E/180.0*3.1415927410125732);NQ(a,a.f,a.h,a.g,1.5,1.0);}
function NQ(a,b,c,d,e,f){var g,h,i;g=B7(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;g=CH(a.l)*0.007499999832361937;h=f;b=b+g*h;c=c+CH(a.l)*0.007499999832361937*h;d=d+CH(a.l)*0.007499999832361937*h;g=e;b=b*g;c=c*g;d=d*g;a.f=b;a.h=c;a.g=d;i=B7(b*b+d*d);e=CB(b,d)*180.0/3.1415927410125732;a.q=e;a.K=e;e=CB(c,i)*180.0/3.1415927410125732;a.E=e;a.P=e;a.oq=0;}
function AJ3(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AD7(a);if(C()){break _;}if(a.ke>0)a.ke=a.ke-1|0;if(a.nQ){b=a.k;c=a.qM;d=a.rg;e=a.pZ;$p=2;continue _;}a.lQ=a.lQ+1|0;b=BR(a.c,a.j,a.d);f=BR(a.c+a.f,a.j+a.h,a.d+a.g);g=a.k;$p=3;continue _;case 2:$z=X9(b,c,d,e);if(C()){break _;}c=$z;if
(c==a.tD){a.oq=a.oq+1|0;if(a.oq!=1200)return;$p=4;continue _;}a.nQ=0;a.f=a.f*L(a.l)*0.20000000298023224;a.h=a.h*L(a.l)*0.20000000298023224;a.g=a.g*L(a.l)*0.20000000298023224;a.oq=0;a.lQ=0;b=BR(a.c,a.j,a.d);f=BR(a.c+a.f,a.j+a.h,a.d+a.g);g=a.k;$p=3;case 3:$z=AEj(g,b,f);if(C()){break _;}g=$z;b=BR(a.c,a.j,a.d);f=BR(a.c+a.f,a.j+a.h,a.d+a.g);if(g!==null)f=BR(g.fR.t,g.fR.v,g.fR.s);h=null;i=a.k;j=Da(HK(a.G,a.f,a.h,a.g),1.0,1.0,1.0);$p=5;continue _;case 4:B4(a);if(C()){break _;}return;case 5:$z=Zh(i,a,j);if(C()){break _;}i
=$z;k=0.0;d=0;while(d<CZ(i)){j=Z(i,d);if(j.kk()&&!(j===a.qB&&a.lQ<5)){l=NY(Da(j.G,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,f);if(l!==null){m=Di(b,l.fR);if(!(m>=k&&k!==0.0)){h=j;k=m;}}}d=d+1|0;}if(h!==null)g=ASO(h);if(g!==null){if(g.me!==null){b=g.me;f=a.qB;c=4;$p=7;continue _;}a.qM=g.hj;a.rg=g.hk;a.pZ=g.hl;b=a.k;c=a.qM;d=a.rg;e=a.pZ;$p=6;continue _;}a.c=a.c+a.f;a.j=a.j+a.h;a.d=a.d+a.g;n=B7(a.f*a.f+a.g*a.g);a.q=CB(a.f,a.g)*180.0/3.1415927410125732;a.E=CB(a.h,n)*180.0/3.1415927410125732;while
(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while(a.q-a.K>=180.0){a.K=a.K+360.0;}a.E=a.P+(a.E-a.P)*0.20000000298023224;a.q=a.K+(a.q-a.K)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 6:$z=X9(b,c,d,e);if(C()){break _;}c=$z;a.tD=c;a.f=g.fR.t-a.c;a.h=g.fR.v-a.j;a.g=g.fR.s-a.d;n=B7(a.f*a.f+a.h*a.h+a.g*a.g);k=a.c;m=a.f;p=n;a.c=k-m/p*0.05000000074505806;a.j=a.j-a.h/p*0.05000000074505806;a.d=a.d-a.g/p*0.05000000074505806;C2(a.k,a,B(574),
1.0,1.2000000476837158/(L(a.l)*0.20000000298023224+0.8999999761581421));a.nQ=1;a.ke=7;a.c=a.c+a.f;a.j=a.j+a.h;a.d=a.d+a.g;n=B7(a.f*a.f+a.g*a.g);a.q=CB(a.f,a.g)*180.0/3.1415927410125732;a.E=CB(a.h,n)*180.0/3.1415927410125732;while(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while(a.q-a.K>=180.0){a.K=a.K+360.0;}a.E=a.P+(a.E-a.P)*0.20000000298023224;a.q=a.K+(a.q-a.K)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 7:$z=b.eQ(f,c);if(C())
{break _;}c=$z;if(c){C2(a.k,a,B(574),1.0,1.2000000476837158/(L(a.l)*0.20000000298023224+0.8999999761581421));$p=8;continue _;}a.f=a.f*(-0.10000000149011612);a.h=a.h*(-0.10000000149011612);a.g=a.g*(-0.10000000149011612);a.q=a.q+180.0;a.K=a.K+180.0;a.lQ=0;a.c=a.c+a.f;a.j=a.j+a.h;a.d=a.d+a.g;n=B7(a.f*a.f+a.g*a.g);a.q=CB(a.f,a.g)*180.0/3.1415927410125732;a.E=CB(a.h,n)*180.0/3.1415927410125732;while(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while
(a.q-a.K>=180.0){a.K=a.K+360.0;}a.E=a.P+(a.E-a.P)*0.20000000298023224;a.q=a.K+(a.q-a.K)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 8:B4(a);if(C()){break _;}a.c=a.c+a.f;a.j=a.j+a.h;a.d=a.d+a.g;n=B7(a.f*a.f+a.g*a.g);a.q=CB(a.f,a.g)*180.0/3.1415927410125732;a.E=CB(a.h,n)*180.0/3.1415927410125732;while(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while(a.q-a.K>=180.0){a.K=a.K+360.0;}a.E=a.P+(a.E-a.P)*0.20000000298023224;a.q=a.K+(a.q
-a.K)*0.20000000298023224;o=0.9900000095367432;$p=9;case 9:$z=AAu(a);if(C()){break _;}c=$z;if(c){e=0;while(e<4){BP(a.k,B(205),a.c-a.f*0.25,a.j-a.h*0.25,a.d-a.g*0.25,a.f,a.h,a.g);e=e+1|0;}o=0.800000011920929;}k=a.f;m=o;a.f=k*m;a.h=a.h*m;a.g=a.g*m;a.h=a.h-0.029999999329447746;CC(a,a.c,a.j,a.d);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AXi(a,b){var c,d;if(a.nQ&&a.qB===b&&a.ke<=0){c=b.F;d=new B6;Bw();KN(d,A5u.cx,1);if(Rn(c,d)){C2(a.k,a,B(575),0.20000000298023224,((L(a.l)-L(a.l))*0.699999988079071+1.0)*2.0);O1(b,a);B4(a);}}}
function OD(){C1.call(this);}
function A$W(){var a=new OD();AM4(a);return a;}
function AM4(a){D8(a);}
function AES(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=B(576);$p=1;case 1:AFm(a,h);if(C()){break _;}BW();Br(c,d,e);Bq(b.K+(b.q-b.K)*g-90.0,0.0,1.0,0.0);Bq(b.P+(b.E-b.P)*g,0.0,0.0,1.0);Bv();h=A35;V(32826);i=b.ke-g;if(i>0.0)Bq( -Bm(i*3.0)*i,0.0,0.0,1.0);Bq(45.0,1.0,0.0,0.0);Co(0.05624999850988388,0.05624999850988388,0.05624999850988388);Br((-4.0),0.0,0.0);B_(0.05624999850988388,
0.0,0.0);Bu(h);F(h,(-7.0),(-2.0),(-2.0),0.0,0.15625);F(h,(-7.0),(-2.0),2.0,0.15625,0.15625);F(h,(-7.0),2.0,2.0,0.15625,0.3125);F(h,(-7.0),2.0,(-2.0),0.0,0.3125);Bn(h);B_((-0.05624999850988388),0.0,0.0);Bu(h);F(h,(-7.0),2.0,(-2.0),0.0,0.15625);F(h,(-7.0),2.0,2.0,0.15625,0.15625);F(h,(-7.0),(-2.0),2.0,0.15625,0.3125);F(h,(-7.0),(-2.0),(-2.0),0.0,0.3125);Bn(h);j=0;while(j<4){Bq(90.0,1.0,0.0,0.0);B_(0.0,0.0,0.05624999850988388);Bu(h);F(h,(-8.0),(-2.0),0.0,0.0,0.0);F(h,8.0,(-2.0),0.0,0.5,0.0);F(h,8.0,2.0,0.0,0.5,
0.15625);F(h,(-8.0),2.0,0.0,0.0,0.15625);Bn(h);j=j+1|0;}X(32826);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function YR(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AES(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Er(){var a=this;CO.call(a);a.lY=null;a.wL=0;a.lq=0;a.gr=0;a.pl=0;a.vX=0.0;}
function Ga(a,b,c,d,e){var f=new Er();F_(f,a,b,c,d,e);return f;}
function F_(a,b,c,d,e,f){EO(a,b);a.lq=0;a.pl=5;a.vX=BI()*3.141592653589793*2.0;Dx(a,0.25,0.25);a.cF=a.ef/2.0;CC(a,c,d,e);a.lY=f;a.q=BI()*360.0;a.f=BI()*0.20000000298023224-0.10000000149011612;a.h=0.20000000298023224;a.g=BI()*0.20000000298023224-0.10000000149011612;a.h$=0;}
function AEA(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.EV();if(C()){break _;}if(a.gr>0)a.gr=a.gr-1|0;a.bH=a.c;a.ct=a.j;a.bG=a.d;a.h=a.h-0.03999999910593033;b=a.k;c=I(a.c);d=I(a.j);e=I(a.d);$p=2;case 2:$z=XB(b,c,d,e);if(C()){break _;}b=$z;if(b===A47){a.h=0.20000000298023224;a.f=(L(a.l)-L(a.l))*0.20000000298023224;a.g=(L(a.l)-L(a.l))*0.20000000298023224;C2(a.k,a,B(207),0.4000000059604645,
2.0+L(a.l)*0.4000000059604645);}f=a.c;g=a.j;h=a.d;$p=3;case 3:Yh(a,f,g,h);if(C()){break _;}$p=4;case 4:ZJ(a);if(C()){break _;}f=a.f;g=a.h;h=a.g;$p=5;case 5:ALW(a,f,g,h);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;a.h=a.h*(-0.5);}a.wL=a.wL+1|0;a.lq=a.lq+1|0;if(a.lq<6000)return;$p=6;case 6:B4(a);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function ZJ(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k;c=a.G;d=A46;$p=1;case 1:$z=Wb(b,c,d,a);if(C()){break _;}e=$z;return e;default:Es();}}CM().s(a,b,c,d,e,$p);}
function Yh(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=I(b);f=I(c);g=I(d);h=b-e;i=c-f;j=d-g;J();k=A5R.data;l=a.k;$p=1;case 1:$z=X9(l,e,f,g);if(C()){break _;}m=$z;if(!k[m])return 0;k=A5R.data;l=a.k;m=e-1|0;$p=2;case 2:$z=X9(l,m,f,g);if(C()){break _;}m
=$z;n=k[m]?0:1;k=A5R.data;l=a.k;m=e+1|0;$p=3;case 3:$z=X9(l,m,f,g);if(C()){break _;}m=$z;o=k[m]?0:1;k=A5R.data;l=a.k;m=f-1|0;$p=4;case 4:$z=X9(l,e,m,g);if(C()){break _;}m=$z;p=k[m]?0:1;k=A5R.data;l=a.k;m=f+1|0;$p=5;case 5:$z=X9(l,e,m,g);if(C()){break _;}m=$z;q=k[m]?0:1;k=A5R.data;l=a.k;m=g-1|0;$p=6;case 6:$z=X9(l,e,f,m);if(C()){break _;}m=$z;m=k[m]?0:1;k=A5R.data;l=a.k;r=g+1|0;$p=7;case 7:$z=X9(l,e,f,r);if(C()){break _;}e=$z;r=k[e]?0:1;s=(-1);t=9999.0;if(n&&h<t){s=0;t=h;}if(!o)b=t;else{b=1.0-h;if(b<t)s=1;else b
=t;}if(p&&i<b){s=2;b=i;}if(!q)c=b;else{c=1.0-i;if(c<b)s=3;else c=b;}if(m&&j<c){s=4;c=j;}if(r&&1.0-j<c)s=5;u=L(a.l)*0.20000000298023224+0.10000000149011612;if(!s)a.f= -u;if(s==1)a.f=u;if(s==2)a.h= -u;if(s==3)a.h=u;if(s==4)a.g= -u;if(s==5)a.g=u;return 0;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AHd(a,b){Rv(a,null,b);}
function Rv(a,b,c){a.pl=a.pl-c|0;if(a.pl<=0)B4(a);return 0;}
function AZJ(a,b){if(!a.gr&&Rn(b.F,a.lY)){C2(a.k,a,B(575),0.20000000298023224,((L(a.l)-L(a.l))*0.699999988079071+1.0)*2.0);O1(b,a);B4(a);}}
function Kw(){CO.call(this);this.gG=0;}
function APG(a,b,c,d){var e=new Kw();AWw(e,a,b,c,d);return e;}
function AWw(a,b,c,d,e){var f,g,h;EO(a,b);a.gG=0;a.lj=1;Dx(a,0.9800000190734863,0.9800000190734863);a.cF=a.ef/2.0;f=c;g=d;h=e;CC(a,f,g,h);e=BI()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.f= -Bm(e)*0.019999999552965164;a.h=0.20000000298023224;a.g= -Bx(e)*0.019999999552965164;a.h$=0;a.gG=80;a.bH=f;a.ct=g;a.bG=h;}
function AY2(a){return a.cs?0:1;}
function TF(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;a.h=a.h-0.03999999910593033;b=a.f;c=a.h;d=a.g;$p=1;case 1:ALW(a,b,c,d);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;a.h=a.h*(-0.5);}e=a.gG;a.gG=e-1|0;if(e>0){BP(a.k,B(248),a.c,a.j+0.5,a.d,0.0,
0.0,0.0);return;}$p=2;case 2:B4(a);if(C()){break _;}f=4.0;g=a.k;h=null;b=a.c;c=a.j;d=a.d;$p=3;case 3:T6(g,h,b,c,d,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AJs(){C1.call(this);this.t2=null;}
function A0v(){var a=new AJs();AW4(a);return a;}
function AW4(a){D8(a);a.t2=IJ();a.kV=0.5;}
function AJ8(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();Br(c,d,e);if(b.gG-g+1.0<10.0){h=1.0-(b.gG-g+1.0)/10.0;if(h<0.0)h=0.0;if(h>1.0)h=1.0;f=h*h;i=1.0+f*f*0.30000001192092896;Co(i,i,i);}h=(1.0-(b.gG-g+1.0)/100.0)*0.800000011920929;j=B(171);$p=1;case 1:AFm(a,j);if(C()){break _;}j=a.t2;J();FZ(j,A4E);if(!((b.gG/5|0)%2|0)){X(3553);X(2896);V(3042);C0(770,772);BN(1.0,
1.0,1.0,h);FZ(a.t2,A4E);BN(1.0,1.0,1.0,1.0);X(3042);V(2896);V(3553);}By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AGU(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AJ8(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Ia(){var a=this;CO.call(a);a.g6=0;a.nn=0;}
function AQH(a){return a.cs?0:1;}
function AHt(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.g6){$p=3;continue _;}a.bH=a.c;a.ct=a.j;a.bG=a.d;a.nn=a.nn+1|0;a.h=a.h-0.03999999910593033;b=a.f;c=a.h;d=a.g;$p=1;case 1:ALW(a,b,c,d);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;e=I(a.c);f=I(a.j);g=I(a.d);h=a.k;$p=2;case 2:$z=X9(h,e,f,g);if(C()){break _;}i
=$z;if(i==a.g6){h=a.k;i=0;$p=4;continue _;}if(!a.ca){if(a.nn<=100)return;e=a.g6;f=1;$p=7;continue _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;a.h=a.h*(-0.5);$p=5;continue _;case 3:B4(a);if(C()){break _;}return;case 4:AJ6(h,e,f,g,i);if(C()){break _;}if(!a.ca){if(a.nn<=100)return;e=a.g6;f=1;$p=7;continue _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;a.h=a.h*(-0.5);$p=5;case 5:B4(a);if(C()){break _;}h=a.k;i=a.g6;j=1;$p=6;case 6:$z=ADe(h,i,e,f,g,j);if(C()){break _;}i=$z;if(!i){e=a.g6;f=1;$p=
9;continue _;}h=a.k;i=a.g6;$p=10;continue _;case 7:Xu(a,e,f);if(C()){break _;}$p=8;case 8:B4(a);if(C()){break _;}return;case 9:Xu(a,e,f);if(C()){break _;}return;case 10:$z=AJ6(h,e,f,g,i);if(C()){break _;}e=$z;if(e)return;e=a.g6;f=1;$p=9;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AQt(a){return a.k;}
function ALb(){C1.call(this);this.Ae=null;}
function A0q(){var a=new ALb();AP5(a);return a;}
function AP5(a){D8(a);a.Ae=IJ();a.kV=0.5;}
function AKM(a,b,c,d,e,f,g){var h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();Br(c,d,e);h=B(171);$p=1;case 1:AFm(a,h);if(C()){break _;}J();h=A39.data[b.g6];i=b.k;X(2896);j=a.Ae;k=I(b.c);l=I(b.j);m=I(b.d);$p=2;case 2:ADY(j,h,i,k,l,m);if(C()){break _;}V(2896);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ALE(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AKM(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Fp(){var a=this;CO.call(a);a.yp=null;a.hU=0;a.jy=0;a.nm=0;a.jJ=0;}
var A$X=null;function AM1(a,b){return b.G;}
function ARY(a){return a.G;}
function AXk(a){return 1;}
function AOZ(a){return a.ef*0.2;}
function AF7(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.nm= -a.nm;a.jy=10;a.hU=a.hU+(c*10|0)|0;if(a.hU<=40)return 1;Bw();c=A7Y.cx;d=1;e=0.0;$p=1;case 1:ABW(a,c,d,e);if(C()){break _;}$p=2;case 2:AJQ(a);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AYJ(a){return a.cs?0:1;}
function AJQ(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;c=27;while(b<c){d=Qw(a,b);if(d!==null){e=L(a.l)*0.800000011920929+0.10000000149011612;f=L(a.l)*0.800000011920929+0.10000000149011612;g=L(a.l)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;if(d.m>0){k=D(a.l,21)+10|0;if(k>d.m)k=d.m;d.m=d.m-k|0;l=Ga(a.k,a.c+h,a.j+i,a.d+j,
L$(d.bs,k,d.dP));l.f=CH(a.l)*0.05000000074505806;l.h=CH(a.l)*0.05000000074505806+0.20000000298023224;l.g=CH(a.l)*0.05000000074505806;m=a.k;$p=2;continue _;}}b=b+1|0;}$p=1;case 1:B4(a);if(C()){break _;}return;case 2:AIS(m,l);if(C()){break _;}a:while(true){if(d.m>0){k=D(a.l,21)+10|0;if(k>d.m)k=d.m;d.m=d.m-k|0;l=Ga(a.k,a.c+h,a.j+i,a.d+j,L$(d.bs,k,d.dP));l.f=CH(a.l)*0.05000000074505806;l.h=CH(a.l)*0.05000000074505806+0.20000000298023224;l.g=CH(a.l)*0.05000000074505806;m=a.k;continue _;}while(true){b=b+1|0;if(b>=
c)break a;d=Qw(a,b);if(d===null)continue;else break;}e=L(a.l)*0.800000011920929+0.10000000149011612;f=L(a.l)*0.800000011920929+0.10000000149011612;g=L(a.l)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;}$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AMT(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jy>0)a.jy=a.jy-1|0;if(a.hU>0)a.hU=a.hU-1|0;a.bH=a.c;a.ct=a.j;a.bG=a.d;a.h=a.h
-0.03999999910593033;b=I(a.c);c=I(a.j);d=I(a.d);e=a.k;f=c-1|0;$p=1;case 1:$z=X9(e,b,f,d);if(C()){break _;}f=$z;J();if(f==A6n.b)c=c+(-1)|0;g=0.4;h=0.0078125;e=a.k;$p=2;case 2:$z=X9(e,b,c,d);if(C()){break _;}f=$z;if(f==A6n.b){i=a.c;j=a.j;k=a.d;$p=3;continue _;}if(a.f<(-0.4))a.f=(-0.4);if(a.f>g)a.f=g;if(a.g<(-0.4))a.g=(-0.4);if(a.g>g)a.g=g;if(a.ca){a.f=a.f*0.5;a.h=a.h*0.5;a.g=a.g*0.5;}i=a.f;j=a.h;k=a.g;$p=5;continue _;case 3:$z=AMy(a,i,j,k);if(C()){break _;}l=$z;e=a.k;$p=4;case 4:$z=Z$(e,b,c,d);if(C()){break _;}m
=$z;a.j=c;n=S(m,2);if(n>=0&&m<=5)a.j=c+1|0;if(!n)a.f=a.f-h;if(m==3)a.f=a.f+h;if(m==4)a.g=a.g+h;if(m==5)a.g=a.g-h;o=A$X.data[m].data;p=o[1].data[0]-o[0].data[0]|0;q=o[1].data[2]-o[0].data[2]|0;r=DL(p*p+q*q);if(a.f*p+a.g*q<0.0){p= -p;q= -q;}s=DL(a.f*a.f+a.g*a.g);a.f=s*p/r;a.g=s*q/r;t=b;u=t+0.5;v=u+o[0].data[0]*0.5;w=d;p=w+0.5;i=p+o[0].data[2]*0.5;j=u+o[1].data[0]*0.5;k=p+o[1].data[2]*0.5;j=j-v;k=k-i;if(j===0.0){a.c=u;u=a.d-w;}else if(k===0.0){a.d=p;u=a.c-t;}else u=((a.c-v)*j+(a.d-i)*k)*2.0;a.c=v+j*u;a.d=i+k*u;CC(a,
a.c,a.j+a.cF,a.d);x=a.f;t=a.g;if(a.bx!==null){x=x*0.75;t=t*0.75;}i=(-0.4);if(x<i)x=i;if(x>g)x=g;if(t>=i)i=t;if(i<=g)g=i;i=0.0;$p=7;continue _;case 5:ALW(a,i,j,k);if(C()){break _;}if(!a.ca){a.f=a.f*0.949999988079071;a.h=a.h*0.949999988079071;a.g=a.g*0.949999988079071;}a.E=0.0;y=a.bH-a.c;z=a.bG-a.d;if(y*y+z*z>0.001){a.q=CB(z,y)*180.0/3.141592653589793;if(a.jJ)a.q=a.q+180.0;}ba=a.q-a.K;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.q=a.q+180.0;a.jJ=a.jJ?0:1;}SR(a,
a.q,a.E);e=a.k;l=Da(a.G,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=Zh(e,a,l);if(C()){break _;}bb=$z;if(bb!==null&&CZ(bb)>0){bc=0;while(true){if(bc>=CZ(bb))break a;bd=Z(bb,bc);if(bd!==a.bx&&bd.p9()&&bd instanceof Fp)bd.sS(a);bc=bc+1|0;}}}if(a.bx!==null&&a.bx.cs)a.bx=null;return;case 7:ALW(a,x,i,g);if(C()){break _;}if(o[0].data[1]&&(I(a.c)-b|0)==o[0].data[0]&&(I(a.d)-d|0)==o[0].data[2])CC(a,a.c,a.j+o[0].data[1],a.d);else if(o[1].data[1]&&(I(a.c)-b|0)==o[1].data[0]&&(I(a.d)-d|0)==o[1].data[2])CC(a,
a.c,a.j+o[1].data[1],a.d);if(a.bx===null){a.f=a.f*0.9599999785423279;a.h=a.h*0.0;a.g=a.g*0.9599999785423279;}else{a.f=a.f*0.996999979019165;a.h=a.h*0.0;a.g=a.g*0.996999979019165;}i=a.c;j=a.j;k=a.d;$p=8;case 8:$z=AMy(a,i,j,k);if(C()){break _;}e=$z;if(e!==null&&l!==null){w=(l.v-e.v)*0.05;i=DL(a.f*a.f+a.g*a.g);if(i>0.0){j=a.f/i;k=i+w;a.f=j*k;a.g=a.g/i*k;}CC(a,a.c,e.v,a.d);}f=I(a.c);n=I(a.d);if(!(f==b&&n==d)){i=DL(a.f*a.f+a.g*a.g);a.f=i*(f-b|0);a.g=i*(n-d|0);}a.E=0.0;y=a.bH-a.c;z=a.bG-a.d;if(y*y+z*z>0.001){a.q=
CB(z,y)*180.0/3.141592653589793;if(a.jJ)a.q=a.q+180.0;}ba=a.q-a.K;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.q=a.q+180.0;a.jJ=a.jJ?0:1;}SR(a,a.q,a.E);e=a.k;l=Da(a.G,0.20000000298023224,0.0,0.20000000298023224);$p=6;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AEU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=I(b);g=I(c);h=I(d);i=a.k;j=g-1|0;$p=1;case 1:$z=X9(i,f,j,h);if(C()){break _;}j=$z;J();if(j==A6n.b)g=g+(-1)|0;i=a.k;$p=2;case 2:$z=X9(i,f,g,h);if(C()){break _;}j=$z;if(j!=A6n.b)return null;i=a.k;$p=3;case 3:$z=Z$(i,f,g,h);if(C()){break _;}j=$z;c=g;if(j>=2&&j<=5)c=
g+1|0;k=A$X.data[j].data;l=k[1].data[0]-k[0].data[0]|0;m=k[1].data[2]-k[0].data[2]|0;n=DL(l*l+m*m);l=l/n;m=m/n;l=b+l*e;d=d+m*e;if(k[0].data[1]&&(I(l)-f|0)==k[0].data[0]&&(I(d)-h|0)==k[0].data[2])c=c+k[0].data[1];else if(k[1].data[1]&&(I(l)-f|0)==k[1].data[0]&&(I(d)-h|0)==k[1].data[2])c=c+k[1].data[1];$p=4;case 4:$z=AMy(a,l,c,d);if(C()){break _;}i=$z;return i;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AMy(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=I(b);f=I(c);g=I(d);h=a.k;i=f-1|0;$p=1;case 1:$z=X9(h,e,i,g);if(C()){break _;}i=$z;J();if(i==A6n.b)f=f+(-1)|0;h=a.k;$p=2;case 2:$z=X9(h,e,f,g);if(C()){break _;}i=$z;if(i!=A6n.b)return null;h
=a.k;$p=3;case 3:$z=Z$(h,e,f,g);if(C()){break _;}j=$z;c=f;k=A$X.data[j].data;l=e;m=l+0.5;n=m+k[0].data[0]*0.5;o=c+0.5;p=o+k[0].data[1]*0.5;q=g;r=q+0.5;s=r+k[0].data[2]*0.5;m=m+k[1].data[0]*0.5;t=o+k[1].data[1]*0.5;o=r+k[1].data[2]*0.5;r=m-n;u=(t-p)*2.0;v=o-s;l=r===0.0?d-q:v===0.0?b-l:((b-n)*r+(d-s)*v)*2.0;b=n+r*l;c=p+u*l;d=s+v*l;i=S(u,0.0);if(i<0)c=c+1.0;if(i>0)c=c+0.5;return BR(b,c,d);default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AUG(a,b){var c,d,e,f,g,h;if(b!==a.bx){c=b.c-a.c;d=b.d-a.d;e=c*c+d*d;if(e>=9.999999747378752E-5){e=B7(e);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;d=f*g;c=c*0.10000000149011612;d=d*0.10000000149011612;c=c*(1.0-a.mL);d=d*(1.0-a.mL);c=c*0.5;d=d*0.5;if(!(b instanceof Fp)){Gj(a, -c,0.0, -d);Gj(b,c/4.0,0.0,d/4.0);}else{f=(b.f+a.f)/2.0;h=(b.g+a.g)/2.0;a.g=0.0;a.f=0.0;Gj(a,f-c,0.0,h-d);b.g=0.0;b.f=0.0;Gj(b,f+c,0.0,h+d);}}}}
function ASL(a){return 27;}
function Qw(a,b){return a.yp.data[b];}
function AX$(a,b){MQ(b,a);return 1;}
function AHp(){var b,c,d,e,f,g;b=N($rt_arraycls($rt_arraycls($rt_intcls())),10);c=b.data;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[0]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[1]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]
=(-1);g[1]=(-1);g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[2]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=(-1);g[2]=0;e[1]=f;c[3]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=(-1);g[2]=1;e[1]=f;c[4]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=(-1);g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[5]=d;g=N($rt_arraycls($rt_intcls()),2);e=g.data;d=$rt_createIntArray(3);f=d.data;f[0]=0;f[1]=0;f[2]=1;e[0]=d;d=$rt_createIntArray(3);f=d.data;f[0]=1;f[1]=0;f[2]=0;e[1]=d;c[6]=g;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[7]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[8]=d;d=N($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[9]=d;A$X=b;}
function ALR(){C1.call(this);this.zN=null;}
function A1K(){var a=new ALR();AY6(a);return a;}
function AY6(a){D8(a);a.kV=0.5;a.zN=A2l();}
function AKL(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();h=b.b6;i=b.c-b.b6;j=g;k=h+i*j;l=b.bP+(b.j-b.bP)*j;i=b.b7+(b.d-b.b7)*j;h=0.30000001192092896;$p=1;case 1:$z=AMy(b,k,l,i);if(C()){break _;}m=$z;n=b.P+(b.E-b.P)*g;if(m!==null){$p=2;continue _;}Br(c,d,e);Bq(180.0
-f,0.0,1.0,0.0);Bq( -n,0.0,0.0,1.0);o=b.jy-g;p=b.hU-g;if(p<0.0)p=0.0;if(o>0.0)Bq(Bm(o)*o*p/10.0*b.nm,1.0,0.0,0.0);b=B(171);$p=4;continue _;case 2:$z=AEU(b,k,l,i,h);if(C()){break _;}q=$z;h=(-0.30000001192092896);$p=3;case 3:$z=AEU(b,k,l,i,h);if(C()){break _;}r=$z;if(q===null)q=m;if(r===null)r=m;c=c+m.t-k;d=d+(q.v+r.v)/2.0-l;e=e+m.s-i;s=C3(r, -q.t, -q.v, -q.s);if(GF(s)!==0.0){s=Cs(s);f=CB(s.s,s.t)*180.0/3.141592653589793;n=G$(s.v)*73.0;}Br(c,d,e);Bq(180.0-f,0.0,1.0,0.0);Bq( -n,0.0,0.0,1.0);o=b.jy-g;p=b.hU-g;if
(p<0.0)p=0.0;if(o>0.0)Bq(Bm(o)*o*p/10.0*b.nm,1.0,0.0,0.0);b=B(171);$p=4;case 4:AFm(a,b);if(C()){break _;}Co(0.75,0.75,0.75);b=IJ();J();FZ(b,A6c);Co(1.3333333730697632,1.3333333730697632,1.3333333730697632);b=B(577);$p=5;case 5:AFm(a,b);if(C()){break _;}Co((-1.0),(-1.0),1.0);AFn(a.zN,0.0,0.0,(-0.10000000149011612),0.0,0.0,0.0625);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AKK(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AKL(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Se(){var a=this;E.call(a);a.sV=Long_ZERO;a.r_=0;a.wx=0;}
function A$Y(){var a=new Se();ANW(a);return a;}
function ANW(a){return;}
function Xf(){var a=this;E.call(a);a.t9=null;a.un=null;}
function A1y(){var a=new Xf();AN4(a);return a;}
function AN4(a){a.t9=BF(0,0);BA(a.t9,(-12.0),(-14.0),(-1.0),24,12,2,0.0);a.un=BF(0,14);BA(a.un,(-1.0),(-2.0),(-1.0),2,14,2,0.0);}
function AHN(a){B3(a.t9,0.0625);B3(a.un,0.0625);}
function ADb(){var a=this;DO.call(a);a.kK=null;a.pd=null;a.pV=null;a.i_=null;a.i$=null;a.jb=null;a.ja=null;a.jd=null;a.jc=null;a.jf=null;a.je=null;}
function AVF(){var a=new ADb();AOl(a);return a;}
function AOl(a){a.kK=BF(32,4);BA(a.kK,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BD(a.kK,0.0,15.0,(-3.0));a.pd=BF(0,0);BA(a.pd,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BD(a.pd,0.0,15.0,0.0);a.pV=BF(0,12);BA(a.pV,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BD(a.pV,0.0,15.0,9.0);a.i_=BF(18,0);BA(a.i_,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.i_,(-4.0),15.0,2.0);a.i$=BF(18,0);BA(a.i$,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.i$,4.0,15.0,2.0);a.jb=BF(18,0);BA(a.jb,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.jb,(-4.0),15.0,1.0);a.ja=BF(18,0);BA(a.ja,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BD(a.ja,4.0,15.0,1.0);a.jd=BF(18,0);BA(a.jd,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.jd,(-4.0),15.0,0.0);a.jc=BF(18,0);BA(a.jc,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.jc,4.0,15.0,0.0);a.jf=BF(18,0);BA(a.jf,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.jf,(-4.0),15.0,(-1.0));a.je=BF(18,0);BA(a.je,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.je,4.0,15.0,(-1.0));}
function AQA(a,b,c,d,e,f,g){Uo(a,b,c,d,e,f,g);B3(a.kK,g);B3(a.pd,g);B3(a.pV,g);B3(a.i_,g);B3(a.i$,g);B3(a.jb,g);B3(a.ja,g);B3(a.jd,g);B3(a.jc,g);B3(a.jf,g);B3(a.je,g);}
function Uo(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.kK.bL=e/57.2957763671875;a.kK.bM=f/57.2957763671875;a.i_.bJ=(-0.7853981852531433);a.i$.bJ=0.7853981852531433;a.jb.bJ=(-0.5811946392059326);a.ja.bJ=0.5811946392059326;a.jd.bJ=(-0.5811946392059326);a.jc.bJ=0.5811946392059326;a.jf.bJ=(-0.7853981852531433);a.je.bJ=0.7853981852531433;a.i_.bL=0.7853981852531433;a.i$.bL=(-0.7853981852531433);a.jb.bL=0.39269909262657166;a.ja.bL=(-0.39269909262657166);a.jd.bL=(-0.39269909262657166);a.jc.bL=0.39269909262657166;a.jf.bL
=(-0.7853981852531433);a.je.bL=0.7853981852531433;b=b*0.6661999821662903;f=b*2.0;h= -(Bx(f+0.0)*0.4000000059604645)*c;i= -(Bx(f+3.1415927410125732)*0.4000000059604645)*c;j= -(Bx(f+1.5707963705062866)*0.4000000059604645)*c;k= -(Bx(f+4.71238899230957)*0.4000000059604645)*c;l=GL(Bm(b+0.0)*0.4000000059604645)*c;m=GL(Bm(b+3.1415927410125732)*0.4000000059604645)*c;n=GL(Bm(b+1.5707963705062866)*0.4000000059604645)*c;o=GL(Bm(b+4.71238899230957)*0.4000000059604645)*c;p=a.i_;p.bL=p.bL+h;p=a.i$;p.bL=p.bL+ -h;p=a.jb;p.bL
=p.bL+i;p=a.ja;p.bL=p.bL+ -i;p=a.jd;p.bL=p.bL+j;p=a.jc;p.bL=p.bL+ -j;p=a.jf;p.bL=p.bL+k;p=a.je;p.bL=p.bL+ -k;p=a.i_;p.bJ=p.bJ+l;p=a.i$;p.bJ=p.bJ+ -l;p=a.jb;p.bJ=p.bJ+m;p=a.ja;p.bJ=p.bJ+ -m;p=a.jd;p.bJ=p.bJ+n;p=a.jc;p.bJ=p.bJ+ -n;p=a.jf;p.bJ=p.bJ+o;p=a.je;p.bJ=p.bJ+ -o;}
function ADB(){var a=this;DO.call(a);a.kP=null;a.ti=null;a.q8=null;a.nW=null;a.nV=null;a.nU=null;a.nT=null;}
function A0S(){var a=new ADB();AVs(a);return a;}
function AVs(a){a.kP=BF(0,0);BA(a.kP,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BD(a.kP,0.0,4.0,0.0);a.ti=BF(32,0);BA(a.ti,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BD(a.ti,0.0,4.0,0.0);a.q8=BF(16,16);BA(a.q8,(-4.0),0.0,(-2.0),8,12,4,0.0);BD(a.q8,0.0,4.0,0.0);a.nW=BF(0,16);BA(a.nW,(-2.0),0.0,(-2.0),4,6,4,0.0);BD(a.nW,(-2.0),16.0,4.0);a.nV=BF(0,16);BA(a.nV,(-2.0),0.0,(-2.0),4,6,4,0.0);BD(a.nV,2.0,16.0,4.0);a.nU=BF(0,16);BA(a.nU,(-2.0),0.0,(-2.0),4,6,4,0.0);BD(a.nU,(-2.0),16.0,(-4.0));a.nT=BF(0,16);BA(a.nT,(-2.0),0.0,(-2.0),4,6,4,
0.0);BD(a.nT,2.0,16.0,(-4.0));}
function AT9(a,b,c,d,e,f,g){Vj(a,b,c,d,e,f,g);B3(a.kP,g);B3(a.q8,g);B3(a.nW,g);B3(a.nV,g);B3(a.nU,g);B3(a.nT,g);}
function Vj(a,b,c,d,e,f,g){var h;a.kP.bL=e/57.2957763671875;a.kP.bM=f/57.2957763671875;h=a.nW;b=b*0.6661999821662903;h.bM=Bx(b)*1.399999976158142*c;h=a.nV;d=b+3.1415927410125732;h.bM=Bx(d)*1.399999976158142*c;a.nU.bM=Bx(d)*1.399999976158142*c;a.nT.bM=Bx(b)*1.399999976158142*c;}
function AAj(){DO.call(this);this.cA=null;}
function A2l(){var a=new AAj();AUP(a);return a;}
function AUP(a){a.cA=N(NT,7);a.cA.data[0]=BF(0,10);a.cA.data[1]=BF(0,0);a.cA.data[2]=BF(0,0);a.cA.data[3]=BF(0,0);a.cA.data[4]=BF(0,0);a.cA.data[5]=BF(44,10);BA(a.cA.data[0],(-10.0),(-8.0),(-1.0),20,16,2,0.0);BD(a.cA.data[0],0.0,4.0,0.0);BA(a.cA.data[5],(-9.0),(-7.0),(-1.0),18,14,1,0.0);BD(a.cA.data[5],0.0,4.0,0.0);BA(a.cA.data[1],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BD(a.cA.data[1],(-9.0),4.0,0.0);BA(a.cA.data[2],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BD(a.cA.data[2],9.0,4.0,0.0);BA(a.cA.data[3],(-8.0),(-9.0),(-1.0),
16,8,2,0.0);BD(a.cA.data[3],0.0,4.0,(-7.0));BA(a.cA.data[4],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BD(a.cA.data[4],0.0,4.0,7.0);a.cA.data[0].bM=1.5707963705062866;a.cA.data[1].bL=4.71238899230957;a.cA.data[2].bL=1.5707963705062866;a.cA.data[3].bL=3.1415927410125732;a.cA.data[5].bM=(-1.5707963705062866);}
function AFn(a,b,c,d,e,f,g){var h;a.cA.data[5].lK=4.0-d;h=0;while(h<6){B3(a.cA.data[h],g);h=h+1|0;}}
function HB(){var a=this;E.call(a);a.gh=null;a.rJ=0;a.b1=null;a.g0=null;a.gd=null;a.hb=null;a.dK=null;a.mH=0;a.fm=0;a.fh=0;a.hY=null;a.dg=null;a.fS=0;a.dr=0;a.oA=0;a.AR=0;a.qr=0;a.ri=Long_ZERO;}
var A9H=0;function A0L(a,b,c){var d=new HB();ALu(d,a,b,c);return d;}
function AYx(a,b,c,d){var e=new HB();AS0(e,a,b,c,d);return e;}
function ALu(a,b,c,d){var e;a.hY=CY();a.dg=N(Iu,8);a.fS=0;a.dr=0;a.AR=0;a.qr=0;a.ri=Long_ZERO;a.b1=b;a.fm=c;a.fh=d;a.dK=$rt_createByteArray(256);e=0;while(e<a.dg.data.length){a.dg.data[e]=Ck();e=e+1|0;}}
function AS0(a,b,c,d,e){var f;f=c.data;ALu(a,b,d,e);a.gh=c;b=new QA;d=f.length;AEx(b,d);a.g0=b;a.gd=HO(d);a.hb=HO(d);}
function ALY(a,b,c){return b==a.fm&&c==a.fh?1:0;}
function Q2(a,b,c){return a.dK.data[c<<4|b]&255;}
function AVW(a){return;}
function AA8(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=127;c=0;while(true){if(c>=16){a.mH=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b=b+1|0;}a.dr=1;return;}e=0;if(e<16)break;c=c+1|0;}f=a.dK.data;d=e<<4|c;f[d]=(-128);g=127;$p=1;case 1:Yy(a,c,g,e);if(C()){break _;}if((a.dK.data[d]&255)<b)b=a.dK.data[d]&255;e=e+1|0;while(e>=16){c=c+1|0;if(c>=16){a.mH=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b
=b+1|0;}a.dr=1;return;}e=0;}f=a.dK.data;d=e<<4|c;f[d]=(-128);g=127;continue _;case 2:AAl(a,b,d);if(C()){break _;}d=d+1|0;while(true){if(d<16){continue _;}b=b+1|0;if(b>=16)break;d=0;}a.dr=1;return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AAl(a,b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Q2(a,b,c);e=(a.fm*16|0)+b|0;f=(a.fh*16|0)+c|0;b=e-1|0;$p=1;case 1:AEE(a,b,f,d);if(C()){break _;}b=e+1|0;$p=2;case 2:AEE(a,b,f,d);if(C()){break _;}b=f-1|0;$p=3;case 3:AEE(a,e,b,d);if(C()){break _;}b=f+1|0;$p=4;case 4:AEE(a,e,b,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AEE(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.b1;$p=1;case 1:$z=AGv(e,b,c);if(C()){break _;}f=$z;g=S(f,d);if(g>0){e=a.b1;h=A9N;$p=2;continue _;}if(g>=0){a.dr=1;return;}e=a.b1;h=A9N;$p=3;continue _;case 2:U0(e,h,b,d,c,b,f,c);if(C()){break _;}a.dr=1;return;case 3:U0(e,h,b,f,c,b,d,c);if(C()){break _;}a.dr=1;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function Yy(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.dK.data;f=d<<4|b;g=e[f]&255;if(c<=g)c=g;while(c>0){J();if(A5S.data[Ed(a,b,c-1|0,d)])break;c=c+(-1)|0;}h=S(c,g);if(h){AKg(a.b1,b,d,c,g);a.dK.data[f]=c<<24>>24;if(c<a.mH)a.mH=c;else{f=127;i=0;while(i<16){j=0;while(j<16){e=a.dK.data;k=j<<4|i;if((e[k]&255)<f)f=a.dK.data[k]
&255;j=j+1|0;}i=i+1|0;}a.mH=f;}f=(a.fm*16|0)+b|0;i=(a.fh*16|0)+d|0;if(h>=0){l=a.b1;m=A9N;$p=1;continue _;}j=c;while(j<g){DR(a.gd,b,j,d,15);j=j+1|0;}j=15;k=c;a:{while(k>0){if(j<=0)break a;k=k+(-1)|0;J();n=A5S.data[Ed(a,b,k,d)];if(!n)n=1;j=j-n|0;if(j<0)j=0;DR(a.gd,b,k,d,j);}}while(k>0){J();if(A5S.data[Ed(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k!=c){l=a.b1;m=A9N;d=f-1|0;j=i-1|0;f=f+1|0;b=i+1|0;$p=2;continue _;}a.dr=1;}return;case 1:U0(l,m,f,g,i,f,c,i);if(C()){break _;}while(g<c){DR(a.gd,b,g,d,0);g=g+1|0;}j=15;k=c;b:
{while(k>0){if(j<=0)break b;k=k+(-1)|0;J();n=A5S.data[Ed(a,b,k,d)];if(!n)n=1;j=j-n|0;if(j<0)j=0;DR(a.gd,b,k,d,j);}}while(k>0){J();if(A5S.data[Ed(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k==c){a.dr=1;return;}l=a.b1;m=A9N;d=f-1|0;j=i-1|0;f=f+1|0;b=i+1|0;$p=2;case 2:U0(l,m,d,k,j,f,c,b);if(C()){break _;}a.dr=1;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Ed(a,b,c,d){return a.gh.data[b<<11|d<<7|c];}
function Zb(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e<<24>>24;h=a.dK.data[d<<4|b]&255;i=a.gh.data;j=b<<11|d<<7|c;k=i[j]&255;if(k==e)return 0;l=(a.fm*16|0)+b|0;m=(a.fh*16|0)+d|0;a.gh.data[j]=g;if(k){J();n=A39.data[k];o=a.b1;$p=1;continue _;}a:{DR(a.g0,b,c,d,f);J();if(!A5S.data[g]){if(c!=(h-1|0))break a;$p
=5;continue _;}if(c>=h){f=c+1|0;$p=6;continue _;}}n=a.b1;o=A9N;$p=2;continue _;case 1:n.ko(o,l,c,m);if(C()){break _;}b:{DR(a.g0,b,c,d,f);J();if(!A5S.data[g]){if(c!=(h-1|0))break b;$p=5;continue _;}if(c>=h){f=c+1|0;$p=6;continue _;}}n=a.b1;o=A9N;$p=2;case 2:U0(n,o,l,c,m,l,c,m);if(C()){break _;}n=a.b1;o=A9O;$p=3;case 3:U0(n,o,l,c,m,l,c,m);if(C()){break _;}$p=4;case 4:AAl(a,b,d);if(C()){break _;}if(!e){a.dr=1;return 1;}n=A39.data[e];o=a.b1;$p=7;continue _;case 5:Yy(a,b,c,d);if(C()){break _;}n=a.b1;o=A9N;$p=2;continue _;case 6:Yy(a,
b,f,d);if(C()){break _;}n=a.b1;o=A9N;$p=2;continue _;case 7:n.e2(o,l,c,m);if(C()){break _;}a.dr=1;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function Y$(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=e<<24>>24;g=a.dK.data[d<<4|b]&255;h=a.gh.data;i=b<<11|d<<7|c;j=h[i]&255;if(j==e)return 0;k=(a.fm*16|0)+b|0;l=(a.fh*16|0)+d|0;a.gh.data[i]=f;if(j){J();m=A39.data[j];n=a.b1;$p=1;continue _;}a:{DR(a.g0,b,c,d,0);J();if(!A5S.data[f]){if(c!=(g-1|0))break a;$p=5;continue _;}if
(c>=g){i=c+1|0;$p=6;continue _;}}m=a.b1;n=A9N;$p=2;continue _;case 1:m.ko(n,k,c,l);if(C()){break _;}b:{DR(a.g0,b,c,d,0);J();if(!A5S.data[f]){if(c!=(g-1|0))break b;$p=5;continue _;}if(c>=g){i=c+1|0;$p=6;continue _;}}m=a.b1;n=A9N;$p=2;case 2:U0(m,n,k,c,l,k,c,l);if(C()){break _;}m=a.b1;n=A9O;$p=3;case 3:U0(m,n,k,c,l,k,c,l);if(C()){break _;}$p=4;case 4:AAl(a,b,d);if(C()){break _;}if(!e){a.dr=1;return 1;}m=A39.data[e];n=a.b1;$p=7;continue _;case 5:Yy(a,b,c,d);if(C()){break _;}m=a.b1;n=A9N;$p=2;continue _;case 6:Yy(a,
b,i,d);if(C()){break _;}m=a.b1;n=A9N;$p=2;continue _;case 7:m.e2(n,k,c,l);if(C()){break _;}a.dr=1;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function OY(a,b,c,d){return G5(a.g0,b,c,d);}
function Wd(a,b,c,d,e){a.dr=1;DR(a.g0,b,c,d,e);}
function XY(a,b,c,d,e){return b===A9N?G5(a.gd,c,d,e):b!==A9O?0:G5(a.hb,c,d,e);}
function ALa(a,b,c,d,e,f){a.dr=1;if(b===A9N)DR(a.gd,c,d,e,f);else{if(b!==A9O)return;DR(a.hb,c,d,e,f);}}
function R0(a,b,c,d,e){var f,g;f=G5(a.gd,b,c,d);if(f>0)A9H=1;e=f-e|0;g=G5(a.hb,b,c,d);if(g<=e)g=e;return g;}
function R3(a,b){var c,d,e,f,g;a.qr=1;c=I(b.c/16.0);d=I(b.d/16.0);if(!(c==a.fm&&d==a.fh)){e=Ds();f=new Bc;Ba(f);B9(e,O(EY(H(f,B(578)),b)));}g=I(b.j/16.0);if(g<0)g=0;if(g>=a.dg.data.length)g=a.dg.data.length-1|0;U(a.dg.data[g],b);}
function AHD(a,b){O6(a,b,I(b.j/16.0));}
function O6(a,b,c){var d,e;if(c<0)c=0;if(c>=a.dg.data.length)c=a.dg.data.length-1|0;if(!Ob(a.dg.data[c],b)){d=Ds();e=new Bc;Ba(e);B9(d,O(EY(H(e,B(579)),b)));}GU(a.dg.data[c],b);}
function MU(a,b,c,d){return c<(a.dK.data[d<<4|b]&255)?0:1;}
function AH1(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;f=Cz(a.hY,CG(e));if(f!==null)return f;g=Ed(a,b,c,d);J();h=A39.data[g];f=a.b1;b=(a.fm*16|0)+b|0;d=(a.fh*16|0)+d|0;$p=1;case 1:h.e2(f,b,c,d);if(C()){break _;}return Cz(a.hY,CG(e));default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AEi(a,b,c,d,e){var f;a:{f=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;e.bY=a.b1;e.de=(a.fm*16|0)+b|0;e.dc=c;e.dj=(a.fh*16|0)+d|0;if(Ed(a,b,c,d)){J();if(A39.data[Ed(a,b,c,d)] instanceof DN){if(a.rJ){if(Cz(a.hY,CG(f))!==null)GU(a.b1.e1,Cz(a.hY,CG(f)));U(a.b1.e1,e);}BK(a.hY,CG(f),e);break a;}}B9(Ds(),B(580));}}
function Zu(a,b,c,d){var e;e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;if(a.rJ)GU(a.b1.e1,Oc(a.hY,CG(e)));}
function Ir(a){var b;a.rJ=1;Dq(a.b1.e1,G_(a.hY));b=0;while(b<a.dg.data.length){AKI(a.b1,a.dg.data[b]);b=b+1|0;}}
function AJk(a){var b;a.rJ=0;Fm(a.b1.e1,G_(a.hY));b=0;while(b<a.dg.data.length){ALn(a.b1,a.dg.data[b]);b=b+1|0;}}
function PF(a){a.dr=1;}
function AEX(a,b,c,d){var e,f,g,h,i;e=I((c.I-2.0)/16.0);f=I((c.Q+2.0)/16.0);if(e<0)e=0;if(f>=a.dg.data.length)f=a.dg.data.length-1|0;while(e<=f){g=a.dg.data[e];h=0;while(h<g.p){i=Z(g,h);if(i!==b&&Kg(i.G,c))U(d,i);h=h+1|0;}e=e+1|0;}}
function AG5(a,b,c,d){var e,f,g,h,i;e=I((c.I-2.0)/16.0);f=I((c.Q+2.0)/16.0);if(e<0)e=0;if(f>=a.dg.data.length)f=a.dg.data.length-1|0;while(e<=f){g=a.dg.data[e];h=0;while(h<g.p){i=Z(g,h);if(No(b,C4(i))&&Kg(i.G,c))U(d,i);h=h+1|0;}e=e+1|0;}}
function IO(a,b){return a.oA?0:a.qr&&Long_ne(a.b1.dG,a.ri)?1:a.dr;}
function Ha(){var a=this;E.call(a);a.iq=0;a.hz=0;a.jv=null;a.vv=null;}
function A$Z(a,b,c,d,e,f,g){var h=new Ha();ZW(h,a,b,c,d,e,f,g);return h;}
function ZW(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.vv=b;a.iq=c>>4;a.hz=e>>4;i=f>>4;j=h>>4;a.jv=$rt_createMultiArray($rt_arraycls($rt_arraycls(HB)),[(j-a.hz|0)+1|0,(i-a.iq|0)+1|0]);k=a.iq;while(k<=i){l=a.hz;if(l<=j){m=a.jv.data[k-a.iq|0].data;c=l-a.hz|0;$p=1;continue _;}k=k+1|0;}return;case 1:$z=VI(b,k,l);if(C()){break _;}n
=$z;m[c]=n;l=l+1|0;while(true){if(l<=j){m=a.jv.data[k-a.iq|0].data;c=l-a.hz|0;continue _;}k=k+1|0;if(k>i)break;l=a.hz;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Gq(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.iq|0;f=(d>>4)-a.hz|0;return Ed(a.jv.data[e].data[f],b&15,c,d&15);}
function ABe(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b>>4)-a.iq|0;f=(d>>4)-a.hz|0;g=a.jv.data[e].data[f];e=b&15;b=d&15;$p=1;case 1:$z=AH1(g,e,c,b);if(C()){break _;}g=$z;return g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Wu(a,b,c,d){return A9K.data[VS(a,b,c,d)];}
function VS(a,b,c,d){return FV(a,b,c,d,1);}
function FV(a,b,c,d,e){var f,g,h,i,j,k;if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){a:{if(e){f=Gq(a,b,c,d);J();if(f==A4c.b)break a;if(f==A6i.b)break a;}if(c<0)return 0;if(c>=128){f=15-a.vv.fD|0;if(f<0)f=0;return f;}f=(b>>4)-a.iq|0;g=(d>>4)-a.hz|0;return R0(a.jv.data[f].data[g],b&15,c,d&15,a.vv.fD);}g=FV(a,b,c+1|0,d,0);h=FV(a,b+1|0,c,d,0);i=FV(a,b-1|0,c,d,0);j=FV(a,b,c,d+1|0,0);k=FV(a,b,c,d-1|0,0);if(h<=g)h=g;if(i<=h)i=h;if(j<=i)j=i;if(k<=j)k=j;return k;}return 15;}
function YD(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.iq|0;f=(d>>4)-a.hz|0;return OY(a.jv.data[e].data[f],b&15,c,d&15);}
function LO(a,b,c,d){var e,f;e=Gq(a,b,c,d);if(!e)f=A5q;else{J();f=A39.data[e].bR;}return f;}
function XH(a,b,c,d){var e;J();e=A39.data[Gq(a,b,c,d)];return e!==null?e.dy():0;}
function Fr(){Bz.call(this);}
function A$0(){var a=new Fr();AY4(a);return a;}
function AY4(a){Q(a);}
function Q$(){Fr.call(this);}
function A$1(){var a=new Q$();AWG(a);return a;}
function AWG(a){Q(a);}
function Rq(){E.call(this);}
var A$2=null;function A$3(){var a=new Rq();AJD(a);return a;}
function AJD(a){return;}
function ADH(){var b,c;b=$rt_createIntArray(12);c=b.data;c[0]=1;c[1]=4;c[2]=2;c[3]=1024;c[4]=8;c[5]=16;c[6]=128;c[7]=64;c[8]=32;c[9]=256;c[10]=2048;c[11]=512;A$2=b;}
function M7(){Ft.call(this);this.t1=null;}
function ASf(a,b){return ZH(a.t1,b);}
function K_(a){var b;b=new Ro;RK(b,a.t1);return b;}
function Qa(){E.call(this);this.EZ=null;}
function AI5(a){Y();A20.requestPointerLock();KT(0);}
function AZY(a){AI5(a);}
function AK7(){E.call(this);}
function A$4(){var a=new AK7();AUV(a);return a;}
function AUV(a){return;}
function SW(){var a=this;DF.call(a);a.b9=null;a.gb=0;a.ok=0;a.jQ=0;}
function A0F(){var a=new SW();AOA(a);return a;}
function AOA(a){a.b9=N(B6,3);a.gb=0;a.ok=0;a.jQ=0;}
function AYw(a,b){return a.b9.data[b];}
function AXM(a,b,c){var d;if(a.b9.data[b]===null)return null;if(a.b9.data[b].m<=c){d=a.b9.data[b];a.b9.data[b]=null;return d;}d=D6(a.b9.data[b],c);if(!a.b9.data[b].m)a.b9.data[b]=null;return d;}
function AOL(a,b,c){a.b9.data[b]=c;if(c!==null&&c.m>64)c.m=64;}
function ANR(a){return 64;}
function AJi(a,b){return Bh(a.jQ,b)/200|0;}
function Zf(a,b){if(!a.ok)a.ok=200;return Bh(a.gb,b)/a.ok|0;}
function SL(a){return a.gb<=0?0:1;}
function ABV(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gb<=0?0:1;c=0;if(a.gb>0){a.gb=a.gb-1|0;c=1;}if(!a.gb&&L4(a)){d=a.b9.data[1];if(d===null)e=0;else a:{f=Dl(d).cx;if(f<256){J();if(A39.data[f].bR===A6r){e=300;break a;}}Bw();e=f==A7k.cx?100:f!=A6R.cx?0:1600;}a.gb=e;a.ok=e;if(a.gb>0){c=1;if(a.b9.data[1]!==null){d=a.b9.data[1];d.m=d.m-1|0;if(!a.b9.data[1].m)a.b9.data[1]
=null;}}}if(SL(a)&&L4(a)){a.jQ=a.jQ+1|0;if(a.jQ==200){a.jQ=0;Y6(a);c=1;}}else a.jQ=0;if(b==(a.gb<=0?0:1)){if(!c)return;d=a.bY;e=a.de;b=a.dc;c=a.dj;$p=1;continue _;}c=1;b=a.gb<=0?0:1;g=a.bY;f=a.de;h=a.dc;i=a.dj;$p=2;continue _;case 1:ABK(d,e,b,c);if(C()){break _;}return;case 2:$z=Z$(g,f,h,i);if(C()){break _;}e=$z;$p=3;case 3:$z=AH_(g,f,h,i);if(C()){break _;}j=$z;if(!b){J();b=A6j.b;$p=4;continue _;}J();b=A6k.b;$p=5;continue _;case 4:AJ6(g,f,h,i,b);if(C()){break _;}$p=6;continue _;case 5:AJ6(g,f,h,i,b);if(C())
{break _;}$p=6;case 6:AFp(g,f,h,i,e);if(C()){break _;}$p=7;case 7:ABd(g,f,h,i,j);if(C()){break _;}if(!c)return;d=a.bY;e=a.de;b=a.dc;c=a.dj;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function L4(a){var b,c;if(a.b9.data[0]===null)return 0;b=Ra(a,Dl(a.b9.data[0]).cx);if(b<0)b=0;else if(a.b9.data[2]===null)b=1;else if(a.b9.data[2].bs!=b)b=0;else if(a.b9.data[2].m<64&&a.b9.data[2].m<D4(a.b9.data[2]))b=1;else{c=a.b9.data[2].m;Bw();b=c>=A6v.data[b].en?0:1;}return b;}
function Y6(a){var b,c;if(L4(a)){b=Ra(a,Dl(a.b9.data[0]).cx);if(a.b9.data[2]===null)a.b9.data[2]=I1(b,1);else if(a.b9.data[2].bs==b){c=a.b9.data[2];c.m=c.m+1|0;}c=a.b9.data[0];c.m=c.m-1|0;if(a.b9.data[0].m<=0)a.b9.data[0]=null;}}
function Ra(a,b){J();if(b==A4z.b){Bw();b=A67.cx;}else if(b==A4A.b){Bw();b=A68.cx;}else if(b==A6e.b){Bw();b=A6S.cx;}else if(b==A4u.b)b=A4n.b;else{Bw();b=b==A5x.cx?A7R.cx:b!=A4h.b?(-1):A4d.b;}return b;}
function VQ(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bY;c=a.de;d=a.dc;e=a.dj;$p=1;case 1:ABK(b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function P2(){DF.call(this);this.g$=null;}
function A0$(){var a=new P2();ATq(a);return a;}
function ATq(a){a.g$=N(B6,36);}
function AOX(a){return 27;}
function Oi(a,b){return a.g$.data[b];}
function ATg(a,b,c){var d;if(a.g$.data[b]===null)return null;if(a.g$.data[b].m<=c){d=a.g$.data[b];a.g$.data[b]=null;return d;}d=D6(a.g$.data[b],c);if(!a.g$.data[b].m)a.g$.data[b]=null;return d;}
function ACL(a,b,c){a.g$.data[b]=c;if(c!==null&&c.m>64)c.m=64;}
function AX0(a){return B(255);}
function AW8(a){return 64;}
function CA(){E.call(this);this.fK=null;}
function A$5(){var a=new CA();Cl(a);return a;}
function Cl(a){a.fK=null;}
function RS(a){return a.fK!==null?a.fK:B(3);}
function AQd(a,b){a.fK=b;return a;}
function KS(b){var c,d;c=LI(b);if(!c){b=new LJ;Cl(b);return b;}d=AAt(c);d.fK=FX(b);d.fX(b);return d;}
function O3(b,c){I9(c,b.eC());if(b.eC()){To(c,RS(b));b.f3(c);}}
function AAt(b){var c;switch(b){case 0:c=new LJ;Cl(c);return c;case 1:c=new KB;Cl(c);return c;case 2:c=new KU;Cl(c);return c;case 3:c=new Jz;Cl(c);return c;case 4:c=new LV;Cl(c);return c;case 5:c=new MP;Cl(c);return c;case 6:c=new Kv;Cl(c);return c;case 7:c=new KI;Cl(c);return c;case 8:c=new Mk;Cl(c);return c;case 9:return Kj();case 10:return F8();default:}return null;}
function AKm(){CA.call(this);this.cl=null;}
function F8(){var a=new AKm();AX8(a);return a;}
function AX8(a){Cl(a);a.cl=CY();}
function AW1(a,b){var c;c=K_(G_(a.cl));while(Fi(c)){O3(Ko(c),b);}I9(b,0);}
function AYt(a,b){var c;Rm(a.cl);while(true){c=KS(b);if(!c.eC())break;BK(a.cl,RS(c),c);}}
function AW0(a){return 10;}
function Gw(a,b,c){var d;d=a.cl;c.fK=b;BK(d,b,c);}
function H$(a,b,c){var d,e;d=a.cl;e=new KB;Cl(e);e.rH=c;e.fK=b;BK(d,b,e);}
function EH(a,b,c){var d,e;d=a.cl;e=new KU;Cl(e);e.rB=c;e.fK=b;BK(d,b,e);}
function FF(a,b,c){var d,e;d=a.cl;e=new Jz;Cl(e);e.qm=c;e.fK=b;BK(d,b,e);}
function GV(a,b,c){var d,e;d=a.cl;e=new LV;Cl(e);e.rd=c;e.fK=b;BK(d,b,e);}
function AMl(a,b,c){var d,e;d=a.cl;e=AWK(c);e.fK=b;BK(d,b,e);}
function Hp(a,b,c){var d,e;d=a.cl;e=new KI;Cl(e);e.k7=c;e.fK=b;BK(d,b,e);}
function AIu(a,b,c){var d;d=a.cl;c.fK=b;BK(d,b,c);}
function PS(a,b,c){H$(a,b,(!c?0:1)<<24>>24);}
function UQ(a,b){return Dv(a.cl,b);}
function JP(a,b){return !Dv(a.cl,b)?0:Cz(a.cl,b).rH;}
function EV(a,b){return !Dv(a.cl,b)?0:Cz(a.cl,b).rB;}
function E6(a,b){return !Dv(a.cl,b)?0:Cz(a.cl,b).qm;}
function Km(a,b){return !Dv(a.cl,b)?Long_ZERO:Cz(a.cl,b).rd;}
function AHm(a,b){return !Dv(a.cl,b)?0.0:Cz(a.cl,b).l3;}
function Hi(a,b){return !Dv(a.cl,b)?$rt_createByteArray(0):Cz(a.cl,b).k7;}
function KC(a,b){return !Dv(a.cl,b)?F8():Cz(a.cl,b);}
function II(a,b){return !Dv(a.cl,b)?Kj():Cz(a.cl,b);}
function QO(a,b){return !JP(a,b)?0:1;}
function Nl(){B5.call(this);}
function A$6(){var a=new Nl();AZC(a);return a;}
function AZC(a){Q(a);}
function PE(){B5.call(this);}
function A$7(){var a=new PE();AQ3(a);return a;}
function AQ3(a){Q(a);}
function O2(){F1.call(this);this.ys=0;}
function AO1(a){var b;b=new Bc;Ba(b);return O(Bd(H(b,B(581)),a.ys));}
function Nh(){F1.call(this);this.Bc=0;}
function AOE(a){var b;b=new Bc;Ba(b);return O(Bd(H(b,B(582)),a.Bc));}
function Hm(){var a=this;E.call(a);a.kR=0;a.pE=0;a.kt=null;a.gA=null;a.qE=null;a.hy=null;}
function A$8(a){var b=new Hm();RK(b,a);return b;}
function RK(a,b){a.hy=b;a.pE=b.go;a.kt=null;}
function Fi(a){if(a.kt!==null)return 1;while(a.kR<a.hy.cp.data.length){if(a.hy.cp.data[a.kR]!==null)return 1;a.kR=a.kR+1|0;}return 0;}
function QR(a){var b;if(a.pE==a.hy.go)return;b=new Jf;Q(b);M(b);}
function Sj(a){var b,c,d;QR(a);if(!Fi(a)){b=new Iq;Q(b);M(b);}if(a.kt===null){c=a.hy.cp.data;d=a.kR;a.kR=d+1|0;a.gA=c[d];a.kt=a.gA.d7;a.qE=null;}else{if(a.gA!==null)a.qE=a.gA;a.gA=a.kt;a.kt=a.kt.d7;}}
function Zl(a){var b,c;QR(a);if(a.gA===null){b=new DK;Q(b);M(b);}if(a.qE!==null)a.qE.d7=a.gA.d7;else{c=a.gA.ol&(a.hy.cp.data.length-1|0);a.hy.cp.data[c]=a.hy.cp.data[c].d7;}a.gA=null;a.pE=a.pE+1|0;b=a.hy;b.go=b.go+1|0;b=a.hy;b.ft=b.ft-1|0;}
function Ro(){Hm.call(this);}
function Ko(a){Sj(a);return a.gA.et;}
function Sx(){var a=this;E.call(a);a.xC=null;a.A0=null;a.tY=0;a.o5=0;}
function Ly(a){return ED(a.xC);}
function AEm(a,b){return Ci(a.A0)<b?0:1;}
function AZk(a,b){a.tY=b;}
function AYr(a,b){a.o5=b;}
function Z1(){var a=this;CI.call(a);a.um=null;a.v$=null;a.mg=null;}
function AUv(a,b){var c=new Z1();AS2(c,a,b);return c;}
function AS2(a,b,c){DI(a);a.v$=B(583);a.um=b;a.mg=c;}
function AMf(a){var b;b=0;while(b<a.mg.w_){U(a.bE,Pn(b,((a.bh/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bv/6|0)+(24*(b>>1)|0)|0,N4(a.mg,b)));b=b+1|0;}U(a.bE,C9(100,(a.bh/2|0)-100|0,((a.bv/6|0)+120|0)+12|0,B(584)));U(a.bE,C9(200,(a.bh/2|0)-100|0,(a.bv/6|0)+168|0,B(585)));}
function Zr(a,b){var c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC){if(b.co<100){DH(a.mg,b.co,1);b.jl=N4(a.mg,b.co);}if(b.co==100){c=a.H;d=new RZ;e=a.mg;DI(d);d.wW=B(586);d.jB=(-1);d.xk=a;d.iG=e;$p=1;continue _;}if(b.co==200){b=a.H;c=a.um;$p=2;continue _;}}return;case 1:Zp(c,d);if(C()){break _;}if(b.co!=200)return;b=a.H;c=a.um;$p=2;case 2:Zp(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function ABu(a,b,c,d){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WW(a);if(C()){break _;}Dz(a,a.bS,a.v$,a.bh/2|0,20,16777215);$p=2;case 2:AAZ(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Mf(){var a=this;CI.call(a);a.m$=null;a.vY=null;a.vd=0;}
function AZv(a){var b=new Mf();ZK(b,a);return b;}
function ZK(a,b){DI(a);a.vY=B(587);a.vd=0;a.m$=b;}
function AJ4(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=5){a.rl();return;}c=new Bc;Ba(c);c=H(c,B(588));d=b+1|0;c=O(Bd(c,d));$p=1;case 1:$z=AMr(c);if(C()){break _;}e=$z;if(e!==null){c=new Bc;Ba(c);c=O(Bd(H(c,B(589)),d));e=new Bc;Ba(e);e=O(H(Bd(H(e,B(588)),d),B(345)));Y();f=A30;$p=2;continue _;}U(a.bE,C9(b,(a.bh/2|0)-100|0,(a.bv/6|0)+(24*b|0)|0,B(590)));b=d;if(b>=5){a.rl();return;}c=new Bc;Ba(c);c
=H(c,B(588));d=b+1|0;c=O(Bd(c,d));continue _;case 2:$z=AZ5(f,e);if(C()){break _;}e=$z;g=e===null?(-1):e.byteLength;e=new Bc;Ba(e);c=O(H(AFk(H(H(e,c),B(591)),g/100.0),B(592)));U(a.bE,C9(b,(a.bh/2|0)-100|0,(a.bv/6|0)+(24*b|0)|0,c));b=d;if(b>=5){a.rl();return;}c=new Bc;Ba(c);c=H(c,B(588));d=b+1|0;c=O(Bd(c,d));$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AH5(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=new Bc;Ba(c);c=O(Bd(H(c,B(588)),b));$p=1;case 1:$z=AMr(c);if(C()){break _;}c=$z;if(c===null)c=null;else{c=new Bc;Ba(c);c=O(Bd(H(c,B(588)),b));}return c;default:Es();}}CM().s(a,b,c,$p);}
function AQa(a){U(a.bE,C9(5,(a.bh/2|0)-100|0,((a.bv/6|0)+120|0)+12|0,B(593)));U(a.bE,C9(6,(a.bh/2|0)-100|0,(a.bv/6|0)+168|0,B(594)));}
function AMK(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC){if(b.co<5){c=b.co+1|0;$p=1;continue _;}if(b.co==5){b=a.H;d=new Rc;ZK(d,a);d.vY=B(595);$p=2;continue _;}if(b.co==6){b=a.H;d=a.m$;$p=3;continue _;}}return;case 1:a.EC(c);if(C()){break _;}return;case 2:Zp(b,d);if(C()){break _;}return;case 3:Zp(b,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AFG(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.H;d=null;$p=1;case 1:Zp(c,d);if(C()){break _;}if(a.vd)return;a.vd=1;d=a.H;c=new Bc;Ba(c);c=O(Bd(H(c,B(588)),b));$p=2;case 2:AC5(d,c);if(C()){break _;}d=a.H;c=null;$p=3;case 3:Zp(d,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Z4(a,b,c,d){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WW(a);if(C()){break _;}Dz(a,a.bS,a.vY,a.bh/2|0,20,16777215);$p=2;case 2:AAZ(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Qc(){var a=this;E.call(a);a.kx=0;a.vP=0;a.qG=0;a.l0=0;a.j5=null;}
function RV(a){return a.kx>=a.qG?0:1;}
function SN(a){var b,c;M3(a);a.l0=a.kx;b=a.j5;c=a.kx;a.kx=c+1|0;return Z(b,c);}
function AGZ(a){var b;if(a.l0<0){b=new DK;Q(b);M(b);}M3(a);Eo(a.j5,a.l0);a.vP=a.j5.d8;if(a.l0<a.kx)a.kx=a.kx-1|0;a.qG=a.qG-1|0;a.l0=(-1);}
function M3(a){var b;if(a.vP>=a.j5.d8)return;b=new Jf;Q(b);M(b);}
function J$(){Fr.call(this);}
function A$9(){var a=new J$();AWY(a);return a;}
function AWY(a){Q(a);}
function P1(){Fr.call(this);}
function A$$(){var a=new P1();AZm(a);return a;}
function AZm(a){Q(a);}
function AGk(){E.call(this);}
function A$_(){var a=new AGk();AW$(a);return a;}
function AW$(a){return;}
function VZ(){E.call(this);}
function A_a(){var a=new VZ();AXW(a);return a;}
function AXW(a){return;}
function N3(){E.call(this);this.lR=null;}
var A_b=null;function AQ_(){AQ_=Bt(N3);AUT();}
function A0e(){var a=new N3();AGp(a);return a;}
function St(){AQ_();return A_b;}
function AGp(a){var b,c,d,e;AQ_();SH(a);a.lR=Ck();ACw(A1k(),a);Tu(A0m(),a);Zs(A1i(),a);AEO(A05(),a);T$(A0x(),a);AMR(A0W(),a);b=new B6;J();Rj(b,A4x,1);c=N(E,5);d=c.data;d[0]=B(596);d[1]=B(596);d[2]=B(596);d[3]=BC(35);Bw();d[4]=A5w;Ca(a,b,c);e=F2(A4E,1);c=N(E,7);d=c.data;d[0]=B(597);d[1]=B(598);d[2]=B(597);d[3]=BC(88);d[4]=A5v;d[5]=BC(35);d[6]=A4u;Ca(a,e,c);e=F2(A4c,3);c=N(E,3);d=c.data;d[0]=B(596);d[1]=BC(35);d[2]=A4h;Ca(a,e,c);e=F2(A5s,1);c=N(E,5);d=c.data;d[0]=B(599);d[1]=B(596);d[2]=B(599);d[3]=BC(35);d[4]
=A7k;Ca(a,e,c);e=D$(A7U,1);c=N(E,5);d=c.data;d[0]=B(600);d[1]=B(600);d[2]=B(600);d[3]=BC(35);d[4]=A4j;Ca(a,e,c);e=D$(A6u,1);c=N(E,7);d=c.data;d[0]=B(596);d[1]=B(596);d[2]=B(601);d[3]=BC(35);d[4]=A4j;d[5]=BC(88);d[6]=A7k;Ca(a,e,c);e=F2(A4j,4);c=N(E,3);d=c.data;d[0]=B(602);d[1]=BC(35);d[2]=A4k;Ca(a,e,c);e=D$(A7k,4);c=N(E,4);d=c.data;d[0]=B(602);d[1]=B(602);d[2]=BC(35);d[3]=A4j;Ca(a,e,c);e=F2(A4m,4);c=N(E,6);d=c.data;d[0]=B(66);d[1]=B(602);d[2]=BC(88);d[3]=A6R;d[4]=BC(35);d[5]=A7k;Ca(a,e,c);e=D$(A7l,4);c=N(E,4);d
=c.data;d[0]=B(599);d[1]=B(603);d[2]=BC(35);d[3]=A4j;Ca(a,e,c);e=F2(A6n,16);c=N(E,7);d=c.data;d[0]=B(604);d[1]=B(597);d[2]=B(604);d[3]=BC(88);d[4]=A67;d[5]=BC(35);d[6]=A7k;Ca(a,e,c);e=D$(A7Y,1);c=N(E,4);d=c.data;d[0]=B(599);d[1]=B(596);d[2]=BC(35);d[3]=A67;Ca(a,e,c);e=D$(A7V,1);c=N(E,4);d=c.data;d[0]=B(599);d[1]=B(603);d[2]=BC(35);d[3]=A67;Ca(a,e,c);e=D$(A64,1);c=N(E,6);d=c.data;d[0]=B(605);d[1]=B(606);d[2]=BC(65);d[3]=A67;d[4]=BC(66);d[5]=A6Q;Ca(a,e,c);e=D$(A7w,1);c=N(E,3);d=c.data;d[0]=B(596);d[1]=BC(35);d[2]
=A6U;Ca(a,e,c);e=F2(A6b,4);c=N(E,5);d=c.data;d[0]=B(607);d[1]=B(608);d[2]=B(596);d[3]=BC(35);d[4]=A4j;Ca(a,e,c);e=F2(A6o,4);c=N(E,5);d=c.data;d[0]=B(607);d[1]=B(608);d[2]=B(596);d[3]=BC(35);d[4]=A4h;Ca(a,e,c);e=D$(A7S,1);c=N(E,7);d=c.data;d[0]=B(596);d[1]=B(598);d[2]=B(596);d[3]=BC(35);d[4]=A7k;d[5]=BC(88);d[6]=A4x;Ca(a,e,c);e=D$(A7T,1);c=N(E,7);d=c.data;d[0]=B(596);d[1]=B(598);d[2]=B(596);d[3]=BC(35);d[4]=A4C;d[5]=BC(88);d[6]=A65;Ca(a,e,c);OH(a.lR,A0H(a));B9(Ds(),O(H(Bd(BQ(),CZ(a.lR)),B(609))));}
function Ca(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=c.data;e=B(3);f=0;g=0;h=0;if(!Pq(d[f],$rt_arraycls(Cp))){while(d[f] instanceof Cp){i=f+1|0;j=d[f];h=h+1|0;g=BE(j);k=new Bc;Ba(k);e=O(H(H(k,e),j));f=i;}i=f;}else{i=1;l=d[f];m=0;while(true){c=l.data;if(m>=c.length)break;k=c[m];h=h+1|0;g=BE(k);j=new Bc;Ba(j);e=O(H(H(j,e),k));m=m+1|0;}}n=CY();while(i<d.length){o=d[i];p=0;m=i+1|0;if(d[m] instanceof W)p=d[m].cx;else if(d[m] instanceof P)p=d[m].b;BK(n,o,CG(p));i=i+2|0;}i=Bh(g,h);d=$rt_createIntArray(i);c=d.data;p
=0;while(p<i){q=Cr(e,p);if(!Dv(n,BC(q)))c[p]=(-1);else c[p]=Cz(n,BC(q)).f4;p=p+1|0;}e=a.lR;j=new Q5;j.DQ=b.bs;j.jL=g;j.pj=h;j.vl=d;j.vp=b;U(e,j);}
function OR(a,b){var c,d;c=0;while(c<a.lR.p){d=Z(a.lR,c);if(AGf(d,b))return ACv(d,b);c=c+1|0;}return null;}
function AUT(){A_b=A0e();}
function Xz(){JN.call(this);}
function Pn(a,b,c,d){var e=new Xz();AWB(e,a,b,c,d);return e;}
function AWB(a,b,c,d,e){PC(a,b,c,d,150,20,e);}
function RZ(){var a=this;CI.call(a);a.xk=null;a.wW=null;a.iG=null;a.jB=0;}
function AEq(a){var b;b=0;while(b<a.iG.lW.data.length){U(a.bE,Pn(b,((a.bh/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bv/6|0)+(24*(b>>1)|0)|0,Jo(a.iG,b)));b=b+1|0;}U(a.bE,C9(200,(a.bh/2|0)-100|0,(a.bv/6|0)+168|0,B(585)));}
function ADh(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.iG.lW.data.length){Z(a.bE,c).jl=Jo(a.iG,c);c=c+1|0;}if(b.co!=200){a.jB=b.co;d=new Bc;Ba(d);b.jl=O(H(H(H(d,B(567)),Jo(a.iG,b.co)),B(568)));return;}b=a.H;d=a.xk;$p=1;case 1:Zp(b,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AGC(a,b,c){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jB>=0){TZ(a.iG,a.jB,c);Z(a.bE,a.jB).jl=Jo(a.iG,a.jB);a.jB=(-1);return;}$p=1;case 1:UG(a,b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function ABN(a,b,c,d){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WW(a);if(C()){break _;}Dz(a,a.bS,a.wW,a.bh/2|0,20,16777215);$p=2;case 2:AAZ(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Rc(){Mf.call(this);}
function ATe(a){U(a.bE,C9(6,(a.bh/2|0)-100|0,(a.bv/6|0)+168|0,B(594)));}
function AGX(a,b){var c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AH5(a,b);if(C()){break _;}c=$z;if(c===null)return;d=a.H;e=new Rh;f=new Bc;Ba(f);f=O(H(H(H(f,B(610)),c),B(611)));DI(e);e.yY=a;e.yN=B(612);e.yP=f;e.wg=b;$p=2;case 2:Zp(d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ALp(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b){$p=2;continue _;}d=a.H;e=a.m$;$p=1;case 1:Zp(d,e);if(C()){break _;}return;case 2:$z=AH5(a,c);if(C()){break _;}d=$z;e=new Bc;Ba(e);d=O(H(H(e,B(613)),d));Y();$p=3;case 3:$z=AKw(d);if(C()){break _;}b=$z;if(!b){d=a.H;e=a.m$;$p=1;continue _;}b=1;c=1;f=N2();e=A30;$p=4;case 4:AVI(e,d,b,c,f);if(C()){break _;}g=H5(f);while(true){if(!FQ(g)){g=H5(f);while
(FQ(g)){e=FJ(g);if(e.lL){e=e.kZ;$p=7;continue _;}}$p=6;continue _;}e=FJ(g);if(!e.lL)break;}e=e.kZ;$p=5;case 5:AGQ(e);if(C()){break _;}while(true){if(!FQ(g)){g=H5(f);while(FQ(g)){e=FJ(g);if(e.lL){e=e.kZ;$p=7;continue _;}}$p=6;continue _;}e=FJ(g);if(e.lL)continue;else break;}e=e.kZ;continue _;case 6:AGQ(d);if(C()){break _;}d=a.H;e=a.m$;$p=1;continue _;case 7:AGQ(e);if(C()){break _;}while(FQ(g)){e=FJ(g);if(!e.lL)continue;else{e=e.kZ;continue _;}}$p=6;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function LA(){var a=this;E.call(a);a.jA=0.0;a.jq=0.0;a.DG=0;a.sp=0;}
function A_c(){var a=new LA();YK(a);return a;}
function YK(a){a.jA=0.0;a.jq=0.0;a.DG=0;a.sp=0;}
function Ug(){var a=this;LA.call(a);a.i4=null;a.l5=null;}
function Sb(a){var b=new Ug();ARR(b,a);return b;}
function ARR(a,b){YK(a);a.i4=$rt_createBooleanArray(10);a.l5=b;}
function AJ1(a,b,c){var d;d=(-1);if(b==a.l5.r9.by)d=0;if(b==a.l5.u0.by)d=1;if(b==a.l5.r2.by)d=2;if(b==a.l5.sw.by)d=3;if(b==a.l5.v7.by)d=4;if(d>=0)a.i4.data[d]=c;}
function AJw(a){var b;b=0;while(b<10){a.i4.data[b]=0;b=b+1|0;}}
function AI_(a,b){a.jA=0.0;a.jq=0.0;if(a.i4.data[0])a.jq=a.jq+1.0;if(a.i4.data[1])a.jq=a.jq-1.0;if(a.i4.data[2])a.jA=a.jA+1.0;if(a.i4.data[3])a.jA=a.jA-1.0;a.sp=a.i4.data[4];}
function LJ(){CA.call(this);}
function A_d(){var a=new LJ();AOY(a);return a;}
function AOY(a){Cl(a);}
function AYq(a,b){return;}
function ASd(a,b){return;}
function AOg(a){return 0;}
function AL$(){var a=this;E.call(a);a.Bi=null;a.oG=null;}
function A1k(){var a=new AL$();AQb(a);return a;}
function AQb(a){var b,c,d,e;b=N($rt_arraycls(Cp),4);c=b.data;d=N(Cp,3);e=d.data;e[0]=B(614);e[1]=B(603);e[2]=B(603);c[0]=d;d=N(Cp,3);e=d.data;e[0]=B(66);e[1]=B(602);e[2]=B(602);c[1]=d;d=N(Cp,3);e=d.data;e[0]=B(615);e[1]=B(616);e[2]=B(617);c[2]=d;d=N(Cp,3);e=d.data;e[0]=B(615);e[1]=B(617);e[2]=B(617);c[3]=d;a.Bi=b;b=N($rt_arraycls(E),5);c=b.data;d=N(E,5);e=d.data;J();e[0]=A4j;e[1]=A4h;Bw();e[2]=A67;e[3]=A6S;e[4]=A68;c[0]=d;d=N(E,5);e=d.data;e[0]=A7a;e[1]=A7e;e[2]=A62;e[3]=A7i;e[4]=A7p;c[1]=d;d=N(E,5);e=d.data;e[0]
=A6_;e[1]=A7d;e[2]=A61;e[3]=A7h;e[4]=A7o;c[2]=d;d=N(E,5);e=d.data;e[0]=A7b;e[1]=A7f;e[2]=A63;e[3]=A7j;e[4]=A7q;c[3]=d;d=N(E,5);e=d.data;e[0]=A7r;e[1]=A7s;e[2]=A7t;e[3]=A7u;e[4]=A7v;c[4]=d;a.oG=b;}
function ACw(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.oG.data[0].data.length){d=a.oG.data[0].data[c];e=0;while(e<(a.oG.data.length-1|0)){f=a.oG.data;g=e+1|0;h=f[g].data[c];i=Ny(h);f=N(E,5);j=f.data;j[0]=a.Bi.data[e];j[1]=BC(35);Bw();j[2]=A7k;j[3]=BC(88);j[4]=d;Ca(b,i,f);e=g;}c=c+1|0;}}
function TT(){var a=this;E.call(a);a.yi=null;a.n2=null;}
function A0m(){var a=new TT();AY_(a);return a;}
function AY_(a){var b,c,d,e;b=N($rt_arraycls(Cp),1);c=b.data;d=N(Cp,3);e=d.data;e[0]=B(66);e[1]=B(66);e[2]=B(602);c[0]=d;a.yi=b;b=N($rt_arraycls(E),2);c=b.data;d=N(E,5);e=d.data;J();e[0]=A4j;e[1]=A4h;Bw();e[2]=A67;e[3]=A6S;e[4]=A68;c[0]=d;d=N(E,5);e=d.data;e[0]=A6$;e[1]=A7c;e[2]=A69;e[3]=A7g;e[4]=A7n;c[1]=d;a.n2=b;}
function Tu(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.n2.data[0].data.length){d=a.n2.data[0].data[c];e=0;while(e<(a.n2.data.length-1|0)){f=a.n2.data;g=e+1|0;h=f[g].data[c];i=Ny(h);j=N(E,5);k=j.data;k[0]=a.yi.data[e];k[1]=BC(35);Bw();k[2]=A7k;k[3]=BC(88);k[4]=d;Ca(b,i,j);e=g;}c=c+1|0;}h=new B6;Bw();Fw(h,A66,1);f=N(E,7);k=f.data;k[0]=B(618);k[1]=B(619);k[2]=B(618);k[3]=BC(88);k[4]=A5w;k[5]=BC(35);k[6]=A7k;Ca(b,h,f);d=D$(A5u,4);f=N(E,9);k=f.data;k[0]=B(66);k[1]=B(602);k[2]=B(42);k[3]=BC(89);k[4]=A5t;k[5]=BC(88);k[6]
=A67;k[7]=BC(35);k[8]=A7k;Ca(b,d,f);}
function TM(){E.call(this);this.qH=null;}
function A1i(){var a=new TM();ATu(a);return a;}
function ATu(a){var b,c,d,e;b=N($rt_arraycls(E),3);c=b.data;d=N(E,2);e=d.data;J();e[0]=A4C;Bw();e[1]=A68;c[0]=d;d=N(E,2);e=d.data;e[0]=A4B;e[1]=A67;c[1]=d;d=N(E,2);e=d.data;e[0]=A6f;e[1]=A6S;c[2]=d;a.qH=b;}
function Zs(a,b){var c,d,e,f,g,h;c=0;while(c<a.qH.data.length){d=a.qH.data[c].data[0];e=a.qH.data[c].data[1];f=AGP(d);g=N(E,5);h=g.data;h[0]=B(596);h[1]=B(596);h[2]=B(596);h[3]=BC(35);h[4]=e;Ca(b,f,g);f=D$(e,9);g=N(E,3);h=g.data;h[0]=B(602);h[1]=BC(35);h[2]=d;Ca(b,f,g);c=c+1|0;}}
function ZG(){E.call(this);}
function A05(){var a=new ZG();ASo(a);return a;}
function ASo(a){return;}
function AEO(a,b){var c,d,e;c=new B6;Bw();Dg(c,A7m);d=N(E,9);e=d.data;e[0]=B(42);e[1]=B(66);e[2]=B(602);e[3]=BC(88);J();e[4]=A4s;e[5]=BC(89);e[6]=A4t;e[7]=BC(35);e[8]=A7l;Ca(b,c,d);c=Ny(A7m);d=N(E,9);e=d.data;e[0]=B(42);e[1]=B(66);e[2]=B(602);e[3]=BC(88);e[4]=A4t;e[5]=BC(89);e[6]=A4s;e[7]=BC(35);e[8]=A7l;Ca(b,c,d);}
function AL9(){E.call(this);}
function A0x(){var a=new AL9();AWM(a);return a;}
function AWM(a){return;}
function T$(a,b){var c,d,e;c=new B6;J();AC7(c,A6c);d=N(E,5);e=d.data;e[0]=B(596);e[1]=B(599);e[2]=B(596);e[3]=BC(35);e[4]=A4j;Ca(b,c,d);c=AGP(A6j);d=N(E,5);e=d.data;e[0]=B(596);e[1]=B(599);e[2]=B(596);e[3]=BC(35);e[4]=A4h;Ca(b,c,d);c=AGP(A6g);d=N(E,4);e=d.data;e[0]=B(600);e[1]=B(600);e[2]=BC(35);e[3]=A4j;Ca(b,c,d);}
function AAx(){var a=this;E.call(a);a.w3=null;a.mK=null;}
function A0W(){var a=new AAx();AOx(a);return a;}
function AOx(a){var b,c,d,e;b=N($rt_arraycls(Cp),4);c=b.data;d=N(Cp,2);e=d.data;e[0]=B(614);e[1]=B(604);c[0]=d;d=N(Cp,3);e=d.data;e[0]=B(604);e[1]=B(614);e[2]=B(614);c[1]=d;d=N(Cp,3);e=d.data;e[0]=B(614);e[1]=B(604);e[2]=B(604);c[2]=d;d=N(Cp,2);e=d.data;e[0]=B(604);e[1]=B(604);c[3]=d;a.w3=b;b=N($rt_arraycls(E),5);c=b.data;d=N(E,5);e=d.data;J();e[0]=A4x;e[1]=A5G;Bw();e[2]=A67;e[3]=A6S;e[4]=A68;c[0]=d;d=N(E,5);e=d.data;e[0]=A7x;e[1]=A7B;e[2]=A7F;e[3]=A7J;e[4]=A7N;c[1]=d;d=N(E,5);e=d.data;e[0]=A7y;e[1]=A7C;e[2]
=A7G;e[3]=A7K;e[4]=A7O;c[2]=d;d=N(E,5);e=d.data;e[0]=A7z;e[1]=A7D;e[2]=A7H;e[3]=A7L;e[4]=A7P;c[3]=d;d=N(E,5);e=d.data;e[0]=A7A;e[1]=A7E;e[2]=A7I;e[3]=A7M;e[4]=A7Q;c[4]=d;a.mK=b;}
function AMR(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.mK.data[0].data.length){d=a.mK.data[0].data[c];e=0;while(e<(a.mK.data.length-1|0)){f=a.mK.data;g=e+1|0;h=f[g].data[c];i=Ny(h);f=N(E,3);j=f.data;j[0]=a.w3.data[e];j[1]=BC(88);j[2]=d;Ca(b,i,f);e=g;}c=c+1|0;}}
function Uf(){E.call(this);this.ED=null;}
function A0H(a){var b=new Uf();AQR(b,a);return b;}
function AQR(a,b){a.ED=b;}
function AHl(a,b,c){return IP(c)<IP(b)?(-1):IP(c)<=IP(b)?0:1;}
function ARy(a,b,c){return AHl(a,b,c);}
function KB(){CA.call(this);this.rH=0;}
function A_e(){var a=new KB();AUY(a);return a;}
function AUY(a){Cl(a);}
function AX3(a,b){I9(b,a.rH);}
function AXF(a,b){a.rH=LI(b);}
function AWE(a){return 1;}
function KU(){CA.call(this);this.rB=0;}
function A_f(){var a=new KU();AV7(a);return a;}
function AV7(a){Cl(a);}
function APm(a,b){VV(b,a.rB);}
function ARB(a,b){a.rB=TG(b);}
function AVY(a){return 2;}
function Jz(){CA.call(this);this.qm=0;}
function A_g(){var a=new Jz();AS$(a);return a;}
function AS$(a){Cl(a);}
function ATo(a,b){Ib(b,a.qm);}
function ARf(a,b){a.qm=GS(b);}
function AOI(a){return 3;}
function LV(){CA.call(this);this.rd=Long_ZERO;}
function A_h(){var a=new LV();ARW(a);return a;}
function ARW(a){Cl(a);}
function ANh(a,b){QX(b,a.rd);}
function AZT(a,b){a.rd=P5(b);}
function ATV(a){return 4;}
function MP(){CA.call(this);this.l3=0.0;}
function A_i(){var a=new MP();ART(a);return a;}
function AWK(a){var b=new MP();AO2(b,a);return b;}
function ART(a){Cl(a);}
function AO2(a,b){Cl(a);a.l3=b;}
function ANa(a,b){AJS(b,a.l3);}
function AXA(a,b){a.l3=WG(b);}
function AMX(a){return 5;}
function Kv(){CA.call(this);this.hM=0.0;}
function A_j(){var a=new Kv();ARD(a);return a;}
function ARD(a){Cl(a);}
function AWR(a,b){AJX(b,a.hM);}
function AOw(a,b){a.hM=AJV(b);}
function ASA(a){return 6;}
function KI(){CA.call(this);this.k7=null;}
function A_k(){var a=new KI();AZ4(a);return a;}
function AZ4(a){Cl(a);}
function AVt(a,b){Ib(b,a.k7.data.length);AI$(b,a.k7);}
function AW6(a,b){a.k7=$rt_createByteArray(GS(b));AHw(b,a.k7);}
function AYD(a){return 7;}
function Mk(){CA.call(this);this.xJ=null;}
function A_l(){var a=new Mk();AXQ(a);return a;}
function AXQ(a){Cl(a);}
function AZs(a,b){To(b,a.xJ);}
function ARg(a,b){a.xJ=FX(b);}
function ANp(a){return 8;}
function NZ(){var a=this;CA.call(a);a.gu=null;a.lC=0;}
function Kj(){var a=new NZ();ACi(a);return a;}
function ACi(a){Cl(a);a.gu=Ck();}
function AYA(a,b){var c;if(a.gu.p<=0)a.lC=1;else a.lC=Z(a.gu,0).eC();I9(b,a.lC);Ib(b,a.gu.p);c=0;while(c<a.gu.p){Z(a.gu,c).f3(b);c=c+1|0;}}
function ARb(a,b){var c,d,e;a.lC=LI(b);c=GS(b);a.gu=Ck();d=0;while(d<c){e=AAt(a.lC);e.fX(b);U(a.gu,e);d=d+1|0;}}
function AQU(a){return 9;}
function HT(a,b){a.lC=b.eC();U(a.gu,b);}
function Ew(a,b){return Z(a.gu,b);}
function AI4(a){return a.gu.p;}
function Qf(){var a=this;E.call(a);a.xH=null;a.uU=null;}
function AL0(a){Cx(a.xH,(QS(a.uU.result)?1:0)?null:AXY(a.uU.result));}
function AN5(a){AL0(a);}
function Qe(){E.call(this);this.AP=null;}
function TB(a){Cx(a.AP,null);}
function AP3(a){TB(a);}
function Sp(){D0.call(this);this.qY=null;}
function AUz(a){D5(a.bS,B(254),60,6,4210752);D5(a.bS,B(317),8,(a.eL-96|0)+2|0,4210752);}
function AIU(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.H.bi;d=B(620);$p=1;case 1:$z=ACG(c,d);if(C()){break _;}e=$z;BN(1.0,1.0,1.0,1.0);DJ(a.H.bi,e);f=(a.bh-a.ez|0)/2|0;g=(a.bv-a.eL|0)/2|0;Ct(a,f,g,0,0,a.ez,a.eL);if(SL(a.qY)){h=Zf(a.qY,12);Ct(a,f+56|0,((g+36|0)+12|0)-h|0,176,12-h|0,14,h+2|0);}i=AJi(a.qY,24);Ct(a,f+79|0,g+34|0,176,14,i+1|0,16);return;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,i,$p);}
function Ti(){var a=this;D0.call(a);a.k$=null;a.ss=null;}
function UZ(a){var b,c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WE(a);if(C()){break _;}b=0;while(b<9){c=Fq(a.k$,b);if(c!==null){d=a.H.e;$p=2;continue _;}b=b+1|0;}return;case 2:AGF(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=9)break;c=Fq(a.k$,b);if(c===null)continue;else{d=a.H.e;continue _;}}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AWz(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=e+(f*3|0)|0;h=Fq(a.k$,g);if(h!==null)d[g]=h.bs;else d[g]=(-1);f=f+1|0;}e=e+1|0;}MR(a.ss,0,OR(St(),c));}
function ATl(a){D5(a.bS,B(376),28,6,4210752);D5(a.bS,B(317),8,(a.eL-96|0)+2|0,4210752);}
function AFi(a,b){var c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.H.bi;d=B(621);$p=1;case 1:$z=ACG(c,d);if(C()){break _;}e=$z;BN(1.0,1.0,1.0,1.0);DJ(a.H.bi,e);Ct(a,(a.bh-a.ez|0)/2|0,(a.bv-a.eL|0)/2|0,0,0,a.ez,a.eL);return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AHk(){var a=this;D0.call(a);a.BJ=null;a.xQ=null;a.ju=0;}
function A1G(a,b){var c=new AHk();ATC(c,a,b);return c;}
function ATC(a,b,c){var d,e,f,g;GW(a);a.ju=0;a.BJ=b;a.xQ=c;a.oi=0;a.ju=c.fH()/9|0;a.eL=114+(a.ju*18|0)|0;d=(a.ju-4|0)*18|0;e=0;while(e<a.ju){f=0;while(f<9){U(a.cH,DC(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){U(a.cH,DC(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=161+d|0;while(e<9){U(a.cH,DC(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function AYT(a){D5(a.bS,a.xQ.uO(),8,6,4210752);D5(a.bS,B(317),8,(a.eL-96|0)+2|0,4210752);}
function AIs(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.H.bi;d=B(622);$p=1;case 1:$z=ACG(c,d);if(C()){break _;}e=$z;BN(1.0,1.0,1.0,1.0);DJ(a.H.bi,e);f=(a.bh-a.ez|0)/2|0;g=(a.bv-a.eL|0)/2|0;Ct(a,f,g,0,0,a.ez,(a.ju*18|0)+17|0);Ct(a,f,(g+(a.ju*18|0)|0)+17|0,0,126,a.ez,96);return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function CF(){var a=this;Ef.call(a);a.Eg=null;a.fC=0;a.lN=0;a.w5=0;a.w4=0;}
var A_m=null;var A_n=null;var A_o=null;var A_p=null;var A_q=null;var A_r=null;var A_s=null;var A_t=null;var A_u=null;var A_v=null;var A_w=null;var A_x=null;var A_y=null;var A_z=null;var A_A=null;var A_B=null;var A_C=null;var A_D=null;var A_E=null;var A8a=null;function C5(a,b,c,d,e,f,g){var h=new CF();ZV(h,a,b,c,d,e,f,g);return h;}
function ZV(a,b,c,d,e,f,g,h){E3(a,b,c);a.Eg=d;a.fC=e;a.lN=f;a.w5=g;a.w4=h;}
function AKE(){var b,c;A_m=C5(B(623),0,B(623),16,16,0,0);A_n=C5(B(624),1,B(624),16,16,16,0);A_o=C5(B(625),2,B(625),16,16,32,0);A_p=C5(B(626),3,B(626),16,16,48,0);A_q=C5(B(627),4,B(627),16,16,64,0);A_r=C5(B(628),5,B(628),16,16,80,0);A_s=C5(B(629),6,B(629),16,16,96,0);A_t=C5(B(630),7,B(630),32,16,0,32);A_u=C5(B(631),8,B(631),32,16,32,32);A_v=C5(B(632),9,B(632),32,16,64,32);A_w=C5(B(633),10,B(633),32,16,96,32);A_x=C5(B(634),11,B(634),16,32,0,64);A_y=C5(B(635),12,B(635),32,32,0,128);A_z=C5(B(636),13,B(636),32,32,
32,128);A_A=C5(B(637),14,B(637),32,32,64,128);A_B=C5(B(638),15,B(638),32,32,96,128);A_C=C5(B(639),16,B(639),32,32,128,128);A_D=C5(B(640),17,B(640),64,32,0,96);A_E=C5(B(641),18,B(641),64,64,0,192);b=N(CF,19);c=b.data;c[0]=A_m;c[1]=A_n;c[2]=A_o;c[3]=A_p;c[4]=A_q;c[5]=A_r;c[6]=A_s;c[7]=A_t;c[8]=A_u;c[9]=A_v;c[10]=A_w;c[11]=A_x;c[12]=A_y;c[13]=A_z;c[14]=A_A;c[15]=A_B;c[16]=A_C;c[17]=A_D;c[18]=A_E;A8a=b;}
function Rh(){var a=this;CI.call(a);a.yY=null;a.yN=null;a.yP=null;a.wg=0;}
function ABE(a){U(a.bE,Pn(0,((a.bh/2|0)-155|0)+0|0,(a.bv/6|0)+96|0,B(642)));U(a.bE,Pn(1,((a.bh/2|0)-155|0)+160|0,(a.bv/6|0)+96|0,B(643)));}
function AKW(a,b){var c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.yY;d=b.co?0:1;e=a.wg;$p=1;case 1:ALp(c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function UK(a,b,c,d){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WW(a);if(C()){break _;}Dz(a,a.bS,a.yN,a.bh/2|0,70,16777215);Dz(a,a.bS,a.yP,a.bh/2|0,90,16777215);$p=2;case 2:AAZ(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function M6(){Ev.call(this);this.zl=null;}
function Yr(a){var b;b=new RP;RK(b,a.zl);return b;}
function I8(){EA.call(this);}
function A_F(){var a=new I8();ANQ(a);return a;}
function ANQ(a){Q(a);}
function Q5(){var a=this;E.call(a);a.jL=0;a.pj=0;a.vl=null;a.vp=null;a.DQ=0;}
function AGf(a,b){var c,d;c=0;while(c<=(3-a.jL|0)){d=0;while(d<=(3-a.pj|0)){if(Rz(a,b,c,d,1))return 1;if(Rz(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function Rz(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.jL&&i<a.pj)j=!e?a.vl.data[h+Bh(i,a.jL)|0]:a.vl.data[((a.jL-h|0)-1|0)+Bh(i,a.jL)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function ACv(a,b){return I1(a.vp.bs,a.vp.m);}
function IP(a){return Bh(a.jL,a.pj);}
function RP(){Hm.call(this);}
function JC(a){Sj(a);return a.gA.fA;}
function K7(){Eu.call(this);}
var A_G=0.0;var A_H=null;function AER(){A_G=NaN;A_H=K($rt_doublecls());}
function QJ(){}
function Pk(){}
function PV(){Ev.call(this);this.mP=null;}
var A_I=null;function A1F(){var a=new PV();V4(a);return a;}
function V4(a){a.mP=A17();}
function HZ(a){return ADs(a.mP);}
function Va(a,b){return AML(a.mP,b,b)===A_I?0:1;}
function KG(a,b){return ABG(a.mP,b)!==A_I?0:1;}
function KX(a){return Y7(a.mP);}
function Wy(){A_I=new E;}
function PJ(){}
function Mt(){}
function AEV(){var a=this;E8.call(a);a.jo=null;a.rN=null;a.CZ=null;a.rT=0;}
function A17(){var a=new AEV();ANK(a);return a;}
function ANK(a){var b;b=null;a.CZ=b;if(b===null){b=new N0;b.ET=a;}a.rN=b;}
function AML(a,b,c){var d,e;a.jo=L6(a,a.jo,b);d=Sr(a,b);e=PZ(d,c);PZ(d,c);a.rT=a.rT+1|0;return e;}
function ABG(a,b){var c;c=Sr(a,b);if(c===null)return null;a.jo=JJ(a,a.jo,b);a.rT=a.rT+1|0;return c.mB;}
function Sr(a,b){var c,d;c=a.jo;while(true){if(c===null)return null;d=L8(a.rN,b,c.l1);if(!d)break;c=d>=0?c.cX:c.cO;}return c;}
function L6(a,b,c){var d,e;if(b===null){b=new Jw;d=null;b.l1=c;b.mB=d;b.kv=1;b.ir=1;return b;}e=L8(a.rN,c,b.l1);if(!e)return b;if(e>=0)b.cX=L6(a,b.cX,c);else b.cO=L6(a,b.cO,c);EZ(b);return KY(b);}
function JJ(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=L8(a.rN,c,b.l1);if(d<0)b.cO=JJ(a,b.cO,c);else if(d>0)b.cX=JJ(a,b.cX,c);else{if(b.cX===null)return b.cO;e=b.cO;b=b.cX;f=N(Jw,b.kv);g=0;while(b.cO!==null){h=f.data;i=g+1|0;h[g]=b;b=b.cO;g=i;}c=b.cX;while(g>0){h=f.data;g=g+(-1)|0;j=h[g];j.cO=c;EZ(j);c=KY(j);}b.cX=c;b.cO=e;EZ(b);}EZ(b);return KY(b);}
function Y7(a){var b,c,d;b=a.jo;c=null;while(b!==null){d=AIW(b,0);c=b;b=d;}if(c!==null)return c.l1;b=new Iq;Q(b);M(b);}
function ADs(a){return a.jo===null?0:a.jo.ir;}
function N0(){E.call(this);this.ET=null;}
function L8(a,b,c){return b===null?Qo(c,b):Qo(b,c);}
function Lc(){E.call(this);}
var A_J=null;var A_K=null;function A_L(){var a=new Lc();AMA(a);return a;}
function AMA(a){return;}
function Dd(b,c){BK(A_J,c,b);BK(A_K,b,c);}
function HQ(b,c){var d,e,f,g,h,$$je;d=null;a:{try{e=d;f=Cz(A_J,b);if(f!==null){e=d;g=N(E2,1);g.data[0]=K(FN);b=SB(f,g);g=N(E,1);g.data[0]=c;d=SE(b,g);e=d;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){h=$$je;}else{throw $$e;}}BY(h);d=e;}return d;}
function ADm(){A_J=CY();A_K=CY();Dd(K(HV),B(644));Dd(K(Er),B(645));Dd(K(Hh),B(646));Dd(K(Ea),B(647));Dd(K(Dp),B(648));Dd(K(In),B(649));Dd(K(HR),B(650));Dd(K(IN),B(651));Dd(K(Jt),B(652));Dd(K(HD),B(653));Dd(K(He),B(569));Dd(K(I6),B(654));Dd(K(Kw),B(655));Dd(K(Ia),B(656));Dd(K(Fp),B(657));}
function Im(){var a=this;E.call(a);a.e5=0;a.eO=0;a.e9=0;a.oz=0;a.ik=Long_ZERO;a.ns=Long_ZERO;}
var A9P=Long_ZERO;function AZg(a,b){var c;if(!(b instanceof Im))return 0;c=b;return a.e5==c.e5&&a.eO==c.eO&&a.e9==c.e9&&a.oz==c.oz?1:0;}
function AXo(a){return (((((a.e5*128|0)*1024|0)+(a.e9*128|0)|0)+a.eO|0)*256|0)+a.oz|0;}
function ASe(a,b){a.ik=b;return a;}
function AIe(a,b){return Long_lt(a.ik,b.ik)?(-1):Long_gt(a.ik,b.ik)?1:Long_lt(a.ns,b.ns)?(-1):Long_le(a.ns,b.ns)?0:1;}
function Qo(a,b){return AIe(a,b);}
function ABr(){A9P=Long_ZERO;}
function Jv(){}
function R9(){var a=this;E.call(a);a.kg=null;a.hV=null;a.gk=null;a.T=null;a.kr=null;a.eR=0;a.fe=0;a.e$=null;}
function BJ(a,b,c){var d;if(b==a.eR&&c==a.fe&&a.e$!==null)return 1;a:{b:{d=(b&31)+((c&31)*32|0)|0;if(a.T.data[d]!==null){if(a.T.data[d]===a.kg)break b;if(ALY(a.T.data[d],b,c))break b;}b=0;break a;}b=1;}return b;}
function AIQ(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b==a.eR&&c==a.fe&&a.e$!==null)return a.e$;d=(b&31)+((c&31)*32|0)|0;if(!BJ(a,b,c)){A4e=1;if(a.T.data[d]!==null){AJk(a.T.data[d]);e=a.T.data[d];$p=1;continue _;}if(a.gk===null)f=null;else{try{e=a.gk;f=a.kr;$p=2;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){e=$$je;}else{throw $$e;}}BY(e);f=null;}if(f===
null){if(a.hV!==null){e=a.hV;$p=3;continue _;}f=a.kg;}a.T.data[d]=f;if(a.T.data[d]!==null)Ir(a.T.data[d]);if(!a.T.data[d].fS){g=b+1|0;h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(BJ(a,g,h)){$p=6;continue _;}A4e=0;}a.eR=b;a.fe=c;a.e$=a.T.data[d];return a.T.data[d];case 1:XG(a,e);if(C()){break _;}Iw(a,a.T.data[d]);if(a.gk===null)f=null;else{try{e=a.gk;f=a.kr;$p=2;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz)
{e=$$je;}else{throw $$e;}}BY(e);f=null;}if(f===null){if(a.hV!==null){e=a.hV;$p=3;continue _;}f=a.kg;}a.T.data[d]=f;if(a.T.data[d]!==null)Ir(a.T.data[d]);if(!a.T.data[d].fS){g=b+1|0;h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A4e=0;a.eR=b;a.fe=c;a.e$=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 2:a:{try{$z=AB_(e,f,b,c);if(C()){break _;}f=$z;if(f!==null)f.ri=a.kr.dG;break a;}catch($$e){$$je=Bf($$e);if
($$je instanceof Bz){e=$$je;}else{throw $$e;}}BY(e);f=null;}if(f===null){if(a.hV!==null){e=a.hV;$p=3;continue _;}f=a.kg;}a.T.data[d]=f;if(a.T.data[d]!==null)Ir(a.T.data[d]);if(!a.T.data[d].fS){g=b+1|0;h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A4e=0;a.eR=b;a.fe=c;a.e$=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 3:$z=AEI(e,b,c);if(C()){break _;}f=$z;a.T.data[d]=f;if(a.T.data[d]!==null)Ir(a.T.data[d]);if
(!a.T.data[d].fS){g=b+1|0;h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A4e=0;a.eR=b;a.fe=c;a.e$=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 4:$z=AIQ(a,g,c);if(C()){break _;}e=$z;if(!e.fS){h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=8;continue _;}}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A4e=0;a.eR=b;a.fe=c;a.e$=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 5:$z=AIQ(a,
b,h);if(C()){break _;}e=$z;if(!e.fS){i=b+1|0;if(BJ(a,i,h)&&BJ(a,b,h)&&BJ(a,i,c)){$p=9;continue _;}}if(!BJ(a,g,h)){A4e=0;a.eR=b;a.fe=c;a.e$=a.T.data[d];return a.T.data[d];}$p=6;case 6:$z=AIQ(a,g,h);if(C()){break _;}e=$z;if(!e.fS&&BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=10;continue _;}A4e=0;a.eR=b;a.fe=c;a.e$=a.T.data[d];return a.T.data[d];case 7:AAO(a,a,b,c);if(C()){break _;}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A4e=0;a.eR=b;a.fe=c;a.e$=a.T.data[d];return a.T.data[d];}$p
=6;continue _;case 8:AAO(a,a,g,c);if(C()){break _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A4e=0;a.eR=b;a.fe=c;a.e$=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 9:AAO(a,a,b,h);if(C()){break _;}if(!BJ(a,g,h)){A4e=0;a.eR=b;a.fe=c;a.e$=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 10:AAO(a,a,g,h);if(C()){break _;}A4e=0;a.eR=b;a.fe=c;a.e$=a.T.data[d];return a.T.data[d];default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function Iw(a,b){var c,$$je;a:{if(a.gk!==null){try{ACC(a.gk,a.kr,b);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Bz){c=$$je;}else{throw $$e;}}c.rQ();}}}
function XG(a,b){var c,d,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.gk!==null){try{b.ri=a.kr.dG;c=a.gk;d=a.kr;$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){c=$$je;}else{throw $$e;}}BY(c);}return;case 1:a:{try{UM(c,d,b);if(C()){break _;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){c=$$je;}else{throw $$e;}}BY(c);}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AAO(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIQ(a,c,d);if(C()){break _;}e=$z;if(!e.fS){e.fS=1;if(a.hV!==null){f=a.hV;$p=2;continue _;}}return;case 2:AC4(f,b,c,d);if(C()){break _;}PF(e);return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AIz(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;e=0;if(c!==null){f=0;while(f<a.T.data.length){if(a.T.data[f]!==null&&IO(a.T.data[f],b))e=e+1|0;f=f+1|0;}}g=0;h=0;while(h<a.T.data.length){if(a.T.data[h]!==null){if(b&&!a.T.data[h].oA)Iw(a,a.T.data[h]);if(IO(a.T.data[h],b)){i=a.T.data[h];$p=1;continue _;}}h=h+1|0;}if(b&&a.gk===null)return 1;return 1;case 1:XG(a,i);if
(C()){break _;}a.T.data[h].dr=0;d=d+1|0;if(d==2&&!b)return 0;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}while(true){h=h+1|0;if(h>=a.T.data.length)break;if(a.T.data[h]===null)continue;if(b&&!a.T.data[h].oA)Iw(a,a.T.data[h]);if(IO(a.T.data[h],b)){i=a.T.data[h];continue _;}}if(b&&a.gk===null)return 1;return 1;case 2:TE(c,f);if(C()){break _;}while(true){h=h+1|0;if(h>=a.T.data.length)break;if(a.T.data[h]===null)continue;if(b&&!a.T.data[h].oA)Iw(a,a.T.data[h]);if(IO(a.T.data[h],b)){i=a.T.data[h];$p
=1;continue _;}}if(b&&a.gk===null)return 1;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function Qb(a){return 0;}
function AZW(a){return 1;}
function Nw(){}
function Tk(){E.call(this);this.qk=null;}
function LW(a,b,c){var d,e,f,g,h;d=b+30233088|0;e=c+30233088|0;f=BE(B(658));g=new Bc;Ju(g,10);h=0;while(h<5){E7(g,Cr(B(658),d%f|0));d=d/f|0;E7(g,Cr(B(658),e%f|0));e=e/f|0;h=h+1|0;}return O(g);}
function AB_(a,b,c,d){var e,f,g,h,i,j,k,l,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=LW(a,c,d);f=new Bc;Ba(f);g=O(H(H(H(f,a.qk),B(17)),e));$p=1;case 1:$z=AGu(g);if(C()){break _;}h=$z;if(h===null)return null;try{f=KS(Mx(QK(h)));i=E6(f,B(659));j=E6(f,B(660));if(c==i&&d==j){$p=4;continue _;}k=LW(a,i,j);B9(CK(),O(H(Bd(H(Bd(H(H(H(H(H(Bd(H(Bd(H(Bd(H(Bd(H(H(H(BQ(),B(661)),
e),B(662)),c),B(663)),d),B(664)),i),B(663)),j),B(665)),k),B(666)),e),B(667)),c),B(663)),d),B(237))));b=O(H(H(H(BQ(),a.qk),B(17)),k));$p=3;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){l=$$je;}else{throw $$e;}}b=CK();f=new Bc;Ba(f);B9(b,O(H(Bd(H(Bd(H(H(H(f,B(668)),e),B(669)),c),B(663)),d),B(237))));B9(CK(),B(670));$p=2;case 2:AGQ(g);if(C()){break _;}BY(l);return null;case 3:a:{try{AHZ(g,b);if(C()){break _;}b=null;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){l=$$je;break a;}else{throw $$e;}}return b;}b
=CK();f=new Bc;Ba(f);B9(b,O(H(Bd(H(Bd(H(H(H(f,B(668)),e),B(669)),c),B(663)),d),B(237))));B9(CK(),B(670));$p=2;continue _;case 4:a:{try{$z=AT6(b,f);if(C()){break _;}b=$z;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){l=$$je;break a;}else{throw $$e;}}return b;}b=CK();f=new Bc;Ba(f);B9(b,O(H(Bd(H(Bd(H(H(H(f,B(668)),e),B(669)),c),B(663)),d),B(237))));B9(CK(),B(670));$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function UM(a,b,c){var d,e,f,g,h,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=F8();ABj(a,c,b,d);e=AY5(131072);try{f=APk(A1s(e));try{O3(d,f);ACT(f);g=GY(e);b=O(H(H(H(BQ(),a.qk),B(17)),LW(a,c.fm,c.fh)));$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof DD){b=$$je;}else{throw $$e;}}a:{try{Jc(f);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof DD){d=$$je;}else{throw $$e;}}SK(b,d);}M(b);}catch
($$e){$$je=Bf($$e);if($$je instanceof BU){h=$$je;}else{throw $$e;}}b=CK();d=new Bc;Ba(d);B9(b,O(H(Bd(H(Bd(H(d,B(671)),c.fm),B(663)),c.fh),B(672))));BY(h);return;case 1:b:{a:{try{try{Yb(b,g);if(C()){break _;}}catch($$e){$$je=Bf($$e);if($$je instanceof DD){b=$$je;break a;}else{throw $$e;}}Jc(f);}catch($$e){$$je=Bf($$e);if($$je instanceof BU){h=$$je;break b;}else{throw $$e;}}return;}try{c:{try{Jc(f);break c;}catch($$e){$$je=Bf($$e);if($$je instanceof DD){d=$$je;}else{throw $$e;}}SK(b,d);}M(b);}catch($$e){$$je=
Bf($$e);if($$je instanceof BU){h=$$je;}else{throw $$e;}}}b=CK();d=new Bc;Ba(d);B9(b,O(H(Bd(H(Bd(H(d,B(671)),c.fm),B(663)),c.fh),B(672))));BY(h);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function ABj(a,b,c,d){FF(d,B(659),b.fm);FF(d,B(660),b.fh);GV(d,B(673),c.dG);Hp(d,B(674),b.gh);Hp(d,B(346),b.g0.fU);Hp(d,B(675),b.gd.fU);Hp(d,B(676),b.hb.fU);Hp(d,B(677),b.dK);PS(d,B(678),b.fS);b.qr=0;ACi(new NZ);}
function AT6(b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:d=A0L(b,E6(c,B(659)),E6(c,B(660)));d.gh=Hi(c,B(674));d.g0=ADJ(Hi(c,B(346)));d.gd=ADJ(Hi(c,B(675)));d.hb=ADJ(Hi(c,B(676)));d.dK=Hi(c,B(677));d.fS=QO(c,B(678));if(!H_(d.g0))d.g0=HO(d.gh.data.length);if(d.dK!==null&&H_(d.gd)){if(!H_(d.hb))d.hb=HO(d.gh.data.length);return d;}d.dK=$rt_createByteArray(256);d.gd=HO(d.gh.data.length);$p=1;case 1:AA8(d);if(C()){break _;}if(!H_(d.hb))d.hb=HO(d.gh.data.length);return d;default:
Es();}}CM().s(b,c,d,$p);}
function AU9(a){return;}
function AVi(a){return;}
function ACC(a,b,c){return;}
function Pu(){var a=this;E.call(a);a.a=null;a.wm=null;a.wn=null;a.wl=null;a.rZ=null;a.wp=null;a.wq=null;a.wo=null;a.hW=null;a.o=null;a.hc=null;a.tG=null;a.tE=null;a.tF=null;a.tH=null;a.tI=null;a.Co=null;}
function Vm(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;a.hc=Vc(a,a.hc,b*4|0,0,c*4|0,5,17,5);e=0;while(e<4){f=0;while(f<4){g=0;while(g<16){h=a.hc.data;c=((e+0|0)*5|0)+f|0;i=((c+0|0)*17|0)+g|0;j=h[i+0|0];h=a.hc.data;b=((c+1|0)*17|0)+g|0;k=h[b+0|0];h=a.hc.data;l=((e+1|0)*5|0)+f|0;m=((l+0|0)*17|0)+g|0;n=h[m+0|0];h=a.hc.data;c=((l+1|0)*17|0)+g|0;o=h[c+0|0];p=(a.hc.data[i+1|0]-j)*0.125;q=(a.hc.data[b+1|0]-k)*0.125;r=(a.hc.data[m+1|0]-n)*0.125;s=(a.hc.data[c+1|0]-o)*0.125;t=0;while(t<8){u=(n-j)
*0.25;v=(o-k)*0.25;w=0;x=j;y=k;while(w<4){b=(w+(e*4|0)|0)<<11|(0+(f*4|0)|0)<<7;c=(g*8|0)+t|0;m=b|c;z=(y-x)*0.25;ba=0;c=S(c,64);bb=x;while(ba<4){i=0;if(c<0){J();i=A5V.b;}if(bb>0.0){J();i=A4d.b;}d.data[m]=i<<24>>24;m=m+128|0;bb=bb+z;ba=ba+1|0;}x=x+u;y=y+v;w=w+1|0;}j=j+p;k=k+q;n=n+r;o=o+s;t=t+1|0;}g=g+1|0;}f=f+1|0;}e=e+1|0;}}
function X8(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=0;f=b*16|0;c=c*16|0;while(e<16){g=0;while(g<16){h=f+e|0;i=c+g|0;j=a.rZ;k=h*0.03125;l=i*0.03125;m=Ri(j,k,l,0.0)+Cb(a.a)*0.2<=0.0?0:1;n=Ri(a.rZ,l,109.0134,k)+Cb(a.a)*0.2<=3.0?0:1;o=Eg(a.wp,k*2.0,l*2.0)/3.0+3.0+Cb(a.a)*0.25|0;p=(-1);J();q=A3_.b;r=A4a.b;s=(((e*16|0)+g|0)*128|0)+128|0;t=127;while(t>=0){s=s+(-1)|0;if(t<=((0+D(a.a,6)|0)-1|0))d.data[s]=A3$.b<<24>>24;else{u=d.data;if(!u[s])p=(-1);else if(u[s]==A4d.b){if(p==(-1)){if(o<=0){q=0;r=A4d.b<<24>>24;}
else if(t>=60&&t<=65){q=A3_.b;r=A4a.b;if(n)q=0;if(n)r=A4v.b;if(m)q=A4u.b;if(m)r=A4u.b;}if(t<64&&!q)q=A5V.b;if(t<63){u[s]=r<<24>>24;p=o;}else{u[s]=q<<24>>24;p=o;}}else if(p>0){p=p+(-1)|0;u[s]=r<<24>>24;}}}t=t+(-1)|0;}g=g+1|0;}e=e+1|0;}}
function AEI(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=$rt_createByteArray(32768);e=AYx(a.o,d,b,c);Vm(a,b,c,d);X8(a,b,c,d);AMa(a,b,c,d);$p=1;case 1:AA8(e);if(C()){break _;}return e;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AKp(a,b,c,d,e,f,g){HM(a,b,c,d,e,f,g,1.0+L(a.a)*6.0,0.0,0.0,(-1),(-1),0.5);}
function HM(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD;n=b*16|0;o=n+8|0;p=c*16|0;q=p+8|0;r=0.0;s=0.0;t=A1n(FG(a.a));if(l<=0)l=112-D(t,28)|0;u=0;if(k==(-1)){k=l/2|0;u=1;}v=D(t,l/2|0)+(l/4|0)|0;w=D(t,6)?0:1;x=S(h,1.0);y=h+2.0+16.0;y=y*y;z=o-16.0;ba=q-16.0;bb=o+16.0;bc=q+16.0;a:{while(true){if(k>=l)break a;bd=1.5+Bm(k*3.1415927410125732/l)*h*1.0;be=bd*m;bf=Bx(j);bg=Bm(j);e=e+Bx(i)*bf;f=f+bg;g=g+Bm(i)*bf;j=(!w
?j*0.699999988079071:j*0.9200000166893005)+s*0.10000000149011612;i=i+r*0.10000000149011612;bh=s*0.8999999761581421;bf=r*0.75;s=bh+(L(t)-L(t))*L(t)*2.0;r=bf+(L(t)-L(t))*L(t)*4.0;if(!u&&k==v&&x>0){h=L(t)*0.5+0.5;bh=i-1.5707963705062866;j=j/3.0;HM(a,b,c,d,e,f,g,h,bh,j,k,l,1.0);HM(a,b,c,d,e,f,g,L(t)*0.5+0.5,i+1.5707963705062866,j,k,l,1.0);return;}if(!(!u&&!D(t,4))){bi=e-o;bj=g-q;bk=l-k|0;if(bi*bi+bj*bj-bk*bk>y)break;bl=bd*2.0;if(e>=z-bl&&g>=ba-bl&&e<=bb+bl&&g<=bc+bl){bm=(I(e-bd)-n|0)-1|0;bn=(I(e+bd)-n|0)+1|0;bo
=I(f-be)-1|0;bp=I(f+be)+1|0;bq=(I(g-bd)-p|0)-1|0;br=(I(g+bd)-p|0)+1|0;if(bm<0)bm=0;if(bn>16)bn=16;if(bo<1)bo=1;if(bp>120)bp=120;if(bq<0)bq=0;if(br>16)br=16;bs=0;bt=bm;while(!bs&&bt<bn){bu=bq;while(!bs&&bu<br){bv=bp+1|0;while(!bs){bw=S(bv,bo-1|0);if(bw<0)break;bx=(((bt*16|0)+bu|0)*128|0)+bv|0;if(bv>=0&&bv<128){by=d.data;bz=by[bx];J();if(!(bz!=A5c.b&&by[bx]!=A5V.b))bs=1;if(bw&&bt!=bm&&bt!=(bn-1|0)&&bu!=bq&&bu!=(br-1|0))bv=bo;}bv=bv+(-1)|0;}bu=bu+1|0;}bt=bt+1|0;}if(!bs){while(bm<bn){bA=((bm+n|0)+0.5-e)/bd;bi=bA
*bA;bx=bq;while(bx<br){bB=((bx+p|0)+0.5-g)/bd;bC=(((bm*16|0)+bx|0)*128|0)+bp|0;bw=0;bD=bp-1|0;bB=bB*bB;while(bD>=bo){bl=(bD+0.5-f)/be;if(bl>(-0.7)&&bi+bl*bl+bB<1.0){by=d.data;bz=by[bC];J();if(bz==A3_.b)bw=1;if(!(bz!=A4d.b&&bz!=A4a.b&&bz!=A3_.b)){if(bD<10)by[bC]=A5d.b<<24>>24;else{by[bC]=0;if(bw){bz=bC-1|0;if(by[bz]==A4a.b)by[bz]=A3_.b<<24>>24;}}}}bC=bC+(-1)|0;bD=bD+(-1)|0;}bx=bx+1|0;}bm=bm+1|0;}if(u)break a;}}}k=k+1|0;}return;}}
function AMa(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;FG(a.a);FG(a.a);e=b-8|0;f=b+8|0;g=c-8|0;h=c+8|0;while(e<=f){i=g;while(i<=h){j=D(a.a,D(a.a,D(a.a,40)+1|0)+1|0);if(D(a.a,15))j=0;k=0;while(k<j){l=(e*16|0)+D(a.a,16)|0;m=D(a.a,D(a.a,120)+8|0);n=(i*16|0)+D(a.a,16)|0;o=1;if(!D(a.a,4)){AKp(a,b,c,d,l,m,n);o=o+D(a.a,4)|0;}p=0;while(p<o){q=L(a.a)*3.1415927410125732*2.0;r=(L(a.a)-0.5)*2.0/8.0;HM(a,b,c,d,l,m,n,L(a.a)*2.0+L(a.a),q,r,0,0,1.0);p=p+1|0;}k=k+1|0;}i=i+1|0;}e=e+1|0;}}
function Vc(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(b===null)b=$rt_createDoubleArray(Bh(Bh(f,g),h));a.tH=GP(a.wq,a.tH,c,d,e,f,1,h,1.0,0.0,1.0);a.tI=GP(a.wo,a.tI,c,d,e,f,1,h,100.0,0.0,100.0);a.tG=GP(a.wl,a.tG,c,d,e,f,g,h,8.555150000000001,4.277575000000001,8.555150000000001);a.tE=GP(a.wm,a.tE,c,d,e,f,g,h,684.412,684.412,684.412);a.tF=GP(a.wn,a.tF,c,d,e,f,g,h,684.412,684.412,684.412);i=0;j=0;k=0;l=g;d=g-4|0;m=l/2.0;while(k<f){n=0;while(n<h){o=(a.tH.data[j]+256.0)/512.0;if(o>1.0)o=1.0;p=a.tI.data[j]
/8000.0;if(p<0.0)p= -p;q=p*3.0-3.0;if(q>=0.0){if(q>1.0)q=1.0;q=q/6.0;}else{o=q/2.0;if(o<(-1.0))o=(-1.0);q=o/1.4/2.0;o=0.0;}r=o+0.5;s=m+q*l/16.0*4.0;j=j+1|0;t=0;while(t<g){p=t;u=(p-s)*12.0/r;if(u<0.0)u=u*4.0;v=a.tE.data[i]/512.0;q=a.tF.data[i]/512.0;w=(a.tG.data[i]/10.0+1.0)/2.0;if(w>=0.0)v=w>1.0?q:v+(q-v)*w;o=v-u;if(t>d){x=(t-d|0)/3.0;o=o*(1.0-x)+(-10.0)*x;}if(p<0.0){x=(0.0-p)/4.0;if(x<0.0)x=0.0;if(x>1.0)x=1.0;o=o*(1.0-x)+(-10.0)*x;}b.data[i]=o;i=i+1|0;t=t+1|0;}n=n+1|0;}k=k+1|0;}return b;}
function AC4(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=c*16|0;f=d*16|0;Lv(a.a,a.o.kn);g=Long_add(Long_mul(Long_div(FG(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));h=Long_add(Long_mul(Long_div(FG(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));Lv(a.a,Long_xor(Long_add(Long_mul(Long_fromInt(c),
g),Long_mul(Long_fromInt(d),h)),a.o.kn));i=0;if(i<4){j=(e+D(a.a,16)|0)+8|0;k=D(a.a,128);l=(f+D(a.a,16)|0)+8|0;b=AQL();m=a.o;n=a.a;$p=1;continue _;}o=0;if(o<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4a.b,32);m=a.o;n=a.a;$p=2;continue _;}j=0;if(j<10){o=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4v.b,32);m=a.o;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4y.b,16);m=a.o;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+D(a.a,
16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4z.b,8);m=a.o;n=a.a;$p=5;continue _;}if(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4A.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A6e.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hW,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F0();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c
=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4q.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4r.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50)
{l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5c.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=a.o;n=a.a;$p=15;continue _;case 1:TK(b,m,n,j,k,l);if(C()){break _;}i=i+1|0;if(i<4){j=(e+D(a.a,16)|0)+8|0;k=D(a.a,128);l=(f+D(a.a,16)|0)+8|0;b=AQL();m=a.o;n=a.a;continue _;}o=0;if(o<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4a.b,32);m=a.o;n
=a.a;$p=2;continue _;}j=0;if(j<10){o=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4v.b,32);m=a.o;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4y.b,16);m=a.o;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4z.b,8);m=a.o;n=a.a;$p=5;continue _;}if(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4A.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,
16);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A6e.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hW,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F0();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4q.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4r.b);m=a.o;n=a.a;$p=11;continue _;}if
(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5c.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=
a.o;n=a.a;$p=15;continue _;case 2:Xs(b,m,n,j,k,l);if(C()){break _;}o=o+1|0;if(o<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4a.b,32);m=a.o;n=a.a;continue _;}j=0;if(j<10){o=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4v.b,32);m=a.o;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4y.b,16);m=a.o;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4z.b,8);m=a.o;n=a.a;$p=5;continue _;}if
(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4A.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A6e.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hW,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F0();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,
A4q.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4r.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,
A5c.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=a.o;n=a.a;$p=15;continue _;case 3:Xs(b,m,n,o,k,l);if(C()){break _;}j=j+1|0;if(j<10){o=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4v.b,32);m=a.o;n=a.a;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4y.b,16);m=a.o;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)
|0;b=new B$;J();Cc(b,A4z.b,8);m=a.o;n=a.a;$p=5;continue _;}if(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4A.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A6e.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hW,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F0();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)
|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4q.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4r.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p
=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5c.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=a.o;n=a.a;$p=15;continue _;case 4:Xs(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4y.b,16);m=a.o;n=a.a;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4z.b,8);m=a.o;n=a.a;$p=5;continue _;}if
(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4A.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A6e.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hW,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F0();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,
A4q.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4r.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,
A5c.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=a.o;n=a.a;$p=15;continue _;case 5:Xs(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4z.b,8);m=a.o;n=a.a;continue _;}if(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4A.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|
0;b=new B$;J();Cc(b,A6e.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hW,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F0();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4q.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4r.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,
4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5c.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=a.o;n=a.a;$p
=15;continue _;case 6:Xs(b,m,n,c,j,k);if(C()){break _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A6e.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hW,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F0();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4q.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+
D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4r.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5c.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=a.o;n=a.a;$p=15;continue _;case 7:Xs(b,m,n,c,j,k);if(C()){break _;}c=(Eg(a.hW,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F0();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4q.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=
(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4r.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5c.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=a.o;n=a.a;$p=15;continue _;case 8:$z=AGv(q,l,p);if(C()){break _;}d=$z;$p=9;case 9:Z_(m,b,n,l,d,p);if(C()){break _;}k=k+1|0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4q.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,
16)|0)+8|0;b=new BL;J();BM(b,A4r.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5c.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,
112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=a.o;n=a.a;$p=15;continue _;case 10:Yn(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4q.b);m=a.o;n=a.a;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4r.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,
8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5c.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=a.o;n=a.a;$p=15;continue _;case 11:Yn(b,m,n,c,l,p);if(C()){break _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)
+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5c.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=a.o;n=a.a;$p=15;continue _;case 12:Yn(b,m,n,c,l,p);if(C()){break _;}if
(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5c.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=a.o;n=a.a;$p=15;continue _;case 13:Yn(b,m,n,c,l,p);if(C()){break _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r
=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5c.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=a.o;n=a.a;$p=15;continue _;case 14:AGO(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5c.b);m=a.o;n=a.a;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,
A5d.b);m=a.o;n=a.a;$p=15;case 15:AGO(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ch(b,A5d.b);m=a.o;n=a.a;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AR9(a){return 0;}
function RX(){var a=this;E.call(a);a.b8=null;a.kO=0;a.fi=0;a.fj=0;a.eW=0;a.eD=0;a.ed=0;}
function AIY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.kO;while(c<=a.eW){d=a.fj;while(d<=a.ed){a:{if(D9(b,c,0,d)){e=a.fi;while(true){if(e>a.eD)break a;if(e>=0&&e<128){f=a.b8;$p=1;continue _;}e=e+1|0;}}}d=d+1|0;}c=c+1|0;}return;case 1:$z=AF$(b,f,c,e,d);if(C()){break _;}g=$z;$p=2;case 2:$z=X9(b,
c,e,d);if(C()){break _;}h=$z;J();i=A5S.data[h];if(!i)i=1;j=0;if(a.b8===A9N){$p=3;continue _;}if(a.b8===A9O)j=A5U.data[h];if(i>=15&&!j){j=0;if(g!=j){f=a.b8;$p=10;continue _;}b:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break b;d=a.fj;}if(!D9(b,c,0,d))continue;else break;}e=a.fi;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;}f=a.b8;h=c-1|0;$p=4;continue _;case 3:$z=Vn(b,c,e,d);if(C()){break _;}h=$z;if(h)j=15;if(i>=15&&!j){j=0;if(g!=j){f=a.b8;$p
=10;continue _;}c:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break c;d=a.fj;}if(!D9(b,c,0,d))continue;else break;}e=a.fi;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;}f=a.b8;h=c-1|0;$p=4;case 4:$z=AF$(b,f,h,e,d);if(C()){break _;}k=$z;f=a.b8;h=c+1|0;$p=5;case 5:$z=AF$(b,f,h,e,d);if(C()){break _;}l=$z;f=a.b8;h=e-1|0;$p=6;case 6:$z=AF$(b,f,c,h,d);if(C()){break _;}m=$z;f=a.b8;h=e+1|0;$p=7;case 7:$z=AF$(b,f,c,h,d);if(C()){break _;}n=$z;f=a.b8;h
=d-1|0;$p=8;case 8:$z=AF$(b,f,c,e,h);if(C()){break _;}o=$z;f=a.b8;h=d+1|0;$p=9;case 9:$z=AF$(b,f,c,e,h);if(C()){break _;}p=$z;if(l<=k)l=k;if(m<=l)m=l;if(n<=m)n=m;if(o<=n)o=n;if(p<=o)p=o;h=p-i|0;if(h<0)h=0;if(j<=h)j=h;if(g!=j){f=a.b8;$p=10;continue _;}d:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break d;d=a.fj;}if(!D9(b,c,0,d))continue;else break;}e=a.fi;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;case 10:AHc(b,f,c,e,d,j);if(C()){break _;}k
=j-1|0;if(k<0)k=0;f=a.b8;h=c-1|0;$p=11;case 11:AKD(b,f,h,e,d,k);if(C()){break _;}f=a.b8;h=e-1|0;$p=12;case 12:AKD(b,f,c,h,d,k);if(C()){break _;}f=a.b8;h=d-1|0;$p=13;case 13:AKD(b,f,c,e,h,k);if(C()){break _;}h=c+1|0;if(h>=a.eW){f=a.b8;$p=14;continue _;}h=e+1|0;if(h>=a.eD){f=a.b8;$p=15;continue _;}h=d+1|0;if(h>=a.ed){f=a.b8;$p=16;continue _;}e:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break e;d=a.fj;}if(!D9(b,c,0,d))continue;else break;}e=a.fi;}if(e<0)continue;if(e>=
128)continue;else{f=a.b8;$p=1;continue _;}}return;case 14:AKD(b,f,h,e,d,k);if(C()){break _;}h=e+1|0;if(h>=a.eD){f=a.b8;$p=15;continue _;}h=d+1|0;if(h>=a.ed){f=a.b8;$p=16;continue _;}a:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break a;d=a.fj;}if(!D9(b,c,0,d))continue;else break;}e=a.fi;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;case 15:AKD(b,f,c,h,d,k);if(C()){break _;}h=d+1|0;if(h>=a.ed){f=a.b8;$p=16;continue _;}f:while(true){e=e+1|0;while
(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break f;d=a.fj;}if(!D9(b,c,0,d))continue;else break;}e=a.fi;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;case 16:AKD(b,f,c,e,h,k);if(C()){break _;}g:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break g;d=a.fj;}if(!D9(b,c,0,d))continue;else break;}e=a.fi;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AGq(a,b,c,d,e,f,g){if(b>=a.kO&&c>=a.fi&&d>=a.fj&&e<=a.eW&&f<=a.eD&&g<=a.ed)return 1;if(b>=(a.kO-1|0)&&c>=(a.fi-1|0)&&d>=(a.fj-1|0)&&e<=(a.eW+1|0)&&f<=(a.eD+1|0)&&g<=(a.ed+1|0)){if(b<a.kO)a.kO=b;if(c<a.fi)a.fi=c;if(d<a.fj)a.fj=d;if(e>a.eW)a.eW=e;if(f>a.eD)a.eD=f;if(g>a.ed)a.ed=g;return 1;}return 0;}
function Pa(){}
function ABn(){var a=this;Fl.call(a);a.ht=0;a.dE=null;}
function APk(a){var b=new ABn();AWU(b,a);return b;}
function AWU(a,b){Js(a,b);a.dE=$rt_createByteArray(8);}
function ACT(a){a.eN.km();}
function Od(a,b,c,d){var e;if(b!==null){a.eN.fO(b,c,d);a.ht=a.ht+d|0;return;}e=new El;Q(e);M(e);}
function I9(a,b){a.eN.mr(b);a.ht=a.ht+1|0;}
function AJX(a,b){QX(a,$rt_doubleToLongBits(b));}
function AJS(a,b){Ib(a,$rt_floatToIntBits(b));}
function Ib(a,b){a.dE.data[0]=b>>24<<24>>24;a.dE.data[1]=b>>16<<24>>24;a.dE.data[2]=b>>8<<24>>24;a.dE.data[3]=b<<24>>24;a.eN.fO(a.dE,0,4);a.ht=a.ht+4|0;}
function QX(a,b){a.dE.data[0]=Long_shr(b,56).lo<<24>>24;a.dE.data[1]=Long_shr(b,48).lo<<24>>24;a.dE.data[2]=Long_shr(b,40).lo<<24>>24;a.dE.data[3]=b.hi<<24>>24;a.dE.data[4]=Long_shr(b,24).lo<<24>>24;a.dE.data[5]=Long_shr(b,16).lo<<24>>24;a.dE.data[6]=Long_shr(b,8).lo<<24>>24;a.dE.data[7]=b.lo<<24>>24;a.eN.fO(a.dE,0,8);a.ht=a.ht+8|0;}
function VV(a,b){a.dE.data[0]=b>>8<<24>>24;a.dE.data[1]=b<<24>>24;a.eN.fO(a.dE,0,2);a.ht=a.ht+2|0;}
function AIM(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function To(a,b){var c,d,e;c=ABv(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new BU;Bl(b,B(679));M(b);}d=c.lo;e=$rt_createByteArray(d+2|0);Od(a,e,0,AJE(a,b,e,AIM(a,d,e,0)));}
function ABv(a,b){var c,d,e,f;c=0;d=BE(b);e=0;while(e<d){f=Cr(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function AJE(a,b,c,d){var e,f,g,h,i,j,k;e=BE(b);f=0;while(f<e){g=Cr(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function ABh(){E.call(this);}
function A_M(){var a=new ABh();AR$(a);return a;}
function AR$(a){return;}
function LG(){E.call(this);}
var A_N=null;var A_O=null;function A_P(){var a=new LG();W3(a);return a;}
function W3(a){return;}
function Xy(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.wx=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.sV=Long_ZERO;c.r_=0;return;}g=0;if(f)e=Long_or(e,new Long(0, 1048576));else{e=Long_shl(e,1);while(Long_eq(Long_and(e,new Long(0, 1048576)),Long_ZERO)){e=Long_shl(e,1);f=f+(-1)|0;g=g+1|0;}}h=AI2(A_O,f);if(h<0)h= -h-2|0;i=12+(f-A_O.data[h]|0)|0;j=NI(e,A_N.data[h],i);if(Long_ge(j,
new Long(2808348672, 232830643))){h=h+1|0;i=12+(f-A_O.data[h]|0)|0;j=NI(e,A_N.data[h],i);}k=Long_shru(A_N.data[h],(63-i|0)-g|0);l=Long_shr(Long_add(k,Long_fromInt(1)),1);m=Long_shr(k,1);if(Long_eq(e,new Long(0, 1048576)))m=Long_shr(m,2);n=Long_fromInt(10);while(Long_le(n,m)){n=Long_mul(n,Long_fromInt(10));}if(Long_ge(Long_rem(j,n),Long_div(m,Long_fromInt(2))))n=Long_div(n,Long_fromInt(10));o=Long_fromInt(1);while(Long_le(o,l)){o=Long_mul(o,Long_fromInt(10));}if(Long_gt(Long_sub(o,Long_rem(j,o)),Long_div(l,Long_fromInt(2))))o
=Long_div(o,Long_fromInt(10));f=Long_compare(n,o);e=f>0?Long_mul(Long_div(j,n),n):f<0?Long_add(Long_mul(Long_div(j,o),o),o):Long_mul(Long_div(Long_add(j,Long_div(o,Long_fromInt(2))),o),o);if(Long_ge(e,new Long(2808348672, 232830643))){h=h+1|0;e=Long_div(e,Long_fromInt(10));}else if(Long_lt(e,new Long(1569325056, 23283064))){h=h+(-1)|0;e=Long_mul(e,Long_fromInt(10));}c.sV=e;c.r_=h-330|0;}
function NI(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,e),Long_mul(k,
f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_shl(Long_mul(l,h),32+d|0),Long_shl(Long_add(Long_mul(l,g),Long_mul(k,h)),16+d|0)),Long_shl(Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h)),d));return Long_add(d>16?Long_add(o,Long_shl(n,d-16|0)):Long_add(o,Long_shru(n,16-d|0)),Long_shru(m,32-d|0));}
function W1(){var b,c,d,e,f,g,h,i,j,k;A_N=$rt_createLongArray(660);A_O=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=A_N.data;g=d+330|0;f[g]=Ku(e,Long_fromInt(80));A_O.data[g]=c;e=Ku(e,Long_fromInt(10));h=ADT(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Long_gt(e,new Long(3435973836, 214748364)))
{e=Long_shr(e,1);j=j+1|0;d=d+(-1)|0;}k=Long_mul(e,Long_fromInt(10));b=j<=0?k:Long_add(k,Long_shr(Long_mul(Long_and(b,Long_fromInt((1<<j)-1|0)),Long_fromInt(10)),j));f=A_N.data;g=(330-i|0)-1|0;f[g]=Ku(b,Long_fromInt(80));A_O.data[g]=d;i=i+1|0;}}
function GE(){E.call(this);}
function AHu(){var a=this;GE.call(a);a.mo=null;a.p3=0;}
function F9(a,b){var c=new AHu();ANU(c,a,b);return c;}
function ANU(a,b,c){var d;a.p3=c;a.mo=N(MY,c);d=0;while(d<c){a.mo.data[d]=A1r(b);d=d+1|0;}}
function Eg(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.p3){d=d+ACa(a.mo.data[f],b*e,c*e)/e;e=e/2.0;f=f+1|0;}return d;}
function Ri(a,b,c,d){var e,f,g;e=0.0;f=1.0;g=0;while(g<a.p3){e=e+Jx(a.mo.data[g],b*f,c*f,d*f)/f;f=f/2.0;g=g+1|0;}return e;}
function GP(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o;if(b===null)b=$rt_createDoubleArray(Bh(Bh(f,g),h));else{l=0;while(true){m=b.data;if(l>=m.length)break;m[l]=0.0;l=l+1|0;}}n=1.0;o=0;while(o<a.p3){AKX(a.mo.data[o],b,c,d,e,f,g,h,i*n,j*n,k*n,n);n=n/2.0;o=o+1|0;}return b;}
function Yp(){var a=this;E.call(a);a.kZ=null;a.lL=0;a.BZ=Long_ZERO;}
function ANo(a,b,c){var d=new Yp();ASY(d,a,b,c);return d;}
function ASY(a,b,c,d){a.kZ=b;a.lL=c;a.BZ=d;}
function MY(){var a=this;GE.call(a);a.bO=null;a.s7=0.0;a.vG=0.0;a.ue=0.0;}
function A_Q(){var a=new MY();AZ2(a);return a;}
function A1r(a){var b=new MY();Vd(b,a);return b;}
function AZ2(a){Vd(a,new Df);}
function Vd(a,b){var c,d,e,f,g;a.bO=$rt_createIntArray(512);a.s7=Cb(b)*256.0;a.vG=Cb(b)*256.0;a.ue=Cb(b)*256.0;c=0;while(c<256){d=a.bO.data;e=c+1|0;d[c]=c;c=e;}c=0;while(c<256){f=D(b,256-c|0)+c|0;g=a.bO.data[c];a.bO.data[c]=a.bO.data[f];a.bO.data[f]=g;a.bO.data[c+256|0]=a.bO.data[c];c=c+1|0;}}
function Jx(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;e=b+a.s7;f=c+a.vG;g=d+a.ue;h=e|0;i=f|0;j=g|0;if(e<h)h=h+(-1)|0;if(f<i)i=i+(-1)|0;if(g<j)j=j+(-1)|0;k=h&255;l=i&255;m=j&255;c=e-h;d=f-i;n=g-j;o=c*c*c*(c*(c*6.0-15.0)+10.0);p=d*d*d*(d*(d*6.0-15.0)+10.0);q=n*n*n*(n*(n*6.0-15.0)+10.0);r=a.bO.data[k]+l|0;s=a.bO.data[r]+m|0;t=a.bO.data[r+1|0]+m|0;u=a.bO.data[k+1|0]+l|0;v=a.bO.data[u]+m|0;w=a.bO.data[u+1|0]+m|0;e=C8(a,a.bO.data[s],c,d,n);k=a.bO.data[v];x=c-1.0;b=Dn(a,o,e,C8(a,k,x,d,n));k=a.bO.data[t];e
=d-1.0;b=Dn(a,p,b,Dn(a,o,C8(a,k,c,e,n),C8(a,a.bO.data[w],x,e,n)));k=a.bO.data[s+1|0];f=n-1.0;return Dn(a,q,b,Dn(a,p,Dn(a,o,C8(a,k,c,d,f),C8(a,a.bO.data[v+1|0],x,d,f)),Dn(a,o,C8(a,a.bO.data[t+1|0],c,e,f),C8(a,a.bO.data[w+1|0],x,e,f))));}
function Dn(a,b,c,d){return c+b*(d-c);}
function C8(a,b,c,d,e){var f,g;f=b&15;g=f>=8?d:c;if(f>=4)d=f!=12&&f!=14?e:c;if(f&1)g= -g;if(f&2)d= -d;return g+d;}
function ACa(a,b,c){return Jx(a,b,c,0.0);}
function AVb(a,b,c,d){return Jx(a,b,c,d);}
function AKX(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;m=0;n=1.0/l;o=(-1);p=0.0;q=0.0;r=0.0;s=0.0;t=0;while(t<f){u=(c+t|0)*i+a.s7;v=u|0;if(u<v)v=v+(-1)|0;w=v&255;u=u-v;x=u*u*u*(u*(u*6.0-15.0)+10.0);y=0;v=w+1|0;z=u-1.0;while(y<h){ba=(e+y|0)*k+a.ue;bb=ba|0;if(ba<bb)bb=bb+(-1)|0;bc=bb&255;bd=ba-bb;be=bd*bd*bd*(bd*(bd*6.0-15.0)+10.0);bf=0;ba=bd-1.0;while(bf<g){bg=(d+bf|0)*j+a.vG;bh=bg|0;if(bg<bh)bh=bh+(-1)|0;bi=bh&255;l=bg-bh;bj=l*l*l*(l*(l
*6.0-15.0)+10.0);if(bf&&bi==o)bi=o;else{bk=a.bO.data[w]+bi|0;bl=a.bO.data[bk]+bc|0;bm=a.bO.data[bk+1|0]+bc|0;bn=a.bO.data[v]+bi|0;bo=a.bO.data[bn]+bc|0;bp=a.bO.data[bn+1|0]+bc|0;p=Dn(a,x,C8(a,a.bO.data[bl],u,l,bd),C8(a,a.bO.data[bo],z,l,bd));bn=a.bO.data[bm];bq=l-1.0;q=Dn(a,x,C8(a,bn,u,bq,bd),C8(a,a.bO.data[bp],z,bq,bd));r=Dn(a,x,C8(a,a.bO.data[bl+1|0],u,l,ba),C8(a,a.bO.data[bo+1|0],z,l,ba));s=Dn(a,x,C8(a,a.bO.data[bm+1|0],u,bq,ba),C8(a,a.bO.data[bp+1|0],z,bq,ba));}br=b.data;bs=Dn(a,be,Dn(a,bj,p,q),Dn(a,bj,
r,s));bn=m+1|0;br[m]=br[m]+bs*n;bf=bf+1|0;m=bn;o=bi;}y=y+1|0;}t=t+1|0;}}
function QA(){E.call(this);this.fU=null;}
function HO(a){var b=new QA();AEx(b,a);return b;}
function ADJ(a){var b=new QA();ASp(b,a);return b;}
function AEx(a,b){a.fU=$rt_createByteArray(b>>1);}
function ASp(a,b){a.fU=b;}
function G5(a,b,c,d){var e,f;e=b<<11|d<<7|c;f=e>>1;return !(e&1)?a.fU.data[f]&15:a.fU.data[f]>>4&15;}
function DR(a,b,c,d,e){var f,g;f=b<<11|d<<7|c;g=f>>1;if(!(f&1))a.fU.data[g]=(a.fU.data[g]&240|e&15)<<24>>24;else a.fU.data[g]=(a.fU.data[g]&15|(e&15)<<4)<<24>>24;}
function H_(a){return a.fU===null?0:1;}
function Ej(){Ef.call(this);}
var A_R=null;var A4Z=null;var A_S=null;var A_T=null;function AHO(){var b,c,d;b=new Ej;E3(b,B(680),0);A_R=b;b=new Ej;E3(b,B(681),1);A4Z=b;b=new Ej;E3(b,B(682),2);A_S=b;c=N(Ej,3);d=c.data;d[0]=A_R;d[1]=A4Z;d[2]=A_S;A_T=c;}
function RD(){Eu.call(this);}
var A_U=null;function Ku(b,c){return Long_udiv(b, c);}
function ADT(b,c){return Long_urem(b, c);}
function AGN(){A_U=K($rt_longcls());}
function Qj(){E.call(this);this.zz=null;}
function AMC(a){Cx(a.zz,Jl(1));}
function AU2(a){AMC(a);}
function Qg(){E.call(this);this.z0=null;}
function AMI(a){Cx(a.z0,Jl(0));}
function AQI(a){AMI(a);}
function Or(){E.call(this);this.yu=null;}
function TL(a){Cx(a.yu,Jl(1));}
function AX_(a){TL(a);}
function Ov(){E.call(this);this.yL=null;}
function AMu(a){Cx(a.yL,Jl(0));}
function AW2(a){AMu(a);}
function Op(){var a=this;E.call(a);a.zE=null;a.s1=null;}
function X6(a){Cx(a.zE,a.s1.result===null?A_S:!(QS(a.s1.result)?1:0)?A_R:A4Z);}
function AV2(a){X6(a);}
function Oq(){E.call(this);this.AO=null;}
function XJ(a){Cx(a.AO,A_S);}
function AUi(a){XJ(a);}
function Os(){var a=this;E.call(a);a.Be=null;a.AU=null;a.ws=null;a.tu=null;a.yk=0;a.zT=0;a.uY=null;}
function AHo(a){var b,c;b=a.Be.result;if(b!==null&&b.key!==null&&b.value!==null){c=$rt_str(ARO(b.key));if(c!==null&&Lk(c,a.tu)&&!(!a.yk&&R4(c,47,BE(a.tu)+1|0)!=(-1))){if(!(QS(b.value)?1:0))EK(a.uY,ANo(c,0,Long_add(new Long(596067632, 383),Long_fromInt(ASr(b.value)))));else if(a.zT)EK(a.uY,ANo(c,1,Long_fromInt(-1)));}b.continue();return;}Cx(a.AU,CG(a.ws.data[0]));}
function AW7(a){AHo(a);}
function Ot(){var a=this;E.call(a);a.Ap=null;a.uu=null;}
function AFZ(a){Cx(a.Ap,CG(a.uu.data[0]<=0?(-1):a.uu.data[0]));}
function AS9(a){AFZ(a);}
function DW(){E.call(this);}
function Em(a,b,c,d){return;}
function Ol(){DW.call(this);}
function F0(){var a=new Ol();AWP(a);return a;}
function AWP(a){return;}
function Z_(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=D(c,3)+4|0;h=1;if(e>=1){i=e+g|0;if((i+1|0)<=128){j=(e+1|0)+g|0;k=j-2|0;l=e;a:while(true){if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;while(o<=(d+n|
0)&&h){p=f-n|0;while(p<=(f+n|0)&&h){if(l>=0&&l<128)break a;h=0;p=p+1|0;}o=o+1|0;}l=l+1|0;}$p=7;continue _;}}return 0;case 1:$z=X9(b,d,m,f);if(C()){break _;}k=$z;J();if(!(k!=A3_.b&&k!=A4a.b)&&e<((128-g|0)-1|0)){k=A4a.b;$p=2;continue _;}return 0;case 2:AGh(b,d,m,f,k);if(C()){break _;}k=(e-3|0)+g|0;b:while(true){if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;while(r<=l){j=r-d|0;s=m;while(s<=h){t=s-f|0;if(GX(j)!=q)break b;if(GX(t)!=q)break b;if(D(c,2)
&&o)break b;s=s+1|0;}r=r+1|0;}k=k+1|0;}u=A5R.data;$p=5;continue _;case 3:$z=X9(b,d,o,f);if(C()){break _;}m=$z;if(m&&m!=A4l.b){k=k+1|0;if(k>=g)return 1;o=e+k|0;continue _;}m=A4k.b;$p=4;case 4:AGh(b,d,o,f,m);if(C()){break _;}k=k+1|0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;case 5:$z=X9(b,r,k,s);if(C()){break _;}t=$z;if(!u[t]){t=A4l.b;$p=6;continue _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f
+q|0;}j=r-d|0;s=m;}t=s-f|0;if(GX(j)!=q)break;if(GX(t)!=q)break;if(!D(c,2))continue;if(!o)continue;else break;}u=A5R.data;continue _;case 6:AGh(b,r,k,s,t);if(C()){break _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(GX(j)!=q)break;if(GX(t)!=q)break;if(!D(c,2))continue;if(!o)continue;else break;}u=A5R.data;$p=5;continue _;case 7:$z=X9(b,o,l,p);if(C()){break _;}r=$z;if
(r){J();if(r!=A4l.b)h=0;}while(true){p=p+1|0;while(!(p<=(f+n|0)&&h)){o=o+1|0;while(!(o<=(d+n|0)&&h)){l=l+1|0;if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;}p=f-n|0;}if(l>=0&&l<128)break;h=0;}continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function Mb(){E.call(this);this.E_=0;}
var A_V=null;var A_W=null;function AQv(a){var b=new Mb();AIL(b,a);return b;}
function AIL(a,b){a.E_=b;}
function Jl(b){return !b?A_W:A_V;}
function ACY(){A_V=AQv(1);A_W=AQv(0);}
function PH(){var a=this;CI.call(a);a.xv=null;a.ff=null;a.u_=0;a.fr=0;}
function Zz(a){DB(a.bE);AKq(1);U(a.bE,C9(0,(a.bh/2|0)-100|0,(a.bv/4|0)+120|0,B(585)));}
function AIj(a){AKq(0);}
function AQP(a){a.u_=a.u_+1|0;}
function ACt(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC&&!b.co){b=a.ff;$p=1;continue _;}return;case 1:XS(b);if(C()){break _;}c=a.H;b=null;$p=2;case 2:Zp(c,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function Yw(a,b,c){var d,e;if(c==200)a.fr=(a.fr-1|0)&3;if(!(c!=208&&c!=28))a.fr=(a.fr+1|0)&3;if(c==14&&BE(a.ff.fM.data[a.fr])>0)a.ff.fM.data[a.fr]=Gs(a.ff.fM.data[a.fr],0,BE(a.ff.fM.data[a.fr])-1|0);if(QW(B(683),b)>=0&&BE(a.ff.fM.data[a.fr])<15){d=a.ff.fM.data;c=a.fr;e=new Bc;Ba(e);d[c]=O(E7(H(e,a.ff.fM.data[a.fr]),b));}}
function W7(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WW(a);if(C()){break _;}Dz(a,a.bS,a.xv,a.bh/2|0,40,16777215);BW();Br(a.bh/2|0,a.bv/2|0,50.0);Co((-60.0),(-60.0),(-60.0));Bq(180.0,0.0,1.0,0.0);if(!((a.u_/6|0)%2|0))a.ff.pU=a.fr;e=a.ff;$p=2;case 2:$z=AG2(e);if(C()){break _;}f=$z;Bq((f*360|0)/16.0,0.0,1.0,0.0);e=A9I;g=a.ff;h=(-0.5);i=(-0.75);j
=(-0.5);k=0.0;$p=3;case 3:AAL(e,g,h,i,j,k);if(C()){break _;}a.ff.pU=(-1);By();$p=4;case 4:AAZ(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Hj(){Ef.call(this);this.xs=0;}
var A9N=null;var A9O=null;var A_X=null;function AZ6(a,b,c){var d=new Hj();ACf(d,a,b,c);return d;}
function ACf(a,b,c,d){E3(a,b,c);a.xs=d;}
function AAR(){var b,c;A9N=AZ6(B(684),0,15);A9O=AZ6(B(685),1,0);b=N(Hj,2);c=b.data;c[0]=A9N;c[1]=A9O;A_X=b;}
function KH(){var a=this;E.call(a);a.l1=null;a.mB=null;}
function AR0(a){return a.mB;}
function PZ(a,b){var c;c=a.mB;a.mB=b;return c;}
function AQc(a){return a.l1;}
function Jw(){var a=this;KH.call(a);a.cO=null;a.cX=null;a.kv=0;a.ir=0;}
function KY(a){var b;b=J3(a);if(b==2){if(J3(a.cX)<0)a.cX=Mv(a.cX);return M0(a);}if(b!=(-2))return a;if(J3(a.cO)>0)a.cO=M0(a.cO);return Mv(a);}
function J3(a){return (a.cX===null?0:a.cX.kv)-(a.cO===null?0:a.cO.kv)|0;}
function Mv(a){var b;b=a.cO;a.cO=b.cX;b.cX=a;EZ(a);EZ(b);return b;}
function M0(a){var b;b=a.cX;a.cX=b.cO;b.cO=a;EZ(a);EZ(b);return b;}
function EZ(a){var b,c;b=a.cX===null?0:a.cX.kv;c=a.cO===null?0:a.cO.kv;a.kv=DV(b,c)+1|0;a.ir=1;if(a.cO!==null)a.ir=a.ir+a.cO.ir|0;if(a.cX!==null)a.ir=a.ir+a.cX.ir|0;}
function AIW(a,b){return b?a.cX:a.cO;}
function AHA(){var a=this;Fl.call(a);a.jr=null;a.gj=0;}
function A1s(a){var b=new AHA();AWm(b,a);return b;}
function AWm(a,b){Js(a,b);a.jr=$rt_createByteArray(8192);}
function AQQ(a){KK(a);a.eN.km();}
function AQu(a,b,c,d){var e,f,g;e=a.jr;if(e!==null&&d>=e.data.length){KK(a);a.eN.fO(b,c,d);return;}if(b===null){f=new El;Bl(f,B(686));M(f);}if(c>=0&&c<=(b.data.length-d|0)){if(d<0){g=new LY;f=new Bc;Ba(f);Bl(g,O(Bd(H(f,B(687)),d)));M(g);}if(e===null){f=new BU;Q(f);M(f);}if(d>=(e.data.length-a.gj|0))KK(a);De(b,c,e,a.gj,d);a.gj=a.gj+d|0;return;}g=new LY;f=new Bc;Ba(f);Bl(g,O(Bd(H(f,B(688)),c)));M(g);}
function AUS(a){var b,$$je;if(a.jr===null)return;a:{try{Jc(a);}catch($$e){$$je=Bf($$e);b=$$je;break a;}a.jr=null;return;}a.jr=null;M(b);}
function APY(a,b){var c,d,e,f;c=a.jr;if(c===null){d=new BU;Q(d);M(d);}e=c.data;if(a.gj==e.length){a.eN.fO(c,0,a.gj);a.gj=0;}f=a.gj;a.gj=f+1|0;e[f]=b<<24>>24;}
function KK(a){if(a.gj>0){a.eN.fO(a.jr,0,a.gj);a.gj=0;}}
function SS(){E.call(this);}
function A_Y(){var a=new SS();AQs(a);return a;}
function AQs(a){return;}
function AD2(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p
=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D1(b,d,e,f,B(689),4.0,(1.0+(L(b.n)-L(b.n))*0.20000000298023224)*0.699999988079071);h=Fh();i=16;j=0;k=15.0;a:while(true){if(j>=i){l=g*2.0;m=I(d-l-1.0);n=I(d+l+1.0);o=I(e-l-1.0);p=I(e+l+1.0);q=Dy(m,o,I(f-l-1.0),n,p,I(f+l+1.0));$p=1;continue _;}n=0;while(n<i){o=0;while(o<i){if(!(j&&j!=15&&n&&n!=15&&o&&o!=15)){r=j/k*2.0-1.0;s=n/k*2.0-1.0;t
=o/k*2.0-1.0;u=DL(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+L(b.n)*0.6000000238418579);y=0.30000001192092896;z=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;if(x>0.0)break a;}o=o+1|0;}n=n+1|0;}j=j+1|0;}bc=I(l);bd=I(v);be=I(w);$p=9;continue _;case 1:$z=Zh(b,c,q);if(C()){break _;}q=$z;bf=BR(d,e,f);bg=0;while(true){if(bg>=CZ(q)){bh=Ck();Dq(bh,h);bi=CZ(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.d9;bl=bk.eo;bm=bk.d$;$p=4;continue _;}bn=Z(q,
bg);bj=Pp(bn,d,e,f)/l;if(bj<=1.0)break;bg=bg+1|0;}bo=bn.c-d;bp=bn.j-e;bq=bn.d-f;br=B7(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.G;$p=2;case 2:$z=Y9(b,bf,bh);if(C()){break _;}x=$z;bs=x;bt=(1.0-bj)*bs;m=(bt*bt+bt)/2.0*8.0*l+1.0|0;$p=3;case 3:bn.eQ(c,m);if(C()){break _;}bn.f=bn.f+v*bt;bn.h=bn.h+w*bt;bn.g=bn.g+z*bt;while(true){bg=bg+1|0;if(bg>=CZ(q)){bh=Ck();Dq(bh,h);bi=CZ(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.d9;bl=bk.eo;bm=bk.d$;$p=4;continue _;}bn=Z(q,bg);bj=Pp(bn,d,e,f)
/l;if(bj>1.0)continue;else break;}bo=bn.c-d;bp=bn.j-e;bq=bn.d-f;br=B7(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.G;$p=2;continue _;case 4:$z=X9(b,m,bl,bm);if(C()){break _;}bu=$z;bv=0;y=m;bw=bl;x=bm;while(bv<1){bq=y+L(b.n);l=bw+L(b.n);v=x+L(b.n);w=bq-d;z=l-e;ba=v-f;bb=B7(w*w+z*z+ba*ba);w=w/bb;z=z/bb;ba=ba/bb;bb=0.5/(bb/r+0.1)*(L(b.n)*L(b.n)+0.30000001192092896);w=w*bb;z=z*bb;ba=ba*bb;BP(b,B(215),(bq+s)/2.0,(l+u)/2.0,(v+bj)/2.0,w,z,ba);BP(b,B(248),bq,l,v,w,z,ba);bv=bv+1|0;}if(bu>0){J();c=A39.data[bu];$p
=5;continue _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.d9;bl=bk.eo;bm=bk.d$;continue _;case 5:$z=Z$(b,m,bl,bm);if(C()){break _;}bv=$z;g=0.30000001192092896;$p=6;case 6:c.DJ(b,m,bl,bm,bv,g);if(C()){break _;}bv=0;$p=7;case 7:AJ6(b,m,bl,bm,bv);if(C()){break _;}c=A39.data[bu];$p=8;case 8:c.qZ(b,m,bl,bm);if(C()){break _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.d9;bl=bk.eo;bm=bk.d$;$p=4;continue _;case 9:$z=X9(b,bc,bd,be);if(C()){break _;}bx=$z;if(bx>0){J();x=x-(A39.data[bx].vR(c)+0.30000001192092896)*y;}if
(x>0.0)Tg(h,Cy(bc,bd,be));l=l+z;v=v+ba;w=w+bb;x=x-0.22500000894069672;while(x<=0.0){while(true){o=o+1|0;while(o>=i){n=n+1|0;while(n>=i){j=j+1|0;if(j>=i){l=g*2.0;m=I(d-l-1.0);n=I(d+l+1.0);o=I(e-l-1.0);p=I(e+l+1.0);q=Dy(m,o,I(f-l-1.0),n,p,I(f+l+1.0));$p=1;continue _;}n=0;}o=0;}if(!j)break;if(j==15)break;if(!n)break;if(n==15)break;if(!o)break;if(o!=15)continue;else break;}r=j/k*2.0-1.0;s=n/k*2.0-1.0;t=o/k*2.0-1.0;u=DL(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+L(b.n)*0.6000000238418579);y=0.30000001192092896;z
=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;}bc=I(l);bd=I(v);be=I(w);continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p);}
function LY(){BT.call(this);}
function A_Z(){var a=new LY();AO4(a);return a;}
function AO4(a){Q(a);}
function ALD(){DW.call(this);}
function AQL(){var a=new ALD();ASz(a);return a;}
function ASz(a){return;}
function TK(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=D(c,2)+2|0;h=D(c,2)+2|0;i=0;j=(d-g|0)-1|0;k=(d+g|0)+1|0;l=e-1|0;m=e+3|0;n=m+1|0;o=(f-h|0)-1|0;p=(f+h|0)+1|0;q=j;a:while(true){r=S(q,
k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6a.b;$p=2;continue _;}t=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;while(true){t=S(s,n);if(t>0)break;v=o;w=S(v,p);if(w<=0)break a;s=s+1|0;}q=q+1|0;}$p=1;case 1:$z
=XB(b,q,s,v);if(C()){break _;}x=$z;if(s==l&&!x.c3())return 0;if(!t&&!x.c3())return 0;if(!(q!=j&&r&&v!=o&&w)&&s==e){$p=5;continue _;}v=v+1|0;while(true){w=S(v,p);if(w<=0)break;s=s+1|0;while(true){t=S(s,n);if(t<=0)break;q=q+1|0;r=S(q,k);if(r>0){if(i>=1&&i<=5){r=j;c:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6a.b;$p=2;continue _;}t=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break c;t
=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}continue _;case 2:AJ6(b,d,e,f,k);if(C()){break _;}$p=3;case 3:$z=AH_(b,d,e,f);if(C()){break _;}b=$z;b.iO=Zc(a,c);return 1;case 4:$z=X9(b,o,e,j);if(C()){break _;}r=$z;if(!r){u=0;r=o-1|0;$p=6;continue _;}l=l+1|0;while(true){if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;continue _;}q=q+1|0;if(q>=2)break;l=0;}J();k=A6a.b;$p=2;continue _;case 5:$z=X9(b,q,s,v);if(C()){break _;}u
=$z;if(!u){u=s+1|0;$p=7;continue _;}v=v+1|0;while(true){w=S(v,p);if(w<=0)break;s=s+1|0;while(true){t=S(s,n);if(t<=0)break;q=q+1|0;r=S(q,k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6a.b;$p=2;continue _;}t=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q
=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 6:$z=XB(b,r,e,j);if(C()){break _;}x=$z;if(x.c3())u=1;r=o+1|0;$p=10;continue _;case 7:$z=X9(b,q,u,v);if(C()){break _;}u=$z;if(!u)i=i+1|0;v=v+1|0;while(true){w=S(v,p);if(w<=0)break;s=s+1|0;while(true){t=S(s,n);if(t<=0)break;q=q+1|0;r=S(q,k);if(r>0){if(i>=1&&i<=5){r=j;d:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6a.b;$p=2;continue _;}t
=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break d;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 8:$z=XB(b,r,t,v);if(C()){break _;}x=$z;if(x.c3()){if(!u&&D(c,4)){J();q=A4o.b;$p=14;continue _;}J();q=A4h.b;$p=12;continue _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q
<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6a.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){continue _;}q=t-1|0;$p=9;case 9:$z=XB(b,r,q,v);if(C()){break _;}x=$z;if(x.c3()){$p=8;continue _;}q=0;$p=11;continue _;case 10:$z=XB(b,r,e,j);if(C()){break _;}x=$z;if(x.c3())u=u+1|0;r=j-1|0;$p=13;continue _;case 11:AJ6(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r
=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6a.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 12:AJ6(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)
|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6a.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 13:$z=XB(b,o,e,r);if(C()){break _;}x=$z;if(x.c3())u=u+1|0;r=j+1|0;$p=16;continue _;case 14:AJ6(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|
0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6a.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 15:AJ6(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6a.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&
u&&v!=o&&s&&t!=n&&i){q=0;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 16:$z=XB(b,o,e,r);if(C()){break _;}x=$z;if(x.c3())u=u+1|0;if(u==1){J();r=A6c.b;$p=17;continue _;}l=l+1|0;while(true){if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;if(q>=2)break;l=0;}J();k=A6a.b;$p=2;continue _;case 17:AJ6(b,o,e,j,r);if(C()){break _;}$p=18;case 18:$z=AH_(b,o,e,j);if(C()){break _;}x=$z;y=x;n=0;while(n<8){z=ACz(a,c);if(z!==null)ACL(y,D(c,k),z);n=n+1|0;}while(true){q=q+1|0;if(q>=2)break;l
=0;if(l>=3)continue;else{o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}}J();k=A6a.b;$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function ACz(a,b){var c,d;a:{c=D(b,10);if(!c){d=new B6;Bw();Dg(d,A7Z);break a;}if(c==1){d=new B6;Bw();Fw(d,A67,D(b,4)+1|0);break a;}if(c==2){d=new B6;Bw();Dg(d,A7w);break a;}if(c==3){d=new B6;Bw();Fw(d,A6U,D(b,4)+1|0);break a;}if(c==4){d=new B6;Bw();Fw(d,A5v,D(b,4)+1|0);break a;}if(c==5){d=new B6;Bw();Fw(d,A5w,D(b,4)+1|0);break a;}if(c==6){d=new B6;Bw();Dg(d,A7V);break a;}if(c==7&&!D(b,100)){d=new B6;Bw();Dg(d,A7T);break a;}d=null;}return d;}
function Zc(a,b){var c;c=D(b,4);return !c?B(650):c==1?B(653):c==2?B(653):c!=3?B(3):B(651);}
function B$(){var a=this;DW.call(a);a.xd=0;a.cE=0;}
function A_0(a,b){var c=new B$();Cc(c,a,b);return c;}
function Cc(a,b,c){a.xd=b;a.cE=c;}
function Xs(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=L(c)*3.1415927410125732;h=d+8|0;i=h+Bm(g)*a.cE/8.0;j=h
-Bm(g)*a.cE/8.0;h=f+8|0;k=h+Bx(g)*a.cE/8.0;l=h-Bx(g)*a.cE/8.0;m=(e+D(c,3)|0)+2|0;n=(e+D(c,3)|0)+2|0;o=0;j=j-i;n=n-m;p=l-k;while(o<=a.cE){q=o;r=i+j*q/a.cE;s=m+n*q/a.cE;t=k+p*q/a.cE;q=Cb(c)*a.cE/16.0;h=o*3.1415927410125732;u=(Bm(h/a.cE)+1.0)*q+1.0;v=(Bm(h/a.cE)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;while(w<=e){ba=f;while(ba<=x){bb=y;while(bb<=z){bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be<1.0){$p=1;continue _;}bb=bb+1|0;}ba=ba+1|0;}w=w+1|0;}o=o+1|0;}return 1;case 1:$z
=X9(b,w,ba,bb);if(C()){break _;}bf=$z;J();if(bf==A4d.b){d=a.xd;$p=2;continue _;}a:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.cE)break a;q=o;r=i+j*q/a.cE;s=m+n*q/a.cE;t=k+p*q/a.cE;q=Cb(c)*a.cE/16.0;h=o*3.1415927410125732;u=(Bm(h/a.cE)+1.0)*q+1.0;v=(Bm(h/a.cE)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{continue _;}}return 1;case 2:AGh(b,
w,ba,bb,d);if(C()){break _;}b:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.cE)break b;q=o;r=i+j*q/a.cE;s=m+n*q/a.cE;t=k+p*q/a.cE;q=Cb(c)*a.cE/16.0;h=o*3.1415927410125732;u=(Bm(h/a.cE)+1.0)*q+1.0;v=(Bm(h/a.cE)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{$p=1;continue _;}}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p);}
function BL(){DW.call(this);this.si=0;}
function A_1(a){var b=new BL();BM(b,a);return b;}
function BM(a,b){a.si=b;}
function Yn(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;if(g>=64)return 1;h=(d+D(c,8)|0)-D(c,8)|0;i=(e+D(c,4)|0)-D(c,4)|0;j=(f+D(c,8)|0)-D(c,8)|0;$p=1;case 1:$z=X9(b,h,i,j);if(C()){break _;}k=$z;if(!k){J();l=A39.data[a.si];$p=2;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+D(c,8)|0)-D(c,8)|0;i=(e+D(c,4)|0)-D(c,4)|0;j=(f+D(c,8)|0)-D(c,8)|0;continue _;case 2:$z
=l.Db(b,h,i,j);if(C()){break _;}k=$z;if(k){k=a.si;$p=3;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+D(c,8)|0)-D(c,8)|0;i=(e+D(c,4)|0)-D(c,4)|0;j=(f+D(c,8)|0)-D(c,8)|0;$p=1;continue _;case 3:AGh(b,h,i,j,k);if(C()){break _;}g=g+1|0;if(g>=64)return 1;h=(d+D(c,8)|0)-D(c,8)|0;i=(e+D(c,4)|0)-D(c,4)|0;j=(f+D(c,8)|0)-D(c,8)|0;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Cd(){DW.call(this);this.Bh=0;}
function A_2(a){var b=new Cd();Ch(b,a);return b;}
function Ch(a,b){a.Bh=b;}
function AGO(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e+1|0;$p=1;case 1:$z=X9(b,d,g,f);if(C()){break _;}g=$z;J();if(g!=A4d.b)return 0;g=e-1|0;$p=2;case 2:$z=X9(b,d,g,f);if(C()){break _;}h=$z;if(h!=A4d.b)return 0;$p=3;case 3:$z=X9(b,d,e,f);if(C()){break _;}g=$z;if(g){$p=5;continue _;}g=0;h=d-1|0;$p=4;case 4:$z=X9(b,h,e,f);if(C()){break _;}i
=$z;if(i==A4d.b)g=1;i=d+1|0;$p=6;continue _;case 5:$z=X9(b,d,e,f);if(C()){break _;}g=$z;if(g!=A4d.b)return 0;g=0;h=d-1|0;$p=4;continue _;case 6:$z=X9(b,i,e,f);if(C()){break _;}j=$z;if(j==A4d.b)g=g+1|0;k=f-1|0;$p=7;case 7:$z=X9(b,d,e,k);if(C()){break _;}j=$z;if(j==A4d.b)g=g+1|0;j=f+1|0;$p=8;case 8:$z=X9(b,d,e,j);if(C()){break _;}l=$z;if(l==A4d.b)g=g+1|0;l=0;$p=9;case 9:$z=X9(b,h,e,f);if(C()){break _;}h=$z;if(!h)l=1;$p=10;case 10:$z=X9(b,i,e,f);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=11;case 11:$z=X9(b,d,e,k);if
(C()){break _;}h=$z;if(!h)l=l+1|0;$p=12;case 12:$z=X9(b,d,e,j);if(C()){break _;}h=$z;if(!h)l=l+1|0;if(g==3&&l==1){g=a.Bh;$p=13;continue _;}return 1;case 13:AJ6(b,d,e,f,g);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADr(){E.call(this);}
function A_3(){var a=new ADr();API(a);return a;}
function API(a){return;}
function Pz(){CJ.call(this);}
function U2(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;a.h=a.h+0.002;b=a.f;c=a.h;d=a.g;$p=1;case 1:ALW(a,b,c,d);if(C()){break _;}a.f=a.f*0.8500000238418579;a.h=a.h*0.8500000238418579;a.g=a.g*0.8500000238418579;e=a.k;f=I(a.c);g=I(a.j);h=I(a.d);$p=2;case 2:$z=XB(e,f,g,h);if(C()){break _;}e=$z;if(e!==A46){$p=3;continue _;}f=a.b_;a.b_=f-1|0;if(f>0)return;$p=4;continue _;case 3:B4(a);if
(C()){break _;}f=a.b_;a.b_=f-1|0;if(f>0)return;$p=4;case 4:B4(a);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AAM(){CJ.call(this);this.zi=0.0;}
function AXG(a,b,c,d,e){var f=new AAM();AO9(f,a,b,c,d,e);return f;}
function AO9(a,b,c,d,e,f){var g;EP(a,b,c,d,e,0.0,0.0,0.0);a.f=a.f*0.10000000149011612;a.h=a.h*0.10000000149011612;a.g=a.g*0.10000000149011612;g=BI()*0.30000001192092896;a.hw=g;a.ho=g;a.g_=g;a.cZ=a.cZ*0.75;a.cZ=a.cZ*f;a.zi=a.cZ;a.b_=8.0/(BI()*0.8+0.2)|0;a.b_=a.b_*f|0;a.nB=0;}
function AE3(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.cY+c)/a.b_*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.cZ=a.zi*i;$p=1;case 1:AH6(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AGG(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=2;continue _;}a.ev=7-((a.cY*8|0)/a.b_|0)|0;a.h=a.h+0.004;c=a.f;d=a.h;e=a.g;$p=1;case 1:ALW(a,c,d,e);if(C()){break _;}if(a.j===a.ct){a.f=a.f*1.1;a.g=a.g*1.1;}a.f=a.f*0.9599999785423279;a.h=a.h*0.9599999785423279;a.g=a.g*0.9599999785423279;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;case 2:B4(a);if
(C()){break _;}a.ev=7-((a.cY*8|0)/a.b_|0)|0;a.h=a.h+0.004;c=a.f;d=a.h;e=a.g;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,$p);}
function N9(){CJ.call(this);}
function AMm(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AH6(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AAf(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=2;continue _;}a.ev=7-((a.cY*8|0)/a.b_|0)|0;a.h=a.h+0.004;c=a.f;d=a.h;e=a.g;$p=1;case 1:ALW(a,c,d,e);if(C()){break _;}a.f=a.f*0.8999999761581421;a.h=a.h*0.8999999761581421;a.g=a.g*0.8999999761581421;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;case 2:B4(a);if(C()){break _;}a.ev=7-
((a.cY*8|0)/a.b_|0)|0;a.h=a.h+0.004;c=a.f;d=a.h;e=a.g;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,$p);}
function MC(){CJ.call(this);this.Aq=0.0;}
function AK8(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.cY+c)/a.b_;a.cZ=a.Aq*(1.0-i*i*0.5);$p=1;case 1:AH6(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AMH(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=(a.cY+b)/a.b_;if(c<0.0)c=0.0;if(c>1.0)c=1.0;$p=1;case 1:$z=Zd(a,b);if(C()){break _;}d=$z;return d*c+1.0-c;default:Es();}}CM().s(a,b,c,d,$p);}
function Wx(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=2;continue _;}c=a.f;d=a.h;e=a.g;$p=1;case 1:ALW(a,c,d,e);if(C()){break _;}a.f=a.f*0.9599999785423279;a.h=a.h*0.9599999785423279;a.g=a.g*0.9599999785423279;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;case 2:B4(a);if(C()){break _;}c=a.f;d=a.h;e=a.g;$p=1;continue _;default:Es();}}CM().s(a,
b,c,d,e,$p);}
function WH(){CJ.call(this);this.wi=0.0;}
function A2a(a,b,c,d){var e=new WH();AS_(e,a,b,c,d);return e;}
function AS_(a,b,c,d,e){EP(a,b,c,d,e,0.0,0.0,0.0);a.f=a.f*0.800000011920929;a.h=a.h*0.800000011920929;a.g=a.g*0.800000011920929;a.h=L(a.l)*0.4000000059604645+0.05000000074505806;a.hw=1.0;a.ho=1.0;a.g_=1.0;a.cZ=a.cZ*(L(a.l)*2.0+0.20000000298023224);a.wi=a.cZ;a.b_=16.0/(BI()*0.8+0.2)|0;a.nB=0;a.ev=49;}
function AE4(a,b){return 1.0;}
function AB7(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.cY+c)/a.b_;a.cZ=a.wi*(1.0-i*i);$p=1;case 1:AH6(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AF9(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=1;continue _;}c=a.cY/a.b_;if(L(a.l)>c)BP(a.k,B(248),a.c,a.j,a.d,a.f,a.h,a.g);a.h=a.h-0.03;d=a.f;e=a.h;f=a.g;$p=2;continue _;case 1:B4(a);if(C()){break _;}c=a.cY/a.b_;if(L(a.l)>c)BP(a.k,B(248),a.c,a.j,a.d,a.f,a.h,a.g);a.h=a.h-0.03;d=a.f;e=a.h;f=a.g;$p=2;case 2:ALW(a,d,e,f);if(C()){break _;}a.f
=a.f*0.9990000128746033;a.h=a.h*0.9990000128746033;a.g=a.g*0.9990000128746033;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ALT(){Ic.call(this);}
function A14(a,b,c,d,e,f,g){var h=new ALT();AO0(h,a,b,c,d,e,f,g);return h;}
function AO0(a,b,c,d,e,f,g,h){Qs(a,b,c,d,e);a.lO=0.03999999910593033;a.ev=a.ev+1|0;if(g===0.0&&!(f===0.0&&h===0.0)){a.f=f;a.h=g+0.1;a.g=h;}}
function GT(){var a=this;E.call(a);a.cW=null;a.bo=0;a.bk=0;a.bn=0;a.fd=0;a.bu=null;a.es=null;}
function A_4(a,b,c,d,e){var f=new GT();UJ(f,a,b,c,d,e);return f;}
function UJ(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.es=b;a.bu=Ck();a.cW=c;a.bo=d;a.bk=e;a.bn=f;$p=1;case 1:$z=Z$(c,d,e,f);if(C()){break _;}d=$z;a.fd=d;Jk(a);return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Jk(a){a:{DB(a.bu);if(!a.fd){U(a.bu,Cy(a.bo,a.bk,a.bn-1|0));U(a.bu,Cy(a.bo,a.bk,a.bn+1|0));break a;}if(a.fd==1){U(a.bu,Cy(a.bo-1|0,a.bk,a.bn));U(a.bu,Cy(a.bo+1|0,a.bk,a.bn));break a;}if(a.fd==2){U(a.bu,Cy(a.bo-1|0,a.bk,a.bn));U(a.bu,Cy(a.bo+1|0,a.bk+1|0,a.bn));break a;}if(a.fd==3){U(a.bu,Cy(a.bo-1|0,a.bk+1|0,a.bn));U(a.bu,Cy(a.bo+1|0,a.bk,a.bn));break a;}if(a.fd==4){U(a.bu,Cy(a.bo,a.bk+1|0,a.bn-1|0));U(a.bu,Cy(a.bo,a.bk,a.bn+1|0));break a;}if(a.fd==5){U(a.bu,Cy(a.bo,a.bk,a.bn-1|0));U(a.bu,Cy(a.bo,a.bk
+1|0,a.bn+1|0));break a;}if(a.fd==6){U(a.bu,Cy(a.bo+1|0,a.bk,a.bn));U(a.bu,Cy(a.bo,a.bk,a.bn+1|0));break a;}if(a.fd==7){U(a.bu,Cy(a.bo-1|0,a.bk,a.bn));U(a.bu,Cy(a.bo,a.bk,a.bn+1|0));break a;}if(a.fd==8){U(a.bu,Cy(a.bo-1|0,a.bk,a.bn));U(a.bu,Cy(a.bo,a.bk,a.bn-1|0));break a;}if(a.fd!=9)break a;U(a.bu,Cy(a.bo+1|0,a.bk,a.bn));U(a.bu,Cy(a.bo,a.bk,a.bn-1|0));}}
function AA1(a){var b,c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=a.bu.p)return;c=Z(a.bu,b);$p=1;case 1:$z=ALq(a,c);if(C()){break _;}c=$z;if(c!==null&&PM(c,a)){Oh(a.bu,b,Cy(c.bo,c.bk,c.bn));d=b;}else{c=a.bu;d=b+(-1)|0;Eo(c,b);}b=d+1|0;if(b>=a.bu.p)return;c=Z(a.bu,b);continue _;default:Es();}}CM().s(a,b,c,d,$p);}
function ALq(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.cW;d=b.d9;e=b.eo;f=b.d$;$p=1;case 1:$z=X9(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.es.b){c=a.cW;d=b.d9;e=b.eo+1|0;f=b.d$;$p=2;continue _;}c=new GT;g=a.es;h=a.cW;d=b.d9;e=b.eo;f=b.d$;$p=3;continue _;case 2:$z=X9(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.es.b){c=a.cW;d=b.d9;e=b.eo-1|0;f=b.d$;$p=4;continue _;}c=new GT;g=a.es;h=a.cW;d
=b.d9;e=b.eo+1|0;f=b.d$;$p=5;continue _;case 3:UJ(c,g,h,d,e,f);if(C()){break _;}return c;case 4:$z=X9(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.es.b){c=null;return c;}c=new GT;g=a.es;h=a.cW;e=b.d9;d=b.eo-1|0;f=b.d$;$p=6;continue _;case 5:UJ(c,g,h,d,e,f);if(C()){break _;}return c;case 6:UJ(c,g,h,e,d,f);if(C()){break _;}return c;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function PM(a,b){var c,d;c=0;while(c<a.bu.p){d=Z(a.bu,c);if(d.d9==b.bo&&d.d$==b.bn)return 1;c=c+1|0;}return 0;}
function Ja(a,b,c,d){var e,f;e=0;while(e<a.bu.p){f=Z(a.bu,e);if(f.d9==b&&f.d$==d)return 1;e=e+1|0;}return 0;}
function MG(a,b){var c;if(PM(a,b))return 1;if(a.bu.p==2)return 0;if(!a.bu.p)return 1;c=Z(a.bu,0);return b.bk==a.bk&&c.eo==a.bk?1:1;}
function AL3(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:U(a.bu,Cy(b.bo,b.bk,b.bn));c=Ja(a,a.bo,a.bk,a.bn-1|0);d=Ja(a,a.bo,a.bk,a.bn+1|0);e=Ja(a,a.bo-1|0,a.bk,a.bn);f=Ja(a,a.bo+1|0,a.bk,a.bn);g=(-1);if(!(!c&&!d))g=0;if(!(!e&&!f))g=1;if(d&&f&&!c&&!e)g=6;if(d&&e&&!c&&!f)g=7;if(c&&e&&!d&&!f)g=8;if(c&&f&&!d&&!e)g=9;if(!g){b=a.cW;c=a.bo;d=a.bk+1|0;e=a.bn-1|0;$p=1;continue _;}if(g==1){b=a.cW;c=a.bo+1|0;d
=a.bk+1|0;e=a.bn;$p=2;continue _;}if(g<0)g=0;b=a.cW;c=a.bo;d=a.bk;e=a.bn;$p=5;continue _;case 1:$z=X9(b,c,d,e);if(C()){break _;}c=$z;if(c==a.es.b)g=4;b=a.cW;c=a.bo;d=a.bk+1|0;e=a.bn+1|0;$p=3;continue _;case 2:$z=X9(b,c,d,e);if(C()){break _;}c=$z;if(c==a.es.b)g=2;b=a.cW;c=a.bo-1|0;d=a.bk+1|0;e=a.bn;$p=4;continue _;case 3:$z=X9(b,c,d,e);if(C()){break _;}c=$z;if(c==a.es.b)g=5;if(g==1){b=a.cW;c=a.bo+1|0;d=a.bk+1|0;e=a.bn;$p=2;continue _;}if(g<0)g=0;b=a.cW;c=a.bo;d=a.bk;e=a.bn;$p=5;continue _;case 4:$z=X9(b,c,d,
e);if(C()){break _;}c=$z;if(c==a.es.b)g=3;if(g<0)g=0;b=a.cW;c=a.bo;d=a.bk;e=a.bn;$p=5;case 5:AFp(b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ADZ(a,b,c,d){var e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Cy(b,c,d);$p=1;case 1:$z=ALq(a,e);if(C()){break _;}e=$z;if(e===null)return 0;$p=2;case 2:AA1(e);if(C()){break _;}return MG(e,a);default:Es();}}CM().s(a,b,c,d,e,$p);}
function UI(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bo;c=a.bk;d=a.bn-1|0;$p=1;case 1:$z=ADZ(a,b,c,d);if(C()){break _;}d=$z;b=a.bo;c=a.bk;e=a.bn+1|0;$p=2;case 2:$z=ADZ(a,b,c,e);if(C()){break _;}b=$z;c=a.bo-1|0;e=a.bk;f=a.bn;$p=3;case 3:$z=ADZ(a,c,e,f);if(C()){break _;}c=$z;e=a.bo+1|0;f=a.bk;g=a.bn;$p=4;case 4:$z=ADZ(a,e,f,g);if(C()){break _;}e=$z;f=(-1);if(!(!d&&!b))f=0;if(!(!c&&
!e))f=1;if(b&&e&&!d&&!c)f=6;if(b&&c&&!d&&!e)f=7;if(d&&c&&!b&&!e)f=8;if(d&&e&&!b&&!c)f=9;if(!f){h=a.cW;d=a.bo;b=a.bk+1|0;c=a.bn-1|0;$p=5;continue _;}if(f==1){h=a.cW;d=a.bo+1|0;b=a.bk+1|0;c=a.bn;$p=6;continue _;}if(f<0)f=0;a.fd=f;Jk(a);h=a.cW;d=a.bo;b=a.bk;c=a.bn;$p=9;continue _;case 5:$z=X9(h,d,b,c);if(C()){break _;}d=$z;if(d==a.es.b)f=4;h=a.cW;d=a.bo;b=a.bk+1|0;c=a.bn+1|0;$p=7;continue _;case 6:$z=X9(h,d,b,c);if(C()){break _;}d=$z;if(d==a.es.b)f=2;h=a.cW;d=a.bo-1|0;b=a.bk+1|0;c=a.bn;$p=8;continue _;case 7:$z
=X9(h,d,b,c);if(C()){break _;}b=$z;if(b==a.es.b)f=5;if(f==1){h=a.cW;d=a.bo+1|0;b=a.bk+1|0;c=a.bn;$p=6;continue _;}if(f<0)f=0;a.fd=f;Jk(a);h=a.cW;d=a.bo;b=a.bk;c=a.bn;$p=9;continue _;case 8:$z=X9(h,d,b,c);if(C()){break _;}d=$z;if(d==a.es.b)f=3;if(f<0)f=0;a.fd=f;Jk(a);h=a.cW;d=a.bo;b=a.bk;c=a.bn;$p=9;case 9:AFp(h,d,b,c,f);if(C()){break _;}g=0;if(g>=a.bu.p)return;h=Z(a.bu,g);$p=10;case 10:$z=ALq(a,h);if(C()){break _;}h=$z;if(h!==null){$p=11;continue _;}g=g+1|0;if(g>=a.bu.p)return;h=Z(a.bu,g);continue _;case 11:AA1(h);if
(C()){break _;}if(MG(h,a)){$p=12;continue _;}g=g+1|0;if(g>=a.bu.p)return;h=Z(a.bu,g);$p=10;continue _;case 12:AL3(h,a);if(C()){break _;}g=g+1|0;if(g>=a.bu.p)return;h=Z(a.bu,g);$p=10;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function Rw(){var a=this;E.call(a);a.nJ=null;a.Cc=0;a.k0=0;}
function AKx(a){a.k0=a.k0+1|0;}
function AH0(a){return a.k0<a.nJ.data.length?0:1;}
function Pt(a,b){return BR(a.nJ.data[a.k0].hm+(b.cC+1.0|0)*0.5,a.nJ.data[a.k0].g8,a.nJ.data[a.k0].hu+(b.cC+1.0|0)*0.5);}
function XO(){var a=this;E.call(a);a.vC=null;a.i8=null;a.pn=null;a.kX=null;}
function ATU(a){var b=new XO();AWp(b,a);return b;}
function AWp(a,b){a.i8=A1M();a.pn=CY();a.kX=N(GI,32);a.vC=b;}
function AJ0(a,b,c,d){return MH(a,b,c.c,c.G.I,c.d,d);}
function ABs(a,b,c,d,e,f){return MH(a,b,c+0.5,d+0.5,e+0.5,f);}
function MH(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;QV(a.i8);Rm(a.pn);g=Hv(a,I(b.G.N),I(b.G.I),I(b.G.O));h=Hv(a,I(c-b.cC/2.0),I(d),I(e-b.cC/2.0));i=ASk(Jn(b.cC+1.0),Jn(b.ef+1.0),Jn(b.cC+1.0));g.li=0.0;g.nP=Eh(g,h);g.h5=g.nP;QV(a.i8);SQ(a.i8,g);j=g;a:{while(true){if(XN(a.i8)){if(j!==g){k=Q6(a,g,j);break a;}k=null;break a;}l=ALS(a.i8);if(l.lF==h.lF)break;if(Eh(l,h)<Eh(j,h))j=l;l.mb=1;m=AEJ(a,b,l,i,h,f);n=0;while(n<m){k=a.kX.data[n];o=l.li+Eh(l,k);if(!(MW(k)&&o>=k.li)){k.nz=l;k.li=o;k.nP=Eh(k,h);if(MW(k))W4(a.i8,k,
k.li+k.nP);else{k.h5=k.li+k.nP;SQ(a.i8,k);}}n=n+1|0;}}k=Q6(a,g,h);}return k;}
function AEJ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=0;if(Iv(a,b,c.hm,c.g8+1|0,c.hu,d)>0)g=1;h=I2(a,b,c.hm,c.g8,c.hu+1|0,d,g);i=I2(a,b,c.hm-1|0,c.g8,c.hu,d,g);j=I2(a,b,c.hm+1|0,c.g8,c.hu,d,g);k=I2(a,b,c.hm,c.g8,c.hu-1|0,d,g);if(h===null)l=0;else if(h.mb)l=0;else if(Eh(h,e)>=f)l=0;else{m=a.kX.data;l=1;m[0]=h;}if(i===null)n=l;else if(i.mb)n=l;else if(Eh(i,e)>=f)n=l;else{m=a.kX.data;n=l+1|0;m[l]=i;}if(j===null)o=n;else if(j.mb)o=n;else if(Eh(j,e)>=f)o=n;else{m=a.kX.data;o=n+1|0;m[n]=j;}if(k===null)n=o;else if(k.mb)n
=o;else if(Eh(k,e)>=f)n=o;else{m=a.kX.data;n=o+1|0;m[o]=k;}return n;}
function I2(a,b,c,d,e,f,g){var h,i,j,k;h=null;if(Iv(a,b,c,d,e,f)>0)h=Hv(a,c,d,e);if(h===null){g=d+g|0;if(Iv(a,b,c,g,e,f)>0)h=Hv(a,c,g,e);}if(h!==null){i=0;a:{while(true){if(d<=0)break a;j=Iv(a,b,c,d-1|0,e,f);if(j<=0)break a;if(j<0)return null;i=i+1|0;if(i>=4)break;d=d+(-1)|0;}return null;}if(d>0)h=Hv(a,c,d,e);k=LO(a.vC,c,d-1|0,e);if(!(k!==A46&&k!==A47))return null;}return h;}
function Hv(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=Cz(a.pn,CG(e));if(f===null){f=ASk(b,c,d);BK(a.pn,CG(e),f);}return f;}
function Iv(a,b,c,d,e,f){var g,h,i,j;g=c;a:{while(g<(c+f.hm|0)){h=d;while(h<(d+f.g8|0)){i=e;while(i<(e+f.hu|0)){j=LO(a.vC,c,d,e);if(j.sk())return 0;if(j===A46)break a;if(j===A47)break a;i=i+1|0;}h=h+1|0;}g=g+1|0;}return 1;}return (-1);}
function Q6(a,b,c){var d,e,f,g;d=1;e=c;while(e.nz!==null){d=d+1|0;e=e.nz;}f=N(GI,d);g=f.data;d=d+(-1)|0;g[d]=c;while(c.nz!==null){c=c.nz;d=d+(-1)|0;g[d]=c;}b=new Rw;b.nJ=f;b.Cc=g.length;return b;}
function Rg(){var a=this;CJ.call(a);a.lg=null;a.g3=null;a.ox=0;a.pw=0;a.x0=0.0;}
function AG4(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.ox+c)/a.pw;d=i*i;j=a.lg.c;k=a.lg.j;l=a.lg.d;m=a.g3.b6;n=a.g3.c-a.g3.b6;o=c;n=m+n*o;m=a.g3.bP+(a.g3.j-a.g3.bP)*o+a.x0;o=a.g3.b7+(a.g3.d-a.g3.b7)*o;n=n-j;p=d;q=j+n
*p;r=k+(m-k)*p;p=l+(o-l)*p;s=I(q);t=I(r+a.cF/2.0);u=I(p);b=a.k;$p=1;case 1:$z=AHV(b,s,t,u);if(C()){break _;}v=$z;o=q-A99;n=r-A9$;m=p-A9_;BN(v,v,v,1.0);b=A5F;w=a.lg;o=o;n=n;m=m;d=a.lg.q;$p=2;case 2:AK5(b,w,o,n,m,d,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function Wq(a){a.ox=a.ox+1|0;if(a.ox==a.pw)B4(a);}
function AN9(a){return 2;}
function UW(){var a=this;E.call(a);a.dw=null;a.el=0;}
function A1M(){var a=new UW();AR5(a);return a;}
function AR5(a){a.dw=N(GI,1024);a.el=0;}
function SQ(a,b){var c,d;if(b.fT>=0){b=new DK;Bl(b,B(690));M(b);}if(a.el==a.dw.data.length){c=N(GI,a.el<<1);De(a.dw,0,c,0,a.el);a.dw=c;}a.dw.data[a.el]=b;b.fT=a.el;d=a.el;a.el=d+1|0;Re(a,d);return b;}
function QV(a){a.el=0;}
function ALS(a){var b,c,d,e;b=a.dw.data[0];c=a.dw.data;d=a.dw.data;e=a.el-1|0;a.el=e;c[0]=d[e];a.dw.data[a.el]=null;if(a.el>0)Mq(a,0);b.fT=(-1);return b;}
function W4(a,b,c){var d;d=b.h5;b.h5=c;if(c>=d)Mq(a,b.fT);else Re(a,b.fT);}
function Re(a,b){var c,d,e,f;c=a.dw.data[b];d=c.h5;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.dw.data[e];if(d>=f.h5)break;a.dw.data[b]=f;f.fT=b;b=e;}}a.dw.data[b]=c;c.fT=b;}
function Mq(a,b){var c,d,e,f,g,h,i,j;c=a.dw.data[b];d=c.h5;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.el)break;g=a.dw.data[e];h=g.h5;if(f>=a.el){i=null;j=Infinity;}else{i=a.dw.data[f];j=i.h5;}if(h<j){if(h>=d)break a;a.dw.data[b]=g;g.fT=b;}else{if(j>=d)break a;a.dw.data[b]=i;i.fT=b;e=f;}b=e;}}a.dw.data[b]=c;c.fT=b;}
function XN(a){return a.el?0:1;}
function GI(){var a=this;E.call(a);a.hm=0;a.g8=0;a.hu=0;a.lF=0;a.fT=0;a.li=0.0;a.nP=0.0;a.h5=0.0;a.nz=null;a.mb=0;}
function ASk(a,b,c){var d=new GI();AX7(d,a,b,c);return d;}
function AX7(a,b,c,d){a.fT=(-1);a.mb=0;a.hm=b;a.g8=c;a.hu=d;a.lF=b|c<<10|d<<20;}
function Eh(a,b){var c,d,e;c=b.hm-a.hm|0;d=b.g8-a.g8|0;e=b.hu-a.hu|0;return DG(c*c+d*d+e*e);}
function AUH(a,b){return b.lF!=a.lF?0:1;}
function AOG(a){return a.lF;}
function MW(a){return a.fT<0?0:1;}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",3,"nio",5,"charset",3,"io",3,"lang",-1,"net",9,"minecraft",10,"src"]);
$rt_metadata([E,"Object",8,0,[],0,3,0,["eK",function(){return AVk(this);},"dQ",function(b){return N_(this,b);},"q6",function(){return AN3(this);}],H0,0,E,[],0,3,0,0,KP,0,E,[],3,3,0,0,E2,0,E,[KP],0,3,0,0,AE2,0,E,[],4,0,0,0,Qy,0,E,[],4,3,0,0,Dc,0,E,[],3,3,0,0,Dm,0,E,[],3,3,0,0,Jj,0,E,[],3,3,0,0,Cp,"String",8,E,[Dc,Dm,Jj],0,3,0,["q6",function(){return ANZ(this);},"dQ",function(b){return DU(this,b);},"eK",function(){return AXO(this);},"kD",function(b){return AO7(this,b);}],DD,0,E,[],0,3,0,["ml",function(){return AR_(this);
}],EA,0,DD,[],0,3,0,0,Hz,0,EA,[],0,3,0,0,AG1,0,Hz,[],0,3,0,0,GC,0,E,[Dc,Jj],0,0,0,0,Hb,0,E,[],3,3,0,0,Bc,0,GC,[Hb],0,3,0,["oF",function(b){AQi(this,b);}],Eu,0,E,[Dc],1,3,0,0,G8,0,Eu,[Dm],0,3,0,["eK",function(){return AUb(this);},"dQ",function(b){return AZR(this,b);},"kD",function(b){return AWQ(this,b);}],Hq,0,Hz,[],0,3,0,0,AJp,0,Hq,[],0,3,0,0,AGt,0,Hq,[],0,3,0,0,Bz,0,DD,[],0,3,0,0,B5,"RuntimeException",8,Bz,[],0,3,0,0,CV,0,E,[],3,3,0,0,Gc,0,E,[CV],3,3,0,0,QN,0,E,[Gc],3,3,0,0,NF,0,E,[Gc],3,3,0,0,Rp,0,E,[Gc],
3,3,0,0,Oo,0,E,[Gc],3,3,0,0,So,0,E,[Gc,QN,NF,Rp,Oo],3,3,0,0,MX,0,E,[],3,3,0,0,JB,0,E,[CV],3,3,0,0,UC,0,E,[CV,So,MX,JB],1,3,0,["R9",function(b,c){return AQz(this,b,c);},"T5",function(b,c){return AQG(this,b,c);},"MU",function(b){return ANz(this,b);},"Jl",function(b,c,d){return ARj(this,b,c,d);},"HI",function(b){return AS5(this,b);},"Pn",function(){return AOe(this);},"NX",function(b,c,d){return AM6(this,b,c,d);}],Bo,0,E,[],0,3,Y,0,PO,0,E,[],3,3,0,0,H3,0,E,[PO],3,3,0,0,LF,0,E,[],3,3,0,0,Gt,0,E,[Hb,H3,LF],1,3,0,
0,WX,0,Gt,[],0,3,0,0,Wg,0,Gt,[],0,3,0,0,AAA,0,E,[],4,3,0,0,ABa,0,E,[CV],1,3,0,0,J_,0,E,[],3,3,0,0,IF,0,E,[J_],0,3,0,0,Vv,0,E,[],0,3,0,0,Pj,0,E,[],0,3,A1a,0,Fu,0,E,[J_],0,3,0,["jp",function(){ALG(this);}],Do,0,E,[CV],3,3,0,0,S6,0,E,[Do],0,0,0,["f7",function(b){return AZu(this,b);}]]);
$rt_metadata([Ta,0,E,[Do],0,0,0,["f7",function(b){return AQe(this,b);}],Tb,0,E,[Do],0,0,0,["f7",function(b){return AUw(this,b);}],S$,0,E,[Do],0,0,0,["f7",function(b){return AMW(this,b);}],S_,0,E,[Do],0,0,0,["f7",function(b){return AUE(this,b);}],S8,0,E,[Do],0,0,0,["f7",function(b){return ATz(this,b);}],S9,0,E,[Do],0,0,0,["f7",function(b){return AWu(this,b);}],S7,0,E,[Do],0,0,0,["f7",function(b){return ANY(this,b);}],NL,0,E,[Do],0,0,0,["f7",function(b){return AWX(this,b);}],NK,0,E,[Do],0,0,0,["f7",function(b)
{return AQ0(this,b);}],LB,0,E,[],0,3,0,0,WB,0,E,[CV],1,3,0,0,Q_,0,E,[],0,3,0,0,BU,"IOException",7,Bz,[],0,3,0,0,MO,0,GC,[Hb],0,3,0,["oF",function(b){AU3(this,b);}],EN,0,E,[],3,3,0,0,Sa,0,E,[EN],0,3,0,0,Hk,0,E,[Dm],0,3,0,["dQ",function(b){return AZy(this,b);},"eK",function(){return AZn(this);},"kD",function(b){return AUf(this,b);}],Hw,0,E,[],0,3,0,0,Q8,0,Hw,[],0,3,0,0,PA,0,E,[],0,3,0,0,RR,0,E,[],3,3,0,0,O7,0,E,[RR],0,3,0,0,Pl,0,E,[],0,3,0,0,DO,0,E,[],1,3,0,0,KD,0,DO,[],0,3,0,["gW",function(b,c,d,e,f,g){AY8(this,
b,c,d,e,f,g);},"mX",function(b,c,d,e,f,g){ADO(this,b,c,d,e,f,g);}],DZ,0,E,[],0,3,0,0,Wz,0,DZ,[],0,3,0,["nG",function(){AQV(this);}],AFv,0,DZ,[],0,3,0,["nG",function(){AQ6(this);}],Ke,0,E,[],4,3,0,0,R8,0,Fu,[],0,0,0,["jp",function(){AEW(this);}],Pr,0,E,[],3,3,0,0,G3,0,E,[Pr],3,3,0,0,Ft,0,E,[G3],1,3,0,["pR",function(b){return Ob(this,b);}],Iu,0,E,[G3],3,3,0,0,Fn,0,Ft,[Iu],1,3,0,["jS",function(){return Ng(this);}],Kz,0,Fn,[],1,3,0,0,Mi,0,E,[G3],3,3,0,0,Th,0,E,[Mi],3,3,0,0,Z6,0,Kz,[Th],0,3,0,0,AIK,0,E,[CV],1,3,
0,0,Fg,0,E,[CV],1,3,0,0,Xi,0,Fg,[],1,3,0,0,AFz,0,Fg,[],1,3,0,0,HJ,0,E,[G3],3,3,0,0,Ev,0,Ft,[HJ],1,3,0,["dQ",function(b){return AV5(this,b);},"eK",function(){return AM8(this);}],E1,0,E,[],3,3,0,0,AKO,0,Ev,[E1,Dc],0,3,0,["q4",function(b){return Tg(this,b);},"pR",function(b){return SA(this,b);},"jS",function(){return Me(this);},"kI",function(){return Hn(this);}],J5,0,E,[],3,3,0,0,E8,0,E,[J5],1,3,0,0,XP,0,E8,[E1,Dc],0,3,0,0]);
$rt_metadata([AE$,0,Fg,[],1,3,0,0,UN,0,E,[],0,3,0,0,AAp,0,E,[],0,3,0,0,Ef,"Enum",8,E,[Dm,Dc],1,3,0,["dQ",function(b){return ANs(this,b);},"eK",function(){return AQw(this);},"kD",function(b){return AP_(this,b);}],Eq,0,Ef,[],12,3,0,0,NG,0,E,[],3,3,0,0,Rl,0,E,[NG],0,0,0,["Cy",function(b){Cx(this,b);},"EH",function(b){ATp(this,b);}],AK6,0,E,[CV],1,3,0,0,Tn,0,E,[CV],3,3,0,0,S5,0,E,[Tn],0,0,0,["UD",function(){return ATm(this);}],GN,0,E,[H3],1,3,0,0,AKJ,0,GN,[],0,3,0,["zk",function(){return AU_(this);},"mR",function(b,
c,d){return AZN(this,b,c,d);},"uD",function(){return AVJ(this);}],Hs,0,GN,[],0,3,0,0,MT,0,E,[],3,3,0,0,Ni,0,Hs,[MT],0,3,0,0,KR,0,E,[Dm],1,3,0,["kD",function(b){return AWt(this,b);}],SP,0,Hs,[],0,3,0,["zk",function(){return AM7(this);},"mR",function(b,c,d){return AGL(this,b,c,d);},"uD",function(){return ASb(this);}],K4,0,E,[],1,3,0,0,Y1,0,K4,[],0,3,0,0,AEa,0,E,[],0,3,0,0,HH,0,E,[],0,3,0,["xD",function(b,c,d){return AVv(this,b,c,d);}],Rb,0,HH,[],0,0,0,["xD",function(b,c,d){return ATk(this,b,c,d);}],CO,"Entity",
11,E,[],1,3,0,["zQ",function(){B4(this);},"EV",function(){AAh(this);},"Ar",function(){TW(this);},"yr",function(){return ATa(this);},"B_",function(b){AE1(this,b);},"Ai",function(b){Vb(this,b);},"DC",function(){return AAu(this);},"s$",function(b){return Zd(this,b);},"vf",function(b){AWL(this,b);},"sS",function(b){AVS(this,b);},"eQ",function(b,c){return AED(this,b,c);},"kk",function(){return AYI(this);},"p9",function(){return AXw(this);},"yy",function(b,c){AZM(this,b,c);},"sG",function(b){return APD(this,b);},
"x3",function(b){return APN(this,b);},"yF",function(){AAB(this);},"xw",function(){return AYK(this);}],Ea,"EntityLiving",11,CO,[],0,3,0,["kk",function(){return AP6(this);},"p9",function(){return ATd(this);},"p1",function(){return AKU(this);},"EV",function(){AH2(this);},"yF",function(){AFK(this);},"dR",function(){AHb(this);},"eQ",function(b,c){return XD(this,b,c);},"ui",function(){return AXU(this);},"s3",function(){return AN_(this);},"sJ",function(){return AON(this);},"BT",function(b){AIE(this,b);},"k3",function()
{return ANw(this);},"Ai",function(b){AKB(this,b);},"m5",function(){X2(this);},"us",function(){ALc(this);},"sO",function(b,c,d){return Vk(this,b,c,d);},"Ar",function(){Xk(this);}],Hu,"EntityCreature",11,Ea,[],0,3,0,["us",function(){AKk(this);},"mu",function(b,c){AHi(this,b,c);},"vw",function(){return AFQ(this);}],Dp,"EntityMonster",11,Hu,[],0,3,0,["m5",function(){YH(this);},"dR",function(){AFY(this);},"vw",function(){return AFj(this);},"eQ",function(b,c){return Wp(this,b,c);},"mu",function(b,c){ALg(this,b,c);
},"qR",function(b,c,d){return Xa(this,b,c,d);},"sO",function(b,c,d){return Us(this,b,c,d);}],HD,"EntityZombie",11,Dp,[],0,3,0,["m5",function(){AC8(this);},"k3",function(){return APE(this);}],HR,"EntitySkeleton",11,Dp,[],0,3,0,["m5",function(){ADD(this);},"mu",function(b,c){AC3(this,b,c);},"k3",function(){return AQ4(this);}],In,"EntityCreeper",11,Dp,[],0,3,0,["us",function(){VD(this);},"mu",function(b,c){Wr(this,b,c);},"k3",function(){return AM3(this);}],IN,"EntitySpider",11,Dp,[],0,3,0,["vw",function(){return ALK(this);
},"mu",function(b,c){Ve(this,b,c);},"k3",function(){return ARK(this);}],FH,"EntityAnimal",11,Hu,[],1,3,0,["qR",function(b,c,d){return AI9(this,b,c,d);},"sO",function(b,c,d){return AFV(this,b,c,d);}],I6,"EntitySheep",11,FH,[],0,3,0,["eQ",function(b,c){return AB9(this,b,c);},"ui",function(){return AWS(this);},"s3",function(){return AUX(this);},"sJ",function(){return AQK(this);}],He,"EntityPig",11,FH,[],0,3,0,["ui",function(){return ANu(this);},"s3",function(){return AYy(this);},"sJ",function(){return AO_(this);
},"sG",function(b){return AQo(this,b);},"k3",function(){return APi(this);}],Df,0,E,[Dc],0,3,0,0,Lp,0,E,[],0,3,0,0,UX,0,E,[],0,3,0,0,P,"Block",11,E,[],0,3,J,["fE",function(){return AYh(this);},"dO",function(){return APz(this);},"zo",function(b,c,d,e){return AAy(this,b,c,d,e);},"oc",function(b,c,d,e,f){return ABL(this,b,c,d,e,f);},"sn",function(b,c,d,e,f){return XA(this,b,c,d,e,f);},"em",function(b,c){return AW3(this,b,c);},"bZ",function(b){return AOT(this,b);},"nr",function(b,c,d,e){return Jq(this,b,c,d,e);},
"BW",function(b,c,d,e,f,g){AGm(this,b,c,d,e,f,g);},"gK",function(b,c,d,e){return Le(this,b,c,d,e);},"dy",function(){return AVC(this);},"nD",function(b,c){return AWr(this,b,c);},"nN",function(){return AUF(this);},"ew",function(b,c,d,e,f){AC0(this,b,c,d,e,f);},"jM",function(b,c,d,e,f){AJN(this,b,c,d,e,f);},"l7",function(b,c,d,e,f){VT(this,b,c,d,e,f);},"ep",function(b,c,d,e,f){UH(this,b,c,d,e,f);},"lc",function(){return AUN(this);},"e2",function(b,c,d,e){WN(this,b,c,d,e);},"ko",function(b,c,d,e){VP(this,b,c,d,
e);},"d_",function(b){return AQM(this,b);},"dq",function(b,c){return ANH(this,b,c);},"Ez",function(b,c,d,e,f){Uc(this,b,c,d,e,f);},"DJ",function(b,c,d,e,f,g){AAm(this,b,c,d,e,f,g);},"vR",function(b){return ARX(this,b);},"mm",function(b,c,d,e,f,g){return IC(this,b,c,d,e,f,g);},"qZ",function(b,c,d,e){ALk(this,b,c,d,e);},"oh",function(){return AOF(this);},"fg",function(b,c,d,e){return Z7(this,b,c,d,e);},"ku",function(b,c,d,e,f){return ABY(this,b,c,d,e,f);},"ng",function(b,c,d,e,f){AEG(this,b,c,d,e,f);},"s4",function(b,
c,d,e,f){UA(this,b,c,d,e,f);},"pr",function(b,c,d,e,f){V0(this,b,c,d,e,f);},"o2",function(b,c,d,e,f,g){ABo(this,b,c,d,e,f,g);},"vj",function(b,c,d,e){AKs(this,b,c,d,e);}],OI,0,E,[],3,3,0,0,AEe,0,Fn,[E1,Dc,OI],0,3,0,["kI",function(){return CZ(this);},"q4",function(b){return U(this,b);}],Dh,0,E,[CV],3,3,0,0,Qn,0,E,[Dh],0,0,0,["fP",function(){return APo(this);}],Qm,0,E,[Dh],0,0,0,["fP",function(){return AM_(this);}],Ql,0,E,[Dh],0,0,0,["fP",function(){return ARp(this);}],Qk,0,E,[Do],0,0,0,["f7",function(b){return AWD(this,
b);}],Py,0,E,[],0,0,0,0,Cq,"IllegalArgumentException",8,B5,[],0,3,0,0,Rr,"UnsupportedCharsetException",6,Cq,[],0,3,0,0,El,"NullPointerException",8,B5,[],0,3,0,0,WO,0,E,[CV],4,3,0,0,EC,0,E,[],1,3,0,0]);
$rt_metadata([Ki,0,EC,[Dm],1,3,0,0,AAs,0,E,[],0,3,0,0,NT,0,E,[],0,3,0,0,Ek,0,E,[H3,LF],1,3,0,["fO",function(b,c,d){ANi(this,b,c,d);},"r0",function(){AYd(this);},"km",function(){AYH(this);}],Fl,0,Ek,[],0,3,0,0,WK,0,Fl,[],0,3,0,0,Tc,0,Ek,[],0,0,0,["mr",function(b){AQF(this,b);}],AAz,"IllegalCharsetNameException",6,Cq,[],0,3,0,0,KQ,0,E,[],128,3,0,0,QI,0,KQ,[],4,3,0,0,G9,0,E,[],0,3,0,0,ACA,0,G9,[],4,0,0,0,X4,0,G9,[],4,0,0,0,J1,"BlockStone",11,P,[],0,3,0,["dq",function(b,c){return AX6(this,b,c);}],VR,"BlockGrass",
11,P,[],0,3,0,["bZ",function(b){return AW_(this,b);},"ew",function(b,c,d,e,f){YY(this,b,c,d,e,f);},"dq",function(b,c){return AR3(this,b,c);}],AC2,"BlockDirt",11,P,[],0,3,0,0,B0,0,E,[],0,3,0,["mh",function(){return AXP(this);},"c3",function(){return ASD(this);},"qy",function(){return AXt(this);},"sk",function(){return AVK(this);}],Fb,"BlockFlower",11,P,[],0,3,0,["fg",function(b,c,d,e){return AGI(this,b,c,d,e);},"pH",function(b){return AQJ(this,b);},"ep",function(b,c,d,e,f){ADF(this,b,c,d,e,f);},"ew",function(b,
c,d,e,f){ZD(this,b,c,d,e,f);},"Db",function(b,c,d,e){return AIG(this,b,c,d,e);},"gK",function(b,c,d,e){return ABC(this,b,c,d,e);},"dy",function(){return AWl(this);},"fE",function(){return ANN(this);},"dO",function(){return AXe(this);}],AHz,"BlockSapling",11,Fb,[],0,3,0,["ew",function(b,c,d,e,f){ZM(this,b,c,d,e,f);}],GH,0,P,[],1,3,0,["bZ",function(b){return ANd(this,b);},"fE",function(){return AZG(this);},"dy",function(){return AZd(this);},"nD",function(b,c){return AX4(this,b,c);},"oc",function(b,c,d,e,f){return ALP(this,
b,c,d,e,f);},"gK",function(b,c,d,e){return Ua(this,b,c,d,e);},"dO",function(){return AXz(this);},"dq",function(b,c){return AUh(this,b,c);},"d_",function(b){return AWe(this,b);},"o2",function(b,c,d,e,f,g){AHQ(this,b,c,d,e,f,g);},"lc",function(){return AOt(this);},"zo",function(b,c,d,e){return ZX(this,b,c,d,e);},"ew",function(b,c,d,e,f){ALs(this,b,c,d,e,f);},"oh",function(){return AZa(this);},"jM",function(b,c,d,e,f){Uy(this,b,c,d,e,f);},"e2",function(b,c,d,e){AL8(this,b,c,d,e);},"ep",function(b,c,d,e,f){AF6(this,
b,c,d,e,f);}],ZL,"BlockFlowing",11,GH,[],0,3,0,["ew",function(b,c,d,e,f){AJm(this,b,c,d,e,f);},"e2",function(b,c,d,e){XE(this,b,c,d,e);}],ADK,"BlockStationary",11,GH,[],0,3,0,["ep",function(b,c,d,e,f){ABO(this,b,c,d,e,f);}],HE,"BlockSand",11,P,[],0,3,0,["e2",function(b,c,d,e){AL6(this,b,c,d,e);},"ep",function(b,c,d,e,f){AMs(this,b,c,d,e,f);},"ew",function(b,c,d,e,f){AJ$(this,b,c,d,e,f);},"lc",function(){return AUM(this);}],ACh,"BlockGravel",11,HE,[],0,3,0,["dq",function(b,c){return AZP(this,b,c);}],UO,"BlockOre",
11,P,[],0,3,0,["dq",function(b,c){return AUZ(this,b,c);},"d_",function(b){return AR2(this,b);}],AAF,"BlockLog",11,P,[],0,3,0,["d_",function(b){return AYe(this,b);},"dq",function(b,c){return ANg(this,b,c);},"bZ",function(b){return AOP(this,b);}],J8,0,P,[],0,3,0,["oc",function(b,c,d,e,f){return AK0(this,b,c,d,e,f);}],Yg,"BlockLeaves",11,J8,[],0,3,0,["ew",function(b,c,d,e,f){ADz(this,b,c,d,e,f);},"d_",function(b){return APQ(this,b);},"dq",function(b,c){return AVw(this,b,c);},"dy",function(){return AT2(this);},
"ng",function(b,c,d,e,f){AMF(this,b,c,d,e,f);}],AF5,"BlockSponge",11,P,[],0,3,0,["e2",function(b,c,d,e){AFC(this,b,c,d,e);},"ko",function(b,c,d,e){AH7(this,b,c,d,e);}],K6,0,P,[],0,3,0,["dy",function(){return AY1(this);},"oc",function(b,c,d,e,f){return Uq(this,b,c,d,e,f);}],AKR,"BlockGlass",11,K6,[],0,3,0,["d_",function(b){return APa(this,b);}],ACp,"BlockMushroom",11,Fb,[],0,3,0,["pH",function(b){return AD4(this,b);},"Db",function(b,c,d,e){return YS(this,b,c,d,e);}],W$,"BlockOreBlock",11,P,[],0,3,0,["bZ",function(b)
{return AU7(this,b);}],U$,"BlockStep",11,P,[],0,3,0,["bZ",function(b){return AZo(this,b);},"dy",function(){return AV1(this);},"ep",function(b,c,d,e,f){Xg(this,b,c,d,e,f);},"e2",function(b,c,d,e){WZ(this,b,c,d,e);},"dq",function(b,c){return ARq(this,b,c);},"fE",function(){return APS(this);},"oc",function(b,c,d,e,f){return AMQ(this,b,c,d,e,f);}],AIR,"BlockTNT",11,P,[],0,3,0,["bZ",function(b){return AVn(this,b);},"d_",function(b){return AOz(this,b);},"qZ",function(b,c,d,e){ABU(this,b,c,d,e);},"l7",function(b,c,
d,e,f){AMz(this,b,c,d,e,f);}],YJ,"BlockBookshelf",11,P,[],0,3,0,["bZ",function(b){return AZH(this,b);},"d_",function(b){return AU8(this,b);}],TJ,"BlockObsidian",11,J1,[],0,3,0,["d_",function(b){return AUd(this,b);},"dq",function(b,c){return AOq(this,b,c);}],AJa,"BlockTorch",11,P,[],0,3,0,["gK",function(b,c,d,e){return AHY(this,b,c,d,e);},"dy",function(){return ATt(this);},"fE",function(){return APe(this);},"dO",function(){return ASB(this);},"fg",function(b,c,d,e){return AGV(this,b,c,d,e);},"s4",function(b,c,
d,e,f){AIp(this,b,c,d,e,f);},"ew",function(b,c,d,e,f){AMq(this,b,c,d,e,f);},"e2",function(b,c,d,e){W9(this,b,c,d,e);},"ep",function(b,c,d,e,f){AE8(this,b,c,d,e,f);},"mm",function(b,c,d,e,f,g){return AFd(this,b,c,d,e,f,g);},"jM",function(b,c,d,e,f){AKT(this,b,c,d,e,f);}],AJy,"BlockFire",11,P,[],0,3,0,["gK",function(b,c,d,e){return ALU(this,b,c,d,e);},"dy",function(){return AV6(this);},"fE",function(){return AXX(this);},"dO",function(){return AP8(this);},"d_",function(b){return APA(this,b);},"lc",function(){return ARZ(this);
},"ew",function(b,c,d,e,f){TI(this,b,c,d,e,f);},"nN",function(){return AUn(this);},"fg",function(b,c,d,e){return AH4(this,b,c,d,e);},"ep",function(b,c,d,e,f){Xc(this,b,c,d,e,f);},"e2",function(b,c,d,e){X5(this,b,c,d,e);},"jM",function(b,c,d,e,f){AMG(this,b,c,d,e,f);}],DN,0,P,[],1,3,0,["e2",function(b,c,d,e){AJc(this,b,c,d,e);},"ko",function(b,c,d,e){AGM(this,b,c,d,e);}],VY,"BlockMobSpawner",11,DN,[],0,3,0,["rp",function(){return APX(this);},"dy",function(){return AV8(this);}],Vo,"BlockStairs",11,P,[],0,3,0,
["dy",function(){return AVV(this);},"fE",function(){return AO$(this);},"dO",function(){return AQ9(this);},"oc",function(b,c,d,e,f){return AJ_(this,b,c,d,e,f);},"BW",function(b,c,d,e,f,g){AEw(this,b,c,d,e,f,g);},"ep",function(b,c,d,e,f){ACO(this,b,c,d,e,f);},"jM",function(b,c,d,e,f){AJO(this,b,c,d,e,f);},"pr",function(b,c,d,e,f){WT(this,b,c,d,e,f);},"l7",function(b,c,d,e,f){YX(this,b,c,d,e,f);},"zo",function(b,c,d,e){return AHy(this,b,c,d,e);},"vR",function(b){return AYf(this,b);},"oh",function(){return AXH(this);
},"dq",function(b,c){return AUW(this,b,c);},"d_",function(b){return ASh(this,b);},"em",function(b,c){return AP9(this,b,c);},"bZ",function(b){return AXD(this,b);},"sn",function(b,c,d,e,f){return AHJ(this,b,c,d,e,f);},"lc",function(){return AOV(this);},"nr",function(b,c,d,e){return AG3(this,b,c,d,e);},"o2",function(b,c,d,e,f,g){Yk(this,b,c,d,e,f,g);},"nN",function(){return AQW(this);},"nD",function(b,c){return AQ5(this,b,c);},"fg",function(b,c,d,e){return AG9(this,b,c,d,e);},"e2",function(b,c,d,e){Yf(this,b,c,
d,e);},"ko",function(b,c,d,e){Uu(this,b,c,d,e);},"DJ",function(b,c,d,e,f,g){ACZ(this,b,c,d,e,f,g);},"Ez",function(b,c,d,e,f){AHC(this,b,c,d,e,f);},"ng",function(b,c,d,e,f){ALe(this,b,c,d,e,f);},"ew",function(b,c,d,e,f){ALh(this,b,c,d,e,f);},"ku",function(b,c,d,e,f){return ABZ(this,b,c,d,e,f);},"qZ",function(b,c,d,e){U3(this,b,c,d,e);}],ABb,"BlockChest",11,DN,[],0,3,0,["sn",function(b,c,d,e,f){return Z0(this,b,c,d,e,f);},"bZ",function(b){return AYk(this,b);},"fg",function(b,c,d,e){return AEZ(this,b,c,d,e);},
"ko",function(b,c,d,e){AMS(this,b,c,d,e);},"ku",function(b,c,d,e,f){return ABg(this,b,c,d,e,f);},"rp",function(){return ARF(this);}],AFB,"BlockGears",11,P,[],0,3,0,["gK",function(b,c,d,e){return AAi(this,b,c,d,e);},"dy",function(){return ANM(this);},"fE",function(){return AVx(this);},"dO",function(){return AXc(this);},"d_",function(b){return AYL(this,b);},"nN",function(){return AOc(this);}],ACI,"BlockWorkbench",11,P,[],0,3,0,["bZ",function(b){return APt(this,b);},"ku",function(b,c,d,e,f){return AB6(this,b,c,
d,e,f);}],AFA,"BlockCrops",11,Fb,[],0,3,0,["pH",function(b){return AQY(this,b);},"ew",function(b,c,d,e,f){AEl(this,b,c,d,e,f);},"em",function(b,c){return AXV(this,b,c);},"dO",function(){return AU$(this);},"l7",function(b,c,d,e,f){AIb(this,b,c,d,e,f);},"dq",function(b,c){return ASE(this,b,c);},"d_",function(b){return AVj(this,b);}],ALd,"BlockFarmland",11,P,[],0,3,0,["gK",function(b,c,d,e){return WJ(this,b,c,d,e);},"dy",function(){return AOs(this);},"fE",function(){return AS3(this);},"em",function(b,c){return AZO(this,
b,c);},"ew",function(b,c,d,e,f){AHR(this,b,c,d,e,f);},"ng",function(b,c,d,e,f){AFH(this,b,c,d,e,f);},"ep",function(b,c,d,e,f){T5(this,b,c,d,e,f);},"dq",function(b,c){return APP(this,b,c);}],ABk,"BlockFurnace",11,DN,[],0,3,0,["e2",function(b,c,d,e){X7(this,b,c,d,e);},"sn",function(b,c,d,e,f){return AFa(this,b,c,d,e,f);},"jM",function(b,c,d,e,f){ZR(this,b,c,d,e,f);},"bZ",function(b){return AOr(this,b);},"ku",function(b,c,d,e,f){return AB8(this,b,c,d,e,f);},"rp",function(){return AXE(this);}],RF,"BlockSign",11,
DN,[],0,3,0,["dO",function(){return AQ2(this);},"fE",function(){return AWd(this);},"dy",function(){return AV9(this);},"rp",function(){return ATb(this);},"fg",function(b,c,d,e){return AB2(this,b,c,d,e);},"dq",function(b,c){return AX2(this,b,c);},"ep",function(b,c,d,e,f){VH(this,b,c,d,e,f);}],DF,"TileEntity",11,E,[],0,3,0,["rY",function(){AA6(this);},"ji",function(){XS(this);}]]);
$rt_metadata([HN,0,DF,[],0,3,0,0,W,0,E,[],0,3,Bw,["hP",function(b,c,d,e,f,g,h){return ABJ(this,b,c,d,e,f,g,h);},"vz",function(b,c){return AZp(this,b,c);},"mN",function(b,c,d){return AMx(this,b,c,d);},"qw",function(b,c){APd(this,b,c);},"vt",function(b,c,d,e,f){AVr(this,b,c,d,e,f);},"mF",function(b){return AZV(this,b);},"nE",function(b){return AO8(this,b);},"v9",function(b,c){AUC(this,b,c);}],ADy,"BlockDoor",11,P,[],0,3,0,["em",function(b,c){return AZc(this,b,c);},"dy",function(){return ASy(this);},"fE",function()
{return AP4(this);},"dO",function(){return ANE(this);},"nr",function(b,c,d,e){return ABI(this,b,c,d,e);},"gK",function(b,c,d,e){return Vq(this,b,c,d,e);},"vj",function(b,c,d,e){ACQ(this,b,c,d,e);},"pr",function(b,c,d,e,f){AET(this,b,c,d,e,f);},"ku",function(b,c,d,e,f){return Zo(this,b,c,d,e,f);},"ep",function(b,c,d,e,f){X_(this,b,c,d,e,f);},"dq",function(b,c){return AX1(this,b,c);},"mm",function(b,c,d,e,f,g){return TC(this,b,c,d,e,f,g);},"fg",function(b,c,d,e){return AEY(this,b,c,d,e);}],YB,"BlockLadder",11,
P,[],0,3,0,["gK",function(b,c,d,e){return YP(this,b,c,d,e);},"nr",function(b,c,d,e){return ZA(this,b,c,d,e);},"dy",function(){return APL(this);},"fE",function(){return AV4(this);},"dO",function(){return AYB(this);},"fg",function(b,c,d,e){return AIv(this,b,c,d,e);},"s4",function(b,c,d,e,f){Uh(this,b,c,d,e,f);},"ep",function(b,c,d,e,f){AFE(this,b,c,d,e,f);},"d_",function(b){return AVL(this,b);}],AIy,"BlockMinecartTrack",11,P,[],0,3,0,["gK",function(b,c,d,e){return Ye(this,b,c,d,e);},"dy",function(){return APv(this);
},"mm",function(b,c,d,e,f,g){return AGr(this,b,c,d,e,f,g);},"vj",function(b,c,d,e){AG7(this,b,c,d,e);},"em",function(b,c){return ATP(this,b,c);},"fE",function(){return AUx(this);},"dO",function(){return ASj(this);},"d_",function(b){return ATW(this,b);},"fg",function(b,c,d,e){return AIx(this,b,c,d,e);},"e2",function(b,c,d,e){AIh(this,b,c,d,e);},"ep",function(b,c,d,e,f){AEL(this,b,c,d,e,f);}],AMO,0,W,[],0,3,0,["hP",function(b,c,d,e,f,g,h){return AKS(this,b,c,d,e,f,g,h);}],ACS,0,KR,[],0,3,0,0,K1,0,EC,[Dm],1,3,
0,0,La,0,Ki,[],1,0,0,0,SM,0,La,[],0,0,0,0,ALF,0,K1,[],0,0,0,0,RE,0,E,[],3,3,0,0,J6,0,EC,[Dm,Hb,Jj,RE],1,3,0,0,Nm,"GZIPException",2,BU,[],0,3,0,0,L5,0,B0,[],0,3,0,["c3",function(){return AVh(this);},"qy",function(){return AVP(this);},"sk",function(){return ANn(this);}],Ka,0,B0,[],0,3,0,["mh",function(){return AZ3(this);},"c3",function(){return ARh(this);}],LQ,0,B0,[],0,3,0,["c3",function(){return AWN(this);},"qy",function(){return AYW(this);},"sk",function(){return AOu(this);}],Fj,0,W,[],0,3,0,["vz",function(b,
c){return AYc(this,b,c);},"qw",function(b,c){AWV(this,b,c);},"vt",function(b,c,d,e,f){APr(this,b,c,d,e,f);},"mF",function(b){return APT(this,b);}],Mw,0,Fj,[],0,3,A1J,0,RI,0,Fj,[],0,3,A1L,["nE",function(b){return AVE(this,b);}],Sv,0,Fj,[],0,3,A1q,0,AAo,0,W,[],0,3,0,["hP",function(b,c,d,e,f,g,h){return AEF(this,b,c,d,e,f,g,h);}],J0,0,W,[],0,3,0,["mN",function(b,c,d){return Np(this,b,c,d);}],AJr,0,W,[],0,3,0,["mN",function(b,c,d){return ABR(this,b,c,d);}],AF2,0,W,[],0,3,0,["vz",function(b,c){return ASi(this,b,
c);},"qw",function(b,c){AXv(this,b,c);},"vt",function(b,c,d,e,f){AQy(this,b,c,d,e,f);},"mF",function(b){return ATO(this,b);}],AIN,0,J0,[],0,3,0,["mN",function(b,c,d){return AJ5(this,b,c,d);}],AIa,0,W,[],0,3,0,["hP",function(b,c,d,e,f,g,h){return ALf(this,b,c,d,e,f,g,h);}],R6,0,W,[],0,3,0,["hP",function(b,c,d,e,f,g,h){return AAJ(this,b,c,d,e,f,g,h);}],Fc,0,W,[],0,3,0,0,TQ,0,W,[],0,3,0,["hP",function(b,c,d,e,f,g,h){return XQ(this,b,c,d,e,f,g,h);}],ACD,0,W,[],0,3,0,["hP",function(b,c,d,e,f,g,h){return T_(this,
b,c,d,e,f,g,h);}],AEb,0,W,[],0,3,0,["hP",function(b,c,d,e,f,g,h){return ZE(this,b,c,d,e,f,g,h);}],AL4,0,W,[],0,3,0,["mN",function(b,c,d){return AC6(this,b,c,d);}],AJH,0,W,[],0,3,0,["hP",function(b,c,d,e,f,g,h){return YG(this,b,c,d,e,f,g,h);}],ALy,0,W,[],0,3,0,["v9",function(b,c){ABP(this,b,c);},"qw",function(b,c){APn(this,b,c);}],LK,0,E,[],3,0,0,0,ABA,0,E,[LK],4,3,0,["Bn",function(b){AM5(this,b);},"mw",function(){ARx(this);},"v3",function(){return ANP(this);},"jG",function(b,c,d){AXK(this,b,c,d);}],Ph,"CloneNotSupportedException",
8,Bz,[],0,3,0,0,Lg,0,E,[],4,3,0,0,Is,0,E,[],3,3,0,0,JX,0,E,[Is,E1],0,0,0,["dQ",function(b){return AVl(this,b);},"eK",function(){return ATj(this);}],Hg,0,JX,[],0,0,0,0,BT,"IndexOutOfBoundsException",8,B5,[],0,3,0,0,Mc,"StringIndexOutOfBoundsException",8,BT,[],0,3,0,0,FK,0,E,[],3,3,0,0,Sy,0,E,[FK],0,3,0,["jp",function(){AD1(this);}],ES,"EOFException",7,BU,[],0,3,0,0,Eb,0,E,[],0,3,0,0,EL,0,E,[],0,3,0,0,JV,0,E,[],4,0,0,0]);
$rt_metadata([M9,0,Ek,[],0,0,0,["mr",function(b){AWb(this,b);}],IK,0,E,[],0,3,0,0,AG8,0,E,[],4,3,0,0,HL,0,E,[],0,3,0,0,JH,0,J6,[],1,0,0,0,Xo,0,JH,[],0,0,0,0,J2,0,E,[],1,3,0,0,LT,0,E,[],0,3,0,0,VU,0,E,[CV],1,3,0,0,M$,0,E,[CV],3,3,0,0,Uw,0,E,[CV,M$],1,3,0,0,I4,0,E,[],4,0,0,0,Lr,0,J2,[],1,3,0,0,M_,0,Lr,[],0,3,0,0,AIZ,0,E,[],4,3,0,0,Fk,0,E,[],4,0,0,0,JO,0,E,[],4,0,0,0,Gn,"UTFDataFormatException",7,BU,[],0,3,0,0,Ts,"NegativeArraySizeException",8,B5,[],0,3,0,0,WD,0,E,[JB],1,3,0,["LJ",function(b){return AZ0(this,b);
},"Tm",function(){return AOa(this);}],IL,"IllegalMonitorStateException",8,B5,[],0,3,0,0,VJ,0,E,[],0,0,0,0,DK,"IllegalStateException",8,Bz,[],0,3,0,0,ADA,0,E,[CV],1,3,0,0,PK,0,E,[FK],0,3,0,["jp",function(){ALr(this);}],Og,0,E,[FK],0,3,0,0,F1,0,BU,[],0,3,0,0,S0,"AssertionError",8,EA,[],0,3,0,0,Ei,0,Bz,[],0,3,0,0,L3,0,E,[],1,3,0,0,Pm,0,E,[],3,3,0,0,Ps,0,E,[],3,3,0,0,MN,0,E,[FK,Pm,Ps],0,0,0,["jp",function(){AJW(this);}],JS,0,L3,[],1,3,0,0,On,0,JS,[],0,3,0,0,Du,"Inflate$Return",2,Bz,[],0,0,0,0,AH$,0,E,[E1],0,3,0,
0,Mu,0,E,[LK],4,3,0,["jG",function(b,c,d){ATN(this,b,c,d);},"mw",function(){AWq(this);},"Bn",function(b){AYO(this,b);},"v3",function(){return AXg(this);}],HF,0,E,[],0,3,0,0,Nx,0,E,[],3,3,0,0,Bp,0,Bo,[Nx],0,3,BO,0,Yd,0,E,[],0,3,0,0,Lq,0,E,[],0,3,0,0,G6,0,E,[],0,3,P$,0,AH8,0,E,[],0,3,0,0,AMp,0,Ek,[],0,3,0,["mr",function(b){AXr(this,b);},"fO",function(b,c,d){Oz(this,b,c,d);}],Ii,"ArrayStoreException",8,B5,[],0,3,0,0,L0,0,E,[],3,3,0,0,FN,0,E,[L0],0,3,0,["dL",function(b,c,d){return X9(this,b,c,d);},"nj",function(b,
c,d){return XB(this,b,c,d);},"ea",function(b,c,d){return Z$(this,b,c,d);},"q1",function(b,c,d){return AHV(this,b,c,d);},"j9",function(b,c,d){return Wj(this,b,c,d);}],Kb,0,E,[],0,3,Bv,0]);
$rt_metadata([AHT,0,E,[],0,3,0,0,Fo,0,E,[],0,3,0,0,CI,0,Fo,[],0,3,0,["nH",function(b,c){UG(this,b,c);},"EL",function(b,c,d){Vf(this,b,c,d);},"y$",function(b,c,d){ATL(this,b,c,d);},"is",function(b){AHv(this,b);},"hK",function(){AKA(this);},"pT",function(){AUj(this);},"n1",function(){ADc(this);},"mQ",function(){return AOK(this);}],AAC,0,E,[],0,3,0,0,Ks,0,E,[Dc],1,3,0,0,DX,0,Ks,[Dc],0,3,0,0,LU,0,E,[],3,3,0,0,HA,0,E,[Dc,LU],1,3,0,0,Sn,0,E,[LU],3,3,0,0,LH,0,E,[Sn],3,3,0,0,O5,0,E,[],3,3,0,0,Kn,0,E,[O5],3,3,0,0,Rf,
0,HA,[Dc,LH,Kn],0,3,0,0,Sl,0,E,[LH],3,3,0,0,O0,0,E,[Kn],3,3,0,0,F7,0,HA,[Dc,Sl,O0],0,3,0,0,PR,0,E,[FK],0,3,0,["jp",function(){ADC(this);}],AJv,"CoderMalfunctionError",6,EA,[],0,3,0,0,GQ,0,E,[],3,3,0,0,QP,0,E,[GQ],3,3,0,0,Yx,0,E,[QP],0,0,0,0,OK,0,E,[],0,0,0,0,HW,"EntityPlayer",11,Ea,[],0,3,0,["yF",function(){ABf(this);},"BT",function(b){AF4(this,b);},"yy",function(b,c){ARv(this,b,c);},"p1",function(){return AVz(this);},"eQ",function(b,c){return Uk(this,b,c);}],ABS,"EntityPlayerSP",11,HW,[],0,3,0,["us",function()
{Wv(this);},"m5",function(){AGb(this);}],AEC,0,E,[],0,3,0,0,NC,0,E,[],0,3,0,0,RA,0,E,[],0,3,0,0,EQ,0,E,[],3,3,0,0,RM,0,E,[EQ],0,3,0,["i5",function(b,c){return DT(this,b,c);},"iE",function(b,c){AAY(this,b,c);},"fQ",function(b){return OV(this,b);},"fs",function(){return ARs(this);},"ji",function(){V9(this);}],C_,0,Hw,[],0,3,0,0,D0,0,CI,[],1,3,0,["hE",function(b,c,d){XU(this,b,c,d);},"EL",function(b,c,d){AIF(this,b,c,d);},"y$",function(b,c,d){AYG(this,b,c,d);},"nH",function(b,c){We(this,b,c);},"n1",function(){
WE(this);},"mQ",function(){return AZA(this);}],AKl,0,D0,[],0,3,0,["n1",function(){AGw(this);},"rD",function(b){ANJ(this,b);},"ki",function(){AR1(this);},"hE",function(b,c,d){Zt(this,b,c,d);},"rf",function(b){T4(this,b);}],Lh,0,Fo,[],0,3,0,0,Tp,0,E,[],3,3,0,0,Wc,0,E,[Tp],0,3,0,0,I7,0,E,[],0,3,0,0,Sm,0,E,[],0,3,0,0,Nz,0,E,[],0,3,0,0,AFO,0,DZ,[],0,3,0,["nG",function(){AR4(this);}],XX,0,DZ,[],0,3,0,["nG",function(){AYa(this);}],AMk,0,DZ,[],0,3,0,["nG",function(){AUt(this);}],ACn,0,CI,[],0,3,0,["pT",function(){AVH(this);
},"nH",function(b,c){AIo(this,b,c);},"hK",function(){ADu(this);},"is",function(b){X3(this,b);},"hE",function(b,c,d){Vs(this,b,c,d);}],My,0,E,[],0,3,0,0,HC,0,E,[],0,3,0,0,Oy,0,E,[],0,0,0,0,ACB,0,E,[],0,3,0,0,B6,0,E,[],4,3,0,0,VA,0,E,[EQ],0,3,0,["fQ",function(b){return Fq(this,b);},"i5",function(b,c){return AAk(this,b,c);},"iE",function(b,c){AUy(this,b,c);},"fs",function(){return AYg(this);},"ji",function(){Zk(this);}],Wl,0,E,[EQ],0,3,0,["fQ",function(b){return AVp(this,b);},"i5",function(b,c){return APy(this,
b,c);},"iE",function(b,c){MR(this,b,c);},"fs",function(){return AQ8(this);},"ji",function(){AHW(this);}],GA,0,E,[],0,3,0,["E1",function(){AF0(this);},"rj",function(b){return APW(this,b);},"qc",function(){return AYM(this);}]]);
$rt_metadata([YO,0,GA,[],0,0,0,["rj",function(b){return ASa(this,b);},"E1",function(){AIH(this);}],NU,0,GA,[],0,0,0,["rj",function(b){return AT4(this,b);},"qc",function(){return APu(this);}],P4,0,E,[],0,3,0,0,Si,0,E,[],4,3,0,0,Px,0,E,[],4,3,0,0,KZ,0,EC,[Dm],1,3,0,0,MK,0,E,[],4,3,0,0,C1,0,E,[],1,3,0,0,ADG,0,C1,[],0,3,0,["hR",function(b,c,d,e,f,g){YE(this,b,c,d,e,f,g);}],NO,0,E,[Do],0,0,0,["f7",function(b){return AXa(this,b);}],NN,0,E,[Do],0,0,0,["f7",function(b){return AXj(this,b);}],Hc,0,KZ,[],1,0,0,0,Q9,0,
Hc,[],0,0,0,["vV",function(b){return AJh(this,b);},"sZ",function(b,c){AIk(this,b,c);},"lH",function(){return AM0(this);}],Sc,0,E,[],4,3,0,0,R_,0,E,[],4,3,0,0,Tf,0,E,[],4,3,0,0,CJ,"EntityFX",11,CO,[],0,3,0,["dR",function(){AGc(this);},"jN",function(b,c,d,e,f,g,h){AH6(this,b,c,d,e,f,g,h);},"u8",function(){return AXB(this);}],XZ,0,E,[],0,3,0,0,MD,0,E,[],0,3,0,0,HS,"UnsupportedOperationException",8,B5,[],0,3,0,0,E5,"ReadOnlyBufferException",5,HS,[],0,3,0,0,F$,"BufferOverflowException",5,B5,[],0,3,0,0,Fz,"BufferUnderflowException",
5,B5,[],0,3,0,0,Qd,0,E,[],0,3,0,0,OE,0,CI,[],0,3,0,0,Kt,0,CI,[],0,3,0,["hK",function(){AIX(this);},"nH",function(b,c){AG6(this,b,c);},"is",function(b){AI6(this,b);},"hE",function(b,c,d){AJY(this,b,c,d);},"mQ",function(){return AWJ(this);}],WF,0,CI,[],0,3,0,["hK",function(){ALw(this);},"is",function(b){YV(this,b);},"pT",function(){ATw(this);},"hE",function(b,c,d){Zi(this,b,c,d);}],JM,0,E,[],0,3,0,0,SC,0,JM,[],0,3,0,0,Oa,0,E,[],3,3,0,0,ABc,0,E,[Oa],0,3,0,0,G1,0,E,[EQ],0,3,0,["fH",function(){return AWs(this);},
"uO",function(){return AWi(this);},"fQ",function(b){return ANb(this,b);},"i5",function(b,c){return AUk(this,b,c);},"iE",function(b,c){APJ(this,b,c);},"fs",function(){return AYY(this);},"ji",function(){Ur(this);}],Vw,"EntityDiggingFX",11,CJ,[],0,3,0,["u8",function(){return ANy(this);},"jN",function(b,c,d,e,f,g,h){UD(this,b,c,d,e,f,g,h);}],Jf,"ConcurrentModificationException",4,B5,[],0,3,0,0,Ic,"EntityRainFX",11,CJ,[],0,3,0,["jN",function(b,c,d,e,f,g,h){AFF(this,b,c,d,e,f,g,h);},"dR",function(){AI8(this);}],Ho,
0,Hc,[],1,0,0,["lH",function(){return AQk(this);}],MM,0,Ho,[],0,0,0,["vV",function(b){return APf(this,b);},"sZ",function(b,c){AMZ(this,b,c);}],RW,0,Ho,[],0,0,0,["vV",function(b){return ASw(this,b);},"sZ",function(b,c){ANA(this,b,c);}],AFM,0,E,[EN],0,3,0,["oE",function(b,c){return ASM(this,b,c);}],K9,0,E,[],0,3,0,0,Sg,0,E,[EN],0,3,0,["oE",function(b,c){return AYF(this,b,c);}],Gk,0,E,[],0,3,0,0,GK,0,E,[],0,3,0,0,GM,0,E,[],0,3,0,0,Iq,"NoSuchElementException",4,B5,[],0,3,0,0,R5,0,E,[],0,3,0,["dQ",function(b){return AWo(this,
b);},"eK",function(){return ASW(this);}],Ma,0,Eu,[Dm],0,3,0,0,Gf,0,E,[],0,0,0,0,K$,0,E,[],4,3,0,0,Pb,0,E,[],0,3,0,0]);
$rt_metadata([Dj,0,C1,[],0,3,0,["DW",function(b,c,d,e,f,g){VX(this,b,c,d,e,f,g);},"j0",function(b,c){return AKo(this,b,c);},"zv",function(b){return AVB(this,b);},"zy",function(b,c,d){return AWv(this,b,c,d);},"uW",function(b,c){AYn(this,b,c);},"hR",function(b,c,d,e,f,g){AJu(this,b,c,d,e,f,g);}],Mo,0,Dj,[],0,3,0,["j0",function(b,c){return U1(this,b,c);},"DW",function(b,c,d,e,f,g){AGR(this,b,c,d,e,f,g);},"hR",function(b,c,d,e,f,g){Yl(this,b,c,d,e,f,g);}],JN,0,Fo,[],0,3,0,0,Kk,0,E,[KP],0,3,0,0,NH,0,E,[],3,3,0,0,IT,
0,Kk,[NH],0,3,0,0,L_,0,E,[CV],3,3,0,0,NM,0,E,[L_],0,0,0,["Cp",function(){return AS4(this);}],SI,0,E,[EN],0,3,0,["oE",function(b,c){return AVf(this,b,c);}],SG,0,E,[EN],0,3,0,0,Pd,0,Ev,[],4,0,0,0,Pc,0,E8,[],4,0,0,0,Pe,0,Fn,[],4,0,0,0,Hd,0,E,[],1,3,0,0,WI,0,Hd,[],0,3,0,["zG",function(b,c,d,e,f){TA(this,b,c,d,e,f);}],Lm,0,DF,[],0,3,0,["rY",function(){YC(this);}],AMe,0,Hd,[],0,3,0,["zG",function(b,c,d,e,f){ALx(this,b,c,d,e,f);}],AKN,0,Dj,[],0,3,0,["zv",function(b){return AWk(this,b);},"j0",function(b,c){return T9(this,
b,c);}],Qz,0,Dj,[],0,3,0,["j0",function(b,c){return AG0(this,b,c);}],Fa,0,DO,[],0,3,0,["gW",function(b,c,d,e,f,g){AYS(this,b,c,d,e,f,g);}],Nc,0,Fa,[],0,3,0,0,Qi,0,Dj,[],0,3,0,["j0",function(b,c){return ALL(this,b,c);}],Yi,0,Fa,[],0,3,0,0,ALA,0,Fa,[],0,3,0,0,XK,0,Dj,[],0,3,0,["uW",function(b,c){AXx(this,b,c);},"zy",function(b,c,d){return ARS(this,b,c,d);}],GG,0,KD,[],0,3,0,["mX",function(b,c,d,e,f,g){ATX(this,b,c,d,e,f,g);}],ADp,0,GG,[],0,3,0,0,Jt,"EntityGiant",11,Dp,[],0,3,0,["qR",function(b,c,d){return AJF(this,
b,c,d);}],QC,0,Dj,[],0,3,0,["uW",function(b,c){AZz(this,b,c);}],Qp,0,C1,[],0,3,0,["hR",function(b,c,d,e,f,g){AEp(this,b,c,d,e,f,g);}],Hh,"EntityPainting",11,CO,[],0,3,0,["dR",function(){YT(this);},"kk",function(){return AQm(this);},"eQ",function(b,c){return ZT(this,b,c);}],Wa,0,C1,[],0,3,0,["hR",function(b,c,d,e,f,g){AJo(this,b,c,d,e,f,g);}],HV,"EntityArrow",11,CO,[],0,3,0,["dR",function(){AJ3(this);},"vf",function(b){AXi(this,b);}],OD,0,C1,[],0,3,0,["hR",function(b,c,d,e,f,g){YR(this,b,c,d,e,f,g);}],Er,"EntityItem",
11,CO,[],0,3,0,["dR",function(){AEA(this);},"DC",function(){return ZJ(this);},"B_",function(b){AHd(this,b);},"eQ",function(b,c){return Rv(this,b,c);},"vf",function(b){AZJ(this,b);}],Kw,"EntityTNTPrimed",11,CO,[],0,3,0,["kk",function(){return AY2(this);},"dR",function(){TF(this);}],AJs,0,C1,[],0,3,0,["hR",function(b,c,d,e,f,g){AGU(this,b,c,d,e,f,g);}],Ia,"EntityFallingSand",11,CO,[],0,3,0,["kk",function(){return AQH(this);},"dR",function(){AHt(this);}],ALb,0,C1,[],0,3,0,["hR",function(b,c,d,e,f,g){ALE(this,b,
c,d,e,f,g);}],Fp,"EntityMinecart",11,CO,[EQ],0,3,0,["x3",function(b){return AM1(this,b);},"yr",function(){return ARY(this);},"p9",function(){return AXk(this);},"xw",function(){return AOZ(this);},"eQ",function(b,c){return AF7(this,b,c);},"kk",function(){return AYJ(this);},"zQ",function(){AJQ(this);},"dR",function(){AMT(this);},"sS",function(b){AUG(this,b);},"sG",function(b){return AX$(this,b);}],ALR,0,C1,[],0,3,0,["hR",function(b,c,d,e,f,g){AKK(this,b,c,d,e,f,g);}],Se,0,E,[],0,3,0,0,Xf,0,E,[],0,3,0,0,ADb,0,DO,
[],0,3,0,["gW",function(b,c,d,e,f,g){AQA(this,b,c,d,e,f,g);}],ADB,0,DO,[],0,3,0,["gW",function(b,c,d,e,f,g){AT9(this,b,c,d,e,f,g);}],AAj,0,DO,[],0,3,0,0,HB,0,E,[],0,3,0,0,Ha,0,E,[L0],0,3,0,["dL",function(b,c,d){return Gq(this,b,c,d);},"q1",function(b,c,d){return Wu(this,b,c,d);},"ea",function(b,c,d){return YD(this,b,c,d);},"nj",function(b,c,d){return LO(this,b,c,d);},"j9",function(b,c,d){return XH(this,b,c,d);}],Fr,0,Bz,[],0,3,0,0,Q$,"NoSuchMethodException",8,Fr,[],0,3,0,0]);
$rt_metadata([Rq,0,E,[],0,3,0,0,M7,0,Ft,[],0,0,0,["pR",function(b){return ASf(this,b);},"jS",function(){return K_(this);}],Qa,0,E,[L_],0,0,0,["Cp",function(){return AZY(this);}],AK7,0,E,[],4,3,0,0,SW,0,DF,[EQ],0,3,0,["fQ",function(b){return AYw(this,b);},"i5",function(b,c){return AXM(this,b,c);},"iE",function(b,c){AOL(this,b,c);},"fs",function(){return ANR(this);},"rY",function(){ABV(this);},"ji",function(){VQ(this);}],P2,0,DF,[EQ],0,3,0,["fH",function(){return AOX(this);},"fQ",function(b){return Oi(this,b);
},"i5",function(b,c){return ATg(this,b,c);},"iE",function(b,c){ACL(this,b,c);},"uO",function(){return AX0(this);},"fs",function(){return AW8(this);}],CA,0,E,[],1,3,0,0,AKm,0,CA,[],0,3,0,["f3",function(b){AW1(this,b);},"fX",function(b){AYt(this,b);},"eC",function(){return AW0(this);}],Nl,"BufferUnderflowException",6,B5,[],0,3,0,0,PE,"BufferOverflowException",6,B5,[],0,3,0,0,O2,"MalformedInputException",6,F1,[],0,3,0,["ml",function(){return AO1(this);}],Nh,"UnmappableCharacterException",6,F1,[],0,3,0,["ml",function()
{return AOE(this);}],Hm,0,E,[],0,0,0,["oJ",function(){return Fi(this);}],Ro,0,Hm,[GQ],0,0,0,["lx",function(){return Ko(this);}],Sx,0,E,[],0,3,0,0,Z1,0,CI,[],0,3,0,["hK",function(){AMf(this);},"is",function(b){Zr(this,b);},"hE",function(b,c,d){ABu(this,b,c,d);}],Mf,0,CI,[],0,3,0,["hK",function(){AJ4(this);},"rl",function(){AQa(this);},"is",function(b){AMK(this,b);},"EC",function(b){AFG(this,b);},"hE",function(b,c,d){Z4(this,b,c,d);}],Qc,0,E,[GQ],0,0,0,["oJ",function(){return RV(this);},"lx",function(){return SN(this);
}],J$,"InstantiationException",8,Fr,[],0,3,0,0,P1,"IllegalAccessException",8,Fr,[],0,3,0,0,AGk,0,E,[],4,3,0,0,VZ,0,E,[],4,3,0,0,N3,0,E,[],0,3,AQ_,0,Xz,0,JN,[],0,3,0,0,RZ,0,CI,[],0,3,0,["hK",function(){AEq(this);},"is",function(b){ADh(this,b);},"nH",function(b,c){AGC(this,b,c);},"hE",function(b,c,d){ABN(this,b,c,d);}],Rc,0,Mf,[],0,3,0,["rl",function(){ATe(this);},"EC",function(b){AGX(this,b);}],LA,0,E,[],0,3,0,0,Ug,0,LA,[],0,3,0,0,LJ,0,CA,[],0,3,0,["fX",function(b){AYq(this,b);},"f3",function(b){ASd(this,b);
},"eC",function(){return AOg(this);}],AL$,0,E,[],0,3,0,0,TT,0,E,[],0,3,0,0,TM,0,E,[],0,3,0,0,ZG,0,E,[],0,3,0,0,AL9,0,E,[],0,3,0,0,AAx,0,E,[],0,3,0,0,Uf,0,E,[EN],0,0,0,["oE",function(b,c){return ARy(this,b,c);}],KB,0,CA,[],0,3,0,["f3",function(b){AX3(this,b);},"fX",function(b){AXF(this,b);},"eC",function(){return AWE(this);}],KU,0,CA,[],0,3,0,["f3",function(b){APm(this,b);},"fX",function(b){ARB(this,b);},"eC",function(){return AVY(this);}],Jz,0,CA,[],0,3,0,["f3",function(b){ATo(this,b);},"fX",function(b){ARf(this,
b);},"eC",function(){return AOI(this);}],LV,0,CA,[],0,3,0,["f3",function(b){ANh(this,b);},"fX",function(b){AZT(this,b);},"eC",function(){return ATV(this);}],MP,0,CA,[],0,3,0,["f3",function(b){ANa(this,b);},"fX",function(b){AXA(this,b);},"eC",function(){return AMX(this);}],Kv,0,CA,[],0,3,0,["f3",function(b){AWR(this,b);},"fX",function(b){AOw(this,b);},"eC",function(){return ASA(this);}],KI,0,CA,[],0,3,0,["f3",function(b){AVt(this,b);},"fX",function(b){AW6(this,b);},"eC",function(){return AYD(this);}],Mk,0,CA,
[],0,3,0,["f3",function(b){AZs(this,b);},"fX",function(b){ARg(this,b);},"eC",function(){return ANp(this);}],NZ,0,CA,[],0,3,0,["f3",function(b){AYA(this,b);},"fX",function(b){ARb(this,b);},"eC",function(){return AQU(this);}],Qf,0,E,[Dh],0,0,0,["fP",function(){return AN5(this);}],Qe,0,E,[Dh],0,0,0,["fP",function(){return AP3(this);}],Sp,0,D0,[],0,3,0,["ki",function(){AUz(this);},"rf",function(b){AIU(this,b);}],Ti,0,D0,[],0,3,0,["n1",function(){UZ(this);},"rD",function(b){AWz(this,b);},"ki",function(){ATl(this);
},"rf",function(b){AFi(this,b);}],AHk,0,D0,[],0,3,0,["ki",function(){AYT(this);},"rf",function(b){AIs(this,b);}]]);
$rt_metadata([CF,"EnumArt",11,Ef,[],12,3,0,0,Rh,0,CI,[],0,3,0,["hK",function(){ABE(this);},"is",function(b){AKW(this,b);},"hE",function(b,c,d){UK(this,b,c,d);}],M6,0,Ev,[],0,0,0,0,I8,"MinecraftError",11,EA,[],0,3,0,0,Q5,0,E,[],0,3,0,0,RP,0,Hm,[GQ],0,0,0,["lx",function(){return JC(this);}],K7,0,Eu,[Dm],0,3,0,0,QJ,0,E,[HJ],3,3,0,0,Pk,0,E,[QJ],3,3,0,0,PV,0,Ev,[Pk],0,3,0,0,PJ,0,E,[J5],3,3,0,0,Mt,0,E,[PJ],3,3,0,0,AEV,0,E8,[E1,Dc,Mt],0,3,0,0,N0,0,E,[EN],0,0,0,0,Lc,0,E,[],0,3,0,0,Im,0,E,[Dm],0,3,0,["dQ",function(b)
{return AZg(this,b);},"eK",function(){return AXo(this);},"kD",function(b){return Qo(this,b);}],Jv,0,E,[],3,3,0,0,R9,0,E,[Jv],0,3,0,0,Nw,0,E,[],3,3,0,0,Tk,0,E,[Nw],0,3,0,0,Pu,0,E,[Jv],0,3,0,0,RX,0,E,[],0,3,0,0,Pa,0,E,[],3,3,0,0,ABn,0,Fl,[Pa],0,3,0,0,ABh,0,E,[],0,3,0,0,LG,0,E,[],4,3,0,0,GE,0,E,[],1,3,0,0,AHu,0,GE,[],0,3,0,0,Yp,0,E,[],0,3,0,0,MY,0,GE,[],0,3,0,0,QA,0,E,[],0,3,0,0,Ej,0,Ef,[],12,3,0,0,RD,0,Eu,[Dm],0,3,0,0,Qj,0,E,[Dh],0,0,0,["fP",function(){return AU2(this);}],Qg,0,E,[Dh],0,0,0,["fP",function(){return AQI(this);
}],Or,0,E,[Dh],0,0,0,["fP",function(){return AX_(this);}],Ov,0,E,[Dh],0,0,0,["fP",function(){return AW2(this);}],Op,0,E,[Dh],0,0,0,["fP",function(){return AV2(this);}],Oq,0,E,[Dh],0,0,0,["fP",function(){return AUi(this);}],Os,0,E,[Dh],0,0,0,["fP",function(){return AW7(this);}],Ot,0,E,[Dh],0,0,0,["fP",function(){return AS9(this);}],DW,0,E,[],1,3,0,0,Ol,0,DW,[],0,3,0,0,Mb,0,E,[],0,3,0,0,PH,0,CI,[],0,3,0,["hK",function(){Zz(this);},"n1",function(){AIj(this);},"pT",function(){AQP(this);},"is",function(b){ACt(this,
b);},"nH",function(b,c){Yw(this,b,c);},"hE",function(b,c,d){W7(this,b,c,d);}],Hj,0,Ef,[],12,3,0,0,KH,0,E,[Is,Dc],0,3,0,0,Jw,0,KH,[],0,0,0,0,AHA,0,Fl,[],0,3,0,["km",function(){AQQ(this);},"fO",function(b,c,d){AQu(this,b,c,d);},"r0",function(){AUS(this);},"mr",function(b){APY(this,b);}],SS,0,E,[],0,3,0,0]);
$rt_metadata([LY,"ArrayIndexOutOfBoundsException",8,BT,[],0,3,0,0,ALD,0,DW,[],0,3,0,0,B$,0,DW,[],0,3,0,0,BL,0,DW,[],0,3,0,0,Cd,0,DW,[],0,3,0,0,ADr,0,E,[],4,3,0,0,Pz,"EntityBubbleFX",11,CJ,[],0,3,0,["dR",function(){U2(this);}],AAM,"EntitySmokeFX",11,CJ,[],0,3,0,["jN",function(b,c,d,e,f,g,h){AE3(this,b,c,d,e,f,g,h);},"dR",function(){AGG(this);}],N9,"EntityExplodeFX",11,CJ,[],0,3,0,["jN",function(b,c,d,e,f,g,h){AMm(this,b,c,d,e,f,g,h);},"dR",function(){AAf(this);}],MC,"EntityFlameFX",11,CJ,[],0,3,0,["jN",function(b,
c,d,e,f,g,h){AK8(this,b,c,d,e,f,g,h);},"s$",function(b){return AMH(this,b);},"dR",function(){Wx(this);}],WH,"EntityLavaFX",11,CJ,[],0,3,0,["s$",function(b){return AE4(this,b);},"jN",function(b,c,d,e,f,g,h){AB7(this,b,c,d,e,f,g,h);},"dR",function(){AF9(this);}],ALT,"EntitySplashFX",11,Ic,[],0,3,0,0,GT,0,E,[],0,0,0,0,Rw,0,E,[],0,3,0,0,XO,0,E,[],0,3,0,0,Rg,"EntityPickupFX",11,CJ,[],0,3,0,["jN",function(b,c,d,e,f,g,h){AG4(this,b,c,d,e,f,g,h);},"dR",function(){Wq(this);},"u8",function(){return AN9(this);}],UW,0,
E,[],0,3,0,0,GI,0,E,[],0,3,0,["dQ",function(b){return AUH(this,b);},"eK",function(){return AOG(this);}]]);
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
"Sky","Block","buffer is null","Length out of bounds: ","Offset out of bounds: ","random.explode","OW KNOWS!"]);
Cp.prototype.toString=function(){return $rt_ustr(this);};
Cp.prototype.valueOf=Cp.prototype.toString;E.prototype.toString=function(){return $rt_ustr(AN3(this));};
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
=$rt_mainStarter(ALo);
(function(){var c;c=UC.prototype;c.dispatchEvent=c.HI;c.addEventListener=c.R9;c.removeEventListener=c.T5;c.getLength=c.Pn;c.get=c.MU;c.addEventListener=c.NX;c.removeEventListener=c.Jl;c=S6.prototype;c.handleEvent=c.f7;c=Ta.prototype;c.handleEvent=c.f7;c=Tb.prototype;c.handleEvent=c.f7;c=S$.prototype;c.handleEvent=c.f7;c=S_.prototype;c.handleEvent=c.f7;c=S8.prototype;c.handleEvent=c.f7;c=S9.prototype;c.handleEvent=c.f7;c=S7.prototype;c.handleEvent=c.f7;c=NL.prototype;c.handleEvent=c.f7;c=NK.prototype;c.handleEvent
=c.f7;c=S5.prototype;c.stateChanged=c.UD;c=Qn.prototype;c.handleEvent=c.fP;c=Qm.prototype;c.handleEvent=c.fP;c=Ql.prototype;c.handleEvent=c.fP;c=Qk.prototype;c.handleEvent=c.f7;c=WD.prototype;c.getLength=c.Tm;c.get=c.LJ;c=NO.prototype;c.handleEvent=c.f7;c=NN.prototype;c.handleEvent=c.f7;c=NM.prototype;c.onTimer=c.Cp;c=Qa.prototype;c.onTimer=c.Cp;c=Qf.prototype;c.handleEvent=c.fP;c=Qe.prototype;c.handleEvent=c.fP;c=Qj.prototype;c.handleEvent=c.fP;c=Qg.prototype;c.handleEvent=c.fP;c=Or.prototype;c.handleEvent
=c.fP;c=Ov.prototype;c.handleEvent=c.fP;c=Op.prototype;c.handleEvent=c.fP;c=Oq.prototype;c.handleEvent=c.fP;c=Os.prototype;c.handleEvent=c.fP;c=Ot.prototype;c.handleEvent=c.fP;})();
})();

//# sourceMappingURL=app.js.map