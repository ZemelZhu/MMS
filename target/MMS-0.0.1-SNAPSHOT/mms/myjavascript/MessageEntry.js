// 信息录入begin
// <!-- 信息录入-ECM-EAM-EMM+MessageEntry   -->
// 录入顾客信息begin
function ECMclick(){
        if(access.indexOf("信息录入功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();    
         }
    	if(!$('#output').tabs('exists','录入顾客信息')) {
				     $('#output').tabs('add',{ 
				     	// id:'ECM',   
					    title:'录入顾客信息',    
					      // fit:true,
					     href:'./tabs/client/Entry.html',
					    closable:true
					});
				 }
        else
        {
        $('#output').tabs('select', '录入顾客信息');
        }
}

function ECMclickEntry() {

	
    if($("#eccno").val().length>10||$("#eccno").val().length==0) {
        $.messager.alert('提示', '编号不能长度大于10且不为空'); 
        return ;
    }
    if($("#eccname").val().length>8) {
        $.messager.alert('提示', '姓名不能长度大于8'); 
        return ;
    }
    if($("#eccphone").val().length>20) {
        $.messager.alert('提示', '电话不能长度大于20'); 
        return ;
    }
    if($("#eccage").val().length>4) {
        $.messager.alert('提示', '年龄不能长度大于4'); 
        return ;
    }
    if($("#eccaddress").val().length>50) {
        $.messager.alert('提示', '地址不能长度大于50'); 
        return ;
    }
    if($("#eccsymptom").val().length>50) {
        $.messager.alert('提示', '症状不能长度大于50'); 
        return ;
    }
     if($("#eccremark").val().length>50) {
        $.messager.alert('提示', '备注不能长度大于50'); 
        return ;
    }
            	$('#ECMform').form({    
                url:'../Client/SaveClient',    
                onSubmit: function(){    
                    // do some check    
                    // return false to prevent submit;    
                },    
                success:function(data){    
                    // alert("aSome");
                    $.messager.alert('提示', data); 
                }    
            });    
            // submit the form    
            $('#ECMform').submit();  
}
// 录入顾客信息end
// 录入经办人信息begin
function EAMclick(){
        if(access.indexOf("信息录入功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();    
         }
    	if(!$('#output').tabs('exists','录入经办人信息')) {
				     $('#output').tabs('add',{ 
					    title:'录入经办人信息',    
					     href:'./tabs/agency/Entry.html',
					    closable:true
					});
				 }
        else
        {
        $('#output').tabs('select', '录入经办人信息');
        }
}
function EAMclickEntry() {
    if($("#eaano").val().length>8||$("#eaano").val().length==0) {
        $.messager.alert('提示', '编号不能长度大于8且不为空'); 
        return ;
    }
    if($("#eaaname").val().length>8) {
        $.messager.alert('提示', '姓名不能长度大于8'); 
        return ;
    }
    if($("#eaaphone").val().length>12) {
        $.messager.alert('提示', '电话不能长度大于12'); 
        return ;
    }
   
     if($("#eaaremark").val().length>50) {
        $.messager.alert('提示', '备注不能长度大于50'); 
        return ;
    }
	$('#EAMform').form({    
    url:'../Agency/SaveAgency',    
    onSubmit: function(){    
        // do some check    
        // return false to prevent submit;    
    },    
    success:function(data){   

        $.messager.alert('提示', data); 
    }    
});    
// submit the form    
$('#EAMform').submit();  
}
// 录入经办人信息end
// 录入药品信息begin
function EMMclick(){
        if(access.indexOf("信息录入功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();    
         }
    	if(!$('#output').tabs('exists','录入药品信息')) {
				     $('#output').tabs('add',{ 
				     	// id:'ECM',   
					    title:'录入药品信息',    
					      // fit:true,
					    href:'./tabs/medicine/Entry.html',
					    closable:true
					});
				 }
        else
        {
        $('#output').tabs('select', '录入药品信息');
        }
 }
 function EMMclickEntry() {
    if($("#emmno").val().length>12||$("#emmno").val().length==0) {
        $.messager.alert('提示', '编号不能长度大于12且不为空'); 
        return ;
    }
    if($("#emmname").val().length>50) {
        $.messager.alert('提示', '名称不能长度大于50'); 
        return ;
    }
    
    if($("#emmefficacy").val().length>50) {
        $.messager.alert('提示', '功效不能长度大于50'); 
        return ;
    }
    
	$('#EMMform').form({    
    url:'../Medicine/SaveMedicine',    
    onSubmit: function(){    
        // do some check    
        // return false to prevent submit;    
    },    
    success:function(data){    
        $.messager.alert('提示', data); 
    }    
});    
// submit the form    
$('#EMMform').submit();  
}
// 录入药品信息end
// 信息录入end