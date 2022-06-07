const { default: axios } = require("axios")

module.exports={
    getPollDataById:getPollDataById,
    castVote:castVote
}

async function getPollDataById(id) {
    //    const res =  await axios.get("url/poll/"+id);
    //    return await res.data;
    return {
            title: 'NEW TITLE', description: 'dgajgbjasnvkabcasncanscncasgadjvbhjdbvbjadbjb  ', result_date: '2 june 2022', pollOption: [
                {
                    id: 1,
                    title: "poll 1"
                },
                {
                    id: 2,
                    title: "poll 2"
                },
                {
                    id: 3,
                    title: "poll 3"
                },
                {
                    id: 4,
                    title: "poll 4"
                }
            ]
        }
}
async function castVote(data) {
    //    const res =  await axios.post("url/poll/"+id,data);
    //    return await res.data;
    return true
}