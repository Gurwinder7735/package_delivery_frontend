import React from "react"
import { Link } from "react-router-dom"
import Toggle from 'react-toggle'
import {URL} from "../../../index"
import IMG from '../../../assets/images/placeholder.png'

const UserColumns = (handleChangeStatus,handleDelete,editUserPopup) => {

  return [
    {
      name: "#",
      selector: "sr_no",
    },
    {
      name: "Image",
      selector: (row) => {
        return (
        <>
        <img height="100px" style={{objectFit: 'contain',padding: '10px'}} src={URL + row.profile_img} alt={IMG}></img>
        </>
        )
      },
    },
    { 
      name: "Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Status",
      selector: (row) => {
        return (
          <>
            <Toggle
              checked={row.status}
              aria-label="No label tag"
              onChange={(e) => {
                handleChangeStatus(row._id, e.target.checked);
                row.status = !row.status;
              }}
            />
          </>
        );
      },
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <>
            {/* <Link
              onClick={() => editUserPopup(row._id)}
              className="me-3 text-primary"
            >
              <i className="mdi mdi-pencil font-size-18"></i>
            </Link> */}
            <Link
              onClick={() => handleDelete(row._id)}
              className="text-danger"
            >
              <i className="mdi mdi-trash-can font-size-18"></i>
            </Link>
            <Link
              to={`viewUser/${row._id}`}
              className="text-primary"
            >
              <i className="mdi mdi-eye font-size-18"></i>
            </Link>
          </>
        );
      },
    },
  ];
  
}

export default UserColumns