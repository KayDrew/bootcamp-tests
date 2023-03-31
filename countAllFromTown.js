function  countAllFromTown(regNumbers,regStart){

var list1=regNumbers.split(", ");
  var list2= String(list1);
  var list=list2.split(",");
  var count=0;
  
  for(var i=0;i<list.length;++i){
  
  if(list[i].startsWith(regStart)){
  
  count++;
  }
  }
  
  return count;
}