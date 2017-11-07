package mms.mapper;

import java.util.List;

import mms.pojo.Client;

public interface ClientMapper {
	public Client queryClientBycno(String cno);

	public void saveClient(Client client);

	public List<Client> queryAllClient();

	public void deleteClientBycno(String cno);

	public void modifyClient(Client client);
}
