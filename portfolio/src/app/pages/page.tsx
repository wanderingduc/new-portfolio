'use client'

import { useEffect } from "react";
import Nav from "../common/nav";
import Project from "../common/project";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import Footer from "../common/footer";

export default function NotHome() {

    const params = useSearchParams();

    const renderContent = () => {


        const name = params.get('name');
        const desc = params.getAll('desc');

        return (
            <>
                <Nav name="David" />
                <Project name={name ? name : 'Project'} desc={desc} imgs={['/featureplaceholder.png', '/featureplaceholder.png']} />
            </>
        )


    }


    return(
        <>
        {renderContent()}
            <Footer text="David Duc-Trung Nguyen 2025" />
        </>
    )

}