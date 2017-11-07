// 用户管理
function UserManageclick(){
		if(access.indexOf("用户管理功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();	
         }
    	if(!$('#output').tabs('exists','用户管理')) {
				     $('#output').tabs('add',{ 
				     	// id:'ECM',   
					    title:'用户管理',    
					      // fit:true,
					     href:'./tabs/User.html',
					    closable:true
					});
				 }
		else
		{
		$('#output').tabs('select', '用户管理');
		}
}
// 修改密码
function ModifyPassword(){
	 $('#bbb').dialog('open').dialog('center').dialog('setTitle','Edit User');
}
function newPassword(){
	$.post('../User/GetUpassword', 
		{uUsername: $("#loginName").html()
		}, 
		function(data) {
			if(data!=$("#oldPassword").val()){
				$.messager.alert('警告','密码错误');
				return false;
			}
			else{
				var len =$("#newUerPassword").val().length;
				if(len==0||len>12) {
					$.messager.alert('警告','新密码不能超过12位且不能为空');
					return ;
				}

				$.post('../User/UpdateUser', 
					{uUsername: $("#loginName").html(),
					uPassword:$("#newUerPassword").val(),
					uAccess:access
				}, 
				function(data) {
					$.messager.alert('警告','密码修改成功');
					$('#bbb').dialog('close');
					/*optional stuff to do after success */
				});
			}
		/*optional stuff to do after success */
	});
	
	
}
// 用户注销
function logOff(){
	$.get('../Login/LogOff');
	location.href="../login.html";
}