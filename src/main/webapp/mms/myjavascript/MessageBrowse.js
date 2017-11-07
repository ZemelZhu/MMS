// 信息浏览begin
// <!-- 信息浏览-BCM-BAM-BMM+MessageBrowse  -->
// 浏览顾客信息begin
function BCMclick(){
		if(access.indexOf("信息浏览功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();	
         }
    	if(!$('#output').tabs('exists','浏览顾客信息')) {
				     $('#output').tabs('add',{ 
					    title:'浏览顾客信息',
					    href:'./tabs/client/Browse.html',
					    closable:true
					});
				 }
		else
		{
		$('#output').tabs('select', '浏览顾客信息');
		}
}
// 浏览顾客信息end
// 浏览经办人信息begin
function BAMclick(){
		if(access.indexOf("信息浏览功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();	
         }
    	if(!$('#output').tabs('exists','浏览经办人信息')) {
				     $('#output').tabs('add',{ 
					    title:'浏览经办人信息',    
					     href:'./tabs/agency/Browse.html',
					    closable:true
					});
				 }
		else
		{
		$('#output').tabs('select', '浏览经办人信息');
		}
}

// 浏览经办人信息end
// 浏览药品信息begin
function BMMclick(){
		if(access.indexOf("信息浏览功能") < 0 ){
            $.messager.alert('警告','该用户没有此功能');
            event.stopPropagation();	
         }
    	if(!$('#output').tabs('exists','浏览药品信息')) {
				     $('#output').tabs('add',{ 
					    title:'浏览药品信息',    
					     href:'./tabs/medicine/Browse.html',
					    closable:true
					});
				 }
		else
		{
		$('#output').tabs('select', '浏览药品信息');
		}
}

// 浏览药品信息end
// 信息浏览end