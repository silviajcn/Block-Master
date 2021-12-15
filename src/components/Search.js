import { useNavigate } from "react-router";
import { useQuery } from '../hooks/useQuery';
import { FaSearch } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl} from "react-bootstrap";
import { ContainerBuscador } from '../styles/Navbar.elements';

export default function Search() {

    const query = useQuery();
    const search = query.get("search");

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <ContainerBuscador>
            <Form className="d-flex" onSubmit={handleSubmit}>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="me-1"
                    aria-label="Search Movies"
                    value={search ?? ""} 
                    onChange={(e) => {
                        const value = e.target.value;
                        history("/?search=" + value)
                    }}
                    />
                <Button bg="warning" variant="warning" className="me-5" type="submit"><FaSearch /></Button>
            </Form>
        </ContainerBuscador>
    )
}