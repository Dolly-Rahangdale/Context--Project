import {Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from "@mui/material";

export default function UserTable({employees, handleEdit, handleDelete, setIsAdding}){

    return (
        <TableContainer component={Paper} sx={{m:2}} >
        <div style={{ marginTop: '10px', marginBottom: '18px' }}>
                <Button type="button" variant="contained" color="secondary" 
                onClick={() => setIsAdding(true)} className='round-button'>Add Employee</Button>
            </div>
            <Table aria-label='simple table'>
                    <TableHead sx={{backgroundColor:"lightGreen", color:"darkBlue",}}>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Salary</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell colSpan={2} className="text-center">
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>{
                        employees.length > 0 ?
                    <TableBody>
                        {
                                employees.map((employee,index) =>{
                                    const indexNo = index + 1;
                                    return (
                                        <TableRow
                                        key={employee.id}
                                        sx={{'&:last-child td, &:last-child th' : {border: 0}}}
                                        >
                                            <TableCell>{indexNo}</TableCell>
                                            <TableCell>{employee.firstName}</TableCell>
                                            <TableCell>{employee.lastName}</TableCell>
                                            <TableCell>{employee.email}</TableCell>
                                            <TableCell>{employee.salary}</TableCell>
                                            <TableCell>{employee.date}</TableCell>
                                            <TableCell className="text-right">
                                                <Button type="button" variant="contained" color="success"
                                                    onClick={() => handleEdit(employee.id)}
                                                    className="button muted-button"
                                                    >Edit
                                                </Button>                                            
                                            </TableCell>
                                            <TableCell>

                                                <Button type="button" variant="contained" color="error"
                                                onClick={() => handleDelete(employee.id)}>
                                                Delete</Button>

                                        </TableCell>
                                    </TableRow>
                                        
                                    )
                                })
                        }
                    </TableBody>
                            :  <center><h6 style={{display:'flex', alignItems:'center', justifyContent:'center'}}> No Data Availble </h6> </center>
                    }
            </Table>
        </TableContainer>
    );
    // if (<TableBody/>.length === 0)
    // return(
    //     <h2>There is No Data Available </h2>
    // )
} 
