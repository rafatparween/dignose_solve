import JivoChat from "./JivoChat";
import PageFooter from "./SoftwareDevelopment/pages/PageFooter";
import PageHeader from "./SoftwareDevelopment/pages/PageHeader";
import PageNavbar from "./SoftwareDevelopment/pages/PageNavbar";
import SupportTabs from "./SoftwareDevelopment/pages/SupportTabs";
import Troubleshoot from "./SoftwareDevelopment/pages/Troubleshoot";

<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />




function Home() {
  return (
    <>

      <PageNavbar/>
      <PageHeader/>
      <Troubleshoot/>
      <SupportTabs/>
      <PageFooter/>
      <JivoChat/>
      

    </>
  )
}
export default Home;


