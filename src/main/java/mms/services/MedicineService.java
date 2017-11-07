package mms.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import mms.mapper.MedicineMapper;
import mms.pojo.Agency;
import mms.pojo.EasyUIResult;
import mms.pojo.Medicine;

@Service
public class MedicineService {
	@Autowired
	private MedicineMapper medicineMapper;

	public Medicine queryMedicineByMno(String mno) {
		// TODO Auto-generated method stub
		Medicine medicine = medicineMapper.queryMedicineByMno(mno);
		return medicine;

	}

	public EasyUIResult queryAllMedicine(Integer page, Integer rows) {
		// TODO Auto-generated method stub
		PageHelper.startPage(page, rows);
		List<Medicine> medicines = medicineMapper.queryAllMedicine();
		PageInfo<Medicine> pageInfo = new PageInfo<Medicine>(medicines);
		return new EasyUIResult(pageInfo.getTotal(), medicines);
	}

	public String saveMedicine(Medicine medicine) {
		// TODO Auto-generated method stub
		if (queryMedicineByMno(medicine.getMno()) != null) {
			return "药品编号已经存在，请重新输入编号";
		}
		medicineMapper.saveMedicine(medicine);
		return "保存成功";
	}

	public String deleteMedicineByMno(String mno) {
		// TODO Auto-generated method stub
		try {
			medicineMapper.deleteMedicineByMno(mno);
		} catch (Exception e) {
			// TODO: handle exception
			return "删除失败，可能是有客户购买此药，"
			+ "无法删除此药品";
		}
		return "删除成功";
	}

	public String modifyMedicine(Medicine medicine) {
		// TODO Auto-generated method stub
		Medicine queryMedicineByMno = queryMedicineByMno(medicine.getMno());
		if (queryMedicineByMno != null) {
			if (queryMedicineByMno.getMid() != medicine.getMid())
				return "这个药品编号已经存在，不能修改为这个编号";
		}
		try {
			medicineMapper.modifyMedicine(medicine);
		} catch (Exception e) {
			// TODO: handle exception
			return "修改失败，可能是有客户购买此药，"
			+ "无法修改编号";
		}
		return "修改成功";
	}

	public List<Medicine> getAllMedicine() {
		// TODO Auto-generated method stub
		List<Medicine> queryAllMedicine = medicineMapper.queryAllMedicine();
		return queryAllMedicine;
	}

}
