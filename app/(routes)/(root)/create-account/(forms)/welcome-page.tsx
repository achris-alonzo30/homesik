
import { InfoCircledIcon } from "@radix-ui/react-icons"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export const WelcomePage = () => {
    return (
        <Card className="flex flex-col justify-center w-full">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center leading-7">Welcome To{" "}<span className="capitalize font-bold text-primary-color">Homesik</span></CardTitle>
                <CardDescription className="text-sm text-muted-foreground font-normal text-center leading-6">Please review the steps before you get started.</CardDescription>
                
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full" >
                    <AccordionItem value="item-1" >
                        <AccordionTrigger>Step 1. Choose your role</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2">
                                <p>&#x2022; You have 3 options to pick: <span className="font-semibold">Buyer | Seller | Renter.</span></p>
                                <p>&#x2022; <span className="font-semibold">Verification of all accounts is mandatory</span> before engaging in any actions within the application. This step is crucial to establish trust and safeguard against potential scams. Please ensure that your account is verified to maintain a secure environment.</p>
                                <p>&#x2022; Once you&apos;ve selected the <span className="font-semibold">Seller</span> role, <span className="font-semibold">you won&apos;t be able to switch back</span>. Please choose your role carefully, as changing it won&apos;t be possible once you&apos;ve opted for the Seller role.</p>
                                <p>&#x2022; If you choose the <span className="font-semibold">Buyer</span> role, <span className="font-semibold">you can toggle between buyer and renter roles</span> in your profile. However, please note that <span className="font-semibold">you cannot switch to the Seller role</span>.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Step 2. Providing your basic information</AccordionTrigger>
                        <AccordionContent>
                        <div className="space-y-2">
                                <p>&#x2022; At <span className="font-semibold text-primary-color">Homesik</span>, we request only the essential basic information: your <span className="font-semibold">Name, Email, and Profile Picture</span>. Providing these details ensures a smoother and more personalized experience within the app.</p>
                                <p>&#x2022; For <span className="font-semibold">buyers</span>, providing basic information is crucial for a personalized experience and tailored property recommendations that align with preferences, ensuring a more effective and satisfying app experience.</p>
                                <p>&#x2022; As a <span className="font-semibold">sellers</span>, providing your basic information is crucial for enhancing your platform experience and helps fosters trust. Accurate information increases visibility, attracting potential buyers or renters and fostering trust for a more efficient and successful property transaction.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Step 3. Providing your address</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2">
                                <p>&#x2022; At <span className="font-semibold text-primary-color">Homesik</span>, we prioritize your privacy and only request the necessary information. For address details, we kindly ask for your address, city, country, and ZIP code. Your data is handled securely to ensure a safe and seamless experience within the app.</p>
                                <p>&#x2022; For <span className="font-semibold">buyers</span>, providing your address information is necessary as this allows us to offer more accurate property recommendations based on your location. Rest assured, your privacy remains a top priority, and your data is handled securely.</p>
                                <p>&#x2022; As a <span className="font-semibold">seller</span>, , you have the option to include your personal address, along with other details. While providing your address is optional, it can help build trust with potential buyers or renters. Rest assured, your privacy is a priority, and we handle your information securely to facilitate a successful property transaction.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}