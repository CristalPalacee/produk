import axios from "axios"
import request from "graphql-request"
import { useEffect, useState } from "react"
import useFetch from "react-fetch-hook"
import {kelasTerbaru} from "./data"
import ReactPaginate from "react-paginate"
import Alquran from "./Alquran"
import { Table,Container } from "react-bootstrap"


const Produk = () => {
const [surat, setSurat] = useState([])
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(17);

// ...

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = surat.slice(indexOfFirstPost, indexOfLastPost);

const paginate = ({ selected }) => {
   setCurrentPage(selected + 1);
};



const getAPI = async () => {
const response = await axios('https://equran.id/api/v2/surat')
setSurat(response.data.data)
console.log(response.data.data)
}




useEffect(() => {
  getAPI()
}, [])

  return (
<div className="text-center fw-bold">
<Container className="mt-4 ">
<Table striped bordered hover size="md">
      <thead>
        <tr>
          <th>NO</th>
          <th>ARAB</th>
          <th>NAMA SURAT</th>
          <th>TEMPAT TURUN</th>
        </tr>
      </thead>
      <tbody>
       {currentPosts.map((surats) => {
    return (
      
        <tr key={surats.id}>
          <td>{surats.nomor}</td>
          <td>{surats.nama}</td>
          <td>{surats.namaLatin}</td>
          <td>{surats.tempatTurun}</td>
        </tr>
   
    )
       })}
      
      </tbody>
    </Table>

    <ReactPaginate
                  onPageChange={paginate}
                  pageCount={Math.ceil(surat.length / postsPerPage)}
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  containerClassName={'pagination justify-content-center'}
                  pageLinkClassName={'page-link'}
                  pageClassName="page-item"
                  previousLinkClassName={'page-link'}
                  nextLinkClassName={'page-link'}
                  activeLinkClassName={'active'}
               />

    </Container>


        

</div>

  )
}
export default Produk