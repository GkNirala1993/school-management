import React, { useState } from "react";
import _ from "lodash";
import EditModal from "./EditModal";
import Header from "./Header";
import SideNav from "./SideNav";
import ChangeStateModal from "./ChangeStateModal";

const Enquiry = () => {
  const enquiryData = [
    {
      parent_name: "Parent1",
      child_name: "Student1",
      parent_mobile: "9876543210",
      enquired_class: "6",
      parent_email: "Parent1@gmail.com",
    },
    {
      parent_name: "Parent2",
      child_name: "Student2",
      parent_mobile: "9876541230",
      enquired_class: "8",
      parent_email: "Parent2@gmail.com",
    },
    {
      parent_name: "Parent3",
      child_name: "Student3",
      parent_mobile: "7896541230",
      enquired_class: "10",
      parent_email: "Parent3@gmail.com",
    },
    {
      parent_name: "Parent4",
      child_name: "Student4",
      parent_mobile: "7896541486",
      enquired_class: "9",
      parent_email: "Parent4@gmail.com",
    },
    {
      parent_name: "Parent5",
      child_name: "Student5",
      parent_mobile: "7898741230",
      enquired_class: "12",
      parent_email: "Parent5@gmail.com",
    },
  ];
  const [edit, setEdit] = useState(false);
  const [selected_data, setSeletedData] = useState({});
  const handleEditModalOpen = (data) => {
    setSeletedData(data);
    setEdit(true);
  };
  const handleModalClose = () => {
    setEdit(false);
  };
  return (
    <div>
      <div>
        <Header />
        <div className="d-flex">
          <SideNav />
          <div className="w-100 px-4">
            {_.map(enquiryData, (data, index) => {
              return (
                <div className="list" key={index}>
                  <div className="img-container">
                    <img
                      className="child-img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWC-gNXo5Wd22oY8_BGdHdlMLHcMXvWPWVA&usqp=CAU"
                    />
                  </div>
                  <div className="list_item">{data.child_name}</div>
                  <div className="list_item">{data.parent_name}</div>
                  <div className="list_item">{data.parent_mobile}</div>
                  <div className="list_item">{data.parent_email}</div>
                  <div className="list_item">{data.enquired_class}</div>
                  <div className="list_item">
                    
                    <img
                      className="edit-icon"
                      src="https://www.pngfind.com/pngs/m/202-2022234_png-file-svg-edit-delete-icon-png-transparent.png"
                      alt="Edit"
                      onClick={() => handleEditModalOpen(data)}
                      title="Edit"
                    />
                    <img
                      className="move-icon"
                      src="https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-forward-vector-icon-png-image_470299.jpg"
                      alt="Move"
                      title="Move to Register"
                      onClick={() => handleEditModalOpen(data)}

                    />
                    <img
                      className="delete-icon"
                      src="https://icons.veryicon.com/png/o/application/love-other-car-app-icon/delete-102.png"
                      alt="Delete"
                      title="Delete"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <EditModal
        show={edit}
        handleClose={handleModalClose}
        editData={selected_data}
      />
      <ChangeStateModal show={false}
      
      />
    </div>
  );
};

export default Enquiry;
