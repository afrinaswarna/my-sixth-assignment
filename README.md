### Answer to the question no. 1:
**The main difference between var, let, and const are :**

*var*
1. var declarations are globally scoped or function scoped.
2. var variables can be re-assigned and re-declared within its scope.
3. var declarations can be hoisted to the top of their scope before initialization but values are not and return undefine.
4. can be declared without being initialized.

*let*
1. let variables are block scoped means variables are only accessible within a block of code ({}) where it is declared.
2. let variables can be re-assigned but not be re-declared within the same scope.
3. let Variables are hoisted to the top but not initialized. they goes temporal dead zone and gives referenceError if access before declare.
4. can be declared without being initialized.

*const*
1. const variables are block scoped like let variables.
2. But variables are neither re-assigned nor re-declared.
3. const variables are also hoisted but are not initialized. they goes temporal dead zone and return referenceError if access before declare.
4. must be initialized during declaration.

### Answer to the Question no. 2:
**the main difference between map(), forEach(), and filter() are**

*map()*
1. This array method modify the main array and returns a new array.
2. This method works on each elements of an array and applies a provided callback function over each elements of the array.
3. Thus original array remains unchanged and a new modified array is created.
4. This methods used for transforming data.


*forEach()*
1. array method that does not return a new array but return undefine.
2. this method works on each elements of an array and applies a particular callBack function over each elements.
3. this method used for modifying elements in place or  interacting with external systems.

*filter()*
1. This method works on each elements of an array and applies a particular condition over each elements and return a  new array containing elements those maintain that particular condition.
2. This method used for selecting elements from an array based on a particular condition.
3. This method does not change the original array.

### Answer to the question no. 3:
**ArrowFunction**
Arrow function is the shorter and cleaner form of traditional functions which is introduced in ES6 in 2015. In the syntax of arrow function it omits the function keyword and includes an arrow (=>) symbol.
Arrow functions have different different characteristics in terms of the use.
1. If the function have only one parameter and single line expression, no need to add first braces () and return keyword. Beacuse the functions result is  implicitly returned.
             const arrowFunc = num => num*2
2. If the function have more than one parameters than first braces () are needed for parameters and also needed return keyword if the function have multi line expressions within the curly braces {}.
             const arrowFunc2 = (a,b) =>{
                return a+b
             }
3. If an arrow function has no parameters, you must use empty parentheses () before the arrow (=>).

             const hello = () =>{
                console.log('hello')
             }
4. Arrow functions don’t have their own this.They use the this value from the surrounding context.             

### Answer to the question no. 4:
**Destructuring**
Destructuring is a easy process of accessing values of an array or a object. This process extracts values in a shorter and cleaner way than traditional method.
*Array destructuring*
1. from an array we can easily access the values by their index.Destructuring method makes the process more easier.
      const numbers = [1,2,3]

      <!-- in traditional way -->
      const a = numbers[0]
      const b = numbers[1]
      const c = numbers[2]
      
      <!-- in ES6 -->
      const [x,y,z] = numbers

      console.log(x) // 1
      console.log(y) // 2
      console.log(z) // 3

2. By destructuring we can also skip an element from an array
     const [x,,z] = [1,2,3]
     console.log(x,z) // 1,3
3. We also can use default values :
     const [a,b=4] = [1]     
     console.log(a,b) // 1,4

 *Object destructuring*
 1. We can extract values from an object by matching property name
     const myself = {name:Afrina,age:27}    

     <!-- in traditional way -->
     const name = myself.name
     const age = myself.age

      <!-- ES6 destructuring -->
      const { name, age } = person;

       console.log(name); // Afrina
       console.log(age);  // 27

  2.    We also rename  variables and can use default values in objects

  ### Answer to the question no. 5:
**Template literals in ES6**
Template literals, which is introduced in ES6 in 2015, it provide way to create and manipulate strings in JavaScript more easily compared to traditional string concatenation or single/double quotes. They are enclosed by backtick (`) characters.In previous strings use (\n) to write multiline code.But ES6 provides template literals to write multi line code by simply pressing Enter within the backticks.It also added String Interpolation feature which allows embedding expressions directly within the string using the $ {expression} syntax.

*string concatenation vs template literals  in ES6.*
1. Syntax:Traditional Strings are wrote by ("Hello " + name + "!" ) this way.Where template literals are wrote by (`Hello ${name}!`) these way.

2. Multiline Strings:In traditional string use explicit escape sequences (\n) for newlines.In template literals multi lines created by simply pressing Enter within the backticks (``).

3. String Interpolation:String Concatenation (old way) uses + to join strings and variables.Template Literals (new ES6 way) use backticks ` and ${ } for variables/expressions.




