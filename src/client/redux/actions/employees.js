import errorHandler from '../../../utils/errorHandler'
import req from '../../../utils/request';


export const SET_ALERT_MESSAGE = 'SET_ALERT_MESSAGE';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_EMPLOYEES_COMPANY = 'SET_EMPLOYEES_COMPANY';
export const SET_NEW_EMPLOYEE = 'SET_NEW_EMPLOYEE';
export const SET_UPDATING_EMPLOYEE = 'SET_UPDATING_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const SET_SINGLE_EMPLOYEE = 'SET_SINGLE_EMPLOYEE';
export const SET_SELECTED_EMPLOYEE = 'SET_SELECTED_EMPLOYEE';

export const setAlertMessage = (payload) => ({
  type: SET_ALERT_MESSAGE,
  payload,
});

export const seIsLoading = (payload) => ({
  type: SET_IS_LOADING,
  payload,
});

export const setEmployeesCompany = (payload) => ({
  type: SET_EMPLOYEES_COMPANY,
  payload,
});

export const setSingleEmployee = (payload) => ({
    type: SET_SINGLE_EMPLOYEE,
    payload,
  });

  export const setSelectedEmployee = (payload) => ({
    type: SET_SELECTED_EMPLOYEE,
    payload,
  });

export const setNewEmployee = (payload) => ({
  type: SET_NEW_EMPLOYEE,
  payload,
});


export const setUpdatingEmployee  = (payload) => ({
  type: SET_UPDATING_EMPLOYEE,
  payload,
});

export const deleteEmployee = (payload) => ({
  type: DELETE_EMPLOYEE,
  payload,
});

const requester = ({ requestType, uri, data }, callback, messageType) => async (dispatch) => {
  try {
    const request = await req;
    const url = `${uri}`;
    dispatch(seIsLoading({ isLoading: true }));
    const result = await request.RESTRequest(requestType, url, data);
    callback(result.data);
  } catch (error) {
    dispatch(setAlertMessage({
      alert: {
        message: errorHandler(error),
        type: messageType || 'error',
      },
    }));
  }
  dispatch(seIsLoading({ isLoading: false }));
};

export const requestEmployee = () => async (dispatch) => {
  dispatch(requester({
    requestType: 'get',
    uri: `http://dummy.restapiexample.com/api/v1/employees`,
  }, (result) => {
    dispatch(setEmployeesCompany({ employees : result.data }));
  }));
};


export const createEmployee = ( employee ) => async (dispatch) => {
  dispatch(requester({
    requestType: 'post',
    uri: `http://dummy.restapiexample.com/api/v1/create`,
    data: employee,
  }, (result) => {
    dispatch(setAlertMessage({
      alert: {
        message: 'Employee created successfully',
        type: 'success',
      },
    }));
    
  }));
};


export const updateEmployee = ( employee ) => async (dispatch) => {
  dispatch(requester({
    requestType: 'put',
    uri: `http://dummy.restapiexample.com/api/v1/update/${employee.id}`,
    data: employee,
  }, (result) => {
    console.log(result.data)
    dispatch(setUpdatingEmployee({ employee : result.data }));
    dispatch(setAlertMessage({
      alert: {
        message: 'Employee updating successfully',
        type: 'success',
      },
    }));
  }));
};

export const requestDeleteEmployee = (employeeId) => async (dispatch) => {
  dispatch(requester({
    requestType: 'delete',
    uri: `http://dummy.restapiexample.com/api/v1/delete/${employeeId}`,
  }, () => {
    console.log("aqui entro")
    dispatch(deleteEmployee({ employeeId }));
    dispatch(setAlertMessage({
      alert: {
        message: 'Employee deleted successfully',
        type: 'success',
      },
    }));
  }));
};
