import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/components/ui/input-otp.tsx";
import {DialogDescription} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/context/AuthContext.tsx";
import {Card, CardContent, CardDescription} from "@/components/ui/card.tsx";
import {cn} from "@/lib/utils.ts";


type ErrorType = {
    id: number;
    title: string;
    description: string
} | null;

interface OTPFormProps {
    form: any;
    nextStep: () => void;
    setErrors: (error: ErrorType) => void;
}

export default function VerificationOTP({form, nextStep, setErrors}: OTPFormProps) {

    const [value, setValue] = useState("");
    const context = useContext(AuthContext);

    useEffect(() => {
        requestOTP();
    }, []);

    async function submitOTP(value: string) {
        try {
            // TODO Ovde treba dodati zahtev za slanje otp na backend
            console.log(value)
            const response = true;
            form.setValue("otp", value);
            if(response)
                nextStep()

        } catch (error) {
            console.error("Failed to confirm OTP:", error);
            setErrors({
                id: Date.now(),
                title: "Failed to confirm OTP",
                description: error && typeof error === "object" && "message" in error
                    ? String(error.message)
                    : String(error || "An error occurred"),
            });
        }
    }

    async function requestOTP() {
        try {
            // TODO Ovde treba da se doda zahtev za dobijanje mejla o otp

        } catch (error) {
            console.error("Failed to reach backend:", error);
            setErrors({
                id: Date.now(),
                title: "Failed to reach backend",
                description: error && typeof error === "object" && "message" in error
                    ? String(error.message)
                    : String(error || "An error occurred"),
            });
        }
    }


    const handleChange = (value: string) => {
        setValue(value)
        if(value.length === 6)
            submitOTP(value)
    }


    return (
        <Card className={cn("flex flex-col gap-6 bg-transparent border-0")}>
            <CardContent>
            <h2 className="text-2xl font-heading font-semibold text-center mt-4 mb-8">Verification required</h2>
            <InputOTP maxLength={6} className="flex justify-center gap-4" value={value} onChange={handleChange}>
                <InputOTPGroup className="flex gap-4 justify-center">
                    <InputOTPSlot index={0} className="w-14 h-14 text-2xl font-bold text-center border border-border rounded-lg" />
                    <InputOTPSlot index={1} className="w-14 h-14 text-2xl font-bold text-center border border-border rounded-lg" />
                    <InputOTPSlot index={2} className="w-14 h-14 text-2xl font-bold text-center border border-border rounded-lg" />
                    <InputOTPSeparator />
                    <InputOTPSlot index={3} className="w-14 h-14 text-2xl font-bold text-center border border-border rounded-lg" />
                    <InputOTPSlot index={4} className="w-14 h-14 text-2xl font-bold text-center border border-border rounded-lg" />
                    <InputOTPSlot index={5} className="w-14 h-14 text-2xl font-bold text-center border border-border rounded-lg" />
                </InputOTPGroup>
            </InputOTP>
            </CardContent>
            <CardDescription>
            <DialogDescription className="text-center font-light">
                An email has been sent to {context?.user?.email}
            </DialogDescription>
            <DialogDescription className="text-center font-light">
                Didn't receive the code? <Button size="tight" variant="link">Resend verification code</Button>
            </DialogDescription>
            </CardDescription>

        </Card>
    )
}