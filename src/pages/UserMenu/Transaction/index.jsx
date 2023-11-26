import React from "react";
import Sidebar from "../../../components/GlobalComponent/Sidebar";
import MainLayout from "../../../layout/MainLayout";
import History from "../../../components/UserMenu/Transaction";

const Transaction = () => {
    return (
        <>
            <MainLayout>
                <div className="row">
                    <div className="col-sm-2 col-md-2 col-lg-2">
                        <Sidebar />
                    </div>
                    <div className="col-sm-10 col-md-10 col-lg-10">
                        <History />
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Transaction;
