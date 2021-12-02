import axios from "axios";
import { clearAlerts, setError, setLoading, setSuccess } from "../alerts/actions";
import * as actionType from "./actionTypes";


const addStart = () => ({
  type: actionType.ADD_START,
});

const addSuccess = (data) => ({
  type: actionType.ADD_SUCCESS,
  payload: data,
});

const addFailed = (data) => ({
  type: actionType.ADD_FAILED,
  payload: data,
});

export const clear = () => ({
  type: actionType.CLEAR,
});

const setListing = (data) => ({
  type: actionType.SET_LISTING,
  payload: data,
});

export const setItem = (data) => ({
  type: actionType.SET_ITEM,
  payload: data,
});

export const setModalType = (data) => ({
  type: actionType.SET_MODAL_TYPE,
  payload: data
})

export const toggleModal = () => ({
  type: actionType.TOGGLE_MODAL,
})

export const addItem = (moduleName, data, history, clearInputs, toggle) => {
  return (dispatch) => {
    dispatch(addStart());
    axios
      .post(`api/${moduleName}`, data)
      .then((res) => {
        dispatch(addSuccess(res.data.message));
        dispatch(setLoading(false));
        dispatch(toggleModal());
        dispatch(getListing(moduleName,1, 10));
        dispatch(setSuccess(res.data.message));
      })
      .catch((err) => {
        dispatch(addFailed(err.response.data.message));
        console.log(err);
      });
  };
};

export const updateItem = (moduleName, id, data, clearInputs) => {

  console.log(data);
  return (dispatch) => {

    dispatch(addStart());

    axios
      .patch(`api/${moduleName}/${id}`, data)
      .then((res) => {
        dispatch(addSuccess());
        clearInputs();
        dispatch(toggleModal());
        console.log("RES", res);
        dispatch(setSuccess(res.data.message));
        dispatch(getListing(moduleName, 1, 10));
      
      })
      .catch((err) => {
        dispatch(addFailed(err.response.data.message));
        console.log(err);
      });
  };
};

export const getListing = (moduleName, page, perPage, filterText = '',role) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios
      .get(`api/${moduleName}?page=${page}&perPage=${perPage}&search=${filterText}&role=${role}`)
      .then((res) => {
        dispatch(setListing(res.data.body));
        dispatch(setLoading(false));
        console.log("RES", res);
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(setError(err.response.data.message));
        console.log(err);
      });
  };
};

export const getItem = (moduleName, id) => {
  return (dispatch) => {
    // dispatch(setLoading(true));
    axios
      .get(`api/${moduleName}/${id}`)
      .then((res) => {
        dispatch(setItem(res.data.body));
        // dispatch(setLoading(false));
        console.log("RES", res);
      })
      .catch((err) => {
        // dispatch(setLoading(false));
        dispatch(setError(err.response.data.message));
        console.log(err);
      });
  };
};

export const changeStatus = (moduleName,id, status) => {

  console.log(status);

  const fd = new FormData();
  fd.append("status", status);

  return (dispatch) => {

    dispatch(clearAlerts());

    axios
      .patch(`api/${moduleName}/${id}`, fd)
      .then((res) => {
        dispatch(setSuccess(res.data.message));
        console.log("RES", res);
      })
      .catch((err) => {
        dispatch(setError(err.response.data.message));
        console.log(err);
      });
  };
};

export const deleteItem = (moduleName,id, setDeletePopup, currentPage, perPage,role) => {
  return (dispatch) => {
    dispatch(clearAlerts());
    dispatch(setLoading(true));
    axios
      .delete(`api/${moduleName}/${id}`)
      .then((res) => {
        console.log("RES",res)
        dispatch(setSuccess(res.data.message));
        dispatch(getListing(moduleName,currentPage,perPage,'',role));
        setDeletePopup();
      })
      .catch((err) => {
        // dispatch(setError(err.response.data.message));
        dispatch(setLoading(false));
        setDeletePopup()
      
        console.log(err);
      });
  };
};

