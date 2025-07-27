import BlockedCard from "../../components/composed/blocked-card";
import Pychart from "../../components/composed/pychart";

export default function Dashboard() {
    
    return(
    <div className="flex flex-col w-full h-fit">
        <div className="flex flex-row w-full h-fit">
            <Pychart/>
            <BlockedCard/>
        </div>
        <div>

        </div>
    </div>
    )
}