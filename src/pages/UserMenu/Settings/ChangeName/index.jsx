import React from "react";
import MainLayout from "../../../../layout/MainLayout";
import SidebarSettings from "../../../../components/GlobalComponent/SidebarSetting";
import ChangeNameContent from "../../../../components/UserMenu/ChangeName";

const ChangeName = () => {
    return (
        <MainLayout>
            <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <SidebarSettings />
                </div>
                <div className="col-sm-10 col-md-10 col-lg-10">
                    <ChangeNameContent />
                </div>
            </div>
        </MainLayout>
    );
};

export default ChangeName;
