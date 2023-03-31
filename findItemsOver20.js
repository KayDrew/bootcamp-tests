function  findItemsOver20(list){

  var over20=[];
  
for(var i=0;i<list.length;++i){

  var product=list[i];
  
  if(product.qty>20){
  
  over20.push(product);
  }

}

  return over20;
}

function  findItemsOver(list,quantity){
  
  var overThreshold=[];

for(var i=0;i<list.length;++i){
  
  var product=list[i];

if(product.qty>quantity){
  
  overThreshold.push(product);
}

}
return overThreshold;
}