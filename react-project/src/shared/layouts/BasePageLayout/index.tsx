import Footer from "../../components/Footer";
import Header from "../../components/Header";

export type BasePageLayoutType = {
    children: React.ReactNode;
};

const BasePageLayout = ({ children }: BasePageLayoutType) =>{
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
};


export default BasePageLayout;
