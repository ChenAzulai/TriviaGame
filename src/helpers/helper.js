export const shuffleAns = (que) => {
    if (!que) {
        return [];
    }
    const ans = [
        que.correct_answer,
        ...que.incorrect_answers,
    ];
    return ans.map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
};