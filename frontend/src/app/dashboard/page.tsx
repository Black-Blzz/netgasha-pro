import BlockedCard from "../../components/composed/blocked-card";
import LineGraph from "../../components/composed/log-graph";
import PyChart from "../../components/composed/pychart";

export default function Dashboard() {
    
    return(
    <div className="flex flex-col w-full h-fit">
        <div className="flex flex-row w-full h-fit gap-10 justify-center items-center">
            <LineGraph/>
            <BlockedCard/>
        </div>
        <div className="flex justify-center items-center w-full h-fit">
            <PyChart/>
        </div>
    </div>
    )
}