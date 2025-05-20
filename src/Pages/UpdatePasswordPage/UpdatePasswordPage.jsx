import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import Footer from "../../Components/Footer/Footer";
import MainNav from "../../Components/MainNav/MainNav";
import TopNav from "../../Components/TopNav/TopNav";
import UpdatePassword from "../../Components/updatePassword/updatePassword";
    
const UpdatePasswordPage = () => {
  return (
    <>
    <TopNav />
    <MainNav />
    <UpdatePassword />  
    <CommonBanner />
    <Footer /> 
    </>
  );
};

export default UpdatePasswordPage;
