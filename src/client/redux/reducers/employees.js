import {
    SET_ALERT_MESSAGE,
    SET_EMPLOYEES_COMPANY,
    SET_IS_LOADING,
    SET_NEW_EMPLOYEE,
    SET_UPDATING_EMPLOYEE,
    SET_SELECTED_EMPLOYEE,
    DELETE_EMPLOYEE
   } from '../actions/employees';
   
   const initialState = {
     employees: [],
     alert: null,
     isLoading: true,
     selectedEmployee: null,
   };
   
   const employee = (state = initialState, action) => {
     switch (action.type) {
       case SET_ALERT_MESSAGE:
         return { ...state, alert: action.payload.alert };
       case SET_IS_LOADING:
         return { ...state, isLoading: action.payload.isLoading };
       case SET_EMPLOYEES_COMPANY:
         return { ...state, employees: action.payload.employees };
       case SET_NEW_EMPLOYEE:
         state.employees.unshift({
           ...action.payload.newEmployee,
         });
         return {
           ...state,
           employees: [...state.employees],
         };
     
       case SET_UPDATING_EMPLOYEE:
         return {
           ...state,
           employees: state.employees.map((employee) => (
             employee.id == action.payload.employee.id
               ? action.payload.employee : employee)),
         };
         
       case DELETE_EMPLOYEE:
         return {
           ...state,
           employees: state.employees.filter((employee) => employee.id !== action.payload.employeeId),
         };
       default:{
         return {
           ...state,
         };
       }
      }
   };
   
   export default employee;
 
 
   