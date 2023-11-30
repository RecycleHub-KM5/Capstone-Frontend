import React, { useEffect } from "react";
import Sidebar from "../../../components/GlobalComponent/Sidebar";
import MainLayout from "../../../layout/MainLayout";
import History from "../../../components/UserMenu/Transaction";
import { useDispatch, useSelector } from "react-redux";
import { GetTransaction } from "../../../redux/actions/TransactionAction";

const Transaction = () => {
    const storedToken = localStorage.getItem("token");
    const { dataTransaction } = useSelector(
        (state) => state.transactionReducer
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (dataTransaction === null) {
            dispatch(GetTransaction(storedToken));
        }
    }, [dispatch, dataTransaction, storedToken]);

    return (
        <>
            <MainLayout>
                <div className="row">
                    <div className="col-sm-2 col-md-2 col-lg-2">
                        <Sidebar />
                    </div>
                    <div className="col-sm-10 col-md-10 col-lg-10">
                        <History dataTransaction={dataTransaction} />
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Transaction;
