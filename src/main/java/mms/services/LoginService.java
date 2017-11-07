package mms.services;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import mms.mapper.UserMapper;
import mms.pojo.User;

@Service
public class LoginService {
	// 注入userMapper
	@Autowired
	private UserMapper userMapper;

	public String login(String username, String password, HttpSession session) {
		// TODO Auto-generated method stub

		User user = userMapper.queryUserByName(username);
		if (user == null) {
			return "没有此用户";
		} else if (user.getuPassword().equals(password) == false) {
			return "密码错误";
		} else {
			// 用户存在，保存session
			session.setAttribute("user", user);
			session.setAttribute("password", password);
			return "";
		}
	}

}
