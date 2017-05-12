export const ADD_COUNT = 'ADD_COUNT';
export const RED_COUNT = 'RED_COUNT';

export const addCount = (count) => {
    return {
        type: ADD_COUNT,
        count
    }
}

export const redCount = (count) => {
    return {
        type: RED_COUNT,
        count
    }
}