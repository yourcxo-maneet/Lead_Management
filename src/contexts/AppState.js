import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

const AppState = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const data = [
    {
      Owner: {
        name: "Karan Ramchandani",
        id: "150959000000150001",
        email: "karan@yourcxo.online",
      },
      Connects_spent_on_boosting: "0",
      Email: user ? user.email : "",
      Project_Title: "",
      Source: "",
      Bid_Type: "",
      Name: "",
      Function: "",
      id: "150959000009254118",
      Project_URL: "",
      Bid_Budget: "",
      Ticket_Type: "",
      Comments: null,
      days_before_job_posted: "",
      Created_Time: Date.now(),
      Unsubscribed_Time: null,
      Bid_Quoted: "",
      $editable: true,
      Bid_Payment_Terms: "",
      Boost_Charges: "",
      connects_spent: "",
      Connects_spent_on_boosting: "",
      $orchestration: false,
      $in_merge: false,
      Locked__s: false,
      Company_Name: "",
      Created_By: {
        name: user ? user.givenName : "",
        id: "150959000008517001",
        email: user ? user.email : "",
      },
      Day: "",
      Boosted_or_not: "",
      Bid_Type: "",
      Location: "",
    },
  ];

  return (
    <AppContext.Provider value={{ user, setUser, data }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
