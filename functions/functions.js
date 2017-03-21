var FUNAPP={};
//functions in javascript are objects
//every function is created with two additional hidden
//properties : function's context and the code


//function literal
FUNAPP.add =function(a,b){
    //console.log(this);
    function bla(){
       // console.log(this);
    }
    bla();
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
//console.log(FUNAPP.myObject.value);

FUNAPP.myObject.increment(2);
//console.log(FUNAPP.myObject.value);

//Function invocation Pattern
//When a function is not the property of an object,
// then it is invoked as a function
FUNAPP.sum =FUNAPP.add(3,4)
//console.log(FUNAPP.sum);
//When a function is invoked with this pattern, 
//this is bound to the global object
//this was a mistake in the design of the language 
//A consqequence of this error is that a method cannot employ an
//inner function to help it do it;s work because the inner function
//does not share the method's access to help the object as its this 
//is bound to the wrong value

//Workaround to solve this problem 
FUNAPP.myObject.double =function(){
    var that =this;
//    console.log(this);
    var helper =function(){
    //console.log(that);
    that.value =FUNAPP.add(that.value,that.value);
  //      console.log(this);
    }
    helper();
}
FUNAPP.myObject.double();
console.log(FUNAPP.myObject.value);