import {  useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import ButtonAction from '../../atoms/ButtonAction/ButtonAction';
import Message from '../../molecules/Alert';
import Loading from '../../molecules/Loading/Loading';
import Table from '../../molecules/Table/Table';

import {
	Box, Divider, Typography,
  } from '@material-ui/core';

import {
	requestEmployee, createEmployee, updateEmployee, requestDeleteEmployee, setAlertMessage, setNewEmployee
  } from '../../../redux/actions/employees';


import useStyles from './workSpace.styles';

const WorkSpace = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { isLoading, alert, employees } = useSelector((state) => state.employee, shallowEqual);

	useEffect(() => {
		!employees.length && dispatch(requestEmployee()); 
	},[employees]);


	const createRow = (employee) => {
		const setEmployee = JSON.stringify(employee)
		employees.unshift(employee)
		dispatch(createEmployee(setEmployee));
		// dispatch(setNewEmployee(setEmployee));
	  }; 
	
	const updateRow = (employee) => {
		dispatch(updateEmployee(JSON.stringify(employee)));
	  };
	
	const deleteRow = (employee) => {
		dispatch(requestDeleteEmployee(employee.id));
	  };

	const createColumns = () => [{
		title: 'Name',
		field: "employee_name" ||  '/employee_name/',
	  }, {
		title: 'Salary',
		field: 'employee_salary' ||  '/employee_salary/',
	  }, {
		title: 'Age',
		field: 'employee_age' ||  '/employee_age/',
	  }];

	  const renderTable = () => (
		<Table
		  data={employees}
		  columns={createColumns()}
		  customIcons={{
			Add: <ButtonAction className={classes.button} component="span"> + New Employee </ButtonAction>,
		  }}
		  events={{ createRow, updateRow, deleteRow }}
		/>
	  );

    return (
	<>
	 <Box className={classes.root}>
     <Box className={classes.header}>
    <Typography className={classes.text} variant="h3">
	 Manage employees
     </Typography>
   
    </Box>
    <Divider className={classes.divider} />
    {isLoading ? <Loading /> : renderTable()}
    </Box>
	{alert && (
	<Message
		message={alert.message}
		type={alert.type}
		handler={setAlertMessage}
	/>
	)}
	</>
	);
}

export default WorkSpace;