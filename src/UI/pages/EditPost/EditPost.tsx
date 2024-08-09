import React from "react";
import LogForm from "../LogForm/LogForm";
import StrainLogApi from "../../../apis/StrainLogApi";
import { useNavWrapper } from "../../../utils/navigate-wrapper/useNavWrapper";
import * as ReactRouterDom from 'react-router-dom'
import { StrainLog } from "../../../lib/types";
import { UserAccountInfo } from "../../../utils/providers/AccountProvider";
import { LogFormContextState, defaultLogFormState } from "../LogForm/LogFormContext/LogFormContextState";
import { LogFormContextProvider } from "../LogForm/LogFormContext/LogFormContext";
import SplashComponent from "../../components/SplashScreen/SplashComponent";

export const EditPost = () => {
    const location = ReactRouterDom.useLocation();
    const acctContext = React.useContext(UserAccountInfo)
    const [postInFocus, setPostInFocus] = React.useState<StrainLog>();
    const nav = useNavWrapper();
    const updateStrainLog = React.useCallback(async (updatedLog: FormData, errorCallback: (error: any) => void) => {
        try {
            await StrainLogApi.updateStrainLog(updatedLog)
            nav('/')
        } catch(e) {
            errorCallback(e);
        }
    }, [nav])
    const initializePostInFocus = React.useCallback(async (logId: number) => {
        const log: StrainLog = await StrainLogApi.getStrainLogById(logId);
        if (log.owner.username !== acctContext.user.username) nav('/no-access')
        setPostInFocus(log);
    }, [setPostInFocus, acctContext.user, nav])

    React.useEffect(() => {
        const logId: number = +(location.search.split("=")[1] || -1);
        if (logId > 0) initializePostInFocus(logId); 
    }, [location.search])

    const initProviderValue: LogFormContextState = React.useMemo(() => {
        if (!!postInFocus) return ({
            logMode: 'edit',
            formElementInFocus: 'none',
            category: postInFocus.strain.category,
            strainId: postInFocus.strain.id,
            strainName: postInFocus.strain.name,
            brandId:  postInFocus.brand.id,
            brandName: postInFocus.brand.name,
            productId: postInFocus.product.id,
            productName: postInFocus.product.name,
            purchaseLocationId: postInFocus.purchaseLocation.id,
            purchaseLocationName: postInFocus.purchaseLocation.name,
            rating: postInFocus.rating,
            review: postInFocus.review,
            strain: postInFocus.strain.strain,
            mgs: postInFocus.mgs,
            percentage: postInFocus.percentage,
            cannibinoid: postInFocus.cannabinoid,
            existingPostId: postInFocus.id,
            existingPhotoUrl: postInFocus.pictureUrl,
            pic: new FormData(),
        })
        else return defaultLogFormState;
    }, [postInFocus])

    if (!postInFocus) return <SplashComponent />

    return (<LogFormContextProvider value={initProviderValue}>
        <LogForm onSubmit={updateStrainLog} />
    </LogFormContextProvider>)
}

export default EditPost;