import $api from "../http";

export default class WordsService {
    static async possibleWords(userId){
        return $api.post('/dictionary/personal/words/possible', {userId})
    }

    static async todayWords(userId){
        return $api.post('/dictionary/personal/words/today', {userId})
    }

    static async addWord(userId,wordId,nextDays){
        return $api.post('/dictionary/personal/add/one', {userId,wordId,nextDays})
    }

    static async deleteWord(userId,wordId){
        return $api.post('/dictionary/personal/delete', {userId, wordId})
    }

    static async listWords(){
        return $api.get('/dictionary/main/words')
    }

}