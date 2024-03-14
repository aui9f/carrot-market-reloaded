interface IFormInputProps{
  type: 'submit' | 'reset' | "button" | undefined
  label: string
  
  errors?: string[]
}
export default function FormButton({type,label}: IFormInputProps){
  return (
    <div>
      <button type={type} >{label}</button>
      {/* {errors?.map((err, index)=><span key={index}>{err}</span>)} */}
    </div>
  )
}