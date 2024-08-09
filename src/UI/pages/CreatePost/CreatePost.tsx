import React from "react";
import StrainLogApi from "../../../apis/StrainLogApi";
import { useNavWrapper } from "../../../utils/navigate-wrapper/useNavWrapper";
import LogForm from "../LogForm/LogForm";
import { LogFormContextProvider } from "../LogForm/LogFormContext/LogFormContext";

const CreatePost = () => {
    const nav = useNavWrapper();
    const createStrainLog = React.useCallback(async (newLog: FormData, errorCallback: (error: any) => void) => {
        try {
            await StrainLogApi.createNewStrainLog(newLog)
            nav('/')
        } catch(e) {
            errorCallback(e);
        }
    }, [nav])
    
    return (<LogFormContextProvider>
        <LogForm onSubmit={createStrainLog} />
    </LogFormContextProvider>)
}

export default CreatePost;