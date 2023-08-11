import { useState, useEffect } from 'react';
import './DangNhapPage.css';

const switchForm = document.querySelectorAll('.changeForm');


const DangNhapPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [checkPass, setCheckPass] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginMessage, signinMessage] = document.querySelectorAll(".showAlert")


    useEffect(() => {
        if (isLoggedIn) {
            window.location.href = '/home';
        }
    }, [isLoggedIn]);


    const handleLogin = (e) => {
        loginMessage.innerHTML = ""
        e.preventDefault();
        fetch("https://b523-171-251-21-241.ngrok-free.app/auth/login", {
            method: 'POST',
            headers: {
                "ngrok-skip-browser-warning": true,
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                username,
                password
            }),
        })
        .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.message) {
                    // setIsLoggedIn(true);
                    alert("dang nhap thanh cong");
                } else {
                    loginMessage.innerHTML = data.detail;
                }
            });
    }

    const handleSignin = (e) => {
        e.preventDefault();
        if (password === checkPass) {
            fetch("https://b523-171-251-21-241.ngrok-free.app/auth/signup", {
                method: 'POST',
                headers: {
                    "ngrok-skip-browser-warning": true,
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                    username,
                    fullname,
                    password
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.message) {
                        alert("Đăng kí thành công!")
                    }
                    else
                        signinMessage.innerHTML = data.detail;
                });
        }
        else alert("sai")
    }
    const handleLogout = (e) => {
        e.preventDefault();
        fetch("https://b523-171-251-21-241.ngrok-free.app/auth/logout", {
            method: 'POST',
            headers: {
                "ngrok-skip-browser-warning": true,
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.message) {
                    alert("Đăng xuất thành công!")
                }
                else
                    loginMessage.innerHTML = data.detail;
            });
    }
    const handleGetUser = (e) => {
        e.preventDefault();
        fetch("https://b523-171-251-21-241.ngrok-free.app/auth/user/me", {
            headers: {
                "ngrok-skip-browser-warning": true,
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then(response => {
                console.log(response);
                response.json()
            })
            .then(data => {
                console.log(data);
            });
    }

    return (
        <div className="loginAndRegister">
            <div className="loginPage" >
                <h1>Login Form</h1>
                <form action="https://7828-171-244-168-210.ngrok-free.app/auth/login" method="post" id='frmLogin'>
                    <label htmlFor="username">Tên đăng nhập:</label>
                    <input className="username" type="text" name="username" placeholder="Tên người dùng"
                        onChange={e => setUsername(e.target.value)} required />
                    <label htmlFor="password">Mật khẩu:</label>
                    <input className="password" type="password" name="password" placeholder="Mật khẩu"
                        onChange={e => setPassword(e.target.value)} required />
                    <input type="submit" value="Đăng nhập" onClick={handleLogin} />
                    <label className="showAlert"></label>
                </form>
                <button className='changeForm'>Chưa có tài khoản? Tạo tài khoản mới</button>
                <button className='changeForm' onClick={handleLogout}>Đăng xuất</button>
                <button className='changeForm' onClick={handleGetUser}>lấy thông tin người dùng</button>
            </div>
            <div className="signupPage" >
                <h1>SignUp Form</h1>
                <form action="https://7828-171-244-168-210.ngrok-free.app/" method="post" id='frmSignUP'>
                    <label htmlFor="fullName">Họ Tên:</label>
                    <input className="fullName" type="text" name="fullName" placeholder="Họ Tên"
                        required onChange={e => setFullname(e.target.value)} />
                    <label htmlFor="username">Tên đăng nhập:</label>
                    <input className="username" type="text" name="username" placeholder="Tên người dùng"
                        required onChange={e => setUsername(e.target.value)} />
                    <label htmlFor="password">Mật khẩu:</label>
                    <input className="password" type="password" name="password" placeholder="Mật khẩu"
                        required onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="password"> Xác Nhận Mật Khẩu:</label>
                    <input className="password" type="password" name="password" placeholder="Xác Nhận Mật khẩu"
                        required onChange={e => setCheckPass(e.target.value)} />
                    <input type="submit" value="Đăng Ký" onClick={handleSignin} />
                    <label className="showAlert"></label>
                </form>
                <button className='changeForm' >Đã có tài khoản? Đăng nhập ngay</button>
            </div>
        </div>
    );
};

export default DangNhapPage;