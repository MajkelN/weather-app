import { useRouteError } from "react-router-dom";
import { WrapperError, ReturnLink } from '../Components/Wrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <WrapperError id="error-page">
            <h2>Oops!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p id="errorMessage">
                <i>{error.statusText || error.message}</i>
            </p>
            <ReturnLink to="/"><FontAwesomeIcon icon={faCircleArrowLeft} /> Return to home page</ReturnLink>
        </WrapperError>
    );
}