
function closeAll() {
	var tab =$('#output').tabs('tabs');
	for (var i=tab.length-1;i>=0;i--) {
		$('#output').tabs('close', i);
	}
}
function helpclick(){
	$.messager.alert('帮助','<font size="3" face="verdana">'+
		'1.最高管理账号为admir，由此账号安排权限</br>'+
		'2.此用户拥有的权限有'+access +
		'</br>3.make by Vimmone</font>');    

}
