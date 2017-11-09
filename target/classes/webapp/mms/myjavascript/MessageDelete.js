// 信息删除begin
// <!-- 信息删除-DCM-DUM-DMM+MessageDelete  -->
// 删除顾客信息begin
function DCMclick(){
		if(access.indexOf("信息删除功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();	
         }
    	if(!$('#output').tabs('exists','删除顾客信息')) {
				     $('#output').tabs('add',{ 
				     	// id:'ECM',   
					    title:'删除顾客信息',    
					      // fit:true,
					    href:'./tabs/client/Delete.html',
					    closable:true
					});
				 }
		else
		{
		$('#output').tabs('select', '删除顾客信息');
		}
}
// web1.0单个删除接口

// function DCMIdclick() {

// 	$.post("../Client/GetClient", {
// 		cno: $('#DCMId').textbox('getValue')
// 	}, function(data) {
// 		if (data == ''){
// 			$.messager.alert('警告', '顾客编号无效');
// 			return ;
// 		}
// 		$('#DCMdialog').dialog('open');
// 		$("#DCMcno").textbox('setValue', data.cno);
// 		$("#DCMcno").textbox('textbox').css("font-size", "18pt");
// 		$("#DCMcname").textbox('setValue', data.cname);
// 		$("#DCMcname").textbox('textbox').css("font-size", "18pt");
// 		$("#DCMcsex").textbox('setValue', data.csex);
// 		$("#DCMcsex").textbox('textbox').css("font-size", "18pt");
// 		$("#DCMcage").textbox('setValue', data.cage);
// 		$("#DCMcage").textbox('textbox').css("font-size", "18pt");
// 		$("#DCMcaddress").textbox('setValue', data.caddress);
// 		$("#DCMcaddress").textbox('textbox').css("font-size", "18pt");
// 		$("#DCMcphone").textbox('setValue', data.cphone);
// 		$("#DCMcphone").textbox('textbox').css("font-size", "18pt");
// 		$("#DCMcsymptom").textbox('setValue', data.csymptom);
// 		$("#DCMcsymptom").textbox('textbox').css("font-size", "18pt");
// 		$("#DCMmno").textbox('setValue', data.mno);
// 		$("#DCMmno").textbox('textbox').css("font-size", "18pt");
// 		$("#DCMano").textbox('setValue', data.ano);
// 		$("#DCMano").textbox('textbox').css("font-size", "18pt");
// 		$("#DCMcdate").textbox('setValue', data.cdate);
// 		$("#DCMcdate").textbox('textbox').css("font-size", "18pt");
// 		$("#DCMcremark").textbox('setValue', data.cremark);
// 		$("#DCMcremark").textbox('textbox').css("font-size", "18pt");
// 	});
// }
// function DCMclickDelete(){
// 	$.get("../Client/DeleteClient", {
// 		cno: $('#DCMId').textbox('getValue')
// 	}, function(data) {
// 		/*optional stuff to do after success */
// 		$.messager.alert('提示','删除成功');
// 		$('#DCMdialog').dialog('close'); 
// 	});
	 
// }
// 删除顾客信息end
// 删除经办人信息begin
function DAMclick(){
		if(access.indexOf("信息删除功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();	
         }
    	if(!$('#output').tabs('exists','删除经办人信息')) {
				     $('#output').tabs('add',{ 
				     	// id:'ECM',   
					    title:'删除经办人信息',    
					      // fit:true,
					    href:'./tabs/agency/Delete.html',
					    closable:true
					});
				 }
		else
		{
		$('#output').tabs('select', '删除经办人信息');
		}
}
// web1.0单个删除
// function DAMIdclick() {

// 	$.post("../Agency/GetAgency", {
// 		ano: $('#DAMId').textbox('getValue')
// 	}, function(data) {
// 		if (data == ''){
// 			$.messager.alert('警告', '顾客编号无效');
// 			return ;
// 		}
// 		$('#DAMdialog').dialog('open');
// 		$("#DAMano").textbox('setValue', data.ano);
// 		$("#DAMano").textbox('textbox').css("font-size", "18pt");
// 		$("#DAManame").textbox('setValue', data.aname);
// 		$("#DAManame").textbox('textbox').css("font-size", "18pt");
// 		$("#DAMasex").textbox('setValue', data.asex);
// 		$("#DAMasex").textbox('textbox').css("font-size", "18pt");
// 		$("#DAMaphone").textbox('setValue', data.aphone);
// 		$("#DAMaphone").textbox('textbox').css("font-size", "18pt");
// 		$("#DAMaremark").textbox('setValue', data.aremark);
// 		$("#DAMaremark").textbox('textbox').css("font-size", "18pt");
// 	});
// }
// function DAMclickDelete(){
// 	$.get("../Agency/DeleteAgency", {
// 		ano: $('#DAMId').textbox('getValue')
// 	}, function(data) {
// 		/*optional stuff to do after success */
// 		$.messager.alert('提示',data); 
// 		$('#DAMdialog').dialog('close'); 
// 	});
	 
// }
// 删除经办人信息end
// 删除药品信息begin
function DMMclick(){
		if(access.indexOf("信息删除功能") < 0 ){
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
// web1.0单个删除
// function DMMIdclick() {

// 	$.post("../Medicine/GetMedicine", {
// 		mno: $('#DMMId').textbox('getValue')
// 	}, function(data) {
// 		if (data == ''){
// 			$.messager.alert('警告', '顾客编号无效');
// 			return ;
// 		}
// 		$('#DMMdialog').dialog('open');
// 		$("#DMMmno").textbox('setValue', data.mno);
// 		$("#DMMmno").textbox('textbox').css("font-size", "18pt");
// 		$("#DMMmname").textbox('setValue', data.mname);
// 		$("#DMMmname").textbox('textbox').css("font-size", "18pt");
// 		$("#DMMmmode").textbox('setValue', data.mmode);
// 		$("#DMMmmode").textbox('textbox').css("font-size", "18pt");
// 		$("#DMMmefficacy").textbox('setValue', data.mefficacy);
// 		$("#DMMmefficacy").textbox('textbox').css("font-size", "18pt");
// 	});
// }
// function DMMclickDelete(){
// 	$.get("../Medicine/DeleteMedicine", {
// 		mno: $('#DMMId').textbox('getValue')
// 	}, function(data) {
// 		/*optional stuff to do after success */
// 		$.messager.alert('提示',data);
// 		$('#DMMdialog').dialog('close'); 
// 	});
	 
// }
// 删除药品信息end
// 信息录入end