
//ejercicio 1

function sigma(x){
    var sum = 0
    for (var i =1; i<=x; i++){
       sum = i+sum;
    }
     return sum;
  }
  z=sigma(6)
  console.log(z)

  //ejercicio 2

  function factorial(x){
    var sum = 1
    for (var i =1; i<=x; i++){
       sum = i*sum;
    }
     return sum;
  }
  z=factorial(5)
  console.log(z)

  //ejercicio 3

  function fibonacci(x){

    var fibo= 1;
    var fiboant= 0;
    
    if(x==0 || x==1){
      return x
    }
      else
        for(i=2; i<=x; i++){
          fibo=fiboant+fibo;
          fiboant=fibo-fiboant;
      }
      return fibo
  }
  z=fibonacci(6)
  console.log(z)

  
  //ejercicio 4

  function penultimo(x){
  
    if(x.length<2){
      return "null"
    }
    else{
      return x[x.length-2]
    }
    
  }
  z=penultimo([4,2,3])
  console.log(z)

  //ejercicio 5

  function nultimo(x,y){
  
    if(x.length<y){
      return "null"
    }
    else{
      return x[x.length-y]
    }
    
  }
  z=nultimo([5,2,3,6,4,9,7],3)
  console.log(z)

  //ejercicio 6 
 
  function segundomasgrande(arr){
    var mayor = arr[0]
    var mayor2= arr[0]
    
     if(arr.length<2){
      return "null"
     }
  
    for (var i=0; i<arr.length; i++){
      
      if(mayor < arr[i]){
        mayor2 = mayor;
        mayor = arr[i];
      } 
      else
        if(arr[i] > mayor2){
           mayor2 = arr[i];
           
        }
    
    }
   
    return mayor2
   
     
  }
  z=segundomasgrande([1,2,4,9,1,15,2,4,]);
  console.log(z)

  //ejercicio 7

  function doblepar(x) {
    var doblepar=[]
   
    for(var i=0; i<x.length; i++){
      if( i% 2 == 0){ 
        doblepar.push(x[i]);
        doblepar.push(x[i]);
      
      }
      else{
        doblepar.push(x[i]);
      }
    }
    return doblepar ;
  }
  z = doblepar([4,'Ulysses', 42,'false','grande', 22, 'juancarlos']);
  console.log(z);



