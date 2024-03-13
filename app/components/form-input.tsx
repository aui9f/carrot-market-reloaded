interface IFormInputProps{
  type: string
  placeholder: string
  isRequired: boolean
  errors: string[]
}
export default function FormInput({type, placeholder, isRequired, errors}: IFormInputProps){
  return (
    <div>
      <input type={type} placeholder={placeholder} required={isRequired}/>
      {errors?.map((err, index)=><span key={index}>{err}</span>)}
    </div>
  )
}