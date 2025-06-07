import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

// function createData(itemDesc,status,userId) {
//   return { itemDesc,status,userId };
// }

// const rows = [
//   createData('Exam','incomplete', 1234),
//   createData('Shopping', 'incomplete',5678),
//   createData('homework', 'complete',2323),
// ];

const Home = () => {
  const [todos,setTodos] = useState([]);
  

  useEffect(()=>{
    axios.get('https://dummyjson.com/todos')
    .then((res)=>{
      setTodos(res.data.todos);
    }).catch((error)=>{
      console.log(error);
    })
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item Description</TableCell>
            <TableCell align="right">Completion Status</TableCell>
            <TableCell align="right">UserID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo.userId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {todo.todo}
              </TableCell>
              <TableCell align="right">{todo.completed.toString()}</TableCell>
              <TableCell align="right">{todo.userId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></div>
  )
}

export default Home

// import React, { useEffect, useState } from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import axios from 'axios';



// const Home = () => {
//   const[todos,setTodos]=useState([]);
//   useEffect(()=>{
//   axios.get('https://dummyjson.com/todos')
//   .then((res)=>{
//     setTodos(res.data.todos);
//   })
//   .catch((error)=>{
//     console.log("Error");
//   })
// },[]);
//   return (
//       <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Userid</TableCell>
//             <TableCell align="right">Todo</TableCell>
//             <TableCell align="right">Completed</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {todos.map((todos) => (
//             <TableRow
//               key={todos.userId}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {todos.userId}
//               </TableCell>
//               <TableCell align="right">{todos.todo}</TableCell>
//               <TableCell align="right">{todos.completed}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default Home
