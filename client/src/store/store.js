import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import {API_URL} from "../http";
import {useNavigate} from "react-router-dom";
import AnswersService from "../services/AnswersService";
import WordsService from "../services/WordsService";



export default class Store {
    user = {
        nickname: "",
        id: "",
        isActivated:"",
        level: "",
        email: "",
        words: []

    } ;
    answerTest = [];
    answerExam = [];

    possibleWords = [
        {
            _id: "",
            russianWord: "",
            englishWord: ""
        }
    ];
    wordssList=[{
        _id: "",
        russianWord: "",
        englishWord: ""
    }];

    todayWordss=[{
        _id: "",
        accessDays: 0,
        failDays: 0,
        idWord: ""
    }];
    password = "";
    isAuth = false;
    isLoading = false;
    constructor() {
        makeAutoObservable(this);

    }

    setWordsToday(todayWordss){
        this.todayWordss = todayWordss;
    }
    setWordsList(wordssList){
        this.wordssList=wordssList;
    }

    setPossibleWords(possibleWords){
        this.possibleWords = possibleWords;
    }

    setAnswersExam(answerExam){
        this.answerExam = answerExam;
    }

    setAnswersTest(answerTest){
        this.answerTest = answerTest;
    }

    setAuth(isAuth) {
        this.isAuth =isAuth;
    }

    setLoading(isLoading) {
        this.isLoading =isLoading;
    }

    setUser(user){
        this.user = user;
    }


    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);

            localStorage.setItem('nickname', response.data.user.nickname);
            localStorage.setItem('email', response.data.user.email);
            localStorage.setItem('level', response.data.user.level);

        } catch (e) {
            return e;
        }
    }

    async registration(nickname,email, password) {
        try {
            const response = await AuthService.registration(nickname,email,password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            return e;
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            console.log(response)
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            return e;
        }
    }
    async edit(id,nickname,level){
        try {
            const response = await AuthService.edit(id,nickname,level);
            console.log(response)
            this.setAuth(true);
            this.setUser(response.data);
        } catch (e) {
            return e;
        }
    }
    async editPass(id, oldPassword, newPassword){
        try {
            const response = await AuthService.editPass(id, oldPassword, newPassword);
            console.log(response)
        } catch (e) {
            return e;
        }
    }
    async getAnswersTest(num){
        try {
            const response = await AnswersService.answersTest(num);
            console.log(response);
            this.setAnswersTest(response.data);
        } catch (e) {
            return e;
        }
    }
    async getAnswersExam(num){
        try {
            const response = await AnswersService.answersExam(num);
            console.log(response);
            this.setAnswersExam(response.data);
        } catch (e) {
            return e;
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            localStorage.setItem('userId',response.data.user.id)

        } catch (e) {
            return e;
        } finally {
            this.setLoading(false);
        }
    }



    async getPossibleWords(userId){
        try {
            const response = await WordsService.possibleWords(userId);
            console.log(response);
            this.setPossibleWords(response.data);
        } catch (e) {
            return e;
        }
    }

    async deleteWords(userId, wordId){
        try {
            const response = await WordsService.deleteWord(userId,wordId);
            console.log(response);
        } catch (e) {
            return e;
        }

    }

    async addWords(userId, wordId, nextDays) {
        try {
            const response = await WordsService.addWord(userId, wordId, nextDays);
            console.log(response);
            this.setUser(response.data)
        } catch (e) {
            return e;
        }

    }
    async listAllWords(){
        try {
            const response = await WordsService.listWords();
            console.log(response);
            this.setWordsList(response.data)
        } catch (e) {
            return e;
        }
    }

    async listTodayWords(userId){
        try {
            const response = await WordsService.todayWords(userId);
            console.log(response);
            this.setWordsToday(response.data)
        } catch (e) {
            return e;
        }
    }
}