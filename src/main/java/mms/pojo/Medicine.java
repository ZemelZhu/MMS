package mms.pojo;

public class Medicine {
	// 编号mno：char(12)
	// 名称mname：nvarchar(50)
	// 服用方法mmode：nchar(2) 内服 或 外用
	// 功效mefficacy：nvarchar(50)
	private int mid;
	private String mno;
	private String mname;
	private String mmode;
	private String mefficacy;

	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public String getMno() {
		return mno;
	}

	public void setMno(String mno) {
		this.mno = mno;
	}

	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	}

	public String getMmode() {
		return mmode;
	}

	public void setMmode(String mmode) {
		this.mmode = mmode;
	}

	public String getMefficacy() {
		return mefficacy;
	}

	public void setMefficacy(String mefficacy) {
		this.mefficacy = mefficacy;
	}

	@Override
	public String toString() {
		return "Medicine [mno=" + mno + ", mname=" + mname + ", mmode=" + mmode + ", mefficacy=" + mefficacy + "]";
	}

}
