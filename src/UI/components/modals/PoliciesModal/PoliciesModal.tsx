import React from "react";
import ActionButton from "../../buttons/ActionButton/ActionButton"
import Heading from "../../typography/Heading/Heading";
import Text from "../../typography/Text/Text";
import TermsOfService from '../../../../lib/constants/TermsOfService';
import policiesConfig from "../../../../config/policies-config";

interface IPoliciesModalProps {
    policy: string; // terms || privacy
    onClose: () => void;
}

export const PoliciesModal = (props: IPoliciesModalProps) => {
    const document = React.useMemo(() => policiesConfig[props.policy], [])
    const documentSections: string[] = React.useMemo(() => Object.keys(document), [document])
    
    
    return (
        <div className="z-40 h-5/6 w-72 -m-24 border border-transparent rounded-2xl bg-white flex flex-col justify-center items-center dark:bg-slate-800 p-3">
            <div className="w-64 mx-4 overflow-y-scroll">
                <div className=" bg-white w-full flex justify-end sticky -top-1 dark:bg-slate-800">
                    <Heading text='RolldUp Policies' additionalStyles="my-4" />
                    <ActionButton onClick={props.onClose} text='X' appearance="primary" additionalStyles="w-8 m-4"/>
                </div>
                {documentSections.map(section => (
                    <div>
                        <Heading text={section} />
                        <Text text={document[section]} additionalStyles='mb-4' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PoliciesModal