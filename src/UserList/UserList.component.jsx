const UserList = ({ arr }) => {
  return (
    <div>
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
        </tr>
        {arr?.map((item) => (
          <tr>
            <td>{item?.name}</td>
            <td>{item?.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UserList;
