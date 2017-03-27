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
//console.log(FUNAPP.myObject.value);

//Constructor invocation Pattern
FUNAPP.Quo =function(string){
    this.status =string;
  //  console.log(this);
};
FUNAPP.Quo.prototype.get_status =function(){
  return this.status;  
};
FUNAPP.myQue =new FUNAPP.Quo("confused");
FUNAPP.myQue1 =new FUNAPP.Quo("happy");

//console.log(FUNAPP.myQue.get_status());

//Apply Invocation pattern

//Apply method lets us construct an array of arguments to use 
//to invoke a function.
//it also lets us choose the value of this 

FUNAPP.array =[3,4];
FUNAPP.SUM=FUNAPP.add.apply(null,FUNAPP.array);
//console.log(FUNAPP.SUM);

FUNAPP.statusObject ={
    status :"A-OK"
}
//statusObject does not inherit from Que.prototype
//but we can invoke the get_status method
FUNAPP.status= FUNAPP.Quo.prototype.get_status.apply(FUNAPP.statusObject);
//console.log(FUNAPP.status);

//arguments
FUNAPP.sum_args= function(){
    var sum=0;
    for(var l=0;l<arguments.length; l++){
        sum +=arguments[l];
    }
        return sum;    
}
//return
FUNAPP.aFun=function(){
    var x =10;
}
FUNAPP.bFun =new FUNAPP.aFun();
//console.log(FUNAPP.bFun);
//Return this (the new object)
FUNAPP.cFun=FUNAPP.aFun();
//console.log(FUNAPP.cFun);
//Return undefined
FUNAPP.dFun=function(){
    return 10;
}
//console.log(FUNAPP.dFun());
//Retuen 10;
//console.log(new FUNAPP.dFun)
// return this ( new object)

//Exceptions
FUNAPP.addExce =function(a,b){
    if(typeof a !=='number' ||typeof b !=='number'){
        throw{
            name :'TypeError',
            message :'addExce needs numbers'
        };
        return a +b;
    }
}

FUNAPP.tryIt =function(){
    try{
        FUNAPP.addExce("Seven");
    }
    catch(e){
        console.log(e.name+ ": "+e.message);
    }
}
//FUNAPP.tryIt();

//Augmenting types
//Ex . By augmenting Function.prototype we can make 
//a method abailable to all functions
Function.prototype.method =function(name,func){
   if(!this.prototype[name]){
    this.prototype[name]=func;
}
    return this;
};

Number.method('pp',function(){
    return this +2;
});
console.log((10).pp());
String.method('trim',function(){
    return this.replace(/^\s+|\s+$/g, '');
});
console.log('"'+"    meat   ".trim()+'"');
//Scope
var foo =function(){
    var a=3,b=5;
    console.log("a:"+a);
    var bar =function(){
        var b=7, c=11;
        a +=b +c;
    console.log("a:"+a +",b:"+b+",c:"+c);
    };
    bar();
    console.log("a:"+a +",b:"+b);
};
foo();
