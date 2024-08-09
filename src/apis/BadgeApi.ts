import config from '../config/config'
import { FetchWrapper } from '../utils/fetch-wrapper/FetchWrapper';

export interface Badge {
    label: string;
    level: string;
    awardedAt: string;
};

export interface BadgeRequirementLevel {
    name: string;
    instruction: string;
};

export interface BadgeRequirement {
    label: string;
    levels: Array<BadgeRequirementLevel>
};

export const getAllBadgesForUser = async (): Promise<Array<Badge>> =>
    await FetchWrapper.get(`${config.EDGE.badgeUrl}/user`);

export const getAllBadgeRequirements = async (): Promise<Array<BadgeRequirement>> =>
    Promise.resolve([
        {
            label: 'Balance',
            levels: [
                {
                    name: 'NOT_APPLICABLE',
                    instruction: 'To unlock post in all categories',
                },
            ],
        },
        {
            label: 'Cartridge',
            levels: [
                {
                    name: 'ONE',
                    instruction: 'To unlock post a cartridge review',
                },
                {
                    name: 'TWO',
                    instruction: 'Review 6 different cartridges to reach level 2',
                },
                {
                    name: 'THREE',
                    instruction: 'Review 11 different cartridges to reach level 3',
                },
            ],
        },
        {
            label: 'CBD',
            levels: [
                {
                    name: 'ONE',
                    instruction: 'To unlock post a CBD review',
                },
                {
                    name: 'TWO',
                    instruction: 'Review 6 different CBDs to reach level 2',
                },
                {
                    name: 'THREE',
                    instruction: 'Review 11 different CBDs to reach level 3',
                },
            ],
        },
        {
            label: 'Concentrate',
            levels: [
                {
                    name: 'ONE',
                    instruction: 'To unlock post a concentrate review',
                },
                {
                    name: 'TWO',
                    instruction: 'Review 6 different concentrates to reach level 2',
                },
                {
                    name: 'THREE',
                    instruction: 'Review 11 different concentrates to reach level 3',
                },
            ],
        },
        {
            label: 'PreRoll',
            levels: [
                {
                    name: 'ONE',
                    instruction: 'To unlock post a pre-roll review',
                },
                {
                    name: 'TWO',
                    instruction: 'Review 6 different pre-rolls to reach level 2',
                },
                {
                    name: 'THREE',
                    instruction: 'Review 11 different pre-rolls to reach level 3',
                },
            ],
        },
        {
            label: 'Edible',
            levels: [
                {
                    name: 'ONE',
                    instruction: 'To unlock post an edible review',
                },
                {
                    name: 'TWO',
                    instruction: 'Review 6 different edibles to reach level 2',
                },
                {
                    name: 'THREE',
                    instruction: 'Review 11 different edibles to reach level 3',
                },
            ],
        },
        {
            label: 'Flower',
            levels: [
                {
                    name: 'ONE',
                    instruction: 'To unlock post a flower review',
                },
                {
                    name: 'TWO',
                    instruction: 'Review 6 different flower strains to reach level 2',
                },
                {
                    name: 'THREE',
                    instruction: 'Review 11 different flower strains to reach level 3',
                },
            ],
        },
        {
            label: 'Greenhorn',
            levels: [
                {
                    name: 'NOT_APPLICABLE',
                    instruction: 'To unlock post 2 reviews',
                },
            ],
        },
        {
            label: "Hi, I'm new here",
            levels: [
                {
                    name: 'NOT_APPLICABLE',
                    instruction: 'To unlock create an account',
                },
            ],
        },
        {
            label: "Indica",
            levels: [
                {
                    name: 'ONE',
                    instruction: 'To unlock post an indica review',
                },
                {
                    name: 'TWO',
                    instruction: 'Review 6 different indica strains to reach level 2',
                },
                {
                    name: 'THREE',
                    instruction: 'Review 11 different indica strains to reach level 3',
                },
            ],
        },
        {
            label: "Sativa",
            levels: [
                {
                    name: 'ONE',
                    instruction: 'To unlock post a sativa review',
                },
                {
                    name: 'TWO',
                    instruction: 'Review 6 different sativa strains to reach level 2',
                },
                {
                    name: 'THREE',
                    instruction: 'Review 11 different sativa strains to reach level 3',
                },
            ],
        },
        {
            label: "Seeing Stars",
            levels: [
                {
                    name: 'ONE',
                    instruction: 'To unlock post 3 reviews',
                },
                {
                    name: 'TWO',
                    instruction: 'Review 8 different things to reach level 2',
                },
                {
                    name: 'THREE',
                    instruction: 'Review 13 different things to reach level 3',
                },
            ],
        },
        {
            label: "Show some Love",
            levels: [
                {
                    name: 'ONE',
                    instruction: 'To unlock love 5 posts',
                },
                {
                    name: 'TWO',
                    instruction: 'Love 10 different posts to reach level 2',
                },
                {
                    name: 'THREE',
                    instruction: 'Love 15 different posts to reach level 3',
                },
            ],
        },
        {
            label: "Topical",
            levels: [
                {
                    name: 'ONE',
                    instruction: 'To unlock post a topical review',
                },
                {
                    name: 'TWO',
                    instruction: 'Review 6 different topicals to reach level 2',
                },
                {
                    name: 'THREE',
                    instruction: 'Review 11 different topicals to reach level 3',
                },
            ],
        },
    ])
