import { IIconProps } from "../../shared-UI-Interfaces"

export const Indica = (props: IIconProps) => (
    <svg className={props.styling || "h-12 w-12"} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="55" height="55" rx="3.5" fill="currentColor" />
        <path d="M21.5661 17.88V15.72H34.4461V17.88L31.4461 18.2C31.4194 19.8267 31.3928 21.4667 31.3661 23.12C31.3661 24.7733 31.3661 26.44 31.3661 28.12V29.56C31.3661 31.2133 31.3661 32.88 31.3661 34.56C31.3928 36.2133 31.4194 37.8667 31.4461 39.52L34.4461 39.84V42H21.5661V39.84L24.5661 39.52C24.6194 37.8933 24.6461 36.2533 24.6461 34.6C24.6461 32.9467 24.6461 31.28 24.6461 29.6V28.12C24.6461 26.4667 24.6461 24.8133 24.6461 23.16C24.6461 21.48 24.6194 19.8267 24.5661 18.2L21.5661 17.88Z" fill="#059033" />
        <rect x="0.5" y="0.5" width="55" height="55" rx="3.5" stroke="#059033" />
    </svg>
);
