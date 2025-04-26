"use client"


import Image from "next/image";
import "@/styles/style-Login.css"
import { ArrowRight, X, Eye, EyeClosed, UserRound, KeyRound, Undo2 } from 'lucide-react';
import GoogleLogo from "@/public/logo/google-brands.svg"
import LineLogo from "@/public/logo/line-brands.svg"
import LogoWhite from "@/public/logo/logo-white.svg"
import Logo from "@/public/logo/logo-png.png"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/object/object"


export default function Login() {
    const router = useRouter()
    const forgetPassword = () => {
        // ! ไม่ไป ไว้เทส
        router.push("/user/forget-password")
    }

    
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }
    
    const [nextState, setNextState] = useState(false)
    const handleNext = () => {
        setNextState(prev => !prev)
    }
    
    const [registerState, setRegisterState] = useState(false)
    const handleRegister = () => {
        setRegisterState(prev => !prev)
        if (nextState) {
            handleNext()
        }
        if (showPassword) {
            handleShowPassword()
        }
    }


                    const [submitUser, setSubmitUser] = useState<boolean>(false)
                    const submitLogin = () => {
                        setSubmitUser(true)
                    }

                    const [submitNewUser, setSubmitNewUser] = useState<boolean>(false)
                    const submitRegister = () => {
                        setSubmitNewUser(true)
                    }

                    const LoginGoogle = () => {

                    }

                    const LoginLine = () => {

                    }


    return (
        <>
            <div className="section-ps">
                <div className="section-bg">
                    <div className="section-logo">
                        <Image src={Logo} alt="logo-website"/>
                        <h1>ECP Ai</h1>
                    </div>
                    <div className={`section-data ${registerState ? "register" : ""}`}>
                        <div className="form-container">

                            {/* ฟอร์ม Login */}
                            <div className="section-signin">
                                <h1>ลงชื่อใช้งาน</h1>
                                <div className={`form-data ${nextState ? "next" : ""}`}>
                                    <p><UserRound />อีเมล</p>
                                    <div className="input-container">
                                        <input type="text" maxLength={40} placeholder="กรอกอีเมล" />
                                        <button right-title="ล้างอีเมล"><X /></button>
                                    </div>
                                    <p><KeyRound />รหัสผ่าน</p>
                                    <div className="input-container">
                                        <input disabled={!nextState} type={showPassword ? "text" : "password"}  maxLength={40} placeholder="กรอกรหัสผ่าน"/> 
                                        <button right-title={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}>
                                            { showPassword ? <Eye onMouseDown={handleShowPassword}/> : <EyeClosed onMouseDown={handleShowPassword}/> }
                                        </button>
                                    </div>
                                    <span className="forgot-password" onClick={forgetPassword}>ลืมรหัสผ่าน ?</span>
                                </div>
                                <button disabled={submitUser} className={`form-bt ${ nextState ? "submit" : ""}`} type="button" onClick={ !nextState ? handleNext  : submitLogin } >
                                    { !nextState ? <><span>ถัดไป</span><ArrowRight /></> : <>{ submitUser ? <Loading/> : "เข้าสู่ระบบ" }</> }
                                </button>
                                <div className="register-footer">
                                    <span>ยังไม่มีบัญชี ?</span><span className="register-bt" onClick={handleRegister} >ลงทะเบียน</span>
                                </div>
                                <div className="select-login">
                                    <hr />
                                    <span>หรือ</span>
                                    <hr />
                                </div>
                                <div className="section-login-bt">
                                    <button className="google-bt" type="button"><Image src={GoogleLogo} alt="google-logo" onClick={LoginGoogle}/>
                                        ลงชื่อเข้าใช้ด้วย Google</button>
                                    <button className="line-bt" type="button"><Image src={LineLogo} alt="line-logo" onClick={LoginLine}/>
                                        ลงชื่อเข้าใช้ด้วย Line</button>
                                </div>
                            </div>

                            {/* ฟอร์ม Register */}
                            <div className="section-signup">
                                <button className="undo-section" type="button" onClick={handleRegister} left-title="ย้อนกลับ" ><Undo2 /></button>
                                <h1>ลงทะเบียน</h1>
                                <div className="form-data-rg">
                                    <p><UserRound />อีเมล</p>
                                    <div className="input-container">
                                        <input type="text" maxLength={40} placeholder="ที่อยู่อีเมล @rmuti.ac.th" />
                                        <button tabIndex={0}  right-title="ล้างอีเมล"><X /></button>
                                    </div>
                                    <p><KeyRound />รหัสผ่าน</p>
                                    <div className="input-ps">
                                        <div className="input-container">
                                            <input type={showPassword ? "text" : "password"}  maxLength={40} placeholder="กรอกรหัสผ่าน"/> 
                                            <button tabIndex={0}  right-title={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}>
                                                { showPassword ? <Eye onMouseDown={handleShowPassword}/> : <EyeClosed onMouseDown={handleShowPassword}/> }
                                            </button>
                                        </div>
                                        <h5><KeyRound />ยืนยันรหัสผ่าน</h5>
                                        <input className="input-check" type="password"  maxLength={40} placeholder="กรอกรหัสผ่านอีกครั้ง"/> 
                                        <div className="recheck-ps">
                                            <span>* ความยาวไม่น้อยกว่า 8 ตัว</span>
                                            <span>* ตัวอักษร 4 ตัว</span>
                                        </div>
                                    </div>
                                </div>
                                <button disabled={submitNewUser} className={`submit-register ${registerState ? "active" : ""}`} type="button" onClick={submitRegister}>
                                    { submitNewUser ? <Loading/> : "ลงทะเบียน" }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={LogoWhite} alt="logo-white" className="backdrop-logo"/>
            </div>
        </>
    )
}