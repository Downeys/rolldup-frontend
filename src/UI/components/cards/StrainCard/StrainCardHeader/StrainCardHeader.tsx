import React from 'react';
import OptionsButton from '../../../buttons/OptionsButton/OptionsButton';
import { STRAIN_CATEGORIES } from '../../../../constants';
import { UserAccountInfo } from '../../../../../utils/providers/AccountProvider';
import ErrorIcon from '../../../icons/ErrorIcon';
import PencilIcon from '../../../icons/PencilIcon';
import RemovePostIcon from '../../../icons/RemovePostIcon';
import Text from '../../../../components/typography/Text/Text'

interface StrainCardHeaderProps {
    id: number;
    username: string;
    category: string;
    mgs?: number;
    percentage?: number;
    strainName?: string;
    brandName?: string;
    productName?: string;
    purchaseLocationName?: string;
    strain: string;
    cannabinoid: string;
    onReportContent: (logId: number) => void;
    onEditLog: () => void;
    onRemoveLog: (logId: number) => void;
}

export const StrainCardHeader = (props: StrainCardHeaderProps) => {
    const { category, id, username, mgs, percentage, strain, cannabinoid, strainName, brandName, productName,  onRemoveLog, onReportContent, onEditLog } = props;
    const acctContext = React.useContext(UserAccountInfo)
    const Icon = React.useMemo(() => STRAIN_CATEGORIES.filter(cat => cat.name === category).map(c => c.icon)[0], [category]);
    const menuOptions = React.useMemo(() => {
        const options = [] as any[];
        if(acctContext.authStatus === 'LoggedIn') {
            options.push({ name: 'Report', icon: ErrorIcon, onClick: () => onReportContent(id) })
            if (username === acctContext.user.username) {
                options.push({ name: 'Edit', icon: PencilIcon, onClick: onEditLog })
                options.push({ name: 'Remove', icon: RemovePostIcon, onClick: () => onRemoveLog(id) })
            }
            if (new Set(acctContext.user.appRoles).has('ADMIN')) {
                options.push({ name: 'DEL (Admin)', icon: RemovePostIcon, onClick: () => onRemoveLog(id) })
            }
        }
        return options;
    }, [acctContext.authStatus, acctContext.user.appRoles, acctContext.user.username, id, onEditLog, onRemoveLog, onReportContent, username])

    const primaryHeading = React.useMemo(() => {
        if (category === 'Flower' || category === 'PreRoll' || category === 'Cartridge') return strainName;
        if (category === 'Concentrate' || category === 'Topical' || category === 'Edible') return productName;
    }, [category, productName, strainName])

    const secondaryHeading = React.useMemo(() => {
        if (category === 'Flower') return null;
        if (category === 'Concentrate' || category === 'Topical' || category === 'Edible' || category === 'PreRoll' || category === 'Cartridge') return brandName;
    }, [brandName, category])
    
    const cardSubheading = React.useMemo(() => {
        if (mgs) return `${strain} - ${mgs} mgs ${cannabinoid}`;
        if (percentage) return `${strain} - ${percentage}% ${cannabinoid}`; 
        return `${strain} - ${cannabinoid}`;
    }, [percentage, mgs, cannabinoid, strain])

    return (
        <div className="flex flex-row justify-between my-5">
            <span className="flex">
                <Icon styling="h-9 w-9 ml-4 mr-3"/>
                <div className="flex flex-col">
                    <div className='flex flex-row'>
                        <Text bold text={primaryHeading || ''} />
                        {secondaryHeading && <Text text={`- ${secondaryHeading}` || ''} additionalStyles='ml-1'/>}
                    </div>
                    <Text text={cardSubheading} />
                </div>
            </span>
            <OptionsButton options={menuOptions}/>
        </div>
    )
}

export default StrainCardHeader;