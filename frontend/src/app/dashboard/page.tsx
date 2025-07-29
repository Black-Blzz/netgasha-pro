import BlockedCard from "../../components/composed/blocked-card";
import LineGraph from "../../components/composed/log-graph";

export default function Dashboard() {
    
    return(
    <div className="flex flex-col w-full h-fit">
        <div className="flex flex-row w-full h-fit gap-10 justify-center items-center">
            <LineGraph/>
            <BlockedCard/>
        </div>
        <div>

        </div>
    </div>
    )
}