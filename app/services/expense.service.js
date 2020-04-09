class Expenses {

    constructor() {
        
    }

    createExpense(data) {
        // call data layer take this data and give me id back
        // i will then take the response from data layer and append same data which i got to send back to controller layer

        return {
            ...data,
            _id: '123123123'
        }
    }

}

module.exports = new Expenses();