/**
 * Created by nan on 2017/11/28.
 */




//非空验证
$('input[type="button"]').click(function () {
    var login = $('input[name="login"]').val();
    var pwd = $('input[name="pwd"]').val();
    var code = $('input[name="code"]').val();
    if (login == '') {
        ErroAlert('请输入您的账号');
    } else if (pwd == '') {
        ErroAlert('请输入密码');
    } else if (code == '' || code.length != 4) {
        ErroAlert('输入验证码');
    } else {
        //认证中..
//	                fullscreen();
        $('.login').addClass('test'); //倾斜特效
        setTimeout(function () {
            $('.login').addClass('testtwo'); //平移特效
        }, 300);
        setTimeout(function () {
            $('.authent').show().animate({ right: -320 }, {
                easing: 'easeOutQuint',
                duration: 600,
                queue: false
            });
            $('.authent').animate({ opacity: 1 }, {
                duration: 200,
                queue: false
            }).addClass('visible');
        }, 500);

        //TODO
        // SetToken("1123");
        // window.location.href='index.html';

        AJAX({userName:login,userPwd:pwd},"/login",function (rsp) {
            //ajax返回
            //认证完成
            setTimeout(function () {
                $('.authent').show().animate({ right: 90 }, {
                    easing: 'easeOutQuint',
                    duration: 600,
                    queue: false
                });
                $('.authent').animate({ opacity: 0 }, {
                    duration: 200,
                    queue: false
                }).addClass('visible');
                $('.login').removeClass('testtwo'); //平移特效
            }, 2000);
            setTimeout(function () {
                $('.authent').hide();
                $('.login').removeClass('test');
                if (rsp.codeId == '0000') {
                    //登录成功
                    $('.login div').fadeOut(100);
                    $('.success').fadeIn(1000);
                    $('.success').html(rsp);
                    //跳转操作
                    window.location.href='../index.html';

                    SetToken(rsp.data.userId);
                    SetUserPro(rsp.data.userProject);
                    SetUserType(rsp.data.userType);
                    SetUserName(rsp.data.userName);
                } else {
                    AjaxErro(rsp.message);
                }
            }, 2400);
        });
    }
})