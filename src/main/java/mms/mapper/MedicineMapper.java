package mms.mapper;

import java.util.List;

import mms.pojo.Medicine;

public interface MedicineMapper {
	public Medicine queryMedicineByMno(String mno);

	public List<Medicine> queryAllMedicine();

	public void saveMedicine(Medicine medicine);

	public void deleteMedicineByMno(String mno);

	public void modifyMedicine(Medicine medicine);

	public List<Medicine> queryMultiMedicine(Medicine medicine);
}
