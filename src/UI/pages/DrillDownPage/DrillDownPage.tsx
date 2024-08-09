import React from 'react';
import StrainLogAPI from '../../../apis/StrainLogApi';
import { useSearchParams } from 'react-router-dom';
import { StrainLog } from '../../../lib/types';
import StrainCard from '../../components/cards/StrainCard/StrainCard';
import SplashComponent from '../../components/SplashScreen/SplashComponent';

export const DrillDownPage = () => {
    const [searchParams] = useSearchParams();
    const [postInFocus, setPostInFocus] = React.useState<StrainLog>();

    const initializePostInFocus = React.useCallback(async (logId: number) => {
        const log =  await StrainLogAPI.getStrainLogById(logId)
        setPostInFocus(log);
    }, [])

    // React.useEffect(() => {
    //     const logId = +Object.fromEntries([...searchParams])["id"]
    //     if (logId > 0) initializePostInFocus(logId); 
    // }, [searchParams, initializePostInFocus])

    if (!postInFocus) return <SplashComponent />
    return(
        <div>
            <StrainCard
                id={postInFocus.id}
                rating={postInFocus.rating}
                pictureUrl={postInFocus.pictureUrl}
                strain={postInFocus.strain}
                owner={postInFocus.owner}
                review={postInFocus.review}
                cannabinoid={postInFocus.cannabinoid}
                percentage={postInFocus.percentage}
                mgs={postInFocus.mgs}
                isFavorite={postInFocus.isFavorite}
                isBookmarked={postInFocus.isBookmarked}
                comments={postInFocus.comments}
                onEditLog={() => {}}
                onRemoveLog={() => {}}
                onReportContent={() => {}}
                />
        </div>
    )
};

export default DrillDownPage;