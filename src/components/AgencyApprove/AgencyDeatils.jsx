import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AgencyDeatils = () => {
  const [agency, setAgency] = useState([]);

  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: allAgency = [], refetch } = useQuery({
    queryKey: ["agencyRoute/agency"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agencyRoute/agency`);
      return res.data;
    },
  });

  useEffect(() => {
    setAgency(allAgency.filter((agent) => agent._id === id));
  }, [allAgency, id]);

  console.log(agency);

  const handleVerify = async (id) => {
    await axiosSecure.patch(`/agencyRoute/agency/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `verify and role modified successful`,
          text: "Your file has been update.",
          icon: "success",
        });
      }
    });
  };
  const handleReject = async (id) => {
    await axiosSecure.put(`/agencyRoute/agency/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `Rejection successful`,
          text: "Your file has been update.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-[black] mb-6 border-b-2 border-primary pb-4">
        Agency Details
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-secondary">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-secondary px-4 py-2 text-left">
                Field
              </th>
              <th className="border border-secondary px-4 py-2 text-left">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-secondary px-4 py-2">Agency Name</td>
              <td className="border border-secondary px-4 py-2">
                {agency[0]?.agencyName}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-2">
                Business Registration No
              </td>
              <td className="border border-secondary px-4 py-2">
                {agency[0]?.businessRegNumber}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-2">
                Insurance License No
              </td>
              <td className="border border-secondary px-4 py-2">
                {agency[0]?.insuranceLicenseNumber}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-2">
                Tax Identification No
              </td>
              <td className="border border-secondary px-4 py-2">
                {agency[0]?.taxIdentificationNumber}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-2">
                Transport License No
              </td>
              <td className="border border-secondary px-4 py-2">
                {agency[0]?.transportLicenseNumber}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-2">
                Number of Vehicles
              </td>
              <td className="border border-secondary px-4 py-2">
                {agency[0]?.numberOfVehicles}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-2">
                Agency Address
              </td>
              <td className="border border-secondary px-4 py-2">
                {`Division: ${agency[0]?.agencyAddress.division}, District: ${agency[0]?.agencyAddress.district}, Upazilla: ${agency[0]?.agencyAddress.upazilla}, Area: ${agency[0]?.agencyAddress.area}, Street: ${agency[0]?.agencyAddress.street}`}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-2">Status</td>
              <td className="border border-secondary px-4 py-2 font-bold">
                {agency[0]?.status}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-2">Role</td>
              <td className="border border-secondary px-4 py-2">
                {agency[0]?.userRole}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pt-10 flex gap-5 items-center justify-center">
        <button
          onClick={() => handleVerify(agency[0]?._id)}
          className="bg-primary hover:bg-transparent hover:border-2 border-primary hover:text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-4 py-2 text-background rounded-lg font-nunito font-semibold"
        >
          Verify
        </button>
        <button
          onClick={() => handleReject(agency[0]?._id)}
          className="bg-primary hover:bg-transparent hover:border-2 border-primary hover:text-primary duration-500 active:scale-75 shadow-inner shadow-secondary border-2 px-4 py-2 text-background rounded-lg font-nunito font-semibold"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default AgencyDeatils;
