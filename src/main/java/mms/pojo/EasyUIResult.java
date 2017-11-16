package mms.pojo;

import java.util.List;

public class EasyUIResult {
	// easyui返回json格式进行分页
	private Integer total;
	private List<?> rows;

	public EasyUIResult() {
	}

	public EasyUIResult(Integer total, List<?> rows) {
		this.total = total;
		this.rows = rows;
	}

	public EasyUIResult(Long total, List<?> rows) {
		this.total = total.intValue();
		this.rows = rows;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

	public List<?> getRows() {
		return rows;
	}

	public void setRows(List<?> rows) {
		this.rows = rows;
	}

	@Override
	public String toString() {
		return "EasyUIResult [total=" + total + ", rows=" + rows + "]";
	}
	
}
