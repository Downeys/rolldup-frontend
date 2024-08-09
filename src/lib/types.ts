export interface Specification<T> {
    isSatisfiedBy: (entity: T) => boolean;
}

export interface Strain {
    id?: number;
    name?: string;
    category: string;
    strain: string;
}

export interface Brand {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    name: string;
}

export interface PurchaseLocation {
    id: number;
    name: string;
}

export interface LogOwner {
    username: string;
    rank: string;
    profilePic: string;
}

export interface CommentOwner {
    id: number;
    username: string;
}

export interface Comment {
    id: number;
    message: string;
    owner: CommentOwner;
}

export interface StrainLog {
    id: number;
    rating: number;
    review?: string;
    pictureUrl: string;
    owner: LogOwner;
    strain: Strain;
    brand: Brand;
    product: Product;
    purchaseLocation: PurchaseLocation;
    cannabinoid: string;
    percentage: number;
    mgs: number;
    timeLogged: string;
    comments: Comment[];
    commentCount: number;
    favoriteCount: number;
    isFavorite: boolean;
    isBookmarked: boolean;
}