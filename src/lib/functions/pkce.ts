import getPkce from 'oauth-pkce';

export interface PkceChallenge {
    challenge: string,
    verifier: string,
};

export const newPkceChallenge: () => Promise<PkceChallenge> = () => {
    return new Promise<PkceChallenge>((resolve, reject) => {
        getPkce(48, (error, { verifier, challenge }) => {
            if (error) {
                reject(error);
            } else {
                resolve({ challenge, verifier });
            }
        })
    });
};
