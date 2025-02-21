function AddTodo(props){
    return (
        <div>
            <table >
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Status</td>
                        </tr>
                    
                </thead>
                <tbody>
                    {props.val.map((ele)=>(
                    <tr>
                        <td>{ele.id}</td>
                        <td>{ele.title}</td>
                        <td>{ele.completed?"Completed":"Not Completed"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default AddTodo;