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
// import IMG from '../../assets/images/'
const ViewPost = () => {


  let currentModule = 'posts'

  const dispatch = useDispatch();
  const {item} = useSelector((state) => state.common);
  const history = useHistory()
  const {id} = useParams()
  
   useEffect(() => {
  
        dispatch(getItem(currentModule,id))   
    
   },[id])

  console.log('ID',id);



  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <Breadcrumbs title="Post" />
              <Card>
                <CardBody>
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-title-desc">
                  
                  </p>
                  <AvForm className="needs-validation">

                  <Row>
                     {
                       item && item.images && item.images.map((img)=>{
                         return <Col>
                          <div className="mb-3">
                            <img style={{height: '100px'}} src={URL + 'user.png'} ></img>
                          </div>
                         </Col>
                       })
                     }
                     <p>{item.description}</p>
                    </Row>


                    <Row>
                      <Col md="6">
                        <div className="mb-3">
                          <Label
                            className="form-label"
                            htmlFor="validationCustom01"
                          >
                            Pickup Location
                          </Label>
                          <AvField
                            name="name"
                            placeholder="Product name"
                            type="text"
                            errorMessage="Enter Product Name"
                            className="form-control"
                            id="validationCustom01"
                            value={item && item.pickUpLcation ? item.pickupLocation.location:''}
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
                            Delivery Location
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
                            value={item && item.deliveryLocation ? item.deliveryLocation.location: ''}
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
                            Pickup Date
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
                            value={item.pickupDate}
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
                            PickupTime
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
                            value={item.pickupTime}
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
                            Posted By
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
                            value={item && item.user ? item.user.firstName: ''}
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
                            Posted On
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

export default ViewPost;