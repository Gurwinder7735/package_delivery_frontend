import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  Container,
} from "reactstrap";
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation";

import { useDispatch, useSelector } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { URL } from "../..";
import { useHistory, useParams } from "react-router";
import { getItem } from "../../store/common/actions";

const ViewUser = () => {


  let currentModule = 'users'

  const dispatch = useDispatch();
  const {item} = useSelector((state) => state.common);
  const history = useHistory()
  const {id} = useParams()
  
   useEffect(() => {
  
        dispatch(getItem(currentModule,id))   
    
   },[id])

  



  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <Breadcrumbs title="User" />
              <Card>
                <CardBody>
                  <h4 className="card-title">User</h4>
                  <p className="card-title-desc">
                  
                  </p>
                  <AvForm className="needs-validation">

                  <Row>
                     
                      <Col md="6">
                        <div className="mb-3">
                          <img style={{height: '100px'}} src={URL + item.profile_img}></img>
                        </div>
                      </Col>
                    </Row>


                    <Row>
                      <Col md="6">
                        <div className="mb-3">
                          <Label
                            className="form-label"
                            htmlFor="validationCustom01"
                          >
                            Name
                          </Label>
                          <AvField
                            name="name"
                            placeholder="Product name"
                            type="text"
                            errorMessage="Enter Product Name"
                            className="form-control"
                            id="validationCustom01"
                            value={item.firstName}
                            disabled
                            
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <Label
                            className="form-label"
                            htmlFor="validationCustom02"
                          >
                            Role
                          </Label>
                          <AvField
                            name="price"
                            placeholder=""
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                            disabled
                            value={item.userType == '1' ? 'User': 'Delivery'}
                            // onChange={handleChange}
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6">
                        <div className="mb-3">
                          <Label
                            className="form-label"
                            htmlFor="validationCustom05"
                          >
                            Phone
                          </Label>
                          <AvField
                            name="stock"
                            placeholder=""
                            type="text"
                            errorMessage="Enter Stock"
                            className="form-control"
                            validate={{ required: { value: true } , pattern: {
                              value: "^[0-9]+$",
                              errorMessage: "Only Numbers"
                            }}}
                            id="validationCustom02"
                            disabled
                            value={item.phone}
                            // onChange={handleChange}
                          />
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="mb-3">
                          <Label
                            className="form-label"
                            htmlFor="validationCustom05"
                          >
                            Email
                          </Label>
                          <AvField
                            name="stock"
                            placeholder=""
                            type="text"
                            errorMessage="Enter Stock"
                            className="form-control"
                            validate={{ required: { value: true } , pattern: {
                              value: "^[0-9]+$",
                              errorMessage: "Only Numbers"
                            }}}
                            id="validationCustom02"
                            disabled
                            value={item.email}
                            // onChange={handleChange}
                          />
                        </div>
                      </Col>

                    </Row>  

                      <Row>
                      <Col md="6">
                        <div className="mb-3">
                          <Label
                            className="form-label"
                            htmlFor="validationCustom05"
                          >
                            Address
                          </Label>
                          <AvField
                            name="stock"
                            placeholder=""
                            type="text"
                            errorMessage="Enter Stock"
                            className="form-control"
                            validate={{ required: { value: true } , pattern: {
                              value: "^[0-9]+$",
                              errorMessage: "Only Numbers"
                            }}}
                            id="validationCustom02"
                            disabled
                            value={item.address}
                            // onChange={handleChange}
                          />
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="mb-3">
                          <Label
                            className="form-label"
                            htmlFor="validationCustom05"
                          >
                            Created At
                          </Label>
                          <AvField
                            name="stock"
                            placeholder=""
                            type="text"
                            errorMessage="Enter Stock"
                            className="form-control"
                            validate={{ required: { value: true } , pattern: {
                              value: "^[0-9]+$",
                              errorMessage: "Only Numbers"
                            }}}
                            id="validationCustom02"
                            disabled
                            value={item.createdAt}
                            // onChange={handleChange}
                          />
                        </div>
                      </Col>

                    </Row>            

                  </AvForm>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ViewUser;