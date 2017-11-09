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


// 查询药品信息end
// 信息查询end