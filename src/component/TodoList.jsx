import PropTypes from 'prop-types';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon  from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
const TodoList = ({ item, deleteTask,doneTask,editTask,index }) => {
    return (
        <div key={item.id} className="font-medium font-serif bg-black text-white h-36 w-56 rounded-md text-center pt-4">
            <div>{index+1}</div>
          <span className={`${item.done?"line-through text-green-500" : "text-white"}`}   > {item.taskName}</span>
          <div className="pt-10">
            <DoneIcon onClick={()=>{doneTask(item.id)}} className="text-green-400" />
            <button onClick={() => deleteTask(item.id)} className="text-red-500">
              <DeleteIcon />
            </button>
            <EditIcon onClick={()=>{editTask(item.id)}} className="text-blue-400" />
          </div>
        </div>
      );
    };
    
    //Todo.propTypes = {
      //item: PropTypes.shape({
     //   id: PropTypes.number.isRequired,
       // taskName: PropTypes.string.isRequired,
     // }).isRequired,
      //deleteTask: PropTypes.func.isRequired,
      //doneTask: PropTypes.func.isRequired,
    //};
    TodoList.PropTypes={
        items:PropTypes.item,
        deleteTask: PropTypes.deleteTask,
        doneTask: PropTypes.doneTask,
        editTask:PropTypes.editTask,
        updateTask:PropTypes.updateTask,
        index:PropTypes.index,
    }
    
    
    
    export default TodoList;