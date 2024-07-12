import { FC, ReactNode } from "react";



interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  
  return (
    <>
     
        <div className="bg-white">
          <div className=" max-w-7xl mx-auto">{children}</div>
        </div>
    
    </>
  );
};

export default Layout;
