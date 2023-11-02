import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import SearchBox from "../searchbox/SearchBox"
import Cards from "../cards/Cards";
import Datatable from "../Datatable/Datatable";
import Intro from "../intro/Intro";
import Transcribe from "../transcribe/Transcribe";


const AppLayout = () => {
    return <div style={{
        padding: '10px 0px 0px 350px'
    }}>
        <Sidebar />
        <SearchBox />
        <Intro />
        <Cards />
        <Datatable />
        <Outlet />
    </div>;
};

export default AppLayout;
