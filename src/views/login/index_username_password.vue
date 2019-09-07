<template>
    <div>
        <div style="text-align: center;">
            <img src="../../assets/logo2.png" style="width:250px;height: 250px;">
        </div>
        <van-cell-group>
            <van-field
                    v-model="loginForm.username"
                    size="large"
                    clearable
                    label="登录名"
                    label-align="left"
                    placeholder="请输入登录名"
                    :error-message="loginFormErr.usernameErr"/>
            <van-field
                    v-model="loginForm.password"
                    size="large"
                    clearable
                    label="密码"
                    label-align="left"
                    placeholder="请输入密码"
                    type="password"
                    :error-message="loginFormErr.passwordErr"/>
            <van-field
                    v-if="showCode()"
                    v-model="loginForm.code"
                    size="large"
                    center
                    clearable
                    label="验证码"
                    label-align="left"
                    placeholder="请输入验证码"
                    :error-message="loginFormErr.codeErr">
                <div slot="right-icon" style="text-align: center;width:100px;height: 30px;">
                    <van-image
                            width="100%"
                            height="100%"
                            fit="fill"
                            :src="codePic"
                            @click="changeCodePic"/>
                    <!--<img slot="right-icon" src="https://img.yzcdn.cn/vant/cat.jpeg" style="width:80px;height: 24px;">-->
                </div>
                <!--<img slot="right-icon" src="https://img.yzcdn.cn/vant/cat.jpeg" style="width:58px;height: 24px;">-->
                <!--<van-button color="#000" slot="button" size="small" :disabled="time!=60" @click="getCode">{{time==60?'发送验证码':time+' s'}}</van-button>-->
            </van-field>
        </van-cell-group>
        <div style="text-align: center;">
            <van-button color="#d39e5a" style="width: 92%;margin-top: 20px" @click="login">登录</van-button>
        </div>
    </div>
</template>

<script>
    import schema from 'async-validator'
    import {setToken} from '@/utils/auth'
    import * as login from '@/api/login'

    const defaultForm = {
        username: '',
        password: '',
        code: '',
        codeKey: ''
    }
    const defaultFormErr = {
        usernameErr: '',
        passwordErr: '',
        codeErr: '',
    }

    export default {
        data() {
            return {
                loginForm: {
                    username: '',
                    password: '',
                    code: '',
                    codeKey: ''
                },
                loginFormErr: {
                    usernameErr: '',
                    passwordErr: '',
                    codeErr: '',
                },
                codePic: '',
                rules: {
                    username: [
                        {required: true, message: "请输入登录名!"},
                    ],
                    password: [
                        {required: true, message: "请输入密码!"},
                    ],
                    code: [
                        {required: this.showCode(), message: "请输入验证码!"},
                    ],
                },
            }
        },
        methods: {
            showCode() {
                return process.env.VUE_APP_SHOW_CODE === 'true';
            },
            changeCodePic() {
                this.loadCode();
            },
            resetErr() {
                Object.assign(this.loginFormErr, defaultFormErr)
            },
            handleErrors(errors) {
                for (let i in errors) {
                    if (errors[i].field === 'username') {
                        this.loginFormErr.usernameErr = errors[i].message
                    }
                    if (errors[i].field === 'password') {
                        this.loginFormErr.passwordErr = errors[i].message
                    }
                    if (errors[i].field === 'code') {
                        this.loginFormErr.codeErr = errors[i].message
                    }
                }
            },
            login() {
                const validator = new schema(this.rules);
                validator.validate(this.loginForm, async (errors, fields) => {
                    this.resetErr();
                    if (errors) {
                        return this.handleErrors(errors);
                    }
                    // 登录
                    const response = await login.login(this.loginForm)
                    const {token} = response.data;
                    if (token && token != '') {
                        setToken(token)
                        this.$router.replace({path: '/'})
                    } else {
                        this.$toast.fail('登录失败!');
                    }
                }).catch(() => console.log('promise catch err'));
            },
            async loadCode() {
                const response = await login.loadCodePic();
                const {key, url} = response.data
                this.codePic = url;
                this.loginForm.codeKey = key
            },
        },
        created() {
            if (this.showCode()) {
                this.loadCode();
            }
        }
    }
</script>