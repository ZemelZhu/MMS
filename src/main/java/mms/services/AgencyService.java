package mms.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import mms.mapper.AgencyMapper;
import mms.pojo.Agency;
import mms.pojo.EasyUIResult;

/*经办人service
处理业务逻辑*/
@Service
public class AgencyService {
	// 注入mapper
	@Autowired
	private AgencyMapper agencyMapper;

	public Agency queryAgencyByAno(String ano) {
		// TODO Auto-generated method stub
		Agency agency = agencyMapper.queryAgencyByAno(ano);
		return agency;
	}

	public EasyUIResult queryAllAgency(Integer page, Integer rows) {
		// TODO Auto-generated method stub
		PageHelper.startPage(page, rows);
		List<Agency> agencies = agencyMapper.queryAllAgency();
		PageInfo<Agency> pageInfo = new PageInfo<Agency>(agencies);
		return new EasyUIResult(pageInfo.getTotal(), agencies);
	}

	public String saveAgency(Agency agency) {
		// TODO Auto-generated method stub
		try {
			if (queryAgencyByAno(agency.getAno()) != null) {
				return "经办人编号已经存在，请重新输入编号";
			}
			agencyMapper.saveAgency(agency);
			return "保存成功";
			
		} catch (Exception e) {
			// TODO: handle exception
			return "操作异常，请刷新后操作";
		}
	}

	public String deleteAgencyByAno(String ano) {
		// TODO Auto-generated method stub
		try {
			agencyMapper.deleteAgencyByAno(ano);
		} catch (Exception e) {
			// TODO: handle exception
			return "删除失败，此经办人为客户提供过服务，" + "无法删除此经办人";
		}
		return "删除成功";
	}

	public String modifyAgency(Agency agency) {
		// TODO Auto-generated method stub
		Agency queryAgencyByAno = queryAgencyByAno(agency.getAno());
		if (queryAgencyByAno != null) {
			if (queryAgencyByAno.getAid() != agency.getAid())
				return "这个经办人编号已经存在，不能修改为这个编号";
		}
		try {
			agencyMapper.modifyAgency(agency);
		} catch (Exception e) {
			// TODO: handle exception
			return "修改失败，可能是有客户在此经办人购药，" + "无法修改编号";
		}
		// agencyMapper.modifyAgency(agency);
		return "修改成功";
	}

	public List<Agency> getAllAgency() {
		// TODO Auto-generated method stub
		List<Agency> allAgency = agencyMapper.queryAllAgency();
		return allAgency;
	}

	public String deleteAgencyByRows(String[] array) {
		// TODO Auto-generated method stub
		String exceptionAno = null;
		try {
			for (String ano : array) {
				System.out.println(ano);
				exceptionAno = ano;
				agencyMapper.deleteAgencyByAno(ano);
			}
		} catch (Exception e) {
			// TODO: handle exception
			return "操作异常，可能是编号为<font size='4'>" + exceptionAno + "</font>的经办人处理过顾客信息," + "无法删除此经办人，请重新选择";
		}
		return "删除成功";
	}

}
