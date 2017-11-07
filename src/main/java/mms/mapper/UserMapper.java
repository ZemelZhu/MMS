package mms.mapper;

import java.util.List;

import mms.pojo.User;

public interface UserMapper {
	public void addUser(User user);

	public List<User> queryAllUser();

	public void deleteUser(String uUsername);

	public void updateUser(User user);

	public User queryUserByName(String uUsername);

}
