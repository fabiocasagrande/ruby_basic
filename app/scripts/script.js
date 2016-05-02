

var base={
	randNumb:"",
	
	randNumb1:"",
	randNumb2:"",
	randNumb3:"",
	randNumb4:"",
	randNumb5:"",
	randName1:"",
	randName2:"",
	randName3:"",
	randName4:"",
	
	randName:"",
	randBool:"",
	randTemplate:"",
	randID:"",
	answ:"",
	randomQuestion:"",
	arr:[],
	countt:0,
}

base.getRandomName = function(){
var names=[["dorsey"],["trojan"],["hortense"],["chavous"],["randa"],["kemmer"],["nelle"],["vives"],["kristie"],["spang"],["rickie"],["whitehouse"],["jay"],["ells"],["fredda"],["nardi"],["deandrea"],["rosado"],["eartha"],["fusco"],["michele"],["beyer"],["dacia"],["mclennon"],["lenard"],["palumbo"],["homer"],["kron"],["kris"],["saragosa"],["nia"],["tompkins"],["amos"],["hargreaves"],["lawana"],["mangum"],["danna"],["raygoza"],["mei"],["junious"],["megan"],["membreno"],["ignacio"],["anguiano"],["maureen"],["beaudet"],["livia"],["heaney"],["Isela"],["mikels"],["magda"],["maxton"],["enrique"],["kinley"],["latina"],["eifert"],["felecia"],["rodrique"],["kazuko"],["crean"]];
var randint=this.getRandomInt(0,names.length);

return names[randint];
}

base.getRandomNumb = function(){
	return this.getRandomInt(0,9);
}


base.initRandomVars = function(){
	
	this.randNumb1=this.getRandomNumb();
	this.randNumb2=this.getRandomNumb();
	this.randNumb3=this.getRandomNumb();
	this.randNumb4=this.getRandomNumb();
	this.randNumb5=this.getRandomNumb();
	this.randName1=this.getRandomName();
	this.randName2=this.getRandomName();
	if(this.randName2==this.randName2){
		this.randName2=this.getRandomName();
	}	
	this.randName3=this.getRandomName();
	if(this.randName3==this.randName2 || this.randName3==this.randName1 ){
		this.randName3=this.getRandomName();
	}	
	this.randName4=capitalize(this.getRandomName());
	if(this.randName4==this.randName3 ||this.randName34==this.randName2 || this.randName4==this.randName1 ){
		this.randName4=capitalize(this.getRandomName());
	}	
	
}


base.generateQA = function(){
	
	var te=this.getRandomNumb();
	var q1="Call the 'm1' method using the default argument.";
	var q2="Call the 'm1' method using the value '"+te+"' for the argument";
	var q3="True or False: '"+this.randName1+"' is an instance variable";
	var q4="True or False: '"+this.randName2+"' is an instance variable";
	var q5="True or False: '"+this.randName3+"' is an instance variable";
	var q6="True or False: '"+this.randName4+"' is an instance variable";
	var q7="True or False: '"+this.randName1+"' is a class constant";
	var q8="True or False: '"+this.randName2+"' is a class constant";
	var q9="True or False: '"+this.randName3+"' is a class constant";
	var q10="True or False: '"+this.randName4+"' is a class constant";
	var q11="How would you access the class constant '"+this.randName4+"' ?";
	var q12="True or False:  'm1' is a class method";
	var q13="True or False:  'm2' is a class method";
	var q14="Call the 'm2' method using the value '"+te+"' for the argument";
	var q15="Assign the value '"+te+"' to '"+this.randName1+"'";
	var q16="True or False: the expression 'x."+this.randName1+"' is legal";
	var q17="True or False: the expression 'x."+this.randName1+"=' is legal";
	var q18="True or False: the expression 'x."+this.randName2+"' is legal";
	var q19="True or False: the expression 'x.m1' is legal";
	var q20="True or False: the expression 'x."+this.randName2+"=' is legal";
	var q21="True or False: the expression 'x.m2' is legal";	
	var q22="True or False: '"+this.randName1+"' is a class variable";
	var q23="True or False: '"+this.randName2+"' is a class variable";
	var q24="True or False: '"+this.randName3+"' is a class variable";
	var q25="True or False: '"+this.randName4+"' is a class variable";
	var a1="x.m1";
	var a2="x.m1("+te+")";
	var a3="true";
	var a4="true";
	var a5="false";
	var a6="false";
	var a7="false";
	var a8="false";
	var a9="false";
	var a10="true";
	var a11="Foo::"+this.randName4;
	var a12="false";
	var a13="true";
	var a14="Foo.m2("+te+")";
	var a15="x."+this.randName1+" ="+te;
	var a16="true";
	var a17="true";
	var a18="true";
	var a19="true";
	var a20="false";
	var a21="false";
	var a22="false";
	var a23="false";
	var a24="true";
	var a25="false";
	var quesst=[[q1],[q2],[q3],[q4],[q5],[q6],[q7],[q8],[q9],[q10],[q11],[q12],[q13],[q14],[q15],[q16],[q17],[q18],[q19],[q20],[q21],[q22],[q23],[q24],[q25]];
	var anns=[[a1],[a2],[a3],[a4],[a5],[a6],[a7],[a8],[a9],[a10],[a11],[a12],[a13],[a14],[a15],[a16],[a17],[a18],[a19],[a20],[a21],[a22],[a23],[a24],[a25]];
	var inter=this.getRandomInt(0,25);
	this.randomQuestion=quesst[inter];
	this.answ=anns[inter];
	
}

