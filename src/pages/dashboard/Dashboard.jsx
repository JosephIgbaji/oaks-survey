import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { useGetUserQuery } from "../../service/user.service";
import { handleLogout } from "./../../static/logout";
// import { showAlert } from "../../static/alert";
import { useDispatch } from "react-redux";
import { useGetAllSurveyQuery } from "../../service/allSurvey.service";
// import { logoutUser } from "../../redux/slices/user.slice";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Dashboard = () => {
  const { data: user } = useGetUserQuery();
  const { data: survey } = useGetAllSurveyQuery();

  const dispatch = useDispatch();

  // console.log(survey?.data);
  return (
    <>
      <div className="h-[50px] bg-slate-400 mb-5 flex px-5 items-center justify-between">
        {user?.user && <div>Hello, {user?.user?.name}!</div>}
        <button
          onClick={() => handleLogout(dispatch)}
          className="p-1 bg-white rounded-lg text-black"
        >
          Logout
        </button>
      </div>
      <div className="p-5">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">S/N</TableHead>
              <TableHead className="w-[100px]">First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Country</TableHead>
              <TableHead className="text-right">User Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {survey?.data?.map((sv, id) => (
              <TableRow key={id}>
                <TableCell className="font-medium">{id + 1}</TableCell>
                <TableCell className="font-medium">{sv.first_name}</TableCell>
                <TableCell>{sv.last_name}</TableCell>
                <TableCell>{sv.email}</TableCell>
                <TableCell className="text-right">{sv.country}</TableCell>
                <TableCell className="text-right">{sv.user_type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            {/* <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow> */}
          </TableFooter>
        </Table>
      </div>
    </>
  );
};

export default Dashboard;
