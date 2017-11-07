package mms.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import mms.pojo.EasyUIResult;
import mms.pojo.Medicine;
import mms.services.MedicineService;

@RequestMapping("Medicine")
@Controller
public class MedicineController {
	// 药品controller
	@Autowired
	private MedicineService medicineService;

	// 通过mno查询药品信息
	@RequestMapping("GetMedicine")
	@ResponseBody
	public Medicine queryMedicineByMno(String mno) {
		Medicine medicine = medicineService.queryMedicineByMno(mno);
		return medicine;
	}

	// 通过mmno删除药品信息
	@RequestMapping(value = "DeleteMedicine", produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String deleteMedicineByMno(String mno) {
		return medicineService.deleteMedicineByMno(mno);
	}

	// 保存药品信息
	@RequestMapping(value = "SaveMedicine", produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String saveMedicine(Medicine medicine) {
		return medicineService.saveMedicine(medicine);
	}

	// 修改药品信息
	@RequestMapping(value = "ModifyMedicine", produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String modifyMedicine(Medicine medicine) {
		return medicineService.modifyMedicine(medicine);
	}

	// easyui返回json
	@RequestMapping("GetMessage")
	@ResponseBody
	public EasyUIResult queryAllMedicine(@RequestParam(value = "page", defaultValue = "1") Integer page,
			@RequestParam(value = "rows", defaultValue = "5") Integer rows) {
		return medicineService.queryAllMedicine(page, rows);
	}

	// 获得药品信息
	@RequestMapping("GetAllMedicine")
	@ResponseBody
	public List<Medicine> getAllMedicine() {
		List<Medicine> allMedicine = medicineService.getAllMedicine();
		return allMedicine;

	}
}
