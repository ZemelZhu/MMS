package mms.pojo;

public class Agency {
	// 编号ano：char(8)
	// 姓名aname：char(8)
	// 性别asex：nchar(1) 男 或 女
	// 电话aphone：char(12)
	// 备注aremark：varchar(50)
	private int aid;
	private String ano;
	private String aname;
	private String asex;
	private String aphone;
	private String aremark;

	public int getAid() {
		return aid;
	}

	public void setAid(int aid) {
		this.aid = aid;
	}

	public String getAno() {
		return ano;
	}

	public void setAno(String ano) {
		this.ano = ano;
	}

	public String getAname() {
		return aname;
	}

	public void setAname(String aname) {
		this.aname = aname;
	}

	public String getAsex() {
		return asex;
	}

	public void setAsex(String asex) {
		this.asex = asex;
	}

	public String getAphone() {
		return aphone;
	}

	public void setAphone(String aphone) {
		this.aphone = aphone;
	}

	public String getAremark() {
		return aremark;
	}

	public void setAremark(String aremark) {
		this.aremark = aremark;
	}

	@Override
	public String toString() {
		return "Agency [ano=" + ano + ", aname=" + aname + ", asex=" + asex + ", aphone=" + aphone + ", aremark="
				+ aremark + "]";
	}

}
