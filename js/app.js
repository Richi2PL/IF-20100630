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
function $rt_cls(cls){return Ka(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return A1h(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bq.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return E; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A2m());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return AMX();}
function $rt_setThread(t){return EL(t);}
function $rt_createException(message){return VU(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var M=$rt_throw;var S=$rt_compare;var A2n=$rt_nullCheck;var K=$rt_cls;var O=$rt_createArray;var Pt=$rt_isInstance;var CM=$rt_nativeThread;var C=$rt_suspending;var Ex=$rt_resuming;var Es=$rt_invalidPointer;var B=$rt_s;var Bt=$rt_eraseClinit;var Bh=$rt_imul;var Bf=$rt_wrapException;
function E(){this.b3=null;this.$id$=0;}
function A2o(){var a=new E();SN(a);return a;}
function A0X(b){var c;if(b.b3===null)RN(b);if(b.b3.dI===null)b.b3.dI=A2p;else if(b.b3.dI!==A2p){c=new DK;Bl(c,B(0));M(c);}b=b.b3;b.eH=b.eH+1|0;}
function A2g(b){var c,d;if(!Gz(b)&&b.b3.dI===A2p){c=b.b3;d=c.eH-1|0;c.eH=d;if(!d)b.b3.dI=null;Gz(b);return;}b=new IM;Q(b);M(b);}
function ZC(b){if(b.b3===null)RN(b);if(b.b3.dI===null)b.b3.dI=A2p;if(b.b3.dI!==A2p)AP3(b,1);else{b=b.b3;b.eH=b.eH+1|0;}}
function RN(b){b.b3=A0A();}
function AP3(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.CA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EK=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A1Q(b,c,callback);}catch($e){callback.EK($rt_exception($e));}});}
function A1Q(b,c,d){var e,f,g;e=A2p;if(b.b3===null){RN(b);EL(e);b=b.b3;b.eH=b.eH+c|0;Cx(d,null);return;}if(b.b3.dI===null){b.b3.dI=e;EL(e);b=b.b3;b.eH=b.eH+c|0;Cx(d,null);return;}f=b.b3;if(f.gB===null)f.gB=AP5();f=f.gB;g=new Ok;g.w5=e;g.w6=b;g.w3=c;g.w4=d;d=g;f.push(d);}
function LH(b){var c;if(!Gz(b)&&b.b3.dI===A2p){c=b.b3;c.eH=c.eH-1|0;if(c.eH<=0){c.dI=null;if(c.gB!==null&&!H_(c.gB)){c=new PN;c.z6=b;N_(c);}else Gz(b);}return;}b=new IM;Q(b);M(b);}
function Gz(a){var b;b=a.b3;if(b===null)return 1;a:{if(b.dI===null&&!(b.gB!==null&&!H_(b.gB))){if(b.pD===null)break a;if(H_(b.pD))break a;}return 0;}a.b3=null;return 1;}
function SN(a){return;}
function C4(a){return Ka(a.constructor);}
function AVn(a){return KQ(a);}
function Od(a,b){return a!==b?0:1;}
function AN7(a){var b,c,d,e,f,g,h,i;b=new Ba;Y(b);b=H(H(b,Hh(C4(a))),B(1));c=KQ(a);if(!c)d=B(2);else{if(!c)e=32;else{f=0;e=c>>>16;if(e)f=16;else e=c;g=e>>>8;if(!g)g=e;else f=f|8;e=g>>>4;if(!e)e=g;else f=f|4;g=e>>>2;if(!g)g=e;else f=f|2;if(g>>>1)f=f|1;e=(32-f|0)-1|0;}g=(((32-e|0)+4|0)-1|0)/4|0;h=$rt_createCharArray(g);i=h.data;e=(g-1|0)*4|0;g=0;while(e>=0){f=g+1|0;i[g]=HB(c>>>e&15,16);e=e-4|0;g=f;}d=A1h(h);}return N(H(b,d));}
function KQ(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AQm(a){var b,c,d;if(!Pt(a,E3)&&a.constructor.$meta.item===null){b=new Pm;Q(b);M(b);}b=ANa(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Tl(a){var b,c;if(!(a.b3!==null&&a.b3.dI===A2p?1:0)){b=new IM;Q(b);M(b);}b=a.b3.pD;if(b===null)return;while(!H_(b)){c=AJu(b);if(!c.Ud())N_(c);}a.b3.pD=null;}
function H3(){E.call(this);}
var A2q=null;var A2r=null;var A2s=null;function A2t(){var a=new H3();ALm(a);return a;}
function ALm(a){return;}
function ALq(b){var c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AFg();ABJ();AKS();VS();AKA();ADW();Yr();AME();YK();AFP();AL4();U4();ACV();Vb();AGP();ACA();AAS();AAU();AJk();AKK();ADe();AI5();Xo();AA1();ZZ();AC7();TK();Zf();V2();AGY();AFc();AJr();ACq();AMz();AIT();AGF();V7();AFv();AJO();ZV();AHw();AF$();AHv();ADN();ABx();AKH();AEY();WD();ADs();AGT();W6();AHU();AC4();AAW();c
=window.minecraftOpts;if(c===null)d=null;else{d=O(Cp,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));A2q=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){}else if($$je instanceof DD){c=$$je;break a;}else{throw $$e;}}return;}g=AYo();h=new JK;Sq(h,g);h.vM=0;h.ln=g;Ml(c,h);return;case 1:b:{c:{d:{try{We(c,g);if(C()){break _;}break d;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){}else if($$je instanceof DD)
{c=$$je;break c;}else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Bf($$e);if($$je instanceof DD){c=$$je;}else{throw $$e;}}}g=AYo();h=new JK;Sq(h,g);h.vM=0;h.ln=g;Ml(c,h);return;}c=new G8;i=JH();j=KI();g=new Q_;g.Az=0;g.cy=c;g.tL=(-1);g.tN=(-1);g.tM=(-1);g.gH=0.0;g.ly=0.0;g.m2=0.0;g.lZ=0;k=new Re;b=O(E5,4);d=b.data;d[0]=K(HG);d[1]=K(HU);d[2]=K(Ip);d[3]=K(IO);OS(k,100,K(Dp),b);k.CI=g;g.yk=k;h=new HK;b=O(E5,2);d=b.data;d[0]=K(I7);d[1]=K(Hg);OS(h,20,K(FJ),b);g.yB=h;c.ce=g;g=new PD;g.zN=1.0;g.kC=0.0;g.ml=1.0;g.cI
=20.0;g.q5=B1();g.qc=Long_div(D7(),Long_fromInt(1000000));c.bb=g;c.jZ=null;c.bm=0;c.A=null;g=new Pa;g.mL=B(3);g.kY=B(3);g.jN=B1();g.kF=0;g.e6=c;c.hy=g;c.ek=A1x(c);c.bD=0;c.cK=0;c.Dk=null;c.Cd=0;c.hh=0;c.CG=Ty(0.0);c.bV=null;c.zZ=A0x();c.yG=A0U();c.f9=1;c.ku=B(3);c.f$=Long_fromInt(-1);c.bj=0;c.b2=0;c.cv=0;c.c8=B1();c.CB=FW(16);g=new Sb;Qy(g,B(4));g.vR=c;g.AR=1;P_(g);c.b5=i;c.bw=j;A2r=c;c=A2r;g=new Kv;A1a();g.m1=B(5);g.Cg=B(6);c.jZ=g;A2r.jZ.CK=B(7);A2s=A0i(A2r,B(8));P_(A2s);return;default:Es();}}CM().s(b,c,d,
e,f,g,h,i,j,k,$p);}
function AFg(){A2q=null;A2r=null;A2s=null;}
function KT(){}
function E5(){var a=this;E.call(a);a.sp=null;a.fm=null;a.k9=null;}
var A2u=0;function Ka(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new E5;c.fm=b;d=c;b.classObject=d;}return c;}
function AUU(a){return a.fm;}
function QW(a,b){var c;b=b;c=a.fm;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&Sa(b.constructor,c)?1:0;}
function Nt(a,b){return Sa(b.fm,a.fm);}
function Hh(a){if(a.sp===null)a.sp=$rt_str(a.fm.$meta.name);return a.sp;}
function Fb(a){return a.fm.$meta.primitive?1:0;}
function ACi(a){return AMj(a.fm)===null?0:1;}
function I0(a){return Ka(AMj(a.fm));}
function AWR(){HG.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];HU.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[CO,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Ip.$meta.methods
=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[CO,$rt_floatcls()],returnType
:$rt_voidcls(),callable:null},{name:"setCreeperFlashTime",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_floatcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];IO.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:CO,callable:null},{name:"attackEntity",modifiers
:0,accessLevel:2,parameterTypes:[CO,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];I7.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO],returnType
:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getHurtSound",modifiers:0,accessLevel
:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null}];Hg.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers
:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[HZ],returnType:$rt_booleancls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];HQ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null}];P6.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers
:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:B6,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:B6,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),B6],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cp,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable
:null},{name:"writeToNBT",modifiers:4,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null}];S3.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes
:[$rt_intcls()],returnType:B6,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:B6,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),B6],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cp,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers
:4,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getCookProgressScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getBurnTimeRemainingScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"isBurning",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"canSmelt",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"smeltItem",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSmeltingResult",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getItemBurnTime",modifiers:0,accessLevel
:1,parameterTypes:[B6],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Lr.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"anyPlayerInRange",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name
:"updateDelay",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null}];Dp.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable
:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:CO,callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[CO,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes
:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null}];Ea.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"getTexture",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cp,callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"getEyeHeight",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_floatcls(),callable:null},{name:"onEntityUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"spawnExplosionParticle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updateRidden",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"setSize",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable
:null},{name:"heal",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Cp,callable
:null},{name:"knockBack",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"onDeath",modifiers:0,accessLevel:3,parameterTypes:[CO],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"fall",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"moveEntityWithHeading",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"isOnLadder",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"isEntityAlive",modifiers:0,accessLevel:3,parameterTypes:[],returnType:
$rt_booleancls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"jump",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onEntityDeath",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes
:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null},{name:"kill",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Ju.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null}];Hj.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO,$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"setDirection",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"getArtSize",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_voidcls(),callable:null},{name:"onValidSurface",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers
:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null}];HY.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO,Ea],returnType:$rt_voidcls(),callable:null},{name:"setArrowHeading",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers:0,accessLevel:3,parameterTypes:[HZ],returnType:$rt_voidcls(),callable:null}];Er.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO,$rt_doublecls(),$rt_doublecls(),
$rt_doublecls(),B6],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"handleWaterMovement",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"pushOutOfBlocks",modifiers:0,accessLevel:1,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable
:null},{name:"dealFireDamage",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers
:0,accessLevel:3,parameterTypes:[HZ],returnType:$rt_voidcls(),callable:null}];KA.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO,$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_voidcls(),callable:null},{name:"createExplosion",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null}];Ic.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[FO,$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes
:[AKp],returnType:$rt_voidcls(),callable:null},{name:"getWorld",modifiers:0,accessLevel:3,parameterTypes:[],returnType:FO,callable:null}];Fs.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO],returnType:$rt_voidcls(),callable:null},{name:"getCollisionBox",modifiers:0,accessLevel:3,parameterTypes:[CO],returnType:HI,callable:null},{name:"getBoundingBox",modifiers:0,accessLevel:3,parameterTypes:[],returnType:HI,callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_booleancls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FO,$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"getYOffset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_doublecls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[CO,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable
:null},{name:"setEntityDead",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getPosOffset",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:IL,callable:null},{name:"getPos",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:IL,callable:null},{name:
"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[AKp],returnType:$rt_voidcls(),callable:null},{name:"applyEntityCollision",modifiers:0,accessLevel:3,parameterTypes:[CO],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType
:B6,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:B6,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),B6],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cp,callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[HZ],returnType:$rt_booleancls(),callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];}
function AMG(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Fb(a)&&!ACi(a)){if(a.k9===null){if(!A2u){A2u=1;AWR();}b=a.fm.$meta.methods;a.k9=O(IU,b.length);c=0;d=0;while(d<b.length){e=b[d];if(DU($rt_str(e.name),B(9))){f=e.parameterTypes;g=O(E5,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=Ka(f[i]);i=i+1|0;}h=a.k9.data;j=c+1|0;k=new IU;l=$rt_str(e.name);m=e.modifiers;i=e.accessLevel;f=H7(e.callable,"call");k.xg=a;k.DU=l;k.s7=m;k.z9=i;k.l1=g;k.tz=f;h[c]=k;c=j;}d=d+1|0;}a.k9=Rw(a.k9,c);}return a.k9.nu();}return O(IU,0);}
function SH(a,b){var c,d,e,f,g,h,i,j,k,l;c=AMG(a).data;d=c.length;e=0;while(true){if(e>=d){f=new Rb;Q(f);M(f);}g=c[e];if(!(ZK(g)&1)?0:1){a:{h=W5(g);if(h===b)i=1;else{if(h!==null&&b!==null){j=h.data;h=b.data;k=j.length;if(k==h.length){i=0;while(i<k){f=j[i];l=h[i];if(!(f===l?1:f!==null?Od(f,l):l!==null?0:1)){i=0;break a;}i=i+1|0;}i=1;break a;}}i=0;}}if(i)break;}e=e+1|0;}return g;}
function H$(a){return Ka(a.fm.$meta.superclass);}
function Vn(a){var b;b=a.fm;if(!A2v){APP();A2v=1;}b=ATK(b);if(b!==null)return b;b=new Kb;Q(b);M(b);}
function AE9(){E.call(this);}
function A2w(){var a=new AE9();AWZ(a);return a;}
function AWZ(a){return;}
function Cj(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function H7(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function QC(){E.call(this);}
var A2v=0;function A2x(){var a=new QC();AZV(a);return a;}
function AZV(a){return;}
function ANa(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Sa(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Sa(d[e],c))return 1;e=e+1|0;}return 0;}
function APP(){var c='$$constructor$$';Cp[c]=T9;E[c]=SN;AG7[c]=AS0;HC[c]=AOR;EA[c]=AOm;DD[c]=Q;AJt[c]=API;Ht[c]=AQj;AGA[c]=AUx;B5[c]=ANo;BB[c]=ARK;Ba[c]=AZL;GD[c]=Y;H3[c]=ALm;W2[c]=AT$;AE9[c]=AWZ;QC[c]=AZV;Fx[c]=ACT;Bo[c]=R5;Tb[c]=ATE;Th[c]=ARp;Ti[c]=APY;Tf[c]=AVt;Tg[c]=AZ8;Td[c]=AUX;Te[c]=AP$;Tc[c]=AUb;NQ[c]=ATv;NP[c]=AUT;Z_[c]=AT6;BU[c]=AUM;MT[c]=AWm;Sf[c]=ARr;AAF[c]=APe;VB[c]=AUd;KH[c]=I6;WE[c]=AZC;AFC[c]=AS9;AKR[c]=ASN;XU[c]=AOP;LG[c]=ZG;Rc[c]=AK1;Y6[c]=AY8;Df[c]=AUj;Kh[c]=ARH;Lu[c]=ADu;AEk[c]=APf;UU[c]
=ASf;Cq[c]=ANX;AEg[c]=AWc;El[c]=AOl;AAx[c]=ANh;Tj[c]=AUv;PB[c]=VI;QM[c]=AUh;KU[c]=Mv;WT[c]=ARh;HQ[c]=ARY;DF[c]=AIc;ACY[c]=ATk;BZ[c]=AKT;Nr[c]=AYk;L9[c]=ART;Kd[c]=ANp;LU[c]=AXi;ABG[c]=AR$;Pm[c]=AWD;Mg[c]=ASF;BP[c]=AOc;EU[c]=APU;Nc[c]=AWI;AHc[c]=ANy;Fn[c]=ACX;Go[c]=AZT;AI4[c]=AT4;Tz[c]=AX_;IM[c]=AW8;DK[c]=AYR;VP[c]=ATU;S7[c]=ASU;F2[c]=AOE;Ei[c]=AXx;AMs[c]=AQk;My[c]=Va;AId[c]=AX7;CI[c]=DI;Fr[c]=Lb;Ik[c]=AVW;Bp[c]=AJF;Yi[c]=AN6;DX[c]=AVr;Rj[c]=AY1;F8[c]=ARP;NE[c]=AZi;AFV[c]=AU7;X2[c]=AUr;ACt[c]=AU3;OO[c]=ASw;AEI[c]
=APj;NH[c]=AIt;Wq[c]=AM5;ADM[c]=AVQ;HV[c]=AQG;E8[c]=AWK;F_[c]=AV6;E4[c]=AS$;Kx[c]=AYW;WK[c]=APk;ABi[c]=AYn;P6[c]=ATt;S3[c]=AOD;Jg[c]=ATG;OI[c]=AWL;SI[c]=AAV;JO[c]=ACK;MH[c]=AGd;GL[c]=YN;GO[c]=ABS;Is[c]=AXt;Ms[c]=ADl;Kn[c]=AO6;Gl[c]=V_;Lc[c]=AMi;NR[c]=AZM;SO[c]=AOK;SM[c]=AV0;Gg[c]=ALa;Ld[c]=AFn;Pg[c]=AM1;Pi[c]=AYZ;Ph[c]=AY2;Pj[c]=AUE;WN[c]=ANw;Lr[c]=AXL;AMg[c]=AP2;AKQ[c]=AU4;Nh[c]=AQE;Yn[c]=AYX;ALC[c]=AOB;XP[c]=ARL;ADv[c]=APt;GH[c]=AXM;Qt[c]=ARz;Wg[c]=ARF;OH[c]=AM7;AJw[c]=AW7;ALe[c]=AP8;ALT[c]=AY7;Sj[c]=AN0;Xk[c]
=AN8;ADh[c]=AOo;ADH[c]=AVv;AAo[c]=AUS;Rb[c]=AWJ;Fu[c]=AY5;Ru[c]=AJH;AK$[c]=AUY;AKp[c]=AX$;Nq[c]=AZD;PH[c]=AQ6;Kb[c]=AW1;P5[c]=AZn;LF[c]=YP;N8[c]=AGw;AGr[c]=AXb;V5[c]=AXY;LO[c]=AO1;KF[c]=AU1;KY[c]=AV$;JA[c]=ATb;LZ[c]=ARZ;MU[c]=ARW;Kz[c]=ARG;KM[c]=AZ5;Mo[c]=AXS;N4[c]=ACo;AMa[c]=AQe;T0[c]=AZa;TT[c]=ATx;ZL[c]=ASr;AL_[c]=AWP;AAC[c]=AOA;Hn[c]=ANT;PZ[c]=V$;AE2[c]=ANN;Lh[c]=AMD;ABn[c]=ASb;LL[c]=W8;M3[c]=AZ3;Op[c]=AWS;SZ[c]=AQv;L2[c]=AO7;ALF[c]=ASC;ADx[c]=APL;U3[c]=AR8;}
function ATK(b){if($rt_resuming()){var $r = $rt_nativeThread().pop();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}if(!b.hasOwnProperty('$$constructor$$')){return null;}var $r=new b();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}
function ARM(b){return setTimeout(function(){$rt_threadStarter(AUR)(b);},0);}
function AUR(b){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.js();if(C()){break _;}return;default:Es();}}CM().s(b,$p);}
function N_(b){AA5(b,0);}
function AA5(b,c){return setTimeout(function(){AUR(b);},c);}
function AKy(b){return String.fromCharCode(b);}
function AMj(b){return b.$meta.item;}
function AP5(){return [];}
function Dc(){}
function Dm(){}
function Jk(){}
function Cp(){var a=this;E.call(a);a.bq=null;a.oQ=0;}
var A2y=null;function A2z(){var a=new Cp();T9(a);return a;}
function A1h(a){var b=new Cp();ADO(b,a);return b;}
function VE(a,b,c){var d=new Cp();AMS(d,a,b,c);return d;}
function AUc(a,b){var c=new Cp();Uw(c,a,b);return c;}
function AZj(a,b,c){var d=new Cp();TE(d,a,b,c);return d;}
function T9(a){a.bq=$rt_createCharArray(0);}
function ADO(a,b){var c,d;b=b.data;c=b.length;a.bq=$rt_createCharArray(c);d=0;while(d<c){a.bq.data[d]=b[d];d=d+1|0;}}
function AMS(a,b,c,d){var e,f;a.bq=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bq.data[e]=f[e+c|0];e=e+1|0;}}
function Uw(a,b,c){c=AIH(c,AHp(b,0,b.data.length));if(AEE(c)&&!c.Z&&c.cb==c.j1)a.bq=AJX(c);else{a.bq=$rt_createCharArray(Ce(c));AAi(c,a.bq);}}
function TE(a,b,c,d){var e,f,g,h,i,j;a.bq=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bq.data;j=e+1|0;g[e]=i&65535;}else{g=a.bq.data;c=e+1|0;g[e]=IW(i);g=a.bq.data;j=c+1|0;g[c]=Ij(i);}f=f+1|0;c=h;e=j;}if(e<a.bq.data.length)a.bq=MJ(a.bq,e);}
function Cr(a,b){var c;if(b>=0&&b<a.bq.data.length)return a.bq.data[b];c=new Mg;Q(c);M(c);}
function BE(a){return a.bq.data.length;}
function IS(a){return a.bq.data.length?0:1;}
function ALL(a,b){var c,d,e;if(a===b)return 0;c=CR(BE(a),BE(b));d=0;while(true){if(d>=c)return BE(a)-BE(b)|0;e=Cr(a,d)-Cr(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AEF(a,b){var c,d,e;if(a===b)return 0;c=CR(BE(a),BE(b));d=0;while(true){if(d>=c)return BE(a)-BE(b)|0;e=L1(Cr(a,d))-L1(Cr(b,d))|0;if(e)break;d=d+1|0;}return e;}
function AJM(a,b,c){var d,e,f;if((c+BE(b)|0)>BE(a))return 0;d=0;while(d<BE(b)){e=Cr(b,d);f=c+1|0;if(e!=Cr(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Lp(a,b){if(a===b)return 1;return AJM(a,b,0);}
function R8(a,b,c){var d,e,f,g;d=DV(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bq.data.length)return (-1);if(a.bq.data[d]==e)break;d=d+1|0;}return d;}f=IW(b);g=Ij(b);while(true){if(d>=(a.bq.data.length-1|0))return (-1);if(a.bq.data[d]==f&&a.bq.data[d+1|0]==g)break;d=d+1|0;}return d;}
function QZ(a,b){return R8(a,b,0);}
function AEe(a,b,c){var d,e,f,g,h;d=CR(c,BE(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bq.data[d]==e)break;d=d+(-1)|0;}return d;}f=IW(b);g=Ij(b);while(true){if(d<1)return (-1);if(a.bq.data[d]==g){h=a.bq.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function JV(a,b){return AEe(a,b,BE(a)-1|0);}
function Gt(a,b,c){var d;if(b<=c)return VE(a.bq,b,c-b|0);d=new BP;Q(d);M(d);}
function JW(a,b){return Gt(a,b,BE(a));}
function I9(a,b,c){var d,e,f,g;d=new Ba;Y(d);e=BE(a)-BE(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=BE(b)){E0(d,c);f=f+(BE(b)-1|0)|0;break a;}if(Cr(a,f+g|0)!=Cr(b,g))break;g=g+1|0;}E$(d,Cr(a,f));}f=f+1|0;}E0(d,JW(a,f));return N(d);}
function AN3(a){return a;}
function AHH(a){var b,c,d,e;b=$rt_createCharArray(a.bq.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bq.data[d];d=d+1|0;}return b;}
function QQ(b){return b===null?B(10):b.q8();}
function DU(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Cp))return 0;c=b;if(BE(c)!=BE(a))return 0;d=0;while(d<BE(c)){if(Cr(a,d)!=Cr(c,d))return 0;d=d+1|0;}return 1;}
function AXQ(a){var b,c,d,e;a:{if(!a.oQ){b=a.bq.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.oQ=(31*a.oQ|0)+e|0;d=d+1|0;}}}return a.oQ;}
function AFm(a){var b,c,d,e,f,g,h;if(IS(a))return a;b=$rt_createIntArray(a.bq.data.length);c=b.data;d=0;e=0;while(e<a.bq.data.length){a:{if(e!=(a.bq.data.length-1|0)&&IB(a.bq.data[e])){f=a.bq.data;g=e+1|0;if(I4(f[g])){h=d+1|0;c[d]=Oc(KC(a.bq.data[e],a.bq.data[g]));e=g;break a;}}h=d+1|0;c[d]=L1(a.bq.data[e]);}e=e+1|0;d=h;}return AZj(b,0,d);}
function AIY(a){var b,c,d,e,f,g,h;if(IS(a))return a;b=$rt_createIntArray(a.bq.data.length);c=b.data;d=0;e=0;while(e<a.bq.data.length){a:{if(e!=(a.bq.data.length-1|0)&&IB(a.bq.data[e])){f=a.bq.data;g=e+1|0;if(I4(f[g])){h=d+1|0;c[d]=N6(KC(a.bq.data[e],a.bq.data[g]));e=g;break a;}}h=d+1|0;c[d]=N6(a.bq.data[e])&65535;}e=e+1|0;d=h;}return AZj(b,0,d);}
function AO$(a,b){return ALL(a,b);}
function ABJ(){A2y=new Sf;}
function DD(){var a=this;E.call(a);a.to=null;a.iG=null;a.m6=0;a.p$=0;a.nL=null;a.pb=null;}
function A2A(){var a=new DD();Q(a);return a;}
function A2B(a){var b=new DD();Bl(b,a);return b;}
function A2C(a){var b=new DD();S0(b,a);return b;}
function Q(a){a.m6=1;a.p$=1;}
function Bl(a,b){a.m6=1;a.p$=1;a.to=b;}
function S0(a,b){a.m6=1;a.p$=1;a.iG=b;}
function AVX(a){return a;}
function ASc(a){return a.to;}
function APs(a){return a.mo();}
function B4(a){PT(a,CK());}
function PT(a,b){var c,d,e,f,g;IR(b,Hh(C4(a)));c=a.mo();if(c!==null){d=new Ba;Y(d);IR(b,N(H(H(d,B(11)),c)));}a:{AKd(b);if(a.pb!==null){e=a.pb.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];IR(b,B(12));X1(b,d);g=g+1|0;}}}if(a.iG!==null&&a.iG!==a){IR(b,B(13));PT(a.iG,b);}}
function Ml(a,b){var c,d,e,f,g;Gi(b,Hh(C4(a)));c=a.mo();if(c!==null){d=new Ba;Y(d);Gi(b,N(H(H(d,B(11)),c)));}a:{PL(b);if(a.pb!==null){e=a.pb.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Gi(b,B(14));Wp(b,d);g=g+1|0;}}}if(a.iG!==null&&a.iG!==a){Gi(b,B(13));Ml(a.iG,b);}}
function SQ(a,b){if(!a.m6)return;a.nL=Rw(a.nL,a.nL.data.length+1|0);a.nL.data[a.nL.data.length-1|0]=b;}
function EA(){DD.call(this);}
function A2D(){var a=new EA();AOm(a);return a;}
function AOm(a){Q(a);}
function HC(){EA.call(this);}
function A2E(){var a=new HC();AOR(a);return a;}
function AOR(a){Q(a);}
function AG7(){HC.call(this);}
function A2F(){var a=new AG7();AS0(a);return a;}
function AS0(a){Q(a);}
function GD(){var a=this;E.call(a);a.M=null;a.dm=0;}
function A2G(){var a=new GD();Y(a);return a;}
function A2H(a){var b=new GD();Jv(b,a);return b;}
function Y(a){Jv(a,16);}
function Jv(a,b){a.M=$rt_createCharArray(b);}
function AD0(a,b,c){return AHk(a,a.dm,b,c);}
function AHk(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)CL(a,b,b+1|0);else{CL(a,b,b+2|0);f=a.M.data;g=b+1|0;f[b]=45;b=g;}a.M.data[b]=HB(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bh(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;CL(a,b,b+i|0);if(e)e=b;else{f=a.M.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.M.data;b=e+1|0;f[e]=HB(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function YR(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)CL(a,b,b+1|0);else{CL(a,b,b+2|0);g=a.M.data;h=b+1|0;g[b]=45;b=h;}a.M.data[b]=HB(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;CL(a,b,b+i|0);if(e)i=b;else{g=a.M.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.M.data;b=i+1|0;g[i]=HB(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function AI6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=S(c,0.0);if(!d){CL(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=48;e=a.M.data;b=d+1|0;e[d]=46;a.M.data[b]=48;return a;}if(!d){CL(a,b,b+4|0);e=a.M.data;d=b+1|0;e[b]=45;e=a.M.data;b=d+1|0;e[d]=48;e=a.M.data;d=b+1|0;e[b]=46;a.M.data[d]=48;return a;}if(isNaN(c)?1:0){CL(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=78;e=a.M.data;b=d+1|0;e[d]=97;a.M.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){CL(a,b,b+8|0);d=b;}else{CL(a,b,b+9|0);e=a.M.data;d=b+1|0;e[b]=45;}e=a.M.data;b=d+1|0;e[d]
=73;e=a.M.data;d=b+1|0;e[b]=110;e=a.M.data;b=d+1|0;e[d]=102;e=a.M.data;d=b+1|0;e[b]=105;e=a.M.data;b=d+1|0;e[d]=110;e=a.M.data;d=b+1|0;e[b]=105;e=a.M.data;b=d+1|0;e[d]=116;a.M.data[b]=121;return a;}f=A2I;AIU(c,f);d=f.sy;g=f.sk;h=f.wJ;i=1;j=1;if(h){h=1;j=2;}k=9;l=ASA(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=DV(k,i+1|0);g=0;}else if(g<0){d=d/A2J.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;CL(a,b,b+(j+k|0)|0);if(!h)h=b;else{e=a.M.data;h=b+
1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.M.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.M.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.M.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.M.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.M.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.M.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AFx(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=S(c,0.0);if(!d){CL(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=48;e=a.M.data;b=d+1|0;e[d]=46;a.M.data[b]=48;return a;}if(!d){CL(a,b,b+4|0);e=a.M.data;d=b+1|0;e[b]=45;e=a.M.data;b=d+1|0;e[d]=48;e=a.M.data;d=b+1|0;e[b]=46;a.M.data[d]=48;return a;}if(isNaN(c)?1:0){CL(a,b,b+3|0);e=a.M.data;d=b+1|0;e[b]=78;e=a.M.data;b=d+1|0;e[d]=97;a.M.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){CL(a,b,b+8|0);d=b;}else{CL(a,b,b+9|0);e=a.M.data;d=b+1|0;e[b]=45;}e=a.M.data;b=d+1|0;e[d]
=73;e=a.M.data;d=b+1|0;e[b]=110;e=a.M.data;b=d+1|0;e[d]=102;e=a.M.data;d=b+1|0;e[b]=105;e=a.M.data;b=d+1|0;e[d]=110;e=a.M.data;d=b+1|0;e[b]=105;e=a.M.data;b=d+1|0;e[d]=116;a.M.data[b]=121;return a;}f=A2K;XD(c,f);g=f.sW;h=f.sa;i=f.wB;j=1;k=1;if(i)k=2;l=18;d=ARD(g);if(d>0)l=l-d|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=DV(l,j+1|0);h=0;}else if(h<0){g=Long_div(g,A2L.data[ -h]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;CL(a,b,b+(k+l|0)|0);if
(!i)i=b;else{e=a.M.data;i=b+1|0;e[b]=45;}m=new Long(1569325056, 23283064);n=0;while(n<l){if(Long_le(m,Long_ZERO))o=0;else{o=Long_div(g,m).lo;g=Long_rem(g,m);}e=a.M.data;b=i+1|0;e[i]=(48+o|0)&65535;j=j+(-1)|0;if(j)i=b;else{e=a.M.data;i=b+1|0;e[b]=46;}m=Long_div(m,Long_fromInt(10));n=n+1|0;}if(h){e=a.M.data;b=i+1|0;e[i]=69;if(h>=0)d=b;else{h= -h;e=a.M.data;d=b+1|0;e[b]=45;}if(h>=100){e=a.M.data;b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;e=a.M.data;j=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)j=d;else{e
=a.M.data;j=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}a.M.data[j]=(48+(h%10|0)|0)&65535;}return a;}
function ASA(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ARD(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;f=A2M.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,A2M.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,A2M.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function KZ(a,b){var c;if(a.M.data.length>=b)return;c=a.M.data.length>=1073741823?2147483647:DV(b,DV(a.M.data.length*2|0,5));a.M=MJ(a.M,c);}
function CL(a,b,c){var d,e;d=a.dm-b|0;a.oH((a.dm+c|0)-b|0);e=d-1|0;while(e>=0){a.M.data[c+e|0]=a.M.data[b+e|0];e=e+(-1)|0;}a.dm=a.dm+(c-b|0)|0;}
function Hd(){}
function Ba(){GD.call(this);}
function BR(){var a=new Ba();AZL(a);return a;}
function AZL(a){Y(a);}
function H(a,b){Ls(a,a.dm,b);return a;}
function Bb(a,b){AD0(a,b,10);return a;}
function CP(a,b){Q3(a,a.dm,b);return a;}
function APA(a,b){SP(a,a.dm,b);return a;}
function AFr(a,b){NJ(a,a.dm,b);return a;}
function E$(a,b){Oy(a,a.dm,b);return a;}
function E0(a,b){Ts(a,a.dm,b);return a;}
function Q3(a,b,c){YR(a,b,c,10);return a;}
function SP(a,b,c){AI6(a,b,c);return a;}
function NJ(a,b,c){AFx(a,b,c);return a;}
function Ts(a,b,c){Ls(a,b,c===null?B(10):c.q8());return a;}
function Oy(a,b,c){CL(a,b,b+1|0);a.M.data[b]=c;return a;}
function Ls(a,b,c){var d,e,f;if(b>=0&&b<=a.dm){a:{if(c===null)c=B(10);else if(IS(c))break a;KZ(a,a.dm+BE(c)|0);d=a.dm-1|0;while(d>=b){a.M.data[d+BE(c)|0]=a.M.data[d];d=d+(-1)|0;}a.dm=a.dm+BE(c)|0;d=0;while(d<BE(c)){e=a.M.data;f=b+1|0;e[b]=Cr(c,d);d=d+1|0;b=f;}}return a;}c=new Mg;Q(c);M(c);}
function AH0(a,b){a.dm=b;}
function Wm(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BP;Bl(f,B(15));M(f);}while(b<c){g=d.data;h=e+1|0;i=a.M.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function ID(a){return a.dm;}
function N(a){return VE(a.M,0,a.dm);}
function AQl(a,b){KZ(a,b);}
function AXp(a,b,c){return Ts(a,b,c);}
function AXa(a,b,c){return Oy(a,b,c);}
function ASo(a,b,c){return NJ(a,b,c);}
function AWf(a,b,c){return SP(a,b,c);}
function AOk(a,b,c){return Q3(a,b,c);}
function ATW(a,b,c){return Ls(a,b,c);}
function Eu(){E.call(this);}
function G$(){Eu.call(this);this.f4=0;}
var A2N=null;var A2O=null;function AY$(a){var b=new G$();Wa(b,a);return b;}
function Wa(a,b){a.f4=b;}
function CG(b){var c;if(b>=(-128)&&b<=127){a:{if(A2O===null){A2O=O(G$,256);c=0;while(true){if(c>=A2O.data.length)break a;A2O.data[c]=AY$(c-128|0);c=c+1|0;}}}return A2O.data[b+128|0];}return AY$(b);}
function AUL(a){return a.f4;}
function AUe(a){return a.f4>>>4^a.f4<<28^a.f4<<8^a.f4>>>24;}
function AZS(a,b){if(a===b)return 1;return b instanceof G$&&b.f4==a.f4?1:0;}
function Wn(a,b){return S(a.f4,b.f4);}
function Q6(b,c){var d;d=c&31;return b<<d|b>>>(32-d|0);}
function AWT(a,b){return Wn(a,b);}
function AKS(){A2N=K($rt_intcls());}
function Ht(){HC.call(this);}
function A2P(){var a=new Ht();AQj(a);return a;}
function A2Q(a){var b=new Ht();Ny(b,a);return b;}
function AQj(a){Q(a);}
function Ny(a,b){Bl(a,b);}
function AJt(){Ht.call(this);}
function A2R(){var a=new AJt();API(a);return a;}
function A2S(a){var b=new AJt();AN$(b,a);return b;}
function API(a){Q(a);}
function AN$(a,b){Ny(a,b);}
function AGA(){Ht.call(this);}
function A2T(){var a=new AGA();AUx(a);return a;}
function A2U(a){var b=new AGA();AOn(b,a);return b;}
function AUx(a){Q(a);}
function AOn(a,b){Ny(a,b);}
function BB(){DD.call(this);}
function A2V(){var a=new BB();ARK(a);return a;}
function ARK(a){Q(a);}
function B5(){BB.call(this);}
function A2W(){var a=new B5();ANo(a);return a;}
function VU(a){var b=new B5();AZu(b,a);return b;}
function ANo(a){Q(a);}
function AZu(a,b){Bl(a,b);}
function CV(){}
function Gd(){}
function QR(){}
function NK(){}
function Rt(){}
function Os(){}
function Su(){}
function M2(){}
function JC(){}
function UJ(){E.call(this);}
function AQC(a,b,c){a.Ro($rt_str(b),H7(c,"handleEvent"));}
function AQJ(a,b,c){a.O4($rt_str(b),H7(c,"handleEvent"));}
function ANC(a,b){return a.DD(b);}
function ARm(a,b,c,d){a.Gf($rt_str(b),H7(c,"handleEvent"),d?1:0);}
function AS8(a,b){return !!a.Ru(b);}
function AOh(a){return a.EV();}
function AM9(a,b,c,d){a.IV($rt_str(b),H7(c,"handleEvent"),d?1:0);}
function Bo(){E.call(this);}
var A2X=0;var A2Y=null;var A2Z=null;var A20=null;var A21=null;var A22=null;var A23=null;var A24=null;var A25=null;var A26=null;var A27=null;var A28=null;var A29=null;var A2$=null;var A2_=null;var A3a=null;var A3b=null;var A3c=null;var A3d=null;var A3e=null;var A3f=0;var A3g=0;var A3h=0.0;var A3i=0.0;var A3j=0;var A3k=0;var A3l=0;var A3m=0;var A3n=0;var A3o=null;var A3p=null;var A3q=null;var A3r=null;var A3s=null;var A3t=0;var A3u=null;var A3v=null;var A3w=null;var A3x=null;var A3y=null;var A3z=null;var A3A=
Long_ZERO;var A3B=0;var A3C=0;var A3D=0;var A3E=null;var A3F=null;var A3G=null;var A3H=0;var A3I=0;var A3J=0;var A3K=null;var A3L=null;var A3M=null;var A3N=0;var A3O=null;var A3P=null;var A3Q=0.0;var A3R=null;var A3S=0;var A3T=null;var A3U=null;var A3V=0;var A3W=null;var A3X=0;function Z(){Z=Bt(Bo);ANE();}
function A3Y(){var a=new Bo();R5(a);return a;}
function R5(a){Z();}
function M7(){Z();return B(16);}
function IH(b){Z();if(Lp(b,B(17)))b=JW(b,1);return Cz(A3Z,b);}
function XR(b){var c;Z();c=IH(b);if(c===null)return null;return AUc(c,T8(B(18)));}
function AGh(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.CA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EK=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{AUs(b,callback);}catch($e){callback.EK($rt_exception($e));}});}
function AUs(b,c){var d,e;Z();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new Ta;b.tf=d;b.xx=c;b=Cj(b,"stateChanged");d.onreadystatechange=b;d.send();}
function We(b,c){var d,e,f,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Z();A2Z=b;d=$rt_str(A2Z.getAttribute("style"));e=A2Z;f=new Ba;Y(f);if(d===null)d=B(3);f=N(H(H(f,d),B(19)));e.setAttribute("style",$rt_ustr(f));A24=window;A2Y=A24.document;A20=A2Y.createElement("canvas");A3j=b.clientWidth;A3k=b.clientHeight;f=A20;e=A3j;f.width=e;f=A20;e=A3k;f.height=e;A21=A20.getContext("2d");A20.setAttribute("id","deevis589723589");f=A20;b.appendChild(f);A22
=A2Y.createElement("canvas");b=A22;f=A3j;b.width=f;b=A22;f=A3k;b.height=f;b=A22;e=AAf();A23=b.getContext("webgl2",e);if(A23===null){b=new B5;c=new Ba;Y(c);Bl(b,N(H(H(H(c,B(20)),$rt_str(window.navigator.userAgent)),B(21))));M(b);}T$(A23);A23.getExtension("EXT_texture_filter_anisotropic");b=A24;e=new Tb;A26=e;b.addEventListener("contextmenu",Cj(e,"handleEvent"));b=A20;e=new Th;A27=e;b.addEventListener("mousedown",Cj(e,"handleEvent"));b=A20;e=new Ti;A28=e;b.addEventListener("mouseup",Cj(e,"handleEvent"));b=A20;e
=new Tf;A29=e;b.addEventListener("mousemove",Cj(e,"handleEvent"));b=A24;e=new Tg;A2$=e;b.addEventListener("keydown",Cj(e,"handleEvent"));b=A24;e=new Td;A2_=e;b.addEventListener("keyup",Cj(e,"handleEvent"));b=A24;e=new Te;A3a=e;b.addEventListener("keypress",Cj(e,"handleEvent"));b=A20;e=new Tc;A3b=e;b.addEventListener("wheel",Cj(e,"handleEvent"));b=A24;e=new NQ;b.addEventListener("blur",Cj(e,"handleEvent"));b=A24;e=new NP;b.addEventListener("focus",Cj(e,"handleEvent"));AIB();$p=1;case 1:AEQ();if(C()){break _;}$p
=2;case 2:AGh(c);if(C()){break _;}a:{try{AG4(A25);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){f=$$je;}else{throw $$e;}}B4(f);}A3P=AQQ();Mh(A3d);Mh(A3e);return;default:Es();}}CM().s(b,c,d,e,f,$p);}
function Jn(b){Z();A23.enable(b);}
function Iv(b){Z();A23.disable(b);}
function ADd(){var b,c;Z();b=new Se;b.h1=A23.createProgram();c=A3n+1|0;A3n=c;b.u3=c;return b;}
function Mn(b){var c;Z();c=new Sh;c.it=A23.createShader(b);return c;}
function Pk(b,c){var d;Z();d=A23;b=b.h1;c=c.it;d.attachShader(b,c);}
function Q4(b,c){var d;Z();d=A23;b=b.h1;c=c.it;d.detachShader(b,c);}
function SJ(b){var c;Z();c=A23;b=b.it;c.compileShader(b);}
function Wr(b){var c;Z();c=A23;b=b.h1;c.linkProgram(b);}
function MD(b,c){var d;Z();d=A23;b=b.it;d.shaderSource(b,$rt_ustr(c));}
function QF(b){var c;Z();c=A23;b=b.it;return $rt_str(c.getShaderInfoLog(b));}
function ACN(b){var c;Z();c=A23;b=b.h1;return $rt_str(c.getProgramInfoLog(b));}
function Rx(b){var c;Z();c=A23;b=b.it;return c.getShaderParameter(b,35713)!=1?0:1;}
function ABL(b){var c;Z();c=A23;b=b.h1;return c.getProgramParameter(b,35714)!=1?0:1;}
function P7(b){var c;Z();c=A23;b=b.it;c.deleteShader(b);}
function Kk(){var b;Z();b=new Sn;b.AC=A23.createBuffer();return b;}
function Gc(b,c){var d;Z();d=A23;c=c!==null?c.AC:null;d.bindBuffer(b,c);}
function M6(b,c,d){var e;Z();e=A23;c=c;e.bufferData(b,c,d);}
function LT(b){Z();A23.enableVertexAttribArray(b);}
function C7(b,c){var d;Z();d=A23;b=b.h1;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new Tm;b.jz=d;}return b;}
function J$(b,c,d){var e;Z();e=A23;b=b.h1;e.bindAttribLocation(b,c,$rt_ustr(d));}
function G0(b,c){var d;Z();if(b!==null){d=A23;b=b.jz;d.uniform1f(b,c);}}
function JF(b,c,d,e){var f;Z();if(b!==null){f=A23;b=b.jz;f.uniform3f(b,c,d,e);}}
function QL(b,c,d,e,f){var g,h;Z();if(b!==null){g=A23;h=b.jz;g.uniform4f(h,c,d,e,f);}}
function Oj(b,c){var d;Z();if(b!==null){d=A23;b=b.jz;d.uniform1i(b,c);}}
function Ks(b,c){var d,e;Z();A3s.set(c.data);if(b!==null){d=A23;e=b.jz;b=A3s;d.uniformMatrix4fv(e,!!0,b);}}
function Sd(b){var c;Z();if(b!==null&&A3t!=b.u3){A3t=b.u3;c=A23;b=b.h1;c.useProgram(b);}}
function LV(b,c,d,e,f,g){Z();A23.vertexAttribPointer(b,c,d,!!e,f,g);}
function MM(){var b;Z();b=new PA;b.x_=A23.createVertexArray();b.tC=0;return b;}
function O0(b){var c;Z();c=A23;b=b!==null?b.x_:null;c.bindVertexArray(b);}
function AAl(b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Z();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=ADB(c);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(b,c,$p);}
function ADB(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.CA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EK=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{APK(b,callback);}catch($e){callback.EK($rt_exception($e));}});}
function APK(b,c){var d,e,f;Z();d=A2Y.createElement("img");e=new NT;e.fq=d;e.vH=c;d.addEventListener("load",Cj(e,"handleEvent"));f=new NS;f.AU=d;f.Bs=c;d.addEventListener("error",Cj(f,"handleEvent"));e=$rt_str(AIn(b,"image/png"));if(e===null)Cx(c,null);else{b=$rt_ustr(e);d.src=b;}}
function JH(){var b,c,d;Z();b=A2Z.clientWidth;if(b!=A3j){c=A20;d=b;c.width=d;c=A22;d=b;c.width=d;A3j=b;}return b;}
function KI(){var b,c,d;Z();b=A2Z.clientHeight;if(b!=A3k){c=A20;d=b;c.height=d;c=A22;d=b;c.height=d;A3k=b;}return b;}
function IY(){Z();return Long_fromInt(1073741824);}
function Iq(){Z();return Long_fromInt(1073741824);}
function IF(){Z();return Long_ZERO;}
function Q1(b){Z();return b.byteLength;}
function QB(b){Z();return b<=A3U.data.length&&b>=0?A3U.data[b]:(-1);}
function Yg(b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Z();d=JV(b,47);if(d>0){e=Gt(b,0,d);$p=2;continue _;}f=new Uint8Array(c.data.length);f.set(c.data);e=A30;d=0;f=f.buffer;$p=1;case 1:AQq(e,b,d,f);if(C()){break _;}return;case 2:AEf(e);if(C()){break _;}f=new Uint8Array(c.data.length);f.set(c.data);e=A30;d=0;f=f.buffer;$p=1;continue _;default:Es();}}CM().s(b,c,d,e,f,$p);}
function AGB(b){var c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Z();c=A30;$p=1;case 1:$z=AZ6(c,b);if(C()){break _;}b=$z;if(b===null)d=null;else{d=$rt_createByteArray(b.byteLength);e=d.data;b=new Uint8Array(b);f=0;g=e.length;while(f<g){e[f]=b[f]<<24>>24;f=f+1|0;}}return d;default:Es();}}CM().s(b,c,d,e,f,g,$p);}
function AH5(b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Z();d=A30;$p=1;case 1:$z=AZ6(d,b);if(C()){break _;}d=$z;e=JV(c,47);if(e<=0){f=A30;e=0;$p=2;continue _;}f=Gt(c,0,e);$p=4;continue _;case 2:AQq(f,c,e,d);if(C()){break _;}c=A30;$p=3;case 3:AVP(c,b);if(C()){break _;}return;case 4:AEf(f);if(C()){break _;}f=A30;e=0;$p=2;continue _;default:Es();}}CM().s(b,c,d,e,f,$p);}
function AGW(b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Z();c=A30;$p=1;case 1:AVP(c,b);if(C()){break _;}return;default:Es();}}CM().s(b,c,$p);}
function Si(){Z();return A25;}
function OW(){Z();return A3y;}
function KS(){Z();return A3d;}
function KB(){Z();if(Long_gt(Long_sub(B1(),A3A),Long_fromInt(3000))&&A3C&&!(document.pointerLockElement!=null?1:0)){A20.requestPointerLock();if(document.pointerLockElement!=null?1:0)A3C=0;}}
function No(){Z();return A3z;}
function NU(b){Z();return b.which;}
function P1(b){Z();return QB(b);}
function LB(){Z();return A3e;}
function PQ(b){Z();A3m=b;return b;}
function Gh(){Z();return A3u;}
function Ih(){Z();return A3v;}
function SL(b){Z();URL.revokeObjectURL($rt_ustr(b));}
function R2(){Z();return A3B;}
function KX(b){Z();A3B=b;return b;}
function Nj(){Z();return A3A;}
function ANE(){var b,c;A2X=0;A2Y=null;A2Z=null;A20=null;A21=null;A22=null;A23=null;A24=null;A25=null;A26=null;A27=null;A28=null;A29=null;A2$=null;A2_=null;A3a=null;A3b=null;A3c=O(Cp,0);A3d=N7();A3e=N7();A3f=0;A3g=0;A3h=0.0;A3i=0.0;A3j=0;A3k=0;A3l=0;A3m=1;A3n=0;A3o=$rt_createIntArray(4);A3p=new Uint8Array(new ArrayBuffer(4194304));A3q=new Float32Array(4);A3r=new Float32Array(9);A3s=new Float32Array(16);A3t=(-1);A3u=null;A3v=null;A3w=null;A3x=null;A3y=$rt_createBooleanArray(8);A3z=$rt_createBooleanArray(256);A3A
=Long_ZERO;A3B=0;A3C=0;A3D=0;A3E=Fk();A3F=Fk();A3G=null;A3H=0;A3I=0;A3J=0;A3K=N7();A3L=null;A3M=null;A3N=0;A3O=CY();A3P=null;A3Q=0.029999999329447746;A3R=CY();A3S=0;b=O(Cp,256);c=b.data;c[0]=B(22);c[1]=B(23);c[2]=B(24);c[3]=B(25);c[4]=B(26);c[5]=B(27);c[6]=B(28);c[7]=B(29);c[8]=B(30);c[9]=B(31);c[10]=B(32);c[11]=B(2);c[12]=B(33);c[13]=B(34);c[14]=B(35);c[15]=B(36);c[16]=B(37);c[17]=B(38);c[18]=B(39);c[19]=B(40);c[20]=B(41);c[21]=B(42);c[22]=B(43);c[23]=B(44);c[24]=B(45);c[25]=B(46);c[26]=B(47);c[27]=B(48);c[28]
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
function T$(b){window.currentContext=b;}
function AIB(){if (!AIB.$native){
AIB.$native=function(){return (function(){window.eagsFileChooser = {
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
};})();};AIB=AIB.$native;}return AIB();}
function AAf(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function AIn(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function AIh(b){if(b.commit)b.commit();}
function PR(){}
function H6(){}
function LK(){}
function Gu(){E.call(this);this.t0=null;}
function A31(a){var b=new Gu();Sq(b,a);return b;}
function Sq(a,b){if(b!==null){a.t0=b;return;}b=new El;Q(b);M(b);}
function W2(){Gu.call(this);this.vw=null;}
function AYo(){var a=new W2();AT$(a);return a;}
function AT$(a){var b;a.t0=a;b=new MT;Jv(b,16);a.vw=b;a.t0=a.vw;}
function AF3(a){return;}
function Z4(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;ACE(a.vw,b,c,d);return;}}f=new BP;Q(f);M(f);}
function JK(){var a=this;Gu.call(a);a.ln=null;a.B8=0;a.vM=0;}
function AAY(a){var $$je;a:{if(a.ln===null)IG(a);else{try{AF3(a.ln);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){}else{throw $$e;}}IG(a);}}}
function Gi(a,b){if(b===null)b=QQ(null);Ut(a,b);}
function PL(a){Gi(a,B(152));if(a.vM)AAY(a);}
function Wp(a,b){Xv(a,QQ(b));}
function Xv(a,b){Gi(a,b);PL(a);}
function IG(a){a.B8=1;}
function AMf(a,b){Wc(a,b,0,b.data.length);}
function Wc(a,b,c,d){var $$je;a:{if(a.ln===null)IG(a);else{try{Z4(a.ln,b,c,d);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){}else{throw $$e;}}IG(a);}}}
function Ut(a,b){AMf(a,AHH(b));}
function AAF(){E.call(this);}
function A32(){var a=new AAF();APe(a);return a;}
function APe(a){return;}
function ABg(){E.call(this);}
function Kc(){}
function G8(){var a=this;E.call(a);a.ce=null;a.b5=0;a.bw=0;a.bb=null;a.w=null;a.dB=null;a.e=null;a.cG=null;a.jZ=null;a.bm=0;a.bi=null;a.ey=null;a.A=null;a.hy=null;a.ek=null;a.bD=0;a.cK=0;a.Dk=null;a.Cd=0;a.mG=null;a.hh=0;a.CG=null;a.bV=null;a.r=null;a.vP=null;a.zZ=null;a.yG=null;a.f9=0;a.ku=null;a.f$=Long_ZERO;a.bj=0;a.b2=0;a.cv=0;a.c8=Long_ZERO;a.CB=null;}
var A33=null;var A34=0;var A35=null;function ADw(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.r=A0m(a);b=new I8;c=a.r;A36=CY();b.wK=CY();b.jA=Oq(1);b.gv=SU(1048576);b.kQ=SU(1048576);b.zb=Ck();b.q9=0;b.AB=0;b.ur=c;a.bi=b;c=new Ss;d=a.r;b=B(153);e=a.bi;$p=1;case 1:AJj(c,d,b,e);if(C()){break _;}a.ey=c;$p=2;case 2:Uq(a);if(C()){break _;}a.vP=new NE;DP(a,B(154));V(3553);Z();A23.clearDepth((-1.0));V(2929);GA(515);V(3008);Py(516,
0.10000000149011612);A23.cullFace(1029);CU(5889);CT();CU(5888);DP(a,B(155));F7(a.bi,a.yG);F7(a.bi,a.zZ);F7(a.bi,A0z());F7(a.bi,A19());F7(a.bi,AOX(0));F7(a.bi,AOX(1));a.dB=A0R(a,a.bi);Gf(0,0,a.b5,a.bw);A35.UH(J1(),B(156),B(157));b=new MC;c=a.w;d=a.bi;b.cg=O(Iw,3);b.qK=new Df;if(c!==null)b.lF=c;b.ih=d;f=0;while(f<3){b.cg.data[f]=Ck();f=f+1|0;}a.cG=b;DP(a,B(158));b=new Lm;Lb(b);b.go=Ck();b.ti=new Df;b.Ca=null;b.qd=0;b.Ev=1.0;b.bN=a;a.mG=b;return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Uq(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=EW(a.b5,a.bw);c=b.fa;d=b.e8;DA(16640);CU(5889);CT();G9(0.0,c,d,0.0,1000.0,3000.0);CU(5888);CT();Br(0.0,0.0,(-2000.0));Gf(0,0,a.b5,a.bw);Gs(0.0,0.0,0.0,0.0);X(2896);X(2912);V(3553);Bv();e=A37;f=3553;b=a.bi;g=B(159);$p=1;case 1:$z=ACM(b,g);if(C()){break _;}d=$z;Cf(f,d);BN(1.0,1.0,1.0,1.0);Bu(e);Ec(e,4210752);F(e,0.0,a.bw,0.0,0.0,a.bw/32.0+0.0);F(e,
a.b5,a.bw,0.0,a.b5/32.0,a.bw/32.0+0.0);F(e,a.b5,0.0,0.0,a.b5/32.0,0.0);F(e,0.0,0.0,0.0,0.0,0.0);Bn(e);V(3008);Py(516,0.10000000149011612);Cn(a.ey,B(160),8,(a.bw/2|0)-16|0,(-1));return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Zu(a,b){var c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.A instanceof OI)return;if(a.A!==null){c=a.A;$p=1;continue _;}if(b===null&&a.w===null)b=J1();else if(b===null&&a.e.bI<=0){b=new Kx;DI(b);}a.A=b;if(b===null){$p=2;continue _;}S8(a);c=EW(a.b5,a.bw);d=c.fa;e=c.e8;$p=3;continue _;case 1:c.n2();if(C()){break _;}if(b===null&&a.w===null)b=J1();else if(b===null&&a.e.bI<=0){b=new Kx;DI(b);}a.A=b;if(b===null){$p=2;continue _;}S8(a);c
=EW(a.b5,a.bw);d=c.fa;e=c.e8;$p=3;continue _;case 2:AAM(a);if(C()){break _;}return;case 3:AKF(b,a,d,e);if(C()){break _;}a.hh=0;return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function DP(a,b){var c,d,e,f;BO();Z();c=A23.getError();if(c==(-144))c=(-144);if(c){a:{switch(c){case -144:break;case 1280:d=B(161);break a;case 1281:d=B(162);break a;case 1282:d=B(163);break a;case 1285:d=B(164);break a;default:d=B(165);break a;}d=B(166);}B9(Ds(),B(167));e=Ds();f=new Ba;Y(f);B9(e,N(H(H(f,B(168)),b)));b=Ds();e=new Ba;Y(e);B9(b,N(H(H(Bb(e,c),B(11)),d)));}}
function Um(a){var b,c,d,e,f,g,h,i,j,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.f9=1;$p=1;case 1:ADw(a);if(C()){break _;}b=B1();c=0;if(!a.f9)return;A38=0;A39=0;if(!a.bm)E2(a.bb);else{d=a.bb.cz;E2(a.bb);a.bb.cz=d;}e=0;if(e<a.bb.h8){a.bD=a.bD+1|0;$p=2;continue _;}DP(a,B(169));if(a.bm)a.bb.cz=1.0;V(3553);if(a.w!==null){f=a.w;$p=3;continue _;}if(!a.hh){FU(a.ce,a.bb.cz);f=a.ek;d=a.bb.cz;$p
=4;continue _;}if(BH(33)&&BH(7))Fa(a);else a.f$=D7();$p=5;continue _;case 2:AA2(a);if(C()){break _;}e=e+1|0;if(e<a.bb.h8){a.bD=a.bD+1|0;continue _;}DP(a,B(169));if(a.bm)a.bb.cz=1.0;V(3553);if(a.w!==null){f=a.w;$p=3;continue _;}if(!a.hh){FU(a.ce,a.bb.cz);f=a.ek;d=a.bb.cz;$p=4;continue _;}if(BH(33)&&BH(7))Fa(a);else a.f$=D7();$p=5;continue _;case 3:$z=ADt(f);if(C()){break _;}g=$z;if(g){f=a.w;continue _;}if(!a.hh){FU(a.ce,a.bb.cz);f=a.ek;d=a.bb.cz;$p=4;continue _;}if(BH(33)&&BH(7))Fa(a);else a.f$=D7();$p=5;continue _;case 4:ABc(f,
d);if(C()){break _;}if(BH(33)&&BH(7))Fa(a);else a.f$=D7();$p=5;case 5:TG();if(C()){break _;}$p=6;case 6:AOs();if(C()){break _;}if(!(JH()==a.b5&&KI()==a.bw)){a.b5=A20.width;a.bw=A20.height;if(a.b5<=0)a.b5=1;if(a.bw<=0)a.bw=1;g=a.b5;h=a.bw;if(g<=0)g=1;if(h<=0)h=1;a.b5=g;a.bw=h;if(a.A!==null){f=EW(g,h);h=f.fa;g=f.e8;f=a.A;$p=8;continue _;}}if(a.r.lf){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){f=$$je;}else{throw $$e;}}f.rR();}DP(a,B(170));c=c+1|0;a.bm=a.A!==null&&a.A.mT()
?1:0;while(true){j=B1();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new Ba;Y(f);f=H(Bb(f,c),B(171));Qc();a.ku=N(H(Bb(f,A3$),B(172)));A3$=0;c=0;b=i;}if(!a.f9)return;A38=0;A39=0;if(!a.bm)E2(a.bb);else{d=a.bb.cz;E2(a.bb);a.bb.cz=d;}e=0;if(e<a.bb.h8){a.bD=a.bD+1|0;$p=2;continue _;}DP(a,B(169));if(a.bm)a.bb.cz=1.0;V(3553);if(a.w!==null){f=a.w;$p=3;continue _;}if(!a.hh){FU(a.ce,a.bb.cz);f=a.ek;d=a.bb.cz;$p=4;continue _;}if(BH(33)&&BH(7))Fa(a);else a.f$=D7();$p=5;continue _;case 7:a:{try{AFE(i);if(C())
{break _;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){f=$$je;}else{throw $$e;}}f.rR();}DP(a,B(170));c=c+1|0;a.bm=a.A!==null&&a.A.mT()?1:0;while(true){j=B1();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new Ba;Y(f);f=H(Bb(f,c),B(171));Qc();a.ku=N(H(Bb(f,A3$),B(172)));A3$=0;c=0;b=i;}if(!a.f9)return;A38=0;A39=0;if(!a.bm)E2(a.bb);else{d=a.bb.cz;E2(a.bb);a.bb.cz=d;}e=0;if(e<a.bb.h8){a.bD=a.bD+1|0;$p=2;continue _;}DP(a,B(169));if(a.bm)a.bb.cz=1.0;V(3553);if(a.w!==null){f=a.w;$p=3;continue _;}if
(!a.hh){FU(a.ce,a.bb.cz);f=a.ek;d=a.bb.cz;$p=4;continue _;}if(BH(33)&&BH(7))Fa(a);else a.f$=D7();$p=5;continue _;case 8:AKF(f,a,h,g);if(C()){break _;}if(a.r.lf){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){f=$$je;}else{throw $$e;}}f.rR();}DP(a,B(170));c=c+1|0;a.bm=a.A!==null&&a.A.mT()?1:0;while(true){j=B1();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new Ba;Y(f);f=H(Bb(f,c),B(171));Qc();a.ku=N(H(Bb(f,A3$),B(172)));A3$=0;c=0;b=i;}if(!a.f9)return;A38=0;A39
=0;if(!a.bm)E2(a.bb);else{d=a.bb.cz;E2(a.bb);a.bb.cz=d;}e=0;if(e<a.bb.h8){a.bD=a.bD+1|0;$p=2;continue _;}DP(a,B(169));if(a.bm)a.bb.cz=1.0;V(3553);if(a.w!==null){f=a.w;$p=3;continue _;}if(!a.hh){FU(a.ce,a.bb.cz);f=a.ek;d=a.bb.cz;$p=4;continue _;}if(BH(33)&&BH(7))Fa(a);else a.f$=D7();$p=5;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Fa(a){var b,c,d,e,f,g,h,i,j,k,l;if(Long_eq(a.f$,Long_fromInt(-1)))a.f$=D7();b=D7();c=A33.data;d=A34;A34=d+1|0;c[d&(A33.data.length-1|0)]=Long_sub(b,a.f$);a.f$=b;DA(256);CU(5889);CT();G9(0.0,a.b5,a.bw,0.0,1000.0,3000.0);CU(5888);CT();Br(0.0,0.0,(-2000.0));X(3553);Bv();e=A37;Fv(e,7);Ec(e,538968064);Bd(e,0.0,a.bw-100|0,0.0);Bd(e,0.0,a.bw,0.0);Bd(e,A33.data.length,a.bw,0.0);Bd(e,A33.data.length,a.bw-100|0,0.0);Bn(e);f=Long_ZERO;d=0;while(d<A33.data.length){f=Long_add(f,A33.data[d]);d=d+1|0;}d=Long_div(Long_div(f,
Long_fromInt(200000)),Long_fromInt(A33.data.length)).lo;Fv(e,7);Ec(e,541065216);Bd(e,0.0,a.bw-d|0,0.0);Bd(e,0.0,a.bw,0.0);Bd(e,A33.data.length,a.bw,0.0);Bd(e,A33.data.length,a.bw-d|0,0.0);Bn(e);Fv(e,1);g=0;while(g<A33.data.length){h=(((g-A34|0)&(A33.data.length-1|0))*255|0)/A33.data.length|0;i=Bh(h,h)/255|0;d=Bh(i,i)/255|0;j=Bh(d,d)/255|0;Ec(e,(((-16777216)+(Bh(j,j)/255|0)|0)+(d*256|0)|0)+(h*4096|0)|0);k=Long_div(A33.data[g],Long_fromInt(200000));l=g+0.5;Bd(e,l,Long_toNumber(Long_sub(Long_fromInt(a.bw),k))+
0.5,0.0);Bd(e,l,a.bw+0.5,0.0);g=g+1|0;}Bn(e);V(3553);}
function AAM(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(L6()&&!a.bj){a.bj=1;UA(a.vP);b=null;$p=1;continue _;}return;case 1:Zu(a,b);if(C()){break _;}a.b2=a.bD+10000|0;return;default:Es();}}CM().s(a,b,$p);}
function S8(a){if(a.bj){if(a.e!==null)AL1(a.e);a.bj=0;AA0(a.vP);}}
function AF8(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.A!==null)return;b=A10();$p=1;case 1:Zu(a,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function Ws(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.ce.Az&&!(!b&&a.cK>0)){if(c&&a.bV!==null&&!a.bV.j6&&!b){d=a.bV.hj;e=a.bV.hk;f=a.bV.hl;g=a.ce;b=a.bV.gX;$p=1;continue _;}AGK(a.ce);}return;case 1:UM(g,d,e,f,b);if(C()){break _;}g=a.cG;b=a.bV.gX;$p=2;case 2:UZ(g,d,e,f,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function XH(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(!b&&a.cK>0)){if(!b)MX(a.ek.hM);a:{if(a.bV!==null){if(a.bV.j6!=1){if(a.bV.j6)break a;c=a.bV.hj;d=a.bV.hk;e=a.bV.hl;f=a.bV.gX;J();g=A3_.data;h=a.w;$p=1;continue _;}if(!b){h=a.e;i=a.bV.mh;$p=2;continue _;}if(b==1)RF(a.e,a.bV.mh);}else if(!b&&!(a.ce instanceof C_))a.cK=10;}if
(b==1){h=DE(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}}return;case 1:$z=Yc(h,c,d,e);if(C()){break _;}k=$z;j=g[k];if(!b){h=a.w;k=a.bV.gX;$p=4;continue _;}l=DE(a.e.F);h=a.w;$p=3;continue _;case 2:Y9(h,i);if(C()){break _;}if(b==1)RF(a.e,a.bV.mh);if(b==1){h=DE(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}return;case 3:$z=Yc(h,c,d,e);if(C()){break _;}k=$z;if(k>0){h=A3_.data[k];i=a.w;j=a.e;$p=6;continue _;}if(l===null)return;m=l.m;h=a.e;i=a.w;$p=8;continue _;case 4:Xq(h,c,d,e,k);if(C()){break _;}if
(j===A4a&&a.e.xW<100){if(b==1){h=DE(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}return;}h=a.ce;$p=7;continue _;case 5:b:{$z=W0(h,i,j);if(C()){break _;}i=$z;if(i===h){if(i===null)break b;if(i.m==d)break b;}a.e.F.bc.data[a.e.F.bB]=i;AHQ(a.ek.hM);if(!i.m)a.e.F.bc.data[a.e.F.bB]=null;}return;case 6:$z=h.ky(i,c,d,e,j);if(C()){break _;}k=$z;if(k)return;if(l===null)return;m=l.m;h=a.e;i=a.w;$p=8;continue _;case 7:AAw(h,c,d,e);if(C()){break _;}if(b==1){h=DE(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}return;case 8:$z
=AEl(l,h,i,c,d,e,f);if(C()){break _;}c=$z;if(c)MX(a.ek.hM);if(!l.m)a.e.F.bc.data[a.e.F.bB]=null;else if(l.m!=m)AB6(a.ek.hM);if(b==1){h=DE(a.e.F);if(h!==null){d=h.m;i=a.w;j=a.e;$p=5;continue _;}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AC2(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bV===null)return;b=a.w;c=a.bV.hj;d=a.bV.hk;e=a.bV.hl;$p=1;case 1:$z=Yc(b,c,d,e);if(C()){break _;}c=$z;J();if(c==A4b.b)c=A4c.b;if(c==A4d.b)c=A4e.b;if(c==A4a.b)c=A4f.b;ALE(a.e.F,c,a.ce instanceof C_);return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AA2(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AFy(a.mG);if(!a.bm&&a.w!==null){b=a.ce;$p=2;continue _;}c=3553;d=a.bi;b=B(173);$p=1;case 1:$z=ACM(d,b);if(C()){break _;}e=$z;Cf(c,e);if(a.A===null&&a.e!==null&&a.e.bI<=0){b=null;$p=3;continue _;}if(a.A!==null&&!a.A.oj){if(a.A!==null)a.b2=a.bD+10000|0;if(a.A!==null){b=a.A;$p=4;continue _;}if(a.w!==null){a.w.h4=a.r.iY;if(!a.bm){b=a.ek;$p=7;continue _;}if
(!a.bm)GK(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FM(a)){b=a.w;$p=19;continue _;}if(!a.bm){b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;}if(!a.bm){b=a.cG;$p=21;continue _;}}a.c8=B1();return;}a:while(true){if(!EO()){if(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if
(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fw.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;c=F4();if(c)Fg(a.e.F,c);b:{if(a.A!==null){if(a.A===null)break b;else
{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm()){$p=8;continue _;}if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()==2&&Cm())break a;}}$p=16;continue _;case 2:AD6(b);if(C()){break _;}c=3553;d=a.bi;b=B(173);$p=1;continue _;case 3:Zu(a,b);if(C()){break _;}if(a.A!==null&&!a.A.oj){if(a.A!==null)a.b2=a.bD+10000|0;if(a.A!==null){b=a.A;$p=4;continue _;}if(a.w!==null){a.w.h4=a.r.iY;if(!a.bm){b=a.ek;$p=7;continue _;}if(!a.bm)GK(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FM(a)){b=a.w;$p
=19;continue _;}if(!a.bm){b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;}if(!a.bm){b=a.cG;$p=21;continue _;}}a.c8=B1();return;}c:while(true){if(!EO()){if(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_)
{Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fw.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;c=F4();if(c)Fg(a.e.F,c);d:{if(a.A!==null){if(a.A===null)break d;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm()){$p=8;continue _;}if(!CE()&&
Cm()){c=0;$p=11;continue _;}if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()==2&&Cm())break c;}}$p=16;continue _;case 4:ACp(b);if(C()){break _;}if(a.A!==null)a.A.pV();if(a.w!==null){a.w.h4=a.r.iY;if(!a.bm){b=a.ek;$p=7;continue _;}if(!a.bm)GK(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FM(a)){b=a.w;$p=19;continue _;}if(!a.bm){b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;}if(!a.bm){b=a.cG;$p=21;continue _;}}a.c8=B1();return;case 5:Vv(b);if(C()){break _;}while(true){while(true){if(!EO()){if(a.cK
>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,
1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fw.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;else break;}c=F4();if(c)Fg(a.e.F,c);if(a.A!==null){if(a.A===null)continue;else{b=a.A;continue _;}}if(!a.bj&&Cm()){$p=8;continue _;}if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()!=2)continue;if(!Cm())continue;else break;}$p=16;continue _;case 6:AMP(b);if(C())
{break _;}while(true){e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()==a.r.fw.by)DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;else break;}if(a.A!==null){b=a.A;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf
?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()!=a.r.fF.by)continue;else{b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}}$p=9;continue _;case 7:ADT(b);if(C()){break _;}if(!a.bm)GK(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FM(a)){b=a.w;$p=19;continue _;}if(a.bm){if(a.bm){a.c8=B1();return;}b=a.cG;$p=21;continue _;}b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;case 8:AAM(a);if(C()){break _;}while(true){while(true){if(!EO()){if(a.cK>0)a.cK=a.cK-1|0;while(true)
{if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=
0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fw.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;else break;}c=F4();if(c)Fg(a.e.F,c);if(a.A!==null){if(a.A===null)continue;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm()){continue _;}if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()!=2)continue;if(!Cm())continue;else break;}$p=16;continue _;case 9:AF8(a);if(C()){break _;}while(true){if(a.ce instanceof C_)
{Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()==a.r.fw.by)DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,
Be(),CD());if(!CD())continue;else break;}if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()!=1)continue;else break;}continue _;case 10:Ws(a,c,e);if(C()){break _;}if(a.A!==null)a.b2=a.bD+10000|0;if(a.A!==null){b=a.A;$p=4;continue _;}if(a.w!==null){a.w.h4=a.r.iY;if(!a.bm){b=a.ek;$p=7;continue _;}if(!a.bm)GK(a.dB);if(!a.bm){b=a.w;$p=13;continue _;}if(!a.bm&&!FM(a)){b=a.w;$p=19;continue _;}if(!a.bm){b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;}if(!a.bm){b=a.cG;$p=21;continue _;}}a.c8=B1();return;case 11:XH(a,
c);if(C()){break _;}a.b2=a.bD;while(true){if(CE()==1&&Cm()){c=1;$p=14;continue _;}if(CE()==2&&Cm()){$p=16;continue _;}while(true){while(true){if(!EO()){if(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if
(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fw.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;else break;}c=F4();if(c)Fg(a.e.F,c);if(a.A===null)break;if(a.A===null)continue;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm())break;if(CE())continue;if(!Cm())continue;else
{c=0;continue _;}}$p=8;continue _;case 12:XH(a,c);if(C()){break _;}a.b2=a.bD;if(B0(1)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=1;$p=15;continue _;}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;case 13:AJS(b);if(C()){break _;}if(!a.bm&&!FM(a)){b=a.w;$p=19;continue _;}if(a.bm){if(a.bm){a.c8=B1();return;}b=a.cG;$p=21;continue _;}b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;case 14:XH(a,c);if(C()){break _;}a.b2=a.bD;while(true){if(CE()==2&&Cm()){$p=16;continue _;}while(true){while(true){if(!EO()){if
(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,
1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fw.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;else break;}c=F4();if(c)Fg(a.e.F,c);if(a.A===null)break;if(a.A===null)continue;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm())break;if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()!=1)continue;if(!Cm())continue;else{c=1;continue _;}}$p=8;continue _;case 15:XH(a,c);if(C()){break _;}a.b2=a.bD;c=0;e=a.A===
null&&B0(0)&&a.bj?1:0;$p=10;continue _;case 16:AC2(a);if(C()){break _;}while(true){while(true){if(!EO()){if(a.cK>0)a.cK=a.cK-1|0;while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:
1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()!=a.r.fw.by)continue;DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B1(),a.c8),Long_fromInt(200)))continue;else break;}c=F4();if(c)Fg(a.e.F,c);if(a.A!==null){if(a.A===null)continue;else{b=a.A;$p=5;continue _;}}if(!a.bj&&Cm()){$p=8;continue _;}if(!CE()&&Cm()){c=0;$p=11;continue _;}if(CE()==
1&&Cm()){c=1;$p=14;continue _;}if(CE()!=2)continue;if(!Cm())continue;else break;}continue _;case 17:Zu(a,b);if(C()){break _;}while(true){if(Be()==a.r.fF.by){b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()==a.r.fw.by)DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj
?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;else break;}if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6)){a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()!=a.r.eS.by)continue;else{b=En(a.e.F);continue _;}}$p=9;continue _;case 18:AAB(b,c,e,f);if(C()){break _;}if(a.bm){a.c8=B1();return;}b=a.cG;$p=21;continue _;case 19:T7(b);if(C()){break _;}if(a.bm){if(a.bm){a.c8=B1();return;}b=a.cG;$p=21;continue _;}b=a.w;c=I(a.e.c);e=I(a.e.j);f=I(a.e.d);$p=18;continue _;case 20:AK2(b,
d,c);if(C()){break _;}while(true){e=0;while(e<9){if(Be()==(2+e|0))a.e.F.bB=e;e=e+1|0;}if(Be()==a.r.fw.by)DH(a.r,4,!BH(42)&&!BH(54)?1:(-1));while(true){if(!Dt()){if(a.A===null){if(B0(0)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=0;$p=12;continue _;}if(B0(1)&&(a.bD-a.b2|0)>=a.bb.cI/4.0&&a.bj){c=1;$p=15;continue _;}}c=0;e=a.A===null&&B0(0)&&a.bj?1:0;$p=10;continue _;}DY(a.e,Be(),CD());if(!CD())continue;else break;}if(a.A!==null){b=a.A;$p=6;continue _;}if(Be()==1)break;if(a.ce instanceof C_){Be();Be();}if(Be()==33&&BH(6))
{a.r.cf=a.r.cf?0:1;a.cv=a.cv?0:1;}if(Be()==a.r.eS.by){b=En(a.e.F);$p=17;continue _;}if(Be()!=a.r.fF.by)continue;else{b=a.e;d=DT(a.e.F,a.e.F.bB,1);c=0;continue _;}}$p=9;continue _;case 21:WH(b);if(C()){break _;}a.c8=B1();return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function FM(a){return 0;}
function AC_(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:Xr(a,c);if(C()){break _;}c=new FO;d=FI(new Df);$p=2;case 2:N$(c,b,d);if(C()){break _;}if(!c.rS){b=B(174);$p=3;continue _;}b=B(175);$p=4;continue _;case 3:ABr(a,c,b);if(C()){break _;}return;case 4:ABr(a,c,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Xr(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=B(3);$p=1;case 1:ABr(a,b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function ABr(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.w!==null){d=a.w;e=a.hy;$p=1;continue _;}a.w=b;if(b===null){a.c8=Long_ZERO;return;}b.zW=a.ey;a.e=null;b.bd=a.e;$p=2;continue _;case 1:AEm(d,e);if(C()){break _;}a.w=b;if(b===null){a.c8=Long_ZERO;return;}b.zW=a.ey;a.e=null;b.bd=a.e;$p=2;case 2:AIF(a,c);if(C()){break _;}if(a.e===null){a.e=AWF(a,b,a.jZ);c=a.e;$p=3;continue _;}a.e.g9=Sg(a.r);if(a.dB!==null)Oa(a.dB,
b);if(a.cG!==null)ME(a.cG,b);b.bd=a.e;$p=4;continue _;case 3:AF4(c);if(C()){break _;}Oo(a.ce,a.e);a.e.g9=Sg(a.r);if(a.dB!==null)Oa(a.dB,b);if(a.cG!==null)ME(a.cG,b);b.bd=a.e;$p=4;case 4:ABN(b);if(C()){break _;}if(!b.rS){a.c8=Long_ZERO;return;}c=a.hy;$p=5;case 5:AEm(b,c);if(C()){break _;}a.c8=Long_ZERO;return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AIF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AJB(a.hy,b);b=a.hy;c=B(176);$p=1;case 1:AMm(b,c);if(C()){break _;}d=128;e=289;f=(-128);g=f;while(g<=d){h=a.w.eJ;i=a.w.eI;if(a.w.bd!==null){h=a.w.bd.c|0;i=a.w.bd.d|0;}j=f;if(j<=d){b=a.hy;k=0+1|0;l=(0*100|0)/e|0;$p=4;continue _;}g=g+16|0;}b=a.hy;c=B(177);$p=2;case 2:AMm(b,
c);if(C()){break _;}l=2000;A4g=1;d=0;if(d>=l){Sp(a.w);A4g=0;return;}b=a.w;m=1;$p=3;case 3:W_(b,m);if(C()){break _;}d=d+1|0;if(d>=l){Sp(a.w);A4g=0;return;}b=a.w;m=1;continue _;case 4:TL(b,l);if(C()){break _;}b=a.w;l=h+g|0;m=64;n=i+j|0;$p=5;case 5:Yc(b,l,m,n);if(C()){break _;}b=a.w;$p=6;case 6:$z=ADt(b);if(C()){break _;}l=$z;if(l){b=a.w;continue _;}j=j+16|0;m=k;while(true){if(j<=d){b=a.hy;k=m+1|0;l=(m*100|0)/e|0;$p=4;continue _;}g=g+16|0;if(g>d)break;h=a.w.eJ;i=a.w.eI;if(a.w.bd!==null){h=a.w.bd.c|0;i=a.w.bd.d
|0;}j=f;}b=a.hy;c=B(177);$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Kt(a){return AGg(a.dB);}
function L_(a){return T5(a.dB);}
function KP(a){var b;b=new Ba;Y(b);return N(H(H(H(H(b,B(178)),TC(a.cG)),B(179)),AIN(a.w)));}
function AMM(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.e!==null&&a.w!==null){b=a.e;$p=5;continue _;}b=a.w;$p=1;case 1:AKB(b);if(C()){break _;}a.e=AWF(a,a.w,a.jZ);b=a.e;$p=2;case 2:AF4(b);if(C()){break _;}Oo(a.ce,a.e);if(a.w!==null){a.w.bd=a.e;b=a.w;$p=4;continue _;}a.e.g9=Sg(a.r);b=B(180);$p=3;case 3:AIF(a,b);if(C()){break _;}return;case 4:ABN(b);if(C()){break _;}a.e.g9=Sg(a.r);b=B(180);$p=3;continue _;case 5:B3(b);if(C()){break _;}b=a.w;$p=1;continue _;default:
Es();}}CM().s(a,b,$p);}
function VS(){A33=$rt_createLongArray(512);A34=0;}
function VB(){E.call(this);}
function A4h(){var a=new VB();AUd(a);return a;}
function AUd(a){return;}
function L6(){var b,c;Z();b=document.pointerLockElement!=null?1:0;c=A3D;A3D=b;if(!c&&b){A3h=0.0;A3i=0.0;}a:{b:{if(A3m){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function AOs(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Z();AIh(A23);b=A21;c=A22;d=A20.width;e=A20.height;b.drawImage(c,0.0,0.0,d,e);f=A20.clientWidth;g=A20.clientHeight;if(!(f==A3j&&g==A3k)){A3j=f;A3k=g;c=A22;h=f;c.width=h;c=A22;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){}else{throw $$e;}}return;case 1:a:{try{AFE(i);if(C())
{break _;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){}else{throw $$e;}}}return;default:Es();}}CM().s(b,c,d,e,f,g,h,i,$p);}
function Kv(){var a=this;E.call(a);a.m1=null;a.Cg=null;a.CK=null;}
var A4i=null;function A1a(){A1a=Bt(Kv);AZ2();}
function AZ2(){var b;A4i=Ck();b=A4i;J();U(b,A4f);U(A4i,A4j);U(A4i,A4k);U(A4i,A4c);U(A4i,A4l);U(A4i,A4m);U(A4i,A4n);U(A4i,A4o);U(A4i,A4e);U(A4i,A4p);U(A4i,A4q);U(A4i,A4r);U(A4i,A4s);U(A4i,A4t);U(A4i,A4u);U(A4i,A4v);U(A4i,A4w);U(A4i,A4x);U(A4i,A4y);U(A4i,A4z);U(A4i,A4A);U(A4i,A4B);U(A4i,A4C);U(A4i,A4D);U(A4i,A4E);U(A4i,A4F);U(A4i,A4G);U(A4i,A4H);Xs(Ds(),A4i.p);}
function Fx(){var a=this;E.call(a);a.Fh=Long_ZERO;a.AR=0;a.As=Long_ZERO;a.uI=0;a.lB=null;a.zJ=null;a.B7=null;a.ul=0;a.v7=null;}
var A4I=null;var A2p=null;var A4J=Long_ZERO;var A4K=0;function A4L(){var a=new Fx();ACT(a);return a;}
function A1S(a){var b=new Fx();Qy(b,a);return b;}
function A0i(a,b){var c=new Fx();LR(c,a,b);return c;}
function ACT(a){LR(a,null,null);}
function Qy(a,b){LR(a,null,b);}
function LR(a,b,c){var d;a.lB=new E;a.ul=1;a.B7=c;a.v7=b;d=A4J;A4J=Long_add(d,Long_fromInt(1));a.Fh=d;}
function P_(a){var b;b=new SE;b.xe=a;ARM(b);}
function EL(b){if(A2p!==b)A2p=b;A2p.As=B1();}
function ALI(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.v7===null)return;b=a.v7;$p=1;case 1:Um(b);if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function AMX(){return A2p;}
function ASW(a,b){a.AR=b;}
function TG(){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=A2p;c=b.uI+1|0;b.uI=c;if(c<30)return;A2p.uI=0;if(Long_ge(Long_add(b.As,Long_fromInt(100)),B1()))return;$p=1;case 1:AGI(b);if(C()){break _;}return;default:Es();}}CM().s(b,c,$p);}
function AGI(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.CA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EK=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{AUO(b,callback);}catch($e){callback.EK($rt_exception($e));}});}
function AUO(b,c){var d;d=new PU;d.y7=b;d.y6=c;N_(d);}
function AFE(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.CA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EK=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{AOM(b,callback);}catch($e){callback.EK($rt_exception($e));}});}
function AOM(b,c){var d,e;d=A2p;e=new MS;e.ua=d;e.ye=c;e.E7=AA5(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.zJ=e;}
function U4(){A4I=A1S(B(181));A2p=A4I;A4J=Long_fromInt(1);A4K=1;}
function Do(){}
function Tb(){E.call(this);}
function A4M(){var a=new Tb();ATE(a);return a;}
function ATE(a){return;}
function AMQ(a,b){b.preventDefault();b.stopPropagation();}
function X0(a,b){AMQ(a,b);}
function AZv(a,b){X0(a,b);}
function Th(){E.call(this);}
function A4N(){var a=new Th();ARp(a);return a;}
function ARp(a){return;}
function ALX(a,b){var c,d;c=b.button;d=OW();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;EM(KS(),b);b.preventDefault();b.stopPropagation();KB();}
function ADY(a,b){ALX(a,b);}
function AQh(a,b){ADY(a,b);}
function Ti(){E.call(this);}
function A4O(){var a=new Ti();APY(a);return a;}
function APY(a){return;}
function AKY(a,b){var c,d;c=b.button;d=OW();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;EM(KS(),b);b.preventDefault();b.stopPropagation();}
function VK(a,b){AKY(a,b);}
function AUz(a,b){VK(a,b);}
function Tf(){E.call(this);}
function A4P(){var a=new Tf();AVt(a);return a;}
function AVt(a){return;}
function AJg(a,b){var c;Z();A3f=b.offsetX;A3g=A20.clientHeight-b.offsetY|0;c=b.movementX;A3h=A3h+c;c= -b.movementY;A3i=A3i+c;b.preventDefault();b.stopPropagation();}
function YZ(a,b){AJg(a,b);}
function AMZ(a,b){YZ(a,b);}
function Tg(){E.call(this);}
function A4Q(){var a=new Tg();AZ8(a);return a;}
function AZ8(a){return;}
function AAc(a,b){No().data[P1(NU(b))]=1;EM(LB(),b);b.preventDefault();b.stopPropagation();KB();}
function AK6(a,b){AAc(a,b);}
function AUH(a,b){AK6(a,b);}
function Td(){E.call(this);}
function A4R(){var a=new Td();AUX(a);return a;}
function AUX(a){return;}
function Vx(a,b){No().data[P1(NU(b))]=0;EM(LB(),b);b.preventDefault();b.stopPropagation();}
function TZ(a,b){Vx(a,b);}
function ATC(a,b){TZ(a,b);}
function Te(){E.call(this);}
function A4S(){var a=new Te();AP$(a);return a;}
function AP$(a){return;}
function AMq(a,b){Z();if(A3l&&(b.repeat?1:0))EM(LB(),b);b.preventDefault();b.stopPropagation();}
function AFZ(a,b){AMq(a,b);}
function AWx(a,b){AFZ(a,b);}
function Tc(){E.call(this);}
function A4T(){var a=new Tc();AUb(a);return a;}
function AUb(a){return;}
function AAN(a,b){EM(KS(),b);b.preventDefault();b.stopPropagation();}
function Yd(a,b){AAN(a,b);}
function AN2(a,b){Yd(a,b);}
function NQ(){E.call(this);}
function A4U(){var a=new NQ();ATv(a);return a;}
function ATv(a){return;}
function AAP(a,b){PQ(0);}
function AHf(a,b){AAP(a,b);}
function AW0(a,b){AHf(a,b);}
function NP(){E.call(this);}
function A4V(){var a=new NP();AUT(a);return a;}
function AUT(a){return;}
function AB9(a,b){PQ(1);KB();}
function AHe(a,b){AB9(a,b);}
function AQ3(a,b){AHe(a,b);}
function LG(){E.call(this);}
var A4W=null;var A30=null;function A4X(){var a=new LG();ZG(a);return a;}
function ZG(a){return;}
function AEQ(){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(182);$p=1;case 1:$z=AUD(b);if(C()){break _;}b=$z;if(b===null){A4W=B(165);return A4Y;}if(b.Bt)return A4Z;if(!b.BF&&b.vq!==null){A30=b.vq;return A40;}A4W=b.sB!==null?b.sB:B(183);return A4Y;default:Es();}}CM().s(b,$p);}
function AEf(b){var c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=A30;$p=1;case 1:$z=AN_(c,b);if(C()){break _;}c=$z;if(c!==A41?0:1)return;d=JV(b,47);if(d>0){c=Gt(b,0,d);$p=3;continue _;}c=A30;d=1;e=new ArrayBuffer(0);$p=2;case 2:AQq(c,b,d,e);if(C()){break _;}return;case 3:AEf(c);if(C()){break _;}c=A30;d=1;e=new ArrayBuffer(0);$p=2;continue _;default:Es();}}CM().s(b,c,d,e,$p);}
function ACV(){A4W=B(3);A30=null;}
function WG(){E.call(this);}
function AQQ(){var Context=window.AudioContext||window.webkitAudioContext;return new Context();}
function Rc(){E.call(this);}
var A3Z=null;function A42(){var a=new Rc();AK1(a);return a;}
function AK1(a){return;}
function AG4(b){var c,d,e,f,g,h,i,j,k,l,m;c=QO(b);d=MB(c);e=$rt_createByteArray(8);LE(d,e);if(!DU(B(184),AUc(e,T8(B(18))))){c=new BU;Bl(c,B(185));M(c);}FY(d);f=new Nn;d=new SV;g=new QM;Mv(g);g.qb=0;h=Pc(g,15,0);if(h){c=new Nr;f=new Ba;Y(f);Bl(c,N(H(H(Bb(f,h),B(11)),g.bQ)));M(c);}Pd(d,c);d.oJ=0;d.ni=0;d.A9=1;d.AQ=0;d.up=$rt_createByteArray(1);d.C5=$rt_createByteArray(512);d.gk=g;d.m0=$rt_createByteArray(512);d.A9=1;d.AQ=1;ADC(f,d);g=A0T();while(true){d=FY(f);if(!DU(B(186),d)){if(AFB(f)<=0&&DU(B(187),d))return;c
=new BU;Bl(c,B(185));M(c);}i=FY(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);LE(f,j);l=GT(f);m=$rt_createByteArray(l);LE(f,m);if(Dv(A3Z,i))continue;a:{Zs(g,m,0,l);AG2(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){l=0;while(l<h){if(b[l]!=e[l]){h=0;break a;}l=l+1|0;}h=1;break a;}}h=0;}}if(!h){c=new BU;f=new Ba;Y(f);Bl(c,N(H(H(f,B(188)),i)));M(c);}BK(A3Z,i,m);if(!DU(B(189),FY(f)))break;}c=new BU;Bl(c,B(185));M(c);}
function Vb(){A3Z=CY();}
function BU(){BB.call(this);}
function A43(){var a=new BU();AUM(a);return a;}
function AUM(a){Q(a);}
function MT(){GD.call(this);}
function A44(){var a=new MT();AWm(a);return a;}
function AWm(a){Y(a);}
function ACE(a,b,c,d){RU(a,a.dm,b,c,d);return a;}
function RU(a,b,c,d,e){var f,g,h,i;CL(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.M.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function AO8(a,b,c,d,e){return RU(a,b,c,d,e);}
function AU6(a,b){KZ(a,b);}
function EP(){}
function Sf(){E.call(this);}
function A45(){var a=new Sf();ARr(a);return a;}
function ARr(a){return;}
function Hm(){E.call(this);this.kS=0;}
var A46=null;var A47=null;function ATB(a){var b=new Hm();WB(b,a);return b;}
function WB(a,b){a.kS=b;}
function BC(b){var c;if(b>=A47.data.length)return ATB(b);c=A47.data[b];if(c===null){c=ATB(b);A47.data[b]=c;}return c;}
function AZz(a,b){if(a===b)return 1;return b instanceof Hm&&b.kS==a.kS?1:0;}
function AZo(a){return a.kS;}
function IB(b){return (b&64512)!=55296?0:1;}
function I4(b){return (b&64512)!=56320?0:1;}
function S9(b){return !IB(b)&&!I4(b)?0:1;}
function KC(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IW(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ij(b){return (56320|b&1023)&65535;}
function L1(b){return Oc(b)&65535;}
function Oc(b){return AKy(b).toLowerCase().charCodeAt(0);}
function N6(b){return AKy(b).toUpperCase().charCodeAt(0);}
function HB(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function YS(a,b){return a.kS-b.kS|0;}
function AUi(a,b){return YS(a,b);}
function ADW(){A46=K($rt_charcls());A47=O(Hm,128);}
function Hz(){var a=this;E.call(a);a.cy=null;a.Az=0;}
function AE7(a){return 1;}
function AYl(a,b){return;}
function Q_(){var a=this;Hz.call(a);a.tL=0;a.tN=0;a.tM=0;a.gH=0.0;a.ly=0.0;a.m2=0.0;a.lZ=0;a.yk=null;a.yB=null;}
function Oo(a,b){b.q=(-180.0);}
function AY_(a){return;}
function AAZ(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cy.w;$p=1;case 1:$z=Yc(e,b,c,d);if(C()){break _;}f=$z;e=a.cy.w;$p=2;case 2:$z=AAd(e,b,c,d);if(C()){break _;}g=$z;e=a.cy.cG;$p=3;case 3:Z$(e,b,c,d);if(C()){break _;}e=a.cy.w;J();h=A3_.data;$p=4;case 4:$z=Yc(e,b,c,d);if(C()){break _;}i=$z;j=h[i];$p=5;case 5:$z=AAd(e,b,c,d);if(C()){break _;}i=$z;k
=0;$p=6;case 6:$z=AJ9(e,b,c,d,k);if(C()){break _;}k=$z;if(j!==null&&k){$p=7;continue _;}e=IT(a.cy.e);if(e!==null){NX(e,f,b,c,d);if(!e.m)H4(a.cy.e);}if(k&&K7(a.cy.e,A3_.data[f])){e=A3_.data[f];j=a.cy.w;$p=8;continue _;}return k;case 7:j.l_(e,b,c,d,i);if(C()){break _;}e=IT(a.cy.e);if(e!==null){NX(e,f,b,c,d);if(!e.m)H4(a.cy.e);}if(k&&K7(a.cy.e,A3_.data[f])){e=A3_.data[f];j=a.cy.w;$p=8;continue _;}return k;case 8:e.EC(j,b,c,d,g);if(C()){break _;}return k;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAw(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cy.w;$p=1;case 1:$z=Yc(e,b,c,d);if(C()){break _;}f=$z;if(f>0&&a.gH===0.0){J();e=A3_.data[f];g=a.cy.w;h=a.cy.e;$p=3;continue _;}if(f<=0)return;J();e=A3_.data[f];g=a.cy.e;$p=2;case 2:$z=WZ(e,g);if(C()){break _;}i=$z;if(i<1.0)return;$p=4;continue _;case 3:e.ps(g,b,c,d,h);if(C()){break _;}if(f<=0)return;J();e=A3_.data[f];g
=a.cy.e;$p=2;continue _;case 4:AAZ(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AGK(a){a.gH=0.0;a.lZ=0;}
function UM(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.lZ>0)a.lZ=a.lZ-1|0;else{if(b==a.tL&&c==a.tN&&d==a.tM){f=a.cy.w;$p=1;continue _;}a.gH=0.0;a.ly=0.0;a.m2=0.0;a.tL=b;a.tN=c;a.tM=d;}return;case 1:$z=Yc(f,b,c,d);if(C()){break _;}g=$z;if(!g)return;J();f=A3_.data[g];h=a.gH;i=a.cy.e;$p=2;case 2:$z=WZ(f,i);if(C()){break _;}j=$z;a.gH=h+j;a.m2=a.m2+1.0;if(a.gH<1.0)return;$p
=3;case 3:AAZ(a,b,c,d);if(C()){break _;}a.gH=0.0;a.ly=0.0;a.m2=0.0;a.lZ=5;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function FU(a,b){var c;if(a.gH<=0.0){a.cy.mG.AW=0.0;a.cy.dB.rW=0.0;}else{c=a.ly+(a.gH-a.ly)*b;a.cy.mG.AW=c;a.cy.dB.rW=c;}}
function ASV(a){return 4.0;}
function AVx(a,b){return;}
function AD6(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.ly=a.gH;b=a.yk;c=a.cy.w;$p=1;case 1:Xi(b,c);if(C()){break _;}b=a.yB;c=a.cy.w;$p=2;case 2:Xi(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function PD(){var a=this;E.call(a);a.cI=0.0;a.zE=0.0;a.h8=0;a.cz=0.0;a.zN=0.0;a.kC=0.0;a.q5=Long_ZERO;a.qc=Long_ZERO;a.ml=0.0;}
function E2(a){var b,c,d,e,f;b=B1();c=Long_sub(b,a.q5);d=Long_div(D7(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.qc));a.ml=a.ml+(e-a.ml)*0.20000000298023224;a.q5=b;a.qc=d;}if(Long_lt(c,Long_ZERO)){a.q5=b;a.qc=d;}f=Long_toNumber(d)/1000.0;e=(f-a.zE)*a.ml;a.zE=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.kC=a.kC+e*a.zN*a.cI;a.h8=a.kC|0;a.kC=a.kC-a.h8;if(a.h8>10)a.h8=10;a.cz=a.kC;}
function RV(){}
function Pa(){var a=this;E.call(a);a.mL=null;a.e6=null;a.kY=null;a.jN=Long_ZERO;a.kF=0;}
function AJB(a,b){a.kF=0;O1(a,b);}
function UI(a,b){a.kF=1;O1(a,a.kY);}
function O1(a,b){var c,d,e;a:{if(!a.e6.f9){if(a.kF)break a;b=new Hn;Q(b);M(b);}a.kY=b;c=EW(a.e6.b5,a.e6.bw);d=c.fa;e=c.e8;DA(256);CU(5889);CT();G9(0.0,d,e,0.0,100.0,300.0);CU(5888);CT();Br(0.0,0.0,(-200.0));}}
function AMm(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.e6.f9){if(a.kF)return;b=new Hn;Q(b);M(b);}a.jN=Long_ZERO;a.mL=b;c=(-1);$p=1;case 1:TL(a,c);if(C()){break _;}a.jN=Long_ZERO;return;default:Es();}}CM().s(a,b,c,$p);}
function AMk(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.e6.f9){if(a.kF)return;b=new Hn;Q(b);M(b);}a.jN=Long_ZERO;a.mL=c;a.kY=b;d=(-1);$p=1;case 1:TL(a,d);if(C()){break _;}a.jN=Long_ZERO;return;default:Es();}}CM().s(a,b,c,d,$p);}
function TL(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.e6.f9){if(a.kF)break a;c=new Hn;Q(c);M(c);}d=B1();if(Long_ge(Long_sub(d,a.jN),Long_fromInt(20))){a.jN=d;c=EW(a.e6.b5,a.e6.bw);e=c.fa;f=c.e8;DA(256);CU(5889);CT();g=e;h=f;G9(0.0,g,h,0.0,100.0,300.0);CU(5888);CT();Br(0.0,
0.0,(-200.0));DA(16640);Bv();i=A37;c=a.e6.bi;j=B(159);$p=1;continue _;}}return;case 1:$z=ACM(c,j);if(C()){break _;}k=$z;Cf(3553,k);Bu(i);Ec(i,4210752);l=f/32.0;F(i,0.0,h,0.0,0.0,l);m=e/32.0;F(i,g,h,0.0,m,l);F(i,g,0.0,0.0,m,0.0);F(i,0.0,0.0,0.0,0.0,0.0);Bn(i);if(b>=0){n=(e/2|0)-50|0;o=(f/2|0)+16|0;X(3553);Bu(i);Ec(i,8421504);g=n;p=o;Bd(i,g,p,0.0);m=o+2|0;Bd(i,g,m,0.0);q=n+100|0;Bd(i,q,m,0.0);Bd(i,q,p,0.0);Ec(i,8454016);Bd(i,g,p,0.0);Bd(i,g,m,0.0);q=n+b|0;Bd(i,q,m,0.0);Bd(i,q,p,0.0);Bn(i);V(3553);}c=a.e6.ey;i
=a.kY;b=(e-Db(a.e6.ey,a.kY)|0)/2|0;r=(f/2|0)-4|0;Cn(c,i,b,r-16|0,16777215);Cn(a.e6.ey,a.mL,(e-Db(a.e6.ey,a.mL)|0)/2|0,r+8|0,16777215);$p=2;case 2:AOs();if(C()){break _;}try{$p=3;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){}else{throw $$e;}}return;case 3:b:{try{TG();if(C()){break _;}break b;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){}else{throw $$e;}}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ABe(){var a=this;E.call(a);a.y=null;a.oW=0;a.kM=0.0;a.hM=null;a.rY=0;a.ox=null;a.ki=null;a.D4=0;a.D3=0;a.or=null;a.db=0.0;a.dz=0.0;a.dp=0.0;a.mV=0.0;a.k0=0.0;}
function A1x(a){var b=new ABe();ANV(b,a);return b;}
function ANV(a,b){var c;a.oW=0;a.kM=0.0;a.ox=null;a.ki=new Df;a.D4=0;a.D3=0;a.or=FW(16);a.y=b;c=new MO;c.ei=null;c.ic=0.0;c.pu=0.0;c.hC=0;c.iR=0;c.xy=IK();c.cq=b;a.hM=c;}
function ADT(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mV=a.k0;b=a.y.w;c=I(a.y.e.c);d=I(a.y.e.j);e=I(a.y.e.d);$p=1;case 1:$z=AH1(b,c,d,e);if(C()){break _;}f=$z;g=(3-a.y.r.ha|0)/3.0;h=f*(1.0-g)+g;a.k0=a.k0+(h-a.k0)*0.10000000149011612;a.rY=a.rY+1|0;AEd(a.hM);if(a.y.cv)
{b=a.y.e;i=a.y.w;d=I(b.c);j=I(b.j);k=I(b.d);l=4;m=0;n=63;e=S(64,j+4|0);j=S(64,j-4|0);o=64.0999984741211;if(m<50){p=(d+D(a.ki,9)|0)-l|0;q=(k+D(a.ki,9)|0)-l|0;$p=2;continue _;}}return;case 2:$z=Yc(i,p,n,q);if(C()){break _;}c=$z;if(e<=0&&j>=0){f=L(a.ki);g=L(a.ki);if(c>0){b=a.y.cG;r=new Ie;s=p+f;J();Qw(r,i,s,o-A3_.data[c].cm,q+g);DS(b,r);}}m=m+1|0;if(m>=50)return;p=(d+D(a.ki,9)|0)-l|0;q=(k+D(a.ki,9)|0)-l|0;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function Lx(a,b){var c,d,e,f;c=a.y.e;d=c.bH;e=c.c-c.bH;f=b;return BS(d+e*f,c.ct+(c.j-c.ct)*f,c.bG+(c.d-c.bG)*f);}
function AGN(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=c.P+(c.E-c.P)*b;e=c.K+(c.q-c.K)*b;f=Lx(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=Bx(g);i=Bm(g);g= -d*0.01745329238474369;j= -Bx(g);g=Bm(g);k=i*j;l
=h*j;m=4.0;n=k;o=n*m;p=g;q=p*m;r=l;s=C3(f,o,q,r*m);t=a.y;u=a.y.w;$p=1;case 1:$z=AEp(u,f,s);if(C()){break _;}u=$z;t.bV=u;f=Lx(a,b);if(a.y.bV!==null)m=Di(a.y.bV.fR,f);if(a.y.ce instanceof C_)m=32.0;else if(m>3.0)m=3.0;n=n*m;p=p*m;r=r*m;s=C3(f,n,p,r);a.ox=null;t=a.y.w;u=HN(c.G,n,p,r);$p=2;case 2:$z=Zm(t,c,u);if(C()){break _;}t=$z;n=0.0;v=0;while(v<t.p){u=Bc(t,v);if(u.ko()){w=N3(Da(u.G,0.10000000149011612,0.10000000149011612,0.10000000149011612),f,s);if(w!==null){p=Di(f,w.fR);if(!(p>=n&&n!==0.0)){a.ox=u;n=p;}}}v
=v+1|0;}if(a.ox!==null&&!(a.y.ce instanceof C_))a.y.bV=ASR(a.ox);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function Zl(a,b){var c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=70.0;e=A48;$p=1;case 1:$z=AB3(c,e);if(C()){break _;}f=$z;if(f)d=60.0;if(c.bI<=0)d=d/((1.0-500.0/(c.cD+b+500.0))*2.0+1.0);return d;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Ki(a,b){var c,d,e;c=a.y.e;d=c.c$-b;if(c.bI<=0)Bq(40.0-8000.0/(c.cD+b+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.Bg;b=Bm(b*b*b*b*3.1415927410125732);e=c.jG;Bq( -e,0.0,1.0,0.0);Bq( -b*14.0,0.0,0.0,1.0);Bq(e,0.0,1.0,0.0);}}
function Ho(a,b){var c,d,e,f,g;if(!a.y.r.cf){c=a.y.e;d=c.gu-c.r5;e=c.gu+d*b;f=c.oZ+(c.jV-c.oZ)*b;g=c.jY+(c.ip-c.jY)*b;d=e*3.1415927410125732;Br(Bm(d)*f*0.5, -GM(Bx(d)*f),0.0);Bq(Bm(d)*f*3.0,0.0,0.0,1.0);Bq(GM(Bx(d+0.20000000298023224)*f)*5.0,1.0,0.0,0.0);Bq(g,1.0,0.0,0.0);}}
function ADj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=c.bH;e=c.c-c.bH;f=b;g=d+e*f;h=c.ct+(c.j-c.ct)*f;i=c.bG+(c.d-c.bG)*f;if(!a.y.r.cf)Br(0.0,0.0,(-0.10000000149011612));else{j=4.0;d= -Bm(c.q/180.0*3.1415927410125732)*Bx(c.E
/180.0*3.1415927410125732)*j;e=Bx(c.q/180.0*3.1415927410125732)*Bx(c.E/180.0*3.1415927410125732)*j;f= -Bm(c.E/180.0*3.1415927410125732)*j;k=0;l=g-d;d=h-f;f=i-e;if(k<8){m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.y.w;e=m;q=g+e;r=n;s=h+r;t=o;u=BS(q,s,i+t);v=BS(l+e+t,d+r,f+t);$p=1;continue _;}Br(0.0,0.0, -j);}Bq(c.P+(c.E-c.P)*b,1.0,0.0,0.0);Bq(c.K+(c.q-c.K)*b+180.0,0.0,1.0,0.0);return;case 1:$z=AEp(p,u,v);if(C()){break _;}u
=$z;if(u!==null){q=Di(u.fR,BS(g,h,i));if(q<j)j=q;}k=k+1|0;if(k>=8){Br(0.0,0.0, -j);Bq(c.P+(c.E-c.P)*b,1.0,0.0,0.0);Bq(c.K+(c.q-c.K)*b+180.0,0.0,1.0,0.0);return;}m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.y.w;e=m;q=g+e;r=n;s=h+r;t=o;u=BS(q,s,i+t);v=BS(l+e+t,d+r,f+t);continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AA8(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CT();if(a.y.r.d5)Br(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);BW();Ki(a,b);if(a.y.r.io)Ho(a,b);if(!a.y.r.cf){d=a.hM;$p=1;continue _;}By();if(a.y.r.cf){if(a.y.r.io)Ho(a,b);return;}d=a.hM;$p=2;continue _;case 1:YA(d,b);if(C()){break _;}By();if(a.y.r.cf){if(a.y.r.io)Ho(a,b);return;}d=a.hM;$p=2;case 2:XQ(d,b);if(C()){break _;}Ki(a,b);if(a.y.r.io)Ho(a,b);return;default:Es();}}CM().s(a,
b,c,d,$p);}
function ABc(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.oW&&!L6()){c=a.y;$p=1;continue _;}a.oW=L6();Z();d=A3h;A3h=0.0;e=d|0;d=A3i;A3i=0.0;f=d|0;g=1;if(a.y.r.lQ)g=(-1);if(a.y.bj&&a.y.w!==null)Tq(a.y.e,e,Bh(f,g));if(!a.y.hh){c=EW(a.y.b5,a.y.bw);f=c.fa;e=c.e8;h=Bh(A3f,f)/a.y.b5|0;i=(e-(Bh(A3g,e)/a.y.bw|0)|0)-1|0;if(a.y.w!==null){$p=2;continue _;}Gf(0,0,a.y.b5,a.y.bw);Gs(0.0,
0.0,0.0,0.0);DA(16640);CU(5889);CT();CU(5888);CT();JS(a);if(a.y.A!==null){DA(256);c=a.y.A;$p=3;continue _;}}return;case 1:AF8(c);if(C()){break _;}a.oW=L6();Z();d=A3h;A3h=0.0;e=d|0;d=A3i;A3i=0.0;f=d|0;g=1;if(a.y.r.lQ)g=(-1);if(a.y.bj&&a.y.w!==null)Tq(a.y.e,e,Bh(f,g));if(!a.y.hh){c=EW(a.y.b5,a.y.bw);f=c.fa;e=c.e8;h=Bh(A3f,f)/a.y.b5|0;i=(e-(Bh(A3g,e)/a.y.bw|0)|0)-1|0;if(a.y.w!==null){$p=2;continue _;}Gf(0,0,a.y.b5,a.y.bw);Gs(0.0,0.0,0.0,0.0);DA(16640);CU(5889);CT();CU(5888);CT();JS(a);if(a.y.A!==null){DA(256);c
=a.y.A;$p=3;continue _;}}return;case 2:V8(a,b);if(C()){break _;}c=a.y.mG;g=a.y.A===null?0:1;$p=4;continue _;case 3:c.hF(h,i,b);if(C()){break _;}return;case 4:AKk(c,b,g,h,i);if(C()){break _;}if(a.y.A===null)return;DA(256);c=a.y.A;$p=3;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function V8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AGN(a,b);if(C()){break _;}c=a.y.e;d=a.y.dB;e=a.y.cG;f=c.b6;g=c.c-c.b6;h=b;i=f+g*h;f=c.bP+(c.j-c.bP)*h;g=c.b7+(c.d-c.b7)*h;j=0;if(j>=2){ET(1,1,1,0);return;}if(a.y.r.d5){if(j)ET(1,0,0,0);else ET(0,1,1,0);}Gf(0,0,a.y.b5,a.y.bw);$p=2;case 2:ZB(a,
b);if(C()){break _;}DA(16640);V(2884);a.kM=256>>a.y.r.ha;CU(5889);CT();if(a.y.r.d5)Br( -((j*2|0)-1|0)*0.07000000029802322,0.0,0.0);$p=3;case 3:$z=Zl(a,b);if(C()){break _;}k=$z;AJ$(k,a.y.b5/a.y.bw,0.05000000074505806,a.kM);CU(5888);CT();if(a.y.r.d5)Br(((j*2|0)-1|0)*0.10000000149011612,0.0,0.0);Ki(a,b);if(a.y.r.io)Ho(a,b);$p=4;case 4:ADj(a,b);if(C()){break _;}O4();if(a.y.r.ha<2){l=(-1);$p=13;continue _;}V(2912);l=1;$p=5;case 5:AMy(a,l);if(C()){break _;}m=A1l();AI0(m,i,f,g);AL3(a.y.dB,m,b);n=a.y.dB;l=0;$p=6;case 6:ADr(n,
c,l);if(C()){break _;}l=0;$p=7;case 7:AMy(a,l);if(C()){break _;}V(2912);l=3553;n=a.y.bi;o=B(173);$p=8;case 8:$z=ACM(n,o);if(C()){break _;}p=$z;Cf(l,p);Dr();RG(d,c,0,h);Gp();n=Lx(a,b);$p=9;case 9:Yh(d,n,m,b);if(C()){break _;}$p=10;case 10:XB(e,c,b);if(C()){break _;}Dr();l=0;$p=11;case 11:AMy(a,l);if(C()){break _;}$p=12;case 12:WX(e,c,b);if(C()){break _;}if(a.y.bV!==null){m=A48;$p=17;continue _;}C0(770,771);l=0;$p=15;continue _;case 13:AMy(a,l);if(C()){break _;}$p=14;case 14:YQ(d,b);if(C()){break _;}V(2912);l
=1;$p=5;continue _;case 15:AMy(a,l);if(C()){break _;}V(3042);X(2884);l=3553;m=a.y.bi;n=B(173);$p=16;case 16:$z=ACM(m,n);if(C()){break _;}p=$z;Cf(l,p);RG(d,c,1,h);FD(1);V(2884);X(3042);if(a.y.bV!==null){m=A48;$p=18;continue _;}X(2912);if(a.y.cv){$p=21;continue _;}l=0;$p=24;continue _;case 17:$z=AB3(c,m);if(C()){break _;}l=$z;if(!l){C0(770,771);l=0;$p=15;continue _;}X(3008);m=a.y.bV;l=0;n=DE(c.F);$p=19;continue _;case 18:$z=AB3(c,m);if(C()){break _;}l=$z;if(!l){X(3008);m=a.y.bV;l=0;n=DE(c.F);$p=22;continue _;}X(2912);if
(a.y.cv){$p=21;continue _;}l=0;$p=24;continue _;case 19:AA7(d,c,m,l,n,b);if(C()){break _;}m=a.y.bV;l=0;n=DE(c.F);$p=20;case 20:ABE(d,c,m,l,n,b);if(C()){break _;}V(3008);C0(770,771);l=0;$p=15;continue _;case 21:TV(a,b);if(C()){break _;}l=0;$p=24;continue _;case 22:AA7(d,c,m,l,n,b);if(C()){break _;}n=a.y.bV;l=0;m=DE(c.F);$p=23;case 23:ABE(d,c,n,l,m,b);if(C()){break _;}V(3008);X(2912);if(a.y.cv){$p=21;continue _;}l=0;$p=24;case 24:AMy(a,l);if(C()){break _;}V(2912);$p=25;case 25:UL(d,b);if(C()){break _;}X(2912);l
=1;$p=26;case 26:AMy(a,l);if(C()){break _;}DA(256);$p=27;case 27:AA8(a,b,j);if(C()){break _;}if(!a.y.r.d5)return;j=j+1|0;if(j>=2){ET(1,1,1,0);return;}if(a.y.r.d5){if(j)ET(1,0,0,0);else ET(0,1,1,0);}Gf(0,0,a.y.b5,a.y.bw);$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function TV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=I(c.c);e=I(c.j);f=I(c.d);Bv();g=A37;X(2884);B_(0.0,1.0,0.0);V(3042);C0(770,
771);h=3553;i=a.y.bi;j=B(190);$p=1;case 1:$z=ACM(i,j);if(C()){break _;}k=$z;Cf(h,k);k=d-5|0;d=d+5|0;h=f-5|0;l=f+5|0;m=e-5|0;n=e+5|0;e=S(m,64);o=S(n,64);while(k<=d){p=h;while(p<=l){q=e<0?64:m;r=o<0?64:n;if(q!=r){s=((((a.rY+(k*3121|0)|0)+Bh(p,418711)|0)%32|0)+b)/32.0;t=k+0.5-c.c;u=p+0.5-c.d;v=B7(t*t+u*u)/5.0;BN(1.0,1.0,1.0,(1.0-v*v)*0.699999988079071);Bu(g);u=k+0|0;w=q;x=p+0|0;v=q*2.0/8.0;y=s*2.0;z=v+y;F(g,u,w,x,0.0,z);ba=k+1|0;bb=p+1|0;F(g,ba,w,bb,2.0,z);bc=r;bd=r*2.0/8.0+y;F(g,ba,bc,bb,2.0,bd);F(g,u,bc,x,0.0,
bd);F(g,u,w,bb,0.0,z);F(g,ba,w,x,2.0,z);F(g,ba,bc,x,2.0,bd);F(g,u,bc,bb,0.0,bd);Bn(g);}p=p+1|0;}k=k+1|0;}V(2884);X(3042);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function JS(a){var b,c,d;b=EW(a.y.b5,a.y.bw);c=b.fa;d=b.e8;DA(256);CU(5889);CT();G9(0.0,c,d,0.0,1000.0,3000.0);CU(5888);CT();Br(0.0,0.0,(-2000.0));}
function ZB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.w;d=a.y.e;e=1.0-AT3(1.0/(4-a.y.r.ha|0),0.25);f=Mw(c,b);g=f.t;h=f.v;i=f.s;j=Y5(c,b);a.db=j.t;a.dz=j.v;a.dp=j.s;a.db=a.db+(g-a.db)*e;a.dz=a.dz+(h-a.dz)*e;a.dp=a.dp+(i-a.dp)*e;c=A48;$p=1;case 1:$z=AB3(d,c);if(C()){break _;}k=$z;if(k){a.db=0.019999999552965164;a.dz
=0.019999999552965164;a.dp=0.20000000298023224;e=a.mV+(a.k0-a.mV)*b;a.db=a.db*e;a.dz=a.dz*e;a.dp=a.dp*e;if(a.y.r.d5){l=(a.db*30.0+a.dz*59.0+a.dp*11.0)/100.0;m=(a.db*30.0+a.dz*70.0)/100.0;n=(a.db*30.0+a.dp*70.0)/100.0;a.db=l;a.dz=m;a.dp=n;}Gs(a.db,a.dz,a.dp,0.0);return;}c=A49;$p=2;case 2:$z=AB3(d,c);if(C()){break _;}k=$z;if(k){a.db=0.6000000238418579;a.dz=0.10000000149011612;a.dp=0.0;}e=a.mV+(a.k0-a.mV)*b;a.db=a.db*e;a.dz=a.dz*e;a.dp=a.dp*e;if(a.y.r.d5){l=(a.db*30.0+a.dz*59.0+a.dp*11.0)/100.0;m=(a.db*30.0+a.dz
*70.0)/100.0;n=(a.db*30.0+a.dp*70.0)/100.0;a.db=l;a.dz=m;a.dp=n;}Gs(a.db,a.dz,a.dp,0.0);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AMy(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y.e;d=a.db;e=a.dz;f=a.dp;D3(a.or);Cu(Cu(Cu(Cu(a.or,d),e),f),1.0);FE(a.or);g=a.or;BO();A4$=HX(g);A4_=HX(g);A5a=HX(g);A5b=HX(g);B_(0.0,(-1.0),0.0);BN(1.0,1.0,1.0,1.0);g=A48;$p=1;case 1:$z=AB3(c,g);if(C()){break _;}h=$z;if(h){Ko(2917,2048);FR(2914,0.10000000149011612);V(2903);return;}g=A49;$p=2;case 2:$z=AB3(c,g);if(C()){break _;}h
=$z;if(h){Ko(2917,2048);FR(2914,2.0);}else{Ko(2917,9729);FR(2915,a.kM*0.25);FR(2916,a.kM);if(b<0){FR(2915,0.0);FR(2916,a.kM*0.800000011920929);}}V(2903);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function DO(){E.call(this);this.vt=0.0;}
function KH(){var a=this;DO.call(a);a.h0=null;a.j9=null;a.nP=null;a.dv=null;a.dh=null;a.ia=null;a.gy=null;}
function AZx(){var a=new KH();I6(a);return a;}
function Ty(a){var b=new KH();ADR(b,a);return b;}
function A5c(a,b){var c=new KH();ALP(c,a,b);return c;}
function I6(a){ADR(a,0.0);}
function ADR(a,b){ALP(a,b,0.0);}
function ALP(a,b,c){var d,e;a.h0=BF(0,0);Bz(a.h0,(-4.0),(-8.0),(-4.0),8,8,8,b);d=a.h0;e=0.0+c;BD(d,0.0,e,0.0);a.j9=BF(32,0);Bz(a.j9,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BD(a.j9,0.0,e,0.0);a.nP=BF(16,16);Bz(a.nP,(-4.0),0.0,(-2.0),8,12,4,b);BD(a.nP,0.0,e,0.0);a.dv=BF(40,16);Bz(a.dv,(-3.0),(-2.0),(-2.0),4,12,4,b);d=a.dv;e=2.0+c;BD(d,(-5.0),e,0.0);a.dh=BF(40,16);a.dh.kw=1;Bz(a.dh,(-1.0),(-2.0),(-2.0),4,12,4,b);BD(a.dh,5.0,e,0.0);a.ia=BF(0,16);Bz(a.ia,(-2.0),0.0,(-2.0),4,12,4,b);d=a.ia;c=12.0+c;BD(d,(-2.0),c,0.0);a.gy
=BF(0,16);a.gy.kw=1;Bz(a.gy,(-2.0),0.0,(-2.0),4,12,4,b);BD(a.gy,2.0,c,0.0);}
function AY9(a,b,c,d,e,f,g){a.mZ(b,c,d,e,f,g);B2(a.h0,g);B2(a.nP,g);B2(a.dv,g);B2(a.dh,g);B2(a.ia,g);B2(a.gy,g);B2(a.j9,g);}
function ADU(a,b,c,d,e,f,g){var h;a.h0.bL=e/57.2957763671875;a.h0.bM=f/57.2957763671875;a.j9.bL=a.h0.bL;a.j9.bM=a.h0.bM;h=a.dv;e=b*0.6661999821662903;f=e+3.1415927410125732;h.bM=Bx(f)*2.0*c;a.dv.bJ=(Bx(b*0.23119999468326569)+1.0)*1.0*c;a.dh.bM=Bx(e)*2.0*c;a.dh.bJ=(Bx(b*0.28119999170303345)-1.0)*1.0*c;a.ia.bM=Bx(e)*1.399999976158142*c;a.gy.bM=Bx(f)*1.399999976158142*c;h=a.dv;c=h.bJ;b=d*0.09000000357627869;h.bJ=c+Bx(b)*0.05000000074505806+0.05000000074505806;h=a.dh;h.bJ=h.bJ-(Bx(b)*0.05000000074505806+0.05000000074505806);h
=a.dv;b=h.bM;c=d*0.06700000166893005;h.bM=b+Bm(c)*0.05000000074505806;h=a.dh;h.bM=h.bM-Bm(c)*0.05000000074505806;}
function DZ(){var a=this;E.call(a);a.c9=null;a.EJ=0;a.lq=0;a.DO=0;a.uG=0;}
function A5d(a){var b=new DZ();Gv(b,a);return b;}
function Gv(a,b){a.c9=$rt_createByteArray(1024);a.lq=0;a.DO=0;a.uG=1;a.EJ=b;}
function WE(){var a=this;DZ.call(a);a.n5=null;a.rG=null;a.mF=null;a.p8=null;a.va=0;}
function A0x(){var a=new WE();AZC(a);return a;}
function AZC(a){J();Gv(a,A5e.W);a.n5=$rt_createFloatArray(256);a.rG=$rt_createFloatArray(256);a.mF=$rt_createFloatArray(256);a.p8=$rt_createFloatArray(256);a.va=0;}
function AQY(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;a.va=a.va+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=b-1|0;while(e<=(b+1|0)){f=e&15;g=c&15;d=d+a.n5.data[f+(g*16|0)|0];e=e+1|0;}h=a.rG.data;i=b+(c*16|0)|0;h[i]=d/3.299999952316284+a.mF.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}c=0;while(c<16){j=0;while(j<16){k=a.mF.data;b=c+(j*16|0)|0;k[b]=k[b]+a.p8.data[b]*0.05000000074505806;if(a.mF.data[b]<0.0)a.mF.data[b]=0.0;k=a.p8.data;k[b]=k[b]-0.10000000149011612;if(BI()<0.05)a.p8.data[b]=0.5;j=j+1|0;}c=c+1|0;}k=a.rG;a.rG
=a.n5;a.n5=k;c=0;while(c<256){d=a.n5.data[c];if(d>1.0)d=1.0;if(d<0.0)d=0.0;l=d*d;i=32.0+l*32.0|0;m=50.0+l*64.0|0;n=255;o=146.0+l*50.0|0;if(a.lq){b=i*30|0;i=((b+(m*59|0)|0)+2805|0)/100|0;m=(b+(m*70|0)|0)/100|0;n=(b+17850|0)/100|0;}k=a.c9.data;j=c*4|0;k[j+0|0]=i<<24>>24;a.c9.data[j+1|0]=m<<24>>24;a.c9.data[j+2|0]=n<<24>>24;a.c9.data[j+3|0]=o<<24>>24;c=c+1|0;}}
function AFC(){var a=this;DZ.call(a);a.ok=null;a.pe=null;a.iz=null;a.qP=null;}
function A0U(){var a=new AFC();AS9(a);return a;}
function AS9(a){J();Gv(a,A5f.W);a.ok=$rt_createFloatArray(256);a.pe=$rt_createFloatArray(256);a.iz=$rt_createFloatArray(256);a.qP=$rt_createFloatArray(256);}
function AQ9(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bm(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bm(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){h=(g+e|0)&15;j=(i+f|0)&15;d=d+a.ok.data[h+(j*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.pe.data;l=b+(c*16|0)|0;d=d/10.0;m=a.iz.data;e=(b+0|0)&15;n=((c+0|0)&15)*16|0;o=m[e+n|0];m=a.iz.data;h=h&15;o=o+m[h+n|0];m=a.iz.data;c=c+1|0;n=(c&15)*16|0;k[l]=d+(o+m[h+n
|0]+a.iz.data[e+n|0])/4.0*0.800000011920929;m=a.iz.data;m[l]=m[l]+a.qP.data[l]*0.009999999776482582;if(a.iz.data[l]<0.0)a.iz.data[l]=0.0;m=a.qP.data;m[l]=m[l]-0.05999999865889549;if(BI()<0.005)a.qP.data[l]=1.5;}b=b+1|0;}m=a.pe;a.pe=a.ok;a.ok=m;n=0;while(n<256){d=a.ok.data[n]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;h=d*100.0+155.0|0;o=d*d;j=o*255.0|0;l=o*d*d*128.0|0;if(a.lq){e=h*30|0;h=((e+(j*59|0)|0)+(l*11|0)|0)/100|0;j=(e+(j*70|0)|0)/100|0;l=(e+(l*70|0)|0)/100|0;}m=a.c9.data;b=n*4|0;m[b+0|0]=h<<24>>24;a.c9.data[b
+1|0]=j<<24>>24;a.c9.data[b+2|0]=l<<24>>24;a.c9.data[b+3|0]=(-1);n=n+1|0;}}
function Kh(){E.call(this);}
var A5g=null;var A5h=null;function A5i(){var a=new Kh();ARH(a);return a;}
function ARH(a){return;}
function Ds(){if(A5g===null)A5g=AQ4(new Tj,0);return A5g;}
function CK(){if(A5h===null)A5h=AQ4(new Nc,0);return A5h;}
function De(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AJU(b)&&(e+f|0)<=AJU(d)){a:{b:{if(b!==d){g=I0(C4(b));h=I0(C4(d));if(g!==null&&h!==null){if(g===h)break b;if(!Fb(g)&&!Fb(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!QW(h,l[k])){RC(b,c,d,e,j);b=new Ik;Q(b);M(b);}j=j+1|0;k=m;}RC(b,c,d,e,f);return;}if(!Fb(g))break a;if(Fb(h))break b;else break a;}b=new Ik;Q(b);M(b);}}RC(b,c,d,e,f);return;}b=new Ik;Q(b);M(b);}b=new BP;Q(b);M(b);}d=new El;Bl(d,B(191));M(d);}
function RC(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function B1(){return Long_fromNumber(new Date().getTime());}
function D7(){return Long_fromNumber(performance.now()*1000000.0);}
function Lu(){E.call(this);}
var A5j=null;var A5k=null;function A5l(){var a=new Lu();ADu(a);return a;}
function ADu(a){return;}
function HA(b){var c,d,e,f,g,h;A0X(K(Lu));try{BO();c=A5m+1|0;d=0;while(d<b){e=A5m+1|0;A5m=e;f=A5n;g=CG(e);h=new OC;h.yx=e;h.pC=null;h.nx=null;h.kG=(-1);h.iN=0;BK(f,g,h);d=d+1|0;}U(A5j,CG(c));U(A5j,CG(b));return c;}finally{A2g(K(Lu));}}
function S1(b){var c,d,e,f,g;A0X(K(Lu));try{c=b.Z;while(c<b.cb){BO();d=A5o;Z();e=new MP;f=A23.createTexture();e.Ed=(-1);e.Ea=(-1);e.Cv=1;e.Dg=0;e.yN=f;g=P0(d,e);SW(b,c,g);U(A5k,CG(g));c=c+1|0;}}finally{A2g(K(Lu));}}
function SU(b){var c;c=Wf($rt_createByteArray(b));c.jL=A5p;return c;}
function Oq(b){return Rf($rt_createIntArray(b));}
function FW(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new SS;f=0+d|0;Jc(e,d);e.Z=0;e.cb=f;e.vT=0;e.u9=0;e.u4=c;return e;}
function AGP(){A5j=Ck();A5k=Ck();}
function Sb(){Fx.call(this);this.vR=null;}
function AE3(a){var b,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(a.vR.f9){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){}else{throw $$e;}}}return;case 1:a:{try{AFE(b);if(C()){break _;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){}else{throw $$e;}}}while(a.vR.f9){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof Ei){}else{throw $$e;}}}return;default:Es();}}CM().s(a,
b,$p);}
function Pu(){}
function G4(){}
function Fw(){E.call(this);}
function Ni(a){return a.f7?0:1;}
function Of(a,b){var c,d;c=a.jW();a:{while(c.oL()){b:{d=c.lC();if(d!==null){if(!d.dQ(b))break b;else break a;}if(b===null)break a;}}return 0;}return 1;}
function WR(a){var b,c,d,e,f;b=O(E,Hq(a));c=b.data;d=0;e=Mi(a);while(Fl(e)){f=d+1|0;c[d]=JD(e);d=f;}return b;}
function AFU(a,b){var c,d,e,f,g;c=b.data;d=a.p;e=c.length;if(e<d)b=AAb(I0(C4(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Nl(a);while(RZ(f)){c=b.data;g=e+1|0;c[e]=ST(f);e=g;}return b;}
function Dq(a,b){var c,d;c=0;d=b.jW();while(d.oL()){if(!a.q6(d.lC()))continue;c=1;}return c;}
function Fp(a,b){var c,d;c=0;d=Nl(a);while(RZ(d)){if(b.pT(ST(d))){AG5(d);c=1;}}return c;}
function Iw(){}
function Fq(){Fw.call(this);this.d8=0;}
function EM(a,b){AAh(a,a.f7,b);return 1;}
function Nl(a){var b;b=new Qg;b.j$=a;b.vS=b.j$.d8;b.qI=b.j$.p;b.l4=(-1);return b;}
function WV(a,b){var c,d,e;c=a.p;d=0;a:{while(d<c){b:{e=Bc(a,d);if(b!==null){if(!b.dQ(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function KD(){Fq.call(this);}
function AAh(a,b,c){if(b>=0){Xb(Sw(a,b),c);return;}c=new BP;Q(c);M(c);}
function P$(a,b){var c,d;if(b>=0){c=Sw(a,b);d=EE(c);ACy(c);return d;}c=new BP;Q(c);M(c);}
function AOa(a){return GN(a);}
function Mm(){}
function To(){}
function Z_(){var a=this;KD.call(a);a.n_=null;a.oM=null;a.f7=0;}
function N7(){var a=new Z_();AT6(a);return a;}
function AT6(a){return;}
function AYr(a){return a.f7;}
function Mh(a){a.n_=null;a.oM=null;a.f7=0;a.d8=a.d8+1|0;}
function GN(a){return AEB(a,a.n_,null,0);}
function Sw(a,b){var c,d,e;if(b<0){c=new BP;Q(c);M(c);}if(b<=(a.f7/2|0)){d=a.n_;e=0;while(e<b){d=d.gK;e=e+1|0;}return AEB(a,d,d===null?null:d.hB,b);}if(b>a.f7){c=new BP;Q(c);M(c);}c=a.oM;e=b;while(e<a.f7){c=c.hB;e=e+1|0;}return AEB(a,c===null?null:c.gK,c,b);}
function AIP(){E.call(this);}
function Fj(){E.call(this);}
function Xn(){Fj.call(this);}
function AFG(){Fj.call(this);}
function HM(){}
function Ev(){Fw.call(this);}
function EK(a,b){var c,d;c=0;if(Hq(a)>=b.kN()){d=b.jW();while(d.oL()){if(!Ji(a,d.lC()))continue;c=1;}}else{d=Mi(a);while(Fl(d)){if(b.pT(JD(d))){c=1;Zq(d);}}}return c;}
function AV8(a,b){var c,d;if(a===b)return 1;if(!Pt(b,HM))return 0;c=b;if(Hq(a)!=Hq(c))return 0;d=Mi(c);while(Fl(d)){if(SG(a,JD(d)))continue;else return 0;}return 1;}
function AM_(a){var b,c,d,e,f,g;b=WR(a);if(b===null)c=0;else{c=(-1515898884);d=0;while(true){e=b.data;if(d>=e.length)break;f=e[d];g=(f!==null?f.eK():0)^528111840;c=Q6(g,4)^(g>>>7|g<<25)^Q6(c,13);d=d+1|0;}}return c;}
function E3(){}
function AKR(){Ev.call(this);this.kX=null;}
function Fk(){var a=new AKR();ASN(a);return a;}
function ASN(a){a.kX=CY();}
function Tn(a,b){return BK(a.kX,b,a)!==null?0:1;}
function SG(a,b){return Dv(a.kX,b);}
function Mi(a){return Yw(AFe(a.kX));}
function Ji(a,b){return Og(a.kX,b)===null?0:1;}
function Hq(a){return a.kX.fu;}
function J8(){}
function E_(){var a=this;E.call(a);a.uF=null;a.uP=null;}
function XU(){var a=this;E_.call(a);a.fu=0;a.cp=null;a.gq=0;a.BB=0.0;a.sG=0;}
function CY(){var a=new XU();AOP(a);return a;}
function AWb(a,b){return O(Hi,b);}
function AOP(a){var b;b=ACh(16);a.fu=0;a.cp=O(Hi,b);a.BB=0.75;OX(a);}
function ACh(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Rq(a){var b;if(a.fu>0){a.fu=0;b=a.cp;VA(b,0,b.data.length,null);a.gq=a.gq+1|0;}}
function OX(a){a.sG=a.cp.data.length*a.BB|0;}
function Dv(a,b){return RY(a,b)===null?0:1;}
function ZM(a,b){var c,d,e;a:{if(b===null){c=0;b:while(true){if(c>=a.cp.data.length)break a;d=a.cp.data[c];while(d!==null){if(d.et===null)break b;d=d.d7;}c=c+1|0;}return 1;}c=0;c:while(true){if(c>=a.cp.data.length)break a;d=a.cp.data[c];while(d!==null){e=d.et;if(b!==e&&!b.dQ(e)?0:1)break c;d=d.d7;}c=c+1|0;}return 1;}return 0;}
function Cz(a,b){var c;c=RY(a,b);if(c===null)return null;return c.et;}
function RY(a,b){var c,d;if(b===null)c=N2(a);else{d=b.eK();c=Ns(a,b,d&(a.cp.data.length-1|0),d);}return c;}
function Ns(a,b,c,d){var e;e=a.cp.data[c];while(e!==null&&!(e.om==d&&AD9(b,e.fA))){e=e.d7;}return e;}
function N2(a){var b;b=a.cp.data[0];while(b!==null&&b.fA!==null){b=b.d7;}return b;}
function AFe(a){var b;if(a.uF===null){b=new M_;b.zp=a;a.uF=b;}return a.uF;}
function On(a,b,c){return BK(a,b,c);}
function BK(a,b,c){var d,e,f,g;if(b===null){d=N2(a);if(d===null){a.gq=a.gq+1|0;d=OU(a,null,0,0);e=a.fu+1|0;a.fu=e;if(e>a.sG)SA(a);}}else{e=b.eK();f=e&(a.cp.data.length-1|0);d=Ns(a,b,f,e);if(d===null){a.gq=a.gq+1|0;d=OU(a,b,f,e);e=a.fu+1|0;a.fu=e;if(e>a.sG)SA(a);}}g=d.et;d.et=c;return g;}
function OU(a,b,c,d){var e,f;e=new Hi;f=null;e.fA=b;e.et=f;e.om=d;e.d7=a.cp.data[c];a.cp.data[c]=e;return e;}
function AGz(a,b){var c,d,e,f,g,h,i;c=ACh(!b?1:b<<1);d=O(Hi,c);e=d.data;f=0;c=c-1|0;while(f<a.cp.data.length){g=a.cp.data[f];a.cp.data[f]=null;while(g!==null){h=g.om&c;i=g.d7;g.d7=e[h];e[h]=g;g=i;}f=f+1|0;}a.cp=d;OX(a);}
function SA(a){AGz(a,a.cp.data.length);}
function Og(a,b){var c;c=ZU(a,b);if(c===null)return null;return c.et;}
function ZU(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cp.data[0];while(e!==null){if(e.fA===null)break a;f=e.d7;d=e;e=f;}}else{g=b.eK();c=g&(a.cp.data.length-1|0);e=a.cp.data[c];while(e!==null&&!(e.om==g&&AD9(b,e.fA))){f=e.d7;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.d7=e.d7;else a.cp.data[c]=e.d7;a.gq=a.gq+1|0;a.fu=a.fu-1|0;return e;}
function AVd(a){return a.fu;}
function Hb(a){var b;if(a.uP===null){b=new Na;b.t2=a;a.uP=b;}return a.uP;}
function AD9(b,c){return b!==c&&!b.dQ(c)?0:1;}
function AFf(){Fj.call(this);}
function UU(){E.call(this);}
function A5q(){var a=new UU();ASf(a);return a;}
function ASf(a){return;}
function AUD(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.CA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EK=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A11(b,callback);}catch($e){callback.EK($rt_exception($e));}});}
function A11(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){Cx(c,PO(0,0,B(192),null));return;}e=d.open($rt_ustr(b),1);b=new Qr;b.x0=c;b=Cj(b,"handleEvent");e.onBlocked=b;b=new Qq;b.A1=c;b.Be=e;b=Cj(b,"handleEvent");e.onsuccess=b;b=new Qp;b.Ah=c;b=Cj(b,"handleEvent");e.onerror=b;b=new Qo;b.ys=e;b=Cj(b,"handleEvent");e.onupgradeneeded=b;}
function AVP(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.CA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EK=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A0d(b,c,callback);}catch($e){callback.EK($rt_exception($e));}});}
function A0d(b,c,d){var e;b=b.transaction("filesystem","readwrite").objectStore("filesystem");c=Ng($rt_ustr(c));e=b.delete(c);b=new Qn;b.zD=d;b=Cj(b,"handleEvent");e.onsuccess=b;b=new Qk;b.z4=d;b=Cj(b,"handleEvent");e.onerror=b;}
function AZ6(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.CA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EK=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A03(b,c,callback);}catch($e){callback.EK($rt_exception($e));}});}
function A03(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=Ng($rt_ustr(c));e=b.get(c);b=new Qj;b.xL=d;b.uW=e;b=Cj(b,"handleEvent");e.onsuccess=b;b=new Qi;b.AT=d;b=Cj(b,"handleEvent");e.onerror=b;}
function AVL(b,c,d,e,f){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.CA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EK=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A1H(b,c,d,e,f,callback);}
catch($e){callback.EK($rt_exception($e));}});}
function A1H(b,c,d,e,f,g){var h,i;h=(b.transaction("filesystem","readonly").objectStore("filesystem")).openCursor();i=$rt_createIntArray(1);b=new Ow;b.Bh=h;b.AY=g;b.ww=i;b.tv=c;b.yo=e;b.zX=d;b.u0=f;b=Cj(b,"handleEvent");h.onsuccess=b;b=new Ox;b.At=g;b.uv=i;b=Cj(b,"handleEvent");h.onerror=b;}
function AN_(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.CA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EK=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A2k(b,c,callback);}catch($e){callback.EK($rt_exception($e));}});}
function A2k(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=Ng($rt_ustr(c));e=b.get(c);b=new Ot;b.zI=d;b.s2=e;b=Cj(b,"handleEvent");e.onsuccess=b;b=new Ou;b.AS=d;b=Cj(b,"handleEvent");e.onerror=b;}
function AQq(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.CA=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.EK=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A0I(callback);return thread.suspend(function(){try{A08(b,c,d,e,callback);}catch($e)
{callback.EK($rt_exception($e));}});}
function A08(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(B1(),new Long(596067632, 383)).lo;c=AV2($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Ov;c.yy=f;b=Cj(c,"handleEvent");h.onsuccess=b;b=new Oz;b.yP=f;b=Cj(b,"handleEvent");h.onerror=b;}
function AX0(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function QV(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function ASu(b){return typeof b==='undefined'? -1:typeof b.lastModified==='undefined'? -1:b.lastModified;}
function Ng(b){return [b];}
function ARR(b){return typeof b==="string"?b:typeof b==="undefined"?null:typeof b[0]==="string"?b[0]:null;}
function AV2(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AAu(){var a=this;E.call(a);a.BF=0;a.Bt=0;a.sB=null;a.vq=null;}
function PO(a,b,c,d){var e=new AAu();AP4(e,a,b,c,d);return e;}
function AP4(a,b,c,d,e){a.BF=b;a.Bt=c;a.sB=d;a.vq=e;}
function Ef(){var a=this;E.call(a);a.Dz=null;a.rr=0;}
function A5r(a,b){var c=new Ef();E6(c,a,b);return c;}
function E6(a,b,c){a.Dz=b;a.rr=c;}
function ASv(a){return a.rr;}
function ANv(a,b){return a!==b?0:1;}
function AQz(a){return KQ(a);}
function Il(a){var b;b=C4(a);if(!Od(H$(b),K(Ef)))b=H$(b);return b;}
function TO(a,b){var c,d;if(Il(b)===Il(a))return S(a.rr,b.rr);c=new Cq;d=new Ba;Y(d);Bl(c,N(H(H(H(H(d,B(193)),Hh(Il(a))),B(194)),Hh(Il(b)))));M(c);}
function AQc(a,b){return TO(a,b);}
function Eq(){Ef.call(this);}
var A40=null;var A4Z=null;var A4Y=null;var A5s=null;function ACA(){var b,c,d;b=new Eq;E6(b,B(195),0);A40=b;b=new Eq;E6(b,B(196),1);A4Z=b;b=new Eq;E6(b,B(197),2);A4Y=b;c=O(Eq,3);d=c.data;d[0]=A40;d[1]=A4Z;d[2]=A4Y;A5s=c;}
function NL(){}
function Rp(){E.call(this);this.v8=null;}
function A0I(b){var c;c=new Rp;c.v8=b;return c;}
function Cx(a,b){a.v8.CA(b);}
function ATs(a,b){a.v8.EK(b);}
function AK9(){E.call(this);}
function Tu(){}
function Ta(){var a=this;E.call(a);a.tf=null;a.xx=null;}
function ALB(a){var b,c,d;if(a.tf.readyState==4){b=new Uint8Array(a.tf.response);c=$rt_createByteArray(b.byteLength);Z();A25=c;d=0;while(d<Si().data.length){Si().data[d]=b[d]<<24>>24;d=d+1|0;}Cx(a.xx,B(198));}}
function ATp(a){ALB(a);}
function GP(){E.call(this);}
function AKM(){var a=this;GP.call(a);a.uN=null;a.jn=0;a.Cl=0;a.o_=0;}
function QO(a){var b=new AKM();ANR(b,a);return b;}
function ANR(a,b){var c;c=b.data.length;a.uN=b;a.jn=0;a.Cl=0;a.o_=0+c|0;}
function AVc(a){var b,c,d;if(a.jn>=a.o_)b=(-1);else{c=a.uN.data;d=a.jn;a.jn=d+1|0;b=c[d]&255;}return b;}
function AZO(a,b,c,d){var e,f,g,h,i;e=CR(d,a.o_-a.jn|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.uN.data;i=a.jn;a.jn=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function AVM(a){return a.o_-a.jn|0;}
function Hv(){GP.call(this);this.jq=null;}
function A5t(a){var b=new Hv();Pd(b,a);return b;}
function Pd(a,b){a.jq=b;}
function AFB(a){return a.jq.uE();}
function MY(){}
function Nn(){Hv.call(this);this.dD=null;}
function MB(a){var b=new Nn();ADC(b,a);return b;}
function ADC(a,b){Pd(a,b);a.dD=$rt_createByteArray(8);}
function LE(a,b){var c;c=b.data;return a.jq.mU(b,0,c.length);}
function LN(a){var b,c;b=a.jq.zo();if(b>=0)return b<<24>>24;c=new EU;Q(c);M(c);}
function Iz(a,b){var c,d;c=0;while(c<b){d=a.jq.mU(a.dD,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function AJY(a){return $rt_longBitsToDouble(P9(a));}
function WL(a){return $rt_intBitsToFloat(GT(a));}
function AHC(a,b){N1(a,b,0,b.data.length);}
function N1(a,b,c,d){var e,f;if(d<0){e=new BP;Q(e);M(e);}if(!d)return;if(a.jq===null){e=new El;Q(e);M(e);}if(b===null){e=new El;Q(e);M(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.jq.mU(b,c,d);if(f<0){e=new EU;Q(e);M(e);}c=c+f|0;d=d-f|0;}return;}e=new BP;Q(e);M(e);}
function GT(a){var b;if(Iz(a,4)<0){b=new EU;Q(b);M(b);}return (a.dD.data[0]&255)<<24|(a.dD.data[1]&255)<<16|(a.dD.data[2]&255)<<8|a.dD.data[3]&255;}
function P9(a){var b;if(Iz(a,8)<0){b=new EU;Q(b);M(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.dD.data[0]&255)<<24|(a.dD.data[1]&255)<<16|(a.dD.data[2]&255)<<8|a.dD.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.dD.data[4]&255)<<24|(a.dD.data[5]&255)<<16|(a.dD.data[6]&255)<<8|a.dD.data[7]&255),new Long(4294967295, 0)));}
function TN(a){var b;if(Iz(a,2)<0){b=new EU;Q(b);M(b);}return ((a.dD.data[0]&255)<<24>>16|a.dD.data[1]&255)<<16>>16;}
function AKf(a){var b;if(Iz(a,2)<0){b=new EU;Q(b);M(b);}return ((a.dD.data[0]&255)<<8|a.dD.data[1]&255)&65535;}
function FY(a){return AGv(a,AKf(a));}
function AGv(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);N1(a,c,0,b);return APR(c,d,0,b);}
function APR(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Go;Bl(m,B(199));M(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Go;Bl(m,B(200));M(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Go;Bl(m,B(200));M(m);}f=j+1|0;if(f>=e){m=new Go;Bl(m,B(200));M(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return VE(c,0,g);}m=new Go;Bl(m,B(200));M(m);}
function KV(){var a=this;E.call(a);a.ue=null;a.DY=null;}
function O9(b){var c,d;if(IS(b))M(AGl(b));if(!AKq(Cr(b,0)))M(AGl(b));c=1;while(c<BE(b)){a:{d=Cr(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AKq(d))break a;else M(AGl(b));}}c=c+1|0;}}
function AKq(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function T8(b){var c;if(b===null){b=new Cq;Bl(b,B(201));M(b);}O9(b);c=Cz(A5u,AIY(b));if(c!==null)return c;c=new Rv;Q(c);c.El=b;M(c);}
function AIH(a,b){var c,d,$$je;a:{try{b=AEN(Zj(ALo(AAX(a),A5v),A5v),b);}catch($$e){$$je=Bf($$e);if($$je instanceof F2){c=$$je;break a;}else{throw $$e;}}return b;}d=new S7;d.m6=1;d.p$=1;d.to=B(202);d.iG=c;M(d);}
function Xe(a,b){return AEF(a.ue,b.ue);}
function AWw(a,b){return Xe(a,b);}
function SV(){var a=this;Hv.call(a);a.gk=null;a.m0=null;a.oJ=0;a.ni=0;a.A9=0;a.AQ=0;a.up=null;a.C5=null;}
function AM$(a){var b;if(a.oJ){b=new BU;Bl(b,B(203));M(b);}return AGR(a,a.up,0,1)==(-1)?(-1):a.up.data[0]&255;}
function AGR(a,b,c,d){var e,f,g;if(a.oJ){e=new BU;Bl(e,B(203));M(e);}if(b===null){e=new El;Q(e);M(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.ni)return (-1);f=0;Wt(a.gk,b,c,d);a:{while(!a.ni){if(!a.gk.I)W3(a);b:{g=ABs(a.gk,0);f=f+(a.gk.og-c|0)|0;c=a.gk.og;switch(g){case -3:e=new BU;Bl(e,a.gk.bQ);M(e);case 1:case 2:break;default:break b;}a.ni=1;if(g==2)return (-1);}if(!a.gk.hn)break a;}}return f;}e=new BP;Q(e);M(e);}
function ASe(a){var b;if(!a.oJ){if(!a.ni)return 1;return 0;}b=new BU;Bl(b,B(203));M(b);}
function W3(a){var b,c;if(a.oJ){b=new BU;Bl(b,B(203));M(b);}a:{c=a.jq.mU(a.m0,0,a.m0.data.length);if(c==(-1)){if(a.gk.iA.du)break a;if(Ul(a.gk))break a;a.m0.data[0]=0;c=1;}AFa(a.gk,a.m0,0,c,1);return;}if(Long_ne(a.gk.iA.qa,Long_fromInt(-1))){b=new BU;Bl(b,B(204));M(b);}b=new EU;Bl(b,B(205));M(b);}
function K8(){var a=this;E.call(a);a.hi=null;a.ix=0;a.l8=Long_ZERO;}
function HL(a,b){var c,d;c=a.hi.data;d=a.ix;a.ix=d+1|0;c[d]=b;if(a.ix==a.hi.data.length){P2(a,a.hi,0);a.ix=0;}a.l8=Long_add(a.l8,Long_fromInt(1));}
function Zs(a,b,c,d){a:{while(a.ix){if(d<=0)break a;HL(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.hi.data.length){P2(a,b,c);c=c+a.hi.data.length|0;d=d-a.hi.data.length|0;a.l8=Long_add(a.l8,Long_fromInt(a.hi.data.length));}while(d>0){HL(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function AJW(a){var b;b=Long_shl(a.l8,3);HL(a,(-128));while(a.ix){HL(a,0);}AFY(a,b);KJ(a);}
function Y6(){var a=this;K8.call(a);a.n6=0;a.n7=0;a.n8=0;a.n9=0;a.n$=0;a.dM=null;a.lE=0;}
function A0T(){var a=new Y6();AY8(a);return a;}
function AY8(a){a.hi=$rt_createByteArray(4);a.ix=0;a.dM=$rt_createIntArray(80);Mq(a);}
function P2(a,b,c){var d,e;d=b.data;b=a.dM.data;e=a.lE;a.lE=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.lE==16)KJ(a);}
function GC(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function AFY(a,b){if(a.lE>14)KJ(a);a.dM.data[14]=b.hi;a.dM.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AG2(a,b,c){AJW(a);GC(a,a.n6,b,c);GC(a,a.n7,b,c+4|0);GC(a,a.n8,b,c+8|0);GC(a,a.n9,b,c+12|0);GC(a,a.n$,b,c+16|0);Mq(a);return 20;}
function Mq(a){var b;a.l8=Long_ZERO;a.ix=0;b=0;while(b<a.hi.data.length){a.hi.data[b]=0;b=b+1|0;}a.n6=1732584193;a.n7=(-271733879);a.n8=(-1732584194);a.n9=271733878;a.n$=(-1009589776);a.lE=0;b=0;while(b!=a.dM.data.length){a.dM.data[b]=0;b=b+1|0;}}
function Ry(a,b,c,d){return b^c^d;}
function Ez(a,b,c){return b<<c|b>>>(32-c|0);}
function KJ(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.dM.data[b]=Ez(a,a.dM.data[b-3|0]^a.dM.data[b-8|0]^a.dM.data[b-14|0]^a.dM.data[b-16|0],1);b=b+1|0;}c=a.n6;d=a.n7;e=a.n8;f=a.n9;g=a.n$;h=0;while(h<=19){i=(((Ez(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.dM.data[h]|0)+1518500249|0;b=Ez(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((Ez(a,c,5)+Ry(a,d,e,f)|0)+g|0)+a.dM.data[j]|0)+1859775393|0;b=Ez(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((Ez(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.dM.data[h]|0)
+(-1894007588)|0;b=Ez(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((Ez(a,c,5)+Ry(a,d,e,f)|0)+g|0)+a.dM.data[j]|0)+(-899497514)|0;b=Ez(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.n6=a.n6+c|0;a.n7=a.n7+d|0;a.n8=a.n8+e|0;a.n9=a.n9+f|0;a.n$=a.n$+g|0;a.lE=0;b=0;while(b!=a.dM.data.length){a.dM.data[b]=0;b=b+1|0;}}
function AEg(){E.call(this);}
function A5w(){var a=new AEg();AWc(a);return a;}
function AWc(a){return;}
function MJ(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=CR(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function ALx(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=CR(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Rw(b,c){var d,e,f,g;d=b.data;e=AAb(I0(C4(b)),c);f=CR(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function VA(b,c,d,e){var f,g;if(c>d){e=new Cq;Q(e);M(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Nk(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=O(E,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=CR(j,h+f|0);l=h+(2*f|0)|0;m=CR(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.oG(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AI7(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new Cq;Q(f);M(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=b[e];if(h==c)break;if(c>=h){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function HK(){var a=this;E.call(a);a.z2=0;a.y3=null;a.uZ=null;}
function A5x(a,b,c){var d=new HK();OS(d,a,b,c);return d;}
function OS(a,b,c,d){a.z2=b;a.y3=c;a.uZ=d;}
function Xi(a,b){var c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Uu(b,a.y3)<a.z2){c=0;d=null;if(c<10){e=1;f=b.bd;$p=1;continue _;}}return;case 1:AJa(a,b,e,f,d);if(C()){break _;}c=c+1|0;if(c>=10)return;e=1;f=b.bd;continue _;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AVy(a,b,c,d){return Cy((c+D(b.n,256)|0)-128|0,D(b.n,128),(d+D(b.n,256)|0)-128|0);}
function AJa(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=I(d.c);h=I(d.d);i=D(b.n,a.uZ.data.length);j=a.xH(b,g,h);k=j.d9;l=j.eo;m=j.d$;$p=1;case 1:$z
=Wo(b,k,l,m);if(C()){break _;}c=$z;if(c)return 0;$p=2;case 2:$z=XG(b,k,l,m);if(C()){break _;}e=$z;if(e!==A5y)return 0;n=0;while(n<3){o=6;p=0;h=k;q=l;r=m;if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;}return f;case 3:$z=Wo(b,h,c,r);if(C()){break _;}c=$z;if(c){$p=4;continue _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;continue _;}n=n+1|0;if(n>=3)break;o=6;p
=0;h=k;q=l;r=m;}return f;case 4:$z=Wo(b,h,q,r);if(C()){break _;}c=$z;if(!c){$p=5;continue _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 5:$z=XG(b,h,q,r);if(C()){break _;}e=$z;if(!e.mk()){c=q+1|0;$p=6;continue _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n
>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 6:a:{$z=Wo(b,h,c,r);if(C()){break _;}c=$z;if(!c){b:{s=h+0.5;t=q+1.0;u=r+0.5;if(d===null){v=s-b.eJ;w=t-b.oq;x=u-b.eI;if(v*v+w*w+x*x>=1024.0)break b;break a;}y=s-d.c;z=t-d.j;ba=u-d.d;if(y*y+z*z+ba*ba<1024.0)break a;}c:{try{e=a.uZ.data[i];bb=O(E5,1);bb.data[0]=K(FO);e=SH(e,bb);bb=O(E,1);bb.data[0]=b;bc=SK(e,bb);break c;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){}else{throw $$e;}}return f;}y=s;z=t;ba=u;IV(bc,y,z,ba,L(b.n)*360.0,0.0);$p=7;continue _;}}p=p+1|0;while
(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 7:$z=bc.sP(y,z,ba);if(C()){break _;}c=$z;if(c){f=f+1|0;$p=8;continue _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 8:AIX(b,bc);if(C()){break _;}p=p+1|0;while(true){if(p<3){h=h+(D(b.n,
o)-D(b.n,o)|0)|0;q=q+(D(b.n,1)-D(b.n,1)|0)|0;r=r+(D(b.n,o)-D(b.n,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$p);}
function Re(){HK.call(this);this.CI=null;}
function ATn(a,b,c,d){return Cy((c+D(b.n,256)|0)-128|0,D(b.n,D(b.n,D(b.n,112)+8|0)+8|0),(d+D(b.n,256)|0)-128|0);}
function CO(){var a=this;E.call(a);a.lp=0;a.bx=null;a.bt=null;a.k=null;a.bH=0.0;a.ct=0.0;a.bG=0.0;a.c=0.0;a.j=0.0;a.d=0.0;a.f=0.0;a.h=0.0;a.g=0.0;a.q=0.0;a.E=0.0;a.K=0.0;a.P=0.0;a.G=null;a.ca=0;a.iZ=0;a.vD=0;a.kg=0;a.cs=0;a.cF=0.0;a.cC=0.0;a.ef=0.0;a.r5=0.0;a.gu=0.0;a.h_=0;a.e7=0.0;a.pz=0;a.b6=0.0;a.bP=0.0;a.b7=0.0;a.dN=0.0;a.pK=0.0;a.nC=0;a.mO=0.0;a.EP=0;a.l=null;a.nq=0;a.mq=0;a.cw=0;a.mP=0;a.rD=0;a.c5=0;a.fx=0;a.na=0;a.rX=null;a.gn=0.0;a.ge=0.0;}
function A5z(a){var b=new CO();EQ(b,a);return b;}
function EQ(a,b){a.lp=0;a.G=Ln(0.0,0.0,0.0,0.0,0.0,0.0);a.ca=0;a.iZ=0;a.vD=0;a.kg=1;a.cs=0;a.cF=0.0;a.cC=0.6000000238418579;a.ef=1.7999999523162842;a.r5=0.0;a.gu=0.0;a.h_=1;a.e7=0.0;a.pz=1;a.dN=0.0;a.pK=0.0;a.nC=0;a.mO=0.0;a.EP=0;a.l=new Df;a.nq=0;a.mq=1;a.cw=0;a.mP=300;a.rD=0;a.c5=0;a.fx=300;a.na=1;a.k=b;CC(a,0.0,0.0,0.0);}
function B3(a){a.cs=1;}
function Dx(a,b,c){a.cC=b;a.ef=c;}
function SY(a,b,c){a.q=b;a.E=c;}
function CC(a,b,c,d){var e,f,g,h,i,j;a.c=b;a.j=c;a.d=d;e=a.cC/2.0;f=a.ef/2.0;g=a.G;h=e;i=b-h;j=f;K4(g,i,c-j,d-h,b+h,c+j,d+h);}
function AEb(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.EY();if(C()){break _;}return;default:Es();}}CM().s(a,$p);}
function AAm(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bt!==null&&a.bt.cs)a.bt=null;a.nq=a.nq+1|0;a.r5=a.gu;a.bH=a.c;a.ct=a.j;a.bG=a.d;a.P=a.E;a.K=a.q;$p=1;case 1:$z=a.DF();if(C()){break _;}b=$z;if(!b)a.rD=0;else{a:{if(!a.rD&&!a.na){c=B7(a.f*a.f*0.20000000298023224+a.h*a.h+a.g*a.g*0.20000000298023224)*0.20000000298023224;if(c>1.0)c=1.0;C2(a.k,a,B(206),c,1.0+(L(a.l)-L(a.l))*0.4000000059604645);d
=I(a.G.H);b=0;e=d+1.0;while(b<1.0+a.cC*20.0){f=(L(a.l)*2.0-1.0)*a.cC;g=(L(a.l)*2.0-1.0)*a.cC;BQ(a.k,B(207),a.c+f,e,a.d+g,a.f,a.h-L(a.l)*0.20000000298023224,a.g);b=b+1|0;}b=0;while(true){if(b>=1.0+a.cC*20.0)break a;f=(L(a.l)*2.0-1.0)*a.cC;g=(L(a.l)*2.0-1.0)*a.cC;BQ(a.k,B(208),a.c+f,e,a.d+g,a.f,a.h,a.g);b=b+1|0;}}}a.e7=0.0;a.rD=1;a.cw=0;}if(a.cw>0){if(!(a.cw%20|0)){h=null;b=1;$p=4;continue _;}a.cw=a.cw-1|0;}$p=2;case 2:$z=X5(a);if(C()){break _;}b=$z;if(b){h=null;b=10;$p=3;continue _;}if(a.j>=(-64.0)){a.na=0;return;}$p
=5;continue _;case 3:a.eQ(h,b);if(C()){break _;}a.cw=600;if(a.j>=(-64.0)){a.na=0;return;}$p=5;continue _;case 4:a.eQ(h,b);if(C()){break _;}a.cw=a.cw-1|0;$p=2;continue _;case 5:a.Av();if(C()){break _;}a.na=0;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function T3(a){B3(a);}
function ACx(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=QH(a.G,b,c,d);f=a.k;$p=1;case 1:$z=TW(f,a,e);if(C()){break _;}f=$z;if(f.p>0)return 0;f=a.k;$p=2;case 2:$z=AEn(f,e);if(C()){break _;}g=$z;return g?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ALY(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.nC){Fc(a.G,b,c,d);a.c=(a.G.N+a.G.R)/2.0;a.j=a.G.H+a.cF-a.dN;a.d=(a.G.O+a.G.S)/2.0;return;}e=a.c;f=a.d;g=NA(a.G);h=a.k;i=HN(a.G,b,c,d);$p=1;case 1:$z
=TW(h,a,i);if(C()){break _;}j=$z;k=0;l=c;while(k<CZ(j)){l=Sm(Bc(j,k),a.G,l);k=k+1|0;}Fc(a.G,0.0,l,0.0);if(a.kg){m=d;n=b;}else if(c===l){m=d;n=b;}else{n=0.0;m=n;l=n;}a:{b:{if(!a.ca){if(c===l)break b;if(c>=0.0)break b;}o=1;break a;}o=0;}p=0;while(p<CZ(j)){n=NO(Bc(j,p),a.G,n);p=p+1|0;}Fc(a.G,n,0.0,0.0);if(!a.kg&&b!==n){n=0.0;m=n;l=n;}k=0;while(k<CZ(j)){m=QJ(Bc(j,k),a.G,m);k=k+1|0;}Fc(a.G,0.0,0.0,m);if(!a.kg&&d!==m){n=0.0;m=n;l=n;}c:{if(a.pK<=0.0){q=n;r=l;s=m;}else if(!o){q=n;r=l;s=m;}else if(a.dN>=0.05000000074505806)
{q=n;r=l;s=m;}else{if(b!==n)break c;if(d!==m)break c;q=n;r=l;s=m;}a.c=(a.G.N+a.G.R)/2.0;a.j=a.G.H+a.cF-a.dN;a.d=(a.G.O+a.G.S)/2.0;t=S(b,q);a.iZ=!t&&d===s?0:1;k=S(c,r);a.ca=k&&c<0.0?1:0;a.vD=!a.iZ&&!k?0:1;if(!a.ca){if(r<0.0)a.e7=a.e7-r;}else if(a.e7>0.0){u=a.e7;$p=3;continue _;}if(t)a.f=0.0;if(k)a.h=0.0;if(d!==s)a.g=0.0;l=a.c-e;m=a.d-f;a.gu=a.gu+B7(l*l+m*m)*0.6;if(!a.h_){a.dN=a.dN*0.4000000059604645;$p=4;continue _;}v=I(a.c);w=I(a.j-0.20000000298023224-a.cF);x=I(a.d);i=a.k;$p=6;continue _;}r=a.pK;i=NA(a.G);Tk(a.G,
g);h=a.k;g=HN(a.G,b,r,d);$p=2;case 2:$z=TW(h,a,g);if(C()){break _;}h=$z;y=0;while(y<CZ(h)){r=Sm(Bc(h,y),a.G,r);y=y+1|0;}Fc(a.G,0.0,r,0.0);if(a.kg){s=d;q=b;}else if(c===r){s=d;q=b;}else{q=0.0;s=q;r=q;}k=0;while(k<CZ(h)){q=NO(Bc(h,k),a.G,q);k=k+1|0;}Fc(a.G,q,0.0,0.0);if(!a.kg&&b!==q){q=0.0;s=q;r=q;}t=0;while(t<CZ(h)){s=QJ(Bc(h,t),a.G,s);t=t+1|0;}Fc(a.G,0.0,0.0,s);if(!a.kg&&d!==s){q=0.0;s=q;r=q;}if(n*n+m*m>=q*q+s*s){Tk(a.G,i);q=n;r=l;s=m;}else a.dN=a.dN+0.5;a.c=(a.G.N+a.G.R)/2.0;a.j=a.G.H+a.cF-a.dN;a.d=(a.G.O+
a.G.S)/2.0;t=S(b,q);a.iZ=!t&&d===s?0:1;k=S(c,r);a.ca=k&&c<0.0?1:0;a.vD=!a.iZ&&!k?0:1;if(!a.ca){if(r<0.0)a.e7=a.e7-r;}else if(a.e7>0.0){u=a.e7;$p=3;continue _;}if(t)a.f=0.0;if(k)a.h=0.0;if(d!==s)a.g=0.0;l=a.c-e;m=a.d-f;a.gu=a.gu+B7(l*l+m*m)*0.6;if(!a.h_){a.dN=a.dN*0.4000000059604645;$p=4;continue _;}v=I(a.c);w=I(a.j-0.20000000298023224-a.cF);x=I(a.d);i=a.k;$p=6;continue _;case 3:a.Am(u);if(C()){break _;}a.e7=0.0;if(t)a.f=0.0;if(k)a.h=0.0;if(d!==s)a.g=0.0;l=a.c-e;m=a.d-f;a.gu=a.gu+B7(l*l+m*m)*0.6;if(!a.h_){a.dN
=a.dN*0.4000000059604645;$p=4;continue _;}v=I(a.c);w=I(a.j-0.20000000298023224-a.cF);x=I(a.d);i=a.k;$p=6;continue _;case 4:$z=a.DF();if(C()){break _;}t=$z;i=a.k;h=a.G;$p=5;case 5:$z=ALv(i,h);if(C()){break _;}k=$z;if(!k){if(a.cw<=0)a.cw= -a.mq;if(t&&a.cw>0){C2(a.k,a,B(209),0.699999988079071,1.600000023841858+(L(a.l)-L(a.l))*0.4000000059604645);a.cw= -a.mq;}return;}k=1;$p=7;continue _;case 6:$z=Yc(i,v,w,x);if(C()){break _;}y=$z;if(a.gu>a.pz&&y>0){a.pz=a.pz+1|0;J();h=A3_.data[y].f0;if(!A3_.data[y].bR.mk())C2(a.k,
a,II(h),AHy(h)*0.15000000596046448,Uj(h));i=A3_.data[y];h=a.k;$p=8;continue _;}a.dN=a.dN*0.4000000059604645;$p=4;continue _;case 7:a.Cb(k);if(C()){break _;}if(!t){a.cw=a.cw+1|0;if(!a.cw)a.cw=300;}if(t&&a.cw>0){C2(a.k,a,B(209),0.699999988079071,1.600000023841858+(L(a.l)-L(a.l))*0.4000000059604645);a.cw= -a.mq;}return;case 8:i.nh(h,v,w,x,a);if(C()){break _;}a.dN=a.dN*0.4000000059604645;$p=4;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function ATd(a){return null;}
function AE8(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:a.eQ(c,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function Vh(a,b){return;}
function AAz(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k;c=Da(a.G,0.0,(-0.4000000059604645),0.0);d=A48;$p=1;case 1:$z=Wh(b,c,d,a);if(C()){break _;}e=$z;return e;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AB3(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j+a.p3();d=I(a.c);e=Jo(I(c));f=I(a.d);g=a.k;$p=1;case 1:$z=Yc(g,d,e,f);if(C()){break _;}h=$z;if(h){J();if(A3_.data[h].bR===b){b=a.k;$p=2;continue _;}}return 0;case 2:$z=AAd(b,d,e,f);if(C()){break _;}d=$z;return c>=(e+1|0)-(H0(d)-0.1111111119389534)?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function X5(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k;c=Da(a.G,0.0,(-0.4000000059604645),0.0);d=A49;$p=1;case 1:$z=AI8(b,c,d);if(C()){break _;}e=$z;return e;default:Es();}}CM().s(a,b,c,d,e,$p);}
function Kg(a,b,c,d){var e,f,g;e=DG(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;c=c*d;f=Bm(a.q*3.1415927410125732/180.0);g=Bx(a.q*3.1415927410125732/180.0);a.f=a.f+b*g-c*f;a.g=a.g+c*g+b*f;}}
function Zi(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(a.c);d=(a.G.Q-a.G.H)*0.66;e=I(a.j-a.cF+d);f=I(a.d);g=a.k;$p=1;case 1:$z=AH1(g,c,e,f);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AOf(a,b){a.k=b;}
function IV(a,b,c,d,e,f){a.c=b;a.bH=b;b=c+a.cF;a.j=b;a.ct=b;a.d=d;a.bG=d;a.q=e;a.E=f;CC(a,a.c,a.j,a.d);}
function AMl(a,b){var c,d,e;c=a.c-b.c;d=a.j-b.j;e=a.d-b.d;return DG(c*c+d*d+e*e);}
function AB7(a,b,c,d){var e,f,g;e=a.c-b;f=a.j-c;g=a.d-d;return e*e+f*f+g*g;}
function Ps(a,b,c,d){var e,f,g;e=a.c-b;f=a.j-c;g=a.d-d;return B7(e*e+f*f+g*g);}
function JT(a,b){var c,d,e;c=a.c-b.c;d=a.j-b.j;e=a.d-b.d;return c*c+d*d+e*e;}
function AWO(a,b){return;}
function AVV(a,b){var c,d,e,f,g;c=b.c-a.c;d=b.d-a.d;e=c<0.0? -c:c;f=d<0.0? -d:d;if(e>f)f=e;if(f>=0.009999999776482582){e=B7(f);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;e=f*g;c=c*0.05000000074505806;e=e*0.05000000074505806;c=c*(1.0-a.mO);e=e*(1.0-a.mO);Gk(a, -c,0.0, -e);Gk(b,c,0.0,e);}}
function Gk(a,b,c,d){a.f=a.f+b;a.h=a.h+c;a.g=a.g+d;}
function AEJ(a,b,c){return 0;}
function AYK(a){return 0;}
function AXz(a){return 0;}
function AZN(a,b,c){return;}
function Pn(a,b){var c,d,e;c=a.c-b.t;d=a.j-b.v;e=a.d-b.s;return ACw(a,c*c+d*d+e*e);}
function ACw(a,b){var c;c=AKu(a.G)*64.0;return b>=c*c?0:1;}
function AGq(a,b){var c,d;c=$rt_createDoubleArray(3);d=c.data;d[0]=a.c;d[1]=a.j;d[2]=a.d;Gx(b,B(210),Sk(a,c));c=$rt_createDoubleArray(3);d=c.data;d[0]=a.f;d[1]=a.h;d[2]=a.g;Gx(b,B(211),Sk(a,c));c=$rt_createFloatArray(2);d=c.data;d[0]=a.q;d[1]=a.E;Gx(b,B(212),AHn(a,c));AMo(b,B(213),a.e7);EJ(b,B(214),a.cw<<16>>16);EJ(b,B(215),a.fx<<16>>16);PV(b,B(216),a.ca);Xu(a,b);}
function US(a,b){var c,d,e,f,g;c=IJ(b,B(210));d=IJ(b,B(211));e=IJ(b,B(212));CC(a,0.0,0.0,0.0);a.f=Ew(d,0).hN;a.h=Ew(d,1).hN;a.g=Ew(d,2).hN;f=Ew(c,0).hN;a.c=f;a.b6=f;a.bH=f;f=Ew(c,1).hN;a.j=f;a.bP=f;a.ct=f;f=Ew(c,2).hN;a.d=f;a.b7=f;a.bG=f;g=Ew(e,0).l7;a.q=g;a.K=g;g=Ew(e,1).l7;a.E=g;a.P=g;a.e7=AHs(b,B(213));a.cw=EX(b,B(214));a.fx=EX(b,B(215));a.ca=QS(b,B(216));CC(a,a.c,a.j,a.d);AJx(a,b);}
function Sk(a,b){var c,d,e,f,g;b=b.data;c=Km();d=b.length;e=0;while(e<d){f=b[e];g=new Kz;Cl(g);g.hN=f;HW(c,g);e=e+1|0;}return c;}
function AHn(a,b){var c,d,e;b=b.data;c=Km();d=b.length;e=0;while(e<d){HW(c,AWN(b[e]));e=e+1|0;}return c;}
function Xz(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0.0;$p=1;case 1:$z=AB2(a,b,c,d);if(C()){break _;}e=$z;return e;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AB2(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Gb(a.k,a.c,a.j+d,a.d,I2(b,c));e.gt=10;f=a.k;$p=1;case 1:AIX(f,e);if(C()){break _;}return e;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ACQ(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=I(a.c);c=I(a.j+a.p3());d=I(a.d);e=a.k;$p=1;case 1:$z=Wo(e,b,c,d);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,$p);}
function APG(a,b){return 0;}
function APQ(a,b){return null;}
function AAG(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bt.cs){a.bt=null;return;}a.f=0.0;a.h=0.0;a.g=0.0;$p=1;case 1:a.dR();if(C()){break _;}CC(a,a.bt.c,a.bt.j+a.cF+a.bt.xA(),a.bt.d);a.ge=a.ge+a.bt.q-a.bt.K;a.gn=a.gn+a.bt.E-a.bt.P;while(a.ge>=180.0){a.ge=a.ge-360.0;}while(a.ge<(-180.0)){a.ge=a.ge+360.0;}while(a.gn>=180.0){a.gn=a.gn-360.0;}while(a.gn<(-180.0)){a.gn=a.gn+360.0;}b=a.ge*0.5;c=a.gn*0.5;d=10.0;if(b>d)b
=d;e=(-10.0);if(b<e)b=e;if(c<=d)d=c;if(d>=e)e=d;a.ge=a.ge-b;a.gn=a.gn-e;a.q=a.q+b;a.E=a.E+e;return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AYM(a){return a.ef*0.75;}
function MV(a,b){a.gn=0.0;a.ge=0.0;if(a.bt===b){a.bt.bx=null;a.bt=null;}else{if(a.bt!==null)a.bt.bx=null;if(b.bx!==null)b.bx.bt=null;a.bt=b;b.bx=a;}}
function Tq(a,b,c){var d,e;d=a.E;e=a.q;a.q=a.q+b*0.15;a.E=a.E-c*0.15;if(a.E<(-90.0))a.E=(-90.0);if(a.E>90.0)a.E=90.0;a.P=a.P+a.E-d;a.K=a.K+a.q-e;}
function Ea(){var a=this;CO.call(a);a.nw=0;a.Fj=0.0;a.C$=0.0;a.Eh=0.0;a.da=0.0;a.ex=0.0;a.xn=0.0;a.l3=0.0;a.i4=0.0;a.k4=0.0;a.Da=0;a.vX=null;a.C_=0;a.AH=0.0;a.Br=null;a.E_=0.0;a.sU=0;a.Fa=0.0;a.bI=0;a.rT=0;a.sS=0;a.c$=0;a.Bg=0;a.jG=0.0;a.cD=0;a.c6=0;a.jY=0.0;a.ip=0.0;a.zi=0;a.BG=0;a.Fd=0.0;a.iW=0.0;a.bX=0.0;a.fI=0.0;a.gD=0;a.hP=0.0;a.fV=0.0;a.jH=0.0;a.gU=0;a.xf=0.0;a.rd=0.0;}
function Nb(a){return a.vX;}
function AP9(a){return a.cs?0:1;}
function ATg(a){return a.cs?0:1;}
function AKX(a){return a.ef*0.8500000238418579;}
function AH8(a){var b,c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAm(a);if(C()){break _;}b=D(a.l,1000);c=a.sS;a.sS=c+1|0;if(b<c){a.sS=(-80);d=a.uj();if(d!==null)C2(a.k,a,d,1.0,(L(a.l)-L(a.l))*0.20000000298023224+1.0);}if(GS(a)){$p=2;continue _;}if(GS(a)){d=A48;$p=3;continue _;}a.fx=a.mP;a.jY=a.ip;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5
>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD+1|0;if(a.cD>20){$p=6;continue _;}}a.k4=a.i4;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 2:$z=ACQ(a);if(C()){break _;}e=$z;if(e){d=null;e=1;$p=4;continue _;}if(GS(a)){d=A48;$p=3;continue _;}a.fx=a.mP;a.jY=a.ip;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD+1|0;if(a.cD>20){$p=6;continue _;}}a.k4=a.i4;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 3:$z=AB3(a,d);if(C()){break _;}e=$z;if(!e)a.fx=a.mP;else{a.fx=a.fx-1|0;if(a.fx==(-20)){a.fx=0;e
=0;while(e<8){f=L(a.l)-L(a.l);g=L(a.l)-L(a.l);h=L(a.l)-L(a.l);BQ(a.k,B(207),a.c+f,a.j+g,a.d+h,a.f,a.h,a.g);e=e+1|0;}d=null;e=2;$p=5;continue _;}a.cw=0;}a.jY=a.ip;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD+1|0;if(a.cD>20){$p=6;continue _;}}a.k4=a.i4;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 4:a.eQ(d,e);if(C()){break _;}if(GS(a)){d=A48;$p=3;continue _;}a.fx=a.mP;a.jY=a.ip;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD
+1|0;if(a.cD>20){$p=6;continue _;}}a.k4=a.i4;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 5:a.eQ(d,e);if(C()){break _;}a.cw=0;a.jY=a.ip;if(a.c6>0)a.c6=a.c6-1|0;if(a.c$>0)a.c$=a.c$-1|0;if(a.c5>0)a.c5=a.c5-1|0;if(a.bI<=0){a.cD=a.cD+1|0;if(a.cD>20){$p=6;continue _;}}a.k4=a.i4;a.ex=a.da;a.K=a.q;a.P=a.E;return;case 6:B3(a);if(C()){break _;}e=0;while(e<20){i=CH(a.l)*0.02;j=CH(a.l)*0.02;k=CH(a.l)*0.02;BQ(a.k,B(217),a.c+L(a.l)*a.cC*2.0-a.cC,a.j+L(a.l)*a.ef,a.d+L(a.l)*a.cC*2.0-a.cC,i,j,k);e=e+1|0;}a.k4=a.i4;a.ex=a.da;a.K=a.q;a.P
=a.E;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAj(a){var b,c,d,e;b=0;while(b<20){c=CH(a.l)*0.02;d=CH(a.l)*0.02;e=CH(a.l)*0.02;BQ(a.k,B(217),a.c+L(a.l)*a.cC*2.0-a.cC-c*10.0,a.j+L(a.l)*a.ef-d*10.0,a.d+L(a.l)*a.cC*2.0-a.cC-e*10.0,c,d,e);b=b+1|0;}}
function AFR(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAG(a);if(C()){break _;}a.xn=a.l3;a.l3=0.0;return;default:Es();}}CM().s(a,$p);}
function AHh(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.EY();if(C()){break _;}$p=2;case 2:a.m7();if(C()){break _;}b=a.c-a.bH;c=a.d-a.bG;d=B7(b*b+c*c);e=a.da;f=0.0;a.xn=a.l3;g=0.0;if(d>0.05000000074505806){g=1.0;f=d*3.0;e=CB(c,b)*180.0/3.1415927410125732-90.0;}if(!a.ca)g=0.0;a.l3=a.l3+(g-a.l3)*0.30000001192092896;h=e-a.da;while(h<(-180.0)){h=h+360.0;}while
(h>=180.0){h=h-360.0;}a.da=a.da+h*0.10000000149011612;i=a.q-a.da;while(i<(-180.0)){i=i+360.0;}while(i>=180.0){i=i-360.0;}j=i>=(-90.0)&&i<90.0?0:1;if(i<(-75.0))i=(-75.0);if(i>=75.0)i=75.0;a.da=a.q-i;a.da=a.da+i*0.10000000149011612;if(j)f=f*(-1.0);while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while(a.q-a.K>=180.0){a.K=a.K+360.0;}while(a.da-a.ex<(-180.0)){a.ex=a.ex-360.0;}while(a.da-a.ex>=180.0){a.ex=a.ex+360.0;}while(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}a.i4=a.i4+f;return;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function AST(a,b,c){Dx(a,b,c);}
function Q$(a,b){if(a.bI>0){a.bI=a.bI+b|0;if(a.bI>20)a.bI=20;a.c5=a.nw/2|0;}}
function XI(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gD=0;if(a.bI<=0)return 0;a.bX=1.5;if(a.c5<=a.nw/2.0){a.rT=a.bI;a.c5=a.nw;a.bI=a.bI-c|0;a.Bg=10;a.c$=10;}else{if((a.rT-c|0)>=a.bI)return 0;a.bI=a.rT-c|0;}a.jG=0.0;if(b===null)a.jG=(BI()*2.0|0)*180|0;else{d=b.c-a.c;e=b.d-a.d;while(d*d+e*e<1.0E-4){d=(BI()-BI())*0.01;e=(BI()-BI())*0.01;}a.jG=CB(e,d)*180.0/3.1415927410125732-a.q;Xg(a,b,c,d,e);}if(a.bI>0){C2(a.k,a,a.s4(),
1.0,(L(a.l)-L(a.l))*0.20000000298023224+1.0);return 1;}C2(a.k,a,a.sK(),1.0,(L(a.l)-L(a.l))*0.20000000298023224+1.0);$p=1;case 1:a.BV(b);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AXW(a){return null;}
function AOd(a){return B(218);}
function AOQ(a){return B(218);}
function Xg(a,b,c,d,e){var f,g,h;f=B7(d*d+e*e);a.f=a.f/2.0;a.h=a.h/2.0;a.g=a.g/2.0;g=a.f;h=f;a.f=g-d/h*0.4000000059604645;a.h=a.h+0.4000000059604645;a.g=a.g-e/h*0.4000000059604645;if(a.h>0.4000000059604645)a.h=0.4000000059604645;}
function AIJ(a,b){var c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.sU>0&&b!==null)b.yC(a,a.sU);a.zi=1;c=a.k8();if(c>0){d=D(a.l,3);e=0;if(e<d){f=1;$p=1;continue _;}}return;case 1:Xz(a,c,f);if(C()){break _;}e=e+1|0;if(e>=d)return;f=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ANz(a){return 0;}
function AKE(a,b){var c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K_(b-3.0)|0;if(c<=0)return;d=null;$p=1;case 1:a.eQ(d,c);if(C()){break _;}d=a.k;c=I(a.c);e=I(a.j-0.20000000298023224-a.cF);f=I(a.d);$p=2;case 2:$z=Yc(d,c,e,f);if(C()){break _;}e=$z;if(e>0){J();d=A3_.data[e].f0;C2(a.k,a,II(d),d.np*0.5,d.of*0.75);}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Y8(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAz(a);if(C()){break _;}d=$z;if(!d){$p=2;continue _;}e=a.j;Kg(a,b,c,0.019999999552965164);f=a.f;g=a.h;h=a.g;$p=3;continue _;case 2:$z=X5(a);if(C()){break _;}d=$z;if(d){e=a.j;Kg(a,b,c,0.019999999552965164);f=a.f;g=a.h;h=a.g;$p=4;continue _;}Kg(a,b,c,!a.ca?0.019999999552965164:0.10000000149011612);$p=7;continue _;case 3:ALY(a,
f,g,h);if(C()){break _;}a.f=a.f*0.800000011920929;a.h=a.h*0.800000011920929;a.g=a.g*0.800000011920929;a.h=a.h-0.02;if(!a.iZ){a.iW=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fI=a.fI+a.bX;return;}f=a.f;e=a.h+0.6000000238418579-a.j+e;g=a.g;$p=5;continue _;case 4:ALY(a,f,g,h);if(C()){break _;}a.f=a.f*0.5;a.h=a.h*0.5;a.g=a.g*0.5;a.h=a.h-0.02;if(!a.iZ){a.iW=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fI
=a.fI+a.bX;return;}f=a.f;e=a.h+0.6000000238418579-a.j+e;g=a.g;$p=6;continue _;case 5:$z=ACx(a,f,e,g);if(C()){break _;}d=$z;if(d)a.h=0.30000001192092896;a.iW=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fI=a.fI+a.bX;return;case 6:$z=ACx(a,f,e,g);if(C()){break _;}d=$z;if(d)a.h=0.30000001192092896;a.iW=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fI=a.fI+a.bX;return;case 7:$z=ADo(a);if(C()){break _;}d=
$z;if(d){a.e7=0.0;if(a.h<(-0.15))a.h=(-0.15);}e=a.f;f=a.h;g=a.g;$p=8;case 8:ALY(a,e,f,g);if(C()){break _;}if(!a.iZ){a.f=a.f*0.9100000262260437;a.h=a.h*0.9800000190734863;a.g=a.g*0.9100000262260437;a.h=a.h-0.08;if(a.ca){a.f=a.f*0.6000000238418579;a.g=a.g*0.6000000238418579;}a.iW=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fI=a.fI+a.bX;return;}$p=9;case 9:$z=ADo(a);if(C()){break _;}d=$z;if(d)a.h=0.2;a.f=a.f*0.9100000262260437;a.h=a.h*0.9800000190734863;a.g
=a.g*0.9100000262260437;a.h=a.h-0.08;if(a.ca){a.f=a.f*0.6000000238418579;a.g=a.g*0.6000000238418579;}a.iW=a.bX;e=a.c-a.bH;f=a.d-a.bG;i=B7(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.bX=a.bX+(i-a.bX)*0.4000000059604645;a.fI=a.fI+a.bX;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function ADo(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=I(a.c);c=I(a.G.H);d=I(a.d);e=a.k;$p=1;case 1:$z=Yc(e,b,c,d);if(C()){break _;}f=$z;J();if(f==A5A.b)return 1;e=a.k;c=c+1|0;$p=2;case 2:$z=Yc(e,b,c,d);if(C()){break _;}b=$z;return b==A5A.b?1:0;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function GS(a){return !a.cs&&a.bI>0?1:0;}
function X7(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gD=a.gD+1|0;b=a.k.bd;if(b!==null){c=b.c-a.c;d=b.j-a.j;e=b.d-a.d;f=c*c+d*d+e*e;if(f>16384.0){$p=2;continue _;}if(a.gD>600&&!D(a.l,800)){if(f>=1024.0){$p=7;continue _;}a.gD=0;}}if(a.bI>0){$p=1;continue _;}a.gU=0;a.hP=0.0;a.fV=0.0;a.jH=0.0;$p=3;continue _;case 1:a.ut();if(C()){break _;}$p
=3;continue _;case 2:B3(a);if(C()){break _;}if(a.gD>600&&!D(a.l,800)){if(f>=1024.0){$p=7;continue _;}a.gD=0;}if(a.bI>0){$p=1;continue _;}a.gU=0;a.hP=0.0;a.fV=0.0;a.jH=0.0;$p=3;case 3:$z=AAz(a);if(C()){break _;}g=$z;$p=4;case 4:$z=X5(a);if(C()){break _;}h=$z;if(a.gU){if(g)a.h=a.h+0.03999999910593033;else if(h)a.h=a.h+0.03999999910593033;else if(a.ca)ABv(a);}a.hP=a.hP*0.9800000190734863;a.fV=a.fV*0.9800000190734863;a.jH=a.jH*0.8999999761581421;i=a.hP;j=a.fV;$p=5;case 5:Y8(a,i,j);if(C()){break _;}k=a.k;l=Da(a.G,
0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=Zm(k,a,l);if(C()){break _;}k=$z;if(k!==null&&k.p>0){m=0;while(true){if(m>=k.p)break a;l=Bc(k,m);if(l.p_())l.sT(a);m=m+1|0;}}}return;case 7:B3(a);if(C()){break _;}if(a.bI>0){$p=1;continue _;}a.gU=0;a.hP=0.0;a.fV=0.0;a.jH=0.0;$p=3;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ABv(a){a.h=0.41999998688697815;}
function ALf(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(L(a.l)<0.07000000029802322){a.hP=(L(a.l)-0.5)*a.rd;a.fV=L(a.l)*a.rd;}a.gU=L(a.l)>=0.009999999776482582?0:1;if(L(a.l)<0.03999999910593033)a.jH=(L(a.l)-0.5)*60.0;a.q=a.q+a.jH;a.E=a.xf;$p=1;case 1:$z=AAz(a);if(C()){break _;}b=$z;$p=2;case 2:$z=X5(a);if(C()){break _;}c=$z;if(!(!b&&!c))a.gU=L(a.l)>=0.800000011920929?0:1;return;default:Es();}}CM().s(a,b,c,$p);}
function AVf(a){return;}
function Vq(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CC(a,b,c+a.ef/2.0,d);e=a.k;f=a.G;$p=1;case 1:$z=AHO(e,f);if(C()){break _;}g=$z;if(!g)return 0;e=a.k;f=a.G;$p=2;case 2:$z=TW(e,a,f);if(C()){break _;}e=$z;if(e.p)return 0;e=a.k;f=a.G;$p=3;case 3:$z=AEn(e,f);if(C()){break _;}g=$z;return g?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Xp(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=null;c=4;$p=1;case 1:a.eQ(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function Hx(){var a=this;Ea.call(a);a.dk=null;a.cR=null;a.gF=0;}
function AFi(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k;d=BS(a.c,a.j+AKX(a),a.d);b=BS(b.c,b.j+b.p3(),b.d);$p=1;case 1:$z=AEp(c,d,b);if(C()){break _;}b=$z;return b!==null?0:1;default:Es();}}CM().s(a,b,c,d,$p);}
function AKn(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gF=0;b=16.0;if(a.cR===null){$p=1;continue _;}if(GS(a.cR)){c=AMl(a.cR,a);d=a.cR;$p=2;continue _;}a.cR=null;a:{if(!a.gF&&a.cR!==null){if(a.dk===null)break a;if
(!D(a.l,20))break a;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=I(a.c+D(a.l,11)-5.0);k=I(a.j+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e=I(a.G.H);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 1:$z=a.vy();if(C()){break _;}d=$z;a.cR=d;if(a.cR!==null){d=a.k;m=a.cR;$p=3;continue _;}b:{if(!a.gF&&a.cR!==null){if(a.dk===null)break b;if(!D(a.l,20))break b;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<
50){j=I(a.c+D(a.l,11)-5.0);k=I(a.j+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e=I(a.G.H);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 2:$z=AFi(a,d);if(C()){break _;}e=$z;if(e){d=a.cR;$p=4;continue _;}b:{if(!a.gF&&a.cR!==null){if(a.dk===null)break b;if(!D(a.l,20))break b;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=I(a.c+D(a.l,11)-5.0);k=I(a.j+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e
=I(a.G.H);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 3:$z=AMd(d,a,m,b);if(C()){break _;}d=$z;a.dk=d;c:{if(!a.gF&&a.cR!==null){if(a.dk===null)break c;if(!D(a.l,20))break c;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=I(a.c+D(a.l,11)-5.0);k=I(a.j+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e=I(a.G.H);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 4:a.mx(d,c);if(C()){break _;}c:{if(!a.gF&&a.cR!==null){if(a.dk===null)break c;if
(!D(a.l,20))break c;}if(!(a.dk!==null&&D(a.l,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=I(a.c+D(a.l,11)-5.0);k=I(a.j+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);$p=8;continue _;}if(e>0){d=a.k;$p=10;continue _;}}e=I(a.G.H);$p=5;continue _;}d=a.k;m=a.cR;$p=7;continue _;case 5:$z=AAz(a);if(C()){break _;}n=$z;$p=6;case 6:$z=X5(a);if(C()){break _;}o=$z;if(a.dk!==null&&D(a.l,100)){d=Pw(a.dk,a);p=a.cC*2.0;q=p*p;r=e;while(d!==null&&XC(d,a.c,a.j,a.d)<q&&d.v<=r){AKz(a.dk);if(!AH6(a.dk)){d=Pw(a.dk,a);continue;}d
=null;a.dk=null;}a.gU=0;if(d!==null){q=d.t-a.c;s=d.s-a.d;t=d.v-r;a.q=CB(s,q)*180.0/3.1415927410125732-90.0;a.fV=a.rd;if(a.gF&&a.cR!==null){u=a.cR.c-a.c;r=a.cR.d-a.d;v=a.q;a.q=CB(r,u)*180.0/3.1415927410125732-90.0;w=(v-a.q+90.0)*3.1415927410125732/180.0;a.hP= -Bm(w)*a.fV*1.0;a.fV=Bx(w)*a.fV*1.0;}if(t!==0.0)a.gU=1;}if(L(a.l)<0.800000011920929&&!(!n&&!o))a.gU=1;return;}$p=9;continue _;case 7:$z=AMd(d,a,m,b);if(C()){break _;}d=$z;a.dk=d;e=I(a.G.H);$p=5;continue _;case 8:$z=a.qT(j,k,l);if(C()){break _;}x=$z;if(x
>h){h=x;e=j;f=k;g=l;}i=i+1|0;if(i>=50){if(e>0){d=a.k;$p=10;continue _;}e=I(a.G.H);$p=5;continue _;}j=I(a.c+D(a.l,11)-5.0);k=I(a.j+D(a.l,7)-3.0);l=I(a.d+D(a.l,11)-5.0);continue _;case 9:ALf(a);if(C()){break _;}a.dk=null;return;case 10:$z=AEy(d,a,e,f,g,b);if(C()){break _;}d=$z;a.dk=d;e=I(a.G.H);$p=5;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AHo(a,b,c){return;}
function AFX(a){return null;}
function Yt(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Vq(a,b,c,d);if(C()){break _;}e=$z;if(!e)return 0;e=b|0;f=c|0;g=d|0;$p=2;case 2:$z=a.qT(e,f,g);if(C()){break _;}h=$z;return h<0.0?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function Dp(){Hx.call(this);this.BN=0;}
function YM(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=Zi(a,b);if(C()){break _;}b=$z;if(b>0.5)a.gD=a.gD+2|0;$p=2;case 2:X7(a);if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function AF5(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHh(a);if(C()){break _;}if(a.k.h4)return;$p=2;case 2:B3(a);if(C()){break _;}return;default:Es();}}CM().s(a,$p);}
function AFq(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(JT(a.k.bd,a)>=256.0)return null;b=a.k.bd;$p=1;case 1:$z=AFi(a,b);if(C()){break _;}c=$z;return !c?null:a.k.bd;default:Es();}}CM().s(a,b,c,$p);}
function Wu(a,b,c){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XI(a,b,c);if(C()){break _;}c=$z;if(!c)return 0;if(b!==a)a.cR=b;return 1;default:Es();}}CM().s(a,b,c,$p);}
function ALj(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<2.5&&b.G.Q>a.G.H&&b.G.H<a.G.Q){a.c6=20;d=a.BN;$p=1;continue _;}return;case 1:b.eQ(a,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Xf(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0.5;f=a.k;$p=1;case 1:$z=AH1(f,b,c,d);if(C()){break _;}g=$z;return e-g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Uz(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.k;f=I(b);g=I(c);h=I(d);$p=1;case 1:$z=TD(e,f,g,h);if(C()){break _;}f=$z;if(f>D(a.l,8))return 0;$p=2;case 2:$z=Yt(a,b,c,d);if(C()){break _;}f=$z;return !f?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function HG(){Dp.call(this);}
function ADc(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!OJ(a.k)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:YM(a);if(C()){break _;}return;case 2:$z=Zi(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.k;d=I(a.c);e=I(a.j);f=I(a.d);$p=3;case 3:$z=ABD(c,d,e,f);if(C()){break _;}d=$z;if(d&&L(a.l)*30.0<(b-0.4000000059604645)*2.0)a.cw=300;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function APH(a){Bw();return A5B.cx;}
function HU(){Dp.call(this);}
function ADJ(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!OJ(a.k)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:YM(a);if(C()){break _;}return;case 2:$z=Zi(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.k;d=I(a.c);e=I(a.j);f=I(a.d);$p=3;case 3:$z=ABD(c,d,e,f);if(C()){break _;}d=$z;if(d&&L(a.l)*30.0<(b-0.4000000059604645)*2.0)a.cw=300;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AC9(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<10.0){d=b.c-a.c;e=b.d-a.d;if(!a.c6){f=ANf(a.k,a);f.j=f.j+1.399999976158142;g=b.j-0.20000000298023224-f.j;h=B7(d*d+e*e)*0.20000000298023224;C2(a.k,a,B(219),1.0,1.0/(L(a.l)*0.4000000059604645+0.800000011920929));b=a.k;$p=1;continue _;}a.q=CB(e,d)*180.0/3.1415927410125732-90.0;a.gF=1;}return;case 1:AIX(b,f);if(C()){break _;}NV(f,
d,g+h,e,0.6000000238418579,12.0);a.c6=30;a.q=CB(e,d)*180.0/3.1415927410125732-90.0;a.gF=1;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AQ7(a){Bw();return A5C.cx;}
function Ip(){var a=this;Dp.call(a);a.ig=0;a.sv=0;a.yl=0;a.iX=0;}
function VJ(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.sv=a.ig;if(a.ig>0&&a.iX<0)a.ig=a.ig-1|0;if(a.iX>=0)a.iX=2;$p=1;case 1:AKn(a);if(C()){break _;}if(a.iX!=1)a.iX=(-1);return;default:Es();}}CM().s(a,$p);}
function Ww(a,b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(a.iX<=0&&c<3.0)){if(a.iX<=0)break a;if(c>=7.0)break a;}if(!a.ig)C2(a.k,a,B(220),1.0,0.5);a.iX=1;a.ig=a.ig+1|0;if(a.ig==a.yl){b=a.k;d=a.c;e=a.j;f=a.d;c=3.0;$p=1;continue _;}a.gF=1;}return;case 1:Ub(b,a,d,e,f,c);if(C()){break _;}$p=2;case 2:B3(a);if(C()){break _;}a.gF=1;return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function NG(a,b){return (a.sv+(a.ig-a.sv|0)*b)/(a.yl-2|0);}
function AM6(a){Bw();return A5D.cx;}
function IO(){Dp.call(this);}
function ALM(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=Zi(a,b);if(C()){break _;}b=$z;if(b<0.5&&JT(a.k.bd,a)<256.0)return a.k.bd;return null;default:Es();}}CM().s(a,b,$p);}
function Vk(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0;$p=1;case 1:a:{$z=Zi(a,d);if(C()){break _;}d=$z;if(d>0.5&&!D(a.l,100))a.cR=null;else{if(c<=2.0)break a;if(c>=6.0)break a;if(D(a.l,10))break a;if(a.ca){e=b.c-a.c;f=b.d-a.d;g=B7(e*e+f*f);a.f=e/g*0.5*0.800000011920929+a.f*0.20000000298023224;a.g=f/g*0.5*0.800000011920929+a.g*0.20000000298023224;a.h=0.4000000059604645;}}return;}$p=2;case 2:ALj(a,
b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ARN(a){Bw();return A5E.cx;}
function FJ(){Hx.call(this);}
function AJc(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.k;f=c-1|0;$p=1;case 1:$z=Yc(e,b,f,d);if(C()){break _;}g=$z;J();if(g==A4b.b)return 10.0;e=a.k;$p=2;case 2:$z=AH1(e,b,c,d);if(C()){break _;}h=$z;return h-0.5;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AF2(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.k;f=I(b);g=I(c);h=I(d);$p=1;case 1:$z=TD(e,f,g,h);if(C()){break _;}g=$z;if(g<=8)return 0;$p=2;case 2:$z=Yt(a,b,c,d);if(C()){break _;}g=$z;return !g?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function I7(){FJ.call(this);this.vC=0;}
function ACd(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.vC&&b instanceof Ea){a.vC=1;d=1+D(a.l,3)|0;e=0;if(e<d){J();f=A4z.b;g=1;h=1.0;$p=2;continue _;}}$p=1;case 1:$z=XI(a,b,c);if(C()){break _;}c=$z;return c;case 2:$z=AB2(a,f,g,h);if(C()){break _;}i=$z;i.h=i.h+L(a.l)*0.05000000074505806;i.f=i.f+(L(a.l)-L(a.l))*0.10000000149011612;i.g=i.g+(L(a.l)-L(a.l))*0.10000000149011612;e
=e+1|0;if(e>=d){$p=1;continue _;}J();f=A4z.b;g=1;h=1.0;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AWV(a){return B(221);}
function AU0(a){return B(221);}
function AQN(a){return B(221);}
function Hg(){FJ.call(this);this.oY=0;}
function ANx(a){return B(222);}
function AYA(a){return B(222);}
function APc(a){return B(223);}
function AQr(a,b){if(!a.oY)return 0;MV(b,a);return 1;}
function APl(a){Bw();return A5F.cx;}
function Df(){var a=this;E.call(a);a.xQ=0.0;a.uM=0;}
function A1d(){var a=new Df();AUj(a);return a;}
function A1n(a){var b=new Df();AOZ(b,a);return b;}
function AUj(a){return;}
function AOZ(a,b){return;}
function LA(a,b){return;}
function ABw(a,b){if(b==32)return Cb(a)*4.294967295E9+(-2.147483648E9)|0;return Cb(a)*Long_toNumber(Long_shl(Long_fromInt(1),CR(32,b)))|0;}
function JG(a){return ABw(a,32);}
function D(a,b){return Cb(a)*b|0;}
function FI(a){return Long_or(Long_shl(Long_fromInt(JG(a)),32),Long_fromInt(JG(a)));}
function L(a){return Cb(a);}
function Cb(a){return Math.random();}
function CH(a){var b,c,d,e;if(a.uM){a.uM=0;return a.xQ;}while(true){while(true){b=2.0*Cb(a)-1.0;c=2.0*Cb(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=DL((-2.0)*AUN(d)/d);a.xQ=c*e;a.uM=1;return b*e;}
function MO(){var a=this;E.call(a);a.cq=null;a.ei=null;a.ic=0.0;a.pu=0.0;a.hC=0;a.iR=0;a.xy=null;}
function YA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.pu+(a.ic-a.pu)*b;d=a.cq.e;BW();Bq(d.P+(d.E-d.P)*b,1.0,0.0,0.0);Bq(d.K+(d.q-d.K)*b,0.0,1.0,0.0);Gp();By();e=a.cq.w;f=I(d.c);g
=I(d.j);h=I(d.d);$p=1;case 1:$z=AH1(e,f,g,h);if(C()){break _;}i=$z;BN(i,i,i,1.0);if(a.ei===null){BW();if(a.iR){j=(a.hC+b)/8.0;k=Bm(j*3.1415927410125732);Br( -Bm(DG(j)*3.1415927410125732)*0.30000001192092896,Bm(DG(j)*3.1415927410125732*2.0)*0.4000000059604645, -k*0.4000000059604645);}Br(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bq(45.0,0.0,1.0,0.0);V(32826);if(a.iR){j=(a.hC+b)/8.0;k=Bm(j*j*3.1415927410125732);Bq(Bm(DG(j)*3.1415927410125732)*70.0,0.0,1.0,0.0);Bq( -k
*20.0,0.0,0.0,1.0);}f=3553;d=a.cq.bi;e=a.cq.e.rX;l=Nb(a.cq.e);$p=2;continue _;}BW();if(a.iR){j=(a.hC+b)/8.0;k=Bm(j*3.1415927410125732);Br( -Bm(DG(j)*3.1415927410125732)*0.4000000059604645,Bm(DG(j)*3.1415927410125732*2.0)*0.20000000298023224, -k*0.20000000298023224);}Br(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bq(45.0,0.0,1.0,0.0);V(32826);if(a.iR){j=(a.hC+b)/8.0;k=Bm(j*j*3.1415927410125732);m=Bm(DG(j)*3.1415927410125732);Bq( -k*20.0,0.0,1.0,0.0);b= -m;Bq(b*20.0,
0.0,0.0,1.0);Bq(b*80.0,1.0,0.0,0.0);}Co(0.4000000059604645,0.4000000059604645,0.4000000059604645);if(a.ei.bs<256){J();if(!A3_.data[a.ei.bs].dO()){f=3553;d=a.cq.bi;e=B(173);$p=5;continue _;}}if(a.ei.bs>=256){f=3553;d=a.cq.bi;e=B(224);$p=3;continue _;}f=3553;d=a.cq.bi;e=B(173);$p=4;continue _;case 2:$z=ZD(d,e,l);if(C()){break _;}g=$z;Cf(f,g);Br((-1.0),3.5999999046325684,3.5);Bq(120.0,0.0,0.0,1.0);Bq(200.0,1.0,0.0,0.0);Bq((-135.0),0.0,1.0,0.0);Co(1.0,1.0,1.0);Br(5.599999904632568,0.0,0.0);n=Pl(A5G,a.cq.e);Co(1.0,
1.0,1.0);AGu(n);By();X(32826);Dr();return;case 3:$z=ACM(d,e);if(C()){break _;}g=$z;Cf(f,g);Bv();e=A37;m=(((Dk(a.ei)%16|0)*16|0)+0|0)/256.0;o=(((Dk(a.ei)%16|0)*16|0)+16|0)/256.0;p=(((Dk(a.ei)/16|0)*16|0)+0|0)/256.0;q=(((Dk(a.ei)/16|0)*16|0)+16|0)/256.0;V(32826);Br(-0.0,(-0.30000001192092896),0.0);Co(1.5,1.5,1.5);Bq(50.0,0.0,1.0,0.0);Bq(335.0,0.0,0.0,1.0);Br((-0.9375),(-0.0625),0.0);Bu(e);CX(e,0.0,0.0,1.0);r=o;s=q;F(e,0.0,0.0,0.0,r,s);t=m;F(e,1.0,0.0,0.0,t,s);u=p;F(e,1.0,1.0,0.0,t,u);F(e,0.0,1.0,0.0,r,u);Bn(e);Bu(e);CX(e,
0.0,0.0,(-1.0));F(e,0.0,1.0,(-0.0625),r,u);F(e,1.0,1.0,(-0.0625),t,u);F(e,1.0,0.0,(-0.0625),t,s);F(e,0.0,0.0,(-0.0625),r,s);Bn(e);Bu(e);CX(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;F(e,x,0.0,(-0.0625),y,s);F(e,x,0.0,0.0,y,s);F(e,x,1.0,0.0,y,u);F(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Bn(e);Bu(e);CX(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;F(e,x,1.0,(-0.0625),y,u);F(e,x,1.0,0.0,y,u);F(e,x,0.0,0.0,y,s);F(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Bn(e);Bu(e);CX(e,
0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;F(e,0.0,z,0.0,r,ba);F(e,1.0,z,0.0,t,ba);F(e,1.0,z,(-0.0625),t,ba);F(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Bn(e);Bu(e);CX(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;F(e,1.0,x,0.0,t,y);F(e,0.0,x,0.0,r,y);F(e,0.0,x,(-0.0625),r,y);F(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Bn(e);X(32826);By();X(32826);Dr();return;case 4:$z=ACM(d,e);if(C()){break _;}g=$z;Cf(f,g);Bv();e=A37;m=(((Dk(a.ei)%16|0)*16|0)+0|0)/256.0;o=
(((Dk(a.ei)%16|0)*16|0)+16|0)/256.0;p=(((Dk(a.ei)/16|0)*16|0)+0|0)/256.0;q=(((Dk(a.ei)/16|0)*16|0)+16|0)/256.0;V(32826);Br(-0.0,(-0.30000001192092896),0.0);Co(1.5,1.5,1.5);Bq(50.0,0.0,1.0,0.0);Bq(335.0,0.0,0.0,1.0);Br((-0.9375),(-0.0625),0.0);Bu(e);CX(e,0.0,0.0,1.0);r=o;s=q;F(e,0.0,0.0,0.0,r,s);t=m;F(e,1.0,0.0,0.0,t,s);u=p;F(e,1.0,1.0,0.0,t,u);F(e,0.0,1.0,0.0,r,u);Bn(e);Bu(e);CX(e,0.0,0.0,(-1.0));F(e,0.0,1.0,(-0.0625),r,u);F(e,1.0,1.0,(-0.0625),t,u);F(e,1.0,0.0,(-0.0625),t,s);F(e,0.0,0.0,(-0.0625),r,s);Bn(e);Bu(e);CX(e,
(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;F(e,x,0.0,(-0.0625),y,s);F(e,x,0.0,0.0,y,s);F(e,x,1.0,0.0,y,u);F(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Bn(e);Bu(e);CX(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;F(e,x,1.0,(-0.0625),y,u);F(e,x,1.0,0.0,y,u);F(e,x,0.0,0.0,y,s);F(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Bn(e);Bu(e);CX(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;F(e,0.0,z,0.0,r,ba);F(e,1.0,z,0.0,t,ba);F(e,
1.0,z,(-0.0625),t,ba);F(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Bn(e);Bu(e);CX(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;F(e,1.0,x,0.0,t,y);F(e,0.0,x,0.0,r,y);F(e,0.0,x,(-0.0625),r,y);F(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Bn(e);X(32826);By();X(32826);Dr();return;case 5:$z=ACM(d,e);if(C()){break _;}g=$z;Cf(f,g);F0(a.xy,A3_.data[a.ei.bs]);By();X(32826);Dr();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function XQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:X(3008);if(a.cq.e.cw<=0){c=a.cq.w.bd;$p=1;continue _;}c=a.cq.bi;d=B(173);$p=2;continue _;case 1:$z=ACQ(c);if(C()){break _;}e=$z;if(!e){d=a.cq.e;c=A48;$p=3;continue _;}e=I(a.cq.e.c);f=I(a.cq.e.j);g=I(a.cq.e.d);c=
a.cq.bi;d=B(173);$p=4;continue _;case 2:$z=ACM(c,d);if(C()){break _;}e=$z;Cf(3553,e);Bv();c=A37;BN(1.0,1.0,1.0,0.8999999761581421);V(3042);C0(770,771);e=0;while(e<2){BW();J();f=A5H.W+(e*16|0)|0;g=(f&15)<<4;f=f&240;h=g;i=h/256.0;h=(h+15.989999771118164)/256.0;j=f;k=j/256.0;j=(j+15.989999771118164)/256.0;f=(e*2|0)-1|0;Br( -f*0.23999999463558197,(-0.30000001192092896),0.0);Bq(f*10.0,0.0,1.0,0.0);Bu(c);l=h;m=j;F(c,(-0.5),(-0.5),(-0.5),l,m);n=i;F(c,0.5,(-0.5),(-0.5),n,m);m=k;F(c,0.5,0.5,(-0.5),n,m);F(c,(-0.5),0.5,
(-0.5),l,m);Bn(c);By();e=e+1|0;}BN(1.0,1.0,1.0,1.0);X(3042);c=a.cq.w.bd;$p=1;continue _;case 3:$z=AB3(d,c);if(C()){break _;}e=$z;if(!e){V(3008);return;}c=a.cq.bi;d=B(225);$p=6;continue _;case 4:$z=ACM(c,d);if(C()){break _;}o=$z;Cf(3553,o);c=a.cq.w;$p=5;case 5:$z=Yc(c,e,f,g);if(C()){break _;}p=$z;J();if(A3_.data[p]===null){d=a.cq.e;c=A48;$p=3;continue _;}e=A3_.data[p].bZ(2);Bv();c=A37;d=a.cq.e;$p=8;continue _;case 6:$z=ACM(c,d);if(C()){break _;}e=$z;Cf(3553,e);Bv();c=A37;d=a.cq.e;$p=7;case 7:$z=Zi(d,b);if(C())
{break _;}h=$z;BN(h,h,h,0.5);V(3042);C0(770,771);BW();h= -a.cq.e.q/64.0;i=a.cq.e.E/64.0;Bu(c);q=4.0+h;l=4.0+i;F(c,(-1.0),(-1.0),(-0.5),q,l);r=0.0+h;F(c,1.0,(-1.0),(-0.5),r,l);l=0.0+i;F(c,1.0,1.0,(-0.5),r,l);F(c,(-1.0),1.0,(-0.5),q,l);Bn(c);By();BN(1.0,1.0,1.0,1.0);X(3042);V(3008);return;case 8:Zi(d,b);if(C()){break _;}BN(0.10000000149011612,0.10000000149011612,0.10000000149011612,0.5);BW();i=e%16|0;j=i/256.0-0.0078125;i=(i+15.989999771118164)/256.0+0.0078125;k=e/16|0;s=k/256.0-0.0078125;h=(k+15.989999771118164)
/256.0+0.0078125;Bu(c);q=i;l=h;F(c,(-1.0),(-1.0),(-0.5),q,l);r=j;F(c,1.0,(-1.0),(-0.5),r,l);l=s;F(c,1.0,1.0,(-0.5),r,l);F(c,(-1.0),1.0,(-0.5),q,l);Bn(c);By();BN(1.0,1.0,1.0,1.0);d=a.cq.e;c=A48;$p=3;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AEd(a){var b,c,d,e;a.pu=a.ic;if(a.iR){a.hC=a.hC+1|0;if(a.hC==8){a.hC=0;a.iR=0;}}b=DE(a.cq.e.F);c=0.4000000059604645;d=(b!==a.ei?0.0:1.0)-a.ic;e=(-0.4000000059604645);if(d>=e)e=d;if(e<=c)c=e;a.ic=a.ic+c;if(a.ic<0.10000000149011612)a.ei=b;}
function AB6(a){a.ic=0.0;}
function MX(a){a.hC=(-1);a.iR=1;}
function AHQ(a){a.ic=0.0;}
function P(){var a=this;E.call(a);a.W=0;a.b=0;a.oF=0.0;a.my=0.0;a.cM=0.0;a.cm=0.0;a.cL=0.0;a.cP=0.0;a.ch=0.0;a.cQ=0.0;a.f0=null;a.A5=0.0;a.bR=null;}
var A5I=null;var A5J=null;var A5K=null;var A5L=null;var A5M=null;var A5N=null;var A5O=null;var A5P=null;var A5Q=null;var A3_=null;var A5R=null;var A5S=null;var A5T=null;var A5U=null;var A5V=null;var A4f=null;var A4b=null;var A4c=null;var A4j=null;var A4l=null;var A4r=null;var A4a=null;var A5e=null;var A5W=null;var A5f=null;var A5X=null;var A4w=null;var A4x=null;var A4C=null;var A4B=null;var A4A=null;var A4m=null;var A4n=null;var A4y=null;var A4p=null;var A5Y=null;var A5Z=null;var A50=null;var A51=null;var A52
=null;var A53=null;var A54=null;var A55=null;var A56=null;var A57=null;var A58=null;var A59=null;var A5$=null;var A5_=null;var A4z=null;var A6a=null;var A4s=null;var A4t=null;var A4u=null;var A4v=null;var A4E=null;var A4D=null;var A4d=null;var A4e=null;var A4k=null;var A4G=null;var A4F=null;var A4q=null;var A4H=null;var A4o=null;var A5H=null;var A6b=null;var A6c=null;var A6d=null;var A6e=null;var A6f=null;var A6g=null;var A6h=null;var A6i=null;var A6j=null;var A6k=null;var A6l=null;var A6m=null;var A6n=null;var A5A
=null;var A6o=null;var A6p=null;function J(){J=Bt(P);AOG();}
function A6q(a,b){var c=new P();Dw(c,a,b);return c;}
function I1(a,b,c){var d=new P();CS(d,a,b,c);return d;}
function Dw(a,b,c){var d,e,f;J();a.f0=A5I;a.A5=1.0;if(A3_.data[b]!==null){c=new Cq;d=new Ba;Y(d);Bl(c,N(E0(H(E0(H(Bb(H(d,B(226)),b),B(227)),A3_.data[b]),B(228)),a)));M(c);}a.bR=c;A3_.data[b]=a;a.b=b;Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);A5S.data[b]=a.dy();e=A5T;f=!a.dy()?0:255;e.data[b]=f;A5U.data[b]=0;}
function CS(a,b,c,d){J();Dw(a,b,d);a.W=c;}
function BG(a,b){a.f0=b;return a;}
function FF(a,b){A5T.data[a.b]=b;return a;}
function FP(a,b){A5V.data[a.b]=15.0*b|0;return a;}
function C6(a,b){a.my=b*3.0;return a;}
function AYj(a){return 1;}
function APC(a){return 0;}
function BA(a,b){var c;a.oF=b;c=a.my;b=b*5.0;if(c<b)a.my=b;return a;}
function Ey(a,b){A5R.data[a.b]=b;}
function Bj(a,b,c,d,e,f,g){a.cM=b;a.cm=c;a.cL=d;a.cP=e;a.ch=f;a.cQ=g;}
function AAD(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.q3(c,d,e);if(C()){break _;}f=$z;return f;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ABR(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!f&&a.cm>0.0)c=1;else if(f==1&&a.ch<1.0)c=1;else if(f==2&&a.cL>0.0)c=1;else if(f==3&&a.cQ<1.0)c=1;else if(f==4&&a.cM>0.0)c=1;else{if(f!=5)break a;if(a.cP>=1.0)break a;c=1;}return c;}$p=1;case 1:$z=b.kc(c,d,e);if(C()){break _;}c=$z;return c?0:1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function XF(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ea(c,d,e);if(C()){break _;}c=$z;return a.em(f,c);default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AW6(a,b,c){return a.bZ(b);}
function AOW(a,b){return a.W;}
function Jr(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.cM;h=d;i=h+a.cm;j=e;return Dy(g,i,j+a.cL,f+a.cP,h+a.ch,j+a.cQ);}
function AGt(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.gM(b,c,d,e);if(C()){break _;}h=$z;if(h!==null&&Kj(f,h))U(g,h);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function Lj(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.cM;h=d;i=h+a.cm;j=e;return Dy(g,i,j+a.cL,f+a.cP,h+a.ch,j+a.cQ);}
function AVF(a){return 1;}
function AWu(a,b,c){return a.nO();}
function AUI(a){return 1;}
function AC6(a,b,c,d,e,f){return;}
function AJQ(a,b,c,d,e,f){return;}
function VZ(a,b,c,d,e,f){return;}
function UO(a,b,c,d,e,f){return;}
function AUQ(a){return 10;}
function WS(a,b,c,d,e){return;}
function VV(a,b,c,d,e){return;}
function AQP(a,b){return 1;}
function ANK(a,b,c){return a.b;}
function WZ(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.oF<0.0)c=0.0;else{if(K7(b,a)){$p=1;continue _;}c=1.0/a.oF/100.0;}return c;case 1:$z=AFQ(b,a);if(C()){break _;}c=$z;return c/a.oF/30.0;default:Es();}}CM().s(a,b,c,$p);}
function Uk(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=1.0;$p=1;case 1:a.DM(b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AAr(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.d_(b.n);i=0;j=0.15000000596046448;k=c;l=d;m=e;while(i<h){if(L(b.n)<=g){n=a.dq(f,b.n);if(n>0){o=Gb(b,k+L(b.n)*0.699999988079071+j,l+L(b.n)*0.699999988079071+j,m+L(b.n)*0.699999988079071+j,I2(n,1));o.gt=10;$p=1;continue _;}}i=i+1|0;}return;case 1:AIX(b,
o);if(C()){break _;}while(true){i=i+1|0;if(i>=h)break;if(L(b.n)>g)continue;n=a.dq(f,b.n);if(n<=0)continue;else{o=Gb(b,k+L(b.n)*0.699999988079071+j,l+L(b.n)*0.699999988079071+j,m+L(b.n)*0.699999988079071+j,I2(n,1));o.gt=10;continue _;}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AR0(a,b){return a.my/5.0;}
function IE(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;h= -c;i= -d;j= -e;b=C3(f,h,i,j);f=C3(g,h,i,j);k=Ja(b,f,a.cM);l=Ja(b,f,a.cP);m=Im(b,f,a.cm);n=Im(b,f,a.ch);o=IZ(b,f,a.cL);p=IZ(b,f,a.cQ);if(!OG(a,k))k=null;if(!OG(a,l))l=null;if(!Tx(a,m))m=null;if(!Tx(a,n))n=null;if(!OY(a,o))o=null;if(!OY(a,p))p=null;q=null;if(k!==null)q=k;if(l!==null&&!(q!==null&&Di(b,l)>=Di(b,q)))q=l;if(m!==null&&!(q!==null&&Di(b,m)>=Di(b,q)))q=m;if(n!==null&&!(q!==null&&Di(b,n)>=Di(b,q)))q=n;if(o!==null&&!(q!==null&&Di(b,o)>=Di(b,q)))q=
o;if(p!==null&&!(q!==null&&Di(b,p)>=Di(b,q)))q=p;if(q===null)return null;r=(-1);if(q===k)r=4;if(q===l)r=5;if(q===m)r=0;if(q===n)r=1;if(q===o)r=2;if(q===p)r=3;return ASp(c,d,e,r,C3(q,c,d,e));}
function OG(a,b){return b===null?0:b.v>=a.cm&&b.v<=a.ch&&b.s>=a.cL&&b.s<=a.cQ?1:0;}
function Tx(a,b){return b===null?0:b.t>=a.cM&&b.t<=a.cP&&b.s>=a.cL&&b.s<=a.cQ?1:0;}
function OY(a,b){return b===null?0:b.t>=a.cM&&b.t<=a.cP&&b.v>=a.cm&&b.v<=a.ch?1:0;}
function ALn(a,b,c,d,e){return;}
function AOI(a){return 0;}
function AAa(a,b,c,d,e){return 1;}
function AB4(a,b,c,d,e,f){return 0;}
function AEM(a,b,c,d,e,f){return;}
function UH(a,b,c,d,e,f){return;}
function V6(a,b,c,d,e,f){return;}
function ABu(a,b,c,d,e,f,g){return;}
function AKv(a,b,c,d,e){return;}
function AYw(a,b,c,d,e){return 16777215;}
function AOG(){var b,c;A5I=G3(B(229),1.0,1.0);A5J=G3(B(230),1.0,1.0);A5K=G3(B(231),1.0,1.0);A5L=G3(B(232),1.0,1.0);A5M=G3(B(229),1.0,1.0);A5N=G3(B(229),1.0,1.5);A5O=A0e(B(229),1.0,1.0);A5P=G3(B(233),1.0,1.0);A5Q=A1O(B(234),1.0,1.0);A3_=O(P,256);A5R=$rt_createBooleanArray(256);A5S=$rt_createBooleanArray(256);A5T=$rt_createIntArray(256);A5U=$rt_createBooleanArray(256);A5V=$rt_createIntArray(256);A4f=BG(C6(BA(A09(1,1),1.5),10.0),A5M);A4b=BG(BA(A1p(2),0.6000000238418579),A5L);A4c=BG(BA(A0j(3,2),0.5),A5K);A4j=BG(C6(BA(I1(4,
16,A6r),2.0),10.0),A5M);A4l=BG(C6(BA(I1(5,4,A6s),2.0),5.0),A5J);A4r=BG(BA(A13(6,15),0.0),A5L);A4a=BG(C6(BA(I1(7,17,A6r),(-1.0)),6000000.0),A5M);A5e=FF(BA(AN4(8,A48),100.0),3);A5W=FF(BA(AQi(9,A48),100.0),3);A5f=FF(FP(BA(AN4(10,A49),0.0),1.0),255);A5X=FF(FP(BA(AQi(11,A49),100.0),1.0),255);A4w=BG(BA(A1o(12,18),0.5),A5Q);A4x=BG(BA(A1t(13,19),0.6000000238418579),A5K);A4C=BG(C6(BA(PJ(14,32),3.0),5.0),A5M);A4B=BG(C6(BA(PJ(15,33),3.0),5.0),A5M);A4A=BG(C6(BA(PJ(16,34),3.0),5.0),A5M);A4m=BG(BA(A2e(17),2.0),A5J);A4n=BG(FF(BA(A0J(18,
52),0.20000000298023224),1),A5L);A4y=BG(BA(A04(19),0.6000000238418579),A5L);A4p=BG(BA(A01(20,49,A6t,0),0.30000001192092896),A5O);A5Y=null;A5Z=null;A50=null;A51=null;A52=null;A53=null;A54=null;A55=null;A56=null;A57=null;A58=null;A59=null;A5$=null;A5_=null;A4z=BG(BA(I1(35,64,A6u),0.800000011920929),A5P);A6a=null;A4s=BG(BA(AUp(37,13),0.0),A5L);A4t=BG(BA(AUp(38,12),0.0),A5L);A4u=FP(BG(BA(ANI(39,29),0.0),A5L),0.125);A4v=BG(BA(ANI(40,28),0.0),A5L);A4E=BG(C6(BA(Z8(41,39),3.0),10.0),A5N);A4D=BG(C6(BA(Z8(42,38),5.0),
10.0),A5N);A4d=BG(C6(BA(AYx(43,1),2.0),10.0),A5M);A4e=BG(C6(BA(AYx(44,0),2.0),10.0),A5M);A4k=BG(C6(BA(I1(45,7,A6r),2.0),10.0),A5M);A4G=BG(BA(A0K(46,8),0.0),A5L);A4F=BG(BA(A0v(47,35),1.5),A5J);A4q=BG(C6(BA(I1(48,36,A6r),2.0),10.0),A5M);A4H=BG(C6(BA(A1e(49,37),10.0),20.0),A5M);A4o=BG(FP(BA(A06(50,80),0.0),0.9375),A5J);A5H=BG(FP(BA(A2h(51,31),0.0),1.0),A5J);A6b=BG(BA(A2b(52,65),5.0),A5N);A6c=AZr(53,A4l);A6d=BG(BA(A0l(54),2.5),A5J);A6e=BG(BA(A1v(55,62),0.5),A5N);A6f=BG(C6(BA(PJ(56,50),3.0),5.0),A5M);A6g=BG(C6(BA(Z8(57,
40),5.0),10.0),A5N);A6h=BG(BA(A1g(58),2.5),A5J);A6i=BG(BA(A15(59,88),0.0),A5L);A6j=BG(BA(A1E(60),0.6000000238418579),A5K);A6k=BG(BA(AVg(61,0),3.5),A5M);A6l=FP(BG(BA(AVg(62,1),3.5),A5M),0.875);b=new RJ;Bw();ACL(b,63,K(HQ),A6v.cx);A6m=BG(BA(b,1.0),A5J);A6n=BG(BA(A0p(64),3.0),A5J);A5A=BG(BA(A1W(65,83),0.4000000059604645),A5J);A6o=BG(BA(A0V(66,128),1.0),A5N);A6p=AZr(67,A4j);c=0;while(c<256){if(A3_.data[c]!==null)A6w.data[c]=A0k(c-256|0);c=c+1|0;}}
function EC(){var a=this;E.call(a);a.j1=0;a.Z=0;a.cb=0;a.jl=0;}
function A6x(a){var b=new EC();Jc(b,a);return b;}
function Jc(a,b){a.jl=(-1);a.j1=b;a.cb=b;}
function AOU(a){return a.j1;}
function AXV(a){return a.Z;}
function D_(a,b){var c,d;if(b>=0&&b<=a.cb){a.Z=b;if(b<a.jl)a.jl=0;return a;}c=new Cq;d=new Ba;Y(d);Bl(c,N(H(Bb(H(Bb(H(d,B(235)),b),B(236)),a.cb),B(237))));M(c);}
function ASM(a){return a.cb;}
function Lk(a,b){var c,d;if(b>=0&&b<=a.j1){if(a.jl>b)a.jl=(-1);a.cb=b;if(a.Z>a.cb)a.Z=a.cb;return a;}c=new Cq;d=new Ba;Y(d);Bl(c,N(H(Bb(H(Bb(H(d,B(238)),b),B(236)),a.j1),B(237))));M(c);}
function D3(a){a.Z=0;a.cb=a.j1;a.jl=(-1);return a;}
function FE(a){a.cb=a.Z;a.Z=0;a.jl=(-1);return a;}
function Ce(a){return a.cb-a.Z|0;}
function ED(a){return a.Z>=a.cb?0:1;}
function Kl(){EC.call(this);}
function Y4(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BP;i=new Ba;Y(i);Bl(h,N(Bb(H(Bb(H(i,B(239)),g),B(240)),f)));M(h);}if(Ce(a)<d){h=new E4;Q(h);M(h);}if(d<0){h=new BP;i=new Ba;Y(i);Bl(h,N(H(Bb(H(i,B(241)),d),B(242))));M(h);}g=a.Z;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=OQ(a,g);j=j+1|0;c=k;g=f;}a.Z=a.Z+d|0;return a;}}b=b.data;i=new BP;h=new Ba;Y(h);Bl(i,N(H(Bb(H(Bb(H(h,B(243)),c),B(236)),b.length),B(21))));M(i);}
function RX(a,b){return Y4(a,b,0,b.data.length);}
function J6(a){D3(a);return a;}
function Qv(a){FE(a);return a;}
function Nx(a,b){Lk(a,b);return a;}
function OM(){}
function AEk(){var a=this;Fq.call(a);a.eu=null;a.p=0;}
function Ck(){var a=new AEk();APf(a);return a;}
function APf(a){a.eu=O(E,10);}
function ADV(a,b){var c;if(a.eu.data.length<b){c=a.eu.data.length>=1073741823?2147483647:DV(b,DV(a.eu.data.length*2|0,5));a.eu=Rw(a.eu,c);}}
function Bc(a,b){Js(a,b);return a.eu.data[b];}
function CZ(a){return a.p;}
function Ol(a,b,c){var d;Js(a,b);d=a.eu.data[b];a.eu.data[b]=c;return d;}
function U(a,b){var c,d;ADV(a,a.p+1|0);c=a.eu.data;d=a.p;a.p=d+1|0;c[d]=b;a.d8=a.d8+1|0;return 1;}
function Eo(a,b){var c,d,e,f;Js(a,b);c=a.eu.data[b];a.p=a.p-1|0;while(b<a.p){d=a.eu.data;e=a.eu.data;f=b+1|0;d[b]=e[f];b=f;}a.eu.data[a.p]=null;a.d8=a.d8+1|0;return c;}
function GV(a,b){var c;c=WV(a,b);if(c<0)return 0;Eo(a,c);return 1;}
function DB(a){VA(a.eu,0,a.p,null);a.p=0;}
function Js(a,b){var c;if(b>=0&&b<a.p)return;c=new BP;Q(c);M(c);}
function Dh(){}
function Qr(){E.call(this);this.x0=null;}
function AK7(a){Cx(a.x0,PO(0,1,null,null));}
function APr(a){AK7(a);}
function Qq(){var a=this;E.call(a);a.A1=null;a.Be=null;}
function AK5(a){Cx(a.A1,PO(0,0,null,a.Be.result));}
function ANc(a){AK5(a);}
function Qp(){E.call(this);this.Ah=null;}
function AMw(a){Cx(a.Ah,PO(1,0,B(244),null));}
function ARs(a){AMw(a);}
function Qo(){E.call(this);this.ys=null;}
function AFb(a,b){var c,d,e,f,g,h,i;c=a.ys.result;d=AYT();e=O(Cp,1).data;e[0]=B(245);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function AIq(a,b){AFb(a,b);}
function AWG(a,b){AIq(a,b);}
function PB(){E.call(this);}
var A5u=null;function A6y(){var a=new PB();VI(a);return a;}
function VI(a){return;}
function AAS(){A5u=CY();BK(A5u,B(18),AS_());}
function Cq(){B5.call(this);}
function A6z(){var a=new Cq();ANX(a);return a;}
function ANX(a){Q(a);}
function Rv(){Cq.call(this);this.El=null;}
function El(){B5.call(this);}
function A2m(){var a=new El();AOl(a);return a;}
function AOl(a){Q(a);}
function WT(){E.call(this);}
function A6A(){var a=new WT();ARh(a);return a;}
function ARh(a){return;}
function AAx(){var a=this;E.call(a);a.C=null;a.cc=0;a.eP=0;a.di=0;}
function AXP(a){var b=new AAx();ANA(b,a);return b;}
function IK(){var a=new AAx();ANh(a);return a;}
function ANA(a,b){a.cc=(-1);a.eP=0;a.di=0;a.C=b;}
function ANh(a){a.cc=(-1);a.eP=0;a.di=0;}
function AHm(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cc=f;$p=1;case 1:AIG(a,b,c,d,e);if(C()){break _;}a.cc=(-1);return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AIG(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b.dO();g=a.C;$p=1;case 1:b.vl(g,c,d,e);if(C()){break _;}if(!f){$p=2;continue _;}if(f==4){$p=3;continue _;}if(f==1){$p=4;continue _;}if(f==6){$p=5;continue _;}if(f==2){$p=6;continue _;}if(f==3){$p=7;continue _;}if(f==5){$p=8;continue _;}if(f==8){$p=9;continue _;}if(f==7){$p=10;continue _;}if(f==9){$p=11;continue _;}if(f==10){$p=12;continue _;}if
(f!=11)return 0;$p=13;continue _;case 2:$z=XA(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 3:$z=XK(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 4:$z=WU(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 5:$z=AGE(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 6:$z=AII(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 7:$z=VM(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 8:$z=Y7(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 9:$z=AEA(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 10:$z=AFD(a,b,c,d,e);if(C()){break _;}c
=$z;return c;case 11:$z=AHR(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 12:$z=ADD(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 13:$z=AA9(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AII(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.C;$p=1;case 1:$z=f.ea(c,d,e);if(C()){break _;}g=$z;Bv();f=A37;h=a.C;$p=2;case 2:$z=b.zs(h,c,d,e);if(C()){break _;}i=$z;if(A5V.data[b.b]>0)i=1.0;Cg(f,i,i,i);if(g==1)FN(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if(g==2)FN(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,
0.0);else if(g==3)FN(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(g!=4)FN(a,b,c,d,e,0.0,0.0);else FN(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function VM(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:Bv();f=A37;g=b.bZ(0);if(a.cc>=0)g=a.cc;h=a.C;$p=1;case 1:$z=b.zs(h,c,d,e);if(C()){break _;}i=$z;Cg(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=i+15.989999771118164;p=o/256.0;q=1.399999976158142;b=a.C;g=d-1|0;$p=2;case 2:$z=b.kc(c,g,e);if(C()){break _;}j=$z;if(j){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;F(f,x,bb,bc,m,n);bd=d+0|0;F(f,s,bd,bc,m,p);be=e+0|0;F(f,s,bd,be,l,p);F(f,x,bb,be,l,n);F(f,y,bb,be,
m,n);F(f,t,bd,be,m,p);F(f,t,bd,bc,l,p);F(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;F(f,t,bb,ba,m,y);F(f,t,bd,w,m,s);x=c+0|0;F(f,x,bd,w,l,s);F(f,x,bb,ba,l,y);F(f,x,bb,z,m,y);F(f,x,bd,v,m,s);F(f,t,bd,v,l,s);F(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;F(f,bg,bb,be,l,y);F(f,v,bd,be,l,s);F(f,v,bd,bc,m,s);F(f,bg,bb,bc,m,y);F(f,bh,bb,bc,l,y);F(f,z,bd,bc,l,s);F(f,z,bd,be,m,s);F(f,bh,bb,be,m,y);F(f,x,bb,w,l,n);F(f,x,bd,bf,l,p);F(f,t,bd,bf,m,p);F(f,t,bb,w,m,n);F(f,
t,bb,r,l,n);F(f,t,bd,ba,l,p);F(f,x,bd,ba,m,p);F(f,x,bb,r,m,n);return 1;}b=A5H;h=a.C;$p=3;case 3:$z=ABo(b,h,c,g,e);if(C()){break _;}g=$z;if(g){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;F(f,x,bb,bc,m,n);bd=d+0|0;F(f,s,bd,bc,m,p);be=e+0|0;F(f,s,bd,be,l,p);F(f,x,bb,be,l,n);F(f,y,bb,be,m,n);F(f,t,bd,be,m,p);F(f,t,bd,bc,l,p);F(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;F(f,t,bb,ba,m,y);F(f,t,bd,w,m,s);x=c+0|0;F(f,x,bd,w,l,s);F(f,x,bb,ba,l,y);F(f,
x,bb,z,m,y);F(f,x,bd,v,m,s);F(f,t,bd,v,l,s);F(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;F(f,bg,bb,be,l,y);F(f,v,bd,be,l,s);F(f,v,bd,bc,m,s);F(f,bg,bb,bc,m,y);F(f,bh,bb,bc,l,y);F(f,z,bd,bc,l,s);F(f,z,bd,be,m,s);F(f,bh,bb,be,m,y);F(f,x,bb,w,l,n);F(f,x,bd,bf,l,p);F(f,t,bd,bf,m,p);F(f,t,bb,w,m,n);F(f,t,bb,r,l,n);F(f,t,bd,ba,l,p);F(f,x,bd,ba,m,p);F(f,x,bb,r,m,n);return 1;}bi=0.20000000298023224;bj=0.0625;if((((c+d|0)+e|0)&1)!=1){ba=l;bb=m;x=n;z=p;}else{x=(k+16|0)/256.0;z=(o
+16.0)/256.0;ba=l;bb=m;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){r=ba;ba=bb;bb=r;}b=A5H;h=a.C;g=c-1|0;$p=4;case 4:$z=ABo(b,h,g,d,e);if(C()){break _;}g=$z;if(g){w=c+bi;s=d+q+bj;t=e+1|0;F(f,w,s,t,ba,x);u=c+0|0;v=(d+0|0)+bj;F(f,u,v,t,ba,z);r=e+0|0;F(f,u,v,r,bb,z);F(f,w,s,r,bb,x);F(f,w,s,r,bb,x);F(f,u,v,r,bb,z);F(f,u,v,t,ba,z);F(f,w,s,t,ba,x);}b=A5H;h=a.C;j=c+1|0;$p=5;case 5:$z=ABo(b,h,j,d,e);if(C()){break _;}g=$z;if(g){r=j-bi;w=d+q+bj;s=e+0|0;F(f,r,w,s,bb,x);t=j-0|0;u=(d+0|0)+bj;F(f,t,u,s,bb,z);v=e+1|0;F(f,t,
u,v,ba,z);F(f,r,w,v,ba,x);F(f,r,w,v,ba,x);F(f,t,u,v,ba,z);F(f,t,u,s,bb,z);F(f,r,w,s,bb,x);}b=A5H;h=a.C;g=e-1|0;$p=6;case 6:$z=ABo(b,h,c,d,g);if(C()){break _;}g=$z;if(g){r=c+0|0;w=d+q+bj;s=e+bi;F(f,r,w,s,ba,x);t=(d+0|0)+bj;u=e+0|0;F(f,r,t,u,ba,z);v=j;F(f,v,t,u,bb,z);F(f,v,w,s,bb,x);F(f,v,w,s,bb,x);F(f,v,t,u,bb,z);F(f,r,t,u,ba,z);F(f,r,w,s,ba,x);}b=A5H;h=a.C;bk=e+1|0;$p=7;case 7:$z=ABo(b,h,c,d,bk);if(C()){break _;}g=$z;if(g){t=j;u=d+q+bj;v=bk-bi;F(f,t,u,v,bb,x);r=(d+0|0)+bj;w=bk-0|0;F(f,t,r,w,bb,z);s=c+0|0;F(f,
s,r,w,ba,z);F(f,s,u,v,ba,x);F(f,s,u,v,ba,x);F(f,s,r,w,ba,z);F(f,t,r,w,bb,z);F(f,t,u,v,bb,x);}b=A5H;h=a.C;d=d+1|0;$p=8;case 8:$z=ABo(b,h,c,d,e);if(C()){break _;}g=$z;if(g){r=c+0.5;t=r+0.5;u=r-0.5;r=e+0.5;w=r+0.5;r=r-0.5;if(((c+d|0)+e|0)&1){s=c+0|0;t=d+(-0.20000000298023224);F(f,s,t,w,m,n);u=d+0|0;F(f,s,u,r,m,p);v=j;F(f,v,u,r,l,p);F(f,v,t,w,l,n);x=(k+16|0)/256.0;z=(o+16.0)/256.0;F(f,v,t,r,m,x);F(f,v,u,w,m,z);F(f,s,u,w,l,z);F(f,s,t,r,l,x);}else{v=d+(-0.20000000298023224);x=e+0|0;F(f,u,v,x,m,n);z=d+0|0;F(f,t,z,
x,m,p);r=bk;F(f,t,z,r,l,p);F(f,u,v,r,l,n);w=(k+16|0)/256.0;s=(o+16.0)/256.0;F(f,t,v,r,m,w);F(f,u,z,r,m,s);F(f,u,z,x,l,s);F(f,t,v,x,l,w);}}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function Y7(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A37;g=b.bZ(0);if(a.cc>=0)g=a.cc;h=a.C;$p=1;case 1:$z=b.zs(h,c,d,e);if(C()){break _;}i=$z;Cg(f,i,i,i);j=(g&15)<<4;k=j+16|0;l=g&240;if((((c+d|0)+e|0)&1)
!=1){g=j;j=k;k=g;}i=j;m=i/256.0;n=(i+15.989999771118164)/256.0;i=l;o=i/256.0;p=(i+15.989999771118164)/256.0;q=k;r=q/256.0;s=(q+15.989999771118164)/256.0;t=0.125;q=0.05000000074505806;b=a.C;k=c-1|0;$p=2;case 2:$z=b.kc(k,d,e);if(C()){break _;}k=$z;if(k){u=c+q;v=(d+1|0)+t;w=(e+1|0)+t;F(f,u,v,w,m,o);x=(d+0|0)-t;F(f,u,x,w,m,p);w=(e+0|0)-t;F(f,u,x,w,n,p);F(f,u,v,w,n,o);}b=a.C;l=c+1|0;$p=3;case 3:$z=b.kc(l,d,e);if(C()){break _;}k=$z;if(k){u=l-q;x=(d+0|0)-t;w=(e+1|0)+t;F(f,u,x,w,n,p);v=(d+1|0)+t;F(f,u,v,w,n,o);w=(e
+0|0)-t;F(f,u,v,w,m,o);F(f,u,x,w,m,p);}b=a.C;k=e-1|0;$p=4;case 4:$z=b.kc(c,d,k);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+0|0)-t;x=e+q;F(f,u,m,x,s,p);w=(d+1|0)+t;F(f,u,w,x,s,o);u=(c+0|0)-t;F(f,u,w,x,r,o);F(f,u,m,x,r,p);}b=a.C;e=e+1|0;$p=5;case 5:$z=b.kc(c,d,e);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+1|0)+t;x=e-q;F(f,u,m,x,r,o);w=(d+0|0)-t;F(f,u,w,x,r,p);u=(c+0|0)-t;F(f,u,w,x,s,p);F(f,u,m,x,s,o);}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AHR(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=
$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A37;g=a.C;$p=1;case 1:$z=g.ea(c,d,e);if(C()){break _;}h=$z;i=b.em(0,h);if(a.cc>=0)i=a.cc;g=a.C;$p=2;case 2:$z=b.zs(g,c,d,e);if(C()){break _;}j=$z;Cg(f,j,j,j);k=(i&15)<<4;l=i&240;m=k;n=m/256.0;o=(m+15.989999771118164)/256.0;m=l;p=m/256.0;q=(m+15.989999771118164)/256.0;r=c+1|0;s=c+0|0;t=e+0|0;u=e+1|0;v=d+0.0625;if(h!=1&&h!=2&&h!=3&&h!=7){if(h==8){w=s;x=r;y=r;z=u;m=t;j=t;ba=s;r=x;s=y;bb=u;t=m;u=j;}else if(h!=9){w=r;j=s;z=t;m=u;ba=r;r=j;bb=t;t=m;}else{w=r;ba
=s;j=r;z=u;bb=t;m=t;r=s;s=j;t=u;u=m;}}else{w=s;ba=r;z=t;bb=u;}if(h!=2&&h!=4){if(h!=3&&h!=5){x=v;j=v;y=v;m=v;v=j;}else{j=v+1.0;x=j;y=v;m=v;v=j;}}else{m=v+1.0;x=v;y=m;}bc=ba;bd=y;be=bb;F(f,bc,bd,be,o,p);bf=w;bg=x;bh=u;F(f,bf,bg,bh,o,q);bi=s;bj=v;bk=t;F(f,bi,bj,bk,n,q);bl=r;bm=m;bn=z;F(f,bl,bm,bn,n,p);F(f,bl,bm,bn,n,p);F(f,bi,bj,bk,n,q);F(f,bf,bg,bh,o,q);F(f,bc,bd,be,o,p);return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p);}
function AEA(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A37;g=b.bZ(0);if(a.cc>=0)g=a.cc;h=a.C;$p=1;case 1:$z=b.zs(h,c,d,e);if(C()){break _;}i=$z;Cg(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=(i+15.989999771118164)
/256.0;b=a.C;$p=2;case 2:$z=b.ea(c,d,e);if(C()){break _;}p=$z;if(p==5){q=c+0.05000000074505806;r=(d+1|0)+0.0;s=(e+1|0)+0.0;F(f,q,r,s,l,n);t=(d+0|0)-0.0;F(f,q,t,s,l,o);s=(e+0|0)-0.0;F(f,q,t,s,m,o);F(f,q,r,s,m,n);}if(p==4){t=(c+1|0)-0.05000000074505806;q=(d+0|0)-0.0;s=(e+1|0)+0.0;F(f,t,q,s,m,o);r=(d+1|0)+0.0;F(f,t,r,s,m,n);s=(e+0|0)-0.0;F(f,t,r,s,l,n);F(f,t,q,s,l,o);}if(p==3){q=(c+1|0)+0.0;r=(d+0|0)-0.0;s=e+0.05000000074505806;F(f,q,r,s,m,o);t=(d+1|0)+0.0;F(f,q,t,s,m,n);q=(c+0|0)-0.0;F(f,q,t,s,l,n);F(f,q,r,s,
l,o);}if(p==2){r=(c+1|0)+0.0;s=(d+1|0)+0.0;t=(e+1|0)-0.05000000074505806;F(f,r,s,t,l,n);q=(d+0|0)-0.0;F(f,r,q,t,l,o);r=(c+0|0)-0.0;F(f,r,q,t,m,o);F(f,r,s,t,m,n);}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function WU(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A37;g=a.C;$p=1;case 1:$z=b.zs(g,c,d,e);if(C()){break _;}h=$z;Cg(f,h,h,h);f=a.C;$p=2;case 2:$z=f.ea(c,d,e);if(C()){break _;}i=$z;QP(a,b,i,c,d,e);return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AGE(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A37;g=a.C;$p=1;case 1:$z=b.zs(g,c,d,e);if(C()){break _;}h=$z;Cg(f,h,h,h);f=a.C;$p=2;case 2:$z=f.ea(c,d,e);if(C()){break _;}i=$z;Mt(a,b,i,c,d-0.0625,e);return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function FN(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;Bv();h=A37;i=b.bZ(0);if(a.cc>=0)i=a.cc;j=(i&15)<<4;k=i&240;l=j;m=l/256.0;l=(l+15.989999771118164)/256.0;n=k;o=n/256.0;n=(n+15.989999771118164)/256.0;p=m;q=p+0.02734375;r=o;s=r+0.0234375;t=p+0.03515625;u=r+0.03125;c=c+0.5;e=e+0.5;v=c-0.5;w=c+0.5;x=e-0.5;y=e+0.5;z=c+f*0.375;ba=z-0.0625;bb=d+0.625;bc=e+g*0.375;bd=bc-0.0625;F(h,ba,bb,bd,q,s);bc=bc+0.0625;F(h,ba,bb,bc,q,u);q=z+0.0625;F(h,q,bb,bc,t,u);F(h,q,bb,bd,t,s);u=c-0.0625;bc=d
+1.0;F(h,u,bc,x,p,r);q=u+f;d=d+0.0;t=x+g;bd=n;F(h,q,d,t,p,bd);s=y+g;z=l;F(h,q,d,s,z,bd);F(h,u,bc,y,z,r);u=c+0.0625;F(h,u,bc,y,p,r);c=c+f+0.0625;F(h,c,d,s,p,bd);F(h,c,d,t,z,bd);F(h,u,bc,x,z,r);c=e+0.0625;F(h,v,bc,c,p,r);u=v+f;q=c+g;F(h,u,d,q,p,bd);f=w+f;F(h,f,d,q,z,bd);F(h,w,bc,c,z,r);c=e-0.0625;F(h,w,bc,c,p,r);e=c+g;F(h,f,d,e,p,bd);F(h,u,d,e,z,bd);F(h,v,bc,c,z,r);}
function QP(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;Bv();g=A37;h=b.em(0,c);if(a.cc>=0)h=a.cc;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.44999998807907104;q=d+0.44999998807907104;d=f+0.5;r=d-0.44999998807907104;s=d+0.44999998807907104;d=e+1.0;F(g,p,d,r,l,n);e=e+0.0;F(g,p,e,r,l,o);F(g,q,e,s,m,o);F(g,q,d,s,m,n);F(g,q,d,s,l,n);F(g,q,e,s,l,o);F(g,p,e,r,m,o);F(g,p,d,r,m,n);F(g,p,d,s,l,n);F(g,p,e,s,l,o);F(g,q,e,r,m,o);F(g,q,d,r,m,n);F(g,
q,d,r,l,n);F(g,q,e,r,l,o);F(g,p,e,s,m,o);F(g,p,d,s,m,n);}
function Mt(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A37;h=b.em(0,c);if(a.cc>=0)h=a.cc;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.25;q=d+0.25;f=f+0.5;r=f-0.5;s=f+0.5;t=e+1.0;F(g,p,t,r,l,n);e=e+0.0;F(g,p,e,r,l,o);F(g,p,e,s,m,o);F(g,p,t,s,m,n);F(g,p,t,s,l,n);F(g,p,e,s,l,o);F(g,p,e,r,m,o);F(g,p,t,r,m,n);F(g,q,t,s,l,n);F(g,q,e,s,l,o);F(g,q,e,r,m,o);F(g,q,t,r,m,n);F(g,q,t,r,l,n);F(g,q,e,r,l,o);F(g,q,e,s,m,o);F(g,q,t,s,m,n);p
=d-0.5;d=d+0.5;q=f-0.25;f=f+0.25;F(g,p,t,q,l,n);F(g,p,e,q,l,o);F(g,d,e,q,m,o);F(g,d,t,q,m,n);F(g,d,t,q,l,n);F(g,d,e,q,l,o);F(g,p,e,q,m,o);F(g,p,t,q,m,n);F(g,d,t,f,l,n);F(g,d,e,f,l,o);F(g,p,e,f,m,o);F(g,p,t,f,m,n);F(g,p,t,f,l,n);F(g,p,e,f,l,o);F(g,d,e,f,m,o);F(g,d,t,f,m,n);}
function XK(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w
=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A37;g=a.C;h=d+1|0;i=1;$p=1;case 1:$z=b.od(g,c,h,e,i);if(C()){break _;}h=$z;g=a.C;i=d-1|0;j=0;$p=2;case 2:$z=b.od(g,c,i,e,j);if(C()){break _;}j=$z;k=$rt_createBooleanArray(4).data;l=0;g=a.C;m=e-1|0;n=2;$p=3;case 3:$z=b.od(g,c,d,m,n);if(C()){break _;}n=$z;k[l]=n;n=1;g
=a.C;o=e+1|0;l=3;$p=4;case 4:$z=b.od(g,c,d,o,l);if(C()){break _;}l=$z;k[n]=l;n=2;g=a.C;p=c-1|0;l=4;$p=5;case 5:$z=b.od(g,p,d,e,l);if(C()){break _;}l=$z;k[n]=l;n=3;g=a.C;q=c+1|0;l=5;$p=6;case 6:$z=b.od(g,q,d,e,l);if(C()){break _;}l=$z;k[n]=l;if(!h&&!j&&!k[0]&&!k[1]&&!k[2]&&!k[3])return 0;r=0;s=0.5;t=1.0;u=0.800000011920929;v=0.6000000238418579;w=0.0;x=1.0;y=b.bR;g=a.C;$p=7;case 7:$z=g.ea(c,d,e);if(C()){break _;}z=$z;$p=8;case 8:$z=AKa(a,c,d,e,y);if(C()){break _;}ba=$z;$p=9;case 9:$z=AKa(a,c,d,o,y);if(C()){break _;}bb
=$z;$p=10;case 10:$z=AKa(a,q,d,o,y);if(C()){break _;}bc=$z;$p=11;case 11:$z=AKa(a,q,d,e,y);if(C()){break _;}bd=$z;if(!a.di&&!h){if(!a.di&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;a:{while(i<4){h=!i?m:e;n=S(i,1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.em(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.di)break a;if(k[i])break a;i=i+1|0;}b.cm=w;b.ch=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn
=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.C;$p=15;continue _;}g=a.C;$p=13;continue _;}r=1;bx=b.em(1,z);g=a.C;$p=12;case 12:$z=AWk(g,c,d,e,y);if(C()){break _;}by=$z;bm=by;h=S(bm,(-999.0));if(h>0)bx=b.em(2,z);n=(bx&15)<<4;l=bx&240;by=(n+8.0)/256.0;bz=(l+8.0)/256.0;if(h<0)bm=0.0;else{by=(n+16|0)/256.0;bz=(l+16|0)/256.0;}bn=Bm(bm)*8.0/256.0;bo=Bx(bm)*8.0/256.0;g=a.C;$p=14;continue _;case 13:$z
=b.zs(g,c,i,e);if(C()){break _;}bp=$z;bm=s*bp;Cg(f,bm,bm,bm);Gy(a,b,c,d,e,b.bZ(0));r=1;i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;b:{while(i<4){h=!i?m:e;n=S(i,1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.em(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.di)break b;if(k[i])break b;i=i+1|0;}b.cm=w;b.ch=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=
((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.C;$p=15;continue _;case 14:$z=b.zs(g,c,d,e);if(C()){break _;}bi=$z;bm=t*bi;Cg(f,bm,bm,bm);bA=c+0|0;bm=d;br=bm+ba;bu=e+0|0;bB=bo;bf=by-bB;bw=bn;bC=bf-bw;bs=bz-bB;F(f,bA,br,bu,bC,bs+bw);bC=bm+bb;bv=o;bf=bf+bw;br=bz+bB;F(f,bA,bC,bv,bf,br+bw);bA=q;bf=bm+bc;by=by+bB;F(f,bA,bf,bv,by+bw,br-bw);F(f,bA,bm+bd,bu,by-bw,bs-bw);if(!a.di&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;c:{while(i<4){h=!i?m:e;n=S(i,
1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.em(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.di)break c;if(k[i])break c;i=i+1|0;}b.cm=w;b.ch=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.C;$p=15;continue _;}g=a.C;$p=13;continue _;case 15:$z
=b.zs(g,o,d,h);if(C()){break _;}bt=$z;bt=t*(l>=0?bt*v:bt*u);Cg(f,bt,bt,bt);bC=bo;by=be+bm;bA=s;F(f,bC,by,bA,br,bu);by=bp;bu=be+bn;bB=bq;F(f,by,bu,bB,bs,bv);F(f,by,bf,bB,bs,bw);F(f,bC,bf,bA,br,bw);c:{while(true){i=i+1|0;if(i>=4)break;h=!i?m:e;n=S(i,1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.em(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.di)break c;if(k[i])break c;}b.cm=w;b.ch=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp
=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.C;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p);}
function AKa(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=0.0;h=0;i=c+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.C;$p=1;case 1:$z=l.nk(j,i,k);if(C()){break _;}l=$z;if(l===e)return 1.0;l=a.C;$p=2;case 2:$z=l.nk(j,c,k);if(C()){break _;}l=$z;if(l===e){l=a.C;$p=3;continue _;}if(!l.c3()){g=g+1.0;f=f+1|0;}h=h+1|0;if(h
>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.C;$p=1;continue _;case 3:$z=l.ea(j,c,k);if(C()){break _;}m=$z;if(!(m<8&&m)){g=g+H0(m)*10.0;f=f+10|0;}g=g+H0(m);f=f+1|0;h=h+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.C;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AD4(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0.5;h=1.0;i=0.800000011920929;j=0.6000000238418579;Bv();k=A37;Bu(k);$p=1;case 1:$z=b.zs(c,d,e,f);if(C()){break _;}l=$z;m=e-1|0;$p=2;case 2:$z=b.zs(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;n=g*n;Cg(k,n,n,n);Gy(a,b,(-0.5),(-0.5),(-0.5),b.bZ(0));m=e+1|0;$p=3;case 3:$z
=b.zs(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;h=h*n;Cg(k,h,h,h);H9(a,b,(-0.5),(-0.5),(-0.5),b.bZ(1));m=f-1|0;$p=4;case 4:$z=b.zs(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cg(k,h,h,h);In(a,b,(-0.5),(-0.5),(-0.5),b.bZ(2));m=f+1|0;$p=5;case 5:$z=b.zs(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cg(k,h,h,h);IC(a,b,(-0.5),(-0.5),(-0.5),b.bZ(3));m=d-1|0;$p=6;case 6:$z=b.zs(c,m,e,f);if(C()){break _;}h=$z;if(h<l)h=l;h=j*h;Cg(k,h,h,h);Ig(a,b,(-0.5),(-0.5),(-0.5),b.bZ(4));d=d+1|0;$p=7;case 7:$z=b.zs(c,d,e,
f);if(C()){break _;}h=$z;if(h>=l)l=h;h=j*l;Cg(k,h,h,h);Jf(a,b,(-0.5),(-0.5),(-0.5),b.bZ(5));Bn(k);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function XA(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;$p=1;case 1:$z=AGp(a,b,c,d,e,f,f,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AGp(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();i=A37;j=0;k=0.5*f;l=1.0*f;m=0.800000011920929*f;n=0.6000000238418579*f;o=0.5
*g;p=1.0*g;q=0.800000011920929*g;r=0.6000000238418579*g;s=0.5*h;t=1.0*h;u=0.800000011920929*h;v=0.6000000238418579*h;w=a.C;$p=1;case 1:$z=b.zs(w,c,d,e);if(C()){break _;}x=$z;if(a.di){w=a.C;y=d-1|0;$p=2;continue _;}w=a.C;z=d-1|0;y=0;$p=3;continue _;case 2:$z=b.zs(w,c,y,e);if(C()){break _;}ba=$z;if(A5V.data[b.b]>0)ba=1.0;Cg(i,k*ba,o*ba,s*ba);bb=c;bc=d;bd=e;w=a.C;y=0;$p=4;continue _;case 3:$z=b.od(w,c,z,e,y);if(C()){break _;}y=$z;if(y){w=a.C;y=d-1|0;$p=2;continue _;}if(a.di){w=a.C;y=d+1|0;$p=5;continue _;}w=a.C;y
=d+1|0;z=1;$p=6;continue _;case 4:$z=b.so(w,c,d,e,y);if(C()){break _;}y=$z;Gy(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=d+1|0;$p=5;continue _;}w=a.C;y=d+1|0;z=1;$p=6;continue _;case 5:$z=b.zs(w,c,y,e);if(C()){break _;}ba=$z;if(b.ch!==1.0&&!b.bR.mk())ba=x;if(A5V.data[b.b]>0)ba=1.0;Cg(i,l*ba,p*ba,t*ba);bb=c;bc=d;bd=e;w=a.C;y=1;$p=9;continue _;case 6:$z=b.od(w,c,y,e,z);if(C()){break _;}y=$z;if(y){w=a.C;y=d+1|0;$p=5;continue _;}if(a.di){w=a.C;y=e-1|0;$p=7;continue _;}w=a.C;y=e-1|0;z=2;$p=8;continue _;case 7:$z=b.zs(w,
c,d,y);if(C()){break _;}ba=$z;if(b.cL>0.0)ba=x;if(A5V.data[b.b]>0)ba=1.0;Cg(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.C;y=2;$p=12;continue _;case 8:$z=b.od(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.C;y=e-1|0;$p=7;continue _;}if(a.di){w=a.C;y=e+1|0;$p=10;continue _;}w=a.C;y=e+1|0;z=3;$p=11;continue _;case 9:$z=b.so(w,c,d,e,y);if(C()){break _;}y=$z;H9(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=e-1|0;$p=7;continue _;}w=a.C;y=e-1|0;z=2;$p=8;continue _;case 10:$z=b.zs(w,c,d,y);if(C()){break _;}ba=$z;if(b.cQ<1.0)ba=x;if(A5V.data[b.b]
>0)ba=1.0;Cg(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.C;y=3;$p=15;continue _;case 11:$z=b.od(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.C;y=e+1|0;$p=10;continue _;}if(a.di){w=a.C;y=c-1|0;$p=13;continue _;}w=a.C;y=c-1|0;z=4;$p=14;continue _;case 12:$z=b.so(w,c,d,e,y);if(C()){break _;}y=$z;In(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=e+1|0;$p=10;continue _;}w=a.C;y=e+1|0;z=3;$p=11;continue _;case 13:$z=b.zs(w,y,d,e);if(C()){break _;}ba=$z;if(b.cM>0.0)ba=x;if(A5V.data[b.b]>0)ba=1.0;Cg(i,n*ba,r*ba,v*ba);bb=c;bc=d;bd=e;w
=a.C;y=4;$p=18;continue _;case 14:$z=b.od(w,y,d,e,z);if(C()){break _;}y=$z;if(y){w=a.C;y=c-1|0;$p=13;continue _;}if(a.di){w=a.C;y=c+1|0;$p=16;continue _;}w=a.C;y=c+1|0;z=5;$p=17;continue _;case 15:$z=b.so(w,c,d,e,y);if(C()){break _;}y=$z;IC(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=c-1|0;$p=13;continue _;}w=a.C;y=c-1|0;z=4;$p=14;continue _;case 16:$z=b.zs(w,y,d,e);if(C()){break _;}ba=$z;if(b.cP>=1.0)x=ba;if(A5V.data[b.b]>0)x=1.0;Cg(i,n*x,r*x,v*x);bb=c;bc=d;bd=e;i=a.C;y=5;$p=19;continue _;case 17:$z=b.od(w,y,d,e,
z);if(C()){break _;}y=$z;if(!y)return j;w=a.C;y=c+1|0;$p=16;continue _;case 18:$z=b.so(w,c,d,e,y);if(C()){break _;}y=$z;Ig(a,b,bb,bc,bd,y);j=1;if(a.di){w=a.C;y=c+1|0;$p=16;continue _;}w=a.C;y=c+1|0;z=5;$p=17;continue _;case 19:$z=b.so(i,c,d,e,y);if(C()){break _;}c=$z;Jf(a,b,bb,bc,bd,c);j=1;return j;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AA9(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;Bj(b,0.375,0.0,0.375,0.625,1.0,0.625);$p=1;case 1:XA(a,b,c,d,e);if(C()){break _;}g=0;h=0;i=a.C;j=c-1|0;$p=2;case 2:$z=i.dL(j,d,e);if(C()){break _;}j=$z;if(j!=b.b){i=a.C;j=c+1|0;$p=3;continue _;}g=1;i=a.C;j=e-1|0;$p=4;continue _;case 3:$z=i.dL(j,d,e);if(C()){break _;}j
=$z;if(j==b.b)g=1;i=a.C;j=e-1|0;$p=4;case 4:$z=i.dL(c,d,j);if(C()){break _;}j=$z;if(j!=b.b){i=a.C;j=e+1|0;$p=5;continue _;}h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bj(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 5:$z=i.dL(c,d,j);if(C()){break _;}j=$z;if(j==b.b)h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if
(g){Bj(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bj(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 6:XA(a,b,c,d,e);if(C()){break _;}if(h){Bj(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 7:XA(a,b,c,d,e);if(C()){break _;}m=0.375;n
=0.5625;if(g){Bj(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 8:XA(a,b,c,d,e);if(C()){break _;}if(!h){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,k,m,0.0,l,n,1.0);$p=9;case 9:XA(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ADD(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=a.C;$p=1;case 1:$z=g.ea(c,d,e);if(C()){break _;}h=$z;if(!h){Bj(b,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bj(b,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bj(b,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bj(b,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:XA(a,
b,c,d,e);if(C()){break _;}Bj(b,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:XA(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 4:XA(a,b,c,d,e);if(C()){break _;}Bj(b,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:XA(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 6:XA(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:XA(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 8:XA(a,b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.5,1.0,0.5,1.0);$p=9;case 9:XA(a,
b,c,d,e);if(C()){break _;}Bj(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AFD(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bv();f=A37;g=b;h=0.5;i=1.0;j=0.800000011920929;k=0.6000000238418579;l=a.C;$p=1;case 1:$z=b.zs(l,c,d,e);if(C()){break _;}m=$z;l=a.C;n=d-1|0;$p=2;case 2:$z=b.zs(l,c,n,e);if(C()){break _;}o=$z;if(g.cm>0.0)o=m;if(A5V.data[b.b]
>0)o=1.0;h=h*o;Cg(f,h,h,h);p=c;q=d;r=e;l=a.C;n=0;$p=3;case 3:$z=b.so(l,c,d,e,n);if(C()){break _;}n=$z;Gy(a,b,p,q,r,n);l=a.C;n=d+1|0;$p=4;case 4:$z=b.zs(l,c,n,e);if(C()){break _;}h=$z;if(g.ch<1.0)h=m;if(A5V.data[b.b]>0)h=1.0;i=i*h;Cg(f,i,i,i);l=a.C;n=1;$p=5;case 5:$z=b.so(l,c,d,e,n);if(C()){break _;}n=$z;H9(a,b,p,q,r,n);l=a.C;n=e-1|0;$p=6;case 6:$z=b.zs(l,c,d,n);if(C()){break _;}i=$z;if(g.cL>0.0)i=m;if(A5V.data[b.b]>0)i=1.0;i=j*i;Cg(f,i,i,i);l=a.C;n=2;$p=7;case 7:$z=b.so(l,c,d,e,n);if(C()){break _;}s=$z;if(s
<0){a.eP=1;s= -s;}In(a,b,p,q,r,s);a.eP=0;l=a.C;n=e+1|0;$p=8;case 8:$z=b.zs(l,c,d,n);if(C()){break _;}i=$z;if(g.cQ<1.0)i=m;if(A5V.data[b.b]>0)i=1.0;i=j*i;Cg(f,i,i,i);l=a.C;n=3;$p=9;case 9:$z=b.so(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.eP=1;s= -s;}IC(a,b,p,q,r,s);a.eP=0;l=a.C;n=c-1|0;$p=10;case 10:$z=b.zs(l,n,d,e);if(C()){break _;}i=$z;if(g.cM>0.0)i=m;if(A5V.data[b.b]>0)i=1.0;i=k*i;Cg(f,i,i,i);l=a.C;n=4;$p=11;case 11:$z=b.so(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.eP=1;s= -s;}Ig(a,b,p,q,r,s);a.eP=0;l=a.C;n
=c+1|0;$p=12;case 12:$z=b.zs(l,n,d,e);if(C()){break _;}i=$z;if(g.cP>=1.0)m=i;if(A5V.data[b.b]>0)m=1.0;i=k*m;Cg(f,i,i,i);l=a.C;n=5;$p=13;case 13:$z=b.so(l,c,d,e,n);if(C()){break _;}c=$z;if(c<0){a.eP=1;c= -c;}Jf(a,b,p,q,r,c);a.eP=0;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function Gy(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A37;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cM*16.0)/256.0;l=(j+b.cP*16.0-0.01)/256.0;j=i;m=(j+b.cL*16.0)/256.0;n=(j+b.cQ*16.0-0.01)/256.0;if(!(b.cM>=0.0&&b.cP<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cQ<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.cM;q=c+b.cP;r=d+b.cm;s=e+b.cL;t=e+b.cQ;F(g,j,r,t,k,n);F(g,j,r,s,k,m);F(g,q,r,s,l,m);F(g,q,r,t,l,n);}
function H9(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A37;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cM*16.0)/256.0;l=(j+b.cP*16.0-0.01)/256.0;j=i;m=(j+b.cL*16.0)/256.0;n=(j+b.cQ*16.0-0.01)/256.0;if(!(b.cM>=0.0&&b.cP<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cQ<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.cM;q=c+b.cP;r=d+b.ch;s=e+b.cL;t=e+b.cQ;F(g,q,r,t,l,n);F(g,q,r,s,l,m);F(g,j,r,s,k,m);F(g,j,r,t,k,n);}
function In(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A37;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cM*16.0)/256.0;j=(j+b.cP*16.0-0.01)/256.0;l=i;m=(l+b.cm*16.0)/256.0;n=(l+b.ch*16.0-0.01)/256.0;if(!a.eP){l=j;j=k;k=l;}if(!(b.cM>=0.0&&b.cP<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cm>=0.0&&b.ch<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.cM;q=c+b.cP;r=d+b.cm;s=d+b.ch;t=e+b.cL;F(g,l,s,t,k,m);F(g,q,s,t,j,m);F(g,q,r,t,j,n);F(g,l,r,t,k,n);}
function IC(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A37;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cM*16.0)/256.0;j=(j+b.cP*16.0-0.01)/256.0;l=i;m=(l+b.cm*16.0)/256.0;n=(l+b.ch*16.0-0.01)/256.0;if(!a.eP){l=j;j=k;k=l;}if(!(b.cM>=0.0&&b.cP<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cm>=0.0&&b.ch<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.cM;q=c+b.cP;r=d+b.cm;s=d+b.ch;t=e+b.cQ;F(g,l,s,t,j,m);F(g,l,r,t,j,n);F(g,q,r,t,k,n);F(g,q,s,t,k,m);}
function Ig(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A37;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cL*16.0)/256.0;l=(j+b.cQ*16.0-0.01)/256.0;j=i;m=(j+b.cm*16.0)/256.0;n=(j+b.ch*16.0-0.01)/256.0;if(!a.eP){j=l;l=k;k=j;}if(!(b.cL>=0.0&&b.cQ<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cm>=0.0&&b.ch<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.cM;q=d+b.cm;r=d+b.ch;s=e+b.cL;t=e+b.cQ;F(g,j,r,t,k,m);F(g,j,r,s,l,m);F(g,j,q,s,l,n);F(g,j,q,t,k,n);}
function Jf(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;Bv();g=A37;if(a.cc>=0)f=a.cc;h=(f&15)<<4;i=f&240;j=h;k=(j+b.cL*16.0)/256.0;l=(j+b.cQ*16.0-0.01)/256.0;j=i;m=(j+b.cm*16.0)/256.0;n=(j+b.ch*16.0-0.01)/256.0;if(!a.eP){j=l;l=k;k=j;}if(!(b.cL>=0.0&&b.cQ<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cm>=0.0&&b.ch<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.cP;q=d+b.cm;r=d+b.ch;s=e+b.cL;t=e+b.cQ;F(g,j,q,t,l,n);F(g,j,q,s,k,n);F(g,j,r,s,k,m);F(g,j,r,t,l,m);}
function F0(a,b){var c,d;a:{Bv();c=A37;d=b.dO();if(d){if(d==1){Bu(c);B_(0.0,(-1.0),0.0);QP(a,b,(-1),(-0.5),(-0.5),(-0.5));Bn(c);}else if(d==6){Bu(c);B_(0.0,(-1.0),0.0);Mt(a,b,(-1),(-0.5),(-0.5),(-0.5));Bn(c);}else{if(d!=2){if(d==3)break a;if(d!=5)break a;else break a;}Bu(c);B_(0.0,(-1.0),0.0);FN(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Bn(c);}}else{Br((-0.5),(-0.5),(-0.5));Bu(c);B_(0.0,(-1.0),0.0);Gy(a,b,0.0,0.0,0.0,b.bZ(0));Bn(c);Bu(c);B_(0.0,1.0,0.0);H9(a,b,0.0,0.0,0.0,b.bZ(1));Bn(c);Bu(c);B_(0.0,0.0,(-1.0));In(a,
b,0.0,0.0,0.0,b.bZ(2));Bn(c);Bu(c);B_(0.0,0.0,1.0);IC(a,b,0.0,0.0,0.0,b.bZ(3));Bn(c);Bu(c);B_((-1.0),0.0,0.0);Ig(a,b,0.0,0.0,0.0,b.bZ(4));Bn(c);Bu(c);B_(1.0,0.0,0.0);Jf(a,b,0.0,0.0,0.0,b.bZ(5));Bn(c);Br(0.5,0.5,0.5);}}}
function NY(){var a=this;E.call(a);a.ik=null;a.gG=null;a.fp=0;a.fo=0;a.ob=0.0;a.lP=0.0;a.oa=0.0;a.bM=0.0;a.bL=0.0;a.bJ=0.0;a.uc=0;a.kL=0;a.kw=0;a.hU=0;a.yW=0;}
function BF(a,b){var c=new NY();AYu(c,a,b);return c;}
function AYu(a,b,c){a.uc=0;a.kL=0;a.kw=0;a.hU=1;a.yW=0;a.fp=b;a.fo=c;}
function Bz(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;a.ik=O(Eb,8);a.gG=O(EN,6);i=b+e;j=c+f;k=d+g;l=b-h;m=c-h;n=d-h;d=i+h;j=j+h;h=k+h;if(!a.kw){b=l;l=d;d=b;}a:{o=F5(d,m,n,0.0,0.0);p=F5(l,m,n,0.0,8.0);q=F5(l,j,n,8.0,8.0);r=F5(d,j,n,8.0,0.0);s=F5(d,m,h,0.0,0.0);t=F5(l,m,h,0.0,8.0);u=F5(l,j,h,8.0,8.0);v=F5(d,j,h,8.0,0.0);a.ik.data[0]=o;a.ik.data[1]=p;a.ik.data[2]=q;a.ik.data[3]=r;a.ik.data[4]=s;a.ik.data[5]=t;a.ik.data[6]=u;a.ik.data[7]=v;w=a.gG.data;x=new EN;y=O(Eb,4);z=y.data;z[0]=t;z[1]=p;z[2]
=q;z[3]=u;Ge(x,y,(a.fp+g|0)+e|0,a.fo+g|0,((a.fp+g|0)+e|0)+g|0,(a.fo+g|0)+f|0);w[0]=x;z=a.gG.data;x=new EN;w=O(Eb,4);y=w.data;y[0]=o;y[1]=s;y[2]=v;y[3]=r;Ge(x,w,a.fp+0|0,a.fo+g|0,a.fp+g|0,(a.fo+g|0)+f|0);z[1]=x;z=a.gG.data;x=new EN;w=O(Eb,4);y=w.data;y[0]=t;y[1]=s;y[2]=o;y[3]=p;Ge(x,w,a.fp+g|0,a.fo+0|0,(a.fp+g|0)+e|0,a.fo+g|0);z[2]=x;z=a.gG.data;x=new EN;w=O(Eb,4);y=w.data;y[0]=q;y[1]=r;y[2]=v;y[3]=u;Ge(x,w,(a.fp+g|0)+e|0,a.fo+0|0,((a.fp+g|0)+e|0)+e|0,a.fo+g|0);z[3]=x;w=a.gG.data;x=new EN;y=O(Eb,4);z=y.data;z[0]
=p;z[1]=o;z[2]=r;z[3]=q;Ge(x,y,a.fp+g|0,a.fo+g|0,(a.fp+g|0)+e|0,(a.fo+g|0)+f|0);w[4]=x;z=a.gG.data;r=new EN;w=O(Eb,4);y=w.data;y[0]=s;y[1]=t;y[2]=u;y[3]=v;Ge(r,w,((a.fp+g|0)+e|0)+g|0,a.fo+g|0,(((a.fp+g|0)+e|0)+g|0)+e|0,(a.fo+g|0)+f|0);z[5]=r;if(a.kw){ba=0;while(true){if(ba>=a.gG.data.length)break a;Yz(a.gG.data[ba]);ba=ba+1|0;}}}}
function BD(a,b,c,d){a.ob=b;a.lP=c;a.oa=d;}
function B2(a,b){var c,d;if(!a.yW&&a.hU){if(!a.uc){a.kL=HA(1);EV(a.kL,4864);Bv();c=A37;d=0;while(d<a.gG.data.length){AKe(a.gG.data[d],c,b);d=d+1|0;}DM();a.uc=1;}if(a.bM===0.0&&a.bL===0.0&&a.bJ===0.0){if(a.ob===0.0&&a.lP===0.0&&a.oa===0.0)E7(a.kL);else{Br(a.ob*b,a.lP*b,a.oa*b);E7(a.kL);Br( -a.ob*b, -a.lP*b, -a.oa*b);}}else{BW();Br(a.ob*b,a.lP*b,a.oa*b);if(a.bJ!==0.0)Bq(a.bJ*57.2957763671875,0.0,0.0,1.0);if(a.bL!==0.0)Bq(a.bL*57.2957763671875,0.0,1.0,0.0);if(a.bM!==0.0)Bq(a.bM*57.2957763671875,1.0,0.0,0.0);E7(a.kL);By();}}}
function Ek(){E.call(this);}
function AJd(a,b){Oh(a,b,0,b.data.length);}
function ANl(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.mu(f[c]);e=e+1|0;c=g;}}
function AYf(a){return;}
function AYJ(a){return;}
function Fo(){Ek.call(this);this.eN=null;}
function A6B(a){var b=new Fo();Jt(b,a);return b;}
function Jt(a,b){a.eN=b;}
function Jd(a){var $$je;a:{try{a.eN.kq();break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){}else{throw $$e;}}}a.eN.r1();}
function WP(){var a=this;Fo.call(a);a.CS=0;a.sJ=0;a.gT=null;a.mA=null;a.x5=null;}
function AQ4(a,b){var c=new WP();AZk(c,a,b);return c;}
function AZk(a,b,c){Jt(a,b);b=new Ba;Y(b);a.gT=b;a.mA=$rt_createCharArray(32);a.CS=c;a.x5=AS_();}
function R6(a,b,c,d){var $$je;if(a.eN===null)a.sJ=1;if(!(a.sJ?0:1))return;a:{try{a.eN.fO(b,c,d);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){}else{throw $$e;}}a.sJ=1;}}
function Qu(a,b,c,d){var e,f,g,h,i;e=b.data;f=AHN(b,c,d-c|0);e=$rt_createByteArray(DV(16,CR(e.length,1024)));g=Wf(e);h=ACe(Yv(ACm(a.x5),A5v),A5v);while(true){i=Hu(AEi(h,f,g,1));R6(a,e,0,g.Z);D3(g);if(!i)break;}while(true){i=Hu(T2(h,g));R6(a,e,0,g.Z);D3(g);if(!i)break;}}
function AFF(a,b){a.mA.data[0]=b;Qu(a,a.mA,0,1);}
function IR(a,b){H(a.gT,b);IA(a);}
function Xs(a,b){E$(Bb(a.gT,b),10);IA(a);}
function B9(a,b){E$(H(a.gT,b),10);IA(a);}
function X1(a,b){E$(E0(a.gT,b),10);IA(a);}
function AKd(a){AFF(a,10);}
function IA(a){var b;b=ID(a.gT)<=a.mA.data.length?a.mA:$rt_createCharArray(ID(a.gT));Wm(a.gT,0,ID(a.gT),b,0);Qu(a,b,0,ID(a.gT));AH0(a.gT,0);}
function Tj(){Ek.call(this);}
function A6C(){var a=new Tj();AUv(a);return a;}
function AUv(a){return;}
function AQI(a,b){$rt_putStdout(b);}
function AAE(){Cq.call(this);this.BQ=null;}
function AGl(a){var b=new AAE();ASL(b,a);return b;}
function ASL(a,b){Q(a);a.BQ=b;}
function KU(){var a=this;E.call(a);a.bW=null;a.x=0;a.I=0;a.D=Long_ZERO;a.sR=null;a.og=0;a.hn=0;a.ma=Long_ZERO;a.bQ=null;a.iA=null;a.fv=null;}
function A6D(){var a=new KU();Mv(a);return a;}
function Mv(a){a.fv=AYP();}
function Wt(a,b,c,d){a.sR=b;a.og=c;a.hn=d;}
function AFa(a,b,c,d,e){var f;if(d<=0&&e&&a.bW!==null)return;if(a.I>0&&e){f=$rt_createByteArray(a.I+d|0);De(a.bW,a.x,f,0,a.I);De(b,c,f,a.I,d);a.bW=f;a.x=0;a.I=a.I+d|0;}else{a.bW=b;a.x=c;a.I=d;}}
function QM(){KU.call(this);this.qb=0;}
function A6E(){var a=new QM();AUh(a);return a;}
function AUh(a){Mv(a);a.qb=0;WF(a);}
function WF(a){return Yo(a,15);}
function Yo(a,b){return Pc(a,b,0);}
function Pc(a,b,c){var d;a.qb=0;d=new JX;d.qa=Long_fromInt(-1);d.hK=(-1);d.vj=$rt_createByteArray(4);d.ck=null;d.fl=null;d.B=a;a.iA=d;d=a.iA;if(c)b= -b;return TF(d,b);}
function ABs(a,b){var c;if(a.iA===null)return (-2);c=ABZ(a.iA,b);if(c==1)a.qb=1;return c;}
function Ul(a){return a.iA.bF!=12?0:1;}
function G_(){var a=this;E.call(a);a.zk=null;a.np=0.0;a.of=0.0;}
function G3(a,b,c){var d=new G_();MI(d,a,b,c);return d;}
function MI(a,b,c,d){a.zk=b;a.np=c;a.of=d;}
function AHy(a){return a.np;}
function Uj(a){return a.of;}
function II(a){var b;b=new Ba;Y(b);return N(H(H(b,B(246)),a.zk));}
function ACG(){G_.call(this);}
function A0e(a,b,c){var d=new ACG();ARw(d,a,b,c);return d;}
function ARw(a,b,c,d){MI(a,b,c,d);}
function X9(){G_.call(this);}
function A1O(a,b,c){var d=new X9();AXs(d,a,b,c);return d;}
function AXs(a,b,c,d){MI(a,b,c,d);}
function J3(){P.call(this);}
function A09(a,b){var c=new J3();AD_(c,a,b);return c;}
function AD_(a,b,c){CS(a,b,c,A6r);}
function AX8(a,b,c){J();return A4j.b;}
function VX(){P.call(this);}
function A1p(a){var b=new VX();ARf(b,a);return b;}
function ARf(a,b){Dw(a,b,A6F);a.W=3;Ey(a,1);}
function AXc(a,b){return b==1?0:b?3:2;}
function Y3(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=TD(b,c,g,e);if(C()){break _;}h=$z;if(h>=4){$p=2;continue _;}$p=3;continue _;case 2:$z=TD(b,c,g,e);if(C()){break _;}g=$z;if(g<9)return;h=(c+D(f,3)|0)-1|0;g=(d+D(f,5)|0)-3|0;i=(e+D(f,3)|0)-1|0;$p=4;continue _;case 3:$z=XG(b,c,g,e);if(C()){break _;}j=$z;if(!j.qA()){$p=2;continue _;}if(D(f,
4))return;J();h=A4c.b;$p=6;continue _;case 4:$z=Yc(b,h,g,i);if(C()){break _;}c=$z;J();if(c!=A4c.b)return;c=g+1|0;$p=5;case 5:$z=TD(b,h,c,i);if(C()){break _;}d=$z;if(d<4)return;$p=7;continue _;case 6:AJ9(b,c,d,e,h);if(C()){break _;}return;case 7:$z=XG(b,h,c,i);if(C()){break _;}f=$z;if(f.qA())return;c=A4b.b;$p=8;case 8:AJ9(b,h,g,i,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AR6(a,b,c){J();return A4c.dq(0,c);}
function AC8(){P.call(this);}
function A0j(a,b){var c=new AC8();AQb(c,a,b);return c;}
function AQb(a,b,c){CS(a,b,c,A6F);}
function BZ(){E.call(this);}
var A5y=null;var A6F=null;var A6s=null;var A6r=null;var A6G=null;var A48=null;var A49=null;var A6H=null;var A6I=null;var A6J=null;var A6u=null;var A6K=null;var A6L=null;var A6M=null;var A6t=null;var A6N=null;var A6O=null;function A6P(){var a=new BZ();AKT(a);return a;}
function AKT(a){return;}
function AXR(a){return 0;}
function ASG(a){return 1;}
function AXw(a){return 1;}
function AVN(a){return 1;}
function AKA(){A5y=new L9;A6F=new BZ;A6s=new BZ;A6r=new BZ;A6G=new BZ;A48=new Kd;A49=new Kd;A6H=new BZ;A6I=new LU;A6J=new BZ;A6u=new BZ;A6K=new L9;A6L=new BZ;A6M=new LU;A6t=new BZ;A6N=new BZ;A6O=new BZ;}
function Fe(){P.call(this);}
function AUp(a,b){var c=new Fe();JM(c,a,b);return c;}
function JM(a,b,c){Dw(a,b,A6I);a.W=c;Ey(a,1);Bj(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function AGO(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=Yc(b,c,d,e);if(C()){break _;}c=$z;return a.pI(c);default:Es();}}CM().s(a,b,c,d,e,$p);}
function AQM(a,b){J();return b!=A4b.b&&b!=A4c.b&&b!=A6j.b?0:1;}
function ADL(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEt(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ZI(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEt(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AEt(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.De(b,c,d,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AAd(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Uk(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:AJ9(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AIL(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=TD(b,c,d,e);if(C()){break _;}f=$z;if(f<8){$p=3;continue _;}d=d-1|0;$p=2;case 2:$z=Yc(b,c,d,e);if(C()){break _;}c=$z;return !a.pI(c)?0:1;case 3:$z=ABD(b,c,d,e);if(C()){break _;}g=$z;if(!g)return 0;d=d-1|0;$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ABI(a,b,c,d,e){return null;}
function AWo(a){return 0;}
function ANQ(a){return 0;}
function AXh(a){return 1;}
function AHF(){Fe.call(this);}
function A13(a,b){var c=new AHF();AYG(c,a,b);return c;}
function AYG(a,b,c){JM(a,b,c);Bj(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function ZR(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEt(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=TD(b,c,g,e);if(C()){break _;}g=$z;if(g>=9&&!D(f,5)){$p=3;continue _;}return;case 3:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;if(g>=15){g=0;$p=4;continue _;}g=g+1|0;$p=6;continue _;case 4:AGo(b,c,d,e,g);if(C()){break _;}h=new Op;$p=5;case 5:$z=AAe(h,b,f,c,d,e);if(C()){break _;}g
=$z;if(g)return;g=a.b;$p=7;continue _;case 6:AFw(b,c,d,e,g);if(C()){break _;}return;case 7:AGo(b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function GI(){P.call(this);this.pc=0;}
function A6Q(a,b){var c=new GI();Np(c,a,b);return c;}
function Np(a,b,c){CS(a,b,((c!==A49?12:14)*16|0)+13|0,c);a.pc=1;if(c===A49)a.pc=2;Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);Ey(a,1);}
function H0(b){if(b>=8)b=0;return (b+1|0)/9.0;}
function ANg(a,b){return b&&b!=1?a.W+1|0:a.W;}
function AAJ(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XG(b,c,d,e);if(C()){break _;}f=$z;if(f!==a.bR)return (-1);$p=2;case 2:$z=AAd(b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ZN(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.nk(c,d,e);if(C()){break _;}f=$z;if(f!==a.bR)return (-1);$p=2;case 2:$z=b.ea(c,d,e);if(C()){break _;}g=$z;if(g>=8)g=0;return g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AZH(a){return 0;}
function AZe(a){return 0;}
function AX6(a,b,c){return c&&!b?1:0;}
function ALR(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.nk(c,d,e);if(C()){break _;}g=$z;if(g===a.bR)c=0;else{if(f!=1){$p=2;continue _;}c=1;}return c;case 2:$z=ABR(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Ui(a,b,c,d,e){return null;}
function AXC(a){return 4;}
function AUk(a,b,c){return 0;}
function AWh(a,b){return 0;}
function ADS(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=BS(0.0,0.0,0.0);$p=1;case 1:$z=ZN(a,b,c,d,e);if(C()){break _;}g=$z;h=0;i=c-1|0;j=e-1|0;k=d-1|0;l=g-8|0;m=d-d|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 2:$z=b.ea(c,d,e);if(C())
{break _;}n=$z;if(n<8)return Cs(f);k=0;n=2;$p=3;case 3:$z=ALR(a,b,c,d,j,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=e+1|0;p=3;$p=4;continue _;}k=1;if(!k){n=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 4:$z=ALR(a,b,c,d,n,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=4;$p
=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 5:$z=ALR(a,b,i,d,e,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if
(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 6:$z=ALR(a,b,n,d,e,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 7:$z=ZN(a,b,n,d,o);if(C()){break _;}p=$z;if(p<0){$p=8;continue _;}if(p>=0){q=p-g|0;f=C3(f,Bh(n-c|0,q),Bh(m,q),Bh(o-e|0,q));}h=h+1|0;if(h
>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;continue _;case 8:$z=ZN(a,b,n,k,o);if(C()){break _;}p=$z;if(p>=0){q=p-l|0;f=C3(f,Bh(n-c|0,q),Bh(m,q),Bh(o-e|0,q));}h=h+1|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 9:$z=ALR(a,b,c,n,j,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n
=5;$p=12;continue _;case 10:$z=ALR(a,b,c,n,p,q);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 11:$z=ALR(a,b,i,n,e,p);if(C()){break _;}n=$z;if(n)k=1;if(k){k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);}c=c+1|0;d=d+1|0;n=5;$p=12;case 12:$z=ALR(a,b,c,d,e,n);if(C()){break _;}c=$z;if(c)k=1;if(k)f=C3(Cs(f),0.0,(-6.0),0.0);return Cs(f);default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,
q,$p);}
function AHW(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ADS(a,b,c,d,e);if(C()){break _;}h=$z;g.t=g.t+h.t;g.v=g.v+h.v;g.s=g.s+h.s;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AOw(a){return a.bR===A48?5:a.bR!==A49?0:30;}
function Z2(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.q3(c,d,e);if(C()){break _;}f=$z;d=d+1|0;$p=2;case 2:$z=b.q3(c,d,e);if(C()){break _;}g=$z;if(f>g)g=f;return g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ALu(a,b,c,d,e,f){return;}
function AZb(a){return 0;}
function UF(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bR===A48&&!D(f,64)){$p=2;continue _;}if(a.bR!==A49)return;g=d+1|0;$p=1;case 1:$z=XG(b,c,g,e);if(C()){break _;}h=$z;if(h!==A5y)return;$p=3;continue _;case 2:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;if(g>0&&g<8)D1(b,c+0.5,d+0.5,e+0.5,B(247),L(f)*0.25+0.75,L(f)*1.0+0.5);if(a.bR!==A49)return;g=d+1|0;$p=1;continue _;case 3:$z=Wo(b,c,
g,e);if(C()){break _;}g=$z;if(!g&&!D(f,100))BQ(b,B(248),c+L(f),d+a.ch,e+L(f),0.0,0.0,0.0);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AWk(b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:g=null;if(f===A48){J();g=A5e;$p=1;continue _;}if(f!==A49)return g.t===0.0&&g.s===0.0?(-1000.0):CB(g.s,g.t)-1.5707963267948966;J();f=A5f;$p=2;continue _;case 1:$z=ADS(g,b,c,d,e);if(C()){break _;}g=$z;if(f!==A49)return g.t===0.0&&g.s===0.0?(-1000.0):CB(g.s,g.t)-1.5707963267948966;J();f=A5f;$p=2;case 2:$z=ADS(f,b,c,d,e);if(C()){break _;}g=$z;return g.t===
0.0&&g.s===0.0?(-1000.0):CB(g.s,g.t)-1.5707963267948966;default:Es();}}CM().s(b,c,d,e,f,g,$p);}
function AL$(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJL(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AGb(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJL(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AJL(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Yc(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b&&a.bR===A49){f=0;g=e-1|0;$p=2;continue _;}return;case 2:$z=XG(b,c,d,g);if(C()){break _;}h=$z;if(h===A48)f=1;if(!f){g=e+1|0;$p=3;continue _;}f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 3:$z
=XG(b,c,d,g);if(C()){break _;}h=$z;if(h===A48)f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 4:$z=XG(b,g,d,e);if(C()){break _;}h=$z;if(h===A48)f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 5:$z=XG(b,g,d,e);if(C()){break _;}h=$z;if(h===A48)f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 6:$z=XG(b,c,g,e);if(C()){break _;}h=
$z;if(h===A48)f=1;if(!f)return;$p=7;case 7:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;if(!g){J();f=A4H.b;$p=8;continue _;}if(g>4){Ii(a,b,c,d,e);return;}J();f=A4j.b;$p=9;continue _;case 8:AJ9(b,c,d,e,f);if(C()){break _;}Ii(a,b,c,d,e);return;case 9:AJ9(b,c,d,e,f);if(C()){break _;}Ii(a,b,c,d,e);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function Ii(a,b,c,d,e){var f,g,h,i;D1(b,c+0.5,d+0.5,e+0.5,B(209),0.5,2.5999999046325684+(L(b.n)-L(b.n))*0.800000011920929);f=0;g=c;h=d+1.2;i=e;while(f<8){BQ(b,B(249),g+BI(),h,i+BI(),0.0,0.0,0.0);f=f+1|0;}}
function ZQ(){var a=this;GI.call(a);a.k$=0;a.gz=null;a.cu=null;}
function AN4(a,b){var c=new ZQ();ARl(c,a,b);return c;}
function ARl(a,b,c){Np(a,b,c);a.k$=0;a.gz=$rt_createBooleanArray(4);a.cu=$rt_createIntArray(4);}
function ACs(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}f=$z;g=a.b+1|0;$p=2;case 2:AEq(b,c,d,e,g,f);if(C()){break _;}HS(b,c,d,e,c,d,e);return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AJq(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAJ(a,b,c,d,e);if(C()){break _;}g=$z;h=1;if(g<=0){$p=2;continue _;}i=(-100);a.k$=0;j=c-1|0;$p=3;continue _;case 2:ACs(a,b,c,d,e);if(C()){break _;}j=d-1|0;$p=7;continue _;case 3:$z=AJn(a,b,j,d,e,i);if(C()){break _;}j=$z;k=c+1|0;$p=4;case 4:$z=AJn(a,b,k,d,e,j);if
(C()){break _;}j=$z;k=e-1|0;$p=5;case 5:$z=AJn(a,b,c,d,k,j);if(C()){break _;}j=$z;k=e+1|0;$p=6;case 6:$z=AJn(a,b,c,d,k,j);if(C()){break _;}j=$z;k=j+a.pc|0;if(!(k<8&&j>=0))k=(-1);j=d+1|0;$p=8;continue _;case 7:$z=AGQ(a,b,c,j,e);if(C()){break _;}k=$z;if(!k){if(g<0)return;if(!g){$p=12;continue _;}$p=13;continue _;}if(g>=8){d=a.b;$p=10;continue _;}d=a.b;k=g+8|0;$p=9;continue _;case 8:$z=AAJ(a,b,c,j,e);if(C()){break _;}l=$z;if(l>=0){$p=11;continue _;}if(a.k$>=2&&a.bR===A48)k=0;if(a.bR===A49&&g<8&&k<8&&k>g&&D(f,4))
{h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 9:AD2(b,c,j,e,d,k);if(C()){break _;}return;case 10:AD2(b,c,j,e,d,g);if(C()){break _;}return;case 11:$z=AAJ(a,b,c,j,e);if(C()){break _;}k=$z;if(k<8)k=k+8|0;if(a.k$>=2&&a.bR===A48)k=0;if(a.bR===A49&&g<8&&k<8&&k>g&&D(f,4)){h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 12:$z=AF1(a,b,c,d,e);if(C()){break _;}m
=$z;l=g+a.pc|0;if(g>=8)l=1;if(l>=8)return;m=m.data;if(m[0]){j=c-1|0;$p=14;continue _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 13:$z=X6(a,b,c,j,e);if(C()){break _;}j=$z;if(!j)return;$p=12;continue _;case 14:AJN(a,b,j,d,e,l);if(C()){break _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 15:AJN(a,b,j,d,e,l);if(C()){break _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e
=e+1|0;$p=21;continue _;case 16:AJN(a,b,c,d,j,l);if(C()){break _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 17:ACs(a,b,c,d,e);if(C()){break _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 18:AFw(b,c,d,e,k);if(C()){break _;}EF(b,c,d,e,a.b);j=a.b;$p=19;case 19:AC3(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 20:AJ9(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 21:AJN(a,b,c,d,e,l);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AJN(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGQ(a,b,c,d,e);if(C()){break _;}g=$z;if(!g)return;$p=2;case 2:$z=Yc(b,c,d,e);if(C()){break _;}g=$z;if(g>0){if(a.bR!==A49){J();h=A3_.data[g];$p=4;continue _;}Ii(a,b,c,d,e);}g=a.b;$p=3;case 3:AD2(b,c,d,e,g,f);if(C()){break _;}return;case 4:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;$p=5;case 5:h.EC(b,c,d,e,g);if(C()){break _;}g
=a.b;$p=3;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AIy(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=1000;i=0;j=S(g,1);k=S(g,3);l=S(g,2);m=c-1|0;n=e-1|0;o=d-1|0;p=S(f,4);q=f+1|0;a:{while(i<4){if(!(!i&&!j)){r=S(i,1);if(!(!r&&!g)){s=S(i,2);if(!(!s&&!k)){t=S(i,3);if(t)break a;if
(l)break a;}}}i=i+1|0;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;case 1:$z=X6(a,b,u,d,r);if(C()){break _;}t=$z;if(!t){$p=2;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;continue _;case 2:$z=XG(b,u,d,r);if(C()){break _;}v=$z;if(v!==a.bR){$p=3;continue _;}$p=4;continue _;case 3:$z=X6(a,b,u,o,r);if(C()){break _;}t=$z;if(!t)return f;if
(p<0){$p=5;continue _;}c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;case 4:$z=AAd(b,u,d,r);if(C()){break _;}t=$z;if(t){$p=3;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1
|0;$p=1;continue _;case 5:$z=AIy(a,b,u,d,r,q,i);if(C()){break _;}t=$z;if(t<h)h=t;c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AF1(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;h=e-1|0;i=d-1|0;if(f>=4){c=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gz;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gz;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;case 1:$z
=X6(a,b,l,d,m);if(C()){break _;}j=$z;if(!j){$p=2;continue _;}f=f+1|0;if(f>=4){c=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gz;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gz;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;continue _;case 2:$z=XG(b,l,d,m);if(C()){break _;}n=$z;if(n!==a.bR){$p=3;continue _;}$p=4;continue _;case 3:$z=X6(a,b,l,i,m);if(C()){break _;}j=$z;if(j){k=a.cu.data;j=1;$p=5;continue _;}a.cu.data[f]=0;f=f+1|0;if(f>=4){c
=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gz;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gz;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 4:$z=AAd(b,l,d,m);if(C()){break _;}j=$z;if(j){$p=3;continue _;}f=f+1|0;if(f>=4){c=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gz;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gz;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?
h:e;if(f==3)m=m+1|0;$p=1;continue _;case 5:$z=AIy(a,b,l,d,m,j,f);if(C()){break _;}j=$z;k[f]=j;f=f+1|0;if(f>=4){c=a.cu.data[0];j=1;while(j<4){if(a.cu.data[j]<c)c=a.cu.data[j];j=j+1|0;}d=0;while(d<4){k=a.gz;k.data[d]=a.cu.data[d]!=c?0:1;d=d+1|0;}return a.gz;}a.cu.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function X6(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Yc(b,c,d,e);if(C()){break _;}f=$z;J();if(f!=A6n.b&&f!=A6m.b&&f!=A5A.b){if(!f)return 0;return A3_.data[f].bR.c3();}return 1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AJn(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAJ(a,b,c,d,e);if(C()){break _;}g=$z;if(g<0)return f;if(!g)a.k$=a.k$+1|0;if(g>=8)g=0;if(f>=0&&g>=f)g=f;return g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AGQ(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XG(b,c,d,e);if(C()){break _;}f=$z;if(f===a.bR)c=0;else{if(f!==A49){$p=2;continue _;}c=0;}return c;case 2:$z=X6(a,b,c,d,e);if(C()){break _;}c=$z;return c?0:1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function XJ(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJL(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Yc(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b)EF(b,c,d,e,a.b);return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ADQ(){GI.call(this);}
function AQi(a,b){var c=new ADQ();ATL(c,a,b);return c;}
function ATL(a,b,c){Np(a,b,c);Ey(a,0);}
function ABU(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJL(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Yc(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return;$p=3;case 3:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;b.qE=1;f=a.b-1|0;$p=4;case 4:AEq(b,c,d,e,f,g);if(C()){break _;}HS(b,c,d,e,c,d,e);EF(b,c,d,e,a.b-1|0);b.qE=0;return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function HH(){P.call(this);}
var A4g=0;function A1o(a,b){var c=new HH();ON(c,a,b);return c;}
function ON(a,b,c){CS(a,b,c,A6L);}
function AL8(a,b,c,d,e){EF(b,c,d,e,a.b);}
function AMv(a,b,c,d,e,f){EF(b,c,d,e,a.b);}
function AKb(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=Yc(b,c,g,e);if(C()){break _;}g=$z;if(!g)g=1;else{J();if(g==A5H.b)g=1;else{f=A3_.data[g].bR;g=f===A48?1:f!==A49?0:1;}}if(g&&d>=0){f=new Ic;h=c+0.5;i=d+0.5;j=e+0.5;c=a.b;EQ(f,b);f.no=0;f.g6=c;f.lp=1;Dx(f,0.9800000190734863,0.9800000190734863);f.cF=f.ef/2.0;k
=h;l=i;m=j;CC(f,k,l,m);f.f=0.0;f.h=0.0;f.g=0.0;f.h_=0;f.bH=k;f.ct=l;f.bG=m;if(!A4g){$p=2;continue _;}if(!f.cs){$p=3;continue _;}}return;case 2:AIX(b,f);if(C()){break _;}return;case 3:AHz(f);if(C()){break _;}if(f.cs)return;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AUP(a){return 3;}
function Yr(){A4g=0;}
function ACn(){HH.call(this);}
function A1t(a,b){var c=new ACn();AO9(c,a,b);return c;}
function AO9(a,b,c){ON(a,b,c);}
function AZQ(a,b,c){if(D(c,10))b=a.b;else{Bw();b=A6R.cx;}return b;}
function UV(){P.call(this);}
function PJ(a,b){var c=new UV();ARC(c,a,b);return c;}
function ARC(a,b,c){CS(a,b,c,A6r);}
function AU2(a,b,c){b=a.b;J();if(b==A4A.b){Bw();b=A6S.cx;}else if(a.b!=A6f.b)b=a.b;else{Bw();b=A6T.cx;}return b;}
function AR5(a,b){return 1;}
function AAK(){P.call(this);}
function A2e(a){var b=new AAK();AZJ(b,a);return b;}
function AZJ(a,b){Dw(a,b,A6s);a.W=20;}
function AYg(a,b){return 1;}
function ANj(a,b,c){J();return A4m.b;}
function AOS(a,b){return b==1?21:b?20:21;}
function J_(){P.call(this);this.ql=0;}
function AK3(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.dL(c,d,e);if(C()){break _;}g=$z;if(!a.ql&&g==a.b)return 0;$p=2;case 2:$z=ABR(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Yl(){J_.call(this);this.zl=0;}
function A0J(a,b){var c=new Yl();ASI(c,a,b);return c;}
function ASI(a,b,c){CS(a,b,c,A6H);a.ql=0;a.zl=c;Ey(a,1);}
function ADF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=XG(b,c,g,e);if(C()){break _;}f=$z;if(f.c3())return;h=c-2|0;i=c+2|0;j=d+1|0;k=e-2|0;l=e+2|0;while(h<=i){m=g;while(m<=j){n=k;if(n<=l){$p=5;continue _;}m=m+1|0;}h=h+1|0;}$p=2;case 2:$z=AAd(b,c,d,e);if(C()){break _;}i=$z;$p=3;case 3:Uk(a,
b,c,d,e,i);if(C()){break _;}i=0;$p=4;case 4:AJ9(b,c,d,e,i);if(C()){break _;}return;case 5:$z=Yc(b,h,m,n);if(C()){break _;}o=$z;J();if(o==A4m.b)return;n=n+1|0;while(n>l){m=m+1|0;while(m>j){h=h+1|0;if(h>i){$p=2;continue _;}m=g;}n=k;}continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function APT(a,b){return D(b,10)?0:1;}
function AVz(a,b,c){J();return A4r.b;}
function AT5(a){return a.ql?0:1;}
function AFo(a,b){a.ql=b;a.W=a.zl+(!b?1:0)|0;}
function AMI(a,b,c,d,e,f){return;}
function AGa(){P.call(this);}
function A04(a){var b=new AGa();AYd(b,a);return b;}
function AYd(a,b){Dw(a,b,A6J);a.W=48;}
function AFJ(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;if(k<=e){$p=1;continue _;}j=j+1|0;}f=f+1|0;}return;case 1:$z=XG(b,f,j,k);if(C()){break _;}l=$z;k=k+1|0;a:while(true){if(k<=e){continue _;}j=j+1|0;while(j>d){f=f+1|0;if(f>g)break a;j=h;}k=i;}return;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function AIb(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;if(l<=c){$p=1;continue _;}k=k+1|0;}f=f+1|0;}return;case 1:$z=Yc(b,f,k,l);if(C()){break _;}d=$z;$p=2;case 2:AC3(b,f,k,l,d);if(C()){break _;}l=l+1|0;a:while(true){if(l<=c){$p=1;continue _;}k=k+1|0;while(k>i){f
=f+1|0;if(f>g)break a;k=h;}l=j;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function K$(){P.call(this);this.zw=0;}
function AY3(a){return 0;}
function Ux(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.dL(c,d,e);if(C()){break _;}g=$z;if(!a.zw&&g==a.b)return 0;$p=2;case 2:$z=ABR(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AKU(){K$.call(this);}
function A01(a,b,c,d){var e=new AKU();AVB(e,a,b,c,d);return e;}
function AVB(a,b,c,d,e){CS(a,b,c,d);a.zw=e;}
function APd(a,b){return 0;}
function ACv(){Fe.call(this);}
function ANI(a,b){var c=new ACv();AZE(c,a,b);return c;}
function AZE(a,b,c){JM(a,b,c);Bj(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function AD$(a,b){J();return A5S.data[b];}
function YX(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=TD(b,c,d,e);if(C()){break _;}f=$z;if(f>13)return 0;d=d-1|0;$p=2;case 2:$z=Yc(b,c,d,e);if(C()){break _;}c=$z;return !AD$(a,c)?0:1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Xd(){P.call(this);}
function Z8(a,b){var c=new Xd();AQt(c,a,b);return c;}
function AQt(a,b,c){Dw(a,b,A6G);a.W=c;}
function AU$(a,b){return b==1?a.W-16|0:b?a.W:a.W+16|0;}
function Ve(){P.call(this);this.uk=0;}
function AYx(a,b){var c=new Ve();AWi(c,a,b);return c;}
function AWi(a,b,c){CS(a,b,6,A6r);a.uk=c;if(!c)Bj(a,0.0,0.0,0.0,1.0,0.5,1.0);FF(a,255);}
function AZp(a,b){return b>1?5:6;}
function AV4(a){return a.uk;}
function Xl(a,b,c,d,e,f){J();}
function W4(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:J();f=d-1|0;$p=1;case 1:$z=Yc(b,c,f,e);if(C()){break _;}g=$z;if(g!=A4e.b)return;g=0;$p=2;case 2:AJ9(b,c,d,e,g);if(C()){break _;}d=A4d.b;$p=3;case 3:AJ9(b,c,f,e,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ARt(a,b,c){J();return A4e.b;}
function APV(a){return a.uk;}
function AMT(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:J();if(a!==A4e){$p=1;continue _;}if(f==1)return 1;$p=2;continue _;case 1:ABR(a,b,c,d,e,f);if(C()){break _;}if(f==1)return 1;$p=2;case 2:$z=ABR(a,b,c,d,e,f);if(C()){break _;}g=$z;if(!g)c=0;else{if(f){$p=3;continue _;}c=1;}return c;case 3:$z=b.dL(c,d,e);if(C()){break _;}c=$z;return c==a.b?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AIW(){P.call(this);}
function A0K(a,b){var c=new AIW();ASj(c,a,b);return c;}
function ASj(a,b,c){CS(a,b,c,A6N);}
function AVq(a,b){return !b?a.W+2|0:b!=1?a.W:a.W+1|0;}
function AOC(a,b){return 0;}
function AB0(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=APJ(b,c+0.5,d+0.5,e+0.5);f.gI=D(b.n,f.gI/4|0)+(f.gI/8|0)|0;$p=1;case 1:AIX(b,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AMC(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=APJ(b,c+0.5,d+0.5,e+0.5);$p=1;case 1:AIX(b,g);if(C()){break _;}C2(b,g,B(220),1.0,1.0);return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function YO(){P.call(this);}
function A0v(a,b){var c=new YO();AN1(c,a,b);return c;}
function AN1(a,b,c){CS(a,b,c,A6s);}
function AZI(a,b){return b>1?a.W:4;}
function AU_(a,b){return 0;}
function TQ(){J3.call(this);}
function A1e(a,b){var c=new TQ();ARx(c,a,b);return c;}
function ARx(a,b,c){AD_(a,b,c);}
function AUg(a,b){return 1;}
function AOt(a,b,c){J();return A4H.b;}
function AJf(){P.call(this);}
function A06(a,b){var c=new AJf();AZy(c,a,b);return c;}
function AZy(a,b,c){CS(a,b,c,A6M);Ey(a,1);}
function AH4(a,b,c,d,e){return null;}
function ATw(a){return 0;}
function APh(a){return 0;}
function ASE(a){return 2;}
function AG1(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=Wo(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=Wo(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=Wo(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;f=e+1|0;$p=4;case 4:$z=Wo(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;d=d-1|0;$p=5;case 5:$z=Wo(b,c,d,e);if(C()){break _;}c=$z;return c;default:
Es();}}CM().s(a,b,c,d,e,f,$p);}
function AIu(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;if(f==1){h=d-1|0;$p=2;continue _;}if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 2:$z=Wo(b,c,h,e);if(C()){break _;}h=$z;if(h)g=5;if(f==2){h=e+1|0;$p=3;continue _;}if(f==3)
{h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 3:$z=Wo(b,c,d,h);if(C()){break _;}h=$z;if(h)g=4;if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 4:$z=Wo(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 5:$z=Wo(b,h,d,e);if(C()){break _;}h=$z;if(h)g=2;if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 6:$z
=Wo(b,f,d,e);if(C()){break _;}f=$z;if(f)g=1;$p=7;case 7:AFw(b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AMt(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;if(g)return;$p=2;case 2:Xc(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Xc(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=Wo(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=c+1|0;$p=2;continue _;}f=1;$p=3;continue _;case 2:$z=Wo(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=e-1|0;$p=4;continue _;}f=2;$p=5;continue _;case 3:AFw(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 4:$z=Wo(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=e+1|0;$p=7;continue _;}f=3;$p=8;continue _;case 5:AFw(b,
c,d,e,f);if(C()){break _;}$p=6;case 6:AAA(a,b,c,d,e);if(C()){break _;}return;case 7:$z=Wo(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=d-1|0;$p=9;continue _;}f=4;$p=10;continue _;case 8:AFw(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 9:$z=Wo(b,c,f,e);if(C()){break _;}f=$z;if(!f){$p=6;continue _;}f=5;$p=11;continue _;case 10:AFw(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 11:AFw(b,c,d,e,f);if(C()){break _;}$p=6;continue _;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AFd(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAA(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;$p=2;case 2:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;h=0;f=c-1|0;$p=3;case 3:$z=Wo(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==1)h=1;f=c+1|0;$p=4;case 4:$z=Wo(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==2)h=1;f=e-1|0;$p=5;case 5:$z=Wo(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==
3)h=1;f=e+1|0;$p=6;case 6:$z=Wo(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==4)h=1;f=d-1|0;$p=7;case 7:$z=Wo(b,c,f,e);if(C()){break _;}f=$z;if(!f&&g==5)h=1;if(!h)return;$p=8;case 8:$z=AAd(b,c,d,e);if(C()){break _;}f=$z;$p=9;case 9:Uk(a,b,c,d,e,f);if(C()){break _;}f=0;$p=10;case 10:AJ9(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AAA(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AG1(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AAd(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Uk(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:AJ9(b,c,d,e,f);if(C()){break _;}return 0;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AFk(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}h=$z;if(h==1)Bj(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)Bj(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)Bj(a,0.3499999940395355,0.20000000298023224,
0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)Bj(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else Bj(a,0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);$p=2;case 2:$z=IE(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AKW(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;m=j;BQ(b,B(250),k,l,m,0.0,0.0,0.0);BQ(b,B(251),k,l,m,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l
=i+0.2199999988079071;m=j;BQ(b,B(250),k,l,m,0.0,0.0,0.0);BQ(b,B(251),k,l,m,0.0,0.0,0.0);}else if(g==3){k=h;l=i+0.2199999988079071;m=j-0.27000001072883606;BQ(b,B(250),k,l,m,0.0,0.0,0.0);BQ(b,B(251),k,l,m,0.0,0.0,0.0);}else if(g!=4){n=h;o=i;p=j;BQ(b,B(250),n,o,p,0.0,0.0,0.0);BQ(b,B(251),n,o,p,0.0,0.0,0.0);}else{k=h;l=i+0.2199999988079071;m=j+0.27000001072883606;BQ(b,B(250),k,l,m,0.0,0.0,0.0);BQ(b,B(251),k,l,m,0.0,0.0,0.0);}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AJC(){var a=this;P.call(a);a.qR=null;a.sd=null;}
function A2h(a,b){var c=new AJC();AUG(c,a,b);return c;}
function AUG(a,b,c){CS(a,b,c,A6K);a.qR=$rt_createIntArray(256);a.sd=$rt_createIntArray(256);Gn(a,A4l.b,5,20);Gn(a,A4m.b,5,5);Gn(a,A4n.b,30,60);Gn(a,A4F.b,30,20);Gn(a,A4G.b,15,100);Gn(a,A4z.b,30,60);Ey(a,1);}
function Gn(a,b,c,d){a.qR.data[b]=c;a.sd.data[b]=d;}
function ALW(a,b,c,d,e){return null;}
function AV9(a){return 0;}
function AXZ(a){return 0;}
function AP_(a){return 3;}
function APD(a,b){return 0;}
function AR2(a){return 20;}
function TP(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;h=S(g,15);if(h>=0){$p=2;continue _;}i=g+1|0;$p=3;continue _;case 2:$z=AHD(a,b,c,d,e);if(C()){break _;}i=$z;if(i){j=d-1|0;$p=4;continue _;}h=d-1|0;$p=5;continue _;case 3:AFw(b,
c,d,e,i);if(C()){break _;}EF(b,c,d,e,a.b);$p=2;continue _;case 4:$z=ABo(a,b,c,j,e);if(C()){break _;}i=$z;if(!i&&!h&&!D(f,4)){h=0;$p=13;continue _;}if(!(g%5|0)&&g>5){h=c+1|0;i=300;$p=7;continue _;}return;case 5:$z=Wo(b,c,h,e);if(C()){break _;}h=$z;if(h&&g<=3)return;h=0;$p=6;case 6:AJ9(b,c,d,e,h);if(C()){break _;}return;case 7:UE(a,b,h,d,e,i,f);if(C()){break _;}i=c-1|0;g=300;$p=8;case 8:UE(a,b,i,d,e,g,f);if(C()){break _;}g=100;$p=9;case 9:UE(a,b,c,j,e,g,f);if(C()){break _;}k=d+1|0;g=200;$p=10;case 10:UE(a,b,c,
k,e,g,f);if(C()){break _;}l=e-1|0;g=300;$p=11;case 11:UE(a,b,c,d,l,g,f);if(C()){break _;}m=e+1|0;g=300;$p=12;case 12:UE(a,b,c,d,m,g,f);if(C()){break _;}n=d+4|0;a:{while(i<=h){o=l;while(o<=m){p=j;while(p<=n){if(i!=c)break a;if(p!=d)break a;if(o!=e)break a;p=p+1|0;}o=o+1|0;}i=i+1|0;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 13:AJ9(b,c,d,e,h);if(C()){break _;}return;case 14:$z=Yc(b,i,p,o);if(C()){break _;}r=$z;if(!r){r=i+1|0;$p=15;continue _;}if(0>0&&D(f,q)<=0){g=a.b;$p=21;continue _;}b:
{c:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break c;o=l;}p=j;}if(i!=c)break b;if(p!=d)break b;if(o==e)continue;else break b;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;continue _;case 15:$z=ABW(a,b,r,p,o,g);if(C()){break _;}g=$z;r=i-1|0;$p=16;case 16:$z=ABW(a,b,r,p,o,g);if(C()){break _;}g=$z;r=p-1|0;$p=17;case 17:$z=ABW(a,b,i,r,o,g);if(C()){break _;}g=$z;r=p+1|0;$p=18;case 18:$z=ABW(a,b,i,r,o,g);if(C()){break _;}g=$z;r=o-1|0;$p=19;case 19:$z=ABW(a,b,i,p,r,g);if(C()){break _;}r=$z;g
=o+1|0;$p=20;case 20:$z=ABW(a,b,i,p,g,r);if(C()){break _;}r=$z;if(r>0&&D(f,q)<=r){g=a.b;$p=21;continue _;}d:{b:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break b;o=l;}p=j;}if(i!=c)break d;if(p!=d)break d;if(o==e)continue;else break d;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 21:AJ9(b,i,p,o,g);if(C()){break _;}a:{d:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break d;o=l;}p=j;}if(i!=c)break a;if(p!=d)break a;if(o==e)continue;else break a;}return;}q
=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function UE(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.sd.data;$p=1;case 1:$z=Yc(b,c,d,e);if(C()){break _;}i=$z;j=h[i];if(D(g,f)>=j)return;$p=2;case 2:$z=Yc(b,c,d,e);if(C()){break _;}f=$z;J();i=f!=A4G.b?0:1;if(D(g,2)){f=0;$p=3;continue _;}f=a.b;$p=4;continue _;case 3:AJ9(b,c,d,e,f);if(C()){break _;}if(!i)return;g=A4G;f=0;$p=5;continue _;case 4:AJ9(b,c,d,e,f);if
(C()){break _;}if(!i)return;g=A4G;f=0;$p=5;case 5:g.l_(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AHD(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c+1|0;$p=1;case 1:$z=ABo(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c-1|0;$p=2;case 2:$z=ABo(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=d-1|0;$p=3;case 3:$z=ABo(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=d+1|0;$p=4;case 4:$z=ABo(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=5;case 5:$z=ABo(a,b,c,d,f);if(C()){break _;}f=
$z;if(f)return 1;e=e+1|0;$p=6;case 6:$z=ABo(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AUq(a){return 0;}
function ABo(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.qR.data;$p=1;case 1:$z=b.dL(c,d,e);if(C()){break _;}c=$z;return f[c]<=0?0:1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ABW(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.qR.data;$p=1;case 1:$z=Yc(b,c,d,e);if(C()){break _;}c=$z;h=g[c];if(h>f)f=h;return f;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AH$(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=Wo(b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AHD(a,b,c,d,e);if(C()){break _;}c=$z;return c?1:0;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Xh(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=Wo(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AHD(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return;f=0;$p=3;case 3:AJ9(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function X$(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=Wo(b,c,f,e);if(C()){break _;}f=$z;if(f){EF(b,c,d,e,a.b);return;}$p=2;case 2:$z=AHD(a,b,c,d,e);if(C()){break _;}f=$z;if(f){EF(b,c,d,e,a.b);return;}f=0;$p=3;case 3:AJ9(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AMJ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!D(f,24))D1(b,c+0.5,d+0.5,e+0.5,B(252),1.0+L(f),L(f)*0.699999988079071+0.30000001192092896);g=d-1|0;$p=1;case 1:$z=Wo(b,c,g,e);if(C()){break _;}h=$z;if(h){g=0;i=c;j=d;k=e;while(g<3){BQ(b,B(249),i+L(f),j+L(f)*0.5+0.5,k+L(f),0.0,0.0,
0.0);g=g+1|0;}return;}J();l=A5H;$p=2;case 2:$z=ABo(l,b,c,g,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;k=e;while(g<3){BQ(b,B(249),i+L(f),j+L(f)*0.5+0.5,k+L(f),0.0,0.0,0.0);g=g+1|0;}return;}l=A5H;g=c-1|0;$p=3;case 3:a:{$z=ABo(l,b,g,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;m=d;n=e;while(true){if(g>=2)break a;j=i+L(f)*0.10000000149011612;k=m+L(f);o=n+L(f);BQ(b,B(249),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=A5H;h=c+1|0;$p=4;case 4:a:{$z=ABo(l,b,h,d,e);if(C()){break _;}g=$z;if(g){g=0;i=h;m=d;n=e;while(true){if(g>=2)break a;j
=i-L(f)*0.10000000149011612;k=m+L(f);o=n+L(f);BQ(b,B(249),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=A5H;g=e-1|0;$p=5;case 5:a:{$z=ABo(l,b,c,d,g);if(C()){break _;}g=$z;if(g){g=0;i=c;k=d;n=e;while(true){if(g>=2)break a;j=i+L(f);m=k+L(f);o=n+L(f)*0.10000000149011612;BQ(b,B(249),j,m,o,0.0,0.0,0.0);g=g+1|0;}}}l=A5H;g=e+1|0;$p=6;case 6:a:{$z=ABo(l,b,c,d,g);if(C()){break _;}h=$z;if(h){h=0;o=c;p=d;j=g;while(true){if(h>=2)break a;q=o+L(f);i=p+L(f);n=j-L(f)*0.10000000149011612;BQ(b,B(249),q,i,n,0.0,0.0,0.0);h=h+1|0;}}}l=A5H;d=
d+1|0;$p=7;case 7:a:{$z=ABo(l,b,c,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;n=e;while(true){if(g>=2)break a;q=i+L(f);k=j-L(f)*0.10000000149011612;o=n+L(f);BQ(b,B(249),q,k,o,0.0,0.0,0.0);g=g+1|0;}}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function DN(){P.call(this);}
function AJh(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.rq();$p=1;case 1:ABj(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AGS(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABa(b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function V4(){DN.call(this);}
function A2b(a,b){var c=new V4();AOq(c,a,b);return c;}
function AOq(a,b,c){CS(a,b,c,A6r);}
function AP0(a){return A12();}
function AV_(a){return 0;}
function Vu(){P.call(this);this.ci=null;}
function AZr(a,b){var c=new Vu();AW2(c,a,b);return c;}
function AW2(a,b,c){CS(a,b,c.W,c.bR);a.ci=c;BA(a,c.oF);C6(a,c.my/3.0);a.f0=c.f0;}
function AVY(a){return 0;}
function APb(a){return 0;}
function ARa(a){return 10;}
function AKc(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABR(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AEC(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}h=$z;if(!h){Bj(a,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bj(a,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bj(a,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;}Bj(a,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:AGt(a,b,c,d,e,f,
g);if(C()){break _;}Bj(a,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:AGt(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 4:AGt(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:AGt(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 6:AGt(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:AGt(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 8:AGt(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.5,1.0,
0.5,1.0);$p=9;case 9:AGt(a,b,c,d,e,f,g);if(C()){break _;}Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function ACU(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=XG(b,c,g,e);if(C()){break _;}h=$z;if(!h.c3()){$p=2;continue _;}i=a.ci.b;$p=11;continue _;case 2:ADz(a,b,c,d,e);if(C()){break _;}i=c+1|0;j=d-1|0;$p=3;case 3:ADz(a,b,i,j,e);if(C()){break _;}k=c-1|0;$p=4;case 4:ADz(a,b,k,j,e);if(C()){break _;}l=e-1|0;$p=5;case 5:ADz(a,
b,c,j,l);if(C()){break _;}m=e+1|0;$p=6;case 6:ADz(a,b,c,j,m);if(C()){break _;}$p=7;case 7:ADz(a,b,i,g,e);if(C()){break _;}$p=8;case 8:ADz(a,b,k,g,e);if(C()){break _;}$p=9;case 9:ADz(a,b,c,g,l);if(C()){break _;}$p=10;case 10:ADz(a,b,c,g,m);if(C()){break _;}h=a.ci;$p=12;continue _;case 11:AJ9(b,c,d,e,i);if(C()){break _;}h=a.ci;$p=12;case 12:h.ep(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ADz(a,b,c,d,e){var f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AKm(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;g=(-1);f=c+1|0;h=d+1|0;$p=2;case 2:$z=AKm(a,b,f,h,e);if(C()){break _;}i=$z;if(i)g=0;i=c-1|0;$p=3;case 3:$z=AKm(a,b,i,h,e);if(C()){break _;}j=$z;if(j)g=1;j=e+1|0;$p=4;case 4:$z=AKm(a,b,c,h,j);if(C()){break _;}k=$z;if(k)g=2;k=e-1|0;$p=
5;case 5:$z=AKm(a,b,c,h,k);if(C()){break _;}h=$z;if(h)g=3;if(g<0){$p=6;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 6:$z=Zb(a,b,f,d,e);if(C()){break _;}h=$z;if(h){$p=7;continue _;}$p=9;continue _;case 7:$z=Zb(a,b,i,d,e);if(C()){break _;}h=$z;if(!h)g=0;$p=9;continue _;case 8:$z=AKm(a,b,i,h,e);if(C()){break _;}i=$z;if(i)g=0;$p=12;continue _;case 9:$z=Zb(a,b,i,d,e);if(C()){break _;}h=$z;if(h){$p=10;continue _;}$p=13;continue _;case 10:$z=Zb(a,b,f,d,e);if(C()){break _;}h=$z;if
(!h)g=1;$p=13;continue _;case 11:AFw(b,c,d,e,g);if(C()){break _;}return;case 12:$z=AKm(a,b,f,h,e);if(C()){break _;}f=$z;if(f)g=1;$p=15;continue _;case 13:$z=Zb(a,b,c,d,j);if(C()){break _;}h=$z;if(h){$p=14;continue _;}$p=16;continue _;case 14:$z=Zb(a,b,c,d,k);if(C()){break _;}h=$z;if(!h)g=2;$p=16;continue _;case 15:$z=AKm(a,b,c,h,k);if(C()){break _;}f=$z;if(f)g=2;$p=18;continue _;case 16:$z=Zb(a,b,c,d,k);if(C()){break _;}h=$z;if(h){$p=17;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 17:$z
=Zb(a,b,c,d,j);if(C()){break _;}h=$z;if(!h)g=3;if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 18:$z=AKm(a,b,c,h,j);if(C()){break _;}f=$z;if(f)g=3;if(g<0)return;$p=11;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Zb(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XG(b,c,d,e);if(C()){break _;}b=$z;return b.c3();default:Es();}}CM().s(a,b,c,d,e,$p);}
function AKm(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Yc(b,c,d,e);if(C()){break _;}f=$z;if(!f)c=0;else{J();c=A3_.data[f].dO()!=10?0:1;}return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AJR(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.jQ(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function WY(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.ps(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Y2(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.l_(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AHE(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:$z=f.zs(b,c,d,e);if(C()){break _;}g=$z;return g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AYh(a,b){return a.ci.vU(b);}
function AXK(a){return a.ci.oi();}
function AUZ(a,b,c){return a.ci.dq(b,c);}
function ASk(a,b){return a.ci.d_(b);}
function AQa(a,b,c){return a.ci.em(b,c);}
function AXG(a,b){return a.ci.bZ(b);}
function AHP(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:$z=g.so(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AOY(a){return a.ci.lh();}
function AG9(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:$z=f.nr(b,c,d,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Yp(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.ci;$p=1;case 1:h.o4(b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AQZ(a){return a.ci.nO();}
function AQ8(a,b,c){return a.ci.nE(b,c);}
function AHd(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:$z=f.fh(b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Yk(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;$p=1;case 1:ACU(a,b,c,d,e,f);if(C()){break _;}g=a.ci;$p=2;case 2:g.e2(b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function UB(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:f.ks(b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AC5(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.ci;$p=1;case 1:h.DM(b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AHI(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.EC(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ALh(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.nh(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ALk(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:g.ew(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AB5(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.ci;$p=1;case 1:$z=g.ky(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function U9(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ci;$p=1;case 1:f.q1(b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ABh(){DN.call(this);this.eM=null;}
function A0l(a){var b=new ABh();AWW(b,a);return b;}
function AWW(a,b){Dw(a,b,A6s);a.eM=new Df;a.W=26;}
function Z5(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1)return a.W-1|0;if(!f)return a.W-1|0;g=e-1|0;$p=1;case 1:$z=b.dL(c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=b.dL(c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=b.dL(k,d,e);if(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=b.dL(m,
d,e);if(C()){break _;}n=$z;if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;J();if(A5S.data[h]&&!A5S.data[j])k=3;if(A5S.data[j]&&!A5S.data[h])k=2;if(A5S.data[l]&&!A5S.data[n])k=5;if(A5S.data[n]&&!A5S.data[l])k=4;return f!=k?a.W:a.W+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);c=l!=a.b?m:k;$p=7;continue _;}return a.W;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);c=h!=a.b?i:g;$p=5;continue _;}return a.W;case 5:$z=b.dL(k,d,c);if(C()){break _;}p=$z;if(h==a.b)i=g;$p=6;case 6:$z=b.dL(m,d,i);if(C()){break _;}m=$z;if(f==4)o=(-1)-o|0;i
=5;J();if(!(!A5S.data[l]&&!A5S.data[p])&&!A5S.data[n]&&!A5S.data[m])i=5;if(!(!A5S.data[n]&&!A5S.data[m])&&!A5S.data[l]&&!A5S.data[p])i=4;return (f!=i?a.W+32|0:a.W+16|0)+o|0;case 7:$z=b.dL(c,d,g);if(C()){break _;}g=$z;if(l==a.b)m=k;$p=8;case 8:$z=b.dL(m,d,i);if(C()){break _;}m=$z;if(f==3)o=(-1)-o|0;i=3;J();if(!(!A5S.data[h]&&!A5S.data[g])&&!A5S.data[j]&&!A5S.data[m])i=3;if(!(!A5S.data[j]&&!A5S.data[m])&&!A5S.data[h]&&!A5S.data[g])i=2;return (f!=i?a.W+32|0:a.W+16|0)+o|0;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,p,$p);}
function AYm(a,b){return b==1?a.W-1|0:!b?a.W-1|0:b!=3?a.W:a.W+1|0;}
function AE6(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;$p=1;case 1:$z=Yc(b,g,d,e);if(C()){break _;}h=$z;if(h==a.b)f=1;h=c+1|0;$p=2;case 2:$z=Yc(b,h,d,e);if(C()){break _;}i=$z;if(i==a.b)f=f+1|0;i=e-1|0;$p=3;case 3:$z=Yc(b,c,d,i);if(C()){break _;}j=$z;if(j==a.b)f=f+1|0;k=e+1|0;$p=4;case 4:$z=Yc(b,c,d,k);if(C()){break _;}l=$z;if(l==
a.b)f=f+1|0;if(f>1)return 0;$p=5;case 5:$z=AD1(a,b,g,d,e);if(C()){break _;}j=$z;if(j)return 0;$p=6;case 6:$z=AD1(a,b,h,d,e);if(C()){break _;}e=$z;if(e)return 0;$p=7;case 7:$z=AD1(a,b,c,d,i);if(C()){break _;}e=$z;if(e)return 0;$p=8;case 8:$z=AD1(a,b,c,d,k);if(C()){break _;}c=$z;return c?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AD1(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Yc(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return 0;f=c-1|0;$p=2;case 2:$z=Yc(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=c+1|0;$p=3;case 3:$z=Yc(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=e-1|0;$p=4;case 4:$z=Yc(b,c,d,f);if(C()){break _;}f=$z;if(f==a.b)return 1;e=e+1|0;$p=5;case 5:$z=Yc(b,c,d,e);if(C()){break _;}c=$z;return c
!=a.b?0:1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AMV(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIe(b,c,d,e);if(C()){break _;}f=$z;g=f;h=0;i=27;j=c;k=d;l=e;while(h<i){f=Om(g,h);if(f!==null){m=L(a.eM)*0.800000011920929+0.10000000149011612;n=L(a.eM)*0.800000011920929+0.10000000149011612;o
=L(a.eM)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;if(f.m>0){s=D(a.eM,21)+10|0;if(s>f.m)s=f.m;f.m=f.m-s|0;t=Gb(b,p,q,r,Mc(f.bs,s,f.dP));t.f=CH(a.eM)*0.05000000074505806;t.h=CH(a.eM)*0.05000000074505806+0.20000000298023224;t.g=CH(a.eM)*0.05000000074505806;$p=3;continue _;}}h=h+1|0;}$p=2;case 2:AGS(a,b,c,d,e);if(C()){break _;}return;case 3:AIX(b,t);if(C()){break _;}a:while(true){if(f.m>0){s=D(a.eM,21)+10|0;if(s>f.m)s=f.m;f.m=f.m-s|0;t=Gb(b,p,q,r,Mc(f.bs,s,f.dP));t.f=CH(a.eM)*0.05000000074505806;t.h
=CH(a.eM)*0.05000000074505806+0.20000000298023224;t.g=CH(a.eM)*0.05000000074505806;continue _;}while(true){h=h+1|0;if(h>=i)break a;f=Om(g,h);if(f===null)continue;else break;}m=L(a.eM)*0.800000011920929+0.10000000149011612;n=L(a.eM)*0.800000011920929+0.10000000149011612;o=L(a.eM)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;}$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function ABm(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIe(b,c,d,e);if(C()){break _;}g=$z;h=g;i=d+1|0;$p=2;case 2:$z=Wo(b,c,i,e);if(C()){break _;}j=$z;if(j)return 1;k=c-1|0;$p=3;case 3:$z=Yc(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){$p=5;continue _;}l=c+1|0;$p=4;case 4:$z=Yc(b,l,d,e);if
(C()){break _;}j=$z;if(j==a.b){$p=7;continue _;}m=e-1|0;$p=6;continue _;case 5:$z=Wo(b,k,i,e);if(C()){break _;}j=$z;if(j)return 1;l=c+1|0;$p=4;continue _;case 6:$z=Yc(b,c,d,m);if(C()){break _;}j=$z;if(j==a.b){$p=9;continue _;}n=e+1|0;$p=8;continue _;case 7:$z=Wo(b,l,i,e);if(C()){break _;}j=$z;if(j)return 1;m=e-1|0;$p=6;continue _;case 8:$z=Yc(b,c,d,n);if(C()){break _;}j=$z;if(j!=a.b){$p=10;continue _;}$p=11;continue _;case 9:$z=Wo(b,c,i,m);if(C()){break _;}j=$z;if(j)return 1;n=e+1|0;$p=8;continue _;case 10:$z
=Yc(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){g=new G2;o=B(253);$p=12;continue _;}g=h;$p=13;continue _;case 11:$z=Wo(b,c,i,n);if(C()){break _;}j=$z;if(j)return 1;$p=10;continue _;case 12:$z=AIe(b,k,d,e);if(C()){break _;}p=$z;Jq(g,o,p,h);$p=13;case 13:$z=Yc(b,l,d,e);if(C()){break _;}j=$z;if(j!=a.b){o=g;$p=15;continue _;}o=new G2;p=B(253);g=g;$p=14;case 14:$z=AIe(b,l,d,e);if(C()){break _;}h=$z;Jq(o,p,g,h);$p=15;case 15:$z=Yc(b,c,d,m);if(C()){break _;}e=$z;if(e==a.b){g=new G2;p=B(253);$p=16;continue _;}g=o;$p=
17;continue _;case 16:$z=AIe(b,c,d,m);if(C()){break _;}h=$z;Jq(g,p,h,o);$p=17;case 17:$z=Yc(b,c,d,n);if(C()){break _;}e=$z;if(e==a.b){o=new G2;p=B(253);g=g;$p=18;continue _;}o=g;b=o;$p=19;continue _;case 18:$z=AIe(b,c,d,n);if(C()){break _;}b=$z;Jq(o,p,g,b);b=o;$p=19;case 19:UY(f,b);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ARI(a){return A0$();}
function AFI(){P.call(this);}
function A1v(a,b){var c=new AFI();AOr(c,a,b);return c;}
function AOr(a,b,c){CS(a,b,c,A6M);}
function AAn(a,b,c,d,e){return null;}
function ANP(a){return 0;}
function AVA(a){return 0;}
function AXf(a){return 5;}
function AYN(a,b){return 1;}
function AOg(a){return 0;}
function ACO(){P.call(this);}
function A1g(a){var b=new ACO();ARq(b,a);return b;}
function ARq(a,b){Dw(a,b,A6s);a.W=59;}
function APw(a,b){if(b==1)b=a.W-16|0;else if(!b){J();b=A4l.bZ(0);}else b=b!=2&&b!=4?a.W:a.W+1|0;return b;}
function ACa(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AH9(f);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AFH(){Fe.call(this);}
function A15(a,b){var c=new AFH();ARQ(c,a,b);return c;}
function ARQ(a,b,c){JM(a,b,c);a.W=c;Ey(a,1);Bj(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AQ1(a,b){J();return b!=A6j.b?0:1;}
function AEr(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEt(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=TD(b,c,g,e);if(C()){break _;}h=$z;if(h<9)return;$p=3;case 3:$z=AAd(b,c,d,e);if(C()){break _;}h=$z;if(h>=7)return;$p=4;case 4:$z=U_(a,b,c,d,e);if(C()){break _;}i=$z;if(D(f,100.0/i|0))return;g=h+1|0;$p=5;case 5:AFw(b,c,d,e,g);if(C()){break _;}return;default:
Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function U_(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;g=e-1|0;$p=1;case 1:$z=Yc(b,c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=Yc(b,c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=Yc(b,k,d,e);if
(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=Yc(b,m,d,e);if(C()){break _;}n=$z;$p=5;case 5:$z=Yc(b,k,d,g);if(C()){break _;}o=$z;$p=6;case 6:$z=Yc(b,m,d,g);if(C()){break _;}p=$z;$p=7;case 7:$z=Yc(b,m,d,i);if(C()){break _;}q=$z;$p=8;case 8:$z=Yc(b,k,d,i);if(C()){break _;}r=$z;s=l!=a.b&&n!=a.b?0:1;t=h!=a.b&&j!=a.b?0:1;u=o!=a.b&&p!=a.b&&q!=a.b&&r!=a.b?0:1;o=d-1|0;while(k<=m){v=g;if(v<=i){$p=9;continue _;}k=k+1|0;}a:{if(!u){if(!s)break a;if(!t)break a;}f=f/2.0;}return f;case 9:$z=Yc(b,k,o,v);if(C()){break _;}w=$z;x
=0.0;J();if(w==A6j.b){x=1.0;$p=10;continue _;}if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){continue _;}k=k+1|0;if(k>m)break;v=g;}b:{if(!u){if(!s)break b;if(!t)break b;}f=f/2.0;}return f;case 10:$z=AAd(b,k,o,v);if(C()){break _;}d=$z;if(d>0)x=3.0;if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){$p=9;continue _;}k=k+1|0;if(k>m)break;v=g;}c:{if(!u){if(!s)break c;if(!t)break c;}f=f/2.0;}return f;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AXX(a,b,c){if(c<0)c=7;return a.W+c|0;}
function AVb(a){return 6;}
function AIg(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;h=c;i=d;j=e;while(g<3){if(D(b.n,15)<=f){k=L(b.n)*0.699999988079071+0.15000000596046448;l=L(b.n)*0.699999988079071+0.15000000596046448;m=L(b.n)*0.699999988079071+0.15000000596046448;n=new Er;o=h+k;p=i+l;q=j+m;r=new B6;Bw();Dg(r,
A6U);Ga(n,b,o,p,q,r);n.gt=10;$p=1;continue _;}g=g+1|0;}return;case 1:AIX(b,n);if(C()){break _;}while(true){g=g+1|0;if(g>=3)break;if(D(b.n,15)>f)continue;else{k=L(b.n)*0.699999988079071+0.15000000596046448;l=L(b.n)*0.699999988079071+0.15000000596046448;m=L(b.n)*0.699999988079071+0.15000000596046448;n=new Er;o=h+k;p=i+l;q=j+m;r=new B6;Bw();Dg(r,A6U);Ga(n,b,o,p,q,r);n.gt=10;continue _;}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ASH(a,b,c){var d;c=Ds();d=new Ba;Y(d);B9(c,N(Bb(H(d,B(254)),b)));if(b!=7)b=(-1);else{Bw();b=A6V.cx;}return b;}
function AVm(a,b){return 1;}
function ALg(){P.call(this);}
function A1E(a){var b=new ALg();AT1(b,a);return b;}
function AT1(a,b){Dw(a,b,A6F);a.W=87;Ey(a,1);Bj(a,0.0,0.0,0.0,1.0,0.9375,1.0);FF(a,255);}
function WO(a,b,c,d,e){return Dy(c+0|0,d+0|0,e+0|0,c+1|0,d+1|0,e+1|0);}
function AOv(a){return 0;}
function AS6(a){return 0;}
function AZP(a,b,c){b=S(b,1);return !b&&c>0?a.W-1|0:b?2:a.W;}
function AHX(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(D(f,5))return;g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;a:while(true){if(g>h){if(!0){$p=1;continue _;}g=7;$p=2;continue _;}l=d;while(l<=i){m=j;if(m<=k)break a;l=l+1|0;}g=g+1|0;}$p=4;continue _;case 1:$z=AAd(b,c,d,e);if(C()){break _;}h=$z;if(h>0){g=h-1|0;$p=3;continue _;}g
=c-0|0;h=c+0|0;m=e-0|0;j=e+0|0;while(true){if(g>h){if(0)return;J();g=A4c.b;$p=5;continue _;}l=m;if(l<=j)break;g=g+1|0;}$p=6;continue _;case 2:AFw(b,c,d,e,g);if(C()){break _;}return;case 3:AFw(b,c,d,e,g);if(C()){break _;}return;case 4:$z=XG(b,g,l,m);if(C()){break _;}f=$z;if(f===A48)g=1;else{m=m+1|0;b:while(true){if(m<=k){continue _;}l=l+1|0;while(l>i){g=g+1|0;if(g>h)break b;l=d;}m=j;}g=0;}if(!g){$p=1;continue _;}g=7;$p=2;continue _;case 5:AJ9(b,c,d,e,g);if(C()){break _;}return;case 6:$z=Yc(b,g,i,l);if(C()){break _;}n
=$z;J();if(n==A6i.b)g=1;else{l=l+1|0;while(true){if(l<=j){continue _;}g=g+1|0;if(g>h)break;l=m;}g=0;}if(g)return;J();g=A4c.b;$p=5;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AFO(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(D(b.n,4))return;J();g=A4c.b;$p=1;case 1:AJ9(b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Ua(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d+1|0;$p=1;case 1:$z=XG(b,c,f,e);if(C()){break _;}g=$z;if(!g.c3())return;J();f=A4c.b;$p=2;case 2:AJ9(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function APS(a,b,c){J();return A4c.dq(0,c);}
function ABq(){DN.call(this);this.ui=0;}
function AVg(a,b){var c=new ABq();ANL(c,a,b);return c;}
function ANL(a,b,c){Dw(a,b,A6r);a.ui=c;a.W=45;}
function Ya(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJh(a,b,c,d,e);if(C()){break _;}f=e-1|0;$p=2;case 2:$z=Yc(b,c,d,f);if(C()){break _;}g=$z;f=e+1|0;$p=3;case 3:$z=Yc(b,c,d,f);if(C()){break _;}f=$z;h=c-1|0;$p=4;case 4:$z=Yc(b,h,d,e);if(C()){break _;}h=$z;i=c+1|0;$p=5;case 5:$z=Yc(b,i,d,e);if(C()){break _;}i=$z;j=3;J();if(A5S.data[g]&&!A5S.data[f])j
=3;if(A5S.data[f]&&!A5S.data[g])j=2;if(A5S.data[h]&&!A5S.data[i])j=5;if(A5S.data[i]&&!A5S.data[h])j=4;$p=6;case 6:AFw(b,c,d,e,j);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AFh(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1){J();return A4f.W;}if(!f){J();return A4f.W;}$p=1;case 1:$z=b.ea(c,d,e);if(C()){break _;}g=$z;return f!=g?a.W:!a.ui?a.W-1|0:a.W+16|0;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ZW(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.ui)return;$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.0+L(f)*6.0/16.0;j=e+0.5;k=L(f)*0.6000000238418579-0.30000001192092896;if(g==4){l=h-0.5199999809265137;m=i;n=j+k;BQ(b,B(250),l,m,n,0.0,0.0,0.0);BQ(b,B(251),
l,m,n,0.0,0.0,0.0);}else if(g==5){l=h+0.5199999809265137;m=i;n=j+k;BQ(b,B(250),l,m,n,0.0,0.0,0.0);BQ(b,B(251),l,m,n,0.0,0.0,0.0);}else if(g==2){l=h+k;m=i;n=j-0.5199999809265137;BQ(b,B(250),l,m,n,0.0,0.0,0.0);BQ(b,B(251),l,m,n,0.0,0.0,0.0);}else if(g==3){o=h+k;p=i;q=j+0.5199999809265137;BQ(b,B(250),o,p,q,0.0,0.0,0.0);BQ(b,B(251),o,p,q,0.0,0.0,0.0);}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AOu(a,b){if(b==1){J();b=A4f.b;}else if(!b){J();b=A4f.b;}else b=b!=3?a.W:a.W-1|0;return b;}
function ACc(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIe(b,c,d,e);if(C()){break _;}b=$z;g=b;$p=2;case 2:AJE(f,g);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AXH(a){return A0F();}
function RJ(){var a=this;DN.call(a);a.z0=null;a.Ad=0;}
function A6W(a,b,c){var d=new RJ();ACL(d,a,b,c);return d;}
function ACL(a,b,c,d){Dw(a,b,A6s);a.W=4;a.z0=c;Bj(a,0.25,0.0,0.25,0.75,1.625,0.75);a.Ad=d;}
function AQ5(a){return (-1);}
function AWg(a){return 0;}
function AWa(a){return 0;}
function ATe(a){var b,c,$$je;a:{try{b=Vn(a.z0);}catch($$e){$$je=Bf($$e);if($$je instanceof BB){b=$$je;break a;}else{throw $$e;}}return b;}c=new B5;S0(c,b);M(c);}
function AB8(a,b,c,d,e){return 1;}
function AX4(a,b,c){return a.Ad;}
function VN(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=Wo(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AAd(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Uk(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:AJ9(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function DF(){var a=this;E.call(a);a.bY=null;a.de=0;a.dc=0;a.dj=0;}
var A6X=null;var A6Y=null;function A6Z(){var a=new DF();AIc(a);return a;}
function AIc(a){return;}
function Ir(b,c){var d;if(!Dv(A6Y,c)){BK(A6X,c,b);BK(A6Y,b,c);return;}b=new Cq;d=new Ba;Y(d);Bl(b,N(H(H(d,B(255)),c)));M(b);}
function AA_(a){return;}
function AG8(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bY;c=a.de;d=a.dc;e=a.dj;$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,$p);}
function XX(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bY;c=a.de;d=a.dc;e=a.dj;$p=1;case 1:ABQ(b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AF0(a,b,c,d){var e,f,g;e=a.de+0.5-b;f=a.dc+0.5-c;g=a.dj+0.5-d;return e*e+f*f+g*g;}
function AAU(){A6X=CY();A6Y=CY();Ir(K(S3),B(256));Ir(K(P6),B(257));Ir(K(HQ),B(258));Ir(K(Lr),B(259));}
function HQ(){var a=this;DF.call(a);a.fM=null;a.pW=0;}
function A60(){var a=new HQ();ARY(a);return a;}
function ARY(a){var b,c;b=O(Cp,4);c=b.data;c[0]=B(3);c[1]=B(3);c[2]=B(3);c[3]=B(3);a.fM=b;a.pW=(-1);}
function W(){var a=this;E.call(a);a.cx=0;a.en=0;a.eG=0;a.rs=0;}
var A61=null;var A6w=null;var A62=null;var A63=null;var A64=null;var A65=null;var A66=null;var A67=null;var A5C=null;var A6S=null;var A6T=null;var A68=null;var A69=null;var A6$=null;var A6_=null;var A7a=null;var A7b=null;var A7c=null;var A7d=null;var A7e=null;var A7f=null;var A7g=null;var A7h=null;var A7i=null;var A7j=null;var A7k=null;var A7l=null;var A7m=null;var A7n=null;var A7o=null;var A7p=null;var A7q=null;var A7r=null;var A5E=null;var A5B=null;var A5D=null;var A7s=null;var A7t=null;var A7u=null;var A7v
=null;var A7w=null;var A6U=null;var A6V=null;var A7x=null;var A7y=null;var A7z=null;var A7A=null;var A7B=null;var A7C=null;var A7D=null;var A7E=null;var A7F=null;var A7G=null;var A7H=null;var A7I=null;var A7J=null;var A7K=null;var A7L=null;var A7M=null;var A7N=null;var A7O=null;var A7P=null;var A7Q=null;var A7R=null;var A6R=null;var A5F=null;var A7S=null;var A7T=null;var A7U=null;var A6v=null;var A7V=null;var A7W=null;var A7X=null;var A7Y=null;var A7Z=null;var A70=null;function Bw(){Bw=Bt(W);AXq();}
function Ee(a){var b=new W();C$(b,a);return b;}
function C$(a,b){var c,d,e;Bw();a.en=64;a.eG=32;c=256+b|0;a.cx=c;if(A6w.data[c]!==null){d=Ds();e=new Ba;Y(e);B9(d,N(Bb(H(e,B(260)),b)));}A6w.data[c]=a;}
function Bk(a,b){a.rs=b;return a;}
function AVT(a,b){return a.rs;}
function ABP(a,b,c,d,e,f,g,h){return 0;}
function AZq(a,b,c){return 1.0;}
function AMA(a,b,c,d){return b;}
function ATP(a){return a.en;}
function AXv(a){return a.eG;}
function APg(a,b,c){return;}
function AVu(a,b,c,d,e,f){return;}
function AZW(a,b){return 1;}
function AO_(a,b){return 0;}
function AUF(a,b,c){return;}
function AXq(){var b;A61=A1d();A6w=O(W,1024);A62=Bk(JY(0,2),82);A63=Bk(L3(1,2),98);A64=Bk(Lz(2,2),114);A65=Bk(A07(3),5);A66=Bk(Mk(4,4),10);A67=Bk(A0u(5),21);A5C=Bk(Ee(6),37);A6S=Bk(Ee(7),7);A6T=Bk(Ee(8),55);A68=Bk(Ee(9),23);A69=Bk(Ee(10),39);A6$=Bk(Lq(11,2),66);A6_=Bk(Lq(12,0),64);A7a=Bk(JY(13,0),80);A7b=Bk(L3(14,0),96);A7c=Bk(Lz(15,0),112);A7d=Bk(Lq(16,1),65);A7e=Bk(JY(17,1),81);A7f=Bk(L3(18,1),97);A7g=Bk(Lz(19,1),113);A7h=Bk(Lq(20,3),67);A7i=Bk(JY(21,3),83);A7j=Bk(L3(22,3),99);A7k=Bk(Lz(23,3),115);A7l=Bk(Ee(24),
53);A7m=Bk(Ee(25),71);A7n=Bk(A1$(26,10),72);A7o=Bk(Lq(27,0),68);A7p=Bk(JY(28,0),84);A7q=Bk(L3(29,0),100);A7r=Bk(Lz(30,0),116);A5E=Bk(Ee(31),8);A5B=Bk(Ee(32),24);A5D=Bk(Ee(33),40);A7s=Bk(Lo(34,0),128);A7t=Bk(Lo(35,1),129);A7u=Bk(Lo(36,2),130);A7v=Bk(Lo(37,3),131);A7w=Bk(Lo(38,4),132);b=new R$;J();AC0(b,39,A6i.b);A6U=Bk(b,9);A6V=Bk(Ee(40),25);A7x=Bk(Mk(41,5),41);A7y=Bk(CW(42,0,0,0),0);A7z=Bk(CW(43,0,0,1),16);A7A=Bk(CW(44,0,0,2),32);A7B=Bk(CW(45,0,0,3),48);A7C=Bk(CW(46,1,1,0),1);A7D=Bk(CW(47,1,1,1),17);A7E=Bk(CW(48,
1,1,2),33);A7F=Bk(CW(49,1,1,3),49);A7G=Bk(CW(50,2,2,0),2);A7H=Bk(CW(51,2,2,1),18);A7I=Bk(CW(52,2,2,2),34);A7J=Bk(CW(53,2,2,3),50);A7K=Bk(CW(54,3,3,0),3);A7L=Bk(CW(55,3,3,1),19);A7M=Bk(CW(56,3,3,2),35);A7N=Bk(CW(57,3,3,3),51);A7O=Bk(CW(58,1,4,0),4);A7P=Bk(CW(59,1,4,1),20);A7Q=Bk(CW(60,1,4,2),36);A7R=Bk(CW(61,1,4,3),52);A6R=Bk(Ee(62),6);A5F=Bk(Mk(63,3),87);A7S=Bk(Mk(64,8),88);A7T=Bk(A0s(65),26);A7U=Bk(Mk(66,42),11);A6v=Bk(A1T(67),42);A7V=Bk(AZ_(68),43);A7W=Bk(AKw(69,0),74);A7X=Bk(AKw(70,A5e.b),75);A7Y=Bk(AKw(71,
A5f.b),76);A7Z=Bk(A1u(72),135);A70=Bk(A2j(73),104);}
function ADE(){P.call(this);}
function A0p(a){var b=new ADE();ATy(b,a);return b;}
function ATy(a,b){Dw(a,b,A6s);a.W=97;Bj(a,0.0,0.0,0.0,1.0,1.0,1.0);}
function AZd(a,b,c){var d,e;if(b&&b!=1){d=M0(a,c);if((d&&d!=2?0:1)^(b>3?0:1))return a.W;b=((d/2|0)+(b&1^d)|0)+((c&4)/4|0)|0;e=a.W-((c&8)*2|0)|0;if(b&1)e= -e;return e;}return a.W;}
function ASB(a){return 0;}
function AP7(a){return 0;}
function ANH(a){return 7;}
function ABO(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACW(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Jr(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,$p);}
function Vw(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACW(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Lj(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,$p);}
function ACW(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ea(c,d,e);if(C()){break _;}c=$z;AJD(a,M0(a,c));return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AJD(a,b){Bj(a,0.0,0.0,0.0,1.0,2.0,1.0);if(!b)Bj(a,0.0,0.0,0.0,1.0,1.0,0.1875);if(b==1)Bj(a,0.8125,0.0,0.0,1.0,1.0,1.0);if(b==2)Bj(a,0.0,0.0,0.8125,1.0,1.0,1.0);if(b==3)Bj(a,0.0,0.0,0.0,0.1875,1.0,1.0);}
function AE0(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Zt(a,b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Zt(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;if(!(g&8)){h=d+1|0;$p=2;continue _;}d=d-1|0;$p=3;continue _;case 2:$z=Yc(b,c,h,e);if(C()){break _;}i=$z;if(i!=a.b){h=g^4;$p=4;continue _;}i=(g^4)+8|0;$p=5;continue _;case 3:$z=Yc(b,c,d,e);if(C()){break _;}h=$z;if(h!=a.b)return 1;$p=6;continue _;case 4:AFw(b,c,d,e,h);if(C())
{break _;}HS(b,c,d-1|0,e,c,d,e);if(BI()>=0.5)D1(b,c+0.5,d+0.5,e+0.5,B(261),1.0,L(b.n)*0.10000000149011612+0.8999999761581421);else D1(b,c+0.5,d+0.5,e+0.5,B(262),1.0,L(b.n)*0.10000000149011612+0.8999999761581421);return 1;case 5:AFw(b,c,h,e,i);if(C()){break _;}h=g^4;$p=4;continue _;case 6:Zt(a,b,c,d,e,f);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function Ye(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;if(g&8){f=d-1|0;$p=3;continue _;}h=0;f=d+1|0;$p=2;case 2:$z=Yc(b,c,f,e);if(C()){break _;}i=$z;if(i!=a.b){i=0;$p=4;continue _;}i=d-1|0;$p=6;continue _;case 3:$z=Yc(b,c,f,e);if(C()){break _;}f=$z;if(f==a.b)return;f=0;$p=5;continue _;case 4:AJ9(b,c,d,e,i);if(C()){break _;}h
=1;i=d-1|0;$p=6;continue _;case 5:AJ9(b,c,d,e,f);if(C()){break _;}return;case 6:$z=Wo(b,c,i,e);if(C()){break _;}i=$z;if(!i){i=0;$p=7;continue _;}if(!h)return;$p=10;continue _;case 7:AJ9(b,c,d,e,i);if(C()){break _;}h=1;$p=8;case 8:$z=Yc(b,c,f,e);if(C()){break _;}i=$z;if(i==a.b){i=0;$p=9;continue _;}if(!h)return;$p=10;continue _;case 9:AJ9(b,c,f,e,i);if(C()){break _;}if(!h)return;$p=10;case 10:Uk(a,b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AX3(a,b,c){if(b&8)b=0;else{Bw();b=A7V.cx;}return b;}
function TJ(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACW(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=IE(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function M0(a,b){return b&4?b&3:(b-1|0)&3;}
function AE5(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=127)return 0;d=d-1|0;$p=1;case 1:$z=Wo(b,c,d,e);if(C()){break _;}c=$z;return !c?0:1;default:Es();}}CM().s(a,b,c,d,e,$p);}
function YG(){P.call(this);}
function A1W(a,b){var c=new YG();AOp(c,a,b);return c;}
function AOp(a,b,c){CS(a,b,c,A6M);}
function YU(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bj(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bj(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bj(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bj(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Lj(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ZF(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bj(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bj(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bj(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bj(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Jr(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function APO(a){return 0;}
function AV7(a){return 0;}
function AYD(a){return 8;}
function AIA(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=Wo(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=Wo(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=Wo(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;e=e+1|0;$p=4;case 4:$z=Wo(b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Up(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;if(g&&f!=2){if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;continue _;}h=e+1|0;$p=2;case 2:$z=Wo(b,c,d,h);if(C()){break _;}h=$z;if(h)g=2;if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h
=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;case 3:$z=Wo(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;case 4:$z=Wo(b,h,d,e);if(C()){break _;}h=$z;if(h)g=4;if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;case 5:$z=Wo(b,f,d,e);if(C()){break _;}f=$z;if(f)g=5;$p=6;case 6:AFw(b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AFL(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;h=0;if(g==2){f=e+1|0;$p=2;continue _;}if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 2:$z=Wo(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if
(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 3:$z=Wo(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 4:$z=Wo(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 5:$z=Wo(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(h)return;$p=6;case 6:Uk(a,b,c,d,e,g);if(C()){break _;}f=0;$p=7;case 7:AJ9(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,$p);}
function AVO(a,b){return 1;}
function AID(){P.call(this);}
function A0V(a,b){var c=new AID();AZF(c,a,b);return c;}
function AZF(a,b,c){CS(a,b,c,A6M);Bj(a,0.0,0.0,0.0,1.0,0.125,1.0);}
function Yj(a,b,c,d,e){return null;}
function APy(a){return 0;}
function AGy(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHb(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=IE(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AHb(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ea(c,d,e);if(C()){break _;}f=$z;if(f>=2&&f<=5)Bj(a,0.0,0.0,0.0,1.0,0.625,1.0);else Bj(a,0.0,0.0,0.0,1.0,0.125,1.0);return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ATS(a,b,c){return c<6?a.W:a.W-16|0;}
function AUA(a){return 0;}
function ASm(a){return 9;}
function ATZ(a,b){return 1;}
function AIC(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=Wo(b,c,d,e);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AIm(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=15;$p=1;case 1:AFw(b,c,d,e,f);if(C()){break _;}g=new GU;$p=2;case 2:UQ(g,a,b,c,d,e);if(C()){break _;}$p=3;case 3:UP(g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AER(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAd(b,c,d,e);if(C()){break _;}g=$z;h=0;f=d-1|0;$p=2;case 2:$z=Wo(b,c,f,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==2){f=c+1|0;$p=3;continue _;}if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 3:$z=Wo(b,f,d,e);if(C()){break _;}f=$z;if
(!f)h=1;if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 4:$z=Wo(b,f,d,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 5:$z=Wo(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 6:$z=Wo(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(!h)return;$p=7;case 7:$z=AAd(b,c,d,e);if(C()){break _;}f
=$z;$p=8;case 8:Uk(a,b,c,d,e,f);if(C()){break _;}f=0;$p=9;case 9:AJ9(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AMR(){W.call(this);this.mB=0;}
function A0k(a){var b=new AMR();AT2(b,a);return b;}
function AT2(a,b){C$(a,b);b=b+256|0;a.mB=b;J();a.rs=A3_.data[b].bZ(2);}
function AKV(a,b,c,d,e,f,g,h){var i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;if(!b.m)return 0;i=a.mB;j=0;$p=1;case 1:$z=ADk(d,i,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;J();k=A3_.data[a.mB];j=a.mB;$p=2;case 2:$z=AJ9(d,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;c=A3_.data[a.mB];$p
=3;case 3:c.s5(d,e,f,g,h);if(C()){break _;}D1(d,e+0.5,f+0.5,g+0.5,II(k.f0),(k.f0.np+1.0)/2.0,k.f0.of*0.800000011920929);b.m=b.m-1|0;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Lf(){Kl.call(this);}
function HX(a){var b,c;if(a.Z<a.cb){b=a.Z;a.Z=b+1|0;return OQ(a,b);}c=new E4;Q(c);M(c);}
function Cu(a,b){var c,d;if(AFs(a)){c=new E8;Q(c);M(c);}if(a.Z<a.cb){d=a.Z;a.Z=d+1|0;Zr(a,d,b);return a;}c=new F_;Q(c);M(c);}
function AFs(a){return a.u9;}
function SS(){var a=this;Lf.call(a);a.u9=0;a.vT=0;a.u4=null;}
function OQ(a,b){return a.u4.data[b+a.vT|0];}
function Zr(a,b,c){a.u4.data[b+a.vT|0]=c;}
function AX1(a){return a.u9;}
function ACY(){KV.call(this);}
function AS_(){var a=new ACY();ATk(a);return a;}
function ATk(a){var b,c,d,e;b=O(Cp,0);c=b.data;O9(B(18));d=c.length;e=0;while(e<d){O9(c[e]);e=e+1|0;}a.ue=B(18);a.DY=b.nu();}
function AAX(a){var b;b=new Or;b.kd=B(263);b.lG=A71;b.pU=A71;b.DR=a;b.yS=0.3333333432674408;b.Ck=0.5;return b;}
function ACm(a){var b,c,d,e,f;b=new Ne;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.tk=A71;b.sM=A71;e=d.length;if(e&&e>=b.yM){b.Dw=a;b.sC=c.nu();b.CL=2.0;b.yM=4.0;return b;}f=new Cq;Bl(f,B(264));M(f);}
function K5(){var a=this;EC.call(a);a.dC=0;a.b4=null;a.jL=null;}
function AHp(b,c,d){return AVU(0,b.data.length,b,c,c+d|0,0,0);}
function Wf(b){return AHp(b,0,b.data.length);}
function AFj(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BP;i=new Ba;Y(i);Bl(h,N(Bb(H(Bb(H(i,B(265)),g),B(240)),f)));M(h);}if(Ce(a)<d){i=new E4;Q(i);M(i);}if(d<0){i=new BP;h=new Ba;Y(h);Bl(i,N(H(Bb(H(h,B(241)),d),B(242))));M(i);}g=a.Z+a.dC|0;j=0;while(j<d){k=c+1|0;b=a.b4.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.Z=a.Z+d|0;return a;}}b=b.data;h=new BP;i=new Ba;Y(i);Bl(h,N(H(Bb(H(Bb(H(i,B(243)),c),B(236)),b.length),B(21))));M(h);}
function S4(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.lz){e=new E8;Q(e);M(e);}if(Ce(a)<d){e=new F_;Q(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BP;i=new Ba;Y(i);Bl(e,N(Bb(H(Bb(H(i,B(266)),h),B(240)),g)));M(e);}if(d<0){e=new BP;i=new Ba;Y(i);Bl(e,N(H(Bb(H(i,B(241)),d),B(242))));M(e);}h=a.Z+a.dC|0;j=0;while(j<d){b=a.b4.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.Z=a.Z+d|0;return a;}}b=b.data;i=new BP;e=new Ba;Y(e);Bl(i,N(H(Bb(H(Bb(H(e,B(243)),c),B(236)),b.length),B(21))));M(i);}
function Q7(a,b){return S4(a,b,0,b.data.length);}
function AYB(a,b){a.jL=b;return a;}
function ANO(a){D3(a);return a;}
function AVJ(a,b){Lk(a,b);return a;}
function ASx(a,b){D_(a,b);return a;}
function ALH(){var a=this;K5.call(a);a.Cw=0;a.lz=0;}
function AVU(a,b,c,d,e,f,g){var h=new ALH();ANm(h,a,b,c,d,e,f,g);return h;}
function ANm(a,b,c,d,e,f,g,h){Jc(a,c);a.jL=A5p;a.dC=b;a.b4=d;a.Z=e;a.cb=f;a.Cw=g;a.lz=h;}
function AGH(a){var b,c,d,e;if(a.Z>=a.cb){b=new E4;Q(b);M(b);}c=a.b4.data;d=a.dC;e=a.Z;a.Z=e+1|0;return c[d+e|0];}
function ASX(a){return a.lz;}
function Je(a,b){var c,d,e,f,g,h;if(b>=0&&(b+3|0)<a.cb){c=a.b4.data[a.dC+b|0]&255;d=a.b4.data[(a.dC+b|0)+1|0]&255;e=a.b4.data[(a.dC+b|0)+2|0]&255;f=a.b4.data[(a.dC+b|0)+3|0]&255;if(a.jL!==A5p)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BP;h=new Ba;Y(h);Bl(g,N(H(Bb(H(Bb(H(h,B(267)),b),B(236)),a.cb-3|0),B(21))));M(g);}
function WQ(a,b,c){var d,e;if(a.lz){d=new E8;Q(d);M(d);}if(b>=0&&(b+3|0)<a.cb){if(a.jL!==A5p){a.b4.data[a.dC+b|0]=c<<24>>24;a.b4.data[(a.dC+b|0)+1|0]=c>>8<<24>>24;a.b4.data[(a.dC+b|0)+2|0]=c>>16<<24>>24;a.b4.data[(a.dC+b|0)+3|0]=c>>24<<24>>24;}else{a.b4.data[a.dC+b|0]=c>>24<<24>>24;a.b4.data[(a.dC+b|0)+1|0]=c>>16<<24>>24;a.b4.data[(a.dC+b|0)+2|0]=c>>8<<24>>24;a.b4.data[(a.dC+b|0)+3|0]=c<<24>>24;}return a;}e=new BP;d=new Ba;Y(d);Bl(e,N(H(Bb(H(Bb(H(d,B(267)),b),B(236)),a.cb-3|0),B(21))));M(e);}
function AC1(a){var b,c;b=Ce(a)/4|0;if(a.jL!==A5p){c=new MR;Mr(c,a.dC+a.Z|0,b,a,0,b,a.lz);return c;}c=new R0;Mr(c,a.dC+a.Z|0,b,a,0,b,a.lz);return c;}
function RI(){}
function J9(){EC.call(this);}
function ACD(b){var c,d;if(b>=0)return ARJ(0,b,$rt_createCharArray(b),0,b,0);c=new Cq;d=new Ba;Y(d);Bl(c,N(Bb(H(d,B(268)),b)));M(c);}
function AHN(b,c,d){return ARJ(0,b.data.length,b,c,c+d|0,0);}
function MF(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BP;i=new Ba;Y(i);Bl(h,N(Bb(H(Bb(H(i,B(269)),g),B(240)),f)));M(h);}if(Ce(a)<d){h=new E4;Q(h);M(h);}if(d<0){h=new BP;i=new Ba;Y(i);Bl(h,N(H(Bb(H(i,B(241)),d),B(242))));M(h);}g=a.Z;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=AJp(a,g);j=j+1|0;c=k;g=f;}a.Z=a.Z+d|0;return a;}}b=b.data;i=new BP;h=new Ba;Y(h);Bl(i,N(H(Bb(H(Bb(H(h,B(243)),c),B(236)),b.length),B(21))));M(i);}
function AAi(a,b){return MF(a,b,0,b.data.length);}
function AMH(a,b,c,d){var e,f,g,h,i,j,k;if(Tt(a)){e=new E8;Q(e);M(e);}if(Ce(a)<d){e=new F_;Q(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BP;i=new Ba;Y(i);Bl(e,N(Bb(H(Bb(H(i,B(270)),h),B(240)),g)));M(e);}if(d<0){e=new BP;i=new Ba;Y(i);Bl(e,N(H(Bb(H(i,B(241)),d),B(242))));M(e);}h=a.Z;j=0;while(j<d){k=h+1|0;g=c+1|0;RL(a,h,f[c]);j=j+1|0;h=k;c=g;}a.Z=a.Z+d|0;return a;}}b=b.data;i=new BP;e=new Ba;Y(e);Bl(i,N(H(Bb(H(Bb(H(e,B(243)),c),B(236)),b.length),B(21))));M(i);}
function AEj(a,b,c,d){var e,f,g,h,i,j;if(Tt(a)){b=new E8;Q(b);M(b);}e=d-c|0;if(Ce(a)<e){b=new F_;Q(b);M(b);}if(c>=0&&c<BE(b)){if(d>BE(b)){f=new BP;g=new Ba;Y(g);Bl(f,N(Bb(H(Bb(H(g,B(270)),d),B(271)),BE(b))));M(f);}if(c>d){b=new BP;f=new Ba;Y(f);Bl(b,N(Bb(H(Bb(H(f,B(272)),c),B(273)),d)));M(b);}h=a.Z;while(c<d){i=h+1|0;j=c+1|0;RL(a,h,Cr(b,c));h=i;c=j;}a.Z=a.Z+e|0;return a;}g=new BP;f=new Ba;Y(f);Bl(g,N(H(Bb(H(Bb(H(f,B(272)),c),B(236)),BE(b)),B(21))));M(g);}
function Li(a,b){return AEj(a,b,0,BE(b));}
function AEE(a){return 1;}
function AJX(a){return a.k6;}
function AQW(a){FE(a);return a;}
function AQA(a,b){D_(a,b);return a;}
function Nr(){BU.call(this);}
function A72(){var a=new Nr();AYk(a);return a;}
function AYk(a){Q(a);}
function L9(){BZ.call(this);}
function A73(){var a=new L9();ART(a);return a;}
function ART(a){return;}
function AVk(a){return 0;}
function AVS(a){return 0;}
function ANq(a){return 0;}
function Kd(){BZ.call(this);}
function A74(){var a=new Kd();ANp(a);return a;}
function ANp(a){return;}
function AZ4(a){return 1;}
function ARk(a){return 0;}
function LU(){BZ.call(this);}
function A75(){var a=new LU();AXi(a);return a;}
function AXi(a){return;}
function AWQ(a){return 0;}
function AYY(a){return 0;}
function AOx(a){return 0;}
function Fm(){var a=this;W.call(a);a.sQ=null;a.v9=0.0;a.xV=0;a.Fb=0;}
function A76(a,b,c,d){var e=new Fm();Ku(e,a,b,c,d);return e;}
function Ku(a,b,c,d,e){C$(a,b);a.v9=4.0;a.Fb=d;a.sQ=e;a.en=1;a.eG=32<<d;if(d==3)a.eG=a.eG*2|0;a.v9=(d+1|0)*2|0;a.xV=c+d|0;}
function AYe(a,b,c){var d;d=0;while(d<a.sQ.data.length){if(a.sQ.data[d]===c)return a.v9;d=d+1|0;}return 1.0;}
function AWY(a,b,c){EY(b,2);}
function APu(a,b,c,d,e,f){EY(b,1);}
function APW(a,b){return a.xV;}
function MA(){Fm.call(this);}
var A77=null;function A1J(){A1J=Bt(MA);AYq();}
function JY(a,b){var c=new MA();ABd(c,a,b);return c;}
function ABd(a,b,c){A1J();Ku(a,b,1,c,A77);}
function AYq(){var b,c;b=O(P,4);c=b.data;J();c[0]=A4b;c[1]=A4c;c[2]=A4w;c[3]=A4x;A77=b;}
function RM(){Fm.call(this);this.mm=0;}
var A78=null;function A1L(){A1L=Bt(RM);ATf();}
function L3(a,b){var c=new RM();AIw(c,a,b);return c;}
function AIw(a,b,c){A1L();Ku(a,b,2,c,A78);a.mm=c;}
function AVH(a,b){J();return b===A4H?(a.mm!=3?0:1):b!==A6g&&b!==A6f?(b!==A4E&&b!==A4C?(b!==A4D&&b!==A4B?(b.bR===A6r?1:b.bR!==A6G?0:1):a.mm<1?0:1):a.mm<2?0:1):a.mm<2?0:1;}
function ATf(){var b,c;b=O(P,12);c=b.data;J();c[0]=A4j;c[1]=A4d;c[2]=A4e;c[3]=A4f;c[4]=A4q;c[5]=A4B;c[6]=A4D;c[7]=A4A;c[8]=A4E;c[9]=A4C;c[10]=A6f;c[11]=A6g;A78=b;}
function SB(){Fm.call(this);}
var A79=null;function A1q(){A1q=Bt(SB);ANW();}
function Lz(a,b){var c=new SB();AIl(c,a,b);return c;}
function AIl(a,b,c){A1q();Ku(a,b,3,c,A79);}
function ANW(){var b,c;b=O(P,4);c=b.data;J();c[0]=A4l;c[1]=A4F;c[2]=A4m;c[3]=A6d;A79=b;}
function AAt(){W.call(this);}
function A07(a){var b=new AAt();AQR(b,a);return b;}
function AQR(a,b){C$(a,b);a.en=1;a.eG=64;}
function AEL(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;$p=1;case 1:$z=Yc(d,e,f,g);if(C()){break _;}i=$z;if(i){EY(b,1);return 1;}j=e+0.5;k=f+0.5;l=g+0.5;Bw();D1(d,j,k,l,B(274),1.0,L(A61)*0.4000000059604645+0.800000011920929);J();h=A5H.b;$p=
2;case 2:AJ9(d,e,f,g,h);if(C()){break _;}EY(b,1);return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function J2(){W.call(this);this.xj=0;}
function Mk(a,b){var c=new J2();VR(c,a,b);return c;}
function VR(a,b,c){C$(a,b);a.xj=c;a.en=1;}
function Nu(a,b,c,d){b.m=b.m-1|0;Q$(d,a.xj);return b;}
function AJv(){W.call(this);}
function A0u(a){var b=new AJv();ATI(b,a);return b;}
function ATI(a,b){C$(a,b);a.en=1;}
function ABX(a,b,c,d){var e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.F;Bw();if(!AB$(e,A5C.cx))return b;C2(c,d,B(219),1.0,1.0/(L(A61)*0.4000000059604645+0.800000011920929));e=ANf(c,d);$p=1;case 1:AIX(c,e);if(C()){break _;}return b;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AF9(){W.call(this);this.xp=0;}
function Lq(a,b){var c=new AF9();AZs(c,a,b);return c;}
function AZs(a,b,c){C$(a,b);a.en=1;a.eG=32<<c;a.xp=4+(c*2|0)|0;}
function ASl(a,b,c){return 1.5;}
function AXy(a,b,c){EY(b,1);}
function AQB(a,b,c,d,e,f){EY(b,2);}
function ATR(a,b){return a.xp;}
function AIS(){J2.call(this);}
function A1$(a,b){var c=new AIS();AT_(c,a,b);return c;}
function AT_(a,b,c){VR(a,b,c);}
function AJ8(a,b,c,d){Nu(a,b,c,d);b=new B6;Bw();Dg(b,A7m);return b;}
function AIf(){W.call(this);}
function Lo(a,b){var c=new AIf();ANG(c,a,b);return c;}
function ANG(a,b,c){C$(a,b);a.en=1;a.eG=32<<c;}
function ALi(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Yc(d,e,f,g);if(C()){break _;}i=$z;h=f+1|0;$p=2;case 2:a:{$z=XG(d,e,h,g);if(C()){break _;}j=$z;if(!j.c3()){J();if(i==A4b.b)break a;}J();if(i!=A4c.b)return 0;}J();k=A6j;l=e;m=
l+0.5;n=f;o=n+0.5;p=g;D1(d,m,o,p+0.5,II(k.f0),(k.f0.np+1.0)/2.0,k.f0.of*0.800000011920929);h=k.b;$p=3;case 3:AJ9(d,e,f,g,h);if(C()){break _;}EY(b,1);if(!D(d.n,8)&&i==A4b.b){q=1;r=0;m=n+1.2000000476837158;if(r<q){s=L(d.n)*0.699999988079071+0.15000000596046448;n=L(d.n)*0.699999988079071+0.15000000596046448;t=new Er;o=l+s;u=p+n;c=new B6;Bw();Dg(c,A6U);Ga(t,d,o,m,u,c);t.gt=10;$p=4;continue _;}}return 1;case 4:AIX(d,t);if(C()){break _;}r=r+1|0;if(r>=q)return 1;s=L(d.n)*0.699999988079071+0.15000000596046448;n=L(d.n)
*0.699999988079071+0.15000000596046448;t=new Er;o=l+s;u=p+n;c=new B6;Bw();Dg(c,A6U);Ga(t,d,o,m,u,c);t.gt=10;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function R$(){W.call(this);this.w_=0;}
function A7$(a,b){var c=new R$();AC0(c,a,b);return c;}
function AC0(a,b,c){C$(a,b);a.w_=c;}
function AAO(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;$p=1;case 1:$z=Yc(d,e,f,g);if(C()){break _;}i=$z;J();if(i!=A6j.b)return 0;f=f+1|0;h=a.w_;$p=2;case 2:AJ9(d,e,f,g,h);if(C()){break _;}b.m=b.m-1|0;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function Ff(){var a=this;W.call(a);a.D0=0;a.xi=0;a.wC=0;a.yD=0;}
var A7_=null;var A8a=null;function CW(a,b,c,d){var e=new Ff();W$(e,a,b,c,d);return e;}
function W$(a,b,c,d,e){C$(a,b);a.D0=c;a.xi=e;a.yD=d;a.wC=A7_.data[e];a.eG=(A8a.data[e]*3|0)<<c;a.en=1;}
function AL4(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;A7_=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;A8a=b;}
function TX(){W.call(this);}
function A0s(a){var b=new TX();ARn(b,a);return b;}
function ARn(a,b){C$(a,b);a.eG=64;}
function XV(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)return 0;if(h==1)return 0;i=0;if(h==4)i=1;if(h==3)i=2;if(h==5)i=3;j=new Hj;EQ(j,d);j.pP=0;j.dd=0;j.cF=0.0;Dx(j,0.5,0.5);j.l$=e;j.A8=f;j.me=g;c=Ck();k=A8b.nu().data;e=k.length;f=0;if(f<e){l=k[f];j.dl=l;If(j,i);$p=1;continue _;}if(c.p>0)j.dl=Bc(c,D(j.l,c.p));If(j,i);$p=2;continue _;case 1:$z
=VF(j);if(C()){break _;}g=$z;if(g)U(c,l);f=f+1|0;if(f<e){l=k[f];j.dl=l;If(j,i);continue _;}if(c.p>0)j.dl=Bc(c,D(j.l,c.p));If(j,i);$p=2;case 2:$z=VF(j);if(C()){break _;}e=$z;if(!e)return 1;$p=3;case 3:AIX(d,j);if(C()){break _;}b.m=b.m-1|0;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ACJ(){W.call(this);}
function A1T(a){var b=new ACJ();AXo(b,a);return b;}
function AXo(a,b){C$(a,b);a.eG=64;a.en=1;}
function Ug(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;J();i=A6m;$p=1;case 1:$z=i.fh(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;h=A6m.b;$p=2;case 2:AJ9(d,e,f,g,h);if(C()){break _;}h=I((c.q+180.0)*16.0/360.0-0.5)&15;$p=3;case 3:AFw(d,e,f,g,h);if(C()){break _;}b.m=b.m-1|0;$p=4;case 4:$z=AIe(d,e,f,g);if(C()){break _;}b=$z;b=b;$p=5;case 5:AEc(c,b);if
(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AEh(){W.call(this);}
function AZ_(a){var b=new AEh();AUf(b,a);return b;}
function AUf(a,b){C$(a,b);a.eG=64;a.en=1;}
function ZJ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;J();i=A6n;$p=1;case 1:$z=i.fh(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;j=I((c.q+180.0)*4.0/360.0-0.5)&3;k=0;l=0;if(!j)l=1;if(j==1)k=(-1);if(j==2)l=(-1);if(j==3)k=1;m=e-k|0;n=g-l|0;$p=2;case 2:$z
=Wo(d,m,f,n);if(C()){break _;}h=$z;h=!h?0:1;o=f+1|0;$p=3;case 3:$z=Wo(d,m,o,n);if(C()){break _;}p=$z;p=h+(!p?0:1)|0;h=e+k|0;k=g+l|0;$p=4;case 4:$z=Wo(d,h,f,k);if(C()){break _;}l=$z;l=!l?0:1;$p=5;case 5:$z=Wo(d,h,o,k);if(C()){break _;}q=$z;q=l+(!q?0:1)|0;$p=6;case 6:$z=Yc(d,m,f,n);if(C()){break _;}l=$z;if(l!=A6n.b){$p=7;continue _;}n=1;$p=8;continue _;case 7:$z=Yc(d,m,o,n);if(C()){break _;}m=$z;n=m==A6n.b?1:0;$p=8;case 8:$z=Yc(d,h,f,k);if(C()){break _;}l=$z;if(l!=A6n.b){$p=9;continue _;}r=0;if(n&&!1)r=1;else if
(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=A6n.b;$p=10;continue _;case 9:$z=Yc(d,h,o,k);if(C()){break _;}h=$z;m=h==A6n.b?1:0;r=0;if(n&&!m)r=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=A6n.b;$p=10;case 10:AJ9(d,e,f,g,h);if(C()){break _;}$p=11;case 11:AFw(d,e,f,g,j);if(C()){break _;}f=A6n.b;$p=12;case 12:AJ9(d,e,o,g,f);if(C()){break _;}f=j+8|0;$p=13;case 13:AFw(d,e,o,g,f);if(C()){break _;}b.m=b.m-1|0;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AL6(){W.call(this);this.nY=0;}
function AKw(a,b){var c=new AL6();AR_(c,a,b);return c;}
function AR_(a,b,c){C$(a,b);a.en=1;a.eG=64;a.nY=c;}
function ADa(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.P+(d.E-d.P)*1.0;f=d.K+(d.q-d.K)*1.0;g=BS(d.bH+(d.c-d.bH)*1.0,d.ct+(d.j-d.ct)*1.0,d.bG+(d.d-d.bG)*1.0);h= -f*0.01745329238474369-3.1415927410125732;i=Bx(h);h=Bm(h);j= -e*0.01745329238474369;k= -Bx(j);l=C3(g,h*k*5.0,Bm(j)
*5.0,i*k*5.0);m=a.nY?0:1;$p=1;case 1:$z=AAv(c,g,l,m);if(C()){break _;}n=$z;if(n===null)return b;if(n.j6)return b;m=n.hj;o=n.hk;p=n.hl;if(!a.nY){$p=2;continue _;}if(!n.gX)o=o+(-1)|0;if(n.gX==1)o=o+1|0;if(n.gX==2)p=p+(-1)|0;if(n.gX==3)p=p+1|0;if(n.gX==4)m=m+(-1)|0;if(n.gX==5)m=m+1|0;$p=8;continue _;case 2:$z=XG(c,m,o,p);if(C()){break _;}g=$z;if(g!==A48){$p=3;continue _;}$p=4;continue _;case 3:$z=XG(c,m,o,p);if(C()){break _;}d=$z;if(d!==A49)return b;$p=5;continue _;case 4:$z=AAd(c,m,o,p);if(C()){break _;}q=$z;if
(q){$p=3;continue _;}q=0;$p=6;continue _;case 5:$z=AAd(c,m,o,p);if(C()){break _;}q=$z;if(q)return b;q=0;$p=7;continue _;case 6:AJ9(c,m,o,p,q);if(C()){break _;}b=new B6;Bw();Dg(b,A7X);return b;case 7:AJ9(c,m,o,p,q);if(C()){break _;}b=new B6;Bw();Dg(b,A7Y);return b;case 8:$z=Yc(c,m,o,p);if(C()){break _;}q=$z;if(q){$p=10;continue _;}q=a.nY;r=0;$p=9;case 9:AD2(c,m,o,p,q,r);if(C()){break _;}b=new B6;Bw();Dg(b,A7W);return b;case 10:$z=XG(c,m,o,p);if(C()){break _;}d=$z;if(d.c3())return b;q=a.nY;r=0;$p=9;continue _;default:
Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AJK(){W.call(this);}
function A1u(a){var b=new AJK();APX(b,a);return b;}
function APX(a,b){C$(a,b);a.en=1;}
function YL(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Yc(d,e,f,g);if(C()){break _;}i=$z;J();if(i!=A6o.b)return 0;c=new Fs;j=e+0.5;k=f+0.5;l=g+0.5;EQ(c,d);c.yt=O(B6,36);c.hV=0;c.jB=0;c.nn=1;c.jM=0;c.lp=1;Dx(c,0.9800000190734863,0.699999988079071);c.cF=c.ef/2.0;c.h_=0;CC(c,j,k+c.cF,l);c.f=0.0;c.h=0.0;c.g=0.0;c.bH=j;c.ct=k;c.bG=
l;$p=2;case 2:AIX(d,c);if(C()){break _;}b.m=b.m-1|0;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ALA(){W.call(this);}
function A2j(a){var b=new ALA();APz(b,a);return b;}
function APz(a,b){C$(a,b);a.en=1;a.eG=64;}
function ABV(a,b,c){var d;if(c instanceof Hg){d=c;if(!d.oY){d.oY=1;b.m=b.m-1|0;}}}
function APq(a,b,c){ABV(a,b,c);}
function LP(){}
function ABG(){var a=this;E.call(a);a.dx=Long_ZERO;a.ej=Long_ZERO;}
function AYP(){var a=new ABG();AR$(a);return a;}
function AR$(a){a.dx=Long_fromInt(1);a.ej=Long_ZERO;}
function AM8(a,b){a.dx=Long_and(b,Long_fromInt(65535));a.ej=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function ARA(a){a.dx=Long_fromInt(1);a.ej=Long_ZERO;}
function ANS(a){return Long_or(Long_shl(a.ej,16),a.dx);}
function AXN(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.dx=Long_add(a.dx,Long_fromInt(b[c]&255));a.ej=Long_add(a.ej,a.dx);a.dx=Long_rem(a.dx,Long_fromInt(65521));a.ej=Long_rem(a.ej,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.dx;d=c+1|0;a.dx=Long_add(j,Long_fromInt(i[c]&255));a.ej=Long_add(a.ej,a.dx);h=e;c=d;}a.dx=Long_rem(a.dx,Long_fromInt(65521));a.ej=Long_rem(a.ej,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.dx;e=c+1|0;a.dx=Long_add(j,Long_fromInt(i[c]&255));a.ej=Long_add(a.ej,a.dx);f=d;c=e;}a.dx=Long_rem(a.dx,Long_fromInt(65521));a.ej=Long_rem(a.ej,Long_fromInt(65521));}
function Pm(){BB.call(this);}
function A8c(){var a=new Pm();AWD(a);return a;}
function AWD(a){Q(a);}
function Ll(){E.call(this);this.CO=null;}
var A5p=null;var A8d=null;function AOV(a){var b=new Ll();ADg(b,a);return b;}
function ADg(a,b){a.CO=b;}
function AME(){A5p=AOV(B(275));A8d=AOV(B(276));}
function Iu(){}
function JZ(){var a=this;E.call(a);a.fA=null;a.et=null;}
function AVo(a,b){var c,d;if(a===b)return 1;if(!Pt(b,Iu))return 0;a:{b:{c:{c=b;if(a.fA===null){if(c.fA!==null)break c;}else if(!a.fA.dQ(c.fA))break c;if(a.et===null){if(c.et!==null)break c;break b;}if(a.et.dQ(c.et))break b;}d=0;break a;}d=1;}return d;}
function APN(a){return a.fA;}
function ATA(a){return a.et;}
function ATm(a){return (a.fA===null?0:a.fA.eK())^(a.et===null?0:a.et.eK());}
function Hi(){var a=this;JZ.call(a);a.om=0;a.d7=null;}
function BP(){B5.call(this);}
function A8e(){var a=new BP();AOc(a);return a;}
function AOc(a){Q(a);}
function Mg(){BP.call(this);}
function A8f(){var a=new Mg();ASF(a);return a;}
function ASF(a){Q(a);}
function FL(){}
function SE(){E.call(this);this.xe=null;}
function AD7(a){var b,c,d,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.xe;try{A4K=A4K+1|0;EL(b);$p=1;continue _;}catch($$e){$$je=Bf($$e);c=$$je;}d=b.lB;$p=2;continue _;case 1:a:{try{b.js();if(C()){break _;}}catch($$e){$$je=Bf($$e);c=$$je;break a;}c=b.lB;$p=3;continue _;}d=b.lB;$p=2;case 2:ZC(d);if(C()){break _;}a:{try{Tl(b.lB);LH(d);break a;}catch($$e){$$je=Bf($$e);b=$$je;}LH(d);M(b);}b.ul=0;A4K=A4K-1|0;EL(A4I);M(c);case 3:ZC(c);if(C())
{break _;}a:{try{Tl(b.lB);LH(c);break a;}catch($$e){$$je=Bf($$e);b=$$je;}LH(c);M(b);}b.ul=0;A4K=A4K-1|0;EL(A4I);return;default:Es();}}CM().s(a,b,c,d,$p);}
function EU(){BU.call(this);}
function A8g(){var a=new EU();APU(a);return a;}
function APU(a){Q(a);}
function Eb(){var a=this;E.call(a);a.g4=null;a.tl=0.0;a.tm=0.0;}
function F5(a,b,c,d,e){var f=new Eb();AMY(f,a,b,c,d,e);return f;}
function AMY(a,b,c,d,e,f){a.g4=SC(b,c,d);a.tl=e;a.tm=f;}
function HJ(a,b,c){var d;d=new Eb;d.g4=a.g4;d.tl=b;d.tm=c;return d;}
function EN(){var a=this;E.call(a);a.gO=null;a.Bp=0;}
function A8h(a,b,c,d,e){var f=new EN();Ge(f,a,b,c,d,e);return f;}
function Ge(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.Bp=0;a.gO=b;a.Bp=g.length;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=HJ(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=HJ(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=HJ(h,k,l);g[3]=HJ(g[3],i,l);}
function Yz(a){var b,c,d;b=O(Eb,a.gO.data.length);c=b.data;d=0;while(d<a.gO.data.length){c[d]=a.gO.data[(a.gO.data.length-d|0)-1|0];d=d+1|0;}a.gO=b;}
function AKe(a,b,c){var d,e,f,g;d=Nw(a.gO.data[1].g4,a.gO.data[0].g4);e=Cs(Xy(Nw(a.gO.data[1].g4,a.gO.data[2].g4),d));Bu(b);B_(e.t,e.v,e.s);f=0;while(f<4){g=a.gO.data[f];F(b,g.g4.t*c,g.g4.v*c,g.g4.s*c,g.tl,g.tm);f=f+1|0;}Bn(b);}
function JX(){var a=this;E.call(a);a.bF=0;a.m9=0;a.qa=Long_ZERO;a.bp=Long_ZERO;a.nf=0;a.du=0;a.vu=0;a.hE=null;a.B=null;a.ec=0;a.hK=0;a.vj=null;a.ck=null;a.fl=null;}
var A8i=null;function AA$(a){var b;if(a.B===null)return (-2);b=a.B;a.B.ma=Long_ZERO;b.D=Long_ZERO;a.B.bQ=null;a.bF=14;a.hK=(-1);H8(a.hE);return 0;}
function ABf(a){if(a.hE!==null)PS(a.hE);return 0;}
function TF(a,b){var c,d,e,f;a.B.bQ=null;a.hE=null;a.du=0;if(b<0)b= -b;else if(b&1073741824){a.du=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.du=4;b=b&15;}else{a.du=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.hE!==null&&a.vu!=b){PS(a.hE);a.hE=null;}a.vu=b;c=new I5;d=a.B;b=1<<b;c.qx=$rt_createIntArray(1);c.ne=$rt_createIntArray(1);c.lL=$rt_createIntArray(1);c.lI=$rt_createIntArray(1);c.tA=O($rt_arraycls($rt_intcls()),1);c.tB=O($rt_arraycls($rt_intcls()),1);c.s3=$rt_createIntArray(1);c.s$=$rt_createIntArray(1);c.uO
=A0C();c.u=d;e=new JQ;f=c.u;e.j0=0;e.Y=f;e.z=c;c.oc=e;c.jm=$rt_createIntArray(4320);c.cB=$rt_createByteArray(b);c.cr=b;c.pE=d.iA.du?1:0;c.df=0;H8(c);a.hE=c;AA$(a);return 0;}ABf(a);return (-2);}
function ABZ(a,b){var c,d,e,f,g,h,i,$$je;if(a.B!==null&&a.B.bW!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bF){case 6:a.bF=13;a.B.bQ=B(277);a.nf=0;return (-2);case 7:d=Vm(a.hE,d);if(d==(-3)){a.bF=13;a.nf=0;continue i;}if(!d)d=c;if(d!=1)break i;a.qa=a.B.fv.v6();H8(a.hE);if(!a.du){a.bF=12;d=c;continue i;}a.bF=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=Fi(a,2,d,c);}catch($$e){$$je=Bf($$e);if($$je instanceof Du)
{e=$$je;return e.gV;}else{throw $$e;}}a.ec=a.bp.lo&65535;if((a.ec&255)!=8){a.B.bQ=B(278);a.bF=13;continue i;}if(a.ec&57344){a.B.bQ=B(279);a.bF=13;continue i;}if(a.ec&512)G5(a,2,a.bp);a.bF=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.B.I)return d;e=a.B;e.I=e.I
-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bF=9;d=c;}if(!a.B.I)return d;e=a.B;e.I=e.I-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bF=10;d=c;}if(!a.B.I)return d;e=a.B;e.I=e.I-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bF=11;d=c;}if(!a.B.I)return d;e=a.B;e.I=e.I-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.ec)a.bp=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bp,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bp,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bp,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bp,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.qa.lo!=
a.bp.lo)a.B.bQ=B(280);else if(a.ec&&a.ck!==null)a.ck.Dx=a.bp;a.bF=15;d=c;}if(!(a.du&&a.ec)){if(a.B.bQ===null)break f;if(!DU(a.B.bQ,B(280)))break f;a.bF=13;a.nf=5;continue i;}try{d=Fi(a,4,d,c);}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;return e.gV;}else{throw $$e;}}if(a.B.bQ!==null&&DU(a.B.bQ,B(280))){a.bF=13;a.nf=5;continue i;}if(Long_eq(a.bp,Long_and(a.B.ma,new Long(4294967295, 0)))){a.B.bQ=null;break f;}a.B.bQ=B(281);a.bF=13;continue i;}if(!a.du){a.bF=7;continue i;}try{d=Fi(a,2,d,c);}catch($$e)
{$$je=Bf($$e);if($$je instanceof Du){e=$$je;return e.gV;}else{throw $$e;}}if(!(a.du!=4&&!(a.du&2))&&Long_eq(a.bp,Long_fromInt(35615))){if(a.du==4)a.du=2;a.B.fv=APo();G5(a,2,a.bp);if(a.ck===null)a.ck=A1Z();a.bF=23;continue i;}if(a.du&2){a.bF=13;a.B.bQ=B(282);continue i;}a.ec=0;a.m9=a.bp.lo&255;h=Long_shr(a.bp,8).lo&255;if(!(a.du&1&&!(((a.m9<<8)+h|0)%31|0))&&(a.m9&15)!=8){if(a.du!=4){a.bF=13;a.B.bQ=B(282);continue i;}e=a.B;e.x=e.x-2|0;e=a.B;e.I=e.I+2|0;e=a.B;e.D=Long_sub(e.D,Long_fromInt(2));a.du=0;a.bF=7;continue i;}if
((a.m9&15)!=8){a.bF=13;a.B.bQ=B(278);continue i;}if(a.du==4)a.du=1;if(((a.m9>>4)+8|0)>a.vu){a.bF=13;a.B.bQ=B(283);continue i;}a.B.fv=AYP();if(h&32){a.bF=2;break d;}a.bF=7;continue i;}break m;}try{d=Fi(a,4,d,c);}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;return e.gV;}else{throw $$e;}}if(a.ck!==null)a.ck.DN=a.bp;if(a.ec&512)G5(a,4,a.bp);a.bF=17;}try{d=Fi(a,2,d,c);}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;return e.gV;}else{throw $$e;}}if(a.ck!==null){a.ck.EQ=a.bp.lo&255;a.ck.yf=a.bp.lo>>
8&255;}if(a.ec&512)G5(a,2,a.bp);a.bF=18;}if(a.ec&1024){try{d=Fi(a,2,d,c);}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;return e.gV;}else{throw $$e;}}if(a.ck!==null)a.ck.nZ=$rt_createByteArray(a.bp.lo&65535);if(a.ec&512)G5(a,2,a.bp);}else if(a.ck!==null)a.ck.nZ=null;a.bF=19;}if(a.ec&1024)x:{try{d=AIv(a,d,c);if(a.ck===null)break x;f=GZ(a.fl);i=f.data;a.fl=null;b=i.length;if(b!=a.ck.nZ.data.length){a.B.bQ=B(284);a.bF=13;continue i;}De(f,0,a.ck.nZ,0,b);break x;}catch($$e){$$je=Bf($$e);if($$je instanceof Du)
{e=$$je;return e.gV;}else{throw $$e;}}}else if(a.ck!==null)a.ck.nZ=null;a.bF=20;}y:{if(a.ec&2048){z:{try{d=M$(a,d,c);if(a.ck===null)break z;a.ck.wj=GZ(a.fl);break z;}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;break h;}else{throw $$e;}}}try{a.fl=null;break y;}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;break h;}else{throw $$e;}}}else if(a.ck!==null)a.ck.wj=null;}a.bF=21;}ba:{if(a.ec&4096){bb:{try{d=M$(a,d,c);if(a.ck===null)break bb;a.ck.xO=GZ(a.fl);break bb;}catch($$e){$$je=Bf($$e);if($$je instanceof Du)
{e=$$je;break g;}else{throw $$e;}}}try{a.fl=null;break ba;}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;break g;}else{throw $$e;}}}else if(a.ck!==null)a.ck.xO=null;}a.bF=22;}if(a.ec&512){try{d=Fi(a,2,d,c);}catch($$e){$$je=Bf($$e);if($$je instanceof Du){e=$$je;return e.gV;}else{throw $$e;}}if(a.ck!==null)a.ck.Fp=Long_and(a.bp,Long_fromInt(65535)).lo;if(Long_ne(a.bp,Long_and(a.B.fv.v6(),Long_fromInt(65535)))){a.bF=13;a.B.bQ=B(285);a.nf=5;continue;}}a.B.fv=APo();a.bF=7;}return d;}return e.gV;}return e.gV;}a.bF
=12;}return 1;}if(!a.B.I)return d;e=a.B;e.I=e.I-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));f=a.B.bW.data;e=a.B;d=e.x;e.x=d+1|0;a.bp=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bF=3;d=c;}if(!a.B.I)return d;e=a.B;e.I=e.I-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;d=e.x;e.x=d+1|0;a.bp=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bF=4;d=c;}if(!a.B.I)return d;e=a.B;e.I=e.I-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e
=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bF=5;}if(!a.B.I)return c;e=a.B;e.I=e.I-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));g=a.bp;f=a.B.bW.data;e=a.B;b=e.x;e.x=b+1|0;a.bp=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.B.fv.Bq(a.bp);a.bF=6;return 2;}if(b==4&&a.bF==14)return 0;return (-2);}
function Fi(a,b,c,d){var e,f,g,h;if(a.hK==(-1)){a.hK=b;a.bp=Long_ZERO;}while(true){if(a.hK<=0){if(b==2)a.bp=Long_and(a.bp,Long_fromInt(65535));else if(b==4)a.bp=Long_and(a.bp,new Long(4294967295, 0));a.hK=(-1);return c;}if(!a.B.I)break;e=a.B;e.I=e.I-1|0;e=a.B;e.D=Long_add(e.D,Long_fromInt(1));f=a.bp;g=a.B.bW.data;e=a.B;h=e.x;e.x=h+1|0;a.bp=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.hK|0)*8|0)));a.hK=a.hK-1|0;c=d;}M(ACr(a,c));}
function M$(a,b,c){var d,e;if(a.fl===null)a.fl=AXk();while(true){if(!a.B.I)M(ACr(a,b));d=a.B;d.I=d.I-1|0;d=a.B;d.D=Long_add(d.D,Long_fromInt(1));e=a.B.bW.data[a.B.x];if(e)OD(a.fl,a.B.bW,a.B.x,1);a.B.fv.jJ(a.B.bW,a.B.x,1);d=a.B;d.x=d.x+1|0;if(!e)break;b=c;}return c;}
function AIv(a,b,c){var d;if(a.fl===null)a.fl=AXk();while(Long_gt(a.bp,Long_ZERO)){if(!a.B.I)M(ACr(a,b));d=a.B;d.I=d.I-1|0;d=a.B;d.D=Long_add(d.D,Long_fromInt(1));OD(a.fl,a.B.bW,a.B.x,1);a.B.fv.jJ(a.B.bW,a.B.x,1);d=a.B;d.x=d.x+1|0;a.bp=Long_sub(a.bp,Long_fromInt(1));b=c;}return b;}
function G5(a,b,c){var d;d=0;while(d<b){a.vj.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.B.fv.jJ(a.vj,0,b);}
function AJk(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);A8i=b;}
function Nc(){Ek.call(this);}
function A8j(){var a=new Nc();AWI(a);return a;}
function AWI(a){return;}
function AWe(a,b){$rt_putStderr(b);}
function IL(){var a=this;E.call(a);a.t=0.0;a.v=0.0;a.s=0.0;}
var A8k=null;var A39=0;function SC(b,c,d){var e;e=new IL;if(b===-0.0)b=0.0;if(c===-0.0)c=0.0;if(d===-0.0)d=0.0;e.t=b;e.v=c;e.s=d;return e;}
function BS(b,c,d){var e,f;if(A39>=A8k.p)U(A8k,SC(0.0,0.0,0.0));e=A8k;f=A39;A39=f+1|0;e=Bc(e,f);e.t=b;e.v=c;e.s=d;return e;}
function Nw(a,b){return BS(b.t-a.t,b.v-a.v,b.s-a.s);}
function Cs(a){var b;b=B7(a.t*a.t+a.v*a.v+a.s*a.s);return b<1.0E-4?BS(0.0,0.0,0.0):BS(a.t/b,a.v/b,a.s/b);}
function Xy(a,b){return BS(a.v*b.s-a.s*b.v,a.s*b.t-a.t*b.s,a.t*b.v-a.v*b.t);}
function C3(a,b,c,d){return BS(a.t+b,a.v+c,a.s+d);}
function Di(a,b){var c,d,e;c=b.t-a.t;d=b.v-a.v;e=b.s-a.s;return B7(c*c+d*d+e*e);}
function D2(a,b){var c,d,e;c=b.t-a.t;d=b.v-a.v;e=b.s-a.s;return c*c+d*d+e*e;}
function XC(a,b,c,d){var e,f,g;e=b-a.t;f=c-a.v;g=d-a.s;return e*e+f*f+g*g;}
function GG(a){return B7(a.t*a.t+a.v*a.v+a.s*a.s);}
function Ja(a,b,c){var d,e,f,g;d=b.t-a.t;e=b.v-a.v;f=b.s-a.s;if(d*d<1.0000000116860974E-7)return null;g=(c-a.t)/d;return g>=0.0&&g<=1.0?BS(a.t+d*g,a.v+e*g,a.s+f*g):null;}
function Im(a,b,c){var d,e,f,g;d=b.t-a.t;e=b.v-a.v;f=b.s-a.s;if(e*e<1.0000000116860974E-7)return null;g=(c-a.v)/e;return g>=0.0&&g<=1.0?BS(a.t+d*g,a.v+e*g,a.s+f*g):null;}
function IZ(a,b,c){var d,e,f,g;d=b.t-a.t;e=b.v-a.v;f=b.s-a.s;if(f*f<1.0000000116860974E-7)return null;g=(c-a.s)/f;return g>=0.0&&g<=1.0?BS(a.t+d*g,a.v+e*g,a.s+f*g):null;}
function AKK(){A8k=Ck();A39=0;}
function AHc(){E.call(this);}
function A8l(){var a=new AHc();ANy(a);return a;}
function ANy(a){return;}
function FB(b){return Math.sin(b);}
function FK(b){return Math.cos(b);}
function Ha(b){return Math.atan(b);}
function AUN(b){return Math.log(b);}
function DL(b){return Math.sqrt(b);}
function K_(b){return Math.ceil(b);}
function AT3(b,c){return Math.pow(b,c);}
function CB(b,c){return Math.atan2(b,c);}
function BI(){return ATJ();}
function ATJ(){return Math.random();}
function CR(b,c){if(b<c)c=b;return c;}
function DV(b,c){if(b>c)c=b;return c;}
function GY(b){if(b<=0)b= -b;return b;}
function GM(b){if(b<=0.0)b= -b;return b;}
function HO(){E.call(this);this.C3=null;}
var A8m=null;var A5v=null;var A71=null;function AB_(a){var b=new HO();AKh(b,a);return b;}
function AKh(a,b){a.C3=b;}
function YK(){A8m=AB_(B(286));A5v=AB_(B(287));A71=AB_(B(288));}
function JI(){J9.call(this);}
function Tt(a){return a.v4;}
function Xt(){var a=this;JI.call(a);a.v4=0;a.vK=0;a.k6=null;}
function ARJ(a,b,c,d,e,f){var g=new Xt();ATV(g,a,b,c,d,e,f);return g;}
function ATV(a,b,c,d,e,f,g){Jc(a,c);a.Z=e;a.cb=f;a.vK=b;a.v4=g;a.k6=d;}
function AJp(a,b){return a.k6.data[b+a.vK|0];}
function RL(a,b,c){a.k6.data[b+a.vK|0]=c;}
function ARd(a){return 1;}
function APm(a){return a.k6;}
function ATq(a){return a.v4;}
function J4(){var a=this;E.call(a);a.Dw=null;a.sC=null;a.CL=0.0;a.yM=0.0;a.tk=null;a.sM=null;a.lO=0;}
function Yv(a,b){var c;if(b!==null){a.tk=b;return a;}c=new Cq;Bl(c,B(289));M(c);}
function ATu(a,b){return;}
function ACe(a,b){var c;if(b!==null){a.sM=b;return a;}c=new Cq;Bl(c,B(289));M(c);}
function AWB(a,b){return;}
function AEi(a,b,c,d){var e,f,g,h,$$je;a:{if(a.lO!=3){if(d)break a;if(a.lO!=2)break a;}b=new DK;Q(b);M(b);}a.lO=!d?1:2;while(true){try{e=U1(a,b,c);}catch($$e){$$je=Bf($$e);if($$je instanceof B5){f=$$je;M(AVp(f));}else{throw $$e;}}if(H5(e)){if(!d)return e;g=Ce(b);if(g<=0)return e;e=EB(g);}else if(Hu(e))break;h=!KE(e)?a.tk:a.sM;b:{if(h!==A5v){if(h===A8m)break b;else return e;}if(Ce(c)<a.sC.data.length)return A8n;Q7(c,a.sC);}D_(b,b.Z+JN(e)|0);}return e;}
function T2(a,b){var c;if(a.lO!=2&&a.lO!=4){b=new DK;Q(b);M(b);}c=A8o;if(c===A8o)a.lO=3;return c;}
function AXe(a,b){return A8o;}
function LX(){var a=this;E.call(a);a.mc=0;a.o6=0;}
var A8o=null;var A8n=null;function Vf(a,b){var c=new LX();AFl(c,a,b);return c;}
function AFl(a,b,c){a.mc=b;a.o6=c;}
function H5(a){return a.mc?0:1;}
function Hu(a){return a.mc!=1?0:1;}
function Lt(a){return !Nz(a)&&!KE(a)?0:1;}
function Nz(a){return a.mc!=2?0:1;}
function KE(a){return a.mc!=3?0:1;}
function JN(a){var b;if(Lt(a))return a.o6;b=new HV;Q(b);M(b);}
function EB(b){return Vf(2,b);}
function Pe(a){var b,c;switch(a.mc){case 0:b=new Nq;Q(b);M(b);case 1:b=new PH;Q(b);M(b);case 2:b=new O7;c=a.o6;Q(b);b.yw=c;M(b);case 3:b=new Nm;c=a.o6;Q(b);b.Bf=c;M(b);default:}}
function AFP(){A8o=Vf(0,0);A8n=Vf(1,0);}
function V0(){E.call(this);}
function AYT(){return {};}
function Nd(){}
function UD(){E.call(this);}
function I5(){var a=this;E.call(a);a.df=0;a.oe=0;a.oA=0;a.fr=0;a.e0=null;a.qx=null;a.ne=null;a.lL=null;a.lI=null;a.tA=null;a.tB=null;a.s3=null;a.s$=null;a.oc=null;a.rF=0;a.bA=0;a.bz=0;a.jm=null;a.cB=null;a.cr=0;a.bK=0;a.bf=0;a.pE=0;a.uO=null;a.u=null;}
var A8p=null;var A8q=null;function H8(a){a.df=0;a.bA=0;a.bz=0;a.bf=0;a.bK=0;if(a.pE)a.u.fv.mz();}
function Vm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.u.x;d=a.u.I;e=a.bz;f=a.bA;g=a.bf;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.df){case 2:break f;case 9:a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.oA=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.e0!==null&&a.e0.data.length>=k))a.e0=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.e0.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.fr=0;a.df=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,(-2));}while(f<32){if(!d){a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,
Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.df=9;a.u.bQ=B(290);a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,(-3));}a.oe=l;f=0;a.df=a.oe?2:!a.rF?0:7;e=f;continue e;}while(f<3){if(!d){a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.rF=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.df=1;break l;case 1:ZT(a.lL,a.lI,a.tA,a.tB,a.u);S_(a.oc,a.lL.data[0],a.lI.data[0],a.tA.data[0],0,a.tB.data[0],0);e=e>>>3;f=f+(-3)|0;a.df=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.df=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.df=9;a.u.bQ=B(291);a.bz=b;a.bA=k;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,(-3));default:}}continue e;}while(a.fr<(4+(a.oA>>>10)|0)){while(f<3){if(!d){a.bz=e;a.bA
=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.e0.data;j=A8q.data;k=a.fr;a.fr=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.fr<19){o=a.e0.data;j=A8q.data;k=a.fr;a.fr=k+1|0;o[j[k]]=0;}a.qx.data[0]=7;k=AKx(a.uO,a.e0,a.qx,a.ne,a.jm,a.u);if(k){if(k==(-3)){a.e0=null;a.df=9;}a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,k);}a.fr=0;a.df=5;}while(true)
{k=a.oA;if(a.fr>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.qx.data[0];while(f<k){if(!d){a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.jm.data[((a.ne.data[0]+(e&A8p.data[k])|0)*3|0)+1|0];n=a.jm.data[((a.ne.data[0]+(e&A8p.data[k])|0)*3|0)+2|0];l=S(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.e0.data;k=a.fr;a.fr=k+1|0;j[k]=n;}else{p=S(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bz=e;a.bA=
f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}b=0;d=d+(-1)|0;j=a.u.bW.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&A8p.data[q])|0;e=n>>>q;f=k-q|0;h=a.fr;q=a.oA;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.e0.data[h-1|0];while(true){j=a.e0.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.fr=l;}}a.ne.data[0]=(-1);a.lL.data[0]=9;a.lI.data[0]=6;k=a.oA;k=UG(a.uO,257+(k&31)|0,1+(k>>5&31)|0,a.e0,a.lL,a.lI,a.s3,a.s$,a.jm,
a.u);if(k){if(k==(-3)){a.e0=null;a.df=9;}a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,k);}S_(a.oc,a.lL.data[0],a.lI.data[0],a.jm,a.s3.data[0],a.jm,a.s$.data[0]);a.df=6;}a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;b=Xj(a.oc,b);if(b!=1)break e;b=0;Wy(a.oc,a.u);c=a.u.x;d=a.u.I;e=a.bz;f=a.bA;g=a.bf;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;if(a.rF){a.df=7;break b;}a.df=0;continue e;}if(!d){a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,
Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}if(!h){if(g==a.cr&&a.bK){g=0;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;}if(!h){a.bf=g;b=BX(a,b);g=a.bf;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;if(g==a.cr&&a.bK){g=0;h=g>=a.bK?a.cr-g|0:(a.bK-g|0)-1|0;}if(!h){a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}}}b=0;k=a.oe;if(k>d)k=d;if(k>h)k=h;De(a.u.bW,c,a.cB,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.oe-k|0;a.oe=k;if(k)continue;a.df=!a.rF?0:7;}return BX(a,b);}a.df=9;a.u.bQ
=B(292);a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,(-3));}a.e0=null;a.df=9;a.u.bQ=B(293);a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,(-3));}a.bf=g;b=BX(a,b);g=a.bf;if(a.bK!=a.bf){a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,b);}a.df=8;}a.bz=e;a.bA=f;a.u.I=d;i=a.u;i.D=Long_add(i.D,Long_fromInt(c-a.u.x|0));a.u.x=c;a.bf=g;return BX(a,1);}
function PS(a){H8(a);a.cB=null;a.jm=null;}
function BX(a,b){var c,d,e,f,g;c=a.u.og;d=a.bK;e=(d>a.bf?a.cr:a.bf)-d|0;if(e>a.u.hn)e=a.u.hn;if(e&&b==(-5))b=0;f=a.u;f.hn=f.hn-e|0;f=a.u;f.ma=Long_add(f.ma,Long_fromInt(e));if(a.pE&&e>0)a.u.fv.jJ(a.cB,d,e);De(a.cB,d,a.u.sR,c,e);c=c+e|0;g=d+e|0;if(g==a.cr){if(a.bf==a.cr)a.bf=0;d=a.bf-0|0;if(d>a.u.hn)d=a.u.hn;if(d&&b==(-5))b=0;f=a.u;f.hn=f.hn-d|0;f=a.u;f.ma=Long_add(f.ma,Long_fromInt(d));if(a.pE&&d>0)a.u.fv.jJ(a.cB,0,d);De(a.cB,0,a.u.sR,c,d);c=c+d|0;g=0+d|0;}a.u.og=c;a.bK=g;return b;}
function ADe(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;A8p=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;A8q=b;}
function Lw(){J4.call(this);}
function U1(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(CR(Ce(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(CR(Ce(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&ED(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CR(Ce(b)+k|0,e.length);MF(b,d,k,g-k|0);f=0;}if(!ED(c)){l=!ED(b)&&f>=g?A8o:A8n;break a;}k=CR(Ce(c),i.length);m=new Qh;m.wo=b;m.z7=c;l=Yf(a,d,f,g,h,0,k,m);f=m.tx;if(l===null&&0==m.p6)l=A8o;S4(c,h,0,m.p6);if(l!==null)break;}}D_(b,b.Z-(g-f|0)|0);return l;}
function Ne(){Lw.call(this);}
function Yf(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(LW(h,2))break a;i=A8n;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!S9(l)){if((f+3|0)>g){j=j+(-1)|0;if(LW(h,3))break a;i=A8n;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!IB(l)){i=EB(1);break a;}if
(j>=d){if(Wl(h))break a;i=A8o;break a;}c=j+1|0;j=k[j];if(!I4(j)){j=c+(-2)|0;i=EB(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(LW(h,4))break a;i=A8n;break a;}k=e.data;n=KC(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.tx=j;h.p6=f;return i;}
function AI4(){E.call(this);}
function A8r(){var a=new AI4();AT4(a);return a;}
function AT4(a){return;}
function AJU(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A6z());}return b.data.length;}
function AAb(b,c){if(b===null){b=new El;Q(b);M(b);}if(b===K($rt_voidcls())){b=new Cq;Q(b);M(b);}if(c>=0)return ATi(b.fm,c);b=new Tz;Q(b);M(b);}
function ATi(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Fn(){var a=this;E.call(a);a.i1=null;a.i8=null;a.eg=null;a.e9=null;a.kh=null;a.hv=null;}
var A8s=null;var A8t=null;var A8u=null;var A8v=null;var A8w=null;var A8x=null;function A0C(){var a=new Fn();ACX(a);return a;}
function ACX(a){a.i1=null;a.i8=null;a.eg=null;a.e9=null;a.kh=null;a.hv=null;}
function Ly(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eg.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eg.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eg.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eg.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m=s;while(true){if(m>=t){v=u-a.eg.data[t]|0;if(v<0)return (-3);b=a.eg.data;b[t]
=b[t]+v|0;b=a.hv.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.hv.data;u=u+a.eg.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.hv.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.hv.data[t];b=a.hv.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.kh.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eg.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c
=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eg.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eg.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.kh.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.hv.data[y]=m;a.e9.data[0]=bc<<24>>24;a.e9.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.e9.data;b=a.kh.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;De(a.e9,0,j,(a.kh.data[q]+c|0)*3|0,3);z=be;}b=a.e9.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.e9.data[0]=192;else{p=l.data;if
(p[w]>=e){i=g.data;o=f.data;a.e9.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.e9.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.e9;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.e9.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){De(a.e9,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.hv.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eg.data[m]|0;if(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function AKx(a,b,c,d,e,f){var g;K0(a,19);a.i1.data[0]=0;g=Ly(a,b,0,19,19,null,null,d,c,e,a.i1,a.i8);if(g==(-3))f.bQ=B(294);else if(!(g!=(-5)&&c.data[0])){f.bQ=B(295);g=(-3);}return g;}
function UG(a,b,c,d,e,f,g,h,i,j){var k;K0(a,288);a.i1.data[0]=0;k=Ly(a,d,0,b,257,A8u,A8v,g,e,i,a.i1,a.i8);if(!k&&e.data[0]){K0(a,288);c=Ly(a,d,b,c,0,A8w,A8x,h,f,i,a.i1,a.i8);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.bQ=B(296);else if(c==(-5)){j.bQ=B(297);c=(-3);}else if(c!=(-4)){j.bQ=B(298);c=(-3);}return c;}if(k==(-3))j.bQ=B(299);else if(k!=(-4)){j.bQ=B(300);k=(-3);}return k;}
function ZT(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=A8s;e[0]=A8t;return 0;}
function K0(a,b){var c;if(a.i1===null){a.i1=$rt_createIntArray(1);a.i8=$rt_createIntArray(b);a.eg=$rt_createIntArray(16);a.e9=$rt_createIntArray(3);a.kh=$rt_createIntArray(15);a.hv=$rt_createIntArray(16);}if(a.i8.data.length<b)a.i8=$rt_createIntArray(b);c=0;while(c<b){a.i8.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eg.data[c]=0;c=c+1|0;}c=0;while(c<3){a.e9.data[c]=0;c=c+1|0;}De(a.eg,0,a.kh,0,15);De(a.eg,0,a.hv,0,16);}
function AI5(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
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
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;A8s=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;A8t=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;A8u=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;A8v=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;A8w=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;A8x=b;}
function JQ(){var a=this;E.call(a);a.eF=0;a.kK=0;a.e4=null;a.j0=0;a.k2=0;a.wA=0;a.qU=0;a.pm=0;a.sN=0;a.sz=0;a.v_=null;a.tO=0;a.vN=null;a.tV=0;a.Y=null;a.z=null;}
var A8y=null;function S_(a,b,c,d,e,f,g){a.eF=0;a.sN=b<<24>>24;a.sz=c<<24>>24;a.v_=d;a.tO=e;a.vN=f;a.tV=g;a.e4=null;}
function Xj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.Y.x;d=a.Y.I;e=a.z.bz;f=a.z.bA;g=a.z.bf;h=g>=a.z.bK?a.z.cr-g|0:(a.z.bK-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.eF){case 0:break f;case 2:i=a.qU;while(f<i){if(!d){a.z.bz=e;a.z.bA=f;a.Y.I=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,b);}b=0;d=d+(-1)|0;k=a.Y.bW.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.kK=a.kK+(e&A8y.data[i])|0;e=e>>i;f=f-i|0;a.k2=a.sz;a.e4=a.vN;a.j0=a.tV;a.eF=3;break g;case 4:i=a.qU;while(f<i){if
(!d){a.z.bz=e;a.z.bA=f;a.Y.I=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,b);}b=0;d=d+(-1)|0;k=a.Y.bW.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.pm=a.pm+(e&A8y.data[i])|0;e=e>>i;f=f-i|0;a.eF=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.z.bf=g;b=BX(a.z,b);g=a.z.bf;if(a.z.bK!=a.z.bf){a.z.bz=e;a.z.bA=f;a.Y.I=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,b);}a.eF=8;break a;case 9:a.z.bz=e;a.z.bA=f;a.Y.I=d;j=a.Y;j.D
=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.z.bz=e;a.z.bA=f;a.Y.I=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,(-2));}}l=a.k2;while(f<l){if(!d){a.z.bz=e;a.z.bA=f;a.Y.I=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,b);}b=0;d=d+(-1)|0;k=a.Y.bW.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.j0+(e&A8y.data[l])|0)*3|0;k=a.e4.data;i=m+1|0;e=e>>
k[i];f=f-a.e4.data[i]|0;l=a.e4.data[m];if(l&16){a.qU=l&15;a.pm=a.e4.data[m+2|0];a.eF=4;continue b;}if(l&64){a.eF=9;a.Y.bQ=B(301);a.z.bz=e;a.z.bA=f;a.Y.I=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,(-3));}a.k2=l;a.j0=(m/3|0)+a.e4.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.z.bz=e;a.z.bA=f;a.Y.I=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;b=AHL(a,a.sN,a.sz,a.v_,a.tO,a.vN,a.tV,a.z,a.Y);c=a.Y.x;d=a.Y.I;e=a.z.bz;f=a.z.bA;g=a.z.bf;h=g>=a.z.bK?a.z.cr-g|
0:(a.z.bK-g|0)-1|0;if(b){a.eF=b!=1?9:7;continue b;}}a.k2=a.sN;a.e4=a.v_;a.j0=a.tO;a.eF=1;}l=a.k2;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.Y.bW.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.j0+(e&A8y.data[l])|0)*3|0;k=a.e4.data;i=m+1|0;e=e>>>k[i];f=f-a.e4.data[i]|0;n=a.e4.data[m];if(!n){a.wA=a.e4.data[m+2|0];a.eF=6;continue b;}if(n&16){a.qU=n&15;a.kK=a.e4.data[m+2|0];a.eF=2;continue b;}if(!(n&64)){a.k2=n;a.j0=(m/3|0)+a.e4.data[m+2|0]|0;continue b;}if(!(n&32)){a.eF=9;a.Y.bQ=B(302);a.z.bz=e;a.z.bA=f;a.Y.I
=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,(-3));}a.eF=7;continue b;}if(h)i=g;else{if(g!=a.z.cr)i=g;else if(!a.z.bK)i=g;else{i=0;h=i>=a.z.bK?a.z.cr-i|0:(a.z.bK-i|0)-1|0;}if(!h){a.z.bf=i;b=BX(a.z,b);i=a.z.bf;h=i>=a.z.bK?a.z.cr-i|0:(a.z.bK-i|0)-1|0;if(i==a.z.cr&&a.z.bK){i=0;h=i>=a.z.bK?a.z.cr-i|0:(a.z.bK-i|0)-1|0;}if(!h){a.z.bz=e;a.z.bA=f;a.Y.I=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=i;return BX(a.z,b);}}}b=0;k=a.z.cB.data;g=i+1|0;k[i]=a.wA<<24>>
24;h=h+(-1)|0;a.eF=0;continue b;}i=g-a.pm|0;while(i<0){i=i+a.z.cr|0;}while(a.kK){if(h)l=g;else{if(g!=a.z.cr)l=g;else if(!a.z.bK)l=g;else{l=0;h=l>=a.z.bK?a.z.cr-l|0:(a.z.bK-l|0)-1|0;}if(!h){a.z.bf=l;b=BX(a.z,b);l=a.z.bf;h=l>=a.z.bK?a.z.cr-l|0:(a.z.bK-l|0)-1|0;if(l==a.z.cr&&a.z.bK){l=0;h=l>=a.z.bK?a.z.cr-l|0:(a.z.bK-l|0)-1|0;}if(!h){a.z.bz=e;a.z.bA=f;a.Y.I=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=l;return BX(a.z,b);}}}o=a.z.cB.data;g=l+1|0;k=a.z.cB.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m
==a.z.cr?0:m;a.kK=a.kK-1|0;}a.eF=0;}a.z.bz=e;a.z.bA=f;a.Y.I=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,b);}a.z.bz=e;a.z.bA=f;a.Y.I=d;j=a.Y;j.D=Long_add(j.D,Long_fromInt(c-a.Y.x|0));a.Y.x=c;a.z.bf=g;return BX(a.z,1);}
function Wy(a,b){return;}
function AHL(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.x;k=i.I;l=h.bz;m=h.bA;n=h.bf;o=n>=h.bK?h.cr-n|0:(h.bK-n|0)-1|0;p=A8y.data[b];q=A8y.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.bW.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cB.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&A8y.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.bW.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.bQ=B(301);b=i.I-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bz=w;h.bA=b;i.I=c;i.D=Long_add(i.D,Long_fromInt(e-i.x|0));i.x=e;h.bf=n;return (-3);}b=(b+r[x+2|0]|0)+(w&A8y.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.bW.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&A8y.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.cB.data;b=n+1|0;r=h.cB.data;c=w+1|0;s[n]=r[w];s=h.cB.data;n=b+1|0;r=h.cB.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{De(h.cB,w,h.cB,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cr|0;if(w>=0)break;}b=h.cr-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.cB.data;n=c+1|0;r=h.cB.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{De(h.cB,w,h.cB,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.cB.data;c=n+1|0;r=h.cB.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}De(h.cB,w,h.cB,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.I-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bz=l;h.bA=e;i.I=b;i.D=Long_add(i.D,Long_fromInt(c-i.x|0));i.x=c;h.bf=n;return 1;}i.bQ=B(302);v=i.I-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bz=l;h.bA=c;i.I=e;i.D=Long_add(i.D,Long_fromInt(b-i.x|0));i.x=b;h.bf=n;return (-3);}t=(t+s[u+2|0]|0)+(l&A8y.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cB.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.I-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bz=l;h.bA=g;i.I=b;i.D=Long_add(i.D,Long_fromInt(e-i.x|0));i.x=e;h.bf=c;return 0;}
function Xo(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;A8y=b;}
function Go(){BU.call(this);}
function A8z(){var a=new Go();AZT(a);return a;}
function AZT(a){Q(a);}
function Tz(){B5.call(this);}
function A8A(){var a=new Tz();AX_(a);return a;}
function AX_(a){Q(a);}
function WI(){E.call(this);}
function AZ1(a,b){return a.DD(b);}
function AOe(a){return a.EV();}
function IM(){B5.call(this);}
function A8B(){var a=new IM();AW8(a);return a;}
function AW8(a){Q(a);}
function VP(){var a=this;E.call(a);a.gB=null;a.pD=null;a.dI=null;a.eH=0;}
function A0A(){var a=new VP();ATU(a);return a;}
function ATU(a){a.dI=A2p;}
function DK(){BB.call(this);}
function A8C(){var a=new DK();AYR(a);return a;}
function AYR(a){Q(a);}
function ADG(){E.call(this);}
function H_(b){return b.length?0:1;}
function AJu(b){return b.shift();}
function PN(){E.call(this);this.z6=null;}
function ALt(a){var b,c,d;b=a.z6;if(!Gz(b)&&b.b3.dI===null){c=b.b3;if(c.gB!==null&&!H_(c.gB)){b=c.gB;d=AJu(b);if(b===null)c.gB=null;NI(d);}}}
function Ok(){var a=this;E.call(a);a.w5=null;a.w6=null;a.w3=0;a.w4=null;}
function NI(a){var b,c,d,e;b=a.w5;c=a.w6;d=a.w3;e=a.w4;EL(b);c.b3.dI=b;b=c.b3;b.eH=b.eH+d|0;Cx(e,null);}
function F2(){BU.call(this);}
function A8D(){var a=new F2();AOE(a);return a;}
function AOE(a){Q(a);}
function S7(){EA.call(this);}
function A8E(){var a=new S7();ASU(a);return a;}
function ASU(a){Q(a);}
function Ei(){BB.call(this);}
function A8F(){var a=new Ei();AXx(a);return a;}
function AXx(a){Q(a);}
function L7(){var a=this;E.call(a);a.DR=null;a.yS=0.0;a.Ck=0.0;a.kd=null;a.lG=null;a.pU=null;a.hd=0;}
function ALo(a,b){var c;if(b!==null){a.lG=b;return a;}c=new Cq;Bl(c,B(303));M(c);}
function AZm(a,b){return;}
function Zj(a,b){var c;if(b!==null){a.pU=b;return a;}c=new Cq;Bl(c,B(303));M(c);}
function AWj(a,b){return;}
function Q2(a,b,c,d){var e,f,$$je;if(!(a.hd==2&&!d)&&a.hd!=3){a.hd=d?2:1;while(true){try{e=ABH(a,b,c);}catch($$e){$$je=Bf($$e);if($$je instanceof B5){f=$$je;M(AVp(f));}else{throw $$e;}}if(Hu(e))return e;if(H5(e)){if(d&&ED(b)){if(a.lG===A71)return EB(Ce(b));if(Ce(c)<=BE(a.kd))return A8n;D_(b,b.Z+Ce(b)|0);if(a.lG===A5v)Li(c,a.kd);}return e;}if(Nz(e)){if(a.lG===A71)return e;if(a.lG===A5v){if(Ce(c)<BE(a.kd))return A8n;Li(c,a.kd);}D_(b,b.Z+JN(e)|0);}else if(KE(e)){if(a.pU===A71)break;if(a.pU===A5v){if(Ce(c)<BE(a.kd))return A8n;Li(c,
a.kd);}D_(b,b.Z+JN(e)|0);}}return e;}b=new DK;Q(b);M(b);}
function XW(a,b){if(a.hd!=3&&a.hd!=2){b=new DK;Q(b);M(b);}a.hd=3;return A8o;}
function ALO(a){a.hd=0;return a;}
function AEN(a,b){var c,d;if(a.hd&&a.hd!=3){b=new DK;Q(b);M(b);}if(!Ce(b))return ACD(0);if(a.hd)ALO(a);c=ACD(DV(8,Ce(b)*a.yS|0));while(true){d=Q2(a,b,c,0);if(H5(d))break;if(Hu(d))c=RP(a,c);if(!Lt(d))continue;Pe(d);}b=Q2(a,b,c,1);if(Lt(b))Pe(b);while(!H5(XW(a,c))){c=RP(a,c);}FE(c);return c;}
function RP(a,b){var c,d,e;c=b.k6;d=MJ(c,DV(8,c.data.length*2|0));e=AHN(d,0,d.data.length);D_(e,b.Z);return e;}
function AQ0(a,b){return A8o;}
function AVG(a){return;}
function Pp(){}
function Pv(){}
function MS(){var a=this;E.call(a);a.ua=null;a.ye=null;a.Ek=0;a.E7=0;}
function AJZ(a){if(!a.Ek){a.ua.zJ=null;EL(a.ua);Cx(a.ye,null);}}
function JU(){L7.call(this);}
function ABH(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(CR(Ce(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(CR(Ce(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&ED(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CR(Ce(b)+k|0,e.length);AFj(b,d,k,g-k|0);f=0;}if(!ED(c)){l=!ED(b)&&f>=g?A8o:A8n;break a;}k=CR(Ce(c),i.length);m=new SD;m.xG=b;m.A4=c;l=AL9(a,d,f,g,h,0,k,m);f=m.tZ;if(l===null&&0==m.o7)l=A8o;AMH(c,h,0,m.o7);if(l!==null)break;}}D_(b,b.Z-(g-f|0)|0);return l;}
function Or(){JU.call(this);}
function AL9(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(LD(h))break a;i=A8o;break a;}n=k+1|0;k=j[k];if(!Gj(a,k)){c=n+(-2)|0;i=EB(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(LD(h))break a;i=A8o;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Gj(a,m))break b;if(!Gj(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(S9(p)){c=k+(-3)|0;i=EB(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=EB(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(LD(h))break a;i=A8o;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AEs(h,2))break a;i=A8n;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Gj(a,m))break c;if(!Gj(a,o))break c;if(!Gj(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=IW(q);m=c+1|0;j[c]=Ij(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=EB(1);break a;}c=k+(-3)|0;i=EB(1);}h.tZ=
c;h.o7=f;return i;}
function Gj(a,b){return (b&192)!=128?0:1;}
function Du(){var a=this;BB.call(a);a.gV=0;a.ED=null;}
function ACr(a,b){var c=new Du();AOF(c,a,b);return c;}
function AOF(a,b,c){a.ED=b;Q(a);a.gV=c;}
function AId(){var a=this;E.call(a);a.E$=0;a.CW=0;a.DN=Long_ZERO;a.EQ=0;a.yf=0;a.nZ=null;a.wj=null;a.xO=null;a.Fp=0;a.Dx=Long_ZERO;a.CY=0;a.D6=Long_ZERO;}
function A1Z(){var a=new AId();AX7(a);return a;}
function AX7(a){a.E$=0;a.CW=0;a.yf=255;a.CY=0;a.D6=Long_ZERO;}
function My(){E.call(this);this.k7=0;}
var A8G=null;function APo(){var a=new My();Va(a);return a;}
function Va(a){a.k7=0;}
function ATQ(a,b,c,d){var e,f,g,h;e=a.k7^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=A8G.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.k7=e^(-1);}
function AWt(a){a.k7=0;}
function AYQ(a,b){a.k7=Long_and(b,new Long(4294967295, 0)).lo;}
function AXj(a){return Long_and(Long_fromInt(a.k7),new Long(4294967295, 0));}
function AA1(){var b,c,d;A8G=null;A8G=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}A8G.data[b]=d;b=b+1|0;}}
function HI(){var a=this;E.call(a);a.N=0.0;a.H=0.0;a.O=0.0;a.R=0.0;a.Q=0.0;a.S=0.0;}
var A8H=null;var A38=0;function Ln(b,c,d,e,f,g){var h;h=new HI;h.N=b;h.H=c;h.O=d;h.R=e;h.Q=f;h.S=g;return h;}
function Dy(b,c,d,e,f,g){var h,i;if(A38>=A8H.p)U(A8H,Ln(0.0,0.0,0.0,0.0,0.0,0.0));h=A8H;i=A38;A38=i+1|0;return K4(Bc(h,i),b,c,d,e,f,g);}
function K4(a,b,c,d,e,f,g){a.N=b;a.H=c;a.O=d;a.R=e;a.Q=f;a.S=g;return a;}
function HN(a,b,c,d){var e,f,g,h,i,j,k;e=a.N;f=a.H;g=a.O;h=a.R;i=a.Q;j=a.S;k=S(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=S(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=S(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return Dy(e,f,g,h,i,j);}
function Da(a,b,c,d){return Dy(a.N-b,a.H-c,a.O-d,a.R+b,a.Q+c,a.S+d);}
function QH(a,b,c,d){return Dy(a.N+b,a.H+c,a.O+d,a.R+b,a.Q+c,a.S+d);}
function NO(a,b,c){var d,e;if(b.Q>a.H&&b.H<a.Q){if(b.S>a.O&&b.O<a.S){if(c<=0.0)d=c;else if(b.R>a.N)d=c;else{d=a.N-b.R;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.N<a.R)e=d;else{e=a.R-b.N;if(e<=d)e=d;}return e;}return c;}return c;}
function Sm(a,b,c){var d,e;if(b.R>a.N&&b.N<a.R){if(b.S>a.O&&b.O<a.S){if(c<=0.0)d=c;else if(b.Q>a.H)d=c;else{d=a.H-b.Q;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.H<a.Q)e=d;else{e=a.Q-b.H;if(e<=d)e=d;}return e;}return c;}return c;}
function QJ(a,b,c){var d,e;if(b.R>a.N&&b.N<a.R){if(b.Q>a.H&&b.H<a.Q){if(c<=0.0)d=c;else if(b.S>a.O)d=c;else{d=a.O-b.S;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.O<a.S)e=d;else{e=a.S-b.O;if(e<=d)e=d;}return e;}return c;}return c;}
function Kj(a,b){return b.R>a.N&&b.N<a.R?(b.Q>a.H&&b.H<a.Q?(b.S>a.O&&b.O<a.S?1:0):0):0;}
function Fc(a,b,c,d){a.N=a.N+b;a.H=a.H+c;a.O=a.O+d;a.R=a.R+b;a.Q=a.Q+c;a.S=a.S+d;return a;}
function AKu(a){return (a.R-a.N+a.Q-a.H+a.S-a.O)/3.0;}
function NA(a){return Dy(a.N,a.H,a.O,a.R,a.Q,a.S);}
function N3(a,b,c){var d,e,f,g,h,i,j,k;d=Ja(b,c,a.N);e=Ja(b,c,a.R);f=Im(b,c,a.H);g=Im(b,c,a.Q);h=IZ(b,c,a.O);i=IZ(b,c,a.S);if(!OP(a,d))d=null;if(!OP(a,e))e=null;if(!QK(a,f))f=null;if(!QK(a,g))g=null;if(!Rh(a,h))h=null;if(!Rh(a,i))i=null;j=null;if(d!==null)j=d;if(e!==null&&!(j!==null&&D2(b,e)>=D2(b,j)))j=e;if(f!==null&&!(j!==null&&D2(b,f)>=D2(b,j)))j=f;if(g!==null&&!(j!==null&&D2(b,g)>=D2(b,j)))j=g;if(h!==null&&!(j!==null&&D2(b,h)>=D2(b,j)))j=h;if(i!==null&&!(j!==null&&D2(b,i)>=D2(b,j)))j=i;if(j===null)return null;k
=(-1);if(j===d)k=4;if(j===e)k=5;if(j===f)k=0;if(j===g)k=1;if(j===h)k=2;if(j===i)k=3;return ASp(0,0,0,k,j);}
function OP(a,b){return b===null?0:b.v>=a.H&&b.v<=a.Q&&b.s>=a.O&&b.s<=a.S?1:0;}
function QK(a,b){return b===null?0:b.t>=a.N&&b.t<=a.R&&b.s>=a.O&&b.s<=a.S?1:0;}
function Rh(a,b){return b===null?0:b.t>=a.N&&b.t<=a.R&&b.v>=a.H&&b.v<=a.Q?1:0;}
function Tk(a,b){a.N=b.N;a.H=b.H;a.O=b.O;a.R=b.R;a.Q=b.Q;a.S=b.S;}
function ZZ(){A8H=Ck();A38=0;}
function NC(){}
function Bp(){Bo.call(this);}
var A8I=0;var A5o=null;var A8J=0;var A8K=0;var A8L=0;var A8M=0.0;var A8N=0;var A8O=null;var A8P=0;var A8Q=0;var A8R=0.0;var A8S=0.0;var A8T=0.0;var A8U=0.0;var A8V=0.0;var A8W=0.0;var A8X=0.0;var A8Y=0.0;var A8Z=0.0;var A80=0;var A4$=0.0;var A4_=0.0;var A5a=0.0;var A5b=0.0;var A81=0;var A82=0;var A83=0;var A84=0.0;var A85=0.0;var A86=0.0;var A87=0;var A88=0;var A89=0;var A8$=0;var A8_=null;var A9a=0;var A9b=null;var A9c=0;var A9d=null;var A9e=0;var A9f=null;var A9g=null;var A5n=null;var A9h=null;var A9i=null;var A9j
=null;var A9k=null;var A9l=null;var A9m=null;var A5m=0;var A9n=null;var A9o=null;var A9p=null;var A9q=null;var A9r=null;var A9s=null;var A9t=null;var A9u=null;var A9v=null;var A9w=null;var A9x=null;var A9y=null;var A9z=null;var A9A=null;var A9B=Long_ZERO;var A9C=0;function BO(){BO=Bt(Bp);AS4();}
function A9D(){var a=new Bp();AJF(a);return a;}
function AJF(a){BO();R5(a);}
function V(b){BO();a:{switch(b){case 2884:Jn(2884);break a;case 2896:A8K=1;break a;case 2903:A80=1;break a;case 2912:A82=1;break a;case 2929:Jn(2929);break a;case 3008:A8L=1;break a;case 3042:Jn(3042);break a;case 3553:A8J=1;break a;case 32823:Jn(32823);break a;case 32826:break;default:break a;}}}
function GA(b){var c;BO();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Z();A23.depthFunc(c);}
function Py(b,c){BO();A8M=c;}
function CU(b){BO();A8$=b;}
function FS(){BO();switch(A8$){case 5888:break;case 5889:return A9b.data[A9c];case 5890:return A9d.data[A9e];default:}return A8_.data[A9a];}
function CT(){BO();EG(FS());}
function Gf(b,c,d,e){BO();Z();A3o.data[0]=b;A3o.data[1]=c;A3o.data[2]=d;A3o.data[3]=e;A23.viewport(b,c,d,e);}
function DA(b){BO();Z();A23.clear(b);}
function G9(b,c,d,e,f,g){var h,i,j,k;BO();h=FS();i=c-b;h.dW=2.0/i;h.dU=0.0;h.dV=0.0;h.dT=0.0;h.dZ=0.0;j=e-d;h.d0=2.0/j;h.dX=0.0;h.dY=0.0;h.d4=0.0;h.d2=0.0;k=g-f;h.d3=2.0/k;h.d1=0.0;h.gb= -(c+b)/i;h.gc= -(e+d)/j;h.f_=(g+f)/k;h.ga=1.0;}
function Br(b,c,d){var e;BO();Kf(A9i,b,c,d);e=FS();Ro(e,A9i,e);if(!A8N)return;e=new Cq;Bl(e,B(304));M(e);}
function Gs(b,c,d,e){BO();Z();A23.clearColor(b,c,d,e);}
function X(b){BO();a:{switch(b){case 2884:Iv(2884);break a;case 2896:A8K=0;break a;case 2903:A80=0;break a;case 2912:A82=0;break a;case 2929:Iv(2929);break a;case 3008:A8L=0;break a;case 3042:Iv(3042);break a;case 3553:A8J=0;break a;case 32823:Iv(32823);break a;case 32826:break;default:break a;}}}
function BN(b,c,d,e){BO();A8R=b;A8S=c;A8T=d;A8U=e;}
function Pz(b,c,d,e,f,g,h,i,j){var k,l,m,n;BO();Z();if(j===null){k=A23;l=null;k.texImage2D(3553,c,32856,e,f,g,6408,5121,l);}else{m=Ce(j);k=A3p;n=0;while(n<m){h=(AGH(j)&255)<<16>>16;k[n]=h;n=n+1|0;}j=new Uint8Array(A3p.buffer,0,m);A23.texImage2D(3553,c,32856,e,f,g,6408,5121,j);}}
function BW(){BO();a:{switch(A8$){case 5888:break;case 5889:if(A9c>=(A9b.data.length-1|0)){B9(CK(),B(305));break a;}A9c=A9c+1|0;FT(A9b.data[A9c],A9b.data[A9c-1|0]);break a;case 5890:if(A9e>=(A9d.data.length-1|0)){B9(CK(),B(306));break a;}A9e=A9e+1|0;FT(A9d.data[A9e],A9d.data[A9e-1|0]);break a;default:}if(A9a>=(A8_.data.length-1|0))B9(CK(),B(307));else{A9a=A9a+1|0;FT(A8_.data[A9a],A8_.data[A9a-1|0]);}}}
function Bq(b,c,d,e){var f;BO();Kf(A9i,c,d,e);f=FS();S5(f,b*0.01745329238474369,A9i,f);if(!A8N)return;f=new Cq;Bl(f,B(304));M(f);}
function By(){BO();a:{switch(A8$){case 5888:break;case 5889:if(A9c<=0){B9(CK(),B(308));break a;}A9c=A9c-1|0;break a;case 5890:if(A9e<=0){B9(CK(),B(309));break a;}A9e=A9e-1|0;break a;default:}if(A9a<=0)B9(CK(),B(310));else A9a=A9a-1|0;}}
function Qx(b,c){BO();a:{switch(b){case 2982:break;case 2983:Qz(A9b.data[A9c],c);break a;default:}Qz(A8_.data[A9a],c);}}
function Co(b,c,d){var e;BO();Kf(A9i,b,c,d);Vz(FS(),A9i);if(!A8N)return;e=new Cq;Bl(e,B(304));M(e);}
function C0(b,c){BO();A83=b==1&&c==771?1:0;Z();A23.blendFunc(b,c);}
function FD(b){BO();Z();A23.depthMask(!!b);}
function ET(b,c,d,e){BO();Z();A23.colorMask(!!b,!!c,!!d,!!e);}
function Cf(b,c){var d,e;BO();d=AIr(A5o,c);Z();e=A23;d=d!==null?d.yN:null;e.bindTexture(3553,d);}
function DQ(b,c,d){BO();if(!(d!=33071&&d!=10496))d=33071;Z();A23.texParameteri(b,c,d);}
function B_(b,c,d){var e;BO();e=DL(b*b+c*c+d*d);A8V=b/e;A8W=c/e;A8X=d/e;}
function L5(b){BO();A9g=b;O0(b);}
function E7(b){var c;BO();if(!A8N){c=Cz(A9h,CG(b));if(c!==null&&c.iN>0){OB(c.kG|0|(A80&&A8K?8:0)|(!A82?0:16)|(!A8L?0:32)|(!A8J?0:64));L5(c.pC);M4(0,c.iN);A88=A88+((c.iN*6|0)/4|0)|0;A89=A89+(c.iN/2|0)|0;}}}
function EV(b,c){BO();if(!A8N){A8O=Cz(A5n,CG(b));if(A8O!==null){A8O.kG=(-1);A8O.iN=0;A8N=1;}}}
function DM(){var b,c,d,e;BO();if(A8N){A8N=0;Z();b=A3W.buffer;c=A3V;d=new Int32Array(b,0,c);A3V=0;e=Q1(d);if(e>0){if(A8O.nx===null){BK(A9h,CG(A8O.yx),A8O);A8O.pC=MM();A8O.nx=Kk();b=MN(A8O.kG);L5(A8O.pC);Gc(34962,A8O.nx);OK(b);}Gc(34962,A8O.nx);M6(34962,d,35044);A87=A87+e|0;}}}
function Fh(b,c,d){BO();A8R=b;A8S=c;A8T=d;A8U=1.0;}
function Mp(b,c){BO();Z();A23.polygonOffset(b,c);}
function S2(b){BO();a:{switch(b){case 32886:break;case 32888:A8Q=1;break a;default:break a;}A8P=1;}}
function Qb(b){BO();a:{switch(b){case 32886:break;case 32888:A8Q=0;break a;default:break a;}A8P=0;}}
function Nv(){BO();return 0|(!A8P?0:1)|(!A8Q?0:4);}
function OB(b){var c;BO();c=MN(b);A9n=c;ALl(c);if(A8L)ADX(c,A8M);AGG(c,A8R,A8S,A8T,A8U);if(A82){AGk(c,(!A83?0:2)+A81|0);AKI(c,A4$,A4_,A5a,A5b);AFK(c,A86);AKl(c,A84,A85);}AHg(c,A8_.data[A9a]);AHK(c,A9b.data[A9c]);VQ(c,A9d.data[A9e]);if(A80&&A8K){XN(c,A8V,A8W,A8X);AHV(c,A9l,A9m);}AJl(c,A8Y,A8Z);}
function AGn(b,c,d,e){var f;BO();if(A8N){if(b!=7)B9(CK(),B(311));else{if(A8O.kG==(-1))A8O.kG=Nv();else if(A8O.kG!=Nv())B9(CK(),B(312));f=A8O;f.iN=f.iN+d|0;Z();e=e;if((A3V+e.length|0)<A3W.length){f=A3W;b=A3V;f.set(e,b);A3V=A3V+e.length|0;}}}else{A87=A87+Q1(e)|0;A88=A88+d|0;OB(0|(!A8P?0:1)|(!A8Q?0:4)|(A80&&A8K?8:0)|(!A82?0:16)|(!A8L?0:32)|(!A8J?0:64));L5(A9n.sg);Gc(34962,A9n.sL);if(!A9n.uX){A9n.uX=1;M6(34962,A9o,35048);}f=A23;e=e;f.bufferSubData(34962,0,e);if(b==7){M4(c,d);A89=A89+(d/2|0)|0;}else{a:{b:{switch
(b){case 1:break;case 2:case 4:break b;case 3:b=3;A89=A89+(d-1|0)|0;break a;case 5:b=5;A89=A89+(d-2|0)|0;break a;case 6:b=6;A89=A89+(d-2|0)|0;break a;default:break b;}b=1;A89=A89+(d/2|0)|0;break a;}b=4;A89=A89+(d/3|0)|0;}A23.drawArrays(b,c,d);}}}
function M4(b,c){var d,e,f,g,h,i,j;BO();if(A9f===null){if(A8I)d=Rf($rt_createIntArray(49200));else{e=AVU(0,196800,$rt_createByteArray(196800),0,196800,1,0);e.jL=A5p;d=AC1(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;h=h<<16;LC(d,g|h);LC(d,j|h);LC(d,i|j<<16);f=f+1|0;}FE(d);A9f=Kk();Gc(34963,A9f);g=Ce(d);e=new Int32Array(A3p.buffer);h=0;while(h<g){i=ABz(d);e[h]=i;h=h+1|0;}d=A3p.buffer;g=g*4|0;e=new Uint8Array(d,0,g);A23.bufferData(34963,e,35044);}if(!A9g.tC){A9g.tC=1;Gc(34963,A9f);}g=(c*6|0)/4|0;b=(b
*6|0)/4|0;Z();A23.drawElements(4,g,5123,b);}
function Ko(b,c){BO();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}A81=2;break a;}A81=1;}}}
function FR(b,c){BO();a:{switch(b){case 2914:break;case 2915:A84=c;break a;case 2916:A85=c;break a;default:break a;}A86=c;}}
function AJ$(b,c,d,e){var f,g,h;BO();f=FS();g=b*0.01745329238474369*0.5;h=FK(g)/FB(g);f.dW=h/c;f.dU=0.0;f.dV=0.0;f.dT=0.0;f.dZ=0.0;f.d0=h;f.dX=0.0;f.dY=0.0;f.d4=0.0;f.d2=0.0;b=e+d;c=e-d;f.d3=b/c;f.d1=(-1.0);f.gb=0.0;f.gc=0.0;f.f_=2.0*e*d/c;f.ga=0.0;}
function AS4(){var b,c,d;Z();A8I=1;A5o=AZ0(256);A8J=0;A8K=0;A8L=0;A8M=0.10000000149011612;A8N=0;A8O=null;A8P=0;A8Q=0;A8R=1.0;A8S=1.0;A8T=1.0;A8U=1.0;A8V=1.0;A8W=0.0;A8X=0.0;A8Y=0.0;A8Z=0.0;A80=0;A4$=1.0;A4_=1.0;A5a=1.0;A5b=1.0;A81=1;A82=0;A83=0;A84=1.0;A85=1.0;A86=1.0;A87=0;A88=0;A89=0;A8$=5888;A8_=O(DX,32);A9a=0;A9b=O(DX,6);A9c=0;A9d=O(DX,16);A9e=0;b=0;while(b<A8_.data.length){c=A8_.data;d=new DX;EG(d);c[b]=d;b=b+1|0;}b=0;while(b<A9b.data.length){c=A9b.data;d=new DX;EG(d);c[b]=d;b=b+1|0;}b=0;while(b<A9d.data.length)
{c=A9d.data;d=new DX;EG(d);c[b]=d;b=b+1|0;}A9f=null;A9g=null;A5n=CY();A9h=CY();A9i=new Rj;A9j=new F8;A9k=new F8;A9l=new F8;A9m=new F8;A5m=0;A9n=null;A9o=new Int32Array(525000);A9p=null;A9q=null;A9r=null;A9s=null;A9t=null;A9u=AZ0(256);d=new DX;EG(d);A9v=IX(d);A9w=$rt_createFloatArray(16);A9x=$rt_createFloatArray(16);d=new DX;EG(d);A9y=d;d=new DX;EG(d);A9z=d;A9A=new F8;A9B=Long_ZERO;A9C=0;}
function Yi(){E.call(this);}
function A9E(){var a=new Yi();AN6(a);return a;}
function AN6(a){return;}
function Dt(){var b,c;Z();if(!A3X)a:{A3x=null;if(!Ni(A3e)){b=P$(A3e,0);A3x=b;if(b!==null){c=1;break a;}}c=0;}else{Mh(A3e);A3x=null;A3z.data[29]=0;A3z.data[157]=0;A3z.data[28]=0;A3z.data[219]=0;A3z.data[220]=0;A3X=0;c=0;}return c;}
function CD(){Z();return A3x===null?0:DU($rt_str(A3x.type),B(313))?0:1;}
function Be(){Z();return A3x===null?(-1):QB(A3x.which);}
function AKt(b){Z();A3l=b;}
function BH(b){Z();if(A3X){A3z.data[28]=0;A3z.data[29]=0;A3z.data[157]=0;A3z.data[219]=0;A3z.data[220]=0;}return A3z.data[b];}
function Lv(){var a=this;E.call(a);a.pN=0;a.rA=0;a.lQ=0;a.km=0;a.ha=0;a.io=0;a.d5=0;a.lf=0;a.lJ=0;a.r$=null;a.r3=null;a.u2=null;a.sx=null;a.v$=null;a.eS=null;a.fF=null;a.yL=null;a.fw=null;a.y8=null;a.z5=null;a.l0=null;a.yV=null;a.xd=0;a.iY=0;a.cf=0;}
var A9F=null;var A9G=null;function A0m(a){var b=new Lv();AJP(b,a);return b;}
function AJP(a,b){var c,d;a.pN=1;a.rA=1;a.lQ=0;a.km=0;a.ha=0;a.io=1;a.d5=0;a.lf=0;a.lJ=1;a.r$=Ep(B(314),17);a.r3=Ep(B(315),30);a.u2=Ep(B(316),31);a.sx=Ep(B(317),32);a.v$=Ep(B(318),57);a.eS=Ep(B(319),23);a.fF=Ep(B(320),16);a.yL=Ep(B(321),20);a.fw=Ep(B(322),33);a.y8=Ep(B(323),28);a.z5=Ep(B(324),19);c=O(RE,11);d=c.data;d[0]=a.r$;d[1]=a.r3;d[2]=a.u2;d[3]=a.sx;d[4]=a.v$;d[5]=a.fF;d[6]=a.eS;d[7]=a.yL;d[8]=a.fw;d[9]=a.y8;d[10]=a.z5;a.l0=c;a.xd=10;a.iY=2;a.cf=0;a.yV=b;}
function Jp(a,b){var c;c=new Ba;Y(c);c=H(H(c,a.l0.data[b].A6),B(11));b=a.l0.data[b].by;Z();return N(H(c,b>=0&&b<256?A3T.data[b]:B(10)));}
function T6(a,b,c){a.l0.data[b].by=c;}
function DH(a,b,c){if(!b)a.pN=a.pN?0:1;if(b==1)a.rA=a.rA?0:1;if(b==2)a.lQ=a.lQ?0:1;if(b==3)a.km=a.km?0:1;if(b==4)a.ha=(a.ha+c|0)&3;if(b==5)a.io=a.io?0:1;if(b==6)a.d5=a.d5?0:1;if(b==7)a.lf=a.lf?0:1;if(b==8)a.iY=(a.iY+c|0)&3;if(b==9){a.lJ=a.lJ?0:1;JB(a.yV.dB);}}
function N9(a,b){var c;a:{if(!b){c=new Ba;Y(c);c=N(H(H(c,B(325)),!a.pN?B(326):B(327)));break a;}if(b==1){c=new Ba;Y(c);c=N(H(H(c,B(328)),!a.rA?B(326):B(327)));break a;}if(b==2){c=new Ba;Y(c);c=N(H(H(c,B(329)),!a.lQ?B(326):B(327)));break a;}if(b==3){c=new Ba;Y(c);c=N(H(H(c,B(330)),!a.km?B(326):B(327)));break a;}if(b==4){c=new Ba;Y(c);c=N(H(H(c,B(331)),A9F.data[a.ha]));break a;}if(b==5){c=new Ba;Y(c);c=N(H(H(c,B(332)),!a.io?B(326):B(327)));break a;}if(b==6){c=new Ba;Y(c);c=N(H(H(c,B(333)),!a.d5?B(326):B(327)));break a;}if
(b==7){c=new Ba;Y(c);c=N(H(H(c,B(334)),!a.lf?B(326):B(327)));break a;}if(b==8){c=new Ba;Y(c);c=N(H(H(c,B(335)),A9G.data[a.iY]));break a;}if(b!=9){c=B(3);break a;}c=new Ba;Y(c);c=N(H(H(c,B(336)),!a.lJ?B(337):B(338)));}return c;}
function ATM(a){return;}
function ASJ(a){return;}
function AC7(){var b,c;b=O(Cp,4);c=b.data;c[0]=B(339);c[1]=B(340);c[2]=B(341);c[3]=B(342);A9F=b;b=O(Cp,4);c=b.data;c[0]=B(343);c[1]=B(344);c[2]=B(345);c[3]=B(346);A9G=b;}
function G7(){var a=this;E.call(a);a.r_=null;a.op=0;a.lm=0;a.nl=0;a.nm=0;a.jX=0;a.j4=0;a.kf=0;a.yA=0;a.AX=0;a.Aa=0;a.mD=0;a.nB=0;a.ow=0;a.eU=0;a.gh=null;a.Bn=0;a.x$=0;a.Ap=0;a.Ds=0.0;a.h5=0;a.Bv=null;a.Ee=0;a.vi=0;a.Fm=0;a.m3=0;a.jI=0;a.fG=null;a.ij=null;}
var A9H=null;var A3$=0;function Qc(){Qc=Bt(G7);AZR();}
function A1j(a,b,c,d,e,f,g){var h=new G7();AEa(h,a,b,c,d,e,f,g);return h;}
function AEa(a,b,c,d,e,f,g,h){Qc();a.op=(-1);a.eU=0;a.gh=$rt_createBooleanArray(2);a.vi=1;a.jI=0;a.fG=Ck();a.r_=b;a.ij=c;a.kf=g;a.j4=g;a.jX=g;a.Ds=DG((Bh(a.jX,a.jX)+Bh(a.j4,a.j4)|0)+Bh(a.kf,a.kf)|0)/2.0;a.op=h;a.lm=(-999);Pr(a,d,e,f);a.h5=0;}
function Pr(a,b,c,d){var e,f;if(!(b==a.lm&&c==a.nl&&d==a.nm)){Nf(a);a.lm=b;a.nl=c;a.nm=d;a.Bn=b+(a.jX/2|0)|0;a.x$=c+(a.j4/2|0)|0;a.Ap=d+(a.kf/2|0)|0;a.mD=b&1023;a.nB=c;a.ow=d&1023;a.yA=b-a.mD|0;a.AX=c-a.nB|0;a.Aa=d-a.ow|0;a.Bv=Ln(b-2.0,c-2.0,d-2.0,(b+a.jX|0)+2.0,(c+a.j4|0)+2.0,(d+a.kf|0)+2.0);EV(a.op+2|0,4864);e=Dy(a.mD-2.0,a.nB-2.0,a.ow-2.0,(a.mD+a.jX|0)+2.0,(a.nB+a.j4|0)+2.0,(a.ow+a.kf|0)+2.0);Bv();f=A37;Bu(f);Bd(f,e.N,e.Q,e.O);Bd(f,e.R,e.Q,e.O);Bd(f,e.R,e.H,e.O);Bd(f,e.N,e.H,e.O);Bd(f,e.N,e.H,e.S);Bd(f,e.R,
e.H,e.S);Bd(f,e.R,e.Q,e.S);Bd(f,e.N,e.Q,e.S);Bd(f,e.N,e.H,e.O);Bd(f,e.R,e.H,e.O);Bd(f,e.R,e.H,e.S);Bd(f,e.N,e.H,e.S);Bd(f,e.N,e.Q,e.S);Bd(f,e.R,e.Q,e.S);Bd(f,e.R,e.Q,e.O);Bd(f,e.N,e.Q,e.O);Bd(f,e.N,e.H,e.S);Bd(f,e.N,e.Q,e.S);Bd(f,e.N,e.Q,e.O);Bd(f,e.N,e.H,e.O);Bd(f,e.R,e.H,e.O);Bd(f,e.R,e.Q,e.O);Bd(f,e.R,e.Q,e.S);Bd(f,e.R,e.H,e.S);Bn(f);DM();Jh(a);}}
function YV(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.h5)return;A3$=A3$+1|0;b=a.lm;c=a.nl;d=a.nm;e=a.lm+a.jX|0;f=a.nl+a.j4|0;g=a.nm+a.kf|0;h=0;while(h<2){a.gh.data[h]=1;h=h+1|0;}A9I=0;i=Fk();Dq(i,a.fG);DB(a.fG);j=new Hc;k
=a.r_;l=b-1|0;m=c-1|0;n=d-1|0;o=e+1|0;h=f+1|0;p=g+1|0;$p=1;case 1:Z1(j,k,l,m,n,o,h,p);if(C()){break _;}k=AXP(j);l=0;a:{while(true){if(l>=2)break a;q=0;r=0;s=0;t=c;while(t<f){m=d;while(m<g){n=b;if(n<e){$p=2;continue _;}m=m+1|0;}t=t+1|0;}if(!s)r=0;else{Bn(A9H);DM();Et(A9H,0.0,0.0,0.0);}if(r)a.gh.data[l]=0;if(!q)break;l=l+1|0;}}u=Fk();Dq(u,a.fG);EK(u,i);Dq(a.ij,u);EK(i,a.fG);Fp(a.ij,i);a.m3=A9I;a.jI=1;return;case 2:$z=Gr(j,n,t,m);if(C()){break _;}p=$z;if(p>0){if(!s){s=1;EV(a.op+l|0,4864);Bu(A9H);Et(A9H,a.mD-a.lm
|0,a.nB-a.nl|0,a.ow-a.nm|0);}if(!l){J();if(A3_.data[p] instanceof DN){$p=3;continue _;}}J();v=A3_.data[p];o=S(v.oi(),l);if(o)q=1;else if(!o){$p=4;continue _;}}n=n+1|0;b:{c:while(true){if(n<e){continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Bn(A9H);DM();Et(A9H,0.0,0.0,0.0);}if(r)a.gh.data[l]=0;if(!q)break c;l=l+1|0;if(l>=2)break b;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Fk();Dq(u,a.fG);EK(u,i);Dq(a.ij,u);EK(i,a.fG);Fp(a.ij,i);a.m3=A9I;a.jI=1;return;case 3:$z=ABk(j,n,t,m);if(C()){break _;}w=$z;if(ADp(A9J,
w))U(a.fG,w);J();v=A3_.data[p];o=S(v.oi(),l);if(o)q=1;else if(!o){$p=4;continue _;}n=n+1|0;d:{e:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Bn(A9H);DM();Et(A9H,0.0,0.0,0.0);}if(r)a.gh.data[l]=0;if(!q)break e;l=l+1|0;if(l>=2)break d;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Fk();Dq(u,a.fG);EK(u,i);Dq(a.ij,u);EK(i,a.fG);Fp(a.ij,i);a.m3=A9I;a.jI=1;return;case 4:$z=AIG(k,v,n,t,m);if(C()){break _;}o=$z;r=r|o;n=n+1|0;a:{f:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g)
{t=t+1|0;while(t>=f){if(!s)r=0;else{Bn(A9H);DM();Et(A9H,0.0,0.0,0.0);}if(r)a.gh.data[l]=0;if(!q)break f;l=l+1|0;if(l>=2)break a;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Fk();Dq(u,a.fG);EK(u,i);Dq(a.ij,u);EK(i,a.fG);Fp(a.ij,i);a.m3=A9I;a.jI=1;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function F6(a,b){var c,d,e;c=b.c-a.Bn;d=b.j-a.x$;e=b.d-a.Ap;return c*c+d*d+e*e;}
function Nf(a){var b;b=0;while(b<2){a.gh.data[b]=1;b=b+1|0;}a.eU=0;a.jI=0;}
function ALZ(a){Nf(a);a.r_=null;}
function M9(a,b){return !a.eU?(-1):a.gh.data[b]?(-1):a.op+b|0;}
function AMr(a,b){a.eU=KN(b,a.Bv);}
function ACP(a){return !a.jI?0:a.gh.data[0]&&a.gh.data[1]?1:0;}
function Jh(a){a.h5=1;}
function AZR(){Bv();A9H=A37;A3$=0;}
function AMs(){var a=this;Ek.call(a);a.iv=null;a.kD=0;}
function AXk(){var a=new AMs();AQk(a);return a;}
function AY6(a){var b=new AMs();U0(b,a);return b;}
function AQk(a){U0(a,32);}
function U0(a,b){a.iv=$rt_createByteArray(b);}
function AXu(a,b){var c,d;OF(a,a.kD+1|0);c=a.iv.data;d=a.kD;a.kD=d+1|0;c[d]=b<<24>>24;}
function OD(a,b,c,d){var e,f,g,h,i;OF(a,a.kD+d|0);e=0;while(e<d){f=b.data;g=a.iv.data;h=a.kD;a.kD=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function OF(a,b){if(a.iv.data.length<b){b=DV(b,(a.iv.data.length*3|0)/2|0);a.iv=ALx(a.iv,b);}}
function GZ(a){return ALx(a.iv,a.kD);}
function Ik(){B5.call(this);}
function A9K(){var a=new Ik();AVW(a);return a;}
function AVW(a){Q(a);}
function L4(){}
function FO(){var a=this;E.call(a);a.e3=null;a.dt=null;a.kV=null;a.f1=null;a.jS=null;a.e1=null;a.dG=Long_ZERO;a.qF=Long_ZERO;a.q7=Long_ZERO;a.pL=Long_ZERO;a.fD=0;a.g7=0;a.qw=0;a.qE=0;a.bd=null;a.h4=0;a.zW=null;a.n=null;a.eJ=0;a.oq=0;a.eI=0;a.rS=0;a.b$=null;a.hR=null;a.kr=Long_ZERO;a.ry=null;a.uu=Long_ZERO;a.EL=null;a.lY=null;a.oK=null;}
var A9L=null;var A9M=null;function A9N(a,b){var c=new FO();N$(c,a,b);return c;}
function AMu(b){var c,d,e,f,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=new Ba;Y(c);c=N(H(H(c,b),B(347)));$p=1;case 1:$z=AGB(c);if(C()){break _;}d=$z;c=Ds();e=new Ba;Y(e);B9(c,N(H(H(e,b),B(347))));if(d===null)return null;a:{try{e=KG(KW(MB(QO(d))),B(348));}catch($$e){$$je=Bf($$e);if($$je instanceof BU){f=$$je;break a;}else{throw $$e;}}return e;}B4(f);return null;default:Es();}}CM().s(b,c,d,e,f,$p);}
function N$(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e3=Ck();a.dt=Ck();a.kV=Ck();a.f1=A1F();a.jS=Fk();a.e1=Ck();a.dG=Long_ZERO;a.qF=Long_fromInt(8961023);a.q7=Long_fromInt(12638463);a.pL=Long_fromInt(16777215);a.fD=0;a.g7=JG(new Df);a.qw=1013904223;a.qE=0;a.n=new Df;a.rS=0;a.b$=Ck();a.kr=Long_ZERO;a.uu=Long_ZERO;a.lY=Ck();a.oK=Ck();a.EL=b;A9M=b;b=new Ba;Y(b);b=N(H(H(b,
A9M),B(347)));$p=1;case 1:$z=AGB(b);if(C()){break _;}d=$z;b=Ds();e=new Ba;Y(e);B9(b,N(H(H(e,A9M),B(347))));f=d!==null?1:0;a:{a.rS=f;if(d!==null){try{g=KG(KW(MB(QO(d))),B(348));a.kr=Kp(g,B(349));a.eJ=E9(g,B(350));a.oq=E9(g,B(351));a.eI=E9(g,B(352));a.dG=Kp(g,B(353));a.uu=Kp(g,B(354));a.ry=KG(g,B(5));break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){h=$$je;}else{throw $$e;}}B4(h);}}f=0;if(Long_eq(a.kr,Long_ZERO)){a.kr=c;f=1;}a.hR=W7(a,A9M);if(!f){Oi(a);return;}a.eJ=0;a.oq=64;a.eI=0;f=a.eJ;i=a.eI;$p=2;case 2:$z
=AES(a,f,i);if(C()){break _;}f=$z;J();if(f!=A4w.b?0:1){Oi(a);return;}a.eJ=a.eJ+(D(a.n,64)-D(a.n,64)|0)|0;a.eI=a.eI+(D(a.n,64)-D(a.n,64)|0)|0;f=a.eJ;i=a.eI;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function W7(a,b){var c,d,e;c=new Sc;d=new Tr;d.qm=b;e=new Px;e.Cq=$rt_createIntMultiArray([32,32]);e.o=a;e.a=new Df;e.wq=F$(e.a,16);e.wr=F$(e.a,16);e.wp=F$(e.a,8);e.r0=F$(e.a,4);e.wt=F$(e.a,4);e.wu=F$(e.a,10);e.ws=F$(e.a,16);e.hX=F$(e.a,8);c.T=O(HE,1024);c.eR=(-999999999);c.ff=(-999999999);c.kl=AYz(a,$rt_createByteArray(32768),0,0);c.kl.AV=1;c.kl.oC=1;c.kv=a;c.gm=d;c.hW=e;return c;}
function AKB(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.eJ;c=a.eI;$p=1;case 1:$z=AES(a,b,c);if(C()){break _;}b=$z;if(b)return;a.eJ=a.eJ+(D(a.n,8)-D(a.n,8)|0)|0;a.eI=a.eI+(D(a.n,8)-D(a.n,8)|0)|0;b=a.eJ;c=a.eI;continue _;default:Es();}}CM().s(a,b,c,$p);}
function AES(a,b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=63;e=d+1|0;$p=1;case 1:$z=Yc(a,b,e,c);if(C()){break _;}f=$z;if(!f){$p=2;continue _;}d=e;e=d+1|0;continue _;case 2:$z=Yc(a,b,d,c);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ABN(a){var b,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{if(a.ry!==null){US(a.bd,a.ry);a.ry=null;}b=a.bd;$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){b=$$je;}else{throw $$e;}}B4(b);return;case 1:a:{try{AIX(a,b);if(C()){break _;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){b=$$je;}else{throw $$e;}}B4(b);}return;default:Es();}}CM().s(a,b,$p);}
function Xm(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null)UI(c,B(355));$p=1;case 1:AHx(a);if(C()){break _;}if(c===null){d=a.hR;$p=2;continue _;}d=B(356);$p=3;continue _;case 2:AIE(d,b,c);if(C()){break _;}return;case 3:AMm(c,d);if(C()){break _;}d=a.hR;$p=2;continue _;default:Es();}}CM().s(a,b,c,d,$p);}
function AHx(a){var b,c,d,e,f,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=F9();GW(b,B(349),a.kr);FH(b,B(350),a.eJ);FH(b,B(351),a.oq);FH(b,B(352),a.eI);GW(b,B(353),a.dG);GW(b,B(354),a.uu);GW(b,B(357),B1());if(a.bd!==null){c=F9();AGq(a.bd,c);AIz(b,B(5),c);}c=F9();Gx(c,B(348),b);try{b=N(H(H(BR(),A9M),B(358)));$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){d=$$je;}else{throw $$e;}}B4(d);return;case 1:try
{AGB(b);if(C()){break _;}b=N(H(H(BR(),A9M),B(359)));$p=2;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){d=$$je;}else{throw $$e;}}B4(d);return;case 2:try{AGB(b);if(C()){break _;}b=N(H(H(BR(),A9M),B(347)));$p=3;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){d=$$je;}else{throw $$e;}}B4(d);return;case 3:try{AGB(b);if(C()){break _;}e=AY6(131072);O8(c,APn(e));b=N(H(H(BR(),A9M),B(358)));f=GZ(e);$p=4;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){d=$$je;}else{throw $$e;}}B4(d);return;case 4:try
{Yg(b,f);if(C()){break _;}b=N(H(H(BR(),A9M),B(359)));$p=5;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){d=$$je;}else{throw $$e;}}B4(d);return;case 5:try{$z=AGB(b);if(C()){break _;}f=$z;if(f!==null){b=N(H(H(BR(),A9M),B(359)));$p=8;continue _;}b=N(H(H(BR(),A9M),B(347)));c=N(H(H(BR(),A9M),B(359)));$p=6;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){d=$$je;}else{throw $$e;}}B4(d);return;case 6:try{AH5(b,c);if(C()){break _;}b=N(H(H(BR(),A9M),B(347)));$p=7;continue _;}catch($$e){$$je=Bf($$e);if
($$je instanceof BB){d=$$je;}else{throw $$e;}}B4(d);return;case 7:try{$z=AGB(b);if(C()){break _;}f=$z;if(f!==null){b=N(H(H(BR(),A9M),B(347)));$p=11;continue _;}b=N(H(H(BR(),A9M),B(358)));c=N(H(H(BR(),A9M),B(347)));$p=9;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){d=$$je;}else{throw $$e;}}B4(d);return;case 8:try{AGW(b);if(C()){break _;}b=N(H(H(BR(),A9M),B(347)));c=N(H(H(BR(),A9M),B(359)));$p=6;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){d=$$je;}else{throw $$e;}}B4(d);return;case 9:try
{AH5(b,c);if(C()){break _;}b=N(H(H(BR(),A9M),B(358)));$p=10;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){d=$$je;}else{throw $$e;}}B4(d);return;case 10:a:{try{$z=AGB(b);if(C()){break _;}f=$z;if(f===null)break a;b=N(H(H(BR(),A9M),B(358)));$p=12;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){d=$$je;}else{throw $$e;}}B4(d);}return;case 11:try{AGW(b);if(C()){break _;}b=N(H(H(BR(),A9M),B(358)));c=N(H(H(BR(),A9M),B(347)));$p=9;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){d=$$je;}
else{throw $$e;}}B4(d);return;case 12:a:{try{AGW(b);if(C()){break _;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){d=$$je;}else{throw $$e;}}B4(d);}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Wx(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b){$p=2;continue _;}c=a.hR;b=0;d=null;$p=1;case 1:$z=AIE(c,b,d);if(C()){break _;}b=$z;return b;case 2:AHx(a);if(C()){break _;}c=a.hR;b=0;d=null;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,$p);}
function Yc(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)b=0;else{if(c<128){e=b>>4;f=d>>4;$p=1;continue _;}b=0;}}else b=0;return b;case 1:$z=VO(a,e,f);if(C()){break _;}g=$z;return Ed(g,b&15,c,d&15);default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function D9(a,b,c,d){return c>=0&&c<128?CN(a,b>>4,d>>4):0;}
function G1(a,b,c,d,e,f,g){var h,i;if(f>=0&&c<128){h=b>>4;b=d>>4;c=e>>4;d=g>>4;while(h<=c){i=b;while(i<=d){if(!CN(a,h,i))return 0;i=i+1|0;}h=h+1|0;}return 1;}return 0;}
function CN(a,b,c){return BJ(a.hR,b,c);}
function TY(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b>>4;b=c>>4;$p=1;case 1:$z=VO(a,d,b);if(C()){break _;}e=$z;return e;default:Es();}}CM().s(a,b,c,d,e,$p);}
function VO(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.hR;$p=1;case 1:$z=AIV(d,b,c);if(C()){break _;}d=$z;return d;default:Es();}}CM().s(a,b,c,d,$p);}
function AEq(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;g=b>>4;h=d>>4;$p=1;continue _;}return 0;case 1:$z=VO(a,g,h);if(C()){break _;}i=$z;b=b&15;d=d&15;$p=2;case 2:$z=Zg(i,b,c,d,e,f);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AGo(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=VO(a,f,g);if(C()){break _;}h=$z;g=b&15;b=d&15;$p=2;case 2:$z=Zd(h,g,c,b,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function XG(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Yc(a,b,c,d);if(C()){break _;}e=$z;if(!e)f=A5y;else{J();f=A3_.data[e].bR;}return f;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AAd(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;e=b>>4;f=d>>4;$p=1;continue _;}return 0;case 1:$z=VO(a,e,f);if(C()){break _;}g=$z;return O2(g,b&15,c,d&15);default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function XY(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFw(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AFw(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=VO(a,f,g);if(C()){break _;}h=$z;Wj(h,b&15,c,d&15,e);return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AJ9(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGo(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AAg(a,b,c,d,e);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AD2(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEq(a,b,c,d,e,f);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AAg(a,b,c,d,e);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AAg(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;while(f<a.b$.p){OA(Bc(a.b$,f),b,c,d);f=f+1|0;}$p=1;case 1:AC3(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AKj(a,b,c,d,e){var f;if(d<=e){f=d;d=e;e=f;}HS(a,b,e,c,b,d,c);}
function HS(a,b,c,d,e,f,g){var h;h=0;while(h<a.b$.p){AJi(Bc(a.b$,h),b,c,d,e,f,g);h=h+1|0;}}
function AC3(a,b,c,d,e){var f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b-1|0;$p=1;case 1:AJG(a,f,c,d,e);if(C()){break _;}f=b+1|0;$p=2;case 2:AJG(a,f,c,d,e);if(C()){break _;}f=c-1|0;$p=3;case 3:AJG(a,b,f,d,e);if(C()){break _;}f=c+1|0;$p=4;case 4:AJG(a,b,f,d,e);if(C()){break _;}f=d-1|0;$p=5;case 5:AJG(a,b,c,f,e);if(C()){break _;}d=d+1|0;$p=6;case 6:AJG(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,
$p);}
function AJG(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qE)return;J();f=A3_.data;$p=1;case 1:$z=Yc(a,b,c,d);if(C()){break _;}g=$z;h=f[g];if(h===null)return;$p=2;case 2:h.ep(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function ABD(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=VO(a,e,f);if(C()){break _;}g=$z;return MZ(g,b&15,c,d&15);default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function TD(a,b,c,d){var e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=1;$p=1;case 1:$z=ALc(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,e,$p);}
function ALc(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(e){$p=1;continue _;}if(c<0)return 0;if(c>=128){f=15-a.fD|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}return 15;case 1:$z=Yc(a,b,c,d);if(C()){break _;}f=$z;J();if(f!=A4e.b&&f!=A6j.b){if(c<0)return 0;if(c>=128){f=15-
a.fD|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}e=c+1|0;g=0;$p=2;case 2:$z=ALc(a,b,e,d,g);if(C()){break _;}h=$z;e=b+1|0;g=0;$p=3;case 3:$z=ALc(a,e,c,d,g);if(C()){break _;}g=$z;e=b-1|0;i=0;$p=4;case 4:$z=ALc(a,e,c,d,i);if(C()){break _;}i=$z;e=d+1|0;j=0;$p=5;case 5:$z=ALc(a,b,c,e,j);if(C()){break _;}j=$z;d=d-1|0;e=0;$p=6;case 6:$z=ALc(a,b,c,d,e);if(C()){break _;}k=$z;if(g<=h)g=h;if(i<=g)i=g;if(j<=i)j=i;if(k<=j)k=j;return k;case 7:$z=VO(a,g,e);if(C()){break _;}l=$z;return R4(l,b&15,c,d&15,a.fD);default:
Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Vt(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 1;e=b>>4;f=d>>4;if(!CN(a,e,f))return 0;$p=1;continue _;}return 0;case 1:$z=VO(a,e,f);if(C()){break _;}g=$z;return MZ(g,b&15,c,d&15);default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AGC(a,b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&c>=(-32000000)&&b<32000000&&c<=32000000){d=b>>4;e=c>>4;if(!CN(a,d,e))return 0;$p=1;continue _;}return 0;case 1:$z=VO(a,d,e);if(C()){break _;}f=$z;return Q5(f,b&15,c&15);default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AKG(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!D9(a,c,d,e))return;if(b===A9O){$p=1;continue _;}if(b===A9P){$p=2;continue _;}$p=3;continue _;case 1:$z=Vt(a,c,d,e);if(C()){break _;}g=$z;if(g)f=15;$p=3;continue _;case 2:$z=Yc(a,c,d,e);if(C()){break _;}g=$z;J();if(A5V.data[g]>f)f=A5V.data[g];$p=3;case 3:$z=AGf(a,b,c,d,e);if(C()){break _;}g=$z;if(g==f)return;$p=4;case 4:U6(a,b,c,d,e,c,d,
e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AGf(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=0&&d<128&&c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000){f=c>>4;g=e>>4;if(!CN(a,f,g))return 0;$p=1;continue _;}return b.xw;case 1:$z=VO(a,f,g);if(C()){break _;}h=$z;return X3(h,b,c&15,d,e&15);default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AHi(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000&&d>=0&&d<128){g=c>>4;h=e>>4;if(CN(a,g,h)){$p=1;continue _;}}return;case 1:$z=VO(a,g,h);if(C()){break _;}i=$z;ALd(i,b,c&15,d,e&15,f);g=0;while(g<a.b$.p){OA(Bc(a.b$,g),c,d,e);g=g+1|0;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AH1(a,b,c,d){var e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=A9L.data;$p=1;case 1:$z=TD(a,b,c,d);if(C()){break _;}b=$z;return e[b];default:Es();}}CM().s(a,b,c,d,e,$p);}
function OJ(a){return a.fD>=4?0:1;}
function AEp(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;$p=1;case 1:$z=AAv(a,b,c,d);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,$p);}
function AAv(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(isNaN(b.t)?1:0)&&!(isNaN(b.v)?1:0)&&!(isNaN(b.s)?1:0)){if(!(isNaN(c.t)?1:0)&&!(isNaN(c.v)?1:0)&&!(isNaN(c.s)?1:0)){e
=I(c.t);f=I(c.v);g=I(c.s);h=I(b.t);i=I(b.v);j=I(b.s);k=20+(-1)|0;if(20<0)return null;if(!(isNaN(b.t)?1:0)&&!(isNaN(b.v)?1:0)&&!(isNaN(b.s)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=S(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=S(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=S(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.t-b.t;u=c.v-b.v;v=c.s-b.s;if(l!==999.0)q=(l-b.t)/t;if(m!==999.0)r=(m-b.v)/u;if(n!==999.0)s=(n-b.s)/v;if(q<r&&q<s){o=o<=0?5:4;b.t=l;b.v=b.v+u*q;b.s=b.s+v*q;}else if(r>=
s){o=i<=0?3:2;b.t=b.t+t*s;b.v=b.v+u*s;b.s=n;}else{o=p<=0?1:0;b.t=b.t+t*r;b.v=m;b.s=b.s+v*r;}w=BS(b.t,b.v,b.s);v=I(b.t);w.t=v;h=v|0;if(o==5){h=h+(-1)|0;w.t=w.t+1.0;}v=I(b.v);w.v=v;i=v|0;if(o==1){i=i+(-1)|0;w.v=w.v+1.0;}v=I(b.s);w.s=v;j=v|0;if(o==3){j=j+(-1)|0;w.s=w.s+1.0;}$p=1;continue _;}return null;}return null;}return null;case 1:$z=Yc(a,h,i,j);if(C()){break _;}x=$z;$p=2;case 2:$z=AAd(a,h,i,j);if(C()){break _;}y=$z;J();z=A3_.data[x];if(x>0&&z.nE(y,d)){$p=5;continue _;}o=i-1|0;$p=3;case 3:$z=Yc(a,h,o,j);if
(C()){break _;}p=$z;$p=4;case 4:$z=AAd(a,h,o,j);if(C()){break _;}x=$z;w=A3_.data[p];if(p>0&&w.nE(x,d)){$p=6;continue _;}p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.t)?1:0)&&!(isNaN(b.v)?1:0)&&!(isNaN(b.s)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=S(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=S(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=S(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.t-b.t;u=c.v-b.v;v=c.s-b.s;if(l!==999.0)q=(l-b.t)/t;if(m!==999.0)r=(m-b.v)/u;if(n!==999.0)s=(n-b.s)
/v;if(q<r&&q<s){o=o<=0?5:4;b.t=l;b.v=b.v+u*q;b.s=b.s+v*q;}else if(r>=s){o=i<=0?3:2;b.t=b.t+t*s;b.v=b.v+u*s;b.s=n;}else{o=p<=0?1:0;b.t=b.t+t*r;b.v=m;b.s=b.s+v*r;}w=BS(b.t,b.v,b.s);v=I(b.t);w.t=v;h=v|0;if(o==5){h=h+(-1)|0;w.t=w.t+1.0;}v=I(b.v);w.v=v;i=v|0;if(o==1){i=i+(-1)|0;w.v=w.v+1.0;}v=I(b.s);w.s=v;j=v|0;if(o==3){j=j+(-1)|0;w.s=w.s+1.0;}$p=1;continue _;}return null;case 5:$z=z.mp(a,h,i,j,b,c);if(C()){break _;}ba=$z;if(ba!==null)return ba;o=i-1|0;$p=3;continue _;case 6:$z=w.mp(a,h,o,j,b,c);if(C()){break _;}ba
=$z;if(ba!==null)return ba;p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.t)?1:0)&&!(isNaN(b.v)?1:0)&&!(isNaN(b.s)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=S(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=S(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=S(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.t-b.t;u=c.v-b.v;v=c.s-b.s;if(l!==999.0)q=(l-b.t)/t;if(m!==999.0)r=(m-b.v)/u;if(n!==999.0)s=(n-b.s)/v;if(q<r&&q<s){o=o<=0?5:4;b.t=l;b.v=b.v+u*q;b.s=b.s+v*q;}else if(r>=s){o=i<=0?3:2;b.t=b.t+t
*s;b.v=b.v+u*s;b.s=n;}else{o=p<=0?1:0;b.t=b.t+t*r;b.v=m;b.s=b.s+v*r;}w=BS(b.t,b.v,b.s);v=I(b.t);w.t=v;h=v|0;if(o==5){h=h+(-1)|0;w.t=w.t+1.0;}v=I(b.v);w.v=v;i=v|0;if(o==1){i=i+(-1)|0;w.v=w.v+1.0;}v=I(b.s);w.s=v;j=v|0;if(o==3){j=j+(-1)|0;w.s=w.s+1.0;}$p=1;continue _;}return null;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function C2(a,b,c,d,e){var f,g,h;f=0;g=S(d,1.0);e=16.0*d;while(f<a.b$.p){h=16.0;if(g>0)h=e;if(JT(a.bd,b)<h*h)Bc(a.b$,f);f=f+1|0;}}
function D1(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$$je;a:{b:{try{h=0;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){i=$$je;break b;}else{throw $$e;}}j=S(f,1.0);k=16.0*f;while(true){try{if(h>=CZ(a.b$))break;l=16.0;if(j>0)l=k;m=b-a.bd.c;n=c-a.bd.j;o=d-a.bd.d;if(m*m+n*n+o*o<l*l)YF(Bc(a.b$,h),e,b,c,d,f,g);h=h+1|0;continue;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){i=$$je;break b;}else{throw $$e;}}}break a;}B4(i);}}
function ANi(a,b,c,d,e,f){return;}
function BQ(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.b$.p){ADf(Bc(a.b$,i),b,c,d,e,f,g,h);i=i+1|0;}}
function AIX(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(b.c/16.0);d=I(b.d/16.0);if(!CN(a,c,d)){e=Ds();f=new Ba;Y(f);B9(e,N(E0(H(f,B(360)),b)));return;}$p=1;case 1:$z=VO(a,c,d);if(C()){break _;}e=$z;R7(e,b);U(a.dt,b);g=0;while(g<a.b$.p){Bc(a.b$,g);g=g+1|0;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AOy(a,b){B3(b);}
function AIk(a,b){U(a.b$,b);}
function AFS(a,b){GV(a.b$,b);}
function TW(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DB(a.lY);d=I(c.N);e=I(c.R+1.0);f=I(c.H);g=I(c.Q+1.0);h=I(c.O);i=I(c.S+1.0);f=f-1|0;while(d<e){j=f;while(j<g){k=h;if(k<i){J();l=A3_.data;$p=2;continue _;}j=j+1|0;}d=d+1|0;}c=Da(c,0.25,0.25,0.25);$p=1;case 1:$z=Zm(a,b,c);if(C()){break _;}m=$z;n=0;while
(n<m.p){o=Bc(m,n).yv();if(o!==null)U(a.lY,o);c=b.x7(Bc(m,n));if(c!==null)U(a.lY,c);n=n+1|0;}return a.lY;case 2:$z=Yc(a,d,j,k);if(C()){break _;}n=$z;p=l[n];if(p!==null){m=a.lY;$p=3;continue _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Da(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}J();l=A3_.data;continue _;case 3:p.BY(a,d,j,k,c,m);if(C()){break _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Da(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}J();l=A3_.data;$p=2;continue _;default:
Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Mb(a,b){var c;c=1.0-(Bx(Gq(a,b)*3.1415927410125732*2.0)*2.0+0.5);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*11.0|0;}
function Mw(a,b){var c,d,e,f;c=Bx(Gq(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.qF,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.qF,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.qF,Long_fromInt(255)))/255.0;return BS(d*c,e*c,f*c);}
function Gq(a,b){var c;c=(Long_rem(a.dG,Long_fromInt(24000)).lo+b)/24000.0-0.25;if(c<0.0)c=c+1.0;if(c>1.0)c=c-1.0;return c+(1.0-(FK(c*3.141592653589793)+1.0)/2.0-c)/3.0;}
function PX(a,b){var c,d,e,f;c=Bx(Gq(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.pL,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.pL,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.pL,Long_fromInt(255)))/255.0;b=c*0.8999999761581421+0.10000000149011612;return BS(d*b,e*b,f*(c*0.8500000238418579+0.15000000596046448));}
function Y5(a,b){var c,d,e,f;c=Bx(Gq(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.q7,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.q7,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.q7,Long_fromInt(255)))/255.0;b=c*0.9399999976158142+0.05999999865889549;return BS(d*b,e*b,f*(c*0.9100000262260437+0.09000000357627869));}
function AXT(a,b,c){return 64;}
function AEu(a,b){var c;c=1.0-(Bx(Gq(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*c*0.5;}
function EF(a,b,c,d,e){var f,g;f=new Io;g=A9Q;A9Q=Long_add(g,Long_fromInt(1));f.ns=g;f.e5=b;f.eO=c;f.e$=d;f.oB=e;if(G1(a,b-8|0,c-8|0,d-8|0,b+8|0,c+8|0,d+8|0)){if(e>0){J();f.il=Long_add(Long_fromInt(A3_.data[e].lh()),a.dG);}if(!SG(a.jS,f)){Tn(a.jS,f);Vg(a.f1,f);}}}
function AJS(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Fp(a.dt,a.kV);b=0;while(b<a.b$.p){Bc(a.b$,b);c=0;while(c<a.kV.p){Bc(a.kV,c);c=c+1|0;}b=b+1|0;}DB(a.kV);b=0;a:while(true){if(b>=a.dt.p){b=0;if(b>=a.e1.p)return;d=Bc(a.e1,b);$p=1;continue _;}b:{e=Bc(a.dt,b);if(e.bt!==null){if(!e.bt.cs&&e.bt.bx===e)break b;e.bt.bx=null;e.bt=null;}if(!e.cs){$p=2;continue _;}if(e.cs){c=I(e.c/16.0);f=I(e.d/16.0);if
(CN(a,c,f))break a;d=a.dt;c=b+(-1)|0;Eo(d,b);g=0;while(g<a.b$.p){Bc(a.b$,g);g=g+1|0;}b=c;}}b=b+1|0;}$p=3;continue _;case 1:d.rZ();if(C()){break _;}b=b+1|0;if(b>=a.e1.p)return;d=Bc(a.e1,b);continue _;case 2:TA(a,e);if(C()){break _;}while(true){if(e.cs){c=I(e.c/16.0);f=I(e.d/16.0);if(CN(a,c,f)){$p=3;continue _;}d=a.dt;c=b+(-1)|0;Eo(d,b);g=0;while(g<a.b$.p){Bc(a.b$,g);g=g+1|0;}b=c;}b:{while(true){b=b+1|0;if(b>=a.dt.p){b=0;if(b>=a.e1.p)return;d=Bc(a.e1,b);$p=1;continue _;}e=Bc(a.dt,b);if(e.bt===null)break b;if(e.bt.cs)break;if
(e.bt.bx!==e)break;}e.bt.bx=null;e.bt=null;}if(e.cs)continue;else break;}continue _;case 3:$z=VO(a,c,f);if(C()){break _;}d=$z;AHJ(d,e);while(true){d=a.dt;c=b+(-1)|0;Eo(d,b);g=0;while(g<a.b$.p){Bc(a.b$,g);g=g+1|0;}b=c;while(true){b=b+1|0;if(b>=a.dt.p){b=0;if(b>=a.e1.p)return;d=Bc(a.e1,b);$p=1;continue _;}e=Bc(a.dt,b);if(e.bt!==null){if(!e.bt.cs&&e.bt.bx===e)continue;e.bt.bx=null;e.bt=null;}if(!e.cs){$p=2;continue _;}if(e.cs)break;}c=I(e.c/16.0);f=I(e.d/16.0);if(!CN(a,c,f))continue;else break;}continue _;default:
Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function TA(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(b.c);I(b.j);d=I(b.d);if(!G1(a,c-16|0,0,d-16|0,c+16|0,128,d+16|0))return;b.b6=b.c;b.bP=b.j;b.b7=b.d;b.K=b.q;b.P=b.E;e=I(b.c/16.0);f=I(b.j/16.0);g=I(b.d/16.0);if(b.bt===null){$p=1;continue _;}$p=2;continue _;case 1:b.dR();if(C()){break _;}h=I(b.c/16.0);i=I(b.j/16.0);j=I(b.d/16.0);if(e==h&&f==i&&g
==j){if(b.bx!==null){if(!b.bx.cs&&b.bx.bt===b){k=b.bx;$p=6;continue _;}b.bx.bt=null;b.bx=null;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;}if(CN(a,e,g)){$p=3;continue _;}if(!CN(a,h,j)){$p=4;continue _;}$p=5;continue _;case 2:b.yJ();if(C()){break _;}h=I(b.c/16.0);i=I(b.j
/16.0);j=I(b.d/16.0);if(e==h&&f==i&&g==j){if(b.bx!==null){if(!b.bx.cs&&b.bx.bt===b){k=b.bx;$p=6;continue _;}b.bx.bt=null;b.bx=null;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;}if(CN(a,e,g)){$p=3;continue _;}if(!CN(a,h,j)){$p=4;continue _;}$p=5;continue _;case 3:$z=VO(a,
e,g);if(C()){break _;}k=$z;O_(k,b,f);if(!CN(a,h,j)){$p=4;continue _;}$p=5;continue _;case 4:b.zU();if(C()){break _;}if(b.bx!==null){if(!b.bx.cs&&b.bx.bt===b){k=b.bx;$p=6;continue _;}b.bx.bt=null;b.bx=null;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;case 5:$z=VO(a,h,j);if
(C()){break _;}k=$z;R7(k,b);if(b.bx!==null){if(!b.bx.cs&&b.bx.bt===b){k=b.bx;$p=6;continue _;}b.bx.bt=null;b.bx=null;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;case 6:TA(a,k);if(C()){break _;}if(!(!(isNaN(b.c)?1:0)&&!(!isFinite(b.c)?1:0)))b.c=b.b6;if(!(!(isNaN(b.j)?1:0)
&&!(!isFinite(b.j)?1:0)))b.j=b.bP;if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.b7;if(!(!(isNaN(b.E)?1:0)&&!(!isFinite(b.E)?1:0)))b.E=b.P;if(!(!(isNaN(b.q)?1:0)&&!(!isFinite(b.q)?1:0)))b.q=b.K;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AHO(a,b){var c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:$z=Zm(a,c,b);if(C()){break _;}c=$z;d=0;while(d<c.p){e=Bc(c,d);if(!e.cs&&e.lp)return 0;d=d+1|0;}return 1;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AEn(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(b.N);d=I(b.R+1.0);e=I(b.H);f=I(b.Q+1.0);g=I(b.O);h=I(b.S+1.0);if(b.N<0.0)c=c+(-1)|0;if(b.H<0.0)e=e+(-1)|0;if(b.O<0.0)g=g+(-1)|0;while(c<d){i=e;while(i<f){j=g;if(j<h){J();k=A3_.data;$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=Yc(a,c,i,j);if(C()){break _;}l=$z;m=k[l];if
(m!==null&&m.bR.mk())return 1;j=j+1|0;a:while(true){if(j<h){J();k=A3_.data;continue _;}i=i+1|0;while(i>=f){c=c+1|0;if(c>=d)break a;i=e;}j=g;}return 0;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ALv(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=I(b.N);d=I(b.R+1.0);e=I(b.H);f=I(b.Q+1.0);g=I(b.O);h=I(b.S+1.0);while(c<d){i=e;while(i<f){j=g;if(j<h){$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=Yc(a,c,i,j);if(C()){break _;}k=$z;J();if(k!=A5H.b&&k!=A5f.b&&k!=A5X.b){j=j+1|0;a:while(true){if(j<h){continue _;}i=i+1|0;while(i>=f){c=c+1|0;if
(c>=d)break a;i=e;}j=g;}return 0;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Wh(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=I(b.N);f=I(b.R+1.0);g=I(b.H);h=I(b.Q+1.0);i=I(b.O);j=I(b.S+1.0);k=0;l=BS(0.0,0.0,0.0);m=h;while(e<f){n=g;while(n<h){o=i;if(o<j){J();p=A3_.data;$p=1;continue _;}n=n+1|0;}e=e+1|0;}if(GG(l)>0.0){b=Cs(l);d.f=d.f+b.t
*0.004;d.h=d.h+b.v*0.004;d.g=d.g+b.s*0.004;}return k;case 1:$z=Yc(a,e,n,o);if(C()){break _;}q=$z;r=p[q];if(r!==null&&r.bR===c){s=n+1|0;$p=2;continue _;}o=o+1|0;a:while(true){if(o<j){J();p=A3_.data;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break a;n=g;}o=i;}if(GG(l)>0.0){b=Cs(l);d.f=d.f+b.t*0.004;d.h=d.h+b.v*0.004;d.g=d.g+b.s*0.004;}return k;case 2:$z=AAd(a,e,n,o);if(C()){break _;}q=$z;if(m>=s-H0(q)){k=1;$p=3;continue _;}o=o+1|0;b:while(true){if(o<j){J();p=A3_.data;$p=1;continue _;}n=n+1|0;while(n>=h){e
=e+1|0;if(e>=f)break b;n=g;}o=i;}if(GG(l)>0.0){b=Cs(l);d.f=d.f+b.t*0.004;d.h=d.h+b.v*0.004;d.g=d.g+b.s*0.004;}return k;case 3:r.o4(a,e,n,o,d,l);if(C()){break _;}o=o+1|0;c:while(true){if(o<j){J();p=A3_.data;$p=1;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break c;n=g;}o=i;}if(GG(l)>0.0){b=Cs(l);d.f=d.f+b.t*0.004;d.h=d.h+b.v*0.004;d.g=d.g+b.s*0.004;}return k;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AI8(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=I(b.N);e=I(b.R+1.0);f=I(b.H);g=I(b.Q+1.0);h=I(b.O);i=I(b.S+1.0);while(d<e){j=f;while(j<g){k=h;if(k<i){J();l=A3_.data;$p=1;continue _;}j=j+1|0;}d=d+1|0;}return 0;case 1:$z=Yc(a,d,j,k);if(C()){break _;}m=$z;n=l[m];if(n!==null&&n.bR===c)return 1;k=k+1|0;a:while(true)
{if(k<i){J();l=A3_.data;continue _;}j=j+1|0;while(j>=g){d=d+1|0;if(d>=e)break a;j=f;}k=h;}return 0;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Ub(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=new SZ;$p=1;case 1:AD8(g,a,b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Zc(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0/((c.R-c.N)*2.0+1.0);e=1.0/((c.Q-c.H)*2.0+1.0);f=1.0/((c.S-c.O)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){if(0.0<=1.0){k=c.N+(c.R-c.N)*i;l=c.H+(c.Q-c.H)*j;m=c.O;n=c.S-c.O;o=0.0;p=BS(k,l,m+n*o);$p=1;continue _;}j=j
+e;}i=i+d;}return g/h;case 1:$z=AEp(a,p,b);if(C()){break _;}p=$z;if(p===null)g=g+1|0;h=h+1|0;q=o+f;a:while(true){if(q<=1.0){k=c.N+(c.R-c.N)*i;l=c.H+(c.Q-c.H)*j;m=c.O;n=c.S-c.O;o=q;p=BS(k,l,m+n*o);continue _;}j=j+e;while(j>1.0){i=i+d;if(i>1.0)break a;j=0.0;}q=0.0;}return g/h;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Xq(a,b,c,d,e){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;$p=1;case 1:$z=Yc(a,b,c,d);if(C()){break _;}e=$z;J();if(e!=A5H.b)return;D1(a,b+0.5,c+0.5,d+0.5,B(209),0.5,2.5999999046325684+(L(a.n)-L(a.n))*0.800000011920929);e=0;$p=2;case 2:AJ9(a,b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AQo(a,b){return null;}
function AIN(a){var b;b=new Ba;Y(b);return N(Bb(H(b,B(361)),a.dt.p));}
function AQu(a){return a.bd;}
function AIe(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=VO(a,e,f);if(C()){break _;}g=$z;if(g===null)return null;b=b&15;d=d&15;$p=2;case 2:$z=AH7(g,b,c,d);if(C()){break _;}g=$z;return g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ABj(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b>>4;g=d>>4;$p=1;case 1:$z=VO(a,f,g);if(C()){break _;}h=$z;if(h!==null)AEo(h,b&15,c,d&15,e);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function ABa(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=VO(a,e,f);if(C()){break _;}g=$z;if(g!==null)Zz(g,b&15,c,d&15);return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Wo(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:J();e=A3_.data;$p=1;case 1:$z=Yc(a,b,c,d);if(C()){break _;}b=$z;f=e[b];return f!==null?f.dy():0;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AEm(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=1;$p=1;case 1:Xm(a,c,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function ADt(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=100000;if(a.e3.p<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=Eo(a.e3,a.e3.p-1|0);$p=1;case 1:AI3(c,a);if(C()){break _;}if(a.e3.p<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=Eo(a.e3,a.e3.p-1|0);continue _;default:Es();}}CM().s(a,b,c,$p);}
function U6(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=a.e3.p;if(4<=i)i=4;j=0;while(true){if(j>=i){k=a.e3;l=new R1;l.b8=b;l.kT=c;l.fj=d;l.fk=e;l.eW=f;l.eD=g;l.ed=h;U(k,l);if(a.e3.p>100000&&a.e3.p>50000){$p=1;continue _;}return;}k=Bc(a.e3,(a.e3.p-j|0)-1|0);if(k.b8===b&&AGx(k,c,d,e,f,g,h))break;j=j+1|0;}return;case 1:ADt(a);if(C()){break _;}if
(a.e3.p<=50000)return;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Oi(a){var b;b=Mb(a,1.0);if(b!=a.fD)a.fD=b;}
function T7(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Qf(a.hR);if(!Of(a.dt,a.bd)&&a.bd!==null){B9(Ds(),B(362));b=a.bd;$p=1;continue _;}a:{c=Mb(a,1.0);if(c!=a.fD){a.fD=c;d=0;while(true){if(d>=a.b$.p)break a;RR(Bc(a.b$,d));d=d+1|0;}}}a.dG=Long_add(a.dG,Long_fromInt(1));if(Long_ne(Long_rem(a.dG,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c
=0;b=null;$p=4;continue _;case 1:AIX(a,b);if(C()){break _;}b:{c=Mb(a,1.0);if(c!=a.fD){a.fD=c;d=0;while(true){if(d>=a.b$.p)break b;RR(Bc(a.b$,d));d=d+1|0;}}}a.dG=Long_add(a.dG,Long_fromInt(1));if(Long_ne(Long_rem(a.dG,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c=0;b=null;$p=4;continue _;case 2:W_(a,c);if(C()){break _;}d=I(a.bd.c);e=I(a.bd.d);b=new Hc;f=d-64|0;g=0;h=e-64|0;i=d+64|0;j=128;c=e+64|0;$p=3;case 3:Z1(b,a,f,g,h,i,j,c);if(C()){break _;}f=0;if(f>=8000)return;a.g7=(a.g7*3|0)+a.qw|0;g=a.g7>>2;h=
((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p=5;continue _;case 4:Xm(a,c,b);if(C()){break _;}c=0;$p=2;continue _;case 5:$z=Gr(b,h,j,i);if(C()){break _;}k=$z;J();if(A5R.data[k]){l=A3_.data[k];m=a.n;$p=6;continue _;}f=f+1|0;if(f>=8000)return;a.g7=(a.g7*3|0)+a.qw|0;g=a.g7>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;continue _;case 6:l.ew(a,h,j,i,m);if(C()){break _;}f=f+1|0;if(f>=8000)return;a.g7=(a.g7*3|0)+a.qw|0;g=a.g7>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p=
5;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function W_(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=H2(a.f1);if(c!=Hq(a.jS)){d=new DK;Bl(d,B(363));M(d);}if(c>500)c=500;e=0;a:{while(true){if(e>=c)break a;f=K1(a.f1);if(!b&&Long_gt(f.il,a.dG))break;KK(a.f1,f);Ji(a.jS,f);if(G1(a,f.e5-8|0,f.eO-8|0,f.e$-8|0,f.e5+8|0,f.eO+8|0,f.e$+8|0)){g=f.e5;h=f.eO;i=f.e$;$p=1;continue _;}e=e+1|0;}}return !H2(a.f1)?0:1;case 1:$z=Yc(a,g,h,
i);if(C()){break _;}g=$z;if(g==f.oB&&g>0){J();d=A3_.data[g];g=f.e5;h=f.eO;i=f.e$;f=a.n;$p=2;continue _;}b:{while(true){e=e+1|0;if(e>=c)break b;f=K1(a.f1);if(!b&&Long_gt(f.il,a.dG))break;KK(a.f1,f);Ji(a.jS,f);if(!G1(a,f.e5-8|0,f.eO-8|0,f.e$-8|0,f.e5+8|0,f.eO+8|0,f.e$+8|0))continue;else{g=f.e5;h=f.eO;i=f.e$;continue _;}}}return !H2(a.f1)?0:1;case 2:d.ew(a,g,h,i,f);if(C()){break _;}c:{while(true){e=e+1|0;if(e>=c)break c;f=K1(a.f1);if(!b&&Long_gt(f.il,a.dG))break;KK(a.f1,f);Ji(a.jS,f);if(!G1(a,f.e5-8|0,f.eO-8|0,
f.e$-8|0,f.e5+8|0,f.eO+8|0,f.e$+8|0))continue;else{g=f.e5;h=f.eO;i=f.e$;$p=1;continue _;}}}return !H2(a.f1)?0:1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AAB(a,b,c,d){var e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=16;f=new Df;g=0;if(g>=1000)return;h=(b+D(a.n,e)|0)-D(a.n,e)|0;i=(c+D(a.n,e)|0)-D(a.n,e)|0;j=(d+D(a.n,e)|0)-D(a.n,e)|0;$p=1;case 1:$z=Yc(a,h,i,j);if(C()){break _;}k=$z;if(k>0){J();l=A3_.data[k];$p=2;continue _;}g=g+1|0;if(g>=1000)return;h=(b+D(a.n,e)|0)-D(a.n,e)|0;i=(c+D(a.n,e)|0)-D(a.n,
e)|0;j=(d+D(a.n,e)|0)-D(a.n,e)|0;continue _;case 2:l.jQ(a,h,i,j,f);if(C()){break _;}g=g+1|0;if(g>=1000)return;h=(b+D(a.n,e)|0)-D(a.n,e)|0;i=(c+D(a.n,e)|0)-D(a.n,e)|0;j=(d+D(a.n,e)|0)-D(a.n,e)|0;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Zm(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DB(a.oK);d=I((c.N-2.0)/16.0);e=I((c.R+2.0)/16.0);f=I((c.O-2.0)/16.0);g=I((c.S+2.0)/16.0);while(d<=e){h=f;while(h<=g){if(CN(a,d,h)){$p=1;continue _;}h=h+1|0;}d=d+1|0;}return a.oK;case 1:$z=VO(a,d,h);if(C()){break _;}i=$z;AE4(i,b,c,a.oK);a:while(true){h=h+1|0;while(h>g){d=d+1|0;if(d>e)break a;h=f;}if(!CN(a,d,h))continue;else
{continue _;}}return a.oK;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AHY(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=I((c.N-2.0)/16.0);e=I((c.R+2.0)/16.0);f=I((c.O-2.0)/16.0);g=I((c.S+2.0)/16.0);h=Ck();while(d<=e){i=f;while(i<=g){if(CN(a,d,i)){$p=1;continue _;}i=i+1|0;}d=d+1|0;}return h;case 1:$z=VO(a,d,i);if(C()){break _;}j=$z;AG_(j,b,c,h);a:while(true){i=i+1|0;while(i>g){d=d+1|0;if(d>e)break a;i=f;}if(!CN(a,d,i))continue;else
{continue _;}}return h;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function APF(a){return a.dt;}
function ABQ(a,b,c,d){var e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!D9(a,b,c,d))return;$p=1;case 1:$z=TY(a,b,d);if(C()){break _;}e=$z;PI(e);return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function Uu(a,b){var c,d;c=0;d=0;while(d<a.dt.p){if(Nt(b,C4(Bc(a.dt,d))))c=c+1|0;d=d+1|0;}return c;}
function AKL(a,b){var c,d;Dq(a.dt,b);c=0;while(c<a.b$.p){Bc(a.b$,c);d=0;while(d<b.p){Bc(b,d);d=d+1|0;}c=c+1|0;}}
function ALp(a,b){Dq(a.kV,b);}
function Sp(a){while(Qf(a.hR)){}}
function ADk(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Yc(a,c,d,e);if(C()){break _;}g=$z;J();h=A3_.data[g];i=A3_.data[b];$p=2;case 2:$z=i.gM(a,c,d,e);if(C()){break _;}j=$z;if(f)j=null;if(!(b>0&&h===null)&&h!==A5e&&h!==A5W&&h!==A5f&&h!==A5X&&h!==A5H)return 0;if(j===null){$p=3;continue _;}$p=4;continue _;case 3:$z=i.fh(a,c,d,e);if(C()){break _;}b=$z;return !b
?0:1;case 4:$z=AHO(a,j);if(C()){break _;}b=$z;if(!b)return 0;$p=3;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AMd(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=I(b.c);f=I(b.j);g=I(b.d);h=d+32.0|0;i=e-h|0;j=f-h|0;k=g-h|0;l=e+h|0;m=f+h|0;n=g+h|0;o=new Hc;$p=1;case 1:Z1(o,a,i,j,k,l,m,n);if(C()){break _;}return AJ3(ATX(o),b,c,d);default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AEy(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=I(b.c);h=I(b.j);i=I(b.d);j=f+32.0|0;k=g-j|0;l=h-j|0;m=i-j|0;n=g+j|0;o=h+j|0;p=i+j|0;q=new Hc;$p=1;case 1:Z1(q,a,k,l,m,n,o,p);if(C()){break _;}return ABy(ATX(q),b,c,d,e,f);default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function TK(){var b,c;A9L=$rt_createFloatArray(16);b=0;while(b<=15){c=1.0-b/15.0;A9L.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}}
function Ke(){var a=this;E.call(a);a.sr=null;a.wO=null;a.kk=0;a.A3=0.0;a.A2=0.0;a.Bm=0;a.kZ=0;a.lj=0;a.mb=0;a.oE=0;a.p9=0;a.xb=0;a.xD=0.0;a.xc=0.0;a.wL=0.0;a.m$=0;}
var A37=null;function Bv(){Bv=Bt(Ke);ATH();}
function Bn(a){var b,c,d,e,f;if(!a.m$)return 0;a.m$=0;if(a.kk>0){if(a.lj)S2(32888);if(a.kZ)S2(32886);b=a.xb;c=a.kk;d=a.sr.buffer;e=a.kk*7|0;AGn(b,0,c,new Int32Array(d,0,e));if(a.lj)Qb(32888);if(a.kZ)Qb(32886);}f=a.mb*4|0;SF(a);return f;}
function SF(a){a.kk=0;a.mb=0;a.oE=0;}
function Bu(a){Fv(a,7);}
function Fv(a,b){if(a.m$)Bn(a);a.m$=1;SF(a);a.xb=b;a.kZ=0;a.lj=0;a.p9=0;}
function AEz(a,b,c){a.lj=1;a.A3=b;a.A2=c;}
function Cg(a,b,c,d){MQ(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function FG(a,b,c,d,e){NF(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function MQ(a,b,c,d){NF(a,b,c,d,255);}
function NF(a,b,c,d,e){if(!a.p9){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.kZ=1;a.Bm=e<<24|d<<16|c<<8|b;}}
function F(a,b,c,d,e,f){AEz(a,e,f);Bd(a,b,c,d);}
function Bd(a,b,c,d){var e,f,g,h,i;if(a.oE>65534)return;a.oE=a.oE+1|0;a.kk=a.kk+1|0;e=a.mb;f=a.sr;g=a.wO;h=e+0|0;i=b+a.xD;g[h]=i;h=e+1|0;i=c+a.xc;g[h]=i;h=e+2|0;i=d+a.wL;g[h]=i;if(a.lj){h=e+3|0;i=a.A3;g[h]=i;h=e+4|0;i=a.A2;g[h]=i;}if(a.kZ){h=e+5|0;e=a.Bm;f[h]=e;}a.mb=a.mb+7|0;}
function Ec(a,b){MQ(a,b>>16&255,b>>8&255,b&255);}
function Y1(a){a.p9=1;}
function CX(a,b,c,d){B_(b,c,d);}
function Et(a,b,c,d){a.xD=b;a.xc=c;a.wL=d;}
function ATH(){var b,c;b=new Ke;Bv();b.kk=0;b.kZ=0;b.lj=0;b.mb=0;b.oE=0;b.p9=0;b.m$=0;c=new ArrayBuffer(2097152);b.sr=new Int32Array(c);b.wO=new Float32Array(c);A37=b;}
function AHZ(){var a=this;E.call(a);a.fa=0;a.e8=0;}
function EW(a,b){var c=new AHZ();AR9(c,a,b);return c;}
function AR9(a,b,c){var d,e;a.fa=b;a.e8=c;d=1;while(true){c=a.fa;e=d+1|0;if((c/e|0)<320)break;if((a.e8/e|0)<240)break;d=e;}a.fa=a.fa/d|0;a.e8=a.e8/d|0;}
function ZX(a){return a.fa;}
function Vc(a){return a.e8;}
function Fr(){E.call(this);this.lD=0.0;}
function A9R(){var a=new Fr();Lb(a);return a;}
function Lb(a){a.lD=0.0;}
function I_(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>24&255)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>24&255)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;X(3553);V(3042);X(3008);C0(770,771);Bv();p=A37;Bu(p);FG(p,i,j,k,h);q=d;r=c;Bd(p,q,r,0.0);s=b;Bd(p,s,r,0.0);FG(p,m,n,o,l);r=e;Bd(p,s,r,0.0);Bd(p,q,r,0.0);Bn(p);X(3042);V(3008);V(3553);}
function Dz(a,b,c,d,e,f){Cn(b,c,d-(Db(b,c)/2|0)|0,e,f);}
function Gm(a,b,c,d,e,f){Cn(b,c,d,e,f);}
function Ct(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;Bv();h=A37;Bu(h);i=b+0|0;j=c+g|0;k=a.lD;l=(d+0|0)*0.00390625;m=(e+g|0)*0.00390625;F(h,i,j,k,l,m);n=b+f|0;o=a.lD;k=(d+f|0)*0.00390625;F(h,n,j,o,k,m);m=c+0|0;o=a.lD;j=(e+0|0)*0.00390625;F(h,n,m,o,k,j);F(h,i,m,a.lD,l,j);Bn(h);}
function CI(){var a=this;Fr.call(a);a.J=null;a.bh=0;a.bv=0;a.bE=null;a.oj=0;a.bS=null;}
function A9S(){var a=new CI();DI(a);return a;}
function DI(a){Lb(a);a.bE=Ck();a.oj=0;}
function AA4(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.bE.p)return;f=Bc(a.bE,e);g=a.J;$p=1;case 1:Yx(f,g,b,c);if(C()){break _;}e=e+1|0;if(e>=a.bE.p)return;f=Bc(a.bE,e);g=a.J;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function UN(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.J;e=null;$p=1;case 1:Zu(d,e);if(C()){break _;}d=a.J;$p=2;case 2:AAM(d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function Vl(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.bE.p)break a;f=Bc(a.bE,e);if(Pb(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.is(f);if(C()){break _;}while(true){e=e+1|0;if(e>=a.bE.p)break;f=Bc(a.bE,e);if(!Pb(f,b,c))continue;else{continue _;}}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ATO(a,b,c,d){return;}
function AHB(a,b){return;}
function AKF(a,b,c,d){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.J=b;a.bS=b.ey;a.bh=c;a.bv=d;$p=1;case 1:a.hL();if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AKD(a){return;}
function ACp(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(EO()){$p=1;continue _;}if(!Dt())return;$p=2;continue _;case 1:Vv(a);if(C()){break _;}if(EO()){continue _;}if(!Dt())return;$p=2;case 2:AMP(a);if(C()){break _;}if(!Dt())return;continue _;default:Es();}}CM().s(a,$p);}
function Vv(a){var b,c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cm()){a.zc(Bh(AMe(),a.bh)/a.J.b5|0,(a.bv-(Bh(TU(),a.bv)/a.J.bw|0)|0)-1|0,CE());return;}b=Bh(AMe(),a.bh)/a.J.b5|0;c=(a.bv-(Bh(TU(),a.bv)/a.J.bw|0)|0)-1|0;d=CE();$p=1;case 1:a.EO(b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AMP(a){var b,c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!CD())return;Z();if(A3x===null)b=0;else{c=$rt_str(A3x.key);b=A3x===null?32:BE(c)>1?0:Cr(c,0);}d=Be();$p=1;case 1:a.nI(b,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AUm(a){return;}
function ADi(a){return;}
function W1(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;$p=1;case 1:ADK(a,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function ADK(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.J.w!==null){I_(a,0,0,a.bh,a.bv,1610941696,(-1607454656));return;}X(2896);X(2912);Bv();c=A37;d=3553;e=a.J.bi;f=B(159);$p=1;case 1:$z=ACM(e,f);if(C()){break _;}g=$z;Cf(d,g);BN(1.0,1.0,1.0,1.0);Bu(c);Ec(c,4210752);h=a.bv;i=a.bv/32.0;j=b;F(c,0.0,h,0.0,0.0,i+j);F(c,a.bh,a.bv,
0.0,a.bh/32.0,a.bv/32.0+j);k=a.bh;l=a.bh/32.0;m=0+b|0;F(c,k,0.0,0.0,l,m);F(c,0.0,0.0,0.0,0.0,m);Bn(c);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AON(a){return 1;}
function AAH(){var a=this;E.call(a);a.j8=null;a.iB=0;a.hq=0;a.tu=0;}
function AZ0(a){var b=new AAH();AVh(b,a);return b;}
function AVh(a,b){a.j8=O(E,b);a.iB=b;a.hq=0;a.tu=0;}
function P0(a,b){var c,d;c=a.hq;while(true){a.hq=a.hq+1|0;if(a.hq>=a.iB)a.hq=0;if(a.hq==c){c=a.iB;a.iB=a.iB+(a.iB/2|0)|0;d=a.j8;a.j8=O(E,a.iB);De(d,0,a.j8,0,c);return P0(a,b);}if(a.j8.data[a.hq]!==null)continue;else break;}a.j8.data[a.hq]=b;a.tu=a.tu+1|0;return a.hq;}
function AIr(a,b){if(b<a.iB&&b>=0)return a.j8.data[b];return null;}
function Kw(){E.call(this);}
function DX(){var a=this;Kw.call(a);a.dW=0.0;a.dU=0.0;a.dV=0.0;a.dT=0.0;a.dZ=0.0;a.d0=0.0;a.dX=0.0;a.dY=0.0;a.d4=0.0;a.d2=0.0;a.d3=0.0;a.d1=0.0;a.gb=0.0;a.gc=0.0;a.f_=0.0;a.ga=0.0;}
function K6(){var a=new DX();AVr(a);return a;}
function AVr(a){EG(a);}
function EG(a){a.dW=1.0;a.dU=0.0;a.dV=0.0;a.dT=0.0;a.dZ=0.0;a.d0=1.0;a.dX=0.0;a.dY=0.0;a.d4=0.0;a.d2=0.0;a.d3=1.0;a.d1=0.0;a.gb=0.0;a.gc=0.0;a.f_=0.0;a.ga=1.0;return a;}
function IX(a){a.dW=0.0;a.dU=0.0;a.dV=0.0;a.dT=0.0;a.dZ=0.0;a.d0=0.0;a.dX=0.0;a.dY=0.0;a.d4=0.0;a.d2=0.0;a.d3=0.0;a.d1=0.0;a.gb=0.0;a.gc=0.0;a.f_=0.0;a.ga=0.0;return a;}
function FT(a,b){a.dW=b.dW;a.dU=b.dU;a.dV=b.dV;a.dT=b.dT;a.dZ=b.dZ;a.d0=b.d0;a.dX=b.dX;a.dY=b.dY;a.d4=b.d4;a.d2=b.d2;a.d3=b.d3;a.d1=b.d1;a.gb=b.gb;a.gc=b.gc;a.f_=b.f_;a.ga=b.ga;return a;}
function Qz(a,b){Cu(b,a.dW);Cu(b,a.dU);Cu(b,a.dV);Cu(b,a.dT);Cu(b,a.dZ);Cu(b,a.d0);Cu(b,a.dX);Cu(b,a.dY);Cu(b,a.d4);Cu(b,a.d2);Cu(b,a.d3);Cu(b,a.d1);Cu(b,a.gb);Cu(b,a.gc);Cu(b,a.f_);Cu(b,a.ga);return a;}
function LI(a,b){b=b.data;b[0]=a.dW;b[1]=a.dU;b[2]=a.dV;b[3]=a.dT;b[4]=a.dZ;b[5]=a.d0;b[6]=a.dX;b[7]=a.dY;b[8]=a.d4;b[9]=a.d2;b[10]=a.d3;b[11]=a.d1;b[12]=a.gb;b[13]=a.gc;b[14]=a.f_;b[15]=a.ga;return a;}
function AZf(a,b){return Ro(a,b,a);}
function Vz(a,b){a.dW=a.dW*b.eX;a.dU=a.dU*b.eX;a.dV=a.dV*b.eX;a.dT=a.dT*b.eX;a.dZ=a.dZ*b.eZ;a.d0=a.d0*b.eZ;a.dX=a.dX*b.eZ;a.dY=a.dY*b.eZ;a.d4=a.d4*b.eY;a.d2=a.d2*b.eY;a.d3=a.d3*b.eY;a.d1=a.d1*b.eY;return a;}
function ANJ(a,b,c){return S5(a,b,c,a);}
function S5(a,b,c,d){return AWA(b,c,a,d);}
function AWA(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=K6();f=b;g=FK(f);h=FB(f);i=1.0-g;j=c.eX*c.eZ;k=c.eZ*c.eY;l=c.eX*c.eY;m=c.eX*h;n=c.eZ*h;o=c.eY*h;p=c.eX*c.eX*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.eZ*c.eZ*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.eY*c.eY*i+g;z=d.dW*p+d.dZ*q+d.d4*s;ba=d.dU*p+d.d0*q+d.d2*s;bb=d.dV*p+d.dX*q+d.d3*s;bc=d.dT*p+d.dY*q+d.d1*s;bd=d.dW*t+d.dZ*u+d.d4*v;be=d.dU*t+d.d0*u+d.d2*v;bf=d.dV*t+d.dX*u+d.d3*v;r=d.dT*t+d.dY*u+d.d1*v;e.d4=d.dW*w+d.dZ*x+d.d4*
y;e.d2=d.dU*w+d.d0*x+d.d2*y;e.d3=d.dV*w+d.dX*x+d.d3*y;e.d1=d.dT*w+d.dY*x+d.d1*y;e.dW=z;e.dU=ba;e.dV=bb;e.dT=bc;e.dZ=bd;e.d0=be;e.dX=bf;e.dY=r;return e;}
function Ro(a,b,c){if(c===null)c=K6();c.gb=c.gb+a.dW*b.eX+a.dZ*b.eZ+a.d4*b.eY;c.gc=c.gc+a.dU*b.eX+a.d0*b.eZ+a.d2*b.eY;c.f_=c.f_+a.dV*b.eX+a.dX*b.eZ+a.d3*b.eY;c.ga=c.ga+a.dT*b.eX+a.dY*b.eZ+a.d1*b.eY;return c;}
function JJ(a,b){var c;a:{if(b instanceof DX){b:{c:{b=b;if(a.dW!==b.dW)break c;if(a.dU!==b.dU)break c;if(a.dV!==b.dV)break c;if(a.dT!==b.dT)break c;if(a.dZ!==b.dZ)break c;if(a.d0!==b.d0)break c;if(a.dX!==b.dX)break c;if(a.dY!==b.dY)break c;if(a.d4!==b.d4)break c;if(a.d2!==b.d2)break c;if(a.d3!==b.d3)break c;if(a.d1!==b.d1)break c;if(a.gb!==b.gb)break c;if(a.gc!==b.gc)break c;if(a.f_!==b.f_)break c;if(a.ga===b.ga){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function LY(){}
function HD(){E.call(this);}
function St(){}
function LM(){}
function O$(){}
function Kq(){}
function Rj(){var a=this;HD.call(a);a.eX=0.0;a.eZ=0.0;a.eY=0.0;}
function A9T(){var a=new Rj();AY1(a);return a;}
function AY1(a){return;}
function Kf(a,b,c,d){a.eX=b;a.eZ=c;a.eY=d;}
function Sr(){}
function O5(){}
function F8(){var a=this;HD.call(a);a.ka=0.0;a.kb=0.0;a.j_=0.0;a.nM=0.0;}
function AT8(){var a=new F8();ARP(a);return a;}
function ARP(a){return;}
function RS(a,b){a.ka=b.ka;a.kb=b.kb;a.j_=b.j_;a.nM=b.nM;return a;}
function AZY(a){return a.ka;}
function ANn(a){return a.kb;}
function ARX(a){return a.j_;}
function AVR(a){return a.nM;}
function P4(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(C4(a)!==C4(b))return 0;c=b;if(a.ka===c.ka&&a.kb===c.kb&&a.j_===c.j_&&a.nM===c.nM)return 1;return 0;}
function PU(){var a=this;E.call(a);a.y7=null;a.y6=null;}
function ADI(a){var b,c;b=a.y7;c=a.y6;EL(b);Cx(c,null);}
function AJz(){EA.call(this);}
function AVp(a){var b=new AJz();AQV(b,a);return b;}
function AQV(a,b){S0(a,b);}
function GR(){}
function QT(){}
function YC(){var a=this;E.call(a);a.fc=null;a.hD=null;a.jC=null;a.ov=0;a.py=0;a.hr=null;}
function AEB(a,b,c,d){var e=new YC();AN5(e,a,b,c,d);return e;}
function AN5(a,b,c,d,e){a.hr=b;a.py=a.hr.d8;a.fc=c;a.hD=d;a.ov=e;}
function EH(a){return a.fc===null?0:1;}
function EE(a){var b;OE(a);if(a.fc===null){b=new Is;Q(b);M(b);}b=a.fc.wN;a.jC=a.fc;a.hD=a.fc;a.fc=a.fc.gK;a.ov=a.ov+1|0;return b;}
function ACy(a){var b,c;if(a.jC===null){b=new DK;Q(b);M(b);}b=a.hr;c=a.jC;if(c.hB===null)b.n_=c.gK;else c.hB.gK=c.gK;if(c.gK===null)b.oM=c.hB;else c.gK.hB=c.hB;b.f7=b.f7-1|0;b.d8=b.d8+1|0;if(a.jC===a.hD){a.hD=!EH(a)?null:a.fc.hB;a.ov=a.ov-1|0;}else if(a.jC===a.fc)a.fc=!VL(a)?null:a.hD.gK;a.py=a.hr.d8;a.jC=null;}
function VL(a){return a.hD===null?0:1;}
function Xb(a,b){var c;OE(a);c=new OO;c.wN=b;c.hB=a.hD;c.gK=a.fc;if(a.hD!==null)a.hD.gK=c;else a.hr.n_=c;if(a.fc!==null)a.fc.hB=c;else a.hr.oM=c;a.hD=c;b=a.hr;b.f7=b.f7+1|0;b=a.hr;b.d8=b.d8+1|0;a.py=a.hr.d8;a.jC=null;}
function OE(a){var b;if(a.py>=a.hr.d8)return;b=new Jg;Q(b);M(b);}
function OO(){var a=this;E.call(a);a.wN=null;a.gK=null;a.hB=null;}
function A9U(){var a=new OO();ASw(a);return a;}
function ASw(a){return;}
function I8(){var a=this;E.call(a);a.wK=null;a.jA=null;a.gv=null;a.kQ=null;a.zb=null;a.ur=null;a.q9=0;a.AB=0;}
var A9V=0;var A36=null;function ACM(a,b){var c,d,e,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Cz(A36,b);if(c!==null)return c.f4;try{AAI(a.jA);S1(a.jA);d=J7(a.jA,0);if(!Lp(b,B(364))){A9V=1;e=IH(b);$p=1;continue _;}a.q9=1;e=IH(JW(b,7));$p=2;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){}else{throw $$e;}}b=new B5;Bl(b,B(365));M(b);case 1:a:{try{$z=U$(a,e);if(C()){break _;}c=$z;J0(a,c,d);A9V=0;On(A36,b,CG(d));}catch
($$e){$$je=Bf($$e);if($$je instanceof BU){break a;}else{throw $$e;}}return d;}b=new B5;Bl(b,B(365));M(b);case 2:a:{try{$z=U$(a,e);if(C()){break _;}c=$z;J0(a,c,d);a.q9=0;On(A36,b,CG(d));}catch($$e){$$je=Bf($$e);if($$je instanceof BU){break a;}else{throw $$e;}}return d;}b=new B5;Bl(b,B(365));M(b);default:Es();}}CM().s(a,b,c,d,e,$p);}
function ACS(a,b){var c;D3(a.jA);S1(a.jA);c=J7(a.jA,0);J0(a,b,c);BK(a.wK,CG(c),b);return c;}
function J0(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;DJ(a,c);if(!A9V){DQ(3553,10241,9728);DQ(3553,10240,9728);}else{DQ(3553,10241,9986);DQ(3553,10240,9728);DQ(3553,33085,4);}if(a.AB){DQ(3553,10241,9729);DQ(3553,10240,9729);}if(!a.q9){DQ(3553,10242,10497);DQ(3553,10243,10497);}else{DQ(3553,10242,10496);DQ(3553,10243,10496);}d=b.u7;e=b.Ac;f=O3(b);g=$rt_createByteArray(Bh(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if
(a.ur!==null&&a.ur.d5){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)|0)/100|0;m=(o+(m*70|0)|0)/100|0;n=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}a:{D3(a.gv);Q7(a.gv,g);b=a.gv;D_(b,0);Lk(b,h.length);Pz(3553,0,6408,d,e,0,6408,5121,a.gv);if(A9V){p=1;while(true){if(p>4)break a;o=d>>(p-1|0);q=d>>p;r=e>>p;D3(a.kQ);s=0;while(s<q){t=0;while(t<r){b=a.gv;c=s*2|0;i=c+0|0;k=t*2|0;n=Bh(k+0|0,o);u=Je(b,(i+n|0)*4|0);b=a.gv;c=c+1|0;v=Je(b,(c+n|0)*4|0);b=a.gv;k=
Bh(k+1|0,o);w=Je(b,(c+k|0)*4|0);x=Je(a.gv,(i+k|0)*4|0);y=Jz(a,Jz(a,u,v),Jz(a,w,x));WQ(a.kQ,(s+Bh(t,q)|0)*4|0,y);t=t+1|0;}s=s+1|0;}Pz(3553,p,6408,q,r,0,6408,5121,a.kQ);z=a.gv;a.gv=a.kQ;a.kQ=z;p=p+1|0;}}}}
function ZD(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=B(366);$p=1;case 1:$z=ACM(a,b);if(C()){break _;}d=$z;return d;default:Es();}}CM().s(a,b,c,d,$p);}
function F7(a,b){U(a.zb,b);b.nH();}
function Jz(a,b,c){return ((((b&(-16777216))>>24&255)+((c&(-16777216))>>24&255)|0)>>1<<24)+(((b&16711422)+(c&16711422)|0)>>1)|0;}
function U$(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AAl(b);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,$p);}
function DJ(a,b){AEU(A35,1);if(b<0){AEU(A35,0);return;}Cf(3553,b);AEU(A35,0);}
function Zf(){A9V=0;}
function Ss(){var a=this;E.call(a);a.qu=null;a.u6=0;a.rz=0;}
function A9W(a,b,c){var d=new Ss();AJj(d,a,b,c);return d;}
function AJj(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.qu=$rt_createIntArray(256);a.u6=0;e=IH(c);$p=1;case 1:$z=AAl(e);if(C()){break _;}f
=$z;g=f.u7;e=O3(f);h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+Bh(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.qu.data[h]=k+2|0;h=h+1|0;}a.u6=ACS(d,f);a.rz=HA(288);Bv();p=A37;q=0;while(q<256){EV(a.rz+q|0,4864);Bu(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;F(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;F(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;F(p,7.989999771118164,0.0,0.0,x,y);F(p,0.0,0.0,0.0,u,y);Bn(p);DM();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.d5){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}EV((a.rz+256|0)+l|0,4864);Fh(ba/255.0,bb/255.0,bc/255.0);DM();l=l+1|0;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function Cn(a,b,c,d,e){PG(a,b,c+1|0,d+1|0,e,1);D5(a,b,c,d,e);}
function D5(a,b,c,d,e){PG(a,b,c,d,e,0);}
function PG(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Cf(3553,a.u6);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BN(g,h,i,j);BW();Br(c,d,0.0);k=0;while(k<BE(b)){c=k;while(true){d=BE(b);k=c+1|0;if(d<=k)break;if(Cr(b,c)!=167)break;l=QZ(B(367),Cr(AFm(b),k));c=c+2|0;}if(c<BE(b)){m=RB(Cr(b,c));if(m>=0){E7((a.rz+m|0)+32|0);Br(a.qu.data[m+32|0],0.0,0.0);}}}By();}
function Db(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<BE(b)){if(Cr(b,d)==167)d=d+1|0;else{e=RB(Cr(b,d));if(e>=0)c=c+a.qu.data[e+32|0]|0;}d=d+1|0;}return c;}
function NE(){var a=this;E.call(a);a.B_=0;a.B$=0;}
function A9X(){var a=new NE();AZi(a);return a;}
function AZi(a){return;}
function UA(a){AHt(1);a.B_=0;a.B$=0;}
function AA0(a){JH();KI();AHt(0);}
function AFV(){var a=this;DZ.call(a);a.nD=null;a.pB=null;a.nb=null;a.rc=null;a.rt=0;}
function A0z(){var a=new AFV();AU7(a);return a;}
function AU7(a){J();Gv(a,A5e.W+1|0);a.nD=$rt_createFloatArray(256);a.pB=$rt_createFloatArray(256);a.nb=$rt_createFloatArray(256);a.rc=$rt_createFloatArray(256);a.rt=0;a.uG=2;}
function AR7(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.rt=a.rt+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=c-2|0;while(e<=c){f=b&15;g=e&15;d=d+a.nD.data[f+(g*16|0)|0];e=e+1|0;}h=a.pB.data;i=b+(c*16|0)|0;h[i]=d/3.200000047683716+a.nb.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}b=0;while(b<16){c=0;while(c<16){j=a.nb.data;i=b+(c*16|0)|0;j[i]=j[i]+a.rc.data[i]*0.05000000074505806;if(a.nb.data[i]<0.0)a.nb.data[i]=0.0;j=a.rc.data;j[i]=j[i]-0.30000001192092896;if(BI()<0.2)a.rc.data[i]=0.5;c=c+1|0;}b=b+1|0;}j=a.pB;a.pB=a.nD;a.nD
=j;c=0;while(c<256){d=a.nD.data[(c-(a.rt*16|0)|0)&255];if(d>1.0)d=1.0;if(d<0.0)d=0.0;k=d*d;i=32.0+k*32.0|0;l=50.0+k*64.0|0;m=255;n=146.0+k*50.0|0;if(a.lq){b=i*30|0;i=((b+(l*59|0)|0)+2805|0)/100|0;l=(b+(l*70|0)|0)/100|0;m=(b+17850|0)/100|0;}j=a.c9.data;b=c*4|0;j[b+0|0]=i<<24>>24;a.c9.data[b+1|0]=l<<24>>24;a.c9.data[b+2|0]=m<<24>>24;a.c9.data[b+3|0]=n<<24>>24;c=c+1|0;}}
function X2(){var a=this;DZ.call(a);a.m_=null;a.pM=null;a.iU=null;a.q4=null;a.rJ=0;}
function A19(){var a=new X2();AUr(a);return a;}
function AUr(a){J();Gv(a,A5f.W+1|0);a.m_=$rt_createFloatArray(256);a.pM=$rt_createFloatArray(256);a.iU=$rt_createFloatArray(256);a.q4=$rt_createFloatArray(256);a.rJ=0;a.uG=2;}
function AYc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.rJ=a.rJ+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bm(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bm(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){j=(g+e|0)&15;h=(i+f|0)&15;d=d+a.m_.data[j+(h*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.pM.data;l=b+(c*16|0)|0;d=d/10.0;m=a.iU.data;e=(b+0|0)&15;j=((c+0|0)&15)*16|0;n=m[e+j|0];m=a.iU.data;h=h&15;n=n+m[h+j|0];m=a.iU.data;c=c+1|0;j=(c&15)*16|0;k[l]
=d+(n+m[h+j|0]+a.iU.data[e+j|0])/4.0*0.800000011920929;m=a.iU.data;m[l]=m[l]+a.q4.data[l]*0.009999999776482582;if(a.iU.data[l]<0.0)a.iU.data[l]=0.0;m=a.q4.data;m[l]=m[l]-0.05999999865889549;if(BI()<0.005)a.q4.data[l]=1.5;}b=b+1|0;}m=a.pM;a.pM=a.m_;a.m_=m;c=0;while(c<256){d=a.m_.data[(c-((a.rJ/3|0)*16|0)|0)&255]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;j=d*100.0+155.0|0;n=d*d;h=n*255.0|0;l=n*d*d*128.0|0;if(a.lq){b=j*30|0;j=((b+(h*59|0)|0)+(l*11|0)|0)/100|0;h=(b+(h*70|0)|0)/100|0;l=(b+(l*70|0)|0)/100|0;}m=a.c9.data;b
=c*4|0;m[b+0|0]=j<<24>>24;a.c9.data[b+1|0]=h<<24>>24;a.c9.data[b+2|0]=l<<24>>24;a.c9.data[b+3|0]=(-1);c=c+1|0;}}
function AMn(){var a=this;DZ.call(a);a.le=null;a.nj=null;}
function AOX(a){var b=new AMn();ARu(b,a);return b;}
function ARu(a,b){J();Gv(a,A5H.W+(b*16|0)|0);a.le=$rt_createFloatArray(320);a.nj=$rt_createFloatArray(320);}
function AUw(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<16){c=0;while(c<20){d=18;e=a.le.data;f=c+1|0;g=e[b+((f%20|0)*16|0)|0]*18.0;h=b-1|0;while(h<=(b+1|0)){i=c;while(i<=f){if(h>=0&&i>=0&&h<16&&i<20)g=g+a.le.data[h+(i*16|0)|0];d=d+1|0;i=i+1|0;}h=h+1|0;}e=a.nj.data;j=b+(c*16|0)|0;e[j]=g/(d*1.059999942779541);if(c>=19)a.nj.data[j]=BI()*BI()*BI()*4.0+BI()*0.10000000149011612+0.20000000298023224;c=f;}b=b+1|0;}e=a.nj;a.nj=a.le;a.le=e;f=0;while(f<256){k=a.le.data[f]*1.7999999523162842;if(k>1.0)k=1.0;if(k<0.0)k=
0.0;l=k*155.0+100.0|0;g=k*k;m=g*255.0|0;j=g*k*k*k*k*k*k*k*k*255.0|0;n=255;if(k<0.5)n=0;if(a.lq){c=l*30|0;l=((c+(m*59|0)|0)+(j*11|0)|0)/100|0;m=(c+(m*70|0)|0)/100|0;j=(c+(j*70|0)|0)/100|0;}e=a.c9.data;b=f*4|0;e[b+0|0]=l<<24>>24;a.c9.data[b+1|0]=m<<24>>24;a.c9.data[b+2|0]=j<<24>>24;a.c9.data[b+3|0]=n<<24>>24;f=f+1|0;}}
function Tw(){}
function Wi(){var a=this;E.call(a);a.hJ=null;a.bC=null;a.hI=null;a.eb=null;a.f5=null;a.cJ=null;a.c0=0;a.c_=0;a.i_=0;a.wv=0;a.cn=null;a.AL=null;a.n4=0;a.m5=0;a.vk=0;a.u1=0;a.oR=0;a.oS=0;a.oT=0;a.ro=0;a.rn=0;a.rp=0;a.qr=0;a.rl=0;a.ke=0;a.u5=0;a.Dn=null;a.DP=null;a.qv=0;a.qf=0;a.Aw=0;a.qL=0;a.o0=0;a.nv=null;a.Di=0;a.CV=0;a.p0=0.0;a.pZ=0.0;a.pY=0.0;a.rW=0.0;a.pr=0;}
function A0R(a,b){var c=new Wi();ATD(c,a,b);return c;}
function ATD(a,b,c){var d,e,f,g,h,i,j;a.hJ=Ck();a.eb=Ck();a.n4=0;a.qr=(-1);a.Dn=$rt_createIntArray(50000);a.DP=Oq(64);a.nv=Ck();a.Di=0;a.CV=HA(1);a.p0=(-9999.0);a.pZ=(-9999.0);a.pY=(-9999.0);a.pr=0;a.cn=b;a.hI=c;a.wv=HA(786432);a.m5=HA(3);BW();EV(a.m5,4864);Vd(a);DM();By();Bv();d=A37;a.vk=a.m5+1|0;EV(a.vk,4864);e=(-384);while(e<=384){f=(-384);while(f<=384){Bu(d);g=e+0|0;h=f+0|0;Bd(d,g,16.0,h);i=e+64|0;Bd(d,i,16.0,h);f=f+64|0;h=f;Bd(d,i,16.0,h);Bd(d,g,16.0,h);Bn(d);}e=e+64|0;}DM();a.u1=a.m5+2|0;EV(a.u1,4864);Bu(d);f
=(-384);while(f<=384){j=(-384);while(j<=384){g=f+64|0;h=j+0|0;Bd(d,g,(-16.0),h);i=f+0|0;Bd(d,i,(-16.0),h);j=j+64|0;h=j;Bd(d,i,(-16.0),h);Bd(d,g,(-16.0),h);}f=f+64|0;}Bn(d);DM();}
function Vd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;b=new Df;Bv();c=A37;Bu(c);d=0;while(d<1500){a:{e=L(b)*2.0-1.0;f=L(b)*2.0-1.0;g=L(b)*2.0-1.0;h=0.25+L(b)*0.25;i=e*e+f*f+g*g;if(i<1.0&&i>0.01){j=1.0/DL(i);e=e*j;f=f*j;g=g*j;k=e*100.0;l=f*100.0;m=g*100.0;n=CB(e,g);o=FB(n);p=FK(n);q=CB(DL(e*e+g*g),f);r=FB(q);s=FK(q);t=Cb(b)*3.141592653589793*2.0;u=FB(t);v=FK(t);w=0;g=0.0*s;x=0.0*r;while(true){if(w>=4)break a;y=((w&2)-1|0)*h;w=w+1|0;z=((w&2)-1|0)*h;j=y*v-z*u;ba=z*v+y*u;bb=j*r+g;bc
=x-j*s;bd=bc*o-ba*p;be=ba*o+bc*p;Bd(c,k+bd,l+bb,m+be);}}}d=d+1|0;}Bn(c);}
function Oa(a,b){if(a.bC!==null)AFS(a.bC,a);a.p0=(-9999.0);a.pZ=(-9999.0);a.pY=(-9999.0);A5G.mK=b;a.bC=b;a.AL=AXP(b);if(b!==null){AIk(b,a);JB(a);}}
function JB(a){var b,c,d,e,f,g,h,i;a:{J();AFo(A4n,a.cn.r.lJ);a.qr=a.cn.r.ha;if(a.cJ!==null){b=0;while(true){if(b>=a.cJ.data.length)break a;ALZ(a.cJ.data[b]);b=b+1|0;}}}b=64<<(3-a.qr|0);if(b>400)b=400;b=(b/16|0)+1|0;a.c0=b;a.c_=8;a.i_=b;a.cJ=O(G7,Bh(Bh(a.c0,a.c_),a.i_));a.f5=O(G7,Bh(Bh(a.c0,a.c_),a.i_));c=0;d=0;a.oR=0;a.oS=0;a.oT=0;a.ro=a.c0;a.rn=a.c_;a.rp=a.i_;e=0;while(e<a.eb.p){Bc(a.eb,e).h5=0;e=e+1|0;}DB(a.eb);f=0;while(f<a.c0){g=0;while(g<a.c_){h=0;while(h<a.i_){if(a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0]
!==null)Fp(a.hJ,a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0].fG);a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0]=A1j(a.bC,a.hJ,f*16|0,g*16|0,h*16|0,16,a.wv+c|0);a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0].Fm=0;a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0].vi=1;a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0].eU=1;i=a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0];b=d+1|0;i.Ee=d;Jh(a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0]);a.f5.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0]=a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0];U(a.eb,a.cJ.data[Bh(Bh(h,a.c_)+g|0,a.c0)+f|0]);c=c+3|0;h=
h+1|0;d=b;}g=g+1|0;}f=f+1|0;}if(a.bC!==null){i=a.bC.bd;Qa(a,I(i.c),I(i.j),I(i.d));Nk(a.f5,AQ2(i));}}
function Yh(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:ALD(A9J,a.bC,a.hI,a.cn.ey,a.cn.e,d);ACu(A5G,a.bC,a.hI,a.cn.ey,a.cn.e,a.cn.r,d);a.rl=0;a.ke=0;a.u5=0;e=a.bC.bd;f=e.b6;g=e.c-e.b6;h=d;A9Y=f+g*h;A9Z=e.bP+(e.j-e.bP)*h;A90=e.b7+(e.d-e.b7)*h;A91=e.b6+(e.c-e.b6)*h;A92=e.bP+(e.j-e.bP)*h;A93=e.b7+(e.d-e.b7)*h;i=a.bC.dt;a.rl=i.p;j=0;while(true){if(j>=i.p){j
=0;if(j>=a.hJ.p)return;b=A9J;c=Bc(a.hJ,j);$p=1;continue _;}k=Bc(i,j);if(Pn(k,b)&&KN(c,k.G)){if(k!==a.bC.bd)break;if(a.cn.r.cf)break;}j=j+1|0;}a.ke=a.ke+1|0;e=A5G;$p=2;continue _;case 1:UW(b,c,d);if(C()){break _;}j=j+1|0;if(j>=a.hJ.p)return;b=A9J;c=Bc(a.hJ,j);continue _;case 2:AHS(e,k,d);if(C()){break _;}while(true){j=j+1|0;if(j>=i.p){j=0;if(j>=a.hJ.p)return;b=A9J;c=Bc(a.hJ,j);$p=1;continue _;}k=Bc(i,j);if(!Pn(k,b))continue;if(!KN(c,k.G))continue;if(k!==a.bC.bd)break;if(!a.cn.r.cf)continue;else break;}a.ke=a.ke
+1|0;e=A5G;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AGg(a){var b;b=new Ba;Y(b);return N(Bb(H(Bb(H(Bb(H(Bb(H(Bb(H(b,B(368)),a.qL),B(17)),a.qv),B(369)),a.qf),B(370)),a.Aw),B(371)),a.o0));}
function T5(a){var b;b=new Ba;Y(b);return N(Bb(H(Bb(H(Bb(H(Bb(H(b,B(372)),a.ke),B(17)),a.rl),B(373)),a.u5),B(374)),(a.rl-a.u5|0)-a.ke|0));}
function Qa(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;c=b+(-8)|0;d=d+(-8)|0;a.oR=2147483647;a.oS=2147483647;a.oT=2147483647;a.ro=(-2147483648);a.rn=(-2147483648);a.rp=(-2147483648);e=a.c0*16|0;f=e/2|0;g=0;h=e-1|0;while(g<a.c0){i=g*16|0;j=(i+f|0)-c|0;if(j<0)j=j-h|0;i=i-Bh(j/e|0,e)|0;if(i<a.oR)a.oR=i;if(i>a.ro)a.ro=i;k=0;while(k<a.i_){l=k*16|0;m=(l+f|0)-d|0;if(m<0)m=m-h|0;j=l-Bh(m/e|0,e)|0;if(j<a.oT)a.oT=j;if(j>a.rp)a.rp=j;n=0;while(n<a.c_){o=n*16|0;if(o<a.oS)a.oS=o;if(o>a.rn)a.rn=o;p=a.cJ.data[Bh(Bh(k,a.c_)+n|0,
a.c0)+g|0];q=p.h5;Pr(p,i,o,j);if(!q&&p.h5)U(a.eb,p);n=n+1|0;}k=k+1|0;}g=g+1|0;}}
function RG(a,b,c,d){var e,f,g;if(a.cn.r.ha!=a.qr)JB(a);if(!c){a.qv=0;a.qf=0;a.Aw=0;a.qL=0;a.o0=0;}e=b.c-a.p0;f=b.j-a.pZ;g=b.d-a.pY;if(e*e+f*f+g*g>16.0){a.p0=b.c;a.pZ=b.j;a.pY=b.d;Qa(a,I(b.c),I(b.j),I(b.d));Nk(a.f5,AQ2(b));}return 0+UC(a,0,a.f5.data.length,c,d)|0;}
function UC(a,b,c,d,e){var f,g,h,i,j,k,l;DB(a.nv);f=0;while(b<c){if(!d){a.qv=a.qv+1|0;if(a.f5.data[b].gh.data[d])a.o0=a.o0+1|0;else if(a.f5.data[b].eU)a.qL=a.qL+1|0;else a.qf=a.qf+1|0;}if(!a.f5.data[b].gh.data[d]&&a.f5.data[b].eU&&a.f5.data[b].vi&&M9(a.f5.data[b],d)>=0){U(a.nv,a.f5.data[b]);f=f+1|0;}b=b+1|0;}g=a.cn.e;h=g.b6+(g.c-g.b6)*e;i=g.bP+(g.j-g.bP)*e;j=g.b7+(g.d-g.b7)*e;k=0;while(k<a.nv.p){l=Bc(a.nv,k);BW();Br(l.yA-h,l.AX-i,l.Aa-j);E7(M9(l,d));By();k=k+1|0;}return f;}
function GK(a){a.n4=a.n4+1|0;}
function YQ(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:X(3553);c=Mw(a.bC,b);d=c.t;e=c.v;f=c.s;if(a.cn.r.d5){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}Fh(d,e,f);Bv();h=A37;FD(0);V(2912);Fh(d,e,f);E7(a.vk);V(3553);X(2912);X(3008);V(3042);C0(1,1);BW();BN(1.0,1.0,1.0,1.0);Br(0.0,0.0,0.0);Bq(0.0,0.0,0.0,1.0);Bq(Gq(a.bC,b)*360.0,
1.0,0.0,0.0);i=3553;c=a.hI;j=B(375);$p=1;case 1:$z=ACM(c,j);if(C()){break _;}k=$z;Cf(i,k);Bu(h);F(h,(-30.0),100.0,(-30.0),0.0,0.0);F(h,30.0,100.0,(-30.0),1.0,0.0);F(h,30.0,100.0,30.0,1.0,1.0);F(h,(-30.0),100.0,30.0,0.0,1.0);Bn(h);i=3553;c=a.hI;j=B(376);$p=2;case 2:$z=ACM(c,j);if(C()){break _;}k=$z;Cf(i,k);Bu(h);F(h,(-20.0),(-100.0),20.0,1.0,1.0);F(h,20.0,(-100.0),20.0,0.0,1.0);F(h,20.0,(-100.0),(-20.0),0.0,0.0);F(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Bn(h);X(3553);g=AEu(a.bC,b);if(g>0.0){BN(g,g,g,g);E7(a.m5);}BN(1.0,
1.0,1.0,1.0);X(3042);V(3008);V(2912);By();Fh(d*0.20000000298023224+0.03999999910593033,e*0.20000000298023224+0.03999999910593033,f*0.6000000238418579+0.10000000149011612);X(3553);E7(a.u1);V(3553);FD(1);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function UL(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.cn.r.lJ){$p=2;continue _;}X(2884);c=a.cn.e.bP;d=a.cn.e.j-a.cn.e.bP;e=b;f=c+d*e;g=32;Bv();h=A37;i=3553;j=a.hI;k=B(377);$p=1;case 1:$z
=ACM(j,k);if(C()){break _;}l=$z;Cf(i,l);V(3042);C0(770,771);j=PX(a.bC,b);m=j.t;n=j.v;o=j.s;if(a.cn.r.d5){p=m*30.0;m=(p+n*59.0+o*11.0)/100.0;n=(p+n*70.0)/100.0;o=(p+o*70.0)/100.0;}q=a.bC.bd.bH+(a.bC.bd.c-a.bC.bd.bH)*e+(a.n4+b)*0.029999999329447746;c=a.bC.bd.bG+(a.bC.bd.d-a.bC.bd.bG)*e;i=I(q/2048.0);l=I(c/2048.0);d=q-(i*2048|0);c=c-(l*2048|0);p=120.0-f+0.33000001311302185;r=d*4.8828125E-4;s=c*4.8828125E-4;Bu(h);FG(h,m,n,o,0.800000011920929);d=p;t=(-256);while(t<256){u=(-256);while(u<256){v=t+0|0;c=v;w=u+g|0;e
=w;q=v*4.8828125E-4+r;x=w*4.8828125E-4+s;F(h,c,d,e,q,x);v=t+g|0;y=v;z=v*4.8828125E-4+r;F(h,y,d,e,z,x);u=u+0|0;e=u;x=u*4.8828125E-4+s;F(h,y,d,e,z,x);F(h,c,d,e,q,x);u=w;}t=t+g|0;}Bn(h);BN(1.0,1.0,1.0,1.0);X(3042);V(2884);return;case 2:WW(a,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function WW(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:X(2884);c=a.cn.e.bP;d
=a.cn.e.j-a.cn.e.bP;e=b;f=c+d*e;Bv();g=A37;h=12.0;c=(a.bC.bd.bH+(a.bC.bd.c-a.bC.bd.bH)*e+(a.n4+b)*0.029999999329447746)/12.0;d=(a.bC.bd.bG+(a.bC.bd.d-a.bC.bd.bG)*e)/12.0+0.33000001311302185;i=108.0-f+0.33000001311302185;j=I(c/2048.0);k=I(d/2048.0);e=c-(j*2048|0);d=d-(k*2048|0);l=3553;m=a.hI;n=B(377);$p=1;case 1:$z=ACM(m,n);if(C()){break _;}j=$z;Cf(l,j);V(3042);C0(770,771);m=PX(a.bC,b);o=m.t;p=m.v;q=m.s;if(a.cn.r.d5){b=o*30.0;o=(b+p*59.0+q*11.0)/100.0;p=(b+p*70.0)/100.0;q=(b+q*70.0)/100.0;}r=I(e)*0.00390625;b
=I(d)*0.00390625;s=e-I(e);t=d-I(d);Co(h,1.0,h);u=0;k=S(i,(-5.0));v=i+0.0;w=S(i,5.0);f=i+4.0;x=f-9.765625E-4;y=f;while(u<2){if(u)ET(1,1,1,1);else ET(0,0,0,0);z=(-2);while(z<=3){ba=(-2);while(ba<=3){Bu(g);bb=z*8|0;bc=ba*8|0;bd=bb-s;be=bc-t;if(k>0){FG(g,o*0.699999988079071,p*0.699999988079071,q*0.699999988079071,0.800000011920929);CX(g,0.0,(-1.0),0.0);bf=bd+0.0;c=be+8.0;d=(bb+0.0)*0.00390625+r;e=(bc+8.0)*0.00390625+b;F(g,bf,v,c,d,e);bg=bd+8.0;bh=(bb+8.0)*0.00390625+r;F(g,bg,v,c,bh,e);c=be+0.0;e=(bc+0.0)*0.00390625
+b;F(g,bg,v,c,bh,e);F(g,bf,v,c,d,e);}if(w<=0){FG(g,o,p,q,0.800000011920929);CX(g,0.0,1.0,0.0);c=bd+0.0;d=be+8.0;e=(bb+0.0)*0.00390625+r;bg=(bc+8.0)*0.00390625+b;F(g,c,x,d,e,bg);bh=bd+8.0;bf=(bb+8.0)*0.00390625+r;F(g,bh,x,d,bf,bg);d=be+0.0;bg=(bc+0.0)*0.00390625+b;F(g,bh,x,d,bf,bg);F(g,c,x,d,e,bg);}a:{FG(g,o*0.8999999761581421,p*0.8999999761581421,q*0.8999999761581421,0.800000011920929);if(z>(-1)){CX(g,(-1.0),0.0,0.0);bi=0;d=be+8.0;bg=(bc+8.0)*0.00390625+b;bh=be+0.0;bf=(bc+0.0)*0.00390625+b;while(true){if(bi
>=8)break a;f=bi;c=bd+f+0.0;e=(bb+f+0.5)*0.00390625+r;F(g,c,v,d,e,bg);F(g,c,y,d,e,bg);F(g,c,y,bh,e,bf);F(g,c,v,bh,e,bf);bi=bi+1|0;}}}b:{if(z<=1){CX(g,1.0,0.0,0.0);bi=0;e=be+8.0;bh=(bc+8.0)*0.00390625+b;bf=be+0.0;c=(bc+0.0)*0.00390625+b;while(true){if(bi>=8)break b;f=bi;d=bd+f+1.0-9.765625E-4;bg=(bb+f+0.5)*0.00390625+r;F(g,d,v,e,bg,bh);F(g,d,y,e,bg,bh);F(g,d,y,bf,bg,c);F(g,d,v,bf,bg,c);bi=bi+1|0;}}}c:{FG(g,o*0.800000011920929,p*0.800000011920929,q*0.800000011920929,0.800000011920929);if(ba>(-1)){CX(g,0.0,0.0,
(-1.0));l=0;c=bd+0.0;e=(bb+0.0)*0.00390625+r;bh=bd+8.0;bf=(bb+8.0)*0.00390625+r;while(true){if(l>=8)break c;f=l;d=be+f+0.0;bg=(bc+f+0.5)*0.00390625+b;F(g,c,y,d,e,bg);F(g,bh,y,d,bf,bg);F(g,bh,v,d,bf,bg);F(g,c,v,d,e,bg);l=l+1|0;}}}d:{if(ba<=1){CX(g,0.0,0.0,1.0);l=0;c=bd+0.0;e=(bb+0.0)*0.00390625+r;bh=bd+8.0;bf=(bb+8.0)*0.00390625+r;while(true){if(l>=8)break d;f=l;d=be+f+1.0-9.765625E-4;bg=(bc+f+0.5)*0.00390625+b;F(g,c,y,d,e,bg);F(g,bh,y,d,bf,bg);F(g,bh,v,d,bf,bg);F(g,c,v,d,e,bg);l=l+1|0;}}}Bn(g);ba=ba+1|0;}z=
z+1|0;}u=u+1|0;}BN(1.0,1.0,1.0,1.0);X(3042);V(2884);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function ADr(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.eb;e=new Sl;e.vL=b;OL(d,e);f=a.eb.p-1|0;g=a.eb.p;h=0;a:{while(h<g){d=Bc(a.eb,f-h|0);if(!c){if(F6(d,b)<=1024.0)break a;if(!d.eU){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.eU)break a;h=h+1|0;}return a.eb.p?0:1;}$p=1;case 1:YV(d);if(C()){break _;}GV(a.eb,d);d.h5=0;a:{while(true){h=h+1|0;if(h>=g)break;d=Bc(a.eb,f-h|0);if
(!c){if(F6(d,b)<=1024.0)break a;if(!d.eU){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.eU)break a;}return a.eb.p?0:1;}continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AA7(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{Bv();g=A37;V(3042);V(3008);C0(770,1);BN(1.0,1.0,1.0,(Bm(Long_toNumber(B1())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(!d){if(a.rW<=0.0)break a;C0(774,768);e=a.hI;h=B(173);$p=2;continue _;}if(e!==null){C0(770,771);i=Bm(Long_toNumber(B1())/
100.0)*0.20000000298023224+0.800000011920929;BN(i,i,i,Bm(Long_toNumber(B1())/200.0)*0.20000000298023224+0.5);b=a.hI;e=B(173);$p=1;continue _;}}X(3042);X(3008);return;case 1:$z=ACM(b,e);if(C()){break _;}j=$z;Cf(3553,j);X(3042);X(3008);return;case 2:$z=ACM(e,h);if(C()){break _;}k=$z;Cf(3553,k);BN(1.0,1.0,1.0,0.5);BW();e=a.bC;d=c.hj;k=c.hk;j=c.hl;$p=3;case 3:$z=Yc(e,d,k,j);if(C()){break _;}j=$z;if(j<=0)h=null;else{J();h=A3_.data[j];}X(3008);Mp((-3.0),(-3.0));V(32823);Bu(g);l=b.b6;m=b.c-b.b6;n=f;Et(g, -(l+m*n),
 -(b.bP+(b.j-b.bP)*n), -(b.b7+(b.d-b.b7)*n));Y1(g);if(h===null){J();h=A4f;}b=a.AL;d=c.hj;k=c.hk;j=c.hl;o=240+(a.rW*10.0|0)|0;$p=4;case 4:AHm(b,h,d,k,j,o);if(C()){break _;}Bn(g);Et(g,0.0,0.0,0.0);Mp(0.0,0.0);X(32823);V(3008);FD(1);By();X(3042);X(3008);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ABE(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!d&&!c.j6){V(3042);C0(770,771);BN(0.0,0.0,0.0,0.4000000059604645);X(3553);FD(0);e=a.bC;d=c.hj;g=c.hk;h=c.hl;$p=1;continue _;}return;case 1:$z=Yc(e,d,g,h);if(C()){break _;}g=$z;if(g<=0){FD(1);V(3553);X(3042);return;}i=b.b6;j=b.c-b.b6;k=f;i=i+j*k;j=b.bP+(b.j-b.bP)*k;k=b.b7+(b.d-b.b7)*k;J();b=A3_.data[g];e
=a.bC;d=c.hj;g=c.hk;h=c.hl;$p=2;case 2:$z=b.nr(e,d,g,h);if(C()){break _;}b=$z;b=QH(Da(b,0.0020000000949949026,0.0020000000949949026,0.0020000000949949026), -i, -j, -k);Bv();c=A37;Fv(c,3);Bd(c,b.N,b.H,b.O);Bd(c,b.R,b.H,b.O);Bd(c,b.R,b.H,b.S);Bd(c,b.N,b.H,b.S);Bd(c,b.N,b.H,b.O);Bn(c);Fv(c,3);Bd(c,b.N,b.Q,b.O);Bd(c,b.R,b.Q,b.O);Bd(c,b.R,b.Q,b.S);Bd(c,b.N,b.Q,b.S);Bd(c,b.N,b.Q,b.O);Bn(c);Fv(c,1);Bd(c,b.N,b.H,b.O);Bd(c,b.N,b.Q,b.O);Bd(c,b.R,b.H,b.O);Bd(c,b.R,b.Q,b.O);Bd(c,b.R,b.H,b.S);Bd(c,b.R,b.Q,b.S);Bd(c,b.N,
b.H,b.S);Bd(c,b.N,b.Q,b.S);Bn(c);FD(1);V(3553);X(3042);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Qd(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=FQ(b,16);i=FQ(c,16);j=FQ(d,16);k=FQ(e,16);l=FQ(f,16);m=FQ(g,16);while(h<=k){n=h%a.c0|0;if(n<0)n=n+a.c0|0;o=i;while(o<=l){p=o%a.c_|0;if(p<0)p=p+a.c_|0;q=j;while(q<=m){r=q%a.i_|0;if(r<0)r=r+a.i_|0;s=Bh(Bh(r,a.c_)+p|0,a.c0)+n|0;t=a.cJ.data[s];if(!t.h5)U(a.eb,t);Jh(t);q=q+1|0;}o=o+1|0;}h=h+1|0;}}
function OA(a,b,c,d){Qd(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AJi(a,b,c,d,e,f,g){Qd(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function AL3(a,b,c){var d;d=0;while(d<a.cJ.data.length){if(!ACP(a.cJ.data[d])&&!(a.cJ.data[d].eU&&(d+a.pr|0)&15))AMr(a.cJ.data[d],b);d=d+1|0;}a.pr=a.pr+1|0;}
function YF(a,b,c,d,e,f,g){return;}
function ADf(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bC.bd.c-c;j=a.bC.bd.j-d;k=a.bC.bd.d-e;if(i*i+j*j+k*k<=256.0){if(b===B(207)){b=a.cn.cG;l=new PC;ER(l,a.bC,c,d,e,f,g,h);l.g_=1.0;l.ho=1.0;l.hw=1.0;l.ev=32;Dx(l,0.019999999552965164,0.019999999552965164);l.cZ=l.cZ*(L(l.l)*0.6000000238418579+0.20000000298023224);l.f=f*0.20000000298023224+(BI()*2.0-1.0)*0.019999999552965164;l.h=g*0.20000000298023224+(BI()*2.0-1.0)*0.019999999552965164;l.g=h*0.20000000298023224+(BI()*2.0-1.0)*0.019999999552965164;l.b_=8.0/(BI()*0.8+
0.2)|0;DS(b,l);}else if(b===B(250))DS(a.cn.cG,AXJ(a.bC,c,d,e,1.0));else if(b===B(217)){b=a.cn.cG;l=new Ob;ER(l,a.bC,c,d,e,f,g,h);l.f=f+(BI()*2.0-1.0)*0.05000000074505806;l.h=g+(BI()*2.0-1.0)*0.05000000074505806;l.g=h+(BI()*2.0-1.0)*0.05000000074505806;m=L(l.l)*0.30000001192092896+0.699999988079071;l.hw=m;l.ho=m;l.g_=m;l.cZ=L(l.l)*L(l.l)*6.0+1.0;l.b_=(16.0/(L(l.l)*0.8+0.2)|0)+2|0;DS(b,l);}else if(b!==B(251)){if(b===B(248))DS(a.cn.cG,A2a(a.bC,c,d,e));else if(b===B(208))DS(a.cn.cG,A14(a.bC,c,d,e,f,g,h));else if
(b===B(249))DS(a.cn.cG,AXJ(a.bC,c,d,e,2.5));}else{b=a.cn.cG;l=new MG;ER(l,a.bC,c,d,e,f,g,h);l.f=l.f*0.009999999776482582+f;l.h=l.h*0.009999999776482582+g;l.g=l.g*0.009999999776482582+h;L(l.l);L(l.l);L(l.l);L(l.l);L(l.l);L(l.l);l.Au=l.cZ;l.hw=1.0;l.ho=1.0;l.g_=1.0;l.b_=(8.0/(BI()*0.8+0.2)|0)+4|0;l.nC=1;l.ev=48;DS(b,l);}}}
function AZc(a,b){return;}
function ANt(a,b){return;}
function RR(a){var b;b=0;while(b<a.cJ.data.length){if(a.cJ.data[b].m3){if(!a.cJ.data[b].h5)U(a.eb,a.cJ.data[b]);Jh(a.cJ.data[b]);}b=b+1|0;}}
function ACt(){var a=this;CI.call(a);a.s6=0.0;a.vZ=null;a.sb=null;}
function J1(){var a=new ACt();AU3(a);return a;}
function AU3(a){var b,c;DI(a);a.s6=0.0;b=O(Cp,106);c=b.data;c[0]=B(378);c[1]=B(379);c[2]=B(380);c[3]=B(381);c[4]=B(382);c[5]=B(383);c[6]=B(384);c[7]=B(385);c[8]=B(386);c[9]=B(387);c[10]=B(388);c[11]=B(389);c[12]=B(390);c[13]=B(391);c[14]=B(392);c[15]=B(393);c[16]=B(394);c[17]=B(395);c[18]=B(396);c[19]=B(397);c[20]=B(398);c[21]=B(399);c[22]=B(400);c[23]=B(401);c[24]=B(402);c[25]=B(403);c[26]=B(404);c[27]=B(405);c[28]=B(406);c[29]=B(407);c[30]=B(408);c[31]=B(409);c[32]=B(410);c[33]=B(411);c[34]=B(412);c[35]=B(413);c[36]
=B(414);c[37]=B(415);c[38]=B(416);c[39]=B(417);c[40]=B(418);c[41]=B(419);c[42]=B(420);c[43]=B(421);c[44]=B(422);c[45]=B(423);c[46]=B(424);c[47]=B(425);c[48]=B(426);c[49]=B(427);c[50]=B(399);c[51]=B(428);c[52]=B(429);c[53]=B(430);c[54]=B(431);c[55]=B(432);c[56]=B(433);c[57]=B(434);c[58]=B(435);c[59]=B(436);c[60]=B(437);c[61]=B(438);c[62]=B(439);c[63]=B(440);c[64]=B(441);c[65]=B(442);c[66]=B(443);c[67]=B(444);c[68]=B(445);c[69]=B(446);c[70]=B(447);c[71]=B(448);c[72]=B(449);c[73]=B(450);c[74]=B(451);c[75]=B(452);c[76]
=B(453);c[77]=B(454);c[78]=B(455);c[79]=B(456);c[80]=B(457);c[81]=B(458);c[82]=B(459);c[83]=B(460);c[84]=B(461);c[85]=B(462);c[86]=B(463);c[87]=B(464);c[88]=B(465);c[89]=B(466);c[90]=B(467);c[91]=B(468);c[92]=B(469);c[93]=B(470);c[94]=B(471);c[95]=B(472);c[96]=B(473);c[97]=B(474);c[98]=B(475);c[99]=B(476);c[100]=B(477);c[101]=B(478);c[102]=B(479);c[103]=B(480);c[104]=B(481);c[105]=B(482);a.vZ=b;a.sb=a.vZ.data[BI()*a.vZ.data.length|0];}
function AVK(a){a.s6=a.s6+0.009999999776482582;}
function AIs(a,b,c){return;}
function ADA(a){DB(a.bE);U(a.bE,C9(1,(a.bh/2|0)-100|0,(a.bv/4|0)+48|0,B(483)));U(a.bE,C9(2,(a.bh/2|0)-100|0,(a.bv/4|0)+72|0,B(484)));U(a.bE,C9(3,(a.bh/2|0)-100|0,(a.bv/4|0)+96|0,B(485)));U(a.bE,C9(0,(a.bh/2|0)-100|0,((a.bv/4|0)+120|0)+12|0,B(486)));Bc(a.bE,1).gE=0;Bc(a.bE,2).gE=0;if(a.J.jZ===null)Bc(a.bE,1).gE=0;}
function X8(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.co){c=a.J;d=AUy(a,a.J.r);$p=1;continue _;}if(b.co!=1)return;b=a.J;c=AZw(a);$p=2;continue _;case 1:Zu(c,d);if(C()){break _;}if(b.co!=1)return;b=a.J;c=AZw(a);$p=2;case 2:Zu(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Vy(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:W1(a);if(C()){break _;}Bv();e=A37;f=3553;g=a.J.bi;h=B(487);$p=2;case 2:$z=ACM(g,h);if(C()){break _;}i=$z;Cf(f,i);BN(1.0,1.0,1.0,1.0);Ec(e,16777215);Ct(a,(a.bh-256|0)/2|0,30,0,0,256,49);BW();Br((a.bh/2|0)+90|0,70.0,0.0);Bq((-20.0),0.0,0.0,1.0);j=Bm(Long_toNumber(Long_rem(B1(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Db(a.bS,a.sb)+32|0);Co(k,k,k);Dz(a,a.bS,a.sb,0,(-8),16776960);By();Cn(a.bS,B(488),(a.bh-Db(a.bS,B(488))|0)-2|0,a.bv-10|0,16777215);l=IY();m=Iq();n=Long_sub(l,IF());g=new Ba;Y(g);g=N(H(CP(H(CP(H(g,B(489)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(490)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(491)));Cn(a.bS,g,(a.bh-Db(a.bS,g)|0)-2|0,2,8421504);g=new Ba;Y(g);g=N(H(CP(H(CP(H(g,
B(492)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(493)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(494)));Cn(a.bS,g,(a.bh-Db(a.bS,g)|0)-2|0,12,8421504);$p=3;case 3:AA4(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function MC(){var a=this;E.call(a);a.lF=null;a.cg=null;a.ih=null;a.qK=null;}
function DS(a,b){var c;c=b.u$();U(a.cg.data[c],b);}
function WH(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(b<3){c=0;if(c<a.cg.data[b].p){d=Bc(a.cg.data[b],c);$p=1;continue _;}b=b+1|0;}return;case 1:d.dR();if(C()){break _;}if(!d.cs)e=c;else{d=a.cg.data[b];e=c+(-1)|0;Eo(d,c);}c=e+1|0;while(true){if(c<a.cg.data[b].p){d=Bc(a.cg.data[b],c);continue _;}b=b+1|0;if(b>=3)break;c=0;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function WX(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Bx(b.q*3.1415927410125732/180.0);e=Bm(b.q*3.1415927410125732/180.0);f= -e*Bm(b.E*3.1415927410125732/180.0);g=d*Bm(b.E*3.1415927410125732/180.0);h=Bx(b.E*3.1415927410125732/180.0);i=b.b6;j=b.c-b.b6;k=c;A94=i+j*k;A95=b.bP+(b.j-b.bP)*k;A96=b.b7+
(b.d-b.b7)*k;l=0;while(l<2){if(a.cg.data[l].p){if(!l){b=a.ih;m=B(495);$p=1;continue _;}if(l==1){b=a.ih;m=B(173);$p=2;continue _;}Cf(3553,0);Bv();m=A37;Bu(m);n=0;if(n<a.cg.data[l].p){o=Bc(a.cg.data[l],n);$p=3;continue _;}Bn(m);}l=l+1|0;}return;case 1:$z=ACM(b,m);if(C()){break _;}p=$z;a:while(true){if(l==1){b=a.ih;m=B(173);$p=2;continue _;}Cf(3553,p);Bv();m=A37;Bu(m);n=0;if(n<a.cg.data[l].p){o=Bc(a.cg.data[l],n);$p=3;continue _;}Bn(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cg.data[l].p)continue;else break;}p
=0;if(!l){b=a.ih;m=B(495);continue _;}}return;case 2:$z=ACM(b,m);if(C()){break _;}p=$z;a:while(true){Cf(3553,p);Bv();m=A37;Bu(m);n=0;if(n<a.cg.data[l].p){o=Bc(a.cg.data[l],n);$p=3;continue _;}Bn(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cg.data[l].p)continue;else break;}p=0;if(!l){b=a.ih;m=B(495);$p=1;continue _;}if(l==1){b=a.ih;m=B(173);continue _;}}return;case 3:o.jR(m,c,d,h,e,f,g);if(C()){break _;}n=n+1|0;a:while(true){if(n<a.cg.data[l].p){o=Bc(a.cg.data[l],n);continue _;}Bn(m);while(true){l=l+1|0;if(l
>=2)break a;if(!a.cg.data[l].p)continue;else break;}if(!l){b=a.ih;m=B(495);$p=1;continue _;}if(l==1){b=a.ih;m=B(173);$p=2;continue _;}Cf(3553,0);Bv();m=A37;Bu(m);n=0;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function XB(a,b,c){var d,e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=2;if(a.cg.data[d].p){Bv();e=A37;f=0;if(f<a.cg.data[d].p){g=Bc(a.cg.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;$p=1;continue _;}}return;case 1:g.jR(e,c,h,i,j,k,l);if(C()){break _;}f=f+1|0;if(f>=a.cg.data[d].p)return;g=Bc(a.cg.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;continue _;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function ME(a,b){var c;a.lF=b;c=0;while(c<3){DB(a.cg.data[c]);c=c+1|0;}}
function Z$(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.lF;$p=1;case 1:a:{$z=Yc(e,b,c,d);if(C()){break _;}f=$z;if(f){J();e=A3_.data[f];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;DS(a,ARg(a.lF,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,e));l=
l+1|0;}k=k+1|0;}g=g+1|0;}}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function UZ(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.lF;$p=1;case 1:$z=Yc(f,b,c,d);if(C()){break _;}g=$z;if(g){J();h=A3_.data[g];i=b;j=i+Cb(a.qK)*(h.cP-h.cM-0.20000000298023224)+0.10000000149011612+h.cM;k=c;l=k+Cb(a.qK)*(h.ch-h.cm-0.20000000298023224)+0.10000000149011612+h.cm;m=d;n=m+Cb(a.qK)*(h.cQ-h.cL-0.20000000298023224)
+0.10000000149011612+h.cL;if(!e)l=k+h.cm-0.10000000149011612;if(e==1)l=k+h.ch+0.10000000149011612;if(e==2)n=m+h.cL-0.10000000149011612;if(e==3)n=m+h.cQ+0.10000000149011612;if(e==4)j=i+h.cM-0.10000000149011612;if(e==5)j=i+h.cP+0.10000000149011612;DS(a,Uc(AJ4(ARg(a.lF,j,l,n,0.0,0.0,0.0,h),0.20000000298023224),0.6000000238418579));}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function TC(a){var b;b=new Ba;Y(b);return N(Bb(H(b,B(3)),(a.cg.data[0].p+a.cg.data[1].p|0)+a.cg.data[2].p|0));}
function Lm(){var a=this;Fr.call(a);a.go=null;a.ti=null;a.bN=null;a.Ca=null;a.qd=0;a.AW=0.0;a.Ev=0.0;}
var A97=null;function AKk(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=EW(a.bN.b5,a.bN.bw);g=ZX(f);h=Vc(f);i=a.bN.ey;JS(a.bN.ek);V(3042);BN(1.0,1.0,1.0,1.0);c=3553;f=a.bN.bi;j=
B(496);$p=1;case 1:$z=ACM(f,j);if(C()){break _;}d=$z;Cf(c,d);k=a.bN.e.F;a.lD=(-90.0);l=g/2|0;m=l-91|0;n=h-22|0;Ct(a,m,n,0,0,182,22);Ct(a,(m-1|0)+(k.bB*20|0)|0,n-1|0,0,22,24,22);c=3553;f=a.bN.bi;j=B(497);$p=2;case 2:$z=ACM(f,j);if(C()){break _;}d=$z;Cf(c,d);V(3042);C0(775,769);Ct(a,l-7|0,(h/2|0)-7|0,0,0,16,16);X(3042);o=((a.bN.e.c5/3|0)%2|0)!=1?0:1;if(a.bN.e.c5<10)o=0;p=a.bN.e.bI;q=a.bN.e.rT;LA(a.ti,Long_fromInt(Bh(a.qd,312871)));if(!AE7(a.bN.ce)){X(3042);V(32826);BW();Bq(180.0,1.0,0.0,0.0);Gp();By();r=0;c=l
-90|0;m=(h-16|0)-3|0;if(r>=9){Dr();X(32826);if(!a.bN.r.km)Cn(i,B(498),2,2,16777215);else{Cn(i,N(H(H(H(BR(),B(499)),a.bN.ku),B(21))),2,2,16777215);Cn(i,Kt(a.bN),2,12,16777215);Cn(i,L_(a.bN),2,22,16777215);Cn(i,KP(a.bN),2,32,16777215);s=IY();t=Iq();u=Long_sub(t,IF());j=N(H(CP(H(CP(H(CP(H(BR(),B(500)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(493)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(501)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(491)));Gm(a,i,j,(g-Db(i,j)|0)
-2|0,2,14737632);f=N(H(CP(H(CP(H(BR(),B(492)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(493)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(494)));Gm(a,i,f,(g-Db(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CZ(a.go)&&m<10){if(Bc(a.go,m).nc<200)Cn(i,Bc(a.go,m).v5,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;}r=YE(a.bN.e);n=0;v=h-32|0;w=l+91|0;d=S(p,4);while(n<10){if(r>0){x=(w-(n*8|0)|0)-9|0;c=S((n*2|0)+1|0,r);if(c<0)Ct(a,x,v,34,9,9,9);if(!c)Ct(a,x,
v,25,9,9,9);if(c>0)Ct(a,x,v,16,9,9,9);}y=0;if(o)y=1;z=m+(n*8|0)|0;c=d>0?v:v+D(a.ti,2)|0;Ct(a,z,c,16+(y*9|0)|0,0,9,9);if(o){e=S((n*2|0)+1|0,q);if(e<0)Ct(a,z,c,70,0,9,9);if(!e)Ct(a,z,c,79,0,9,9);}e=S((n*2|0)+1|0,p);if(e<0)Ct(a,z,c,52,0,9,9);if(!e)Ct(a,z,c,61,0,9,9);n=n+1|0;}f=a.bN.e;j=A48;$p=4;continue _;case 3:Z3(a,r,n,m,b);if(C()){break _;}r=r+1|0;if(r>=9){Dr();X(32826);if(!a.bN.r.km)Cn(i,B(498),2,2,16777215);else{Cn(i,N(H(H(H(BR(),B(499)),a.bN.ku),B(21))),2,2,16777215);Cn(i,Kt(a.bN),2,12,16777215);Cn(i,L_(a.bN),
2,22,16777215);Cn(i,KP(a.bN),2,32,16777215);s=IY();t=Iq();u=Long_sub(t,IF());j=N(H(CP(H(CP(H(CP(H(BR(),B(500)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(493)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(501)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(491)));Gm(a,i,j,(g-Db(i,j)|0)-2|0,2,14737632);f=N(H(CP(H(CP(H(BR(),B(492)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(493)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(494)));Gm(a,i,f,(g-Db(i,f)|0)
-2|0,12,14737632);}m=0;e=h-8|0;while(m<CZ(a.go)&&m<10){if(Bc(a.go,m).nc<200)Cn(i,Bc(a.go,m).v5,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;continue _;case 4:a:{$z=AB3(f,j);if(C()){break _;}c=$z;if(c){c=K_((a.bN.e.fx-2|0)*10.0/300.0)|0;ba=(K_(a.bN.e.fx*10.0/300.0)|0)-c|0;x=0;d=c+ba|0;p=v-9|0;while(true){if(x>=d)break a;if(x>=c)Ct(a,m+(x*8|0)|0,p,25,18,9,9);else Ct(a,m+(x*8|0)|0,p,16,18,9,9);x=x+1|0;}}}X(3042);V(32826);BW();Bq(180.0,1.0,0.0,0.0);Gp();By();r=0;c=l-90|0;m=(h-16|0)-3|0;if
(r>=9){Dr();X(32826);if(!a.bN.r.km)Cn(i,B(498),2,2,16777215);else{Cn(i,N(H(H(H(BR(),B(499)),a.bN.ku),B(21))),2,2,16777215);Cn(i,Kt(a.bN),2,12,16777215);Cn(i,L_(a.bN),2,22,16777215);Cn(i,KP(a.bN),2,32,16777215);s=IY();t=Iq();u=Long_sub(t,IF());j=N(H(CP(H(CP(H(CP(H(BR(),B(500)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(493)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(501)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(491)));Gm(a,i,j,(g-Db(i,j)|0)-2|0,2,14737632);f=N(H(CP(H(CP(H(BR(),
B(492)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(493)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(494)));Gm(a,i,f,(g-Db(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CZ(a.go)&&m<10){if(Bc(a.go,m).nc<200)Cn(i,Bc(a.go,m).v5,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function Z3(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.bN.e.F.bc.data[b];if(f===null)return;g=f.lu-e;b=S(g,0.0);if(b>0){BW();h=1.0+g/5.0;i=c+8|0;g=i;j=d+12|0;Br(g,j,0.0);Co(1.0/h,(h+1.0)/2.0,1.0);Br( -i, -j,0.0);}k=A97;l=a.bN.ey;m=a.bN.bi;$p=1;case 1:ABF(k,l,m,f,c,d);if(C()){break _;}if(b>0)By();JE(A97,a.bN.ey,a.bN.bi,f,c,d);return;default:
Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AFy(a){var b,c;a.qd=a.qd+1|0;b=0;while(b<a.go.p){c=Bc(a.go,b);c.nc=c.nc+1|0;b=b+1|0;}}
function V2(){A97=T4();}
function HZ(){var a=this;Ea.call(a);a.F=null;a.xW=0;a.j2=0;a.oZ=0.0;a.jV=0.0;a.zF=null;a.vF=0;}
function ABl(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFR(a);if(C()){break _;}a.oZ=a.jV;a.jV=0.0;return;default:Es();}}CM().s(a,$p);}
function AF4(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cF=1.6200000047683716;Dx(a,0.6000000238418579,1.7999999523162842);if(a.k!==null){if(a.j>0.0){CC(a,a.c,a.j,a.d);b=a.k;c=a.G;$p=1;continue _;}a.g=0.0;a.h=0.0;a.f=0.0;a.E=0.0;}if(a.k!==null)a.k.bd=a;a.bI=20;a.cD=0;return;case 1:$z=TW(b,a,c);if(C()){break _;}b=$z;if(b.p){a.j=a.j+1.0;if(a.j>0.0){CC(a,a.c,a.j,a.d);b=a.k;c=a.G;continue _;}}a.g=0.0;a.h=0.0;a.f=0.0;a.E=0.0;if(a.k!==null)a.k.bd
=a;a.bI=20;a.cD=0;return;default:Es();}}CM().s(a,b,c,$p);}
function U2(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.k.h4&&a.bI<20&&!((a.nq%20|0)*4|0))Q$(a,1);ZS(a.F);a.oZ=a.jV;$p=1;case 1:X7(a);if(C()){break _;}b=B7(a.f*a.f+a.g*a.g);c=Ha( -a.h*0.20000000298023224)*15.0;if(b>0.10000000149011612)b=0.10000000149011612;if(!(a.ca&&a.bI>0))b=0.0;if(!(!a.ca&&a.bI>0))c=0.0;a.jV=a.jV+(b-a.jV)*0.4000000059604645;a.ip=a.ip+(c-a.ip)*0.800000011920929;if(a.bI<=0)return;d=a.k;e
=Da(a.G,1.0,0.0,1.0);$p=2;case 2:a:{$z=Zm(d,a,e);if(C()){break _;}d=$z;if(d!==null){f=0;while(true){if(f>=d.p)break a;Bc(d,f).vh(a);f=f+1|0;}}}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AU9(a){return a.j2;}
function AF_(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dx(a,0.20000000298023224,0.20000000298023224);CC(a,a.c,a.j,a.d);a.h=0.10000000149011612;if(!DU(a.zF,B(502))){c=a.F;$p=1;continue _;}c=new B6;Bw();Fz(c,A66,1);d=1;$p=2;continue _;case 1:AD3(c);if(C()){break _;}if(b===null){a.g=0.0;a.f=0.0;}else{a.f= -Bx((a.jG+a.q)*3.1415927410125732/180.0)*0.10000000149011612;a.g= -Bm((a.jG+a.q)*3.1415927410125732/180.0)*0.10000000149011612;}a.cF
=0.10000000149011612;return;case 2:AK2(a,c,d);if(C()){break _;}c=a.F;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,$p);}
function ARy(a,b,c){a.j2=a.j2+c|0;}
function AGL(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;$p=1;case 1:AK2(a,b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function AK2(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b===null)return;d=Gb(a.k,a.c,a.j-0.30000001192092896,a.d,b);d.gt=40;if(c){e=L(a.l)*0.5;f=L(a.l)*3.1415927410125732*2.0;d.f= -Bm(f)*e;d.g=Bx(f)*e;d.h=0.20000000298023224;}else{d.f= -Bm(a.q/180.0*3.1415927410125732)*Bx(a.E/180.0*3.1415927410125732)*0.30000001192092896;d.g=Bx(a.q/180.0*3.1415927410125732)
*Bx(a.E/180.0*3.1415927410125732)*0.30000001192092896;d.h= -Bm(a.E/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=L(a.l)*3.1415927410125732*2.0;g=0.019999999552965164*L(a.l);h=d.f;i=e;j=FK(i);k=g;d.f=h+j*k;d.h=d.h+(L(a.l)-L(a.l))*0.10000000149011612;d.g=d.g+FB(i)*k;}b=a.k;$p=1;case 1:AIX(b,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFQ(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Y$(a.F,b);b=A48;$p=1;case 1:$z=AB3(a,b);if(C()){break _;}d=$z;if(d)c=c/5.0;if(!a.ca)c=c/5.0;return c;default:Es();}}CM().s(a,b,c,d,$p);}
function K7(a,b){return Zv(a.F,b);}
function AVC(a){return 0.11999999731779099;}
function Ur(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gD=0;if(a.bI<=0)return 0;if(a.c5>a.nw/2.0)return 0;if(!(!(b instanceof Dp)&&!(b instanceof HY))){if(!a.k.h4)c=0;if(a.k.h4==1)c=(c/3|0)+1|0;if(a.k.h4==3)c=(c*3|0)/2|0;}d=Bh(c,25-Ql(a.F)|0)+a.vF|0;ZA(a.F,c);c=d/25|0;a.vF=d%25|0;if(!c)return 0;$p=1;case 1:$z=XI(a,b,c);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,d,$p);}
function ABY(){var a=this;HZ.call(a);a.g9=null;a.j3=null;}
function AWF(a,b,c){var d=new ABY();ARb(d,a,b,c);return d;}
function ARb(a,b,c,d){var e;EQ(a,c);a.nw=20;a.da=0.0;a.ex=0.0;a.Da=1;a.vX=B(366);a.C_=1;a.AH=0.0;a.Br=null;a.E_=1.0;a.sU=0;a.Fa=0.0;a.bI=10;a.jG=0.0;a.cD=0;a.c6=0;a.zi=0;a.BG=(-1);a.Fd=BI()*0.8999999761581421+0.10000000149011612;a.gD=0;a.gU=0;a.xf=0.0;a.rd=0.699999988079071;a.lp=1;a.Eh=(BI()+1.0)*0.009999999776482582;CC(a,a.c,a.j,a.d);a.Fj=BI()*12398.0;a.q=BI()*3.1415927410125732*2.0;a.C$=1.0;a.pK=0.5;e=new RQ;e.bc=O(B6,36);e.bU=O(B6,4);e.bB=0;e.mi=a;a.F=e;a.xW=0;a.j2=0;a.vF=0;IV(a,c.eJ+0.5,c.oq,c.eI+0.5,0.0,
0.0);a.cF=1.6200000047683716;a.bI=20;a.Br=B(503);a.AH=180.0;a.mq=20;a.vX=B(366);a.j3=b;if(c.bd!==null)B3(c.bd);c.bd=a;if(d!==null&&d.m1!==null&&BE(d.m1)>0){b=new Ba;Y(b);a.rX=N(H(H(H(b,B(504)),d.m1),B(505)));}a.zF=d.m1;}
function WA(a){a.hP=a.g9.jD;a.fV=a.g9.jt;a.gU=a.g9.sq;}
function AGi(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AJe(a.g9,a);$p=1;case 1:U2(a);if(C()){break _;}return;default:Es();}}CM().s(a,$p);}
function AL1(a){AJA(a.g9);}
function DY(a,b,c){AJ5(a.g9,b,c);}
function Xu(a,b){EJ(b,B(506),a.bI<<16>>16);EJ(b,B(507),a.c$<<16>>16);EJ(b,B(508),a.cD<<16>>16);EJ(b,B(509),a.c6<<16>>16);FH(b,B(510),a.j2);Gx(b,B(319),AGZ(a.F,Km()));}
function AJx(a,b){var c;a.bI=EX(b,B(506));if(!UX(b,B(506)))a.bI=10;a.c$=EX(b,B(507));a.cD=EX(b,B(508));a.c6=EX(b,B(509));a.j2=E9(b,B(510));c=IJ(b,B(319));ALJ(a.F,c);}
function UY(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j3;d=A1G(a.F,b);$p=1;case 1:Zu(c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AEc(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j3;d=new PK;DI(d);d.xz=B(511);d.fs=0;d.fg=b;$p=1;case 1:Zu(c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AH9(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.j3;c=new Tp;d=a.F;GX(c);c.ld=ASq(c,3,3);c.st=AVD();U(c.cH,AUu(c,c.ld,c.st,0,124,35));e=0;while(e<3){f=0;while(f<3){U(c.cH,DC(c,c.ld,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){U(c.cH,DC(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){U(c.cH,DC(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:Zu(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AJE(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j3;d=new Sv;e=a.F;GX(d);d.q0=b;U(d.cH,DC(d,b,0,56,17));U(d.cH,DC(d,b,1,56,53));U(d.cH,DC(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){U(d.cH,DC(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){U(d.cH,DC(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:Zu(c,d);if(C()){break _;}return;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,$p);}
function IT(a){return DE(a.F);}
function H4(a){AA3(a.F,a.F.bB,null);}
function Y9(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=AMb(a.F,b);if(c<=0)return;$p=1;case 1:b.eQ(a,c);if(C()){break _;}d=IT(a);if(d!==null&&b instanceof Ea){AAs(d,b);if(d.m<=0)H4(a);}return;default:Es();}}CM().s(a,b,c,d,$p);}
function O6(a,b){var c,d;c=a.j3.cG;d=new Rk;ER(d,a.j3.w,b.c,b.j,b.d,b.f,b.h,b.g);d.oz=0;d.px=0;d.ll=b;d.g3=a;d.px=3;d.x4=(-0.5);DS(c,d);}
function YE(a){return Ql(a.F);}
function RF(a,b){var c;if(!b.sH(a)){c=IT(a);if(c!==null&&b instanceof Ea){Z7(c,b);if(c.m<=0)H4(a);}}}
function AEI(){E.call(this);}
function A98(){var a=new AEI();APj(a);return a;}
function APj(a){return;}
function AHt(b){Z();A3C=b;if(b){A3h=0.0;A3i=0.0;setTimeout(Cj(new NR,"onTimer"),200);}else{A3A=B1();if(A3B)clearTimeout(A3B);A3B=0;A2Y.exitPointerLock();}}
function EO(){var b,c;a:{Z();A3w=null;if(!Ni(A3d)){b=P$(A3d,0);A3w=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function Cm(){Z();return A3w===null?0:DU($rt_str(A3w.type),B(512));}
function AMe(){Z();return A3w===null?(-1):A3w.clientX;}
function TU(){Z();return A3w===null?(-1):A20.clientHeight-A3w.clientY|0;}
function CE(){var b;Z();if(A3w===null)b=(-1);else{b=A3w.button;if(b==1)b=2;else if(b==2)b=1;}return b;}
function B0(b){Z();return A3y.data[b];}
function F4(){Z();return !DU(B(513),$rt_str(A3w.type))?0:A3w.deltaY===0.0?0:A3w.deltaY<=0.0?1:(-1);}
function NH(){E.call(this);}
var A99=null;function A9$(){var a=new NH();AIt(a);return a;}
function AIt(a){return;}
function Bm(b){return A99.data[(b*651.8986206054688|0)&4095];}
function Bx(b){return A99.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function DG(b){return DL(b);}
function B7(b){return DL(b);}
function Jo(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function I(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function FQ(b,c){return b>=0?b/c|0: -(( -b-1|0)/c|0)-1|0;}
function AGY(){var b,c,d,e;A99=$rt_createFloatArray(4096);b=0;while(b<4096){A99.data[b]=FB((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=A99.data;e=c;d[(e*11.377778053283691|0)&4095]=FB(e*0.01745329238474369);c=c+90|0;}}
function RE(){var a=this;E.call(a);a.A6=null;a.by=0;}
function Ep(a,b){var c=new RE();ATl(c,a,b);return c;}
function ATl(a,b,c){a.A6=b;a.by=c;}
function ES(){}
function RQ(){var a=this;E.call(a);a.bc=null;a.bU=null;a.bB=0;a.mi=null;}
function DE(a){return a.bc.data[a.bB];}
function PW(a,b){var c;c=0;while(true){if(c>=a.bc.data.length)return (-1);if(a.bc.data[c]!==null&&a.bc.data[c].bs==b)break;c=c+1|0;}return c;}
function OR(a){var b;b=0;while(true){if(b>=a.bc.data.length)return (-1);if(a.bc.data[b]===null)break;b=b+1|0;}return b;}
function ALE(a,b,c){var d;d=PW(a,b);if(d>=0&&d<9)a.bB=d;}
function Fg(a,b){if(b>0)b=1;if(b<0)b=(-1);a.bB=a.bB-b|0;while(a.bB<0){a.bB=a.bB+9|0;}while(a.bB>=9){a.bB=a.bB-9|0;}}
function ZS(a){var b,c;b=0;while(b<a.bc.data.length){if(a.bc.data[b]!==null&&a.bc.data[b].lu>0){c=a.bc.data[b];c.lu=c.lu-1|0;}b=b+1|0;}}
function AB$(a,b){var c,d;c=PW(a,b);if(c<0)return 0;d=a.bc.data[c];b=d.m-1|0;d.m=b;if(b<=0)a.bc.data[c]=null;return 1;}
function Rr(a,b){var c,d,e,f;if(!b.dP){c=b.bs;d=b.m;e=0;a:{while(true){if(e>=a.bc.data.length){e=(-1);break a;}if(a.bc.data[e]!==null&&a.bc.data[e].bs==c&&a.bc.data[e].m<D4(a.bc.data[e])&&a.bc.data[e].m<64)break;e=e+1|0;}}if(e<0)e=OR(a);if(e>=0){if(a.bc.data[e]===null)a.bc.data[e]=I2(c,0);c=d<=(D4(a.bc.data[e])-a.bc.data[e].m|0)?d:D4(a.bc.data[e])-a.bc.data[e].m|0;if(c>(64-a.bc.data[e].m|0))c=64-a.bc.data[e].m|0;if(c){d=d-c|0;f=a.bc.data[e];f.m=f.m+c|0;a.bc.data[e].lu=5;}}b.m=d;if(!b.m)return 1;}c=OR(a);if(c
<0)return 0;a.bc.data[c]=b;a.bc.data[c].lu=5;return 1;}
function DT(a,b,c){var d,e,f;d=a.bc;if(b>=a.bc.data.length){d=a.bU;b=b-a.bc.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].m<=c){e=d[b];d[b]=null;return e;}f=D6(d[b],c);if(!d[b].m)d[b]=null;return f;}
function AA3(a,b,c){var d;d=a.bc;if(b>=a.bc.data.length){d=a.bU;b=b-a.bc.data.length|0;}d.data[b]=c;}
function Y$(a,b){var c;c=1.0;if(a.bc.data[a.bB]!==null)c=c*AAL(a.bc.data[a.bB],b);return c;}
function AGZ(a,b){var c,d,e;c=0;while(c<a.bc.data.length){if(a.bc.data[c]!==null){d=F9();Ia(d,B(514),c<<24>>24);N0(a.bc.data[c],d);HW(b,d);}c=c+1|0;}e=0;while(e<a.bU.data.length){if(a.bU.data[e]!==null){d=F9();Ia(d,B(514),(e+100|0)<<24>>24);N0(a.bU.data[e],d);HW(b,d);}e=e+1|0;}return b;}
function ALJ(a,b){var c,d,e;a.bc=O(B6,36);a.bU=O(B6,4);c=0;while(c<AI9(b)){d=Ew(b,c);e=JR(d,B(514))&255;if(e>=0&&e<a.bc.data.length)a.bc.data[e]=AZG(d);if(e>=100&&e<(a.bU.data.length+100|0))a.bU.data[e-100|0]=AZG(d);c=c+1|0;}}
function Us(a){return a.bc.data.length+4|0;}
function OZ(a,b){var c;c=a.bc;if(b>=a.bc.data.length){c=a.bU;b=b-a.bc.data.length|0;}return c.data[b];}
function ANu(a){return B(319);}
function ARv(a){return 64;}
function AMb(a,b){var c;c=OZ(a,a.bB);return c===null?1:Wb(c,b);}
function Zv(a,b){var c;if(b.bR!==A6r&&b.bR!==A6G)return 1;c=OZ(a,a.bB);return c===null?0:AIO(c,b);}
function ADq(a,b){return a.bU.data[b];}
function Ql(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.bU.data.length){if(a.bU.data[e]!==null&&Dl(a.bU.data[e]) instanceof Ff){f=IN(a.bU.data[e]);c=c+(f-a.bU.data[e].dP|0)|0;d=d+f|0;b=b+Dl(a.bU.data[e]).wC|0;}e=e+1|0;}if(!d)return 0;return (Bh(b-1|0,c)/d|0)+1|0;}
function ZA(a,b){var c;c=0;while(c<a.bU.data.length){if(a.bU.data[c]!==null&&Dl(a.bU.data[c]) instanceof Ff){EY(a.bU.data[c],b);if(!a.bU.data[c].m)a.bU.data[c]=null;}c=c+1|0;}}
function AD3(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(true){if(b>=a.bc.data.length){b=0;while(b<a.bU.data.length){if(a.bU.data[b]!==null){c=a.mi;d=a.bU.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bc.data[b]!==null)break;b=b+1|0;}c=a.mi;d=a.bc.data[b];e=1;$p=1;case 1:AK2(c,d,e);if(C()){break _;}a.bc.data[b]=null;while(true){b=b+1|0;if(b>=a.bc.data.length){b=0;while(b<a.bU.data.length){if(a.bU.data[b]
!==null){c=a.mi;d=a.bU.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bc.data[b]===null)continue;else break;}c=a.mi;d=a.bc.data[b];e=1;continue _;case 2:AK2(c,d,e);if(C()){break _;}a.bU.data[b]=null;while(true){b=b+1|0;if(b>=a.bU.data.length)break;if(a.bU.data[b]===null)continue;else{c=a.mi;d=a.bU.data[b];e=1;continue _;}}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function Wd(a){return;}
function C_(){Hz.call(this);}
function D0(){var a=this;CI.call(a);a.bl=null;a.ez=0;a.eL=0;a.cH=null;}
var A9_=null;function A$a(){var a=new D0();GX(a);return a;}
function GX(a){DI(a);a.bl=null;a.ez=176;a.eL=166;a.cH=Ck();}
function XZ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:W1(a);if(C()){break _;}e=(a.bh-a.ez|0)/2|0;f=(a.bv-a.eL|0)/2|0;$p=2;case 2:a.rg(d);if(C()){break _;}BW();Bq(180.0,1.0,0.0,0.0);Gp();By();BW();Br(e,f,0.0);BN(1.0,1.0,1.0,1.0);V(32826);g=0;if(g>=a.cH.p){if(a.bl===null){X(32826);Dr();X(2896);X(2929);a.kn();V(2896);V(2929);By();return;}Br(0.0,
0.0,32.0);h=A9_;i=a.bS;j=a.J.bi;k=a.bl;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Bc(a.cH,g);i=h.er;l=h.kH;m=h.iQ;n=h.iS;i=i.fQ(l);if(i===null){l=h.qe();if(l>=0){X(2896);i=a.J.bi;j=a.J.bi;k=B(224);$p=5;continue _;}}j=A9_;k=a.bS;o=a.J.bi;$p=4;continue _;case 3:ABF(h,i,j,k,b,c);if(C()){break _;}JE(A9_,a.bS,a.J.bi,a.bl,b,c);X(32826);Dr();X(2896);X(2929);a.kn();V(2896);V(2929);By();return;case 4:ABF(j,k,o,i,m,n);if(C()){break _;}JE(A9_,a.bS,a.J.bi,i,m,n);if(K9(h,b,c)){X(2896);X(2929);l=h.iQ;p=h.iS;I_(a,l,p,
l+16|0,p+16|0,(-2130706433),(-2130706433));V(2896);V(2929);}g=g+1|0;if(g>=a.cH.p){if(a.bl===null){X(32826);Dr();X(2896);X(2929);a.kn();V(2896);V(2929);By();return;}Br(0.0,0.0,32.0);h=A9_;i=a.bS;j=a.J.bi;k=a.bl;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Bc(a.cH,g);i=h.er;l=h.kH;m=h.iQ;n=h.iS;i=i.fQ(l);if(i===null){l=h.qe();if(l>=0){X(2896);i=a.J.bi;j=a.J.bi;k=B(224);$p=5;continue _;}}j=A9_;k=a.bS;o=a.J.bi;continue _;case 5:$z=ACM(j,k);if(C()){break _;}p=$z;DJ(i,p);Ct(a,m,n,(l%16|0)*16|0,(l/16|0)*16|0,16,
16);V(2896);if(K9(h,b,c)){X(2896);X(2929);l=h.iQ;p=h.iS;I_(a,l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));V(2896);V(2929);}g=g+1|0;if(g>=a.cH.p){if(a.bl===null){X(32826);Dr();X(2896);X(2929);a.kn();V(2896);V(2929);By();return;}Br(0.0,0.0,32.0);h=A9_;i=a.bS;j=a.J.bi;k=a.bl;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Bc(a.cH,g);i=h.er;l=h.kH;m=h.iQ;n=h.iS;i=i.fQ(l);if(i===null){l=h.qe();if(l>=0){X(2896);i=a.J.bi;j=a.J.bi;k=B(224);continue _;}}j=A9_;k=a.bS;o=a.J.bi;$p=4;continue _;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AK4(a,b,c){var d,e;d=0;while(true){if(d>=a.cH.p)return null;e=Bc(a.cH,d);if(K9(e,b,c))break;d=d+1|0;}return e;}
function AIK(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(d&&d!=1)){e=AK4(a,b,c);if(e!==null){$p=1;continue _;}if(a.bl!==null){f=(a.bh-a.ez|0)/2|0;g=(a.bv-a.eL|0)/2|0;if(!(b>=f&&c>=g&&b<(f+a.ez|0)&&c<(g+a.ez|0))){h=a.J.e;if(!d){e=a.bl;$p=2;continue _;}if(d==1){e=D6(a.bl,1);$p=3;continue _;}}}}return;case 1:a:{AFA(e);if(C()){break _;}i=ALQ(e);if(!(i===null&&a.bl===null)){if
(i!==null&&a.bl===null){g=!d?i.m:(i.m+1|0)/2|0;a.bl=e.er.i6(e.kH,g);if(i.m){$p=4;continue _;}h=null;$p=5;continue _;}if(i===null&&a.bl!==null&&e.rk(a.bl)){g=d?1:a.bl.m;if(g>e.er.ft())g=e.er.ft();h=D6(a.bl,g);$p=7;continue _;}if(i!==null&&a.bl!==null){if(!e.rk(a.bl)){if(i.bs!=a.bl.bs)break a;if(D4(a.bl)<=1)break a;g=i.m;if(g<=0)break a;if((g+a.bl.m|0)>D4(a.bl))break a;h=a.bl;h.m=h.m+g|0;D6(i,g);if(i.m){$p=8;continue _;}h=null;$p=9;continue _;}if(i.bs==a.bl.bs){if(i.bs==a.bl.bs){if(!d){g=a.bl.m;if(g>(e.er.ft()
-i.m|0))g=e.er.ft()-i.m|0;if(g>(D4(a.bl)-i.m|0))g=D4(a.bl)-i.m|0;D6(a.bl,g);if(!a.bl.m)a.bl=null;i.m=i.m+g|0;}else if(d==1){g=1;if(g>(e.er.ft()-i.m|0))g=e.er.ft()-i.m|0;if(g>(D4(a.bl)-i.m|0))g=D4(a.bl)-i.m|0;D6(a.bl,g);if(!a.bl.m)a.bl=null;i.m=i.m+g|0;}}}else if(a.bl.m<=e.er.ft()){h=a.bl;$p=6;continue _;}}}}return;case 2:AGL(h,e);if(C()){break _;}a.bl=null;if(d!=1)return;e=D6(a.bl,1);$p=3;case 3:AGL(h,e);if(C()){break _;}if(!a.bl.m)a.bl=null;return;case 4:e.E4();if(C()){break _;}return;case 5:AGs(e,h);if(C())
{break _;}$p=4;continue _;case 6:AGs(e,h);if(C()){break _;}a.bl=i;return;case 7:AGs(e,h);if(C()){break _;}if(!a.bl.m)a.bl=null;return;case 8:e.E4();if(C()){break _;}return;case 9:AGs(e,h);if(C()){break _;}$p=8;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AYI(a,b,c,d){return;}
function Wk(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.J.r.eS.by)return;d=a.J;e=null;$p=1;case 1:Zu(d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function WJ(a){var b,c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bl===null)return;b=a.J.e;c=a.bl;$p=1;case 1:AGL(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function AZB(a){return 0;}
function AFc(){A9_=T4();}
function AKo(){var a=this;D0.call(a);a.i3=null;a.vd=null;a.xP=0.0;a.A0=0.0;}
function En(a){var b=new AKo();ARO(b,a);return b;}
function ARO(a,b){var c,d,e,f,g;GX(a);a.i3=ASq(a,2,2);a.vd=AVD();a.oj=1;U(a.cH,AUu(a,a.i3,a.vd,0,144,36));c=0;while(c<2){d=0;while(d<2){U(a.cH,DC(a,a.i3,d+(c*2|0)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.cH;f=new NZ;QX(f,a,b,(Us(b)-1|0)-d|0,8,8+(d*18|0)|0);f.DQ=a;f.t9=d;U(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){U(a.cH,DC(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){U(a.cH,DC(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function AGD(a){var b,c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WJ(a);if(C()){break _;}b=0;while(b<a.i3.kO){c=Ft(a.i3,b);if(c!==null){d=a.J.e;$p=2;continue _;}b=b+1|0;}return;case 2:AGL(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=a.i3.kO)break;c=Ft(a.i3,b);if(c===null)continue;else{d=a.J.e;continue _;}}return;default:Es();}}CM().s(a,b,c,d,$p);}
function ANM(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=(-1);if(e<2&&f<2){h=Ft(a.i3,e+(f*2|0)|0);if(h!==null)g=h.bs;}d[e+(f*3|0)|0]=g;f=f+1|0;}e=e+1|0;}MW(a.vd,0,OV(Sz(),c));}
function AR4(a){D5(a.bS,B(515),86,16,4210752);}
function Zy(a,b,c,d){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:XZ(a,b,c,d);if(C()){break _;}a.xP=b;a.A0=c;return;default:Es();}}CM().s(a,b,c,d,$p);}
function T_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bi;d=B(516);$p=1;case 1:$z=ACM(c,d);if(C()){break _;}e=$z;BN(1.0,1.0,1.0,1.0);DJ(a.J.bi,e);f=(a.bh-a.ez|0)/2|0;g=(a.bv-a.eL|0)/2|0;Ct(a,f,g,0,0,a.ez,a.eL);V(32826);V(2903);BW();b=f+51|0;e=g+75|0;Br(b,e,50.0);Co((-30.0),30.0,30.0);Bq(180.0,
0.0,0.0,1.0);h=a.J.e.da;i=a.J.e.q;j=a.J.e.E;k=b-a.xP;l=(e-50|0)-a.A0;Bq(135.0,0.0,1.0,0.0);Gp();Bq((-135.0),0.0,1.0,0.0);m=l/40.0;Bq( -Ha(m)*20.0,1.0,0.0,0.0);d=a.J.e;n=k/40.0;d.da=Ha(n)*20.0;a.J.e.q=Ha(n)*40.0;a.J.e.E= -Ha(m)*20.0;Br(0.0,a.J.e.cF,0.0);d=A5G;c=a.J.e;m=0.0;n=0.0;o=0.0;b=0.0;p=1.0;$p=2;case 2:AK8(d,c,m,n,o,b,p);if(C()){break _;}a.J.e.da=h;a.J.e.q=i;a.J.e.E=j;By();Dr();X(32826);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function HF(){var a=this;E.call(a);a.pi=0;a.qQ=0;a.ts=0;a.tw=0;a.vc=0;a.Aq=0;a.cj=null;a.t6=null;a.t7=null;a.t8=null;a.se=null;a.sm=null;a.s9=null;a.uS=null;a.tt=null;a.sO=null;a.r2=null;a.sw=null;a.sD=null;a.ud=null;a.sc=null;a.vJ=null;a.pt=0;a.on=0;a.nd=0;a.CE=0;a.Db=0;a.sg=null;a.sL=null;a.uX=0;a.uH=null;a.tq=null;a.tX=null;a.vQ=null;a.vW=null;a.vA=null;a.lc=null;a.ls=null;a.tn=0;a.qk=0.0;a.qj=0.0;a.qi=0.0;a.qh=0.0;a.qV=0.0;a.rH=0.0;a.p4=0.0;a.qH=0.0;a.pg=0.0;a.ph=0.0;a.rx=0.0;a.rw=0.0;a.rv=0.0;a.ru=0.0;a.rb
=0.0;a.q_=0.0;a.ra=0.0;}
var A$b=null;var A$c=null;function A0q(a,b,c,d,e,f,g){var h=new HF();ADm(h,a,b,c,d,e,f,g);return h;}
function MN(b){var c,d,e,f,g,h,i;c=A$b.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;if((b&1)==1)d=1;if((b&4)==4)e=1;if((b&8)==8)f=1;if((b&16)==16)g=1;if((b&32)==32)h=1;if((b&64)==64)i=1;c=A0q(b,d,e,f,g,h,i);A$b.data[b]=c;}return c;}
function ADm(a,b,c,d,e,f,g,h){var i,j,k;SN(a);a.t6=null;a.t7=null;a.t8=null;a.se=null;a.sm=null;a.s9=null;a.uS=null;a.tt=null;a.sO=null;a.r2=null;a.sw=null;a.sD=null;a.ud=null;a.sc=null;a.vJ=null;a.uX=0;a.uH=$rt_createFloatArray(16);a.tq=$rt_createFloatArray(16);a.tX=$rt_createFloatArray(16);a.vQ=IX(K6());a.vW=IX(K6());a.vA=IX(K6());a.lc=AT8();a.ls=AT8();a.tn=0;a.qk=0.0;a.qj=0.0;a.qi=0.0;a.qh=0.0;a.qV=0.0;a.rH=0.0;a.p4=0.0;a.qH=0.0;a.pg=0.0;a.ph=0.0;a.rx=0.0;a.rw=0.0;a.rv=0.0;a.ru=0.0;a.rb=0.0;a.q_=0.0;a.ra
=0.0;a.pi=c;a.qQ=d;a.ts=e;a.tw=f;a.vc=g;a.Aq=h;if(A$c===null)A$c=XR(B(517));i=B(3);if(a.pi)i=N(H(H(BR(),i),B(518)));if(a.qQ)i=N(H(H(BR(),i),B(519)));if(a.ts)i=N(H(H(BR(),i),B(520)));if(a.tw)i=N(H(H(BR(),i),B(521)));if(a.vc)i=N(H(H(BR(),i),B(522)));if(a.Aq)i=N(H(H(BR(),i),B(523)));i=N(H(H(BR(),i),A$c));j=Mn(35633);MD(j,N(H(H(H(BR(),M7()),B(524)),i)));SJ(j);if(!Rx(j)){B9(CK(),I9(N(H(H(BR(),B(525)),QF(j))),B(152),B(526)));M(VU(B(527)));}k=Mn(35632);MD(k,N(H(H(H(BR(),M7()),B(528)),i)));SJ(k);if(!Rx(k)){B9(CK(),
I9(N(H(H(BR(),B(525)),QF(k))),B(152),B(529)));M(VU(B(527)));}a.cj=ADd();Pk(a.cj,j);Pk(a.cj,k);b=1;a.pt=0;J$(a.cj,a.pt,B(530));if(!a.qQ)a.on=(-1);else{a.on=b;J$(a.cj,a.on,B(531));b=2;}if(!a.pi)a.nd=(-1);else{c=b+1|0;a.nd=b;J$(a.cj,a.nd,B(532));b=c;}a.CE=(-1);a.Db=b;Wr(a.cj);Q4(a.cj,j);Q4(a.cj,k);P7(j);P7(k);if(!ABL(a.cj)){B9(CK(),I9(N(H(H(BR(),B(525)),ACN(a.cj))),B(152),B(533)));M(VU(B(527)));}Sd(a.cj);a.t6=C7(a.cj,B(534));a.t7=C7(a.cj,B(535));a.t8=C7(a.cj,B(536));a.r2=C7(a.cj,B(537));if(a.ts){a.sw=C7(a.cj,B(538));a.sc
=C7(a.cj,B(539));a.vJ=C7(a.cj,B(540));}if(a.tw){a.se=C7(a.cj,B(541));a.sm=C7(a.cj,B(542));a.s9=C7(a.cj,B(543));a.uS=C7(a.cj,B(544));a.tt=C7(a.cj,B(545));a.sO=C7(a.cj,B(546));}if(a.vc)a.sD=C7(a.cj,B(547));Oj(C7(a.cj,B(548)),0);a.ud=C7(a.cj,B(549));a.sg=MM();a.sL=Kk();O0(a.sg);Gc(34962,a.sL);OK(a);}
function OK(a){LT(a.pt);LV(a.pt,3,5126,0,28,0);if(a.qQ){LT(a.on);LV(a.on,2,5126,0,28,12);}if(a.pi){LT(a.nd);LV(a.nd,4,5121,1,28,20);}}
function ALl(a){Sd(a.cj);}
function ANZ(a){return;}
function AHg(a,b){if(!JJ(b,a.vQ)){LI(FT(a.vQ,b),a.uH);Ks(a.t6,a.uH);}}
function AHK(a,b){if(!JJ(b,a.vW)){LI(FT(a.vW,b),a.tq);Ks(a.t7,a.tq);}}
function VQ(a,b){if(!JJ(b,a.vA)){LI(FT(a.vA,b),a.tX);Ks(a.t8,a.tX);}}
function AHV(a,b,c){if(!(P4(b,a.lc)&&P4(c,a.ls))){RS(a.lc,b);RS(a.ls,c);JF(a.sc,a.lc.ka,a.lc.kb,a.lc.j_);JF(a.vJ,a.ls.ka,a.ls.kb,a.ls.j_);}}
function AGk(a,b){if(a.tn!=b){a.tn=b;Oj(a.sm,b%2|0);G0(a.sO,b/2|0);}}
function AKI(a,b,c,d,e){if(!(a.qk===b&&a.qj===c&&a.qi===d&&a.qh===e)){a.qk=b;a.qj=c;a.qi=d;a.qh=e;QL(a.se,a.qk,a.qj,a.qi,a.qh);}}
function AKl(a,b,c){if(!(a.qV===b&&a.rH===c)){a.qV=b;a.rH=c;G0(a.s9,a.qV);G0(a.uS,a.rH);}}
function AFK(a,b){if(a.p4!==b){a.p4=b;G0(a.tt,a.p4);}}
function ADX(a,b){if(a.qH!==b){a.qH=b;G0(a.sD,a.qH);}}
function AJl(a,b,c){var d,e;if(!(a.pg===b&&a.ph===c)){a.pg=b;a.ph=c;d=a.ud;b=a.pg;c=a.ph;Z();if(d!==null){e=A23;d=d.jz;e.uniform2f(d,b,c);}}}
function AGG(a,b,c,d,e){if(!(a.rx===b&&a.rw===c&&a.rv===d&&a.ru===e)){a.rx=b;a.rw=c;a.rv=d;a.ru=e;QL(a.r2,a.rx,a.rw,a.rv,a.ru);}}
function XN(a,b,c,d){if(!(a.rb===b&&a.q_===c&&a.ra===d)){a.rb=b;a.q_=c;a.ra=d;JF(a.sw,a.rb,a.q_,a.ra);}}
function AJr(){A$b=O(HF,128);A$c=null;}
function OC(){var a=this;E.call(a);a.yx=0;a.pC=null;a.nx=null;a.kG=0;a.iN=0;}
function P8(){var a=this;E.call(a);a.r8=null;a.u7=0;a.Ac=0;a.wa=0;a.uL=0;}
function O3(a){var b;b=$rt_createIntArray(a.uL);PY(a.r8);Uh(a.r8,b);return b;}
function ACH(){var a=this;E.call(a);a.j6=0;a.hj=0;a.hk=0;a.hl=0;a.gX=0;a.fR=null;a.mh=null;}
function ASp(a,b,c,d,e){var f=new ACH();AWd(f,a,b,c,d,e);return f;}
function ASR(a){var b=new ACH();AYE(b,a);return b;}
function AWd(a,b,c,d,e,f){a.j6=0;a.hj=b;a.hk=c;a.hl=d;a.gX=e;a.fR=BS(f.t,f.v,f.s);}
function AYE(a,b){a.j6=1;a.mh=b;a.fR=BS(b.c,b.j,b.d);}
function B6(){var a=this;E.call(a);a.m=0;a.lu=0;a.bs=0;a.dP=0;}
function AGV(a){var b=new B6();ADb(b,a);return b;}
function F3(a,b){var c=new B6();Rn(c,a,b);return c;}
function ND(a){var b=new B6();Dg(b,a);return b;}
function D$(a,b){var c=new B6();Fz(c,a,b);return c;}
function I2(a,b){var c=new B6();KR(c,a,b);return c;}
function Mc(a,b,c){var d=new B6();ASt(d,a,b,c);return d;}
function AZG(a){var b=new B6();AS2(b,a);return b;}
function ADb(a,b){Rn(a,b,1);}
function Rn(a,b,c){KR(a,b.b,c);}
function Dg(a,b){Fz(a,b,1);}
function Fz(a,b,c){KR(a,b.cx,c);}
function KR(a,b,c){a.m=0;a.bs=b;a.m=c;}
function ASt(a,b,c,d){a.m=0;a.bs=b;a.m=c;a.dP=d;}
function AS2(a,b){a.m=0;ZH(a,b);}
function D6(a,b){a.m=a.m-b|0;return Mc(a.bs,b,a.dP);}
function Dl(a){Bw();return A6w.data[a.bs];}
function Dk(a){return Dl(a).rs;}
function AEl(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=Dl(a);$p=1;case 1:$z=h.hQ(a,b,c,d,e,f,g);if(C()){break _;}d=$z;return d;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AAL(a,b){return Dl(a).vB(a,b);}
function W0(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Dl(a);$p=1;case 1:$z=d.mQ(a,b,c);if(C()){break _;}b=$z;return b;default:Es();}}CM().s(a,b,c,d,$p);}
function N0(a,b){EJ(b,B(550),a.bs<<16>>16);Ia(b,B(551),a.m<<24>>24);EJ(b,B(552),a.dP<<16>>16);return b;}
function ZH(a,b){a.bs=EX(b,B(550));a.m=JR(b,B(551));a.dP=EX(b,B(552));}
function D4(a){return Dl(a).en;}
function IN(a){Bw();return A6w.data[a.bs].eG;}
function EY(a,b){a.dP=a.dP+b|0;if(a.dP>IN(a)){a.m=a.m-1|0;if(a.m<0)a.m=0;a.dP=0;}}
function AAs(a,b){Bw();A6w.data[a.bs].qy(a,b);}
function NX(a,b,c,d,e){Bw();A6w.data[a.bs].vv(a,b,c,d,e);}
function Wb(a,b){Bw();return A6w.data[a.bs].mI(b);}
function AIO(a,b){Bw();return A6w.data[a.bs].nF(b);}
function ASQ(a,b){return;}
function Z7(a,b){Bw();A6w.data[a.bs].wb(a,b);}
function VG(){var a=this;E.call(a);a.he=null;a.kO=0;a.qB=null;}
function ASq(a,b,c){var d=new VG();APv(d,a,b,c);return d;}
function APv(a,b,c,d){a.kO=Bh(c,d);a.he=O(B6,a.kO);a.qB=b;}
function AUt(a){return a.kO;}
function Ft(a,b){return a.he.data[b];}
function AAp(a,b,c){var d,e;if(a.he.data[b]===null)return null;if(a.he.data[b].m<=c){d=a.he.data[b];a.he.data[b]=null;a.qB.rE(a);return d;}e=D6(a.he.data[b],c);if(!a.he.data[b].m)a.he.data[b]=null;a.qB.rE(a);return e;}
function AUB(a,b,c){a.he.data[b]=c;a.qB.rE(a);}
function AYi(a){return 64;}
function Zp(a){return;}
function Wq(){E.call(this);this.lT=null;}
function AVD(){var a=new Wq();AM5(a);return a;}
function AM5(a){a.lT=O(B6,1);}
function AVs(a,b){return a.lT.data[b];}
function APB(a,b,c){var d;if(a.lT.data[b]===null)return null;d=a.lT.data[b];a.lT.data[b]=null;return d;}
function MW(a,b,c){a.lT.data[b]=c;}
function AQ_(a){return 64;}
function AH2(a){return;}
function GB(){var a=this;E.call(a);a.kH=0;a.iQ=0;a.iS=0;a.er=null;a.ot=null;}
function DC(a,b,c,d,e){var f=new GB();QX(f,a,b,c,d,e);return f;}
function QX(a,b,c,d,e,f){a.ot=b;a.er=c;a.kH=d;a.iQ=e;a.iS=f;}
function K9(a,b,c){var d,e;d=(a.ot.bh-a.ot.ez|0)/2|0;e=(a.ot.bv-a.ot.eL|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.iQ-1|0)&&d<((a.iQ+16|0)+1|0)&&c>=(a.iS-1|0)&&c<((a.iS+16|0)+1|0)?1:0;}
function AF7(a){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFA(a);if(C()){break _;}return;default:Es();}}CM().s(a,$p);}
function APZ(a,b){return 1;}
function ALQ(a){return a.er.fQ(a.kH);}
function AGs(a,b){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.er.iF(a.kH,b);$p=1;case 1:AFA(a);if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function AYO(a){return (-1);}
function AFA(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.er;$p=1;case 1:b.jk();if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function YT(){GB.call(this);this.pa=null;}
function AUu(a,b,c,d,e,f){var g=new YT();AVj(g,a,b,c,d,e,f);return g;}
function AVj(a,b,c,d,e,f,g){QX(a,b,d,e,f,g);a.pa=c;}
function ASd(a,b){return 0;}
function AIM(a){var b;b=0;while(b<a.pa.kO){if(Ft(a.pa,b)!==null)AAp(a.pa,b,1);b=b+1|0;}}
function NZ(){var a=this;GB.call(a);a.t9=0;a.DQ=null;}
function AT7(a,b){return !(Dl(b) instanceof Ff)?0:Dl(b).xi!=a.t9?0:1;}
function APx(a){return 15+(a.t9*16|0)|0;}
function Sn(){E.call(this);this.AC=null;}
function PA(){var a=this;E.call(a);a.x_=null;a.tC=0;}
function K3(){EC.call(this);}
function Rf(b){var c,d;c=b.data.length;d=new Ra;QI(d,c,0,0+c|0);d.vs=0;d.yu=0;d.uz=b;return d;}
function AKC(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BP;i=new Ba;Y(i);Bl(h,N(Bb(H(Bb(H(i,B(553)),g),B(240)),f)));M(h);}if(Ce(a)<d){h=new E4;Q(h);M(h);}if(d<0){h=new BP;i=new Ba;Y(i);Bl(h,N(H(Bb(H(i,B(241)),d),B(242))));M(h);}g=a.Z;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=R_(a,g);j=j+1|0;c=k;g=f;}a.Z=a.Z+d|0;return a;}}b=b.data;i=new BP;h=new Ba;Y(h);Bl(i,N(H(Bb(H(Bb(H(h,B(243)),c),B(236)),b.length),B(21))));M(i);}
function Uh(a,b){return AKC(a,b,0,b.data.length);}
function AAI(a){D3(a);return a;}
function ATT(a){FE(a);return a;}
function PY(a){a.jl=(-1);a.Z=0;return a;}
function C1(){var a=this;E.call(a);a.hG=null;a.Dy=null;a.DX=null;a.k1=0.0;a.yY=0.0;}
function A$d(){var a=new C1();D8(a);return a;}
function D8(a){a.Dy=AZx();a.DX=IK();a.k1=0.0;a.yY=1.0;}
function AFt(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.hG.r7;$p=1;case 1:$z=ACM(c,b);if(C()){break _;}d=$z;DJ(c,d);return;default:Es();}}CM().s(a,b,c,d,$p);}
function AJ2(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.hG.r7;$p=1;case 1:$z=ZD(d,b,c);if(C()){break _;}e=$z;DJ(d,e);return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function ACj(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:X(2896);J();g=A5H.W;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;BW();Br(c,d,e);n=b.cC*1.399999976158142;Co(n,n,n);o=B(173);$p
=1;case 1:AFt(a,o);if(C()){break _;}Bv();o=A37;p=1.0;q=0.0;r=b.ef/b.cC;Bq( -a.hG.pJ,0.0,1.0,0.0);Br(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BN(1.0,1.0,1.0,1.0);Bu(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;F(o,c,d,0.0,e,s);F(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;F(o,(-0.5),d,0.0,t,u);F(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Br(0.0,0.0,(-0.03999999910593033));}Bn(o);By();V(2896);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AXU(b,c,d,e){var f;X(3553);Bv();f=A37;BN(1.0,1.0,1.0,1.0);Bu(f);Et(f,c,d,e);B_(0.0,0.0,(-1.0));Bd(f,b.N,b.Q,b.O);Bd(f,b.R,b.Q,b.O);Bd(f,b.R,b.H,b.O);Bd(f,b.N,b.H,b.O);B_(0.0,0.0,1.0);Bd(f,b.N,b.H,b.S);Bd(f,b.R,b.H,b.S);Bd(f,b.R,b.Q,b.S);Bd(f,b.N,b.Q,b.S);B_(0.0,(-1.0),0.0);Bd(f,b.N,b.H,b.O);Bd(f,b.R,b.H,b.O);Bd(f,b.R,b.H,b.S);Bd(f,b.N,b.H,b.S);B_(0.0,1.0,0.0);Bd(f,b.N,b.Q,b.S);Bd(f,b.R,b.Q,b.S);Bd(f,b.R,b.Q,b.O);Bd(f,b.N,b.Q,b.O);B_((-1.0),0.0,0.0);Bd(f,b.N,b.H,b.S);Bd(f,b.N,b.Q,b.S);Bd(f,b.N,b.Q,b.O);Bd(f,
b.N,b.H,b.O);B_(1.0,0.0,0.0);Bd(f,b.R,b.H,b.O);Bd(f,b.R,b.Q,b.O);Bd(f,b.R,b.Q,b.S);Bd(f,b.R,b.H,b.S);Et(f,0.0,0.0,0.0);Bn(f);V(3553);}
function AOi(a,b){a.hG=b;}
function AH3(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AEX(a.hG,b.c,b.j,b.d);if(b.cw<=0)return;$p=1;case 1:ACj(a,b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function ADM(){var a=this;C1.call(a);a.uq=null;a.hp=null;}
function T4(){var a=new ADM();AVQ(a);return a;}
function AVQ(a){D8(a);a.uq=IK();a.hp=new Df;a.k1=0.15000000596046448;a.yY=0.75;}
function AKg(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b.l2;BW();i=Bm((b.lv+g)/10.0+b.v0)*0.10000000149011612+0.10000000149011612;j=((b.lv+g)/20.0+b.v0)*57.2957763671875;k=1;if(b.l2.m>1)k=2;if(b.l2.m>5)k=3;if(b.l2.m>20)k=4;Br(c,d+
i,e);V(32826);if(h.bs<256){J();if(!A3_.data[h.bs].dO()){Bq(j,0.0,1.0,0.0);b=B(173);$p=3;continue _;}}Co(0.5,0.5,0.5);l=Dk(h);if(h.bs>=256){b=B(224);$p=1;continue _;}b=B(173);$p=2;continue _;case 1:AFt(a,b);if(C()){break _;}Bv();m=A37;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){BW();if(s>0)Br((L(a.hp)*2.0-1.0)*0.30000001192092896,(L(a.hp)*2.0-1.0)*0.30000001192092896,(L(a.hp)*2.0-1.0)*0.30000001192092896);Bq(180.0-a.hG.pJ,0.0,
1.0,0.0);Bu(m);B_(0.0,1.0,0.0);F(m,(-0.5),(-0.25),0.0,d,e);F(m,0.5,(-0.25),0.0,t,e);F(m,0.5,0.75,0.0,t,u);F(m,(-0.5),0.75,0.0,d,u);Bn(m);By();s=s+1|0;}X(32826);By();return;case 2:AFt(a,b);if(C()){break _;}Bv();m=A37;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){BW();if(s>0)Br((L(a.hp)*2.0-1.0)*0.30000001192092896,(L(a.hp)*2.0-1.0)*0.30000001192092896,(L(a.hp)*2.0-1.0)*0.30000001192092896);Bq(180.0-a.hG.pJ,0.0,1.0,0.0);Bu(m);B_(0.0,
1.0,0.0);F(m,(-0.5),(-0.25),0.0,d,e);F(m,0.5,(-0.25),0.0,t,e);F(m,0.5,0.75,0.0,t,u);F(m,(-0.5),0.75,0.0,d,u);Bn(m);By();s=s+1|0;}X(32826);By();return;case 3:AFt(a,b);if(C()){break _;}v=0.25;if(!A3_.data[h.bs].fE()&&h.bs!=A4e.b)v=0.5;Co(v,v,v);n=0;while(n<k){BW();if(n>0)Br((L(a.hp)*2.0-1.0)*0.20000000298023224/v,(L(a.hp)*2.0-1.0)*0.20000000298023224/v,(L(a.hp)*2.0-1.0)*0.20000000298023224/v);F0(a.uq,A3_.data[h.bs]);By();n=n+1|0;}X(32826);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,
t,u,v,$p);}
function ABF(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d!==null){if(d.bs<256){J();if(!A3_.data[d.bs].dO()){g=d.bs;b=B(173);$p=1;continue _;}}if(Dk(d)>=0){X(2896);if(d.bs>=256){b=B(224);$p=2;continue _;}b=B(173);$p=3;continue _;}}return;case 1:$z=ACM(c,b);if(C()){break _;}h=$z;DJ(c,h);i=A3_.data[g];BW();Br(e-2|0,f+3|0,0.0);Co(10.0,10.0,10.0);Br(1.0,0.5,8.0);Bq(210.0,1.0,
0.0,0.0);Bq(45.0,0.0,1.0,0.0);BN(1.0,1.0,1.0,1.0);F0(a.uq,i);By();return;case 2:$z=ACM(c,b);if(C()){break _;}g=$z;DJ(c,g);S6(a,e,f,(Dk(d)%16|0)*16|0,(Dk(d)/16|0)*16|0,16,16);V(2896);return;case 3:$z=ACM(c,b);if(C()){break _;}g=$z;DJ(c,g);S6(a,e,f,(Dk(d)%16|0)*16|0,(Dk(d)/16|0)*16|0,16,16);V(2896);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function JE(a,b,c,d,e,f){var g,h,i,j,k,l;if(d!==null){if(d.m>1){c=new Ba;Y(c);g=N(Bb(H(c,B(3)),d.m));X(2896);X(2929);Cn(b,g,((e+19|0)-2|0)-Db(b,g)|0,(f+6|0)+3|0,16777215);V(2896);V(2929);}if(d.dP>0){h=13-((d.dP*13|0)/IN(d)|0)|0;i=255-((d.dP*255|0)/IN(d)|0)|0;X(2896);X(2929);X(3553);Bv();j=A37;k=255-i|0;l=k<<16|i<<8;k=(k/4|0)<<16|16128;e=e+2|0;f=f+13|0;LQ(a,j,e,f,13,2,0);LQ(a,j,e,f,12,1,k);LQ(a,j,e,f,h,1,l);V(3553);V(2896);V(2929);BN(1.0,1.0,1.0,1.0);}}}
function LQ(a,b,c,d,e,f,g){var h,i,j;Bu(b);Ec(b,g);h=c+0|0;i=d+0|0;Bd(b,h,i,0.0);j=d+f|0;Bd(b,h,j,0.0);h=c+e|0;Bd(b,h,j,0.0);Bd(b,h,i,0.0);Bn(b);}
function S6(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;Bv();h=A37;Bu(h);i=b+0|0;j=c+g|0;k=(d+0|0)*0.00390625;l=(e+g|0)*0.00390625;F(h,i,j,0.0,k,l);m=b+f|0;n=(d+f|0)*0.00390625;F(h,m,j,0.0,n,l);l=c+0|0;j=(e+0|0)*0.00390625;F(h,m,l,0.0,n,j);F(h,i,l,0.0,k,j);Bn(h);}
function YJ(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AKg(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function MP(){var a=this;E.call(a);a.yN=null;a.Ed=0;a.Ea=0;a.Cv=0;a.Dg=0;}
function NT(){var a=this;E.call(a);a.fq=null;a.vH=null;}
function Vo(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(Gh()===null)A3u=A2Y.createElement("canvas");if(Gh().width<a.fq.width){b=Gh();c=a.fq.width;b.width=c;}if(Gh().height<a.fq.height){b=Gh();c=a.fq.height;b.height=c;}if(Ih()===null)A3v=Gh().getContext("2d");b=Ih();d=a.fq.width;e=a.fq.height;b.clearRect(0.0,0.0,d,e);b=Ih();c=a.fq;d=a.fq.width;e=a.fq.height;b.drawImage(c,0.0,0.0,d,e);b=Ih();d=a.fq.width;e=a.fq.height;c=b.getImageData(0.0,0.0,d,e);f=c.data;g=Bh(c.width,c.height);SL($rt_str(a.fq.src));if(f.byteLength<(g
*4|0)){Cx(a.vH,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;k=i.length;while(j<k){l=j*4|0;i[j]=f[l]<<16|f[l+1|0]<<8|f[l+2|0]|f[l+3|0]<<24;j=j+1|0;}m=Rf(h);b=a.vH;f=new P8;g=c.width;l=c.height;k=m.j1;j=Bh(g,l);if(k!=j){b=new Cq;Bl(b,B(554));M(b);}f.u7=g;f.Ac=l;f.wa=1;f.uL=j;if(!f.wa){g=0;while(g<f.uL){SW(m,g,J7(m,g)|(-16777216));g=g+1|0;}PY(m);}f.r8=m;Cx(b,f);}
function AXd(a,b){Vo(a,b);}
function NS(){var a=this;E.call(a);a.AU=null;a.Bs=null;}
function AEH(a,b){SL($rt_str(a.AU.src));Cx(a.Bs,null);}
function AXm(a,b){AEH(a,b);}
function He(){K3.call(this);}
function A$e(a,b,c){var d=new He();QI(d,a,b,c);return d;}
function QI(a,b,c,d){Jc(a,b);a.Z=c;a.cb=d;}
function ABz(a){var b,c;if(a.Z<a.cb){b=a.Z;a.Z=b+1|0;return a.vY(b);}c=new E4;Q(c);M(c);}
function LC(a,b){var c,d;if(a.lM()){c=new E8;Q(c);M(c);}if(a.Z<a.cb){d=a.Z;a.Z=d+1|0;a.s0(d,b);return a;}c=new F_;Q(c);M(c);}
function J7(a,b){var c,d;if(b>=0&&b<a.cb)return R_(a,b);c=new BP;d=new Ba;Y(d);Bl(c,N(H(Bb(H(Bb(H(d,B(267)),b),B(236)),a.cb),B(21))));M(c);}
function SW(a,b,c){var d,e;if(a.lM()){d=new E8;Q(d);M(d);}if(b>=0&&b<a.cb){AIp(a,b,c);return a;}e=new BP;d=new Ba;Y(d);Bl(e,N(H(Bb(H(Bb(H(d,B(267)),b),B(236)),a.cb),B(21))));M(e);}
function AQs(a){return a.lM();}
function Ra(){var a=this;He.call(a);a.yu=0;a.vs=0;a.uz=null;}
function R_(a,b){return a.uz.data[b+a.vs|0];}
function AIp(a,b,c){a.uz.data[b+a.vs|0]=c;}
function AM3(a){return a.yu;}
function Sh(){E.call(this);this.it=null;}
function Se(){var a=this;E.call(a);a.h1=null;a.u3=0;}
function Tm(){E.call(this);this.jz=null;}
function HV(){B5.call(this);}
function A$f(){var a=new HV();AQG(a);return a;}
function AQG(a){Q(a);}
function E8(){HV.call(this);}
function A$g(){var a=new E8();AWK(a);return a;}
function AWK(a){Q(a);}
function F_(){B5.call(this);}
function A$h(){var a=new F_();AV6(a);return a;}
function AV6(a){Q(a);}
function E4(){B5.call(this);}
function A$i(){var a=new E4();AS$(a);return a;}
function AS$(a){Q(a);}
function Qh(){var a=this;E.call(a);a.wo=null;a.z7=null;a.tx=0;a.p6=0;}
function Wl(a){return ED(a.wo);}
function LW(a,b){return Ce(a.z7)<b?0:1;}
function AV3(a,b){a.tx=b;}
function AZ9(a,b){a.p6=b;}
function X4(){var a=this;E.call(a);a.v5=null;a.nc=0;}
function OI(){CI.call(this);}
function A$j(){var a=new OI();AWL(a);return a;}
function AWL(a){DI(a);}
function Kx(){CI.call(this);}
function A$k(){var a=new Kx();AYW(a);return a;}
function AYW(a){DI(a);}
function AI2(a){DB(a.bE);U(a.bE,C9(1,(a.bh/2|0)-100|0,(a.bv/4|0)+72|0,B(555)));U(a.bE,C9(2,(a.bh/2|0)-100|0,(a.bv/4|0)+96|0,B(556)));if(a.J.jZ===null)Bc(a.bE,1).gE=0;}
function AHa(a,b,c){return;}
function AI_(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.co==1){c=a.J;$p=1;continue _;}if(b.co!=2)return;b=a.J;c=null;$p=3;continue _;case 1:AMM(c);if(C()){break _;}c=a.J;d=null;$p=2;case 2:Zu(c,d);if(C()){break _;}if(b.co!=2)return;b=a.J;c=null;$p=3;case 3:Xr(b,c);if(C()){break _;}b=a.J;c=J1();$p=4;case 4:Zu(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AJ1(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:I_(a,0,0,a.bh,a.bv,1615855616,(-1602211792));BW();Co(2.0,2.0,2.0);Dz(a,a.bS,B(557),(a.bh/2|0)/2|0,30,16777215);By();e=a.bS;f=new Ba;Y(f);Dz(a,e,N(Bb(H(f,B(558)),a.J.e.j2)),a.bh/2|0,100,16777215);$p=1;case 1:AA4(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AWM(a){return 0;}
function CJ(){var a=this;CO.call(a);a.ev=0;a.yp=0.0;a.yq=0.0;a.cY=0;a.b_=0;a.cZ=0.0;a.lS=0.0;a.g_=0.0;a.ho=0.0;a.hw=0.0;}
var A94=0.0;var A95=0.0;var A96=0.0;function A$l(a,b,c,d,e,f,g){var h=new CJ();ER(h,a,b,c,d,e,f,g);return h;}
function ER(a,b,c,d,e,f,g,h){var i,j;EQ(a,b);a.cY=0;a.b_=0;Dx(a,0.20000000298023224,0.20000000298023224);a.cF=a.ef/2.0;CC(a,c,d,e);a.hw=1.0;a.ho=1.0;a.g_=1.0;a.f=f+(BI()*2.0-1.0)*0.4000000059604645;a.h=g+(BI()*2.0-1.0)*0.4000000059604645;a.g=h+(BI()*2.0-1.0)*0.4000000059604645;i=(BI()+BI()+1.0)*0.15000000596046448;j=B7(a.f*a.f+a.h*a.h+a.g*a.g);c=a.f;d=j;c=c/d;e=i;a.f=c*e*0.4000000059604645;a.h=a.h/d*e*0.4000000059604645+0.10000000149011612;a.g=a.g/d*e*0.4000000059604645;a.yp=L(a.l)*3.0;a.yq=L(a.l)*3.0;a.cZ=
(L(a.l)*0.5+0.5)*2.0;a.b_=4.0/(L(a.l)*0.8999999761581421+0.10000000149011612)|0;a.cY=0;a.h_=0;}
function AJ4(a,b){var c,d;c=a.f;d=b;a.f=c*d;a.h=(a.h-0.10000000149011612)*d+0.10000000149011612;a.g=a.g*d;return a;}
function Uc(a,b){var c;c=0.20000000298023224*b;Dx(a,c,c);a.cZ=a.cZ*b;return a;}
function AGj(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=2;continue _;}a.h=a.h-0.04*a.lS;c=a.f;d=a.h;e=a.g;$p=1;case 1:ALY(a,c,d,e);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;case 2:B3(a);if(C()){break _;}a.h=a.h-0.04*a.lS;c=a.f;d=a.h;e=
a.g;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AIa(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.ev%16|0)/16.0;j=i+0.062437500804662704;k=(a.ev/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.cZ;n=a.bH;o=a.c-a.bH;p
=c;q=n+o*p-A94;r=a.ct+(a.j-a.ct)*p-A95;s=a.bG+(a.d-a.bG)*p-A96;$p=1;case 1:$z=a.s_(c);if(C()){break _;}t=$z;Cg(b,a.g_*t,a.ho*t,a.hw*t);u=d*m;t=q-u;v=g*m;n=t-v;c=e*m;o=r-c;d=f*m;e=s-d;f=h*m;w=e-f;p=i;x=l;F(b,n,o,w,p,x);n=t+v;w=r+c;y=e+f;z=k;F(b,n,w,y,p,z);c=q+u;n=c+v;d=s+d;p=d+f;y=j;F(b,n,w,p,y,z);F(b,c-v,o,d-f,y,x);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AXE(a){return 0;}
function WK(){var a=this;CI.call(a);a.rM=0;a.mX=0;}
function A10(){var a=new WK();APk(a);return a;}
function APk(a){DI(a);a.rM=0;a.mX=0;}
function ALy(a){a.rM=0;DB(a.bE);U(a.bE,C9(1,(a.bh/2|0)-100|0,(a.bv/4|0)+48|0,B(559)));U(a.bE,C9(4,(a.bh/2|0)-100|0,(a.bv/4|0)+24|0,B(560)));U(a.bE,C9(0,(a.bh/2|0)-100|0,(a.bv/4|0)+96|0,B(486)));}
function Y0(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.co){c=a.J;d=AUy(a,a.J.r);$p=1;continue _;}if(b.co==1){c=a.J;d=null;$p=2;continue _;}if(b.co!=4)return;b=a.J;c=null;$p=4;continue _;case 1:Zu(c,d);if(C()){break _;}if(b.co==1){c=a.J;d=null;$p=2;continue _;}if(b.co!=4)return;b=a.J;c=null;$p=4;continue _;case 2:Xr(c,d);if(C()){break _;}c=a.J;d=J1();$p=3;case 3:Zu(c,d);if(C()){break _;}if(b.co!=4)return;b=a.J;c=null;$p=4;case 4:Zu(b,
c);if(C()){break _;}b=a.J;$p=5;case 5:AAM(b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function ATz(a){a.mX=a.mX+1|0;}
function Zn(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:W1(a);if(C()){break _;}e=a.J.w;f=a.rM;a.rM=f+1|0;$p=2;case 2:$z=Wx(e,f);if(C()){break _;}f=$z;f=f?0:1;if(!(!f&&a.mX>=20)){g=255.0*(Bm(((a.mX%10|0)+d)/10.0*3.1415927410125732*2.0)*0.20000000298023224+0.800000011920929)|0;Cn(a.bS,B(561),8,a.bv-16|0,g<<16|g<<8|g);}Dz(a,a.bS,B(562),a.bh/2|0,40,16777215);$p=3;case 3:AA4(a,b,c,d);if(C())
{break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function JO(){var a=this;E.call(a);a.ba=null;a.V=null;a.U=null;a.X=null;}
function A$m(){var a=new JO();ACK(a);return a;}
function ACK(a){a.ba=$rt_createFloatMultiArray([16,16]);a.V=$rt_createFloatArray(16);a.U=$rt_createFloatArray(16);a.X=$rt_createFloatArray(16);}
function AL7(a,b,c,d,e,f,g){var h;h=0;while(h<6){if(a.ba.data[h].data[0]*b+a.ba.data[h].data[1]*c+a.ba.data[h].data[2]*d+a.ba.data[h].data[3]<=0.0&&a.ba.data[h].data[0]*e+a.ba.data[h].data[1]*c+a.ba.data[h].data[2]*d+a.ba.data[h].data[3]<=0.0&&a.ba.data[h].data[0]*b+a.ba.data[h].data[1]*f+a.ba.data[h].data[2]*d+a.ba.data[h].data[3]<=0.0&&a.ba.data[h].data[0]*e+a.ba.data[h].data[1]*f+a.ba.data[h].data[2]*d+a.ba.data[h].data[3]<=0.0&&a.ba.data[h].data[0]*b+a.ba.data[h].data[1]*c+a.ba.data[h].data[2]*g+a.ba.data[h].data[3]
<=0.0&&a.ba.data[h].data[0]*e+a.ba.data[h].data[1]*c+a.ba.data[h].data[2]*g+a.ba.data[h].data[3]<=0.0&&a.ba.data[h].data[0]*b+a.ba.data[h].data[1]*f+a.ba.data[h].data[2]*g+a.ba.data[h].data[3]<=0.0&&a.ba.data[h].data[0]*e+a.ba.data[h].data[1]*f+a.ba.data[h].data[2]*g+a.ba.data[h].data[3]<=0.0)return 0;h=h+1|0;}return 1;}
function SI(){var a=this;JO.call(a);a.nt=null;a.mM=null;a.wY=null;}
var A$n=null;function A0P(){var a=new SI();AAV(a);return a;}
function AAV(a){ACK(a);a.nt=FW(16);a.mM=FW(16);a.wY=FW(16);}
function O4(){AET(A$n);return A$n;}
function FZ(a,b,c){var d,e;b=b.data;d=DG(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AET(a){J6(a.nt);J6(a.mM);J6(a.wY);Qx(2983,a.nt);Qx(2982,a.mM);Nx(Qv(a.nt),16);RX(a.nt,a.V);Nx(Qv(a.mM),16);RX(a.mM,a.U);a.X.data[0]=a.U.data[0]*a.V.data[0]+a.U.data[1]*a.V.data[4]+a.U.data[2]*a.V.data[8]+a.U.data[3]*a.V.data[12];a.X.data[1]=a.U.data[0]*a.V.data[1]+a.U.data[1]*a.V.data[5]+a.U.data[2]*a.V.data[9]+a.U.data[3]*a.V.data[13];a.X.data[2]=a.U.data[0]*a.V.data[2]+a.U.data[1]*a.V.data[6]+a.U.data[2]*a.V.data[10]+a.U.data[3]*a.V.data[14];a.X.data[3]=a.U.data[0]*a.V.data[3]+a.U.data[1]*a.V.data[7]
+a.U.data[2]*a.V.data[11]+a.U.data[3]*a.V.data[15];a.X.data[4]=a.U.data[4]*a.V.data[0]+a.U.data[5]*a.V.data[4]+a.U.data[6]*a.V.data[8]+a.U.data[7]*a.V.data[12];a.X.data[5]=a.U.data[4]*a.V.data[1]+a.U.data[5]*a.V.data[5]+a.U.data[6]*a.V.data[9]+a.U.data[7]*a.V.data[13];a.X.data[6]=a.U.data[4]*a.V.data[2]+a.U.data[5]*a.V.data[6]+a.U.data[6]*a.V.data[10]+a.U.data[7]*a.V.data[14];a.X.data[7]=a.U.data[4]*a.V.data[3]+a.U.data[5]*a.V.data[7]+a.U.data[6]*a.V.data[11]+a.U.data[7]*a.V.data[15];a.X.data[8]=a.U.data[8]
*a.V.data[0]+a.U.data[9]*a.V.data[4]+a.U.data[10]*a.V.data[8]+a.U.data[11]*a.V.data[12];a.X.data[9]=a.U.data[8]*a.V.data[1]+a.U.data[9]*a.V.data[5]+a.U.data[10]*a.V.data[9]+a.U.data[11]*a.V.data[13];a.X.data[10]=a.U.data[8]*a.V.data[2]+a.U.data[9]*a.V.data[6]+a.U.data[10]*a.V.data[10]+a.U.data[11]*a.V.data[14];a.X.data[11]=a.U.data[8]*a.V.data[3]+a.U.data[9]*a.V.data[7]+a.U.data[10]*a.V.data[11]+a.U.data[11]*a.V.data[15];a.X.data[12]=a.U.data[12]*a.V.data[0]+a.U.data[13]*a.V.data[4]+a.U.data[14]*a.V.data[8]
+a.U.data[15]*a.V.data[12];a.X.data[13]=a.U.data[12]*a.V.data[1]+a.U.data[13]*a.V.data[5]+a.U.data[14]*a.V.data[9]+a.U.data[15]*a.V.data[13];a.X.data[14]=a.U.data[12]*a.V.data[2]+a.U.data[13]*a.V.data[6]+a.U.data[14]*a.V.data[10]+a.U.data[15]*a.V.data[14];a.X.data[15]=a.U.data[12]*a.V.data[3]+a.U.data[13]*a.V.data[7]+a.U.data[14]*a.V.data[11]+a.U.data[15]*a.V.data[15];a.ba.data[0].data[0]=a.X.data[3]-a.X.data[0];a.ba.data[0].data[1]=a.X.data[7]-a.X.data[4];a.ba.data[0].data[2]=a.X.data[11]-a.X.data[8];a.ba.data[0].data[3]
=a.X.data[15]-a.X.data[12];FZ(a,a.ba,0);a.ba.data[1].data[0]=a.X.data[3]+a.X.data[0];a.ba.data[1].data[1]=a.X.data[7]+a.X.data[4];a.ba.data[1].data[2]=a.X.data[11]+a.X.data[8];a.ba.data[1].data[3]=a.X.data[15]+a.X.data[12];FZ(a,a.ba,1);a.ba.data[2].data[0]=a.X.data[3]+a.X.data[1];a.ba.data[2].data[1]=a.X.data[7]+a.X.data[5];a.ba.data[2].data[2]=a.X.data[11]+a.X.data[9];a.ba.data[2].data[3]=a.X.data[15]+a.X.data[13];FZ(a,a.ba,2);a.ba.data[3].data[0]=a.X.data[3]-a.X.data[1];a.ba.data[3].data[1]=a.X.data[7]-a.X.data[5];a.ba.data[3].data[2]
=a.X.data[11]-a.X.data[9];a.ba.data[3].data[3]=a.X.data[15]-a.X.data[13];FZ(a,a.ba,3);a.ba.data[4].data[0]=a.X.data[3]-a.X.data[2];a.ba.data[4].data[1]=a.X.data[7]-a.X.data[6];a.ba.data[4].data[2]=a.X.data[11]-a.X.data[10];a.ba.data[4].data[3]=a.X.data[15]-a.X.data[14];FZ(a,a.ba,4);a.ba.data[5].data[0]=a.X.data[3]+a.X.data[2];a.ba.data[5].data[1]=a.X.data[7]+a.X.data[6];a.ba.data[5].data[2]=a.X.data[11]+a.X.data[10];a.ba.data[5].data[3]=a.X.data[15]+a.X.data[14];FZ(a,a.ba,5);}
function ACq(){A$n=A0P();}
function Oe(){}
function ABi(){var a=this;E.call(a);a.zV=null;a.tp=0.0;a.tP=0.0;a.t5=0.0;}
function A1l(){var a=new ABi();AYn(a);return a;}
function AYn(a){a.zV=O4();}
function AI0(a,b,c,d){a.tp=b;a.tP=c;a.t5=d;}
function V9(a,b,c,d,e,f,g){var h,i;h=b-a.tp;i=c-a.tP;b=d-a.t5;d=e-a.tp;e=f-a.tP;c=g-a.t5;return AL7(a.zV,h,i,b,d,e,c);}
function KN(a,b){return V9(a,b.N,b.H,b.O,b.R,b.Q,b.S);}
function MH(){E.call(this);}
var A$o=null;function A$p(){var a=new MH();AGd(a);return a;}
function AGd(a){return;}
function Dr(){X(2896);X(16384);X(16385);X(2903);}
function Gp(){var b;V(2896);V(16384);V(16385);V(2903);b=Cs(BS(0.699999988079071,1.0,(-0.20000000298023224)));OT(b.t,b.v,b.s,0.0);EI(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);EI(0.0,0.0,0.0,1.0);EI(0.0,0.0,0.0,1.0);b=Cs(BS((-0.699999988079071),1.0,0.20000000298023224));OT(b.t,b.v,b.s,0.0);EI(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);EI(0.0,0.0,0.0,1.0);EI(0.0,0.0,0.0,1.0);EI(0.4000000059604645,0.4000000059604645,0.4000000059604645,1.0);}
function OT(b,c,d,e){return EI(b,c,d,e);}
function EI(b,c,d,e){D3(A$o);Cu(Cu(Cu(Cu(A$o,b),c),d),e);FE(A$o);return A$o;}
function AMz(){A$o=FW(16);}
function G2(){var a=this;E.call(a);a.xr=null;a.fJ=null;a.mg=null;}
function A$q(a,b,c){var d=new G2();Jq(d,a,b,c);return d;}
function Jq(a,b,c,d){a.xr=b;a.fJ=c;a.mg=d;}
function AWv(a){return a.fJ.fH()+a.mg.fH()|0;}
function AWl(a){return a.xr;}
function ANe(a,b){return b<a.fJ.fH()?a.fJ.fQ(b):a.mg.fQ(b-a.fJ.fH()|0);}
function AUn(a,b,c){return b<a.fJ.fH()?a.fJ.i6(b,c):a.mg.i6(b-a.fJ.fH()|0,c);}
function APM(a,b,c){if(b<a.fJ.fH())a.fJ.iF(b,c);else a.mg.iF(b-a.fJ.fH()|0,c);}
function AY0(a){return a.fJ.ft();}
function Uy(a){var b,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.fJ;$p=1;case 1:b.jk();if(C()){break _;}b=a.mg;$p=2;case 2:b.jk();if(C()){break _;}return;default:Es();}}CM().s(a,b,$p);}
function VC(){CJ.call(this);}
function ARg(a,b,c,d,e,f,g,h){var i=new VC();ASS(i,a,b,c,d,e,f,g,h);return i;}
function ASS(a,b,c,d,e,f,g,h,i){ER(a,b,c,d,e,f,g,h);a.ev=i.W;a.lS=i.A5;a.hw=0.6000000238418579;a.ho=0.6000000238418579;a.g_=0.6000000238418579;a.cZ=a.cZ/2.0;}
function ANB(a){return 1;}
function UK(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=((a.ev%16|0)+a.yp/4.0)/16.0;j=i+0.015609375201165676;k=((a.ev/16|0)+a.yq/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.cZ;n
=a.bH;o=a.c-a.bH;p=c;q=n+o*p-A94;r=a.ct+(a.j-a.ct)*p-A95;s=a.bG+(a.d-a.bG)*p-A96;$p=1;case 1:$z=Zi(a,c);if(C()){break _;}t=$z;Cg(b,t*a.g_,t*a.ho,t*a.hw);t=d*m;u=q-t;g=g*m;v=u-g;w=e*m;o=r-w;c=f*m;d=s-c;e=h*m;n=d-e;x=i;p=l;F(b,v,o,n,x,p);n=u+g;v=r+w;y=d+e;z=k;F(b,n,v,y,x,z);d=q+t;n=d+g;c=s+c;x=c+e;y=j;F(b,n,v,x,y,z);F(b,d-g,o,c-e,y,p);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function Jg(){B5.call(this);}
function A$r(){var a=new Jg();ATG(a);return a;}
function ATG(a){Q(a);}
function Ie(){CJ.call(this);}
function A$s(a,b,c,d){var e=new Ie();Qw(e,a,b,c,d);return e;}
function Qw(a,b,c,d,e){ER(a,b,c,d,e,0.0,0.0,0.0);a.f=a.f*0.30000001192092896;a.h=BI()*0.20000000298023224+0.10000000149011612;a.g=a.g*0.30000001192092896;a.g_=1.0;a.ho=1.0;a.hw=1.0;a.ev=16;Dx(a,0.009999999776482582,0.009999999776482582);a.lS=0.05999999865889549;a.b_=8.0/(BI()*0.8+0.2)|0;}
function AFM(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AIa(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AJb(a){var b,c,d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;a.h=a.h-a.lS;b=a.f;c=a.h;d=a.g;$p=1;case 1:ALY(a,b,c,d);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;e=a.b_;a.b_=e-1|0;if(e<=0){$p=2;continue _;}if(a.ca){if(BI()<0.5){$p=5;continue _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}f=a.k;e
=I(a.c);g=I(a.j);h=I(a.d);$p=3;continue _;case 2:B3(a);if(C()){break _;}if(a.ca){if(BI()<0.5){$p=5;continue _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}f=a.k;e=I(a.c);g=I(a.j);h=I(a.d);$p=3;case 3:$z=XG(f,e,g,h);if(C()){break _;}f=$z;if(!f.mk()&&!f.c3())return;i=I(a.j)+1|0;f=a.k;e=I(a.c);g=I(a.j);h=I(a.d);$p=4;case 4:$z=AAd(f,e,g,h);if(C()){break _;}e=$z;b=i-H0(e);if(a.j>=b)return;$p=6;continue _;case 5:B3(a);if(C()){break _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;f=a.k;e=I(a.c);g=I(a.j);h
=I(a.d);$p=3;continue _;case 6:B3(a);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function Hr(){var a=this;He.call(a);a.dS=null;a.xC=0;a.dH=0;}
function A$t(a,b,c,d,e,f){var g=new Hr();Mr(g,a,b,c,d,e,f);return g;}
function Mr(a,b,c,d,e,f,g){QI(a,c,e,f);a.dH=b;a.dS=d;a.xC=g;}
function AQn(a){return a.xC;}
function MR(){Hr.call(this);}
function APi(a,b){var c,d;c=a.dS.b4.data;d=a.dH;b=b*4|0;return c[d+b|0]&255|(a.dS.b4.data[(a.dH+b|0)+1|0]&255)<<8|(a.dS.b4.data[(a.dH+b|0)+2|0]&255)<<16|(a.dS.b4.data[(a.dH+b|0)+3|0]&255)<<24;}
function AM2(a,b,c){var d,e;d=a.dS.b4.data;e=a.dH;b=b*4|0;d[e+b|0]=c<<24>>24;a.dS.b4.data[(a.dH+b|0)+1|0]=c>>8<<24>>24;a.dS.b4.data[(a.dH+b|0)+2|0]=c>>16<<24>>24;a.dS.b4.data[(a.dH+b|0)+3|0]=c>>24<<24>>24;}
function R0(){Hr.call(this);}
function ASz(a,b){var c,d;c=a.dS.b4.data;d=a.dH;b=b*4|0;return (c[d+b|0]&255)<<24|(a.dS.b4.data[(a.dH+b|0)+1|0]&255)<<16|(a.dS.b4.data[(a.dH+b|0)+2|0]&255)<<8|a.dS.b4.data[(a.dH+b|0)+3|0]&255;}
function AND(a,b,c){var d,e;d=a.dS.b4.data;e=a.dH;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.dS.b4.data[(a.dH+b|0)+1|0]=c>>16<<24>>24;a.dS.b4.data[(a.dH+b|0)+2|0]=c>>8<<24>>24;a.dS.b4.data[(a.dH+b|0)+3|0]=c<<24>>24;}
function AFT(){E.call(this);this.tY=null;}
function AQ2(a){var b=new AFT();AXB(b,a);return b;}
function AXB(a,b){a.tY=b;}
function VH(a,b,c){return F6(b,a.tY)>=F6(c,a.tY)?1:(-1);}
function ASP(a,b,c){return VH(a,b,c);}
function Sl(){E.call(this);this.vL=null;}
function AKi(a,b,c){var d,e;d=b.eU;e=c.eU;return d&&!e?1:e&&!d?(-1):F6(b,a.vL)>=F6(c,a.vL)?(-1):1;}
function AYH(a,b,c){return AKi(a,b,c);}
function Gl(){E.call(this);}
var A$u=null;var A$v=null;var A$w=null;var A$x=null;var A$y=null;function A$z(){var a=new Gl();V_(a);return a;}
function V_(a){return;}
function OL(b,c){var d,e,f;if(c===null)c=A$x;d=O(E,b.p);AFU(b,d);Nk(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;Ol(b,e,f[e]);e=e+1|0;}}
function AIT(){A$u=new Pi;A$v=new Ph;A$w=new Pj;A$x=new SO;A$y=new SM;}
function GL(){var a=this;E.call(a);a.lx=null;a.vO=null;a.z8=null;a.zr=null;a.DH=null;a.CH=0.0;a.B9=0.0;a.BA=0.0;a.Bz=0.0;a.By=0.0;}
var A9J=null;var A91=0.0;var A92=0.0;var A93=0.0;function A1D(){var a=new GL();YN(a);return a;}
function YN(a){var b;a.lx=CY();BK(a.lx,K(HQ),A1V());BK(a.lx,K(Lr),A1m());b=Le(Hb(a.lx));while(Fl(b)){Kr(b).pw=a;}}
function RK(a,b){var c;c=Cz(a.lx,b);if(c===null&&b!==K(DF)){c=RK(a,H$(b));BK(a.lx,b,c);}return c;}
function ADp(a,b){return Sy(a,b)===null?0:1;}
function Sy(a,b){return RK(a,C4(b));}
function ALD(a,b,c,d,e,f){var g,h,i;a.zr=b;a.z8=c;a.DH=e;a.vO=d;a.CH=e.K+(e.q-e.K)*f;a.B9=e.P+(e.E-e.P)*f;g=e.b6;h=e.c-e.b6;i=f;a.BA=g+h*i;a.Bz=e.bP+(e.j-e.bP)*i;a.By=e.b7+(e.d-e.b7)*i;}
function UW(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(AF0(b,a.BA,a.Bz,a.By)>=4096.0)return;d=a.zr;e=b.de;f=b.dc;g=b.dj;$p=1;case 1:$z=AH1(d,e,f,g);if(C()){break _;}h=$z;Fh(h,h,h);i=b.de-A91;j=b.dc-A92;k=b.dj-A93;$p=2;case 2:AAQ(a,b,i,j,k,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAQ(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=Sy(a,b);if(g===null)return;$p=1;case 1:g.zK(b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AZ$(a){return a.vO;}
function AGF(){A9J=A1D();}
function GO(){var a=this;E.call(a);a.dn=null;a.B0=null;a.r7=null;a.mK=null;a.DS=null;a.pJ=0.0;a.CU=0.0;a.B5=null;a.AK=0.0;a.AJ=0.0;a.AI=0.0;}
var A5G=null;var A9Y=0.0;var A9Z=0.0;var A90=0.0;function A0t(){var a=new GO();ABS(a);return a;}
function ABS(a){var b,c,d,e,f;a.dn=CY();BK(a.dn,K(IO),A0b());b=a.dn;c=new QD;d=A2d();e=new Nh;Jj(e,6,0.5);FA(c,d,0.699999988079071);c.jj=e;BK(b,K(Hg),c);d=a.dn;f=new Qm;c=A1U();e=A1B();FA(f,c,0.699999988079071);f.jj=e;BK(d,K(I7),f);BK(a.dn,K(Ip),A1N());BK(a.dn,K(HU),AQH(A16(),0.5));d=a.dn;f=new Dj;c=new GH;I6(c);FA(f,c,0.5);BK(d,K(HG),f);BK(a.dn,K(HZ),A1c());d=a.dn;f=new QG;c=new GH;I6(c);FA(f,c,3.0);f.rL=6.0;BK(d,K(Ju),f);BK(a.dn,K(Ea),AQH(AZx(),0.5));d=a.dn;f=new Qt;D8(f);BK(d,K(CO),f);BK(a.dn,K(Hj),A1z());d
=a.dn;f=new OH;D8(f);BK(d,K(HY),f);BK(a.dn,K(Er),T4());BK(a.dn,K(KA),A0w());BK(a.dn,K(Ic),A0r());BK(a.dn,K(Fs),A1K());d=Le(Hb(a.dn));while(Fl(d)){Kr(d).hG=a;}}
function S$(a,b){var c;c=Cz(a.dn,b);if(c===null&&b!==K(CO)){c=S$(a,H$(b));BK(a.dn,b,c);}return c;}
function Pl(a,b){return S$(a,C4(b));}
function ACu(a,b,c,d,e,f,g){var h,i,j;a.mK=b;a.r7=c;a.B5=f;a.DS=e;a.B0=d;a.pJ=e.K+(e.q-e.K)*g;a.CU=e.P+(e.E-e.P)*g;h=e.b6;i=e.c-e.b6;j=g;a.AK=h+i*j;a.AJ=e.bP+(e.j-e.bP)*j;a.AI=e.b7+(e.d-e.b7)*j;}
function AHS(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.b6;e=b.c-b.b6;f=c;e=d+e*f;d=b.bP+(b.j-b.bP)*f;g=b.b7+(b.d-b.b7)*f;h=b.K+(b.q-b.K)*c;$p=1;case 1:$z=b.s_(c);if(C()){break _;}i=$z;Fh(i,i,i);e=e-A9Y;d=d-A9Z;f=g-A90;$p=2;case 2:AK8(a,b,e,d,f,h,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AK8(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=Pl(a,b);if(h===null)return;$p=1;case 1:h.hS(b,c,d,e,f,g);if(C()){break _;}$p=2;case 2:AH3(h,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AXF(a,b){a.mK=b;}
function AEX(a,b,c,d){var e,f,g;e=b-a.AK;f=c-a.AJ;g=d-a.AI;return e*e+f*f+g*g;}
function AFv(){A5G=A0t();}
function Lc(){E.call(this);}
var A$A=null;var A$B=null;function A$C(){var a=new Lc();AMi(a);return a;}
function AMi(a){return;}
function RB(b){var c;c=0;while(true){if(c>=A$A.data.length)return (-1);if(b==A$A.data[c])break;c=c+1|0;}return c;}
function AJO(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;A$A=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;A$B=b;}
function Is(){B5.call(this);}
function A$D(){var a=new Is();AXt(a);return a;}
function AXt(a){Q(a);}
function R9(){var a=this;E.call(a);a.d9=0;a.eo=0;a.d$=0;}
function Cy(a,b,c){var d=new R9();APE(d,a,b,c);return d;}
function APE(a,b,c,d){a.d9=b;a.eo=c;a.d$=d;}
function AWr(a,b){var c;if(!(b instanceof R9))return 0;c=b;return c.d9==a.d9&&c.eo==a.eo&&c.d$==a.d$?1:0;}
function ASZ(a){return (Bh(a.d9,8976890)+Bh(a.eo,981131)|0)+a.d$|0;}
function Me(){Eu.call(this);}
var A$E=0.0;var A$F=null;function ZV(){A$E=NaN;A$F=K($rt_floatcls());}
function Gg(){E.call(this);}
var A2J=null;var A2L=null;var A2M=null;var A2K=null;var A2I=null;function A$G(){var a=new Gg();ALa(a);return a;}
function ALa(a){return;}
function AHw(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;A2J=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);A2L=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);A2M=b;A2K=new Sj;A2I=new Pg;}
function Ld(){E.call(this);}
var A$H=null;var A$I=null;function A$J(){var a=new Ld();AFn(a);return a;}
function AFn(a){return;}
function AIU(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=$rt_floatToIntBits(b);c.wJ=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.sy=0;c.sk=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AI7(A$I,f);if(h<0)h= -h-2|0;i=9+(f-A$I.data[h]|0)|0;j=Long_fromInt(e);k=Long_shru(Long_mul(j,Long_fromInt(A$H.data[h])),32-i|0).lo;if(k>=1000000000){h=h+1|0;i=9+(f-A$I.data[h]|0)|0;k=Long_shru(Long_mul(j,Long_fromInt(A$H.data[h])),
32-i|0).lo;}g=(31-i|0)-g|0;l=g>=0?A$H.data[h]>>>g:A$H.data[h]<< -g;m=(l+1|0)>>1;n=l>>1;if(e==4194304)n=n>>2;o=10;while(o<=n){o=o*10|0;}if((k%o|0)>=(n/2|0))o=o/10|0;p=10;while(p<=m){p=p*10|0;}if((p-(k%p|0)|0)>(m/2|0))p=p/10|0;e=S(o,p);e=e>0?Bh(k/o|0,o):e<0?Bh(k/p|0,p)+p|0:Bh((k+(p/2|0)|0)/p|0,p);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.sy=e;c.sk=h-50|0;}
function AF$(){var b,c,d,e,f,g,h,i;A$H=$rt_createIntArray(100);A$I=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=A$H.data;g=d+50|0;f[g]=$rt_udiv(e,20);A$I.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=A$H.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);A$I.data[i]=c;d=d+1|0;}}
function Pg(){var a=this;E.call(a);a.sy=0;a.sk=0;a.wJ=0;}
function A$K(){var a=new Pg();AM1(a);return a;}
function AM1(a){return;}
function Dj(){var a=this;C1.call(a);a.lr=null;a.jj=null;}
function AQH(a,b){var c=new Dj();FA(c,a,b);return c;}
function FA(a,b,c){D8(a);a.lr=b;a.k1=c;}
function AZg(a,b){a.jj=b;}
function V3(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();X(2884);try{h=b.ex+(b.da-b.ex)*g;i=b.K+(b.q-b.K)*g;j=b.P+(b.E-b.P)*g;Br(c,d,e);k=b.nq+g;Bq(180.0-h,0.0,1.0,0.0);if(b.cD>0){f=DG((b.cD+g
-1.0)/20.0*1.600000023841858);if(f>1.0)f=1.0;Bq(f*a.zz(b),0.0,0.0,1.0);}l=0.0625;V(32826);Co((-1.0),(-1.0),1.0);a.uY(b,g);Br(0.0,(-1.5078125),0.0);m=b.iW+(b.bX-b.iW)*g;n=b.fI-b.bX*(1.0-g);if(m>1.0)m=1.0;o=b.rX;p=Nb(b);$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){o=$$je;}else{throw $$e;}}B4(o);V(2884);By();return;case 1:try{AJ2(a,o,p);if(C()){break _;}V(3008);o=a.lr;f=i-h;o.gW(n,m,k,f,j,l);q=0;if(q>=4){$p=2;continue _;}$p=3;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){o=$$je;}
else{throw $$e;}}B4(o);V(2884);By();return;case 2:a:{try{$z=Zi(b,g);if(C()){break _;}r=$z;s=a.zC(b,r,g);q=s>>24&255;if(!(q<=0&&b.c$<=0&&b.cD<=0)){X(3553);X(3008);V(3042);C0(770,771);GA(514);if(!(b.c$<=0&&b.cD<=0)){BN(r,0.0,0.0,0.4000000059604645);a.lr.gW(n,m,k,f,j,l);t=0;if(t<4){$p=4;continue _;}}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BN(u,v,w,x);a.lr.gW(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}GA(515);X(3042);V(3008);V(3553);}X(32826);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BB)
{o=$$je;}else{throw $$e;}}B4(o);}V(2884);By();return;case 3:try{$z=a.j5(b,q);if(C()){break _;}s=$z;if(s){a.jj.gW(n,m,k,f,j,l);X(3042);V(3008);}q=q+1|0;if(q>=4){$p=2;continue _;}continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){o=$$je;}else{throw $$e;}}B4(o);V(2884);By();return;case 4:a:{try{$z=a.j5(b,t);if(C()){break _;}y=$z;if(y){BN(r,0.0,0.0,0.4000000059604645);a.jj.gW(n,m,k,f,j,l);}t=t+1|0;if(t<4){continue _;}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BN(u,v,w,x);a.lr.gW(n,
m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}GA(515);X(3042);V(3008);V(3553);X(32826);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){o=$$je;}else{throw $$e;}}B4(o);}V(2884);By();return;case 5:a:{try{$z=a.j5(b,y);if(C()){break _;}s=$z;if(s){BN(u,v,w,x);a.jj.gW(n,m,k,f,j,l);}y=y+1|0;if(y>=4){GA(515);X(3042);V(3008);V(3553);X(32826);break a;}continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){o=$$je;}else{throw $$e;}}B4(o);}V(2884);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,$p);}
function AKr(a,b,c){return 0;}
function AVE(a,b){return 90.0;}
function AWy(a,b,c,d){return 0;}
function AYp(a,b,c){return;}
function AJy(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.DZ(b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Ms(){var a=this;Dj.call(a);a.x9=null;a.xv=null;a.zn=null;}
var A$L=null;function A1c(){var a=new Ms();ADl(a);return a;}
function ADl(a){FA(a,Ty(0.0),0.5);a.x9=a.lr;a.xv=Ty(1.0);a.zn=Ty(0.5);}
function ALS(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=ADq(b.F,3-c|0);if(d!==null){e=Dl(d);if(e instanceof Ff){f=e;b=new Ba;Y(b);b=H(H(H(b,B(563)),A$L.data[f.yD]),B(564));g=S(c,2);b=N(H(Bb(b,g?1:2),B(505)));$p=1;continue _;}}return 0;case 1:AFt(a,b);if(C()){break _;}h=g?a.xv:a.zn;h.h0.hU=c?0:1;h.j9.hU=c?0:1;b=h.nP;i=S(c,1);b.hU=i&&g?0:1;h.dv.hU=i?0:1;h.dh.hU=i?0:1;h.ia.hU
=g&&c!=3?0:1;h.gy.hU=g&&c!=3?0:1;a.jj=h;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function Zo(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-b.cF;$p=1;case 1:V3(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AGu(a){B2(a.x9.dv,0.0625);}
function U7(a,b,c){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ALS(a,b,c);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,$p);}
function AGX(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:Zo(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Yq(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:Zo(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function V7(){var b,c;b=O(Cp,5);c=b.data;c[0]=B(233);c[1]=B(565);c[2]=B(566);c[3]=B(567);c[4]=B(568);A$L=b;}
function JP(){var a=this;Fr.call(a);a.gQ=0;a.h7=0;a.g5=0;a.hg=0;a.jo=null;a.co=0;a.gE=0;a.wn=0;}
function C9(a,b,c,d){var e=new JP();AUo(e,a,b,c,d);return e;}
function A$M(a,b,c,d,e,f){var g=new JP();PF(g,a,b,c,d,e,f);return g;}
function AUo(a,b,c,d,e){PF(a,b,c,d,200,20,e);}
function PF(a,b,c,d,e,f,g){Lb(a);a.gQ=200;a.h7=20;a.gE=1;a.wn=1;a.co=b;a.g5=c;a.hg=d;a.gQ=e;a.h7=f;a.jo=g;}
function Yx(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.wn)return;e=b.ey;f=3553;g=b.bi;b=B(496);$p=1;case 1:$z=ACM(g,b);if(C()){break _;}h=$z;Cf(f,h);BN(1.0,1.0,1.0,1.0);h=1;f=c>=a.g5&&d>=a.hg&&c<(a.g5+a.gQ|0)&&d<(a.hg+a.h7|0)?1:0;if(!a.gE)h=0;else if(f)h=2;i=a.g5;j=a.hg;h=46+(h*20|0)|0;Ct(a,i,j,0,h,a.gQ/2|0,a.h7);Ct(a,a.g5+(a.gQ/2|0)|0,a.hg,200-(a.gQ/2|0)|0,
h,a.gQ/2|0,a.h7);if(!a.gE)Dz(a,e,a.jo,a.g5+(a.gQ/2|0)|0,a.hg+((a.h7-8|0)/2|0)|0,(-6250336));else if(!f)Dz(a,e,a.jo,a.g5+(a.gQ/2|0)|0,a.hg+((a.h7-8|0)/2|0)|0,14737632);else Dz(a,e,a.jo,a.g5+(a.gQ/2|0)|0,a.hg+((a.h7-8|0)/2|0)|0,16777120);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Pb(a,b,c){return a.gE&&b>=a.g5&&c>=a.hg&&b<(a.g5+a.gQ|0)&&c<(a.hg+a.h7|0)?1:0;}
function Kn(){E.call(this);}
function A$N(){var a=new Kn();AO6(a);return a;}
function AO6(a){return;}
function NM(){}
function IU(){var a=this;Kn.call(a);a.xg=null;a.DU=null;a.s7=0;a.z9=0;a.l1=null;a.tz=null;}
function ZK(a){var b,c,d;a:{b=a.s7;c=a.z9;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6;return d|c&8|b<<2&16|c&32|b>>>8&64|b>>>5&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function W5(a){return a.l1.nu();}
function SK(a,b){var c,d,e,f,g;if(a.s7&1){c=new Kb;Q(c);M(c);}if(a.tz===null){c=new P5;Q(c);M(c);}d=b.data;e=d.length;if(e!=a.l1.data.length){c=new Cq;Q(c);M(c);}f=0;while(true){if(f>=e){c=b.data;g=new a.xg.fm();a.tz.call(g,c);return g;}if(!Fb(a.l1.data[f])&&d[f]!==null&&!QW(a.l1.data[f],d[f])){c=new Cq;Q(c);M(c);}if(Fb(a.l1.data[f])&&d[f]===null)break;f=f+1|0;}c=new Cq;Q(c);M(c);}
function Md(){}
function NR(){E.call(this);}
function A$O(){var a=new NR();AZM(a);return a;}
function AZM(a){return;}
function AEx(a){var b,c,d;Z();A20.requestPointerLock();b=B1();if(R2())clearTimeout(R2());KX(0);if(Long_lt(Long_sub(b,Nj()),Long_fromInt(3000))){c=new Qe;c.E2=a;d=3000-Long_sub(b,Nj()).lo|0;KX(setTimeout(Cj(c,"onTimer"),d));}}
function AS7(a){AEx(a);}
function SO(){E.call(this);}
function A$P(){var a=new SO();AOK(a);return a;}
function AOK(a){return;}
function AVi(a,b,c){return b!==null?b.kI(c): -c.kI(b);}
function SM(){E.call(this);}
function A$Q(){var a=new SM();AV0(a);return a;}
function AV0(a){return;}
function Pi(){Ev.call(this);}
function A$R(){var a=new Pi();AYZ(a);return a;}
function AYZ(a){return;}
function Ph(){E_.call(this);}
function A$S(){var a=new Ph();AY2(a);return a;}
function AY2(a){return;}
function Pj(){Fq.call(this);}
function A$T(){var a=new Pj();AUE(a);return a;}
function AUE(a){return;}
function Hf(){E.call(this);this.pw=null;}
function AFz(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.pw.z8;$p=1;case 1:$z=ACM(c,b);if(C()){break _;}d=$z;DJ(c,d);return;default:Es();}}CM().s(a,b,c,d,$p);}
function ASy(a,b){a.pw=b;}
function AIi(a){return a.pw.vO;}
function WN(){Hf.call(this);this.A$=null;}
function A1V(){var a=new WN();ANw(a);return a;}
function ANw(a){a.A$=A1y();}
function ALK(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();Br(c+0.5,d+0.75,e+0.5);$p=1;case 1:$z=AG8(b);if(C()){break _;}g=$z;Bq( -((g*360|0)/16.0),0.0,1.0,0.0);h=B(569);$p=2;case 2:AFz(a,h);if(C()){break _;}BW();Co(1.0,(-1.0),(-1.0));AHT(a.A$);By();Br(0.0,0.5,0.09000000357627869);Co(0.01666666753590107,(-0.01666666753590107),0.01666666753590107);B_(0.0,
0.0,(-0.01666666753590107));h=AIi(a);i=0;while(i<b.fM.data.length){j=b.fM.data[i];if(i!=b.pW)D5(h,j, -Db(h,j)/2|0,(i*10|0)-(b.fM.data.length*5|0)|0,0);else{k=new Ba;Y(k);j=N(H(H(H(k,B(570)),j),B(571)));D5(h,j, -Db(h,j)/2|0,(i*10|0)-(b.fM.data.length*5|0)|0,0);}i=i+1|0;}BN(1.0,1.0,1.0,1.0);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function TH(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ALK(a,b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Lr(){var a=this;DF.call(a);a.i0=0;a.iP=null;a.kE=0.0;a.lg=0.0;}
function A12(){var a=new Lr();AXL(a);return a;}
function AXL(a){a.i0=(-1);a.iP=B(572);a.lg=0.0;a.i0=20;}
function VD(a){return AB7(a.bY.bd,a.de,a.dc,a.dj)>256.0?0:1;}
function YH(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lg=a.kE;if(VD(a)){b=a.de+L(a.bY.n);c=a.dc+L(a.bY.n);d=a.dj+L(a.bY.n);BQ(a.bY,B(250),b,c,d,0.0,0.0,0.0);BQ(a.bY,B(251),b,c,d,0.0,0.0,0.0);a.kE=a.kE+1000.0/(a.i0+200.0);while(a.kE>360.0){a.kE=a.kE-360.0;a.lg=a.lg-360.0;}if(a.i0==(-1))LJ(a);if(a.i0>0)a.i0=
a.i0-1|0;else{e=4;f=0;if(f<e){g=HT(a.iP,a.bY);if(g===null)return;h=a.bY;i=C4(g);j=Da(Dy(a.de,a.dc,a.dj,a.de+1|0,a.dc+1|0,a.dj+1|0),8.0,4.0,8.0);$p=1;continue _;}}}return;case 1:$z=AHY(h,i,j);if(C()){break _;}h=$z;if(h.p>=6){LJ(a);return;}k=a.de+(Cb(a.bY.n)-Cb(a.bY.n))*4.0;l=(a.dc+D(a.bY.n,3)|0)-1|0;m=a.dj+(Cb(a.bY.n)-Cb(a.bY.n))*4.0;IV(g,k,l,m,L(a.bY.n)*360.0,0.0);$p=2;case 2:$z=g.sP(k,l,m);if(C()){break _;}n=$z;if(n){h=a.bY;$p=3;continue _;}f=f+1|0;if(f>=e)return;g=HT(a.iP,a.bY);if(g===null)return;h=a.bY;i
=C4(g);j=Da(Dy(a.de,a.dc,a.dj,a.de+1|0,a.dc+1|0,a.dj+1|0),8.0,4.0,8.0);$p=1;continue _;case 3:AIX(h,g);if(C()){break _;}o=0;while(o<20){c=a.de+0.5+(L(a.bY.n)-0.5)*2.0;d=a.dc+0.5+(L(a.bY.n)-0.5)*2.0;k=a.dj+0.5+(L(a.bY.n)-0.5)*2.0;BQ(a.bY,B(250),c,d,k,0.0,0.0,0.0);BQ(a.bY,B(251),c,d,k,0.0,0.0,0.0);o=o+1|0;}AAj(g);LJ(a);f=f+1|0;if(f>=e)return;g=HT(a.iP,a.bY);if(g===null)return;h=a.bY;i=C4(g);j=Da(Dy(a.de,a.dc,a.dj,a.de+1|0,a.dc+1|0,a.dj+1|0),8.0,4.0,8.0);$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,$p);}
function LJ(a){a.i0=200+D(a.bY.n,600)|0;}
function AMg(){Hf.call(this);this.us=null;}
function A1m(){var a=new AMg();AP2(a);return a;}
function AP2(a){a.us=CY();}
function VT(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();Br(c+0.5,d,e+0.5);g=Cz(a.us,b.iP);if(g===null){g=HT(b.iP,null);BK(a.us,b.iP,g);}if(g===null){By();return;}g.k=b.bY;Br(0.0,0.4000000059604645,0.0);Bq((b.lg+(b.kE-b.lg)*f)*10.0,0.0,1.0,0.0);Bq((-30.0),1.0,0.0,0.0);Br(0.0,(-0.4000000059604645),0.0);Co(0.4375,0.4375,0.4375);b=A5G;c=0.0;d=0.0;e=0.0;h=0.0;$p=1;case 1:AK8(b,g,c,d,e,
h,f);if(C()){break _;}By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function ALz(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:VT(a,b,c,d,e,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AKQ(){Dj.call(this);}
function A0b(){var a=new AKQ();AU4(a);return a;}
function AU4(a){FA(a,AVI(),1.0);a.jj=AVI();}
function AWq(a,b){return 180.0;}
function T1(a,b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c)return 0;if(c)return 0;d=B(573);$p=1;case 1:AFt(a,d);if(C()){break _;}e=1.0;f=1.0;$p=2;case 2:$z=Zi(b,f);if(C()){break _;}f=$z;f=(e-f)*0.5;V(3042);X(3008);C0(770,771);BN(1.0,1.0,1.0,f);return 1;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AWn(a,b){return 180.0;}
function Ue(a,b,c){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=T1(a,b,c);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,$p);}
function QD(){Dj.call(this);}
function ABC(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(574);$p=1;case 1:AFt(a,d);if(C()){break _;}return !c&&b.oY?1:0;default:Es();}}CM().s(a,b,c,d,$p);}
function AG6(a,b,c){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ABC(a,b,c);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,$p);}
function Fd(){var a=this;DO.call(a);a.gx=null;a.gR=null;a.iL=null;a.iK=null;a.iJ=null;a.iM=null;}
function A$U(a,b){var c=new Fd();Jj(c,a,b);return c;}
function Jj(a,b,c){var d,e;a.gx=BF(0,0);Bz(a.gx,(-4.0),(-4.0),(-8.0),8,8,8,c);BD(a.gx,0.0,18-b|0,(-6.0));a.gR=BF(28,8);Bz(a.gR,(-5.0),(-10.0),(-7.0),10,16,8,c);BD(a.gR,0.0,17-b|0,2.0);a.iL=BF(0,16);Bz(a.iL,(-2.0),0.0,(-2.0),4,b,4,c);d=a.iL;e=24-b|0;BD(d,(-3.0),e,7.0);a.iK=BF(0,16);Bz(a.iK,(-2.0),0.0,(-2.0),4,b,4,c);BD(a.iK,3.0,e,7.0);a.iJ=BF(0,16);Bz(a.iJ,(-2.0),0.0,(-2.0),4,b,4,c);BD(a.iJ,(-3.0),e,(-5.0));a.iM=BF(0,16);Bz(a.iM,(-2.0),0.0,(-2.0),4,b,4,c);BD(a.iM,3.0,e,(-5.0));}
function AYU(a,b,c,d,e,f,g){AEW(a,b,c,d,e,f,g);B2(a.gx,g);B2(a.gR,g);B2(a.iL,g);B2(a.iK,g);B2(a.iJ,g);B2(a.iM,g);}
function AEW(a,b,c,d,e,f,g){var h;a.gx.bL=e/57.2957763671875;a.gR.bM=1.5707963705062866;h=a.iL;b=b*0.6661999821662903;h.bM=Bx(b)*1.399999976158142*c;h=a.iK;d=b+3.1415927410125732;h.bM=Bx(d)*1.399999976158142*c;a.iJ.bM=Bx(d)*1.399999976158142*c;a.iM.bM=Bx(b)*1.399999976158142*c;}
function Nh(){Fd.call(this);}
function A2d(){var a=new Nh();AQE(a);return a;}
function AQE(a){Jj(a,6,0.0);}
function Qm(){Dj.call(this);}
function AHM(a,b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(575);$p=1;case 1:AFt(a,d);if(C()){break _;}return !c&&!b.vC?1:0;default:Es();}}CM().s(a,b,c,d,$p);}
function ALN(a,b,c){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AHM(a,b,c);if(C()){break _;}c=$z;return c;default:Es();}}CM().s(a,b,c,$p);}
function Yn(){Fd.call(this);}
function A1U(){var a=new Yn();AYX(a);return a;}
function AYX(a){Jj(a,12,0.0);a.gx=BF(0,0);Bz(a.gx,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BD(a.gx,0.0,6.0,(-8.0));a.gR=BF(28,8);Bz(a.gR,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BD(a.gR,0.0,5.0,2.0);}
function ALC(){Fd.call(this);}
function A1B(){var a=new ALC();AOB(a);return a;}
function AOB(a){Jj(a,12,0.0);a.gx=BF(0,0);Bz(a.gx,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BD(a.gx,0.0,6.0,(-8.0));a.gR=BF(28,8);Bz(a.gR,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BD(a.gR,0.0,5.0,2.0);a.iL=BF(0,16);Bz(a.iL,(-2.0),0.0,(-2.0),4,6,4,0.5);BD(a.iL,(-3.0),12.0,7.0);a.iK=BF(0,16);Bz(a.iK,(-2.0),0.0,(-2.0),4,6,4,0.5);BD(a.iK,3.0,12.0,7.0);a.iJ=BF(0,16);Bz(a.iJ,(-2.0),0.0,(-2.0),4,6,4,0.5);BD(a.iJ,(-3.0),12.0,(-5.0));a.iM=BF(0,16);Bz(a.iM,(-2.0),0.0,(-2.0),4,6,4,0.5);BD(a.iM,3.0,12.0,(-5.0));}
function XP(){Dj.call(this);}
function A1N(){var a=new XP();ARL(a);return a;}
function ARL(a){FA(a,A0S(),0.5);}
function Ze(a,b,c){var d,e,f;d=NG(b,c);e=1.0+Bm(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;c=d*d;c=c*c;f=(1.0+c*0.4000000059604645)*e;Co(f,(1.0+c*0.10000000149011612)/e,f);}
function Ud(a,b,c,d){var e,f;e=NG(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function AXA(a,b,c){Ze(a,b,c);}
function ARV(a,b,c,d){return Ud(a,b,c,d);}
function GH(){KH.call(this);}
function A$V(){var a=new GH();AXM(a);return a;}
function AXM(a){I6(a);}
function AT0(a,b,c,d,e,f,g){var h,i,j;ADU(a,b,c,d,e,f,g);h=Bm(a.vt*3.1415927410125732);i=Bm((1.0-(1.0-a.vt)*(1.0-a.vt))*3.1415927410125732);a.dv.bJ=0.0;a.dh.bJ=0.0;j=a.dv;b=0.10000000149011612-h*0.6000000238418579;j.bL= -b;a.dh.bL=b;a.dv.bM=(-1.5707963705062866);a.dh.bM=(-1.5707963705062866);j=a.dv;b=j.bM;c=h*1.2000000476837158-i*0.4000000059604645;j.bM=b-c;j=a.dh;j.bM=j.bM-c;j=a.dv;b=j.bJ;c=d*0.09000000357627869;j.bJ=b+Bx(c)*0.05000000074505806+0.05000000074505806;j=a.dh;j.bJ=j.bJ-(Bx(c)*0.05000000074505806
+0.05000000074505806);j=a.dv;b=j.bM;c=d*0.06700000166893005;j.bM=b+Bm(c)*0.05000000074505806;j=a.dh;j.bM=j.bM-Bm(c)*0.05000000074505806;}
function ADv(){GH.call(this);}
function A16(){var a=new ADv();APt(a);return a;}
function APt(a){I6(a);a.dv=BF(40,16);Bz(a.dv,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BD(a.dv,(-5.0),2.0,0.0);a.dh=BF(40,16);a.dh.kw=1;Bz(a.dh,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BD(a.dh,5.0,2.0,0.0);a.ia=BF(0,16);Bz(a.ia,(-1.0),0.0,(-1.0),2,12,2,0.0);BD(a.ia,(-2.0),12.0,0.0);a.gy=BF(0,16);a.gy.kw=1;Bz(a.gy,(-1.0),0.0,(-1.0),2,12,2,0.0);BD(a.gy,2.0,12.0,0.0);}
function Ju(){Dp.call(this);}
function AJJ(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.k;$p=1;case 1:$z=AH1(e,b,c,d);if(C()){break _;}f=$z;return f-0.5;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function QG(){Dj.call(this);this.rL=0.0;}
function Vr(a,b,c){Co(a.rL,a.rL,a.rL);}
function AZA(a,b,c){Vr(a,b,c);}
function Qt(){C1.call(this);}
function A$W(){var a=new Qt();ARz(a);return a;}
function ARz(a){D8(a);}
function AEv(a,b,c,d,e,f,g){BW();AXU(b.G,c-b.b6,d-b.bP,e-b.b7);By();}
function Hj(){var a=this;CO.call(a);a.pP=0;a.dd=0;a.l$=0;a.A8=0;a.me=0;a.dl=null;}
function If(a,b){var c,d,e,f,g,h,i,j,k,l;a.dd=b;c=b*90|0;a.q=c;a.K=c;c=a.dl.fC;d=a.dl.lR;e=a.dl.fC;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;d=d/32.0;f=e/32.0;g=a.l$+0.5;h=a.A8+0.5;i=a.me+0.5;if(!b)i=i-0.5625;j=S(b,1);if(!j)g=g-0.5625;k=S(b,2);if(!k)i=i+0.5625;l=S(b,3);if(!l)g=g+0.5625;if(!b)g=g-GE(a,a.dl.fC);if(!j)i=i+GE(a,a.dl.fC);if(!k)g=g+GE(a,a.dl.fC);if(!l)i=i-GE(a,a.dl.fC);e=h+GE(a,a.dl.lR);CC(a,g,e,i);K4(a.G,g-c+0.0062500000931322575,e-d+0.0062500000931322575,i-f+0.0062500000931322575,g+c+(-0.0062500000931322575),
e+d+(-0.0062500000931322575),i+f+(-0.0062500000931322575));}
function GE(a,b){return b==32?0.5:b!=64?0.0:0.5;}
function YY(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.pP;a.pP=b+1|0;if(b!=100)return;$p=1;case 1:$z=VF(a);if(C()){break _;}c=$z;if(c)return;a.pP=0;$p=2;case 2:B3(a);if(C()){break _;}d=a.k;e=new Er;f=a.k;g=a.c;h=a.j;i=a.d;j=new B6;Bw();Dg(j,A7T);Ga(e,f,g,h,i,j);$p=3;case 3:AIX(d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function VF(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k;c=a.G;$p=1;case 1:$z=TW(b,a,c);if(C()){break _;}b=$z;if(b.p>0)return 0;d=a.dl.fC/16|0;e=a.dl.lR/16|0;f=a.l$;g=a.me;if(!a.dd)f=I(a.c-a.dl.fC/32.0);if(a.dd==1)g=I(a.d-a.dl.fC/32.0);if(a.dd==2)f=I(a.c-a.dl.fC/32.0);if(a.dd==3)g=I(a.d-a.dl.fC/32.0);h=I(a.j-a.dl.lR/32.0);i=0;while
(i<d){j=0;if(j<e){if(a.dd&&a.dd!=2){b=a.k;k=a.l$;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.k;k=f+i|0;l=h+j|0;m=a.me;$p=3;continue _;}i=i+1|0;}b=a.k;c=a.G;$p=2;case 2:$z=Zm(b,a,c);if(C()){break _;}c=$z;k=0;while(k<c.p){if(Bc(c,k) instanceof Hj)return 0;k=k+1|0;}return 1;case 3:$z=XG(b,k,l,m);if(C()){break _;}b=$z;if(!b.c3())return 0;j=j+1|0;while(true){if(j<e){if(a.dd&&a.dd!=2){b=a.k;k=a.l$;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.k;k=f+i|0;l=h+j|0;m=a.me;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.k;c=a.G;$p=2;continue _;case 4:$z
=XG(b,k,l,m);if(C()){break _;}b=$z;if(!b.c3())return 0;j=j+1|0;while(true){if(j<e){if(a.dd&&a.dd!=2){b=a.k;k=a.l$;l=h+j|0;m=g+i|0;continue _;}b=a.k;k=f+i|0;l=h+j|0;m=a.me;$p=3;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.k;c=a.G;$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AQp(a){return 1;}
function ZY(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:B3(a);if(C()){break _;}d=a.k;b=new Er;e=a.k;f=a.c;g=a.j;h=a.d;i=new B6;Bw();Dg(i,A7T);Ga(b,e,f,g,h,i);$p=2;case 2:AIX(d,b);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function Wg(){C1.call(this);this.D5=null;}
function A1z(){var a=new Wg();ARF(a);return a;}
function ARF(a){D8(a);a.D5=new Df;}
function AKJ(a,b,c,d,e,f,g){var h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();Br(c,d,e);Bq(f,0.0,1.0,0.0);V(32826);h=B(576);$p=1;case 1:AFt(a,h);if(C()){break _;}h=b.dl;Co(0.0625,0.0625,0.0625);i=h.fC;j=h.lR;k=h.w9;l=h.w8;$p=2;case 2:Yy(a,b,i,j,k,l);if(C()){break _;}X(32826);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Yy(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g= -c/2.0;h= -d/2.0;i
=0;j=c/16|0;k=d/16|0;l=e+c|0;m=f+d|0;while(i<j){if(0<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=0+1|0;f=q*16|0;r=h+f;s=0*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=I(b.c);x=I(b.j+v/16.0);y=I(b.d);if(!b.dd)w=I(b.c+u/16.0);if(b.dd==1)y=I(b.d-u/16.0);if(b.dd==2)w=I(b.c-u/16.0);if(b.dd==3)y=I(b.d+u/16.0);z=a.hG.mK;$p=1;continue _;}i=i+1|0;}return;case 1:$z=AH1(z,w,x,y);if(C()){break _;}ba=$z;Fh(ba,ba,ba);ba=(l-o|0)/256.0;u=(l-c|0)/256.0;v=(m-s|0)/256.0;bb=(m-f|0)/256.0;Bv();z=A37;Bu(z);B_(0.0,0.0,(-1.0));bc=n;bd=t;be=u;bf
=v;F(z,bc,bd,(-0.5),be,bf);bg=p;bh=ba;F(z,bg,bd,(-0.5),bh,bf);bf=r;bi=bb;F(z,bg,bf,(-0.5),bh,bi);F(z,bc,bf,(-0.5),be,bi);B_(0.0,0.0,1.0);F(z,bc,bf,0.5,0.75,0.0);F(z,bg,bf,0.5,0.8125,0.0);F(z,bg,bd,0.5,0.8125,0.0625);F(z,bc,bd,0.5,0.75,0.0625);B_(0.0,(-1.0),0.0);F(z,bc,bf,(-0.5),0.75,0.001953125);F(z,bg,bf,(-0.5),0.8125,0.001953125);F(z,bg,bf,0.5,0.8125,0.001953125);F(z,bc,bf,0.5,0.75,0.001953125);B_(0.0,1.0,0.0);F(z,bc,bd,0.5,0.75,0.001953125);F(z,bg,bd,0.5,0.8125,0.001953125);F(z,bg,bd,(-0.5),0.8125,0.001953125);F(z,
bc,bd,(-0.5),0.75,0.001953125);B_((-1.0),0.0,0.0);F(z,bc,bf,0.5,0.751953125,0.0);F(z,bc,bd,0.5,0.751953125,0.0625);F(z,bc,bd,(-0.5),0.751953125,0.0625);F(z,bc,bf,(-0.5),0.751953125,0.0);B_(1.0,0.0,0.0);F(z,bg,bf,(-0.5),0.751953125,0.0);F(z,bg,bd,(-0.5),0.751953125,0.0625);F(z,bg,bd,0.5,0.751953125,0.0625);F(z,bg,bf,0.5,0.751953125,0.0);Bn(z);s=q;while(true){if(s<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=s+1|0;f=q*16|0;r=h+f;s=s*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=I(b.c);x=I(b.j+v/16.0);y=I(b.d);if(!b.dd)w=I(b.c
+u/16.0);if(b.dd==1)y=I(b.d-u/16.0);if(b.dd==2)w=I(b.c-u/16.0);if(b.dd==3)y=I(b.d+u/16.0);z=a.hG.mK;continue _;}i=i+1|0;if(i>=j)break;s=0;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function AJs(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AKJ(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function HY(){var a=this;CO.call(a);a.qO=0;a.rh=0;a.p1=0;a.tE=0;a.nR=0;a.kj=0;a.qD=null;a.os=0;a.lU=0;}
function ANf(a,b){var c=new HY();ARo(c,a,b);return c;}
function ARo(a,b,c){EQ(a,b);a.qO=(-1);a.rh=(-1);a.p1=(-1);a.tE=0;a.nR=0;a.kj=0;a.lU=0;a.qD=c;Dx(a,0.5,0.5);IV(a,c.c,c.j,c.d,c.q,c.E);a.c=a.c-Bx(a.q/180.0*3.1415927410125732)*0.1599999964237213;a.j=a.j-0.10000000149011612;a.d=a.d-Bm(a.q/180.0*3.1415927410125732)*0.1599999964237213;CC(a,a.c,a.j,a.d);a.cF=0.0;a.f= -Bm(a.q/180.0*3.1415927410125732)*Bx(a.E/180.0*3.1415927410125732);a.g=Bx(a.q/180.0*3.1415927410125732)*Bx(a.E/180.0*3.1415927410125732);a.h= -Bm(a.E/180.0*3.1415927410125732);NV(a,a.f,a.h,a.g,1.5,1.0);}
function NV(a,b,c,d,e,f){var g,h,i;g=B7(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;g=CH(a.l)*0.007499999832361937;h=f;b=b+g*h;c=c+CH(a.l)*0.007499999832361937*h;d=d+CH(a.l)*0.007499999832361937*h;g=e;b=b*g;c=c*g;d=d*g;a.f=b;a.h=c;a.g=d;i=B7(b*b+d*d);e=CB(b,d)*180.0/3.1415927410125732;a.q=e;a.K=e;e=CB(c,i)*180.0/3.1415927410125732;a.E=e;a.P=e;a.os=0;}
function AJ6(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEb(a);if(C()){break _;}if(a.kj>0)a.kj=a.kj-1|0;if(a.nR){b=a.k;c=a.qO;d=a.rh;e=a.p1;$p=2;continue _;}a.lU=a.lU+1|0;b=BS(a.c,a.j,a.d);f=BS(a.c+a.f,a.j+a.h,a.d+a.g);g=a.k;$p=3;continue _;case 2:$z=Yc(b,c,d,e);if(C()){break _;}c=$z;if
(c==a.tE){a.os=a.os+1|0;if(a.os!=1200)return;$p=4;continue _;}a.nR=0;a.f=a.f*L(a.l)*0.20000000298023224;a.h=a.h*L(a.l)*0.20000000298023224;a.g=a.g*L(a.l)*0.20000000298023224;a.os=0;a.lU=0;b=BS(a.c,a.j,a.d);f=BS(a.c+a.f,a.j+a.h,a.d+a.g);g=a.k;$p=3;case 3:$z=AEp(g,b,f);if(C()){break _;}g=$z;b=BS(a.c,a.j,a.d);f=BS(a.c+a.f,a.j+a.h,a.d+a.g);if(g!==null)f=BS(g.fR.t,g.fR.v,g.fR.s);h=null;i=a.k;j=Da(HN(a.G,a.f,a.h,a.g),1.0,1.0,1.0);$p=5;continue _;case 4:B3(a);if(C()){break _;}return;case 5:$z=Zm(i,a,j);if(C()){break _;}i
=$z;k=0.0;d=0;while(d<CZ(i)){j=Bc(i,d);if(j.ko()&&!(j===a.qD&&a.lU<5)){l=N3(Da(j.G,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,f);if(l!==null){m=Di(b,l.fR);if(!(m>=k&&k!==0.0)){h=j;k=m;}}}d=d+1|0;}if(h!==null)g=ASR(h);if(g!==null){if(g.mh!==null){b=g.mh;f=a.qD;c=4;$p=7;continue _;}a.qO=g.hj;a.rh=g.hk;a.p1=g.hl;b=a.k;c=a.qO;d=a.rh;e=a.p1;$p=6;continue _;}a.c=a.c+a.f;a.j=a.j+a.h;a.d=a.d+a.g;n=B7(a.f*a.f+a.g*a.g);a.q=CB(a.f,a.g)*180.0/3.1415927410125732;a.E=CB(a.h,n)*180.0/3.1415927410125732;while
(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while(a.q-a.K>=180.0){a.K=a.K+360.0;}a.E=a.P+(a.E-a.P)*0.20000000298023224;a.q=a.K+(a.q-a.K)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 6:$z=Yc(b,c,d,e);if(C()){break _;}c=$z;a.tE=c;a.f=g.fR.t-a.c;a.h=g.fR.v-a.j;a.g=g.fR.s-a.d;n=B7(a.f*a.f+a.h*a.h+a.g*a.g);k=a.c;m=a.f;p=n;a.c=k-m/p*0.05000000074505806;a.j=a.j-a.h/p*0.05000000074505806;a.d=a.d-a.g/p*0.05000000074505806;C2(a.k,a,B(577),
1.0,1.2000000476837158/(L(a.l)*0.20000000298023224+0.8999999761581421));a.nR=1;a.kj=7;a.c=a.c+a.f;a.j=a.j+a.h;a.d=a.d+a.g;n=B7(a.f*a.f+a.g*a.g);a.q=CB(a.f,a.g)*180.0/3.1415927410125732;a.E=CB(a.h,n)*180.0/3.1415927410125732;while(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while(a.q-a.K>=180.0){a.K=a.K+360.0;}a.E=a.P+(a.E-a.P)*0.20000000298023224;a.q=a.K+(a.q-a.K)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 7:$z=b.eQ(f,c);if(C())
{break _;}c=$z;if(c){C2(a.k,a,B(577),1.0,1.2000000476837158/(L(a.l)*0.20000000298023224+0.8999999761581421));$p=8;continue _;}a.f=a.f*(-0.10000000149011612);a.h=a.h*(-0.10000000149011612);a.g=a.g*(-0.10000000149011612);a.q=a.q+180.0;a.K=a.K+180.0;a.lU=0;a.c=a.c+a.f;a.j=a.j+a.h;a.d=a.d+a.g;n=B7(a.f*a.f+a.g*a.g);a.q=CB(a.f,a.g)*180.0/3.1415927410125732;a.E=CB(a.h,n)*180.0/3.1415927410125732;while(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while
(a.q-a.K>=180.0){a.K=a.K+360.0;}a.E=a.P+(a.E-a.P)*0.20000000298023224;a.q=a.K+(a.q-a.K)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 8:B3(a);if(C()){break _;}a.c=a.c+a.f;a.j=a.j+a.h;a.d=a.d+a.g;n=B7(a.f*a.f+a.g*a.g);a.q=CB(a.f,a.g)*180.0/3.1415927410125732;a.E=CB(a.h,n)*180.0/3.1415927410125732;while(a.E-a.P<(-180.0)){a.P=a.P-360.0;}while(a.E-a.P>=180.0){a.P=a.P+360.0;}while(a.q-a.K<(-180.0)){a.K=a.K-360.0;}while(a.q-a.K>=180.0){a.K=a.K+360.0;}a.E=a.P+(a.E-a.P)*0.20000000298023224;a.q=a.K+(a.q
-a.K)*0.20000000298023224;o=0.9900000095367432;$p=9;case 9:$z=AAz(a);if(C()){break _;}c=$z;if(c){e=0;while(e<4){BQ(a.k,B(207),a.c-a.f*0.25,a.j-a.h*0.25,a.d-a.g*0.25,a.f,a.h,a.g);e=e+1|0;}o=0.800000011920929;}k=a.f;m=o;a.f=k*m;a.h=a.h*m;a.g=a.g*m;a.h=a.h-0.029999999329447746;CC(a,a.c,a.j,a.d);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AXl(a,b){var c,d;if(a.nR&&a.qD===b&&a.kj<=0){c=b.F;d=new B6;Bw();KR(d,A5C.cx,1);if(Rr(c,d)){C2(a.k,a,B(578),0.20000000298023224,((L(a.l)-L(a.l))*0.699999988079071+1.0)*2.0);O6(b,a);B3(a);}}}
function OH(){C1.call(this);}
function A$X(){var a=new OH();AM7(a);return a;}
function AM7(a){D8(a);}
function AEZ(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=B(579);$p=1;case 1:AFt(a,h);if(C()){break _;}BW();Br(c,d,e);Bq(b.K+(b.q-b.K)*g-90.0,0.0,1.0,0.0);Bq(b.P+(b.E-b.P)*g,0.0,0.0,1.0);Bv();h=A37;V(32826);i=b.kj-g;if(i>0.0)Bq( -Bm(i*3.0)*i,0.0,0.0,1.0);Bq(45.0,1.0,0.0,0.0);Co(0.05624999850988388,0.05624999850988388,0.05624999850988388);Br((-4.0),0.0,0.0);B_(0.05624999850988388,
0.0,0.0);Bu(h);F(h,(-7.0),(-2.0),(-2.0),0.0,0.15625);F(h,(-7.0),(-2.0),2.0,0.15625,0.15625);F(h,(-7.0),2.0,2.0,0.15625,0.3125);F(h,(-7.0),2.0,(-2.0),0.0,0.3125);Bn(h);B_((-0.05624999850988388),0.0,0.0);Bu(h);F(h,(-7.0),2.0,(-2.0),0.0,0.15625);F(h,(-7.0),2.0,2.0,0.15625,0.15625);F(h,(-7.0),(-2.0),2.0,0.15625,0.3125);F(h,(-7.0),(-2.0),(-2.0),0.0,0.3125);Bn(h);j=0;while(j<4){Bq(90.0,1.0,0.0,0.0);B_(0.0,0.0,0.05624999850988388);Bu(h);F(h,(-8.0),(-2.0),0.0,0.0,0.0);F(h,8.0,(-2.0),0.0,0.5,0.0);F(h,8.0,2.0,0.0,0.5,
0.15625);F(h,(-8.0),2.0,0.0,0.0,0.15625);Bn(h);j=j+1|0;}X(32826);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function YW(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AEZ(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Er(){var a=this;CO.call(a);a.l2=null;a.wP=0;a.lv=0;a.gt=0;a.pn=0;a.v0=0.0;}
function Gb(a,b,c,d,e){var f=new Er();Ga(f,a,b,c,d,e);return f;}
function Ga(a,b,c,d,e,f){EQ(a,b);a.lv=0;a.pn=5;a.v0=BI()*3.141592653589793*2.0;Dx(a,0.25,0.25);a.cF=a.ef/2.0;CC(a,c,d,e);a.l2=f;a.q=BI()*360.0;a.f=BI()*0.20000000298023224-0.10000000149011612;a.h=0.20000000298023224;a.g=BI()*0.20000000298023224-0.10000000149011612;a.h_=0;}
function AEG(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.EY();if(C()){break _;}if(a.gt>0)a.gt=a.gt-1|0;a.bH=a.c;a.ct=a.j;a.bG=a.d;a.h=a.h-0.03999999910593033;b=a.k;c=I(a.c);d=I(a.j);e=I(a.d);$p=2;case 2:$z=XG(b,c,d,e);if(C()){break _;}b=$z;if(b===A49){a.h=0.20000000298023224;a.f=(L(a.l)-L(a.l))*0.20000000298023224;a.g=(L(a.l)-L(a.l))*0.20000000298023224;C2(a.k,a,B(209),0.4000000059604645,
2.0+L(a.l)*0.4000000059604645);}f=a.c;g=a.j;h=a.d;$p=3;case 3:Ym(a,f,g,h);if(C()){break _;}$p=4;case 4:ZO(a);if(C()){break _;}f=a.f;g=a.h;h=a.g;$p=5;case 5:ALY(a,f,g,h);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;a.h=a.h*(-0.5);}a.wP=a.wP+1|0;a.lv=a.lv+1|0;if(a.lv<6000)return;$p=6;case 6:B3(a);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function ZO(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k;c=a.G;d=A48;$p=1;case 1:$z=Wh(b,c,d,a);if(C()){break _;}e=$z;return e;default:Es();}}CM().s(a,b,c,d,e,$p);}
function Ym(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=I(b);f=I(c);g=I(d);h=b-e;i=c-f;j=d-g;J();k=A5S.data;l=a.k;$p=1;case 1:$z=Yc(l,e,f,g);if(C()){break _;}m=$z;if(!k[m])return 0;k=A5S.data;l=a.k;m=e-1|0;$p=2;case 2:$z=Yc(l,m,f,g);if(C()){break _;}m
=$z;n=k[m]?0:1;k=A5S.data;l=a.k;m=e+1|0;$p=3;case 3:$z=Yc(l,m,f,g);if(C()){break _;}m=$z;o=k[m]?0:1;k=A5S.data;l=a.k;m=f-1|0;$p=4;case 4:$z=Yc(l,e,m,g);if(C()){break _;}m=$z;p=k[m]?0:1;k=A5S.data;l=a.k;m=f+1|0;$p=5;case 5:$z=Yc(l,e,m,g);if(C()){break _;}m=$z;q=k[m]?0:1;k=A5S.data;l=a.k;m=g-1|0;$p=6;case 6:$z=Yc(l,e,f,m);if(C()){break _;}m=$z;m=k[m]?0:1;k=A5S.data;l=a.k;r=g+1|0;$p=7;case 7:$z=Yc(l,e,f,r);if(C()){break _;}e=$z;r=k[e]?0:1;s=(-1);t=9999.0;if(n&&h<t){s=0;t=h;}if(!o)b=t;else{b=1.0-h;if(b<t)s=1;else b
=t;}if(p&&i<b){s=2;b=i;}if(!q)c=b;else{c=1.0-i;if(c<b)s=3;else c=b;}if(m&&j<c){s=4;c=j;}if(r&&1.0-j<c)s=5;u=L(a.l)*0.20000000298023224+0.10000000149011612;if(!s)a.f= -u;if(s==1)a.f=u;if(s==2)a.h= -u;if(s==3)a.h=u;if(s==4)a.g= -u;if(s==5)a.g=u;return 0;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AHj(a,b){Rz(a,null,b);}
function Rz(a,b,c){a.pn=a.pn-c|0;if(a.pn<=0)B3(a);return 0;}
function AZK(a,b){if(!a.gt&&Rr(b.F,a.l2)){C2(a.k,a,B(578),0.20000000298023224,((L(a.l)-L(a.l))*0.699999988079071+1.0)*2.0);O6(b,a);B3(a);}}
function KA(){CO.call(this);this.gI=0;}
function APJ(a,b,c,d){var e=new KA();AWz(e,a,b,c,d);return e;}
function AWz(a,b,c,d,e){var f,g,h;EQ(a,b);a.gI=0;a.lp=1;Dx(a,0.9800000190734863,0.9800000190734863);a.cF=a.ef/2.0;f=c;g=d;h=e;CC(a,f,g,h);e=BI()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.f= -Bm(e)*0.019999999552965164;a.h=0.20000000298023224;a.g= -Bx(e)*0.019999999552965164;a.h_=0;a.gI=80;a.bH=f;a.ct=g;a.bG=h;}
function AY4(a){return a.cs?0:1;}
function TM(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;a.h=a.h-0.03999999910593033;b=a.f;c=a.h;d=a.g;$p=1;case 1:ALY(a,b,c,d);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;a.h=a.h*(-0.5);}e=a.gI;a.gI=e-1|0;if(e>0){BQ(a.k,B(250),a.c,a.j+0.5,a.d,0.0,
0.0,0.0);return;}$p=2;case 2:B3(a);if(C()){break _;}f=4.0;g=a.k;h=null;b=a.c;c=a.j;d=a.d;$p=3;case 3:Ub(g,h,b,c,d,f);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AJw(){C1.call(this);this.t3=null;}
function A0w(){var a=new AJw();AW7(a);return a;}
function AW7(a){D8(a);a.t3=IK();a.k1=0.5;}
function AJ_(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();Br(c,d,e);if(b.gI-g+1.0<10.0){h=1.0-(b.gI-g+1.0)/10.0;if(h<0.0)h=0.0;if(h>1.0)h=1.0;f=h*h;i=1.0+f*f*0.30000001192092896;Co(i,i,i);}h=(1.0-(b.gI-g+1.0)/100.0)*0.800000011920929;j=B(173);$p=1;case 1:AFt(a,j);if(C()){break _;}j=a.t3;J();F0(j,A4G);if(!((b.gI/5|0)%2|0)){X(3553);X(2896);V(3042);C0(770,772);BN(1.0,
1.0,1.0,h);F0(a.t3,A4G);BN(1.0,1.0,1.0,1.0);X(3042);V(2896);V(3553);}By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AG0(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AJ_(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Ic(){var a=this;CO.call(a);a.g6=0;a.no=0;}
function AQK(a){return a.cs?0:1;}
function AHz(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.g6){$p=3;continue _;}a.bH=a.c;a.ct=a.j;a.bG=a.d;a.no=a.no+1|0;a.h=a.h-0.03999999910593033;b=a.f;c=a.h;d=a.g;$p=1;case 1:ALY(a,b,c,d);if(C()){break _;}a.f=a.f*0.9800000190734863;a.h=a.h*0.9800000190734863;a.g=a.g*0.9800000190734863;e=I(a.c);f=I(a.j);g=I(a.d);h=a.k;$p=2;case 2:$z=Yc(h,e,f,g);if(C()){break _;}i
=$z;if(i==a.g6){h=a.k;i=0;$p=4;continue _;}if(!a.ca){if(a.no<=100)return;e=a.g6;f=1;$p=7;continue _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;a.h=a.h*(-0.5);$p=5;continue _;case 3:B3(a);if(C()){break _;}return;case 4:AJ9(h,e,f,g,i);if(C()){break _;}if(!a.ca){if(a.no<=100)return;e=a.g6;f=1;$p=7;continue _;}a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;a.h=a.h*(-0.5);$p=5;case 5:B3(a);if(C()){break _;}h=a.k;i=a.g6;j=1;$p=6;case 6:$z=ADk(h,i,e,f,g,j);if(C()){break _;}i=$z;if(!i){e=a.g6;f=1;$p=
9;continue _;}h=a.k;i=a.g6;$p=10;continue _;case 7:Xz(a,e,f);if(C()){break _;}$p=8;case 8:B3(a);if(C()){break _;}return;case 9:Xz(a,e,f);if(C()){break _;}return;case 10:$z=AJ9(h,e,f,g,i);if(C()){break _;}e=$z;if(e)return;e=a.g6;f=1;$p=9;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AQw(a){return a.k;}
function ALe(){C1.call(this);this.Ai=null;}
function A0r(){var a=new ALe();AP8(a);return a;}
function AP8(a){D8(a);a.Ai=IK();a.k1=0.5;}
function AKP(a,b,c,d,e,f,g){var h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();Br(c,d,e);h=B(173);$p=1;case 1:AFt(a,h);if(C()){break _;}J();h=A3_.data[b.g6];i=b.k;X(2896);j=a.Ai;k=I(b.c);l=I(b.j);m=I(b.d);$p=2;case 2:AD4(j,h,i,k,l,m);if(C()){break _;}V(2896);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ALG(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AKP(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Fs(){var a=this;CO.call(a);a.yt=null;a.hV=0;a.jB=0;a.nn=0;a.jM=0;}
var A$Y=null;function AM4(a,b){return b.G;}
function AR1(a){return a.G;}
function AXn(a){return 1;}
function AO2(a){return a.ef*0.2;}
function AGc(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.nn= -a.nn;a.jB=10;a.hV=a.hV+(c*10|0)|0;if(a.hV<=40)return 1;Bw();c=A7Z.cx;d=1;e=0.0;$p=1;case 1:AB2(a,c,d,e);if(C()){break _;}$p=2;case 2:AJT(a);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AYL(a){return a.cs?0:1;}
function AJT(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;c=27;while(b<c){d=QA(a,b);if(d!==null){e=L(a.l)*0.800000011920929+0.10000000149011612;f=L(a.l)*0.800000011920929+0.10000000149011612;g=L(a.l)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;if(d.m>0){k=D(a.l,21)+10|0;if(k>d.m)k=d.m;d.m=d.m-k|0;l=Gb(a.k,a.c+h,a.j+i,a.d+j,
Mc(d.bs,k,d.dP));l.f=CH(a.l)*0.05000000074505806;l.h=CH(a.l)*0.05000000074505806+0.20000000298023224;l.g=CH(a.l)*0.05000000074505806;m=a.k;$p=2;continue _;}}b=b+1|0;}$p=1;case 1:B3(a);if(C()){break _;}return;case 2:AIX(m,l);if(C()){break _;}a:while(true){if(d.m>0){k=D(a.l,21)+10|0;if(k>d.m)k=d.m;d.m=d.m-k|0;l=Gb(a.k,a.c+h,a.j+i,a.d+j,Mc(d.bs,k,d.dP));l.f=CH(a.l)*0.05000000074505806;l.h=CH(a.l)*0.05000000074505806+0.20000000298023224;l.g=CH(a.l)*0.05000000074505806;m=a.k;continue _;}while(true){b=b+1|0;if(b>=
c)break a;d=QA(a,b);if(d===null)continue;else break;}e=L(a.l)*0.800000011920929+0.10000000149011612;f=L(a.l)*0.800000011920929+0.10000000149011612;g=L(a.l)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;}$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AMW(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jB>0)a.jB=a.jB-1|0;if(a.hV>0)a.hV=a.hV-1|0;a.bH=a.c;a.ct=a.j;a.bG=a.d;a.h=a.h
-0.03999999910593033;b=I(a.c);c=I(a.j);d=I(a.d);e=a.k;f=c-1|0;$p=1;case 1:$z=Yc(e,b,f,d);if(C()){break _;}f=$z;J();if(f==A6o.b)c=c+(-1)|0;g=0.4;h=0.0078125;e=a.k;$p=2;case 2:$z=Yc(e,b,c,d);if(C()){break _;}f=$z;if(f==A6o.b){i=a.c;j=a.j;k=a.d;$p=3;continue _;}if(a.f<(-0.4))a.f=(-0.4);if(a.f>g)a.f=g;if(a.g<(-0.4))a.g=(-0.4);if(a.g>g)a.g=g;if(a.ca){a.f=a.f*0.5;a.h=a.h*0.5;a.g=a.g*0.5;}i=a.f;j=a.h;k=a.g;$p=5;continue _;case 3:$z=AMB(a,i,j,k);if(C()){break _;}l=$z;e=a.k;$p=4;case 4:$z=AAd(e,b,c,d);if(C()){break _;}m
=$z;a.j=c;n=S(m,2);if(n>=0&&m<=5)a.j=c+1|0;if(!n)a.f=a.f-h;if(m==3)a.f=a.f+h;if(m==4)a.g=a.g+h;if(m==5)a.g=a.g-h;o=A$Y.data[m].data;p=o[1].data[0]-o[0].data[0]|0;q=o[1].data[2]-o[0].data[2]|0;r=DL(p*p+q*q);if(a.f*p+a.g*q<0.0){p= -p;q= -q;}s=DL(a.f*a.f+a.g*a.g);a.f=s*p/r;a.g=s*q/r;t=b;u=t+0.5;v=u+o[0].data[0]*0.5;w=d;p=w+0.5;i=p+o[0].data[2]*0.5;j=u+o[1].data[0]*0.5;k=p+o[1].data[2]*0.5;j=j-v;k=k-i;if(j===0.0){a.c=u;u=a.d-w;}else if(k===0.0){a.d=p;u=a.c-t;}else u=((a.c-v)*j+(a.d-i)*k)*2.0;a.c=v+j*u;a.d=i+k*u;CC(a,
a.c,a.j+a.cF,a.d);x=a.f;t=a.g;if(a.bx!==null){x=x*0.75;t=t*0.75;}i=(-0.4);if(x<i)x=i;if(x>g)x=g;if(t>=i)i=t;if(i<=g)g=i;i=0.0;$p=7;continue _;case 5:ALY(a,i,j,k);if(C()){break _;}if(!a.ca){a.f=a.f*0.949999988079071;a.h=a.h*0.949999988079071;a.g=a.g*0.949999988079071;}a.E=0.0;y=a.bH-a.c;z=a.bG-a.d;if(y*y+z*z>0.001){a.q=CB(z,y)*180.0/3.141592653589793;if(a.jM)a.q=a.q+180.0;}ba=a.q-a.K;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.q=a.q+180.0;a.jM=a.jM?0:1;}SY(a,
a.q,a.E);e=a.k;l=Da(a.G,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=Zm(e,a,l);if(C()){break _;}bb=$z;if(bb!==null&&CZ(bb)>0){bc=0;while(true){if(bc>=CZ(bb))break a;bd=Bc(bb,bc);if(bd!==a.bx&&bd.p_()&&bd instanceof Fs)bd.sT(a);bc=bc+1|0;}}}if(a.bx!==null&&a.bx.cs)a.bx=null;return;case 7:ALY(a,x,i,g);if(C()){break _;}if(o[0].data[1]&&(I(a.c)-b|0)==o[0].data[0]&&(I(a.d)-d|0)==o[0].data[2])CC(a,a.c,a.j+o[0].data[1],a.d);else if(o[1].data[1]&&(I(a.c)-b|0)==o[1].data[0]&&(I(a.d)-d|0)==o[1].data[2])CC(a,
a.c,a.j+o[1].data[1],a.d);if(a.bx===null){a.f=a.f*0.9599999785423279;a.h=a.h*0.0;a.g=a.g*0.9599999785423279;}else{a.f=a.f*0.996999979019165;a.h=a.h*0.0;a.g=a.g*0.996999979019165;}i=a.c;j=a.j;k=a.d;$p=8;case 8:$z=AMB(a,i,j,k);if(C()){break _;}e=$z;if(e!==null&&l!==null){w=(l.v-e.v)*0.05;i=DL(a.f*a.f+a.g*a.g);if(i>0.0){j=a.f/i;k=i+w;a.f=j*k;a.g=a.g/i*k;}CC(a,a.c,e.v,a.d);}f=I(a.c);n=I(a.d);if(!(f==b&&n==d)){i=DL(a.f*a.f+a.g*a.g);a.f=i*(f-b|0);a.g=i*(n-d|0);}a.E=0.0;y=a.bH-a.c;z=a.bG-a.d;if(y*y+z*z>0.001){a.q=
CB(z,y)*180.0/3.141592653589793;if(a.jM)a.q=a.q+180.0;}ba=a.q-a.K;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.q=a.q+180.0;a.jM=a.jM?0:1;}SY(a,a.q,a.E);e=a.k;l=Da(a.G,0.20000000298023224,0.0,0.20000000298023224);$p=6;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AE1(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=I(b);g=I(c);h=I(d);i=a.k;j=g-1|0;$p=1;case 1:$z=Yc(i,f,j,h);if(C()){break _;}j=$z;J();if(j==A6o.b)g=g+(-1)|0;i=a.k;$p=2;case 2:$z=Yc(i,f,g,h);if(C()){break _;}j=$z;if(j!=A6o.b)return null;i=a.k;$p=3;case 3:$z=AAd(i,f,g,h);if(C()){break _;}j=$z;c=g;if(j>=2&&j<=5)c
=g+1|0;k=A$Y.data[j].data;l=k[1].data[0]-k[0].data[0]|0;m=k[1].data[2]-k[0].data[2]|0;n=DL(l*l+m*m);l=l/n;m=m/n;l=b+l*e;d=d+m*e;if(k[0].data[1]&&(I(l)-f|0)==k[0].data[0]&&(I(d)-h|0)==k[0].data[2])c=c+k[0].data[1];else if(k[1].data[1]&&(I(l)-f|0)==k[1].data[0]&&(I(d)-h|0)==k[1].data[2])c=c+k[1].data[1];$p=4;case 4:$z=AMB(a,l,c,d);if(C()){break _;}i=$z;return i;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AMB(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=I(b);f=I(c);g=I(d);h=a.k;i=f-1|0;$p=1;case 1:$z=Yc(h,e,i,g);if(C()){break _;}i=$z;J();if(i==A6o.b)f=f+(-1)|0;h=a.k;$p=2;case 2:$z=Yc(h,e,f,g);if(C()){break _;}i=$z;if(i!=A6o.b)return null;h
=a.k;$p=3;case 3:$z=AAd(h,e,f,g);if(C()){break _;}j=$z;c=f;k=A$Y.data[j].data;l=e;m=l+0.5;n=m+k[0].data[0]*0.5;o=c+0.5;p=o+k[0].data[1]*0.5;q=g;r=q+0.5;s=r+k[0].data[2]*0.5;m=m+k[1].data[0]*0.5;t=o+k[1].data[1]*0.5;o=r+k[1].data[2]*0.5;r=m-n;u=(t-p)*2.0;v=o-s;l=r===0.0?d-q:v===0.0?b-l:((b-n)*r+(d-s)*v)*2.0;b=n+r*l;c=p+u*l;d=s+v*l;i=S(u,0.0);if(i<0)c=c+1.0;if(i>0)c=c+0.5;return BS(b,c,d);default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AUJ(a,b){var c,d,e,f,g,h;if(b!==a.bx){c=b.c-a.c;d=b.d-a.d;e=c*c+d*d;if(e>=9.999999747378752E-5){e=B7(e);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;d=f*g;c=c*0.10000000149011612;d=d*0.10000000149011612;c=c*(1.0-a.mO);d=d*(1.0-a.mO);c=c*0.5;d=d*0.5;if(!(b instanceof Fs)){Gk(a, -c,0.0, -d);Gk(b,c/4.0,0.0,d/4.0);}else{f=(b.f+a.f)/2.0;h=(b.g+a.g)/2.0;a.g=0.0;a.f=0.0;Gk(a,f-c,0.0,h-d);b.g=0.0;b.f=0.0;Gk(b,f+c,0.0,h+d);}}}}
function ASO(a){return 27;}
function QA(a,b){return a.yt.data[b];}
function AYa(a,b){MV(b,a);return 1;}
function AHv(){var b,c,d,e,f,g;b=O($rt_arraycls($rt_arraycls($rt_intcls())),10);c=b.data;d=O($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[0]=d;d=O($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[1]=d;d=O($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]
=(-1);g[1]=(-1);g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[2]=d;d=O($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=(-1);g[2]=0;e[1]=f;c[3]=d;d=O($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=(-1);g[2]=1;e[1]=f;c[4]=d;d=O($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=(-1);g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[5]=d;g=O($rt_arraycls($rt_intcls()),2);e=g.data;d=$rt_createIntArray(3);f=d.data;f[0]=0;f[1]=0;f[2]=1;e[0]=d;d=$rt_createIntArray(3);f=d.data;f[0]=1;f[1]=0;f[2]=0;e[1]=d;c[6]=g;d=O($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[7]=d;d=O($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[8]=d;d=O($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[9]=d;A$Y=b;}
function ALT(){C1.call(this);this.zR=null;}
function A1K(){var a=new ALT();AY7(a);return a;}
function AY7(a){D8(a);a.k1=0.5;a.zR=A2l();}
function AKO(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BW();h=b.b6;i=b.c-b.b6;j=g;k=h+i*j;l=b.bP+(b.j-b.bP)*j;i=b.b7+(b.d-b.b7)*j;h=0.30000001192092896;$p=1;case 1:$z=AMB(b,k,l,i);if(C()){break _;}m=$z;n=b.P+(b.E-b.P)*g;if(m!==null){$p=2;continue _;}Br(c,d,e);Bq(180.0
-f,0.0,1.0,0.0);Bq( -n,0.0,0.0,1.0);o=b.jB-g;p=b.hV-g;if(p<0.0)p=0.0;if(o>0.0)Bq(Bm(o)*o*p/10.0*b.nn,1.0,0.0,0.0);b=B(173);$p=4;continue _;case 2:$z=AE1(b,k,l,i,h);if(C()){break _;}q=$z;h=(-0.30000001192092896);$p=3;case 3:$z=AE1(b,k,l,i,h);if(C()){break _;}r=$z;if(q===null)q=m;if(r===null)r=m;c=c+m.t-k;d=d+(q.v+r.v)/2.0-l;e=e+m.s-i;s=C3(r, -q.t, -q.v, -q.s);if(GG(s)!==0.0){s=Cs(s);f=CB(s.s,s.t)*180.0/3.141592653589793;n=Ha(s.v)*73.0;}Br(c,d,e);Bq(180.0-f,0.0,1.0,0.0);Bq( -n,0.0,0.0,1.0);o=b.jB-g;p=b.hV-g;if
(p<0.0)p=0.0;if(o>0.0)Bq(Bm(o)*o*p/10.0*b.nn,1.0,0.0,0.0);b=B(173);$p=4;case 4:AFt(a,b);if(C()){break _;}Co(0.75,0.75,0.75);b=IK();J();F0(b,A6d);Co(1.3333333730697632,1.3333333730697632,1.3333333730697632);b=B(580);$p=5;case 5:AFt(a,b);if(C()){break _;}Co((-1.0),(-1.0),1.0);AFu(a.zR,0.0,0.0,(-0.10000000149011612),0.0,0.0,0.0625);By();return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AKN(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AKO(a,b,c,d,e,f,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Sj(){var a=this;E.call(a);a.sW=Long_ZERO;a.sa=0;a.wB=0;}
function A$Z(){var a=new Sj();AN0(a);return a;}
function AN0(a){return;}
function Xk(){var a=this;E.call(a);a.t$=null;a.uo=null;}
function A1y(){var a=new Xk();AN8(a);return a;}
function AN8(a){a.t$=BF(0,0);Bz(a.t$,(-12.0),(-14.0),(-1.0),24,12,2,0.0);a.uo=BF(0,14);Bz(a.uo,(-1.0),(-2.0),(-1.0),2,14,2,0.0);}
function AHT(a){B2(a.t$,0.0625);B2(a.uo,0.0625);}
function ADh(){var a=this;DO.call(a);a.kP=null;a.pf=null;a.pX=null;a.jb=null;a.ja=null;a.jd=null;a.jc=null;a.jf=null;a.je=null;a.jh=null;a.jg=null;}
function AVI(){var a=new ADh();AOo(a);return a;}
function AOo(a){a.kP=BF(32,4);Bz(a.kP,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BD(a.kP,0.0,15.0,(-3.0));a.pf=BF(0,0);Bz(a.pf,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BD(a.pf,0.0,15.0,0.0);a.pX=BF(0,12);Bz(a.pX,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BD(a.pX,0.0,15.0,9.0);a.jb=BF(18,0);Bz(a.jb,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.jb,(-4.0),15.0,2.0);a.ja=BF(18,0);Bz(a.ja,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.ja,4.0,15.0,2.0);a.jd=BF(18,0);Bz(a.jd,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.jd,(-4.0),15.0,1.0);a.jc=BF(18,0);Bz(a.jc,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BD(a.jc,4.0,15.0,1.0);a.jf=BF(18,0);Bz(a.jf,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.jf,(-4.0),15.0,0.0);a.je=BF(18,0);Bz(a.je,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.je,4.0,15.0,0.0);a.jh=BF(18,0);Bz(a.jh,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.jh,(-4.0),15.0,(-1.0));a.jg=BF(18,0);Bz(a.jg,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BD(a.jg,4.0,15.0,(-1.0));}
function AQD(a,b,c,d,e,f,g){Uv(a,b,c,d,e,f,g);B2(a.kP,g);B2(a.pf,g);B2(a.pX,g);B2(a.jb,g);B2(a.ja,g);B2(a.jd,g);B2(a.jc,g);B2(a.jf,g);B2(a.je,g);B2(a.jh,g);B2(a.jg,g);}
function Uv(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.kP.bL=e/57.2957763671875;a.kP.bM=f/57.2957763671875;a.jb.bJ=(-0.7853981852531433);a.ja.bJ=0.7853981852531433;a.jd.bJ=(-0.5811946392059326);a.jc.bJ=0.5811946392059326;a.jf.bJ=(-0.5811946392059326);a.je.bJ=0.5811946392059326;a.jh.bJ=(-0.7853981852531433);a.jg.bJ=0.7853981852531433;a.jb.bL=0.7853981852531433;a.ja.bL=(-0.7853981852531433);a.jd.bL=0.39269909262657166;a.jc.bL=(-0.39269909262657166);a.jf.bL=(-0.39269909262657166);a.je.bL=0.39269909262657166;a.jh.bL
=(-0.7853981852531433);a.jg.bL=0.7853981852531433;b=b*0.6661999821662903;f=b*2.0;h= -(Bx(f+0.0)*0.4000000059604645)*c;i= -(Bx(f+3.1415927410125732)*0.4000000059604645)*c;j= -(Bx(f+1.5707963705062866)*0.4000000059604645)*c;k= -(Bx(f+4.71238899230957)*0.4000000059604645)*c;l=GM(Bm(b+0.0)*0.4000000059604645)*c;m=GM(Bm(b+3.1415927410125732)*0.4000000059604645)*c;n=GM(Bm(b+1.5707963705062866)*0.4000000059604645)*c;o=GM(Bm(b+4.71238899230957)*0.4000000059604645)*c;p=a.jb;p.bL=p.bL+h;p=a.ja;p.bL=p.bL+ -h;p=a.jd;p.bL
=p.bL+i;p=a.jc;p.bL=p.bL+ -i;p=a.jf;p.bL=p.bL+j;p=a.je;p.bL=p.bL+ -j;p=a.jh;p.bL=p.bL+k;p=a.jg;p.bL=p.bL+ -k;p=a.jb;p.bJ=p.bJ+l;p=a.ja;p.bJ=p.bJ+ -l;p=a.jd;p.bJ=p.bJ+m;p=a.jc;p.bJ=p.bJ+ -m;p=a.jf;p.bJ=p.bJ+n;p=a.je;p.bJ=p.bJ+ -n;p=a.jh;p.bJ=p.bJ+o;p=a.jg;p.bJ=p.bJ+ -o;}
function ADH(){var a=this;DO.call(a);a.kU=null;a.tj=null;a.q$=null;a.nX=null;a.nW=null;a.nV=null;a.nU=null;}
function A0S(){var a=new ADH();AVv(a);return a;}
function AVv(a){a.kU=BF(0,0);Bz(a.kU,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BD(a.kU,0.0,4.0,0.0);a.tj=BF(32,0);Bz(a.tj,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BD(a.tj,0.0,4.0,0.0);a.q$=BF(16,16);Bz(a.q$,(-4.0),0.0,(-2.0),8,12,4,0.0);BD(a.q$,0.0,4.0,0.0);a.nX=BF(0,16);Bz(a.nX,(-2.0),0.0,(-2.0),4,6,4,0.0);BD(a.nX,(-2.0),16.0,4.0);a.nW=BF(0,16);Bz(a.nW,(-2.0),0.0,(-2.0),4,6,4,0.0);BD(a.nW,2.0,16.0,4.0);a.nV=BF(0,16);Bz(a.nV,(-2.0),0.0,(-2.0),4,6,4,0.0);BD(a.nV,(-2.0),16.0,(-4.0));a.nU=BF(0,16);Bz(a.nU,(-2.0),0.0,(-2.0),4,6,4,
0.0);BD(a.nU,2.0,16.0,(-4.0));}
function AUa(a,b,c,d,e,f,g){Vp(a,b,c,d,e,f,g);B2(a.kU,g);B2(a.q$,g);B2(a.nX,g);B2(a.nW,g);B2(a.nV,g);B2(a.nU,g);}
function Vp(a,b,c,d,e,f,g){var h;a.kU.bL=e/57.2957763671875;a.kU.bM=f/57.2957763671875;h=a.nX;b=b*0.6661999821662903;h.bM=Bx(b)*1.399999976158142*c;h=a.nW;d=b+3.1415927410125732;h.bM=Bx(d)*1.399999976158142*c;a.nV.bM=Bx(d)*1.399999976158142*c;a.nU.bM=Bx(b)*1.399999976158142*c;}
function AAo(){DO.call(this);this.cA=null;}
function A2l(){var a=new AAo();AUS(a);return a;}
function AUS(a){a.cA=O(NY,7);a.cA.data[0]=BF(0,10);a.cA.data[1]=BF(0,0);a.cA.data[2]=BF(0,0);a.cA.data[3]=BF(0,0);a.cA.data[4]=BF(0,0);a.cA.data[5]=BF(44,10);Bz(a.cA.data[0],(-10.0),(-8.0),(-1.0),20,16,2,0.0);BD(a.cA.data[0],0.0,4.0,0.0);Bz(a.cA.data[5],(-9.0),(-7.0),(-1.0),18,14,1,0.0);BD(a.cA.data[5],0.0,4.0,0.0);Bz(a.cA.data[1],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BD(a.cA.data[1],(-9.0),4.0,0.0);Bz(a.cA.data[2],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BD(a.cA.data[2],9.0,4.0,0.0);Bz(a.cA.data[3],(-8.0),(-9.0),(-1.0),
16,8,2,0.0);BD(a.cA.data[3],0.0,4.0,(-7.0));Bz(a.cA.data[4],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BD(a.cA.data[4],0.0,4.0,7.0);a.cA.data[0].bM=1.5707963705062866;a.cA.data[1].bL=4.71238899230957;a.cA.data[2].bL=1.5707963705062866;a.cA.data[3].bL=3.1415927410125732;a.cA.data[5].bM=(-1.5707963705062866);}
function AFu(a,b,c,d,e,f,g){var h;a.cA.data[5].lP=4.0-d;h=0;while(h<6){B2(a.cA.data[h],g);h=h+1|0;}}
function HE(){var a=this;E.call(a);a.gj=null;a.rK=0;a.b1=null;a.g0=null;a.gf=null;a.hb=null;a.dK=null;a.mJ=0;a.fn=0;a.fi=0;a.hZ=null;a.dg=null;a.fS=0;a.dr=0;a.oC=0;a.AV=0;a.qt=0;a.rj=Long_ZERO;}
var A9I=0;function A0L(a,b,c){var d=new HE();ALw(d,a,b,c);return d;}
function AYz(a,b,c,d){var e=new HE();AS3(e,a,b,c,d);return e;}
function ALw(a,b,c,d){var e;a.hZ=CY();a.dg=O(Iw,8);a.fS=0;a.dr=0;a.AV=0;a.qt=0;a.rj=Long_ZERO;a.b1=b;a.fn=c;a.fi=d;a.dK=$rt_createByteArray(256);e=0;while(e<a.dg.data.length){a.dg.data[e]=Ck();e=e+1|0;}}
function AS3(a,b,c,d,e){var f;f=c.data;ALw(a,b,d,e);a.gj=c;b=new QE;d=f.length;AED(b,d);a.g0=b;a.gf=HR(d);a.hb=HR(d);}
function AL0(a,b,c){return b==a.fn&&c==a.fi?1:0;}
function Q5(a,b,c){return a.dK.data[c<<4|b]&255;}
function AVZ(a){return;}
function ABb(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=127;c=0;while(true){if(c>=16){a.mJ=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b=b+1|0;}a.dr=1;return;}e=0;if(e<16)break;c=c+1|0;}f=a.dK.data;d=e<<4|c;f[d]=(-128);g=127;$p=1;case 1:YD(a,c,g,e);if(C()){break _;}if((a.dK.data[d]&255)<b)b=a.dK.data[d]&255;e=e+1|0;while(e>=16){c=c+1|0;if(c>=16){a.mJ=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b
=b+1|0;}a.dr=1;return;}e=0;}f=a.dK.data;d=e<<4|c;f[d]=(-128);g=127;continue _;case 2:AAq(a,b,d);if(C()){break _;}d=d+1|0;while(true){if(d<16){continue _;}b=b+1|0;if(b>=16)break;d=0;}a.dr=1;return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AAq(a,b,c){var d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Q5(a,b,c);e=(a.fn*16|0)+b|0;f=(a.fi*16|0)+c|0;b=e-1|0;$p=1;case 1:AEK(a,b,f,d);if(C()){break _;}b=e+1|0;$p=2;case 2:AEK(a,b,f,d);if(C()){break _;}b=f-1|0;$p=3;case 3:AEK(a,e,b,d);if(C()){break _;}b=f+1|0;$p=4;case 4:AEK(a,e,b,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AEK(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.b1;$p=1;case 1:$z=AGC(e,b,c);if(C()){break _;}f=$z;g=S(f,d);if(g>0){e=a.b1;h=A9O;$p=2;continue _;}if(g>=0){a.dr=1;return;}e=a.b1;h=A9O;$p=3;continue _;case 2:U6(e,h,b,d,c,b,f,c);if(C()){break _;}a.dr=1;return;case 3:U6(e,h,b,f,c,b,d,c);if(C()){break _;}a.dr=1;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function YD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.dK.data;f=d<<4|b;g=e[f]&255;if(c<=g)c=g;while(c>0){J();if(A5T.data[Ed(a,b,c-1|0,d)])break;c=c+(-1)|0;}h=S(c,g);if(h){AKj(a.b1,b,d,c,g);a.dK.data[f]=c<<24>>24;if(c<a.mJ)a.mJ=c;else{f=127;i=0;while(i<16){j=0;while(j<16){e=a.dK.data;k=j<<4|i;if((e[k]&255)<f)f=a.dK.data[k]
&255;j=j+1|0;}i=i+1|0;}a.mJ=f;}f=(a.fn*16|0)+b|0;i=(a.fi*16|0)+d|0;if(h>=0){l=a.b1;m=A9O;$p=1;continue _;}j=c;while(j<g){DR(a.gf,b,j,d,15);j=j+1|0;}j=15;k=c;a:{while(k>0){if(j<=0)break a;k=k+(-1)|0;J();n=A5T.data[Ed(a,b,k,d)];if(!n)n=1;j=j-n|0;if(j<0)j=0;DR(a.gf,b,k,d,j);}}while(k>0){J();if(A5T.data[Ed(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k!=c){l=a.b1;m=A9O;d=f-1|0;j=i-1|0;f=f+1|0;b=i+1|0;$p=2;continue _;}a.dr=1;}return;case 1:U6(l,m,f,g,i,f,c,i);if(C()){break _;}while(g<c){DR(a.gf,b,g,d,0);g=g+1|0;}j=15;k=c;b:
{while(k>0){if(j<=0)break b;k=k+(-1)|0;J();n=A5T.data[Ed(a,b,k,d)];if(!n)n=1;j=j-n|0;if(j<0)j=0;DR(a.gf,b,k,d,j);}}while(k>0){J();if(A5T.data[Ed(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k==c){a.dr=1;return;}l=a.b1;m=A9O;d=f-1|0;j=i-1|0;f=f+1|0;b=i+1|0;$p=2;case 2:U6(l,m,d,k,j,f,c,b);if(C()){break _;}a.dr=1;return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Ed(a,b,c,d){return a.gj.data[b<<11|d<<7|c];}
function Zg(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e<<24>>24;h=a.dK.data[d<<4|b]&255;i=a.gj.data;j=b<<11|d<<7|c;k=i[j]&255;if(k==e)return 0;l=(a.fn*16|0)+b|0;m=(a.fi*16|0)+d|0;a.gj.data[j]=g;if(k){J();n=A3_.data[k];o=a.b1;$p=1;continue _;}a:{DR(a.g0,b,c,d,f);J();if(!A5T.data[g]){if(c!=(h-1|0))break a;$p
=5;continue _;}if(c>=h){f=c+1|0;$p=6;continue _;}}n=a.b1;o=A9O;$p=2;continue _;case 1:n.ks(o,l,c,m);if(C()){break _;}b:{DR(a.g0,b,c,d,f);J();if(!A5T.data[g]){if(c!=(h-1|0))break b;$p=5;continue _;}if(c>=h){f=c+1|0;$p=6;continue _;}}n=a.b1;o=A9O;$p=2;case 2:U6(n,o,l,c,m,l,c,m);if(C()){break _;}n=a.b1;o=A9P;$p=3;case 3:U6(n,o,l,c,m,l,c,m);if(C()){break _;}$p=4;case 4:AAq(a,b,d);if(C()){break _;}if(!e){a.dr=1;return 1;}n=A3_.data[e];o=a.b1;$p=7;continue _;case 5:YD(a,b,c,d);if(C()){break _;}n=a.b1;o=A9O;$p=2;continue _;case 6:YD(a,
b,f,d);if(C()){break _;}n=a.b1;o=A9O;$p=2;continue _;case 7:n.e2(o,l,c,m);if(C()){break _;}a.dr=1;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function Zd(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=e<<24>>24;g=a.dK.data[d<<4|b]&255;h=a.gj.data;i=b<<11|d<<7|c;j=h[i]&255;if(j==e)return 0;k=(a.fn*16|0)+b|0;l=(a.fi*16|0)+d|0;a.gj.data[i]=f;if(j){J();m=A3_.data[j];n=a.b1;$p=1;continue _;}a:{DR(a.g0,b,c,d,0);J();if(!A5T.data[f]){if(c!=(g-1|0))break a;$p=5;continue _;}if
(c>=g){i=c+1|0;$p=6;continue _;}}m=a.b1;n=A9O;$p=2;continue _;case 1:m.ks(n,k,c,l);if(C()){break _;}b:{DR(a.g0,b,c,d,0);J();if(!A5T.data[f]){if(c!=(g-1|0))break b;$p=5;continue _;}if(c>=g){i=c+1|0;$p=6;continue _;}}m=a.b1;n=A9O;$p=2;case 2:U6(m,n,k,c,l,k,c,l);if(C()){break _;}m=a.b1;n=A9P;$p=3;case 3:U6(m,n,k,c,l,k,c,l);if(C()){break _;}$p=4;case 4:AAq(a,b,d);if(C()){break _;}if(!e){a.dr=1;return 1;}m=A3_.data[e];n=a.b1;$p=7;continue _;case 5:YD(a,b,c,d);if(C()){break _;}m=a.b1;n=A9O;$p=2;continue _;case 6:YD(a,
b,i,d);if(C()){break _;}m=a.b1;n=A9O;$p=2;continue _;case 7:m.e2(n,k,c,l);if(C()){break _;}a.dr=1;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function O2(a,b,c,d){return G6(a.g0,b,c,d);}
function Wj(a,b,c,d,e){a.dr=1;DR(a.g0,b,c,d,e);}
function X3(a,b,c,d,e){return b===A9O?G6(a.gf,c,d,e):b!==A9P?0:G6(a.hb,c,d,e);}
function ALd(a,b,c,d,e,f){a.dr=1;if(b===A9O)DR(a.gf,c,d,e,f);else{if(b!==A9P)return;DR(a.hb,c,d,e,f);}}
function R4(a,b,c,d,e){var f,g;f=G6(a.gf,b,c,d);if(f>0)A9I=1;e=f-e|0;g=G6(a.hb,b,c,d);if(g<=e)g=e;return g;}
function R7(a,b){var c,d,e,f,g;a.qt=1;c=I(b.c/16.0);d=I(b.d/16.0);if(!(c==a.fn&&d==a.fi)){e=Ds();f=new Ba;Y(f);B9(e,N(E0(H(f,B(581)),b)));}g=I(b.j/16.0);if(g<0)g=0;if(g>=a.dg.data.length)g=a.dg.data.length-1|0;U(a.dg.data[g],b);}
function AHJ(a,b){O_(a,b,I(b.j/16.0));}
function O_(a,b,c){var d,e;if(c<0)c=0;if(c>=a.dg.data.length)c=a.dg.data.length-1|0;if(!Of(a.dg.data[c],b)){d=Ds();e=new Ba;Y(e);B9(d,N(E0(H(e,B(582)),b)));}GV(a.dg.data[c],b);}
function MZ(a,b,c,d){return c<(a.dK.data[d<<4|b]&255)?0:1;}
function AH7(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;f=Cz(a.hZ,CG(e));if(f!==null)return f;g=Ed(a,b,c,d);J();h=A3_.data[g];f=a.b1;b=(a.fn*16|0)+b|0;d=(a.fi*16|0)+d|0;$p=1;case 1:h.e2(f,b,c,d);if(C()){break _;}return Cz(a.hZ,CG(e));default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AEo(a,b,c,d,e){var f;a:{f=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;e.bY=a.b1;e.de=(a.fn*16|0)+b|0;e.dc=c;e.dj=(a.fi*16|0)+d|0;if(Ed(a,b,c,d)){J();if(A3_.data[Ed(a,b,c,d)] instanceof DN){if(a.rK){if(Cz(a.hZ,CG(f))!==null)GV(a.b1.e1,Cz(a.hZ,CG(f)));U(a.b1.e1,e);}BK(a.hZ,CG(f),e);break a;}}B9(Ds(),B(583));}}
function Zz(a,b,c,d){var e;e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;if(a.rK)GV(a.b1.e1,Og(a.hZ,CG(e)));}
function It(a){var b;a.rK=1;Dq(a.b1.e1,Hb(a.hZ));b=0;while(b<a.dg.data.length){AKL(a.b1,a.dg.data[b]);b=b+1|0;}}
function AJo(a){var b;a.rK=0;Fp(a.b1.e1,Hb(a.hZ));b=0;while(b<a.dg.data.length){ALp(a.b1,a.dg.data[b]);b=b+1|0;}}
function PI(a){a.dr=1;}
function AE4(a,b,c,d){var e,f,g,h,i;e=I((c.H-2.0)/16.0);f=I((c.Q+2.0)/16.0);if(e<0)e=0;if(f>=a.dg.data.length)f=a.dg.data.length-1|0;while(e<=f){g=a.dg.data[e];h=0;while(h<g.p){i=Bc(g,h);if(i!==b&&Kj(i.G,c))U(d,i);h=h+1|0;}e=e+1|0;}}
function AG_(a,b,c,d){var e,f,g,h,i;e=I((c.H-2.0)/16.0);f=I((c.Q+2.0)/16.0);if(e<0)e=0;if(f>=a.dg.data.length)f=a.dg.data.length-1|0;while(e<=f){g=a.dg.data[e];h=0;while(h<g.p){i=Bc(g,h);if(Nt(b,C4(i))&&Kj(i.G,c))U(d,i);h=h+1|0;}e=e+1|0;}}
function IP(a,b){return a.oC?0:a.qt&&Long_ne(a.b1.dG,a.rj)?1:a.dr;}
function Hc(){var a=this;E.call(a);a.iq=0;a.hA=0;a.jy=null;a.vx=null;}
function A$0(a,b,c,d,e,f,g){var h=new Hc();Z1(h,a,b,c,d,e,f,g);return h;}
function Z1(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.vx=b;a.iq=c>>4;a.hA=e>>4;i=f>>4;j=h>>4;a.jy=$rt_createMultiArray($rt_arraycls($rt_arraycls(HE)),[(j-a.hA|0)+1|0,(i-a.iq|0)+1|0]);k=a.iq;while(k<=i){l=a.hA;if(l<=j){m=a.jy.data[k-a.iq|0].data;c=l-a.hA|0;$p=1;continue _;}k=k+1|0;}return;case 1:$z=VO(b,k,l);if(C()){break _;}n
=$z;m[c]=n;l=l+1|0;while(true){if(l<=j){m=a.jy.data[k-a.iq|0].data;c=l-a.hA|0;continue _;}k=k+1|0;if(k>i)break;l=a.hA;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Gr(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.iq|0;f=(d>>4)-a.hA|0;return Ed(a.jy.data[e].data[f],b&15,c,d&15);}
function ABk(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b>>4)-a.iq|0;f=(d>>4)-a.hA|0;g=a.jy.data[e].data[f];e=b&15;b=d&15;$p=1;case 1:$z=AH7(g,e,c,b);if(C()){break _;}g=$z;return g;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function Wz(a,b,c,d){return A9L.data[VY(a,b,c,d)];}
function VY(a,b,c,d){return FV(a,b,c,d,1);}
function FV(a,b,c,d,e){var f,g,h,i,j,k;if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){a:{if(e){f=Gr(a,b,c,d);J();if(f==A4e.b)break a;if(f==A6j.b)break a;}if(c<0)return 0;if(c>=128){f=15-a.vx.fD|0;if(f<0)f=0;return f;}f=(b>>4)-a.iq|0;g=(d>>4)-a.hA|0;return R4(a.jy.data[f].data[g],b&15,c,d&15,a.vx.fD);}g=FV(a,b,c+1|0,d,0);h=FV(a,b+1|0,c,d,0);i=FV(a,b-1|0,c,d,0);j=FV(a,b,c,d+1|0,0);k=FV(a,b,c,d-1|0,0);if(h<=g)h=g;if(i<=h)i=h;if(j<=i)j=i;if(k<=j)k=j;return k;}return 15;}
function YI(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.iq|0;f=(d>>4)-a.hA|0;return O2(a.jy.data[e].data[f],b&15,c,d&15);}
function LS(a,b,c,d){var e,f;e=Gr(a,b,c,d);if(!e)f=A5y;else{J();f=A3_.data[e].bR;}return f;}
function XM(a,b,c,d){var e;J();e=A3_.data[Gr(a,b,c,d)];return e!==null?e.dy():0;}
function Fu(){BB.call(this);}
function A$1(){var a=new Fu();AY5(a);return a;}
function AY5(a){Q(a);}
function Rb(){Fu.call(this);}
function A$2(){var a=new Rb();AWJ(a);return a;}
function AWJ(a){Q(a);}
function Ru(){E.call(this);}
var A$3=null;function A$4(){var a=new Ru();AJH(a);return a;}
function AJH(a){return;}
function ADN(){var b,c;b=$rt_createIntArray(12);c=b.data;c[0]=1;c[1]=4;c[2]=2;c[3]=1024;c[4]=8;c[5]=16;c[6]=128;c[7]=64;c[8]=32;c[9]=256;c[10]=2048;c[11]=512;A$3=b;}
function Na(){Fw.call(this);this.t2=null;}
function ASi(a,b){return ZM(a.t2,b);}
function Le(a){var b;b=new Rs;RO(b,a.t2);return b;}
function Qe(){E.call(this);this.E2=null;}
function AI$(a){Z();A20.requestPointerLock();KX(0);}
function AZZ(a){AI$(a);}
function AK$(){E.call(this);}
function A$5(){var a=new AK$();AUY(a);return a;}
function AUY(a){return;}
function S3(){var a=this;DF.call(a);a.b9=null;a.gd=0;a.ol=0;a.jU=0;}
function A0F(){var a=new S3();AOD(a);return a;}
function AOD(a){a.b9=O(B6,3);a.gd=0;a.ol=0;a.jU=0;}
function AYy(a,b){return a.b9.data[b];}
function AXO(a,b,c){var d;if(a.b9.data[b]===null)return null;if(a.b9.data[b].m<=c){d=a.b9.data[b];a.b9.data[b]=null;return d;}d=D6(a.b9.data[b],c);if(!a.b9.data[b].m)a.b9.data[b]=null;return d;}
function AOO(a,b,c){a.b9.data[b]=c;if(c!==null&&c.m>64)c.m=64;}
function ANU(a){return 64;}
function AJm(a,b){return Bh(a.jU,b)/200|0;}
function Zk(a,b){if(!a.ol)a.ol=200;return Bh(a.gd,b)/a.ol|0;}
function SR(a){return a.gd<=0?0:1;}
function AB1(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gd<=0?0:1;c=0;if(a.gd>0){a.gd=a.gd-1|0;c=1;}if(!a.gd&&L8(a)){d=a.b9.data[1];if(d===null)e=0;else a:{f=Dl(d).cx;if(f<256){J();if(A3_.data[f].bR===A6s){e=300;break a;}}Bw();e=f==A7l.cx?100:f!=A6S.cx?0:1600;}a.gd=e;a.ol=e;if(a.gd>0){c=1;if(a.b9.data[1]!==null){d=a.b9.data[1];d.m=d.m-1|0;if(!a.b9.data[1].m)a.b9.data[1]
=null;}}}if(SR(a)&&L8(a)){a.jU=a.jU+1|0;if(a.jU==200){a.jU=0;Y_(a);c=1;}}else a.jU=0;if(b==(a.gd<=0?0:1)){if(!c)return;d=a.bY;e=a.de;b=a.dc;c=a.dj;$p=1;continue _;}c=1;b=a.gd<=0?0:1;g=a.bY;f=a.de;h=a.dc;i=a.dj;$p=2;continue _;case 1:ABQ(d,e,b,c);if(C()){break _;}return;case 2:$z=AAd(g,f,h,i);if(C()){break _;}e=$z;$p=3;case 3:$z=AIe(g,f,h,i);if(C()){break _;}j=$z;if(!b){J();b=A6k.b;$p=4;continue _;}J();b=A6l.b;$p=5;continue _;case 4:AJ9(g,f,h,i,b);if(C()){break _;}$p=6;continue _;case 5:AJ9(g,f,h,i,b);if(C())
{break _;}$p=6;case 6:AFw(g,f,h,i,e);if(C()){break _;}$p=7;case 7:ABj(g,f,h,i,j);if(C()){break _;}if(!c)return;d=a.bY;e=a.de;b=a.dc;c=a.dj;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,$p);}
function L8(a){var b,c;if(a.b9.data[0]===null)return 0;b=Rd(a,Dl(a.b9.data[0]).cx);if(b<0)b=0;else if(a.b9.data[2]===null)b=1;else if(a.b9.data[2].bs!=b)b=0;else if(a.b9.data[2].m<64&&a.b9.data[2].m<D4(a.b9.data[2]))b=1;else{c=a.b9.data[2].m;Bw();b=c>=A6w.data[b].en?0:1;}return b;}
function Y_(a){var b,c;if(L8(a)){b=Rd(a,Dl(a.b9.data[0]).cx);if(a.b9.data[2]===null)a.b9.data[2]=I2(b,1);else if(a.b9.data[2].bs==b){c=a.b9.data[2];c.m=c.m+1|0;}c=a.b9.data[0];c.m=c.m-1|0;if(a.b9.data[0].m<=0)a.b9.data[0]=null;}}
function Rd(a,b){J();if(b==A4B.b){Bw();b=A68.cx;}else if(b==A4C.b){Bw();b=A69.cx;}else if(b==A6f.b){Bw();b=A6T.cx;}else if(b==A4w.b)b=A4p.b;else{Bw();b=b==A5F.cx?A7S.cx:b!=A4j.b?(-1):A4f.b;}return b;}
function VW(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bY;c=a.de;d=a.dc;e=a.dj;$p=1;case 1:ABQ(b,c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function P6(){DF.call(this);this.g$=null;}
function A0$(){var a=new P6();ATt(a);return a;}
function ATt(a){a.g$=O(B6,36);}
function AO0(a){return 27;}
function Om(a,b){return a.g$.data[b];}
function ATj(a,b,c){var d;if(a.g$.data[b]===null)return null;if(a.g$.data[b].m<=c){d=a.g$.data[b];a.g$.data[b]=null;return d;}d=D6(a.g$.data[b],c);if(!a.g$.data[b].m)a.g$.data[b]=null;return d;}
function ACR(a,b,c){a.g$.data[b]=c;if(c!==null&&c.m>64)c.m=64;}
function AX2(a){return B(257);}
function AW_(a){return 64;}
function CA(){E.call(this);this.fK=null;}
function A$6(){var a=new CA();Cl(a);return a;}
function Cl(a){a.fK=null;}
function RW(a){return a.fK!==null?a.fK:B(3);}
function AQg(a,b){a.fK=b;return a;}
function KW(b){var c,d;c=LN(b);if(!c){b=new LO;Cl(b);return b;}d=AAy(c);d.fK=FY(b);d.fX(b);return d;}
function O8(b,c){I$(c,b.eC());if(b.eC()){Tv(c,RW(b));b.f3(c);}}
function AAy(b){var c;switch(b){case 0:c=new LO;Cl(c);return c;case 1:c=new KF;Cl(c);return c;case 2:c=new KY;Cl(c);return c;case 3:c=new JA;Cl(c);return c;case 4:c=new LZ;Cl(c);return c;case 5:c=new MU;Cl(c);return c;case 6:c=new Kz;Cl(c);return c;case 7:c=new KM;Cl(c);return c;case 8:c=new Mo;Cl(c);return c;case 9:return Km();case 10:return F9();default:}return null;}
function AKp(){CA.call(this);this.cl=null;}
function F9(){var a=new AKp();AX$(a);return a;}
function AX$(a){Cl(a);a.cl=CY();}
function AW4(a,b){var c;c=Le(Hb(a.cl));while(Fl(c)){O8(Kr(c),b);}I$(b,0);}
function AYv(a,b){var c;Rq(a.cl);while(true){c=KW(b);if(!c.eC())break;BK(a.cl,RW(c),c);}}
function AW3(a){return 10;}
function Gx(a,b,c){var d;d=a.cl;c.fK=b;BK(d,b,c);}
function Ia(a,b,c){var d,e;d=a.cl;e=new KF;Cl(e);e.rI=c;e.fK=b;BK(d,b,e);}
function EJ(a,b,c){var d,e;d=a.cl;e=new KY;Cl(e);e.rC=c;e.fK=b;BK(d,b,e);}
function FH(a,b,c){var d,e;d=a.cl;e=new JA;Cl(e);e.qo=c;e.fK=b;BK(d,b,e);}
function GW(a,b,c){var d,e;d=a.cl;e=new LZ;Cl(e);e.re=c;e.fK=b;BK(d,b,e);}
function AMo(a,b,c){var d,e;d=a.cl;e=AWN(c);e.fK=b;BK(d,b,e);}
function Hs(a,b,c){var d,e;d=a.cl;e=new KM;Cl(e);e.la=c;e.fK=b;BK(d,b,e);}
function AIz(a,b,c){var d;d=a.cl;c.fK=b;BK(d,b,c);}
function PV(a,b,c){Ia(a,b,(!c?0:1)<<24>>24);}
function UX(a,b){return Dv(a.cl,b);}
function JR(a,b){return !Dv(a.cl,b)?0:Cz(a.cl,b).rI;}
function EX(a,b){return !Dv(a.cl,b)?0:Cz(a.cl,b).rC;}
function E9(a,b){return !Dv(a.cl,b)?0:Cz(a.cl,b).qo;}
function Kp(a,b){return !Dv(a.cl,b)?Long_ZERO:Cz(a.cl,b).re;}
function AHs(a,b){return !Dv(a.cl,b)?0.0:Cz(a.cl,b).l7;}
function Hk(a,b){return !Dv(a.cl,b)?$rt_createByteArray(0):Cz(a.cl,b).la;}
function KG(a,b){return !Dv(a.cl,b)?F9():Cz(a.cl,b);}
function IJ(a,b){return !Dv(a.cl,b)?Km():Cz(a.cl,b);}
function QS(a,b){return !JR(a,b)?0:1;}
function Nq(){B5.call(this);}
function A$7(){var a=new Nq();AZD(a);return a;}
function AZD(a){Q(a);}
function PH(){B5.call(this);}
function A$8(){var a=new PH();AQ6(a);return a;}
function AQ6(a){Q(a);}
function O7(){F2.call(this);this.yw=0;}
function AO4(a){var b;b=new Ba;Y(b);return N(Bb(H(b,B(584)),a.yw));}
function Nm(){F2.call(this);this.Bf=0;}
function AOH(a){var b;b=new Ba;Y(b);return N(Bb(H(b,B(585)),a.Bf));}
function Hp(){var a=this;E.call(a);a.kW=0;a.pF=0;a.kx=null;a.gC=null;a.qG=null;a.hz=null;}
function A$9(a){var b=new Hp();RO(b,a);return b;}
function RO(a,b){a.hz=b;a.pF=b.gq;a.kx=null;}
function Fl(a){if(a.kx!==null)return 1;while(a.kW<a.hz.cp.data.length){if(a.hz.cp.data[a.kW]!==null)return 1;a.kW=a.kW+1|0;}return 0;}
function QU(a){var b;if(a.pF==a.hz.gq)return;b=new Jg;Q(b);M(b);}
function So(a){var b,c,d;QU(a);if(!Fl(a)){b=new Is;Q(b);M(b);}if(a.kx===null){c=a.hz.cp.data;d=a.kW;a.kW=d+1|0;a.gC=c[d];a.kx=a.gC.d7;a.qG=null;}else{if(a.gC!==null)a.qG=a.gC;a.gC=a.kx;a.kx=a.kx.d7;}}
function Zq(a){var b,c;QU(a);if(a.gC===null){b=new DK;Q(b);M(b);}if(a.qG!==null)a.qG.d7=a.gC.d7;else{c=a.gC.om&(a.hz.cp.data.length-1|0);a.hz.cp.data[c]=a.hz.cp.data[c].d7;}a.gC=null;a.pF=a.pF+1|0;b=a.hz;b.gq=b.gq+1|0;b=a.hz;b.fu=b.fu-1|0;}
function Rs(){Hp.call(this);}
function Kr(a){So(a);return a.gC.et;}
function SD(){var a=this;E.call(a);a.xG=null;a.A4=null;a.tZ=0;a.o7=0;}
function LD(a){return ED(a.xG);}
function AEs(a,b){return Ce(a.A4)<b?0:1;}
function AZl(a,b){a.tZ=b;}
function AYt(a,b){a.o7=b;}
function Z6(){var a=this;CI.call(a);a.un=null;a.wc=null;a.mj=null;}
function AUy(a,b){var c=new Z6();AS5(c,a,b);return c;}
function AS5(a,b,c){DI(a);a.wc=B(586);a.un=b;a.mj=c;}
function AMh(a){var b;b=0;while(b<a.mj.xd){U(a.bE,Pq(b,((a.bh/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bv/6|0)+(24*(b>>1)|0)|0,N9(a.mj,b)));b=b+1|0;}U(a.bE,C9(100,(a.bh/2|0)-100|0,((a.bv/6|0)+120|0)+12|0,B(587)));U(a.bE,C9(200,(a.bh/2|0)-100|0,(a.bv/6|0)+168|0,B(588)));}
function Zw(a,b){var c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gE){if(b.co<100){DH(a.mj,b.co,1);b.jo=N9(a.mj,b.co);}if(b.co==100){c=a.J;d=new R3;e=a.mj;DI(d);d.w0=B(589);d.jE=(-1);d.xo=a;d.iH=e;$p=1;continue _;}if(b.co==200){b=a.J;c=a.un;$p=2;continue _;}}return;case 1:Zu(c,d);if(C()){break _;}if(b.co!=200)return;b=a.J;c=a.un;$p=2;case 2:Zu(b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function ABA(a,b,c,d){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:W1(a);if(C()){break _;}Dz(a,a.bS,a.wc,a.bh/2|0,20,16777215);$p=2;case 2:AA4(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Mj(){var a=this;CI.call(a);a.pS=null;a.v1=null;a.vf=0;}
function AZw(a){var b=new Mj();ZP(b,a);return b;}
function ZP(a,b){DI(a);a.v1=B(590);a.vf=0;a.pS=b;}
function AJ7(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=5){a.rm();return;}c=new Ba;Y(c);c=H(c,B(591));d=b+1|0;c=N(Bb(c,d));$p=1;case 1:$z=AMu(c);if(C()){break _;}e=$z;if(e!==null){c=new Ba;Y(c);c=N(Bb(H(c,B(592)),d));e=new Ba;Y(e);e=N(H(Bb(H(e,B(591)),d),B(347)));Z();f=A30;$p=2;continue _;}U(a.bE,C9(b,(a.bh/2|0)-100|0,(a.bv/6|0)+(24*b|0)|0,B(593)));b=d;if(b>=5){a.rm();return;}c=new Ba;Y(c);c
=H(c,B(591));d=b+1|0;c=N(Bb(c,d));continue _;case 2:$z=AZ6(f,e);if(C()){break _;}e=$z;g=e===null?(-1):e.byteLength;e=new Ba;Y(e);c=N(H(AFr(H(H(e,c),B(594)),g/100.0),B(595)));U(a.bE,C9(b,(a.bh/2|0)-100|0,(a.bv/6|0)+(24*b|0)|0,c));b=d;if(b>=5){a.rm();return;}c=new Ba;Y(c);c=H(c,B(591));d=b+1|0;c=N(Bb(c,d));$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AH_(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=new Ba;Y(c);c=N(Bb(H(c,B(591)),b));$p=1;case 1:$z=AMu(c);if(C()){break _;}c=$z;if(c===null)c=null;else{c=new Ba;Y(c);c=N(Bb(H(c,B(591)),b));}return c;default:Es();}}CM().s(a,b,c,$p);}
function AQd(a){U(a.bE,C9(5,(a.bh/2|0)-100|0,((a.bv/6|0)+120|0)+12|0,B(596)));U(a.bE,C9(6,(a.bh/2|0)-100|0,(a.bv/6|0)+168|0,B(597)));}
function AMN(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gE){if(b.co<5){c=b.co+1|0;$p=1;continue _;}if(b.co==5){b=a.J;d=new Rg;ZP(d,a);d.v1=B(598);$p=2;continue _;}if(b.co==6){b=a.J;d=a.pS;$p=3;continue _;}}return;case 1:a.EF(c);if(C()){break _;}return;case 2:Zu(b,d);if(C()){break _;}return;case 3:Zu(b,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AFN(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J;d=null;$p=1;case 1:Zu(c,d);if(C()){break _;}if(a.vf)return;a.vf=1;d=a.J;c=new Ba;Y(c);c=N(Bb(H(c,B(591)),b));$p=2;case 2:AC_(d,c);if(C()){break _;}d=a.J;c=null;$p=3;case 3:Zu(d,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Z9(a,b,c,d){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:W1(a);if(C()){break _;}Dz(a,a.bS,a.v1,a.bh/2|0,20,16777215);$p=2;case 2:AA4(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Qg(){var a=this;E.call(a);a.kB=0;a.vS=0;a.qI=0;a.l4=0;a.j$=null;}
function RZ(a){return a.kB>=a.qI?0:1;}
function ST(a){var b,c;M8(a);a.l4=a.kB;b=a.j$;c=a.kB;a.kB=c+1|0;return Bc(b,c);}
function AG5(a){var b;if(a.l4<0){b=new DK;Q(b);M(b);}M8(a);Eo(a.j$,a.l4);a.vS=a.j$.d8;if(a.l4<a.kB)a.kB=a.kB-1|0;a.qI=a.qI-1|0;a.l4=(-1);}
function M8(a){var b;if(a.vS>=a.j$.d8)return;b=new Jg;Q(b);M(b);}
function Kb(){Fu.call(this);}
function A$$(){var a=new Kb();AW1(a);return a;}
function AW1(a){Q(a);}
function P5(){Fu.call(this);}
function A$_(){var a=new P5();AZn(a);return a;}
function AZn(a){Q(a);}
function AGr(){E.call(this);}
function A_a(){var a=new AGr();AXb(a);return a;}
function AXb(a){return;}
function V5(){E.call(this);}
function A_b(){var a=new V5();AXY(a);return a;}
function AXY(a){return;}
function XE(){JP.call(this);}
function Pq(a,b,c,d){var e=new XE();AWE(e,a,b,c,d);return e;}
function AWE(a,b,c,d,e){PF(a,b,c,d,150,20,e);}
function R3(){var a=this;CI.call(a);a.xo=null;a.w0=null;a.iH=null;a.jE=0;}
function AEw(a){var b;b=0;while(b<a.iH.l0.data.length){U(a.bE,Pq(b,((a.bh/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bv/6|0)+(24*(b>>1)|0)|0,Jp(a.iH,b)));b=b+1|0;}U(a.bE,C9(200,(a.bh/2|0)-100|0,(a.bv/6|0)+168|0,B(588)));}
function ADn(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.iH.l0.data.length){Bc(a.bE,c).jo=Jp(a.iH,c);c=c+1|0;}if(b.co!=200){a.jE=b.co;d=new Ba;Y(d);b.jo=N(H(H(H(d,B(570)),Jp(a.iH,b.co)),B(571)));return;}b=a.J;d=a.xo;$p=1;case 1:Zu(b,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AGJ(a,b,c){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jE>=0){T6(a.iH,a.jE,c);Bc(a.bE,a.jE).jo=Jp(a.iH,a.jE);a.jE=(-1);return;}$p=1;case 1:UN(a,b,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function ABT(a,b,c,d){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:W1(a);if(C()){break _;}Dz(a,a.bS,a.w0,a.bh/2|0,20,16777215);$p=2;case 2:AA4(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function Rg(){Mj.call(this);}
function ATh(a){U(a.bE,C9(6,(a.bh/2|0)-100|0,(a.bv/6|0)+168|0,B(597)));}
function AG3(a,b){var c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AH_(a,b);if(C()){break _;}c=$z;if(c===null)return;d=a.J;e=new Rl;f=new Ba;Y(f);f=N(H(H(H(f,B(599)),c),B(600)));DI(e);e.y2=a;e.yR=B(601);e.yT=f;e.wk=b;$p=2;case 2:Zu(d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ALr(a,b,c){var d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b){$p=2;continue _;}d=a.J;e=a.pS;$p=1;case 1:Zu(d,e);if(C()){break _;}return;case 2:$z=AH_(a,c);if(C()){break _;}d=$z;e=new Ba;Y(e);e=N(H(H(e,d),B(17)));f=B(602);d=B(603);g=A35.hy;h=B(604);$p=3;case 3:AMk(g,f,h);if(C()){break _;}b=1;c=1;Z();i=N7();h=A30;$p=4;case 4:AVL(h,e,
b,c,i);if(C()){break _;}j=0;k=0;l=GN(i);while(true){if(!EH(l)){d=GN(i);while(EH(d)){h=EE(d);if(h.i9){h=h.iD;$p=9;continue _;}}$p=6;continue _;}h=EE(l);if(!h.i9)break;}h=h.iD;$p=5;case 5:AGW(h);if(C()){break _;}c=j+1|0;if((c-k|0)>=10){b=K_(c/i.f7*100.0)|0;m=new Ba;Y(m);h=I9(d,B(605),N(Bb(H(m,B(3)),c)));$p=7;continue _;}j=c;while(true){if(!EH(l)){d=GN(i);while(EH(d)){h=EE(d);if(h.i9){h=h.iD;$p=9;continue _;}}$p=6;continue _;}h=EE(l);if(!h.i9)break;}h=h.iD;continue _;case 6:AGW(e);if(C()){break _;}d=a.J;e=a.pS;$p
=1;continue _;case 7:AMk(g,f,h);if(C()){break _;}$p=8;case 8:TL(g,b);if(C()){break _;}j=c;k=c;while(true){if(!EH(l)){d=GN(i);while(EH(d)){h=EE(d);if(h.i9){h=h.iD;$p=9;continue _;}}$p=6;continue _;}h=EE(l);if(!h.i9)break;}h=h.iD;$p=5;continue _;case 9:AGW(h);if(C()){break _;}while(EH(d)){h=EE(d);if(!h.i9)continue;else{h=h.iD;continue _;}}$p=6;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function LF(){var a=this;E.call(a);a.jD=0.0;a.jt=0.0;a.DJ=0;a.sq=0;}
function A_c(){var a=new LF();YP(a);return a;}
function YP(a){a.jD=0.0;a.jt=0.0;a.DJ=0;a.sq=0;}
function Uo(){var a=this;LF.call(a);a.i5=null;a.l9=null;}
function Sg(a){var b=new Uo();ARU(b,a);return b;}
function ARU(a,b){YP(a);a.i5=$rt_createBooleanArray(10);a.l9=b;}
function AJ5(a,b,c){var d;d=(-1);if(b==a.l9.r$.by)d=0;if(b==a.l9.u2.by)d=1;if(b==a.l9.r3.by)d=2;if(b==a.l9.sx.by)d=3;if(b==a.l9.v$.by)d=4;if(d>=0)a.i5.data[d]=c;}
function AJA(a){var b;b=0;while(b<10){a.i5.data[b]=0;b=b+1|0;}}
function AJe(a,b){a.jD=0.0;a.jt=0.0;if(a.i5.data[0])a.jt=a.jt+1.0;if(a.i5.data[1])a.jt=a.jt-1.0;if(a.i5.data[2])a.jD=a.jD+1.0;if(a.i5.data[3])a.jD=a.jD-1.0;a.sq=a.i5.data[4];}
function N8(){E.call(this);this.lV=null;}
var A_d=null;function ARc(){ARc=Bt(N8);AUW();}
function A0f(){var a=new N8();AGw(a);return a;}
function Sz(){ARc();return A_d;}
function AGw(a){var b,c,d,e;ARc();SN(a);a.lV=Ck();ACC(A1k(),a);TB(A0n(),a);Zx(A1i(),a);AEV(A05(),a);Uf(A0y(),a);AMU(A0W(),a);b=new B6;J();Rn(b,A4z,1);c=O(E,5);d=c.data;d[0]=B(606);d[1]=B(606);d[2]=B(606);d[3]=BC(35);Bw();d[4]=A5E;Ca(a,b,c);e=F3(A4G,1);c=O(E,7);d=c.data;d[0]=B(607);d[1]=B(608);d[2]=B(607);d[3]=BC(88);d[4]=A5D;d[5]=BC(35);d[6]=A4w;Ca(a,e,c);e=F3(A4e,3);c=O(E,3);d=c.data;d[0]=B(606);d[1]=BC(35);d[2]=A4j;Ca(a,e,c);e=F3(A5A,1);c=O(E,5);d=c.data;d[0]=B(609);d[1]=B(606);d[2]=B(609);d[3]=BC(35);d[4]
=A7l;Ca(a,e,c);e=D$(A7V,1);c=O(E,5);d=c.data;d[0]=B(610);d[1]=B(610);d[2]=B(610);d[3]=BC(35);d[4]=A4l;Ca(a,e,c);e=D$(A6v,1);c=O(E,7);d=c.data;d[0]=B(606);d[1]=B(606);d[2]=B(611);d[3]=BC(35);d[4]=A4l;d[5]=BC(88);d[6]=A7l;Ca(a,e,c);e=F3(A4l,4);c=O(E,3);d=c.data;d[0]=B(612);d[1]=BC(35);d[2]=A4m;Ca(a,e,c);e=D$(A7l,4);c=O(E,4);d=c.data;d[0]=B(612);d[1]=B(612);d[2]=BC(35);d[3]=A4l;Ca(a,e,c);e=F3(A4o,4);c=O(E,6);d=c.data;d[0]=B(66);d[1]=B(612);d[2]=BC(88);d[3]=A6S;d[4]=BC(35);d[5]=A7l;Ca(a,e,c);e=D$(A7m,4);c=O(E,4);d
=c.data;d[0]=B(609);d[1]=B(613);d[2]=BC(35);d[3]=A4l;Ca(a,e,c);e=F3(A6o,16);c=O(E,7);d=c.data;d[0]=B(614);d[1]=B(607);d[2]=B(614);d[3]=BC(88);d[4]=A68;d[5]=BC(35);d[6]=A7l;Ca(a,e,c);e=D$(A7Z,1);c=O(E,4);d=c.data;d[0]=B(609);d[1]=B(606);d[2]=BC(35);d[3]=A68;Ca(a,e,c);e=D$(A7W,1);c=O(E,4);d=c.data;d[0]=B(609);d[1]=B(613);d[2]=BC(35);d[3]=A68;Ca(a,e,c);e=D$(A65,1);c=O(E,6);d=c.data;d[0]=B(615);d[1]=B(616);d[2]=BC(65);d[3]=A68;d[4]=BC(66);d[5]=A6R;Ca(a,e,c);e=D$(A7x,1);c=O(E,3);d=c.data;d[0]=B(606);d[1]=BC(35);d[2]
=A6V;Ca(a,e,c);e=F3(A6c,4);c=O(E,5);d=c.data;d[0]=B(617);d[1]=B(618);d[2]=B(606);d[3]=BC(35);d[4]=A4l;Ca(a,e,c);e=F3(A6p,4);c=O(E,5);d=c.data;d[0]=B(617);d[1]=B(618);d[2]=B(606);d[3]=BC(35);d[4]=A4j;Ca(a,e,c);e=D$(A7T,1);c=O(E,7);d=c.data;d[0]=B(606);d[1]=B(608);d[2]=B(606);d[3]=BC(35);d[4]=A7l;d[5]=BC(88);d[6]=A4z;Ca(a,e,c);e=D$(A7U,1);c=O(E,7);d=c.data;d[0]=B(606);d[1]=B(608);d[2]=B(606);d[3]=BC(35);d[4]=A4E;d[5]=BC(88);d[6]=A66;Ca(a,e,c);OL(a.lV,A0H(a));B9(Ds(),N(H(Bb(BR(),CZ(a.lV)),B(619))));}
function Ca(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=c.data;e=B(3);f=0;g=0;h=0;if(!Pt(d[f],$rt_arraycls(Cp))){while(d[f] instanceof Cp){i=f+1|0;j=d[f];h=h+1|0;g=BE(j);k=new Ba;Y(k);e=N(H(H(k,e),j));f=i;}i=f;}else{i=1;l=d[f];m=0;while(true){c=l.data;if(m>=c.length)break;k=c[m];h=h+1|0;g=BE(k);j=new Ba;Y(j);e=N(H(H(j,e),k));m=m+1|0;}}n=CY();while(i<d.length){o=d[i];p=0;m=i+1|0;if(d[m] instanceof W)p=d[m].cx;else if(d[m] instanceof P)p=d[m].b;BK(n,o,CG(p));i=i+2|0;}i=Bh(g,h);d=$rt_createIntArray(i);c=d.data;p=
0;while(p<i){q=Cr(e,p);if(!Dv(n,BC(q)))c[p]=(-1);else c[p]=Cz(n,BC(q)).f4;p=p+1|0;}e=a.lV;j=new Q8;j.DT=b.bs;j.jP=g;j.pl=h;j.vn=d;j.vr=b;U(e,j);}
function OV(a,b){var c,d;c=0;while(c<a.lV.p){d=Bc(a.lV,c);if(AGm(d,b))return ACB(d,b);c=c+1|0;}return null;}
function AUW(){A_d=A0f();}
function LO(){CA.call(this);}
function A_e(){var a=new LO();AO1(a);return a;}
function AO1(a){Cl(a);}
function AYs(a,b){return;}
function ASg(a,b){return;}
function AOj(a){return 0;}
function KF(){CA.call(this);this.rI=0;}
function A_f(){var a=new KF();AU1(a);return a;}
function AU1(a){Cl(a);}
function AX5(a,b){I$(b,a.rI);}
function AXI(a,b){a.rI=LN(b);}
function AWH(a){return 1;}
function KY(){CA.call(this);this.rC=0;}
function A_g(){var a=new KY();AV$(a);return a;}
function AV$(a){Cl(a);}
function APp(a,b){V1(b,a.rC);}
function ARE(a,b){a.rC=TN(b);}
function AV1(a){return 2;}
function JA(){CA.call(this);this.qo=0;}
function A_h(){var a=new JA();ATb(a);return a;}
function ATb(a){Cl(a);}
function ATr(a,b){Id(b,a.qo);}
function ARi(a,b){a.qo=GT(b);}
function AOL(a){return 3;}
function LZ(){CA.call(this);this.re=Long_ZERO;}
function A_i(){var a=new LZ();ARZ(a);return a;}
function ARZ(a){Cl(a);}
function ANk(a,b){Q0(b,a.re);}
function AZU(a,b){a.re=P9(b);}
function ATY(a){return 4;}
function MU(){CA.call(this);this.l7=0.0;}
function A_j(){var a=new MU();ARW(a);return a;}
function AWN(a){var b=new MU();AO5(b,a);return b;}
function ARW(a){Cl(a);}
function AO5(a,b){Cl(a);a.l7=b;}
function ANd(a,b){AJV(b,a.l7);}
function AXD(a,b){a.l7=WL(b);}
function AM0(a){return 5;}
function Kz(){CA.call(this);this.hN=0.0;}
function A_k(){var a=new Kz();ARG(a);return a;}
function ARG(a){Cl(a);}
function AWU(a,b){AJ0(b,a.hN);}
function AOz(a,b){a.hN=AJY(b);}
function ASD(a){return 6;}
function KM(){CA.call(this);this.la=null;}
function A_l(){var a=new KM();AZ5(a);return a;}
function AZ5(a){Cl(a);}
function AVw(a,b){Id(b,a.la.data.length);AJd(b,a.la);}
function AW9(a,b){a.la=$rt_createByteArray(GT(b));AHC(b,a.la);}
function AYF(a){return 7;}
function Mo(){CA.call(this);this.xN=null;}
function A_m(){var a=new Mo();AXS(a);return a;}
function AXS(a){Cl(a);}
function AZt(a,b){Tv(b,a.xN);}
function ARj(a,b){a.xN=FY(b);}
function ANs(a){return 8;}
function N4(){var a=this;CA.call(a);a.gw=null;a.lH=0;}
function Km(){var a=new N4();ACo(a);return a;}
function ACo(a){Cl(a);a.gw=Ck();}
function AYC(a,b){var c;if(a.gw.p<=0)a.lH=1;else a.lH=Bc(a.gw,0).eC();I$(b,a.lH);Id(b,a.gw.p);c=0;while(c<a.gw.p){Bc(a.gw,c).f3(b);c=c+1|0;}}
function ARe(a,b){var c,d,e;a.lH=LN(b);c=GT(b);a.gw=Ck();d=0;while(d<c){e=AAy(a.lH);e.fX(b);U(a.gw,e);d=d+1|0;}}
function AQX(a){return 9;}
function HW(a,b){a.lH=b.eC();U(a.gw,b);}
function Ew(a,b){return Bc(a.gw,b);}
function AI9(a){return a.gw.p;}
function Qj(){var a=this;E.call(a);a.xL=null;a.uW=null;}
function AL2(a){Cx(a.xL,(QV(a.uW.result)?1:0)?null:AX0(a.uW.result));}
function AN9(a){AL2(a);}
function Qi(){E.call(this);this.AT=null;}
function TI(a){Cx(a.AT,null);}
function AP6(a){TI(a);}
function AMa(){var a=this;E.call(a);a.Bl=null;a.oI=null;}
function A1k(){var a=new AMa();AQe(a);return a;}
function AQe(a){var b,c,d,e;b=O($rt_arraycls(Cp),4);c=b.data;d=O(Cp,3);e=d.data;e[0]=B(620);e[1]=B(613);e[2]=B(613);c[0]=d;d=O(Cp,3);e=d.data;e[0]=B(66);e[1]=B(612);e[2]=B(612);c[1]=d;d=O(Cp,3);e=d.data;e[0]=B(621);e[1]=B(622);e[2]=B(623);c[2]=d;d=O(Cp,3);e=d.data;e[0]=B(621);e[1]=B(623);e[2]=B(623);c[3]=d;a.Bl=b;b=O($rt_arraycls(E),5);c=b.data;d=O(E,5);e=d.data;J();e[0]=A4l;e[1]=A4j;Bw();e[2]=A68;e[3]=A6T;e[4]=A69;c[0]=d;d=O(E,5);e=d.data;e[0]=A7b;e[1]=A7f;e[2]=A63;e[3]=A7j;e[4]=A7q;c[1]=d;d=O(E,5);e=d.data;e[0]
=A7a;e[1]=A7e;e[2]=A62;e[3]=A7i;e[4]=A7p;c[2]=d;d=O(E,5);e=d.data;e[0]=A7c;e[1]=A7g;e[2]=A64;e[3]=A7k;e[4]=A7r;c[3]=d;d=O(E,5);e=d.data;e[0]=A7s;e[1]=A7t;e[2]=A7u;e[3]=A7v;e[4]=A7w;c[4]=d;a.oI=b;}
function ACC(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.oI.data[0].data.length){d=a.oI.data[0].data[c];e=0;while(e<(a.oI.data.length-1|0)){f=a.oI.data;g=e+1|0;h=f[g].data[c];i=ND(h);f=O(E,5);j=f.data;j[0]=a.Bl.data[e];j[1]=BC(35);Bw();j[2]=A7l;j[3]=BC(88);j[4]=d;Ca(b,i,f);e=g;}c=c+1|0;}}
function T0(){var a=this;E.call(a);a.ym=null;a.n3=null;}
function A0n(){var a=new T0();AZa(a);return a;}
function AZa(a){var b,c,d,e;b=O($rt_arraycls(Cp),1);c=b.data;d=O(Cp,3);e=d.data;e[0]=B(66);e[1]=B(66);e[2]=B(612);c[0]=d;a.ym=b;b=O($rt_arraycls(E),2);c=b.data;d=O(E,5);e=d.data;J();e[0]=A4l;e[1]=A4j;Bw();e[2]=A68;e[3]=A6T;e[4]=A69;c[0]=d;d=O(E,5);e=d.data;e[0]=A6_;e[1]=A7d;e[2]=A6$;e[3]=A7h;e[4]=A7o;c[1]=d;a.n3=b;}
function TB(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.n3.data[0].data.length){d=a.n3.data[0].data[c];e=0;while(e<(a.n3.data.length-1|0)){f=a.n3.data;g=e+1|0;h=f[g].data[c];i=ND(h);j=O(E,5);k=j.data;k[0]=a.ym.data[e];k[1]=BC(35);Bw();k[2]=A7l;k[3]=BC(88);k[4]=d;Ca(b,i,j);e=g;}c=c+1|0;}h=new B6;Bw();Fz(h,A67,1);f=O(E,7);k=f.data;k[0]=B(624);k[1]=B(625);k[2]=B(624);k[3]=BC(88);k[4]=A5E;k[5]=BC(35);k[6]=A7l;Ca(b,h,f);d=D$(A5C,4);f=O(E,9);k=f.data;k[0]=B(66);k[1]=B(612);k[2]=B(42);k[3]=BC(89);k[4]=A5B;k[5]=BC(88);k[6]
=A68;k[7]=BC(35);k[8]=A7l;Ca(b,d,f);}
function TT(){E.call(this);this.qJ=null;}
function A1i(){var a=new TT();ATx(a);return a;}
function ATx(a){var b,c,d,e;b=O($rt_arraycls(E),3);c=b.data;d=O(E,2);e=d.data;J();e[0]=A4E;Bw();e[1]=A69;c[0]=d;d=O(E,2);e=d.data;e[0]=A4D;e[1]=A68;c[1]=d;d=O(E,2);e=d.data;e[0]=A6g;e[1]=A6T;c[2]=d;a.qJ=b;}
function Zx(a,b){var c,d,e,f,g,h;c=0;while(c<a.qJ.data.length){d=a.qJ.data[c].data[0];e=a.qJ.data[c].data[1];f=AGV(d);g=O(E,5);h=g.data;h[0]=B(606);h[1]=B(606);h[2]=B(606);h[3]=BC(35);h[4]=e;Ca(b,f,g);f=D$(e,9);g=O(E,3);h=g.data;h[0]=B(612);h[1]=BC(35);h[2]=d;Ca(b,f,g);c=c+1|0;}}
function ZL(){E.call(this);}
function A05(){var a=new ZL();ASr(a);return a;}
function ASr(a){return;}
function AEV(a,b){var c,d,e;c=new B6;Bw();Dg(c,A7n);d=O(E,9);e=d.data;e[0]=B(42);e[1]=B(66);e[2]=B(612);e[3]=BC(88);J();e[4]=A4u;e[5]=BC(89);e[6]=A4v;e[7]=BC(35);e[8]=A7m;Ca(b,c,d);c=ND(A7n);d=O(E,9);e=d.data;e[0]=B(42);e[1]=B(66);e[2]=B(612);e[3]=BC(88);e[4]=A4v;e[5]=BC(89);e[6]=A4u;e[7]=BC(35);e[8]=A7m;Ca(b,c,d);}
function AL_(){E.call(this);}
function A0y(){var a=new AL_();AWP(a);return a;}
function AWP(a){return;}
function Uf(a,b){var c,d,e;c=new B6;J();ADb(c,A6d);d=O(E,5);e=d.data;e[0]=B(606);e[1]=B(609);e[2]=B(606);e[3]=BC(35);e[4]=A4l;Ca(b,c,d);c=AGV(A6k);d=O(E,5);e=d.data;e[0]=B(606);e[1]=B(609);e[2]=B(606);e[3]=BC(35);e[4]=A4j;Ca(b,c,d);c=AGV(A6h);d=O(E,4);e=d.data;e[0]=B(610);e[1]=B(610);e[2]=BC(35);e[3]=A4l;Ca(b,c,d);}
function AAC(){var a=this;E.call(a);a.w7=null;a.mN=null;}
function A0W(){var a=new AAC();AOA(a);return a;}
function AOA(a){var b,c,d,e;b=O($rt_arraycls(Cp),4);c=b.data;d=O(Cp,2);e=d.data;e[0]=B(620);e[1]=B(614);c[0]=d;d=O(Cp,3);e=d.data;e[0]=B(614);e[1]=B(620);e[2]=B(620);c[1]=d;d=O(Cp,3);e=d.data;e[0]=B(620);e[1]=B(614);e[2]=B(614);c[2]=d;d=O(Cp,2);e=d.data;e[0]=B(614);e[1]=B(614);c[3]=d;a.w7=b;b=O($rt_arraycls(E),5);c=b.data;d=O(E,5);e=d.data;J();e[0]=A4z;e[1]=A5H;Bw();e[2]=A68;e[3]=A6T;e[4]=A69;c[0]=d;d=O(E,5);e=d.data;e[0]=A7y;e[1]=A7C;e[2]=A7G;e[3]=A7K;e[4]=A7O;c[1]=d;d=O(E,5);e=d.data;e[0]=A7z;e[1]=A7D;e[2]
=A7H;e[3]=A7L;e[4]=A7P;c[2]=d;d=O(E,5);e=d.data;e[0]=A7A;e[1]=A7E;e[2]=A7I;e[3]=A7M;e[4]=A7Q;c[3]=d;d=O(E,5);e=d.data;e[0]=A7B;e[1]=A7F;e[2]=A7J;e[3]=A7N;e[4]=A7R;c[4]=d;a.mN=b;}
function AMU(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.mN.data[0].data.length){d=a.mN.data[0].data[c];e=0;while(e<(a.mN.data.length-1|0)){f=a.mN.data;g=e+1|0;h=f[g].data[c];i=ND(h);f=O(E,3);j=f.data;j[0]=a.w7.data[e];j[1]=BC(88);j[2]=d;Ca(b,i,f);e=g;}c=c+1|0;}}
function Un(){E.call(this);this.EG=null;}
function A0H(a){var b=new Un();AQU(b,a);return b;}
function AQU(a,b){a.EG=b;}
function AHr(a,b,c){return IQ(c)<IQ(b)?(-1):IQ(c)<=IQ(b)?0:1;}
function ARB(a,b,c){return AHr(a,b,c);}
function Sv(){D0.call(this);this.q0=null;}
function AUC(a){D5(a.bS,B(256),60,6,4210752);D5(a.bS,B(319),8,(a.eL-96|0)+2|0,4210752);}
function AIZ(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bi;d=B(626);$p=1;case 1:$z=ACM(c,d);if(C()){break _;}e=$z;BN(1.0,1.0,1.0,1.0);DJ(a.J.bi,e);f=(a.bh-a.ez|0)/2|0;g=(a.bv-a.eL|0)/2|0;Ct(a,f,g,0,0,a.ez,a.eL);if(SR(a.q0)){h=Zk(a.q0,12);Ct(a,f+56|0,((g+36|0)+12|0)-h|0,176,12-h|0,14,h+2|0);}i=AJm(a.q0,24);Ct(a,f+79|0,g+34|0,176,14,i+1|0,16);return;default:Es();}}CM().s(a,
b,c,d,e,f,g,h,i,$p);}
function Tp(){var a=this;D0.call(a);a.ld=null;a.st=null;}
function U5(a){var b,c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:WJ(a);if(C()){break _;}b=0;while(b<9){c=Ft(a.ld,b);if(c!==null){d=a.J.e;$p=2;continue _;}b=b+1|0;}return;case 2:AGL(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=9)break;c=Ft(a.ld,b);if(c===null)continue;else{d=a.J.e;continue _;}}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AWC(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=e+(f*3|0)|0;h=Ft(a.ld,g);if(h!==null)d[g]=h.bs;else d[g]=(-1);f=f+1|0;}e=e+1|0;}MW(a.st,0,OV(Sz(),c));}
function ATo(a){D5(a.bS,B(515),28,6,4210752);D5(a.bS,B(319),8,(a.eL-96|0)+2|0,4210752);}
function AFp(a,b){var c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bi;d=B(627);$p=1;case 1:$z=ACM(c,d);if(C()){break _;}e=$z;BN(1.0,1.0,1.0,1.0);DJ(a.J.bi,e);Ct(a,(a.bh-a.ez|0)/2|0,(a.bv-a.eL|0)/2|0,0,0,a.ez,a.eL);return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AHq(){var a=this;D0.call(a);a.BL=null;a.xU=null;a.jx=0;}
function A1G(a,b){var c=new AHq();ATF(c,a,b);return c;}
function ATF(a,b,c){var d,e,f,g;GX(a);a.jx=0;a.BL=b;a.xU=c;a.oj=0;a.jx=c.fH()/9|0;a.eL=114+(a.jx*18|0)|0;d=(a.jx-4|0)*18|0;e=0;while(e<a.jx){f=0;while(f<9){U(a.cH,DC(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){U(a.cH,DC(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=161+d|0;while(e<9){U(a.cH,DC(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function AYV(a){D5(a.bS,a.xU.uQ(),8,6,4210752);D5(a.bS,B(319),8,(a.eL-96|0)+2|0,4210752);}
function AIx(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bi;d=B(628);$p=1;case 1:$z=ACM(c,d);if(C()){break _;}e=$z;BN(1.0,1.0,1.0,1.0);DJ(a.J.bi,e);f=(a.bh-a.ez|0)/2|0;g=(a.bv-a.eL|0)/2|0;Ct(a,f,g,0,0,a.ez,(a.jx*18|0)+17|0);Ct(a,f,(g+(a.jx*18|0)|0)+17|0,0,126,a.ez,96);return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function CF(){var a=this;Ef.call(a);a.Ej=null;a.fC=0;a.lR=0;a.w9=0;a.w8=0;}
var A_n=null;var A_o=null;var A_p=null;var A_q=null;var A_r=null;var A_s=null;var A_t=null;var A_u=null;var A_v=null;var A_w=null;var A_x=null;var A_y=null;var A_z=null;var A_A=null;var A_B=null;var A_C=null;var A_D=null;var A_E=null;var A_F=null;var A8b=null;function C5(a,b,c,d,e,f,g){var h=new CF();Z0(h,a,b,c,d,e,f,g);return h;}
function Z0(a,b,c,d,e,f,g,h){E6(a,b,c);a.Ej=d;a.fC=e;a.lR=f;a.w9=g;a.w8=h;}
function AKH(){var b,c;A_n=C5(B(629),0,B(629),16,16,0,0);A_o=C5(B(630),1,B(630),16,16,16,0);A_p=C5(B(631),2,B(631),16,16,32,0);A_q=C5(B(632),3,B(632),16,16,48,0);A_r=C5(B(633),4,B(633),16,16,64,0);A_s=C5(B(634),5,B(634),16,16,80,0);A_t=C5(B(635),6,B(635),16,16,96,0);A_u=C5(B(636),7,B(636),32,16,0,32);A_v=C5(B(637),8,B(637),32,16,32,32);A_w=C5(B(638),9,B(638),32,16,64,32);A_x=C5(B(639),10,B(639),32,16,96,32);A_y=C5(B(640),11,B(640),16,32,0,64);A_z=C5(B(641),12,B(641),32,32,0,128);A_A=C5(B(642),13,B(642),32,32,
32,128);A_B=C5(B(643),14,B(643),32,32,64,128);A_C=C5(B(644),15,B(644),32,32,96,128);A_D=C5(B(645),16,B(645),32,32,128,128);A_E=C5(B(646),17,B(646),64,32,0,96);A_F=C5(B(647),18,B(647),64,64,0,192);b=O(CF,19);c=b.data;c[0]=A_n;c[1]=A_o;c[2]=A_p;c[3]=A_q;c[4]=A_r;c[5]=A_s;c[6]=A_t;c[7]=A_u;c[8]=A_v;c[9]=A_w;c[10]=A_x;c[11]=A_y;c[12]=A_z;c[13]=A_A;c[14]=A_B;c[15]=A_C;c[16]=A_D;c[17]=A_E;c[18]=A_F;A8b=b;}
function Rl(){var a=this;CI.call(a);a.y2=null;a.yR=null;a.yT=null;a.wk=0;}
function ABK(a){U(a.bE,Pq(0,((a.bh/2|0)-155|0)+0|0,(a.bv/6|0)+96|0,B(648)));U(a.bE,Pq(1,((a.bh/2|0)-155|0)+160|0,(a.bv/6|0)+96|0,B(649)));}
function AKZ(a,b){var c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.y2;d=b.co?0:1;e=a.wk;$p=1;case 1:ALr(c,d,e);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,$p);}
function UR(a,b,c,d){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:W1(a);if(C()){break _;}Dz(a,a.bS,a.yR,a.bh/2|0,70,16777215);Dz(a,a.bS,a.yT,a.bh/2|0,90,16777215);$p=2;case 2:AA4(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,$p);}
function M_(){Ev.call(this);this.zp=null;}
function Yw(a){var b;b=new RT;RO(b,a.zp);return b;}
function Hn(){EA.call(this);}
function A_G(){var a=new Hn();ANT(a);return a;}
function ANT(a){Q(a);}
function Q8(){var a=this;E.call(a);a.jP=0;a.pl=0;a.vn=null;a.vr=null;a.DT=0;}
function AGm(a,b){var c,d;c=0;while(c<=(3-a.jP|0)){d=0;while(d<=(3-a.pl|0)){if(RD(a,b,c,d,1))return 1;if(RD(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function RD(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.jP&&i<a.pl)j=!e?a.vn.data[h+Bh(i,a.jP)|0]:a.vn.data[((a.jP-h|0)-1|0)+Bh(i,a.jP)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function ACB(a,b){return I2(a.vr.bs,a.vr.m);}
function IQ(a){return Bh(a.jP,a.pl);}
function RT(){Hp.call(this);}
function JD(a){So(a);return a.gC.fA;}
function La(){Eu.call(this);}
var A_H=0.0;var A_I=null;function AEY(){A_H=NaN;A_I=K($rt_doublecls());}
function QN(){}
function Po(){}
function PZ(){Ev.call(this);this.mS=null;}
var A_J=null;function A1F(){var a=new PZ();V$(a);return a;}
function V$(a){a.mS=A17();}
function H2(a){return ADy(a.mS);}
function Vg(a,b){return AMO(a.mS,b,b)===A_J?0:1;}
function KK(a,b){return ABM(a.mS,b)!==A_J?0:1;}
function K1(a){return Za(a.mS);}
function WD(){A_J=new E;}
function PM(){}
function Mx(){}
function AE2(){var a=this;E_.call(a);a.jr=null;a.rO=null;a.C2=null;a.rU=0;}
function A17(){var a=new AE2();ANN(a);return a;}
function ANN(a){var b;b=null;a.C2=b;if(b===null){b=new N5;b.EW=a;}a.rO=b;}
function AMO(a,b,c){var d,e;a.jr=L$(a,a.jr,b);d=Sx(a,b);e=P3(d,c);P3(d,c);a.rU=a.rU+1|0;return e;}
function ABM(a,b){var c;c=Sx(a,b);if(c===null)return null;a.jr=JL(a,a.jr,b);a.rU=a.rU+1|0;return c.mE;}
function Sx(a,b){var c,d;c=a.jr;while(true){if(c===null)return null;d=Ma(a.rO,b,c.l5);if(!d)break;c=d>=0?c.cX:c.cO;}return c;}
function L$(a,b,c){var d,e;if(b===null){b=new Jx;d=null;b.l5=c;b.mE=d;b.kz=1;b.ir=1;return b;}e=Ma(a.rO,c,b.l5);if(!e)return b;if(e>=0)b.cX=L$(a,b.cX,c);else b.cO=L$(a,b.cO,c);E1(b);return K2(b);}
function JL(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Ma(a.rO,c,b.l5);if(d<0)b.cO=JL(a,b.cO,c);else if(d>0)b.cX=JL(a,b.cX,c);else{if(b.cX===null)return b.cO;e=b.cO;b=b.cX;f=O(Jx,b.kz);g=0;while(b.cO!==null){h=f.data;i=g+1|0;h[g]=b;b=b.cO;g=i;}c=b.cX;while(g>0){h=f.data;g=g+(-1)|0;j=h[g];j.cO=c;E1(j);c=K2(j);}b.cX=c;b.cO=e;E1(b);}E1(b);return K2(b);}
function Za(a){var b,c,d;b=a.jr;c=null;while(b!==null){d=AI1(b,0);c=b;b=d;}if(c!==null)return c.l5;b=new Is;Q(b);M(b);}
function ADy(a){return a.jr===null?0:a.jr.ir;}
function N5(){E.call(this);this.EW=null;}
function Ma(a,b,c){return b===null?Qs(c,b):Qs(b,c);}
function Lh(){E.call(this);}
var A_K=null;var A_L=null;function A_M(){var a=new Lh();AMD(a);return a;}
function AMD(a){return;}
function Dd(b,c){BK(A_K,c,b);BK(A_L,b,c);}
function HT(b,c){var d,e,f,g,h,$$je;d=null;a:{try{e=d;f=Cz(A_K,b);if(f!==null){e=d;g=O(E5,1);g.data[0]=K(FO);b=SH(f,g);g=O(E,1);g.data[0]=c;d=SK(b,g);e=d;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){h=$$je;}else{throw $$e;}}B4(h);d=e;}return d;}
function ADs(){A_K=CY();A_L=CY();Dd(K(HY),B(650));Dd(K(Er),B(651));Dd(K(Hj),B(652));Dd(K(Ea),B(653));Dd(K(Dp),B(654));Dd(K(Ip),B(655));Dd(K(HU),B(656));Dd(K(IO),B(657));Dd(K(Ju),B(658));Dd(K(HG),B(659));Dd(K(Hg),B(572));Dd(K(I7),B(660));Dd(K(KA),B(661));Dd(K(Ic),B(662));Dd(K(Fs),B(663));}
function Io(){var a=this;E.call(a);a.e5=0;a.eO=0;a.e$=0;a.oB=0;a.il=Long_ZERO;a.ns=Long_ZERO;}
var A9Q=Long_ZERO;function AZh(a,b){var c;if(!(b instanceof Io))return 0;c=b;return a.e5==c.e5&&a.eO==c.eO&&a.e$==c.e$&&a.oB==c.oB?1:0;}
function AXr(a){return (((((a.e5*128|0)*1024|0)+(a.e$*128|0)|0)+a.eO|0)*256|0)+a.oB|0;}
function ASh(a,b){a.il=b;return a;}
function AIj(a,b){return Long_lt(a.il,b.il)?(-1):Long_gt(a.il,b.il)?1:Long_lt(a.ns,b.ns)?(-1):Long_le(a.ns,b.ns)?0:1;}
function Qs(a,b){return AIj(a,b);}
function ABx(){A9Q=Long_ZERO;}
function Jw(){}
function Sc(){var a=this;E.call(a);a.kl=null;a.hW=null;a.gm=null;a.T=null;a.kv=null;a.eR=0;a.ff=0;a.e_=null;}
function BJ(a,b,c){var d;if(b==a.eR&&c==a.ff&&a.e_!==null)return 1;a:{b:{d=(b&31)+((c&31)*32|0)|0;if(a.T.data[d]!==null){if(a.T.data[d]===a.kl)break b;if(AL0(a.T.data[d],b,c))break b;}b=0;break a;}b=1;}return b;}
function AIV(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b==a.eR&&c==a.ff&&a.e_!==null)return a.e_;d=(b&31)+((c&31)*32|0)|0;if(!BJ(a,b,c)){A4g=1;if(a.T.data[d]!==null){AJo(a.T.data[d]);e=a.T.data[d];$p=1;continue _;}if(a.gm===null)f=null;else{try{e=a.gm;f=a.kv;$p=2;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){e=$$je;}else{throw $$e;}}B4(e);f=null;}if(f===
null){if(a.hW!==null){e=a.hW;$p=3;continue _;}f=a.kl;}a.T.data[d]=f;if(a.T.data[d]!==null)It(a.T.data[d]);if(!a.T.data[d].fS){g=b+1|0;h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(BJ(a,g,h)){$p=6;continue _;}A4g=0;}a.eR=b;a.ff=c;a.e_=a.T.data[d];return a.T.data[d];case 1:XL(a,e);if(C()){break _;}Iy(a,a.T.data[d]);if(a.gm===null)f=null;else{try{e=a.gm;f=a.kv;$p=2;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BB)
{e=$$je;}else{throw $$e;}}B4(e);f=null;}if(f===null){if(a.hW!==null){e=a.hW;$p=3;continue _;}f=a.kl;}a.T.data[d]=f;if(a.T.data[d]!==null)It(a.T.data[d]);if(!a.T.data[d].fS){g=b+1|0;h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A4g=0;a.eR=b;a.ff=c;a.e_=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 2:a:{try{$z=ACf(e,f,b,c);if(C()){break _;}f=$z;if(f!==null)f.rj=a.kv.dG;break a;}catch($$e){$$je=Bf($$e);if
($$je instanceof BB){e=$$je;}else{throw $$e;}}B4(e);f=null;}if(f===null){if(a.hW!==null){e=a.hW;$p=3;continue _;}f=a.kl;}a.T.data[d]=f;if(a.T.data[d]!==null)It(a.T.data[d]);if(!a.T.data[d].fS){g=b+1|0;h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A4g=0;a.eR=b;a.ff=c;a.e_=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 3:$z=AEO(e,b,c);if(C()){break _;}f=$z;a.T.data[d]=f;if(a.T.data[d]!==null)It(a.T.data[d]);if
(!a.T.data[d].fS){g=b+1|0;h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A4g=0;a.eR=b;a.ff=c;a.e_=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 4:$z=AIV(a,g,c);if(C()){break _;}e=$z;if(!e.fS){h=c+1|0;if(BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=8;continue _;}}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A4g=0;a.eR=b;a.ff=c;a.e_=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 5:$z=AIV(a,
b,h);if(C()){break _;}e=$z;if(!e.fS){i=b+1|0;if(BJ(a,i,h)&&BJ(a,b,h)&&BJ(a,i,c)){$p=9;continue _;}}if(!BJ(a,g,h)){A4g=0;a.eR=b;a.ff=c;a.e_=a.T.data[d];return a.T.data[d];}$p=6;case 6:$z=AIV(a,g,h);if(C()){break _;}e=$z;if(!e.fS&&BJ(a,g,h)&&BJ(a,b,h)&&BJ(a,g,c)){$p=10;continue _;}A4g=0;a.eR=b;a.ff=c;a.e_=a.T.data[d];return a.T.data[d];case 7:AAT(a,a,b,c);if(C()){break _;}g=b-1|0;if(BJ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A4g=0;a.eR=b;a.ff=c;a.e_=a.T.data[d];return a.T.data[d];}$p
=6;continue _;case 8:AAT(a,a,g,c);if(C()){break _;}h=c-1|0;if(BJ(a,b,h)){$p=5;continue _;}if(!BJ(a,g,h)){A4g=0;a.eR=b;a.ff=c;a.e_=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 9:AAT(a,a,b,h);if(C()){break _;}if(!BJ(a,g,h)){A4g=0;a.eR=b;a.ff=c;a.e_=a.T.data[d];return a.T.data[d];}$p=6;continue _;case 10:AAT(a,a,g,h);if(C()){break _;}A4g=0;a.eR=b;a.ff=c;a.e_=a.T.data[d];return a.T.data[d];default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function Iy(a,b){var c,$$je;a:{if(a.gm!==null){try{ACI(a.gm,a.kv,b);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BB){c=$$je;}else{throw $$e;}}c.rR();}}}
function XL(a,b){var c,d,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.gm!==null){try{b.rj=a.kv.dG;c=a.gm;d=a.kv;$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){c=$$je;}else{throw $$e;}}B4(c);}return;case 1:a:{try{UT(c,d,b);if(C()){break _;}break a;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){c=$$je;}else{throw $$e;}}B4(c);}return;default:Es();}}CM().s(a,b,c,d,$p);}
function AAT(a,b,c,d){var e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIV(a,c,d);if(C()){break _;}e=$z;if(!e.fS){e.fS=1;if(a.hW!==null){f=a.hW;$p=2;continue _;}}return;case 2:AC$(f,b,c,d);if(C()){break _;}PI(e);return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function AIE(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;e=0;if(c!==null){f=0;while(f<a.T.data.length){if(a.T.data[f]!==null&&IP(a.T.data[f],b))e=e+1|0;f=f+1|0;}}g=0;h=0;while(h<a.T.data.length){if(a.T.data[h]!==null){if(b&&!a.T.data[h].oC)Iy(a,a.T.data[h]);if(IP(a.T.data[h],b)){i=a.T.data[h];$p=1;continue _;}}h=h+1|0;}if(b&&a.gm===null)return 1;return 1;case 1:XL(a,i);if
(C()){break _;}a.T.data[h].dr=0;d=d+1|0;if(d==2&&!b)return 0;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}while(true){h=h+1|0;if(h>=a.T.data.length)break;if(a.T.data[h]===null)continue;if(b&&!a.T.data[h].oC)Iy(a,a.T.data[h]);if(IP(a.T.data[h],b)){i=a.T.data[h];continue _;}}if(b&&a.gm===null)return 1;return 1;case 2:TL(c,f);if(C()){break _;}while(true){h=h+1|0;if(h>=a.T.data.length)break;if(a.T.data[h]===null)continue;if(b&&!a.T.data[h].oC)Iy(a,a.T.data[h]);if(IP(a.T.data[h],b)){i=a.T.data[h];$p
=1;continue _;}}if(b&&a.gm===null)return 1;return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function Qf(a){return 0;}
function AZX(a){return 1;}
function NB(){}
function Tr(){E.call(this);this.qm=null;}
function L0(a,b,c){var d,e,f,g,h;d=b+30233088|0;e=c+30233088|0;f=BE(B(664));g=new Ba;Jv(g,10);h=0;while(h<5){E$(g,Cr(B(664),d%f|0));d=d/f|0;E$(g,Cr(B(664),e%f|0));e=e/f|0;h=h+1|0;}return N(g);}
function ACf(a,b,c,d){var e,f,g,h,i,j,k,l,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=L0(a,c,d);f=new Ba;Y(f);g=N(H(H(H(f,a.qm),B(17)),e));$p=1;case 1:$z=AGB(g);if(C()){break _;}h=$z;if(h===null)return null;try{f=KW(MB(QO(h)));i=E9(f,B(665));j=E9(f,B(666));if(c==i&&d==j){$p=4;continue _;}k=L0(a,i,j);B9(CK(),N(H(Bb(H(Bb(H(H(H(H(H(Bb(H(Bb(H(Bb(H(Bb(H(H(H(BR(),B(667)),
e),B(668)),c),B(669)),d),B(670)),i),B(669)),j),B(671)),k),B(672)),e),B(673)),c),B(669)),d),B(237))));b=N(H(H(H(BR(),a.qm),B(17)),k));$p=3;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){l=$$je;}else{throw $$e;}}b=CK();f=new Ba;Y(f);B9(b,N(H(Bb(H(Bb(H(H(H(f,B(674)),e),B(675)),c),B(669)),d),B(237))));B9(CK(),B(676));$p=2;case 2:AGW(g);if(C()){break _;}B4(l);return null;case 3:a:{try{AH5(g,b);if(C()){break _;}b=null;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){l=$$je;break a;}else{throw $$e;}}return b;}b
=CK();f=new Ba;Y(f);B9(b,N(H(Bb(H(Bb(H(H(H(f,B(674)),e),B(675)),c),B(669)),d),B(237))));B9(CK(),B(676));$p=2;continue _;case 4:a:{try{$z=AT9(b,f);if(C()){break _;}b=$z;}catch($$e){$$je=Bf($$e);if($$je instanceof BU){l=$$je;break a;}else{throw $$e;}}return b;}b=CK();f=new Ba;Y(f);B9(b,N(H(Bb(H(Bb(H(H(H(f,B(674)),e),B(675)),c),B(669)),d),B(237))));B9(CK(),B(676));$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function UT(a,b,c){var d,e,f,g,h,$$je,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=F9();ABp(a,c,b,d);e=AY6(131072);try{f=APn(A1s(e));try{O8(d,f);ACZ(f);g=GZ(e);b=N(H(H(H(BR(),a.qm),B(17)),L0(a,c.fn,c.fi)));$p=1;continue _;}catch($$e){$$je=Bf($$e);if($$je instanceof DD){b=$$je;}else{throw $$e;}}a:{try{Jd(f);break a;}catch($$e){$$je=Bf($$e);if($$je instanceof DD){d=$$je;}else{throw $$e;}}SQ(b,d);}M(b);}catch
($$e){$$je=Bf($$e);if($$je instanceof BU){h=$$je;}else{throw $$e;}}b=CK();d=new Ba;Y(d);B9(b,N(H(Bb(H(Bb(H(d,B(677)),c.fn),B(669)),c.fi),B(678))));B4(h);return;case 1:b:{a:{try{try{Yg(b,g);if(C()){break _;}}catch($$e){$$je=Bf($$e);if($$je instanceof DD){b=$$je;break a;}else{throw $$e;}}Jd(f);}catch($$e){$$je=Bf($$e);if($$je instanceof BU){h=$$je;break b;}else{throw $$e;}}return;}try{c:{try{Jd(f);break c;}catch($$e){$$je=Bf($$e);if($$je instanceof DD){d=$$je;}else{throw $$e;}}SQ(b,d);}M(b);}catch($$e){$$je=Bf($$e);if
($$je instanceof BU){h=$$je;}else{throw $$e;}}}b=CK();d=new Ba;Y(d);B9(b,N(H(Bb(H(Bb(H(d,B(677)),c.fn),B(669)),c.fi),B(678))));B4(h);return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function ABp(a,b,c,d){FH(d,B(665),b.fn);FH(d,B(666),b.fi);GW(d,B(679),c.dG);Hs(d,B(680),b.gj);Hs(d,B(348),b.g0.fU);Hs(d,B(681),b.gf.fU);Hs(d,B(682),b.hb.fU);Hs(d,B(683),b.dK);PV(d,B(684),b.fS);b.qt=0;ACo(new N4);}
function AT9(b,c){var d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:d=A0L(b,E9(c,B(665)),E9(c,B(666)));d.gj=Hk(c,B(680));d.g0=ADP(Hk(c,B(348)));d.gf=ADP(Hk(c,B(681)));d.hb=ADP(Hk(c,B(682)));d.dK=Hk(c,B(683));d.fS=QS(c,B(684));if(!Ib(d.g0))d.g0=HR(d.gj.data.length);if(d.dK!==null&&Ib(d.gf)){if(!Ib(d.hb))d.hb=HR(d.gj.data.length);return d;}d.dK=$rt_createByteArray(256);d.gf=HR(d.gj.data.length);$p=1;case 1:ABb(d);if(C()){break _;}if(!Ib(d.hb))d.hb=HR(d.gj.data.length);return d;default:
Es();}}CM().s(b,c,d,$p);}
function AVa(a){return;}
function AVl(a){return;}
function ACI(a,b,c){return;}
function Px(){var a=this;E.call(a);a.a=null;a.wq=null;a.wr=null;a.wp=null;a.r0=null;a.wt=null;a.wu=null;a.ws=null;a.hX=null;a.o=null;a.hc=null;a.tH=null;a.tF=null;a.tG=null;a.tI=null;a.tJ=null;a.Cq=null;}
function Vs(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;a.hc=Vi(a,a.hc,b*4|0,0,c*4|0,5,17,5);e=0;while(e<4){f=0;while(f<4){g=0;while(g<16){h=a.hc.data;c=((e+0|0)*5|0)+f|0;i=((c+0|0)*17|0)+g|0;j=h[i+0|0];h=a.hc.data;b=((c+1|0)*17|0)+g|0;k=h[b+0|0];h=a.hc.data;l=((e+1|0)*5|0)+f|0;m=((l+0|0)*17|0)+g|0;n=h[m+0|0];h=a.hc.data;c=((l+1|0)*17|0)+g|0;o=h[c+0|0];p=(a.hc.data[i+1|0]-j)*0.125;q=(a.hc.data[b+1|0]-k)*0.125;r=(a.hc.data[m+1|0]-n)*0.125;s=(a.hc.data[c+1|0]-o)*0.125;t=0;while(t<8){u=(n-j)
*0.25;v=(o-k)*0.25;w=0;x=j;y=k;while(w<4){b=(w+(e*4|0)|0)<<11|(0+(f*4|0)|0)<<7;c=(g*8|0)+t|0;m=b|c;z=(y-x)*0.25;ba=0;c=S(c,64);bb=x;while(ba<4){i=0;if(c<0){J();i=A5W.b;}if(bb>0.0){J();i=A4f.b;}d.data[m]=i<<24>>24;m=m+128|0;bb=bb+z;ba=ba+1|0;}x=x+u;y=y+v;w=w+1|0;}j=j+p;k=k+q;n=n+r;o=o+s;t=t+1|0;}g=g+1|0;}f=f+1|0;}e=e+1|0;}}
function Yb(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=0;f=b*16|0;c=c*16|0;while(e<16){g=0;while(g<16){h=f+e|0;i=c+g|0;j=a.r0;k=h*0.03125;l=i*0.03125;m=Rm(j,k,l,0.0)+Cb(a.a)*0.2<=0.0?0:1;n=Rm(a.r0,l,109.0134,k)+Cb(a.a)*0.2<=3.0?0:1;o=Eg(a.wt,k*2.0,l*2.0)/3.0+3.0+Cb(a.a)*0.25|0;p=(-1);J();q=A4b.b;r=A4c.b;s=(((e*16|0)+g|0)*128|0)+128|0;t=127;while(t>=0){s=s+(-1)|0;if(t<=((0+D(a.a,6)|0)-1|0))d.data[s]=A4a.b<<24>>24;else{u=d.data;if(!u[s])p=(-1);else if(u[s]==A4f.b){if(p==(-1)){if(o<=0){q=0;r=A4f.b<<24>>24;}
else if(t>=60&&t<=65){q=A4b.b;r=A4c.b;if(n)q=0;if(n)r=A4x.b;if(m)q=A4w.b;if(m)r=A4w.b;}if(t<64&&!q)q=A5W.b;if(t<63){u[s]=r<<24>>24;p=o;}else{u[s]=q<<24>>24;p=o;}}else if(p>0){p=p+(-1)|0;u[s]=r<<24>>24;}}}t=t+(-1)|0;}g=g+1|0;}e=e+1|0;}}
function AEO(a,b,c){var d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=$rt_createByteArray(32768);e=AYz(a.o,d,b,c);Vs(a,b,c,d);Yb(a,b,c,d);AMc(a,b,c,d);$p=1;case 1:ABb(e);if(C()){break _;}return e;default:Es();}}CM().s(a,b,c,d,e,$p);}
function AKs(a,b,c,d,e,f,g){HP(a,b,c,d,e,f,g,1.0+L(a.a)*6.0,0.0,0.0,(-1),(-1),0.5);}
function HP(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD;n=b*16|0;o=n+8|0;p=c*16|0;q=p+8|0;r=0.0;s=0.0;t=A1n(FI(a.a));if(l<=0)l=112-D(t,28)|0;u=0;if(k==(-1)){k=l/2|0;u=1;}v=D(t,l/2|0)+(l/4|0)|0;w=D(t,6)?0:1;x=S(h,1.0);y=h+2.0+16.0;y=y*y;z=o-16.0;ba=q-16.0;bb=o+16.0;bc=q+16.0;a:{while(true){if(k>=l)break a;bd=1.5+Bm(k*3.1415927410125732/l)*h*1.0;be=bd*m;bf=Bx(j);bg=Bm(j);e=e+Bx(i)*bf;f=f+bg;g=g+Bm(i)*bf;j=(!w
?j*0.699999988079071:j*0.9200000166893005)+s*0.10000000149011612;i=i+r*0.10000000149011612;bh=s*0.8999999761581421;bf=r*0.75;s=bh+(L(t)-L(t))*L(t)*2.0;r=bf+(L(t)-L(t))*L(t)*4.0;if(!u&&k==v&&x>0){h=L(t)*0.5+0.5;bh=i-1.5707963705062866;j=j/3.0;HP(a,b,c,d,e,f,g,h,bh,j,k,l,1.0);HP(a,b,c,d,e,f,g,L(t)*0.5+0.5,i+1.5707963705062866,j,k,l,1.0);return;}if(!(!u&&!D(t,4))){bi=e-o;bj=g-q;bk=l-k|0;if(bi*bi+bj*bj-bk*bk>y)break;bl=bd*2.0;if(e>=z-bl&&g>=ba-bl&&e<=bb+bl&&g<=bc+bl){bm=(I(e-bd)-n|0)-1|0;bn=(I(e+bd)-n|0)+1|0;bo
=I(f-be)-1|0;bp=I(f+be)+1|0;bq=(I(g-bd)-p|0)-1|0;br=(I(g+bd)-p|0)+1|0;if(bm<0)bm=0;if(bn>16)bn=16;if(bo<1)bo=1;if(bp>120)bp=120;if(bq<0)bq=0;if(br>16)br=16;bs=0;bt=bm;while(!bs&&bt<bn){bu=bq;while(!bs&&bu<br){bv=bp+1|0;while(!bs){bw=S(bv,bo-1|0);if(bw<0)break;bx=(((bt*16|0)+bu|0)*128|0)+bv|0;if(bv>=0&&bv<128){by=d.data;bz=by[bx];J();if(!(bz!=A5e.b&&by[bx]!=A5W.b))bs=1;if(bw&&bt!=bm&&bt!=(bn-1|0)&&bu!=bq&&bu!=(br-1|0))bv=bo;}bv=bv+(-1)|0;}bu=bu+1|0;}bt=bt+1|0;}if(!bs){while(bm<bn){bA=((bm+n|0)+0.5-e)/bd;bi=bA
*bA;bx=bq;while(bx<br){bB=((bx+p|0)+0.5-g)/bd;bC=(((bm*16|0)+bx|0)*128|0)+bp|0;bw=0;bD=bp-1|0;bB=bB*bB;while(bD>=bo){bl=(bD+0.5-f)/be;if(bl>(-0.7)&&bi+bl*bl+bB<1.0){by=d.data;bz=by[bC];J();if(bz==A4b.b)bw=1;if(!(bz!=A4f.b&&bz!=A4c.b&&bz!=A4b.b)){if(bD<10)by[bC]=A5f.b<<24>>24;else{by[bC]=0;if(bw){bz=bC-1|0;if(by[bz]==A4c.b)by[bz]=A4b.b<<24>>24;}}}}bC=bC+(-1)|0;bD=bD+(-1)|0;}bx=bx+1|0;}bm=bm+1|0;}if(u)break a;}}}k=k+1|0;}return;}}
function AMc(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;FI(a.a);FI(a.a);e=b-8|0;f=b+8|0;g=c-8|0;h=c+8|0;while(e<=f){i=g;while(i<=h){j=D(a.a,D(a.a,D(a.a,40)+1|0)+1|0);if(D(a.a,15))j=0;k=0;while(k<j){l=(e*16|0)+D(a.a,16)|0;m=D(a.a,D(a.a,120)+8|0);n=(i*16|0)+D(a.a,16)|0;o=1;if(!D(a.a,4)){AKs(a,b,c,d,l,m,n);o=o+D(a.a,4)|0;}p=0;while(p<o){q=L(a.a)*3.1415927410125732*2.0;r=(L(a.a)-0.5)*2.0/8.0;HP(a,b,c,d,l,m,n,L(a.a)*2.0+L(a.a),q,r,0,0,1.0);p=p+1|0;}k=k+1|0;}i=i+1|0;}e=e+1|0;}}
function Vi(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(b===null)b=$rt_createDoubleArray(Bh(Bh(f,g),h));a.tI=GQ(a.wu,a.tI,c,d,e,f,1,h,1.0,0.0,1.0);a.tJ=GQ(a.ws,a.tJ,c,d,e,f,1,h,100.0,0.0,100.0);a.tH=GQ(a.wp,a.tH,c,d,e,f,g,h,8.555150000000001,4.277575000000001,8.555150000000001);a.tF=GQ(a.wq,a.tF,c,d,e,f,g,h,684.412,684.412,684.412);a.tG=GQ(a.wr,a.tG,c,d,e,f,g,h,684.412,684.412,684.412);i=0;j=0;k=0;l=g;d=g-4|0;m=l/2.0;while(k<f){n=0;while(n<h){o=(a.tI.data[j]+256.0)/512.0;if(o>1.0)o=1.0;p=a.tJ.data[j]
/8000.0;if(p<0.0)p= -p;q=p*3.0-3.0;if(q>=0.0){if(q>1.0)q=1.0;q=q/6.0;}else{o=q/2.0;if(o<(-1.0))o=(-1.0);q=o/1.4/2.0;o=0.0;}r=o+0.5;s=m+q*l/16.0*4.0;j=j+1|0;t=0;while(t<g){p=t;u=(p-s)*12.0/r;if(u<0.0)u=u*4.0;v=a.tF.data[i]/512.0;q=a.tG.data[i]/512.0;w=(a.tH.data[i]/10.0+1.0)/2.0;if(w>=0.0)v=w>1.0?q:v+(q-v)*w;o=v-u;if(t>d){x=(t-d|0)/3.0;o=o*(1.0-x)+(-10.0)*x;}if(p<0.0){x=(0.0-p)/4.0;if(x<0.0)x=0.0;if(x>1.0)x=1.0;o=o*(1.0-x)+(-10.0)*x;}b.data[i]=o;i=i+1|0;t=t+1|0;}n=n+1|0;}k=k+1|0;}return b;}
function AC$(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=c*16|0;f=d*16|0;LA(a.a,a.o.kr);g=Long_add(Long_mul(Long_div(FI(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));h=Long_add(Long_mul(Long_div(FI(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));LA(a.a,Long_xor(Long_add(Long_mul(Long_fromInt(c),
g),Long_mul(Long_fromInt(d),h)),a.o.kr));i=0;if(i<4){j=(e+D(a.a,16)|0)+8|0;k=D(a.a,128);l=(f+D(a.a,16)|0)+8|0;b=AQO();m=a.o;n=a.a;$p=1;continue _;}o=0;if(o<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4c.b,32);m=a.o;n=a.a;$p=2;continue _;}j=0;if(j<10){o=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4x.b,32);m=a.o;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4A.b,16);m=a.o;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+D(a.a,
16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4B.b,8);m=a.o;n=a.a;$p=5;continue _;}if(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4C.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A6f.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hX,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F1();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c
=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4u.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4v.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50)
{l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5e.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;$p=15;continue _;case 1:TR(b,m,n,j,k,l);if(C()){break _;}i=i+1|0;if(i<4){j=(e+D(a.a,16)|0)+8|0;k=D(a.a,128);l=(f+D(a.a,16)|0)+8|0;b=AQO();m=a.o;n=a.a;continue _;}o=0;if(o<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4c.b,32);m=a.o;n
=a.a;$p=2;continue _;}j=0;if(j<10){o=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4x.b,32);m=a.o;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4A.b,16);m=a.o;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4B.b,8);m=a.o;n=a.a;$p=5;continue _;}if(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4C.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,
16);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A6f.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hX,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F1();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=11;continue _;}if
(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4u.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4v.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5e.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=
a.o;n=a.a;$p=15;continue _;case 2:Xx(b,m,n,j,k,l);if(C()){break _;}o=o+1|0;if(o<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4c.b,32);m=a.o;n=a.a;continue _;}j=0;if(j<10){o=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4x.b,32);m=a.o;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4A.b,16);m=a.o;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4B.b,8);m=a.o;n=a.a;$p=5;continue _;}if
(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4C.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A6f.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hX,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F1();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,
A4s.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4u.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4v.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,
A5e.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;$p=15;continue _;case 3:Xx(b,m,n,o,k,l);if(C()){break _;}j=j+1|0;if(j<10){o=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4x.b,32);m=a.o;n=a.a;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4A.b,16);m=a.o;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)
|0;b=new B$;J();Cc(b,A4B.b,8);m=a.o;n=a.a;$p=5;continue _;}if(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4C.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A6f.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hX,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F1();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)
|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4u.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4v.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p
=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5e.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;$p=15;continue _;case 4:Xx(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,128);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4A.b,16);m=a.o;n=a.a;continue _;}c=0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4B.b,8);m=a.o;n=a.a;$p=5;continue _;}if
(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4C.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A6f.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hX,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F1();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,
A4s.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4u.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4v.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,
A5e.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;$p=15;continue _;case 5:Xx(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+D(a.a,16)|0;k=D(a.a,64);l=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4B.b,8);m=a.o;n=a.a;continue _;}if(!D(a.a,1)){c=e+D(a.a,16)|0;j=D(a.a,32);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A4C.b,8);m=a.o;n=a.a;$p=6;continue _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|
0;b=new B$;J();Cc(b,A6f.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hX,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F1();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,
4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4u.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4v.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5e.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;$p
=15;continue _;case 6:Xx(b,m,n,c,j,k);if(C()){break _;}if(!D(a.a,4)){c=e+D(a.a,16)|0;j=D(a.a,16);k=f+D(a.a,16)|0;b=new B$;J();Cc(b,A6f.b,8);m=a.o;n=a.a;$p=7;continue _;}c=(Eg(a.hX,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F1();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+
D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4u.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4v.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5e.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;$p=15;continue _;case 7:Xx(b,m,n,c,j,k);if(C()){break _;}c=(Eg(a.hX,e*0.5,f*0.5)/8.0+Cb(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=F1();if(!D(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=
(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4u.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4v.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5e.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;$p=15;continue _;case 8:$z=AGC(q,l,p);if(C()){break _;}d=$z;$p=9;case 9:AAe(m,b,n,l,d,p);if(C()){break _;}k=k+1|0;if(k<c){l=(e+D(a.a,16)|0)+8|0;p=(f+D(a.a,16)|0)+8|0;Em(m,1.0,1.0,1.0);b=a.o;n=a.a;q=a.o;$p=8;continue _;}c=0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;$p=10;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+
D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4u.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4v.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5e.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,
D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;$p=15;continue _;case 10:Ys(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<2){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,128);r=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4s.b);m=a.o;n=a.a;continue _;}if(!D(a.a,2)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4t.b);m=a.o;n=a.a;$p=11;continue _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4u.b);m=a.o;n=a.a;$p=12;continue _;}if
(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4v.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5e.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;$p=15;continue _;case 11:Ys(b,m,n,c,l,p);if(C()){break _;}if(!D(a.a,4)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,
16)|0)+8|0;b=new BL;J();BM(b,A4u.b);m=a.o;n=a.a;$p=12;continue _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4v.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5e.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;$p=15;continue _;case 12:Ys(b,m,n,c,l,p);if(C())
{break _;}if(!D(a.a,8)){c=(e+D(a.a,16)|0)+8|0;l=D(a.a,128);p=(f+D(a.a,16)|0)+8|0;b=new BL;J();BM(b,A4v.b);m=a.o;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5e.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;$p=15;continue _;case 13:Ys(b,m,n,c,l,p);if(C()){break _;}c=0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,
120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5e.b);m=a.o;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;$p=15;continue _;case 14:AGU(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<50){l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,120)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5e.b);m=a.o;n=a.a;continue _;}c=0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8
|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;$p=15;case 15:AGU(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c>=20)return;l=(e+D(a.a,16)|0)+8|0;p=D(a.a,D(a.a,D(a.a,112)+8|0)+8|0);r=(f+D(a.a,16)|0)+8|0;b=new Cd;J();Ci(b,A5f.b);m=a.o;n=a.a;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ASa(a){return 0;}
function R1(){var a=this;E.call(a);a.b8=null;a.kT=0;a.fj=0;a.fk=0;a.eW=0;a.eD=0;a.ed=0;}
function AI3(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.kT;while(c<=a.eW){d=a.fk;while(d<=a.ed){a:{if(D9(b,c,0,d)){e=a.fj;while(true){if(e>a.eD)break a;if(e>=0&&e<128){f=a.b8;$p=1;continue _;}e=e+1|0;}}}d=d+1|0;}c=c+1|0;}return;case 1:$z=AGf(b,f,c,e,d);if(C()){break _;}g=$z;$p=2;case 2:$z=Yc(b,
c,e,d);if(C()){break _;}h=$z;J();i=A5T.data[h];if(!i)i=1;j=0;if(a.b8===A9O){$p=3;continue _;}if(a.b8===A9P)j=A5V.data[h];if(i>=15&&!j){j=0;if(g!=j){f=a.b8;$p=10;continue _;}b:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break b;d=a.fk;}if(!D9(b,c,0,d))continue;else break;}e=a.fj;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;}f=a.b8;h=c-1|0;$p=4;continue _;case 3:$z=Vt(b,c,e,d);if(C()){break _;}h=$z;if(h)j=15;if(i>=15&&!j){j=0;if(g!=j){f=a.b8;$p
=10;continue _;}c:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break c;d=a.fk;}if(!D9(b,c,0,d))continue;else break;}e=a.fj;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;}f=a.b8;h=c-1|0;$p=4;case 4:$z=AGf(b,f,h,e,d);if(C()){break _;}k=$z;f=a.b8;h=c+1|0;$p=5;case 5:$z=AGf(b,f,h,e,d);if(C()){break _;}l=$z;f=a.b8;h=e-1|0;$p=6;case 6:$z=AGf(b,f,c,h,d);if(C()){break _;}m=$z;f=a.b8;h=e+1|0;$p=7;case 7:$z=AGf(b,f,c,h,d);if(C()){break _;}n=$z;f=a.b8;h
=d-1|0;$p=8;case 8:$z=AGf(b,f,c,e,h);if(C()){break _;}o=$z;f=a.b8;h=d+1|0;$p=9;case 9:$z=AGf(b,f,c,e,h);if(C()){break _;}p=$z;if(l<=k)l=k;if(m<=l)m=l;if(n<=m)n=m;if(o<=n)o=n;if(p<=o)p=o;h=p-i|0;if(h<0)h=0;if(j<=h)j=h;if(g!=j){f=a.b8;$p=10;continue _;}d:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break d;d=a.fk;}if(!D9(b,c,0,d))continue;else break;}e=a.fj;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;case 10:AHi(b,f,c,e,d,j);if(C()){break _;}k
=j-1|0;if(k<0)k=0;f=a.b8;h=c-1|0;$p=11;case 11:AKG(b,f,h,e,d,k);if(C()){break _;}f=a.b8;h=e-1|0;$p=12;case 12:AKG(b,f,c,h,d,k);if(C()){break _;}f=a.b8;h=d-1|0;$p=13;case 13:AKG(b,f,c,e,h,k);if(C()){break _;}h=c+1|0;if(h>=a.eW){f=a.b8;$p=14;continue _;}h=e+1|0;if(h>=a.eD){f=a.b8;$p=15;continue _;}h=d+1|0;if(h>=a.ed){f=a.b8;$p=16;continue _;}e:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break e;d=a.fk;}if(!D9(b,c,0,d))continue;else break;}e=a.fj;}if(e<0)continue;if(e>=
128)continue;else{f=a.b8;$p=1;continue _;}}return;case 14:AKG(b,f,h,e,d,k);if(C()){break _;}h=e+1|0;if(h>=a.eD){f=a.b8;$p=15;continue _;}h=d+1|0;if(h>=a.ed){f=a.b8;$p=16;continue _;}a:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break a;d=a.fk;}if(!D9(b,c,0,d))continue;else break;}e=a.fj;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;case 15:AKG(b,f,c,h,d,k);if(C()){break _;}h=d+1|0;if(h>=a.ed){f=a.b8;$p=16;continue _;}f:while(true){e=e+1|0;while
(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break f;d=a.fk;}if(!D9(b,c,0,d))continue;else break;}e=a.fj;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;case 16:AKG(b,f,c,e,h,k);if(C()){break _;}g:while(true){e=e+1|0;while(e>a.eD){while(true){d=d+1|0;while(d>a.ed){c=c+1|0;if(c>a.eW)break g;d=a.fk;}if(!D9(b,c,0,d))continue;else break;}e=a.fj;}if(e<0)continue;if(e>=128)continue;else{f=a.b8;$p=1;continue _;}}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AGx(a,b,c,d,e,f,g){if(b>=a.kT&&c>=a.fj&&d>=a.fk&&e<=a.eW&&f<=a.eD&&g<=a.ed)return 1;if(b>=(a.kT-1|0)&&c>=(a.fj-1|0)&&d>=(a.fk-1|0)&&e<=(a.eW+1|0)&&f<=(a.eD+1|0)&&g<=(a.ed+1|0)){if(b<a.kT)a.kT=b;if(c<a.fj)a.fj=c;if(d<a.fk)a.fk=d;if(e>a.eW)a.eW=e;if(f>a.eD)a.eD=f;if(g>a.ed)a.ed=g;return 1;}return 0;}
function Pf(){}
function ABt(){var a=this;Fo.call(a);a.ht=0;a.dE=null;}
function APn(a){var b=new ABt();AWX(b,a);return b;}
function AWX(a,b){Jt(a,b);a.dE=$rt_createByteArray(8);}
function ACZ(a){a.eN.kq();}
function Oh(a,b,c,d){var e;if(b!==null){a.eN.fO(b,c,d);a.ht=a.ht+d|0;return;}e=new El;Q(e);M(e);}
function I$(a,b){a.eN.mu(b);a.ht=a.ht+1|0;}
function AJ0(a,b){Q0(a,$rt_doubleToLongBits(b));}
function AJV(a,b){Id(a,$rt_floatToIntBits(b));}
function Id(a,b){a.dE.data[0]=b>>24<<24>>24;a.dE.data[1]=b>>16<<24>>24;a.dE.data[2]=b>>8<<24>>24;a.dE.data[3]=b<<24>>24;a.eN.fO(a.dE,0,4);a.ht=a.ht+4|0;}
function Q0(a,b){a.dE.data[0]=Long_shr(b,56).lo<<24>>24;a.dE.data[1]=Long_shr(b,48).lo<<24>>24;a.dE.data[2]=Long_shr(b,40).lo<<24>>24;a.dE.data[3]=b.hi<<24>>24;a.dE.data[4]=Long_shr(b,24).lo<<24>>24;a.dE.data[5]=Long_shr(b,16).lo<<24>>24;a.dE.data[6]=Long_shr(b,8).lo<<24>>24;a.dE.data[7]=b.lo<<24>>24;a.eN.fO(a.dE,0,8);a.ht=a.ht+8|0;}
function V1(a,b){a.dE.data[0]=b>>8<<24>>24;a.dE.data[1]=b<<24>>24;a.eN.fO(a.dE,0,2);a.ht=a.ht+2|0;}
function AIR(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function Tv(a,b){var c,d,e;c=ABB(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new BU;Bl(b,B(685));M(b);}d=c.lo;e=$rt_createByteArray(d+2|0);Oh(a,e,0,AJI(a,b,e,AIR(a,d,e,0)));}
function ABB(a,b){var c,d,e,f;c=0;d=BE(b);e=0;while(e<d){f=Cr(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function AJI(a,b,c,d){var e,f,g,h,i,j,k;e=BE(b);f=0;while(f<e){g=Cr(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function ABn(){E.call(this);}
function A_N(){var a=new ABn();ASb(a);return a;}
function ASb(a){return;}
function LL(){E.call(this);}
var A_O=null;var A_P=null;function A_Q(){var a=new LL();W8(a);return a;}
function W8(a){return;}
function XD(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.wB=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.sW=Long_ZERO;c.sa=0;return;}g=0;if(f)e=Long_or(e,new Long(0, 1048576));else{e=Long_shl(e,1);while(Long_eq(Long_and(e,new Long(0, 1048576)),Long_ZERO)){e=Long_shl(e,1);f=f+(-1)|0;g=g+1|0;}}h=AI7(A_P,f);if(h<0)h= -h-2|0;i=12+(f-A_P.data[h]|0)|0;j=NN(e,A_O.data[h],i);if(Long_ge(j,
new Long(2808348672, 232830643))){h=h+1|0;i=12+(f-A_P.data[h]|0)|0;j=NN(e,A_O.data[h],i);}k=Long_shru(A_O.data[h],(63-i|0)-g|0);l=Long_shr(Long_add(k,Long_fromInt(1)),1);m=Long_shr(k,1);if(Long_eq(e,new Long(0, 1048576)))m=Long_shr(m,2);n=Long_fromInt(10);while(Long_le(n,m)){n=Long_mul(n,Long_fromInt(10));}if(Long_ge(Long_rem(j,n),Long_div(m,Long_fromInt(2))))n=Long_div(n,Long_fromInt(10));o=Long_fromInt(1);while(Long_le(o,l)){o=Long_mul(o,Long_fromInt(10));}if(Long_gt(Long_sub(o,Long_rem(j,o)),Long_div(l,Long_fromInt(2))))o
=Long_div(o,Long_fromInt(10));f=Long_compare(n,o);e=f>0?Long_mul(Long_div(j,n),n):f<0?Long_add(Long_mul(Long_div(j,o),o),o):Long_mul(Long_div(Long_add(j,Long_div(o,Long_fromInt(2))),o),o);if(Long_ge(e,new Long(2808348672, 232830643))){h=h+1|0;e=Long_div(e,Long_fromInt(10));}else if(Long_lt(e,new Long(1569325056, 23283064))){h=h+(-1)|0;e=Long_mul(e,Long_fromInt(10));}c.sW=e;c.sa=h-330|0;}
function NN(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,e),Long_mul(k,
f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_shl(Long_mul(l,h),32+d|0),Long_shl(Long_add(Long_mul(l,g),Long_mul(k,h)),16+d|0)),Long_shl(Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h)),d));return Long_add(d>16?Long_add(o,Long_shl(n,d-16|0)):Long_add(o,Long_shru(n,16-d|0)),Long_shru(m,32-d|0));}
function W6(){var b,c,d,e,f,g,h,i,j,k;A_O=$rt_createLongArray(660);A_P=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=A_O.data;g=d+330|0;f[g]=Ky(e,Long_fromInt(80));A_P.data[g]=c;e=Ky(e,Long_fromInt(10));h=ADZ(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Long_gt(e,new Long(3435973836, 214748364)))
{e=Long_shr(e,1);j=j+1|0;d=d+(-1)|0;}k=Long_mul(e,Long_fromInt(10));b=j<=0?k:Long_add(k,Long_shr(Long_mul(Long_and(b,Long_fromInt((1<<j)-1|0)),Long_fromInt(10)),j));f=A_O.data;g=(330-i|0)-1|0;f[g]=Ky(b,Long_fromInt(80));A_P.data[g]=d;i=i+1|0;}}
function GF(){E.call(this);}
function AHA(){var a=this;GF.call(a);a.mr=null;a.p5=0;}
function F$(a,b){var c=new AHA();ANY(c,a,b);return c;}
function ANY(a,b,c){var d;a.p5=c;a.mr=O(M3,c);d=0;while(d<c){a.mr.data[d]=A1r(b);d=d+1|0;}}
function Eg(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.p5){d=d+ACg(a.mr.data[f],b*e,c*e)/e;e=e/2.0;f=f+1|0;}return d;}
function Rm(a,b,c,d){var e,f,g;e=0.0;f=1.0;g=0;while(g<a.p5){e=e+Jy(a.mr.data[g],b*f,c*f,d*f)/f;f=f/2.0;g=g+1|0;}return e;}
function GQ(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o;if(b===null)b=$rt_createDoubleArray(Bh(Bh(f,g),h));else{l=0;while(true){m=b.data;if(l>=m.length)break;m[l]=0.0;l=l+1|0;}}n=1.0;o=0;while(o<a.p5){AK0(a.mr.data[o],b,c,d,e,f,g,h,i*n,j*n,k*n,n);n=n/2.0;o=o+1|0;}return b;}
function Yu(){var a=this;E.call(a);a.iD=null;a.i9=0;a.B1=Long_ZERO;}
function ANr(a,b,c){var d=new Yu();AS1(d,a,b,c);return d;}
function AS1(a,b,c,d){a.iD=b;a.i9=c;a.B1=d;}
function M3(){var a=this;GF.call(a);a.bO=null;a.s8=0.0;a.vI=0.0;a.uf=0.0;}
function A_R(){var a=new M3();AZ3(a);return a;}
function A1r(a){var b=new M3();Vj(b,a);return b;}
function AZ3(a){Vj(a,new Df);}
function Vj(a,b){var c,d,e,f,g;a.bO=$rt_createIntArray(512);a.s8=Cb(b)*256.0;a.vI=Cb(b)*256.0;a.uf=Cb(b)*256.0;c=0;while(c<256){d=a.bO.data;e=c+1|0;d[c]=c;c=e;}c=0;while(c<256){f=D(b,256-c|0)+c|0;g=a.bO.data[c];a.bO.data[c]=a.bO.data[f];a.bO.data[f]=g;a.bO.data[c+256|0]=a.bO.data[c];c=c+1|0;}}
function Jy(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;e=b+a.s8;f=c+a.vI;g=d+a.uf;h=e|0;i=f|0;j=g|0;if(e<h)h=h+(-1)|0;if(f<i)i=i+(-1)|0;if(g<j)j=j+(-1)|0;k=h&255;l=i&255;m=j&255;c=e-h;d=f-i;n=g-j;o=c*c*c*(c*(c*6.0-15.0)+10.0);p=d*d*d*(d*(d*6.0-15.0)+10.0);q=n*n*n*(n*(n*6.0-15.0)+10.0);r=a.bO.data[k]+l|0;s=a.bO.data[r]+m|0;t=a.bO.data[r+1|0]+m|0;u=a.bO.data[k+1|0]+l|0;v=a.bO.data[u]+m|0;w=a.bO.data[u+1|0]+m|0;e=C8(a,a.bO.data[s],c,d,n);k=a.bO.data[v];x=c-1.0;b=Dn(a,o,e,C8(a,k,x,d,n));k=a.bO.data[t];e
=d-1.0;b=Dn(a,p,b,Dn(a,o,C8(a,k,c,e,n),C8(a,a.bO.data[w],x,e,n)));k=a.bO.data[s+1|0];f=n-1.0;return Dn(a,q,b,Dn(a,p,Dn(a,o,C8(a,k,c,d,f),C8(a,a.bO.data[v+1|0],x,d,f)),Dn(a,o,C8(a,a.bO.data[t+1|0],c,e,f),C8(a,a.bO.data[w+1|0],x,e,f))));}
function Dn(a,b,c,d){return c+b*(d-c);}
function C8(a,b,c,d,e){var f,g;f=b&15;g=f>=8?d:c;if(f>=4)d=f!=12&&f!=14?e:c;if(f&1)g= -g;if(f&2)d= -d;return g+d;}
function ACg(a,b,c){return Jy(a,b,c,0.0);}
function AVe(a,b,c,d){return Jy(a,b,c,d);}
function AK0(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;m=0;n=1.0/l;o=(-1);p=0.0;q=0.0;r=0.0;s=0.0;t=0;while(t<f){u=(c+t|0)*i+a.s8;v=u|0;if(u<v)v=v+(-1)|0;w=v&255;u=u-v;x=u*u*u*(u*(u*6.0-15.0)+10.0);y=0;v=w+1|0;z=u-1.0;while(y<h){ba=(e+y|0)*k+a.uf;bb=ba|0;if(ba<bb)bb=bb+(-1)|0;bc=bb&255;bd=ba-bb;be=bd*bd*bd*(bd*(bd*6.0-15.0)+10.0);bf=0;ba=bd-1.0;while(bf<g){bg=(d+bf|0)*j+a.vI;bh=bg|0;if(bg<bh)bh=bh+(-1)|0;bi=bh&255;l=bg-bh;bj=l*l*l*(l*(l
*6.0-15.0)+10.0);if(bf&&bi==o)bi=o;else{bk=a.bO.data[w]+bi|0;bl=a.bO.data[bk]+bc|0;bm=a.bO.data[bk+1|0]+bc|0;bn=a.bO.data[v]+bi|0;bo=a.bO.data[bn]+bc|0;bp=a.bO.data[bn+1|0]+bc|0;p=Dn(a,x,C8(a,a.bO.data[bl],u,l,bd),C8(a,a.bO.data[bo],z,l,bd));bn=a.bO.data[bm];bq=l-1.0;q=Dn(a,x,C8(a,bn,u,bq,bd),C8(a,a.bO.data[bp],z,bq,bd));r=Dn(a,x,C8(a,a.bO.data[bl+1|0],u,l,ba),C8(a,a.bO.data[bo+1|0],z,l,ba));s=Dn(a,x,C8(a,a.bO.data[bm+1|0],u,bq,ba),C8(a,a.bO.data[bp+1|0],z,bq,ba));}br=b.data;bs=Dn(a,be,Dn(a,bj,p,q),Dn(a,bj,
r,s));bn=m+1|0;br[m]=br[m]+bs*n;bf=bf+1|0;m=bn;o=bi;}y=y+1|0;}t=t+1|0;}}
function QE(){E.call(this);this.fU=null;}
function HR(a){var b=new QE();AED(b,a);return b;}
function ADP(a){var b=new QE();ASs(b,a);return b;}
function AED(a,b){a.fU=$rt_createByteArray(b>>1);}
function ASs(a,b){a.fU=b;}
function G6(a,b,c,d){var e,f;e=b<<11|d<<7|c;f=e>>1;return !(e&1)?a.fU.data[f]&15:a.fU.data[f]>>4&15;}
function DR(a,b,c,d,e){var f,g;f=b<<11|d<<7|c;g=f>>1;if(!(f&1))a.fU.data[g]=(a.fU.data[g]&240|e&15)<<24>>24;else a.fU.data[g]=(a.fU.data[g]&15|(e&15)<<4)<<24>>24;}
function Ib(a){return a.fU===null?0:1;}
function RH(){Eu.call(this);}
var A_S=null;function Ky(b,c){return Long_udiv(b, c);}
function ADZ(b,c){return Long_urem(b, c);}
function AGT(){A_S=K($rt_longcls());}
function Qn(){E.call(this);this.zD=null;}
function AMF(a){Cx(a.zD,Jm(1));}
function AU5(a){AMF(a);}
function Qk(){E.call(this);this.z4=null;}
function AML(a){Cx(a.z4,Jm(0));}
function AQL(a){AML(a);}
function Ov(){E.call(this);this.yy=null;}
function TS(a){Cx(a.yy,Jm(1));}
function AYb(a){TS(a);}
function Oz(){E.call(this);this.yP=null;}
function AMx(a){Cx(a.yP,Jm(0));}
function AW5(a){AMx(a);}
function Ej(){Ef.call(this);}
var A_T=null;var A41=null;var A_U=null;var A_V=null;function AHU(){var b,c,d;b=new Ej;E6(b,B(686),0);A_T=b;b=new Ej;E6(b,B(687),1);A41=b;b=new Ej;E6(b,B(688),2);A_U=b;c=O(Ej,3);d=c.data;d[0]=A_T;d[1]=A41;d[2]=A_U;A_V=c;}
function Ow(){var a=this;E.call(a);a.Bh=null;a.AY=null;a.ww=null;a.tv=null;a.yo=0;a.zX=0;a.u0=null;}
function AHu(a){var b,c;b=a.Bh.result;if(b!==null&&b.key!==null&&b.value!==null){c=$rt_str(ARR(b.key));if(c!==null&&Lp(c,a.tv)&&!(!a.yo&&R8(c,47,BE(a.tv)+1|0)!=(-1))){if(!(QV(b.value)?1:0))EM(a.u0,ANr(c,0,Long_add(new Long(596067632, 383),Long_fromInt(ASu(b.value)))));else if(a.zX)EM(a.u0,ANr(c,1,Long_fromInt(-1)));}b.continue();return;}Cx(a.AY,CG(a.ww.data[0]));}
function AW$(a){AHu(a);}
function Ox(){var a=this;E.call(a);a.At=null;a.uv=null;}
function AF6(a){Cx(a.At,CG(a.uv.data[0]<=0?(-1):a.uv.data[0]));}
function ATa(a){AF6(a);}
function Ot(){var a=this;E.call(a);a.zI=null;a.s2=null;}
function X_(a){Cx(a.zI,a.s2.result===null?A_U:!(QV(a.s2.result)?1:0)?A_T:A41);}
function AV5(a){X_(a);}
function Ou(){E.call(this);this.AS=null;}
function XO(a){Cx(a.AS,A_U);}
function AUl(a){XO(a);}
function DW(){E.call(this);}
function Em(a,b,c,d){return;}
function Op(){DW.call(this);}
function F1(){var a=new Op();AWS(a);return a;}
function AWS(a){return;}
function AAe(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=D(c,3)+4|0;h=1;if(e>=1){i=e+g|0;if((i+1|0)<=128){j=(e+1|0)+g|0;k=j-2|0;l=e;a:while(true){if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;while(o<=(d+n
|0)&&h){p=f-n|0;while(p<=(f+n|0)&&h){if(l>=0&&l<128)break a;h=0;p=p+1|0;}o=o+1|0;}l=l+1|0;}$p=7;continue _;}}return 0;case 1:$z=Yc(b,d,m,f);if(C()){break _;}k=$z;J();if(!(k!=A4b.b&&k!=A4c.b)&&e<((128-g|0)-1|0)){k=A4c.b;$p=2;continue _;}return 0;case 2:AGo(b,d,m,f,k);if(C()){break _;}k=(e-3|0)+g|0;b:while(true){if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;while(r<=l){j=r-d|0;s=m;while(s<=h){t=s-f|0;if(GY(j)!=q)break b;if(GY(t)!=q)break b;if(D(c,2)
&&o)break b;s=s+1|0;}r=r+1|0;}k=k+1|0;}u=A5S.data;$p=5;continue _;case 3:$z=Yc(b,d,o,f);if(C()){break _;}m=$z;if(m&&m!=A4n.b){k=k+1|0;if(k>=g)return 1;o=e+k|0;continue _;}m=A4m.b;$p=4;case 4:AGo(b,d,o,f,m);if(C()){break _;}k=k+1|0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;case 5:$z=Yc(b,r,k,s);if(C()){break _;}t=$z;if(!u[t]){t=A4n.b;$p=6;continue _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f
+q|0;}j=r-d|0;s=m;}t=s-f|0;if(GY(j)!=q)break;if(GY(t)!=q)break;if(!D(c,2))continue;if(!o)continue;else break;}u=A5S.data;continue _;case 6:AGo(b,r,k,s,t);if(C()){break _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(GY(j)!=q)break;if(GY(t)!=q)break;if(!D(c,2))continue;if(!o)continue;else break;}u=A5S.data;$p=5;continue _;case 7:$z=Yc(b,o,l,p);if(C()){break _;}r=$z;if
(r){J();if(r!=A4n.b)h=0;}while(true){p=p+1|0;while(!(p<=(f+n|0)&&h)){o=o+1|0;while(!(o<=(d+n|0)&&h)){l=l+1|0;if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;}p=f-n|0;}if(l>=0&&l<128)break;h=0;}continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function Mf(){E.call(this);this.Fc=0;}
var A_W=null;var A_X=null;function AQy(a){var b=new Mf();AIQ(b,a);return b;}
function AIQ(a,b){a.Fc=b;}
function Jm(b){return !b?A_X:A_W;}
function AC4(){A_W=AQy(1);A_X=AQy(0);}
function PK(){var a=this;CI.call(a);a.xz=null;a.fg=null;a.vb=0;a.fs=0;}
function ZE(a){DB(a.bE);AKt(1);U(a.bE,C9(0,(a.bh/2|0)-100|0,(a.bv/4|0)+120|0,B(588)));}
function AIo(a){AKt(0);}
function AQS(a){a.vb=a.vb+1|0;}
function ACz(a,b){var c,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gE&&!b.co){b=a.fg;$p=1;continue _;}return;case 1:XX(b);if(C()){break _;}c=a.J;b=null;$p=2;case 2:Zu(c,b);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,$p);}
function YB(a,b,c){var d,e;if(c==200)a.fs=(a.fs-1|0)&3;if(!(c!=208&&c!=28))a.fs=(a.fs+1|0)&3;if(c==14&&BE(a.fg.fM.data[a.fs])>0)a.fg.fM.data[a.fs]=Gt(a.fg.fM.data[a.fs],0,BE(a.fg.fM.data[a.fs])-1|0);if(QZ(B(689),b)>=0&&BE(a.fg.fM.data[a.fs])<15){d=a.fg.fM.data;c=a.fs;e=new Ba;Y(e);d[c]=N(E$(H(e,a.fg.fM.data[a.fs]),b));}}
function Xa(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:W1(a);if(C()){break _;}Dz(a,a.bS,a.xz,a.bh/2|0,40,16777215);BW();Br(a.bh/2|0,a.bv/2|0,50.0);Co((-60.0),(-60.0),(-60.0));Bq(180.0,0.0,1.0,0.0);if(!((a.vb/6|0)%2|0))a.fg.pW=a.fs;e=a.fg;$p=2;case 2:$z=AG8(e);if(C()){break _;}f=$z;Bq((f*360|0)/16.0,0.0,1.0,0.0);e=A9J;g=a.fg;h=(-0.5);i=(-0.75);j
=(-0.5);k=0.0;$p=3;case 3:AAQ(e,g,h,i,j,k);if(C()){break _;}a.fg.pW=(-1);By();$p=4;case 4:AA4(a,b,c,d);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Hl(){Ef.call(this);this.xw=0;}
var A9O=null;var A9P=null;var A_Y=null;function AZ7(a,b,c){var d=new Hl();ACl(d,a,b,c);return d;}
function ACl(a,b,c,d){E6(a,b,c);a.xw=d;}
function AAW(){var b,c;A9O=AZ7(B(690),0,15);A9P=AZ7(B(691),1,0);b=O(Hl,2);c=b.data;c[0]=A9O;c[1]=A9P;A_Y=b;}
function KL(){var a=this;E.call(a);a.l5=null;a.mE=null;}
function AR3(a){return a.mE;}
function P3(a,b){var c;c=a.mE;a.mE=b;return c;}
function AQf(a){return a.l5;}
function Jx(){var a=this;KL.call(a);a.cO=null;a.cX=null;a.kz=0;a.ir=0;}
function K2(a){var b;b=J5(a);if(b==2){if(J5(a.cX)<0)a.cX=Mz(a.cX);return M5(a);}if(b!=(-2))return a;if(J5(a.cO)>0)a.cO=M5(a.cO);return Mz(a);}
function J5(a){return (a.cX===null?0:a.cX.kz)-(a.cO===null?0:a.cO.kz)|0;}
function Mz(a){var b;b=a.cO;a.cO=b.cX;b.cX=a;E1(a);E1(b);return b;}
function M5(a){var b;b=a.cX;a.cX=b.cO;b.cO=a;E1(a);E1(b);return b;}
function E1(a){var b,c;b=a.cX===null?0:a.cX.kz;c=a.cO===null?0:a.cO.kz;a.kz=DV(b,c)+1|0;a.ir=1;if(a.cO!==null)a.ir=a.ir+a.cO.ir|0;if(a.cX!==null)a.ir=a.ir+a.cX.ir|0;}
function AI1(a,b){return b?a.cX:a.cO;}
function AHG(){var a=this;Fo.call(a);a.ju=null;a.gl=0;}
function A1s(a){var b=new AHG();AWp(b,a);return b;}
function AWp(a,b){Jt(a,b);a.ju=$rt_createByteArray(8192);}
function AQT(a){KO(a);a.eN.kq();}
function AQx(a,b,c,d){var e,f,g;e=a.ju;if(e!==null&&d>=e.data.length){KO(a);a.eN.fO(b,c,d);return;}if(b===null){f=new El;Bl(f,B(692));M(f);}if(c>=0&&c<=(b.data.length-d|0)){if(d<0){g=new L2;f=new Ba;Y(f);Bl(g,N(Bb(H(f,B(693)),d)));M(g);}if(e===null){f=new BU;Q(f);M(f);}if(d>=(e.data.length-a.gl|0))KO(a);De(b,c,e,a.gl,d);a.gl=a.gl+d|0;return;}g=new L2;f=new Ba;Y(f);Bl(g,N(Bb(H(f,B(694)),c)));M(g);}
function AUV(a){var b,$$je;if(a.ju===null)return;a:{try{Jd(a);}catch($$e){$$je=Bf($$e);b=$$je;break a;}a.ju=null;return;}a.ju=null;M(b);}
function AP1(a,b){var c,d,e,f;c=a.ju;if(c===null){d=new BU;Q(d);M(d);}e=c.data;if(a.gl==e.length){a.eN.fO(c,0,a.gl);a.gl=0;}f=a.gl;a.gl=f+1|0;e[f]=b<<24>>24;}
function KO(a){if(a.gl>0){a.eN.fO(a.ju,0,a.gl);a.gl=0;}}
function SZ(){E.call(this);}
function A_Z(){var a=new SZ();AQv(a);return a;}
function AQv(a){return;}
function AD8(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p
=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D1(b,d,e,f,B(695),4.0,(1.0+(L(b.n)-L(b.n))*0.20000000298023224)*0.699999988079071);h=Fk();i=16;j=0;k=15.0;a:while(true){if(j>=i){l=g*2.0;m=I(d-l-1.0);n=I(d+l+1.0);o=I(e-l-1.0);p=I(e+l+1.0);q=Dy(m,o,I(f-l-1.0),n,p,I(f+l+1.0));$p=1;continue _;}n=0;while(n<i){o=0;while(o<i){if(!(j&&j!=15&&n&&n!=15&&o&&o!=15)){r=j/k*2.0-1.0;s=n/k*2.0-1.0;t
=o/k*2.0-1.0;u=DL(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+L(b.n)*0.6000000238418579);y=0.30000001192092896;z=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;if(x>0.0)break a;}o=o+1|0;}n=n+1|0;}j=j+1|0;}bc=I(l);bd=I(v);be=I(w);$p=9;continue _;case 1:$z=Zm(b,c,q);if(C()){break _;}q=$z;bf=BS(d,e,f);bg=0;while(true){if(bg>=CZ(q)){bh=Ck();Dq(bh,h);bi=CZ(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Bc(bh,bi);m=bk.d9;bl=bk.eo;bm=bk.d$;$p=4;continue _;}bn=
Bc(q,bg);bj=Ps(bn,d,e,f)/l;if(bj<=1.0)break;bg=bg+1|0;}bo=bn.c-d;bp=bn.j-e;bq=bn.d-f;br=B7(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.G;$p=2;case 2:$z=Zc(b,bf,bh);if(C()){break _;}x=$z;bs=x;bt=(1.0-bj)*bs;m=(bt*bt+bt)/2.0*8.0*l+1.0|0;$p=3;case 3:bn.eQ(c,m);if(C()){break _;}bn.f=bn.f+v*bt;bn.h=bn.h+w*bt;bn.g=bn.g+z*bt;while(true){bg=bg+1|0;if(bg>=CZ(q)){bh=Ck();Dq(bh,h);bi=CZ(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Bc(bh,bi);m=bk.d9;bl=bk.eo;bm=bk.d$;$p=4;continue _;}bn=Bc(q,bg);bj=Ps(bn,
d,e,f)/l;if(bj>1.0)continue;else break;}bo=bn.c-d;bp=bn.j-e;bq=bn.d-f;br=B7(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.G;$p=2;continue _;case 4:$z=Yc(b,m,bl,bm);if(C()){break _;}bu=$z;bv=0;y=m;bw=bl;x=bm;while(bv<1){bq=y+L(b.n);l=bw+L(b.n);v=x+L(b.n);w=bq-d;z=l-e;ba=v-f;bb=B7(w*w+z*z+ba*ba);w=w/bb;z=z/bb;ba=ba/bb;bb=0.5/(bb/r+0.1)*(L(b.n)*L(b.n)+0.30000001192092896);w=w*bb;z=z*bb;ba=ba*bb;BQ(b,B(217),(bq+s)/2.0,(l+u)/2.0,(v+bj)/2.0,w,z,ba);BQ(b,B(250),bq,l,v,w,z,ba);bv=bv+1|0;}if(bu>0){J();c=A3_.data[bu];$p
=5;continue _;}bi=bi+(-1)|0;if(bi<0)return;bk=Bc(bh,bi);m=bk.d9;bl=bk.eo;bm=bk.d$;continue _;case 5:$z=AAd(b,m,bl,bm);if(C()){break _;}bv=$z;g=0.30000001192092896;$p=6;case 6:c.DM(b,m,bl,bm,bv,g);if(C()){break _;}bv=0;$p=7;case 7:AJ9(b,m,bl,bm,bv);if(C()){break _;}c=A3_.data[bu];$p=8;case 8:c.q1(b,m,bl,bm);if(C()){break _;}bi=bi+(-1)|0;if(bi<0)return;bk=Bc(bh,bi);m=bk.d9;bl=bk.eo;bm=bk.d$;$p=4;continue _;case 9:$z=Yc(b,bc,bd,be);if(C()){break _;}bx=$z;if(bx>0){J();x=x-(A3_.data[bx].vU(c)+0.30000001192092896)
*y;}if(x>0.0)Tn(h,Cy(bc,bd,be));l=l+z;v=v+ba;w=w+bb;x=x-0.22500000894069672;while(x<=0.0){while(true){o=o+1|0;while(o>=i){n=n+1|0;while(n>=i){j=j+1|0;if(j>=i){l=g*2.0;m=I(d-l-1.0);n=I(d+l+1.0);o=I(e-l-1.0);p=I(e+l+1.0);q=Dy(m,o,I(f-l-1.0),n,p,I(f+l+1.0));$p=1;continue _;}n=0;}o=0;}if(!j)break;if(j==15)break;if(!n)break;if(n==15)break;if(!o)break;if(o!=15)continue;else break;}r=j/k*2.0-1.0;s=n/k*2.0-1.0;t=o/k*2.0-1.0;u=DL(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+L(b.n)*0.6000000238418579);y=0.30000001192092896;z
=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;}bc=I(l);bd=I(v);be=I(w);continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p);}
function L2(){BP.call(this);}
function A_0(){var a=new L2();AO7(a);return a;}
function AO7(a){Q(a);}
function ALF(){DW.call(this);}
function AQO(){var a=new ALF();ASC(a);return a;}
function ASC(a){return;}
function TR(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=D(c,2)+2|0;h=D(c,2)+2|0;i=0;j=(d-g|0)-1|0;k=(d+g|0)+1|0;l=e-1|0;m=e+3|0;n=m+1|0;o=(f-h|0)-1|0;p=(f+h|0)+1|0;q=j;a:while(true){r=S(q,
k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6b.b;$p=2;continue _;}t=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;while(true){t=S(s,n);if(t>0)break;v=o;w=S(v,p);if(w<=0)break a;s=s+1|0;}q=q+1|0;}$p=1;case 1:$z
=XG(b,q,s,v);if(C()){break _;}x=$z;if(s==l&&!x.c3())return 0;if(!t&&!x.c3())return 0;if(!(q!=j&&r&&v!=o&&w)&&s==e){$p=5;continue _;}v=v+1|0;while(true){w=S(v,p);if(w<=0)break;s=s+1|0;while(true){t=S(s,n);if(t<=0)break;q=q+1|0;r=S(q,k);if(r>0){if(i>=1&&i<=5){r=j;c:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6b.b;$p=2;continue _;}t=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break c;t
=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}continue _;case 2:AJ9(b,d,e,f,k);if(C()){break _;}$p=3;case 3:$z=AIe(b,d,e,f);if(C()){break _;}b=$z;b.iP=Zh(a,c);return 1;case 4:$z=Yc(b,o,e,j);if(C()){break _;}r=$z;if(!r){u=0;r=o-1|0;$p=6;continue _;}l=l+1|0;while(true){if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;continue _;}q=q+1|0;if(q>=2)break;l=0;}J();k=A6b.b;$p=2;continue _;case 5:$z=Yc(b,q,s,v);if(C()){break _;}u
=$z;if(!u){u=s+1|0;$p=7;continue _;}v=v+1|0;while(true){w=S(v,p);if(w<=0)break;s=s+1|0;while(true){t=S(s,n);if(t<=0)break;q=q+1|0;r=S(q,k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6b.b;$p=2;continue _;}t=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q
=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 6:$z=XG(b,r,e,j);if(C()){break _;}x=$z;if(x.c3())u=1;r=o+1|0;$p=10;continue _;case 7:$z=Yc(b,q,u,v);if(C()){break _;}u=$z;if(!u)i=i+1|0;v=v+1|0;while(true){w=S(v,p);if(w<=0)break;s=s+1|0;while(true){t=S(s,n);if(t<=0)break;q=q+1|0;r=S(q,k);if(r>0){if(i>=1&&i<=5){r=j;d:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6b.b;$p=2;continue _;}t
=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break d;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 8:$z=XG(b,r,t,v);if(C()){break _;}x=$z;if(x.c3()){if(!u&&D(c,4)){J();q=A4q.b;$p=14;continue _;}J();q=A4j.b;$p=12;continue _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q
<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6b.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){continue _;}q=t-1|0;$p=9;case 9:$z=XG(b,r,q,v);if(C()){break _;}x=$z;if(x.c3()){$p=8;continue _;}q=0;$p=11;continue _;case 10:$z=XG(b,r,e,j);if(C()){break _;}x=$z;if(x.c3())u=u+1|0;r=j-1|0;$p=13;continue _;case 11:AJ9(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r
=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6b.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 12:AJ9(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)
|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6b.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 13:$z=XG(b,o,e,r);if(C()){break _;}x=$z;if(x.c3())u=u+1|0;r=j+1|0;$p=16;continue _;case 14:AJ9(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|
0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6b.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 15:AJ9(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}J();k=A6b.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&
u&&v!=o&&s&&t!=n&&i){q=0;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 16:$z=XG(b,o,e,r);if(C()){break _;}x=$z;if(x.c3())u=u+1|0;if(u==1){J();r=A6d.b;$p=17;continue _;}l=l+1|0;while(true){if(l<3){o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;if(q>=2)break;l=0;}J();k=A6b.b;$p=2;continue _;case 17:AJ9(b,o,e,j,r);if(C()){break _;}$p=18;case 18:$z=AIe(b,o,e,j);if(C()){break _;}x=$z;y=x;n=0;while(n<8){z=ACF(a,c);if(z!==null)ACR(y,D(c,k),z);n=n+1|0;}while(true){q=q+1|0;if(q>=2)break;l
=0;if(l>=3)continue;else{o=(d+D(c,m)|0)-g|0;j=(f+D(c,p)|0)-h|0;$p=4;continue _;}}J();k=A6b.b;$p=2;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function ACF(a,b){var c,d;a:{c=D(b,10);if(!c){d=new B6;Bw();Dg(d,A70);break a;}if(c==1){d=new B6;Bw();Fz(d,A68,D(b,4)+1|0);break a;}if(c==2){d=new B6;Bw();Dg(d,A7x);break a;}if(c==3){d=new B6;Bw();Fz(d,A6V,D(b,4)+1|0);break a;}if(c==4){d=new B6;Bw();Fz(d,A5D,D(b,4)+1|0);break a;}if(c==5){d=new B6;Bw();Fz(d,A5E,D(b,4)+1|0);break a;}if(c==6){d=new B6;Bw();Dg(d,A7W);break a;}if(c==7&&!D(b,100)){d=new B6;Bw();Dg(d,A7U);break a;}d=null;}return d;}
function Zh(a,b){var c;c=D(b,4);return !c?B(656):c==1?B(659):c==2?B(659):c!=3?B(3):B(657);}
function B$(){var a=this;DW.call(a);a.xh=0;a.cE=0;}
function A_1(a,b){var c=new B$();Cc(c,a,b);return c;}
function Cc(a,b,c){a.xh=b;a.cE=c;}
function Xx(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=L(c)*3.1415927410125732;h=d+8|0;i=h+Bm(g)*a.cE/8.0;j=h
-Bm(g)*a.cE/8.0;h=f+8|0;k=h+Bx(g)*a.cE/8.0;l=h-Bx(g)*a.cE/8.0;m=(e+D(c,3)|0)+2|0;n=(e+D(c,3)|0)+2|0;o=0;j=j-i;n=n-m;p=l-k;while(o<=a.cE){q=o;r=i+j*q/a.cE;s=m+n*q/a.cE;t=k+p*q/a.cE;q=Cb(c)*a.cE/16.0;h=o*3.1415927410125732;u=(Bm(h/a.cE)+1.0)*q+1.0;v=(Bm(h/a.cE)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;while(w<=e){ba=f;while(ba<=x){bb=y;while(bb<=z){bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be<1.0){$p=1;continue _;}bb=bb+1|0;}ba=ba+1|0;}w=w+1|0;}o=o+1|0;}return 1;case 1:$z
=Yc(b,w,ba,bb);if(C()){break _;}bf=$z;J();if(bf==A4f.b){d=a.xh;$p=2;continue _;}a:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.cE)break a;q=o;r=i+j*q/a.cE;s=m+n*q/a.cE;t=k+p*q/a.cE;q=Cb(c)*a.cE/16.0;h=o*3.1415927410125732;u=(Bm(h/a.cE)+1.0)*q+1.0;v=(Bm(h/a.cE)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{continue _;}}return 1;case 2:AGo(b,
w,ba,bb,d);if(C()){break _;}b:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.cE)break b;q=o;r=i+j*q/a.cE;s=m+n*q/a.cE;t=k+p*q/a.cE;q=Cb(c)*a.cE/16.0;h=o*3.1415927410125732;u=(Bm(h/a.cE)+1.0)*q+1.0;v=(Bm(h/a.cE)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{$p=1;continue _;}}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p);}
function BL(){DW.call(this);this.sj=0;}
function A_2(a){var b=new BL();BM(b,a);return b;}
function BM(a,b){a.sj=b;}
function Ys(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;if(g>=64)return 1;h=(d+D(c,8)|0)-D(c,8)|0;i=(e+D(c,4)|0)-D(c,4)|0;j=(f+D(c,8)|0)-D(c,8)|0;$p=1;case 1:$z=Yc(b,h,i,j);if(C()){break _;}k=$z;if(!k){J();l=A3_.data[a.sj];$p=2;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+D(c,8)|0)-D(c,8)|0;i=(e+D(c,4)|0)-D(c,4)|0;j=(f+D(c,8)|0)-D(c,8)|0;continue _;case 2:$z
=l.De(b,h,i,j);if(C()){break _;}k=$z;if(k){k=a.sj;$p=3;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+D(c,8)|0)-D(c,8)|0;i=(e+D(c,4)|0)-D(c,4)|0;j=(f+D(c,8)|0)-D(c,8)|0;$p=1;continue _;case 3:AGo(b,h,i,j,k);if(C()){break _;}g=g+1|0;if(g>=64)return 1;h=(d+D(c,8)|0)-D(c,8)|0;i=(e+D(c,4)|0)-D(c,4)|0;j=(f+D(c,8)|0)-D(c,8)|0;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Cd(){DW.call(this);this.Bk=0;}
function A_3(a){var b=new Cd();Ci(b,a);return b;}
function Ci(a,b){a.Bk=b;}
function AGU(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e+1|0;$p=1;case 1:$z=Yc(b,d,g,f);if(C()){break _;}g=$z;J();if(g!=A4f.b)return 0;g=e-1|0;$p=2;case 2:$z=Yc(b,d,g,f);if(C()){break _;}h=$z;if(h!=A4f.b)return 0;$p=3;case 3:$z=Yc(b,d,e,f);if(C()){break _;}g=$z;if(g){$p=5;continue _;}g=0;h=d-1|0;$p=4;case 4:$z=Yc(b,h,e,f);if(C()){break _;}i
=$z;if(i==A4f.b)g=1;i=d+1|0;$p=6;continue _;case 5:$z=Yc(b,d,e,f);if(C()){break _;}g=$z;if(g!=A4f.b)return 0;g=0;h=d-1|0;$p=4;continue _;case 6:$z=Yc(b,i,e,f);if(C()){break _;}j=$z;if(j==A4f.b)g=g+1|0;k=f-1|0;$p=7;case 7:$z=Yc(b,d,e,k);if(C()){break _;}j=$z;if(j==A4f.b)g=g+1|0;j=f+1|0;$p=8;case 8:$z=Yc(b,d,e,j);if(C()){break _;}l=$z;if(l==A4f.b)g=g+1|0;l=0;$p=9;case 9:$z=Yc(b,h,e,f);if(C()){break _;}h=$z;if(!h)l=1;$p=10;case 10:$z=Yc(b,i,e,f);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=11;case 11:$z=Yc(b,d,e,k);if
(C()){break _;}h=$z;if(!h)l=l+1|0;$p=12;case 12:$z=Yc(b,d,e,j);if(C()){break _;}h=$z;if(!h)l=l+1|0;if(g==3&&l==1){g=a.Bk;$p=13;continue _;}return 1;case 13:AJ9(b,d,e,f,g);if(C()){break _;}return 1;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADx(){E.call(this);}
function A_4(){var a=new ADx();APL(a);return a;}
function APL(a){return;}
function PC(){CJ.call(this);}
function U8(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;a.h=a.h+0.002;b=a.f;c=a.h;d=a.g;$p=1;case 1:ALY(a,b,c,d);if(C()){break _;}a.f=a.f*0.8500000238418579;a.h=a.h*0.8500000238418579;a.g=a.g*0.8500000238418579;e=a.k;f=I(a.c);g=I(a.j);h=I(a.d);$p=2;case 2:$z=XG(e,f,g,h);if(C()){break _;}e=$z;if(e!==A48){$p=3;continue _;}f=a.b_;a.b_=f-1|0;if(f>0)return;$p=4;continue _;case 3:B3(a);if
(C()){break _;}f=a.b_;a.b_=f-1|0;if(f>0)return;$p=4;case 4:B3(a);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AAR(){CJ.call(this);this.zm=0.0;}
function AXJ(a,b,c,d,e){var f=new AAR();APa(f,a,b,c,d,e);return f;}
function APa(a,b,c,d,e,f){var g;ER(a,b,c,d,e,0.0,0.0,0.0);a.f=a.f*0.10000000149011612;a.h=a.h*0.10000000149011612;a.g=a.g*0.10000000149011612;g=BI()*0.30000001192092896;a.hw=g;a.ho=g;a.g_=g;a.cZ=a.cZ*0.75;a.cZ=a.cZ*f;a.zm=a.cZ;a.b_=8.0/(BI()*0.8+0.2)|0;a.b_=a.b_*f|0;a.nC=0;}
function AE$(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.cY+c)/a.b_*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.cZ=a.zm*i;$p=1;case 1:AIa(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AGM(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=2;continue _;}a.ev=7-((a.cY*8|0)/a.b_|0)|0;a.h=a.h+0.004;c=a.f;d=a.h;e=a.g;$p=1;case 1:ALY(a,c,d,e);if(C()){break _;}if(a.j===a.ct){a.f=a.f*1.1;a.g=a.g*1.1;}a.f=a.f*0.9599999785423279;a.h=a.h*0.9599999785423279;a.g=a.g*0.9599999785423279;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;case 2:B3(a);if
(C()){break _;}a.ev=7-((a.cY*8|0)/a.b_|0)|0;a.h=a.h+0.004;c=a.f;d=a.h;e=a.g;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,$p);}
function Ob(){CJ.call(this);}
function AMp(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AIa(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function AAk(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=2;continue _;}a.ev=7-((a.cY*8|0)/a.b_|0)|0;a.h=a.h+0.004;c=a.f;d=a.h;e=a.g;$p=1;case 1:ALY(a,c,d,e);if(C()){break _;}a.f=a.f*0.8999999761581421;a.h=a.h*0.8999999761581421;a.g=a.g*0.8999999761581421;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;case 2:B3(a);if(C()){break _;}a.ev=7-
((a.cY*8|0)/a.b_|0)|0;a.h=a.h+0.004;c=a.f;d=a.h;e=a.g;$p=1;continue _;default:Es();}}CM().s(a,b,c,d,e,$p);}
function MG(){CJ.call(this);this.Au=0.0;}
function AK_(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.cY+c)/a.b_;a.cZ=a.Au*(1.0-i*i*0.5);$p=1;case 1:AIa(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AMK(a,b){var c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=(a.cY+b)/a.b_;if(c<0.0)c=0.0;if(c>1.0)c=1.0;$p=1;case 1:$z=Zi(a,b);if(C()){break _;}d=$z;return d*c+1.0-c;default:Es();}}CM().s(a,b,c,d,$p);}
function WC(a){var b,c,d,e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=2;continue _;}c=a.f;d=a.h;e=a.g;$p=1;case 1:ALY(a,c,d,e);if(C()){break _;}a.f=a.f*0.9599999785423279;a.h=a.h*0.9599999785423279;a.g=a.g*0.9599999785423279;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;case 2:B3(a);if(C()){break _;}c=a.f;d=a.h;e=a.g;$p=1;continue _;default:Es();}}CM().s(a,
b,c,d,e,$p);}
function WM(){CJ.call(this);this.wm=0.0;}
function A2a(a,b,c,d){var e=new WM();ATc(e,a,b,c,d);return e;}
function ATc(a,b,c,d,e){ER(a,b,c,d,e,0.0,0.0,0.0);a.f=a.f*0.800000011920929;a.h=a.h*0.800000011920929;a.g=a.g*0.800000011920929;a.h=L(a.l)*0.4000000059604645+0.05000000074505806;a.hw=1.0;a.ho=1.0;a.g_=1.0;a.cZ=a.cZ*(L(a.l)*2.0+0.20000000298023224);a.wm=a.cZ;a.b_=16.0/(BI()*0.8+0.2)|0;a.nC=0;a.ev=49;}
function AE_(a,b){return 1.0;}
function ACb(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.cY+c)/a.b_;a.cZ=a.wm*(1.0-i*i);$p=1;case 1:AIa(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,$p);}
function AGe(a){var b,c,d,e,f,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bH=a.c;a.ct=a.j;a.bG=a.d;b=a.cY;a.cY=b+1|0;if(b>=a.b_){$p=1;continue _;}c=a.cY/a.b_;if(L(a.l)>c)BQ(a.k,B(250),a.c,a.j,a.d,a.f,a.h,a.g);a.h=a.h-0.03;d=a.f;e=a.h;f=a.g;$p=2;continue _;case 1:B3(a);if(C()){break _;}c=a.cY/a.b_;if(L(a.l)>c)BQ(a.k,B(250),a.c,a.j,a.d,a.f,a.h,a.g);a.h=a.h-0.03;d=a.f;e=a.h;f=a.g;$p=2;case 2:ALY(a,d,e,f);if(C()){break _;}a.f
=a.f*0.9990000128746033;a.h=a.h*0.9990000128746033;a.g=a.g*0.9990000128746033;if(a.ca){a.f=a.f*0.699999988079071;a.g=a.g*0.699999988079071;}return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function ALV(){Ie.call(this);}
function A14(a,b,c,d,e,f,g){var h=new ALV();AO3(h,a,b,c,d,e,f,g);return h;}
function AO3(a,b,c,d,e,f,g,h){Qw(a,b,c,d,e);a.lS=0.03999999910593033;a.ev=a.ev+1|0;if(g===0.0&&!(f===0.0&&h===0.0)){a.f=f;a.h=g+0.1;a.g=h;}}
function GU(){var a=this;E.call(a);a.cW=null;a.bo=0;a.bk=0;a.bn=0;a.fe=0;a.bu=null;a.es=null;}
function A_5(a,b,c,d,e){var f=new GU();UQ(f,a,b,c,d,e);return f;}
function UQ(a,b,c,d,e,f){var $p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.es=b;a.bu=Ck();a.cW=c;a.bo=d;a.bk=e;a.bn=f;$p=1;case 1:$z=AAd(c,d,e,f);if(C()){break _;}d=$z;a.fe=d;Jl(a);return;default:Es();}}CM().s(a,b,c,d,e,f,$p);}
function Jl(a){a:{DB(a.bu);if(!a.fe){U(a.bu,Cy(a.bo,a.bk,a.bn-1|0));U(a.bu,Cy(a.bo,a.bk,a.bn+1|0));break a;}if(a.fe==1){U(a.bu,Cy(a.bo-1|0,a.bk,a.bn));U(a.bu,Cy(a.bo+1|0,a.bk,a.bn));break a;}if(a.fe==2){U(a.bu,Cy(a.bo-1|0,a.bk,a.bn));U(a.bu,Cy(a.bo+1|0,a.bk+1|0,a.bn));break a;}if(a.fe==3){U(a.bu,Cy(a.bo-1|0,a.bk+1|0,a.bn));U(a.bu,Cy(a.bo+1|0,a.bk,a.bn));break a;}if(a.fe==4){U(a.bu,Cy(a.bo,a.bk+1|0,a.bn-1|0));U(a.bu,Cy(a.bo,a.bk,a.bn+1|0));break a;}if(a.fe==5){U(a.bu,Cy(a.bo,a.bk,a.bn-1|0));U(a.bu,Cy(a.bo,a.bk
+1|0,a.bn+1|0));break a;}if(a.fe==6){U(a.bu,Cy(a.bo+1|0,a.bk,a.bn));U(a.bu,Cy(a.bo,a.bk,a.bn+1|0));break a;}if(a.fe==7){U(a.bu,Cy(a.bo-1|0,a.bk,a.bn));U(a.bu,Cy(a.bo,a.bk,a.bn+1|0));break a;}if(a.fe==8){U(a.bu,Cy(a.bo-1|0,a.bk,a.bn));U(a.bu,Cy(a.bo,a.bk,a.bn-1|0));break a;}if(a.fe!=9)break a;U(a.bu,Cy(a.bo+1|0,a.bk,a.bn));U(a.bu,Cy(a.bo,a.bk,a.bn-1|0));}}
function AA6(a){var b,c,d,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=a.bu.p)return;c=Bc(a.bu,b);$p=1;case 1:$z=ALs(a,c);if(C()){break _;}c=$z;if(c!==null&&PP(c,a)){Ol(a.bu,b,Cy(c.bo,c.bk,c.bn));d=b;}else{c=a.bu;d=b+(-1)|0;Eo(c,b);}b=d+1|0;if(b>=a.bu.p)return;c=Bc(a.bu,b);continue _;default:Es();}}CM().s(a,b,c,d,$p);}
function ALs(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.cW;d=b.d9;e=b.eo;f=b.d$;$p=1;case 1:$z=Yc(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.es.b){c=a.cW;d=b.d9;e=b.eo+1|0;f=b.d$;$p=2;continue _;}c=new GU;g=a.es;h=a.cW;d=b.d9;e=b.eo;f=b.d$;$p=3;continue _;case 2:$z=Yc(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.es.b){c=a.cW;d=b.d9;e=b.eo-1|0;f=b.d$;$p=4;continue _;}c=new GU;g=a.es;h=a.cW;d
=b.d9;e=b.eo+1|0;f=b.d$;$p=5;continue _;case 3:UQ(c,g,h,d,e,f);if(C()){break _;}return c;case 4:$z=Yc(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.es.b){c=null;return c;}c=new GU;g=a.es;h=a.cW;e=b.d9;d=b.eo-1|0;f=b.d$;$p=6;continue _;case 5:UQ(c,g,h,d,e,f);if(C()){break _;}return c;case 6:UQ(c,g,h,e,d,f);if(C()){break _;}return c;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function PP(a,b){var c,d;c=0;while(c<a.bu.p){d=Bc(a.bu,c);if(d.d9==b.bo&&d.d$==b.bn)return 1;c=c+1|0;}return 0;}
function Jb(a,b,c,d){var e,f;e=0;while(e<a.bu.p){f=Bc(a.bu,e);if(f.d9==b&&f.d$==d)return 1;e=e+1|0;}return 0;}
function MK(a,b){var c;if(PP(a,b))return 1;if(a.bu.p==2)return 0;if(!a.bu.p)return 1;c=Bc(a.bu,0);return b.bk==a.bk&&c.eo==a.bk?1:1;}
function AL5(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:U(a.bu,Cy(b.bo,b.bk,b.bn));c=Jb(a,a.bo,a.bk,a.bn-1|0);d=Jb(a,a.bo,a.bk,a.bn+1|0);e=Jb(a,a.bo-1|0,a.bk,a.bn);f=Jb(a,a.bo+1|0,a.bk,a.bn);g=(-1);if(!(!c&&!d))g=0;if(!(!e&&!f))g=1;if(d&&f&&!c&&!e)g=6;if(d&&e&&!c&&!f)g=7;if(c&&e&&!d&&!f)g=8;if(c&&f&&!d&&!e)g=9;if(!g){b=a.cW;c=a.bo;d=a.bk+1|0;e=a.bn-1|0;$p=1;continue _;}if(g==1){b=a.cW;c=a.bo+1|0;d
=a.bk+1|0;e=a.bn;$p=2;continue _;}if(g<0)g=0;b=a.cW;c=a.bo;d=a.bk;e=a.bn;$p=5;continue _;case 1:$z=Yc(b,c,d,e);if(C()){break _;}c=$z;if(c==a.es.b)g=4;b=a.cW;c=a.bo;d=a.bk+1|0;e=a.bn+1|0;$p=3;continue _;case 2:$z=Yc(b,c,d,e);if(C()){break _;}c=$z;if(c==a.es.b)g=2;b=a.cW;c=a.bo-1|0;d=a.bk+1|0;e=a.bn;$p=4;continue _;case 3:$z=Yc(b,c,d,e);if(C()){break _;}c=$z;if(c==a.es.b)g=5;if(g==1){b=a.cW;c=a.bo+1|0;d=a.bk+1|0;e=a.bn;$p=2;continue _;}if(g<0)g=0;b=a.cW;c=a.bo;d=a.bk;e=a.bn;$p=5;continue _;case 4:$z=Yc(b,c,d,
e);if(C()){break _;}c=$z;if(c==a.es.b)g=3;if(g<0)g=0;b=a.cW;c=a.bo;d=a.bk;e=a.bn;$p=5;case 5:AFw(b,c,d,e,g);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,$p);}
function AD5(a,b,c,d){var e,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Cy(b,c,d);$p=1;case 1:$z=ALs(a,e);if(C()){break _;}e=$z;if(e===null)return 0;$p=2;case 2:AA6(e);if(C()){break _;}return MK(e,a);default:Es();}}CM().s(a,b,c,d,e,$p);}
function UP(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bo;c=a.bk;d=a.bn-1|0;$p=1;case 1:$z=AD5(a,b,c,d);if(C()){break _;}d=$z;b=a.bo;c=a.bk;e=a.bn+1|0;$p=2;case 2:$z=AD5(a,b,c,e);if(C()){break _;}b=$z;c=a.bo-1|0;e=a.bk;f=a.bn;$p=3;case 3:$z=AD5(a,c,e,f);if(C()){break _;}c=$z;e=a.bo+1|0;f=a.bk;g=a.bn;$p=4;case 4:$z=AD5(a,e,f,g);if(C()){break _;}e=$z;f=(-1);if(!(!d&&!b))f=0;if(!(!c&&
!e))f=1;if(b&&e&&!d&&!c)f=6;if(b&&c&&!d&&!e)f=7;if(d&&c&&!b&&!e)f=8;if(d&&e&&!b&&!c)f=9;if(!f){h=a.cW;d=a.bo;b=a.bk+1|0;c=a.bn-1|0;$p=5;continue _;}if(f==1){h=a.cW;d=a.bo+1|0;b=a.bk+1|0;c=a.bn;$p=6;continue _;}if(f<0)f=0;a.fe=f;Jl(a);h=a.cW;d=a.bo;b=a.bk;c=a.bn;$p=9;continue _;case 5:$z=Yc(h,d,b,c);if(C()){break _;}d=$z;if(d==a.es.b)f=4;h=a.cW;d=a.bo;b=a.bk+1|0;c=a.bn+1|0;$p=7;continue _;case 6:$z=Yc(h,d,b,c);if(C()){break _;}d=$z;if(d==a.es.b)f=2;h=a.cW;d=a.bo-1|0;b=a.bk+1|0;c=a.bn;$p=8;continue _;case 7:$z
=Yc(h,d,b,c);if(C()){break _;}b=$z;if(b==a.es.b)f=5;if(f==1){h=a.cW;d=a.bo+1|0;b=a.bk+1|0;c=a.bn;$p=6;continue _;}if(f<0)f=0;a.fe=f;Jl(a);h=a.cW;d=a.bo;b=a.bk;c=a.bn;$p=9;continue _;case 8:$z=Yc(h,d,b,c);if(C()){break _;}d=$z;if(d==a.es.b)f=3;if(f<0)f=0;a.fe=f;Jl(a);h=a.cW;d=a.bo;b=a.bk;c=a.bn;$p=9;case 9:AFw(h,d,b,c,f);if(C()){break _;}g=0;if(g>=a.bu.p)return;h=Bc(a.bu,g);$p=10;case 10:$z=ALs(a,h);if(C()){break _;}h=$z;if(h!==null){$p=11;continue _;}g=g+1|0;if(g>=a.bu.p)return;h=Bc(a.bu,g);continue _;case 11:AA6(h);if
(C()){break _;}if(MK(h,a)){$p=12;continue _;}g=g+1|0;if(g>=a.bu.p)return;h=Bc(a.bu,g);$p=10;continue _;case 12:AL5(h,a);if(C()){break _;}g=g+1|0;if(g>=a.bu.p)return;h=Bc(a.bu,g);$p=10;continue _;default:Es();}}CM().s(a,b,c,d,e,f,g,h,$p);}
function RA(){var a=this;E.call(a);a.nK=null;a.Ce=0;a.k5=0;}
function AKz(a){a.k5=a.k5+1|0;}
function AH6(a){return a.k5<a.nK.data.length?0:1;}
function Pw(a,b){return BS(a.nK.data[a.k5].hm+(b.cC+1.0|0)*0.5,a.nK.data[a.k5].g8,a.nK.data[a.k5].hu+(b.cC+1.0|0)*0.5);}
function XT(){var a=this;E.call(a);a.vE=null;a.i$=null;a.pp=null;a.k3=null;}
function ATX(a){var b=new XT();AWs(b,a);return b;}
function AWs(a,b){a.i$=A1M();a.pp=CY();a.k3=O(GJ,32);a.vE=b;}
function AJ3(a,b,c,d){return ML(a,b,c.c,c.G.H,c.d,d);}
function ABy(a,b,c,d,e,f){return ML(a,b,c+0.5,d+0.5,e+0.5,f);}
function ML(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;QY(a.i$);Rq(a.pp);g=Hy(a,I(b.G.N),I(b.G.H),I(b.G.O));h=Hy(a,I(c-b.cC/2.0),I(d),I(e-b.cC/2.0));i=ASn(Jo(b.cC+1.0),Jo(b.ef+1.0),Jo(b.cC+1.0));g.lo=0.0;g.nQ=Eh(g,h);g.h6=g.nQ;QY(a.i$);SX(a.i$,g);j=g;a:{while(true){if(XS(a.i$)){if(j!==g){k=Q9(a,g,j);break a;}k=null;break a;}l=ALU(a.i$);if(l.lK==h.lK)break;if(Eh(l,h)<Eh(j,h))j=l;l.mf=1;m=AEP(a,b,l,i,h,f);n=0;while(n<m){k=a.k3.data[n];o=l.lo+Eh(l,k);if(!(M1(k)&&o>=k.lo)){k.nA=l;k.lo=o;k.nQ=Eh(k,h);if(M1(k))W9(a.i$,k,
k.lo+k.nQ);else{k.h6=k.lo+k.nQ;SX(a.i$,k);}}n=n+1|0;}}k=Q9(a,g,h);}return k;}
function AEP(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=0;if(Ix(a,b,c.hm,c.g8+1|0,c.hu,d)>0)g=1;h=I3(a,b,c.hm,c.g8,c.hu+1|0,d,g);i=I3(a,b,c.hm-1|0,c.g8,c.hu,d,g);j=I3(a,b,c.hm+1|0,c.g8,c.hu,d,g);k=I3(a,b,c.hm,c.g8,c.hu-1|0,d,g);if(h===null)l=0;else if(h.mf)l=0;else if(Eh(h,e)>=f)l=0;else{m=a.k3.data;l=1;m[0]=h;}if(i===null)n=l;else if(i.mf)n=l;else if(Eh(i,e)>=f)n=l;else{m=a.k3.data;n=l+1|0;m[l]=i;}if(j===null)o=n;else if(j.mf)o=n;else if(Eh(j,e)>=f)o=n;else{m=a.k3.data;o=n+1|0;m[n]=j;}if(k===null)n=o;else if(k.mf)n
=o;else if(Eh(k,e)>=f)n=o;else{m=a.k3.data;n=o+1|0;m[o]=k;}return n;}
function I3(a,b,c,d,e,f,g){var h,i,j,k;h=null;if(Ix(a,b,c,d,e,f)>0)h=Hy(a,c,d,e);if(h===null){g=d+g|0;if(Ix(a,b,c,g,e,f)>0)h=Hy(a,c,g,e);}if(h!==null){i=0;a:{while(true){if(d<=0)break a;j=Ix(a,b,c,d-1|0,e,f);if(j<=0)break a;if(j<0)return null;i=i+1|0;if(i>=4)break;d=d+(-1)|0;}return null;}if(d>0)h=Hy(a,c,d,e);k=LS(a.vE,c,d-1|0,e);if(!(k!==A48&&k!==A49))return null;}return h;}
function Hy(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=Cz(a.pp,CG(e));if(f===null){f=ASn(b,c,d);BK(a.pp,CG(e),f);}return f;}
function Ix(a,b,c,d,e,f){var g,h,i,j;g=c;a:{while(g<(c+f.hm|0)){h=d;while(h<(d+f.g8|0)){i=e;while(i<(e+f.hu|0)){j=LS(a.vE,c,d,e);if(j.sl())return 0;if(j===A48)break a;if(j===A49)break a;i=i+1|0;}h=h+1|0;}g=g+1|0;}return 1;}return (-1);}
function Q9(a,b,c){var d,e,f,g;d=1;e=c;while(e.nA!==null){d=d+1|0;e=e.nA;}f=O(GJ,d);g=f.data;d=d+(-1)|0;g[d]=c;while(c.nA!==null){c=c.nA;d=d+(-1)|0;g[d]=c;}b=new RA;b.nK=f;b.Ce=g.length;return b;}
function Rk(){var a=this;CJ.call(a);a.ll=null;a.g3=null;a.oz=0;a.px=0;a.x4=0.0;}
function AG$(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Ex()){var $T=CM();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.oz+c)/a.px;d=i*i;j=a.ll.c;k=a.ll.j;l=a.ll.d;m=a.g3.b6;n=a.g3.c-a.g3.b6;o=c;n=m+n*o;m=a.g3.bP+(a.g3.j-a.g3.bP)*o+a.x4;o=a.g3.b7+(a.g3.d-a.g3.b7)*o;n=n-j;p=d;q=j+n
*p;r=k+(m-k)*p;p=l+(o-l)*p;s=I(q);t=I(r+a.cF/2.0);u=I(p);b=a.k;$p=1;case 1:$z=AH1(b,s,t,u);if(C()){break _;}v=$z;o=q-A94;n=r-A95;m=p-A96;BN(v,v,v,1.0);b=A5G;w=a.ll;o=o;n=n;m=m;d=a.ll.q;$p=2;case 2:AK8(b,w,o,n,m,d,c);if(C()){break _;}return;default:Es();}}CM().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function Wv(a){a.oz=a.oz+1|0;if(a.oz==a.px)B3(a);}
function AOb(a){return 2;}
function U3(){var a=this;E.call(a);a.dw=null;a.el=0;}
function A1M(){var a=new U3();AR8(a);return a;}
function AR8(a){a.dw=O(GJ,1024);a.el=0;}
function SX(a,b){var c,d;if(b.fT>=0){b=new DK;Bl(b,B(696));M(b);}if(a.el==a.dw.data.length){c=O(GJ,a.el<<1);De(a.dw,0,c,0,a.el);a.dw=c;}a.dw.data[a.el]=b;b.fT=a.el;d=a.el;a.el=d+1|0;Ri(a,d);return b;}
function QY(a){a.el=0;}
function ALU(a){var b,c,d,e;b=a.dw.data[0];c=a.dw.data;d=a.dw.data;e=a.el-1|0;a.el=e;c[0]=d[e];a.dw.data[a.el]=null;if(a.el>0)Mu(a,0);b.fT=(-1);return b;}
function W9(a,b,c){var d;d=b.h6;b.h6=c;if(c>=d)Mu(a,b.fT);else Ri(a,b.fT);}
function Ri(a,b){var c,d,e,f;c=a.dw.data[b];d=c.h6;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.dw.data[e];if(d>=f.h6)break;a.dw.data[b]=f;f.fT=b;b=e;}}a.dw.data[b]=c;c.fT=b;}
function Mu(a,b){var c,d,e,f,g,h,i,j;c=a.dw.data[b];d=c.h6;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.el)break;g=a.dw.data[e];h=g.h6;if(f>=a.el){i=null;j=Infinity;}else{i=a.dw.data[f];j=i.h6;}if(h<j){if(h>=d)break a;a.dw.data[b]=g;g.fT=b;}else{if(j>=d)break a;a.dw.data[b]=i;i.fT=b;e=f;}b=e;}}a.dw.data[b]=c;c.fT=b;}
function XS(a){return a.el?0:1;}
function GJ(){var a=this;E.call(a);a.hm=0;a.g8=0;a.hu=0;a.lK=0;a.fT=0;a.lo=0.0;a.nQ=0.0;a.h6=0.0;a.nA=null;a.mf=0;}
function ASn(a,b,c){var d=new GJ();AX9(d,a,b,c);return d;}
function AX9(a,b,c,d){a.fT=(-1);a.mf=0;a.hm=b;a.g8=c;a.hu=d;a.lK=b|c<<10|d<<20;}
function Eh(a,b){var c,d,e;c=b.hm-a.hm|0;d=b.g8-a.g8|0;e=b.hu-a.hu|0;return DG(c*c+d*d+e*e);}
function AUK(a,b){return b.lK!=a.lK?0:1;}
function AOJ(a){return a.lK;}
function M1(a){return a.fT<0?0:1;}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",3,"nio",5,"charset",3,"io",3,"lang",-1,"net",9,"minecraft",10,"src"]);
$rt_metadata([E,"Object",8,0,[],0,3,0,["eK",function(){return AVn(this);},"dQ",function(b){return Od(this,b);},"q8",function(){return AN7(this);}],H3,0,E,[],0,3,0,0,KT,0,E,[],3,3,0,0,E5,0,E,[KT],0,3,0,0,AE9,0,E,[],4,0,0,0,QC,0,E,[],4,3,0,0,Dc,0,E,[],3,3,0,0,Dm,0,E,[],3,3,0,0,Jk,0,E,[],3,3,0,0,Cp,"String",8,E,[Dc,Dm,Jk],0,3,0,["q8",function(){return AN3(this);},"dQ",function(b){return DU(this,b);},"eK",function(){return AXQ(this);},"kI",function(b){return AO$(this,b);}],DD,0,E,[],0,3,0,["mo",function(){return ASc(this);
}],EA,0,DD,[],0,3,0,0,HC,0,EA,[],0,3,0,0,AG7,0,HC,[],0,3,0,0,GD,0,E,[Dc,Jk],0,0,0,0,Hd,0,E,[],3,3,0,0,Ba,0,GD,[Hd],0,3,0,["oH",function(b){AQl(this,b);}],Eu,0,E,[Dc],1,3,0,0,G$,0,Eu,[Dm],0,3,0,["eK",function(){return AUe(this);},"dQ",function(b){return AZS(this,b);},"kI",function(b){return AWT(this,b);}],Ht,0,HC,[],0,3,0,0,AJt,0,Ht,[],0,3,0,0,AGA,0,Ht,[],0,3,0,0,BB,0,DD,[],0,3,0,0,B5,"RuntimeException",8,BB,[],0,3,0,0,CV,0,E,[],3,3,0,0,Gd,0,E,[CV],3,3,0,0,QR,0,E,[Gd],3,3,0,0,NK,0,E,[Gd],3,3,0,0,Rt,0,E,[Gd],
3,3,0,0,Os,0,E,[Gd],3,3,0,0,Su,0,E,[Gd,QR,NK,Rt,Os],3,3,0,0,M2,0,E,[],3,3,0,0,JC,0,E,[CV],3,3,0,0,UJ,0,E,[CV,Su,M2,JC],1,3,0,["Sd",function(b,c){return AQC(this,b,c);},"T9",function(b,c){return AQJ(this,b,c);},"MY",function(b){return ANC(this,b);},"Js",function(b,c,d){return ARm(this,b,c,d);},"HN",function(b){return AS8(this,b);},"Ps",function(){return AOh(this);},"N2",function(b,c,d){return AM9(this,b,c,d);}],Bo,0,E,[],0,3,Z,0,PR,0,E,[],3,3,0,0,H6,0,E,[PR],3,3,0,0,LK,0,E,[],3,3,0,0,Gu,0,E,[Hd,H6,LK],1,3,0,
0,W2,0,Gu,[],0,3,0,0,JK,0,Gu,[],0,3,0,0,AAF,0,E,[],4,3,0,0,ABg,0,E,[CV],1,3,0,0,Kc,0,E,[],3,3,0,0,G8,0,E,[Kc],0,3,0,0,VB,0,E,[],0,3,0,0,Kv,0,E,[],0,3,A1a,0,Fx,0,E,[Kc],0,3,0,["js",function(){ALI(this);}],Do,0,E,[CV],3,3,0,0,Tb,0,E,[Do],0,0,0,["f8",function(b){return AZv(this,b);}]]);
$rt_metadata([Th,0,E,[Do],0,0,0,["f8",function(b){return AQh(this,b);}],Ti,0,E,[Do],0,0,0,["f8",function(b){return AUz(this,b);}],Tf,0,E,[Do],0,0,0,["f8",function(b){return AMZ(this,b);}],Tg,0,E,[Do],0,0,0,["f8",function(b){return AUH(this,b);}],Td,0,E,[Do],0,0,0,["f8",function(b){return ATC(this,b);}],Te,0,E,[Do],0,0,0,["f8",function(b){return AWx(this,b);}],Tc,0,E,[Do],0,0,0,["f8",function(b){return AN2(this,b);}],NQ,0,E,[Do],0,0,0,["f8",function(b){return AW0(this,b);}],NP,0,E,[Do],0,0,0,["f8",function(b)
{return AQ3(this,b);}],LG,0,E,[],0,3,0,0,WG,0,E,[CV],1,3,0,0,Rc,0,E,[],0,3,0,0,BU,"IOException",7,BB,[],0,3,0,0,MT,0,GD,[Hd],0,3,0,["oH",function(b){AU6(this,b);}],EP,0,E,[],3,3,0,0,Sf,0,E,[EP],0,3,0,0,Hm,0,E,[Dm],0,3,0,["dQ",function(b){return AZz(this,b);},"eK",function(){return AZo(this);},"kI",function(b){return AUi(this,b);}],Hz,0,E,[],0,3,0,0,Q_,0,Hz,[],0,3,0,0,PD,0,E,[],0,3,0,0,RV,0,E,[],3,3,0,0,Pa,0,E,[RV],0,3,0,0,ABe,0,E,[],0,3,0,0,DO,0,E,[],1,3,0,0,KH,0,DO,[],0,3,0,["gW",function(b,c,d,e,f,g){AY9(this,
b,c,d,e,f,g);},"mZ",function(b,c,d,e,f,g){ADU(this,b,c,d,e,f,g);}],DZ,0,E,[],0,3,0,0,WE,0,DZ,[],0,3,0,["nH",function(){AQY(this);}],AFC,0,DZ,[],0,3,0,["nH",function(){AQ9(this);}],Kh,0,E,[],4,3,0,0,Lu,0,E,[],0,3,0,0,Sb,0,Fx,[],0,0,0,["js",function(){AE3(this);}],Pu,0,E,[],3,3,0,0,G4,0,E,[Pu],3,3,0,0,Fw,0,E,[G4],1,3,0,["pT",function(b){return Of(this,b);}],Iw,0,E,[G4],3,3,0,0,Fq,0,Fw,[Iw],1,3,0,["jW",function(){return Nl(this);}],KD,0,Fq,[],1,3,0,0,Mm,0,E,[G4],3,3,0,0,To,0,E,[Mm],3,3,0,0,Z_,0,KD,[To],0,3,0,0,AIP,
0,E,[CV],1,3,0,0,Fj,0,E,[CV],1,3,0,0,Xn,0,Fj,[],1,3,0,0,AFG,0,Fj,[],1,3,0,0,HM,0,E,[G4],3,3,0,0,Ev,0,Fw,[HM],1,3,0,["dQ",function(b){return AV8(this,b);},"eK",function(){return AM_(this);}],E3,0,E,[],3,3,0,0,AKR,0,Ev,[E3,Dc],0,3,0,["q6",function(b){return Tn(this,b);},"pT",function(b){return SG(this,b);},"jW",function(){return Mi(this);},"kN",function(){return Hq(this);}],J8,0,E,[],3,3,0,0,E_,0,E,[J8],1,3,0,0]);
$rt_metadata([XU,0,E_,[E3,Dc],0,3,0,0,AFf,0,Fj,[],1,3,0,0,UU,0,E,[],0,3,0,0,AAu,0,E,[],0,3,0,0,Ef,"Enum",8,E,[Dm,Dc],1,3,0,["dQ",function(b){return ANv(this,b);},"eK",function(){return AQz(this);},"kI",function(b){return AQc(this,b);}],Eq,0,Ef,[],12,3,0,0,NL,0,E,[],3,3,0,0,Rp,0,E,[NL],0,0,0,["CA",function(b){Cx(this,b);},"EK",function(b){ATs(this,b);}],AK9,0,E,[CV],1,3,0,0,Tu,0,E,[CV],3,3,0,0,Ta,0,E,[Tu],0,0,0,["UI",function(){return ATp(this);}],GP,0,E,[H6],1,3,0,0,AKM,0,GP,[],0,3,0,["zo",function(){return AVc(this);
},"mU",function(b,c,d){return AZO(this,b,c,d);},"uE",function(){return AVM(this);}],Hv,0,GP,[],0,3,0,0,MY,0,E,[],3,3,0,0,Nn,0,Hv,[MY],0,3,0,0,KV,0,E,[Dm],1,3,0,["kI",function(b){return AWw(this,b);}],SV,0,Hv,[],0,3,0,["zo",function(){return AM$(this);},"mU",function(b,c,d){return AGR(this,b,c,d);},"uE",function(){return ASe(this);}],K8,0,E,[],1,3,0,0,Y6,0,K8,[],0,3,0,0,AEg,0,E,[],0,3,0,0,HK,0,E,[],0,3,0,["xH",function(b,c,d){return AVy(this,b,c,d);}],Re,0,HK,[],0,0,0,["xH",function(b,c,d){return ATn(this,b,
c,d);}],CO,"Entity",11,E,[],1,3,0,["zU",function(){B3(this);},"EY",function(){AAm(this);},"Av",function(){T3(this);},"yv",function(){return ATd(this);},"Cb",function(b){AE8(this,b);},"Am",function(b){Vh(this,b);},"DF",function(){return AAz(this);},"s_",function(b){return Zi(this,b);},"vh",function(b){AWO(this,b);},"sT",function(b){AVV(this,b);},"eQ",function(b,c){return AEJ(this,b,c);},"ko",function(){return AYK(this);},"p_",function(){return AXz(this);},"yC",function(b,c){AZN(this,b,c);},"sH",function(b){return APG(this,
b);},"x7",function(b){return APQ(this,b);},"yJ",function(){AAG(this);},"xA",function(){return AYM(this);}],Ea,"EntityLiving",11,CO,[],0,3,0,["ko",function(){return AP9(this);},"p_",function(){return ATg(this);},"p3",function(){return AKX(this);},"EY",function(){AH8(this);},"yJ",function(){AFR(this);},"dR",function(){AHh(this);},"eQ",function(b,c){return XI(this,b,c);},"uj",function(){return AXW(this);},"s4",function(){return AOd(this);},"sK",function(){return AOQ(this);},"BV",function(b){AIJ(this,b);},"k8",
function(){return ANz(this);},"Am",function(b){AKE(this,b);},"m7",function(){X7(this);},"ut",function(){ALf(this);},"sP",function(b,c,d){return Vq(this,b,c,d);},"Av",function(){Xp(this);}],Hx,"EntityCreature",11,Ea,[],0,3,0,["ut",function(){AKn(this);},"mx",function(b,c){AHo(this,b,c);},"vy",function(){return AFX(this);}],Dp,"EntityMonster",11,Hx,[],0,3,0,["m7",function(){YM(this);},"dR",function(){AF5(this);},"vy",function(){return AFq(this);},"eQ",function(b,c){return Wu(this,b,c);},"mx",function(b,c){ALj(this,
b,c);},"qT",function(b,c,d){return Xf(this,b,c,d);},"sP",function(b,c,d){return Uz(this,b,c,d);}],HG,"EntityZombie",11,Dp,[],0,3,0,["m7",function(){ADc(this);},"k8",function(){return APH(this);}],HU,"EntitySkeleton",11,Dp,[],0,3,0,["m7",function(){ADJ(this);},"mx",function(b,c){AC9(this,b,c);},"k8",function(){return AQ7(this);}],Ip,"EntityCreeper",11,Dp,[],0,3,0,["ut",function(){VJ(this);},"mx",function(b,c){Ww(this,b,c);},"k8",function(){return AM6(this);}],IO,"EntitySpider",11,Dp,[],0,3,0,["vy",function()
{return ALM(this);},"mx",function(b,c){Vk(this,b,c);},"k8",function(){return ARN(this);}],FJ,"EntityAnimal",11,Hx,[],1,3,0,["qT",function(b,c,d){return AJc(this,b,c,d);},"sP",function(b,c,d){return AF2(this,b,c,d);}],I7,"EntitySheep",11,FJ,[],0,3,0,["eQ",function(b,c){return ACd(this,b,c);},"uj",function(){return AWV(this);},"s4",function(){return AU0(this);},"sK",function(){return AQN(this);}],Hg,"EntityPig",11,FJ,[],0,3,0,["uj",function(){return ANx(this);},"s4",function(){return AYA(this);},"sK",function()
{return APc(this);},"sH",function(b){return AQr(this,b);},"k8",function(){return APl(this);}],Df,0,E,[Dc],0,3,0,0,MO,0,E,[],0,3,0,0,P,"Block",11,E,[],0,3,J,["fE",function(){return AYj(this);},"dO",function(){return APC(this);},"zs",function(b,c,d,e){return AAD(this,b,c,d,e);},"od",function(b,c,d,e,f){return ABR(this,b,c,d,e,f);},"so",function(b,c,d,e,f){return XF(this,b,c,d,e,f);},"em",function(b,c){return AW6(this,b,c);},"bZ",function(b){return AOW(this,b);},"nr",function(b,c,d,e){return Jr(this,b,c,d,e);},
"BY",function(b,c,d,e,f,g){AGt(this,b,c,d,e,f,g);},"gM",function(b,c,d,e){return Lj(this,b,c,d,e);},"dy",function(){return AVF(this);},"nE",function(b,c){return AWu(this,b,c);},"nO",function(){return AUI(this);},"ew",function(b,c,d,e,f){AC6(this,b,c,d,e,f);},"jQ",function(b,c,d,e,f){AJQ(this,b,c,d,e,f);},"l_",function(b,c,d,e,f){VZ(this,b,c,d,e,f);},"ep",function(b,c,d,e,f){UO(this,b,c,d,e,f);},"lh",function(){return AUQ(this);},"e2",function(b,c,d,e){WS(this,b,c,d,e);},"ks",function(b,c,d,e){VV(this,b,c,d,
e);},"d_",function(b){return AQP(this,b);},"dq",function(b,c){return ANK(this,b,c);},"EC",function(b,c,d,e,f){Uk(this,b,c,d,e,f);},"DM",function(b,c,d,e,f,g){AAr(this,b,c,d,e,f,g);},"vU",function(b){return AR0(this,b);},"mp",function(b,c,d,e,f,g){return IE(this,b,c,d,e,f,g);},"q1",function(b,c,d,e){ALn(this,b,c,d,e);},"oi",function(){return AOI(this);},"fh",function(b,c,d,e){return AAa(this,b,c,d,e);},"ky",function(b,c,d,e,f){return AB4(this,b,c,d,e,f);},"nh",function(b,c,d,e,f){AEM(this,b,c,d,e,f);},"s5",function(b,
c,d,e,f){UH(this,b,c,d,e,f);},"ps",function(b,c,d,e,f){V6(this,b,c,d,e,f);},"o4",function(b,c,d,e,f,g){ABu(this,b,c,d,e,f,g);},"vl",function(b,c,d,e){AKv(this,b,c,d,e);}],EC,0,E,[],1,3,0,0,Kl,0,EC,[Dm],1,3,0,0,OM,0,E,[],3,3,0,0,AEk,0,Fq,[E3,Dc,OM],0,3,0,["kN",function(){return CZ(this);},"q6",function(b){return U(this,b);}],Dh,0,E,[CV],3,3,0,0,Qr,0,E,[Dh],0,0,0,["fP",function(){return APr(this);}],Qq,0,E,[Dh],0,0,0,["fP",function(){return ANc(this);}],Qp,0,E,[Dh],0,0,0,["fP",function(){return ARs(this);}],Qo,
0,E,[Do],0,0,0,["f8",function(b){return AWG(this,b);}],PB,0,E,[],0,0,0,0,Cq,"IllegalArgumentException",8,B5,[],0,3,0,0,Rv,"UnsupportedCharsetException",6,Cq,[],0,3,0,0,El,"NullPointerException",8,B5,[],0,3,0,0]);
$rt_metadata([WT,0,E,[CV],4,3,0,0,AAx,0,E,[],0,3,0,0,NY,0,E,[],0,3,0,0,Ek,0,E,[H6,LK],1,3,0,["fO",function(b,c,d){ANl(this,b,c,d);},"r1",function(){AYf(this);},"kq",function(){AYJ(this);}],Fo,0,Ek,[],0,3,0,0,WP,0,Fo,[],0,3,0,0,Tj,0,Ek,[],0,0,0,["mu",function(b){AQI(this,b);}],AAE,"IllegalCharsetNameException",6,Cq,[],0,3,0,0,KU,0,E,[],128,3,0,0,QM,0,KU,[],4,3,0,0,G_,0,E,[],0,3,0,0,ACG,0,G_,[],4,0,0,0,X9,0,G_,[],4,0,0,0,J3,"BlockStone",11,P,[],0,3,0,["dq",function(b,c){return AX8(this,b,c);}],VX,"BlockGrass",
11,P,[],0,3,0,["bZ",function(b){return AXc(this,b);},"ew",function(b,c,d,e,f){Y3(this,b,c,d,e,f);},"dq",function(b,c){return AR6(this,b,c);}],AC8,"BlockDirt",11,P,[],0,3,0,0,BZ,0,E,[],0,3,0,["mk",function(){return AXR(this);},"c3",function(){return ASG(this);},"qA",function(){return AXw(this);},"sl",function(){return AVN(this);}],Fe,"BlockFlower",11,P,[],0,3,0,["fh",function(b,c,d,e){return AGO(this,b,c,d,e);},"pI",function(b){return AQM(this,b);},"ep",function(b,c,d,e,f){ADL(this,b,c,d,e,f);},"ew",function(b,
c,d,e,f){ZI(this,b,c,d,e,f);},"De",function(b,c,d,e){return AIL(this,b,c,d,e);},"gM",function(b,c,d,e){return ABI(this,b,c,d,e);},"dy",function(){return AWo(this);},"fE",function(){return ANQ(this);},"dO",function(){return AXh(this);}],AHF,"BlockSapling",11,Fe,[],0,3,0,["ew",function(b,c,d,e,f){ZR(this,b,c,d,e,f);}],GI,0,P,[],1,3,0,["bZ",function(b){return ANg(this,b);},"fE",function(){return AZH(this);},"dy",function(){return AZe(this);},"nE",function(b,c){return AX6(this,b,c);},"od",function(b,c,d,e,f){return ALR(this,
b,c,d,e,f);},"gM",function(b,c,d,e){return Ui(this,b,c,d,e);},"dO",function(){return AXC(this);},"dq",function(b,c){return AUk(this,b,c);},"d_",function(b){return AWh(this,b);},"o4",function(b,c,d,e,f,g){AHW(this,b,c,d,e,f,g);},"lh",function(){return AOw(this);},"zs",function(b,c,d,e){return Z2(this,b,c,d,e);},"ew",function(b,c,d,e,f){ALu(this,b,c,d,e,f);},"oi",function(){return AZb(this);},"jQ",function(b,c,d,e,f){UF(this,b,c,d,e,f);},"e2",function(b,c,d,e){AL$(this,b,c,d,e);},"ep",function(b,c,d,e,f){AGb(this,
b,c,d,e,f);}],ZQ,"BlockFlowing",11,GI,[],0,3,0,["ew",function(b,c,d,e,f){AJq(this,b,c,d,e,f);},"e2",function(b,c,d,e){XJ(this,b,c,d,e);}],ADQ,"BlockStationary",11,GI,[],0,3,0,["ep",function(b,c,d,e,f){ABU(this,b,c,d,e,f);}],HH,"BlockSand",11,P,[],0,3,0,["e2",function(b,c,d,e){AL8(this,b,c,d,e);},"ep",function(b,c,d,e,f){AMv(this,b,c,d,e,f);},"ew",function(b,c,d,e,f){AKb(this,b,c,d,e,f);},"lh",function(){return AUP(this);}],ACn,"BlockGravel",11,HH,[],0,3,0,["dq",function(b,c){return AZQ(this,b,c);}],UV,"BlockOre",
11,P,[],0,3,0,["dq",function(b,c){return AU2(this,b,c);},"d_",function(b){return AR5(this,b);}],AAK,"BlockLog",11,P,[],0,3,0,["d_",function(b){return AYg(this,b);},"dq",function(b,c){return ANj(this,b,c);},"bZ",function(b){return AOS(this,b);}],J_,0,P,[],0,3,0,["od",function(b,c,d,e,f){return AK3(this,b,c,d,e,f);}],Yl,"BlockLeaves",11,J_,[],0,3,0,["ew",function(b,c,d,e,f){ADF(this,b,c,d,e,f);},"d_",function(b){return APT(this,b);},"dq",function(b,c){return AVz(this,b,c);},"dy",function(){return AT5(this);},
"nh",function(b,c,d,e,f){AMI(this,b,c,d,e,f);}],AGa,"BlockSponge",11,P,[],0,3,0,["e2",function(b,c,d,e){AFJ(this,b,c,d,e);},"ks",function(b,c,d,e){AIb(this,b,c,d,e);}],K$,0,P,[],0,3,0,["dy",function(){return AY3(this);},"od",function(b,c,d,e,f){return Ux(this,b,c,d,e,f);}],AKU,"BlockGlass",11,K$,[],0,3,0,["d_",function(b){return APd(this,b);}],ACv,"BlockMushroom",11,Fe,[],0,3,0,["pI",function(b){return AD$(this,b);},"De",function(b,c,d,e){return YX(this,b,c,d,e);}],Xd,"BlockOreBlock",11,P,[],0,3,0,["bZ",function(b)
{return AU$(this,b);}],Ve,"BlockStep",11,P,[],0,3,0,["bZ",function(b){return AZp(this,b);},"dy",function(){return AV4(this);},"ep",function(b,c,d,e,f){Xl(this,b,c,d,e,f);},"e2",function(b,c,d,e){W4(this,b,c,d,e);},"dq",function(b,c){return ARt(this,b,c);},"fE",function(){return APV(this);},"od",function(b,c,d,e,f){return AMT(this,b,c,d,e,f);}],AIW,"BlockTNT",11,P,[],0,3,0,["bZ",function(b){return AVq(this,b);},"d_",function(b){return AOC(this,b);},"q1",function(b,c,d,e){AB0(this,b,c,d,e);},"l_",function(b,c,
d,e,f){AMC(this,b,c,d,e,f);}],YO,"BlockBookshelf",11,P,[],0,3,0,["bZ",function(b){return AZI(this,b);},"d_",function(b){return AU_(this,b);}],TQ,"BlockObsidian",11,J3,[],0,3,0,["d_",function(b){return AUg(this,b);},"dq",function(b,c){return AOt(this,b,c);}],AJf,"BlockTorch",11,P,[],0,3,0,["gM",function(b,c,d,e){return AH4(this,b,c,d,e);},"dy",function(){return ATw(this);},"fE",function(){return APh(this);},"dO",function(){return ASE(this);},"fh",function(b,c,d,e){return AG1(this,b,c,d,e);},"s5",function(b,c,
d,e,f){AIu(this,b,c,d,e,f);},"ew",function(b,c,d,e,f){AMt(this,b,c,d,e,f);},"e2",function(b,c,d,e){Xc(this,b,c,d,e);},"ep",function(b,c,d,e,f){AFd(this,b,c,d,e,f);},"mp",function(b,c,d,e,f,g){return AFk(this,b,c,d,e,f,g);},"jQ",function(b,c,d,e,f){AKW(this,b,c,d,e,f);}],AJC,"BlockFire",11,P,[],0,3,0,["gM",function(b,c,d,e){return ALW(this,b,c,d,e);},"dy",function(){return AV9(this);},"fE",function(){return AXZ(this);},"dO",function(){return AP_(this);},"d_",function(b){return APD(this,b);},"lh",function(){return AR2(this);
},"ew",function(b,c,d,e,f){TP(this,b,c,d,e,f);},"nO",function(){return AUq(this);},"fh",function(b,c,d,e){return AH$(this,b,c,d,e);},"ep",function(b,c,d,e,f){Xh(this,b,c,d,e,f);},"e2",function(b,c,d,e){X$(this,b,c,d,e);},"jQ",function(b,c,d,e,f){AMJ(this,b,c,d,e,f);}],DN,0,P,[],1,3,0,["e2",function(b,c,d,e){AJh(this,b,c,d,e);},"ks",function(b,c,d,e){AGS(this,b,c,d,e);}],V4,"BlockMobSpawner",11,DN,[],0,3,0,["rq",function(){return AP0(this);},"dy",function(){return AV_(this);}],Vu,"BlockStairs",11,P,[],0,3,0,
["dy",function(){return AVY(this);},"fE",function(){return APb(this);},"dO",function(){return ARa(this);},"od",function(b,c,d,e,f){return AKc(this,b,c,d,e,f);},"BY",function(b,c,d,e,f,g){AEC(this,b,c,d,e,f,g);},"ep",function(b,c,d,e,f){ACU(this,b,c,d,e,f);},"jQ",function(b,c,d,e,f){AJR(this,b,c,d,e,f);},"ps",function(b,c,d,e,f){WY(this,b,c,d,e,f);},"l_",function(b,c,d,e,f){Y2(this,b,c,d,e,f);},"zs",function(b,c,d,e){return AHE(this,b,c,d,e);},"vU",function(b){return AYh(this,b);},"oi",function(){return AXK(this);
},"dq",function(b,c){return AUZ(this,b,c);},"d_",function(b){return ASk(this,b);},"em",function(b,c){return AQa(this,b,c);},"bZ",function(b){return AXG(this,b);},"so",function(b,c,d,e,f){return AHP(this,b,c,d,e,f);},"lh",function(){return AOY(this);},"nr",function(b,c,d,e){return AG9(this,b,c,d,e);},"o4",function(b,c,d,e,f,g){Yp(this,b,c,d,e,f,g);},"nO",function(){return AQZ(this);},"nE",function(b,c){return AQ8(this,b,c);},"fh",function(b,c,d,e){return AHd(this,b,c,d,e);},"e2",function(b,c,d,e){Yk(this,b,c,
d,e);},"ks",function(b,c,d,e){UB(this,b,c,d,e);},"DM",function(b,c,d,e,f,g){AC5(this,b,c,d,e,f,g);},"EC",function(b,c,d,e,f){AHI(this,b,c,d,e,f);},"nh",function(b,c,d,e,f){ALh(this,b,c,d,e,f);},"ew",function(b,c,d,e,f){ALk(this,b,c,d,e,f);},"ky",function(b,c,d,e,f){return AB5(this,b,c,d,e,f);},"q1",function(b,c,d,e){U9(this,b,c,d,e);}],ABh,"BlockChest",11,DN,[],0,3,0,["so",function(b,c,d,e,f){return Z5(this,b,c,d,e,f);},"bZ",function(b){return AYm(this,b);},"fh",function(b,c,d,e){return AE6(this,b,c,d,e);},
"ks",function(b,c,d,e){AMV(this,b,c,d,e);},"ky",function(b,c,d,e,f){return ABm(this,b,c,d,e,f);},"rq",function(){return ARI(this);}],AFI,"BlockGears",11,P,[],0,3,0,["gM",function(b,c,d,e){return AAn(this,b,c,d,e);},"dy",function(){return ANP(this);},"fE",function(){return AVA(this);},"dO",function(){return AXf(this);},"d_",function(b){return AYN(this,b);},"nO",function(){return AOg(this);}],ACO,"BlockWorkbench",11,P,[],0,3,0,["bZ",function(b){return APw(this,b);},"ky",function(b,c,d,e,f){return ACa(this,b,c,
d,e,f);}],AFH,"BlockCrops",11,Fe,[],0,3,0,["pI",function(b){return AQ1(this,b);},"ew",function(b,c,d,e,f){AEr(this,b,c,d,e,f);},"em",function(b,c){return AXX(this,b,c);},"dO",function(){return AVb(this);},"l_",function(b,c,d,e,f){AIg(this,b,c,d,e,f);},"dq",function(b,c){return ASH(this,b,c);},"d_",function(b){return AVm(this,b);}],ALg,"BlockFarmland",11,P,[],0,3,0,["gM",function(b,c,d,e){return WO(this,b,c,d,e);},"dy",function(){return AOv(this);},"fE",function(){return AS6(this);},"em",function(b,c){return AZP(this,
b,c);},"ew",function(b,c,d,e,f){AHX(this,b,c,d,e,f);},"nh",function(b,c,d,e,f){AFO(this,b,c,d,e,f);},"ep",function(b,c,d,e,f){Ua(this,b,c,d,e,f);},"dq",function(b,c){return APS(this,b,c);}],ABq,"BlockFurnace",11,DN,[],0,3,0,["e2",function(b,c,d,e){Ya(this,b,c,d,e);},"so",function(b,c,d,e,f){return AFh(this,b,c,d,e,f);},"jQ",function(b,c,d,e,f){ZW(this,b,c,d,e,f);},"bZ",function(b){return AOu(this,b);},"ky",function(b,c,d,e,f){return ACc(this,b,c,d,e,f);},"rq",function(){return AXH(this);}],RJ,"BlockSign",11,
DN,[],0,3,0,["dO",function(){return AQ5(this);},"fE",function(){return AWg(this);},"dy",function(){return AWa(this);},"rq",function(){return ATe(this);},"fh",function(b,c,d,e){return AB8(this,b,c,d,e);},"dq",function(b,c){return AX4(this,b,c);},"ep",function(b,c,d,e,f){VN(this,b,c,d,e,f);}],DF,"TileEntity",11,E,[],0,3,0,["rZ",function(){AA_(this);},"jk",function(){XX(this);}]]);
$rt_metadata([HQ,0,DF,[],0,3,0,0,W,0,E,[],0,3,Bw,["hQ",function(b,c,d,e,f,g,h){return ABP(this,b,c,d,e,f,g,h);},"vB",function(b,c){return AZq(this,b,c);},"mQ",function(b,c,d){return AMA(this,b,c,d);},"qy",function(b,c){APg(this,b,c);},"vv",function(b,c,d,e,f){AVu(this,b,c,d,e,f);},"mI",function(b){return AZW(this,b);},"nF",function(b){return AO_(this,b);},"wb",function(b,c){AUF(this,b,c);}],ADE,"BlockDoor",11,P,[],0,3,0,["em",function(b,c){return AZd(this,b,c);},"dy",function(){return ASB(this);},"fE",function()
{return AP7(this);},"dO",function(){return ANH(this);},"nr",function(b,c,d,e){return ABO(this,b,c,d,e);},"gM",function(b,c,d,e){return Vw(this,b,c,d,e);},"vl",function(b,c,d,e){ACW(this,b,c,d,e);},"ps",function(b,c,d,e,f){AE0(this,b,c,d,e,f);},"ky",function(b,c,d,e,f){return Zt(this,b,c,d,e,f);},"ep",function(b,c,d,e,f){Ye(this,b,c,d,e,f);},"dq",function(b,c){return AX3(this,b,c);},"mp",function(b,c,d,e,f,g){return TJ(this,b,c,d,e,f,g);},"fh",function(b,c,d,e){return AE5(this,b,c,d,e);}],YG,"BlockLadder",11,
P,[],0,3,0,["gM",function(b,c,d,e){return YU(this,b,c,d,e);},"nr",function(b,c,d,e){return ZF(this,b,c,d,e);},"dy",function(){return APO(this);},"fE",function(){return AV7(this);},"dO",function(){return AYD(this);},"fh",function(b,c,d,e){return AIA(this,b,c,d,e);},"s5",function(b,c,d,e,f){Up(this,b,c,d,e,f);},"ep",function(b,c,d,e,f){AFL(this,b,c,d,e,f);},"d_",function(b){return AVO(this,b);}],AID,"BlockMinecartTrack",11,P,[],0,3,0,["gM",function(b,c,d,e){return Yj(this,b,c,d,e);},"dy",function(){return APy(this);
},"mp",function(b,c,d,e,f,g){return AGy(this,b,c,d,e,f,g);},"vl",function(b,c,d,e){AHb(this,b,c,d,e);},"em",function(b,c){return ATS(this,b,c);},"fE",function(){return AUA(this);},"dO",function(){return ASm(this);},"d_",function(b){return ATZ(this,b);},"fh",function(b,c,d,e){return AIC(this,b,c,d,e);},"e2",function(b,c,d,e){AIm(this,b,c,d,e);},"ep",function(b,c,d,e,f){AER(this,b,c,d,e,f);}],AMR,0,W,[],0,3,0,["hQ",function(b,c,d,e,f,g,h){return AKV(this,b,c,d,e,f,g,h);}],Lf,0,Kl,[],1,0,0,0,SS,0,Lf,[],0,0,0,0,ACY,
0,KV,[],0,3,0,0,K5,0,EC,[Dm],1,3,0,0,ALH,0,K5,[],0,0,0,0,RI,0,E,[],3,3,0,0,J9,0,EC,[Dm,Hd,Jk,RI],1,3,0,0,Nr,"GZIPException",2,BU,[],0,3,0,0,L9,0,BZ,[],0,3,0,["c3",function(){return AVk(this);},"qA",function(){return AVS(this);},"sl",function(){return ANq(this);}],Kd,0,BZ,[],0,3,0,["mk",function(){return AZ4(this);},"c3",function(){return ARk(this);}],LU,0,BZ,[],0,3,0,["c3",function(){return AWQ(this);},"qA",function(){return AYY(this);},"sl",function(){return AOx(this);}],Fm,0,W,[],0,3,0,["vB",function(b,c)
{return AYe(this,b,c);},"qy",function(b,c){AWY(this,b,c);},"vv",function(b,c,d,e,f){APu(this,b,c,d,e,f);},"mI",function(b){return APW(this,b);}],MA,0,Fm,[],0,3,A1J,0,RM,0,Fm,[],0,3,A1L,["nF",function(b){return AVH(this,b);}],SB,0,Fm,[],0,3,A1q,0,AAt,0,W,[],0,3,0,["hQ",function(b,c,d,e,f,g,h){return AEL(this,b,c,d,e,f,g,h);}],J2,0,W,[],0,3,0,["mQ",function(b,c,d){return Nu(this,b,c,d);}],AJv,0,W,[],0,3,0,["mQ",function(b,c,d){return ABX(this,b,c,d);}],AF9,0,W,[],0,3,0,["vB",function(b,c){return ASl(this,b,c);
},"qy",function(b,c){AXy(this,b,c);},"vv",function(b,c,d,e,f){AQB(this,b,c,d,e,f);},"mI",function(b){return ATR(this,b);}],AIS,0,J2,[],0,3,0,["mQ",function(b,c,d){return AJ8(this,b,c,d);}],AIf,0,W,[],0,3,0,["hQ",function(b,c,d,e,f,g,h){return ALi(this,b,c,d,e,f,g,h);}],R$,0,W,[],0,3,0,["hQ",function(b,c,d,e,f,g,h){return AAO(this,b,c,d,e,f,g,h);}],Ff,0,W,[],0,3,0,0,TX,0,W,[],0,3,0,["hQ",function(b,c,d,e,f,g,h){return XV(this,b,c,d,e,f,g,h);}],ACJ,0,W,[],0,3,0,["hQ",function(b,c,d,e,f,g,h){return Ug(this,b,c,
d,e,f,g,h);}],AEh,0,W,[],0,3,0,["hQ",function(b,c,d,e,f,g,h){return ZJ(this,b,c,d,e,f,g,h);}],AL6,0,W,[],0,3,0,["mQ",function(b,c,d){return ADa(this,b,c,d);}],AJK,0,W,[],0,3,0,["hQ",function(b,c,d,e,f,g,h){return YL(this,b,c,d,e,f,g,h);}],ALA,0,W,[],0,3,0,["wb",function(b,c){ABV(this,b,c);},"qy",function(b,c){APq(this,b,c);}],LP,0,E,[],3,0,0,0,ABG,0,E,[LP],4,3,0,["Bq",function(b){AM8(this,b);},"mz",function(){ARA(this);},"v6",function(){return ANS(this);},"jJ",function(b,c,d){AXN(this,b,c,d);}],Pm,"CloneNotSupportedException",
8,BB,[],0,3,0,0,Ll,0,E,[],4,3,0,0,Iu,0,E,[],3,3,0,0,JZ,0,E,[Iu,E3],0,0,0,["dQ",function(b){return AVo(this,b);},"eK",function(){return ATm(this);}],Hi,0,JZ,[],0,0,0,0,BP,"IndexOutOfBoundsException",8,B5,[],0,3,0,0,Mg,"StringIndexOutOfBoundsException",8,BP,[],0,3,0,0,FL,0,E,[],3,3,0,0,SE,0,E,[FL],0,3,0,["js",function(){AD7(this);}],EU,"EOFException",7,BU,[],0,3,0,0,Eb,0,E,[],0,3,0,0,EN,0,E,[],0,3,0,0,JX,0,E,[],4,0,0,0]);
$rt_metadata([Nc,0,Ek,[],0,0,0,["mu",function(b){AWe(this,b);}],IL,0,E,[],0,3,0,0,AHc,0,E,[],4,3,0,0,HO,0,E,[],0,3,0,0,JI,0,J9,[],1,0,0,0,Xt,0,JI,[],0,0,0,0,J4,0,E,[],1,3,0,0,LX,0,E,[],0,3,0,0,V0,0,E,[CV],1,3,0,0,Nd,0,E,[CV],3,3,0,0,UD,0,E,[CV,Nd],1,3,0,0,I5,0,E,[],4,0,0,0,Lw,0,J4,[],1,3,0,0,Ne,0,Lw,[],0,3,0,0,AI4,0,E,[],4,3,0,0,Fn,0,E,[],4,0,0,0,JQ,0,E,[],4,0,0,0,Go,"UTFDataFormatException",7,BU,[],0,3,0,0,Tz,"NegativeArraySizeException",8,B5,[],0,3,0,0,WI,0,E,[JC],1,3,0,["LN",function(b){return AZ1(this,b);
},"Tq",function(){return AOe(this);}],IM,"IllegalMonitorStateException",8,B5,[],0,3,0,0,VP,0,E,[],0,0,0,0,DK,"IllegalStateException",8,BB,[],0,3,0,0,ADG,0,E,[CV],1,3,0,0,PN,0,E,[FL],0,3,0,["js",function(){ALt(this);}],Ok,0,E,[FL],0,3,0,0,F2,0,BU,[],0,3,0,0,S7,"AssertionError",8,EA,[],0,3,0,0,Ei,0,BB,[],0,3,0,0,L7,0,E,[],1,3,0,0,Pp,0,E,[],3,3,0,0,Pv,0,E,[],3,3,0,0,MS,0,E,[FL,Pp,Pv],0,0,0,["js",function(){AJZ(this);}],JU,0,L7,[],1,3,0,0,Or,0,JU,[],0,3,0,0,Du,"Inflate$Return",2,BB,[],0,0,0,0,AId,0,E,[E3],0,3,0,
0,My,0,E,[LP],4,3,0,["jJ",function(b,c,d){ATQ(this,b,c,d);},"mz",function(){AWt(this);},"Bq",function(b){AYQ(this,b);},"v6",function(){return AXj(this);}],HI,0,E,[],0,3,0,0,NC,0,E,[],3,3,0,0,Bp,0,Bo,[NC],0,3,BO,0,Yi,0,E,[],0,3,0,0,Lv,0,E,[],0,3,0,0,G7,0,E,[],0,3,Qc,0,AMs,0,Ek,[],0,3,0,["mu",function(b){AXu(this,b);},"fO",function(b,c,d){OD(this,b,c,d);}],Ik,"ArrayStoreException",8,B5,[],0,3,0,0,L4,0,E,[],3,3,0,0,FO,0,E,[L4],0,3,0,["dL",function(b,c,d){return Yc(this,b,c,d);},"nk",function(b,c,d){return XG(this,
b,c,d);},"ea",function(b,c,d){return AAd(this,b,c,d);},"q3",function(b,c,d){return AH1(this,b,c,d);},"kc",function(b,c,d){return Wo(this,b,c,d);}],Ke,0,E,[],0,3,Bv,0,AHZ,0,E,[],0,3,0,0]);
$rt_metadata([Fr,0,E,[],0,3,0,0,CI,0,Fr,[],0,3,0,["nI",function(b,c){UN(this,b,c);},"EO",function(b,c,d){Vl(this,b,c,d);},"zc",function(b,c,d){ATO(this,b,c,d);},"is",function(b){AHB(this,b);},"hL",function(){AKD(this);},"pV",function(){AUm(this);},"n2",function(){ADi(this);},"mT",function(){return AON(this);}],AAH,0,E,[],0,3,0,0,Kw,0,E,[Dc],1,3,0,0,DX,0,Kw,[Dc],0,3,0,0,LY,0,E,[],3,3,0,0,HD,0,E,[Dc,LY],1,3,0,0,St,0,E,[LY],3,3,0,0,LM,0,E,[St],3,3,0,0,O$,0,E,[],3,3,0,0,Kq,0,E,[O$],3,3,0,0,Rj,0,HD,[Dc,LM,Kq],0,
3,0,0,Sr,0,E,[LM],3,3,0,0,O5,0,E,[Kq],3,3,0,0,F8,0,HD,[Dc,Sr,O5],0,3,0,0,PU,0,E,[FL],0,3,0,["js",function(){ADI(this);}],AJz,"CoderMalfunctionError",6,EA,[],0,3,0,0,GR,0,E,[],3,3,0,0,QT,0,E,[GR],3,3,0,0,YC,0,E,[QT],0,0,0,0,OO,0,E,[],0,0,0,0,I8,0,E,[],0,3,0,0,Ss,0,E,[],0,3,0,0,NE,0,E,[],0,3,0,0,AFV,0,DZ,[],0,3,0,["nH",function(){AR7(this);}],X2,0,DZ,[],0,3,0,["nH",function(){AYc(this);}],AMn,0,DZ,[],0,3,0,["nH",function(){AUw(this);}],Tw,0,E,[],3,3,0,0,Wi,0,E,[Tw],0,3,0,0,ACt,0,CI,[],0,3,0,["pV",function(){AVK(this);
},"nI",function(b,c){AIs(this,b,c);},"hL",function(){ADA(this);},"is",function(b){X8(this,b);},"hF",function(b,c,d){Vy(this,b,c,d);}],MC,0,E,[],0,3,0,0,Lm,0,Fr,[],0,3,0,0,HZ,"EntityPlayer",11,Ea,[],0,3,0,["yJ",function(){ABl(this);},"BV",function(b){AF_(this,b);},"yC",function(b,c){ARy(this,b,c);},"p3",function(){return AVC(this);},"eQ",function(b,c){return Ur(this,b,c);}],ABY,"EntityPlayerSP",11,HZ,[],0,3,0,["ut",function(){WA(this);},"m7",function(){AGi(this);}],AEI,0,E,[],0,3,0,0,NH,0,E,[],0,3,0,0,RE,0,E,
[],0,3,0,0,ES,0,E,[],3,3,0,0,RQ,0,E,[ES],0,3,0,["i6",function(b,c){return DT(this,b,c);},"iF",function(b,c){AA3(this,b,c);},"fQ",function(b){return OZ(this,b);},"ft",function(){return ARv(this);},"jk",function(){Wd(this);}],C_,0,Hz,[],0,3,0,0,D0,0,CI,[],1,3,0,["hF",function(b,c,d){XZ(this,b,c,d);},"EO",function(b,c,d){AIK(this,b,c,d);},"zc",function(b,c,d){AYI(this,b,c,d);},"nI",function(b,c){Wk(this,b,c);},"n2",function(){WJ(this);},"mT",function(){return AZB(this);}],AKo,0,D0,[],0,3,0,["n2",function(){AGD(this);
},"rE",function(b){ANM(this,b);},"kn",function(){AR4(this);},"hF",function(b,c,d){Zy(this,b,c,d);},"rg",function(b){T_(this,b);}],HF,0,E,[],0,3,0,0,OC,0,E,[],0,0,0,0,P8,0,E,[],0,3,0,0,ACH,0,E,[],0,3,0,0,B6,0,E,[],4,3,0,0,VG,0,E,[ES],0,3,0,["fQ",function(b){return Ft(this,b);},"i6",function(b,c){return AAp(this,b,c);},"iF",function(b,c){AUB(this,b,c);},"ft",function(){return AYi(this);},"jk",function(){Zp(this);}],Wq,0,E,[ES],0,3,0,["fQ",function(b){return AVs(this,b);},"i6",function(b,c){return APB(this,b,c);
},"iF",function(b,c){MW(this,b,c);},"ft",function(){return AQ_(this);},"jk",function(){AH2(this);}],GB,0,E,[],0,3,0,["E4",function(){AF7(this);},"rk",function(b){return APZ(this,b);},"qe",function(){return AYO(this);}]]);
$rt_metadata([YT,0,GB,[],0,0,0,["rk",function(b){return ASd(this,b);},"E4",function(){AIM(this);}],NZ,0,GB,[],0,0,0,["rk",function(b){return AT7(this,b);},"qe",function(){return APx(this);}],Sn,0,E,[],4,3,0,0,PA,0,E,[],4,3,0,0,K3,0,EC,[Dm],1,3,0,0,C1,0,E,[],1,3,0,0,ADM,0,C1,[],0,3,0,["hS",function(b,c,d,e,f,g){YJ(this,b,c,d,e,f,g);}],MP,0,E,[],4,3,0,0,NT,0,E,[Do],0,0,0,["f8",function(b){return AXd(this,b);}],NS,0,E,[Do],0,0,0,["f8",function(b){return AXm(this,b);}],He,0,K3,[],1,0,0,0,Ra,0,He,[],0,0,0,["vY",
function(b){return R_(this,b);},"s0",function(b,c){AIp(this,b,c);},"lM",function(){return AM3(this);}],Sh,0,E,[],4,3,0,0,Se,0,E,[],4,3,0,0,Tm,0,E,[],4,3,0,0,HV,"UnsupportedOperationException",8,B5,[],0,3,0,0,E8,"ReadOnlyBufferException",5,HV,[],0,3,0,0,F_,"BufferOverflowException",5,B5,[],0,3,0,0,E4,"BufferUnderflowException",5,B5,[],0,3,0,0,Qh,0,E,[],0,3,0,0,X4,0,E,[],0,3,0,0,OI,0,CI,[],0,3,0,0,Kx,0,CI,[],0,3,0,["hL",function(){AI2(this);},"nI",function(b,c){AHa(this,b,c);},"is",function(b){AI_(this,b);},"hF",
function(b,c,d){AJ1(this,b,c,d);},"mT",function(){return AWM(this);}],CJ,"EntityFX",11,CO,[],0,3,0,["dR",function(){AGj(this);},"jR",function(b,c,d,e,f,g,h){AIa(this,b,c,d,e,f,g,h);},"u$",function(){return AXE(this);}],WK,0,CI,[],0,3,0,["hL",function(){ALy(this);},"is",function(b){Y0(this,b);},"pV",function(){ATz(this);},"hF",function(b,c,d){Zn(this,b,c,d);}],JO,0,E,[],0,3,0,0,SI,0,JO,[],0,3,0,0,Oe,0,E,[],3,3,0,0,ABi,0,E,[Oe],0,3,0,0,MH,0,E,[],0,3,0,0,G2,0,E,[ES],0,3,0,["fH",function(){return AWv(this);},"uQ",
function(){return AWl(this);},"fQ",function(b){return ANe(this,b);},"i6",function(b,c){return AUn(this,b,c);},"iF",function(b,c){APM(this,b,c);},"ft",function(){return AY0(this);},"jk",function(){Uy(this);}],VC,"EntityDiggingFX",11,CJ,[],0,3,0,["u$",function(){return ANB(this);},"jR",function(b,c,d,e,f,g,h){UK(this,b,c,d,e,f,g,h);}],Jg,"ConcurrentModificationException",4,B5,[],0,3,0,0,Ie,"EntityRainFX",11,CJ,[],0,3,0,["jR",function(b,c,d,e,f,g,h){AFM(this,b,c,d,e,f,g,h);},"dR",function(){AJb(this);}],Hr,0,He,
[],1,0,0,["lM",function(){return AQn(this);}],MR,0,Hr,[],0,0,0,["vY",function(b){return APi(this,b);},"s0",function(b,c){AM2(this,b,c);}],R0,0,Hr,[],0,0,0,["vY",function(b){return ASz(this,b);},"s0",function(b,c){AND(this,b,c);}],AFT,0,E,[EP],0,3,0,["oG",function(b,c){return ASP(this,b,c);}],Sl,0,E,[EP],0,3,0,["oG",function(b,c){return AYH(this,b,c);}],Gl,0,E,[],0,3,0,0,GL,0,E,[],0,3,0,0,GO,0,E,[],0,3,0,0,Lc,0,E,[],0,3,0,0,Is,"NoSuchElementException",4,B5,[],0,3,0,0,R9,0,E,[],0,3,0,["dQ",function(b){return AWr(this,
b);},"eK",function(){return ASZ(this);}],Me,0,Eu,[Dm],0,3,0,0,Gg,0,E,[],0,0,0,0,Ld,0,E,[],4,3,0,0,Pg,0,E,[],0,3,0,0,Dj,0,C1,[],0,3,0,["DZ",function(b,c,d,e,f,g){V3(this,b,c,d,e,f,g);},"j5",function(b,c){return AKr(this,b,c);},"zz",function(b){return AVE(this,b);},"zC",function(b,c,d){return AWy(this,b,c,d);},"uY",function(b,c){AYp(this,b,c);},"hS",function(b,c,d,e,f,g){AJy(this,b,c,d,e,f,g);}]]);
$rt_metadata([Ms,0,Dj,[],0,3,0,["j5",function(b,c){return U7(this,b,c);},"DZ",function(b,c,d,e,f,g){AGX(this,b,c,d,e,f,g);},"hS",function(b,c,d,e,f,g){Yq(this,b,c,d,e,f,g);}],JP,0,Fr,[],0,3,0,0,Kn,0,E,[KT],0,3,0,0,NM,0,E,[],3,3,0,0,IU,0,Kn,[NM],0,3,0,0,Md,0,E,[CV],3,3,0,0,NR,0,E,[Md],0,0,0,["Cr",function(){return AS7(this);}],SO,0,E,[EP],0,3,0,["oG",function(b,c){return AVi(this,b,c);}],SM,0,E,[EP],0,3,0,0,Pi,0,Ev,[],4,0,0,0,Ph,0,E_,[],4,0,0,0,Pj,0,Fq,[],4,0,0,0,Hf,0,E,[],1,3,0,0,WN,0,Hf,[],0,3,0,["zK",function(b,
c,d,e,f){TH(this,b,c,d,e,f);}],Lr,0,DF,[],0,3,0,["rZ",function(){YH(this);}],AMg,0,Hf,[],0,3,0,["zK",function(b,c,d,e,f){ALz(this,b,c,d,e,f);}],AKQ,0,Dj,[],0,3,0,["zz",function(b){return AWn(this,b);},"j5",function(b,c){return Ue(this,b,c);}],QD,0,Dj,[],0,3,0,["j5",function(b,c){return AG6(this,b,c);}],Fd,0,DO,[],0,3,0,["gW",function(b,c,d,e,f,g){AYU(this,b,c,d,e,f,g);}],Nh,0,Fd,[],0,3,0,0,Qm,0,Dj,[],0,3,0,["j5",function(b,c){return ALN(this,b,c);}],Yn,0,Fd,[],0,3,0,0,ALC,0,Fd,[],0,3,0,0,XP,0,Dj,[],0,3,0,["uY",
function(b,c){AXA(this,b,c);},"zC",function(b,c,d){return ARV(this,b,c,d);}],GH,0,KH,[],0,3,0,["mZ",function(b,c,d,e,f,g){AT0(this,b,c,d,e,f,g);}],ADv,0,GH,[],0,3,0,0,Ju,"EntityGiant",11,Dp,[],0,3,0,["qT",function(b,c,d){return AJJ(this,b,c,d);}],QG,0,Dj,[],0,3,0,["uY",function(b,c){AZA(this,b,c);}],Qt,0,C1,[],0,3,0,["hS",function(b,c,d,e,f,g){AEv(this,b,c,d,e,f,g);}],Hj,"EntityPainting",11,CO,[],0,3,0,["dR",function(){YY(this);},"ko",function(){return AQp(this);},"eQ",function(b,c){return ZY(this,b,c);}],Wg,
0,C1,[],0,3,0,["hS",function(b,c,d,e,f,g){AJs(this,b,c,d,e,f,g);}],HY,"EntityArrow",11,CO,[],0,3,0,["dR",function(){AJ6(this);},"vh",function(b){AXl(this,b);}],OH,0,C1,[],0,3,0,["hS",function(b,c,d,e,f,g){YW(this,b,c,d,e,f,g);}],Er,"EntityItem",11,CO,[],0,3,0,["dR",function(){AEG(this);},"DF",function(){return ZO(this);},"Cb",function(b){AHj(this,b);},"eQ",function(b,c){return Rz(this,b,c);},"vh",function(b){AZK(this,b);}],KA,"EntityTNTPrimed",11,CO,[],0,3,0,["ko",function(){return AY4(this);},"dR",function()
{TM(this);}],AJw,0,C1,[],0,3,0,["hS",function(b,c,d,e,f,g){AG0(this,b,c,d,e,f,g);}],Ic,"EntityFallingSand",11,CO,[],0,3,0,["ko",function(){return AQK(this);},"dR",function(){AHz(this);}],ALe,0,C1,[],0,3,0,["hS",function(b,c,d,e,f,g){ALG(this,b,c,d,e,f,g);}],Fs,"EntityMinecart",11,CO,[ES],0,3,0,["x7",function(b){return AM4(this,b);},"yv",function(){return AR1(this);},"p_",function(){return AXn(this);},"xA",function(){return AO2(this);},"eQ",function(b,c){return AGc(this,b,c);},"ko",function(){return AYL(this);
},"zU",function(){AJT(this);},"dR",function(){AMW(this);},"sT",function(b){AUJ(this,b);},"sH",function(b){return AYa(this,b);}],ALT,0,C1,[],0,3,0,["hS",function(b,c,d,e,f,g){AKN(this,b,c,d,e,f,g);}],Sj,0,E,[],0,3,0,0,Xk,0,E,[],0,3,0,0,ADh,0,DO,[],0,3,0,["gW",function(b,c,d,e,f,g){AQD(this,b,c,d,e,f,g);}],ADH,0,DO,[],0,3,0,["gW",function(b,c,d,e,f,g){AUa(this,b,c,d,e,f,g);}],AAo,0,DO,[],0,3,0,0,HE,0,E,[],0,3,0,0,Hc,0,E,[L4],0,3,0,["dL",function(b,c,d){return Gr(this,b,c,d);},"q3",function(b,c,d){return Wz(this,
b,c,d);},"ea",function(b,c,d){return YI(this,b,c,d);},"nk",function(b,c,d){return LS(this,b,c,d);},"kc",function(b,c,d){return XM(this,b,c,d);}],Fu,0,BB,[],0,3,0,0,Rb,"NoSuchMethodException",8,Fu,[],0,3,0,0,Ru,0,E,[],0,3,0,0]);
$rt_metadata([Na,0,Fw,[],0,0,0,["pT",function(b){return ASi(this,b);},"jW",function(){return Le(this);}],Qe,0,E,[Md],0,0,0,["Cr",function(){return AZZ(this);}],AK$,0,E,[],4,3,0,0,S3,0,DF,[ES],0,3,0,["fQ",function(b){return AYy(this,b);},"i6",function(b,c){return AXO(this,b,c);},"iF",function(b,c){AOO(this,b,c);},"ft",function(){return ANU(this);},"rZ",function(){AB1(this);},"jk",function(){VW(this);}],P6,0,DF,[ES],0,3,0,["fH",function(){return AO0(this);},"fQ",function(b){return Om(this,b);},"i6",function(b,
c){return ATj(this,b,c);},"iF",function(b,c){ACR(this,b,c);},"uQ",function(){return AX2(this);},"ft",function(){return AW_(this);}],CA,0,E,[],1,3,0,0,AKp,0,CA,[],0,3,0,["f3",function(b){AW4(this,b);},"fX",function(b){AYv(this,b);},"eC",function(){return AW3(this);}],Nq,"BufferUnderflowException",6,B5,[],0,3,0,0,PH,"BufferOverflowException",6,B5,[],0,3,0,0,O7,"MalformedInputException",6,F2,[],0,3,0,["mo",function(){return AO4(this);}],Nm,"UnmappableCharacterException",6,F2,[],0,3,0,["mo",function(){return AOH(this);
}],Hp,0,E,[],0,0,0,["oL",function(){return Fl(this);}],Rs,0,Hp,[GR],0,0,0,["lC",function(){return Kr(this);}],SD,0,E,[],0,3,0,0,Z6,0,CI,[],0,3,0,["hL",function(){AMh(this);},"is",function(b){Zw(this,b);},"hF",function(b,c,d){ABA(this,b,c,d);}],Mj,0,CI,[],0,3,0,["hL",function(){AJ7(this);},"rm",function(){AQd(this);},"is",function(b){AMN(this,b);},"EF",function(b){AFN(this,b);},"hF",function(b,c,d){Z9(this,b,c,d);}],Qg,0,E,[GR],0,0,0,["oL",function(){return RZ(this);},"lC",function(){return ST(this);}],Kb,"InstantiationException",
8,Fu,[],0,3,0,0,P5,"IllegalAccessException",8,Fu,[],0,3,0,0,AGr,0,E,[],4,3,0,0,V5,0,E,[],4,3,0,0,XE,0,JP,[],0,3,0,0,R3,0,CI,[],0,3,0,["hL",function(){AEw(this);},"is",function(b){ADn(this,b);},"nI",function(b,c){AGJ(this,b,c);},"hF",function(b,c,d){ABT(this,b,c,d);}],Rg,0,Mj,[],0,3,0,["rm",function(){ATh(this);},"EF",function(b){AG3(this,b);}],LF,0,E,[],0,3,0,0,Uo,0,LF,[],0,3,0,0,N8,0,E,[],0,3,ARc,0,LO,0,CA,[],0,3,0,["fX",function(b){AYs(this,b);},"f3",function(b){ASg(this,b);},"eC",function(){return AOj(this);
}],KF,0,CA,[],0,3,0,["f3",function(b){AX5(this,b);},"fX",function(b){AXI(this,b);},"eC",function(){return AWH(this);}],KY,0,CA,[],0,3,0,["f3",function(b){APp(this,b);},"fX",function(b){ARE(this,b);},"eC",function(){return AV1(this);}],JA,0,CA,[],0,3,0,["f3",function(b){ATr(this,b);},"fX",function(b){ARi(this,b);},"eC",function(){return AOL(this);}],LZ,0,CA,[],0,3,0,["f3",function(b){ANk(this,b);},"fX",function(b){AZU(this,b);},"eC",function(){return ATY(this);}],MU,0,CA,[],0,3,0,["f3",function(b){ANd(this,b);
},"fX",function(b){AXD(this,b);},"eC",function(){return AM0(this);}],Kz,0,CA,[],0,3,0,["f3",function(b){AWU(this,b);},"fX",function(b){AOz(this,b);},"eC",function(){return ASD(this);}],KM,0,CA,[],0,3,0,["f3",function(b){AVw(this,b);},"fX",function(b){AW9(this,b);},"eC",function(){return AYF(this);}],Mo,0,CA,[],0,3,0,["f3",function(b){AZt(this,b);},"fX",function(b){ARj(this,b);},"eC",function(){return ANs(this);}],N4,0,CA,[],0,3,0,["f3",function(b){AYC(this,b);},"fX",function(b){ARe(this,b);},"eC",function()
{return AQX(this);}],Qj,0,E,[Dh],0,0,0,["fP",function(){return AN9(this);}],Qi,0,E,[Dh],0,0,0,["fP",function(){return AP6(this);}],AMa,0,E,[],0,3,0,0,T0,0,E,[],0,3,0,0,TT,0,E,[],0,3,0,0,ZL,0,E,[],0,3,0,0,AL_,0,E,[],0,3,0,0,AAC,0,E,[],0,3,0,0,Un,0,E,[EP],0,0,0,["oG",function(b,c){return ARB(this,b,c);}],Sv,0,D0,[],0,3,0,["kn",function(){AUC(this);},"rg",function(b){AIZ(this,b);}],Tp,0,D0,[],0,3,0,["n2",function(){U5(this);},"rE",function(b){AWC(this,b);},"kn",function(){ATo(this);},"rg",function(b){AFp(this,
b);}],AHq,0,D0,[],0,3,0,["kn",function(){AYV(this);},"rg",function(b){AIx(this,b);}],CF,"EnumArt",11,Ef,[],12,3,0,0]);
$rt_metadata([Rl,0,CI,[],0,3,0,["hL",function(){ABK(this);},"is",function(b){AKZ(this,b);},"hF",function(b,c,d){UR(this,b,c,d);}],M_,0,Ev,[],0,0,0,0,Hn,"MinecraftError",11,EA,[],0,3,0,0,Q8,0,E,[],0,3,0,0,RT,0,Hp,[GR],0,0,0,["lC",function(){return JD(this);}],La,0,Eu,[Dm],0,3,0,0,QN,0,E,[HM],3,3,0,0,Po,0,E,[QN],3,3,0,0,PZ,0,Ev,[Po],0,3,0,0,PM,0,E,[J8],3,3,0,0,Mx,0,E,[PM],3,3,0,0,AE2,0,E_,[E3,Dc,Mx],0,3,0,0,N5,0,E,[EP],0,0,0,0,Lh,0,E,[],0,3,0,0,Io,0,E,[Dm],0,3,0,["dQ",function(b){return AZh(this,b);},"eK",function()
{return AXr(this);},"kI",function(b){return Qs(this,b);}],Jw,0,E,[],3,3,0,0,Sc,0,E,[Jw],0,3,0,0,NB,0,E,[],3,3,0,0,Tr,0,E,[NB],0,3,0,0,Px,0,E,[Jw],0,3,0,0,R1,0,E,[],0,3,0,0,Pf,0,E,[],3,3,0,0,ABt,0,Fo,[Pf],0,3,0,0,ABn,0,E,[],0,3,0,0,LL,0,E,[],4,3,0,0,GF,0,E,[],1,3,0,0,AHA,0,GF,[],0,3,0,0,Yu,0,E,[],0,3,0,0,M3,0,GF,[],0,3,0,0,QE,0,E,[],0,3,0,0,RH,0,Eu,[Dm],0,3,0,0,Qn,0,E,[Dh],0,0,0,["fP",function(){return AU5(this);}],Qk,0,E,[Dh],0,0,0,["fP",function(){return AQL(this);}],Ov,0,E,[Dh],0,0,0,["fP",function(){return AYb(this);
}],Oz,0,E,[Dh],0,0,0,["fP",function(){return AW5(this);}],Ej,0,Ef,[],12,3,0,0,Ow,0,E,[Dh],0,0,0,["fP",function(){return AW$(this);}],Ox,0,E,[Dh],0,0,0,["fP",function(){return ATa(this);}],Ot,0,E,[Dh],0,0,0,["fP",function(){return AV5(this);}],Ou,0,E,[Dh],0,0,0,["fP",function(){return AUl(this);}],DW,0,E,[],1,3,0,0,Op,0,DW,[],0,3,0,0,Mf,0,E,[],0,3,0,0,PK,0,CI,[],0,3,0,["hL",function(){ZE(this);},"n2",function(){AIo(this);},"pV",function(){AQS(this);},"is",function(b){ACz(this,b);},"nI",function(b,c){YB(this,
b,c);},"hF",function(b,c,d){Xa(this,b,c,d);}],Hl,0,Ef,[],12,3,0,0,KL,0,E,[Iu,Dc],0,3,0,0,Jx,0,KL,[],0,0,0,0,AHG,0,Fo,[],0,3,0,["kq",function(){AQT(this);},"fO",function(b,c,d){AQx(this,b,c,d);},"r1",function(){AUV(this);},"mu",function(b){AP1(this,b);}],SZ,0,E,[],0,3,0,0,L2,"ArrayIndexOutOfBoundsException",8,BP,[],0,3,0,0]);
$rt_metadata([ALF,0,DW,[],0,3,0,0,B$,0,DW,[],0,3,0,0,BL,0,DW,[],0,3,0,0,Cd,0,DW,[],0,3,0,0,ADx,0,E,[],4,3,0,0,PC,"EntityBubbleFX",11,CJ,[],0,3,0,["dR",function(){U8(this);}],AAR,"EntitySmokeFX",11,CJ,[],0,3,0,["jR",function(b,c,d,e,f,g,h){AE$(this,b,c,d,e,f,g,h);},"dR",function(){AGM(this);}],Ob,"EntityExplodeFX",11,CJ,[],0,3,0,["jR",function(b,c,d,e,f,g,h){AMp(this,b,c,d,e,f,g,h);},"dR",function(){AAk(this);}],MG,"EntityFlameFX",11,CJ,[],0,3,0,["jR",function(b,c,d,e,f,g,h){AK_(this,b,c,d,e,f,g,h);},"s_",function(b)
{return AMK(this,b);},"dR",function(){WC(this);}],WM,"EntityLavaFX",11,CJ,[],0,3,0,["s_",function(b){return AE_(this,b);},"jR",function(b,c,d,e,f,g,h){ACb(this,b,c,d,e,f,g,h);},"dR",function(){AGe(this);}],ALV,"EntitySplashFX",11,Ie,[],0,3,0,0,GU,0,E,[],0,0,0,0,RA,0,E,[],0,3,0,0,XT,0,E,[],0,3,0,0,Rk,"EntityPickupFX",11,CJ,[],0,3,0,["jR",function(b,c,d,e,f,g,h){AG$(this,b,c,d,e,f,g,h);},"dR",function(){Wv(this);},"u$",function(){return AOb(this);}],U3,0,E,[],0,3,0,0,GJ,0,E,[],0,3,0,["dQ",function(b){return AUK(this,
b);},"eK",function(){return AOJ(this);}]]);
function $rt_array(cls,data){this.b3=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","@","0","","Timer hack thread","Player","fuckmojang123","randpasslol","Minecraft main thread","<init>","null",": ","    at ","Caused by: ","  at ","Index out of bounds","#version 300 es","/","UTF-8","overflow-x:hidden;overflow-y:hidden;","WebGL 2.0 is not supported in your browser (",")","NONE","ESCAPE","1","2","3","4","5","6","7","8",
"9","MINUS","EQUALS","BACK","TAB","Q","W","E","R","T","Y","U","I","O","P","LBRACKET","RBRACKET","RETURN","LCONTROL","A","S","D","F","G","H","J","K","L","SEMICOLON","APOSTROPHE","GRAVE","LSHIFT","BACKSLASH","Z","X","C","V","B","N","M","COMMA","PERIOD","SLASH","RSHIFT","MULTIPLY","LMENU","SPACE","CAPITAL","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","NUMLOCK","SCROLL","NUMPAD7","NUMPAD8","NUMPAD9","SUBTRACT","NUMPAD4","NUMPAD5","NUMPAD6","ADD","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD0","DECIMAL","F11","F12",
"F13","F14","F15","F16","F17","F18","KANA","F19","CONVERT","NOCONVERT","YEN","NUMPADEQUALS","CIRCUMFLEX","AT","COLON","UNDERLINE","KANJI","STOP","AX","UNLABELED","NUMPADENTER","RCONTROL","SECTION","NUMPADCOMMA","DIVIDE","SYSRQ","RMENU","FUNCTION","PAUSE","HOME","UP","PRIOR","LEFT","RIGHT","END","DOWN","NEXT","INSERT","DELETE","CLEAR","LMETA","RMETA","APPS","POWER","SLEEP","\n","/default.png","Pre startup","Startup","EARLY BETA TESTING!","THIS PROJECT IS STILL IN TESTING!\nTHERE WILL BE BUGS!","Post startup",
"/dirt.png","Loading...","GL_INVALID_ENUM","GL_INVALID_VALUE","GL_INVALID_OPERATION","GL_OUT_OF_MEMORY","Unknown Error","CONTEXT_LOST_WEBGL","########## GL ERROR ##########","@ ","Pre render","Post render"," fps, "," chunk updates","/terrain.png","Loading level","Generating level","Building terrain","Simulating world for a bit","P: ",". T: ","Respawning","main","_net_peytonplayz585_minecraft_infdev_IndexedDBFilesystem","Initialization Failed","EAGPKG!!","invalid epk file","<file>"," end","invalid file hash for ",
"</file>","/rain.png","Either src or dest is null","window.indexedDB was null or undefined","Can\'t compare "," to ","OPENED","LOCKED","ERROR","yee","End of stream reached","Malformed UTF-8 sequence","charsetName is null","Should never been thrown","Stream closed","footer is not found","Unexpected end of ZLIB input stream","random.splash","bubble","splash","random.fizz","Pos","Motion","Rotation","FallDistance","Fire","Air","OnGround","explode","random.hurt","random.bow","random.fuse","mob.sheep","mob.pig","mob.pigdeath",
"/gui/items.png","/water.png","Slot "," is already occupied by "," when adding ","stone","wood","gravel","grass","cloth","sand","New position "," is outside of range [0;","]","New limit ","The last float in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","open error","path","step.","liquid.water","lava","largesmoke","smoke","flame","fire.fire","Large chest","Get resource: ","Duplicate id: ","Furnace","Chest","Sign","MobSpawner","CONFLICT @ ","random.door_close","random.door_open",
"�","Replacement preconditions do not hold","The last byte in dst ","The last byte in src ","Index ","Capacity is negative: ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","fire.ignite","BIG_ENDIAN","LITTLE_ENDIAN","need dictionary","unknown compression method","unknown header flags set","incorrect data check","incorrect length check","incorrect header check","invalid window size","bad extra field length","header crc mismatch","IGNORE","REPLACE",
"REPORT","Action must be non-null","invalid stored block lengths","invalid block type","too many length or distance symbols","invalid bit length repeat","oversubscribed dynamic bit lengths tree","incomplete dynamic bit lengths tree","oversubscribed distance tree","incomplete distance tree","empty distance tree with lengths","oversubscribed literal/length tree","incomplete literal/length tree","invalid distance code","invalid literal/length code","newAction must be non-null","matrix is not supported while recording display list use tessellator class instead",
"projection matrix stack overflow","texture matrix stack overflow","modelview matrix stack overflow","projection matrix stack underflow","texture matrix stack underflow","modelview matrix stack underflow","only GL_QUADS supported in a display list","vertex format inconsistent in display list","keyup","Forward","Left","Back","Right","Jump","Inventory","Drop","Chat","Toggle fog","Save location","Load location","Music: ","OFF","ON","Sound: ","Invert mouse: ","Show FPS: ","Render distance: ","View bobbing: ","3d anaglyph: ",
"Limit framerate: ","Difficulty: ","Graphics: ","FAST","FANCY","FAR","NORMAL","SHORT","TINY","Peaceful","Easy","Normal","Hard","/level.dat","Data","RandomSeed","SpawnX","SpawnY","SpawnZ","Time","SizeOnDisk","Saving level","Saving chunks","LastPlayed","/level.dat_new","/level.dat_old","Failed to add entity ","All: ","DOHASDOSHIH!","TickNextTick list out of synch","%%","!!","/char.png","0123456789abcdef","C: ",". F: ",", O: ",", E: ","E: ",". B: ",", I: ","/terrain/sun.png","/terrain/moon.png","/clouds.png","Pre-beta!",
"As seen on TV!","Awesome!","100% pure!","May contain nuts!","Better than Prey!","More polygons!","Sexy!","Limited edition!","Flashing letters!","Made by Notch!","Coming soon!","Best in class!","When it\'s finished!","Absolutely dragon free!","Excitement!","More than 5000 sold!","One of a kind!","700+ hits on YouTube!","Indev!","Spiders everywhere!","Check it out!","Holy cow, man!","It\'s a game!","Made in Sweden!","Uses LWJGL!","Reticulating splines!","Minecraft!","Yaaay!","Alpha version!","Singleplayer!",
"Keyboard compatible!","Undocumented!","Ingots!","Exploding creepers!","That\'s not a moon!","l33t!","Create!","Survive!","Dungeon!","Exclusive!","The bee\'s knees!","Down with O.P.P.!","Closed source!","Classy!","Wow!","Not on steam!","9.95 euro!","Half price!","Oh man!","Awesome community!","Pixels!","Teetsuuuuoooo!","Kaaneeeedaaaa!","Now with difficulty!","Enhanced!","90% bug free!","Pretty!","12 herbs and spices!","Fat free!","Absolutely no memes!","Free dental!","Ask your doctor!","Minors welcome!","Cloud computing!",
"Legal in Finland!","Hard to label!","Technically good!","Bringing home the bacon!","Indie!","GOTY!","Ceci n\'est pas une title screen!","Euclidian!","Now in 3D!","Inspirational!","Herregud!","Complex cellular automata!","Yes, sir!","Played by cowboys!","OpenGL 1.1!","Thousands of colors!","Try it!","Age of Wonders is better!","Try the mushroom stew!","Sensational!","Hot tamale, hot hot tamale!","Play him off, keyboard cat!","Guaranteed!","Macroscopic!","Bring it on!","Random splash!","Call your mother!","Monster infighting!",
"Loved by millions!","Ultimate edition!","Freaky!","You\'ve got a brand new key!","Water proof!","Uninflammable!","Whoa, dude!","All inclusive!","Tell your friends!","NP is not in P!","Notch <3 Ez!","Music by C418!","Single player","Multi player","Play tutorial level","Options...","/gui/logo.png","Copyright Mojang Specifications. Do not distribute.","Free memory: ","% of ","MB","Allocated memory: ","% (","MB)","/particles.png","/gui/gui.png","/gui/icons.png","Minecraft Infdev","Minecraft Infdev (","Used memory: ",
"MB) of ","Notch","humanoid","http://www.minecraft.net/skin/",".png","Health","HurtTime","DeathTime","AttackTime","Score","Edit sign message:","mousedown","wheel","Slot","Crafting","/gui/inventory.png","/glsl/core.glsl","\n#define CC_a_color\n","#define CC_a_texture0\n","#define CC_lighting\n","#define CC_fog\n","#define CC_alphatest\n","#define CC_unit0\n","\n#define CC_VERT\n","\n\n","\n[/glsl/core.glsl][CC_VERT] ","broken shader file","\n#define CC_FRAG\n","\n[/glsl/core.glsl][CC_FRAG] ","a_position","a_texture0",
"a_color","\n[LINKER] ","matrix_m","matrix_p","matrix_t","colorUniform","normalUniform","light0Pos","light1Pos","fogColor","fogMode","fogStart","fogEnd","fogDensity","fogPremultiply","alphaTestF","tex0","texCoordV0","id","Count","Damage","The last int in dst ","buffer capacity does not equal image size","Respawn","Title menu","Game over!","Score: &e","Save and quit to title..","Back to game","Saving level..","Game menu","/armor/","_","chain","iron","diamond","gold","/item/sign.png","> "," <","Pig","/mob/spider_eyes.png",
"/mob/saddle.png","/mob/sheep_fur.png","/art/kz.png","random.drr","random.pop","/item/arrows.png","/item/cart.png","Wrong location! ","There\'s no such entity to remove: ","Attempted to place a tile entity where there was no entity tile!","Malformed input of length ","Unmappable characters of length ","Options","Controls...","Done","Controls","Select world","World","World ","- empty -"," ("," MB)","Delete world...","Cancel","Delete world","\'","\' will be lost forever!","Are you sure you want to delete this world?",
"Deleting World!","Please Wait...","(please wait)","%i","###","X#X","#X#","# #","##"," X ","#"," # ","X X","A "," B","#  ","## "," recipes","XXX","XX","X#"," #"," #X","# X","/gui/furnace.png","/gui/crafting.png","/gui/container.png","Kebab","Aztec","Alban","Aztec2","Bomb","Plant","Wasteland","Pool","Courbet","Sea","Sunset","Wanderer","Match","Bust","Stage","Void","SkullAndRoses","Fighters","Pointer","Yes","No","Arrow","Item","Painting","Mob","Monster","Creeper","Skeleton","Spider","Giant","Zombie","Sheep","PrimedTnt",
"FallingSand","Minecart","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ","xPos","zPos","The chunk file \'","\' was supposed to be at [",", ","], but the file contained a chunk from [","]. It\'s data will be moved to file \'","\', and a new empty chunk will be created for file \'","\' for [","Corrupt chunk \'","\' was found at: [","The file will be deleted","Failed to serialize chunk at [","] to byte array","LastUpdate","Blocks","SkyLight","BlockLight","HeightMap","TerrainPopulated","UTF Error","FILE","DIRECTORY","FALSE",
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_\'*!\"#%/()=+?[]{}<>","Sky","Block","buffer is null","Length out of bounds: ","Offset out of bounds: ","random.explode","OW KNOWS!"]);
Cp.prototype.toString=function(){return $rt_ustr(this);};
Cp.prototype.valueOf=Cp.prototype.toString;E.prototype.toString=function(){return $rt_ustr(AN7(this));};
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
=$rt_mainStarter(ALq);
(function(){var c;c=UJ.prototype;c.dispatchEvent=c.HN;c.addEventListener=c.Sd;c.removeEventListener=c.T9;c.getLength=c.Ps;c.get=c.MY;c.addEventListener=c.N2;c.removeEventListener=c.Js;c=Tb.prototype;c.handleEvent=c.f8;c=Th.prototype;c.handleEvent=c.f8;c=Ti.prototype;c.handleEvent=c.f8;c=Tf.prototype;c.handleEvent=c.f8;c=Tg.prototype;c.handleEvent=c.f8;c=Td.prototype;c.handleEvent=c.f8;c=Te.prototype;c.handleEvent=c.f8;c=Tc.prototype;c.handleEvent=c.f8;c=NQ.prototype;c.handleEvent=c.f8;c=NP.prototype;c.handleEvent
=c.f8;c=Ta.prototype;c.stateChanged=c.UI;c=Qr.prototype;c.handleEvent=c.fP;c=Qq.prototype;c.handleEvent=c.fP;c=Qp.prototype;c.handleEvent=c.fP;c=Qo.prototype;c.handleEvent=c.f8;c=WI.prototype;c.getLength=c.Tq;c.get=c.LN;c=NT.prototype;c.handleEvent=c.f8;c=NS.prototype;c.handleEvent=c.f8;c=NR.prototype;c.onTimer=c.Cr;c=Qe.prototype;c.onTimer=c.Cr;c=Qj.prototype;c.handleEvent=c.fP;c=Qi.prototype;c.handleEvent=c.fP;c=Qn.prototype;c.handleEvent=c.fP;c=Qk.prototype;c.handleEvent=c.fP;c=Ov.prototype;c.handleEvent
=c.fP;c=Oz.prototype;c.handleEvent=c.fP;c=Ow.prototype;c.handleEvent=c.fP;c=Ox.prototype;c.handleEvent=c.fP;c=Ot.prototype;c.handleEvent=c.fP;c=Ou.prototype;c.handleEvent=c.fP;})();
})();

//# sourceMappingURL=app.js.map