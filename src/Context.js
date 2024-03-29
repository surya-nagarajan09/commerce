import React,{createContext,useState,useEffect} from "react";
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

// creating product

const ProductContext=createContext();
const ContextProvider=({children})=>{
    const[post,setPost]=useState([]);
    const[cart,setCart]=useState([]);
    const[productLoading,setProductLoading]=useState(false);
    const[login,setLogin]=useState({email:"",password:""});
    const[signUp,setSignUp]=useState({email:"",firstName:"",lastName:"",password:""});
    const[buy,setBuy]=useState([]);
    const[adress,setAdress]=useState({fullName:"",Pincode:"",flat:"",area:"",landmar:"",city:"",state:"",gender:"",time:""});
    const[sort,setSort]=useState('');
    const[signUpMessage,setSignUpMessage]=useState("");
    const[loginMessage,setLoginMessage]=useState("");
    const[disable,setDisabled]=useState(true)

    const reset=()=>{
      setSort("");
    }

  
 
    
    // login form handle
    const urlsign="https://authenticate-commerce.herokuapp.com/signup";
  
   const changedsc=()=>{
     setSort("dsc")
   }

   const changeasc=()=>{
     setSort("asc")
   }
 
    const loginHandle=(e)=>{
      e.preventDefault();
      setLoginMessage(<CircularProgress color="secondary" />)
      const logindata=login;
      if((logindata.email!=="")&&(logindata.password!=="")){
        axios.post("https://authenticate-commerce.herokuapp.com/login",logindata)
       .then((res)=>{
         if(res.status===200)
         {
           sessionStorage.setItem("logged",true)
           sessionStorage.setItem("user",JSON.stringify(logindata))
           setDisabled(false)
           setLoginMessage(<ThumbUpIcon/>)
          }
         
       },(err)=>{
         setLoginMessage(<ThumbDownIcon/>)
       })

      }else{
        setLoginMessage("can't be empty")
      }
       

    }
    // sign up form handle
    const handleSignUp=(e)=>{
      e.preventDefault();
      const{email,firstName,lastName,password}=signUp;
      setSignUpMessage(<CircularProgress color="secondary" />);
      if((email!=="")&&(password!=="")&&(firstName!=="")&&(lastName!=="")&&(password.length>=7)){
       axios.post(urlsign,{
        email:email,
        firstName:firstName,
        lastName:lastName,
        password:password
      }).then((res)=>{
        if(res.status===200){
          setSignUpMessage(`sucessfully signed ✓`);
        }
      },(err)=>{
        if(err){
          setSignUpMessage("User already exist ❌")
        }
      })
    }else{
      setSignUpMessage(`please fill all fileds  and password length gretaer than 8`)
    }

      }
      
    // fetch data
    const addtoBuy=(item)=>{
      setBuy([...buy,item])
     }

    
    useEffect(() => {
        const fetch = async () => {
          setProductLoading(true)
          const resp = await axios.get(`https://commerce-supply.herokuapp.com/${sort}`);
          const data = resp.data;
          setPost(data);
          setProductLoading(false)
        };
        fetch();
      },[sort]);


      useEffect(() => {
        const retireve = window.localStorage.getItem("cartItems");
        var Display = JSON.parse(retireve);
        setCart(Display);
       
      },[]);


      useEffect(()=>{
        const retrieve= window.localStorage.getItem("buyproduct");
        var display= JSON.parse(retrieve);
        setBuy(display)
      },[])
    
 return (
      <ProductContext.Provider value={{post,setPost,cart,setCart,productLoading,setProductLoading,login,setLogin,signUp,setSignUp,loginHandle,handleSignUp,buy,setBuy,addtoBuy,adress,setAdress,changeasc,changedsc,reset,signUpMessage,loginMessage,disable}}>{children}
      </ProductContext.Provider>
  )
}

export { ProductContext, ContextProvider };

