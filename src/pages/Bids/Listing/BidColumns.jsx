import React from "react"
import { Link } from "react-router-dom"
import Toggle from 'react-toggle'
import {URL} from "../../../index"
import IMG from '../../../assets/images/placeholder.png'

const BidColumns = (handleChangeStatus,handleDelete,editUserPopup) => {

  return [
    {
      name: "#",
      selector: "sr_no",
    },
    {
      name: "Post Image",
      selector: (row) => {
        return (
        <>
        <img height="100px" style={{objectFit: 'contain',padding: '10px'}} src={URL + 'user.png'} alt={IMG}></img>
        </>
        )
      },
    },
    { 
      name: "Delivery Person",
      selector: (row) => row.user.firstName,
      sortable: true,
    },
    { 
      name: "Offer Price",
      selector: (row) => row.offerPrice,
      sortable: true,
    },
    { 
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    // {
    //   name: "Pickup Location",
    //   selector: (row) => row.post.pickupLocation.location,
    // },
    // {
    //   name: "Delivery Location",
    //   selector: (row) => row.post.deliveryLocation.location,
    // },
   
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
              to={`viewBid/${row._id}`}
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

export default BidColumns