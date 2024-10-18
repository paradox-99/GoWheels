import useDriverList from "../../hooks/useDriverList";
import Availabledriver from "./Availabledriver";

const DriverList = ({ role }) => {

    const { driverData, isLoading, refetch } = useDriverList({ role });

    console.log(driverData)
    return (
        <div>
            <h1>Choose a driver which you want to</h1>

            <div className="space-y-3">
                {
                    driverData.map((driver) => <Availabledriver key={driver._id} driver={driver} isLoading={isLoading} refetch={refetch}></Availabledriver>)
                }
            </div>
        </div>
    );
};

export default DriverList;