// 信息查询begin
// <!-- 信息查询-SCM-SAM-SMM+MessageSearch  -->
// 查询顾客信息begin
function SCMclick() {
	if(access.indexOf("信息查询功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();    
         }
	if (!$('#output').tabs('exists', '查询顾客信息')) {
		$('#output').tabs('add', {
			// id:'SCM',   
			title: '查询顾客信息',
			href: './tabs/client/Search.html',

			closable: true
		});
	}
	else
	{
		$('#output').tabs('select', '查询顾客信息');
	}
}
function SCMIdclick(scmcno) {

	$.post("../Client/GetClient", {
		cno: scmcno
	}, function(data) {
		if (data == ''){
			$.messager.alert('警告', '顾客编号无效');
			return ;
		}
		$('#SCMdialog').dialog('open');
		$("#SCMcno").textbox('setValue', data.cno);
		$("#SCMcno").textbox('textbox').css("font-size", "18pt");
		$("#SCMcname").textbox('setValue', data.cname);
		$("#SCMcname").textbox('textbox').css("font-size", "18pt");
		$("#SCMcsex").textbox('setValue', data.csex);
		$("#SCMcsex").textbox('textbox').css("font-size", "18pt");
		$("#SCMcage").textbox('setValue', data.cage);
		$("#SCMcage").textbox('textbox').css("font-size", "18pt");
		$("#SCMcaddress").textbox('setValue', data.caddress);
		$("#SCMcaddress").textbox('textbox').css("font-size", "18pt");
		$("#SCMcphone").textbox('setValue', data.cphone);
		$("#SCMcphone").textbox('textbox').css("font-size", "18pt");
		$("#SCMcsymptom").textbox('setValue', data.csymptom);
		$("#SCMcsymptom").textbox('textbox').css("font-size", "18pt");
		$("#SCMmno").textbox('setValue', data.mno);
		$("#SCMmno").textbox('textbox').css("font-size", "18pt");
		$("#SCMano").textbox('setValue', data.ano);
		$("#SCMano").textbox('textbox').css("font-size", "18pt");
		$("#SCMcdate").textbox('setValue', data.cdate);
		$("#SCMcdate").textbox('textbox').css("font-size", "18pt");
		$("#SCMcremark").textbox('setValue', data.cremark);
		$("#SCMcremark").textbox('textbox').css("font-size", "18pt");
	});
}
// 查询顾客信息end
// 查询经办人信息begin
function SAMclick() {
	if(access.indexOf("信息查询功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();    
         }
	if (!$('#output').tabs('exists', '查询经办人信息')) {
		$('#output').tabs('add', {
			// id:'SUM',   
			title: '查询经办人信息',
			href: './tabs/agency/Search.html',
			closable: true
		});
	}
	else
	{
		$('#output').tabs('select', '查询经办人信息');
	}
}

function SAMIdclick() {
	
	$.post("../Agency/GetAgency", {
		ano: $('#SAMId').textbox('getValue')
	}, function(data) {
		if (data == ''){
			$.messager.alert('警告', '编号无效');
			return ;
		}
		$('#SAMdialog').dialog('open');
		$("#SAMano").textbox('setValue', data.ano);
		$("#SAMano").textbox('textbox').css("font-size", "18pt");
		$("#SAManame").textbox('setValue', data.aname);
		$("#SAManame").textbox('textbox').css("font-size", "18pt");
		$("#SAMasex").textbox('setValue', data.asex);
		$("#SAMasex").textbox('textbox').css("font-size", "18pt");
		$("#SAMaphone").textbox('setValue', data.aphone);
		$("#SAMaphone").textbox('textbox').css("font-size", "18pt");
		$("#SAMaremark").textbox('setValue', data.aremark);
		$("#SAMaremark").textbox('textbox').css("font-size", "18pt");
	});
}
// 查询经办人信息end
// 查询药品信息begin
function SMMclick() {
	if(access.indexOf("信息查询功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();    
         }
	if (!$('#output').tabs('exists', '查询药品信息')) {
		$('#output').tabs('add', {
			// id:'SMM',   
			title: '查询药品信息',
			href: './tabs/medicine/Search.html',
			closable: true
		});
	}
	else
	{
		$('#output').tabs('select', '查询药品信息');
	}
}

function SMMIdclick() {

	$.post("../Medicine/GetMedicine", {
		mno: $('#SMMId').textbox('getValue')
	}, function(data) {
		if (data == ''){
			$.messager.alert('警告', '编号无效');
			return ;
		}
		$('#SMMdialog').dialog('open');
		$("#SMMmno").textbox('setValue', data.mno);
		$("#SMMmno").textbox('textbox').css("font-size", "18pt");
		$("#SMMmname").textbox('setValue', data.mname);
		$("#SMMmname").textbox('textbox').css("font-size", "18pt");
		$("#SMMmmode").textbox('setValue', data.mmode);
		$("#SMMmmode").textbox('textbox').css("font-size", "18pt");
		$("#SMMmefficacy").textbox('setValue', data.mefficacy);
		$("#SMMmefficacy").textbox('textbox').css("font-size", "18pt");
	});
}
// 查询药品信息end
// 信息查询end