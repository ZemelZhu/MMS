// 信息修改begin
// <!-- 信息修改-MCM-MAM-MMM+MessageModify  -->
// 修改顾客信息begin
function MCMclick(){
		if(access.indexOf("信息修改功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();    
         }
    	if(!$('#output').tabs('exists','修改顾客信息')) {
				     $('#output').tabs('add',{ 
				     	// id:'ECM',   
					    title:'修改顾客信息',    
					      // fit:true,
					    href:'./tabs/client/Modify.html',
					    closable:true
					});
				 }
		else
		{
		$('#output').tabs('select', '修改顾客信息');
		}
}
function MCMIdclick() {
	$.post("../Client/GetClient", {
		cno: $('#MCMId').textbox('getValue')
	}, function(data) {
		if (data == ''){
			$.messager.alert('警告', '顾客编号无效');
			return ;
		}
		$('#MCMdialog').dialog('open');
		$("#mccid").val(data.cid);
		$("#mccno").textbox('setValue', data.cno);
		$("#mccno").textbox('textbox').css("font-size", "18pt");
		$("#mccname").textbox('setValue', data.cname);
		$("#mccname").textbox('textbox').css("font-size", "18pt");
		$("#mccsex").combobox('setValue', data.csex);
		$("#mccsex").combobox('textbox').css("font-size", "18pt");
		$("#mccage").textbox('setValue', data.cage);
		$("#mccage").textbox('textbox').css("font-size", "18pt");
		$("#mccaddress").textbox('setValue', data.caddress);
		$("#mccaddress").textbox('textbox').css("font-size", "15pt");
		$("#mccphone").textbox('setValue', data.cphone);
		$("#mccphone").textbox('textbox').css("font-size", "18pt");
		$("#mccsymptom").textbox('setValue', data.csymptom);
		$("#mccsymptom").textbox('textbox').css("font-size", "18pt");
		$("#mcmno").combobox('setValue', data.mno);
		$("#mcmno").combobox('textbox').css("font-size", "18pt");
		$("#mcano").combobox('setValue', data.ano);
		$("#mcano").combobox('textbox').css("font-size", "18pt");
		$("#mccdate").datebox('setText', data.cdate);
		$("#mccdate").datebox('textbox').css("font-size", "18pt");
		$("#mccremark").textbox('setValue', data.cremark);
		$("#mccremark").textbox('textbox').css("font-size", "18pt");
	});
}
function MCMclickModify(){
	 if($("#mccno").val().length>10||$("#mccno").val().length==0) {
        $.messager.alert('提示', '编号不能长度大于10且不为空'); 
        return ;
    }
    if($("#mccname").val().length>8) {
        $.messager.alert('提示', '姓名不能长度大于8'); 
        return ;
    }
    if($("#mccphone").val().length>20) {
        $.messager.alert('提示', '电话不能长度大于20'); 
        return ;
    }
    if($("#mccage").val().length>4) {
        $.messager.alert('提示', '年龄不能长度大于4'); 
        return ;
    }
    if($("#mccaddress").val().length>50) {
        $.messager.alert('提示', '地址不能长度大于50'); 
        return ;
    }
    if($("#mccsymptom").val().length>50) {
        $.messager.alert('提示', '症状不能长度大于50'); 
        return ;
    }
     if($("#mccremark").val().length>50) {
        $.messager.alert('提示', '备注不能长度大于50'); 
        return ;
    }
	$('#MCMform').form({    
    url:'../Client/ModifyClient',  
    onSubmit: function(){    
        // do some check    
        // return false to prevent submit;    
    },    
    success:function(data){    
       $.messager.alert('提示', data); 
       $('#MCMdialog').dialog('close'); 
    }    
});    
// submit the form    
$('#MCMform').submit();  

	 
}
// 修改顾客信息end
// 修改经办人信息begin
function MAMclick(){
		if(access.indexOf("信息修改功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();    
         }
    	if(!$('#output').tabs('exists','修改经办人信息')) {
				     $('#output').tabs('add',{ 
				     	// id:'ECM',   
					    title:'修改经办人信息',    
					      // fit:true,
					    href:'./tabs/agency/Modify.html',
					    closable:true
					});
				 }
		else
		{
		$('#output').tabs('select', '修改经办人信息');
		}
}
function MAMIdclick() {
	
	$.post("../Agency/GetAgency", {
		ano: $('#MAMId').textbox('getValue')
	}, function(data) {
		if (data == ''){
			$.messager.alert('警告', '顾客编号无效');
			return ;
		}
		$('#MAMdialog').dialog('open');
		$("#maaid").val(data.aid);
		$("#maano").textbox('setValue', data.ano);
		$("#maano").textbox('textbox').css("font-size", "18pt");
		$("#maaname").textbox('setValue', data.aname);
		$("#maaname").textbox('textbox').css("font-size", "18pt");
		$("#maasex").combobox('setValue', data.asex);
		$("#maasex").combobox('textbox').css("font-size", "18pt");
		$("#maaphone").textbox('setValue', data.aphone);
		$("#maaphone").textbox('textbox').css("font-size", "18pt");
		$("#maaremark").textbox('setValue', data.aremark);
		$("#maaremark").textbox('textbox').css("font-size", "18pt");
	});
}
function MAMclickDelete(){
	  if($("#maano").val().length>8||$("#maano").val().length==0) {
        $.messager.alert('提示', '编号不能长度大于8且不为空'); 
        return ;
    }
    if($("#maaname").val().length>8) {
        $.messager.alert('提示', '姓名不能长度大于8'); 
        return ;
    }
    if($("#maaphone").val().length>12) {
        $.messager.alert('提示', '电话不能长度大于12'); 
        return ;
    }
   
     if($("#maaremark").val().length>50) {
        $.messager.alert('提示', '备注不能长度大于50'); 
        return ;
    }
	$('#MAMform').form({    
    url:'../Agency/ModifyAgency',    
    onSubmit: function(){    
        // do some check    
        // return false to prevent submit;    
    },    
    success:function(data){    
        $.messager.alert('提示', data); 
        $('#MAMdialog').dialog('close'); 
    }    
});    
// submit the form    
$('#MAMform').submit();  

	 
}
// 修改经办人信息end
// 修改药品信息begin
function MMMclick(){
		if(access.indexOf("信息修改功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();    
         }
    	if(!$('#output').tabs('exists','修改药品信息')) {
				     $('#output').tabs('add',{ 
				     	// id:'ECM',   
					    title:'修改药品信息',    
					      // fit:true,
					    href:'./tabs/medicine/Modify.html',
					    closable:true
					});
				 }
		else
		{
		$('#output').tabs('select', '修改药品信息');
		}
}
function MMMIdclick() {

	$.post("../Medicine/GetMedicine", {
		mno: $('#MMMId').textbox('getValue')
	}, function(data) {
		if (data == ''){
			$.messager.alert('警告', '药品编号无效');
			return ;
		}
		$('#MMMdialog').dialog('open');
		$("#mmmid").val(data.mid);
		$("#mmmno").textbox('setValue', data.mno);
		$("#mmmno").textbox('textbox').css("font-size", "18pt");
		$("#mmmmode").combobox('setValue', data.mmode);
		$("#mmmmode").textbox('textbox').css("font-size", "18pt");
		$("#mmmname").textbox('setValue', data.mname);
		$("#mmmname").textbox('textbox').css("font-size", "18pt");
		$("#mmmefficacy").textbox('setValue', data.mefficacy);
		$("#mmmefficacy").textbox('textbox').css("font-size", "18pt");
	});
}
function MMMclickModify(){
	$('#MMMform').form({    
    url:'../Medicine/ModifyMedicine',    
    onSubmit: function(){    
        // do some check    
        // return false to prevent submit;    
    },    
    success:function(data){    
        $.messager.alert('提示', data); 
        $('#MMMdialog').dialog('close'); 
    }    
});    
// submit the form    
$('#MMMform').submit();  
	 
}
// 删除药品信息end
// 信息录入end