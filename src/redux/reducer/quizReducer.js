const initialState = {
    quiz: [
        {
            title: 'What is 1 + 1?',
            options: ['2', '3', '4', '5'],
            rightAnswer: 1
        }
    ]
}

const quizReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_QUIZ':
            return {
                ...state,
                quiz: [...state.quiz, action.quiz]
            }
        default:
            return state
    }
}

export default quizReducer;