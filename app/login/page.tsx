"use client"
import FormButton from "@/components/form-Button";
import FormInput from "@/components/form-input";

export default function Login(){

  const onClick= async ()=>{
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username: 'API ROUTE TEST',
        passwoerd: '123456789'
      })
    });
    console.log("response", await response.json())
  }
  return <>
  <form>
    <FormInput type="text" placeholder="Email" isRequired={true} errors={[]}/>
    <FormInput type="password" placeholder="Password" isRequired={true} errors={[]}/>
    <FormButton type="button" label="LOGIN"/>  
    <span onClick={onClick}> 임시 버튼 대용 </span> 
  </form>
  </>
}