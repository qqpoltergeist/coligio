import $api from "../http";

export default class AnswersService {
    static async answersTest(num){
        return $api.post('/level/correct/exercises', {num})
    }

    static async answersExam(num){
        return $api.post('/level/correct/tests', {num})
    }
}