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
function DCMIdclick() {

	$.post("../Client/GetClient", {
		cno: $('#DCMId').textbox('getValue')
	}, function(data) {
		if (data == '') $.messager.alert('警告', '顾客编号无效');
		$("#DCMcno").textbox('setValue', data.cno);
		$("#DCMcno").textbox('textbox').css("font-size", "18pt");
		$("#DCMcname").textbox('setValue', data.cname);
		$("#DCMcname").textbox('textbox').css("font-size", "18pt");
		$("#DCMcsex").textbox('setValue', data.csex);
		$("#DCMcsex").textbox('textbox').css("font-size", "18pt");
		$("#DCMcage").textbox('setValue', data.cage);
		$("#DCMcage").textbox('textbox').css("font-size", "18pt");
		$("#DCMcaddress").textbox('setValue', data.caddress);
		$("#DCMcaddress").textbox('textbox').css("font-size", "18pt");
		$("#DCMcphone").textbox('setValue', data.cphone);
		$("#DCMcphone").textbox('textbox').css("font-size", "18pt");
		$("#DCMcsymptom").textbox('setValue', data.csymptom);
		$("#DCMcsymptom").textbox('textbox').css("font-size", "18pt");
		$("#DCMmno").textbox('setValue', data.mno);
		$("#DCMmno").textbox('textbox').css("font-size", "18pt");
		$("#DCMano").textbox('setValue', data.ano);
		$("#DCMano").textbox('textbox').css("font-size", "18pt");
		$("#DCMcdate").textbox('setValue', data.cdate);
		$("#DCMcdate").textbox('textbox').css("font-size", "18pt");
		$("#DCMcremark").textbox('setValue', data.cremark);
		$("#DCMcremark").textbox('textbox').css("font-size", "18pt");
	});
}
function DCMclickDelete(){
	$.get("../Client/DeleteClient", {
		cno: $('#DCMId').textbox('getValue')
	}, function(data) {
		/*optional stuff to do after success */
		$.messager.alert('提示','删除成功');  
	});
	 
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
		if (data == '') $.messager.alert('警告', '顾客编号无效');
		$("#MAMano").textbox('setValue', data.ano);
		$("#MAMano").textbox('textbox').css("font-size", "18pt");
		$("#MAManame").textbox('setValue', data.aname);
		$("#MAManame").textbox('textbox').css("font-size", "18pt");
		$("#MAMasex").textbox('setValue', data.asex);
		$("#MAMasex").textbox('textbox').css("font-size", "18pt");
		$("#MAMaphone").textbox('setValue', data.aphone);
		$("#MAMaphone").textbox('textbox').css("font-size", "18pt");
		$("#MAMaremark").textbox('setValue', data.aremark);
		$("#MAMaremark").textbox('textbox').css("font-size", "18pt");
	});
}
function MAMclickDelete(){
	$('#MAMform').form({    
    url:'../Agency/ModifyAgency',    
    onSubmit: function(){    
        // do some check    
        // return false to prevent submit;    
    },    
    success:function(data){    
        $.messager.alert('提示', '修改成功'); 
    }    
});    
// submit the form    
$('#MAMform').submit();  
	 
}
// 删除经办人信息end
// 删除药品信息begin
function DMMclick(){
		if(access.indexOf("信息修改功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();    
         }
    	if(!$('#output').tabs('exists','删除药品信息')) {
				     $('#output').tabs('add',{ 
				     	// id:'ECM',   
					    title:'删除药品信息',    
					      // fit:true,
					    href:'./tabs/medicine/Delete.html',
					    closable:true
					});
				 }
		else
		{
		$('#output').tabs('select', '删除药品信息');
		}
}
function DMMIdclick() {

	$.post("../Medicine/GetMedicine", {
		mno: $('#DMMId').textbox('getValue')
	}, function(data) {
		if (data == '') $.messager.alert('警告', '顾客编号无效');
		$("#DMMmno").textbox('setValue', data.mno);
		$("#DMMmno").textbox('textbox').css("font-size", "18pt");
		$("#DMMmname").textbox('setValue', data.mname);
		$("#DMMmname").textbox('textbox').css("font-size", "18pt");
		$("#DMMmmode").textbox('setValue', data.mmode);
		$("#DMMmmode").textbox('textbox').css("font-size", "18pt");
		$("#DMMmefficacy").textbox('setValue', data.mefficacy);
		$("#DMMmefficacy").textbox('textbox').css("font-size", "18pt");
	});
}
function DMMclickDelete(){
	$.get("../Medicine/DeleteMedicine", {
		mno: $('#DMMId').textbox('getValue')
	}, function(data) {
		/*optional stuff to do after success */
		$.messager.alert('提示','删除成功');  
	});
	 
}
// 删除药品信息end
// 信息录入end