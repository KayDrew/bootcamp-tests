function regCheck(reg,loc){
  
  return (reg.endsWith("GP") && loc=="GP")|| (reg.endsWith("L")&&loc=="L")|| 
   ( reg.endsWith("EC")&& loc=="EC")|| (reg.endsWith("MP")&&loc=="MP") ;
}