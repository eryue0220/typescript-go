//// [tests/cases/conformance/types/thisType/thisTypeAccessibility.ts] ////

//// [thisTypeAccessibility.ts]
class MyClass {
    private p: number = 123;
    protected pp: number = 123;
    public ppp: number = 123;
    private static sp: number = 123;
    protected static spp: number = 123;
    public static sppp: number = 123;
}

interface MyClass {
    extension1(p: number): void;
    extension2(p: number): void;
    extension3(p: number): void;
}

class MyGenericClass<T> {
    private p: T;
    protected pp: T;
    public ppp: T;
    private static sp: number;
    protected static spp: number;
    public static sppp: number;
}

MyClass.prototype.extension1 = function (this: MyClass, p: number) { 
    this.p = p;
    this.pp = p;
    this.ppp = p;
    MyClass.sp = p;
    MyClass.spp = p;
    MyClass.sppp = p;
}

MyClass.prototype.extension2 = function<T extends MyClass> (this: T, p: number) { 
    this.p = p;
    this.pp = p;
    this.ppp = p;
    MyClass.sp = p;
    MyClass.spp = p;
    MyClass.sppp = p;
}

function extension3<T extends MyClass> (this: T, p: number) { 
    this.p = p;
    this.pp = p;
    this.ppp = p;
    MyClass.sp = p;
    MyClass.spp = p;
    MyClass.sppp = p;
}

MyClass.prototype.extension3 = extension3;

function extension4<T extends number>(this: MyGenericClass<T>, p: T) {
    this.p = p;
    this.pp = p;
    this.ppp = p;
    MyGenericClass.sp = p;
    MyGenericClass.spp = p;
    MyGenericClass.sppp = p;
}


//// [thisTypeAccessibility.js]
class MyClass {
    p = 123;
    pp = 123;
    ppp = 123;
    static sp = 123;
    static spp = 123;
    static sppp = 123;
}
class MyGenericClass {
    p;
    pp;
    ppp;
    static sp;
    static spp;
    static sppp;
}
MyClass.prototype.extension1 = function (p) {
    this.p = p;
    this.pp = p;
    this.ppp = p;
    MyClass.sp = p;
    MyClass.spp = p;
    MyClass.sppp = p;
};
MyClass.prototype.extension2 = function (p) {
    this.p = p;
    this.pp = p;
    this.ppp = p;
    MyClass.sp = p;
    MyClass.spp = p;
    MyClass.sppp = p;
};
function extension3(p) {
    this.p = p;
    this.pp = p;
    this.ppp = p;
    MyClass.sp = p;
    MyClass.spp = p;
    MyClass.sppp = p;
}
MyClass.prototype.extension3 = extension3;
function extension4(p) {
    this.p = p;
    this.pp = p;
    this.ppp = p;
    MyGenericClass.sp = p;
    MyGenericClass.spp = p;
    MyGenericClass.sppp = p;
}
