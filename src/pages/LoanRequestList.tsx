import {Toaster} from "@/components/ui/sonner.tsx";
import LoanRequestTable from "@/components/loans/employee/requestTable/LoanRequestTable";


export default function LoanRequestList() {
    return (
        <main>
            <Toaster richColors />
            <LoanRequestTable />
        </main>
    );
}