function capitalize(str){
	
	str = str.toString().toLowerCase().replace(/\b[a-z]/g, function(letter) { return cpL(letter);});
	return str;
	
	
}

function cpL(letter){
switch(letter) {
    case 'q':
        return 'Q';
       
    case 'w':
          return 'W';
	case 'e':
        return 'E';
       
    case 'r':
          return 'R';
	case 't':
        return 'T';
       
    case 'y':
          return 'Y';
		  
	case 'u':
        return 'U';
       
    case 'i':
          return 'I';
	case 'o':
        return 'O';
       
    case 'p':
          return 'P';
	case 'a':
        return 'A';
       
    case 's':
          return 'S';	


	case 'd':
        return 'D';
       
    case 'f':
          return 'F';
	case 'g':
        return 'G';
       
    case 'h':
          return 'H';
	case 'j':
        return 'J';
       
    case 'k':
          return 'K';
		  
		  
		  
	case 'l':
        return 'L';
       
    case 'z':
          return 'Z';
	case 'x':
        return 'X';
       
    case 'c':
          return 'C';
	case 'v':
        return 'V';
       
    case 'b':
          return 'B';

		  
	case 'n':
        return 'N';
       
    case 'm':
          return 'M';	  
		  
		  
} 

}









base.getRandomBool = function(){

var bool=[["true"],["false"],["false"]];
var randint=this.getRandomInt(0,bool.length-1);
return bool[randint];
}


base.getRandomTemplate = function(){
if(this.countt==3){
	this.countt=0;
}
var tmpl=[["NONE"],["SOME"],["ID"]];

//var randint=this.getRandomIntTemp(0,tmpl.length);
return tmpl[this.countt++];

}

base.getRandomID = function(){

return this.getRandomNumb()+""+this.getRandomNumb()+""+this.getRandomNumb()+""+this.getRandomNumb()+""+this.getRandomNumb();

}


base.getRandomIntTemp = function(min, max) {
	 
	 var i=0;
	 
	 while(i<this.arr.length){
		 
		 if(this.arr[i]==""){
			 
			 var temp=Math.floor(Math.random() * (max - min)) + min;
			 var j=0;
			 while(j<this.arr.length){
				 if(this.arr[j]==temp){
					 j++;
				 }else{
					 this.arr[i]=temp;
					 return temp;
				 }
	
			 }
		 }
		 i++;
		 
	 }
	 
	 this.arr=[];
	 
	this.arr[0]=Math.floor(Math.random() * (max - min)) + min;
	
	return this.arr[0];

}







/*
*Generates a random integer
*/
 base.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

 base.clear = function(){
	
	this.randNumb="";
	this.randName="";
	this.randBool="";
	this.randTemplate="";
	 this.randID="";
	 this.answ="";
	 this.randomQuestion="";
 }

 base.getRandomQuestion = function(){
	 
	 var type=this.getRandomTemplate();
	 
	 if(type=="NONE"){
		this.answ="2";
		return" val s = Name("+this.getRandomName()+", NONE, "+this.getRandomName()+")";
	 }
	 
	 else if(type=="SOME"){
		this.answ="1";
		return" val s = Name("+this.getRandomName()+", SOME "+this.getRandomName()+" , "+this.getRandomName()+")";
	 }
	 
	  else if(type=="ID"){
		 
		 this.answ="3";
		return" val s = ID("+this.getRandomID()+")";
		 
	 }
 }






base.generateListAnswers = function(){
	

	this.randNumb=this.getRandomNumb();
	this.randName=this.getRandomName();
	this.randBool=this.getRandomBool();
	
	this.randomQuestion=this.getRandomQuestion();
	

}

base.generateResult= function(){
	this.clear();
	this.initRandomVars();
	this.generateQA();
	//this.generateListAnswers();
	

	
}










