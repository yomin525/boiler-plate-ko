const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name : {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //아이디의 스페이스를 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        minlenth: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //유저가 관리자이거나 일반 사용자 일수 있다. 관리자는 또 유저를 관리할 수 있다.
        type: Number,
        default: 0
    },
    image: String,
    token: { //유효성 관리
        type: String
    },
    tokenExp: { //토큰의 사용기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema) //스키마를 모델로 감싸주는 것

module.exports = {User} //이 모듈을 다른 파일에서도 쓸 수 있게 해준다
