function main(parameter){
    output=[];
    /* Start your code here, you can access parameter values as normal array starting from index 1 e.g. var i = parameters[1], you can write to output value as normal array starting from index 1 e.g. output[1]= 1+1;*/
    var MachineName=parameter[1];
    var data=parameter[2];
    var data1=parameter[3];
    var latest_value=0;
    var old_value=0;
    var latest_time='';
    var old_time='';
    var shift='';
    var finArr=[];
    data.data.forEach(function(v){
    	if (v.Machine_Name==MachineName){
        	latest_value=v.Alarm_Value;
        	latest_time=v.Time_Stamp;        
        }    
    });
    data1.data.forEach(function(v){
    	if (v.Machine_Name==MachineName){
        	old_value=v.Alarm_Value;
        	old_time=v.Time_Stamp;        
        }    
    });
    if (latest_value!=old_value && latest_time!=old_time && latest_value==1 && old_value==3 ||latest_value!=old_value && latest_time!=old_time && latest_value==0 && old_value==3 ||latest_value!=old_value && latest_time!=old_time && latest_value==0 && old_value==2||latest_value!=old_value && latest_time!=old_time && latest_value==1 && old_value==2){
        if (Number(latest_time.substring(11,13))<20){
        	output[1]=JSON.stringify({"Name":MachineName,"Stat":latest_value,"Timer":latest_time.substring(0,10)+" "+latest_time.substring(11,19),"Shift":'A'});    
        	finArr.push({"Name":MachineName,"Stat":latest_value,"Timer":latest_time.substring(0,10)+" "+latest_time.substring(11,19),"Shift":'A'});
        	output[2]=JSON.stringify(finArr);
        }
        else if (Number(latest_time.substring(11,13))>20){
        	output[1]=JSON.stringify({"Name":MachineName,"Stat":latest_value,"Timer":latest_time.substring(0,10)+" "+latest_time.substring(11,19),"Shift":'B'});    
        	finArr.push({"Name":MachineName,"Stat":latest_value,"Timer":latest_time.substring(0,10)+" "+latest_time.substring(11,19),"Shift":'B'});
        	output[2]=JSON.stringify(finArr);
        }
        
    }
    else{
        if (Number(latest_time.substring(11,13))<20){
        	output[1]='';    
        	finArr.push({"Name":MachineName,"Stat":latest_value,"Timer":latest_time.substring(0,10)+" "+latest_time.substring(11,19),"Shift":'A'});
        	output[2]=JSON.stringify(finArr);
        }
        else if (Number(latest_time.substring(11,13))>20){
        	output[1]='';    
        	finArr.push({"Name":MachineName,"Stat":latest_value,"Timer":latest_time.substring(0,10)+" "+latest_time.substring(11,19),"Shift":'B'});
        	output[2]=JSON.stringify(finArr);
        }
    }
    /* end your code here*/
    return output;
}