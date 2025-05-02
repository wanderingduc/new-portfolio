import Nav from "../common/nav";
import Project from "../common/project";

export default function NotHome() {

    return(
        <>
        <Nav name="David"/>
        <Project name="test" desc={["this is a very long description of test project because i need to see how it works out for this", "and this is a test for multiple paragraphs of said description"]} imgs={['/featureplaceholder.png', '/featureplaceholder.png']} />
        </>
    )

}