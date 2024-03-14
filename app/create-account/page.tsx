import Link from "next/link";
import { Input } from "postcss";
// import FormInput from "@/app/components/form-input"

export default function CreateAccount(){
  return <div className="flex flex-col gap-8">
    <div>
    <h1>🌜 달나라</h1>
    <h2>Fill in the form below to join</h2>
  </div>

  <form>
    
    {/* <div>
      <input type="text" />
      <span>ERROR</span>
    </div> */}
    {/* <FormInput type="text" placeholder="User Name" isRequired={true} errors={[]}/> */}
    
    <button>Create Account</button>
  </form>
  
  <div></div>
  
  <div>
    <Link href="/sms">
      <span>icon</span>
      <span>Sign up with SMS</span>
    </Link>
  </div>

  </div>

}