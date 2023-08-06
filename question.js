// 1) Differnce between let and const keyword?
       
     Ans :

       i)   var and let create variables that can be reassigned another value.
	   ii)  const creates "constant" variables that cannot be reassigned another value.
        
// 2) Which methods are used to avoid Shallow copy?
            
	 Ans :
			
	    i)   spread operator
        ii)  object assign
        iii) json parse/json stringify 
		
//3) Difference between map and foreach ?

     Ans :

    map():
          i) The map() method returns a new array,
          ii) The map() method is used to transform the elements of array, 
    foreach():
          i) whereas the forEach() method does not return a new array.
          ii) whereas the forEach() method is used to loop through the elements of an array

// 4) Write the states of promises.

     Ans :

          i) fulfilled
          ii) rejected
          ii) pending
		
// 5) Difference between promise chaining and promise all.

     Ans :
         i) Promise.all():
		       * resolves only when all given promises resolve, and will reject immediately if any of the promises reject.
         ii)Promise Chaining:
		       * The function inside then captures the value returned by the previous promise. 

//  6) What is the final value of obj.

		// const obj = {foo:1}
		// obj.bar = 2;
		// console.log(obj)

		ans:
		{foo:1,bar:2}

// 7) const speed = "quick";

         // console.log(`The ${speed} brown fox jumps over the lazy dog`)

         ans:
		 The quick brown fox jumps over the lazy dog
		 
//8) var obj1 = {
		//     id: 1,
		//     company: "GFG"
		// };
		// var obj2 = obj1;
		// obj2.id = 2;
		// console.log(obj1.id);
		// console.log(obj2.id);
    
	    Ans :
		2
		2
	
//9)
		 /*var input = [3,4,5,6]
			//How to achieve this output?

		  var c = input.map((a,b)=>{

			return a+b
		  })

		  console.log(c)*/
		  
		  Ans:
		  [3,5,7,9]
		  
//10) Which method is used to check all values and return boolean value?

	Ans: every() and some()	
	
//11) const price = [35,66,234,56,88,90,22]
How to find minimum value?

	Answer: const price = [35,66,234,56,88,90,22]
               let x=Math.min(...price)
	       console.log(x)
		
		O.P:22
		
		
//12) ES6 Published in ----
	Answer: 2015


//13)
         var employee =[{name : "Karuppasamy",age : 24, Salary : 25000, level : "junior" },
         {name : "Samy",age : 21, Salary : 20000, level : "junior" },
         {name : "Kaviya",age : 22,Salary : 18000,level : "junior"},
         {name : "Naresh", age : 45,Salary : 100000, level : "senior" },
         {name : "Prem",age : 24,Salary : 50000,level : "senior" }];
	   
	   Output : ["Naresh","Prem"];
    
	Write a code ....	
		   Answer:
		   var output=[]
           employee.filter((value) => {
           if(value.level==="senior"){
                output.push(value.name)
            }
        })
        console.log(output)
		
//14. const rem = 0
    rem++;
    rem++;
    console.log(rem);
	
	Answer:Uncaught TypeError: Assignment to constant variable.

//15. function a(){
    console.log("Hi")

    }

    function b(){
    console.log("Fabevy")
    }

    a(b)
	
	Answer:Hi	
	
//16.  var num = 0;
    console.log(num++);
    console.log(num++);
    console.log(++num);
    console.log(num);

   Ans:0
       1
	   3
	   3
	   
//17. Solve the armstrong logic in async/await
 
	Answer: let x=153,let y=x,let z=x,let count=0, let ans=0;
       function a(){
           return new Promise((res,rej)=>{
           while(a!=0){
              var rem=a%10;
              a=(a-rem)/10;
	           }
	           res(count)
            })
       }
	   function b(count){
           return new Promise((res,rej)=>{
           while(a!=0){
              var rem=a%10;
              a=(a-rem)/10;
			  ans+=(rem**count)
	           }
                res(ans)			   
            })
       }
	   function c(ans){
           return new Promise((res,rej)=>{
              if(ans==z)
			  {
			      res("Armstrong")
			  }
			  else
			  {
			      rej("Not Armstrong")
			  }
	         
               		   
            })
       }
	   
	    async function hi(){
        try{
            let d=await a()
			  console.log(a);
            let e=await  b(a)
			   console.log(e)
            let f=await c(e)
			 console.log(f)
            
           }
        catch(error){
            console.log(error)
              }
       }

    hi()	   
	
	
//18.  let obj1 = { "name" : "Monisha" }
    let obj = Object.assign({},obj1);
    obj1.position = "QAE"
    console.log(obj,obj1);
	
	Answer: obj= {"name":"monisha"} 
	        obj1= {"name":"monisha","position":"QAE"}	
			
			

//19. let person = {name: "Linda"}
    const members = [person];
    person = null;
    console.log(person)
	
	Ans: null	

	
//20. Which methods are used to solve async function into sync?

    Ans: callback
         callback hell
	 promise
	 promise Chaining
	 promise all
	 async await
        call,Bind,apply	