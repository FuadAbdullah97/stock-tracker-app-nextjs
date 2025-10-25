"use client"

import React, {useDeferredValue} from 'react'
import {useForm} from "react-hook-form";
import {SignUpFormData} from "@/types/global";
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/inputField";
import SelectField from "@/components/forms/selectField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import { CountrySelectField } from "@/components/forms/countrySelect";

function SignUpPage() {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
       defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'US',
            investmentGoal: 'Grow',
            riskTolerance: '',
            preferredIndustry: '',


        },
        mode: 'onBlur'
    })
    const onSubmit = async (data:SignUpFormData)=> {
        try {
            console.log(data);
        }catch (e){
            console.error(e)
        }
    }



    return (
        <>
        <h1 className={"form-title"}>Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={"space-y-5"}>

                <InputField
                name="fullName"
                label="Full Name"
                placeholder="John Doe"
                register={register}
                error={errors.fullName}
                validation={{required : "Full Name Required", minLength : 2}}
                />
                <InputField
                    name="email"
                    label="Email"
                    placeholder="JohnDoe@emial.com"
                    register={register}
                    error={errors.email}
                    validation={{
                        required: "Email is Required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email format"
                        }
                    }}
                />
                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter a strong Password"
                    register={register}
                    error={errors.password}
                    validation={{required : "Full Name Required", minLength : 8}}
                />


                <CountrySelectField
                name="country"
                label={"Country"}
                control={control}
                />


                <SelectField
                    name= "investmentGoals"
                    label ="Investment Goal"
                    placeholder="Select Your Investment Goal"
                    options={INVESTMENT_GOALS}
                    error={errors.investmentGoal?.message}
                    control={control}
                    required
                />

                <SelectField
                    name= "riskTolerance"
                    label ="Risk Tolerance"
                    placeholder="Select Your Risk Tolerance"
                    options={RISK_TOLERANCE_OPTIONS}
                    error={errors.riskTolerance?.message}
                    control={control}
                    required
                />


                <SelectField
                    name= "preferredIndustry"
                    label ="Preferred Industry"
                    placeholder="Select Your Preferred Industry"
                    options={PREFERRED_INDUSTRIES}
                    error={errors.preferredIndustry?.message}
                    control={control}
                    required
                />

                <Button type="submit" disabled={isSubmitting} className={"yellow-btn w-full mt-5"}>
                    {isSubmitting ? "Creating Account" : "Start Your Investing Journey"}
                </Button>

            </form>

        </>
    )
}

export default SignUpPage
