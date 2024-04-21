// import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import JobList from "../components/JobList";
// import { companyByIdQuery } from "../lib/graphql/queries";
import { useCompany } from "../lib/graphql/hooks";

function CompanyPage() {
  const { companyId } = useParams();
  const { company, loading, error } = useCompany(companyId);

  console.log("[CompanyPage]", { company, loading, error });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="has-text-danger">Data unavailable</div>;
  }

  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
      <h2 className="title is-5">Jobs at {company.name}</h2>
      <JobList jobs={company.jobs} />
    </div>
  );
}

// function CompanyPage() {
//   const { companyId } = useParams();
//   const [state, setState] = useState({
//     company: null,
//     loading: true,
//     error: false,
//   });

//   useEffect(() => {
//     (async () => {
//       try{
//         const company = await getCompany(companyId);
//         setState({ company, loading: false, error: false })
//       }catch(err){
//         setState({ company: null, loading: false, error: true })
//       }
//     })()
//   },[companyId])

//   const { company, loading, error } = state;

//   if(loading){
//     return  <div>Loading...</div>
//   }

//   if(error){
//     return <div className='has-text-dagger'>Data unavailable</div>
//   }

//   return (
//     <div>
//       <h1 className="title">
//         {company.name}
//       </h1>
//       <div className="box">
//         {company.description}
//       </div>
//       <h2 className="title is-5">
//         Jobs at {company.name}
//       </h2>
//       <JobList jobs={company.jobs} /><h2 className="title is-5">
//         Jobs at {company.name}
//       </h2>
//       <JobList jobs={company.jobs} />
//     </div>
//   );
// }

export default CompanyPage;
