package mms.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import mms.pojo.Agency;
import mms.pojo.EasyUIResult;
import mms.services.AgencyService;

@RequestMapping("Agency")
@Controller
public class AgencyController {
	// 经办人controller
	@Autowired
	private AgencyService agencyService;

	// 通过ano查询单个经办人
	@RequestMapping("GetAgency")
	@ResponseBody
	public Agency queryAgencyByAno(String ano) {
		Agency agency = agencyService.queryAgencyByAno(ano);
		return agency;
	}

	@RequestMapping(value = "DeleteAgency", produces = "text/html;charset=UTF-8")
	@ResponseBody
	// 按编号删除
	public String deleteAgencyByAno(String ano) {
		return agencyService.deleteAgencyByAno(ano);
	}

	// 批量删除
	@RequestMapping(value = "DeleteRows", produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String deleteAgencyByRows(@RequestParam(value = "array[]") String[] array) {
		try {
			return agencyService.deleteAgencyByRows(array);
		} catch (Exception e) {
			// TODO: handle exception
			// 捕获异常，spring进行事务回滚
			return "操作异常，，某些经办人处理过顾客信息,无法删除该经办人，请重新选择";
		}

	}

	// 修改经办人信息
	@RequestMapping(value = "ModifyAgency", produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String modifyAgency(Agency agency) {
		return agencyService.modifyAgency(agency);
	}

	// easyui数据表格返回全部经办人json
	@RequestMapping("GetMessage")
	@ResponseBody
	public EasyUIResult queryAllAgency(@RequestParam(value = "page", defaultValue = "1") Integer page,
			@RequestParam(value = "rows", defaultValue = "5") Integer rows) {
		return this.agencyService.queryAllAgency(page, rows);
	}

	// 保存经办人信息
	@RequestMapping(value = "SaveAgency", produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String saveAgency(Agency agency) {
		return agencyService.saveAgency(agency);
	}

	// 返回所有经办人
	@RequestMapping("GetAllAgency")
	@ResponseBody
	public java.util.List<Agency> getAllAgency() {
		java.util.List<Agency> allAgency = agencyService.getAllAgency();
		return allAgency;
	}
}
