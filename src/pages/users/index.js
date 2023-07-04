import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";


import axios from "axios";

//fetch with "getServerSideProps"
export async function getServerSideProps() {

    //http request
    const req  = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/users`)
    const res  = await req.data.data.data

    return {
      props: {
          users: res // <-- assign response
      },
    }
  }


export default function santri(props) {
	const { users } = props;
	return (
		<>
			<div>
				<form className="flex-row-reverse d-flex mb-3">
					<input
						className="form-control me-2 search"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button className="btn btn-outline-success mx-2" type="submit">
						Search
					</button>
				</form>

				<table className="table table-hover">
					<thead className="justify-content text-center table-success">
						<tr>
							<th scope="col">#id</th>
							<th scope="col">Name</th>
							<th scope="col">Gender</th>
							<th scope="col">Status</th>
							<th scope="col">Room</th>
							<th scope="col">Division</th>
							<th scope="col">Edit</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>
					<tbody className="justify-content text-center">
					{ users.map((post) => (
                                        <tr key={ post.id }>
                                            <td>{ post.name }</td>
                                            <td>{ post.email }</td>
											<td>{ post.password }</td>
                                            <td className="text-center">
                                                <button className="btn btn-sm btn-primary border-0 shadow-sm mb-3 me-3">EDIT</button>
                                                <button className="btn btn-sm btn-danger border-0 shadow-sm mb-3">DELETE</button>
                                            </td>
                                        </tr>
                                    )) }

					</tbody>
					
				</table>
				<nav>
					<ul className="pagination justify-content-end">
						<li className="page-item">
							<a className="page-link" href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="#">
								1
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="#">
								2
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="#">
								3
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="#" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
