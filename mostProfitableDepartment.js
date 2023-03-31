function mostProfitableDepartment(list){
  
  var productMap={};
  var profitable="";
  
  for(var i=0;i<list.length;++i){
        
  var item=list[i].department;
    var price=list[i].sales;
    
   if(productMap[item]===undefined){
     
    productMap[item]=price;
    }   
    
   else if(productMap.hasOwnProperty(item)){
     
    productMap[item]=productMap[item]+price;
   }     
    
  }
   
  var arr=Object.values(productMap);
 var highSale= Math.max(...arr);  
    
    for(dept in productMap){
    
      if(productMap[dept]===highSale){
      
      profitable=dept;
      }
    
    }   
 
  return profitable;
  
}
 

      
function mostProfitableDay(list){
  
  var productMap={};
  var profitable="";
  
   for(var i=0;i<list.length;++i){
   
     var item=list[i].day;
     var price=list[i].sales;
     
   if(productMap[item]===undefined ){
     
     productMap[item]=price;
   
   }
     
     
     else if (productMap.hasOwnProperty(item)){
     
       productMap[item]=productMap[item]+price;
     }
   }
  
  var arr= Object.values(productMap);
  var highSale=Math.max(...arr);
  
  for(day in productMap){
  
  if(productMap[day]===highSale){
  
  profitable=day;
  }
     
  }
  
 
  return profitable;
}