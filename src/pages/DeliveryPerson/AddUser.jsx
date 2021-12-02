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
import { useHistory } from "react-router";
import { addItem, updateItem , setModalType, toggleModal} from "../../store/common/actions";

const AddUser = ({ modal, modalType }) => {

  const currentModule = "users"
  const dispatch = useDispatch();
  const state = useSelector((state) => state.common);
  let history = useHistory();
  
  // let user = 
  

  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    image: "",
  });

  useEffect(() => {
    setData({
      name: state.item.name,
      email: state.item.email,
      age: state.item.age,
      gender: state.item.gender
    })
  }, [state.item])

 
  const handleChange = (e) => {
    console.log();

    if (e.target.name === "image") {
      setData((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.files[0],
        };
      });
    } else {
      setData((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    }

    console.log(data);
  };

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("gender", data.gender);
    formData.append("age", data.age);
    formData.append("image", data.image);
    dispatch(addItem(currentModule,formData, history, clearInputs));
  };

  const handleUpdate = () => {

    let formData = new FormData();
    console.log(state.item._id);
    // alert(state.user.user_id)
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("gender", data.gender);
    formData.append("age", data.age);
    if(data.image){
      formData.append("image", data.image);
    }
    dispatch(updateItem(currentModule,state.item._id,formData, clearInputs));
    
  }

  const clearInputs = () => {
    setData({
      name: "",
      email: "",
      gender: "",
      age: "",
      image: "",
    });
  };

  return (
    <div>
      <Modal isOpen={state.isModalOpen} scrollable={true}>
        <ModalHeader toggle={()=> dispatch(toggleModal())}>Add {currentModule}</ModalHeader>
        <ModalBody>
          <div className="pae-content">
            <Row>
              <Col md={{ size: 12 }}>
                <AvForm
                  className="needs-validation"
                  onValidSubmit={state.modalType != 'edit'? ()=> handleSubmit() :()=> handleUpdate()}              
                > 
                  
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="validationCustom01"
                        >
                          Name
                        </Label>
                        <AvField
                          name="name"
                          placeholder="Name"
                          type="text"
                          errorMessage="Enter Name"
                          className="form-control"
                          validate={{
                            required: { value: true },
                            minLength: {
                              value: 3,
                              errorMessage: "Min 3 chars.",
                            },
                          }}
                          id="validationCustom01"
                          value={data.name}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="validationCustom02"
                        >
                          Email
                        </Label>
                        <AvField
                          name="email"
                          placeholder="Email"
                          type="text"
                          errorMessage="Enter Email"
                          className="form-control"
                          validate={{ required: { value: true }, email: true }}
                          id="validationCustom02"
                          value={data.email}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="validationCustom02"
                        >
                          Age
                        </Label>
                        <AvField
                          name="age"
                          placeholder="Age"
                          errorMessage="Enter Age"
                          type="number"
                          className="form-control"
                          validate={{
                            required: { value: true, email: true },
                          }}
                          id="validationCustom02"
                          value={data.age}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="validationCustom04"
                        >
                          Select Gender
                        </Label>
                        <AvRadioGroup
                          inline
                          name="gender"
                          // label="Gender"
                          required
                          errorMessage="Please Select Gender"
                          value={data.gender}
                          onChange={handleChange}
                        >
                          <AvRadio label="Male" value="M" />
                          <AvRadio label="Female" value="F" />
                        </AvRadioGroup>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="validationCustom02"
                        >
                          Profile Image
                        </Label>
                        <AvField
                          name="image"
                          placeholder="Select Image"
                          type="file"
                          errorMessage="Select Image"
                          className="form-control"
                          validate={{ required: { value: true } }}
                          id="validationCustom02"
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>

                  <ModalFooter>
                    <Button
                      width="100"
                      color="primary"
                      type="submit"
                      disabled={state.loading}
                    >
                      {state.loading ? (
                        <Loader
                          type="TailSpin"
                          color="#00BFFF"
                          height={20}
                          width={48}
                        />
                      ) : (
                        state.modalType == 'edit'? 'Update': 'Submit'
                      
                      )}
                    </Button>
                    <Button color="secondary" onClick={() =>{ 
                      dispatch(toggleModal())
                      dispatch(setModalType(''))                        
                      clearInputs()
                      }}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </AvForm>
              </Col>
            </Row>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddUser;