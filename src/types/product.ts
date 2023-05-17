export interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
    category:string;
    image: string;
    //this was:
    //rating: {
        //rate: number
        //count: number
    //};

    //this is now:
    rating: Rating;
}

interface Rating{
    rate: number;
    count: number;
}