$(document).ready(function(){

	$("select.home").change(function(){
        var selectedCountry = $(this).children("option:selected").val();
        if(selectedCountry== 1)
       {
        	$("#myTable").css("display","");
           $(".rangeArea").css("display","");

        			      	var xhttp= new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
 	if(this.readyState == 4 && this. status==200)
 	{
 		console.log(xhttp.responseText);
 		var response= JSON.parse(xhttp.responseText);
 		// console.log(response.sale);
        }
        var sales = response.sale;


 		var showdata = "";
 		
 		for(var i=0; i<sales.length;i++) 
 		{
 			showdata+="<tr><td>"+sales[i].title+"</td><td class='price'>"+sales[i].price+"</td><td>"+sales[i].description+"</td></tr>";

 		}
 			
 		$("#myTable").append(showdata);

 	}
 	xhttp.open("GET","lib/data.json", true);
 xhttp.send();
        	

 $("#btnFilter").click( function() {
 	
    var price = parseInt($('#filter').val());
    if(price!="")
    {
    	
    	 $("#myTable tr").filter(function() {
         $(this).toggle($(this).text().substring().indexOf(price) > -1)	
    });
    	
    }  
    else{
    	  
          alert("Please Enter Your valid Amount");
    }
  });
 }
 
 });
 });

$(document).ready(function(){

  $("select.home").change(function(){
        var selectedCountry = $(this).children("option:selected").val();
        if(selectedCountry== 2)
        {
          $("#myTable").css("display","");
           $(".rangeArea").css("display","");

                      var xhttp= new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this. status==200)
  {
    console.log(xhttp.responseText);
    var response= JSON.parse(xhttp.responseText);
    // console.log(response.sale);
        }
        var sales = response.rent;


    var showdata = "";
    
    for(var i=0; i<sales.length;i++) 
    {
      showdata+="<tr><td>"+sales[i].title+"</td><td class='price'>"+sales[i].price+"</td><td>"+sales[i].description+"</td></tr>";

    }
      
    $("#myTable").append(showdata);

  }
  xhttp.open("GET","lib/data.json", true);
 xhttp.send();
          

 $("#btnFilter").click( function() {
  
    var price = parseInt($('#filter').val());
    if(price!=" ")
    {
      
       $("#myTable tr").filter(function() {
         $(this).toggle($(this).text().substring().indexOf(price) > -1) 
    });
      
    }  
    else{
        
  alert("Please Enter Your Valid amount");
    }
  });
 }
 
 });
 });



