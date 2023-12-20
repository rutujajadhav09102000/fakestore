import React from "react";
import { Outlet} from 'react-router-dom'

const Header = () => {
    return(
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>FakeShope</h2>
            </div>
            {/* <Outlet/> */}
        </div>
    )
}
export default Header