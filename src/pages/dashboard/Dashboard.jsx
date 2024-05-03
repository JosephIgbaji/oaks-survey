import React, { useEffect, useState } from "react";
import {
  ShimmerTable,
  ShimmerThumbnail,
  ShimmerCircularImage,
  ShimmerSectionHeader,
  ShimmerCategoryItem,
} from "react-shimmer-effects";

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

const Dashboard = () => {
  const { data: usr } = useGetUserQuery();
  const { data: survey } = useGetAllSurveyQuery();
  const [loading, setLoading] = useState(true);

  // const [user, setUser] = useState("");

  useEffect(() => {
    setTimeout(() => {
      // setUser(usr?.user);
      setLoading(false);
    }, 4000);
  }, []);

  const dispatch = useDispatch();

  // console.log(survey?.data);
  return (
    <>
      {loading ? (
        <div className="p-2">
          <ShimmerCategoryItem
            hasImage
            imageType="circular"
            imageWidth={100}
            imageHeight={100}
            title
          />
          {/* <ShimmerSectionHeader /> */}
          {/* <ShimmerSectionHeader center /> */}
        </div>
      ) : (
        <div className="h-[50px] bg-slate-400 mb-5 flex px-5 items-center justify-between">
          <div>Hello, {usr?.user?.name}!</div>

          <button
            onClick={() => handleLogout(dispatch)}
            className="p-1 bg-white rounded-lg text-black"
          >
            Logout
          </button>
        </div>
      )}
      <div className="p-5">
        {loading ? (
          <ShimmerTable row={10} />
        ) : (
          <Table className="overflow-hidden">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">S/N</TableHead>
                <TableHead className="">First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="">Country</TableHead>
                <TableHead className="">User Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {survey?.data?.map((sv, id) => (
                <TableRow key={id}>
                  <TableCell className="font-medium">{id + 1}</TableCell>
                  <TableCell className="">{sv.first_name}</TableCell>
                  <TableCell>{sv.last_name}</TableCell>
                  <TableCell>{sv.email}</TableCell>
                  <TableCell className="">{sv.country}</TableCell>
                  <TableCell className="">{sv.user_type}</TableCell>
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
        )}
      </div>
    </>
  );
};

export default Dashboard;
