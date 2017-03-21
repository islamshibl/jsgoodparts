var FUNAPP={};
//functions in javascript are objects
//every function is created with two additional hidden
//properties : function's context and the code


//function literal
FUNAPP.add =function(a,b){
    return a+b;
}

//The Method invocation Pattern
/*When a function is stored as a property of an object,
we call it a method. When a method is invoked, 
this is bound to that object. */
FUNAPP.myObject={
    value :0,
    increment :function(inc){
        this.value += typeof inc ==='number'?inc :1;
    }
};
FUNAPP.myObject.increment();
console.log(FUNAPP.myObject.value);

FUNAPP.myObject.increment(2);
console.log(FUNAPP.myObject.value);
