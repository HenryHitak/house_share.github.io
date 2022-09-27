
const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Post</th>
          <th>Date</th>
          <th>Image</th>
        </tr>
        {data.map((item) => (
          <tr key={item.post_id}>
            <td>{item.title}</td>
            <td>{item.postContent}</td>
            <td>{item.p_date}</td>
            <td>{item.imgName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;