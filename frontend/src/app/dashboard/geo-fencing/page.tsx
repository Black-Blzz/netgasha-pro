import { Toaster } from "sonner";
import CountryForm from "../../../components/composed/forms/geo-feching-form";


export default function GeoFencing() {
    return(
        <div className="flex flex-col items-center w-full">
            <Toaster />
             <CountryForm/>
        </div>
    )
}