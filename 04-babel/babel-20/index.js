//Abstract Methods without classes
//NOT the best way, using abstract without prototypes or classes
class abstractClass  {
    abstractMethod(){}
    concreteMethod(){abstractMethod()}
    
    //this.abstractMethod(); // < made generic with this 
    
}

let specializedClass = new (abstractClass);
specializedClass.abstractMethod = function () {
    console.log('Now i know what to do');
}

specializedClass.concreteMethod();

/*
let abstractClass = {
    abstractMethod: function () { // i don't know yet what i'm going to do  },
    concreteMethod: function () {
        this.abstractMethod(); // < made generic with this 
    }
}

let specializedClass = Object.create(abstractClass);
specializedClass.abstractMethod = function () {
    console.log('Now i know what to do');
}

specializedClass.concreteMethod()
*/