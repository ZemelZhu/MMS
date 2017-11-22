package mms.controller;

import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import mms.pojo.Client;
import mms.pojo.EasyUIResult;
import mms.services.ClientService;

@RequestMapping("Client")
@Controller
public class ClientController {
	// 顾客controller
	@Autowired
	// 注入service
	private ClientService clientService;

	// 按编号查询
	@RequestMapping("GetClient")
	@ResponseBody
	public Client queryClientBycno(String cno) {
		Client client = clientService.queryClientBycno(cno);
		return client;
	}

	// 按编号删除
	@RequestMapping("DeleteClient")
	@ResponseBody
	public void deleteClientBycno(String cno) {
		clientService.deleteClientBycno(cno);
	}
//	批量删除
	@RequestMapping(value = "DeleteRows", produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String deleteClientByRows(
			@RequestParam(value = "array[]") String[] array) {
		return clientService.deleteClientByRows(array);
		
//		clientService.deleteClientBycno(cno);
	}

	// 保存顾客信息
	@RequestMapping(value = "SaveClient", produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String saveClient(Client client) {
		return clientService.saveClient(client);
	}

	@RequestMapping("GetMessage")
	@ResponseBody
	// easyui返回json
	public EasyUIResult queryAllClient(@RequestParam(value = "page", defaultValue = "1") Integer page,
			@RequestParam(value = "rows", defaultValue = "5") Integer rows) {
		EasyUIResult queryAllClient = clientService.queryAllClient(page, rows);
		return queryAllClient;
	}

	// 修改客户信息
	@RequestMapping(value = "ModifyClient", produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String modifyClient(Client client) {
		return clientService.modifyClient(client);
	}
}
