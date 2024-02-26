"use client";

import * as z from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { formSchema } from "./buyerTypes";
import { useForm } from "react-hook-form";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from "@/components/ui/form";
import { WelcomePage } from "./welcome-page";
import { AddressForm } from "./address-form";
import { Button } from "@/components/ui/button";
import { LastPageForm } from "./last-page-form";
import { ChooseRoleForm } from "./choose-role-form";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { BasicInformationForm } from "./basic-information-form";

export const CreateAccountForm = () => {
    const [stepForm, setStepForm] = useState(0);
    const [progress, setProgress] = useState(0);
    const [userRole, setUserRole] = useState("");
    const [accountId, setAccountId] = useState("");
    
    const { toast } = useToast();
    const createAccount = useMutation(api.account.createAccount);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            role: "",
            fName: "",
            lName: "",
            email: "",
            profileImageUrl: "",
            address: "",
            city: "",
            country: "",
            zip: "",
        }
    })
    
    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await createAccount(values)
            form.reset();
            toast({
                title: "Account created successfully",
            })
            setStepForm(4);
            setProgress(100);
            setAccountId(response);
            setUserRole(values.role);
        } catch (error) {
            console.error(error)
            toast({
                title: "Account creation failed",
            })
        }
    }

    const next = () => {
        if (stepForm === 1) {
            form.trigger(['role'])
            const roleState = form.getFieldState('role');

            if (!roleState.isDirty) return;

        } else if (stepForm === 2) {
            form.trigger(["fName", "lName", "email", "profileImageUrl"])
            const fNameState = form.getFieldState('fName');
            const lNameState = form.getFieldState('lName');
            const emailState = form.getFieldState('email');
            const profileImageUrlState = form.getFieldState('profileImageUrl');
            if (!fNameState.isDirty || !lNameState.isDirty || !emailState.isDirty || !profileImageUrlState.isDirty) return;

        } else if (stepForm === 3) {
            form.trigger(["address", "city", "country", "zip"])
            const addressState = form.getFieldState('address');
            const cityState = form.getFieldState('city');
            const countryState = form.getFieldState('country');
            const zipState = form.getFieldState('zip');
            if (!addressState.isDirty || !cityState.isDirty || !countryState.isDirty || !zipState.isDirty) return;

        }
        setStepForm(prevStep => {
            const nextStep = prevStep < 4 ? prevStep + 1 : prevStep;
            const calculatedProgress = (nextStep / 4) * 100;
            setProgress(calculatedProgress);
            return nextStep;
        });

    }

    const prev = () => {
        setStepForm(prevStep => {
            if (prevStep > 0) {
                // Calculate progress based on the updated stepForm
                const calculatedProgress = ((prevStep - 1) / 4) * 100;
                setProgress(calculatedProgress);
                return prevStep - 1;
            }
            return prevStep;
        });
    }
    
    return (
        <div className="flex relative w-full items-center justify-center mx-auto px-1">
            <Progress value={progress} className="w-[50%] absolute top-0 " />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-1/2 overflow-x-hidden">
                    <div className="space-y-4 border p-12 rounded-lg shadow-lg">
                        {stepForm === 0 && (
                            <motion.div 
                              initial={{
                                x: '50%',
                                opacity: 0,
                              }}
                              animate={{
                                x: 0,
                                opacity: 1,
                              }}
                              transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: 'easeInOut',
                                type: "spring",
                                stiffness: 200
                              }}
                                >
                            <WelcomePage />
                            </motion.div>
                        )}
                        {stepForm === 1 && (
                            <motion.div
                            initial={{
                                x: '50%',
                                opacity: 0,
                              }}
                              animate={{
                                x: 0,
                                opacity: 1,
                              }}
                              transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: 'easeInOut',
                                type: "spring",
                                stiffness: 200
                              }}
                            >
                                <ChooseRoleForm form={form} />
                            </motion.div>
                        )}
                        {stepForm === 2 && (
                            <motion.div
                            initial={{
                                x: '50%',
                                opacity: 0,
                              }}
                              animate={{
                                x: 0,
                                opacity: 1,
                              }}
                              transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: 'easeInOut',
                                type: "spring",
                                stiffness: 200
                              }}
                            >
                                <BasicInformationForm form={form} />
                            </motion.div>
                        )}
                        {stepForm === 3 && (
                            <motion.div
                            initial={{
                                x: '50%',
                                opacity: 0,
                              }}
                              animate={{
                                x: 0,
                                opacity: 1,
                              }}
                              transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: 'easeInOut',
                                type: "spring",
                                stiffness: 200
                              }}
                            >
                                <AddressForm form={form} />
                            </motion.div>
                        )}
                        {stepForm === 4 && (
                            <motion.div
                            initial={{
                                x: '50%',
                                opacity: 0,
                              }}
                              animate={{
                                x: 0,
                                opacity: 1,
                              }}
                              transition={{
                                delay: 0.5,
                                duration: 0.5,
                                ease: 'easeInOut',
                                type: "spring",
                                stiffness: 200
                              }}
                            >
                                <LastPageForm accountId={accountId} userRole={userRole}/>
                            </motion.div>
                        )}
                        <div className="flex gap-x-4 justify-end pt-4">
                            {stepForm > 0 && stepForm <= 3 && (
                                <Button disabled={isLoading} onClick={prev} type="button" variant="ghost" className="transform hover:-translate-y-1 transition duration-400">Previous</Button>
                            )}

                            {stepForm < 3 ? (
                            <Button disabled={isLoading} onClick={next} type="button" className="bg-primary-color hover:bg-primary-color/90 transform hover:-translate-y-1 transition duration-400">
                                Next
                            </Button>
                            ) : stepForm === 3 ? (
                            <Button disabled={isLoading} type="submit" className="bg-primary-color hover:bg-primary-color/90 transform hover:-translate-y-1 transition duration-400">
                                Submit
                            </Button>
                            ) : null}

                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}