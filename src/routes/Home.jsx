import { WrapperHome } from "../Components/Wrapper";
import { Form, InputText, InputSubmit, ErrorItem} from "../Components/Form";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import illustrion from "../assets/illustration.svg";

export default function Root() { 
    const { register, handleSubmit, formState: { errors } } = useForm(); 
    const navigate = useNavigate();

    function onSubmit({namePlace}) {
        navigate(`/place/${namePlace}`)
    }

    return (
        <WrapperHome>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Search weather for your location</h1>
                <InputText placeholder="Enter locations" {...register("namePlace", { required: true })} autoComplete="off"/>
                {errors.namePlace && <ErrorItem>This field is required!</ErrorItem>}
                <InputSubmit type="submit" value="Search" />
            </Form>
            <img src={illustrion} alt="Woman under an umbrella" />
        </WrapperHome>
    )
}
