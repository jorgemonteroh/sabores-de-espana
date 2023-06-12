import React from 'react'
import { googleImg } from "../assets";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { addUsuario, deleteUsuario } from "../redux/counterSlice";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth()
    const provider = new GoogleAuthProvider();

    const userLogin = (e) => {
        e.preventDefault()
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const user = (result.user)
            dispatch(addUsuario({
                _uid: user.uid,
                nombre: user.displayName,
                correo: user.email,
                pfp: user.photoURL
            }))
            setTimeout(() => {
                navigate('/')
            }, 1500); 
        }).catch((error) => {
            // Handle Errors here.
            console.log(error)
            // ...
        });
    }

    const userLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            toast.success("Sesión cerrada correctamente")
            dispatch(deleteUsuario())
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
    }

    return (
        <div>
            <div className='w-full flex flex-col items-center justify-center gap-10 py-16'>
                <div className='w-full flex items-center justify-center gap-14'>
                    <div onClick={userLogin} className='w-64 h-14 text-base tracking-wide border-[2px] border-slate-400 rounded-md flex items-center justify-center gap-2
                    hover:border-green-400 hover:bg-slate-100 cursor-pointer duration-300'>
                        <img src={googleImg} alt='googleImg' className='w-9' />
                        <span className='text-sm text-slate-500'>Iniciar sesión con Google</span>
                    </div>
                    <button onClick={userLogout} className='w-36 h-14 text-base tracking-wide border-[2px] bg-black text-white rounded-md flex items-center justify-center gap-2
                    hover:border-slate-400 hover:bg-green-400 cursor-pointer duration-300'>Cerrar Sesión</button>
                </div>
            </div>
            <ToastContainer
                position='top-left'
                autoClose={1800}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                closeOnClick
                pauseOnFocusLoss
                pauseOnHover
                draggable
                theme='dark'
            />
        </div>
    )
}

export default Login