// Kads rezultats bus pec datu tipu pārvēršānas
// Rezultatu uzrakstit blakus komentāros



String(123)    //123 
String(-12.3)     //-12.3 
String(null)      // 0  
String(undefined)  //undefined    
String(true)         //true 
String(false)        //false
String(function () {})  //
String({})             //
String({ key: 42 })    //key: 42 
String([])            //0  
String([1, 2])        // 1, 2  


Number("123")     //123      
Number("123.4")      //123.4  
Number("123,4")         //NaN
Number("")           //0   
Number(null)          //0  
Number(undefined)   //  undefined  
Number(true)      //1      
Number(false)      //0     
Number(function () {})  //result of the function
Number({})          // NaN    
Number([])           //NaN   
Number([1])          //1   
Number([1, 2])       //1,2   


Boolean("")     //false       
Boolean("string")   // true    
Boolean("false")   //  true   
Boolean(0)       //false       
Boolean(42)     //  true      
Boolean(-42)      //true      
Boolean(NaN)    //false        
Boolean(null)      // false     
Boolean(undefined)   // false   
Boolean(function () {}) // true
Boolean({})          //true   
Boolean({ key: 42 })   //true 
Boolean([])       // false      
Boolean([1, 2])   // true  