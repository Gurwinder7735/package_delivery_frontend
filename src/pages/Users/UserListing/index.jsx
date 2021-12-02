import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, Button, Label, Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import DataTable from "react-data-table-component";

import AddUser from "../AddUser";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import FilterComponent from "../../../components/DataTables/FilterComponent";
import CustomLoader from "../../../components/DataTables/CustomLoader";
import UserColumns from "./UserColumns";
import ConfirmDelete from "../../../components/DataTables/ConfirmDelete";
import { changeStatus, deleteItem, getListing, setItem, toggleModal,
  setModalType, } from "../../../store/common/actions";

const Users = () => {

 const currentModule = 'users';
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [filterText, setFilterText] = useState("");
  const [currentPage, setcurrentPage] = useState();
  const [perPage, setPerPage] = useState(10);


  // PAGINATION
  const handlePageChange = (page) => {
    setcurrentPage(page);
    dispatch(getListing(currentModule,page, perPage));

  };

  const handlePerRowsChange = async (newPerPage, page) => {
    dispatch(getListing(currentModule,page, newPerPage));
  };

  const handleChangeStatus = (id, status) => {
    console.log("ID", id);
    console.log("HANDLE CHANGE STATUS", status);
    dispatch(changeStatus(currentModule,id, status));
  };

  const editPopup = (id) => {
    dispatch(toggleModal());
    dispatch(setModalType("edit"));
    dispatch(setItem(state.common.listing.docs.find((u) => u._id == id)));
  };


  const handleDelete = (id) => {
    setDeletePopup(true);
    setDeleteId(id);
  };

  const confirmDelete = () => {
    dispatch(deleteItem(currentModule,deleteId, setDeletePopup, currentPage,perPage));
  };


 
  const subHeaderComponentMemo = React.useMemo(() => {
 
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
        dispatch={dispatch}
        title="Add User"
      />
    );
  }, [filterText]);


  useEffect(() => {

    if (filterText) {
      dispatch(getListing(currentModule,1, perPage, filterText));
    } else {
      dispatch(getListing(currentModule,1, perPage));
    }

  }, [filterText]);

 
  return (
    <>
      {deletePopup && (
        <ConfirmDelete loading={state.alert.loading} confirmDelete={confirmDelete} setDeletePopup={setDeletePopup}/>
      )}
      <AddUser modal={state.common.isModalOpen} />
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <Breadcrumbs title= {currentModule} />
              <DataTable
                columns={UserColumns(handleChangeStatus,handleDelete,editPopup)}
                data={state.common.listing.docs}
                pagination
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                progressPending={state.alert.loading}
                progressComponent={<CustomLoader />}
                paginationServer
                paginationTotalRows={state.common.listing.totalDocs}
                onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={handlePageChange}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Users;
