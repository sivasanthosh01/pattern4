var pattern=true;
for(i=1;i<6;i++){
    for(j=1;j<=i;j++){
        // document.write(j);
		if(pattern==true){
			document.write("1");
			pattern=false;
		}
		else if(pattern==false){
			document.write("0");
			pattern=true;
    }	
	}
    for(k=1;k<6;k++){
        document.write("&nbsp");
    }
    document.write("<br>");
}
