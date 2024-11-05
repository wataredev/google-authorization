import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'
 
function GoogleLoginButton({setName, setEmail, setImage, setIsActive}) {
    return(
        <>
            <GoogleLogin
            onSuccess={(response) => {
                const decoded = jwtDecode(response?.credential)
                console.log(decoded)

                const { name, email, picture } = decoded;
                    setName(name);
                    setEmail(email);
                    setImage(picture);
                    setIsActive(true);
            }}
            // onError={}
            
            />
        </>
    )
}

export default GoogleLoginButton