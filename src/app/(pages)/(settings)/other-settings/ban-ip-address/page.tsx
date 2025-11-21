"use client";
import ProfilesettingsComponent from "@/components/pages/settings/generalSettings/profile";
import BanIpAddressComponent from "@/components/pages/settings/otherSettings/banIpaddress";

export default function BanIpAddressPage(){
    return(
        <>
        <BanIpAddressComponent/>
        <ProfilesettingsComponent />
        </>
    )
} 