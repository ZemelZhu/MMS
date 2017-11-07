package mms.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import mms.pojo.EasyUIResult;
import mms.pojo.User;
import mms.services.UserServies;

//用户
@RequestMapping("User")
@Controller
public class UserController {
	@Autowired
	private UserServies userServies;

	// 添加新用户
	@RequestMapping("AddUser")
	@ResponseBody
	public String addUser(User user) {
		userServies.addUser(user);
		return "success";
	}

	// 修改用户信息
	@RequestMapping("UpdateUser")
	@ResponseBody
	public void updateUser(User user) {
		userServies.updateUser(user);
	}

	// 删除用户
	@RequestMapping("DeleteUser")
	@ResponseStatus(value = HttpStatus.OK)
	public void deleteUser(String uUsername) {
		userServies.deleteUser(uUsername);
	}

	// easyui返回全部用户信息
	@RequestMapping("queryAllUser")
	@ResponseBody
	public EasyUIResult queryAllUser(@RequestParam(value = "page", defaultValue = "1") Integer page,
			@RequestParam(value = "rows", defaultValue = "5") Integer rows) {
		EasyUIResult queryAllUser = userServies.queryAllUser(page, rows);
		return queryAllUser;
	}

	// 通过uUsername查询用户
	@RequestMapping(value = "GetUUsername", produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String queryUserByName(String uUsername) {
		return userServies.queryUserByName(uUsername);
	}
	@RequestMapping(value = "GetUpassword", produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String queryPasswordByName(String uUsername) {
		return userServies.queryPasswordByName(uUsername);
	}
}
