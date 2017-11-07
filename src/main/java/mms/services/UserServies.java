package mms.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import mms.mapper.UserMapper;
import mms.pojo.Client;
import mms.pojo.EasyUIResult;
import mms.pojo.User;

@Service
public class UserServies {
	@Autowired
	private UserMapper userMapper;

	public void addUser(User user) {
		// TODO Auto-generated method stub
		userMapper.addUser(user);
	}

	public EasyUIResult queryAllUser(Integer page, Integer rows) {
		// TODO Auto-generated method stub
		PageHelper.startPage(page, rows);
		List<User> users = userMapper.queryAllUser();
		PageInfo<User> pageInfo = new PageInfo<User>(users);
		return new EasyUIResult(pageInfo.getTotal(), users);
	}

	public void deleteUser(String uUsername) {
		// TODO Auto-generated method stub
		userMapper.deleteUser(uUsername);
	}

	public void updateUser(User user) {
		// TODO Auto-generated method stub
		userMapper.updateUser(user);
	}

	public String queryUserByName(String uUsername) {
		// TODO Auto-generated method stub
		User user = userMapper.queryUserByName(uUsername);

		if (user != null) {
			return "用户已存在";
		} else
			return "";
	}

	public String queryPasswordByName(String uUsername) {
		// TODO Auto-generated method stub
		User user = userMapper.queryUserByName(uUsername);
		if (user == null) {
			return "用户不存在";
		} else
			return user.getuPassword();
	}

}
