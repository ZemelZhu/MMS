package mms.controller;

import java.util.Enumeration;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import mms.services.LoginService;
//处理登陆逻辑

@RequestMapping("Login")
@Controller
public class LoginController {
	@Autowired
	private LoginService loginService;

	/*
	 * 用户登陆 判断是否存在用户 存在保存session
	 */
	@RequestMapping(value = "loginUser", produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String login(String username, String password, HttpSession session) {
		return loginService.login(username, password, session);
	}

	// 取出seeion的用户名
	@RequestMapping("GetLoginName")
	@ResponseBody
	public Object GetLoginName(HttpSession session) {
		Object username = session.getAttribute("user");
		return username;
	}

	// 清除session
	@RequestMapping("LogOff")
	@ResponseBody
	public void logOff(HttpSession session) {
		Enumeration em = session.getAttributeNames();
		while (em.hasMoreElements()) {
			session.removeAttribute(em.nextElement().toString());
		}
	}
}
