
// export const getStrainsByPage = (pageNumber) => {
//     let returnVal = [];
//     for (let i = 1; i <= (pageNumber * 10); i++) {
//         if (i <= 24) {
//             returnVal = [...returnVal, composeStrainDetails(i)];
//         }

//     }
//     return returnVal
// }

// export const getStrainsByName = (name) => {
//     let returnVal = [];
//     const filteredStrains = mockStrainIndex.filter(strain => strain.name.toLowerCase().includes(name.toLowerCase()))
//     filteredStrains.forEach((strain) => {
//         returnVal = [...returnVal, composeStrainDetails(strain.id)];
//     })
//     return returnVal;
// }

// export const composeStrainDetails = (id) => {
//     return { ...mockStrainDetails.filter(strain => strain.id === id)[0], name: mockStrainIndex.filter(strain => strain.id === id)[0].name }
// }

interface IStrainDeets {
    name: string;
    category: 'Flower' | 'Concentrate' | 'Edible' | 'Topical' | 'Cartridge' | 'CBD';
    thc: number;
    strain: string;
}


export const mockStrainDetails: IStrainDeets[] = [
    { name: 'Sour Deisel', category: 'Flower', thc: 19, strain: 'Sativa' },
    { name: 'Trainwreck', category: 'Concentrate', thc: 24, strain: 'Hybrid' },
    { name: 'White Widow', category: 'Edible', thc: 20, strain: 'Hybrid' },
    { name: 'Green Crack', category: 'Topical', thc: 21, strain: 'Indica' },
    { name: 'Jack the Ripper', category: 'Cartridge', thc: 19, strain: 'Sativa' },
    { name: 'Strawberry Cough', category: 'CBD', thc: 17, strain: 'Indica' },
    { name: 'Og Kush', category: 'Flower', thc: 19, strain: 'Hybrid' },
    { name: 'Purple Haze', category: 'Edible', thc: 17, strain: 'Sativa' },
    { name: 'AK-47', category: 'Concentrate', thc: 22, strain: 'Hybrid' },
    { name: 'Bue Dream', category: 'Topical', thc: 20, strain: 'Indica' },
    { name: 'Gelato', category: 'Flower', thc: 19, strain: 'Sativa' },
    { name: 'Wedding Cake', category: 'Concentrate', thc: 20, strain: 'Sativa' },
    { name: 'Forbidden Fruit', category: 'Topical', thc: 17, strain: 'Indica' },
    { name: 'Acapulco Gold', category: 'Edible', thc: 19, strain: 'Sativa' },
    { name: 'Chemdawg', category: 'Flower', thc: 18, strain: 'Sativa' },
    { name: 'Double Dream', category: 'Topical', thc: 20, strain: 'Indica' },
    { name: 'Alaskan Thunder Fuck', category: 'Cartridge', thc: 20, strain: 'Sativa' },
    { name: 'Durban Poison', category: 'Concentrate', thc: 19, strain: 'Hybrid' },
    { name: 'Northern Lights', category: 'Edible', thc: 17, strain: 'Sativa' },
    { name: 'G13', category: 'Flower', thc: 19, strain: 'Sativa' },
    { name: 'Jack Herer', category: 'Cartridge', thc: 22, strain: 'Indica' },
    { name: 'Skunk No 1', category: 'Concentrate', thc: 18, strain: 'Sativa' },
    { name: 'Super Lemon Haze', category: 'Flower', thc: 21, strain: 'Hybrid' },
    { name: 'Pineapple Express', category: 'Flower', thc: 19, strain: 'Indica' },
]

export const mockStrainIndex = [
    { id: 1, name: 'Sour Deisel' },
    { id: 2, name: 'Trainwreck' },
    { id: 3, name: 'White Widow' },
    { id: 4, name: 'Green Crack' },
    { id: 5, name: 'Jack the Ripper' },
    { id: 6, name: 'Strawberry Cough' },
    { id: 7, name: 'Og Kush' },
    { id: 8, name: 'Purple Haze' },
    { id: 9, name: 'AK-47' },
    { id: 10, name: 'Bue Dream' },
    { id: 11, name: 'Gelato' },
    { id: 12, name: 'Wedding Cake' },
    { id: 13, name: 'Forbidden Fruit' },
    { id: 14, name: 'Acapulco Gold' },
    { id: 15, name: 'Chemdawg' },
    { id: 16, name: 'Double Dream' },
    { id: 17, name: 'Alaskan Thunder Fuck' },
    { id: 18, name: 'Durban Poison' },
    { id: 19, name: 'Northern Lights' },
    { id: 20, name: 'G13' },
    { id: 21, name: 'Jack Herer' },
    { id: 22, name: 'Skunk No 1' },
    { id: 23, name: 'Super Lemon Haze' },
    { id: 24, name: 'Pineapple Express' }
]

const mockUsers = [
    { username: 'Fuzzy G'},
    { username: 'Master Kush'},
    { username: 'Danky Bud'},
]

export const mockStrainLogs = [
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[0], owner: mockUsers[0], rating: 4, review: "dis sum gud shit" },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[1], owner: mockUsers[2], rating: 2, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[2], owner: mockUsers[1], rating: 3, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[3], owner: mockUsers[1], rating: 5, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[4], owner: mockUsers[2], rating: 1, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[5], owner: mockUsers[1], rating: 2, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[6], owner: mockUsers[0], rating: 3, review: "dis sum gud shit"  },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[7], owner: mockUsers[2] , rating: 4, review: "dis sum gud shit"  },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[8], owner: mockUsers[1], rating: 3, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[9], owner: mockUsers[0], rating: 2, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[10], owner: mockUsers[1], rating: 4, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[11], owner: mockUsers[2], rating: 4, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[12], owner: mockUsers[1], rating: 5, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[13], owner: mockUsers[0], rating: 3, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[14], owner: mockUsers[2], rating: 2, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[15], owner: mockUsers[1], rating: 1, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[16], owner: mockUsers[0], rating: 2, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[17], owner: mockUsers[0], rating: 3, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[18], owner: mockUsers[2], rating: 4, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[19], owner: mockUsers[2], rating: 5, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[20], owner: mockUsers[1], rating: 3, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[21], owner: mockUsers[1], rating: 2, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[22], owner: mockUsers[2], rating: 1, review: "dis sum gud shit"   },
    { pictureUrl: 'https://picsum.photos/200', strain: mockStrainDetails[23], owner: mockUsers[1], rating: 4, review: "dis sum gud shit"   },
]