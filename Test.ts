class A {
    constructor(name: string) {
        console.log("Constructor Of A--->" + name);
    }
}
class B extends A {
    constructor() {
        super("Saurabh");
        console.log("Constructor Of B");
    }
}
class C extends B {
    constructor() {
        super();
        console.log("Constructor Of C");
    }
}
class D extends C {
    constructor() {
        super();
        console.log("Constructor Of D");
    }
}

let obj = new D();