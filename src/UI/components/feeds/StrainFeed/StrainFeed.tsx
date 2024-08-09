import { StrainLog } from '../../../../lib/types'
import StrainCard from '../../cards/StrainCard/StrainCard'
import StrainCardCondensed from '../../cards/StrainCardCondensed/StrainCardCondensed'

interface IMainStrainFeedProps {
    strainLogs: StrainLog[];
    condensed?: boolean;
    onRemoveLog: (logId: number) => void;
    onEditLog: (log: StrainLog) => void;
    onReportContent: (logId: number) => void;
}

export const StrainFeed = (props: IMainStrainFeedProps) => {
    return (
        <div>
            {!props.condensed && props.strainLogs.map((strainLog: StrainLog, ix) => (
                <StrainCard
                    key={"strain-card-" + strainLog.pictureUrl + ix}
                    id={strainLog.id}
                    rating={strainLog.rating}
                    pictureUrl={strainLog.pictureUrl}
                    strain={strainLog.strain}
                    brand={strainLog.brand}
                    product={strainLog.product}
                    purchaseLocation={strainLog.purchaseLocation}
                    owner={strainLog.owner}
                    review={strainLog.review}
                    cannabinoid={strainLog.cannabinoid}
                    percentage={strainLog.percentage}
                    mgs={strainLog.mgs}
                    isFavorite={strainLog.isFavorite}
                    isBookmarked={strainLog.isBookmarked}
                    comments={strainLog.comments}
                    onEditLog={() => props.onEditLog(strainLog)}
                    onRemoveLog={props.onRemoveLog}
                    onReportContent={props.onReportContent}
                    />
                ))}
            {props.condensed && props.strainLogs.map((strainLog: StrainLog, ix) => <StrainCardCondensed key={"strain-card-" + ix} id={strainLog.id} rating={strainLog.rating} pictureUrl={strainLog.pictureUrl} strain={strainLog.strain}  owner={strainLog.owner}  review={strainLog.review} isFavorited={strainLog.isFavorite} />)}
        </div>
    )
}

export default StrainFeed