package mms.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

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
	@RequestMapping("QueryMedicineByMno")
	@ResponseBody
	public Medicine queryMedicineByMno(String mno) {
		Medicine medicine = medicineService.queryMedicineByMno(mno);
		return medicine;
	}

	/*
	 * // 多条件药品信息保存session
	 * 
	 * @RequestMapping("QueryMultiMedicine")
	 * 
	 * @ResponseBody public String queryMultiMedicine(Medicine
	 * medicine,HttpSession session) { return
	 * medicineService.queryMultiMedicine(medicine,session);
	 * 
	 * } // 多条件药品查询url
	 * 
	 * @RequestMapping("GetMultiMedicine")
	 * 
	 * @ResponseBody public EasyUIResult getMultiMedicine(@RequestParam(value =
	 * "page", defaultValue = "1") Integer page,
	 * 
	 * @RequestParam(value = "rows", defaultValue = "5") Integer rows,
	 * HttpSession session) { return medicineService.getMultiMedicine(page,
	 * rows,session);
	 * 
	 * }
	 */
	/*
	 * // 通过mno删除药品信息
	 * 
	 * @RequestMapping(value = "DeleteMedicine", produces =
	 * "text/html;charset=UTF-8")
	 * 
	 * @ResponseBody public String deleteMedicineByMno(String mno) { return
	 * medicineService.deleteMedicineByMno(mno); }
	 */
	// 批量删除
	@RequestMapping(value = "DeleteRows", produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String deleteMedicineByRows(@RequestParam(value = "array[]") String[] array) {
		try {

			return medicineService.deleteMedicineByRows(array);

		} catch (Exception e) {
			// TODO: handle exception
			return "操作异常，可能某些药品被顾客购买过，" + "无法删该药品，请重新选择";
		}
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
