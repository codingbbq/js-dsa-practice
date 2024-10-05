// you are givin an array of objects, you need to group them by their value

type Input = {
    type: string;
    error: string;
}[];

type Output = {
    [key: string]: string[];
};

// Input
const input: Input = [
    { 
        type: "notFound",
        error: "The resources you are looking for is not found"
    },
     {
        type: "notFound",
        error: "404 Error thrown"
     },
     {
        type: "serverError",
        error: "500 Error thrown"
     },
     {
        type: "notFound",
        error: "The page is not found"
     },
     {
        type: "serverError",
        error: "Internal server error"
     }
];

// Output
const output: Output = {
    "notFound": [
        "The resources you are looking for is not found",
        "404 Error thrown",
        "The page is not found"
    ],
    "serverError": [
        "500 Error thrown",
        "Internal server error"
    ]
}

const groupByType = (input: Input) : Output => {
    const output: Output = {};

    for(const item of input) {
        if(!output[item.type]) {
            output[item.type] = [];
        }
        output[item.type].push(item.error);
    }

    return output;
}

const groupByReduce = (input: Input) : Output => {
    return input.reduce((acc: Output, item) => {
        if(!acc[item.type]) {
            acc[item.type] = [];
        }
        acc[item.type].push(item.error);
        return acc;
    }, {});
}

console.log(groupByReduce(input));