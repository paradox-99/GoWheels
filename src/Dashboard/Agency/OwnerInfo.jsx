import UserProfileCommon from "../common/UserProfileCommon";

// const OwnerInfo = () => {
//   // console.log(email);
//   const { user } = useContext(AuthContext);
//   const queryClient = useQueryClient();
//   const axiosSecure = useAxiosSecure();
//   // Fetch owner information
//   const {
//     data: owner,
//     isPending,
//     error,
//   } = useQuery({
//     queryKey: ["owner", user?.email],
//     queryFn: async () => {
//       const { data } = await axiosSecure.get(
//         `/agencyRoute/agency/owner/${user?.email}`
//       );
//       console.log(data);
//       return data;
//     },
//     enabled: !!user?.email,
//   });

//   // Update agency owner info mutation
//   const { mutateAsync } = useMutation({
//     mutationFn: async (updateAgencyOwnerInfo) => {
//       const { data } = await axiosSecure.patch(`/agencyRoute/agency/updateAgencyOwnerInfo/${user?.email}`, updateAgencyOwnerInfo);
//       console.log(data);
//       return data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['owner', user?.email]);
//       alert('Owner information updated successfully!');
//     },
//     onError: (error) => {
//       alert(`Failed to update owner information: ${error.message}`);
//     },
//   });


//   if (isPending) {
//     return <div className="w-full h-screen flex items-center justify-center">
//       <div>
//         <img src={loaderImage} alt="Loading..." className="w-[150px]" />
//       </div>
//     </div>;
//   }
//   if (error) {
//     return <div>Error fetching data: {error.message}</div>;
//   }
//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const updatedOwnerData = Object.fromEntries(formData.entries());

//     await mutateAsync(updatedOwnerData);
//     // const { data } = await axiosSecure.put(`/agencyRoute/agency/updateAgencyOwnerInfo/${user?.email}`, updatedOwnerData);

//   };
//   if (!user) {
//     return <div className="w-full h-screen flex items-center justify-center">
//       <div>
//         <img src={loaderImage} alt="Loading..." className="w-[150px]" />
//       </div>
//     </div>;
//   }


//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold text-black mb-6">
//         Update Owner Information
//       </h1>

//       <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
//         <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* <div>
//             <label className="w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50">
//               <div className="text-center">
//                 <div className="mb-2">
//                   <button
//                     type="button"
//                     className="bg-[#ff4c30] hover:bg-[#161616] text-white rounded-full py-2 px-4"
//                   >
//                     Select from the computer
//                   </button>
//                 </div>
//                 <p className="text-gray-500">or drag photo here</p>
//                 <p className="text-gray-500 text-sm mt-1">PNG, JPG, SVG</p>
//               </div>
//             </label>
//             <input
//               id="avatar"
//               name="avatar"
//               type="file"
//               accept="image/*"
//               className="sr-only"
//             />
//           </div> */}
//         </div>

//         <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               placeholder="First name"
//               defaultValue={owner?.firstName}
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
//               style={{ backgroundColor: "#f6f6f6" }}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               placeholder="Last Name"
//               defaultValue={owner?.lastName}
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
//               style={{ backgroundColor: "#f6f6f6" }}
//             />
//           </div>
//         </div>

//         <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               placeholder="phone"
//               defaultValue={owner?.phone || ""}
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
//               style={{ backgroundColor: "#f6f6f6" }}
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               id="nid"
//               name="nid"
//               placeholder="Nid"
//               defaultValue={owner?.nid || ""} // Use nid directly
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
//               style={{ backgroundColor: "#f6f6f6" }}
//             />
//           </div>
//         </div>

//         <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <input
//               type="text"
//               id="dateOfBirth"
//               name="dateOfBirth"
//               placeholder="Date Of Birth"
//               defaultValue={owner?.dateOfBirth || ""}
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
//               style={{ backgroundColor: "#f6f6f6" }}
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               id="accountStatus"
//               name="accountStatus"
//               placeholder="Account status"
//               defaultValue={owner?.accountStatus || ""} // Use nid directly
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
//               style={{ backgroundColor: "#f6f6f6" }}
//               disabled
//             />
//           </div>
//         </div>

//         <div className="p-2">
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Email"
//             defaultValue={owner?.userEmail}
//             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
//             style={{ backgroundColor: "#f6f6f6" }}
//           />
//         </div>

//         {/* address */}
//         <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div>
//             <label className="font-bold" htmlFor="">
//               District
//             </label>

//             <input
//               type="text"
//               id="district"
//               name="district"
//               placeholder="district"
//               defaultValue={owner?.userAddress?.district || ""}
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
//               style={{ backgroundColor: "#f6f6f6" }}
//             />
//           </div>

//           <div>
//             <label className="font-bold" htmlFor="">
//               Division
//             </label>
//             <input
//               type="text"
//               id="division"
//               name="division"
//               placeholder="division"
//               defaultValue={owner?.userAddress?.division || ""}
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
//               style={{ backgroundColor: "#f6f6f6" }}
//             />
//           </div>
//           <div>
//             <label className="font-bold" htmlFor="">
//               Upazilla
//             </label>

//             <input
//               type="text"
//               id="upazilla"
//               name="upazilla"
//               placeholder="upazilla"
//               defaultValue={owner?.userAddress?.upazilla || ""}
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
//               style={{ backgroundColor: "#f6f6f6" }}
//             />
//           </div>
//         </div>

//         {/* password */}
//         {/* <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <input
//               type="password"
//               id="newPassword"
//               name="newPassword"
//               placeholder="New password"
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
//               style={{ backgroundColor: "#f6f6f6" }}
//             />
//           </div>

//           <div>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               placeholder="Confirm password"
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#161616] focus:ring-[#161616] focus:ring-opacity-50 p-2"
//               style={{ backgroundColor: "#f6f6f6" }}
//             />
//           </div>
//         </div> */}

//         {/* agency information----------- */}

//         <div className="col-span-full mt-6 p-2">
//           <button
//             type="submit"
//             className="block w-full bg-[#ff4c30] hover:bg-[#161616] text-white font-bold py-3 px-4 rounded-full"
//           >
//             Update Owner Information
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };


const OwnerInfo = () => {
  return (
    <div>
      <UserProfileCommon></UserProfileCommon>
    </div>
  );
};

export default OwnerInfo;

