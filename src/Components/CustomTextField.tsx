import { FormInput } from "./Form";
import { TextField } from "@mui/material";
interface props{

    form: FormInput,
    label:string,
    name:'name' | 'phone' | 'email',
    handleFormChange:React.ChangeEventHandler<HTMLInputElement>
    
}


export default function CustomTextField({label,name,form, handleFormChange}:props){

    return (
      <TextField
        error={form[name].length == 0}
        id="standard-basic"
        label={label}
        variant="standard"
        required
        value={form[name]}
        onChange={handleFormChange}
        name={name}
      />
    );
}