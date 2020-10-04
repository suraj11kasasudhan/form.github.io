

    

    function myFunction5()
    {
    
        var p=String( document.getElementById("percentage").value);
        document.getElementById("percent").innerHTML = p;
        
    }

    function myFunction1()
    {
        var name=String (document.getElementById("name").value);
        document.getElementById("name1").innerHTML = name;
    
    }

    function myFunction2()
    {
       
        
        var class1=String( document.getElementById("class2").value);
        document.getElementById("class1").innerHTML = class1;
      
    }

    function myFunction3()
    {
       
        var rollno=String( document.getElementById("rollno").value);
         document.getElementById("rollno1").innerHTML =rollno;
      
    }
    function birth()
   {

    var b=String( document.getElementById("birth").value);
    document.getElementById("birthday").innerHTML =b;


   }

     
    
    function pdfconverter()
    {
        var doc= new jsPDF();
        var req=document.querySelector('#text1')
        doc.fromHTML(req,15,20)
        doc.save("formm.pdf")
    }
   


